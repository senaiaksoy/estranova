from __future__ import annotations

import math

from dataclasses import dataclass

from .indicators import drawdown_pct, ema, realized_volatility, rsi, sma
from .models import Confidence, PricePoint, Signal, SignalLabel


@dataclass(frozen=True)
class SignalThresholds:
    rsi_buy_min: float = 45.0
    rsi_buy_max: float = 75.0
    rsi_reduce: float = 78.0

    def __post_init__(self) -> None:
        values = (self.rsi_buy_min, self.rsi_buy_max, self.rsi_reduce)
        if any(not math.isfinite(value) for value in values):
            raise ValueError("signal thresholds must be finite")
        if self.rsi_buy_min > self.rsi_buy_max:
            raise ValueError("rsi_buy_min must be less than or equal to rsi_buy_max")


def calculate_signal_features(points: list[PricePoint]) -> dict[str, float]:
    closes = [point.close for point in points]
    if any(not (math.isfinite(close) and close > 0) for close in closes):
        raise ValueError("price points must contain finite and positive close values")

    if len(closes) < 200:
        return {}

    features = {
        "sma50": sma(closes, 50),
        "sma200": sma(closes, 200),
        "ema50": ema(closes, 50),
        "rsi14": rsi(closes, 14),
        "drawdown120": drawdown_pct(closes[-120:]),
        "volatility20": realized_volatility(closes, 20),
    }
    if any(not math.isfinite(value) for value in features.values()):
        raise ValueError("signal features must contain finite values")

    return features


def generate_signal(
    instrument_id: str,
    label: str,
    points: list[PricePoint],
    thresholds: SignalThresholds | None = None,
) -> Signal:
    if not points:
        raise ValueError("generate_signal requires at least one price point")
    thresholds = thresholds or SignalThresholds()

    closes = [point.close for point in points]
    latest = closes[-1]
    asof = points[-1].date

    if len(closes) < 200:
        return Signal(
            instrument_id,
            SignalLabel.BEKLE,
            Confidence.DUSUK,
            latest,
            "Hazırlık dönemi: sağlıklı uzun trend okuması için 200 günlük veri gerekli",
            asof,
        )

    sma_50 = sma(closes, 50)
    sma_200 = sma(closes, 200)
    ema_50 = ema(closes, 50)
    rsi_14 = rsi(closes, 14)
    dd = drawdown_pct(closes[-120:])
    vol = realized_volatility(closes, 20)

    if latest < sma_200 and dd >= 12:
        return Signal(
            instrument_id,
            SignalLabel.NAKDE_GEC,
            Confidence.YUKSEK,
            latest,
            f"{label}: kapanış SMA200 altında ve son 120 günde geri çekilme {dd:.2f}%",
            asof,
        )

    if latest > sma_50 and sma_50 > sma_200 and rsi_14 >= thresholds.rsi_reduce:
        return Signal(
            instrument_id,
            SignalLabel.BEKLE,
            Confidence.DUSUK,
            latest,
            f"{label}: ana trend uyumlu ancak RSI14 aşırı uzamış {rsi_14:.2f}; SMA50 {sma_50:.2f}, SMA200 {sma_200:.2f}",
            asof,
        )

    if latest < sma_50 or rsi_14 >= thresholds.rsi_reduce:
        return Signal(
            instrument_id,
            SignalLabel.AZALT,
            Confidence.ORTA,
            latest,
            f"{label}: kapanış {latest:.2f}, SMA50 {sma_50:.2f}, RSI14 {rsi_14:.2f}; kısa vadeli risk izleniyor",
            asof,
        )

    if (
        latest > sma_50
        and sma_50 > sma_200
        and thresholds.rsi_buy_min <= rsi_14 <= thresholds.rsi_buy_max
    ):
        return Signal(
            instrument_id,
            SignalLabel.AL,
            Confidence.ORTA if vol > 0.02 else Confidence.YUKSEK,
            latest,
            f"{label}: trend uyumlu; kapanış {latest:.2f}, SMA50 {sma_50:.2f}, EMA50 {ema_50:.2f}, RSI14 {rsi_14:.2f}",
            asof,
        )

    return Signal(
        instrument_id,
        SignalLabel.BEKLE,
        Confidence.DUSUK,
        latest,
        f"{label}: karışık sinyal; kapanış {latest:.2f}, SMA50 {sma_50:.2f}, SMA200 {sma_200:.2f}, RSI14 {rsi_14:.2f}",
        asof,
    )
