import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseLangTechLessons } from '@/data/vietnamese-language-tech';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import type { VietnameseLangTechLesson } from '@/data/vietnamese-language-tech';

// Convert VietnameseLangTechLesson to BaseLessonData
function convertVietnameseLangTechToBase(
  lesson: VietnameseLangTechLesson,
): BaseLessonData {
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
      organization: caseStudy.organization,
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
      'Vietnamese Language Technology - Công nghệ Ngôn ngữ Tiếng Việt',
    ),
    description: createDescription(
      'Khóa học công nghệ ngôn ngữ tiếng Việt: NLP, AI chatbot, voice technology và speech recognition. Phát triển ứng dụng AI hiểu tiếng Việt tự nhiên.',
    ),
    keywords: [
      'vietnamese nlp',
      'tiếng việt ai',
      'chatbot tiếng việt',
      'voice ai vietnam',
      'vietnamese speech recognition',
      'phobert',
      'K2AiHub',
    ],
    openGraph: {
      title: 'Vietnamese Language Technology - K2AiHub',
      description:
        'Học phát triển công nghệ AI hiểu và xử lý tiếng Việt tự nhiên',
      type: 'website',
    },
  };
}

export default function VietnameseLanguageTechPage() {
  const moduleData = {
    id: 'vietnamese-language-tech',
    title: 'Vietnamese Language Technology',
    subtitle: 'Công nghệ Ngôn ngữ Tiếng Việt',
    description:
      'Khóa học chuyên sâu về công nghệ xử lý ngôn ngữ tự nhiên tiếng Việt. Học phát triển chatbot AI, voice assistant và NLP applications hiểu tiếng Việt với độ chính xác cao, tối ưu cho thị trường Việt Nam.',
    level: 'Trung bình',
    duration: '15-18 giờ',
    category: 'Professional Skills',
    features: [
      'Vietnamese NLP Fundamentals và text processing chuyên sâu',
      'AI Chatbot Development với conversation management tiếng Việt',
      'Voice AI Technology cho speech recognition và synthesis',
      'Real-world Applications với Vietnamese market focus',
    ],
    icon: '🇻🇳',
    color: 'from-red-600 to-yellow-500',
    gradientColors: 'from-slate-900 via-red-900 to-slate-900',
    heroImageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
    objectives: [
      'Master Vietnamese NLP techniques và tokenization challenges',
      'Build intelligent chatbots hiểu context và intent tiếng Việt',
      'Develop voice AI applications với Vietnamese pronunciation accuracy',
      'Deploy production-ready Vietnamese language applications',
    ],
    prerequisites: [
      'Python programming experience và machine learning basics',
      'Familiarity với NLP concepts và deep learning',
      'Understanding of Vietnamese language characteristics',
    ],
    careerOutcomes: [
      'Vietnamese NLP Engineer và Language Technology Specialist',
      'AI Product Manager focused on Vietnamese market',
      'Conversational AI Developer và Voice Technology Engineer',
      'Vietnamese Localization Technology Lead',
    ],
    industryApplications: [
      'Vietnamese Customer Service Automation',
      'Educational Technology cho Vietnamese learners',
      'Government Digital Services và Civic Technology',
      'E-commerce và Social Media Platform Development',
    ],
    marketDemand: {
      averageSalary: '25-50 triệu VNĐ',
      jobGrowth: '+45%',
      hireDemand: 'Rất cao',
    },
    marketData: {
      marketSize: '$850M',
      marketNote: 'Vietnamese Language AI Market 2024',
      jobGrowth: '+45%',
      jobNote: 'Vietnamese AI Engineer Demand',
      reduction: '95M+',
      reductionNote: 'Native Vietnamese Speakers',
      startups: '120+',
      startupsNote: 'Vietnamese AI Startups',
    },
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.VietnameseBusiness,
      K2Module.Python,
    ],
  };

  const convertedLessons = vietnameseLangTechLessons.map(
    convertVietnameseLangTechToBase,
  );

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
