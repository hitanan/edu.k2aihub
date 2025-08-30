import type { Metadata } from "next";
import OfficeWorkClient from './OfficeWorkClient';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'AI cho Văn Phòng & Công Việc - ChatGPT, Excel, Presentations',
  'Hướng dẫn sử dụng AI để tăng hiệu suất công việc văn phòng: viết email với ChatGPT, tự động hóa Excel, tạo presentations và quản lý thời gian hiệu quả',
  ['ChatGPT email', 'Excel automation', 'AI presentations', 'time management', 'office productivity', 'văn phòng AI'],
  'ai/office-work'
);

export default function OfficeWorkAI() {
  return <OfficeWorkClient />;
}
