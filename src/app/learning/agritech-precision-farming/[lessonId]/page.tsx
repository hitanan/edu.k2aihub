import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { AgriTechLessons, AgriTechLessonData } from '@/data/modules/agritech-precision-farming';
import { getLessonById } from '@/utils/lesson-utils';

import { Sprout, Wifi, Drone, Cpu } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(AgriTechLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const lesson = getLessonById(AgriTechLessons, lessonId);
  if (!lesson) {
    notFound();
  }
  return generateLessonMetadata(lessonId, AgriTechLessons, 'agritech-precision-farming');
}

const config: LessonPageConfig<AgriTechLessonData> = {
  moduleName: 'agritech-precision-farming',
  moduleTitle: 'AgriTech & Nông nghiệp Chính xác',
  modulePath: '/learning/agritech-precision-farming',
  lessons: AgriTechLessons,
  primaryColor: 'green',
  secondaryColor: 'bg-green-700',
  gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  getFieldIcon: (field: string) => {
    switch (field) {
      case 'cropType':
        return <Sprout className="w-5 h-5" />;
      case 'farmSize':
        return <Wifi className="w-5 h-5" />;
      case 'technologyLevel':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Drone className="w-5 h-5" />;
    }
  },
  getFieldValue: (lesson) => lesson.cropType || lesson.farmSize || lesson.technologyLevel || 'N/A',
  sidebarContent: (lesson) => (
    <div className="space-y-4">
      {lesson.cropType && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-400 mb-2 flex items-center">
            <Sprout className="w-5 h-5 mr-2" />
            Loại Cây trồng
          </h4>
          <p className="text-gray-300 text-sm">{lesson.cropType}</p>
        </div>
      )}

      {lesson.farmSize && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-blue-400 mb-2 flex items-center">
            <Wifi className="w-5 h-5 mr-2" />
            Quy mô Nông trại
          </h4>
          <p className="text-gray-300 text-sm">{lesson.farmSize}</p>
        </div>
      )}

      {lesson.technologyLevel && (
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-purple-400 mb-2 flex items-center">
            <Cpu className="w-5 h-5 mr-2" />
            Mức độ Công nghệ
          </h4>
          <p className="text-gray-300 text-sm">{lesson.technologyLevel}</p>
        </div>
      )}

      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
        <h4 className="font-semibold text-green-400 mb-2">💰 Cơ hội Thị trường</h4>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300">
            <span className="text-green-400 font-medium">Thị trường:</span> $3-8 tỷ USD
          </p>
          <p className="text-gray-300">
            <span className="text-green-400 font-medium">Tăng trưởng:</span> +40%/năm
          </p>
          <p className="text-gray-300">
            <span className="text-green-400 font-medium">Cơ hội:</span> Nông nghiệp 4.0
          </p>
        </div>
      </div>
    </div>
  ),
};

export default async function AgriTechLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate<AgriTechLessonData> lessonId={lessonId} config={config} />;
}
