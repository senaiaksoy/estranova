from __future__ import annotations

import os
from pathlib import Path

import requests

from .models import Signal
from .reports import render_confidence, render_signal_label
from .storage import ensure_runtime_dirs


def format_alert(signals: list[Signal]) -> str:
    lines = [
        "Borsa sinyal özeti",
        "Bu mesaj yatırım tavsiyesi değildir; manuel karar desteği ve hatırlatma amaçlıdır.",
        "",
    ]
    for signal in signals:
        lines.append(
            f"{signal.instrument_id}: {render_signal_label(signal.label.value)} "
            f"({render_confidence(signal.confidence.value)})"
        )
        lines.append(f"  Neden: {signal.reason}")
    lines.append("")
    lines.append("Manuel kontrol: TEFAS emir kesim saati bağlamı için 13:30 TSI öncesi son gözden geçirme yapılır.")
    lines.append("Bu sistem otomatik emir göndermez; karar sizde kalır.")
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
