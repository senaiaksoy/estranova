/**
 * Aylık sayının "sabit köşe" slotları — Faz 2'de doldurulacak yapısal
 * yer-tutucular.
 *
 * Lapham's Quarterly "Voices in Time / Conversations / Miscellany" +
 * Believer "adlı yazar köşeleri" mantığında, Estranova "Eşik" dergisi
 * için 3 sabit köşe modellemesi. Editör Mektubu (issue.editorLetter)
 * ve Kapak Dosyası (issue.coverDossierSlug) zaten ayrı yapısal
 * alanlar — bu modül onlardan başka SLOT'ları yönetir.
 *
 * Sayı 1'de hepsi 'planned' (yer-tutucu) — IssueTableOfContents bu
 * durumda "Yakında" rozeti gösterir. Faz 2'de gerçek içerik geldikçe
 * `status: 'published'` ile yazar/başlık/href doldurulur.
 */

export type IssueSectionSlot = 'peer-column' | 'reader-page' | 'back-page';

export type IssueSectionStatus = 'planned' | 'published';

export interface IssueSection {
  /** Slot kimliği — UI varyasyonu ve sıralama için */
  slot: IssueSectionSlot;
  /** Slot etiketi — TOC'da görünür kısa ad */
  label: string;
  /** Slot açıklaması — TOC'da italic 1 cümle */
  description: string;
  /** Yayın durumu */
  status: IssueSectionStatus;
  /** Bu slotta yazan yazarın slug'ı — published'da zorunlu */
  writerSlug?: string;
  /** Slot başlığı (yazarın belirli ay için verdiği başlık) — published'da zorunlu */
  title?: string;
  /** Slot URL'i (örn. /sayi/01-mayis-2026-geceler#yasit-kosesi) — published'da zorunlu */
  href?: string;
  /** Tahmini okuma süresi (dk) */
  readingMinutes?: number;
}

/**
 * Tüm sayılar için varsayılan yer-tutucu slot şeması.
 * Bir sayıda `sections` alanı tanımlı değilse IssueTableOfContents
 * bu listeyi "Yakında" durumunda render eder.
 */
export const defaultPlannedSections: IssueSection[] = [
  {
    slot: 'peer-column',
    label: 'Yaşıt Köşesi',
    description: 'Sayının yazarlarından biri kendi defterinden bir nota imza atar',
    status: 'planned',
  },
  {
    slot: 'reader-page',
    label: 'Okur Sayfası',
    description: 'Gelen okur sorularına bilimsel editör tarafından yazılı yanıt',
    status: 'planned',
  },
  {
    slot: 'back-page',
    label: 'Arka Sayfa',
    description: 'Sayı temasını kapatan kısa, atmosferik bir deneme',
    status: 'planned',
  },
];

/**
 * Slot bazlı varsayılan etiket eşlemesi — eksik tanımlı sections
 * alanlarında otomatik tamamlama için.
 */
export const slotDefaults: Record<IssueSectionSlot, { label: string; description: string }> = {
  'peer-column': {
    label: 'Yaşıt Köşesi',
    description: 'Sayının yazarlarından biri kendi defterinden bir nota imza atar',
  },
  'reader-page': {
    label: 'Okur Sayfası',
    description: 'Gelen okur sorularına bilimsel editör tarafından yazılı yanıt',
  },
  'back-page': {
    label: 'Arka Sayfa',
    description: 'Sayı temasını kapatan kısa, atmosferik bir deneme',
  },
};
