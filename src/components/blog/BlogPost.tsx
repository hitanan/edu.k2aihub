'use client';

import { BlogPost as BlogPostType } from '@/lib/blog';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container py-12 max-w-4xl mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'PPP', { locale: vi })}
            </time>
          </div>
          {post.readingTime && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          )}
        </div>
        {post.category && (
          <Link
            href={`/blog/category/${post.category
              .toLowerCase()
              .replace(/ /g, '-')}`}
            className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
          >
            {post.category}
          </Link>
        )}
      </div>

      {post.coverImage && (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-invert max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-2">Tags:</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
