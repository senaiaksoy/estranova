from __future__ import annotations

import json
import re
from typing import Any

from config.pipeline_limits import (
    COMPLIANCE_LONG_SENTENCE_WORDS,
    COMPLIANCE_SCORE_REJECT_BELOW,
    MIN_COMPLIANCE_SCORE_PUBLISH,
)

from .compliance_master_validation import run_estranova_master_checks

# CLAUDE / AGENTS — plaza ve is Ingilizcesi (deterministik tespit; skor dusurulur).
PLAZA_LANGUAGE_SUBSTRINGS: tuple[str, ...] = (
    "aksiyon al",
    "fokuslan",
    "fokus etmek",
    "set etmek",
    "push et",
    "case bazlı",
    "case bazli",
    "optimize et",
    "optimizasyon",
    "stakeholder",
    "deadline",
    "timeline",
    "rollout",
    "align etmek",
    "workshop",
    "briefing",
    "skalala",
)

from state import (
    ComplianceBlock,
    ComplianceStandardDecision,
    EstranovaState,
    FinalApprover,
    Violation,
    append_history,
    now_iso,
)

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
            "topic": state.get("topic", ""),
            "risk_level": risk_level,
            "article_outline": state.get("article_outline", []),
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

        # Deterministic zero-risk guardrails that override model output when needed.
        article = draft.get("article", "")
        social_post = draft.get("social_post", "")
        newsletter = draft.get("newsletter", "")
        all_text = "\n".join([article, social_post, newsletter])

        auto_reject = False
        score = int(result.get("compliance_score", 0))
        if result.get("score") is not None:
            score = int(result["score"])

        master_violations, master_score_cap = run_estranova_master_checks(article)
        for mv in master_violations:
            violations.append(
                Violation(
                    type=mv["type"],
                    severity=mv["severity"],
                    text_ref=mv["text_ref"],
                    rule_id=mv["rule_id"],
                    fix_suggestion=mv["fix_suggestion"],
                )
            )
            required_fixes.append(mv["fix_suggestion"])
        if master_score_cap is not None:
            score = min(score, master_score_cap)
            auto_reject = True

        disclaimer_signals = ["bilgilendirme amaçlıdır", "bilgilendirme amaclidir", "doktorunuza"]
        has_disclaimer = any(signal in all_text.lower() for signal in disclaimer_signals)
        if disclaimer_needed and not has_disclaimer:
            auto_reject = True
            required_fixes.append("Yasal uyari metni eksik: disclaimer zorunlu.")
            violations.append(
                Violation(
                    type="disclaimer_gap",
                    severity="critical",
                    text_ref="draft_content",
                    rule_id="strict.disclaimer_required",
                    fix_suggestion="Metin sonuna standart yasal uyarıyı ekleyin.",
                )
            )

        risky_terms = ["destekler", "iyileştirir", "iyilestirir"]
        lowered = all_text.lower()
        for term in risky_terms:
            if term in lowered:
                violations.append(
                    Violation(
                        type="overpromise",
                        severity="critical",
                        text_ref=term,
                        rule_id="strict.risky_claim_words",
                        fix_suggestion=f"'{term}' yerine 'yardimci olabilir' veya 'iliskili olabilir' kullanin.",
                    )
                )
                required_fixes.append(
                    f"Riskli ifade bulundu: '{term}'. Yumusatilmis ifade ile degistirin."
                )

        plaza_hits: list[str] = []
        for frag in PLAZA_LANGUAGE_SUBSTRINGS:
            if frag in lowered:
                plaza_hits.append(frag)
        if plaza_hits:
            score = min(score, 62)
            auto_reject = True
            required_fixes.append(
                "Plaza dili / is Ingilizcesi tespit edildi (CLAUDE/AGENTS): "
                + ", ".join(dict.fromkeys(plaza_hits))
                + " — sade Turkce karsiliklarla degistirin (ornek: aksiyon almak → adim atmak; "
                "set etmek → belirlemek; fokuslanmak → odaklanmak)."
            )
            violations.append(
                Violation(
                    type="ad_language",
                    severity="critical",
                    text_ref=", ".join(dict.fromkeys(plaza_hits))[:240],
                    rule_id="strict.plaza_language",
                    fix_suggestion=(
                        "Plaza dilini kaldirin; writer promptundaki zorunlu Turkce karsiliklari kullanin."
                    ),
                )
            )

        long_sentences = self._find_long_sentences(all_text, max_words=COMPLIANCE_LONG_SENTENCE_WORDS)
        for sentence in long_sentences:
            violations.append(
                Violation(
                    type="style_risk",
                    severity="medium",
                    text_ref=sentence[:180],
                    rule_id="strict.max_sentence_length",
                    fix_suggestion=f"Cumleyi ~{COMPLIANCE_LONG_SENTENCE_WORDS} kelimeyi asmayacak sekilde bolun veya kisaltin.",
                )
            )
        if long_sentences:
            required_fixes.append(
                f"Uzun cumleler ({len(long_sentences)} adet): cumleleri makul uzunlukta tutun; "
                "once en uzun 1-2 cumleyi bolun."
            )

        if score < MIN_COMPLIANCE_SCORE_PUBLISH:
            auto_reject = True
            required_fixes.append(
                f"Uyumluluk skoru yayin esiginin altinda ({score}<{MIN_COMPLIANCE_SCORE_PUBLISH}); "
                "estranova-master kriterleri ve guvenli dil ile yeniden duzenleyin."
            )
            violations.append(
                Violation(
                    type="low_compliance_score",
                    severity="critical",
                    text_ref="compliance_score",
                    rule_id="strict.score_threshold",
                    fix_suggestion=(
                        f"Yayin icin skor en az {MIN_COMPLIANCE_SCORE_PUBLISH} olmali "
                        "(75-89 revize; 90+ yayin)."
                    ),
                )
            )

        final_decision_raw = result.get("final_decision", "revizyon_gerekli")

        raw_std = result.get("decision")
        if raw_std not in ("ready_to_publish", "needs_revision"):
            raw_std = "ready_to_publish"

        reject_tier = score < COMPLIANCE_SCORE_REJECT_BELOW
        if final_decision_raw == "reddedildi" or reject_tier:
            final_decision = "rejected"
        elif (
            final_decision_raw == "yayina_hazir"
            and not auto_reject
            and score >= MIN_COMPLIANCE_SCORE_PUBLISH
        ):
            final_decision = "ready_to_publish"
        else:
            final_decision = "revision_required"

        if final_decision == "rejected":
            std_decision = "needs_revision"
        elif auto_reject or score < MIN_COMPLIANCE_SCORE_PUBLISH:
            std_decision = "needs_revision"
        else:
            std_decision = raw_std

        standard_decision: ComplianceStandardDecision = {
            "decision": std_decision,
            "score": int(score),
        }

        if standard_decision["decision"] == "needs_revision" and final_decision == "ready_to_publish":
            final_decision = "revision_required"

        human_review_required = bool(result.get("human_review_required", False))
        if human_review_required:
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        state["violations"] = violations
        deduped_fixes = list(dict.fromkeys(required_fixes))
        state["compliance"] = ComplianceBlock(
            compliance_score=score,
            required_fixes=deduped_fixes,
            final_decision=final_decision,
            final_approver=FinalApprover(type="agent", name=self.name, timestamp=now_iso()),
            standard_decision=standard_decision,
        )
        state["revision_feedback"] = deduped_fixes
        state["disclaimer_needed"] = bool(result.get("disclaimer_needed", disclaimer_needed))

        append_history(state, "compliance", "compliance done")
        return state

    @staticmethod
    def _find_long_sentences(text: str, max_words: int) -> list[str]:
        sentences = [s.strip() for s in re.split(r"[.!?]+", text) if s.strip()]
        return [s for s in sentences if len(re.findall(r"\b\w+\b", s, flags=re.UNICODE)) > max_words]
