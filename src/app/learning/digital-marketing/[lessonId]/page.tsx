import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import {
  digitalMarketingLessons,
  DigitalMarketingLesson,
} from '@/data/digital-marketing';
import { PageProps } from '@/types';
import { Palette } from 'lucide-react';

// Generate static params
export async function generateStaticParams() {
  const convertedLessons = digitalMarketingLessons.map(convertToLesson);
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  const convertedLessons = digitalMarketingLessons.map(convertToLesson);
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Convert DigitalMarketingLesson to Lesson interface
function convertToLesson(dmLesson: DigitalMarketingLesson): BaseLessonData {
  return {
    id: dmLesson.id,
    title: dmLesson.title,
    description: dmLesson.description,
    duration: dmLesson.duration,
    difficulty: dmLesson.difficulty,
    imageUrl: dmLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: dmLesson.videoUrl,
    objectives: dmLesson.objectives,
    prerequisites: dmLesson.prerequisites || [],
    exercises: dmLesson.exercises || [],
    resources: dmLesson.resources || [],
    tools: dmLesson.tools || [],
    realWorldApplications: dmLesson.realWorldApplications || [],
    caseStudies: [],
  };
}

// Page component
export default async function DigitalMarketingLessonPage({
  params,
}: PageProps) {
  const { lessonId } = await params;
  // Convert lessons to base Lesson interface
  const convertedLessons = digitalMarketingLessons.map(convertToLesson);

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'digital-marketing',
    moduleTitle: 'Digital Marketing & Creator Economy',
    modulePath: '/learning/digital-marketing',
    lessons: convertedLessons,
    primaryColor: 'blue',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'category':
          return <span className="w-5 h-5">📱</span>;
        case 'duration':
          return <span className="w-5 h-5">⏱️</span>;
        case 'difficulty':
          return <span className="w-5 h-5">🎯</span>;
        case 'tools':
          return <span className="w-5 h-5">🛠️</span>;
        case 'estimatedTime':
          return <span className="w-5 h-5">📅</span>;
        default:
          return <span className="w-5 h-5">📊</span>;
      }
    },
    getFieldValue: (lesson) => {
      // Return category as the main field value for display
      return lesson.category || 'Digital Marketing';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {/* Learning Path Progress */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            📈 Tiến Độ Học Tập
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Hoàn thành</span>
              <span className="text-blue-400 font-semibold">
                {Math.floor(Math.random() * 30 + 20)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${Math.floor(Math.random() * 30 + 20)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Palette className="w-5 h-5 text-purple-400 mr-2" />
            Công cụ cần thiết
          </h3>
          <ul className="space-y-2">
            {lesson.tools?.map((tool, index) => (
              <li key={index} className="text-gray-300 text-sm">
                • {tool as string}
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            📊 Marketing Metrics
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">ROI Trung bình</span>
              <span className="text-green-400 font-semibold">300%+</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Conversion Rate</span>
              <span className="text-blue-400 font-semibold">12-15%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Lead Cost</span>
              <span className="text-purple-400 font-semibold">-60%</span>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        {lesson.tools && lesson.tools.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              🛠️ Tools & Platforms
            </h3>
            <div className="space-y-2">
              {lesson.tools.slice(0, 5).map((tool, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">{tool as string}</span>
                </div>
              ))}
              {lesson.tools.length > 5 && (
                <div className="text-xs text-gray-400 italic">
                  +{lesson.tools.length - 5} tools khác...
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
          <h3 className="text-yellow-300 font-semibold mb-3 flex items-center">
            💡 Quick Tips
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• Luôn test A/B các campaigns</p>
            <p>• Track metrics hàng ngày</p>
            <p>• Optimize cho mobile-first</p>
            <p>• Sử dụng automation tools</p>
          </div>
        </div>

        {/* Industry Insights */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
          <h3 className="text-purple-300 font-semibold mb-3 flex items-center">
            🚀 Industry Insights
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• Video content có ROI cao nhất</p>
            <p>• Mobile traffic chiếm 60%+</p>
            <p>• AI automation tăng 40% hiệu quả</p>
          </div>
        </div>
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
