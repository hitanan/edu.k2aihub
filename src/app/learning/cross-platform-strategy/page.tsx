import {
  crossPlatformStrategyModuleData,
  lessons as crossPlatformStrategyLessons,
} from '@/data/modules/cross-platform-strategy';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createTitle } from '@/utils/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: createTitle(crossPlatformStrategyModuleData.title),
  description: crossPlatformStrategyModuleData.description,
};

const CrossPlatformStrategyPage = () => {
  return <ModulePageTemplate moduleData={crossPlatformStrategyModuleData} lessons={crossPlatformStrategyLessons} />;
};

export default CrossPlatformStrategyPage;
