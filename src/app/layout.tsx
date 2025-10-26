import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { createTitle, createDescription, createKeywords, createOrganizationStructuredData } from '@/utils/seo';
import { getAbsoluteAssetUrl } from '@/utils/assets';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: createTitle('K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối'),
  description: createDescription(
    'K2AiHub là Nền tảng công nghệ AI dẫn lối hiện đại với 90+ modules học tập chất lượng cao: AI thực tế cho cuộc sống và công việc, lập trình, STEM, và nhiều lĩnh vực khác.',
  ),
  keywords: createKeywords([
    'AI guide',
    'educational platform',
    'interactive learning',
    'K2AI',
    'vietnamese education',
    'practical AI',
    'programming',
    'STEM',
  ]),
  authors: [{ name: 'K2AI Team' }],
  creator: 'K2AI',
  publisher: 'K2AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://edu.k2aihub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: createTitle('K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối'),
    description: createDescription(
      'K2AiHub là Nền tảng công nghệ AI dẫn lối hiện đại với 90+ modules học tập chất lượng cao: AI thực tế cho cuộc sống và công việc, lập trình, STEM, và nhiều lĩnh vực khác.',
    ),
    url: 'https://edu.k2aihub.com',
    siteName: 'K2AiHub',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối'),
    description: createDescription(
      'K2AiHub là Nền tảng công nghệ AI dẫn lối hiện đại với 90+ modules học tập chất lượng cao: AI thực tế cho cuộc sống và công việc, lập trình, STEM, và nhiều lĩnh vực khác.',
    ),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = createOrganizationStructuredData();

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://edu.k2aihub.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
