import { getAllBlogPostsWithContent, getFeaturedBlogPosts, getAllCategories, getAllTags } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';
import BlogList from '@/components/blog/BlogList';
import Link from 'next/link';
import { createCategorySlug, createTagSlug } from '@/utils/slug';

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
  const pageSize = 10;

  const [allPosts, featuredPosts, categories, tags] = await Promise.all([
    getAllBlogPostsWithContent(),
    getFeaturedBlogPosts(),
    getAllCategories(),
    getAllTags(),
  ]);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / pageSize));
  const paginatedPosts = allPosts.slice(0, pageSize);

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'K2AiHub Blog',
    description: 'Blog về giáo dục, công nghệ và phân tích chuyên sâu',
    url: 'https://edu.k2aihub.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://edu.k2aihub.com/logo.png',
      },
    },
    blogPost: paginatedPosts.map((post) => ({
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://edu.k2aihub.com/blog/${post.slug}`,
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
          url: 'https://edu.k2aihub.com/logo.png',
        },
      },
    })),
  };

  return (
    <>
      <StructuredData data={blogStructuredData} />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">K2AiHub Blog</h1>
          <p className="text-xl text-gray-300">Kiến thức, phân tích và xu hướng mới nhất về Giáo dục & Công nghệ.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-white mb-6">Bài viết mới nhất</h2>
            <BlogList posts={paginatedPosts} />
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Link
                  href="/blog/page/2"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Xem thêm
                </Link>
              </div>
            )}
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Bài viết nổi bật</h3>
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </p>
                      <p className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('vi-VN')}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Chủ đề</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
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
                  {tags.map((tag) => (
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
