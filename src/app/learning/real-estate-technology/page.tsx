import type { Metadata } from 'next';
import { realEstateTechnologyModuleData, realEstateLessons } from '@/data/modules/real-estate-technology';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  realEstateTechnologyModuleData.title,
  realEstateTechnologyModuleData.description,
  [
    'công nghệ bất động sản',
    'real estate technology',
    'proptech',
    'virtual tours',
    'smart buildings',
    'real estate analytics',
    'blockchain real estate',
    'property management',
    'real estate ai',
    'K2AI',
  ],
  realEstateTechnologyModuleData.id,
);

export default function RealEstateTechnologyPage() {
  return <ModulePageTemplate moduleData={realEstateTechnologyModuleData} lessons={realEstateLessons} />;
}
