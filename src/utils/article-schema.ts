import { writers, type Writer } from '../data/writers';
import { submenuHeroByRoute } from '../data/submenu-heroes';
import type { ArticleFaqItem } from '../data/article-faqs';

type JsonLdSchema = Record<string, unknown>;

export interface BuildArticleSchemaOptions {
  title: string;
  description: string;
  writerSlug: Writer['slug'];
  publishedDate: string; // "14 Nisan 2026" veya ISO
  pathname: string; // örn. "/zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz" (leading slash)
  articleSection?: string; // breadcrumb + schema.articleSection ("Zihin & Denge")
  sectionPath?: string; // örn. "/zihin-denge"
  image?: string; // absolute, OG image
  keywords?: string[];
  medicalReviewer?: string;
  medicalReviewerTitle?: string;
  faqItems?: ArticleFaqItem[];
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
    faqItems = [],
    medicalReviewer = 'Doç. Dr. Senai Aksoy',
    medicalReviewerTitle = 'Kadın Hastalıkları ve Doğum Uzmanı · Tıbbi Editör',
    siteUrl: rawSiteUrl,
  } = opts;

  const siteUrl = rawSiteUrl.replace(/\/+$/, '');
  const url = joinUrl(siteUrl, pathname);
  const sectionUrl = sectionPath ? joinUrl(siteUrl, sectionPath) : undefined;

  // Image fallback: explicit `image` opt > submenu hero (auto absolute URL).
  // Article rich results (Google) require an `image` field. This fallback ensures
  // every article schema gets an image without requiring per-article wiring.
  const heroEntry = submenuHeroByRoute[pathname];
  const heroAbsolute = heroEntry
    ? (heroEntry.src.startsWith('http') ? heroEntry.src : joinUrl(siteUrl, heroEntry.src))
    : undefined;
  const resolvedImage = image ?? heroAbsolute;

  const writer = getWriter(writerSlug);
  const isoDate = toISODate(publishedDate);
  const authorPerson: JsonLdSchema = writer.isInstitutionalByline
    ? {
        '@type': 'Organization',
        name: writer.displayName,
        description: writer.publicBio,
        url: joinUrl(siteUrl, '/editoryal-politika'),
      }
    : {
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
    ...(resolvedImage ? { image: resolvedImage } : {}),
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

  return faqSchema
    ? [medicalWebPageSchema, articleSchema, breadcrumbSchema, faqSchema]
    : [medicalWebPageSchema, articleSchema, breadcrumbSchema];
}
