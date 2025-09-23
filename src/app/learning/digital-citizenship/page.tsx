import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalCitizenshipOnlineSafetyModuleData } from '@/data/modules/digital-citizenship-online-safety';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  digitalCitizenshipOnlineSafetyModuleData.title,
  digitalCitizenshipOnlineSafetyModuleData.description,
  ['digital citizenship', 'công dân số', 'an toàn trực tuyến', 'internet safety', 'K2AI'],
  digitalCitizenshipOnlineSafetyModuleData.id,
);

export default function DigitalCitizenshipModulePage() {
  return <ModulePageTemplate moduleData={digitalCitizenshipOnlineSafetyModuleData} lessons={digitalCitizenshipOnlineSafetyModuleData.lessons || []} />;
}