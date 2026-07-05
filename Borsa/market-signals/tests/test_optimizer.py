from __future__ import annotations

from market_signals.backtest import BacktestResult
from market_signals.optimizer import (
    MAX_EXTRA_DRAWDOWN_PCT,
    MIN_MEDIAN_IMPROVEMENT_PCT,
    MIN_SIGNAL_COUNT,
    CandidateStrategy,
    StrategyRecommendation,
    allowed_threshold_candidates,
    choose_candidate_strategy,
)


def _result(
    strategy_name: str,
    *,
    signal_count: int = 12,
    median_return_pct: float = 1.0,
    worst_drawdown_pct: float = 0.5,
) -> BacktestResult:
    return BacktestResult(
        instrument_id="instrument",
        strategy_name=strategy_name,
        signal_count=signal_count,
        label_counts={},
        median_return_pct=median_return_pct,
        average_return_pct=median_return_pct,
        worst_drawdown_pct=worst_drawdown_pct,
        best_runup_pct=0.0,
    )


def test_candidate_strategy_roundtrip():
    candidate = CandidateStrategy(
        name="candidate-buymin45-rsi72-reduce78",
        parameters={"rsi_buy_min": 45.0, "rsi_buy_max": 72.0, "rsi_reduce": 78.0},
        result=_result("candidate-buymin45-rsi72-reduce78", signal_count=14, median_return_pct=1.4),
    )

    assert CandidateStrategy.from_dict(candidate.to_dict()) == candidate


def test_allowed_threshold_candidates_exact_discrete_set():
    candidates = allowed_threshold_candidates()

    assert len(candidates) == 27
    assert len({candidate.name for candidate in candidates}) == 27
    assert all(isinstance(candidate.result, BacktestResult) for candidate in candidates)
    assert {
        candidate.parameters["rsi_buy_min"] for candidate in candidates
    } == {40.0, 45.0, 50.0}
    assert {
        candidate.parameters["rsi_buy_max"] for candidate in candidates
    } == {70.0, 72.0, 75.0}
    assert {
        candidate.parameters["rsi_reduce"] for candidate in candidates
    } == {75.0, 78.0, 80.0}
    assert all(
        candidate.name
        == (
            f"candidate-buymin{int(candidate.parameters['rsi_buy_min'])}"
            f"-rsi{int(candidate.parameters['rsi_buy_max'])}"
            f"-reduce{int(candidate.parameters['rsi_reduce'])}"
        )
        for candidate in candidates
    )


def test_candidate_insufficient_signal_count_rejected():
    active = _result("active", signal_count=20, median_return_pct=1.5, worst_drawdown_pct=0.4)
    candidate = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=MIN_SIGNAL_COUNT - 1,
        median_return_pct=2.0,
        worst_drawdown_pct=0.3,
    )

    recommendation = choose_candidate_strategy(active, [candidate])

    assert recommendation.selected is None
    assert recommendation.reason.startswith("Veri yetersiz olabilir veya adaylar dengeli değil:")
    assert str(MIN_SIGNAL_COUNT) in recommendation.reason


def test_selected_candidate_parameters_are_parsed_from_strategy_name():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=1.2)
    selected = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=18,
        median_return_pct=1.9,
        worst_drawdown_pct=0.7,
    )

    recommendation = choose_candidate_strategy(active, [selected])

    assert recommendation.selected is not None
    assert recommendation.selected.parameters == {
        "rsi_buy_min": 45.0,
        "rsi_buy_max": 72.0,
        "rsi_reduce": 78.0,
    }


def test_safer_improvement_selected_and_reason_includes_manuel_onay():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=1.2)
    safer = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=18,
        median_return_pct=1.9,
        worst_drawdown_pct=0.7,
    )
    riskier = _result(
        "candidate-buymin50-rsi75-reduce80",
        signal_count=18,
        median_return_pct=1.7,
        worst_drawdown_pct=1.0,
    )

    recommendation = choose_candidate_strategy(active, [riskier, safer])

    assert recommendation.selected is not None
    assert recommendation.selected.result == safer
    assert recommendation.selected.parameters["rsi_buy_max"] == 72.0
    assert "manuel onay" in recommendation.reason.lower()


def test_extra_drawdown_rejected_and_reason_mentions_dengeli():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=0.4)
    candidate = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=16,
        median_return_pct=1.8,
        worst_drawdown_pct=MAX_EXTRA_DRAWDOWN_PCT + active.worst_drawdown_pct + 0.01,
    )

    recommendation = choose_candidate_strategy(active, [candidate])

    assert recommendation.selected is None
    assert "dengeli" in recommendation.reason.lower()


def test_tiny_median_gain_rejected():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=0.4)
    candidate = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=16,
        median_return_pct=active.median_return_pct + MIN_MEDIAN_IMPROVEMENT_PCT - 0.01,
        worst_drawdown_pct=0.5,
    )

    recommendation = choose_candidate_strategy(active, [candidate])

    assert recommendation.selected is None
    assert "dengeli" in recommendation.reason.lower()


def test_repeated_rejection_reasons_are_collapsed():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=0.4)
    candidate_a = _result(
        "candidate-buymin40-rsi70-reduce75",
        signal_count=16,
        median_return_pct=1.0,
        worst_drawdown_pct=0.4,
    )
    candidate_b = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=16,
        median_return_pct=1.0,
        worst_drawdown_pct=0.4,
    )

    recommendation = choose_candidate_strategy(active, [candidate_a, candidate_b])

    assert recommendation.reason.count("medyan kazanç") == 1


def test_tie_break_order_prefers_higher_median_then_lower_drawdown_then_signal_count():
    active = _result("active", signal_count=20, median_return_pct=1.0, worst_drawdown_pct=0.6)
    higher_median_worse_drawdown = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=14,
        median_return_pct=2.0,
        worst_drawdown_pct=0.9,
    )
    lower_median_better_drawdown = _result(
        "candidate-buymin50-rsi75-reduce80",
        signal_count=18,
        median_return_pct=1.8,
        worst_drawdown_pct=0.3,
    )
    equal_median_lower_drawdown = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=12,
        median_return_pct=2.0,
        worst_drawdown_pct=0.7,
    )
    equal_median_higher_drawdown = _result(
        "candidate-buymin50-rsi75-reduce80",
        signal_count=22,
        median_return_pct=2.0,
        worst_drawdown_pct=0.8,
    )
    equal_median_equal_drawdown_more_signals = _result(
        "candidate-buymin45-rsi72-reduce78",
        signal_count=24,
        median_return_pct=2.0,
        worst_drawdown_pct=0.7,
    )
    recommendation = choose_candidate_strategy(
        active,
        [lower_median_better_drawdown, higher_median_worse_drawdown],
    )
    assert recommendation.selected is not None
    assert recommendation.selected.result == higher_median_worse_drawdown

    recommendation = choose_candidate_strategy(
        active,
        [equal_median_higher_drawdown, equal_median_lower_drawdown],
    )
    assert recommendation.selected is not None
    assert recommendation.selected.result == equal_median_lower_drawdown

    recommendation = choose_candidate_strategy(
        active,
        [equal_median_equal_drawdown_more_signals, equal_median_lower_drawdown],
    )
    assert recommendation.selected is not None
    assert recommendation.selected.result == equal_median_equal_drawdown_more_signals
