from __future__ import annotations

from market_signals.portfolio import PortfolioValuation, ValuationRow


def _money(value: float | None) -> str:
    if value is None:
        return "fiyat doğrulanamadı"
    return f"{value:,.2f} TL"


def _table_text(value: str) -> str:
    return " ".join(value.split()).replace("|", "\\|")


def _row_note(row: ValuationRow) -> str:
    if row.missing_price:
        return "Fiyat doğrulanamadı; manuel kontrol gerekir."
    return row.holding.notes


def _missing_symbols(
    valuation: PortfolioValuation, explicit_symbols: list[str] | None
) -> list[str]:
    symbols: list[str] = []
    for row in valuation.rows:
        if row.missing_price:
            symbols.append(row.holding.symbol)
    if explicit_symbols:
        symbols.extend(explicit_symbols)

    deduped: list[str] = []
    seen: set[str] = set()
    for symbol in symbols:
        if symbol not in seen:
            deduped.append(symbol)
            seen.add(symbol)
    return deduped


def render_portfolio_report(
    valuation: PortfolioValuation, missing_symbols: list[str] | None = None
) -> str:
    missing_symbols = _missing_symbols(valuation, missing_symbols)
    physical_gold_quantity = sum(
        row.holding.quantity
        for row in valuation.rows
        if row.holding.asset_class == "physical_gold"
    )

    lines = [
        "# Portföy Karar-Destek Raporu",
        "",
        "Bu rapor yatırım tavsiyesi değildir; manuel karar desteği ve kontrol listesi olarak üretilir.",
        "",
        "## Portföy Özeti",
        "",
        f"- Değerlenmiş toplam: {_money(valuation.total_value)}",
        f"- Fiziki altın miktarı: {physical_gold_quantity:.4f} gram",
        "",
        "| Varlık | Adet/Gram | Fiyat | Değer | Ağırlık | Not |",
        "| --- | ---: | ---: | ---: | ---: | --- |",
    ]

    for row in valuation.rows:
        price = row.price.price if row.price is not None else None
        lines.append(
            "| "
            f"{_table_text(row.holding.label)} | "
            f"{row.holding.quantity:.4f} | "
            f"{_money(price)} | "
            f"{_money(row.market_value)} | "
            f"{row.weight_pct:.2f}% | "
            f"{_table_text(_row_note(row))} |"
        )

    lines.extend(
        [
            "",
            "## Bekleyen İşlem Projeksiyonu",
            "",
            "YLB satırı Pazartesi günü YAY alımına dönecek bekleyen tutarın projeksiyonu olarak izlenir. "
            "Bu bölüm bir emir talimatı, otomatik işlem önerisi veya kişisel yatırım tavsiyesi değildir; "
            "yalnızca manuel karar öncesi kontrol amacı taşır.",
            "",
            "## Veri Uyarıları",
            "",
        ]
    )

    if missing_symbols:
        lines.extend(f"- {symbol}: fiyat doğrulanamadı" for symbol in missing_symbols)
    else:
        lines.append("- Fiyatı doğrulanamayan sembol yok.")

    lines.extend(
        [
            "",
            "## Manuel Kontrol",
            "",
            "- TEFAS fiyatları ve fon işlem takvimi için 13:30 sonrası manuel kontrol yapın.",
            "- Nihai karar kullanıcıya aittir; rapor yalnızca karar-destek notu olarak değerlendirilmelidir.",
        ]
    )

    return "\n".join(lines)
