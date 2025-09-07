import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { smartManufacturingLessons } from '@/data/smart-manufacturing';
import { createModuleMetadata } from '@/utils/seo';
import { smartManufacturingModuleData } from '@/data/smart-manufacturing-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  smartManufacturingModuleData.title,
  smartManufacturingModuleData.description,
  ['công nghiệp 4.0', 'sản xuất thông minh', 'tự động hóa', 'IoT', 'AI', 'smart factory'],
  smartManufacturingModuleData.id,
);

export default function SmartManufacturingMainPage() {
  return <ModulePageTemplate moduleData={smartManufacturingModuleData} lessons={smartManufacturingLessons} />;
}
