import { test, expect } from '@playwright/test';

// Define the base URL for the application
const appAddress = 'http://localhost:5173';

/**
 * Test Case: The app should display the title
 * - Opens the application in the browser
 * - Verifies that the main title (`<h1>`) contains "User Management"
 * - Pauses execution (for debugging purposes if running in headed mode)
 */
test('The app should display both titles', async ({ page }) => {
    // Navigate to the application's home page
    await page.goto(appAddress);

    // Check that the "Welcome to Aksa's Web App" title is found
    await expect(page.locator('h1:text("Welcome to Aksa\'s Web App")')).toBeVisible();

    // Check that the "User Management" title is found
    await expect(page.locator('h1:text("User Management")')).toBeVisible();

    // Optionally, ensure the first h1 contains "Welcome to Aksa's Web App"
    await expect(page.locator('h1').first()).toHaveText("Welcome to Aksa's Web App");

    // Optionally, ensure the second h1 contains "User Management"
    await expect(page.locator('h1').nth(1)).toHaveText("User Management");

    await page.pause();
});