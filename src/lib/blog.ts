import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import { createCategorySlug, createTagSlug, getCategoryFromSlug } from '@/utils/slug';

// Types for blog posts
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
  coverImage?: string;
}

const postsDirectory = path.join(process.cwd(), 'docs');

// Get all blog post slugs
export function getBlogSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory);
  return files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''));
}

// Calculate reading time based on content length
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTimeMinutes} phút đọc`;
}

// Generate category from slug or content
function generateCategory(slug: string, content: string): string {
  const categoryMap: { [key: string]: string } = {
    education: 'Giáo Dục',
    trends: 'xu Hướng',
    analysis: 'Phân Tích',
    research: 'Nghiên Cứu',
    technology: 'Công Nghệ',
    games: 'Trò Chơi',
    vietnam: 'Việt Nam',
    market: 'Thị Trường',
    ux: 'Trải Nghiệm Người Dùng',
    deployment: 'Triển Khai',
    k2aihub: 'K2AiHub',
    guide: 'Hướng Dẫn',
    cities: 'Thành Phố',
    geography: 'Địa Lý',
  };

  // Check slug for category keywords
  for (const [key, value] of Object.entries(categoryMap)) {
    if (slug.toLowerCase().includes(key)) {
      return value;
    }
  }

  // Check content for category indicators
  const lowercaseContent = content.toLowerCase();
  for (const [key, value] of Object.entries(categoryMap)) {
    if (lowercaseContent.includes(key)) {
      return value;
    }
  }

  return 'Tổng Hợp';
}

// Generate tags from content and filename
function generateTags(slug: string, content: string): string[] {
  const tagMap: { [key: string]: string } = {
    ai: 'Trí Tuệ Nhân Tạo',
    education: 'Giáo Dục',
    vietnam: 'Việt Nam',
    technology: 'Công Nghệ',
    games: 'Trò Chơi',
    research: 'Nghiên Cứu',
    analysis: 'Phân Tích',
    trends: 'Xu Hướng',
    k2aihub: 'K2AiHub',
    development: 'Phát Triển',
    programming: 'Lập Trình',
    arduino: 'Arduino',
    robot: 'Robot',
    navigation: 'Điều Hướng',
    '3d': '3D',
    ux: 'UX/UI',
    deployment: 'Triển Khai',
    market: 'Thị Trường',
    student: 'Học Sinh',
    skills: 'Kỹ Năng',
    geography: 'Địa Lý',
    cities: 'Thành Phố',
  };

  const tags = new Set<string>();
  const combinedText = `${slug} ${content}`.toLowerCase();

  for (const [key, value] of Object.entries(tagMap)) {
    if (combinedText.includes(key)) {
      tags.add(value);
    }
  }

  return Array.from(tags).slice(0, 5); // Limit to 5 tags
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await unified().use(remarkParse).use(remarkHtml, { sanitize: false }).process(content);

    const contentHtml = processedContent.toString();

    // Generate metadata if not provided
    const title = data.title || generateTitleFromContent(content, slug);
    const description = data.description || generateDescriptionFromContent(content);
    const author = data.author || 'K2AiHub Team';
    const date = data.date || getFileCreationDate(fullPath);
    const category = data.category || generateCategory(slug, content);
    const tags = data.tags || generateTags(slug, content);
    const readingTime = data.readingTime || calculateReadingTime(content);
    const featured = data.featured || false;
    const coverImage = data.coverImage || generateCoverImage(category);

    return {
      slug,
      title,
      description,
      date: date, // Keep as ISO date
      author,
      category,
      tags,
      readingTime,
      featured,
      coverImage,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get all blog posts metadata
export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPostBySlug(slug);
      if (!post) return null;

      // Return only metadata, not full content
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...metadata } = post;
      return metadata;
    }),
  );

  return posts
    .filter((post): post is BlogMetadata => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

// Helper functions
function generateTitleFromContent(content: string, slug: string): string {
  // Try to extract title from first heading
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].replace(/[#*_`]/g, '').trim();
  }

  // Generate from slug
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateDescriptionFromContent(content: string): string {
  // Remove markdown syntax and get first paragraph
  const cleanContent = content
    .replace(/^#{1,6}\s+.*$/gm, '') // Remove headings
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/`(.+?)`/g, '$1') // Remove code
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .trim();

  const firstParagraph = cleanContent.split('\n\n')[0];
  const description = firstParagraph.slice(0, 160);

  return description.length < firstParagraph.length ? `${description}...` : description;
}

function getFileCreationDate(filePath: string): string {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateCoverImage(category: string): string {
  const imageMap: { [key: string]: string } = {
    'Giáo Dục': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    'Công Nghệ': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    'Phân Tích': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    'Nghiên Cứu': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop',
    'Trò Chơi': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop',
    'Xu Hướng': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    K2AiHub: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    'Triển Khai': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
  };

  return imageMap[category] || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop';
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories).filter((cat): cat is string => Boolean(cat));
}

// Get all unique categories (synchronous version for sitemap)
export function getAllCategoriesSync(): string[] {
  const posts = getAllBlogPostsSync();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).filter((cat): cat is string => Boolean(cat));
}

// Get all blog posts synchronously (for sitemap generation)
export function getAllBlogPostsSync(): BlogPost[] {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filenames = fs.readdirSync(docsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const fullPath = path.join(docsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontMatter, content } = matter(fileContents);

      // Generate metadata if not provided
      const title = frontMatter.title || generateTitleFromContent(content, slug);
      const description = frontMatter.description || generateDescriptionFromContent(content);
      const author = frontMatter.author || 'K2AiHub Team';
      const date = frontMatter.date || getFileCreationDate(fullPath);
      const category = frontMatter.category || generateCategory(slug, content);
      const tags = frontMatter.tags || generateTags(slug, content);
      const readingTime = frontMatter.readingTime || calculateReadingTime(content);
      const featured = frontMatter.featured || false;
      const coverImage = frontMatter.coverImage || generateCoverImage(category);

      return {
        slug,
        title,
        description,
        content,
        date: date, // Keep as ISO date
        author,
        category,
        tags,
        readingTime,
        featured,
        coverImage,
        lastModified: frontMatter.lastModified || date, // Keep as ISO date
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

// Get all category slugs for static params generation
export async function getAllCategorySlugs(): Promise<string[]> {
  const categories = await getAllCategories();
  return categories.map(createCategorySlug);
}

// Get all tag slugs for static params generation
export async function getAllTagSlugs(): Promise<string[]> {
  const tags = await getAllTags();
  return tags.map(createTagSlug);
}

// Get blog posts by category slug
export async function getBlogPostsByCategorySlug(categorySlug: string): Promise<BlogMetadata[]> {
  const category = getCategoryFromSlug(categorySlug);
  return getBlogPostsByCategory(category);
}
