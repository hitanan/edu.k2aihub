import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { kitchenChemistryLessons, KitchenChemistryLessonType } from '@/data/kitchen-chemistry'
import { PageProps } from '@/types';
import { FaVial } from 'react-icons/fa';

export async function generateStaticParams() {
  return generateLessonStaticParams(kitchenChemistryLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, kitchenChemistryLessons, 'kitchen-chemistry');
}

export default async function KitchenChemistryLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<KitchenChemistryLessonType> = {
    moduleName: 'kitchen-chemistry',
    moduleTitle: 'Hóa học Nhà bếp',
    modulePath: '/learning/kitchen-chemistry',
    lessons: kitchenChemistryLessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    getFieldIcon: (field) => field === 'keyConcept' ? <FaVial className="w-5 h-5" /> : null,
    getFieldValue: (lesson) => lesson.keyConcept,
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
