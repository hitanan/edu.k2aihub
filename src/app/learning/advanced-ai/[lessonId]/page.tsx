import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { advancedAILessons, type AdvancedAILesson } from '@/data/advanced-ai';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Brain, Eye, MessageSquare, Target, Shield } from 'lucide-react';

// Convert AdvancedAILesson to BaseLessonData
function convertToLesson(lesson: AdvancedAILesson): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.innovations || [],
    })),
    resources: lesson.resources,
  };
}

// Convert all lessons to BaseLessonData format
const convertedLessons = advancedAILessons.map(convertToLesson);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons, 'advanced-ai');
}

// Get icon for AI domain field
function getAIDomainIcon(aiDomain: string) {
  switch (aiDomain) {
    case 'Deep Learning':
      return <Brain className="w-5 h-5 text-purple-500" />;
    case 'Computer Vision':
      return <Eye className="w-5 h-5 text-blue-500" />;
    case 'Natural Language Processing':
      return <MessageSquare className="w-5 h-5 text-green-500" />;
    case 'Reinforcement Learning':
      return <Target className="w-5 h-5 text-orange-500" />;
    case 'AI Ethics':
      return <Shield className="w-5 h-5 text-red-500" />;
    default:
      return <Brain className="w-5 h-5 text-indigo-500" />;
  }
}

// Page component with standardized config
export default async function AdvancedAILessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'advanced-ai',
    moduleTitle: 'Advanced AI & Machine Learning',
    modulePath: '/learning/advanced-ai',
    lessons: convertedLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'aiDomain') return getAIDomainIcon('default');
      return <Brain className="w-5 h-5" />;
    },
    getFieldValue: (lesson) => {
      // Find original lesson to get aiDomain
      const originalLesson = advancedAILessons.find((l) => l.id === lesson.id);
      return originalLesson?.aiDomain || 'Advanced AI';
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
