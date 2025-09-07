import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const vietnameseHealthcareModuleData: ModuleData = {
  id: 'vietnamese-healthcare',
  title: 'Công Nghệ Y Tế Việt Nam',
  subtitle: 'Digital Health & Medical Technology Solutions',
  description:
    'Phát triển giải pháp công nghệ y tế tiên tiến cho thị trường Việt Nam. Học digital health infrastructure, AI medical imaging và telemedicine platforms phù hợp với healthcare system của Việt Nam phục vụ 97 triệu dân.',
  level: 'Nâng cao',
  duration: '12-16 giờ',
  category: 'Vietnamese-Specific Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
  features: [
    'Digital health infrastructure development cho Vietnamese hospitals',
    'AI medical imaging solutions với Vietnamese dataset',
    'Telemedicine platforms cho rural healthcare',
    'Health data analytics và management systems',
  ],
  icon: '🏥',
  color: 'from-emerald-600 to-teal-600',
  objectives: [
    'Master digital health system development cho Vietnamese healthcare',
    'Build AI medical imaging tools với Vietnamese medical practices',
    'Create telemedicine solutions cho remote areas',
    'Develop health data management platforms',
  ],
  prerequisites: [
    'Understanding of Vietnamese healthcare system',
    'Web hoặc mobile development experience',
    'Basic knowledge of medical terminology',
  ],
  careerOutcomes: [
    'Healthcare Technology Developer tại hospitals và health tech companies',
    'Medical AI Engineer cho diagnostic imaging companies',
    'Digital Health Consultant cho government healthcare projects',
    'Telemedicine Platform Developer cho rural healthcare initiatives',
  ],
  industryApplications: [
    'Hospital digital transformation projects',
    'Medical imaging và diagnostic technology',
    'Rural healthcare telemedicine solutions',
    'Health insurance technology platforms',
  ],
  marketDemand: {
    averageSalary: '25-50 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AI, K2Module.Biotechnology, K2Module.DigitalGovernment],
};
