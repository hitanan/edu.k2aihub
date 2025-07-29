import { MetadataRoute } from 'next';
import { generateSitemapEntries } from '@/utils/sitemapGenerator';

// Force static generation for sitemap
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapEntries();
}
