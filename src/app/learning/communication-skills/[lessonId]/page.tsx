import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { communicationSkillsLessons } from '@/data/modules/communication-skills';
import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(communicationSkillsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
    };
  }
  return generateLessonMetadata(lessonId, communicationSkillsLessons, 'communication-skills');
}

// Page component with standardized config
export default async function CommunicationSkillsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'communication-skills',
    moduleTitle: 'Kỹ Năng Giao Tiếp và Thuyết Trình',
    modulePath: '/learning/communication-skills',
    lessons: communicationSkillsLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      const icons: Record<string, React.ReactNode> = {
        communicationMethods: <span className="text-blue-400">🗣️</span>,
        presentationTechniques: <span className="text-cyan-400">📊</span>,
        culturalContext: <span className="text-blue-300">🌍</span>,
        digitalPlatforms: <span className="text-cyan-300">💻</span>,
        assessmentCriteria: <span className="text-blue-500">📋</span>,
      };
      return icons[field] || <span className="text-blue-400">🔷</span>;
    },
    getFieldValue: (lesson: BaseLessonData) => {
      // Type assertion to access custom fields
      const customLesson = lesson as BaseLessonData & {
        communicationMethods?: string[];
        presentationTechniques?: string[];
        culturalContext?: string[];
        digitalPlatforms?: string[];
        assessmentCriteria?: string[];
      };

      if (customLesson.communicationMethods) return customLesson.communicationMethods.join(', ');
      if (customLesson.presentationTechniques) return customLesson.presentationTechniques.join(', ');
      if (customLesson.culturalContext) return customLesson.culturalContext.join(', ');
      if (customLesson.digitalPlatforms) return customLesson.digitalPlatforms.join(', ');
      if (customLesson.assessmentCriteria) return customLesson.assessmentCriteria.join(', ');
      return 'Không có thông tin';
    },
    sidebarContent: (lesson: BaseLessonData) => {
      // Type assertion to access custom fields
      const customLesson = lesson as BaseLessonData & {
        communicationMethods?: string[];
        presentationTechniques?: string[];
        culturalContext?: string[];
        digitalPlatforms?: string[];
        assessmentCriteria?: string[];
      };

      return (
        <div className="space-y-6">
          {customLesson.communicationMethods && (
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-500/20">
              <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                <span>🗣️</span> Communication Methods
              </h4>
              <ul className="space-y-2">
                {customLesson.communicationMethods.map((method: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {customLesson.presentationTechniques && (
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-4 border border-cyan-500/20">
              <h4 className="font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                <span>📊</span> Presentation Techniques
              </h4>
              <ul className="space-y-2">
                {customLesson.presentationTechniques.map((technique: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    {technique}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {customLesson.digitalPlatforms && (
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-400/20">
              <h4 className="font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <span>💻</span> Digital Platforms
              </h4>
              <ul className="space-y-2">
                {customLesson.digitalPlatforms.map((platform: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {customLesson.culturalContext && (
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-4 border border-cyan-400/20">
              <h4 className="font-semibold text-cyan-200 mb-3 flex items-center gap-2">
                <span>🌍</span> Cultural Context
              </h4>
              <ul className="space-y-2">
                {customLesson.culturalContext.map((context: string, index: number) => (
                  <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    {context}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
