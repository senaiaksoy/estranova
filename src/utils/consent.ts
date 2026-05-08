/**
 * Çerez onay durumu — localStorage tabanlı.
 *
 * Estranova şu an analitik / pazarlama çerezi yüklemez. Bu modül,
 * `featureFlags.cookieBannerEnabled` aktive edildiğinde devreye girer:
 *   • Kullanıcı kararı `localStorage.estranova_consent_v1` altında saklanır
 *   • Karar 12 ay (CONSENT_DURATION_MS) sonra geçersiz sayılır ve
 *     yeniden sorulur
 *   • Bir karar yazıldığında `estranova:consent-change` custom event
 *     fırlatılır; GA4 yükleyicisi bu olayı dinler
 *
 * Bu modül SSR güvenlidir: `window`/`localStorage` yokken sessizce
 * `null` döner ve hata fırlatmaz.
 */

export const CONSENT_STORAGE_KEY = 'estranova_consent_v1';
export const CONSENT_EVENT = 'estranova:consent-change';
export const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000;

export interface ConsentState {
  version: 1;
  analytics: boolean;
  decidedAt: string;
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

export function readConsent(): ConsentState | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== 1 || typeof parsed.analytics !== 'boolean' || typeof parsed.decidedAt !== 'string') {
      return null;
    }
    const decidedAt = Date.parse(parsed.decidedAt);
    if (Number.isNaN(decidedAt)) return null;
    if (Date.now() - decidedAt > CONSENT_DURATION_MS) return null;
    return { version: 1, analytics: parsed.analytics, decidedAt: parsed.decidedAt };
  } catch {
    return null;
  }
}

export function writeConsent(input: { analytics: boolean }): ConsentState | null {
  if (!isBrowser()) return null;
  const state: ConsentState = {
    version: 1,
    analytics: input.analytics,
    decidedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    return null;
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  return state;
}

export function hasDecided(): boolean {
  return readConsent() !== null;
}

export function analyticsAllowed(): boolean {
  return readConsent()?.analytics === true;
}
