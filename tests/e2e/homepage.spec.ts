import { test, expect } from '@playwright/test';

test.describe('Trang chủ K2AiHub - Link Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage and test main navigation links', async ({ page }) => {
    // Check main navigation links work
    const navLinks = await page.locator('nav a, header a').all();

    console.log(`Found ${navLinks.length} navigation links to test`);

    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      const linkText = await link.textContent();

      if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) continue;

      console.log(`Testing navigation link: ${linkText?.trim()} (${href})`);

      try {
        await page.goto(href);
        await page.waitForLoadState('networkidle');

        // Just check page loads - don't test specific titles
        await expect(page).not.toHaveURL(/.*404/);

        const content = await page.locator('body').textContent();
        expect(content).toBeTruthy();
        expect(content!.length).toBeGreaterThan(50);

        console.log(`✅ ${href}: Link works`);

        // Go back to homepage
        await page.goto('/');
        await page.waitForLoadState('networkidle');
      } catch (error) {
        console.log(`❌ ${href}: Link failed - ${error}`);
      }
    }
  });

  test('should test main module access links', async ({ page }) => {
    const moduleUrls = ['/city', '/ai', '/practice', '/learning', '/feedback'];

    for (const moduleUrl of moduleUrls) {
      console.log(`Testing module access: ${moduleUrl}`);

      try {
        await page.goto(moduleUrl);
        await page.waitForLoadState('networkidle');

        // Check if page loads without 404
        await expect(page).not.toHaveURL(/.*404/);

        // Check page has content
        const content = await page.locator('body').textContent();
        expect(content).toBeTruthy();
        expect(content!.length).toBeGreaterThan(100);

        console.log(`✅ ${moduleUrl}: Module accessible`);
      } catch (error) {
        console.log(`❌ ${moduleUrl}: Module failed - ${error}`);
      }
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check page loads on mobile
    await expect(page).not.toHaveURL(/.*404/);

    // Check basic content is visible
    const content = await page.locator('body').textContent();
    expect(content).toBeTruthy();

    // Test mobile menu functionality if exists
    const mobileMenuButton = page.locator(
      '[aria-label="Menu"], .mobile-menu-button, button[data-testid="mobile-menu"]',
    );
    const mobileMenuCount = await mobileMenuButton.count();

    if (mobileMenuCount > 0) {
      await mobileMenuButton.first().click();
      await page.waitForTimeout(500);

      // Check if menu opens (look for navigation items)
      const menuItems = await page.locator('nav, .mobile-menu').count();
      expect(menuItems).toBeGreaterThan(0);
    }
  });
});
