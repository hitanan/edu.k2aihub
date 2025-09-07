import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { physicsOfSportsLessons } from '@/data/physics-of-sports';
import { createModuleMetadata } from '@/utils/seo';
import { physicsOfSportsModuleData } from '@/data/physics-of-sports-module';

export const metadata: Metadata = createModuleMetadata(
  physicsOfSportsModuleData.title,
  physicsOfSportsModuleData.description,
  ['vật lý', 'thể thao', 'khoa học thể thao', 'cơ học', 'K2AI'],
  physicsOfSportsModuleData.id
);

export default function PhysicsOfSportsPage() {
  return (
    <ModulePageTemplate
      moduleData={physicsOfSportsModuleData}
      lessons={physicsOfSportsLessons}
    />
  );
}
