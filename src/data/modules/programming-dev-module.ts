import { ModuleNavigation } from '@/types';

export const programmingDevModuleData: ModuleNavigation = {
  id: 'programming-dev',
  title: 'AI cho Lập Trình & Phát Triển',
  subtitle: 'Code thông minh với AI',
  description: 'Tìm hiểu GitHub Copilot, AI code review và các công cụ AI hỗ trợ lập trình để tăng hiệu suất coding',
  category: ['programming', 'trending'], // Multiple categories
  icon: '💻',
  color: 'from-slate-600 to-blue-600',
  totalDuration: '7-9 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  href: '/learning/ai/programming-dev',
  features: ['GitHub Copilot', 'AI code review', 'Automated testing', 'Documentation generation'],
  tags: ['programming', 'coding', 'development', 'automation'],
  prerequisites: ['Kiến thức lập trình cơ bản', 'Sử dụng Git/GitHub'],
  lessons: [
    {
      id: 'github-copilot',
      title: 'GitHub Copilot mastery',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'ai-code-review',
      title: 'AI Code Review',
      duration: '70 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'automated-testing',
      title: 'Testing tự động với AI',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'documentation-ai',
      title: 'Tạo tài liệu với AI',
      duration: '50 phút',
      difficulty: 'Trung bình',
    },
  ],
};
