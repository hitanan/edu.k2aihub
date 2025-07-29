/**
 * SEO Utility Functions
 * Centralizes SEO-related functionality for consistency across the application
 */

import { City, TouristAttraction } from '@/types';

const SITE_NAME = 'K2AiHub';
const SITE_TAGLINE = 'Học tập thông minh – Công nghệ AI dẫn lối Việt Nam';

/**
 * Creates a properly formatted title with K2AiHub branding
 * @param title - The main title content
 * @param includeTagline - Whether to include the site tagline (default: false)
 * @returns Formatted title string
 */
export function createTitle(
  title: string,
  includeTagline: boolean = false
): string {
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
  'K2AiHub'
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
 * Default OpenGraph configuration
 */
export const defaultOpenGraph = {
  type: 'website' as const,
  siteName: SITE_NAME,
  locale: 'vi_VN'
};

/**
 * Creates structured data for organization
 */
export function createOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description:
      'Học tập thông minh – Công nghệ AI dẫn lối về địa lý Việt Nam và hướng dẫn AI thực tế',
    url: 'https://k2aihub.com',
    logo: 'https://k2aihub.com/logo.png',
    sameAs: ['https://k2aihub.com'],
    areaServed: 'VN',
    inLanguage: 'vi'
  };
}

/**
 * Creates structured data for educational content
 */
export function createEducationalContentStructuredData(
  title: string,
  description: string,
  url: string
) {
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
      educationalRole: 'student'
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME
    }
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
          text: `Dân số của ${city.name} là ${city.population} người, xếp hạng trong top các tỉnh thành Việt Nam.`
        }
      },
      {
        '@type': 'Question',
        name: `Diện tích của ${city.name} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Diện tích của ${city.name} là ${city.area}, thuộc vùng ${city.region}.`
        }
      },
      {
        '@type': 'Question',
        name: `${city.name} có những địa điểm du lịch nào nổi tiếng?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            city.touristAttractions && city.touristAttractions.length > 0
              ? `${
                  city.name
                } có các địa điểm du lịch nổi tiếng như: ${city.touristAttractions
                  .slice(0, 3)
                  .map((a: TouristAttraction) => a.name)
                  .join(', ')}.`
              : `${city.name} có nhiều danh lam thắng cảnh đẹp và các di tích lịch sử văn hóa quan trọng.`
        }
      }
    ]
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
        item: 'https://k2aihub.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Địa lý Việt Nam',
        item: 'https://k2aihub.com/#geography'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.region,
        item: `https://k2aihub.com/#${city.region
          .toLowerCase()
          .replace(/\s+/g, '-')}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://k2aihub.com/city/${city.slug}`
      }
    ]
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
      longitude: city.coordinates.x
    },
    containedInPlace: {
      '@type': 'Country',
      name: 'Việt Nam'
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Dân số',
        value: city.population
      },
      {
        '@type': 'PropertyValue',
        name: 'Diện tích',
        value: city.area
      },
      {
        '@type': 'PropertyValue',
        name: 'Vùng miền',
        value: city.region
      },
      {
        '@type': 'PropertyValue',
        name: 'Mã tỉnh',
        value: city.code
      }
    ],
    touristAttraction:
      city.touristAttractions?.map((attraction: TouristAttraction) => ({
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.imageUrl,
        containedInPlace: {
          '@type': 'Place',
          name: city.name
        }
      })) || []
  };
}

export { SITE_NAME, SITE_TAGLINE };
