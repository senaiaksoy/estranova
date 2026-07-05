from __future__ import annotations

from pathlib import Path
from datetime import datetime
from .database import get_portfolio_snapshots, get_cash_flows


def calculate_daily_performance_series(
    db_path: Path,
    currency: str = "TRY"
) -> list[dict]:
    """
    Calculates the daily organic return series (TWRR) for the portfolio.
    Returns a list of dicts with:
      - date: YYYY-MM-DD
      - portfolio_value: float
      - daily_return: float
      - cumulative_return: float (TWRR ratio, e.g. 0.05 for 5% return)
    """
    snapshots = get_portfolio_snapshots(db_path)
    if not snapshots:
        return []

    # Get cash flows map by date
    # Format: {date: net_amount_converted_to_selected_currency}
    cash_flows = get_cash_flows(db_path)
    cf_map: dict[str, float] = {}
    for cf in cash_flows:
        cf_date = cf["date"]
        amount = cf["amount"]
        cf_currency = cf["currency"]
        flow_type = cf["flow_type"]
        
        # Determine multiplier (DEPOSIT is positive, WITHDRAW is negative)
        sign = 1.0 if flow_type == "DEPOSIT" else -1.0
        val = amount * sign

        # Convert currency if needed
        # We find exchange rate from portfolio snapshots on that date
        # If not available, we assume 1.0 (or fallback rate)
        if currency.upper() == "TRY" and cf_currency == "USD":
            # Convert USD to TRY using usd_try_rate on that day or fallback
            rate = 1.0
            for snap in snapshots:
                if snap["date"] == cf_date:
                    rate = snap["usd_try_rate"]
                    break
            val = val * rate
        elif currency.upper() == "USD" and cf_currency == "TRY":
            # Convert TRY to USD
            rate = 1.0
            for snap in snapshots:
                if snap["date"] == cf_date:
                    rate = snap["usd_try_rate"]
                    break
            val = val / rate if rate > 0 else 0.0

        cf_map[cf_date] = cf_map.get(cf_date, 0.0) + val

    series = []
    cum_factor = 1.0

    for i, snap in enumerate(snapshots):
        date_str = snap["date"]
        val_col = "total_value_try" if currency.upper() == "TRY" else "total_value_usd"
        v_t = snap[val_col]
        c_t = cf_map.get(date_str, 0.0)

        if i == 0:
            # First day has 0.0 organic return, it establishes the base capital
            r_t = 0.0
        else:
            v_t_prev = snapshots[i - 1][val_col]
            denominator = v_t_prev + c_t
            if denominator > 0:
                r_t = (v_t - denominator) / denominator
            else:
                r_t = 0.0

        cum_factor = cum_factor * (1.0 + r_t)
        
        series.append({
            "date": date_str,
            "portfolio_value": v_t,
            "daily_return": r_t,
            "cumulative_return": cum_factor - 1.0
        })

    return series


def get_performance_summary(
    db_path: Path,
    start_date: str | None = None,
    end_date: str | None = None,
    currency: str = "TRY"
) -> dict:
    """
    Returns a summary of portfolio performance in the given range.
    Includes final TWRR percentage, absolute growth, total deposits, and daily history.
    """
    series = calculate_daily_performance_series(db_path, currency)
    if not series:
        return {
            "twrr_pct": 0.0,
            "start_value": 0.0,
            "end_value": 0.0,
            "net_cash_flow": 0.0,
            "history": []
        }

    # Filter by date range
    filtered = []
    for item in series:
        if start_date and item["date"] < start_date:
            continue
        if end_date and item["date"] > end_date:
            continue
        filtered.append(item)

    if not filtered:
        return {
            "twrr_pct": 0.0,
            "start_value": 0.0,
            "end_value": 0.0,
            "net_cash_flow": 0.0,
            "history": []
        }

    # Re-calculate compounded TWRR purely within the filtered range
    # TWRR = Product of (1 + daily_return) - 1
    comp_factor = 1.0
    # For start value, it's the value of the first day in filtered
    start_value = filtered[0]["portfolio_value"]
    end_value = filtered[-1]["portfolio_value"]

    # Sum all cash flows in the range
    cash_flows = get_cash_flows(db_path)
    net_cf = 0.0
    for cf in cash_flows:
        cf_date = cf["date"]
        if start_date and cf_date < start_date:
            continue
        if end_date and cf_date > end_date:
            continue
        sign = 1.0 if cf["flow_type"] == "DEPOSIT" else -1.0
        val = cf["amount"] * sign
        
        # Currency conversion
        if currency.upper() == "TRY" and cf["currency"] == "USD":
            rate = 1.0
            for snap in get_portfolio_snapshots(db_path):
                if snap["date"] == cf_date:
                    rate = snap["usd_try_rate"]
                    break
            val = val * rate
        elif currency.upper() == "USD" and cf["currency"] == "TRY":
            rate = 1.0
            for snap in get_portfolio_snapshots(db_path):
                if snap["date"] == cf_date:
                    rate = snap["usd_try_rate"]
                    break
            val = val / rate if rate > 0 else 0.0
        
        net_cf += val

    for item in filtered:
        comp_factor *= (1.0 + item["daily_return"])

    twrr_pct = (comp_factor - 1.0) * 100.0

    # Build a clean history for chart plotting
    # Cumulative return inside this range starts at 0%
    range_cum = 1.0
    history = []
    for item in filtered:
        range_cum *= (1.0 + item["daily_return"])
        history.append({
            "date": item["date"],
            "value": item["portfolio_value"],
            "return_pct": (range_cum - 1.0) * 100.0
        })

    return {
        "twrr_pct": round(twrr_pct, 2),
        "start_value": round(start_value, 2),
        "end_value": round(end_value, 2),
        "net_cash_flow": round(net_cf, 2),
        "history": history
    }
