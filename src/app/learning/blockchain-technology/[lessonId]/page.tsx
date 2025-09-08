import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { BlockchainLessons, type BlockchainTechnologyLesson } from '@/data/blockchain-technology';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Shield, Link2, Database, Cpu } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(BlockchainLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, BlockchainLessons, 'blockchain-technology');
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
  const { lessonId } = params;
  const lesson = BlockchainLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const config: LessonPageConfig<BlockchainTechnologyLesson> = {
    moduleName: 'blockchain-technology',
    moduleTitle: 'Công nghệ Blockchain',
    modulePath: '/learning/blockchain-technology',
    lessons: BlockchainLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => getBlockchainIcon(field),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
