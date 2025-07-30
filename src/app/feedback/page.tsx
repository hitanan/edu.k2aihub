import type { Metadata } from "next";
import FeedbackClient from './FeedbackClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Góp Ý & Phản Hồi - Học tập thông minh, Công nghệ AI dẫn lối"),
  description: createDescription("Gửi góp ý, đề xuất và phản hồi để chúng tôi cải thiện K2AI - Nền tảng Học tập thông minh, Công nghệ AI dẫn lối. Chúng tôi luôn lắng nghe và phát triển dựa trên ý kiến người dùng"),
  keywords: createKeywords(["góp ý", "phản hồi", "đề xuất", "liên hệ", "hỗ trợ", "cải thiện"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Góp Ý & Phản Hồi"),
    description: createDescription("Chia sẻ ý kiến và đề xuất để cùng xây dựng K2AI - Nền tảng Học tập thông minh, Công nghệ AI dẫn lối tốt hơn"),
    type: "website",
  },
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}
