from __future__ import annotations

from state import EstranovaState, append_history

from .base import PromptBackedAgent


class OrchestratorAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/orchestrator-agent.md")

    def route_after_writer(self, state: EstranovaState) -> str:
        return "validation" if state["risk_level_current"] in {"medium", "high"} else "compliance"

    def route_after_compliance(self, state: EstranovaState) -> str:
        if state["compliance"]["final_decision"] == "ready_to_publish" and not state["human_review_required"]:
            return "publisher"
        return "human_review"

    def route_after_human_review(self, state: EstranovaState) -> str:
        return "publisher" if state["compliance"]["final_decision"] == "ready_to_publish" else "end"

    def mark_start(self, state: EstranovaState) -> EstranovaState:
        append_history(state, "brief", f"Akis baslatildi. Risk: {state['risk_level_current']}.")
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
            # Kritik risk yoksa, yayın karari compliance'dan gelir; burada degistirmeyiz.
            state["human_review_required"] = False
        append_history(state, "human_review", f"Human review sonucu: {state['compliance']['final_decision']}.")
        return state
