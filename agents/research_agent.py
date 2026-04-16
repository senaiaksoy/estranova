from __future__ import annotations

from state import Claim, EstranovaState, FindingCommentary, Source, append_history

from .base import PromptBackedAgent


class ResearchAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("researcher_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]

        sources: list[Source] = [
            Source(
                id="src_1",
                title="Menopause - Things you can do",
                publisher="NHS",
                year=2022,
                url="https://www.nhs.uk/conditions/menopause/things-you-can-do",
                source_type="guideline",
                evidence_level="high",
            ),
            Source(
                id="src_2",
                title="Menopause: identification and management (NG23)",
                publisher="NICE",
                year=2024,
                url="https://www.nice.org.uk/guidance/NG23/chapter/recommendations",
                source_type="guideline",
                evidence_level="high",
            ),
            Source(
                id="src_3",
                title="Menopause",
                publisher="National Institute on Aging",
                year=2025,
                url="https://www.nia.nih.gov/health/menopause",
                source_type="guideline",
                evidence_level="high",
            ),
        ]

        claims: list[Claim] = [
            Claim(
                id="claim_1",
                text=f"{topic} baglaminda, cevresel serinletme ve duzenli uyku rutini gibi destekleyici adimlar rahatlama saglayabilir.",
                source_ids=["src_1", "src_3"],
                status="draft",
            ),
            Claim(
                id="claim_2",
                text="Kafein, sicak icecekler, alkol veya stres gibi tetikleyicileri fark etmek ve azaltmak semptom yonetimine yardimci olabilir.",
                source_ids=["src_1"],
                status="draft",
            ),
            Claim(
                id="claim_3",
                text="Uyku bozulmasi veya vazomotor semptomlarla birlikte gorulen zorlanmalarda, menopoza ozgu CBT bir opsiyon olarak degerlendirilebilir.",
                source_ids=["src_2"],
                status="draft",
            ),
        ]

        findings: list[FindingCommentary] = [
            FindingCommentary(
                claim_id="claim_1",
                finding="NHS ve NIA, gece terlemeleri ve benzer menopoz semptomlarinda serin ortam ve duzenli uyku aliskanliklarini destekleyici yaklasimlar arasinda listeler.",
                commentary="Bu adimlar yasam tarzi temellidir; etkisi kisiden kisiye degisebilir.",
            ),
            FindingCommentary(
                claim_id="claim_2",
                finding="NHS, potansiyel tetikleyicileri azaltmayi semptomlari hafifletmeye yardimci olabilecek bir adim olarak belirtir.",
                commentary="Tetikleyiciler herkes icin ayni olmayabilir; gozlem ve not alma faydali olabilir.",
            ),
            FindingCommentary(
                claim_id="claim_3",
                finding="NICE, vazomotor semptomlarla iliskili uyku sorunlarinda menopoza ozgu CBT'yi bir secenek olarak ele alir.",
                commentary="Bu, tani koymayan ve davranissal destek sunan bir yaklasimdir.",
            ),
        ]

        state["approved_sources"] = sources
        state["key_claims"] = claims
        state["finding_vs_commentary"] = findings
        append_history(state, "research", f"{len(sources)} kaynak ve {len(claims)} iddia toplandi.")
        return state
