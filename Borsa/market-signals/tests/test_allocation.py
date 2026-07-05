import pytest

from market_signals.allocation import model_range_for_signal
from market_signals.models import Confidence, Signal, SignalLabel


def make_signal(label: SignalLabel) -> Signal:
    return Signal("instrument", label, Confidence.ORTA, 100.0, "model sinyali", "2026-07-04")


@pytest.mark.parametrize(
    ("role", "label", "min_pct", "max_pct", "note"),
    [
        ("growth", SignalLabel.AL, 35, 50, "YAY büyüme aralığı güçlenir; bu emir talimatı değildir."),
        ("growth", SignalLabel.BEKLE, 25, 40, "YAY izleme aralığı; bu emir talimatı değildir."),
        ("growth", SignalLabel.AZALT, 15, 30, "YAY ağırlığı temkinli aralığa iner; bu emir talimatı değildir."),
        ("growth", SignalLabel.NAKDE_GEC, 0, 15, "YAY için sermaye koruma aralığı; bu emir talimatı değildir."),
        ("defensive", SignalLabel.AL, 25, 40, "Fiziki altın savunma aralığı artar; bu emir talimatı değildir."),
        (
            "defensive",
            SignalLabel.AZALT,
            10,
            25,
            "Fiziki altın için kısmi azaltım izleme aralığı; bu emir talimatı değildir.",
        ),
        ("defensive", SignalLabel.BEKLE, 15, 30, "Fiziki altın nötr savunma aralığı; bu emir talimatı değildir."),
        ("cash_parking", SignalLabel.NAKDE_GEC, 10, 35, "YFT nakit park ve geçiş aralığıdır; bu emir talimatı değildir."),
        ("transition", SignalLabel.AL, 0, 10, "Geçiş pozisyonu izleme aralığıdır; bu emir talimatı değildir."),
    ],
)
def test_model_range_for_signal_covers_rule_table(role, label, min_pct, max_pct, note):
    result = model_range_for_signal(role, make_signal(label))

    assert result.role == role
    assert result.min_pct == min_pct
    assert result.max_pct == max_pct
    assert result.note == note


def test_none_signal_uses_wait_default_range():
    result = model_range_for_signal("growth", None)

    assert result.role == "growth"
    assert result.min_pct == 25
    assert result.max_pct == 40
    assert result.note == "YAY izleme aralığı; bu emir talimatı değildir."
