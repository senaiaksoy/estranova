from unittest.mock import MagicMock, patch
from market_signals.prices import PriceSnapshot, StaticPriceProvider, LivePriceProvider


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


def test_live_price_provider_falls_back_on_missing_crawler():
    fallback = StaticPriceProvider({"YAY": PriceSnapshot("YAY", 10.0, "TRY", "static", "2026-07-03")})
    with patch("market_signals.prices.Crawler", None):
        provider = LivePriceProvider(fallback_provider=fallback)
        snap = provider.get("YAY")
        assert snap is not None
        assert snap.price == 10.0
        assert snap.source == "static"


def test_live_price_provider_gold_via_mock():
    mock_gold = MagicMock()
    mock_gold.status_code = 200
    mock_gold.json.return_value = {
        "chart": {
            "result": [
                {
                    "meta": {
                        "regularMarketPrice": 2000.0,
                    }
                }
            ]
        }
    }
    
    mock_usd = MagicMock()
    mock_usd.status_code = 200
    mock_usd.json.return_value = {
        "chart": {
            "result": [
                {
                    "meta": {
                        "regularMarketPrice": 30.0,
                    }
                }
            ]
        }
    }
    
    def side_effect(url, *args, **kwargs):
        if "GC=F" in url:
            return mock_gold
        if "USDTRY=X" in url:
            return mock_usd
        return MagicMock(status_code=404)
        
    with patch("requests.get", side_effect=side_effect):
        provider = LivePriceProvider()
        snap = provider.get("GRAM_ALTIN")
        assert snap is not None
        assert snap.symbol == "GRAM_ALTIN"
        assert snap.price == round((2000.0 / 31.1034768) * 30.0, 4)
        assert snap.source == "yahoo_finance"
