import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  electricVehicleLessons,
  type ElectricVehicleLesson,
} from '@/data/electric-vehicle-tech';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert ElectricVehicleLesson to BaseLessonData
function convertToBaseLessonData(
  lesson: ElectricVehicleLesson,
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
      organization: study.company || 'Organization',
      problem: study.challenge,
      solution: study.solution,
      impact: study.impact,
      innovations: study.technologies || [],
    })),
    resources: lesson.resources,
  };
}

export const metadata: Metadata = createModuleMetadata(
  'Electric Vehicle Technology - Công Nghệ Ô Tô Điện',
  'Master electric vehicle technology từ powertrain và battery systems đến autonomous driving và smart charging. VinFast case studies và Vietnamese market focus. EV manufacturing, charging infrastructure, V2G technology.',
  ['electric vehicle', 'ev technology', 'battery systems', 'autonomous driving', 'charging infrastructure', 'vinfast', 'smart transportation', 'v2g technology', 'ev manufacturing', 'K2AI'],
  'electric-vehicle-tech'
);

export default function ElectricVehiclePage() {
  const moduleData = {
    id: 'electric-vehicle-tech',
    title: 'Electric Vehicle Technology',
    subtitle: 'Công Nghệ Ô Tô Điện & Giao Thông Thông Minh',
    description:
      'Comprehensive electric vehicle technology education từ powertrain và battery systems đến autonomous driving và smart charging infrastructure. Focus đặc biệt trên VinFast ecosystem và Vietnamese automotive market development.',
    level: 'Trung bình',
    duration: '14-18 giờ',
    category: 'Advanced Technology',
    features: [
      'EV Powertrain và Battery Technology với VinFast case studies',
      'Autonomous Driving Systems cho Vietnamese traffic conditions',
      'Smart Charging Infrastructure và V2G technology implementation',
      'EV Manufacturing processes và quality control systems',
      'Vietnamese automotive market analysis và career opportunities',
    ],
    icon: '🚗',
    color: 'from-blue-600 to-cyan-600',
    heroImageUrl:
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Master EV powertrain architecture, battery chemistry, và energy management systems',
      'Develop autonomous driving algorithms adapted cho Vietnamese traffic patterns',
      'Design scalable charging infrastructure với smart grid integration',
      'Understand EV manufacturing processes và quality control standards',
      'Analyze Vietnamese EV market opportunities và career pathways',
    ],
    prerequisites: [
      'Basic electrical engineering và automotive systems knowledge',
      'Programming skills Python/C++ cho autonomous systems',
      'Understanding của power electronics và energy systems',
      'Manufacturing engineering fundamentals',
      'Interest trong sustainable transportation solutions',
    ],
    careerOutcomes: [
      'EV Powertrain Engineer (30-60 triệu VNĐ/tháng)',
      'Battery Systems Engineer (35-65 triệu VNĐ/tháng)',
      'Autonomous Vehicle Developer (40-80 triệu VNĐ/tháng)',
      'Charging Infrastructure Engineer (28-55 triệu VNĐ/tháng)',
      'EV Manufacturing Engineer (25-50 triệu VNĐ/tháng)',
      'Smart Transportation Systems Analyst (30-58 triệu VNĐ/tháng)',
      'EV Product Manager (45-85 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'VinFast electric vehicle development và global expansion',
      'EV charging network deployment trong major Vietnamese cities',
      'Autonomous vehicle testing cho Vietnamese traffic conditions',
      'Smart city transportation systems integration',
      'Electric bus và commercial vehicle fleet management',
      'Battery recycling và second-life applications',
      'V2G energy trading platforms cho grid stabilization',
    ],
    marketDemand: {
      averageSalary: '25-85 triệu VNĐ',
      jobGrowth: '+80%',
      hireDemand: 'Cao',
    },
    relatedModules: [
      K2Module.RenewableEnergy,
      K2Module.AdvancedAI,
      K2Module.SemiconductorTechnology,
      K2Module.GreenTechnology,
    ],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = electricVehicleLessons.map(convertToBaseLessonData);

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
