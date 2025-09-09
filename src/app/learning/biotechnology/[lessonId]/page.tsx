import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  type LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { biotechnologyLessons, type BiotechnologyLesson } from '@/data/biotechnology';

import { Dna, Heart, Leaf, TestTube, Microscope, FlaskConical } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(biotechnologyLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
      description: 'The requested lesson could not be found.',
    };
  }
  return generateLessonMetadata(lessonId, biotechnologyLessons, 'biotechnology');
}

const getFieldIcon = (field: string) => {
  switch (field?.toLowerCase()) {
    case 'genetic engineering':
      return <Dna className="w-5 h-5" />;
    case 'medical biotechnology':
      return <Heart className="w-5 h-5" />;
    case 'agricultural biotechnology':
      return <Leaf className="w-5 h-5" />;
    case 'industrial biotechnology':
      return <TestTube className="w-5 h-5" />;
    default:
      return <Microscope className="w-5 h-5" />;
  }
};

const getFieldValue = (lesson: BiotechnologyLesson) => lesson.biotechField;

const sidebarContent = (lesson: BiotechnologyLesson) => (
  <>
    {lesson.labTechniques && lesson.labTechniques.length > 0 && (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6 sticky top-24">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <FlaskConical className="w-5 h-5 mr-2 text-emerald-400" />
          Lab Techniques
        </h3>
        <div className="space-y-2">
          {lesson.labTechniques.map((technique, index) => (
            <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <span className="text-gray-300 text-sm">{technique}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);

export default async function BiotechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return null;
  }

  const config: LessonPageConfig<BiotechnologyLesson> = {
    moduleName: 'biotechnology',
    moduleTitle: 'Biotechnology & Life Sciences',
    modulePath: '/learning/biotechnology',
    lessons: biotechnologyLessons,
    primaryColor: 'emerald',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: getFieldIcon,
    getFieldValue: getFieldValue,
    sidebarContent: sidebarContent,
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
