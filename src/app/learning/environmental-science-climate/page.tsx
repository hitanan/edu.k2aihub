import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  environmentalScienceClimateModuleData,
  environmentalScienceClimateLessons,
} from '@/data/modules/environmental-science-climate';
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
    <ModulePageTemplate moduleData={environmentalScienceClimateModuleData} lessons={environmentalScienceClimateLessons} />
  );
}
