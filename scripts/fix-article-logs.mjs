import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const ONAYLARI_DIR = path.join(REPO_ROOT, 'icerik', 'yazar-onaylari');

// Get all yazar-onaylari subdirectories
const dirs = fs
  .readdirSync(ONAYLARI_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name);

const EXPECTED_HEADER = '| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |';
const EXPECTED_SEPARATOR = '|---|---|---|---|---|---|---|---|---|---|---|---|';

for (const slug of dirs) {
  const logPath = path.join(ONAYLARI_DIR, slug, 'article-log.md');
  if (!fs.existsSync(logPath)) continue;

  console.log(`Processing article log: ${slug}`);
  let text = fs.readFileSync(logPath, 'utf8');

  // 1. Inject framework reference if missing
  if (!text.includes('WRITER-DYNAMICS-FRAMEWORK.md')) {
    // Find first header line (e.g. # Name — Article Log)
    const headerRegex = /(^|\r?\n)(#\s+[^:\r\n]+Article\s+Log)(\r?\n|$)/i;
    const match = text.match(headerRegex);
    if (match) {
      const refLine = `\n\n> **Article log framework:** [\`docs/WRITER-DYNAMICS-FRAMEWORK.md\`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)`;
      text = text.replace(headerRegex, (m, pre, h, post) => `${pre}${h}${refLine}${post}`);
      console.log(`  Added framework reference.`);
    }
  }

  // 2. Fix schema table
  // Find tables in the markdown text
  const lines = text.split(/\r?\n/);
  let inTable = false;
  let tableStartIndex = -1;
  let tableEndIndex = -1;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const isRow = lines[i].trim().startsWith('|');
    if (isRow) {
      if (!inTable) {
        inTable = true;
        tableStartIndex = i;
      }
      tableRows.push(lines[i].trim());
    } else {
      if (inTable) {
        tableEndIndex = i - 1;
        processTable();
        inTable = false;
        tableRows = [];
      }
    }
  }

  // Handle table at the end of file
  if (inTable) {
    tableEndIndex = lines.length - 1;
    processTable();
  }

  function processTable() {
    if (tableRows.length < 2) return;

    const header = tableRows[0];
    // We only care about the log schema table, which has Tarih or Yazı or Başlık
    const isLogSchemaTable = /Tarih/i.test(header) && (/Yazı/i.test(header) || /Başlık/i.test(header) || /Konu/i.test(header) || /Eksen/i.test(header));
    
    if (isLogSchemaTable && header !== EXPECTED_HEADER) {
      console.log(`  Found non-standard schema table. Converting...`);
      
      // Parse header columns
      const headers = header.split('|').map(h => h.trim()).filter(Boolean);
      
      // Parse data rows
      const parsedRows = [];
      for (let r = 2; r < tableRows.length; r++) {
        const cols = tableRows[r].split('|').map(c => c.trim());
        // Split by '|' produces empty strings at beginning and end
        if (cols.length >= 2) {
          const rowCols = cols.slice(1, cols.length - 1);
          parsedRows.push(rowCols);
        }
      }

      // Build mapping from old headers to new headers
      const newRows = [];
      for (const oldRow of parsedRows) {
        // Map old row array to 12 columns
        const getVal = (possibleHeaders) => {
          for (const ph of possibleHeaders) {
            const idx = headers.findIndex(h => new RegExp(ph, 'i').test(h));
            if (idx !== -1 && idx < oldRow.length) return oldRow[idx];
          }
          return '—';
        };

        const num = getVal(['^#$']);
        const date = getVal(['Tarih']);
        const subject = getVal(['Yazı', 'Başlık', 'Konu']);
        const category = getVal(['Eksen', 'Kategori']);
        const version = getVal(['Yazar v.']) !== '—' ? getVal(['Yazar v.']) : 'v0.1';
        const aforizma = getVal(['Aforizma']) !== '—' ? getVal(['Aforizma']) : '—';
        const manifesto = getVal(['Manifesto']);
        const anekdot = getVal(['Anekdot']);
        const acilis = getVal(['Açılış']);
        const titleStyle = getVal(['Kapanış', 'Başlık tipi']);
        const mevsim = getVal(['Mevsim']) !== '—' ? getVal(['Mevsim']) : '—';
        const notes = getVal(['Notlar', 'Not']);

        newRows.push(`| ${num} | ${date} | ${subject} | ${category} | ${version} | ${aforizma} | ${manifesto} | ${anekdot} | ${acilis} | ${titleStyle} | ${mevsim} | ${notes} |`);
      }

      // Generate standard table text
      const newTable = [
        '## Schema',
        '',
        EXPECTED_HEADER,
        EXPECTED_SEPARATOR,
        ...newRows
      ].join('\n');

      // Replace old table in lines
      lines.splice(tableStartIndex, tableEndIndex - tableStartIndex + 1, newTable);
    }
  }

  // If no schema table was found at all, let's inject one under a "## Schema" header
  const newFullText = lines.join('\n');
  if (!newFullText.includes(EXPECTED_HEADER)) {
    console.log(`  No schema table found. Appending empty schema...`);
    // Find a good place to insert: right after the intro block, or before any "## Cooldown"
    const cooldownMatch = newFullText.match(/(^|\n)(##\s+Cooldown)/i);
    const emptyTable = `\n## Schema\n\n${EXPECTED_HEADER}\n${EXPECTED_SEPARATOR}\n| 1 | 2026-05-02 | — | — | v0.1 | — | — | — | — | — | — | Log başlangıcı |`;
    
    if (cooldownMatch) {
      text = newFullText.replace(/(^|\n)(##\s+Cooldown)/i, (m, pre, h) => `${pre}${emptyTable}\n\n${h}`);
    } else {
      text = newFullText + `\n\n${emptyTable}`;
    }
    fs.writeFileSync(logPath, text, 'utf8');
  } else {
    fs.writeFileSync(logPath, newFullText, 'utf8');
  }
}

console.log('Article logs fix-up complete.');
