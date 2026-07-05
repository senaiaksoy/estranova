from __future__ import annotations

import math
import statistics
from dataclasses import asdict, dataclass
from typing import Any

from .models import PricePoint, SignalLabel
from .strategy import generate_signal


@dataclass(frozen=True)
class BacktestResult:
    instrument_id: str
    strategy_name: str
    signal_count: int
    label_counts: dict[str, int]
    median_return_pct: float
    average_return_pct: float
    worst_drawdown_pct: float
    best_runup_pct: float

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> BacktestResult:
        return cls(
            instrument_id=str(payload["instrument_id"]),
            strategy_name=str(payload["strategy_name"]),
            signal_count=int(payload["signal_count"]),
            label_counts={
                str(label): int(count)
                for label, count in dict(payload["label_counts"]).items()
            },
            median_return_pct=float(payload["median_return_pct"]),
            average_return_pct=float(payload["average_return_pct"]),
            worst_drawdown_pct=float(payload["worst_drawdown_pct"]),
            best_runup_pct=float(payload["best_runup_pct"]),
        )


def run_backtest(
    instrument_id: str,
    label: str,
    points: list[PricePoint],
    *,
    strategy_name: str,
    horizon_days: int = 20,
    step_days: int = 5,
) -> BacktestResult:
    if horizon_days <= 0 or step_days <= 0:
        raise ValueError("horizon_days and step_days must be positive")

    closes = [float(point.close) for point in points]
    if any(not _is_positive_finite(close) for close in closes):
        raise ValueError("price close values must be finite and positive")

    if len(points) < 201 + horizon_days:
        return _zero_result(instrument_id, strategy_name)

    label_counts = {signal_label.value: 0 for signal_label in SignalLabel}
    returns: list[float] = []
    drawdowns: list[float] = []
    runups: list[float] = []

    for end_index in range(200, len(points) - horizon_days, step_days):
        window = points[:end_index]
        signal = generate_signal(instrument_id, label, window)
        label_counts[signal.label.value] += 1

        future = points[end_index : end_index + horizon_days + 1]
        entry = float(window[-1].close)
        exit_close = float(future[-1].close)
        future_closes = [float(point.close) for point in future]

        returns.append(round((exit_close / entry - 1.0) * 100, 4))
        drawdowns.append(round(abs(min(0.0, (min(future_closes) / entry - 1.0) * 100)), 4))
        runups.append(round(max(0.0, (max(future_closes) / entry - 1.0) * 100), 4))

    if not returns:
        return _zero_result(instrument_id, strategy_name)

    return BacktestResult(
        instrument_id=instrument_id,
        strategy_name=strategy_name,
        signal_count=len(returns),
        label_counts=label_counts,
        median_return_pct=round(statistics.median(returns), 4),
        average_return_pct=round(statistics.mean(returns), 4),
        worst_drawdown_pct=round(max(drawdowns), 4),
        best_runup_pct=round(max(runups), 4),
    )


def _zero_result(instrument_id: str, strategy_name: str) -> BacktestResult:
    return BacktestResult(
        instrument_id=instrument_id,
        strategy_name=strategy_name,
        signal_count=0,
        label_counts={},
        median_return_pct=0.0,
        average_return_pct=0.0,
        worst_drawdown_pct=0.0,
        best_runup_pct=0.0,
    )


def _is_positive_finite(value: float) -> bool:
    return math.isfinite(value) and value > 0
