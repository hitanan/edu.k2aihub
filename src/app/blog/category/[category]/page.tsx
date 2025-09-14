import { redirect } from 'next/navigation';
import { getAllCategorySlugs } from '@/lib/blog';

export function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  return categorySlugs.map((slug) => ({
    category: slug,
  }));
}

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryRedirectPage({ params }: Props) {
  const { category } = await params;
  redirect(`/blog/category/${category}/page/1`);
}
