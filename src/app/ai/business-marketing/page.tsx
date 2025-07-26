import type { Metadata } from "next";
import BusinessMarketingClient from './BusinessMarketingClient';

export const metadata: Metadata = {
  title: "AI cho Kinh Doanh & Marketing - Content Marketing, Customer Service",
  description: "Ứng dụng AI trong marketing và kinh doanh: tạo content marketing, AI customer service, market research và sales optimization với công cụ AI.",
  keywords: "AI marketing, content marketing AI, AI customer service, market research AI, sales optimization, kinh doanh AI",
  authors: [{ name: "AI Của Tôi - Business Team" }],
  openGraph: {
    title: "AI cho Kinh Doanh & Marketing",
    description: "Ứng dụng AI trong marketing, bán hàng, phân tích khách hàng và phát triển kinh doanh",
    type: "article",
  },
};

export default function BusinessMarketingAI() {
  return <BusinessMarketingClient />;
}