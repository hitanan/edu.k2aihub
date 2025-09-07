import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { environmentalDataScienceLessons } from '@/data/environmental-data-science';
import { environmentalDataScienceModuleData } from '@/data/environmental-data-science-module';
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
