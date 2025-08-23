import type { Metadata } from "next";
import FeedbackClient from './FeedbackClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Góp Ý & Phản Hồi - Học tập thông minh, Công nghệ AI dẫn lối"),
  description: createDescription("Gửi góp ý, đề xuất và phản hồi để chúng tôi cải thiện K2AI - Nền tảng Học tập thông minh, Công nghệ AI dẫn lối. Chúng tôi luôn lắng nghe và phát triển dựa trên ý kiến người dùng"),
  keywords: createKeywords(["góp ý", "phản hồi", "đề xuất", "liên hệ", "hỗ trợ", "cải thiện"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("Góp Ý & Phản Hồi"),
    description: createDescription("Chia sẻ ý kiến và đề xuất để cùng xây dựng K2AI - Nền tảng Học tập thông minh, Công nghệ AI dẫn lối tốt hơn"),
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}
