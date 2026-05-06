# Homepage Journey Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ana sayfadaki `01 — Yolculuk Haritası` bölümünü `1 ana kapı + 3 kompakt rota` hiyerarşisine geçirip `Belirti Atlası` ile editoryal köprü kurmak.

**Architecture:** İnline `journey` verisini `src/data/` altına taşıyacağız, ardından ana sayfa için özel ama mevcut hub pattern’leriyle akraba bir `HomeJourneyMap` bileşeni oluşturacağız. Son olarak [src/pages/index.astro](/D:/A-klasör/Estranova/src/pages/index.astro) içindeki mevcut section kabuğu bu yeni veri ve bileşenle değişecek; dekoratif ayraç küçük bir editoryal geçiş notuna dönüşecek.

**Tech Stack:** Astro, TypeScript veri dosyaları, Estranova site bileşenleri, Tailwind utility sınıfları, `npm run lint`, `npm run build`, `npm run compliance`

---

### Task 1: Ana sayfa yolculuk verisini veri dosyasına taşı

**Files:**
- Create: `src/data/home-journey-path.ts`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Mevcut inline `journey` yapısını aç ve alanları doğrula**

Run: `Get-Content src/pages/index.astro | Select-String -Pattern "const journey = \\[" -Context 0,40`
Expected: `step`, `title`, `excerpt`, `href`, `imageKey` alanlarını kullanan 4 kayıt görünür.

- [ ] **Step 2: Yeni veri dosyasını oluştur**

Yeni dosyaya şu başlangıç yapısını ekle:

```ts
export interface HomeJourneyItem {
  step: '01' | '02' | '03' | '04';
  title: string;
  eyebrow: string;
  excerpt: string;
  href: string;
  imageKey:
    | '/hormonal-gecis/perimenopoz'
    | '/hormonal-gecis/menopoza-hazirlik'
    | '/hormonal-gecis/menopoz'
    | '/hormonal-gecis/40-sonrasi';
  ctaLabel: string;
  featured?: boolean;
}

export const homeJourneyIntro = {
  sectionLabel: 'Yolculuk Haritası',
  title: 'Hormonal geçiş için ilk okuma eşiği',
  lede:
    'Döneminizi kabaca biliyorsanız bu dört kapıdan başlayın. Emin değilseniz bir alttaki belirti atlası daha iyi bir giriş sunar.',
  transitionNote:
    'Belirti daha baskın görünüyorsa bir sonraki atlas daha doğru başlangıç olabilir.',
};

export const homeJourneyItems: HomeJourneyItem[] = [
  {
    step: '01',
    eyebrow: 'İlk kapı',
    title: 'Perimenopoz',
    excerpt:
      'Adet düzeni değişmeye başladığında vücudunuzun neyi sessizce anlattığını birlikte okumak için sakin bir başlangıç rehberi.',
    href: '/hormonal-gecis/perimenopoz',
    imageKey: '/hormonal-gecis/perimenopoz',
    ctaLabel: 'İçeriği incele',
    featured: true,
  },
  {
    step: '02',
    eyebrow: 'Geçişi anlamak',
    title: 'Menopoza Hazırlık',
    excerpt:
      'Geçişe adım adım ısınırken günlük düzeninizi, takibinizi ve koruyucu alışkanlıklarınızı sabırla kurabilirsiniz.',
    href: '/hormonal-gecis/menopoza-hazirlik',
    imageKey: '/hormonal-gecis/menopoza-hazirlik',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '03',
    eyebrow: 'Ana dönem',
    title: 'Menopoz',
    excerpt:
      'Sık karşılaştığımız belirtileri tanımanız ve günlük yaşamınızı biraz daha yumuşatmanız için sade bir rehber.',
    href: '/hormonal-gecis/menopoz',
    imageKey: '/hormonal-gecis/menopoz',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '04',
    eyebrow: 'Uzun vade',
    title: '40 Sonrası Sağlık',
    excerpt:
      'Kemik, kas, uyku ve tarama başlıklarını tek dosyada okuyun; amaç görev listesi değil, sakin bir sağlık hattı.',
    href: '/hormonal-gecis/40-sonrasi',
    imageKey: '/hormonal-gecis/40-sonrasi',
    ctaLabel: 'Rotayı aç',
  },
];
```

- [ ] **Step 3: Ana sayfadaki inline veri bloğunu kaldırıp import ekle**

[src/pages/index.astro](/D:/A-klasör/Estranova/src/pages/index.astro) üstündeki import bölümünü şu yönde güncelle:

```astro
import HomeJourneyMap from '../components/site/HomeJourneyMap.astro';
import { homeJourneyIntro, homeJourneyItems } from '../data/home-journey-path';
```

Ve mevcut inline sabiti kaldır:

```astro
-const journey = [
-  ...
-];
```

- [ ] **Step 4: TypeScript düzeyinde veri kullanımını doğrula**

Run: `Get-Content src/data/home-journey-path.ts`
Expected: `homeJourneyIntro` ve `homeJourneyItems` export’ları Türkçe metinlerle görünür; `featured: true` yalnızca ilk kayıtta yer alır.

- [ ] **Step 5: Değişikliği küçük bir checkpoint commit’i için hazırla**

Run: `git add src/data/home-journey-path.ts src/pages/index.astro`
Expected: staging alanında yalnızca yeni veri dosyası ve index import değişikliği görünür.

### Task 2: Yeni `HomeJourneyMap` bileşenini oluştur

**Files:**
- Create: `src/components/site/HomeJourneyMap.astro`
- Read: `src/components/site/HubStartingPath.astro`
- Read: `src/data/submenu-heroes.ts`

- [ ] **Step 1: Referans bileşen ritmini aç**

Run: `Get-Content src/components/site/HubStartingPath.astro`
Expected: başlık üst etiketi, büyük serif başlık, intro metni ve numaralı editorial rota yapısı görünür.

- [ ] **Step 2: Yeni bileşenin prop arayüzünü ve veri ayrımını yaz**

Yeni dosyayı şu iskeletle başlat:

```astro
---
import { submenuHeroByRoute } from '../../data/submenu-heroes';
import type { HomeJourneyItem } from '../../data/home-journey-path';

interface Props {
  sectionNumber?: string;
  sectionLabel: string;
  title: string;
  lede: string;
  items: HomeJourneyItem[];
}

const {
  sectionNumber = '01',
  sectionLabel,
  title,
  lede,
  items,
} = Astro.props;

const featured = items.find((item) => item.featured) ?? items[0];
const secondaryItems = items.filter((item) => item.href !== featured.href);
const featuredImage = submenuHeroByRoute[featured.imageKey];
---
```

- [ ] **Step 3: `1 ana kapı + 3 rota` markup’ını ekle**

Bileşen gövdesine şu yapıyı yaz:

```astro
<section class="relative isolate overflow-hidden border-t border-burgundy/10 bg-[linear-gradient(180deg,#fff_0%,#fcf8f2_100%)] px-6 py-16 md:py-24">
  <div class="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent"></div>
  <div class="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-gold/12 blur-3xl"></div>
  <div class="mx-auto max-w-6xl">
    <header class="mb-12 grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
      <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-burgundy">
        <span class="font-serif font-normal tabular-nums text-gold">{sectionNumber}</span>
        <span class="mx-2 text-gold">—</span>
        {sectionLabel}
      </p>
      <div>
        <h2 class="mb-4 font-serif text-4xl leading-[0.98] tracking-[-0.03em] text-ink md:text-6xl">{title}</h2>
        <p class="max-w-2xl border-l border-gold/55 pl-5 font-serif text-xl italic leading-relaxed text-burgundy/82">
          {lede}
        </p>
      </div>
    </header>

    <div class="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <a href={featured.href} class="group relative overflow-hidden rounded-[40px] border border-burgundy/14 bg-white shadow-[0_36px_118px_-72px_rgba(44,22,28,0.42)] ring-1 ring-black/[0.05]">
        <!-- featured card -->
      </a>

      <div class="overflow-hidden rounded-[34px] border border-burgundy/12 bg-white shadow-[0_24px_80px_-60px_rgba(44,22,28,0.30)] ring-1 ring-black/[0.04]">
        {secondaryItems.map((item) => (
          <a href={item.href} class="group grid gap-4 border-t border-burgundy/10 px-5 py-5 first:border-t-0 md:grid-cols-[72px_1fr_auto] md:items-center md:px-6">
            <!-- secondary row -->
          </a>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Featured ve secondary card içeriklerini tamamla**

İçerik parçalarını şu metin hiyerarşisiyle doldur:

```astro
<p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">{featured.eyebrow}</p>
<h3 class="mb-4 max-w-[9ch] font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-white md:text-6xl">
  {featured.title}
</h3>
<p class="max-w-xl border-l border-gold/70 pl-5 font-serif text-xl italic leading-relaxed text-white/86">
  {featured.excerpt}
</p>
<span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
  {featured.ctaLabel}
  <span aria-hidden="true" class="font-serif text-2xl text-gold transition group-hover:translate-x-1">→</span>
</span>
```

Ve secondary satırlarda:

```astro
<p class="mb-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold-bronze">
  {item.step} · {item.eyebrow}
</p>
<h3 class="mb-1 font-serif text-2xl leading-tight tracking-[-0.02em] text-ink transition group-hover:text-burgundy">
  {item.title}
</h3>
<p class="max-w-2xl text-sm leading-relaxed text-ink/70">{item.excerpt}</p>
<span class="text-xs font-bold uppercase tracking-[0.17em] text-burgundy/72">{item.ctaLabel}</span>
```

- [ ] **Step 5: Bileşen derlenebilirliğini metinsel olarak kontrol et**

Run: `Get-Content src/components/site/HomeJourneyMap.astro`
Expected: `featured`, `secondaryItems`, `submenuHeroByRoute` ve Türkçe CTA metinleri tek dosyada görünür.

### Task 3: Ana sayfayı yeni bileşenle entegre et

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Eski section markup’ını kaldır**

Mevcut bloktan şu yapıyı sil:

```astro
<section class="relative isolate overflow-hidden border-t border-burgundy/10 bg-white px-6 py-16 md:py-24">
  ...
</section>
```

Bu silme işlemi [src/pages/index.astro](/D:/A-klasör/Estranova/src/pages/index.astro) içinde `HomeHero` ile ayraç arasındaki bölüm için geçerlidir.

- [ ] **Step 2: Yeni bileşen çağrısını yerleştir**

Silinen bölümün yerine şunu ekle:

```astro
<HomeJourneyMap
  sectionNumber="01"
  sectionLabel={homeJourneyIntro.sectionLabel}
  title={homeJourneyIntro.title}
  lede={homeJourneyIntro.lede}
  items={homeJourneyItems}
/>
```

- [ ] **Step 3: Dekoratif ayırıcıyı geçiş notuna dönüştür**

Mevcut ayraç bloğunu şu yapıya çevir:

```astro
<div class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 px-6 py-8 text-center md:py-10">
  <div class="flex w-full max-w-sm items-center justify-center gap-4">
    <span class="h-px flex-1 bg-gold/35"></span>
    <span class="font-serif text-xl text-gold" aria-hidden="true">❦</span>
    <span class="h-px flex-1 bg-gold/35"></span>
  </div>
  <p class="max-w-xl font-serif text-lg italic leading-relaxed text-burgundy/78">
    {homeJourneyIntro.transitionNote}
  </p>
</div>
```

- [ ] **Step 4: Kullanılmayan import ve sabitleri temizle**

Temizlikten sonra [src/pages/index.astro](/D:/A-klasör/Estranova/src/pages/index.astro) içinde:

```astro
-const journey = [...]
```

artık bulunmamalı; yerine `HomeJourneyMap`, `homeJourneyIntro`, `homeJourneyItems` import’ları yer almalı.

- [ ] **Step 5: Dosya farkını gözle kontrol et**

Run: `git diff -- src/pages/index.astro src/components/site/HomeJourneyMap.astro src/data/home-journey-path.ts`
Expected: ana sayfada tek büyük inline blok yerine import + bileşen çağrısı görünür; yeni component ve data file ayrı dosyalarda yer alır.

### Task 4: Statik doğrulama ve görsel smoke test

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/components/site/HomeJourneyMap.astro`
- Verify: `src/data/home-journey-path.ts`

- [ ] **Step 1: TypeScript kontrolünü çalıştır**

Run: `npm run lint`
Expected: exit code `0`

- [ ] **Step 2: Compliance kontrolünü çalıştır**

Run: `npm run compliance`
Expected: exit code `0`; İngilizce satış CTA’sı veya uygunsuz lexicon uyarısı gelmez.

- [ ] **Step 3: Production build’i çalıştır**

Run: `npm run build`
Expected: exit code `0`; homepage route build sırasında hatasız derlenir.

- [ ] **Step 4: Yerel önizleme ile smoke test yap**

Run: `npm run dev`
Expected: Astro dev server `http://0.0.0.0:4322/` veya `http://localhost:4322/` üzerinde açılır.

Ardından görsel olarak şunları kontrol et:

```text
1. Hero sonrası yeni bölüm tek bir editoryal sahne gibi okunuyor mu?
2. Featured card solda, üç kompakt rota sağda/alta düzgün akıyor mu?
3. Geçiş notu Belirti Atlası ile anlamlı köprü kuruyor mu?
4. CTA metinleri tamamen Türkçe ve nötr mü?
5. Mobil kırılımda featured ve secondary kartlar bozulmadan alt alta akıyor mu?
```

- [ ] **Step 5: Son durum kontrolü ve commit**

Run: `git status --short`
Expected: yalnızca bu iş için değişen dosyalar görünür.

Sonra:

```bash
git add src/pages/index.astro src/components/site/HomeJourneyMap.astro src/data/home-journey-path.ts
git commit -m "Refine homepage journey map hierarchy"
```

## Self-Review

### Spec coverage

- `1 ana kapı + 3 kompakt rota`: Task 2 + Task 3
- başlık ve köprü ledesi: Task 1 + Task 2
- görünür nötr CTA: Task 1 + Task 2
- `01` → `02` geçiş notu: Task 1 + Task 3
- mevcut homepage/hub pattern’lerine yaklaşım: Task 2

### Placeholder scan

Plan içinde `TODO`, `TBD`, “uygun şekilde hallet” benzeri boş yönlendirme yok. Her görev dosya, snippet ve komut düzeyinde tanımlandı.

### Type consistency

`homeJourneyIntro`, `homeJourneyItems`, `HomeJourneyItem`, `HomeJourneyMap` ve `transitionNote` isimleri tüm görevlerde aynı kullanıldı.
