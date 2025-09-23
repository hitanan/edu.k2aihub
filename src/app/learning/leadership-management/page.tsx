import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { leadershipManagementModule } from '@/data/modules/leadership-management';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  leadershipManagementModule.title,
  leadershipManagementModule.description,
  ['leadership', 'quản lý', 'kỹ năng lãnh đạo', 'quản lý nhóm', 'K2AI'],
  leadershipManagementModule.id,
);

export default function LeadershipManagementModulePage() {
  return <ModulePageTemplate moduleData={leadershipManagementModule} lessons={leadershipManagementModule.lessons || []} />;
}