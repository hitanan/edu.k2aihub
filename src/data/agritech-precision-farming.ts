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
    description: 'Tìm hiểu về công nghệ nông nghiệp hiện đại và ứng dụng IoT trong canh tác. Khám phá cách công nghệ thay đổi ngành nông nghiệp Việt Nam.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=4uAXIzKwaWM',
    imageUrl: '/images/smart-farming-basics.jpg',
    cropType: 'Đa dạng',
    farmSize: 'Nhỏ đến vừa',
    technologyLevel: 'Cơ bản',
    objectives: [
      'Hiểu được khái niệm nông nghiệp thông minh và precision farming',
      'Nắm vững các công nghệ IoT cơ bản trong nông nghiệp',
      'Phân tích lợi ích và thách thức của smart farming tại Việt Nam',
      'Đánh giá ROI của việc áp dụng công nghệ trong nông nghiệp'
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ IoT',
      'Khả năng sử dụng smartphone và máy tính'
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
          'Đưa ra kế hoạch triển khai từng giai đoạn'
        ],
        expectedResults: 'Một kế hoạch chi tiết để triển khai hệ thống giám sát thông minh',
        solution: 'Hệ thống IoT cơ bản có thể giúp tăng năng suất 15-25% và giảm chi phí đầu vào 20-30%'
      },
      {
        title: 'Phân tích Dữ liệu Nông nghiệp',
        description: 'Sử dụng dữ liệu từ sensor để đưa ra quyết định canh tác',
        difficulty: 'Trung bình',
        materials: ['Dataset mẫu', 'Excel hoặc Google Sheets', 'Máy tính'],
        procedure: [
          'Tải dataset mẫu về nhiệt độ, độ ẩm, pH trong 30 ngày',
          'Tạo biểu đồ theo dõi xu hướng các thông số',
          'Xác định các ngưỡng cảnh báo cho từng thông số',
          'Thiết lập hệ thống alert tự động',
          'Đưa ra khuyến nghị tưới tiêu và bón phân'
        ],
        expectedResults: 'Dashboard theo dõi và hệ thống cảnh báo tự động',
        solution: 'Việc phân tích dữ liệu giúp tối ưu hóa việc sử dụng nước và phân bón, giảm lãng phí 30-40%'
      }
    ],
    realWorldApplications: [
      'Nông trại thông minh tại Đà Lạt sử dụng IoT để tối ưu hóa sản xuất rau sạch',
      'Các công ty như FPT, Viettel đang phát triển giải pháp nông nghiệp số',
      'Nông dân ở ĐBSCL áp dụng app di động để theo dõi giá lúa và thời tiết',
      'Startup như iMaker, Avimech cung cấp drone nông nghiệp cho nông dân Việt'
    ],
    caseStudies: [
      {
        title: 'Nông trại Rau sạch Đà Lạt',
        organization: 'Công ty TNHH Nông nghiệp Công nghệ cao',
        problem: 'Khó kiểm soát chất lượng và năng suất rau trong nhà kính',
        solution: 'Triển khai hệ thống IoT giám sát nhiệt độ, độ ẩm, CO2 tự động',
        impact: 'Tăng năng suất 40%, giảm chi phí lao động 25%, chất lượng ổn định',
        innovations: ['Tự động hóa tưới tiêu', 'Cảnh báo sớm dịch bệnh', 'Truy xuất nguồn gốc']
      }
    ],
    resources: [
      {
        title: 'Cẩm nang Nông nghiệp thông minh Việt Nam',
        url: 'https://mard.gov.vn/smart-agriculture',
        type: 'Documentation'
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://thingsboard.io/smart-farming/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'drone-crop-monitoring',
    title: 'Giám sát Cây trồng bằng Drone',
    description: 'Học cách sử dụng drone và AI để giám sát sức khỏe cây trồng, phát hiện sớm dịch bệnh và tối ưu hóa việc phun thuốc.',
    duration: '105 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=xvNzpMOSWVc',
    imageUrl: '/images/agricultural-drone.jpg',
    cropType: 'Lúa, Cà phê, Hoa màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được ứng dụng drone trong nông nghiệp precision farming',
      'Nắm vững kỹ thuật chụp ảnh và phân tích hình ảnh từ drone',
      'Phát hiện sớm dịch bệnh và stress cây trồng qua hình ảnh multispectral',
      'Tối ưu hóa việc phun thuốc và bón phán bằng drone'
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ drone',
      'Kỹ năng phân tích hình ảnh cơ bản'
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
          'Đánh giá thời gian bay và số lần thay pin cần thiết'
        ],
        expectedResults: 'Kế hoạch bay chi tiết với timeline và chi phí ước tính',
        solution: 'Drone có thể giám sát 100 hecta trong 2-3 giờ, hiệu quả hơn gấp 50 lần so với kiểm tra thủ công'
      },
      {
        title: 'Phân tích Hình ảnh Multispectral',
        description: 'Sử dụng AI để phân tích sức khỏe cây trồng từ hình ảnh drone',
        difficulty: 'Nâng cao',
        materials: ['Hình ảnh mẫu từ drone', 'Phần mềm QGIS', 'Plugin NDVI'],
        procedure: [
          'Import hình ảnh RGB và NIR từ drone vào QGIS',
          'Tính toán chỉ số NDVI (Normalized Difference Vegetation Index)',
          'Tạo bản đồ màu hiển thị sức khỏe cây trồng',
          'Xác định các vùng cây yếu hoặc bị bệnh',
          'Đưa ra khuyến nghị can thiệp cụ thể cho từng vùng'
        ],
        expectedResults: 'Bản đồ NDVI và báo cáo sức khỏe cây trồng chi tiết',
        solution: 'NDVI >0.7 cho thấy cây khỏe, <0.4 cần can thiệp ngay lập tức'
      }
    ],
    realWorldApplications: [
      'Công ty Avimech cung cấp drone nông nghiệp cho nông dân miền Bắc',
      'Dự án "Drone cho nông nghiệp" của Bộ NN&PTNT tại các tỉnh ĐBSCL',
      'Nông dân Tây Ninh sử dụng drone để phun thuốc trừ sâu trên cây cao su',
      'Startup AgriDrone phát triển AI phân tích bệnh cây trồng từ hình ảnh'
    ],
    caseStudies: [
      {
        title: 'Ứng dụng Drone ở Đồng bằng Sông Cửu Long',
        organization: 'Hợp tác xã Nông nghiệp An Giang',
        problem: 'Khó phát hiện sớm bệnh đạo ôn lúa trên diện tích lớn',
        solution: 'Sử dụng drone với camera multispectral để giám sát hàng tuần',
        impact: 'Phát hiện sớm bệnh 85% trường hợp, giảm thiệt hại 60%',
        innovations: ['AI phân tích hình ảnh real-time', 'Alert system tự động', 'Prescription mapping']
      }
    ],
    resources: [
      {
        title: 'Hướng dẫn sử dụng Drone Nông nghiệp',
        url: 'https://dronethongminh.vn/huong-dan',
        type: 'Tutorial'
      },
      {
        title: 'Phần mềm phân tích NDVI',
        url: 'https://qgis.org/en/site/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'smart-irrigation-systems',
    title: 'Hệ thống Tưới tiêu Thông minh',
    description: 'Thiết kế và triển khai hệ thống tưới tiêu tự động dựa trên dữ liệu sensor và dự báo thời tiết để tối ưu hóa việc sử dụng nước.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=-YnRQVEJd3Q',
    imageUrl: '/images/smart-irrigation.jpg',
    cropType: 'Cây ăn quả, Rau màu',
    farmSize: 'Vừa đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Thiết kế hệ thống tưới tiêu tự động với sensor độ ẩm đất',
      'Tích hợp dữ liệu thời tiết để tối ưu hóa lịch tưới',
      'Tính toán hiệu quả sử dụng nước và ROI của hệ thống',
      'Triển khai giải pháp cho các loại cây trồng khác nhau'
    ],
    prerequisites: [
      'Kiến thức về hệ thống tưới tiêu truyền thống',
      'Hiểu biết cơ bản về sensor và IoT',
      'Kỹ năng đọc hiểu dữ liệu và biểu đồ'
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
          'Ước tính chi phí đầu tư và tiết kiệm nước hàng năm'
        ],
        expectedResults: 'Bản thiết kế hoàn chỉnh với ước tính chi phí và hiệu quả',
        solution: 'Hệ thống thông minh có thể tiết kiệm 30-50% nước so với tưới truyền thống'
      },
      {
        title: 'Tối ưu hóa Lịch Tưới theo Thời tiết',
        description: 'Phát triển thuật toán tưới thông minh dựa trên dự báo thời tiết',
        difficulty: 'Nâng cao',
        materials: ['API thời tiết', 'Dữ liệu sensor mẫu', 'Excel/Python'],
        procedure: [
          'Kết nối API dự báo thời tiết (OpenWeatherMap)',
          'Phân tích mối quan hệ giữa lượng mưa và độ ẩm đất',
          'Xây dựng thuật toán dự đoán nhu cầu tưới',
          'Thiết lập hệ thống cảnh báo và điều chỉnh tự động',
          'Test thuật toán với dữ liệu thực tế 3 tháng'
        ],
        expectedResults: 'Thuật toán tưới thông minh với độ chính xác >85%',
        solution: 'AI có thể dự đoán nhu cầu tưới chính xác 85-90%, tránh tưới thừa khi có mưa'
      }
    ],
    realWorldApplications: [
      'Các nông trại Đà Lạt sử dụng hệ thống tưới thông minh cho hoa và rau',
      'Vườn cây ăn quả ở Tiền Giang áp dụng IoT để tưới tự động',
      'Công ty Netafim Việt Nam cung cấp giải pháp tưới nhỏ giọt thông minh',
      'Dự án tưới tiêu thông minh tại các tỉnh miền Trung chống hạn hán'
    ],
    caseStudies: [
      {
        title: 'Vườn Cây ăn quả Thông minh Tiền Giang',
        organization: 'HTX Nông nghiệp Cai Lậy',
        problem: 'Lãng phí nước tưới và năng suất không ổn định',
        solution: 'Triển khai hệ thống tưới nhỏ giọt với IoT monitoring',
        impact: 'Tiết kiệm 40% nước, tăng năng suất 25%, giảm chi phí lao động 30%',
        innovations: ['Weather-based scheduling', 'Soil moisture optimization', 'Remote monitoring']
      }
    ],
    resources: [
      {
        title: 'Cẩm nang Tưới tiêu Thông minh',
        url: 'https://smartirrigation.org/guide',
        type: 'Documentation'
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://blynk.io/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain trong Chuỗi Cung ứng Nông sản',
    description: 'Ứng dụng công nghệ blockchain để tạo sự minh bạch và truy xuất nguồn gốc trong chuỗi cung ứng nông sản từ nông trại đến người tiêu dùng.',
    duration: '135 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=orBRk-CQbKQ',
    imageUrl: '/images/blockchain-agriculture.jpg',
    cropType: 'Tất cả nông sản',
    farmSize: 'Lớn và chuỗi cung ứng',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được cách blockchain tạo minh bạch trong chuỗi cung ứng',
      'Thiết kế hệ thống truy xuất nguồn gốc cho nông sản',
      'Phát triển smart contract cho giao dịch nông sản',
      'Đánh giá lợi ích và thách thức của blockchain trong nông nghiệp'
    ],
    prerequisites: [
      'Hiểu biết cơ bản về blockchain và cryptocurrency',
      'Kiến thức về chuỗi cung ứng nông sản',
      'Kỹ năng lập trình cơ bản (khuyến nghị)'
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
          'Test hệ thống với một lô cà phê mẫu từ Đăk Lăk'
        ],
        expectedResults: 'Hệ thống blockchain hoàn chỉnh với demo truy xuất nguồn gốc',
        solution: 'Blockchain giúp tăng giá trị nông sản 15-30% nhờ xây dựng niềm tin người tiêu dùng'
      },
      {
        title: 'Smart Contract cho Giao dịch Nông sản',
        description: 'Phát triển hợp đồng thông minh để tự động hóa thanh toán',
        difficulty: 'Nâng cao',
        materials: ['Solidity IDE', 'Ethereum testnet', 'Web3 interface'],
        procedure: [
          'Thiết kế logic hợp đồng mua bán lúa với điều kiện chất lượng',
          'Viết smart contract với escrow mechanism',
          'Tích hợp oracle để lấy giá lúa real-time',
          'Test contract với các scenario khác nhau',
          'Deploy lên testnet và tạo frontend interface'
        ],
        expectedResults: 'Smart contract hoạt động với interface người dùng thân thiện',
        solution: 'Smart contract giảm chi phí giao dịch 20-40% và tăng tính minh bạch'
      }
    ],
    realWorldApplications: [
      'Walmart sử dụng blockchain để truy xuất nguồn gốc thực phẩm tại Việt Nam',
      'Công ty TNHH Cà phê Trung Nguyên thí điểm blockchain cho cà phê organic',
      'Dự án VeChain với nông sản Việt Nam xuất khẩu sang Trung Quốc',
      'Startup AgriChain phát triển platform blockchain cho nông dân Việt'
    ],
    caseStudies: [
      {
        title: 'Chuỗi Cung ứng Cà phê Organic Đăk Lăk',
        organization: 'Tập đoàn Cà phê Việt Nam',
        problem: 'Khó chứng minh nguồn gốc và chất lượng organic cho thị trường xuất khẩu',
        solution: 'Triển khai blockchain platform theo dõi từ nông trại đến cửa hàng',
        impact: 'Tăng giá bán 25%, giảm thời gian certification 60%, tăng niềm tin khách hàng',
        innovations: ['QR code truy xuất instant', 'IoT sensors tích hợp', 'International compliance']
      }
    ],
    resources: [
      {
        title: 'Blockchain cho Nông nghiệp',
        url: 'https://hyperledger.org/use-cases/agriculture',
        type: 'Documentation'
      },
      {
        title: 'Platform phát triển Smart Contract',
        url: 'https://remix.ethereum.org/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'vertical-farming-systems',
    title: 'Hệ thống Nông nghiệp Đứng',
    description: 'Khám phá công nghệ vertical farming và hydroponic để tối đa hóa năng suất trên diện tích nhỏ, phù hợp với xu hướng đô thị hóa.',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=6QdRG_jAfdc',
    imageUrl: '/images/vertical-farming.jpg',
    cropType: 'Rau xanh, Thảo mộc',
    farmSize: 'Nhỏ, Đô thị',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được nguyên lý và lợi ích của vertical farming',
      'Thiết kế hệ thống hydroponic cho urban farming',
      'Tối ưu hóa ánh sáng LED và dinh dưỡng cho cây trồng',
      'Phân tích kinh tế và tính bền vững của mô hình'
    ],
    prerequisites: [
      'Kiến thức cơ bản về sinh lý thực vật',
      'Hiểu biết về hệ thống điện và LED',
      'Kỹ năng thiết kế và tính toán cơ bản'
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
          'Ước tính chi phí đầu tư và sản lượng dự kiến'
        ],
        expectedResults: 'Bản thiết kế 3D với danh sách thiết bị và chi phí',
        solution: 'Vertical farm mini có thể sản xuất 20-30kg rau/tháng trong 10m2'
      },
      {
        title: 'Tối ưu hóa Công thức Dinh dưỡng Hydroponic',
        description: 'Phát triển nutrient solution cho cà chua cherry',
        difficulty: 'Trung bình',
        materials: ['Bảng dinh dưỡng thực vật', 'Calculator', 'pH meter mô phỏng'],
        procedure: [
          'Nghiên cứu nhu cầu dinh dưỡng của cà chua cherry theo giai đoạn',
          'Tính toán tỷ lệ NPK và vi lượng cần thiết',
          'Thiết lập lịch trình thay đổi dinh dưỡng theo tuần tuổi',
          'Monitor và điều chỉnh pH, EC của dung dịch',
          'Đánh giá hiệu quả qua tốc độ sinh trưởng và năng suất'
        ],
        expectedResults: 'Bảng công thức dinh dưỡng tối ưu cho cà chua cherry',
        solution: 'Nutrient solution chính xác có thể tăng năng suất 200-300% so với đất truyền thống'
      }
    ],
    realWorldApplications: [
      'Saigon Innovation Hub phát triển vertical farm cho các trường học TP.HCM',
      'Startup VinEco triển khai hệ thống urban farming tại các chung cư cao cấp',
      'Đại học Nông Lâm TP.HCM nghiên cứu hydroponic cho nông nghiệp đô thị',
      'Các khách sạn 5 sao sử dụng vertical farm để cung cấp rau sạch'
    ],
    caseStudies: [
      {
        title: 'Urban Farm tại Landmark 81',
        organization: 'Vinhomes Central Park',
        problem: 'Cung cấp rau sạch cho cư dân trong môi trường đô thị',
        solution: 'Xây dựng vertical farm 200m2 trên tầng thượng chung cư',
        impact: 'Sản xuất 500kg rau/tháng, giảm 70% chi phí mua rau cho cư dân',
        innovations: ['Automated nutrient system', 'Climate control', 'Mobile app monitoring']
      }
    ],
    resources: [
      {
        title: 'Hướng dẫn Vertical Farming',
        url: 'https://verticalfarm.org/guide',
        type: 'Documentation'
      },
      {
        title: 'Hydroponic Calculator',
        url: 'https://hydroponics.net/calculator',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'ai-pest-disease-detection',
    title: 'AI Phát hiện Sâu bệnh Cây trồng',
    description: 'Sử dụng machine learning và computer vision để phát hiện sớm sâu bệnh, giúp nông dân can thiệp kịp thời và giảm thiệt hại.',
    duration: '125 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=AheUmFRfZfs',
    imageUrl: '/images/ai-plant-disease.jpg',
    cropType: 'Lúa, Cây ăn quả, Rau màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được ứng dụng AI và computer vision trong nông nghiệp',
      'Phát triển model AI để nhận diện sâu bệnh từ hình ảnh',
      'Tạo mobile app cho nông dân sử dụng AI detection',
      'Đánh giá độ chính xác và hiệu quả của hệ thống AI'
    ],
    prerequisites: [
      'Kiến thức cơ bản về machine learning',
      'Hiểu biết về bệnh cây trồng phổ biến',
      'Kỹ năng lập trình Python cơ bản'
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
          'Đánh giá accuracy, precision, recall và confusion matrix'
        ],
        expectedResults: 'AI model với độ chính xác >90% trong nhận diện bệnh lúa',
        solution: 'CNN model có thể đạt 92-95% accuracy, giúp phát hiện sớm bệnh 2-3 tuần'
      },
      {
        title: 'Phát triển Mobile App AI Plant Doctor',
        description: 'Tạo ứng dụng di động sử dụng AI để chẩn đoán bệnh cây',
        difficulty: 'Nâng cao',
        materials: ['React Native/Flutter', 'TensorFlow Lite', 'Camera API'],
        procedure: [
          'Convert trained model sang TensorFlow Lite format',
          'Thiết kế UI/UX cho việc chụp ảnh và hiển thị kết quả',
          'Tích hợp camera với real-time prediction',
          'Thêm database các loại bệnh và cách điều trị',
          'Test app với nông dân thực tế và thu thập feedback'
        ],
        expectedResults: 'Mobile app hoàn chỉnh với AI engine tích hợp sẵn',
        solution: 'App có thể chẩn đoán tức thì, cung cấp khuyến nghị điều trị cụ thể'
      }
    ],
    realWorldApplications: [
      'PlantVillage platform của Penn State hỗ trợ nông dân Châu Phi',
      'Startup Việt Nam phát triển app "Bác sĩ cây trồng" cho nông dân',
      'Google AI for Social Good project về plant disease detection',
      'Các trung tâm khuyến nông sử dụng AI để tư vấn từ xa'
    ],
    caseStudies: [
      {
        title: 'AI Plant Doctor cho Nông dân Đồng bằng Sông Cửu Long',
        organization: 'Trung tâm Khuyến nông Quốc gia',
        problem: 'Nông dân khó tiếp cận chuyên gia khi cây bị bệnh',
        solution: 'Triển khai app AI có thể chẩn đoán 15 loại bệnh phổ biến',
        impact: 'Giảm 40% thời gian chẩn đoán, tăng 60% khả năng điều trị thành công',
        innovations: ['Offline AI model', 'Voice guidance tiếng Việt', 'Community support network']
      }
    ],
    resources: [
      {
        title: 'PlantVillage Dataset',
        url: 'https://www.kaggle.com/emmarex/plantdisease',
        type: 'Dataset'
      },
      {
        title: 'TensorFlow Plant Disease Guide',
        url: 'https://tensorflow.org/lite/examples/image_classification',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'agricultural-robotics',
    title: 'Robot Nông nghiệp và Tự động hóa',
    description: 'Khám phá các loại robot nông nghiệp từ robot thu hoạch đến robot làm cỏ, hiểu cách chúng thay đổi ngành nông nghiệp hiện đại.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=1yrVkUGtCi4',
    imageUrl: '/images/agricultural-robots.jpg',
    cropType: 'Đa dạng',
    farmSize: 'Lớn và công nghiệp',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được các loại robot nông nghiệp và ứng dụng của chúng',
      'Thiết kế robot đơn giản cho tác vụ nông nghiệp cụ thể',
      'Phân tích ROI và tính khả thi của robot nông nghiệp',
      'Đánh giá tác động của robotics đến việc làm nông nghiệp'
    ],
    prerequisites: [
      'Kiến thức cơ bản về robotics và automation',
      'Hiểu biết về quy trình nông nghiệp',
      'Kỹ năng thiết kế cơ khí cơ bản'
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
          'Tính toán tốc độ thu hoạch và chi phí vận hành'
        ],
        expectedResults: 'Bản thiết kế robot hoàn chỉnh với specifications kỹ thuật',
        solution: 'Robot thu hoạch có thể làm việc 24/7, hiệu quả gấp 5-10 lần thủ công'
      },
      {
        title: 'Lập trình Robot Làm cỏ Tự động',
        description: 'Phát triển thuật toán cho robot phân biệt cây trồng và cỏ dại',
        difficulty: 'Nâng cao',
        materials: ['Python/ROS', 'Computer vision library', 'Simulation environment'],
        procedure: [
          'Tạo dataset ảnh phân biệt cây lúa và cỏ dại',
          'Training deep learning model cho weed detection',
          'Thiết kế path planning algorithm cho robot di chuyển',
          'Lập trình control system cho cơ cấu làm cỏ',
          'Simulation và test trong môi trường ảo'
        ],
        expectedResults: 'Software package điều khiển robot làm cỏ tự động',
        solution: 'Robot có thể giảm 80-90% lượng thuốc diệt cỏ sử dụng'
      }
    ],
    realWorldApplications: [
      'Công ty John Deere phát triển máy kéo tự động cho nông nghiệp lớn',
      'Robot Ecorobotix của Thụy Sĩ làm cỏ chính xác từng cây',
      'Startup Việt Nam nghiên cứu robot thu hoạch lúa tự động',
      'Robot ong thụ phấn thay thế khi thiếu ong tự nhiên'
    ],
    caseStudies: [
      {
        title: 'Robot Farm tại Australia',
        organization: 'Australian Centre for Field Robotics',
        problem: 'Thiếu lao động nông nghiệp mùa thu hoạch',
        solution: 'Triển khai robot fleet cho gieo hạt, làm cỏ, thu hoạch',
        impact: 'Giảm 60% chi phí lao động, tăng 25% hiệu quả thu hoạch',
        innovations: ['Swarm robotics', 'Autonomous coordination', 'Multi-crop capability']
      }
    ],
    resources: [
      {
        title: 'Agricultural Robotics Research',
        url: 'https://www.field-robotics.org/',
        type: 'Research'
      },
      {
        title: 'ROS cho Robot Nông nghiệp',
        url: 'https://wiki.ros.org/agriculture',
        type: 'Documentation'
      }
    ]
  }
];
