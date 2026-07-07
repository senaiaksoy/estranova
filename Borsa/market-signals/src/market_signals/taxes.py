"""
Turkish Investment Tax Calculator
==================================
Kaynak mevzuat:
  • GVK Geçici Madde 67 (stopaj çerçevesi)
  • 9 Temmuz 2025 Cumhurbaşkanı Kararı — diğer fonlarda oran %15 → %17.5
  • 27 Mart 2026 Cumhurbaşkanı Kararı (11107) — TEFAS dışı serbest HSY fonlara %17.5

Portföydeki varlıklara göre uygulamalı oranlar (2026 itibarıyla):
  YAY  : Yapı Kredi Portföy Yabancı Teknoloji Sektörü Hisse Senedi Fonu
         Portföyünün min. %80'i yurt dışı borsalar → %17.5 (Türk HSY muafiyeti yok)
  Z30EA: BYF (BIST30 endeksi), Borsa İstanbul'da işlem → %0
  GMSTR: Kıymetli maden BYF (gümüş), diğer fon         → %17.5
  YFT  : Para piyasası fonu                             → %17.5
  YLB  : Borçlanma araçları fonu                        → %17.5
  GRAM_ALTIN: Fiziki altın — stopaja tabi değil          → %0
  USD  : Nakit döviz — stopaja tabi değil               → %0
  EUR  : Nakit döviz — stopaja tabi değil               → %0

NOT: Bu modül karar-destek amaçlıdır; nihai vergi hesabı için mali müşavir görüşü alınmalıdır.
"""
from __future__ import annotations

from pathlib import Path


# ---------------------------------------------------------------------------
# Güncel Stopaj Oranları (27 Mart 2026 sonrası durum)
# ---------------------------------------------------------------------------
TAX_RATES: dict[str, float] = {
    # Yabancı Hisse Senedi Yoğun Fonlar (Yurt dışı borsalar) → %17.5
    # YAY: Yapı Kredi Portföy Yabancı Teknoloji Sektörü Hisse Senedi Fonu
    # Portföyünün min. %80'i yurt dışı borsalarda → %0 muafiyeti UYGULANMAZ
    "YAY":  0.175,

    # Borsa Yatırım Fonları (BYF) — BİST'te işlem görür
    "Z30EA": 0.00,   # BIST30 endeks BYF → %0 (Türk hisse yoğun)
    "GMSTR": 0.175,  # Gümüş kıymetli maden BYF → %17.5 (diğer fon)

    # Para Piyasası / Borçlanma Araçları Fonları → %17.5
    "YFT":  0.175,
    "YLB":  0.175,
    "YJY":  0.175,   # Yapı Kredi Yeniköy Serbest (Döviz) Fon

    # Fiziki Altın — stopaj muafiyeti
    "GRAM_ALTIN": 0.00,

    # Nakit Döviz — stopaj muafiyeti
    "USD": 0.00,
    "EUR": 0.00,
}

# Vergi açıklamaları (Telegram / rapor için)
TAX_LABELS: dict[str, str] = {
    "YAY":        "Yabancı HSY Fon (TEFAS) — %17,5 stopaj",
    "Z30EA":      "BIST30 BYF — %0 stopaj",
    "GMSTR":      "Gümüş BYF — %17,5 stopaj",
    "YFT":        "Para Piy. Fonu — %17,5 stopaj",
    "YLB":        "Borçlanma Fonu — %17,5 stopaj",
    "YJY":        "Yeniköy Serbest (Döviz) Fon — %17,5 stopaj",
    "GRAM_ALTIN": "Fiziki Altın — stopaj yok",
    "USD":        "Nakit USD — stopaj yok",
    "EUR":        "Nakit EUR — stopaj yok",
}

MEVZUAT_NOTU = (
    "Stopaj oranları: GVK Geç. Md. 67 · "
    "09.07.2025 ve 27.03.2026 (11107 s.) CB Kararları.\n"
    "Bu hesaplama karar-destek amaçlıdır; resmi vergi müşaviri görüşü alınmalıdır."
)


def calculate_asset_tax(
    symbol: str,
    quantity: float,
    current_price: float,
    cost_price: float,
) -> dict:
    """
    Tek bir varlık için vergi ve net değer hesaplar.

    Returns
    -------
    dict:
        symbol, quantity, current_price, cost_price,
        current_value, cost_basis, gain,
        tax_rate, tax_amount, net_value, tax_label
    """
    key = symbol.upper()
    # Bilinmeyen semboller için ihtiyatlı %17.5 varsayımı
    tax_rate = TAX_RATES.get(key, 0.175)
    tax_label = TAX_LABELS.get(key, f"%{tax_rate*100:.1f} stopaj (bilinmeyen)")

    current_value = quantity * current_price
    cost_basis = quantity * cost_price
    gain = current_value - cost_basis

    tax_amount = 0.0
    if gain > 0:
        tax_amount = gain * tax_rate

    net_value = current_value - tax_amount

    return {
        "symbol": symbol,
        "quantity": quantity,
        "current_price": current_price,
        "cost_price": cost_price,
        "current_value": current_value,
        "cost_basis": cost_basis,
        "gain": gain,
        "tax_rate": tax_rate,
        "tax_label": tax_label,
        "tax_amount": tax_amount,
        "net_value": net_value,
    }


def calculate_portfolio_taxes(
    db_path: Path,
    valuation_rows: list,
) -> dict:
    """
    Portföydeki tüm aktif satırlar için vergi yükü ve net değerleri hesaplar.

    Returns
    -------
    dict:
        assets      : {symbol -> calculate_asset_tax result}
        total_tax_try : float
        total_net_try : float
        mevzuat_notu : str
    """
    from .database import get_holdings_detailed

    detailed_holdings = get_holdings_detailed(db_path)

    results: dict = {}
    total_tax_try = 0.0
    total_net_try = 0.0

    for row in valuation_rows:
        symbol = row.holding.symbol
        qty = row.holding.quantity
        price = row.price.price if row.price else 0.0

        holding_meta = detailed_holdings.get(symbol, {})
        cost_p = holding_meta.get("cost_price", 0.0)

        res = calculate_asset_tax(symbol, qty, price, cost_p)
        results[symbol] = res

        total_tax_try += res["tax_amount"]
        total_net_try += res["net_value"]

    return {
        "assets": results,
        "total_tax_try": total_tax_try,
        "total_net_try": total_net_try,
        "mevzuat_notu": MEVZUAT_NOTU,
    }


def format_tax_summary_telegram(tax_result: dict, usd_try_rate: float = 0.0) -> str:
    """
    Telegram mesajı için vergi özetini düz metin olarak biçimlendirir.
    """
    lines = [
        "📊 *Vergi Duyarlılık Analizi*",
        "",
        f"Toplam tahmini stopaj yükü: *{tax_result['total_tax_try']:,.0f} TL*",
        f"Vergi arındırılmış net değer: *{tax_result['total_net_try']:,.0f} TL*",
        "",
        "Varlık detayı:",
    ]

    for sym, res in tax_result["assets"].items():
        if res["tax_rate"] == 0.0:
            badge = "✅ muaf"
        else:
            badge = f"⚠️ %{res['tax_rate']*100:.1f}"
        gain_sign = "+" if res["gain"] >= 0 else ""
        lines.append(
            f"  • {sym}: kâr {gain_sign}{res['gain']:,.0f} TL → "
            f"vergi {res['tax_amount']:,.0f} TL ({badge})"
        )

    lines.append("")
    lines.append(f"_{MEVZUAT_NOTU}_")
    return "\n".join(lines)
