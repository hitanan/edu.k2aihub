import { dailyLifeModuleData, dailyLifeLessons, metadata } from '@/data/modules/daily-life';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';

export { metadata };

export default function DailyLifeModulePage() {
  return <ModulePageTemplate moduleData={dailyLifeModuleData} lessons={dailyLifeLessons} />;
}
