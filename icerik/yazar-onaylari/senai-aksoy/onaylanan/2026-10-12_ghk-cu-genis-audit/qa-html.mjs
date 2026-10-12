import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { decode, visibleText } from 'file:///C:/Users/KC3/.codex/skills/senai-humanize/scripts/rendered-check.mjs';
const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '../../../../..');
const html = fs.readFileSync(path.join(root, 'dist/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt/index.html'), 'utf8');
const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => { const s = JSON.parse(m[1]); return Array.isArray(s) ? s : s['@graph'] ?? [s]; });
const faq = schemas.find(s => s['@type'] === 'FAQPage');
const article = schemas.find(s => s['@type'] === 'Article');
const faqSection = html.match(/<section\b[^>]*id="sik-sorulanlar"[^>]*>([\s\S]*?)<\/section>/)?.[1];
if (!faqSection) throw new Error('Visible FAQ section missing.');
const details = [...faqSection.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)].map(m => {
  const summary = m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/);
  return { question: visibleText(summary[1]).replace(/^\d+\s*/, '').replace(/\s*\+$/, '').trim(), answer: visibleText(m[1].replace(summary[0], '')).replace(/\s+/g, ' ').trim() };
});
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const sourceRefs = [...new Set([...html.matchAll(/href="#(kaynak-\d+)"/g)].map(m => m[1]))];
const ogImage = decode(html.match(/<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/)?.[1] ?? '');
const normalize = s => s.replace(/\s+/g, ' ').trim();
const matched = details.filter((d, i) => d.question === faq?.mainEntity[i]?.name && normalize(d.answer) === normalize(faq.mainEntity[i].acceptedAnswer.text)).length;
const report = {h1: [...html.matchAll(/<h1\b/g)].length, faqQuestions: details.length, faqParity: matched === 5 && faq.mainEntity.length === 5, evidenceLabels: [...html.matchAll(/aria-label="Kanıt düzeyi:/g)].length, sourceAnchors: sourceRefs.length, brokenSourceAnchors: sourceRefs.filter(id => !ids.includes(id)), duplicateIds: [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))], ogImage, schemaImage: article.image?.url ?? article.image, imageParity: ogImage === (article.image?.url ?? article.image), reviewer: schemas.find(s => s['@type'] === 'MedicalWebPage')?.reviewedBy?.name, dateModified: article.dateModified, faqMatched: matched};
fs.writeFileSync(path.join(dir, 'qa-html.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
if (report.h1 !== 1 || !report.faqParity || report.evidenceLabels !== 5 || report.sourceAnchors !== 13 || report.brokenSourceAnchors.length || report.duplicateIds.length || !report.imageParity) process.exitCode = 1;

