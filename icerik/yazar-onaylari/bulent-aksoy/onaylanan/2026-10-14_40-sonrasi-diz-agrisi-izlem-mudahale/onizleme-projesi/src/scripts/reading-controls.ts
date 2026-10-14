/**
 * "A− / A / A+" okuma kontrolü — yazı boyutu tercihini
 * --reader-scale CSS custom property'sine yansıtır ve
 * localStorage'da saklar. Sekmeler arası senkronizasyon dahil.
 *
 * Tercih scale değerleri: 0.9 / 1 (varsayılan) / 1.15 / 1.3.
 * `prose-estranova` body paragraflarına etki eder:
 *   font-size: calc(17px * var(--reader-scale, 1))
 */

const STORAGE_KEY = 'estranova:reader-scale';
const VALID_SCALES = ['0.9', '1', '1.15', '1.3'];
const DEFAULT_SCALE = '1';

function getStoredScale(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && VALID_SCALES.includes(raw)) return raw;
  } catch {
    /* empty */
  }
  return DEFAULT_SCALE;
}

function setStoredScale(scale: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, scale);
  } catch {
    /* empty */
  }
}

function applyScale(scale: string): void {
  document.documentElement.style.setProperty('--reader-scale', scale);
}

function refreshActiveButtons(scale: string): void {
  document.querySelectorAll<HTMLButtonElement>('[data-reading-scale]').forEach((btn) => {
    const isActive = btn.dataset.readingScale === scale;
    if (isActive) {
      btn.dataset.active = 'true';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      delete btn.dataset.active;
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

function init(): void {
  const initial = getStoredScale();
  applyScale(initial);
  refreshActiveButtons(initial);

  document.querySelectorAll<HTMLButtonElement>('[data-reading-scale]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const scale = btn.dataset.readingScale;
      if (!scale || !VALID_SCALES.includes(scale)) return;
      setStoredScale(scale);
      applyScale(scale);
      refreshActiveButtons(scale);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEY) return;
  const newScale = getStoredScale();
  applyScale(newScale);
  refreshActiveButtons(newScale);
});

// Sayfa hidratasyonu sırasında saklanan scale'i mümkün olduğunca erken
// uygulamak için (FOUC'u azaltır) — kayıtlı scale'i hemen uygula:
applyScale(getStoredScale());
