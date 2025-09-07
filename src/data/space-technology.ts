import { BaseLessonData } from '@/types/lesson-base';
export interface SpaceTechnologyLesson extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const spaceTechnologyLessons: SpaceTechnologyLesson[] = [
  {
    id: 'space-exploration-fundamentals',
    title: 'Nền tảng Công nghệ Vũ trụ',
    description:
      'Tìm hiểu về công nghệ vũ trụ, các loại vệ tinh, và cơ hội cho Việt Nam trong kỷ nguyên không gian mới.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=mhwoKfMzah4',
    imageUrl: 'https://i.ytimg.com/vi/mhwoKfMzah4/hqdefault.jpg',
    objectives: [
      'Hiểu lịch sử và tình hình hiện tại của việc khám phá không gian.',
      'Nắm rõ các loại tàu vũ trụ và công nghệ vệ tinh.',
      'Khám phá các cơ hội cho Việt Nam trong ngành công nghiệp vũ trụ.',
      'Học về quy trình lập kế hoạch và thực hiện một sứ mệnh không gian.',
    ],
    prerequisites: ['Kiến thức cơ bản về vật lý và toán học.', 'Sự yêu thích khoa học và khám phá.'],
    exercises: [
      {
        title: 'Lập kế hoạch Sứ mệnh Vệ tinh Ảo',
        description: 'Thiết kế và lập kế hoạch cho một sứ mệnh quan sát Trái Đất giả định dành cho Việt Nam.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các mục tiêu của sứ mệnh (ví dụ: theo dõi thời tiết, nông nghiệp, giám sát thiên tai).',
          'Thiết kế các thông số kỹ thuật cơ bản cho vệ tinh và chọn quỹ đạo phù hợp.',
          'Ước tính chi phí và thời gian thực hiện sứ mệnh.',
          'Lập kế hoạch về các trạm mặt đất cần thiết tại Việt Nam.',
        ],
        expectedResults: 'Một bản đề xuất sứ mệnh vệ tinh hoàn chỉnh, sẵn sàng để được đánh giá.',
      },
    ],
    realWorldApplications: [
      'Dự báo thời tiết và theo dõi biến đổi khí hậu.',
      'Giám sát nông nghiệp và dự đoán năng suất cây trồng.',
      'Hỗ trợ ứng phó thiên tai và truyền thông khẩn cấp.',
      'Giám sát hàng hải và an ninh biển.',
    ],
    caseStudies: [
      {
        title: 'Chương trình Vệ tinh VINASAT',
        organization: 'Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)',
        problem:
          'Việt Nam cần khả năng truyền thông vệ tinh độc lập để đảm bảo an ninh thông tin và phục vụ phát triển kinh tế-xã hội.',
        solution: 'Phóng thành công hai vệ tinh viễn thông VINASAT-1 (2008) và VINASAT-2 (2012) lên quỹ đạo.',
        impact:
          'Tăng cường đáng kể hạ tầng viễn thông, giảm sự phụ thuộc vào các nhà cung cấp nước ngoài, phủ sóng đến các vùng sâu, vùng xa, hải đảo.',
        innovations: ['Làm chủ vận hành vệ tinh', 'Cung cấp dịch vụ đa mục đích', 'Năng lực ứng phó thiên tai'],
      },
    ],
    vietnamContext: {
      title: 'Chiến lược Phát triển Công nghệ Vũ trụ Việt Nam',
      content: [
        'Việt Nam đặt mục tiêu đến năm 2030 sẽ tự chủ trong việc chế tạo các vệ tinh nhỏ quan sát Trái Đất.',
        'Trung tâm Vũ trụ Việt Nam (VNSC) tại Hòa Lạc là dự án trọng điểm quốc gia, với các phòng thí nghiệm, trung tâm điều khiển và bảo tàng vũ trụ.',
        'Ứng dụng công nghệ vệ tinh trong quản lý tài nguyên, môi trường, và nông nghiệp thông minh là ưu tiên hàng đầu.',
      ],
    },
    careerConnect: {
      name: 'Phạm Anh Tuấn',
      title: 'Tổng Giám đốc Trung tâm Vũ trụ Việt Nam (VNSC)',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-anh-tuan-vnsc',
      quote:
        'Làm chủ công nghệ vũ trụ không chỉ là niềm tự hào dân tộc, mà còn là một công cụ chiến lược để giải quyết các vấn đề thực tiễn của đất nước và thúc đẩy sự phát triển bền vững.',
    },
    quizzes: [
      {
        question: 'Vệ tinh VINASAT-1 của Việt Nam được phóng vào năm nào?',
        options: ['2005', '2008', '2012', '2015'],
        correctAnswerIndex: 1,
        explanation:
          'VINASAT-1, vệ tinh viễn thông đầu tiên của Việt Nam, đã được phóng thành công vào ngày 19 tháng 4 năm 2008, đánh dấu một cột mốc quan trọng trong lịch sử công nghệ vũ trụ của đất nước.',
      },
    ],
  },
  {
    id: 'satellite-communications-gps',
    title: 'Truyền thông Vệ tinh và Định vị Toàn cầu (GPS)',
    description:
      'Tìm hiểu cách vệ tinh cho phép chúng ta giao tiếp xuyên lục địa và xác định vị trí chính xác ở bất kỳ đâu trên Trái Đất.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=srS66A7j5Is',
    imageUrl: 'https://i.ytimg.com/vi/srS66A7j5Is/hqdefault.jpg',
    objectives: [
      'Hiểu nguyên lý hoạt động của truyền thông vệ tinh.',
      'Phân biệt các loại quỹ đạo vệ tinh (LEO, MEO, GEO).',
      'Nắm vững cách hệ thống GPS hoạt động với ít nhất 4 vệ tinh.',
      'Khám phá các ứng dụng của GPS ngoài việc chỉ đường.',
    ],
    prerequisites: ["Hoàn thành bài 'Nền tảng Công nghệ Vũ trụ'"],
    exercises: [
      {
        title: 'Phân tích Tín hiệu GPS',
        description:
          'Sử dụng một ứng dụng trên điện thoại thông minh để xem các vệ tinh GPS mà thiết bị của bạn đang kết nối và phân tích cường độ tín hiệu.',
        difficulty: 'Cơ bản',
        procedure: [
          'Cài đặt một ứng dụng phân tích GPS (ví dụ: GPS Test).',
          'Ra một khu vực thoáng đãng.',
          'Quan sát số lượng vệ tinh trong tầm nhìn và số lượng đang được sử dụng.',
          'Ghi lại cường độ tín hiệu (SNR) của từng vệ tinh.',
          'Di chuyển vào gần một tòa nhà cao tầng và quan sát sự thay đổi.',
        ],
        expectedResults:
          'Hiểu được rằng độ chính xác của GPS phụ thuộc vào số lượng và chất lượng tín hiệu từ nhiều vệ tinh.',
      },
    ],
    realWorldApplications: [
      'Truyền hình vệ tinh (K+).',
      'Điện thoại vệ tinh dùng trong các khu vực không có sóng di động.',
      'Hệ thống định vị trên ô tô, xe máy (Grab, Google Maps).',
      'Đồng bộ hóa thời gian cho các hệ thống tài chính và mạng máy tính.',
    ],
    caseStudies: [
      {
        title: 'Starlink của SpaceX: Internet Toàn cầu',
        organization: 'SpaceX',
        problem:
          'Hàng tỷ người trên thế giới vẫn chưa có kết nối Internet băng thông rộng, đáng tin cậy, đặc biệt là ở các vùng nông thôn và hẻo lánh.',
        solution:
          'Phóng hàng ngàn vệ tinh nhỏ lên quỹ đạo Trái Đất tầm thấp (LEO) để tạo thành một mạng lưới khổng lồ, cung cấp Internet tốc độ cao đến mọi nơi.',
        impact:
          'Có khả năng cách mạng hóa việc truy cập Internet toàn cầu, hỗ trợ giáo dục từ xa, y tế từ xa và phát triển kinh tế cho các khu vực khó khăn.',
        innovations: [
          'Mạng lưới vệ tinh LEO quy mô lớn',
          'Sản xuất vệ tinh hàng loạt',
          'Thiết bị đầu cuối người dùng nhỏ gọn',
        ],
      },
    ],
    vietnamContext: {
      title: 'GPS và Chuyển đổi số trong Giao thông Vận tải Việt Nam',
      content: [
        'Hệ thống giám sát hành trình (hộp đen) sử dụng GPS là yêu cầu bắt buộc đối với xe kinh doanh vận tải tại Việt Nam, giúp quản lý và tăng cường an toàn.',
        'Các ứng dụng gọi xe công nghệ như Grab, Gojek, Be đã thay đổi hoàn toàn ngành vận tải đô thị, với GPS là công nghệ cốt lõi.',
        'GPS giúp nông dân thực hiện nông nghiệp chính xác, tối ưu hóa việc gieo hạt và bón phân trên các cánh đồng lớn.',
      ],
    },
    careerConnect: {
      name: 'Bác Gia Bình',
      title: 'Cựu Chủ tịch Hội đồng Quản trị',
      company: 'FPT Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=gia-binh',
      quote:
        'Chuyển đổi số không phải là một lựa chọn, đó là con đường duy nhất để các quốc gia như Việt Nam có thể bắt kịp và vượt lên. Công nghệ vũ trụ và ứng dụng của nó là một phần không thể thiếu của hành trình đó.',
    },
    quizzes: [
      {
        question:
          'Để xác định chính xác vị trí 3D (kinh độ, vĩ độ, cao độ) của bạn, một máy thu GPS cần nhận được tín hiệu từ ít nhất bao nhiêu vệ tinh?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation:
          'Về lý thuyết, 3 vệ tinh là đủ để xác định vị trí 2D. Tuy nhiên, cần có tín hiệu từ vệ tinh thứ tư để giải quyết sai số về thời gian và đồng bộ đồng hồ, từ đó cung cấp vị trí 3D chính xác.',
      },
    ],
  },
];
