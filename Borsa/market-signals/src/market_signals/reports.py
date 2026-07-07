from __future__ import annotations

from datetime import datetime
from pathlib import Path

from .models import Signal
from .storage import ensure_runtime_dirs


SIGNAL_EXPLANATIONS = {
    "AL": "Model trendi olumlu okuyor; yine de emir kararı manuel risk kontrolünden sonra verilmelidir.",
    "BEKLE": "Model net alım baskısı görmüyor; pozisyonu büyütmeden izleme önerir.",
    "AZALT": "Model kısa vadeli riskin arttığını görüyor; mevcut ağırlık manuel olarak gözden geçirilmelidir.",
    "NAKDE GEC": "Model ana trend ve geri çekilme riskini yüksek görüyor; sermaye koruma kontrolü öne çıkar.",
}

CONFIDENCE_LABELS = {
    "Dusuk": "Düşük",
    "Orta": "Orta",
    "Yuksek": "Yüksek",
}


def render_signal_label(value: str) -> str:
    return "NAKDE GEÇ" if value == "NAKDE GEC" else value


def render_confidence(value: str) -> str:
    return CONFIDENCE_LABELS.get(value, value)


def render_daily(signals: list[Signal]) -> str:
    lines = [
        "# Borsa Günlük Sinyal Raporu",
        "",
        "Bu rapor yatırım tavsiyesi değildir; yalnızca özel araştırma ve manuel karar desteği için üretilir.",
        "Sinyaller emir talimatı olarak değil, TEFAS YAY, altın ve gümüş için kontrol listesi olarak okunmalıdır.",
        "",
        "## Genel Okuma",
        "",
        "- AL: Trend koşulları olumlu; yine de fiyat, portföy ağırlığı ve emir saati manuel kontrol edilir.",
        "- BEKLE: Mevcut veri net yön üretmiyor ya da hareket fazla uzamış görünüyor.",
        "- AZALT: Kısa vadeli risk artışı var; pozisyon büyüklüğü yeniden değerlendirilir.",
        "- NAKDE GEÇ: Ana trend ve geri çekilme riski belirgin; sermaye koruma kontrolü öne çıkar.",
        "",
        "## Enstrüman Bazlı Sinyaller",
        "",
    ]
    for signal in signals:
        signal_value = signal.label.value
        lines.extend(
            [
                f"## {signal.instrument_id}",
                f"- Tarih: {signal.asof}",
                f"- Sinyal: {render_signal_label(signal_value)}",
                f"- Güven düzeyi: {render_confidence(signal.confidence.value)}",
                f"- Son kapanış: {signal.close:.4f}",
                f"- Neden: {signal.reason}",
                f"- Okuma notu: {SIGNAL_EXPLANATIONS.get(signal_value, 'Model çıktısı manuel kontrolle birlikte değerlendirilmelidir.')}",
                "",
            ]
        )
    lines.append("## Operasyon Notu")
    lines.append("")
    lines.append("Manuel kontrol penceresi: TEFAS emir kesim saati bağlamı 13:30 İstanbul saati olarak izlenir.")
    lines.append("Telegram bildirimi yalnızca hatırlatma işlevi görür; canlı emir ya da otomatik al-sat çalıştırmaz.")
    return "\n".join(lines) + "\n"


def write_daily_report(root: Path, signals: list[Signal]) -> Path:
    ensure_runtime_dirs(root)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S-%f")
    path = root / "data" / "reports" / f"daily-{stamp}.md"
    path.write_text(render_daily(signals), encoding="utf-8")
    return path
