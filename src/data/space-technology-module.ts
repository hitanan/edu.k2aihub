import { ModuleData } from '@/types';

export const spaceTechnologyModuleData: ModuleData = {
  id: 'space-technology',
  title: 'Space Technology & Exploration',
  subtitle: 'Công nghệ vũ trụ',
  description: 'Khám phá công nghệ vũ trụ, từ thiết kế tên lửa đến khám phá hành tinh và du hành vũ trụ.',
  category: 'technology',
  icon: '🚀',
  color: 'from-gray-700 to-blue-900',
  level: 'Nâng cao',
  duration: '15-20 giờ',
  features: ['Rocket Science', 'Satellite Technology', 'Planetary Exploration', 'Space Colonization'],
  prerequisites: [
    'Vật lý và toán học nâng cao',
    'Kỹ thuật cơ khí hoặc hàng không vũ trụ',
    'Lập trình cho hệ thống nhúng',
    'Đam mê khám phá vũ trụ',
  ],
  objectives: [
    'Hiểu sâu về các loại động cơ tên lửa và nguyên lý hoạt động.',
    'Thiết kế một mô hình vệ tinh nhỏ (CubeSat) với các hệ thống con.',
    'Lập kế hoạch cho một nhiệm vụ khám phá liên hành tinh.',
    'Phân tích các công nghệ cần thiết cho việc định cư ngoài Trái Đất.',
  ],
  careerOutcomes: [
    'Kỹ sư hàng không vũ trụ',
    'Chuyên gia thiết kế vệ tinh',
    'Nhà phân tích quỹ đạo',
    'Kỹ sư hệ thống đẩy',
  ],
  industryApplications: [
    { name: 'Phóng vệ tinh thương mại', description: 'Đưa vệ tinh của các công ty lên quỹ đạo.' },
    {
      name: 'Khai thác tài nguyên không gian',
      description: 'Thăm dò và khai thác khoáng sản trên các tiểu hành tinh.',
    },
    { name: 'Du lịch vũ trụ', description: 'Phát triển tàu vũ trụ và dịch vụ cho khách du lịch.' },
    { name: 'Nghiên cứu khoa học', description: 'Chế tạo kính thiên văn không gian, tàu thăm dò.' },
  ],
  marketDemand: {
    averageSalary: '3000-7000 USD/tháng',
    jobGrowth: '10% mỗi năm',
    hireDemand: 'Cao, đặc biệt cho chuyên gia có kinh nghiệm',
  },
  relatedModules: ['aerospace-engineering', 'robotics', 'materials-science'],
};
