#!/usr/bin/env node
// Tek seferlik: 17 statik makalenin frontmatter'ından manifest çıkar.
// Sonucu stdout'a basar — src/data/static-articles.ts'e manuel kopyala.

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const files = [
  'src/pages/hormonal-gecis/perimenopoz/perimenopoz-nedir.astro',
  'src/pages/hormonal-gecis/menopoz/menopoz-nedir.astro',
  'src/pages/bilimsel-pencere/estrogen-biyolojisi-saglik.astro',
  'src/pages/bilimsel-pencere/nad-plus-hucresel-yaslanma.astro',
  'src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro',
  'src/pages/zihin-denge/ruh-hali-degisimleri-menopoz.astro',
  'src/pages/zihin-denge/stres-yonetimi-menopoz.astro',
  'src/pages/zihin-denge/bellek-odaklanma-menopoz.astro',
  'src/pages/beden-yakinlik/menopozda-cilt-degisimleri.astro',
  'src/pages/beden-yakinlik/vajinal-saglik-menopoz.astro',
  'src/pages/beden-yakinlik/yakinlik-agrisi-menopoz.astro',
  'src/pages/zamansiz-yasam/hareket-saglik-menopoz.astro',
  'src/pages/zamansiz-yasam/kemik-sagligi-40-sonrasi.astro',
  'src/pages/zamansiz-yasam/beslenme-yaslanma.astro',
  'src/pages/zamansiz-yasam/d-vitamini-rehberi.astro',
  'src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro',
  'src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro',
];

const entries = [];
for (const f of files) {
  const abs = resolve(process.cwd(), f);
  const content = await readFile(abs, 'utf8');
  const title = content.match(/const articleTitle = '([^']+)'/)?.[1];
  const desc = content.match(/const articleDescription = '([^']+)'/)?.[1];
  const path = content.match(/pathname: '([^']+)'/)?.[1];
  const date = content.match(/publishedDate: '([^']+)'/)?.[1];
  const writer = content.match(/writerSlug: '([^']+)'/)?.[1];
  const section = content.match(/articleSection: '([^']+)'/)?.[1];
  const keywordsMatch = content.match(/keywords: \[([^\]]+)\]/);
  const keywords = keywordsMatch
    ? [...keywordsMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1])
    : [];
  if (!title || !path) {
    console.warn(`⚠ ${f} — title veya pathname bulunamadı`);
    continue;
  }
  entries.push({ path, title, desc, date, writer, section, keywords });
}

// Tarihe göre azalan sırala (en yeni en önde — RSS için doğru)
entries.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

console.log(JSON.stringify(entries, null, 2));
console.log(`\n→ ${entries.length} makale`);
