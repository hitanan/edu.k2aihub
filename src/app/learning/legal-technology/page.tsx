import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { legalTechnologyModuleData, legalTechLessons } from '@/data/modules/legal-technology';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  legalTechnologyModuleData.title,
  legalTechnologyModuleData.description,
  [
    'legal technology',
    'công nghệ pháp lý',
    'contract automation',
    'legal research AI',
    'case management',
    'compliance technology',
    'intellectual property management',
    'legal tech vietnam',
    'K2AI',
  ],
  legalTechnologyModuleData.id,
);

export default function LegalTechnologyMainPage() {
  return <ModulePageTemplate moduleData={legalTechnologyModuleData} lessons={legalTechLessons} />;
}
