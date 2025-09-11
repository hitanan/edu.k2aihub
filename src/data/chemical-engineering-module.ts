import { ModuleData } from '@/types';

export const chemicalEngineeringModuleData: ModuleData = {
  id: 'chemical-engineering',
  title: 'Kỹ Thuật Hóa Học',
  subtitle: 'Chemical Engineering',
  description: 'Nắm vững các nguyên lý kỹ thuật hóa học, thiết kế quy trình và công nghệ môi trường tiên tiến.',
  level: 'Nâng cao',
  duration: '16 tuần',
  category: 'Kỹ Thuật',
  features: [
    'Thiết kế quy trình hóa học',
    'Công nghệ kiểm soát ô nhiễm',
    'Tối ưu hóa sản xuất',
    'Hệ thống xử lý môi trường',
    'Ứng dụng thực tế trong công nghiệp',
  ],
  icon: '⚗️',
  color: 'from-orange-600 to-red-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
  objectives: [
    'Thiết kế và tối ưu hóa quy trình hóa học',
    'Phát triển công nghệ kiểm soát ô nhiễm',
    'Ứng dụng nguyên lý kỹ thuật vào sản xuất',
    'Giải quyết vấn đề môi trường trong công nghiệp',
  ],
  prerequisites: [
    'Kiến thức toán học và vật lý cơ bản',
    'Hiểu biết về hóa học đại cương',
    'Khả năng tư duy logic và phân tích',
  ],
  careerOutcomes: [
    'Kỹ sư quy trình hóa học',
    'Chuyên gia công nghệ môi trường',
    'Quản lý sản xuất công nghiệp',
    'Tư vấn kỹ thuật hóa học',
  ],
  industryApplications: [
    'Công nghiệp lọc hóa dầu',
    'Sản xuất hóa chất và dược phẩm',
    'Xử lý nước và nước thải',
    'Công nghệ thực phẩm',
  ],
  marketDemand: {
    averageSalary: '25-45 triệu VNĐ/tháng',
    jobGrowth: '+15% trong 5 năm tới',
    hireDemand: 'Cao - Nhu cầu tăng mạnh',
  },
  relatedModules: ['green-technology', 'environmental-data-science', 'renewable-energy'],
};
