import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { businessMarketingLessons, BusinessMarketingLesson } from '@/data/modules/business-marketing';
import { FaBullhorn, FaChartLine, FaLightbulb, FaPen, FaSearch, FaUsers } from 'react-icons/fa';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(businessMarketingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, businessMarketingLessons, 'business-marketing');
}

const getFieldIcon = (field: keyof BusinessMarketingLesson) => {
  switch (field) {
    case 'keyConcept':
      return <FaLightbulb className="w-5 h-5" />;
    case 'seoFocus':
      return <FaSearch className="w-5 h-5" />;
    case 'contentStrategy':
      return <FaPen className="w-5 h-5" />;
    case 'targetAudienceProfile':
      return <FaUsers className="w-5 h-5" />;
    case 'campaignExample':
      return <FaBullhorn className="w-5 h-5" />;
    case 'metrics':
      return <FaChartLine className="w-5 h-5" />;
    default:
      return null;
  }
};

// Page component with standardized config
export default async function BusinessMarketingLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BusinessMarketingLesson> = {
    moduleName: 'business-marketing',
    moduleTitle: 'Kinh Doanh và Tiếp Thị Số',
    modulePath: '/learning/business-marketing',
    lessons: businessMarketingLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-blue-900 to-indigo-900',
    getFieldIcon: (field: string) => getFieldIcon(field as keyof BusinessMarketingLesson),
    sidebarContent: (lesson) => (
      <>
        {lesson.keyConcept && (
          <p>
            <strong>Khái niệm chính:</strong> {lesson.keyConcept}
          </p>
        )}
        {lesson.seoFocus && (
          <p>
            <strong>Trọng tâm SEO:</strong> {lesson.seoFocus}
          </p>
        )}
        {lesson.contentStrategy && (
          <p>
            <strong>Chiến lược nội dung:</strong> {lesson.contentStrategy}
          </p>
        )}
        {lesson.targetAudienceProfile && (
          <p>
            <strong>Đối tượng mục tiêu:</strong> {lesson.targetAudienceProfile}
          </p>
        )}
        {lesson.campaignExample && (
          <p>
            <strong>Ví dụ chiến dịch:</strong> {lesson.campaignExample}
          </p>
        )}
        {lesson.metrics && (
          <p>
            <strong>Chỉ số đo lường:</strong> {lesson.metrics}
          </p>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
