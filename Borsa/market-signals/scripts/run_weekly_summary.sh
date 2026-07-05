#!/bin/bash
# Haftalık portföy özeti Telegram bildirimi
# Her Cuma 14:00 UTC (17:00 TSI) çalışır

set -e

APP_ROOT="/home/senai/market-signals"

if [ -f "$APP_ROOT/.env" ]; then
    set -a
    source "$APP_ROOT/.env"
    set +a
fi

echo "=== HAFTALIK OZET: $(date) ==="

# Haftalık model değerlendirmesi
"$APP_ROOT/venv/bin/python" -m market_signals run-weekly-audit

# Portföy raporu güncelle
"$APP_ROOT/venv/bin/python" -m market_signals portfolio-report

# Telegram'a haftalık özet gönder
"$APP_ROOT/venv/bin/python" "$APP_ROOT/scripts/weekly_summary_sender.py"

echo "Haftalık özet tamamlandı!"
