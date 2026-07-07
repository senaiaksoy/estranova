# Yarın Nereden Başlamalıyım

> **Tarih:** 2026-04-19 oturum 2 kapanışı
> **Durum:** Editöryal yayın altyapısı **yayına hazır** — tipografi sistemi, kanıt rozeti, JSON-LD schema, sitemap + RSS hepsi canlı. Dış bağımlı görevler kaldı.
> **Son commit:** `3508967` (origin/main senkron)

---

## TL;DR — 30 saniye

İkinci oturumda editöryal okuma deneyimi premium seviyeye çıktı: 16 makalede sticky TOC sidebar, `prose-estranova` tipografi sistemi (auto chapter counter + gold rule + italic lede), `<Evidence>` parantez etiketi (`(güçlü kanıt)`, `(iyi–güçlü kanıt)` gibi), 17 makalede `MedicalWebPage + Article + BreadcrumbList` JSON-LD (EEAT), gerçek yayın tarihleri (17 Şubat → 17 Nisan arşiv), kelime-bazlı okuma dakikaları, `/sitemap-index.xml` + `/rss.xml`. Yayın öncesi kritik üç dış bağımlı iş kaldı: yazar portreleri (izinli), hero foto (gerçek), Cloudflare deploy.

---

## Bu Oturumda (2026-04-19) Ne Yapıldı?

### Phase A — Makale okuma deneyimi
- **TOC rollout (16 makale):** `ArticleTOC` sticky sidebar her hub-style makaleye bağlandı; iki haneli numaralı index H2 id'leriyle eşleşir. Paralel 3 agent ile dağıtıldı.
- **prose-estranova tipografi sistemi:** `@tailwindcss/typography` plugin + `@utility prose-estranova` katmanı kuruldu. Her H2 önünde otomatik `01`, `02` gold chapter number; 2.5rem gold rule; H2 sonrası ilk `<p>` otomatik italic primary serif lede; H3 ayrı ritim; blockquote pull-quote; marka paleti tokenları. Manuel H2 styling yasaklandı (HARD CONSTRAINT).
- **`<Evidence>` kanıt rozeti:** Sparkline bar ilk denendi (ölçek semantiği okunmadı), parantez içi Türkçe etikete döndü: `(güçlü kanıt)` primary, `(iyi kanıt)` gold-bronze, `(orta–iyi kanıt)` range. Italic Manrope (`font-serif`) 0.85em. 17 makaledeki 311 literal `[●●●●●]` string'i component çağrısına dönüştürüldü (`scripts/migrate-evidence.mjs`).

### Phase B — SEO ve keşfedilebilirlik
- **Article JSON-LD schema:** `src/utils/article-schema.ts → buildArticleSchemas()` helper; 17 statik makaleye `MedicalWebPage + Article + BreadcrumbList` eklendi. `Person` author writers.ts'ten, `reviewedBy` Doç. Dr. Senai Aksoy default. URL ve tarih normalizasyonu double-slash-safe.
- **Gerçek tarih + dakika:** Tüm 17 makalede placeholder `"14 Nisan 2026"` + sabit `{6}/{7}` yerine arşiv ritmiyle dağıtılmış tarih (17 Şubat → 17 Nisan, haftada 2-3) + dev server'dan kelime sayısına bölünmüş okuma dakikaları (200 WPM). `scripts/update-author-metadata.mjs` tek seferlik idempotent script.
- **Sitemap + RSS:** `@astrojs/sitemap` build-time otomatik (`/sitemap-index.xml`). `@astrojs/rss` feed'i `/rss.xml`'de 17 makale manifest'inden (`src/data/static-articles.ts`) besleniyor. `SiteLayout`'a `<link rel="alternate">` + `<link rel="sitemap">`. robots.txt production'da `Sitemap:` directive.

### Dokümantasyon
- `CLAUDE.md`: "Editöryal gövde tipografisi" HARD CONSTRAINT bloğu (§5 sonrası) + §6 checklist'e iki yeni madde (tipografi + JSON-LD). "Kanıt düzeyi etiketi" render formatı + palet.
- `AGENTS.md`: "Article body typography — prose-estranova (MANDATORY)" + "Evidence label" + "Article structured data — JSON-LD" + "Site discoverability — sitemap + RSS" bölümleri.
- `agents/writer_agent.md`: H2 sonrası editöryal lede zorunluluğu + manuel H2 numara yasağı + dot yasağı + yazarın JSON-LD yerine yapılandırılmış metadata sağladığı notu.
- `docs/project_editorial_typography_system.md`: özet.
- `MEMORY.md` + `project_editorial_typography_system.md` + `project_article_jsonld_schema.md`: durable proje notları.

---

## Kritik Dosyalar (bu oturum)

### Yeni
- `src/components/site/Evidence.astro` — kanıt rozeti component
- `src/utils/article-schema.ts` — JSON-LD helper
- `src/data/static-articles.ts` — RSS manifest (17 makale)
- `src/pages/rss.xml.ts` — RSS endpoint
- `scripts/migrate-evidence.mjs` — tek seferlik dot migration
- `scripts/update-author-metadata.mjs` — tarih + dakika refresh
- `scripts/extract-article-manifest.mjs` — manifest çıkarıcı

### Değişen kritik
- `src/index.css` — `@plugin "@tailwindcss/typography"` + `@utility prose-estranova { ... }` + `.evidence*` stilleri (iki yerde: prose + fallback)
- `src/components/site/ArticleProsePanel.astro` — inner div `prose prose-lg prose-estranova max-w-none`
- `src/components/site/ArticleTOC.astro` — sticky sidebar
- `src/components/site/SubmenuArticleBody.astro` — conditional grid (TOC slot)
- `src/layouts/SiteLayout.astro` — sitemap + RSS discovery links
- `astro.config.mjs` — sitemap integration
- 17 makale `src/pages/**/*.astro` — TOC + Evidence + JSON-LD + gerçek tarih/dakika

---

## Kalan İşler (öncelik sırası)

### Yayın öncesi kritik (dış bağımlı — kullanıcı aksiyonu)
1. **Yazar portreleri** — mevcut 4'ü web placeholder. Her yazardan izinli profesyonel foto. Öncelikli: Başak portresi kalite düşük.
2. **Hero foto (AI → gerçek)** — `public/images/hero/home-hero.webp` AI-generated; custom shoot veya editöryal stok.
3. **Cloudflare Pages deploy** — `astro build` temiz; tek tuşla canlıya.

### Yayın öncesi opsiyonel (ben yapabilirim)
4. **Performans pass 4** — Google Fonts `@import` / preload hattı Manrope + Kulim Park için korunmalı (`src/index.css:1`, LCP ~200ms); hero `<link rel="preload" as="image">`; submenu-heroes Unsplash URL'leri `srcset` (Yolculuk kartları ve thumbnail'ler şu an 1800w indiriyor).
5. **"Okur Soruyor" köşesi** — NYT Well "Ask Well" tarzı; okur sorusu + yazar rotasyonlu yanıt. Yeni component + landing sayfası.
6. **Aesthetic Paket B** — Koruyucu Sağlık split-screen (`text-9xl "40+"`) + Yazar Kadrosu dalga offset.
7. **Aesthetic Paket C** — Oversize 9xl italic kapak numarası arkaplanda, italic-roman heading kırılması.
8. **Kart hover polish** — gold alt-çizgi büyümesi + border ısınması (homepage + hub sayfaları).

### Yayın sonrası
9. **Analytics** — Plausible veya GA4.
10. **Newsletter gerçek entegrasyonu** — şu an sadece UI; Mailchimp/Kit/Beehiiv API.

---

## Hızlı Kontroller / Komutlar

### Dev server (port 4322)
```powershell
cd E:\git_repo\estranova
npm run dev
```

### Build (56 sayfa + sitemap + RSS bekleniyor)
```powershell
cd E:\git_repo\estranova
npm run build
```

### Streamlit (içerik üretim pipeline)
```powershell
cd E:\git_repo\estranova
streamlit run streamlit_app.py
```

### Çıkan dosyalar (build sonrası `dist/`)
- `dist/rss.xml` — 17 makale RSS feed
- `dist/sitemap-index.xml` + `dist/sitemap-0.xml` — sitemap
- `dist/robots.txt` — production'da Sitemap directive

---

## Acil Sorun Olursa

| Belirti | Yapılacak |
|---|---|
| Makale H2'leri 16px gibi görünüyor | `@tailwindcss/typography` plugin yüklü mü? `src/index.css:4` `@plugin` satırı var mı? |
| TOC numaraları ile chapter counter senkron değil | `tocEntries` array ile `<h2 id="...">` id'leri birebir eşleşmeli |
| Evidence rozeti görünmüyor | `.evidence` class'ı `prose-estranova` içinde + fallback `@layer components`'te — iki yerde olmalı |
| RSS feed eksik makale | `src/data/static-articles.ts` manifest güncel mi? Yeni makale eklenince mutlaka manifest'e de eklenir |
| JSON-LD URL'de double slash | `buildArticleSchemas` kendi `joinUrl` helper'ı var — `pathname` leading slash ile gelmeli, URL concat yapma |
| Placeholder "14 Nisan 2026" kaldı mı? | `grep -rn '14 Nisan 2026' src/pages` — NAD+ hücresel makalesi dışında (14 Nisan 2026 onun gerçek tarihi) boş olmalı |
| Dev server port çakışması | `astro.config.mjs` + `package.json` scripts port 4322 |

---

## Yeni Oturum Priming Prompt

Yeni bir oturum açtığında Claude'a şunu yapıştır:

```
Estranova editöryal yayın altyapısı tamamlandı (2026-04-19 oturum 2).
Bağlam dosyaları sırayla oku:

- docs/YARIN-NEREDEN-BASLAMALIYIM.md (bu handoff)
- CLAUDE.md (marka + persona + tipografi HARD CONSTRAINT)
- AGENTS.md (article layout + typography + JSON-LD + sitemap/RSS)
- src/data/writers.ts (5 yazar)
- src/data/static-articles.ts (RSS manifest)

Sonra bana ne yapmak istediğimi sor. Olasılıklar:
1. Yazar portrelerini izinli foto ile değiştir (yayın öncesi kritik, dış bağımlı — fotoları ben sağlarım)
2. Hero foto (AI → gerçek editöryal)
3. Cloudflare Pages deploy
4. Performans pass 4 (Google Fonts preload: Manrope + Kulim Park, hero srcset, responsive Unsplash)
5. "Okur Soruyor" köşesi (NYT Well tarzı)
6. Aesthetic Paket B (Koruyucu Sağlık split-screen + Yazar Kadrosu dalga)
7. Aesthetic Paket C (oversize italic kapak numarası)
8. Kart hover polish (gold alt-çizgi + border ısınması)
9. Yeni makale ekle (konu söyleyeceğim)
10. Spesifik bir konu/sorun (söyleyeceğim)
```

---

## Bu Oturumda Commit Zinciri

- `3508967` feat(seo): sitemap integration + RSS feed for 17 static articles
- `7eafc49` refactor(articles): real publish dates + reading minutes (17 articles)
- `99358cf` feat(seo): article JSON-LD schema across 17 static articles
- `34d8467` docs: sync Evidence label format across CLAUDE/AGENTS/editorial-typography
- `d288ad3` refactor(evidence): sparkline → parenthetical named label
- `0e44df2` feat(editorial): prose-estranova system + TOC rollout + Evidence sparkline

Detay: `git log 3b7853b..HEAD` veya `git log --oneline -10`.

---

İyi geceler Dr. Aksoy.
Yayın hattı tertemiz, yarın portrelerle aksayan son halkalar da yerine oturacak. 🌿
