"""
Estranova master prompt ile hizali deterministik uyumluluk kontrolleri.
LLM skorunu tamamlar; ihlallerde skor tavanı uygulanir.
"""

from __future__ import annotations

import re
from typing import TypedDict

from .article_markdown import split_h2_sections


class MasterViolationDict(TypedDict):
    type: str
    severity: str
    text_ref: str
    rule_id: str
    fix_suggestion: str


# Saglik blog klişeleri (tam eslestirme degil; kismi substring)
KLISE_SUBSTRINGS: tuple[str, ...] = (
    "hayatın her döneminde",
    "hayatin her doneminde",
    "altın değerinde",
    "altin degerinde",
    "kulak verin",
    "unutmayın ki",
    "unutmayin ki",
    "doğanın armağanı",
    "doganin armagani",
    "sihirli değnek",
    "sihirli denek",
    "kesin çare",
    "kesin care",
    "mucizevi iksir",
    "şifa çayı",
    "sifa cayi",
)

# Kanit bolumu: kanit düzeyi aciklandigina dair ipuclari (en az 2 farkli aile)
_KANIT_MARKERS: tuple[str, ...] = (
    "kanıt",
    "kanit",
    "düzey",
    "duzey",
    "belirsiz",
    "sınır",
    "sinir",
    "randomize",
    "gözlemsel",
    "gozlemsel",
    "meta-analiz",
    "meta analiz",
    "çalışma",
    "calisma",
    "güvenilirlik",
    "guvenilirlik",
)


def _word_count(block: str) -> int:
    return len(re.findall(r"\w+", block, flags=re.UNICODE))


def _dna_signal_count(article: str) -> int:
    """Estranova DNA proxy: ayri sinyaller; en az 3 gerekli (yaşıt tonu; harici URL sayilmaz)."""
    signals = 0
    lowered = article.lower()
    # Yaşıt-ses: 2. tekil / 1. cogul baglac (kelime sinirli, kabaca)
    yaşıt_hits = len(
        re.findall(
            r"\b(sen|sana|senden|senin|seni|senle|siz|siza|sizin|biz|bize|bizim|"
            r"vucudun|vücudun|hissettigin|hissettiğin|fark\s+ettigin|fark\s+ettiğin)\b",
            lowered,
            flags=re.UNICODE,
        )
    )
    if yaşıt_hits >= 5:
        signals += 1
    if any(
        x in lowered
        for x in (
            "bu donemden",
            "bu dönemden",
            "bir arkadas",
            "bir arkadaş",
            "belki sen",
            "hepimizin",
            "birçoğumuz",
            "bir cogumuz",
            "birçoğumuzun",
        )
    ):
        signals += 1
    if any(
        x in lowered
        for x in (
            "arastirmalar",
            "araştırmalar",
            "arastirma",
            "gosteriyor",
            "gösteriyor",
            "uzmanlar",
            "genellikle",
            "calismalar",
            "çalışmalar",
        )
    ):
        signals += 1
    if re.search(r"^>\s*\S", article, re.MULTILINE):
        signals += 1
    if len(re.findall(r"^-\s+\S", article, re.MULTILINE)) >= 2:
        signals += 1
    if any(
        x in lowered
        for x in (
            "bilgilendirme",
            "doktorunuza",
            "uzmanınıza",
            "uzmaniniza",
            "sağlık kuruluşu",
            "saglik kurulusu",
        )
    ):
        signals += 1
    if any(x in lowered for x in ("nötr", "notr", "editoryal", "güven ", "guven ")):
        signals += 1
    if re.search(r"^## [^#\n]+\?", article, re.MULTILINE):
        signals += 1
    return signals


def _kanit_marker_hits(block: str) -> int:
    low = block.lower()
    return sum(1 for m in _KANIT_MARKERS if m in low)


def run_estranova_master_checks(article: str) -> tuple[list[MasterViolationDict], int | None]:
    """
    Ihlaller ve skor tavanı (None = tavan yok).
    Tavan, LLM skoru ile min() olarak birlestirilir.
    """
    violations: list[MasterViolationDict] = []
    caps: list[int] = []

    text = article.strip()
    h2s = split_h2_sections(text)

    def cap(score: int) -> None:
        caps.append(score)

    # 1) Sekiz H2 bolumu
    if len(h2s) < 8:
        violations.append(
            MasterViolationDict(
                type="structure_gap",
                severity="critical",
                text_ref=f"## bolum sayisi={len(h2s)}",
                rule_id="master.eight_sections",
                fix_suggestion="Makalede tam 8 adet `##` bolumu olmali (estranova-master sira).",
            )
        )
        cap(68)

    # Acilis + mekanizma + kanit (indeksler sabit)
    acilis = h2s[0] if len(h2s) > 0 else ""
    mekanizma = h2s[2] if len(h2s) > 2 else ""
    kanit_bl = h2s[3] if len(h2s) > 3 else ""

    # 7) Acilis sahnesi — kisa ansiklopedik giris sayilir: cok kisa veya yok
    if acilis and _word_count(acilis) < 32:
        violations.append(
            MasterViolationDict(
                type="structure_gap",
                severity="critical",
                text_ref="acilis_sahnesi",
                rule_id="master.opening_scene",
                fix_suggestion="Ilk `##` bolumu okuyucunun kendini gordugu kisa sahne/durum olmali; en az ~30-40 kelime anlamli giris.",
            )
        )
        cap(76)

    # 2) Mekanizma yuzeysel (writer min 40; burada 40-54 arasi uyari)
    if mekanizma:
        mw = _word_count(mekanizma)
        if mw < 40:
            violations.append(
                MasterViolationDict(
                    type="structure_gap",
                    severity="critical",
                    text_ref="mekanizma",
                    rule_id="master.mechanism_shallow",
                    fix_suggestion="Mekanizma bolumu vucutta/surecte nasil islendigini anlatmali; en az ~40 kelime derinlik (tercihen daha fazla).",
                )
            )
            cap(72)
        elif mw < 52:
            violations.append(
                MasterViolationDict(
                    type="structure_gap",
                    severity="medium",
                    text_ref="mekanizma",
                    rule_id="master.mechanism_shallow",
                    fix_suggestion="Mekanizma aciklamasi yuzeysel kaliyor; sureci bir iki ek paragrafla somutlastirin.",
                )
            )
            cap(82)
    elif len(h2s) >= 3:
        violations.append(
            MasterViolationDict(
                type="structure_gap",
                severity="critical",
                text_ref="mekanizma",
                rule_id="master.mechanism_shallow",
                fix_suggestion="Mekanizma bolumu eksik veya bos.",
            )
        )
        cap(70)

    # 3) Turkiye
    if not re.search(r"t[üu]rkiye", text, re.IGNORECASE):
        violations.append(
            MasterViolationDict(
                type="structure_gap",
                severity="critical",
                text_ref="Turkiye",
                rule_id="master.turkey_section",
                fix_suggestion="Metinde Turkiye baglami (baslik veya belirgin paragraf) ve 'Türkiye'/'Turkiye' gecisi olmali.",
            )
        )
        cap(68)

    # 4) Kanit duzeyi aciklanmamis
    if kanit_bl:
        kh = _kanit_marker_hits(kanit_bl)
        if kh < 2:
            violations.append(
                MasterViolationDict(
                    type="structure_gap",
                    severity="critical",
                    text_ref="kanit_seviyesi",
                    rule_id="master.evidence_level",
                    fix_suggestion="Kanıt seviyesi bolumunde kanitin ne kadar guclu oldugu, sinirlar ve belirsizlikler acikca yazilmali.",
                )
            )
            cap(78)
    elif len(h2s) >= 4:
        violations.append(
            MasterViolationDict(
                type="structure_gap",
                severity="critical",
                text_ref="kanit_seviyesi",
                rule_id="master.evidence_level",
                fix_suggestion="Kanıt seviyesi bolumu eksik.",
            )
        )
        cap(70)

    # 5) DNA en az 3
    dna_n = _dna_signal_count(text)
    if dna_n < 3:
        violations.append(
            MasterViolationDict(
                type="style_risk",
                severity="medium",
                text_ref=f"dna_sinyal={dna_n}",
                rule_id="master.dna_elements",
                fix_suggestion=(
                    "Estranova DNA: yaşıt-ses (sen/biz), humanize cumlesi, yumusak bilim referansi, "
                    "blockquote, liste, soru tonlu H2, nötr yonlendirme — en az 3 sinyal guclendirilmeli."
                ),
            )
        )
        cap(84)

    # 6) Klise dil
    low = text.lower()
    k_hit = [k for k in KLISE_SUBSTRINGS if k in low]
    if k_hit:
        violations.append(
            MasterViolationDict(
                type="style_risk",
                severity="medium",
                text_ref=", ".join(k_hit[:5])[:240],
                rule_id="master.cliche_language",
                fix_suggestion="Klişe / slogan saglik dili yerine sade, editoriyal Turkce kullanin.",
            )
        )
        cap(72)

    score_cap: int | None = min(caps) if caps else None
    return violations, score_cap
