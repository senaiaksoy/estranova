import json
import math

import market_signals.__main__ as module_main
import pytest
from datetime import datetime as real_datetime

from market_signals.backtest import BacktestResult
from market_signals.cli import build_parser
from market_signals.cli import _combine_backtest_results
from market_signals.cli import main
from market_signals.sample_data import default_market_data as sample_default_market_data
from market_signals.storage import ensure_runtime_dirs


def test_cli_has_hermes_commands():
    parser = build_parser()
    help_text = parser.format_help()

    assert "run-daily" in help_text
    assert "run-weekly-audit" in help_text
    assert "alert" in help_text


def test_cli_has_model_review_command():
    parser = build_parser()
    help_text = parser.format_help()

    assert "model-review" in help_text


def test_cli_has_dashboard_command():
    parser = build_parser()
    help_text = parser.format_help()

    assert "dashboard" in help_text


def test_model_review_requires_weekly_or_monthly_flag():
    with pytest.raises(SystemExit):
        main(["model-review"])


def test_model_review_rejects_weekly_and_monthly_together():
    with pytest.raises(SystemExit):
        main(["model-review", "--weekly", "--monthly"])


def test_module_entrypoint_is_importable():
    assert module_main.main is main


def test_main_accepts_run_daily_command(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    assert main(["run-daily"]) == 0


def test_runtime_dirs_are_created(tmp_path):
    ensure_runtime_dirs(tmp_path)

    assert (tmp_path / "data" / "raw").is_dir()
    assert (tmp_path / "data" / "reports").is_dir()
    assert (tmp_path / "data" / "logs").is_dir()


def test_runtime_dirs_include_signal_journal_dir(tmp_path):
    ensure_runtime_dirs(tmp_path)

    assert (tmp_path / "data" / "signals").is_dir()


def test_run_daily_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["run-daily"])
    reports = list((tmp_path / "data" / "reports").glob("daily-*.md"))

    assert result == 0
    assert reports

    report_text = reports[0].read_text(encoding="utf-8")
    assert "# Borsa Günlük Sinyal Raporu" in report_text
    assert "Bu rapor yatırım tavsiyesi değildir" in report_text
    assert "- Neden:" in report_text
    assert "Manuel kontrol penceresi" in report_text


def test_run_daily_writes_signal_journal_with_features(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["run-daily"])

    assert result == 0
    journal_path = tmp_path / "data" / "signals" / "signal-journal.jsonl"
    rows = [
        json.loads(line)
        for line in journal_path.read_text(encoding="utf-8").splitlines()
    ]
    expected_features = {
        "sma50",
        "sma200",
        "ema50",
        "rsi14",
        "drawdown120",
        "volatility20",
    }

    assert len(rows) == 3
    assert {
        row["instrument_id"]: row["symbol"]
        for row in rows
    } == {
        "tefas_yay": "YAY",
        "gold_try": "GRAM_ALTIN",
        "silver_try": "XAG_TRY",
    }
    for row in rows:
        assert row["strategy_name"] == "conservative_daily_trend"
        assert row["strategy_version"] == "2026-07-05"
        assert row["source_status"] == "sample"
        assert set(row["features"]) == expected_features
        assert all(math.isfinite(value) for value in row["features"].values())


def test_run_daily_is_idempotent_for_same_run_id(tmp_path, monkeypatch):
    class FixedDateTime(real_datetime):
        @classmethod
        def now(cls):
            return cls(2026, 7, 5, 9, 30)

    first_data = sample_default_market_data()
    second_data = sample_default_market_data()
    second_data["tefas_yay"] = [
        point.__class__(point.date, point.close + 10.0)
        for point in second_data["tefas_yay"]
    ]

    calls = [first_data, second_data]

    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setattr("market_signals.cli.datetime", FixedDateTime)
    monkeypatch.setattr("market_signals.cli.default_market_data", lambda: calls.pop(0))

    assert main(["run-daily"]) == 0
    assert main(["run-daily"]) == 0

    journal_path = tmp_path / "data" / "signals" / "signal-journal.jsonl"
    rows = journal_path.read_text(encoding="utf-8").splitlines()
    assert len(rows) == 3


def test_run_daily_uses_single_market_snapshot_for_signals_and_features(
    tmp_path, monkeypatch
):
    calls = 0

    def counting_default_market_data():
        nonlocal calls
        calls += 1
        return sample_default_market_data()

    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setattr(
        "market_signals.cli.default_market_data",
        counting_default_market_data,
    )

    assert main(["run-daily"]) == 0
    assert calls == 1


def test_alert_defaults_to_dry_run(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setenv("MARKET_SIGNALS_ALERTS_ENABLED", "true")

    result = main(["alert"])
    alert_path = tmp_path / "data" / "logs" / "last-alert.txt"
    alert_text = alert_path.read_text(encoding="utf-8")

    assert result == 0
    assert alert_path.is_file()
    assert "Borsa sinyal özeti" in alert_text
    assert "Bu mesaj yatırım tavsiyesi değildir" in alert_text
    assert "Manuel kontrol" in alert_text


def test_portfolio_report_command_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["portfolio-report"])

    assert result == 0
    reports = list((tmp_path / "data" / "reports").glob("portfolio-*.md"))
    assert reports
    text = reports[0].read_text(encoding="utf-8")
    assert "# Portföy Karar-Destek Raporu" in text
    assert "Fiziki altın" in text
    assert "Z30EA" in text
    assert "YLB -> YAY Sonrası Projeksiyon" in text
    assert "Ağırlıklar yalnızca fiyatı doğrulanan satırlar içinde hesaplanır" in text


def test_portfolio_report_command_does_not_overwrite_same_second_runs(
    tmp_path, monkeypatch
):
    class FixedDatetime:
        calls = [
            real_datetime(2026, 7, 5, 9, 30, 15, 123456),
            real_datetime(2026, 7, 5, 9, 30, 15, 654321),
        ]

        @classmethod
        def now(cls):
            return cls.calls.pop(0)

    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setattr("market_signals.cli.datetime", FixedDatetime)

    assert main(["portfolio-report"]) == 0
    assert main(["portfolio-report"]) == 0

    reports = list((tmp_path / "data" / "reports").glob("portfolio-*.md"))
    assert len(reports) == 2


def test_model_review_weekly_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    assert main(["run-daily"]) == 0
    result = main(["model-review", "--weekly"])

    assert result == 0
    report = tmp_path / "data" / "reports" / "model-review-weekly.md"
    text = report.read_text(encoding="utf-8")
    assert "# Haftalık Model Performans Raporu" in text
    assert "yatırım tavsiyesi değildir" in text
    assert (tmp_path / "data" / "signals" / "signal-outcomes.jsonl").is_file()


def test_model_review_weekly_is_idempotent_for_same_journal(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    assert main(["run-daily"]) == 0
    assert main(["model-review", "--weekly"]) == 0
    outcome_path = tmp_path / "data" / "signals" / "signal-outcomes.jsonl"
    first_line_count = len(outcome_path.read_text(encoding="utf-8").splitlines())

    assert main(["model-review", "--weekly"]) == 0

    second_line_count = len(outcome_path.read_text(encoding="utf-8").splitlines())
    assert second_line_count == first_line_count

    report = tmp_path / "data" / "reports" / "model-review-weekly.md"
    assert "- Ölçülebilen geçmiş sinyal sonucu: 0" in report.read_text(encoding="utf-8")


def test_model_review_weekly_dedupes_duplicate_entries_in_current_journal(
    tmp_path, monkeypatch
):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    assert main(["run-daily"]) == 0
    assert main(["run-daily"]) == 0
    assert main(["model-review", "--weekly"]) == 0

    outcome_path = tmp_path / "data" / "signals" / "signal-outcomes.jsonl"
    line_count = len(outcome_path.read_text(encoding="utf-8").splitlines())
    assert line_count == 6


def test_model_review_monthly_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["model-review", "--monthly"])

    assert result == 0
    report = tmp_path / "data" / "reports" / "model-review-monthly.md"
    text = report.read_text(encoding="utf-8")
    assert "# Aylık Strateji Gözden Geçirme Raporu" in text
    assert "tefas_yay+gold_try+silver_try" in text
    assert "Aday strateji |" in text
    assert "candidate-buymin" in text
    assert "Canlı strateji değişikliği yoktur" in text


def test_model_review_monthly_backtests_candidates_with_thresholds(
    tmp_path, monkeypatch
):
    calls = []

    def fake_run_backtest(
        instrument_id,
        label,
        points,
        *,
        strategy_name,
        horizon_days,
        step_days,
        thresholds=None,
    ):
        calls.append((instrument_id, strategy_name, thresholds))
        median = 2.0 if thresholds is None else 3.0
        return BacktestResult(
            instrument_id,
            strategy_name,
            20,
            {"AL": 20},
            median,
            median,
            1.0,
            5.0,
        )

    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setattr("market_signals.cli.run_backtest", fake_run_backtest)

    assert main(["model-review", "--monthly"]) == 0

    active_calls = [call for call in calls if call[2] is None]
    candidate_calls = [call for call in calls if call[2] is not None]
    assert {call[0] for call in active_calls} == {"tefas_yay", "gold_try", "silver_try"}
    assert {call[0] for call in candidate_calls} == {"tefas_yay", "gold_try", "silver_try"}
    assert candidate_calls


def test_model_review_monthly_rejects_missing_monthly_asset(tmp_path, monkeypatch):
    data = sample_default_market_data()
    del data["silver_try"]

    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))
    monkeypatch.setattr("market_signals.cli.default_market_data", lambda: data)

    with pytest.raises(ValueError, match="silver_try"):
        main(["model-review", "--monthly"])


def test_combine_backtest_results_uses_real_combined_median():
    tefas = BacktestResult(
        "tefas_yay",
        "candidate",
        3,
        {"AL": 3},
        100.0,
        40.0,
        2.0,
        120.0,
        return_samples_pct=[10.0, 10.0, 100.0],
    )
    gold = BacktestResult(
        "gold_try",
        "candidate",
        1,
        {"BEKLE": 1},
        -10.0,
        -10.0,
        1.0,
        5.0,
        return_samples_pct=[-10.0],
    )

    combined = _combine_backtest_results("candidate", [tefas, gold])

    assert combined.median_return_pct == 10.0
