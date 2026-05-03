#!/usr/bin/env node
/**
 * Bir Astro makalesini yazara onaya göndermek için paket üretir.
 *
 * Üç dosya oluşturur:
 *   icerik/onay-bekleyen/<slug>/<YYYY-MM-DD>_<makale-slug>/
 *     kontrol-formu.html       templates/kontrol-formu.template.html'den render
 *                              (--first-article ile kontrol-formu-uzun.template.html)
 *     makale-onizleme.html     templates/makale-onizleme.template.html'den render
 *     meta.json                templates/meta.template.json'dan render
 *
 * Form tipleri (formType meta.json'da):
 *   - 'standard' (default, ~5 dk, 7 alan): yazarın 2. ve sonraki makaleleri için
 *   - 'first-article-style-refine' (~10 dk, 14 alan): yazarın ilk framework
 *     makalesi için bir defaya mahsus stil rafine + onay hibridi. Bölüm 3
 *     (5 stil öğesi) yanıtları profile dosyalarına işlenir.
 *
 * Kullanım:
 *   npm run author:send-for-approval -- --slug X --article /pathname [--days 7] [--site URL] [--first-article]
 *
 * Örnek (sonraki makaleler için standard form):
 *   npm run author:send-for-approval -- --slug bahar-ozeray \
 *       --article /zamansiz-yasam/eklem-agrisi-menopoz
 *
 * Örnek (yazarın İLK framework makalesi için 10 dk uzun stil rafine formu):
 *   npm run author:send-for-approval -- --slug duygu-karaosmanoglu \
 *       --article /hormonal-gecis/40-sonrasi/diseti-cekilmesi-postmenopoz \
 *       --first-article
 *
 * Detay: docs/AUTHOR-APPROVAL-WORKFLOW.md
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const WRITERS_FILE = path.join(ROOT, 'src/data/writers.ts');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const PENDING_ROOT = path.join(ROOT, 'icerik/onay-bekleyen');

const DEFAULT_TARGET_EMAIL = 'drsenaiaksoy@gmail.com';
const DEFAULT_SITE = 'https://estranova.com.tr';
const DEFAULT_DAYS = 7;

const C = {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  green: '\x1b[32m', yellow: '\x1b[33m', red: '\x1b[31m',
  burgundy: '\x1b[38;5;88m', gold: '\x1b[38;5;178m',
};

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

async function readFile(p) {
  return fs.readFile(p, 'utf-8');
}

/**
 * writers.ts'ten verilen slug için displayName + role döner.
 */
async function findWriter(slug) {
  const content = await readFile(WRITERS_FILE);
  // İlgili slug bloğunu bulmak için: slug'tan sonraki ~800 karakterde
  // displayName + role ara.
  const slugRe = new RegExp(`slug:\\s*['"]${slug}['"]`);
  const m = content.match(slugRe);
  if (!m) return null;
  const startIdx = m.index;
  const window = content.slice(startIdx, startIdx + 800);
  const dnMatch = window.match(/displayName:\s*['"]([^'"]+)['"]/);
  const roleMatch = window.match(/role:\s*['"]([^'"]+)['"]/);
  return {
    slug,
    displayName: dnMatch ? dnMatch[1] : slug,
    role: roleMatch ? roleMatch[1] : '',
  };
}

/**
 * src/pages/<pathname>.astro dosyasından articleTitle + articleDescription parse et.
 */
async function parseArticle(pathname) {
  // pathname örneği: /zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu
  const cleaned = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const astroPath = path.join(PAGES_DIR, cleaned + '.astro');
  let content;
  try {
    content = await readFile(astroPath);
  } catch {
    throw new Error(`Astro dosyası bulunamadı: ${astroPath}`);
  }

  // const articleTitle = '...'  veya `...` (template literal)
  const titleMatch = content.match(/const\s+articleTitle\s*=\s*[`'"]([^`'"]+)[`'"]/);
  const title = titleMatch
    ? titleMatch[1]
    : cleaned.split('/').pop().replace(/-/g, ' ');

  // articleDescription opsiyonel, hata vermez
  const descMatch = content.match(/const\s+articleDescription\s*=\s*[`'"]([^`'"]+)[`'"]/);
  const description = descMatch ? descMatch[1] : '';

  return { title, description, pathname: '/' + cleaned };
}

/**
 * Tüm placeholder'ları tek tek değiştir (replaceAll).
 */
function renderTemplate(tpl, vars) {
  let out = tpl;
  for (const [k, v] of Object.entries(vars)) {
    const token = '{{' + k + '}}';
    out = out.split(token).join(String(v));
  }
  return out;
}

function isoDate(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function turkishDate(d = new Date()) {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

async function ensureFolder(p) {
  await fs.mkdir(p, { recursive: true });
}

async function main() {
  const args = parseArgs(process.argv);

  if (!args.slug || !args.article) {
    console.error(`${C.red}Hata:${C.reset} --slug ve --article zorunludur.\n`);
    console.log('Kullanım:');
    console.log('  npm run author:send-for-approval -- --slug <writer-slug> --article /pathname [--days 7] [--site URL]\n');
    console.log('Örnek:');
    console.log('  npm run author:send-for-approval -- --slug bahar-ozeray \\');
    console.log('      --article /zamansiz-yasam/eklem-agrisi-menopoz');
    process.exit(1);
  }

  const writerSlug = args.slug;
  const articlePathname = args.article;
  const days = parseInt(args.days || String(DEFAULT_DAYS), 10);
  const site = args.site || DEFAULT_SITE;
  const targetEmail = args.email || DEFAULT_TARGET_EMAIL;

  console.log(`${C.bold}${C.burgundy}Estranova — Yazar onay paketi üretici${C.reset}\n`);

  // Yazar
  const writer = await findWriter(writerSlug);
  if (!writer) {
    console.error(`${C.red}Hata:${C.reset} Yazar bulunamadı: ${writerSlug}`);
    process.exit(1);
  }
  console.log(`${C.dim}Yazar:${C.reset} ${C.bold}${writer.displayName}${C.reset} (${writer.slug})`);

  // Makale
  const article = await parseArticle(articlePathname);
  console.log(`${C.dim}Makale:${C.reset} ${C.bold}${article.title}${C.reset}`);
  console.log(`${C.dim}Path:${C.reset}    ${article.pathname}\n`);

  // Tarihler
  const sentDate = new Date();
  const deadlineDate = new Date(sentDate.getTime() + days * 24 * 60 * 60 * 1000);

  const articleSlug = article.pathname.split('/').pop();
  const folderName = `${isoDate(sentDate)}_${articleSlug}`;
  const packageDir = path.join(PENDING_ROOT, writer.slug, folderName);
  await ensureFolder(packageDir);

  const previewUrl = site.replace(/\/+$/, '') + article.pathname;

  // Form tipi seçimi (--first-article bayrağı varsa uzun stil rafine template)
  const isFirstArticle = !!args['first-article'];
  const formTemplateName = isFirstArticle
    ? 'kontrol-formu-uzun.template.html'
    : 'kontrol-formu.template.html';

  // Template'leri yükle ve render et
  const formTpl = await readFile(path.join(TEMPLATES_DIR, formTemplateName));
  const previewTpl = await readFile(path.join(TEMPLATES_DIR, 'makale-onizleme.template.html'));
  const metaTpl = await readFile(path.join(TEMPLATES_DIR, 'meta.template.json'));

  const vars = {
    WRITER_NAME: writer.displayName,
    WRITER_SLUG: writer.slug,
    ARTICLE_TITLE: article.title,
    ARTICLE_SLUG: articleSlug,
    PREVIEW_URL: previewUrl,
    SENT_DATE: turkishDate(sentDate),
    DEADLINE_DATE: turkishDate(deadlineDate),
    SENT_ISO: sentDate.toISOString(),
    DEADLINE_ISO: deadlineDate.toISOString(),
    TARGET_EMAIL: targetEmail,
    FORM_URL: './kontrol-formu.html',
  };

  const formHtml = renderTemplate(formTpl, vars);
  const previewHtml = renderTemplate(previewTpl, vars);
  const metaJson = renderTemplate(metaTpl, vars);

  // Yaz
  await fs.writeFile(path.join(packageDir, 'kontrol-formu.html'), formHtml, 'utf-8');
  await fs.writeFile(path.join(packageDir, 'makale-onizleme.html'), previewHtml, 'utf-8');
  await fs.writeFile(path.join(packageDir, 'meta.json'), metaJson, 'utf-8');

  // Konsola özet
  const relPath = path.relative(ROOT, packageDir).replace(/\\/g, '/');
  console.log(`${C.green}${C.bold}✓ Paket hazır:${C.reset} ${relPath}/`);
  console.log(`  ${C.dim}├─${C.reset} kontrol-formu.html ${C.dim}(yazara gönderilen form)${C.reset}`);
  console.log(`  ${C.dim}├─${C.reset} makale-onizleme.html ${C.dim}(landing)${C.reset}`);
  console.log(`  ${C.dim}└─${C.reset} meta.json ${C.dim}(durum: pending)${C.reset}\n`);

  console.log(`${C.bold}Form tipi:${C.reset} ${isFirstArticle ? C.gold + 'uzun stil rafine (~10 dk, 14 alan)' + C.reset : C.dim + 'standart (~5 dk, 7 alan)' + C.reset}`);
  console.log(`${C.dim}(template: ${formTemplateName})${C.reset}\n`);

  console.log(`${C.bold}Yazara iletilecek:${C.reset}`);
  console.log(`  ${C.gold}Önizleme:${C.reset}  file:///${path.join(packageDir, 'makale-onizleme.html').replace(/\\/g, '/')}`);
  console.log(`  ${C.gold}Form:${C.reset}      file:///${path.join(packageDir, 'kontrol-formu.html').replace(/\\/g, '/')}`);
  console.log(`  ${C.gold}Canlı yazı:${C.reset} ${previewUrl}`);
  console.log(`  ${C.gold}Email:${C.reset}     ${targetEmail}`);
  console.log(`  ${C.gold}Deadline:${C.reset}  ${turkishDate(deadlineDate)} (${days} gün)\n`);

  console.log(`${C.dim}Yanıt geldiğinde JSON payload'ı icerik/yazarlar/${writer.slug}/onay-belgeleri/${folderName}.json olarak kaydedin.${C.reset}\n`);
}

main().catch((err) => {
  console.error(`${C.red}Hata:${C.reset}`, err.message);
  process.exit(1);
});
