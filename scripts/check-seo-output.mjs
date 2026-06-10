#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import astroConfig from '../astro.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');
const SITE_URL = 'https://estranova.com';
const PREFERRED_SOURCE_URL = 'https://google.com/preferences/source?q=estranova.com';

let hasError = false;

function fail(message) {
  hasError = true;
  console.error(`ERROR: ${message}`);
}

function normalizeAbsoluteUrl(value) {
  const url = new URL(value, SITE_URL);
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
  }
  url.hash = '';
  return url.toString();
}

function normalizePathname(value) {
  const pathname = value.startsWith('http') ? new URL(value).pathname : value;
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/u, '');
}

function pathnameToFile(pathname) {
  const segments = normalizePathname(pathname).split('/').filter(Boolean);
  return path.join(DIST_DIR, ...segments, 'index.html');
}

function fileToPathname(file) {
  const relative = path.relative(DIST_DIR, file).replace(/\\/gu, '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/u, '')}`;
}

async function collectHtmlFiles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectHtmlFiles(full, results);
      continue;
    }
    if (entry.isFile() && entry.name === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

function getTagAttribute(tag, name) {
  const attr = tag.match(new RegExp(`\\s${name}\\s*=\\s*["']([^"']+)["']`, 'iu'));
  return attr ? attr[1] : null;
}

function getCanonical(html) {
  const links = html.match(/<link\b[^>]*>/giu) ?? [];
  for (const link of links) {
    const rel = getTagAttribute(link, 'rel');
    if (rel?.split(/\s+/u).includes('canonical')) {
      return getTagAttribute(link, 'href');
    }
  }
  return null;
}

function getMetaContent(html, name) {
  const metas = html.match(/<meta\b[^>]*>/giu) ?? [];
  for (const meta of metas) {
    if (getTagAttribute(meta, 'name')?.toLowerCase() === name) {
      return getTagAttribute(meta, 'content');
    }
  }
  return null;
}

function getRefreshTarget(html) {
  const metas = html.match(/<meta\b[^>]*>/giu) ?? [];
  for (const meta of metas) {
    if (getTagAttribute(meta, 'http-equiv')?.toLowerCase() !== 'refresh') continue;
    const content = getTagAttribute(meta, 'content');
    return content?.match(/url=([^;]+)/iu)?.[1] ?? null;
  }
  return null;
}

function getMetaPropertyContent(html, propertyName) {
  const metas = html.match(/<meta\b[^>]*>/giu) ?? [];
  for (const meta of metas) {
    if (getTagAttribute(meta, 'property') === propertyName || getTagAttribute(meta, 'name') === propertyName) {
      return getTagAttribute(meta, 'content');
    }
  }
  return null;
}

function parseJsonLdBlocks(html) {
  const blocks = [];
  const scriptRe = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/giu;
  let match;
  while ((match = scriptRe.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(match[1]));
    } catch (error) {
      fail(`JSON-LD parse edilemedi: ${error.message}`);
    }
  }
  return blocks;
}

function getSchemaTypes(schema) {
  const type = schema?.['@type'];
  return Array.isArray(type) ? type : [type].filter(Boolean);
}

function hasSchemaType(html, schemaType) {
  return parseJsonLdBlocks(html).some((schema) => getSchemaTypes(schema).includes(schemaType));
}

function assertPreferredSourceCta(pathname, html) {
  if (!hasSchemaType(html, 'Article')) return;

  const preferredSourceLinkCount = [...html.matchAll(/https:\/\/google\.com\/preferences\/source\?q=estranova\.com/gu)]
    .length;
  if (preferredSourceLinkCount < 2) {
    fail(`${pathname} Google kaynak tercihi linkini makale + footer yuzeylerinde icermiyor`);
  }
  if (!html.includes('data-preferred-source-surface="article"')) {
    fail(`${pathname} makale sonu Google kaynak tercihi yuzeyini icermiyor`);
  }
  if (!html.includes('data-preferred-source-surface="footer"')) {
    fail(`${pathname} footer Google kaynak tercihi linkini icermiyor`);
  }
  if (!html.includes(PREFERRED_SOURCE_URL)) {
    fail(`${pathname} Google kaynak tercihi URL'i beklenen hedefle uyusmuyor`);
  }
}

async function assertConfiguredRedirects() {
  const redirects = astroConfig.redirects ?? {};
  for (const [source, target] of Object.entries(redirects)) {
    const file = pathnameToFile(source);
    let html;
    try {
      html = await fs.readFile(file, 'utf8');
    } catch {
      fail(`Redirect kaynagi dist icinde yok: ${source}`);
      continue;
    }

    const canonical = getCanonical(html);
    const refreshTarget = getRefreshTarget(html);
    const expectedCanonical = normalizeAbsoluteUrl(target);

    if (!refreshTarget || normalizePathname(refreshTarget) !== normalizePathname(target)) {
      fail(`Redirect hedefi uyusmuyor: ${source} -> ${refreshTarget ?? 'yok'} (beklenen ${target})`);
    }
    if (!canonical || normalizeAbsoluteUrl(canonical) !== expectedCanonical) {
      fail(`Redirect canonical uyusmuyor: ${source} (${canonical ?? 'yok'} yerine ${expectedCanonical})`);
    }
    if (!getMetaContent(html, 'robots')?.toLowerCase().includes('noindex')) {
      fail(`Redirect sayfasi noindex degil: ${source}`);
    }

    try {
      await fs.access(pathnameToFile(target));
    } catch {
      fail(`Redirect hedefi dist icinde yok: ${target}`);
    }
  }
}

function assertJsonLdUrls(pathname, html, canonical) {
  for (const schema of parseJsonLdBlocks(html)) {
    const types = getSchemaTypes(schema);
    if (types.includes('MedicalWebPage') && schema.url && normalizeAbsoluteUrl(schema.url) !== canonical) {
      fail(`${pathname} MedicalWebPage.url canonical ile uyusmuyor`);
    }
    if (types.includes('Article') && schema.mainEntityOfPage && normalizeAbsoluteUrl(schema.mainEntityOfPage) !== canonical) {
      fail(`${pathname} Article.mainEntityOfPage canonical ile uyusmuyor`);
    }
    if (types.includes('BreadcrumbList')) {
      const lastItem = schema.itemListElement?.at?.(-1)?.item;
      if (lastItem && normalizeAbsoluteUrl(lastItem) !== canonical) {
        fail(`${pathname} BreadcrumbList son item canonical ile uyusmuyor`);
      }
    }
  }
}

async function main() {
  try {
    await fs.access(DIST_DIR);
  } catch {
    fail('dist klasoru yok. Once `npm run build` calistirin.');
    process.exit(1);
  }

  await assertConfiguredRedirects();

  const canonicalOwners = new Map();
  const files = await collectHtmlFiles(DIST_DIR);

  for (const file of files) {
    const pathname = fileToPathname(file);
    const html = await fs.readFile(file, 'utf8');
    const isRedirect = Boolean(getRefreshTarget(html));
    if (isRedirect) continue;

    const canonicalValue = getCanonical(html);
    if (!canonicalValue) {
      fail(`${pathname} canonical etiketi icermiyor`);
      continue;
    }

    const canonical = normalizeAbsoluteUrl(canonicalValue);
    const expectedCanonical = normalizeAbsoluteUrl(pathname);
    if (canonical !== expectedCanonical) {
      fail(`${pathname} canonical beklenen yol ile uyusmuyor (${canonical} yerine ${expectedCanonical})`);
    }

    // trailingSlash: 'always' — slash'siz canonical Cloudflare 308'ine carpar
    // ve GSC "Yonlendirmeli sayfa" hatasi uretir; ham deger slash'li olmali.
    if (!new URL(canonicalValue, SITE_URL).pathname.endsWith('/')) {
      fail(`${pathname} canonical sondaki slash'i icermiyor (${canonicalValue})`);
    }

    for (const property of ['og:url', 'twitter:url']) {
      const value = getMetaPropertyContent(html, property);
      if (value && normalizeAbsoluteUrl(value) !== canonical) {
        fail(`${pathname} ${property} canonical ile uyusmuyor`);
      }
      if (value && !new URL(value, SITE_URL).pathname.endsWith('/')) {
        fail(`${pathname} ${property} sondaki slash'i icermiyor (${value})`);
      }
    }

    assertJsonLdUrls(pathname, html, canonical);
    assertPreferredSourceCta(pathname, html);

    const owners = canonicalOwners.get(canonical) ?? [];
    owners.push(pathname);
    canonicalOwners.set(canonical, owners);
  }

  for (const [canonical, owners] of canonicalOwners.entries()) {
    if (owners.length > 1) {
      fail(`Canonical birden fazla sayfada kullaniliyor: ${canonical} (${owners.join(', ')})`);
    }
  }

  if (hasError) process.exit(1);
  console.log(`SEO output audit passed for ${files.length} built page(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
