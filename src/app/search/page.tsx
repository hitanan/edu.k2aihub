import { Metadata } from 'next';
import SearchPageClient from './SearchPageClient';
import { getAllBlogPostsMetadata } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Tìm Kiếm - Khám Phá Nội Dung Giáo Dục'),
  description: createDescription(
    'Tìm kiếm và khám phá các module học tập, trò chơi giáo dục, và bài viết hướng dẫn trên K2AiHub. Công cụ tìm kiếm thông minh hỗ trợ tiếng Việt.',
  ),
  keywords: createKeywords(['tìm kiếm', 'search', 'học tập', 'giáo dục', 'trò chơi giáo dục', 'hướng dẫn', 'K2AI']),
  openGraph: {
    title: 'Tìm Kiếm - K2AI Nền tảng học tập thông minh',
    description: 'Tìm kiếm và khám phá các module học tập, trò chơi giáo dục, và bài viết hướng dẫn trên K2AiHub.',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary',
    title: 'Tìm Kiếm - K2AI Nền tảng học tập thông minh',
    description: 'Tìm kiếm và khám phá các module học tập, trò chơi giáo dục, và bài viết hướng dẫn trên K2AiHub.',
  },
};

export default async function SearchPage() {
  // Fetch blog posts on server side to avoid fs import issues in client
  const blogPosts = await getAllBlogPostsMetadata();

  return <SearchPageClient blogPosts={blogPosts} />;
}
