from __future__ import annotations

from datetime import datetime
from pathlib import Path

from .models import Signal
from .storage import ensure_runtime_dirs


def render_daily(signals: list[Signal]) -> str:
    lines = [
        "# Borsa Daily Signal Report",
        "",
        "Private research and decision-support output. This is not investment advice.",
        "",
    ]
    for signal in signals:
        lines.extend(
            [
                f"## {signal.instrument_id}",
                f"- Date: {signal.asof}",
                f"- Signal: {signal.label.value}",
                f"- Confidence: {signal.confidence.value}",
                f"- Close: {signal.close:.4f}",
                f"- Reason: {signal.reason}",
                "",
            ]
        )
    lines.append("Manual order review window: TEFAS cutoff context is 13:30 Istanbul time.")
    return "\n".join(lines) + "\n"


def write_daily_report(root: Path, signals: list[Signal]) -> Path:
    ensure_runtime_dirs(root)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S-%f")
    path = root / "data" / "reports" / f"daily-{stamp}.md"
    path.write_text(render_daily(signals), encoding="utf-8")
    return path
