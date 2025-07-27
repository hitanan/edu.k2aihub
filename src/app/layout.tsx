import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createTitle, createDescription, createKeywords, defaultOpenGraph, createOrganizationStructuredData } from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://k2aihub.github.io'),
  title: createTitle("Nền Tảng Thông Tin Tương Tác, Địa Lý Việt Nam, AI Của Tôi", true),
  description: createDescription("Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và thông tin chi tiết về kinh tế, văn hóa, lịch sử. AI Của Tôi giúp bạn hiểu và áp dụng AI trong công việc và cuộc sống hàng ngày"),
  keywords: createKeywords(["giáo dục trực tuyến", "bản đồ Việt Nam", "34 tỉnh thành", "hướng dẫn AI"]),
  authors: [{ name: "K2AIHUB" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    ...defaultOpenGraph,
    title: createTitle("Nền Tảng Thông Tin Tương Tác, Địa Lý Việt Nam, AI Của Tôi"),
    description: createDescription("Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và thông tin chi tiết về kinh tế, văn hóa, lịch sử. AI Của Tôi giúp bạn hiểu và áp dụng AI trong công việc và cuộc sống hàng ngày"),
    images: [
      {
        url: '/ban-do-34-tinh-thanh.jpg',
        width: 1200,
        height: 630,
        alt: 'Bản đồ 34 tỉnh thành Việt Nam - K2AiHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle("Nền Tảng Thông Tin Tương Tác, Địa Lý Việt Nam, AI Của Tôi"),
    description: createDescription("Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác"),
    images: ['/ban-do-34-tinh-thanh.jpg'],
  },
  alternates: {
    canonical: 'https://k2aihub.github.io',
  },
  verification: {
    google: 'google-verification-code', // Replace with actual verification code
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
        <link rel="canonical" href="https://k2aihub.github.io" />
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
