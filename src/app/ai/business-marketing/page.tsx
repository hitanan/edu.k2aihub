import type { Metadata } from "next";
import BusinessMarketingClient from './BusinessMarketingClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Kinh Doanh & Marketing - Content Marketing, Customer Service"),
  description: createDescription("Ứng dụng AI trong marketing và kinh doanh: tạo content marketing, AI customer service, market research và sales optimization với công cụ AI"),
  keywords: createKeywords(["AI marketing", "content marketing AI", "AI customer service", "market research AI", "sales optimization", "kinh doanh AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI cho Kinh Doanh & Marketing"),
    description: createDescription("Ứng dụng AI trong marketing, bán hàng, phân tích khách hàng và phát triển kinh doanh"),
    type: "article",
  },
};

export default function BusinessMarketingAI() {
  return <BusinessMarketingClient />;
}