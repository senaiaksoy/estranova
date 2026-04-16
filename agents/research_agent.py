from __future__ import annotations

import json
from typing import Any

from state import Claim, EstranovaState, FindingCommentary, InternalSource, Source, append_history

from rag.retriever import retrieve_relevant_chunks

from .base import PromptBackedAgent


class ResearchAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("prompts/research-agent.md")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]
        audience = state.get("audience", "40+ kadinlar")
        content_goal = state.get("content_goal", "bilgilendirici makale")

        internal_sources = self._retrieve_internal_sources(topic)
        state["internal_sources"] = internal_sources

        has_internal = len(internal_sources) > 0
        state["external_search_needed"] = not has_internal

        # Reduce internal content size to keep prompts under control.
        internal_preview: list[dict[str, Any]] = []
        for item in internal_sources[:8]:
            internal_preview.append(
                {
                    "source": item["source"],
                    "chunk_index": item["chunk_index"],
                    "content_excerpt": item["content"][:800],
                }
            )

        user_payload = {
            "topic": topic,
            "audience": audience,
            "content_goal": content_goal,
            "risk_level": state.get("risk_level_current", state.get("risk_level_initial", "medium")),
            "external_search_needed": state["external_search_needed"],
            "internal_sources_preferential": has_internal,
            "internal_sources": internal_preview,
        }

        try:
            result = self.call_llm_json(
                role="researcher",
                user_payload=json.dumps(user_payload, ensure_ascii=False),
                state_for_logging=state,
            )
        except Exception as exc:
            raise RuntimeError(f"ResearchAgent LLM call failed: {exc}") from exc

        # Expected keys from prompt: approved_sources, key_claims, finding_vs_commentary, flagged_claims, disclaimer_needed.
        state["approved_sources"] = result.get("approved_sources", [])
        state["key_claims"] = result.get("key_claims", [])
        state["finding_vs_commentary"] = result.get("finding_vs_commentary", [])
        state["flagged_claims"] = result.get("flagged_claims", [])
        state["disclaimer_needed"] = bool(result.get("disclaimer_needed", True))

        # Research doesn't decide publish readiness; it may signal external search need.
        if not has_internal and not state.get("external_search_needed", True):
            # If model claims external isn't needed, keep the explicit internal-based decision.
            state["external_search_needed"] = True

        append_history(
            state,
            "research",
            f"Research tamamlandi (internal_sources={len(internal_sources)}; external_search_needed={state['external_search_needed']}).",
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
