import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { cyberSafetyDigitalEthicsModuleData } from '@/data/modules/cyber-safety-digital-ethics';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  cyberSafetyDigitalEthicsModuleData.title,
  cyberSafetyDigitalEthicsModuleData.description,
  cyberSafetyDigitalEthicsModuleData.tags,
  cyberSafetyDigitalEthicsModuleData.id,
);

export default function CyberSafetyDigitalEthicsPage() {
  return (
    <ModulePageTemplate
      moduleData={cyberSafetyDigitalEthicsModuleData}
      lessons={cyberSafetyDigitalEthicsModuleData.lessons || []}
    />
  );
}
