from __future__ import annotations

import os
import requests
from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Protocol

try:
    from pytefas import Crawler
except ImportError:
    Crawler = None


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


class LivePriceProvider:
    def __init__(self, fallback_provider: PriceProvider | None = None) -> None:
        self.fallback_provider = fallback_provider
        self.tefas_crawler = None

    def get(self, symbol: str) -> PriceSnapshot | None:
        # 1. Check if it's a TEFAS fund
        if symbol in {"YAY", "YFT", "YLB"}:
            if Crawler is not None:
                try:
                    if self.tefas_crawler is None:
                        self.tefas_crawler = Crawler()
                    today = datetime.now()
                    asof_str = today.strftime("%Y-%m-%d")
                    df = self.tefas_crawler.fetch(start=asof_str, fund_code=symbol)
                    if df.empty:
                        start_date = (today - timedelta(days=7)).strftime("%Y-%m-%d")
                        df = self.tefas_crawler.fetch(start=start_date, end=asof_str, fund_code=symbol)
                    
                    if not df.empty:
                        latest_row = df.iloc[-1]
                        return PriceSnapshot(
                            symbol=symbol,
                            price=float(latest_row["price"]),
                            currency="TRY",
                            source="tefas",
                            asof=str(latest_row["date"]),
                        )
                except Exception:
                    pass
            
            if self.fallback_provider:
                return self.fallback_provider.get(symbol)
            return None

        # 2. Check if it's a Yahoo Finance ticker (or GMSTR / Z30EA / GRAM_ALTIN / USD / EUR)
        yahoo_ticker = None
        is_gram_gold = False
        if symbol == "GMSTR":
            yahoo_ticker = "GMSTR.IS"
        elif symbol == "Z30EA":
            yahoo_ticker = "Z30EA.IS"
        elif symbol == "GRAM_ALTIN":
            is_gram_gold = True
        elif symbol in {"USD", "USDTRY=X"}:
            yahoo_ticker = "USDTRY=X"
        elif symbol in {"EUR", "EURTRY=X"}:
            yahoo_ticker = "EURTRY=X"
        
        if yahoo_ticker or is_gram_gold:
            try:
                headers = {"User-Agent": "Mozilla/5.0"}
                asof_str = datetime.now().strftime("%Y-%m-%d")
                if is_gram_gold:
                    r_gold = requests.get("https://query1.finance.yahoo.com/v8/finance/chart/GC=F?range=1d&interval=1d", headers=headers, timeout=10)
                    r_usd = requests.get("https://query1.finance.yahoo.com/v8/finance/chart/USDTRY=X?range=1d&interval=1d", headers=headers, timeout=10)
                    if r_gold.status_code == 200 and r_usd.status_code == 200:
                        gold_price = r_gold.json()["chart"]["result"][0]["meta"]["regularMarketPrice"]
                        usd_price = r_usd.json()["chart"]["result"][0]["meta"]["regularMarketPrice"]
                        gram_price = (gold_price / 31.1034768) * usd_price
                        return PriceSnapshot(
                            symbol="GRAM_ALTIN",
                            price=round(gram_price, 4),
                            currency="TRY",
                            source="yahoo_finance",
                            asof=asof_str,
                        )
                else:
                    r = requests.get(f"https://query1.finance.yahoo.com/v8/finance/chart/{yahoo_ticker}?range=1d&interval=1d", headers=headers, timeout=10)
                    if r.status_code == 200:
                        price = r.json()["chart"]["result"][0]["meta"]["regularMarketPrice"]
                        currency = r.json()["chart"]["result"][0]["meta"].get("currency", "TRY")
                        return PriceSnapshot(
                            symbol=symbol,
                            price=float(price),
                            currency=currency,
                            source="yahoo_finance",
                            asof=asof_str,
                        )
            except Exception:
                pass
            
            if self.fallback_provider:
                return self.fallback_provider.get(symbol)
            return None

        # Fallback for other symbols
        if self.fallback_provider:
            return self.fallback_provider.get(symbol)
        return None
