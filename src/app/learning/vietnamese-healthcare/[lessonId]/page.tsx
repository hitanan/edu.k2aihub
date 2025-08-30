import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseHealthcareLessons } from '@/data/vietnamese-healthcare';
import { PageProps } from '@/types';
import { Activity } from 'lucide-react';

// Extend lesson interface
interface ExtendedVietnameseHealthcareLesson extends BaseLessonData {
  medicalField: string;
  technologies: string[];
}

// Transform lessons to match BaseLessonData interface
const transformedLessons: ExtendedVietnameseHealthcareLesson[] =
  vietnameseHealthcareLessons.map((lesson) => ({
    ...lesson,
    exercises: lesson.exercises.map((exercise) => ({
      ...exercise,
      materials: exercise.requirements || [],
      procedure: exercise.procedure || [],
      expectedResults: exercise.expectedResults || '',
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
  return generateLessonMetadata(lessonId, transformedLessons, 'vietnamese-healthcare');
}

export default async function VietnameseHealthcareLessonPage({
  params,
}: PageProps) {
  const config: LessonPageConfig<ExtendedVietnameseHealthcareLesson> = {
    moduleName: 'vietnamese-healthcare',
    moduleTitle: 'Công Nghệ Y Tế Việt Nam',
    modulePath: '/learning/vietnamese-healthcare',
    lessons: transformedLessons,
    primaryColor: 'cyan',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-cyan-900 to-slate-900',
    getFieldIcon: () => <Activity className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.medicalField || 'Healthcare',
    sidebarContent: (lesson) => (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3">Medical Field</h4>
        <div className="text-sm text-gray-300 bg-cyan-500/10 p-2 rounded border border-cyan-500/20 mb-4">
          {lesson.medicalField}
        </div>

        <h4 className="font-semibold text-white mb-3">Technologies</h4>
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
