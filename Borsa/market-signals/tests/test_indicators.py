from market_signals.indicators import drawdown_pct, ema, rsi, sma


def test_sma_returns_average_of_window():
    assert sma([10, 20, 30, 40], 3) == 30


def test_ema_tracks_latest_value():
    value = ema([10, 10, 20], 2)
    assert round(value, 2) == 16.67


def test_drawdown_pct_from_peak():
    assert drawdown_pct([100, 120, 90]) == 25


def test_rsi_returns_bounded_value():
    value = rsi([10, 11, 12, 11, 13, 14, 15], 3)
    assert 0 <= value <= 100


def test_rsi_returns_neutral_for_flat_prices():
    assert rsi([100.0] * 15, 14) == 50.0
