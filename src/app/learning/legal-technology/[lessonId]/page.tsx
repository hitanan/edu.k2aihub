import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { legalTechLessons } from '@/data/modules/legal-technology';
import type { LegalTechLesson } from '@/types/lesson-base';
import { Scale, FileText, Search, Shield, Copyright } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(legalTechLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Bài học không tìm thấy',
      description: 'Không thể tìm thấy bài học yêu cầu trong khóa học công nghệ pháp lý.',
    };
  }
  return generateLessonMetadata(lessonId, legalTechLessons, 'legal-technology');
}

// Page component with legal technology-specific configuration
export default async function LegalTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<LegalTechLesson> = {
    moduleName: 'legal-technology',
    moduleTitle: 'Legal Technology',
    modulePath: '/learning/legal-technology',
    lessons: legalTechLessons,
    primaryColor: 'indigo',
    secondaryColor: 'blue',
    gradientColors: 'from-slate-900 via-indigo-900 to-blue-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'legalArea':
          return <Scale className="w-5 h-5" />;
        case 'legalTechTools':
          return <FileText className="w-5 h-5" />;
        case 'complianceRequirements':
          return <Shield className="w-5 h-5" />;
        case 'vietnameseLegalSystem':
          return <Search className="w-5 h-5" />;
        case 'targetLegalProfessionals':
          return <Copyright className="w-5 h-5" />;
        default:
          return <Scale className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: LegalTechLesson) => lesson.legalArea,
    sidebarContent: (lesson: LegalTechLesson) => (
      <div className="space-y-6">
        <div className="bg-indigo-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-300 mb-3 flex items-center">
            <Scale className="w-5 h-5 mr-2" />
            Legal Area
          </h3>
          <span className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-sm capitalize">
            {lesson.legalArea.replace('-', ' ')}
          </span>
        </div>

        <div className="bg-blue-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Legal Tech Tools
          </h3>
          <div className="space-y-2">
            {lesson.legalTechTools?.map((tool, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-blue-100 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-300 mb-3 flex items-center">
            <Copyright className="w-5 h-5 mr-2" />
            Target Legal Professionals
          </h3>
          <div className="flex flex-wrap gap-2">
            {lesson.targetLegalProfessionals?.map((professional, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded text-sm"
              >
                {professional}
              </span>
            ))}
          </div>
        </div>

        {lesson.complianceRequirements && (
          <div className="bg-green-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Compliance Requirements
            </h3>
            <ul className="space-y-2">
              {lesson.complianceRequirements.map((requirement, index) => (
                <li key={index} className="text-green-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.vietnameseLegalSystem && (
          <div className="bg-purple-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Vietnamese Legal System
            </h3>
            <ul className="space-y-2">
              {lesson.vietnameseLegalSystem.map((aspect, index) => (
                <li key={index} className="text-purple-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {aspect}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
