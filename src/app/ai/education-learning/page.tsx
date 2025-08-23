import type { Metadata } from "next";
import EducationLearningClient from "./EducationLearningClient";
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Giáo Dục & Học Tập - ChatGPT Tutor, Research Assistant"),
  description: createDescription("Sử dụng AI để hỗ trợ học tập hiệu quả: ChatGPT làm gia sư cá nhân, AI research assistant, kỹ thuật học tập và chuẩn bị thi cử với AI"),
  keywords: createKeywords(["ChatGPT tutor", "AI learning", "research assistant", "study techniques", "exam preparation", "giáo dục AI", "học tập AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("AI cho Giáo Dục & Học Tập"),
    description: createDescription("Sử dụng AI để hỗ trợ học tập, nghiên cứu và phát triển kỹ năng cá nhân một cách hiệu quả"),
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function EducationLearningAI() {
  return <EducationLearningClient />;
}
