from __future__ import annotations

from pathlib import Path

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


def _price_source_notes(valuation: PortfolioValuation) -> list[str]:
    notes: list[str] = []
    for row in valuation.rows:
        if row.price is None:
            continue
        if row.price.stale or row.price.source == "fallback":
            source = _table_text(row.price.source)
            notes.append(
                f"- {row.holding.symbol}: {source} fiyat kaynağı kullanıldı; "
                "güncel fiyat doğrulaması gerekir."
            )
    return notes


def render_portfolio_report(
    valuation: PortfolioValuation,
    missing_symbols: list[str] | None = None,
    db_path: Path | None = None,
    usd_rate: float = 0.0,
) -> str:
    missing_symbols = _missing_symbols(valuation, missing_symbols)
    price_source_notes = _price_source_notes(valuation)
    physical_gold_quantity = sum(
        row.holding.quantity
        for row in valuation.rows
        if row.holding.asset_class == "physical_gold"
    )

    tax_summary = None
    if db_path is not None:
        try:
            from .taxes import calculate_portfolio_taxes
            tax_summary = calculate_portfolio_taxes(db_path, valuation.rows)
        except Exception:
            pass

    summary_lines = [
        f"- Değerlenmiş toplam: {_money(valuation.total_value)}"
    ]
    if tax_summary:
        net_val = tax_summary["total_net_try"]
        tax_val = tax_summary["total_tax_try"]
        summary_lines.append(f"- Tahmini stopaj yükü: {_money(tax_val)}")
        summary_lines.append(f"- Vergi arındırılmış net değer: {_money(net_val)}")
        if usd_rate > 0:
            net_val_usd = net_val / usd_rate
            summary_lines.append(
                f"- Vergi arındırılmış net değer (USD): {net_val_usd:,.2f} USD"
            )

    summary_lines.append(f"- Fiziki altın miktarı: {physical_gold_quantity:.4f} gram")
    summary_lines.append("- Ağırlıklar yalnızca fiyatı doğrulanan satırlar içinde hesaplanır; fiyatı eksik varlıklar toplam ağırlığa dahil edilmez.")

    table_headers = [
        "| Varlık | Adet/Gram | Fiyat | Değer | Ağırlık | Not |" if not tax_summary else
        "| Varlık | Adet/Gram | Fiyat | Değer | Ort. Maliyet | Kâr/Zarar | Kâr/Zarar % | Stopaj | Vergi Yükü | Net Değer | Ağırlık | Not |",
        "| --- | ---: | ---: | ---: | ---: | --- |" if not tax_summary else
        "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |"
    ]

    lines = [
        "# Portföy Karar-Destek Raporu",
        "",
        "Bu rapor yatırım tavsiyesi değildir; manuel karar desteği ve kontrol listesi olarak üretilir.",
        "",
        "## Portföy Özeti",
        "",
        *summary_lines,
        "",
        *table_headers
    ]

    for row in valuation.rows:
        price = row.price.price if row.price is not None else None
        
        if tax_summary and row.holding.symbol in tax_summary["assets"]:
            res = tax_summary["assets"][row.holding.symbol]
            cost_p_str = f"{res['cost_price']:,.2f} TL"
            tax_rate_str = f"{res['tax_rate']*100:g}%"
            tax_amt_str = f"{res['tax_amount']:,.2f} TL"
            net_val_str = f"{res['net_value']:,.2f} TL"

            gain = res["gain"]
            cost_basis = res["cost_basis"]
            gain_sign = "+" if gain >= 0 else ""
            gain_str = f"{gain_sign}{gain:,.2f} TL"
            gain_pct_str = (
                f"{gain_sign}{gain / cost_basis * 100:,.2f}%" if cost_basis else "—"
            )

            lines.append(
                "| "
                f"{_table_text(row.holding.label)} | "
                f"{row.holding.quantity:.4f} | "
                f"{_money(price)} | "
                f"{_money(row.market_value)} | "
                f"{cost_p_str} | "
                f"{gain_str} | "
                f"{gain_pct_str} | "
                f"{tax_rate_str} | "
                f"{tax_amt_str} | "
                f"{net_val_str} | "
                f"{row.weight_pct:.2f}% | "
                f"{_table_text(_row_note(row))} |"
            )
        else:
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
            "## Veri Uyarıları",
            "",
        ]
    )

    if missing_symbols:
        lines.extend(f"- {symbol}: fiyat doğrulanamadı" for symbol in missing_symbols)
    else:
        lines.append("- Fiyatı doğrulanamayan sembol yok.")

    if price_source_notes:
        lines.extend(
            [
                "",
                "## Fiyat Kaynağı Notu",
                "",
                *price_source_notes,
            ]
        )

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
