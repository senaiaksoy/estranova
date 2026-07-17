# GEO / AEO İçerik-Strateji Çalışması — estranova.com

> AI arama görünürlüğü (Google AI Overviews, ChatGPT web arama, Perplexity, Bing Copilot) için hazırlık denetimi ve içerik stratejisi.
> Tarih: 3 Haziran 2026 · Kapsam: canlı site + repo (Astro statik build, 149 HTML sayfası) · Yöntem: live fetch + repo denetimi + marka-mention taraması.
> **Rev. 2 (4 Haziran 2026):** senaiaksoy.net repo'su yerel doğrulandı; "kırık entity anchor" bulgusu geri çekildi (WebFetch yanlış-negatifi) ve Dr. Aksoy'un Wikidata entity'si (Q139893832) keşfedildi. Otorite skoru ve §5/§10 buna göre güncellendi. Estranova Organization schema'sı `sameAs` + temiz `@id` ile zenginleştirildi (uygulandı).

---

## 1. GEO Hazırlık Skoru: **66 / 100**

| Kriter | Ağırlık | Skor | Not |
|--------|---------|------|-----|
| Citability (alıntılanabilirlik) | %25 | 17/25 | Güçlü açılış tanımı + Kısa Özet + kanıt etiketleri; ama editöryal akış uzun, soru-başlık yok |
| Yapısal okunabilirlik | %20 | 13/20 | Temiz hiyerarşi + FAQ + özet kutusu; H2'ler ifade-temelli, tablo/liste az |
| Çok-modlu içerik | %15 | 6/15 | Editöryal portreler var; video / infografik / hesap aracı yok |
| Otorite & marka sinyalleri | %20 | 13/20 | Yazar entity grafiği canlı & çift yönlü (Wikidata + ORCID + sameAs); marka adı site-dışında hâlâ görünmüyor |
| Teknik erişilebilirlik | %20 | 17/20 | SSR statik HTML, AI crawler açık, llms.txt + sitemap var |

**Tek cümlelik teşhis:** Estranova'nın **on-page GEO altyapısı sınıfının üstünde** (statik HTML, llms.txt, kanıt etiketleri, çift-yönlü entity grafiği) ve **yazar otoritesi beklenenden güçlü** — Dr. Aksoy'un Wikidata + ORCID entity'si Estranova'ya bağlı. Kalan asıl açık **markanın kendisinde**: "Estranova/Eşik" adı hiçbir AI sisteminin güvendiği üçüncü-taraf kaynakta (Wikipedia, Reddit, YouTube içeriği, basın) görünmüyor. AI görünürlüğünün önemli kısmı bu site-dışı marka katmanından gelir.

---

## 2. Platform Kırılımı

| Platform | Tahmini skor | Neden |
|----------|-------------|-------|
| **Google AI Overviews** | ~60/100 | On-page mükemmel; ama AIO alıntılarının %92'si top-10 organik sıralamadan gelir — site yeni (Mayıs 2026), domain otoritesi düşük. İçerik hazır, sıralama henüz değil. |
| **ChatGPT (web arama)** | ~52/100 | ChatGPT alıntılarının %47.9'u Wikipedia, %11.3'ü Reddit kaynaklı. Estranova markası ikisinde de yok; ama yazar Dr. Aksoy'un Wikidata entity'si modele zemin sağlıyor — marka, bu entity üzerinden dolaylı güven kazanabilir. |
| **Perplexity** | ~45/100 | Alıntıların %46.7'si Reddit. Türkçe kadın-sağlığı topluluk içeriğinde Estranova mevcut değil. |
| **Bing Copilot** | ~58/100 | Bing index + statik HTML iyi; IndexNow kurulu değil, hızlandırılabilir. |

**Kritik gerçek:** Domainlerin yalnızca %11'i aynı sorgu için hem ChatGPT hem Google AIO tarafından alıntılanır. Platforma özgü optimizasyon zorunlu — tek bir "SEO" hamlesi dört platformu birden taşımaz.

---

## 3. AI Crawler Erişim Durumu

Canlı `robots.txt` (kaynak: `src/pages/robots.txt.ts`):

```
User-agent: *
Allow: /

Sitemap: https://estranova.com/sitemap-index.xml
# RSS: https://estranova.com/rss.xml
```

| Crawler | Sahip | Durum |
|---------|-------|-------|
| GPTBot | OpenAI | ✅ İzinli (wildcard) |
| OAI-SearchBot | OpenAI | ✅ İzinli |
| ChatGPT-User | OpenAI | ✅ İzinli |
| ClaudeBot | Anthropic | ✅ İzinli |
| PerplexityBot | Perplexity | ✅ İzinli |
| Bytespider / CCBot | ByteDance / Common Crawl | ✅ İzinli (istenirse engellenebilir) |

**Değerlendirme:** Wildcard `Allow: /` tüm AI arama crawler'larına açık — AI görünürlüğü için doğru tercih. Engelleme yok; aksiyon gerekmez. **Tek uyarı:** RSS satırı yorum (`#`) — devre dışı. RSS, AI sistemlerinin içerik tazeliğini takip ettiği bir besleme; aktive edilmesi önerilir (bkz. §9).

> Not: `isProductionLaunch()` false iken site tüm crawler'lara `Disallow: /` döner. Canlı production'da doğru çıktı (`Allow: /`) teyit edildi.

---

## 4. llms.txt Durumu

✅ **Mevcut ve iyi yapılandırılmış** (`public/llms.txt`, canlıda erişilebilir).

Güçlü yanlar:
- Net `# Estranova` başlığı + `>` özet satırı
- 5 bilgi mimarisi bölümü tam URL ile listeli
- "Bu site **ne değildir**" negatif tanımı (klinik değil, satış hunisi değil) — AI'ın markayı doğru kategorize etmesini sağlar
- Kanıt düzeyi etiketleri açıklanmış (citability sinyali olarak)
- Tıbbi inceleyici (Doç. Dr. Senai Aksoy) ismi geçiyor

İyileştirme önerileri:
1. **`## Öne çıkan içerikler`** bölümü ekle — en güçlü 8-10 makaleyi tek tek URL+açıklama ile listele (AI'ın hangi sayfaları "amiral" sayacağını yönlendirir).
2. **`llms-full.txt`** varyantı ekle — ana rehber makalelerin tam metnini tek dosyada topla (bazı AI sistemleri bunu tercih eder).
3. İletişim / yetki satırı: yayıncı kurum + editöryal sorumlu.

---

## 5. Marka Mention Analizi (en kritik açık)

AI alıntılarıyla **backlink'lerden 3 kat güçlü korelasyon** marka mention'larındadır (Ahrefs, Aralık 2025). Mevcut durum:

| Sinyal | Estranova durumu | AI etkisi |
|--------|-----------------|-----------|
| Wikidata | ✅ **Yazar var (Q139893832)** · ❌ marka yok | Entity grounding — ChatGPT/AIO için güçlü |
| Wikipedia | ❌ Yok (ne marka ne yazar maddesi) | ChatGPT'nin #1 kaynağı — açık duruyor |
| Reddit | ❌ Yok | Perplexity'nin #1 kaynağı — büyük açık |
| YouTube | ⚠️ Dr. Aksoy kanalı var (@DocentDrSenaiAksoy), marka içeriği yok | En güçlü tek korelasyon (~0.737) |
| LinkedIn | ⚠️ Dr. Aksoy şahsi profili var, marka yok | Orta |
| Basın / dış yayın | ❌ Estranova/Eşik adıyla bulunamadı | — |

**Bulgular:**
- **estranova.com markası hiçbir üçüncü-taraf kaynakta görünmüyor.** Marka aramaları yalnızca jenerik menopoz rakiplerini (memorial, medicalpark, hekim siteleri) döndürdü.
- **Resmi sosyal hesap:** Instagram **@estranovaofficial** (kullanıcı doğruladı). Aramada çıkan `@esikdergi` / `esik.dergi` hesapları **Estranova'ya ait DEĞİL** — `sameAs`'e konmadı. Estranova `sameAs` artık yalnızca doğrulanmış hesapları içeriyor.
- **Yazar entity grafiği canlı ve çift yönlü (düzeltildi):** `senaiaksoy.net` `#person` @id'li tam bir `Person` JSON-LD yayınlıyor — `sameAs`'te Wikidata Q139893832, ORCID `0000-0003-4110-5290`, LinkedIn, YouTube, Instagram, Vimeo, Facebook, **ve estranova.com**. Tabip sicil + kredansiyel + klinik dahil. Estranova tarafı da `reviewedBy: {@id: #person}` ile geri referans veriyor.

### 5a. ✅ Entity Anchor sağlam (önceki "kırık" bulgu geri çekildi)

İlk taslakta `senaiaksoy.net`'in `#person` entity'sini deklare etmediğini raporlamıştık — bu bir **WebFetch yanlış-negatifiydi**: araç `<script type="application/ld+json">` bloklarını markdown'a çevirirken siliyor, dolayısıyla entity'yi "göremedi". Yerel repo (`D:\A-klasör\senaiaksoy.net`) ve canlı `dist/index.html` doğrulandı:

```js
// src/utils/article-schema.ts (Estranova) — referans
const DR_AKSOY_PERSON_ID = 'https://senaiaksoy.net/#person';
```

```jsonc
// senaiaksoy.net/src/layouts/Layout.astro — hedef entity (CANLI)
{ "@type": "Person", "@id": "https://senaiaksoy.net/#person",
  "sameAs": ["https://orcid.org/0000-0003-4110-5290",
             "https://www.wikidata.org/wiki/Q139893832",
             "https://estranova.com/", ...] }
```

Referans iki uçta da gerçek bir entity'ye çözülüyor; portföy birleştirmesi (Estranova ↔ Dr. Aksoy ↔ Wikidata/ORCID/akademik) **kurulu**. Estranova tarafında yapılan tek iyileştirme `@id`'lerin çift-slash'tan arındırılmasıydı (`estranova.com/#organization`) — string eşleşmesi artık temiz.

**İsteğe bağlı incelik:** senaiaksoy.net Person'unda `estranova.com` `sameAs` içinde — ama Estranova, Dr. Aksoy'un *başka bir profili* değil, *editörlük yaptığı kurum*. Semantik olarak daha doğrusu `Person` üzerinde ayrı bir ilişki (`worksFor`/`affiliation` → `estranova.com/#organization`) kurup `sameAs`'ten estranova.com'u çıkarmaktır. Pratikte mevcut hâli zararsız; düşük öncelik.

---

## 6. Passage-Level Citability (134-167 kelime blokları)

İncelenen örnek: `/hormonal-gecis/menopoz/menopoz-nedir`

**Güçlü:**
- ✅ **Kısa Özet kutusu** açılışta — AI için hazır, çıkarılabilir cevap bloğu.
- ✅ İlk bölüm **geriye-dönük tanımla açılıyor** (~ilk 100 kelimede "menopoz = son adetten 12 ay sonra"). "X nedir" sorgusu için doğrudan cevap.
- ✅ **Kanıt etiketleri** (*(güçlü kanıt)* vb.) — benzersiz, makine-okunur güven sinyali. Türk kadın-sağlığı içeriğinde nadir; ayırt edici citability avantajı.
- ✅ Byline + tıbbi inceleyici + tarih + okuma süresi görünür.

**Zayıf (içerik-strateji aksiyonu gerektiren):**
- ⚠️ **H2'ler ifade-temelli, soru-temelli değil.** Mevcut: "Geriye Dönük Netleşen Bir Eşik", "Üç Evre", "Hormon Değişimleri Bu Evrede". AI sorgu eşleşmesi soru kalıbını ödüllendirir. Bu, Vogue/Elle editöryal estetiğiyle (CLAUDE.md §editöryal tipografi) çatışıyor — **çözüm §10'da: görünür başlığı koru, FAQ + schema soru yükünü taşısın.**
- ⚠️ **Editöryal akış uzun-form; bağımsız 134-167 kelimelik "answer blok"ları az.** Prose güzel ama AI bir paragrafı bağlamından kopararak alıntılamakta zorlanır. İlk lede italik cümle iyi başlangıç; her H2 bölümünün ilk paragrafının **tek başına ayakta duran 40-60 kelimelik bir cevapla** açılması citability'yi yükseltir.

---

## 7. Server-Side Rendering Kontrolü

✅ **Mükemmel.** Astro statik build — 149 sayfa tam HTML olarak önceden render ediliyor. AI crawler'ları JavaScript çalıştırmaz; statik HTML kritik gereksinim ve Estranova bunu karşılıyor. İçerik, schema (JSON-LD), Kısa Özet, FAQ — hepsi ilk HTML yanıtında mevcut. Bu alanda aksiyon gerekmez.

`_headers`: güvenlik başlıkları + immutable cache doğru. `interest-cohort=()` (FLoC opt-out) mevcut.

---

## 8. Schema Önerileri (AI keşfedilebilirliği)

Mevcut schema katmanı (`buildArticleSchemas`) **güçlü**: `MedicalWebPage` + `Article` + `BreadcrumbList` + `FAQPage`, `inLanguage: tr-TR`, `reviewedBy`, `datePublished/Modified`. Eksikler:

1. **Person @id'yi gerçek kıl** (§5a) — en yüksek öncelikli schema işi.
2. **`Organization` / `NewsMediaOrganization` schema'sı** anasayfaya ekle: `name: Estranova`, `sameAs: [Instagram @esikdergi, Facebook esik.dergi, senaiaksoy.net]`. Şu an publisher yalnızca makale içinde inline; bağımsız Organization entity'si yok — markayı "Eşik" sosyal hesaplarıyla birleştiren tek nokta bu olur.
3. **`speakable` özelliği** (`SpeakableSpecification`) — Kısa Özet ve FAQ bloklarını sesli-asistan/AI alıntısı için işaretle.
4. **`MedicalWebPage.lastReviewed` + `reviewedBy` zaten var** — `datePublished` ile `dateModified` farklılaştığında AI tazelik sinyali için ayrı tut (şu an ikisi aynı tarih).
5. **`citation` / `isBasedOn`** — kanıt-temelli iddialar için (kuruluş adı yasağına takılmadan) jenerik araştırma referansı schema düzeyinde verilebilir; gövde metni CLAUDE.md §4'e uyumlu kalır.

---

## 9. İçeriği Yeniden Biçimlendirme Önerileri (somut)

**A — Her rehber makalesinin ilk H2 bölümünü "answer-first" yap:**
H2 görünür başlığı editöryal kalır (örn. "Geriye Dönük Netleşen Bir Eşik"). Hemen altındaki italik lede'den **sonra**, 40-60 kelimelik bağımsız bir tanım cümlesi gelsin — bağlamsız alıntılanabilir. Mevcut menopoz-nedir sayfası bunu zaten yarı yapıyor; kalıbı tüm hub-amiral makalelere yay.

**B — FAQ'ı soru-eşleşme motoru olarak kullan:**
CLAUDE.md görünür H2'lerin ifade-temelli (dergi estetiği) kalmasını istiyor. Çözüm: **soru yükünü FAQ + FAQPage schema taşısın.** Her makalede 3-5 FAQ zaten zorunlu (§3 FAQ disiplini). FAQ sorularını gerçek long-tail arama kalıbıyla yaz: "Menopoz kaç yaşında başlar?", "Adet kesilince menopoz mu?" — bunlar AI'ın doğrudan eşleştireceği sorgulardır ve hem görünür gövdede hem schema'da yer alır.

**C — Karşılaştırma/veri için tablo ekle:**
Çok-modlu içerik %156 daha yüksek seçilme oranı görür. "Perimenopoz vs menopoz vs postmenopoz", "HRT tipleri", "kanıt düzeyi açıklaması" gibi yerlerde **tablo** kullan. Editöryal prose'u bozmaz, AI için yapılandırılmış veri sağlar.

**D — "Eşik" ↔ "Estranova" entity köprüsü:**
Sosyal bio'larında, llms.txt'te ve Organization schema'sında **her iki ad birlikte** geçsin ("Estranova — Eşik dijital dergisi"). Şu an AI ikisini ayrı varlık sanıyor.

---

## 10. En Yüksek Etkili 5 Değişiklik

| # | Aksiyon | Etki | Çaba | Sahip |
|---|---------|------|------|-------|
| 1 | **Estranova için Wikidata item'ı oluştur** ve Dr. Aksoy'un mevcut item'ına (Q139893832) `employer`/`founded by`/`affiliation` ilişkisiyle bağla | Markayı, yazarın hâlihazırda güçlü entity grafiğine bağlar; AI entity-grounding'i markaya taşır | Orta | İçerik/Teknik |
| 2 | **Wikipedia + Reddit varlığı kur** (marka/yazar) — ChatGPT & Perplexity'nin birincil kaynakları | AI alıntı olasılığı en güçlü kaldıraç | Yüksek | İçerik/PR |
| 3 | **Estranova Organization schema'sını zenginleştir** — `sameAs`, `NewsMediaOrganization`, temiz `@id` | Marka entity'sini netleştirir, yazar entity'siyle çift-yönlü bağlar | Düşük | **✅ Uygulandı** |
| 4 | **FAQ'ları long-tail soru kalıbına çevir** (görünür + FAQPage schema), tüm amiral makalelerde | Soru-eşleşmeli AI alıntısı, dergi estetiğini bozmadan | Orta | İçerik |
| 5 | **Her hub-amiral makaleye "answer-first" 40-60 kelime tanım bloğu** + 1 karşılaştırma tablosu | Passage-level citability + çok-modlu sinyal | Orta | İçerik |

---

## 11. Hızlı Kazanımlar (bu hafta yapılabilir)

- [x] **Anasayfa `Organization` schema + `sameAs`** (Instagram @estranovaofficial + senaiaksoy.net) + `NewsMediaOrganization` + temiz `@id` — *uygulandı (`src/layouts/SiteLayout.astro`)*
- [x] llms.txt'e `## Öne çıkan içerikler` bölümü (en güçlü 8-10 makale) — *uygulandı (`public/llms.txt`)*
- [x] robots.txt'teki `# RSS` satırı — *yeniden denetlendi: robots.txt'te resmî bir "feed" direktifi yok, satır zaten sadece açıklayıcı yorum. Asıl feed-discovery mekanizması `SiteLayout.astro:150`'deki `<link rel="alternate" type="application/rss+xml">` — bu zaten doğru ve canlı. Aksiyon gerekmiyor, madde kapatıldı.*
- [x] IndexNow protokolü kur (Bing Copilot görünürlüğü) — *kurulum tamam (2026-07-15): key dosyası `public/9c6a06a641c28cd9b2144466bbc130d5.txt`, gönderim script'i `scripts/indexnow-submit.mjs` (`npm run seo:indexnow`). **Çalıştırma sırası:** key dosyası önce production'a deploy edilmeli (IndexNow key sahipliğini `estranova.com/<key>.txt` fetch ederek doğrular), sonra `npm run seo:indexnow` bir kez elle çalıştırılır; sonraki yayınlarda tek makale URL'si ile (`npm run seo:indexnow -- <url>`) tekrarlanabilir.*
- [ ] `dateModified`'ı içerik güncellendiğinde gerçekten değiştir (şu an `datePublished` ile özdeş) — süreç kuralı `docs/ARTICLE-PRODUCTION-SPEC.md` §4.7'de var, disiplin editör takibine bağlı

## 12. Orta Vadeli (4-8 hafta)

- [ ] Yazar bio sayfalarına (`/yayin-kurulu`, `/yazarlar/<slug>`) tam Person schema + dış profil linkleri
- [ ] Her hub-amiral makaleye answer-first blok + karşılaştırma tablosu
- [ ] FAQ long-tail dönüşümü (tüm aktif makaleler)
- [ ] YouTube içerik stratejisi (en güçlü AI korelasyon sinyali) — Eşik dergi kanalı + uzman kısa videoları

## 13. Yüksek Etki, Uzun Vade

- [ ] **Özgün araştırma/anket** üret (örn. "Türkiye'de 40+ kadınların menopoz deneyimi anketi") — benzersiz, alıntılanabilir veri; hiçbir rakipte yok
- [ ] Marka/yazar için Wikipedia varlığı (notability eşiği için önce basın mention)
- [ ] Türkçe kadın-sağlığı topluluklarında (Reddit r/Turkey sağlık başlıkları, Ekşi, kadın forumları) organik, spam-olmayan varlık
- [ ] `sameAs` ile kapsamlı entity-linking — Estranova ↔ Eşik ↔ Dr. Aksoy ↔ akademik yayın portföyü tek graf

---

## 14. Ek — 2026-07-15 güncellemesi (Google resmî AI optimizasyon rehberi denetimi)

Google'ın resmî rehberi (developers.google.com/search/docs/fundamentals/ai-optimization-guide, Mayıs 2026) ve 2026 GEO araştırması ışığında yapılan ek denetim:

- **Ajan-tabanlı tarama (agentic browsing) hazır durum kontrolü:** `ArticleFAQ.astro` (native `<details>/<summary>` — disclosure state otomatik erişilebilirlik ağacına yansır), `ArticleTOC.astro` (`<nav aria-label="İçindekiler">` + sıralı `<ol>` landmark), `Evidence.astro` (`aria-label` + `title` ile kanıt düzeyi ekran okuyucuya/ajan'a da taşınıyor) incelendi — **üçü de zaten doğru semantik/ARIA kalıplarını kullanıyor, düzeltme gerekmedi.**
- **GSC Üretken AI Performans Raporu** (Google, 3 Haziran 2026 duyurdu): AI Overviews/AI Mode/Discover'daki impression/sayfa/ülke/cihaz kırılımını gösteriyor (henüz tıklama/CTR/sorgu yok); ayrıca sitelerin AI özelliklerinden çıkış (opt-out) yapabileceği yeni bir kontrol 17 Haziran 2026'dan itibaren onaya alınıyor. Rollout kademeli (önce İngilizce/UK alt kümesi) — Estranova TR hesabında henüz görünmeyebilir. **Aksiyon:** Search Console'da bu raporun görünüp görünmediği ayda bir kontrol edilsin; göründüğünde Faz 7 post-publish journal akışına (`docs/ARTICLE-PRODUCTION-SPEC.md` Faz 7) bir "AI impression" satırı eklenmesi önerilir.
- **FAQ rich result deprecation:** Google, FAQ rich result'ları Mayıs-Haziran 2026'da SERP'ten tamamen kaldırdı (Search Console API desteği Ağustos 2026'da bitiyor). `FAQPage` şeması hâlâ geçerli ve tutulmaya değer ama **artık yalnızca AI-alıntı/grounding sinyali** olarak; klasik "rich snippet" beklentisiyle savunulmamalı. `docs/ARTICLE-PRODUCTION-SPEC.md` §4.8'e bu netlik notu işlendi.
- **Wikidata marka item'ı — Dr. Aksoy tarafından oluşturuldu ve tamamlandı (2026-07-15):** `Q140051019` (Estranova) canlı; `Q139893832` (Dr. Aksoy) üzerinde `affiliation → Estranova` bağı kurulu — çift yönlü bağ tam. Bu oturumda adım adım tamamlanan işler:
  - **9/9 ifadeye referans URL eklendi** (instance of, inception, country, main subject ×2, language of work or name, official website, Instagram username, + Q139893832'deki affiliation) — hepsi self-reference (`estranova.com/hakkimizda` veya `/editoryal-politika`), taslağın "referanssız ifade zayıf sayılır" uyarısı artık karşılanıyor.
  - **Türkçe label/description/aliases tamamlandı:** tr label "Estranova", description "40+ kadın sağlığı üzerine bağımsız Türkçe editöryal yayın platformu", aliases "Eşik / Eşik dergi / Estranova yayını".
  - **`main subject`e women's health (Q1054094) eklendi** (menopause'a ek) + **`field of work` (P101) → women's health** yeni ifade olarak eklendi.
  - **Hâlâ açık kalan tek risk (değişmedi):** bağımsız/üçüncü-taraf kaynak (haber, dizin kaydı, basın) hâlâ yok — tüm referanslar self-reference. Notability riski azaldı (referanssız değil) ama tam ortadan kalkmadı; taslağın önerdiği "önce bağımsız mention, sonra güçlendirme" adımı orta-vadeli madde olarak kalıyor (§13).
- **Answer-first H2 bloğu + karşılaştırma tablosu kuralı** (bkz. §9-A/C) `docs/ARTICLE-PRODUCTION-SPEC.md` §4.8'e ve pre-publish checklist'e (madde 11d) işlendi.
- **`article-schema.ts`'e opsiyonel `citation` alanı eklendi** (kuruluş adı içermeyen jenerik referans metni, GEO-ANALYSIS §8.5).

---

## Ek: Yöntem & Sınırlar

- Marka taraması US-merkezli arama motoru üzerinden yapıldı; Türkiye-lokal sonuçlar farklılık gösterebilir. "Estranova + menopoz" sorgusu sıfır markalı sonuç döndürdü — site yeni (canlı Mayıs 2026).
- **WebFetch sınırı (önemli):** Araç sayfayı markdown'a çevirirken `<script type="application/ld+json">` bloklarını siler — bu yüzden JSON-LD entity'leri "yok" gibi görünebilir (ilk taslakta senaiaksoy.net Person'u için bu hata yapıldı). Schema doğrulaması her zaman ham HTML/dist üzerinden yapılmalı.
- DataForSEO `ai_optimization_chat_gpt_scraper` mevcut değildi; gerçek ChatGPT-görünürlük testi için bu araç bağlanırsa hedef sorgularla doğrulama önerilir.
- On-page analiz `menopoz-nedir` amiral makalesi üzerinden örneklendi; kalıp diğer 148 sayfaya genellenebilir (ortak component + schema katmanı).
- CLAUDE.md HARD CONSTRAINT'leri (kuruluş adı yasağı §4, dergi estetiği, kanıt etiketleri) tüm öneriler içinde korundu — hiçbir öneri inline dış URL veya gövdeye kuruluş adı gömülmesi gerektirmez.
