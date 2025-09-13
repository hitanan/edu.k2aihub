import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mobileAppDevelopmentModule } from '@/data/modules/mobile-app-development';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  mobileAppDevelopmentModule.title,
  mobileAppDevelopmentModule.description,
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
  mobileAppDevelopmentModule.id,
);

export default function MobileAppDevelopmentMainPage() {
  return <ModulePageTemplate moduleData={mobileAppDevelopmentModule} lessons={mobileAppDevelopmentModule.lessons || []} />;
}
