/**
 * Kanıt düzeyi ölçeği — `Evidence.astro` ve belirti kartları aynı sözcükleri kullanır.
 * Görünür biçim: "(iyi kanıt)", aralıkta "(orta–iyi kanıt)".
 */

export type EvidenceLevel = 1 | 2 | 3 | 4 | 5;

export const EVIDENCE_LABELS: Record<EvidenceLevel, string> = {
  5: 'güçlü',
  4: 'iyi',
  3: 'orta',
  2: 'sınırlı',
  1: 'zayıf',
};

/** Tek düzey, aralık ya da çalışmaların farklı sonuç verdiği karma durum. */
export type EvidenceSpec =
  | { level: EvidenceLevel }
  | { from: EvidenceLevel; to: EvidenceLevel }
  | { mixed: true };

export function evidenceLabel(spec: EvidenceSpec): string {
  if ('mixed' in spec) return 'karma kanıt';
  if ('from' in spec) return `${EVIDENCE_LABELS[spec.from]}–${EVIDENCE_LABELS[spec.to]} kanıt`;
  return `${EVIDENCE_LABELS[spec.level]} kanıt`;
}

export function evidenceTooltip(spec: EvidenceSpec): string {
  if ('mixed' in spec) return 'Kanıt düzeyi: karma (çalışmalar farklı sonuçlar veriyor)';
  if ('from' in spec) {
    return `Kanıt düzeyi: ${EVIDENCE_LABELS[spec.from]}–${EVIDENCE_LABELS[spec.to]} (${spec.from}–${spec.to}/5)`;
  }
  return `Kanıt düzeyi: ${EVIDENCE_LABELS[spec.level]} (${spec.level}/5)`;
}
