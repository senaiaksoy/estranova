/**
 * One-off: replace literal bracket/dot evidence markers with Evidence component in src/pages (Astro).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PAGES = path.join(ROOT, 'src', 'pages');

function walkAstro(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walkAstro(p, out);
    else if (name.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function countFilled(s) {
  return [...s].filter((c) => c === '●').length;
}

function importPathFor(file) {
  const rel = path
    .relative(path.join(ROOT, 'src'), path.dirname(file))
    .split(path.sep)
    .filter(Boolean);
  const ups = rel.length;
  return `${'../'.repeat(ups)}components/site/Evidence.astro`;
}

function migrateContent(src) {
  let content = src;
  let n = 0;

  const bump = (before) => {
    n += 1;
    return before;
  };

  // Range first (bracketed)
  content = content.replace(/\[\s*([●○]{5})\s*[-–]\s*([●○]{5})\s*\]/g, (full, a, b) => {
    const from = countFilled(a);
    const to = countFilled(b);
    if (from < 1 || from > 5 || to < 1 || to > 5) return full;
    return bump(`<Evidence from={${from}} to={${to}} />`);
  });

  // Single bracketed
  content = content.replace(/\[\s*([●○]{5})\s*\]/g, (full, dots) => {
    const level = countFilled(dots);
    if (level < 1 || level > 5) return full;
    return bump(`<Evidence level={${level}} />`);
  });

  // Table cell: …>●●●●●</td>
  content = content.replace(/>([●○]{5})<\/td>/g, (full, dots) => {
    const level = countFilled(dots);
    if (level < 1 || level > 5) return full;
    return bump(`><Evidence level={${level}} /></td>`);
  });

  // Trailing five-dot run before closing </p> (e.g. Kanıt Düzeyi satırı, parantezsiz)
  content = content.replace(/([●○]{5})(\s*)(<\/p>)/g, (full, dots, sp, close) => {
    const level = countFilled(dots);
    if (level < 1 || level > 5) return full;
    return bump(`<Evidence level={${level}} />${sp}${close}`);
  });

  return { content, replacements: n };
}

function ensureImport(file, content) {
  if (content.includes('components/site/Evidence.astro')) return content;
  const imp = `import Evidence from '${importPathFor(file)}';`;
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return content;
  const fmEnd = fmMatch[0].length;
  const fmBody = fmMatch[1];
  const lines = fmBody.split(/\r?\n/);
  let lastImportLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportLine = i;
  }
  if (lastImportLine === -1) {
    return `---\n${imp}\n${fmBody}\n---${content.slice(fmEnd)}`;
  }
  lines.splice(lastImportLine + 1, 0, imp);
  return `---\n${lines.join('\n')}\n---${content.slice(fmEnd)}`;
}

function main() {
  const files = walkAstro(PAGES);
  let total = 0;
  let touched = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    if (!/[●○]/.test(raw)) continue;

    const { content: migrated, replacements } = migrateContent(raw);
    let out = ensureImport(file, migrated);
    if (out === raw) continue;

    fs.writeFileSync(file, out, 'utf8');
    touched += 1;
    total += replacements;
    console.log(`${path.relative(ROOT, file)}: ${replacements} replacement(s)`);
  }

  console.log(`\nDone. Files touched: ${touched}, total replacements: ${total}`);
}

main();
