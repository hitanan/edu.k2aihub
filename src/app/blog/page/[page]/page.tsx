import { getAllBlogPostsWithContentSync, getAllCategories, getAllTags } from '@/lib/blog';
import StructuredData from '@/components/StructuredData';
import BlogList from '@/components/blog/BlogList';
import Link from 'next/link';
import { createCategorySlug, createTagSlug } from '@/utils/slug';
import { notFound } from 'next/navigation';
import { generateMetadata as generateRootMetadata } from '../../page';

export { generateRootMetadata as generateMetadata };

export function generateStaticParams() {
  const posts = getAllBlogPostsWithContentSync();
  const totalPages = Math.ceil(posts.length / 10);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

type Props = {
  params: Promise<{ page: string }>;
};

export default async function PaginatedBlogPage({ params }: Props) {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const pageSize = 10;

  const allPosts = getAllBlogPostsWithContentSync();
  const categories = getAllCategories();
  const tags = getAllTags();

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  if (currentPage > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * pageSize;
  const paginatedPosts = allPosts.slice(start, start + pageSize);

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'K2AiHub Blog',
    description: `Trang ${currentPage} của blog K2AiHub`,
    url: `https://k2aihub.com/blog/page/${currentPage}`,
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.com/logo.png',
      },
    },
  };

  return (
    <>
      <StructuredData data={blogStructuredData} />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">K2AiHub Blog</h1>
          <p className="text-xl text-gray-300">
            Trang {currentPage} / {totalPages}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            <BlogList posts={paginatedPosts} />
            <div className="mt-8 flex justify-between items-center">
              {currentPage > 1 && (
                <Link
                  href={`/blog/page/${currentPage - 1}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Trang trước
                </Link>
              )}
              <div className="flex-grow" />
              {currentPage < totalPages && (
                <Link
                  href={`/blog/page/${currentPage + 1}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Trang sau
                </Link>
              )}
            </div>
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Chủ đề</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category: { name: string; count: number }) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${createCategorySlug(category.name)}`}
                      className="bg-gray-700 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full transition-colors"
                    >
                      {category.name} <span className="text-xs opacity-75">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: { name: string; count: number }) => (
                    <Link
                      key={tag.name}
                      href={`/blog/tag/${createTagSlug(tag.name)}`}
                      className="bg-gray-700 hover:bg-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full transition-colors"
                    >
                      {tag.name} <span className="text-xs opacity-75">{tag.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
