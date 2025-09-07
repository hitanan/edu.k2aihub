import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { transportationTechnologyLessons } from '@/data/transportation-technology';
import { createModuleMetadata } from '@/utils/seo';
import { transportationTechnologyModuleData } from '@/data/transportation-technology-module';

export const metadata: Metadata = createModuleMetadata(
  transportationTechnologyModuleData.title,
  transportationTechnologyModuleData.description,
  [
    'transportation technology',
    'smart transportation',
    'autonomous vehicles',
    'traffic management',
    'mobility solutions',
    'logistics tech',
    'vietnam transportation',
    'k2aihub',
  ],
  transportationTechnologyModuleData.id,
);

export default function TransportationTechnologyPage() {
  return (
    <ModulePageTemplate moduleData={transportationTechnologyModuleData} lessons={transportationTechnologyLessons} />
  );
}
