import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { getLessonById } from '@/utils/lesson-utils';
import { ClimateLessons } from '@/data/modules/climate-science';

import { LessonPageConfig, BaseLessonData, CaseStudy } from '@/types/lesson-base';
import { Thermometer, CloudRain, Wind, Trees } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const lesson = getLessonById(ClimateLessons, lessonId);
  if (!lesson) {
    notFound();
  }
  return generateLessonMetadata(lessonId, ClimateLessons, 'climate-science');
}

const config: LessonPageConfig<BaseLessonData> = {
  moduleName: 'climate-science',
  moduleTitle: 'Khoa học Khí hậu',
  modulePath: '/learning/climate-science',
  lessons: ClimateLessons,
  primaryColor: 'blue',
  secondaryColor: 'sky',
  gradientColors: 'from-blue-500 to-sky-400',
  getFieldIcon: (field: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      temperature: <Thermometer className="w-5 h-5" />,
      precipitation: <CloudRain className="w-5 h-5" />,
      atmospheric: <Wind className="w-5 h-5" />,
      ecology: <Trees className="w-5 h-5" />,
    };
    return iconMap[field] || <Thermometer className="w-5 h-5" />;
  },
  getFieldValue: (lesson: BaseLessonData) => {
    if ('climateConcepts' in lesson && lesson.climateConcepts) return `${lesson.climateConcepts.length} khái niệm`;
    if ('researchMethods' in lesson && lesson.researchMethods) return `${lesson.researchMethods.length} phương pháp`;
    return '';
  },
  sidebarContent: (lesson: BaseLessonData) => (
    <>
      {lesson.caseStudies && lesson.caseStudies.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Case Studies</h3>
          <ul className="space-y-2">
            {lesson.caseStudies.map((study: CaseStudy, index: number) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                {study.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  ),
};

export default async function ModuleLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return generateLessonStaticParams(ClimateLessons);
}
