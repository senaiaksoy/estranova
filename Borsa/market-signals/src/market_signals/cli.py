from __future__ import annotations

import argparse
import os
import statistics
from datetime import datetime
from pathlib import Path
from typing import Any

from .alerts import alert
from .backtest import BacktestResult, run_backtest
from .dashboard import dashboard_auth_from_env, serve_dashboard
from .data_collector import fetch_and_store_historical_data
from .models import PricePoint
from .model_review_reports import render_monthly_model_review, render_weekly_model_review
from .optimizer import allowed_threshold_candidates, choose_candidate_strategy
from .outcome_tracker import (
    append_outcome_records,
    measure_outcomes,
    outcome_path,
    read_outcome_records,
)
from .portfolio import default_user_holdings, value_holdings
from .portfolio_reports import render_portfolio_report
from .prices import PriceSnapshot, StaticPriceProvider
from .reports import write_daily_report
from .sample_data import default_market_data
from .settings import PROJECT_ROOT
from .signal_journal import append_signal_journal, journal_path, read_signal_journal
from .storage import append_signal_log, ensure_runtime_dirs
from .strategy import SignalThresholds, calculate_signal_features, generate_signal


MONTHLY_BACKTEST_LABELS = {
    "tefas_yay": "TEFAS YAY",
    "gold_try": "Altın TRY",
    "silver_try": "Gümüş TRY",
}


def runtime_root() -> Path:
    return Path(os.getenv("MARKET_SIGNALS_ROOT", PROJECT_ROOT))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="market-signals")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("run-daily")
    subparsers.add_parser("run-weekly-audit")
    collect_parser = subparsers.add_parser("collect")
    collect_parser.add_argument(
        "days_back",
        nargs="?",
        type=int,
        default=30,
        help="Number of days of historical data to fetch (default: 30)",
    )
    subparsers.add_parser("validate-data")
    subparsers.add_parser("compute-indicators")
    subparsers.add_parser("generate-signals")
    subparsers.add_parser("backtest")
    subparsers.add_parser("report")
    subparsers.add_parser("portfolio-report")

    dashboard_parser = subparsers.add_parser("dashboard")
    dashboard_parser.add_argument("--host", default="127.0.0.1")
    dashboard_parser.add_argument("--port", type=int, default=8765)

    model_review_parser = subparsers.add_parser("model-review")
    model_review_group = model_review_parser.add_mutually_exclusive_group(required=True)
    model_review_group.add_argument("--weekly", action="store_true")
    model_review_group.add_argument("--monthly", action="store_true")

    alert_parser = subparsers.add_parser("alert")
    alert_parser.add_argument("--send", action="store_true")
    alert_parser.add_argument("--channel", default="telegram", choices=["telegram"])

    subparsers.add_parser("tax-report")

    telegram_parser = subparsers.add_parser("telegram-bot")
    telegram_parser.add_argument(
        "--once",
        action="store_true",
        help="Bir sonraki güncellemeyi işle ve çık (test modu)",
    )

    return parser


def generate_all_signals(
    market_data: dict[str, list[PricePoint]] | None = None,
):
    if market_data is None:
        market_data = default_market_data()

    labels = {
        "tefas_yay": "TEFAS YAY",
        "gold_try": "Altın TRY",
        "silver_try": "Gümüş TRY",
        "z30ea": "Z30EA BIST30 BYF",
    }
    return [
        generate_signal(instrument_id, labels[instrument_id], points)
        for instrument_id, points in market_data.items()
    ]


def signal_symbol_map() -> dict[str, str]:
    return {
        "tefas_yay": "YAY",
        "gold_try": "GRAM_ALTIN",
        "silver_try": "XAG_TRY",
        "z30ea": "Z30EA",
    }


def run_daily(root: Path) -> int:
    ensure_runtime_dirs(root)
    try:
        from .data_collector import update_z30ea_history
        update_z30ea_history(data_dir=root / "data" / "raw")
    except Exception:
        pass
    market_data = default_market_data()
    signals = generate_all_signals(market_data)
    symbols = signal_symbol_map()
    run_id = f"daily-{datetime.now().strftime('%Y%m%d')}"
    journal_payloads = [
        (
            signal,
            symbols[signal.instrument_id],
            calculate_signal_features(market_data[signal.instrument_id]),
        )
        for signal in signals
    ]
    for signal in signals:
        append_signal_log(root, signal)
    existing_journal_keys = {
        _journal_entry_identity(entry)
        for entry in read_signal_journal(journal_path(root))
    }
    for signal, symbol, features in journal_payloads:
        journal_key = (
            run_id,
            signal.instrument_id,
            "conservative_daily_trend",
            "2026-07-05",
        )
        if journal_key in existing_journal_keys:
            continue
        append_signal_journal(
            root,
            signal,
            run_id=run_id,
            symbol=symbol,
            features=features,
            strategy_name="conservative_daily_trend",
            strategy_version="2026-07-05",
            source_status="sample",
        )
        existing_journal_keys.add(journal_key)
    report_path = write_daily_report(root, signals)
    alert(root, signals, dry_run=True)
    run_portfolio_report(root)
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
    from .prices import LivePriceProvider
    from .database import get_holdings, save_holding, save_portfolio_snapshot

    db_file = root / "data" / "signals" / "signals.db"

    # Load holdings from SQLite
    holdings_dict = get_holdings(db_file)
    if not holdings_dict:
        # Bootstrap database with default holdings
        for holding in default_user_holdings():
            save_holding(db_file, holding.symbol, holding.quantity)
        save_holding(db_file, "USD", 51640.0)
        save_holding(db_file, "EUR", 129550.0)
        holdings_dict = get_holdings(db_file)
    else:
        if "USD" not in holdings_dict:
            save_holding(db_file, "USD", 51640.0)
            holdings_dict["USD"] = 51640.0
        if "EUR" not in holdings_dict:
            save_holding(db_file, "EUR", 129550.0)
            holdings_dict["EUR"] = 129550.0

    from dataclasses import replace
    from .portfolio import Holding
    default_holdings = default_user_holdings()
    holdings = []
    seen_symbols = set()
    for h in default_holdings:
        qty = holdings_dict.get(h.symbol, h.quantity)
        holdings.append(replace(h, quantity=qty))
        seen_symbols.add(h.symbol)

    for symbol, qty in holdings_dict.items():
        if symbol not in seen_symbols:
            holdings.append(
                Holding(
                    id=symbol.lower(),
                    symbol=symbol,
                    label=symbol,
                    quantity=qty,
                    asset_class="other",
                    role="other",
                )
            )

    static_fallback = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 1867.83, "TRY", "fallback", asof, stale=True),
            "YFT": PriceSnapshot("YFT", 1.0, "TRY", "fallback", asof, stale=True),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "fallback", asof, stale=True),
            "GMSTR": PriceSnapshot("GMSTR", 569.50, "TRY", "fallback", asof, stale=True),
            "GRAM_ALTIN": PriceSnapshot(
                "GRAM_ALTIN", 6277.78, "TRY", "fallback", asof, stale=True
            ),
            "USD": PriceSnapshot("USD", 33.33, "TRY", "fallback", asof, stale=True),
            "EUR": PriceSnapshot("EUR", 36.50, "TRY", "fallback", asof, stale=True),
        }
    )
    provider = LivePriceProvider(fallback_provider=static_fallback)
    valuation = value_holdings(holdings, provider)

    # Save daily portfolio snapshot
    usd_rate_snap = provider.get("USDTRY=X")
    usd_rate = usd_rate_snap.price if usd_rate_snap else 33.33
    total_val_try = valuation.total_value
    total_val_usd = total_val_try / usd_rate if usd_rate > 0 else 0.0

    save_portfolio_snapshot(
        db_file,
        asof,
        holdings_dict,
        total_val_try,
        total_val_usd,
        usd_rate,
    )

    missing_symbols = [row.holding.symbol for row in valuation.rows if row.missing_price]
    report = render_portfolio_report(valuation, missing_symbols, db_path=db_file, usd_rate=usd_rate)
    timestamp = now.strftime("%Y%m%d-%H%M%S-%f")
    path = root / "data" / "reports" / f"portfolio-{timestamp}.md"
    path.write_text(report, encoding="utf-8")
    print(f"Portföy raporu yazıldı: {path}")
    return 0


def run_tax_report(root: Path) -> int:
    """Portföy vergi duyarlılık analizini hesaplar ve konsola/rapora yazar."""
    ensure_runtime_dirs(root)
    from .prices import PriceSnapshot
    from .portfolio import default_user_holdings, value_holdings
    from .taxes import calculate_portfolio_taxes, format_tax_summary_telegram, MEVZUAT_NOTU
    from .database import get_db_connection

    db_file = root / "data" / "signals" / "signals.db"
    try:
        snapshot = PriceSnapshot.fetch(root)
    except Exception:
        from .prices import StaticPriceProvider
        from datetime import datetime
        snapshot = StaticPriceProvider({})

    holdings = default_user_holdings(db_file)
    valuation = value_holdings(holdings, snapshot)
    tax_result = calculate_portfolio_taxes(db_file, valuation.rows)

    # Konsola yazdır
    usd_rate = snapshot.prices.get("usd_try", 0.0) if hasattr(snapshot, "prices") else 0.0
    print(format_tax_summary_telegram(tax_result, usd_rate))
    print()
    print(MEVZUAT_NOTU)

    # Dosyaya kaydet
    from datetime import datetime
    ts = datetime.now().strftime("%Y%m%d-%H%M%S")
    path = root / "data" / "reports" / f"tax-report-{ts}.txt"
    path.write_text(format_tax_summary_telegram(tax_result, usd_rate), encoding="utf-8")
    print(f"\nVergi raporu yazıldı: {path}")
    return 0


def run_telegram_bot(root: Path) -> int:
    """İnteraktif Telegram botunu başlatır (long-polling)."""
    import os
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        print("Hata: TELEGRAM_BOT_TOKEN ve TELEGRAM_CHAT_ID ortam değişkenleri gereklidir.")
        return 1
    from .telegram_bot import run_bot
    print("Telegram botu başlatılıyor…  Durdurmak için Ctrl+C")
    try:
        run_bot(token=token, allowed_chat_id=chat_id, root=root)
    except KeyboardInterrupt:
        print("\nBot durduruldu.")
    return 0


def run_weekly_model_review(root: Path) -> int:
    ensure_runtime_dirs(root)
    entries = read_signal_journal(journal_path(root))
    outcomes = measure_outcomes(entries, default_market_data(), horizons=(1, 5))
    existing = read_outcome_records(outcome_path(root))
    seen_keys = {_outcome_identity(outcome) for outcome in existing}
    new_outcomes = []
    for outcome in outcomes:
        key = _outcome_identity(outcome)
        if key in seen_keys:
            continue
        new_outcomes.append(outcome)
        seen_keys.add(key)
    append_outcome_records(root, new_outcomes)
    report = render_weekly_model_review(
        new_outcomes,
        generated_signal_count=len({_journal_entry_identity(entry) for entry in entries}),
    )
    path = root / "data" / "reports" / "model-review-weekly.md"
    path.write_text(report, encoding="utf-8")
    print(f"Haftalık model raporu yazıldı: {path}")
    return 0


def run_monthly_model_review(root: Path) -> int:
    ensure_runtime_dirs(root)
    data = default_market_data()
    active = _run_monthly_strategy_backtest(data, "active")
    candidates = [
        _run_monthly_strategy_backtest(
            data,
            template.name,
            thresholds=SignalThresholds(**template.parameters),
        )
        for template in allowed_threshold_candidates()
    ]
    recommendation = choose_candidate_strategy(active, candidates)
    report = render_monthly_model_review(active, candidates, recommendation)
    path = root / "data" / "reports" / "model-review-monthly.md"
    path.write_text(report, encoding="utf-8")
    print(f"Aylık model raporu yazıldı: {path}")
    return 0


def _outcome_identity(record):
    return (
        record.signal_run_id,
        record.instrument_id,
        record.signal_label,
        record.horizon_days,
        record.entry_close,
        record.exit_close,
        record.outcome_status,
    )


def _journal_entry_identity(entry):
    return (
        entry.run_id,
        entry.instrument_id,
        entry.strategy_name,
        entry.strategy_version,
    )


def _run_monthly_strategy_backtest(
    data: dict[str, list[PricePoint]],
    strategy_name: str,
    *,
    thresholds: SignalThresholds | None = None,
) -> BacktestResult:
    missing = [instrument_id for instrument_id in MONTHLY_BACKTEST_LABELS if instrument_id not in data]
    if missing:
        raise ValueError(f"monthly backtest data missing instruments: {', '.join(missing)}")

    results = [
        run_backtest(
            instrument_id,
            label,
            data[instrument_id],
            strategy_name=strategy_name,
            horizon_days=20,
            step_days=3,
            thresholds=thresholds,
        )
        for instrument_id, label in MONTHLY_BACKTEST_LABELS.items()
    ]
    return _combine_backtest_results(strategy_name, results)


def _combine_backtest_results(
    strategy_name: str,
    results: list[BacktestResult],
) -> BacktestResult:
    if not results:
        return BacktestResult("multi_asset", strategy_name, 0, {}, 0.0, 0.0, 0.0, 0.0)

    label_counts: dict[str, int] = {}
    for result in results:
        for label, count in result.label_counts.items():
            label_counts[label] = label_counts.get(label, 0) + count

    signal_count = sum(result.signal_count for result in results)
    measured = [result for result in results if result.signal_count > 0]
    instrument_id = "+".join(MONTHLY_BACKTEST_LABELS)
    if not measured:
        return BacktestResult(
            instrument_id,
            strategy_name,
            0,
            {},
            0.0,
            0.0,
            0.0,
            0.0,
        )

    return_samples = [
        value
        for result in measured
        for value in (result.return_samples_pct or [])
    ]
    average_return = sum(
        result.average_return_pct * result.signal_count for result in measured
    ) / signal_count

    return BacktestResult(
        instrument_id=instrument_id,
        strategy_name=strategy_name,
        signal_count=signal_count,
        label_counts=label_counts,
        median_return_pct=round(statistics.median(return_samples), 4)
        if return_samples
        else round(statistics.mean(result.median_return_pct for result in measured), 4),
        average_return_pct=round(average_return, 4),
        worst_drawdown_pct=round(
            max(result.worst_drawdown_pct for result in measured), 4
        ),
        best_runup_pct=round(max(result.best_runup_pct for result in measured), 4),
        return_samples_pct=return_samples,
    )


def run_collect(root: Path, days_back: int = 30) -> int:
    print(f"Fetching and storing historical data for the last {days_back} days...")
    fetch_and_store_historical_data(days_back)
    print("Data collection completed.")
    return 0


def run_validate_data(root: Path) -> int:
    # TODO: implement validation
    print("Data validation not yet implemented.")
    return 0


def run_compute_indicators(root: Path) -> int:
    # TODO: compute indicators and store
    print("Indicator computation not yet implemented.")
    return 0


def run_generate_signals(root: Path) -> int:
    # TODO: generate signals from indicators and store
    print("Signal generation not yet implemented.")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    root = runtime_root()

    if args.command == "run-daily":
        return run_daily(root)
    if args.command == "run-weekly-audit":
        return run_weekly_audit(root)
    if args.command == "collect":
        # Use the provided days_back or default to 30
        days_back = getattr(args, "days_back", 30)
        return run_collect(root, days_back)
    if args.command == "validate-data":
        return run_validate_data(root)
    if args.command == "compute-indicators":
        return run_compute_indicators(root)
    if args.command == "generate-signals":
        return run_generate_signals(root)
    if args.command == "alert":
        return 0 if alert(root, generate_all_signals(), dry_run=not args.send) else 1
    if args.command == "portfolio-report":
        return run_portfolio_report(root)
    if args.command == "tax-report":
        return run_tax_report(root)
    if args.command == "telegram-bot":
        return run_telegram_bot(root)
    if args.command == "dashboard":
        serve_dashboard(
            root,
            host=args.host,
            port=args.port,
            auth=dashboard_auth_from_env(),
        )
        return 0
    if args.command == "model-review":
        if args.weekly:
            return run_weekly_model_review(root)
        if args.monthly:
            return run_monthly_model_review(root)

    ensure_runtime_dirs(root)
    print(f"{args.command}: command placeholder completed for MVP")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())