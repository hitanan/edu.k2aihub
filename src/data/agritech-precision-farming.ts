import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AgriTechLessonData extends BaseLessonData {
  cropType?: string;
  farmSize?: string;
  technologyLevel?: string;
}

export const AgriTechLessons: AgriTechLessonData[] = [
  {
    id: 'smart-farming-fundamentals',
    title: 'Cơ bản Nông nghiệp Thông minh',
    description:
      'Tìm hiểu về công nghệ nông nghiệp hiện đại và ứng dụng IoT trong canh tác. Khám phá cách công nghệ thay đổi ngành nông nghiệp Việt Nam.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=nBOKyHpKCHU',
    imageUrl: '/images/smart-farming-basics.jpg',
    cropType: 'Đa dạng',
    farmSize: 'Nhỏ đến vừa',
    technologyLevel: 'Cơ bản',
    objectives: [
      'Hiểu được khái niệm nông nghiệp thông minh và precision farming',
      'Nắm vững các công nghệ IoT cơ bản trong nông nghiệp',
      'Phân tích lợi ích và thách thức của smart farming tại Việt Nam',
      'Đánh giá ROI của việc áp dụng công nghệ trong nông nghiệp',
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ IoT',
      'Khả năng sử dụng smartphone và máy tính',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát Cây trồng',
        description: 'Tạo ra một hệ thống giám sát cơ bản cho một loại cây trồng cụ thể',
        difficulty: 'Cơ bản',
        materials: ['Smartphone', 'App mô phỏng sensor', 'Giấy và bút'],
        procedure: [
          'Chọn một loại cây trồng phổ biến tại Việt Nam (lúa, cà phê, rau củ)',
          'Xác định các thông số cần giám sát (nhiệt độ, độ ẩm, pH đất)',
          'Thiết kế sơ đồ đặt sensor trong đồng ruộng',
          'Tính toán chi phí đầu tư và thời gian hoàn vốn',
          'Đưa ra kế hoạch triển khai từng giai đoạn',
        ],
        expectedResults: 'Một kế hoạch chi tiết để triển khai hệ thống giám sát thông minh',
        solution: 'Hệ thống IoT cơ bản có thể giúp tăng năng suất 15-25% và giảm chi phí đầu vào 20-30%',
      },
    ],
    realWorldApplications: [
      'Nông trại thông minh tại Đà Lạt sử dụng IoT để tối ưu hóa sản xuất rau sạch',
      'Các công ty như FPT, Viettel đang phát triển giải pháp nông nghiệp số',
      'Nông dân ở ĐBSCL áp dụng app di động để theo dõi giá lúa và thời tiết',
      'Startup như iMaker, Avimech cung cấp drone nông nghiệp cho nông dân Việt',
    ],
    caseStudies: [
      {
        title: 'Nông trại Rau sạch Đà Lạt',
        organization: 'Công ty TNHH Nông nghiệp Công nghệ cao',
        problem: 'Khó kiểm soát chất lượng và năng suất rau trong nhà kính',
        solution: 'Triển khai hệ thống IoT giám sát nhiệt độ, độ ẩm, CO2 tự động',
        impact: 'Tăng năng suất 40%, giảm chi phí lao động 25%, chất lượng ổn định',
        innovations: ['Tự động hóa tưới tiêu', 'Cảnh báo sớm dịch bệnh', 'Truy xuất nguồn gốc'],
      },
    ],
    resources: [
      {
        title: 'Cẩm nang Nông nghiệp thông minh Việt Nam',
        url: 'https://mard.gov.vn/smart-agriculture',
        type: 'Documentation',
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://thingsboard.io/smart-farming/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Nông nghiệp thông minh tại Việt Nam',
      content: [
        'Việt Nam đang đẩy mạnh chuyển đổi số trong nông nghiệp, với các vùng chuyên canh công nghệ cao ở Lâm Đồng, TP.HCM, Hà Nội.',
        'Các sản phẩm chủ lực như lúa gạo ở Đồng bằng sông Cửu Long, cà phê ở Tây Nguyên đang dần được áp dụng công nghệ để tăng chất lượng và giá trị xuất khẩu.',
        'Thách thức lớn nhất là chi phí đầu tư ban đầu và trình độ kỹ thuật của nông dân, đòi hỏi các giải pháp công nghệ phải "dễ dùng, dễ trúng thưởng".',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thị Lan',
      title: 'Chủ trang trại',
      company: 'Dalat Hasfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenthilan',
      quote:
        'Công nghệ không thay thế người nông dân, mà nó trở thành công cụ đắc lực giúp chúng tôi làm việc thông minh hơn, tạo ra sản phẩm tốt hơn cho người tiêu dùng.',
    },
    quizzes: [
      {
        question: 'IoT trong nông nghiệp là viết tắt của cụm từ nào?',
        options: [
          'Internet of Tractors',
          'Internet of Things',
          'International Organic Technology',
          'Investment in On-farm Technology',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) là mạng lưới các thiết bị vật lý được gắn cảm biến, phần mềm và các công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
    ],
  },
  {
    id: 'drone-crop-monitoring-3d',
    title: 'Giám sát Cây trồng bằng Drone',
    description:
      'Học cách sử dụng drone và AI để giám sát sức khỏe cây trồng, phát hiện sớm dịch bệnh và tối ưu hóa việc phun thuốc.',
    duration: '105 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u9x_s30_jlo',
    imageUrl: '/images/agricultural-drone.jpg',
    cropType: 'Lúa, Cà phê, Hoa màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được ứng dụng drone trong nông nghiệp precision farming',
      'Nắm vững kỹ thuật chụp ảnh và phân tích hình ảnh từ drone',
      'Phát hiện sớm dịch bệnh và stress cây trồng qua hình ảnh multispectral',
      'Tối ưu hóa việc phun thuốc và bón phán bằng drone',
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ drone',
      'Kỹ năng phân tích hình ảnh cơ bản',
    ],
    exercises: [
      {
        title: 'Lập kế hoạch Bay Drone cho Ruộng Lúa',
        description: 'Thiết kế flight path tối ưu để giám sát một ruộng lúa 10 hecta',
        difficulty: 'Trung bình',
        materials: ['Phần mềm Mission Planner', 'Google Earth', 'Máy tính'],
        procedure: [
          'Xác định kích thước và hình dạng ruộng lúa trên Google Earth',
          'Thiết lập flight path với overlap 75% giữa các ảnh',
          'Tính toán độ cao bay tối ưu (50-120m)',
          'Lập lịch bay theo giai đoạn sinh trưởng của lúa',
          'Đánh giá thời gian bay và số lần thay pin cần thiết',
        ],
        expectedResults: 'Kế hoạch bay chi tiết với timeline và chi phí ước tính',
        solution: 'Drone có thể giám sát 100 hecta trong 2-3 giờ, hiệu quả hơn gấp 50 lần so với kiểm tra thủ công',
      },
    ],
    realWorldApplications: [
      'Công ty Avimech cung cấp drone nông nghiệp cho nông dân miền Bắc',
      'Dự án "Drone cho nông nghiệp" của Bộ NN&PTNT tại các tỉnh ĐBSCL',
      'Nông dân Tây Ninh sử dụng drone để phun thuốc trừ sâu trên cây cao su',
      'Startup AgriDrone phát triển AI phân tích bệnh cây trồng từ hình ảnh',
    ],
    caseStudies: [
      {
        title: 'Ứng dụng Drone ở Đồng bằng Sông Cửu Long',
        organization: 'Hợp tác xã Nông nghiệp An Giang',
        problem: 'Khó phát hiện sớm bệnh đạo ôn lúa trên diện tích lớn',
        solution: 'Sử dụng drone với camera multispectral để giám sát hàng tuần',
        impact: 'Phát hiện sớm bệnh 85% trường hợp, giảm thiệt hại 60%',
        innovations: ['AI phân tích hình ảnh real-time', 'Alert system tự động', 'Prescription mapping'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn sử dụng Drone Nông nghiệp',
        url: 'https://dronethongminh.vn/huong-dan',
        type: 'Tutorial',
      },
      {
        title: 'Phần mềm phân tích NDVI',
        url: 'https://qgis.org/en/site/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Drone: "Mắt thần" trên đồng ruộng Việt',
      content: [
        'Tại Đồng bằng sông Cửu Long, drone phun thuốc đã trở nên phổ biến, giúp nông dân tiết kiệm 30% thuốc, 90% nước và bảo vệ sức khỏe.',
        'Các vườn cây ăn trái lớn ở miền Đông Nam Bộ dùng drone để thụ phấn nhân tạo, giải quyết vấn đề thiếu côn trùng thụ phấn tự nhiên.',
        'Chính phủ Việt Nam đang xây dựng hành lang pháp lý cho việc sử dụng drone trong nông nghiệp, mở đường cho công nghệ này phát triển mạnh mẽ hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Văn A',
      title: 'Phi công Drone Nông nghiệp',
      company: 'AgriDrone Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=tranvana',
      quote:
        'Nghề của chúng tôi là "lái máy bay" trên đồng ruộng. Mỗi chuyến bay không chỉ giúp tăng năng suất mà còn giúp người nông dân bớt đi gánh nặng và độc hại.',
    },
    quizzes: [
      {
        question: 'Chỉ số NDVI (Normalized Difference Vegetation Index) được dùng để đo lường điều gì?',
        options: ['Độ ẩm của đất', 'Sức khỏe và mật độ của thảm thực vật', 'Nhiệt độ của lá cây', 'Tốc độ gió'],
        correctAnswerIndex: 1,
        explanation:
          'NDVI được tính toán từ ánh sáng phản xạ ở vùng cận hồng ngoại (NIR) và vùng ánh sáng nhìn thấy (VIS). Thực vật khỏe mạnh hấp thụ nhiều ánh sáng đỏ và phản xạ nhiều ánh sáng cận hồng ngoại, do đó có chỉ số NDVI cao.',
      },
    ],
  },
  {
    id: 'smart-irrigation-systems',
    title: 'Hệ thống Tưới tiêu Thông minh',
    description:
      'Thiết kế và triển khai hệ thống tưới tiêu tự động dựa trên dữ liệu sensor và dự báo thời tiết để tối ưu hóa việc sử dụng nước.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Xsm5Wc2x49A',
    imageUrl: '/images/smart-irrigation.jpg',
    cropType: 'Cây ăn quả, Rau màu',
    farmSize: 'Vừa đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Thiết kế hệ thống tưới tiêu tự động với sensor độ ẩm đất',
      'Tích hợp dữ liệu thời tiết để tối ưu hóa lịch tưới',
      'Tính toán hiệu quả sử dụng nước và ROI của hệ thống',
      'Triển khai giải pháp cho các loại cây trồng khác nhau',
    ],
    prerequisites: [
      'Kiến thức về hệ thống tưới tiêu truyền thống',
      'Hiểu biết cơ bản về sensor và IoT',
      'Kỹ năng đọc hiểu dữ liệu và biểu đồ',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Tưới nhỏ giọt Thông minh',
        description: 'Tạo ra hệ thống tưới tự động cho vườn cây ăn quả 5 hecta',
        difficulty: 'Trung bình',
        materials: ['Sơ đồ vườn cây', 'Catalog thiết bị tưới', 'Calculator'],
        procedure: [
          'Phân tích nhu cầu nước của từng loại cây trong vườn',
          'Thiết kế sơ đồ đường ống và vị trí đặt sensor',
          'Tính toán lưu lượng nước và áp suất cần thiết',
          'Lập trình logic điều khiển dựa trên dữ liệu sensor',
          'Ước tính chi phí đầu tư và tiết kiệm nước hàng năm',
        ],
        expectedResults: 'Bản thiết kế hoàn chỉnh với ước tính chi phí và hiệu quả',
        solution: 'Hệ thống thông minh có thể tiết kiệm 30-50% nước so với tưới truyền thống',
      },
    ],
    realWorldApplications: [
      'Các nông trại Đà Lạt sử dụng hệ thống tưới thông minh cho hoa và rau',
      'Vườn cây ăn quả ở Tiền Giang áp dụng IoT để tưới tự động',
      'Công ty Netafim Việt Nam cung cấp giải pháp tưới nhỏ giọt thông minh',
      'Dự án tưới tiêu thông minh tại các tỉnh miền Trung chống hạn hán',
    ],
    caseStudies: [
      {
        title: 'Vườn Cây ăn quả Thông minh Tiền Giang',
        organization: 'HTX Nông nghiệp Cai Lậy',
        problem: 'Lãng phí nước tưới và năng suất không ổn định',
        solution: 'Triển khai hệ thống tưới nhỏ giọt với IoT monitoring',
        impact: 'Tiết kiệm 40% nước, tăng năng suất 25%, giảm chi phí lao động 30%',
        innovations: ['Weather-based scheduling', 'Soil moisture optimization', 'Remote monitoring'],
      },
    ],
    resources: [
      {
        title: 'Cẩm nang Tưới tiêu Thông minh',
        url: 'https://smartirrigation.org/guide',
        type: 'Documentation',
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://blynk.io/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Giải bài toán "khát" cho nông nghiệp Việt',
      content: [
        'Tưới nhỏ giọt theo công nghệ Israel đang được áp dụng rộng rãi tại các vùng khô hạn như Ninh Thuận, Bình Thuận, giúp trồng được các loại cây có giá trị cao như nho, táo.',
        'Đối với cây cà phê ở Tây Nguyên, tưới thông minh không chỉ tiết kiệm nước mà còn giúp cây ra hoa đồng loạt, tăng tỷ lệ đậu quả và chất lượng hạt.',
        'Thách thức là tích hợp hệ thống tưới với các nguồn nước không ổn định và địa hình phức tạp của Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Ông Nguyễn Văn Dũng',
      title: 'Kỹ sư trưởng',
      company: 'Netafim Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenvandung',
      quote:
        'Mỗi giọt nước được tiết kiệm hôm nay là một hạt giống cho tương lai bền vững của nông nghiệp Việt Nam. Công nghệ tưới thông minh chính là chìa khóa.',
    },
    quizzes: [
      {
        question: 'Hệ thống tưới tiêu thông minh thường dựa vào dữ liệu từ cảm biến nào nhất?',
        options: ['Cảm biến nhiệt độ không khí', 'Cảm biến ánh sáng', 'Cảm biến độ ẩm đất', 'Cảm biến âm thanh'],
        correctAnswerIndex: 2,
        explanation:
          'Cảm biến độ ẩm đất là thành phần cốt lõi, nó cung cấp dữ liệu trực tiếp về lượng nước có sẵn cho rễ cây, giúp hệ thống quyết định khi nào và tưới bao nhiêu là tối ưu.',
      },
    ],
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain trong Chuỗi Cung ứng Nông sản',
    description:
      'Ứng dụng công nghệ blockchain để tạo sự minh bạch và truy xuất nguồn gốc trong chuỗi cung ứng nông sản từ nông trại đến người tiêu dùng.',
    duration: '135 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ojP9nY-YJNg',
    imageUrl: '/images/blockchain-agriculture.jpg',
    cropType: 'Tất cả nông sản',
    farmSize: 'Lớn và chuỗi cung ứng',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được cách blockchain tạo minh bạch trong chuỗi cung ứng',
      'Thiết kế hệ thống truy xuất nguồn gốc cho nông sản',
      'Phát triển smart contract cho giao dịch nông sản',
      'Đánh giá lợi ích và thách thức của blockchain trong nông nghiệp',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về blockchain và cryptocurrency',
      'Kiến thức về chuỗi cung ứng nông sản',
      'Kỹ năng lập trình cơ bản (khuyến nghị)',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Truy xuất Nguồn gốc Cà phê',
        description: 'Tạo blockchain system để theo dõi cà phê từ nông trại đến cửa hàng',
        difficulty: 'Nâng cao',
        materials: ['Hyperledger Fabric mô phỏng', 'Flowchart tool', 'Database design'],
        procedure: [
          'Xác định các bên liên quan trong chuỗi cung ứng cà phê',
          'Thiết kế data structure cho mỗi giai đoạn (trồng, thu hoạch, chế biến, vận chuyển)',
          'Tạo smart contract cho việc chuyển giao quyền sở hữu',
          'Phát triển interface cho nông dân, nhà máy, và nhà bán lẻ',
          'Test hệ thống với một lô cà phê mẫu từ Đăk Lăk',
        ],
        expectedResults: 'Hệ thống blockchain hoàn chỉnh với demo truy xuất nguồn gốc',
        solution: 'Blockchain giúp tăng giá trị nông sản 15-30% nhờ xây dựng niềm tin người tiêu dùng',
      },
    ],
    realWorldApplications: [
      'Walmart sử dụng blockchain để truy xuất nguồn gốc thực phẩm tại Việt Nam',
      'Công ty TNHH Cà phê Trung Nguyên thí điểm blockchain cho cà phê organic',
      'Dự án VeChain với nông sản Việt Nam xuất khẩu sang Trung Quốc',
      'Startup AgriChain phát triển platform blockchain cho nông dân Việt',
    ],
    caseStudies: [
      {
        title: 'Chuỗi Cung ứng Cà phê Organic Đăk Lăk',
        organization: 'Tập đoàn Cà phê Việt Nam',
        problem: 'Khó chứng minh nguồn gốc và chất lượng organic cho thị trường xuất khẩu',
        solution: 'Triển khai blockchain platform theo dõi từ nông trại đến cửa hàng',
        impact: 'Tăng giá bán 25%, giảm thời gian certification 60%, tăng niềm tin khách hàng',
        innovations: ['QR code truy xuất instant', 'IoT sensors tích hợp', 'International compliance'],
      },
    ],
    resources: [
      {
        title: 'Blockchain cho Nông nghiệp',
        url: 'https://hyperledger.org/use-cases/agriculture',
        type: 'Documentation',
      },
      {
        title: 'Platform phát triển Smart Contract',
        url: 'https://remix.ethereum.org/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Minh bạch hóa nông sản Việt bằng Blockchain',
      content: [
        'Đối với các sản phẩm xuất khẩu chủ lực như gạo, cà phê, thủy sản, blockchain là "giấy thông hành" để vào các thị trường khó tính như EU, Nhật Bản, Mỹ.',
        'Nhiều hợp tác xã đã áp dụng tem QR code dựa trên blockchain, cho phép người tiêu dùng quét và xem toàn bộ "nhật ký" của sản phẩm từ lúc gieo trồng.',
        'Thách thức là làm sao để tất cả các tác nhân trong chuỗi cung ứng, đặc biệt là các nông hộ nhỏ lẻ, có thể tham gia vào hệ thống một cách dễ dàng.',
      ],
    },
    careerConnect: {
      name: 'Ông Đào Hà Trung',
      title: 'Chủ tịch Hội Công nghệ cao TP.HCM (HITECH)',
      company: 'TE-FOOD International',
      imageUrl: 'https://i.pravatar.cc/150?u=daohatrung',
      quote:
        'Blockchain không phải là cây đũa thần, nhưng nó là công cụ mạnh mẽ nhất để xây dựng niềm tin - thứ còn quý hơn vàng trong ngành nông sản.',
    },
    quizzes: [
      {
        question: 'Đặc tính nào của Blockchain làm cho nó phù hợp với việc truy xuất nguồn gốc?',
        options: [
          'Tính ẩn danh',
          'Tính tập trung',
          'Tính bất biến (không thể thay đổi) và minh bạch',
          'Tốc độ giao dịch nhanh',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tính bất biến đảm bảo rằng một khi dữ liệu đã được ghi vào chuỗi, không ai có thể sửa đổi hoặc xóa nó. Tính minh bạch cho phép tất cả các bên được cấp phép có thể xem cùng một thông tin, tạo ra một "sự thật duy nhất".',
      },
    ],
  },
  {
    id: 'vertical-farming-systems',
    title: 'Hệ thống Nông nghiệp Đứng',
    description:
      'Khám phá công nghệ vertical farming và hydroponic để tối đa hóa năng suất trên diện tích nhỏ, phù hợp với xu hướng đô thị hóa.',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=XNlNP75vyYc',
    imageUrl: '/images/vertical-farming.jpg',
    cropType: 'Rau xanh, Thảo mộc',
    farmSize: 'Nhỏ, Đô thị',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được nguyên lý và lợi ích của vertical farming',
      'Thiết kế hệ thống hydroponic cho urban farming',
      'Tối ưu hóa ánh sáng LED và dinh dưỡng cho cây trồng',
      'Phân tích kinh tế và tính bền vững của mô hình',
    ],
    prerequisites: [
      'Kiến thức cơ bản về sinh lý thực vật',
      'Hiểu biết về hệ thống điện và LED',
      'Kỹ năng thiết kế và tính toán cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Vertical Farm cho Căn hộ Chung cư',
        description: 'Tạo hệ thống trồng rau trong không gian 10m2',
        difficulty: 'Trung bình',
        materials: ['Software thiết kế 3D', 'Catalog thiết bị', 'Máy tính'],
        procedure: [
          'Khảo sát không gian và điều kiện ánh sáng tự nhiên',
          'Thiết kế khung giá đỡ tối ưu cho 5-7 tầng trồng',
          'Tính toán hệ thống đèn LED và thời gian chiếu sáng',
          'Thiết kế hệ thống tuần hoàn nước và dinh dưỡng',
          'Ước tính chi phí đầu tư và sản lượng dự kiến',
        ],
        expectedResults: 'Bản thiết kế 3D với danh sách thiết bị và chi phí',
        solution: 'Vertical farm mini có thể sản xuất 20-30kg rau/tháng trong 10m2',
      },
    ],
    realWorldApplications: [
      'Saigon Innovation Hub phát triển vertical farm cho các trường học TP.HCM',
      'Startup VinEco triển khai hệ thống urban farming tại các chung cư cao cấp',
      'Đại học Nông Lâm TP.HCM nghiên cứu hydroponic cho nông nghiệp đô thị',
      'Các khách sạn 5 sao sử dụng vertical farm để cung cấp rau sạch',
    ],
    caseStudies: [
      {
        title: 'Urban Farm tại Landmark 81',
        organization: 'Vinhomes Central Park',
        problem: 'Cung cấp rau sạch cho cư dân trong môi trường đô thị',
        solution: 'Xây dựng vertical farm 200m2 trên tầng thượng chung cư',
        impact: 'Sản xuất 500kg rau/tháng, giảm 70% chi phí mua rau cho cư dân',
        innovations: ['Automated nutrient system', 'Climate control', 'Mobile app monitoring'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Vertical Farming',
        url: 'https://verticalfarm.org/guide',
        type: 'Documentation',
      },
      {
        title: 'Hydroponic Calculator',
        url: 'https://hydroponics.net/calculator',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Mang trang trại về thành phố',
      content: [
        'Với tốc độ đô thị hóa nhanh, vertical farming là giải pháp tiềm năng để đảm bảo an ninh lương thực cho các thành phố lớn như Hà Nội và TP.HCM.',
        'Mô hình này đặc biệt phù hợp để trồng các loại rau gia vị, salad cao cấp cho các nhà hàng, khách sạn, đảm bảo độ tươi ngon và an toàn tuyệt đối.',
        'Các công ty như Vingroup đang tiên phong trong việc tích hợp các trang trại thẳng đứng vào các khu đô thị thông minh của họ.',
      ],
    },
    careerConnect: {
      name: 'Chị Phan Thị Thảo',
      title: 'Sáng lập',
      company: 'Greeny Vertical Farm',
      imageUrl: 'https://i.pravatar.cc/150?u=phanthithao',
      quote:
        'Chúng tôi không chỉ trồng rau, chúng tôi mang cả một hệ sinh thái xanh vào từng ngôi nhà, giúp mọi người kết nối lại với thiên nhiên ngay trong lòng đô thị.',
    },
    quizzes: [
      {
        question: 'Hydroponics là phương pháp trồng cây...',
        options: [
          'Trong không khí',
          'Trong dung dịch dinh dưỡng, không cần đất',
          'Trên các tầng cao của tòa nhà',
          'Chỉ sử dụng ánh sáng mặt trời',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hydroponics là một nhánh của hydroculture, phương pháp trồng cây mà không cần đất, bằng cách sử dụng dung dịch dinh dưỡng khoáng chất trong dung môi nước.',
      },
    ],
  },
  {
    id: 'ai-pest-disease-detection',
    title: 'AI Phát hiện Sâu bệnh Cây trồng',
    description:
      'Sử dụng machine learning và computer vision để phát hiện sớm sâu bệnh, giúp nông dân can thiệp kịp thời và giảm thiệt hại.',
    duration: '125 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=c62HxNjLKo0',
    imageUrl: '/images/ai-plant-disease.jpg',
    cropType: 'Lúa, Cây ăn quả, Rau màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được ứng dụng AI và computer vision trong nông nghiệp',
      'Phát triển model AI để nhận diện sâu bệnh từ hình ảnh',
      'Tạo mobile app cho nông dân sử dụng AI detection',
      'Đánh giá độ chính xác và hiệu quả của hệ thống AI',
    ],
    prerequisites: [
      'Kiến thức cơ bản về machine learning',
      'Hiểu biết về bệnh cây trồng phổ biến',
      'Kỹ năng lập trình Python cơ bản',
    ],
    exercises: [
      {
        title: 'Huấn luyện Model Nhận diện Bệnh Lá Lúa',
        description: 'Xây dựng CNN model để phân loại bệnh lá lúa từ hình ảnh',
        difficulty: 'Nâng cao',
        materials: ['Dataset hình ảnh bệnh lúa', 'Google Colab', 'TensorFlow/Keras'],
        procedure: [
          'Download dataset 5000 ảnh lá lúa (khỏe mạnh, đạo ôn, cháy lá, khô vằn)',
          'Preprocessing ảnh: resize, normalization, data augmentation',
          'Thiết kế CNN architecture với transfer learning (ResNet50)',
          'Training model với 80% data, validation 20%',
          'Đánh giá accuracy, precision, recall và confusion matrix',
        ],
        expectedResults: 'AI model với độ chính xác >90% trong nhận diện bệnh lúa',
        solution: 'CNN model có thể đạt 92-95% accuracy, giúp phát hiện sớm bệnh 2-3 tuần',
      },
    ],
    realWorldApplications: [
      'PlantVillage platform của Penn State hỗ trợ nông dân Châu Phi',
      'Startup Việt Nam phát triển app "Bác sĩ cây trồng" cho nông dân',
      'Google AI for Social Good project về plant disease detection',
      'Các trung tâm khuyến nông sử dụng AI để tư vấn từ xa',
    ],
    caseStudies: [
      {
        title: 'AI Plant Doctor cho Nông dân Đồng bằng Sông Cửu Long',
        organization: 'Trung tâm Khuyến nông Quốc gia',
        problem: 'Nông dân khó tiếp cận chuyên gia khi cây bị bệnh',
        solution: 'Triển khai app AI có thể chẩn đoán 15 loại bệnh phổ biến',
        impact: 'Giảm 40% thời gian chẩn đoán, tăng 60% khả năng điều trị thành công',
        innovations: ['Offline AI model', 'Voice guidance tiếng Việt', 'Community support network'],
      },
    ],
    resources: [
      {
        title: 'PlantVillage Dataset',
        url: 'https://www.kaggle.com/emmarex/plantdisease',
        type: 'Dataset',
      },
      {
        title: 'TensorFlow Plant Disease Guide',
        url: 'https://tensorflow.org/lite/examples/image_classification',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: '"Bác sĩ cây trồng" trong túi nông dân Việt',
      content: [
        'Các ứng dụng di động như "Bác sĩ Cây trồng" đang giúp nông dân Việt Nam tự chẩn đoán bệnh cho cây chỉ bằng một bức ảnh chụp từ điện thoại.',
        'Dữ liệu hình ảnh về các loại sâu bệnh đặc hữu của Việt Nam là yếu tố quan trọng để xây dựng các mô hình AI chính xác và hiệu quả.',
        'AI không chỉ phát hiện bệnh mà còn có thể đưa ra khuyến nghị về loại thuốc và liều lượng phù hợp, giúp giảm lạm dụng thuốc bảo vệ thực vật.',
      ],
    },
    careerConnect: {
      name: 'TS. Nguyễn Đức Thành',
      title: 'Nhà khoa học dữ liệu',
      company: 'Viện Di truyền Nông nghiệp',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenducthanh',
      quote:
        'Mỗi bức ảnh về một chiếc lá bệnh mà người nông dân gửi lên là một đóng góp quý giá. Chúng tôi dùng AI để biến hàng triệu bức ảnh đó thành tri thức giúp ích lại cho hàng triệu người.',
    },
    quizzes: [
      {
        question: 'Transfer Learning trong Computer Vision là gì?',
        options: [
          'Chuyển ảnh từ máy tính này sang máy tính khác',
          'Sử dụng một mô hình đã được huấn luyện trên một bộ dữ liệu lớn (ví dụ: ImageNet) làm điểm khởi đầu để huấn luyện cho một tác vụ mới',
          'Chuyển đổi mô hình từ TensorFlow sang PyTorch',
          'Học cách nhận diện nhiều loại bệnh cùng lúc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Transfer Learning giúp tiết kiệm thời gian và tài nguyên tính toán đáng kể. Thay vì huấn luyện từ đầu, chúng ta tận dụng các "kiến thức" về các đặc trưng hình ảnh (cạnh, góc, kết cấu...) mà mô hình lớn đã học được.',
      },
    ],
  },
  {
    id: 'agricultural-robotics',
    title: 'Robot Nông nghiệp và Tự động hóa',
    description:
      'Khám phá các loại robot nông nghiệp từ robot thu hoạch đến robot làm cỏ, hiểu cách chúng thay đổi ngành nông nghiệp hiện đại.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=-OeaKm-aBio',
    imageUrl: '/images/agricultural-robots.jpg',
    cropType: 'Đa dạng',
    farmSize: 'Lớn và công nghiệp',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được các loại robot nông nghiệp và ứng dụng của chúng',
      'Thiết kế robot đơn giản cho tác vụ nông nghiệp cụ thể',
      'Phân tích ROI và tính khả thi của robot nông nghiệp',
      'Đánh giá tác động của robotics đến việc làm nông nghiệp',
    ],
    prerequisites: [
      'Kiến thức cơ bản về robotics và automation',
      'Hiểu biết về quy trình nông nghiệp',
      'Kỹ năng thiết kế cơ khí cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Robot Thu hoạch Cà chua',
        description: 'Tạo concept robot tự động thu hoạch cà chua trong nhà kính',
        difficulty: 'Nâng cao',
        materials: ['CAD software', 'Sensor specifications', 'Actuator catalogs'],
        procedure: [
          'Phân tích yêu cầu: nhận diện cà chua chín, gắp không làm hỏng',
          'Thiết kế cơ cấu di chuyển trong lối đi nhà kính',
          'Thiết kế tay gắp với độ mềm mại phù hợp',
          'Tích hợp camera và AI vision cho object detection',
          'Tính toán tốc độ thu hoạch và chi phí vận hành',
        ],
        expectedResults: 'Bản thiết kế robot hoàn chỉnh với specifications kỹ thuật',
        solution: 'Robot thu hoạch có thể làm việc 24/7, hiệu quả gấp 5-10 lần thủ công',
      },
    ],
    realWorldApplications: [
      'Công ty John Deere phát triển máy kéo tự động cho nông nghiệp lớn',
      'Robot Ecorobotix của Thụy Sĩ làm cỏ chính xác từng cây',
      'Startup Việt Nam nghiên cứu robot thu hoạch lúa tự động',
      'Robot ong thụ phấn thay thế khi thiếu ong tự nhiên',
    ],
    caseStudies: [
      {
        title: 'Robot Farm tại Australia',
        organization: 'Australian Centre for Field Robotics',
        problem: 'Thiếu lao động nông nghiệp mùa thu hoạch',
        solution: 'Triển khai robot fleet cho gieo hạt, làm cỏ, thu hoạch',
        impact: 'Giảm 60% chi phí lao động, tăng 25% hiệu quả thu hoạch',
        innovations: ['Swarm robotics', 'Autonomous coordination', 'Multi-crop capability'],
      },
    ],
    resources: [
      {
        title: 'Agricultural Robotics Research',
        url: 'https://www.field-robotics.org/',
        type: 'Research',
      },
      {
        title: 'ROS cho Robot Nông nghiệp',
        url: 'https://wiki.ros.org/agriculture',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Robot thay trâu trên đồng ruộng Việt Nam?',
      content: [
        'Tình trạng thiếu lao động nông thôn do di cư ra thành thị đang thúc đẩy nhu cầu tự động hóa trong nông nghiệp Việt Nam.',
        'Các viện nghiên cứu và trường đại học như Đại học Bách Khoa đang phát triển các mẫu robot nông nghiệp "made in Vietnam" với chi phí hợp lý.',
        'Robot nông nghiệp không chỉ giải quyết bài toán lao động mà còn giúp thực hiện các công việc đòi hỏi độ chính xác cao mà con người khó làm được, như vi phun thuốc hoặc làm cỏ chọn lọc.',
      ],
    },
    careerConnect: {
      name: 'PGS. TS. Đỗ Văn Dũng',
      title: 'Nguyên Hiệu trưởng',
      company: 'Đại học Sư phạm Kỹ thuật TP.HCM',
      imageUrl: 'https://i.pravatar.cc/150?u=dovandung',
      quote:
        'Tương lai của nông nghiệp nằm ở những cỗ máy thông minh. Đào tạo ra một thế hệ kỹ sư có thể thiết kế, chế tạo và vận hành những robot này là nhiệm vụ của chúng tôi.',
    },
    quizzes: [
      {
        question: 'ROS trong robotics là viết tắt của?',
        options: [
          'Robot Operating System',
          'Remote Operation Service',
          'Robotic Object Sensor',
          'Real-time Operating System',
        ],
        correctAnswerIndex: 0,
        explanation:
          'ROS (Robot Operating System) là một framework linh hoạt để viết phần mềm cho robot. Nó cung cấp một tập hợp các công cụ, thư viện và quy ước nhằm mục đích đơn giản hóa nhiệm vụ tạo ra các hành vi robot phức tạp và mạnh mẽ trên nhiều nền tảng robot khác nhau.',
      },
    ],
  },
];
