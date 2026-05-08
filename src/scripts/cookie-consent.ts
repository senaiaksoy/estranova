/**
 * Çerez onay banner'ı — istemci mantığı.
 *
 * Akış:
 *   1. Sayfa yüklendiğinde `#estranova-cookie-banner` aranır.
 *      • Yoksa (banner feature flag kapalı) sessizce çıkılır.
 *      • Varsa karar verilmemişse 1.5s sonra şerit kayar.
 *   2. Kullanıcı butonları:
 *        Tümünü kabul et   → analytics: true
 *        Reddet            → analytics: false
 *        Tercihler         → şerit dikey büyür (kategori toggle)
 *        Tercihlerimi kaydet → toggle değerine göre yazar
 *        ESC / kapat (X)    → analytics: false (12 ay tekrar sorulmaz)
 *   3. Karar yazıldığında `estranova:consent-change` event yayılır;
 *      `loadAnalytics()` analytics onayı geldiyse GA4'ü dinamik yükler.
 *   4. Footer'daki [data-cookie-trigger="open"] butonu banner'ı
 *      yeniden açar (mevcut karar pre-fill edilir).
 *
 * GA4 yapılandırma notu: panel tarafında data retention 14 ay,
 * Google Signals kapalı, ads personalization kapalı tutulur. Bu kod
 * `anonymize_ip`, `allow_google_signals: false`, `allow_ad_personalization_signals: false`
 * gönderir; ek korumadır, panel ayarının yerine geçmez.
 */

import { featureFlags } from '../utils/feature-flags';
import {
  CONSENT_EVENT,
  hasDecided,
  readConsent,
  writeConsent,
  type ConsentState,
} from '../utils/consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __estranovaGa4Loaded?: boolean;
  }
}

const BANNER_ID = 'estranova-cookie-banner';
const SHOW_DELAY_MS = 1500;

function getBanner(): HTMLElement | null {
  return document.getElementById(BANNER_ID);
}

function setVisible(banner: HTMLElement, visible: boolean): void {
  banner.dataset.state = visible ? 'open' : 'closed';
  banner.setAttribute('aria-hidden', visible ? 'false' : 'true');
  if (visible) {
    const focusTarget = banner.querySelector<HTMLButtonElement>('[data-action="reject-all"]');
    focusTarget?.focus();
  }
}

function setView(banner: HTMLElement, view: 'collapsed' | 'expanded'): void {
  banner.dataset.view = view;
  const collapsedSection = banner.querySelector<HTMLElement>('[data-section="collapsed"]');
  const expandedSection = banner.querySelector<HTMLElement>('[data-section="expanded"]');
  if (collapsedSection) collapsedSection.hidden = view !== 'collapsed';
  if (expandedSection) expandedSection.hidden = view !== 'expanded';
  if (view === 'expanded') {
    const existing = readConsent();
    const analyticsToggle = banner.querySelector<HTMLInputElement>('[data-toggle="analytics"]');
    if (analyticsToggle) {
      analyticsToggle.checked = existing?.analytics === true;
    }
  }
}

function close(banner: HTMLElement): void {
  setVisible(banner, false);
  setView(banner, 'collapsed');
}

function handleAction(banner: HTMLElement, action: string): void {
  switch (action) {
    case 'accept-all':
      writeConsent({ analytics: true });
      close(banner);
      break;
    case 'reject-all':
      writeConsent({ analytics: false });
      close(banner);
      break;
    case 'open-preferences':
      setView(banner, 'expanded');
      break;
    case 'save-preferences': {
      const toggle = banner.querySelector<HTMLInputElement>('[data-toggle="analytics"]');
      writeConsent({ analytics: toggle?.checked === true });
      close(banner);
      break;
    }
    case 'close':
      writeConsent({ analytics: false });
      close(banner);
      break;
  }
}

async function loadAnalytics(state: ConsentState): Promise<void> {
  if (!state.analytics) return;
  if (!featureFlags.analyticsEnabled) return;
  const measurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined;
  if (!measurementId) return;
  if (window.__estranovaGa4Loaded) return;
  window.__estranovaGa4Loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  const gtag = (...args: unknown[]): void => {
    window.dataLayer?.push(args);
  };
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

function init(): void {
  const banner = getBanner();
  if (!banner) return;

  banner.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const trigger = target.closest<HTMLElement>('[data-action]');
    if (!trigger) return;
    const action = trigger.dataset.action;
    if (action) handleAction(banner, action);
  });

  banner.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      writeConsent({ analytics: false });
      close(banner);
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const trigger = target.closest<HTMLElement>('[data-cookie-trigger="open"]');
    if (!trigger) return;
    event.preventDefault();
    setView(banner, 'collapsed');
    setVisible(banner, true);
  });

  window.addEventListener(CONSENT_EVENT, (event) => {
    const detail = (event as CustomEvent<ConsentState>).detail;
    void loadAnalytics(detail);
  });

  const existing = readConsent();
  if (existing) {
    void loadAnalytics(existing);
  } else if (!hasDecided()) {
    window.setTimeout(() => setVisible(banner, true), SHOW_DELAY_MS);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
