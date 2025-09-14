import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { programmingRoboticsModule, programmingRoboticsLessons } from '@/data/modules/programming-robotics';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  programmingRoboticsModule.title,
  programmingRoboticsModule.description,
  [
    'programming robotics',
    'robot programming',
    'ros programming',
    'python robotics',
    'c++ robotics',
    'embedded systems',
    'k2aihub',
  ],
  programmingRoboticsModule.id,
);

export default function ProgrammingRoboticsPage() {
  return <ModulePageTemplate moduleData={programmingRoboticsModule} lessons={programmingRoboticsLessons} />;
}
