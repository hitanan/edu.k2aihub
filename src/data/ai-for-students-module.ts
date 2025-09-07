import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const aiForStudentsModuleData: ModuleNavigation = {
  id: K2Module.AIForStudents,
  title: 'AI cho Học sinh',
  subtitle: 'Trí tuệ nhân tạo trong học tập và sáng tạo',
  description:
    'Khóa học này trang bị cho học sinh những kiến thức và kỹ năng cơ bản về Trí tuệ nhân tạo (AI), giúp các em hiểu rõ công nghệ và ứng dụng AI một cách có trách nhiệm để hỗ trợ học tập, thúc đẩy sáng tạo và chuẩn bị cho tương lai số.',
  category: ['stem', 'essential'],
  icon: '🎓',
  color: 'from-purple-500 to-indigo-600',
  totalDuration: '6-8 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '6-8 giờ',
  href: '/learning/ai-for-students',
  features: [
    'Hiểu các khái niệm cốt lõi của AI.',
    'Sử dụng các công cụ AI phổ biến để học tập.',
    'Tạo ra sản phẩm sáng tạo với AI.',
    'Nhận thức về đạo đức và an toàn khi dùng AI.',
  ],
  tags: ['ai', 'học sinh', 'sáng tạo', 'tương lai', 'stem'],
  prerequisites: [
    'Kỹ năng sử dụng máy tính và Internet cơ bản.',
    'Tò mò và ham muốn khám phá công nghệ mới.',
    'Không yêu cầu kiến thức lập trình.',
  ],
  lessons: [
    { id: 'gioi-thieu-ai', title: 'Giới thiệu về Trí tuệ nhân tạo (AI)', duration: '45 phút', difficulty: 'Cơ bản' },
    { id: 'ai-trong-hoc-tap', title: 'Ứng dụng AI để Học tập Hiệu quả', duration: '60 phút', difficulty: 'Cơ bản' },
    {
      id: 'sang-tao-voi-ai',
      title: 'Sáng tạo Nội dung với Công cụ AI',
      duration: '75 phút',
      difficulty: 'Trung bình',
    },
    { id: 'dao-duc-ai', title: 'Đạo đức và An toàn trong Kỷ nguyên AI', duration: '45 phút', difficulty: 'Cơ bản' },
  ],
};
