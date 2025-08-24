import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { communicationSkillsLessons, CommunicationSkillsLessonType } from '@/data/communication-skills';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(communicationSkillsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, communicationSkillsLessons);
}

// Page component with standardized config
export default async function CommunicationSkillsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<CommunicationSkillsLessonType> = {
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
    getFieldValue: (lesson) => {
      if (lesson.communicationMethods) return lesson.communicationMethods.join(', ');
      if (lesson.presentationTechniques) return lesson.presentationTechniques.join(', ');
      if (lesson.culturalContext) return lesson.culturalContext.join(', ');
      if (lesson.digitalPlatforms) return lesson.digitalPlatforms.join(', ');
      if (lesson.assessmentCriteria) return lesson.assessmentCriteria.join(', ');
      return 'Không có thông tin';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {lesson.communicationMethods && (
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-500/20">
            <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <span>🗣️</span> Communication Methods
            </h4>
            <ul className="space-y-2">
              {lesson.communicationMethods.map((method, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.presentationTechniques && (
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-4 border border-cyan-500/20">
            <h4 className="font-semibold text-cyan-300 mb-3 flex items-center gap-2">
              <span>📊</span> Presentation Techniques
            </h4>
            <ul className="space-y-2">
              {lesson.presentationTechniques.map((technique, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  {technique}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.digitalPlatforms && (
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-400/20">
            <h4 className="font-semibold text-blue-200 mb-3 flex items-center gap-2">
              <span>💻</span> Digital Platforms
            </h4>
            <ul className="space-y-2">
              {lesson.digitalPlatforms.map((platform, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.culturalContext && (
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-4 border border-cyan-400/20">
            <h4 className="font-semibold text-cyan-200 mb-3 flex items-center gap-2">
              <span>🌍</span> Cultural Context
            </h4>
            <ul className="space-y-2">
              {lesson.culturalContext.map((context, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  {context}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
