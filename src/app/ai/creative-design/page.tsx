import type { Metadata } from "next";
import CreativeDesignClient from './CreativeDesignClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Sáng Tạo & Thiết Kế - Midjourney, Canva AI, Content Writing"),
  description: createDescription("Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo: Midjourney cho hình ảnh, Canva AI cho thiết kế, viết content và chỉnh sửa ảnh với AI"),
  keywords: createKeywords(["Midjourney", "Canva AI", "AI content writing", "photo editing AI", "creative design", "thiết kế AI", "sáng tạo AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("AI cho Sáng Tạo & Thiết Kế"), 
    description: createDescription("Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo, thiết kế đồ họa và phát triển ý tưởng"),
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function CreativeDesignAI() {
  return <CreativeDesignClient />;
}