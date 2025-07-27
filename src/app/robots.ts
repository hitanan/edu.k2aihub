import { MetadataRoute } from 'next';

// Force static generation for robots
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://k2aihub.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/']
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
