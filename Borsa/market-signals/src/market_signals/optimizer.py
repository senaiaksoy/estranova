from __future__ import annotations

import re
from dataclasses import dataclass
from itertools import product
from typing import Any

from .backtest import BacktestResult


MIN_SIGNAL_COUNT = 10
MIN_MEDIAN_IMPROVEMENT_PCT = 0.75
MAX_EXTRA_DRAWDOWN_PCT = 1.0


@dataclass(frozen=True)
class CandidateStrategy:
    name: str
    parameters: dict[str, float]
    result: BacktestResult

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "parameters": dict(self.parameters),
            "result": self.result.to_dict(),
        }

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> CandidateStrategy:
        return cls(
            name=str(payload["name"]),
            parameters={str(key): float(value) for key, value in dict(payload["parameters"]).items()},
            result=BacktestResult.from_dict(dict(payload["result"])),
        )


@dataclass(frozen=True)
class StrategyRecommendation:
    selected: CandidateStrategy | None
    reason: str

    def to_dict(self) -> dict[str, Any]:
        return {
            "selected": None if self.selected is None else self.selected.to_dict(),
            "reason": self.reason,
        }

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> StrategyRecommendation:
        selected_payload = payload.get("selected")
        return cls(
            selected=None
            if selected_payload is None
            else CandidateStrategy.from_dict(dict(selected_payload)),
            reason=str(payload["reason"]),
        )


def allowed_threshold_candidates() -> list[CandidateStrategy]:
    candidates: list[CandidateStrategy] = []
    for rsi_buy_min, rsi_buy_max, rsi_reduce in product(
        (40.0, 45.0, 50.0),
        (70.0, 72.0, 75.0),
        (75.0, 78.0, 80.0),
    ):
        name = f"candidate-rsi{int(rsi_buy_max)}-reduce{int(rsi_reduce)}"
        candidates.append(
            CandidateStrategy(
                name=name,
                parameters={
                    "rsi_buy_min": float(rsi_buy_min),
                    "rsi_buy_max": float(rsi_buy_max),
                    "rsi_reduce": float(rsi_reduce),
                },
                result=BacktestResult("", name, 0, {}, 0.0, 0.0, 0.0, 0.0),
            )
        )
    return candidates


def choose_candidate_strategy(
    active_result: BacktestResult,
    candidates: list[BacktestResult],
) -> StrategyRecommendation:
    viable: list[BacktestResult] = []
    rejection_reasons: list[str] = []

    for result in candidates:
        reason = _candidate_rejection_reason(active_result, result)
        if reason is None:
            viable.append(result)
        else:
            rejection_reasons.append(reason)

    if not viable:
        detail = "; ".join(rejection_reasons)
        reason = "Veri yetersiz: dengeli bir aday bulunamadı."
        if detail:
            reason = f"{reason} {detail}"
        return StrategyRecommendation(
            selected=None,
            reason=reason,
        )

    selected_result = sorted(
        viable,
        key=lambda result: (
            -result.median_return_pct,
            result.worst_drawdown_pct,
            -result.signal_count,
        ),
    )[0]

    selected = CandidateStrategy(
        name=selected_result.strategy_name,
        parameters=_parameters_from_name(selected_result.strategy_name),
        result=selected_result,
    )
    reason = (
        "En iyi aday seçildi; manuel onay gerekir. "
        f"Seçilen strateji {selected_result.strategy_name}. "
        f"Median getiri {selected_result.median_return_pct:.2f}%, "
        f"drawdown {selected_result.worst_drawdown_pct:.2f}%, "
        f"sinyal sayısı {selected_result.signal_count}."
    )
    if rejection_reasons:
        reason += " Elenen adaylar dengeli değil: " + "; ".join(rejection_reasons)
    return StrategyRecommendation(selected=selected, reason=reason)


def _candidate_rejection_reason(
    active_result: BacktestResult,
    result: BacktestResult,
) -> str | None:
    if result.signal_count < MIN_SIGNAL_COUNT:
        return (
            f"Veri yetersiz: {result.strategy_name} için en az {MIN_SIGNAL_COUNT} sinyal gerekir, "
            f"{result.signal_count} bulundu."
        )

    median_gain = result.median_return_pct - active_result.median_return_pct
    if median_gain < MIN_MEDIAN_IMPROVEMENT_PCT:
        return (
            f"Dengeli değil: medyan kazanç {median_gain:.2f}% ve en az {MIN_MEDIAN_IMPROVEMENT_PCT:.2f}% gerekir."
        )

    extra_drawdown = result.worst_drawdown_pct - active_result.worst_drawdown_pct
    if extra_drawdown > MAX_EXTRA_DRAWDOWN_PCT:
        return (
            f"Dengeli değil: ekstra drawdown {extra_drawdown:.2f}% ve en çok {MAX_EXTRA_DRAWDOWN_PCT:.2f}% kabul edilir."
        )

    return None


def _parameters_from_name(name: str) -> dict[str, float]:
    parameters: dict[str, float] = {}
    buy_max_match = re.search(r"candidate-rsi-?(?P<buy_max>\d+(?:\.\d+)?)", name)
    if buy_max_match:
        parameters["rsi_buy_max"] = float(buy_max_match.group("buy_max"))

    reduce_match = re.search(r"reduce(?P<reduce>\d+(?:\.\d+)?)", name)
    if reduce_match:
        parameters["rsi_reduce"] = float(reduce_match.group("reduce"))

    buy_min_match = re.search(r"buymin(?P<buy_min>\d+(?:\.\d+)?)", name)
    if buy_min_match:
        parameters["rsi_buy_min"] = float(buy_min_match.group("buy_min"))

    if "rsi_buy_min" not in parameters and "rsi_buy_max" in parameters:
        parameters["rsi_buy_min"] = parameters["rsi_buy_max"] - 5.0

    return parameters
