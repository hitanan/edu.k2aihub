import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface RealEstateTechLesson extends BaseLessonData {
  measurableROI?: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export const realEstateTechnologyLessons: RealEstateTechLesson[] = [
  {
    id: 'proptech-innovation-fundamentals',
    title: 'Đổi mới PropTech & Chuyển đổi số Cơ bản',
    description:
      'Khám phá cuộc cách mạng PropTech đang thay đổi ngành bất động sản toàn cầu. Từ các ứng dụng di động đến định giá bằng AI, hồ sơ bất động sản trên blockchain đến hợp đồng thông minh. Tìm hiểu các xu hướng, công nghệ và mô hình kinh doanh đang định hình lại ngành bất động sản.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=eZ7b5Phuk7g',
    imageUrl: 'https://i.ytimg.com/vi/eZ7b5Phuk7g/hqdefault.jpg',
    objectives: [
      'Hiểu hệ sinh thái PropTech và các bên liên quan chính trên thị trường toàn cầu',
      'Phân tích các công nghệ đột phá đang thay đổi chuỗi giá trị bất động sản',
      'Đánh giá cơ hội và thách thức trong đổi mới PropTech',
      'Thiết kế lộ trình chuyển đổi số cho các doanh nghiệp bất động sản',
      'Triển khai các giải pháp công nghệ để cải thiện hiệu quả và trải nghiệm khách hàng',
    ],
    prerequisites: [
      'Kiến thức cơ bản về thị trường bất động sản và giao dịch nhà đất',
      'Hiểu biết về công nghệ số và ứng dụng di động',
      'Hiểu biết cơ bản về fintech và dịch vụ tài chính',
    ],
    exercises: [
      {
        title: 'Phân tích Thị trường PropTech & Đánh giá Cơ hội',
        description: 'Phân tích thị trường PropTech Việt Nam và xác định các cơ hội tăng trưởng.',
        difficulty: 'Trung bình',
        materials: [
          'Cơ sở dữ liệu nghiên cứu thị trường',
          'Cơ sở dữ liệu các công ty PropTech',
          'Báo cáo thị trường bất động sản',
          'Các khung phân tích ngành',
        ],
        procedure: [
          'Nghiên cứu các xu hướng PropTech toàn cầu và các mô hình kinh doanh thành công',
          'Phân tích các "điểm đau" của thị trường bất động sản Việt Nam',
          'Lập bản đồ các công ty PropTech chủ chốt trong hệ sinh thái Việt Nam',
          'Xác định các phân khúc thị trường chưa được phục vụ và các khoảng trống công nghệ',
          'Đánh giá môi trường pháp lý và các yêu cầu tuân thủ',
          'Đánh giá quy mô thị trường và tiềm năng doanh thu cho các mảng PropTech khác nhau',
          'Tạo báo cáo cơ hội PropTech toàn diện',
        ],
        expectedResults:
          'Một bản phân tích thị trường chi tiết với hơn 5 cơ hội PropTech đã được xác thực cho thị trường Việt Nam.',
        solution:
          'Sử dụng các khung phân tích như SWOT, Năm lực lượng cạnh tranh của Porter và định cỡ thị trường TAM-SAM-SOM. Nghiên cứu các công ty như PropertyGuru, Batdongsan.com.vn và các công ty quốc tế như Zillow, Compass để hiểu các thông lệ tốt nhất.',
      },
      {
        title: 'Thiết kế Nền tảng Bất động sản Số',
        description: 'Thiết kế một nền tảng số toàn diện cho các giao dịch bất động sản.',
        difficulty: 'Cao',
        materials: [
          'Công cụ thiết kế UI/UX',
          'Phần mềm thiết kế cơ sở dữ liệu',
          'Tài liệu API',
          'Thông tin chi tiết từ nghiên cứu người dùng',
        ],
        procedure: [
          'Tiến hành nghiên cứu người dùng với người mua, người bán, môi giới và chủ đầu tư',
          'Thiết kế luồng trải nghiệm người dùng cho các hành trình của các bên liên quan khác nhau',
          'Tạo wireframe và các nguyên mẫu tương tác',
          'Lập kế hoạch kiến trúc cơ sở dữ liệu cho danh sách bất động sản và quản lý người dùng',
          'Thiết kế các điểm cuối API cho ứng dụng di động và tích hợp của bên thứ ba',
          'Triển khai các biện pháp bảo mật cho các giao dịch tài chính',
          'Lập kế hoạch các chiến lược tối ưu hóa hiệu suất và khả năng mở rộng',
        ],
        expectedResults:
          'Một thiết kế nền tảng hoàn chỉnh với các thông số kỹ thuật và giao diện đã được người dùng kiểm thử.',
        solution:
          'Thực hiện theo phương pháp tư duy thiết kế với cách tiếp cận lấy con người làm trung tâm. Sử dụng các công cụ như Figma để thiết kế UI, Draw.io cho kiến trúc hệ thống và Postman cho tài liệu API. Cân nhắc kiến trúc microservices để có khả năng mở rộng.',
      },
    ],
    realWorldApplications: [
      'Zillow đã cách mạng hóa việc tìm kiếm bất động sản với các mô hình định giá tự động (AVM)',
      'Opendoor đã tạo ra nền tảng mua nhà tức thì với giá cả dựa trên dữ liệu',
      'WeWork đã thay đổi bất động sản thương mại với các khái niệm không gian làm việc linh hoạt',
      'Compass sử dụng AI để kết nối môi giới với các khách hàng tiềm năng đủ điều kiện và tối ưu hóa tiếp thị',
    ],
    caseStudies: [
      {
        title: 'Chuyển đổi số của PropertyGuru tại Đông Nam Á',
        organization: 'Tập đoàn PropertyGuru',
        problem:
          'Các thị trường bất động sản phân mảnh trên khắp Đông Nam Á với việc áp dụng kỹ thuật số và tính minh bạch còn hạn chế',
        solution:
          'Nền tảng PropTech toàn diện với danh sách bất động sản, công cụ cho môi giới, dịch vụ tài chính và phân tích dữ liệu',
        impact:
          'Hơn 30 triệu danh sách bất động sản, hơn 25 triệu người dùng hàng tháng, mở rộng ra 4 quốc gia, định giá IPO 1,8 tỷ USD',
        innovations: [
          'Tìm kiếm bất động sản ưu tiên thiết bị di động',
          'Công cụ tăng năng suất cho môi giới',
          'Tích hợp thị trường thế chấp',
          'Phân tích dữ liệu bất động sản',
        ],
      },
    ],
    resources: [
      {
        title: 'PropTech101 - Tổng quan về ngành',
        url: 'https://www.proptech101.com/',
        type: 'Nền tảng',
      },
      {
        title: 'Trung tâm Kỹ thuật số Xây dựng Anh',
        url: 'https://www.cdbb.cam.ac.uk/',
        type: 'Nghiên cứu',
      },
    ],
    vietnamContext: {
      title: 'Sự bùng nổ PropTech tại Việt Nam',
      content: [
        'Thị trường PropTech Việt Nam đang phát triển nhanh chóng, được thúc đẩy bởi dân số trẻ, am hiểu công nghệ và tốc độ đô thị hóa cao. Các nền tảng như Batdongsan.com.vn (thuộc PropertyGuru) và Rever đã trở thành những công cụ không thể thiếu.',
        'Thách thức lớn nhất là tính minh bạch của thị trường và dữ liệu phân mảnh. Các startup PropTech thành công là những startup giải quyết được bài toán này, cung cấp thông tin đáng tin cậy và quy trình giao dịch mượt mà cho người dùng.',
      ],
    },
    careerConnect: {
      name: 'Ông Phan Lê Thành Long',
      title: 'Nhà sáng lập & CEO, Rever',
      company: 'Rever.vn',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Công nghệ không thay thế môi giới, mà nó trao quyền cho những môi giới giỏi nhất. Sứ mệnh của chúng tôi là xây dựng một nền tảng công nghệ minh bạch, hiệu quả cho cả người mua, người bán và nhà môi giới tại Việt Nam.',
    },
    quizzes: [
      {
        question: 'PropTech là viết tắt của từ gì?',
        options: ['Property Technology', 'Proper Technology', 'Proposition Technology', 'Propaganda Technology'],
        correctAnswerIndex: 0,
        explanation:
          'PropTech là sự kết hợp giữa Property (Bất động sản) và Technology (Công nghệ), chỉ việc ứng dụng công nghệ vào ngành bất động sản.',
      },
      {
        question:
          'Đâu là một trong những "điểm đau" lớn nhất của thị trường BĐS Việt Nam mà PropTech đang cố gắng giải quyết?',
        options: [
          'Giá nhà quá cao',
          'Thiếu các dự án cao cấp',
          'Thiếu minh bạch thông tin và quy trình phức tạp',
          'Quá nhiều môi giới',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sự thiếu minh bạch về giá, pháp lý và quy hoạch, cùng với các thủ tục giấy tờ phức tạp là những rào cản lớn mà các nền tảng PropTech đang nỗ lực đơn giản hóa và cải thiện.',
      },
    ],
  },

  {
    id: 'virtual-property-tours-360-vr',
    title: 'Tham quan ảo 360° & Công nghệ xem nhà bằng VR',
    description:
      'Làm chủ nghệ thuật tạo ra trải nghiệm bất động sản ảo sống động. Từ chụp ảnh 360°, phát triển các chuyến tham quan VR đến các sơ đồ mặt bằng tương tác và dàn dựng thực tế tăng cường. Học cách sử dụng Matterport, CloudPano và phát triển VR tùy chỉnh để cách mạng hóa tiếp thị bất động sản.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LIuMSgU_Zq0',
    imageUrl: 'https://i.ytimg.com/vi/LIuMSgU_Zq0/hqdefault.jpg',
    objectives: [
      'Làm chủ các kỹ thuật chụp ảnh 360° và thiết lập thiết bị',
      'Phát triển các chuyến tham quan bất động sản VR bằng các nền tảng chuyên nghiệp',
      'Tạo sơ đồ mặt bằng tương tác với các điểm nóng có thể nhấp',
      'Triển khai các công cụ dàn dựng và trực quan hóa nội thất AR',
      'Tối ưu hóa các chuyến tham quan ảo cho thiết bị di động và chia sẻ trên mạng xã hội',
    ],
    prerequisites: [
      'Kỹ năng chụp ảnh cơ bản và hiểu biết về các nguyên tắc chiếu sáng',
      'Quen thuộc với các khái niệm mô hình 3D và nhận thức không gian',
      'Kinh nghiệm phát triển web hoặc sản xuất đa phương tiện',
    ],
    exercises: [
      {
        title: 'Quy trình Chụp ảnh Bất động sản 360° Chuyên nghiệp',
        description: 'Thiết lập quy trình làm việc hoàn chỉnh để chụp và xử lý hình ảnh bất động sản 360°.',
        difficulty: 'Trung bình',
        materials: [
          'Máy ảnh 360° (Insta360, Ricoh Theta)',
          'Chân máy và thiết bị ổn định',
          'Thiết bị chiếu sáng',
          'Phần mềm xử lý hậu kỳ',
        ],
        procedure: [
          'Lập kế hoạch các vị trí chụp tối ưu và chiến lược đặt máy ảnh',
          'Thiết lập ánh sáng để giảm thiểu bóng và đảm bảo độ phơi sáng nhất quán',
          'Chụp ảnh 360° với độ chồng chéo và độ bao phủ phù hợp',
          'Xử lý ảnh thô 360° bằng phần mềm ghép ảnh',
          'Chỉnh màu và nâng cao chất lượng hình ảnh',
          'Thêm các điểm nóng tương tác và lớp phủ thông tin',
          'Tải lên và nhúng các chuyến tham quan trên trang web và các nền tảng niêm yết',
        ],
        expectedResults:
          'Một chuyến tham quan bất động sản 360° chuyên nghiệp với điều hướng liền mạch và hình ảnh chất lượng cao.',
        solution:
          'Sử dụng kỹ thuật chụp ảnh HDR để có được ánh sáng tối ưu. Các công cụ như PTGui để ghép ảnh nâng cao, Adobe Lightroom để chỉnh màu và Kuula hoặc Roundme để lưu trữ các chuyến tham quan.',
      },
      {
        title: 'Phát triển Ứng dụng Bất động sản VR Tùy chỉnh',
        description: 'Phát triển ứng dụng VR cho trải nghiệm xem bất động sản sống động.',
        difficulty: 'Cao',
        materials: [
          'Unity 3D hoặc Unreal Engine',
          'Kính thực tế ảo (Oculus, HTC Vive)',
          'Mô hình 3D của bất động sản',
          'SDK và công cụ phát triển VR',
        ],
        procedure: [
          'Nhập mô hình 3D của bất động sản hoặc tạo từ ảnh 360°',
          'Thiết lập dự án VR với tỷ lệ và cài đặt thoải mái phù hợp',
          'Triển khai hệ thống dịch chuyển tức thời và di chuyển mượt mà',
          'Thêm các yếu tố tương tác như cửa, cửa sổ, điều khiển ánh sáng',
          'Tạo các yếu tố giao diện người dùng cho thông tin bất động sản và điều hướng',
          'Tối ưu hóa hiệu suất để có trải nghiệm VR mượt mà',
          'Kiểm tra với nhiều nền tảng và thiết bị VR',
          'Triển khai và phân phối qua các cửa hàng ứng dụng VR',
        ],
        expectedResults:
          'Một ứng dụng VR tùy chỉnh với hình ảnh bất động sản thực tế và điều khiển điều hướng trực quan.',
        solution:
          'Unity với XR Toolkit cung cấp khả năng phát triển VR đa nền tảng. Sử dụng các công cụ đo ảnh như RealityCapture để tạo mô hình 3D thực tế từ ảnh. Triển khai các mẫu tương tác VR thoải mái để tránh say tàu xe.',
      },
    ],
    realWorldApplications: [
      'Redfin tích hợp các chuyến tham quan nhà 3D vào các trang niêm yết để tăng tương tác của người dùng',
      'Các đại lý của RE/MAX sử dụng Matterport để tạo các bài thuyết trình niêm yết cao cấp',
      "Sotheby's International Realty cung cấp trải nghiệm VR cho các bất động sản sang trọng",
      'Keller Williams cung cấp đào tạo VR cho các đại lý sử dụng các công cụ niêm yết ảo',
    ],
    caseStudies: [
      {
        title: 'Việc áp dụng Tham quan ảo 3D của Matterport trong đại dịch COVID-19',
        organization: 'Matterport Inc.',
        problem:
          'Các hạn chế do COVID-19 đã ngăn cản việc xem nhà trực tiếp, gây ra sự chậm lại của thị trường bất động sản',
        solution: 'Triển khai nhanh chóng công nghệ tham quan ảo 3D với các khả năng chia sẻ nâng cao',
        impact: 'Tăng 400% việc tạo tham quan ảo, IPO 640 triệu USD, hợp tác với các thương hiệu bất động sản lớn',
        innovations: [
          'Tạo sơ đồ mặt bằng bằng AI',
          'Khả năng dàn dựng ảo',
          'Bảng điều khiển phân tích để theo dõi tương tác',
          'Tương thích VR trên di động',
        ],
      },
    ],
    resources: [
      {
        title: 'Học viện Matterport',
        url: 'https://matterport.com/academy',
        type: 'Đào tạo',
      },
      {
        title: 'Hướng dẫn Chụp ảnh 360°',
        url: 'https://www.360cities.net/blog',
        type: 'Hướng dẫn',
      },
    ],
    vietnamContext: {
      title: 'Tham quan ảo: Xu hướng tất yếu của BĐS Việt Nam',
      content: [
        'Đại dịch COVID-19 đã thúc đẩy mạnh mẽ việc áp dụng công nghệ tham quan ảo (virtual tour) tại Việt Nam. Các chủ đầu tư lớn như Vinhomes, Novaland, Sun Group đã tích hợp 360° tours và sa bàn ảo vào website của họ để tiếp cận khách hàng từ xa.',
        'Công nghệ này đặc biệt hiệu quả với phân khúc bất động sản nghỉ dưỡng và khách hàng ở nước ngoài, giúp họ trải nghiệm không gian một cách chân thực trước khi đưa ra quyết định đầu tư.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Ngọc Anh',
      title: 'Giám đốc Sáng tạo',
      company: 'VR360.com.vn (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Chúng tôi không chỉ bán một căn nhà, chúng tôi bán một giấc mơ, một không gian sống. Công nghệ VR/360° cho phép chúng tôi truyền tải giấc mơ đó một cách trọn vẹn và đầy cảm xúc nhất đến với khách hàng, dù họ ở bất cứ đâu.',
    },
    quizzes: [
      {
        question: 'Nền tảng nào sau đây rất phổ biến để tạo các tour tham quan 3D cho bất động sản?',
        options: ['Photoshop', 'Matterport', 'AutoCAD', 'Excel'],
        correctAnswerIndex: 1,
        explanation:
          'Matterport là một nền tảng hàng đầu thế giới, cung cấp cả phần cứng (camera 3D) và phần mềm để tạo ra các mô hình 3D (digital twin) và tour tham quan ảo cho không gian vật lý.',
      },
      {
        question: 'Lợi ích chính của việc sử dụng virtual tour đối với người bán/chủ đầu tư là gì?',
        options: [
          'Tăng giá bán của bất động sản',
          'Tiếp cận được lượng khách hàng tiềm năng lớn hơn và sàng lọc khách hàng hiệu quả',
          'Thay thế hoàn toàn vai trò của môi giới',
          'Chỉ phù hợp với các bất động sản giá rẻ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Virtual tour giúp tiếp cận khách hàng 24/7 trên toàn cầu, đồng thời giúp sàng lọc những khách hàng thực sự quan tâm, tiết kiệm thời gian và chi phí cho các buổi tham quan thực tế không cần thiết.',
      },
    ],
  },

  {
    id: 'smart-buildings-iot-management',
    title: 'Tòa nhà Thông minh & Hệ thống Quản lý Bất động sản IoT',
    description:
      'Khám phá tương lai của quản lý tòa nhà với các cảm biến IoT, tự động hóa nhà thông minh và bảo trì dự đoán. Tìm hiểu cách tích hợp các hệ thống khác nhau từ HVAC, an ninh, chiếu sáng đến quản lý năng lượng. Làm chủ các nền tảng như SmartThings, Home Assistant và tự động hóa tòa nhà doanh nghiệp.',
    duration: '230 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=8zXaMnq8i80',
    imageUrl: 'https://i.ytimg.com/vi/8zXaMnq8i80/hqdefault.jpg',
    objectives: [
      'Thiết kế kiến trúc IoT toàn diện cho các tòa nhà thông minh',
      'Triển khai hệ thống tự động hóa tòa nhà với điều khiển tập trung',
      'Phát triển các thuật toán bảo trì dự đoán bằng dữ liệu cảm biến',
      'Tạo các chiến lược tối ưu hóa năng lượng với giám sát thời gian thực',
      'Xây dựng các nền tảng tương tác với người thuê nhà có các tính năng của tòa nhà thông minh',
    ],
    prerequisites: [
      'Hiểu biết về các giao thức IoT (WiFi, Zigbee, Z-Wave, LoRa)',
      'Kiến thức cơ bản về hệ thống điện và hoạt động của HVAC',
      'Kinh nghiệm lập trình với Python, Node.js hoặc các ngôn ngữ tương tự',
    ],
    exercises: [
      {
        title: 'Thiết kế Mạng Cảm biến IoT cho Tòa nhà Văn phòng',
        description: 'Thiết kế một mạng cảm biến toàn diện để giám sát và điều khiển hoạt động của tòa nhà.',
        difficulty: 'Cao',
        materials: [
          'Cảm biến IoT (nhiệt độ, độ ẩm, sự hiện diện)',
          'Thiết bị cổng và bộ định tuyến',
          'Tài khoản nền tảng IoT đám mây',
          'Sơ đồ mặt bằng tòa nhà',
        ],
        procedure: [
          'Phân tích sơ đồ tòa nhà và xác định vị trí đặt cảm biến tối ưu',
          'Chọn các giao thức IoT phù hợp dựa trên phạm vi và yêu cầu về năng lượng',
          'Thiết kế cấu trúc liên kết mạng với khả năng dự phòng và mở rộng',
          'Thiết lập nền tảng IoT đám mây để thu thập và phân tích dữ liệu',
          'Triển khai các quy tắc điều khiển tự động cho hệ thống HVAC và chiếu sáng',
          'Tạo bảng điều khiển cho người quản lý cơ sở và người vận hành tòa nhà',
          'Kiểm tra độ tin cậy và thời gian phản hồi của hệ thống',
          'Lập tài liệu về các quy trình bảo trì và hướng dẫn khắc phục sự cố',
        ],
        expectedResults:
          'Một mạng IoT hoạt động đầy đủ với khả năng giám sát thời gian thực và điều khiển tòa nhà tự động.',
        solution:
          'Sử dụng AWS IoT Core hoặc Azure IoT Hub để kết nối đám mây. LoRaWAN cho các cảm biến tầm xa, công suất thấp. Triển khai giao thức MQTT để truyền dữ liệu hiệu quả. Tạo một bản sao kỹ thuật số của tòa nhà trên đám mây.',
      },
      {
        title: 'Phát triển Hệ thống Bảo trì Dự đoán',
        description: 'Xây dựng một hệ thống dựa trên ML để dự đoán hỏng hóc thiết bị và tối ưu hóa lịch trình bảo trì.',
        difficulty: 'Cao',
        materials: [
          'Dữ liệu bảo trì lịch sử',
          'Nguồn cấp dữ liệu cảm biến thời gian thực',
          'Nền tảng học máy',
          'API phần mềm quản lý bảo trì',
        ],
        procedure: [
          'Thu thập và làm sạch dữ liệu hiệu suất thiết bị lịch sử',
          'Thiết kế các đặc trưng từ dữ liệu cảm biến (rung, nhiệt độ, kiểu sử dụng)',
          'Huấn luyện các mô hình ML để dự đoán xác suất hỏng hóc',
          'Phát triển hệ thống cảnh báo để thông báo sớm',
          'Tích hợp với các quy trình quản lý bảo trì hiện có',
          'Tạo các công cụ phân tích chi phí-lợi ích cho việc lập lịch bảo trì',
          'Triển khai các mô hình với khả năng học liên tục',
          'Xây dựng bảng điều khiển báo cáo cho các nhóm quản lý cơ sở',
        ],
        expectedResults: 'Một hệ thống bảo trì dự đoán với độ chính xác hơn 80% trong việc dự đoán hỏng hóc.',
        solution:
          'Sử dụng phân tích chuỗi thời gian với mạng nơ-ron LSTM. Azure Machine Learning hoặc AWS SageMaker để huấn luyện mô hình. Tích hợp với các hệ thống CMMS như UpKeep hoặc Fiix để quản lý lệnh công việc.',
      },
    ],
    realWorldApplications: [
      'Tòa nhà The Edge ở Amsterdam - văn phòng bền vững nhất thế giới với 28.000 cảm biến',
      'Hudson Yards ở NYC sử dụng IoT để tối ưu hóa việc sử dụng năng lượng cho toàn bộ khu phát triển',
      'Sáng kiến quốc gia thông minh của Singapore tích hợp các tòa nhà với mạng IoT toàn thành phố',
      'Các văn phòng của WeWork sử dụng cảm biến chiếm dụng để tối ưu hóa việc sử dụng không gian và trải nghiệm của thành viên',
    ],
    caseStudies: [
      {
        title: 'Triển khai Tòa nhà Thông minh Lotte Tower',
        organization: 'Lotte World Tower, Seoul',
        problem: 'Quản lý tòa tháp đa năng 123 tầng với các hệ thống phức tạp và chi phí năng lượng cao',
        solution: 'Hệ thống quản lý tòa nhà tích hợp với cảm biến IoT, phân tích AI và điều khiển tự động',
        impact: 'Tiết kiệm 30% năng lượng, giảm 50% hỏng hóc thiết bị, cải thiện điểm hài lòng của người thuê nhà',
        innovations: [
          'Tối ưu hóa HVAC bằng AI',
          'Bảo trì thang máy dự đoán',
          'Chiếu sáng thông minh với phát hiện chiếm dụng',
          'Ứng dụng di động cho các dịch vụ của người thuê nhà',
        ],
      },
    ],
    resources: [
      {
        title: 'Building IoT - Hướng dẫn về Tòa nhà Thông minh',
        url: 'https://www.buildingiot.com/',
        type: 'Nền tảng',
      },
      {
        title: 'Tạp chí Tòa nhà Thông minh',
        url: 'https://www.smartbuildingsmagazine.com/',
        type: 'Xuất bản',
      },
    ],
    vietnamContext: {
      title: 'Tòa nhà thông minh tại các Đô thị Việt Nam',
      content: [
        'Xu hướng "Smart Building" đang trở nên phổ biến tại các thành phố lớn như Hà Nội và TP.HCM, đặc biệt trong các dự án văn phòng hạng A và chung cư cao cấp. Các khu đô thị mới như Ecopark, Phú Mỹ Hưng đang tiên phong áp dụng các giải pháp IoT.',
        'Chính phủ Việt Nam cũng đang thúc đẩy các sáng kiến "Thành phố thông minh", trong đó tòa nhà thông minh là một thành phần quan trọng, tập trung vào việc tối ưu hóa năng lượng, quản lý an ninh và nâng cao chất lượng sống cho cư dân.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hoàng Minh',
      title: 'Giám đốc Kỹ thuật Tòa nhà',
      company: 'Lotte Center Hanoi',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Quản lý một tòa nhà hiện đại không còn là công việc thủ công. Chúng tôi dựa vào dữ liệu từ hàng ngàn cảm biến để đưa ra quyết định, từ việc điều chỉnh nhiệt độ đến dự báo thời điểm cần bảo trì thang máy. Đó là sự kết hợp giữa kỹ thuật và khoa học dữ liệu.',
    },
    quizzes: [
      {
        question: 'IoT trong "Smart Building" là viết tắt của cụm từ nào?',
        options: [
          'Internal Office Technology',
          'Internet of Things',
          'Integrated Office Tools',
          'International Office Treaty',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Internet of Things (Vạn vật kết nối) là mạng lưới các thiết bị vật lý được tích hợp cảm biến, phần mềm và công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
      {
        question: 'Một lợi ích chính của hệ thống quản lý tòa nhà thông minh (BMS) là gì?',
        options: [
          'Giảm giá thuê văn phòng',
          'Tăng số lượng người làm việc trong tòa nhà',
          'Tối ưu hóa việc sử dụng năng lượng và giảm chi phí vận hành',
          'Làm cho tòa nhà trông đẹp hơn',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Bằng cách tự động điều khiển hệ thống chiếu sáng, HVAC (điều hòa không khí) dựa trên dữ liệu thời gian thực (như số người trong phòng), BMS có thể giúp giảm đáng kể lượng năng lượng tiêu thụ.',
      },
    ],
  },

  {
    id: 'real-estate-data-analytics-ai',
    title: 'Phân tích Dữ liệu Bất động sản & Trí tuệ Thị trường dựa trên AI',
    description:
      'Khai thác sức mạnh của dữ liệu lớn và trí tuệ nhân tạo để cách mạng hóa việc ra quyết định trong lĩnh vực bất động sản. Từ các mô hình định giá bất động sản, phân tích xu hướng thị trường đến phân tích đầu tư và đánh giá rủi ro. Làm chủ các công cụ như Python, Tableau và các nền tảng phân tích PropTech chuyên dụng.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=U2oEJKsPdHo',
    imageUrl: 'https://i.ytimg.com/vi/U2oEJKsPdHo/hqdefault.jpg',
    objectives: [
      'Phát triển các mô hình định giá tự động (AVM) bằng học máy',
      'Tạo các bảng điều khiển phân tích thị trường toàn diện với dữ liệu thời gian thực',
      'Xây dựng các công cụ phân tích đầu tư với khả năng đánh giá rủi ro',
      'Triển khai các công cụ đề xuất bất động sản cho người mua và nhà đầu tư',
      'Thiết kế các mô hình dự đoán cho xu hướng thị trường và biến động giá',
    ],
    prerequisites: [
      'Nền tảng vững chắc về thống kê và phân tích dữ liệu',
      'Kỹ năng lập trình bằng Python, R hoặc SQL',
      'Hiểu biết về các nguyên tắc cơ bản của bất động sản và động lực thị trường',
    ],
    exercises: [
      {
        title: 'Phát triển Mô hình Định giá Tự động (AVM)',
        description: 'Xây dựng một mô hình ML để ước tính giá trị bất động sản dựa trên nhiều nguồn dữ liệu.',
        difficulty: 'Cao',
        materials: [
          'Dữ liệu giao dịch bất động sản',
          'Dữ liệu nhân khẩu học và kinh tế',
          'Môi trường phát triển Python/R',
          'Thư viện học máy',
        ],
        procedure: [
          'Thu thập dữ liệu bất động sản toàn diện từ nhiều nguồn (MLS, hồ sơ công khai, điều tra dân số)',
          'Làm sạch và tiền xử lý dữ liệu, xử lý các giá trị bị thiếu và các giá trị ngoại lệ',
          'Thiết kế các đặc trưng bao gồm vị trí, đặc điểm bất động sản, chỉ số khu vực lân cận',
          'Chia dữ liệu thành các tập huấn luyện, xác thực và kiểm tra',
          'Huấn luyện nhiều thuật toán ML (Random Forest, XGBoost, Mạng nơ-ron)',
          'Đánh giá hiệu suất mô hình với các chỉ số khác nhau (MAE, MAPE, R²)',
          'Triển khai các phương pháp tập hợp để kết hợp nhiều mô hình',
          'Triển khai mô hình với các điểm cuối API cho các yêu cầu định giá thời gian thực',
        ],
        expectedResults: 'Một AVM với độ chính xác trong vòng 10% giá trị thị trường cho 80% bất động sản.',
        solution:
          'Sử dụng các thuật toán tăng cường độ dốc như XGBoost hoặc LightGBM để có hiệu suất tốt nhất. Kết hợp dữ liệu bên ngoài như xếp hạng trường học, thống kê tội phạm, các chỉ số kinh tế. Sử dụng phân tích không gian địa lý để nắm bắt các khoản phí bảo hiểm vị trí.',
      },
      {
        title: 'Bảng điều khiển Trí tuệ Thị trường Bất động sản',
        description:
          'Tạo một bảng điều khiển toàn diện để phân tích xu hướng thị trường và thông tin chi tiết về đầu tư.',
        difficulty: 'Trung bình',
        materials: [
          'Giấy phép Tableau hoặc Power BI',
          'Dữ liệu thị trường bất động sản',
          'Dữ liệu chỉ số kinh tế',
          'Công cụ thu thập dữ liệu web',
        ],
        procedure: [
          'Xác định các chỉ số thị trường chính và các chỉ số hiệu suất',
          'Thiết lập các đường ống dữ liệu tự động từ các nguồn khác nhau',
          'Thiết kế bố cục bảng điều khiển thân thiện với người dùng cho các cá nhân người dùng khác nhau',
          'Triển khai các khả năng lọc và xem chi tiết tương tác',
          'Tạo các mô hình dự báo cho các dự đoán xu hướng thị trường',
          'Thêm hệ thống cảnh báo cho những thay đổi thị trường quan trọng',
          'Tích hợp với các thiết bị di động để truy cập khi đang di chuyển',
          'Kiểm tra bảng điều khiển với các chuyên gia bất động sản để thu thập phản hồi',
        ],
        expectedResults:
          'Một bảng điều khiển trí tuệ thị trường tương tác với các bản cập nhật thời gian thực và thông tin chi tiết dự đoán.',
        solution:
          'Sử dụng API từ các nền tảng bất động sản, cơ sở dữ liệu của chính phủ, các nhà cung cấp dữ liệu kinh tế. Triển khai các quy trình ETL với các công cụ như Apache Airflow. Tạo thiết kế đáp ứng trên thiết bị di động với một khung đáp ứng.',
      },
    ],
    realWorldApplications: [
      'Zestimate AVM của Zillow cung cấp định giá bất động sản tức thì cho hơn 100 triệu ngôi nhà',
      'BlackRock sử dụng phân tích AI để quản lý danh mục đầu tư bất động sản trị giá hơn 20 tỷ USD',
      'CoStar cung cấp nền tảng dữ liệu và phân tích bất động sản thương mại toàn diện',
      'Reonomy cung cấp trí tuệ bất động sản thương mại dựa trên AI cho các nhà đầu tư',
    ],
    caseStudies: [
      {
        title: 'Thành công của Nền tảng AI Bất động sản Compass',
        organization: 'Compass Real Estate',
        problem: 'Các đại lý bất động sản cần các công cụ tốt hơn để xác định cơ hội và phục vụ khách hàng hiệu quả',
        solution:
          'Nền tảng dựa trên AI với phân tích thị trường, chấm điểm khách hàng tiềm năng và các đề xuất khách hàng được cá nhân hóa',
        impact: 'Định giá IPO 6,9 tỷ USD, hơn 19.000 đại lý áp dụng, tăng 40% năng suất của đại lý',
        innovations: [
          'Thuật toán chấm điểm khách hàng tiềm năng theo hành vi',
          'Báo cáo phân tích thị trường tự động',
          'Kết nối khách hàng dựa trên AI',
          'Đề xuất giá dự đoán',
        ],
      },
    ],
    resources: [
      {
        title: 'Khóa học Phân tích Dữ liệu Bất động sản - MIT',
        url: 'https://mitsloan.mit.edu/',
        type: 'Giáo dục',
      },
      {
        title: 'REIS (Giải pháp Thông tin Bất động sản)',
        url: 'https://www.reis.com/',
        type: 'Nhà cung cấp dữ liệu',
      },
    ],
    vietnamContext: {
      title: 'Dữ liệu và AI trong ngành BĐS Việt Nam',
      content: [
        'Các công ty tư vấn BĐS lớn như Savills, CBRE, JLL tại Việt Nam đang ngày càng phụ thuộc vào phân tích dữ liệu để đưa ra các báo cáo thị trường và tư vấn đầu tư. Dữ liệu về giá, tỷ lệ hấp thụ, và xu hướng nhân khẩu học được sử dụng để dự báo tiềm năng của các dự án.',
        'Tuy nhiên, chất lượng và tính nhất quán của dữ liệu BĐS tại Việt Nam vẫn là một thách thức. Các công ty PropTech có khả năng thu thập và chuẩn hóa dữ liệu lớn (Big Data) sẽ có lợi thế cạnh tranh rất lớn.',
      ],
    },
    careerConnect: {
      name: 'Chị Vũ Thị Phương Mai',
      title: 'Trưởng phòng Phân tích Dữ liệu',
      company: 'Savills Việt Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Trong bất động sản, câu "vị trí, vị trí, vị trí" đang dần được thay thế bởi "dữ liệu, dữ liệu, dữ liệu". Một quyết định đầu tư trị giá hàng triệu đô la ngày nay phải được hậu thuẫn bởi những phân tích sâu sắc từ dữ liệu chứ không chỉ là cảm tính.',
    },
    quizzes: [
      {
        question: 'AVM trong phân tích BĐS là viết tắt của gì?',
        options: [
          'Automated Valuation Model',
          'Advanced Virtual Machine',
          'Agent Verification Method',
          'Asset Value Management',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Automated Valuation Model (Mô hình định giá tự động) là các thuật toán sử dụng machine learning để ước tính giá trị của một bất động sản dựa trên các thuộc tính của nó và dữ liệu thị trường.',
      },
      {
        question: 'AI có thể giúp một nhà đầu tư bất động sản như thế nào?',
        options: [
          'Đảm bảo lợi nhuận 100%',
          'Xây dựng tòa nhà nhanh hơn',
          'Phân tích xu hướng thị trường và xác định các cơ hội đầu tư tiềm năng',
          'Miễn thuế bất động sản',
        ],
        correctAnswerIndex: 2,
        explanation:
          'AI có thể phân tích một lượng lớn dữ liệu để xác định các khu vực có tiềm năng tăng trưởng, dự báo sự thay đổi giá, và đề xuất các bất động sản phù hợp với tiêu chí của nhà đầu tư, giúp họ ra quyết định tốt hơn.',
      },
    ],
  },

  {
    id: 'blockchain-real-estate-fintech',
    title: 'Công nghệ Blockchain & Đổi mới FinTech Bất động sản',
    description:
      'Khám phá các ứng dụng tiên tiến của blockchain trong bất động sản từ hợp đồng thông minh, quyền sở hữu bất động sản được mã hóa đến các giải pháp tài chính phi tập trung. Tìm hiểu các giao thức DeFi cho bất động sản, chứng chỉ bất động sản NFT và tích hợp thanh toán bằng tiền điện tử.',
    duration: '210 phút',
    difficulty: 'Cao',
    videoUrl: 'https://www.youtube.com/watch?v=sqtsOx0iCPc',
    imageUrl: 'https://i.ytimg.com/vi/sqtsOx0iCPc/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc cơ bản của blockchain và các ứng dụng trong bất động sản',
      'Phát triển hợp đồng thông minh cho các giao dịch bất động sản và ký quỹ',
      'Triển khai các giải pháp mã hóa cho quyền sở hữu bất động sản phân đoạn',
      'Tạo các giao thức DeFi cho cho vay và đầu tư bất động sản',
      'Thiết kế chứng chỉ bất động sản dựa trên NFT và quản lý tài sản kỹ thuật số',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về công nghệ blockchain và tiền điện tử',
      'Kiến thức lập trình bằng Solidity hoặc các ngôn ngữ hợp đồng thông minh',
      'Quen thuộc với các khía cạnh pháp lý của các giao dịch bất động sản',
    ],
    exercises: [
      {
        title: 'Phát triển Hợp đồng Thông minh cho Ký quỹ Bất động sản',
        description:
          'Phát triển một hợp đồng thông minh Ethereum để tự động hóa quy trình ký quỹ giao dịch bất động sản.',
        difficulty: 'Cao',
        materials: [
          'Môi trường phát triển Solidity',
          'Quyền truy cập mạng thử nghiệm Ethereum',
          'Công cụ phát triển Web3',
          'Mẫu tài liệu pháp lý',
        ],
        procedure: [
          'Thiết kế kiến trúc hợp đồng cho các giao dịch bất động sản nhiều bên',
          'Triển khai logic ký quỹ với việc giải ngân vốn dựa trên các mốc quan trọng',
          'Thêm tích hợp oracle để xác minh dữ liệu bên ngoài',
          'Tạo cơ chế giải quyết tranh chấp và quy trình trọng tài',
          'Triển khai kiểm soát truy cập và quyền dựa trên vai trò',
          'Thêm các sự kiện và ghi nhật ký để giao dịch minh bạch',
          'Kiểm tra kỹ lưỡng hợp đồng trên mạng thử nghiệm với các kịch bản khác nhau',
          'Triển khai hợp đồng và tạo giao diện người dùng để tương tác',
        ],
        expectedResults:
          'Một hợp đồng thông minh chức năng xử lý ký quỹ bất động sản với việc thực thi minh bạch và tự động.',
        solution:
          'Sử dụng các thư viện OpenZeppelin để phát triển hợp đồng an toàn. Triển khai ví đa chữ ký để tăng cường bảo mật. Sử dụng các oracle của Chainlink cho các nguồn cấp dữ liệu bên ngoài như thẩm định giá bất động sản.',
      },
      {
        title: 'Nền tảng Mã hóa Bất động sản',
        description: 'Xây dựng một nền tảng cho quyền sở hữu bất động sản phân đoạn thông qua các token blockchain.',
        difficulty: 'Cao',
        materials: [
          'Khung phát triển Blockchain',
          'Thông số kỹ thuật tiêu chuẩn token',
          'Công cụ tuân thủ KYC/AML',
          'API định giá bất động sản',
        ],
        procedure: [
          'Thiết kế mô hình kinh tế token cho quyền sở hữu bất động sản phân đoạn',
          'Phát triển các token bảo mật ERC-1400 với sự tuân thủ quy định',
          'Tạo quy trình giới thiệu nhà đầu tư với xác minh KYC/AML',
          'Triển khai các cơ chế định giá bất động sản và token',
          'Xây dựng thị trường cho giao dịch token thứ cấp',
          'Thêm hệ thống phân phối cổ tức cho thu nhập cho thuê',
          'Tích hợp với các hệ thống ngân hàng truyền thống để chuyển đổi tiền pháp định',
          'Tạo bảng điều khiển nhà đầu tư với các công cụ quản lý danh mục đầu tư',
        ],
        expectedResults:
          'Một nền tảng mã hóa hoàn chỉnh cho phép đầu tư bất động sản phân đoạn với sự tuân thủ quy định.',
        solution:
          'Sử dụng các tiêu chuẩn token bảo mật như ERC-1400 để tuân thủ. Tích hợp với các dịch vụ như Polymath hoặc Harbor cho các khung pháp lý. Sử dụng IPFS để lưu trữ tài liệu phi tập trung.',
      },
    ],
    realWorldApplications: [
      'RealT mã hóa các bất động sản cho thuê cho phép các nhà đầu tư toàn cầu đầu tư với mức tối thiểu 1 USD',
      'Propy tạo điều kiện cho các giao dịch bất động sản quốc tế bằng cách sử dụng blockchain và tiền điện tử',
      'Republic Real Estate cung cấp các khoản đầu tư bất động sản thương mại được mã hóa',
      'Chính phủ Dubai có kế hoạch thực hiện 100% giao dịch bất động sản trên blockchain vào năm 2025',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Bất động sản Blockchain của Dubai',
        organization: 'Cục Đất đai Dubai',
        problem: 'Quy trình giao dịch bất động sản phức tạp với nhiều bên trung gian và thủ tục kéo dài',
        solution: 'Nền tảng blockchain toàn diện để đăng ký, giao dịch bất động sản và tích hợp thành phố thông minh',
        impact: 'Mục tiêu 100% giao dịch kỹ thuật số vào năm 2025, giảm thời gian xử lý từ vài tuần xuống còn vài phút',
        innovations: [
          'Sổ đăng ký bất động sản Blockchain',
          'Tự động hóa hợp đồng thông minh',
          'Xác minh danh tính kỹ thuật số',
          'Hệ thống thanh toán tích hợp',
        ],
      },
    ],
    resources: [
      {
        title: 'Sáng kiến Blockchain Bất động sản',
        url: 'https://www.reblockchain.org/',
        type: 'Hiệp hội ngành',
      },
      {
        title: 'Hướng dẫn Phát triển Bất động sản Ethereum',
        url: 'https://ethereum.org/en/developers/docs/',
        type: 'Tài liệu',
      },
    ],
    vietnamContext: {
      title: 'Blockchain và BĐS: Tiềm năng và Thách thức tại Việt Nam',
      content: [
        'Ứng dụng blockchain trong bất động sản tại Việt Nam vẫn còn ở giai đoạn rất sơ khai và thử nghiệm. Các dự án chủ yếu tập trung vào việc "token hóa" bất động sản để kêu gọi vốn đầu tư theo hình thức sở hữu chung (fractional ownership).',
        'Thách thức lớn nhất là hành lang pháp lý chưa rõ ràng cho việc công nhận tài sản số và hợp đồng thông minh trong giao dịch BĐS. Tuy nhiên, tiềm năng về tăng tính minh bạch, giảm chi phí và thời gian giao dịch là rất lớn và đang thu hút sự quan tâm của nhiều nhà đổi mới.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Trịnh Hoàng An',
      title: 'Chuyên gia Tư vấn, LegalTech',
      company: 'Công ty Luật TNHH An và Cộng sự (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Công nghệ Blockchain có thể giải quyết được nhiều vấn đề cố hữu của thị trường BĐS. Vai trò của chúng tôi là làm cầu nối giữa công nghệ và pháp luật, đảm bảo rằng sự đổi mới diễn ra trong một khuôn khổ an toàn và được pháp luật bảo vệ.',
    },
    quizzes: [
      {
        question: '"Token hóa" bất động sản có nghĩa là gì?',
        options: [
          'Xây dựng một token để quảng cáo BĐS',
          'Chuyển đổi quyền sở hữu một bất động sản thành các token kỹ thuật số trên blockchain',
          'Sử dụng token để trả tiền thuê nhà',
          'Tạo ra một bản sao ảo của BĐS',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Token hóa cho phép chia nhỏ một bất động sản thành nhiều phần (token), giúp nhiều nhà đầu tư nhỏ có thể cùng sở hữu và giao dịch các phần sở hữu đó một cách dễ dàng.',
      },
      {
        question: 'Hợp đồng thông minh (Smart Contract) có thể giúp gì trong giao dịch BĐS?',
        options: [
          'Tự động thương lượng giá',
          'Tự động thực thi các điều khoản (ví dụ: chuyển tiền khi các điều kiện pháp lý được đáp ứng) mà không cần bên trung gian',
          'Tìm kiếm người mua tiềm năng',
          'Thiết kế nội thất cho căn nhà',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Smart contract là các chương trình máy tính tự động thực thi các điều khoản đã được lập trình sẵn, giúp giảm thiểu vai trò của các bên trung gian (như ngân hàng, công chứng), từ đó giảm chi phí và tăng tốc độ giao dịch.',
      },
    ],
  },
];
