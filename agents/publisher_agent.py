from __future__ import annotations

import re
from typing import Any

from naming import slugify_topic

from state import EstranovaState, PublisherOutput, append_history


# Estranova ic link havuzu: konu anahtar kelimeleri ile skorlanir (SEO ic link onerileri).
_INTERNAL_LINK_CANDIDATES: tuple[dict[str, Any], ...] = (
    {
        "href": "/zamansiz-yasam/beslenme-yaslanma",
        "anchor_text": "Perimenopozda beslenme ve yaslanma",
        "reason": "Beslenme ve hormonal gecis baglamini tamamlar.",
        "keywords": ("beslen", "vitamin", "mineral", "diyet", "gida", "magnezyum", "demir", "kalsiyum"),
    },
    {
        "href": "/hormonal-gecis/perimenopoz/perimenopoz-nedir",
        "anchor_text": "Perimenopoz nedir?",
        "reason": "Hormonal gecis donemini cerceveler.",
        "keywords": ("perimenopoz", "dongu", "adet", "gecis", "ovul"),
    },
    {
        "href": "/hormonal-gecis/menopoz/menopoz-nedir",
        "anchor_text": "Menopoz nedir?",
        "reason": "Menopoz tanimi ve temel bilgiler.",
        "keywords": ("menopoz", "estrojen", "amenore", "son adet"),
    },
    {
        "href": "/zihin-denge/uyku-bozuklugu-menopoz",
        "anchor_text": "Menopozda uyku ve gece uyanmalari",
        "reason": "Uyku, sicak basmasi ve gece rahatsizliklari arasindaki iliskiyi ele alir.",
        "keywords": ("uyku", "gece", "insomnia", "sicak", "terleme", "ruh"),
    },
    {
        "href": "/zamansiz-yasam/hareket-saglik-menopoz",
        "anchor_text": "Hareket ve kas sagligi",
        "reason": "Aktivite, kemik ve kas sagligi baglamini tamamlar.",
        "keywords": ("hareket", "egzersiz", "yuruyus", "kemik", "kas", "osteoporoz"),
    },
    {
        "href": "/zihin-denge/stres-yonetimi-menopoz",
        "anchor_text": "Stres yonetimi ve menopoz",
        "reason": "Stres, uyku ve hormonal gecis etkilesimini aciklar.",
        "keywords": ("stres", "anksiyete", "ruh", "duygu", "tukenmislik"),
    },
    {
        "href": "/beden-yakinlik/vajinal-saglik-menopoz",
        "anchor_text": "Vajinal saglik ve menopoz",
        "reason": "Lokal semptomlar ve kuruluk hakkinda bilgi.",
        "keywords": ("vajinal", "kuruluk", "cinsel", "yakinlik", "lokal"),
    },
    {
        "href": "/hormonal-gecis/40-sonrasi/tarama-testleri",
        "anchor_text": "40 sonrasi tarama ve testler",
        "reason": "Koruyucu saglik ve kontrol zamanlamasi.",
        "keywords": ("tarama", "test", "kontrol", "kalp", "tansiyon", "40"),
    },
    {
        "href": "/article",
        "anchor_text": "Tum makale arsivi",
        "reason": "Benzer konularda derinlesmek icin genel giris.",
        "keywords": ("makale", "rehber", "bilgi", "genel"),
    },
)


def _topic_match_blob(topic: str) -> str:
    slug = slugify_topic(topic)
    raw = (topic or "").lower()
    return f"{slug} {raw}"


def _score_internal_candidate(blob: str, keywords: tuple[str, ...]) -> int:
    return sum(1 for k in keywords if k in blob)


def _select_internal_links(topic: str, limit: int = 4) -> list[dict[str, str]]:
    blob = _topic_match_blob(topic)
    scored: list[tuple[int, dict[str, Any]]] = []
    for item in _INTERNAL_LINK_CANDIDATES:
        sc = _score_internal_candidate(blob, item["keywords"])
        scored.append((sc, item))
    scored.sort(key=lambda x: (-x[0], x[1]["href"]))
    picked: list[dict[str, str]] = []
    for sc, item in scored:
        if sc > 0 or len(picked) < 2:
            picked.append(
                {
                    "href": str(item["href"]),
                    "anchor_text": str(item["anchor_text"]),
                    "reason": str(item["reason"]),
                }
            )
        if len(picked) >= limit:
            break
    # En az 3 oneri: skor dusukse basa ekle
    if len(picked) < 3:
        for item in _INTERNAL_LINK_CANDIDATES:
            if len(picked) >= 3:
                break
            entry = {
                "href": str(item["href"]),
                "anchor_text": str(item["anchor_text"]),
                "reason": str(item["reason"]),
            }
            if entry["href"] not in {p["href"] for p in picked}:
                picked.append(entry)
    return picked[:limit]


def _build_internal_links_markdown(links: list[dict[str, str]]) -> list[str]:
    lines: list[str] = []
    for link in links:
        lines.append(f"- [{link['anchor_text']}]({link['href']}) — {link['reason']}")
    return lines


def _parse_user_internal_hints(raw: str) -> list[str]:
    """Kullanici metninden satir bazli ek ic link onerileri."""
    out: list[str] = []
    for line in (raw or "").splitlines():
        s = line.strip()
        if not s or s.startswith("#"):
            continue
        s = re.sub(r"^[-*]\s*", "", s)
        out.append(f"- {s}")
    return out


def _first_plain_snippet(article: str, max_chars: int = 280) -> str:
    """Ilk anlamli paragraftan kisa alinti (meta description / snippet icin)."""
    for block in re.split(r"\n\s*\n", article):
        b = block.strip()
        if not b or b.startswith("#") or b.startswith(">"):
            continue
        plain = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", b)
        plain = re.sub(r"[#*_>`]", "", plain)
        plain = " ".join(plain.split())
        if len(plain) < 40:
            continue
        if len(plain) > max_chars:
            plain = plain[: max_chars - 1].rsplit(" ", 1)[0] + "…"
        return plain
    return ""


def _build_seo_block(title_tag: str, meta_description: str, slug: str) -> str:
    return "\n".join(
        [
            "## Yayın metası (SEO)",
            "",
            f"- **Title tag:** {title_tag}",
            f"- **Meta description:** {meta_description}",
            f"- **Slug:** `{slug}`",
            "",
        ]
    )


def _build_sources_markdown(_sources: list[dict[str, Any]]) -> str:
    """
    Kaynak listesi makale sonunda kullanilmaz (akran tonu; klinik 'Kaynaklar'
    sinyali yaratmamak). Research `approved_sources` arka planda kalir.
    """
    return ""


def _build_internal_section(
    auto_links: list[dict[str, str]],
    user_hint_lines: list[str],
) -> str:
    parts = [
        "## İç bağlantı önerileri",
        "",
        "Otomatik skorlanan site ici oneriler:",
        "",
    ]
    if auto_links:
        parts.extend(_build_internal_links_markdown(auto_links))
    else:
        parts.append("- *(Otomatik oneri uretilemedi.)*")
    parts.append("")
    if user_hint_lines:
        parts.append("Kullanici / editor notlari:")
        parts.append("")
        parts.extend(user_hint_lines)
        parts.append("")
    return "\n".join(parts)


def _append_publisher_bundle(
    article: str,
    *,
    title_tag: str,
    meta_description: str,
    slug: str,
    approved_sources: list[dict[str, Any]],
    auto_internal: list[dict[str, str]],
    user_internal_raw: str,
) -> str:
    """Makale govdesinin sonuna SEO ve ic baglanti onerileri ekler (sablon FAQ yok; harici Kaynaklar listesi yok)."""
    user_lines = _parse_user_internal_hints(user_internal_raw)
    blocks = [
        "",
        "---",
        "",
        _build_seo_block(title_tag, meta_description, slug),
        _build_internal_section(auto_internal, user_lines),
        _build_sources_markdown(approved_sources),
    ]
    return article.rstrip() + "\n" + "\n".join(blocks)


def _publisher_seo_fields(topic_raw: str, article_raw: str) -> tuple[str, str]:
    title_tag = PublisherAgent._build_title_tag(topic_raw or "icerik")
    meta_description = PublisherAgent._build_meta_description(topic_raw or "icerik", article_raw)
    return title_tag, meta_description


def compose_publisher_body_markdown(state: EstranovaState) -> str:
    """
    Writer makalesinin sonuna SEO ve ic baglanti onerileri ekler (FAQ Writer `pratik_veya_sss` icinde).
    Kayit katmaninda publisher_output bos geldiginde (or. taslak yolu) ayni paketi
    yeniden uretmek icin de kullanilir.
    """
    topic_raw = str(state.get("topic", "") or "").strip()
    slug = slugify_topic(topic_raw)
    draft = state.get("draft") or {}
    article_raw = str(draft.get("article", "") if isinstance(draft, dict) else "")
    title_tag, meta_description = _publisher_seo_fields(topic_raw, article_raw)
    user_internal = str(state.get("internal_link_suggestions") or "").strip()
    approved = state.get("approved_sources") or []
    if not isinstance(approved, list):
        approved = []

    recommended = _select_internal_links(topic_raw, limit=6)
    return _append_publisher_bundle(
        article_raw,
        title_tag=title_tag,
        meta_description=meta_description,
        slug=slug,
        approved_sources=list(approved),
        auto_internal=recommended,
        user_internal_raw=user_internal,
    )


class PublisherAgent:
    """LLM kullanmaz; SEO paketi ve ic baglanti onerilerini makaleye ekler (sablon FAQ uretmez)."""

    def run(self, state: EstranovaState) -> EstranovaState:
        topic_raw = str(state.get("topic", "") or "").strip()
        slug = slugify_topic(topic_raw)
        title = topic_raw.capitalize() if topic_raw else "Icerik"
        article_raw = state["draft"]["article"]
        excerpt = self._excerpt_from_article(article_raw)
        user_internal = str(state.get("internal_link_suggestions") or "").strip()
        title_tag, meta_description = _publisher_seo_fields(topic_raw, article_raw)
        recommended = _select_internal_links(topic_raw, limit=6)

        body_markdown = compose_publisher_body_markdown(state)

        state["publisher_output"] = PublisherOutput(
            cms_format="markdown",
            content={
                "title": title,
                "slug": slug,
                "body_markdown": body_markdown,
                "excerpt": excerpt,
            },
            seo={
                "title_tag": title_tag,
                "meta_description": meta_description,
                "canonical_slug": f"/{slug}",
            },
            internal_linking={
                "recommended_links": recommended,
                "user_suggestions_raw": user_internal,
            },
            media={
                "hero_alt_text": "Gece yatak odasinda hafif battaniye ile oturan dusunceli orta yasli kadin",
                "inline_image_alt_texts": [
                    "Sabah isigi alan odada pencereyi acan orta yasli kadin",
                ],
            },
        )
        append_history(state, "publisher", "final")
        return state

    @staticmethod
    def _excerpt_from_article(article: str) -> str:
        lines = [line.strip() for line in article.splitlines() if line.strip() and not line.startswith("#")]
        return lines[0][:160] if lines else ""

    @staticmethod
    def _build_title_tag(topic: str) -> str:
        t = (topic or "Icerik").strip()
        base = f"{t} | Estranova"
        return base[:60]

    @staticmethod
    def _build_meta_description(topic: str, article: str) -> str:
        snippet = _first_plain_snippet(article, max_chars=120)
        if snippet:
            core = f"{topic}: {snippet}"
        else:
            core = (
                f"{topic} konusunda destekleyici cerceve, sinirlar ve ne zaman destek alinabilecegini "
                "sade bir dille okuyun."
            )
        return core[:160]
