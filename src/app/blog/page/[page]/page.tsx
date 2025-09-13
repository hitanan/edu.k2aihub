import { getAllBlogPostsWithContent, getFeaturedBlogPosts, getAllCategories } from '@/lib/blog';
import StructuredData from '@/components/StructuredData';
import BlogPageClient from '@/components/blog/BlogPageClient';
import { generateMetadata } from '../../page';

export { generateMetadata };

export async function generateStaticParams() {
  const posts = await getAllBlogPostsWithContent();
  const totalPages = Math.ceil(posts.length / 10);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function PaginatedBlogPage({ params }: { params: Promise<{ page: string }> }) {
  const currentPage = parseInt((await params).page, 10) || 1;
  const pageSize = 10;

  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllBlogPostsWithContent(),
    getFeaturedBlogPosts(),
    getAllCategories(),
  ]);

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const start = (currentPage - 1) * pageSize;
  const paginatedPosts = allPosts.slice(start, start + pageSize);

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'K2AiHub Blog',
    description: `Trang ${currentPage} của blog K2AiHub`,
    url: `https://k2aihub.github.io/blog/page/${currentPage}`,
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.github.io/logo.png',
      },
    },
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
