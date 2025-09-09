import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { kitchenChemistryLessons, KitchenChemistryLessonType } from '@/data/kitchen-chemistry';
import { createModuleMetadata } from '@/utils/seo';
import { FlaskConical } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(kitchenChemistryLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return createModuleMetadata(
      'Hóa Học Trong Bếp',
      'Khám phá những phản ứng hóa học kỳ diệu xảy ra trong chính căn bếp của bạn.',
      ['hóa học', 'nấu ăn', 'khoa học thực phẩm', 'K2AI'],
      'kitchen-chemistry',
    );
  }
  return generateLessonMetadata(lessonId, kitchenChemistryLessons, 'kitchen-chemistry');
}

// Page component
export default async function KitchenChemistryLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<KitchenChemistryLessonType> = {
    moduleName: 'kitchen-chemistry',
    moduleTitle: 'Hóa Học Trong Bếp',
    modulePath: '/learning/kitchen-chemistry',
    lessons: kitchenChemistryLessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-slate-900 via-orange-900 to-amber-900',
    getFieldIcon: () => <FlaskConical className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.keyConcept,
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
