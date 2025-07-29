import { MetadataRoute } from 'next';
import citiesData from '@/data/cities';

// Utility to automatically generate sitemap entries for all pages
const baseUrl = 'https://k2aihub.com';
export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core application pages
  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    {
      url: `${baseUrl}/city`,
      priority: 0.9,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/region`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' as const },
    {
      url: `${baseUrl}/feedback`,
      priority: 0.5,
      changeFrequency: 'monthly' as const
    }
  ];

  // AI module pages
  const aiCategories = [
    'office-work',
    'creative-design',
    'education-learning',
    'business-marketing',
    'daily-life',
    'programming-dev'
  ];

  const aiPages = aiCategories.map((category) => ({
    url: `${baseUrl}/ai/${category}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

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
    'dong-bang-song-cuu-long'
  ];

  const regionPages = regionSlugs.map((slug) => ({
    url: `${baseUrl}/region/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // City pages - automatically generated from cities data
  const cityPages = citiesData.map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  // Combine all pages
  const allPages = [
    ...corePages.map((page) => ({ ...page, lastModified })),
    ...aiPages,
    ...regionPages,
    ...cityPages
  ];

  return allPages;
}

// Utility to generate robots.txt rules
export function generateRobotsRules() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '*.json', '/map-test/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
