import { test, expect } from '@playwright/test';

const appAddress = 'http://localhost:5173';  // Adjust the URL as needed
const name = 'John Doe';
const email = 'john.doe@example.com';

test('The front page should display the form and button', async ({ page }) => {
  // Open the front page
  await page.goto(appAddress);

  // Fill out the form with valid data
  await page.fill('input[placeholder="Name"]', name);
  await page.fill('input[placeholder="Email"]', email);

  // Click the "Create" button
  await page.click('button:has-text("Create")');

  // Wait for the success message to be visible
  await expect(page.locator(`text=User created successfully: ${name}`)).toBeVisible();

  // Pause for debugging (optional)
  await page.pause();

  // Find the new user item and check that it contains the correct name and email
  const userItem = page.locator(`li:has-text("${name}, ${email}")`);
  await expect(userItem).toBeVisible();
});