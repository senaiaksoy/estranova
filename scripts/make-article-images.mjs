#!/usr/bin/env node
/**
 * Makale görseli üretici — tek komutta iki kanonik kırpımı çıkarır:
 *   - byline  1200×1500  (4:5 dikey)   → ArticleAuthorBlock imageSrc
 *   - card    2400×1000  (2.4:1 yatay)  → articleCardImageByRoute
 *
 * NEDEN BU SCRIPT VAR:
 *   4:5 (0.80) ile 2.4:1 (2.40) oranları birbirine çok uzaktır. Tek bir AI
 *   görselini elle `position` (centre/north/east) tahminiyle ikisine birden
 *   sokmak her seferinde yüzü kesiyor veya kompozisyonu bozuyordu. Bu script
 *   iki sorunu çözer:
 *     1) İki kırpımı TEK komutta, sabit ve doğru oranlarla üretir.
 *     2) Varsayılan olarak sharp `attention` stratejisiyle yüz/ilgi bölgesine
 *        göre otomatik kırpar; elle position tahmini gerekmez.
 *
 * ÖNERİLEN KULLANIM (en temiz sonuç):
 *   Byline ve kart için AMACA ÖZEL iki ayrı kaynak üretin —
 *   dikey (3:4 / 9:16) kaynak byline'a, yatay (16:9) kaynak karta. Böylece
 *   her kırpım minimum bilgi kaybıyla oluşur.
 *
 *     node scripts/make-article-images.mjs \
 *       --slug=olcu-panigi-beden-algisi \
 *       --byline-src="C:/.../portrait.png" \
 *       --card-src="C:/.../landscape.png"
 *
 * TEK KAYNAK (hızlı ama daha çok kırpar):
 *   --src tek başına verilirse hem byline hem kart ondan üretilir.
 *
 *     node scripts/make-article-images.mjs --slug=... --src="C:/.../source.png"
 *
 * SEÇENEKLER:
 *   --slug=<ad>            Zorunlu. Çıktı: <slug>-byline.webp + <slug>.webp
 *   --src=<yol>            Ortak kaynak (byline-src/card-src verilmezse)
 *   --byline-src=<yol>     Byline için özel kaynak
 *   --card-src=<yol>       Kart için özel kaynak
 *   --byline-pos=<pos>     Kırpım hizası (varsayılan: attention)
 *   --card-pos=<pos>       Kırpım hizası (varsayılan: attention)
 *   --outdir=<yol>         Çıktı klasörü (varsayılan: public/images/library/editorial)
 *   --quality=<0-100>      webp kalitesi (varsayılan: 82)
 *
 * pos değerleri: attention | entropy | centre | north | south | east | west |
 *                northeast | northwest | southeast | southwest
 *   attention = yüz/kontrast yoğun bölgeye göre otomatik (varsayılan, önerilir)
 *   entropy   = detay yoğun bölgeye göre otomatik
 *
 * Not: sharp ana bağımlılık değil; script `npm exec` ile de çalışır:
 *   npm exec --yes --package=sharp -- node scripts/make-article-images.mjs ...
 */

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const BYLINE = { w: 1200, h: 1500, label: 'byline 4:5' };
const CARD = { w: 2400, h: 1000, label: 'card 2.4:1' };
const DEFAULT_OUTDIR = 'public/images/library/editorial';

const SMART = new Set(['attention', 'entropy']);
const GRAVITY = new Set([
  'centre', 'center', 'north', 'south', 'east', 'west',
  'northeast', 'northwest', 'southeast', 'southwest',
]);

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
    else if (arg.startsWith('--')) out[arg.slice(2)] = true;
  }
  return out;
}

function resolvePosition(pos) {
  const p = (pos || 'attention').toLowerCase();
  if (SMART.has(p)) return { strategy: sharp.strategy[p] };
  if (GRAVITY.has(p)) return { gravity: p === 'center' ? 'centre' : p };
  throw new Error(`Geçersiz position: ${pos}`);
}

async function crop(src, dst, target, pos, quality) {
  if (!fs.existsSync(src)) throw new Error(`Kaynak bulunamadı: ${src}`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const resizeOpts = { fit: 'cover', ...resolvePosition(pos) };
  const info = await sharp(src)
    .resize(target.w, target.h, resizeOpts)
    .webp({ quality })
    .toFile(dst);
  const kb = Math.round(fs.statSync(dst).size / 1024);
  console.log(`  ${target.label.padEnd(12)} ${info.width}×${info.height}  ${String(kb).padStart(4)} KB  → ${path.relative(process.cwd(), dst)}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.slug) {
    console.error('Hata: --slug zorunlu.');
    console.error('Örnek: node scripts/make-article-images.mjs --slug=olcu-panigi --byline-src=portrait.png --card-src=landscape.png');
    process.exit(1);
  }

  const bylineSrc = args['byline-src'] || args.src;
  const cardSrc = args['card-src'] || args.src;

  if (!bylineSrc || !cardSrc) {
    console.error('Hata: --src ver ya da --byline-src ve --card-src birlikte ver.');
    process.exit(1);
  }

  const outdir = args.outdir || DEFAULT_OUTDIR;
  const quality = args.quality ? parseInt(args.quality, 10) : 82;
  const bylineDst = path.resolve(outdir, `${args.slug}-byline.webp`);
  const cardDst = path.resolve(outdir, `${args.slug}.webp`);

  if (bylineSrc === cardSrc) {
    console.log(`Kaynak (tek): ${bylineSrc}`);
    console.log('Uyarı: tek kaynaktan 4:5 + 2.4:1 üretiliyor; amaca özel iki kaynak daha temiz sonuç verir.');
  } else {
    console.log(`Byline kaynak: ${bylineSrc}`);
    console.log(`Kart kaynak:   ${cardSrc}`);
  }

  await crop(bylineSrc, bylineDst, BYLINE, args['byline-pos'], quality);
  await crop(cardSrc, cardDst, CARD, args['card-pos'], quality);

  console.log('OK');
  console.log('\nSonraki adım — src/data/submenu-heroes.ts:');
  console.log(`  articleCardImageByRoute['<rota>'] = { src: '/images/library/editorial/${args.slug}.webp', alt: '...' };`);
  console.log('ArticleAuthorBlock:');
  console.log(`  imageSrc="/images/library/editorial/${args.slug}-byline.webp"`);
}

main().catch((e) => {
  console.error('Hata:', e.message);
  process.exit(1);
});
