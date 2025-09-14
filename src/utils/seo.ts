/**
 * Enhanced SEO Utility Functions with Social Media Integration
 * Centralizes SEO-related functionality for consistency across the application
 */

import { City, TouristAttraction, ModuleData } from '@/types';
import { SocialSeoPresets } from './socialSeo';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { BaseLessonData } from '@/types/lesson-base';

const SITE_NAME = 'K2AiHub';
const SITE_TAGLINE = 'Học tập thông minh - Công nghệ AI dẫn lối Việt Nam';

/**
 * Creates a properly formatted title with K2AiHub branding
 * @param title - The main title content
 * @param includeTagline - Whether to include the site tagline (default: false)
 * @returns Formatted title string
 */
export function createTitle(title: string, includeTagline: boolean = false): string {
  if (includeTagline) {
    return `${title} | ${SITE_TAGLINE} | ${SITE_NAME}`;
  }
  return `${title} | ${SITE_NAME}`;
}

/**
 * Creates a consistent description with K2AiHub branding
 * @param description - The main description content
 * @returns Formatted description string
 */
export function createDescription(description: string): string {
  if (description.includes(SITE_NAME)) {
    return description;
  }
  return `${description} - ${SITE_NAME}`;
}

/**
 * Creates structured data for a Course, including all its lessons.
 * This is a more specific and powerful schema than LearningResource for a whole module.
 */
export function createCourseStructuredData({
  moduleData,
  lessons,
  moduleUrl,
}: {
  moduleData: ModuleData;
  lessons: BaseLessonData[];
  moduleUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: moduleData.title,
    description: moduleData.description,
    url: moduleUrl,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: 'https://k2aihub.com',
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: `PT${moduleData.duration || '10H'}`, // ISO 8601 duration
        instructor: {
          '@type': 'Person',
          name: 'K2AiHub Team',
        },
      },
    ],
    coursePrerequisites: moduleData.prerequisites?.join(', '),
    educationalLevel: moduleData.level || 'Beginner',
    hasPart: lessons.map((lesson) => ({
      '@type': 'LearningResource',
      name: lesson.title,
      description: lesson.description,
      url: `${moduleUrl}/${lesson.id}`,
      learningResourceType: 'Lesson',
      timeRequired: `PT${lesson.duration?.match(/\d+/)?.[0] || '20'}M`,
    })),
  };
}

/**
 * Common SEO keywords for the Vietnam geography education platform
 */
export const commonKeywords = [
  'Việt Nam',
  'địa lý',
  'tỉnh thành',
  'thành phố',
  'giáo dục',
  'bản đồ tương tác',
  'ai',
  'trí tuệ nhân tạo',
  'học tập',
  'K2AI',
];

/**
 * Creates keyword string from array
 * @param additionalKeywords - Additional keywords specific to the page
 * @returns Comma-separated keyword string
 */
export function createKeywords(additionalKeywords: string[] = []): string {
  return [...commonKeywords, ...additionalKeywords].join(', ');
}

/**
 * Enhanced OpenGraph configuration with social sharing
 */
export const defaultOpenGraph = {
  type: 'website' as const,
  siteName: SITE_NAME,
  locale: 'vi_VN',
};

/**
 * Creates comprehensive metadata with social sharing for modules
 */
export function createModuleMetadata(title: string, description: string, keywords: string[] = [], moduleSlug?: string) {
  const socialMeta = SocialSeoPresets.module(title, description, keywords);
  const canonicalUrl = moduleSlug
    ? `https://k2aihub.com/learning/${moduleSlug}/`
    : `https://k2aihub.com/${moduleSlug}/`;

  return {
    ...socialMeta,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates comprehensive metadata with social sharing for games
 * @param gameId - The unique game identifier
 * @returns Complete metadata object with social sharing
 */
export function createGameMetadata(gameId: string) {
  // Extract game data from EDUCATIONAL_GAMES_DATA
  const gameData = EDUCATIONAL_GAMES_DATA.find((game) => game.id === gameId);
  if (!gameData) {
    throw new Error(`Game not found: ${gameId}`);
  }

  // Extract metadata from game data
  const title = gameData.title;
  const description = gameData.description;
  const keywords = gameData.skills;

  // Create social media metadata
  const socialMeta = SocialSeoPresets.game(title, description, keywords);

  return {
    ...socialMeta,
    alternates: {
      canonical: `https://k2aihub.com/games/${gameId}/`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates comprehensive metadata with social sharing for lessons
 */
export function createLessonMetadata(
  title: string,
  description: string,
  moduleType: string,
  lessonId: string,
  keywords: string[] = [],
) {
  // Create social media metadata
  const socialMeta = SocialSeoPresets.lesson(title, description, moduleType, keywords);

  return {
    ...socialMeta,
    alternates: {
      canonical: `https://k2aihub.com/learning/${moduleType}/${lessonId}/`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates comprehensive metadata with social sharing for articles/blog posts
 */
export function createArticleMetadata(
  title: string,
  description: string,
  author: string,
  publishedTime: string,
  tags: string[] = [],
) {
  const socialMeta = SocialSeoPresets.article(title, description, author, publishedTime, tags);

  return {
    ...socialMeta,
    authors: [{ name: author }],
    alternates: {
      canonical: `https://k2aihub.com/blog/`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates structured data for organization
 */
export function createOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: 'Học tập thông minh - Công nghệ AI dẫn lối về địa lý Việt Nam và hướng dẫn AI thực tế',
    url: 'https://k2aihub.com',
    logo: 'https://k2aihub.com/logo.png',
    sameAs: ['https://k2aihub.com'],
    areaServed: 'VN',
    inLanguage: 'vi',
  };
}

/**
 * Creates structured data for educational content
 */
export function createEducationalContentStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: title,
    description: description,
    url: url,
    inLanguage: 'vi',
    educationalLevel: 'Beginner to Advanced',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Creates structured data for a specific lesson (LearningResource)
 */
export function createLessonStructuredData(options: {
  title: string;
  description: string;
  url: string;
  duration?: string; // e.g., "90 phút"
  difficulty?: string; // e.g., "Cơ bản"
  videoUrl?: string | null;
  moduleTitle?: string;
}): Record<string, unknown> {
  const { title, description, url, duration, difficulty, videoUrl, moduleTitle } = options;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: title,
    description,
    url,
    inLanguage: 'vi',
    educationalLevel: difficulty || 'Mixed',
    isPartOf: moduleTitle
      ? {
          '@type': 'EducationalOccupationalProgram',
          name: moduleTitle,
        }
      : undefined,
  };

  if (duration) {
    // Best-effort convert minutes to ISO 8601 duration when the string contains a number
    const minutesMatch = duration.match(/(\d+)/);
    if (minutesMatch) {
      const minutes = parseInt(minutesMatch[1], 10);
      if (!Number.isNaN(minutes) && minutes > 0) {
        (data as Record<string, unknown>)['timeRequired'] = `PT${minutes}M`;
      }
    }
  }

  if (videoUrl) {
    (data as Record<string, unknown>)['video'] = {
      '@type': 'VideoObject',
      name: title,
      description,
      uploadDate: new Date().toISOString(),
      url: videoUrl,
      embedUrl: videoUrl,
    };
  }

  return data;
}

/**
 * Creates generic FAQPage structured data from Q&A array
 */
export function createFAQStructuredDataFromQA(
  faqs: Array<{ question: string; answer: string }>,
  url?: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
    ...(url ? { url } : {}),
  };
}

/**
 * Creates structured data for a game page
 */
export function createGameStructuredData(gameId: string) {
  const game = EDUCATIONAL_GAMES_DATA.find((g) => g.id === gameId);
  if (!game) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: game.title,
    applicationCategory: 'GameApplication',
    applicationSubCategory: 'EducationalGame',
    description: game.description,
    operatingSystem: 'Web',
    url: `https://k2aihub.com/games/${game.id}`,
    inLanguage: 'vi',
    genre: game.category?.join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
    },
    keywords: (game.skills || []).join(', '),
  };
}

/**
 * Creates structured data for FAQ sections
 */
export function createFAQStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Dân số của ${city.name} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Dân số của ${city.name} là ${city.population} người, xếp hạng trong top các tỉnh thành Việt Nam.`,
        },
      },
      {
        '@type': 'Question',
        name: `Diện tích của ${city.name} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Diện tích của ${city.name} là ${city.area}, thuộc vùng ${city.region}.`,
        },
      },
      {
        '@type': 'Question',
        name: `${city.name} có những địa điểm du lịch nào nổi tiếng?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            city.touristAttractions && city.touristAttractions.length > 0
              ? `${city.name} có các địa điểm du lịch nổi tiếng như: ${city.touristAttractions
                  .slice(0, 3)
                  .map((a: TouristAttraction) => a.name)
                  .join(', ')}.`
              : `${city.name} có nhiều danh lam thắng cảnh đẹp và các di tích lịch sử văn hóa quan trọng.`,
        },
      },
    ],
  };
}

/**
 * Creates breadcrumb structured data
 */
export function createBreadcrumbStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://k2aihub.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Địa lý Việt Nam',
        item: 'https://k2aihub.com/#geography',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.region,
        item: `https://k2aihub.com/#${city.region.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://k2aihub.com/city/${city.slug}`,
      },
    ],
  };
}

/**
 * Creates place structured data with enhanced geographic information
 */
export function createPlaceStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    description: city.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.y,
      longitude: city.coordinates.x,
    },
    containedInPlace: {
      '@type': 'Country',
      name: 'Việt Nam',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Dân số',
        value: city.population,
      },
      {
        '@type': 'PropertyValue',
        name: 'Diện tích',
        value: city.area,
      },
      {
        '@type': 'PropertyValue',
        name: 'Vùng miền',
        value: city.region,
      },
      {
        '@type': 'PropertyValue',
        name: 'Mã tỉnh',
        value: city.code,
      },
    ],
    touristAttraction:
      city.touristAttractions?.map((attraction: TouristAttraction) => ({
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.imageUrl,
        containedInPlace: {
          '@type': 'Place',
          name: city.name,
        },
      })) || [],
  };
}

export { SITE_NAME, SITE_TAGLINE };
