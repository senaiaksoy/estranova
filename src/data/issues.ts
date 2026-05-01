/**
 * Aylık sayı (Issue) manifest'i — Eşik dergisi.
 *
 * "Issue" Estranova dergi formatının üst kavramıdır:
 *   - Editör mektubu (Senai Aksoy bilimsel açılış)
 *   - Kapak dosyası (monthly-dossier.ts → MonthlyDossier — 4-6 yazılık tema)
 *   - Yazar köşeleri (sabit aylık imza yazılar — faz 2'de doldurulur)
 *   - Arka sayfa (kısa deneme — faz 2'de doldurulur)
 *
 * Faz 1: yalnızca editor mektubu + kapak dosyası alanları doldurulu.
 * Yazar köşeleri ve arka sayfa ileride.
 *
 * Sayı 0: geriye dönük 45 makaleyi tek arşiv şemsiyesi altında toplar.
 * Sayı 01: Mayıs 2026 — "Uyuyamadığımız Geceler" (mevcut dossier).
 *
 * URL pattern: /sayi/<slug>
 *
 * NOT: Bu dosya `monthly-dossier.ts`'i SİLMİYOR — kapak dosyası tarafı
 * yine `MonthlyDossier` ile yönetiliyor. Issue sadece üst-katman.
 */

import type { SubmenuHeroImage } from './submenu-heroes';
import { dossiers, getTotalReadingMinutes } from './monthly-dossier';
import type { MonthlyDossier } from './monthly-dossier';

export type IssueStatus = 'current' | 'archived' | 'upcoming';

export interface IssueEditorLetter {
  /** writers.ts slug'ı — şu an Senai Aksoy bilimsel editör */
  writerSlug: string;
  /** 1-2 paragraf bilimsel açılış; \n\n ile paragraf ayrılır */
  body: string;
}

export interface Issue {
  /** Sayı numarası — 0 arşiv, 1+ aylık sayılar */
  number: number;
  /** URL slug — /sayi/<slug> */
  slug: string;
  /** ISO ay — sıralama için: "2026-05" */
  monthYearISO: string;
  /** Türkçe ay-yıl — kapakta görünür: "Mayıs 2026" */
  monthYear: string;
  /** Tek-iki kelime tema — kapakta tipografik olarak öne çıkar */
  theme: string;
  /** Kapak ana başlığı — tema cümleli versiyonu */
  coverHeadline: string;
  /** İtalik lede — 1-2 cümle, kapakta tema altı */
  lede: string;
  /** Kapak görseli */
  coverImage: SubmenuHeroImage;
  /** Bilimsel editör mektubu — sayı içinde EditorLetter bileşeniyle render */
  editorLetter: IssueEditorLetter;
  /**
   * Kapak dosyası — `monthly-dossier.ts`'teki MonthlyDossier slug'ı.
   * Resolve edildiğinde sayının 4-6 yazılık tema dosyasına bağlanır.
   * Sayı 0 (arşiv) için boş — 45 makale farklı kapılardan geliyor.
   */
  coverDossierSlug?: string;
  /** Yayın tarihi — ISO format */
  releaseDate: string;
  /** current = öne çıkan, archived = geçmiş sayı, upcoming = sonraki */
  status: IssueStatus;
  /**
   * Sayının "kendine özgü parçaları" abone-erişim mi olacak (faz 4).
   * Faz 1'de tüm sayılar açık erişim; bu alan ileride aktif edilir.
   */
  isPremiumIssue?: boolean;
  /** Aylık PDF URL'i — faz 5'te doldurulur */
  pdfUrl?: string;
}

/**
 * Sayı 0 — Arşiv şemsiyesi.
 *
 * Geriye dönük 45 makale "Eşik" dergi sayım sisteminde Sayı 1'den önceki
 * tüm yayınların ortak şemsiyesi. URL'ler değişmez; bu sadece sunum amaçlı
 * bir gruplama. /sayi/0-arsiv sayfası kullanıcıyı /library'ye yönlendirir
 * veya hub'lara dağıtır (bu Faz 1'de basit redirect/grid tercih).
 */
export const archiveIssue: Issue = {
  number: 0,
  slug: '0-arsiv',
  monthYearISO: '2024-01',
  monthYear: 'Arşiv',
  theme: 'Arşiv',
  coverHeadline: 'Eşik · Sayı 0 · Arşiv',
  lede: 'Eşik dergi serisi açılmadan önce yer alan rehberler ve uzun-form yazılar. Bu içerikler hub sayfalarında ve kütüphanede erişilebilir.',
  coverImage: {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Estranova arşiv görseli — kütüphane sayfasının editöryal kapağı',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Eşik dergi serisi, Estranova\'nın editöryal yapısının üzerine kuruluyor.\n\nBu arşiv, Sayı 1 öncesi yer alan rehberleri ve uzun-form yazıları ortak bir çatı altında topluyor. Yazılar hub sayfalarında ve kütüphanede erişilebilir.',
  },
  releaseDate: '2024-01-01',
  status: 'archived',
};

/**
 * Sayı 01 — Mayıs 2026 · Geceler
 *
 * Kapak dosyası: monthly-dossier.ts → "2026-05-uyuyamadigimiz-geceler"
 * Editör mektubu: Doç. Dr. Senai Aksoy bilimsel açılış
 * Tema: uyku, gece terlemeleri, gece yarısı uyanıklığı
 */
export const issue01: Issue = {
  number: 1,
  slug: '01-mayis-2026-geceler',
  monthYearISO: '2026-05',
  monthYear: 'Mayıs 2026',
  theme: 'Geceler',
  coverHeadline: 'Eşik · Sayı 01 — Mayıs 2026 · Geceler',
  lede: 'Perimenopozun en sessiz belirtisi belki de uyku. İlk sayıda beş yazı, uykunun neden değiştiğini ve geri kazanılabilen yanlarını yan yana koyuyor.',
  coverImage: {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku, perimenopoz ve dinlenme teması',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Eşik dergisinin ilk sayısında uykuyu masaya yatırıyoruz çünkü bu konu, hormonal geçişte en sık konuşulan ama en az anlaşılan başlıklardan biri.\n\nBeş yazı boyunca bedenin kimyasından akşamın ritmine, dokuz yıllık kişisel bir gözlemden uyku biliminin sınırına kadar geniş bir alana bakıyoruz. Hiçbir yazı tek başına çözüm değil; ama hep birlikte küçük bir gece denemesini kolaylaştırıyor.\n\nDergi serisinin amacı tam da bu: kanıt-temelli bilgiyi panik yaratmadan, akran sesinde ve sakin bir editöryal düzende okurla buluşturmak.',
  },
  coverDossierSlug: '2026-05-uyuyamadigimiz-geceler',
  releaseDate: '2026-05-01',
  status: 'current',
};

/** Tüm sayılar — yeni-eski sırayla (Sayı 0 EN ALTTA arşiv olarak) */
export const issues: Issue[] = [issue01, archiveIssue];

/** Şu anki yayın sayısı — anasayfa hero için */
export const currentIssue: Issue =
  issues.find((i) => i.status === 'current') ?? issues[0];

/** Slug ile sayı bul */
export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}

/** Arşivlenmiş sayılar — eskiye göre azalan; arşiv (Sayı 0) en sonda */
export function getArchivedIssues(): Issue[] {
  return issues
    .filter((i) => i.status === 'archived' && i.number > 0)
    .sort((a, b) => b.monthYearISO.localeCompare(a.monthYearISO));
}

/** Sayı 0 (geriye dönük arşiv) ayrı erişim */
export function getArchiveIssue(): Issue {
  return archiveIssue;
}

/** Sayının kapak dosyasını çöz — yoksa undefined */
export function resolveCoverDossier(issue: Issue): MonthlyDossier | undefined {
  if (!issue.coverDossierSlug) return undefined;
  return dossiers.find((d) => d.slug === issue.coverDossierSlug);
}

/** Bir sayının toplam okuma süresi (kapak dosyasından) */
export function getIssueReadingMinutes(issue: Issue): number {
  const dossier = resolveCoverDossier(issue);
  return dossier ? getTotalReadingMinutes(dossier) : 0;
}

/** "Sayı 03" gibi padded gösterim */
export function formatIssuePad(n: number): string {
  return String(n).padStart(2, '0');
}
