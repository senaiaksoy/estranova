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


def default_user_holdings() -> list[Holding]:
    return [
        Holding(
            id="gmstr",
            symbol="GMSTR",
            label="GMSTR gümüş BYF",
            quantity=7680,
            asset_class="equity_derivative",
            role="transition",
            pending_action="exit_to_yft",
            notes="Uygun fiyatta YFT'ye geçiş adayı.",
        ),
        Holding(
            id="z30ea",
            symbol="Z30EA",
            label="Z30EA",
            quantity=2758,
            asset_class="equity_derivative",
            role="transition",
            pending_action="exit_to_yft",
            notes="Tam sembol doğrulanamazsa manuel fiyat bekler.",
        ),
        Holding(
            id="yay",
            symbol="YAY",
            label="YAY / YFAY1",
            quantity=2576,
            asset_class="tefas_fund",
            role="growth",
            pending_action="none",
            notes="Ana büyüme pozisyonu.",
        ),
        Holding(
            id="yft",
            symbol="YFT",
            label="YFT / YPT",
            quantity=83255,
            asset_class="money_market_fund",
            role="cash_parking",
            pending_action="none",
            notes="Para piyasası serbest fon (TEFAS kodu: YPT).",
        ),
        Holding(
            id="physical_gold",
            symbol="GRAM_ALTIN",
            label="Fiziki altın",
            quantity=1000,
            asset_class="physical_gold",
            role="defensive",
            pending_action="none",
            notes="1 kg fiziki altın.",
        ),
    ]


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
