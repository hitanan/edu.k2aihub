import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import { digitalCitizenshipAiEthicsModuleData } from '@/data/modules/digital-citizenship-ai-ethics';

export const metadata: Metadata = createModuleMetadata(
  'Công Dân Số và Đạo Đức AI',
  'Học cách trở thành công dân số có trách nhiệm, hiểu về đạo đức AI và bảo vệ quyền riêng tư trong thời đại kỹ thuật số.',
  ['công dân số', 'đạo đức AI', 'quyền riêng tư', 'digital wellness', 'AI ethics', 'K2AIHub'],
  'digital-citizenship-ai-ethics',
);

export default function DigitalCitizenshipMainPage() {
  return (
    <ModulePageTemplate
      moduleData={digitalCitizenshipAiEthicsModuleData}
      lessons={digitalCitizenshipAiEthicsModuleData.lessons ?? []}
    />
  );
}
