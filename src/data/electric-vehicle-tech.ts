import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';

const evChargingGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'ev-charging-network');
const roboticsNavGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'robotics-navigation');

export interface ElectricVehicleLesson extends BaseLessonData {
  vehicleType?: 'Xe điện' | 'Xe tự hành' | 'Hạ tầng' | 'Sản xuất';
  technology?: string;
  technologies?: string[];
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const electricVehicleLessons: ElectricVehicleLesson[] = [
  {
    id: 'ev-powertrain-battery-fundamentals',
    title: 'Hệ Thống Truyền Động & Công Nghệ Pin Xe Điện',
    description:
      'Hiểu biết toàn diện về hệ thống truyền động xe điện, công nghệ pin và quản lý năng lượng. Tập trung vào pin lithium-ion, hệ thống sạc và quản lý nhiệt.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    vehicleType: 'Xe điện',
    videoUrl: 'https://www.youtube.com/watch?v=HfN5dEeUyuE', // "EV Powertrain"
    imageUrl: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c5?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu kiến trúc và các thành phần của hệ thống truyền động xe điện',
      'Nắm vững hóa học pin: lithium-ion, thể rắn và các công nghệ tương lai',
      'Thiết kế hệ thống quản lý pin (BMS) để đảm bảo an toàn và hiệu suất',
      'Phân tích các hệ thống sạc: AC/DC, sạc nhanh, sạc không dây',
    ],
    prerequisites: [
      'Kiến thức cơ bản về kỹ thuật điện',
      'Hiểu biết về hệ thống ô tô',
      'Kiến thức cơ bản về hóa học',
      'Kiến thức cơ bản về điện tử công suất',
    ],
    exercises: [
      {
        title: 'Phân Tích Hệ Thống Pin VinFast VF8',
        description: 'Phân tích thiết kế bộ pin của VinFast VF8 và so sánh với công nghệ pin của Tesla Model Y.',
        difficulty: 'Trung bình',
        materials: ['Các cell pin', 'Các mô-đun BMS', 'Hệ thống làm mát', 'Hệ thống an toàn'],
        procedure: [
          'Nghiên cứu thông số kỹ thuật và kiến trúc pin của VinFast VF8',
          'So sánh hóa học pin lithium iron phosphate (LFP) và pin gốc niken',
          'Phân tích thiết kế hệ thống quản lý nhiệt',
          'Tính toán mật độ năng lượng, mật độ công suất và khả năng sạc',
          'Đánh giá các tính năng an toàn: bảo vệ thoát nhiệt, an toàn khi va chạm',
          'So sánh với các đối thủ cạnh tranh quốc tế (Tesla, BYD, Hyundai)',
        ],
        expectedResults: 'Báo cáo phân tích hệ thống pin toàn diện với các khuyến nghị để tối ưu hóa',
        solution:
          'VinFast sử dụng pin LFP vì lý do an toàn và chi phí, đánh đổi mật độ năng lượng để phù hợp với nhu cầu thị trường Việt Nam',
      },
      {
        title: 'Thiết Kế Hạ Tầng Sạc Xe Điện cho Việt Nam',
        description:
          'Thiết kế mạng lưới sạc xe điện toàn diện cho các thành phố Việt Nam, xem xét các hạn chế của lưới điện.',
        difficulty: 'Nâng cao',
        materials: ['Trạm sạc nhanh DC', 'Trạm sạc AC Cấp 2', 'Tích hợp lưới điện', 'Hệ thống thanh toán'],
        procedure: [
          'Phân tích công suất và các hạn chế của lưới điện Việt Nam',
          'Lập bản đồ các vị trí trạm sạc tối ưu tại các thành phố lớn',
          'Thiết kế kiến trúc mạng lưới sạc với các mức công suất khác nhau',
          'Tính toán tác động đến lưới điện và các chiến lược quản lý tải',
          'Tích hợp các nguồn năng lượng tái tạo (mái che năng lượng mặt trời)',
          'Thiết kế trải nghiệm người dùng và hệ thống tích hợp thanh toán',
        ],
        expectedResults: 'Kế hoạch hạ tầng sạc xe điện có thể mở rộng cho thị trường Việt Nam',
        solution: 'Mạng lưới sạc AC/DC kết hợp với tích hợp lưới điện thông minh và năng lượng tái tạo',
      },
    ],
    realWorldApplications: [
      'Sản xuất xe điện và phát triển pin của VinFast',
      'Triển khai hạ tầng sạc xe điện tại các thành phố Việt Nam',
      'Hệ thống xe buýt điện cho giao thông công cộng',
      'Phát triển xe máy điện cho thị trường Việt Nam',
      'Hệ thống lưu trữ năng lượng sử dụng pin xe điện',
    ],
    caseStudies: [
      {
        title: 'Chiến Lược Xe Điện Toàn Cầu của VinFast',
        organization: 'VinGroup',
        problem: 'Phát triển các loại xe điện cạnh tranh cho thị trường toàn cầu từ cơ sở tại Việt Nam',
        solution: 'Chiến lược tích hợp dọc: pin, sản xuất, hạ tầng sạc',
        impact: 'Thương hiệu ô tô Việt Nam đầu tiên gia nhập thị trường Mỹ với xe điện',
        innovations: ['Pin LFP', 'Sản xuất tiên tiến', 'Mạng lưới sạc', 'Tích hợp phần mềm'],
      },
    ],
    resources: [
      {
        title: 'Thông số kỹ thuật VinFast',
        url: 'https://vinfastauto.com/',
        type: 'Documentation',
      },
    ],
    technologies: ['Pin Lithium-ion', 'Hệ thống quản lý pin', 'Điện tử công suất', 'Quản lý nhiệt'],
  },
  {
    id: 'autonomous-driving-systems',
    title: 'Lái Xe Tự Hành & Hệ Thống Hỗ Trợ Lái Xe Nâng Cao',
    description:
      'Công nghệ xe tự hành tiên tiến từ ADAS đến hệ thống lái xe hoàn toàn tự động. Computer vision, tổng hợp cảm biến, ra quyết định cho điều kiện giao thông Việt Nam.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    vehicleType: 'Xe tự hành',
    videoUrl: 'https://www.youtube.com/watch?v=TUDiG7PcLBs', // "Xe tự hành"
    imageUrl: 'https://images.unsplash.com/photo-1621535323732-03b7284c7225?w=1200&h=600&fit=crop',
    objectives: [
      'Nắm vững các công nghệ ADAS: kiểm soát hành trình thích ứng, giữ làn đường, phanh khẩn cấp',
      'Hiểu các công nghệ cảm biến: camera, LiDAR, radar, siêu âm',
      'Thực hiện các thuật toán computer vision để phát hiện và theo dõi đối tượng',
      'Thiết kế hệ thống ra quyết định cho các tình huống giao thông phức tạp',
    ],
    prerequisites: [
      'Kiến thức về computer vision và machine learning',
      'Kỹ năng lập trình Python/C++',
      'Hiểu biết về hệ thống ô tô',
      'Kiến thức cơ bản về xử lý tín hiệu',
    ],
    relatedGames: roboticsNavGame
      ? [
          {
            id: roboticsNavGame.id,
            name: roboticsNavGame.title,
            description: roboticsNavGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Hệ Thống Nhận Dạng Mẫu Giao Thông Việt Nam',
        description:
          'Phát triển hệ thống computer vision để nhận dạng và dự đoán các mẫu giao thông Việt Nam bao gồm cả xe máy.',
        difficulty: 'Nâng cao',
        materials: [
          'Mô hình computer vision',
          'Thuật toán tổng hợp cảm biến',
          'Cây quyết định',
          'Xử lý thời gian thực',
        ],
        procedure: [
          'Thu thập và chú thích dữ liệu video giao thông Việt Nam',
          'Huấn luyện các mô hình phát hiện đối tượng cho ô tô, xe máy, người đi bộ',
          'Thực hiện các thuật toán theo dõi đa đối tượng',
          'Phát triển các mô hình dự đoán hành vi của phương tiện',
          'Tạo logic ra quyết định cho điều hướng tự động',
          'Kiểm tra trong môi trường giao thông Việt Nam mô phỏng',
        ],
        expectedResults: 'Hệ thống lái xe tự động có khả năng điều hướng trong điều kiện giao thông Việt Nam',
        solution:
          'Sử dụng một tập hợp các mô hình thị giác với các hệ thống dựa trên quy tắc được điều chỉnh cho sự hỗn loạn của giao thông Việt Nam',
      },
      {
        title: 'Tích Hợp Quản Lý Giao Thông Thông Minh',
        description:
          'Thiết kế hệ thống V2X (Vehicle-to-Everything) để quản lý giao thông thông minh tại các thành phố Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Giao tiếp V2V', 'Hạ tầng V2I', 'Tối ưu hóa giao thông', 'Phản ứng khẩn cấp'],
        procedure: [
          'Thiết kế các giao thức giao tiếp V2X cho hạ tầng Việt Nam',
          'Thực hiện các thuật toán tối ưu hóa đèn giao thông',
          'Tạo hệ thống ưu tiên cho xe khẩn cấp',
          'Phát triển dự báo tắc nghẽn và tối ưu hóa định tuyến',
          'Tích hợp với các hệ thống quản lý giao thông hiện có',
          'Kiểm tra khả năng mở rộng và các kịch bản triển khai trong thế giới thực',
        ],
        expectedResults: 'Hệ thống giao thông thông minh tích hợp giúp giảm tắc nghẽn và cải thiện an toàn',
        solution: 'Hệ thống V2X phân cấp với điện toán đám mây-biên và tối ưu hóa giao thông do AI cung cấp',
      },
    ],
    realWorldApplications: [
      'Phát triển lái xe tự hành của VinFast cho đường phố Việt Nam',
      'Quản lý giao thông thông minh tại TP.HCM và Hà Nội',
      'Hệ thống giao hàng tự động cho thương mại điện tử',
      'Hệ thống giao thông công cộng tự lái',
      'Tối ưu hóa định tuyến xe khẩn cấp',
    ],
    caseStudies: [
      {
        title: 'Nghiên Cứu Lái Xe Tự Hành của VinAI',
        organization: 'VinAI (thuộc VinGroup)',
        problem: 'Phát triển công nghệ lái xe tự hành thích ứng với giao thông hỗn loạn của Việt Nam',
        solution:
          'Các hệ thống AI được đào tạo đặc biệt trên dữ liệu giao thông Việt Nam với mô hình hóa hành vi văn hóa',
        impact: 'Các tính năng hỗ trợ lái xe nâng cao được triển khai trên các xe VinFast',
        innovations: ['Computer Vision', 'Deep Learning', 'Tổng hợp cảm biến', 'AI tại biên'],
      },
    ],
    resources: [
      {
        title: 'Các Công Bố Nghiên Cứu của VinAI',
        url: 'https://www.vinai.io/',
        type: 'Research',
      },
    ],
    technologies: ['Computer Vision', 'LiDAR', 'Radar', 'Tổng hợp cảm biến', 'Machine Learning', 'Giao tiếp V2X'],
  },
  {
    id: 'charging-infrastructure-grid-integration',
    title: 'Hạ Tầng Sạc & Tích Hợp Lưới Điện Thông Minh',
    description:
      'Thiết kế hạ tầng sạc xe điện toàn diện, tích hợp lưới điện, sạc thông minh và công nghệ Vehicle-to-Grid (V2G) cho hệ sinh thái năng lượng bền vững.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    vehicleType: 'Hạ tầng',
    videoUrl: 'https://www.youtube.com/watch?v=o-ZYsfNuh7M', // "Smart Grid"
    imageUrl: 'https://images.unsplash.com/photo-1629581518335-35b658a59e61?w=1200&h=600&fit=crop',
    objectives: [
      'Thiết kế hạ tầng sạc xe điện có thể mở rộng cho các thành phố Việt Nam',
      'Thực hiện các thuật toán sạc thông minh để cân bằng tải lưới điện',
      'Hiểu công nghệ V2G và dòng năng lượng hai chiều',
      'Tích hợp các nguồn năng lượng tái tạo với mạng lưới sạc',
    ],
    prerequisites: [
      'Kiến thức về hệ thống điện',
      'Hiểu biết về hệ thống năng lượng tái tạo',
      'Kiến thức cơ bản về điện tử công suất và lưới điện',
      'Hệ thống quản lý năng lượng',
    ],
    relatedGames: evChargingGame
      ? [
          {
            id: evChargingGame.id,
            name: evChargingGame.title,
            description: evChargingGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Mạng Lưới Sạc Thông Minh cho TP.HCM',
        description: 'Thiết kế mạng lưới sạc thông minh toàn diện với cân bằng tải và tích hợp năng lượng tái tạo.',
        difficulty: 'Nâng cao',
        materials: [
          'Trạm sạc nhanh DC',
          'Bộ điều khiển thông minh',
          'Giao diện lưới điện',
          'Tích hợp năng lượng mặt trời',
        ],
        procedure: [
          'Phân tích công suất lưới điện hiện tại ở TP.HCM',
          'Lập bản đồ các vị trí trạm sạc tối ưu dựa trên các mẫu giao thông',
          'Thiết kế các thuật toán cân bằng tải để quản lý nhu cầu cao điểm',
          'Tích hợp các hệ thống lưu trữ pin và năng lượng mặt trời trên mái nhà',
          'Thực hiện các chiến lược định giá động',
          'Tạo các giao thức giám sát ổn định lưới điện và phản ứng khẩn cấp',
        ],
        expectedResults:
          'Mạng lưới sạc thông minh có thể mở rộng hỗ trợ hơn 100.000 xe điện mà không làm quá tải lưới điện',
        solution: 'Sạc thông minh phân cấp với quản lý tải dự báo và tích hợp năng lượng tái tạo phân tán',
      },
      {
        title: 'Nghiên Cứu Triển Khai Vehicle-to-Grid (V2G)',
        description: 'Phát triển hệ thống V2G cho phép xe điện cung cấp dịch vụ lưới điện và lưu trữ năng lượng.',
        difficulty: 'Nâng cao',
        materials: ['Bộ sạc hai chiều', 'Dịch vụ lưới điện', 'Giao dịch năng lượng', 'Quản lý đội xe'],
        procedure: [
          'Thiết kế hạ tầng sạc hai chiều',
          'Phát triển các thuật toán điều chỉnh tần số lưới điện sử dụng xe điện',
          'Tạo thị trường giao dịch năng lượng cho các dịch vụ V2G',
          'Thực hiện các hệ thống quản lý đội xe cho xe thương mại',
          'Phân tích lợi ích kinh tế cho chủ xe điện và nhà vận hành lưới điện',
          'Kiểm tra ổn định lưới điện và các kịch bản dự phòng khẩn cấp',
        ],
        expectedResults: 'Hệ thống V2G cung cấp dịch vụ lưới điện đồng thời tối ưu hóa lợi ích cho chủ xe điện',
        solution: 'Nền tảng V2G đa bên với tối ưu hóa do AI cung cấp và cơ chế bồi thường công bằng',
      },
    ],
    realWorldApplications: [
      'Phát triển hạ tầng sạc xe điện quốc gia',
      'Các chương trình hiện đại hóa lưới điện thông minh',
      'Điện hóa đội xe thương mại',
      'Các dự án tích hợp năng lượng tái tạo',
      'Hệ thống dự phòng điện khẩn cấp sử dụng xe điện',
    ],
    caseStudies: [
      {
        title: 'Mạng Lưới Sạc Xe Điện Quốc Gia Việt Nam',
        organization: 'EVN (Tập đoàn Điện lực Việt Nam)',
        problem: 'Xây dựng hạ tầng sạc xe điện quốc gia hỗ trợ các mục tiêu điện hóa của chính phủ',
        solution: 'Đối tác công-tư phát triển mạng lưới sạc tiêu chuẩn hóa',
        impact: 'Nền tảng cho việc áp dụng hàng loạt xe điện tại Việt Nam với sự ổn định của lưới điện',
        innovations: ['Sạc thông minh', 'Tích hợp lưới điện', 'Năng lượng tái tạo', 'Quản lý tải'],
      },
    ],
    resources: [
      {
        title: 'Tập đoàn Điện lực Việt Nam',
        url: 'https://www.evn.com.vn/',
        type: 'Utility',
      },
    ],
    technologies: ['Sạc thông minh', 'Công nghệ V2G', 'Tích hợp lưới điện', 'Quản lý năng lượng', 'Điện tử công suất'],
  },
  {
    id: 'ev-manufacturing-quality-control',
    title: 'Sản Xuất Xe Điện & Hệ Thống Kiểm Soát Chất Lượng',
    description:
      'Các quy trình sản xuất tiên tiến cho xe điện, hệ thống kiểm soát chất lượng, quản lý chuỗi cung ứng và các kỹ thuật tối ưu hóa sản xuất.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    vehicleType: 'Sản xuất',
    videoUrl: 'https://www.youtube.com/watch?v=tyNGOiNcukU', // "Vinfast manufacturing"
    imageUrl: 'https://images.unsplash.com/photo-1554230602-89524289a4a8?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các quy trình sản xuất và dây chuyền sản xuất xe điện',
      'Thực hiện các hệ thống kiểm soát chất lượng cho lắp ráp pin và xe',
      'Thiết kế quản lý chuỗi cung ứng cho các linh kiện xe điện',
      'Tối ưu hóa hiệu quả sản xuất và quản lý chi phí',
    ],
    prerequisites: [
      'Kiến thức cơ bản về kỹ thuật sản xuất',
      'Hệ thống quản lý chất lượng',
      'Kiến thức cơ bản về chuỗi cung ứng',
      'Nguyên tắc sản xuất tinh gọn',
    ],
    exercises: [
      {
        title: 'Tối Ưu Hóa Dây Chuyền Sản Xuất VinFast',
        description: 'Phân tích và tối ưu hóa các quy trình sản xuất của VinFast để tăng hiệu quả và chất lượng.',
        difficulty: 'Trung bình',
        materials: [
          'Thiết kế dây chuyền lắp ráp',
          'Các điểm kiểm tra chất lượng',
          'Hệ thống tự động hóa',
          'Giao thức kiểm tra',
        ],
        procedure: [
          'Nghiên cứu các quy trình sản xuất hiện tại của VinFast',
          'Xác định các điểm nghẽn trong dây chuyền sản xuất',
          'Thiết kế các điểm kiểm tra chất lượng tự động',
          'Thực hiện các phương pháp kiểm soát quy trình thống kê',
          'Tối ưu hóa dòng nguyên vật liệu và quản lý hàng tồn kho',
          'Tạo các chương trình cải tiến liên tục',
        ],
        expectedResults: 'Cải thiện 20% hiệu quả sản xuất với các tiêu chuẩn chất lượng được duy trì',
        solution: 'Các nguyên tắc sản xuất tinh gọn với tự động hóa Công nghiệp 4.0 và kiểm soát chất lượng dự báo',
      },
      {
        title: 'Hệ Thống Chất Lượng Sản Xuất Pin Xe Điện',
        description: 'Thiết kế hệ thống kiểm soát chất lượng toàn diện cho sản xuất pin lithium-ion.',
        difficulty: 'Nâng cao',
        materials: ['Kiểm tra cell pin', 'Lắp ráp bộ pin', 'Xác nhận an toàn', 'Kiểm tra vòng đời'],
        procedure: [
          'Thiết kế các giao thức kiểm tra nguyên vật liệu đầu vào',
          'Thực hiện kiểm tra nội tuyến trong quá trình sản xuất cell pin',
          'Tạo các cổng chất lượng lắp ráp bộ pin',
          'Phát triển các quy trình kiểm tra lão hóa cấp tốc',
          'Thực hiện các hệ thống truy xuất nguồn gốc để theo dõi chất lượng',
          'Thiết kế các hệ thống phòng ngừa thu hồi và phân tích nguyên nhân gốc rễ',
        ],
        expectedResults: 'Chất lượng pin 99,9% không có sự cố an toàn',
        solution: 'Hệ thống chất lượng đa lớp với phát hiện lỗi do AI cung cấp và phân tích dự báo',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa sản xuất xe của VinFast',
      'Thiết lập các cơ sở sản xuất pin',
      'Các chương trình quản lý chất lượng nhà cung cấp',
      'Các sáng kiến giảm chi phí sản xuất',
      'Các chương trình đào tạo nhân lực sản xuất',
    ],
    caseStudies: [
      {
        title: 'Sáng Kiến Sản Xuất Thông Minh của VinFast',
        organization: 'VinFast',
        problem: 'Mở rộng quy mô sản xuất trong khi vẫn duy trì các tiêu chuẩn chất lượng quốc tế',
        solution: 'Thực hiện các công nghệ Công nghiệp 4.0 với phát triển nguồn nhân lực Việt Nam',
        impact: 'Cơ sở sản xuất đẳng cấp thế giới cạnh tranh toàn cầu',
        innovations: ['Sản xuất thông minh', 'Kiểm soát chất lượng', 'Tự động hóa', 'Phân tích dữ liệu'],
      },
    ],
    resources: [
      {
        title: 'Đổi Mới Sản Xuất của VinFast',
        url: 'https://vinfastauto.com/',
        type: 'CaseStudy',
      },
    ],
    technologies: [
      'Sản xuất thông minh',
      'Kiểm soát chất lượng',
      'Tự động hóa',
      'Quản lý chuỗi cung ứng',
      'Công nghiệp 4.0',
    ],
  },
];
