import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'public/images/hero/home-hero-luxury-editorial.webp');
const outDir = path.join(root, 'public/images/hero');

const meta = await sharp(src).metadata();
console.log('source', meta.width, meta.height, meta.format, `${Math.round((meta.size ?? 0) / 1024)}KB`);

for (const width of [640, 960, 1280, 1600]) {
  const out = path.join(outDir, `home-hero-luxury-editorial-${width}.webp`);
  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(out);
  console.log(width, `${Math.round(info.size / 1024)}KB`, `${info.width}x${info.height}`);
}
