from datetime import date, timedelta

import pytest

from market_signals.backtest import BacktestResult, run_backtest
from market_signals.models import PricePoint
from market_signals.strategy import SignalThresholds


def test_run_backtest_produces_deterministic_label_counts():
    result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        _alternating_uptrend_series(),
        strategy_name="conservative_daily_trend",
        horizon_days=5,
        step_days=10,
    )

    assert result.instrument_id == "tefas_yay"
    assert result.strategy_name == "conservative_daily_trend"
    assert result.signal_count > 0
    assert sum(result.label_counts.values()) == result.signal_count
    assert result.label_counts["AL"] > 0


def test_run_backtest_measures_return_after_signal_date():
    result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        _steady_series(),
        strategy_name="conservative_daily_trend",
        horizon_days=1,
        step_days=1,
    )

    assert result.signal_count == 5
    assert result.median_return_pct == round((303.0 / 302.0 - 1.0) * 100, 4)


def test_run_backtest_applies_candidate_signal_thresholds():
    default_result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        _steady_series(count=230),
        strategy_name="active",
        horizon_days=5,
        step_days=5,
    )
    candidate_result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        _steady_series(count=230),
        strategy_name="candidate-buymin90-rsi110-reduce120",
        horizon_days=5,
        step_days=5,
        thresholds=SignalThresholds(rsi_buy_min=90.0, rsi_buy_max=110.0, rsi_reduce=120.0),
    )

    assert default_result.label_counts.get("AL", 0) == 0
    assert candidate_result.label_counts["AL"] > 0


def test_backtest_result_round_trips_dict():
    result = BacktestResult(
        instrument_id="gold_try",
        strategy_name="conservative_daily_trend",
        signal_count=3,
        label_counts={"AL": 2, "BEKLE": 1},
        median_return_pct=4.5,
        average_return_pct=5.0,
        worst_drawdown_pct=2.0,
        best_runup_pct=8.0,
    )

    assert BacktestResult.from_dict(result.to_dict()) == result


def test_run_backtest_rejects_non_positive_horizon_or_step():
    with pytest.raises(ValueError, match="positive"):
        run_backtest(
            "tefas_yay",
            "TEFAS YAY",
            _steady_series(),
            strategy_name="test",
            horizon_days=0,
        )
    with pytest.raises(ValueError, match="positive"):
        run_backtest(
            "tefas_yay",
            "TEFAS YAY",
            _steady_series(),
            strategy_name="test",
            step_days=0,
        )


def test_run_backtest_rejects_non_finite_or_zero_prices():
    points = _steady_series(count=260)
    points[210] = PricePoint(points[210].date, float("nan"))
    with pytest.raises(ValueError, match="finite and positive"):
        run_backtest("tefas_yay", "TEFAS YAY", points, strategy_name="test")

    points = _steady_series(count=260)
    points[210] = PricePoint(points[210].date, 0.0)
    with pytest.raises(ValueError, match="finite and positive"):
        run_backtest("tefas_yay", "TEFAS YAY", points, strategy_name="test")


def _steady_series(count: int = 206) -> list[PricePoint]:
    first = date(2025, 1, 1)
    return [
        PricePoint((first + timedelta(days=index)).isoformat(), 100.0 + index)
        for index in range(count)
    ]


def _alternating_uptrend_series(count: int = 260) -> list[PricePoint]:
    first = date(2025, 1, 1)
    close = 100.0
    points: list[PricePoint] = []
    for index in range(count):
        if index < 200:
            close = 100.0 + index * 0.2
        else:
            close += 0.8 if index % 2 == 0 else -0.3
        points.append(
            PricePoint((first + timedelta(days=index)).isoformat(), round(close, 4))
        )
    return points
