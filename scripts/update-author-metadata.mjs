#!/usr/bin/env node
// Tek seferlik: 17 makaledeki ArticleAuthorBlock publishedDate + readingMinutes +
// buildArticleSchemas publishedDate alanlarını gerçek değerlerle günceller.
// Word count dev server'dan alındı (2026-04-19); 200 WPM ile dakika hesaplandı.
// Tarihler arşiv hissi için haftada 2-3 ritmiyle 2026-02-17 → 2026-04-17 arasına dağıtıldı.

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());

const updates = [
  { file: 'src/pages/hormonal-gecis/perimenopoz/perimenopoz-nedir.astro', date: '17 Şubat 2026', mins: 3 },
  { file: 'src/pages/hormonal-gecis/menopoz/menopoz-nedir.astro',         date: '21 Şubat 2026', mins: 4 },
  { file: 'src/pages/bilimsel-pencere/estrogen-biyolojisi-saglik.astro',  date: '25 Şubat 2026', mins: 5 },
  { file: 'src/pages/zamansiz-yasam/kemik-sagligi-40-sonrasi.astro',      date: '1 Mart 2026',   mins: 3 },
  { file: 'src/pages/zamansiz-yasam/hareket-saglik-menopoz.astro',        date: '5 Mart 2026',   mins: 4 },
  { file: 'src/pages/zamansiz-yasam/beslenme-yaslanma.astro',             date: '9 Mart 2026',   mins: 4 },
  { file: 'src/pages/zihin-denge/uyku-bozuklugu-menopoz.astro',           date: '12 Mart 2026',  mins: 3 },
  { file: 'src/pages/zihin-denge/ruh-hali-degisimleri-menopoz.astro',     date: '16 Mart 2026',  mins: 5 },
  { file: 'src/pages/zihin-denge/stres-yonetimi-menopoz.astro',           date: '20 Mart 2026',  mins: 4 },
  { file: 'src/pages/zihin-denge/bellek-odaklanma-menopoz.astro',         date: '24 Mart 2026',  mins: 4 },
  { file: 'src/pages/beden-yakinlik/menopozda-cilt-degisimleri.astro',    date: '27 Mart 2026',  mins: 3 },
  { file: 'src/pages/beden-yakinlik/vajinal-saglik-menopoz.astro',        date: '31 Mart 2026',  mins: 4 },
  { file: 'src/pages/beden-yakinlik/yakinlik-agrisi-menopoz.astro',       date: '3 Nisan 2026',  mins: 3 },
  { file: 'src/pages/zamansiz-yasam/d-vitamini-rehberi.astro',            date: '7 Nisan 2026',  mins: 5 },
  { file: 'src/pages/zamansiz-yasam/vitaminler/d-vitamini-rehberi.astro', date: '10 Nisan 2026', mins: 3 },
  { file: 'src/pages/bilimsel-pencere/nad-plus-hucresel-yaslanma.astro',  date: '14 Nisan 2026', mins: 3 },
  { file: 'src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro',   date: '17 Nisan 2026', mins: 3 },
];

const OLD_DATE = '14 Nisan 2026';

let touched = 0;
for (const { file, date, mins } of updates) {
  const absPath = resolve(ROOT, file);
  const original = await readFile(absPath, 'utf8');
  let next = original;

  // 1) Publish date — iki yerde: ArticleAuthorBlock (double quotes) + schema (single quotes)
  //    Tüm eşleşmeleri aynı yeni tarihe çevir.
  next = next.replaceAll(`publishedDate="${OLD_DATE}"`, `publishedDate="${date}"`);
  next = next.replaceAll(`publishedDate: '${OLD_DATE}'`, `publishedDate: '${date}'`);

  // 2) Reading minutes — sadece ArticleAuthorBlock'ta (schema'da yok). {6} veya {7}.
  next = next.replace(/readingMinutes=\{\d+\}/, `readingMinutes={${mins}}`);

  if (next !== original) {
    await writeFile(absPath, next, 'utf8');
    touched += 1;
    console.log(`✓ ${file} → ${date} · ${mins} dk`);
  } else {
    console.warn(`… ${file} değişmedi (pattern bulunamadı?)`);
  }
}

console.log(`\n${touched}/${updates.length} dosya güncellendi.`);
