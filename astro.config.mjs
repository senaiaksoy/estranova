import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const sitemapExcludedPaths = [
  '/hesabim/',
  '/giris/',
  '/abone-ol/',
  '/mektup/',
  '/okuma-paneli/',
  '/sonra-oku/',
  // Tasarım denemesi sayfası — SiteLayout `allowIndexing={false}` ile
  // production'da da noindex; sitemap'te kalması GSC "noindex etiketiyle
  // hariç tutuldu" hatası üretiyordu (2026-05-23).
  '/logo-denemesi/',
];

const scheduledReleasePaths = [
  { path: '/sayi/02-haziran-2026-guc-esigi/', releaseDate: '2026-06-01' },
  { path: '/dosya/2026-06-guc-esigi/', releaseDate: '2026-06-01' },
  { path: '/editorun-kosesi/haziran-2026/', releaseDate: '2026-06-01' },
  {
    path: '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/hormonal-gecis/40-sonrasi/yorgunluk-kas-tiroid-metabolizma/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/',
    releaseDate: '2026-06-01',
  },
];

function todayInTurkeyISO(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function matchesSitemapPath(page, excludedPath) {
  return page === excludedPath || page.endsWith(excludedPath) || page.includes(`${excludedPath}/`);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://estranova.com',
  // Cloudflare Pages slash'lı versiyonu canonical sayıyor. Iç linklerin slash'sız
  // üretilmesi GSC'de "Yönlendirmeli sayfa" hatasına yol açıyordu (2026-05-23).
  // `trailingSlash: 'always'` + `format: 'directory'` ile Astro tüm canonical
  // URL'leri ve sitemap'i slash'lı tutuyor; iç href'ler script ile normalize edildi.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Eski düz URL'lerden yeni alt-hub'lı yapıya kalıcı yönlendirmeler
  // (3 hub Tip A mimarisine geçiş — 2026-04-26).
  redirects: {
    '/authors/': '/yazarlar/',
    '/beden-yakinlik/menopozda-cilt-degisimleri/': '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/',
    '/beden-yakinlik/vajinal-saglik-menopoz/': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
    '/beden-yakinlik/yakinlik-agrisi-menopoz/': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
    '/beden-yakinlik/intim-saglik/': '/beden-yakinlik/cinsel-saglik/',
    '/beden-yakinlik/intim-saglik/vajinal-saglik-menopoz/': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
    '/beden-yakinlik/intim-saglik/yakinlik-agrisi-menopoz/': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
    '/beden-yakinlik/cinsel-saglik/vajinal-saglik-menopoz/': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
    '/beden-yakinlik/cinsel-saglik/yakinlik-agrisi-menopoz/': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
    '/beden-yakinlik/menopozda-idrar-kacirma-pelvik-taban/': '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban/',
    '/zihin-denge/uyku-bozuklugu-menopoz/': '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
    '/zihin-denge/ruh-hali-degisimleri-menopoz/': '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/',
    '/zihin-denge/stres-yonetimi-menopoz/': '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/',
    '/zihin-denge/bellek-odaklanma-menopoz/': '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/',
    '/bilimsel-pencere/estrogen-biyolojisi-saglik/': '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/',
    '/bilimsel-pencere/nad-plus-hucresel-yaslanma/': '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/',
    // D Vitamini DUPLICATE temizliği — vitaminler/ altındaki sığ versiyon
    // top-level otorite makaleye yönlendirildi (2026-04-27, audit kararı).
    '/zamansiz-yasam/vitaminler/d-vitamini-rehberi/': '/zamansiz-yasam/d-vitamini-rehberi/',
    // Beyin sisi DUPLICATE temizliği — perimenopoz hub'daki Işık Selin makalesi
    // zihin-denge/bilissel-saglik altındaki Rima Erdemir canonical'ına
    // yönlendirildi (2026-04-28). Canonical seçim gerekçesi: kısa SEO-iyi slug,
    // SubmenuHero ile hizalı yeni editöryal pattern, daha derin bilişsel
    // kapsam (bellek türleri / BDNF / bilişsel rezerv), araştırmacı yazar tonu.
    '/hormonal-gecis/perimenopoz/perimenopozda-beyin-sisi-odaklanma-rehberi/':
      '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        if (page.includes('/admin') || page.includes('/_')) return false;
        const scheduledExclusions = scheduledReleasePaths
          .filter((item) => item.releaseDate > todayInTurkeyISO())
          .map((item) => item.path);
        return ![...sitemapExcludedPaths, ...scheduledExclusions].some((excludedPath) =>
          matchesSitemapPath(page, excludedPath)
        );
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 4322,
    host: true,
  },
});
