from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Literal, NotRequired, TypedDict
from uuid import uuid4

from config.pipeline_limits import MAX_REVISION_ITERATIONS
from naming import slugify_topic


RiskLevel = Literal["low", "medium", "high"]
ClaimStatus = Literal["draft", "supported", "partial", "unsupported"]
Decision = Literal[
    "unknown",
    "ready_to_publish",
    "ready_to_publish_best_effort",
    "revision_required",
    "rejected",
]


class Source(TypedDict):
    id: str
    title: str
    publisher: str
    year: int
    url: str
    source_type: str
    evidence_level: Literal["high", "medium", "low"]


class Claim(TypedDict):
    id: str
    text: str
    source_ids: list[str]
    status: ClaimStatus


class FindingCommentary(TypedDict):
    claim_id: str
    finding: str
    commentary: str


class FlaggedClaim(TypedDict):
    claim_id: str
    reason: str
    severity: Literal["low", "medium", "high"]
    text_ref: str


class DraftContent(TypedDict):
    article: str
    social_post: str
    newsletter: str


class ClaimTrace(TypedDict):
    claim_id: str
    content_refs: list[str]


class FactcheckReport(TypedDict):
    key_claims_summary: list[dict[str, Any]]
    notes: str


class Violation(TypedDict):
    type: str
    severity: Literal["critical", "medium", "low"]
    text_ref: str
    rule_id: str
    fix_suggestion: str


class FinalApprover(TypedDict):
    type: Literal["agent", "human"]
    name: str
    timestamp: str


class ComplianceStandardDecision(TypedDict):
    """Zorunlu sozlesme: UI ve orchestrator tek kaynak."""

    decision: Literal["ready_to_publish", "needs_revision"]
    score: int


class ComplianceBlock(TypedDict):
    compliance_score: int
    required_fixes: list[str]
    final_decision: Decision
    final_approver: FinalApprover
    standard_decision: NotRequired[ComplianceStandardDecision]


class StateHistoryEntry(TypedDict):
    stage: str
    summary: str
    timestamp: str


class PublisherOutput(TypedDict, total=False):
    cms_format: str
    content: dict[str, Any]
    seo: dict[str, Any]
    internal_linking: dict[str, Any]
    media: dict[str, Any]


class InternalSource(TypedDict):
    source: str
    chunk_index: int
    content: str


class LLMCall(TypedDict):
    agent: str
    role: str
    provider: str
    model: str
    response_length_chars: int


class EstranovaState(TypedDict, total=False):
    state_version: str
    run_id: str
    created_at: str
    updated_at: str
    topic: str
    output_slug: str
    audience: str
    content_goal: str
    risk_level_initial: RiskLevel
    risk_level_current: RiskLevel
    disclaimer_needed: bool
    human_review_required: bool
    external_search_needed: bool
    internal_sources: list[InternalSource]
    llm_calls: list[LLMCall]
    approved_sources: list[Source]
    key_claims: list[Claim]
    finding_vs_commentary: list[FindingCommentary]
    flagged_claims: list[FlaggedClaim]
    draft: DraftContent
    claim_trace: list[ClaimTrace]
    factcheck_report: FactcheckReport
    violations: list[Violation]
    compliance: ComplianceBlock
    state_history: list[StateHistoryEntry]
    publisher_output: PublisherOutput
    revision_iteration: int
    max_revision_iterations: int
    iteration_count: int
    current_iteration: int
    compliance_to_writer_routes: int
    revision_feedback: list[str]
    user_context: str
    pipeline_halt_reason: str
    compliance_revision_route_count: int
    writer_revision_feedback_snapshot: str
    best_effort_publish: bool


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def initialize_state(
    topic: str,
    audience: str = "40+ kadinlar",
    content_goal: str = "bilgilendirici makale + sosyal medya + bulten + publisher paketi",
    risk_level: RiskLevel = "medium",
    user_context: str = "",
) -> EstranovaState:
    timestamp = now_iso()
    return EstranovaState(
        state_version="1.0",
        run_id=str(uuid4()),
        created_at=timestamp,
        updated_at=timestamp,
        topic=topic,
        output_slug=slugify_topic(topic),
        audience=audience,
        content_goal=content_goal,
        risk_level_initial=risk_level,
        risk_level_current=risk_level,
        disclaimer_needed=True,
        human_review_required=(risk_level == "high"),
        external_search_needed=False,
        internal_sources=[],
        llm_calls=[],
        approved_sources=[],
        key_claims=[],
        finding_vs_commentary=[],
        flagged_claims=[],
        draft=DraftContent(article="", social_post="", newsletter=""),
        claim_trace=[],
        factcheck_report=FactcheckReport(key_claims_summary=[], notes=""),
        violations=[],
        compliance=ComplianceBlock(
            compliance_score=0,
            required_fixes=[],
            final_decision="unknown",
            final_approver=FinalApprover(type="agent", name="", timestamp=""),
        ),
        state_history=[],
        publisher_output=PublisherOutput(),
        revision_iteration=0,
        max_revision_iterations=MAX_REVISION_ITERATIONS,
        iteration_count=0,
        current_iteration=0,
        compliance_to_writer_routes=0,
        revision_feedback=[],
        user_context=user_context,
        pipeline_halt_reason="",
        compliance_revision_route_count=0,
        writer_revision_feedback_snapshot="",
        best_effort_publish=False,
    )


def append_history(state: EstranovaState, stage: str, summary: str) -> None:
    state.setdefault("state_history", []).append(
        StateHistoryEntry(stage=stage, summary=summary, timestamp=now_iso())
    )
    state["updated_at"] = now_iso()
