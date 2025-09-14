import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export const environmentalClimateLessons: BaseLessonData[] = [
  {
    id: 'climate-science-fundamentals',
    title: 'Khoa học Khí hậu Cơ bản và Bối cảnh Việt Nam',
    description:
      'Nắm vững các nguyên tắc cơ bản của khoa học khí hậu, hiệu ứng nhà kính và tác động của biến đổi khí hậu đặc biệt ảnh hưởng đến Việt Nam và khu vực Đông Nam Á.',
    duration: '180',
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
    faqs: [
      {
        question: 'Hiệu ứng nhà kính là gì và nó liên quan như thế nào đến biến đổi khí hậu?',
        answer:
          'Hiệu ứng nhà kính là quá trình tự nhiên giữ lại một phần nhiệt của Mặt trời trong bầu khí quyển, giúp Trái đất đủ ấm để duy trì sự sống. Tuy nhiên, các hoạt động của con người đã làm tăng nồng độ các khí nhà kính (như CO2), giữ lại nhiều nhiệt hơn và gây ra sự nóng lên toàn cầu, tức là biến đổi khí hậu.',
      },
      {
        question: 'Việt Nam bị ảnh hưởng bởi biến đổi khí hậu như thế nào?',
        answer:
          'Việt Nam là một trong những quốc gia bị ảnh hưởng nặng nề nhất. Các tác động chính bao gồm: mực nước biển dâng gây ngập lụt và xâm nhập mặn ở Đồng bằng sông Cửu Long, các cơn bão mạnh và thường xuyên hơn ở miền Trung, và các đợt nắng nóng, hạn hán khắc nghiệt hơn ở nhiều vùng.',
      },
      {
        question: 'Sự khác biệt giữa thời tiết và khí hậu là gì?',
        answer:
          'Thời tiết là các điều kiện khí quyển trong một khoảng thời gian ngắn (ngày, giờ) tại một địa điểm cụ thể, ví dụ như "hôm nay trời mưa". Khí hậu là mô hình thời tiết trung bình của một khu vực trong một khoảng thời gian dài (thường là 30 năm trở lên), ví dụ như "miền Nam có khí hậu nhiệt đới gió mùa".',
      },
      {
        question: 'Chúng ta có thể làm gì để giảm thiểu tác động của biến đổi khí hậu?',
        answer:
          'Các hành động bao gồm: giảm phát thải khí nhà kính bằng cách chuyển sang năng lượng tái tạo (mặt trời, gió), sử dụng năng lượng hiệu quả, trồng cây gây rừng, và giảm tiêu thụ. Đồng thời, chúng ta cần thích ứng bằng cách xây dựng các công trình chống lũ, phát triển các giống cây trồng chịu mặn, và bảo vệ các hệ sinh thái ven biển.',
      },
    ],
  },

  {
    id: 'environmental-monitoring-assessment',
    title: 'Giám sát Môi trường và Đánh giá Tác động',
    description:
      'Học các kỹ thuật giám sát môi trường tiên tiến, phương pháp thu thập dữ liệu và phương pháp tiếp cận đánh giá tác động toàn diện cho các hệ sinh thái của Việt Nam.',
    duration: '195',
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
    faqs: [
      {
        question: 'Tại sao giám sát môi trường lại quan trọng?',
        answer:
          'Giám sát môi trường cung cấp dữ liệu cần thiết để hiểu tình trạng của môi trường, xác định các nguồn ô nhiễm, đánh giá hiệu quả của các chính sách bảo vệ môi trường và cảnh báo sớm các nguy cơ tiềm ẩn đối với sức khỏe con người và hệ sinh thái.',
      },
      {
        question: 'PM2.5 là gì và tại sao nó nguy hiểm?',
        answer:
          'PM2.5 là các hạt bụi mịn trong không khí có đường kính nhỏ hơn hoặc bằng 2.5 micromet. Chúng nguy hiểm vì kích thước siêu nhỏ cho phép chúng xâm nhập sâu vào phổi và thậm chí cả mạch máu, gây ra các bệnh về hô hấp, tim mạch và nhiều vấn đề sức khỏe nghiêm trọng khác.',
      },
      {
        question: 'Đánh giá tác động môi trường (ĐTM) là gì?',
        answer:
          'Đánh giá tác động môi trường (tiếng Anh: Environmental Impact Assessment - EIA) là quá trình phân tích, dự báo các tác động (cả tích cực và tiêu cực) của một dự án đầu tư (ví dụ: xây dựng nhà máy, khu công nghiệp) đến môi trường. Mục đích là để đề xuất các biện pháp giảm thiểu tác động xấu và là một công cụ quan trọng để cơ quan có thẩm quyền xem xét trước khi cấp phép cho dự án.',
      },
      {
        question: 'Làm thế nào người dân có thể tham gia vào việc giám sát môi trường?',
        answer:
          'Người dân có thể tham gia thông qua các chương trình "khoa học công dân" (citizen science), sử dụng các thiết bị cảm biến chi phí thấp để đo chất lượng không khí, nước, hoặc báo cáo các sự cố môi trường cho cơ quan chức năng qua các ứng dụng di động hoặc đường dây nóng. Sự tham gia của cộng đồng giúp tăng cường mạng lưới giám sát và nâng cao nhận thức.',
      },
    ],
  },

  {
    id: 'renewable-energy-systems',
    title: 'Hệ thống Năng lượng Tái tạo cho Thị trường Việt Nam',
    description:
      'Nắm vững các công nghệ năng lượng tái tạo, thiết kế hệ thống và chiến lược triển khai phù hợp với khí hậu và nhu cầu năng lượng của Việt Nam.',
    duration: '205',
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
    faqs: [
      {
        question: 'Nguồn năng lượng tái tạo nào có tiềm năng lớn nhất ở Việt Nam?',
        answer:
          'Việt Nam có tiềm năng lớn cho cả năng lượng mặt trời và năng lượng gió. Năng lượng mặt trời có tiềm năng cao ở các tỉnh miền Trung và miền Nam, nơi có số giờ nắng nhiều. Năng lượng gió, đặc biệt là gió ngoài khơi, có tiềm năng khổng lồ dọc theo bờ biển dài của đất nước.',
      },
      {
        question: 'Điện mặt trời áp mái có lợi ích gì cho hộ gia đình?',
        answer:
          'Lắp đặt điện mặt trời áp mái giúp các hộ gia đình giảm đáng kể hóa đơn tiền điện hàng tháng, giảm sự phụ thuộc vào lưới điện quốc gia, và góp phần bảo vệ môi trường. Ngoài ra, nếu lượng điện sản xuất ra nhiều hơn mức tiêu thụ, hộ gia đình có thể bán lại phần điện dư thừa cho công ty điện lực.',
      },
      {
        question: 'Thủy điện có phải là năng lượng sạch không?',
        answer:
          'Thủy điện được coi là một dạng năng lượng tái tạo vì nó sử dụng sức nước. Tuy nhiên, việc xây dựng các đập thủy điện lớn có thể gây ra các tác động tiêu cực đến môi trường, như thay đổi dòng chảy của sông, ảnh hưởng đến hệ sinh thái thủy sinh và di dời cộng đồng dân cư. Do đó, các dự án thủy điện nhỏ và bền vững thường được ưu tiên hơn.',
      },
      {
        question: 'Chi phí lắp đặt hệ thống năng lượng tái tạo có đắt không?',
        answer:
          'Chi phí ban đầu để lắp đặt các hệ thống như điện mặt trời có thể khá cao, nhưng nó đã giảm đáng kể trong những năm gần đây. Quan trọng hơn, đây là một khoản đầu tư dài hạn. Chi phí vận hành gần như bằng không và bạn sẽ tiết kiệm được tiền điện trong nhiều năm, thường sẽ hoàn vốn sau khoảng 5-7 năm ở Việt Nam.',
      },
    ],
  },

  {
    id: 'sustainable-agriculture-climate',
    title: 'Nông nghiệp Bền vững trong Bối cảnh Biến đổi Khí hậu',
    description:
      'Học các kỹ thuật nông nghiệp thông minh với khí hậu, thực hành canh tác bền vững và chiến lược thích ứng cho các hệ thống nông nghiệp của Việt Nam.',
    duration: '190',
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
    faqs: [
      {
        question: 'Nông nghiệp bền vững là gì?',
        answer:
          'Nông nghiệp bền vững là phương thức canh tác đáp ứng nhu cầu lương thực hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai. Nó tập trung vào việc bảo vệ môi trường (sức khỏe đất, nước), lợi nhuận kinh tế cho nông dân và sự công bằng xã hội.',
      },
      {
        question: 'Canh tác hữu cơ (organic farming) có phải là nông nghiệp bền vững không?',
        answer:
          'Canh tác hữu cơ là một phần quan trọng của nông nghiệp bền vững, nhưng không phải là tất cả. Nông nghiệp bền vững là một khái niệm rộng hơn, bao gồm cả việc sử dụng nước hiệu quả, bảo tồn năng lượng, đảm bảo điều kiện lao động tốt và giảm thiểu chất thải trong toàn bộ chuỗi cung ứng.',
      },
      {
        question: 'Làm thế nào nông nghiệp có thể giúp chống lại biến đổi khí hậu?',
        answer:
          'Nông nghiệp có thể đóng vai trò quan trọng thông qua việc "cô lập carbon trong đất" (soil carbon sequestration). Các phương pháp canh tác như không cày xới, trồng cây che phủ và nông lâm kết hợp giúp đưa carbon từ khí quyển vào và lưu trữ trong đất, cải thiện sức khỏe của đất và giảm lượng CO2 trong không khí.',
      },
      {
        question: 'Nông nghiệp chính xác (precision agriculture) là gì?',
        answer:
          'Nông nghiệp chính xác là việc sử dụng công nghệ như GPS, cảm biến, drone và AI để quản lý và canh tác trên từng khu vực nhỏ của cánh đồng. Thay vì bón phân hoặc tưới nước đồng đều trên toàn bộ cánh đồng, nông dân có thể áp dụng đúng lượng cần thiết cho từng vị trí cụ thể, giúp tiết kiệm tài nguyên, giảm chi phí và bảo vệ môi trường.',
      },
    ],
  },

  {
    id: 'biodiversity-ecosystem-conservation',
    title: 'Bảo tồn Đa dạng Sinh học và Quản lý Hệ sinh thái',
    description:
      'Nắm vững các phương pháp đánh giá đa dạng sinh học, chiến lược bảo tồn hệ sinh thái và phương pháp tiếp cận quản lý bền vững cho di sản thiên nhiên Việt Nam.',
    duration: '200',
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
    faqs: [
      {
        question: 'Đa dạng sinh học là gì và tại sao nó quan trọng?',
        answer:
          'Đa dạng sinh học là sự đa dạng của sự sống trên Trái đất, từ gen, loài, cho đến toàn bộ hệ sinh thái. Nó quan trọng vì cung cấp cho chúng ta "các dịch vụ hệ sinh thái" thiết yếu như không khí sạch, nước sạch, thụ phấn cho cây trồng, và điều hòa khí hậu. Mất đa dạng sinh học có thể làm sụp đổ các hệ thống tự nhiên mà con người phụ thuộc vào.',
      },
      {
        question: 'Nguyên nhân chính gây mất đa dạng sinh học là gì?',
        answer:
          'Năm nguyên nhân chính bao gồm: 1. Thay đổi/mất môi trường sống (do phá rừng, đô thị hóa). 2. Khai thác quá mức tài nguyên (đánh bắt cá quá mức, săn bắn trái phép). 3. Biến đổi khí hậu. 4. Ô nhiễm (nhựa, hóa chất). 5. Các loài ngoại lai xâm lấn.',
      },
      {
        question: 'Vườn quốc gia và khu bảo tồn có vai trò gì?',
        answer:
          'Vườn quốc gia và khu bảo tồn là những khu vực được bảo vệ nghiêm ngặt để bảo tồn các hệ sinh thái tự nhiên và các loài quan trọng. Chúng hoạt động như những "hòn đảo" an toàn cho đa dạng sinh học, là nơi nghiên cứu khoa học, giáo dục môi trường và du lịch sinh thái có trách nhiệm.',
      },
      {
        question: 'Làm thế nào một cá nhân có thể góp phần vào việc bảo tồn đa dạng sinh học?',
        answer:
          'Bạn có thể góp phần bằng nhiều cách: giảm tiêu thụ, tái sử dụng, tái chế; lựa chọn các sản phẩm bền vững, không mua các sản phẩm từ động vật hoang dã; tham gia các hoạt động tình nguyện như trồng cây, dọn dẹp rác thải; và nâng cao nhận thức cho những người xung quanh về tầm quan trọng của việc bảo vệ thiên nhiên.',
      },
    ],
  },

  {
    id: 'environmental-policy-governance',
    title: 'Chính sách Môi trường và Khung Quản trị',
    description:
      'Hiểu về phát triển chính sách môi trường, cấu trúc quản trị và cơ chế thực thi trong hệ thống hành chính Việt Nam.',
    duration: '185',
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
    faqs: [
      {
        question: 'Chính sách môi trường là gì?',
        answer:
          'Chính sách môi trường là tập hợp các luật, quy định, và các hành động của chính phủ nhằm mục đích bảo vệ môi trường, quản lý tài nguyên thiên nhiên và kiểm soát ô nhiễm. Nó đặt ra các quy tắc và tiêu chuẩn mà các cá nhân, tổ chức và doanh nghiệp phải tuân theo.',
      },
      {
        question: 'Nguyên tắc "Người gây ô nhiễm phải trả tiền" (Polluter Pays Principle) có nghĩa là gì?',
        answer:
          'Đây là một nguyên tắc cốt lõi trong chính sách môi trường, theo đó bên gây ra ô nhiễm phải chịu trách nhiệm về chi phí để xử lý và khắc phục các thiệt hại do ô nhiễm đó gây ra. Nguyên tắc này nhằm mục đích buộc các cá nhân và doanh nghiệp phải tính đến chi phí môi trường trong hoạt động của họ.',
      },
      {
        question: 'Vai trò của các tổ chức phi chính phủ (NGO) trong chính sách môi trường là gì?',
        answer:
          'Các NGO đóng một vai trò quan trọng. Họ thường hoạt động như những người giám sát, theo dõi việc thực thi chính sách của chính phủ và doanh nghiệp. Họ cũng thực hiện các chiến dịch vận động để nâng cao nhận thức cộng đồng, đề xuất các chính sách mới và đại diện cho tiếng nói của các cộng đồng bị ảnh hưởng bởi các vấn đề môi trường.',
      },
      {
        question: 'Tại sao các thỏa thuận môi trường quốc tế lại quan trọng?',
        answer:
          'Các vấn đề môi trường như biến đổi khí hậu, ô nhiễm đại dương, hay mất đa dạng sinh học không có biên giới. Các thỏa thuận quốc tế (như Thỏa thuận Paris về biến đổi khí hậu) tạo ra một khuôn khổ hợp tác toàn cầu, đặt ra các mục tiêu chung và thúc đẩy các quốc gia cùng hành động để giải quyết những thách thức chung mà không một quốc gia nào có thể tự mình giải quyết được.',
      },
    ],
  },

  {
    id: 'green-technology-innovation',
    title: 'Đổi mới Công nghệ Xanh và Phát triển Bền vững',
    description:
      'Nắm vững phát triển công nghệ xanh, quy trình đổi mới và thiết kế giải pháp bền vững để giải quyết các thách thức môi trường của Việt Nam.',
    duration: '215',
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
    faqs: [
      {
        question: 'Công nghệ xanh (Green Tech) là gì?',
        answer:
          'Công nghệ xanh, hay công nghệ sạch (cleantech), là thuật ngữ chỉ các công nghệ và sản phẩm được phát triển và sử dụng theo cách giảm thiểu hoặc không gây tác động tiêu cực đến môi trường. Ví dụ bao gồm năng lượng tái tạo, vật liệu xây dựng bền vững, xe điện, và các quy trình xử lý chất thải tiên tiến.',
      },
      {
        question: 'Kinh tế tuần hoàn (Circular Economy) là gì?',
        answer:
          'Kinh tế tuần hoàn là một mô hình kinh tế trái ngược với mô hình "khai thác - sản xuất - vứt bỏ" truyền thống. Trong kinh tế tuần hoàn, các sản phẩm được thiết kế để có thể tái sử dụng, sửa chữa, tân trang và cuối cùng là tái chế, nhằm giữ cho vật liệu được lưu thông trong vòng lặp sản xuất càng lâu càng tốt và giảm thiểu chất thải ra môi trường.',
      },
      {
        question: 'Đổi mới công nghệ xanh có tạo ra cơ hội kinh doanh không?',
        answer:
          'Chắc chắn có. Việc chuyển đổi sang một nền kinh tế bền vững hơn đang tạo ra những thị trường mới khổng lồ. Các công ty phát triển các giải pháp năng lượng sạch, vật liệu mới, nông nghiệp bền vững, hoặc các công nghệ giúp tiết kiệm tài nguyên đang thu hút được nhiều vốn đầu tư và có tiềm năng tăng trưởng rất lớn.',
      },
      {
        question: 'Làm thế nào để một ý tưởng công nghệ xanh trở thành một sản phẩm thực tế?',
        answer:
          'Quá trình này thường bao gồm các bước: nghiên cứu và phát triển (R&D) để chứng minh tính khả thi của công nghệ; xây dựng một sản phẩm khả dụng tối thiểu (MVP) để thử nghiệm; tìm kiếm nguồn vốn đầu tư; bảo vệ sở hữu trí tuệ (bằng sáng chế); và xây dựng một mô hình kinh doanh để đưa sản phẩm ra thị trường và mở rộng quy mô.',
      },
    ],
  },

  {
    id: 'environmental-education-communication',
    title: 'Giáo dục Môi trường và Truyền thông Khoa học',
    description:
      'Nắm vững các chiến lược giáo dục môi trường, kỹ thuật truyền thông khoa học và phương pháp tiếp cận cộng đồng để thúc đẩy nhận thức về môi trường trong xã hội Việt Nam.',
    duration: '170',
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
    faqs: [
      {
        question: 'Tại sao giáo dục môi trường lại quan trọng, đặc biệt là cho thế hệ trẻ?',
        answer:
          'Giáo dục môi trường trang bị cho thế hệ trẻ kiến thức, kỹ năng và thái độ cần thiết để hiểu và giải quyết các thách thức môi trường. Nó giúp nuôi dưỡng một thế hệ công dân có trách nhiệm, biết đưa ra các quyết định sáng suốt và hành động để bảo vệ hành tinh cho tương lai.',
      },
      {
        question: 'Làm thế nào để truyền đạt các vấn đề khoa học phức tạp một cách dễ hiểu?',
        answer:
          'Hãy sử dụng các câu chuyện (storytelling), các ví dụ gần gũi và các hình ảnh trực quan. Thay vì chỉ trình bày các con số và dữ liệu khô khan, hãy kết nối vấn đề đó với cuộc sống hàng ngày của khán giả. Tập trung vào "tại sao nó lại quan trọng với bạn" thay vì chỉ "nó là cái gì".',
      },
      {
        question: 'Làm thế nào để một chiến dịch truyền thông môi trường trở nên hiệu quả?',
        answer:
          'Một chiến dịch hiệu quả cần có: một thông điệp rõ ràng, đơn giản; nhắm đúng đối tượng mục tiêu; sử dụng nhiều kênh truyền thông khác nhau (mạng xã hội, báo chí, sự kiện cộng đồng); và quan trọng nhất là phải có một lời kêu gọi hành động (call to action) cụ thể, cho mọi người biết chính xác họ cần làm gì.',
      },
      {
        question: 'Làm sao để đối phó với thông tin sai lệch (misinformation) về các vấn đề môi trường?',
        answer:
          'Hãy luôn dựa vào các nguồn thông tin khoa học đáng tin cậy, như các báo cáo từ IPCC (Ủy ban Liên chính phủ về Biến đổi Khí hậu), NASA, hoặc các tạp chí khoa học uy tín. Khi chia sẻ thông tin, hãy trích dẫn nguồn rõ ràng. Thay vì tranh cãi, hãy tập trung vào việc trình bày các bằng chứng một cách bình tĩnh và xây dựng sự đồng thuận dựa trên sự thật.',
      },
    ],
  },

  // Legacy lessons for compatibility
  {
    id: 'climate-change-environmental-monitoring',
    title: 'Khoa học Biến đổi Khí hậu & Giám sát Môi trường',
    description:
      'Hiểu khoa học biến đổi khí hậu, kỹ thuật giám sát môi trường và phân tích dữ liệu cho nghiên cứu môi trường.',
    duration: '200',
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
    faqs: [
      {
        question: 'Hiệu ứng nhà kính là gì và nó liên quan như thế nào đến biến đổi khí hậu?',
        answer:
          'Hiệu ứng nhà kính là quá trình tự nhiên giữ lại một phần nhiệt của Mặt trời trong bầu khí quyển, giúp Trái đất đủ ấm để duy trì sự sống. Tuy nhiên, các hoạt động của con người đã làm tăng nồng độ các khí nhà kính (như CO2), giữ lại nhiều nhiệt hơn và gây ra sự nóng lên toàn cầu, tức là biến đổi khí hậu.',
      },
      {
        question: 'Việt Nam bị ảnh hưởng bởi biến đổi khí hậu như thế nào?',
        answer:
          'Việt Nam là một trong những quốc gia bị ảnh hưởng nặng nề nhất. Các tác động chính bao gồm: mực nước biển dâng gây ngập lụt và xâm nhập mặn ở Đồng bằng sông Cửu Long, các cơn bão mạnh và thường xuyên hơn ở miền Trung, và các đợt nắng nóng, hạn hán khắc nghiệt hơn ở nhiều vùng.',
      },
      {
        question: 'Sự khác biệt giữa thời tiết và khí hậu là gì?',
        answer:
          'Thời tiết là các điều kiện khí quyển trong một khoảng thời gian ngắn (ngày, giờ) tại một địa điểm cụ thể, ví dụ như "hôm nay trời mưa". Khí hậu là mô hình thời tiết trung bình của một khu vực trong một khoảng thời gian dài (thường là 30 năm trở lên), ví dụ như "miền Nam có khí hậu nhiệt đới gió mùa".',
      },
      {
        question: 'Chúng ta có thể làm gì để giảm thiểu tác động của biến đổi khí hậu?',
        answer:
          'Các hành động bao gồm: giảm phát thải khí nhà kính bằng cách chuyển sang năng lượng tái tạo (mặt trời, gió), sử dụng năng lượng hiệu quả, trồng cây gây rừng, và giảm tiêu thụ. Đồng thời, chúng ta cần thích ứng bằng cách xây dựng các công trình chống lũ, phát triển các giống cây trồng chịu mặn, và bảo vệ các hệ sinh thái ven biển.',
      },
    ],
  },
  {
    id: 'environmental-policy-sustainable-development',
    title: 'Chính sách Môi trường & Phát triển Bền vững',
    description:
      'Hiểu các khung chính sách môi trường và các nguyên tắc phát triển bền vững để quản trị môi trường hiệu quả.',
    duration: '180',
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
    faqs: [
      {
        question: 'Chính sách môi trường là gì?',
        answer:
          'Chính sách môi trường là tập hợp các luật, quy định, và các hành động của chính phủ nhằm mục đích bảo vệ môi trường, quản lý tài nguyên thiên nhiên và kiểm soát ô nhiễm. Nó đặt ra các quy tắc và tiêu chuẩn mà các cá nhân, tổ chức và doanh nghiệp phải tuân theo.',
      },
      {
        question: 'Nguyên tắc "Người gây ô nhiễm phải trả tiền" (Polluter Pays Principle) có nghĩa là gì?',
        answer:
          'Đây là một nguyên tắc cốt lõi trong chính sách môi trường, theo đó bên gây ra ô nhiễm phải chịu trách nhiệm về chi phí để xử lý và khắc phục các thiệt hại do ô nhiễm đó gây ra. Nguyên tắc này nhằm mục đích buộc các cá nhân và doanh nghiệp phải tính đến chi phí môi trường trong hoạt động của họ.',
      },
      {
        question: 'Vai trò của các tổ chức phi chính phủ (NGO) trong chính sách môi trường là gì?',
        answer:
          'Các NGO đóng một vai trò quan trọng. Họ thường hoạt động như những người giám sát, theo dõi việc thực thi chính sách của chính phủ và doanh nghiệp. Họ cũng thực hiện các chiến dịch vận động để nâng cao nhận thức cộng đồng, đề xuất các chính sách mới và đại diện cho tiếng nói của các cộng đồng bị ảnh hưởng bởi các vấn đề môi trường.',
      },
      {
        question: 'Tại sao các thỏa thuận môi trường quốc tế lại quan trọng?',
        answer:
          'Các vấn đề môi trường như biến đổi khí hậu, ô nhiễm đại dương, hay mất đa dạng sinh học không có biên giới. Các thỏa thuận quốc tế (như Thỏa thuận Paris về biến đổi khí hậu) tạo ra một khuôn khổ hợp tác toàn cầu, đặt ra các mục tiêu chung và thúc đẩy các quốc gia cùng hành động để giải quyết những thách thức chung mà không một quốc gia nào có thể tự mình giải quyết được.',
      },
    ],
  },
  {
    id: 'ecosystem-restoration-biodiversity-conservation',
    title: 'Phục hồi Hệ sinh thái & Bảo tồn Đa dạng Sinh học',
    description:
      'Nắm vững các kỹ thuật phục hồi hệ sinh thái và chiến lược bảo tồn đa dạng sinh học để phục hồi môi trường.',
    duration: '160',
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
    faqs: [
      {
        question: 'Đa dạng sinh học là gì và tại sao nó quan trọng?',
        answer:
          'Đa dạng sinh học là sự đa dạng của sự sống trên Trái đất, từ gen, loài, cho đến toàn bộ hệ sinh thái. Nó quan trọng vì cung cấp cho chúng ta "các dịch vụ hệ sinh thái" thiết yếu như không khí sạch, nước sạch, thụ phấn cho cây trồng, và điều hòa khí hậu. Mất đa dạng sinh học có thể làm sụp đổ các hệ thống tự nhiên mà con người phụ thuộc vào.',
      },
      {
        question: 'Nguyên nhân chính gây mất đa dạng sinh học là gì?',
        answer:
          'Năm nguyên nhân chính bao gồm: 1. Thay đổi/mất môi trường sống (do phá rừng, đô thị hóa). 2. Khai thác quá mức tài nguyên (đánh bắt cá quá mức, săn bắn trái phép). 3. Biến đổi khí hậu. 4. Ô nhiễm (nhựa, hóa chất). 5. Các loài ngoại lai xâm lấn.',
      },
      {
        question: 'Vườn quốc gia và khu bảo tồn có vai trò gì?',
        answer:
          'Vườn quốc gia và khu bảo tồn là những khu vực được bảo vệ nghiêm ngặt để bảo tồn các hệ sinh thái tự nhiên và các loài quan trọng. Chúng hoạt động như những "hòn đảo" an toàn cho đa dạng sinh học, là nơi nghiên cứu khoa học, giáo dục môi trường và du lịch sinh thái có trách nhiệm.',
      },
      {
        question: 'Làm thế nào một cá nhân có thể góp phần vào việc bảo tồn đa dạng sinh học?',
        answer:
          'Bạn có thể góp phần bằng nhiều cách: giảm tiêu thụ, tái sử dụng, tái chế; lựa chọn các sản phẩm bền vững, không mua các sản phẩm từ động vật hoang dã; tham gia các hoạt động tình nguyện như trồng cây, dọn dẹp rác thải; và nâng cao nhận thức cho những người xung quanh về tầm quan trọng của việc bảo vệ thiên nhiên.',
      },
    ],
  },
];

export const environmentalScienceClimateModuleData: ModuleData = {
  id: 'environmental-science-climate',
  title: 'Khoa học Môi trường & Biến đổi Khí hậu',
  subtitle: 'Hiểu và giải quyết các thách thức môi trường của hành tinh chúng ta.',
  description:
    'Khóa học này cung cấp một nền tảng toàn diện về khoa học môi trường, tập trung vào biến đổi khí hậu, bảo tồn đa dạng sinh học, năng lượng tái tạo và các chính sách phát triển bền vững. Học viên sẽ được trang bị kiến thức để đối mặt với các vấn đề môi trường cấp bách tại Việt Nam và trên toàn cầu.',
  level: 'Cơ bản đến Nâng cao',
  duration: '20 tuần',
  category: 'Năng lượng & Môi trường',
  primaryColor: 'emerald',
  color: 'emerald',
  gradientColors: 'from-emerald-500 to-green-500',
  basePath: '/learning/environmental-science-climate',
  heroImageUrl: 'https://images.unsplash.com/photo-1576233268573-59c532b3c468?auto=format&fit=crop&w=1470&q=80',
  icon: 'Globe',
  features: [
    'Khoa học khí hậu',
    'Giám sát môi trường',
    'Năng lượng tái tạo',
    'Nông nghiệp bền vững',
    'Bảo tồn đa dạng sinh học',
    'Chính sách môi trường',
  ],
  objectives: [
    'Phân tích các nguyên nhân và hậu quả của biến đổi khí hậu.',
    'Thiết kế và triển khai các hệ thống giám sát môi trường.',
    'Đánh giá các công nghệ năng lượng tái tạo khác nhau.',
    'Phát triển các chiến lược nông nghiệp bền vững và thích ứng với khí hậu.',
    'Xây dựng các kế hoạch bảo tồn đa dạng sinh học hiệu quả.',
    'Hiểu và phân tích các chính sách môi trường của Việt Nam và quốc tế.',
  ],
  prerequisites: ['Sự quan tâm đến các vấn đề khoa học và môi trường.', 'Tư duy phản biện và giải quyết vấn đề.'],
  careerOutcomes: [
    'Chuyên gia môi trường',
    'Nhà phân tích chính sách khí hậu',
    'Chuyên gia tư vấn bền vững cho doanh nghiệp',
    'Quản lý dự án bảo tồn',
    'Nhà giáo dục môi trường',
  ],
  marketDemand: {
    averageSalary: '18.000.000 - 40.000.000 VNĐ/tháng',
    jobGrowth: '20% (Cao)',
    hireDemand: 'Trung bình',
  },
  industryApplications: [
    'Cơ quan quản lý nhà nước về môi trường',
    'Các tổ chức phi chính phủ quốc tế và trong nước',
    'Các tập đoàn có bộ phận phát triển bền vững (CSR)',
    'Các công ty năng lượng tái tạo',
    'Viện nghiên cứu và trường đại học',
  ],
  relatedModules: [
    K2Module.GreenTechnology,
    K2Module.EnvironmentalDataScience,
    K2Module.EnergyManagement,
    K2Module.SustainableAgriculture,
  ],
  lessons: environmentalClimateLessons,
};
