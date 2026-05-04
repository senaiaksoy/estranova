import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'config', 'editorial-lexicon.json');

if (!fs.existsSync(configPath)) {
  console.error('check-editorial-lexicon: config/editorial-lexicon.json bulunamadı.');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const includePatterns = config.include ?? [];
const excludePatterns = config.exclude ?? [];
const hardBan = config.hard_ban ?? {};
const softBan = config.soft_ban ?? {};

function globToRegExp(pattern) {
  const normalized = pattern.replace(/\\/g, '/');
  const escaped = normalized.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const regex = escaped
    .replace(/\/\*\*\//g, '/::DOUBLE_STAR::/')
    .replace(/\*\*/g, '::DOUBLE_STAR::')
    .replace(/\*/g, '[^/]*')
    .replace(/::DOUBLE_STAR::/g, '.*');
  return new RegExp(`^${regex}$`, 'u');
}

const includeRegexes = includePatterns.map(globToRegExp);
const excludeRegexes = excludePatterns.map(globToRegExp);

function matchesAny(filePath, regexes) {
  return regexes.some((regex) => regex.test(filePath));
}

function shouldScan(relativePath) {
  return matchesAny(relativePath, includeRegexes) && !matchesAny(relativePath, excludeRegexes);
}

function collectFiles(dir) {
  const absDir = path.join(root, dir);
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
      if (!entry.isFile()) continue;
      files.push(fullPath);
    }
  }

  return files;
}

function createWordRegex(token) {
  return new RegExp(`(?<![\\p{L}\\p{N}_])${token}(?![\\p{L}\\p{N}_])`, 'giu');
}

function findHits(text, token) {
  const regex = createWordRegex(token);
  const lines = text.split(/\r?\n/u);
  const hits = [];

  lines.forEach((line, index) => {
    regex.lastIndex = 0;
    if (regex.test(line)) {
      hits.push({
        line: index + 1,
        preview: line.trim().slice(0, 180),
      });
    }
  });

  return hits;
}

const scanRoots = [...new Set(includePatterns.map((pattern) => pattern.split('/')[0]).filter(Boolean))];
const allFiles = scanRoots.flatMap(collectFiles);
const findings = [];

for (const filePath of allFiles) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
  if (!shouldScan(relativePath)) continue;

  const text = fs.readFileSync(filePath, 'utf8');

  for (const [token, replacements] of Object.entries(hardBan)) {
    const hits = findHits(text, token);
    if (hits.length > 0) {
      findings.push({
        severity: 'ERROR',
        file: relativePath,
        token,
        replacements,
        hits,
      });
    }
  }

  for (const [token, replacements] of Object.entries(softBan)) {
    const hits = findHits(text, token);
    if (hits.length > 0) {
      findings.push({
        severity: 'WARN',
        file: relativePath,
        token,
        replacements,
        hits,
      });
    }
  }
}

const errorFindings = findings.filter((finding) => finding.severity === 'ERROR');
const warningFindings = findings.filter((finding) => finding.severity === 'WARN');

if (findings.length === 0) {
  console.log('check-editorial-lexicon: OK (0 yasak/uyari kelime).');
  process.exit(0);
}

for (const finding of findings) {
  const suggestion = Array.isArray(finding.replacements) ? finding.replacements.join(', ') : '';
  console.error(`${finding.severity}: ${finding.file} [${finding.token}] -> ${suggestion}`);
  finding.hits.slice(0, 5).forEach((hit) => {
    console.error(`  L${hit.line}: ${hit.preview}`);
  });
}

if (warningFindings.length > 0) {
  console.error(
    `check-editorial-lexicon: ${warningFindings.length} warning bulundu. Soft ban kelimeleri mümkünse önerilen karşılıklarla değiştirin.`
  );
}

if (errorFindings.length > 0) {
  console.error(
    `check-editorial-lexicon: ${errorFindings.length} hard ban ihlali bulundu. Yayın için bu kelimeler kaldırılmalıdır.`
  );
  process.exit(1);
}

process.exit(0);
