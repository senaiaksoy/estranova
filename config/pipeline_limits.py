"""
Agent grafigi guvenlik ve revizyon sinirlari (tek kaynak).
"""

# Makale en fazla bu kadar Writer revizyon turu (compliance sonrasi geri donus)
MAX_REVISION_ITERATIONS = 2

# Compliance otomatik red esigi (gecici yumusatma: 80 -> 75)
MIN_COMPLIANCE_SCORE_PUBLISH = 75

# Compliance -> Writer yonlendirmesi bu kadar ardışık yönlendirmeden sonra zorla kesilir (>3 = 4. ve sonrasi)
CIRCUIT_BREAKER_AFTER_REVISION_ROUTES = 4

# LangGraph adim limiti (sonsuz donguye karsi)
GRAPH_RECURSION_LIMIT = 32
