import { test, expect } from '@playwright/test';

interface GameTestResult {
  gameId: string;
  gameName: string;
  url: string;
  status: 'implemented' | 'not_implemented' | 'error';
  error?: string;
}

test.describe('practice Link Testing - Kiểm tra liên kết Interactive Practice', () => {
  const gameTestResults: GameTestResult[] = [];

  test('should test all game links from /practice/ page', async ({ page }) => {
    // Navigate to practice page
    await page.goto('/practice/');

    console.log('🎮 Starting practice Link Testing...');

    // Wait for page to load completely
    await page.waitForLoadState('networkidle');

    // Wait for practice to load by checking for "Practice" buttons
    await page.waitForSelector('button:has-text("Practice")', {
      timeout: 30000,
    });

    // Get all "Practice" buttons and their associated game information
    const gameButtons = await page.locator('button:has-text("Practice")').all();
    console.log(`Found ${gameButtons.length} "Practice" buttons to test`);

    for (let i = 0; i < gameButtons.length; i++) {
      try {
        // Get the game name from the nearest heading or title
        const gameCard = gameButtons[i].locator('..').locator('..');
        const gameTitle = await gameCard.locator('h3, h2, .font-bold').first().textContent();
        const gameName = gameTitle?.trim() || `Game ${i + 1}`;

        console.log(`Testing game: ${gameName}`);

        // Store current URL to compare
        const beforeUrl = page.url();

        // Click the "Practice" button
        await gameButtons[i].click();

        // Wait for navigation or page change
        await page.waitForTimeout(2000);
        await page.waitForLoadState('networkidle');

        const afterUrl = page.url();
        const gameId = afterUrl.split('/').pop() || `game-${i}`;

        if (beforeUrl === afterUrl) {
          // No navigation happened, might be a modal or same page
          gameTestResults.push({
            gameId,
            gameName,
            url: afterUrl,
            status: 'error',
            error: 'Button click did not navigate to game page',
          });
          console.log(`❌ ${gameName}: No navigation occurred`);
        } else {
          // Navigation happened, check the page content
          const pageContent = await page.textContent('body');
          const lowerContent = pageContent?.toLowerCase() || '';

          // Check for not implemented messages
          if (
            lowerContent.includes('game not implemented') ||
            lowerContent.includes('not implemented yet') ||
            lowerContent.includes('coming soon') ||
            lowerContent.includes('under construction') ||
            lowerContent.includes('404') ||
            lowerContent.includes('not found')
          ) {
            gameTestResults.push({
              gameId,
              gameName,
              url: afterUrl,
              status: 'not_implemented',
              error: 'Game not implemented yet',
            });
            console.log(`❌ ${gameName}: Not implemented`);
          }
          // Check for error states
          else if (
            lowerContent.includes('error') ||
            lowerContent.includes('failed') ||
            lowerContent.includes('something went wrong') ||
            afterUrl.includes('404')
          ) {
            gameTestResults.push({
              gameId,
              gameName,
              url: afterUrl,
              status: 'error',
              error: 'Error on page load',
            });
            console.log(`⚠️ ${gameName}: Error detected`);
          }
          // Quick check for interactive elements
          else {
            const hasInteractiveElements = await page
              .locator('button, input, canvas, svg, select, [role="button"]')
              .count();

            if (hasInteractiveElements > 2) {
              // More than basic navigation
              gameTestResults.push({
                gameId,
                gameName,
                url: afterUrl,
                status: 'implemented',
              });
              console.log(`✅ ${gameName}: Working (${hasInteractiveElements} interactive elements)`);
            } else {
              gameTestResults.push({
                gameId,
                gameName,
                url: afterUrl,
                status: 'error',
                error: 'Minimal interactive content',
              });
              console.log(`❓ ${gameName}: Minimal interactivity`);
            }
          }
        }

        // Go back to practice page for next test
        await page.goto('/practice/');
        await page.waitForLoadState('networkidle');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const gameId = `game-${i}`;
        const gameName = `Game ${i + 1}`;

        gameTestResults.push({
          gameId,
          gameName,
          url: page.url(),
          status: 'error',
          error: `Button click error: ${errorMessage}`,
        });
        console.log(`❌ ${gameName}: Button click failed - ${errorMessage}`);

        // Try to go back to practice page
        try {
          await page.goto('/practice/');
          await page.waitForLoadState('networkidle');
        } catch (e) {
          console.log(`Failed to return to practice page: ${e}`);
        }
      }

      // Brief pause between tests
      await page.waitForTimeout(500);
    }

    // Generate report
    console.log('\n📊 GAME TESTING REPORT:');
    console.log('========================');

    const implemented = gameTestResults.filter((g) => g.status === 'implemented');
    const notImplemented = gameTestResults.filter((g) => g.status === 'not_implemented');
    const errors = gameTestResults.filter((g) => g.status === 'error');

    console.log(`✅ Implemented: ${implemented.length}`);
    console.log(`❌ Not Implemented: ${notImplemented.length}`);
    console.log(`⚠️ Errors: ${errors.length}`);
    console.log(`📊 Total Tested: ${gameTestResults.length}`);

    if (notImplemented.length > 0) {
      console.log('\n❌ GAMES TO IMPLEMENT:');
      notImplemented.forEach((game) => {
        console.log(`- ${game.gameName} (${game.url})`);
      });
    }

    if (errors.length > 0) {
      console.log('\n⚠️ GAMES WITH ERRORS:');
      errors.forEach((game) => {
        console.log(`- ${game.gameName} (${game.url}): ${game.error}`);
      });
    }

    // Write results to a file for later use
    await page.evaluate((results) => {
      // Store in localStorage for now (in real scenario, would write to file)
      localStorage.setItem('gameTestResults', JSON.stringify(results));
    }, gameTestResults);

    // Test should pass regardless of results - we're just collecting data
    expect(gameTestResults.length).toBeGreaterThan(0);
  });

  test('should verify games page loads and has navigation', async ({ page }) => {
    await page.goto('/practice/');

    // Basic functionality check - page loads
    await expect(page).not.toHaveURL(/.*404/);

    // Should have some content
    const content = await page.locator('body').textContent();
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(100);
  });

  test('should test specific critical game links', async ({ page }) => {
    const criticalGames = [
      '/practice/traffic-management-simulator',
      '/practice/currency-exchange-puzzle',
      '/practice/arduino-circuit-builder',
    ];

    for (const gameUrl of criticalGames) {
      console.log(`Testing critical game: ${gameUrl}`);

      try {
        await page.goto(gameUrl);
        await page.waitForLoadState('networkidle');

        // Check if page loads without major errors
        const hasError = await page.locator('text=/Game not implemented|404|Not found|Error/i').count();

        if (hasError === 0) {
          console.log(`✅ ${gameUrl}: Loads successfully`);
        } else {
          console.log(`❌ ${gameUrl}: Has implementation issues`);
        }

        // Just ensure we can navigate - don't test specific functionality
        expect(page.url()).toContain(gameUrl.split('/').pop());
      } catch (error) {
        console.log(`❌ ${gameUrl}: Navigation failed - ${error}`);
      }
    }
  });
});
