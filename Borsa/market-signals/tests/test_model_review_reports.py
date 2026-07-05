from market_signals.backtest import BacktestResult
from market_signals.model_review_reports import (
    render_monthly_model_review,
    render_weekly_model_review,
)
from market_signals.optimizer import StrategyRecommendation
from market_signals.outcome_tracker import OutcomeRecord


def make_outcome(label: str, return_pct: float) -> OutcomeRecord:
    return OutcomeRecord(
        "daily-20260701",
        "tefas_yay",
        label,
        5,
        100.0,
        100.0 + return_pct,
        return_pct,
        1.0,
        max(return_pct, 0.0),
        "measured",
    )


def test_render_weekly_model_review_is_turkish_and_non_advice():
    report = render_weekly_model_review(
        [make_outcome("AL", 5.0), make_outcome("AL", -1.0)],
        generated_signal_count=3,
    )

    assert "# Haftalık Model Performans Raporu" in report
    assert "yatırım tavsiyesi değildir" in report
    assert "AL" in report
    assert "Pozitif sonuç oranı" in report


def test_render_monthly_model_review_includes_manual_approval_note():
    active = BacktestResult("tefas_yay", "active", 20, {"AL": 20}, 2.0, 2.1, 5.0, 7.0)
    candidate = BacktestResult("tefas_yay", "candidate-buymin45-rsi72-reduce78", 20, {"AL": 20}, 3.0, 3.1, 4.5, 8.0)
    recommendation = StrategyRecommendation(None, "Veri yetersiz olabilir veya aday strateji dengeli değil.")

    report = render_monthly_model_review(active, [candidate], recommendation)

    assert "# Aylık Strateji Gözden Geçirme Raporu" in report
    assert "Aktif strateji" in report
    assert "candidate-buymin45-rsi72-reduce78" in report
    assert "otomatik uygulanmamıştır" in report


def test_render_weekly_model_review_handles_empty_outcomes():
    report = render_weekly_model_review([], generated_signal_count=0)

    assert "Ölçülebilen geçmiş sinyal sonucu yok" in report
    assert "yatırım tavsiyesi değildir" in report


def test_render_monthly_model_review_handles_no_candidates():
    active = BacktestResult("tefas_yay", "active", 0, {}, 0.0, 0.0, 0.0, 0.0)
    recommendation = StrategyRecommendation(None, "Veri yetersiz olabilir veya adaylar dengeli değil.")

    report = render_monthly_model_review(active, [], recommendation)

    assert "aday strateji üretilemedi" in report
    assert "manuel onay" in report
