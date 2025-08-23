import type { Metadata } from "next";
import OfficeWorkClient from './OfficeWorkClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Văn Phòng & Công Việc - ChatGPT, Excel, Presentations"),
  description: createDescription("Hướng dẫn sử dụng AI để tăng hiệu suất công việc văn phòng: viết email với ChatGPT, tự động hóa Excel, tạo presentations và quản lý thời gian hiệu quả"),
  keywords: createKeywords(["ChatGPT email", "Excel automation", "AI presentations", "time management", "office productivity", "văn phòng AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("AI cho Văn Phòng & Công Việc"),
    description: createDescription("Tận dụng AI để tăng hiệu suất làm việc, tự động hóa công việc văn phòng và cải thiện quy trình nghiệp vụ"),
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function OfficeWorkAI() {
  return <OfficeWorkClient />;
}
