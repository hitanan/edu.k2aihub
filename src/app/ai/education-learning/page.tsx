import type { Metadata } from "next";
import EducationLearningClient from "./EducationLearningClient";

export const metadata: Metadata = {
  title: "AI cho Giáo Dục & Học Tập - ChatGPT Tutor, Research Assistant",
  description: "Sử dụng AI để hỗ trợ học tập hiệu quả: ChatGPT làm gia sư cá nhân, AI research assistant, kỹ thuật học tập và chuẩn bị thi cử với AI.",
  keywords: "ChatGPT tutor, AI learning, research assistant, study techniques, exam preparation, giáo dục AI, học tập AI",
  authors: [{ name: "AI Của Tôi - Education Team" }],
  openGraph: {
    title: "AI cho Giáo Dục & Học Tập",
    description: "Sử dụng AI để hỗ trợ học tập, nghiên cứu và phát triển kỹ năng cá nhân một cách hiệu quả",
    type: "article",
  },
};

export default function EducationLearningAI() {
  return <EducationLearningClient />;
}
