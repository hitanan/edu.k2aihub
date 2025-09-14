import Link from 'next/link';
import { getBlogPostsByTagSlug, getAllTagSlugs } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { getTagFromSlug } from '@/utils/slug';
import { ArrowLeft, Clock, User, Tag as TagIcon, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tagSlugs = await getAllTagSlugs();
  return tagSlugs.map((tagSlug) => ({
    tag: tagSlug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  if (!tag) {
    return {
      title: createTitle('Thẻ không tìm thấy'),
      description: createDescription('Thẻ blog bạn đang tìm kiếm không tồn tồn tại.'),
    };
  }
  const tagName = getTagFromSlug(tag);

  return {
    title: createTitle(`Bài viết về "${tagName}" - Blog K2AiHub`),
    description: createDescription(`Khám phá tất cả bài viết được gắn thẻ ${tagName} tại K2AiHub Blog.`),
    keywords: createKeywords([tagName, 'blog K2AiHub', 'giáo dục', 'công nghệ']),
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;

  if (!tag) {
    return notFound();
  }

  const tagName = getTagFromSlug(tag);
  const posts = await getBlogPostsByTagSlug(tag);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Về trang Blog
        </Link>
      </div>

      <div className="container mx-auto px-4 mb-12 max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <TagIcon className="w-10 h-10 inline-block mr-4 mb-2" />
            {tagName}
          </h1>
          <p className="text-xl text-gray-300 mb-6">{posts.length} bài viết được gắn thẻ</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12 max-w-6xl">
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:bg-white/15">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-purple-300 text-sm mb-2">
                          <TagIcon className="w-4 h-4" />
                          <span>{post.category}</span>
                          {post.featured && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs">
                              ⭐ Nổi bật
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>
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
                            {post.tags.slice(0, 3).map((t) => (
                              <span key={t} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                                {t}
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
            <h2 className="text-2xl font-bold text-white mb-4">Chưa có bài viết nào</h2>
            <p className="text-gray-300 mb-8">Hiện tại chưa có bài viết nào với thẻ {tagName}.</p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium"
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
