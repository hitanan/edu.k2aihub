import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { semiconductorLessons, SemiconductorLesson } from '@/data/semiconductor-technology'
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert SemiconductorLesson to BaseLessonData
function convertToLesson(semiconductorLesson: SemiconductorLesson): BaseLessonData {
  return {
    id: semiconductorLesson.id,
    title: semiconductorLesson.title,
    description: semiconductorLesson.description,
    duration: semiconductorLesson.duration,
    difficulty: semiconductorLesson.difficulty,
    category: semiconductorLesson.chipType || 'Semiconductor Technology',
    imageUrl: semiconductorLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: semiconductorLesson.videoUrl,
    objectives: semiconductorLesson.objectives,
    prerequisites: semiconductorLesson.prerequisites || ['Basic physics', 'Mathematics'],
    exercises: semiconductorLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: ex.requirements || [],
      procedure: ex.hints || [ex.description],
      expectedResults: ex.expectedOutput || 'Successful completion',
      solution: ex.solution || 'Follow industry best practices'
    })) || [],
    resources: semiconductorLesson.resources || [],
    tools: semiconductorLesson.labTechniques || ['EDA Tools', 'Simulation Software'],
    realWorldApplications: semiconductorLesson.realWorldApplications || [],
    caseStudies: semiconductorLesson.caseStudies?.map(cs => ({
      title: cs.title,
      organization: cs.company,
      problem: cs.challenge,
      solution: cs.solution,
      impact: cs.results,
      innovations: cs.insights || []
    })) || []
  }
}

const convertedLessons = semiconductorLessons.map(convertToLesson);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: { lessonId: string } }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Page component with standardized config
export default async function SemiconductorLessonPage({ params }: { params: { lessonId: string } }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'semiconductor-technology',
    moduleTitle: 'Semiconductor Technology & Microchip Design',
    modulePath: '/learning/semiconductor-technology',
    lessons: convertedLessons,
    primaryColor: 'blue',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-blue-900 to-purple-900',
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
