from __future__ import annotations

import argparse
import json
import sys
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
    graph.add_node("human_review", orchestrator.human_review)
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
        {"publisher": "publisher", "human_review": "human_review"},
    )
    graph.add_conditional_edges(
        "human_review",
        orchestrator.route_after_human_review,
        {"publisher": "publisher", "end": END},
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
    return parser.parse_args()


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
            "final_article_quality": (
                "high"
                if result["compliance"]["final_decision"] == "ready_to_publish"
                else "needs_revision"
            ),
        },
    }
    if args.pretty:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(payload, ensure_ascii=False))


if __name__ == "__main__":
    main()
