from __future__ import annotations

import json
import math
import statistics
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .models import PricePoint
from .signal_journal import SignalJournalEntry
from .storage import ensure_runtime_dirs

OUTCOMES_RELATIVE_PATH = Path("data") / "signals" / "signal-outcomes.jsonl"


@dataclass(frozen=True)
class OutcomeRecord:
    signal_run_id: str
    instrument_id: str
    signal_label: str
    horizon_days: int
    entry_close: float
    exit_close: float | None
    return_pct: float | None
    max_drawdown_pct: float | None
    max_runup_pct: float | None
    outcome_status: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> OutcomeRecord:
        return cls(
            signal_run_id=str(payload["signal_run_id"]),
            instrument_id=str(payload["instrument_id"]),
            signal_label=str(payload["signal_label"]),
            horizon_days=int(payload["horizon_days"]),
            entry_close=float(payload["entry_close"]),
            exit_close=_optional_float(payload["exit_close"]),
            return_pct=_optional_float(payload["return_pct"]),
            max_drawdown_pct=_optional_float(payload["max_drawdown_pct"]),
            max_runup_pct=_optional_float(payload["max_runup_pct"]),
            outcome_status=str(payload["outcome_status"]),
        )


def outcome_path(root: Path) -> Path:
    return root / OUTCOMES_RELATIVE_PATH


def measure_outcomes(
    entries: list[SignalJournalEntry],
    market_data: dict[str, list[PricePoint]],
    horizons: tuple[int, ...] = (1, 5, 20, 60),
) -> list[OutcomeRecord]:
    if any(horizon <= 0 for horizon in horizons):
        raise ValueError("horizons must be positive")

    outcomes: list[OutcomeRecord] = []
    for entry in entries:
        entry_close = float(entry.close)
        if not _is_positive_finite(entry_close):
            raise ValueError("entry close must be finite and positive")

        points = market_data.get(entry.instrument_id, [])
        date_to_index = {point.date: index for index, point in enumerate(points)}
        start_index = date_to_index.get(entry.asof)

        for horizon in horizons:
            if start_index is None or start_index + horizon >= len(points):
                outcomes.append(_missing_price_record(entry, horizon))
                continue

            exit_index = start_index + horizon
            exit_close = float(points[exit_index].close)
            future_points = points[start_index + 1 : exit_index + 1]
            if any(not _is_positive_finite(float(point.close)) for point in future_points):
                raise ValueError("price closes must be finite and positive")

            moves = [
                (float(point.close) / entry_close - 1.0) * 100
                for point in future_points
            ]
            outcomes.append(
                OutcomeRecord(
                    signal_run_id=entry.run_id,
                    instrument_id=entry.instrument_id,
                    signal_label=entry.signal_label,
                    horizon_days=int(horizon),
                    entry_close=entry_close,
                    exit_close=exit_close,
                    return_pct=round((exit_close / entry_close - 1.0) * 100, 4),
                    max_drawdown_pct=round(abs(min(min(moves), 0.0)), 4),
                    max_runup_pct=round(max(max(moves), 0.0), 4),
                    outcome_status="measured",
                )
            )
    return outcomes


def summarize_outcomes_by_label(
    outcomes: list[OutcomeRecord],
) -> dict[str, dict[str, float]]:
    grouped: dict[str, list[OutcomeRecord]] = {}
    for outcome in outcomes:
        if outcome.outcome_status != "measured" or outcome.return_pct is None:
            continue
        grouped.setdefault(outcome.signal_label, []).append(outcome)

    summary: dict[str, dict[str, float]] = {}
    for label, records in grouped.items():
        returns = [float(record.return_pct) for record in records]
        drawdowns = [
            float(record.max_drawdown_pct)
            for record in records
            if record.max_drawdown_pct is not None
        ]
        runups = [
            float(record.max_runup_pct)
            for record in records
            if record.max_runup_pct is not None
        ]
        summary[label] = {
            "count": float(len(records)),
            "average_return_pct": statistics.mean(returns),
            "median_return_pct": statistics.median(returns),
            "positive_rate_pct": sum(1 for value in returns if value > 0) / len(returns) * 100,
            "worst_drawdown_pct": max(drawdowns) if drawdowns else 0.0,
            "best_runup_pct": max(runups) if runups else 0.0,
        }
    return summary


def append_outcome_records(root: Path, records: list[OutcomeRecord]) -> Path:
    ensure_runtime_dirs(root)
    path = outcome_path(root)
    with path.open("a", encoding="utf-8") as handle:
        for record in records:
            handle.write(
                json.dumps(record.to_dict(), ensure_ascii=False, allow_nan=False) + "\n"
            )
    try:
        from .database import save_outcome_records
        db_file = root / "data" / "signals" / "signals.db"
        save_outcome_records(db_file, records)
    except Exception:
        pass
    return path


def read_outcome_records(path: Path) -> list[OutcomeRecord]:
    db_file = path.parent / "signals.db"
    if db_file.exists():
        try:
            from .database import read_outcome_records as read_db_outcomes
            return read_db_outcomes(db_file)
        except Exception:
            pass

    if not path.exists():
        return []

    records: list[OutcomeRecord] = []
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            try:
                records.append(OutcomeRecord.from_dict(json.loads(line)))
            except (KeyError, TypeError, ValueError, json.JSONDecodeError):
                continue
    return records


def _missing_price_record(entry: SignalJournalEntry, horizon: int) -> OutcomeRecord:
    return OutcomeRecord(
        signal_run_id=entry.run_id,
        instrument_id=entry.instrument_id,
        signal_label=entry.signal_label,
        horizon_days=int(horizon),
        entry_close=float(entry.close),
        exit_close=None,
        return_pct=None,
        max_drawdown_pct=None,
        max_runup_pct=None,
        outcome_status="missing_price",
    )


def _optional_float(value: Any) -> float | None:
    if value is None:
        return None
    return float(value)


def _is_positive_finite(value: float) -> bool:
    return math.isfinite(value) and value > 0
