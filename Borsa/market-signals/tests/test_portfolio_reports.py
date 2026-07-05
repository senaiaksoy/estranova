from market_signals.portfolio import (
    Holding,
    PortfolioValuation,
    ValuationRow,
    default_user_holdings,
    value_holdings,
)
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


def test_portfolio_report_derives_missing_symbols_from_valuation_rows():
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

    report = render_portfolio_report(valuation)
    warnings_section = report.split("## Veri Uyarıları", 1)[1].split(
        "## Manuel Kontrol", 1
    )[0]

    assert "Z30EA" in warnings_section
    assert "fiyat doğrulanamadı" in warnings_section
    assert "Fiyatı doğrulanamayan sembol yok." not in warnings_section


def test_portfolio_report_escapes_markdown_table_text_cells():
    holding = Holding(
        id="custom",
        symbol="CUS",
        label="Fon | Özel\nSeri",
        quantity=3,
        asset_class="tefas_fund",
        role="growth",
        notes="Satır | notu\nmanuel kontrol",
    )
    valuation = PortfolioValuation(
        rows=[
            ValuationRow(
                holding=holding,
                price=PriceSnapshot("CUS", 10.0, "TRY", "test", "2026-07-04"),
                market_value=30.0,
                weight_pct=100.0,
                missing_price=False,
            )
        ],
        total_value=30.0,
    )

    report = render_portfolio_report(valuation)
    table_row = next(line for line in report.splitlines() if "Fon \\" in line)

    assert "Fon \\| Özel Seri" in table_row
    assert "Satır \\| notu manuel kontrol" in table_row
    assert "Fon \\| Özel\nSeri" not in report
    assert "Satır \\| notu\nmanuel kontrol" not in report
