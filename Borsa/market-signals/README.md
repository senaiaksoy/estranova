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
