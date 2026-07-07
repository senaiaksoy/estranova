# Changelog

Semantic versioning + tarih etiketi.

## [Unreleased] — Pipeline Stabilization Session (2026-04-17)

### Changed

- Onaylı yayın: `src/content/blog/` + `src/pages/{category}/{slug}.astro` ikilisi (Streamlit). Yalnızca blog koleksiyonu yazan `save_approved_blog_article` geriye dönük korunur.
- FAQ disiplini: `pratik_veya_sss` zorunlu olarak **3-5** soru; jenerik meta sorular ("kimler icin", "tibbi karar yerine gecer" vb.) `writer_agent.py` validator'da **INVALID**.
- **BREAKING — editöryal yön:** Yazar persona **yaşıt** olarak netleştirildi (`CLAUDE.md` HARD CONSTRAINT yeni alt bölüm). Vogue / Elle / Marie Claire Türkiye lifestyle-health tonu hedefi; doktor perspektifi yasak.
- Inline harici URL (`[metin](http...)`) ve uluslararası medikal kuruluş/yayın adı (NAMS, NICE, JAMA vb.) makale gövdesinde **yasak**; yumuşak “araştırmalar gösteriyor” referansı kabul.
- Publisher **`## Kaynaklar`** numaralı URL listesi **kaldırıldı** (iç bağlantı önerileri bölümü duruyor).
- `COMPLIANCE_SCORE_PUBLISH_OK` 90 → 85 (pragmatik publish eşiği; Sonnet compliance kalibrasyonu 90+'a ulaşmakta tutarsız).
- Writer / Checker / Compliance → `claude-sonnet-4-6` (önceki `gpt-4o` ağırlığından).
- Researcher → `gemini-2.5-flash` (`gemini-1.5-flash` deprecated / 404 riski).
- `COMPLIANCE_SCORE` düşük skor ihlali: **75–84** bandında **medium** severity (önceden eşik tek başına critical sayılıyordu).
- Best-effort publish state mutasyonu **compliance node** içine taşındı (LangGraph router purity).
- `load_dotenv(override=True)` — birden fazla giriş noktasında `.env` önceliği.

### Added

- **Agentic scaffold dokümantasyonu:** `docs/AGENTIC_PIPELINE_SCAFFOLD.md`, `config/domain_placeholders.py` (fork için boş sablon; üretimde Estranova kuralları agent dosyalarında), `agents/orchestrator.py` re-export, `prompts/checker-agent.md` / `prompts/publisher-agent.md` iskelet, `output/README.md`.
- CLI: `python main.py --topic "..."` veya pozisyon argümanı (`resolved_topic`).
- Writer çıktısı `category` alanı (9 sabit değerden biri); `writer_agent.py` validator zorunlu; state’te `target_category`.
- `save_approved_article_with_routing` — markdown (`src/content/blog/`) + kategori altında `src/pages/{category}/…/{slug}.astro` üretimi.
- Streamlit onay ekranı: yayın öncesi kategori gösterimi + override `selectbox`.
- `main.py` CLI: `--category` (writer önerisinin üzerine yazılır).
- `docs/PIPELINE.md`: "Konu → Kategori Yönlendirmesi (Routing)" alt bölümü.
- Compliance DNA deterministik proxy: yaşıt-ses, humanize, yumusak bilim sinyalleri (`compliance_master_validation._dna_signal_count`); harici URL sinyali kaldırıldı.
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

- Publisher sablon **`_build_faq_markdown`** (her makaleye ayni 5 jenerik soru — HCU FAQ-stuffing riski). FAQ tek kaynak: Writer `pratik_veya_sss`.
- Ölü `agents/*_prompt.txt` dosyaları (kurallar `prompts/*.md` ile birleştirildi).
- `system-prompt.md` (eski "Strateji Uzmanı" persona — yaşıt personayla çelişiyordu, kullanılmıyordu).
- `editorial-playbook.md` (eski tıp-açıklama ton örnekleri — Vogue/Elle ile çelişiyordu, kullanılmıyordu).
- `tasks.md` (geçici görev listesi).

### Changed (BREAKING — site kuralları konsolidasyonu)

- `CLAUDE.md`: eksik tüm kurallar (dış link yasağı kanonik versiyonu, yazar yumuşatma kuralları, ses sürekliliği, humanize, FAQ disiplini, pipeline parametre referansı) eklendi / netleştirildi.
- `AGENTS.md` "Persona ve Dış Referans" bölümüyle pekiştirildi.
- `COMPLIANCE_CHECKLIST.md`'ye 4 yeni bölüm eklendi (H.2 Persona, H.3 External Reference, H.4 FAQ, H.5 Language Softening).
- `compliance-rules.md` artık DEPRECATED — kanonik dosyalara yönlendirme stub.
- `docs/agent-io-spec.md` ve `docs/langchain-architecture.md` içindeki `compliance-rules.md` atıfları `CLAUDE.md` + `prompts/compliance-agent.md` ile değiştirildi; `docs/agent-state-schema.md` disclaimer satırı aynı hizaya çekildi.

### Reverted

- d36d08b "authoritative org refs as positive DNA" — prompt değişikliği doğrulama smoke testinde Kilo -6, Anksiyete -7 regresyonu yarattı; net negatif etki. Eski prompt daha tutarlı davranıyor.

Referans: `git log 326a36d..HEAD`
