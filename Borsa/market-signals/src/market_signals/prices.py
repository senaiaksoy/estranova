from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol


@dataclass(frozen=True)
class PriceSnapshot:
    symbol: str
    price: float
    currency: str
    source: str
    asof: str
    stale: bool = False


class PriceProvider(Protocol):
    def get(self, symbol: str) -> PriceSnapshot | None:
        ...


class StaticPriceProvider:
    def __init__(self, prices: dict[str, PriceSnapshot]) -> None:
        self._prices = prices

    def get(self, symbol: str) -> PriceSnapshot | None:
        return self._prices.get(symbol)
