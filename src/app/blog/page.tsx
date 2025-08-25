import Link from 'next/link';
import { getAllBlogPosts, getFeaturedBlogPosts, getAllCategories } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { createCategorySlug } from '@/utils/slug';
import StructuredData from '@/components/StructuredData';
import { Clock, User, Tag, Calendar } from 'lucide-react';

// Helper function to format date for display
function formatDateForDisplay(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return new Date().toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

export async function generateMetadata() {
  return {
    title: createTitle('Blog - Kiến thức & Tin tức Giáo dục'),
    description: createDescription(
      'Khám phá các bài viết chuyên sâu về giáo dục, công nghệ, phân tích thị trường và xu hướng mới nhất trong lĩnh vực học tập thông minh tại K2AiHub.'
    ),
    keywords: createKeywords([
      'blog giáo dục',
      'tin tức công nghệ',
      'phân tích thị trường',
      'xu hướng giáo dục',
      'K2AiHub blog',
      'học tập thông minh',
      'giáo dục Việt Nam'
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
          alt: 'K2AiHub Blog'
        }
      ]
    }
  };
}

export default async function BlogPage() {
  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedBlogPosts(),
    getAllCategories()
  ]);

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
        url: 'https://k2aihub.github.io/logo.png'
      }
    },
    blogPost: allPosts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://k2aihub.github.io/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Person',
        name: post.author || 'K2AiHub Team'
      }
    }))
  };

  return (
    <>
      <StructuredData data={blogStructuredData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                📝 Blog K2AiHub
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Kiến thức chuyên sâu về giáo dục, công nghệ và phân tích xu hướng mới nhất
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
                <span className="flex items-center">
                  📚 {allPosts.length} bài viết
                </span>
                <span className="flex items-center">
                  🏷️ {categories.length} chủ đề
                </span>
                <span className="flex items-center">
                  ⭐ {featuredPosts.length} bài nổi bật
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                ⭐ Bài viết nổi bật
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white text-6xl">
                            {post.category === 'Giáo Dục' ? '📚' :
                             post.category === 'Công Nghệ' ? '💻' :
                             post.category === 'Phân Tích' ? '📊' :
                             post.category === 'Nghiên Cứu' ? '🔬' : '📝'}
                          </span>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-blue-300 text-sm mb-2">
                            <Tag className="w-4 h-4" />
                            <span>{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
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
                              {formatDateForDisplay(post.date)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  📚 Tất cả bài viết
                </h2>
                <div className="space-y-6">
                  {allPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-32 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-2xl">
                                {post.category === 'Giáo Dục' ? '📚' :
                                 post.category === 'Công Nghệ' ? '💻' :
                                 post.category === 'Phân Tích' ? '📊' :
                                 post.category === 'Nghiên Cứu' ? '🔬' : '📝'}
                              </span>
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
                                  {formatDateForDisplay(post.date)}
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
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    🏷️ Chủ đề
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog/category/${createCategorySlug(category)}`}
                        className="block text-gray-300 hover:text-blue-300 transition-colors text-sm"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    📖 Về Blog
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Blog K2AiHub chia sẻ những nghiên cứu, phân tích và xu hướng mới nhất 
                    trong lĩnh vực giáo dục thông minh và công nghệ học tập.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}