import { ModuleData } from '@/types';

export const professionalSkillsModule: ModuleData = {
  id: 'professional-skills',
  title: 'Kỹ năng chuyên nghiệp',
  description: 'Phát triển các kỹ năng chuyên nghiệp cần thiết để thành công trong sự nghiệp.',
  category: 'Kỹ năng chuyên nghiệp',
  lessons: [
    {
      id: 'resume-writing',
      title: 'Viết CV và Sơ yếu lý lịch',
      description: 'Học cách viết một CV ấn tượng để thu hút nhà tuyển dụng.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'interview-skills',
      title: 'Kỹ năng phỏng vấn',
      description: 'Chuẩn bị cho các cuộc phỏng vấn và cách trả lời các câu hỏi phỏng vấn phổ biến.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
