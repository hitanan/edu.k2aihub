import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { professionalSoftSkillsLessons } from '@/data/professional-soft-skills';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(professionalSoftSkillsLessons);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, professionalSoftSkillsLessons, 'professional-soft-skills');
}

export default function ProfessionalSoftSkillsLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  return (
    <LessonPageTemplate
      lessonId={lessonId}
      config={{
        moduleName: 'professional-soft-skills',
        moduleTitle: 'Kỹ Năng Mềm Chuyên Nghiệp',
        modulePath: '/learning/professional-soft-skills',
        lessons: professionalSoftSkillsLessons,
        primaryColor: 'sky',
        secondaryColor: 'indigo',
        gradientColors: 'from-sky-900 via-indigo-900 to-slate-900',
      }}
    />
  );
}
