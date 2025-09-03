import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseLangTechLessons, VietnameseLangTechLesson } from '@/data/vietnamese-language-tech';
import { PageProps } from '@/types';
import { MessageSquare } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseLangTechLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, vietnameseLangTechLessons, 'vietnamese-language-tech');
}

export default async function VietnameseLangTechLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<VietnameseLangTechLesson> = {
    moduleName: 'vietnamese-language-tech',
    moduleTitle: 'Vietnamese Language Technology',
    modulePath: '/learning/vietnamese-language-tech',
    lessons: vietnameseLangTechLessons,
    primaryColor: 'violet',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-violet-900 to-slate-900',
    getFieldIcon: () => <MessageSquare className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.languageFeatures?.[0] || 'Language Tech',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Technologies</h4>
        <div className="space-y-2">
          {lesson.technologies?.map((tech, index) => (
            <div key={index} className="text-sm text-gray-300 bg-violet-500/10 p-2 rounded border border-violet-500/20">
              {tech}
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-white mb-3 mt-4">Language Features</h4>
        <div className="space-y-2">
          {lesson.languageFeatures?.map((feature, index) => (
            <div key={index} className="text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/10">
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
