import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { criticalThinkingLessons, CriticalThinkingLessonType } from '@/data/critical-thinking';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(criticalThinkingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
    };
  }
  return generateLessonMetadata(lessonId, criticalThinkingLessons, 'critical-thinking');
}

// Page component with standardized config
export default function CriticalThinkingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<CriticalThinkingLessonType> = {
    moduleName: 'critical-thinking',
    moduleTitle: 'Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo',
    modulePath: '/learning/critical-thinking',
    lessons: criticalThinkingLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => {
      const icons: Record<string, React.ReactNode> = {
        thinkingFrameworks: <span className="text-purple-400">🧩</span>,
        cognitiveSkills: <span className="text-pink-400">🧠</span>,
        practicalExercises: <span className="text-purple-300">💡</span>,
        assessmentMethods: <span className="text-pink-300">📊</span>,
      };
      return icons[field] || <span className="text-purple-400">🔷</span>;
    },
    getFieldValue: (lesson) => {
      if (lesson.thinkingFrameworks) return lesson.thinkingFrameworks.join(', ');
      if (lesson.cognitiveSkills) return lesson.cognitiveSkills.join(', ');
      if (lesson.practicalExercises) return lesson.practicalExercises.map((ex) => ex.title).join(', ');
      if (lesson.assessmentMethods) return lesson.assessmentMethods.join(', ');
      return 'Không có thông tin';
    },
    sidebarContent: (lesson: CriticalThinkingLessonType) => (
      <div className="space-y-6">
        {lesson.thinkingFrameworks && (
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-500/20">
            <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
              <span>🧩</span> Thinking Frameworks
            </h4>
            <ul className="space-y-2">
              {lesson.thinkingFrameworks.map((framework: string, index: number) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                  {framework}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.cognitiveSkills && (
          <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-4 border border-pink-500/20">
            <h4 className="font-semibold text-pink-300 mb-3 flex items-center gap-2">
              <span>🧠</span> Cognitive Skills
            </h4>
            <ul className="space-y-2">
              {lesson.cognitiveSkills.map((skill: string, index: number) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.practicalExercises && (
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-400/20">
            <h4 className="font-semibold text-purple-200 mb-3 flex items-center gap-2">
              <span>💡</span> Practical Exercises
            </h4>
            <div className="space-y-3">
              {lesson.practicalExercises.map((exercise, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-3">
                  <h5 className="font-medium text-gray-200 text-sm">{exercise.title}</h5>
                  <p className="text-xs text-gray-400 mt-1">{exercise.scenario}</p>
                  <div className="text-xs text-purple-300 mt-2">Application: {exercise.realWorldApplication}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  };
  const { lessonId } = params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
