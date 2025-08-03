import type { Metadata } from "next";
import EducationLearningClient from "./EducationLearningClient";
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Giáo Dục & Học Tập - ChatGPT Tutor, Research Assistant"),
  description: createDescription("Sử dụng AI để hỗ trợ học tập hiệu quả: ChatGPT làm gia sư cá nhân, AI research assistant, kỹ thuật học tập và chuẩn bị thi cử với AI"),
  keywords: createKeywords(["ChatGPT tutor", "AI learning", "research assistant", "study techniques", "exam preparation", "giáo dục AI", "học tập AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI cho Giáo Dục & Học Tập"),
    description: createDescription("Sử dụng AI để hỗ trợ học tập, nghiên cứu và phát triển kỹ năng cá nhân một cách hiệu quả"),
    type: "article",
  },
};

export default function EducationLearningAI() {
  return <EducationLearningClient />;
}
