// Blue Economy & Marine Technology Module
export interface BlueEconomyLessonType {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  videoUrl?: string;
  imageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

export const blueEconomyLessons: BlueEconomyLessonType[] = [
  {
    id: 'blue-economy-fundamentals',
    title: 'Nền Tảng Kinh Tế Biển Xanh',
    description: 'Hiểu về khái niệm kinh tế biển bền vững và tiềm năng 3.200km bờ biển Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Nắm vững khái niệm kinh tế biển xanh và các nguyên tắc bền vững',
      'Phân tích tiềm năng kinh tế biển của Việt Nam',
      'Hiểu về các cơ hội đầu tư trong lĩnh vực này'
    ],
    prerequisites: [
      'Kiến thức cơ bản về kinh tế học',
      'Hiểu biết về môi trường biển'
    ],
    exercises: [
      {
        title: 'Phân Tích Tiềm Năng Biển Việt Nam',
        description: 'Đánh giá các vùng biển và tiềm năng phát triển',
        difficulty: 'Cơ bản',
        procedure: [
          'Nghiên cứu bản đồ 3.200km bờ biển Việt Nam',
          'Phân tích các vùng có tiềm năng cao',
          'Đề xuất chiến lược phát triển bền vững'
        ]
      }
    ],
    realWorldApplications: [
      'Phát triển du lịch biển bền vững',
      'Quản lý tài nguyên biển',
      'Đầu tư vào công nghệ biển'
    ],
    caseStudies: [
      {
        title: 'Phát Triển Nuôi Trồng Thủy Sản Thông Minh',
        organization: 'Công ty CP Thủy sản Minh Phú',
        problem: 'Cần nâng cao hiệu quả nuôi tôm và bảo vệ môi trường',
        solution: 'Áp dụng IoT và AI trong giám sát chất lượng nước và thức ăn',
        impact: 'Tăng 30% năng suất, giảm 25% tác động môi trường',
        innovations: ['IoT sensors', 'AI prediction', 'Automated feeding']
      }
    ]
  },
  {
    id: 'smart-aquaculture-systems',
    title: 'Hệ Thống Nuôi Trồng Thủy Sản Thông Minh',
    description: 'Ứng dụng IoT, AI trong nuôi trồng thủy sản - ngành thứ 3 thế giới của Việt Nam',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Thiết kế hệ thống IoT cho nuôi trồng thủy sản',
      'Áp dụng AI trong dự đoán và tối ưu hóa',
      'Phát triển giải pháp tự động hóa cho trang trại thủy sản'
    ],
    prerequisites: [
      'Kiến thức cơ bản về IoT',
      'Hiểu biết về nuôi trồng thủy sản',
      'Lập trình cơ bản'
    ],
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
          'Thiết lập cảnh báo tự động'
        ],
        expectedResults: 'Hệ thống giám sát hoàn chỉnh với cảnh báo thông minh'
      }
    ],
    realWorldApplications: [
      'Tự động hóa cho trang trại thủy sản',
      'Hệ thống cảnh báo sớm',
      'Tối ưu hóa thức ăn và môi trường'
    ]
  },
  {
    id: 'marine-renewable-energy',
    title: 'Năng Lượng Tái Tạo Biển',
    description: 'Phát triển năng lượng gió ngoài khơi và các công nghệ năng lượng biển khác',
    duration: '110 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Thiết kế hệ thống năng lượng gió ngoài khơi',
      'Đánh giá tiềm năng năng lượng sóng và thủy triều',
      'Phân tích kinh tế dự án năng lượng biển'
    ],
    prerequisites: [
      'Kiến thức về năng lượng tái tạo',
      'Hiểu biết về môi trường biển',
      'Kỹ năng phân tích tài chính'
    ],
    exercises: [
      {
        title: 'Thiết Kế Trang Trại Gió Ngoài Khơi',
        description: 'Lập kế hoạch và thiết kế trang trại gió cho vùng biển Việt Nam',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích dữ liệu gió và điều kiện biển',
          'Thiết kế layout tối ưu cho turbine',
          'Tính toán hiệu quả kinh tế',
          'Đánh giá tác động môi trường'
        ]
      }
    ],
    realWorldApplications: [
      'Dự án năng lượng gió ngoài khơi',
      'Năng lượng sóng và thủy triều',
      'Tích hợp lưới điện thông minh'
    ]
  },
  {
    id: 'marine-biotechnology',
    title: 'Công Nghệ Sinh Học Biển',
    description: 'Ứng dụng sinh học biển trong dược phẩm và công nghiệp',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Khám phá tiềm năng sinh học của các loài biển Việt Nam',
      'Phát triển quy trình chiết xuất hợp chất sinh học',
      'Ứng dụng trong dược phẩm và mỹ phẩm'
    ],
    prerequisites: [
      'Kiến thức sinh học phân tử',
      'Hóa học cơ bản',
      'Hiểu biết về dược phẩm'
    ],
    exercises: [
      {
        title: 'Nghiên Cứu Hợp Chất Từ Rong Biển',
        description: 'Chiết xuất và phân tích hoạt chất từ rong biển địa phương',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập và xử lý mẫu rong biển',
          'Chiết xuất các hợp chất sinh học',
          'Phân tích cấu trúc và hoạt tính',
          'Đánh giá tiềm năng ứng dụng'
        ]
      }
    ],
    realWorldApplications: [
      'Phát triển thuốc từ biển',
      'Mỹ phẩm từ nguyên liệu biển',
      'Thực phẩm chức năng'
    ]
  },
  {
    id: 'sustainable-fisheries-management',
    title: 'Quản Lý Nghề Cá Bền Vững',
    description: 'Công nghệ và phương pháp quản lý nguồn lợi thủy sản bền vững',
    duration: '95 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Áp dụng công nghệ trong quản lý nghề cá',
      'Phát triển hệ thống truy xuất nguồn gốc',
      'Thiết lập mô hình nghề cá bền vững'
    ],
    prerequisites: [
      'Hiểu biết về nghề cá',
      'Kiến thức về blockchain cơ bản',
      'Quản lý tài nguyên'
    ],
    exercises: [
      {
        title: 'Hệ Thống Truy Xuất Hải Sản',
        description: 'Xây dựng hệ thống blockchain cho truy xuất nguồn gốc hải sản',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế schema dữ liệu sản phẩm',
          'Implement smart contract',
          'Tạo app mobile cho ngư dân',
          'Xây dựng portal cho người tiêu dùng'
        ]
      }
    ],
    realWorldApplications: [
      'Hệ thống truy xuất thực phẩm',
      'Quản lý đội tàu cá',
      'Chứng nhận bền vững'
    ]
  }
];

export default blueEconomyLessons;
