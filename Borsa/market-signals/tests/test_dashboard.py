from __future__ import annotations

import base64

from market_signals.dashboard import (
    DashboardAuth,
    collect_dashboard_snapshot,
    is_authorized,
    render_dashboard_html,
)


def test_collect_dashboard_snapshot_uses_latest_reports(tmp_path):
    reports = tmp_path / "data" / "reports"
    reports.mkdir(parents=True)
    (reports / "daily-20260705-090000.md").write_text("# Eski Günlük", encoding="utf-8")
    (reports / "daily-20260705-150000.md").write_text("# Yeni Günlük", encoding="utf-8")
    (reports / "portfolio-20260705-100000.md").write_text("# Portföy", encoding="utf-8")
    (reports / "model-review-weekly.md").write_text("# Haftalık", encoding="utf-8")
    (reports / "model-review-monthly.md").write_text("# Aylık", encoding="utf-8")

    snapshot = collect_dashboard_snapshot(tmp_path)

    assert snapshot.latest_daily.name == "daily-20260705-150000.md"
    assert snapshot.latest_portfolio.name == "portfolio-20260705-100000.md"
    assert snapshot.weekly_model.name == "model-review-weekly.md"
    assert snapshot.monthly_model.name == "model-review-monthly.md"


def test_render_dashboard_html_is_turkish_private_decision_support(tmp_path):
    reports = tmp_path / "data" / "reports"
    reports.mkdir(parents=True)
    (reports / "daily-20260705-150000.md").write_text(
        "# Günlük\n\n- Sinyal: AL\n- Neden: test", encoding="utf-8"
    )
    (reports / "model-review-monthly.md").write_text(
        "# Aylık\n\n- Canlı strateji değişikliği yoktur", encoding="utf-8"
    )

    html = render_dashboard_html(collect_dashboard_snapshot(tmp_path))

    assert "Estranova Varlık Pusulası" in html
    assert "varlik.estranova.com" in html
    assert "yatırım tavsiyesi değildir" in html
    assert "Günlük" in html
    assert "Canlı strateji değişikliği yoktur" in html


def test_dashboard_auth_accepts_only_configured_basic_credentials():
    auth = DashboardAuth(username="kc", password="secret")
    token = base64.b64encode(b"kc:secret").decode("ascii")

    assert is_authorized(f"Basic {token}", auth)
    assert not is_authorized("Basic wrong", auth)
    assert not is_authorized(None, auth)


def test_dashboard_auth_disabled_without_password():
    auth = DashboardAuth(username="kc", password="")

    assert is_authorized(None, auth)
