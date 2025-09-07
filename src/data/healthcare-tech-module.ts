import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const healthcareTechModuleData: ModuleData = {
  id: 'healthcare-tech',
  title: 'Công Nghệ Y Tế & Sức Khỏe Số',
  subtitle: 'Cách mạng hóa chăm sóc sức khỏe với công nghệ tiên tiến',
  description:
    'Khám phá và thành thạo các công nghệ y tế hiện đại từ telemedicine, healthcare data analytics đến thiết bị IoT y tế. Học cách áp dụng digital health solutions để cải thiện patient outcomes và operational efficiency trong bối cảnh hệ thống y tế Việt Nam.',
  level: 'Trung bình',
  duration: '18-22 giờ',
  category: 'Healthcare Technology',
  features: [
    'Telemedicine platform setup và patient care delivery',
    'Healthcare data analytics với AI-powered insights',
    'Medical IoT devices và smart hospital infrastructure',
    'Healthtech entrepreneurship và business development',
    'Digital mental health solutions với cultural sensitivity',
  ],
  icon: '🏥',
  color: 'from-blue-600 to-cyan-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop',
  objectives: [
    'Thiết lập và vận hành telemedicine platforms trong healthcare settings',
    'Phân tích healthcare big data để cải thiện patient outcomes',
    'Tích hợp medical IoT devices vào hospital operations',
    'Phát triển sustainable healthtech business models',
    'Triển khai digital mental health interventions phù hợp văn hóa Việt Nam',
  ],
  prerequisites: [
    'Hiểu biết cơ bản về hệ thống healthcare',
    'Computer literacy và digital tool proficiency',
    'Quan tâm đến healthcare innovation và patient care',
  ],
  careerOutcomes: [
    'Healthcare Technology Manager (25-45 triệu VNĐ)',
    'Telemedicine Specialist (20-40 triệu VNĐ)',
    'Healthcare Data Analyst (18-35 triệu VNĐ)',
    'Medical IoT Engineer (22-42 triệu VNĐ)',
    'HealthTech Entrepreneur (Thu nhập không giới hạn)',
    'Digital Health Consultant (30-60 triệu VNĐ)',
  ],
  industryApplications: [
    'Hospitals và healthcare systems modernization',
    'Rural healthcare access expansion through telemedicine',
    'Healthcare startups và innovation labs',
    'Government health ministry digital transformation',
    'Insurance companies với value-based care models',
    'Medical device companies với IoT integration',
  ],
  marketDemand: {
    averageSalary: '22-45 triệu VNĐ',
    jobGrowth: '+40%',
    hireDemand: 'Rất Cao',
  },
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.Biotechnology, K2Module.Python, K2Module.Arduino],
};
