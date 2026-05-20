#!/usr/bin/env node
// Writer Dynamics Lint
// Tarama: writers/<slug>.md profilinde dynamics: bloğunun framework default'larına uygunluğu,
// belgesiz override yakalama, broken log_path, schema doğrulama.
//
// Kullanım: node scripts/writer-dynamics-lint.mjs
// Exit: 0 = temiz, 1 = sorun var
//
// Framework: docs/WRITER-DYNAMICS-FRAMEWORK.md
// Memory: feedback_no_unsupported_writer_judgments.md

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const WRITERS_DIR = 'writers';
const FRAMEWORK_DEFAULTS = {
  cooldown: {
    aforizma: 6,
    manifesto: 4,
    mevlana_metaforu: 5,
    baslik_tipi: 3,
    acilis_kalibi: 4,
    mevsim_acilisi: 4,
    anekdot_kombo: 2,
  },
  allow_inter_article_crosslinks: true,
  evolution_review_threshold: 10,
  evolution_review_time_threshold_months: 6,
};

// Yorum içinde gerekçe sayılacak anahtar kelimeler
const JUSTIFICATION_KEYWORDS = [
  'profil', 'memory', 'kullanıcı', 'kullanici',
  'gözlem', 'gozlem', 'kanıt', 'kanit',
  'talep', 'feedback', '§', 'CLAUDE',
  'vault', 'audit', 'pratik',
];

// === Helpers ===

function hasJustification(comment) {
  if (!comment) return false;
  const lower = comment.toLowerCase();
  return JUSTIFICATION_KEYWORDS.some(kw => lower.includes(kw.toLowerCase()));
}

function extractDynamicsBlock(content) {
  // Line-by-line: YAML kod bloğu içinde dynamics: bloğunu satır satır topla
  // Windows line endings (\r\n) ve birden fazla YAML kod bloğu güvenli
  const lines = content.split(/\r?\n/);
  let inYaml = false;
  let inDynamics = false;
  const dynLines = [];

  for (const line of lines) {
    if (line.match(/^```yaml\b/) || line.match(/^```\s*$/) === null && line.startsWith('```yaml')) {
      inYaml = true;
      continue;
    }
    if (line.match(/^```\s*$/)) {
      if (inYaml) { inYaml = false; inDynamics = false; }
      continue;
    }
    if (!inYaml) continue;

    if (line.match(/^dynamics:\s*$/)) {
      inDynamics = true;
      continue;
    }
    if (inDynamics) {
      if (line === '' || line.match(/^[ \t]/)) {
        dynLines.push(line);
      } else {
        // Top-level YAML key başladı, dynamics block bitti
        inDynamics = false;
      }
    }
  }

  return dynLines.length > 0 ? dynLines.join('\n') : null;
}

function parseScalar(block, key) {
  const lines = block.split('\n');
  for (const line of lines) {
    const m = line.match(new RegExp(`^[ \\t]+${key}:\\s*(.*)$`));
    if (!m) continue;
    let raw = m[1].trim();
    let comment = null;

    // Inline yorum çıkar
    const cm = raw.match(/^([^#]*?)\s*(#.*)$/);
    if (cm) {
      raw = cm[1].trim();
      comment = cm[2].slice(1).trim();
    }

    // Boş değer (örn. "log_path:" sonra newline'da değer)
    if (raw === '') return { value: null, comment };

    // Boolean
    if (raw === 'true') return { value: true, comment };
    if (raw === 'false') return { value: false, comment };

    // Number
    if (/^-?\d+$/.test(raw)) return { value: parseInt(raw, 10), comment };

    // Quoted string
    const q = raw.match(/^["'](.*)["']$/);
    if (q) return { value: q[1], comment };

    return { value: raw, comment };
  }
  return null;
}

function parseInlineMap(block, key) {
  const lines = block.split('\n');
  for (const line of lines) {
    const m = line.match(new RegExp(`^[ \\t]+${key}:\\s*({[^}]*})`));
    if (m) return m[1].trim();
  }
  return null;
}

function parseListBlock(block, key) {
  const lines = block.split('\n');
  const items = [];
  let collecting = false;
  let baseIndent = 0;

  for (const line of lines) {
    const keyMatch = line.match(new RegExp(`^([ \\t]+)${key}:\\s*$`));
    if (keyMatch) {
      collecting = true;
      baseIndent = keyMatch[1].length;
      continue;
    }
    if (collecting) {
      const itemMatch = line.match(/^([ \t]+)-\s*(.*)$/);
      if (itemMatch && itemMatch[1].length > baseIndent) {
        let item = itemMatch[2].trim();
        // Strip inline comment
        const cm = item.match(/^([^#]*?)\s*#.*$/);
        if (cm) item = cm[1].trim();
        // Strip quotes
        const q = item.match(/^["'](.*)["']$/);
        if (q) item = q[1];
        items.push(item);
      } else if (line.trim() !== '' && !line.startsWith(' ' + ' '.repeat(baseIndent))) {
        // Sub-block bitti
        collecting = false;
      }
    }
  }
  return items;
}

function isWriterProfile(filename) {
  return filename.endsWith('.md')
    && !filename.includes('-article-log')
    && !filename.includes('-alintilar')
    && !filename.includes('-aphorism-pool');
}

// === Main lint pass ===

const files = readdirSync(WRITERS_DIR);
const profiles = files.filter(isWriterProfile);
const logs = files.filter(f => f.endsWith('-article-log.md'));

const issues = [];
const overrides = [];
const summary = {};

for (const profileFile of profiles) {
  const slug = profileFile.replace('.md', '');
  const path = resolve(WRITERS_DIR, profileFile);
  const content = readFileSync(path, 'utf-8');
  const dyn = extractDynamicsBlock(content);

  summary[slug] = { hasBlock: !!dyn, issues: 0 };

  if (!dyn) {
    issues.push({ file: profileFile, type: 'MISSING_DYNAMICS_BLOCK', msg: 'dynamics: bloğu yok' });
    summary[slug].issues++;
    continue;
  }

  // 1. log_path zorunlu
  const logPath = parseScalar(dyn, 'log_path');
  if (!logPath || logPath.value === null) {
    issues.push({ file: profileFile, type: 'MISSING_FIELD', msg: 'log_path tanımlı değil' });
    summary[slug].issues++;
  } else {
    const logFile = resolve(WRITERS_DIR, logPath.value.replace(/^\.\//, ''));
    if (!existsSync(logFile)) {
      issues.push({ file: profileFile, type: 'BROKEN_LOG_PATH', msg: `log_path dosyası yok: ${logPath.value}` });
      summary[slug].issues++;
    }
  }

  // 2. birth_year zorunlu + sanity
  const birth = parseScalar(dyn, 'birth_year');
  if (!birth || birth.value === null) {
    issues.push({ file: profileFile, type: 'MISSING_FIELD', msg: 'birth_year tanımlı değil' });
    summary[slug].issues++;
  } else if (typeof birth.value !== 'number' || birth.value < 1940 || birth.value > 2010) {
    issues.push({ file: profileFile, type: 'INVALID_VALUE', msg: `birth_year mantıksız: ${birth.value}` });
    summary[slug].issues++;
  }

  // 3. allow_inter_article_crosslinks: false ise gerekçe ZORUNLU
  const cross = parseScalar(dyn, 'allow_inter_article_crosslinks');
  if (!cross || cross.value === null) {
    issues.push({ file: profileFile, type: 'MISSING_FIELD', msg: 'allow_inter_article_crosslinks tanımlı değil' });
    summary[slug].issues++;
  } else if (cross.value !== FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks) {
    overrides.push({
      file: profileFile,
      key: 'allow_inter_article_crosslinks',
      default: FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks,
      value: cross.value,
      comment: cross.comment,
    });
    if (!hasJustification(cross.comment)) {
      issues.push({
        file: profileFile,
        type: 'UNJUSTIFIED_OVERRIDE',
        msg: `allow_inter_article_crosslinks: ${cross.value} (default: ${FRAMEWORK_DEFAULTS.allow_inter_article_crosslinks}) — gerekçe yok veya kaynak referansı içermiyor`,
      });
      summary[slug].issues++;
    }
  }

  // 4. cooldown_overrides {} olmalı (default); olmazsa key'lerinin gerekçesi olmalı
  const cooldownInline = parseInlineMap(dyn, 'cooldown_overrides');
  if (cooldownInline && cooldownInline !== '{}') {
    // Değerli override var; her override için yorum kontrolü gerekir
    issues.push({
      file: profileFile,
      type: 'COOLDOWN_OVERRIDE',
      msg: `cooldown_overrides: ${cooldownInline} — override gerekçeleri inline yorum yerine ayrı doğrulanmalı (manuel review)`,
    });
    summary[slug].issues++;
  }

  // 5. evolution_review_threshold opsiyonel (default 10)
  const evoT = parseScalar(dyn, 'evolution_review_threshold');
  if (evoT && evoT.value !== FRAMEWORK_DEFAULTS.evolution_review_threshold) {
    overrides.push({
      file: profileFile,
      key: 'evolution_review_threshold',
      default: FRAMEWORK_DEFAULTS.evolution_review_threshold,
      value: evoT.value,
      comment: evoT.comment,
    });
    if (!hasJustification(evoT.comment)) {
      issues.push({
        file: profileFile,
        type: 'UNJUSTIFIED_OVERRIDE',
        msg: `evolution_review_threshold: ${evoT.value} (default: ${FRAMEWORK_DEFAULTS.evolution_review_threshold}) — gerekçe yok`,
      });
      summary[slug].issues++;
    }
  }

  // 6. cooldown_exempt — varsa OK (özel imza-cümleler için)
  const exempt = parseListBlock(dyn, 'cooldown_exempt');
  if (exempt.length > 0) {
    summary[slug].cooldown_exempt = exempt;
  }
}

// === Cross-writer audit ===

// Orphan log: profile'ı olmayan log dosyası var mı?
const profileSlugs = new Set(profiles.map(f => f.replace('.md', '')));
for (const log of logs) {
  const slug = log.replace('-article-log.md', '');
  if (!profileSlugs.has(slug)) {
    issues.push({ file: log, type: 'ORPHAN_LOG', msg: `Profile yok: writers/${slug}.md beklenir` });
  }
}

// Orphan profile: dynamics bloğunda log_path varken log yok DURUMU yukarıda BROKEN_LOG_PATH ile yakalandı

// Eksik log: profile var ama log dosyası YOK
for (const profile of profiles) {
  const slug = profile.replace('.md', '');
  const expectedLog = `${slug}-article-log.md`;
  if (!logs.includes(expectedLog)) {
    issues.push({ file: profile, type: 'MISSING_LOG_FILE', msg: `Beklenen log dosyası yok: writers/${expectedLog}` });
  }
}

// === Article log schema validation ===

for (const log of logs) {
  const path = resolve(WRITERS_DIR, log);
  const content = readFileSync(path, 'utf-8');

  // Şema: tablo başlığı 12 sütun olmalı
  const headerMatch = content.match(/^\| # \| Tarih \| Konu \| Kategori \| Yazar v\. \| Aforizma \| Manifesto \| Anekdot \| Açılış \| Başlık tipi \| Mevsim \| Notlar \|/m);
  if (!headerMatch) {
    issues.push({ file: log, type: 'INVALID_LOG_SCHEMA', msg: 'Article log tablo başlığı standart 12 sütun şemasıyla eşleşmiyor (framework Katman B)' });
  }

  // Framework referansı bulunmalı
  if (!content.includes('WRITER-DYNAMICS-FRAMEWORK.md')) {
    issues.push({ file: log, type: 'MISSING_FRAMEWORK_REF', msg: 'Article log dosyasında framework referansı yok' });
  }
}

// === Report ===

console.log('═══════════════════════════════════════════════════════════════════');
console.log('  WRITER DYNAMICS LINT — yazar konfigürasyon denetimi');
console.log('═══════════════════════════════════════════════════════════════════');
console.log('');
console.log(`Tarama: ${profiles.length} yazar profili, ${logs.length} article log`);
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
