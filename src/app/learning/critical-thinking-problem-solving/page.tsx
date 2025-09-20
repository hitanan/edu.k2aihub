import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { criticalThinkingProblemSolvingModuleData } from '@/data/modules/critical-thinking-problem-solving';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'critical-thinking-problem-solving';

export const metadata: Metadata = createModuleMetadata(
  criticalThinkingProblemSolvingModuleData.title,
  criticalThinkingProblemSolvingModuleData.description,
  criticalThinkingProblemSolvingModuleData.tags,
  MODULE_ID,
);

export default function CriticalThinkingProblemSolvingPage() {
  return (
    <ModulePageTemplate
      moduleData={criticalThinkingProblemSolvingModuleData}
      lessons={criticalThinkingProblemSolvingModuleData.lessons || []}
    />
  );
}
