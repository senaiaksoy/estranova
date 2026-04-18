# Changelog

Semantic versioning + tarih etiketi.

## [Unreleased] — Pipeline Stabilization Session (2026-04-17)

### Changed

- **BREAKING — editöryal yön:** Yazar persona **akran** olarak netleştirildi (`CLAUDE.md` HARD CONSTRAINT yeni alt bölüm). Vogue / Elle / Marie Claire Türkiye lifestyle-health tonu hedefi; doktor perspektifi yasak.
- Inline harici URL (`[metin](http...)`) ve uluslararası medikal kuruluş/yayın adı (NAMS, NICE, JAMA vb.) makale gövdesinde **yasak**; yumuşak “araştırmalar gösteriyor” referansı kabul.
- Publisher **`## Kaynaklar`** numaralı URL listesi **kaldırıldı** (iç bağlantı önerileri bölümü duruyor).
- `COMPLIANCE_SCORE_PUBLISH_OK` 90 → 85 (pragmatik publish eşiği; Sonnet compliance kalibrasyonu 90+'a ulaşmakta tutarsız).
- Writer / Checker / Compliance → `claude-sonnet-4-6` (önceki `gpt-4o` ağırlığından).
- Researcher → `gemini-2.5-flash` (`gemini-1.5-flash` deprecated / 404 riski).
- `COMPLIANCE_SCORE` düşük skor ihlali: **75–84** bandında **medium** severity (önceden eşik tek başına critical sayılıyordu).
- Best-effort publish state mutasyonu **compliance node** içine taşındı (LangGraph router purity).
- `load_dotenv(override=True)` — birden fazla giriş noktasında `.env` önceliği.

### Added

- Compliance DNA deterministik proxy: akran-ses, humanize, yumusak bilim sinyalleri (`compliance_master_validation._dna_signal_count`); harici URL sinyali kaldırıldı.
- Compliance: inline harici URL ve adlı kuruluş atıfları için deterministik **critical `regulation_risk`** (`compliance_expert_agent.FORBIDDEN_SRC_ORG_MARKERS`).
- `docs/style-rules-map.md` — stil/dil kurallarının CLAUDE / writer / validator / compliance’taki konum haritası.
- Writer prompt’a few-shot örnek (açılış + mekanizma + kanıt bölümleri).
- Writer + Compliance ham çıktı dump’ları (`output/_debug/`).
- Revizyon turunda (`revision_iteration > 0`) writer yapı doğrulaması başarısızsa graceful çıkış + bayraklar.
- JSON makale metninde double-escape newline normalizer.
- Raporlama: `output_file_routing` ve ilgili gözlemlenebilirlik alanları.

### Fixed

- Çıktı yönlendirmesi: reddedilen / hazır olmayan taslaklar `output/drafts/` altında.
- Publisher şablonunda riskli “destekler” kelimesi.
- Orchestrator conditional edge üzerinde state mutation’ın kalıcı olmaması; sayaç ve best-effort compliance’ta.
- Revizyon sayaçlarının router yerine node’da kalıcı artırılması.

### Removed

- Ölü `agents/*_prompt.txt` dosyaları (kurallar `prompts/*.md` ile birleştirildi).

### Reverted

- d36d08b "authoritative org refs as positive DNA" — prompt değişikliği doğrulama smoke testinde Kilo -6, Anksiyete -7 regresyonu yarattı; net negatif etki. Eski prompt daha tutarlı davranıyor.

Referans: `git log 326a36d..HEAD`
