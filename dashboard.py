from __future__ import annotations

import argparse
import json
from datetime import date, datetime, timedelta
from pathlib import Path


def read_reports(output_dir: Path) -> list[dict]:
    reports: list[dict] = []
    for path in sorted(output_dir.glob("*-report.json")):
        try:
            reports.append(json.loads(path.read_text(encoding="utf-8")))
        except json.JSONDecodeError:
            continue
    return reports


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Estranova operasyonel dashboard")
    parser.add_argument("--last", type=int, default=7, help="Son N gundeki raporlari ozetle (default: 7)")
    return parser.parse_args()


def _report_date(report: dict) -> date | None:
    generated_at = report.get("generated_at")
    if not generated_at:
        return None
    try:
        return datetime.fromisoformat(str(generated_at)).date()
    except ValueError:
        return None


def main() -> None:
    args = parse_args()
    last_n_days = max(1, int(args.last))
    output_dir = Path("output")
    output_dir.mkdir(parents=True, exist_ok=True)
    all_reports = read_reports(output_dir)

    today = date.today()
    window_start = today - timedelta(days=last_n_days - 1)
    reports = [
        report for report in all_reports if (report_date := _report_date(report)) and window_start <= report_date <= today
    ]

    total_attempts = len(reports)
    if total_attempts == 0:
        print(f"Son {last_n_days} gunde rapor bulunamadi. Once main.py ile icerik uretin.")
        return

    avg_quality = sum(
        float(report.get("quality_assessment", {}).get("compliance_score", 0) or 0) for report in reports
    ) / total_attempts
    total_cost = sum(float(report.get("estimated_cost_usd", 0) or 0) for report in reports)
    success_count = sum(1 for report in reports if report.get("status") == "published")
    success_rate = (success_count / total_attempts) * 100 if total_attempts else 0.0

    issue_counts: dict[str, int] = {}
    for report in reports:
        for agent, count in report.get("agent_issue_counts", {}).items():
            issue_counts[agent] = issue_counts.get(agent, 0) + int(count or 0)
    most_error_agent = max(issue_counts, key=issue_counts.get) if issue_counts else "N/A"

    daily: dict[date, dict[str, int]] = {}
    for i in range(last_n_days):
        d = window_start + timedelta(days=i)
        daily[d] = {"success": 0, "failed": 0}
    for report in reports:
        d = _report_date(report)
        if d is None or d not in daily:
            continue
        if report.get("status") == "published":
            daily[d]["success"] += 1
        else:
            daily[d]["failed"] += 1

    print(f"=== Estranova Operasyonel Dashboard (Son {last_n_days} Gun) ===")
    print(f"Toplam Üretim Denemesi     : {total_attempts}")
    print(f"Toplam Kaç İçerik Üretildi : {success_count}")
    print(f"Başarı Oranı               : {success_rate:.2f}%")
    print(f"Ortalama Kalite Skoru      : {avg_quality:.2f}")
    print(f"Haftalik Toplam Maliyet ($): {total_cost:.4f}")
    print(f"En Çok Hata Yapan Agent    : {most_error_agent}")
    print(f"Son {last_n_days} gundeki basari oranımız: %{success_rate:.2f}")

    print("\nGunluk Ozet (Basarili/Basarisiz):")
    print("Tarih        | Basarili | Basarisiz")
    print("-----------------------------------")
    for d in sorted(daily):
        print(f"{d.isoformat()} | {daily[d]['success']:8d} | {daily[d]['failed']:9d}")


if __name__ == "__main__":
    main()
