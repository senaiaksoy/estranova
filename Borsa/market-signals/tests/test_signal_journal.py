import math

import pytest

from market_signals.models import Confidence, Signal, SignalLabel
from market_signals.signal_journal import (
    SignalJournalEntry,
    append_signal_journal,
    read_signal_journal,
)


def make_signal() -> Signal:
    return Signal(
        instrument_id="tefas_yay",
        label=SignalLabel.AL,
        confidence=Confidence.ORTA,
        close=123.45,
        reason="trend uyumlu",
        asof="2026-07-05",
    )


def test_append_signal_journal_writes_jsonl_entry(tmp_path):
    path = append_signal_journal(
        tmp_path,
        make_signal(),
        run_id="daily-20260705",
        symbol="YAY",
        features={"sma50": 120.0, "rsi14": 55.0},
        strategy_name="conservative_daily_trend",
        strategy_version="2026-07-05",
        source_status="sample",
    )

    entries = read_signal_journal(path)

    assert path == tmp_path / "data" / "signals" / "signal-journal.jsonl"
    assert len(entries) == 1
    assert entries[0].run_id == "daily-20260705"
    assert entries[0].instrument_id == "tefas_yay"
    assert entries[0].symbol == "YAY"
    assert entries[0].signal_label == "AL"
    assert entries[0].confidence == "Orta"
    assert entries[0].features["rsi14"] == 55.0
    assert entries[0].source_status == "sample"


def test_append_signal_journal_rejects_non_finite_feature_values(tmp_path):
    with pytest.raises(ValueError):
        append_signal_journal(
            tmp_path,
            make_signal(),
            run_id="daily-20260705",
            symbol="YAY",
            features={"rsi14": math.nan},
            strategy_name="conservative_daily_trend",
            strategy_version="2026-07-05",
            source_status="sample",
        )


def test_read_signal_journal_skips_broken_lines(tmp_path):
    path = tmp_path / "data" / "signals" / "signal-journal.jsonl"
    path.parent.mkdir(parents=True)
    path.write_text(
        '{"run_id":"ok","asof":"2026-07-05","instrument_id":"gold_try","symbol":"GRAM_ALTIN",'
        '"signal_label":"BEKLE","confidence":"Dusuk","close":6000.0,"reason":"karışık",'
        '"features":{},"strategy_name":"conservative_daily_trend","strategy_version":"2026-07-05",'
        '"source_status":"sample"}\n'
        "{broken json}\n",
        encoding="utf-8",
    )

    entries = read_signal_journal(path)

    assert len(entries) == 1
    assert entries[0].instrument_id == "gold_try"


def test_signal_journal_entry_round_trips_dict():
    entry = SignalJournalEntry(
        run_id="daily-20260705",
        asof="2026-07-05",
        instrument_id="silver_try",
        symbol="XAG_TRY",
        signal_label="AZALT",
        confidence="Orta",
        close=30.5,
        reason="kısa vadeli risk",
        features={"drawdown120": 8.2},
        strategy_name="conservative_daily_trend",
        strategy_version="2026-07-05",
        source_status="sample",
    )

    restored = SignalJournalEntry.from_dict(entry.to_dict())

    assert restored == entry
