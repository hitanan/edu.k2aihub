import { ModuleData } from '@/types';
import { educationLearningLessons } from '@/data/lessons/education-learning';

export const educationLearningModuleData: ModuleData = {
  id: 'education-learning',
  title: 'AI cho Giáo Dục & Học Tập',
  subtitle: 'Học tập thông minh với AI',
  description: 'Sử dụng AI như một gia sư cá nhân, hỗ trợ nghiên cứu, học ngôn ngữ và tóm tắt tài liệu hiệu quả.',
  level: 'Cơ bản đến Trung bình',
  duration: '4-5 giờ',
  category: 'Professional',
  features: ['AI Tutor', 'Research assistance', 'Language learning', 'Document summarization'],
  icon: '📚',
  color: 'from-green-600 to-teal-600',
  objectives: [
    'Sử dụng AI làm gia sư cá nhân để học các khái niệm mới.',
    'Tận dụng AI để hỗ trợ nghiên cứu và tìm kiếm thông tin.',
    'Ứng dụng AI trong việc học ngôn ngữ mới.',
    'Sử dụng công cụ AI để tóm tắt tài liệu và bài báo.',
  ],
  prerequisites: ['Kỹ năng học tập cơ bản'],
  careerOutcomes: [
    'Nâng cao hiệu quả học tập và nghiên cứu.',
    'Phát triển kỹ năng tự học và tư duy phản biện.',
    'Tiết kiệm thời gian trong việc xử lý thông tin.',
  ],
  industryApplications: [
    { name: 'Giáo dục', description: 'Cá nhân hóa lộ trình học tập, tạo tài liệu giảng dạy.' },
    { name: 'Nghiên cứu', description: 'Phân tích dữ liệu, tìm kiếm tài liệu liên quan.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'Cao',
  },
  relatedModules: ['critical-thinking', 'data-science'],
  lessons: educationLearningLessons,
};
