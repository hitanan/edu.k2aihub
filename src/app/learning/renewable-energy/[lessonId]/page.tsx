import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { renewableEnergyLessons, type RenewableEnergyLesson } from '@/data/renewable-energy';
import { Battery, Zap, Sun, Wind } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(renewableEnergyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, renewableEnergyLessons, 'renewable-energy');
}

// Get icon for energy type field
function getEnergyTypeIcon(energyType?: string) {
  switch (energyType) {
    case 'Solar Power':
      return <Sun className="w-5 h-5 text-yellow-500" />;
    case 'Wind Power':
      return <Wind className="w-5 h-5 text-blue-500" />;
    case 'Energy Storage':
      return <Battery className="w-5 h-5 text-green-500" />;
    case 'Hydropower':
      return <Zap className="w-5 h-5 text-cyan-500" />;
    default:
      return <Zap className="w-5 h-5 text-emerald-500" />;
  }
}

// Page component with standardized config
export default async function RenewableEnergyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<RenewableEnergyLesson> = {
    moduleName: 'renewable-energy',
    moduleTitle: 'Năng Lượng Tái Tạo',
    modulePath: '/learning/renewable-energy',
    lessons: renewableEnergyLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    getFieldIcon: (value?: string) => {
      return getEnergyTypeIcon(value);
    },
    getFieldValue: (lesson: RenewableEnergyLesson) => {
      return lesson.energyType || 'Green Technology';
    },
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
