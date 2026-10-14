/**
 * Estranova aylık dijital dergi konfigürasyonu — TEK YETKİ NOKTASI.
 *
 * Dergi adı, altyazı, ilk sayı ve arşiv etiketi yalnızca burada tanımlanır.
 * Sayı sayfaları, anasayfa hero, navbar etiketi ve schema.org alanları
 * bu dosyadan değer okur. Adı değiştirmek için: yalnızca buradaki
 * `name`, `subtitle`, `tagline` alanlarını güncellemen yeterli.
 *
 * Faz 1 (UI/dergi görünümü) — backend'siz; abonelik / paywall / PDF
 * üretimi ileride faz 2-5'te eklenir.
 *
 * KARAR (2026-05-01):
 * - Dergi adı: "Eşik" — antropolojik liminal an metaforu; bir hâlden
 *   diğerine geçilen kıymetli ara. Perimenopozun fenomenolojisini taşır.
 * - Altyazı: "Estranova yayını" — markaya bağlanır.
 * - Sayı 0 = mevcut 45 makale arşivi; Sayı 01 = Mayıs 2026'dan başlar.
 * - Abonelik felsefesi: selective premium (sadece aylık sayının
 *   kendine özgü parçaları abone-erişim). Detay: docs/paywall-policy.md
 */

export interface MagazineConfig {
  /** Ana dergi adı — kapakta, navbar'da, schema'da */
  name: string;
  /** Altyazı — "Estranova yayını" gibi marka bağı */
  subtitle: string;
  /** İki kelimelik tagline — kapak sırtında ve OG meta'da kullanılır */
  tagline: string;
  /** İlk yayın sayısının metadata'sı */
  firstIssue: {
    number: number;
    monthYearISO: string; // "2026-05"
    monthYear: string; // "Mayıs 2026"
  };
  /** Sayı 0 (arşiv) etiketi — geriye dönük 45 makaleyi şemsiyeleyen ad */
  archiveLabel: string;
  /** Yayın ritmi — schema ve meta için */
  frequency: 'monthly';
}

export const magazineConfig: MagazineConfig = {
  name: 'Eşik',
  subtitle: 'Estranova yayını',
  tagline:
    'Hormonal geçişin eşiğinde 40+ kadın için aylık editöryal yayın.',
  firstIssue: {
    number: 1,
    monthYearISO: '2026-05',
    monthYear: 'Mayıs 2026',
  },
  archiveLabel: 'Sayı 0 · Arşiv',
  frequency: 'monthly',
};

/** "Eşik · Estranova yayını" gibi tam başlık */
export const magazineFullName = `${magazineConfig.name} · ${magazineConfig.subtitle}`;

/** Sayı numarasını "Sayı 03" formatında döner — `String(n).padStart(2, '0')` */
export function formatIssueNumber(n: number): string {
  return `Sayı ${String(n).padStart(2, '0')}`;
}

/** "Eşik · Sayı 03 — Mayıs 2026 · Geceler" gibi tam kapak başlığı */
export function buildIssueDisplayTitle(opts: {
  number: number;
  monthYear: string;
  theme?: string;
}): string {
  const issueLabel = formatIssueNumber(opts.number);
  const base = `${magazineConfig.name} · ${issueLabel} — ${opts.monthYear}`;
  return opts.theme ? `${base} · ${opts.theme}` : base;
}
