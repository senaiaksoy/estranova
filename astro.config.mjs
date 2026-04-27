import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://estranova.com',
  // Eski düz URL'lerden yeni alt-hub'lı yapıya kalıcı yönlendirmeler
  // (3 hub Tip A mimarisine geçiş — 2026-04-26).
  redirects: {
    '/beden-yakinlik/menopozda-cilt-degisimleri': '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri',
    '/beden-yakinlik/vajinal-saglik-menopoz': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz',
    '/beden-yakinlik/yakinlik-agrisi-menopoz': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz',
    '/beden-yakinlik/intim-saglik': '/beden-yakinlik/cinsel-saglik',
    '/beden-yakinlik/intim-saglik/vajinal-saglik-menopoz': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz',
    '/beden-yakinlik/intim-saglik/yakinlik-agrisi-menopoz': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz',
    '/beden-yakinlik/cinsel-saglik/vajinal-saglik-menopoz': '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz',
    '/beden-yakinlik/cinsel-saglik/yakinlik-agrisi-menopoz': '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz',
    '/beden-yakinlik/menopozda-idrar-kacirma-pelvik-taban': '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban',
    '/zihin-denge/uyku-bozuklugu-menopoz': '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz',
    '/zihin-denge/ruh-hali-degisimleri-menopoz': '/zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz',
    '/zihin-denge/stres-yonetimi-menopoz': '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz',
    '/zihin-denge/bellek-odaklanma-menopoz': '/zihin-denge/bilissel-saglik/bellek-odaklanma-menopoz',
    '/bilimsel-pencere/estrogen-biyolojisi-saglik': '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik',
    '/bilimsel-pencere/nad-plus-hucresel-yaslanma': '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma',
    // D Vitamini DUPLICATE temizliği — vitaminler/ altındaki sığ versiyon
    // top-level otorite makaleye yönlendirildi (2026-04-27, audit kararı).
    '/zamansiz-yasam/vitaminler/d-vitamini-rehberi': '/zamansiz-yasam/d-vitamini-rehberi',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/_'),
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
