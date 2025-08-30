import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  contentCreatorLessons,
  ContentCreatorLessonData,
} from '@/data/content-creator';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(contentCreatorLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, contentCreatorLessons, 'content-creator');
}

// Page component with standardized config
export default async function ContentCreatorLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<ContentCreatorLessonData> = {
    moduleName: 'content-creator',
    moduleTitle: 'Content Creator Academy',
    modulePath: '/learning/content-creator',
    lessons: contentCreatorLessons,
    primaryColor: 'pink',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-pink-900 to-slate-900',
    getFieldIcon: (field: string) => {
      const icons: Record<string, string> = {
        platforms: '📱',
        monetizationMethods: '💰',
        toolsRequired: '🛠️',
        averageIncome: '💵',
        timeToMaster: '⏰',
      };
      return <span className="text-lg">{icons[field] || '📌'}</span>;
    },
    getFieldValue: (lesson) => {
      if ('platforms' in lesson && lesson.platforms) {
        return lesson.platforms.join(', ');
      }
      if ('monetizationMethods' in lesson && lesson.monetizationMethods) {
        return lesson.monetizationMethods.join(', ');
      }
      if ('toolsRequired' in lesson && lesson.toolsRequired) {
        return lesson.toolsRequired.join(', ');
      }
      if ('averageIncome' in lesson && lesson.averageIncome) {
        return lesson.averageIncome;
      }
      if ('timeToMaster' in lesson && lesson.timeToMaster) {
        return lesson.timeToMaster;
      }
      return '';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {lesson.platforms && lesson.platforms.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="text-lg mr-2">📱</span>
              Platforms chính
            </h4>
            <div className="flex flex-wrap gap-2">
              {lesson.platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-500/20 text-pink-200 rounded-full text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}

        {lesson.monetizationMethods &&
          lesson.monetizationMethods.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="text-lg mr-2">💰</span>
                Thu nhập từ
              </h4>
              <div className="space-y-2">
                {lesson.monetizationMethods.map((method, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    {method}
                  </div>
                ))}
              </div>
            </div>
          )}

        {lesson.averageIncome && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <span className="text-lg mr-2">💵</span>
              Thu nhập tiềm năng
            </h4>
            <p className="text-2xl font-bold text-green-400">
              {lesson.averageIncome}
            </p>
          </div>
        )}

        {lesson.timeToMaster && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <span className="text-lg mr-2">⏰</span>
              Thời gian thành thạo
            </h4>
            <p className="text-xl text-purple-300">{lesson.timeToMaster}</p>
          </div>
        )}

        {lesson.toolsRequired && lesson.toolsRequired.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="text-lg mr-2">🛠️</span>
              Tools cần thiết
            </h4>
            <div className="space-y-2">
              {lesson.toolsRequired.map((tool, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
