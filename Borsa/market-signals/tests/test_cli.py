import market_signals.__main__ as module_main
from market_signals.cli import build_parser
from market_signals.cli import main
from market_signals.storage import ensure_runtime_dirs


def test_cli_has_hermes_commands():
    parser = build_parser()
    help_text = parser.format_help()

    assert "run-daily" in help_text
    assert "run-weekly-audit" in help_text
    assert "alert" in help_text


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
