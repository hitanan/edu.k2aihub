import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { realEstateTechnologyLessons, RealEstateTechLesson } from '@/data/real-estate-technology';
import { TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(realEstateTechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, realEstateTechnologyLessons, 'real-estate-technology');
}

// Custom sidebar content for Real Estate Technology lessons
function RealEstateTechSidebar({ lesson }: { lesson: RealEstateTechLesson }) {
  return (
    <div className="space-y-6">
      {/* Measurable ROI */}
      {lesson.measurableROI && lesson.measurableROI.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-900">Measurable ROI</span>
          </div>
          <ul className="space-y-2">
            {lesson.measurableROI.map((roi, index) => (
              <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">💰</span>
                <span>
                  <strong>{roi.metric}:</strong> {roi.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Page component with standardized config
export default async function RealEstateTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<RealEstateTechLesson> = {
    moduleName: 'real-estate-technology',
    moduleTitle: 'Công Nghệ Bất Động Sản',
    modulePath: '/learning/real-estate-technology',
    lessons: realEstateTechnologyLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    sidebarContent: (lesson) => <RealEstateTechSidebar lesson={lesson} />,
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
