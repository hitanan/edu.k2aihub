import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { environmentalClimateLessons } from '@/data/environmental-science-climate';
import { environmentalScienceClimateModuleData } from '@/data/environmental-science-climate-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  environmentalScienceClimateModuleData.title,
  environmentalScienceClimateModuleData.description,
  [
    'environmental science',
    'climate change',
    'sustainability',
    'green technology',
    'renewable energy',
    'vietnam environment',
    'eco solutions',
    'climate action',
    'environmental conservation',
    'k2aihub',
  ],
  environmentalScienceClimateModuleData.id,
);

export default function EnvironmentalScienceClimatePage() {
  return (
    <ModulePageTemplate moduleData={environmentalScienceClimateModuleData} lessons={environmentalClimateLessons} />
  );
}
