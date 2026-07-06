#!/bin/bash
pkill -f "market_signals dashboard" 2>/dev/null || true
cd /home/senai/market-signals
source venv/bin/activate
set -a; source .env; set +a
nohup python -m market_signals dashboard --host 127.0.0.1 --port 8765 >> dashboard.log 2>&1 &
sleep 2
ss -tlnp | grep 8765 && echo "DASHBOARD_RUNNING" || echo "DASHBOARD_NOT_FOUND"
