#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const APPROVALS_FILE = path.join(ROOT, 'src/data/article-approvals.ts');
const STATIC_ARTICLES_FILE = path.join(ROOT, 'src/data/static-articles.ts');
const SUB_HUBS_FILE = path.join(ROOT, 'src/data/sub-hubs.ts');
const WRITERS_FILE = path.join(ROOT, 'src/data/writers.ts');
const strict = process.argv.includes('--strict');
const APPROVAL_OPTIONAL_PREFIXES = ['/editorun-kosesi/'];

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
  const shorthand = fm.match(new RegExp(`\\b${propName}\\s*,`));
  if (!ref && !shorthand) return null;
  const varName = ref?.[1] ?? propName;
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
    articleType: resolveStringOrVar(fm, 'articleType'),
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
    results.push({
      pathname: fm.pathname,
      writerSlug: fm.writerSlug,
      articleType: fm.articleType,
      source,
      file: path.relative(ROOT, full),
    });
  }
  return results;
}

async function loadWriterTracks() {
  const source = await fs.readFile(WRITERS_FILE, 'utf8');
  const starts = [...source.matchAll(/^\s{4}slug:\s*'([^']+)',/gm)];
  const writersArrayEnd = source.indexOf('\n];', starts[0]?.index ?? 0);
  const tracks = new Map();
  for (let index = 0; index < starts.length; index += 1) {
    const current = starts[index];
    const next = starts[index + 1];
    const block = source.slice(current.index, next?.index ?? writersArrayEnd);
    const track = block.includes('isInstitutionalByline: true')
      ? 'institutional'
      : block.includes("articleAuthority: 'non-clinical'")
        ? 'non-clinical'
        : block.includes("category: 'scientific'")
        ? 'scientific'
        : 'non-clinical';
    tracks.set(current[1], track);
  }
  return tracks;
}

function findArticleAuthorityIssues(articlePages, writerTracks) {
  const allowed = {
    scientific: new Set(['clinical-guide', 'expert-essay']),
    'non-clinical': new Set(['experience-essay', 'editorial-guide']),
    institutional: new Set(['editorial-guide']),
  };
  const issues = [];

  for (const page of articlePages) {
    const track = writerTracks.get(page.writerSlug);
    if (!track) {
      issues.push(`${page.pathname} -> yazar yetki hattı bulunamadı (${page.writerSlug})`);
      continue;
    }
    if (!page.articleType) {
      issues.push(`${page.pathname} -> articleType açıkça belirtilmemiş`);
      continue;
    }
    if (!allowed[track].has(page.articleType)) {
      issues.push(`${page.pathname} -> ${track} yazar ${page.articleType} kullanamaz`);
    }

    const bylineType = page.source.match(/<ArticleAuthorBlock[\s\S]*?articleType="([^"]+)"[\s\S]*?\/>/)?.[1];
    if (bylineType !== page.articleType) {
      issues.push(`${page.pathname} -> yazar kartı türü schema türüyle eşleşmiyor`);
    }

    if (page.articleType === 'experience-essay') {
      if (!page.source.includes('ArticleProsePanel mode="experience"')) {
        issues.push(`${page.pathname} -> deneyim gövdesinde mode="experience" yok`);
      }
      if (page.source.includes('<ArticleEditorNote')) {
        issues.push(`${page.pathname} -> deneyim yazısında ArticleEditorNote yerine MedicalContextNote kullanılmalı`);
      }
      if (page.source.includes('title="Kısa Klinik Yanıt"')) {
        issues.push(`${page.pathname} -> deneyim yazısı klinik özet etiketi taşıyor`);
      }
    }
  }
  return issues;
}

async function loadApprovedPathnames() {
  const source = await fs.readFile(APPROVALS_FILE, 'utf8');
  return new Set([...source.matchAll(/pathname:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]));
}

async function loadStaticArticlePaths() {
  const source = await fs.readFile(STATIC_ARTICLES_FILE, 'utf8');
  return [...source.matchAll(/path:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]);
}

async function loadStaticArticleEntries() {
  const source = await fs.readFile(STATIC_ARTICLES_FILE, 'utf8');
  return [...source.matchAll(/path:\s*['"`]([^'"`]+)['"`][\s\S]*?sectionPath:\s*['"`]([^'"`]+)['"`]/g)].map((m) => ({
    path: m[1],
    sectionPath: m[2],
  }));
}

async function loadSubHubCoverage() {
  const source = await fs.readFile(SUB_HUBS_FILE, 'utf8');
  const hubs = new Map();
  const blockRegex = /\{\s*path:\s*['"`]([^'"`]+)['"`]([\s\S]*?)\n\s*\},/g;
  let match;
  while ((match = blockRegex.exec(source))) {
    const [, hubPath, body] = match;
    const articlePathsBlock = body.match(/articlePaths:\s*\[([\s\S]*?)\]/);
    hubs.set(hubPath, {
      hasManualArticlePaths: Boolean(articlePathsBlock),
      articlePaths: articlePathsBlock
        ? [...articlePathsBlock[1].matchAll(/['"`]([^'"`]+)['"`]/g)].map((m) => m[1])
        : [],
    });
  }
  return hubs;
}

async function loadManualTocPageCoverage() {
  const coverage = new Map();
  const topLevelDirs = await fs.readdir(PAGES_DIR, { withFileTypes: true });
  for (const entry of topLevelDirs) {
    if (!entry.isDirectory()) continue;
    const sectionPath = `/${entry.name}`;
    const indexFile = path.join(PAGES_DIR, entry.name, 'index.astro');
    try {
      const source = await fs.readFile(indexFile, 'utf8');
      if (!source.includes('const tocArticles')) continue;
      coverage.set(sectionPath, {
        source,
        isStaticArticlesDriven:
          source.includes('staticArticles') &&
          (source.includes(`article.sectionPath === '${sectionPath}'`) ||
            source.includes(`article.sectionPath === "${sectionPath}"`) ||
            source.includes('article.sectionPath === __hubPath')),
      });
    } catch {
      // A top-level route without an index page is not a submenu surface.
    }
  }
  return coverage;
}

async function findMenuCoverageIssues() {
  const entries = await loadStaticArticleEntries();
  const subHubs = await loadSubHubCoverage();
  const manualTocPages = await loadManualTocPageCoverage();
  const issues = [];

  for (const article of entries) {
    const subHub = subHubs.get(article.sectionPath);
    if (subHub?.hasManualArticlePaths && !subHub.articlePaths.includes(article.path)) {
      issues.push(`${article.path} -> ${article.sectionPath} alt menusu articlePaths listesinde yok`);
      continue;
    }

    const articlePrefix = `${article.sectionPath.replace(/\/+$/, '')}/`;
    if (subHub && !subHub.hasManualArticlePaths && !article.path.startsWith(articlePrefix)) {
      issues.push(`${article.path} -> ${article.sectionPath} otomatik alt menu kapsami disinda`);
      continue;
    }

    const manualToc = manualTocPages.get(article.sectionPath);
    if (manualToc && !manualToc.isStaticArticlesDriven && !manualToc.source.includes(article.path)) {
      issues.push(`${article.path} -> ${article.sectionPath} kategori okuma listesinde yok`);
    }
  }

  return issues;
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
  const menuCoverageIssues = await findMenuCoverageIssues();
  const writerTracks = await loadWriterTracks();
  const articleAuthorityIssues = findArticleAuthorityIssues(articlePages, writerTracks);

  const publishedWithoutApproval = articlePages
    .filter(
      (page) =>
        !approved.has(page.pathname) &&
        !APPROVAL_OPTIONAL_PREFIXES.some((prefix) => page.pathname.startsWith(prefix)),
    )
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
  printSection('Alt menu/listede gorunmeyen statik makaleler', menuCoverageIssues);
  printSection('Yazar yetkisi / makale turu uyumsuzluklari', articleAuthorityIssues);

  const hasIssues =
    publishedWithoutApproval.length > 0 ||
    staticWithoutApproval.length > 0 ||
    menuCoverageIssues.length > 0 ||
    articleAuthorityIssues.length > 0;
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
