# Yarın Nereden Başlamalıyım

> **Tarih:** 2026-04-19 oturum kapanışı
> **Durum:** Anasayfa + makale altyapısı **editöryal yayın seviyesinde**; yazar kadrosu 5 kişilik, data-driven; aesthetic pass tamamlandı
> **Son commit:** `7dab824` (origin/main senkron)

---

## TL;DR — 30 saniye

Anasayfa sıfırdan yayın kimliğine dönüştü: editöryal portre hero, 7 numaralı bölüm, burgundy pull quote spread, cream gradient progression, fleuron ornament. Yazar altyapısı kuruldu: `src/data/writers.ts` tek kaynak, 5 yazar (Berna/Alara/Başak/Rima/Gamze), anasayfa "Bu sayıda yazanlar" bloğu, 17 makalede `<ArticleAuthorBlock>` yazar atfı. Placeholder "[Yazar Adı]" sıfır.

---

## Bu Oturumda (2026-04-18 → 2026-04-19) Ne Yapıldı?

### Phase A — Anasayfa yapısal refactor
- HomeHero: full-bleed editöryal portre (kadın, kitap okuyan) + koyu gradient + cream typography + 2 CTA ("Kütüphaneyi aç" + "Belirtilere göre bak"). Magazine-cover denemesi başarısız, rollback ile klasik overlay hero.
- Glass bullet kartı kaldırıldı, sol text alanı genişledi
- Bölüm numaralama sistemi (01–07, gold serif tabular-nums)
- Kanıt tablosu → ince trust şerit (3 link: Editöryal Politika · Tıbbi Sorumluluk · Nasıl Araştırıyoruz)
- Newsletter "Aylık Editöryal Özet" (pop-up yok, "Özeti al" nötr CTA, 3-col grid + still-life foto)
- Editöryal Seçki: 3 kart + magazine-index tipografik liste (4 satır, 48-64px thumbnail)
- Son burgundy CTA → ince cream kapanış şeridi (9 CTA'dan 8'e indi)
- Navbar + Footer: max-w-7xl → max-w-6xl (body ile hizalı)
- Policy sayfaları: kanonik path'lerde tekilleşti; `/tibbi-sorumluluk-reddi`, `/gizlilik-politikasi`, `/methodology` silindi, 301 redirect'ler

### Phase B — Yazar altyapısı
- `src/data/writers.ts` — 5 yazar, `Writer` interface (slug, displayName, role, ageBand, publicBio, signaturePhrase, portrait, focusAreas, isEditor)
- 5 yazar profili markdown olarak (`writers/*.md`): Berna + Alara + Başak + Rima + Gamze (Berna template, 11 bölüm)
- 4 yazar portresi indirilip 400×400 WebP optimize edildi (placeholder, yayın öncesi gerçek foto gerek)
- `yayin-kurulu.astro` data-driven (hardcoded array kaldırıldı)
- Anasayfa "Bu sayıda yazanlar" bloğu — 5 yazar, circular portrait, typographic initial fallback
- `ArticleAuthorBlock` component — writers.ts'den çekiyor (portre + rol + medical reviewer + tarih + okuma)
- `ArticleTOC` component — narrow sticky sidebar, numaralı section index, hidden on mobile
- `SubmenuArticleBody` — TOC slot varsa 2-col grid, yoksa tek sütun (backward compatible)
- **17/17 makale rollout:** tüm makaleler `ArticleAuthorBlock` kullanıyor; 16 makaleye yazar ataması yapıldı mapping'e göre

### Ritim/estetik pass
- Pull quote #1 kaldırıldı, #2 full-bleed burgundy spread (`bg-[#6B2D3E] py-24/32`, cream serif 4xl→6xl italic, sol gold çizgi)
- Cream 3-tone gradient progression: Sıcacık Köşe, Belirti, Koruyucu (ısınan sıcaklık)
- Fleuron ❦ ornament: 01 Yolculuk ile 02 Sıcacık Köşe arasında (gold rule + ❦ + gold rule)
- Global `::selection` burgundy/15 (src/index.css)
- Kanıt düzeyi etiketi kaldırıldı (5-katman kart → 3-katman)
- Medical reviewer magazine-index'te tekrardan silindi (CLAUDE.md §3 uyum)
- Drop cap Koruyucu Sağlık'ta (first-letter utility)
- Yazar Kadrosu bölümü 03 → 05 (masthead konumu, portre-triplet cluster dağıldı)

### Performans
- **Berna portresi 6.94 MB JPG → 14 KB WebP** (99.8% küçülme, en büyük tek kazanç)
- Hero foto AI-generated → 316 KB WebP 2400w `object-[center_30%]`
- Writer portraits ~60 KB toplam
- Newsletter still-life 2048² PNG → 121 KB WebP 1200×1200

---

## Kritik Dosyalar

### Yazar altyapısı (yeni)
- `src/data/writers.ts` — tek kaynak; 5 yazar; editors + guestWriters helpers
- `src/components/site/ArticleAuthorBlock.astro` — makale başında yazar atfı
- `src/components/site/ArticleTOC.astro` — narrow sticky TOC sidebar
- `src/components/site/SubmenuArticleBody.astro` — conditional grid (TOC slot)

### Anasayfa
- `src/pages/index.astro` — 7 numaralı bölüm + burgundy pull quote + gradient zemin
- `src/components/site/HomeHero.astro` — classic overlay hero
- `src/components/site/EditorialDigestStrip.astro` — newsletter 3-col + still-life
- `src/components/site/SiteNavbar.astro` + `SiteFooter.astro` — max-w-6xl

### Görsel varlıklar (yeni)
- `public/images/hero/home-hero.webp` (316 KB, AI-generated, yayında gerçek foto gerek)
- `public/images/newsletter/newsletter-ritual.webp` (121 KB, still-life)
- `public/images/writers/{alara,basak,gamze,rima}.webp` (placeholder — yayın öncesi izinli foto)
- `public/images/editor/berna-aksoy.webp` (14 KB, optimize edildi)

### Yazar profilleri (editöryal referans)
- `writers/berna-aksoy.md` · `writers/alara-baykent.md` · `writers/basak-pelister.md` · `writers/rima-erdemir.md` · `writers/gamze-cizreli.md`

### Preview (dev denetim)
- `.claude/launch.json` — Claude Preview server config (port 4322)

---

## Kalan İşler (Öncelik Sırası)

### Yayın öncesi kritik
1. **Yazar portreleri** — mevcutlar web'den alınan placeholder. Her yazardan izinli profesyonel foto al
2. **Başak portresi kalite düşük** — öncelikli değişim
3. **Hero foto AI-generated** — gerçek editöryal foto veya custom shoot

### Devam eden editöryal işler
4. **TOC rollout** — 16 makale ArticleAuthorBlock'a bağlandı ama TOC sadece uyku-bozuklugu-menopoz'da. Her makaleye ArticleTOC + H2 id'leri ekle
5. **ArticleAuthorBlock default values check** — Cursor rollout'ta bazı makalelerde default tarih/süre kullandı mı kontrol et; grep ile "publishedDate=\"14 Nisan 2026\"" say

### Aesthetic polish (isteğe bağlı)
6. **Paket B kompozisyon:** Koruyucu Sağlık split-screen (`text-9xl "40+"`) + Yazar Kadrosu dalga offset
7. **Paket C tipografi:** Oversize 9xl italic kapak numarası (1-2 bölüm arkasında), italic-roman heading
8. **Kart hover polish:** gold alt-çizgi büyümesi + border ısınması

### Performans pass 4
9. Google Fonts `@import` → preload (`src/index.css:1` — render-blocking)
10. Hero `<link rel="preload" as="image">` ekle (LCP ~200ms)
11. Submenu-heroes Unsplash URL'leri responsive (`srcset` veya w=600 variant — Yolculuk kartları + Son yayınlar thumbnail'de 1800w indiriyor)

### Yeni özellikler
12. **"Okur Soruyor" köşesi** — NYT Well "Ask Well" tarzı; okur sorusu + yazar rotasyonlu yanıt
13. **Article schema markup (JSON-LD)** — FAQPage, NewsArticle, Person (author), MedicalReviewedBy — EEAT için
14. **Sitemap + RSS feed** — SEO temeli
15. **Cloudflare Pages deploy** — henüz lokal preview

---

## Hızlı Kontroller / Komutlar

### Dev server (port 4322)
```powershell
cd E:\git_repo\estranova
npm run dev
```
`http://localhost:4322`

### Build test
```powershell
cd E:\git_repo\estranova
npm run build
```
56 sayfa üretilmeli.

### Streamlit (içerik üretim — Phase A öncesinden, değişmedi)
```powershell
cd E:\git_repo\estranova
streamlit run streamlit_app.py
```

### Browser preview ile denetim (Claude Preview MCP)
`.claude/launch.json` → preview_start → screenshot/eval.

---

## Acil Sorun Olursa

| Belirti | Yapılacak |
|---|---|
| Placeholder "[Yazar Adı]" görüldü | `grep -rn "\[Yazar Adı\]" src/pages` — sıfır olmalı |
| Makale TOC çalışmıyor | H2 id'leri eşleşiyor mu? tocEntries array ile ArticleTOC arasında slug match |
| Writer portrait broken image | `src/data/writers.ts`'de `portrait` path doğru mu? Component initials fallback yapıyor |
| Dev server port çakışması | `astro.config.mjs` + `package.json` scripts port 4322 |
| Worktree'de eski state | main repo'da çalış (memory note); `E:/git_repo/estranova` direkt |

---

## Yeni Oturum Priming Prompt

Yeni bir oturum açtığında Claude'a şunu yapıştır:

```
Estranova anasayfa + makale altyapısı premium editöryal seviyesinde.
Bağlam dosyaları sırayla oku:

- docs/YARIN-NEREDEN-BASLAMALIYIM.md (bu handoff)
- CLAUDE.md (marka + persona HARD CONSTRAINT)
- src/data/writers.ts (5 yazar, tek kaynak)
- src/pages/index.astro (7 numaralı bölüm)
- writers/*.md (yazar detay profilleri)

Sonra bana ne yapmak istediğimi sor. Olasılıklar:
1. Yazar portrelerini gerçek/izinli foto ile değiştir (yayın öncesi kritik)
2. TOC rollout kalan 16 makaleye
3. Performans pass 4 (Google Fonts preload, hero srcset)
4. Aesthetic Paket B veya C
5. "Okur Soruyor" köşesi
6. Article schema markup (JSON-LD, EEAT)
7. Spesifik bir konu/sorun (söyleyeceğim)
```

---

## Bu Oturumda Commit Zinciri

- `7dab824` feat(articles): Phase B step 3 rollout — 16 articles wired to ArticleAuthorBlock
- `8d81208` feat(article): Phase B step 3 — writer attribution + sticky TOC sidebar
- `b266a9f` feat(home): editorial aesthetic pass — burgundy spread, cream progression
- `e5a16a9` refactor(home): editorial rhythm pass — declutter and repace
- `2799a87` perf(home): compress Berna editor portrait 6.94MB to 14KB WebP
- `ee10922` feat(home): Phase B step 2 — writer roster block "Bu sayıda yazanlar"
- `c0a9c2e` feat(writers): add 4 guest writer portraits (placeholder)
- `17fae89` feat(home): Phase B step 1 — writer data layer + editorial attribution
- `4a771ad` feat(home): newsletter still-life — 3-column ritual image
- `c24037c` refactor(home): Phase A — hero portrait, container alignment, path cleanup

Detay: `git log 0136235..HEAD` veya `git log --oneline -15`.

---

İyi geceler Dr. Aksoy.
Yarın görüşürüz — yayın günü yaklaşıyor 🌿
