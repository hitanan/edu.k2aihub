import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { roboticsLessons } from '@/data/robotics';
import { createModuleMetadata } from '@/utils/seo';
import { roboticsModuleData } from '@/data/robotics-module';

export const metadata: Metadata = createModuleMetadata(
  roboticsModuleData.title,
  roboticsModuleData.description,
  ['robotics', 'hệ thống tự hành', 'lập trình robot', 'AI', 'K2AI'],
  roboticsModuleData.id,
);

export default function RoboticsMainPage() {
  return <ModulePageTemplate moduleData={roboticsModuleData} lessons={roboticsLessons} />;
}
