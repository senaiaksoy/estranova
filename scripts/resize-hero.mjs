#!/usr/bin/env node
/**
 * Hero görsel resize utility — Magnific upscale çıktısı → 1800×1000 webp.
 *
 * Kullanım:
 *   node scripts/resize-hero.mjs <kaynak-yol> <çıktı-yol-rel> [genişlik] [yükseklik] [position]
 *
 * Örnek:
 *   node scripts/resize-hero.mjs "C:/Users/KC3/Downloads/magnific_xxx.png" public/images/hero/home-hero.webp
 *
 * Varsayılan: 1800×1000, position 'top' (yüz üstte), webp quality 85.
 * CLAUDE.md hero standardı + 2026-04-25 V1 pipeline ile uyumlu.
 */

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const [, , srcArg, dstArg, wArg = '1800', hArg = '1000', positionArg = 'top'] = process.argv;

if (!srcArg || !dstArg) {
  console.error('Hata: kaynak ve çıktı yolu zorunlu.');
  console.error('Kullanım: node scripts/resize-hero.mjs <kaynak> <çıktı> [w=1800] [h=1000] [position=top]');
  process.exit(1);
}

const width = parseInt(wArg, 10);
const height = parseInt(hArg, 10);
const dst = path.resolve(dstArg);

if (!fs.existsSync(srcArg)) {
  console.error(`Kaynak bulunamadı: ${srcArg}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(dst), { recursive: true });

try {
  const meta = await sharp(srcArg).metadata();
  console.log(`Kaynak: ${meta.width}×${meta.height} ${meta.format}, ${(fs.statSync(srcArg).size / 1024 / 1024).toFixed(2)} MB`);

  const info = await sharp(srcArg)
    .resize(width, height, { fit: 'cover', position: positionArg })
    .webp({ quality: 85 })
    .toFile(dst);

  const sizeKB = Math.round(fs.statSync(dst).size / 1024);
  console.log(`Çıktı:  ${info.width}×${info.height} ${info.format}, ${sizeKB} KB → ${dstArg}`);
  console.log('OK');
} catch (e) {
  console.error('Resize hatası:', e.message);
  process.exit(1);
}
