#!/usr/bin/env node
/**
 * Estranova yazar onay arşivi iskeletini açar.
 *
 * src/data/writers.ts'deki tüm yazarlar için:
 *   icerik/yazar-onaylari/<slug>/
 *     README.md
 *     article-log.md
 *     onay-bekleyen/.gitkeep
 *     onaylanan/.gitkeep
 *
 * İdempotent — tekrar çalıştırılabilir, mevcut dosyaları üzerine yazmaz
 * (README.md ve article-log.md'yi sadece yoksa oluşturur).
 *
 * Kullanım:
 *   npm run authors:init-folders
 *
 * Detay: docs/AUTHOR-APPROVAL-WORKFLOW.md
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const WRITERS_FILE = path.join(ROOT, 'src/data/writers.ts');
const ARCHIVE_ROOT = path.join(ROOT, 'icerik/yazar-onaylari');

const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  burgundy: '\x1b[38;5;88m',
  gold: '\x1b[38;5;178m',
};

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

/**
 * src/data/writers.ts'i regex ile parse et.
 * Her yazar için { slug, displayName, role } üretir.
 */
async function parseWriters() {
  const content = await fs.readFile(WRITERS_FILE, 'utf-8');
  const writers = [];
  // Yazar bloğu kabaca: { slug: 'X', displayName: 'Y', role: 'Z', ... }
  // displayName ve role bağımsız satırlarda olabilir.
  const slugRe = /slug:\s*['"]([a-z-]+)['"]/g;
  let match;
  while ((match = slugRe.exec(content)) !== null) {
    const slug = match[1];
    const startIdx = match.index;
    // Bu slug'tan sonraki ~600 karakter içinden displayName ve role ara
    const window = content.slice(startIdx, startIdx + 800);
    const dnMatch = window.match(/displayName:\s*['"]([^'"]+)['"]/);
    const roleMatch = window.match(/role:\s*['"]([^'"]+)['"]/);
    writers.push({
      slug,
      displayName: dnMatch ? dnMatch[1] : slug,
      role: roleMatch ? roleMatch[1] : '',
    });
  }
  return writers;
}

function readmeContent(writer) {
  return `# ${writer.displayName}

Estranova yazar onay arşivi.

- **Slug:** \`${writer.slug}\`
- **Rol:** ${writer.role || '—'}

## İçerik

- [\`onay-bekleyen/\`](./onay-bekleyen/) — yazara gönderilmiş, yanıt bekleyen paketler
- [\`onaylanan/\`](./onaylanan/) — onay almış makale paketleri ve onay belgeleri
- [\`article-log.md\`](./article-log.md) — yazarın akümülatif makale üretim günlüğü (varsa)

## Yayın kapısı

Her yeni makale ve her revizyon önce 5 dakikalık onay formuyla \`onay-bekleyen/\` altında tutulur. Yazar \`ONAYLIYORUM\` demeden makale siteye yayınlanmaz ve \`onaylanan/\` altına taşınmaz. \`DEĞİŞİKLİK İSTİYORUM\` yanıtında revizyon yapılır, yeni makale + yeni 5 dakikalık form üretilir.

İstisna: \`berna-aksoy\`, \`alara-baykent\` ve \`senai-aksoy\` için 5 dakikalık yazar formu zorunlu değildir. Bu üç yazarın yazılarında KC editör doğrudan onayı yeterlidir; onay izi \`article-approvals.ts\`, varsa paket README'si ve/veya \`article-log.md\` içinde tutulur.

Form yanıtları aynı zamanda stil geliştirme girdisidir. Ham JSON paket klasöründe kalır; stil sinyali \`article-log.md\` dosyasına özetlenir. Kalıcı \`writers/${writer.slug}/\` profil değişiklikleri otomatik yapılmaz, editör onayı gerektirir.

## Profile

Detay yazar profili (varsa): \`writers/${writer.slug}/\` veya \`writers/${writer.slug}.md\`.

## İlişkili belgeler

- [\`docs/AUTHOR-APPROVAL-WORKFLOW.md\`](../../../docs/AUTHOR-APPROVAL-WORKFLOW.md)
- [\`src/data/article-approvals.ts\`](../../../src/data/article-approvals.ts)
`;
}

function articleLogContent(writer) {
  return `# ${writer.displayName} — Article Log

> Yazılan her makalenin kalıp seçimi ve cooldown takibi. İlk makale sonrası bu tabloya satır eklenir.

---

## Başlangıç

| # | Tarih | Yazı (slug) | Eksen | Açılış | Kapanış | Manifesto | Dengeleyici | Anekdot | Notlar |
|---|---|---|---|---|---|---|---|---|---|

---

## Cooldown takibi

| Kalıp türü | Havuz | Cooldown | Son kullanım |
|---|---|---|---|
| Açılış | — | — | — |
| Kapanış | — | — | — |
| Dengeleyici | — | — | — |
| Bilmiyorum | — | — | — |
| Hekim çerçevesi | — | — | — |
| Anekdot kapısı | — | — | — |
| İmza kapanış | — | — | — |
`;
}

async function ensureFolder(p) {
  await fs.mkdir(p, { recursive: true });
}

async function ensureGitkeep(folder) {
  const gk = path.join(folder, '.gitkeep');
  if (!(await exists(gk))) {
    await fs.writeFile(gk, '', 'utf-8');
    return true;
  }
  return false;
}

async function ensureReadme(folder, content) {
  const rp = path.join(folder, 'README.md');
  if (!(await exists(rp))) {
    await fs.writeFile(rp, content, 'utf-8');
    return true;
  }
  return false;
}

async function ensureArticleLog(folder, content) {
  const lp = path.join(folder, 'article-log.md');
  if (!(await exists(lp))) {
    await fs.writeFile(lp, content, 'utf-8');
    return true;
  }
  return false;
}

async function main() {
  console.log(`${C.bold}${C.burgundy}Estranova — Yazar onay arşivi iskelet açıcı${C.reset}\n`);

  const writers = await parseWriters();
  if (writers.length === 0) {
    console.error(`${C.yellow}Uyarı: writers.ts'te yazar bulunamadı.${C.reset}`);
    process.exit(1);
  }

  console.log(`${C.dim}Yazar sayısı: ${writers.length}${C.reset}\n`);

  await ensureFolder(ARCHIVE_ROOT);

  let createdCount = 0;
  let skippedCount = 0;

  for (const w of writers) {
    const writerDir = path.join(ARCHIVE_ROOT, w.slug);
    const onayBekleyen = path.join(writerDir, 'onay-bekleyen');
    const onaylanan = path.join(writerDir, 'onaylanan');

    const isNew = !(await exists(writerDir));
    await ensureFolder(writerDir);
    await ensureFolder(onayBekleyen);
    await ensureFolder(onaylanan);

    const readmeCreated = await ensureReadme(writerDir, readmeContent(w));
    const logCreated = await ensureArticleLog(writerDir, articleLogContent(w));
    const gk1 = await ensureGitkeep(onayBekleyen);
    const gk2 = await ensureGitkeep(onaylanan);

    const created = isNew || readmeCreated || logCreated || gk1 || gk2;
    if (created) {
      createdCount++;
      console.log(`${C.green}  +${C.reset} ${C.bold}${w.slug}${C.reset} ${C.dim}(${w.displayName})${C.reset}`);
    } else {
      skippedCount++;
      console.log(`${C.dim}  · ${w.slug} (mevcut)${C.reset}`);
    }
  }

  console.log(
    `\n${C.bold}${C.green}Tamamlandı.${C.reset} ` +
    `${C.gold}${createdCount}${C.reset} oluşturuldu/güncellendi, ` +
    `${C.dim}${skippedCount}${C.reset} dokunulmadı.`
  );
  console.log(`${C.dim}Konum: icerik/yazar-onaylari/${C.reset}\n`);
}

main().catch((err) => {
  console.error('Hata:', err);
  process.exit(1);
});
