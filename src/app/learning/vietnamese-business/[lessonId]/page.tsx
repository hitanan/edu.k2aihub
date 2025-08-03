import { Building } from 'lucide-react';
import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig, BaseLessonData } from '@/components/learning/LessonPageTemplate'
import { vietnameseBusinessLessons } from '@/data/vietnamese-business'
import { PageProps } from '@/types';

// Extend VietnameseBusinessLesson to be compatible with BaseLessonData
interface ExtendedVietnameseBusinessLesson extends BaseLessonData {
  businessTopics: string[];
  regulations: string[];
}

// Transform the lessons to match BaseLessonData interface
const transformedLessons: ExtendedVietnameseBusinessLesson[] = vietnameseBusinessLessons.map(lesson => ({
  ...lesson,
  // Ensure all required BaseLessonData fields are present
  exercises: lesson.exercises.map(exercise => ({
    ...exercise,
    materials: exercise.requirements || [],
    procedure: exercise.hints || [],
    expectedResults: exercise.expectedOutput || '',
  })),
  // Map caseStudies to match expected format
  caseStudies: lesson.caseStudies?.map(cs => ({
    title: cs.title,
    organization: cs.company,
    problem: cs.challenge,
    solution: cs.solution,
    impact: cs.results,
    innovations: cs.insights || []
  })) || []
}));

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(transformedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, transformedLessons);
}

// Page component with standardized config
export default async function VietnameseBusinessLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<ExtendedVietnameseBusinessLesson> = {
    moduleName: 'vietnamese-business',
    moduleTitle: 'Vietnamese Business Development',
    modulePath: '/learning/vietnamese-business',
    lessons: transformedLessons,
    primaryColor: 'emerald',
    secondaryColor: 'green',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: () => <Building className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.businessTopics?.[0] || 'Business',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Business Topics</h4>
        <div className="space-y-2">
          {lesson.businessTopics?.map((topic, index) => (
            <div key={index} className="text-sm text-gray-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
              {topic}
            </div>
          ))}
        </div>
        
        <h4 className="font-semibold text-white mb-3 mt-4">Key Regulations</h4>
        <div className="space-y-2">
          {lesson.regulations?.map((regulation, index) => (
            <div key={index} className="text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/10">
              {regulation}
            </div>
          ))}
        </div>
      </div>
    )
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
