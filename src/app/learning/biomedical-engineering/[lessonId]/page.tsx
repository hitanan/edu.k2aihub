import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { biomedicalEngineeringLessons, type BiomedicalEngineeringLesson } from '@/data/biomedical-engineering';

import { notFound } from 'next/navigation';
import { Heart, Brain, Dna, Bot, Shield, Activity } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(biomedicalEngineeringLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, biomedicalEngineeringLessons, 'biomedical-engineering');
}

// Icon mapping function for biomedical engineering fields
function getBiomedicalIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    device: <Heart className="w-5 h-5" />,
    signal: <Activity className="w-5 h-5" />,
    imaging: <Brain className="w-5 h-5" />,
    regenerative: <Dna className="w-5 h-5" />,
    robotics: <Bot className="w-5 h-5" />,
    safety: <Shield className="w-5 h-5" />,
    regulatory: <Shield className="w-5 h-5" />,
    clinical: <Heart className="w-5 h-5" />,
  };

  return iconMap[field] || <Heart className="w-5 h-5" />;
}

// Page component with standardized config
export default async function BiomedicalEngineeringLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = biomedicalEngineeringLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const config: LessonPageConfig<BiomedicalEngineeringLesson> = {
    moduleName: 'biomedical-engineering',
    moduleTitle: 'Kỹ thuật Y Sinh',
    modulePath: '/learning/biomedical-engineering',
    lessons: biomedicalEngineeringLessons,
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
    getFieldIcon: (field: string) => getBiomedicalIcon(field),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
