import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPostsMetadata, getBlogPostBySlug } from '@/lib/blog';
import { siteConfig } from '@/config/site';
import { BlogPost } from '@/components/blog/BlogPost';
import { siteCode } from '@/config/site-code';
import StructuredData from '@/components/StructuredData';

import { BlogMetadata } from '@/types';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This post could not be found.',
    };
  }

  const ogImage = post.coverImage ? `${siteConfig.url}${post.coverImage}` : `${siteConfig.url}/og.jpg`;

  return {
    title: post.title,
    description: post.description,
    authors: [
      {
        name: post.author,
        url: `${siteConfig.url}/about`,
      },
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteCode.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export function generateStaticParams(): { slug: string }[] {
  const posts = getAllBlogPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPostsMetadata();
  const relatedPosts = allPosts
    .filter(
      (p: BlogMetadata) =>
        (p.category === post.category ||
          (p.tags && post.tags && (post.tags as string[]).some((tag) => (p.tags as string[]).includes(tag)))) &&
        p.slug !== post.slug,
    )
    .slice(0, 3);

  const blogPostingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'K2AiHub Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
    },
    url: `${siteCode.url}/blog/${post.slug}`,
    inLanguage: 'vi',
    articleSection: post.category || 'Tổng Hợp',
    keywords: (post.tags || []).join(', '),
  };

  return (
    <>
      <StructuredData data={blogPostingStructuredData} />
      <article className="prose prose-invert max-w-none">
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </article>
    </>
  );
}
