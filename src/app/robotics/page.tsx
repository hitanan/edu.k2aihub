import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { roboticsLessons, roboticsModuleData } from '@/data/modules/robotics';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  roboticsModuleData.title,
  roboticsModuleData.description,
  ['Robotics', 'robot', 'tự động hóa', 'automation', 'K2AI'],
  roboticsModuleData.id,
);

export default function RoboticsModulePage() {
  return <ModulePageTemplate moduleData={roboticsModuleData} lessons={roboticsLessons} />;
}