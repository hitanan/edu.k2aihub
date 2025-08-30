import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  biomedicalEngineeringLessons,
  type BiomedicalEngineeringLesson,
} from '@/data/biomedical-engineering';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert BiomedicalEngineeringLesson to BaseLessonData
function convertToBaseLessonData(
  lesson: BiomedicalEngineeringLesson,
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
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.innovations || [],
    })),
    resources: lesson.resources,
  };
}

export const metadata: Metadata = createModuleMetadata(
  'Biomedical Engineering - Kỹ Thuật Y Sinh',
  'Master biomedical engineering: medical device design, biosignal processing, regenerative medicine, surgical robotics. Vietnamese healthcare applications với FDA/MOH regulatory compliance.',
  [
    'biomedical engineering',
    'medical devices',
    'biosignals',
    'regenerative medicine',
    'surgical robotics',
    'vietnamese healthcare',
    'FDA regulations',
    'medical innovation',
    'K2AI',
  ],
  'biomedical-engineering'
);

export default function BiomedicalEngineeringPage() {
  const moduleData = {
    id: 'biomedical-engineering',
    title: 'Biomedical Engineering',
    subtitle: 'Kỹ Thuật Y Sinh - Công Nghệ Y Tế Hiện Đại',
    description:
      'Comprehensive biomedical engineering education covering medical device design, biosignal processing, regenerative medicine, và surgical robotics. Focus đặc biệt trên Vietnamese healthcare applications, regulatory compliance với MOH, và innovation trong medical technology sector.',
    level: 'Nâng cao',
    duration: '12-18 giờ',
    category: 'Engineering Technology',
    features: [
      'Medical Device Design & Development với FDA/MOH regulatory pathways',
      'Biosignal Processing & Medical Imaging using AI/ML technologies',
      'Regenerative Medicine & Tissue Engineering cho clinical applications',
      'Medical Robotics & Surgical Systems với haptic feedback và computer vision',
      'Vietnamese Healthcare Integration với local hospital partnerships',
    ],
    icon: '🏥',
    color: 'from-teal-600 to-cyan-600',
    heroImageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Design và develop medical devices theo international regulatory standards',
      'Implement advanced biosignal processing algorithms cho diagnostic applications',
      'Master regenerative medicine techniques including tissue engineering và stem cell therapy',
      'Build surgical robotics systems với computer vision và haptic feedback',
      'Navigate Vietnamese healthcare regulatory environment và clinical implementation',
    ],
    prerequisites: [
      'Strong engineering background trong electrical, mechanical, hoặc computer engineering',
      'Programming skills trong MATLAB, Python, C++ cho medical applications',
      'Understanding của human anatomy, physiology, và medical terminology',
      'Knowledge của signal processing, control systems, và materials science',
      'Familiarity với quality management systems và regulatory frameworks',
    ],
    careerOutcomes: [
      'Biomedical Engineer (25-60 triệu VNĐ/tháng)',
      'Medical Device Designer (30-70 triệu VNĐ/tháng)',
      'Clinical Engineer (28-65 triệu VNĐ/tháng)',
      'Regulatory Affairs Specialist (35-80 triệu VNĐ/tháng)',
      'R&D Engineer - Medical Technology (40-90 triệu VNĐ/tháng)',
      'Surgical Robotics Engineer (45-100 triệu VNĐ/tháng)',
      'Biomedical Data Scientist (38-85 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'Vietnamese hospitals: Integration của advanced medical technologies',
      'Medical device manufacturers: Local R&D và manufacturing capabilities',
      'Pharmaceutical companies: Drug delivery systems và diagnostic devices',
      'Healthcare startups: Innovation trong affordable medical solutions',
      'Government healthcare programs: Technology assessment và policy development',
      'International collaborations: Technology transfer và joint ventures',
      'Academic research institutions: Clinical translation of biomedical innovations',
    ],
    marketDemand: {
      averageSalary: '25-100 triệu VNĐ',
      jobGrowth: '+85%',
      hireDemand: 'Cao',
    },
    relatedModules: [
      K2Module.AdvancedAI,
      K2Module.Robotics,
      K2Module.Arduino,
      K2Module.Python,
    ],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = biomedicalEngineeringLessons.map(
    convertToBaseLessonData,
  );

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
