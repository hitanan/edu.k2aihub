import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { educationLearningLessons, EducationLearningLesson } from '@/data/modules/education-learning';
import { FaChalkboardTeacher, FaLightbulb, FaTools } from 'react-icons/fa';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(educationLearningLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, educationLearningLessons, 'education-learning');
}

const getFieldIcon = (field: keyof EducationLearningLesson) => {
  switch (field) {
    case 'learningConcept':
      return <FaLightbulb className="w-5 h-5" />;
    case 'pedagogy':
      return <FaChalkboardTeacher className="w-5 h-5" />;
    case 'aiTool':
      return <FaTools className="w-5 h-5" />;
    default:
      return null;
  }
};

// Page component with standardized config
export default async function EducationLearningLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<EducationLearningLesson> = {
    moduleName: 'education-learning',
    moduleTitle: 'Học tập và Giáo dục',
    modulePath: '/learning/education-learning',
    lessons: educationLearningLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-green-900 to-teal-900',
    getFieldIcon: (field: string) => getFieldIcon(field as keyof EducationLearningLesson),
    getFieldValue: (lesson: EducationLearningLesson) => {
      // This function can be customized to return a specific field's value as a string
      return lesson.title;
    },
    sidebarContent: (lesson) => (
      <>
        {lesson.learningConcept && (
          <p>
            <strong>Khái niệm học tập:</strong> {lesson.learningConcept}
          </p>
        )}
        {lesson.pedagogy && (
          <p>
            <strong>Phương pháp sư phạm:</strong> {lesson.pedagogy}
          </p>
        )}
        {lesson.aiTool && (
          <p>
            <strong>Công cụ AI:</strong> {lesson.aiTool}
          </p>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
