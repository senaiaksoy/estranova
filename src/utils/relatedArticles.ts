import type { Article } from '../data/articles';

interface RelatedOptions {
  limit?: number;
}

const symptomKeywordGroups: Record<string, string[]> = {
  vazomotor: ['sicak basmasi', 'gece terlemesi', 'terleme'],
  bilissel: ['beyin sisi', 'bilissel', 'unutkanlik', 'konsantrasyon'],
  uyku: ['uyku', 'uykusuzluk', 'gece uyanma'],
  duygudurum: ['kaygi', 'duygudurum', 'anksiyete', 'stres'],
  kas_iskelet: ['eklem', 'kas', 'kemik', 'sertlik'],
  dermatolojik: ['cilt', 'sac', 'kuruluk'],
  kardiyometabolik: ['kalp', 'kardiyovaskuler', 'metabolik'],
};

function normalizeForMatch(text: string): string {
  return text
    .replace(/\u0131/g, 'i')
    .replace(/\u0130/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function toNormalizedTagSet(tags: string[]): Set<string> {
  return new Set(tags.map((tag) => normalizeForMatch(tag)));
}

function getOverlapCount(a: Set<string>, b: Set<string>): number {
  let count = 0;
  for (const value of a) {
    if (b.has(value)) count += 1;
  }
  return count;
}

function getSymptomSignals(article: Article): Set<string> {
  const haystack = normalizeForMatch([article.title, article.excerpt, ...article.tags].join(' '));
  const groups = new Set<string>();

  for (const [group, keywords] of Object.entries(symptomKeywordGroups)) {
    if (keywords.some((keyword) => haystack.includes(normalizeForMatch(keyword)))) {
      groups.add(group);
    }
  }

  return groups;
}

function scoreArticle(target: Article, candidate: Article): number {
  const targetTags = toNormalizedTagSet(target.tags);
  const candidateTags = toNormalizedTagSet(candidate.tags);

  const tagOverlap = getOverlapCount(targetTags, candidateTags);
  const targetSignals = getSymptomSignals(target);
  const candidateSignals = getSymptomSignals(candidate);
  const symptomOverlap = getOverlapCount(targetSignals, candidateSignals);

  let score = 0;
  if (candidate.category === target.category) score += 40;
  score += tagOverlap * 18;
  score += symptomOverlap * 14;

  if (candidate.tags.some((tag) => /menopoz|perimenopoz/iu.test(tag))) {
    score += 2;
  }

  return score;
}

export function getRelatedArticles(target: Article, pool: Article[], options: RelatedOptions = {}): Article[] {
  const limit = options.limit ?? 3;

  return [...pool]
    .map((candidate) => ({
      candidate,
      score: scoreArticle(target, candidate),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.candidate.date !== b.candidate.date) {
        return a.candidate.date < b.candidate.date ? 1 : -1;
      }
      return a.candidate.slug.localeCompare(b.candidate.slug, 'tr');
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
