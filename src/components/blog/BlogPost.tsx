'use client';

import { BlogPost as BlogPostType, BlogMetadata } from '@/types';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, Clock, User, Tag, Book, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { createCategorySlug, createTagSlug } from '@/utils/slug';

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogMetadata[];
}

export function BlogPost({ post, relatedPosts }: BlogPostProps) {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-gray-800/20 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
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
              className="prose prose-lg prose-invert max-w-none text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-headings:text-white"
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
