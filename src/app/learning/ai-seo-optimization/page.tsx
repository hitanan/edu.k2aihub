import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { aiSeoOptimizationLessons } from '@/data/ai-seo-optimization';
import { aiSeoOptimizationModuleData } from '@/data/ai-seo-optimization-module';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  aiSeoOptimizationModuleData.title,
  aiSeoOptimizationModuleData.description,
  ['seo', 'ai', 'marketing', 'tối ưu hóa', 'K2AI'],
  aiSeoOptimizationModuleData.id,
);

export default function AiSeoOptimizationPage() {
  return <ModulePageTemplate moduleData={aiSeoOptimizationModuleData} lessons={aiSeoOptimizationLessons} />;
}
