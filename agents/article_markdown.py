"""Makale markdown yapisini ayristirma — writer ve compliance ortak."""

from __future__ import annotations

# estranova-master-prompt — outline section_key siralamasi (writer_agent.md ile ayni)
ARTICLE_OUTLINE_KEYS: tuple[str, ...] = (
    "acilis_sahnesi",
    "konu_cercevesi",
    "mekanizma",
    "kanit_seviyesi",
    "turkiye",
    "karar_cercevesi",
    "pratik_veya_sss",
    "kapanis",
)


def split_h2_sections(article: str) -> list[str]:
    """Ilk `## ` (H2) satirindan itibaren; `###` H2 sayilmaz."""
    lines = article.splitlines()
    sections: list[list[str]] = []
    cur: list[str] = []
    for ln in lines:
        s = ln.strip()
        if s.startswith("## ") and not s.startswith("###"):
            if cur:
                sections.append("\n".join(cur))
            cur = [ln]
        else:
            if cur:
                cur.append(ln)
    if cur:
        sections.append("\n".join(cur))
    return sections
