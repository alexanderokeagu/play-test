import {test, expect} from "@playwright/test";

test('Navigate to goal.com', async ({ page }) => {
    test.setTimeout(1200000);
    await page.goto("https://www.goal.com/en-ng");
    await page.locator("//img[@alt = 'Scott McTominay Napoli GFX']").isVisible();
    await page.locator(".auth-button_text___tnny").click();
    await page.fill("//input[@name='email']", "pezokeagu@gmail.com");
    await page.fill("//input[@name='password']", "Pezokeagu@123");
    await page.locator("//button[text()='Log in']").click();
})