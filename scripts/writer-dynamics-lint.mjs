#!/usr/bin/env node
// Writer Dynamics Lint (Modular Version)
// Tarama: writers/<slug>/profile.yaml ve article-log.md doğrulaması.
// Exit: 0 = temiz, 1 = sorun var
//
// Framework: docs/WRITER-DYNAMICS-FRAMEWORK.md
// Memory: feedback_no_unsupported_writer_judgments.md

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

// Load js-yaml dynamically
let yaml;
try {
  yaml = (await import('js-yaml')).default;
} catch (err) {
  console.error('HATA: js-yaml bağımlılığı kurulu değil.');
  process.exit(1);
}

const WRITERS_DIR = 'writers';
const FRAMEWORK_DEFAULTS = {
  allow_inter_article_crosslinks: true,
  evolution_review_threshold: 10,
};

// Yorum içinde gerekçe sayılacak anahtar kelimeler
const JUSTIFICATION_KEYWORDS = [
  'profil', 'memory', 'kullanıcı', 'kullanici',
  'gözlem', 'gozlem', 'kanıt', 'kanit',
  'talep', 'feedback', '§', 'CLAUDE',
  'vault', 'audit', 'pratik',
];

function hasJustification(comment) {
  if (!comment) return false;
  const lower = comment.toLowerCase();
  return JUSTIFICATION_KEYWORDS.some(kw => lower.includes(kw.toLowerCase()));
}

// Find inline comment for a key in YAML text
function findYamlKeyComment(yamlText, keyPath) {
  const lines = yamlText.split(/\r?\n/);
  // Simple heuristic to find line with key
  const keys = keyPath.split('.');
  const lastKey = keys[keys.length - 1];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(`${lastKey}:`)) {
      const parts = line.split('#');
      if (parts.length > 1) {
        return parts.slice(1).join('#').trim();
      }
    }
  }
  return null;
}

// Get all writer subdirectories
const writers = readdirSync(WRITERS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name);

const issues = [];
const overrides = [];
const summary = {};
const logs = [];

for (const slug of writers) {
  const writerDir = resolve(WRITERS_DIR, slug);
  const profilePath = join(writerDir, 'profile.yaml');
  
  summary[slug] = { hasBlock: false, issues: 0 };

  if (!existsSync(profilePath)) {
    continue;
  }

  const profileText = readFileSync(profilePath, 'utf-8');
  let profile;
  try {
    profile = yaml.load(profileText);
  } catch (e) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'YAML_PARSE_ERROR', msg: e.message });
    summary[slug].issues++;
    continue;
  }

  const dyn = profile.dynamics || {};
  summary[slug].hasBlock = !!profile.dynamics;

  if (!profile.dynamics) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'MISSING_DYNAMICS_BLOCK', msg: 'dynamics: bloğu yok' });
    summary[slug].issues++;
    continue;
  }

  // 1. log_path zorunlu
  const logPath = dyn.log_path;
  if (!logPath) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'MISSING_FIELD', msg: 'dynamics.log_path tanımlı değil' });
    summary[slug].issues++;
  } else {
    const logFile = resolve(writerDir, logPath);
    logs.push({ slug, path: logFile, relPath: join('writers', slug, logPath) });
    if (!existsSync(logFile)) {
      issues.push({ file: `writers/${slug}/profile.yaml`, type: 'BROKEN_LOG_PATH', msg: `log_path dosyası yok: ${logPath}` });
      summary[slug].issues++;
    }
  }

  // 2. birth_year zorunlu + sanity
  const birth = dyn.birth_year;
  if (birth === undefined || birth === null) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'MISSING_FIELD', msg: 'dynamics.birth_year tanımlı değil' });
    summary[slug].issues++;
  } else if (typeof birth !== 'number' || birth < 1940 || birth > 2010) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'INVALID_VALUE', msg: `dynamics.birth_year mantıksız: ${birth}` });
    summary[slug].issues++;
  }

  // 3. allow_inter_article_crosslinks: false ise gerekçe ZORUNLU
  const cross = dyn.allow_inter_article_crosslinks;
  if (cross === undefined || cross === null) {
    issues.push({ file: `writers/${slug}/profile.yaml`, type: 'MISSING_FIELD', msg: 'dynamics.allow_inter_article_crosslinks tanımlı değil' });
    summary[slug].issues++;
  } else if (cross !== FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks) {
    const comment = findYamlKeyComment(profileText, 'dynamics.allow_inter_article_crosslinks');
    overrides.push({
      file: `writers/${slug}/profile.yaml`,
      key: 'allow_inter_article_crosslinks',
      default: FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks,
      value: cross,
      comment: comment,
    });
    if (!hasJustification(comment)) {
      issues.push({
        file: `writers/${slug}/profile.yaml`,
        type: 'UNJUSTIFIED_OVERRIDE',
        msg: `allow_inter_article_crosslinks: ${cross} (default: ${FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks}) — gerekçe yok veya kaynak referansı içermiyor`,
      });
      summary[slug].issues++;
    }
  }

  // 4. evolution_review_threshold check
  const evoT = dyn.evolution_review_threshold;
  if (evoT !== undefined && evoT !== FRAMEWORK_DEFAULTS.evolution_review_threshold) {
    const comment = findYamlKeyComment(profileText, 'dynamics.evolution_review_threshold');
    overrides.push({
      file: `writers/${slug}/profile.yaml`,
      key: 'evolution_review_threshold',
      default: FRAMEWORK_DEFAULTS.evolution_review_threshold,
      value: evoT,
      comment: comment,
    });
    if (evoT < 3 && !hasJustification(comment)) {
      issues.push({
        file: `writers/${slug}/profile.yaml`,
        type: 'UNJUSTIFIED_OVERRIDE',
        msg: `evolution_review_threshold: ${evoT} (default: ${FRAMEWORK_DEFAULTS.evolution_review_threshold}) — gerekçe yok veya kaynak referansı içermiyor`,
      });
      summary[slug].issues++;
    }
  }

  // 5. cooldown_exempt — varsa OK (özel imza-cümleler için)
  const exempt = dyn.cooldown_exempt;
  if (exempt && exempt.length > 0) {
    summary[slug].cooldown_exempt = exempt;
  }
}

// === Article log schema validation ===
for (const log of logs) {
  if (!existsSync(log.path)) continue;
  const content = readFileSync(log.path, 'utf-8');

  // Şema: tablo başlığı 12 sütun olmalı
  const headerMatch = content.match(/^\| # \| Tarih \| Konu \| Kategori \| Yazar v\. \| Aforizma \| Manifesto \| Anekdot \| Açılış \| Başlık tipi \| Mevsim \| Notlar \|/m);
  if (!headerMatch) {
    issues.push({ file: log.relPath, type: 'INVALID_LOG_SCHEMA', msg: 'Article log tablo başlığı standart 12 sütun şemasıyla eşleşmiyor (framework Katman B)' });
  }

  // Framework referansı bulunmalı
  if (!content.includes('WRITER-DYNAMICS-FRAMEWORK.md')) {
    issues.push({ file: log.relPath, type: 'MISSING_FRAMEWORK_REF', msg: 'Article log dosyasında framework referansı yok' });
  }
}

// === Report ===
console.log('═══════════════════════════════════════════════════════════════════');
console.log('  WRITER DYNAMICS LINT — yazar konfigürasyon denetimi (modüler)');
console.log('═══════════════════════════════════════════════════════════════════');
console.log('');
console.log(`Tarama: ${writers.length} yazar profili, ${logs.filter(l => existsSync(l.path)).length} taranan article log`);
console.log(`Framework: docs/WRITER-DYNAMICS-FRAMEWORK.md`);
console.log('');

console.log('─── Yazar konfigürasyon özeti ───');
for (const [slug, info] of Object.entries(summary)) {
  const status = info.issues === 0 ? '✓' : '✗';
  const exempt = info.cooldown_exempt ? ` [exempt: ${info.cooldown_exempt.join(', ')}]` : '';
  console.log(`  ${status} ${slug}: ${info.hasBlock ? 'dynamics OK' : 'dynamics YOK'}, ${info.issues} sorun${exempt}`);
}
console.log('');

if (overrides.length > 0) {
  console.log('─── Default\'tan farklı override\'lar ───');
  for (const ov of overrides) {
    const justified = hasJustification(ov.comment) ? '✓' : '✗';
    console.log(`  ${justified} ${ov.file}: ${ov.key} = ${ov.value} (default: ${ov.default})`);
    if (ov.comment) {
      console.log(`     yorum: # ${ov.comment}`);
    } else {
      console.log(`     yorum: (yok)`);
    }
  }
  console.log('');
}

if (issues.length === 0) {
  console.log('✅ TEMIZ — Belgesiz override yok, eksik alan yok, broken link yok.');
  console.log('');
  process.exit(0);
} else {
  console.log(`❌ ${issues.length} SORUN BULUNDU:`);
  console.log('');
  // Group by type
  const byType = {};
  for (const issue of issues) {
    (byType[issue.type] = byType[issue.type] || []).push(issue);
  }
  for (const [type, items] of Object.entries(byType)) {
    console.log(`  [${type}] (${items.length})`);
    for (const item of items) {
      console.log(`    ${item.file}`);
      console.log(`      → ${item.msg}`);
    }
    console.log('');
  }
  console.log('Düzeltme:');
  console.log('  - UNJUSTIFIED_OVERRIDE → yorum ekleyip kaynak referansı ver (profil §X / memory feedback / kullanıcı / gözlem) veya default\'a dön');
  console.log('  - MISSING_FIELD → dynamics: bloğuna eksik alanı ekle');
  console.log('  - BROKEN_LOG_PATH → log dosyasını oluştur veya log_path düzelt');
  console.log('  - INVALID_LOG_SCHEMA → article log tablo başlığını 12-sütunlu standart şemaya getir');
  console.log('');
  process.exit(1);
}
