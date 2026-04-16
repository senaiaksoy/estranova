from __future__ import annotations

from langchain_community.retrievers import BM25Retriever
from langchain_core.documents import Document

from rag.loader import build_chunks

# Tek seferlik bellek icinde BM25 indeksi (PyTorch / transformers yok)
_bm25_retriever: BM25Retriever | None = None


def _get_bm25() -> BM25Retriever | None:
    global _bm25_retriever
    if _bm25_retriever is not None:
        return _bm25_retriever
    try:
        docs = build_chunks()
    except FileNotFoundError:
        return None
    if not docs:
        return None
    _bm25_retriever = BM25Retriever.from_documents(docs)
    return _bm25_retriever


def get_retriever(search_k: int = 4):
    retriever = _get_bm25()
    if retriever is None:
        return None
    retriever.k = search_k
    return retriever


def retrieve_relevant_chunks(query: str, search_k: int = 4) -> list[Document]:
    retriever = get_retriever(search_k=search_k)
    if retriever is None:
        return []
    return list(retriever.invoke(query))
