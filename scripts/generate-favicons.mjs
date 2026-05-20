import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import opentype from 'opentype.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.cwd());
const pub = path.join(root, 'public');
const fontsDir = path.join(root, 'scripts/fonts');
const svg = await fs.readFile(path.join(pub, 'favicon.svg'));

// 1) Tight square renders (logomark fills frame)
const squareTargets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'estranova-logo-hd.png', size: 1024 },
];

for (const t of squareTargets) {
  await sharp(svg, { density: 384 })
    .resize(t.size, t.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pub, t.file));
  console.log('wrote', t.file);
}

// 2) favicon.ico — multi-size
const icoBuffers = [];
for (const s of [16, 32, 48]) {
  icoBuffers.push(
    await sharp(svg, { density: 384 })
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()
  );
}
await fs.writeFile(path.join(pub, 'favicon.ico'), await pngToIco(icoBuffers));
console.log('wrote favicon.ico');

// 3) og-default.png — full social card with logo + wordmark + tagline
async function loadFont(file) {
  const buf = await fs.readFile(path.join(fontsDir, file));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}
const manrope = await loadFont('Manrope-ExtraBold.ttf');
const kulim = await loadFont('KulimPark-SemiBold.ttf');

const ogW = 1200;
const ogH = 630;
const BRAND = '#DB2777';
const BG = '#FFF1F7';

// Wordmark "ESTRANOVA" — Manrope 800, large
const wordmarkSize = 110;
const wordmarkPath = manrope.getPath('ESTRANOVA', 0, 0, wordmarkSize, { letterSpacing: -0.015 });
const wbb = wordmarkPath.getBoundingBox();
const wordmarkW = wbb.x2 - wbb.x1;

// Tagline — Kulim Park 600, uppercase, tracked
const taglineSize = 28;
const taglineText = 'EDİTORYAL SAĞLIK PLATFORMU';
const taglinePath = kulim.getPath(taglineText, 0, 0, taglineSize, { letterSpacing: 0.18 });
const tbb = taglinePath.getBoundingBox();
const taglineW = tbb.x2 - tbb.x1;

// Logomark dimensions (target diameter)
const markD = 200;
const markGap = 40;

// Lockup: logomark + (wordmark stacked over tagline) horizontally centered
const textBlockW = Math.max(wordmarkW, taglineW);
const lockupW = markD + markGap + textBlockW;
const lockupStartX = (ogW - lockupW) / 2;

// Vertical center of OG
const centerY = ogH / 2;

const markX = lockupStartX;
const markY = centerY - markD / 2;

// Logomark scaled (favicon.svg is 200x200 — perfect at markD=200)
const markPng = await sharp(svg, { density: 768 })
  .resize(markD, markD, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const textStartX = lockupStartX + markD + markGap;
// Position wordmark baseline so its visual block is vertically centered with logomark
const wordmarkBaselineY = centerY - 8; // optical
const taglineBaselineY = wordmarkBaselineY + 52;

const wordmarkPositioned = manrope.getPath(
  'ESTRANOVA',
  textStartX - wbb.x1,
  wordmarkBaselineY,
  wordmarkSize,
  { letterSpacing: -0.015 }
);
const taglinePositioned = kulim.getPath(
  taglineText,
  textStartX - tbb.x1,
  taglineBaselineY,
  taglineSize,
  { letterSpacing: 0.18 }
);

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ogW} ${ogH}">
  <rect width="${ogW}" height="${ogH}" fill="${BG}"/>
  <path d="${wordmarkPositioned.toPathData(3)}" fill="${BRAND}"/>
  <path d="${taglinePositioned.toPathData(3)}" fill="${BRAND}"/>
</svg>`;

const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();
await sharp(ogBase)
  .composite([{ input: markPng, left: Math.round(markX), top: Math.round(markY) }])
  .png()
  .toFile(path.join(pub, 'og-default.png'));
console.log('wrote og-default.png (full lockup)');

console.log('\nDone.');
