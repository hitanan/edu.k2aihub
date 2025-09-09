import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { advancedAILessons } from '@/data/advanced-ai';

import { BaseLessonData, CaseStudy } from '@/types/lesson-base';
import { Brain, Eye, MessageSquare, Target, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(advancedAILessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return { title: 'Lesson not found' };
  }
  return generateLessonMetadata(lessonId, advancedAILessons, 'advanced-ai');
}

// Get icon for AI domain field
function getAIDomainIcon(aiDomain: string) {
  switch (aiDomain) {
    case 'Deep Learning':
      return <Brain className="w-5 h-5 text-purple-500" />;
    case 'Computer Vision':
      return <Eye className="w-5 h-5 text-blue-500" />;
    case 'Natural Language Processing':
      return <MessageSquare className="w-5 h-5 text-green-500" />;
    case 'Reinforcement Learning':
      return <Target className="w-5 h-5 text-orange-500" />;
    case 'AI Ethics':
      return <Shield className="w-5 h-5 text-red-500" />;
    default:
      return <Brain className="w-5 h-5 text-indigo-500" />;
  }
}

// Page component with standardized config
export default async function AdvancedAILessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'advanced-ai',
    moduleTitle: 'Advanced AI & Machine Learning',
    modulePath: '/learning/advanced-ai',
    lessons: advancedAILessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'aiDomain') return getAIDomainIcon('default');
      return <Brain className="w-5 h-5" />;
    },
    getFieldValue: (lesson) => {
      return lesson.aiDomain || 'Advanced AI';
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

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
