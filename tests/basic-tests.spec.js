// @ts-check
const { test, expect } = require('@playwright/test');

test('Website has title', async ({ page }) => {
  await page.goto('https://rbrd87.github.io/app-frod-hc/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AFLHC - Home/);
});

test('Fixtures Link', async ({ page }) => {
  await page.goto('https://rbrd87.github.io/app-frod-hc/');

  // Click the get started link.
  await page.locator('#navbarScroll').getByRole('link', { name: 'Fixtures & Results' }).click();

  // Expects page to have a heading with the name of Fixtures & Results.
  await expect(page.getByRole('heading', { name: 'Fixtures & Results' })).toBeVisible();

  // Expects the fixtures and results to be visible
  await expect(page.locator('#fixtures-list')).toBeVisible();
});

test('League Table link', async ({ page }) => {
  await page.goto('https://rbrd87.github.io/app-frod-hc/');

  // Click the get started link.
  await page.locator('#navbarScroll').getByRole('link', { name: 'League Table' }).click();

  // Expects page to have a heading with the name of League Table.
  await expect(page.getByRole('heading', { name: 'League Table' })).toBeVisible();

  // Expects the league table to be visible
  await expect(page.locator('#tableElement')).toBeVisible();
});
