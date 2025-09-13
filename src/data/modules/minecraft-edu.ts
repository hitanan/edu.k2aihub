import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { MinecraftEduLesson } from '@/types/lesson-base';

export const minecraftEduModule: ModuleData<MinecraftEduLesson> = {
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
    { name: 'Giáo dục K-12', description: 'Ứng dụng trong giảng dạy các môn học chính khóa.' },
    { name: 'Phát triển chương trình giảng dạy STEM/STEAM', description: 'Tạo ra các bài học và dự án liên môn.' },
    { name: 'Các trại hè công nghệ và workshop sáng tạo', description: 'Sử dụng làm nền tảng cho các hoạt động ngoại khóa.' },
    { name: 'Đào tạo và phát triển kỹ năng mềm', description: 'Rèn luyện kỹ năng làm việc nhóm, giải quyết vấn đề.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (trong lĩnh vực EdTech)',
    hireDemand: 'Cao (cho các nhà giáo dục đổi mới)',
  },
  relatedModules: [K2Module.RobloxGameDev, K2Module.Scratch, K2Module.Arduino],
  lessons: [
    {
      id: 'intro-to-minecraft-edu',
      title: 'Khám phá Minecraft Education',
      description:
        'Làm quen với phiên bản Minecraft Education, khám phá các tính năng độc đáo dành cho giáo dục và học cách điều khiển nhân vật, chế tạo và xây dựng trong thế giới khối vuông.',
      duration: '90 phút',
      difficulty: 'Cơ bản',
      videoUrl: 'https://www.youtube.com/watch?v=JqZfTqJ4OsI',
      imageUrl: '/images/modules/minecraft/minecraft-edu-intro.jpg',
      objectives: [
        'Phân biệt giữa Minecraft phiên bản thường và Minecraft Education.',
        'Nắm vững các kỹ năng di chuyển, phá block, và đặt block.',
        'Sử dụng bàn chế tạo (Crafting Table) để tạo ra các công cụ cơ bản.',
        'Hiểu về các vật phẩm và tính năng chỉ có trong bản Education như Camera, Portfolio, và NPC.',
      ],
      prerequisites: [
        'Tài khoản Microsoft 365 Education.',
        'Minecraft Education đã được cài đặt.',
        'Sự tò mò và yêu thích khám phá.',
      ],
      realWorldApplications: [
        'Phát triển kỹ năng giải quyết vấn đề và tư duy không gian.',
        'Học cách quản lý tài nguyên và lập kế hoạch.',
        'Nền tảng cho các dự án sáng tạo và kỹ thuật phức tạp hơn.',
      ],
      skills: ['navigation', 'crafting', 'inventory-management'],
      gameVersion: '1.18.32',
    },
    {
      id: 'code-builder-basics',
      title: 'Lập trình với Code Builder',
      description:
        'Học cách tự động hóa các tác vụ trong Minecraft bằng cách sử dụng Code Builder. Bắt đầu với lập trình khối (Block-based) để ra lệnh cho Agent của bạn xây dựng và thu thập tài nguyên.',
      duration: '150 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=KsVqBIWtRec',
      imageUrl: '/images/modules/minecraft/code-builder.jpg',
      objectives: [
        'Mở và sử dụng giao diện Code Builder.',
        'Hiểu khái niệm về Agent và cách ra lệnh cho nó.',
        'Sử dụng các khối lệnh để điều khiển Agent di chuyển, đặt và phá block.',
        'Viết một chương trình đơn giản để Agent xây một bức tường hoặc một hình khối.',
      ],
      prerequisites: [
        'Hoàn thành bài học "Khám phá Minecraft Education".',
        'Tư duy logic và khả năng phân tích các bước công việc.',
      ],
      realWorldApplications: [
        'Giới thiệu về các khái niệm lập trình cơ bản như vòng lặp, điều kiện và sự kiện.',
        'Phát triển kỹ năng tự động hóa và tư duy thuật toán.',
        'Nền tảng để chuyển sang lập trình bằng văn bản (text-based) như JavaScript hoặc Python.',
      ],
      skills: ['block-based-programming', 'automation', 'algorithmic-thinking'],
      gameVersion: '1.18.32',
    },
    {
      id: 'chemistry-in-minecraft',
      title: 'Thí nghiệm Hóa học Vui nhộn',
      description:
        'Khám phá các nguyên tố, hợp chất và các phản ứng hóa học thú vị bằng cách sử dụng các tính năng Hóa học độc quyền trong Minecraft Education.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=EFRbwG3x75g',
      imageUrl: '/images/modules/minecraft/chemistry-update.jpg',
      objectives: [
        'Sử dụng Element Constructor để tạo ra các nguyên tố.',
        'Kết hợp các nguyên tố trong Compound Creator để tạo hợp chất.',
        'Thực hiện các thí nghiệm trên Lab Table.',
        'Tạo ra các vật phẩm độc đáo như bóng bay, que phát sáng (glow sticks) và bom băng.',
      ],
      prerequisites: [
        'Kiến thức cơ bản về Minecraft.',
        'Bật tùy chọn "Chemistry" trong cài đặt thế giới (World Settings).',
      ],
      realWorldApplications: [
        'Học về bảng tuần hoàn và các nguyên tố hóa học một cách trực quan.',
        'Hiểu về cấu tạo phân tử của các hợp chất quen thuộc.',
        'Khơi dậy niềm đam mê với môn Hóa học thông qua các thí nghiệm an toàn và vui nhộn.',
      ],
      skills: ['chemistry', 'experimentation', 'compound-creation'],
      gameVersion: '1.18.32',
    },
  ],
};
