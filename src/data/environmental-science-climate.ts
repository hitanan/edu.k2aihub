import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

// Environmental Science & Climate Lesson Interface
export interface EnvironmentalClimateLessonType extends BaseLessonData {
  climateTopics?: string[];
  environmentalSolutions?: string[];
  sustainabilityMethods?: string[];
  researchTools?: string[];
  policyApplications?: string[];
  // Legacy support
  researchMethods?: string[];
  environmentalFactors?: string[];
  monitoringTechnologies?: string[];
  solutionApproaches?: string[];
  policyFrameworks?: string[];
}

export const environmentalClimateLessons: EnvironmentalClimateLessonType[] = [
  {
    id: 'climate-science-fundamentals',
    title: 'Khoa học Khí hậu Cơ bản và Bối cảnh Việt Nam',
    description:
      'Nắm vững các nguyên tắc cơ bản của khoa học khí hậu, hiệu ứng nhà kính và tác động của biến đổi khí hậu đặc biệt ảnh hưởng đến Việt Nam và khu vực Đông Nam Á.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=G4H1N_yXBiA', // General climate change video
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc khoa học khí hậu cơ bản',
      'Phân tích các kiểu và xu hướng khí hậu Việt Nam',
      'Xác định các tác động của biến đổi khí hậu đối với Đông Nam Á',
      'Học các kỹ thuật phân tích dữ liệu khí hậu',
      'Hiểu các nguồn phát thải khí nhà kính',
      'Nắm vững các kiến thức cơ bản về mô hình hóa khí hậu',
    ],
    prerequisites: [
      'Kiến thức cơ bản về khoa học trái đất',
      'Hiểu biết về phương pháp khoa học',
      'Quan tâm đến các vấn đề môi trường',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-modeling'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnam-geography-quiz'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-data-analyst'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: ['Hiệu ứng nhà kính', 'Mô hình khí hậu', 'Xu hướng nhiệt độ', 'Các kiểu mưa', 'Mực nước biển dâng'],
    environmentalSolutions: [
      'Năng lượng tái tạo',
      'Thu giữ Carbon',
      'Tái trồng rừng',
      'Nông nghiệp bền vững',
      'Giao thông xanh',
    ],
    sustainabilityMethods: [
      'Phân tích vòng đời',
      'Tính toán dấu chân carbon',
      'Đánh giá tác động môi trường',
      'Các chỉ số bền vững',
      'Chứng nhận xanh',
    ],
    researchTools: [
      'Phân tích dữ liệu khí hậu',
      'Bản đồ GIS',
      'Hình ảnh vệ tinh',
      'Trạm thời tiết',
      'Phần mềm thống kê',
    ],
    policyApplications: [
      'Khung chính sách khí hậu',
      'Các hiệp định quốc tế',
      'Kế hoạch thích ứng quốc gia',
      'Thực hiện tại địa phương',
      'Hệ thống giám sát',
    ],
    exercises: [
      {
        title: 'Phân tích Xu hướng Khí hậu Việt Nam',
        description: 'Phân tích xu hướng khí hậu 30 năm tại các thành phố lớn của Việt Nam',
        difficulty: 'Cơ bản',
        materials: ['Bộ dữ liệu khí hậu', 'Phần mềm phân tích', 'Công cụ GIS'],
        procedure: [
          'Tải dữ liệu khí hậu cho TP.HCM, Hà Nội, Đà Nẵng',
          'Phân tích xu hướng nhiệt độ từ 1990-2020',
          'Nghiên cứu thay đổi về kiểu mưa',
          'Kiểm tra tần suất các hiện tượng thời tiết cực đoan',
          'So sánh xu hướng của Việt Nam với các mô hình toàn cầu',
          'Xác định các điểm yếu về khí hậu khu vực',
          'Tạo trực quan hóa xu hướng khí hậu',
          'Phát triển các dự báo tác động khí hậu',
        ],
        expectedResults: 'Phân tích xu hướng khí hậu toàn diện với những hiểu biết cụ thể về Việt Nam',
        solution: 'Hiểu biết dựa trên dữ liệu về tác động của biến đổi khí hậu đối với Việt Nam',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch thích ứng với biến đổi khí hậu của Việt Nam',
      'Quản lý lũ lụt ở Đồng bằng sông Cửu Long',
      'Giám sát xói lở bờ biển ở miền Trung Việt Nam',
      'Thích ứng nông nghiệp ở miền Bắc Việt Nam',
      'Giảm thiểu đảo nhiệt đô thị tại các thành phố lớn',
    ],
    caseStudies: [
      {
        title: 'Dự án Thích ứng Biến đổi Khí hậu Đồng bằng Sông Cửu Long',
        organization: 'Bộ Tài nguyên và Môi trường Việt Nam',
        problem: 'Mực nước biển dâng đe dọa nông nghiệp Đồng bằng sông Cửu Long',
        solution: 'Chiến lược thích ứng khí hậu toàn diện với sự tham gia của cộng đồng',
        impact: 'Bảo vệ 500.000 ha đất nông nghiệp khỏi xâm nhập mặn',
        innovations: ['Thích ứng dựa vào cộng đồng', 'Quản lý nước tổng hợp', 'Nông nghiệp chống chịu với khí hậu'],
      },
    ],
    resources: [
      {
        title: 'Báo cáo Biến đổi Khí hậu Việt Nam',
        url: 'https://monre.gov.vn/Pages/climate-change.aspx',
        type: 'Báo cáo của Chính phủ',
      },
      {
        title: 'Kiến thức cơ bản về Khoa học Khí hậu của IPCC',
        url: 'https://www.ipcc.ch/sr15/',
        type: 'Báo cáo khoa học',
      },
    ],
  },

  {
    id: 'environmental-monitoring-assessment',
    title: 'Giám sát Môi trường và Đánh giá Tác động',
    description:
      'Học các kỹ thuật giám sát môi trường tiên tiến, phương pháp thu thập dữ liệu và phương pháp tiếp cận đánh giá tác động toàn diện cho các hệ sinh thái của Việt Nam.',
    duration: '195 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=em43W_L5EO4', // Environmental monitoring technology
    imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    objectives: [
      'Nắm vững các phương pháp giám sát môi trường',
      'Sử dụng các dụng cụ đo lường tiên tiến',
      'Thực hiện các đánh giá tác động toàn diện',
      'Phân tích dữ liệu môi trường một cách có hệ thống',
      'Thực hiện các quy trình kiểm soát chất lượng',
      'Tạo báo cáo giám sát môi trường',
    ],
    prerequisites: [
      'Kiến thức cơ bản về khoa học môi trường',
      'Hiểu biết về các nguyên tắc đo lường',
      'Kỹ năng phân tích dữ liệu',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-data-analyst'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'chemistry-lab'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'biology-ecosystem'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Giám sát chất lượng không khí',
      'Đánh giá chất lượng nước',
      'Phân tích ô nhiễm đất',
      'Giám sát đa dạng sinh học',
      'Đo lường ô nhiễm tiếng ồn',
    ],
    environmentalSolutions: [
      'Công nghệ kiểm soát ô nhiễm',
      'Chiến lược khắc phục',
      'Kỹ thuật phục hồi',
      'Phương pháp bảo tồn',
      'Thực hành bền vững',
    ],
    sustainabilityMethods: [
      'Hệ thống quản lý môi trường',
      'Tiêu chuẩn ISO 14001',
      'Đánh giá công trình xanh',
      'Nguyên tắc kinh tế tuần hoàn',
      'Chiến lược không rác thải',
    ],
    researchTools: [
      'Cảm biến môi trường',
      'Thiết bị phòng thí nghiệm',
      'Máy ghi dữ liệu',
      'Kỹ thuật lấy mẫu',
      'Phân tích thống kê',
    ],
    policyApplications: [
      'Quy định về môi trường',
      'Giám sát tuân thủ',
      'Yêu cầu cấp phép',
      'Tiêu chuẩn báo cáo',
      'Cơ chế thực thi',
    ],
    exercises: [
      {
        title: 'Đánh giá Chất lượng Không khí TP.HCM',
        description: 'Dự án giám sát chất lượng không khí toàn diện trong môi trường đô thị',
        difficulty: 'Trung bình',
        materials: ['Máy theo dõi chất lượng không khí', 'Ứng dụng thu thập dữ liệu', 'Phần mềm phân tích'],
        procedure: [
          'Lắp đặt các trạm giám sát chất lượng không khí trên khắp TP.HCM',
          'Thu thập các phép đo PM2.5, PM10, NO2, SO2, O3',
          'Giám sát các mô hình ô nhiễm giao thông trong giờ cao điểm',
          'Phân tích sự thay đổi theo mùa về chất lượng không khí',
          'So sánh ô nhiễm khu công nghiệp và khu dân cư',
          'Nghiên cứu mối tương quan với các kiểu thời tiết',
          'Tạo dự báo chỉ số chất lượng không khí',
          'Phát triển các khuyến nghị giảm thiểu ô nhiễm',
        ],
        expectedResults: 'Đánh giá chất lượng không khí toàn diện với các khuyến nghị cải thiện có thể hành động',
        solution: 'Phương pháp tiếp cận dựa trên dữ liệu để quản lý chất lượng không khí đô thị',
      },
    ],
    realWorldApplications: [
      'Giám sát tuân thủ môi trường công nghiệp',
      'Chương trình quản lý chất lượng không khí đô thị',
      'Giám sát cơ sở xử lý nước',
      'Đánh giá tác động thuốc trừ sâu nông nghiệp',
      'Giám sát sức khỏe hệ sinh thái ven biển',
    ],
    caseStudies: [
      {
        title: 'Phục hồi Chất lượng Nước Sông Đồng Nai',
        organization: 'Cơ quan Môi trường tỉnh Đồng Nai',
        problem: 'Ô nhiễm công nghiệp làm suy giảm nghiêm trọng chất lượng nước sông',
        solution: 'Chương trình giám sát và phục hồi toàn diện',
        impact: 'Cải thiện chỉ số chất lượng nước từ kém lên mức chấp nhận được trong 3 năm',
        innovations: [
          'Mạng lưới giám sát thời gian thực',
          'Chương trình tham gia cộng đồng',
          'Kiểm soát ô nhiễm công nghiệp',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Giám sát Môi trường',
        url: 'https://www.epa.gov/environmental-information',
        type: 'Hướng dẫn kỹ thuật',
      },
      {
        title: 'Tiêu chuẩn Môi trường Việt Nam',
        url: 'https://monre.gov.vn/Pages/environmental-standards.aspx',
        type: 'Tài liệu tiêu chuẩn',
      },
    ],
  },

  {
    id: 'renewable-energy-systems',
    title: 'Hệ thống Năng lượng Tái tạo cho Thị trường Việt Nam',
    description:
      'Nắm vững các công nghệ năng lượng tái tạo, thiết kế hệ thống và chiến lược triển khai phù hợp với khí hậu và nhu cầu năng lượng của Việt Nam.',
    duration: '205 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1kUE0BZtTRc', // Renewable energy explained
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu sâu về các công nghệ năng lượng tái tạo',
      'Thiết kế hệ thống điện mặt trời cho điều kiện Việt Nam',
      'Phân tích tiềm năng năng lượng gió ở các vùng ven biển',
      'Lập kế hoạch hệ thống thủy điện cho các vùng núi',
      'Tính toán kinh tế năng lượng tái tạo',
      'Tích hợp hệ thống tái tạo với lưới điện hiện có',
    ],
    prerequisites: [
      'Nguyên tắc cơ bản về vật lý và kỹ thuật',
      'Hiểu biết về hệ thống điện',
      'Quan tâm đến công nghệ bền vững',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'renewable-energy-manager'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ev-charging-network'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Các kiểu bức xạ mặt trời',
      'Đánh giá tài nguyên gió',
      'Tiềm năng thủy điện',
      'Sẵn có sinh khối',
      'Tài nguyên địa nhiệt',
    ],
    environmentalSolutions: [
      'Hệ thống PV mặt trời',
      'Tua bin gió',
      'Thủy điện siêu nhỏ',
      'Năng lượng sinh khối',
      'Lưu trữ năng lượng',
    ],
    sustainabilityMethods: [
      'Phân tích hiệu quả năng lượng',
      'Lập kế hoạch tích hợp lưới điện',
      'Đánh giá vòng đời',
      'Phân tích chi phí-lợi ích',
      'Tối ưu hóa hiệu suất',
    ],
    researchTools: [
      'Máy đo bức xạ mặt trời',
      'Máy theo dõi tốc độ gió',
      'Phần mềm mô hình hóa năng lượng',
      'Công cụ phân tích kinh tế',
      'Hệ thống phân tích lưới điện',
    ],
    policyApplications: [
      'Chính sách năng lượng tái tạo',
      'Biểu giá điện hỗ trợ',
      'Tiêu chuẩn kết nối lưới điện',
      'Giấy phép môi trường',
      'Chương trình khuyến khích',
    ],
    exercises: [
      {
        title: 'Nghiên cứu khả thi trang trại năng lượng mặt trời Việt Nam',
        description: 'Phân tích khả thi hoàn chỉnh cho trang trại năng lượng mặt trời 50MW tại miền Trung Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Dữ liệu tài nguyên mặt trời', 'Phần mềm kỹ thuật', 'Mô hình kinh tế'],
        procedure: [
          'Phân tích dữ liệu bức xạ mặt trời cho tỉnh Ninh Thuận',
          'Thiết kế bố trí và hướng tấm pin mặt trời tối ưu',
          'Tính toán ước tính sản xuất năng lượng',
          'Phân tích các yêu cầu kết nối lưới điện',
          'Ước tính chi phí vốn và vận hành',
          'Đánh giá các lựa chọn tài chính và ưu đãi',
          'Đánh giá tác động môi trường',
          'Tạo báo cáo khả thi toàn diện',
        ],
        expectedResults: 'Nghiên cứu khả thi chuyên nghiệp với phân tích khả năng kinh tế',
        solution: 'Đề xuất dự án năng lượng tái tạo sẵn sàng đầu tư',
      },
    ],
    realWorldApplications: [
      'Lắp đặt điện mặt trời áp mái cho các doanh nghiệp Việt Nam',
      'Trang trại gió ngoài khơi ở Biển Đông',
      'Nhà máy thủy điện nhỏ ở vùng núi phía Bắc',
      'Hệ thống năng lượng sinh khối nông nghiệp',
      'Lưới điện siêu nhỏ tái tạo cho các đảo xa',
    ],
    caseStudies: [
      {
        title: 'Mở rộng Điện mặt trời Ninh Thuận',
        organization: 'Tập đoàn Điện lực Việt Nam (EVN)',
        problem: 'Đáp ứng nhu cầu điện ngày càng tăng bằng năng lượng sạch',
        solution: 'Phát triển trang trại năng lượng mặt trời quy mô lớn với lợi ích cộng đồng',
        impact: 'Lắp đặt 1.500MW công suất năng lượng mặt trời, giảm phát thải CO2',
        innovations: [
          'Công nghệ năng lượng mặt trời nổi',
          'Tích hợp lưới điện thông minh',
          'Chương trình lợi ích cộng đồng',
        ],
      },
    ],
    resources: [
      {
        title: 'Chiến lược Phát triển Năng lượng Tái tạo Việt Nam',
        url: 'https://www.iea.org/reports/vietnam-energy-outlook',
        type: 'Tài liệu chính sách',
      },
      {
        title: 'Công cụ Đánh giá Tài nguyên Mặt trời',
        url: 'https://globalsolaratlas.info/map',
        type: 'Công cụ đánh giá',
      },
    ],
  },

  {
    id: 'sustainable-agriculture-climate',
    title: 'Nông nghiệp Bền vững trong Bối cảnh Biến đổi Khí hậu',
    description:
      'Học các kỹ thuật nông nghiệp thông minh với khí hậu, thực hành canh tác bền vững và chiến lược thích ứng cho các hệ thống nông nghiệp của Việt Nam.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=X4DZLtdSeCM', // What is sustainable agriculture?
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu tác động của khí hậu đối với nông nghiệp Việt Nam',
      'Nắm vững các kỹ thuật canh tác bền vững',
      'Học các công nghệ nông nghiệp chính xác',
      'Thực hiện các hệ thống tưới tiêu tiết kiệm nước',
      'Hiểu về sức khỏe đất và cô lập carbon',
      'Phát triển các chiến lược cây trồng chống chịu với khí hậu',
    ],
    prerequisites: [
      'Kiến thức nông nghiệp cơ bản',
      'Hiểu biết về sinh học thực vật',
      'Quen thuộc với các hệ thống canh tác của Việt Nam',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'smart-farming-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'aquaculture-iot-manager'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'drone-crop-monitoring'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Tác động của khí hậu đối với cây trồng',
      'Quản lý hạn hán',
      'Thích ứng với lũ lụt',
      'Căng thẳng nhiệt độ',
      'Biến đổi theo mùa',
    ],
    environmentalSolutions: [
      'Canh tác hữu cơ',
      'Quản lý dịch hại tổng hợp',
      'Nông lâm kết hợp',
      'Trồng cây che phủ',
      'Hệ thống ủ phân',
    ],
    sustainabilityMethods: [
      'Nông nghiệp chính xác',
      'Bảo tồn nước',
      'Quản lý sức khỏe đất',
      'Chu trình dinh dưỡng',
      'Tăng cường đa dạng sinh học',
    ],
    researchTools: [
      'Thiết bị kiểm tra đất',
      'Giám sát thời tiết',
      'Phần mềm mô hình hóa cây trồng',
      'Công nghệ không người lái',
      'Hình ảnh vệ tinh',
    ],
    policyApplications: [
      'Trợ cấp nông nghiệp',
      'Tuân thủ môi trường',
      'Chứng nhận hữu cơ',
      'Quyền sử dụng nước',
      'Quy hoạch sử dụng đất',
    ],
    exercises: [
      {
        title: 'Chiến lược Thích ứng Lúa gạo Đồng bằng Sông Cửu Long',
        description: 'Phát triển kế hoạch thích ứng khí hậu cho canh tác lúa ở Đồng bằng sông Cửu Long',
        difficulty: 'Trung bình',
        materials: ['Dữ liệu khí hậu', 'Mô hình nông nghiệp', 'Công cụ phân tích kinh tế'],
        procedure: [
          'Phân tích xu hướng khí hậu lịch sử ảnh hưởng đến sản xuất lúa',
          'Nghiên cứu tác động của xâm nhập mặn đối với ruộng lúa',
          'Nghiên cứu các giống lúa chống chịu với khí hậu',
          'Thiết kế hệ thống tưới tiêu và thoát nước cải tiến',
          'Tính toán cải thiện hiệu quả sử dụng nước',
          'Phát triển mô hình hệ thống canh tác tổng hợp',
          'Phân tích khả năng kinh tế của các biện pháp thích ứng',
          'Tạo hướng dẫn thực hiện cho nông dân',
        ],
        expectedResults: 'Chiến lược thích ứng toàn diện với kế hoạch thực hiện thân thiện với nông dân',
        solution: 'Hệ thống nông nghiệp chống chịu với khí hậu bảo tồn sinh kế',
      },
    ],
    realWorldApplications: [
      'Các giống lúa chống chịu với khí hậu ở Đồng bằng sông Cửu Long',
      'Canh tác cà phê chịu hạn ở Tây Nguyên',
      'Nuôi tôm bền vững ở các vùng ven biển',
      'Hệ thống canh tác thẳng đứng đô thị',
      'Hợp tác xã sản xuất rau hữu cơ',
    ],
    caseStudies: [
      {
        title: 'Nuôi trồng Thủy sản Thông minh với Khí hậu Cà Mau',
        organization: 'Sở Nông nghiệp tỉnh Cà Mau',
        problem: 'Biến đổi khí hậu đe dọa nuôi tôm truyền thống',
        solution: 'Hệ thống canh tác tôm-rừng ngập mặn tổng hợp',
        impact: 'Tăng thu nhập của nông dân lên 40% đồng thời bảo vệ hệ sinh thái ven biển',
        innovations: ['Thích ứng dựa vào hệ sinh thái', 'Quản lý dựa vào cộng đồng', 'Tích hợp chuỗi giá trị'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Nông nghiệp Thông minh với Khí hậu',
        url: 'https://www.fao.org/climate-smart-agriculture/en/',
        type: 'Hướng dẫn kỹ thuật',
      },
      {
        title: 'Kế hoạch Thích ứng Nông nghiệp Việt Nam',
        url: 'https://mard.gov.vn/Pages/climate-agriculture.aspx',
        type: 'Tài liệu chính sách',
      },
    ],
  },

  {
    id: 'biodiversity-ecosystem-conservation',
    title: 'Bảo tồn Đa dạng Sinh học và Quản lý Hệ sinh thái',
    description:
      'Nắm vững các phương pháp đánh giá đa dạng sinh học, chiến lược bảo tồn hệ sinh thái và phương pháp tiếp cận quản lý bền vững cho di sản thiên nhiên Việt Nam.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=GK_vRtHJZu4', // Biodiversity
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các phương pháp đánh giá đa dạng sinh học',
      'Nắm vững quy hoạch bảo tồn hệ sinh thái',
      'Học các chiến lược bảo vệ loài',
      'Thực hiện các kỹ thuật phục hồi môi trường sống',
      'Hiểu về định giá dịch vụ hệ sinh thái',
      'Phát triển các chương trình bảo tồn dựa vào cộng đồng',
    ],
    prerequisites: [
      'Kiến thức nền về sinh học và sinh thái học',
      'Hiểu biết về các nguyên tắc bảo tồn',
      'Ưu tiên kinh nghiệm nghiên cứu thực địa',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'biology-ecosystem'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnamese-heritage-explorer'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Tương tác khí hậu-đa dạng sinh học',
      'Sự thay đổi môi trường sống',
      'Di cư của các loài',
      'Rủi ro tuyệt chủng',
      'Cơ chế thích ứng',
    ],
    environmentalSolutions: [
      'Quản lý khu bảo tồn',
      'Chương trình phục hồi loài',
      'Phục hồi môi trường sống',
      'Hành lang động vật hoang dã',
      'Bảo tồn ngoại vi',
    ],
    sustainabilityMethods: [
      'Đánh giá dịch vụ hệ sinh thái',
      'Quy hoạch bảo tồn',
      'Gắn kết cộng đồng',
      'Thực hành sử dụng bền vững',
      'Giao thức giám sát',
    ],
    researchTools: ['Phương pháp khảo sát loài', 'Bẫy ảnh', 'Mã vạch DNA', 'Phân tích GIS', 'Mô hình hóa quần thể'],
    policyApplications: [
      'Chiến lược đa dạng sinh học',
      'Luật pháp khu bảo tồn',
      'Thực thi CITES',
      'Đánh giá tác động môi trường',
      'Thỏa thuận bảo tồn',
    ],
    exercises: [
      {
        title: 'Đánh giá Đa dạng Sinh học Vườn Quốc gia Cát Tiên',
        description: 'Khảo sát đa dạng sinh học toàn diện và kế hoạch bảo tồn',
        difficulty: 'Nâng cao',
        materials: ['Thiết bị khảo sát thực địa', 'Hướng dẫn nhận dạng loài', 'Phần mềm GIS'],
        procedure: [
          'Thực hiện các cuộc khảo sát loài có hệ thống trên các môi trường sống khác nhau',
          'Sử dụng bẫy ảnh để giám sát các quần thể động vật có vú lớn',
          'Ghi lại sự đa dạng của các loài thực vật trong các lô rừng',
          'Đánh giá các chỉ số sức khỏe hệ sinh thái',
          'Lập bản đồ các khu vực môi trường sống quan trọng bằng GIS',
          'Phân tích các mô hình xung đột giữa người và động vật hoang dã',
          'Phát triển các ưu tiên bảo tồn loài',
          'Tạo kế hoạch quản lý bảo tồn tổng hợp',
        ],
        expectedResults: 'Đánh giá đa dạng sinh học khoa học với các khuyến nghị bảo tồn dựa trên bằng chứng',
        solution: 'Chiến lược quản lý hệ sinh thái toàn diện bảo tồn đa dạng sinh học Việt Nam',
      },
    ],
    realWorldApplications: [
      'Quản lý vườn quốc gia Việt Nam',
      'Quy hoạch khu bảo tồn biển',
      'Bảo tồn đa dạng sinh học đô thị',
      'Chương trình phục hồi các loài có nguy cơ tuyệt chủng',
      'Các dự án phục hồi hệ sinh thái',
    ],
    caseStudies: [
      {
        title: 'Thành công của Khu bảo tồn biển Côn Đảo',
        organization: 'Tổng cục Lâm nghiệp Việt Nam',
        problem: 'Quần thể rùa biển suy giảm và rạn san hô bị suy thoái',
        solution: 'Bảo tồn biển tổng hợp với quản lý dựa vào cộng đồng',
        impact: 'Số lượng rùa biển làm tổ tăng 300%, ghi nhận sự phục hồi của độ che phủ san hô',
        innovations: ['Chương trình kiểm lâm cộng đồng', 'Tích hợp du lịch bền vững', 'Mạng lưới giám sát khoa học'],
      },
    ],
    resources: [
      {
        title: 'Chiến lược Đa dạng Sinh học Việt Nam',
        url: 'https://www.cbd.int/countries/profile/?country=vn',
        type: 'Chiến lược quốc gia',
      },
      {
        title: 'Phương pháp Sinh học Bảo tồn',
        url: 'https://conbio.onlinelibrary.wiley.com/journal/15231739',
        type: 'Tạp chí khoa học',
      },
    ],
  },

  {
    id: 'environmental-policy-governance',
    title: 'Chính sách Môi trường và Khung Quản trị',
    description:
      'Hiểu về phát triển chính sách môi trường, cấu trúc quản trị và cơ chế thực thi trong hệ thống hành chính Việt Nam.',
    duration: '185 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=6xkaqTyB5D8', // Environmental Policy
    imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các khung chính sách môi trường',
      'Nắm vững phân tích cơ chế quản trị',
      'Học các quy trình phát triển chính sách',
      'Hiểu luật môi trường quốc tế',
      'Phân tích các thách thức thực thi chính sách',
      'Phát triển các khuyến nghị chính sách',
    ],
    prerequisites: [
      'Hiểu biết về hệ thống chính phủ',
      'Kiến thức về các vấn đề môi trường',
      'Quan tâm đến phân tích chính sách',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Khung chính sách khí hậu',
      'Các hiệp định quốc tế',
      'Kế hoạch hành động quốc gia',
      'Thực hiện tại địa phương',
      'Tích hợp chính sách',
    ],
    environmentalSolutions: [
      'Khung pháp lý',
      'Công cụ kinh tế',
      'Các biện pháp tự nguyện',
      'Tiêu chuẩn công nghệ',
      'Hệ thống thông tin',
    ],
    sustainabilityMethods: [
      'Phân tích chính sách',
      'Gắn kết các bên liên quan',
      'Đánh giá tác động',
      'Hệ thống giám sát',
      'Quản lý thích ứng',
    ],
    researchTools: [
      'Khung phân tích chính sách',
      'Lập bản đồ các bên liên quan',
      'Công cụ đánh giá tác động',
      'Phương pháp đánh giá',
      'Kỹ thuật khảo sát',
    ],
    policyApplications: [
      'Luật môi trường',
      'Tuân thủ quy định',
      'Thực thi chính sách',
      'Hệ thống quản trị',
      'Hợp tác quốc tế',
    ],
    exercises: [
      {
        title: 'Phân tích Chính sách Rác thải Nhựa của Việt Nam',
        description: 'Phân tích toàn diện chính sách quản lý rác thải nhựa của Việt Nam',
        difficulty: 'Nâng cao',
        materials: ['Tài liệu chính sách', 'Khảo sát các bên liên quan', 'Khung phân tích'],
        procedure: [
          'Xem xét Kế hoạch hành động quốc gia của Việt Nam về rác thải nhựa trên biển',
          'Phân tích khung pháp lý hiện hành về rác thải nhựa',
          'Khảo sát quan điểm của các bên liên quan (chính phủ, ngành công nghiệp, NGO)',
          'Đánh giá các thách thức thực thi chính sách',
          'So sánh với các thông lệ quốc tế tốt nhất',
          'Xác định các lỗ hổng chính sách và cơ hội cải thiện',
          'Phát triển khung khuyến nghị chính sách',
          'Tạo lộ trình thực hiện',
        ],
        expectedResults: 'Phân tích chính sách toàn diện với các khuyến nghị cải thiện có thể hành động',
        solution: 'Khung chính sách dựa trên bằng chứng tăng cường bảo vệ môi trường',
      },
    ],
    realWorldApplications: [
      'Phát triển chính sách đánh giá tác động môi trường',
      'Lập kế hoạch thích ứng với biến đổi khí hậu',
      'Thiết kế quy định kiểm soát ô nhiễm',
      'Chính sách quản lý khu bảo tồn',
      'Thực hiện các thỏa thuận môi trường quốc tế',
    ],
    caseStudies: [
      {
        title: 'Thực hiện Chiến lược Tăng trưởng Xanh của Việt Nam',
        organization: 'Bộ Tài nguyên và Môi trường',
        problem: 'Cân bằng giữa phát triển kinh tế và bảo vệ môi trường',
        solution: 'Khung chính sách tăng trưởng xanh tổng hợp với sự phối hợp đa ngành',
        impact: 'Giảm suy thoái môi trường trong khi vẫn duy trì tăng trưởng GDP 6%+',
        innovations: ['Phối hợp liên bộ', 'Ưu đãi công nghệ xanh', 'Cơ chế tham gia của cộng đồng'],
      },
    ],
    resources: [
      {
        title: 'Luật Bảo vệ Môi trường Việt Nam',
        url: 'https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/',
        type: 'Văn bản pháp luật',
      },
      {
        title: 'Hướng dẫn Phân tích Chính sách Môi trường',
        url: 'https://www.unep.org/resources/toolkits-manuals',
        type: 'Hướng dẫn chính sách',
      },
    ],
  },

  {
    id: 'green-technology-innovation',
    title: 'Đổi mới Công nghệ Xanh và Phát triển Bền vững',
    description:
      'Nắm vững phát triển công nghệ xanh, quy trình đổi mới và thiết kế giải pháp bền vững để giải quyết các thách thức môi trường của Việt Nam.',
    duration: '215 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=TCtIRAFyTIY', // Green technology
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các quy trình đổi mới công nghệ xanh',
      'Nắm vững thiết kế giải pháp bền vững',
      'Học cách đánh giá công nghệ sạch',
      'Phát triển các mô hình kinh doanh xanh',
      'Hiểu các cơ chế chuyển giao công nghệ',
      'Tạo ra các chiến lược thực hiện đổi mới',
    ],
    prerequisites: [
      'Kiến thức nền về kỹ thuật hoặc công nghệ',
      'Hiểu biết về các quy trình đổi mới',
      'Kiến thức về mô hình kinh doanh là một lợi thế',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'renewable-energy-manager'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'nano-lab-explorer'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Giải pháp công nghệ khí hậu',
      'Công nghệ giảm phát thải',
      'Công nghệ thích ứng',
      'Hệ thống thu giữ carbon',
      'Đổi mới năng lượng sạch',
    ],
    environmentalSolutions: [
      'Công nghệ kiểm soát ô nhiễm',
      'Hệ thống hiệu quả tài nguyên',
      'Giải pháp kinh tế tuần hoàn',
      'Sản xuất xanh',
      'Vật liệu bền vững',
    ],
    sustainabilityMethods: [
      'Tư duy vòng đời',
      'Đánh giá công nghệ',
      'Quản lý đổi mới',
      'Các chỉ số bền vững',
      'Đo lường tác động',
    ],
    researchTools: [
      'Công cụ đánh giá công nghệ',
      'Khung đổi mới',
      'Phát triển nguyên mẫu',
      'Thiết bị thử nghiệm',
      'Phân tích thị trường',
    ],
    policyApplications: [
      'Chính sách đổi mới',
      'Ưu đãi công nghệ',
      'Tài trợ nghiên cứu',
      'Sở hữu trí tuệ',
      'Chuyển giao công nghệ',
    ],
    exercises: [
      {
        title: 'Dự án Đổi mới Xử lý Nước thải Việt Nam',
        description: 'Thiết kế giải pháp xử lý nước thải công nghiệp sáng tạo',
        difficulty: 'Nâng cao',
        materials: ['Phần mềm thiết kế', 'Cơ sở dữ liệu công nghệ', 'Mô hình kinh tế'],
        procedure: [
          'Phân tích các thách thức xử lý nước thải hiện tại trong các ngành công nghiệp Việt Nam',
          'Nghiên cứu các công nghệ xử lý mới nổi trên toàn cầu',
          'Thiết kế ý tưởng hệ thống xử lý sáng tạo',
          'Thực hiện phân tích khả thi bao gồm chi phí',
          'Phát triển kế hoạch thử nghiệm nguyên mẫu',
          'Phân tích tiềm năng thị trường trong bối cảnh Việt Nam',
          'Tạo chiến lược sở hữu trí tuệ',
          'Phát triển lộ trình thương mại hóa',
        ],
        expectedResults: 'Giải pháp công nghệ xanh sáng tạo với tiềm năng thương mại hóa',
        solution: 'Công nghệ môi trường sẵn sàng cho thị trường giải quyết nhu cầu của Việt Nam',
      },
    ],
    realWorldApplications: [
      'Đổi mới xử lý nước thải công nghiệp',
      'Phát triển công nghệ kiểm soát ô nhiễm không khí',
      'Giải pháp bao bì bền vững',
      'Tích hợp công nghệ xây dựng xanh',
      'Đổi mới hệ thống năng lượng tái tạo',
    ],
    caseStudies: [
      {
        title: 'Đổi mới Khu công nghiệp Sinh thái Bình Dương',
        organization: 'Phát triển Công nghiệp tỉnh Bình Dương',
        problem: 'Tác động môi trường cao từ các hoạt động công nghiệp tập trung',
        solution: 'Đổi mới công nghiệp sinh thái tích hợp với các hệ thống vòng kín',
        impact: 'Giảm 60% chất thải và 40% lượng nước tiêu thụ trên toàn khu',
        innovations: ['Cộng sinh công nghiệp', 'Mô hình kinh tế tuần hoàn', 'Cụm công nghệ xanh'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Đổi mới Công nghệ Xanh',
        url: 'https://www.unido.org/green-technology',
        type: 'Hướng dẫn đổi mới',
      },
      {
        title: 'Cơ sở dữ liệu Công nghệ Xanh Việt Nam',
        url: 'https://most.gov.vn/vn/Pages/green-technology.aspx',
        type: 'Cơ sở dữ liệu công nghệ',
      },
    ],
  },

  {
    id: 'environmental-education-communication',
    title: 'Giáo dục Môi trường và Truyền thông Khoa học',
    description:
      'Nắm vững các chiến lược giáo dục môi trường, kỹ thuật truyền thông khoa học và phương pháp tiếp cận cộng đồng để thúc đẩy nhận thức về môi trường trong xã hội Việt Nam.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=SN5-DnOHQmE', // Science communication
    imageUrl: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
    objectives: [
      'Nắm vững các nguyên tắc giáo dục môi trường',
      'Phát triển kỹ năng truyền thông khoa học hiệu quả',
      'Tạo nội dung môi trường hấp dẫn',
      'Thiết kế các chiến dịch nâng cao nhận thức cộng đồng',
      'Hiểu về học tập của người lớn trong bối cảnh môi trường',
      'Xây dựng các chiến lược gắn kết cộng đồng',
    ],
    prerequisites: [
      'Kiến thức khoa học môi trường',
      'Kỹ năng giao tiếp',
      'Quan tâm đến giáo dục và tiếp cận cộng đồng',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'content-creator-studio'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'history-timeline'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    climateTopics: [
      'Truyền thông khí hậu',
      'Hiểu biết của công chúng',
      'Thay đổi hành vi',
      'Tương tác với truyền thông',
      'Học tập xã hội',
    ],
    environmentalSolutions: [
      'Chương trình giáo dục',
      'Chiến dịch nâng cao nhận thức',
      'Sáng kiến cộng đồng',
      'Chiến lược truyền thông',
      'Tiếp cận kỹ thuật số',
    ],
    sustainabilityMethods: [
      'Thiết kế giáo dục',
      'Chiến lược gắn kết',
      'Đo lường tác động',
      'Đánh giá chương trình',
      'Cải tiến liên tục',
    ],
    researchTools: [
      'Phương pháp khảo sát',
      'Nhóm tập trung',
      'Công cụ tạo nội dung',
      'Phân tích mạng xã hội',
      'Khung đánh giá',
    ],
    policyApplications: [
      'Chính sách giáo dục môi trường',
      'Yêu cầu nâng cao nhận thức cộng đồng',
      'Tham vấn cộng đồng',
      'Gắn kết các bên liên quan',
      'Tiêu chuẩn truyền thông',
    ],
    exercises: [
      {
        title: 'Chiến dịch Nâng cao Nhận thức Môi trường TP.HCM',
        description: 'Thiết kế chiến dịch nâng cao nhận thức cộng đồng toàn diện về ô nhiễm không khí',
        difficulty: 'Trung bình',
        materials: ['Công cụ khảo sát', 'Phần mềm tạo nội dung', 'Nền tảng phân tích'],
        procedure: [
          'Thực hiện khảo sát cơ bản về nhận thức môi trường của cộng đồng',
          'Xác định các phân khúc đối tượng mục tiêu và sở thích giao tiếp',
          'Phát triển các thông điệp chính về tác động của ô nhiễm không khí',
          'Tạo tài liệu truyền thông đa kênh',
          'Thiết kế chiến lược tương tác trên mạng xã hội',
          'Lên kế hoạch chuỗi sự kiện cộng đồng',
          'Thực hiện chiến dịch và theo dõi các chỉ số tương tác',
          'Đánh giá hiệu quả và tác động của chiến dịch',
        ],
        expectedResults:
          'Chiến dịch truyền thông môi trường hiệu quả với những cải thiện nhận thức có thể đo lường được',
        solution: 'Chiến lược gắn kết cộng đồng toàn diện thúc đẩy hành động vì môi trường',
      },
    ],
    realWorldApplications: [
      'Chương trình giáo dục môi trường trong trường học',
      'Đào tạo về tính bền vững của doanh nghiệp',
      'Giáo dục thích ứng với khí hậu trong cộng đồng',
      'Đào tạo báo cáo môi trường cho truyền thông',
      'Chiến dịch nâng cao nhận thức của chính phủ',
    ],
    caseStudies: [
      {
        title: 'Chiến dịch Bãi biển Không rác thải nhựa Đà Nẵng',
        organization: 'Cơ quan Bảo vệ Môi trường Đà Nẵng',
        problem: 'Mức độ ô nhiễm nhựa cao trên các bãi biển du lịch nổi tiếng',
        solution: 'Chiến dịch giáo dục đa bên với sự tham gia của khách du lịch và người dân địa phương',
        impact: 'Giảm 70% rác thải nhựa trên bãi biển trong các khu vực chiến dịch',
        innovations: ['Đối tác Du lịch-Địa phương', 'Giáo dục được trò chơi hóa', 'Tích hợp mạng xã hội'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Giáo dục Môi trường',
        url: 'https://www.epa.gov/education',
        type: 'Hướng dẫn giáo dục',
      },
      {
        title: 'Sổ tay Truyền thông Khoa học',
        url: 'https://www.sciencecommunication.org/',
        type: 'Hướng dẫn truyền thông',
      },
    ],
  },

  // Legacy lessons for compatibility
  {
    id: 'climate-change-environmental-monitoring',
    title: 'Khoa học Biến đổi Khí hậu & Giám sát Môi trường',
    description:
      'Hiểu khoa học biến đổi khí hậu, kỹ thuật giám sát môi trường và phân tích dữ liệu cho nghiên cứu môi trường.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=EtW2rrLHs08', // Climate Change Explained
    imageUrl: '/images/lessons/climate-monitoring.jpg',
    objectives: [
      'Hiểu các cơ chế và tác động của biến đổi khí hậu',
      'Nắm vững các kỹ thuật giám sát môi trường',
      'Phân tích dữ liệu khí hậu hiệu quả',
      'Thực hiện các quy trình đánh giá môi trường',
      'Phát triển các chiến lược thích ứng với khí hậu',
    ],
    prerequisites: [
      'Kiến thức khoa học cơ bản (hóa học, vật lý)',
      'Hiểu biết về phân tích dữ liệu',
      'Nhận thức về môi trường',
      'Kiến thức về phương pháp nghiên cứu',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-data-analyst'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-modeling'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    researchMethods: [
      'Kỹ thuật lấy mẫu thực địa',
      'Ứng dụng viễn thám',
      'Quy trình phân tích trong phòng thí nghiệm',
      'Phân tích dữ liệu thống kê',
      'Bản đồ GIS và phân tích không gian',
    ],
    environmentalFactors: [
      'Nồng độ khí nhà kính trong khí quyển',
      'Các kiểu nhiệt độ và lượng mưa',
      'Thay đổi mực nước biển',
      'Các chỉ số đa dạng sinh học',
      'Mức độ ô nhiễm (không khí, nước, đất)',
    ],
    monitoringTechnologies: [
      'Hệ thống viễn thám vệ tinh',
      'Trạm thời tiết tự động',
      'Cảm biến chất lượng nước',
      'Máy theo dõi ô nhiễm không khí',
      'Thiết bị theo dõi đa dạng sinh học',
    ],
    solutionApproaches: [
      'Thực hiện năng lượng tái tạo',
      'Công nghệ thu giữ carbon',
      'Phương pháp phục hồi hệ sinh thái',
      'Thực hành nông nghiệp bền vững',
      'Nguyên tắc kinh tế tuần hoàn',
    ],
    policyFrameworks: [
      'Các hiệp định khí hậu quốc tế',
      'Quy định môi trường quốc gia',
      'Chính sách bền vững địa phương',
      'Tiêu chuẩn môi trường của doanh nghiệp',
      'Chương trình bảo tồn cộng đồng',
    ],
    exercises: [
      {
        title: 'Đánh giá Tác động Khí hậu Việt Nam',
        description: 'Thực hiện đánh giá tác động khí hậu toàn diện cho vùng ven biển Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Dữ liệu khí hậu từ các trạm khí tượng Việt Nam',
          'Công cụ phân tích hình ảnh vệ tinh',
          'Phần mềm GIS để lập bản đồ',
          'Các gói phân tích thống kê',
        ],
        procedure: [
          'Thu thập dữ liệu khí hậu dài hạn cho vùng mục tiêu',
          'Phân tích xu hướng nhiệt độ và lượng mưa',
          'Đánh giá tác động của mực nước biển dâng đối với các vùng ven biển',
          'Đánh giá tần suất các hiện tượng thời tiết cực đoan',
          'Lập bản đồ các hệ sinh thái và cộng đồng dễ bị tổn thương',
          'Mô hình hóa các kịch bản khí hậu trong tương lai',
          'Đánh giá tác động kinh tế và xã hội',
          'Phát triển các khuyến nghị thích ứng',
          'Trình bày kết quả cho các bên liên quan',
          'Tạo kế hoạch thực hiện có thể hành động',
        ],
        expectedResults: 'Đánh giá khí hậu toàn diện với các chiến lược thích ứng có thể hành động',
        solution: 'Phương pháp tiếp cận dựa trên khoa học để lập kế hoạch chống chịu với khí hậu',
      },
      {
        title: 'Nghiên cứu Môi trường Đồng bằng Sông Cửu Long',
        description: 'Nghiên cứu những thay đổi môi trường ở Đồng bằng sông Cửu Long bằng nhiều phương pháp giám sát',
        difficulty: 'Nâng cao',
        materials: [
          'Thiết bị kiểm tra chất lượng nước',
          'Công cụ lấy mẫu đất',
          'Quy trình khảo sát đa dạng sinh học',
          'Truy cập dữ liệu viễn thám',
        ],
        procedure: [
          'Thiết kế quy trình giám sát toàn diện',
          'Thực hiện các chiến dịch lấy mẫu thực địa',
          'Phân tích các thông số chất lượng nước',
          'Đánh giá các chỉ số sức khỏe của đất',
          'Khảo sát những thay đổi về đa dạng sinh học',
          'Tích hợp phân tích dữ liệu vệ tinh',
          'Xác định các tác nhân gây căng thẳng môi trường',
          'Tương quan các hoạt động của con người với những thay đổi môi trường',
          'Phát triển các khuyến nghị bảo tồn',
          'Thu hút cộng đồng địa phương vào các giải pháp',
        ],
        expectedResults: 'Đánh giá sức khỏe môi trường với kế hoạch hành động bảo tồn',
        solution: 'Phương pháp giám sát tích hợp để quản lý hệ sinh thái',
      },
    ],
    realWorldApplications: [
      'Phát triển chính sách môi trường của chính phủ',
      'Báo cáo bền vững của doanh nghiệp',
      'Lập kế hoạch dự án bảo tồn của NGO',
      'Chiến lược thích ứng nông nghiệp',
      'Lập kế hoạch chống chịu với khí hậu đô thị',
    ],
    caseStudies: [
      {
        title: 'Quản lý Lũ lụt TP.HCM',
        organization: 'Sở Tài nguyên và Môi trường TP.HCM',
        problem: 'Tần suất và mức độ nghiêm trọng của lũ lụt ngày càng tăng do biến đổi khí hậu',
        solution: 'Hệ thống giám sát tích hợp với khả năng cảnh báo sớm',
        impact: 'Thiệt hại do lũ lụt giảm 40%, hiệu quả sơ tán cải thiện 200%',
        innovations: [
          'Mạng lưới giám sát mực nước thời gian thực',
          'Mô hình dự báo lũ lụt được hỗ trợ bởi AI',
          'Hệ thống cảnh báo sớm dựa vào cộng đồng',
        ],
      },
      {
        title: 'Phục hồi Rừng ngập mặn ven biển Việt Nam',
        organization: 'Tổng cục Kiểm lâm Việt Nam',
        problem: 'Mất rừng ngập mặn đe dọa các cộng đồng ven biển',
        solution: 'Chương trình phục hồi dựa trên khoa học với sự tham gia của cộng đồng',
        impact: 'Phục hồi 50.000 ha, cải thiện đáng kể khả năng chống bão',
        innovations: [
          'Quy trình bảo tồn đa dạng di truyền',
          'Quản lý rừng dựa vào cộng đồng',
          'Tích hợp định giá dịch vụ hệ sinh thái',
        ],
      },
    ],
    resources: [
      {
        title: 'Báo cáo Biến đổi Khí hậu của IPCC',
        url: 'https://www.ipcc.ch/reports',
        type: 'Báo cáo khoa học',
      },
      {
        title: 'Tài nguyên Biến đổi Khí hậu của NASA',
        url: 'https://climate.nasa.gov',
        type: 'Tài nguyên giáo dục',
      },
      {
        title: 'Cổng Dữ liệu Khí hậu Việt Nam',
        url: 'http://www.imh.ac.vn',
        type: 'Kho dữ liệu',
      },
    ],
  },
  {
    id: 'environmental-policy-sustainable-development',
    title: 'Chính sách Môi trường & Phát triển Bền vững',
    description:
      'Hiểu các khung chính sách môi trường và các nguyên tắc phát triển bền vững để quản trị môi trường hiệu quả.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=iSItxQ8Wm1Q',
    imageUrl: 'https://i.ytimg.com/vi/iSItxQ8Wm1Q/hqdefault.jpg',
    objectives: [
      'Hiểu các quy trình phát triển chính sách môi trường',
      'Phân tích các khung phát triển bền vững',
      'Đánh giá hiệu quả của chính sách',
      'Phát triển các chiến lược gắn kết các bên liên quan',
      'Thực hiện các giải pháp quản trị môi trường',
    ],
    prerequisites: [
      'Hiểu biết về hệ thống quản trị',
      'Kiến thức khoa học môi trường',
      'Kinh nghiệm phân tích chính sách',
      'Kỹ năng quản lý các bên liên quan',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'renewable-energy-manager'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    researchMethods: [
      'Đánh giá tác động chính sách',
      'Kỹ thuật phân tích các bên liên quan',
      'Phân tích chi phí-lợi ích',
      'Đánh giá tác động môi trường',
      'Phương pháp nghiên cứu có sự tham gia',
    ],
    environmentalFactors: [
      'Yêu cầu tuân thủ quy định',
      'Áp lực phát triển kinh tế',
      'Cân nhắc về công bằng xã hội',
      'Hạn chế về tính khả thi của công nghệ',
      'Nhu cầu hợp tác quốc tế',
    ],
    monitoringTechnologies: [
      'Hệ thống theo dõi tuân thủ chính sách',
      'Cơ sở dữ liệu chỉ số môi trường',
      'Nền tảng phản hồi của các bên liên quan',
      'Công cụ đo lường tác động kinh tế',
      'Hệ thống giám sát tiến bộ xã hội',
    ],
    solutionApproaches: [
      'Phát triển chính sách tích hợp',
      'Hợp tác đa bên',
      'Chiến lược quản lý thích ứng',
      'Cơ chế dựa trên khuyến khích',
      'Chương trình chuyển giao công nghệ',
    ],
    policyFrameworks: [
      'Mục tiêu Phát triển Bền vững của LHQ',
      'Thực hiện Hiệp định Khí hậu Paris',
      'Hợp tác môi trường ASEAN',
      'Luật môi trường Việt Nam',
      'Pháp lệnh bền vững địa phương',
    ],
    exercises: [
      {
        title: 'Phân tích Chính sách Kinh tế Xanh Việt Nam',
        description: 'Phân tích hiệu quả của các chính sách kinh tế xanh của Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Tài liệu chính sách môi trường Việt Nam',
          'Dữ liệu tác động kinh tế',
          'Quy trình phỏng vấn các bên liên quan chính',
          'Khung phân tích chính sách',
        ],
        procedure: [
          'Xem xét các chính sách kinh tế xanh hiện có',
          'Phân tích các thách thức thực thi chính sách',
          'Đánh giá kết quả kinh tế và môi trường',
          'Phỏng vấn các bên liên quan chính',
          'Xác định các lỗ hổng và cơ hội chính sách',
          'So sánh với các thông lệ quốc tế tốt nhất',
          'Phát triển các khuyến nghị cải thiện chính sách',
          'Tạo chiến lược gắn kết các bên liên quan',
          'Thiết kế lộ trình thực hiện',
          'Trình bày kết quả cho các nhà hoạch định chính sách',
        ],
        expectedResults: 'Báo cáo phân tích chính sách với các khuyến nghị cải thiện có thể hành động',
        solution: 'Phương pháp tiếp cận phát triển chính sách dựa trên bằng chứng',
      },
    ],
    realWorldApplications: [
      'Quy hoạch môi trường của chính phủ',
      'Chiến lược bền vững của doanh nghiệp',
      'Chiến dịch vận động của NGO',
      'Các dự án phát triển quốc tế',
      'Sáng kiến môi trường cộng đồng',
    ],
    caseStudies: [
      {
        title: 'Chính sách Giảm thiểu Rác thải Nhựa Việt Nam',
        organization: 'Bộ Tài nguyên và Môi trường Việt Nam',
        problem: 'Ô nhiễm nhựa ngày càng tăng đe dọa các hệ sinh thái biển',
        solution: 'Chính sách giảm thiểu nhựa toàn diện với sự tham gia của các bên liên quan',
        impact: 'Rác thải nhựa giảm 35%, tỷ lệ tái chế tăng 150%',
        innovations: [
          'Các chương trình mở rộng trách nhiệm của nhà sản xuất',
          'Chiến dịch thay đổi hành vi người tiêu dùng',
          'Ưu đãi phát triển vật liệu thay thế',
        ],
      },
    ],
    resources: [
      {
        title: 'Chương trình Môi trường Liên Hợp Quốc',
        url: 'https://www.unep.org',
        type: 'Tài nguyên chính sách',
      },
      {
        title: 'Luật Bảo vệ Môi trường Việt Nam',
        url: 'http://www.monre.gov.vn',
        type: 'Khung pháp lý',
      },
    ],
  },
  {
    id: 'ecosystem-restoration-biodiversity-conservation',
    title: 'Phục hồi Hệ sinh thái & Bảo tồn Đa dạng Sinh học',
    description:
      'Nắm vững các kỹ thuật phục hồi hệ sinh thái và chiến lược bảo tồn đa dạng sinh học để phục hồi môi trường.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=9NRMbDel75A',
    imageUrl: 'https://i.ytimg.com/vi/9NRMbDel75A/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc phục hồi hệ sinh thái',
      'Thực hiện các chiến lược bảo tồn đa dạng sinh học',
      'Thiết kế các dự án phục hồi môi trường sống',
      'Giám sát các chỉ số sức khỏe hệ sinh thái',
      'Thu hút cộng đồng vào các nỗ lực bảo tồn',
    ],
    prerequisites: [
      'Kiến thức về sinh thái và sinh học',
      'Kỹ năng đánh giá môi trường',
      'Kinh nghiệm quản lý dự án',
      'Khả năng gắn kết cộng đồng',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'biology-ecosystem'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnamese-heritage-explorer'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    researchMethods: [
      'Đánh giá cơ sở sinh thái',
      'Quy trình giám sát đa dạng sinh học',
      'Đánh giá chất lượng môi trường sống',
      'Khảo sát quần thể loài',
      'Định giá dịch vụ hệ sinh thái',
    ],
    environmentalFactors: [
      'Tác động của phân mảnh môi trường sống',
      'Các mối đe dọa tuyệt chủng của loài',
      'Suy thoái dịch vụ hệ sinh thái',
      'Nhu cầu thích ứng với biến đổi khí hậu',
      'Các vấn đề xung đột giữa người và động vật hoang dã',
    ],
    monitoringTechnologies: [
      'Hệ thống bẫy ảnh',
      'Thiết bị giám sát âm thanh',
      'Công nghệ khảo sát bằng máy bay không người lái',
      'Hệ thống theo dõi GPS',
      'Lấy mẫu DNA môi trường',
    ],
    solutionApproaches: [
      'Phục hồi hệ sinh thái tích cực',
      'Hỗ trợ tái sinh thụ động',
      'Chương trình tái du nhập loài',
      'Tạo hành lang môi trường sống',
      'Bảo tồn dựa vào cộng đồng',
    ],
    policyFrameworks: [
      'Công ước về Đa dạng Sinh học',
      'Quy định thương mại động vật hoang dã CITES',
      'Chiến lược đa dạng sinh học quốc gia',
      'Kế hoạch quản lý khu bảo tồn',
      'Thỏa thuận bảo tồn cộng đồng',
    ],
    exercises: [
      {
        title: 'Thiết kế Dự án Phục hồi Rừng',
        description: 'Thiết kế dự án phục hồi rừng toàn diện cho một cảnh quan bị suy thoái của Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Đánh giá địa điểm rừng bị suy thoái',
          'Cơ sở dữ liệu các loài bản địa',
          'Công cụ lập kế hoạch phục hồi',
          'Khung gắn kết cộng đồng',
        ],
        procedure: [
          'Thực hiện đánh giá cơ sở sinh thái',
          'Xác định các mục tiêu và mục đích phục hồi',
          'Chọn các loài bản địa phù hợp',
          'Thiết kế các quy trình trồng và quản lý',
          'Phát triển hệ thống giám sát',
          'Thu hút cộng đồng địa phương',
          'Tạo kế hoạch bền vững tài chính',
          'Thực hiện các hoạt động phục hồi',
          'Giám sát tiến độ và điều chỉnh phương pháp',
          'Chia sẻ những bài học kinh nghiệm',
        ],
        expectedResults: 'Kế hoạch dự án phục hồi với mục tiêu tỷ lệ sống sót hơn 80%',
        solution: 'Phục hồi dựa trên khoa học với sự tham gia của cộng đồng',
      },
    ],
    realWorldApplications: [
      'Quản lý vườn quốc gia',
      'Các chương trình bù đắp môi trường của doanh nghiệp',
      'Sáng kiến bảo tồn cộng đồng',
      'Các dự án bảo tồn quốc tế',
      'Tăng cường đa dạng sinh học đô thị',
    ],
    caseStudies: [
      {
        title: 'Phục hồi Vườn Quốc gia Cát Tiên',
        organization: 'Tổng cục Kiểm lâm Việt Nam',
        problem: 'Các khu vực rừng bị suy thoái đe dọa các loài có nguy cơ tuyệt chủng',
        solution: 'Chương trình phục hồi toàn diện với sự tham gia của cộng đồng',
        impact: 'Độ che phủ rừng tăng 25%, quần thể các loài có nguy cơ tuyệt chủng ổn định',
        innovations: [
          'Tích hợp kiến thức sinh thái truyền thống',
          'Giám sát rừng dựa vào cộng đồng',
          'Các chương trình chia sẻ doanh thu từ du lịch sinh thái',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Phục hồi Sinh thái',
        url: 'https://www.ser.org',
        type: 'Tổ chức chuyên nghiệp',
      },
      {
        title: 'Chiến lược Đa dạng Sinh học Quốc gia Việt Nam',
        url: 'http://www.biodiv.gov.vn',
        type: 'Chiến lược quốc gia',
      },
    ],
  },
];
