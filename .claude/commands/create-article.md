Estranova için yeni bir makale üret. Bu komut kuralları **tekrarlamaz, bağlar**: kanonik kaynaklar
`docs/ARTICLE-PRODUCTION-SPEC.md` (7 faz) + `CLAUDE.md` HARD CONSTRAINTS §1–§6 + `AGENTS.md` "Article page layout (Astro)".

## Başlamadan oku (pre-flight — zorunlu)

- `docs/ARTICLE-PRODUCTION-SPEC.md` ve `docs/WRITER-DYNAMICS-FRAMEWORK.md`
- `CLAUDE.md` HARD CONSTRAINTS §1–§6 (kimlik, okuyucu, ses, yasaklar, DNA, kalite checklist)
- Dr. Aksoy stil rehberi: `D:\A-klasör\obsidian-vaults\draksoyivf-knowledge\wiki\brand\senai-aksoy-makale-stil-rehberi.md`
- Rehberi okuduktan sonra aynen yaz: `Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi`. Dosya okunamıyorsa hafızadan devam etme; engeli bildir ve dur.
- Memory: `feedback_article_writing_checklist.md` (Evidence + Bilimsel Editör Notu unutma refleksini tetikler)

## Faz 1 — Konu + yazar atama

- Konu §1–§2 kapsamında olmalı: perimenopoz / menopoz / 40+ / hormonal geçişte yaşam tarzı.
  Tedavi pazarlaması, siyaset, lüks dekor, başhekim reklamı → **REDDET**.
- Tek tema, tek eksen (tema dağılması yok).
- Yazar ata: önce `src/data/writers.ts`'i oku (memory `feedback_cross_check_uniqueness`); §9/§10 ile karar ver.
- **Çift Rol kontrolü:** Senai Aksoy aktif yazarların jinekoloğu. Muayene odası bilgisi (HRT/ilaç/doz/lab/tanı) yazıya **sızmaz**.

## Faz 1.5 — Log review + cooldown

- Yazarın `hot.md §4` Şablon Kırma havuzu yoksa önce **havuz aktivasyonu** (8 imza kalıbı, min 10 varyant; yapay boilerplate yasak).
- `icerik/yazar-onaylari/<slug>/article-log.md` oku; cooldown uygula (aynı varyant 2 ardışık makalede yasak).
- Temporal context (yaş, mevsim, önceki makale uzaklığı) + tema sıçrama kontrolü.

## Faz 2–4 — Üslup + içerik (HARD CONSTRAINT)

- **Dil:** %100 doğal Türkçe; 8–10. sınıf okuma düzeyi; plaza dili yok; sakin/güven veren/sansasyonel olmayan ton.
- **Ses:** varsayılan **yaşıt editör**, hitap daima **"siz"** ("sen" yasak). Klinisyen istisnası yalnız `category:'scientific'` yazarlar
  (Senai/Bülent/Metin/Gonca/Ersin/Çağrı). Her H2'de bir yaşıt bağı + en az 1–2 humanize cümlesi.
- **Anekdot çerçeve tutarlılığı (HARD):** Birinci-elden tekil anekdotta özne persona ile uyumlu çerçevelenir.
  **Klinisyen yazar** → *"bir hastam / muayene odasında bir hasta / polikliniğe gelen bir kadın"*; klinisyende
  *"bir kadın (bizzat tanıkken) / tanıdığım bir kadın / bir arkadaşım / çevremdeki kadınlar / okudukça anladım"* YASAK.
  **Yaşıt yazar** → *"bir kadın / bir arkadaşım / çevremdeki biri"*; yaşıtta *"bir hastam"* YASAK. Her iki durumda anekdot
  GENEL/ANONİM (yaş/yer/tarih/tanı yok). Ayrıntı: CLAUDE.md §3 klinisyen istisnası.
- **Editöryal tipografi:** gövde `ArticleProsePanel` içinde `class="prose prose-lg prose-estranova max-w-none"`.
  6–8 **cümleli** H2 (tek-kelime başlık yasak); her H2 sonrası ilk paragraf **italic lede** (bullet/veri/uzun tanımla başlamak yasak).
  Manuel "01." numara / `<hr>` ayraç / italic tag YAZMA — CSS'ten gelir.
- **Kanıt:** `<Evidence level={N} />` → *(güçlü/iyi/orta/sınırlı/zayıf kanıt)*. **2–3 ideal (max 4–5)**, yazar sesinde yumuşatılmış.
  Literal `[●●●●○]` dizisi yasak.
- **Bilimsel Editör Notu** (`ArticleEditorNote`): 5 katmanlı, 150–250 kelime, Doç. Dr. Senai Aksoy imzalı.
  Senai kendi yazdığında 1. şahıs istisnası (spec Faz 4.3-ek).
- **Yasaklar (§4):** satış/funnel dili yok (randevu/en iyi/garantili/paket/kampanya/fiyat/başarı oranı);
  inline harici URL yok; uluslararası kuruluş/yayın adı yok (NAMS/NICE/JAMA/Mayo/WHO/FDA…); teşhis/reçete dili yok.

## Faz 3 + 4 — Astro scaffolding + yapısal bileşenler

- Dosya: `src/pages/<kategori>/<alt-kategori>/<slug>.astro` (spec Faz 3.1 kategori eşlemesi).
- Şablon: `AGENTS.md` "Article page layout (Astro)".
- Zorunlu yüzeyler: `ArticleSummary` (Kısa Özet) · tek görünür SSS (3–5 konuya özgü soru, jenerik meta soru yasak) ·
  `ArticleAuthorBlock` (writers.ts'ten, byline dikey 4:5) · `RelatedReadings` 3–5 (parent hub + komşu kategori) · `ArticleDisclaimer`.
- **Hero ASLA değişmez:** `const hero = submenuHeroByRoute['/<parent-hub>']!`. Makale görseli yalnız byline + `articleCardImageByRoute` (yatay 2.4:1).
- **JSON-LD:** `buildArticleSchemas()` → `MedicalWebPage` + `Article` + `BreadcrumbList` + `FAQPage` (schema, görünür SSS ile aynı kaynak).

### GEO / AI-alıntı optimizasyonu (AI Overviews · ChatGPT · Perplexity)

AI motorları passage-level "doğrudan cevap" çeker. Marka kuralları (gövdede dış URL/kuruluş adı yasak, §4 yumuşatma, "siz") korunarak:

- **Kısa Özet = doğrudan cevap, ~40–55 kelime, tek paragraf.** İlk cümle soruyu doğrudan yanıtlar; veri yığını/uzun girişle açılmaz. AI Overview'lerin tercih ettiği uzunluk.
- **SSS uzun-kuyruk + sayısal çapa:** 3–5 konuya özgü soru; mümkünse en az biri "ne zaman / hangi durumda / X ile Y farkı" kalıbında. Cevaplar gövdedeki iddialara dayanır, **yeni iddia eklemez**.
- **Sayısal çapa cümleleri:** somut sayı/eşik (yaş aralığı, oran, süre) içeren cümleler AI tarafından daha sık alıntılanır; gövdede ve Kısa Özet'te en az bir kez geçsin (klinik doğruluk + Evidence ile uyumlu).
- Kanonik kural: `docs/ARTICLE-PRODUCTION-SPEC.md` §4.8.

## Faz 5 — Pre-publish kapısı (13–20 must-pass)

Spec Faz 5 tablosunu uygula. Kritik kapılar:
- `npm run lexicon:check` temiz (`hard_ban` sıfır); compliance score ≥ 85.
- Yasak filtreleri temiz; dil %100 Türkçe; disclaimer görünür.
- **Yazar onay kapısı:** standart yazar **ONAYLIYORUM** demeden yayınlanmaz (`npm run author:send-for-approval`).
  İstisna: `berna-aksoy` / `alara-baykent` / `senai-aksoy` → KC editör doğrudan onayı (`article-approvals.ts` + `article-log.md`).

**13–20 herhangi "hayır" → büyük revizyon veya onay döngüsü. Yayın engellenir.**

## Faz 6–7 — Yayın + journal

- Onay sonrası: `src/pages/` rota + hub/sayı indeksi + `src/data/static-articles.ts`/RSS + `icerik/yayinlanmis-makaleler/` export.
- **Bayrak/temel (cornerstone) makaleyse:** `public/llms.txt` "Öne çıkan içerikler" listesini güncelle (küratörlü, hub başına ~1; sıradan makale eklenmez). Kanonik kural: `CLAUDE.md` §6 `llms.txt` öne-çıkan listesi.
- Push → Cloudflare auto-deploy; **sonra ana repo'da `git pull origin main`** (memory `project_worktree_workflow`).
- `article-log.md`'a yeni satır ekle + evrim review tetik kontrolü (Faz 7).

## Çıktı

- Tüm gövde temiz Türkçe; editöryal tipografi + Evidence + BEN + JSON-LD yerinde.
- Yayına hazır değil = yazar/KC onayı alınana kadar canlı rotaya, manifeste, hub indeksine **eklenmez**.
