import type { Metadata } from "next";
import DailyLifeClient from "./DailyLIfeClient";
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Cuộc Sống Hàng Ngày - Meal Planning, Finance, Travel"),
  description: createDescription("Khám phá cách AI hỗ trợ cuộc sống: lập kế hoạch ăn uống, quản lý nhà cửa, lên kế hoạch du lịch và quản lý tài chính cá nhân với AI"),
  keywords: createKeywords(["AI meal planning", "home management AI", "travel planning AI", "personal finance AI", "daily life AI", "cuộc sống AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI cho Cuộc Sống Hàng Ngày"),
    description: createDescription("Khám phá cách AI có thể hỗ trợ các hoạt động hàng ngày từ nấu ăn đến quản lý tài chính cá nhân"),
    type: "article",
  },
};

export default function DailyLifeAI() {
  return <DailyLifeClient />;
}
