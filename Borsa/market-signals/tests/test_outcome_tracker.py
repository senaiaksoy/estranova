from market_signals.models import PricePoint
from market_signals.outcome_tracker import (
    OutcomeRecord,
    append_outcome_records,
    measure_outcomes,
    read_outcome_records,
    summarize_outcomes_by_label,
)
from market_signals.signal_journal import SignalJournalEntry


def make_entry(label: str = "AL") -> SignalJournalEntry:
    return SignalJournalEntry(
        run_id="daily-20260701",
        asof="2026-07-01",
        instrument_id="tefas_yay",
        symbol="YAY",
        signal_label=label,
        confidence="Orta",
        close=100.0,
        reason="trend uyumlu",
        features={"rsi14": 55.0},
        strategy_name="conservative_daily_trend",
        strategy_version="2026-07-05",
        source_status="sample",
    )


def price_points() -> list[PricePoint]:
    return [
        PricePoint("2026-07-01", 100.0),
        PricePoint("2026-07-02", 102.0),
        PricePoint("2026-07-03", 101.0),
        PricePoint("2026-07-06", 105.0),
        PricePoint("2026-07-07", 104.0),
        PricePoint("2026-07-08", 108.0),
    ]


def test_measure_outcomes_calculates_return_and_runup():
    outcomes = measure_outcomes([make_entry()], {"tefas_yay": price_points()}, horizons=(1, 5))

    assert len(outcomes) == 2
    assert outcomes[0].horizon_days == 1
    assert outcomes[0].outcome_status == "measured"
    assert outcomes[0].return_pct == 2.0
    assert outcomes[0].max_runup_pct == 2.0
    assert outcomes[0].max_drawdown_pct == 0.0
    assert outcomes[1].return_pct == 8.0


def test_measure_outcomes_marks_missing_price_for_unavailable_horizon():
    outcomes = measure_outcomes([make_entry()], {"tefas_yay": price_points()[:2]}, horizons=(5,))

    assert outcomes[0].outcome_status == "missing_price"
    assert outcomes[0].exit_close is None
    assert outcomes[0].return_pct is None


def test_outcome_record_round_trips_dict():
    record = OutcomeRecord(
        signal_run_id="daily-20260701",
        instrument_id="tefas_yay",
        signal_label="AL",
        horizon_days=5,
        entry_close=100.0,
        exit_close=108.0,
        return_pct=8.0,
        max_drawdown_pct=0.0,
        max_runup_pct=8.0,
        outcome_status="measured",
    )

    assert OutcomeRecord.from_dict(record.to_dict()) == record


def test_summarize_outcomes_by_label_uses_measured_records_only():
    measured = OutcomeRecord(
        "daily-1", "tefas_yay", "AL", 5, 100.0, 110.0, 10.0, 0.0, 10.0, "measured"
    )
    missing = OutcomeRecord(
        "daily-2", "tefas_yay", "AL", 5, 100.0, None, None, None, None, "missing_price"
    )

    summary = summarize_outcomes_by_label([measured, missing])

    assert summary["AL"]["count"] == 1
    assert summary["AL"]["positive_rate_pct"] == 100.0
    assert summary["AL"]["average_return_pct"] == 10.0


def test_append_and_read_outcome_records_round_trip(tmp_path):
    record = OutcomeRecord(
        "daily-1", "tefas_yay", "AL", 5, 100.0, 110.0, 10.0, 0.0, 10.0, "measured"
    )

    path = append_outcome_records(tmp_path, [record])
    records = read_outcome_records(path)

    assert path == tmp_path / "data" / "signals" / "signal-outcomes.jsonl"
    assert records == [record]
