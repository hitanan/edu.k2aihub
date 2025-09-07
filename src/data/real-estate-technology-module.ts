import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const realEstateTechnologyModuleData: ModuleData = {
  id: 'real-estate-technology',
  title: 'Công Nghệ Bất Động Sản',
  subtitle: 'Real Estate Technology & PropTech Innovation',
  description:
    'Khám phá cách mạng PropTech đang transform ngành bất động sản toàn cầu. Từ virtual property tours, IoT smart buildings, AI-powered analytics đến blockchain property transactions. Master các technologies tiên tiến để revolutionize real estate industry và create innovative PropTech solutions.',
  level: 'Nâng cao',
  duration: '22-27 giờ',
  category: 'Real Estate & Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
  features: [
    'PropTech Innovation & Digital Transformation strategies',
    '360° Virtual Tours & VR Property Viewing development',
    'Smart Buildings IoT Management Systems',
    'AI-Powered Real Estate Analytics & Market Intelligence',
    'Blockchain Technology & Real Estate FinTech solutions',
  ],
  icon: '🏢',
  color: 'from-blue-600 to-indigo-600',
  objectives: [
    'Phát triển comprehensive PropTech platforms và digital solutions',
    'Tạo immersive virtual property experiences với VR/AR technology',
    'Thiết kế smart building systems với IoT và predictive analytics',
    'Build AI-powered valuation models và market intelligence tools',
    'Implement blockchain solutions cho property transactions và tokenization',
  ],
  prerequisites: [
    'Hiểu biết cơ bản về real estate market và property transactions',
    'Kiến thức về web development, mobile apps và cloud platforms',
    'Basic understanding về IoT, blockchain và AI/ML concepts',
    'Familiarity với data analytics và visualization tools',
  ],
  careerOutcomes: [
    'PropTech Product Manager - 35-55 triệu VNĐ/tháng',
    'Real Estate Technology Specialist - 25-40 triệu VNĐ/tháng',
    'Smart Building Systems Engineer - 30-50 triệu VNĐ/tháng',
    'Real Estate Data Analyst - 22-38 triệu VNĐ/tháng',
    'PropTech Entrepreneur - Potential unlimited income',
    'Digital Real Estate Marketing Manager - 20-35 triệu VNĐ/tháng',
  ],
  industryApplications: [
    'Residential Real Estate: Virtual tours, smart home automation và buyer matching platforms',
    'Commercial Properties: IoT building management, predictive maintenance và tenant engagement',
    'Property Development: VR project visualization, construction monitoring và pre-sales platforms',
    'Real Estate Investment: AI-powered analytics, market intelligence và portfolio optimization',
    'Property Management: Smart building operations, tenant services và maintenance automation',
    'Real Estate Finance: Blockchain transactions, tokenized investments và DeFi lending',
  ],
  marketDemand: {
    averageSalary: '25-55 triệu VNĐ',
    jobGrowth: '+42%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.BlockchainDeFi,
    K2Module.AdvancedAI,
    K2Module.SmartManufacturing,
    K2Module.DigitalMarketing,
  ],
};
