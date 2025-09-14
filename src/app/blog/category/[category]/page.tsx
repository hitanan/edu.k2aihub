import { getBlogPostsByCategorySlug, getAllCategorySlugs, getAllCategories, getAllTags } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { getCategoryFromSlug, createCategorySlug, createTagSlug } from '@/utils/slug';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogList from '@/components/blog/BlogList';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categorySlugs = await getAllCategorySlugs();
  return categorySlugs.map((categorySlug) => ({
    category: categorySlug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  if (!category) {
    return {
      title: createTitle('Chủ đề không tìm thấy'),
      description: createDescription('Chủ đề blog bạn đang tìm kiếm không tồn tại.'),
    };
  }
  const categoryName = getCategoryFromSlug(category);

  return {
    title: createTitle(`${categoryName} - Blog K2AiHub`),
    description: createDescription(
      `Khám phá tất cả bài viết về ${categoryName} tại K2AiHub Blog. Kiến thức chuyên sâu và phân tích chi tiết.`,
    ),
    keywords: createKeywords([categoryName, 'blog K2AiHub', 'giáo dục', 'công nghệ', 'phân tích']),
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;

  if (!categorySlug) {
    notFound();
  }

  const categoryName = getCategoryFromSlug(categorySlug);
  const [posts, allCategories, allTags] = await Promise.all([
    getBlogPostsByCategorySlug(categorySlug),
    getAllCategories(),
    getAllTags(),
  ]);

  const categoryEmoji =
    {
      'Giáo Dục': '📚',
      'Công Nghệ': '💻',
      'Phân Tích': '📊',
      'Nghiên Cứu': '🔬',
      'Trò Chơi': '🎮',
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
          <p className="text-xl text-gray-300">{posts.length} bài viết được tìm thấy</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8">
          <BlogList posts={posts} />
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Các chủ đề khác</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/blog/category/${createCategorySlug(cat.name)}`}
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
  );
}
