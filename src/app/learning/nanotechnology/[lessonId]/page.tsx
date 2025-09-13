import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { nanotechnologyModule } from '@/data/modules/nanotechnology';
import { NanotechnologyLesson } from '@/types/lesson-base';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

export async function generateStaticParams() {
  return generateLessonStaticParams(nanotechnologyModule.lessons || []);
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  return generateLessonMetadata(params.lessonId, nanotechnologyModule.lessons || [], nanotechnologyModule.id);
}

const config: LessonPageConfig<NanotechnologyLesson> = {
  moduleName: 'nanotechnology',
  moduleTitle: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
  modulePath: '/learning/nanotechnology',
  lessons: nanotechnologyModule.lessons || [],
  primaryColor: 'purple',
  secondaryColor: 'violet',
  gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  sidebarContent: (lesson: NanotechnologyLesson) => (
    <div className="space-y-6">
      {lesson.nanotechApplications && (
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">🔬 Ứng Dụng Nano</h4>
          <ul className="space-y-2">
            {lesson.nanotechApplications.slice(0, 3).map((app: string, index: number) => (
              <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-purple-400">•</span>
                {app}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ),
};

export default async function NanotechnologyLessonPage({ params }: LessonPageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
