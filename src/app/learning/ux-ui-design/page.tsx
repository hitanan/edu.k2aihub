import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { uxUiDesignModuleData } from '@/data/modules/ux-ui-design';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  uxUiDesignModuleData.title,
  uxUiDesignModuleData.description,
  ['ux design', 'ui design', 'product development', 'figma', 'K2AiHub'],
  uxUiDesignModuleData.id,
);

export default function UXUIDesignPage() {
  return <ModulePageTemplate moduleData={uxUiDesignModuleData} lessons={uxUiDesignModuleData.lessons || []} />;
}
