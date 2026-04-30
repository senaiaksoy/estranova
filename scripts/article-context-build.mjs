#!/usr/bin/env node
/**
 * article-context-build.mjs
 *
 * Estranova makale yazımı için pre-script bağlam derleyicisi.
 *
 * Görev: Konu girdisi + yazar slug → AI prompt'una enjekte edilecek bağlamı
 * derler. profile.yaml'dan section_index, topic_sections, citations,
 * dual_role_warning okur; article-log'tan cooldown listesi çıkarır;
 * konu-tetikli olarak warm.md slice ve hidden.md (Çift Rol aktifse) yükler.
 *
 * Kullanım:
 *   node scripts/article-context-build.mjs --writer gamze-cizreli --topic "uyku"
 *   node scripts/article-context-build.mjs --writer gamze-cizreli --topic "menopoz" --json
 *
 * Çıktı:
 *   - Stdout: insan-okunabilir özet (default)
 *   - --json bayrağı: AI prompt'a pipe edilebilir JSON
 *
 * Bağımlılık: js-yaml (devDependency olarak eklenmeli)
 *   npm install --save-dev js-yaml
 *
 * Detay: docs/ARTICLE-PRODUCTION-SPEC.md Faz 2 + docs/WRITER-DYNAMICS-FRAMEWORK.md
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

// ---- args ----
const { values } = parseArgs({
  options: {
    writer: { type: 'string', short: 'w' },
    topic: { type: 'string', short: 't' },
    json: { type: 'boolean', default: false },
    help: { type: 'boolean', short: 'h', default: false },
  },
});

if (values.help || !values.writer || !values.topic) {
  console.log(`Kullanım: node scripts/article-context-build.mjs --writer <slug> --topic <konu>

  --writer, -w   Yazar slug'ı (örn. gamze-cizreli)
  --topic, -t    Konu kelimesi (örn. uyku, menopoz, sabah, mutfak)
  --json         Çıktıyı JSON olarak ver (AI prompt'a pipe edilebilir)
  --help, -h     Bu mesaj

Örnek:
  node scripts/article-context-build.mjs --writer gamze-cizreli --topic uyku
  node scripts/article-context-build.mjs --writer gamze-cizreli --topic menopoz --json
`);
  process.exit(values.help ? 0 : 1);
}

const writerSlug = values.writer;
const topic = values.topic.toLowerCase().trim();
const writerDir = path.join(REPO_ROOT, 'writers', writerSlug);

// ---- existence check ----
if (!fs.existsSync(writerDir)) {
  console.error(`HATA: Yazar klasörü bulunamadı: ${writerDir}`);
  console.error(`Modüler yazar profili henüz oluşturulmamış olabilir; legacy tek-dosya kullanın veya migration yapın.`);
  process.exit(1);
}

const profileYamlPath = path.join(writerDir, 'profile.yaml');
if (!fs.existsSync(profileYamlPath)) {
  console.error(`HATA: profile.yaml bulunamadı: ${profileYamlPath}`);
  process.exit(1);
}

// ---- YAML parse (lazy import — bağımlılığı opsiyonel tut) ----
let yaml;
try {
  yaml = (await import('js-yaml')).default;
} catch (err) {
  console.error(`HATA: js-yaml bağımlılığı kurulu değil.`);
  console.error(`Lütfen şu komutu çalıştırın: npm install --save-dev js-yaml`);
  process.exit(1);
}

const profile = yaml.load(fs.readFileSync(profileYamlPath, 'utf8'));

// ---- topic eşleme ----
const topicSections = profile.topic_sections || {};
const matchedSections = topicSections[topic] || null;

if (!matchedSections) {
  // fallback: eksen-bağımsız temel bölümler
  console.error(
    `UYARI: '${topic}' topic_sections'da yok. Default temel bölümler kullanılacak.`,
  );
}

const sectionsToLoad = matchedSections || ['§4', '§4a', '§5a', '§13'];

// ---- section_index → dosya/anchor ----
const sectionIndex = profile.section_index || {};
const filesToLoad = new Map(); // file → [section, ...]

for (const sec of sectionsToLoad) {
  const entry = sectionIndex[sec];
  if (!entry) {
    console.error(`UYARI: Section ${sec} section_index'te bulunamadı, atlandı.`);
    continue;
  }
  const file = entry.file;
  if (!filesToLoad.has(file)) filesToLoad.set(file, []);
  filesToLoad.get(file).push({ section: sec, anchor: entry.anchor, title: entry.title });
}

// ---- hot.md her zaman zorunlu ----
if (!filesToLoad.has('hot')) filesToLoad.set('hot', []);

// ---- Çift Rol aktifse hidden.md eklenir ----
const dualRoleActive = profile.dual_role_warning?.active === true;
if (dualRoleActive && !filesToLoad.has('hidden')) {
  filesToLoad.set('hidden', [{ section: '§5c-ek', anchor: 'cift-rol-uyarisi', title: 'Çift Rol Uyarısı' }]);
}

// ---- article log → cooldown ----
const logPath = profile.dynamics?.log_path
  ? path.resolve(writerDir, profile.dynamics.log_path)
  : path.join(REPO_ROOT, 'writers', `${writerSlug}-article-log.md`);

let cooldown = {
  aphorism: [],
  manifesto: [],
  mevlana_metaphor: [],
  title_type: [],
  opening: [],
  season: [],
  anekdot_combo: [],
};

if (fs.existsSync(logPath)) {
  const logContent = fs.readFileSync(logPath, 'utf8');
  // Tablo satırlarını parse et (pipe-delimited)
  const tableLines = logContent
    .split('\n')
    .filter((l) => l.startsWith('|') && !l.includes('---') && !l.match(/^\|\s*#\s*\|/));

  // Schema: # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar
  const recentRows = tableLines.slice(-10); // son 10 satır

  // Cooldown defaults (profile override hesabıyla):
  const overrides = profile.dynamics?.cooldown_overrides || {};
  const defaults = {
    aphorism: 6,
    manifesto: 4,
    title_type: 3,
    opening: 4,
    season: 4,
    anekdot_combo: 2,
  };
  const cd = { ...defaults, ...overrides };

  // Son N satır → cooldown listeleri
  const lastN = (n) => recentRows.slice(-n);
  const exempt = new Set(profile.dynamics?.cooldown_exempt || []);

  for (const row of lastN(cd.aphorism)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[5] && cells[5] !== '—' && !exempt.has(cells[5])) cooldown.aphorism.push(cells[5]);
  }
  for (const row of lastN(cd.manifesto)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[6] && cells[6] !== '—' && !exempt.has(cells[6])) cooldown.manifesto.push(cells[6]);
  }
  for (const row of lastN(cd.title_type)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[9] && cells[9] !== '—') cooldown.title_type.push(cells[9]);
  }
  for (const row of lastN(cd.opening)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[8] && cells[8] !== '—') cooldown.opening.push(cells[8]);
  }
  for (const row of lastN(cd.season)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[10] && cells[10] !== '—') cooldown.season.push(cells[10]);
  }
  for (const row of lastN(cd.anekdot_combo)) {
    const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells[7] && cells[7] !== '—') cooldown.anekdot_combo.push(cells[7]);
  }
}

// ---- citations paths ----
const citations = {
  canonical_sources: profile.citations?.canonical_sources
    ? path.resolve(writerDir, profile.citations.canonical_sources)
    : null,
  extended: profile.citations?.extended
    ? path.resolve(writerDir, profile.citations.extended)
    : null,
  pending: profile.citations?.pending
    ? path.resolve(writerDir, profile.citations.pending)
    : null,
  frequency_rule: profile.citations?.frequency_rule || null,
};

// ---- Aphorism pool path (filtreleme AI'a bırakılır v0'da) ----
const aphorismPoolPath = profile.file_layout?.aphorism_pool
  ? path.resolve(writerDir, profile.file_layout.aphorism_pool)
  : null;

// ---- output ----
const result = {
  writer: {
    slug: writerSlug,
    display_name: profile.display_name,
    writer_version: profile.writer_version,
    writer_protocol_version: profile.writer_protocol_version,
  },
  topic,
  topic_match: matchedSections ? 'exact' : 'fallback-default',
  files_to_load: Object.fromEntries(
    [...filesToLoad.entries()].map(([file, sections]) => [
      file,
      {
        path: profile.file_layout?.[file]
          ? path.resolve(writerDir, profile.file_layout[file])
          : path.join(writerDir, `${file}.md`),
        sections,
      },
    ]),
  ),
  always_load: {
    profile_yaml: profileYamlPath,
    hot: path.resolve(writerDir, profile.file_layout?.hot || './hot.md'),
  },
  cooldown,
  dual_role_warning: {
    active: dualRoleActive,
    notice: dualRoleActive
      ? `KRİTİK SINIR: ${
          profile.dual_role_warning?.description
            ? profile.dual_role_warning.description.trim().replace(/\s+/g, ' ')
            : 'Editör bu yazarın gerçek hekimidir/yakınıdır.'
        } Muayene odası bilgisi taslağa SIZMAZ. hidden.md §5c-ek detayı.`
      : null,
  },
  citations,
  aphorism_pool: aphorismPoolPath,
  article_log: logPath,
  priority_chain: [
    'CLAUDE.md HARD CONSTRAINTS §1-§6',
    'docs/ARTICLE-PRODUCTION-SPEC.md §0.5 Faz 2',
    `writers/${writerSlug}/profile.yaml + hot.md`,
    `writers/${writerSlug}/warm.md (konu-tetikli)`,
    `writers/${writerSlug}/hidden.md (Çift Rol aktifse)`,
    `writers/${writerSlug}-article-log.md (cooldown)`,
    ...(aphorismPoolPath ? [`${path.relative(REPO_ROOT, aphorismPoolPath).replace(/\\/g, '/')} (aforizma havuzu)`] : []),
    `writers/${writerSlug}/citations/canonical-sources.md (atıf çerçevesi)`,
  ],
};

// ---- emit ----
if (values.json) {
  process.stdout.write(JSON.stringify(result, null, 2));
  process.stdout.write('\n');
} else {
  console.log(`# Estranova Makale Bağlamı — ${result.writer.display_name}`);
  console.log('');
  console.log(`**Konu:** ${result.topic}`);
  console.log(`**Yazar:** ${result.writer.display_name} (${result.writer.writer_version}, protocol ${result.writer.writer_protocol_version})`);
  console.log(`**Topic eşleşmesi:** ${result.topic_match}`);
  console.log('');
  console.log('## Yüklenecek dosyalar');
  for (const [file, info] of Object.entries(result.files_to_load)) {
    console.log(`- **${file}.md** → ${info.sections.length} bölüm: ${info.sections.map((s) => s.section).join(', ')}`);
  }
  console.log('');
  console.log('## Cooldown listesi (bu makalede YASAK)');
  console.log(`- Aforizma: ${cooldown.aphorism.length ? cooldown.aphorism.join(', ') : '(yok)'}`);
  console.log(`- Manifesto: ${cooldown.manifesto.length ? cooldown.manifesto.join(', ') : '(yok)'}`);
  console.log(`- Başlık tipi: ${cooldown.title_type.length ? cooldown.title_type.join(', ') : '(yok)'}`);
  console.log(`- Açılış: ${cooldown.opening.length ? cooldown.opening.join(', ') : '(yok)'}`);
  console.log(`- Mevsim: ${cooldown.season.length ? cooldown.season.join(', ') : '(yok)'}`);
  console.log(`- Anekdot kombosu: ${cooldown.anekdot_combo.length ? cooldown.anekdot_combo.join(', ') : '(yok)'}`);
  console.log('');
  if (result.dual_role_warning.active) {
    console.log('## ⚠ Çift Rol Uyarısı AKTİF');
    console.log(result.dual_role_warning.notice);
    console.log('');
  }
  console.log('## Atıf çerçevesi');
  if (citations.canonical_sources) console.log(`- Canonical (whitelist): ${path.relative(REPO_ROOT, citations.canonical_sources)}`);
  if (citations.extended) console.log(`- Extended (onaylı): ${path.relative(REPO_ROOT, citations.extended)}`);
  if (citations.pending) console.log(`- Pending (editör kuyruğu): ${path.relative(REPO_ROOT, citations.pending)}`);
  if (citations.frequency_rule) console.log(`- Frekans kuralı: ${JSON.stringify(citations.frequency_rule)}`);
  console.log('');
  console.log('## Çelişki çözüm zinciri');
  result.priority_chain.forEach((item, i) => console.log(`${i + 1}. ${item}`));
  console.log('');
  console.log('---');
  console.log('JSON çıktı için: --json bayrağı ekle');
}
