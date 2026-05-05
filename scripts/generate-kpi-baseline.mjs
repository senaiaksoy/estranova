import fs from 'node:fs';
import path from 'node:path';

function getArg(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

const inputArg = getArg('--input') || 'docs/kpi/baseline-input.json';
const outputArg = getArg('--output') || 'docs/kpi/sprint1-kpi-baseline.md';
const labelArg = getArg('--label') || 'Sprint 1 KPI Baseline';

const root = process.cwd();
const inputPath = path.join(root, inputArg);
const outputPath = path.join(root, outputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`ERROR: Input file not found: ${inputArg}`);
  process.exit(1);
}

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const reportDate = input.reportDate || new Date().toISOString().slice(0, 10);
const periodLabel = input.periodLabel || 'Haftalık Ölçüm';

const metrics = [
  ['Organik Oturum', input.organicSessions ?? '-'],
  ['İçerik CTR', input.contentCtr ?? '-'],
  ['%75 Scroll', input.scroll75 ?? '-'],
  ['İç Link Tıklama', input.internalLinkClicks ?? '-'],
  ['Compliance Hata Sayısı', input.complianceErrors ?? '-'],
];

const notes = Array.isArray(input.notes) ? input.notes : [];
const nextReviewDate = input.nextReviewDate || '-';

const markdown = [
  `# ${labelArg}`,
  '',
  `- Dönem: ${periodLabel}`,
  `- Rapor Tarihi: ${reportDate}`,
  `- Kaynak Veri: \`${inputArg}\``,
  '',
  '## Metrikler',
  '',
  '| KPI | Değer |',
  '|---|---|',
  ...metrics.map(([name, value]) => `| ${name} | ${value} |`),
  '',
  '## Notlar',
  ...(notes.length > 0 ? notes.map((note) => `- ${note}`) : ['- Ölçüm notu girilmedi.']),
  '',
  '## Sonraki Ölçüm',
  '',
  `- Planlanan Tarih: ${nextReviewDate}`,
  '',
  '## Tekrar Üretim',
  '',
  `- Komut: \`node scripts/generate-kpi-baseline.mjs --input ${inputArg} --output ${outputArg} --label "${labelArg}"\``,
  '',
].join('\n');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, markdown, 'utf8');

console.log(`KPI baseline report generated: ${outputArg}`);
