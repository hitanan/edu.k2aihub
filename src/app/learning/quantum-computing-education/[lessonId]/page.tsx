import { LessonPageTemplate, LessonPageTemplateProps } from '@/components/learning/LessonPageTemplate';
import { quantumComputingEducationModule } from '@/data/modules/quantum-computing-education';
import { QuantumComputingEducationLesson } from '@/types/lesson-base';
import { createLessonMetadata } from '@/utils/seo';
import { Metadata } from 'next';
import { Atom, TrendingUp, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface QuantumComputingLessonPageProps {
  params: { lessonId: string };
}

export async function generateMetadata({ params }: QuantumComputingLessonPageProps): Promise<Metadata> {
  const lesson = quantumComputingEducationModule.lessons?.find(l => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    quantumComputingEducationModule.id,
    lesson.id,
    lesson.objectives
  );
}

export default async function QuantumComputingLessonPage({ params }: QuantumComputingLessonPageProps) {
  const config: LessonPageTemplateProps<QuantumComputingEducationLesson>['config'] = {
    moduleName: quantumComputingEducationModule.id,
    moduleTitle: quantumComputingEducationModule.title,
    modulePath: `/learning/${quantumComputingEducationModule.id}`,
    lessons: quantumComputingEducationModule.lessons || [],
    primaryColor: quantumComputingEducationModule.primaryColor || '#A855F7',
    secondaryColor: quantumComputingEducationModule.primaryColor || '#A855F7', // Fallback
    gradientColors: quantumComputingEducationModule.gradientColors || 'from-purple-600 to-violet-700',
    getFieldValue: (lesson) => `Concepts: ${lesson.objectives.length}`,
    getFieldIcon: (field: string): ReactNode => {
      switch (field) {
        case 'quantumConcepts':
          return <Atom className="w-5 h-5" />;
        case 'practicalApplications':
          return <Zap className="w-5 h-5" />;
        default:
          return <Zap className="w-5 h-5" />;
      }
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {lesson.quizzes && lesson.quizzes.length > 0 && (
          <div>
            <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
              <Atom className="w-4 h-4 mr-2" />
              Quick Quiz
            </h4>
            <div className="space-y-2">
              {lesson.quizzes.slice(0, 1).map((quiz, index) => (
                <div key={index} className="text-sm text-gray-300 bg-purple-900/20 px-3 py-2 rounded-lg">
                  <p className="font-bold">{quiz.question}</p>
                  <p className="text-xs italic mt-1">{quiz.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {lesson.careerConnect && (
          <div>
            <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Career Connect
            </h4>
            <div className="text-sm text-gray-300 bg-emerald-900/20 p-3 rounded-lg">
              <p className="font-bold">{lesson.careerConnect.name}</p>
              <p className="text-xs">{lesson.careerConnect.title}</p>
              <p className="text-xs italic mt-1">&ldquo;{lesson.careerConnect.quote}&rdquo;</p>
            </div>
          </div>
        )}
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={params.lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (quantumComputingEducationModule.lessons || []).map(lesson => ({
    lessonId: lesson.id,
  }));
}
