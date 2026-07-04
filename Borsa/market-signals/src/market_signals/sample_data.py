from __future__ import annotations

from datetime import date, timedelta

from .models import PricePoint


def _series(start: float, step: float, count: int = 260) -> list[PricePoint]:
    first = date(2025, 7, 1)
    return [
        PricePoint(date=(first + timedelta(days=index)).isoformat(), close=round(start + step * index, 4))
        for index in range(count)
    ]


def rising_series() -> list[PricePoint]:
    return _series(100.0, 0.35)


def falling_series() -> list[PricePoint]:
    return _series(180.0, -0.35)


def default_market_data() -> dict[str, list[PricePoint]]:
    return {
        "tefas_yay": rising_series(),
        "gold_try": _series(2500.0, 1.4),
        "silver_try": _series(30.0, -0.01),
    }
