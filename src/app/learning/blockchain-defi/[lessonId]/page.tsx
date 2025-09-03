import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { blockchainLessons, BlockchainLesson } from '@/data/blockchain-defi';
import { PageProps } from '@/types';
import { Book, Cpu } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(blockchainLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, blockchainLessons, 'blockchain-defi');
}

const config: LessonPageConfig<BlockchainLesson> = {
  moduleName: 'blockchain-defi',
  moduleTitle: 'Blockchain & DeFi',
  modulePath: '/learning/blockchain-defi',
  lessons: blockchainLessons,
  primaryColor: 'green',
  secondaryColor: 'emerald',
  gradientColors: 'from-gray-900 via-green-900 to-gray-900',
  getFieldIcon: (field) => {
    switch (field) {
      case 'blockchainType':
        return <Book className="w-5 h-5" />;
      case 'frameworks':
        return <Cpu className="w-5 h-5" />;
      default:
        return null;
    }
  },
  sidebarContent: (lesson) => (
    <>
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-green-400 mb-2">Loại Blockchain</h4>
        <p className="text-gray-300">{lesson.blockchainType}</p>
      </div>
      <div>
        <h4 className="font-semibold text-lg text-green-400 mb-2">Frameworks & Công nghệ</h4>
        <div className="flex flex-wrap gap-2">
          {lesson.frameworks.map((tech, index) => (
            <span key={index} className="bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  ),
};

// Page component with standardized config
export default async function BlockchainLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
