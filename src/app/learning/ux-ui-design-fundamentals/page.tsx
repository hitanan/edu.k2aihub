import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { uxuiDesignLessons } from '@/data/modules/ux-ui-design-fundamentals';
import { createModuleMetadata } from '@/utils/seo';
import { uxUiDesignFundamentalsModuleData } from '@/data/modules/ux-ui-design-fundamentals';

export const metadata: Metadata = createModuleMetadata(
  uxUiDesignFundamentalsModuleData.title,
  uxUiDesignFundamentalsModuleData.description,
  ['ux design', 'ui design', 'user experience', 'design thinking', 'K2AiHub'],
  uxUiDesignFundamentalsModuleData.id,
);

export default function UXUIDesignMainPage() {
  return <ModulePageTemplate moduleData={uxUiDesignFundamentalsModuleData} lessons={uxuiDesignLessons} />;
}
