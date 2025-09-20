import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { physicsInLifeModuleData } from '@/data/modules/physics-in-life';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'physics-in-life';

export const metadata: Metadata = createModuleMetadata(
  physicsInLifeModuleData.title,
  physicsInLifeModuleData.description,
  physicsInLifeModuleData.tags,
  MODULE_ID,
);

export default function PhysicsInLifePage() {
  return <ModulePageTemplate moduleData={physicsInLifeModuleData} lessons={physicsInLifeModuleData.lessons || []} />;
}
