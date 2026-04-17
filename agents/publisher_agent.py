from __future__ import annotations

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
        "reason": "Uyku, sicak basmasi ve gece rahatsizliklari ile iliskiyi destekler.",
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


def _build_internal_links_markdown(links: list[dict[str, str]]) -> str:
    lines = ["", "---", "", "## İç Link Önerileri", ""]
    for link in links:
        lines.append(f"- [{link['anchor_text']}]({link['href']}) — {link['reason']}")
    return "\n".join(lines) + "\n"


def _insert_internal_links_before_disclaimer(article: str, section_md: str) -> str:
    """Yasal uyari oncesine ic link bolumunu yerlestirir (yoksa sona ekler)."""
    markers = (
        "Bu içerik yalnızca bilgilendirme amaçlıdır",
        "Bu icerik yalnizca bilgilendirme amaclidir",
        "bilgilendirme amaçlıdır",
        "bilgilendirme amaclidir",
    )
    for m in markers:
        if m in article:
            i = article.index(m)
            return article[:i].rstrip() + section_md + "\n" + article[i:]
    return article.rstrip() + section_md


class PublisherAgent:
    """LLM kullanmaz; SEO paketi ve ic link bolumunu makaleye ekler."""

    def run(self, state: EstranovaState) -> EstranovaState:
        topic_raw = str(state.get("topic", "") or "").strip()
        slug = slugify_topic(topic_raw)
        title = topic_raw.capitalize() if topic_raw else "Icerik"
        article_raw = state["draft"]["article"]
        excerpt = self._excerpt_from_article(article_raw)
        title_tag = self._build_title_tag(topic_raw or "icerik")
        meta_description = self._build_meta_description(topic_raw or "icerik")

        recommended = _select_internal_links(topic_raw, limit=4)
        links_md = _build_internal_links_markdown(recommended)
        body_markdown = _insert_internal_links_before_disclaimer(article_raw, links_md)

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
        title = f"{topic} Neden Olur? - Estranova"
        return title[:60]

    @staticmethod
    def _build_meta_description(topic: str) -> str:
        description = (
            f"{topic} konusunda destekleyici yaklasimlari, tetikleyicileri ve ne zaman destek alinabilecegini "
            "sade bir dille okuyun."
        )
        return description[:160]
