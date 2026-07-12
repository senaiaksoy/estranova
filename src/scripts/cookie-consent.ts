/**
 * Çerez onay banner'ı — istemci mantığı.
 *
 * Akış:
 *   1. Sayfa yüklendiğinde `#estranova-cookie-banner` aranır.
 *      • Yoksa (banner feature flag kapalı) sessizce çıkılır.
 *      • Varsa karar verilmemişse sayfa açılışında modal gösterilir.
 *   2. Kullanıcı butonları:
 *        Tümünü kabul et   → analytics: true
 *        Reddet            → analytics: false
 *        Tercihler         → şerit dikey büyür (kategori toggle)
 *        Tercihlerimi kaydet → toggle değerine göre yazar
 *   3. Karar yazıldığında `estranova:consent-change` event yayılır;
 *      `loadAnalytics()` GA4'ü kullanıcının kararına uygun Consent Mode
 *      durumuyla yükler. Kabulde analytics_storage granted, redde denied
 *      olur; reddeden ziyaretler çerezsiz temel ölçüm pingiyle sayılabilir.
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
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

let previousBodyOverflow: string | null = null;

function getBanner(): HTMLElement | null {
  return document.getElementById(BANNER_ID);
}

function setVisible(banner: HTMLElement, visible: boolean): void {
  banner.dataset.state = visible ? 'open' : 'closed';
  banner.setAttribute('aria-hidden', visible ? 'false' : 'true');
  if (visible) {
    if (previousBodyOverflow === null) {
      previousBodyOverflow = document.body.style.overflow;
    }
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => focusInitialControl(banner));
  } else {
    document.body.style.overflow = previousBodyOverflow ?? '';
    previousBodyOverflow = null;
  }
}

function getFocusableControls(banner: HTMLElement): HTMLElement[] {
  return Array.from(banner.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter((element) => {
    return !element.hasAttribute('hidden') && element.offsetParent !== null;
  });
}

function focusInitialControl(banner: HTMLElement): void {
  const focusTarget =
    banner.querySelector<HTMLButtonElement>('[data-action="accept-all"]') ??
    getFocusableControls(banner)[0];
  focusTarget?.focus();
}

function trapModalFocus(banner: HTMLElement, event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.preventDefault();
    focusInitialControl(banner);
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = getFocusableControls(banner);
  if (focusable.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
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
  }
}

async function loadAnalytics(state: ConsentState, options: { sendConsentEvent?: boolean } = {}): Promise<void> {
  if (!featureFlags.analyticsEnabled) return;
  const measurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined;
  if (!measurementId) return;
  const analyticsStorage = state.analytics ? 'granted' : 'denied';

  if (window.__estranovaGa4Loaded && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: analyticsStorage,
    });
    if (options.sendConsentEvent) {
      window.gtag('event', 'cookie_consent_choice', {
        analytics_consent: state.analytics ? 'accepted' : 'rejected',
        non_interaction: true,
      });
    }
    return;
  }

  // dataLayer + gtag stub MUST be initialized BEFORE the gtag.js script tag
  // is appended. We follow Google's official snippet exactly — function
  // declaration with `arguments` (not arrow + spread) — because gtag.js's
  // dataLayer processor handles the Arguments object more reliably than a
  // plain Array (verified empirically: spread variant left consent state
  // marked "implicit" and suppressed the auto page_view hit).
  window.dataLayer = window.dataLayer ?? [];
  // Rest param signature satisfies the type checker (gtag is called with
  // 2-3 args below). The body intentionally pushes `arguments` rather than
  // the rest array — gtag.js's dataLayer processor reads each entry's
  // index properties, and the Arguments object is what the official
  // Google snippet pushes; a plain Array left consent in implicit state
  // during testing.
  function gtag(..._args: unknown[]): void {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  }
  window.gtag = gtag;
  window.__estranovaGa4Loaded = true;

  // Consent Mode v2: declare the user's choice before loading gtag.js.
  // Accepted visitors get analytics_storage=granted. Rejected visitors keep
  // analytics_storage=denied, which lets GA4 receive cookieless consent-mode
  // pings without writing analytics cookies. ad_* signals stay denied:
  // Estranova does not run ads.
  gtag('consent', 'default', {
    analytics_storage: analyticsStorage,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  if (options.sendConsentEvent) {
    gtag('event', 'cookie_consent_choice', {
      analytics_consent: state.analytics ? 'accepted' : 'rejected',
      non_interaction: true,
    });
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
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
    trapModalFocus(banner, event);
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
    void loadAnalytics(detail, { sendConsentEvent: true });
  });

  const existing = readConsent();
  if (existing) {
    void loadAnalytics(existing);
  } else if (!hasDecided()) {
    // LCP'yi koru: ilk ziyarette modal hemen açılırsa beyaz kart LCP olur
    // (PSI filmstrip'te görülen senaryo). Hero/metin boyandıktan sonra aç.
    const openBanner = () => setVisible(banner, true);
    const scheduleOpen = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(openBanner, { timeout: 3200 });
      } else {
        window.setTimeout(openBanner, 1800);
      }
    };
    if (document.readyState === 'complete') {
      scheduleOpen();
    } else {
      window.addEventListener('load', scheduleOpen, { once: true });
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
