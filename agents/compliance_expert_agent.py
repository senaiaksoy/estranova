from __future__ import annotations

import json
from typing import Any

from state import ComplianceBlock, EstranovaState, FinalApprover, Violation, append_history, now_iso

from .base import PromptBackedAgent


class ComplianceExpertAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/compliance-agent.md")

    def run(self, state: EstranovaState) -> EstranovaState:
        draft = state["draft"]
        flagged_claims = state.get("flagged_claims", [])
        factcheck_report = state.get("factcheck_report", {})
        risk_level = state.get("risk_level_current", state.get("risk_level_initial", "medium"))
        disclaimer_needed = bool(state.get("disclaimer_needed", True))

        user_payload: dict[str, Any] = {
            "risk_level": risk_level,
            "draft_content": {
                "article": draft.get("article", ""),
                "social_post": draft.get("social_post", ""),
                "newsletter": draft.get("newsletter", ""),
            },
            "flagged_claims": flagged_claims,
            "disclaimer_needed": disclaimer_needed,
            "factcheck_report": factcheck_report,
        }

        try:
            result = self.call_llm_json(
                role="compliance",
                user_payload=json.dumps(user_payload, ensure_ascii=False),
                state_for_logging=state,
            )
        except Exception as exc:
            raise RuntimeError(f"ComplianceExpertAgent LLM call failed: {exc}") from exc

        risk_findings = result.get("risk_findings", [])
        violations: list[Violation] = []
        required_fixes: list[str] = []
        for item in risk_findings:
            violations.append(
                Violation(
                    type=item.get("type", "regulation_risk"),
                    severity=item.get("severity", "medium"),
                    text_ref=item.get("text_ref", ""),
                    rule_id=f"strict.{item.get('type', 'rule')}",
                    fix_suggestion=item.get("fix_suggestion", ""),
                )
            )
            if item.get("fix_suggestion"):
                required_fixes.append(item["fix_suggestion"])

        required_fixes = result.get("required_fixes", required_fixes)

        final_decision_raw = result.get("final_decision", "revizyon_gerekli")
        if final_decision_raw == "yayina_hazir":
            final_decision = "ready_to_publish"
        else:
            final_decision = "revision_required"

        human_review_required = bool(result.get("human_review_required", False))
        if human_review_required:
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        state["violations"] = violations
        state["compliance"] = ComplianceBlock(
            compliance_score=int(result.get("compliance_score", 0)),
            required_fixes=required_fixes,
            final_decision=final_decision,
            final_approver=FinalApprover(type="agent", name=self.name, timestamp=now_iso()),
        )
        state["disclaimer_needed"] = bool(result.get("disclaimer_needed", disclaimer_needed))

        append_history(state, "compliance", f"Compliance LLM karari: {final_decision}.")
        return state
