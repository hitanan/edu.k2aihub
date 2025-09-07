import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const minecraftEduModuleData: ModuleData = {
  id: 'minecraft-edu',
  title: 'Học tập Sáng tạo với Minecraft Education',
  subtitle: 'Xây dựng, Lập trình và Khám phá trong thế giới khối vuông',
  description:
    'Minecraft Education không chỉ là một trò chơi, đó là một nền tảng học tập mạnh mẽ. Khóa học này sẽ hướng dẫn bạn cách tận dụng các công cụ độc đáo của Minecraft Education để học về lập trình, hóa học, giải quyết vấn đề và cộng tác. Hãy sẵn sàng để xây dựng kiến thức của bạn, từng khối một.',
  level: 'Cơ bản',
  duration: '6-8 giờ',
  category: 'Creative Technology',
  features: [
    'Làm quen với các tính năng giáo dục độc quyền.',
    'Lập trình kéo-thả với Code Builder.',
    'Thực hiện các thí nghiệm hóa học an toàn, vui nhộn.',
    'Tham gia vào các bài học được thiết kế sẵn về nhiều chủ đề.',
  ],
  icon: '🧱',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1605810232354-9524159a166b?w=1200&h=600&fit=crop',
  objectives: [
    'Sử dụng thành thạo các công cụ và tính năng của Minecraft Education.',
    'Viết các chương trình cơ bản bằng Code Builder để tự động hóa các tác vụ.',
    'Áp dụng các khái niệm hóa học để tạo ra các hợp chất và vật phẩm mới.',
    'Phát triển kỹ năng cộng tác và giải quyết vấn đề trong môi trường 3D.',
  ],
  prerequisites: [
    'Tài khoản Microsoft 365 Education.',
    'Minecraft Education đã được cài đặt trên máy tính.',
    'Không yêu cầu kinh nghiệm chơi Minecraft trước đó.',
  ],
  careerOutcomes: [
    'Nhà giáo dục sáng tạo',
    'Người phát triển nội dung giáo dục số',
    'Kỹ năng STEM nền tảng cho các ngành nghề tương lai',
    'Người hướng dẫn các hoạt động ngoại khóa về công nghệ',
  ],
  industryApplications: [
    'Giáo dục K-12',
    'Phát triển chương trình giảng dạy STEM/STEAM',
    'Các trại hè công nghệ và workshop sáng tạo',
    'Đào tạo và phát triển kỹ năng mềm',
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (trong lĩnh vực EdTech)',
    hireDemand: 'Cao (cho các nhà giáo dục đổi mới)',
  },
  relatedModules: [K2Module.RobloxGameDev, K2Module.Scratch, K2Module.Arduino],
};
