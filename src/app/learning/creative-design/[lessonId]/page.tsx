import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { creativeDesignLessons, CreativeDesignLesson } from '@/data/modules/creative-design';
import { FaPalette, FaTools, FaLightbulb } from 'react-icons/fa';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(creativeDesignLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, creativeDesignLessons, 'creative-design');
}

const getFieldIcon = (field: keyof CreativeDesignLesson) => {
  switch (field) {
    case 'tool':
      return <FaTools className="w-5 h-5" />;
    case 'technique':
      return <FaLightbulb className="w-5 h-5" />;
    case 'artStyle':
      return <FaPalette className="w-5 h-5" />;
    default:
      return null;
  }
};

// Page component with standardized config
export default async function CreativeDesignLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<CreativeDesignLesson> = {
    moduleName: 'creative-design',
    moduleTitle: 'Sáng tạo và Thiết kế',
    modulePath: '/learning/creative-design',
    lessons: creativeDesignLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-purple-900 to-pink-900',
    getFieldIcon: (field: string) => getFieldIcon(field as keyof CreativeDesignLesson),
    sidebarContent: (lesson) => (
      <>
        {lesson.tool && (
          <p>
            <strong>Công cụ:</strong> {lesson.tool}
          </p>
        )}
        {lesson.technique && (
          <p>
            <strong>Kỹ thuật:</strong> {lesson.technique}
          </p>
        )}
        {lesson.artStyle && (
          <p>
            <strong>Phong cách:</strong> {lesson.artStyle}
          </p>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
