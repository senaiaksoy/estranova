#!/usr/bin/env python3
import os
import sys
import time
import requests
from pathlib import Path

# Add project src directory to sys.path
project_root = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(project_root / "src"))

from market_signals.storage import ensure_runtime_dirs


def get_latest_portfolio_summary(root: Path) -> str:
    report_dir = root / "data" / "reports"
    paths = list(report_dir.glob("portfolio-*.md"))
    if not paths:
        try:
            from market_signals.cli import run_portfolio_report
            run_portfolio_report(root)
            paths = list(report_dir.glob("portfolio-*.md"))
        except Exception as e:
            return f"Portföy raporu oluşturulamadı: {str(e)}"
            
    if not paths:
        return "Henüz üretilmiş bir portföy raporu bulunmuyor."
        
    latest_path = max(paths, key=lambda p: p.stat().st_mtime)
    content = latest_path.read_text(encoding="utf-8")
    
    lines = content.splitlines()
    summary = []
    table_started = False
    table_rows = []
    
    for line in lines:
        if line.startswith("- Değerlenmiş toplam:") or line.startswith("- Tahmini stopaj yükü:") or line.startswith("- Vergi arındırılmış net değer:") or line.startswith("- Fiziki altın miktarı:"):
            summary.append(line.replace("- ", "• "))
        elif "|" in line and "Varlık" in line:
            table_started = True
        elif table_started and line.strip().startswith("|") and not line.strip().startswith("| ---"):
            parts = [p.strip() for p in line.split("|")[1:-1]]
            if parts and parts[0] != "Varlık":
                table_rows.append(parts)
        elif table_started and not line.strip().startswith("|"):
            table_started = False
            
    text = [
        "📊 *Portföy Değer Raporu*",
        "",
        *summary,
        "",
        "*Varlık Dağılımı:*",
    ]
    for r in table_rows:
        if len(r) >= 5:
            if len(r) >= 10:
                name, qty, price, val, cost, tax_rate, tax_amt, net_val, weight, note = r
                text.append(f"• *{name}*: {val}\n  (Maliyet: {cost} | Stopaj: {tax_amt} | Net: {net_val} | Ağırlık: {weight})")
            else:
                name, qty, price, val, weight, note = r
                text.append(f"• *{name}*: {val} (Ağırlık: {weight})")
                
    return "\n".join(text)


def get_latest_signals_summary(root: Path) -> str:
    alert_path = root / "data" / "logs" / "last-alert.txt"
    if alert_path.exists():
        return alert_path.read_text(encoding="utf-8")
    return "Henüz kaydedilmiş güncel bir sinyal raporu bulunamadı."


def main():
    root = project_root
    ensure_runtime_dirs(root)
    
    # Load env variables from .env file if present
    env_path = root / ".env"
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip()

    token = os.getenv("TELEGRAM_BOT_TOKEN")
    allowed_chat_id = os.getenv("TELEGRAM_CHAT_ID")
    
    if not token or not allowed_chat_id:
        print("Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID env variables must be set.", file=sys.stderr)
        sys.exit(1)
        
    print("Interactive Telegram Bot daemon started...")
    print(f"Listening for updates for Chat ID: {allowed_chat_id}")
    
    offset = 0
    while True:
        try:
            url = f"https://api.telegram.org/bot{token}/getUpdates"
            params = {"offset": offset, "timeout": 30}
            response = requests.get(url, params=params, timeout=35)
            response.raise_for_status()
            
            data = response.json()
            if not data.get("ok"):
                time.sleep(2)
                continue
                
            updates = data.get("result", [])
            for update in updates:
                offset = update["update_id"] + 1
                message = update.get("message")
                if not message:
                    continue
                    
                chat_id = str(message["chat"]["id"])
                # Security boundary check: respond only to the allowed user
                if chat_id != allowed_chat_id:
                    print(f"Ignored message from unauthorized chat_id: {chat_id}")
                    continue
                    
                text = message.get("text", "").strip()
                if not text:
                    continue
                    
                print(f"Received command: {text}")
                
                response_text = ""
                if text in {"/start", "/help", "/yardim"}:
                    response_text = (
                        "🤖 *Varlık Pusulası İnteraktif Botuna Hoş Geldiniz!*\n\n"
                        "Kullanabileceğiniz komutlar:\n"
                        "• /portfoy - Güncel portföy değerlerinizi, maliyetlerinizi ve tahmini stopaj yükünü özetler.\n"
                        "• /sinyal - BIST ve emtia için üretilmiş en son model sinyal özetini gösterir.\n"
                        "• /yardim - Bu yardım menüsünü görüntüler."
                    )
                elif text == "/portfoy":
                    response_text = get_latest_portfolio_summary(root)
                elif text == "/sinyal":
                    response_text = get_latest_signals_summary(root)
                else:
                    response_text = "Bilinmeyen komut. Kullanılabilir komutları listelemek için /yardim yazabilirsiniz."
                    
                # Send response
                send_url = f"https://api.telegram.org/bot{token}/sendMessage"
                send_params = {
                    "chat_id": chat_id,
                    "text": response_text,
                    "parse_mode": "Markdown"
                }
                requests.post(send_url, json=send_params, timeout=10)
                
        except Exception as e:
            print(f"Error in update loop: {str(e)}", file=sys.stderr)
            time.sleep(5)
            
        time.sleep(0.5)


if __name__ == "__main__":
    main()
