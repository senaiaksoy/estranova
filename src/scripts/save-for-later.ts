/**
 * "Sonra Oku" — localStorage tabanlı kişisel okuma listesi.
 *
 * Hiçbir kişisel veri sunucuya gönderilmez; tüm liste yalnızca okurun
 * kendi tarayıcısında saklanır. Faz 2'de Supabase'e migrate edilebilir
 * (kayıtlı kullanıcılar için), localStorage senkronizasyon kaynağı kalır.
 *
 * Bu script tüm sayfalarda yüklenir (SiteLayout sonu) — hem makale
 * sayfalarındaki SaveForLaterButton hem de SiteNavbar'daki "Listemde X"
 * göstergecini yönetir.
 */

interface SavedItem {
  slug: string;
  title: string;
  savedAt: string; // ISO timestamp
}

const STORAGE_KEY = 'estranova:save-for-later';
const SECTION_LABELS: Record<string, string> = {
  'hormonal-gecis': 'Hormonal Geçiş',
  'zihin-denge': 'Zihin & Denge',
  'beden-yakinlik': 'Beden & Yakınlık',
  'zamansiz-yasam': 'Zamansız Yaşam',
  'bilimsel-pencere': 'Bilimsel Pencere',
  dosya: 'Dosya',
  sayi: 'Sayı',
};

function getSavedItems(): SavedItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setSavedItems(items: SavedItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isSaved(slug: string): boolean {
  return getSavedItems().some((item) => item.slug === slug);
}

function toggleSave(slug: string, title: string): SavedItem[] {
  let items = getSavedItems();
  if (isSaved(slug)) {
    items = items.filter((item) => item.slug !== slug);
  } else {
    items = [
      { slug, title, savedAt: new Date().toISOString() },
      ...items,
    ];
  }
  setSavedItems(items);
  return items;
}

function updateButtonState(button: HTMLButtonElement): void {
  const slug = button.dataset.slug;
  const labelEl = button.querySelector<HTMLElement>('[data-save-label]');
  if (!slug || !labelEl) return;
  const saved = isSaved(slug);
  button.dataset.saved = saved ? 'true' : 'false';
  button.setAttribute('aria-pressed', saved ? 'true' : 'false');
  labelEl.textContent = saved ? 'Listenizde' : 'Sonra Oku';
  button.setAttribute(
    'aria-label',
    saved
    ? 'Bu yazıyı okuma listenizden çıkar'
      : 'Bu yazıyı sonra oku listesine ekle',
  );
}

function updateHeaderCounter(): void {
  const items = getSavedItems();
  document.querySelectorAll<HTMLElement>('[data-save-counter]').forEach((el) => {
    el.textContent = String(items.length);
    if (items.length > 0) {
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', 'hidden');
    }
  });
  document.querySelectorAll<HTMLElement>('[data-save-counter-link]').forEach((el) => {
    if (items.length > 0) {
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', 'hidden');
    }
  });
}

function renderSavedListPage(): void {
  const container = document.querySelector<HTMLElement>('[data-saved-list]');
  const emptyState = document.querySelector<HTMLElement>('[data-saved-empty]');
  const listShell = document.querySelector<HTMLElement>('[data-saved-shell]');
  const countEl = document.querySelector<HTMLElement>('[data-saved-count]');
  if (!container) return;

  const items = getSavedItems();

  if (items.length === 0) {
    if (emptyState) emptyState.removeAttribute('hidden');
    if (listShell) listShell.setAttribute('hidden', 'hidden');
    if (countEl) countEl.textContent = '0';
    container.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.setAttribute('hidden', 'hidden');
  if (listShell) listShell.removeAttribute('hidden');
  if (countEl) countEl.textContent = String(items.length);

  container.innerHTML = items
    .map((item, index) => {
      const safeTitle = escapeHtml(item.title);
      const safeSlug = escapeHtml(item.slug);
      const sectionKey = safeSlug
        .split('/')
        .filter(Boolean)[0]
        ?? '';
      const sectionLabel = SECTION_LABELS[sectionKey] ?? 'Okuma';
      const date = new Date(item.savedAt);
      const formattedDate = isNaN(date.getTime())
        ? ''
        : date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
      return `
        <li class="px-5 py-5 md:px-7 md:py-6">
          <article class="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <a href="${safeSlug}" class="group flex min-w-0 gap-4">
              <span class="mt-1 hidden font-serif text-4xl italic leading-none text-gold md:block">
                ${String(index + 1).padStart(2, '0')}
              </span>
              <span class="min-w-0">
                <span class="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                  <span>${formattedDate ? `Kaydedildi · ${formattedDate}` : 'Kaydedildi'}</span>
                  <span class="h-1 w-1 rounded-full bg-gold/70" aria-hidden="true"></span>
                  <span>${sectionLabel}</span>
                </span>
                <span class="block font-serif text-2xl leading-snug tracking-[-0.02em] text-ink transition group-hover:text-primary md:text-3xl">
                  ${safeTitle}
                </span>
                <span class="mt-2 block truncate text-xs text-ink/45">${safeSlug}</span>
              </span>
            </a>
            <button
              type="button"
              data-remove-slug="${safeSlug}"
              class="shrink-0 rounded-full border border-primary/18 bg-cream-soft px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80 transition hover:-translate-y-0.5 hover:border-primary/45 hover:bg-cream-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
              aria-label="Bu yazıyı listemden çıkar"
            >
              Listeden çıkar
            </button>
          </article>
        </li>
      `;
    })
    .join('');

  // Remove buton dinleyicilerini bağla
  container.querySelectorAll<HTMLButtonElement>('[data-remove-slug]').forEach((removeBtn) => {
    removeBtn.addEventListener('click', () => {
      const slug = removeBtn.dataset.removeSlug;
      if (!slug) return;
      const items = getSavedItems().filter((i) => i.slug !== slug);
      setSavedItems(items);
      renderSavedListPage();
      updateHeaderCounter();
    });
  });
}

function init(): void {
  // Buton dinleyicileri
  document.querySelectorAll<HTMLButtonElement>('[data-save-button]').forEach((btn) => {
    updateButtonState(btn);
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const slug = btn.dataset.slug;
      const title = btn.dataset.title;
      if (!slug || !title) return;
      toggleSave(slug, title);
      updateButtonState(btn);
      updateHeaderCounter();
    });
  });

  // Header counter
  updateHeaderCounter();

  // Eğer /sonra-oku sayfasındaysak listeyi render et
  renderSavedListPage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Sekmeler arası senkronizasyon
window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEY) return;
  document.querySelectorAll<HTMLButtonElement>('[data-save-button]').forEach((btn) => {
    updateButtonState(btn);
  });
  updateHeaderCounter();
  renderSavedListPage();
});
