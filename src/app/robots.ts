import { MetadataRoute } from 'next';
import { generateRobotsRules } from '@/utils/sitemapGenerator';

// Force static generation for robots
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return generateRobotsRules();
}
