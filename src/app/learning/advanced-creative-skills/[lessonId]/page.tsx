import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { advancedCreativeSkillsModuleData, AdvancedCreativeLesson } from '@/data/modules/advanced-creative-skills';

import { Palette, Camera, Mic, PenTool, Video, Briefcase } from 'lucide-react';

const advancedCreativeLessons = advancedCreativeSkillsModuleData.lessons as AdvancedCreativeLesson[];

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(advancedCreativeLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params ?? '';
  return generateLessonMetadata(lessonId, advancedCreativeLessons, 'advanced-creative-skills');
}

// Page component with advanced creative skills-specific configuration
export default async function AdvancedCreativeLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<AdvancedCreativeLesson> = {
    moduleName: 'advanced-creative-skills',
    moduleTitle: 'Advanced Creative Skills',
    modulePath: '/learning/advanced-creative-skills',
    lessons: advancedCreativeLessons,
    primaryColor: 'pink',
    secondaryColor: 'rose',
    gradientColors: 'from-slate-900 via-pink-900 to-rose-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'creativeCategory':
          return <Palette className="w-5 h-5" />;
        case 'softwareTools':
          return <PenTool className="w-5 h-5" />;
        case 'portfolioRequirements':
          return <Camera className="w-5 h-5" />;
        case 'freelancingOpportunities':
          return <Briefcase className="w-5 h-5" />;
        case 'skillLevel':
          return <Video className="w-5 h-5" />;
        default:
          return <Palette className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: AdvancedCreativeLesson) => lesson.creativeCategory,
    sidebarContent: (lesson: AdvancedCreativeLesson) => (
      <div className="space-y-6">
        <div className="bg-pink-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Creative Category
          </h3>
          <span className="inline-block px-3 py-1 bg-pink-600 text-white rounded-full text-sm capitalize">
            {lesson.creativeCategory}
          </span>
        </div>

        <div className="bg-rose-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-rose-300 mb-3 flex items-center">
            <Video className="w-5 h-5 mr-2" />
            Skill Level
          </h3>
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full text-sm">
            {lesson.skillLevel}
          </span>
        </div>

        <div className="bg-pink-950/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-pink-300 mb-3 flex items-center">
            <PenTool className="w-5 h-5 mr-2" />
            Software & Tools
          </h3>
          <div className="space-y-2">
            {lesson.softwareTools?.map((tool: string, index: number) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                <span className="text-pink-100 text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {lesson.portfolioRequirements && (
          <div className="bg-purple-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Portfolio Requirements
            </h3>
            <ul className="space-y-2">
              {lesson.portfolioRequirements.map((requirement: string, index: number) => (
                <li key={index} className="text-purple-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.freelancingOpportunities && (
          <div className="bg-green-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Freelancing Opportunities
            </h3>
            <ul className="space-y-2">
              {lesson.freelancingOpportunities.map((opportunity: string, index: number) => (
                <li key={index} className="text-green-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.vietnameseCreativeIndustry && (
          <div className="bg-blue-950/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
              <Mic className="w-5 h-5 mr-2" />
              Vietnamese Creative Industry
            </h3>
            <ul className="space-y-2">
              {lesson.vietnameseCreativeIndustry.map((insight: string, index: number) => (
                <li key={index} className="text-blue-100 text-sm flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };

  const { lessonId } = await params ?? '';
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
