import Link from 'next/link';
import { Clock, User, Tag, Calendar } from 'lucide-react';
import { BlogPost, BlogCategory, BlogMetadata } from '@/types';

// Helper function to format date for display
function formatDateForDisplay(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return new Date().toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

function createCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

interface BlogPageClientProps {
  paginatedPosts: BlogPost[];
  featuredPosts: BlogMetadata[];
  categories: BlogCategory[];
  currentPage: number;
  totalPages: number;
}

export default function BlogPageClient({
  paginatedPosts,
  featuredPosts,
  categories,
  currentPage,
  totalPages,
}: BlogPageClientProps) {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Blog K2AiHub</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Khám phá các bài viết chuyên sâu về giáo dục, công nghệ, phân tích thị trường và xu hướng mới nhất.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          <div className="space-y-8">
            {paginatedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDateForDisplay(post.date)}</span>
                    <span className="mx-2">|</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">|</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-12 flex justify-center items-center space-x-2">
            {currentPage > 1 && (
              <Link
                href={currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Trang trước
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={page === 1 ? '/blog' : `/blog/page/${page}`}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Trang sau
              </Link>
            )}
          </nav>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Bài viết nổi bật</h3>
            <ul className="space-y-4">
              {featuredPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Chuyên mục</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/blog/category/${createCategorySlug(category.name)}`}
                    className="flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm bg-gray-200 dark:bg-gray-700 rounded-full px-2">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
