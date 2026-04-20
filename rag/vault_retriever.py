"""
Vault retriever — Dr. Aksoy Knowledge Vault için hafif, deterministik context fetcher.

Mevcut Chroma+OpenAI embedding rag katmanından (PubMed + DOCX için) **bağımsız**.
Amaç: Estranova writer agent'a topic-uyumlu vault içerik enjekte etmek.

Vault yapısı (E:/obsidian-vaults/draksoyivf-knowledge):
  - wiki/brand/voice.md, audience-personas.md
  - wiki/sites/estranova/editorial-rules.md, audience-40plus.md
  - wiki/medical/concepts/*.md (grade A-D, frontmatter tags)
  - wiki/medical/guidelines/*.md

Strateji:
  1. BASE context (her zaman): brand voice + Estranova editorial özeti + audience persona
  2. TOPIC context (dinamik): topic → concept seed keyword match → ilk N eşleşme
  3. Hepsi prompt-safe string olarak döner (writer kullanırken kaynak ismi değil
     anonim referans kuralına uyar; §4 yasak referans biçimleri korunur).

Varsayılan davranış: vault path yoksa boş string döner (fail-open).
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


# -----------------------------------------------------------------------------
# Konfig
# -----------------------------------------------------------------------------

# Varsayılan vault yolu — config/vault_config.py tarafından override edilir.
DEFAULT_VAULT_PATH = Path(r"E:\obsidian-vaults\draksoyivf-knowledge")

# Her zaman dahil edilen base context dosyaları (relative to vault root).
BASE_CONTEXT_FILES: tuple[str, ...] = (
    "wiki/brand/voice.md",
    "wiki/sites/estranova/editorial-rules.md",
    "wiki/sites/estranova/audience-40plus.md",
)

# Topic match için taranan dizinler.
CONCEPT_DIR = "wiki/medical/concepts"
GUIDELINE_DIR = "wiki/medical/guidelines"

# Varsayılan context karakter sınırı (token ~4x, yani ~4000-6000 token).
DEFAULT_MAX_CHARS = 16000

# Estranova dışı (IVF-özgü) concept seed'ler — otomatik elenir.
IVF_ONLY_CONCEPTS: frozenset[str] = frozenset({
    "era-test",
    "pgt-a",
    "time-lapse-embriyoskop",
    "endometrial-scratch",
    "intraovarian-prp",
    "icsi-non-male-factor",
    "endometriozis-genel",       # IVF siteleri için birincil
    "endometrioma-ivf",
})


# -----------------------------------------------------------------------------
# Yardımcılar
# -----------------------------------------------------------------------------

_TR_NORMALIZE = str.maketrans("ÇĞİıÖŞÜ", "cgiiosu")
_WORD_RE = re.compile(r"[a-zçğışöü]+", re.IGNORECASE)


def _normalize(text: str) -> str:
    """Türkçe karakterleri ASCII'ye çevir + lowercase. Kelime skorlama için."""
    return text.lower().translate(_TR_NORMALIZE)


def _tokenize(text: str) -> list[str]:
    return _WORD_RE.findall(_normalize(text))


def _read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except (FileNotFoundError, OSError, UnicodeDecodeError):
        return ""


def _extract_frontmatter_tags(content: str) -> list[str]:
    """YAML frontmatter içindeki tags + description'dan topic hint'leri çıkar."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    if not m:
        return []
    fm = m.group(1)
    hints: list[str] = []
    for line in fm.splitlines():
        line = line.strip()
        if line.startswith("description:"):
            hints.append(line.split(":", 1)[1].strip())
        elif line.startswith("tags:"):
            hints.append(line.split(":", 1)[1].strip())
        elif line.startswith("name:"):
            hints.append(line.split(":", 1)[1].strip())
    return hints


def _score_concept_against_topic(
    concept_path: Path, topic_tokens: set[str]
) -> tuple[int, str]:
    """Bir concept seed dosyasının topic ile eşleşme skorunu hesapla.

    Döner: (skor, içerik). Skor > 0 ise eşleşme var demektir.
    """
    content = _read(concept_path)
    if not content:
        return (0, "")

    # Dosya adı + frontmatter + ilk 2000 karakter üzerinde tokenize et
    haystack_parts = [concept_path.stem]
    haystack_parts.extend(_extract_frontmatter_tags(content))
    haystack_parts.append(content[:2000])
    haystack = " ".join(haystack_parts)

    concept_tokens = set(_tokenize(haystack))
    overlap = topic_tokens & concept_tokens
    return (len(overlap), content)


def _trim_section(content: str, max_chars: int) -> str:
    """Uzun bir dosyayı akıllıca kes: frontmatter + ilk N karakter."""
    if len(content) <= max_chars:
        return content

    # Frontmatter'ı koru
    fm_match = re.match(r"^---\s*\n.*?\n---\s*\n", content, re.DOTALL)
    prefix = ""
    if fm_match:
        prefix = fm_match.group(0)
        content = content[len(prefix):]

    remaining = max_chars - len(prefix) - 24  # "... (truncated) ..." payı
    if remaining <= 0:
        return prefix[:max_chars]

    # Paragraf sınırına yakın kes
    trimmed = content[:remaining]
    last_para = trimmed.rfind("\n\n")
    if last_para > remaining * 0.6:
        trimmed = trimmed[:last_para]

    return prefix + trimmed + "\n\n... (kesildi)\n"


# -----------------------------------------------------------------------------
# Ana API
# -----------------------------------------------------------------------------

@dataclass
class VaultContext:
    """Writer agent'a enjekte edilecek context'in yapılı sonucu."""

    text: str
    matched_concepts: list[str]
    char_count: int
    #: Her eşleşen concept için synthetic Source meta'sı — writer agent
    #: bunları `approved_sources`'a ekleyip `claim_trace` içinde referansı
    #: olarak kullanabilir. Böylece compliance agent vault-derived claim'leri
    #: "sourced" kabul eder.
    synthetic_sources: list[dict] = None  # type: ignore[assignment]

    def __post_init__(self) -> None:
        if self.synthetic_sources is None:
            self.synthetic_sources = []

    def is_empty(self) -> bool:
        return not self.text.strip()


def _extract_concept_title(content: str, fallback: str) -> str:
    """YAML frontmatter 'name:' alanından human-readable başlık."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    if not m:
        return fallback
    for line in m.group(1).splitlines():
        line = line.strip()
        if line.startswith("name:"):
            return line.split(":", 1)[1].strip().strip('"').strip("'")
    return fallback


def _extract_concept_grade(content: str) -> str:
    """Frontmatter 'grade:' → compliance için evidence_level mapping."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    if not m:
        return "medium"
    for line in m.group(1).splitlines():
        line = line.strip().lower()
        if line.startswith("grade:"):
            val = line.split(":", 1)[1].strip().strip('"').strip("'").lower()
            # A/B → high; C → medium; D/E veya diğer → low
            if val.startswith("a") or val.startswith("b"):
                return "high"
            if val.startswith("c"):
                return "medium"
            if val.startswith("d") or val.startswith("e"):
                return "low"
    return "medium"


# Kurum adlarını synthetic title'dan elemek için — writer'ın bu meta alanları
# echo etme riskini düşürür. HARD CONSTRAINT §4 ile uyumlu çift güvenlik.
_ORG_STRIP_RE = re.compile(
    r"\b(NAMS|IMS|NICE|ESHRE|ASRM|ACOG|FIGO|WHO|EMAS|BMS|HFEA|Cochrane|RCOG|FSRH|"
    r"IGENOMIX|Vitrolife|Lundin|Melbourne)\b",
    re.IGNORECASE,
)


def _neutralize_title(raw_title: str) -> str:
    """Concept başlığından kurum isimlerini çıkarıp nötr format ver."""
    cleaned = _ORG_STRIP_RE.sub("", raw_title)
    # Çoklu boşluk + " — " artıklarını temizle
    cleaned = re.sub(r"\s*[—–-]\s*[—–-]\s*", " — ", cleaned)
    cleaned = re.sub(r"\s{2,}", " ", cleaned)
    cleaned = cleaned.strip(" —–-·,.:")
    return cleaned or "konu kavramı"


def _build_synthetic_source(concept_slug: str, content: str) -> dict:
    """Bir concept seed için writer'ın approved_sources'a ekleyebileceği
    Source-şeması uyumlu synthetic kaynak dict'i üret.

    Format state.Source TypedDict ile uyumlu: id/title/publisher/year/url/
    source_type/evidence_level. Title'dan kurum isimleri temizlenir.
    """
    raw_title = _extract_concept_title(content, fallback=concept_slug)
    neutral_title = _neutralize_title(raw_title)
    return {
        "id": f"vault-{concept_slug}",
        "title": f"Dahili bilgi tabanı — {neutral_title}",
        "publisher": "Estranova dahili bilgi tabanı",
        "year": 2026,
        "url": "internal://vault",
        "source_type": "internal_knowledge_base",
        "evidence_level": _extract_concept_grade(content),
    }


def fetch_vault_context(
    topic: str,
    *,
    vault_path: Path | str | None = None,
    max_chars: int = DEFAULT_MAX_CHARS,
    max_concepts: int = 3,
    site_scope: str = "estranova",
) -> VaultContext:
    """Topic'e uyumlu vault context'i döndür.

    Args:
        topic: Makale konusu (örn. "menopozda sıcak basmaları").
        vault_path: Vault kök dizini. None ise DEFAULT_VAULT_PATH kullanılır.
        max_chars: Toplam çıktı karakter sınırı.
        max_concepts: Dahil edilecek maksimum concept seed sayısı.
        site_scope: "estranova" (default) veya "ivf". Estranova IVF-özgü
            concept'leri eler; ivf tersini yapar (ileride kullanılabilir).

    Returns:
        VaultContext — text boş string ise fail-open (vault yok/erişilemez).
    """
    root = Path(vault_path) if vault_path else DEFAULT_VAULT_PATH

    if not root.is_dir():
        return VaultContext(text="", matched_concepts=[], char_count=0)

    topic_tokens = set(_tokenize(topic))
    if not topic_tokens:
        return VaultContext(text="", matched_concepts=[], char_count=0)

    sections: list[str] = []

    # 1) Base context — her zaman dahil
    for rel in BASE_CONTEXT_FILES:
        content = _read(root / rel)
        if not content:
            continue
        budget = max(1500, max_chars // (len(BASE_CONTEXT_FILES) + max_concepts + 1))
        sections.append(f"\n### {rel}\n\n{_trim_section(content, budget)}")

    # 2) Topic-matched concept seeds
    concept_dir = root / CONCEPT_DIR
    matched: list[str] = []
    synthetic_sources: list[dict] = []
    if concept_dir.is_dir():
        scored: list[tuple[int, Path, str]] = []
        for md in concept_dir.glob("*.md"):
            if md.stem in IVF_ONLY_CONCEPTS and site_scope == "estranova":
                continue
            score, content = _score_concept_against_topic(md, topic_tokens)
            if score > 0:
                scored.append((score, md, content))

        scored.sort(key=lambda t: t[0], reverse=True)
        concept_budget = max(2000, max_chars // (len(BASE_CONTEXT_FILES) + max_concepts + 1))
        for _score, md, content in scored[:max_concepts]:
            matched.append(md.stem)
            sections.append(
                f"\n### {CONCEPT_DIR}/{md.name}\n\n{_trim_section(content, concept_budget)}"
            )
            synthetic_sources.append(_build_synthetic_source(md.stem, content))

    # 3) Toplam karakter kontrolü (güvenlik)
    combined = "\n\n---\n".join(sections).strip()
    if len(combined) > max_chars:
        combined = combined[:max_chars] + "\n\n... (context kesildi, max_chars aşıldı)"

    header = (
        "# Vault Context (yalnızca yazar için arka plan — doğrudan atıf yapma)\n"
        "# Kaynak adı/URL gövde metnine girmez; anonim referans kuralı geçerli."
    )

    body = f"{header}\n{combined}" if combined else ""

    return VaultContext(
        text=body,
        matched_concepts=matched,
        char_count=len(body),
        synthetic_sources=synthetic_sources,
    )


__all__ = ["fetch_vault_context", "VaultContext"]
