import type { Metadata } from "next";
import CreativeDesignClient from './CreativeDesignClient';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Sáng Tạo & Thiết Kế - Midjourney, Canva AI, Content Writing"),
  description: createDescription("Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo: Midjourney cho hình ảnh, Canva AI cho thiết kế, viết content và chỉnh sửa ảnh với AI"),
  keywords: createKeywords(["Midjourney", "Canva AI", "AI content writing", "photo editing AI", "creative design", "thiết kế AI", "sáng tạo AI"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI cho Sáng Tạo & Thiết Kế"), 
    description: createDescription("Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo, thiết kế đồ họa và phát triển ý tưởng"),
    type: "article",
  },
};

export default function CreativeDesignAI() {
  return <CreativeDesignClient />;
}