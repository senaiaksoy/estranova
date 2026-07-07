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
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const WRITERS_DIR = path.join(REPO_ROOT, 'writers');

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

let yaml;
try {
  yaml = (await import('js-yaml')).default;
} catch (err) {
  console.error(`HATA: js-yaml bağımlılığı kurulu değil.`);
  console.error(`Lütfen şu komutu çalıştırın: npm install --save-dev js-yaml`);
  process.exit(1);
}

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

  // ---- 1. zorunlu alanlar ----
  const required = ['writer_version', 'slug', 'display_name', 'file_layout', 'section_index', 'voice_traits', 'category_scores', 'dynamics'];
  for (const f of required) {
    if (!profile[f]) errors.push(`Zorunlu alan eksik: ${f}`);
  }

  // ---- 2. file_layout dosyaları ----
  const layout = profile.file_layout || {};
  for (const [key, relPath] of Object.entries(layout)) {
    if (!relPath) continue;
    const full = path.resolve(writerDir, relPath);
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

    const filePath = path.resolve(writerDir, layout[fileKey]);
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
      const full = path.resolve(writerDir, citations[key]);
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
      const hiddenPath = path.resolve(writerDir, layout.hidden);
      if (!fs.existsSync(hiddenPath)) {
        errors.push(`dual_role_warning.active = true ama hidden.md (${layout.hidden}) yok`);
      }
    }
  }

  // ---- 6. dynamics zorunlu alanları ----
  const dyn = profile.dynamics || {};
  if (!dyn.log_path) errors.push(`dynamics.log_path eksik`);
  if (typeof dyn.birth_year !== 'number') errors.push(`dynamics.birth_year eksik veya number değil`);
  if (typeof dyn.allow_inter_article_crosslinks !== 'boolean') {
    errors.push(`dynamics.allow_inter_article_crosslinks eksik veya boolean değil`);
  }
  if (dyn.log_path) {
    const logPath = path.resolve(writerDir, dyn.log_path);
    if (!fs.existsSync(logPath)) {
      warnings.push(`dynamics.log_path → ${dyn.log_path} bulunamadı (ilk makale öncesi yok olabilir)`);
    }
  }

  // ---- 7. v2.6 Şablon Kırma Disiplini cooldown alanları (opsiyonel uyarı) ----
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
  // pattern_pool_sizes (opsiyonel referans alanı)
  if (!dyn.pattern_pool_sizes) {
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
