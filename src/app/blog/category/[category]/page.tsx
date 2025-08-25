import Link from 'next/link';
import { getBlogPostsByCategorySlug, getAllCategorySlugs } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { getCategoryFromSlug } from '@/utils/slug';
import { ArrowLeft, Clock, User, Tag, Calendar } from 'lucide-react';
import { PageProps } from '@/types';

export async function generateStaticParams() {
  const categorySlugs = await getAllCategorySlugs();
  return categorySlugs.map((categorySlug) => ({
    category: categorySlug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const categoryName = getCategoryFromSlug(category);

  return {
    title: createTitle(`${categoryName} - Blog K2AiHub`),
    description: createDescription(
      `Khám phá tất cả bài viết về ${categoryName} tại K2AiHub Blog. Kiến thức chuyên sâu và phân tích chi tiết.`
    ),
    keywords: createKeywords([
      categoryName,
      'blog K2AiHub',
      'giáo dục',
      'công nghệ',
      'phân tích'
    ])
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryName = getCategoryFromSlug(category);
  const posts = await getBlogPostsByCategorySlug(category);

  const categoryEmoji = {
    'Giáo Dục': '📚',
    'Công Nghệ': '💻',
    'Phân Tích': '📊',
    'Nghiên Cứu': '🔬',
    'Trò Chơi': '🎮',
    'Xu Hướng': '📈',
    'K2AiHub': '🎯',
    'Triển Khai': '🚀',
    'Tổng Hợp': '📝'
  }[categoryName] || '📝';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Về trang Blog
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 max-w-6xl">
        <div className="text-center">
          <div className="text-6xl mb-4">{categoryEmoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {posts.length} bài viết về {categoryName.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="container mx-auto px-4 pb-12 max-w-6xl">
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-32 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl">{categoryEmoji}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-blue-300 text-sm mb-2">
                          <Tag className="w-4 h-4" />
                          <span>{post.category}</span>
                          {post.featured && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs">
                              ⭐ Nổi bật
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-gray-400 text-xs">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readingTime}
                            </span>
                          </div>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Chưa có bài viết nào
            </h2>
            <p className="text-gray-300 mb-8">
              Hiện tại chưa có bài viết nào trong chủ đề {categoryName}.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Xem tất cả bài viết
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}