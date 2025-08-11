import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { stemLessons, type STEMLesson } from '@/data/stem';
import { K2Module } from '@/data/moduleNavigation';

// Convert STEMLesson to BaseLessonData interface
function convertToLesson(stemLesson: STEMLesson): BaseLessonData {
  return {
    id: stemLesson.id,
    title: stemLesson.title,
    description: stemLesson.description,
    duration: stemLesson.duration,
    difficulty: stemLesson.difficulty,
    category: stemLesson.category.toUpperCase(),
    imageUrl: stemLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: stemLesson.videoUrl,
    objectives: stemLesson.objectives,
    prerequisites: [
      'Basic curiosity',
      'Open mindset',
      'Willingness to explore',
    ],
    exercises:
      stemLesson.exercises?.map((ex) => ({
        title: ex.title,
        description: ex.description,
        difficulty: ex.difficulty,
        materials: ex.materials || stemLesson.materials || [],
        procedure: ex.procedure || [ex.description],
        expectedResults:
          ex.expectedResults || 'Successful completion of experiment',
        solution: ex.hints?.join(' ') || 'Follow the procedure carefully',
      })) || [],
    resources: [],
    tools: stemLesson.materials || [
      'Basic materials',
      'Creativity',
      'Scientific method',
    ],
    realWorldApplications: stemLesson.realWorldApplications || [],
    caseStudies: [],
  };
}

export default function STEMPage() {
  // Convert lessons to base interface
  const convertedLessons = stemLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'STEM Education',
    subtitle: 'Khoa Học - Công Nghệ - Kỹ Thuật - Toán Học',
    description:
      'Khám phá thế giới STEM/STEAM qua các bài học thực hành thú vị. Từ thí nghiệm khoa học đến lập trình, kỹ thuật và nghệ thuật sáng tạo - phát triển tư duy khoa học và sáng tạo.',
    primaryColor: 'green',
    gradientColors: 'from-slate-900 via-green-900 to-blue-900',
    basePath: '/learning/stem',
    heroImageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${stemLessons.length}+ bài`,
      duration: '25-30 giờ',
      level: 'Từ cơ bản đến nâng cao',
      projects: '15+ thí nghiệm thực hành',
    },
    marketData: {
      marketSize: '$18.6 Trillion',
      marketNote: 'Global STEM market by 2025',
      jobGrowth: '18.7% Growth',
      jobNote: 'STEM jobs faster than average',
      reduction: '65% Higher',
      reductionNote: 'STEM graduate salaries',
      startups: '2.4 Million',
      startupsNote: 'STEM jobs in the US',
    },
    careerPaths: [
      'Data Scientist',
      'Research Engineer',
      'Software Developer',
      'Biomedical Engineer',
      'Environmental Scientist',
      'Robotics Engineer',
    ],
    technicalHighlights: [
      {
        title: 'Scientific Method',
        icon: '🔬',
        items: [
          'Hypothesis Formation',
          'Experiment Design',
          'Data Collection',
          'Analysis & Conclusion',
        ],
      },
      {
        title: 'Technology Integration',
        icon: '💻',
        items: [
          'Programming Concepts',
          'Digital Tools',
          'AI & Machine Learning',
          'IoT Applications',
        ],
      },
      {
        title: 'Engineering Design',
        icon: '🏗️',
        items: [
          'Problem Identification',
          'Solution Design',
          'Prototyping',
          'Testing & Iteration',
        ],
      },
      {
        title: 'Mathematical Modeling',
        icon: '🔢',
        items: [
          'Statistical Analysis',
          'Pattern Recognition',
          'Geometric Principles',
          'Logical Reasoning',
        ],
      },
      {
        title: 'Creative Arts',
        icon: '🎨',
        items: [
          'Design Thinking',
          'Visual Communication',
          'Artistic Expression',
          'Innovation Methods',
        ],
      },
      {
        title: 'Real-World Applications',
        icon: '🌍',
        items: [
          'Environmental Solutions',
          'Medical Technology',
          'Space Exploration',
          'Smart Cities',
        ],
      },
    ],
    relatedModules: [K2Module.Scratch, K2Module.Python, K2Module.Arduino],
  };

  return (
    <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
  );
}
