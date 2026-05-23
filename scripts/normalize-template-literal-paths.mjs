#!/usr/bin/env node
/**
 * Template literal path normalizer — `` `/segment/${expr}` `` veya
 * `` `/seg/${a}/${b}` `` gibi slash'sız biten path template'lerine sondaki `/`
 * eklenir. normalize-trailing-slash.mjs'in ilk turu literal'ları yakalıyordu;
 * bu betik interpolation içerenleri tamamlar.
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ALLOWED_EXTS = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx', '.mjs']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.astro', '.git', 'tests', 'scripts']);

// Template literal'ı yakala. İçerik:
//   /  + en az bir [a-z0-9-] içeren segment + (/segment-or-${expr})* + ...
// Sonu `${...}` veya `[a-z0-9-]` ile bitebilir; `/` veya `.` ile bitmemeli.
//
// Kabul edilen sonlar: `}` (interpolation kapanışı) veya path char.
// Reddetmek için sondaki char `/` ise ya da `.` ile dosya uzantısı varsa atla.
const TEMPLATE_PATH = /`(\/(?:[a-z0-9\-]+|\$\{[^}`]+\})(?:\/(?:[a-z0-9\-]+|\$\{[^}`]+\}))*)`/g;

function shouldSkip(inner) {
  if (inner.endsWith('/')) return true;
  // `${var}` interpolation'larını çıkarıp uzantı kontrolü yap
  // (member access içindeki nokta uzantı sayılmasın).
  const stripped = inner.replace(/\$\{[^}]+\}/g, 'X');
  const lastSegment = stripped.split('/').pop() || '';
  if (lastSegment.includes('.')) return true;
  return false;
}

async function walk(dir, acc) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(full, acc);
    } else if (entry.isFile() && ALLOWED_EXTS.has(path.extname(entry.name))) {
      acc.push(full);
    }
  }
}

async function main() {
  const files = [];
  await walk(path.join(process.cwd(), 'src'), files);

  let totalChanged = 0;
  let filesTouched = 0;

  for (const file of files) {
    const original = await readFile(file, 'utf8');
    let changed = 0;
    const out = original.replace(TEMPLATE_PATH, (match, inner) => {
      if (shouldSkip(inner)) return match;
      changed += 1;
      return `\`${inner}/\``;
    });
    if (changed > 0) {
      await writeFile(file, out);
      filesTouched += 1;
      totalChanged += changed;
      console.log(`  ${changed.toString().padStart(3)}  ${file}`);
    }
  }
  console.log(`\nTemplate literal normalize: ${totalChanged} occurrence, ${filesTouched} dosya.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
