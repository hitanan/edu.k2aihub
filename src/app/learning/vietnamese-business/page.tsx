import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseBusinessLessons } from '@/data/vietnamese-business';
import { createModuleMetadata } from '@/utils/seo';
import { vietnameseBusinessModuleData } from '@/data/vietnamese-business-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  vietnameseBusinessModuleData.title,
  vietnameseBusinessModuleData.description,
  [
    'kinh doanh việt nam',
    'startup vietnam',
    'fintech vietnam',
    'e-commerce vietnam',
    'doanh nghiệp việt nam',
    'đầu tư việt nam',
    'K2AiHub',
  ],
  vietnameseBusinessModuleData.id,
);

export default function VietnameseBusinessPage() {
  return <ModulePageTemplate moduleData={vietnameseBusinessModuleData} lessons={vietnameseBusinessLessons} />;
}
