#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const APPROVALS_FILE = path.join(ROOT, 'src/data/article-approvals.ts');
const STATIC_ARTICLES_FILE = path.join(ROOT, 'src/data/static-articles.ts');
const strict = process.argv.includes('--strict');

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

function parseFrontmatter(astroSource) {
  const src = normalizeSource(astroSource);
  const fmMatch = src.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  return {
    pathname: resolveStringOrVar(fm, 'pathname'),
    writerSlug: resolveStringOrVar(fm, 'writerSlug'),
  };
}

async function findStaticArticlePages(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await findStaticArticlePages(full, results);
      continue;
    }
    if (!entry.name.endsWith('.astro') || EXCLUDED_BASENAMES.has(entry.name)) continue;
    if (entry.name.includes('[') || entry.name.includes(']')) continue;
    const source = await fs.readFile(full, 'utf8');
    if (!source.includes('buildArticleSchemas(')) continue;
    const fm = parseFrontmatter(source);
    if (!fm?.pathname || !fm.writerSlug) continue;
    results.push({ pathname: fm.pathname, file: path.relative(ROOT, full) });
  }
  return results;
}

async function loadApprovedPathnames() {
  const source = await fs.readFile(APPROVALS_FILE, 'utf8');
  return new Set([...source.matchAll(/pathname:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]));
}

async function loadStaticArticlePaths() {
  const source = await fs.readFile(STATIC_ARTICLES_FILE, 'utf8');
  return [...source.matchAll(/path:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]);
}

function printSection(title, items) {
  if (!items.length) return;
  console.log(`\n${title}`);
  for (const item of items) {
    console.log(`- ${item}`);
  }
}

async function main() {
  const articlePages = await findStaticArticlePages(PAGES_DIR);
  const approved = await loadApprovedPathnames();
  const staticPaths = await loadStaticArticlePaths();

  const publishedWithoutApproval = articlePages
    .filter((page) => !approved.has(page.pathname))
    .map((page) => `${page.pathname} (${page.file})`);
  const staticWithoutApproval = staticPaths.filter((pathname) => !approved.has(pathname));
  const approvedMissingFromStatic = [...approved].filter((pathname) => !staticPaths.includes(pathname));

  console.log('Estranova yayin butunlugu denetimi');
  console.log(`- buildArticleSchemas kullanan statik makale sayfasi: ${articlePages.length}`);
  console.log(`- approval kaydi: ${approved.size}`);
  console.log(`- staticArticles manifest girdisi: ${staticPaths.length}`);

  printSection('Onaysiz ama yayimli statik makale sayfalari', publishedWithoutApproval);
  printSection('RSS manifestinde olup approval kaydi olmayan yollar', staticWithoutApproval);
  printSection('Approval kaydi olup RSS manifestinde bulunmayan yollar', approvedMissingFromStatic);

  const hasIssues = publishedWithoutApproval.length > 0 || staticWithoutApproval.length > 0;
  if (!hasIssues) {
    console.log('\nYayin butunlugu temiz.');
    return;
  }

  if (strict) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
