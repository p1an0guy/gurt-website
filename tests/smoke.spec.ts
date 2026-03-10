import { expect, test } from '@playwright/test';

test('homepage renders key conversion elements', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText(/GURT/i);
  await expect(page.getByRole('button', { name: /join.*waitlist/i }).first()).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /^Demo$/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /gurt in action/i })).toBeVisible();
  await expect(page.getByLabel(/email/i)).toBeVisible();
});

test('privacy page exists', async ({ page }) => {
  await page.goto('/privacy');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/privacy/i);
});

test('terms page exists', async ({ page }) => {
  await page.goto('/terms');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/terms/i);
});
