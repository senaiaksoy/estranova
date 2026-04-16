from __future__ import annotations

import json

from state import ClaimTrace, DraftContent, EstranovaState, append_history

from .base import PromptBackedAgent


class WriterAgent(PromptBackedAgent):
    def __init__(self) -> None:
        # Writer system prompt'u repo root /prompts klasoründen okunur.
        super().__init__("prompts/writer-agent.md")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]
        audience = state.get("audience", "40+ kadinlar")
        content_goal = state.get("content_goal", "")
        disclaimer_needed = bool(state.get("disclaimer_needed", True))
        risk_level = state.get("risk_level_current", state.get("risk_level_initial", "medium"))

        approved_sources = state.get("approved_sources", [])
        key_claims = state.get("key_claims", [])
        revision_feedback = state.get("revision_feedback", [])
        revision_iteration = int(state.get("revision_iteration", 0))

        user_payload = {
            "topic": topic,
            "audience": audience,
            "content_goal": content_goal,
            "risk_level": risk_level,
            "approved_sources": approved_sources,
            "key_claims": key_claims,
            "disclaimer_needed": disclaimer_needed,
            "revision_iteration": revision_iteration,
            "revision_feedback": revision_feedback,
        }

        try:
            result = self.call_llm_json(
                role="writer",
                user_payload=json.dumps(user_payload, ensure_ascii=False),
                state_for_logging=state,
            )
        except Exception as exc:
            raise RuntimeError(f"WriterAgent LLM call failed: {exc}") from exc

        draft_content = result.get("draft_content", {})

        standard_disclaimer = (
            "Bu içerik yalnızca bilgilendirme amaçlıdır. Tıbbi tavsiye, teşhis veya tedavi yerine geçmez. "
            "Sağlık durumunuzla ilgili sorularınız için lütfen doktorunuza veya diğer nitelikli sağlık uzmanlarına danışın."
        )

        def ensure_disclaimer(text: str) -> str:
            if not text:
                return standard_disclaimer
            if "bilgilendirme amaçlıdır" not in text.lower():
                # Artirilacak metni saga ekle; sosyal/bulten metnini bozmamak icin kisa tut.
                return text.rstrip() + "\n\n" + standard_disclaimer
            return text

        article_text = draft_content.get("article", "")
        social_text = draft_content.get("social_post", "")
        newsletter_text = draft_content.get("newsletter", "")

        if disclaimer_needed:
            article_text = ensure_disclaimer(article_text)
            # Sosyal ve bulten icin de güvenlik cizerini koruyoruz (opsiyonel ama pratik).
            social_text = ensure_disclaimer(social_text)
            newsletter_text = ensure_disclaimer(newsletter_text)

            if "doktorunuza" not in article_text.lower():
                article_text = article_text.rstrip() + " Doktorunuza danışın."

        state["draft"] = DraftContent(
            article=article_text,
            social_post=social_text,
            newsletter=newsletter_text,
        )

        claim_trace_in = result.get("claim_trace", [])
        state["claim_trace"] = [
            ClaimTrace(
                claim_id=item["claim_id"],
                content_refs=item.get("content_refs", []),
            )
            for item in claim_trace_in
        ]

        state["flagged_claims"] = result.get("flagged_claims", [])

        if result.get("human_review_required"):
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        if revision_iteration > 0:
            append_history(
                state,
                "writer",
                f"Writer revizyon turu tamamlandi (iterasyon={revision_iteration}).",
            )
        else:
            append_history(state, "writer", "Writer LLM ciktilari state'e alindi.")
        return state
