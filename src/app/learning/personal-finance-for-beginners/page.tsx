import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { personalFinanceForBeginnersModuleData } from '@/data/modules/personal-finance-for-beginners';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'personal-finance-for-beginners';

export const metadata: Metadata = createModuleMetadata(
  personalFinanceForBeginnersModuleData.title,
  personalFinanceForBeginnersModuleData.description,
  personalFinanceForBeginnersModuleData.tags,
  MODULE_ID,
);

export default function PersonalFinanceForBeginnersPage() {
  return (
    <ModulePageTemplate
      moduleData={personalFinanceForBeginnersModuleData}
      lessons={personalFinanceForBeginnersModuleData.lessons || []}
    />
  );
}
