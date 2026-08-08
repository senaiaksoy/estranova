import { writers, type Writer } from '../data/writers';
import { submenuHeroByRoute, articleCardImageByRoute } from '../data/submenu-heroes';
import type { ArticleFaqItem } from '../data/article-faqs';
import type { ArticleType } from '../data/article-types';

type JsonLdSchema = Record<string, unknown>;

// Canonical Person @id — portföy genelinde Dr. Aksoy entity'sini birleştirir.
// senaiaksoy.net Block A'da deklare edilmiş tek kanonik kayıt.
const DR_AKSOY_PERSON_ID = 'https://senaiaksoy.net/#person';

export interface BuildArticleSchemaOptions {
  title: string;
  description: string;
  writerSlug: Writer['slug'];
  /**
   * Eski sayfaları geriye dönük bozmamak için varsayılan clinical-guide'dır.
   * Yeni makalelerde tür açıkça geçilmelidir.
   */
  articleType?: ArticleType;
  publishedDate: string; // "14 Nisan 2026" veya ISO
  modifiedDate?: string; // revizyonda güncellenir; verilmezse publishedDate'e eşitlenir
  pathname: string; // örn. "/zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz/" (leading slash)
  articleSection?: string; // breadcrumb + schema.articleSection ("Zihin & Denge")
  sectionPath?: string; // örn. "/zihin-denge/"
  image?: string; // absolute, OG image
  keywords?: string[];
  medicalReviewer?: string;
  medicalReviewerTitle?: string;
  faqItems?: ArticleFaqItem[];
  // Jenerik, kuruluş adı içermeyen kanıt-temeli sinyali (GEO-ANALYSIS.md §8.5).
  // Örn: "Menopoz döneminde kemik yoğunluğu kaybı üzerine epidemiyolojik çalışmalar".
  // CLAUDE.md §4 kuruluş adı / URL yasağı schema alanında da geçerlidir — yalnızca
  // gövdede zaten kullanılan türde yumuşak/anonim referans metni girilir.
  citation?: string | string[];
  siteUrl: string;
}

function joinUrl(siteUrl: string, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}/`;
  return `${base}${p}`;
}

const TR_MONTHS: Record<string, string> = {
  ocak: '01',
  şubat: '02',
  mart: '03',
  nisan: '04',
  mayıs: '05',
  haziran: '06',
  temmuz: '07',
  ağustos: '08',
  eylül: '09',
  ekim: '10',
  kasım: '11',
  aralık: '12',
};

export function toISODate(input: string): string {
  // "14 Nisan 2026" → "2026-04-14"; ISO input passthrough.
  if (/^\d{4}-\d{2}-\d{2}/.test(input)) return input.slice(0, 10);
  const parts = input.trim().toLowerCase().split(/\s+/);
  if (parts.length === 3) {
    const [d, monthName, y] = parts;
    const m = TR_MONTHS[monthName];
    if (m) return `${y}-${m}-${d.padStart(2, '0')}`;
  }
  return input; // bilinmeyen format — schema validator kabul etmese bile bozmasın
}

export function getWriter(slug: Writer['slug']): Writer {
  const w = writers.find((x) => x.slug === slug);
  if (!w) throw new Error(`Writer not found: ${slug}`);
  return w;
}

export function buildArticleSchemas(opts: BuildArticleSchemaOptions): JsonLdSchema[] {
  const {
    title,
    description,
    writerSlug,
    articleType = 'clinical-guide',
    publishedDate,
    modifiedDate,
    pathname,
    articleSection,
    sectionPath,
    image,
    keywords,
    faqItems = [],
    citation,
    siteUrl: rawSiteUrl,
  } = opts;

  // Tıbbi inceleyici default: Doç. Dr. Senai Aksoy tüm yazarların makalelerini
  // inceler — AMA kendi makalesini inceleyemez. Senai yazar olduğunda denetleyici
  // aynı branştan (kadın hastalıkları ve doğum) Dr. Alper Mumcu olur. Çağıran
  // taraf explicit `medicalReviewer` geçerse her zaman ona öncelik verilir.
  const isSenaiAuthor = writerSlug === 'senai-aksoy';
  const medicalReviewer =
    opts.medicalReviewer ?? (isSenaiAuthor ? 'Dr. Alper Mumcu' : 'Doç. Dr. Senai Aksoy');
  const medicalReviewerTitle =
    opts.medicalReviewerTitle ??
    (isSenaiAuthor
      ? 'Kadın Hastalıkları ve Doğum Uzmanı'
      : 'Kadın Hastalıkları ve Doğum Uzmanı · Tıbbi Editör');

  const siteUrl = rawSiteUrl.replace(/\/+$/, '');
  const url = joinUrl(siteUrl, pathname);
  const sectionUrl = sectionPath ? joinUrl(siteUrl, sectionPath) : undefined;

  // Image fallback: explicit `image` opt > submenu hero > article card image (auto absolute URL).
  // Article rich results (Google) require an `image` field. This fallback ensures
  // every article schema gets an image without requiring per-article wiring.
  const heroImageSrc = submenuHeroByRoute[pathname]?.src ?? articleCardImageByRoute[pathname]?.src;
  const heroAbsolute = heroImageSrc
    ? (heroImageSrc.startsWith('http') ? heroImageSrc : joinUrl(siteUrl, heroImageSrc))
    : undefined;
  const resolvedImage = image ? (image.startsWith('http') ? image : joinUrl(siteUrl, image)) : heroAbsolute;

  const writer = getWriter(writerSlug);
  const isoDate = toISODate(publishedDate);
  // dateModified: revizyon tarihi verilmişse onu kullan; yoksa yayın tarihine eşitle.
  // Bir makale içerikçe güncellendiğinde modifiedDate geçilmeli (tazelik sinyali).
  const isoModified = modifiedDate ? toISODate(modifiedDate) : isoDate;

  // Dr. Aksoy yazar olduğunda canonical Person @id'ye referans ver —
  // portföy entity'sini siloed olmaktan kurtarır (Semrush AI-search lensi).
  const authorPerson: JsonLdSchema = writer.isInstitutionalByline
    ? {
        '@type': 'Organization',
        name: writer.displayName,
        description: writer.publicBio,
        url: joinUrl(siteUrl, '/editoryal-politika/'),
      }
    : writerSlug === 'senai-aksoy'
    ? { '@id': DR_AKSOY_PERSON_ID }
    : {
        '@type': 'Person',
        name: writer.displayName,
        jobTitle: writer.role,
        description: writer.publicBio,
        ...(writer.portrait ? { image: joinUrl(siteUrl, writer.portrait) } : {}),
        url: joinUrl(siteUrl, '/yayin-kurulu/'),
      };

  // Medical reviewer canonical Person @id — Dr. Aksoy bilim editörü/inceleyici
  // olduğunda inline name+jobTitle yerine entity'ye referans.
  const reviewerIsDrAksoy = medicalReviewer.includes('Senai Aksoy');
  // İnceleyici kadromuzdan biriyse (ör. Dr. Alper Mumcu) inline Person düğümünü
  // görsel + yayın kurulu URL'siyle çözülebilir kıl (E-E-A-T).
  const reviewerWriter = writers.find((w) => w.displayName === medicalReviewer);
  const reviewerPerson: JsonLdSchema = reviewerIsDrAksoy
    ? { '@id': DR_AKSOY_PERSON_ID }
    : {
        '@type': 'Person',
        name: medicalReviewer,
        jobTitle: medicalReviewerTitle,
        ...(reviewerWriter?.portrait ? { image: joinUrl(siteUrl, reviewerWriter.portrait) } : {}),
        ...(reviewerWriter ? { url: joinUrl(siteUrl, '/yayin-kurulu/') } : {}),
      };

  const medicalWebPageSchema: JsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url,
    inLanguage: 'tr-TR',
    datePublished: isoDate,
    dateModified: isoModified,
    reviewedBy: reviewerPerson,
    ...(resolvedImage ? { image: resolvedImage } : {}),
  };

  const articleSchema: JsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: isoDate,
    dateModified: isoModified,
    inLanguage: 'tr-TR',
    mainEntityOfPage: url,
    ...(articleSection ? { articleSection } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(', ') } : {}),
    author: authorPerson,
    ...(citation ? { citation: Array.isArray(citation) ? citation : [citation] } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Estranova',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: joinUrl(siteUrl, '/favicon.svg') },
    },
    // GSC: Article.reviewedBy "property not recognized" olarak bayraklanıyor.
    // Tıbbi inceleme sinyali MedicalWebPage.reviewedBy'da kalır (CreativeWork domain).
    ...(resolvedImage ? { image: resolvedImage } : {}),
  };

  const breadcrumbItems: JsonLdSchema[] = [
    { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: siteUrl },
  ];
  if (articleSection && sectionUrl) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: articleSection,
      item: sectionUrl,
    });
  }
  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: title,
    item: url,
  });

  const breadcrumbSchema: JsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  const faqSchema: JsonLdSchema | null = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const baseSchemas =
    articleType === 'clinical-guide'
      ? [medicalWebPageSchema, articleSchema, breadcrumbSchema]
      : [articleSchema, breadcrumbSchema];

  return faqSchema ? [...baseSchemas, faqSchema] : baseSchemas;
}
