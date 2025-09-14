import { redirect } from 'next/navigation';
import { getAllTagSlugs } from '@/lib/blog';

export function generateStaticParams() {
  const tagSlugs = getAllTagSlugs();
  return tagSlugs.map((slug) => ({
    tag: slug,
  }));
}

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function TagRedirectPage({ params }: Props) {
  const { tag } = await params;
  redirect(`/blog/tag/${tag}/page/1`);
}
