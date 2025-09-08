import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const roboticsModuleData: ModuleData = {
  id: K2Module.Robotics,
  title: 'Robotics & Autonomous Systems',
  subtitle: 'Robot tự động',
  description: 'Thiết kế và lập trình robot từ cơ bản đến AI robotics',
  category: 'stem',
  icon: '🤖',
  color: 'from-purple-600 to-pink-600',
  level: 'Nâng cao',
  duration: '10-12 giờ',
  features: ['Robot Design', 'Motion Control', 'AI Integration', 'Autonomous Navigation'],
  prerequisites: ['Programming fundamentals', 'Basic electronics', 'Mathematical thinking', 'Problem-solving skills'],
  objectives: [
    'Hiểu các thành phần cơ bản của một robot.',
    'Lập trình điều khiển chuyển động và cảm biến cho robot.',
    'Áp dụng các thuật toán AI cho robot tự hành.',
    'Xây dựng một dự án robot hoàn chỉnh.',
  ],
  careerOutcomes: [
    'Kỹ sư Robotics',
    'Chuyên gia tự động hóa',
    'Kỹ sư điều khiển',
    'Nhà phát triển hệ thống không người lái (UAV/UGV)',
  ],
  industryApplications: [
    { name: 'Sản xuất công nghiệp', description: 'Robot hàn, sơn, lắp ráp trong các nhà máy.' },
    { name: 'Hậu cần và Kho bãi', description: 'Robot tự hành sắp xếp và vận chuyển hàng hóa.' },
    { name: 'Y tế', description: 'Robot hỗ trợ phẫu thuật, chăm sóc bệnh nhân.' },
    { name: 'Thám hiểm không gian', description: 'Robot tự hành trên các hành tinh khác.' },
  ],
  marketDemand: {
    averageSalary: '1800-3500 USD/tháng',
    jobGrowth: '12% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['programming-robotics', 'ai-fundamentals', 'iot-basics'],
};
