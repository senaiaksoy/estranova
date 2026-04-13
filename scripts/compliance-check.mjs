import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredDocs = [
  "AGENTS.md",
  "CLAUDE.md",
  "COMPLIANCE_CHECKLIST.md",
];

const auditedFiles = [
  "src/pages/index.astro",
  "src/pages/about.astro",
  "src/pages/authors.astro",
  "src/pages/editorial-policy.astro",
  "src/pages/medical-disclaimer.astro",
  "src/pages/library.astro",
  "src/pages/symptoms.astro",
  "src/pages/article.astro",
  "src/pages/methodology.astro",
  "src/layouts/SiteLayout.astro",
  "src/components/home/HomeHero.astro",
  "src/components/home/ExpertBoardSection.astro",
  "src/components/home/LifeStagesSection.astro",
  "src/components/home/FeaturedResearchSection.astro",
  "src/components/home/SymptomLibrarySection.astro",
  "src/components/home/HomeEditorialSection.astro",
  "src/components/site/SiteNavbar.astro",
  "src/components/site/SiteFooter.astro",
];

const bannedPhraseRules = [
  { label: "randevu al", re: /\brandevu\s+al\b/u },
  { label: "hemen baslayin", re: /\bhemen\s+baslayin\b/u },
  { label: "ucretsiz muayene", re: /\bucretsiz\s+muayene\b/u },
  { label: "ucretsiz konsultasyon", re: /\bucretsiz\s+konsultasyon\b/u },
  { label: "en iyi", re: /\ben\s+iyi\b/u },
  { label: "garanti", re: /\bgaranti\b/u },
  { label: "kesin cozum", re: /\bkesin\s+cozum\b/u },
  { label: "mucize", re: /\bmucize\b/u },
  { label: "simdi basla", re: /\bsimdi\s+basla\b/u },
];

const bannedLinkRules = [
  { label: "/assessment path", re: /\/assessment\b/u },
  { label: "/appointment path", re: /\/appointment\b/u },
  { label: "/book path", re: /\/book\b/u },
  { label: "/booking path", re: /\/booking\b/u },
  { label: "/consult path", re: /\/consult\b/u },
];

const riskyCtaRules = [
  { label: "basvur", re: /\bbasvur\b/u },
  { label: "kayit ol", re: /\bkayit\s+ol\b/u },
  { label: "teklif al", re: /\bteklif\s+al\b/u },
  { label: "hemen", re: /\bhemen\b/u },
  { label: "ucretsiz degerlendirme", re: /\bucretsiz\s+degerlendirme\b/u },
];

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

  if (/\.tsx["']/.test(text)) {
    warn(`TSX import found in ${file}. Prefer .astro unless interactivity is necessary.`);
  }

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

if (hasError) {
  process.exit(1);
}

if (warnCount > 0) {
  console.log(`Compliance check passed with ${warnCount} warning(s).`);
} else {
  console.log("Compliance check passed for audited pages.");
}
