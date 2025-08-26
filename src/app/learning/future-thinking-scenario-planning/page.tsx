import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { futureThinkingLessons } from '@/data/future-thinking-scenario-planning';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('Tư Duy Tương Lai và Kế Hoạch Kịch Bản'),
    description: createDescription('Phát triển khả năng tư duy về tương lai, scenario planning và strategic foresight để đưa ra quyết định tốt hơn trong môi trường không chắc chắn.'),
    keywords: ['futures thinking', 'scenario planning', 'strategic foresight', 'trend analysis', 'K2AiHub'],
    openGraph: {
      title: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản | K2AiHub',
      description: 'Phát triển khả năng tư duy về tương lai, scenario planning và strategic foresight để đưa ra quyết định tốt hơn trong môi trường không chắc chắn.',
      type: 'website',
    },
  };
}

export default function FutureThinkingMainPage() {
  const moduleData = {
    id: 'future-thinking-scenario-planning',
    title: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
    subtitle: 'Dự đoán và chuẩn bị cho tương lai',
    description: 'Trong thế giới thay đổi nhanh chóng, khả năng tư duy về tương lai và lập kế hoạch cho nhiều kịch bản khác nhau là kỹ năng quan trọng. Module này dạy bạn các phương pháp khoa học để phân tích xu hướng, xây dựng kịch bản tương lai và đưa ra quyết định chiến lược.',
    level: 'Nâng cao',
    duration: '6-7 giờ',
    category: 'Strategic Thinking',
    features: [
      'Phương pháp luận futures thinking',
      'Kỹ thuật scenario planning chuyên nghiệp',
      'Phân tích xu hướng và tín hiệu yếu',
      'Ứng dụng vào kế hoạch cá nhân và doanh nghiệp'
    ],
    icon: '🔮',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Nắm vững các phương pháp futures thinking và strategic foresight',
      'Biết cách phân tích xu hướng và nhận diện weak signals',
      'Phát triển kỹ năng xây dựng và sử dụng scenarios',
      'Áp dụng foresight vào planning cá nhân và professional'
    ],
    prerequisites: [
      'Khả năng critical thinking cơ bản',
      'Quan tâm đến xu hướng và thay đổi xã hội'
    ],
    careerOutcomes: [
      'Strategic Planner',
      'Futures Researcher', 
      'Innovation Manager',
      'Policy Analyst',
      'Business Strategist'
    ],
    industryApplications: [
      'Tư vấn chiến lược và quản lý',
      'Nghiên cứu và phát triển',
      'Chính sách công và quản trị',
      'Đầu tư và tài chính'
    ],
    marketDemand: {
      averageSalary: '25-50 triệu VNĐ',
      jobGrowth: '+30%',
      hireDemand: 'Trung bình-Cao'
    },
    relatedModules: [
      K2Module.CriticalThinking,
      K2Module.DigitalMarketing,
      K2Module.CrossCultural
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop'
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={futureThinkingLessons}
    />
  );
}