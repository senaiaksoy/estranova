import fs from "node:fs";
import path from "node:path";
import {
  bannedPhraseRules,
  bannedLinkRules,
  riskyCtaRules,
} from "./compliance-language-rules.mjs";

const root = process.cwd();

const requiredDocs = [
  "AGENTS.md",
  "CLAUDE.md",
  "COMPLIANCE_CHECKLIST.md",
  "docs/editorial-policy-operational.md",
];

// Eski /article/[slug] dinamik rotası 2026-04-25 (commit cedc51c) kaldırıldı;
// içerik artık /<hub>/<alt-hub>/<slug>.astro statik dosyaları olarak yaşıyor.
// Compliance bu nedenle artık zorunlu rota kontrolü yapmıyor.
const requiredRouteFiles = [];

const scannedRootDirs = [
  "src/pages",
  "src/components",
  "src/layouts",
];

// articles.ts manifest'i de aynı refactor'da silindi — yerine
// src/data/static-articles.ts kullanılıyor (ayrı denetim gerektirmez,
// scannedRootDirs taraması zaten hub içeriğini kapsıyor).
const extraAuditedFiles = [];

// Eski article disclaimer rotası ve bileşeni — varsa kontrol et, yoksa
// sessizce skip (refactor sonrası dosyalar mevcut değil; existsSync guard'ı
// aşağıda bunu zaten temizce karşılıyor).
const articleRouteFile = "src/pages/article/[slug].astro";
const articleTransparencyComponentFile = "src/components/article/ArticleTransparencyPanel.astro";
const sponsorMentionPattern = /\b(sponsor|sponsored|sponsorluk|reklam\s+ortagi|tanitim\s+ortagi)\b/u;
const sponsorLabelPattern = /\bsponsorlu\s+icerik\b/u;

let hasError = false;
let warnCount = 0;

function fail(msg) {
  hasError = true;
  console.error(`ERROR: ${msg}`);
}

function warn(msg) {
  warnCount += 1;
  console.warn(`WARN: ${msg}`);
}

function normalizeForScan(text) {
  return text
    .replace(/\u0131/g, "i")
    .replace(/\u0130/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function collectAstroFiles(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return [];

  const out = [];
  const stack = [dir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".astro")) {
        out.push(path.relative(root, fullPath).replace(/\\/g, "/"));
      }
    }
  }

  return out;
}

function getHrefValues(text) {
  const hrefs = [];
  const hrefRe = /href\s*=\s*["']([^"']+)["']/giu;
  let m;
  while ((m = hrefRe.exec(text)) !== null) {
    hrefs.push(m[1]);
  }
  return hrefs;
}

function getActionTexts(text) {
  const out = [];
  const actionRe = /<(a|button)\b[^>]*>([\s\S]*?)<\/\1>/giu;
  let m;
  while ((m = actionRe.exec(text)) !== null) {
    const plain = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (plain) out.push(plain);
  }
  return out;
}

for (const file of requiredDocs) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) {
    fail(`Missing required policy file: ${file}`);
  }
}

for (const file of requiredRouteFiles) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) {
    fail(`Missing required route file: ${file}`);
  }
}

const discoveredAstroFiles = scannedRootDirs.flatMap((dir) => collectAstroFiles(dir));

const auditedFiles = Array.from(
  new Set([...discoveredAstroFiles, ...extraAuditedFiles])
).sort((a, b) => a.localeCompare(b));

if (auditedFiles.length === 0) {
  fail("No audited files found. Check scannedRootDirs configuration.");
}

for (const file of auditedFiles) {
  const p = path.join(root, file);

  if (!fs.existsSync(p)) {
    fail(`Missing audited file: ${file}`);
    continue;
  }

  const text = fs.readFileSync(p, "utf8");
  const scanText = normalizeForScan(text);

  for (const rule of bannedPhraseRules) {
    if (rule.re.test(scanText)) {
      fail(`Banned wording found in ${file}: ${rule.label}`);
    }
  }

  const hrefs = getHrefValues(text).map(normalizeForScan);
  for (const href of hrefs) {
    for (const rule of bannedLinkRules) {
      if (rule.re.test(href)) {
        fail(`Banned funnel-like link found in ${file}: ${rule.label} -> ${href}`);
      }
    }
  }

  const actionTexts = getActionTexts(text).map(normalizeForScan);
  for (const actionText of actionTexts) {
    for (const rule of riskyCtaRules) {
      if (rule.re.test(actionText)) {
        warn(`Potentially risky CTA text in ${file}: "${actionText}" (${rule.label})`);
      }
    }
  }

  if (sponsorMentionPattern.test(scanText) && !sponsorLabelPattern.test(scanText)) {
    fail(`Sponsor mention found without "sponsorlu icerik" label in ${file}`);
  }

  if (/\.tsx["']/.test(text)) {
    warn(`TSX import found in ${file}. Prefer .astro unless interactivity is necessary.`);
  }

  if (file.endsWith(".astro")) {
    const sentences = text
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const longSentences = sentences.filter((s) => s.split(/\s+/).length > 26).length;
    if (longSentences > 6) {
      warn(
        `High long-sentence count in ${file} (${longSentences}). Consider simplifying for 8-10th grade readability.`
      );
    }
  }
}

if (fs.existsSync(path.join(root, articleRouteFile))) {
  const articleRouteText = fs.readFileSync(path.join(root, articleRouteFile), "utf8");
  if (!/ArticleTransparencyPanel[^>]*variant=['"]disclaimer['"]/u.test(articleRouteText)) {
    fail(`Missing medical disclaimer block usage in ${articleRouteFile}`);
  }
}

if (fs.existsSync(path.join(root, articleTransparencyComponentFile))) {
  const transparencyText = normalizeForScan(
    fs.readFileSync(path.join(root, articleTransparencyComponentFile), "utf8")
  );
  if (!/\btibbi\s+tani\s+ve\s+tedavi\s+yerine\s+gecmez\b/u.test(transparencyText)) {
    fail(`Medical disclaimer phrase is missing in ${articleTransparencyComponentFile}`);
  }
}

if (hasError) {
  process.exit(1);
}

if (warnCount > 0) {
  console.log(`Compliance check passed with ${warnCount} warning(s).`);
} else {
  console.log(`Compliance check passed for ${auditedFiles.length} audited file(s).`);
}
