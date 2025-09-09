import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { stemLessons, type StemLesson } from '@/data/stem';

import { TestTube, Target, User, Play, Lightbulb } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(stemLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, stemLessons, 'stem');
}

// Get icon for category field
function getCategoryIcon(category?: string) {
  switch (category) {
    case 'science':
      return <TestTube className="w-5 h-5" />;
    case 'technology':
      return <Target className="w-5 h-5" />;
    case 'engineering':
      return <User className="w-5 h-5" />;
    case 'mathematics':
      return <Play className="w-5 h-5" />;
    case 'arts':
      return <Lightbulb className="w-5 h-5" />;
    default:
      return <TestTube className="w-5 h-5" />;
  }
}

// Page component with standardized config
export default async function StemLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<StemLesson> = {
    moduleName: 'stem',
    moduleTitle: 'Giáo dục STEM',
    modulePath: '/learning/stem',
    lessons: stemLessons,
    primaryColor: 'pink',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-pink-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'category') {
        // We need to find the lesson to get the category value
        // This is not ideal, but necessary with the current structure
        const lesson = stemLessons.find((l) => l.id === lessonId);
        return getCategoryIcon(lesson?.category);
      }
      return <TestTube className="w-5 h-5" />;
    },
    getFieldValue: (lesson) => {
      return lesson.category;
    },
    sidebarContent: (lesson) => (
      <>
        {lesson.materials && lesson.materials.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TestTube className="w-5 h-5 text-pink-400 mr-2" />
              Vật liệu cần thiết
            </h3>
            <ul className="space-y-2">
              {lesson.materials.map((material, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {material}
                </li>
              ))}
            </ul>
          </div>
        )}
        {lesson.competitions && lesson.competitions.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">🏆 Cuộc thi liên quan</h3>
            <ul className="space-y-2">
              {lesson.competitions.map((competition, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {competition}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
