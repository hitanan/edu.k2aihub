/**
 * Performance and SEO optimizations for the application
 */

import { ReactNode } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  children: ReactNode;
  preconnectDomains?: string[];
  prefetchResources?: string[];
}

export default function PerformanceOptimizer({ 
  children, 
  preconnectDomains = [],
  prefetchResources = []
}: PerformanceOptimizerProps) {
  const defaultPreconnectDomains = [
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  const allPreconnectDomains = [...defaultPreconnectDomains, ...preconnectDomains];

  return (
    <>
      <Head>
        {/* Preconnect to external domains for faster loading */}
        {allPreconnectDomains.map((domain) => (
          <link key={domain} rel="preconnect" href={domain} />
        ))}
        
        {/* DNS prefetch for additional performance */}
        {allPreconnectDomains.map((domain) => (
          <link key={`dns-${domain}`} rel="dns-prefetch" href={domain} />
        ))}

        {/* Prefetch critical resources */}
        {prefetchResources.map((resource) => (
          <link key={resource} rel="prefetch" href={resource} />
        ))}

        {/* Critical resource hints */}
        <link rel="preload" href="/ban-do-viet-nam-34-tinh.jpg" as="image" />
        
        {/* Performance hints for images */}
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
      </Head>
      {children}
    </>
  );
}
