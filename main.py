from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

from state import EstranovaState, initialize_state


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
    parser.add_argument("topic", help="Content topic to process")
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
    return parser.parse_args()


def _slugify_topic(topic: str) -> str:
    slug = topic.strip().lower()
    translit = str.maketrans("çğıöşü", "cgiosu")
    slug = slug.translate(translit)
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "icerik"


def _estimate_cost_usd(llm_calls: list[dict[str, Any]]) -> float:
    """
    Heuristic cost estimate based on response length.
    Approximation: 1 token ~= 4 chars.
    """
    usd_per_1m_output_tokens = {
        "gpt-4o": 10.0,
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


def save_operational_outputs(result: EstranovaState, payload: dict[str, Any]) -> bool:
    output_dir = Path("output")
    output_dir.mkdir(parents=True, exist_ok=True)

    fd = result.get("compliance", {}).get("final_decision")
    is_publish_ready = fd in ("ready_to_publish", "ready_to_publish_best_effort")

    today = datetime.now().strftime("%Y-%m-%d")
    topic_slug = _slugify_topic(result.get("topic", "icerik"))
    base_name = f"{today}-{topic_slug}"

    final_article = (
        result.get("publisher_output", {}).get("content", {}).get("body_markdown", "")
        or result.get("draft", {}).get("article", "")
        or ""
    )
    if final_article.strip():
        md_path = output_dir / f"{base_name}.md"
        md_path.write_text(final_article, encoding="utf-8")

    llm_calls = result.get("llm_calls", [])
    report = {
        "generated_at": datetime.now().isoformat(),
        "topic": result.get("topic"),
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
        "agent_issue_counts": _build_agent_issue_counts(result),
        "pipeline_halt_reason": result.get("pipeline_halt_reason", ""),
        "best_effort_publish": bool(result.get("best_effort_publish", False)),
    }
    report_path = output_dir / f"{base_name}-report.json"
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    return is_publish_ready


def main() -> None:
    ensure_runtime_dependencies()
    from dotenv import load_dotenv

    load_dotenv()
    args = parse_args()

    app = build_graph()
    initial_state = initialize_state(
        topic=args.topic,
        audience=args.audience,
        content_goal=args.content_goal,
        risk_level=args.risk_level,
        user_context=args.user_context or "",
    )
    result: EstranovaState = app.invoke(initial_state)

    payload = {
        "topic": result["topic"],
        "risk_level_current": result["risk_level_current"],
        "human_review_required": result["human_review_required"],
        "final_decision": result["compliance"]["final_decision"],
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
    }
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
