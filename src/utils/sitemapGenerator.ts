import { MetadataRoute } from 'next';
import { getAllBlogPostsSync, getAllCategoriesSync, getAllTagsSync } from '@/lib/blog';
import { createCategorySlug, createTagSlug } from '@/utils/slug';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { BaseLessonData } from '@/types/lesson-base';
import { getAllModules } from '@/data/module.registry';
import { regions } from '@/data/regions';
import { citiesData } from '@/data/cities';
import { City, Region, BlogCategory, BlogTag } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://k2aihub.com';

export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const allModules = getAllModules();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/city`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/region`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/feedback`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${baseUrl}/learning`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/games`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/blog`, priority: 0.9, changeFrequency: 'daily' },
  ];

  const modulePages: MetadataRoute.Sitemap = allModules.map((moduleData) => ({
    url: `${baseUrl}/learning/${moduleData.id}`,
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified,
  }));

  const lessonPages: MetadataRoute.Sitemap = allModules.flatMap(
    (moduleData) =>
      moduleData.lessons?.map((lesson: BaseLessonData) => ({
        url: `${baseUrl}/learning/${moduleData.id}/${lesson.id}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })) || [],
  );

  const gamePages: MetadataRoute.Sitemap = EDUCATIONAL_GAMES_DATA.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified,
  }));

  const aiCategoryPages: MetadataRoute.Sitemap = [
    'office-work',
    'creative-design',
    'education-learning',
    'business-marketing',
    'daily-life',
    'programming-dev',
    'ai-apps',
  ].map((category) => ({
    url: `${baseUrl}/ai/${category}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const regionPages: MetadataRoute.Sitemap = regions.map((region: Region) => ({
    url: `${baseUrl}/region/${region.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = citiesData.map((city: City) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: ['ha-noi', 'ho-chi-minh', 'da-nang', 'hai-phong', 'can-tho', 'hue'].includes(city.slug) ? 0.9 : 0.8,
  }));

  const blogPosts = getAllBlogPostsSync();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postsPerPage = 10;

  const blogCategoryPages: MetadataRoute.Sitemap = getAllCategoriesSync().flatMap((category: BlogCategory) => {
    const categorySlug = createCategorySlug(category.name);
    const postsInCategory = blogPosts.filter((post) => post.category === category.name);
    const numPages = Math.ceil(postsInCategory.length / postsPerPage);
    const pages = Array.from({ length: numPages }, (_, i) => ({
      url: `${baseUrl}/blog/category/${categorySlug}/page/${i + 1}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
    pages.push({
      url: `${baseUrl}/blog/category/${categorySlug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    });
    return pages;
  });

  const blogTagPages: MetadataRoute.Sitemap = getAllTagsSync().flatMap((tag: BlogTag) => {
    const tagSlug = createTagSlug(tag.name);
    const postsWithTag = blogPosts.filter((post) => post.tags?.includes(tag.name));
    const numPages = Math.ceil(postsWithTag.length / postsPerPage);
    const pages = Array.from({ length: numPages }, (_, i) => ({
      url: `${baseUrl}/blog/tag/${tagSlug}/page/${i + 1}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
    pages.push({
      url: `${baseUrl}/blog/tag/${tagSlug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    });
    return pages;
  });

  return [
    ...corePages,
    ...modulePages,
    ...lessonPages,
    ...gamePages,
    ...aiCategoryPages,
    ...regionPages,
    ...cityPages,
    ...blogPages,
    ...blogCategoryPages,
    ...blogTagPages,
  ];
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
