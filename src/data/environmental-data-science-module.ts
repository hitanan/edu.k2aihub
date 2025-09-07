import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const environmentalDataScienceModuleData: ModuleData = {
  id: 'environmental-data-science',
  title: 'Environmental Data Science',
  subtitle: 'Khoa Học Dữ Liệu Môi Trường - Công Nghệ Xanh',
  description:
    'Comprehensive environmental data science education covering climate analysis, environmental monitoring, satellite remote sensing, và machine learning cho environmental prediction. Specialized focus trên Vietnamese environmental challenges including Mekong Delta climate adaptation, Ho Chi Minh City air quality, và forest conservation.',
  level: 'Nâng cao',
  duration: '12-16 giờ',
  category: 'Data Science',
  features: [
    'Climate Data Analysis & Modeling với Vietnamese monsoon pattern focus',
    'Air & Water Quality Monitoring Systems using IoT và real-time analytics',
    'Satellite Remote Sensing & GIS Applications cho deforestation monitoring',
    'Environmental Machine Learning & Predictive Modeling cho sustainability optimization',
    'Vietnamese Environmental Applications với local case studies và data',
  ],
  icon: '🌍',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl:
    'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=1200&h=600&fit=crop&auto=format',
  objectives: [
    'Master climate data analysis techniques với focus trên Vietnamese weather patterns',
    'Design IoT environmental monitoring systems cho air và water quality tracking',
    'Apply satellite remote sensing cho forest monitoring và coastal change detection',
    'Implement machine learning models cho environmental prediction và optimization',
    'Navigate Vietnamese environmental regulations và develop compliance solutions',
  ],
  prerequisites: [
    'Strong foundation trong data science, statistics, và programming (Python/R)',
    'Understanding của environmental science principles và sustainability concepts',
    'Basic knowledge của GIS systems, satellite imagery, và remote sensing',
    'Familiarity với machine learning algorithms và data visualization techniques',
    'Interest trong environmental protection và climate change solutions',
  ],
  careerOutcomes: [
    'Environmental Data Scientist (30-70 triệu VNĐ/tháng)',
    'Climate Data Analyst (25-60 triệu VNĐ/tháng)',
    'Remote Sensing Specialist (32-75 triệu VNĐ/tháng)',
    'Environmental Monitoring Engineer (28-65 triệu VNĐ/tháng)',
    'Sustainability Data Consultant (35-80 triệu VNĐ/tháng)',
    'GIS Environmental Analyst (30-70 triệu VNĐ/tháng)',
    'Environmental AI Researcher (40-90 triệu VNĐ/tháng)',
  ],
  industryApplications: [
    'Government environmental agencies: Monitoring và compliance systems',
    'Environmental consulting firms: Impact assessment và remediation planning',
    'Agriculture sector: Precision farming và sustainable practices',
    'Energy companies: Renewable energy resource assessment',
    'Urban planning: Smart city environmental optimization',
    'International NGOs: Conservation và climate adaptation projects',
    'Research institutions: Environmental monitoring và climate research',
  ],
  marketDemand: {
    averageSalary: '25-90 triệu VNĐ',
    jobGrowth: '+75%',
    hireDemand: 'Cao',
  },
  relatedModules: [
    K2Module.AdvancedAI,
    K2Module.Python,
    K2Module.GreenTechnology,
    K2Module.DigitalMarketing,
  ],
};
