"""
Estranova Okuyucu Rehberi — kural tabanli (AI yok) icerik onerileri.
"""

from __future__ import annotations

from typing import Any, Final, TypedDict


class ArticleSuggestion(TypedDict):
    title: str
    summary: str
    read_minutes: int


class ReaderGuideResult(TypedDict):
    age_range: str
    symptom: str
    age_note: str
    articles: list[ArticleSuggestion]


AGE_LABELS: Final[dict[str, str]] = {
    "40-45": "40–45 yaş",
    "45-50": "45–50 yaş",
    "50+": "50+ yaş",
}

AGE_NOTES: Final[dict[str, str]] = {
    "40-45": "Bu dönemde hormon dalgalanmaları başlayabilir; semptomları izlemek ve rutin kontrolleri ihmal etmemek faydalı olabilir.",
    "45-50": "Perimenopoz ve menopoz geçişi sık görülür; uyku, odak ve sıcak basması gibi konulara dikkat etmek anlamlı olabilir.",
    "50+": "Kemik sağlığı, uyku ve genel yaşam kalitesi için düzenli hareket ve doktorunuzla plan önem taşıyabilir.",
}

SYMPTOM_LABELS: Final[dict[str, str]] = {
    "beyin_sisi": "Beyin sisi / odak",
    "uyku": "Uyku",
    "cilt": "Cilt",
    "kemik": "Kemik / mineral",
}

# Semptom -> 3–5 makale önerisi (başlık + kısa açıklama + tahmini okuma)
_BY_SYMPTOM: Final[dict[str, list[ArticleSuggestion]]] = {
    "beyin_sisi": [
        {
            "title": "Perimenopozda odak ve unutkanlık: ne zaman normal, ne zaman destek?",
            "summary": "Hormonal geçiş ile ilişkili beyin sisi hissini sade bir dille anlamak ve ne zaman uzmana danışılacağına dair çerçeve.",
            "read_minutes": 6,
        },
        {
            "title": "Uyku bölünmesi ve gündüz yorgunluğu: günlük rutinlere küçük ayarlar",
            "summary": "Gece uyanmaları ile gündüz zihin bulanıklığı arasındaki bağlantıyı ve güvenli bilgilendirme sınırlarını özetler.",
            "read_minutes": 5,
        },
        {
            "title": "Magnezyum ve kadın sağlığı: mitler ve gerçekçi beklentiler",
            "summary": "Beslenme destekleri hakkında abartısız, tıbbi tavsiye yerine geçmeyen bilgilendirici çerçeve.",
            "read_minutes": 7,
        },
        {
            "title": "Stres, kafein ve odak: orta yaşta dikkat dağıtan faktörler",
            "summary": "Yaşam tarzı tetikleyicilerini fark etmek için pratik bir kontrol listesi.",
            "read_minutes": 4,
        },
    ],
    "uyku": [
        {
            "title": "Gece terlemeleri ve uyku kalitesi: sık sorulan sorular",
            "summary": "Gece uyanmaları ve sıcak basması ile uyku bölünmesi arasındaki ilişkiyi sade dilde özetler.",
            "read_minutes": 6,
        },
        {
            "title": "Uyku hijyeni: yatak odası, ışık ve rutin (40+ için)",
            "summary": "Küçük alışkanlık değişiklikleri ile uyku düzenini desteklemeye yönelik öneriler (tıbbi tedavi vaadi yok).",
            "read_minutes": 5,
        },
        {
            "title": "Gündüz uykusu ve gece uykusu: dengeyi bulmak",
            "summary": "Kısa şekerleme ile gece uykusu arasındaki dengeyi tartan bilgilendirici içerik.",
            "read_minutes": 4,
        },
        {
            "title": "Hormonal geçiş ve uyku: ne zaman doktorla konuşmak mantıklı olabilir?",
            "summary": "Belirtilerin izlenmesi ve güvenli yönlendirme dilini içeren rehber tonu.",
            "read_minutes": 5,
        },
        {
            "title": "Hareket ve uyku: hafif aktivitenin rolü",
            "summary": "Düzenli ama abartısız hareketin uyku hissiyatına olası katkıları (bireysel farklar vurgusu ile).",
            "read_minutes": 4,
        },
    ],
    "cilt": [
        {
            "title": "Kuru cilt ve hormonal geçiş: nemlendirme ve günlük bakım",
            "summary": "Cilt bariyerini anlamak ve abartısız bakım rutinleri (reklam dili yok).",
            "read_minutes": 5,
        },
        {
            "title": "Güneş koruma: her yaşta temel alışkanlık",
            "summary": "UV maruziyetini azaltmanın pratik yolları ve gerçekçi beklentiler.",
            "read_minutes": 4,
        },
        {
            "title": "Akne ve hormonlar: yetişkin dönemde sık görülen senaryolar",
            "summary": "Hormonal dalgalanmalarla ilişkili cilt değişimlerini anlamak için sade bir çerçeve.",
            "read_minutes": 6,
        },
        {
            "title": "Beslenme ve cilt: abartısız bağlantılar",
            "summary": "Tek tip çözüm vaadi olmadan, genel sağlıklı beslenme ipuçları.",
            "read_minutes": 5,
        },
    ],
    "kemik": [
        {
            "title": "Kemik sağlığı ve menopoz sonrası riskler: bilgilendirici özet",
            "summary": "Kalsiyum, D vitamini ve hareket konularında genel çerçeve (kişisel tedavi önerisi yok).",
            "read_minutes": 7,
        },
        {
            "title": "Düşme riski ve denge: ev içi küçük önlemler",
            "summary": "Ev ortamında güvenliği artırmaya yönelik pratik fikirler.",
            "read_minutes": 4,
        },
        {
            "title": "Magnezyum ve kemik sağlığı: ne biliniyor, ne bilinmiyor?",
            "summary": "Bilimsel kesinlik iddiası olmadan, abartısız beklenti çerçevesi.",
            "read_minutes": 6,
        },
        {
            "title": "Ağırlık taşıyan egzersiz ve kemik: neden hafif direnç konuşuluyor?",
            "summary": "Orta yaş ve sonrası için güvenli hareket yaklaşımını anlatan giriş metni.",
            "read_minutes": 5,
        },
    ],
}


def list_age_options() -> list[tuple[str, str]]:
    """(internal_key, etiket) listesi."""
    return [(k, AGE_LABELS[k]) for k in ("40-45", "45-50", "50+")]


def list_symptom_options() -> list[tuple[str, str]]:
    """(internal_key, etiket) listesi."""
    return [(k, SYMPTOM_LABELS[k]) for k in ("beyin_sisi", "uyku", "cilt", "kemik")]


def recommend(age_range_key: str, symptom_key: str) -> ReaderGuideResult:
    """
    Yaş aralığı + semptoma göre 3–5 makale önerisi (kurallı, AI yok).
    """
    if age_range_key not in AGE_LABELS:
        raise ValueError(f"Gecersiz yas araligi: {age_range_key}")
    if symptom_key not in SYMPTOM_LABELS:
        raise ValueError(f"Gecersiz semptom: {symptom_key}")

    raw = _BY_SYMPTOM.get(symptom_key, [])
    # En fazla 5, en az 3 göster (liste her zaman 3+ öğe)
    articles = raw[:5]

    return ReaderGuideResult(
        age_range=age_range_key,
        symptom=symptom_key,
        age_note=AGE_NOTES[age_range_key],
        articles=articles,
    )


def format_recommendations_markdown(result: ReaderGuideResult) -> str:
    """Streamlit veya dışa aktarım için basit Markdown."""
    lines: list[str] = [
        "### Sizin için önerilen içerikler",
        "",
        f"**Yaş aralığı:** {AGE_LABELS[result['age_range']]}",
        f"**İlgi alanı:** {SYMPTOM_LABELS[result['symptom']]}",
        "",
        f"_{result['age_note']}_",
        "",
    ]
    for i, art in enumerate(result["articles"], start=1):
        lines.append(f"{i}. **{art['title']}** (~{art['read_minutes']} dk)")
        lines.append(f"   - {art['summary']}")
        lines.append("")
    return "\n".join(lines).strip()
