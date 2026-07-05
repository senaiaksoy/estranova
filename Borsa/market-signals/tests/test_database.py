from pathlib import Path
from market_signals.signal_journal import SignalJournalEntry
from market_signals.outcome_tracker import OutcomeRecord
from market_signals.database import (
    init_db,
    save_signal_journal_entry,
    read_signal_journal_entries,
    save_outcome_records,
    read_outcome_records
)


def test_sqlite_journal_and_outcomes_round_trip(tmp_path: Path):
    db_path = tmp_path / "test.db"
    
    init_db(db_path)
    
    entry = SignalJournalEntry(
        run_id="run-1",
        asof="2026-07-05",
        instrument_id="yay",
        symbol="YAY",
        signal_label="AL",
        confidence="High",
        close=1800.0,
        reason="trend up",
        features={"rsi": 50.0},
        strategy_name="trend",
        strategy_version="v1",
        source_status="test"
    )
    
    save_signal_journal_entry(db_path, entry)
    entries = read_signal_journal_entries(db_path)
    assert len(entries) == 1
    assert entries[0].run_id == "run-1"
    assert entries[0].features == {"rsi": 50.0}
    
    record = OutcomeRecord(
        signal_run_id="run-1",
        instrument_id="yay",
        signal_label="AL",
        horizon_days=5,
        entry_close=1800.0,
        exit_close=1850.0,
        return_pct=2.7,
        max_drawdown_pct=0.0,
        max_runup_pct=3.0,
        outcome_status="measured"
    )
    
    save_outcome_records(db_path, [record])
    records = read_outcome_records(db_path)
    assert len(records) == 1
    assert records[0].signal_run_id == "run-1"
    assert records[0].return_pct == 2.7
