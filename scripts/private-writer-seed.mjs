#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import Ajv from 'ajv';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const REPO_REAL = fs.realpathSync.native(REPO_ROOT);
const SEED_SCHEMA_PATH = path.join(
  REPO_ROOT,
  'writers',
  '_schema',
  'private-writer-seed-bank.schema.json',
);

const { values } = parseArgs({
  options: {
    writer: { type: 'string', short: 'w' },
    'seed-id': { type: 'string' },
    article: { type: 'string' },
    'draft-hash': { type: 'string' },
    json: { type: 'boolean', default: false },
    help: { type: 'boolean', short: 'h', default: false },
  },
});

function fail(message) {
  console.error('HATA: ' + message);
  process.exit(1);
}

function isWithin(base, target) {
  const rel = path.relative(base, target);
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

function resolveWithin(base, relativePath, label) {
  if (typeof relativePath !== 'string' || !relativePath.trim()) {
    fail(label + ' yolu eksik.');
  }
  if (path.isAbsolute(relativePath)) {
    fail(label + ' mutlak yol olamaz.');
  }
  const resolved = path.resolve(base, relativePath);
  if (!isWithin(path.resolve(base), resolved)) {
    fail(label + ' izin verilen kökün dışına çıkamaz.');
  }
  return resolved;
}

function assertNoSymlinkSegments(base, target) {
  const absoluteBase = path.resolve(base);
  const absoluteTarget = path.resolve(target);
  if (!isWithin(absoluteBase, absoluteTarget)) {
    fail('Özel kasa yolu izin verilen kökün dışına çıkıyor.');
  }

  const candidates = [absoluteBase];
  let current = absoluteBase;
  const rel = path.relative(absoluteBase, absoluteTarget);
  if (rel) {
    for (const segment of rel.split(path.sep)) {
      current = path.join(current, segment);
      candidates.push(current);
    }
  }

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    if (fs.lstatSync(candidate).isSymbolicLink()) {
      fail('Özel kasa yolunda sembolik bağlantı/junction kullanılamaz.');
    }
  }
}

function assertGitSafe(target) {
  const absoluteTarget = path.resolve(target);
  if (!isWithin(REPO_ROOT, absoluteTarget)) return;

  const rel = path.relative(REPO_ROOT, absoluteTarget).replace(/\\/g, '/');
  const tracked = spawnSync('git', ['ls-files', '--error-unmatch', '--', rel], {
    cwd: REPO_ROOT,
    stdio: 'ignore',
  });
  if (tracked.status === 0) {
    fail('Özel kasa hedefi Git tarafından izleniyor; işlem durduruldu.');
  }

  const ignored = spawnSync('git', ['check-ignore', '-q', '--', rel], {
    cwd: REPO_ROOT,
    stdio: 'ignore',
  });
  if (ignored.status !== 0) {
    fail('Özel kasa hedefi .gitignore kapsamında değil; işlem durduruldu.');
  }
}

function formatSchemaErrors(errors) {
  return (errors || [])
    .slice(0, 8)
    .map((error) => (error.instancePath || '/') + ' ' + error.message)
    .join('; ');
}

function validateUsageLog(log, writerSlug) {
  if (!log || typeof log !== 'object' || Array.isArray(log)) {
    throw new Error('Kullanım günlüğü nesne olmalı.');
  }
  if (log.schema_version !== '1.0') {
    throw new Error('Kullanım günlüğü schema_version 1.0 olmalı.');
  }
  if (log.classification !== 'restricted_personal') {
    throw new Error('Kullanım günlüğü classification restricted_personal olmalı.');
  }
  if (log.author_id !== writerSlug) {
    throw new Error('Kullanım günlüğü başka bir yazara ait.');
  }
  if (log.public_git_allowed !== false || log.append_only !== true) {
    throw new Error('Kullanım günlüğü güvenlik bayrakları geçersiz.');
  }
  if (!Array.isArray(log.usage_events)) {
    throw new Error('Kullanım günlüğü usage_events dizisi içermeli.');
  }
}

if (values.help || !values.writer || !values['seed-id']) {
  console.log(
    'Kullanım: npm run writer:seed -- --writer <slug> --seed-id <kimlik> ' +
      '[--article <slug>] [--draft-hash <sha256>] [--json]',
  );
  console.log('');
  console.log(
    'Araç tam özel bankayı listelemez. Yalnız açıkça seçilen, redakte edilmiş',
  );
  console.log(
    'tek kaydı iç yazar-inceleme taslağı için verir ve kullanım olayını kaydeder.',
  );
  process.exit(values.help ? 0 : 1);
}

const writerSlug = values.writer.trim();
const seedId = values['seed-id'].trim();
const articleSlug = values.article?.trim() || 'unassigned-draft';
const draftHash = values['draft-hash']?.trim().toLowerCase() || null;

if (!/^[a-z0-9-]+$/.test(writerSlug)) fail('Geçersiz yazar slug.');
if (!/^[A-Z0-9-]+$/.test(seedId)) fail('Geçersiz seed kimliği.');
if (!/^[a-z0-9][a-z0-9/-]{0,159}$/.test(articleSlug)) {
  fail('Geçersiz makale slug.');
}
if (draftHash && !/^[a-f0-9]{64}$/.test(draftHash)) {
  fail('draft-hash 64 karakterlik SHA-256 olmalı.');
}

const writerDir = resolveWithin(
  path.join(REPO_ROOT, 'writers'),
  writerSlug,
  'Yazar klasörü',
);
const profilePath = path.join(writerDir, 'profile.yaml');
if (!fs.existsSync(profilePath)) fail('Yazar profili bulunamadı.');

const profile = yaml.load(fs.readFileSync(profilePath, 'utf8'));
if (profile?.slug !== writerSlug) {
  fail('Profil slug değeri istenen yazarla eşleşmiyor.');
}

const policy = profile?.private_seed_policy;
if (policy?.enabled !== true) {
  fail('Bu yazar için özel seed politikası aktif değil.');
}
if (policy.auto_load !== false) {
  fail('Güvenlik ihlali: private_seed_policy.auto_load false olmalı.');
}
if (policy.draft_mode !== 'internal_author_review_only') {
  fail('Özel seed yalnız internal_author_review_only modunda kullanılabilir.');
}
if (policy.publication_gate !== 'explicit_author_approval') {
  fail('Özel seed için explicit_author_approval yayın kapısı zorunludur.');
}
if (policy.synthetic_first_person !== 'internal_draft_only') {
  fail('Kurgusal birinci tekil yalnız internal_draft_only olabilir.');
}
if (policy.third_party_consent_required !== true) {
  fail('Üçüncü kişi rıza kapısı aktif olmalı.');
}
if (policy.public_log_detail !== 'opaque_ids_and_status_only') {
  fail('Kamusal log yalnız opak kimlik ve durum tutabilir.');
}

const envName = policy.environment_variable;
if (!/^[A-Z][A-Z0-9_]+$/.test(envName || '')) {
  fail('Geçersiz özel kasa ortam değişkeni adı.');
}

const configuredRootValue = process.env[envName]?.trim() || null;
if (policy.storage === 'external_only' && !configuredRootValue) {
  fail(policy.storage + ' için ' + envName + ' zorunludur.');
}
if (!['local_ignored_or_external', 'external_only'].includes(policy.storage)) {
  fail('Geçersiz private_seed_policy.storage.');
}

let privateRoot;
let privateWriterDir;
if (configuredRootValue) {
  privateRoot = path.resolve(configuredRootValue);
  privateWriterDir = resolveWithin(privateRoot, writerSlug, 'Harici yazar kasası');
} else {
  const expectedLocalPath = path
    .join('private-writer-context', writerSlug)
    .replace(/\\/g, '/');
  if (policy.default_local_path !== expectedLocalPath) {
    fail('default_local_path yazar slug ile eşleşen private-writer-context yolu olmalı.');
  }
  privateRoot = REPO_ROOT;
  privateWriterDir = resolveWithin(
    REPO_ROOT,
    policy.default_local_path,
    'Yerel özel kasa',
  );
}

assertNoSymlinkSegments(privateRoot, privateWriterDir);
if (!fs.existsSync(privateWriterDir)) {
  fail('Özel yazar kasası bulunamadı.');
}

const privateWriterReal = fs.realpathSync.native(privateWriterDir);
const privateRootReal = fs.realpathSync.native(privateRoot);
if (!isWithin(privateRootReal, privateWriterReal)) {
  fail('Özel yazar kasasının gerçek yolu izin verilen kökün dışında.');
}
if (policy.storage === 'external_only' && isWithin(REPO_REAL, privateWriterReal)) {
  fail('external_only özel kasa repo içinde olamaz.');
}

const seedPath = path.join(privateWriterDir, 'seeds.yaml');
const usagePath = path.join(privateWriterDir, 'usage-log.yaml');
const lockPath = path.join(privateWriterDir, '.usage-log.lock');

assertGitSafe(seedPath);
assertGitSafe(usagePath);
assertGitSafe(lockPath);
assertNoSymlinkSegments(privateRoot, seedPath);
assertNoSymlinkSegments(privateRoot, usagePath);

if (!fs.existsSync(seedPath)) {
  fail(
    'Özel seed bankası bulunamadı. Yerel kasa yolunu veya ' +
      envName +
      ' değerini kontrol edin.',
  );
}

const seedReal = fs.realpathSync.native(seedPath);
if (!isWithin(privateWriterReal, seedReal)) {
  fail('Seed bankasının gerçek yolu yazar kasasının dışında.');
}

const bank = yaml.load(fs.readFileSync(seedPath, 'utf8'));
const seedSchema = JSON.parse(fs.readFileSync(SEED_SCHEMA_PATH, 'utf8'));
const validateBank = new Ajv({ allErrors: true, strict: false }).compile(
  seedSchema,
);
if (!validateBank(bank)) {
  fail('Özel seed bankası şema hatası: ' + formatSchemaErrors(validateBank.errors));
}
if (bank.author_id !== writerSlug) {
  fail('Özel seed bankası başka bir yazara ait.');
}

const seedIds = bank.seeds.map((item) => item.id);
if (new Set(seedIds).size !== seedIds.length) {
  fail('Özel seed bankasında yinelenen seed kimliği var.');
}

const seed = bank.seeds.find((item) => item.id === seedId);
if (!seed) {
  fail('Seed bulunamadı. Araç güvenlik nedeniyle banka listesini göstermez.');
}

const loadableStatuses = new Set([
  'pending_author_confirmation',
  'author_approved',
  'draft_allowed',
]);
if (!loadableStatuses.has(seed.status)) {
  fail('Seed kullanıma kapalı: ' + seed.status);
}
const draftFictionalizationModes = new Set([
  'deidentified_draft',
  'deidentified_composite',
  'fictional_theme_only',
  'theme_only',
]);
if (!draftFictionalizationModes.has(seed.fictionalization?.mode)) {
  fail('Seed fictionalization.mode iç taslak kullanımına uygun değil.');
}
if (
  seed.kind === 'editor_speculation' ||
  ['speculation_not_fact', 'unverified_causality_claim'].includes(
    seed.truth_status,
  )
) {
  fail('Spekülasyon veya doğrulanmamış nedensellik taslağa yüklenemez.');
}
if (
  seed.status === 'pending_author_confirmation' &&
  (seed.kind !== 'editor_provided_private_lead' ||
    seed.truth_status !== 'unverified_editor_report' ||
    seed.author_confirmed !== false ||
    seed.approvals?.fact_confirmation !== 'pending' ||
    ![seed.approvals?.draft_use, seed.approvals?.author_draft_use].includes(
      'pending',
    ))
) {
  fail('Teyit bekleyen seed durum, gerçeklik ve onay alanlarıyla çelişiyor.');
}
if (
  seed.status === 'draft_allowed' &&
  (seed.kind !== 'fictionalized_draft_seed' ||
    seed.truth_status !== 'fictional_construct' ||
    seed.author_confirmed !== false ||
    seed.use_policy?.fictionalization_allowed !== true ||
    !['pending', 'undecided'].includes(seed.approvals?.author_review))
) {
  fail('Kurgusal taslak seed durum, gerçeklik veya onay alanlarıyla çelişiyor.');
}
if (
  seed.status === 'author_approved' &&
  (seed.kind !== 'author_confirmed_private_seed' ||
    seed.truth_status !== 'author_confirmed' ||
    seed.author_confirmed !== true ||
    seed.approvals?.fact_confirmation !== 'approved' ||
    ![
      seed.approvals?.draft_use,
      seed.approvals?.author_draft_use,
      seed.approvals?.author_review,
    ].includes('approved'))
) {
  fail('Yazar onaylı seed durum, gerçeklik veya onay alanlarıyla çelişiyor.');
}
if (seed.use_policy.internal_author_review_draft !== true) {
  fail('Seed iç yazar-inceleme taslağı için izinli değil.');
}
if (
  seed.use_policy.public_attribution !== false ||
  seed.use_policy.published_first_person !== false
) {
  fail('Seed kamusal atıf veya yayımlanmış birinci tekil için izinli olamaz.');
}
if (
  !seed.sensitivity ||
  !Array.isArray(seed.sensitivity.third_party_subjects)
) {
  fail('Seed sensitivity güvenlik metadatası eksik.');
}
if (seed.sensitivity.third_party_subjects.length > 0) {
  if (
    seed.use_policy.third_party_consent_required !== true ||
    seed.approvals?.third_party_consent !== 'approved'
  ) {
    fail('Üçüncü kişi içeren seed yalnız açık rıza approved olduğunda yüklenebilir.');
  }
}

const usageId = 'USE-' + crypto.randomUUID().toUpperCase();
const usageEvent = {
  usage_id: usageId,
  used_at: new Date().toISOString(),
  writer: writerSlug,
  seed_id: seedId,
  article_slug: articleSlug,
  draft_hash: draftHash,
  use_mode: 'internal_author_review_draft',
  author_decision: 'pending',
  final_status: 'loaded_for_draft',
};

let lockHandle;
let lockAcquired = false;
let logError = null;
let tempPath = null;
try {
  lockHandle = fs.openSync(lockPath, 'wx');
  lockAcquired = true;

  const usageLog = fs.existsSync(usagePath)
    ? yaml.load(fs.readFileSync(usagePath, 'utf8'))
    : {
        schema_version: '1.0',
        classification: 'restricted_personal',
        author_id: writerSlug,
        public_git_allowed: false,
        append_only: true,
        usage_events: [],
      };

  validateUsageLog(usageLog, writerSlug);
  usageLog.usage_events.push(usageEvent);

  tempPath = usagePath + '.tmp-' + process.pid + '-' + crypto.randomUUID();
  fs.writeFileSync(
    tempPath,
    yaml.dump(usageLog, {
      noRefs: true,
      lineWidth: 120,
      quotingType: '"',
    }),
    { encoding: 'utf8', flag: 'wx' },
  );
  fs.renameSync(tempPath, usagePath);
  tempPath = null;
} catch (error) {
  logError = error;
} finally {
  if (tempPath && fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  if (lockHandle !== undefined) fs.closeSync(lockHandle);
  if (lockAcquired && fs.existsSync(lockPath)) fs.unlinkSync(lockPath);
}
if (logError) {
  fail('Kullanım günlüğü güvenli biçimde yazılamadı: ' + logError.message);
}

const result = {
  classification: 'INTERNAL_AUTHOR_REVIEW_ONLY',
  publication_allowed: false,
  public_attribution_allowed: false,
  writer: writerSlug,
  seed_id: seedId,
  usage_id: usageId,
  kind: seed.kind,
  truth_status: seed.truth_status,
  draft_label:
    seed.draft_label ||
    seed.fictionalization?.required_label ||
    'KURGUSAL / YAZAR TEYİDİ BEKLİYOR',
  sanitized_context: seed.sanitized_context.trim(),
  fictionalization: {
    mode: seed.fictionalization.mode,
    required_label: seed.fictionalization.required_label || null,
  },
  required_author_decision: [
    'Gerçek anımı doğru yansıtıyor',
    'Kısmen doğru; düzelttim',
    'Yalnız tema olarak kullanılabilir',
    'Açıkça kompozit sahne olarak kullanılabilir',
    'Tamamen çıkarılsın',
  ],
};

if (values.json) {
  process.stdout.write(JSON.stringify(result, null, 2) + '\n');
} else {
  console.log('# Özel Seed — İç Yazar İncelemesi');
  console.log('');
  console.log('**Yazar:** ' + profile.display_name);
  console.log('**Seed:** ' + seedId);
  console.log('**Kayıt:** ' + usageId);
  console.log('**Etiket:** ' + result.draft_label);
  console.log('');
  console.log(result.sanitized_context);
  console.log('');
  console.log(
    'YAYIN YASAĞI: ' +
      profile.display_name +
      ' sınıflandırıp taslak hashine bağlı son onayı vermeden yayımlanamaz.',
  );
}
