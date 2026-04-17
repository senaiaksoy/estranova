# Stil ve Dil Kurallari — Harita

Estranova’nın editoryal ses, yasak ifadeler, yumuşatma kalıpları, yapı şartları ve dil temizliği kuralları **tek bir dosyada değil** — üretim hattında farklı noktalara yerleştirilmiştir. Yeni bir kural eklenecekse **doğru katmana** konmalıdır.

Satır numaraları referans içindir; dosya değişince kayabilir — önce **bölüm başlıklarına** bakın.

## Brand-level (değişmez üst kurallar)

- **`CLAUDE.md` §1–§6** — Editoryal kimlik, ton, yasak ifadeler, tıbbi sınır, Türkçe yayın dili, okuma düzeyi (HARD CONSTRAINTS).
- **`AGENTS.md`** — Site genelinde forbidden examples, allowed neutral CTA örnekleri, ton tarifi.

## Writer prompt’a gömülü (üretim aşamasında uygulanır)

Dosya: **`agents/writer_agent.md`**

| Konu | Yaklaşık konum | İçerik |
|------|-----------------|--------|
| 8 bölüm master yapı | `## estranova-master-prompt` (~L40–65) | `acilis_sahnesi`, `konu_cercevesi`, `mekanizma`, `kanit_seviyesi`, `turkiye`, `karar_cercevesi`, `pratik_veya_sss`, `kapanis` |
| Plaza dili sözlüğü | `### Plaza dili temizligi` (~L87–97) | aksiyon al → adım at, fokuslan → odaklan, set et → belirle, vb. |
| JSON / newline | `### JSON format uyarisi (ZORUNLU)` (~L151) | Double-escape önlemi; yalnızca gerçek newline |
| Few-shot | `## Few-shot ornek` (~L158–191) | Örnek: sıcak basmaları — açılış + mekanizma + kanıt |
| Yumuşatma | `## Dil ve uslup` (~L223–231) | “yardımcı olabilir”, “ilişkili olabilir”, vb. |
| SEO / uzunluk | `## Uzunluk ve SEO` (~L67+) | Kelime hedefi, H2/H3, harici link |

## Validator / Compliance (otomatik kontrol)

| Konu | Dosya ve konum |
|------|----------------|
| Yapı doğrulama (8 outline, 8×`##`, Türkiye, mekanizma/kanıt ≥40 kelime, `_normalize_article_escapes`) | `agents/writer_agent.py` — `_validate_writer_structure` (~L64–129) |
| Plaza substring listesi | `agents/compliance_expert_agent.py` — `PLAZA_LANGUAGE_SUBSTRINGS` (~L18–36) |
| Riskli kelimeler (`destekler`, `iyileştirir`, …) | `agents/compliance_expert_agent.py` — `risky_terms` döngüsü (~L155–170) |
| Uzun cümle `style_risk` | `agents/compliance_expert_agent.py` — `_find_long_sentences` + ihlal ekleme (~L197–220) |
| Eşikler ve token tavanları | `config/pipeline_limits.py` — `COMPLIANCE_LONG_SENTENCE_WORDS`, `WRITER_MAX_OUTPUT_TOKENS`, skor sabitleri |

## Nerede NE eklenir?

- **Yeni yasak ifade** → `CLAUDE.md` §4 + gerekiyorsa `compliance_expert_agent.py` içinde `risky_terms` veya `PLAZA_LANGUAGE_SUBSTRINGS`.
- **Yeni ton / ses kuralı** → `CLAUDE.md` §3.
- **Yeni yapısal şart** (ör. bölüm sayısı) → `agents/writer_agent.md` (master 8 bölüm bölümü) + `agents/writer_agent.py` validator.
- **Yeni SEO / format kuralı** → `agents/writer_agent.md` → `## Uzunluk ve SEO`.
- **Few-shot’a örnek** → `agents/writer_agent.md` → `## Few-shot ornek` altına.

## Debug: “Niye bu skor düştü?”

- **Skor &lt; 75** veya deterministik **critical** tetikleyiciler (risky_terms, plaza, disclaimer gap, vb.) → `agents/compliance_expert_agent.py` içindeki guardrail blokları (~L102–230 civarı).
- **LLM yorumu** (risk_findings) → `output/_debug/compliance_raw_*.json` ham çıktısı.

Bu harita + `compliance_raw` dump = “neden 72 aldı?” sorusuna cevap.

## İlgili operasyon belgesi

Pipeline geneli için: **[PIPELINE.md](PIPELINE.md)**
