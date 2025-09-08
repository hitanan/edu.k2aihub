import { ModuleData } from '@/types';

export const softSkillsModuleData: ModuleData = {
  id: 'soft-skills',
  title: 'Kỹ Năng Mềm Thiết Yếu',
  subtitle: 'Chìa khóa thành công bền vững',
  description:
    'Trang bị bộ kỹ năng mềm toàn diện từ giao tiếp, tư duy phản biện, làm việc nhóm đến trí tuệ cảm xúc để thành công trong mọi lĩnh vực.',
  category: 'Essential Skills',
  icon: '🤝',
  color: 'from-blue-500 to-sky-500',
  level: 'Cơ bản',
  duration: '10-12 giờ',
  features: [
    'Giao tiếp hiệu quả và thuyết trình',
    'Tư duy phản biện và giải quyết vấn đề',
    'Làm việc nhóm và hợp tác',
    'Trí tuệ cảm xúc và quản lý bản thân',
  ],
  prerequisites: ['Không có'],
  objectives: [
    'Giao tiếp tự tin và thuyết phục trong môi trường chuyên nghiệp.',
    'Phân tích vấn đề một cách logic và đưa ra giải pháp sáng tạo.',
    'Hợp tác hiệu quả trong đội nhóm để đạt mục tiêu chung.',
    'Quản lý cảm xúc và xây dựng mối quan hệ tích cực.',
  ],
  careerOutcomes: [
    'Nâng cao khả năng được tuyển dụng ở mọi ngành nghề.',
    'Cải thiện hiệu suất làm việc và khả năng thăng tiến.',
    'Xây dựng mạng lưới quan hệ chuyên nghiệp vững chắc.',
    'Trở thành một nhà lãnh đạo hiệu quả.',
  ],
  industryApplications: [
    { name: 'Kinh doanh', description: 'Đàm phán, bán hàng, quản lý nhân sự.' },
    { name: 'Công nghệ', description: 'Làm việc nhóm trong các dự án phần mềm, trình bày ý tưởng sản phẩm.' },
    { name: 'Y tế', description: 'Giao tiếp với bệnh nhân, làm việc với đội ngũ y bác sĩ.' },
    { name: 'Giáo dục', description: 'Giảng dạy, quản lý lớp học, tương tác với phụ huynh.' },
  ],
  marketDemand: {
    averageSalary: 'Tăng 10-20% thu nhập',
    jobGrowth: 'Luôn cần thiết',
    hireDemand: 'Rất cao ở mọi cấp độ',
  },
  relatedModules: ['professional-communication', 'leadership-management', 'critical-thinking'],
};
