/**
 * Zamanlanmış yayın yolları — gelecekte yayına girecek sayfalar.
 *
 * Bu dosya bilerek düz JavaScript (`.mjs`) olarak tutulur: `astro.config.mjs`
 * Node tarafından doğrudan yüklenir ve Cloudflare Pages'in Node sürümü (22.12)
 * deneysel TypeScript tip-soyma desteğine sahip değildir. Bir `.ts` dosyasını
 * config'e import etmek prod build'i sessizce kırıyordu ("No deployment
 * available"). Tipler `scheduled-releases.ts` sarmalayıcısından gelir.
 *
 * @typedef {{ path: string, releaseDate: string }} ScheduledRelease
 */

/** @type {ScheduledRelease[]} */
export const scheduledReleasePaths = [
  { path: '/sayi/02-haziran-2026-guc-esigi/', releaseDate: '2026-06-01' },
  { path: '/dosya/2026-06-guc-esigi/', releaseDate: '2026-06-01' },
  { path: '/editorun-kosesi/haziran-2026/', releaseDate: '2026-06-01' },
  {
    path: '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/hormonal-gecis/40-sonrasi/yorgunluk-kas-tiroid-metabolizma/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/',
    releaseDate: '2026-06-01',
  },
  {
    path: '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/',
    releaseDate: '2026-06-01',
  },
];

/**
 * @param {Date} [date]
 * @returns {string}
 */
export function todayInTurkeyISO(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/**
 * @param {string} pathname
 * @param {Date} [date]
 * @returns {boolean}
 */
export function isPathScheduled(pathname, date = new Date()) {
  // Enforce leading slash and trailing slash to match our list
  let normalizedPath = pathname;
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath;
  }
  if (!normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath + '/';
  }

  const today = todayInTurkeyISO(date);
  const match = scheduledReleasePaths.find((item) => item.path === normalizedPath);
  return match ? match.releaseDate > today : false;
}
