from pathlib import Path
from market_signals.database import save_portfolio_snapshot, add_cash_flow
from market_signals.performance import calculate_daily_performance_series, get_performance_summary


def test_twrr_calculation_isolates_cash_flows(tmp_path: Path):
    db_path = tmp_path / "test_perf.db"
    
    # Day 1: Start with 10,000 TRY
    save_portfolio_snapshot(
        db_path,
        date="2026-07-01",
        holdings={"CASH": 10000.0},
        total_value_try=10000.0,
        total_value_usd=300.0,
        usd_try_rate=33.33
    )
    
    # Day 2: Value grows to 11,000 TRY (Organic +10%)
    save_portfolio_snapshot(
        db_path,
        date="2026-07-02",
        holdings={"CASH": 11000.0},
        total_value_try=11000.0,
        total_value_usd=330.0,
        usd_try_rate=33.33
    )
    
    # Day 3: User deposits 5,000 TRY. Value is now 16,000 TRY.
    # Denominator = 11,000 (prev) + 5,000 (deposit) = 16,000.
    # Return = (16,000 - 16,000) / 16,000 = 0%.
    add_cash_flow(
        db_path,
        date="2026-07-03",
        amount=5000.0,
        currency="TRY",
        flow_type="DEPOSIT",
        description="test deposit"
    )
    save_portfolio_snapshot(
        db_path,
        date="2026-07-03",
        holdings={"CASH": 16000.0},
        total_value_try=16000.0,
        total_value_usd=480.0,
        usd_try_rate=33.33
    )
    
    # Day 4: Value grows to 17,600 TRY (Organic +10%)
    # Prev = 16,000. Return = (17,600 - 16,000) / 16,000 = 10%.
    save_portfolio_snapshot(
        db_path,
        date="2026-07-04",
        holdings={"CASH": 17600.0},
        total_value_try=17600.0,
        total_value_usd=528.0,
        usd_try_rate=33.33
    )
    
    series = calculate_daily_performance_series(db_path, currency="TRY")
    
    assert len(series) == 4
    
    # Day 1: Return 0%
    assert series[0]["daily_return"] == 0.0
    assert series[0]["cumulative_return"] == 0.0
    
    # Day 2: Return +10%
    assert abs(series[1]["daily_return"] - 0.10) < 1e-5
    assert abs(series[1]["cumulative_return"] - 0.10) < 1e-5
    
    # Day 3: Return 0% (deposit does not count as return)
    assert abs(series[2]["daily_return"] - 0.0) < 1e-5
    assert abs(series[2]["cumulative_return"] - 0.10) < 1e-5
    
    # Day 4: Return +10%. Cum TWRR = 1.10 * 1.10 - 1 = 21%
    assert abs(series[3]["daily_return"] - 0.10) < 1e-5
    assert abs(series[3]["cumulative_return"] - 0.21) < 1e-5
    
    summary = get_performance_summary(db_path, currency="TRY")
    assert summary["twrr_pct"] == 21.0
    assert summary["net_cash_flow"] == 5000.0
