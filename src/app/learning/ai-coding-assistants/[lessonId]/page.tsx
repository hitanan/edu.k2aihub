import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aiCodingAssistantsLessons } from '@/data/ai-coding-assistants';
import { BaseLessonData } from '@/types/lesson-base';
import { Code } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(aiCodingAssistantsLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, aiCodingAssistantsLessons, 'ai-coding-assistants');
}

export default async function AiCodingAssistantLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'ai-coding-assistants',
    moduleTitle: 'Trợ lý lập trình AI',
    modulePath: '/learning/ai-coding-assistants',
    lessons: aiCodingAssistantsLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field) => {
      if (field === 'difficulty') return <Code className="w-5 h-5" />;
      return null;
    },
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
