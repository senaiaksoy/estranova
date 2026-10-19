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
 * Sayı 02: Haziran 2026 — "Güç Eşiği" (1 Haziran 2026).
 * Sayı 03: Temmuz 2026 — "Tartı Susunca" (16 Temmuz 2026).
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
  /** SERP meta description override (≤160 karakter) — verilmezse lede kullanılır */
  seoDescription?: string;
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
  lede: 'Dergiden önce yayımlanan rehberler ve uzun yazılar. Hepsi konu sayfalarında ve kütüphanede okunmaya devam ediyor.',
  coverImage: {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturup pencereye bakan bir kadın',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Eşik dergisi, Estranova\'nın editöryal yapısının üzerine kuruluyor.\n\nBu arşiv, Sayı 1\'den önce yayımlanan rehberleri ve uzun yazıları bir arada tutuyor. Yazıların hepsi konu sayfalarında ve kütüphanede okunabilir.',
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
  lede: 'Perimenopozun en sessiz belirtisi belki de bozulan uyku. İlk sayıda üç yazı yan yana: uykunun neden değiştiği, gece terlemesinin mahrem yanı ve akşam hareketinin geceye geçişteki yeri.',
  seoDescription:
    'Perimenopozun en sessiz belirtisi belki de bozulan uyku. İlk sayıda üç yazı, uykunun neden değiştiğini ve gece terlemesinin mahrem yanını ele alıyor.',
  coverImage: {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturup pencereye bakan bir kadın',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Eşik dergisinin ilk sayısında uykuyu masaya yatırıyoruz, çünkü bu konu hormonal geçişte en sık konuşulan ama en az anlaşılan başlıklardan biri.\n\nBu sayıyı üç yazıyla kuruyoruz. Berna Aksoy uykunun hormonal zeminini sadeleştiriyor; ben gece terlemesinin mahrem ve klinik yanını çekinmeden anlatıyorum; Alara Baykent de akşam hareketinin geceye geçişteki yerini sporcu gözüyle ele alıyor. Hiçbiri tek başına bir çözüm sunmuyor. Birlikte okunduklarında geceyi biraz daha anlaşılır kılıyorlar.\n\nBu dergiyle istediğimiz de bu: kanıta dayalı bilgiyi telaşa yer vermeden, yaşıt sesiyle ve sakin bir düzen içinde okura ulaştırmak.',
  },
  editorColumnSlug: 'mayis-2026',
  coverDossierSlug: '2026-05-uyuyamadigimiz-geceler',
  releaseDate: '2026-05-01',
  status: 'archived',
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
  seoDescription:
    "40'tan sonra güç, daha fazla zorlanmak değil; kası, kemiği ve dengeyi yeniden duymak. Bu sayıda bedeni performans baskısı kurmadan okuyoruz.",
  coverImage: {
    src: '/images/library/editorial/zy-hareket-saglik.webp',
    alt: "Ağaçlıklı bir parkta, yürüyüş yolunun kenarında hafifçe gülümseyerek yere bakan bej kazaklı bir kadın",
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: "Bu ay güç kelimesini yalnızca kasla sınırlamıyoruz. Hormonal geçiş döneminde güç dediğimiz şey kemik yoğunluğunu, düşme riskini, uyku kalitesini, kas kütlesini, metabolik dengeyi ve gündelik hareketteki güveni birlikte ilgilendiren geniş bir sağlık başlığı.\n\nBu sayıda okuru daha sert bir programa çağırmıyoruz. Altı yazı gücü farklı yerlerinden ele alıyor: harekete yeniden başlamak, kırık oluşmadan kemiği konuşmak, dengeyi korumak, yorgunluğun olası nedenlerini ayırmak, yazın hareketi sürdürmek ve gücün kişisel bir menopoz deneyimindeki karşılığı.\n\nBu yaş döneminde güç çoğu zaman bedene daha iyi kulak vermekle ve sürdürülebilir bir zemin kurmakla başlıyor.",
  },
  editorColumnSlug: 'haziran-2026',
  coverDossierSlug: '2026-06-guc-esigi',
  releaseDate: '2026-06-01',
  status: 'archived',
};

/**
 * Sayı 03 — Temmuz 2026 · Tartı Susunca
 *
 * Kapak dosyası: monthly-dossier.ts → "2026-07-tarti-susunca"
 * Editör mektubu: Doç. Dr. Senai Aksoy bilimsel açılış
 * Tema: vücut kompozisyonu, iştah, metabolizma ve beden algısı
 */
export const issue03: Issue = {
  number: 3,
  slug: '03-temmuz-2026-tarti-susunca',
  monthYearISO: '2026-07',
  monthYear: 'Temmuz 2026',
  theme: 'Tartı Susunca',
  coverHeadline: 'Eşik · Sayı 03 — Temmuz 2026 · Tartı Susunca',
  lede:
    'Tartının sesi kısıldığında geriye yalnızca bir rakam kalmaz. Bu sayı vücut kompozisyonunu, iştahı, metabolizmayı ve beden algısını diyet kültürünün yargısından uzak, sakin bir yaklaşımla yan yana getiriyor.',
  seoDescription:
    'Tartının sesi kısıldığında geriye yalnızca bir rakam kalmaz. Bu sayı vücut kompozisyonunu ve beden algısını diyet kültürünün yargısından uzak ele alıyor.',
  coverImage: {
    src: '/images/library/editorial/pair-window-cafe-reflection.webp',
    alt: 'Pencere kenarında oturmuş, sakin bir sohbeti paylaşan iki yaşıt kadın',
  },
  editorLetter: {
    writerSlug: 'senai-aksoy',
    body: 'Menopoz yıllarında kilo ve beden ölçüsü konuşulurken tek bir rakama gereğinden fazla anlam yüklenebiliyor. Oysa kas kütlesi, yağ dağılımı, iştah sinyalleri, uyku, hareket ve metabolik sağlık birlikte değerlendirildiğinde daha açıklayıcı bir tablo ortaya çıkar.\n\nBu sayıda tartıyı bir hüküm aracı olarak değil, diğer verilerle birlikte okunması gereken sınırlı bir bilgi olarak ele alıyoruz. Vücut kompozisyonundaki değişimi, menopozda kilo artışını, GLP-1 ekseninde iştah ile metabolizmayı ve ölçü paniğinin beden algısındaki karşılığını sakin bir dille ayırıyoruz. Burada kimseye hedef bir ölçü vermiyoruz. Amacımız, hangi değişimin olağan dalgalanma, hangisinin kişisel değerlendirme gerektiren bir sağlık sorusu olduğunu daha açık görebilmek.',
  },
  editorColumnSlug: 'temmuz-2026',
  coverDossierSlug: '2026-07-tarti-susunca',
  releaseDate: '2026-07-16',
  status: 'current',
};

/** Tüm sayılar — yeni-eski sırayla (Sayı 0 EN ALTTA arşiv olarak) */
export const issues: Issue[] = [issue03, issue02, issue01, archiveIssue];

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
