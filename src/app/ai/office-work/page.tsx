import type { Metadata } from "next";
import OfficeWorkClient from './OfficeWorkClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Văn Phòng & Công Việc - ChatGPT, Excel, Presentations"),
  description: createDescription("Hướng dẫn sử dụng AI để tăng hiệu suất công việc văn phòng: viết email với ChatGPT, tự động hóa Excel, tạo presentations và quản lý thời gian hiệu quả"),
  keywords: createKeywords(["ChatGPT email", "Excel automation", "AI presentations", "time management", "office productivity", "văn phòng AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI cho Văn Phòng & Công Việc"),
    description: createDescription("Tận dụng AI để tăng hiệu suất làm việc, tự động hóa công việc văn phòng và cải thiện quy trình nghiệp vụ"),
    type: "article",
  },
};

export default function OfficeWorkAI() {
  return <OfficeWorkClient />;
}
