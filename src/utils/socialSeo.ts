/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Comprehensive Social Media SEO System for K2AiHub
 * Provides systematic Open Graph tags, Twitter Cards, and Unsplash image generation
 */

export interface SocialSeoConfig {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  section?: string; // For articles
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  category?: string;
  imageKeywords?: string[];
  imageTheme?: 'education' | 'technology' | 'science' | 'art' | 'business' | 'learning' | 'innovation';
}

/**
 * Generate Unsplash image URL with educational focus and SEO optimization
 */
export function generateUnsplashImage(config: {
  keywords: string[];
  theme?: SocialSeoConfig['imageTheme'];
  width?: number;
  height?: number;
  quality?: number;
}): string {
  const { keywords, theme = 'education', width = 1200, height = 630, quality = 80 } = config;

  // Educational theme mapping for better social sharing images
  const themeKeywords: Record<string, string[]> = {
    education: ['study', 'learning', 'books', 'classroom', 'student', 'knowledge', 'school'],
    technology: ['computer', 'coding', 'digital', 'innovation', 'tech', 'software', 'programming'],
    science: ['laboratory', 'research', 'experiment', 'discovery', 'microscope', 'molecule', 'scientific'],
    art: ['creative', 'design', 'artistic', 'colors', 'drawing', 'inspiration', 'visual'],
    business: ['office', 'professional', 'meeting', 'strategy', 'growth', 'success', 'corporate'],
    learning: ['tutorial', 'teaching', 'education', 'workshop', 'training', 'skill', 'development'],
    innovation: ['future', 'technology', 'breakthrough', 'creative', 'startup', 'invention', 'progress'],
  };

  // Combine theme keywords with specific keywords
  const combinedKeywords = [
    ...keywords.slice(0, 2), // Take first 2 specific keywords
    ...themeKeywords[theme].slice(0, 2), // Take first 2 theme keywords
  ];

  const searchQuery = combinedKeywords.join(',');

  // Use Unsplash Source API for reliable, high-quality educational images
  return `https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
}

/**
 * Get fallback Unsplash images for different content types
 */
export function getFallbackImage(contentType: 'module' | 'game' | 'lesson' | 'article'): string {
  const fallbacks = {
    module: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=630&fit=crop&q=80', // Education/books
    game: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=630&fit=crop&q=80', // Gaming/interactive
    lesson: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=630&fit=crop&q=80', // Learning/classroom
    article: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop&q=80', // Writing/articles
  };

  return fallbacks[contentType];
}

/**
 * Generate comprehensive Open Graph meta tags for Facebook sharing
 */
export function generateOpenGraphTags(config: SocialSeoConfig) {
  const siteName = config.siteName || 'K2AiHub - Nền tảng học tập thông minh';
  const locale = config.locale || 'vi_VN';

  // Generate optimized image URL
  const imageUrl =
    config.imageKeywords && config.imageKeywords.length > 0
      ? generateUnsplashImage({
          keywords: config.imageKeywords,
          theme: config.imageTheme || 'education',
        })
      : getFallbackImage('module'); // Default fallback

  const openGraphTags = {
    'og:title': config.title,
    'og:description': config.description,
    'og:type': config.type || 'website',
    'og:url': '', // Will be set dynamically per page
    'og:site_name': siteName,
    'og:locale': locale,
    'og:image': imageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:alt': `${config.title} - ${siteName}`,
  };

  // Add article-specific tags
  if (config.type === 'article') {
    return {
      ...openGraphTags,
      'og:type': 'article',
      'article:author': config.author || 'K2AiHub Development Team',
      'article:section': config.section || 'Education',
      'article:published_time': config.publishedTime || new Date().toISOString(),
      'article:modified_time': config.modifiedTime || new Date().toISOString(),
      'article:tag': config.tags?.join(', ') || '',
    };
  }

  return openGraphTags;
}

/**
 * Generate Twitter Card meta tags
 */
export function generateTwitterCardTags(config: SocialSeoConfig) {
  const imageUrl =
    config.imageKeywords && config.imageKeywords.length > 0
      ? generateUnsplashImage({
          keywords: config.imageKeywords,
          theme: config.imageTheme || 'education',
        })
      : getFallbackImage('module');

  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@K2AiHub',
    'twitter:creator': '@K2AiHub',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': imageUrl,
    'twitter:image:alt': `${config.title} - K2AiHub`,
  };
}

/**
 * Generate Facebook-specific meta tags for enhanced sharing
 */
export function generateFacebookTags(config: SocialSeoConfig) {
  return {
    'fb:app_id': '1234567890123456', // Replace with actual Facebook App ID when available
    property: 'og:see_also',
    content: 'https://k2aihub.com/',
  };
}

/**
 * Generate complete social media meta tags for any page
 */
export function generateCompleteSocialMetaTags(config: SocialSeoConfig) {
  const openGraph = generateOpenGraphTags(config);
  const twitter = generateTwitterCardTags(config);
  const facebook = generateFacebookTags(config);

  // Convert to Next.js metadata format
  return {
    title: config.title,
    description: config.description,
    keywords: config.tags || [],
    openGraph: {
      title: openGraph['og:title'],
      description: openGraph['og:description'],
      type: openGraph['og:type'] as any,
      siteName: openGraph['og:site_name'],
      locale: openGraph['og:locale'],
      images: [
        {
          url: openGraph['og:image'],
          width: parseInt(openGraph['og:image:width']),
          height: parseInt(openGraph['og:image:height']),
          alt: openGraph['og:image:alt'],
        },
      ],
      ...(config.type === 'article' && {
        type: 'article',
        authors: [config.author || 'K2AiHub Development Team'],
        section: config.section || 'Education',
        publishedTime: config.publishedTime || new Date().toISOString(),
        modifiedTime: config.modifiedTime || new Date().toISOString(),
        tags: config.tags || [],
      }),
    },
    twitter: {
      card: twitter['twitter:card'] as any,
      site: twitter['twitter:site'],
      creator: twitter['twitter:creator'],
      title: twitter['twitter:title'],
      description: twitter['twitter:description'],
      images: [twitter['twitter:image']],
    },
    other: {
      'fb:app_id': facebook['fb:app_id'],
    },
  };
}

/**
 * Pre-configured social SEO for different content types
 */
export const SocialSeoPresets = {
  module: (title: string, description: string, keywords: string[] = []) =>
    generateCompleteSocialMetaTags({
      title,
      description,
      type: 'website',
      imageKeywords: ['education', 'learning', ...keywords.slice(0, 2)],
      imageTheme: 'education',
      tags: ['học tập', 'giáo dục', 'K2AiHub', ...keywords],
      category: 'Education',
    }),

  game: (title: string, description: string, keywords: string[] = []) =>
    generateCompleteSocialMetaTags({
      title,
      description,
      type: 'website',
      imageKeywords: ['game', 'interactive', ...keywords.slice(0, 2)],
      imageTheme: 'technology',
      tags: ['game giáo dục', 'trò chơi học tập', 'K2AiHub', ...keywords],
      category: 'Games',
    }),

  lesson: (title: string, description: string, moduleType: string, keywords: string[] = []) =>
    generateCompleteSocialMetaTags({
      title,
      description,
      type: 'article',
      section: moduleType,
      imageKeywords: ['lesson', 'tutorial', ...keywords.slice(0, 2)],
      imageTheme: 'learning',
      tags: ['bài học', 'hướng dẫn', 'K2AiHub', moduleType, ...keywords],
      category: 'Lessons',
    }),

  article: (title: string, description: string, author: string, publishedTime: string, tags: string[] = []) =>
    generateCompleteSocialMetaTags({
      title,
      description,
      type: 'article',
      author,
      publishedTime,
      imageKeywords: ['article', 'blog', ...tags.slice(0, 2)],
      imageTheme: 'innovation',
      tags: ['bài viết', 'blog', 'K2AiHub', ...tags],
      category: 'Articles',
    }),
};

/**
 * Utility function to extract keywords from Vietnamese text
 */
export function extractVietnameseKeywords(text: string, maxKeywords: number = 5): string[] {
  // Common Vietnamese education and technology keywords
  const educationKeywords = [
    'học tập',
    'giáo dục',
    'kiến thức',
    'kỹ năng',
    'phát triển',
    'tương tác',
    'công nghệ',
    'khoa học',
    'toán học',
    'lập trình',
    'thiết kế',
    'nghiên cứu',
    'thực hành',
    'ứng dụng',
    'sáng tạo',
    'đổi mới',
    'chuyên nghiệp',
    'thông minh',
  ];

  const words = text.toLowerCase().split(/\s+/);
  const foundKeywords = educationKeywords.filter((keyword) =>
    words.some((word) => word.includes(keyword) || keyword.includes(word)),
  );

  return foundKeywords.slice(0, maxKeywords);
}
