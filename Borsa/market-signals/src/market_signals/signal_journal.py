from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .models import Signal
from .storage import ensure_runtime_dirs

JOURNAL_RELATIVE_PATH = Path("data") / "signals" / "signal-journal.jsonl"


@dataclass(frozen=True)
class SignalJournalEntry:
    run_id: str
    asof: str
    instrument_id: str
    symbol: str
    signal_label: str
    confidence: str
    close: float
    reason: str
    features: dict[str, float]
    strategy_name: str
    strategy_version: str
    source_status: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> SignalJournalEntry:
        return cls(
            run_id=str(payload["run_id"]),
            asof=str(payload["asof"]),
            instrument_id=str(payload["instrument_id"]),
            symbol=str(payload["symbol"]),
            signal_label=str(payload["signal_label"]),
            confidence=str(payload["confidence"]),
            close=float(payload["close"]),
            reason=str(payload["reason"]),
            features={
                key: float(value)
                for key, value in dict(payload["features"]).items()
            },
            strategy_name=str(payload["strategy_name"]),
            strategy_version=str(payload["strategy_version"]),
            source_status=str(payload["source_status"]),
        )


def journal_path(root: Path) -> Path:
    return root / JOURNAL_RELATIVE_PATH


def entry_from_signal(
    signal: Signal,
    *,
    run_id: str,
    symbol: str,
    features: dict[str, float],
    strategy_name: str,
    strategy_version: str,
    source_status: str,
) -> SignalJournalEntry:
    return SignalJournalEntry(
        run_id=run_id,
        asof=signal.asof,
        instrument_id=signal.instrument_id,
        symbol=symbol,
        signal_label=signal.label.value,
        confidence=signal.confidence.value,
        close=signal.close,
        reason=signal.reason,
        features={key: float(value) for key, value in features.items()},
        strategy_name=strategy_name,
        strategy_version=strategy_version,
        source_status=source_status,
    )


def append_signal_journal(
    root: Path,
    signal: Signal,
    *,
    run_id: str,
    symbol: str,
    features: dict[str, float],
    strategy_name: str,
    strategy_version: str,
    source_status: str,
) -> Path:
    ensure_runtime_dirs(root)
    path = journal_path(root)
    entry = entry_from_signal(
        signal,
        run_id=run_id,
        symbol=symbol,
        features=features,
        strategy_name=strategy_name,
        strategy_version=strategy_version,
        source_status=source_status,
    )
    with path.open("a", encoding="utf-8") as handle:
        handle.write(
            json.dumps(entry.to_dict(), ensure_ascii=False, allow_nan=False) + "\n"
        )
    try:
        from .database import save_signal_journal_entry
        db_file = root / "data" / "signals" / "signals.db"
        save_signal_journal_entry(db_file, entry)
    except Exception:
        pass
    return path


def read_signal_journal(path: Path) -> list[SignalJournalEntry]:
    db_file = path.parent / "signals.db"
    if db_file.exists():
        try:
            from .database import read_signal_journal_entries
            return read_signal_journal_entries(db_file)
        except Exception:
            pass

    if not path.exists():
        return []

    entries: list[SignalJournalEntry] = []
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            try:
                entries.append(SignalJournalEntry.from_dict(json.loads(line)))
            except (KeyError, TypeError, ValueError, json.JSONDecodeError):
                continue
    return entries
