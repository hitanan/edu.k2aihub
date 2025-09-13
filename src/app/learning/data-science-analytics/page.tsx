import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { dataScienceAnalyticsModuleData } from '@/data/modules/data-science-analytics';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Data Science & Big Data Analytics',
  'Master data science fundamentals với Python, big data processing, machine learning applications và business intelligence.',
  ['data science', 'machine learning', 'big data', 'business intelligence', 'python', 'K2AI', 'học tập thông minh'],
  'data-science-analytics',
);

export default function DataScienceAnalyticsPage() {
  return <ModulePageTemplate moduleData={dataScienceAnalyticsModuleData} lessons={dataScienceAnalyticsModuleData.lessons || []} />;
}
