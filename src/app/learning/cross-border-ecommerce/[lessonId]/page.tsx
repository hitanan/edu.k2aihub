import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { crossBorderEcommerceLessons, CrossBorderEcommerceLessonData } from '@/data/cross-border-ecommerce';
import { PageProps } from '@/types';
import { Globe, ShoppingCart, TrendingUp } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(crossBorderEcommerceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, crossBorderEcommerceLessons);
}

// Page component with standardized config
export default async function CrossBorderEcommerceLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<CrossBorderEcommerceLessonData> = {
    moduleName: 'cross-border-ecommerce',
    moduleTitle: 'Thương mại Điện tử Xuyên biên giới',
    modulePath: '/learning/cross-border-ecommerce',
    lessons: crossBorderEcommerceLessons,
    primaryColor: 'emerald',
    secondaryColor: 'green',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'marketSize':
          return <TrendingUp className="w-5 h-5" />;
        case 'platforms':
          return <ShoppingCart className="w-5 h-5" />;
        case 'regulations':
          return <Globe className="w-5 h-5" />;
        default:
          return <Globe className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson) => {
      if (lesson.marketSize) return lesson.marketSize;
      if (lesson.growthRate) return lesson.growthRate;
      if (lesson.platforms) return lesson.platforms.join(', ');
      return '';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-4">
        {lesson.marketSize && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
            <h4 className="text-emerald-400 font-medium mb-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Market Size
            </h4>
            <p className="text-gray-300 text-sm">{lesson.marketSize}</p>
          </div>
        )}

        {lesson.platforms && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="text-green-400 font-medium mb-2 flex items-center">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Key Platforms
            </h4>
            <div className="space-y-1">
              {lesson.platforms.map((platform, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {platform}
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.tools && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-medium mb-2">Tools & Services</h4>
            <div className="space-y-1">
              {lesson.tools.map((tool, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {tool}
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
