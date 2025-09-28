import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { officeWorkLessons, OfficeWorkLesson } from '@/data/modules/office-work';
import { PageProps } from '@/types';
import { FaTools } from 'react-icons/fa';

export async function generateStaticParams() {
  return generateLessonStaticParams(officeWorkLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, officeWorkLessons, 'office-work');
}

export default async function OfficeWorkLessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<OfficeWorkLesson> = {
    moduleName: 'office-work',
    moduleTitle: 'AI trong Công việc Văn phòng',
    modulePath: '/learning/office-work',
    lessons: officeWorkLessons,
    primaryColor: 'blue',
    secondaryColor: 'sky',
    gradientColors: 'from-blue-900 to-sky-900',
    sidebarContent: (lesson) => (
      <div>
        <h3 className="text-lg font-semibold flex items-center mb-2">
          <FaTools className="mr-2" /> Công cụ
        </h3>
        <ul className="list-disc pl-5">
          {lesson.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
