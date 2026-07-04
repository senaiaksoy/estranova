# Market Portfolio Decision Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend `Borsa/market-signals` so it can value the user's portfolio with current/last-known prices, project YLB into YAY, and produce Turkish decision-support reports for YAY and physical gold without issuing personal investment instructions.

**Architecture:** Add focused portfolio modules beside the existing signal engine: `portfolio.py` for holdings/projections, `prices.py` for price snapshots and provider interfaces, `allocation.py` for rule-based model ranges, and `portfolio_reports.py` for Turkish Markdown output. CLI commands call these modules without changing the existing Hermes `run-daily` flow until the portfolio report is verified.

**Tech Stack:** Python 3.12, dataclasses, `requests`, `pytest`, existing `market_signals` package layout, Markdown reports under `Borsa/market-signals/data/reports`.

---

## File Structure

- Create `Borsa/market-signals/src/market_signals/prices.py`: price snapshot dataclasses, mockable provider protocol, static fallback provider for tests, live HTTP provider skeleton with safe failure.
- Create `Borsa/market-signals/src/market_signals/portfolio.py`: holdings, valuation rows, total value and YLB -> YAY projection.
- Create `Borsa/market-signals/src/market_signals/allocation.py`: rule-based model weight ranges by asset role and signal label.
- Create `Borsa/market-signals/src/market_signals/portfolio_reports.py`: Turkish portfolio Markdown report.
- Modify `Borsa/market-signals/src/market_signals/cli.py`: add `portfolio-report` command.
- Modify `Borsa/market-signals/config/instruments.yaml`: Turkish labels for gold/silver and portfolio symbols if needed.
- Create `Borsa/market-signals/tests/test_prices.py`.
- Create `Borsa/market-signals/tests/test_portfolio.py`.
- Create `Borsa/market-signals/tests/test_allocation.py`.
- Create `Borsa/market-signals/tests/test_portfolio_reports.py`.
- Modify `Borsa/market-signals/tests/test_cli.py`.

---

### Task 1: Price Snapshot Model

**Files:**
- Create: `Borsa/market-signals/src/market_signals/prices.py`
- Test: `Borsa/market-signals/tests/test_prices.py`

- [ ] **Step 1: Write the failing tests**

```python
# Borsa/market-signals/tests/test_prices.py
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_static_provider_returns_known_price():
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot(symbol="YAY", price=1867.83, currency="TRY", source="test", asof="2026-07-03"),
        }
    )

    snapshot = provider.get("YAY")

    assert snapshot is not None
    assert snapshot.price == 1867.83
    assert snapshot.source == "test"


def test_static_provider_returns_none_for_unknown_symbol():
    provider = StaticPriceProvider({})

    assert provider.get("Z30EA") is None
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_prices.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.prices'`.

- [ ] **Step 3: Implement minimal price model**

```python
# Borsa/market-signals/src/market_signals/prices.py
from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol


@dataclass(frozen=True)
class PriceSnapshot:
    symbol: str
    price: float
    currency: str
    source: str
    asof: str
    stale: bool = False


class PriceProvider(Protocol):
    def get(self, symbol: str) -> PriceSnapshot | None:
        ...


class StaticPriceProvider:
    def __init__(self, prices: dict[str, PriceSnapshot]) -> None:
        self._prices = prices

    def get(self, symbol: str) -> PriceSnapshot | None:
        return self._prices.get(symbol)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_prices.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/prices.py Borsa/market-signals/tests/test_prices.py
git commit -m "Add price snapshot provider model"
```

---

### Task 2: Portfolio Holdings And Valuation

**Files:**
- Create: `Borsa/market-signals/src/market_signals/portfolio.py`
- Test: `Borsa/market-signals/tests/test_portfolio.py`

- [ ] **Step 1: Write the failing tests**

```python
# Borsa/market-signals/tests/test_portfolio.py
from market_signals.portfolio import Holding, value_holdings
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_value_holdings_calculates_market_values_and_weights():
    holdings = [
        Holding(id="yay", symbol="YAY", label="YAY", quantity=2, asset_class="tefas_fund", role="growth"),
        Holding(id="gold", symbol="GRAM_ALTIN", label="Fiziki altın", quantity=1000, asset_class="physical_gold", role="defensive"),
    ]
    prices = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 10.0, "TRY", "test", "2026-07-04"),
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
        }
    )

    result = value_holdings(holdings, prices)

    assert result.total_value == 6_000_020
    assert result.rows[0].market_value == 20
    assert result.rows[1].market_value == 6_000_000
    assert round(result.rows[1].weight_pct, 4) == round(6_000_000 / 6_000_020 * 100, 4)


def test_value_holdings_marks_missing_price_without_stopping_report():
    holdings = [
        Holding(id="z30ea", symbol="Z30EA", label="Z30EA", quantity=2758, asset_class="equity_derivative", role="transition"),
    ]

    result = value_holdings(holdings, StaticPriceProvider({}))

    assert result.total_value == 0
    assert result.rows[0].missing_price is True
    assert result.rows[0].market_value is None
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.portfolio'`.

- [ ] **Step 3: Implement portfolio valuation**

```python
# Borsa/market-signals/src/market_signals/portfolio.py
from __future__ import annotations

from dataclasses import dataclass

from .prices import PriceProvider, PriceSnapshot


@dataclass(frozen=True)
class Holding:
    id: str
    symbol: str
    label: str
    quantity: float
    asset_class: str
    role: str
    pending_action: str = "none"
    notes: str = ""


@dataclass(frozen=True)
class ValuationRow:
    holding: Holding
    price: PriceSnapshot | None
    market_value: float | None
    weight_pct: float
    missing_price: bool


@dataclass(frozen=True)
class PortfolioValuation:
    rows: list[ValuationRow]
    total_value: float


def value_holdings(holdings: list[Holding], provider: PriceProvider) -> PortfolioValuation:
    partial_rows: list[tuple[Holding, PriceSnapshot | None, float | None]] = []
    total = 0.0
    for holding in holdings:
        price = provider.get(holding.symbol)
        market_value = None if price is None else holding.quantity * price.price
        if market_value is not None:
            total += market_value
        partial_rows.append((holding, price, market_value))

    rows = [
        ValuationRow(
            holding=holding,
            price=price,
            market_value=market_value,
            weight_pct=0.0 if market_value is None or total == 0 else market_value / total * 100,
            missing_price=price is None,
        )
        for holding, price, market_value in partial_rows
    ]
    return PortfolioValuation(rows=rows, total_value=total)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/portfolio.py Borsa/market-signals/tests/test_portfolio.py
git commit -m "Add portfolio valuation model"
```

---

### Task 3: Default User Portfolio And YLB Projection

**Files:**
- Modify: `Borsa/market-signals/src/market_signals/portfolio.py`
- Test: `Borsa/market-signals/tests/test_portfolio.py`

- [ ] **Step 1: Write the failing tests**

Append to `Borsa/market-signals/tests/test_portfolio.py`:

```python
from market_signals.portfolio import default_user_holdings, project_pending_ylb_to_yay


def test_default_user_holdings_include_one_kg_physical_gold_and_z30ea():
    holdings = default_user_holdings()

    by_id = {holding.id: holding for holding in holdings}
    assert by_id["physical_gold"].quantity == 1000
    assert by_id["z30ea"].symbol == "Z30EA"
    assert by_id["ylb"].pending_action == "convert_to_yay"


def test_project_pending_ylb_to_yay_moves_ylb_market_value_into_yay_quantity():
    holdings = default_user_holdings()
    prices = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 100.0, "TRY", "test", "2026-07-04"),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "test", "2026-07-04"),
        }
    )

    projected = project_pending_ylb_to_yay(holdings, prices)
    by_id = {holding.id: holding for holding in projected}

    assert by_id["ylb"].quantity == 0
    assert by_id["yay"].quantity == 2576 + (2333374 / 100)
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio.py -v
```

Expected: FAIL with `ImportError` for `default_user_holdings`.

- [ ] **Step 3: Implement default holdings and projection**

Append to `Borsa/market-signals/src/market_signals/portfolio.py`:

```python
def default_user_holdings() -> list[Holding]:
    return [
        Holding("gmstr", "GMSTR", "GMSTR gümüş BYF", 7680, "equity_derivative", "transition", "exit_to_yft", "Uygun fiyatta YFT'ye geçiş adayı."),
        Holding("z30ea", "Z30EA", "Z30EA", 2758, "equity_derivative", "transition", "exit_to_yft", "Tam sembol doğrulanamazsa manuel fiyat bekler."),
        Holding("yay", "YAY", "YAY / YFAY1", 2576, "tefas_fund", "growth", "none", "Ana büyüme pozisyonu."),
        Holding("yft", "YFT", "YFT / SERLF", 82255, "money_market_fund", "cash_parking", "none", "Günlük para piyasası park alanı."),
        Holding("ylb", "YLB", "YLB / YLBL bloke", 2333374, "blocked_cash", "transition", "convert_to_yay", "Pazartesi YAY alımına dönecek bekleyen tutar."),
        Holding("physical_gold", "GRAM_ALTIN", "Fiziki altın", 1000, "physical_gold", "defensive", "none", "1 kg fiziki altın."),
    ]


def project_pending_ylb_to_yay(holdings: list[Holding], provider: PriceProvider) -> list[Holding]:
    ylb = next((holding for holding in holdings if holding.id == "ylb"), None)
    yay = next((holding for holding in holdings if holding.id == "yay"), None)
    if ylb is None or yay is None:
        return holdings

    ylb_price = provider.get(ylb.symbol)
    yay_price = provider.get(yay.symbol)
    if ylb_price is None or yay_price is None or yay_price.price == 0:
        return holdings

    ylb_value = ylb.quantity * ylb_price.price
    extra_yay_quantity = ylb_value / yay_price.price
    projected: list[Holding] = []
    for holding in holdings:
        if holding.id == "yay":
            projected.append(Holding(**{**holding.__dict__, "quantity": holding.quantity + extra_yay_quantity, "notes": holding.notes + " YLB projeksiyonu eklendi."}))
        elif holding.id == "ylb":
            projected.append(Holding(**{**holding.__dict__, "quantity": 0, "notes": holding.notes + " Projeksiyonda YAY'a taşındı."}))
        else:
            projected.append(holding)
    return projected
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/portfolio.py Borsa/market-signals/tests/test_portfolio.py
git commit -m "Add default portfolio and YLB projection"
```

---

### Task 4: Model Allocation Ranges

**Files:**
- Create: `Borsa/market-signals/src/market_signals/allocation.py`
- Test: `Borsa/market-signals/tests/test_allocation.py`

- [ ] **Step 1: Write the failing tests**

```python
# Borsa/market-signals/tests/test_allocation.py
from market_signals.allocation import model_range_for_signal
from market_signals.models import Confidence, Signal, SignalLabel


def test_yay_al_signal_gets_growth_range_without_single_order_instruction():
    signal = Signal("tefas_yay", SignalLabel.AL, Confidence.ORTA, 100.0, "trend uyumlu", "2026-07-04")

    result = model_range_for_signal("growth", signal)

    assert result.min_pct == 35
    assert result.max_pct == 50
    assert "emir talimatı değildir" in result.note


def test_defensive_gold_wait_signal_gets_neutral_range():
    signal = Signal("gold_try", SignalLabel.BEKLE, Confidence.DUSUK, 6000.0, "RSI14 aşırı uzamış", "2026-07-04")

    result = model_range_for_signal("defensive", signal)

    assert result.min_pct == 15
    assert result.max_pct == 30
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_allocation.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.allocation'`.

- [ ] **Step 3: Implement model ranges**

```python
# Borsa/market-signals/src/market_signals/allocation.py
from __future__ import annotations

from dataclasses import dataclass

from .models import Signal, SignalLabel


@dataclass(frozen=True)
class ModelRange:
    role: str
    min_pct: float
    max_pct: float
    note: str


def model_range_for_signal(role: str, signal: Signal | None) -> ModelRange:
    label = signal.label if signal else SignalLabel.BEKLE

    if role == "growth":
        if label == SignalLabel.AL:
            return ModelRange(role, 35, 50, "YAY büyüme aralığı güçlenir; bu emir talimatı değildir.")
        if label == SignalLabel.AZALT:
            return ModelRange(role, 15, 30, "YAY ağırlığı temkinli aralığa iner; bu emir talimatı değildir.")
        if label == SignalLabel.NAKDE_GEC:
            return ModelRange(role, 0, 15, "YAY için sermaye koruma aralığı; bu emir talimatı değildir.")
        return ModelRange(role, 25, 40, "YAY izleme aralığı; bu emir talimatı değildir.")

    if role == "defensive":
        if label == SignalLabel.AL:
            return ModelRange(role, 25, 40, "Fiziki altın savunma aralığı artar; bu emir talimatı değildir.")
        if label == SignalLabel.AZALT:
            return ModelRange(role, 10, 25, "Fiziki altın için kısmi azaltım izleme aralığı; bu emir talimatı değildir.")
        return ModelRange(role, 15, 30, "Fiziki altın nötr savunma aralığı; bu emir talimatı değildir.")

    if role == "cash_parking":
        return ModelRange(role, 10, 35, "YFT nakit park ve geçiş aralığıdır; bu emir talimatı değildir.")

    return ModelRange(role, 0, 10, "Geçiş pozisyonu izleme aralığıdır; bu emir talimatı değildir.")
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_allocation.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/allocation.py Borsa/market-signals/tests/test_allocation.py
git commit -m "Add rule based model allocation ranges"
```

---

### Task 5: Portfolio Report Renderer

**Files:**
- Create: `Borsa/market-signals/src/market_signals/portfolio_reports.py`
- Test: `Borsa/market-signals/tests/test_portfolio_reports.py`

- [ ] **Step 1: Write the failing tests**

```python
# Borsa/market-signals/tests/test_portfolio_reports.py
from market_signals.portfolio import default_user_holdings, value_holdings
from market_signals.portfolio_reports import render_portfolio_report
from market_signals.prices import PriceSnapshot, StaticPriceProvider


def test_portfolio_report_is_turkish_and_includes_projection_warning():
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 100.0, "TRY", "test", "2026-07-04"),
            "YFT": PriceSnapshot("YFT", 1.0, "TRY", "test", "2026-07-04"),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "test", "2026-07-04"),
            "GMSTR": PriceSnapshot("GMSTR", 550.0, "TRY", "test", "2026-07-04"),
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6000.0, "TRY", "test", "2026-07-04"),
        }
    )
    valuation = value_holdings(default_user_holdings(), provider)

    report = render_portfolio_report(valuation, missing_symbols=["Z30EA"])

    assert "# Portföy Karar-Destek Raporu" in report
    assert "Bu rapor yatırım tavsiyesi değildir" in report
    assert "Fiziki altın" in report
    assert "1000.0000" in report
    assert "Z30EA" in report
    assert "fiyat doğrulanamadı" in report
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio_reports.py -v
```

Expected: FAIL with `ModuleNotFoundError: No module named 'market_signals.portfolio_reports'`.

- [ ] **Step 3: Implement renderer**

```python
# Borsa/market-signals/src/market_signals/portfolio_reports.py
from __future__ import annotations

from .portfolio import PortfolioValuation


def _money(value: float | None) -> str:
    if value is None:
        return "fiyat doğrulanamadı"
    return f"{value:,.2f} TL"


def render_portfolio_report(valuation: PortfolioValuation, missing_symbols: list[str] | None = None) -> str:
    missing_symbols = missing_symbols or []
    lines = [
        "# Portföy Karar-Destek Raporu",
        "",
        "Bu rapor yatırım tavsiyesi değildir; manuel karar desteği ve kontrol listesi olarak üretilir.",
        "",
        "## Portföy Özeti",
        "",
        f"- Değerlenebilen toplam portföy: {_money(valuation.total_value)}",
        "- Fiziki altın miktarı: 1000.0000 gram",
        "",
        "## Varlık Tablosu",
        "",
        "| Varlık | Adet/Gram | Fiyat | Değer | Ağırlık | Not |",
        "|---|---:|---:|---:|---:|---|",
    ]
    for row in valuation.rows:
        price_text = "fiyat doğrulanamadı" if row.price is None else f"{row.price.price:,.4f} {row.price.currency}"
        value_text = _money(row.market_value)
        note = row.holding.notes
        if row.missing_price:
            note = f"{note} Fiyat doğrulanamadı; manuel kontrol gerekir.".strip()
        lines.append(
            f"| {row.holding.label} | {row.holding.quantity:.4f} | {price_text} | {value_text} | {row.weight_pct:.2f}% | {note} |"
        )

    lines.extend(
        [
            "",
            "## Bekleyen İşlem Projeksiyonu",
            "",
            "YLB satırı Pazartesi YAY alımına dönecek bekleyen tutar olarak izlenir. Projeksiyon raporu emir talimatı değildir.",
            "",
            "## Veri Uyarıları",
            "",
        ]
    )
    if missing_symbols:
        for symbol in missing_symbols:
            lines.append(f"- {symbol}: fiyat doğrulanamadı.")
    else:
        lines.append("- Fiyatı doğrulanamayan sembol yok.")

    lines.extend(
        [
            "",
            "## Manuel Kontrol",
            "",
            "TEFAS emir kesim saati bağlamı 13:30 İstanbul saati olarak izlenir. Nihai karar kullanıcıya aittir.",
        ]
    )
    return "\n".join(lines) + "\n"
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_portfolio_reports.py -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/portfolio_reports.py Borsa/market-signals/tests/test_portfolio_reports.py
git commit -m "Add Turkish portfolio decision report"
```

---

### Task 6: CLI Command For Portfolio Report

**Files:**
- Modify: `Borsa/market-signals/src/market_signals/cli.py`
- Test: `Borsa/market-signals/tests/test_cli.py`

- [ ] **Step 1: Write the failing tests**

Append to `Borsa/market-signals/tests/test_cli.py`:

```python
def test_portfolio_report_command_writes_report(tmp_path, monkeypatch):
    monkeypatch.setenv("MARKET_SIGNALS_ROOT", str(tmp_path))

    result = main(["portfolio-report"])

    assert result == 0
    reports = list((tmp_path / "data" / "reports").glob("portfolio-*.md"))
    assert reports
    text = reports[0].read_text(encoding="utf-8")
    assert "# Portföy Karar-Destek Raporu" in text
    assert "Fiziki altın" in text
    assert "Z30EA" in text
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
py -3.12 -m pytest tests/test_cli.py::test_portfolio_report_command_writes_report -v
```

Expected: FAIL because `portfolio-report` is not a known command.

- [ ] **Step 3: Implement command with static fallback prices**

Modify `Borsa/market-signals/src/market_signals/cli.py`:

```python
from datetime import datetime

from .portfolio import default_user_holdings, value_holdings
from .portfolio_reports import render_portfolio_report
from .prices import PriceSnapshot, StaticPriceProvider
```

Add parser:

```python
subparsers.add_parser("portfolio-report")
```

Add command helper:

```python
def run_portfolio_report(root: Path) -> int:
    ensure_runtime_dirs(root)
    asof = datetime.now().strftime("%Y-%m-%d")
    provider = StaticPriceProvider(
        {
            "YAY": PriceSnapshot("YAY", 1867.83, "TRY", "fallback", asof, stale=True),
            "YFT": PriceSnapshot("YFT", 1.0, "TRY", "fallback", asof, stale=True),
            "YLB": PriceSnapshot("YLB", 1.0, "TRY", "fallback", asof, stale=True),
            "GMSTR": PriceSnapshot("GMSTR", 569.50, "TRY", "fallback", asof, stale=True),
            "GRAM_ALTIN": PriceSnapshot("GRAM_ALTIN", 6277.78, "TRY", "fallback", asof, stale=True),
        }
    )
    holdings = default_user_holdings()
    valuation = value_holdings(holdings, provider)
    missing_symbols = [row.holding.symbol for row in valuation.rows if row.missing_price]
    report = render_portfolio_report(valuation, missing_symbols)
    path = root / "data" / "reports" / f"portfolio-{datetime.now().strftime('%Y%m%d-%H%M%S-%f')}.md"
    path.write_text(report, encoding="utf-8")
    print(f"Portföy raporu yazıldı: {path}")
    return 0
```

Add dispatch:

```python
if args.command == "portfolio-report":
    return run_portfolio_report(root)
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
py -3.12 -m pytest tests/test_cli.py::test_portfolio_report_command_writes_report -v
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Borsa/market-signals/src/market_signals/cli.py Borsa/market-signals/tests/test_cli.py
git commit -m "Add portfolio report CLI command"
```

---

### Task 7: Fresh Verification And Hermes Readiness

**Files:**
- Modify only if tests reveal a defect.

- [ ] **Step 1: Run Python tests**

Run:

```powershell
py -3.12 -m pytest -v
```

Expected: all tests pass.

- [ ] **Step 2: Run portfolio report locally**

Run:

```powershell
py -3.12 -m market_signals portfolio-report
```

Expected: exit code 0 and `data/reports/portfolio-*.md` written.

- [ ] **Step 3: Run Hermes wrapper**

Run:

```powershell
wsl -e /bin/sh /home/kc3/.local/bin/market-signals-hermes portfolio-report
```

Expected: exit code 0 and a portfolio report written. WSL path translation warnings for Windsurf/Cursor may appear and do not fail the command.

- [ ] **Step 4: Run site build gate**

Run:

```powershell
npm run build:ci
```

Expected: exit code 0. Existing long-sentence SEO warnings may remain.

- [ ] **Step 5: Commit final fixes if any**

```powershell
git status --short
git add Borsa/market-signals
git commit -m "Verify portfolio decision support flow"
```

Only commit if verification required code or test changes after Task 6.

---

## Self-Review

- Spec coverage: price snapshots, default portfolio, 1000 g physical gold, Z30EA missing-price fallback, YLB -> YAY projection, model allocation ranges, Turkish report, CLI, tests and Hermes verification are covered.
- Placeholder scan: all steps contain concrete commands, file paths, expected failures, and implementation snippets.
- Type consistency: `PriceSnapshot`, `StaticPriceProvider`, `Holding`, `PortfolioValuation`, `ModelRange`, and report function names are defined before use.
- Scope note: live scraping/API integration is intentionally limited to provider architecture and fallback prices in this plan. After the report shape is stable, a second plan should wire reliable live TEFAS/BIST/altın providers source by source.
