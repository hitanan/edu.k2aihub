import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  teenWellnessLessons,
  TeenWellnessLessonData,
} from '@/data/teen-wellness';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(teenWellnessLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, teenWellnessLessons);
}

// Page component with standardized config
export default async function TeenWellnessLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<TeenWellnessLessonData> = {
    moduleName: 'teen-wellness',
    moduleTitle: 'Teen Wellness & Mental Health',
    modulePath: '/learning/teen-wellness',
    lessons: teenWellnessLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    getFieldIcon: (field: string) => {
      const icons: Record<string, string> = {
        mentalHealthAreas: '🧠',
        wellnessTechniques: '🌱',
        supportResources: '🤝',
        ageGroup: '👥',
        urgencyLevel: '⚠️',
        professionalSupport: '👨‍⚕️',
      };
      return <span className="text-lg">{icons[field] || '💚'}</span>;
    },
    getFieldValue: (lesson) => {
      if ('mentalHealthAreas' in lesson && lesson.mentalHealthAreas) {
        return lesson.mentalHealthAreas.join(', ');
      }
      if ('wellnessTechniques' in lesson && lesson.wellnessTechniques) {
        return lesson.wellnessTechniques.join(', ');
      }
      if ('supportResources' in lesson && lesson.supportResources) {
        return lesson.supportResources.join(', ');
      }
      if ('ageGroup' in lesson && lesson.ageGroup) {
        return lesson.ageGroup;
      }
      if ('urgencyLevel' in lesson && lesson.urgencyLevel) {
        return lesson.urgencyLevel;
      }
      if (
        'professionalSupport' in lesson &&
        lesson.professionalSupport !== undefined
      ) {
        return lesson.professionalSupport
          ? 'Có thể cần thiết'
          : 'Không bắt buộc';
      }
      return '';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {lesson.ageGroup && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <span className="text-lg mr-2">👥</span>
              Nhóm tuổi
            </h4>
            <p className="text-xl text-green-300">{lesson.ageGroup}</p>
          </div>
        )}

        {lesson.urgencyLevel && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <span className="text-lg mr-2">⚠️</span>
              Mức độ ưu tiên
            </h4>
            <div className="flex items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  lesson.urgencyLevel === 'Critical'
                    ? 'bg-red-500/20 text-red-200'
                    : lesson.urgencyLevel === 'High'
                      ? 'bg-orange-500/20 text-orange-200'
                      : lesson.urgencyLevel === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-200'
                        : 'bg-green-500/20 text-green-200'
                }`}
              >
                {lesson.urgencyLevel}
              </span>
            </div>
          </div>
        )}

        {lesson.professionalSupport !== undefined && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <span className="text-lg mr-2">👨‍⚕️</span>
              Hỗ trợ chuyên nghiệp
            </h4>
            <div className="flex items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  lesson.professionalSupport
                    ? 'bg-blue-500/20 text-blue-200'
                    : 'bg-gray-500/20 text-gray-200'
                }`}
              >
                {lesson.professionalSupport
                  ? 'Có thể cần thiết'
                  : 'Không bắt buộc'}
              </span>
            </div>
          </div>
        )}

        {lesson.mentalHealthAreas && lesson.mentalHealthAreas.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="text-lg mr-2">🧠</span>
              Lĩnh vực sức khỏe tinh thần
            </h4>
            <div className="flex flex-wrap gap-2">
              {lesson.mentalHealthAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {lesson.wellnessTechniques && lesson.wellnessTechniques.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="text-lg mr-2">🌱</span>
              Kỹ thuật wellness
            </h4>
            <div className="space-y-2">
              {lesson.wellnessTechniques.map((technique, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  {technique}
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.supportResources && lesson.supportResources.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <span className="text-lg mr-2">🤝</span>
              Nguồn hỗ trợ
            </h4>
            <div className="space-y-2">
              {lesson.supportResources.map((resource, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {resource}
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
