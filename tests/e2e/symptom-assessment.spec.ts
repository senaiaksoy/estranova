import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  const acceptAll = page.getByRole('button', { name: 'Tümünü kabul et' });
  if (await acceptAll.isVisible()) await acceptAll.click();
});

test('opens the skin assessment questions from the cilt topic query', async ({ page }) => {
  await page.goto('/belirti-degerlendirme/?topic=cilt');

  await expect(page.locator('[data-selected-topic]')).toHaveText('Cilt değişimlerini anlamak');
  await expect(page.getByRole('button', { name: 'Başlığa dön' })).toBeVisible();
  await expect(page.locator('[data-assessment-step="questions"]')).toBeVisible();
  await expect(page.locator('[data-assessment-step="topic"]')).toBeHidden();
});

test('keeps the symptom article and assessment CTAs as separate links on mobile', async ({ page }) => {
  await page.goto('/symptoms/');

  const card = page.locator('article').filter({ hasText: 'Cilt değişimleri' });
  await expect(card.getByRole('link', { name: 'Rehberi oku' })).toHaveAttribute('href', '/beden-yakinlik/cilt-gorunum/');
  await expect(card.getByRole('link', { name: 'Değerlendir' })).toHaveAttribute('href', '/belirti-degerlendirme/?topic=cilt');
});

test('shows a deterministic skin reading route after all answers are selected', async ({ page }) => {
  await page.goto('/belirti-degerlendirme/?topic=cilt');

  for (const question of await page.locator('fieldset').all()) {
    await question.getByRole('radio').last().check();
  }

  await expect(page.getByRole('button', { name: 'Okuma rotasını göster' })).toBeEnabled();
  await page.getByRole('button', { name: 'Okuma rotasını göster' }).click();

  await expect(page.getByRole('heading', { name: 'Cilt değişimlerini anlamak' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Menopozda cilt değişimleri' })).toHaveAttribute(
    'href',
    '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/',
  );
  await expect(page.getByText('Ne zaman destek düşünmeli?')).toBeVisible();
});
