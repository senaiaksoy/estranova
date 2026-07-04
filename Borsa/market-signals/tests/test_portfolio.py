from market_signals.portfolio import Holding, value_holdings
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_value_holdings_calculates_market_values_and_weights():
    holdings = [
        Holding(id="yay", symbol="YAY", label="YAY", quantity=2, asset_class="tefas_fund", role="growth"),
        Holding(
            id="gold",
            symbol="GRAM_ALTIN",
            label="Fiziki altın",
            quantity=1000,
            asset_class="physical_gold",
            role="defensive",
        ),
    ]
    prices = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 10.0, "TRY", "test", "2026-07-04"),
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
        }
    )

    result = value_holdings(holdings, prices)

    assert result.total_value == 6_000_020
    assert result.rows[0].market_value == 20
    assert result.rows[1].market_value == 6_000_000
    assert round(result.rows[1].weight_pct, 4) == round(6_000_000 / 6_000_020 * 100, 4)


def test_value_holdings_marks_missing_price_without_stopping_report():
    holdings = [
        Holding(
            id="z30ea",
            symbol="Z30EA",
            label="Z30EA",
            quantity=2758,
            asset_class="equity_derivative",
            role="transition",
        ),
    ]

    result = value_holdings(holdings, StaticPriceProvider({}))

    assert result.total_value == 0
    assert result.rows[0].missing_price is True
    assert result.rows[0].market_value is None
