import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseCultureLessons, VietnameseCultureLesson } from '@/data/modules/vietnamese-culture';

import { Landmark } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseCultureLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, vietnameseCultureLessons, 'vietnamese-culture');
}

export default async function VietnameseCultureLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<VietnameseCultureLesson> = {
    moduleName: 'vietnamese-culture',
    moduleTitle: 'Văn Hóa Việt Nam & Di Sản Số',
    modulePath: '/learning/vietnamese-culture',
    lessons: vietnameseCultureLessons,
    primaryColor: 'yellow',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-yellow-900 to-slate-900',
    getFieldIcon: () => <Landmark className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.culturalAspects?.[0] || 'Culture',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Cultural Aspects</h4>
        <div className="space-y-2">
          {lesson.culturalAspects?.map((aspect, index) => (
            <div key={index} className="text-sm text-gray-300 bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
              {aspect}
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-white mb-3 mt-4">Technologies</h4>
        <div className="space-y-2">
          {lesson.technologies?.map((tech, index) => (
            <div key={index} className="text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/10">
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
