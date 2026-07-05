from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_static_provider_returns_known_price():
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot(symbol="YAY", price=1867.83, currency="TRY", source="test", asof="2026-07-03"),
        }
    )

    snapshot = provider.get("YAY")

    assert snapshot is not None
    assert snapshot.price == 1867.83
    assert snapshot.source == "test"


def test_static_provider_returns_none_for_unknown_symbol():
    provider = StaticPriceProvider({})

    assert provider.get("Z30EA") is None
