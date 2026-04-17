from __future__ import annotations

from datetime import datetime
import json
from pathlib import Path
import re

from config.pipeline_limits import WRITER_MAX_OUTPUT_TOKENS

from state import ClaimTrace, DraftContent, EstranovaState, append_history

from .article_markdown import ARTICLE_OUTLINE_KEYS, split_h2_sections
from .base import PromptBackedAgent


def _slugify_topic(topic: str) -> str:
    lowered = topic.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", lowered)
    slug = slug.strip("-")
    return slug or "topic"


def _dump_writer_debug_output(
    *,
    topic: str,
    revision_iteration: int,
    result: dict[str, object],
) -> None:
    repo_root = Path(__file__).resolve().parents[1]
    debug_dir = repo_root / "output" / "_debug"
    debug_dir.mkdir(parents=True, exist_ok=True)

    topic_slug = _slugify_topic(topic)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    base_name = f"{topic_slug}_{revision_iteration}_{timestamp}"

    raw_path = debug_dir / f"writer_raw_{base_name}.json"
    raw_path.write_text(
        json.dumps(result, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    article = ""
    draft_content = result.get("draft_content")
    if isinstance(draft_content, dict):
        article_val = draft_content.get("article", "")
        if isinstance(article_val, str):
            article = article_val
    article_path = debug_dir / f"writer_article_{base_name}.md"
    article_path.write_text(article, encoding="utf-8")


def _normalize_article_escapes(article: str) -> str:
    # Claude bazen hem gercek newline hem literal \n uretiyor.
    # Literal \n dizilerini gercek newline'a cevir, sonra
    # birden fazla art arda newline'i iki newline ile sinirla.
    if not isinstance(article, str):
        return article
    normalized = article.replace("\\n", "\n")
    normalized = re.sub(r"\n{3,}", "\n\n", normalized)
    return normalized


def _validate_writer_structure(result: dict[str, object]) -> list[dict[str, object]]:
    """
    LLM ciktisi master prompt yapisina uymuyorsa INVALID OUTPUT.
    Donus: normalize edilmis article_outline listesi.
    """
    status = str(result.get("output_status") or "ok").strip()
    if status == "INVALID_OUTPUT":
        reason = result.get("invalid_reason", "model bildirdi")
        raise RuntimeError(f"INVALID OUTPUT: {reason}")

    outline = result.get("article_outline")
    if not isinstance(outline, list) or len(outline) != len(ARTICLE_OUTLINE_KEYS):
        raise RuntimeError(
            f"INVALID OUTPUT: article_outline 8 eleman olmali (geldi: {type(outline).__name__}, "
            f"len={len(outline) if isinstance(outline, list) else 'n/a'})"
        )

    normalized: list[dict[str, object]] = []
    for i, key in enumerate(ARTICLE_OUTLINE_KEYS):
        item = outline[i]
        if not isinstance(item, dict):
            raise RuntimeError(f"INVALID OUTPUT: article_outline[{i}] nesne degil")
        if item.get("section_key") != key:
            raise RuntimeError(
                f"INVALID OUTPUT: article_outline[{i}].section_key beklenen {key!r} "
                f"geldi {item.get('section_key')!r}"
            )
        title = item.get("title")
        if not (isinstance(title, str) and title.strip()):
            raise RuntimeError(f"INVALID OUTPUT: article_outline[{i}].title bos")
        bullets = item.get("bullets")
        if not isinstance(bullets, list) or len(bullets) < 1:
            raise RuntimeError(f"INVALID OUTPUT: article_outline[{i}].bullets en az 1 madde olmali")
        normalized.append(dict(item))

    draft_content = result.get("draft_content")
    if isinstance(draft_content, dict):
        raw_article = draft_content.get("article", "")
    else:
        raw_article = ""
    article = _normalize_article_escapes(raw_article if isinstance(raw_article, str) else "")
    if isinstance(draft_content, dict):
        draft_content["article"] = article
    if not isinstance(article, str) or not article.strip():
        raise RuntimeError("INVALID OUTPUT: draft_content.article bos")

    h2_sections = split_h2_sections(article)
    if len(h2_sections) < 8:
        raise RuntimeError(
            f"INVALID OUTPUT: en az 8 adet ## bolumu olmali (sayildi: {len(h2_sections)})"
        )

    if not re.search(r"t[üu]rkiye", article, re.IGNORECASE):
        raise RuntimeError("INVALID OUTPUT: Turkiye bolumu metinde 'Turkiye' / 'Türkiye' gecmiyor")

    idx_m = ARTICLE_OUTLINE_KEYS.index("mekanizma")
    idx_k = ARTICLE_OUTLINE_KEYS.index("kanit_seviyesi")
    for idx, label in ((idx_m, "mekanizma"), (idx_k, "kanit_seviyesi")):
        block = h2_sections[idx]
        wordish = len(re.findall(r"\w+", block, flags=re.UNICODE))
        if wordish < 40:
            raise RuntimeError(
                f"INVALID OUTPUT: {label} bolumu yetersiz derinlik (kelime ~{wordish}, min 40)"
            )

    return normalized


class WriterAgent(PromptBackedAgent):
    def __init__(self) -> None:
        super().__init__("agents/writer_agent.md")

    def run(self, state: EstranovaState) -> EstranovaState:
        topic = state["topic"]
        audience = state.get("audience", "40+ kadinlar")
        content_goal = state.get("content_goal", "")
        disclaimer_needed = bool(state.get("disclaimer_needed", True))
        risk_level = state.get("risk_level_current", state.get("risk_level_initial", "medium"))

        approved_sources = state.get("approved_sources", [])
        key_claims = state.get("key_claims", [])
        revision_feedback = state.get("revision_feedback", [])
        revision_iteration = int(state.get("revision_iteration", 0))
        user_context = str(state.get("user_context", "") or "").strip()
        article_angle = str(state.get("article_angle") or "").strip()
        raw_emphasis = state.get("content_emphasis") or []
        content_emphasis: list[str] = (
            list(raw_emphasis) if isinstance(raw_emphasis, list) else []
        )
        internal_link_suggestions = str(state.get("internal_link_suggestions") or "").strip()

        fb_joined = "\n".join(str(x).strip() for x in revision_feedback if str(x).strip())
        prev_snap = str(state.get("writer_revision_feedback_snapshot", "") or "")
        stagnation = bool(
            revision_iteration >= 2 and fb_joined and prev_snap and fb_joined == prev_snap
        )

        user_payload = {
            "topic": topic,
            "audience": audience,
            "content_goal": content_goal,
            "risk_level": risk_level,
            "approved_sources": approved_sources,
            "key_claims": key_claims,
            "disclaimer_needed": disclaimer_needed,
            "revision_iteration": revision_iteration,
            "revision_feedback": revision_feedback,
            "user_context": user_context,
            "article_angle": article_angle,
            "content_emphasis": content_emphasis,
            "internal_link_suggestions": internal_link_suggestions,
            "revision_stagnation_warning": (
                "UYARI: Onceki revizyon turunda ayni geri bildirim listesi tekrarlandi. "
                "Metni kokten sadelestir; onceki turda cozulmeyen sorunlari tekrar etme; "
                "riskli cumleleri cumle bazinda yeniden yaz."
                if stagnation
                else ""
            ),
        }

        try:
            result = self.call_llm_json(
                role="writer",
                user_payload=json.dumps(user_payload, ensure_ascii=False),
                state_for_logging=state,
                max_tokens=WRITER_MAX_OUTPUT_TOKENS,
            )
        except Exception as exc:
            raise RuntimeError(f"WriterAgent LLM call failed: {exc}") from exc

        _dump_writer_debug_output(
            topic=topic,
            revision_iteration=revision_iteration,
            result=result,
        )

        try:
            validated_outline = _validate_writer_structure(result)
        except RuntimeError as exc:
            if revision_iteration > 0:
                state["revision_validation_failed"] = True
                state["best_effort_publish"] = True
                state["pipeline_halt_reason"] = "revision_validation_failed"
                append_history(state, "writer", f"revision validation failed: {exc}")
                return state
            raise
        state["article_outline"] = validated_outline

        draft_content = result.get("draft_content", {})

        standard_disclaimer = (
            "Bu içerik yalnızca bilgilendirme amaçlıdır. Tıbbi tavsiye, teşhis veya tedavi yerine geçmez. "
            "Sağlık durumunuzla ilgili sorularınız için lütfen doktorunuza veya diğer nitelikli sağlık uzmanlarına danışın."
        )

        def ensure_disclaimer(text: str) -> str:
            if not text:
                return standard_disclaimer
            if "bilgilendirme amaçlıdır" not in text.lower():
                # Artirilacak metni saga ekle; sosyal/bulten metnini bozmamak icin kisa tut.
                return text.rstrip() + "\n\n" + standard_disclaimer
            return text

        article_text = draft_content.get("article", "")
        social_text = draft_content.get("social_post", "")
        newsletter_text = draft_content.get("newsletter", "")

        if disclaimer_needed:
            article_text = ensure_disclaimer(article_text)
            # Sosyal ve bulten icin de güvenlik cizerini koruyoruz (opsiyonel ama pratik).
            social_text = ensure_disclaimer(social_text)
            newsletter_text = ensure_disclaimer(newsletter_text)

            if "doktorunuza" not in article_text.lower():
                article_text = article_text.rstrip() + " Doktorunuza danışın."

        state["draft"] = DraftContent(
            article=article_text,
            social_post=social_text,
            newsletter=newsletter_text,
        )

        claim_trace_in = result.get("claim_trace", [])
        state["claim_trace"] = [
            ClaimTrace(
                claim_id=item["claim_id"],
                content_refs=item.get("content_refs", []),
            )
            for item in claim_trace_in
        ]

        state["flagged_claims"] = result.get("flagged_claims", [])

        if result.get("human_review_required"):
            state["human_review_required"] = True
            state["risk_level_current"] = "high"

        state["writer_revision_feedback_snapshot"] = fb_joined

        append_history(state, "writer", "writer done")
        return state
