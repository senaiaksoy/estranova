from __future__ import annotations

from state import EstranovaState, FactcheckReport, FlaggedClaim, append_history

from .base import PromptBackedAgent


class MedicalCheckerAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("medical_checker_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        flagged: list[FlaggedClaim] = list(state.get("flagged_claims", []))
        summary: list[dict[str, str]] = []
        article = state["draft"]["article"].lower()

        for claim in state["key_claims"]:
            status = "supported"
            if claim["id"] not in {trace["claim_id"] for trace in state["claim_trace"]}:
                status = "unsupported"
                flagged.append(
                    FlaggedClaim(
                        claim_id=claim["id"],
                        reason="Claim trace eksik.",
                        severity="high",
                        text_ref="draft",
                    )
                )
            claim["status"] = status
            summary.append({"claim_id": claim["id"], "status": status})

        for banned in ["mucize", "kesin cozum", "tamamen tedavi", "hastaligi bitirir"]:
            if banned in article:
                flagged.append(
                    FlaggedClaim(
                        claim_id="unsupported_from_text",
                        reason=f"Kanita dayanmayan abartili ifade bulundu: {banned}",
                        severity="high",
                        text_ref="article",
                    )
                )

        state["flagged_claims"] = flagged
        state["factcheck_report"] = FactcheckReport(
            key_claims_summary=summary,
            notes="Iddia-kanit uyumu kontrol edildi. Abartili veya kaynak disi ifade aranip isaretlendi.",
        )
        if any(item["severity"] == "high" for item in flagged):
            state["human_review_required"] = True
            state["risk_level_current"] = "high"
        append_history(state, "validation", f"{len(flagged)} flagged claim bulundu.")
        return state
