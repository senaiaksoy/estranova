import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
const dir = new URL('./', import.meta.url);
const route = '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/';
const page = fs.readFileSync(`dist${route}index.html`, 'utf8');
const norm = (s) => s.replace(/<[^>]*>/g, '').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const schemas = [...page.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => JSON.parse(m[1]));
const article = schemas.find((s) => s['@type'] === 'Article');
const medical = schemas.find((s) => s['@type'] === 'MedicalWebPage');
const faq = schemas.find((s) => s['@type'] === 'FAQPage');
assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
assert.equal(article.datePublished, '2026-05-06');
assert.equal(article.dateModified, '2026-10-12');
assert.equal(medical.reviewedBy.name, 'Dr. Alper Mumcu');
assert.equal(article.author['@id'], 'https://senaiaksoy.net/#person');
assert(schemas.some((s) => s['@id'] === article.author['@id'] && s['@type'] === 'Person'));
const og = page.match(/<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/)[1];
assert.equal(article.image, og);
assert.equal(medical.image, og);
assert(og.endsWith('/images/library/editorial/senai-hrt-meme-kanseri-hero.webp'));
assert(page.includes('rel="canonical" href="https://estranova.com' + route + '"'));
assert(!/name="robots"[^>]*content="[^"]*noindex/.test(page));
const section = page.slice(page.indexOf('<section id="sik-sorulanlar"'));
const details = [...section.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)];
assert.equal(details.length, 4);
assert.equal(faq.mainEntity.length, 4);
for (const [i, m] of details.entries()) {
  const spans = [...m[1].match(/<summary[^>]*>([\s\S]*?)<\/summary>/)[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)];
  const answer = [...m[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((p) => norm(p[1])).join(' ');
  assert.equal(norm(spans[1][1]), norm(faq.mainEntity[i].name));
  assert.equal(answer, norm(faq.mainEntity[i].acceptedAnswer.text));
}
const faqPath = 'src/data/article-faqs.ts';
assert.equal(fs.readFileSync(faqPath, 'utf8'), execFileSync('git', ['show', 'f0d9fc17:' + faqPath], { encoding: 'utf8' }));
for (const match of page.matchAll(/href="#([^"]+)"/g)) assert(page.includes('id="' + match[1] + '"'), `Missing anchor ${match[1]}`);
for (let i = 1; i <= 7; i++) assert(page.includes('href="#kaynak-' + i + '"'));
const source = fs.readFileSync('src/pages' + route.slice(0, -1) + '.astro', 'utf8');
const original = fs.readFileSync(new URL('onceki-surum.astro', dir), 'utf8');
function prose(s) {
  s = s.slice(s.indexOf('      <ArticleSummary'), s.indexOf('      <ArticleDisclaimer>'));
  return s.replace(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/g, (_, n, t) => '\n' + '#'.repeat(+n) + ' ' + t + '\n')
    .replace(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, u, t) => `[${t}](${u})`)
    .replace(/<Evidence\s+level=\{(\d)\}\s*\/>/g, (_, n) => `(Kanıt düzeyi ${n}/5)`)
    .replace(/<Evidence\s+from=\{(\d)\}\s+to=\{(\d)\}\s*\/>/g, (_, a, b) => `(Kanıt düzeyi ${a}–${b}/5)`)
    .replace(/<(?:RedFlagBox|ArticleFAQ|RelatedReadings)[\s\S]*?\/>/g, '')
    .replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '')
    .replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/ +([.,;])/g, '$1').trim();
}
fs.writeFileSync(new URL('once.md', dir), prose(original));
fs.writeFileSync(new URL('sonra.md', dir), prose(source));
const note = (s) => s.slice(s.indexOf('      <ArticleEditorNote>'), s.indexOf('      <ArticleDisclaimer>'));
assert.equal(note(source).replace(/\r\n/g, '\n'), note(original).replace(/\r\n/g, '\n'));
assert(source.includes('counter-reset:estranova-chapter_8'));
assert(!source.includes('Bunların hiçbiri tek başına kapı kapatmaz'));
const live = fs.readFileSync(new URL('live-once.html', dir), 'utf8');
const result = {
  status: 'passed', h1: 1, faqParity: '4/4', unchangedPhysicianAnswers: true,
  unchangedPriorReviewerNote: true, sourcesCited: '7/7', anchors: 'all resolved',
  schemaOgBylineImage: og, author: article.author, reviewer: medical.reviewedBy.name,
  liveHasPriorUnsafeSentence: live.includes('Bunların hiçbiri tek başına kapı kapatmaz'),
  liveHasLocalRevisedSentence: live.includes('Meme kanseri öyküsünde sistemik hormon tedavisi genellikle önerilmez.'),
  browserVisualCheck: 'blocked: native bridge unavailable; local navigation ERR_BLOCKED_BY_CLIENT',
};
fs.writeFileSync(new URL('dogrulama.json', dir), JSON.stringify(result, null, 2));
fs.copyFileSync(`dist${route}index.html`, new URL('makale-onizleme.html', dir));
fs.copyFileSync('src/pages' + route.slice(0, -1) + '.astro', new URL('site-kaynak.astro', dir));
console.log(JSON.stringify(result, null, 2));
