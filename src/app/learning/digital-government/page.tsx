import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalGovLessons } from '@/data/digital-government';
import { K2Module } from '@/data/k2-modules';
import { createModuleMetadata } from '@/utils/seo';
import { BaseLessonData } from '@/types/lesson-base';
import type { DigitalGovLesson } from '@/data/digital-government';

// Convert DigitalGovLesson to BaseLessonData
function convertDigitalGovToBase(lesson: DigitalGovLesson): BaseLessonData {
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
      organization: caseStudy.government,
      problem: caseStudy.challenge,
      solution: caseStudy.solution,
      impact: caseStudy.results,
      innovations: caseStudy.insights,
    })),
    resources: lesson.resources,
  };
}

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Digital Government & Civic Technology - K2AiHub',
  'Khóa học chính phủ điện tử và công nghệ công dân: smart city, e-governance, IoT monitoring và civic engagement platforms. Xây dựng dịch vụ công kỹ thuật số.',
  [
    'chính phủ điện tử',
    'smart city vietnam',
    'e governance',
    'civic technology',
    'dịch vụ công trực tuyến',
    'công nghệ công dân',
    'K2AiHub',
  ],
  'digital-government',
);

export default function DigitalGovernmentPage() {
  const moduleData = {
    id: 'digital-government',
    title: 'Digital Government & Civic Technology',
    subtitle: 'Chính phủ Điện tử và Công nghệ Công dân',
    description:
      'Khóa học chuyên sâu về phát triển công nghệ phục vụ chính phủ điện tử và smart city. Học xây dựng dịch vụ công trực tuyến, IoT monitoring systems và civic engagement platforms cho Vietnamese government context.',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    category: 'Science & Research',
    features: [
      'Digital Government Strategy và e-governance implementation',
      'Smart City IoT Solutions và environmental monitoring',
      'Civic Engagement Platforms và citizen participation tools',
      'Government API Integration và public data utilization',
    ],
    icon: '🏛️',
    color: 'from-blue-600 to-indigo-600',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    heroImageUrl: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?w=1200&h=600&fit=crop',
    objectives: [
      'Design comprehensive digital government services cho Vietnamese citizens',
      'Implement smart city IoT systems với real-time monitoring',
      'Build civic engagement platforms tăng government transparency',
      'Deploy scalable government technology solutions',
    ],
    prerequisites: [
      'Web development experience và system architecture knowledge',
      'Understanding of public administration và government processes',
      'Familiarity với IoT technologies và data analytics',
    ],
    careerOutcomes: [
      'Government Digital Transformation Specialist',
      'Smart City Solutions Architect và IoT Engineer',
      'Civic Technology Product Manager',
      'Public Sector Innovation Consultant',
    ],
    industryApplications: [
      'E-Government Service Platform Development',
      'Smart City Infrastructure và Monitoring Systems',
      'Citizen Engagement và Transparency Solutions',
      'Public Safety và Emergency Response Technology',
    ],
    marketDemand: {
      averageSalary: '28-55 triệu VNĐ',
      jobGrowth: '+42%',
      hireDemand: 'Cao',
    },
    marketData: {
      marketSize: '$1.2B',
      marketNote: 'Vietnam GovTech Market 2024',
      jobGrowth: '+42%',
      jobNote: 'Digital Government Jobs Growth',
      reduction: '85%',
      reductionNote: 'Digital Service Adoption Target',
      startups: '65+',
      startupsNote: 'GovTech Startups Vietnam',
    },
    relatedModules: [K2Module.Arduino, K2Module.VietnameseBusiness, K2Module.Cybersecurity],
  };

  const convertedLessons = digitalGovLessons.map(convertDigitalGovToBase);

  return <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />;
}
