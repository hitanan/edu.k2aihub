import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { leadershipManagementModuleData } from '@/data/modules/leadership-management-module';
import { leadershipManagementLessons } from '@/data/modules/leadership-management';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  leadershipManagementModuleData.title,
  leadershipManagementModuleData.description,
  ['leadership', 'quản lý', 'kỹ năng lãnh đạo', 'quản lý nhóm', 'K2AI'],
  leadershipManagementModuleData.id,
);

export default function LeadershipManagementModulePage() {
  return <ModulePageTemplate moduleData={leadershipManagementModuleData} lessons={leadershipManagementLessons} />;
}
