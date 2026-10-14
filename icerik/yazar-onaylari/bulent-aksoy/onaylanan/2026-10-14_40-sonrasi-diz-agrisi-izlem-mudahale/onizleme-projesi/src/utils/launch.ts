/**
 * `PUBLIC_LAUNCH_MODE=production` iken site canlı kabul edilir (indeks + robots izinli).
 * Aksi halde ön-lansman: noindex ve robots.txt ile tarama engellenir.
 */
export function isProductionLaunch(): boolean {
  return import.meta.env.PUBLIC_LAUNCH_MODE === 'production';
}
