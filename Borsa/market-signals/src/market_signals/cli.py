from __future__ import annotations

import argparse
import os
from pathlib import Path

from .alerts import alert
from .reports import write_daily_report
from .sample_data import default_market_data
from .settings import PROJECT_ROOT
from .storage import append_signal_log, ensure_runtime_dirs
from .strategy import generate_signal


def runtime_root() -> Path:
    return Path(os.getenv("MARKET_SIGNALS_ROOT", PROJECT_ROOT))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="market-signals")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("run-daily")
    subparsers.add_parser("run-weekly-audit")
    subparsers.add_parser("collect")
    subparsers.add_parser("validate-data")
    subparsers.add_parser("compute-indicators")
    subparsers.add_parser("generate-signals")
    subparsers.add_parser("backtest")
    subparsers.add_parser("report")

    alert_parser = subparsers.add_parser("alert")
    alert_parser.add_argument("--send", action="store_true")
    alert_parser.add_argument("--channel", default="telegram", choices=["telegram"])

    return parser


def generate_all_signals():
    labels = {
        "tefas_yay": "TEFAS YAY",
        "gold_try": "Altin TRY",
        "silver_try": "Gumus TRY",
    }
    return [
        generate_signal(instrument_id, labels[instrument_id], points)
        for instrument_id, points in default_market_data().items()
    ]


def run_daily(root: Path) -> int:
    ensure_runtime_dirs(root)
    signals = generate_all_signals()
    for signal in signals:
        append_signal_log(root, signal)
    report_path = write_daily_report(root, signals)
    alert(root, signals, dry_run=True)
    print(f"Wrote daily report: {report_path}")
    return 0


def run_weekly_audit(root: Path) -> int:
    ensure_runtime_dirs(root)
    signals = generate_all_signals()
    report_path = write_daily_report(root, signals)
    audit_path = root / "data" / "reports" / "weekly-audit.md"
    audit_path.write_text(
        "# Weekly Audit\n\n"
        "Private decision-support audit. This is not investment advice.\n\n"
        f"Signals reviewed: {len(signals)}\n"
        f"Latest report: {report_path.name}\n",
        encoding="utf-8",
    )
    print(f"Wrote weekly audit: {audit_path}")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    root = runtime_root()

    if args.command == "run-daily":
        return run_daily(root)
    if args.command == "run-weekly-audit":
        return run_weekly_audit(root)
    if args.command == "alert":
        return 0 if alert(root, generate_all_signals(), dry_run=not args.send) else 1

    ensure_runtime_dirs(root)
    print(f"{args.command}: command placeholder completed for MVP")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
