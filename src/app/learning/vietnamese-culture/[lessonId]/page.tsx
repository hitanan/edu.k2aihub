import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseCultureLessons } from '@/data/vietnamese-culture';
import { PageProps } from '@/types';
import { Landmark } from 'lucide-react';

// Extend lesson interface
interface ExtendedVietnameseCultureLesson extends BaseLessonData {
  culturalAspects: string[];
  technologies: string[];
}

// Transform lessons to match BaseLessonData interface
const transformedLessons: ExtendedVietnameseCultureLesson[] =
  vietnameseCultureLessons.map((lesson) => ({
    ...lesson,
    exercises: lesson.exercises.map((exercise) => ({
      ...exercise,
      materials: exercise.requirements || [],
      procedure: exercise.hints || [],
      expectedResults: exercise.expectedOutput || '',
    })),
    caseStudies:
      lesson.caseStudies?.map((cs) => ({
        title: cs.title,
        organization: cs.organization,
        problem: cs.problem,
        solution: cs.solution,
        impact: cs.impact,
        innovations: cs.innovations || [],
      })) || [],
  }));

export async function generateStaticParams() {
  return generateLessonStaticParams(transformedLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, transformedLessons, 'vietnamese-culture');
}

export default async function VietnameseCultureLessonPage({
  params,
}: PageProps) {
  const config: LessonPageConfig<ExtendedVietnameseCultureLesson> = {
    moduleName: 'vietnamese-culture',
    moduleTitle: 'Văn Hóa Việt Nam & Di Sản Số',
    modulePath: '/learning/vietnamese-culture',
    lessons: transformedLessons,
    primaryColor: 'yellow',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-yellow-900 to-slate-900',
    getFieldIcon: () => <Landmark className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.culturalAspects?.[0] || 'Culture',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Cultural Aspects</h4>
        <div className="space-y-2">
          {lesson.culturalAspects?.map((aspect, index) => (
            <div
              key={index}
              className="text-sm text-gray-300 bg-yellow-500/10 p-2 rounded border border-yellow-500/20"
            >
              {aspect}
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-white mb-3 mt-4">Technologies</h4>
        <div className="space-y-2">
          {lesson.technologies?.map((tech, index) => (
            <div
              key={index}
              className="text-xs text-gray-400 bg-white/5 p-2 rounded border border-white/10"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
