# Market Signals

Private research and decision-support tooling for TEFAS YAY, gold, and silver signals.

This tool does not provide investment advice, portfolio management, automated trading, or personalized financial recommendations. Signals are model outputs for manual review only.

## Commands

Run these from a Python environment where the package is installed.

```powershell
python -m market_signals run-daily
python -m market_signals run-weekly-audit
python -m market_signals alert
python -m market_signals alert --send
python -m market_signals dashboard --host 127.0.0.1 --port 8765
```

`alert` is dry-run by default: it writes the local alert log and does not send Telegram.
`alert --send` is the explicit live Telegram path. It requires Telegram secrets in
the environment and `MARKET_SIGNALS_ALERTS_ENABLED=true`.

## Hermes Activation Checklist

Keep Hermes cron jobs paused until all checks pass:

- `python -m pytest -v` passes.
- `python -m market_signals run-daily` writes a report.
- `python -m market_signals alert` writes `data/logs/last-alert.txt` without sending Telegram.
- `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are configured outside git.
- `MARKET_SIGNALS_ALERTS_ENABLED=true` is set only after dry-run review.
- Live Telegram sending is invoked only with `python -m market_signals alert --send`.

The Telegram message is informational and must not be read as an instruction to buy, sell, or hold.

## Estranova Varlık Pusulası

Private dashboard command:

```powershell
$env:MARKET_SIGNALS_DASHBOARD_USER="estranova"
$env:MARKET_SIGNALS_DASHBOARD_PASSWORD="<strong-password>"
python -m market_signals dashboard --host 127.0.0.1 --port 8765
```

Local address: `http://127.0.0.1:8765/`

Production target: `https://varlik.estranova.com`

Recommended deployment is Cloudflare Tunnel + Cloudflare Access. Route
`varlik.estranova.com` to `http://127.0.0.1:8765` and restrict access to approved
identity rules before exposing the tunnel. Keep the dashboard password enabled as a
second layer. This dashboard is private decision support; it is not investment advice
and must not be linked from the public Estranova website.
