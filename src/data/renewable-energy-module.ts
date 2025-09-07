import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const renewableEnergyModuleData: ModuleData = {
  id: 'renewable-energy',
  title: 'Năng Lượng Tái Tạo',
  subtitle: 'Công Nghệ Xanh Cho Tương Lai Bền Vững',
  description:
    "Khám phá comprehensive renewable energy technologies từ solar photovoltaics và wind turbines đến advanced energy storage systems. Master thiết kế và implementation của sustainable energy solutions supporting Vietnam's Net Zero 2050 commitment.",
  level: 'Trung bình',
  duration: '12-15 giờ',
  category: 'Green Technology',
  features: [
    'Solar PV system design và optimization cho Vietnam climate conditions',
    'Wind power technology với focus trên offshore wind potential',
    'Advanced energy storage: batteries, pumped hydro, smart grid integration',
    'Hydroelectric systems từ large dams đến micro-hydro applications',
    'Economic analysis và policy framework cho renewable energy investment',
  ],
  icon: '⚡',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop&auto=format',
  objectives: [
    'Master solar photovoltaic system design và installation best practices',
    'Understand wind turbine technology và offshore wind farm development',
    'Design energy storage systems cho grid stabilization và renewable integration',
    'Analyze hydroelectric power options suitable cho Vietnam geography',
    'Navigate renewable energy economics, policy incentives và project financing',
  ],
  prerequisites: [
    'Basic electrical engineering concepts và circuit analysis',
    'Understanding của physics principles: mechanics, thermodynamics, electromagnetism',
    'Mathematics skills including algebra và basic calculus',
    'Environmental awareness và sustainability principles',
  ],
  careerOutcomes: [
    'Renewable Energy Systems Engineer (25-45 triệu VNĐ/tháng)',
    'Solar/Wind Project Developer (30-55 triệu VNĐ/tháng)',
    'Energy Storage Systems Specialist (35-60 triệu VNĐ/tháng)',
    'Grid Integration Engineer (28-50 triệu VNĐ/tháng)',
    'Renewable Energy Policy Analyst (22-40 triệu VNĐ/tháng)',
    'Sustainability Consultant (25-45 triệu VNĐ/tháng)',
  ],
  industryApplications: [
    'Offshore wind farms trong South China Sea waters',
    'Large-scale solar installations trong Mekong Delta và Central Highlands',
    'Grid-scale energy storage systems cho renewable integration',
    'Smart grid development trong major Vietnamese cities',
    'Rural electrification projects using micro-hydro và distributed solar',
    'Industrial energy management với renewable energy integration',
  ],
  marketDemand: {
    averageSalary: '25-60 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.GreenTechnology, K2Module.RenewableEnergy, K2Module.DigitalMarketing, K2Module.Python],
};
