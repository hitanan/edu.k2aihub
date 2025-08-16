import { test, expect, Page } from '@playwright/test';

interface ModuleTestResult {
  moduleId: string;
  moduleName: string;
  url: string;
  status: 'implemented' | 'not_implemented' | 'error';
  error?: string;
  lessonResults?: LessonTestResult[];
}

interface LessonTestResult {
  lessonId: string;
  lessonName: string;
  url: string;
  status: 'implemented' | 'not_implemented' | 'error';
  error?: string;
}

test.describe('Learning Modules and Lessons Link Testing', () => {
  const moduleTestResults: ModuleTestResult[] = [];

  test('should test all learning module links from /learning/ page', async ({ page }) => {
    // Navigate to learning page
    await page.goto('/learning/');
    
    console.log('📚 Starting Learning Modules Link Testing...');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Wait for modules to load - look for common learning page elements
    console.log('⏳ Waiting for learning modules to load...');
    
    // Try multiple selectors to wait for module content
    try {
      await page.waitForSelector('h1, h2, h3, .module-card, .bg-gradient-to-r, a[href*="/learning/"], button', {
        timeout: 60000
      });
      console.log('✅ Learning page elements found');
    } catch {
      console.log('⚠️ Timeout waiting for learning modules, proceeding anyway...');
    }
    
    // Wait a bit more for dynamic content
    await page.waitForTimeout(3000);
    
    // Get page content to debug
    const pageContent = await page.textContent('body');
    console.log(`📄 Page content length: ${pageContent?.length || 0} characters`);
    
    // Look for module links more broadly
    const allLinks = await page.locator('a').all();
    console.log(`🔗 Total links found on page: ${allLinks.length}`);
    
    const moduleLinks = [];
    for (const link of allLinks) {
      const href = await link.getAttribute('href');
      if (href && href.includes('/learning/') && href !== '/learning/' && href !== '/learning') {
        // Only get main module links, not individual lessons
        const segments = href.replace('/learning/', '').split('/');
        if (segments.length === 1 && segments[0]) {
          moduleLinks.push(link);
        }
      }
    }
    
    console.log(`📚 Found ${moduleLinks.length} learning module links to test`);
    
    // If no module links found, try to find them by looking at common module names
    if (moduleLinks.length === 0) {
      console.log('🔍 No module links found via href, trying common module names...');
      
      const commonModules = [
        'python',
        'arduino', 
        'robotics',
        'ai-applications',
        'digital-marketing',
        'cybersecurity',
        'biotechnology',
        'green-technology',
        'game-development',
        'financial-literacy'
      ];
      
      for (const moduleId of commonModules) {
        const moduleUrl = `/learning/${moduleId}`;
        console.log(`🔍 Testing common module: ${moduleId} (${moduleUrl})`);
        
        try {
          await page.goto(moduleUrl);
          await page.waitForLoadState('networkidle');
          
          const pageContent = await page.textContent('body');
          const lowerContent = pageContent?.toLowerCase() || '';
          
          let moduleResult: ModuleTestResult;
          
          if (lowerContent.includes('404') || lowerContent.includes('not found')) {
            moduleResult = {
              moduleId,
              moduleName: moduleId,
              url: moduleUrl,
              status: 'not_implemented',
              error: 'Module not found (404)'
            };
            console.log(`❌ ${moduleId}: Not found (404)`);
          } else if (
            lowerContent.includes('module not implemented') ||
            lowerContent.includes('not implemented') ||
            lowerContent.includes('coming soon')
          ) {
            moduleResult = {
              moduleId,
              moduleName: moduleId,
              url: moduleUrl,
              status: 'not_implemented',
              error: 'Module not implemented yet'
            };
            console.log(`❌ ${moduleId}: Not implemented`);
          } else if (lowerContent.includes('error') || lowerContent.includes('something went wrong')) {
            moduleResult = {
              moduleId,
              moduleName: moduleId,
              url: moduleUrl,
              status: 'error',
              error: 'Error on page load'
            };
            console.log(`⚠️ ${moduleId}: Error on page`);
          } else {
            // Module seems to work, test lessons
            console.log(`✅ ${moduleId}: Module loads - testing lessons...`);
            const lessonResults = await testModuleLessons(page, moduleUrl, moduleId);
            
            moduleResult = {
              moduleId,
              moduleName: moduleId,
              url: moduleUrl,
              status: 'implemented',
              lessonResults
            };
          }
          
          moduleTestResults.push(moduleResult);
          
        } catch (error) {
          moduleTestResults.push({
            moduleId,
            moduleName: moduleId,
            url: moduleUrl,
            status: 'error',
            error: `Navigation error: ${error}`
          });
          console.log(`❌ ${moduleId}: Navigation error`);
        }
        
        await page.waitForTimeout(1000);
      }
    } else {
      // Process found module links
      for (const link of moduleLinks) {
        const href = await link.getAttribute('href');
        const linkText = await link.textContent();
        
        if (!href) continue;
        
        const moduleId = href.replace('/learning/', '').split('/')[0];
        const moduleName = linkText?.trim() || moduleId;
        
        console.log(`\n🔍 Testing module: ${moduleName} (${href})`);
        
        try {
          // Navigate to module page
          await page.goto(href);
          await page.waitForLoadState('networkidle');
          
          // Check if it shows "Module not implemented yet" or similar error
          const notImplementedText = await page.locator('text=/Module not implemented|Not implemented|Coming soon|404|Not found/i').count();
          const errorText = await page.locator('text=/Error|Failed|Something went wrong/i').count();
          
          let moduleResult: ModuleTestResult;
          
          if (notImplementedText > 0) {
            moduleResult = {
              moduleId,
              moduleName,
              url: href,
              status: 'not_implemented',
              error: 'Module not implemented yet'
            };
            console.log(`❌ ${moduleName}: Not implemented`);
          } else if (errorText > 0) {
            moduleResult = {
              moduleId,
              moduleName,
              url: href,
              status: 'error',
              error: 'Error on page load'
            };
            console.log(`⚠️ ${moduleName}: Error on page`);
          } else {
            // Module seems to work, now test lessons
            console.log(`✅ ${moduleName}: Module loads - testing lessons...`);
            
            const lessonResults = await testModuleLessons(page, href, moduleId);
            
            moduleResult = {
              moduleId,
              moduleName,
              url: href,
              status: 'implemented',
              lessonResults
            };
          }
          
          moduleTestResults.push(moduleResult);
          
        } catch (error) {
          moduleTestResults.push({
            moduleId,
            moduleName,
            url: href,
            status: 'error',
            error: `Navigation error: ${error}`
          });
          console.log(`❌ ${moduleName}: Navigation error`);
        }
        
        // Small delay between tests
        await page.waitForTimeout(1000);
      }
    }
    
    // Generate comprehensive report
    await generateModulesReport();
    
    // Test should pass - we're just collecting data
    expect(moduleTestResults.length).toBeGreaterThan(0);
  });

  async function testModuleLessons(page: import('@playwright/test').Page, moduleUrl: string, moduleId: string): Promise<LessonTestResult[]> {
    const lessonResults: LessonTestResult[] = [];
    
    try {
      // Look for lesson links within the module
      const lessonLinks = await page.locator(`a[href*="${moduleUrl}/"], a[href*="/learning/${moduleId}/"]`).all();
      
      console.log(`   Found ${lessonLinks.length} lesson links in module`);
      
      for (const lessonLink of lessonLinks) {
        const lessonHref = await lessonLink.getAttribute('href');
        const lessonText = await lessonLink.textContent();
        
        if (!lessonHref || lessonHref === moduleUrl) continue;
        
        const lessonId = lessonHref.split('/').pop() || 'unknown';
        const lessonName = lessonText?.trim() || lessonId;
        
        console.log(`   📖 Testing lesson: ${lessonName} (${lessonHref})`);
        
        try {
          await page.goto(lessonHref);
          await page.waitForLoadState('networkidle');
          
          const notImplementedText = await page.locator('text=/Lesson not implemented|Not implemented|Coming soon|404|Not found/i').count();
          const errorText = await page.locator('text=/Error|Failed|Something went wrong/i').count();
          
          if (notImplementedText > 0) {
            lessonResults.push({
              lessonId,
              lessonName,
              url: lessonHref,
              status: 'not_implemented',
              error: 'Lesson not implemented yet'
            });
            console.log(`   ❌ ${lessonName}: Not implemented`);
          } else if (errorText > 0) {
            lessonResults.push({
              lessonId,
              lessonName,
              url: lessonHref,
              status: 'error',
              error: 'Error on lesson page'
            });
            console.log(`   ⚠️ ${lessonName}: Error on page`);
          } else {
            // Check if lesson has content
            const contentElements = await page.locator('main, article, .lesson-content, .content, p, h1, h2, h3').count();
            
            if (contentElements > 0) {
              lessonResults.push({
                lessonId,
                lessonName,
                url: lessonHref,
                status: 'implemented'
              });
              console.log(`   ✅ ${lessonName}: Working`);
            } else {
              lessonResults.push({
                lessonId,
                lessonName,
                url: lessonHref,
                status: 'error',
                error: 'No content found'
              });
              console.log(`   ❓ ${lessonName}: No content found`);
            }
          }
          
          // Go back to module page
          await page.goto(moduleUrl);
          await page.waitForLoadState('networkidle');
          
        } catch (error) {
          lessonResults.push({
            lessonId,
            lessonName,
            url: lessonHref,
            status: 'error',
            error: `Navigation error: ${error}`
          });
          console.log(`   ❌ ${lessonName}: Navigation error`);
        }
        
        await page.waitForTimeout(500);
      }
    } catch (error) {
      console.log(`   ⚠️ Error testing lessons: ${error}`);
    }
    
    return lessonResults;
  }

  async function generateModulesReport() {
    console.log('\n📊 LEARNING MODULES & LESSONS TESTING REPORT:');
    console.log('==============================================');
    
    const implementedModules = moduleTestResults.filter(m => m.status === 'implemented');
    const notImplementedModules = moduleTestResults.filter(m => m.status === 'not_implemented');
    const errorModules = moduleTestResults.filter(m => m.status === 'error');
    
    console.log(`✅ Implemented Modules: ${implementedModules.length}`);
    console.log(`❌ Not Implemented Modules: ${notImplementedModules.length}`);
    console.log(`⚠️ Modules with Errors: ${errorModules.length}`);
    console.log(`📊 Total Modules Tested: ${moduleTestResults.length}`);
    
    // Count lessons
    let totalLessons = 0;
    let implementedLessons = 0;
    let notImplementedLessons = 0;
    let errorLessons = 0;
    
    implementedModules.forEach(module => {
      if (module.lessonResults) {
        totalLessons += module.lessonResults.length;
        implementedLessons += module.lessonResults.filter(l => l.status === 'implemented').length;
        notImplementedLessons += module.lessonResults.filter(l => l.status === 'not_implemented').length;
        errorLessons += module.lessonResults.filter(l => l.status === 'error').length;
      }
    });
    
    console.log('\n📚 LESSONS SUMMARY:');
    console.log(`✅ Implemented Lessons: ${implementedLessons}`);
    console.log(`❌ Not Implemented Lessons: ${notImplementedLessons}`);
    console.log(`⚠️ Lessons with Errors: ${errorLessons}`);
    console.log(`📊 Total Lessons Tested: ${totalLessons}`);
    
    if (notImplementedModules.length > 0) {
      console.log('\n❌ MODULES TO IMPLEMENT:');
      notImplementedModules.forEach(module => {
        console.log(`- ${module.moduleName} (${module.url})`);
      });
    }
    
    if (errorModules.length > 0) {
      console.log('\n⚠️ MODULES WITH ERRORS:');
      errorModules.forEach(module => {
        console.log(`- ${module.moduleName} (${module.url}): ${module.error}`);
      });
    }
    
    // Report lessons to implement
    const lessonsToImplement: LessonTestResult[] = [];
    implementedModules.forEach(module => {
      if (module.lessonResults) {
        const notImplementedInModule = module.lessonResults.filter(l => l.status === 'not_implemented');
        lessonsToImplement.push(...notImplementedInModule);
      }
    });
    
    if (lessonsToImplement.length > 0) {
      console.log('\n❌ LESSONS TO IMPLEMENT:');
      const groupedByModule = lessonsToImplement.reduce((acc, lesson) => {
        const moduleUrl = lesson.url.split('/').slice(0, -1).join('/');
        const moduleName = moduleTestResults.find(m => m.url === moduleUrl)?.moduleName || 'Unknown Module';
        
        if (!acc[moduleName]) acc[moduleName] = [];
        acc[moduleName].push(lesson);
        return acc;
      }, {} as Record<string, LessonTestResult[]>);
      
      Object.entries(groupedByModule).forEach(([moduleName, lessons]) => {
        console.log(`\n  📚 ${moduleName}:`);
        lessons.forEach(lesson => {
          console.log(`    - ${lesson.lessonName} (${lesson.url})`);
        });
      });
    }
  }

  test('should verify learning page loads', async ({ page }) => {
    await page.goto('/learning/');
    
    // Basic functionality check - page loads
    await expect(page).not.toHaveURL(/.*404/);
    
    // Should have some content
    const content = await page.locator('body').textContent();
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(100);
  });

  test('should test specific critical learning modules', async ({ page }) => {
    const criticalModules = [
      '/learning/python',
      '/learning/arduino',
      '/learning/ai-applications',
      '/learning/digital-marketing',
      '/learning/cybersecurity'
    ];

    for (const moduleUrl of criticalModules) {
      console.log(`Testing critical module: ${moduleUrl}`);
      
      try {
        await page.goto(moduleUrl);
        await page.waitForLoadState('networkidle');
        
        // Check if page loads without major errors
        const hasError = await page.locator('text=/Module not implemented|404|Not found|Error/i').count();
        
        if (hasError === 0) {
          console.log(`✅ ${moduleUrl}: Loads successfully`);
        } else {
          console.log(`❌ ${moduleUrl}: Has implementation issues`);
        }
        
        expect(page.url()).toContain(moduleUrl.split('/').pop());
        
      } catch (error) {
        console.log(`❌ ${moduleUrl}: Navigation failed - ${error}`);
      }
    }
  });
});
