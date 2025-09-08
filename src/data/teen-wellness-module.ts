import { ModuleData } from '@/types';
import { K2Module } from './k2-modules';

export const teenWellnessModuleData: ModuleData = {
  id: 'teen-wellness',
  title: 'Teen Wellness & Mental Health',
  subtitle: 'Sức khỏe tinh thần tuổi teen',
  description:
    'Chương trình toàn diện về sức khỏe tinh thần cho teenagers. Học cách quản lý stress, anxiety, xây dựng mối quan hệ tích cực và phát triển emotional intelligence.',
  category: 'trending',
  icon: '🧘',
  color: 'from-green-600 to-teal-600',
  level: 'Cơ bản',
  duration: '12-15 giờ',
  features: [
    'Stress & Anxiety Management',
    'Mindfulness & Meditation',
    'Digital Wellness',
    'Healthy Relationships',
    'Crisis Support',
  ],
  prerequisites: ['Sự cởi mở về cảm xúc', 'Cam kết thực hành hàng ngày', 'Hỗ trợ từ người lớn', 'Môi trường an toàn'],
  objectives: [
    'Hiểu rõ các nguyên nhân gây stress và lo âu ở tuổi teen.',
    'Thực hành các kỹ thuật mindfulness và thiền định để giảm căng thẳng.',
    'Xây dựng thói quen sử dụng thiết bị số lành mạnh.',
    'Phát triển kỹ năng giao tiếp và xây dựng mối quan hệ tích cực.',
    'Nhận biết các dấu hiệu khủng hoảng và biết cách tìm kiếm sự giúp đỡ.',
  ],
  careerOutcomes: [
    'Kỹ năng tự chăm sóc bản thân và quản lý cảm xúc tốt hơn.',
    'Nền tảng vững chắc cho sức khỏe tinh thần lâu dài.',
    'Cải thiện khả năng tập trung và hiệu suất học tập.',
    'Kỹ năng giao tiếp và xã hội được nâng cao.',
  ],
  industryApplications: [
    { name: 'Giáo dục', description: 'Tích hợp vào chương trình giáo dục kỹ năng sống tại trường học.' },
    { name: 'Y tế', description: 'Công cụ hỗ trợ cho các chuyên gia tâm lý học đường.' },
    { name: 'Gia đình', description: 'Tài liệu tham khảo cho phụ huynh để đồng hành cùng con.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (kỹ năng sống)',
    hireDemand: 'Rất cao (kỹ năng sống)',
  },
  relatedModules: [
    K2Module.ProfessionalSkills,
    K2Module.DigitalCitizenshipOnlineSafety,
    K2Module.EmotionalIntelligence,
  ],
};
