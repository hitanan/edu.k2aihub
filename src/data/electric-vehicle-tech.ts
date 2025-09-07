import { BaseLessonData } from '@/types/lesson-base';

export const electricVehicleLessons: BaseLessonData[] = [
  {
    id: 'ev-powertrain-battery-fundamentals',
    title: 'Hệ Thống Truyền Động & Công Nghệ Pin Xe Điện',
    description:
      'Hiểu biết toàn diện về hệ thống truyền động xe điện, công nghệ pin và quản lý năng lượng. Tập trung vào pin lithium-ion, hệ thống sạc và quản lý nhiệt.',
    duration: '180 phút',
    difficulty: 'Trung bình',
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
      },
      {
        title: 'Thiết Kế Hạ Tầng Sạc Xe Điện cho Việt Nam',
        description:
          'Thiết kế mạng lưới sạc xe điện toàn diện cho các thành phố Việt Nam, xem xét các hạn chế của lưới điện.',
        difficulty: 'Nâng cao',
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
  },
  {
    id: 'autonomous-driving-systems',
    title: 'Lái Xe Tự Hành & Hệ Thống Hỗ Trợ Lái Xe Nâng Cao',
    description:
      'Công nghệ xe tự hành tiên tiến từ ADAS đến hệ thống lái xe hoàn toàn tự động. Computer vision, tổng hợp cảm biến, ra quyết định cho điều kiện giao thông Việt Nam.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
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
    exercises: [
      {
        title: 'Hệ Thống Nhận Dạng Mẫu Giao Thông Việt Nam',
        description:
          'Phát triển hệ thống computer vision để nhận dạng và dự đoán các mẫu giao thông Việt Nam bao gồm cả xe máy.',
        difficulty: 'Nâng cao',
      },
      {
        title: 'Tích Hợp Quản Lý Giao Thông Thông Minh',
        description:
          'Thiết kế hệ thống V2X (Vehicle-to-Everything) để quản lý giao thông thông minh tại các thành phố Việt Nam.',
        difficulty: 'Nâng cao',
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
  },
  {
    id: 'charging-infrastructure-grid-integration',
    title: 'Hạ Tầng Sạc & Tích Hợp Lưới Điện Thông Minh',
    description:
      'Thiết kế hạ tầng sạc xe điện toàn diện, tích hợp lưới điện, sạc thông minh và công nghệ Vehicle-to-Grid (V2G) cho hệ sinh thái năng lượng bền vững.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
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
    exercises: [
      {
        title: 'Mạng Lưới Sạc Thông Minh cho TP.HCM',
        description: 'Thiết kế mạng lưới sạc thông minh toàn diện với cân bằng tải và tích hợp năng lượng tái tạo.',
        difficulty: 'Nâng cao',
      },
      {
        title: 'Nghiên Cứu Triển Khai Vehicle-to-Grid (V2G)',
        description: 'Phát triển hệ thống V2G cho phép xe điện cung cấp dịch vụ lưới điện và lưu trữ năng lượng.',
        difficulty: 'Nâng cao',
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
  },
  {
    id: 'ev-manufacturing-quality-control',
    title: 'Sản Xuất Xe Điện & Hệ Thống Kiểm Soát Chất Lượng',
    description:
      'Các quy trình sản xuất tiên tiến cho xe điện, hệ thống kiểm soát chất lượng, quản lý chuỗi cung ứng và các kỹ thuật tối ưu hóa sản xuất.',
    duration: '160 phút',
    difficulty: 'Trung bình',
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
      },
      {
        title: 'Hệ Thống Chất Lượng Sản Xuất Pin Xe Điện',
        description: 'Thiết kế hệ thống kiểm soát chất lượng toàn diện cho sản xuất pin lithium-ion.',
        difficulty: 'Nâng cao',
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
  },
];
