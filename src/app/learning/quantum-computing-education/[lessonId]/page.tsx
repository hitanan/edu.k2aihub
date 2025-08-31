import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons, QuantumComputingLessonType } from '@/data/quantum-computing-education';
import { PageProps } from '@/types';
import { Zap, Atom, Cpu, Shield, TrendingUp } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(quantumComputingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, quantumComputingLessons, 'quantum-computing-education');
}

// Page component with quantum computing-specific configuration
export default async function QuantumComputingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<QuantumComputingLessonType> = {
    moduleName: 'quantum-computing-education',
    moduleTitle: 'Quantum Computing Education',
    modulePath: '/learning/quantum-computing-education',
    lessons: quantumComputingLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'quantumConcepts':
          return <Atom className="w-5 h-5" />;
        case 'practicalApplications':
          return <Zap className="w-5 h-5" />;
        case 'programmingTools':
          return <Cpu className="w-5 h-5" />;
        case 'industryUseCase':
          return <TrendingUp className="w-5 h-5" />;
        case 'requiredMath':
          return <Shield className="w-5 h-5" />;
        default:
          return <Zap className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: QuantumComputingLessonType) => {
      const fields = [];
      if (lesson.quantumConcepts) fields.push(`Quantum Concepts: ${lesson.quantumConcepts.join(', ')}`);
      if (lesson.practicalApplications) fields.push(`Applications: ${lesson.practicalApplications.join(', ')}`);
      if (lesson.programmingTools) fields.push(`Tools: ${lesson.programmingTools.join(', ')}`);
      if (lesson.industryUseCase) fields.push(`Industry Case: ${lesson.industryUseCase}`);
      if (lesson.requiredMath) fields.push(`Math Requirements: ${lesson.requiredMath.join(', ')}`);
      return fields.join(' | ');
    },
    sidebarContent: (lesson: QuantumComputingLessonType) => (
      <div className="space-y-6">
        {/* Quantum Concepts */}
        {lesson.quantumConcepts && lesson.quantumConcepts.length > 0 && (
          <div>
            <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Concepts
            </h4>
            <div className="space-y-1">
              {lesson.quantumConcepts.map((concept: string, index: number) => (
                <div key={index} className="text-sm text-gray-300 bg-purple-900/20 px-3 py-2 rounded-lg">
                  {concept}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programming Tools */}
        {lesson.programmingTools && lesson.programmingTools.length > 0 && (
          <div>
            <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
              <Cpu className="w-4 h-4 mr-2" />
              Programming Tools
            </h4>
            <div className="space-y-1">
              {lesson.programmingTools.map((tool: string, index: number) => (
                <div key={index} className="text-sm text-gray-300 bg-indigo-900/20 px-3 py-2 rounded-lg">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Required Math */}
        {lesson.requiredMath && lesson.requiredMath.length > 0 && (
          <div>
            <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Math Requirements
            </h4>
            <div className="space-y-1">
              {lesson.requiredMath.map((math: string, index: number) => (
                <div key={index} className="text-sm text-gray-300 bg-emerald-900/20 px-3 py-2 rounded-lg">
                  {math}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industry Use Case */}
        {lesson.industryUseCase && (
          <div>
            <h4 className="font-semibold text-amber-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Industry Case Study
            </h4>
            <div className="text-sm text-gray-300 bg-amber-900/20 p-3 rounded-lg">
              {lesson.industryUseCase}
            </div>
          </div>
        )}

        {/* Practical Applications */}
        {lesson.practicalApplications && lesson.practicalApplications.length > 0 && (
          <div>
            <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Practical Applications
            </h4>
            <div className="space-y-1">
              {lesson.practicalApplications.map((app: string, index: number) => (
                <div key={index} className="text-sm text-gray-300 bg-cyan-900/20 px-3 py-2 rounded-lg">
                  {app}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}