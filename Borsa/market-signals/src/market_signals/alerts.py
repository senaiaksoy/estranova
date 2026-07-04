from __future__ import annotations

import os
from pathlib import Path

import requests

from .models import Signal
from .storage import ensure_runtime_dirs


def format_alert(signals: list[Signal]) -> str:
    lines = [
        "Borsa sinyal raporu",
        "Bu mesaj yatirim tavsiyesi degildir; manuel karar destegi icindir.",
        "",
    ]
    for signal in signals:
        lines.append(f"{signal.instrument_id}: {signal.label.value} ({signal.confidence.value}) - {signal.reason}")
    lines.append("")
    lines.append("TEFAS cutoff baglami: 13:30 TSI oncesi manuel kontrol.")
    return "\n".join(lines)


def send_telegram(message: str) -> None:
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        raise RuntimeError("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required")
    response = requests.post(
        f"https://api.telegram.org/bot{token}/sendMessage",
        json={"chat_id": chat_id, "text": message},
        timeout=20,
    )
    response.raise_for_status()


def alert(root: Path, signals: list[Signal], dry_run: bool = True) -> Path:
    ensure_runtime_dirs(root)
    message = format_alert(signals)
    path = root / "data" / "logs" / "last-alert.txt"
    path.write_text(message, encoding="utf-8")
    if not dry_run and os.getenv("MARKET_SIGNALS_ALERTS_ENABLED", "false").lower() == "true":
        send_telegram(message)
    return path
