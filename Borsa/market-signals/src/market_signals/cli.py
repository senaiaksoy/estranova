from __future__ import annotations

import argparse
import os
from datetime import datetime
from pathlib import Path

from .alerts import alert
from .portfolio import default_user_holdings, project_pending_ylb_to_yay, value_holdings
from .portfolio_reports import render_portfolio_report
from .prices import PriceSnapshot, StaticPriceProvider
from .reports import write_daily_report
from .sample_data import default_market_data
from .settings import PROJECT_ROOT
from .signal_journal import append_signal_journal
from .storage import append_signal_log, ensure_runtime_dirs
from .strategy import calculate_signal_features, generate_signal


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
    subparsers.add_parser("portfolio-report")

    alert_parser = subparsers.add_parser("alert")
    alert_parser.add_argument("--send", action="store_true")
    alert_parser.add_argument("--channel", default="telegram", choices=["telegram"])

    return parser


def generate_all_signals():
    labels = {
        "tefas_yay": "TEFAS YAY",
        "gold_try": "Altın TRY",
        "silver_try": "Gümüş TRY",
    }
    return [
        generate_signal(instrument_id, labels[instrument_id], points)
        for instrument_id, points in default_market_data().items()
    ]


def signal_symbol_map() -> dict[str, str]:
    return {
        "tefas_yay": "YAY",
        "gold_try": "GRAM_ALTIN",
        "silver_try": "XAG_TRY",
    }


def run_daily(root: Path) -> int:
    ensure_runtime_dirs(root)
    market_data = default_market_data()
    signals = generate_all_signals()
    symbols = signal_symbol_map()
    run_id = f"daily-{datetime.now().strftime('%Y%m%d')}"
    for signal in signals:
        append_signal_log(root, signal)
        append_signal_journal(
            root,
            signal,
            run_id=run_id,
            symbol=symbols[signal.instrument_id],
            features=calculate_signal_features(market_data[signal.instrument_id]),
            strategy_name="conservative_daily_trend",
            strategy_version="2026-07-05",
            source_status="sample",
        )
    report_path = write_daily_report(root, signals)
    alert(root, signals, dry_run=True)
    print(f"Günlük rapor yazıldı: {report_path}")
    return 0


def run_weekly_audit(root: Path) -> int:
    ensure_runtime_dirs(root)
    signals = generate_all_signals()
    report_path = write_daily_report(root, signals)
    audit_path = root / "data" / "reports" / "weekly-audit.md"
    audit_path.write_text(
        "# Haftalık Sinyal Kalite Auditi\n\n"
        "Bu audit yatırım tavsiyesi değildir; özel karar destek sisteminin çalışma sağlığını kontrol eder.\n\n"
        "## Özet\n\n"
        f"- İncelenen sinyal sayısı: {len(signals)}\n"
        f"- Son üretilen günlük rapor: {report_path.name}\n"
        "- Kontrol kapsamı: veri üretimi, sinyal hesaplama ve rapor dosyası oluşturma.\n\n"
        "## Yorum\n\n"
        "Haftalık audit, stratejinin finansal doğruluğunu garanti etmez; sadece sistemin beklenen dosyaları ve "
        "çıktıları üretebildiğini gösterir. Sinyaller portföy ağırlığı, işlem maliyeti, TEFAS saatleri ve kişisel "
        "risk toleransı ile birlikte manuel değerlendirilmelidir.\n",
        encoding="utf-8",
    )
    print(f"Haftalık audit yazıldı: {audit_path}")
    return 0


def run_portfolio_report(root: Path) -> int:
    ensure_runtime_dirs(root)
    now = datetime.now()
    asof = now.strftime("%Y-%m-%d")
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 1867.83, "TRY", "fallback", asof, stale=True),
            "YFT": PriceSnapshot("YFT", 1.0, "TRY", "fallback", asof, stale=True),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "fallback", asof, stale=True),
            "GMSTR": PriceSnapshot("GMSTR", 569.50, "TRY", "fallback", asof, stale=True),
            "GRAM_ALTIN": PriceSnapshot(
                "GRAM_ALTIN", 6277.78, "TRY", "fallback", asof, stale=True
            ),
        }
    )
    holdings = default_user_holdings()
    valuation = value_holdings(holdings, provider)
    projected_holdings = project_pending_ylb_to_yay(holdings, provider)
    projected_valuation = value_holdings(projected_holdings, provider)
    missing_symbols = [row.holding.symbol for row in valuation.rows if row.missing_price]
    report = render_portfolio_report(valuation, missing_symbols, projected_valuation)
    timestamp = now.strftime("%Y%m%d-%H%M%S-%f")
    path = root / "data" / "reports" / f"portfolio-{timestamp}.md"
    path.write_text(report, encoding="utf-8")
    print(f"Portföy raporu yazıldı: {path}")
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
    if args.command == "portfolio-report":
        return run_portfolio_report(root)

    ensure_runtime_dirs(root)
    print(f"{args.command}: command placeholder completed for MVP")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
