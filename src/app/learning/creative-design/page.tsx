import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { creativeDesignLessons } from '@/data/modules/creative-design';
import { creativeDesignModule } from '@/data/modules/creative-design-module';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  creativeDesignModule.title,
  creativeDesignModule.description,
  ['thiết kế', 'sáng tạo', 'ai', 'midjourney', 'canva', 'K2AI'],
  creativeDesignModule.id,
);

export default function CreativeDesignPage() {
  return <ModulePageTemplate moduleData={creativeDesignModule} lessons={creativeDesignLessons} />;
}
