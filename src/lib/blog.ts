import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { createCategorySlug, createTagSlug, getCategoryFromSlug, getTagFromSlug } from '@/utils/slug';

import { blogCategories, blogTags } from '@/data/blogData';
import { BlogPost, BlogMetadata } from '@/types';
import fs from 'fs';

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
  const lowerSlug = slug.toLowerCase();
  const lowerContent = content.toLowerCase();

  // Check for exact match in slug
  const category = blogCategories.find((c) => lowerSlug.includes(c.slug));
  if (category) return category.name;

  // Check for exact match in content
  const categoryFromContent = blogCategories.find((c) => lowerContent.includes(c.slug));
  if (categoryFromContent) return categoryFromContent.name;

  return 'Tổng Hợp';
}

// Generate tags from content and filename
function generateTags(slug: string, content: string): string[] {
  const tags = new Set<string>();
  const combinedText = `${slug} ${content}`.toLowerCase();

  blogTags.forEach((tag) => {
    if (combinedText.includes(tag.slug)) {
      tags.add(tag.name);
    }
  });

  return Array.from(tags).slice(0, 5); // Limit to 5 tags
}

// Get blog post by slug
export function getBlogPostBySlugSync(originalSlug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${originalSlug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Generate metadata if not provided
    const title = data.title || generateTitleFromContent(content, originalSlug);
    const description = data.description || generateDescriptionFromContent(content);
    const author = data.author || 'K2AiHub Team';
    const date = data.date || getFileCreationDate(fullPath);
    const category = data.category || generateCategory(originalSlug, content);
    const tags = data.tags || generateTags(originalSlug, content);
    const readingTime = data.readingTime || calculateReadingTime(content);
    const featured = data.featured || false;
    const coverImage = data.coverImage || generateCoverImage(category);
    const slug = data.slug || originalSlug;

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
      content: content, // Return raw markdown content
    };
  } catch (error) {
    console.error(`Error reading blog post ${originalSlug}:`, error);
    return null;
  }
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = getBlogPostBySlugSync(slug);
  if (!post) return null;

  // Process markdown content to HTML
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return {
    ...post,
    content: contentHtml,
  };
}

// Get all blog posts with full content
export function getAllBlogPostsWithContentSync(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs.map((slug) => getBlogPostBySlugSync(slug));
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all blog posts with full content
export async function getAllBlogPostsWithContent(): Promise<BlogPost[]> {
  const posts = getAllBlogPostsWithContentSync();
  const processedPosts = await Promise.all(
    posts.map(async (post) => {
      const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(post.content);
      return {
        ...post,
        content: processedContent.toString(),
      };
    }),
  );
  return processedPosts;
}

// Get all blog posts metadata
export function getAllBlogPostsMetadata(): BlogMetadata[] {
  const posts = getAllBlogPostsSync();
  return posts.map((post) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...metadata } = post;
    return metadata;
  });
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogMetadata[] {
  const allPosts = getAllBlogPostsMetadata();
  return allPosts.filter((post) => post.featured).slice(0, 3);
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogMetadata[] {
  const allPosts = getAllBlogPostsMetadata();
  return allPosts.filter((post) => post.category === category);
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogMetadata[] {
  const allPosts = getAllBlogPostsMetadata();
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
    'Trò Chơi Giáo Dục': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop',
    'Xu Hướng': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    K2AiHub: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    'Triển Khai': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    'Tài Liệu': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop',
  };

  return imageMap[category] || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop';
}

// Get all categories with post counts
export function getAllCategories(): { name: string; count: number }[] {
  const posts = getAllBlogPostsSync();
  const categoryCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    if (post.category) {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    }
  });

  return blogCategories
    .map((category) => ({
      name: category.name,
      count: categoryCounts[category.name] || 0,
    }))
    .filter((category) => category.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Get all categories synchronously
export function getAllCategoriesSync(): { name: string; slug: string; description: string }[] {
  return blogCategories;
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

// Get all unique tags synchronously
export function getAllTagsSync(): { name: string; slug: string; description: string }[] {
  return blogTags;
}

// Get all unique tags with post counts
export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllBlogPostsSync();
  const tagCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return blogTags
    .map((tag) => ({
      name: tag.name,
      count: tagCounts[tag.name] || 0,
    }))
    .filter((tag) => tag.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Get all category slugs for static params generation
export function getAllCategorySlugs(): string[] {
  return blogCategories.map((category) => createCategorySlug(category.name));
}

// Get all tag slugs for static params generation
export function getAllTagSlugs(): string[] {
  return blogTags.map((tag) => createTagSlug(tag.name));
}

// Get blog posts by category slug
export function getBlogPostsByCategorySlug(categorySlug: string): BlogMetadata[] {
  const categoryName = getCategoryFromSlug(categorySlug);
  if (!categoryName) return [];
  return getBlogPostsByCategory(categoryName);
}

// Get blog posts by tag slug
export function getBlogPostsByTagSlug(tagSlug: string): BlogMetadata[] {
  const tagName = getTagFromSlug(tagSlug);
  if (!tagName) return [];
  return getBlogPostsByTag(tagName);
}
