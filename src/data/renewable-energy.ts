import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface RenewableEnergyLesson extends BaseLessonData {
  energyType?: string;
}

export const renewableEnergyLessons: RenewableEnergyLesson[] = [
  {
    id: 'solar-energy-fundamentals',
    title: 'Hệ thống Năng lượng Mặt trời & Công nghệ Quang điện',
    description:
      'Khám phá công nghệ năng lượng mặt trời từ các tế bào quang điện đến các hệ thống trang trại mặt trời hoàn chỉnh. Học cách thiết kế và tối ưu hóa các hệ thống lắp đặt năng lượng mặt trời cho khí hậu Việt Nam.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=xy9nj94xvKA',
    imageUrl: 'https://i.ytimg.com/vi/xy9nj94xvKA/hqdefault.jpg',
    objectives: [
      'Hiểu hiệu ứng quang điện và cách các tế bào mặt trời chuyển đổi ánh sáng mặt trời thành điện năng',
      'Tìm hiểu về các loại tấm pin mặt trời khác nhau: đơn tinh thể, đa tinh thể, màng mỏng',
      'Làm chủ thiết kế hệ thống năng lượng mặt trời: định cỡ, bộ biến tần, lưu trữ pin',
      'Hiểu về kinh tế và ROI của các hệ thống lắp đặt năng lượng mặt trời trong bối cảnh Việt Nam',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về điện và mạch điện',
      'Kỹ năng toán học: đại số và giải tích cơ bản',
      'Quan tâm đến tính bền vững của môi trường',
    ],
    exercises: [
      {
        title: 'Công cụ tính toán Thiết kế Hệ thống Năng lượng Mặt trời',
        description:
          'Thiết kế một hệ thống năng lượng mặt trời hoàn chỉnh cho một hộ gia đình điển hình ở Việt Nam, tính toán nhu cầu năng lượng và thông số kỹ thuật của hệ thống.',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích mức tiêu thụ điện hàng tháng từ hóa đơn tiền điện',
          'Nghiên cứu dữ liệu bức xạ mặt trời tại các vùng của Việt Nam',
          'Tính toán công suất tấm pin và dung lượng lưu trữ pin cần thiết',
          'Chọn bộ biến tần và thiết bị an toàn phù hợp',
          'Ước tính chi phí lắp đặt và thời gian hoàn vốn',
          'Tạo sơ đồ hệ thống chi tiết và danh sách các thành phần',
        ],
        expectedResults: 'Một thiết kế hệ thống năng lượng mặt trời hoàn chỉnh với phân tích chi phí và dự báo ROI.',
        solution:
          'Hệ thống 5kW điển hình cho một ngôi nhà ở Việt Nam: 20-25 tấm pin, bộ biến tần 5kW, bộ lưu trữ pin 10kWh.',
      },
      {
        title: 'Kiểm tra Hiệu suất Tấm pin Mặt trời',
        description:
          'Kiểm tra các loại tấm pin mặt trời khác nhau trong các điều kiện khác nhau để hiểu các đặc tính hiệu suất.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thiết lập thiết bị thử nghiệm với ánh sáng được kiểm soát',
          'Đo điện áp và dòng điện đầu ra dưới các cường độ ánh sáng khác nhau',
          'Kiểm tra ảnh hưởng của nhiệt độ đến hiệu suất của tấm pin',
          'So sánh hiệu suất của các công nghệ tấm pin khác nhau',
          'Ghi lại dữ liệu và tạo các đường cong hiệu suất',
          'Phân tích kết quả và đề xuất loại tấm pin tối ưu',
        ],
        expectedResults: 'Một phân tích hiệu suất toàn diện của các công nghệ năng lượng mặt trời khác nhau.',
        solution: 'Các tấm pin đơn tinh thể thường cho hiệu suất cao nhất nhưng chi phí trên mỗi watt cao hơn.',
      },
    ],
    realWorldApplications: [
      'Lắp đặt năng lượng mặt trời trên mái nhà cho các tòa nhà dân dụng và thương mại',
      'Các trang trại năng lượng mặt trời ở Đồng bằng sông Cửu Long và Tây Nguyên',
      'Hệ thống năng lượng mặt trời ngoài lưới cho các làng và đảo xa xôi',
      'Hệ thống đun nước nóng bằng năng lượng mặt trời cho khách sạn và bệnh viện',
      'Các tấm pin mặt trời nổi trên các hồ chứa và ao nuôi trồng thủy sản',
    ],
    caseStudies: [
      {
        title: 'Dự án Trang trại Năng lượng Mặt trời Đắk Lắk',
        organization: 'Tỉnh Đắk Lắk, Việt Nam',
        problem:
          'Phát triển một trang trại năng lượng mặt trời quy mô lớn trong khu vực nông nghiệp với tác động môi trường tối thiểu',
        solution:
          'Thực hiện nông nghiệp quang điện: các tấm pin mặt trời được nâng cao trên cây trồng, cho phép tiếp tục canh tác bên dưới',
        impact:
          'Công suất năng lượng mặt trời 450 MW trong khi vẫn duy trì 80% năng suất nông nghiệp, tạo ra các nguồn thu nhập kép',
        innovations: [
          'Nông nghiệp quang điện phù hợp với nền kinh tế nông nghiệp của Việt Nam',
          'Chiều cao tấm pin phù hợp rất quan trọng cho sự phát triển của cây trồng bên dưới',
          'Sự tham gia của cộng đồng là điều cần thiết cho sự thành công của dự án',
          'Những thách thức về tích hợp lưới điện đòi hỏi phải lập kế hoạch cẩn thận',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Năng lượng Mặt trời Việt Nam',
        url: 'https://vsea.org.vn/',
        type: 'Hiệp hội ngành',
      },
    ],
    vietnamContext: {
      title: 'Tiềm năng Năng lượng Mặt trời tại Việt Nam',
      content: [
        'Với đường bờ biển dài và số giờ nắng cao, đặc biệt ở miền Trung và miền Nam, Việt Nam có tiềm năng khổng lồ để phát triển điện mặt trời. Chính phủ đã có nhiều chính sách khuyến khích, dẫn đến sự bùng nổ các dự án điện mặt trời áp mái và trang trại năng lượng mặt trời trong những năm gần đây.',
        'Thách thức lớn nhất là sự ổn định của lưới điện khi tỷ lệ năng lượng tái tạo tăng cao. Các giải pháp lưu trữ năng lượng và lưới điện thông minh đang là ưu tiên hàng đầu.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Mỹ Linh',
      title: 'Kỹ sư trưởng, Dự án Điện mặt trời',
      company: 'Tập đoàn Trung Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Mỗi tấm pin mặt trời chúng tôi lắp đặt không chỉ tạo ra điện sạch, mà còn là một bước tiến tới tương lai năng lượng bền vững cho Việt Nam. Đó là một công việc đầy tự hào.',
    },
    quizzes: [
      {
        question: 'Hiệu ứng "photovoltaic" (quang điện) là gì?',
        options: [
          'Quá trình tạo ra ánh sáng từ điện',
          'Quá trình tạo ra điện từ ánh sáng mặt trời',
          'Quá trình lưu trữ năng lượng mặt trời',
          'Quá trình làm nóng nước bằng mặt trời',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hiệu ứng quang điện là nguyên lý cơ bản của pin mặt trời, nơi các vật liệu bán dẫn hấp thụ photon từ ánh sáng và giải phóng electron, tạo ra dòng điện.',
      },
      {
        question: 'Tại sao các hệ thống điện mặt trời thường cần bộ biến tần (inverter)?',
        options: [
          'Để tăng công suất của tấm pin',
          'Để chuyển đổi dòng điện một chiều (DC) từ pin thành dòng điện xoay chiều (AC) sử dụng trong gia đình',
          'Để làm mát các tấm pin',
          'Để lưu trữ điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tấm pin mặt trời tạo ra dòng điện một chiều (DC), trong khi hầu hết các thiết bị điện trong nhà và lưới điện quốc gia sử dụng dòng điện xoay chiều (AC). Inverter thực hiện nhiệm vụ chuyển đổi này.',
      },
    ],
  },
  {
    id: 'wind-power-technology',
    title: 'Hệ thống Điện gió & Công nghệ Tua bin',
    description:
      'Khám phá công nghệ năng lượng gió từ khí động học đến phát triển trang trại điện gió hoàn chỉnh. Tập trung vào tiềm năng điện gió ngoài khơi của bờ biển Việt Nam.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fsNzBfZoV04',
    imageUrl: 'https://i.ytimg.com/vi/fsNzBfZoV04/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc khí động học và thiết kế cánh của tua bin gió',
      'Tìm hiểu về đánh giá tài nguyên gió và lựa chọn địa điểm',
      'Làm chủ tối ưu hóa bố trí trang trại điện gió và hiệu ứng bóng gió',
      'Khám phá công nghệ điện gió ngoài khơi dành riêng cho điều kiện Việt Nam',
    ],
    prerequisites: [
      'Vật lý cơ bản: cơ học và động lực học chất lỏng',
      'Hiểu biết về sản xuất điện năng',
      'Quen thuộc với các khái niệm khí tượng học',
    ],
    exercises: [
      {
        title: 'Dự án Đánh giá Tài nguyên Gió',
        description:
          'Phân tích dữ liệu gió từ các địa điểm trang trại điện gió tiềm năng của Việt Nam để xác định tính khả thi và lựa chọn tua bin tối ưu.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập dữ liệu gió lịch sử từ các trạm khí tượng',
          'Phân tích phân bố tốc độ gió và các kiểu theo mùa',
          'Tạo biểu đồ hoa gió cho các địa điểm khác nhau',
          'Tính toán ước tính sản lượng năng lượng hàng năm',
          'Đánh giá nhiễu loạn và các điều kiện thời tiết khắc nghiệt',
          'Đề xuất loại tua bin và chiều cao trục tối ưu',
        ],
        expectedResults: 'Một báo cáo tài nguyên gió toàn diện với các dự báo sản xuất năng lượng.',
        solution:
          'Các khu vực ven biển Việt Nam có tốc độ gió trung bình 7-9 m/s, phù hợp với các tua bin gió hiện đại.',
      },
      {
        title: 'Thiết kế Trang trại Điện gió Ngoài khơi',
        description:
          'Thiết kế bố trí trang trại điện gió ngoài khơi cho vùng biển ven bờ Việt Nam, xem xét các ràng buộc về môi trường và kỹ thuật.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích độ sâu của nước và điều kiện đáy biển',
          'Nghiên cứu các khu bảo tồn biển và các tuyến đường vận chuyển',
          'Tối ưu hóa khoảng cách giữa các tua bin để giảm thiểu tổn thất do hiệu ứng bóng gió',
          'Thiết kế hệ thống thu gom điện',
          'Lập kế hoạch hậu cần lắp đặt và bảo trì',
          'Ước tính LCOE (Chi phí năng lượng được san bằng)',
        ],
        expectedResults: 'Một thiết kế trang trại điện gió ngoài khơi hoàn chỉnh với phân tích kinh tế.',
        solution: 'Khoảng cách tối ưu cách nhau 7-10 lần đường kính cánh quạt, với các dây cáp ngầm vào bờ.',
      },
    ],
    realWorldApplications: [
      'Các trang trại điện gió ngoài khơi ở vùng biển Biển Đông',
      'Các dự án phát triển điện gió trên bờ ở các tỉnh Ninh Thuận và Bình Thuận',
      'Các hệ thống điện gió quy mô nhỏ cho các đảo và các cộng đồng vùng sâu vùng xa',
      'Các hệ thống lai gió-mặt trời để ổn định lưới điện',
      'Điện gió công nghiệp cho các cơ sở sản xuất',
    ],
    caseStudies: [
      {
        title: 'Dự án Điện gió Ngoài khơi Kê Gà',
        organization: 'Tỉnh Bình Thuận, Việt Nam',
        problem:
          'Phát triển trang trại điện gió ngoài khơi thương mại đầu tiên tại Việt Nam với các điều kiện biển đầy thách thức',
        solution: 'Sử dụng công nghệ móng tiên tiến và thiết kế tua bin chống bão',
        impact: 'Công suất tiềm năng 3,5 GW với sản lượng ước tính 13 tỷ kWh hàng năm',
        innovations: [
          'Thiết kế chống bão rất quan trọng ở Biển Đông',
          'Phát triển chuỗi cung ứng địa phương là điều cần thiết để giảm chi phí',
          'Đánh giá tác động môi trường phải xem xét các hệ sinh thái biển',
          'Cần nâng cấp cơ sở hạ tầng lưới điện để tích hợp điện gió ngoài khơi',
        ],
      },
    ],
    resources: [
      {
        title: 'Hội đồng Năng lượng Gió Toàn cầu',
        url: 'https://gwec.net/',
        type: 'Tổ chức Nghiên cứu',
      },
    ],
    vietnamContext: {
      title: 'Điện gió ngoài khơi: Tương lai Năng lượng Việt Nam',
      content: [
        'Với hơn 3,200 km đường bờ biển và tốc độ gió ổn định, Việt Nam được đánh giá là một trong những quốc gia có tiềm năng điện gió ngoài khơi lớn nhất Đông Nam Á. Các tỉnh như Bình Thuận, Ninh Thuận, Bạc Liêu đang là điểm nóng cho các dự án điện gió.',
        'Phát triển điện gió ngoài khơi không chỉ giúp đảm bảo an ninh năng lượng mà còn tạo ra một ngành công nghiệp phụ trợ mới, từ xây dựng chân đế, lắp đặt đến vận hành và bảo dưỡng, tạo ra hàng chục nghìn việc làm chất lượng cao.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hải Nam',
      title: 'Giám đốc Vận hành, Trang trại Điện gió',
      company: 'Tập đoàn Mainstream Renewable Power (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Vận hành một trang trại điện gió ngoài khơi giống như điều khiển một dàn nhạc giao hưởng khổng lồ giữa biển khơi. Mỗi turbine là một nhạc công, và nhiệm vụ của chúng tôi là đảm bảo tất cả cùng hòa tấu để tạo ra bản giao hưởng năng lượng sạch.',
    },
    quizzes: [
      {
        question: 'Tại sao điện gió ngoài khơi (offshore) thường hiệu quả hơn trên bờ (onshore)?',
        options: [
          'Gió ngoài khơi thổi mạnh hơn và ổn định hơn',
          'Turbine ngoài khơi rẻ hơn',
          'Lắp đặt ngoài khơi dễ dàng hơn',
          'Gió trên bờ không đủ mạnh',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Gió trên biển không bị cản trở bởi địa hình như đồi núi hay nhà cửa, do đó có tốc độ cao hơn và ổn định hơn, giúp turbine hoạt động với hiệu suất tối ưu.',
      },
      {
        question: 'Các tỉnh nào của Việt Nam có tiềm năng điện gió lớn nhất?',
        options: ['Hà Nội, Hải Phòng', 'Đà Nẵng, Huế', 'Ninh Thuận, Bình Thuận', 'Cần Thơ, Cà Mau'],
        correctAnswerIndex: 2,
        explanation:
          'Các tỉnh duyên hải Nam Trung Bộ như Ninh Thuận và Bình Thuận có tốc độ gió trung bình cao nhất cả nước, là điều kiện lý tưởng để phát triển các dự án điện gió quy mô lớn.',
      },
    ],
  },
  {
    id: 'energy-storage-systems',
    title: 'Lưu trữ Năng lượng & Tích hợp Lưới điện Thông minh',
    description:
      'Làm chủ các công nghệ lưu trữ năng lượng tiên tiến và các chiến lược tích hợp lưới điện. Cần thiết để quản lý sự biến đổi của năng lượng tái tạo trong các hệ thống điện hiện đại.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=1MpWH6-xQqs',
    imageUrl: 'https://i.ytimg.com/vi/1MpWH6-xQqs/hqdefault.jpg',
    objectives: [
      'So sánh các công nghệ lưu trữ năng lượng khác nhau: pin, thủy điện tích năng, khí nén',
      'Hiểu vai trò ổn định lưới điện của các hệ thống lưu trữ năng lượng',
      'Tìm hiểu về các công nghệ lưới điện thông minh và đáp ứng nhu cầu',
      'Thiết kế các hệ thống tái tạo lai với kích thước lưu trữ tối ưu',
    ],
    prerequisites: [
      'Hiểu biết về các hệ thống điện năng',
      'Kiến thức về các đặc tính của năng lượng tái tạo',
      'Kỹ năng kinh tế và phân tích tài chính cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Lưu trữ Pin',
        description:
          'Thiết kế hệ thống lưu trữ năng lượng pin để tích hợp năng lượng tái tạo quy mô lớn vào mạng lưới điện Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích các yêu cầu về ổn định lưới điện và nhu cầu điều chỉnh tần số',
          'Nghiên cứu các kiểu sản lượng và sự biến đổi của năng lượng tái tạo',
          'Tính toán dung lượng pin tối ưu cho các ứng dụng khác nhau',
          'So sánh pin lithium-ion, pin dòng chảy và các công nghệ khác',
          'Thiết kế hệ thống chuyển đổi điện và giao diện lưới điện',
          'Thực hiện phân tích kinh tế với các nguồn doanh thu khác nhau',
        ],
        expectedResults: 'Một thiết kế hệ thống lưu trữ pin hoàn chỉnh với một trường hợp kinh doanh.',
        solution: 'Hệ thống 100MW/400MWh cung cấp thời gian 4 giờ để chuyển đổi cao điểm và điều chỉnh tần số.',
      },
      {
        title: 'Phân tích Lưu trữ Thủy điện Tích năng',
        description: 'Đánh giá các địa điểm lưu trữ thủy điện tích năng tiềm năng ở các vùng núi của Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Xác định các địa điểm phù hợp với chênh lệch độ cao thích hợp',
          'Phân tích lượng nước sẵn có và các ràng buộc về môi trường',
          'Tính toán dung lượng lưu trữ và hiệu suất khứ hồi',
          'Thiết kế hệ thống bơm-tua bin và cơ sở hạ tầng hồ chứa',
          'Đánh giá tác động môi trường và các biện pháp giảm thiểu',
          'So sánh kinh tế với các lựa chọn lưu trữ khác',
        ],
        expectedResults: 'Một nghiên cứu khả thi để phát triển thủy điện tích năng.',
        solution: 'Các ngọn núi phía Bắc Việt Nam mang lại tiềm năng tuyệt vời với chênh lệch độ cao hơn 500m.',
      },
    ],
    realWorldApplications: [
      'Lưu trữ pin quy mô lớn để tích hợp năng lượng tái tạo',
      'Lưu trữ thủy điện tích năng ở các vùng núi',
      'Lưu trữ năng lượng phân tán ở các khu vực đô thị',
      'Lưu trữ năng lượng công nghiệp để quản lý nhu cầu',
      'Cơ sở hạ tầng sạc xe điện có bộ lưu trữ',
    ],
    caseStudies: [
      {
        title: 'Dự án Thí điểm Lưới điện Thông minh của EVN',
        organization: 'EVN Thành phố Hồ Chí Minh',
        problem: 'Tích hợp mức độ cao của năng lượng mặt trời trên mái nhà với lưới điện phân phối đô thị',
        solution: 'Triển khai hệ thống lưu trữ pin phân tán và các hệ thống quản lý lưới điện tiên tiến',
        impact: 'Tăng 40% tỷ lệ thâm nhập năng lượng tái tạo với sự ổn định lưới điện được cải thiện',
        innovations: [
          'Lưu trữ phân tán hiệu quả hơn lưu trữ tập trung ở các khu vực đô thị',
          'Các bộ biến tần thông minh rất quan trọng đối với sự ổn định của lưới điện',
          'Sự tham gia của khách hàng rất quan trọng đối với các chương trình đáp ứng nhu cầu',
          'Khung pháp lý cần được cập nhật cho các công nghệ mới',
        ],
      },
    ],
    resources: [
      {
        title: 'Cơ quan Năng lượng Tái tạo Quốc tế (IRENA)',
        url: 'https://www.irena.org/',
        type: 'Tổ chức Quốc tế',
      },
    ],
    vietnamContext: {
      title: 'Lưu trữ Năng lượng: Chìa khóa cho An ninh Năng lượng',
      content: [
        'Khi tỷ lệ điện mặt trời và điện gió tăng lên, tính không ổn định của chúng (chỉ phát điện khi có nắng, có gió) đặt ra thách thức lớn cho lưới điện Việt Nam. Hệ thống lưu trữ năng lượng (Energy Storage Systems - ESS) chính là giải pháp.',
        'Việt Nam đang nghiên cứu và thí điểm các giải pháp lưu trữ khác nhau, từ pin lithium-ion quy mô lớn, thủy điện tích năng, cho đến các hệ thống pin nhỏ hơn tại các hộ gia đình và nhà máy. Đây là một lĩnh vực công nghệ mới và đầy tiềm năng.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Vũ Ngọc Sơn',
      title: 'Trưởng phòng Nghiên cứu Lưới điện Thông minh',
      company: 'Đại học Bách Khoa Hà Nội (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Nếu năng lượng tái tạo là trái tim của hệ thống điện tương lai, thì lưu trữ năng lượng chính là bộ não và hệ tuần hoàn, đảm bảo dòng chảy năng lượng luôn ổn định và thông suốt.',
    },
    quizzes: [
      {
        question: 'Tại sao hệ thống lưu trữ năng lượng lại quan trọng đối với năng lượng tái tạo?',
        options: [
          'Để làm cho năng lượng tái tạo rẻ hơn',
          'Để lưu trữ năng lượng khi sản xuất dư thừa và phát ra khi cần thiết, giúp ổn định lưới điện',
          'Để tăng công suất của các nhà máy điện',
          'Để thay thế hoàn toàn lưới điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Năng lượng mặt trời và gió có tính biến đổi. Hệ thống lưu trữ giúp "làm phẳng" sự biến đổi này bằng cách tích trữ năng lượng vào ban ngày (nhiều nắng) hoặc khi gió mạnh, và cung cấp lại cho lưới điện vào buổi tối hoặc khi lặng gió.',
      },
      {
        question: 'Đâu là công nghệ lưu trữ năng lượng phổ biến nhất hiện nay cho các ứng dụng quy mô lớn?',
        options: ['Pin AA', 'Pin Lithium-ion', 'Bánh đà (Flywheels)', 'Tụ điện'],
        correctAnswerIndex: 1,
        explanation:
          'Nhờ sự phát triển của ngành công nghiệp xe điện, pin Lithium-ion đã có những bước tiến vượt bậc về giá thành và mật độ năng lượng, trở thành công nghệ hàng đầu cho các hệ thống lưu trữ năng lượng từ quy mô nhỏ đến lớn.',
      },
    ],
  },
  {
    id: 'hydroelectric-systems',
    title: 'Thủy điện & Thủy điện quy mô nhỏ',
    description:
      'Khám phá công nghệ thủy điện từ các đập lớn đến các hệ thống thủy điện siêu nhỏ. Tập trung vào nguồn tài nguyên nước dồi dào của Việt Nam và các ứng dụng quy mô nhỏ.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=wzc99DVGhcE',
    imageUrl: 'https://i.ytimg.com/vi/wzc99DVGhcE/hqdefault.jpg',
    objectives: [
      'Hiểu các loại tua bin thủy điện và tiêu chí lựa chọn',
      'Tìm hiểu về đánh giá tác động môi trường cho các dự án thủy điện',
      'Làm chủ thiết kế thủy điện quy mô nhỏ để điện khí hóa nông thôn',
      'Khám phá thủy điện tích năng để cân bằng lưới điện',
    ],
    prerequisites: [
      'Cơ học chất lỏng và thủy lực cơ bản',
      'Hiểu biết về máy phát điện',
      'Nhận thức về khoa học môi trường',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Thủy điện Siêu nhỏ',
        description:
          'Thiết kế một hệ thống thủy điện siêu nhỏ cho một ngôi làng vùng sâu vùng xa ở vùng núi Việt Nam bằng cách sử dụng các nguồn nước địa phương.',
        difficulty: 'Trung bình',
        procedure: [
          'Đo tốc độ dòng chảy của nước và sự thay đổi theo mùa',
          'Tính toán cột nước có sẵn và tiềm năng công suất thô',
          'Chọn loại tua bin phù hợp (Pelton, dòng chảy ngang, Turgo)',
          'Thiết kế cấu trúc cửa vào và hệ thống ống dẫn nước',
          'Định cỡ máy phát điện và hệ thống điều khiển',
          'Lập kế hoạch các quy trình lắp đặt và bảo trì',
        ],
        expectedResults: 'Một hệ thống thủy điện siêu nhỏ hoàn chỉnh cung cấp điện đáng tin cậy cho làng.',
        solution: 'Hệ thống tua bin dòng chảy ngang 25kW phục vụ 50 hộ gia đình với hoạt động 6 giờ mỗi ngày.',
      },
    ],
    realWorldApplications: [
      'Các đập thủy điện quy mô lớn như Sơn La và Hòa Bình',
      'Thủy điện quy mô nhỏ cho các cộng đồng miền núi nông thôn',
      'Các hệ thống chạy trên sông với tác động môi trường tối thiểu',
      'Các hệ thống tích năng trong các ứng dụng lưới điện',
      'Các hệ thống thủy điện tích hợp tưới tiêu',
    ],
    caseStudies: [
      {
        title: 'Chương trình Thủy điện Quy mô nhỏ của Việt Nam',
        organization: 'Các tỉnh miền núi phía Bắc Việt Nam',
        problem: 'Cung cấp điện cho các làng vùng sâu vùng xa với kết nối lưới điện tối thiểu',
        solution: 'Phát triển các hệ thống thủy điện siêu nhỏ được tiêu chuẩn hóa với các mô hình sở hữu cộng đồng',
        impact: 'Hơn 1.000 ngôi làng được điện khí hóa với độ tin cậy của hệ thống là 95%',
        innovations: [
          'Đào tạo cộng đồng rất quan trọng cho sự thành công lâu dài',
          'Các thiết kế được tiêu chuẩn hóa giúp giảm chi phí và đơn giản hóa việc bảo trì',
          'Giám sát môi trường đảm bảo hoạt động bền vững',
          'Các mô hình chia sẻ doanh thu cung cấp kinh phí bảo trì',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Thủy điện nhỏ Việt Nam',
        url: 'http://vsha.org.vn/',
        type: 'Hiệp hội ngành',
      },
    ],
    vietnamContext: {
      title: 'Thủy điện: Xương sống và Tương lai Bền vững',
      content: [
        'Thủy điện từ lâu đã là xương sống của hệ thống điện Việt Nam, với các nhà máy lớn như Hòa Bình, Sơn La. Tuy nhiên, tiềm năng thủy điện lớn đã gần cạn kiệt và các vấn đề môi trường ngày càng được quan tâm hơn.',
        'Xu hướng hiện nay là phát triển các dự án thủy điện nhỏ và siêu nhỏ (micro-hydro) ở các vùng sâu vùng xa, kết hợp với mục tiêu xóa đói giảm nghèo và phát triển nông thôn. Thủy điện tích năng cũng được xem là một giải pháp lưu trữ năng lượng quy mô lớn hiệu quả.',
      ],
    },
    careerConnect: {
      name: 'Ông Hoàng Văn Chất',
      title: 'Chuyên gia Thủy điện',
      company: 'Tập đoàn Điện lực Việt Nam (EVN)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Khai thác năng lượng từ dòng nước là một trong những hình thức năng lượng tái tạo lâu đời nhất, nhưng nó vẫn còn rất nhiều tiềm năng để đổi mới. Thách thức của thế hệ chúng tôi là làm cho thủy điện trở nên thông minh hơn, linh hoạt hơn và thân thiện hơn với môi trường.',
    },
    quizzes: [
      {
        question: 'Thủy điện "tích năng" (pumped storage) hoạt động như thế nào?',
        options: [
          'Sử dụng dòng chảy tự nhiên của sông',
          'Bơm nước từ hồ chứa thấp lên hồ chứa cao hơn khi thừa điện, và xả xuống để phát điện khi thiếu điện',
          'Chỉ hoạt động vào mùa mưa',
          'Là một loại pin hóa học',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thủy điện tích năng hoạt động như một cục pin khổng lồ. Nó sử dụng điện giá rẻ (thường là từ năng lượng tái tạo vào giờ thấp điểm) để bơm nước lên cao, và biến thế năng của nước đó thành điện khi lưới điện có nhu cầu cao.',
      },
      {
        question: 'Đâu là một ưu điểm của thủy điện nhỏ so với thủy điện lớn?',
        options: [
          'Sản xuất nhiều điện hơn',
          'Ít tác động đến môi trường và hệ sinh thái hơn',
          'Chi phí xây dựng cao hơn',
          'Yêu cầu công nghệ phức tạp hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thủy điện nhỏ thường không yêu cầu xây dựng các đập lớn, ít ảnh hưởng đến dòng chảy tự nhiên của sông và hệ sinh thái xung quanh, đồng thời phù hợp để cung cấp điện cho các cộng đồng nhỏ, biệt lập.',
      },
    ],
  },
  {
    id: 'renewable-economics-policy',
    title: 'Kinh tế & Chính sách Năng lượng Tái tạo tại Việt Nam',
    description:
      'Hiểu về kinh tế, khung chính sách và các mô hình kinh doanh để phát triển năng lượng tái tạo tại Việt Nam. Cần thiết cho việc phát triển dự án và các quyết định đầu tư.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=eFf4CnMqs40',
    imageUrl: 'https://i.ytimg.com/vi/eFf4CnMqs40/hqdefault.jpg',
    objectives: [
      'Hiểu các chính sách và ưu đãi về năng lượng tái tạo của Việt Nam',
      'Tìm hiểu về tài chính dự án và các cơ cấu đầu tư',
      'Làm chủ các tính toán LCOE và phân tích kinh tế',
      'Khám phá các mô hình kinh doanh và các nguồn doanh thu',
    ],
    prerequisites: [
      'Kinh tế và phân tích tài chính cơ bản',
      'Hiểu biết về các công nghệ năng lượng tái tạo',
      'Quen thuộc với các khái niệm quản lý dự án',
    ],
    exercises: [
      {
        title: 'Phân tích Đầu tư Năng lượng Tái tạo',
        description: 'Thực hiện một phân tích tài chính hoàn chỉnh cho một dự án năng lượng tái tạo tại Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Nghiên cứu các mức giá FIT (Biểu giá điện hỗ trợ) hiện tại và các ưu đãi chính sách',
          'Tính toán chi phí vốn và chi phí vận hành',
          'Xây dựng các dự báo dòng tiền trong suốt vòng đời của dự án',
          'Thực hiện phân tích độ nhạy đối với các biến số chính',
          'Đánh giá các lựa chọn tài chính và các cơ cấu nợ',
          'Tính toán IRR, NPV và thời gian hoàn vốn',
        ],
        expectedResults: 'Một đề xuất đầu tư hoàn chỉnh với đánh giá rủi ro.',
        solution: 'Các dự án năng lượng mặt trời cho thấy IRR 12-15% với các mức giá FIT hiện tại của Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Các chính sách FIT thúc đẩy phát triển năng lượng mặt trời và gió',
      'Trái phiếu xanh tài trợ cho các dự án tái tạo',
      'Các hợp đồng mua bán điện doanh nghiệp (PPA)',
      'Các chương trình điện khí hóa nông thôn',
      'Đo đếm điện năng cho thế hệ phân tán',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Phát triển Năng lượng Tái tạo của Việt Nam',
        organization: 'Chính phủ Việt Nam',
        problem:
          'Chuyển đổi từ hệ thống điện phụ thuộc vào than đá sang lưới điện chủ yếu là năng lượng tái tạo vào năm 2050',
        solution: 'Thực hiện một khung chính sách toàn diện với các ưu đãi dành riêng cho từng công nghệ',
        impact: 'Công suất năng lượng tái tạo tăng từ 5% lên 12% trong 5 năm (2015-2020)',
        innovations: [
          'Biểu giá điện hỗ trợ có hiệu quả để phát triển thị trường nhanh chóng',
          'Nâng cấp cơ sở hạ tầng lưới điện là điều cần thiết để tích hợp năng lượng tái tạo',
          'Các yêu cầu về hàm lượng nội địa hỗ trợ ngành công nghiệp trong nước',
          'Đấu thầu cạnh tranh thay thế FIT để giảm chi phí',
        ],
      },
    ],
    resources: [
      {
        title: 'Bộ Công Thương Việt Nam',
        url: 'https://www.moit.gov.vn/',
        type: 'Cơ quan Chính phủ',
      },
    ],
    vietnamContext: {
      title: 'Chính sách Năng lượng Tái tạo: Động lực và Thách thức',
      content: [
        'Chính sách giá FIT (Feed-in Tariff) của Việt Nam đã tạo ra một cú hích mạnh mẽ, thu hút hàng tỷ USD đầu tư vào điện mặt trời và điện gió. Tuy nhiên, sự phát triển quá nóng cũng gây áp lực lớn lên hạ tầng lưới điện.',
        'Hiện tại, Việt Nam đang chuyển dịch sang cơ chế đấu thầu cạnh tranh và Hợp đồng Mua bán điện trực tiếp (DPPA), cho phép các doanh nghiệp lớn mua điện trực tiếp từ các nhà sản xuất năng lượng tái tạo. Đây là những bước đi quan trọng để tạo ra một thị trường năng lượng cạnh tranh và bền vững hơn.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Nguyễn Thị Thu Trang',
      title: 'Chuyên gia, Mảng Năng lượng & Cơ sở hạ tầng',
      company: 'Baker & McKenzie Việt Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Làm luật trong ngành năng lượng tái tạo là bạn đang tham gia định hình tương lai. Mỗi điều khoản trong hợp đồng, mỗi ý kiến đóng góp cho chính sách đều có thể ảnh hưởng đến việc hàng triệu người dân được sử dụng năng lượng sạch.',
    },
    quizzes: [
      {
        question: 'Giá FIT (Feed-in Tariff) là gì?',
        options: [
          'Giá điện người dân phải trả',
          'Một mức giá điện ưu đãi, cố định mà chính phủ đảm bảo trả cho các nhà sản xuất năng lượng tái tạo trong một khoảng thời gian nhất định',
          'Thuế môi trường đối với năng lượng hóa thạch',
          'Giá cổ phiếu của các công ty năng lượng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Giá FIT là một công cụ chính sách mạnh mẽ để khuyến khích đầu tư vào năng lượng tái tạo trong giai đoạn đầu, bằng cách đảm bảo một mức lợi nhuận hấp dẫn và giảm rủi ro cho nhà đầu tư.',
      },
      {
        question: 'Hợp đồng Mua bán điện trực tiếp (DPPA) cho phép điều gì?',
        options: [
          'Chính phủ bán điện cho dân',
          'Các doanh nghiệp (ví dụ: nhà máy) mua điện trực tiếp từ các nhà phát triển năng lượng tái tạo',
          'Người dân bán lại điện cho nhau',
          'Chỉ các công ty nước ngoài được mua điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'DPPA tạo ra một thị trường tự do hơn, nơi các doanh nghiệp có nhu cầu sử dụng năng lượng sạch lớn có thể ký hợp đồng dài hạn trực tiếp với các nhà máy điện mặt trời, điện gió, giúp họ đạt được các mục tiêu về phát triển bền vững.',
      },
    ],
  },
];
