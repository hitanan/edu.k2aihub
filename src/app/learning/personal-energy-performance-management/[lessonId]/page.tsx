import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { energyManagementLessons, EnergyManagementLessonType } from '@/data/personal-energy-performance-management';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(energyManagementLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, energyManagementLessons, 'personal-energy-performance-management');
}

// Page component with standardized config
export default async function EnergyManagementLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const lesson = energyManagementLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const config: LessonPageConfig<EnergyManagementLessonType> = {
    moduleName: 'personal-energy-performance-management',
    moduleTitle: 'Quản Lý Năng Lượng và Hiệu Suất Cá Nhân',
    modulePath: '/learning/personal-energy-performance-management',
    lessons: energyManagementLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    sidebarContent: (lesson: EnergyManagementLessonType) => (
      <>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Mục tiêu bài học</h3>
          <ul className="space-y-2">
            {lesson.objectives.map((obj: string, index: number) => (
              <li key={index} className="flex items-start text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Điều kiện tiên quyết</h3>
          <ul className="space-y-2">
            {lesson.prerequisites &&
              lesson.prerequisites.map((prereq: string, index: number) => (
                <li key={index} className="flex items-start text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  {prereq}
                </li>
              ))}
          </ul>
        </div>
        {lesson.vietnamContext && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Bối cảnh Việt Nam</h3>
            <ul className="space-y-2">
              {lesson.vietnamContext.content.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  {item}
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
