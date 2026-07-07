"""
Estranova Market Signals — İnteraktif Telegram Botu
====================================================

Desteklenen komutlar:
  /portfoy   — Güncel portföy değeri ve varlık dağılımı
  /sinyaller — Bugünkü alım/sat/bekle sinyalleri
  /fiyat     — Canlı fiyatlar (YAY, GRAM ALTIN, USD/TRY, EUR/TRY)
  /vergi     — Portföy vergi duyarlılık analizi
  /performans— TWRR getiri özeti (1A, 3A, YTD)
  /alarm SEM 1950.5  — Fiyat alarmı kur (yukarı veya aşağı otomatik)
  /alarmlar  — Aktif alarm listesi
  /alarmSil 3— Id'si 3 olan alarmı sil
  /benchmark — BIST100 ve USD ile kıyaslamalı getiri
  /yardim    — Komut listesi

Çalıştırma:
  python -m market_signals telegram-bot
  (veya cron/systemd service olarak)

NOT: Bu sistem otomatik emir göndermez; tüm kararlar kullanıcıya aittir.
"""
from __future__ import annotations

import json
import logging
import os
import time
from datetime import date, datetime, timedelta
from pathlib import Path

import requests

from .alerts import format_alert
from .cli import generate_all_signals, runtime_root
from .database import (
    get_db_connection,
    get_portfolio_snapshots,
    add_price_alarm,
    get_active_alarms,
    mark_alarm_triggered,
    delete_alarm,
    list_all_alarms,
)
from .performance import get_performance_summary
from .portfolio import default_user_holdings, value_holdings
from .prices import PriceSnapshot
from .settings import PROJECT_ROOT
from .taxes import format_tax_summary_telegram, calculate_portfolio_taxes

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Telegram API helpers
# ---------------------------------------------------------------------------

def _telegram_api(token: str, method: str, **kwargs) -> dict:
    url = f"https://api.telegram.org/bot{token}/{method}"
    resp = requests.post(url, json=kwargs, timeout=20)
    resp.raise_for_status()
    return resp.json()


def send_message(token: str, chat_id: str | int, text: str, parse_mode: str = "Markdown") -> None:
    """Telegram'a Markdown mesajı gönderir. 4096 karakter sınırını aşarsa böler."""
    max_len = 4096
    for i in range(0, len(text), max_len):
        chunk = text[i : i + max_len]
        _telegram_api(token, "sendMessage", chat_id=chat_id, text=chunk, parse_mode=parse_mode)


def get_updates(token: str, offset: int | None = None, timeout: int = 30) -> list[dict]:
    params: dict = {"timeout": timeout, "allowed_updates": ["message"]}
    if offset is not None:
        params["offset"] = offset
    url = f"https://api.telegram.org/bot{token}/getUpdates"
    resp = requests.get(url, params=params, timeout=timeout + 5)
    resp.raise_for_status()
    data = resp.json()
    return data.get("result", [])


# ---------------------------------------------------------------------------
# Komut işleyiciler
# ---------------------------------------------------------------------------

def _db_path(root: Path) -> Path:
    return root / "data" / "signals" / "signals.db"


def handle_yardim() -> str:
    return (
        "🤖 *Estranova Piyasa Sinyalleri Botu*\n\n"
        "Kullanılabilir komutlar:\n"
        "  /portfoy — Portföy özeti ve varlık dağılımı\n"
        "  /sinyaller — Güncel alım/sat/bekle sinyalleri\n"
        "  /fiyat — Canlı fiyatlar\n"
        "  /vergi — Vergi duyarlılık analizi\n"
        "  /performans — TWRR getiri özeti\n"
        "  /benchmark — BIST100 ve USD kıyaslaması\n"
        "  /alarm YAY 1950 — Fiyat alarmı kur\n"
        "  /alarmlar — Aktif alarm listesi\n"
        "  /alarmSil 3 — Alarmı sil (id ile)\n"
        "  /yardim — Bu ekran\n\n"
        "_Bu bot otomatik emir göndermez; karar sizde kalır._"
    )


def handle_fiyat(root: Path) -> str:
    try:
        snapshot = PriceSnapshot.fetch(root)
        lines = ["💰 *Canlı Fiyatlar*", ""]
        instrument_labels = {
            "tefas_yay":   "YAY (TEFAS)",
            "gold_try":    "Gram Altın",
            "silver_try":  "Gram Gümüş",
            "usd_try":     "USD/TRY",
            "eur_try":     "EUR/TRY",
        }
        for key, label in instrument_labels.items():
            val = snapshot.prices.get(key)
            if val is not None:
                lines.append(f"  • {label}: *{val:,.4f} TL*")
            else:
                lines.append(f"  • {label}: fiyat alınamadı")
        lines.append("")
        lines.append(f"_Güncelleme: {datetime.now().strftime('%d.%m.%Y %H:%M')}_")
        return "\n".join(lines)
    except Exception as exc:
        logger.exception("handle_fiyat error")
        return f"❌ Fiyat alınırken hata: {exc}"


def handle_sinyaller(root: Path) -> str:
    try:
        signals = generate_all_signals()
        if not signals:
            return "⚠️ Bugün için sinyal üretilemedi."
        msg = format_alert(signals)
        return f"📡 *Güncel Sinyaller*\n\n{msg}"
    except Exception as exc:
        logger.exception("handle_sinyaller error")
        return f"❌ Sinyal üretilirken hata: {exc}"


def handle_portfoy(root: Path) -> str:
    try:
        db = _db_path(root)
        snapshot = PriceSnapshot.fetch(root)
        holdings = default_user_holdings(db)
        valuation = value_holdings(holdings, snapshot)

        lines = ["📈 *Portföy Özeti*", ""]
        total = valuation.total_value or 0.0
        lines.append(f"Toplam değer: *{total:,.0f} TL*")

        usd_rate = snapshot.prices.get("usd_try", 0.0) or 0.0
        if usd_rate > 0:
            total_usd = total / usd_rate
            lines.append(f"≈ *{total_usd:,.0f} USD*")

        lines.append("")
        lines.append("Varlık dağılımı:")
        for row in valuation.rows:
            mv = row.market_value or 0.0
            w = row.weight_pct or 0.0
            price_str = ""
            if row.price:
                price_str = f" @ {row.price.price:,.4f} TL"
            lines.append(
                f"  • {row.holding.label}: *{mv:,.0f} TL* ({w:.1f}%){price_str}"
            )

        lines.append("")
        lines.append(f"_Son güncelleme: {datetime.now().strftime('%d.%m.%Y %H:%M')}_")
        lines.append("_Bu rapor yatırım tavsiyesi değildir._")
        return "\n".join(lines)
    except Exception as exc:
        logger.exception("handle_portfoy error")
        return f"❌ Portföy alınırken hata: {exc}"


def handle_vergi(root: Path) -> str:
    try:
        db = _db_path(root)
        snapshot = PriceSnapshot.fetch(root)
        holdings = default_user_holdings(db)
        valuation = value_holdings(holdings, snapshot)

        tax_result = calculate_portfolio_taxes(db, valuation.rows)
        usd_rate = snapshot.prices.get("usd_try", 0.0) or 0.0
        return format_tax_summary_telegram(tax_result, usd_rate)
    except Exception as exc:
        logger.exception("handle_vergi error")
        return f"❌ Vergi hesaplanırken hata: {exc}"


def handle_performans(root: Path) -> str:
    try:
        db = _db_path(root)
        today = date.today()

        def _summary(label: str, start: str | None) -> str:
            s = get_performance_summary(db, start_date=start, currency="TRY")
            twrr = s["twrr_pct"]
            sign = "+" if twrr >= 0 else ""
            return f"  • {label}: *{sign}{twrr:.2f}%* TWRR"

        one_month_ago = (today - timedelta(days=30)).isoformat()
        three_months_ago = (today - timedelta(days=90)).isoformat()
        ytd_start = f"{today.year}-01-01"

        lines = [
            "📊 *Portföy Performansı (TWRR)*",
            "",
            _summary("Son 1 ay", one_month_ago),
            _summary("Son 3 ay", three_months_ago),
            _summary("Yıl başından beri", ytd_start),
            _summary("Tüm dönem", None),
            "",
            "_TWRR: Zaman Ağırlıklı Getiri Oranı (nakit akışlarından arındırılmış)_",
            "_Bu rapor yatırım tavsiyesi değildir._",
        ]
        return "\n".join(lines)
    except Exception as exc:
        logger.exception("handle_performans error")
        return f"❌ Performans hesaplanırken hata: {exc}"


# ---------------------------------------------------------------------------
# Bilinmeyen komut / metin
# ---------------------------------------------------------------------------

def handle_unknown(text: str) -> str:
    return (
        f"❓ Anlaşılamayan komut: `{text}`\n\n"
        "Komut listesi için /yardim yazın."
    )


def handle_alarm(root: Path, text: str) -> str:
    """/alarm SEMBOL ESIK [UST_ESIK] — fiyat alarmı kurar."""
    db = _db_path(root)
    parts = text.strip().split()
    # /alarm YAY 1950.5  veya  /alarm YAY 1800 2100
    if len(parts) < 3:
        return (
            "⚠️ Kullanım:\n"
            "  `/alarm SEMBOL EŞİK` — tek yönlü alarm\n"
            "  `/alarm SEMBOL ALT ÜST` — bant alarmı (ikisi birden)\n\n"
            "Örnekler:\n"
            "  `/alarm YAY 1950`\n"
            "  `/alarm GRAM_ALTIN 7000`\n"
            "  `/alarm YAY 1800 2100` ← 1800 altı VEYA 2100 üstü"
        )
    symbol = parts[1].upper()
    try:
        threshold1 = float(parts[2].replace(",", "."))
        threshold2 = float(parts[3].replace(",", ".")) if len(parts) >= 4 else None
    except ValueError:
        return "❌ Eşik değer geçersiz. Örnek: `/alarm YAY 1950` veya `/alarm YAY 1800 2100`"

    # Canlı fiyata göre yön belirle
    try:
        snapshot = PriceSnapshot.fetch(root)
        price_key = {
            "YAY": "tefas_yay", "GRAM_ALTIN": "gold_try",
            "USD": "usd_try", "EUR": "eur_try",
            "GMSTR": "silver_try",
        }.get(symbol)
        current_price = snapshot.prices.get(price_key or symbol.lower(), 0.0) if hasattr(snapshot, "prices") else 0.0
    except Exception:
        current_price = 0.0

    try:
        if threshold2 is not None:
            # Bant alarmı: alt eşik below, üst eşik above
            low = min(threshold1, threshold2)
            high = max(threshold1, threshold2)
            id_low = add_price_alarm(db, symbol, low, "below")
            id_high = add_price_alarm(db, symbol, high, "above")
            current_str = f"{current_price:,.4f} TL" if current_price else "bilinmiyor"
            return (
                f"✅ *Bant Alarmı kuruldu!*\n"
                f"  Sembol: {symbol} (şu an: {current_str})\n"
                f"  ⬇️ Alt sınır: {low:,.4f} TL altına düşünce → ID `{id_low}`\n"
                f"  ⬆️ Üst sınır: {high:,.4f} TL üstüne çıkınca → ID `{id_high}`\n\n"
                f"_Silmek için: /alarmSil {id_low} veya /alarmSil {id_high}_"
            )
        else:
            direction = "above" if threshold1 > current_price else "below"
            dir_label = "üstüne çıkınca" if direction == "above" else "altına düşünce"
            alarm_id = add_price_alarm(db, symbol, threshold1, direction)
            current_str = f"{current_price:,.4f} TL" if current_price else "bilinmiyor"
            return (
                f"✅ *Alarm kuruldu!*\n"
                f"  Sembol: {symbol} (şu an: {current_str})\n"
                f"  Eşik: {threshold1:,.4f} TL {dir_label} bildirim\n"
                f"  Alarm ID: `{alarm_id}`\n\n"
                f"_Silmek için: /alarmSil {alarm_id}_"
            )
    except Exception as exc:
        return f"❌ Alarm kurulamadı: {exc}"


def handle_alarmlar(root: Path) -> str:
    """/alarmlar — aktif alarm listesi."""
    db = _db_path(root)
    try:
        alarms = get_active_alarms(db)
        if not alarms:
            return "✅ Aktif fiyat alarmı yok.\n\n_Yeni alarm: `/alarm YAY 1950`_"
        lines = ["🔔 *Aktif Fiyat Alarmları*", ""]
        for a in alarms:
            dir_label = "⬆️ yukarı" if a["direction"] == "above" else "⬇️ aşağı"
            lines.append(f"  `{a['id']}` {a['symbol']} {dir_label} {a['threshold']:,.4f} TL")
        lines.append("")
        lines.append("_Silmek için: /alarmSil ID_")
        return "\n".join(lines)
    except Exception as exc:
        return f"❌ Alarmlar alınamadı: {exc}"


def handle_alarm_sil(root: Path, text: str) -> str:
    """/alarmSil ID — alarmı siler."""
    db = _db_path(root)
    parts = text.strip().split()
    if len(parts) < 2:
        return "⚠️ Kullanım: `/alarmSil ID` (ID'yi /alarmlar ile öğrenin)"
    try:
        alarm_id = int(parts[1])
    except ValueError:
        return "❌ ID sayısal olmalıdır. Örnek: `/alarmSil 3`"
    try:
        ok = delete_alarm(db, alarm_id)
        if ok:
            return f"✅ Alarm `{alarm_id}` silindi."
        return f"⚠️ ID `{alarm_id}` bulunamadı."
    except Exception as exc:
        return f"❌ Alarm silinemedi: {exc}"


def handle_benchmark(root: Path) -> str:
    """/benchmark — BIST100 ve USD ile kıyaslamalı getiri."""
    try:
        import yfinance as yf
        from datetime import date, timedelta
        db = _db_path(root)
        perf = get_performance_summary(db, currency="TRY")
        portfolio_twrr = perf["twrr_pct"]

        history = perf.get("history", [])
        if not history:
            return "⚠️ Yeterli portföy verisi yok."

        start_date = history[0]["date"]
        today_str = date.today().isoformat()

        def fetch_return(ticker: str) -> float | None:
            try:
                df = yf.download(ticker, start=start_date, end=today_str,
                                  auto_adjust=True, progress=False)
                if df.empty or len(df) < 2:
                    return None
                first = float(df["Close"].iloc[0])
                last = float(df["Close"].iloc[-1])
                if first == 0:
                    return None
                return (last / first - 1.0) * 100.0
            except Exception:
                return None

        bist_ret = fetch_return("XU100.IS")
        usd_try_ret = fetch_return("USDTRY=X")

        def _fmt(val: float | None, label: str) -> str:
            if val is None:
                return f"  • {label}: veri alınamadı"
            sign = "+" if val >= 0 else ""
            emoji = "📈" if val >= 0 else "📉"
            return f"  {emoji} {label}: *{sign}{val:.2f}%*"

        p_sign = "+" if portfolio_twrr >= 0 else ""
        p_emoji = "📈" if portfolio_twrr >= 0 else "📉"
        lines = [
            "🎯 *Benchmark Kıyaslaması* (dönem başından itibaren)",
            "",
            f"  {p_emoji} Portföyünüz (TWRR): *{p_sign}{portfolio_twrr:.2f}%*",
            _fmt(bist_ret, "BIST100"),
            _fmt(usd_try_ret, "USD/TRY (kur artışı)"),
            "",
        ]

        if bist_ret is not None:
            diff = portfolio_twrr - bist_ret
            diff_sign = "+" if diff >= 0 else ""
            verdict = "✅ BIST100\'u yeniyorsunuz!" if diff >= 0 else "⚠️ BIST100\'un gerisinde."
            lines.append(f"  • BIST100 farkı: *{diff_sign}{diff:.2f}%* — {verdict}")

        lines.append("")
        lines.append(f"_Dönem: {start_date} → {today_str}_")
        lines.append("_Bu rapor yatırım tavsiyesi değildir._")
        return "\n".join(lines)
    except Exception as exc:
        logger.exception("handle_benchmark error")
        return f"❌ Benchmark hesaplanamadı: {exc}"


def check_and_fire_alarms(token: str, chat_id: int, root: Path) -> None:
    """Aktif alarmları kontrol eder; tetiklenenleri bildirir."""
    db = _db_path(root)
    try:
        alarms = get_active_alarms(db)
        if not alarms:
            return
        snapshot = PriceSnapshot.fetch(root)
        price_map = {
            "YAY": snapshot.prices.get("tefas_yay", 0.0),
            "GRAM_ALTIN": snapshot.prices.get("gold_try", 0.0),
            "GMSTR": snapshot.prices.get("silver_try", 0.0),
            "USD": snapshot.prices.get("usd_try", 0.0),
            "EUR": snapshot.prices.get("eur_try", 0.0),
        } if hasattr(snapshot, "prices") else {}

        for alarm in alarms:
            sym = alarm["symbol"]
            current = price_map.get(sym)
            if current is None or current == 0.0:
                continue
            threshold = alarm["threshold"]
            direction = alarm["direction"]
            triggered = (
                (direction == "above" and current >= threshold) or
                (direction == "below" and current <= threshold)
            )
            if triggered:
                mark_alarm_triggered(db, alarm["id"])
                dir_label = "⬆️ yukarı" if direction == "above" else "⬇️ aşağı"
                msg = (
                    f"🔔 *Fiyat Alarmı Tetiklendi!*\n"
                    f"  {sym}: {current:,.4f} TL\n"
                    f"  Eşik: {threshold:,.4f} TL ({dir_label})\n"
                    f"_Bu sistem otomatik emir göndermez; karar sizde kalır._"
                )
                send_message(token, chat_id, msg)
                logger.info("Alarm tetiklendi: %s @ %s (eşik=%s)", sym, current, threshold)
    except Exception:
        logger.exception("Alarm kontrol hatası")



COMMAND_MAP = {
    "/yardim":      lambda root, _text: handle_yardim(),
    "/fiyat":       lambda root, _text: handle_fiyat(root),
    "/sinyaller":   lambda root, _text: handle_sinyaller(root),
    "/portfoy":     lambda root, _text: handle_portfoy(root),
    "/vergi":       lambda root, _text: handle_vergi(root),
    "/performans":  lambda root, _text: handle_performans(root),
    "/benchmark":   lambda root, _text: handle_benchmark(root),
    "/alarmlar":    lambda root, _text: handle_alarmlar(root),
    # arg gerektiren komutlar dispatch'te özel işlenir
    # İngilizce alias'lar
    "/help":        lambda root, _text: handle_yardim(),
    "/start":       lambda root, _text: handle_yardim(),
    "/portfolio":   lambda root, _text: handle_portfoy(root),
    "/signals":     lambda root, _text: handle_sinyaller(root),
    "/tax":         lambda root, _text: handle_vergi(root),
    "/performance": lambda root, _text: handle_performans(root),
    "/price":       lambda root, _text: handle_fiyat(root),
    "/alarms":      lambda root, _text: handle_alarmlar(root),
}


def dispatch(root: Path, text: str) -> str:
    """Gelen mesaj metnine göre uygun handler'ı çağırır."""
    if not text:
        return handle_unknown("")
    # Komut sözcüğünü al (örn. "/portfoy@BotAdi" → "/portfoy")
    cmd = text.strip().split()[0].split("@")[0].lower()
    # Argüman gerektiren özel komutlar
    if cmd == "/alarm":
        return handle_alarm(root, text)
    if cmd in ("/alarmsil", "/deletealarm", "/del_alarm"):
        return handle_alarm_sil(root, text)
    handler = COMMAND_MAP.get(cmd)
    if handler:
        return handler(root, text)
    return handle_unknown(text[:80])


# ---------------------------------------------------------------------------
# Ana polling döngüsü
# ---------------------------------------------------------------------------

def run_bot(
    token: str,
    allowed_chat_id: str | int,
    root: Path,
    poll_interval: int = 1,
) -> None:
    """
    Long-polling ile Telegram mesajlarını dinler ve yanıtlar.

    Parameters
    ----------
    token : str
        Telegram Bot Token (TELEGRAM_BOT_TOKEN)
    allowed_chat_id : str | int
        Yalnızca bu Chat ID'den gelen mesajlar işlenir (güvenlik)
    root : Path
        Market-signals çalışma dizini
    poll_interval : int
        Hata durumunda bekleme süresi (saniye)
    """
    allowed_id = int(allowed_chat_id)
    offset: int | None = None
    last_alarm_check = 0.0
    ALARM_CHECK_INTERVAL = 60  # saniyede bir alarm kontrolü
    logger.info("Telegram botu başlatıldı. Allowed chat: %d", allowed_id)

    while True:
        try:
            updates = get_updates(token, offset=offset)
        except requests.RequestException as exc:
            logger.warning("Telegram getUpdates hatası: %s", exc)
            time.sleep(poll_interval * 5)
            continue

        for update in updates:
            offset = update["update_id"] + 1
            msg = update.get("message", {})
            chat_id = msg.get("chat", {}).get("id")
            text = msg.get("text", "").strip()

            if not chat_id or not text:
                continue

            # Güvenlik: Sadece izinli chat'ten gelen komutları işle
            if chat_id != allowed_id:
                logger.warning("İzinsiz chat_id %d reddedildi.", chat_id)
                try:
                    send_message(token, chat_id, "⛔ Bu bot özel kullanım içindir.")
                except Exception:
                    pass
                continue

            logger.info("Komut alındı [%d]: %s", chat_id, text[:60])
            try:
                response = dispatch(root, text)
                send_message(token, chat_id, response)
            except Exception as exc:
                logger.exception("Komut işlenirken hata: %s", text)
                try:
                    send_message(token, chat_id, f"❌ Sistem hatası: {exc}")
                except Exception:
                    pass

        # Periyodik alarm kontrolü
        now = time.time()
        if now - last_alarm_check >= ALARM_CHECK_INTERVAL:
            check_and_fire_alarms(token, allowed_id, root)
            last_alarm_check = now

        time.sleep(poll_interval)


# ---------------------------------------------------------------------------
# Doğrudan çalıştırma için giriş noktası
# ---------------------------------------------------------------------------

def main() -> None:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s %(message)s",
    )
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        raise SystemExit("TELEGRAM_BOT_TOKEN ve TELEGRAM_CHAT_ID ortam değişkenleri gereklidir.")
    root = runtime_root()
    run_bot(token=token, allowed_chat_id=chat_id, root=root)


if __name__ == "__main__":
    main()
