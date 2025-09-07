import { ModuleNavigation } from '@/types';

export const educationLearningModuleData: ModuleNavigation = {
  id: 'education-learning',
  title: 'AI cho Giáo Dục & Học Tập',
  subtitle: 'Học tập thông minh với AI',
  description: 'Sử dụng AI như một gia sư cá nhân, hỗ trợ nghiên cứu, học ngôn ngữ và tóm tắt tài liệu hiệu quả',
  category: ['professional', 'stem'], // Multiple categories
  icon: '📚',
  color: 'from-green-600 to-teal-600',
  totalDuration: '4-5 giờ',
  difficulty: 'Cơ bản đến Trung bình',
  href: '/learning/ai/education-learning',
  features: ['AI Tutor', 'Research assistance', 'Language learning', 'Document summarization'],
  tags: ['education', 'learning', 'research', 'study'],
  prerequisites: ['Kỹ năng học tập cơ bản'],
  lessons: [
    {
      id: 'ai-tutor',
      title: 'AI như gia sư cá nhân',
      duration: '50 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'research-ai',
      title: 'Nghiên cứu với AI',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'language-learning',
      title: 'Học ngôn ngữ với AI',
      duration: '45 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'document-summary',
      title: 'Tóm tắt tài liệu với AI',
      duration: '40 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
