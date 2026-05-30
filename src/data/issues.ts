/**
 * Aylık sayı (Issue) manifest'i — Eşik dergisi.
 *
 * "Issue" Estranova dergi formatının üst kavramıdır:
 *   - Editör mektubu (Doç. Dr. Senai Aksoy bilimsel açılış)
 *   - Kapak dosyası (monthly-dossier.ts → MonthlyDossier — 4-6 yazılık tema)
 *   - Yazar köşeleri (sabit aylık imza yazılar — faz 2'de doldurulur)
 *   - Arka sayfa (kısa deneme — faz 2'de doldurulur)
 *
 * Faz 1: yalnızca editor mektubu + kapak dosyası alanları doldurulu.
 * Yazar köşeleri ve arka sayfa ileride.
 *
 * Sayı 0: geriye dönük 45 makaleyi tek arşiv şemsiyesi altında toplar.
 * Sayı 01: Mayıs 2026 — "Uyuyamadığımız Geceler" (mevcut sayı, 1 Haziran'a kadar).
 * Sayı 02: Haziran 2026 — "Güç Eşiği" (1 Haziran 2026 yayın adayı).
 *
 * URL pattern: /sayi/<slug>
 *
 * NOT: Bu dosya `monthly-dossier.ts`'i SİLMİYOR — kapak dosyası tarafı
 * yine `MonthlyDossier` ile yönetiliyor. Issue sadece üst-katman.
 */

import type { SubmenuHeroImage } from './submenu-heroes';
import { dossiers, getTotalReadingMinutes } from './monthly-dossier';
import type { MonthlyDossier } from './monthly-dossier';
import type { IssueSection } from './issue-sections';
import { defaultPlannedSections } from './issue-sections';

export type IssueStatus = 'current' | 'archived' | 'upcoming';

export interface IssueEditorLetter {
/** writers.ts slug'ı — şu an Doç. Dr. Senai Aksoy bilimsel editör */
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
   * Site editörü Berna Aksoy'un "Sıcacık Köşe" yazısı — sayıyı tanıtan
   * editöryal kapı yazısı. URL: `/editorun-kosesi/<slug>`.
   * Faz 2'de zorunlu — her sayının kendi tanıtım köşesi olur.
   */
  editorColumnSlug?: string;
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
  /**
   * Sabit köşe slotları — Yaşıt Köşesi / Okur Sayfası / Arka Sayfa.
   * Tanımlı değilse defaultPlannedSections (3 slot, hepsi 'planned')
   * IssueTableOfContents tarafından otomatik kullanılır.
   * Faz 2'de gerçek içerik geldikçe `status: 'published'` ile doldurulur.
   */
  sections?: IssueSection[];
}

/** Sayının sabit köşe slotlarını çöz — yoksa default 'planned' set */
export function resolveIssueSections(issue: Issue): IssueSection[] {
  return issue.sections ?? defaultPlannedSections;
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
  lede: 'Perimenopozun en sessiz belirtisi belki de uyku. İlk sayıda üç yazı, uykunun neden değiştiğini, gece terlemesinin mahrem yanını ve akşam hareketinin toparlayıcı gücünü yan yana koyuyor.',
  coverImage: {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku, perimenopoz ve dinlenme teması',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Eşik dergisinin ilk sayısında uykuyu masaya yatırıyoruz çünkü bu konu, hormonal geçişte en sık konuşulan ama en az anlaşılan başlıklardan biri.\n\nBu sayıyı özellikle üç sesle kuruyoruz: Berna Aksoy uykunun hormonal zeminini sadeleştiriyor; Doç. Dr. Senai Aksoy gece terlemesinin mahrem ve klinik yanını utanmadan konuşuyor; Alara Baykent akşam hareketini performans baskısı değil, bedeni geceye hazırlayan küçük bir geçiş olarak okuyor. Hiçbir yazı tek başına çözüm değil; ama hep birlikte küçük bir gece denemesini kolaylaştırıyor.\n\nDergi serisinin amacı tam da bu: kanıt-temelli bilgiyi panik yaratmadan, yaşıt sesinde ve sakin bir editöryel düzende okurla buluşturmak.',
  },
  editorColumnSlug: 'mayis-2026',
  coverDossierSlug: '2026-05-uyuyamadigimiz-geceler',
  releaseDate: '2026-05-01',
  status: 'current',
};

/**
 * Sayı 02 — Haziran 2026 · Güç Eşiği
 *
 * Kapak dosyası: monthly-dossier.ts → "2026-06-guc-esigi"
 * Editör mektubu: Doç. Dr. Senai Aksoy bilimsel açılış
 * Tema: kas, kemik, denge, yorgunluk ve sürdürülebilir hareket
 */
export const issue02: Issue = {
  number: 2,
  slug: '02-haziran-2026-guc-esigi',
  monthYearISO: '2026-06',
  monthYear: 'Haziran 2026',
  theme: 'Güç Eşiği',
  coverHeadline: 'Eşik · Sayı 02 — Haziran 2026 · Güç Eşiği',
  lede:
    "40'tan sonra güç, daha fazla zorlanmak değil; kası, kemiği, dengeyi, uykuyu ve enerjiyi aynı hayatın içinde yeniden duymak. Bu sayıda bedeni performans baskısı kurmadan okumaya başlıyoruz.",
  coverImage: {
    src: '/images/library/editorial/zy-hareket-saglik.webp',
    alt: "40 sonrası hareket ve güçlenme temasını taşıyan sakin editoryal sahne; bedeni zorlamadan yeniden kurma hissi",
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: "Bu ay güç kelimesini yalnızca kasla sınırlamıyoruz. Hormonal geçişte güç; kemik yoğunluğu, düşme riski, uyku kalitesi, kas kütlesi, metabolik denge ve günlük hareket güveniyle yan yana duran daha geniş bir sağlık başlığı.\n\nBu sayıda okuru daha sert bir programa çağırmıyoruz. Anıl Yalmaz hareketin başlangıç haritasını kuruyor; Prof. Dr. Bülent Aksoy kemiği kırığı beklemeden konuşmaya açıyor; Fzt. Ersin Saraç dengeyi ayak-kalça-gövde hattında okuyor; Dr. Metin Alış yorgunluğu tiroid, metabolizma ve kas ekseninde ayırıyor; Alara Baykent yaz başlarken hareketi performans değil devamlılık olarak ele alıyor; Başak Pelister de kendi menopoz deneyiminden gelen yaşıt sesiyle gücü daha kişisel bir yerden açıyor.\n\nGüç, bu yaş döneminde çoğu zaman daha fazlasını yapmak değil; bedene daha iyi kulak vererek daha sürdürülebilir bir zemin kurmaktır.",
  },
  editorColumnSlug: 'haziran-2026',
  coverDossierSlug: '2026-06-guc-esigi',
  releaseDate: '2026-06-01',
  status: 'upcoming',
};

/** Tüm sayılar — yeni-eski sırayla (Sayı 0 EN ALTTA arşiv olarak) */
export const issues: Issue[] = [issue02, issue01, archiveIssue];

function todayInTurkeyISO(date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function isIssueReleased(issue: Issue, date = new Date()): boolean {
  return issue.releaseDate <= todayInTurkeyISO(date);
}

export const releasedIssues: Issue[] = issues.filter((issue) => isIssueReleased(issue));

/** Şu anki yayın sayısı — anasayfa hero için */
export const currentIssue: Issue =
  releasedIssues
    .filter((i) => i.status !== 'archived')
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0] ??
  issues.find((i) => i.status === 'current') ??
  issues[0];

/** Slug ile sayı bul */
export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}

/** Arşivlenmiş sayılar — eskiye göre azalan; arşiv (Sayı 0) en sonda */
export function getArchivedIssues(): Issue[] {
  return releasedIssues
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
