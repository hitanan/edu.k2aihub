import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { kitchenChemistryLessons } from '@/data/kitchen-chemistry';
import { createModuleMetadata } from '@/utils/seo';
import { kitchenChemistryModuleData } from '@/data/kitchen-chemistry-module';

export const metadata: Metadata = createModuleMetadata(
  kitchenChemistryModuleData.title,
  kitchenChemistryModuleData.description,
  ['hóa học nhà bếp', 'khoa học thực phẩm', 'nấu ăn', 'phản ứng maillard', 'K2AI'],
  kitchenChemistryModuleData.id,
);

export default function KitchenChemistryPage() {
  return <ModulePageTemplate moduleData={kitchenChemistryModuleData} lessons={kitchenChemistryLessons} />;
}
