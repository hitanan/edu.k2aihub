import { ModuleData } from '@/types';

export const programmingRoboticsModuleData: ModuleData = {
  id: 'programming-robotics',
  title: 'Programming & Robotics',
  subtitle: 'Lập trình và robot học',
  description: 'Kết hợp programming skills với robotics engineering để tạo autonomous systems',
  category: 'programming',
  icon: '🤖',
  color: 'from-gray-600 to-blue-600',
  level: 'Trung bình đến Nâng cao',
  duration: '16-20 giờ',
  features: ['Programming Fundamentals', 'Robotics Engineering', 'AI Integration', 'Advanced Applications'],
  prerequisites: ['Programming fundamentals', 'Basic electronics', 'Mathematical thinking', 'Problem-solving skills'],
  objectives: [
    'Hiểu các khái niệm cơ bản về lập trình cho robot.',
    'Thiết kế và xây dựng các hệ thống robot đơn giản.',
    'Tích hợp AI và machine learning vào robot.',
    'Phát triển các ứng dụng robot tự hành.',
  ],
  careerOutcomes: [
    'Kỹ sư Robotics',
    'Chuyên gia tự động hóa',
    'Nhà phát triển hệ thống nhúng',
    'Kỹ sư AI/ML cho Robotics',
  ],
  industryApplications: [
    { name: 'Sản xuất', description: 'Robot tự động hóa dây chuyền lắp ráp, kiểm tra chất lượng.' },
    { name: 'Logistics', description: 'Robot sắp xếp và vận chuyển hàng hóa trong kho.' },
    { name: 'Y tế', description: 'Robot phẫu thuật, robot chăm sóc bệnh nhân.' },
    { name: 'Nông nghiệp', description: 'Robot thu hoạch, máy bay không người lái giám sát cây trồng.' },
  ],
  marketDemand: {
    averageSalary: '1500-3000 USD/tháng',
    jobGrowth: '15% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['python', 'ai-fundamentals', 'iot-basics'],
};
