import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';

const climateModelingGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'climate-modeling');
const dataVisualizationGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'data-visualization');
const climateDataAnalystGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'climate-data-analyst');

export interface EnvironmentalDataScienceLesson extends BaseLessonData {
  environmentalApplications?: string[];
  dataSourcesTypes?: string[];
  analyticalMethods?: string[];
  sustainabilityMetrics?: {
    name: string;
    description: string;
    measurement: string;
  }[];
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const environmentalDataScienceLessons: EnvironmentalDataScienceLesson[] = [
  {
    id: 'climate-data-analysis',
    title: 'Phân Tích & Mô Hình Hóa Dữ Liệu Khí Hậu',
    description:
      'Các kỹ thuật nâng cao để phân tích dữ liệu khí hậu, các kiểu thời tiết và xu hướng môi trường. Tập trung vào dữ liệu khí hậu Việt Nam, các kiểu gió mùa và tác động của biến đổi khí hậu đối với nông nghiệp và các vùng ven biển.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=0JFYbFpaMjU',
    imageUrl: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&h=600&fit=crop',
    relatedGames: climateModelingGame
      ? [
          {
            id: climateModelingGame.id,
            name: climateModelingGame.title,
            description: climateModelingGame.description,
          },
        ]
      : [],
    objectives: [
      'Thành thạo các kỹ thuật thu thập, xử lý và phân tích dữ liệu khí hậu',
      'Hiểu các kiểu khí hậu và biến đổi theo mùa của Việt Nam',
      'Áp dụng mô hình thống kê để dự báo thời tiết và khí hậu',
      'Phân tích tác động của biến đổi khí hậu đối với nông nghiệp và các vùng ven biển Việt Nam',
      'Triển khai các mô hình học máy để dự báo xu hướng môi trường',
    ],
    prerequisites: [
      'Nền tảng vững chắc về thống kê và phân tích dữ liệu',
      'Kỹ năng lập trình bằng Python, R hoặc MATLAB',
      'Hiểu biết cơ bản về các khái niệm khí tượng và khí hậu học',
      'Kiến thức về hệ thống GIS và phân tích dữ liệu không gian',
    ],
    exercises: [
      {
        title: 'Phân Tích Mô Hình Gió Mùa Việt Nam',
        description:
          'Phân tích dữ liệu gió mùa 30 năm để xác định các kiểu và dự đoán lượng mưa theo mùa ở vùng Đồng bằng sông Cửu Long',
        difficulty: 'Trung bình',
        materials: [
          'Dữ liệu khí tượng Việt Nam (1990-2020)',
          'Python với pandas, numpy, scikit-learn',
          'Thư viện trực quan hóa dữ liệu khí hậu',
          'Công cụ lập bản đồ GIS',
        ],
        procedure: [
          'Nhập và tiền xử lý dữ liệu khí hậu Việt Nam từ các trạm khí tượng',
          'Phân tích các kiểu theo mùa, phân bố lượng mưa, xu hướng nhiệt độ',
          'Xác định sự bắt đầu, thời gian và cường độ của gió mùa',
          'Áp dụng phân tích chuỗi thời gian để phát hiện các xu hướng khí hậu dài hạn',
          'Xây dựng các mô hình dự báo lượng mưa theo mùa',
          'Trực quan hóa kết quả bằng bản đồ tương tác và biểu đồ xu hướng',
        ],
        expectedResults: 'Phân tích gió mùa toàn diện với độ chính xác dự báo lượng mưa theo mùa >80%',
        solution:
          'Phân tích thống kê nâng cao cho thấy các kiểu gió mùa rõ ràng với những hiểu biết có thể hành động để lập kế hoạch nông nghiệp',
      },
      {
        title: 'Đánh Giá Tác Động Biến Đổi Khí Hậu',
        description:
          'Đánh giá tác động của biến đổi khí hậu đối với các thành phố ven biển Việt Nam bằng dữ liệu vệ tinh và đo mực nước biển',
        difficulty: 'Nâng cao',
        materials: [
          'Dữ liệu hình ảnh vệ tinh (Landsat, Sentinel)',
          'Dữ liệu đo mực nước biển',
          'Hồ sơ nhiệt độ và lượng mưa',
          'Nền tảng Google Earth Engine',
          'Mô hình dự báo khí hậu',
        ],
        procedure: [
          'Thu thập dữ liệu vệ tinh cho các khu vực ven biển TP.HCM và Đà Nẵng',
          'Phân tích thay đổi sử dụng đất, hiệu ứng đảo nhiệt đô thị',
          'Xử lý dữ liệu mực nước biển dâng và các kiểu xói lở bờ biển',
          'Tương quan dữ liệu khí hậu với các xu hướng phát triển đô thị',
          'Dự báo các kịch bản tương lai bằng mô hình khí hậu',
          'Tạo bản đồ đánh giá rủi ro cho các nhà hoạch định chính sách',
        ],
        expectedResults: 'Đánh giá tác động khí hậu chi tiết với các khuyến nghị có thể hành động để quy hoạch đô thị',
        solution:
          'Phân tích toàn diện cung cấp những hiểu biết dựa trên bằng chứng cho các chiến lược thích ứng với khí hậu ở các thành phố ven biển Việt Nam',
      },
    ],
    realWorldApplications: [
      'Dịch vụ Khí tượng Việt Nam: Nâng cao năng lực dự báo thời tiết',
      'Nông nghiệp Đồng bằng sông Cửu Long: Lập kế hoạch cây trồng dựa trên dự báo khí hậu',
      'Quy hoạch thành phố ven biển: Chiến lược thích ứng với mực nước biển dâng',
      'Ngành năng lượng tái tạo: Đánh giá tài nguyên gió và mặt trời',
      'Ngành bảo hiểm: Mô hình hóa rủi ro khí hậu cho các chính sách nông nghiệp',
    ],
    environmentalApplications: [
      'Quy hoạch nông nghiệp: Lựa chọn cây trồng dựa trên dự báo khí hậu',
      'Quản lý tài nguyên nước: Hệ thống dự báo hạn hán và lũ lụt',
      'Bảo vệ ven biển: Đánh giá tác động của mực nước biển dâng',
      'Quy hoạch đô thị: Chiến lược giảm thiểu đảo nhiệt',
      'Năng lượng tái tạo: Tối ưu hóa tài nguyên gió và mặt trời',
    ],
    dataSourcesTypes: [
      'Trạm khí tượng: Dữ liệu nhiệt độ, độ ẩm, lượng mưa, gió',
      'Hình ảnh vệ tinh: Giám sát sử dụng đất, thảm thực vật, nhiệt độ',
      'Phao biển: Nhiệt độ mặt nước biển, chiều cao sóng, độ mặn',
      'Radar thời tiết: Cường độ mưa và theo dõi bão',
      'Mô hình khí hậu: Mô hình lưu thông toàn cầu, thu nhỏ khu vực',
    ],
    caseStudies: [
      {
        title: 'Dự Án Thích Ứng Khí Hậu Đồng Bằng Sông Cửu Long',
        organization: 'Viện Khoa học Khí tượng Thủy văn và Biến đổi khí hậu',
        problem:
          'Phát triển các chiến lược thích ứng với khí hậu cho nông nghiệp Đồng bằng sông Cửu Long đối mặt với xâm nhập mặn và thay đổi mô hình mưa',
        solution: 'Triển khai mạng lưới giám sát khí hậu toàn diện với mô hình dự báo để hỗ trợ quyết định nông nghiệp',
        impact:
          'Cải thiện 15% năng suất cây trồng, giảm 20% lượng nước sử dụng, tăng cường khả năng chống chịu cho 50,000 hộ nông dân',
        innovations: [
          'Mạng lưới giám sát khí hậu thời gian thực',
          'Ứng dụng di động cho nông dân với cảnh báo thời tiết',
          'Mô hình thủy văn tích hợp',
          'Chương trình thích ứng dựa vào cộng đồng',
        ],
      },
    ],
    resources: [
      {
        title: 'Dữ liệu Khí hậu Viện Khoa học Khí tượng',
        url: 'http://www.imh.ac.vn/',
        type: 'Dữ liệu chính phủ',
      },
    ],
  },
  {
    id: 'air-water-quality-monitoring',
    title: 'Hệ Thống Giám Sát Chất Lượng Không Khí & Nước',
    description:
      'Giám sát môi trường toàn diện bằng cảm biến IoT, phân tích dữ liệu và hệ thống báo cáo thời gian thực. Tập trung vào ô nhiễm đô thị, giám sát chất thải công nghiệp và quản lý chất lượng nước tại Việt Nam.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=kuFa_M52488',
    imageUrl: 'https://images.unsplash.com/photo-1581092919534-99a373a311a2?w=1200&h=600&fit=crop',
    relatedGames: dataVisualizationGame
      ? [
          {
            id: dataVisualizationGame.id,
            name: dataVisualizationGame.title,
            description: dataVisualizationGame.description,
          },
        ]
      : [],
    objectives: [
      'Thiết kế và triển khai mạng cảm biến IoT để giám sát môi trường',
      'Triển khai hệ thống thu thập và phân tích dữ liệu thời gian thực',
      'Hiểu các tiêu chuẩn môi trường và yêu cầu tuân thủ của Việt Nam',
      'Áp dụng các kỹ thuật trực quan hóa dữ liệu để báo cáo môi trường',
      'Phát triển hệ thống cảnh báo sớm cho các sự cố ô nhiễm',
    ],
    prerequisites: [
      'Hiểu biết về hóa học môi trường và các loại chất ô nhiễm',
      'Kiến thức cơ bản về điện tử và công nghệ cảm biến',
      'Kỹ năng lập trình bằng Python, JavaScript hoặc C++',
      'Kiến thức về hệ thống cơ sở dữ liệu và phát triển web',
    ],
    exercises: [
      {
        title: 'Mạng Giám Sát Chất Lượng Không Khí Thông Minh',
        description:
          'Xây dựng hệ thống giám sát chất lượng không khí dựa trên IoT cho TP.HCM với bảng điều khiển dữ liệu thời gian thực',
        difficulty: 'Trung bình',
        materials: [
          'Arduino/Raspberry Pi với cảm biến chất lượng không khí',
          'Cảm biến PM2.5, PM10, CO2, NO2',
          'Mô-đun WiFi và kết nối đám mây',
          'Khung bảng điều khiển web',
          'Hệ thống cơ sở dữ liệu (MongoDB/PostgreSQL)',
        ],
        procedure: [
          'Lắp ráp các nút cảm biến chất lượng không khí với quy trình hiệu chuẩn',
          'Phát triển phần mềm thu thập dữ liệu với xử lý lỗi',
          'Triển khai truyền dữ liệu không dây với dự phòng mạng',
          'Tạo bảng điều khiển web thời gian thực với bản đồ ô nhiễm',
          'Thiết lập hệ thống cảnh báo khi vi phạm ngưỡng ô nhiễm',
          'Xác thực các phép đo so với các trạm giám sát tham chiếu',
        ],
        expectedResults: 'Mạng giám sát chất lượng không khí hoạt động với sai số đo <5% so với các trạm tham chiếu',
        solution:
          'Hệ thống IoT toàn diện cung cấp dữ liệu chất lượng không khí thời gian thực với cảnh báo tự động để bảo vệ sức khỏe cộng đồng',
      },
      {
        title: 'Đánh Giá Chất Lượng Nước Công Nghiệp',
        description:
          'Phát triển hệ thống giám sát chất lượng nước cho sự tuân thủ xả thải công nghiệp trong ngành dệt may Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Cảm biến chất lượng nước (pH, oxy hòa tan, độ đục)',
          'Thiết bị ghi dữ liệu',
          'Giao thức phân tích phòng thí nghiệm',
          'Phần mềm lập bản đồ GIS',
          'Cơ sở dữ liệu tuân thủ quy định',
        ],
        procedure: [
          'Cài đặt mạng cảm biến tại các điểm xả thải công nghiệp',
          'Lấy mẫu nước để xác thực trong phòng thí nghiệm',
          'Triển khai quy trình kiểm soát chất lượng dữ liệu tự động',
          'Phân tích nguồn ô nhiễm và đường đi của chất ô nhiễm',
          'Tạo hệ thống báo cáo tuân thủ theo tiêu chuẩn Việt Nam',
          'Phát triển khuyến nghị khắc phục dựa trên phân tích dữ liệu',
        ],
        expectedResults: 'Đánh giá chất lượng nước hoàn chỉnh với tài liệu tuân thủ quy định',
        solution:
          'Cách tiếp cận giám sát tích hợp đảm bảo tuân thủ công nghiệp trong khi bảo vệ tài nguyên nước của Việt Nam',
      },
    ],
    realWorldApplications: [
      'Quản lý chất lượng không khí TP.HCM: Giám sát ô nhiễm thời gian thực',
      'Các khu công nghiệp: Hệ thống giám sát phát thải liên tục',
      'Chất lượng nước sông Sài Gòn: Xác định nguồn ô nhiễm',
      'Khu vực nông nghiệp: Giám sát dòng chảy thuốc trừ sâu và phân bón',
      'Khu vực ven biển: Theo dõi và ngăn ngừa ô nhiễm biển',
    ],
    caseStudies: [
      {
        title: 'Giám Sát Môi Trường Thông Minh TP.HCM',
        organization: 'Sở Tài nguyên và Môi trường TP.HCM',
        problem:
          'Triển khai giám sát môi trường toàn diện trong một thành phố công nghiệp hóa nhanh chóng với hạ tầng giám sát hạn chế',
        solution:
          'Triển khai mạng lưới hơn 100 cảm biến thông minh bao gồm ô nhiễm không khí, nước và tiếng ồn với hệ thống báo cáo công khai thời gian thực',
        impact: 'Cải thiện nhận thức về môi trường, giảm 30% sự cố ô nhiễm, tăng cường năng lực thực thi quy định',
        innovations: [
          'Triển khai mạng cảm biến chi phí thấp',
          'Ứng dụng dữ liệu môi trường di động',
          'Mô hình dự báo ô nhiễm',
          'Nền tảng tương tác cộng đồng',
        ],
      },
      {
        title: 'Quản Lý Nước Thải Công Nghiệp Tại Khu Công Nghiệp Đồng Nai',
        organization: 'Sở Tài nguyên và Môi trường Đồng Nai',
        problem: 'Giám sát xả thải nước thải công nghiệp để đảm bảo tuân thủ các tiêu chuẩn môi trường Việt Nam',
        solution: 'Triển khai hệ thống giám sát tự động với truyền dữ liệu thời gian thực và khả năng báo cáo quy định',
        impact:
          'Đạt tỷ lệ tuân thủ 95%, giảm sự cố ô nhiễm nước, cải thiện niềm tin của công chúng vào hoạt động công nghiệp',
        innovations: [
          'Hệ thống báo cáo tuân thủ tự động',
          'Cơ chế cảnh báo ô nhiễm thời gian thực',
          'Tối ưu hóa xử lý nước thải công nghiệp',
          'Nền tảng tương tác với các bên liên quan',
        ],
      },
    ],
    resources: [
      {
        title: 'Cơ sở dữ liệu Tiêu chuẩn Môi trường Việt Nam',
        url: 'https://monre.gov.vn/',
        type: 'Tiêu chuẩn chính phủ',
      },
    ],
  },
  {
    id: 'satellite-remote-sensing',
    title: 'Viễn Thám Vệ Tinh & Ứng Dụng GIS',
    description:
      'Phân tích hình ảnh vệ tinh nâng cao để giám sát môi trường, phát hiện thay đổi sử dụng đất và quản lý tài nguyên thiên nhiên. Chuyên sâu về địa lý Việt Nam, giám sát phá rừng và thay đổi ven biển.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=VfDAd-MO94o',
    imageUrl: 'https://images.unsplash.com/photo-1541185934-3b7959924308?w=1200&h=600&fit=crop',
    relatedGames: climateDataAnalystGame
      ? [
          {
            id: climateDataAnalystGame.id,
            name: climateDataAnalystGame.title,
            description: climateDataAnalystGame.description,
          },
        ]
      : [],
    objectives: [
      'Thành thạo các kỹ thuật xử lý hình ảnh vệ tinh và quy trình phân tích',
      'Triển khai các thuật toán phát hiện thay đổi để giám sát môi trường',
      'Áp dụng phân tích GIS để quản lý tài nguyên thiên nhiên',
      'Hiểu các kiểu sử dụng đất và thay đổi môi trường của Việt Nam',
      'Phát triển hệ thống giám sát tự động bằng dữ liệu vệ tinh',
    ],
    prerequisites: [
      'Nền tảng vững chắc về các khái niệm GIS và phân tích không gian',
      'Kinh nghiệm lập trình bằng Python, R hoặc JavaScript',
      'Hiểu biết về các nguyên tắc viễn thám và xử lý hình ảnh',
      'Kiến thức về khoa học môi trường và các khái niệm địa lý',
    ],
    exercises: [
      {
        title: 'Giám Sát Phá Rừng ở Tây Nguyên',
        description: 'Sử dụng hình ảnh Landsat và Sentinel để giám sát mất rừng ở các vùng trồng cà phê Tây Nguyên',
        difficulty: 'Nâng cao',
        materials: [
          'Hình ảnh vệ tinh Landsat 8/9 (2015-2024)',
          'Dữ liệu Sentinel-2 độ phân giải cao',
          'Nền tảng Google Earth Engine',
          'Phần mềm QGIS hoặc ArcGIS',
          'Dữ liệu tham chiếu độ che phủ rừng',
        ],
        procedure: [
          'Thu thập hình ảnh vệ tinh đa thời gian cho khu vực nghiên cứu',
          'Tiền xử lý hình ảnh: hiệu chỉnh khí quyển, che phủ mây',
          'Tính toán các chỉ số thảm thực vật (NDVI, EVI) để phát hiện rừng',
          'Áp dụng các thuật toán phát hiện thay đổi để xác định phá rừng',
          'Định lượng diện tích và các kiểu mất rừng theo thời gian',
          'Tạo bản đồ và báo cáo chi tiết để lập kế hoạch bảo tồn',
        ],
        expectedResults: 'Lập bản đồ phá rừng chính xác với độ chính xác phân loại >90%',
        solution:
          'Phân tích viễn thám nâng cao cung cấp những hiểu biết có thể hành động để bảo tồn rừng và quản lý đất bền vững',
      },
      {
        title: 'Phân Tích Thay Đổi Ven Biển Đồng Bằng Sông Cửu Long',
        description:
          'Giám sát xói lở bờ biển và thay đổi bồi tụ trong Đồng bằng sông Cửu Long bằng dữ liệu vệ tinh theo chuỗi thời gian',
        difficulty: 'Nâng cao',
        materials: [
          'Lưu trữ hình ảnh Landsat lịch sử (1990-2024)',
          'Dữ liệu Sentinel-1 SAR cho giám sát nước',
          'Mô hình độ cao số',
          'Dữ liệu tham chiếu ven biển',
          'Dự báo mực nước biển dâng',
        ],
        procedure: [
          'Biên soạn bộ dữ liệu hình ảnh vệ tinh 30+ năm cho đường bờ Đồng bằng sông Cửu Long',
          'Trích xuất vị trí bờ biển bằng các thuật toán phân loại nước',
          'Phân tích sự thay đổi theo thời gian trong hình thái bờ biển',
          'Tương quan sự thay đổi với hoạt động của con người và các yếu tố khí hậu',
          'Mô hình hóa các thay đổi ven biển trong tương lai dưới các kịch bản khác nhau',
          'Tạo bản đồ dễ bị tổn thương cho các cộng đồng ven biển',
        ],
        expectedResults:
          'Đánh giá toàn diện về sự thay đổi ven biển với các dự đoán về độ dễ bị tổn thương trong tương lai',
        solution:
          'Phân tích vệ tinh dài hạn tiết lộ động lực ven biển cho phép lập kế hoạch thích ứng dựa trên bằng chứng',
      },
    ],
    realWorldApplications: [
      'Bộ Tài nguyên và Môi trường: Chương trình giám sát sử dụng đất quốc gia',
      'Cơ quan Kiểm lâm: Hệ thống phát hiện khai thác gỗ bất hợp pháp',
      'Quản lý Đồng bằng sông Cửu Long: Giám sát xói lở bờ biển',
      'Quy hoạch nông nghiệp: Giám sát cây trồng và dự báo năng suất',
      'Quản lý thiên tai: Lập bản đồ lũ lụt và đánh giá thiệt hại',
    ],
    caseStudies: [
      {
        title: 'Hệ Thống Giám Sát Rừng Việt Nam',
        organization: 'Cục Kiểm lâm - Bộ NN&PTNT',
        problem:
          'Triển khai giám sát rừng quy mô quốc gia để chống khai thác gỗ bất hợp pháp và theo dõi tiến độ trồng lại rừng',
        solution:
          'Phát triển hệ thống giám sát vệ tinh tự động bằng Google Earth Engine với cảnh báo thay đổi rừng hàng tháng',
        impact:
          'Giảm 25% tỷ lệ phá rừng, cải thiện 70% thời gian phản ứng của cơ quan thực thi pháp luật, tăng cường hiệu quả bảo tồn rừng',
        innovations: [
          'Hệ thống cảnh báo phá rừng thời gian thực',
          'Ứng dụng di động cho kiểm lâm',
          'Nền tảng báo cáo cộng đồng',
          'Phân tích dự báo cho các khu vực rủi ro cao',
        ],
      },
      {
        title: 'Bản Đồ Thích Ứng Khí Hậu Đồng Bằng Sông Cửu Long',
        organization: 'Viện Nghiên cứu Phát triển Đồng bằng sông Cửu Long',
        problem:
          'Hiểu các điểm dễ bị tổn thương ven biển để phát triển các chiến lược thích ứng khí hậu cho các cộng đồng nông nghiệp',
        solution:
          'Tạo bản đồ dễ bị tổn thương toàn diện bằng cách sử dụng dữ liệu vệ tinh, dự báo khí hậu và các chỉ số kinh tế - xã hội',
        impact:
          'Cung cấp thông tin cho kế hoạch thích ứng cho 500,000 cư dân, đảm bảo 50 triệu đô la trong tài trợ khí hậu, tăng cường khả năng chống chịu của cộng đồng',
        innovations: [
          'Đánh giá đa nguy cơ dễ bị tổn thương',
          'Hệ thống giám sát dựa vào cộng đồng',
          'Nền tảng cảnh báo sớm',
          'Khung quản lý thích ứng',
        ],
      },
    ],
    resources: [
      {
        title: 'Tài liệu Google Earth Engine',
        url: 'https://earthengine.google.com/',
        type: 'Tài liệu nền tảng',
      },
      {
        title: 'Cổng Thông tin Dữ liệu Khoa học Landsat',
        url: 'https://landsat.gsfc.nasa.gov/',
        type: 'Dữ liệu vệ tinh',
      },
      {
        title: 'Hướng dẫn Viễn thám QGIS',
        url: 'https://www.qgis.org/',
        type: 'Hướng dẫn phần mềm',
      },
    ],
  },
  {
    id: 'environmental-machine-learning',
    title: 'Học Máy Môi Trường & Mô Hình Hóa Dự Báo',
    description:
      'Áp dụng các kỹ thuật học máy tiên tiến để dự báo môi trường, mô hình hóa sinh thái và tối ưu hóa bền vững. Tập trung vào các thách thức môi trường của Việt Nam và các giải pháp dựa trên dữ liệu.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=B53q9i1qrz4',
    imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&h=600&fit=crop',
    objectives: [
      'Thành thạo các ứng dụng học máy trong khoa học môi trường',
      'Phát triển các mô hình dự báo cho các quá trình môi trường',
      'Triển khai học sâu để nhận dạng các kiểu môi trường',
      'Áp dụng các kỹ thuật AI để tối ưu hóa bền vững',
      'Tạo hệ thống hỗ trợ quyết định để quản lý môi trường',
    ],
    prerequisites: [
      'Nền tảng vững chắc về các thuật toán học máy và thống kê',
      'Thành thạo lập trình Python với scikit-learn, TensorFlow',
      'Hiểu biết về các quá trình khoa học môi trường và các loại dữ liệu',
      'Kinh nghiệm với tiền xử lý dữ liệu và kỹ thuật đặc trưng',
    ],
    exercises: [
      {
        title: 'Mô Hình Dự Báo Ô Nhiễm Không Khí',
        description:
          'Xây dựng mô hình học sâu để dự báo nồng độ PM2.5 trong TP.HCM bằng dữ liệu khí tượng và giao thông',
        difficulty: 'Nâng cao',
        materials: [
          'Dữ liệu chất lượng không khí lịch sử (2018-2024)',
          'Dữ liệu khí tượng: nhiệt độ, độ ẩm, gió',
          'Dữ liệu lưu lượng giao thông và phát thải xe cộ',
          'Khung TensorFlow/PyTorch',
          'Thư viện mô hình hóa chuỗi thời gian',
        ],
        procedure: [
          'Thu thập và tiền xử lý dữ liệu môi trường đa nguồn',
          'Kỹ thuật đặc trưng: biến trễ, trung bình trượt, thuật ngữ tương tác',
          'Thiết kế kiến trúc mạng nơ-ron để dự báo chuỗi thời gian',
          'Huấn luyện các mô hình với tối ưu hóa siêu tham số',
          'Xác thực hiệu suất bằng kiểm tra chéo và kiểm tra thời gian thực',
          'Triển khai mô hình với giao diện web để truy cập công cộng',
        ],
        expectedResults: 'Mô hình dự báo ô nhiễm không khí với MAE <10 μg/m³ cho dự báo 24 giờ',
        solution:
          'Phương pháp học sâu tiên tiến cho phép dự báo ô nhiễm chính xác, hỗ trợ các biện pháp bảo vệ sức khỏe cộng đồng',
      },
      {
        title: 'Tối Ưu Hóa Bảo Tồn Đa Dạng Sinh Học',
        description:
          'Sử dụng học tăng cường để tối ưu hóa quản lý khu vực bảo vệ trong các công viên quốc gia Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Dữ liệu phân bố loài và bản đồ sinh cảnh',
          'Dữ liệu hoạt động của con người: du lịch, khai thác gỗ, nông nghiệp',
          'Dữ liệu khí hậu và dự báo',
          'Khung học tăng cường',
          'Chỉ số hiệu quả bảo tồn',
        ],
        procedure: [
          'Mô hình hóa động lực hệ sinh thái và sự thay đổi quần thể loài',
          'Định nghĩa các mục tiêu bảo tồn và hàm ràng buộc',
          'Triển khai tác nhân học tăng cường cho các quyết định quản lý',
          'Huấn luyện tác nhân bằng dữ liệu lịch sử và các kịch bản mô phỏng',
          'Tối ưu hóa phân bổ tài nguyên giữa các khu vực bảo vệ',
          'Đánh giá kết quả bảo tồn bằng các chỉ số đa dạng sinh học',
        ],
        expectedResults: 'Chiến lược bảo tồn tối ưu hóa cải thiện kết quả đa dạng sinh học từ 20-30%',
        solution: 'Lập kế hoạch bảo tồn dựa trên AI tối đa hóa bảo vệ đa dạng sinh học trong giới hạn tài nguyên',
      },
    ],
    realWorldApplications: [
      'Các cơ quan bảo vệ môi trường: Hệ thống dự báo và cảnh báo sớm ô nhiễm',
      'Các vườn quốc gia: Quản lý động vật hoang dã và tối ưu hóa bảo tồn',
      'Ngành nông nghiệp: Nông nghiệp chính xác và các biện pháp bền vững',
      'Quy hoạch đô thị: Tối ưu hóa môi trường thành phố thông minh',
      'Nghiên cứu khí hậu: Dự báo xu hướng môi trường dài hạn',
    ],
    sustainabilityMetrics: [
      {
        name: 'Giảm Dấu Chân Carbon',
        description: 'Định lượng việc giảm phát thải CO2 thông qua các quy trình được tối ưu hóa',
        measurement: 'Tấn CO2 tương đương được tiết kiệm mỗi năm',
      },
      {
        name: 'Hiệu Quả Sử Dụng Tài Nguyên',
        description: 'Đo lường sự cải thiện trong việc sử dụng nước, năng lượng, vật liệu',
        measurement: 'Phần trăm giảm tiêu thụ tài nguyên',
      },
    ],
    caseStudies: [
      {
        title: 'Quản Lý Môi Trường Thông Minh - Thành Phố Đà Nẵng',
        organization: 'Sáng kiến Thành phố Thông minh Đà Nẵng',
        problem: 'Tích hợp nhiều nguồn dữ liệu môi trường để tạo ra hệ thống quản lý thông minh cho thành phố ven biển',
        solution:
          'Phát triển nền tảng AI kết hợp dữ liệu chất lượng không khí, chất lượng nước, thời tiết và hoạt động đô thị với phân tích dự báo',
        impact:
          'Cải thiện 50% thời gian phản ứng môi trường, giảm 40% sự cố ô nhiễm, nâng cao điểm hài lòng của khách du lịch',
        innovations: [
          'Hợp nhất dữ liệu môi trường đa phương thức',
          'Bảng điều khiển phân tích dự báo',
          'Hệ thống cảnh báo tự động',
          'Nền tảng tương tác công dân',
        ],
      },
      {
        title: 'Tính Toán Ảnh Hưởng Biến Đổi Khí Hậu Đến Nông Nghiệp Đồng Bằng Sông Cửu Long',
        organization: 'Trường Đại học Cần Thơ - Viện Phát triển Đồng bằng sông Cửu Long',
        problem:
          'Tối ưu hóa sản xuất lúa trong khi giảm thiểu tác động môi trường trong vùng đồng bằng nhạy cảm với khí hậu',
        solution: 'Áp dụng học máy cho nông nghiệp chính xác với tối ưu hóa ràng buộc môi trường',
        impact: 'Tăng năng suất cây trồng 18%, giảm 25% lượng nước sử dụng, giảm 35% lượng phân bón thất thoát',
        innovations: [
          'Lập lịch tưới tiêu thông minh bằng AI',
          'Bón phân chính xác',
          'Lựa chọn cây trồng thích ứng khí hậu',
          'Giám sát tác động môi trường',
        ],
      },
    ],
    resources: [
      {
        title: 'Sổ tay Khoa học Dữ liệu Môi trường',
        url: 'https://eds-book.github.io/',
        type: 'Tài liệu giáo dục',
      },
    ],
  },
];
