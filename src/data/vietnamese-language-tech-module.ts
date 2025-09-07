import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const vietnameseLanguageTechModuleData: ModuleData = {
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
  heroImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
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
  relatedModules: [K2Module.DigitalMarketing, K2Module.VietnameseBusiness, K2Module.Python],
};
