import pytest

from market_signals.models import Confidence, SignalLabel
from market_signals.sample_data import rising_series, falling_series
from market_signals.strategy import calculate_signal_features, generate_signal


def test_rising_series_generates_conservative_wait_signal():
    signal = generate_signal("tefas_yay", "TEFAS YAY", rising_series())
    assert signal.label == SignalLabel.BEKLE
    assert signal.confidence == Confidence.DUSUK
    assert signal.instrument_id == "tefas_yay"
    assert "RSI14 aşırı uzamış" in signal.reason


def test_falling_series_generates_risk_signal():
    signal = generate_signal("tefas_yay", "TEFAS YAY", falling_series())
    assert signal.label == SignalLabel.NAKDE_GEC
    assert signal.confidence == Confidence.YUKSEK
    assert "geri çekilme" in signal.reason


def test_generate_signal_rejects_empty_points():
    with pytest.raises(ValueError, match="at least one price point"):
        generate_signal("tefas_yay", "TEFAS YAY", [])


def test_calculate_signal_features_returns_core_indicators():
    features = calculate_signal_features(rising_series())

    assert set(features) == {"sma50", "sma200", "ema50", "rsi14", "drawdown120", "volatility20"}
    assert features["sma50"] > features["sma200"]
    assert features["rsi14"] >= 0
    assert features["volatility20"] >= 0


def test_calculate_signal_features_returns_empty_for_short_history():
    features = calculate_signal_features(rising_series()[:20])

    assert features == {}
