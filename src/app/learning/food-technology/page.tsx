import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { foodTechnologyModuleData } from '@/data/modules/food-technology';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  foodTechnologyModuleData.title,
  foodTechnologyModuleData.description,
  ['food technology', 'công nghệ thực phẩm', 'an toàn thực phẩm', 'lên men', 'ẩm thực phân tử', 'K2AI'],
  foodTechnologyModuleData.id,
);

export default function FoodTechnologyPage() {
  return <ModulePageTemplate moduleData={foodTechnologyModuleData} lessons={foodTechnologyModuleData.lessons || []} />;
}
