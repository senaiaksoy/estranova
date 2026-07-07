from __future__ import annotations

import os
import shutil
from pathlib import Path

from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings

from rag.loader import build_chunks

COLLECTION_NAME = "estranova_sources"
PERSIST_DIRECTORY = Path("rag/chroma_db")
# Ucuz ve hizli; yerel model indirmez (sadece API)
EMBEDDING_MODEL = "text-embedding-3-small"

_vectorstore: Chroma | None = None


def _embeddings() -> OpenAIEmbeddings | None:
    if not (os.getenv("OPENAI_API_KEY") or "").strip():
        return None
    return OpenAIEmbeddings(model=EMBEDDING_MODEL)


def _persist_ready() -> bool:
    if not PERSIST_DIRECTORY.is_dir():
        return False
    try:
        return any(PERSIST_DIRECTORY.iterdir())
    except OSError:
        return False


def _get_vectorstore() -> Chroma | None:
    global _vectorstore
    if _vectorstore is not None:
        return _vectorstore

    emb = _embeddings()
    if emb is None:
        return None

    try:
        if _persist_ready():
            _vectorstore = Chroma(
                persist_directory=str(PERSIST_DIRECTORY),
                embedding_function=emb,
                collection_name=COLLECTION_NAME,
            )
        else:
            try:
                chunks = build_chunks()
            except FileNotFoundError:
                return None
            if not chunks:
                return None
            _vectorstore = Chroma.from_documents(
                documents=chunks,
                embedding=emb,
                persist_directory=str(PERSIST_DIRECTORY),
                collection_name=COLLECTION_NAME,
            )
            _vectorstore.persist()
    except Exception:
        return None

    return _vectorstore


def rebuild_chroma_index() -> None:
    """Persist klasorunu silip kaynak docx uzerinden yeniden OpenAI embedding ile indeksler."""
    global _vectorstore
    _vectorstore = None
    if PERSIST_DIRECTORY.exists():
        shutil.rmtree(PERSIST_DIRECTORY)
    vs = _get_vectorstore()
    if vs is None:
        print(
            "[RAG] Indeks olusturulamadi: OPENAI_API_KEY veya data/estranova_kaynak.docx eksik / hata."
        )
        return
    try:
        n = len(build_chunks())
    except FileNotFoundError:
        n = 0
    print(f"[RAG] {n} chunk indekslendi (OpenAI {EMBEDDING_MODEL}).")


def get_retriever(search_k: int = 4):
    vs = _get_vectorstore()
    if vs is None:
        return None
    return vs.as_retriever(search_kwargs={"k": search_k})


def retrieve_relevant_chunks(query: str, search_k: int = 4) -> list[Document]:
    retriever = get_retriever(search_k=search_k)
    if retriever is None:
        return []
    return list(retriever.invoke(query))
