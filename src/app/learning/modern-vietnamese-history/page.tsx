import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { modernVietnameseHistoryModuleData } from '@/data/modules/modern-vietnamese-history';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'modern-vietnamese-history';

export const metadata: Metadata = createModuleMetadata(
  modernVietnameseHistoryModuleData.title,
  modernVietnameseHistoryModuleData.description,
  modernVietnameseHistoryModuleData.tags,
  MODULE_ID,
);

export default function ModernVietnameseHistoryPage() {
  return (
    <ModulePageTemplate
      moduleData={modernVietnameseHistoryModuleData}
      lessons={modernVietnameseHistoryModuleData.lessons || []}
    />
  );
}
