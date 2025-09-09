import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { healthcareTechLessons, HealthcareTechLesson } from '@/data/healthcare-tech';

import { createModuleMetadata } from '@/utils/seo';
import { Activity, Shield, Database, Heart, Stethoscope } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(healthcareTechLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return createModuleMetadata(
      'Công Nghệ Y Tế & Sức Khỏe Số',
      'Khám phá các giải pháp công nghệ y tế tiên tiến, từ y tế từ xa đến phân tích dữ liệu và thiết bị IoT.',
      ['công nghệ y tế', 'healthtech', 'y tế số', 'telemedicine', 'K2AI'],
      'healthcare-tech',
    );
  }
  return generateLessonMetadata(lessonId, healthcareTechLessons, 'healthcare-tech');
}

// Page component with healthcare tech-specific configuration
export default async function HealthcareTechLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<HealthcareTechLesson> = {
    moduleName: 'healthcare-tech',
    moduleTitle: 'Công Nghệ Y Tế & Sức Khỏe Số',
    modulePath: '/learning/healthcare-tech',
    lessons: healthcareTechLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-cyan-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'healthcareCategory':
          return <Activity className="w-5 h-5" />;
        case 'regulatoryCompliance':
          return <Shield className="w-5 h-5" />;
        case 'techProficiencyLevel':
          return <Database className="w-5 h-5" />;
        case 'targetAudience':
          return <Heart className="w-5 h-5" />;
        default:
          return <Stethoscope className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: HealthcareTechLesson) => lesson.healthcareCategory,
    sidebarContent: (lesson: HealthcareTechLesson) => (
      <div className="space-y-6">
        <div className="bg-blue-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Healthcare Category
          </h3>
          <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
            {lesson.healthcareCategory}
          </span>
        </div>

        <div className="bg-cyan-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Regulatory Compliance
          </h3>
          <ul className="space-y-2">
            {lesson.regulatoryCompliance?.map((regulation: string, index: number) => (
              <li key={index} className="text-cyan-100 text-sm flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {regulation}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
            <Database className="w-5 h-5 mr-2" />
            Tech Proficiency Level
          </h3>
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm">
            {lesson.techProficiencyLevel}
          </span>
        </div>

        <div className="bg-cyan-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Target Audience
          </h3>
          <div className="flex flex-wrap gap-2">
            {lesson.targetAudience?.map((audience: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-cyan-600 text-cyan-100 rounded text-sm">
                {audience}
              </span>
            ))}
          </div>
        </div>

        {lesson.vietnamContext && (
          <div className="bg-green-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <Stethoscope className="w-5 h-5 mr-2" />
              {lesson.vietnamContext.title}
            </h3>
            <ul className="space-y-2">
              {lesson.vietnamContext.content.map((context: string, index: number) => (
                <li key={index} className="text-green-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {context}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
