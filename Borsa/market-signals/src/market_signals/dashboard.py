from __future__ import annotations

import base64
import html
import os
import json
from dataclasses import dataclass
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Callable
from datetime import datetime


REPORT_PATTERNS = {
    "latest_daily": "daily-*.md",
    "latest_portfolio": "portfolio-*.md",
    "weekly_model": "model-review-weekly.md",
    "monthly_model": "model-review-monthly.md",
}


@dataclass(frozen=True)
class DashboardAuth:
    username: str
    password: str

    @property
    def enabled(self) -> bool:
        return bool(self.password)


@dataclass(frozen=True)
class DashboardSnapshot:
    root: Path
    latest_daily: Path | None
    latest_portfolio: Path | None
    weekly_model: Path | None
    monthly_model: Path | None


def dashboard_auth_from_env() -> DashboardAuth:
    return DashboardAuth(
        username=os.getenv("MARKET_SIGNALS_DASHBOARD_USER", "estranova"),
        password=os.getenv("MARKET_SIGNALS_DASHBOARD_PASSWORD", ""),
    )


def collect_dashboard_snapshot(root: Path) -> DashboardSnapshot:
    reports_dir = root / "data" / "reports"
    return DashboardSnapshot(
        root=root,
        latest_daily=_latest_report(reports_dir, REPORT_PATTERNS["latest_daily"]),
        latest_portfolio=_latest_report(reports_dir, REPORT_PATTERNS["latest_portfolio"]),
        weekly_model=_latest_report(reports_dir, REPORT_PATTERNS["weekly_model"]),
        monthly_model=_latest_report(reports_dir, REPORT_PATTERNS["monthly_model"]),
    )


def render_dashboard_html(snapshot: DashboardSnapshot) -> str:
    db_file = snapshot.root / "data" / "signals" / "signals.db"

    # 1. Fetch current holdings
    from .database import get_holdings_detailed, get_cash_flows
    detailed_holdings = get_holdings_detailed(db_file)
    default_symbols = ["YAY", "YFT", "YLB", "GMSTR", "Z30EA", "GRAM_ALTIN", "USD", "EUR"]
    for sym in default_symbols:
        if sym not in detailed_holdings:
            detailed_holdings[sym] = {"quantity": 0.0, "cost_price": 0.0}

    # Calculate live valuation and taxes
    from .prices import LivePriceProvider, StaticPriceProvider, PriceSnapshot
    from .portfolio import value_holdings, Holding
    from .cli import default_user_holdings
    from .taxes import calculate_portfolio_taxes
    from dataclasses import replace
    
    asof = datetime.now().strftime("%Y-%m-%d")
    static_fallback = StaticPriceProvider({
        "YAY": PriceSnapshot("YAY", 1867.83, "TRY", "fallback", asof, stale=True),
        "YFT": PriceSnapshot("YFT", 1.0, "TRY", "fallback", asof, stale=True),
        "YLB": PriceSnapshot("YLB", 1.0, "TRY", "fallback", asof, stale=True),
        "GMSTR": PriceSnapshot("GMSTR", 569.50, "TRY", "fallback", asof, stale=True),
        "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6277.78, "TRY", "fallback", asof, stale=True),
        "USD": PriceSnapshot("USD", 33.33, "TRY", "fallback", asof, stale=True),
        "EUR": PriceSnapshot("EUR", 36.50, "TRY", "fallback", asof, stale=True)
    })
    provider = LivePriceProvider(fallback_provider=static_fallback)
    
    holdings = []
    seen_symbols = set()
    for h in default_user_holdings():
        meta = detailed_holdings.get(h.symbol, {})
        qty = meta.get("quantity", h.quantity)
        holdings.append(replace(h, quantity=qty))
        seen_symbols.add(h.symbol)
        
    for symbol, meta in detailed_holdings.items():
        if symbol not in seen_symbols:
            holdings.append(
                Holding(
                    id=symbol.lower(),
                    symbol=symbol,
                    label=symbol,
                    quantity=meta["quantity"],
                    asset_class="other",
                    role="other"
                )
            )
            
    valuation = value_holdings(holdings, provider)
    tax_summary = calculate_portfolio_taxes(db_file, valuation.rows)
    
    total_tax_try = tax_summary["total_tax_try"]
    total_net_try = tax_summary["total_net_try"]
    
    usd_rate_snap = provider.get("USDTRY=X")
    usd_rate = usd_rate_snap.price if usd_rate_snap else 33.33
    total_tax_usd = total_tax_try / usd_rate if usd_rate > 0 else 0.0
    total_net_usd = total_net_try / usd_rate if usd_rate > 0 else 0.0

    # Build tax table rows for the vergi paneli
    from .taxes import TAX_LABELS
    tax_rows_html = []
    for row in valuation.rows:
        sym = row.holding.symbol
        if sym not in tax_summary["assets"]:
            continue
        res = tax_summary["assets"][sym]
        price_str = f"{res['current_price']:,.4f}" if res['current_price'] else "—"
        mv_str = f"{res['current_value']:,.0f}"
        cost_str = f"{res['cost_price']:,.4f}" if res['cost_price'] else "—"
        gain = res['gain']
        gain_color = "#2e7d32" if gain >= 0 else "#c62828"
        gain_sign = "+" if gain >= 0 else ""
        gain_str = f"{gain_sign}{gain:,.0f}"
        tax_rate = res['tax_rate']
        if tax_rate == 0.0:
            badge = "<span style='background:#e8f5e9;color:#2e7d32;padding:2px 7px;border-radius:10px;font-size:0.75rem;font-weight:700;'>%0 muaf</span>"
        else:
            badge = f"<span style='background:#fff3e0;color:#e65100;padding:2px 7px;border-radius:10px;font-size:0.75rem;font-weight:700;'>%{tax_rate*100:.1f}</span>"
        tax_amt = res['tax_amount']
        net_val = res['net_value']
        tax_amt_color = "#c62828" if tax_amt > 0 else "var(--muted)"
        tax_rows_html.append(f"""
            <tr>
              <td style="font-weight:600;">{html.escape(row.holding.label)}</td>
              <td style="text-align:right;">{res['quantity']:,.4f}</td>
              <td style="text-align:right;">{price_str} TL</td>
              <td style="text-align:right;">{mv_str} TL</td>
              <td style="text-align:right;">{cost_str} TL</td>
              <td style="text-align:right;color:{gain_color};font-weight:600;">{gain_str} TL</td>
              <td style="text-align:center;">{badge}</td>
              <td style="text-align:right;color:{tax_amt_color};font-weight:600;">{tax_amt:,.0f} TL</td>
              <td style="text-align:right;color:#2e7d32;font-weight:600;">{net_val:,.0f} TL</td>
            </tr>
        """)
    tax_table_rows = "\n".join(tax_rows_html) if tax_rows_html else "<tr><td colspan='9' style='text-align:center;color:var(--muted);'>Veri yok.</td></tr>"

    # Build holdings table rows for the HTML form
    holdings_rows = []
    for sym in default_symbols:
        meta = detailed_holdings[sym]
        qty = meta["quantity"]
        cost_p = meta["cost_price"]
        holdings_rows.append(f"""
            <tr style="border-bottom: 1px solid var(--line);">
                <td style="font-weight:600; padding:6px 0; font-size:0.85rem;">{sym}</td>
                <td><input type="number" step="any" name="holding_qty_{sym.lower()}" value="{qty}" style="width:90%; padding:4px; font-family:inherit;"></td>
                <td><input type="number" step="any" name="holding_cost_{sym.lower()}" value="{cost_p}" style="width:90%; padding:4px; font-family:inherit;"></td>
            </tr>
        """)
    holdings_rows_html = "\n".join(holdings_rows)

    # 2. Fetch performance summaries
    from .performance import get_performance_summary
    perf_try = get_performance_summary(db_file, currency="TRY")
    perf_usd = get_performance_summary(db_file, currency="USD")

    # 3. Fetch last 5 cash flows
    flows = get_cash_flows(db_file)
    last_flows = flows[-5:]

    # Render cash flow table rows
    cf_rows = []
    for cf in reversed(last_flows):
        type_class = "cf-type-deposit" if cf["flow_type"] == "DEPOSIT" else "cf-type-withdraw"
        type_label = "Giriş" if cf["flow_type"] == "DEPOSIT" else "Çıkış"
        cf_rows.append(f"""
            <tr>
                <td>{html.escape(cf["date"])}</td>
                <td><span class="{type_class}">{type_label}</span></td>
                <td>{cf["amount"]:,.2f} {html.escape(cf["currency"])}</td>
                <td>{html.escape(cf["description"])}</td>
            </tr>
        """)
    cf_table_body = "\n".join(cf_rows) if cf_rows else "<tr><td colspan='4' style='text-align:center; color:var(--muted);'>Kayıtlı nakit akışı bulunmuyor.</td></tr>"

    cards = [
        ("Günlük Sinyal", snapshot.latest_daily),
        ("Portföy Özeti", snapshot.latest_portfolio),
        ("Haftalık Model", snapshot.weekly_model),
        ("Aylık Strateji", snapshot.monthly_model),
    ]
    sections = "\n".join(_render_report_section(title, path) for title, path in cards)

    # Format summary stats
    twrr_try = perf_try["twrr_pct"]
    twrr_usd = perf_usd["twrr_pct"]
    try_class = "positive" if twrr_try >= 0 else "negative"
    usd_class = "positive" if twrr_usd >= 0 else "negative"
    try_sign = "+" if twrr_try >= 0 else ""
    usd_sign = "+" if twrr_usd >= 0 else ""

    return f"""<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Estranova Varlık Pusulası</title>
  <style>
    :root {{
      color-scheme: light;
      --ink: #181716;
      --muted: #6f6762;
      --line: #ded8d3;
      --paper: #fbf8f5;
      --panel: #ffffff;
      --pink: #D81B60;
      --gold: #B8904A;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background: var(--paper);
      color: var(--ink);
      font-family: "Kulim Park", "Segoe UI", Arial, sans-serif;
      line-height: 1.55;
    }}
    main {{
      width: min(1280px, calc(100% - 32px));
      margin: 0 auto;
      padding: 32px 0 48px;
    }}
    header {{
      border-bottom: 1px solid var(--line);
      padding: 0 0 22px;
      margin-bottom: 22px;
    }}
    h1 {{
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(2rem, 4vw, 4rem);
      line-height: 1;
      margin: 0 0 12px;
      letter-spacing: 0;
    }}
    .meta, .notice {{
      color: var(--muted);
      font-size: 0.95rem;
      max-width: 78ch;
    }}
    .notice {{
      border-left: 3px solid var(--gold);
      padding: 10px 0 10px 14px;
      margin-top: 16px;
    }}
    .actions {{
      display: flex;
      gap: 12px;
      margin-top: 18px;
      flex-wrap: wrap;
    }}
    .btn {{
      background: var(--pink);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 0.9rem;
      cursor: pointer;
      font-family: inherit;
      font-weight: 600;
      transition: background 0.2s;
      text-decoration: none;
      display: inline-block;
    }}
    .btn:hover {{
      background: #b0124a;
    }}
    .btn-gold {{
      background: var(--gold);
    }}
    .btn-gold:hover {{
      background: #9d7838;
    }}
    
    /* Performance Section */
    .chart-container {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 18px;
      margin-bottom: 22px;
    }}
    .chart-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 12px;
    }}
    .chart-title {{
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.4rem;
      margin: 0;
    }}
    .btn-group {{
      display: flex;
      gap: 6px;
    }}
    .btn-sm {{
      padding: 5px 12px;
      font-size: 0.8rem;
      border-radius: 4px;
      background: #eee;
      color: #333;
      border: 1px solid #ccc;
      cursor: pointer;
      font-weight: 600;
    }}
    .btn-sm.active {{
      background: var(--pink);
      color: white;
      border-color: var(--pink);
    }}
    .btn-sm-gold.active {{
      background: var(--gold);
      color: white;
      border-color: var(--gold);
    }}
    .summary-grid {{
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
      margin-bottom: 22px;
    }}
    .summary-card {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 12px;
      text-align: center;
    }}
    .summary-val {{
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--ink);
    }}
    .summary-val.positive {{
      color: #2e7d32;
    }}
    .summary-val.negative {{
      color: #c62828;
    }}
    .summary-lbl {{
      font-size: 0.8rem;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 4px;
    }}

    /* Form Grid */
    .form-grid {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }}
    .form-panel {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 18px;
    }}
    .form-panel h3 {{
      margin-top: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--line);
      padding-bottom: 8px;
      margin-bottom: 14px;
    }}
    .form-row {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 10px;
    }}
    .form-group {{
      margin-bottom: 12px;
    }}
    .form-group label {{
      display: block;
      font-size: 0.82rem;
      font-weight: 600;
      margin-bottom: 4px;
    }}
    .form-group input, .form-group select {{
      width: 100%;
      padding: 8px;
      border: 1px solid var(--line);
      border-radius: 4px;
      font-family: inherit;
    }}
    .table-container {{
      overflow-x: auto;
      margin-top: 12px;
    }}
    .cf-table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 0.85rem;
    }}
    .cf-table th, .cf-table td {{
      padding: 6px 8px;
      border-bottom: 1px solid var(--line);
      text-align: left;
    }}
    .cf-type-deposit {{
      color: #2e7d32;
      font-weight: 600;
    }}
    .cf-type-withdraw {{
      color: #c62828;
      font-weight: 600;
    }}

    .grid {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }}
    section {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      min-width: 0;
      overflow: hidden;
    }}
    .section-head {{
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
      border-bottom: 1px solid var(--line);
      padding: 16px 18px 12px;
    }}
    h2 {{
      font-size: 0.82rem;
      text-transform: uppercase;
      color: var(--pink);
      margin: 0;
      letter-spacing: 0.04em;
    }}
    .file {{
      color: var(--muted);
      font-size: 0.82rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}
    .report {{
      padding: 16px 18px 20px;
      overflow: auto;
      max-height: 520px;
    }}
    .report h1, .report h2, .report h3 {{
      font-family: Georgia, "Times New Roman", serif;
      line-height: 1.2;
      margin: 16px 0 8px;
      letter-spacing: 0;
    }}
    .report h1 {{ font-size: 1.45rem; }}
    .report h2 {{ font-size: 1.15rem; color: var(--ink); text-transform: none; }}
    .report p, .report ul {{ margin: 0 0 10px; }}
    .report table {{
      border-collapse: collapse;
      width: 100%;
      min-width: 560px;
      font-size: 0.9rem;
    }}
    .report th, .report td {{
      border-bottom: 1px solid var(--line);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }}
    .missing {{
      color: var(--muted);
      font-style: italic;
      padding: 16px 18px 20px;
    }}
    @media (max-width: 860px) {{
      main {{ width: min(100% - 20px, 1280px); padding-top: 20px; }}
      .grid, .form-grid {{ grid-template-columns: 1fr; }}
      .summary-grid {{ grid-template-columns: repeat(2, 1fr); }}
      .section-head {{ display: block; }}
      .file {{ margin-top: 4px; white-space: normal; }}
    }}
  </style>
</head>
<body>
  <main>
    <header>
      <h1>Estranova Varlık Pusulası</h1>
      <div class="meta">Özel karar-destek ekranı · hedef adres: varlik.estranova.com · lokal servis: 127.0.0.1:8765</div>
      <div class="notice">Bu ekran yatırım tavsiyesi değildir; otomatik emir, portföy yönetimi veya kişisel al-sat talimatı üretmez. Cloudflare Access ve dashboard parolası arkasında kullanılmalıdır.</div>
      <div class="actions">
        <form action="/run-daily" method="post" style="display:inline;">
          <button type="submit" class="btn">Günlük Sinyal Hesapla</button>
        </form>
        <form action="/run-portfolio" method="post" style="display:inline;">
          <button type="submit" class="btn">Portföy Raporu Oluştur</button>
        </form>
        <form action="/run-weekly-model" method="post" style="display:inline;">
          <button type="submit" class="btn btn-gold">Haftalık Modeli Değerlendir</button>
        </form>
        <form action="/run-monthly-model" method="post" style="display:inline;">
          <button type="submit" class="btn btn-gold">Aylık Strateji Değerlendir</button>
        </form>
      </div>
    </header>

    <!-- Performance Chart Section -->
    <div class="chart-container">
      <div class="chart-header">
        <h3 class="chart-title">Zaman Ağırlıklı Portföy Getirisi (TWRR)</h3>
        <div style="display:flex; gap:12px;">
          <div class="btn-group">
            <button id="btn-try" class="btn-sm active" onclick="setCurrency('TRY')">TRY</button>
            <button id="btn-usd" class="btn-sm btn-sm-gold" onclick="setCurrency('USD')">USD</button>
          </div>
          <div class="btn-group">
            <button class="btn-sm range-btn" onclick="filterRange(30)">1 Ay</button>
            <button class="btn-sm range-btn" onclick="filterRange(90)">3 Ay</button>
            <button class="btn-sm range-btn" onclick="filterRange(-1)">YTD</button>
            <button class="btn-sm range-btn active" onclick="filterRange(0)">Tümü</button>
          </div>
        </div>
      </div>
      <div style="height:320px; position:relative;">
        <canvas id="perfChart"></canvas>
      </div>
    </div>

    <!-- Summary Stats Grid -->
    <div class="summary-grid">
      <div class="summary-card">
        <div class="summary-val">{try_sign}{twrr_try:,.2f}%</div>
        <div class="summary-lbl">TRY Bazında TWRR</div>
      </div>
      <div class="summary-card">
        <div class="summary-val">{usd_sign}{twrr_usd:,.2f}%</div>
        <div class="summary-lbl">USD Bazında TWRR</div>
      </div>
      <div class="summary-card">
        <div class="summary-val">{perf_try["net_cash_flow"]:,.2f} TRY</div>
        <div class="summary-lbl">Net Nakit Akışı (TRY)</div>
      </div>
      <div class="summary-card">
        <div class="summary-val">{perf_try["end_value"]:,.2f} TRY</div>
        <div class="summary-lbl" style="font-size:0.75rem; margin-top:2px; color:var(--pink); font-weight:600;">Net: {total_net_try:,.2f} TRY</div>
        <div class="summary-lbl">Güncel Toplam Değer (TRY)</div>
      </div>
      <div class="summary-card">
        <div class="summary-val">{perf_usd["end_value"]:,.2f} USD</div>
        <div class="summary-lbl" style="font-size:0.75rem; margin-top:2px; color:var(--gold); font-weight:600;">Net: {total_net_usd:,.2f} USD</div>
        <div class="summary-lbl">Güncel Toplam Değer (USD)</div>
      </div>
      <div class="summary-card">
        <div class="summary-val" style="color:#c62828;">{total_tax_try:,.0f} TL</div>
        <div class="summary-lbl" style="color:var(--muted);">Tahmini Stopaj Yükü</div>
      </div>
    </div>

    <!-- Vergi Duyarlılık Analizi Paneli -->
    <div class="chart-container" style="margin-bottom:22px;">
      <div class="chart-header">
        <h3 class="chart-title">Vergi Duyarlılık Analizi</h3>
        <span style="font-size:0.8rem; color:var(--muted);">GVK Geç. Md. 67 · 09.07.2025 ve 27.03.2026 CB Kararları · Karar-destek amaçlıdır</span>
      </div>
      <div class="table-container">
        <table class="cf-table" style="font-size:0.84rem;">
          <thead>
            <tr style="background:var(--paper);">
              <th>Varlık</th>
              <th style="text-align:right;">Miktar</th>
              <th style="text-align:right;">Güncel Fiyat</th>
              <th style="text-align:right;">Piyasa Değeri</th>
              <th style="text-align:right;">Ort. Maliyet</th>
              <th style="text-align:right;">Kâr / Zarar</th>
              <th style="text-align:center;">Stopaj</th>
              <th style="text-align:right;">Vergi Yükü</th>
              <th style="text-align:right;">Net Değer</th>
            </tr>
          </thead>
          <tbody>
            {tax_table_rows}
          </tbody>
          <tfoot>
            <tr style="border-top:2px solid var(--line); font-weight:700;">
              <td colspan="7" style="text-align:right; padding:8px 8px;">TOPLAM</td>
              <td style="text-align:right; color:#c62828;">{total_tax_try:,.0f} TL</td>
              <td style="text-align:right; color:#2e7d32;">{total_net_try:,.0f} TL</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Form Inputs Section -->
    <div class="form-grid">
      <!-- Update Holdings Form -->
      <div class="form-panel">
        <h3>Varlık ve Ortalama Maliyet Yönetimi</h3>
        <form action="/update-holdings" method="post">
          <table style="width:100%; border-collapse:collapse; margin-bottom:12px; font-size:0.85rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--line); text-align:left;">
                <th style="padding:4px 0;">Varlık</th>
                <th style="padding:4px;">Miktar</th>
                <th style="padding:4px;">Maliyet Fiyatı (TRY/USD)</th>
              </tr>
            </thead>
            <tbody>
              {holdings_rows_html}
            </tbody>
          </table>
          <button type="submit" class="btn" style="width:100%;">Miktarları ve Maliyetleri Kaydet</button>
        </form>
      </div>

      <!-- Add Cash Flow Form -->
      <div class="form-panel">
        <h3>Nakit Akışı Ekle (Yatırma/Çekme)</h3>
        <form action="/add-cash-flow" method="post">
          <div class="form-row">
            <div class="form-group">
              <label for="flow_type">İşlem Türü</label>
              <select name="flow_type" id="flow_type">
                <option value="DEPOSIT">Para Girişi</option>
                <option value="WITHDRAW">Para Çıkışı</option>
              </select>
            </div>
            <div class="form-group">
              <label for="amount">Miktar</label>
              <input type="number" step="any" name="amount" id="amount" required placeholder="Miktar">
            </div>
            <div class="form-group">
              <label for="currency">Para Birimi</label>
              <select name="currency" id="currency">
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="grid-column: span 2;">
              <label for="description">Açıklama</label>
              <input type="text" name="description" id="description" placeholder="Örn: Ek fon alımı için sermaye ekleme">
            </div>
            <div class="form-group">
              <label for="date">Tarih</label>
              <input type="date" name="date" id="date" value="{datetime.now().strftime("%Y-%m-%d")}">
            </div>
          </div>
          <button type="submit" class="btn btn-gold" style="width:100%; margin-top:8px;">Nakit Akışı Kaydet</button>
        </form>
      </div>
    </div>

    <!-- Last Cash Flows Table -->
    <div class="chart-container" style="margin-bottom:30px;">
      <h3 class="chart-title" style="font-size:1.1rem; margin-bottom:10px;">Son Nakit Akışı Kayıtları</h3>
      <div class="table-container">
        <table class="cf-table">
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tür</th>
              <th>Miktar</th>
              <th>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {cf_table_body}
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid">
      {sections}
    </div>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const tryHistory = {json.dumps(perf_try["history"])};
    const usdHistory = {json.dumps(perf_usd["history"])};
    
    let currentCurrency = 'TRY';
    let chartInstance = null;
    let currentDays = 0; // 0 = all
    
    function initChart() {{
      const ctx = document.getElementById('perfChart').getContext('2d');
      const rawData = currentCurrency === 'TRY' ? tryHistory : usdHistory;
      
      // Apply date range filter
      let filteredData = rawData;
      if (currentDays > 0) {{
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - currentDays);
        filteredData = rawData.filter(item => new Date(item.date) >= cutoff);
      }} else if (currentDays === -1) {{
        // YTD
        const cutoff = new Date(new Date().getFullYear(), 0, 1);
        filteredData = rawData.filter(item => new Date(item.date) >= cutoff);
      }}
      
      const labels = filteredData.map(item => item.date);
      const values = filteredData.map(item => item.return_pct);
      const portfolioValues = filteredData.map(item => item.value);
      
      if (chartInstance) {{
        chartInstance.destroy();
      }}
      
      // If no data, show empty chart
      if (filteredData.length === 0) {{
        chartInstance = new Chart(ctx, {{
          type: 'line',
          data: {{ labels: [], datasets: [] }},
          options: {{
            responsive: true,
            maintainAspectRatio: false
          }}
        }});
        return;
      }}
      
      // Compounded returns from the start of the visible range
      // Reset visible returns relative to the first visible point (first visible point = 0% return)
      const baseReturn = filteredData[0].return_pct;
      const relativeValues = values.map(v => {{
        // TWRR compounding subtraction:
        // (1 + v/100) / (1 + baseReturn/100) - 1
        const vRatio = 1.0 + (v / 100.0);
        const baseRatio = 1.0 + (baseReturn / 100.0);
        return ((vRatio / baseRatio) - 1.0) * 100.0;
      }});

      chartInstance = new Chart(ctx, {{
        type: 'line',
        data: {{
          labels: labels,
          datasets: [{{
            label: 'Zaman Ağırlıklı Getiri (%)',
            data: relativeValues,
            borderColor: currentCurrency === 'TRY' ? '#D81B60' : '#B8904A',
            backgroundColor: currentCurrency === 'TRY' ? 'rgba(216, 27, 96, 0.03)' : 'rgba(184, 144, 74, 0.03)',
            borderWidth: 2,
            pointRadius: labels.length > 30 ? 1 : 4,
            pointHoverRadius: 6,
            tension: 0.1,
            fill: true
          }}]
        }},
        options: {{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {{
            tooltip: {{
              callbacks: {{
                label: function(context) {{
                  const index = context.dataIndex;
                  const pct = relativeValues[index].toFixed(2);
                  const val = portfolioValues[index].toLocaleString('tr-TR', {{ minimumFractionDigits: 2, maximumFractionDigits: 2 }});
                  return `Getiri: %${{pct >= 0 ? '+' : ''}}${{pct}} | Portföy Değeri: ${{val}} ${{currentCurrency}}`;
                }}
              }}
            }}
          }},
          scales: {{
            y: {{
              ticks: {{
                callback: function(value) {{
                  return (value >= 0 ? '+' : '') + value + '%';
                }}
              }}
            }}
          }}
        }}
      }});
    }}
    
    function setCurrency(curr) {{
      currentCurrency = curr;
      document.querySelectorAll('.currency-btn').forEach(btn => btn.classList.remove('active'));
      
      const tryBtn = document.getElementById('btn-try');
      const usdBtn = document.getElementById('btn-usd');
      if (curr === 'TRY') {{
        tryBtn.classList.add('active');
        usdBtn.classList.remove('active');
      }} else {{
        usdBtn.classList.add('active');
        tryBtn.classList.remove('active');
      }}
      initChart();
    }}
    
    function filterRange(days) {{
      currentDays = days;
      initChart();
    }}
  </script>
</body>
</html>"""


def is_authorized(header_value: str | None, auth: DashboardAuth) -> bool:
    if not auth.enabled:
        return True
    if not header_value or not header_value.startswith("Basic "):
        return False
    try:
        decoded = base64.b64decode(header_value[6:], validate=True).decode("utf-8")
    except (ValueError, UnicodeDecodeError):
        return False
    username, separator, password = decoded.partition(":")
    return bool(separator) and username == auth.username and password == auth.password


def serve_dashboard(
    root: Path,
    *,
    host: str = "127.0.0.1",
    port: int = 8765,
    auth: DashboardAuth | None = None,
) -> None:
    auth = auth or dashboard_auth_from_env()
    handler = _handler_factory(root, auth)
    ThreadingHTTPServer.allow_reuse_address = True
    httpd = ThreadingHTTPServer((host, port), handler)
    print(f"Estranova Varlık Pusulası: http://{host}:{port}/")
    print("Cloudflare hedef adresi: https://varlik.estranova.com")
    httpd.serve_forever()


def _latest_report(reports_dir: Path, pattern: str) -> Path | None:
    matches = [path for path in reports_dir.glob(pattern) if path.is_file()]
    if not matches:
        return None
    return max(matches, key=lambda path: (path.stat().st_mtime, path.name))


def _render_report_section(title: str, path: Path | None) -> str:
    filename = "rapor yok" if path is None else path.name
    body = (
        '<div class="missing">Henüz bu başlık için rapor yok.</div>'
        if path is None
        else f'<div class="report">{_markdown_to_html(path.read_text(encoding="utf-8"))}</div>'
    )
    return (
        "<section>"
        f'<div class="section-head"><h2>{html.escape(title)}</h2><div class="file">{html.escape(filename)}</div></div>'
        f"{body}"
        "</section>"
    )


def _markdown_to_html(markdown: str) -> str:
    lines: list[str] = []
    in_list = False
    in_table = False
    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        if not line:
            if in_list:
                lines.append("</ul>")
                in_list = False
            if in_table:
                lines.append("</table>")
                in_table = False
            continue
        if line.startswith("#"):
            if in_list:
                lines.append("</ul>")
                in_list = False
            if in_table:
                lines.append("</table>")
                in_table = False
            level = min(len(line) - len(line.lstrip("#")), 3)
            text = line[level:].strip()
            lines.append(f"<h{level}>{html.escape(text)}</h{level}>")
            continue
        if line.startswith("|") and line.endswith("|"):
            cells = [cell.strip() for cell in line.strip("|").split("|")]
            if all(set(cell) <= {"-", ":", " "} for cell in cells):
                continue
            if not in_table:
                lines.append("<table>")
                in_table = True
            tag = "th" if not any("<tr>" in item for item in lines[-1:]) else "td"
            lines.append("<tr>" + "".join(f"<{tag}>{html.escape(cell)}</{tag}>" for cell in cells) + "</tr>")
            continue
        if in_table:
            lines.append("</table>")
            in_table = False
        if line.startswith("- "):
            if not in_list:
                lines.append("<ul>")
                in_list = True
            lines.append(f"<li>{html.escape(line[2:])}</li>")
            continue
        if in_list:
            lines.append("</ul>")
            in_list = False
        lines.append(f"<p>{html.escape(line)}</p>")
    if in_list:
        lines.append("</ul>")
    if in_table:
        lines.append("</table>")
    return "\n".join(lines)


def _handler_factory(root: Path, auth: DashboardAuth) -> Callable[..., BaseHTTPRequestHandler]:
    class DashboardHandler(BaseHTTPRequestHandler):
        def do_GET(self) -> None:
            if self.path not in {"/", "/index.html"}:
                self.send_error(404)
                return
            if not is_authorized(self.headers.get("Authorization"), auth):
                self.send_response(401)
                self.send_header("WWW-Authenticate", 'Basic realm="Estranova Varlik Pusulasi"')
                self.end_headers()
                return
            body = render_dashboard_html(collect_dashboard_snapshot(root)).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_POST(self) -> None:
            routes = {
                "/run-daily",
                "/run-portfolio",
                "/run-weekly-model",
                "/run-monthly-model",
                "/update-holdings",
                "/add-cash-flow"
            }
            if self.path not in routes:
                self.send_error(404)
                return
            if not is_authorized(self.headers.get("Authorization"), auth):
                self.send_response(401)
                self.send_header("WWW-Authenticate", 'Basic realm="Estranova Varlik Pusulasi"')
                self.end_headers()
                return
            try:
                if self.path in {"/update-holdings", "/add-cash-flow"}:
                    content_length = int(self.headers.get("Content-Length", 0))
                    post_data = self.rfile.read(content_length).decode("utf-8")
                    from urllib.parse import parse_qs
                    params = parse_qs(post_data)
                    db_file = root / "data" / "signals" / "signals.db"

                    if self.path == "/update-holdings":
                        from .database import save_holding
                        symbols = set()
                        for key in params.keys():
                            if key.startswith("holding_qty_"):
                                symbols.add(key[12:])
                        
                        for sym in symbols:
                            qty_list = params.get(f"holding_qty_{sym}", ["0.0"])
                            cost_list = params.get(f"holding_cost_{sym}", ["0.0"])
                            try:
                                qty = float(qty_list[0])
                                cost_p = float(cost_list[0])
                                save_holding(db_file, sym.upper(), qty, cost_p)
                            except (ValueError, IndexError):
                                pass
                        # Trigger report to update snapshot and daily file
                        from .cli import run_portfolio_report
                        run_portfolio_report(root)

                    elif self.path == "/add-cash-flow":
                        from .database import add_cash_flow
                        try:
                            date = params.get("date", [""])[0]
                            if not date:
                                date = datetime.now().strftime("%Y-%m-%d")
                            amount = float(params.get("amount", [0.0])[0])
                            currency = params.get("currency", ["TRY"])[0].upper()
                            flow_type = params.get("flow_type", ["DEPOSIT"])[0].upper()
                            description = params.get("description", [""])[0]
                            if amount > 0:
                                add_cash_flow(db_file, date, amount, currency, flow_type, description)
                        except (ValueError, IndexError):
                            pass
                else:
                    if self.path == "/run-daily":
                        from .cli import run_daily
                        run_daily(root)
                    elif self.path == "/run-portfolio":
                        from .cli import run_portfolio_report
                        run_portfolio_report(root)
                    elif self.path == "/run-weekly-model":
                        from .cli import run_weekly_model_review
                        run_weekly_model_review(root)
                    elif self.path == "/run-monthly-model":
                        from .cli import run_monthly_model_review
                        run_monthly_model_review(root)

                self.send_response(303)
                self.send_header("Location", "/")
                self.end_headers()
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.end_headers()
                self.wfile.write(f"Hata: {str(e)}".encode("utf-8"))

        def log_message(self, format: str, *args: object) -> None:
            return

    return DashboardHandler
