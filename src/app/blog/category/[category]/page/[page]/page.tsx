import { getBlogPostsByCategorySlug, getAllCategorySlugs, getAllCategories, getAllTags } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { getCategoryFromSlug, createCategorySlug, createTagSlug } from '@/utils/slug';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogList from '@/components/blog/BlogList';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ category: string; page: string }>;
};

export function generateStaticParams(): { category: string; page: string }[] {
  const categorySlugs = getAllCategorySlugs();
  const params: { category: string; page: string }[] = [];

  for (const categorySlug of categorySlugs) {
    const posts = getBlogPostsByCategorySlug(categorySlug);
    const totalPages = Math.ceil(posts.length / 10);
    for (let i = 1; i <= totalPages; i++) {
      params.push({ category: categorySlug, page: i.toString() });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { category, page } = await params;
  if (!category) {
    return {
      title: createTitle('Chủ đề không tìm thấy'),
      description: createDescription('Chủ đề blog bạn đang tìm kiếm không tồn tại.'),
    };
  }
  const categoryName = getCategoryFromSlug(category);
  const pageNumber = parseInt(page, 10);
  const title =
    pageNumber > 1
      ? createTitle(`${categoryName} - Trang ${pageNumber} | Blog K2AiHub`)
      : createTitle(`${categoryName} - Blog K2AiHub`);

  return {
    title,
    description: createDescription(
      `Khám phá tất cả bài viết về ${categoryName} tại K2AiHub Blog. Kiến thức chuyên sâu và phân tích chi tiết.`,
    ),
    keywords: createKeywords([categoryName, 'blog K2AiHub', 'giáo dục', 'công nghệ', 'phân tích']),
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug, page } = await params;
  const currentPage = parseInt(page, 10);

  if (!categorySlug || isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const pageSize = 10;
  const categoryName = getCategoryFromSlug(categorySlug);
  const [allPosts, allCategories, allTags] = await Promise.all([
    getBlogPostsByCategorySlug(categorySlug),
    getAllCategories(),
    getAllTags(),
  ]);

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  if (currentPage > totalPages && totalPosts > 0) {
    notFound();
  }

  const paginatedPosts = allPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (paginatedPosts.length === 0 && totalPosts > 0) {
    notFound();
  }

  if (totalPosts === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-7xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Không có bài viết</h1>
        <p className="text-gray-300 mb-8">Hiện tại không có bài viết nào trong chủ đề &quot;{categoryName}&quot;.</p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại Blog
        </Link>
      </div>
    );
  }

  const categoryEmoji =
    {
      'Giáo Dục': '📚',
      'Công Nghệ': '💻',
      'Phân Tích': '📊',
      'Nghiên Cứu': '🔬',
      'Interactive Practice': '🎮',
      'Xu Hướng': '📈',
      K2AiHub: '🎯',
      'Triển Khai': '🚀',
      'Tổng Hợp': '📝',
    }[categoryName] || '📝';

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Về trang Blog
        </Link>
        <div className="text-center">
          <div className="text-6xl mb-4">{categoryEmoji}</div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">{categoryName}</h1>
          <p className="text-xl text-gray-300">
            {totalPosts} bài viết được tìm thấy - Trang {currentPage}/{totalPages}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8">
          <BlogList posts={paginatedPosts} />
          <div className="mt-8 flex justify-between items-center">
            {currentPage > 1 && (
              <Link
                href={`/blog/category/${categorySlug}/page/${currentPage - 1}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Trang trước
              </Link>
            )}
            <div className="flex-grow" />
            {currentPage < totalPages && (
              <Link
                href={`/blog/category/${categorySlug}/page/${currentPage + 1}`}
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
              <h3 className="text-xl font-bold text-white mb-4">Các chủ đề khác</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/blog/category/${createCategorySlug(cat.name)}/page/1`}
                    className={`text-sm font-medium py-1 px-3 rounded-full transition-colors ${
                      cat.name === categoryName ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {cat.name} <span className="text-xs opacity-75">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Link
                    key={tag.name}
                    href={`/blog/tag/${createTagSlug(tag.name)}/page/1`}
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
  );
}
