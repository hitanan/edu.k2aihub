import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mobileAppLessons, MobileAppLessonType } from '@/data/mobile-app-development';
import { PageProps } from '@/types';
import { Smartphone, Code, Layers, Target, DollarSign } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(mobileAppLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, mobileAppLessons, 'mobile-app-development');
}

// Page component with mobile app development-specific configuration
export default async function MobileAppLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MobileAppLessonType> = {
    moduleName: 'mobile-app-development',
    moduleTitle: 'Mobile App Development',
    modulePath: '/learning/mobile-app-development',
    lessons: mobileAppLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-pink-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'platform':
          return <Smartphone className="w-5 h-5" />;
        case 'programmingLanguages':
          return <Code className="w-5 h-5" />;
        case 'frameworks':
          return <Layers className="w-5 h-5" />;
        case 'developmentLevel':
          return <Target className="w-5 h-5" />;
        case 'monetizationStrategies':
          return <DollarSign className="w-5 h-5" />;
        default:
          return <Smartphone className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: MobileAppLessonType) => lesson.platform,
    sidebarContent: (lesson: MobileAppLessonType) => (
      <div className="space-y-6">
        <div className="bg-purple-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            Platform
          </h3>
          <span className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
            {lesson.platform}
          </span>
        </div>

        <div className="bg-pink-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Development Level
          </h3>
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm">
            {lesson.developmentLevel}
          </span>
        </div>

        <div className="bg-purple-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
            <Code className="w-5 h-5 mr-2" />
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {lesson.programmingLanguages?.map((lang, index) => (
              <span key={index} className="px-2 py-1 bg-purple-600 text-purple-100 rounded text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-pink-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center">
            <Layers className="w-5 h-5 mr-2" />
            Frameworks & Tools
          </h3>
          <div className="space-y-2">
            {lesson.frameworks?.map((framework, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                <span className="text-pink-100 text-sm">{framework}</span>
              </div>
            ))}
          </div>
        </div>

        {lesson.monetizationStrategies && (
          <div className="bg-green-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Monetization Strategies
            </h3>
            <ul className="space-y-2">
              {lesson.monetizationStrategies.map((strategy, index) => (
                <li key={index} className="text-green-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.vietnameseMobileMarket && (
          <div className="bg-blue-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Vietnamese Mobile Market
            </h3>
            <ul className="space-y-2">
              {lesson.vietnameseMobileMarket.map((insight, index) => (
                <li key={index} className="text-blue-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {insight}
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
