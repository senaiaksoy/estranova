import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const WRITERS_DIR = path.join(REPO_ROOT, 'writers');

// Load js-yaml dynamically
let yaml;
try {
  yaml = (await import('js-yaml')).default;
} catch (err) {
  console.error('js-yaml not installed, run npm install first');
  process.exit(1);
}

// Get all writer subdirectories
const writers = fs
  .readdirSync(WRITERS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name);

const EXPECTED_COOLDOWN_KEYS = [
  'opening_pattern',
  'closing_pattern',
  'balance_phrase',
  'not_knowing_phrase',
  'clinician_frame',
  'anecdote_door',
  'signature_closing_template',
  'editor_note_layer_titles'
];

const DEFAULT_COOLDOWN_VALUES = {
  opening_pattern: 6,
  closing_pattern: 4,
  balance_phrase: 4,
  not_knowing_phrase: 4,
  clinician_frame: 4,
  anecdote_door: 4,
  signature_closing_template: 4,
  editor_note_layer_titles: 6
};

const DEFAULT_POOL_SIZES = `  pattern_pool_sizes:
    opening: 10
    closing: 10
    balance_phrase: 10
    not_knowing: 10
    clinician_frame: 10
    anecdote_door: 10
    signature_closing: 6
    humor: 8`;

for (const slug of writers) {
  const writerDir = path.join(WRITERS_DIR, slug);
  const profilePath = path.join(writerDir, 'profile.yaml');
  if (!fs.existsSync(profilePath)) continue;

  console.log(`Processing writer: ${slug}`);

  // 1. Read profile.yaml
  let profileText = fs.readFileSync(profilePath, 'utf8');
  let profile;
  try {
    profile = yaml.load(profileText);
  } catch (e) {
    console.error(`  Error parsing profile.yaml for ${slug}: ${e.message}`);
    continue;
  }

  const layout = profile.file_layout || {};
  const sectionIndex = profile.section_index || {};

  // 2. Fix missing anchors in markdown files
  for (const [sectionKey, info] of Object.entries(sectionIndex)) {
    const fileKey = info.file;
    const anchor = info.anchor;
    if (!fileKey || !anchor || fileKey === 'profile.yaml') continue;

    const relPath = layout[fileKey];
    if (!relPath) continue;

    const mdPath = path.resolve(writerDir, relPath);
    if (!fs.existsSync(mdPath)) continue;

    let mdText = fs.readFileSync(mdPath, 'utf8');
    
    // Check if anchor is already in the file
    const anchorPattern = new RegExp(`<a\\s+id="${anchor}"\\s*></a>`, 'i');
    if (anchorPattern.test(mdText)) {
      continue; // already exists
    }

    // Escape special characters in sectionKey (e.g. §0.5 or §5c-ek)
    const escapedKey = sectionKey.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Match line starting with heading and §[key]
    const headingRegex = new RegExp(`(^|\\r?\\n)(#+\\s+${escapedKey}(?:\\s|[).·]|$)[^\\r\\n]*)`, 'i');
    
    if (headingRegex.test(mdText)) {
      // Insert anchor before the matched heading line
      mdText = mdText.replace(headingRegex, (match, pre, headingLine) => {
        return `${pre}<a id="${anchor}"></a>\n\n${headingLine}`;
      });
      fs.writeFileSync(mdPath, mdText, 'utf8');
      console.log(`  Added anchor <a id="${anchor}"></a> to ${relPath}`);
    } else {
      console.warn(`  Warning: Could not find heading for section '${sectionKey}' in ${relPath}`);
    }
  }

  // 3. Fix profile.yaml dynamics overrides & pool sizes (without losing comments)
  let updatedProfileText = profileText;

  // Let's check dynamics block
  const dyn = profile.dynamics || {};
  const cooldownOverrides = dyn.cooldown_overrides || {};
  const missingCooldownKeys = EXPECTED_COOLDOWN_KEYS.filter((key) => !(key in cooldownOverrides));

  if (missingCooldownKeys.length > 0) {
    // If cooldown_overrides is empty curly brace (e.g. "cooldown_overrides: {}")
    const emptyOverridesRegex = /([ \t]*)cooldown_overrides:\s*\{\s*\}/;
    if (emptyOverridesRegex.test(updatedProfileText)) {
      const matchEmpty = updatedProfileText.match(emptyOverridesRegex);
      const indent = matchEmpty[1] || '  ';
      let replacement = `${indent}cooldown_overrides:`;
      for (const key of EXPECTED_COOLDOWN_KEYS) {
        const val = DEFAULT_COOLDOWN_VALUES[key];
        replacement += `\n${indent}  ${key}: ${val}`;
      }
      updatedProfileText = updatedProfileText.replace(emptyOverridesRegex, replacement);
      console.log(`  Expanded empty cooldown_overrides: {} to detailed keys.`);
    } else {
      // If cooldown_overrides block exists but is missing some keys
      const hasOverridesKeyRegex = /([ \t]*)cooldown_overrides:\s*\r?\n/;
      const match = updatedProfileText.match(hasOverridesKeyRegex);
      if (match) {
        const indent = match[1] || '  ';
        let insertion = '';
        for (const key of missingCooldownKeys) {
          const val = DEFAULT_COOLDOWN_VALUES[key];
          insertion += `${indent}  ${key}: ${val}\n`;
        }
        // Insert after cooldown_overrides:
        updatedProfileText = updatedProfileText.replace(hasOverridesKeyRegex, (m) => `${m}${insertion}`);
        console.log(`  Added missing cooldown keys: ${missingCooldownKeys.join(', ')}`);
      } else {
        // cooldown_overrides key is missing entirely under dynamics:
        const dynamicsRegex = /([ \t]*)dynamics:\s*\r?\n/;
        const dynMatch = updatedProfileText.match(dynamicsRegex);
        if (dynMatch) {
          const indent = dynMatch[1] ?? '';
          let block = `${indent}  cooldown_overrides:`;
          for (const key of EXPECTED_COOLDOWN_KEYS) {
            const val = DEFAULT_COOLDOWN_VALUES[key];
            block += `\n${indent}    ${key}: ${val}`;
          }
          block += '\n';
          updatedProfileText = updatedProfileText.replace(dynamicsRegex, (m) => `${m}${block}`);
          console.log(`  Injected complete cooldown_overrides block.`);
        }
      }
    }
  }

  // Check pattern_pool_sizes
  if (!dyn.pattern_pool_sizes) {
    // If pattern_pool_sizes is missing, append it under the dynamics block.
    // Let's locate where the dynamics section starts and check indent.
    const dynamicsRegex = /([ \t]*)dynamics:\s*\r?\n/;
    const dynMatch = updatedProfileText.match(dynamicsRegex);
    if (dynMatch) {
      const indent = dynMatch[1] ?? '';
      const formattedPoolSizes = DEFAULT_POOL_SIZES.split('\n')
        .map(line => indent + line)
        .join('\n') + '\n';
      
      // Let's append it right after the dynamics: line
      updatedProfileText = updatedProfileText.replace(dynamicsRegex, (m) => `${m}${formattedPoolSizes}`);
      console.log(`  Injected default pattern_pool_sizes.`);
    }
  }

  if (updatedProfileText !== profileText) {
    fs.writeFileSync(profilePath, updatedProfileText, 'utf8');
    console.log(`  Updated profile.yaml`);
  }
}

console.log('Profile fix-up complete.');
