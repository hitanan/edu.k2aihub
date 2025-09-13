import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  environmentalDataScienceModuleData,
  environmentalDataScienceLessons,
} from '@/data/modules/environmental-data-science';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  environmentalDataScienceModuleData.title,
  environmentalDataScienceModuleData.description,
  [
    'environmental data science',
    'climate analysis',
    'remote sensing',
    'air quality monitoring',
    'environmental machine learning',
    'vietnamese environment',
    'sustainability',
    'GIS',
    'K2AI',
  ],
  environmentalDataScienceModuleData.id,
);

export default function EnvironmentalDataSciencePage() {
  return (
    <ModulePageTemplate moduleData={environmentalDataScienceModuleData} lessons={environmentalDataScienceLessons} />
  );
}
