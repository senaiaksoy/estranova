import type { Writer } from './writers';

export const articleTypes = [
  'clinical-guide',
  'expert-essay',
  'experience-essay',
  'editorial-guide',
] as const;

export type ArticleType = (typeof articleTypes)[number];

export type ArticleAuthorTrack = 'scientific' | 'non-clinical' | 'institutional';

export interface DefaultMedicalReviewer {
  name: string;
  title: string;
}

export function getDefaultMedicalReviewer(writerSlug: string): DefaultMedicalReviewer {
  return writerSlug === 'senai-aksoy'
    ? { name: 'Dr. Alper Mumcu', title: 'Kadın Hastalıkları ve Doğum Uzmanı' }
    : { name: 'Doç. Dr. Senai Aksoy', title: 'Kadın Hastalıkları ve Doğum Uzmanı · Tıbbi Editör' };
}

export const allowedArticleTypesByTrack: Record<ArticleAuthorTrack, readonly ArticleType[]> = {
  scientific: ['clinical-guide', 'expert-essay'],
  'non-clinical': ['experience-essay', 'editorial-guide'],
  institutional: ['editorial-guide'],
};

export function getArticleAuthorTrack(
  writer: Pick<Writer, 'category' | 'isInstitutionalByline' | 'articleAuthority'>,
): ArticleAuthorTrack {
  if (writer.isInstitutionalByline) return 'institutional';
  if (writer.articleAuthority) return writer.articleAuthority;
  return writer.category === 'scientific' ? 'scientific' : 'non-clinical';
}

export function assertArticleTypeForWriter(
  writer: Pick<Writer, 'displayName' | 'category' | 'isInstitutionalByline' | 'articleAuthority'>,
  articleType: ArticleType,
): void {
  const track = getArticleAuthorTrack(writer);
  if (!allowedArticleTypesByTrack[track].includes(articleType)) {
    throw new Error(
      `Makale türü yazar yetkisiyle uyumsuz: ${writer.displayName} (${track}) -> ${articleType}`,
    );
  }
}

export const articleTypeLabels: Record<ArticleType, string> = {
  'clinical-guide': 'Klinik Rehber',
  'expert-essay': 'Uzman Denemesi',
  'experience-essay': 'Yaşam ve Deneyim',
  'editorial-guide': 'Editoryal Rehber',
};
export const articleTypeContracts: Record<
  ArticleType,
  {
    medicalWebPage: boolean;
    medicalReview: 'required' | 'when-medical-claims';
    faq: 'recommended' | 'optional';
    evidence: 'required' | 'when-medical-claims';
    externalSources: 'required' | 'allowed-when-needed';
  }
> = {
  'clinical-guide': {
    medicalWebPage: true,
    medicalReview: 'required',
    faq: 'recommended',
    evidence: 'required',
    externalSources: 'required',
  },
  'expert-essay': {
    medicalWebPage: false,
    medicalReview: 'when-medical-claims',
    faq: 'optional',
    evidence: 'when-medical-claims',
    externalSources: 'allowed-when-needed',
  },
  'experience-essay': {
    medicalWebPage: false,
    medicalReview: 'when-medical-claims',
    faq: 'optional',
    evidence: 'when-medical-claims',
    externalSources: 'allowed-when-needed',
  },
  'editorial-guide': {
    medicalWebPage: false,
    medicalReview: 'when-medical-claims',
    faq: 'optional',
    evidence: 'when-medical-claims',
    externalSources: 'allowed-when-needed',
  },
};
