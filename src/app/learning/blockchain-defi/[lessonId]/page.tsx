import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { blockchainLessons, type BlockchainLesson } from '@/data/blockchain-defi'
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Cpu, Shield, Coins, Palette, Scale } from 'lucide-react';

// Convert BlockchainLesson to BaseLessonData
function convertToBaseLessonData(lesson: BlockchainLesson): BaseLessonData {
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
      innovations: study.technologies || []
    })),
    resources: lesson.resources
  };
}

// Convert lessons to BaseLessonData format
const convertedLessons = blockchainLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Icon mapping function for blockchain-specific fields
function getBlockchainIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    'cryptography': <Shield className="w-5 h-5" />,
    'consensus': <Cpu className="w-5 h-5" />,
    'defi': <Coins className="w-5 h-5" />,
    'nft': <Palette className="w-5 h-5" />,
    'regulatory': <Scale className="w-5 h-5" />,
    'security': <Shield className="w-5 h-5" />,
    'development': <Cpu className="w-5 h-5" />
  };
  
  return iconMap[field] || <Cpu className="w-5 h-5" />;
}

// Page component with standardized config
export default async function BlockchainLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'blockchain-defi',
    moduleTitle: 'Blockchain & DeFi Technology',
    modulePath: '/learning/blockchain-defi',
    lessons: convertedLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    getFieldIcon: (field: string) => getBlockchainIcon(field)
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
