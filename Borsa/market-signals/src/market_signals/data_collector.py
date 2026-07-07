from __future__ import annotations

import csv
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import List, Tuple
import sys

import yfinance as yf
from pytefas import Crawler

from .settings import PROJECT_ROOT

DATA_DIR = PROJECT_ROOT / "data" / "raw"


def _ensure_data_dir() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)


def _save_to_csv(symbol: str, data: List[Tuple[date, float]]) -> None:
    """Save list of (date, price) to CSV file."""
    _ensure_data_dir()
    file_path = DATA_DIR / f"{symbol}.csv"
    with file_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["date", "price"])
        for d, p in data:
            writer.writerow([d.isoformat(), p])


def fetch_tefas_data(fund_code: str, start_date: date, end_date: date) -> List[Tuple[date, float]]:
    """Fetch historical price data for a TEFAS fund."""
    crawler = Crawler()
    # TEFAS fetch expects strings in YYYY-MM-DD
    df = crawler.fetch(start=start_date.isoformat(), end=end_date.isoformat(), fund_code=fund_code)
    if df.empty:
        return []
    # We expect columns: date, price, ... 
    # The date column is string, convert to date object
    data = []
    for row in df.itertuples():
        d = date.fromisoformat(row.date)
        p = float(row.price)
        data.append((d, p))
    return data


def fetch_yahoo_data(symbol: str, start_date: date, end_date: date) -> List[Tuple[date, float]]:
    """Fetch historical price data for a Yahoo Finance ticker."""
    ticker = yf.Ticker(symbol)
    # Use ISO format strings for start and end
    data = ticker.history(start=start_date.isoformat(), end=end_date.isoformat())
    if data.empty:
        return []
    # Reset index to have Date as a column
    data = data.reset_index()
    result = []
    for _, row in data.iterrows():
        d = row['Date'].date()
        # Use the 'Close' price
        p = float(row['Close'])
        result.append((d, p))
    return result


def compute_gold_try(start_date: date, end_date: date) -> List[Tuple[date, float]]:
    """Compute historical gold price in TRY per gram."""
    # Get gold futures in USD per troy ounce
    gold_usd_per_oz = fetch_yahoo_data("GC=F", start_date, end_date)
    # Get USD/TRY exchange rate
    usd_try = fetch_yahoo_data("USDTRY=X", start_date, end_date)
    # We need to align by date. We'll assume both have the same dates (trading days).
    # Create a dict for USD/TRY for quick lookup
    usd_try_dict = {d: rate for d, rate in usd_try}
    result = []
    for d, price_per_oz in gold_usd_per_oz:
        if d in usd_try_dict:
            # Convert: price per ounce to price per gram: divide by 31.1035
            price_per_gram_usd = price_per_oz / 31.1035
            # Then convert to TRY: multiply by USD/TRY
            price_per_gram_try = price_per_gram_usd * usd_try_dict[d]
            result.append((d, price_per_gram_try))
        else:
            # If missing exchange rate for this date, skip
            pass
    return result


def compute_silver_try(start_date: date, end_date: date) -> List[Tuple[date, float]]:
    """Compute historical silver price in TRY per gram."""
    silver_usd_per_oz = fetch_yahoo_data("SI=F", start_date, end_date)
    usd_try = fetch_yahoo_data("USDTRY=X", start_date, end_date)
    usd_try_dict = {d: rate for d, rate in usd_try}
    result = []
    for d, price_per_oz in silver_usd_per_oz:
        if d in usd_try_dict:
            price_per_gram_usd = price_per_oz / 31.1035
            price_per_gram_try = price_per_gram_usd * usd_try_dict[d]
            result.append((d, price_per_gram_try))
    return result


def fetch_and_store_historical_data(days_back: int = 30) -> None:
    """Fetch historical data for all instruments and store as CSV."""
    end_date = date.today()
    start_date = end_date - timedelta(days=days_back)

    print(f"Fetching data from {start_date} to {end_date}")

    # TEFAS funds
    for fund_code in ["YAY", "YFT", "YLB"]:
        print(f"Fetching TEFAS fund: {fund_code}")
        data = fetch_tefas_data(fund_code, start_date, end_date)
        if data:
            _save_to_csv(f"tefas_{fund_code}", data)
            print(f"  Saved {len(data)} rows for {fund_code}")
        else:
            print(f"  No data for {fund_code}")

    # Gold and Silver (TRY per gram)
    print("Fetching gold and silver data...")
    gold_data = compute_gold_try(start_date, end_date)
    if gold_data:
        _save_to_csv("gold_try", gold_data)
        print(f"  Saved {len(gold_data)} rows for gold_try")
    else:
        print("  No data for gold_try")

    silver_data = compute_silver_try(start_date, end_date)
    if silver_data:
        _save_to_csv("silver_try", silver_data)
        print(f"  Saved {len(silver_data)} rows for silver_try")
    else:
        print("  No data for silver_try")


if __name__ == "__main__":
    # Allow optional command line argument for days_back
    days_back = 30
    if len(sys.argv) > 1:
        try:
            days_back = int(sys.argv[1])
        except ValueError:
            print(f"Invalid days_back value: {sys.argv[1]}. Using default {days_back}.")
    fetch_and_store_historical_data(days_back)