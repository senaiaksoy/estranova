# Estranova Pipeline Operasyon Rehberi

Bu belge pipeline’ın **operasyonel gerçeğini** tek yerde toplar: modeller, eşikler, çıktı yolları, bilinen tuzaklar ve hata ayıklama.

**Stil, dil ve kural haritası** (hangi kural hangi dosyada): **[style-rules-map.md](style-rules-map.md)**

## Model Matrisi

Maliyet sütunu `main.py` içindeki `_estimate_cost_usd` sezgisine dayanır (yaklaşık **çıktı** token başına USD; 1 token ≈ 4 karakter). Ortalama token sayıları konuya ve revizyon turuna göre değişir.

| Rol | Model | Provider | Tipik çıktı (makale başına, kabaca) | Heuristik $/1M çıktı (main.py) |
|-----|--------|----------|--------------------------------------|--------------------------------|
| orchestrator | gpt-4o | OpenAI | Düşük (yalnızca yönlendirme) | 10 |
| researcher | gemini-2.5-flash | Google | Orta (yapılandırılmış JSON + özet) | 1.0 |
| writer | claude-sonnet-4-6 | Anthropic | Yüksek (makale + sosyal + bülten JSON) | 15 |
| checker | claude-sonnet-4-6 | Anthropic | Yüksek (fact-check JSON) | 15 |
| compliance | claude-sonnet-4-6 | Anthropic | Orta–yüksek (risk + skor JSON) | 15 |

**Neden Sonnet (writer / checker / compliance):** `gpt-4o` master prompt’taki 8 bölüm + mekanizma derinliği şartını tutarlı karşılamıyordu. `claude-sonnet-4-6`, few-shot ile yapı disiplinini güçlendiriyor.

**Neden Gemini (researcher):** Yapılandırılmış JSON ve özet için yeterli; `main.py` maliyet tablosunda `gemini-2.5-flash` ile uyumlu heuristik kullanılıyor.

Kaynak: `config/llm_config.py`, `main.py` (`_estimate_cost_usd`).

## Eşikler ve Limitler (`config/pipeline_limits.py`)

- **MAX_REVISION_ITERATIONS = 2** — İkinci compliance turundan sonra `current_iteration >= 2` ise hard-stop: `best_effort_publish` + `ready_to_publish_best_effort` (mutation **compliance node** içinde).
- **COMPLIANCE_SCORE_PUBLISH_OK = 85** — Bu ve üstü doğrudan yayın bandı. (Not: Sonnet compliance agent kalibrasyonu 90+ bandını nadiren veriyor; 85 eşiği Estranova editoryal kalitesiyle uyumlu, pragmatik yayın sınırı. Daha yüksek eşik için compliance prompt iyileştirmesi ileride değerlendirilebilir.)
- **COMPLIANCE_SCORE_REJECT_BELOW = 75** — Altı “reject” bandı; orchestrator akışı revizyona gider.
- **75–84 aralığı:** `low_compliance_score` ihlali **medium** severity (önceden tümü critical değildi; skor eşiği tek başına critical olmaktan çıkarıldı). Revizyon döngüsü + gerekirse max iteration sonrası best-effort.
- **MIN_COMPLIANCE_SCORE_PUBLISH** — Yayın eşiği ile hizalı (85).
- **COMPLIANCE_LONG_SENTENCE_WORDS = 20** — Üzeri `style_risk` (medium).
- **WRITER_MAX_OUTPUT_TOKENS = 16384** — Uzun Türkçe makale + revizyon için tavan.
- **CHECKER_MAX_OUTPUT_TOKENS = 8192** — Checker JSON’un kesilmemesi için.

## Yayın Akışı Semantiği

- **`output/{date}-{slug}.md`** — Yayına hazır kök makale (raporda `root_md_written=True`).
  - Koşul: `final_decision` ∈ (`ready_to_publish`, `ready_to_publish_best_effort`).
  - İçerik kaynağı: `publisher_output.content.body_markdown` (ham `draft_content.article` değil). Publisher paketi: **yayın metası (SEO)** + **iç bağlantı önerileri**; sablon FAQ yok (SSS yalnızca Writer `pratik_veya_sss` içinde). **`## Kaynaklar` numaralı URL listesi yok** (akran tonu; araştırma `approved_sources` arka planda kalır).
- **`output/drafts/{date}-{slug}.md`** — Henüz “yayın hazır” kararı olmayan veya fallback taslaklar.
- **`output/_debug/writer_raw_*.json`** + **`writer_article_*.md`** — Her Writer `call_llm_json` sonrası ham JSON + makale metni.
- **`output/_debug/compliance_raw_*.json`** — Her Compliance ham LLM JSON çıktısı.
- **`output/_baseline/`** — Elle oluşturulan referans artefaktlar (varsa).

### Konu → Kategori Yönlendirmesi (Routing)

Writer her makale için bir `category` alanı üretir; izin verilen 9 değerden biri olmalı (`agents/writer_agent.py` → `ALLOWED_CATEGORIES`, `_validate_writer_structure`). State’te `target_category` olarak tutulur; Streamlit onay ekranında override edilebilir; CLI’da `--category` ile sonuç üzerine yazılabilir.

Yayınlama akışında (onay sonrası):

1. Markdown → `src/content/blog/{date}-{slug}.md` (içerik kaynağı; `save_approved_blog_article` / routing fonksiyonunun ilk adımı).
2. Astro sayfa → `src/pages/{category}/…/{slug}.astro` (`save_approved_article_with_routing` — kategori `hormonal-gecis/menopoz` gibi alt yolları klasör yapısına yansıtır).

**Manuel adım (her yeni yazıdan sonra):**

- `src/data/submenu-heroes.ts` — route anahtarına hero görseli (ör. Unsplash editöryal).
- `src/data/navigation.ts` — ilgili kategorinin `children` listesine yeni alt madde.

Otomatik düzenleme yapılmaz (editöryal karar). Onay sonrası Streamlit başarı mesajı bu iki dosyayı hatırlatır.

## Gelecek calismalar (planli iyilestirmeler)

### EEAT + Schema Markup (Astro tarafi)

Google YMYL kategorisinde yer alan estranova icerigi icin asagidaki katmanlar **planlanmistir** ama henuz uygulanmamistir:

1. **FAQPage JSON-LD schema markup** — Astro layout'unda her makale icin `pratik_veya_sss` bolumunu structured data olarak render et (rich snippet sansi 2023'ten beri sinirli ama Google'in icerigi anlamasina yardimci olur).
2. **Author bio + medical reviewer signature** — Her makalenin altinda yazar profili + "Last reviewed by Dr. X" imzasi (EEAT sinyali).
3. **Last updated date** — frontmatter'a `updated` alani; Astro'da "Son guncelleme: tarih" goster (Google saglik icerigi icin guncellige onem verir).
4. **Article schema markup (NewsArticle / MedicalWebPage)** — makale tipini structured data ile bildirme.

Bu maddeler ileride bir gelistirme oturumunda ele alinir.

## Gotcha’lar (ileride düşmemek için)

### G1: Double-escape bug (Claude Sonnet)

Sonnet bazen `draft_content.article` içinde hem gerçek satır sonu hem **literal** `\n` metni üretir; `split_h2_sections` satır başındaki `##` sayımını bozabilir.

**Çözüm:** `_validate_writer_structure` içinde `split_h2_sections` öncesi `_normalize_article_escapes` (`agents/writer_agent.py`, `draft_content.article` normalize + geri yazma). Prompt: `agents/writer_agent.md` → `### JSON format uyarisi (ZORUNLU)` (~satır 151). Normalizer güvenlik ağıdır; LLM davranışı %100 garanti değildir.

### G2: `load_dotenv(override=True)` zorunlu

Windows’ta OS ortamında boş veya eski API anahtarı kalabilir. `override=False` iken `.env` üstüne yazılmaz; pipeline sessizce fallback modele kayabilir.

Şu giriş noktalarında `override=True`: `config/llm_manager.py`, `main.py`, `streamlit_app.py`, `rag/vectorstore.py`.

### G3: LangGraph router purity

Conditional edge fonksiyonlarında (`orchestrator.route_*`) **state mutate etmek kalıcı olmaz**. Sayım artışı ve `best_effort_publish` / `pipeline_halt_reason` güncellemesi **`ComplianceExpertAgent.run`** (node) içinde yapılır; router yalnızca state okur ve hedef node adını döner.

### G4: Risky term deterministic check

`compliance_expert_agent.py` içinde `risky_terms` (`"destekler"`, `"iyileştirir"`, …) **substring** ile aranır; `"destekleri"` gibi çoğullar yanlış pozitif üretebilir. Writer/publisher çıktılarında bu köklerden kaçının.

### G5: Gemini 404 / 429

Eski `gemini-1.5-flash` bazı ortamlarda 404 (model yok). Aktif hedef: **`gemini-2.5-flash`** (`config/llm_config.py`). Google tarafında kota / faturalama kısıtı olursa 429 veya benzeri hatalarda `LLMManager` tek seferlik `gpt-4o` fallback yapabilir — log’da `WARN` görülür.

### G6: Persona kayması

LLM’ler varsayılan olarak akademik/klinik tonda yazma eğilimi gösterir. Estranova prompt’u **akran** tonunu zorunlu kılar (`CLAUDE.md` §3 *Yazar persona'sı*). Makale gövdesinde **inline harici `[metin](http...)` linki** ve **NAMS / NICE / JAMA** vb. adlı kuruluş atıfları `compliance_expert_agent.py` içinde deterministik **critical `regulation_risk`** ile yakalanır.

## Debug rehberi

**Writer “INVALID OUTPUT” veya H2 sayımı:**

1. En son `output/_debug/writer_raw_{slug}_{iter}_*.json` dosyasını aç.
2. `article_outline` tam 8 eleman mı, `section_key` sırası master ile mi?
3. `draft_content.article` içinde literal `\n` var mı? (metin içi `\\n` dizileri)
4. `##` başlıkları gerçek satır başında mı?

**Compliance düşük skor:**

1. En son `output/_debug/compliance_raw_{slug}_{iter}_*.json`
2. `risk_findings[]` → `type`, `severity`, `fix_suggestion`
3. Deterministik ekler: disclaimer, plaza, uzun cümle, skor eşiği (`agents/compliance_expert_agent.py`)

## Referans commitler (oturum iz zinciri)

| Commit | Kısa etki |
|--------|-----------|
| `a5eb8c1` | Kök `output/*.md` yalnızca publisher `body_markdown` ile yazılır. |
| `3b4dbad` | Ölü `*_prompt.txt` kaldırıldı; kurallar `prompts/*.md` ile birleşti. |
| `c2f78e5` | Writer + checker modeli `claude-sonnet-4-6`; maliyet heuristiği güncellendi. |
| `17ac28e` | `load_dotenv(override=True)` ile `.env` önceliği düzeltildi. |
| `e17d123` | Writer prompt’a few-shot (açılış + mekanizma + kanıt). |
| `d3cd794` | Writer debug dump + revizyonda graceful validation fail. |
| `798cd82` | Revizyon sayaçları orchestrator router’dan compliance node’a taşındı (kalıcı state). |
| `7c44472` | JSON makalede çift kaçışlı newline normalizasyonu + prompt uyarısı. |
| `60ced8d` | Publisher iç link şablonunda “destekler” kelimesi kaldırıldı. |
| `96d9fc6` | Compliance modeli Sonnet + compliance ham JSON dump. |
| `db54f53` | 75–84 skor bandında `low_compliance_score` artık critical değil (medium). |
| `36ea6a4` | Best-effort publish mutasyonu compliance node’unda; router saf yönlendirme. |
| `32f22bd` | Researcher `gemini-2.5-flash` (1.5-flash yerine). |
