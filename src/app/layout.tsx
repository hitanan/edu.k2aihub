import type { Metadata } from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createTitle, createDescription, createKeywords, createOrganizationStructuredData } from '@/utils/seo';
import { getAbsoluteAssetUrl } from '@/utils/assets';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: createTitle('Interactive Information Platform for Vietnamese Education'),
  description: createDescription(
    'K2AiHub là nền tảng giáo dục tương tác hiện đại với hai module chính: Bản đồ 34 tỉnh thành Việt Nam tương tác và Hướng dẫn AI thực tế cho cuộc sống và công việc.'
  ),
  keywords: createKeywords([
    'Vietnam geography',
    'AI guide',
    'educational platform',
    'interactive learning',
    'K2AiHub',
    'vietnamese education',
    'practical AI',
    'interactive map'
  ]),
  authors: [{ name: 'K2AiHub Team' }],
  creator: 'K2AiHub',
  publisher: 'K2AiHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://k2aihub.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: createTitle('Interactive Information Platform for Vietnamese Education'),
    description: createDescription(
      'K2AiHub là nền tảng giáo dục tương tác hiện đại với hai module chính: Bản đồ 34 tỉnh thành Việt Nam tương tác và Hướng dẫn AI thực tế cho cuộc sống và công việc.'
    ),
    url: 'https://k2aihub.com',
    siteName: 'K2AiHub',
    locale: 'vi_VN',
    type: 'website',
    images: [getAbsoluteAssetUrl('/ban-do-viet-nam-34-tinh.jpg')]
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('Interactive Information Platform for Vietnamese Education'),
    description: createDescription(
      'K2AiHub là nền tảng giáo dục tương tác hiện đại với hai module chính: Bản đồ 34 tỉnh thành Việt Nam tương tác và Hướng dẫn AI thực tế cho cuộc sống và công việc.'
    ),
    images: [getAbsoluteAssetUrl('/ban-do-viet-nam-34-tinh.jpg')]
  }
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
        <link rel="canonical" href="https://k2aihub.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
