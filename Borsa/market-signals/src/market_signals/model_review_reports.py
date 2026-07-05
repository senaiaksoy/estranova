from __future__ import annotations

from .backtest import BacktestResult
from .optimizer import StrategyRecommendation
from .outcome_tracker import OutcomeRecord, summarize_outcomes_by_label


def _pct(value: float | None) -> str:
    if value is None:
        return "ölçülemedi"
    return f"{value:.2f}%"


def _table_text(value: object) -> str:
    return " ".join(str(value).split()).replace("|", "\\|")


def render_weekly_model_review(
    outcomes: list[OutcomeRecord],
    *,
    generated_signal_count: int,
) -> str:
    summary = summarize_outcomes_by_label(outcomes)
    measured_count = sum(int(values["count"]) for values in summary.values())

    lines = [
        "# Haftalık Model Performans Raporu",
        "",
        "Bu çıktı yatırım tavsiyesi değildir; model gözden geçirme raporudur.",
        "",
        "## Özet",
        "",
        f"- Üretilen sinyal sayısı: {generated_signal_count}",
        f"- Ölçülebilen geçmiş sinyal sonucu: {measured_count}",
        f"- İncelenen sinyal etiketi sayısı: {len(summary)}",
        "",
        "## Etiket Bazlı Geçmiş Sonuçlar",
        "",
    ]

    if not summary:
        lines.append("Ölçülebilen geçmiş sinyal sonucu yok.")
    else:
        lines.extend(
            [
                "| Sinyal etiketi | Ölçülen sonuç | Ortalama getiri | Medyan getiri | Pozitif sonuç oranı | En kötü geri çekilme | En iyi yükseliş |",
                "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
            ]
        )
        for label, values in sorted(summary.items()):
            lines.append(
                "| "
                f"{_table_text(label)} | "
                f"{int(values['count'])} | "
                f"{_pct(values.get('average_return_pct'))} | "
                f"{_pct(values.get('median_return_pct'))} | "
                f"{_pct(values.get('positive_rate_pct'))} | "
                f"{_pct(values.get('worst_drawdown_pct'))} | "
                f"{_pct(values.get('best_runup_pct'))} |"
            )

    lines.extend(
        [
            "",
            "## Manuel Not",
            "",
            "Bu rapor geçmiş sinyal davranışını ölçer; emir talimatı, otomatik işlem yönlendirmesi veya kişisel yatırım tavsiyesi değildir.",
        ]
    )
    return "\n".join(lines)


def render_monthly_model_review(
    active_result: BacktestResult,
    candidate_results: list[BacktestResult],
    recommendation: StrategyRecommendation,
) -> str:
    lines = [
        "# Aylık Strateji Gözden Geçirme Raporu",
        "",
        "Bu çıktı yatırım tavsiyesi değildir; model gözden geçirme raporudur.",
        "",
        "## Aktif strateji",
        "",
        f"- Strateji adı: {_table_text(active_result.strategy_name)}",
        f"- Sinyal sayısı: {active_result.signal_count}",
        f"- Medyan getiri: {_pct(active_result.median_return_pct)}",
        f"- En kötü geri çekilme: {_pct(active_result.worst_drawdown_pct)}",
        "",
        "## Aday stratejiler",
        "",
    ]

    if not candidate_results:
        lines.append("Veri yeterli olmadığı için aday strateji üretilemedi.")
    else:
        lines.extend(
            [
                "| Aday strateji | Sinyal sayısı | Medyan getiri | Ortalama getiri | En kötü geri çekilme | En iyi yükseliş |",
                "| --- | ---: | ---: | ---: | ---: | ---: |",
            ]
        )
        for result in candidate_results:
            lines.append(
                "| "
                f"{_table_text(result.strategy_name)} | "
                f"{result.signal_count} | "
                f"{_pct(result.median_return_pct)} | "
                f"{_pct(result.average_return_pct)} | "
                f"{_pct(result.worst_drawdown_pct)} | "
                f"{_pct(result.best_runup_pct)} |"
            )

    lines.extend(
        [
            "",
            "## Değerlendirme",
            "",
            f"- Model gerekçesi: {_table_text(recommendation.reason)}",
            "- Öneri otomatik uygulanmamıştır; canlı stratejiye alınmadan önce manuel onay gerekir.",
        ]
    )
    return "\n".join(lines)
