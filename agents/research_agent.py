from __future__ import annotations

from state import Claim, EstranovaState, FindingCommentary, InternalSource, Source, append_history
from rag.retriever import retrieve_relevant_chunks

from .base import PromptBackedAgent


class ResearchAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("researcher_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]
        internal_sources = self._retrieve_internal_sources(topic)

        if internal_sources:
            state["internal_sources"] = internal_sources
            state["external_search_needed"] = False
            state["approved_sources"] = self._build_internal_approved_sources(internal_sources)
            state["key_claims"] = self._build_internal_claims(topic, internal_sources)
            state["finding_vs_commentary"] = self._build_internal_findings(state["key_claims"], internal_sources)
            append_history(
                state,
                "research",
                f"{len(internal_sources)} internal chunk bulundu, internal kaynaklar onceliklendirildi.",
            )
            return state

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

        state["internal_sources"] = []
        state["external_search_needed"] = True
        state["approved_sources"] = sources
        state["key_claims"] = claims
        state["finding_vs_commentary"] = findings
        append_history(
            state,
            "research",
            f"Internal kaynak bulunamadi. {len(sources)} fallback kaynak ve {len(claims)} iddia toplandi.",
        )
        return state

    def _retrieve_internal_sources(self, query: str) -> list[InternalSource]:
        try:
            documents = retrieve_relevant_chunks(query)
        except Exception:
            return []

        internal_sources: list[InternalSource] = []
        for doc in documents:
            metadata = doc.metadata or {}
            internal_sources.append(
                InternalSource(
                    source=str(metadata.get("source", "rag/chroma_db")),
                    chunk_index=int(metadata.get("chunk_index", -1)),
                    content=doc.page_content,
                )
            )
        return internal_sources

    def _build_internal_approved_sources(self, internal_sources: list[InternalSource]) -> list[Source]:
        approved_sources: list[Source] = []
        for index, item in enumerate(internal_sources, start=1):
            approved_sources.append(
                Source(
                    id=f"internal_src_{index}",
                    title=f"Estranova internal knowledge chunk {item['chunk_index']}",
                    publisher="Estranova Internal Knowledge Base",
                    year=2026,
                    url=item["source"],
                    source_type="internal_chunk",
                    evidence_level="medium",
                )
            )
        return approved_sources

    def _build_internal_claims(self, topic: str, internal_sources: list[InternalSource]) -> list[Claim]:
        claims: list[Claim] = []
        for index, item in enumerate(internal_sources[:3], start=1):
            excerpt = item["content"].replace("\n", " ").strip()
            excerpt = excerpt[:220].rstrip(" .,;:")
            claims.append(
                Claim(
                    id=f"claim_{index}",
                    text=f"{topic} konusunda internal bilgi tabaninda su destekleyici bilgi bulundu: {excerpt}.",
                    source_ids=[f"internal_src_{index}"],
                    status="draft",
                )
            )
        return claims

    def _build_internal_findings(
        self, claims: list[Claim], internal_sources: list[InternalSource]
    ) -> list[FindingCommentary]:
        findings: list[FindingCommentary] = []
        for index, claim in enumerate(claims):
            findings.append(
                FindingCommentary(
                    claim_id=claim["id"],
                    finding=internal_sources[index]["content"][:260].replace("\n", " ").strip(),
                    commentary="Bu bilgi Estranova'nin internal bilgi tabanindan cekildi; gerekirse sonraki adimda dis kaynakla desteklenebilir.",
                )
            )
        return findings
