import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { ProgrammingRoboticsLessons } from '@/data/programming-robotics';
import { createModuleMetadata } from '@/utils/seo';
import { programmingRoboticsModuleData } from '@/data/programming-robotics-module';

export const metadata: Metadata = createModuleMetadata(
  programmingRoboticsModuleData.title,
  programmingRoboticsModuleData.description,
  [
    'programming robotics',
    'robot programming',
    'ros programming',
    'python robotics',
    'c++ robotics',
    'embedded systems',
    'k2aihub',
  ],
  programmingRoboticsModuleData.id,
);

export default function ProgrammingRoboticsPage() {
  return <ModulePageTemplate moduleData={programmingRoboticsModuleData} lessons={ProgrammingRoboticsLessons} />;
}
