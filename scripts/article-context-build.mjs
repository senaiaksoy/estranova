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
import Ajv from 'ajv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const PROFILE_SCHEMA_PATH = path.join(
  REPO_ROOT,
  'writers',
  '_schema',
  'profile.schema.json',
);

function fail(message) {
  console.error('HATA: ' + message);
  process.exit(1);
}

function isWithin(base, target) {
  const rel = path.relative(base, target);
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

function resolveContained(base, from, configuredPath, label) {
  if (typeof configuredPath !== 'string' || !configuredPath.trim()) {
    fail(label + ' yolu eksik veya string değil.');
  }
  if (path.isAbsolute(configuredPath)) {
    fail(label + ' mutlak yol olamaz.');
  }
  const resolved = path.resolve(from, configuredPath);
  if (!isWithin(path.resolve(base), resolved)) {
    fail(label + ' izin verilen kökün dışına çıkamaz.');
  }
  return resolved;
}

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

const writerSlug = values.writer.trim();
const topic = values.topic.toLowerCase().trim();
if (!/^[a-z0-9-]+$/.test(writerSlug)) fail('Geçersiz yazar slug.');
if (!topic || topic.length > 160) fail('Geçersiz konu değeri.');

const writersRoot = path.join(REPO_ROOT, 'writers');
const writerDir = resolveContained(
  writersRoot,
  writersRoot,
  writerSlug,
  'Yazar klasörü',
);

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
if (profile?.private_seed_policy || writerSlug === 'sanem-altan') {
  const profileSchema = JSON.parse(
    fs.readFileSync(PROFILE_SCHEMA_PATH, 'utf8'),
  );
  const validateProfile = new Ajv({ allErrors: true, strict: false }).compile(
    profileSchema,
  );
  if (!validateProfile(profile)) {
    const details = (validateProfile.errors || [])
      .map(
        (error) =>
          (error.instancePath || '/') + ' ' + error.message,
      )
      .join('; ');
    fail('profile.schema doğrulaması başarısız: ' + details);
  }
}
if (profile?.slug !== writerSlug) {
  fail('Profil slug değeri istenen yazarla eşleşmiyor.');
}

const resolveWriterPath = (configuredPath, label) =>
  resolveContained(writerDir, writerDir, configuredPath, label);
const resolveRepoPathFromWriter = (configuredPath, label) =>
  resolveContained(REPO_ROOT, writerDir, configuredPath, label);

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
  if (!profile.file_layout?.[file] && !['hot', 'warm', 'cold', 'hidden'].includes(file)) {
    fail('section_index.' + sec + ' geçersiz dosya anahtarı içeriyor.');
  }
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
  ? resolveRepoPathFromWriter(profile.dynamics.log_path, 'dynamics.log_path')
  : path.join(REPO_ROOT, 'icerik', 'yazar-onaylari', writerSlug, 'article-log.md');

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
    .filter((line) => {
      if (!line.startsWith('|') || line.includes('---')) return false;
      const cells = line.split('|').map((cell) => cell.trim()).filter(Boolean);
      return /^\d+$/.test(cells[0] || '');
    });

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
    ? resolveWriterPath(
        profile.citations.canonical_sources,
        'citations.canonical_sources',
      )
    : null,
  extended: profile.citations?.extended
    ? resolveWriterPath(profile.citations.extended, 'citations.extended')
    : null,
  pending: profile.citations?.pending
    ? resolveWriterPath(profile.citations.pending, 'citations.pending')
    : null,
  frequency_rule: profile.citations?.frequency_rule || null,
};

// ---- Aphorism pool path (filtreleme AI'a bırakılır v0'da) ----
const aphorismPoolPath = profile.file_layout?.aphorism_pool
  ? resolveWriterPath(
      profile.file_layout.aphorism_pool,
      'file_layout.aphorism_pool',
    )
  : null;

// ---- private seed policy (notice only; raw bank is NEVER auto-loaded) ----
const privateSeedPolicy = profile.private_seed_policy || null;
if (privateSeedPolicy?.enabled === true && privateSeedPolicy.auto_load !== false) {
  console.error('HATA: private_seed_policy.auto_load false olmalı. Özel banka otomatik yüklenemez.');
  process.exit(1);
}
if (privateSeedPolicy?.enabled === true) {
  if (
    privateSeedPolicy.draft_mode !== 'internal_author_review_only' ||
    privateSeedPolicy.publication_gate !== 'explicit_author_approval' ||
    privateSeedPolicy.synthetic_first_person !== 'internal_draft_only' ||
    privateSeedPolicy.third_party_consent_required !== true ||
    privateSeedPolicy.public_log_detail !== 'opaque_ids_and_status_only'
  ) {
    fail('private_seed_policy güvenlik kapıları eksik veya geçersiz.');
  }
}

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
          ? resolveWriterPath(profile.file_layout[file], 'file_layout.' + file)
          : path.join(writerDir, `${file}.md`),
        sections,
      },
    ]),
  ),
  always_load: {
    profile_yaml: profileYamlPath,
    hot: resolveWriterPath(
      profile.file_layout?.hot || './hot.md',
      'file_layout.hot',
    ),
  },
  cooldown,
  dual_role_warning: {
    active: dualRoleActive,
    notice: dualRoleActive
      ? `KRİTİK SINIR: ${
          profile.dual_role_warning?.description
            ? profile.dual_role_warning.description.trim().replace(/\s+/g, ' ')
            : 'Kamusal olmayan özel bilgi yalnız kontrollü yazar-inceleme akışında kullanılabilir.'
        } Tam özel banka otomatik yüklenmez. hidden.md §5c-ek detayı.`
      : null,
  },
  private_seed_policy: privateSeedPolicy?.enabled === true
    ? {
        enabled: true,
        auto_load: false,
        draft_mode: privateSeedPolicy.draft_mode,
        publication_gate: privateSeedPolicy.publication_gate,
        loader_command:
          'npm run writer:seed -- --writer ' + writerSlug + ' --seed-id <kimlik>',
        notice:
          'Yalnız açıkça seçilen tek redakte seed iç yazar-inceleme taslağına alınabilir; ' +
          'ham banka, özel ayrıntı ve banka yolu bu bağlama eklenmez.',
      }
    : {
        enabled: false,
        auto_load: false,
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
    `icerik/yazar-onaylari/${writerSlug}/article-log.md (cooldown)`,
    ...(aphorismPoolPath ? [`${path.relative(REPO_ROOT, aphorismPoolPath).replace(/\\/g, '/')} (aforizma havuzu)`] : []),
    ...(citations.canonical_sources
      ? [`${path.relative(REPO_ROOT, citations.canonical_sources).replace(/\\/g, '/')} (atıf çerçevesi)`]
      : []),
    ...(citations.extended
      ? [`${path.relative(REPO_ROOT, citations.extended).replace(/\\/g, '/')} (onaylı dış kaynaklar)`]
      : []),
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
  if (result.private_seed_policy.enabled) {
    console.log('## Özel seed kapısı');
    console.log(result.private_seed_policy.notice);
    console.log('- Açık seçim: ' + result.private_seed_policy.loader_command);
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
