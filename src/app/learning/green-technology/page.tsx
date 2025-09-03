import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { greenTechLessons } from '@/data/green-technology';
import { createModuleMetadata } from '@/utils/seo';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import type { GreenTechLesson } from '@/data/green-technology';

// Convert GreenTechLesson to BaseLessonData
function convertGreenTechToBase(lesson: GreenTechLesson): BaseLessonData {
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
    exercises: (lesson.exercises || []).map((exercise) => ({
      title: exercise.title,
      description: exercise.description,
      difficulty: exercise.difficulty,
      solution: exercise.solution,
      materials: exercise.materials,
      procedure: [], // No procedure data available in source
      expectedResults: exercise.expectedResults,
    })),
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: (lesson.caseStudies || []).map((caseStudy) => ({
      title: caseStudy.title,
      organization: caseStudy.organization,
      problem: caseStudy.problem,
      solution: caseStudy.solution,
      impact: caseStudy.impact,
      innovations: caseStudy.innovations,
    })),
    resources: lesson.resources,
  };
}

export const metadata: Metadata = createModuleMetadata(
  'Green Technology & Sustainability - Công nghệ Xanh và Phát triển Bền vững',
  'Khóa học công nghệ xanh: năng lượng tái tạo, smart cities, carbon footprint và sustainable development. Xây dựng tương lai bền vững với K2AiHub.',
  [
    'công nghệ xanh',
    'green technology',
    'năng lượng tái tạo',
    'sustainable development',
    'smart cities',
    'renewable energy',
    'K2AiHub',
  ],
  'green-technology',
);

export default function GreenTechnologyPage() {
  const moduleData = {
    id: 'green-technology',
    title: 'Green Technology & Sustainability',
    subtitle: 'Công nghệ Xanh và Phát triển Bền vững',
    description:
      'Khóa học toàn diện về công nghệ xanh và phát triển bền vững. Học năng lượng tái tạo, smart cities, carbon footprint management và sustainable solutions để xây dựng tương lai xanh cho thế hệ tương lai.',
    level: 'Trung bình',
    duration: '18-22 giờ',
    category: 'Science & Research',
    features: [
      'Renewable Energy Systems (solar, wind, hydro) và grid integration',
      'Smart Cities Technology và IoT environmental monitoring',
      'Carbon Footprint Management và sustainability metrics',
      'Circular Economy Models và waste-to-energy solutions',
    ],
    icon: '🌱',
    color: 'from-green-600 to-emerald-600',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    heroImageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    objectives: [
      'Design và implement renewable energy systems',
      'Develop smart city solutions với IoT và environmental monitoring',
      'Calculate và reduce carbon footprint cho organizations',
      'Create sustainable business models và circular economy strategies',
    ],
    prerequisites: [
      'Kiến thức cơ bản về physics và engineering principles',
      'Hiểu biết về environmental science và climate change',
      'Quen thuộc với data analysis và IoT concepts',
    ],
    careerOutcomes: [
      'Renewable Energy Engineer và Sustainability Consultant',
      'Smart City Solutions Architect và Environmental Data Scientist',
      'CleanTech Entrepreneur và Carbon Footprint Analyst',
      'Green Building Designer và Environmental Policy Specialist',
    ],
    industryApplications: [
      'Renewable Energy Industry và Power Generation',
      'Smart Cities Development và Urban Planning',
      'Corporate Sustainability Programs và ESG Reporting',
      'Environmental Consulting và CleanTech Startups',
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+31%',
      hireDemand: 'Rất cao',
    },
    marketData: {
      marketSize: '$2.5T',
      marketNote: 'Global Green Technology Market 2024',
      jobGrowth: '+31%',
      jobNote: 'Green Jobs Growth Rate',
      reduction: '80%',
      reductionNote: 'CO2 Emissions Reduction Target',
      startups: '1.5K+',
      startupsNote: 'CleanTech Startups Worldwide',
    },
  };

  const convertedLessons = greenTechLessons.map(convertGreenTechToBase);

  return <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />;
}
