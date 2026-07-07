"""
output/ kokundeki .md dosyalarini, eslik eden *-report.json final_decision
degeri yayina hazir degilse output/drafts/ altina tasir.

Kullanim (repo kokunden): python scripts/migrate_needs_revision_output_md_to_drafts.py

main.save_draft_to_output_drafts ile frontmatter eklenir; kokteki duz .md silinir.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

# Repo kokunu path'e ekle
_REPO_ROOT = Path(__file__).resolve().parents[1]
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))

from main import save_draft_to_output_drafts  # noqa: E402


_PUBLISH_READY = frozenset({"ready_to_publish", "ready_to_publish_best_effort"})


def _date_prefix_from_basename(basename: str) -> str:
    """'2026-04-16-foo-bar' -> '2026-04-16'"""
    if len(basename) >= 10 and basename[4] == "-" and basename[7] == "-":
        return basename[:10]
    raise ValueError(f"Tarih oneki cozulemedi: {basename!r}")


def migrate() -> list[str]:
    output_dir = _REPO_ROOT / "output"
    if not output_dir.is_dir():
        return []

    actions: list[str] = []
    for report_path in sorted(output_dir.glob("*-report.json")):
        try:
            data = json.loads(report_path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError) as exc:
            actions.append(f"SKIP {report_path.name}: {exc}")
            continue

        fd = data.get("final_decision")
        if fd in _PUBLISH_READY:
            continue

        base = report_path.name.removesuffix("-report.json")
        md_src = output_dir / f"{base}.md"
        if not md_src.is_file():
            continue

        topic = str(data.get("topic") or "").strip()
        if not topic:
            actions.append(f"SKIP {md_src.name}: raporda topic yok")
            continue

        try:
            date_str = _date_prefix_from_basename(base)
        except ValueError:
            actions.append(f"SKIP {md_src.name}: basename tarih formati")
            continue

        body = md_src.read_text(encoding="utf-8")
        dest = save_draft_to_output_drafts(body, topic, date_str)
        md_src.unlink()
        actions.append(f"MOVED {md_src.name} -> {dest.relative_to(_REPO_ROOT)}")

    return actions


if __name__ == "__main__":
    log = migrate()
    for line in log:
        print(line)
    if not log:
        print("Tasima yapilmadi (uygun dosya yok veya tum raporlar yayina hazir).")
