import type { Metadata } from "next";
import BusinessMarketingClient from './BusinessMarketingClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Kinh Doanh & Marketing - Content Marketing, Customer Service"),
  description: createDescription("Ứng dụng AI trong marketing và kinh doanh: tạo content marketing, AI customer service, market research và sales optimization với công cụ AI"),
  keywords: createKeywords(["AI marketing", "content marketing AI", "AI customer service", "market research AI", "sales optimization", "kinh doanh AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("AI cho Kinh Doanh & Marketing"),
    description: createDescription("Ứng dụng AI trong marketing, bán hàng, phân tích khách hàng và phát triển kinh doanh"),
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function BusinessMarketingAI() {
  return <BusinessMarketingClient />;
}