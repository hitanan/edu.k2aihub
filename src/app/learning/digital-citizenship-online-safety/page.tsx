import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalCitizenshipOnlineSafetyModuleData, lessons } from '@/data/modules/digital-citizenship-online-safety';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  digitalCitizenshipOnlineSafetyModuleData.title,
  digitalCitizenshipOnlineSafetyModuleData.description,
  ['công dân số', 'an toàn trực tuyến', 'an ninh mạng', 'đạo đức số', 'K2AI'],
  digitalCitizenshipOnlineSafetyModuleData.id,
);

export default function DigitalCitizenshipPage() {
  return <ModulePageTemplate moduleData={digitalCitizenshipOnlineSafetyModuleData} lessons={lessons} />;
}
