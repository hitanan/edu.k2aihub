import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons, QuantumComputingLessonType } from '@/data/quantum-computing-education';
import { Zap, Atom, TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(quantumComputingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, quantumComputingLessons, 'quantum-computing-education');
}

// Page component with quantum computing-specific configuration
export default async function QuantumComputingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<QuantumComputingLessonType> = {
    moduleName: 'quantum-computing-education',
    moduleTitle: 'Quantum Computing Education',
    modulePath: '/learning/quantum-computing-education',
    lessons: quantumComputingLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldValue: (lesson) => `Concepts: ${lesson.objectives.length}`, // Example, can be more specific
    getFieldIcon: (field: string) => {
      // This is now less critical as getFieldValue is simple, but kept for structure
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
        {/* Quizzes */}
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

        {/* Career Connect */}
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

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
