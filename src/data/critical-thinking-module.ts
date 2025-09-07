import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const criticalThinkingModuleData: ModuleNavigation = {
  id: K2Module.CriticalThinking,
  title: 'Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo',
  subtitle: 'Phát triển tư duy logic và sáng tạo',
  description:
    'Khóa học toàn diện về tư duy phê phán và giải quyết vấn đề sáng tạo, được thiết kế đặc biệt cho học sinh phổ thông Việt Nam với case studies thực tế.',
  category: 'essential',
  icon: '🧠',
  color: 'from-purple-600 to-pink-600',
  totalDuration: '8-10 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '8-10 giờ',
  href: '/learning/critical-thinking',
  features: [
    'Logical reasoning frameworks',
    'Design thinking methodology',
    'Case studies từ Việt Nam',
    'Practical problem-solving exercises',
  ],
  tags: ['critical thinking', 'problem solving', 'logic', 'creativity'],
  prerequisites: ['Không có yêu cầu tiên quyết cụ thể', 'Có tinh thần mở và sẵn sàng challenge assumptions'],
  lessons: [
    {
      id: 'critical-thinking-fundamentals',
      title: 'Cơ Bản Tư Duy Phê Phán',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'creative-problem-solving',
      title: 'Giải Quyết Vấn Đề Sáng Tạo',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'systems-thinking',
      title: 'Tư Duy Hệ Thống',
      duration: '105 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
