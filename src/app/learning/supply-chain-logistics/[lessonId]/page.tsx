import type { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { supplyChainLogisticsLessons, SupplyChainLogisticsLesson } from '@/data/supply-chain-logistics';

export async function generateStaticParams() {
  return supplyChainLogisticsLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export const metadata: Metadata = {
  title: 'Supply Chain Logistics Lesson',
  description: 'Learn advanced supply chain and logistics management techniques',
};

type Params = {
  lessonId: string;
};

export default async function SupplyChainLogisticsLessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = await params;
  
  const config: LessonPageConfig<SupplyChainLogisticsLesson> = {
    moduleName: 'supply-chain-logistics',
    moduleTitle: 'Supply Chain & Logistics',
    modulePath: '/learning/supply-chain-logistics',
    lessons: supplyChainLogisticsLessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900'
  };

  return (
    <LessonPageTemplate<SupplyChainLogisticsLesson>
      lessonId={lessonId}
      config={config}
    />
  );
}