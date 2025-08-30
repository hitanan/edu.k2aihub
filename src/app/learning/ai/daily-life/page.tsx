import type { Metadata } from "next";
import DailyLifeClient from "./DailyLIfeClient";
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  "AI cho Cuộc Sống Hàng Ngày - Meal Planning, Finance, Travel",
  "Khám phá cách AI hỗ trợ cuộc sống: lập kế hoạch ăn uống, quản lý nhà cửa, lên kế hoạch du lịch và quản lý tài chính cá nhân với AI",
  ["AI meal planning", "home management AI", "travel planning AI", "personal finance AI", "daily life AI", "cuộc sống AI"],
  'ai/daily-life'
);

export default function DailyLifeAI() {
  return <DailyLifeClient />;
}
