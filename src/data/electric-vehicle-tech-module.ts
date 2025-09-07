import { ModuleData } from '@/types';

export const electricVehicleTechModuleData: ModuleData = {
  id: 'electric-vehicle-tech',
  title: 'Công Nghệ Xe Điện và Tự Hành',
  subtitle: 'Làm chủ tương lai của ngành giao thông vận tải',
  description:
    'Khám phá tương lai của giao thông với các bài học chuyên sâu về công nghệ xe điện, hệ thống lái xe tự hành, hạ tầng sạc và quy trình sản xuất tiên tiến.',
  level: 'Trung cấp đến Nâng cao',
  duration: '20 giờ',
  category: 'Công nghệ Kỹ thuật',
  features: [
    'Phân tích hệ thống truyền động và pin xe điện',
    'Lập trình hệ thống lái xe tự hành (ADAS)',
    'Thiết kế hạ tầng sạc thông minh',
    'Tối ưu hóa quy trình sản xuất xe điện',
  ],
  icon: 'car',
  color: 'blue',
  heroImageUrl: '/images/modules/electric-vehicle-tech.jpg',
  objectives: [
    'Hiểu sâu về kiến trúc và công nghệ xe điện.',
    'Phát triển kỹ năng trong lĩnh vực xe tự hành và ADAS.',
    'Thiết kế và quản lý hạ tầng sạc xe điện.',
    'Nắm vững quy trình sản xuất và kiểm soát chất lượng trong ngành công nghiệp xe điện.',
  ],
  prerequisites: ['Kiến thức cơ bản về kỹ thuật điện', 'Hiểu biết về lập trình (Python/C++)'],
  careerOutcomes: [
    'Kỹ sư phát triển hệ thống xe điện',
    'Chuyên gia về xe tự hành',
    'Kỹ sư hạ tầng năng lượng',
    'Quản lý sản xuất trong ngành ô tô',
  ],
  industryApplications: [
    'Sản xuất ô tô (VinFast)',
    'Phát triển công nghệ tự hành (VinAI)',
    'Năng lượng và hạ tầng (EVN)',
    'Logistics và giao vận thông minh',
  ],
  marketDemand: {
    averageSalary: '25.000.000 - 45.000.000 VNĐ/tháng',
    jobGrowth: '30%/năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['nang-luong-ben-vung', 'ai-machine-learning', 'robotics-automation'],
};
