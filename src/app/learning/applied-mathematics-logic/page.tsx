import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { appliedMathematicsLogicModuleData } from '@/data/modules/applied-mathematics-logic';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'applied-mathematics-logic';

export const metadata: Metadata = createModuleMetadata(
  appliedMathematicsLogicModuleData.title,
  appliedMathematicsLogicModuleData.description,
  appliedMathematicsLogicModuleData.tags,
  MODULE_ID,
);

export default function AppliedMathematicsLogicPage() {
  return (
    <ModulePageTemplate
      moduleData={appliedMathematicsLogicModuleData}
      lessons={appliedMathematicsLogicModuleData.lessons || []}
    />
  );
}
