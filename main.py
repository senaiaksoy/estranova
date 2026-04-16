from __future__ import annotations

import argparse
import json
from typing import Any

from langgraph.graph import END, StateGraph

from agents import (
    ComplianceExpertAgent,
    MedicalCheckerAgent,
    OrchestratorAgent,
    PublisherAgent,
    ResearchAgent,
    WriterAgent,
)
from state import EstranovaState, initialize_state


def build_graph() -> Any:
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
    }
    if args.pretty:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(payload, ensure_ascii=False))


if __name__ == "__main__":
    main()
