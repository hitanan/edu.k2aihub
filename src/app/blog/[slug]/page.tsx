import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { siteConfig } from '@/config/site';
import { BlogPost } from '@/components/blog/BlogPost';
import { siteCode } from '@/config/site-code';

interface BlogPostPageProps {
  params: {
    slug: string;
    lessonId?: string;
    gameId?: string;
    category?: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This post could not be found.',
    };
  }

  const ogImage = post.coverImage
    ? `${siteConfig.url}${post.coverImage}`
    : `${siteConfig.url}/og.jpg`;

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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}