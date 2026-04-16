from __future__ import annotations

from pathlib import Path

from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_community.vectorstores import Chroma

from rag.loader import build_chunks


EMBEDDING_MODEL = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
PERSIST_DIRECTORY = Path("rag/chroma_db")
COLLECTION_NAME = "estranova_sources"


def build_vectorstore() -> Chroma:
    chunks = build_chunks()
    embeddings = SentenceTransformerEmbeddings(model_name=EMBEDDING_MODEL)

    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=str(PERSIST_DIRECTORY),
        collection_name=COLLECTION_NAME,
    )
    vectorstore.persist()
    print(f"{len(chunks)} chunk yüklendi")
    return vectorstore


if __name__ == "__main__":
    build_vectorstore()
