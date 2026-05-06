/**
 * Estranova feature flag'leri — Faz 2 / 3 / 4 sistemlerinin tek-dokunuş
 * aktivasyonu için merkezi toggle dosyası.
 *
 * Kullanıcı eşiğine ulaşılana kadar okur kaydı, abonelik ve paywall
 * sistemleri kapalı tutulur. Sayfalar ve bileşenler bu flagleri okur:
 *
 *   import { featureFlags } from '../utils/feature-flags';
 *   if (!featureFlags.membershipEnabled) {
 *     // "Yakında" yer-tutucu göster
 *   }
 *
 * Aktivasyon adımları için: docs/activation-checklist.md
 *
 * Aktive etme akışı:
 *   1. featureFlags.<x>Enabled = true yap
 *   2. İlgili env vars'ı Cloudflare Pages dashboard'da gir
 *   3. astro.config.mjs output: "static" → "hybrid" (sadece membership +)
 *   4. Build + push
 *
 * Geri-alma: flag false yap, push. Site eski hâline döner.
 */

export interface FeatureFlags {
  /**
   * Faz 2 — Okur kaydı + bülten gönderim sistemi.
   * Aktif olunca:
   *   • /giris ve /abone-ol sayfaları aktif (yer-tutucu yerine gerçek form)
   *   • Header'a "Okuma Paneli" linki çıkar (oturum açıkken)
   *   • newsletter-signup.ts: localStorage yerine Resend API çağrısı
   *   • save-for-later.ts: localStorage + Supabase çift-yazım
   *   • /okuma-paneli sayfası: localStorage + sunucu verisi karması
   */
  membershipEnabled: boolean;

  /**
   * Faz 3 — Aylık dergi aboneliği (iyzico).
   * Aktif olunca:
   *   • /abone-ol tier seçim sayfası ödeme akışıyla bağlanır
   *   • /okuma-paneli/yayin-durumu paneli gözükür
   *   • Header'da "Yayını izle" CTA'sı (oturum yokken)
   *   • Webhook + recurring kayıt sistemi devreye girer
   * BAĞIMLI: membershipEnabled aktif olmalı.
   */
  subscriptionEnabled: boolean;

  /**
   * Faz 4 — Selective premium paywall (sayı-özel parçalar).
   * Aktif olunca:
   *   • IssueGate bileşeni gerçek gating yapar
   *   • Anonim okur kotası (3 sayı-özel parça/ay) edge function ile
   *   • JSON-LD `isAccessibleForFree: false` selected route'lara eklenir
   * BAĞIMLI: subscriptionEnabled aktif olmalı.
   * KURAL: docs/paywall-policy.md — temel sağlık bilgisi her zaman açık.
   */
  paywallEnabled: boolean;

  /**
   * Faz 5 — Aylık PDF + audio dağıtımı.
   * Aktif olunca:
   *   • Okuma Paneli'nde "Sayını indir" PDF link'leri
   *   • Audio player makale altında
   *   • Cloudflare R2 signed URL üretimi
   * BAĞIMLI: subscriptionEnabled aktif olmalı.
   */
  pdfAudioEnabled: boolean;
}

/**
 * Tüm flagler default kapalı. Site canlıya alınıp eşiğe ulaşılınca
 * sırayla açılır:
 *   1. membershipEnabled  (hedef: günlük 2.000 unique + 5.000 bülten abonesi)
 *   2. subscriptionEnabled (hedef: 1-2 ay üyelik dengelenince)
 *   3. paywallEnabled      (hedef: ücretli aboneliği gerçek değer önerisine bağlama)
 *   4. pdfAudioEnabled     (hedef: aylık sayı + audio üretim altyapısı kurulunca)
 */
export const featureFlags: FeatureFlags = {
  membershipEnabled: false,
  subscriptionEnabled: false,
  paywallEnabled: false,
  pdfAudioEnabled: false,
};

/**
 * Yardımcı: bir feature aktif mi kontrolü + bağımlılık doğrulaması.
 * subscriptionEnabled true ama membershipEnabled false ise sessizce
 * false döner (yanlış sıra ile aktivasyondan koruma).
 */
export function isFeatureActive(name: keyof FeatureFlags): boolean {
  if (!featureFlags[name]) return false;
  if (name === 'subscriptionEnabled' && !featureFlags.membershipEnabled) return false;
  if (name === 'paywallEnabled' && !featureFlags.subscriptionEnabled) return false;
  if (name === 'pdfAudioEnabled' && !featureFlags.subscriptionEnabled) return false;
  return true;
}

/**
 * Aktivasyon eşik metrikleri — okuyucuya görünmez, dahili karar referansı.
 * docs/activation-checklist.md ile uyumlu.
 */
export const activationThresholds = {
  membership: {
    dailyUniqueVisitors: 2000,
    rollingWindowDays: 30,
    newsletterSubscribers: 5000,
  },
  subscription: {
    membershipDurationMonths: 2,
    pendingNewsletterCount: 1500,
  },
  paywall: {
    paidSubscribers: 100,
    monthlyContentCount: 12,
  },
  pdfAudio: {
    publishedIssues: 3,
  },
} as const;
