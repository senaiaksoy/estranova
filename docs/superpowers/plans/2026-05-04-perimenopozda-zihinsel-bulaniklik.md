# Perimenopozda Zihinsel Bulanıklık Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `Estranova Editörleri` imzasıyla `Bilişsel Sağlık` alt-hub'ına yeni bir statik makale eklemek ve RSS manifestine dahil etmek.

**Architecture:** Mevcut static Astro article desenini yeniden kullanacağız: `SubmenuHero` + `SubmenuArticleBody` + `ArticleTOC` + `ArticleAuthorBlock` + `ArticleProsePanel`. Yazı yeni bir `.astro` rota dosyasında yer alacak; RSS ve keşfedilebilirlik için `src/data/static-articles.ts` manifestine tek bir kayıt eklenecek.

**Tech Stack:** Astro, TypeScript veri dosyaları, Estranova site bileşenleri, schema helper (`buildArticleSchemas`)

---

### Task 1: Yeni makale dosyasını oluştur

**Files:**
- Create: `src/pages/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik.astro`

- [ ] **Step 1: Mevcut referans article desenini aç**

Run: `Get-Content src/pages/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz.astro`
Expected: `SubmenuHero`, `SubmenuArticleBody`, `ArticleTOC`, `ArticleAuthorBlock`, `ArticleProsePanel` kullanan tam bir örnek görünür.

- [ ] **Step 2: Yeni article frontmatter ve iskeleti yaz**

Makale dosyasına şu yapıyı ekle:

```astro
---
import SiteLayout from '../../../layouts/SiteLayout.astro';
import SiteNavbar from '../../../components/site/SiteNavbar.astro';
import SiteFooter from '../../../components/site/SiteFooter.astro';
import SubmenuHero from '../../../components/site/SubmenuHero.astro';
import SubmenuArticleBody from '../../../components/site/SubmenuArticleBody.astro';
import ArticleTOC from '../../../components/site/ArticleTOC.astro';
import ArticleAuthorBlock from '../../../components/site/ArticleAuthorBlock.astro';
import ArticleProsePanel from '../../../components/site/ArticleProsePanel.astro';
import Evidence from '../../../components/site/Evidence.astro';
import RelatedReadings from '../../../components/site/RelatedReadings.astro';
import { submenuHeroByRoute } from '../../../data/submenu-heroes';
import { buildArticleSchemas } from '../../../utils/article-schema';
import { resolveSiteUrl } from '../../../utils/seo';

const pathname = '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik';
const hero = submenuHeroByRoute[pathname] ?? submenuHeroByRoute['/zihin-denge/bilissel-saglik']!;
const articleTitle = 'Perimenopozda Zihinsel Bulanıklık: Unutkanlık Hissi Günlük Hayatta Nasıl Okunur?';
const articleDescription =
  'Perimenopoz döneminde kelime bulmakta zorlanma, unutkanlık hissi, odak dalgalanması ve zihinsel yorgunluk neden olur? Bu rehber, gündelik hayatta fark edilen bilişsel değişimleri panik yaratmadan anlamaya ve ne zaman daha dikkatli değerlendirme gerektiğini ayırt etmeye yardımcı olur.';
const publishedDate = '4 Mayıs 2026';
const readingMinutes = 8;
const tocEntries = [
  { id: 'neden-simdi', label: 'Bu bulanıklık hissi neden tam da şimdi ortaya çıkıyor?' },
  { id: 'ayni-sey-mi', label: 'Unutkanlık ile zihinsel yorgunluk aynı şey mi?' },
  { id: 'uyku-stres', label: 'Uyku, stres ve sıcak basmaları zihni nasıl etkiliyor?' },
  { id: 'olagan-dalgalanma', label: 'Hangi belirtiler olağan dalgalanma gibi okunabilir?' },
  { id: 'ne-zaman-degerlendirme', label: 'Ne zaman daha dikkatli değerlendirme gerekir?' },
  { id: 'kucuk-duzenler', label: 'Gündelik hayatta zihni rahatlatan küçük düzenler' },
  { id: 'kisa-hatirlatma', label: 'Kısa hatırlatma' },
];

const siteUrl = resolveSiteUrl(Astro.site);
const articleSchemas = buildArticleSchemas({
  title: articleTitle,
  description: articleDescription,
  writerSlug: 'estranova-editorial',
  publishedDate,
  pathname,
  articleSection: 'Zihin & Denge',
  sectionPath: '/zihin-denge',
  keywords: [
    'perimenopoz',
    'beyin sisi',
    'unutkanlık',
    'odaklanma',
    'zihinsel yorgunluk',
    'bilişsel sağlık',
    'uyku',
    'stres',
    'hormon değişimi',
  ],
  siteUrl,
});
---
```

- [ ] **Step 3: Makale gövdesini editorial Türkçe tonla yaz**

Ana gövdeye şu bölümleri yerleştir:

```astro
<ArticleProsePanel>
  <h2 id="neden-simdi">Bu bulanıklık hissi neden tam da şimdi ortaya çıkıyor?</h2>
  <p>...</p>
  <p>...</p>

  <h2 id="ayni-sey-mi">Perimenopozda unutkanlık ile zihinsel yorgunluk aynı şey mi?</h2>
  <p>...</p>

  <h2 id="uyku-stres">Uyku, stres ve sıcak basmaları zihni nasıl etkiliyor?</h2>
  <p>...</p>

  <h2 id="olagan-dalgalanma">Hangi belirtiler olağan dalgalanma gibi okunabilir?</h2>
  <p>...</p>

  <h2 id="ne-zaman-degerlendirme">Ne zaman daha dikkatli değerlendirme gerekir?</h2>
  <p>...</p>

  <h2 id="kucuk-duzenler">Gündelik hayatta zihni biraz rahatlatan küçük düzenler neler olabilir?</h2>
  <p>...</p>
  <ul>
    <li>...</li>
  </ul>

  <h2 id="kisa-hatirlatma">Kısa hatırlatma: Bu dönem zekâyı değil yükü değiştirir</h2>
  <p>...</p>
</ArticleProsePanel>
```

- [ ] **Step 4: Kapanış bloklarını ekle**

Makale sonuna ilgili içerikler ve disclaimer ekle:

```astro
<RelatedReadings
  class="mt-14"
  paths={[
    '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz',
    '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz',
    '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler',
  ]}
/>
```

- [ ] **Step 5: Dosyanın derlenebilir göründüğünü gözle kontrol et**

Run: `Get-Content src/pages/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik.astro`
Expected: import zinciri, JSON-LD helper, `authorSlug="estranova-editorial"` ve tam H2 akışı görünür.

### Task 2: RSS manifestine yeni makaleyi ekle

**Files:**
- Modify: `src/data/static-articles.ts`

- [ ] **Step 1: Yeni manifest kaydını ekle**

Var olan `staticArticles` dizisine şu nesneyi en üste ekle:

```ts
{
  path: '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik',
  title: 'Perimenopozda Zihinsel Bulanıklık: Unutkanlık Hissi Günlük Hayatta Nasıl Okunur?',
  description:
    'Perimenopoz döneminde kelime bulmakta zorlanma, unutkanlık hissi, odak dalgalanması ve zihinsel yorgunluk neden olur? Bu rehber, gündelik hayatta fark edilen bilişsel değişimleri panik yaratmadan anlamaya ve ne zaman daha dikkatli değerlendirme gerektiğini ayırt etmeye yardımcı olur.',
  publishedDate: '4 Mayıs 2026',
  writerSlug: 'estranova-editorial',
  section: 'Zihin & Denge',
  sectionPath: '/zihin-denge',
  keywords: [
    'perimenopoz',
    'beyin sisi',
    'unutkanlık',
    'odaklanma',
    'zihinsel yorgunluk',
    'bilişsel sağlık',
    'uyku',
    'stres',
    'hormon değişimi',
  ],
},
```

- [ ] **Step 2: Manifest sırasını gözle doğrula**

Run: `Get-Content src/data/static-articles.ts | Select-Object -First 40`
Expected: yeni makale en üstte görünür, tarih ve `writerSlug` doğru olur.

### Task 3: Doğrulama

**Files:**
- Verify: `src/pages/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik.astro`
- Verify: `src/data/static-articles.ts`

- [ ] **Step 1: TypeScript/lint kontrolünü çalıştır**

Run: `npm run lint`
Expected: exit code 0

- [ ] **Step 2: Production build kontrolünü çalıştır**

Run: `npm run build`
Expected: exit code 0 ve `/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/index.html` static route listesinde görünür.

- [ ] **Step 3: Çalışma ağacını kontrol et**

Run: `git status --short`
Expected: yalnızca yeni makale, manifest ve plan/spec dosyaları değişmiş görünür.
