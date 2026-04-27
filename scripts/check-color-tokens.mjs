import fs from 'node:fs';
import path from 'node:path';

/*
 * Renk token disiplini — Tailwind v4 arbitrary value formunda
 * (bg-[#HEX], text-[#HEX] vs.) marka kilitli paleti yazmayı yasaklar.
 * Eşdeğer semantic utility'ler src/index.css @theme içinde tanımlı.
 *
 * Yeni renk eklenecekse:
 *   1) src/index.css @theme bloğuna --color-<isim>: #HEX; ekle
 *   2) Buradaki BRAND_TOKENS map'ine #HEX → utility-suffix kaydını ekle
 */

const root = process.cwd();
const scanDirs = ['src'];
const allowedExt = new Set(['.astro', '.ts', '.tsx', '.mdx']);

// Anahtar küçük harf — eşleşme case-insensitive yapılır.
const BRAND_TOKENS = {
  '#6b2d3e': 'burgundy',
  '#4f171c': 'burgundy-deep',
  '#2d2d2d': 'ink',
  '#c9a96e': 'gold',
  '#775a19': 'gold-bronze',
  '#fdf8f0': 'cream-soft',
  '#f5ede0': 'cream-warm',
  '#fcf9f4': 'surface',
};

const ARBITRARY_HEX_RE = /\[#([0-9a-fA-F]{6})\]/g;

function collectFiles(relativeDir) {
  const absDir = path.join(root, relativeDir);
  if (!fs.existsSync(absDir)) return [];

  const files = [];
  const stack = [absDir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      const ext = path.extname(entry.name).toLowerCase();
      if (entry.isFile() && allowedExt.has(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const violations = [];

for (const dir of scanDirs) {
  for (const file of collectFiles(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split(/\r?\n/u);
    lines.forEach((line, idx) => {
      let match;
      ARBITRARY_HEX_RE.lastIndex = 0;
      while ((match = ARBITRARY_HEX_RE.exec(line)) !== null) {
        const hex = `#${match[1].toLowerCase()}`;
        const suggestion = BRAND_TOKENS[hex];
        if (suggestion) {
          violations.push({
            file: path.relative(root, file).replace(/\\/g, '/'),
            line: idx + 1,
            hex: match[0],
            suggestion,
          });
        }
      }
    });
  }
}

if (violations.length === 0) {
  console.log('check-color-tokens: OK (0 marka hex arbitrary value).');
  process.exit(0);
}

console.error(`check-color-tokens: ${violations.length} marka hex arbitrary value bulundu.`);
console.error('Tailwind v4 @theme semantic utility kullan; arbitrary value yazma.\n');
const grouped = new Map();
for (const v of violations) {
  if (!grouped.has(v.file)) grouped.set(v.file, []);
  grouped.get(v.file).push(v);
}
for (const [file, list] of grouped) {
  console.error(`  ${file}`);
  for (const v of list) {
    console.error(`    L${v.line}  ${v.hex}  →  ${v.suggestion}`);
  }
}
console.error('\nDüzeltme: bg-[#6B2D3E] yerine bg-burgundy, text-[#2D2D2D] yerine text-ink, ...');
process.exit(1);
