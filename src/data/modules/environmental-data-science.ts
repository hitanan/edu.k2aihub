import type { BaseLessonData, Exercise, CaseStudy, Resource } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export interface EnvironmentalDataScienceLesson extends BaseLessonData {
  exercises: Exercise[];
  caseStudies: CaseStudy[];
  resources: Resource[];
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
      },
      {
        title: 'Đánh Giá Tác Động Biến Đổi Khí Hậu',
        description:
          'Đánh giá tác động của biến đổi khí hậu đối với các thành phố ven biển Việt Nam bằng dữ liệu vệ tinh và đo mực nước biển',
        difficulty: 'Nâng cao',
      },
    ],
    realWorldApplications: [
      'Dịch vụ Khí tượng Việt Nam: Nâng cao năng lực dự báo thời tiết',
      'Nông nghiệp Đồng bằng sông Cửu Long: Lập kế hoạch cây trồng dựa trên dự báo khí hậu',
      'Quy hoạch thành phố ven biển: Chiến lược thích ứng với mực nước biển dâng',
      'Ngành năng lượng tái tạo: Đánh giá tài nguyên gió và mặt trời',
      'Ngành bảo hiểm: Mô hình hóa rủi ro khí hậu cho các chính sách nông nghiệp',
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
    faqs: [
      {
        question: 'Phân tích dữ liệu khí hậu có thể giúp ích gì cho nông dân Việt Nam?',
        answer:
          'Phân tích dữ liệu khí hậu giúp nông dân dự đoán các kiểu thời tiết, như thời điểm bắt đầu và kết thúc mùa mưa, nguy cơ hạn hán hoặc lũ lụt. Thông tin này cho phép họ điều chỉnh lịch gieo trồng, lựa chọn giống cây trồng phù hợp và lên kế hoạch tưới tiêu hiệu quả, từ đó tăng năng suất và giảm thiểu rủi ro.',
      },
      {
        question: 'Làm thế nào để mô hình hóa tác động của biến đổi khí hậu đến các vùng ven biển?',
        answer:
          'Các nhà khoa học sử dụng dữ liệu lịch sử về mực nước biển, nhiệt độ, và các cơn bão, kết hợp với các mô hình dự báo khí hậu toàn cầu. Họ tạo ra các kịch bản mô phỏng để dự đoán mức độ dâng của nước biển, nguy cơ ngập lụt và xói lở bờ biển trong tương lai, giúp các nhà quy hoạch đưa ra các biện pháp phòng chống.',
      },
      {
        question: 'Dữ liệu từ vệ tinh có thể được sử dụng để giám sát những gì ở Việt Nam?',
        answer:
          'Dữ liệu vệ tinh ở Việt Nam được sử dụng để giám sát nhiều vấn đề như: nạn phá rừng ở Tây Nguyên và các vùng núi phía Bắc, mức độ ô nhiễm không khí ở các thành phố lớn, sự thay đổi của đường bờ biển và tình trạng xói lở ở Đồng bằng sông Cửu Long, cũng như theo dõi sức khỏe cây trồng và dự báo sản lượng nông nghiệp.',
      },
      {
        question: 'Python có những thư viện nào hữu ích cho việc phân tích dữ liệu khí hậu?',
        answer:
          'Các thư viện Python phổ biến cho phân tích dữ liệu khí hậu bao gồm: xarray (để làm việc với dữ liệu đa chiều như NetCDF), pandas/GeoPandas (cho dữ liệu chuỗi thời gian và không gian), Matplotlib/Seaborn (để trực quan hóa), và scikit-learn (cho các mô hình học máy và dự báo).',
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
      },
      {
        title: 'Đánh Giá Chất Lượng Nước Công Nghiệp',
        description:
          'Phát triển hệ thống giám sát chất lượng nước cho sự tuân thủ xả thải công nghiệp trong ngành dệt may Việt Nam',
        difficulty: 'Nâng cao',
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
      },
      {
        title: 'Phân Tích Thay Đổi Ven Biển Đồng Bằng Sông Cửu Long',
        description:
          'Giám sát xói lở bờ biển và thay đổi bồi tụ trong Đồng bằng sông Cửu Long bằng dữ liệu vệ tinh theo chuỗi thời gian',
        difficulty: 'Nâng cao',
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
      },
      {
        title: 'Tối Ưu Hóa Bảo Tồn Đa Dạng Sinh Học',
        description:
          'Sử dụng học tăng cường để tối ưu hóa quản lý khu vực bảo vệ trong các công viên quốc gia Việt Nam',
        difficulty: 'Nâng cao',
      },
    ],
    realWorldApplications: [
      'Các cơ quan bảo vệ môi trường: Hệ thống dự báo và cảnh báo sớm ô nhiễm',
      'Các vườn quốc gia: Quản lý động vật hoang dã và tối ưu hóa bảo tồn',
      'Ngành nông nghiệp: Nông nghiệp chính xác và các biện pháp bền vững',
      'Quy hoạch đô thị: Tối ưu hóa môi trường thành phố thông minh',
      'Nghiên cứu khí hậu: Dự báo xu hướng môi trường dài hạn',
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

export const environmentalDataScienceModuleData: ModuleData = {
  id: 'environmental-data-science',
  title: 'Khoa Học Dữ Liệu Môi Trường',
  subtitle: 'Sử dụng dữ liệu để bảo vệ hành tinh của chúng ta.',
  description:
    'Áp dụng khoa học dữ liệu, học máy và viễn thám để giải quyết các thách thức môi trường cấp bách. Khóa học này tập trung vào các ứng dụng thực tế tại Việt Nam, từ giám sát chất lượng không khí đến phân tích tác động của biến đổi khí hậu.',
  level: 'Nâng cao',
  duration: '15 tuần',
  category: 'Năng lượng & Môi trường',
  primaryColor: 'teal',
  color: 'teal',
  gradientColors: 'from-teal-500 to-cyan-500',
  basePath: '/learning/environmental-data-science',
  heroImageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1470&q=80',
  icon: 'Leaf',
  features: [
    'Phân tích dữ liệu khí hậu',
    'Giám sát chất lượng không khí & nước',
    'Viễn thám vệ tinh & GIS',
    'Học máy cho môi trường',
  ],
  objectives: [
    'Phân tích các bộ dữ liệu môi trường phức tạp bằng Python và R.',
    'Xây dựng các mô hình dự báo cho các hiện tượng khí hậu và ô nhiễm.',
    'Sử dụng hình ảnh vệ tinh để giám sát thay đổi sử dụng đất và thảm họa tự nhiên.',
    'Thiết kế và triển khai các hệ thống giám sát môi trường dựa trên IoT.',
  ],
  prerequisites: [
    'Kiến thức về khoa học dữ liệu hoặc phân tích dữ liệu.',
    'Kỹ năng lập trình Python.',
    'Sự quan tâm đến các vấn đề môi trường.',
  ],
  careerOutcomes: [
    'Nhà khoa học dữ liệu môi trường',
    'Chuyên gia GIS và viễn thám',
    'Nhà phân tích chính sách môi trường',
    'Chuyên gia tư vấn bền vững',
  ],
  marketDemand: {
    averageSalary: '28.000.000 - 50.000.000 VNĐ/tháng',
    jobGrowth: '25% (Cao)',
    hireDemand: 'Trung bình',
  },
  industryApplications: [
    'Cơ quan chính phủ (Bộ Tài nguyên và Môi trường)',
    'Các tổ chức phi chính phủ về môi trường (WWF, IUCN)',
    'Các công ty tư vấn kỹ thuật và môi trường',
    'Các tập đoàn lớn có bộ phận bền vững',
  ],
  relatedModules: [K2Module.DataScience, K2Module.GreenTechnology, K2Module.EnergyManagement, K2Module.City],
  lessons: environmentalDataScienceLessons,
};
