"""
save_operational_outputs yonlendirmesini mock state ile dogrular:
- revision_required + skor 60 -> yalnizca output/drafts/*.md (kokte .md yok)
- ready_to_publish -> output/{date}-{slug}.md (kok)

Kullanim (repo kokunden): python scripts/verify_operational_output_routing.py
"""

from __future__ import annotations

import sys
import uuid
from datetime import datetime
from pathlib import Path

_REPO_ROOT = Path(__file__).resolve().parents[1]
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))

from main import build_save_payload, save_operational_outputs  # noqa: E402


def _minimal_state(
    *,
    final_decision: str,
    compliance_score: int,
    article: str,
    topic: str,
) -> dict:
    return {
        "topic": topic,
        "audience": "40+ kadinlar",
        "article_angle": "",
        "content_emphasis": [],
        "internal_link_suggestions": "",
        "compliance": {
            "final_decision": final_decision,
            "compliance_score": compliance_score,
            "required_fixes": [],
            "final_approver": {"type": "agent", "name": "mock", "timestamp": ""},
        },
        "draft": {"article": article, "social_post": "", "newsletter": ""},
        "publisher_output": {},
        "violations": [],
        "flagged_claims": [],
        "state_history": [],
        "llm_calls": [],
        "revision_iteration": 0,
        "iteration_count": 0,
        "current_iteration": 0,
        "pipeline_halt_reason": "",
        "best_effort_publish": False,
        "human_review_required": False,
    }


def main() -> None:
    uid = uuid.uuid4().hex[:10]
    today = datetime.now().strftime("%Y-%m-%d")
    topic_draft = f"ZZZ routing test draft {uid}"
    topic_pub = f"ZZZ routing test publish {uid}"

    t_lower = topic_draft.strip().lower().replace(" ", "-")
    base_draft = f"{today}-{t_lower}"

    # 1) Not publish-ready -> drafts only
    st_bad = _minimal_state(
        final_decision="revision_required",
        compliance_score=60,
        article="# Mock\n\nNot publish ready body.",
        topic=topic_draft,
    )
    payload_bad = build_save_payload(st_bad)  # type: ignore[arg-type]
    save_operational_outputs(st_bad, payload_bad)  # type: ignore[arg-type]

    root_md = _REPO_ROOT / "output" / f"{base_draft}.md"
    draft_md = _REPO_ROOT / "output" / "drafts" / f"{base_draft}.md"
    report_json = _REPO_ROOT / "output" / f"{base_draft}-report.json"

    if root_md.exists():
        raise SystemExit(f"FAIL: beklenmeyen kok dosyasi: {root_md}")
    if not draft_md.is_file():
        raise SystemExit(f"FAIL: taslak dosyasi yok: {draft_md}")
    print(f"OK: taslak (needs_revision) -> {draft_md.relative_to(_REPO_ROOT)}")

    # Temizlik: test ciktilari
    draft_md.unlink(missing_ok=True)
    report_json.unlink(missing_ok=True)

    # 2) Publish-ready -> yalnizca publisher_output.body_markdown kokte (draft tek basina yetmez)
    pub_body = "# Mock\n\nPublish ready body.\n\n---\n\n## Publisher ekleri\n\nPaket.\n"
    st_ok = _minimal_state(
        final_decision="ready_to_publish",
        compliance_score=95,
        article="# Mock\n\nSadece taslak (kokte kullanilmamali).",
        topic=topic_pub,
    )
    st_ok["publisher_output"] = {  # type: ignore[assignment]
        "content": {"body_markdown": pub_body},
    }
    payload_ok = build_save_payload(st_ok)  # type: ignore[arg-type]
    save_operational_outputs(st_ok, payload_ok)  # type: ignore[arg-type]

    t2 = topic_pub.strip().lower().replace(" ", "-")
    base_ok = f"{today}-{t2}"
    root_ok = _REPO_ROOT / "output" / f"{base_ok}.md"
    report_ok = _REPO_ROOT / "output" / f"{base_ok}-report.json"
    draft_ok = _REPO_ROOT / "output" / "drafts" / f"{base_ok}.md"

    if not root_ok.is_file():
        raise SystemExit(f"FAIL: yayin kok dosyasi yok: {root_ok}")
    if draft_ok.exists():
        raise SystemExit(f"FAIL: beklenmeyen taslak: {draft_ok}")
    if "Publisher ekleri" not in root_ok.read_text(encoding="utf-8"):
        raise SystemExit("FAIL: kok dosyasi publisher body_markdown icermiyor (draft'a dusmus olabilir).")
    print(f"OK: yayina hazir (publisher govdesi) -> {root_ok.relative_to(_REPO_ROOT)}")

    root_ok.unlink(missing_ok=True)
    report_ok.unlink(missing_ok=True)

    print("Tum kontroller gecti.")


if __name__ == "__main__":
    main()
