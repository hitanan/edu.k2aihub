import Link from 'next/link';
import { Clock, User, Tag, Calendar } from 'lucide-react';
import { BlogMetadata } from '@/types';
import { getCategoryFromSlug } from '@/utils/slug';

interface BlogListProps {
  posts: BlogMetadata[];
}

const BlogList = ({ posts }: BlogListProps) => {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-400">Không tìm thấy bài viết nào.</p>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        const categoryName = post.category ? getCategoryFromSlug(post.category) : 'General';
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
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-5xl">{categoryEmoji}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-blue-300 text-sm mb-2">
                      <Tag className="w-4 h-4" />
                      <span>{categoryName}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;
