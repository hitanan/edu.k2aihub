import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  aerospaceEngineeringLessons,
  type AerospaceEngineeringLesson,
} from '@/data/aerospace-engineering';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert AerospaceEngineeringLesson to BaseLessonData
function convertToBaseLessonData(
  lesson: AerospaceEngineeringLesson,
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

export async function generateMetadata() {
  return {
    title: createTitle('Aerospace Engineering - Kỹ Thuật Hàng Không Vũ Trụ'),
    description: createDescription(
      'Master aerospace engineering: aircraft design, satellite systems, space missions, avionics. Vietnamese aviation industry focus với Vietnam Airlines, Vietjet applications.',
    ),
    keywords: [
      'aerospace engineering',
      'aircraft design',
      'satellite systems',
      'space missions',
      'avionics',
      'vietnamese aviation',
      'vietnam airlines',
      'uav',
      'K2AI',
    ],
    openGraph: {
      title: 'Aerospace Engineering - Kỹ Thuật Hàng Không Vũ Trụ | K2AI',
      description:
        'Master aerospace engineering cho Vietnamese aviation industry: aircraft design, satellite technology, space missions.',
      type: 'website',
    },
  };
}

export default function AerospaceEngineeringPage() {
  const moduleData = {
    id: 'aerospace-engineering',
    title: 'Aerospace Engineering',
    subtitle: 'Kỹ Thuật Hàng Không Vũ Trụ - Công Nghệ Bay',
    description:
      'Comprehensive aerospace engineering education covering aircraft design, satellite technology, space mission planning, và avionics systems. Specialized focus trên Vietnamese aviation industry development including Vietnam Airlines, Vietjet operations, và emerging Vietnamese space program.',
    level: 'Nâng cao',
    duration: '12-16 giờ',
    category: 'Engineering Technology',
    features: [
      'Aircraft Design & Aerodynamics với Vietnamese aviation applications',
      'Satellite Technology & Communication Systems cho Earth observation',
      'Space Mission Planning & Systems Engineering với Vietnamese space program focus',
      'Avionics & Flight Control Systems cho modern aircraft và UAV development',
      'Vietnamese Aviation Industry Integration với real-world applications',
    ],
    icon: '🚀',
    color: 'from-blue-600 to-indigo-600',
    heroImageUrl:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Master aircraft design principles và aerodynamic analysis cho Vietnamese aviation market',
      'Understand satellite systems engineering và space technology applications',
      'Apply space mission planning methodologies cho Vietnamese space program development',
      'Design avionics systems và flight control algorithms cho autonomous aircraft',
      'Navigate Vietnamese aviation regulations và international aerospace standards',
    ],
    prerequisites: [
      'Strong foundation trong physics, mathematics, và engineering mechanics',
      'Understanding của fluid dynamics, thermodynamics, và materials science',
      'Programming skills trong MATLAB, Python, hoặc C++ cho control systems',
      'Knowledge của electronics engineering và signal processing',
      'Familiarity với CAD software và engineering design methodology',
    ],
    careerOutcomes: [
      'Aerospace Engineer (30-70 triệu VNĐ/tháng)',
      'Aircraft Design Engineer (35-80 triệu VNĐ/tháng)',
      'Avionics Systems Engineer (40-85 triệu VNĐ/tháng)',
      'Space Systems Engineer (45-95 triệu VNĐ/tháng)',
      'Flight Test Engineer (38-78 triệu VNĐ/tháng)',
      'UAV/Drone Systems Developer (32-75 triệu VNĐ/tháng)',
      'Aerospace Project Manager (50-120 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'Vietnamese airlines: Vietnam Airlines, Vietjet Air engineering và maintenance',
      'Airport authorities: Infrastructure development và safety systems',
      'Defense industry: Military aircraft maintenance và UAV development',
      'Space agencies: Vietnamese National Satellite Center programs',
      'Aerospace manufacturing: Component production cho international suppliers',
      'UAV/drone companies: Commercial và agricultural applications',
      'Aviation consulting: Technical services và regulatory compliance',
    ],
    marketDemand: {
      averageSalary: '30-120 triệu VNĐ',
      jobGrowth: '+55%',
      hireDemand: 'Trung bình - Cao',
    },
    relatedModules: [
      K2Module.AdvancedAI,
      K2Module.RenewableEnergy,
      K2Module.Arduino,
      K2Module.Python,
    ],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = aerospaceEngineeringLessons.map(
    convertToBaseLessonData,
  );

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
