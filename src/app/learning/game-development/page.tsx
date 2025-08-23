import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { gameDevLessons } from '@/data/game-development';
import { createTitle, createDescription } from '@/utils/seo';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import type { GameDevLesson } from '@/data/game-development';
import { K2Module } from '@/data/moduleNavigation';

// Convert GameDevLesson to BaseLessonData
function convertGameDevToBase(lesson: GameDevLesson): BaseLessonData {
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
    exercises: lesson.exercises.map((exercise) => ({
      title: exercise.title,
      description: exercise.description,
      difficulty: exercise.difficulty,
      solution: exercise.solution,
      materials: exercise.requirements,
      procedure: exercise.hints,
      expectedResults: exercise.expectedOutput,
    })),
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies.map((caseStudy) => ({
      title: caseStudy.title,
      organization: caseStudy.studio,
      problem: caseStudy.challenge,
      solution: caseStudy.solution,
      impact: caseStudy.results,
      innovations: caseStudy.insights,
    })),
    resources: lesson.resources,
  };
}

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle(
      'Game Development & Interactive Media - Phát triển Game và Truyền thông Tương tác',
    ),
    description: createDescription(
      'Khóa học phát triển game toàn diện từ Unity, Unreal Engine đến game design, storytelling và xuất bản. Tạo game 2D/3D chuyên nghiệp với K2AiHub.',
    ),
    keywords: [
      'phát triển game',
      'Unity',
      'Unreal Engine',
      'game design',
      'lập trình game',
      '2D game',
      '3D game',
      'interactive media',
      'K2AiHub',
    ],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Game Development & Interactive Media - K2AiHub',
      description:
        'Học phát triển game từ cơ bản đến nâng cao với Unity, Unreal Engine và game design chuyên nghiệp',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function GameDevelopmentPage() {
  const moduleData = {
    id: 'game-development',
    title: 'Game Development & Interactive Media',
    subtitle: 'Phát triển Game và Truyền thông Tương tác',
    description:
      'Khóa học toàn diện về phát triển game từ concept đến publishing. Học Unity, Unreal Engine, game design, storytelling và monetization để tạo ra những trò chơi chuyên nghiệp và hấp dẫn.',
    level: 'Trung bình',
    duration: '20-25 giờ',
    category: 'Creative Technology',
    features: [
      'Game Engine Mastery (Unity, Unreal Engine) và scripting chuyên sâu',
      'Game Design Principles từ mechanics đến player psychology',
      '2D/3D Development với animation và visual effects',
      'Publishing & Monetization strategies cho multiple platforms',
    ],
    icon: '🎮',
    color: 'from-purple-600 to-pink-600',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    heroImageUrl:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop',
    objectives: [
      'Thành thạo Unity và Unreal Engine cho phát triển game 2D/3D',
      'Thiết kế game mechanics, level design và player experience',
      'Implement storytelling, animation và sound design',
      'Xuất bản và monetize games trên multiple platforms',
    ],
    prerequisites: [
      'Kiến thức cơ bản về lập trình (C# hoặc C++ preferred)',
      'Hiểu biết về toán học 3D và physics cơ bản',
      'Kinh nghiệm với game development tools',
    ],
    careerOutcomes: [
      'Game Developer/Programmer tại studios và indie teams',
      'Game Designer và Level Designer cho AAA titles',
      'Technical Artist và 3D Environment Artist',
      'Independent Game Developer và Indie Studio Founder',
    ],
    industryApplications: [
      'Video Game Industry và Mobile Gaming',
      'Educational Games và Serious Gaming',
      'VR/AR Applications và Metaverse Development',
      'Simulation Software và Training Applications',
    ],
    marketDemand: {
      averageSalary: '20-40 triệu VNĐ',
      jobGrowth: '+23%',
      hireDemand: 'Cao',
    },
    marketData: {
      marketSize: '$321B',
      marketNote: 'Gaming Industry Revenue 2024',
      jobGrowth: '+23%',
      jobNote: 'Game Developer Job Growth',
      reduction: '15M+',
      reductionNote: 'Global Game Developers',
      startups: '2.7K+',
      startupsNote: 'Game Studios Worldwide',
    },
    relatedModules: [
      K2Module.AIArtCreativeTech,
      K2Module.DigitalMarketing,
      K2Module.Python,
    ],
  };

  const convertedLessons = gameDevLessons.map(convertGameDevToBase);

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
