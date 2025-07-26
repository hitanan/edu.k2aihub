import type { Metadata } from "next";
import CreativeDesignClient from './CreativeDesignClient';

export const metadata: Metadata = {
  title: "AI cho Sáng Tạo & Thiết Kế - Midjourney, Canva AI, Content Writing",
  description: "Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo: Midjourney cho hình ảnh, Canva AI cho thiết kế, viết content và chỉnh sửa ảnh với AI.",
  keywords: "Midjourney, Canva AI, AI content writing, photo editing AI, creative design, thiết kế AI, sáng tạo AI",
  authors: [{ name: "AI Của Tôi - Creative Team" }],
  openGraph: {
    title: "AI cho Sáng Tạo & Thiết Kế", 
    description: "Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo, thiết kế đồ họa và phát triển ý tưởng",
    type: "article",
  },
};

export default function CreativeDesignAI() {
  return <CreativeDesignClient />;
}