import ModulePageTemplate, {
  ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { pythonLessons, PythonLesson } from '@/data/python';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import type { Metadata } from 'next';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle('Học Lập Trình Python - Bài Toán Cơ Bản'),
  description: createDescription(
    'Khóa học Python cơ bản với các bài toán thực tế dành cho học sinh. Từ biến số, vòng lặp đến thuật toán và xử lý dữ liệu',
  ),
  keywords: createKeywords([
    'python',
    'lập trình python',
    'python cơ bản',
    'bài toán python',
    'thuật toán',
    'học sinh',
    'programming',
  ]),
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle('Học Lập Trình Python - Bài Toán Cơ Bản'),
    description: createDescription(
      'Khám phá Python qua các bài toán thực tế và ví dụ dễ hiểu',
    ),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

// Convert PythonLesson to BaseLessonData interface
function convertToLesson(pythonLesson: PythonLesson): BaseLessonData {
  return {
    id: pythonLesson.id,
    title: pythonLesson.title,
    description: pythonLesson.description,
    duration: pythonLesson.duration,
    difficulty: pythonLesson.difficulty,
    category: 'Python Programming',
    imageUrl: '/default-lesson.jpg',
    videoUrl: pythonLesson.videoUrl,
    objectives: pythonLesson.objectives,
    prerequisites: pythonLesson.prerequisites || [
      'Basic computer skills',
      'Logical thinking',
      'Problem-solving mindset',
    ],
    exercises:
      pythonLesson.exercises?.map((ex) => ({
        title: ex.title,
        description: ex.description,
        difficulty: ex.difficulty,
        materials: ex.requirements || [],
        procedure: [ex.solution],
        expectedResults: 'Chương trình chạy thành công và cho kết quả đúng',
        solution: ex.solution,
      })) || [],
    resources: [],
    tools: ['Python 3.x', 'IDE (PyCharm, VS Code)', 'Terminal/Command Prompt'],
    realWorldApplications: pythonLesson.realWorldApplications || [],
    caseStudies: [],
  };
}

export default function PythonPage() {
  // Convert lessons to base interface
  const convertedLessons = pythonLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'Python Programming',
    subtitle: 'Lập Trình Python Cơ Bản',
    description:
      'Học Python qua các bài toán cơ bản và thực tế. Từ syntax cơ bản đến giải thuật và xử lý dữ liệu - nền tảng vững chắc cho lập trình viên tương lai.',
    primaryColor: 'yellow',
    gradientColors: 'from-slate-900 via-yellow-900 to-green-900',
    basePath: '/learning/python',
    heroImageUrl:
      'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${pythonLessons.length}+ bài`,
      duration: '25-30 giờ',
      level: 'Cơ bản → Trung bình',
      projects: '8+ dự án thực hành',
    },
    marketData: {
      marketSize: '#1 Language',
      marketNote: 'Most popular programming language 2024',
      jobGrowth: '25% Growth',
      jobNote: 'Python developer jobs by 2030',
      reduction: '60% Faster',
      reductionNote: 'Development time vs other languages',
      startups: '85% Usage',
      startupsNote: 'Tech companies use Python',
    },
    careerPaths: [
      'Python Developer',
      'Data Scientist',
      'Web Developer (Django/Flask)',
      'AI/ML Engineer',
      'Automation Engineer',
      'Software Developer',
    ],
    technicalHighlights: [
      {
        title: 'Python Fundamentals',
        icon: '🐍',
        items: [
          'Syntax & Variables',
          'Data Types',
          'Control Structures',
          'Functions',
        ],
      },
      {
        title: 'Data Structures',
        icon: '📊',
        items: [
          'Lists & Tuples',
          'Dictionaries',
          'Sets',
          'List Comprehensions',
        ],
      },
      {
        title: 'Problem Solving',
        icon: '🧩',
        items: ['Algorithms', 'Logic Building', 'Debugging', 'Testing'],
      },
      {
        title: 'File Handling',
        icon: '📄',
        items: ['File I/O', 'CSV Processing', 'JSON Data', 'Error Handling'],
      },
      {
        title: 'OOP Basics',
        icon: '🏗️',
        items: ['Classes & Objects', 'Inheritance', 'Encapsulation', 'Methods'],
      },
      {
        title: 'Real Applications',
        icon: '🚀',
        items: [
          'Calculator Apps',
          'Data Analysis',
          'Game Development',
          'Automation Scripts',
        ],
      },
    ],
    relatedModules: [K2Module.Arduino, K2Module.STEM, K2Module.Scratch],
  };

  return (
    <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
  );
}
