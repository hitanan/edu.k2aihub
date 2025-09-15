import Link from 'next/link';
import { getBlogPostsByTagSlug, getAllTagSlugs, getAllCategories, getAllTags } from '@/lib/blog';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { getTagFromSlug, createTagSlug, createCategorySlug } from '@/utils/slug';
import { ArrowLeft, Tag as TagIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import BlogList from '@/components/blog/BlogList';

type Props = {
  params: Promise<{ tag: string; page: string }>;
};

export function generateStaticParams(): { tag: string; page: string }[] {
  const tagSlugs = getAllTagSlugs();
  const params: { tag: string; page: string }[] = [];

  for (const tagSlug of tagSlugs) {
    const posts = getBlogPostsByTagSlug(tagSlug);
    const totalPages = Math.ceil(posts.length / 10);
    for (let i = 1; i <= totalPages; i++) {
      params.push({ tag: tagSlug, page: i.toString() });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { tag, page } = await params;
  if (!tag) {
    return {
      title: createTitle('Thẻ không tìm thấy'),
      description: createDescription('Thẻ blog bạn đang tìm kiếm không tồn tại.'),
    };
  }
  const tagName = getTagFromSlug(tag);
  const pageNumber = parseInt(page, 10);
  const title =
    pageNumber > 1
      ? createTitle(`Bài viết về "${tagName}" - Trang ${pageNumber} | Blog K2AiHub`)
      : createTitle(`Bài viết về "${tagName}" - Blog K2AiHub`);

  return {
    title,
    description: createDescription(`Khám phá tất cả bài viết được gắn thẻ ${tagName} tại K2AiHub Blog.`),
    keywords: createKeywords([tagName, 'blog K2AiHub', 'giáo dục', 'công nghệ']),
  };
}

export default async function TagPage({ params }: Props) {
  const { tag: tagSlug, page } = await params;
  const currentPage = parseInt(page, 10);

  if (!tagSlug || isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const pageSize = 10;
  const tagName = getTagFromSlug(tagSlug);
  const [allPosts, allCategories, allTags] = await Promise.all([
    getBlogPostsByTagSlug(tagSlug),
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
        <p className="text-gray-300 mb-8">Hiện tại không có bài viết nào được gắn thẻ &quot;{tagName}&quot;.</p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Về trang Blog
        </Link>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <TagIcon className="w-10 h-10 inline-block mr-4 mb-2" />
            {tagName}
          </h1>
          <p className="text-xl text-gray-300">
            {totalPosts} bài viết được gắn thẻ - Trang {currentPage}/{totalPages}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8">
          <BlogList posts={paginatedPosts} />
          <div className="mt-8 flex justify-between items-center">
            {currentPage > 1 && (
              <Link
                href={`/blog/tag/${tagSlug}/page/${currentPage - 1}`}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Trang trước
              </Link>
            )}
            <div className="flex-grow" />
            {currentPage < totalPages && (
              <Link
                href={`/blog/tag/${tagSlug}/page/${currentPage + 1}`}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
                {allCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/blog/category/${createCategorySlug(cat.name)}/page/1`}
                    className="bg-gray-700 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full transition-colors"
                  >
                    {cat.name} <span className="text-xs opacity-75">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Các Tags khác</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((t) => (
                  <Link
                    key={t.name}
                    href={`/blog/tag/${createTagSlug(t.name)}/page/1`}
                    className={`text-sm font-medium py-1 px-3 rounded-full transition-colors ${
                      t.name === tagName ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-purple-600 text-white'
                    }`}
                  >
                    {t.name} <span className="text-xs opacity-75">{t.count}</span>
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
