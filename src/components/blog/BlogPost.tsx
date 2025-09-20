'use client';

import { BlogPost as BlogPostType, BlogMetadata } from '@/types';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, Clock, User, Tag, Book, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { createCategorySlug, createTagSlug } from '@/utils/slug';
import TableOfContents from './TableOfContents';
import { getHeadings } from '@/utils/getHeadings';

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogMetadata[];
  featuredPosts?: BlogMetadata[];
  categories?: { name: string; count: number }[];
  tags?: { name: string; count: number }[];
}

export function BlogPost({ post, relatedPosts, featuredPosts = [], categories = [], tags = [] }: BlogPostProps) {
  const headings = getHeadings(post.content);

  return (
    <div className="bg-slate-950 text-gray-300 font-sans leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-x-12">
          <div className="lg:flex-1 lg:min-w-0">
            <article className="bg-slate-900/50 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden">
              {post.coverImage && (
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </div>
              )}

              <div className="p-6 sm:p-10">
                <header className="mb-8">
                  {post.category && (
                    <Link
                      href={`/blog/category/${createCategorySlug(post.category)}`}
                      className="inline-block bg-blue-600/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-blue-600/40 transition-colors duration-300"
                    >
                      {post.category}
                    </Link>
                  )}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-400" />
                      <span className="font-medium text-gray-300">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <time dateTime={post.date}>{format(new Date(post.date), 'PPP', { locale: vi })}</time>
                    </div>
                    {post.readingTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span>{post.readingTime}</span>
                      </div>
                    )}
                  </div>
                </header>

                <div
                  className="blog prose prose-lg prose-invert max-w-none text-gray-300 
                             prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-16 prose-h1:mb-6 prose-h1:text-white
                             prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-white prose-h2:border-b prose-h2:border-gray-700/50 prose-h2:pb-2
                             prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-white
                             prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-gray-100
                             prose-h5:text-lg prose-h5:font-semibold prose-h5:mt-6 prose-h5:mb-2 prose-h5:text-gray-200
                             prose-h6:text-base prose-h6:font-medium prose-h6:mt-4 prose-h6:mb-2 prose-h6:text-gray-300
                             prose-p:leading-relaxed prose-p:mb-4
                             prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:transition-colors prose-a:duration-200
                             prose-strong:text-white prose-strong:font-semibold
                             prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
                             prose-code:bg-gray-700/50 prose-code:rounded prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:text-sm
                             prose-pre:bg-gray-800 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {post.tags && post.tags.length > 0 && (
                  <footer className="mt-12 pt-8 border-t border-gray-700/50">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${createTagSlug(tag)}`}
                          className="bg-indigo-600/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-indigo-600/40 transition-colors duration-300"
                        >
                          # {tag}
                        </Link>
                      ))}
                    </div>
                  </footer>
                )}
              </div>
            </article>
          </div>
          <aside className="lg:w-80 lg:flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <TableOfContents headings={headings} />

              {featuredPosts.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Bài viết nổi bật</h3>
                  <div className="space-y-4">
                    {featuredPosts.slice(0, 3).map((featuredPost) => (
                      <Link key={featuredPost.slug} href={`/blog/${featuredPost.slug}`} className="block group">
                        <p className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">
                          {featuredPost.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(featuredPost.date).toLocaleDateString('vi-VN')}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {categories.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Chủ đề</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(0, 6).map((category) => (
                      <Link
                        key={category.name}
                        href={`/blog/category/${createCategorySlug(category.name)}`}
                        className="bg-gray-700 hover:bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full transition-colors"
                      >
                        {category.name} <span className="text-xs opacity-75">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {tags.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 8).map((tag) => (
                      <Link
                        key={tag.name}
                        href={`/blog/tag/${createTagSlug(tag.name)}`}
                        className="bg-gray-700 hover:bg-indigo-600 text-white text-xs font-medium py-1 px-3 rounded-full transition-colors"
                      >
                        {tag.name} <span className="text-xs opacity-75">{tag.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Book className="h-8 w-8 text-blue-400" />
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{relatedPost.description}</p>
                  <div className="flex items-center text-xs text-blue-400 font-semibold">
                    Đọc tiếp
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
