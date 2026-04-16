from __future__ import annotations

from state import ClaimTrace, DraftContent, EstranovaState, append_history

from .base import PromptBackedAgent


DISCLAIMER = (
    "Bu icerik yalnizca bilgilendirme amaclidir. Tibbi tavsiye, teshis veya tedavi yerine "
    "gecmez. Saglik durumunuzla ilgili sorulariniz icin lutfen doktorunuza veya diger "
    "nitelikli saglik uzmanlarina danisin."
)


class WriterAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("writer_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]
        claim_one = state["key_claims"][0]["text"]
        claim_two = state["key_claims"][1]["text"]
        claim_three = state["key_claims"][2]["text"]

        article = (
            f"# {topic}\n\n"
            "## Kisa Ozet\n"
            "Bu rehber, gece terlemeleri ve odakli rahatlama adimlarini sakin bir dille anlatir. "
            "Buradaki bilgiler genel yonlendirme icindir.\n\n"
            "## Destekleyici gunluk adimlar\n"
            f"{claim_one}\n\n"
            "## Olasi tetikleyicileri fark etmek\n"
            f"{claim_two}\n\n"
            "## Uyku zorlugu surerse neler dusunulebilir?\n"
            f"{claim_three}\n\n"
            "## Ne zaman destek almak mantikli olur?\n"
            "Sikayetler suruyorsa veya gunluk yasami belirgin etkiliyorsa doktorunuza danisin.\n\n"
            f"**Yasal Uyari:** {DISCLAIMER}"
        )

        social_post = (
            f"{topic} yasayan kisiler icin serin ortam, tetikleyici farkindaligi ve uyku odakli "
            "destekler bazen yararli olabilir. Ayrintilar icin rehberi inceleyin.\n\n"
            "Doktorunuza danisin."
        )

        newsletter = (
            f"Konu: {topic}\n\n"
            "Merhaba,\n\n"
            "Bu haftaki icerigimizde gece terlemeleriyle ilgili destekleyici adimlari, tetikleyici "
            "farkindaligini ve uyku odakli yaklasimlari sade bir dille ele aldik.\n\n"
            "Icerigi inceleyin.\n\n"
            "Doktorunuza danisin.\n\n"
            f"{DISCLAIMER}"
        )

        state["draft"] = DraftContent(article=article, social_post=social_post, newsletter=newsletter)
        state["claim_trace"] = [
            ClaimTrace(claim_id="claim_1", content_refs=["article:Destekleyici gunluk adimlar"]),
            ClaimTrace(claim_id="claim_2", content_refs=["article:Olasi tetikleyicileri fark etmek"]),
            ClaimTrace(claim_id="claim_3", content_refs=["article:Uyku zorlugu surerse neler dusunulebilir?"]),
        ]
        append_history(state, "writer", "Makale, sosyal medya ve bulten taslaklari uretildi.")
        return state
