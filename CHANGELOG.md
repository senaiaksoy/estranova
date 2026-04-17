# Changelog

Semantic versioning + tarih etiketi.

## [Unreleased] — Pipeline Stabilization Session (2026-04-17)

### Changed

- Writer / Checker / Compliance → `claude-sonnet-4-6` (önceki `gpt-4o` ağırlığından).
- Researcher → `gemini-2.5-flash` (`gemini-1.5-flash` deprecated / 404 riski).
- `COMPLIANCE_SCORE` düşük skor ihlali: **75–89** bandında **medium** severity (önceden eşik tek başına critical sayılıyordu).
- Best-effort publish state mutasyonu **compliance node** içine taşındı (LangGraph router purity).
- `load_dotenv(override=True)` — birden fazla giriş noktasında `.env` önceliği.

### Added

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

Referans: `git log 326a36d..HEAD`
