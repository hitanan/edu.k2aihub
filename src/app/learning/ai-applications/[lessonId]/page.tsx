import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { AIApplicationLessons, AIApplicationLessonData } from '@/data/ai-applications';
import { PageProps } from '@/types';
import { Bot, Briefcase, Building, Target, TrendingUp } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(AIApplicationLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, AIApplicationLessons);
}

// Custom icon mapping for AI Applications fields
function getAIAppFieldIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    aiTools: <Bot className="w-5 h-5" />,
    practicalUses: <Target className="w-5 h-5" />,
    industries: <Building className="w-5 h-5" />,
    outcomes: <TrendingUp className="w-5 h-5" />,
  };
  return iconMap[field] || <Bot className="w-5 h-5" />;
}

// Custom sidebar content for AI Applications lessons
function AIAppSidebarContent({ lesson }: { lesson: AIApplicationLessonData }) {
  return (
    <div className="space-y-4">
      {lesson.skillLevel && (
        <div className="bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <h4 className="font-semibold text-purple-300">Skill Level</h4>
          </div>
          <p className="text-sm text-gray-300">{lesson.skillLevel}</p>
        </div>
      )}

      {lesson.aiTools && lesson.aiTools.length > 0 && (
        <div className="bg-blue-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-5 h-5 text-blue-400" />
            <h4 className="font-semibold text-blue-300">AI Tools</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.aiTools.map((tool, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.practicalUses && lesson.practicalUses.length > 0 && (
        <div className="bg-green-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-400" />
            <h4 className="font-semibold text-green-300">Practical Uses</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.practicalUses.map((use, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.industries && lesson.industries.length > 0 && (
        <div className="bg-orange-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Building className="w-5 h-5 text-orange-400" />
            <h4 className="font-semibold text-orange-300">Industries</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.industries.map((industry, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.outcomes && lesson.outcomes.length > 0 && (
        <div className="bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h4 className="font-semibold text-purple-300">Expected Outcomes</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Page component with standardized config
export default async function AIApplicationLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<AIApplicationLessonData> = {
    moduleName: 'ai-applications',
    moduleTitle: 'AI Applications - Ứng dụng AI thực tế',
    modulePath: '/learning/ai-applications',
    lessons: AIApplicationLessons,
    primaryColor: 'purple',
    secondaryColor: 'blue',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: getAIAppFieldIcon,
    sidebarContent: (lesson) => <AIAppSidebarContent lesson={lesson} />,
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
