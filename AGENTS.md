# AGENTS.md

## Mission

Build and maintain a premium editorial women's health website focused on:
- perimenopause
- preparing for menopause
- menopause
- health after 40

This project is an editorial health information platform.
It is not a clinic marketing site, not a treatment funnel, and not a product sales platform.

**Yayın dili:** Estranova web sitesi **yalnızca Türkçe** kullanıcı arayüzü ve içerik diliyle yayınlanır; kullanıcıya dönük metinlerde İngilizce navigasyon veya gövde kullanılmaz. Ayrıntı: **`CLAUDE.md` → Dil politikası (HARD CONSTRAINT)**.

---

## Non-Negotiable Rules

### Never position the site as:
- a clinic website
- a physician advertising site
- a healthcare service funnel
- a medical product/subscription platform
- a treatment promotion landing page

### Never use:
- appointment-booking language
- treatment-promotion language
- superiority claims
- success-rate claims
- before/after narratives
- patient testimonials as promotion
- package, pricing, discount, or offer sections

Forbidden examples:
- Randevu al
- Tedaviye başla
- En iyi uzman
- En başarılı yöntem
- Başarı oranlarımız
- Paketlerimiz
- Hemen başvur

Allowed neutral CTA examples:
- Rehberi keşfet
- Belirtileri değerlendir
- Bilgi al
- İçeriği incele
- Daha fazla bilgi

---

## Pipeline Model Matrix (Operasyonel)

Pipeline ajanları ve kullandıkları modeller:

| Ajan | Model | Rol |
|------|-------|-----|
| orchestrator | gpt-4o | LangGraph routing |
| researcher | gemini-2.5-flash | Kaynak derleme, iddia paketi |
| writer | claude-sonnet-4-6 | Makale üretimi (master prompt + few-shot) |
| checker | claude-sonnet-4-6 | Medical fact-check |
| compliance | claude-sonnet-4-6 | CLAUDE.md kural denetimi |

Detaylı konfigürasyon, eşikler ve debug rehberi için: **[docs/PIPELINE.md](docs/PIPELINE.md)**

Model değişikliği önerirken öncelik: maliyet ≠ kalite. Writer / checker / compliance için Sonnet’ten `gpt-4o`’ya geri dönmeyi düşünmeden önce **docs/PIPELINE.md** içindeki **G1** (double-escape / newline) gotcha’sını oku.

**Stil ve dil kurallarının dosya haritası:** **[docs/style-rules-map.md](docs/style-rules-map.md)**

**Makale preflight — HARD GATE:** Yeni makale, makale revizyonu, rewrite veya
humanize işinde taslak yazmadan önce canonical ekosistem rehberi okunur:
`D:\A-klasör\obsidian-vaults\draksoyivf-knowledge\wiki\brand\senai-aksoy-makale-stil-rehberi.md`.

Okuduktan sonra aynen şu cümleyle başla:
`Stil rehberi okundu: Dr. Senai Aksoy Makale Stil Rehberi`

Dosya okunamıyorsa hafızadan, özetlerden veya önceki oturumlardan devam etme;
engel bilgisini yaz ve dur. Bu kapı kullanıcı stil/humanize demese bile her
makale ve makale türevi iş için geçerlidir.

Estranova'da bu rehber Dr. Aksoy tıbbi denetim çizgisini ve yasaklı pazarlama
dilini üst katman olarak belirler; varsayılan makale gövdesi yine Estranova'nın
"yaşıt editör" sesiyle yazılır.

---

## Product / Design Direction

The site should feel like:
- a premium editorial publication
- a medically reviewed information platform
- a calm, structured guidance resource

It should NOT feel like:
- a mobile app
- a SaaS dashboard
- a supplement store
- a beauty/lifestyle blog
- a sales-driven clinic website

### Design characteristics
Use:
- muted Pink 600 / cream / black-accent palette
- serif headings
- readable sans-serif body text
- large type
- generous whitespace
- modular sections
- desktop-first responsive website structure

Avoid:
- app dashboards
- bottom nav app patterns
- aggressive sticky conversion bars
- loud marketing visuals
- cluttered layouts

---

## Information Architecture

Preferred top-level sections:
- Perimenopause
- Preparing for Menopause
- Menopause
- Health After 40
- Lifestyle & Well-being
- Expert Insights
- About the Platform
- Editorial Policy
- Medical Disclaimer
- Contact / Information

Do not introduce service-oriented navigation unless explicitly approved.

---

## Page Rules

### Homepage should include
- Hero
- Summary of hormonal transition after 40
- Journey cards
- Symptom-based navigation
- Expert trust section
- Featured content
- Preventive health block
- Soft CTA
- Trust footer

### Homepage scientific research block

The homepage `Bilimsel Araştırmalar` section follows a fixed editorial pattern:
- The top row contains exactly **2 manually pinned** articles from `Bilimsel Pencere / Yeni Araştırmalar`.
- New research articles are **not** allowed to replace these two automatically.
- The lower `Yeni eklenenler` list is populated automatically from `src/data/static-articles.ts` for routes under `/bilimsel-pencere/yeni-arastirmalar/`.
- The lower automatic list shows a maximum of **5** items on the homepage.
- When new articles are published in this subsection, they should appear in the automatic list once they are added to `src/data/static-articles.ts`; older items naturally roll off the homepage after the first five.
- If the pinned pair should change, update the homepage config explicitly rather than changing the automatic list behavior.

### Article pages should include
- Title
- Quick answer / summary
- Structured headings
- Neutral medical explanation
- Optional clinical insight box
- Related reading
- Medical disclaimer

### Submenu / hub page layout (Astro)

New or refreshed submenu pages must feel like a premium editorial publication, but they must remain easy to scan. The goal is Vogue/TR-level visual judgment with clearer access to older articles.

Use this structure for sub-hub pages under `src/pages/<section>/<subsection>/index.astro`:
- `SiteNavbar`
- optional `ChapterMasthead`
- `SubmenuHero`
- Turkish breadcrumb with `aria-label="İçerik yolu"`
- short editorial intro plus optional `MarginaliaRail`
- compact latest article strip via `SubHubLatestStrip`
- visible scalable article archive / index via `SubHubArchiveIndex`
- related neighboring subtopics
- `ChapterCompass`
- `SiteFooter`

The latest article must not dominate the page. For article-heavy sub-hubs, use `SubHubLatestStrip` or an equivalent slim editorial strip; this is the default for submenu pages that can grow into 10+ articles. Use `EditorPickCard` only on intentionally small, hand-curated pages; avoid large magazine-cover cards that push earlier articles below the fold.

Previously published articles in the same sub-hub should be visible and easy to reach. Use `SubHubArchiveIndex` or a numbered editorial index immediately after the latest article. The archive must be designed for growth: first 6-8 items visible, older items grouped or collapsed so 10, 20 or 50 articles still scan like a publication index rather than a stack of cards. If a sub-hub has only one article, show a broader same-section archive when it helps discovery.

The archive section should start directly with the small uppercase label `Aynı dosyada` (or `Aynı bölümde` only when using a broader fallback archive). Do not add a large `Önceki araştırma yazıları` / `Önceki okumalar` headline or explanatory paragraph above the index; that makes the page feel like a landing page again.

Submenu content should be data-led where possible:
- Prefer `src/data/static-articles.ts` for article lists and ordering.
- Prefer `src/data/submenu-heroes.ts` for article and hub imagery.
- Treat imagery as three independent surfaces: top `SubmenuHero`, sub-hub latest/archive card image, and article-page `ArticleAuthorBlock` image.
- Publishing gate for new/approved articles: before marking an article as published or adding it to submenu/archive surfaces, check whether a dedicated article image has been supplied. If not, explicitly ask the user/editor for the article image and pause the visual binding step until it is provided or the user says to publish without a dedicated image for now.
- Default user-supplied article image behavior: unless the user explicitly says "makale hero görseli de değişsin", do **not** add or overwrite that article route in `submenuHeroByRoute`. Use the supplied image only for the sub-hub card (`articleCardImageByRoute`) and the in-article author/byline visual (`ArticleAuthorBlock imageSrc`).
- If only the sub-hub `Son yazı` / archive card image should change, do **not** overwrite the page hero in `submenuHeroByRoute`; register a separate card image mapping in `src/data/submenu-heroes.ts` (`articleCardImageByRoute`).
- If only the article-page author card image should change, pass `imageSrc` / `imageAlt` / `imagePosition` directly to `ArticleAuthorBlock`; this must not force a `SubmenuHero` change.
- Implementation invariant: a user-supplied article image must change exactly these two surfaces by default: `ArticleAuthorBlock imageSrc` on the article page and `articleCardImageByRoute` for sub-hub/latest/archive cards. It must not create, change, or overwrite a `submenuHeroByRoute` entry unless the user explicitly asks for the top hero to change.
- Keep manual `editorPick` objects only when there is a clear editorial reason.
- Do not link to article routes that do not exist in `src/pages/`.

#### Makale görseli kırpma — kanonik akış (`npm run article:images`)

İki kanonik crop birbirine çok uzak orandadır (byline **4:5 = 0.80**, kart **2.4:1 = 2.40**); tek AI görselini elle `position` tahminiyle ikisine sokmak yüzü kesiyor ve her seferinde sürtünme yaratıyordu. Kalıcı çözüm `scripts/make-article-images.mjs`'dir. **Yeni makale görseli her zaman bu araçla kırpılır; ad-hoc `sharp` komutu yazılmaz.**

- **Çıktı (sabit):** `<slug>-byline.webp` = **1200×1500** (ArticleAuthorBlock `imageSrc`), `<slug>.webp` = **2400×1000** (`articleCardImageByRoute`). İkisi de `public/images/library/editorial/` altına yazılır.
- **Önerilen kaynak (en temiz):** byline ve kart için **amaca özel iki ayrı kaynak** üret — dikey (3:4 / 9:16) byline'a, yatay (16:9) karta. Böylece kırpım minimum bilgi kaybıyla oluşur.
  ```bash
  npm run article:images -- --slug=<slug> --byline-src=portrait.png --card-src=landscape.png
  ```
- **Tek kaynak (hızlı):** `--src=source.png` tek başına verilince ikisi de ondan üretilir; daha çok kırpar.
- **Otomatik kırpma:** varsayılan `attention` stratejisi yüz/ilgi bölgesine göre kırpar; `position` elle tahmini gerekmez. Gerekirse `--byline-pos=` / `--card-pos=` ile override (`attention` | `entropy` | `centre` | `north` | `east` …).
- **Değişmez kural (üst hero):** Bu araç yalnızca byline + kart üretir; `submenuHeroByRoute` üst hero'ya **dokunmaz** (kullanıcı açıkça istemedikçe). CLAUDE.md §6 "Makale görsel yayın kapısı" ile hizalı.

Readability rules:
- Hero lede: maximum 2 sentences.
- Section intro copy: usually 40-70 words.
- Card descriptions: 1-2 short sentences.
- Use one visible `h1`; section headings should be meaningful `h2`.
- Decorative arrows, initials and flourishes should be `aria-hidden`.

Language and compliance:
- User-facing labels are Turkish: `Son yazı`, `Önceki okumalar`, `Bölüm indeksi`, `Yazıyı oku`, `İçeriği incele`.
- Do not show "Premium", "Spotlight", "Explore", "Read more" or other English / sales-flavored UI labels.
- CTA language remains neutral and informational; never use appointment, treatment, package, price, discount or superiority language.

### Article page layout (Astro — use for every new static article)

The visual shell is **not** optional for new `.astro` articles under `src/pages/`. Reuse these components so pages match the homepage / hub styling:

1. **`SubmenuHero`** (`compact`) when the URL is registered in `src/data/submenu-heroes.ts` (`submenuHeroByRoute`). If the page uses a plain in-article `<header>` + `pt-24` instead (some informational routes), keep that pattern only where it already exists; new hub-style articles should prefer `SubmenuHero` + hero data.
2. **`SubmenuArticleBody`** — wraps the column under the hero: gradient background, responsive grid (sticky TOC on `lg+` if `slot="toc"` present), spacing. Replace ad-hoc `<article class="px-6 py-16">` + inner wrappers with this.
3. **Inside the body (typical order):**
   - **`ArticleTOC`** (optional, recommended for articles with 5+ H2's) — `<ArticleTOC slot="toc" entries={tocEntries} />` right after `<SubmenuArticleBody>` open. Renders as narrow sticky sidebar with two-digit numbered index (`01`, `02`…). Entries must match H2 `id` attributes in the body.
   - **`ArticleAuthorBlock`** — `authorSlug` (from `src/data/writers.ts`) + `publishedDate` + `readingMinutes`. Resolves writer portrait, role and medical reviewer line. When an article needs a dedicated byline visual, pass `imageSrc` / `imageAlt` / `imagePosition` here; this image is independent from both `SubmenuHero` and sub-hub card imagery. If a user supplies a new article image without explicitly asking for the top hero to change, place it here and in `articleCardImageByRoute`, not in `submenuHeroByRoute`.
   - **`ArticleSummary`** — every static article starts its reading flow with this component for **Kısa Özet** / quick answer. Do not hand-roll a per-page gold summary `<section>`; use `<ArticleSummary><p>…</p></ArticleSummary>` so the premium Vogue/TR summary card stays consistent.
   - Main text: **`ArticleProsePanel`** only — do **not** put `prose` on a bare `<section>`; the panel supplies the white card + typography.
   - Extra prose blocks (e.g. “Kısa Hatırlatma”): second **`ArticleProsePanel`** with `class="mt-10"` (and more if needed).
   - **SSS / FAQ yüzeyi** — her yayın makalesinde tek görünür SSS yüzeyi zorunlu. `src/data/article-faqs.ts` veya sayfaya özel `faqItems` kaynağı kullan; 3–5 konuya özgü gerçek soru, her yanıtta 2–3 cümle. Eğer SSS ana gövdede `ArticleProsePanel` içinde editoryal H2/H3 akışıyla yazıldıysa ayrıca `ArticleFAQ` ekleme; bu Vogue/TR long-read ritmini bozar ve çift `id` riski doğurur. Eğer gövdede SSS yoksa `ArticleFAQ` bloğunu ana gövdenin ardından, `RelatedReadings` öncesi yerleştir.
   - **İlgili İçerikler** with `RelatedReadings`, then **`ArticleEditorNote`** for Bilimsel Editör Notu and **`ArticleDisclaimer`** for the medical disclaimer. Do not hand-roll the old gradient left-border editor note or dashed disclaimer `<section>` in new/updated articles; these reusable components are the canonical Vogue/TR article trust blocks.
4. **Imports:** `../../components/site/...` from `src/pages/<section>/`; add one `../` per extra directory level (e.g. `hormonal-gecis/menopoz/` → `../../../components/site/`).
5. **CMS / JSON-driven articles** rendered by `src/pages/article/[slug].astro` already use `SubmenuArticleBody` + `ArticleProsePanel` for HTML body; follow the same content blocks in `src/data/articles` (title, excerpt, transparency, disclaimer).

### Article body typography — `prose-estranova` (MANDATORY)

Article body inside `ArticleProsePanel` is rendered via a single editorial typography system. This is the mechanism that gives Estranova its "Vogue TR / Elle TR long-read" feel. **No other `prose` variant, custom wrapper, or manual heading styling is allowed in article bodies.** The contract is enforced by `CLAUDE.md` HARD CONSTRAINT → "Editöryal gövde tipografisi".

**Wrapper (fixed):**
```astro
<ArticleProsePanel>
  <h2 id="slug">Section Title</h2>
  <p>Opening 1–2 sentences — renders as italic primary-pink lede.</p>
  <p>Regular body paragraph in sans-serif …</p>
</ArticleProsePanel>
```
Under the hood: `<section class="rounded-[32px] …"><div class="prose prose-lg prose-estranova max-w-none"><slot/></div></section>`.

**Behavior baked into `prose-estranova` (see `src/index.css` `@utility prose-estranova` block):**
- **Chapter counter:** every `<h2>` is preceded by a gold two-digit number (`01`, `02` …) via CSS counter. These numbers must match the `ArticleTOC` sidebar — so the TOC and chapter numbers read as one numbered sequence.
- **Gold rule after H2:** auto-inserted 2.5rem gold line (`::after`). Do **not** add a manual `<hr>` beneath H2's; you'll get a double rule.
- **Italic lede:** `h2 + p` selector styles the first paragraph after each H2 as italic primary-pink `font-sans`, ~1.2rem, `max-width: 58ch`. Writers must author the first paragraph after every H2 as an editorial opener (1–2 sentences framing the section), not a bulleted list, data dump, or long definition.
- **H3 rhythm:** `h3` scaled at 1.5rem serif with its own top margin — sub-section structure works out of the box.
- **Palette tokens:** `--tw-prose-body: #2D2D2D`, `--tw-prose-headings: #2D2D2D`, `--tw-prose-links: #D81B60`, `--tw-prose-bullets: #000000`, `--tw-prose-quotes: #D81B60`, `--tw-prose-quote-borders: #000000`. Do not override per-article.
- **Blockquote:** renders as italic serif pull-quote with left gold border — use for editorial emphasis sparingly.
- **Links:** thin primary-pink underline (solid on hover). Inline external URLs in article bodies are still forbidden by HARD CONSTRAINT §4.
- **Evidence label (mandatory in published article HTML):** Inline evidence strength uses `src/components/site/Evidence.astro` inside `ArticleProsePanel` prose flow. **Single level:** `<Evidence level={N} />` with `N` in `1 | 2 | 3 | 4 | 5` — renders as parenthetical italic Turkish label: `(zayıf kanıt)` · `(sınırlı kanıt)` · `(orta kanıt)` · `(iyi kanıt)` · `(güçlü kanıt)`. **Range:** `<Evidence from={A} to={B} />` renders combined as e.g. `(orta–iyi kanıt)`. **Color coding:** level 4-5 Pink 600 `#D81B60`, level 1-3 black accent `#000000`; italic `font-serif` / Manrope, 0.85em inline. **Tooltip:** `title` + `aria-label` both carry `Kanıt düzeyi: <label> (<N>/5)` for hover/assistive magnitude. Styling lives under `prose-estranova` in `src/index.css` and duplicated in `@layer components` for hub tables/cards outside the prose wrapper. **Forbidden:** literal bracket/dot strings like `[●●●●●]` in shipped pages (CLAUDE.md HARD CONSTRAINT).

**Live font rule (2026-06-02):** estranova.com production CSS maps `--font-serif` to Manrope and `--font-sans` to Kulim Park. Newsreader, Playfair Display and Inter are stale memory/draft references and must not be used for new site, social or production assets.

**Setup (one-time, already landed):**
- `package.json` devDependency: `@tailwindcss/typography`.
- `src/index.css` prelude: `@import "tailwindcss"; @plugin "@tailwindcss/typography"; @utility prose-estranova { … }`.
- `ArticleProsePanel.astro` inner div: `class="prose prose-lg prose-estranova max-w-none"`.

**Do not:**
- Add `prose-headings:…` or other Tailwind typography modifiers to the inner div — `prose-estranova` covers all of them.
- Style H2 / H3 / first-paragraph manually inside article pages with `class="text-3xl …"`. The editorial system must drive the hierarchy, otherwise articles drift apart visually.
- Introduce a second prose wrapper (`prose-slate`, `prose-sm`, etc.) — keep the one-system invariant.
- Write H2 headings that already contain a leading number (e.g. `"01. Hormonal Değişim"`); the counter supplies the number.

**Reference live examples:** `src/pages/bilimsel-pencere/estrogen-biyolojisi-saglik.astro` (12 H2), `src/pages/zihin-denge/ruh-hali-degisimleri-menopoz.astro` (9 H2), `src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro` (7 H2).

### Article structured data — JSON-LD (MANDATORY)

Every published article ships with schema.org JSON-LD so search engines and assistive tooling can resolve the editorial and medical-review trust chain (EEAT). The helper lives at `src/utils/article-schema.ts` and is non-optional for new static `.astro` articles.

**Usage (in article frontmatter):**
```astro
import { buildArticleSchemas } from '../../utils/article-schema';
import { articleFaqs } from '../../data/article-faqs';
import { resolveSiteUrl } from '../../utils/seo';

const siteUrl = resolveSiteUrl(Astro.site);
const articleTitle = 'Makale Başlığı';
const articleDescription = 'Kısa 1-2 cümle SEO meta açıklama.';
const faqItems = articleFaqs['/zihin-denge/slug'] ?? [];
const articleSchemas = buildArticleSchemas({
  title: articleTitle,
  description: articleDescription,
  writerSlug: 'berna-aksoy',          // must exist in src/data/writers.ts
  publishedDate: '14 Nisan 2026',     // TR long form OR ISO — helper normalises
  pathname: '/zihin-denge/slug',      // leading slash, no siteUrl concatenation
  articleSection: 'Zihin & Denge',    // human label
  sectionPath: '/zihin-denge',        // hub URL path
  keywords: ['menopoz', 'uyku', '…'],
  faqItems,
  siteUrl,
});
```
Then pass to `SiteLayout`:
```astro
<SiteLayout
  title={`${articleTitle} - Estranova`}
  description={articleDescription}
  ogType="article"
  jsonLd={articleSchemas}
>
```

**What the helper emits (4 schemas, appended to SiteLayout's default WebSite + Organization):**
- **`MedicalWebPage`** — `name`, `description`, `url`, `inLanguage: 'tr-TR'`, `datePublished`/`dateModified` (ISO), `reviewedBy: Person` (Doç. Dr. Senai Aksoy default).
- **`Article`** — `headline`, `description`, ISO dates, `mainEntityOfPage`, `articleSection`, `keywords`, `author: Person` (resolved from `writers.ts` — includes `name`, `jobTitle`, `description`, `image`, `url: /yayin-kurulu`), `publisher: Organization` (with logo), `reviewedBy: Person`.
- **`BreadcrumbList`** — Anasayfa → (optional) articleSection → Article title.
- **`FAQPage`** — `faqItems` verildiğinde otomatik eklenir. Bu artık tüm yayın makalelerinde zorunlu yüzeydir; sayfadaki tek görünür SSS yüzeyiyle birebir aynı soru-cevap kaynağından beslenmelidir.

**Category ↔ path map:**
- `/zihin-denge/…` → `articleSection: 'Zihin & Denge'`, `sectionPath: '/zihin-denge'`
- `/hormonal-gecis/…` → `'Hormonal Geçiş'`, `/hormonal-gecis`
- `/zamansiz-yasam/…` → `'Zamansız Yaşam'`, `/zamansiz-yasam`
- `/zamansiz-yasam/deneysel/…` → `'Zamansız Yaşam · Deneysel'`, `/zamansiz-yasam`
- `/bilimsel-pencere/…` → `'Bilimsel Pencere'`, `/bilimsel-pencere`
- `/beden-yakinlik/…` → `'Beden & Yakınlık'`, `/beden-yakinlik`

**Do not:**
- Hand-roll `<script type="application/ld+json">` in article pages — use the helper.
- Pass absolute URLs in `pathname` — the helper prepends `siteUrl` and handles double-slash prevention.
- Override `medicalReviewer`/`medicalReviewerTitle` unless the article is genuinely reviewed by a different person (editorial coordination first).
- Omit `writerSlug` — every article has a named author resolved from `writers.ts`.
- Ayrı bir FAQ kaynağı yazıp sayfadaki görünür SSS yüzeyiyle schema'yı drift'e bırakma — gövde içi SSS veya `ArticleFAQ` ve `buildArticleSchemas({ faqItems })` aynı soru-cevap kaynağını kullanmalı.

**Dynamic articles** rendered via `src/pages/article/[slug].astro` keep their existing inline schema (richer: citations, reviewer roles). The helper is for the 17 static hub-style articles.

### Site discoverability — sitemap + RSS

Three discoverability surfaces ship with the site and must stay aligned:

1. **Sitemap index (`/sitemap-index.xml` + `/sitemap-0.xml`)** — auto-generated by `@astrojs/sitemap` at build time. Every generated route is included except filter-excluded (`/admin`, `/_*`). No manual maintenance.
2. **RSS feed (`/rss.xml`)** — auto-generated by `@astrojs/rss` from the **`src/data/static-articles.ts` manifest**. 17 static hub-style articles, sorted newest-first, with title/description/date/author/category/keywords. TR-TR language, managing editor Berna Aksoy.
3. **robots.txt (`/robots.txt`)** — production: `Sitemap:` directive points at sitemap index; dev mode: `Disallow: /`. RSS URL commented as discovery hint.

**SiteLayout head links (always present):**
- `<link rel="alternate" type="application/rss+xml" href="/rss.xml">`
- `<link rel="sitemap" type="application/xml" href="/sitemap-index.xml">`

**Adding a new static article — manifest is non-optional:**
After creating `src/pages/<section>/<slug>.astro` with `buildArticleSchemas()`, append a matching entry to `src/data/static-articles.ts` (`staticArticles` array). Fields mirror the `buildArticleSchemas` call: `path`, `title`, `description`, `publishedDate` (TR long form), `writerSlug`, `section`, `sectionPath`, `keywords`. The sitemap picks the page up automatically; the RSS feed only sees it if the manifest has it.

**Do not:**
- Hand-edit `dist/rss.xml` or `dist/sitemap-*.xml` — regenerated every build.
- Skip the manifest entry — the article will appear in search (via sitemap) but not in the RSS feed, causing silent drift between discovery surfaces.
- Re-order `staticArticles` manually for sort order — RSS endpoint consumes the array as-is; keep newest-first convention aligned with `publishedDate` descending.
- Rely on author field in RSS for legal identity — it uses `info@estranova.com` + writer display name for email-like format; real editor contact is the `managingEditor` / `webMaster` channel tags (also `info@estranova.com` — site has a single contact address).

### Yayın Kurulu kişi kartı şablonu — `KuruluCard.astro`

Tüm yayın kurulu bölümlerinde (Editörler, Yazarlar, Tıbbi Danışmanlar, Danışmanlar) tek bileşen kullanılır: `src/components/site/KuruluCard.astro`.

**Sabit alan sırası (tüm gruplar aynı):**

| Alan | Tip | Kural |
|---|---|---|
| `portrait` | string? | Opsiyonel; varsa 112×112 rounded-xl |
| `name` | string | font-serif text-2xl |
| `role` | string | text-xs uppercase primary-pink |
| `bio` | string | **max 2-3 cümle** — text-sm; tüm gruplar aynı boyut |
| `tags` | string[]? | Opsiyonel; varsa rounded-full chip'ler |
| `anchor` | string? | Kartın `id` attribute'u + `#anchor` link |
| `<slot />` | — | Opsiyonel ek içerik (örn. çift-rol açıklama notu) |

**Bio uzunluk kuralı:** Tıbbi danışman tam CV paragrafları (450+ kelime) kabul edilmez. Her bio **2-3 cümle**, ~150-250 karakter hedefi. Alan + kurum + uzmanlık yeterli.

**Gruba göre veri kaynağı:**
- Editörler → `src/data/writers.ts` `editors` export'u (publicBio + focusAreas otomatik)
- Yazarlar → `src/data/writers.ts` `guestWriters` export'u (aynı)
- Tıbbi Danışmanlar → `src/pages/yayin-kurulu.astro` `medicalAdvisors` array'i (inline, normalize edilmiş)
- Danışmanlar → `src/pages/yayin-kurulu.astro` `consultants` array'i (inline)

**Yeni kişi eklenirken:**
1. Biyografiyi 2-3 cümleye indir
2. `tags` dizisini ekle (2-4 etiket)
3. `portrait` varsa `/images/writers/<slug>.webp` yolunu ver
4. İlgili array'e ekle; hiçbir gruba özel HTML yazma — `KuruluCard` kullan

### Assessment or contact pages
If creating a symptom-assessment or contact-style page, keep it neutral and informational.
Do not make it a sales funnel.

Allowed framing:
- structured guidance
- symptom orientation
- information request
- general contact

Not allowed:
- treatment enrollment
- appointment funnel
- urgent conversion patterns

---

## Content Tone

**Writer persona** (aligned with `CLAUDE.md` HARD CONSTRAINT — §3 *Yazar persona'sı*): Articles should read like **Vogue / Harper's Bazaar / Marie Claire** lifestyle-health atmosphere — visual intuition, selective rhythm, urban everyday proximity — with Estranova's medical neutrality and evidence calm. **Taklit yasağı:** no external brand phrases, luxury copy, or fashion-editor persona; only atmosphere and rhythm. The implied author is **not a physician** — a successful **40+ woman** in a **non-clinical** career who researches deeply and speaks as a peer. The reader should feel **“you’re one of us”** warmth. **No** academic citation stack, **no** named international society/journal plugs, **no** inline external URLs in the body; **soft** phrasing (“research suggests”, “experts often note”) is acceptable. Canonical block: each peer female writer's `writers/<slug>/hot.md` → “Kadın dergisi hissi”.

**Hitap kuralı:** Kullanıcıya dönük tüm makale ve editoryal gövde metinlerinde hitap biçimi **daima "siz"** olmalıdır. "Sen" kalıbı, doğrudan okura seslenen yayın metninde kullanılmaz.

**Klinik kürsüsü yasağı:** Makale gövdesi ve ana yazar sesi “kliniğimde / hastalarım / klinik deneyimimde / tıbbi olarak söylüyorum” gibi hekim-kürsüsü ifadeleri kullanmaz. Tıbbi disiplin gerekiyorsa bu içerik ayrı **Bilimsel Editör Notu** panelinde, kısa ve nötr biçimde yer alır; ana metin yayın masası + yaşıt okur tonunu korur.

Write in a tone that is:
- calm
- precise
- medically informed
- non-sensational
- reassuring
- elegant

Avoid:
- aggressive persuasion
- hype
- fear-based wording
- influencer-style wellness claims
- miracle framing

### Manifesto-Aligned Anekdot Ekseni (Supplementary, /manifesto)

**Bu kural ana ton kurallarının yerini ALMAZ; onları zenginleştirir.**

Estranova'nın `/manifesto` sayfasındaki *"deneyim aktarmak"* sözüne bağlı olarak yazılar **mahrem ama ölçülü bir kişisel anekdot katmanı** taşır: yazar, makalenin ortasında veya bir bölüm geçişinde **birinci tekil şahıs** ile, kendi günlük hayatından (veya yakın çevresindeki kadınların gözleminden) **kısa bir sahne** açar. Amaç:

- Konuyu **deneyimle çerçevelemek** (bilgi aktarımının ötesinde)
- Okuru **"yalnız değilsin"** duygusuyla buluşturmak
- Manifesto'nun *"akıllı, samimi ve güvenilir bir not defteri"* iddiasını her yazıda **görünür** kılmak

**Kişiselleştirme zorunlu — tek-elden hissi yasak:**

Her yazarın anekdot ekseni farklı olmalıdır. Writer agent **`writers/<slug>.md` Bölüm 4b**'ye bakarak o yazara özel kaynak havuzunu kullanır:

| Yazar | Anekdot ekseni özet |
|---|---|
| Berna Aksoy | Sabah Instagram tarama ritüelleri; hekim danışma kararları; antrenman/Apple Watch gözlemleri |
| Alara Baykent | Mevsimsel saha (yaz: surf / kış: at); jim yaşıt sahneleri; geniş aile (anne/baba/anneanne/teyze) |
| Başak Pelister | Plume + Mahmure imzası: soru-cevap tekniği yoğun (her bölümde 1+ okurla diyalog sorusu), soru başlıklı H2'ler, üç nokta (…) ritmi, samimi itiraflar, "Aslında her şey…" yaşıt açılışı, gündelik anglizm (self-care/ghosting/longevity); 9 yıllık menopoz + yeni HRT yolculuğu; anne+kız üçgeni; seyahat/sahne/kıyafet ritüelleri. YASAK: marka jargonu (Aşk Marka, vizyon mimarı), lüks marka adı (LVMH/Dior), kendine ad-koyma ("Başak Pelister olarak…"), ünlem yoğunluğu (max 1/makale), ilişki/kadın-erkek ekseni |
| Dt. Duygu Karaosmanoğlu | Londra-İstanbul gel-git (kızı); klinik dekoru (otorite değil); yeni şey deneme |
| Özlem Denizmen | Para Durumu sahneleri; üst düzey iş çevresi sokratik soru; finansal karar çerçevesi (analoji) |
| Rima Erdemir | Sabah araştırma okuma; HRT karar süreci iç tartışması; teknoloji-sağlık gözlemi |
| Gamze Cizreli | Hürriyet köşe imzası (2012-2023): kişisel zaman çapası açılışı ("Geçen hafta…"), kültürel-edebi referans köprüsü (kitap/film/şarkı), üç nokta (…) yarım bırakma, itirafçı kırılganlık, liste cümleleri; sabah mutfak ritüelleri; pazar/küçük üretici; HRT iç sorgulaması (henüz başlamamış). YASAK: lüks dekor, çok-tema dağınıklık, ünlem yoğunluğu, sosyal/siyasi yorum |
| Senai Aksoy *(geçici yazar)* | Kendi geçişi; yaşıt çevresi; editöryel masa; mahrem konularda gizlilik mutlak |

**Operasyonel kural:**
- **Her makalede 1, en fazla 2 anekdot.** Daha fazlası karikatür, daha azı manifesto-aligned değil.
- Anekdotun **ardından dengeleyici bir cümle** ("ama bu benim yolum, sizinki farklı") şarttır.
- "Bende işe yaradı, siz de yapın" yapısı **kesinlikle yasak** (zaten HARD CONSTRAINT).
- Marka, ürün, ilaç, doz, klinik, doktor adı **yasak** (zaten HARD CONSTRAINT).
- Hassas sınır taşıyan yazarlar (Alara'nın otizmli üvey kardeşi, Duygu'nun hasta detayları, Senai'nin klinik gözlemi) için ilgili `writers/*.md` 4b bölümündeki açık yasakları izle.

**Detay:** [`docs/editorial-policy-operational.md`](docs/editorial-policy-operational.md) §11 + her yazarın `writers/<slug>.md` Bölüm 4b.

## Persona ve Dış Referans (CLAUDE.md HARD CONSTRAINT)

- **Yazar persona:** Tıp dışı 40+ kadın yaşıt; Vogue / Elle / Marie Claire tonu. Hekim perspektifi **YASAK**.
- **Hitap standardı:** Okura doğrudan seslenirken **yalnızca "siz"** kullanılır; yayın metninde **"sen" kullanılmaz**.
- **Dış URL link YASAK** — yumuşak referans (“araştırmalar gösteriyor”) kabul. Kuruluş adı (NAMS / NICE / Mayo vb.) cümle içine yerleştirme **YASAK**.
- **Humanize:** Her makalede en az 1 yaşıt / deneyim cümlesi.
- **FAQ:** `pratik_veya_sss` 3–5 konuya özgü gerçek soru; yayınlanan sayfada tek görünür SSS yüzeyi bulunmalı. Gövde içi editoryal SSS varsa ikinci `ArticleFAQ` ekleme; görünür SSS yoksa `ArticleFAQ` kullan. `FAQPage` schema'sı aynı soru-cevap kaynağıyla birebir karşılık taşımalı.

Kural detayı: **`CLAUDE.md`** (§3 + §4 alt bölümleri). Operasyonel detay: **[docs/PIPELINE.md](docs/PIPELINE.md)** + **[docs/style-rules-map.md](docs/style-rules-map.md)**.

---

## Expert Visibility

Expert presence is allowed as:
- editorial reviewer
- medical reviewer
- expert contributor
- clinical perspective

Avoid promotional framing such as:
- top doctor
- best specialist
- leading clinic
- unmatched success

---

## Compliance Mindset

When generating content, code, components, layouts, or prompts, always ask:

1. Does this look like an editorial health platform?
2. Does this avoid direct treatment marketing?
3. Is the CTA neutral?
4. Would this still make sense as a public-interest health publication?
5. Does this prioritize clarity and trust over conversion?

If not, revise.

---

## Footer Requirements

Every mature page set should make room for:
- Editorial Policy
- Medical Disclaimer
- Privacy Policy
- About the Platform
- Contact / Information

---

## Image Rules

Prefer:
- calm, confident women aged 40–55
- natural editorial photography
- subtle medical context
- thoughtful, non-dramatic visuals
- life-wide editorial scenes: home, city, workday, walking, wardrobe, kitchen, balcony, bookshop, seaside, travel, gallery, lobby, movement, rest, and quiet personal moments
- varied props and micro-contexts that support the topic without becoming repetitive

Prompt diversity rule:
- Do not default to the same visual formula across articles.
- Do not default to the same woman archetype across images. Vary Turkish / Türkiye-context female representation intentionally: different regional looks, skin undertones, hair colors and textures, facial features, body shapes, heights, styling habits, and urban / coastal / Anatolian / professional / home-life cues. Prompts may say "Turkish woman" but should further specify a distinct, realistic type so the generator does not keep producing the same generic face.
- Avoid repeatedly using tea glasses, coffee cups, notebooks, pens, or desk/table scenes unless the article specifically calls for them.
- Rotate scene anchors and props: wardrobe, mirror, coat, scarf, sunglasses, bag, keys, phone, headphones, book, magazine, market bag, suitcase, yoga mat, water bottle, hair brush, unlabeled sunscreen, fruit/greens, flowers, balcony rail, seaside path, elevator/lobby, gallery wall, or city street.
- Every image prompt should cover a broader slice of life while remaining topic-aligned, calm, non-promotional, and editorial.

Avoid:
- clinical machinery as hero focus
- product-style renders
- startup icon blocks
- exaggerated menopause suffering
- cosmetic advertising aesthetics

---

## Safe Default Behavior

If uncertain:
- choose editorial over promotional
- choose neutral over persuasive
- choose structured information over conversion tactics
- choose trust over marketing

These defaults override optimization instincts.
