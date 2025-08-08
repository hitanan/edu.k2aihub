import { MetadataRoute } from 'next';
import citiesData from '@/data/cities';
import { pythonLessons } from '@/data/python';
import { arduinoLessons } from '@/data/arduino';
import { roboticsLessons } from '@/data/robotics';
import { scratchLessons } from '@/data/scratch';
import { stemLessons } from '@/data/stem';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { greenTechLessons } from '@/data/green-technology';
import { financialLiteracyLessons } from '@/data/financial-literacy';
import { gameDevLessons } from '@/data/game-development';
import { aiArtLessons } from '@/data/ai-art-creative-tech';
import { biotechnologyLessons } from '@/data/biotechnology';

// Import NEW MODULES (Recently Created)
import { AIMLLessons } from '@/data/ai-machine-learning';
import { QuantumLessons } from '@/data/quantum-computing';
import { BlockchainLessons } from '@/data/blockchain-technology';
import { ClimateLessons } from '@/data/climate-science';
import { CybersecurityLessons } from '@/data/cybersecurity';
import { DataScienceLessons } from '@/data/data-science';
import { SpaceLessons } from '@/data/space-exploration';
import { ProgrammingRoboticsLessons } from '@/data/programming-robotics';

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
    // All Learning Modules now under /learning/ path
    {
      url: `${baseUrl}/learning/python`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/arduino`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/robotics`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/scratch`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/stem`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/digital-marketing`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/green-technology`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/financial-literacy`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/game-development`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/ai-art-creative-tech`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/cybersecurity`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/biotechnology`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    // Recently created learning modules
    {
      url: `${baseUrl}/learning/ai-machine-learning`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/quantum-computing`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/blockchain-technology`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/climate-science`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/data-science`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/space-exploration`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/learning/programming-robotics`,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
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

  // Python lesson pages - using actual data from python.ts
  const pythonPages = pythonLessons.map((lesson) => ({
    url: `${baseUrl}/learning/python/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Arduino lesson pages - include all lessons from data and additional manual pages
  const additionalArduinoPages = [
    'arduino-basics', // Manually added page
  ];

  const arduinoPages = [
    ...arduinoLessons.map((lesson) => ({
      url: `${baseUrl}/learning/arduino/${lesson.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...additionalArduinoPages.map((pageId) => ({
      url: `${baseUrl}/learning/arduino/${pageId}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Robotics lesson pages
  const roboticsPages = roboticsLessons.map((lesson) => ({
    url: `${baseUrl}/learning/robotics/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Scratch lesson pages
  const scratchPages = scratchLessons.map((lesson) => ({
    url: `${baseUrl}/learning/scratch/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // STEM lesson pages
  const stemPages = stemLessons.map((lesson) => ({
    url: `${baseUrl}/learning/stem/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Digital Marketing lesson pages
  const digitalMarketingPages = digitalMarketingLessons.map((lesson) => ({
    url: `${baseUrl}/learning/digital-marketing/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Green Technology lesson pages
  const greenTechPages = greenTechLessons.map((lesson) => ({
    url: `${baseUrl}/learning/green-technology/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Financial Literacy lesson pages
  const finLitPages = financialLiteracyLessons.map((lesson) => ({
    url: `${baseUrl}/learning/financial-literacy/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Game Development lesson pages
  const gameDevPages = gameDevLessons.map((lesson) => ({
    url: `${baseUrl}/learning/game-development/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // AI Art lesson pages
  const aiArtPages = aiArtLessons.map((lesson) => ({
    url: `${baseUrl}/learning/ai-art-creative-tech/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Cybersecurity lesson pages
  const cyberSecurityPages = CybersecurityLessons.map((lesson) => ({
    url: `${baseUrl}/learning/cybersecurity/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Biotechnology lesson pages
  const biotechnologyPages = biotechnologyLessons.map((lesson) => ({
    url: `${baseUrl}/learning/biotechnology/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Recently created lesson pages
  const aiMachineLearningPages = AIMLLessons.map((lesson) => ({
    url: `${baseUrl}/learning/ai-machine-learning/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const quantumComputingPages = QuantumLessons.map((lesson) => ({
    url: `${baseUrl}/learning/quantum-computing/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blockchainTechnologyPages = BlockchainLessons.map((lesson) => ({
    url: `${baseUrl}/learning/blockchain-technology/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const climateSciencePages = ClimateLessons.map((lesson) => ({
    url: `${baseUrl}/learning/climate-science/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const dataSciencePages = DataScienceLessons.map((lesson) => ({
    url: `${baseUrl}/learning/data-science/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const spaceExplorationPages = SpaceLessons.map((lesson) => ({
    url: `${baseUrl}/learning/space-exploration/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const programmingRoboticsPages = ProgrammingRoboticsLessons.map((lesson) => ({
    url: `${baseUrl}/learning/programming-robotics/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
    .filter(
      (city) =>
        ![
          'ha-noi',
          'ho-chi-minh',
          'da-nang',
          'hai-phong',
          'can-tho',
          'hue',
        ].includes(city.slug),
    )
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Add specific high-value city pages with higher priority
  const majorCityPages = citiesData
    .filter((city) =>
      [
        'ha-noi',
        'ho-chi-minh',
        'da-nang',
        'hai-phong',
        'can-tho',
        'hue',
      ].includes(city.slug),
    )
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Higher priority for major cities
    }));

  // Combine all pages with proper prioritization
  const allPages = [
    ...corePages.map((page) => ({ ...page, lastModified })),
    ...aiPages,
    ...pythonPages,
    ...arduinoPages,
    ...roboticsPages,
    ...scratchPages,
    ...stemPages,
    ...digitalMarketingPages,
    ...greenTechPages,
    ...finLitPages,
    ...gameDevPages,
    ...aiArtPages,
    ...cyberSecurityPages,
    ...biotechnologyPages,
    // Recently created learning modules
    ...aiMachineLearningPages,
    ...quantumComputingPages,
    ...blockchainTechnologyPages,
    ...climateSciencePages,
    ...dataSciencePages,
    ...spaceExplorationPages,
    ...programmingRoboticsPages,
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
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/map-test/',
          '/temp/',
          '/private/',
        ],
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
      'Cập nhật mới nhất từ K2AI - 15+ module giáo dục: Địa lý Việt Nam, AI, Digital Marketing, Financial Literacy, Green Technology, Game Development, AI Art, Cybersecurity, Biotechnology, AI & Machine Learning, Quantum Computing, Blockchain Technology, Climate Science, Data Science, Space Exploration, Programming & Robotics, STEM, và nhiều hơn nữa',
    link: baseUrl,
    language: 'vi-VN',
    managingEditor: 'info@k2aihub.com',
    webMaster: 'admin@k2aihub.com',
    lastBuildDate: new Date().toUTCString(),
    generator: 'K2AiHub Next.js',
  };
}
