from __future__ import annotations

from state import ComplianceBlock, EstranovaState, FinalApprover, Violation, append_history, now_iso

from .base import PromptBackedAgent


DISCLAIMER_FRAGMENT = "doktorunuza"
BANNED_TERMS = [
    "mucize",
    "kesin cozum",
    "iyilestirir",
    "hastaligi bitirir",
    "garanti eder",
    "tamamen tedavi eder",
    "kesin sonuc verir",
]
PLAZA_TERMS = ["focuslanmak", "push etmek", "aksiyon almak", "case bazli", "skalalamak", "optimize etmek"]


class ComplianceExpertAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("compliance_expert_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        text_blob = " ".join(state["draft"].values()).lower()
        violations: list[Violation] = []
        required_fixes: list[str] = []

        for term in BANNED_TERMS:
            if term in text_blob:
                violations.append(
                    Violation(
                        type="overpromise",
                        severity="critical",
                        text_ref=term,
                        rule_id="red_flag.overpromise",
                        fix_suggestion=f"`{term}` ifadesini kaldir ve notr bir cumle kullan.",
                    )
                )
                required_fixes.append(f"`{term}` ifadesini kaldir.")

        if DISCLAIMER_FRAGMENT not in text_blob:
            violations.append(
                Violation(
                    type="disclaimer_gap",
                    severity="critical",
                    text_ref="disclaimer_missing",
                    rule_id="red_flag.disclaimer",
                    fix_suggestion="Metne standart yasal uyari ve 'Doktorunuza danisin' yonlendirmesini ekle.",
                )
            )
            required_fixes.append("Standart disclaimer ve 'Doktorunuza danisin' ifadesini ekle.")

        for term in PLAZA_TERMS:
            if term in text_blob:
                violations.append(
                    Violation(
                        type="ad_language",
                        severity="critical",
                        text_ref=term,
                        rule_id="red_flag.plaza",
                        fix_suggestion=f"`{term}` yerine sade Turkce kullan.",
                    )
                )
                required_fixes.append(f"`{term}` yerine sade Turkce kullan.")

        for paragraph in state["draft"]["article"].splitlines():
            if paragraph.count(" ") >= 19:
                violations.append(
                    Violation(
                        type="readability_risk",
                        severity="medium",
                        text_ref=paragraph[:80],
                        rule_id="red_flag.long_sentence",
                        fix_suggestion="Cumleyi 20 kelimenin altina indirecek sekilde bol.",
                    )
                )
                required_fixes.append("Uzun cumleleri kisalt.")
                break

        compliance_score = max(0, 100 - (len(violations) * 18))
        decision = "ready_to_publish" if not any(v["severity"] == "critical" for v in violations) else "revision_required"

        if decision != "ready_to_publish":
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        state["violations"] = violations
        state["compliance"] = ComplianceBlock(
            compliance_score=compliance_score,
            required_fixes=required_fixes,
            final_decision=decision,
            final_approver=FinalApprover(type="agent", name=self.name, timestamp=now_iso()),
        )
        append_history(state, "compliance", f"Compliance karari: {decision}.")
        return state
