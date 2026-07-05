from __future__ import annotations

from market_signals.optimizer import (
    MAX_EXTRA_DRAWDOWN_PCT,
    MIN_MEDIAN_IMPROVEMENT_PCT,
    MIN_SIGNAL_COUNT,
    CandidateStrategy,
    StrategyRecommendation,
    allowed_threshold_candidates,
    choose_candidate_strategy,
)


def test_candidate_strategy_roundtrip():
    candidate = CandidateStrategy(
        rsi_buy_min=44,
        rsi_buy_max=73,
        rsi_reduce=78,
        signal_count=18,
        median_improvement_pct=1.25,
        extra_drawdown_pct=0.4,
    )

    assert CandidateStrategy.from_dict(candidate.to_dict()) == candidate


def test_allowed_threshold_candidates_stay_within_bounds():
    candidates = allowed_threshold_candidates()

    assert candidates
    assert all(40 <= candidate.rsi_buy_min <= 50 for candidate in candidates)
    assert all(70 <= candidate.rsi_buy_max <= 75 for candidate in candidates)
    assert all(75 <= candidate.rsi_reduce <= 80 for candidate in candidates)
    assert all(
        candidate.rsi_buy_min < candidate.rsi_buy_max < candidate.rsi_reduce
        for candidate in candidates
    )
    assert {candidate.rsi_buy_min for candidate in candidates} & {40, 50}
    assert {candidate.rsi_buy_max for candidate in candidates} & {70, 75}
    assert {candidate.rsi_reduce for candidate in candidates} & {75, 80}


def test_candidate_insufficient_signal_count_rejected():
    recommendation = choose_candidate_strategy(
        [
            CandidateStrategy(
                rsi_buy_min=45,
                rsi_buy_max=74,
                rsi_reduce=78,
                signal_count=MIN_SIGNAL_COUNT - 1,
                median_improvement_pct=1.2,
                extra_drawdown_pct=0.2,
            )
        ]
    )

    assert not recommendation.approved
    assert recommendation.selected is None
    assert str(MIN_SIGNAL_COUNT) in recommendation.reason
    assert "yetersiz" in recommendation.reason.lower()


def test_safer_improvement_selected_and_reason_includes_manuel_onay():
    safer = CandidateStrategy(
        rsi_buy_min=44,
        rsi_buy_max=72,
        rsi_reduce=76,
        signal_count=20,
        median_improvement_pct=1.05,
        extra_drawdown_pct=0.25,
    )
    riskier = CandidateStrategy(
        rsi_buy_min=46,
        rsi_buy_max=73,
        rsi_reduce=79,
        signal_count=22,
        median_improvement_pct=1.55,
        extra_drawdown_pct=0.85,
    )

    recommendation = choose_candidate_strategy([riskier, safer])

    assert recommendation.approved
    assert recommendation.selected == safer
    assert "manuel onay" in recommendation.reason.lower()


def test_extra_drawdown_rejected():
    recommendation = choose_candidate_strategy(
        [
            CandidateStrategy(
                rsi_buy_min=45,
                rsi_buy_max=74,
                rsi_reduce=78,
                signal_count=16,
                median_improvement_pct=1.1,
                extra_drawdown_pct=MAX_EXTRA_DRAWDOWN_PCT + 0.01,
            )
        ]
    )

    assert not recommendation.approved
    assert recommendation.selected is None
    assert "drawdown" in recommendation.reason.lower()


def test_tiny_median_gain_rejected():
    recommendation = choose_candidate_strategy(
        [
            CandidateStrategy(
                rsi_buy_min=45,
                rsi_buy_max=74,
                rsi_reduce=78,
                signal_count=16,
                median_improvement_pct=MIN_MEDIAN_IMPROVEMENT_PCT - 0.01,
                extra_drawdown_pct=0.2,
            )
        ]
    )

    assert not recommendation.approved
    assert recommendation.selected is None
    assert "medyan" in recommendation.reason.lower()

