import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const blueEconomyLessons: BaseLessonData[] = [
  {
    id: 'blue-economy-fundamentals',
    title: 'Nền Tảng Kinh Tế Biển Xanh',
    description: 'Hiểu về khái niệm kinh tế biển bền vững và tiềm năng 3.200km bờ biển Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=k-34WA65FSQ',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Nắm vững khái niệm kinh tế biển xanh và các nguyên tắc bền vững',
      'Phân tích tiềm năng kinh tế biển của Việt Nam',
      'Hiểu về các cơ hội đầu tư trong lĩnh vực này',
    ],
    prerequisites: ['Kiến thức cơ bản về kinh tế học', 'Hiểu biết về môi trường biển'],
    exercises: [
      {
        title: 'Phân Tích Tiềm Năng Biển Việt Nam',
        description: 'Đánh giá các vùng biển và tiềm năng phát triển',
        difficulty: 'Cơ bản',
        procedure: [
          'Nghiên cứu bản đồ 3.200km bờ biển Việt Nam',
          'Phân tích các vùng có tiềm năng cao',
          'Đề xuất chiến lược phát triển bền vững',
        ],
      },
    ],
    realWorldApplications: ['Phát triển du lịch biển bền vững', 'Quản lý tài nguyên biển', 'Đầu tư vào công nghệ biển'],
    caseStudies: [
      {
        title: 'Phát Triển Nuôi Trồng Thủy Sản Thông Minh',
        organization: 'Công ty CP Thủy sản Minh Phú',
        problem: 'Cần nâng cao hiệu quả nuôi tôm và bảo vệ môi trường',
        solution: 'Áp dụng IoT và AI trong giám sát chất lượng nước và thức ăn',
        impact: 'Tăng 30% năng suất, giảm 25% tác động môi trường',
        innovations: ['IoT sensors', 'AI prediction', 'Automated feeding'],
      },
    ],
    vietnamContext: {
      title: 'Việt Nam: Cường quốc biển',
      content: [
        'Với đường bờ biển dài 3.260 km, Việt Nam có tiềm năng to lớn để phát triển kinh tế biển.',
        'Chính phủ đã phê duyệt "Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045".',
        'Các ngành kinh tế biển trọng điểm bao gồm du lịch, thủy sản, năng lượng tái tạo, và vận tải biển.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Thu Hà',
      title: 'Chuyên gia Quy hoạch Biển',
      company: 'Viện Nghiên cứu Biển và Hải đảo',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-thu-ha',
      quote:
        'Làm việc trong lĩnh vực kinh tế biển là cơ hội để góp phần xây dựng tương lai thịnh vượng và bền vững cho đất nước, dựa trên những tài nguyên quý giá mà thiên nhiên ban tặng.',
    },
    quizzes: [
      {
        question: 'Kinh tế biển xanh là gì?',
        options: [
          'Khai thác tài nguyên biển tối đa',
          'Sử dụng bền vững tài nguyên biển để phát triển kinh tế, cải thiện sinh kế và việc làm',
          'Chỉ tập trung vào du lịch biển',
          'Cấm hoàn toàn các hoạt động trên biển',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Kinh tế biển xanh nhấn mạnh sự cân bằng giữa phát triển kinh tế và bảo vệ môi trường biển, đảm bảo sự bền vững cho các thế hệ tương lai.',
      },
    ],
  },
  {
    id: 'smart-aquaculture-systems',
    title: 'Hệ Thống Nuôi Trồng Thủy Sản Thông Minh',
    description: 'Ứng dụng IoT, AI trong nuôi trồng thủy sản - ngành thứ 3 thế giới của Việt Nam',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=6-55gCWc5K0',
    imageUrl: 'https://i.ytimg.com/vi/Q7HnMqimzG4/hqdefault.jpg',
    objectives: [
      'Thiết kế hệ thống IoT cho nuôi trồng thủy sản',
      'Áp dụng AI trong dự đoán và tối ưu hóa',
      'Phát triển giải pháp tự động hóa cho trang trại thủy sản',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT', 'Hiểu biết về nuôi trồng thủy sản', 'Lập trình cơ bản'],
    exercises: [
      {
        title: 'Xây Dựng Hệ Thống Giám Sát Ao Nuôi',
        description: 'Thiết kế và lập trình hệ thống IoT cho ao nuôi tôm',
        difficulty: 'Trung bình',
        materials: ['Arduino/ESP32', 'Cảm biến pH, nhiệt độ, oxy', 'Module WiFi'],
        procedure: [
          'Lắp đặt cảm biến trong ao nuôi',
          'Lập trình thu thập và truyền dữ liệu',
          'Xây dựng dashboard giám sát real-time',
          'Thiết lập cảnh báo tự động',
        ],
        expectedResults: 'Hệ thống giám sát hoàn chỉnh với cảnh báo thông minh',
      },
    ],
    realWorldApplications: [
      'Tự động hóa cho trang trại thủy sản',
      'Hệ thống cảnh báo sớm',
      'Tối ưu hóa thức ăn và môi trường',
    ],
    vietnamContext: {
      title: 'Nuôi trồng thủy sản 4.0 tại Việt Nam',
      content: [
        'Việt Nam là một trong những nước xuất khẩu thủy sản hàng đầu thế giới.',
        'Việc áp dụng công nghệ cao giúp tăng năng suất, giảm rủi ro dịch bệnh và bảo vệ môi trường.',
        'Các tập đoàn lớn như Minh Phú, Việt-Úc đang đi đầu trong việc ứng dụng công nghệ vào nuôi tôm.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Văn Quang',
      title: 'Kỹ sư tự động hóa',
      company: 'R&D Department, a local aquaculture tech firm',
      imageUrl: 'https://i.pravatar.cc/150?u=le-van-quang',
      quote:
        'Kết hợp công nghệ với nông nghiệp là con đường tất yếu. Chúng tôi tự hào tạo ra những giải pháp giúp người nông dân làm giàu trên chính mảnh đất quê hương một cách bền vững.',
    },
    quizzes: [
      {
        question: 'Lợi ích chính của việc áp dụng IoT trong nuôi trồng thủy sản là gì?',
        options: [
          'Giảm chi phí mua giống',
          'Giám sát chất lượng nước theo thời gian thực và tự động hóa',
          'Tăng diện tích ao nuôi',
          'Không cần nhân công',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT cho phép giám sát liên tục các chỉ số quan trọng của môi trường nước (pH, oxy hòa tan, nhiệt độ), từ đó đưa ra cảnh báo và điều khiển tự động, giúp tối ưu hóa điều kiện sống cho vật nuôi.',
      },
    ],
  },
  {
    id: 'marine-renewable-energy',
    title: 'Năng Lượng Tái Tạo Biển',
    description: 'Phát triển năng lượng gió ngoài khơi và các công nghệ năng lượng biển khác',
    duration: '110 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LsLFgVISkfQ',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Thiết kế hệ thống năng lượng gió ngoài khơi',
      'Đánh giá tiềm năng năng lượng sóng và thủy triều',
      'Phân tích kinh tế dự án năng lượng biển',
    ],
    prerequisites: ['Kiến thức về năng lượng tái tạo', 'Hiểu biết về môi trường biển', 'Kỹ năng phân tích tài chính'],
    exercises: [
      {
        title: 'Thiết Kế Trang Trại Gió Ngoài Khơi',
        description: 'Lập kế hoạch và thiết kế trang trại gió cho vùng biển Việt Nam',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích dữ liệu gió và điều kiện biển',
          'Thiết kế layout tối ưu cho turbine',
          'Tính toán hiệu quả kinh tế',
          'Đánh giá tác động môi trường',
        ],
      },
    ],
    realWorldApplications: [
      'Dự án năng lượng gió ngoài khơi',
      'Năng lượng sóng và thủy triều',
      'Tích hợp lưới điện thông minh',
    ],
    vietnamContext: {
      title: 'Tiềm năng điện gió ngoài khơi của Việt Nam',
      content: [
        'Việt Nam được đánh giá là có tiềm năng điện gió ngoài khơi lớn nhất Đông Nam Á.',
        'Nhiều dự án điện gió ngoài khơi quy mô lớn đang được đề xuất tại các tỉnh như Bình Thuận, Ninh Thuận, Bạc Liêu.',
        'Phát triển điện gió ngoài khơi góp phần đảm bảo an ninh năng lượng và giảm phát thải khí nhà kính.',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thị Thanh Mai',
      title: 'Kỹ sư dự án năng lượng tái tạo',
      company: 'T&T Group',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thanh-mai',
      quote:
        'Phát triển năng lượng tái tạo từ biển là một lĩnh vực mới mẻ và đầy thách thức, nhưng đó cũng là cơ hội để chúng ta tạo ra một tương lai năng lượng sạch và bền vững cho Việt Nam.',
    },
    quizzes: [
      {
        question: 'Tại sao điện gió ngoài khơi có tiềm năng lớn hơn điện gió trên bờ?',
        options: [
          'Dễ lắp đặt hơn',
          'Gió ngoài khơi thường mạnh và ổn định hơn',
          'Chi phí thấp hơn',
          'Không ảnh hưởng đến cảnh quan',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tốc độ gió ngoài khơi thường cao hơn và ít bị ảnh hưởng bởi các vật cản hơn so với trên đất liền, giúp các tuabin gió hoạt động hiệu quả và tạo ra sản lượng điện lớn hơn.',
      },
    ],
  },
  {
    id: 'marine-biotechnology',
    title: 'Công Nghệ Sinh Học Biển',
    description: 'Ứng dụng sinh học biển trong dược phẩm và công nghiệp',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=EbeF-W2FAW8',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Khám phá tiềm năng sinh học của các loài biển Việt Nam',
      'Phát triển quy trình chiết xuất hợp chất sinh học',
      'Ứng dụng trong dược phẩm và mỹ phẩm',
    ],
    prerequisites: ['Kiến thức sinh học phân tử', 'Hóa học cơ bản', 'Hiểu biết về dược phẩm'],
    exercises: [
      {
        title: 'Nghiên Cứu Hợp Chất Từ Rong Biển',
        description: 'Chiết xuất và phân tích hoạt chất từ rong biển địa phương',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập và xử lý mẫu rong biển',
          'Chiết xuất các hợp chất sinh học',
          'Phân tích cấu trúc và hoạt tính',
          'Đánh giá tiềm năng ứng dụng',
        ],
      },
    ],
    realWorldApplications: ['Phát triển thuốc từ biển', 'Mỹ phẩm từ nguyên liệu biển', 'Thực phẩm chức năng'],
    vietnamContext: {
      title: 'Kho báu dược liệu từ biển Việt Nam',
      content: [
        'Việt Nam có đa dạng sinh học biển cao, là nguồn tài nguyên quý giá cho công nghệ sinh học.',
        'Viện Hàn lâm Khoa học và Công nghệ Việt Nam đang có nhiều nghiên cứu về các hợp chất có hoạt tính sinh học từ sinh vật biển.',
        'Các sản phẩm từ rong biển, hải sâm đang ngày càng được ưa chuộng trên thị trường.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Hoàng Văn Nam',
      title: 'Nhà nghiên cứu',
      company: 'Viện Công nghệ sinh học',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-van-nam',
      quote:
        'Biển cả là một phòng thí nghiệm khổng lồ với vô vàn bí ẩn chưa được khám phá. Mỗi chuyến đi thực địa là một hành trình tìm kiếm những hợp chất mới có thể cứu sống con người.',
    },
    quizzes: [
      {
        question: 'Công nghệ sinh học biển có thể được ứng dụng trong lĩnh vực nào?',
        options: [
          'Chỉ sản xuất thuốc',
          'Chỉ làm mỹ phẩm',
          'Chỉ làm thực phẩm',
          'Dược phẩm, mỹ phẩm, thực phẩm, năng lượng sinh học và nhiều lĩnh vực khác',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Công nghệ sinh học biển có phạm vi ứng dụng rất rộng, từ việc tìm kiếm các hợp chất mới cho y học, tạo ra các thành phần tự nhiên cho mỹ phẩm, đến việc phát triển nhiên liệu sinh học từ tảo.',
      },
    ],
  },
  {
    id: 'sustainable-fisheries-management',
    title: 'Quản Lý Nghề Cá Bền Vững',
    description: 'Công nghệ và phương pháp quản lý nguồn lợi thủy sản bền vững',
    duration: '95 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=-FODESgY0aQ',
    imageUrl: 'https://i.ytimg.com/vi/ZtHcKbCfbi8/hqdefault.jpg',
    objectives: [
      'Áp dụng công nghệ trong quản lý nghề cá',
      'Phát triển hệ thống truy xuất nguồn gốc',
      'Thiết lập mô hình nghề cá bền vững',
    ],
    prerequisites: ['Hiểu biết về nghề cá', 'Kiến thức về blockchain cơ bản', 'Quản lý tài nguyên'],
    exercises: [
      {
        title: 'Hệ Thống Truy Xuất Hải Sản',
        description: 'Xây dựng hệ thống blockchain cho truy xuất nguồn gốc hải sản',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế schema dữ liệu sản phẩm',
          'Implement smart contract',
          'Tạo app mobile cho ngư dân',
          'Xây dựng portal cho người tiêu dùng',
        ],
      },
    ],
    realWorldApplications: ['Hệ thống truy xuất thực phẩm', 'Quản lý đội tàu cá', 'Chứng nhận bền vững'],
    vietnamContext: {
      title: 'Chống khai thác IUU và truy xuất nguồn gốc',
      content: [
        'Việt Nam đang nỗ lực chống khai thác hải sản bất hợp pháp, không báo cáo và không theo quy định (IUU) để gỡ "thẻ vàng" của Ủy ban châu Âu.',
        'Việc áp dụng công nghệ truy xuất nguồn gốc điện tử là một yêu cầu bắt buộc để xuất khẩu hải sản sang các thị trường khó tính.',
        'Nhiều doanh nghiệp và ngư dân đang chuyển đổi sang các phương pháp khai thác bền vững hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Văn Bình',
      title: 'Thuyền trưởng tàu cá',
      company: 'Hợp tác xã nghề cá Rạng Đông',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-binh',
      quote:
        'Trước đây chúng tôi chỉ biết ra khơi và đánh bắt. Giờ đây, chúng tôi học cách ghi nhật ký điện tử, sử dụng công nghệ để bảo vệ nguồn lợi. Biển nuôi sống chúng tôi, chúng tôi phải giữ gìn biển.',
    },
    quizzes: [
      {
        question: 'Mục đích chính của hệ thống truy xuất nguồn gốc hải sản là gì?',
        options: [
          'Để bán cá giá cao hơn',
          'Để chứng minh nguồn gốc hợp pháp và an toàn của sản phẩm, tăng cường niềm tin cho người tiêu dùng',
          'Để theo dõi ngư dân',
          'Để tính thuế',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hệ thống truy xuất nguồn gốc giúp minh bạch hóa toàn bộ chuỗi cung ứng, từ lúc đánh bắt đến khi tới tay người tiêu dùng, đảm bảo sản phẩm tuân thủ các quy định về an toàn thực phẩm và khai thác bền vững.',
      },
    ],
  },
];

export const blueEconomyModuleData: ModuleData = {
  id: K2Module.BlueEconomy,
  title: 'Kinh tế biển & Công nghệ hàng hải',
  subtitle: 'Khai phá tiềm năng đại dương bền vững',
  description:
    'Khám phá tiềm năng của kinh tế biển bền vững, từ nuôi trồng thủy sản công nghệ cao đến năng lượng tái tạo từ biển và công nghệ sinh học biển.',
  category: 'Khoa học & Kỹ thuật',
  icon: '🌊',
  color: 'from-blue-500 to-cyan-400',
  duration: '18-24 giờ',
  features: [
    'Nuôi trồng Thủy sản Bền vững',
    'Năng lượng Tái tạo từ Biển',
    'Công nghệ Sinh học Biển',
    'Quản lý Nghề cá Bền vững',
  ],
  prerequisites: [
    'Kiến thức về khoa học môi trường',
    'Hiểu biết về kinh tế học cơ bản',
    'Quan tâm đến các vấn đề về biển và đại dương',
  ],
  lessons: blueEconomyLessons,
  objectives: [
    'Trang bị kiến thức toàn diện về kinh tế biển xanh, có khả năng phân tích, đánh giá và đề xuất các giải pháp phát triển kinh tế biển bền vững tại Việt Nam.',
  ],
  careerOutcomes: [
    'Chuyên gia quy hoạch biển',
    'Kỹ sư năng lượng tái tạo',
    'Chuyên gia quản lý tài nguyên biển',
    'Doanh nhân trong lĩnh vực công nghệ biển',
  ],
  relatedModules: [K2Module.GreenTechnology, K2Module.SustainableAgriculture, K2Module.DataScienceAnalytics],
  heroImageUrl: 'https://images.unsplash.com/photo-1610883999933-2f6a7f699b4b?w=1200&h=600&fit=crop',
  level: 'Trung cấp',
  industryApplications: [
    'Nuôi trồng thủy sản bền vững',
    'Năng lượng tái tạo biển',
    'Công nghệ sinh học biển',
    'Du lịch sinh thái biển',
    'Quản lý và bảo tồn tài nguyên biển',
  ],
  marketDemand: {
    averageSalary: '70.000 - 120.000 USD/năm',
    jobGrowth: '10%',
    hireDemand: 'Cao',
  },
};
