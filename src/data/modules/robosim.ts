import { BaseLessonData } from '@/types/lesson-base';
export interface RobosimLessonType extends BaseLessonData {
  competitionFocus: string[];
  programmingLang: string[];
  keyConcepts: string[];
}

export const robosimLessons: RobosimLessonType[] = [
  {
    id: 'intro-to-robosim',
    title: 'Giới thiệu Robosim và các cuộc thi Robotics',
    description:
      'Khám phá thế giới robot giả lập, làm quen với các cuộc thi robotics phổ biến tại Việt Nam và tìm hiểu tại sao kỹ năng này lại quan trọng cho tương lai.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=JkgqysIeaEE',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu được Robosim là gì và lợi ích của việc học robotics qua giả lập.',
      'Nắm được thông tin về các cuộc thi robotics lớn ở Việt Nam: VEX IQ, FLL, RoboBimi.',
      'Xác định được các kỹ năng cần thiết để thành công trong các cuộc thi.',
      'Làm quen với giao diện của một nền tảng Robosim phổ biến.',
    ],
    prerequisites: ['Đam mê công nghệ và robot', 'Tư duy logic cơ bản', 'Không yêu cầu kinh nghiệm lập trình'],
    competitionFocus: ['Tổng quan', 'VEX IQ', 'FIRST LEGO League (FLL)', 'RoboBimi'],
    programmingLang: ['Block-based (Scratch, VEXcode VR)', 'Python'],
    keyConcepts: ['Robotics', 'Simulation', 'Competition Strategy', 'Problem Solving'],
    exercises: [
      {
        title: 'Khám phá Sân thi đấu ảo',
        description:
          'Làm quen với môi trường giả lập, điều khiển robot mẫu di chuyển và tương tác với các vật thể trong sân thi đấu ảo.',
        difficulty: 'Cơ bản',
        procedure: [
          'Truy cập nền tảng VEXcode VR.',
          'Chọn một sân chơi (playground) có sẵn.',
          'Sử dụng các khối lệnh di chuyển để robot đi từ điểm A đến điểm B.',
          'Thử dùng cảm biến để robot dừng lại khi gặp tường.',
        ],
        expectedResults: 'Học sinh điều khiển được robot hoàn thành một nhiệm vụ đơn giản trong môi trường giả lập.',
      },
    ],
    realWorldApplications: [
      'Kỹ sư thiết kế và thử nghiệm robot công nghiệp.',
      'Chuyên gia lập trình cho xe tự hành.',
      'Nhà nghiên cứu phát triển robot trong y tế và thám hiểm không gian.',
    ],
    caseStudies: [
      {
        title: 'Đội tuyển Việt Nam vô địch thế giới VEX IQ 2023',
        organization: 'Nhiều trường THCS tại Việt Nam',
        problem:
          'Làm thế nào để các đội tuyển Việt Nam có thể cạnh tranh và chiến thắng tại đấu trường robotics quốc tế lớn nhất thế giới?',
        solution:
          'Đầu tư vào đào tạo sớm, sử dụng các nền tảng giả lập để luyện tập chiến thuật không giới hạn, và tập trung vào kỹ năng làm việc nhóm, giải quyết vấn đề.',
        impact:
          'Nhiều đội tuyển Việt Nam đạt giải cao, bao gồm cả chức vô địch thế giới, khẳng định vị thế của học sinh Việt Nam.',
        innovations: ['Chiến thuật thi đấu sáng tạo', 'Thiết kế robot hiệu quả', 'Kỹ năng lập trình tối ưu'],
      },
    ],
    resources: [
      { title: 'VEXcode VR', url: 'https://vr.vex.com/', type: 'Tool' },
      {
        title: 'FIRST LEGO League Vietnam',
        url: 'https://www.facebook.com/firstlegoleaguevietnam/',
        type: 'Reference',
      },
    ],
  },
  {
    id: 'vex-iq-challenge-guide',
    title: 'Chinh phục VEX IQ Challenge',
    description:
      'Hướng dẫn chi tiết về cuộc thi VEX IQ, từ việc phân tích luật chơi, thiết kế robot, lập trình và chiến thuật thi đấu hiệu quả.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=oId2PQhm1_Q',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    objectives: [
      'Phân tích và hiểu rõ luật chơi của một mùa giải VEX IQ cụ thể.',
      'Học các nguyên tắc thiết kế robot VEX IQ hiệu quả (khung gầm, hệ thống nâng, gắp).',
      'Lập trình robot tự hành và điều khiển từ xa bằng VEXcode.',
      'Xây dựng chiến thuật thi đấu và kỹ năng làm việc nhóm.',
    ],
    prerequisites: ['Hoàn thành bài "Giới thiệu Robosim"', 'Làm quen với VEXcode VR'],
    competitionFocus: ['VEX IQ Challenge'],
    programmingLang: ['VEXcode (Block-based & Python)'],
    keyConcepts: ['Game Analysis', 'Robot Design', 'Autonomous Programming', 'Driver Skills'],
    exercises: [
      {
        title: 'Lập trình tự hành ghi điểm',
        description: 'Lập trình robot tự di chuyển, nhận diện và ghi điểm với các vật thể trong sân thi đấu VEX IQ ảo.',
        difficulty: 'Trung bình',
        procedure: [
          'Mở sân thi đấu VEX IQ của mùa giải hiện tại trên VEXcode VR.',
          'Sử dụng cảm biến màu sắc để robot nhận diện các khối màu.',
          'Lập trình robot di chuyển đến các khối, gắp chúng và đặt vào khu vực ghi điểm.',
          'Tối ưu hóa lộ trình để ghi được nhiều điểm nhất trong thời gian giới hạn.',
        ],
        expectedResults: 'Robot hoàn thành bài thi tự hành và ghi được ít nhất 50% số điểm tối đa.',
      },
      {
        title: 'Luyện tập kỹ năng điều khiển',
        description: 'Sử dụng chương trình điều khiển từ xa để hoàn thành các nhiệm vụ phức tạp đòi hỏi sự khéo léo.',
        difficulty: 'Trung bình',
        procedure: [
          'Cấu hình bộ điều khiển từ xa trong VEXcode.',
          'Lập trình các nút bấm để điều khiển các cơ cấu của robot (di chuyển, nâng, gắp).',
          'Luyện tập phối hợp di chuyển và thao tác để ghi điểm hiệu quả.',
          'Thi đấu đối kháng giả lập với một robot khác.',
        ],
        expectedResults: 'Học sinh điều khiển robot một cách thành thạo và hiệu quả.',
      },
    ],
    realWorldApplications: [
      'Kỹ sư cơ khí thiết kế máy móc tự động.',
      'Lập trình viên hệ thống nhúng.',
      'Chuyên gia điều khiển robot trong các dây chuyền sản xuất.',
    ],
    resources: [
      {
        title: 'VEX IQ Challenge Current Game',
        url: 'https://www.vexrobotics.com/vex-iq/competition/current-game',
        type: 'Reference',
      },
      { title: 'Kênh YouTube của VEX Robotics', url: 'https://www.youtube.com/user/vexrobotics', type: 'Tutorial' },
    ],
  },
  {
    id: 'first-lego-league-essentials',
    title: 'Nhập môn FIRST LEGO League (FLL)',
    description:
      'Tìm hiểu về FLL, cuộc thi kết hợp giữa robot game, dự án nghiên cứu và các giá trị cốt lõi. Học cách xây dựng robot LEGO và phát triển dự án sáng tạo.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=9ZrWsVKT30A',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu rõ 3 phần của một mùa giải FLL: Robot Game, Innovation Project, và Core Values.',
      'Làm quen với bộ lập trình LEGO Mindstorms (EV3 hoặc Spike Prime).',
      'Học cách xây dựng các cơ cấu robot LEGO để thực hiện nhiệm vụ.',
      'Phát triển kỹ năng nghiên cứu và trình bày cho Innovation Project.',
    ],
    prerequisites: ['Tư duy sáng tạo và làm việc nhóm', 'Yêu thích LEGO và giải quyết vấn đề'],
    competitionFocus: ['FIRST LEGO League (FLL)'],
    programmingLang: ['LEGO Mindstorms (Block-based)', 'Python (với Spike Prime)'],
    keyConcepts: ['Project-Based Learning', 'Innovation', 'Core Values', 'Robot Design'],
    exercises: [
      {
        title: 'Giải một nhiệm vụ Robot Game',
        description:
          'Thiết kế, xây dựng và lập trình một robot LEGO để hoàn thành một nhiệm vụ cụ thể trên sa bàn FLL.',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích một nhiệm vụ trên sa bàn: mục tiêu, điểm số, ràng buộc.',
          'Brainstorm các ý tưởng cơ cấu robot để giải quyết nhiệm vụ.',
          'Xây dựng robot và các tay gắp (attachments) cần thiết.',
          'Lập trình robot di chuyển từ khu vực xuất phát, hoàn thành nhiệm vụ và quay về.',
          'Thử nghiệm và cải tiến để robot hoạt động ổn định và chính xác.',
        ],
        expectedResults: 'Robot LEGO có thể hoàn thành nhiệm vụ một cách nhất quán trong 3 lần chạy thử.',
      },
      {
        title: 'Phát triển ý tưởng Innovation Project',
        description:
          'Thực hiện quy trình nghiên cứu để tìm ra một vấn đề và đề xuất giải pháp sáng tạo liên quan đến chủ đề của mùa giải.',
        difficulty: 'Trung bình',
        procedure: [
          'Nghiên cứu chủ đề của mùa giải FLL hiện tại.',
          'Xác định một vấn đề cụ thể trong cộng đồng liên quan đến chủ đề.',
          'Phỏng vấn chuyên gia và những người bị ảnh hưởng bởi vấn đề.',
          'Brainstorm các giải pháp sáng tạo.',
          'Phát triển một giải pháp và chuẩn bị bài trình bày 5 phút.',
        ],
        expectedResults:
          'Một bài trình bày chi tiết về vấn đề và giải pháp, sẵn sàng để trình bày trước ban giám khảo.',
      },
    ],
    realWorldApplications: [
      'Nhà khoa học và kỹ sư giải quyết các vấn đề thực tiễn.',
      'Doanh nhân xã hội phát triển các dự án vì cộng đồng.',
      'Chuyên gia phát triển sản phẩm mới.',
    ],
    resources: [
      { title: 'FIRST LEGO League Official Website', url: 'https://www.firstlegoleague.org/', type: 'Reference' },
      { title: 'STEAM for Vietnam', url: 'https://www.steamforvietnam.org/', type: 'Organization' },
    ],
  },
];

export const robosimModuleData = {
  id: 'robosim',
  title: 'RoboSim: Lập Trình & Thi Đấu Robot',
  subtitle: 'Mô phỏng và chiến lược thi đấu robot',
  description:
    'Khóa học giới thiệu về lập trình robot mô phỏng, tập trung vào các cuộc thi robotics phổ biến tại Việt Nam như VEX IQ và First Lego League. Học sinh sẽ được học về chiến lược, thiết kế và lập trình robot hiệu quả.',
  category: 'programming',
  icon: '🤖',
  color: 'from-blue-600 to-indigo-600',
  totalDuration: '10-12 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '10-12 giờ',
  href: '/learning/robosim',
  features: [
    'Giới thiệu các cuộc thi robotics tại Việt Nam',
    'Lập trình robot mô phỏng',
    'Chiến lược thi đấu hiệu quả',
    'Kỹ năng làm việc nhóm và giải quyết vấn đề',
  ],
  tags: ['robotics', 'robosim', 'vex iq', 'first lego league', 'stem'],
  prerequisites: ['Tư duy logic cơ bản', ' đam mê công nghệ và robot', 'Không yêu cầu kinh nghiệm lập trình'],
};
