from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

from agents.writer_agent import ALLOWED_CATEGORIES

from naming import output_file_basename, slugify_topic
from state import EstranovaState, initialize_state

APPROVALS_TS_PATH = Path("src") / "data" / "article-approvals.ts"


REQUIRED_PACKAGES = [
    "langgraph",
    "langchain",
    "langchain-community",
    "openai",
    "anthropic",
    "google-generativeai",
    "langchain-openai",
    "langchain-anthropic",
    "langchain-google-genai",
    "python-dotenv",
]


def ensure_runtime_dependencies() -> None:
    """Show actionable install hint if runtime dependencies are missing."""
    missing_import = None
    try:
        import langgraph  # noqa: F401
        import langchain_openai  # noqa: F401
        import langchain_anthropic  # noqa: F401
        import langchain_google_genai  # noqa: F401
        import agents  # noqa: F401
    except ModuleNotFoundError as exc:
        missing_import = exc.name

    if missing_import:
        install_cmd = f"pip install {' '.join(REQUIRED_PACKAGES)}"
        print(
            f"Eksik kutuphane tespit edildi: {missing_import}\n"
            f"Su komutu calistirin: {install_cmd}",
            file=sys.stderr,
        )
        raise SystemExit(1)


def build_graph() -> Any:
    from langgraph.graph import END, StateGraph

    from agents import (
        ComplianceExpertAgent,
        MedicalCheckerAgent,
        OrchestratorAgent,
        PublisherAgent,
        ResearchAgent,
        WriterAgent,
    )

    orchestrator = OrchestratorAgent()
    research = ResearchAgent()
    writer = WriterAgent()
    medical_checker = MedicalCheckerAgent()
    compliance = ComplianceExpertAgent()
    publisher = PublisherAgent()

    graph = StateGraph(EstranovaState)
    graph.add_node("start", orchestrator.mark_start)
    graph.add_node("research", research.run)
    graph.add_node("writer", writer.run)
    graph.add_node("validation", medical_checker.run)
    graph.add_node("compliance", compliance.run)
    graph.add_node("publisher", publisher.run)

    graph.set_entry_point("start")
    graph.add_edge("start", "research")
    graph.add_edge("research", "writer")
    graph.add_conditional_edges(
        "writer",
        orchestrator.route_after_writer,
        {"validation": "validation", "compliance": "compliance"},
    )
    graph.add_edge("validation", "compliance")
    graph.add_conditional_edges(
        "compliance",
        orchestrator.route_after_compliance,
        {"publisher": "publisher", "writer": "writer", "end": END},
    )
    graph.add_edge("publisher", END)
    return graph.compile()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Estranova LangGraph multi-agent simulation")
    parser.add_argument(
        "topic",
        nargs="?",
        default=None,
        metavar="TOPIC",
        help="İçerik konusu (alternatif: --topic / -t)",
    )
    parser.add_argument(
        "-t",
        "--topic",
        dest="topic_flag",
        default=None,
        metavar="STRING",
        help="Konu metni (pozisyon argümanı yerine veya birlikte)",
    )
    parser.add_argument("--audience", default="40+ kadinlar")
    parser.add_argument(
        "--content-goal",
        default="bilgilendirici makale + sosyal medya + bulten + publisher paketi",
    )
    parser.add_argument("--risk-level", choices=["low", "medium", "high"], default="medium")
    parser.add_argument("--pretty", action="store_true", help="Pretty print JSON output")
    parser.add_argument(
        "--user-context",
        default="",
        help="Okuyucu profili (Writer makale girisinde kullanilir; bos birakilabilir)",
    )
    parser.add_argument(
        "--category",
        choices=list(ALLOWED_CATEGORIES),
        default=None,
        help="Yayın kategorisi override (yoksa writer önerisi kullanılır)",
    )
    return parser.parse_args()


def resolved_topic(args: argparse.Namespace) -> str:
    """Pozisyon veya --topic; en az biri zorunlu."""
    t = (args.topic_flag or args.topic or "").strip()
    if not t:
        raise SystemExit(
            "Konu gerekli: ör. python main.py \"Menopozda uyku\" veya python main.py --topic \"...\""
        )
    return t


def _estimate_cost_usd(llm_calls: list[dict[str, Any]]) -> float:
    """
    Heuristic cost estimate based on response length.
    Approximation: 1 token ~= 4 chars.
    """
    usd_per_1m_output_tokens = {
        "gpt-4o": 10.0,
        "claude-sonnet-4-6": 15.0,
        "claude-opus-4-7": 75.0,
        "claude-3-5-sonnet-latest": 15.0,
        "gemini-1.5-pro": 7.0,
        "gemini-2.5-flash": 1.0,
    }
    total = 0.0
    for call in llm_calls:
        model = str(call.get("model", ""))
        chars = int(call.get("response_length_chars", 0) or 0)
        est_tokens = chars / 4
        per_1m = usd_per_1m_output_tokens.get(model, 8.0)
        total += (est_tokens / 1_000_000) * per_1m
    return round(total, 6)


def _build_agent_issue_counts(result: EstranovaState) -> dict[str, int]:
    counts = {
        "ResearchAgent": len(result.get("flagged_claims", [])),
        "WriterAgent": 0,
        "MedicalCheckerAgent": 0,
        "ComplianceExpertAgent": 0,
    }
    for violation in result.get("violations", []):
        v_type = violation.get("type", "")
        if v_type in {"style_risk", "overpromise", "disclaimer_gap", "medical_risk", "misleading_claim"}:
            counts["WriterAgent"] += 1
        elif v_type in {"low_compliance_score", "regulation_risk"}:
            counts["ComplianceExpertAgent"] += 1
        else:
            counts["MedicalCheckerAgent"] += 1
    return counts


def _final_article_quality_label(result: EstranovaState) -> str:
    fd = result.get("compliance", {}).get("final_decision")
    if fd == "ready_to_publish":
        return "high"
    if fd == "ready_to_publish_best_effort":
        return "best_effort"
    return "needs_revision"


def _derive_run_status(result: EstranovaState) -> str:
    final_decision = result.get("compliance", {}).get("final_decision")
    if final_decision == "ready_to_publish":
        return "published"
    if final_decision == "ready_to_publish_best_effort":
        return "published_best_effort"
    if result.get("human_review_required"):
        return "needs_human_review"
    if final_decision == "rejected":
        return "rejected"
    return "needs_revision"


def draft_markdown_path(topic: str, date_str: str) -> Path:
    """output/drafts/{date}-{topic}.md"""
    base = output_file_basename(topic, date_str)
    return Path("output") / "drafts" / f"{base}.md"


def blog_markdown_path(topic: str, date_str: str) -> Path:
    """src/content/blog/{date}-{topic}.md — Astro content collection; yalnizca onay sonrasi."""
    base = output_file_basename(topic, date_str)
    return Path("src") / "content" / "blog" / f"{base}.md"


def load_editorially_approved_pathnames() -> set[str]:
    if not APPROVALS_TS_PATH.exists():
        return set()
    source = APPROVALS_TS_PATH.read_text(encoding="utf-8")
    return set(re.findall(r"pathname:\s*['\"`]([^'\"`]+)['\"`]", source))


def planned_category_article_path(
    topic: str,
    date_str: str,
    category: str,
    slug_override: str | None = None,
) -> str:
    base = output_file_basename(topic, date_str)
    slug = slug_override or base.replace(f"{date_str}-", "", 1)
    category_path = "/".join(part for part in category.strip("/").split("/") if part)
    return f"/{category_path}/{slug}"


def is_path_editorially_approved(pathname: str) -> bool:
    return pathname in load_editorially_approved_pathnames()


def _strip_markdown_inline(text: str) -> str:
    """Inline markdown sözdizimini sıyır (bold/italic/code/link)."""
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)  # **bold** → bold
    text = re.sub(r"\*([^*]+)\*", r"\1", text)  # *italic* → italic
    text = re.sub(r"`([^`]+)`", r"\1", text)  # `code` → code
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)  # [text](url) → text
    return text


def _excerpt_from_markdown(md: str, max_len: int = 220) -> str:
    """Ilk anlamli paragraftan kisa ozet (Astro frontmatter description).

    Heading'leri atlar; blockquote (> ) ile baslayan ozet bloklarini icerige
    cevirir; markdown sözdizimini (bold, italic, link, code) plain text'e siyirir;
    "Kisa ozet:" gibi label prefixlerini de temizler.
    """
    paragraphs: list[str] = []
    for block in md.split("\n\n"):
        line = block.strip()
        if not line:
            continue
        first_line = line.split("\n", 1)[0].strip()
        if first_line.startswith("#"):
            continue
        # Blockquote: tüm satırların başındaki "> " markerini kaldır,
        # çok satırlı blockquote'u tek paragrafa çevir.
        if first_line.startswith(">"):
            cleaned = " ".join(
                re.sub(r"^>\s*", "", l).strip() for l in line.splitlines()
            ).strip()
        else:
            cleaned = first_line
        cleaned = _strip_markdown_inline(cleaned)
        # "Kisa ozet:" gibi label prefixini kaldir.
        cleaned = re.sub(
            r"^[Kk][ıiİI]sa\s+[öoÖO]zet\s*:\s*",
            "",
            cleaned,
        ).strip()
        if not cleaned:
            continue
        paragraphs.append(cleaned)
        if len(" ".join(paragraphs)) >= 48:
            break
    text = " ".join(paragraphs) if paragraphs else md.strip().replace("\n", " ")
    text = " ".join(text.split())
    if len(text) > max_len:
        cut = text[: max_len - 1].rsplit(" ", 1)[0]
        text = cut + "…"
    return text or "—"


def _blog_markdown_with_frontmatter(topic: str, body: str, date_str: str) -> str:
    """Astro blog koleksiyonu icin YAML frontmatter + govde."""
    title = topic.strip() or "Basliksiz"
    desc = _excerpt_from_markdown(body)
    lines = [
        "---",
        f"title: {json.dumps(title, ensure_ascii=False)}",
        f"description: {json.dumps(desc, ensure_ascii=False)}",
        f"date: {json.dumps(date_str, ensure_ascii=False)}",
        "---",
        "",
        body.strip(),
        "",
    ]
    return "\n".join(lines)


def save_approved_blog_article(body: str, topic: str, date_str: str) -> Path:
    """Onay sonrasi makaleyi Astro src/content/blog/ altina yazar (frontmatter zorunlu)."""
    path = blog_markdown_path(topic, date_str)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(_blog_markdown_with_frontmatter(topic, body, date_str), encoding="utf-8")
    return path


def _render_category_article_astro(
    *, topic: str, slug: str, category: str, blog_entry_id: str
) -> str:
    """src/pages/{category...}/{slug}.astro — blog koleksiyonundan markdown render."""
    _ = topic  # reserved for future hero / title overrides
    category_eyebrows: dict[str, str] = {
        "hormonal-gecis/perimenopoz": "Hormonal Geçiş · Perimenopoz",
        "hormonal-gecis/menopoza-hazirlik": "Hormonal Geçiş · Menopoza Hazırlık",
        "hormonal-gecis/menopoz": "Hormonal Geçiş · Menopoz",
        "hormonal-gecis/40-sonrasi": "Hormonal Geçiş · 40 Sonrası",
        "beden-yakinlik": "Beden & Yakınlık · Kadın sağlığı",
        "zamansiz-yasam": "Zamansız Yaşam · Yaşam tarzı",
        "zihin-denge": "Zihin & Denge · Ruhsal sağlık",
        "bilimsel-pencere": "Bilimsel Pencere · Derin bilim",
        "editorun-kosesi": "Editörün Köşesi · Yorum",
    }
    cat_parts = [p for p in category.strip("/").split("/") if p]
    category_route = "/" + "/".join(cat_parts + [slug])
    category_root = f"/{cat_parts[0]}"
    eyebrow = category_eyebrows.get(category, category)
    depth = category.count("/")
    rel = "../" * (depth + 2)
    hero_src = (
        "https://images.unsplash.com/photo-1518611012118-696072aa579a"
        "?auto=format&fit=crop&q=80&w=1800&h=1000"
    )
    hero_alt = (
        "Estranova editöryal görsel placeholder — submenu-heroes.ts altına özel görsel ekleyin."
    )
    eyebrow_js = json.dumps(eyebrow, ensure_ascii=False)
    hero_alt_json = json.dumps(hero_alt, ensure_ascii=False)

    raw = """---
import { getCollection, render } from 'astro:content';
import SiteLayout from '__REL__layouts/SiteLayout.astro';
import SiteNavbar from '__REL__components/site/SiteNavbar.astro';
import SiteFooter from '__REL__components/site/SiteFooter.astro';
import SubmenuHero from '__REL__components/site/SubmenuHero.astro';
import SubmenuArticleBody from '__REL__components/site/SubmenuArticleBody.astro';
import ArticleProsePanel from '__REL__components/site/ArticleProsePanel.astro';
import { submenuHeroByRoute } from '__REL__data/submenu-heroes';

const route = '__CATEGORY_ROUTE__';
const hero = submenuHeroByRoute[route] ?? {
  src: '__HERO_SRC__',
  alt: __HERO_ALT_JSON__,
};

const posts = await getCollection('blog');
const post = posts.find((p) => p.id === '__BLOG_ENTRY_ID__');
if (!post) {
  throw new Error('Blog girdisi bulunamadi: __BLOG_ENTRY_ID__');
}
const { Content } = await render(post);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value));
const publishedDate = formatDate(post.data.date);
---

<SiteLayout
  title={`${post.data.title} - Estranova`}
  description={post.data.description}
>
  <SiteNavbar currentPath="__CATEGORY_ROOT__" />

  <main id="main-content" class="text-[#2D2D2D]">
    <SubmenuHero
      eyebrow=__EYEBROW_JS__
      title={post.data.title}
      imageSrc={hero.src}
      imageAlt={hero.alt}
      compact
    />

    <SubmenuArticleBody>
      <section class="rounded-[28px] border border-[#D81B60]/15 bg-white p-7 shadow-[0_16px_44px_-24px_rgba(44,24,28,0.14)] ring-1 ring-black/[0.04] md:p-8">
        <div class="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div class="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-[#E8DDD4] to-[#C9A96E]/35 ring-2 ring-[#D81B60]/10" aria-hidden="true"></div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Estranova Editör Ekibi</p>
            <p class="text-xl font-semibold text-[#2D2D2D]">Tıbbi inceleme: Doç. Dr. Senai Aksoy</p>
            <p class="text-[#2D2D2D]/70">40+ kadın sağlığı odaklı editöryal içerik</p>
            <p class="mt-2 text-sm text-[#2D2D2D]/65">Yayın tarihi: {publishedDate}</p>
          </div>
        </div>
      </section>

      <section class="rounded-[28px] border border-[#C9A96E]/35 bg-gradient-to-br from-white to-[#FDF8F0]/90 p-7 shadow-sm ring-1 ring-[#C9A96E]/22 md:p-8">
        <h2 class="mb-4 font-serif text-3xl">Kısa Özet</h2>
        <p class="leading-relaxed text-[#2D2D2D]/80">{post.data.description}</p>
      </section>

      <ArticleProsePanel>
        <Content />
      </ArticleProsePanel>

      <section class="mt-14 rounded-[28px] border border-dashed border-[#D81B60]/30 bg-white/60 p-6 text-sm text-[#2D2D2D]/70 ring-1 ring-[#D81B60]/10 md:p-8">
        <p>
          <strong>Önemli not:</strong> Bu içerik yalnızca genel bilgilendirme amacıyla hazırlanmıştır.
          Tıbbi tavsiye, tanı veya tedavi yerine geçmez. Sağlık durumunuzla ilgili kararlar için lütfen
          bir sağlık profesyoneliyle görüşün.
        </p>
      </section>
    </SubmenuArticleBody>
  </main>

  <SiteFooter />
</SiteLayout>
"""
    return (
        raw.replace("__REL__", rel)
        .replace("__CATEGORY_ROUTE__", category_route)
        .replace("__HERO_SRC__", hero_src)
        .replace("__HERO_ALT_JSON__", hero_alt_json)
        .replace("__BLOG_ENTRY_ID__", blog_entry_id)
        .replace("__CATEGORY_ROOT__", category_root)
        .replace("__EYEBROW_JS__", eyebrow_js)
    )


def save_approved_article_with_routing(
    body: str,
    topic: str,
    date_str: str,
    category: str,
    slug_override: str | None = None,
) -> tuple[Path, Path]:
    """
    Markdown'ı src/content/blog/ altına yazar (içerik kaynağı),
    ayrıca src/pages/{category}/.../{slug}.astro üretir (gezilebilir sayfa).
    Returns: (markdown_path, astro_page_path)
    """
    if category not in ALLOWED_CATEGORIES:
        raise ValueError(f"category izin listesinde degil: {category!r}")

    planned_pathname = planned_category_article_path(topic, date_str, category, slug_override)
    if not is_path_editorially_approved(planned_pathname):
        raise ValueError(
            "Bu route icin editoryal onay kaydi bulunamadi: "
            f"{planned_pathname}. Once src/data/article-approvals.ts icine onay ekleyin."
        )

    md_path = save_approved_blog_article(body, topic, date_str)
    base = output_file_basename(topic, date_str)
    slug = slug_override or base.replace(f"{date_str}-", "", 1)
    astro_dir = Path("src/pages").joinpath(*category.split("/"))
    astro_dir.mkdir(parents=True, exist_ok=True)
    astro_path = astro_dir / f"{slug}.astro"
    astro_content = _render_category_article_astro(
        topic=topic,
        slug=slug,
        category=category,
        blog_entry_id=md_path.stem,
    )
    astro_path.write_text(astro_content, encoding="utf-8")
    return md_path, astro_path


def save_draft_to_output_drafts(body: str, topic: str, date_str: str) -> Path:
    """Taslak: output/drafts/ altinda frontmatter ile status: draft."""
    path = draft_markdown_path(topic, date_str)
    path.parent.mkdir(parents=True, exist_ok=True)
    topic_json = json.dumps(topic, ensure_ascii=False)
    date_json = json.dumps(date_str, ensure_ascii=False)
    frontmatter = f"---\nstatus: draft\ndate: {date_json}\ntopic: {topic_json}\n---\n\n"
    path.write_text(frontmatter + body.strip() + "\n", encoding="utf-8")
    return path


def save_operational_outputs(
    result: EstranovaState,
    payload: dict[str, Any],
    *,
    write_output_article_md: bool = True,
) -> bool:
    output_dir = Path("output")
    output_dir.mkdir(parents=True, exist_ok=True)

    fd = result.get("compliance", {}).get("final_decision")
    is_publish_ready = fd in ("ready_to_publish", "ready_to_publish_best_effort")

    today = datetime.now().strftime("%Y-%m-%d")
    topic_raw = str(result.get("topic", "") or "").strip()
    base_name = output_file_basename(topic_raw, today)

    pub_raw = (result.get("publisher_output") or {}).get("content", {}).get("body_markdown", "")
    publisher_body = pub_raw if isinstance(pub_raw, str) else ""
    dr_raw = (result.get("draft") or {}).get("article", "")
    draft_body = dr_raw if isinstance(dr_raw, str) else ""

    draft_chars = len(draft_body.strip())
    # publisher dugumu calismadan veya state'te publisher_output bos kaldiginda (or. taslak kaydi)
    # yalnizca writer govdesi yaziliyordu; publisher SEO/SSS/ic baglanti paketi hic eklenmiyordu.
    if draft_chars > 0 and not publisher_body.strip():
        from agents.publisher_agent import compose_publisher_body_markdown

        publisher_body = compose_publisher_body_markdown(result)
    pub_chars = len(publisher_body.strip())

    root_md_written = False
    draft_md_written = False
    draft_fallback_missing_publisher = False
    root_skip_reason: str | None = None

    if write_output_article_md:
        if is_publish_ready:
            if pub_chars:
                md_path = output_dir / f"{base_name}.md"
                md_path.write_text(publisher_body, encoding="utf-8")
                root_md_written = True
            else:
                root_skip_reason = "publish_ready_but_publisher_body_markdown_empty"
                if draft_chars:
                    save_draft_to_output_drafts(draft_body, topic_raw, today)
                    draft_md_written = True
                    draft_fallback_missing_publisher = True
        else:
            combined = publisher_body or draft_body
            if combined.strip():
                save_draft_to_output_drafts(combined, topic_raw, today)
                draft_md_written = True

    llm_calls = result.get("llm_calls", [])
    report = {
        "generated_at": datetime.now().isoformat(),
        "topic": result.get("topic"),
        "output_slug": slugify_topic(topic_raw),
        "status": _derive_run_status(result),
        "final_decision": result.get("compliance", {}).get("final_decision"),
        "human_review_required": bool(result.get("human_review_required", False)),
        "quality_assessment": payload.get("quality_assessment", {}),
        "models_used": [
            {
                "agent": call.get("agent"),
                "provider": call.get("provider"),
                "model": call.get("model"),
                "response_length_chars": call.get("response_length_chars", 0),
            }
            for call in llm_calls
        ],
        "estimated_cost_usd": _estimate_cost_usd(llm_calls),
        "compliance_score": result.get("compliance", {}).get("compliance_score"),
        "revision_history": [
            entry
            for entry in result.get("state_history", [])
            if entry.get("stage") in {"revision_loop", "writer", "compliance"}
        ],
        "revision_iterations": int(result.get("revision_iteration", 0)),
        "iteration_count": int(result.get("iteration_count", 0)),
        "current_iteration": int(result.get("current_iteration", 0)),
        "agent_issue_counts": _build_agent_issue_counts(result),
        "pipeline_halt_reason": result.get("pipeline_halt_reason", ""),
        "best_effort_publish": bool(result.get("best_effort_publish", False)),
        "writer_preferences": {
            "article_angle": result.get("article_angle"),
            "content_emphasis": result.get("content_emphasis"),
            "internal_link_suggestions": result.get("internal_link_suggestions"),
        },
        "target_category": result.get("target_category"),
        "output_file_routing": {
            "publisher_body_markdown_chars": pub_chars,
            "draft_article_chars": draft_chars,
            "root_md_written": root_md_written,
            "draft_md_written": draft_md_written,
            "draft_saved_as_fallback_missing_publisher": draft_fallback_missing_publisher,
            "root_md_skipped_reason": root_skip_reason,
        },
    }
    report_path = output_dir / f"{base_name}-report.json"
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    return is_publish_ready


def build_save_payload(result: EstranovaState) -> dict[str, Any]:
    """Streamlit ve CLI icin save_operational_outputs rapor yuku."""
    return {
        "topic": result.get("topic"),
        "risk_level_current": result.get("risk_level_current"),
        "human_review_required": result.get("human_review_required"),
        "final_decision": result.get("compliance", {}).get("final_decision"),
        "publisher_output": result.get("publisher_output", {}),
        "state_history": result.get("state_history", []),
        "llm_calls": result.get("llm_calls", []),
        "quality_assessment": {
            "compliance_score": result.get("compliance", {}).get("compliance_score", None),
            "critical_violations": len(
                [v for v in result.get("violations", []) if v.get("severity") == "critical"]
            ),
            "final_article_quality": _final_article_quality_label(result),
        },
        "pipeline_halt_reason": result.get("pipeline_halt_reason", ""),
        "best_effort_publish": bool(result.get("best_effort_publish", False)),
        "writer_preferences": {
            "article_angle": result.get("article_angle"),
            "content_emphasis": result.get("content_emphasis"),
            "internal_link_suggestions": result.get("internal_link_suggestions"),
        },
        "target_category": result.get("target_category"),
    }


def main() -> None:
    ensure_runtime_dependencies()
    from dotenv import load_dotenv

    load_dotenv(override=True)
    args = parse_args()
    topic = resolved_topic(args)

    app = build_graph()
    initial_state = initialize_state(
        topic=topic,
        audience=args.audience,
        content_goal=args.content_goal,
        risk_level=args.risk_level,
        user_context=args.user_context or "",
    )
    result: EstranovaState = app.invoke(initial_state)
    if args.category is not None:
        result["target_category"] = args.category

    payload = build_save_payload(result)
    if args.pretty:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(payload, ensure_ascii=False))

    if save_operational_outputs(result, payload):
        print("Icerik output/ klasorune kaydedildi. dashboard.py ile raporu gorebilirsiniz.")
    else:
        print("Rapor output/ klasorune kaydedildi. Icerik yayina hazir olmadigi icin .md olusturulmadi.")


if __name__ == "__main__":
    main()
