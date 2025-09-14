import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface RobloxLessonType extends BaseLessonData {
  studioVersion: string;
  luaVersion: string;
}

export const robloxLessons: RobloxLessonType[] = [
  {
    id: 'roblox-studio-intro',
    title: 'Bắt đầu với Roblox Studio',
    description:
      'Làm quen với giao diện Roblox Studio, các công cụ xây dựng cơ bản và tạo ra không gian 3D đầu tiên của bạn.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=srOXlSvpLI8',
    imageUrl: 'https://i.ytimg.com/vi/srOXlSvpLI8/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Hiểu rõ giao diện và các cửa sổ chính của Roblox Studio.',
      'Sử dụng các công cụ để tạo và thao tác với các đối tượng (Parts).',
      'Xây dựng một cảnh quan đơn giản với địa hình và các vật thể.',
      'Lưu và xuất bản dự án đầu tiên của bạn lên Roblox.',
    ],
    prerequisites: ['Tài khoản Roblox.', 'Máy tính đã cài đặt Roblox Studio.', 'Kỹ năng sử dụng máy tính cơ bản.'],
    exercises: [
      {
        title: 'Xây dựng Ngôi nhà đầu tiên',
        description: 'Thực hành sử dụng các Part để xây dựng một ngôi nhà đơn giản với tường, mái và cửa.',
        difficulty: 'Cơ bản',
        procedure: [
          'Mở một template Baseplate trong Roblox Studio.',
          'Sử dụng công cụ Part để tạo các khối cho tường nhà.',
          'Dùng công cụ Scale, Move, và Rotate để điều chỉnh kích thước và vị trí các bức tường.',
          'Tạo một mái nhà bằng cách sử dụng Part hình nêm (Wedge).',
          'Thêm một Part làm cửa ra vào.',
        ],
        expectedResults: 'Một mô hình ngôi nhà 3D đơn giản được xây dựng từ các Parts.',
      },
    ],
    realWorldApplications: [
      'Nền tảng để thiết kế bất kỳ loại game nào trên Roblox.',
      'Kỹ năng thiết kế cấp độ (level design) cho game.',
      'Tạo ra các mô hình 3D cho các dự án cá nhân hoặc bán trên Marketplace.',
    ],
    vietnamContext: {
      title: 'Cộng đồng Sáng tạo Roblox tại Việt Nam',
      content: [
        'Cộng đồng nhà phát triển game Roblox (Roblox developers) tại Việt Nam đang phát triển rất mạnh mẽ, với nhiều diễn đàn, nhóm trên mạng xã hội và các cuộc thi được tổ chức. Đây là một sân chơi tuyệt vời để học hỏi, giao lưu và hợp tác.',
        'Nhiều nhà phát triển Việt Nam đã tạo ra những tựa game thành công trên Roblox, thu hút hàng triệu lượt chơi và tạo ra nguồn thu nhập đáng kể. Điều này cho thấy tiềm năng to lớn của việc phát triển game trên nền tảng này.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Minh "T-Dev" Trí',
      title: 'Nhà phát triển Game Roblox & YouTuber',
      company: 'T-Dev Studio',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-minh-tri',
      quote:
        'Roblox không chỉ là một trò chơi, đó là một vũ trụ nơi bạn có thể xây dựng bất cứ điều gì bạn tưởng tượng. Bắt đầu từ những khối vuông đơn giản, bạn có thể tạo ra cả một thế giới và chia sẻ nó với hàng triệu người.',
    },
    quizzes: [
      {
        question: 'Công cụ nào trong Roblox Studio dùng để tạo các khối vật thể cơ bản?',
        options: ['Toolbox', 'Explorer', 'Part', 'Script'],
        correctAnswerIndex: 2,
        explanation:
          'Công cụ "Part" cho phép bạn chèn các vật thể cơ bản như khối hộp, hình cầu, hình trụ và hình nêm vào không gian game của mình.',
      },
      {
        question: 'Cửa sổ nào hiển thị cấu trúc phân cấp của tất cả các đối tượng trong game?',
        options: ['Properties', 'Explorer', 'Toolbox', 'Output'],
        correctAnswerIndex: 1,
        explanation:
          'Cửa sổ "Explorer" hiển thị tất cả các đối tượng trong game của bạn dưới dạng cây thư mục, giúp bạn dễ dàng quản lý và tìm kiếm chúng.',
      },
    ],
  },
  {
    id: 'lua-scripting-basics',
    title: 'Lập trình Lua cơ bản cho Game Roblox',
    description:
      'Học những khái niệm cơ bản của ngôn ngữ lập trình Lua, ngôn ngữ chính được sử dụng trong Roblox, để làm cho các đối tượng trong game của bạn có thể tương tác.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=srOXlSvpLI8',
    imageUrl: 'https://i.ytimg.com/vi/srOXlSvpLI8/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Hiểu về biến, kiểu dữ liệu và các toán tử trong Lua.',
      'Sử dụng các cấu trúc điều khiển như if-then-else và vòng lặp.',
      'Viết các hàm (functions) để tái sử dụng code.',
      'Tạo một Script đơn giản để thay đổi thuộc tính của một Part (ví dụ: màu sắc, độ trong suốt).',
    ],
    prerequisites: ['Hoàn thành bài học "Bắt đầu với Roblox Studio".', 'Tư duy logic và giải quyết vấn đề.'],
    exercises: [
      {
        title: 'Tạo một Part đổi màu',
        description: 'Viết một script Lua để một Part tự động thay đổi màu sắc sau mỗi vài giây.',
        difficulty: 'Trung bình',
        procedure: [
          'Tạo một Part trong Workspace.',
          'Thêm một Script vào trong Part đó.',
          'Trong Script, viết một vòng lặp vô tận (while true do).',
          'Bên trong vòng lặp, thay đổi thuộc tính Color của Part.',
          'Sử dụng hàm wait() để tạo độ trễ giữa các lần đổi màu.',
        ],
        expectedResults: 'Part sẽ liên tục đổi màu khi chạy game.',
        solution:
          '```lua\nlocal part = script.Parent\n\nwhile true do\n  part.Color = Color3.new(math.random(), math.random(), math.random())\n  wait(1)\nend\n```',
      },
    ],
    realWorldApplications: [
      'Tạo ra cơ chế game (game mechanics) như cửa tự động mở, bẫy, hoặc các nút bấm.',
      'Lập trình hành vi cho các nhân vật NPC (Non-Player Character).',
      'Xây dựng hệ thống tính điểm, tiền tệ trong game.',
    ],
    vietnamContext: {
      title: 'Lua: Ngôn ngữ lập trình "Made in Brazil" phổ biến tại Việt Nam',
      content: [
        'Mặc dù không phải là ngôn ngữ lập trình phổ biến nhất trong ngành công nghiệp phần mềm nói chung, Lua lại cực kỳ phổ biến trong cộng đồng phát triển game tại Việt Nam nhờ Roblox.',
        'Sự đơn giản, dễ học của Lua là một rào cản gia nhập thấp, cho phép nhiều bạn trẻ, thậm chí là học sinh cấp 2, cấp 3, có thể bắt đầu hành trình lập trình và sáng tạo game của riêng mình.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần "Mèo" Anh Thư',
      title: 'Lập trình viên Gameplay',
      company: 'Uplift Games (Adopt Me!)',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-anh-thu',
      quote:
        'Lập trình trong Roblox giống như ban phép thuật cho các vật thể. Bạn ra lệnh, và chúng tuân theo. Với Lua, bạn có thể tạo ra những cơ chế game phức tạp từ những dòng code đơn giản. Sức mạnh nằm ở sự sáng tạo của bạn.',
    },
    quizzes: [
      {
        question: 'Ngôn ngữ lập trình chính được sử dụng trong Roblox là gì?',
        options: ['Python', 'JavaScript', 'C++', 'Lua'],
        correctAnswerIndex: 3,
        explanation:
          'Roblox sử dụng một phiên bản của Lua, một ngôn ngữ kịch bản nhẹ và mạnh mẽ, để lập trình các hành vi và cơ chế trong game.',
      },
      {
        question: 'Trong Lua, hàm `wait(n)` có chức năng gì?',
        options: [
          'Chờ người chơi nhấn một nút',
          'Tạm dừng script trong `n` giây',
          'Làm cho script chạy nhanh hơn `n` lần',
          'In ra số `n`',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hàm `wait(n)` là một hàm rất quan trọng trong Roblox, dùng để tạo độ trễ và ngăn các vòng lặp vô tận làm treo game.',
      },
    ],
  },
  {
    id: 'publishing-your-game',
    title: 'Xuất bản và Quảng bá Game của bạn',
    description:
      'Tìm hiểu các bước cuối cùng để đưa game của bạn đến với cộng đồng Roblox, bao gồm cấu hình game, tạo icon, và các chiến lược quảng bá cơ bản.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=M3Jj6cwDChE',
    imageUrl: 'https://i.ytimg.com/vi/M3Jj6cwDChE/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Cấu hình các thiết lập quan trọng cho game (tên, mô tả, thể loại).',
      'Thiết kế icon và thumbnail hấp dẫn cho game.',
      'Hiểu các tùy chọn về kiếm tiền trong game (Game Passes, Developer Products).',
      'Xuất bản game và chia sẻ với bạn bè.',
    ],
    prerequisites: ['Có một game (dù đơn giản) đã được tạo.', 'Hoàn thành các bài học trước.'],
    exercises: [
      {
        title: 'Thiết lập trang Game',
        description: 'Thực hành cấu hình trang chính cho game của bạn để thu hút người chơi.',
        difficulty: 'Cơ bản',
        procedure: [
          'Vào menu File > Game Settings.',
          'Điền các thông tin cơ bản như tên và mô tả game.',
          'Trong tab Monetization, tạo một Game Pass thử nghiệm.',
          'Lưu các thiết lập và xuất bản game.',
        ],
        expectedResults: 'Game của bạn được xuất bản và có một trang thông tin cơ bản trên Roblox.',
      },
    ],
    realWorldApplications: [
      'Phát hành một sản phẩm phần mềm hoàn chỉnh.',
      'Kỹ năng marketing và quảng bá sản phẩm.',
      'Cơ hội kiếm thu nhập từ việc phát triển game.',
    ],
    vietnamContext: {
      title: 'Từ "Sân chơi" đến "Sự nghiệp"',
      content: [
        'Nhiều nhà phát triển game chuyên nghiệp tại Việt Nam đã có bước khởi đầu từ việc xuất bản những game đơn giản trên Roblox. Đây là một môi trường thực tế để học hỏi về chu kỳ phát triển sản phẩm, từ ý tưởng, phát triển, đến phát hành và thu thập phản hồi từ người dùng.',
        'Chương trình Developer Exchange (DevEx) của Roblox cho phép các nhà phát triển đổi tiền ảo trong game (Robux) ra tiền thật, mở ra một con đường sự nghiệp thực sự cho những ai nghiêm túc và tạo ra được các sản phẩm chất lượng.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê "LêAK" Anh Kiệt',
      title: 'Nhà sản xuất Game',
      company: 'Gamefam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-anh-kiet',
      quote:
        'Việc nhấn nút "Publish" lần đầu tiên là một khoảnh khắc đáng nhớ. Nó biến bạn từ một người chơi game thành một người tạo ra game. Đừng sợ thất bại, mỗi lượt chơi, mỗi phản hồi đều là một bài học quý giá để bạn làm tốt hơn trong lần tiếp theo.',
    },
    quizzes: [
      {
        question: '"Game Pass" trong Roblox là gì?',
        options: [
          'Một vé để vào chơi game',
          'Một vật phẩm bán một lần, mang lại lợi ích vĩnh viễn cho người chơi (ví dụ: VIP, vũ khí đặc biệt)',
          'Một vật phẩm có thể mua nhiều lần (ví dụ: tiền trong game)',
          'Một bản cập nhật của game',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Game Pass là một hình thức kiếm tiền phổ biến, cho phép người chơi mua một lần để nhận được các đặc quyền hoặc vật phẩm vĩnh viễn trong game đó.',
      },
      {
        question: 'Chương trình DevEx của Roblox cho phép nhà phát triển làm gì?',
        options: [
          'Nhận các công cụ phát triển độc quyền',
          'Quảng cáo game của họ miễn phí',
          'Đổi tiền ảo Robux kiếm được từ game ra tiền thật',
          'Tham gia các sự kiện của Roblox',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Developer Exchange (DevEx) là chương trình cho phép các nhà phát triển thành công biến đam mê của mình thành một nguồn thu nhập thực sự bằng cách quy đổi Robux sang USD.',
      },
    ],
  },
];

export const robloxGameDevModuleData: ModuleData = {
  id: 'roblox-game-dev',
  title: 'Phát triển Game với Roblox',
  subtitle: 'Từ ý tưởng đến thế giới 3D tương tác',
  description:
    'Khóa học này sẽ dẫn dắt bạn qua toàn bộ quá trình tạo ra một trò chơi trên nền tảng Roblox. Bạn sẽ học cách sử dụng Roblox Studio, một công cụ mạnh mẽ để xây dựng thế giới 3D, và làm quen với Lua, ngôn ngữ lập trình giúp bạn thổi hồn vào các vật thể và tạo ra những trải nghiệm tương tác độc đáo. Đây là bước khởi đầu hoàn hảo cho những ai đam mê sáng tạo và muốn trở thành một nhà phát triển game.',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  category: 'Creative Technology',
  features: [
    'Hướng dẫn trực quan với Roblox Studio.',
    'Lập trình game với ngôn ngữ Lua dễ tiếp cận.',
    'Xây dựng các kịch bản game từ đơn giản đến phức tạp.',
    'Học cách xuất bản và chia sẻ game với cộng đồng hàng triệu người chơi.',
  ],
  icon: '🎮',
  color: 'from-red-500 to-rose-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1611996573833-5c8a5b39b8a1?w=1200&h=600&fit=crop',
  objectives: [
    'Sử dụng thành thạo các công cụ trong Roblox Studio để xây dựng và thiết kế.',
    'Viết mã Lua để tạo ra các cơ chế và tương tác trong game.',
    'Hiểu các nguyên tắc cơ bản của thiết kế game.',
    'Xuất bản thành công một game hoàn chỉnh lên nền tảng Roblox.',
  ],
  prerequisites: [
    'Kỹ năng sử dụng máy tính cơ bản.',
    'Tư duy sáng tạo và logic.',
    'Không yêu cầu kinh nghiệm lập trình trước đó.',
  ],
  careerOutcomes: [
    'Nhà phát triển game Roblox',
    'Nhà thiết kế cấp độ (Level Designer)',
    'Lập trình viên Lua',
    'Người sáng tạo nội dung game',
  ],
  industryApplications: [
    'Giải trí và Trò chơi điện tử',
    'Giáo dục (tạo ra các bài học tương tác)',
    'Mô phỏng và Huấn luyện',
    'Marketing và Sự kiện ảo',
  ],
  marketDemand: {
    averageSalary: 'Thỏa thuận (dựa trên doanh thu game)',
    jobGrowth: '+30%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['game-development', 'python', 'ai-art-creative-tech'],
};
