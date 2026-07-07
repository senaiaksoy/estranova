"""
Greenfield / fork icin domain sablonu — ESTRANOVA URETIMDE KULLANILMAZ.

TODO: Kendi markanizda doldurun; ardindan ilgili agent'lara import edin.

Estranova'da gercek kurallar su dosyalarda:
- Yazar yapisi / FAQ / category: ``agents/writer_agent.py``, ``agents/article_markdown.py``
- Deterministik compliance: ``agents/compliance_expert_agent.py``
- Kanonik sozlesmeler: ``CLAUDE.md``, ``prompts/compliance-agent.md``

Bu modul **referans sablon** olarak kalir; varsayilan degerler bos veya ornek amaclidir.
"""

from __future__ import annotations

# --- Marka / dil ---
# TODO: fill — ornek: "yaşıt sesi, Vogue tonu, hekim perspektifi yok"
BRAND_PERSONA: str = ""

# TODO: fill — ornek: "tr" | "en"
LANGUAGE: str = ""

# --- Yapı (writer validator ile hizala) ---
# TODO: fill — section_key listesi (sira sabit)
ARTICLE_STRUCTURE: tuple[str, ...] = ()

# TODO: fill — SSS soru sayisi (writer FAQ disiplini)
FAQ_MIN: int = 0
FAQ_MAX: int = 0

# TODO: fill — yayin taksonomisi (writer ``category`` allowlist)
ALLOWED_CATEGORIES: tuple[str, ...] = ()

# --- Compliance (deterministik katman) ---
# TODO: fill — kelime / kisa ifade listesi (substring riski: bkz. docs/PIPELINE.md G4)
FORBIDDEN_TERMS: tuple[str, ...] = ()

# TODO: fill — regex veya sabit marker listesi (inline markdown link vb.)
FORBIDDEN_URL_PATTERN: str = r""  # ornek: r'\[([^\]]+)\]\(https?://'

# TODO: fill — kurulus / yayin adlari (regex tuple veya sabit metin)
FORBIDDEN_ORGS: tuple[tuple[str, str], ...] = ()
