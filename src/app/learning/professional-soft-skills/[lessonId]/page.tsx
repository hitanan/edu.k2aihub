import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { professionalSoftSkillsLessons, ProfessionalSoftSkillsLesson } from '@/data/professional-soft-skills';
import { PageProps } from '@/types';
import { Users, MessageSquare, Target, Clock, Trophy } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(professionalSoftSkillsLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, professionalSoftSkillsLessons, 'professional-soft-skills');
}

export default async function ProfessionalSoftSkillsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<ProfessionalSoftSkillsLesson> = {
    moduleName: 'professional-soft-skills',
    moduleTitle: 'Kỹ Năng Mềm & Giao Tiếp Chuyên Nghiệp',
    modulePath: '/learning/professional-soft-skills',
    lessons: professionalSoftSkillsLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'category':
          return <Target className="w-5 h-5" />;
        case 'skillLevel':
          return <Trophy className="w-5 h-5" />;
        case 'vietnameseContext':
          return <Users className="w-5 h-5" />;
        case 'practicalExercises':
          return <MessageSquare className="w-5 h-5" />;
        default:
          return <Clock className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson) => lesson.category,
    sidebarContent: (lesson) => (
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Bối Cảnh Việt Nam</h4>
          <ul className="space-y-1 text-sm">
            {lesson.vietnameseContext.map((context, index) => (
              <li key={index} className="text-blue-800 dark:text-blue-200">• {context}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Bài Tập Thực Hành</h4>
          <ul className="space-y-1 text-sm">
            {lesson.practicalExercises.map((exercise, index) => (
              <li key={index} className="text-indigo-800 dark:text-indigo-200">• {exercise}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}