from __future__ import annotations

from config.pipeline_limits import (
    CIRCUIT_BREAKER_AFTER_REVISION_ROUTES,
    MAX_REVISION_ITERATIONS,
)

from state import EstranovaState, append_history

from .base import PromptBackedAgent


class OrchestratorAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/orchestrator-agent.md")

    def route_after_writer(self, state: EstranovaState) -> str:
        return "validation" if state["risk_level_current"] in {"medium", "high"} else "compliance"

    def _route_to_publisher_best_effort(self, state: EstranovaState, reason: str) -> str:
        """Revizyon limiti veya circuit breaker: mevcut taslagi yayina en iyi hal olarak kapat."""
        state["pipeline_halt_reason"] = reason
        state["best_effort_publish"] = True
        state["human_review_required"] = False
        fixes = list(state.get("compliance", {}).get("required_fixes", []) or [])
        note = (
            f"[{reason}] Revizyon limiti veya guvenlik kesicisi: icerik mevcut haliyle kaydedildi. "
            "Manuel editor kontrolu onerilir."
        )
        fixes.append(note)
        comp = dict(state.get("compliance", {}))
        comp["required_fixes"] = fixes
        comp["final_decision"] = "ready_to_publish_best_effort"
        comp.setdefault("compliance_score", int(comp.get("compliance_score", 0) or 0))
        state["compliance"] = comp  # type: ignore[assignment]
        append_history(
            state,
            "orchestrator",
            f"Akis sonlandirildi ({reason}); publisher'a en iyi hal ile yonlendiriliyor.",
        )
        return "publisher"

    def route_after_compliance(self, state: EstranovaState) -> str:
        if state["compliance"]["final_decision"] == "ready_to_publish" and not state["human_review_required"]:
            return "publisher"

        revision_routes = int(state.get("compliance_revision_route_count", 0))
        if revision_routes >= CIRCUIT_BREAKER_AFTER_REVISION_ROUTES:
            return self._route_to_publisher_best_effort(state, "circuit_breaker")

        current_iteration = int(state.get("revision_iteration", 0))
        max_iterations = int(state.get("max_revision_iterations", MAX_REVISION_ITERATIONS))
        if current_iteration < max_iterations:
            state["revision_iteration"] = current_iteration + 1
            state["compliance_revision_route_count"] = revision_routes + 1
            append_history(
                state,
                "revision_loop",
                f"Revizyon dongusu basladi ({state['revision_iteration']}/{max_iterations}).",
            )
            return "writer"

        return self._route_to_publisher_best_effort(state, "max_revisions")

    def route_after_human_review(self, state: EstranovaState) -> str:
        fd = state["compliance"]["final_decision"]
        return "publisher" if fd in ("ready_to_publish", "ready_to_publish_best_effort") else "end"

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
