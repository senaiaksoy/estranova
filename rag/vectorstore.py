from __future__ import annotations

"""
Eski ad korundu: Chroma/torch yerine metin tabanli BM25 indeksi dogrulamasi.

Gercek indeks `rag.retriever` icinde; bu modul sadece chunk sayisini kontrol etmek icin.
"""

from rag.loader import build_chunks


def build_vectorstore() -> None:
    chunks = build_chunks()
    print(f"{len(chunks)} chunk yüklendi (BM25, vektor/embeddings yok)")


if __name__ == "__main__":
    build_vectorstore()
