from __future__ import annotations

"""
Chroma + OpenAIEmbeddings (API) ile vektor indeksi.

Yerel torch/transformers yok; OPENAI_API_KEY gerekir.
"""

from dotenv import load_dotenv

from rag.retriever import rebuild_chroma_index


def build_vectorstore() -> None:
    load_dotenv()
    rebuild_chroma_index()


if __name__ == "__main__":
    build_vectorstore()
