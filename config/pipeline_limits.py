"""
Agent grafigi guvenlik ve revizyon sinirlari (tek kaynak).
"""

from __future__ import annotations

# Compliance -> Writer: en fazla bu kadar tam tur (iteration_count 0..1 ile sinirli; 2'de dur)
MAX_REVISION_ITERATIONS = 2

# Skor >= buna cikinca revizyon dongusu kirilir, yayina gidilir
COMPLIANCE_SCORE_PUBLISH_OK = 80

# Otomatik ihlal / dusuk skor uyari esigi (LLM + kural)
MIN_COMPLIANCE_SCORE_PUBLISH = 80

# Ayni dal (compliance -> writer) bu kadar tekrarlanirsa zorla dur
CIRCUIT_BREAKER_COMPLIANCE_WRITER_REPEATS = 3