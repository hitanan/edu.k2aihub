import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseHealthcareLessons } from '@/data/vietnamese-healthcare';
import { createModuleMetadata } from '@/utils/seo';
import { vietnameseHealthcareModuleData } from '@/data/vietnamese-healthcare-module';

export const metadata: Metadata = createModuleMetadata(
  vietnameseHealthcareModuleData.title,
  vietnameseHealthcareModuleData.description,
  ['công nghệ y tế', 'digital health vietnam', 'ai medical imaging', 'telemedicine', 'healthcare technology', 'vietnamese healthcare', 'k2aihub'],
  vietnameseHealthcareModuleData.id
);

export default function VietnameseHealthcarePage() {
  return (
    <ModulePageTemplate
      moduleData={vietnameseHealthcareModuleData}
      lessons={vietnameseHealthcareLessons}
    />
  );
}
