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
  labelEl.textContent = saved ? 'Listende' : 'Sonra Oku';
  button.setAttribute(
    'aria-label',
    saved
      ? 'Bu yazıyı okuma listenden çıkar'
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
  if (!container) return;

  const items = getSavedItems();

  if (items.length === 0) {
    if (emptyState) emptyState.removeAttribute('hidden');
    container.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.setAttribute('hidden', 'hidden');

  container.innerHTML = items
    .map((item) => {
      const safeTitle = item.title
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const safeSlug = item.slug;
      const date = new Date(item.savedAt);
      const formattedDate = isNaN(date.getTime())
        ? ''
        : date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
      return `
        <li class="border-b border-burgundy/12 py-6">
          <article class="flex items-start gap-5">
            <a href="${safeSlug}" class="group min-w-0 flex-1">
              <p class="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy/65">
                ${formattedDate ? `Kaydedildi · ${formattedDate}` : 'Kaydedildi'}
              </p>
              <h3 class="font-serif text-xl leading-snug text-ink group-hover:underline group-hover:decoration-burgundy/35 md:text-2xl">
                ${safeTitle}
              </h3>
              <p class="mt-2 text-xs text-ink/55">${safeSlug}</p>
            </a>
            <button
              type="button"
              data-remove-slug="${safeSlug}"
              class="shrink-0 rounded-full border border-burgundy/20 bg-cream-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-burgundy/85 transition hover:border-burgundy/45 hover:bg-cream-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/35"
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
