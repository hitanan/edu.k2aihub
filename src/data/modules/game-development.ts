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
    faqs: [
      {
        question: 'Phát triển game có cần phải biết lập trình không?',
        answer: 'Không hoàn toàn. Có nhiều vai trò trong ngành game không yêu cầu lập trình sâu như Game Designer, Game Artist, hoặc QA Tester. Tuy nhiên, hiểu biết cơ bản về lập trình là một lợi thế lớn cho hầu hết các vị trí.',
      },
      {
        question: 'Game Engine là gì và tại sao nó quan trọng?',
        answer: 'Game Engine là một bộ công cụ và thư viện phần mềm được thiết kế để xây dựng và phát triển game. Nó cung cấp các chức năng cốt lõi như đồ họa, vật lý, âm thanh, và trí tuệ nhân tạo, giúp các nhà phát triển tiết kiệm thời gian và công sức.',
      },
      {
        question: 'Sự khác biệt chính giữa Unity và Unreal Engine là gì?',
        answer: 'Unity sử dụng ngôn ngữ C# và nổi tiếng với sự linh hoạt, cộng đồng lớn, phù hợp cho game mobile và game độc lập. Unreal Engine sử dụng C++ và hệ thống Blueprint, nổi bật với khả năng đồ họa đỉnh cao, thường được dùng cho các game AAA.',
      },
      {
        question: 'Game Design là gì?',
        answer: 'Game Design là nghệ thuật và khoa học của việc tạo ra các quy tắc và nội dung của một trò chơi. Game Designer quyết định trải nghiệm của người chơi sẽ như thế nào, từ cơ chế gameplay, cốt truyện, đến cách người chơi tương tác với thế giới game.',
      },
      {
        question: 'Quy trình phát triển một game thường gồm những giai đoạn nào?',
        answer: 'Một quy trình điển hình bao gồm 3 giai đoạn chính: Tiền sản xuất (lên ý tưởng, thiết kế), Sản xuất (lập trình, vẽ đồ họa, tạo âm thanh), và Hậu sản xuất (kiểm thử, sửa lỗi, marketing, và phát hành).',
      },
      {
        question: 'Làm thế nào để bắt đầu sự nghiệp trong ngành game tại Việt Nam?',
        answer: 'Hãy bắt đầu bằng việc tự học một game engine (như Unity), tham gia các cộng đồng game dev, làm các dự án nhỏ để xây dựng portfolio, và ứng tuyển vào các vị trí thực tập sinh hoặc junior tại các công ty game như VNG, Amanotes, Gameloft.',
      },
      {
        question: 'Gamification (Game hóa) là gì?',
        answer: 'Gamification là việc áp dụng các yếu tố và cơ chế của game (như điểm số, huy hiệu, bảng xếp hạng) vào các lĩnh vực không phải game như giáo dục, marketing, hoặc công việc để tăng cường sự tương tác và động lực của người dùng.',
      },
      {
        question: 'Ngành công nghiệp game có những cơ hội nghề nghiệp nào khác ngoài các vai trò truyền thống?',
        answer: 'Có rất nhiều cơ hội khác như: Quản lý cộng đồng (Community Manager), Chuyên gia phân tích dữ liệu game (Game Data Analyst), Nhà báo game (Game Journalist), Streamer/Content Creator, và chuyên gia về eSports.',
      },
      {
        question: 'Để trở thành một Game Artist cần những kỹ năng gì?',
        answer: 'Một Game Artist cần có kỹ năng về mỹ thuật (vẽ, màu sắc, bố cục), thành thạo các công cụ kỹ thuật số (như Photoshop, Blender, ZBrush), và hiểu biết về phong cách đồ họa của game. Kỹ năng về 2D, 3D, animation, và UI/UX đều rất có giá trị.',
      },
      {
        question: 'Tại sao kiểm thử (QA - Quality Assurance) lại quan trọng trong phát triển game?',
        answer: 'QA đảm bảo rằng game hoạt động đúng như thiết kế, không có lỗi nghiêm trọng, và mang lại trải nghiệm tốt cho người chơi. Một game có nhiều lỗi có thể phá hỏng danh tiếng của nhà phát triển và dẫn đến thất bại về mặt thương mại.',
      },
    ],
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
