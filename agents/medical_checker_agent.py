from __future__ import annotations

import json
from typing import Any

from state import EstranovaState, append_history

from .base import PromptBackedAgent


def _truncate(text: str, max_chars: int) -> str:
    if len(text) <= max_chars:
        return text
    return text[:max_chars] + "..."


class MedicalCheckerAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/factcheck-agent.md")

    def run(self, state: EstranovaState) -> EstranovaState:
        # Prepare compact inputs to reduce token load.
        article = state["draft"]["article"]
        social_post = state["draft"]["social_post"]
        newsletter = state["draft"]["newsletter"]

        approved_sources = state.get("approved_sources", [])
        key_claims = state.get("key_claims", [])
        claim_trace = state.get("claim_trace", [])
        risk_level = state.get("risk_level_current", state.get("risk_level_initial", "medium"))

        user_payload: dict[str, Any] = {
            "draft_content": {
                "article": _truncate(article, 8000),
                "social_post": _truncate(social_post, 3000),
                "newsletter": _truncate(newsletter, 3000),
            },
            "claim_trace": claim_trace,
            "approved_sources": approved_sources[:8],
            "key_claims": key_claims[:12],
            "risk_level": risk_level,
        }

        try:
            result = self.call_llm_json(
                role="checker",
                user_payload=json.dumps(user_payload, ensure_ascii=False),
                state_for_logging=state,
            )
        except Exception as exc:
            raise RuntimeError(f"MedicalCheckerAgent LLM call failed: {exc}") from exc

        # Update key claim statuses.
        by_id = {item["id"]: item for item in result.get("key_claims", [])}
        for claim in state["key_claims"]:
            if claim["id"] in by_id:
                claim["status"] = by_id[claim["id"]].get("status", "draft")

        state["flagged_claims"] = result.get("flagged_claims", [])

        # factcheck_report in state schema expects list+notes.
        state["factcheck_report"] = {
            "key_claims_summary": result.get("key_claims", []),
            "notes": result.get("factcheck_report", ""),
        }

        human_review_signal = bool(result.get("human_review_required", False))
        if human_review_signal:
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        append_history(state, "validation", "validation done")
        return state
