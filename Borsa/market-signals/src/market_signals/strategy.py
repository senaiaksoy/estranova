from __future__ import annotations

from .indicators import drawdown_pct, ema, realized_volatility, rsi, sma
from .models import Confidence, PricePoint, Signal, SignalLabel


def generate_signal(instrument_id: str, label: str, points: list[PricePoint]) -> Signal:
    if not points:
        raise ValueError("generate_signal requires at least one price point")

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

    if latest > sma_50 and sma_50 > sma_200 and rsi_14 >= 78:
        return Signal(
            instrument_id,
            SignalLabel.BEKLE,
            Confidence.DUSUK,
            latest,
            f"{label}: ana trend uyumlu ancak RSI14 aşırı uzamış {rsi_14:.2f}; SMA50 {sma_50:.2f}, SMA200 {sma_200:.2f}",
            asof,
        )

    if latest < sma_50 or rsi_14 >= 78:
        return Signal(
            instrument_id,
            SignalLabel.AZALT,
            Confidence.ORTA,
            latest,
            f"{label}: kapanış {latest:.2f}, SMA50 {sma_50:.2f}, RSI14 {rsi_14:.2f}; kısa vadeli risk izleniyor",
            asof,
        )

    if latest > sma_50 and sma_50 > sma_200 and 45 <= rsi_14 <= 75:
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
