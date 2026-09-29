// Makale tarih tutarlılığı: static-articles.ts manifesti ↔ buildArticleSchemas ↔ ArticleAuthorBlock.
// Hata: manifest ile şema yayın tarihi ayrışırsa, byline şemadan farklı tarih gösterirse,
// Türkçe ay adı çözülemezse (ör. "Mayis") veya dateModified < datePublished olursa.
// Uyarı: zamanlama listesinde olmayan gelecek tarih.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

const TR_MONTHS = {
  ocak: '01', şubat: '02', mart: '03', nisan: '04', mayıs: '05', haziran: '06',
  temmuz: '07', ağustos: '08', eylül: '09', ekim: '10', kasım: '11', aralık: '12',
};

function toISO(input) {
  if (input === undefined) return undefined;
  if (/^\d{4}-\d{2}-\d{2}/.test(input)) return input.slice(0, 10);
  const parts = input.trim().toLowerCase().split(/\s+/);
  if (parts.length === 3 && TR_MONTHS[parts[1]]) return `${parts[2]}-${TR_MONTHS[parts[1]]}-${parts[0].padStart(2, '0')}`;
  return null;
}

function todayInTurkey() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(new Date());
}

const entries = [];
for (const block of read('src/data/static-articles.ts').split(/\n\s*\{\s*\n/).slice(1)) {
  const p = block.match(/path:\s*'([^']+)'/);
  const d = block.match(/publishedDate:\s*'([^']+)'/);
  if (p && d) entries.push({ path: p[1], published: d[1] });
}

const scheduled = new Set(
  [...read('src/data/scheduled-releases.mjs').matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]),
);

function pageFile(route) {
  const flat = `src/pages${route.replace(/\/$/, '')}.astro`;
  const index = `src/pages${route}index.astro`;
  if (fs.existsSync(path.join(root, flat))) return flat;
  if (fs.existsSync(path.join(root, index))) return index;
  return null;
}

const errors = [];
const warnings = [];
const today = todayInTurkey();

for (const entry of entries) {
  const file = pageFile(entry.path);
  if (!file) {
    errors.push(`${entry.path}: manifestte var ama sayfa dosyası bulunamadı`);
    continue;
  }
  const src = read(file);
  const constValue = (name) =>
    src.match(new RegExp(String.raw`const\s+${name}\s*=\s*['"]([^'"]+)['"]`))?.[1];
  const call = src.match(/buildArticleSchemas\(\{[\s\S]*?\n\s*\}\)/)?.[0] ?? '';
  // İçerik koleksiyonundan beslenen sayfa: tarihler frontmatter'dan gelir, byline
  // aynı alanları formatDate ile basar; bu yüzden yalnızca şema ↔ manifest denetlenir.
  const entryId = src.match(/getEntry\(\s*'blog'\s*,\s*'([^']+)'\s*\)/)?.[1];
  let frontmatter = '';
  if (entryId) {
    const dir = path.join(root, 'src/content/blog');
    const name = fs.readdirSync(dir).find((f) => f.replace(/\.mdx?$/, '') === entryId);
    if (name) frontmatter = fs.readFileSync(path.join(dir, name), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  }
  const frontmatterValue = (field) =>
    frontmatter.match(new RegExp(String.raw`^${field}:\s*["']?([^"'\r\n]+)["']?\s*$`, 'm'))?.[1];
  const byline = entryId ? '' : (src.match(/<ArticleAuthorBlock[\s\S]*?\/>/)?.[0] ?? '');
  const schemaValue = (key) => {
    const data = call.match(new RegExp(String.raw`\b${key}\s*:\s*post\.data\.(\w+)`));
    if (data) return frontmatterValue(data[1]);
    const m = call.match(new RegExp(String.raw`\b${key}\s*(?::\s*(?:['"]([^'"]+)['"]|(\w+))|,)`));
    return m ? (m[1] ?? constValue(m[2] ?? key)) : undefined;
  };
  const bylineValue = (key) => {
    const m = byline.match(new RegExp(String.raw`\b${key}=(?:["']([^"']+)["']|\{(\w+)\})`));
    return m ? (m[1] ?? constValue(m[2])) : undefined;
  };

  const raw = {
    manifest: entry.published,
    schemaPublished: schemaValue('publishedDate'),
    schemaModified: schemaValue('modifiedDate'),
    bylinePublished: bylineValue('publishedDate'),
    bylineUpdated: bylineValue('lastUpdated'),
  };
  const iso = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, toISO(v)]));
  const label = `${entry.path} (${file})`;

  for (const [key, value] of Object.entries(iso)) {
    if (value === null) errors.push(`${label}: ${key} çözülemedi → "${raw[key]}" (Türkçe ay adını kontrol edin)`);
  }
  if (!call) continue;
  if (raw.schemaPublished === undefined) {
    errors.push(`${label}: buildArticleSchemas publishedDate okunamadı`);
    continue;
  }
  if (iso.manifest && iso.schemaPublished && iso.manifest !== iso.schemaPublished) {
    errors.push(`${label}: manifest "${raw.manifest}" ≠ şema "${raw.schemaPublished}"`);
  }
  if (byline && iso.bylinePublished !== iso.schemaPublished) {
    errors.push(`${label}: byline yayın tarihi "${raw.bylinePublished}" ≠ şema "${raw.schemaPublished}"`);
  }
  if (byline && (iso.bylineUpdated ?? null) !== (iso.schemaModified ?? null)) {
    errors.push(`${label}: byline lastUpdated "${raw.bylineUpdated ?? '-'}" ≠ şema modifiedDate "${raw.schemaModified ?? '-'}"`);
  }
  if (iso.schemaModified && iso.schemaPublished && iso.schemaModified < iso.schemaPublished) {
    errors.push(`${label}: modifiedDate yayın tarihinden önce`);
  }
  const latest = [iso.manifest, iso.schemaPublished, iso.schemaModified].filter(Boolean).sort().pop();
  if (latest && latest > today && !scheduled.has(entry.path)) {
    warnings.push(`${label}: gelecek tarih ${latest}, scheduled-releases listesinde yok`);
  }
}

for (const w of warnings) console.warn(`check-article-dates: UYARI ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`check-article-dates: HATA ${e}`);
  console.error(`check-article-dates: ${errors.length} hata (${entries.length} makale tarandı).`);
  process.exit(1);
}
console.log(`check-article-dates: ${entries.length} makale tutarlı.`);
