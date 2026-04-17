"""
Agent grafigi guvenlik ve revizyon sinirlari (tek kaynak).
"""

from __future__ import annotations

# Compliance -> Writer: en fazla bu kadar tam tur (iteration_count 0..1 ile sinirli; 2'de dur)
MAX_REVISION_ITERATIONS = 2

# Skor >= buna cikinca revizyon dongusu kirilir, yayina gidilir (85+ yayin)
COMPLIANCE_SCORE_PUBLISH_OK = 85

# Bu degerin alti "reject" bandi (<75); orchestrator yine writer'a yollar
COMPLIANCE_SCORE_REJECT_BELOW = 75

# Otomatik ihlal / dusuk skor: yayin icin en az bu skor (compliance mesajlari)
MIN_COMPLIANCE_SCORE_PUBLISH = COMPLIANCE_SCORE_PUBLISH_OK

# Ayni dal (compliance -> writer) bu kadar tekrarlanirsa zorla dur
CIRCUIT_BREAKER_COMPLIANCE_WRITER_REPEATS = 3

# Writer tek LLM cagrisinda (JSON: makale + sosyal + bulten); uzun TR metin + revizyon turunda daha yuksek tavan
WRITER_MAX_OUTPUT_TOKENS = 16384

# Fact-check / medical checker: tam JSON kesilmesin (varsayilan 1200 yetmez)
CHECKER_MAX_OUTPUT_TOKENS = 8192

# Compliance: bu kelime sayisindan uzun cumleler stil uyarisi (Writer ile hizali)
COMPLIANCE_LONG_SENTENCE_WORDS = 20