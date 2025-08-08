import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  foodTechnologyLessons,
  type FoodTechnologyLesson,
} from '@/data/food-technology';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert FoodTechnologyLesson to BaseLessonData
function convertToBaseLessonData(lesson: FoodTechnologyLesson): BaseLessonData {
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
    title: createTitle('Food Technology - Công Nghệ Thực Phẩm'),
    description: createDescription(
      'Master food technology: food safety, fermentation, molecular gastronomy, sustainable production. Vietnamese food industry modernization với traditional focus.',
    ),
    keywords: [
      'food technology',
      'food safety',
      'fermentation',
      'molecular gastronomy',
      'vietnamese food',
      'nuoc mam',
      'food processing',
      'sustainability',
      'K2AI',
    ],
    openGraph: {
      title: 'Food Technology - Công Nghệ Thực Phẩm | K2AI',
      description:
        'Master food technology với Vietnamese food industry focus: HACCP, fermentation, molecular gastronomy.',
      type: 'website',
    },
  };
}

export default function FoodTechnologyPage() {
  const moduleData = {
    id: 'food-technology',
    title: 'Food Technology',
    subtitle: 'Công Nghệ Thực Phẩm - Hiện Đại Hóa Ẩm Thực Việt',
    description:
      'Comprehensive food technology education covering food safety systems, fermentation biotechnology, molecular gastronomy, và sustainable production. Specialized focus trên Vietnamese food industry modernization including traditional fermented foods, export quality standards, và culinary innovation.',
    level: 'Trung bình',
    duration: '12-15 giờ',
    category: 'Food Science',
    features: [
      'Food Safety & Quality Control Systems với HACCP và Vietnamese standards',
      'Fermentation Technology & Food Biotechnology cho traditional Vietnamese foods',
      'Molecular Gastronomy & Food Innovation modernizing Vietnamese cuisine',
      'Sustainable Food Production & Supply Chain optimization',
      'Vietnamese Food Industry Focus với traditional và modern techniques',
    ],
    icon: '🍜',
    color: 'from-amber-600 to-orange-600',
    heroImageUrl:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Master food safety management systems including HACCP và Vietnamese regulations',
      'Understand fermentation biotechnology với focus trên traditional Vietnamese fermented foods',
      'Apply molecular gastronomy techniques để modernize Vietnamese cuisine',
      'Design sustainable food production systems minimizing environmental impact',
      'Navigate Vietnamese food industry landscape và international export requirements',
    ],
    prerequisites: [
      'Basic understanding của food science principles và microbiology',
      'Knowledge của Vietnamese culinary traditions và food culture',
      'Familiarity với chemistry, biology, và manufacturing processes',
      'Interest trong food innovation và sustainable production practices',
      'Understanding của quality management và regulatory compliance',
    ],
    careerOutcomes: [
      'Food Technologist (20-45 triệu VNĐ/tháng)',
      'Quality Assurance Manager (25-55 triệu VNĐ/tháng)',
      'Food Safety Specialist (22-50 triệu VNĐ/tháng)',
      'R&D Food Scientist (28-60 triệu VNĐ/tháng)',
      'Production Manager (30-65 triệu VNĐ/tháng)',
      'Food Innovation Consultant (35-70 triệu VNĐ/tháng)',
      'Molecular Gastronomy Chef (25-80 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'Vietnamese food manufacturers: Quality systems và export standards',
      'Traditional food producers: Modernization while preserving authenticity',
      'Restaurant industry: Innovative Vietnamese cuisine development',
      'Export companies: International food safety compliance',
      'Agricultural cooperatives: Value-added food processing',
      'Culinary schools: Modern Vietnamese culinary arts education',
      'Food startups: Product development và market entry strategies',
    ],
    marketDemand: {
      averageSalary: '20-80 triệu VNĐ',
      jobGrowth: '+45%',
      hireDemand: 'Trung bình - Cao',
    },
    relatedModules: [
      K2Module.GreenTechnology,
      K2Module.Python,
      K2Module.DigitalMarketing,
      K2Module.Biotechnology,
    ],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = foodTechnologyLessons.map(convertToBaseLessonData);

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
