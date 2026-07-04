from market_signals.allocation import model_range_for_signal
from market_signals.models import Confidence, Signal, SignalLabel


def test_yay_al_signal_gets_growth_range_without_single_order_instruction():
    signal = Signal("tefas_yay", SignalLabel.AL, Confidence.ORTA, 100.0, "trend uyumlu", "2026-07-04")

    result = model_range_for_signal("growth", signal)

    assert result.min_pct == 35
    assert result.max_pct == 50
    assert "emir talimatı değildir" in result.note


def test_defensive_gold_wait_signal_gets_neutral_range():
    signal = Signal("gold_try", SignalLabel.BEKLE, Confidence.DUSUK, 6000.0, "RSI14 aşırı uzamış", "2026-07-04")

    result = model_range_for_signal("defensive", signal)

    assert result.min_pct == 15
    assert result.max_pct == 30
