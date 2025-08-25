import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogSlugs, getAllBlogPosts } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';
import ShareButton from '@/components/ShareButton';
import { ArrowLeft, Clock, User, Tag, Calendar } from 'lucide-react';
import { PageProps } from '@/types';

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

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: createTitle('Bài viết không tìm thấy'),
      description: createDescription('Bài viết bạn đang tìm kiếm không tồn tại.')
    };
  }

  return {
    title: createTitle(post.title),
    description: createDescription(post.description),
    keywords: createKeywords([
      ...post.tags || [],
      post.category || '',
      'K2AiHub blog',
      'giáo dục',
      'công nghệ'
    ]),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author || 'K2AiHub Team'],
      tags: post.tags,
      images: [
        {
          url: post.coverImage || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
          width: 1200,
          height: 600,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getAllBlogPosts()
  ]);

  if (!post) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'K2AiHub Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.github.io/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://k2aihub.github.io/blog/${slug}`
    },
    articleSection: post.category,
    keywords: post.tags?.join(', '),
    wordCount: post.content.split(' ').length
  };

  const shareUrl = `https://k2aihub.github.io/blog/${slug}`;
  const shareTitle = `${post.title} - K2AiHub Blog`;

  return (
    <>
      <StructuredData data={articleStructuredData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Về trang Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="text-center">
              {/* Category and Featured Badge */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {post.category}
                </span>
                {post.featured && (
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    ⭐ Nổi bật
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {post.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDateForDisplay(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share Button */}
              <div className="mt-8">
                <ShareButton
                  url={shareUrl}
                  title={shareTitle}
                  description={post.description}
                />
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                  prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                  prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:bg-gray-800/50 prose-code:text-blue-300 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/10 
                  prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:text-blue-200
                  prose-ul:text-gray-300 prose-ol:text-gray-300
                  prose-li:mb-2 prose-li:leading-relaxed
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                  prose-table:text-gray-300 prose-th:bg-gray-800/50 prose-th:text-white prose-th:font-semibold
                  prose-td:border-gray-700 prose-th:border-gray-700
                  prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">
                📚 Bài viết liên quan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/15 group">
                      <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
                        <Tag className="w-4 h-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center justify-between text-gray-400 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readingTime}
                        </span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Xem tất cả bài viết
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}