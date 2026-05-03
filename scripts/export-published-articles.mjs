#!/usr/bin/env node
/**
 * Estranova yayınlanmış makaleleri arşivleme script'i.
 *
 * src/pages/ altındaki Astro page'lerinden metadata + dist/ altındaki HTML'den
 * gövde markdown'ına dönüştürür. Hem repo'ya (`arsiv/yayinlanmis-makaleler/`)
 * hem obsidian vault'a aynı anda yazar.
 *
 * Kullanım:
 *   npm run articles:export
 *
 * Çıktı:
 *   1. icerik/yayinlanmis-makaleler/YYYY-MM/<YYYY-MM-DD>__<slug>.md  (repo)
 *   2. <VAULT_DIR>/articles/YYYY-MM/<YYYY-MM-DD>__<slug>.md           (vault)
 *
 * Vault yolu env ile özelleştirilebilir:
 *   ESTRANOVA_VAULT_ARTICLES_DIR=/path/to/vault/articles npm run articles:export
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const DIST_DIR = path.join(ROOT, 'dist');
const ARSIV_DIR = path.join(ROOT, 'icerik/yayinlanmis-makaleler');
const VAULT_DIR =
  process.env.ESTRANOVA_VAULT_ARTICLES_DIR ||
  'D:/A-klasör/obsidian-vaults/draksoyivf-knowledge/wiki/sites/estranova/articles';

// Hariç tutulacak özel sayfalar (hub/index/info)
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
]);

const TR_MONTHS = {
  ocak: '01', şubat: '02', mart: '03', nisan: '04',
  mayıs: '05', haziran: '06', temmuz: '07', ağustos: '08',
  eylül: '09', ekim: '10', kasım: '11', aralık: '12',
};

const EVIDENCE_LABELS = {
  1: 'zayıf kanıt',
  2: 'sınırlı kanıt',
  3: 'orta kanıt',
  4: 'iyi kanıt',
  5: 'güçlü kanıt',
};

function parseTrDate(str) {
  if (!str) return null;
  const m = str.toLowerCase().match(/(\d+)\s+(\S+)\s+(\d{4})/);
  if (!m) return null;
  const day = m[1].padStart(2, '0');
  const month = TR_MONTHS[m[2]];
  if (!month) return null;
  return `${m[3]}-${month}-${day}`;
}

async function findAstroArticles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await findAstroArticles(full, results);
    } else if (e.name.endsWith('.astro') && !EXCLUDED_BASENAMES.has(e.name)) {
      results.push(full);
    }
  }
  return results;
}

function extractFrontmatterField(fm, regex) {
  const m = fm.match(regex);
  return m ? m[1] : null;
}

function extractKeywords(fm) {
  const m = fm.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  return m[1]
    .split(',')
    .map((s) => s.trim().replace(/^['"`]|['"`]$/g, ''))
    .filter(Boolean);
}

function resolveStringOrVar(fm, propName) {
  // Try direct string literal first: `propName: '...'`
  const direct = fm.match(new RegExp(`${propName}:\\s*['"\`]([^'"\`]+)['"\`]`));
  if (direct) return direct[1];
  // Try variable reference: `propName: someVar`, then resolve `const someVar = '...'`
  const ref = fm.match(new RegExp(`${propName}:\\s*([a-zA-Z_$][\\w$]*)`));
  if (!ref) return null;
  const varName = ref[1];
  const varDef = fm.match(new RegExp(`const\\s+${varName}\\s*=\\s*['"\`]([^'"\`]+)['"\`]`));
  return varDef ? varDef[1] : null;
}

function normalizeSource(source) {
  // BOM strip + CRLF -> LF
  return source.replace(/^﻿/, '').replace(/\r\n/g, '\n');
}

function parseFrontmatter(astroSource) {
  const src = normalizeSource(astroSource);
  const fmMatch = src.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];

  return {
    title: extractFrontmatterField(fm, /(?:const\s+)?articleTitle\s*=\s*['"`]([^'"`]+)['"`]/),
    description: extractFrontmatterField(fm, /(?:const\s+)?articleDescription\s*=\s*\n?\s*['"`]([\s\S]*?)['"`];?\s*\n/),
    writerSlug: resolveStringOrVar(fm, 'writerSlug'),
    publishedDate: resolveStringOrVar(fm, 'publishedDate'),
    pathname: resolveStringOrVar(fm, 'pathname'),
    articleSection: resolveStringOrVar(fm, 'articleSection'),
    sectionPath: resolveStringOrVar(fm, 'sectionPath'),
    keywords: extractKeywords(fm),
  };
}

function extractArticleBodyFromHtml(html) {
  // Estranova makalesinde 4 ana bölüm var; sırasıyla extract edilir:
  //   1. Kısa Özet (gold gradient kart) — "from-white to-cream-soft" class
  //   2. ArticleProsePanel ana gövde — "prose-estranova" class (RedFlagBox dahil)
  //   3. Bilimsel Editör Notu (gold border-left) — "border-l-gold" class
  //   4. Disclaimer (dashed border) — "border-dashed" class
  // Bulunanlar sıraya göre birleştirilir; eksik olanlar atlanır.

  const parts = [];

  // 1. Kısa Özet
  const ozetRe = /<section\s+class="[^"]*from-white\s+to-cream-soft[^"]*"[^>]*>([\s\S]*?)<\/section>/;
  const ozetMatch = html.match(ozetRe);
  if (ozetMatch) parts.push(ozetMatch[0]);

  // 2. ArticleProsePanel render edildiğinde "prose prose-lg prose-estranova" sınıflı bir div oluşur.
  const proseRe = /<div\s+class="[^"]*prose-estranova[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/section>/;
  const proseMatch = html.match(proseRe);
  if (proseMatch) parts.push(proseMatch[0]);

  // 3. Bilimsel Editör Notu (border-l-gold gold accent kart)
  const benRe = /<section\s+class="[^"]*border-l-gold[^"]*"[^>]*>([\s\S]*?)<\/section>/;
  const benMatch = html.match(benRe);
  if (benMatch) parts.push(benMatch[0]);

  // 4. Disclaimer (border-dashed kart)
  const dscRe = /<section\s+class="[^"]*border-dashed[^"]*"[^>]*>([\s\S]*?)<\/section>/;
  const dscMatch = html.match(dscRe);
  if (dscMatch) parts.push(dscMatch[0]);

  if (parts.length > 0) return parts.join('\n\n');

  // Fallback: <main id="main-content"> içi (gürültülü ama içerik yine yakalanır)
  const mainRe = /<main\s+id="main-content"[^>]*>([\s\S]*?)<\/main>/;
  const m2 = html.match(mainRe);
  return m2 ? m2[1] : '';
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&hellip;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/&middot;/g, '·')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function htmlToMarkdown(html) {
  let md = html;

  // Evidence component (Astro renderda <span class="evidence-...">) — text içeriği zaten parantez içi etiket
  // Yalnızca tagleri at, içerik kalsın
  md = md.replace(/<span\s+class="[^"]*evidence[^"]*"[^>]*>([\s\S]*?)<\/span>/g, '$1');

  // Headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, '\n\n# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, '\n\n## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, '\n\n### $1\n\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, '\n\n#### $1\n\n');

  // Inline emphasis
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/g, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/g, '*$1*');

  // Links
  md = md.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Lists
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1\n');
  md = md.replace(/<\/?(ul|ol)[^>]*>/g, '\n');

  // Paragraph
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n');

  // Line break
  md = md.replace(/<br\s*\/?>/g, '\n');

  // Strip remaining structural tags
  md = md.replace(/<\/?(div|span|section|article|nav|aside|header|footer|main|figure|figcaption|button|svg|path|g|line|circle|polygon|rect|defs|use|symbol|title|desc|clippath|mask|filter|fegaussianblur|feoffset|fecolormatrix|femerge|femergenode)[^>]*>/gi, '');

  // Decode entities
  md = decodeHtmlEntities(md);

  // Collapse extra whitespace
  md = md.replace(/[ \t]+\n/g, '\n');
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/^[ \t]+/gm, '');

  return md.trim();
}

function buildYamlFrontmatter(fm, isoDate) {
  const lines = ['---'];
  lines.push(`title: ${JSON.stringify(fm.title || '')}`);
  if (fm.description) lines.push(`description: ${JSON.stringify(fm.description.replace(/\s+/g, ' ').trim())}`);
  if (fm.writerSlug) lines.push(`writer: ${fm.writerSlug}`);
  if (fm.publishedDate) lines.push(`publishedDate: ${JSON.stringify(fm.publishedDate)}`);
  if (isoDate) lines.push(`publishedDateIso: ${isoDate}`);
  if (fm.pathname) lines.push(`url: ${fm.pathname}`);
  if (fm.articleSection) lines.push(`section: ${JSON.stringify(fm.articleSection)}`);
  if (fm.sectionPath) lines.push(`sectionPath: ${fm.sectionPath}`);
  if (fm.keywords && fm.keywords.length) {
    lines.push(`keywords: [${fm.keywords.map((k) => JSON.stringify(k)).join(', ')}]`);
  }
  lines.push(`exportedAt: ${new Date().toISOString().slice(0, 10)}`);
  lines.push('---');
  return lines.join('\n');
}

function legacyFallbackMetadata(source, astroPath) {
  // Eski format: <SiteLayout title="..." description="..."> tabanlı
  const titleMatch = source.match(/<SiteLayout[\s\S]*?title="([^"]+?)(?:\s*-\s*Estranova)?"/);
  const descMatch = source.match(/<SiteLayout[\s\S]*?description="([^"]+)"/);
  if (!titleMatch) return null;
  // Dosya yolundan pathname türet: src/pages/xxx/yyy/zzz.astro -> /xxx/yyy/zzz
  const rel = path.relative(PAGES_DIR, astroPath).replace(/\\/g, '/');
  const pathname = '/' + rel.replace(/\.astro$/, '');
  // SubmenuHero içinde eyebrow var mı (section)?
  const eyebrowMatch = source.match(/<SubmenuHero[\s\S]*?eyebrow="([^"]+)"/);
  return {
    title: titleMatch[1].trim(),
    description: descMatch ? descMatch[1].trim() : null,
    writerSlug: null,
    publishedDate: null,
    pathname,
    articleSection: eyebrowMatch ? eyebrowMatch[1].split('·')[0].trim() : null,
    sectionPath: '/' + rel.split('/').slice(0, -1).join('/'),
    keywords: [],
    legacyFormat: true,
  };
}

async function exportArticle(astroPath) {
  const rawSource = await fs.readFile(astroPath, 'utf-8');
  const source = normalizeSource(rawSource);
  let fm = parseFrontmatter(source);
  let isLegacy = false;
  if (!fm || !fm.title || !fm.pathname) {
    fm = legacyFallbackMetadata(source, astroPath);
    if (fm) isLegacy = true;
  }
  if (!fm || !fm.title || !fm.pathname) {
    return { skipped: true, reason: 'no frontmatter / title / pathname (legacy fallback also failed)', astroPath };
  }

  const distRel = fm.pathname.replace(/^\//, '');
  const distHtml = path.join(DIST_DIR, distRel, 'index.html');
  let bodyMd = '';
  let dataSource = 'dist';
  try {
    const html = await fs.readFile(distHtml, 'utf-8');
    const bodyHtml = extractArticleBodyFromHtml(html);
    bodyMd = htmlToMarkdown(bodyHtml);
  } catch {
    dataSource = 'source-fallback';
    // Source-fallback: ArticleProsePanel arası HTML'i parse et
    const proseMatch = source.match(/<ArticleProsePanel>([\s\S]*?)<\/ArticleProsePanel>/);
    if (proseMatch) {
      // Evidence component → Türkçe etikete çevir
      const cleanedProse = proseMatch[1]
        .replace(/<Evidence\s+level=\{(\d+)\}\s*\/>/g, (_, n) => {
          const label = EVIDENCE_LABELS[Number(n)] || `${n}/5 kanıt`;
          return `_(${label})_`;
        })
        .replace(/<Evidence\s+from=\{(\d+)\}\s+to=\{(\d+)\}\s*\/>/g, (_, a, b) => {
          const la = EVIDENCE_LABELS[Number(a)] || `${a}/5`;
          const lb = EVIDENCE_LABELS[Number(b)] || `${b}/5`;
          return `_(${la.replace(' kanıt', '')}–${lb})_`;
        });
      bodyMd = htmlToMarkdown(cleanedProse);
    }
  }

  const isoDate = parseTrDate(fm.publishedDate) || new Date().toISOString().slice(0, 10);
  const yearMonth = isoDate.slice(0, 7);
  const slug = path.basename(fm.pathname);
  const fileName = `${isoDate}__${slug}.md`;
  const relPath = path.join(yearMonth, fileName);

  const yaml = buildYamlFrontmatter(fm, isoDate);
  const md = `${yaml}\n\n# ${fm.title}\n\n${bodyMd}\n`;

  return { skipped: false, relPath, md, slug, isoDate, fm, dataSource };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeBoth(relPath, content) {
  const arsivPath = path.join(ARSIV_DIR, relPath);
  const vaultPath = path.join(VAULT_DIR, relPath);
  await ensureDir(path.dirname(arsivPath));
  await fs.writeFile(arsivPath, content, 'utf-8');
  let vaultWritten = false;
  try {
    await ensureDir(path.dirname(vaultPath));
    await fs.writeFile(vaultPath, content, 'utf-8');
    vaultWritten = true;
  } catch (err) {
    console.warn(`[vault] ${relPath} yazılamadı: ${err.message}`);
  }
  return { vaultWritten };
}

function generateReadme(exported) {
  const sorted = [...exported].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const byMonth = new Map();
  for (const a of sorted) {
    const ym = a.isoDate.slice(0, 7);
    if (!byMonth.has(ym)) byMonth.set(ym, []);
    byMonth.get(ym).push(a);
  }

  const lines = [
    '# Estranova Yayınlanmış Makale Arşivi',
    '',
    `Toplam makale: **${exported.length}**`,
    `Son export: ${new Date().toISOString().slice(0, 10)}`,
    '',
    'Bu klasör `scripts/export-published-articles.mjs` script\'i tarafından otomatik üretilir. `src/pages/` altındaki Astro source\'tan metadata, `dist/` altındaki build HTML\'den gövde markdown\'ına dönüştürülür. Aynı içerik aynı anda obsidian vault\'a (`<VAULT>/articles/`) da yazılır.',
    '',
    '## Klasör yapısı',
    '',
    '```',
    'icerik/yayinlanmis-makaleler/',
    '├── 2026-04/',
    '│   ├── 2026-04-29__menopozda-hekim-hasta-iliskisi.md',
    '│   └── ...',
    '├── 2026-03/',
    '└── README.md',
    '```',
    '',
    '## Yeniden üretmek için',
    '',
    '```bash',
    'npm run build           # dist/ taze olsun',
    'npm run articles:export # markdown\'a dök',
    '```',
    '',
    '## İçindekiler (yeniden eskiye)',
    '',
  ];

  for (const [ym, articles] of byMonth) {
    lines.push(`### ${ym}`);
    lines.push('');
    lines.push('| Tarih | Yazar | Başlık | Bölüm |');
    lines.push('|---|---|---|---|');
    for (const a of articles) {
      const title = (a.fm.title || '').replace(/\|/g, '\\|');
      const writer = a.fm.writerSlug || '-';
      const section = a.fm.articleSection || (a.fm.sectionPath || '').replace(/^\//, '');
      const link = `${ym}/${a.isoDate}__${a.slug}.md`;
      lines.push(`| ${a.isoDate} | ${writer} | [${title}](${link}) | ${section} |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

async function main() {
  console.log('Estranova makale arşiv export başlıyor...');
  console.log(`  ROOT  : ${ROOT}`);
  console.log(`  PAGES : ${PAGES_DIR}`);
  console.log(`  DIST  : ${DIST_DIR}`);
  console.log(`  ARSIV : ${ARSIV_DIR}`);
  console.log(`  VAULT : ${VAULT_DIR}`);
  console.log('');

  // dist/ kontrol
  try {
    await fs.access(DIST_DIR);
  } catch {
    console.error('HATA: dist/ klasörü yok. Önce `npm run build` çalıştırın.');
    process.exit(1);
  }

  const articles = await findAstroArticles(PAGES_DIR);
  console.log(`Bulunan Astro page: ${articles.length}\n`);

  const exported = [];
  const skipped = [];
  let vaultOk = 0;
  let vaultFail = 0;

  for (const ap of articles) {
    const rel = path.relative(ROOT, ap);
    try {
      const result = await exportArticle(ap);
      if (result.skipped) {
        skipped.push({ rel, reason: result.reason });
        console.log(`SKIP  ${rel}  (${result.reason})`);
        continue;
      }
      const { vaultWritten } = await writeBoth(result.relPath, result.md);
      if (vaultWritten) vaultOk++;
      else vaultFail++;
      exported.push(result);
      console.log(`✓ ${result.relPath}  (${result.dataSource})`);
    } catch (err) {
      skipped.push({ rel, reason: err.message });
      console.error(`HATA ${rel}: ${err.message}`);
    }
  }

  // README üret + her iki yere yaz
  const readme = generateReadme(exported);
  await writeBoth('README.md', readme);

  console.log('');
  console.log('━'.repeat(60));
  console.log(`Toplam yazı arşivlendi : ${exported.length}`);
  console.log(`Atlanan                 : ${skipped.length}`);
  console.log(`Vault yazımı başarılı   : ${vaultOk}`);
  console.log(`Vault yazımı başarısız  : ${vaultFail}`);
  console.log('━'.repeat(60));
}

main().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
