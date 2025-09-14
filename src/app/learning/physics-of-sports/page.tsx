import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { physicsOfSportsModule, physicsOfSportsLessons } from '@/data/modules/physics-of-sports';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  physicsOfSportsModule.title,
  physicsOfSportsModule.description,
  ['vật lý', 'thể thao', 'khoa học thể thao', 'cơ học', 'K2AI'],
  physicsOfSportsModule.id,
);

export default function PhysicsOfSportsPage() {
  return <ModulePageTemplate moduleData={physicsOfSportsModule} lessons={physicsOfSportsLessons} />;
}
