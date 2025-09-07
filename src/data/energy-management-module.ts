import { ModuleNavigation } from '@/types';

export const energyManagementModuleData: ModuleNavigation = {
  id: 'energy-management',
  title: 'Energy Management & Smart Grids',
  subtitle: 'Quản lý năng lượng và Lưới điện thông minh',
  description:
    'Tìm hiểu về tối ưu hóa việc sử dụng năng lượng, tích hợp năng lượng tái tạo và xây dựng lưới điện thông minh của tương lai.',
  category: 'technology',
  icon: '💡',
  color: 'from-yellow-400 to-amber-500',
  totalDuration: '20-26 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '20-26 giờ',
  href: '/learning/energy-management',
  features: [
    'Energy Auditing',
    'Renewable Energy Integration',
    'Smart Grid Technology',
    'Demand-Side Management',
    'Energy Storage',
  ],
  tags: ['energy management', 'smart grid', 'renewable energy', 'sustainability'],
  prerequisites: [
    'Kiến thức về kỹ thuật điện hoặc năng lượng',
    'Hiểu biết về các nguồn năng lượng',
    'Kỹ năng phân tích và mô hình hóa',
  ],
  lessons: [
    {
      id: 'energy-auditing-and-efficiency',
      title: 'Kiểm toán và Hiệu quả Năng lượng',
      duration: '240 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'renewable-energy-integration-into-grid',
      title: 'Tích hợp Năng lượng Tái tạo vào Lưới điện',
      duration: '260 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'smart-grid-architecture-and-technologies',
      title: 'Kiến trúc và Công nghệ Lưới điện Thông minh',
      duration: '280 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'demand-side-management-and-response',
      title: 'Quản lý và Phản hồi Phía Cầu',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'energy-storage-solutions',
      title: 'Các Giải pháp Lưu trữ Năng lượng',
      duration: '200 phút',
      difficulty: 'Trung bình',
    },
  ],
};
