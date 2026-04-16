from __future__ import annotations

from pathlib import Path

from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document


EMBEDDING_MODEL = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
PERSIST_DIRECTORY = Path("rag/chroma_db")
COLLECTION_NAME = "estranova_sources"


def get_retriever(search_k: int = 4):
    embeddings = SentenceTransformerEmbeddings(model_name=EMBEDDING_MODEL)
    vectorstore = Chroma(
        persist_directory=str(PERSIST_DIRECTORY),
        embedding_function=embeddings,
        collection_name=COLLECTION_NAME,
    )
    return vectorstore.as_retriever(search_kwargs={"k": search_k})


def retrieve_relevant_chunks(query: str, search_k: int = 4) -> list[Document]:
    retriever = get_retriever(search_k=search_k)
    return retriever.invoke(query)
