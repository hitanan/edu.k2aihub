import { ModuleNavigation } from '@/types';

export const blueEconomyModuleData: ModuleNavigation = {
  id: 'blue-economy',
  title: 'Blue Economy & Marine Technology',
  subtitle: 'Kinh tế biển và Công nghệ hàng hải',
  description:
    'Khám phá tiềm năng của kinh tế biển bền vững, từ nuôi trồng thủy sản công nghệ cao đến năng lượng tái tạo từ biển.',
  category: 'technology',
  icon: '🌊',
  color: 'from-blue-500 to-cyan-400',
  totalDuration: '18-24 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '18-24 giờ',
  href: '/learning/blue-economy',
  features: ['Sustainable Aquaculture', 'Marine Renewable Energy', 'Ocean Data Analytics', 'Maritime Robotics'],
  tags: ['blue economy', 'marine tech', 'sustainability', 'ocean'],
  prerequisites: [
    'Kiến thức về khoa học môi trường',
    'Hiểu biết về kinh tế học cơ bản',
    'Quan tâm đến các vấn đề về biển và đại dương',
  ],
  lessons: [
    {
      id: 'sustainable-aquaculture-systems',
      title: 'Hệ thống Nuôi trồng Thủy sản Bền vững',
      duration: '220 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'marine-renewable-energy',
      title: 'Năng lượng Tái tạo từ Biển',
      duration: '240 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'ocean-data-analytics',
      title: 'Phân tích Dữ liệu Đại dương',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'maritime-robotics-automation',
      title: 'Robot và Tự động hóa Hàng hải',
      duration: '210 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
