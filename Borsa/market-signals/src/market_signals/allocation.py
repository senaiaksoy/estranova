from __future__ import annotations

from dataclasses import dataclass

from market_signals.models import Signal, SignalLabel


@dataclass(frozen=True)
class ModelRange:
    role: str
    min_pct: int
    max_pct: int
    note: str


def model_range_for_signal(role: str, signal: Signal | None) -> ModelRange:
    label = signal.label if signal is not None else SignalLabel.BEKLE

    if role == "growth":
        if label == SignalLabel.AL:
            return ModelRange(role, 35, 50, "YAY büyüme aralığı güçlenir; bu emir talimatı değildir.")
        if label == SignalLabel.AZALT:
            return ModelRange(role, 15, 30, "YAY ağırlığı temkinli aralığa iner; bu emir talimatı değildir.")
        if label == SignalLabel.NAKDE_GEC:
            return ModelRange(role, 0, 15, "YAY için sermaye koruma aralığı; bu emir talimatı değildir.")
        return ModelRange(role, 25, 40, "YAY izleme aralığı; bu emir talimatı değildir.")

    if role == "defensive":
        if label == SignalLabel.AL:
            return ModelRange(role, 25, 40, "Fiziki altın savunma aralığı artar; bu emir talimatı değildir.")
        if label == SignalLabel.AZALT:
            return ModelRange(role, 10, 25, "Fiziki altın için kısmi azaltım izleme aralığı; bu emir talimatı değildir.")
        return ModelRange(role, 15, 30, "Fiziki altın nötr savunma aralığı; bu emir talimatı değildir.")

    if role == "cash_parking":
        return ModelRange(role, 10, 35, "YFT nakit park ve geçiş aralığıdır; bu emir talimatı değildir.")

    return ModelRange(role, 0, 10, "Geçiş pozisyonu izleme aralığıdır; bu emir talimatı değildir.")
