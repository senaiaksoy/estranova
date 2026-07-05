from market_signals.portfolio import default_user_holdings, value_holdings
from market_signals.portfolio_reports import render_portfolio_report
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_portfolio_report_is_turkish_and_includes_projection_warning():
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 100.0, "TRY", "test", "2026-07-04"),
            "YFT": PriceSnapshot("YFT", 1.0, "TRY", "test", "2026-07-04"),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "test", "2026-07-04"),
            "GMSTR": PriceSnapshot("GMSTR", 550.0, "TRY", "test", "2026-07-04"),
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
        }
    )
    valuation = value_holdings(default_user_holdings(), provider)

    report = render_portfolio_report(valuation, missing_symbols=["Z30EA"])

    assert "# Portföy Karar-Destek Raporu" in report
    assert "Bu rapor yatırım tavsiyesi değildir" in report
    assert "Fiziki altın" in report
    assert "1000.0000" in report
    assert "Z30EA" in report
    assert "fiyat doğrulanamadı" in report
