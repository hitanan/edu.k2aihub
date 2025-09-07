import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mobileAppDevelopmentLessons } from '@/data/mobile-app-development';
import { createModuleMetadata } from '@/utils/seo';
import { mobileAppDevelopmentModuleData } from '@/data/mobile-app-development-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  mobileAppDevelopmentModuleData.title,
  mobileAppDevelopmentModuleData.description,
  [
    'mobile app development',
    'react native',
    'iOS swift',
    'android kotlin',
    'flutter',
    'app store optimization',
    'phát triển ứng dụng di động',
    'lập trình mobile',
    'K2AI',
  ],
  mobileAppDevelopmentModuleData.id,
);

export default function MobileAppDevelopmentMainPage() {
  return <ModulePageTemplate moduleData={mobileAppDevelopmentModuleData} lessons={mobileAppDevelopmentLessons} />;
}
