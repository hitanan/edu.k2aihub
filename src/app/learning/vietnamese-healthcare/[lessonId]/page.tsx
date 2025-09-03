import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseHealthcareLessons, VietnameseHealthcareLesson } from '@/data/vietnamese-healthcare';
import { PageProps } from '@/types';
import { Activity } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseHealthcareLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, vietnameseHealthcareLessons, 'vietnamese-healthcare');
}

export default async function VietnameseHealthcareLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<VietnameseHealthcareLesson> = {
    moduleName: 'vietnamese-healthcare',
    moduleTitle: 'Công Nghệ Y Tế Việt Nam',
    modulePath: '/learning/vietnamese-healthcare',
    lessons: vietnameseHealthcareLessons,
    primaryColor: 'cyan',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-cyan-900 to-slate-900',
    getFieldIcon: () => <Activity className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.medicalField || 'Healthcare',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Medical Field</h4>
        <div className="text-sm text-gray-300 bg-cyan-500/10 p-2 rounded border border-cyan-500/20 mb-4">
          {lesson.medicalField}
        </div>

        <h4 className="font-semibold text-white mb-3">Technologies</h4>
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

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
