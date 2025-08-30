import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mentalHealthLessons } from '@/data/mental-health-tech';
import { createModuleMetadata } from '@/utils/seo';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import type { MentalHealthLesson } from '@/data/mental-health-tech';

// Convert MentalHealthLesson to BaseLessonData
function convertMentalHealthToBase(lesson: MentalHealthLesson): BaseLessonData {
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
      organization: caseStudy.participant,
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
  'Mental Health Technology - K2AiHub',
  'Khóa học về công nghệ sức khỏe tâm thần: digital wellness, mental health apps, wearables và AI therapy. Cải thiện wellbeing với technology.',
  ['mental health tech', 'digital wellness', 'sức khỏe tâm thần', 'wellness apps', 'meditation tech', 'stress management', 'K2AiHub'],
  'mental-health-tech'
);

export default function MentalHealthTechPage() {
  const moduleData = {
    id: 'mental-health-tech',
    title: 'Mental Health Technology',
    subtitle: 'Công nghệ Sức khỏe Tâm thần',
    description:
      'Khóa học toàn diện về ứng dụng công nghệ trong sức khỏe tâm thần. Học cách sử dụng digital wellness tools, mental health apps, wearables và AI therapy để cải thiện wellbeing và quản lý stress hiệu quả.',
    level: 'Cơ bản',
    duration: '12-15 giờ',
    category: 'Professional Skills',
    features: [
      'Digital Wellness Strategies và healthy technology usage',
      'Mental Health Apps ecosystem và effective implementation',
      'Wearables & Biometric Monitoring cho wellness tracking',
      'AI Therapy Tools và personalized mental health solutions',
    ],
    icon: '🧠',
    color: 'from-blue-600 to-indigo-600',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    heroImageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu relationship giữa technology và mental health',
      'Implement digital wellness strategies và stress management',
      'Sử dụng mental health apps và wearables effectively',
      'Apply AI tools cho personalized therapy và wellbeing',
    ],
    prerequisites: [
      'Không yêu cầu kiến thức kỹ thuật đặc biệt',
      'Quan tâm đến sức khỏe tâm thần và personal wellbeing',
      'Sẵn sàng explore new technology tools',
    ],
    careerOutcomes: [
      'Digital Wellness Consultant và Mental Health Tech Specialist',
      'Health Technology Product Manager và UX Designer',
      'Mental Health App Developer và Wellness Coach',
      'Corporate Wellness Program Manager và HR Technology Specialist',
    ],
    industryApplications: [
      'Healthcare Technology và Digital Health Platforms',
      'Corporate Wellness Programs và Employee Health',
      'Educational Mental Health Support và Student Wellbeing',
      'Consumer Wellness Apps và Personal Health Monitoring',
    ],
    marketDemand: {
      averageSalary: '18-35 triệu VNĐ',
      jobGrowth: '+28%',
      hireDemand: 'Rất cao',
    },
    marketData: {
      marketSize: '$5.6B',
      marketNote: 'Mental Health Tech Market 2024',
      jobGrowth: '+28%',
      jobNote: 'Digital Health Job Growth',
      reduction: '78%',
      reductionNote: 'Stress Reduction Rate',
      startups: '1.2K+',
      startupsNote: 'Mental Health Startups',
    },
  };

  const convertedLessons = mentalHealthLessons.map(convertMentalHealthToBase);

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
