from __future__ import annotations

from config.pipeline_limits import COMPLIANCE_SCORE_PUBLISH_OK

from state import EstranovaState, append_history

from .base import PromptBackedAgent


class OrchestratorAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/orchestrator-agent.md")

    def route_after_writer(self, state: EstranovaState) -> str:
        return "validation" if state["risk_level_current"] in {"medium", "high"} else "compliance"

    def route_after_compliance(self, state: EstranovaState) -> str:
        if state.get("best_effort_publish"):
            return "publisher"

        comp = dict(state.get("compliance", {}))
        score = int(comp.get("compliance_score", 0) or 0)

        if score >= COMPLIANCE_SCORE_PUBLISH_OK:
            comp["final_decision"] = "ready_to_publish"
            state["compliance"] = comp  # type: ignore[assignment]
            return "publisher"

        std = comp.get("standard_decision") or {}
        raw_dec = std.get("decision")
        if raw_dec is None:
            raw_dec = "ready_to_publish"

        needs_revision = raw_dec == "needs_revision" or comp.get("final_decision") in (
            "revision_required",
            "rejected",
        )
        if score < COMPLIANCE_SCORE_PUBLISH_OK:
            needs_revision = True

        if needs_revision:
            return "writer"

        comp["final_decision"] = "ready_to_publish"
        state["compliance"] = comp  # type: ignore[assignment]
        return "publisher"

    def route_after_human_review(self, state: EstranovaState) -> str:
        fd = state["compliance"]["final_decision"]
        return "publisher" if fd in ("ready_to_publish", "ready_to_publish_best_effort") else "end"

    def mark_start(self, state: EstranovaState) -> EstranovaState:
        append_history(state, "start", "start")
        return state

    def human_review(self, state: EstranovaState) -> EstranovaState:
        violations = state.get("violations", []) or []
        has_critical = any(v.get("severity") == "critical" for v in violations)
        if has_critical:
            fixes = []
            article = state["draft"]["article"]
            for violation in violations:
                if violation.get("fix_suggestion"):
                    fixes.append(violation["fix_suggestion"])
                text_ref = violation.get("text_ref") or ""
                if text_ref:
                    article = article.replace(text_ref, "")
            state["draft"]["article"] = article
            state["compliance"]["required_fixes"] = fixes
            state["compliance"]["final_decision"] = "revision_required"
        else:
            state["human_review_required"] = False
        append_history(state, "human_review", "human_review")
        return state
