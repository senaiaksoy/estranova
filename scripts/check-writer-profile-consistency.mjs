#!/usr/bin/env node
/**
 * check-writer-profile-consistency.mjs
 *
 * Modüler yazar profili tutarlılık denetleyicisi (drift CI).
 *
 * Kontroller:
 *   1. profile.yaml zorunlu alanlar (slug, file_layout, section_index, dynamics)
 *   2. file_layout'taki tüm dosyalar var mı?
 *   3. section_index'teki her anchor ilgili markdown'da bulunuyor mu?
 *      (<a id="anchor"></a> formatı)
 *   4. citations dosyaları var mı?
 *   5. dual_role_warning.active = true ise hidden.md var mı?
 *
 * Kullanım:
 *   node scripts/check-writer-profile-consistency.mjs                   # tüm yazarları
 *   node scripts/check-writer-profile-consistency.mjs --writer gamze-cizreli
 *
 * Bağımlılık: js-yaml (devDependency)
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import Ajv from 'ajv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const WRITERS_DIR = path.join(REPO_ROOT, 'writers');
const PROFILE_SCHEMA_PATH = path.join(
  WRITERS_DIR,
  '_schema',
  'profile.schema.json',
);

function isWithin(base, target) {
  const rel = path.relative(base, target);
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

function resolveContained(base, from, configuredPath, label, errors) {
  if (typeof configuredPath !== 'string' || !configuredPath.trim()) {
    errors.push(label + ' yolu eksik veya string değil');
    return null;
  }
  if (path.isAbsolute(configuredPath)) {
    errors.push(label + ' mutlak yol olamaz');
    return null;
  }
  const resolved = path.resolve(from, configuredPath);
  if (!isWithin(path.resolve(base), resolved)) {
    errors.push(label + ' izin verilen kökün dışına çıkıyor: ' + configuredPath);
    return null;
  }
  return resolved;
}

function containsSymlink(base, target) {
  const candidates = [path.resolve(base)];
  let current = path.resolve(base);
  const rel = path.relative(path.resolve(base), path.resolve(target));
  if (rel) {
    for (const segment of rel.split(path.sep)) {
      current = path.join(current, segment);
      candidates.push(current);
    }
  }
  return candidates.some(
    (candidate) =>
      fs.existsSync(candidate) && fs.lstatSync(candidate).isSymbolicLink(),
  );
}

const { values } = parseArgs({
  options: {
    writer: { type: 'string', short: 'w' },
    help: { type: 'boolean', short: 'h', default: false },
  },
});

if (values.help) {
  console.log(`Kullanım: node scripts/check-writer-profile-consistency.mjs [--writer <slug>]

  --writer, -w   Yalnız belirli yazarı kontrol et
  --help, -h     Bu mesaj
`);
  process.exit(0);
}

if (values.writer && !/^[a-z0-9-]+$/.test(values.writer)) {
  console.error('HATA: Geçersiz yazar slug.');
  process.exit(1);
}

let yaml;
try {
  yaml = (await import('js-yaml')).default;
} catch (err) {
  console.error(`HATA: js-yaml bağımlılığı kurulu değil.`);
  console.error(`Lütfen şu komutu çalıştırın: npm install --save-dev js-yaml`);
  process.exit(1);
}

const profileSchema = JSON.parse(
  fs.readFileSync(PROFILE_SCHEMA_PATH, 'utf8'),
);
const validatePrivateSeedProfile = new Ajv({
  allErrors: true,
  strict: false,
}).compile(profileSchema);

// ---- yazarları topla ----
let writers;
if (values.writer) {
  writers = [values.writer];
} else {
  // Klasör bazlı yazarlar (yeni modüler yapı)
  writers = fs
    .readdirSync(WRITERS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => d.name);
}

if (writers.length === 0) {
  console.error('UYARI: Modüler yazar klasörü bulunamadı. Migration yapılmamış olabilir.');
  process.exit(0);
}

let totalErrors = 0;
let totalWarnings = 0;
const report = [];

for (const slug of writers) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    report.push({
      slug,
      level: 'error',
      errors: ['Geçersiz yazar klasörü slug değeri'],
      warnings: [],
    });
    totalErrors += 1;
    continue;
  }
  const writerDir = path.join(WRITERS_DIR, slug);
  const profilePath = path.join(writerDir, 'profile.yaml');

  if (!fs.existsSync(profilePath)) {
    report.push({ slug, level: 'skip', msg: `profile.yaml yok (legacy tek-dosya kullanıyor olabilir)` });
    continue;
  }

  const errors = [];
  const warnings = [];

  let profile;
  try {
    profile = yaml.load(fs.readFileSync(profilePath, 'utf8'));
  } catch (e) {
    errors.push(`profile.yaml parse hatası: ${e.message}`);
    report.push({ slug, level: 'error', errors, warnings });
    totalErrors += errors.length;
    continue;
  }

  if (profile.slug !== slug) {
    errors.push(
      `profile.slug (${profile.slug || 'eksik'}) klasör adıyla eşleşmiyor`,
    );
  }

  // Tam JSON Schema doğrulaması şimdilik özel seed kapısı kullanan profiller
  // için fail-closed uygulanır. Legacy profillerdeki genel şema drift'i ayrı
  // migration kapsamıdır.
  if (profile.private_seed_policy || slug === 'sanem-altan') {
    if (!validatePrivateSeedProfile(profile)) {
      for (const error of validatePrivateSeedProfile.errors || []) {
        errors.push(
          'profile.schema ' +
            (error.instancePath || '/') +
            ' ' +
            error.message,
        );
      }
    }
  }

  // ---- 1. zorunlu alanlar ----
  const required = ['writer_version', 'slug', 'display_name', 'file_layout', 'section_index', 'voice_traits', 'category_scores', 'dynamics'];
  for (const f of required) {
    if (!profile[f]) errors.push(`Zorunlu alan eksik: ${f}`);
  }

  // ---- 2. file_layout dosyaları ----
  const layout = profile.file_layout || {};
  const repoScopedLayoutKeys = new Set([
    'corpus',
    'aphorism_pool',
    'article_log',
  ]);
  for (const [key, relPath] of Object.entries(layout)) {
    if (!relPath) continue;
    const layoutBase = repoScopedLayoutKeys.has(key) ? REPO_ROOT : writerDir;
    const full = resolveContained(
      layoutBase,
      writerDir,
      relPath,
      `file_layout.${key}`,
      errors,
    );
    if (!full) continue;
    if (!fs.existsSync(full)) {
      errors.push(`file_layout.${key} → dosya bulunamadı: ${relPath}`);
    }
  }

  // ---- 3. section_index anchor doğrulaması ----
  const sectionIndex = profile.section_index || {};
  const fileContents = {}; // file → string
  for (const [section, info] of Object.entries(sectionIndex)) {
    const fileKey = info.file;
    const anchor = info.anchor;
    if (!fileKey || !anchor) {
      errors.push(`section_index.${section} → file veya anchor eksik`);
      continue;
    }
    if (fileKey === 'profile.yaml') continue; // YAML için anchor kontrolü yapmıyoruz

    if (!layout[fileKey]) {
      errors.push(`section_index.${section}.file = '${fileKey}' ama file_layout.${fileKey} tanımsız`);
      continue;
    }

    const filePath = resolveContained(
      writerDir,
      writerDir,
      layout[fileKey],
      `section_index.${section}.file`,
      errors,
    );
    if (!filePath) continue;
    if (!fileContents[fileKey]) {
      if (!fs.existsSync(filePath)) {
        errors.push(`section_index.${section} → file ${fileKey} (${layout[fileKey]}) bulunamadı`);
        continue;
      }
      fileContents[fileKey] = fs.readFileSync(filePath, 'utf8');
    }

    const anchorPattern = new RegExp(`<a\\s+id="${anchor}"\\s*></a>`, 'i');
    if (!anchorPattern.test(fileContents[fileKey])) {
      // Anchor yoksa belki H2 slug olarak doğrudan bulunabilir
      const headerSlugPattern = new RegExp(`#+\\s.*${anchor.replace(/-/g, '[\\s-]')}`, 'i');
      if (!headerSlugPattern.test(fileContents[fileKey])) {
        warnings.push(`section_index.${section} anchor '${anchor}' ${fileKey}.md'de bulunamadı (ne <a id> ne header slug)`);
      }
    }
  }

  // ---- 4. citations dosyaları ----
  const citations = profile.citations || {};
  for (const key of ['canonical_sources', 'extended', 'pending']) {
    if (citations[key]) {
      const full = resolveContained(
        writerDir,
        writerDir,
        citations[key],
        `citations.${key}`,
        errors,
      );
      if (!full) continue;
      if (!fs.existsSync(full)) {
        warnings.push(`citations.${key} → dosya bulunamadı: ${citations[key]}`);
      }
    }
  }

  // ---- 5. dual_role aktifse hidden.md var mı ----
  if (profile.dual_role_warning?.active === true) {
    if (!layout.hidden) {
      errors.push(`dual_role_warning.active = true ama file_layout.hidden tanımlı değil`);
    } else {
      const hiddenPath = resolveContained(
        writerDir,
        writerDir,
        layout.hidden,
        'file_layout.hidden',
        errors,
      );
      if (hiddenPath && !fs.existsSync(hiddenPath)) {
        errors.push(`dual_role_warning.active = true ama hidden.md (${layout.hidden}) yok`);
      }
    }
  }

  // ---- 6. özel seed kasası güvenlik kapısı ----
  const privateSeedPolicy = profile.private_seed_policy;
  if (privateSeedPolicy?.enabled === true) {
    if (privateSeedPolicy.auto_load !== false) {
      errors.push('private_seed_policy.auto_load false olmalı');
    }
    if (privateSeedPolicy.draft_mode !== 'internal_author_review_only') {
      errors.push('private_seed_policy.draft_mode internal_author_review_only olmalı');
    }
    if (privateSeedPolicy.publication_gate !== 'explicit_author_approval') {
      errors.push('private_seed_policy.publication_gate explicit_author_approval olmalı');
    }
    if (!privateSeedPolicy.environment_variable) {
      errors.push('private_seed_policy.environment_variable eksik');
    }
    if (privateSeedPolicy.synthetic_first_person !== 'internal_draft_only') {
      errors.push('private_seed_policy.synthetic_first_person internal_draft_only olmalı');
    }
    if (privateSeedPolicy.third_party_consent_required !== true) {
      errors.push('private_seed_policy.third_party_consent_required true olmalı');
    }
    if (privateSeedPolicy.public_log_detail !== 'opaque_ids_and_status_only') {
      errors.push('private_seed_policy.public_log_detail opaque_ids_and_status_only olmalı');
    }
    if (Array.isArray(profile.experience_seeds) && profile.experience_seeds.length > 0) {
      errors.push('Özel seed politikası aktifken profile.yaml experience_seeds boş kalmalı');
    }

    const forbiddenLayoutKeys = Object.keys(layout).filter((key) =>
      /private|seed|vault|anecdote/i.test(key),
    );
    if (forbiddenLayoutKeys.length > 0) {
      errors.push(
        'Özel kasa file_layout içine bağlanamaz: ' + forbiddenLayoutKeys.join(', '),
      );
    }

    if (privateSeedPolicy.default_local_path) {
      const expectedLocalPath = path
        .join('private-writer-context', slug)
        .replace(/\\/g, '/');
      if (privateSeedPolicy.default_local_path !== expectedLocalPath) {
        errors.push(
          'private_seed_policy.default_local_path yazar slug ile eşleşmeli: ' +
            expectedLocalPath,
        );
      }
      const privateTarget = resolveContained(
        REPO_ROOT,
        REPO_ROOT,
        privateSeedPolicy.default_local_path,
        'private_seed_policy.default_local_path',
        errors,
      );
      if (privateTarget) {
        const rel = path.relative(REPO_ROOT, privateTarget);
        const insideRepo =
          rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
        if (insideRepo) {
          if (containsSymlink(REPO_ROOT, privateTarget)) {
            errors.push('Özel kasa yolu sembolik bağlantı/junction içeremez');
          }
          const tracked = spawnSync(
            'git',
            ['ls-files', '--error-unmatch', '--', rel.replace(/\\/g, '/')],
            { cwd: REPO_ROOT, stdio: 'ignore' },
          );
          if (tracked.status === 0) {
            errors.push('Özel kasa hedefi Git tarafından izleniyor');
          }

          const ignored = spawnSync(
            'git',
            ['check-ignore', '-q', '--', rel.replace(/\\/g, '/')],
            { cwd: REPO_ROOT, stdio: 'ignore' },
          );
          if (ignored.status !== 0) {
            errors.push('Özel kasa hedefi .gitignore kapsamında değil');
          }
        }
      }
    }
  }

  // ---- 7. dynamics zorunlu alanları ----
  const dyn = profile.dynamics || {};
  if (!dyn.log_path) errors.push(`dynamics.log_path eksik`);
  if (typeof dyn.birth_year !== 'number') errors.push(`dynamics.birth_year eksik veya number değil`);
  if (typeof dyn.allow_inter_article_crosslinks !== 'boolean') {
    errors.push(`dynamics.allow_inter_article_crosslinks eksik veya boolean değil`);
  }
  if (dyn.log_path) {
    const logPath = resolveContained(
      REPO_ROOT,
      writerDir,
      dyn.log_path,
      'dynamics.log_path',
      errors,
    );
    if (logPath && !fs.existsSync(logPath)) {
      warnings.push(`dynamics.log_path → ${dyn.log_path} bulunamadı (ilk makale öncesi yok olabilir)`);
    }
  }

  // ---- 8. v2.6 Şablon Kırma Disiplini cooldown alanları (opsiyonel uyarı) ----
  // docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md kapsamı
  const v26ExpectedCooldownKeys = [
    'opening_pattern',
    'closing_pattern',
    'balance_phrase',
    'not_knowing_phrase',
    'clinician_frame',
    'anecdote_door',
    'signature_closing_template',
    'editor_note_layer_titles',
  ];
  const cooldownOverrides = dyn.cooldown_overrides || {};
  const missingCooldownKeys = v26ExpectedCooldownKeys.filter((key) => !(key in cooldownOverrides));
  if (missingCooldownKeys.length > 0) {
    warnings.push(
      `v2.6 Şablon Kırma Disiplini: dynamics.cooldown_overrides eksik anahtarlar: ${missingCooldownKeys.join(', ')} ` +
        `(detay: docs/WRITER-TEMPLATE-BREAKING-DISCIPLINE.md)`,
    );
  }
  // pattern_pool_sizes yalnız sabit imza-kalıp havuzu kullanan profiller için
  // anlamlıdır. Organik repertuar kullanan profillere mekanik havuz dayatma.
  const usesSignaturePatternPools =
    Array.isArray(profile.signature_phrases_acilis) ||
    Array.isArray(profile.signature_phrases_anahtar);
  if (usesSignaturePatternPools && !dyn.pattern_pool_sizes) {
    warnings.push(
      `v2.6 Şablon Kırma Disiplini: dynamics.pattern_pool_sizes eksik (referans için önerilir; min 10 varyant her havuz)`,
    );
  }

  totalErrors += errors.length;
  totalWarnings += warnings.length;
  report.push({
    slug,
    level: errors.length > 0 ? 'error' : warnings.length > 0 ? 'warning' : 'ok',
    errors,
    warnings,
  });
}

// ---- raporla ----
console.log('# Writer Profile Consistency Check\n');

for (const r of report) {
  const icon = r.level === 'ok' ? '✓' : r.level === 'warning' ? '⚠' : r.level === 'skip' ? '○' : '✗';
  console.log(`${icon} ${r.slug} — ${r.level === 'skip' ? r.msg : r.level.toUpperCase()}`);
  if (r.errors?.length) r.errors.forEach((e) => console.log(`    HATA: ${e}`));
  if (r.warnings?.length) r.warnings.forEach((w) => console.log(`    UYARI: ${w}`));
}

console.log(`\n${report.filter((r) => r.level === 'ok').length} ok, ${report.filter((r) => r.level === 'warning').length} warning, ${report.filter((r) => r.level === 'error').length} error, ${report.filter((r) => r.level === 'skip').length} skipped`);
console.log(`Toplam: ${totalErrors} hata, ${totalWarnings} uyarı`);

process.exit(totalErrors > 0 ? 1 : 0);
