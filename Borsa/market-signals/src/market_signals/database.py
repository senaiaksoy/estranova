from __future__ import annotations

import sqlite3
import json
from pathlib import Path
from datetime import datetime
from .signal_journal import SignalJournalEntry
from .outcome_tracker import OutcomeRecord


def get_db_connection(db_path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn


def init_db(db_path: Path) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    with get_db_connection(db_path) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS signal_journal (
                run_id TEXT,
                asof TEXT,
                instrument_id TEXT,
                symbol TEXT,
                signal_label TEXT,
                confidence TEXT,
                close REAL,
                reason TEXT,
                features TEXT,
                strategy_name TEXT,
                strategy_version TEXT,
                source_status TEXT,
                PRIMARY KEY (run_id, instrument_id, strategy_name, strategy_version)
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS outcomes (
                signal_run_id TEXT,
                instrument_id TEXT,
                signal_label TEXT,
                horizon_days INTEGER,
                entry_close REAL,
                exit_close REAL,
                return_pct REAL,
                max_drawdown_pct REAL,
                max_runup_pct REAL,
                outcome_status TEXT,
                PRIMARY KEY (signal_run_id, instrument_id, signal_label, horizon_days)
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS holdings (
                symbol TEXT PRIMARY KEY,
                quantity REAL,
                cost_price REAL DEFAULT 0.0,
                updated_at TEXT
            )
        """)
        try:
            cursor = conn.execute("PRAGMA table_info(holdings)")
            cols = [row["name"] for row in cursor.fetchall()]
            if "cost_price" not in cols:
                conn.execute("ALTER TABLE holdings ADD COLUMN cost_price REAL DEFAULT 0.0")
        except Exception:
            pass
        conn.execute("""
            CREATE TABLE IF NOT EXISTS cash_flows (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                amount REAL,
                currency TEXT,
                flow_type TEXT,
                description TEXT
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS portfolio_snapshots (
                date TEXT PRIMARY KEY,
                holdings_json TEXT,
                total_value_try REAL,
                total_value_usd REAL,
                usd_try_rate REAL
            )
        """)
        conn.commit()


def save_signal_journal_entry(db_path: Path, entry: SignalJournalEntry) -> None:
    init_db(db_path)
    with get_db_connection(db_path) as conn:
        conn.execute("""
            INSERT OR REPLACE INTO signal_journal (
                run_id, asof, instrument_id, symbol, signal_label, confidence,
                close, reason, features, strategy_name, strategy_version, source_status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            entry.run_id, entry.asof, entry.instrument_id, entry.symbol,
            entry.signal_label, entry.confidence, entry.close, entry.reason,
            json.dumps(entry.features), entry.strategy_name, entry.strategy_version,
            entry.source_status
        ))
        conn.commit()


def read_signal_journal_entries(db_path: Path) -> list[SignalJournalEntry]:
    init_db(db_path)
    entries = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT * FROM signal_journal")
        for row in cursor:
            entries.append(SignalJournalEntry(
                run_id=row["run_id"],
                asof=row["asof"],
                instrument_id=row["instrument_id"],
                symbol=row["symbol"],
                signal_label=row["signal_label"],
                confidence=row["confidence"],
                close=row["close"],
                reason=row["reason"],
                features=json.loads(row["features"]),
                strategy_name=row["strategy_name"],
                strategy_version=row["strategy_version"],
                source_status=row["source_status"]
            ))
    return entries


def save_outcome_records(db_path: Path, records: list[OutcomeRecord]) -> None:
    init_db(db_path)
    with get_db_connection(db_path) as conn:
        for record in records:
            conn.execute("""
                INSERT OR REPLACE INTO outcomes (
                    signal_run_id, instrument_id, signal_label, horizon_days,
                    entry_close, exit_close, return_pct, max_drawdown_pct, max_runup_pct, outcome_status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                record.signal_run_id, record.instrument_id, record.signal_label, record.horizon_days,
                record.entry_close, record.exit_close, record.return_pct,
                record.max_drawdown_pct, record.max_runup_pct, record.outcome_status
            ))
        conn.commit()


def read_outcome_records(db_path: Path) -> list[OutcomeRecord]:
    init_db(db_path)
    records = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT * FROM outcomes")
        for row in cursor:
            records.append(OutcomeRecord(
                signal_run_id=row["signal_run_id"],
                instrument_id=row["instrument_id"],
                signal_label=row["signal_label"],
                horizon_days=row["horizon_days"],
                entry_close=row["entry_close"],
                exit_close=row["exit_close"],
                return_pct=row["return_pct"],
                max_drawdown_pct=row["max_drawdown_pct"],
                max_runup_pct=row["max_runup_pct"],
                outcome_status=row["outcome_status"]
            ))
    return records


def save_holding(db_path: Path, symbol: str, quantity: float, cost_price: float = 0.0) -> None:
    init_db(db_path)
    asof = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with get_db_connection(db_path) as conn:
        conn.execute("""
            INSERT OR REPLACE INTO holdings (symbol, quantity, cost_price, updated_at)
            VALUES (?, ?, ?, ?)
        """, (symbol, quantity, cost_price, asof))
        conn.commit()


def get_holdings(db_path: Path) -> dict[str, float]:
    init_db(db_path)
    holdings = {}
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT symbol, quantity FROM holdings")
        for row in cursor:
            holdings[row["symbol"]] = float(row["quantity"])
    return holdings


def get_holdings_detailed(db_path: Path) -> dict[str, dict[str, float]]:
    init_db(db_path)
    holdings = {}
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT symbol, quantity, cost_price FROM holdings")
        for row in cursor:
            cost_p = float(row["cost_price"]) if row["cost_price"] is not None else 0.0
            holdings[row["symbol"]] = {
                "quantity": float(row["quantity"]),
                "cost_price": cost_p
            }
    return holdings


def add_cash_flow(
    db_path: Path,
    date: str,
    amount: float,
    currency: str,
    flow_type: str,
    description: str = ""
) -> None:
    init_db(db_path)
    with get_db_connection(db_path) as conn:
        conn.execute("""
            INSERT INTO cash_flows (date, amount, currency, flow_type, description)
            VALUES (?, ?, ?, ?, ?)
        """, (date, amount, currency.upper(), flow_type.upper(), description))
        conn.commit()


def get_cash_flows(db_path: Path) -> list[dict]:
    init_db(db_path)
    flows = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT * FROM cash_flows ORDER BY date ASC, id ASC")
        for row in cursor:
            flows.append({
                "id": row["id"],
                "date": row["date"],
                "amount": float(row["amount"]),
                "currency": row["currency"],
                "flow_type": row["flow_type"],
                "description": row["description"]
            })
    return flows


def save_portfolio_snapshot(
    db_path: Path,
    date: str,
    holdings: dict[str, float],
    total_value_try: float,
    total_value_usd: float,
    usd_try_rate: float
) -> None:
    init_db(db_path)
    with get_db_connection(db_path) as conn:
        conn.execute("""
            INSERT OR REPLACE INTO portfolio_snapshots (
                date, holdings_json, total_value_try, total_value_usd, usd_try_rate
            ) VALUES (?, ?, ?, ?, ?)
        """, (
            date, json.dumps(holdings), total_value_try, total_value_usd, usd_try_rate
        ))
        conn.commit()


def get_portfolio_snapshots(db_path: Path) -> list[dict]:
    init_db(db_path)
    snapshots = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("SELECT * FROM portfolio_snapshots ORDER BY date ASC")
        for row in cursor:
            snapshots.append({
                "date": row["date"],
                "holdings": json.loads(row["holdings_json"]),
                "total_value_try": float(row["total_value_try"]),
                "total_value_usd": float(row["total_value_usd"]),
                "usd_try_rate": float(row["usd_try_rate"])
            })
    return snapshots


def init_alarms_table(db_path: Path) -> None:
    """price_alarms tablosunu oluşturur (yoksa)."""
    init_db(db_path)
    with get_db_connection(db_path) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS price_alarms (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                symbol TEXT NOT NULL,
                direction TEXT NOT NULL,  -- 'above' or 'below'
                threshold REAL NOT NULL,
                label TEXT,
                created_at TEXT,
                triggered_at TEXT,
                active INTEGER DEFAULT 1
            )
        """)
        conn.commit()


def add_price_alarm(
    db_path: Path,
    symbol: str,
    threshold: float,
    direction: str,
    label: str = "",
) -> int:
    """Yeni fiyat alarmı ekler. alarm id döner."""
    init_alarms_table(db_path)
    created = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with get_db_connection(db_path) as conn:
        cursor = conn.execute("""
            INSERT INTO price_alarms (symbol, direction, threshold, label, created_at, active)
            VALUES (?, ?, ?, ?, ?, 1)
        """, (symbol.upper(), direction.lower(), threshold, label, created))
        conn.commit()
        return cursor.lastrowid


def get_active_alarms(db_path: Path) -> list[dict]:
    """Aktif (tetiklenmemiş) alarmları döner."""
    init_alarms_table(db_path)
    alarms = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute(
            "SELECT * FROM price_alarms WHERE active = 1 ORDER BY id ASC"
        )
        for row in cursor:
            alarms.append({
                "id": row["id"],
                "symbol": row["symbol"],
                "direction": row["direction"],
                "threshold": float(row["threshold"]),
                "label": row["label"] or "",
                "created_at": row["created_at"],
            })
    return alarms


def mark_alarm_triggered(db_path: Path, alarm_id: int) -> None:
    """Alarmı tetiklenmiş olarak işaretler (deaktif eder)."""
    triggered = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with get_db_connection(db_path) as conn:
        conn.execute(
            "UPDATE price_alarms SET active = 0, triggered_at = ? WHERE id = ?",
            (triggered, alarm_id),
        )
        conn.commit()


def delete_alarm(db_path: Path, alarm_id: int) -> bool:
    """Belirtilen id'li alarmı siler. Silindiyse True döner."""
    with get_db_connection(db_path) as conn:
        result = conn.execute(
            "DELETE FROM price_alarms WHERE id = ?", (alarm_id,)
        )
        conn.commit()
        return result.rowcount > 0


def list_all_alarms(db_path: Path) -> list[dict]:
    """Tüm alarmları (aktif + tetiklenmiş) döner."""
    init_alarms_table(db_path)
    alarms = []
    with get_db_connection(db_path) as conn:
        cursor = conn.execute(
            "SELECT * FROM price_alarms ORDER BY active DESC, id ASC"
        )
        for row in cursor:
            alarms.append({
                "id": row["id"],
                "symbol": row["symbol"],
                "direction": row["direction"],
                "threshold": float(row["threshold"]),
                "label": row["label"] or "",
                "created_at": row["created_at"],
                "triggered_at": row["triggered_at"],
                "active": bool(row["active"]),
            })
    return alarms
