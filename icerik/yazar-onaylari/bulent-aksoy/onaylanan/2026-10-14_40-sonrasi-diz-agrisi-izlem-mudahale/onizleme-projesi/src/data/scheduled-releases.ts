// Tipli sarmalayıcı. Çalışma zamanı verisi/fonksiyonları düz JS sibling'den gelir
// (`scheduled-releases.mjs`) çünkü `astro.config.mjs` Node tarafından doğrudan
// yüklenir ve Cloudflare'in Node 22.12 sürümü `.ts` import'unu desteklemez.
// Uygulama tarafı (SiteLayout, robots.txt.ts) bu dosyadan tip güvenli import eder.
export interface ScheduledRelease {
  path: string;
  releaseDate: string;
}

import {
  scheduledReleasePaths as _scheduledReleasePaths,
  todayInTurkeyISO as _todayInTurkeyISO,
  isPathScheduled as _isPathScheduled,
} from './scheduled-releases.mjs';

export const scheduledReleasePaths: ScheduledRelease[] = _scheduledReleasePaths;
export const todayInTurkeyISO: (date?: Date) => string = _todayInTurkeyISO;
export const isPathScheduled: (pathname: string, date?: Date) => boolean = _isPathScheduled;
