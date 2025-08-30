import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { BlockchainLessons, type BlockchainLessonData } from '@/data/blockchain-technology';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Shield, Link2, Database, Cpu } from 'lucide-react';

// Convert BlockchainLessonData to BaseLessonData
function convertToBaseLessonData(lesson: BlockchainLessonData): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.innovations || [],
    })),
    resources: lesson.resources,
  };
}

// Convert lessons to BaseLessonData format
const convertedLessons = BlockchainLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons, 'blockchain-technology');
}

// Icon mapping function for blockchain fields
function getBlockchainIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    security: <Shield className="w-5 h-5" />,
    network: <Link2 className="w-5 h-5" />,
    data: <Database className="w-5 h-5" />,
    processing: <Cpu className="w-5 h-5" />,
  };
  return iconMap[field] || <Link2 className="w-5 h-5" />;
}

// Page component with standardized config
export default async function BlockchainTechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'blockchain-technology',
    moduleTitle: 'Blockchain Technology',
    modulePath: '/learning/blockchain-technology',
    lessons: convertedLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => getBlockchainIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
