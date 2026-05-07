# Magnezyum Menopoz Yazısı Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `Zamansız Yaşam · Vitaminler` alt-hub'ına Dr. Senai Aksoy imzalı yeni magnezyum yazısını, görünür SSS ve keşif kayıtlarıyla birlikte eklemek.

**Architecture:** Yeni statik `.astro` makalesi, mevcut Estranova makale kabuğunu birebir kullanacak. İçerik keşfi için `src/data/article-faqs.ts` ve `src/data/static-articles.ts` güncellenecek; Vitaminler alt-hub'ı yeni tarihli yazıyı otomatik olarak `Son yazı` yüzeyine taşıyacak.

**Tech Stack:** Astro, TypeScript veri dosyaları, mevcut Estranova site bileşenleri, `buildArticleSchemas()` JSON-LD helper'ı.

---

### Task 1: Planlanan Makale Dosyasını Oluştur

**Files:**
- Create: `src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro`
- Reference: `src/pages/zamansiz-yasam/d-vitamini-rehberi.astro`

- [ ] **Step 1: Mevcut Vitaminler makalesi kabuğunu referans al**

Kontrol et:
- `SubmenuHero`
- `SubmenuArticleBody`
- `ArticleAuthorBlock`
- `ArticleSummary`
- `ArticleProsePanel`
- `ArticleFAQ`
- `RelatedReadings`
- `ArticleEditorNote`
- `ArticleDisclaimer`
- `buildArticleSchemas()`

- [ ] **Step 2: Yeni makale frontmatter'ını kur**

Kullan:

```ts
const hero =
  submenuHeroByRoute['/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar']
  ?? submenuHeroByRoute['/zamansiz-yasam/vitaminler']!;

const articleTitle = 'Magnezyum Menopozda Gerçekten Ne İşe Yarar?';
const articleDescription =
  'Uyku, kas krampları, kabızlık, stres ve çarpıntı gibi yakınmalarda magnezyum sık öneriliyor; ama bütün etkiler aynı güçte kanıt taşımıyor. Bu rehber, menopoz döneminde magnezyumun ne zaman anlamlı olabileceğini, hangi vaatlerin abartıldığını ve form seçimi konuşulurken neyin gerçekten önemli olduğunu ayırır.';
```

- [ ] **Step 3: Makale gövdesini yaz**

H2 omurgası:

```txt
Magnezyum Neden Bu Kadar Sık Konuşuluyor?
Uyku İçin Kanıt Ne Kadar Güçlü?
Kas Krampları, Beden Gerginliği ve Huzursuzluk Tarafında Ne Biliyoruz?
Kabızlıkta Neden Daha Pratik Bir Yeri Var?
Stres, Kaygı ve Çarpıntı Tarafında Neyi Abartmamak Gerekir?
Glisinat, Sitrat, Oksit ve Diğer Formlar Gerçekte Ne Fark Yaratır?
Kimler Rastgele Başlamamalı?
Doktora Sorulabilecek Üç Net Soru
Kapanış
```

- [ ] **Step 4: Görünür tek SSS yüzeyini `ArticleFAQ` ile bağla**

Makale içinde:

```astro
<ArticleFAQ id="sik-sorulanlar" items={faqItems} class="mt-10" />
```

- [ ] **Step 5: İlgili içerikleri bağla**

Kullan:

```astro
<RelatedReadings
  class="mt-14"
  paths={[
    '/zamansiz-yasam/d-vitamini-rehberi',
    '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
    '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz',
  ]}
/>
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro
git commit -m "Add magnesium menopause article page"
```

### Task 2: FAQ Kaynağını Ekle

**Files:**
- Modify: `src/data/article-faqs.ts`

- [ ] **Step 1: Yeni rota için FAQ dizisini ekle**

Ekle:

```ts
'/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar': [
  {
    question: 'Magnezyum menopozda herkese gerekli bir takviye midir?',
    answer: 'Hayır. Bazı kadınlarda uyku, kabızlık ya da belirli eksiklik riski nedeniyle anlamlı olabilir; ama herkese otomatik olarak gerekliymiş gibi konuşmak doğru olmaz. Asıl soru, hangi yakınma için ve hangi gerekçeyle düşünüldüğüdür.',
  },
  {
    question: 'Uyku için magnezyum gerçekten işe yarar mı?',
    answer: 'Uyku tarafında bazı kadınlarda fayda hissi olabilir; ancak kanıt bütün uyku sorunları için aynı güçte değildir. Özellikle uyku bozukluğunun nedeni sıcak basması, anksiyete, uyku apnesi ya da gece bölünmesi ise magnezyum tek başına bütün tabloyu çözmez.',
  },
  {
    question: 'Hangi magnezyum formu daha iyi sorusunun tek cevabı var mı?',
    answer: 'Hayır. Form seçimi çoğu zaman hedefe göre anlam kazanır: kabızlıkta sitrat daha pratik olabilirken, mide-barsak hassasiyetinde başka formlar daha iyi tolere edilebilir. “En iyi form” yerine “hangi amaç için” sorusu daha doğru bir başlangıç sağlar.',
  },
  {
    question: 'Magnezyum zararsız diye düşünmek doğru mu?',
    answer: 'Her zaman değil. Özellikle böbrek hastalığı olanlarda, bazı ilaçları kullananlarda ya da yüksek dozları uzun süre alanlarda daha dikkatli olunmalıdır. Takviyenin sıradan görünmesi, herkes için risksiz olduğu anlamına gelmez.',
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/article-faqs.ts
git commit -m "Add magnesium article FAQs"
```

### Task 3: Statik Makale Manifestini Güncelle

**Files:**
- Modify: `src/data/static-articles.ts`

- [ ] **Step 1: Yeni makale kaydını en üste yakın ekle**

Ekle:

```ts
{
  path: '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar',
  title: 'Magnezyum Menopozda Gerçekten Ne İşe Yarar?',
  description:
    'Uyku, kas krampları, kabızlık, stres ve çarpıntı gibi yakınmalarda magnezyum sık öneriliyor; ama bütün etkiler aynı güçte kanıt taşımıyor. Bu rehber, menopoz döneminde magnezyumun ne zaman anlamlı olabileceğini, hangi vaatlerin abartıldığını ve form seçimi konuşulurken neyin gerçekten önemli olduğunu ayırır.',
  publishedDate: '7 Mayıs 2026',
  writerSlug: 'senai-aksoy',
  section: 'Zamansız Yaşam · Vitaminler',
  sectionPath: '/zamansiz-yasam',
  keywords: [
    'magnezyum',
    'menopoz',
    'uyku',
    'kas krampları',
    'kabızlık',
    'magnezyum glisinat',
    'magnezyum sitrat',
    'takviye güvenliği',
  ],
},
```

- [ ] **Step 2: Doğrula**

Beklenen sonuç:
- Vitaminler alt-hub'ı yeni yazıyı `Son yazı` olarak çeker
- RSS/arama/veri kayıtları yeni makaleyi görür

- [ ] **Step 3: Commit**

```bash
git add src/data/static-articles.ts
git commit -m "Register magnesium menopause article"
```

### Task 4: Doğrulama

**Files:**
- Verify: `src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro`
- Verify: `src/data/article-faqs.ts`
- Verify: `src/data/static-articles.ts`

- [ ] **Step 1: Type check çalıştır**

Run:

```bash
npm run lint
```

Expected: PASS

- [ ] **Step 2: Build çalıştır**

Run:

```bash
npm run build
```

Expected: PASS, ayrıca şu route üretilmeli:

```txt
/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/index.html
```

- [ ] **Step 3: Vitaminler alt-hub çıktısını doğrula**

Kontrol et:

```txt
http://localhost:4322/zamansiz-yasam/vitaminler/
```

Beklenen:
- yeni yazı `Son yazı` yüzeyinde görünür
- `D Vitamini Rehberi` arşive düşer

- [ ] **Step 4: Commit**

```bash
git add src/pages/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar.astro src/data/article-faqs.ts src/data/static-articles.ts
git commit -m "Publish magnesium menopause article"
```
