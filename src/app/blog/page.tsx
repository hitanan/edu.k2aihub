import { getAllBlogPostsWithContent, getFeaturedBlogPosts, getAllCategories } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';
import BlogPageClient from '@/components/blog/BlogPageClient';

export async function generateMetadata() {
  return {
    title: createTitle('Blog - Kiến thức & Tin tức Giáo dục'),
    description: createDescription(
      'Khám phá các bài viết chuyên sâu về giáo dục, công nghệ, phân tích thị trường và xu hướng mới nhất trong lĩnh vực học tập thông minh tại K2AiHub.',
    ),
    keywords: createKeywords([
      'blog giáo dục',
      'tin tức công nghệ',
      'phân tích thị trường',
      'xu hướng giáo dục',
      'K2AiHub blog',
      'học tập thông minh',
      'giáo dục Việt Nam',
    ]),
    openGraph: {
      title: 'Blog K2AiHub - Kiến thức & Tin tức Giáo dục',
      description: 'Khám phá kiến thức chuyên sâu về giáo dục và công nghệ',
      type: 'website',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
          width: 1200,
          height: 600,
          alt: 'K2AiHub Blog',
        },
      ],
    },
  };
}

export default async function BlogPage() {
  const currentPage = 1;
  const pageSize = 10;

  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllBlogPostsWithContent(),
    getFeaturedBlogPosts(),
    getAllCategories(),
  ]);

  const totalPosts = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
  const start = (currentPage - 1) * pageSize;
  const paginatedPosts = allPosts.slice(start, start + pageSize);

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'K2AiHub Blog',
    description: 'Blog về giáo dục, công nghệ và phân tích chuyên sâu',
    url: 'https://k2aihub.github.io/blog',
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.github.io/logo.png',
      },
    },
    blogPost: paginatedPosts.map((post) => ({
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://k2aihub.github.io/blog/${post.slug}`,
      },
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'K2AiHub',
        logo: {
          '@type': 'ImageObject',
          url: 'https://k2aihub.github.io/logo.png',
        },
      },
    })),
  };

  return (
    <>
      <StructuredData data={blogStructuredData} />
      <BlogPageClient
        paginatedPosts={paginatedPosts}
        featuredPosts={featuredPosts}
        categories={categories}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}
