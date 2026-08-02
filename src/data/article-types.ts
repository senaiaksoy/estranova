export const articleTypes = [
  'clinical-guide',
  'expert-essay',
  'experience-essay',
  'editorial-guide',
] as const;

export type ArticleType = (typeof articleTypes)[number];

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
