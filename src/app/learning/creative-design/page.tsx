import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { creativeDesignModuleData } from '@/data/modules/creative-design';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  creativeDesignModuleData.title,
  creativeDesignModuleData.description,
  ['creative design', 'thiết kế sáng tạo', 'đồ họa', 'design', 'K2AI'],
  creativeDesignModuleData.id,
);

export default function CreativeDesignModulePage() {
  return <ModulePageTemplate moduleData={creativeDesignModuleData} lessons={creativeDesignModuleData.lessons || []} />;
}