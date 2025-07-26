import type { Metadata } from "next";
import DailyLifeClient from "./DailyLIfeClient";

export const metadata: Metadata = {
  title: "AI cho Cuộc Sống Hàng Ngày - Meal Planning, Finance, Travel",
  description: "Khám phá cách AI hỗ trợ cuộc sống: lập kế hoạch ăn uống, quản lý nhà cửa, lên kế hoạch du lịch và quản lý tài chính cá nhân với AI.",
  keywords: "AI meal planning, home management AI, travel planning AI, personal finance AI, daily life AI, cuộc sống AI",
  authors: [{ name: "AI Của Tôi - Lifestyle Team" }],
  openGraph: {
    title: "AI cho Cuộc Sống Hàng Ngày",
    description: "Khám phá cách AI có thể hỗ trợ các hoạt động hàng ngày từ nấu ăn đến quản lý tài chính cá nhân",
    type: "article",
  },
};

export default function DailyLifeAI() {
  return <DailyLifeClient />;
}
