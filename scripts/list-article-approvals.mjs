#!/usr/bin/env node
/**
 * Estranova makale yazar onayı durum raporu.
 *
 * Tüm src/pages/ altındaki Astro makalelerini tarar ve
 * src/data/article-approvals.ts'deki onaylı listesi ile karşılaştırır.
 * Yazar bazında gruplanmış tablo basar.
 *
 * Kullanım:
 *   npm run articles:status
 *
 * Çıktı: terminal tablosu — onaylı/onaysız sayım + yazar bazında detay.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const APPROVALS_FILE = path.join(ROOT, 'src/data/article-approvals.ts');
const WRITERS_FILE = path.join(ROOT, 'src/data/writers.ts');
const DIRECT_EDITOR_APPROVAL_WRITERS = new Set(['berna-aksoy', 'alara-baykent', 'senai-aksoy']);

const EXCLUDED_BASENAMES = new Set([
  'index.astro',
  'authors.astro',
  'editoryal-politika.astro',
  'hakkimizda.astro',
  'iletisim.astro',
  'kullanim-kosullari.astro',
  'kvkk.astro',
  'library.astro',
  'manifesto.astro',
  'symptoms.astro',
  'tibbi-sorumluluk.astro',
  'yayin-kurulu.astro',
  'robots.txt.ts',
  'rss.xml.ts',
  '404.astro',
  'sayfa-bulunamadi.astro',
  'arama.astro',
  'aboneol.astro',
  'abone-ol.astro',
  'giris.astro',
  'hesabim.astro',
  'mektup.astro',
  'sonra-oku.astro',
]);

// ANSI renk kodları
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  burgundy: '\x1b[38;5;88m',
  gold: '\x1b[38;5;178m',
  gray: '\x1b[90m',
};

function normalizeSource(source) {
  return source.replace(/^﻿/, '').replace(/\r\n/g, '\n');
}

function resolveStringOrVar(fm, propName) {
  const direct = fm.match(new RegExp(`${propName}:\\s*['"\`]([^'"\`]+)['"\`]`));
  if (direct) return direct[1];
  const ref = fm.match(new RegExp(`${propName}:\\s*([a-zA-Z_$][\\w$]*)`));
  if (!ref) return null;
  const varName = ref[1];
  const varDef = fm.match(new RegExp(`const\\s+${varName}\\s*=\\s*['"\`]([^'"\`]+)['"\`]`));
  return varDef ? varDef[1] : null;
}

function extractField(fm, regex) {
  const m = fm.match(regex);
  return m ? m[1] : null;
}

function parseFrontmatter(astroSource) {
  const src = normalizeSource(astroSource);
  const fmMatch = src.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  return {
    title: extractField(fm, /(?:const\s+)?articleTitle\s*=\s*['"`]([^'"`]+)['"`]/),
    writerSlug: resolveStringOrVar(fm, 'writerSlug'),
    pathname: resolveStringOrVar(fm, 'pathname'),
    publishedDate: resolveStringOrVar(fm, 'publishedDate'),
  };
}

async function findAstroArticles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await findAstroArticles(full, results);
    } else if (e.name.endsWith('.astro') && !EXCLUDED_BASENAMES.has(e.name)) {
      // Dynamic route'ları atla ([slug].astro)
      if (e.name.includes('[') || e.name.includes(']')) continue;
      results.push(full);
    }
  }
  return results;
}

async function loadApprovals() {
  const src = await fs.readFile(APPROVALS_FILE, 'utf-8');
  // approvedArticles array'inden pathname + approvedAt + writerSlug + note çek
  const arrayMatch = src.match(/export const approvedArticles[^=]*=\s*\[([\s\S]*?)\];/);
  if (!arrayMatch) return new Map();
  const body = arrayMatch[1];
  const approvals = new Map();
  // Her objeyi tek tek extract et
  const objectRegex = /\{[\s\S]*?pathname:\s*['"`]([^'"`]+)['"`][\s\S]*?writerSlug:\s*['"`]([^'"`]+)['"`][\s\S]*?approvedAt:\s*['"`]([^'"`]+)['"`][\s\S]*?note:\s*['"`]([^'"`]+)['"`][\s\S]*?\}/g;
  let m;
  while ((m = objectRegex.exec(body)) !== null) {
    approvals.set(m[1], { writerSlug: m[2], approvedAt: m[3], note: m[4] });
  }
  return approvals;
}

async function loadWriters() {
  const src = await fs.readFile(WRITERS_FILE, 'utf-8');
  const writers = new Map();
  // slug + displayName eşleşmesi
  const writerRegex = /slug:\s*['"`]([^'"`]+)['"`][\s\S]*?displayName:\s*['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = writerRegex.exec(src)) !== null) {
    writers.set(m[1], m[2]);
  }
  return writers;
}

async function main() {
  const files = await findAstroArticles(PAGES_DIR);
  const approvals = await loadApprovals();
  const writers = await loadWriters();

  // Her makaleyi parse et
  const articles = [];
  for (const file of files) {
    const src = await fs.readFile(file, 'utf-8');
    const fm = parseFrontmatter(src);
    if (!fm || !fm.pathname || !fm.writerSlug) continue; // hub/info sayfaları
    articles.push({
      pathname: fm.pathname,
      title: fm.title || '(başlık yok)',
      writerSlug: fm.writerSlug,
      writerName: writers.get(fm.writerSlug) || fm.writerSlug,
      publishedDate: fm.publishedDate || '',
      approval: approvals.get(fm.pathname) || null,
      file: path.relative(ROOT, file),
    });
  }

  // Yazar bazında grupla
  const byWriter = new Map();
  for (const a of articles) {
    if (!byWriter.has(a.writerSlug)) {
      byWriter.set(a.writerSlug, { writerName: a.writerName, articles: [] });
    }
    byWriter.get(a.writerSlug).articles.push(a);
  }

  const total = articles.length;
  const approved = articles.filter((a) => a.approval).length;
  const pending = total - approved;
  const directEditorPending = articles.filter(
    (a) => !a.approval && DIRECT_EDITOR_APPROVAL_WRITERS.has(a.writerSlug),
  ).length;
  const authorFormPending = pending - directEditorPending;
  const percent = total > 0 ? Math.round((approved / total) * 100) : 0;

  // === RAPOR ===
  console.log('');
  console.log(`${C.bold}${C.burgundy}═══ Estranova Makale Yazar Onay Durumu ═══${C.reset}`);
  console.log('');
  console.log(`  Toplam makale     : ${C.bold}${total}${C.reset}`);
  console.log(`  ${C.green}Onaylı            : ${C.bold}${approved}${C.reset} ${C.green}(%${percent})${C.reset}`);
  console.log(`  ${C.yellow}Onay bekleniyor   : ${C.bold}${pending}${C.reset} ${C.yellow}(%${100 - percent})${C.reset}`);
  console.log(`  ${C.yellow}Form bekleyen     : ${C.bold}${authorFormPending}${C.reset}`);
  console.log(`  ${C.gold}Editör onayı bek. : ${C.bold}${directEditorPending}${C.reset} ${C.dim}(Berna/Alara/Senai istisnası)${C.reset}`);
  console.log('');

  // Yazar bazında detay (alfabetik)
  const sortedWriters = [...byWriter.entries()].sort((a, b) =>
    a[1].writerName.localeCompare(b[1].writerName, 'tr'),
  );

  for (const [slug, group] of sortedWriters) {
    const ws = group.articles;
    const wApproved = ws.filter((a) => a.approval).length;
    const directEditorMode = DIRECT_EDITOR_APPROVAL_WRITERS.has(slug);
    console.log(
      `${C.bold}${C.burgundy}▼ ${group.writerName}${C.reset} ${C.dim}(${slug})${C.reset}  ` +
        `${C.green}${wApproved}${C.reset}/${ws.length} onaylı` +
        (directEditorMode ? ` ${C.gold}(KC doğrudan onay kapsamı)${C.reset}` : ''),
    );
    for (const a of ws.sort((x, y) => x.pathname.localeCompare(y.pathname))) {
      if (a.approval) {
        console.log(
          `  ${C.green}✓${C.reset} ${C.gold}${a.pathname}${C.reset}  ${C.dim}(onay: ${a.approval.approvedAt})${C.reset}`,
        );
      } else {
        const pendingLabel = directEditorMode ? 'KC editör onayı bekliyor' : 'yazar formu bekliyor';
        console.log(`  ${C.yellow}○${C.reset} ${a.pathname}  ${C.dim}(${pendingLabel})${C.reset}`);
      }
    }
    console.log('');
  }

  // Yetim makaleler (writerSlug yok ya da writers.ts'te bulunamadı)
  const orphaned = articles.filter((a) => !writers.has(a.writerSlug));
  if (orphaned.length > 0) {
    console.log(`${C.yellow}⚠ writers.ts'te bulunamayan ${orphaned.length} makale:${C.reset}`);
    for (const a of orphaned) {
      console.log(`  ? ${a.pathname}  (${a.writerSlug})`);
    }
    console.log('');
  }

  console.log(`${C.dim}Onay eklemek için: src/data/article-approvals.ts → approvedArticles array'ine yeni objeyi ekle.${C.reset}`);
  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
