from __future__ import annotations

from dataclasses import dataclass, replace

from market_signals.prices import PriceProvider, PriceSnapshot


@dataclass(frozen=True)
class Holding:
    id: str
    symbol: str
    label: str
    quantity: float
    asset_class: str
    role: str
    pending_action: str = "none"
    notes: str = ""


@dataclass(frozen=True)
class ValuationRow:
    holding: Holding
    price: PriceSnapshot | None
    market_value: float | None
    weight_pct: float
    missing_price: bool


@dataclass(frozen=True)
class PortfolioValuation:
    rows: list[ValuationRow]
    total_value: float


def value_holdings(holdings: list[Holding], provider: PriceProvider) -> PortfolioValuation:
    rows: list[ValuationRow] = []
    total_value = 0.0

    for holding in holdings:
        price = provider.get(holding.symbol)
        if price is None:
            rows.append(
                ValuationRow(
                    holding=holding,
                    price=None,
                    market_value=None,
                    weight_pct=0,
                    missing_price=True,
                )
            )
            continue

        market_value = holding.quantity * price.price
        total_value += market_value
        rows.append(
            ValuationRow(
                holding=holding,
                price=price,
                market_value=market_value,
                weight_pct=0,
                missing_price=False,
            )
        )

    if total_value:
        rows = [
            replace(row, weight_pct=(row.market_value or 0) / total_value * 100)
            if row.market_value is not None
            else row
            for row in rows
        ]

    return PortfolioValuation(rows=rows, total_value=total_value)
