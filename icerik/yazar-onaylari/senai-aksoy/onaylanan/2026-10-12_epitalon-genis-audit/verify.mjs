import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const dir = path.dirname(fileURLToPath(import.meta.url));
const page = 'src/pages/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma.astro';
const baseline = fs.readFileSync(path.join(dir, 'onceki-surum.astro'), 'utf8');
const current = fs.readFileSync(page, 'utf8');
const faq = s => s.slice(s.indexOf('        <h3>Epitalon menopozu'), s.indexOf('        <h2 id="kapanis">'));
const allowedLanguageEdit = s => s.replace('takip etmenin en iyi yolu', 'takip etmenin uygun yolu');
assert.equal(faq(current), allowedLanguageEdit(faq(baseline)), 'Only documented nonclinical wording change allowed in physician answers');
const clean = s => s.replace(/<Evidence[^>]+\/>/g, '').replace(/\{[^}]*\}/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();
function extract(s) {
  return [...s.slice(s.indexOf('<main')).matchAll(/<(h[23]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)]
    .map(m => (m[1] === 'h2' ? '## ' : m[1] === 'h3' ? '### ' : '') + clean(m[2])).join('\n\n');
}
fs.writeFileSync(path.join(dir, 'once.md'), extract(baseline));
fs.writeFileSync(path.join(dir, 'sonra.md'), extract(current));
fs.writeFileSync(path.join(dir, 'iddialar.json'), JSON.stringify([
  {id:'klinik-kanit',pattern:'klinik (kanıt|veri)|insan (klinik |güvenlik |)kanıt|insanlarda.*(güvenli|yaşlanma)|laboratuvar.*klinik'},
  {id:'alt',pattern:'(?<![\\p{L}])ALT(?![\\p{L}])'},
  {id:'urun',pattern:'saflık|saf olup|sterilite|safsızlık|içerik.*(belirsiz|emin|güven)'},
  {id:'menopoz',pattern:'menopozu geciktir|menopoz başlangıcını|menopoz yaşını'}
], null, 2));
const html = fs.readFileSync('dist/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma/index.html', 'utf8');
const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => JSON.parse(m[1]));
const article = schemas.find(s=>s['@type']==='Article');
const medical = schemas.find(s=>s['@type']==='MedicalWebPage');
assert.equal((html.match(/<h1\b/g)||[]).length, 1);
assert.equal(article.dateModified, '2026-10-12');
assert.equal(article.datePublished, '2026-05-08');
assert.equal(medical.reviewedBy.name, 'Dr. Alper Mumcu');
assert.equal(schemas.filter(s=>s['@type']==='FAQPage').length, 0, 'FAQ schema is intentionally omitted');
assert.equal(article.image, 'https://estranova.com/images/library/editorial/bp-nad-plus.webp');
const og = html.match(/property="og:image"\s+content="([^"]+)"/);
assert.equal(og?.[1], article.image);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
for (const m of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(m[1]), `Missing anchor ${m[1]}`);
const qa = {
  h1:1, sources:6, physicianAnswers:5, physicianAnswersMeaningPreserved:true,
  physicianAnswerLanguageEdit:'Q5: en iyi yolu -> uygun yolu; compliance wording only', faqPage:0,
  image:article.image, reviewer:medical.reviewedBy.name, dateModified:article.dateModified,
  anchors:'all present', baselineCommit:'ad79f5d9',
  currentRevisionApproval:'pending; previous approval does not cover changed body/editor note',
  evidenceTagsBefore:(baseline.match(/<Evidence\b/g)||[]).length,
  evidenceTagsAfter:(current.match(/<Evidence\b/g)||[]).length,
};
fs.writeFileSync(path.join(dir,'dogrulama.json'),JSON.stringify(qa,null,2));
fs.copyFileSync(page,path.join(dir,'son-metin.astro'));
fs.copyFileSync('dist/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma/index.html',path.join(dir,'makale-onizleme.html'));
console.log(JSON.stringify(qa,null,2));
