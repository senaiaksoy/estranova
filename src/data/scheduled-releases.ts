export interface ScheduledRelease {
  path: string;
  releaseDate: string;
}

export const scheduledReleasePaths: ScheduledRelease[] = [
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

export function todayInTurkeyISO(date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function isPathScheduled(pathname: string, date = new Date()): boolean {
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
