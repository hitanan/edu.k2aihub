import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const scratchModuleData: ModuleData = {
  id: K2Module.Scratch,
  title: 'Scratch Programming',
  subtitle: 'Lập trình trực quan',
  description: 'Sáng tạo game và hoạt hình với Scratch',
  category: 'stem',
  icon: '🐱',
  color: 'from-orange-500 to-yellow-500',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  features: ['Visual Programming', 'Game Creation', 'Animation', 'Creative Coding'],
  prerequisites: ['Basic computer skills', 'Creativity', 'Logical thinking'],
  objectives: [
    'Làm quen với giao diện và các khối lệnh của Scratch.',
    'Tạo ra các câu chuyện và hoạt hình tương tác.',
    'Xây dựng các trò chơi đơn giản với luật chơi và điểm số.',
    'Phát triển tư duy logic, sáng tạo và giải quyết vấn đề.',
  ],
  careerOutcomes: [
    'Học sinh có nền tảng vững chắc để học các ngôn ngữ lập trình phức tạp hơn.',
    'Phát triển kỹ năng mềm quan trọng cho thế kỷ 21.',
    'Khơi dậy đam mê với lập trình và công nghệ.',
  ],
  industryApplications: [
    { name: 'Giáo dục', description: 'Công cụ dạy và học lập trình hiệu quả tại các trường học.' },
    { name: 'Giải trí', description: 'Tạo ra các sản phẩm game, hoạt hình để giải trí và chia sẻ.' },
    { name: 'Kể chuyện tương tác', description: 'Xây dựng các câu chuyện, bài thuyết trình sinh động.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'N/A (Kỹ năng nền tảng)',
  },
  relatedModules: ['python', 'game-development', 'coding-for-kids'],
};
