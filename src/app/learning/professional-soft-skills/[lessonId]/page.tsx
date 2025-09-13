import { LessonPageTemplate, LessonPageTemplateProps } from '@/components/learning/LessonPageTemplate';
import { professionalSoftSkillsModule } from '@/data/modules/professional-soft-skills';
import { ProfessionalSoftSkillsLesson } from '@/types/lesson-base';
import { createLessonMetadata } from '@/utils/seo';
import { Metadata } from 'next';

interface ProfessionalSoftSkillsLessonPageProps {
  params: { lessonId: string };
}

export async function generateMetadata({ params }: ProfessionalSoftSkillsLessonPageProps): Promise<Metadata> {
  const lesson = professionalSoftSkillsModule.lessons?.find(l => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    professionalSoftSkillsModule.id,
    lesson.id,
    lesson.objectives
  );
}

export default async function ProfessionalSoftSkillsLessonPage({ params }: ProfessionalSoftSkillsLessonPageProps) {
  const config: LessonPageTemplateProps<ProfessionalSoftSkillsLesson>['config'] = {
    moduleName: professionalSoftSkillsModule.id,
    moduleTitle: professionalSoftSkillsModule.title,
    modulePath: `/learning/${professionalSoftSkillsModule.id}`,
    lessons: professionalSoftSkillsModule.lessons || [],
    primaryColor: professionalSoftSkillsModule.primaryColor || '#000000',
    secondaryColor: professionalSoftSkillsModule.primaryColor || '#FFFFFF', // Fallback
    gradientColors: professionalSoftSkillsModule.gradientColors || 'from-gray-700 to-gray-900',
  };

  return <LessonPageTemplate lessonId={params.lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (professionalSoftSkillsModule.lessons || []).map(lesson => ({
    lessonId: lesson.id,
  }));
}
