import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { nanotechnologyLessons, NanotechnologyLesson } from '@/data/nanotechnology'
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(nanotechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, nanotechnologyLessons);
}

// Page component with nanotechnology-specific configuration
export default async function NanotechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<NanotechnologyLesson> = {
    moduleName: 'nanotechnology',
    moduleTitle: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
    modulePath: '/learning/nanotechnology',
    lessons: nanotechnologyLessons,
    primaryColor: 'purple',
    secondaryColor: 'violet',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: () => <span className="w-5 h-5 text-purple-400">⚛️</span>,
    getFieldValue: (lesson) => lesson.nanotechApplications?.[0] || 'Nanomaterials Research',
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {lesson.nanotechApplications && (
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">🔬 Ứng Dụng Nano</h4>
            <ul className="space-y-2">
              {lesson.nanotechApplications.slice(0, 3).map((app, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {lesson.materialsProperties && (
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">⚛️ Tính Chất Vật Liệu</h4>
            <ul className="space-y-2">
              {lesson.materialsProperties.slice(0, 3).map((property, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  {property}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.safetyConsiderations && (
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">⚠️ An Toàn & Môi Trường</h4>
            <ul className="space-y-2">
              {lesson.safetyConsiderations.slice(0, 3).map((safety, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  {safety}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
