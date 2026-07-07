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
