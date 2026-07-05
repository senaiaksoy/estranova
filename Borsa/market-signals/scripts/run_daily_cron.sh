#!/bin/bash
# automated daily script for Varlık Pusulası

set -e

APP_ROOT="/home/senai/market-signals"

# Load environment variables (contains Telegram token and chat ID)
if [ -f "$APP_ROOT/.env" ]; then
    export $(cat "$APP_ROOT/.env" | xargs)
fi

echo "=== $(date) ==="
echo "Running daily signal calculation..."
"$APP_ROOT/venv/bin/python" -m market_signals run-daily

echo "Sending Telegram alert..."
"$APP_ROOT/venv/bin/python" -m market_signals alert --send

echo "Completed successfully!"
