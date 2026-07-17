#!/usr/bin/env node

// IndexNow submission — notifies Bing/Yandex/Seznam (and any other IndexNow
// participant) that URLs changed, without waiting for organic re-crawl.
// GEO-ANALYSIS.md §11 "Hızlı Kazanımlar" — Bing Copilot görünürlüğü kaldıracı.
//
// Prereq: the key file `public/<KEY>.txt` must already be live at
// https://estranova.com/<KEY>.txt (i.e. this repo must be deployed) before
// IndexNow will accept submissions — it verifies key ownership by fetching it.
//
// Usage:
//   npm run seo:indexnow            # submit every URL in dist/sitemap-*.xml
//   npm run seo:indexnow -- <url>   # submit a single URL (e.g. after publishing one article)

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');
const SITE_URL = 'https://estranova.com';
const INDEXNOW_KEY = '9c6a06a641c28cd9b2144466bbc130d5';
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function urlsFromSitemaps() {
  let indexXml;
  try {
    indexXml = await fs.readFile(path.join(DIST_DIR, 'sitemap-index.xml'), 'utf-8');
  } catch {
    throw new Error('dist/sitemap-index.xml bulunamadı — önce `npm run build` çalıştırın.');
  }
  const childFiles = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .map((loc) => path.basename(new URL(loc).pathname));

  const urls = [];
  for (const file of childFiles) {
    const xml = await fs.readFile(path.join(DIST_DIR, file), 'utf-8');
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URL gönderildi.`);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error(body);
    process.exitCode = 1;
  }
}

const argUrl = process.argv[2];
const urls = argUrl ? [argUrl] : await urlsFromSitemaps();

if (urls.length === 0) {
  console.error('Gönderilecek URL bulunamadı.');
  process.exit(1);
}

await submit(urls);
