import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export interface RoboticsLessonType extends BaseLessonData {
  category: 'hardware' | 'programming' | 'projects' | 'theory';
  codeExample?: string;
  materials: string[];
  competitions: string[];
}

export const roboticsLessons: RoboticsLessonType[] = [
  {
    id: 'nhap-mon-robotics',
    title: 'Nhập môn Robotics',
    description: 'Giới thiệu về thế giới robot, lịch sử phát triển, các thành phần cơ bản và phân loại robot.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=p2WfJe7qC-s',
    imageUrl: 'https://i.ytimg.com/vi/p2WfJe7qC-s/hqdefault.jpg',
    objectives: [
      'Hiểu định nghĩa về robot và lịch sử của ngành robotics.',
      'Phân biệt được các loại robot phổ biến (công nghiệp, dịch vụ, tự hành).',
      'Nắm được 3 thành phần chính của một robot: Cơ khí, Điện-Điện tử, và Điều khiển.',
      'Nhận biết các ứng dụng của robot trong đời sống hiện đại.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
    exercises: [
      {
        title: 'Phân tích Robot quanh ta',
        description: 'Xác định và phân loại các thiết bị tự động hoặc robot mà bạn gặp trong cuộc sống hàng ngày.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê 5 thiết bị tự động (ví dụ: máy giặt, máy hút bụi tự động, cửa tự động).',
          'Đối với mỗi thiết bị, thử xác định các thành phần cơ khí, điện và chương trình điều khiển của nó.',
          'Phân loại chúng vào các nhóm robot phù hợp.',
        ],
        expectedResults: 'Một danh sách các thiết bị tự động được phân tích theo cấu trúc của robot.',
      },
    ],
    realWorldApplications: ['Robot hút bụi', 'Máy bay không người lái (Drone)', 'Robot trong nhà máy lắp ráp ô tô'],
    vietnamContext: {
      title: 'Robotics tại Việt Nam: Từ công nghiệp đến giáo dục',
      content: [
        'Các nhà máy sản xuất lớn tại Việt Nam (như VinFast, Samsung) đang ứng dụng mạnh mẽ robot công nghiệp để tự động hóa dây chuyền.',
        'Giáo dục STEM với robotics đang bùng nổ, với nhiều cuộc thi như Robocon, VEX Robotics Competition thu hút hàng ngàn học sinh, sinh viên.',
        'Các startup Việt đang phát triển robot dịch vụ cho nhà hàng, khách sạn và robot nông nghiệp thông minh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Kỹ sư trưởng đội Robocon',
      company: 'Đại học Bách Khoa Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a-robocon',
      quote:
        'Robotics là sự kết hợp tuyệt vời giữa sáng tạo và kỹ thuật. Mỗi cuộc thi là một lần chúng tôi đẩy giới hạn của bản thân và công nghệ.',
    },
    quizzes: [
      {
        question: 'Ba thành phần chính cấu tạo nên một robot là gì?',
        options: [
          'Nhựa, Kim loại, và Pin',
          'Cơ khí, Điện-Điện tử, và Điều khiển',
          'Cảm biến, Động cơ, và Bánh xe',
          'Trí tuệ nhân tạo, Dữ liệu lớn, và Internet vạn vật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một robot hoàn chỉnh luôn bao gồm phần khung cơ khí, hệ thống mạch điện và điện tử, và chương trình máy tính để điều khiển hoạt động.',
      },
    ],
    category: 'theory',
    materials: ['Sách: Robotics Fundamentals', 'Video: Introduction to Robotics'],
    competitions: ['Robocon', 'VEX Robotics Competition'],
  },
  {
    id: 'arduino-co-ban',
    title: 'Lập trình Vi điều khiển với Arduino',
    description:
      'Làm quen với Arduino, nền tảng vi điều khiển mã nguồn mở phổ biến nhất để xây dựng các dự án điện tử và robot.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=m_O0g_NNg_A',
    imageUrl: 'https://i.ytimg.com/vi/m_O0g_NNg_A/hqdefault.jpg',
    objectives: [
      'Hiểu cấu trúc và chức năng các chân (pin) của board Arduino Uno.',
      'Cài đặt và sử dụng phần mềm Arduino IDE.',
      'Viết chương trình đầu tiên: "Blink" - nhấp nháy đèn LED.',
      'Đọc tín hiệu từ một nút nhấn (Digital Input).',
      'Điều khiển độ sáng của đèn LED bằng PWM (Analog Output).',
    ],
    prerequisites: ["Hoàn thành bài 'Nhập môn Robotics'"],
    exercises: [
      {
        title: 'Lắp mạch và lập trình đèn giao thông',
        description:
          'Sử dụng Arduino để điều khiển 3 đèn LED (Xanh, Vàng, Đỏ) hoạt động như một cột đèn giao thông đơn giản.',
        difficulty: 'Cơ bản',
        procedure: [
          'Lắp 3 đèn LED với các điện trở tương ứng vào board Arduino.',
          'Viết code để bật/tắt các đèn LED theo chu kỳ: Xanh sáng -> Vàng sáng -> Đỏ sáng.',
          'Sử dụng hàm delay() để tạo thời gian trễ giữa các trạng thái đèn.',
        ],
        expectedResults: 'Một mô hình đèn giao thông hoạt động đúng chu trình.',
      },
    ],
    realWorldApplications: [
      'Hệ thống nhà thông minh (Smarthome)',
      'Thiết bị đeo (Wearables)',
      'Máy in 3D',
      'Robot tự chế',
    ],
    vietnamContext: {
      title: 'Cộng đồng Arduino và DIY tại Việt Nam',
      content: [
        'Cộng đồng DIY (Do It Yourself) ở Việt Nam rất mạnh, với Arduino là công cụ cốt lõi. Các diễn đàn như arduino.vn là nơi trao đổi kiến thức sôi nổi.',
        'Arduino được sử dụng rộng rãi trong các đồ án tốt nghiệp của sinh viên ngành kỹ thuật, từ hệ thống tưới cây tự động đến cánh tay robot.',
        'Các cửa hàng linh kiện điện tử ở khu vực chợ Nhật Tảo (TP.HCM) hay chợ Trời (Hà Nội) là thiên đường cho những người đam mê Arduino.',
      ],
    },
    careerConnect: {
      name: 'Trần Thị Bích',
      title: 'Nhà sáng lập The Maker House',
      company: 'The Maker House',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-bich-maker',
      quote:
        'Arduino đã dân chủ hóa việc sáng tạo. Bất kỳ ai có ý tưởng đều có thể bắt đầu biến nó thành sản phẩm thật mà không cần đầu tư quá lớn.',
    },
    quizzes: [
      {
        question: 'Hàm nào được dùng để cấu hình một chân (pin) của Arduino làm ngõ ra (OUTPUT)?',
        options: ['digitalWrite()', 'digitalRead()', 'pinMode()', 'analogWrite()'],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `pinMode(pin, mode)` được sử dụng trong hàm `setup()` để thiết lập một chân cụ thể là `INPUT` (ngõ vào) hoặc `OUTPUT` (ngõ ra).',
      },
    ],
    category: 'programming',
    materials: ['Sách: Arduino Programming Basics', 'Video: Getting Started with Arduino'],
    competitions: ['Arduino Challenge', 'Robotics Hackathon'],
  },
  {
    id: 'cam-bien-va-co-cau-chap-hanh',
    title: 'Cảm biến và Cơ cấu chấp hành',
    description:
      'Tìm hiểu về "giác quan" (cảm biến) và "cơ bắp" (cơ cấu chấp hành) của robot, hai thành phần thiết yếu để robot tương tác với thế giới.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Zt5_k1vBUoA',
    imageUrl: 'https://i.ytimg.com/vi/Zt5_k1vBUoA/hqdefault.jpg',
    objectives: [
      'Phân biệt giữa cảm biến (sensor) và cơ cấu chấp hành (actuator).',
      'Nhận biết các loại cảm biến phổ biến: khoảng cách (siêu âm, hồng ngoại), ánh sáng, nhiệt độ.',
      'Tìm hiểu về các cơ cấu chấp hành thông dụng: động cơ DC, động cơ Servo, động cơ bước.',
      'Hiểu cách Arduino đọc dữ liệu từ cảm biến và điều khiển cơ cấu chấp hành.',
    ],
    prerequisites: ["Hoàn thành bài 'Arduino cơ bản'"],
    exercises: [
      {
        title: 'Robot tránh vật cản',
        description: 'Xây dựng một robot đơn giản có khả năng tự động di chuyển và tránh các vật cản trên đường đi.',
        difficulty: 'Trung bình',
        procedure: [
          'Gắn một cảm biến khoảng cách siêu âm lên khung robot.',
          'Lập trình để robot di chuyển tiến về phía trước.',
          'Khi cảm biến phát hiện vật cản ở gần, robot sẽ dừng lại, lùi, xoay và tiếp tục di chuyển theo hướng khác.',
        ],
        expectedResults: 'Robot có thể tự hành trong một khu vực có vật cản mà không bị va chạm.',
      },
    ],
    realWorldApplications: [
      'Xe tự lái sử dụng cảm biến LiDAR và camera.',
      'Robot hút bụi dùng cảm biến hồng ngoại để tránh rơi cầu thang.',
      'Cánh tay robot công nghiệp dùng động cơ servo để di chuyển chính xác.',
    ],
    vietnamContext: {
      title: 'Ứng dụng cảm biến trong Nông nghiệp thông minh',
      content: [
        'Các trang trại công nghệ cao tại Đà Lạt, Lâm Đồng sử dụng cảm biến độ ẩm đất, nhiệt độ, ánh sáng để tự động hóa việc tưới tiêu và điều khiển nhà kính.',
        'Drone nông nghiệp trang bị camera đa phổ để phân tích sức khỏe cây trồng, giúp nông dân phun thuốc trừ sâu chính xác, giảm chi phí và bảo vệ môi trường.',
        'Hệ thống giám sát chất lượng nước trong các đầm nuôi tôm ở Đồng bằng sông Cửu Long sử dụng các cảm biến pH, oxy hòa tan để cảnh báo sớm các vấn đề.',
      ],
    },
    careerConnect: {
      name: 'Lê Hoàng Nam',
      title: 'Kỹ sư hệ thống nhúng',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hoang-nam-fpt',
      quote:
        'Làm việc với cảm biến và vi điều khiển giống như bạn đang dạy cho máy móc cách cảm nhận thế giới. Đó là một công việc đầy thách thức nhưng cũng vô cùng thú vị.',
    },
    quizzes: [
      {
        question:
          'Loại động cơ nào phù hợp nhất để điều khiển một khớp của cánh tay robot cần xoay đến một góc chính xác?',
        options: ['Động cơ DC', 'Động cơ Servo', 'Động cơ Bước', 'Động cơ không chổi than'],
        correctAnswerIndex: 1,
        explanation:
          'Động cơ Servo được thiết kế để quay đến một vị trí góc cụ thể và giữ nguyên ở đó, rất lý tưởng cho các ứng dụng cần sự chính xác về góc quay như khớp robot, bánh lái máy bay mô hình.',
      },
    ],
    category: 'hardware',
    materials: ['Sách: Sensors and Actuators', 'Video: How Sensors and Actuators Work'],
    competitions: ['RoboCup', 'Drone Racing League'],
  },
];

export const roboticsModuleData: ModuleData = {
  id: K2Module.Robotics,
  title: 'Robotics',
  subtitle: 'Xây dựng và lập trình Robot của riêng bạn',
  description:
    'Khám phá thế giới hấp dẫn của robotics, từ các khái niệm cơ bản về cơ khí, điện tử đến lập trình vi điều khiển và xây dựng các robot tự hành thông minh.',
  category: 'engineering',
  icon: '🤖',
  color: 'from-gray-500 to-blue-500',
  level: 'Cơ bản - Trung bình',
  duration: '15-20 giờ',
  features: [
    'Lập trình vi điều khiển Arduino',
    'Làm việc với cảm biến và cơ cấu chấp hành',
    'Xây dựng robot tránh vật cản',
    'Nền tảng cho các cuộc thi Robocon',
    'Tư duy hệ thống và giải quyết vấn đề',
  ],
  prerequisites: ['Tư duy logic', 'Yêu thích lắp ráp và sáng tạo'],
  objectives: [
    'Hiểu các thành phần cơ bản của một robot.',
    'Lập trình thành thạo board Arduino cho các tác vụ robot.',
    'Sử dụng các loại cảm biến và động cơ phổ biến.',
    'Xây dựng được một robot tự hành đơn giản.',
    'Phát triển kỹ năng giải quyết vấn đề trong các hệ thống cơ điện tử.',
  ],
  careerOutcomes: [
    'Kỹ sư Robotics',
    'Kỹ sư tự động hóa',
    'Kỹ sư hệ thống nhúng',
    'Chuyên gia R&D sản phẩm',
    'Giáo viên/hướng dẫn viên STEM',
  ],
  industryApplications: [
    { name: 'Sản xuất công nghiệp', description: 'Robot hàn, lắp ráp, sơn trong các nhà máy hiện đại.' },
    { name: 'Y tế', description: 'Robot phẫu thuật, robot hỗ trợ người già và người khuyết tật.' },
    { name: 'Nông nghiệp', description: 'Robot gieo hạt, thu hoạch, máy bay không người lái giám sát cây trồng.' },
    { name: 'Dịch vụ', description: 'Robot giao hàng, robot phục vụ trong nhà hàng, robot dọn dẹp.' },
    { name: 'Thám hiểm', description: 'Robot tự hành trên sao Hỏa, robot lặn biển sâu.' },
  ],
  marketDemand: {
    averageSalary: '350-900 triệu VND/năm',
    jobGrowth: '15% (nhanh)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.Arduino, K2Module.Python, K2Module.AI],
  lessons: roboticsLessons,
};
