import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { siteConfig } from '@/config/site';
import { BlogPost } from '@/components/blog/BlogPost';
import { siteCode } from '@/config/site-code';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Define a specific props type for this page
// type BlogPostPageProps = {
//   params: {
//     slug: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
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

  return <BlogPost post={post} />;
}
