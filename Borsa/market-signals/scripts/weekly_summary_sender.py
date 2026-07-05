"""
Haftalık portföy özeti Telegram mesajı gönderici.
Bu script run_weekly_summary.sh tarafından çağrılır.
"""
from __future__ import annotations

import os
import sys
from datetime import date, timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from market_signals.performance import get_performance_summary
from market_signals.taxes import calculate_portfolio_taxes
from market_signals.portfolio import default_user_holdings, value_holdings
from market_signals.prices import PriceSnapshot
from market_signals.telegram_bot import send_message
from market_signals.cli import runtime_root


def main() -> None:
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        raise SystemExit("TELEGRAM_BOT_TOKEN ve TELEGRAM_CHAT_ID gerekli.")

    root = runtime_root()
    db = root / "data" / "signals" / "signals.db"

    today = date.today()
    week_ago = (today - timedelta(days=7)).isoformat()
    ytd_start = f"{today.year}-01-01"

    perf_week = get_performance_summary(db, start_date=week_ago, currency="TRY")
    perf_ytd  = get_performance_summary(db, start_date=ytd_start, currency="TRY")
    perf_all  = get_performance_summary(db, currency="TRY")

    def fmt(pct: float) -> str:
        sign = "+" if pct >= 0 else ""
        emoji = "📈" if pct >= 0 else "📉"
        return f"{emoji} *{sign}{pct:.2f}%*"

    # Vergi ve portföy değeri
    total_line = tax_line = net_line = ""
    try:
        snapshot = PriceSnapshot.fetch(root)
        holdings = default_user_holdings(db)
        valuation = value_holdings(holdings, snapshot)
        tax = calculate_portfolio_taxes(db, valuation.rows)
        total_line = f"Toplam portföy: *{valuation.total_value:,.0f} TL*"
        tax_line   = f"Tahmini vergi yükü: *{tax['total_tax_try']:,.0f} TL*"
        net_line   = f"Vergi sonrası net: *{tax['total_net_try']:,.0f} TL*"
    except Exception as exc:
        total_line = f"Portföy değeri alınamadı: {exc}"

    # Benchmark karşılaştırması
    bist_line = ""
    try:
        import yfinance as yf
        df = yf.download("XU100.IS", start=week_ago, end=today.isoformat(),
                         auto_adjust=True, progress=False)
        if not df.empty and len(df) >= 2:
            bist_pct = (float(df["Close"].iloc[-1]) / float(df["Close"].iloc[0]) - 1) * 100
            bist_sign = "+" if bist_pct >= 0 else ""
            diff = perf_week["twrr_pct"] - bist_pct
            diff_sign = "+" if diff >= 0 else ""
            verdict = "✅ BIST100'ü yeniyorsunuz" if diff >= 0 else "⚠️ BIST100'ün gerisinde"
            bist_line = (
                f"  BIST100 (haftalık): {bist_sign}{bist_pct:.2f}%\n"
                f"  Fark: {diff_sign}{diff:.2f}% — {verdict}"
            )
    except Exception:
        pass

    msg = (
        f"🗓 *Haftalık Portföy Özeti — {today.strftime('%d.%m.%Y')}*\n\n"
        f"{total_line}\n"
        f"{tax_line}\n"
        f"{net_line}\n\n"
        f"📊 *Getiri Performansı (TWRR):*\n"
        f"  Bu hafta: {fmt(perf_week['twrr_pct'])}\n"
        f"  Yıl başından: {fmt(perf_ytd['twrr_pct'])}\n"
        f"  Tüm dönem: {fmt(perf_all['twrr_pct'])}\n"
    )
    if bist_line:
        msg += f"\n📌 *Benchmark:*\n{bist_line}\n"

    msg += "\n_Bu rapor yatırım tavsiyesi değildir. Karar sizde kalır._"

    send_message(token, int(chat_id), msg)
    print("Haftalık özet Telegram'a gönderildi.")


if __name__ == "__main__":
    main()
