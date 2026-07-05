import pytest

from market_signals.backtest import BacktestResult, run_backtest
from market_signals.models import PricePoint
from market_signals.sample_data import rising_series


def test_run_backtest_produces_deterministic_label_counts():
    result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        rising_series(),
        strategy_name="conservative_daily_trend",
        horizon_days=5,
        step_days=10,
    )

    assert result.instrument_id == "tefas_yay"
    assert result.strategy_name == "conservative_daily_trend"
    assert result.signal_count > 0
    assert sum(result.label_counts.values()) == result.signal_count
    assert "AL" in result.label_counts


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
        run_backtest("tefas_yay", "TEFAS YAY", rising_series(), strategy_name="test", horizon_days=0)
    with pytest.raises(ValueError, match="positive"):
        run_backtest("tefas_yay", "TEFAS YAY", rising_series(), strategy_name="test", step_days=0)


def test_run_backtest_rejects_non_finite_or_zero_prices():
    points = rising_series()
    points[210] = PricePoint(points[210].date, float("nan"))
    with pytest.raises(ValueError, match="finite and positive"):
        run_backtest("tefas_yay", "TEFAS YAY", points, strategy_name="test")

    points = rising_series()
    points[210] = PricePoint(points[210].date, 0.0)
    with pytest.raises(ValueError, match="finite and positive"):
        run_backtest("tefas_yay", "TEFAS YAY", points, strategy_name="test")
