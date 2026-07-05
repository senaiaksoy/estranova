from __future__ import annotations

import json
from dataclasses import asdict
from pathlib import Path

from .models import Signal


def ensure_runtime_dirs(root: Path) -> None:
    for relative in ("data/raw", "data/reports", "data/logs", "data/signals"):
        (root / relative).mkdir(parents=True, exist_ok=True)


def append_signal_log(root: Path, signal: Signal) -> Path:
    ensure_runtime_dirs(root)
    path = root / "data" / "logs" / "signals.jsonl"
    payload = asdict(signal)
    payload["label"] = signal.label.value
    payload["confidence"] = signal.confidence.value
    with path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(payload, ensure_ascii=False) + "\n")
    return path
