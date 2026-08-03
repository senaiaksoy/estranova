import assert from 'node:assert/strict';
import { symptoms } from '../src/data/symptoms.ts';
import { getPainPointsBySymptom } from '../src/data/pain-points.ts';

const unmappedSymptoms = symptoms
  .filter((symptom) => !getPainPointsBySymptom(symptom.slug).some((painPoint) => painPoint.status !== 'archived'))
  .map((symptom) => symptom.slug);

assert.deepEqual(
  unmappedSymptoms,
  [],
  `Aktif değerlendirme rotası olmayan semptomlar: ${unmappedSymptoms.join(', ')}`,
);

console.log(`Symptom assessment mapping check passed for ${symptoms.length} symptom(s).`);
