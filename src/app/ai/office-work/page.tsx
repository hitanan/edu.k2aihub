import type { Metadata } from "next";
import OfficeWorkClient from './OfficeWorkClient';

export const metadata: Metadata = {
  title: "AI cho Văn Phòng & Công Việc - ChatGPT, Excel, Presentations",
  description: "Hướng dẫn sử dụng AI để tăng hiệu suất công việc văn phòng: viết email với ChatGPT, tự động hóa Excel, tạo presentations và quản lý thời gian hiệu quả.",
  keywords: "ChatGPT email, Excel automation, AI presentations, time management, office productivity, văn phòng AI",
  authors: [{ name: "AI Của Tôi - Office Team" }],
  openGraph: {
    title: "AI cho Văn Phòng & Công Việc",
    description: "Tận dụng AI để tăng hiệu suất làm việc, tự động hóa công việc văn phòng và cải thiện quy trình nghiệp vụ",
    type: "article",
  },
};

export default function OfficeWorkAI() {
  return <OfficeWorkClient />;
}
