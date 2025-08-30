import type { Metadata } from "next";
import CreativeDesignClient from './CreativeDesignClient';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  "AI cho Sáng Tạo & Thiết Kế - Midjourney, Canva AI, Content Writing",
  "Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo: Midjourney cho hình ảnh, Canva AI cho thiết kế, viết content và chỉnh sửa ảnh với AI",
  ["Midjourney", "Canva AI", "AI content writing", "photo editing AI", "creative design", "thiết kế AI", "sáng tạo AI"],
  'ai/creative-design'
);

export default function CreativeDesignAI() {
  return <CreativeDesignClient />;
}