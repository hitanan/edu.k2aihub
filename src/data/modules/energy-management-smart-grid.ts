import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { energyManagementLessons } from '@/data/lessons/energy-management-smart-grid';

export const energyManagementSmartGridModule: ModuleData = {
  id: K2Module.EnergyManagement,
  title: 'Quản lý Năng lượng & Lưới điện Thông minh',
  subtitle: 'Quản lý năng lượng thông minh',
  description:
    'Khám phá công nghệ lưới điện thông minh và các hệ thống năng lượng tái tạo, từ tối ưu hóa lưới điện đến quản lý năng lượng bền vững trong bối cảnh chuyển đổi số.',
  level: 'Nâng cao',
  duration: '20-26 giờ',
  category: 'Green Technology',
  features: [
    'Smart Grid Architecture Design',
    'Renewable Energy Integration',
    'Energy Storage Systems',
    'Grid Optimization Algorithms',
    'Demand Response Management',
    'Energy Trading Platforms',
    'Microgrid Development',
    'Sustainability Analytics',
  ],
  icon: '⚡',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
  objectives: [
    'Thiết kế và triển khai kiến trúc lưới điện thông minh.',
    'Tích hợp hiệu quả các nguồn năng lượng tái tạo.',
    'Phát triển hệ thống lưu trữ và quản lý năng lượng.',
    'Xây dựng các thuật toán tối ưu hóa lưới điện.',
    'Hiểu các chỉ số và báo cáo về tính bền vững.',
  ],
  prerequisites: [
    'Engineering fundamentals',
    'Understanding của electrical systems',
    'Data analysis capabilities',
    'Environmental awareness',
  ],
  careerOutcomes: [
    'Smart Grid Engineer (50-90 triệu VNĐ)',
    'Energy Management Specialist (40-75 triệu VNĐ)',
    'Renewable Energy Developer (45-85 triệu VNĐ)',
    'Grid Operations Manager (55-95 triệu VNĐ)',
    'Energy Trading Analyst (45-80 triệu VNĐ)',
    'Sustainability Technology Manager (50-90 triệu VNĐ)',
    'Microgrid System Designer (45-85 triệu VNĐ)',
    'Energy Efficiency Consultant (40-85 triệu VNĐ)',
  ],
  marketDemand: {
    averageSalary: '40-95 triệu VNĐ',
    jobGrowth: '76%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.GreenTechnology, K2Module.DataScienceAnalytics, K2Module.EnvironmentalScienceClimate],
  lessons: energyManagementLessons,
  industryApplications: [
    {
      name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      description:
        'EVN đang dẫn đầu trong việc hiện đại hóa lưới điện quốc gia để cải thiện hiệu quả và độ tin cậy, tích hợp các nguồn năng lượng tái tạo và triển khai công nghệ lưới điện thông minh.',
      url: 'https://www.evn.com.vn/',
    },
    {
      name: 'VinFast',
      description:
        'Với hệ sinh thái xe điện, VinFast đang đầu tư mạnh vào hạ tầng trạm sạc và các giải pháp sạc thông minh, góp phần vào việc quản lý nhu cầu năng lượng và ổn định lưới điện.',
      url: 'https://vinfastauto.com/',
    },
    {
      name: 'Các khu công nghiệp công nghệ cao',
      description:
        'Các khu công nghiệp như Khu Công nghệ cao Hòa Lạc và Khu Công nghệ cao TP.HCM đang triển khai các giải pháp lưới điện vi mô (microgrid) và quản lý năng lượng thông minh để đảm bảo nguồn cung cấp điện ổn định và hiệu quả.',
      url: 'https://hhtp.gov.vn/',
    },
  ],
};
