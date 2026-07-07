# Borsa Market Signals Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a private, local-first market signal MVP under `Borsa/market-signals` so Hermes cron jobs can run daily signal checks and Telegram-style notifications without touching Estranova public site surfaces.

**Architecture:** Create an isolated Python package with deterministic data validation, indicators, signal generation, reporting, and alert commands. The first version uses fixture/sample data and dependency-light code so commands work before external TEFAS/Yahoo adapters are hardened. Live data collectors can be swapped in behind the same interfaces.

**Tech Stack:** Python 3.11+, standard library, `pytest`, optional `requests`, optional `PyYAML`; local filesystem reports; environment variables for Telegram token/chat id.

---

## File Structure

- Create: `Borsa/market-signals/README.md` - private-tool overview, safety framing, commands.
- Create: `Borsa/market-signals/pyproject.toml` - package metadata, pytest config, console script.
- Create: `Borsa/market-signals/.env.example` - Telegram/Hermes secret names.
- Create: `Borsa/market-signals/config/instruments.yaml` - tracked instruments.
- Create: `Borsa/market-signals/config/strategy.yaml` - deterministic signal thresholds.
- Create: `Borsa/market-signals/config/alerting.yaml` - alert policy.
- Create: `Borsa/market-signals/src/market_signals/__init__.py` - package marker.
- Create: `Borsa/market-signals/src/market_signals/models.py` - dataclasses and enums.
- Create: `Borsa/market-signals/src/market_signals/settings.py` - path/config helpers with safe fallback parsing.
- Create: `Borsa/market-signals/src/market_signals/sample_data.py` - deterministic sample series for MVP.
- Create: `Borsa/market-signals/src/market_signals/storage.py` - raw/report/log directory creation and JSONL signal log.
- Create: `Borsa/market-signals/src/market_signals/indicators.py` - SMA, EMA, RSI, MACD, volatility, drawdown.
- Create: `Borsa/market-signals/src/market_signals/strategy.py` - AL/BEKLE/AZALT/NAKDE GEC signal rules.
- Create: `Borsa/market-signals/src/market_signals/reports.py` - Markdown report rendering.
- Create: `Borsa/market-signals/src/market_signals/alerts.py` - dry-run and Telegram sendMessage adapter.
- Create: `Borsa/market-signals/src/market_signals/cli.py` - CLI commands used by Hermes.
- Create: `Borsa/market-signals/tests/test_indicators.py` - indicator unit tests.
- Create: `Borsa/market-signals/tests/test_strategy.py` - deterministic signal tests.
- Create: `Borsa/market-signals/tests/test_cli.py` - command smoke tests.

Do not modify:
- `src/pages/**`
- `src/data/static-articles.ts`
- `public/**`
- Estranova navigation, RSS, sitemap, or editorial content.

## Implementation Tasks

### Task 1: Scaffold Private Python Package

**Files:**
- Create: `Borsa/market-signals/pyproject.toml`
- Create: `Borsa/market-signals/README.md`
- Create: `Borsa/market-signals/.env.example`
- Create: `Borsa/market-signals/src/market_signals/__init__.py`
- Create: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Write the smoke test**

Create `Borsa/market-signals/tests/test_cli.py`:

```python
from market_signals.cli import build_parser


def test_cli_has_hermes_commands():
    parser = build_parser()
    help_text = parser.format_help()

    assert "run-daily" in help_text
    assert "run-weekly-audit" in help_text
    assert "alert" in help_text
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
cd D:\A-klasor\Estranova\Borsa\market-signals
python -m pytest tests/test_cli.py -v
```

Expected: FAIL because `market_signals.cli` does not exist yet.

- [ ] **Step 3: Create package metadata**

Create `Borsa/market-signals/pyproject.toml`:

```toml
[build-system]
requires = ["setuptools>=69", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "market-signals"
version = "0.1.0"
description = "Private decision-support market signal tooling for TEFAS and metals"
requires-python = ">=3.11"
dependencies = [
  "requests>=2.32.0",
  "PyYAML>=6.0.1",
]

[project.optional-dependencies]
dev = [
  "pytest>=8.2.0",
]

[project.scripts]
market-signals = "market_signals.cli:main"

[tool.setuptools.packages.find]
where = ["src"]

[tool.pytest.ini_options]
pythonpath = ["src"]
testpaths = ["tests"]
```

- [ ] **Step 4: Create README**

Create `Borsa/market-signals/README.md`:

```markdown
# Market Signals

Private research and decision-support tooling for TEFAS YAY, gold, and silver signals.

This tool does not provide investment advice, portfolio management, automated trading, or personalized financial recommendations. Signals are model outputs for manual review only.

## Commands

```powershell
python -m market_signals run-daily
python -m market_signals run-weekly-audit
python -m market_signals alert --dry-run
```

Hermes cron jobs should stay paused until the package is installed, Telegram secrets are configured, and dry-run reports have been reviewed.
```

- [ ] **Step 5: Create environment example**

Create `Borsa/market-signals/.env.example`:

```dotenv
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
MARKET_SIGNALS_ALERTS_ENABLED=false
```

- [ ] **Step 6: Create package marker and minimal CLI**

Create `Borsa/market-signals/src/market_signals/__init__.py`:

```python
__all__ = ["__version__"]

__version__ = "0.1.0"
```

Create `Borsa/market-signals/src/market_signals/cli.py`:

```python
from __future__ import annotations

import argparse


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="market-signals")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("run-daily")
    subparsers.add_parser("run-weekly-audit")
    subparsers.add_parser("collect")
    subparsers.add_parser("validate-data")
    subparsers.add_parser("compute-indicators")
    subparsers.add_parser("generate-signals")
    subparsers.add_parser("backtest")
    subparsers.add_parser("report")

    alert = subparsers.add_parser("alert")
    alert.add_argument("--dry-run", action="store_true")
    alert.add_argument("--channel", default="telegram")

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    parser.parse_args(argv)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 7: Run smoke test**

Run:

```powershell
python -m pytest tests/test_cli.py -v
```

Expected: PASS.

### Task 2: Add Models, Config, and Storage

**Files:**
- Create: `Borsa/market-signals/config/instruments.yaml`
- Create: `Borsa/market-signals/config/strategy.yaml`
- Create: `Borsa/market-signals/config/alerting.yaml`
- Create: `Borsa/market-signals/src/market_signals/models.py`
- Create: `Borsa/market-signals/src/market_signals/settings.py`
- Create: `Borsa/market-signals/src/market_signals/storage.py`
- Modify: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Extend CLI test for safe directory creation**

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
from market_signals.storage import ensure_runtime_dirs


def test_runtime_dirs_are_created(tmp_path):
    ensure_runtime_dirs(tmp_path)

    assert (tmp_path / "data" / "raw").is_dir()
    assert (tmp_path / "data" / "reports").is_dir()
    assert (tmp_path / "data" / "logs").is_dir()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
python -m pytest tests/test_cli.py::test_runtime_dirs_are_created -v
```

Expected: FAIL because `market_signals.storage` does not exist.

- [ ] **Step 3: Create config files**

Create `Borsa/market-signals/config/instruments.yaml`:

```yaml
timezone: Europe/Istanbul
base_currency: TRY
instruments:
  - id: tefas_yay
    label: TEFAS YAY
    source: sample
    symbol: YAY
  - id: gold_try
    label: Altin TRY
    source: sample
    symbol: XAU_TRY
  - id: silver_try
    label: Gumus TRY
    source: sample
    symbol: XAG_TRY
```

Create `Borsa/market-signals/config/strategy.yaml`:

```yaml
strategy:
  name: conservative_daily_trend
  confirmation_days: 2
  min_history_days: 30
  rsi_buy_min: 45
  rsi_buy_max: 75
  rsi_reduce: 78
  drawdown_exit_pct:
    tefas_yay: 12
    gold_try: 10
    silver_try: 18
```

Create `Borsa/market-signals/config/alerting.yaml`:

```yaml
alerts:
  enabled: false
  default_channel: telegram
  send_only_on_state_change: true
```

- [ ] **Step 4: Create models**

Create `Borsa/market-signals/src/market_signals/models.py`:

```python
from __future__ import annotations

from dataclasses import dataclass
from enum import Enum


class SignalLabel(str, Enum):
    AL = "AL"
    BEKLE = "BEKLE"
    AZALT = "AZALT"
    NAKDE_GEC = "NAKDE GEC"


class Confidence(str, Enum):
    DUSUK = "Dusuk"
    ORTA = "Orta"
    YUKSEK = "Yuksek"


@dataclass(frozen=True)
class PricePoint:
    date: str
    close: float


@dataclass(frozen=True)
class Instrument:
    id: str
    label: str
    symbol: str
    source: str = "sample"


@dataclass(frozen=True)
class Signal:
    instrument_id: str
    label: SignalLabel
    confidence: Confidence
    close: float
    reason: str
    asof: str
```

- [ ] **Step 5: Create settings and storage**

Create `Borsa/market-signals/src/market_signals/settings.py`:

```python
from __future__ import annotations

from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None


PROJECT_ROOT = Path(__file__).resolve().parents[2]


def load_yaml(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    text = path.read_text(encoding="utf-8")
    if yaml is None:
        return {}
    loaded = yaml.safe_load(text)
    return loaded if isinstance(loaded, dict) else {}
```

Create `Borsa/market-signals/src/market_signals/storage.py`:

```python
from __future__ import annotations

import json
from dataclasses import asdict
from pathlib import Path

from .models import Signal


def ensure_runtime_dirs(root: Path) -> None:
    for relative in ("data/raw", "data/reports", "data/logs"):
        (root / relative).mkdir(parents=True, exist_ok=True)


def append_signal_log(root: Path, signal: Signal) -> Path:
    ensure_runtime_dirs(root)
    path = root / "data" / "logs" / "signals.jsonl"
    payload = asdict(signal)
    payload["label"] = signal.label.value
    payload["confidence"] = signal.confidence.value
    with path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(payload, ensure_ascii=False) + "\n")
    return path
```

- [ ] **Step 6: Run tests**

Run:

```powershell
python -m pytest tests/test_cli.py -v
```

Expected: PASS.

### Task 3: Implement Indicators and Strategy

**Files:**
- Create: `Borsa/market-signals/src/market_signals/indicators.py`
- Create: `Borsa/market-signals/src/market_signals/sample_data.py`
- Create: `Borsa/market-signals/src/market_signals/strategy.py`
- Create: `Borsa/market-signals/tests/test_indicators.py`
- Create: `Borsa/market-signals/tests/test_strategy.py`

- [ ] **Step 1: Write indicator tests**

Create `Borsa/market-signals/tests/test_indicators.py`:

```python
from market_signals.indicators import drawdown_pct, ema, rsi, sma


def test_sma_returns_average_of_window():
    assert sma([10, 20, 30, 40], 3) == 30


def test_ema_tracks_latest_value():
    value = ema([10, 10, 20], 2)
    assert round(value, 2) == 16.67


def test_drawdown_pct_from_peak():
    assert drawdown_pct([100, 120, 90]) == 25


def test_rsi_returns_bounded_value():
    value = rsi([10, 11, 12, 11, 13, 14, 15], 3)
    assert 0 <= value <= 100
```

- [ ] **Step 2: Write strategy tests**

Create `Borsa/market-signals/tests/test_strategy.py`:

```python
from market_signals.models import SignalLabel
from market_signals.sample_data import rising_series, falling_series
from market_signals.strategy import generate_signal


def test_rising_series_generates_al_or_bekle():
    signal = generate_signal("tefas_yay", "TEFAS YAY", rising_series())
    assert signal.label in {SignalLabel.AL, SignalLabel.BEKLE}
    assert signal.instrument_id == "tefas_yay"


def test_falling_series_generates_risk_signal():
    signal = generate_signal("tefas_yay", "TEFAS YAY", falling_series())
    assert signal.label in {SignalLabel.AZALT, SignalLabel.NAKDE_GEC, SignalLabel.BEKLE}
    assert "SMA" in signal.reason or "drawdown" in signal.reason
```

- [ ] **Step 3: Run tests to verify they fail**

Run:

```powershell
python -m pytest tests/test_indicators.py tests/test_strategy.py -v
```

Expected: FAIL because indicator/strategy modules do not exist.

- [ ] **Step 4: Implement indicators**

Create `Borsa/market-signals/src/market_signals/indicators.py`:

```python
from __future__ import annotations

import math


def sma(values: list[float], window: int) -> float:
    if len(values) < window:
        raise ValueError("not enough values for SMA")
    return sum(values[-window:]) / window


def ema(values: list[float], window: int) -> float:
    if not values:
        raise ValueError("EMA requires values")
    alpha = 2 / (window + 1)
    current = values[0]
    for value in values[1:]:
        current = value * alpha + current * (1 - alpha)
    return current


def rsi(values: list[float], window: int = 14) -> float:
    if len(values) <= window:
        raise ValueError("not enough values for RSI")
    gains: list[float] = []
    losses: list[float] = []
    for previous, current in zip(values[-window - 1 : -1], values[-window:]):
        change = current - previous
        gains.append(max(change, 0))
        losses.append(abs(min(change, 0)))
    avg_gain = sum(gains) / window
    avg_loss = sum(losses) / window
    if math.isclose(avg_loss, 0):
        return 100.0
    rs = avg_gain / avg_loss
    return 100 - (100 / (1 + rs))


def drawdown_pct(values: list[float]) -> float:
    if not values:
        raise ValueError("drawdown requires values")
    peak = max(values)
    latest = values[-1]
    if math.isclose(peak, 0):
        return 0.0
    return ((peak - latest) / peak) * 100


def realized_volatility(values: list[float], window: int = 20) -> float:
    if len(values) <= window:
        raise ValueError("not enough values for volatility")
    returns = []
    recent = values[-window - 1 :]
    for previous, current in zip(recent[:-1], recent[1:]):
        returns.append((current / previous) - 1)
    mean = sum(returns) / len(returns)
    variance = sum((item - mean) ** 2 for item in returns) / len(returns)
    return math.sqrt(variance)
```

- [ ] **Step 5: Implement sample data**

Create `Borsa/market-signals/src/market_signals/sample_data.py`:

```python
from __future__ import annotations

from datetime import date, timedelta

from .models import PricePoint


def _series(start: float, step: float, count: int = 260) -> list[PricePoint]:
    first = date(2025, 7, 1)
    return [
        PricePoint(date=(first + timedelta(days=index)).isoformat(), close=round(start + step * index, 4))
        for index in range(count)
    ]


def rising_series() -> list[PricePoint]:
    return _series(100.0, 0.35)


def falling_series() -> list[PricePoint]:
    return _series(180.0, -0.35)


def default_market_data() -> dict[str, list[PricePoint]]:
    return {
        "tefas_yay": rising_series(),
        "gold_try": _series(2500.0, 1.4),
        "silver_try": _series(30.0, -0.01),
    }
```

- [ ] **Step 6: Implement strategy**

Create `Borsa/market-signals/src/market_signals/strategy.py`:

```python
from __future__ import annotations

from .indicators import drawdown_pct, ema, realized_volatility, rsi, sma
from .models import Confidence, PricePoint, Signal, SignalLabel


def generate_signal(instrument_id: str, label: str, points: list[PricePoint]) -> Signal:
    closes = [point.close for point in points]
    latest = closes[-1]
    asof = points[-1].date

    if len(closes) < 200:
        return Signal(instrument_id, SignalLabel.BEKLE, Confidence.DUSUK, latest, "Warming up: 200 daily values required", asof)

    sma_50 = sma(closes, 50)
    sma_200 = sma(closes, 200)
    ema_50 = ema(closes, 50)
    rsi_14 = rsi(closes, 14)
    dd = drawdown_pct(closes[-120:])
    vol = realized_volatility(closes, 20)

    if latest < sma_200 and dd >= 12:
        return Signal(
            instrument_id,
            SignalLabel.NAKDE_GEC,
            Confidence.YUKSEK,
            latest,
            f"{label}: close below SMA200 and drawdown {dd:.2f}%",
            asof,
        )

    if latest < sma_50 or rsi_14 >= 78:
        return Signal(
            instrument_id,
            SignalLabel.AZALT,
            Confidence.ORTA,
            latest,
            f"{label}: close {latest:.2f}, SMA50 {sma_50:.2f}, RSI14 {rsi_14:.2f}",
            asof,
        )

    if latest > sma_50 and sma_50 > sma_200 and 45 <= rsi_14 <= 75:
        return Signal(
            instrument_id,
            SignalLabel.AL,
            Confidence.ORTA if vol > 0.02 else Confidence.YUKSEK,
            latest,
            f"{label}: trend aligned; close {latest:.2f}, SMA50 {sma_50:.2f}, EMA50 {ema_50:.2f}, RSI14 {rsi_14:.2f}",
            asof,
        )

    return Signal(
        instrument_id,
        SignalLabel.BEKLE,
        Confidence.DUSUK,
        latest,
        f"{label}: mixed signal; close {latest:.2f}, SMA50 {sma_50:.2f}, SMA200 {sma_200:.2f}, RSI14 {rsi_14:.2f}",
        asof,
    )
```

- [ ] **Step 7: Run tests**

Run:

```powershell
python -m pytest tests/test_indicators.py tests/test_strategy.py -v
```

Expected: PASS.

### Task 4: Add Reports, Alerts, and CLI Execution

**Files:**
- Create: `Borsa/market-signals/src/market_signals/reports.py`
- Create: `Borsa/market-signals/src/market_signals/alerts.py`
- Modify: `Borsa/market-signals/src/market_signals/cli.py`
- Modify: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Add command execution test**

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
from market_signals.cli import main


def test_run_daily_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["run-daily"])

    assert result == 0
    assert list((tmp_path / "data" / "reports").glob("daily-*.md"))
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
python -m pytest tests/test_cli.py::test_run_daily_writes_report -v
```

Expected: FAIL because `run-daily` does not write reports yet.

- [ ] **Step 3: Implement report rendering**

Create `Borsa/market-signals/src/market_signals/reports.py`:

```python
from __future__ import annotations

from datetime import datetime
from pathlib import Path

from .models import Signal
from .storage import ensure_runtime_dirs


def render_daily(signals: list[Signal]) -> str:
    lines = [
        "# Borsa Daily Signal Report",
        "",
        "Private research and decision-support output. This is not investment advice.",
        "",
    ]
    for signal in signals:
        lines.extend(
            [
                f"## {signal.instrument_id}",
                f"- Date: {signal.asof}",
                f"- Signal: {signal.label.value}",
                f"- Confidence: {signal.confidence.value}",
                f"- Close: {signal.close:.4f}",
                f"- Reason: {signal.reason}",
                "",
            ]
        )
    lines.append("Manual order review window: TEFAS cutoff context is 13:30 Istanbul time.")
    return "\n".join(lines) + "\n"


def write_daily_report(root: Path, signals: list[Signal]) -> Path:
    ensure_runtime_dirs(root)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    path = root / "data" / "reports" / f"daily-{stamp}.md"
    path.write_text(render_daily(signals), encoding="utf-8")
    return path
```

- [ ] **Step 4: Implement alert adapter**

Create `Borsa/market-signals/src/market_signals/alerts.py`:

```python
from __future__ import annotations

import os
from pathlib import Path

import requests

from .models import Signal
from .storage import ensure_runtime_dirs


def format_alert(signals: list[Signal]) -> str:
    lines = [
        "Borsa sinyal raporu",
        "Bu mesaj yatirim tavsiyesi degildir; manuel karar destegi icindir.",
        "",
    ]
    for signal in signals:
        lines.append(f"{signal.instrument_id}: {signal.label.value} ({signal.confidence.value}) - {signal.reason}")
    lines.append("")
    lines.append("TEFAS cutoff baglami: 13:30 TSİ oncesi manuel kontrol.")
    return "\n".join(lines)


def send_telegram(message: str) -> None:
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        raise RuntimeError("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required")
    response = requests.post(
        f"https://api.telegram.org/bot{token}/sendMessage",
        json={"chat_id": chat_id, "text": message},
        timeout=20,
    )
    response.raise_for_status()


def alert(root: Path, signals: list[Signal], dry_run: bool = True) -> Path:
    ensure_runtime_dirs(root)
    message = format_alert(signals)
    path = root / "data" / "logs" / "last-alert.txt"
    path.write_text(message, encoding="utf-8")
    if not dry_run and os.getenv("MARKET_SIGNALS_ALERTS_ENABLED", "false").lower() == "true":
        send_telegram(message)
    return path
```

- [ ] **Step 5: Wire CLI**

Replace `Borsa/market-signals/src/market_signals/cli.py` with:

```python
from __future__ import annotations

import argparse
import os
from pathlib import Path

from .alerts import alert
from .reports import write_daily_report
from .sample_data import default_market_data
from .settings import PROJECT_ROOT
from .storage import append_signal_log, ensure_runtime_dirs
from .strategy import generate_signal


def runtime_root() -> Path:
    return Path(os.getenv("MARKET_SIGNALS_ROOT", PROJECT_ROOT))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="market-signals")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("run-daily")
    subparsers.add_parser("run-weekly-audit")
    subparsers.add_parser("collect")
    subparsers.add_parser("validate-data")
    subparsers.add_parser("compute-indicators")
    subparsers.add_parser("generate-signals")
    subparsers.add_parser("backtest")
    subparsers.add_parser("report")

    alert_parser = subparsers.add_parser("alert")
    alert_parser.add_argument("--dry-run", action="store_true")
    alert_parser.add_argument("--channel", default="telegram")

    return parser


def generate_all_signals():
    labels = {
        "tefas_yay": "TEFAS YAY",
        "gold_try": "Altin TRY",
        "silver_try": "Gumus TRY",
    }
    return [
        generate_signal(instrument_id, labels[instrument_id], points)
        for instrument_id, points in default_market_data().items()
    ]


def run_daily(root: Path) -> int:
    ensure_runtime_dirs(root)
    signals = generate_all_signals()
    for signal in signals:
        append_signal_log(root, signal)
    report_path = write_daily_report(root, signals)
    alert(root, signals, dry_run=True)
    print(f"Wrote daily report: {report_path}")
    return 0


def run_weekly_audit(root: Path) -> int:
    ensure_runtime_dirs(root)
    signals = generate_all_signals()
    report_path = write_daily_report(root, signals)
    audit_path = root / "data" / "reports" / "weekly-audit.md"
    audit_path.write_text(
        "# Weekly Audit\n\n"
        "Private decision-support audit. This is not investment advice.\n\n"
        f"Signals reviewed: {len(signals)}\n"
        f"Latest report: {report_path.name}\n",
        encoding="utf-8",
    )
    print(f"Wrote weekly audit: {audit_path}")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    root = runtime_root()

    if args.command == "run-daily":
        return run_daily(root)
    if args.command == "run-weekly-audit":
        return run_weekly_audit(root)
    if args.command == "alert":
        return 0 if alert(root, generate_all_signals(), dry_run=args.dry_run) else 1

    ensure_runtime_dirs(root)
    print(f"{args.command}: command placeholder completed for MVP")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 6: Run tests**

Run:

```powershell
python -m pytest tests/test_cli.py tests/test_strategy.py tests/test_indicators.py -v
```

Expected: PASS.

### Task 5: Verify Hermes Command Compatibility

**Files:**
- Modify: `Borsa/market-signals/README.md`

- [ ] **Step 1: Run daily command locally**

Run:

```powershell
cd D:\A-klasor\Estranova\Borsa\market-signals
python -m market_signals run-daily
```

Expected:

```text
Wrote daily report: ...
```

- [ ] **Step 2: Run weekly audit locally**

Run:

```powershell
python -m market_signals run-weekly-audit
```

Expected:

```text
Wrote weekly audit: ...
```

- [ ] **Step 3: Confirm output files**

Run:

```powershell
Get-ChildItem -Recurse .\data\reports, .\data\logs
```

Expected: At least one `daily-*.md`, `weekly-audit.md`, `signals.jsonl`, and `last-alert.txt`.

- [ ] **Step 4: Document Hermes activation notes**

Append to `Borsa/market-signals/README.md`:

```markdown
## Hermes Activation Checklist

Keep Hermes cron jobs paused until all checks pass:

- `python -m pytest -v` passes.
- `python -m market_signals run-daily` writes a report.
- `python -m market_signals alert --dry-run` writes `data/logs/last-alert.txt`.
- `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are configured outside git.
- `MARKET_SIGNALS_ALERTS_ENABLED=true` is set only after dry-run review.

The Telegram message is informational and must not be read as an instruction to buy, sell, or hold.
```

- [ ] **Step 5: Run full verification**

Run:

```powershell
python -m pytest -v
python -m market_signals run-daily
python -m market_signals run-weekly-audit
```

Expected: tests pass and both commands write reports.

## Self-Review

Spec coverage:
- Private isolated placement: covered by file structure and no-touch list.
- Hermes cron compatibility: covered by `run-daily`, `run-weekly-audit`, and `alert` commands.
- Telegram/Telegraf messaging: covered by `alerts.py` with dry-run first and env-gated real send.
- Safety framing: covered in README, report, and alert text.
- Deterministic MVP signals: covered by indicator and strategy tasks.

Placeholder scan:
- No task uses `TBD`, `TODO`, or vague "implement later" language.
- Live TEFAS/Yahoo collectors are intentionally out of MVP scope; sample data keeps cron command surfaces testable now.

Type consistency:
- `SignalLabel`, `Confidence`, `PricePoint`, and `Signal` names are consistent across tasks.
- CLI commands match Hermes suggested cron prompts: `run-daily`, `run-weekly-audit`, and `alert`.
