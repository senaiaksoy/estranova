from __future__ import annotations

import re

from naming import slugify_topic

from state import EstranovaState, PublisherOutput, append_history

from .base import PromptBackedAgent


class PublisherAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("writer_prompt.txt")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic_raw = str(state.get("topic", "") or "").strip()
        # Dosya ve CMS slug her zaman guncel konu basligindan (state.topic)
        slug = slugify_topic(topic_raw)
        title = topic_raw.capitalize() if topic_raw else "Icerik"
        excerpt = self._excerpt_from_article(state["draft"]["article"])
        title_tag = self._build_title_tag(topic_raw or "icerik")
        meta_description = self._build_meta_description(topic_raw or "icerik")

        state["publisher_output"] = PublisherOutput(
            cms_format="markdown",
            content={
                "title": title,
                "slug": slug,
                "body_markdown": state["draft"]["article"],
                "excerpt": excerpt,
            },
            seo={
                "title_tag": title_tag,
                "meta_description": meta_description,
                "canonical_slug": f"/{slug}",
            },
            internal_linking={
                "recommended_links": [
                    {
                        "href": "/zihin-denge/uyku-bozuklugu-menopoz",
                        "anchor_text": "Uyku sorunlari ile ilgili rehber",
                        "reason": "Gece terlemeleri ile uyku bolunmesi arasindaki iliskiyi tamamlar.",
                    },
                    {
                        "href": "/hormonal-gecis/perimenopoz/perimenopoz-nedir",
                        "anchor_text": "Perimenopozu anlamak icin bu yazi",
                        "reason": "Semptomun hormonal gecis baglamini aciklar.",
                    },
                ]
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
