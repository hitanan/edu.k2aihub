import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const gameDevelopmentModuleData: ModuleData = {
  id: 'game-development',
  title: 'Game Development & Interactive Media',
  subtitle: 'Phát triển Game và Truyền thông Tương tác',
  description:
    'Khóa học toàn diện về phát triển game từ concept đến publishing. Học Unity, Unreal Engine, game design, storytelling và monetization để tạo ra những trò chơi chuyên nghiệp và hấp dẫn.',
  level: 'Trung bình',
  duration: '20-25 giờ',
  category: 'Creative Technology',
  features: [
    'Game Engine Mastery (Unity, Unreal Engine) và scripting chuyên sâu',
    'Game Design Principles từ mechanics đến player psychology',
    '2D/3D Development với animation và visual effects',
    'Publishing & Monetization strategies cho multiple platforms',
  ],
  icon: '🎮',
  color: 'purple',
  heroImageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop',
  objectives: [
    'Thành thạo Unity và Unreal Engine cho phát triển game 2D/3D',
    'Thiết kế game mechanics, level design và player experience',
    'Implement storytelling, animation và sound design',
    'Xuất bản và monetize games trên multiple platforms',
  ],
  prerequisites: [
    'Kiến thức cơ bản về lập trình (C# hoặc C++ preferred)',
    'Hiểu biết về toán học 3D và physics cơ bản',
    'Kinh nghiệm với game development tools',
  ],
  careerOutcomes: [
    'Game Developer/Programmer tại studios và indie teams',
    'Game Designer và Level Designer cho AAA titles',
    'Technical Artist và 3D Environment Artist',
    'Independent Game Developer và Indie Studio Founder',
  ],
  industryApplications: [
    'Video Game Industry và Mobile Gaming',
    'Educational Games và Serious Gaming',
    'VR/AR Applications và Metaverse Development',
    'Simulation Software và Training Applications',
  ],
  marketDemand: {
    averageSalary: '20-40 triệu VNĐ',
    jobGrowth: '+23%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.DigitalMarketing, K2Module.Python],
};
