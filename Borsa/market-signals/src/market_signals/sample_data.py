from __future__ import annotations

import csv
from datetime import date, timedelta
import os
from pathlib import Path
from typing import List

from .models import PricePoint
from .settings import PROJECT_ROOT


DATA_DIR = PROJECT_ROOT / "data" / "raw"


def _series(start: float, step: float, count: int = 260) -> List[PricePoint]:
    first = date(2025, 7, 1)
    return [
        PricePoint(date=(first + timedelta(days=index)).isoformat(), close=round(start + step * index, 4))
        for index in range(count)
    ]


def rising_series() -> List[PricePoint]:
    return _series(100.0, 0.35)


def falling_series() -> List[PricePoint]:
    return _series(180.0, -0.35)


def load_price_points_from_csv(symbol: str, *, data_dir: Path | None = None) -> List[PricePoint]:
    """Load price points from a CSV file in the data/raw directory.

    Expected CSV format: header with 'date' and 'price' columns.
    """
    file_path = (data_dir or DATA_DIR) / f"{symbol}.csv"
    if not file_path.exists():
        return []
    points: List[PricePoint] = []
    try:
        with file_path.open("r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                try:
                    d = date.fromisoformat(row["date"])
                    p = float(row["price"])
                    points.append(PricePoint(date=d.isoformat(), close=p))
                except (ValueError, KeyError):
                    # Skip malformed rows
                    continue
    except Exception:
        # If any error occurs, return empty list to fall back to synthetic data
        return []
    return points


def default_market_data(root: Path | None = None) -> dict[str, list[PricePoint]]:
    """Return market data for the three instruments.

    Attempts to load from CSV files under ``root/data/raw`` (or the project
    default if ``root`` is omitted); falls back to synthetic data if files are
    missing or empty.
    """
    if root is None:
        root = Path(os.getenv("MARKET_SIGNALS_ROOT", PROJECT_ROOT))
    data_dir = (root / "data" / "raw") if root else DATA_DIR
    yay = load_price_points_from_csv("tefas_YAY", data_dir=data_dir)
    gold = load_price_points_from_csv("gold_try", data_dir=data_dir)
    silver = load_price_points_from_csv("silver_try", data_dir=data_dir)

    # If we have data for all three, use it
    if yay and gold and silver:
        return {
            "tefas_yay": yay,
            "gold_try": gold,
            "silver_try": silver,
        }

    # Fallback to synthetic data
    return {
        "tefas_yay": rising_series(),
        "gold_try": _series(2500.0, 1.4),
        "silver_try": _series(30.0, -0.01),
    }
