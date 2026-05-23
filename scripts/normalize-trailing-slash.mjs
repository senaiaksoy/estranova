#!/usr/bin/env node
/**
 * Trailing-slash normalization — site içi tüm internal URL literal'larına `/` ekler.
 *
 * Neden: Cloudflare Pages slash'lı versiyonu canonical sayıyor; iç linkler slash'sız
 * üretilirse her tıklama 308 yiyor → GSC "Yönlendirmeli sayfa" hatası (2026-05-23).
 *
 * Kapsam:
 *   - src/ altındaki .astro, .ts, .tsx, .js, .jsx, .mjs, .md, .mdx
 *   - astro.config.mjs (redirect map sağ tarafı)
 *
 * Yakaladığı string literal kalıbı:
 *   - "/segment[/segment...]" — sadece ASCII lowercase + digit + hyphen + slash
 *   - Sonu `/` ile bitmiyor olmalı
 *   - Nokta içermiyor (uzantısı yok — /favicon.ico atlanır)
 *   - Tek karakter `/` ya da hiç olmamalı
 *   - Query/hash içermiyor
 *
 * Hariç tutulan path prefix'leri (asset / external / handled):
 *   /_astro, /assets, /images, /icons, /fonts, /rss.xml, /favicon, /apple-touch,
 *   /robots.txt, /sitemap, /api, /functions, /admin, /404
 *
 * Hariç tutulan dosyalar: scripts/, tests/, vendor, node_modules.
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const EXCLUDED_PATH_PREFIXES = [
  '/_astro',
  '/assets',
  '/images',
  '/icons',
  '/fonts',
  '/rss.xml',
  '/favicon',
  '/apple-touch',
  '/robots',
  '/sitemap',
  '/api/',
  '/functions',
  '/admin',
  '/404',
];

// String literal'ı yakala: `"..."`, `'...'`, `` `...` ``
// Quote içindeki path'i ayrı bir grupta al; sonra path'i normalize et.
const PATH_INSIDE_QUOTE = /(["'`])(\/[a-z0-9][a-z0-9\-/]*[a-z0-9])\1/g;

function shouldSkipPath(path) {
  if (path === '/') return true;
  if (path.endsWith('/')) return true;
  if (path.includes('.')) return true; // uzantılı (favicon.ico, foo.png)
  if (path.includes('//')) return true;
  for (const prefix of EXCLUDED_PATH_PREFIXES) {
    if (path === prefix || path.startsWith(prefix + '/') || path.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}

function normalizeContent(content) {
  let changed = 0;
  const out = content.replace(PATH_INSIDE_QUOTE, (match, quote, path) => {
    if (shouldSkipPath(path)) return match;
    changed += 1;
    return `${quote}${path}/${quote}`;
  });
  return { out, changed };
}

const ALLOWED_EXTS = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.md', '.mdx']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.astro', '.git', 'tests', 'scripts']);

async function walk(dir, acc) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(full, acc);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (ALLOWED_EXTS.has(ext)) acc.push(full);
    }
  }
}

async function main() {
  const root = process.cwd();
  const files = [];
  await walk(path.join(root, 'src'), files);
  files.push(path.join(root, 'astro.config.mjs'));

  let totalChanged = 0;
  let filesTouched = 0;
  const fileSummary = [];

  for (const file of files) {
    const original = await readFile(file, 'utf8');
    const { out, changed } = normalizeContent(original);
    if (changed > 0) {
      await writeFile(file, out);
      filesTouched += 1;
      totalChanged += changed;
      fileSummary.push({ file, changed });
    }
  }

  fileSummary.sort((a, b) => b.changed - a.changed);
  for (const { file, changed } of fileSummary) {
    console.log(`  ${changed.toString().padStart(4)}  ${file}`);
  }
  console.log(`\nNormalize tamam: ${totalChanged} occurrence, ${filesTouched} dosya.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
