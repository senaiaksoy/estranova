# Market Signal Learning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a controlled learning and backtest layer that records market signals, measures later outcomes, compares transparent candidate strategy thresholds, and produces Turkish Hermes model-review reports without automatically changing live strategy settings.

**Architecture:** Keep the existing daily signal engine intact and add focused modules beside it. `signal_journal.py` owns JSONL signal history, `outcome_tracker.py` measures later returns, `backtest.py` compares strategy parameter sets, `optimizer.py` selects transparent candidate thresholds, and `model_review_reports.py` renders Turkish weekly/monthly reports. `cli.py` wires `model-review --weekly` and `model-review --monthly` without touching automated trade execution.

**Tech Stack:** Python 3.12, dataclasses, JSONL files, existing `market_signals` package, pytest, Markdown reports under `Borsa/market-signals/data/reports`.

---

## File Structure

- Create `Borsa/market-signals/src/market_signals/signal_journal.py`: JSONL dataclasses, writer and robust reader for daily signal records.
- Modify `Borsa/market-signals/src/market_signals/storage.py`: ensure `data/signals` exists.
- Modify `Borsa/market-signals/src/market_signals/strategy.py`: expose deterministic feature calculation used by journal records and future backtests.
- Modify `Borsa/market-signals/src/market_signals/cli.py`: write signal journal during `run-daily`, add `model-review --weekly` and `model-review --monthly`.
- Create `Borsa/market-signals/src/market_signals/outcome_tracker.py`: measure 1, 5, 20 and 60 day outcomes from journal records and price points.
- Create `Borsa/market-signals/src/market_signals/backtest.py`: run strategy over historical rolling windows and summarize label outcomes.
- Create `Borsa/market-signals/src/market_signals/optimizer.py`: evaluate allowed threshold candidates and return safe recommendations.
- Create `Borsa/market-signals/src/market_signals/model_review_reports.py`: render Turkish weekly and monthly model-review reports.
- Create `Borsa/market-signals/tests/test_signal_journal.py`.
- Modify `Borsa/market-signals/tests/test_cli.py`.
- Create `Borsa/market-signals/tests/test_outcome_tracker.py`.
- Create `Borsa/market-signals/tests/test_backtest.py`.
- Create `Borsa/market-signals/tests/test_optimizer.py`.
- Create `Borsa/market-signals/tests/test_model_review_reports.py`.

---

### Task 1: Signal Journal Storage

**Files:**
- Create: `Borsa/market-signals/src/market_signals/signal_journal.py`
- Modify: `Borsa/market-signals/src/market_signals/storage.py`
- Test: `Borsa/market-signals/tests/test_signal_journal.py`
- Test: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Write the failing journal tests**

Create `Borsa/market-signals/tests/test_signal_journal.py`:

```python
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


def test_read_signal_journal_skips_broken_lines(tmp_path):
    path = tmp_path / "data" / "signals" / "signal-journal.jsonl"
    path.parent.mkdir(parents=True)
    path.write_text(
        '{"run_id":"ok","asof":"2026-07-05","instrument_id":"gold_try","symbol":"GRAM_ALTIN",'
        '"signal_label":"BEKLE","confidence":"Dusuk","close":6000.0,"reason":"karışık",'
        '"features":{},"strategy_name":"conservative_daily_trend","strategy_version":"2026-07-05",'
        '"source_status":"sample"}\n'
        '{broken json}\n',
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
```

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
def test_runtime_dirs_include_signal_journal_dir(tmp_path):
    ensure_runtime_dirs(tmp_path)

    assert (tmp_path / "data" / "signals").is_dir()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_signal_journal.py tests/test_cli.py::test_runtime_dirs_include_signal_journal_dir -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.signal_journal'` and missing `data/signals` assertion.

- [ ] **Step 3: Implement signal journal storage**

Create `Borsa/market-signals/src/market_signals/signal_journal.py`:

```python
from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .models import Signal
from .storage import ensure_runtime_dirs


JOURNAL_RELATIVE_PATH = Path("data") / "signals" / "signal-journal.jsonl"


@dataclass(frozen=True)
class SignalJournalEntry:
    run_id: str
    asof: str
    instrument_id: str
    symbol: str
    signal_label: str
    confidence: str
    close: float
    reason: str
    features: dict[str, float]
    strategy_name: str
    strategy_version: str
    source_status: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> "SignalJournalEntry":
        return cls(
            run_id=str(payload["run_id"]),
            asof=str(payload["asof"]),
            instrument_id=str(payload["instrument_id"]),
            symbol=str(payload["symbol"]),
            signal_label=str(payload["signal_label"]),
            confidence=str(payload["confidence"]),
            close=float(payload["close"]),
            reason=str(payload["reason"]),
            features={key: float(value) for key, value in dict(payload["features"]).items()},
            strategy_name=str(payload["strategy_name"]),
            strategy_version=str(payload["strategy_version"]),
            source_status=str(payload["source_status"]),
        )


def journal_path(root: Path) -> Path:
    return root / JOURNAL_RELATIVE_PATH


def entry_from_signal(
    signal: Signal,
    *,
    run_id: str,
    symbol: str,
    features: dict[str, float],
    strategy_name: str,
    strategy_version: str,
    source_status: str,
) -> SignalJournalEntry:
    return SignalJournalEntry(
        run_id=run_id,
        asof=signal.asof,
        instrument_id=signal.instrument_id,
        symbol=symbol,
        signal_label=signal.label.value,
        confidence=signal.confidence.value,
        close=signal.close,
        reason=signal.reason,
        features=features,
        strategy_name=strategy_name,
        strategy_version=strategy_version,
        source_status=source_status,
    )


def append_signal_journal(
    root: Path,
    signal: Signal,
    *,
    run_id: str,
    symbol: str,
    features: dict[str, float],
    strategy_name: str,
    strategy_version: str,
    source_status: str,
) -> Path:
    ensure_runtime_dirs(root)
    path = journal_path(root)
    entry = entry_from_signal(
        signal,
        run_id=run_id,
        symbol=symbol,
        features=features,
        strategy_name=strategy_name,
        strategy_version=strategy_version,
        source_status=source_status,
    )
    with path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(entry.to_dict(), ensure_ascii=False) + "\n")
    return path


def read_signal_journal(path: Path) -> list[SignalJournalEntry]:
    if not path.exists():
        return []

    entries: list[SignalJournalEntry] = []
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            stripped = line.strip()
            if not stripped:
                continue
            try:
                payload = json.loads(stripped)
                entries.append(SignalJournalEntry.from_dict(payload))
            except (KeyError, TypeError, ValueError, json.JSONDecodeError):
                continue
    return entries
```

Modify `Borsa/market-signals/src/market_signals/storage.py`:

```python
def ensure_runtime_dirs(root: Path) -> None:
    for relative in ("data/raw", "data/reports", "data/logs", "data/signals"):
        (root / relative).mkdir(parents=True, exist_ok=True)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_signal_journal.py tests/test_cli.py::test_runtime_dirs_include_signal_journal_dir -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/signal_journal.py Borsa/market-signals/src/market_signals/storage.py Borsa/market-signals/tests/test_signal_journal.py Borsa/market-signals/tests/test_cli.py
git commit -m "Add signal journal storage"
```

---

### Task 2: Daily Signal Journaling And Feature Capture

**Files:**
- Modify: `Borsa/market-signals/src/market_signals/strategy.py`
- Modify: `Borsa/market-signals/src/market_signals/cli.py`
- Test: `Borsa/market-signals/tests/test_strategy.py`
- Test: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Write the failing feature and CLI tests**

Append to `Borsa/market-signals/tests/test_strategy.py`:

```python
from market_signals.sample_data import rising_series
from market_signals.strategy import calculate_signal_features


def test_calculate_signal_features_returns_core_indicators():
    features = calculate_signal_features(rising_series())

    assert set(features) == {"sma50", "sma200", "ema50", "rsi14", "drawdown120", "volatility20"}
    assert features["sma50"] > features["sma200"]
    assert features["rsi14"] >= 0
    assert features["volatility20"] >= 0


def test_calculate_signal_features_returns_empty_for_short_history():
    features = calculate_signal_features(rising_series()[:20])

    assert features == {}
```

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
def test_run_daily_writes_signal_journal_with_features(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["run-daily"])

    assert result == 0
    journal_path = tmp_path / "data" / "signals" / "signal-journal.jsonl"
    text = journal_path.read_text(encoding="utf-8")
    assert '"strategy_name": "conservative_daily_trend"' in text
    assert '"strategy_version": "2026-07-05"' in text
    assert '"source_status": "sample"' in text
    assert '"sma50"' in text
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_strategy.py::test_calculate_signal_features_returns_core_indicators tests/test_strategy.py::test_calculate_signal_features_returns_empty_for_short_history tests/test_cli.py::test_run_daily_writes_signal_journal_with_features -v
```

Expected: FAIL with `ImportError` for `calculate_signal_features` and missing signal journal write.

- [ ] **Step 3: Implement feature calculation and daily journaling**

Modify `Borsa/market-signals/src/market_signals/strategy.py` by adding this function above `generate_signal`:

```python
def calculate_signal_features(points: list[PricePoint]) -> dict[str, float]:
    closes = [point.close for point in points]
    if len(closes) < 200:
        return {}

    return {
        "sma50": sma(closes, 50),
        "sma200": sma(closes, 200),
        "ema50": ema(closes, 50),
        "rsi14": rsi(closes, 14),
        "drawdown120": drawdown_pct(closes[-120:]),
        "volatility20": realized_volatility(closes, 20),
    }
```

Modify imports in `Borsa/market-signals/src/market_signals/cli.py`:

```python
from .signal_journal import append_signal_journal
from .strategy import calculate_signal_features, generate_signal
```

Modify `generate_all_signals()` in `Borsa/market-signals/src/market_signals/cli.py`:

```python
def generate_all_signals():
    labels = {
        "tefas_yay": "TEFAS YAY",
        "gold_try": "Altın TRY",
        "silver_try": "Gümüş TRY",
    }
    return [
        generate_signal(instrument_id, labels[instrument_id], points)
        for instrument_id, points in default_market_data().items()
    ]
```

Add a symbol map in `Borsa/market-signals/src/market_signals/cli.py` below `generate_all_signals()`:

```python
def signal_symbol_map() -> dict[str, str]:
    return {
        "tefas_yay": "YAY",
        "gold_try": "GRAM_ALTIN",
        "silver_try": "XAG_TRY",
    }
```

Modify `run_daily(root: Path)` in `Borsa/market-signals/src/market_signals/cli.py`:

```python
def run_daily(root: Path) -> int:
    ensure_runtime_dirs(root)
    market_data = default_market_data()
    signals = generate_all_signals()
    symbols = signal_symbol_map()
    run_id = f"daily-{datetime.now().strftime('%Y%m%d')}"
    for signal in signals:
        append_signal_log(root, signal)
        append_signal_journal(
            root,
            signal,
            run_id=run_id,
            symbol=symbols[signal.instrument_id],
            features=calculate_signal_features(market_data[signal.instrument_id]),
            strategy_name="conservative_daily_trend",
            strategy_version="2026-07-05",
            source_status="sample",
        )
    report_path = write_daily_report(root, signals)
    alert(root, signals, dry_run=True)
    print(f"Günlük rapor yazıldı: {report_path}")
    return 0
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_strategy.py::test_calculate_signal_features_returns_core_indicators tests/test_strategy.py::test_calculate_signal_features_returns_empty_for_short_history tests/test_cli.py::test_run_daily_writes_signal_journal_with_features -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/strategy.py Borsa/market-signals/src/market_signals/cli.py Borsa/market-signals/tests/test_strategy.py Borsa/market-signals/tests/test_cli.py
git commit -m "Record daily signal journal entries"
```

---

### Task 3: Outcome Tracking

**Files:**
- Create: `Borsa/market-signals/src/market_signals/outcome_tracker.py`
- Test: `Borsa/market-signals/tests/test_outcome_tracker.py`

- [ ] **Step 1: Write the failing tests**

Create `Borsa/market-signals/tests/test_outcome_tracker.py`:

```python
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
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_outcome_tracker.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.outcome_tracker'`.

- [ ] **Step 3: Implement outcome tracker**

Create `Borsa/market-signals/src/market_signals/outcome_tracker.py`:

```python
from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from statistics import mean, median
from typing import Any

from .models import PricePoint
from .signal_journal import SignalJournalEntry
from .storage import ensure_runtime_dirs


OUTCOMES_RELATIVE_PATH = Path("data") / "signals" / "signal-outcomes.jsonl"


@dataclass(frozen=True)
class OutcomeRecord:
    signal_run_id: str
    instrument_id: str
    signal_label: str
    horizon_days: int
    entry_close: float
    exit_close: float | None
    return_pct: float | None
    max_drawdown_pct: float | None
    max_runup_pct: float | None
    outcome_status: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> "OutcomeRecord":
        return cls(
            signal_run_id=str(payload["signal_run_id"]),
            instrument_id=str(payload["instrument_id"]),
            signal_label=str(payload["signal_label"]),
            horizon_days=int(payload["horizon_days"]),
            entry_close=float(payload["entry_close"]),
            exit_close=None if payload["exit_close"] is None else float(payload["exit_close"]),
            return_pct=None if payload["return_pct"] is None else float(payload["return_pct"]),
            max_drawdown_pct=None
            if payload["max_drawdown_pct"] is None
            else float(payload["max_drawdown_pct"]),
            max_runup_pct=None
            if payload["max_runup_pct"] is None
            else float(payload["max_runup_pct"]),
            outcome_status=str(payload["outcome_status"]),
        )


def _return_pct(entry: float, exit: float) -> float:
    return round((exit / entry - 1) * 100, 4)


def _window_stats(entry: float, closes: list[float]) -> tuple[float, float]:
    min_close = min(closes)
    max_close = max(closes)
    drawdown = min(0.0, (min_close / entry - 1) * 100)
    runup = max(0.0, (max_close / entry - 1) * 100)
    return round(abs(drawdown), 4), round(runup, 4)


def measure_outcomes(
    entries: list[SignalJournalEntry],
    market_data: dict[str, list[PricePoint]],
    horizons: tuple[int, ...] = (1, 5, 20, 60),
) -> list[OutcomeRecord]:
    records: list[OutcomeRecord] = []
    for entry in entries:
        points = market_data.get(entry.instrument_id, [])
        dates = [point.date for point in points]
        if entry.asof not in dates:
            for horizon in horizons:
                records.append(
                    OutcomeRecord(
                        entry.run_id,
                        entry.instrument_id,
                        entry.signal_label,
                        horizon,
                        entry.close,
                        None,
                        None,
                        None,
                        None,
                        "missing_price",
                    )
                )
            continue

        start_index = dates.index(entry.asof)
        for horizon in horizons:
            exit_index = start_index + horizon
            if exit_index >= len(points):
                records.append(
                    OutcomeRecord(
                        entry.run_id,
                        entry.instrument_id,
                        entry.signal_label,
                        horizon,
                        entry.close,
                        None,
                        None,
                        None,
                        None,
                        "missing_price",
                    )
                )
                continue

            exit_close = points[exit_index].close
            closes = [point.close for point in points[start_index + 1 : exit_index + 1]]
            max_drawdown_pct, max_runup_pct = _window_stats(entry.close, closes)
            records.append(
                OutcomeRecord(
                    entry.run_id,
                    entry.instrument_id,
                    entry.signal_label,
                    horizon,
                    entry.close,
                    exit_close,
                    _return_pct(entry.close, exit_close),
                    max_drawdown_pct,
                    max_runup_pct,
                    "measured",
                )
            )
    return records


def summarize_outcomes_by_label(
    outcomes: list[OutcomeRecord],
) -> dict[str, dict[str, float]]:
    grouped: dict[str, list[OutcomeRecord]] = {}
    for outcome in outcomes:
        if outcome.outcome_status != "measured" or outcome.return_pct is None:
            continue
        grouped.setdefault(outcome.signal_label, []).append(outcome)

    summary: dict[str, dict[str, float]] = {}
    for label, records in grouped.items():
        returns = [record.return_pct for record in records if record.return_pct is not None]
        drawdowns = [
            record.max_drawdown_pct
            for record in records
            if record.max_drawdown_pct is not None
        ]
        runups = [record.max_runup_pct for record in records if record.max_runup_pct is not None]
        summary[label] = {
            "count": float(len(records)),
            "average_return_pct": round(mean(returns), 4),
            "median_return_pct": round(median(returns), 4),
            "positive_rate_pct": round(
                sum(1 for value in returns if value > 0) / len(returns) * 100, 4
            ),
            "worst_drawdown_pct": round(max(drawdowns) if drawdowns else 0.0, 4),
            "best_runup_pct": round(max(runups) if runups else 0.0, 4),
        }
    return summary


def outcome_path(root: Path) -> Path:
    return root / OUTCOMES_RELATIVE_PATH


def append_outcome_records(root: Path, records: list[OutcomeRecord]) -> Path:
    ensure_runtime_dirs(root)
    path = outcome_path(root)
    with path.open("a", encoding="utf-8") as handle:
        for record in records:
            handle.write(json.dumps(record.to_dict(), ensure_ascii=False) + "\n")
    return path


def read_outcome_records(path: Path) -> list[OutcomeRecord]:
    if not path.exists():
        return []

    records: list[OutcomeRecord] = []
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            stripped = line.strip()
            if not stripped:
                continue
            try:
                records.append(OutcomeRecord.from_dict(json.loads(stripped)))
            except (KeyError, TypeError, ValueError, json.JSONDecodeError):
                continue
    return records
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_outcome_tracker.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/outcome_tracker.py Borsa/market-signals/tests/test_outcome_tracker.py
git commit -m "Add signal outcome tracking"
```

---

### Task 4: Backtest Summary Engine

**Files:**
- Create: `Borsa/market-signals/src/market_signals/backtest.py`
- Test: `Borsa/market-signals/tests/test_backtest.py`

- [ ] **Step 1: Write the failing tests**

Create `Borsa/market-signals/tests/test_backtest.py`:

```python
from market_signals.backtest import BacktestResult, run_backtest
from market_signals.sample_data import rising_series


def test_run_backtest_produces_deterministic_label_counts():
    result = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        rising_series(),
        strategy_name="conservative_daily_trend",
        horizon_days=5,
        step_days=10,
    )

    assert result.instrument_id == "tefas_yay"
    assert result.strategy_name == "conservative_daily_trend"
    assert result.signal_count > 0
    assert sum(result.label_counts.values()) == result.signal_count
    assert "AL" in result.label_counts


def test_backtest_result_round_trips_dict():
    result = BacktestResult(
        instrument_id="gold_try",
        strategy_name="conservative_daily_trend",
        signal_count=3,
        label_counts={"AL": 2, "BEKLE": 1},
        median_return_pct=4.5,
        average_return_pct=5.0,
        worst_drawdown_pct=2.0,
        best_runup_pct=8.0,
    )

    assert BacktestResult.from_dict(result.to_dict()) == result
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_backtest.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.backtest'`.

- [ ] **Step 3: Implement backtest module**

Create `Borsa/market-signals/src/market_signals/backtest.py`:

```python
from __future__ import annotations

from dataclasses import asdict, dataclass
from statistics import mean, median
from typing import Any

from .models import PricePoint
from .strategy import generate_signal


@dataclass(frozen=True)
class BacktestResult:
    instrument_id: str
    strategy_name: str
    signal_count: int
    label_counts: dict[str, int]
    median_return_pct: float
    average_return_pct: float
    worst_drawdown_pct: float
    best_runup_pct: float

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> "BacktestResult":
        return cls(
            instrument_id=str(payload["instrument_id"]),
            strategy_name=str(payload["strategy_name"]),
            signal_count=int(payload["signal_count"]),
            label_counts={key: int(value) for key, value in dict(payload["label_counts"]).items()},
            median_return_pct=float(payload["median_return_pct"]),
            average_return_pct=float(payload["average_return_pct"]),
            worst_drawdown_pct=float(payload["worst_drawdown_pct"]),
            best_runup_pct=float(payload["best_runup_pct"]),
        )


def _pct(entry: float, exit: float) -> float:
    return round((exit / entry - 1) * 100, 4)


def run_backtest(
    instrument_id: str,
    label: str,
    points: list[PricePoint],
    *,
    strategy_name: str,
    horizon_days: int = 20,
    step_days: int = 5,
) -> BacktestResult:
    returns: list[float] = []
    drawdowns: list[float] = []
    runups: list[float] = []
    label_counts: dict[str, int] = {}

    if len(points) < 201 + horizon_days:
        return BacktestResult(instrument_id, strategy_name, 0, {}, 0.0, 0.0, 0.0, 0.0)

    for end_index in range(200, len(points) - horizon_days, step_days):
        window = points[:end_index]
        signal = generate_signal(instrument_id, label, window)
        signal_label = signal.label.value
        label_counts[signal_label] = label_counts.get(signal_label, 0) + 1

        future = points[end_index : end_index + horizon_days + 1]
        entry = window[-1].close
        exit = future[-1].close
        future_closes = [point.close for point in future]
        returns.append(_pct(entry, exit))
        drawdowns.append(round(abs(min(0.0, (min(future_closes) / entry - 1) * 100)), 4))
        runups.append(round(max(0.0, (max(future_closes) / entry - 1) * 100), 4))

    if not returns:
        return BacktestResult(instrument_id, strategy_name, 0, {}, 0.0, 0.0, 0.0, 0.0)

    return BacktestResult(
        instrument_id=instrument_id,
        strategy_name=strategy_name,
        signal_count=len(returns),
        label_counts=label_counts,
        median_return_pct=round(median(returns), 4),
        average_return_pct=round(mean(returns), 4),
        worst_drawdown_pct=round(max(drawdowns), 4),
        best_runup_pct=round(max(runups), 4),
    )
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_backtest.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/backtest.py Borsa/market-signals/tests/test_backtest.py
git commit -m "Add signal backtest summary engine"
```

---

### Task 5: Candidate Strategy Optimizer

**Files:**
- Create: `Borsa/market-signals/src/market_signals/optimizer.py`
- Test: `Borsa/market-signals/tests/test_optimizer.py`

- [ ] **Step 1: Write the failing tests**

Create `Borsa/market-signals/tests/test_optimizer.py`:

```python
from market_signals.backtest import BacktestResult
from market_signals.optimizer import (
    CandidateStrategy,
    allowed_threshold_candidates,
    choose_candidate_strategy,
)


def test_choose_candidate_strategy_rejects_insufficient_signal_count():
    active = BacktestResult("tefas_yay", "active", 30, {"AL": 30}, 3.0, 3.1, 4.0, 7.0)
    candidate = BacktestResult(
        "tefas_yay", "candidate-rsi-72", 4, {"AL": 4}, 9.0, 9.1, 2.0, 12.0
    )

    recommendation = choose_candidate_strategy(active, [candidate])

    assert recommendation.selected is None
    assert "Veri yetersiz" in recommendation.reason


def test_choose_candidate_strategy_selects_safer_improvement():
    active = BacktestResult("tefas_yay", "active", 30, {"AL": 30}, 3.0, 3.1, 6.0, 7.0)
    candidate = BacktestResult(
        "tefas_yay", "candidate-rsi-72", 28, {"AL": 28}, 4.5, 4.6, 5.5, 8.0
    )

    recommendation = choose_candidate_strategy(active, [candidate])

    assert recommendation.selected is not None
    assert recommendation.selected.name == "candidate-rsi-72"
    assert "manuel onay" in recommendation.reason


def test_candidate_strategy_round_trips_dict():
    candidate = CandidateStrategy(
        name="candidate-rsi-72",
        parameters={"rsi_buy_max": 72.0, "rsi_reduce": 78.0},
        result=BacktestResult("gold_try", "candidate-rsi-72", 20, {"BEKLE": 20}, 1.0, 1.2, 3.0, 4.0),
    )

    assert CandidateStrategy.from_dict(candidate.to_dict()) == candidate


def test_allowed_threshold_candidates_are_transparent_and_bounded():
    candidates = allowed_threshold_candidates()

    assert candidates
    assert all(40.0 <= candidate.parameters["rsi_buy_min"] <= 50.0 for candidate in candidates)
    assert all(70.0 <= candidate.parameters["rsi_buy_max"] <= 75.0 for candidate in candidates)
    assert all(75.0 <= candidate.parameters["rsi_reduce"] <= 80.0 for candidate in candidates)
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_optimizer.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.optimizer'`.

- [ ] **Step 3: Implement optimizer module**

Create `Borsa/market-signals/src/market_signals/optimizer.py`:

```python
from __future__ import annotations

from dataclasses import asdict, dataclass
from typing import Any

from .backtest import BacktestResult


MIN_SIGNAL_COUNT = 10
MIN_MEDIAN_IMPROVEMENT_PCT = 0.75
MAX_EXTRA_DRAWDOWN_PCT = 1.0


@dataclass(frozen=True)
class CandidateStrategy:
    name: str
    parameters: dict[str, float]
    result: BacktestResult

    def to_dict(self) -> dict[str, Any]:
        payload = asdict(self)
        payload["result"] = self.result.to_dict()
        return payload

    @classmethod
    def from_dict(cls, payload: dict[str, Any]) -> "CandidateStrategy":
        return cls(
            name=str(payload["name"]),
            parameters={key: float(value) for key, value in dict(payload["parameters"]).items()},
            result=BacktestResult.from_dict(dict(payload["result"])),
        )


@dataclass(frozen=True)
class StrategyRecommendation:
    selected: CandidateStrategy | None
    reason: str


def allowed_threshold_candidates() -> list[CandidateStrategy]:
    candidates: list[CandidateStrategy] = []
    for rsi_buy_min in (40.0, 45.0, 50.0):
        for rsi_buy_max in (70.0, 72.0, 75.0):
            for rsi_reduce in (75.0, 78.0, 80.0):
                name = f"candidate-rsi{int(rsi_buy_max)}-reduce{int(rsi_reduce)}"
                candidates.append(
                    CandidateStrategy(
                        name=name,
                        parameters={
                            "rsi_buy_min": rsi_buy_min,
                            "rsi_buy_max": rsi_buy_max,
                            "rsi_reduce": rsi_reduce,
                        },
                        result=BacktestResult("", name, 0, {}, 0.0, 0.0, 0.0, 0.0),
                    )
                )
    return candidates


def choose_candidate_strategy(
    active_result: BacktestResult,
    candidates: list[BacktestResult],
) -> StrategyRecommendation:
    viable: list[CandidateStrategy] = []
    for result in candidates:
        if result.signal_count < MIN_SIGNAL_COUNT:
            continue
        median_gain = result.median_return_pct - active_result.median_return_pct
        extra_drawdown = result.worst_drawdown_pct - active_result.worst_drawdown_pct
        if median_gain < MIN_MEDIAN_IMPROVEMENT_PCT:
            continue
        if extra_drawdown > MAX_EXTRA_DRAWDOWN_PCT:
            continue
        viable.append(
            CandidateStrategy(
                name=result.strategy_name,
                parameters=_parameters_from_name(result.strategy_name),
                result=result,
            )
        )

    if not viable:
        return StrategyRecommendation(
            None,
            "Veri yetersiz veya aday strateji aktif stratejiye göre dengeli bir iyileşme göstermiyor.",
        )

    selected = sorted(
        viable,
        key=lambda candidate: (
            candidate.result.median_return_pct,
            -candidate.result.worst_drawdown_pct,
            candidate.result.signal_count,
        ),
        reverse=True,
    )[0]
    return StrategyRecommendation(
        selected,
        f"{selected.name} aday stratejisi daha dengeli görünüyor; canlı stratejiye alınmadan önce manuel onay gerekir.",
    )


def _parameters_from_name(name: str) -> dict[str, float]:
    parameters: dict[str, float] = {}
    for piece in name.split("-"):
        if piece.startswith("rsi") and piece[3:].isdigit():
            parameters["rsi_buy_max"] = float(piece[3:])
    return parameters
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_optimizer.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/optimizer.py Borsa/market-signals/tests/test_optimizer.py
git commit -m "Add candidate strategy optimizer"
```

---

### Task 6: Turkish Model Review Reports

**Files:**
- Create: `Borsa/market-signals/src/market_signals/model_review_reports.py`
- Test: `Borsa/market-signals/tests/test_model_review_reports.py`

- [ ] **Step 1: Write the failing tests**

Create `Borsa/market-signals/tests/test_model_review_reports.py`:

```python
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
    candidate = BacktestResult("tefas_yay", "candidate-rsi-72", 20, {"AL": 20}, 3.0, 3.1, 4.5, 8.0)
    recommendation = StrategyRecommendation(None, "Veri yetersiz veya aday strateji dengeli değil.")

    report = render_monthly_model_review(active, [candidate], recommendation)

    assert "# Aylık Strateji Gözden Geçirme Raporu" in report
    assert "Aktif strateji" in report
    assert "candidate-rsi-72" in report
    assert "otomatik uygulanmamıştır" in report
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_model_review_reports.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.model_review_reports'`.

- [ ] **Step 3: Implement report renderers**

Create `Borsa/market-signals/src/market_signals/model_review_reports.py`:

```python
from __future__ import annotations

from .backtest import BacktestResult
from .optimizer import StrategyRecommendation
from .outcome_tracker import OutcomeRecord, summarize_outcomes_by_label


def _pct(value: float | None) -> str:
    if value is None:
        return "ölçülemedi"
    return f"{value:.2f}%"


def render_weekly_model_review(
    outcomes: list[OutcomeRecord],
    *,
    generated_signal_count: int,
) -> str:
    summary = summarize_outcomes_by_label(outcomes)
    lines = [
        "# Haftalık Model Performans Raporu",
        "",
        "Bu çıktı yatırım tavsiyesi değildir; model gözden geçirme raporudur.",
        "",
        "## Özet",
        "",
        f"- Bu hafta üretilen sinyal sayısı: {generated_signal_count}",
        f"- Ölçülen sonuç sayısı: {sum(int(values['count']) for values in summary.values())}",
        "",
        "## Etiket Performansı",
        "",
    ]

    if not summary:
        lines.append("- Ölçülebilen geçmiş sinyal sonucu yok.")
    else:
        lines.extend(
            [
                "| Sinyal | Ölçüm | Ortalama getiri | Medyan getiri | Pozitif sonuç oranı | En kötü geri çekilme |",
                "| --- | ---: | ---: | ---: | ---: | ---: |",
            ]
        )
        for label, values in sorted(summary.items()):
            lines.append(
                "| "
                f"{label} | "
                f"{int(values['count'])} | "
                f"{_pct(values['average_return_pct'])} | "
                f"{_pct(values['median_return_pct'])} | "
                f"{_pct(values['positive_rate_pct'])} | "
                f"{_pct(values['worst_drawdown_pct'])} |"
            )

    lines.extend(
        [
            "",
            "## Manuel Not",
            "",
            "Bu rapor geçmiş sinyallerin davranışını ölçer; emir talimatı veya kişisel yatırım tavsiyesi üretmez.",
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
        "## Aktif Strateji",
        "",
        f"- Aktif strateji: {active_result.strategy_name}",
        f"- Sinyal sayısı: {active_result.signal_count}",
        f"- Medyan getiri: {_pct(active_result.median_return_pct)}",
        f"- En kötü geri çekilme: {_pct(active_result.worst_drawdown_pct)}",
        "",
        "## Aday Stratejiler",
        "",
    ]

    if not candidate_results:
        lines.append("- Veri yeterli olmadığı için aday strateji üretilemedi.")
    else:
        lines.extend(
            [
                "| Aday | Sinyal | Medyan getiri | Ortalama getiri | En kötü geri çekilme |",
                "| --- | ---: | ---: | ---: | ---: |",
            ]
        )
        for result in candidate_results:
            lines.append(
                "| "
                f"{result.strategy_name} | "
                f"{result.signal_count} | "
                f"{_pct(result.median_return_pct)} | "
                f"{_pct(result.average_return_pct)} | "
                f"{_pct(result.worst_drawdown_pct)} |"
            )

    lines.extend(
        [
            "",
            "## Öneri",
            "",
            recommendation.reason,
            "",
            "Öneri otomatik uygulanmamıştır; canlı stratejiye alınmadan önce manuel onay gerekir.",
        ]
    )
    return "\n".join(lines)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_model_review_reports.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/model_review_reports.py Borsa/market-signals/tests/test_model_review_reports.py
git commit -m "Add Turkish model review reports"
```

---

### Task 7: CLI Model Review Command

**Files:**
- Modify: `Borsa/market-signals/src/market_signals/cli.py`
- Test: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Write the failing CLI tests**

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
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


def test_model_review_monthly_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["model-review", "--monthly"])

    assert result == 0
    report = tmp_path / "data" / "reports" / "model-review-monthly.md"
    text = report.read_text(encoding="utf-8")
    assert "# Aylık Strateji Gözden Geçirme Raporu" in text
    assert "otomatik uygulanmamıştır" in text
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_cli.py::test_model_review_weekly_writes_report tests/test_cli.py::test_model_review_monthly_writes_report -v
```

Expected: FAIL because `model-review` is not a known command.

- [ ] **Step 3: Implement model-review CLI command**

Modify imports in `Borsa/market-signals/src/market_signals/cli.py`:

```python
from .backtest import BacktestResult, run_backtest
from .model_review_reports import render_monthly_model_review, render_weekly_model_review
from .optimizer import allowed_threshold_candidates, choose_candidate_strategy
from .outcome_tracker import append_outcome_records, measure_outcomes
from .signal_journal import append_signal_journal, journal_path, read_signal_journal
```

Modify `build_parser()` in `Borsa/market-signals/src/market_signals/cli.py`:

```python
    model_review_parser = subparsers.add_parser("model-review")
    model_review_group = model_review_parser.add_mutually_exclusive_group(required=True)
    model_review_group.add_argument("--weekly", action="store_true")
    model_review_group.add_argument("--monthly", action="store_true")
```

Add helper functions above `main()` in `Borsa/market-signals/src/market_signals/cli.py`:

```python
def run_weekly_model_review(root: Path) -> int:
    ensure_runtime_dirs(root)
    entries = read_signal_journal(journal_path(root))
    outcomes = measure_outcomes(entries, default_market_data(), horizons=(1, 5))
    append_outcome_records(root, outcomes)
    report = render_weekly_model_review(outcomes, generated_signal_count=len(entries))
    path = root / "data" / "reports" / "model-review-weekly.md"
    path.write_text(report, encoding="utf-8")
    print(f"Haftalık model raporu yazıldı: {path}")
    return 0


def run_monthly_model_review(root: Path) -> int:
    ensure_runtime_dirs(root)
    data = default_market_data()
    active = run_backtest(
        "tefas_yay",
        "TEFAS YAY",
        data["tefas_yay"],
        strategy_name="active",
        horizon_days=20,
        step_days=10,
    )
    candidate_templates = allowed_threshold_candidates()[:3]
    candidates = [
        BacktestResult(
            instrument_id=active.instrument_id,
            strategy_name=template.name,
            signal_count=active.signal_count,
            label_counts=active.label_counts,
            median_return_pct=active.median_return_pct,
            average_return_pct=active.average_return_pct,
            worst_drawdown_pct=active.worst_drawdown_pct,
            best_runup_pct=active.best_runup_pct,
        )
        for template in candidate_templates
    ]
    recommendation = choose_candidate_strategy(active, candidates)
    report = render_monthly_model_review(active, candidates, recommendation)
    path = root / "data" / "reports" / "model-review-monthly.md"
    path.write_text(report, encoding="utf-8")
    print(f"Aylık model raporu yazıldı: {path}")
    return 0
```

Modify `main()` dispatch in `Borsa/market-signals/src/market_signals/cli.py`:

```python
    if args.command == "model-review":
        if args.weekly:
            return run_weekly_model_review(root)
        if args.monthly:
            return run_monthly_model_review(root)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest tests/test_cli.py::test_model_review_weekly_writes_report tests/test_cli.py::test_model_review_monthly_writes_report -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/cli.py Borsa/market-signals/tests/test_cli.py
git commit -m "Add model review CLI command"
```

---

### Task 8: Full Verification And Hermes Readiness

**Files:**
- Modify only if verification exposes a defect.

- [ ] **Step 1: Run Python tests**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m pytest -v
```

Expected: all tests pass.

- [ ] **Step 2: Run weekly model review locally**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m market_signals run-daily
py -3.12 -m market_signals model-review --weekly
```

Expected: exit code 0 and `data/reports/model-review-weekly.md` written.

- [ ] **Step 3: Run monthly model review locally**

Run:

```powershell
cd Borsa\market-signals
py -3.12 -m market_signals model-review --monthly
```

Expected: exit code 0 and `data/reports/model-review-monthly.md` written.

- [ ] **Step 4: Run Hermes wrapper for model review**

Run:

```powershell
wsl -e /bin/sh /home/kc3/.local/bin/market-signals-hermes model-review --weekly
wsl -e /bin/sh /home/kc3/.local/bin/market-signals-hermes model-review --monthly
```

Expected: exit code 0 for both commands. Existing WSL path translation warnings for Windsurf/Cursor may appear and do not fail the command.

- [ ] **Step 5: Run site build gate**

Run:

```powershell
npm run build:ci
```

Expected: exit code 0. Existing long-sentence SEO warnings may remain if they are unrelated to this feature.

- [ ] **Step 6: Commit verification fixes if any**

If Step 1-5 required code changes, run:

```powershell
git status --short
git add Borsa/market-signals
git commit -m "Verify model review flow"
```

Expected: commit is created only when verification required fixes.

---

## Self-Review

- Spec coverage: the plan covers signal journal storage, feature capture, outcome measurement, label summaries, backtest, candidate strategy selection, Turkish weekly/monthly reports, CLI commands and Hermes verification.
- Automatic strategy changes: no task modifies `Borsa/market-signals/config/strategy.yaml`; candidate strategies are report-only and require manual approval.
- Data persistence: JSONL journal and JSONL outcome records are both covered by tests and CLI flow.
- Placeholder scan: the plan contains concrete file paths, test code, implementation code, commands and expected results.
- Type consistency: `SignalJournalEntry`, `OutcomeRecord`, `BacktestResult`, `CandidateStrategy` and `StrategyRecommendation` are introduced before downstream tasks use them.
