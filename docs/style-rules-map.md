# Stil ve Dil Kurallari — Harita

Estranova’nın editoryal ses, yasak ifadeler, yumuşatma kalıpları, yapı şartları ve dil temizliği kuralları **tek bir dosyada değil** — üretim hattında farklı noktalara yerleştirilmiştir. Yeni bir kural eklenecekse **doğru katmana** konmalıdır.

Satır numaraları referans içindir; dosya değişince kayabilir — önce **bölüm başlıklarına** bakın.

## Brand-level (değişmez üst kurallar)

- **`CLAUDE.md` §1–§6** — Editoryal kimlik, ton, yasak ifadeler, tıbbi sınır, Türkçe yayın dili, okuma düzeyi (HARD CONSTRAINTS).
- **`CLAUDE.md` §3 — *Yazar persona'sı*** — Tıp dışı 40+ kadın **yaşıt** sesi; Vogue / Elle / Marie Claire Türkiye lifestyle-health tonu hedefi; doktor blogu / dergi-atıf dili yasak; okura hitapta **yalnızca "siz"** kullanılır.
- **`AGENTS.md`** — Site genelinde forbidden examples, allowed neutral CTA örnekleri, ton tarifi; **Persona ve Dış Referans** özeti (`CLAUDE.md` HARD CONSTRAINT ile hizalı).
- **`docs/editorial-style-guide.md`** — `Yaşıt Editör` ana editorial sesi; başlık tonu, giriş formülü, H2 ritmi, anekdot kullanımı, SSS ve CTA dili için pratik yazım standardı.

### Oturum kuralları — tek satır harita

| Kural | Lokasyon |
|-------|----------|
| Yazar persona + hitap standardı (yaşıt, Vogue/Elle, yalnızca "siz") | `CLAUDE.md` §3 alt bölüm; `agents/writer_agent.md` “Few-shot ornek” |
| Dış URL link yasağı | `CLAUDE.md` §4; `agents/writer_agent.md` (~L79 civarı inline URL yasağı); `prompts/compliance-agent.md` “Strict Validation” |
| Kuruluş adı yerleştirme yasağı | `CLAUDE.md` §4; `prompts/compliance-agent.md` “Strict Validation” |
| Humanize zorunluluğu | `CLAUDE.md` §3 alt bölüm; `agents/writer_agent.md` “Humanize” |
| Ses sürekliliği (8 bölüm) | `CLAUDE.md` §3 alt bölüm; `agents/writer_agent.md` “Ses surekliligi” |
| FAQ disiplini (3–5 soru, jenerik yasak + tek görünür SSS yüzeyi + FAQPage schema) | `agents/writer_agent.py` validator; `CLAUDE.md` §3; `AGENTS.md` Article page layout + JSON-LD bölümleri |
| Vogue/TR makale güven blokları (`ArticleSummary`, `ArticleEditorNote`, `ArticleDisclaimer`) | `AGENTS.md` Article page layout; `CLAUDE.md` Article layout implementation; `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 3 + Faz 5 |
| Word-boundary `risky_term_patterns` | `agents/compliance_expert_agent.py` `risky_term_patterns` |
| Compliance threshold 85 | `config/pipeline_limits.py` `COMPLIANCE_SCORE_PUBLISH_OK` |

## Writer prompt’a gömülü (üretim aşamasında uygulanır)

Dosya: **`agents/writer_agent.md`**

| Konu | Yaklaşık konum | İçerik |
|------|-----------------|--------|
| 8 bölüm master yapı | `## estranova-master-prompt` (~L40–65) | `acilis_sahnesi`, `konu_cercevesi`, `mekanizma`, `kanit_seviyesi`, `turkiye`, `karar_cercevesi`, `pratik_veya_sss`, `kapanis` |
| Plaza dili sözlüğü | `### Plaza dili temizligi` (~L87–97) | aksiyon al → adım at, fokuslan → odaklan, set et → belirle, vb. |
| JSON / newline | `### JSON format uyarisi (ZORUNLU)` (~L151) | Double-escape önlemi; yalnızca gerçek newline |
| Few-shot | `## Few-shot ornek` (~L158–191) | Örnek: sıcak basmaları — açılış + mekanizma + kanıt |
| Yumuşatma | `## Dil ve uslup` (~L223–231) | “yardımcı olabilir”, “ilişkili olabilir”, vb. |
| SEO / uzunluk | `## Uzunluk ve SEO` (~L67+) | Kelime hedefi, H2/H3; **harici URL yok** (yumusak referans) |

## Validator / Compliance (otomatik kontrol)

| Konu | Dosya ve konum |
|------|----------------|
| Yapı doğrulama (8 outline, 8×`##`, Türkiye, mekanizma/kanıt ≥40 kelime, `_normalize_article_escapes`) | `agents/writer_agent.py` — `_validate_writer_structure` (~L64–129) |
| FAQ disiplini (3-5 soru, jenerik kalip yasagi) | `agents/writer_agent.py` — `_validate_writer_structure` (`pratik_veya_sss` blogu); `prompts/compliance-agent.md` madde 8 |
| Plaza substring listesi | `agents/compliance_expert_agent.py` — `PLAZA_LANGUAGE_SUBSTRINGS` (~L18–36) |
| Riskli kelimeler (`destekler`, `iyileştirir`, …) | `agents/compliance_expert_agent.py` — `risky_term_patterns` word-boundary döngüsü |
| Uzun cümle `style_risk` | `agents/compliance_expert_agent.py` — `_find_long_sentences` + ihlal ekleme (~L197–220) |
| Eşikler ve token tavanları | `config/pipeline_limits.py` — `COMPLIANCE_SCORE_PUBLISH_OK` (85), `COMPLIANCE_LONG_SENTENCE_WORDS`, `WRITER_MAX_OUTPUT_TOKENS`, skor sabitleri |
| Yaşıt tonu: harici markdown URL + adlı kuruluş | `agents/compliance_expert_agent.py` — `FORBIDDEN_SRC_ORG_MARKERS` + `strict.no_external_markdown_links` |
| DNA sinyal sayımı (master) | `agents/compliance_master_validation.py` — `_dna_signal_count` |

## Nerede NE eklenir?

- **Yeni yasak ifade** → `CLAUDE.md` §4 + gerekiyorsa `compliance_expert_agent.py` içinde `risky_term_patterns` veya `PLAZA_LANGUAGE_SUBSTRINGS`.
- **Yeni ton / ses kuralı** → `CLAUDE.md` §3.
- **Okura hitap kuralı** (`siz` / `sen` standardı) → `CLAUDE.md` §3 + `AGENTS.md` ton bölümü.
- **Yeni yapısal şart** (ör. bölüm sayısı) → `agents/writer_agent.md` (master 8 bölüm bölümü) + `agents/writer_agent.py` validator.
- **Yeni SEO / format kuralı** → `agents/writer_agent.md` → `## Uzunluk ve SEO`.
- **Few-shot’a örnek** → `agents/writer_agent.md` → `## Few-shot ornek` altına.

## Debug: “Niye bu skor düştü?”

- **Skor &lt; 75** veya deterministik **critical** tetikleyiciler (`risky_term_patterns`, plaza, disclaimer gap, vb.) → `agents/compliance_expert_agent.py` içindeki guardrail blokları (~L102–230 civarı).
- **LLM yorumu** (risk_findings) → `output/_debug/compliance_raw_*.json` ham çıktısı.

Bu harita + `compliance_raw` dump = “neden 72 aldı?” sorusuna cevap.

## İlgili operasyon belgesi

Pipeline geneli için: **[PIPELINE.md](PIPELINE.md)** — persona / LLM klinik ton kayması için **G6** (aynı dosyada Gotcha’lar).

## Persona (G6 özeti)

LLM’in varsayılan “doktor yazısı” eğilimine karşı **yaşıt** tonu: `CLAUDE.md` §3 *Yazar persona'sı*, `agents/writer_agent.md` (Humanize + linking yasağı), `compliance_expert_agent.py` (inline URL + adlı kuruluş yakalama).
