import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanDirs = ['src', 'docs', 'scripts'];
const allowedExt = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.css', '.json']);
const ignoreFiles = new Set(['scripts/check-encoding.mjs']);
const suspiciousTokens = [
  'Ã',
  'Â ',
  'â€™',
  'â€œ',
  'â€',
  'â€“',
  'â€”',
  'Ä±',
  'Ä°',
  'ÅŸ',
  'Åž',
  'Ã¼',
  'Ã¶',
  'Ã§',
  'Ãœ',
  'Ã–',
  'Ã‡',
  '�',
];

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

function findTokenHits(text, token) {
  const lineHits = [];
  const lines = text.split(/\r?\n/u);

  lines.forEach((line, index) => {
    if (line.includes(token)) {
      lineHits.push({ line: index + 1, preview: line.trim().slice(0, 160) });
    }
  });

  return lineHits;
}

const allFiles = scanDirs.flatMap(collectFiles);
const findings = [];

for (const filePath of allFiles) {
  const relativeFile = path.relative(root, filePath).replace(/\\/g, '/');
  if (ignoreFiles.has(relativeFile)) continue;

  const text = fs.readFileSync(filePath, 'utf8');

  for (const token of suspiciousTokens) {
    const hits = findTokenHits(text, token);
    if (hits.length > 0) {
      findings.push({
        file: path.relative(root, filePath).replace(/\\/g, '/'),
        token,
        hits,
      });
    }
  }
}

if (findings.length > 0) {
  console.error('ERROR: Mojibake/encoding issue detected.');
  for (const finding of findings) {
    const uniqueLines = finding.hits.slice(0, 5).map((hit) => `L${hit.line}: ${hit.preview}`);
    console.error(`- ${finding.file} [${finding.token}]`);
    uniqueLines.forEach((line) => console.error(`  ${line}`));
  }
  process.exit(1);
}

console.log(`Encoding check passed for ${allFiles.length} file(s).`);
