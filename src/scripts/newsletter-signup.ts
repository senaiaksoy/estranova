/**
 * Bülten kayıt formu — Faz 2 öncesi mock akış.
 *
 * NewsletterBlock (haftalık) ve EditorialDigestStrip (aylık) formlarını
 * `data-newsletter-form` attribute'u ile yakalar. Submit edildiğinde:
 *   1. HTML5 e-posta validasyon (browser native)
 *   2. localStorage'da "estranova:mektup-bekleyenler" listesine kayıt
 *      (e-posta + form tipi + ISO tarih)
 *   3. Form gizlenir, kardeş `[data-newsletter-success]` div'i görünür
 *
 * Hiçbir e-posta sunucuya gönderilmez — Faz 2'de Resend/Supabase'e
 * migrate edilecek; localStorage backup olarak kalır. Sekmeler arası
 * storage event ile diğer açık formlar da güncellenir.
 *
 * CLAUDE.md HARD CONSTRAINT §4 ton uyumu: yasak kelimeler yok ("Premium
 * / Abone ol / Kilitli / Webinar"); başarı mesajları "yayın okurlarına"
 * tonu ile yazıldı.
 */

interface PendingSubscriber {
  email: string;
  formType: string; // 'weekly' | 'monthly' | başka tipler eklenebilir
  signedAt: string; // ISO timestamp
}

const STORAGE_KEY = 'estranova:mektup-bekleyenler';

function getPendingList(): PendingSubscriber[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setPendingList(list: PendingSubscriber[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addPending(email: string, formType: string): PendingSubscriber[] {
  const list = getPendingList();
  // Aynı e-posta zaten varsa formType'ı güncelle (kullanıcı haftalık + aylık seçebilir)
  const existing = list.findIndex((item) => item.email === email);
  const entry: PendingSubscriber = {
    email,
    formType,
    signedAt: new Date().toISOString(),
  };
  if (existing >= 0) {
    list[existing] = entry;
  } else {
    list.unshift(entry);
  }
  setPendingList(list);
  return list;
}

function showSuccess(form: HTMLFormElement): void {
  const success = form.parentElement?.querySelector<HTMLElement>('[data-newsletter-success]');
  if (success) {
    form.style.display = 'none';
    success.removeAttribute('hidden');
    // Erişilebilirlik: success başlığına focus
    success.focus?.();
  }
}

function init(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-newsletter-form]');
  if (forms.length === 0) return;

  // Sayfa açılışta önceki kayıt varsa formu gizleyip success'ı göster
  const list = getPendingList();
  if (list.length > 0) {
    forms.forEach((form) => {
      // E-postayı bilmeden de "kaydedildi" durumu göster — kullanıcının dönüşünde
      // formu boşa tekrar görmesin
      showSuccess(form);
    });
  }

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formType = form.dataset.newsletterForm ?? 'weekly';
      const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
      const email = emailInput?.value.trim();
      if (!email) return;

      // HTML5 validity zaten required + type="email" — manuel ek kontrol
      if (!emailInput?.checkValidity()) {
        emailInput?.reportValidity();
        return;
      }

      addPending(email, formType);
      showSuccess(form);

      // Diğer açık formlar varsa onları da güncelle
      forms.forEach((other) => {
        if (other !== form) showSuccess(other);
      });
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
  // Başka sekmede kayıt yapıldıysa bu sekmedeki formları da gizle
  const list = getPendingList();
  if (list.length > 0) {
    document.querySelectorAll<HTMLFormElement>('[data-newsletter-form]').forEach((form) => {
      showSuccess(form);
    });
  }
});
