from __future__ import annotations

import math


def sma(values: list[float], window: int) -> float:
    if len(values) < window:
        raise ValueError("not enough values for SMA")
    return sum(values[-window:]) / window


def ema(values: list[float], window: int) -> float:
    if not values:
        raise ValueError("EMA requires values")
    alpha = 2 / (window + 1)
    current = values[0]
    for value in values[1:]:
        current = value * alpha + current * (1 - alpha)
    return current


def rsi(values: list[float], window: int = 14) -> float:
    if len(values) <= window:
        raise ValueError("not enough values for RSI")
    gains: list[float] = []
    losses: list[float] = []
    for previous, current in zip(values[-window - 1 : -1], values[-window:]):
        change = current - previous
        gains.append(max(change, 0))
        losses.append(abs(min(change, 0)))
    avg_gain = sum(gains) / window
    avg_loss = sum(losses) / window
    if math.isclose(avg_loss, 0):
        if math.isclose(avg_gain, 0):
            return 50.0
        return 100.0
    rs = avg_gain / avg_loss
    return 100 - (100 / (1 + rs))


def drawdown_pct(values: list[float]) -> float:
    if not values:
        raise ValueError("drawdown requires values")
    peak = max(values)
    latest = values[-1]
    if math.isclose(peak, 0):
        return 0.0
    return ((peak - latest) / peak) * 100


def realized_volatility(values: list[float], window: int = 20) -> float:
    if len(values) <= window:
        raise ValueError("not enough values for volatility")
    returns = []
    recent = values[-window - 1 :]
    for previous, current in zip(recent[:-1], recent[1:]):
        returns.append((current / previous) - 1)
    mean = sum(returns) / len(returns)
    variance = sum((item - mean) ** 2 for item in returns) / len(returns)
    return math.sqrt(variance)
