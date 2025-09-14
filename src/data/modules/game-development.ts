import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

// Custom interface for this module's career connection data
export interface GameDevCareerConnect {
  jobRoles: string[];
  vietnameseCompanies: string[];
}

// Extending BaseLessonData with module-specific properties
export interface GameDevLesson extends BaseLessonData {
  gameDevMainContent: {
    gameGenres: string[];
    technologies: string[];
    platforms: string[];
    careerOpportunities: string[];
  };
  // Using a module-specific property for career connections
  gameDevCareerConnect?: GameDevCareerConnect;
}

export const gameDevLessons: GameDevLesson[] = [
  {
    id: 'introduction-to-game-development',
    title: 'Bài 1: Giới thiệu về Phát triển Game',
    description:
      'Khám phá thế giới phát triển game, từ lịch sử, các thể loại chính, đến quy trình tạo ra một trò chơi hoàn chỉnh.',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    duration: '1 giờ 30 phút',
    difficulty: 'Beginner',
    objectives: [
      'Hiểu được lịch sử và sự phát triển của ngành công nghiệp game.',
      'Phân biệt các thể loại game phổ biến.',
      'Nắm được các giai đoạn chính trong quy trình phát triển game.',
      'Làm quen với các vai trò trong một đội ngũ phát triển game.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
    gameDevMainContent: {
      gameGenres: ['Action', 'RPG', 'Strategy', 'Simulation', 'Puzzle'],
      technologies: ['Game Engines', 'Programming Languages', 'Art & Animation Tools'],
      platforms: ['PC', 'Console', 'Mobile', 'Web'],
      careerOpportunities: ['Game Designer', 'Game Programmer', 'Game Artist', 'QA Tester', 'Producer'],
    },
    realWorldApplications: [
      'Giải trí và nghệ thuật tương tác',
      'Game hóa trong giáo dục (Gamification)',
      'Mô phỏng trong quân sự, y tế, và đào tạo',
      'Marketing và quảng cáo',
    ],
    vietnamContext: {
      title: 'Bối cảnh ngành Game tại Việt Nam',
      content: [
        'Ngành game Việt Nam đang phát triển mạnh mẽ, từ các studio độc lập đến các công ty lớn, tạo ra nhiều cơ hội việc làm và sản phẩm vươn tầm quốc tế.',
        'Ví dụ điển hình: Flappy Bird - một hiện tượng toàn cầu do Nguyễn Hà Đông phát triển, cho thấy tiềm năng của các nhà phát triển game Việt.',
        'Công ty lớn: VNG Corporation là một trong những công ty công nghệ hàng đầu Việt Nam, có mảng kinh doanh game lớn mạnh với nhiều sản phẩm thành công.',
      ],
    },
    gameDevCareerConnect: {
      jobRoles: ['Game Designer', 'Game Programmer', 'Game Artist', 'QA Tester', 'Producer'],
      vietnameseCompanies: ['VNG', 'Amanotes', 'Gameloft Vietnam', 'Sparx*', 'WolfFun'],
    },
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
  },
];

export const gameDevelopmentModuleData: ModuleData<GameDevLesson> = {
  id: 'game-development',
  title: 'Phát triển Game & Truyền thông Tương tác',
  description:
    'Khóa học phát triển game toàn diện từ Unity, Unreal Engine đến game design, storytelling và xuất bản. Tạo game 2D/3D chuyên nghiệp với K2AiHub.',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop',
  category: 'Game Development',
  features: [
    'Hướng dẫn từ cơ bản đến nâng cao',
    'Thực hành trên Unity và Unreal Engine',
    'Kiến thức về Game Design và Storytelling',
    'Dự án thực tế cuối khóa',
  ],
  lessons: gameDevLessons,
  relatedModules: [K2Module.Stem, K2Module.DigitalCitizenship, K2Module.Python],
};
