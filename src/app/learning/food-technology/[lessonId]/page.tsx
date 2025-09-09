import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { foodTechnologyLessons, type FoodTechnologyLesson } from '@/data/food-technology';

import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';
import { Shield, FlaskConical, ChefHat, Leaf, Utensils, Beaker } from 'lucide-react';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(foodTechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(lessonId, foodTechnologyLessons, 'food-technology');
}

// Icon mapping function for food technology fields
function getFoodTechIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    safety: <Shield className="w-5 h-5" />,
    fermentation: <FlaskConical className="w-5 h-5" />,
    molecular: <ChefHat className="w-5 h-5" />,
    sustainable: <Leaf className="w-5 h-5" />,
    processing: <Utensils className="w-5 h-5" />,
    biotechnology: <Beaker className="w-5 h-5" />,
  };

  return iconMap[field] || <Utensils className="w-5 h-5" />;
}

// Page component with standardized config
export default async function FoodTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<FoodTechnologyLesson> = {
    moduleName: 'food-technology',
    moduleTitle: 'Food Technology',
    modulePath: '/learning/food-technology',
    lessons: foodTechnologyLessons,
    primaryColor: 'amber',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-amber-900 to-slate-900',
    getFieldIcon: (field: string) => getFoodTechIcon(field),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
