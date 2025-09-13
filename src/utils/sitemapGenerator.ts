import { MetadataRoute } from 'next';
import citiesData from '@/data/cities';
import { getBlogSlugs, getAllCategoriesSync } from '@/lib/blog';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { BaseLessonData } from '@/types/lesson-base';
import { getAllModules } from '@/data/module.registry';

// Utility to automatically generate sitemap entries for all pages
const baseUrl = 'https://k2aihub.com';
export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Get all modules from registry
  const allModules = getAllModules();

  // Core application pages
  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    {
      url: `${baseUrl}/city`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/region`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' as const },
    {
      url: `${baseUrl}/feedback`,
      priority: 0.5,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/learning`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    // Dynamically generated module pages
    ...allModules.map((moduleData) => ({
      url: `${baseUrl}/learning/${moduleData.id}`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
      lastModified,
    })),
  ];

  // Educational Games pages
  const gamesPages = [
    // Main games page
    {
      url: `${baseUrl}/games`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
      lastModified,
    },
    // Individual game pages
    ...EDUCATIONAL_GAMES_DATA.map((game) => ({
      url: `${baseUrl}/games/${game.id}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified,
    })),
  ];

  // AI module pages
  const aiCategories = [
    'office-work',
    'creative-design',
    'education-learning',
    'business-marketing',
    'daily-life',
    'programming-dev',
    'ai-apps',
  ];

  const aiPages = aiCategories.map((category) => ({
    url: `${baseUrl}/ai/${category}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamically generate lesson pages for all modules
  const lessonPages = allModules.flatMap(
    (moduleData) =>
      moduleData.lessons?.map((lesson: BaseLessonData) => ({
        url: `${baseUrl}/learning/${moduleData.id}/${lesson.id}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })) || [],
  );

  // Region pages
  const regionSlugs = [
    'bac-bo',
    'tay-bac',
    'dong-bac',
    'dong-bang-bac-bo',
    'bac-trung-bo',
    'nam-trung-bo',
    'tay-nguyen',
    'dong-nam-bo',
    'dong-bang-song-cuu-long',
  ];

  const regionPages = regionSlugs.map((slug) => ({
    url: `${baseUrl}/region/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // City pages - automatically generated from cities data with enhanced SEO
  const regularCityPages = citiesData
    .filter((city) => !['ha-noi', 'ho-chi-minh', 'da-nang', 'hai-phong', 'can-tho', 'hue'].includes(city.slug))
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Add specific high-value city pages with higher priority
  const majorCityPages = citiesData
    .filter((city) => ['ha-noi', 'ho-chi-minh', 'da-nang', 'hai-phong', 'can-tho', 'hue'].includes(city.slug))
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Higher priority for major cities
    }));

  // Blog pages - get all blog posts and categories
  const blogSlugs = getBlogSlugs();
  const blogCategories = getAllCategoriesSync();

  const blogPages = [
    // Main blog page
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    // Individual blog posts
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Blog category pages
    ...blogCategories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  // Combine all pages with proper prioritization
  const allPages = [
    ...corePages.map((page) => ({ ...page, lastModified })),
    ...blogPages, // Blog content with high priority
    ...gamesPages, // Educational games pages
    ...aiPages,
    ...lessonPages, // All lesson pages from modules
    ...regionPages,
    ...majorCityPages, // High priority cities first
    ...regularCityPages, // Regular cities
  ];

  return allPages;
}

// Utility to generate robots.txt rules with enhanced SEO directives
export function generateRobotsRules() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '*.json', '/map-test/', '/temp/', '/private/'],
        crawlDelay: 1, // Be nice to crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 0.5, // Google can crawl faster
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

// Enhanced function to validate and optimize sitemap entries
export function validateSitemapEntry(url: string): boolean {
  try {
    new URL(url);
    return !url.includes('localhost') && !url.includes('127.0.0.1');
  } catch {
    return false;
  }
}

// Function to generate RSS feed metadata (for future implementation)
export function generateRSSMetadata() {
  return {
    title: 'K2AI - Nền tảng học tập thông minh',
    description:
      'Cập nhật mới nhất từ K2AI - 50+ module giáo dục toàn diện: Địa lý Việt Nam, AI, Digital Marketing, Financial Literacy, Green Technology, Game Development, AI Art, Cybersecurity, Biotechnology, AI & Machine Learning, Quantum Computing, Blockchain Technology, Climate Science, Data Science, Space Exploration, Programming & Robotics, STEM, Aerospace Engineering, Biomedical Engineering, Food Technology, Nanotechnology, Electric Vehicle Tech, Mental Health Tech, Digital Government, Environmental Data Science, Advanced AI, Content Creator, Vietnamese Culture, Cross-border E-commerce, và nhiều module chuyên sâu khác',
    link: baseUrl,
    language: 'vi-VN',
    managingEditor: 'info@k2aihub.com',
    webMaster: 'admin@k2aihub.com',
    lastBuildDate: new Date().toUTCString(),
    generator: 'K2AiHub Next.js',
  };
}
