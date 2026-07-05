from __future__ import annotations

from dataclasses import asdict, dataclass
from itertools import product
from typing import Any, Iterable


MIN_SIGNAL_COUNT = 10
MIN_MEDIAN_IMPROVEMENT_PCT = 0.75
MAX_EXTRA_DRAWDOWN_PCT = 1.0


@dataclass(frozen=True)
class CandidateStrategy:
    rsi_buy_min: int
    rsi_buy_max: int
    rsi_reduce: int
    signal_count: int
    median_improvement_pct: float
    extra_drawdown_pct: float

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> CandidateStrategy:
        return cls(
            rsi_buy_min=int(payload["rsi_buy_min"]),
            rsi_buy_max=int(payload["rsi_buy_max"]),
            rsi_reduce=int(payload["rsi_reduce"]),
            signal_count=int(payload["signal_count"]),
            median_improvement_pct=float(payload["median_improvement_pct"]),
            extra_drawdown_pct=float(payload["extra_drawdown_pct"]),
        )


@dataclass(frozen=True)
class StrategyRecommendation:
    approved: bool
    selected: CandidateStrategy | None
    reason: str
    rejected_reasons: tuple[str, ...] = ()
    candidates: tuple[CandidateStrategy, ...] = ()

    def to_dict(self) -> dict[str, Any]:
        return {
            "approved": self.approved,
            "selected": None if self.selected is None else self.selected.to_dict(),
            "reason": self.reason,
            "rejected_reasons": list(self.rejected_reasons),
            "candidates": [candidate.to_dict() for candidate in self.candidates],
        }

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> StrategyRecommendation:
        selected_payload = payload.get("selected")
        return cls(
            approved=bool(payload["approved"]),
            selected=None
            if selected_payload is None
            else CandidateStrategy.from_dict(dict(selected_payload)),
            reason=str(payload["reason"]),
            rejected_reasons=tuple(str(item) for item in payload.get("rejected_reasons", [])),
            candidates=tuple(
                CandidateStrategy.from_dict(dict(candidate))
                for candidate in payload.get("candidates", [])
            ),
        )


def allowed_threshold_candidates() -> list[CandidateStrategy]:
    candidates: list[CandidateStrategy] = []
    for rsi_buy_min, rsi_buy_max, rsi_reduce in product(
        range(40, 51),
        range(70, 76),
        range(75, 81),
    ):
        if rsi_buy_min < rsi_buy_max < rsi_reduce:
            candidates.append(
                CandidateStrategy(
                    rsi_buy_min=rsi_buy_min,
                    rsi_buy_max=rsi_buy_max,
                    rsi_reduce=rsi_reduce,
                    signal_count=0,
                    median_improvement_pct=0.0,
                    extra_drawdown_pct=0.0,
                )
            )
    return candidates


def choose_candidate_strategy(
    candidates: Iterable[CandidateStrategy],
) -> StrategyRecommendation:
    candidate_list = list(candidates)
    if not candidate_list:
        return StrategyRecommendation(
            approved=False,
            selected=None,
            reason="Aday strateji bulunamadı.",
        )

    accepted: list[CandidateStrategy] = []
    rejected_reasons: list[str] = []

    for candidate in candidate_list:
        validation_error = _candidate_rejection_reason(candidate)
        if validation_error is None:
            accepted.append(candidate)
        else:
            rejected_reasons.append(validation_error)

    if not accepted:
        return StrategyRecommendation(
            approved=False,
            selected=None,
            reason="Aday stratejiler manuel onay için hazır değil: " + "; ".join(rejected_reasons),
            rejected_reasons=tuple(rejected_reasons),
            candidates=tuple(candidate_list),
        )

    selected = min(
        accepted,
        key=lambda candidate: (
            candidate.extra_drawdown_pct,
            -candidate.median_improvement_pct,
            -candidate.signal_count,
            candidate.rsi_buy_min,
            candidate.rsi_buy_max,
            candidate.rsi_reduce,
        ),
    )
    reason = (
        "En güvenli aday seçildi; manuel onay gerekir. "
        f"RSI eşikleri {selected.rsi_buy_min}/{selected.rsi_buy_max}/{selected.rsi_reduce}, "
        f"sinyal sayısı {selected.signal_count}, "
        f"medyan iyileşme {selected.median_improvement_pct:.2f}%, "
        f"ek drawdown {selected.extra_drawdown_pct:.2f}%."
    )
    if rejected_reasons:
        reason += " Elenen adaylar: " + "; ".join(rejected_reasons)
    return StrategyRecommendation(
        approved=True,
        selected=selected,
        reason=reason,
        rejected_reasons=tuple(rejected_reasons),
        candidates=tuple(candidate_list),
    )


def _candidate_rejection_reason(candidate: CandidateStrategy) -> str | None:
    if candidate.signal_count < MIN_SIGNAL_COUNT:
        return (
            f"signal_count yetersiz: en az {MIN_SIGNAL_COUNT} gerekir, "
            f"{candidate.signal_count} bulundu."
        )
    if candidate.median_improvement_pct < MIN_MEDIAN_IMPROVEMENT_PCT:
        return (
            "medyan iyileşme yetersiz: "
            f"en az {MIN_MEDIAN_IMPROVEMENT_PCT:.2f}% gerekir, "
            f"{candidate.median_improvement_pct:.2f}% bulundu."
        )
    if candidate.extra_drawdown_pct > MAX_EXTRA_DRAWDOWN_PCT:
        return (
            "ek drawdown fazla: "
            f"en çok {MAX_EXTRA_DRAWDOWN_PCT:.2f}% kabul edilir, "
            f"{candidate.extra_drawdown_pct:.2f}% bulundu."
        )
    return None

