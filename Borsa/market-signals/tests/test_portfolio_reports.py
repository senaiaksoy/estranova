from market_signals.portfolio import (
    Holding,
    PortfolioValuation,
    ValuationRow,
    default_user_holdings,
    value_holdings,
)
from market_signals.portfolio_reports import render_portfolio_report
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_portfolio_report_is_turkish_and_lists_assets():
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
    assert "Ağırlıklar yalnızca fiyatı doğrulanan satırlar içinde hesaplanır" in report


def test_portfolio_report_includes_usd_net_value_when_rate_given(tmp_path):
    from market_signals.database import save_holding

    db_path = tmp_path / "signals.db"
    save_holding(db_path, "YAY", 10.0, 100.0)

    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 200.0, "TRY", "test", "2026-07-04"),
        }
    )
    holding = Holding(
        id="yay", symbol="YAY", label="YAY", quantity=10, asset_class="tefas_fund", role="growth"
    )
    valuation = value_holdings([holding], provider)

    report = render_portfolio_report(valuation, db_path=db_path, usd_rate=40.0)

    # Gain = (200-100)*10 = 1000, tax 17.5% = 175, net TRY = 2000-175 = 1825
    assert "Vergi arındırılmış net değer: 1,825.00 TL" in report
    assert "Vergi arındırılmış net değer (USD): 45.62 USD" in report


def test_portfolio_report_omits_usd_net_value_without_rate(tmp_path):
    from market_signals.database import save_holding

    db_path = tmp_path / "signals.db"
    save_holding(db_path, "YAY", 10.0, 100.0)

    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 200.0, "TRY", "test", "2026-07-04"),
        }
    )
    holding = Holding(
        id="yay", symbol="YAY", label="YAY", quantity=10, asset_class="tefas_fund", role="growth"
    )
    valuation = value_holdings([holding], provider)

    report = render_portfolio_report(valuation, db_path=db_path)

    assert "Vergi arındırılmış net değer (USD)" not in report


def test_portfolio_report_includes_gain_amount_and_percentage_columns(tmp_path):
    from market_signals.database import save_holding

    db_path = tmp_path / "signals.db"
    save_holding(db_path, "YAY", 10.0, 100.0)

    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 150.0, "TRY", "test", "2026-07-04"),
        }
    )
    holding = Holding(
        id="yay", symbol="YAY", label="YAY", quantity=10, asset_class="tefas_fund", role="growth"
    )
    valuation = value_holdings([holding], provider)

    report = render_portfolio_report(valuation, db_path=db_path)

    assert "Kâr/Zarar | Kâr/Zarar %" in report
    # Gain = (150-100)*10 = 500 TL on a 1000 TL cost basis -> +50.00%
    row = next(line for line in report.splitlines() if line.startswith("| YAY |"))
    assert "+500.00 TL" in row
    assert "+50.00%" in row


def test_portfolio_report_shows_dash_for_gain_percentage_without_cost_basis(tmp_path):
    from market_signals.database import save_holding

    db_path = tmp_path / "signals.db"
    save_holding(db_path, "GRAM_ALTIN", 5.0, 0.0)

    provider = StaticPriceProvider(
        {
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
        }
    )
    holding = Holding(
        id="gold",
        symbol="GRAM_ALTIN",
        label="Fiziki altın",
        quantity=5,
        asset_class="physical_gold",
        role="defensive",
    )
    valuation = value_holdings([holding], provider)

    report = render_portfolio_report(valuation, db_path=db_path)
    row = next(line for line in report.splitlines() if line.startswith("| Fiziki altın |"))

    assert "+30,000.00 TL" in row
    assert "| — |" in row


def test_portfolio_report_has_no_pending_projection_section():
    valuation = value_holdings(
        default_user_holdings(),
        StaticPriceProvider(
            {
                "YAY": PriceSnapshot("YAY", 100.0, "TRY", "test", "2026-07-04"),
                "YFT": PriceSnapshot("YFT", 1.0, "TRY", "test", "2026-07-04"),
                "GMSTR": PriceSnapshot("GMSTR", 550.0, "TRY", "test", "2026-07-04"),
                "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
            }
        ),
    )

    report = render_portfolio_report(valuation)

    assert "Bekleyen İşlem Projeksiyonu" not in report
    assert "### Projeksiyon" not in report


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


def test_portfolio_report_discloses_stale_fallback_prices():
    valuation = PortfolioValuation(
        rows=[
            ValuationRow(
                holding=Holding(
                    id="yay",
                    symbol="YAY",
                    label="YAY / YFAY1",
                    quantity=2,
                    asset_class="tefas_fund",
                    role="growth",
                ),
                price=PriceSnapshot(
                    "YAY", 100.0, "TRY", "fallback", "2026-07-04", stale=True
                ),
                market_value=200.0,
                weight_pct=100.0,
                missing_price=False,
            )
        ],
        total_value=200.0,
    )

    report = render_portfolio_report(valuation)

    assert "fallback" in report
    assert "güncel fiyat doğrulaması gerekir" in report


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
