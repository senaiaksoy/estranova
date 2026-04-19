import { writers, type Writer } from '../data/writers';

type JsonLdSchema = Record<string, unknown>;

export interface BuildArticleSchemaOptions {
  title: string;
  description: string;
  writerSlug: Writer['slug'];
  publishedDate: string; // "14 Nisan 2026" veya ISO
  pathname: string; // örn. "/zihin-denge/ruh-hali-degisimleri-menopoz" (leading slash)
  articleSection?: string; // breadcrumb + schema.articleSection ("Zihin & Denge")
  sectionPath?: string; // örn. "/zihin-denge"
  image?: string; // absolute, OG image
  keywords?: string[];
  medicalReviewer?: string;
  medicalReviewerTitle?: string;
  siteUrl: string;
}

function joinUrl(siteUrl: string, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
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
    publishedDate,
    pathname,
    articleSection,
    sectionPath,
    image,
    keywords,
    medicalReviewer = 'Doç. Dr. Senai Aksoy',
    medicalReviewerTitle = 'Kadın Hastalıkları ve Doğum Uzmanı · Tıbbi Editör',
    siteUrl: rawSiteUrl,
  } = opts;

  const siteUrl = rawSiteUrl.replace(/\/+$/, '');
  const url = joinUrl(siteUrl, pathname);
  const sectionUrl = sectionPath ? joinUrl(siteUrl, sectionPath) : undefined;

  const writer = getWriter(writerSlug);
  const isoDate = toISODate(publishedDate);
  const authorPerson: JsonLdSchema = {
    '@type': 'Person',
    name: writer.displayName,
    jobTitle: writer.role,
    description: writer.publicBio,
    ...(writer.portrait ? { image: joinUrl(siteUrl, writer.portrait) } : {}),
    url: joinUrl(siteUrl, '/yayin-kurulu'),
  };

  const reviewerPerson: JsonLdSchema = {
    '@type': 'Person',
    name: medicalReviewer,
    jobTitle: medicalReviewerTitle,
  };

  const medicalWebPageSchema: JsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url,
    inLanguage: 'tr-TR',
    datePublished: isoDate,
    dateModified: isoDate,
    reviewedBy: reviewerPerson,
    ...(image ? { image } : {}),
  };

  const articleSchema: JsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: isoDate,
    dateModified: isoDate,
    inLanguage: 'tr-TR',
    mainEntityOfPage: url,
    ...(articleSection ? { articleSection } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(', ') } : {}),
    author: authorPerson,
    publisher: {
      '@type': 'Organization',
      name: 'Estranova',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: joinUrl(siteUrl, '/favicon.svg') },
    },
    reviewedBy: reviewerPerson,
    ...(image ? { image } : {}),
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

  return [medicalWebPageSchema, articleSchema, breadcrumbSchema];
}
