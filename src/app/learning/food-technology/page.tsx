import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { foodTechnologyLessons } from '@/data/food-technology';
import { createModuleMetadata } from '@/utils/seo';
import { foodTechnologyModuleData } from '@/data/food-technology-module';

export const metadata: Metadata = createModuleMetadata(
  'Food Technology - Công Nghệ Thực Phẩm',
  'Master food technology: food safety, fermentation, molecular gastronomy, sustainable production. Vietnamese food industry modernization với traditional focus.',
  ['food technology', 'food safety', 'fermentation', 'molecular gastronomy', 'vietnamese food', 'nuoc mam', 'food processing', 'sustainability', 'K2AI'],
  'food-technology'
);

export default function FoodTechnologyPage() {
  return (
    <ModulePageTemplate moduleData={foodTechnologyModuleData} lessons={foodTechnologyLessons} />
  );
}
