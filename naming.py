"""
Konu basligindan dosya / URL slug uretimi (tek kaynak).
Tum pipeline ve output/ isimleri bu fonksiyonla uyumlu olmalidir.
"""

from __future__ import annotations

import re


def slugify_topic(topic: str) -> str:
    """Turkce karakterleri ASCII'ye yakin slug'a cevirir; bos ise 'icerik'."""
    slug = (topic or "").strip().lower()
    replacements = {
        "ç": "c",
        "ğ": "g",
        "ı": "i",
        "ö": "o",
        "ş": "s",
        "ü": "u",
    }
    for src, target in replacements.items():
        slug = slug.replace(src, target)
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "icerik"
