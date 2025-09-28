import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { programmingDevLessons, ProgrammingDevLesson } from '@/data/modules/programming-dev';
import { PageProps } from '@/types';
import { Code, Bot } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(programmingDevLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, programmingDevLessons, 'programming-dev');
}

// Page component with standardized config
export default async function ProgrammingDevLessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<ProgrammingDevLesson> = {
    moduleName: 'programming-dev',
    moduleTitle: 'Lập trình & Phát triển',
    modulePath: '/learning/programming-dev',
    lessons: programmingDevLessons,
    primaryColor: 'gray',
    secondaryColor: 'slate',
    gradientColors: 'from-gray-900 via-slate-800 to-gray-900',
    getFieldIcon: (field: string) => {
      if (field === 'technologies') return <Code className="w-5 h-5" />;
      if (field === 'platforms') return <Bot className="w-5 h-5" />;
      return null;
    },
    sidebarContent: (lesson) => (
      <>
        {lesson.technologies && (
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-2">
              <Code className="mr-2" /> Công nghệ
            </h3>
            <p>{lesson.technologies.join(', ')}</p>
          </div>
        )}
        {lesson.platforms && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold flex items-center mb-2">
              <Bot className="mr-2" /> Nền tảng
            </h3>
            <p>{lesson.platforms.join(', ')}</p>
          </div>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
