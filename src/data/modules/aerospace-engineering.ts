import { BaseLessonData } from '@/types/lesson-base';

export interface AerospaceEngineeringLesson extends BaseLessonData {
  aerospaceApplications?: string[];
  flightPrinciples?: string[];
  spaceTechnology?: string[];
  safetyStandards?: string[];
}

export const aerospaceEngineeringLessons: AerospaceEngineeringLesson[] = [
  {
    id: 'aircraft-design-aerodynamics',
    title: 'Thiết kế Máy bay & Nguyên lý Khí động lực học',
    description:
      'Khám phá các nguyên tắc thiết kế máy bay, lý thuyết khí động lực học và cơ học bay. Tập trung vào sự phát triển của ngành hàng không Việt Nam và các cơ hội với Vietnam Airlines, Vietjet và lĩnh vực hàng không vũ trụ mới nổi.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=SN1weEr56rQ',
    imageUrl: 'https://i.ytimg.com/vi/AkC5xAy3WAY/hqdefault.jpg',
    objectives: [
      'Nắm vững các nguyên tắc khí động lực học cơ bản và phân tích luồng không khí',
      'Hiểu quy trình thiết kế máy bay từ ý tưởng đến kỹ thuật chi tiết',
      'Áp dụng cơ học bay để phân tích hiệu suất và sự ổn định của máy bay',
      'Thiết kế các bộ phận máy bay: cánh, thân, bề mặt điều khiển',
      'Nắm bắt các quy định hàng không và quy trình chứng nhận của Việt Nam',
    ],
    prerequisites: [
      'Nền tảng vững chắc về vật lý, toán học và cơ học kỹ thuật',
      'Hiểu biết về các nguyên tắc động lực học chất lỏng và nhiệt động lực học',
      'Kiến thức về khoa học vật liệu và kỹ thuật kết cấu',
      'Quen thuộc với phần mềm CAD và các công cụ thiết kế kỹ thuật',
    ],
    exercises: [
      {
        title: 'Thiết kế máy bay khu vực cho các đường bay Việt Nam',
        description:
          'Thiết kế một loại máy bay khu vực hiệu quả, tối ưu cho các đường bay nội địa Việt Nam, có tính đến khí hậu nhiệt đới và các hạn chế của sân bay.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm thiết kế máy bay (CATIA, SolidWorks)',
          'Công cụ phân tích khí động lực học (ANSYS Fluent)',
          'Dữ liệu đường bay hàng không Việt Nam',
          'Thông số kỹ thuật sân bay và giới hạn đường băng',
          'Yêu cầu về hiệu suất trong khí hậu nhiệt đới',
        ],
        procedure: [
          'Phân tích yêu cầu các đường bay nội địa Việt Nam: khoảng cách, sức chứa hành khách, các ràng buộc của sân bay.',
          'Thiết kế cấu hình máy bay sơ bộ được tối ưu hóa cho hiệu suất ở vùng nhiệt đới.',
          'Thực hiện phân tích khí động lực học: lực nâng, lực cản, đặc tính ổn định.',
          'Tối ưu hóa thiết kế cánh cho hiệu suất đường băng ngắn và hiệu quả nhiên liệu.',
          'Đánh giá hiệu suất máy bay trong điều kiện khai thác tại Việt Nam.',
          'Xác nhận thiết kế theo các tiêu chuẩn an toàn hàng không của Việt Nam.',
        ],
        expectedResults:
          'Hoàn thành thiết kế máy bay đáp ứng các yêu cầu hàng không Việt Nam với hiệu suất được tối ưu hóa.',
        solution:
          'Phương pháp thiết kế tích hợp cân bằng giữa hiệu quả, an toàn và các yêu cầu vận hành cho thị trường hàng không Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Vietnam Airlines: Kỹ thuật bảo dưỡng máy bay và tối ưu hóa đội bay',
      'Vietjet Air: Kỹ thuật khai thác và tối ưu hóa kế hoạch đường bay',
      'Quốc phòng Việt Nam: Bảo dưỡng máy bay quân sự và phát triển UAV',
      'Cảng vụ hàng không: Phát triển cơ sở hạ tầng và hệ thống an toàn',
      'Sản xuất hàng không vũ trụ: Sản xuất linh kiện cho các nhà cung cấp quốc tế',
    ],
    aerospaceApplications: [
      'Hàng không thương mại: Thiết kế và vận hành máy bay chở khách',
      'Hàng không vận tải: Tối ưu hóa và hậu cần máy bay chở hàng',
      'Hàng không quân sự: Hệ thống máy bay quốc phòng và công nghệ UAV',
      'Hàng không chung: Thiết kế máy bay nhỏ và hàng không tư nhân',
      'Ứng dụng không gian: Thiết kế phương tiện phóng và hệ thống vệ tinh',
    ],
    flightPrinciples: [
      'Nguyên lý Bernoulli và luồng không khí quanh cánh',
      'Các định luật chuyển động của Newton trong động lực học bay',
      'Bốn lực của chuyến bay: lực nâng, trọng lực, lực đẩy, lực cản',
      'Thiết kế hệ thống điều khiển và ổn định máy bay',
      'Phân tích hiệu suất: các giai đoạn cất cánh, bay hành trình, hạ cánh',
    ],
    caseStudies: [
      {
        title: 'Dự án Tối ưu hóa Đội bay của Vietnam Airlines',
        organization: 'Tổng công ty Hàng không Việt Nam',
        problem:
          'Tối ưu hóa cơ cấu đội bay và lịch trình bảo dưỡng để cải thiện hiệu quả hoạt động trong thị trường cạnh tranh.',
        solution:
          'Triển khai các hệ thống phân tích hiệu suất máy bay tiên tiến và bảo trì dự đoán với việc ra quyết định dựa trên dữ liệu.',
        impact:
          'Giảm 20% chi phí bảo dưỡng, cải thiện 15% hiệu suất đúng giờ, tối ưu hóa hiệu quả nhiên liệu trên toàn bộ hoạt động của đội bay.',
        innovations: [
          'Thuật toán bảo trì dự đoán',
          'Hệ thống tối ưu hóa đường bay',
          'Nền tảng giám sát hiệu quả nhiên liệu',
          'Phân tích việc sử dụng máy bay',
        ],
      },
    ],
    resources: [
      {
        title: 'Cục Hàng không Việt Nam',
        url: 'https://caav.gov.vn/',
        type: 'Government Regulation',
      },
      {
        title: 'Aircraft Design: A Conceptual Approach',
        url: 'https://arc.aiaa.org/',
        type: 'Technical Reference',
      },
    ],
    vietnamContext: {
      title: 'Hàng không Việt Nam: Thách thức và Cơ hội',
      content: [
        'Ngành hàng không Việt Nam là một trong những thị trường phát triển nhanh nhất thế giới, tạo ra nhu cầu lớn về kỹ sư hàng không, chuyên gia bảo dưỡng và quản lý.',
        'Việc xây dựng sân bay quốc tế Long Thành là một dự án trọng điểm quốc gia, mở ra cơ hội lớn cho các chuyên gia về thiết kế và quản lý hạ tầng hàng không.',
        'Các công ty Việt Nam đang dần tham gia vào chuỗi cung ứng sản xuất linh kiện máy bay toàn cầu, đòi hỏi nguồn nhân lực chất lượng cao về kỹ thuật hàng không vũ trụ.',
      ],
    },
    careerConnect: {
      name: 'Ông Đặng Ngọc Hòa',
      title: 'Chủ tịch HĐQT',
      company: 'Vietnam Airlines',
      imageUrl: 'https://i.pravatar.cc/150?u=dangngochoa',
      quote:
        'Phát triển nguồn nhân lực kỹ thuật hàng không chất lượng cao là yếu tố sống còn để Vietnam Airlines và ngành hàng không Việt Nam cất cánh, vươn tầm thế giới.',
    },
    quizzes: [
      {
        question: 'Bốn lực chính tác động lên một chiếc máy bay đang bay ổn định là gì?',
        options: [
          'Lực nâng, Trọng lực, Lực đẩy, Lực cản',
          'Lực hướng tâm, Lực ly tâm, Lực đẩy, Lực cản',
          'Lực ma sát, Trọng lực, Lực đẩy, Lực nâng',
          'Lực nâng, Trọng lực, Lực từ, Lực ma sát',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Bốn lực cơ bản của chuyến bay là Lực nâng (Lift) chống lại Trọng lực (Weight), và Lực đẩy (Thrust) chống lại Lực cản (Drag). Sự cân bằng giữa các lực này quyết định trạng thái bay của máy bay.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao cánh máy bay có hình dạng cong ở trên và phẳng ở dưới?',
        answer:
          'Hình dạng này, gọi là airfoil, được thiết kế dựa trên nguyên lý Bernoulli. Không khí di chuyển qua mặt cong phía trên sẽ có vận tốc cao hơn và áp suất thấp hơn so với không khí di chuyển ở mặt phẳng phía dưới. Sự chênh lệch áp suất này tạo ra một lực hướng lên, gọi là lực nâng.',
      },
      {
        question: 'UAV (Unmanned Aerial Vehicle) là gì và nó có ứng dụng gì ở Việt Nam?',
        answer:
          'UAV, hay còn gọi là drone hoặc máy bay không người lái, là các phương tiện bay được điều khiển từ xa hoặc bay tự động. Tại Việt Nam, UAV được ứng dụng rộng rãi trong nông nghiệp (phun thuốc, giám sát cây trồng), xây dựng (khảo sát địa hình), truyền thông (quay phim, chụp ảnh từ trên cao) và cả trong lĩnh vực quân sự.',
      },
    ],
  },
  {
    id: 'satellite-communication-systems',
    title: 'Công nghệ Vệ tinh & Hệ thống Thông tin liên lạc',
    description:
      'Khám phá thiết kế hệ thống vệ tinh tiên tiến, cơ học quỹ đạo và công nghệ truyền thông không gian. Tìm hiểu về sự phát triển chương trình không gian của Việt Nam và các ứng dụng vệ tinh cho viễn thông và quan sát Trái đất.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ror4P1UAv_g',
    imageUrl: 'https://i.ytimg.com/vi/_VJZQMGEG1k/hqdefault.jpg',
    objectives: [
      'Nắm vững cơ học quỹ đạo vệ tinh và các nguyên tắc thiết kế nhiệm vụ không gian',
      'Hiểu về hệ thống thông tin vệ tinh và xử lý tín hiệu',
      'Thiết kế tải trọng vệ tinh cho quan sát Trái đất và viễn thông',
      'Áp dụng kỹ thuật hệ thống không gian cho các ứng dụng không gian của Việt Nam',
      'Nắm bắt luật không gian quốc tế và sự phát triển chính sách không gian của Việt Nam',
    ],
    prerequisites: [
      'Vật lý nâng cao: cơ học thiên thể, lý thuyết điện từ',
      'Toán học: phương trình vi phân, đại số tuyến tính, xử lý tín hiệu',
      'Kỹ thuật điện tử: hệ thống RF, thiết kế anten',
      'Hiểu biết về môi trường không gian và hiệu ứng bức xạ',
    ],
    exercises: [
      {
        title: 'Thiết kế Vệ tinh Quan sát Trái đất của Việt Nam',
        description:
          'Thiết kế một vệ tinh quan sát Trái đất được tối ưu hóa cho việc giám sát môi trường và quản lý thiên tai của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm thiết kế vệ tinh (STK, GMAT)',
          'Công cụ mô phỏng cơ học quỹ đạo',
          'Thông số kỹ thuật tải trọng quan sát Trái đất',
          'Yêu cầu giám sát môi trường của Việt Nam',
          'Cơ sở dữ liệu quy định không gian quốc tế',
        ],
        procedure: [
          'Xác định các yêu cầu nhiệm vụ cho giám sát môi trường Việt Nam.',
          'Tính toán các thông số quỹ đạo tối ưu để bao phủ lãnh thổ Việt Nam.',
          'Thiết kế tải trọng vệ tinh: cảm biến hình ảnh, hệ thống truyền thông.',
          'Phân tích ngân sách liên kết cho truyền thông với trạm mặt đất.',
          'Đánh giá tuổi thọ vệ tinh và kế hoạch xử lý cuối đời.',
          'Xác nhận thiết kế theo các hướng dẫn giảm thiểu mảnh vỡ không gian quốc tế.',
        ],
        expectedResults:
          'Hoàn thành thiết kế vệ tinh đáp ứng các mục tiêu của chương trình không gian Việt Nam và tuân thủ quốc tế.',
        solution:
          'Hệ thống vệ tinh toàn diện cho phép Việt Nam có năng lực giám sát môi trường với các hoạt động không gian bền vững.',
      },
    ],
    realWorldApplications: [
      'Trung tâm Vệ tinh Quốc gia Việt Nam: Phát triển công nghệ không gian',
      'Tập đoàn Bưu chính Viễn thông Việt Nam: Dịch vụ thông tin vệ tinh',
      'Bộ Tài nguyên và Môi trường: Ứng dụng dữ liệu quan sát Trái đất',
      'Các cơ quan quản lý thiên tai: Hệ thống giám sát thời gian thực',
      'Cơ quan hàng hải: Theo dõi và liên lạc tàu thuyền',
    ],
    spaceTechnology: [
      'Thiết kế thân vệ tinh: năng lượng, động cơ đẩy, điều khiển tư thế',
      'Hệ thống tải trọng: hình ảnh, truyền thông, dụng cụ khoa học',
      'Phân đoạn mặt đất: trạm theo dõi, trung tâm xử lý dữ liệu',
      'Tích hợp phương tiện phóng và vận hành nhiệm vụ',
      'Giảm thiểu mảnh vỡ không gian và xử lý cuối đời',
    ],
    caseStudies: [
      {
        title: 'Nhiệm vụ Quan sát Trái đất VNREDSat-1',
        organization: 'Trung tâm Vệ tinh Quốc gia Việt Nam',
        problem:
          'Phát triển năng lực quan sát Trái đất của Việt Nam để giám sát môi trường và quản lý tài nguyên thiên nhiên.',
        solution:
          'Triển khai thành công vệ tinh VNREDSat-1 với khả năng chụp ảnh độ phân giải cao, hỗ trợ quy hoạch phát triển quốc gia.',
        impact:
          'Cung cấp dữ liệu quan sát Trái đất quan trọng hỗ trợ nông nghiệp, lâm nghiệp, quản lý thiên tai và quy hoạch đô thị trên khắp Việt Nam.',
        innovations: [
          'Năng lực vận hành vệ tinh bản địa',
          'Xử lý dữ liệu hình ảnh đa phổ',
          'Hệ thống giám sát thiên tai thời gian thực',
          'Ứng dụng giám sát nông nghiệp',
        ],
      },
    ],
    resources: [
      {
        title: 'Trung tâm Vệ tinh Quốc gia Việt Nam',
        url: 'https://vnsc.org.vn/',
        type: 'Government Agency',
      },
      {
        title: 'International Telecommunication Union Satellite Regulations',
        url: 'https://www.itu.int/',
        type: 'International Standard',
      },
    ],
    vietnamContext: {
      title: 'Chinh phục không gian: Dấu ấn Việt Nam',
      content: [
        'Vệ tinh VINASAT-1 và VINASAT-2 đã khẳng định chủ quyền của Việt Nam trong không gian, đảm bảo an ninh thông tin liên lạc quốc gia.',
        'Vệ tinh VNREDSat-1 là vệ tinh quan sát Trái đất đầu tiên của Việt Nam, cung cấp hình ảnh quang học có giá trị cho việc giám sát tài nguyên, môi trường và thiên tai.',
        'Trung tâm Vũ trụ Việt Nam tại Hòa Lạc đang được xây dựng để trở thành trung tâm vũ trụ hàng đầu Đông Nam Á, mở ra kỷ nguyên mới cho ngành khoa học và công nghệ vũ trụ nước nhà.',
      ],
    },
    careerConnect: {
      name: 'PGS. TS. Phạm Anh Tuấn',
      title: 'Tổng Giám đốc Trung tâm Vũ trụ Việt Nam',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=phamanhtuan',
      quote:
        'Làm chủ công nghệ vũ trụ không chỉ là niềm tự hào dân tộc, mà còn là một công cụ chiến lược để phát triển kinh tế - xã hội bền vững và bảo vệ Tổ quốc.',
    },
    quizzes: [
      {
        question: 'Vệ tinh địa tĩnh (geostationary satellite) có đặc điểm quỹ đạo nào?',
        options: [
          'Bay rất gần Trái đất',
          'Có chu kỳ quỹ đạo chính xác là 24 giờ và bay trên đường xích đạo',
          'Bay qua hai cực của Trái đất',
          'Liên tục thay đổi vị trí so với mặt đất',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vệ tinh địa tĩnh có quỹ đạo tròn ngay trên đường xích đạo của Trái đất với chu kỳ quay đúng bằng chu kỳ tự quay của Trái đất (khoảng 23 giờ 56 phút 4 giây). Điều này làm cho nó có vẻ như "đứng yên" tại một điểm cố định trên bầu trời so với người quan sát trên mặt đất.',
      },
    ],
    faqs: [
      {
        question: 'Vệ tinh VINASAT của Việt Nam được sử dụng để làm gì?',
        answer:
          'VINASAT là hệ thống vệ tinh viễn thông địa tĩnh của Việt Nam. Chức năng chính của nó là cung cấp các dịch vụ như truyền hình, điện thoại, internet băng thông rộng đến các vùng sâu, vùng xa, hải đảo của Việt Nam, cũng như cho thuê băng tần cho các quốc gia khác, đảm bảo an ninh thông tin liên lạc quốc gia.',
      },
      {
        question: 'Tại sao có sự trễ tín hiệu khi liên lạc qua vệ tinh?',
        answer:
          'Sự trễ tín hiệu (latency) xảy ra do tín hiệu phải di chuyển một quãng đường rất xa từ trạm mặt đất lên vệ tinh và quay trở lại. Đối với vệ tinh địa tĩnh cách Trái đất khoảng 35,786 km, thời gian trễ tối thiểu là khoảng 240 mili giây cho một lượt đi và về, điều này có thể nhận thấy rõ trong các cuộc gọi điện thoại qua vệ tinh.',
      },
    ],
  },
  {
    id: 'space-mission-planning',
    title: 'Hoạch định Nhiệm vụ & Kỹ thuật Hệ thống Không gian',
    description:
      'Tìm hiểu về thiết kế nhiệm vụ không gian toàn diện, phương pháp kỹ thuật hệ thống và quản lý dự án cho các chương trình không gian. Tập trung vào sự phát triển ngành công nghiệp không gian của Việt Nam và các cơ hội hợp tác quốc tế.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=rvNCa3j3vcg',
    imageUrl: 'https://i.ytimg.com/vi/jxT7_NPFjkA/hqdefault.jpg',
    objectives: [
      'Nắm vững phương pháp thiết kế nhiệm vụ không gian và các nguyên tắc kỹ thuật hệ thống',
      'Hiểu về quản lý dự án không gian và các kỹ thuật đánh giá rủi ro',
      'Áp dụng các công cụ phân tích nhiệm vụ để thiết kế quỹ đạo tàu vũ trụ',
      'Thiết kế các nhiệm vụ không gian hỗ trợ các mục tiêu quốc gia của Việt Nam',
      'Điều hướng hợp tác không gian quốc tế và chuyển giao công nghệ',
    ],
    prerequisites: [
      'Kiến thức cơ bản về kỹ thuật hàng không vũ trụ: cơ học quỹ đạo, thiết kế tàu vũ trụ',
      'Kinh nghiệm quản lý dự án: lập kế hoạch, lên lịch, quản lý rủi ro',
      'Kiến thức kỹ thuật hệ thống: yêu cầu, xác minh, xác nhận',
      'Hiểu biết về môi trường không gian và các ràng buộc nhiệm vụ',
    ],
    exercises: [
      {
        title: 'Nghiên cứu khả thi Nhiệm vụ Mặt trăng của Việt Nam',
        description:
          'Thực hiện một nghiên cứu khả thi toàn diện cho một nhiệm vụ thám hiểm Mặt trăng của Việt Nam, bao gồm phân tích kỹ thuật, kinh tế và chiến lược.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm phân tích nhiệm vụ (GMAT, STK)',
          'Mô hình ước tính chi phí',
          'Khuôn khổ hợp tác không gian quốc tế',
          'Các nghiên cứu điển hình về nhiệm vụ Mặt trăng',
          'Tài liệu chính sách không gian của Việt Nam',
        ],
        procedure: [
          'Xác định các mục tiêu nhiệm vụ Mặt trăng của Việt Nam: khoa học, công nghệ, chiến lược.',
          'Thực hiện các nghiên cứu đánh đổi kiến trúc nhiệm vụ: phương pháp tiếp cận trực tiếp so với theo giai đoạn.',
          'Phân tích các tùy chọn quỹ đạo: cửa sổ phóng, yêu cầu delta-V.',
          'Ước tính chi phí nhiệm vụ và tiến trình phát triển.',
          'Đánh giá các cơ hội hợp tác quốc tế.',
          'Đánh giá sự sẵn sàng về kỹ thuật và yêu cầu phát triển năng lực.',
        ],
        expectedResults: 'Phân tích khả thi toàn diện hỗ trợ hoạch định chiến lược chương trình không gian Việt Nam.',
        solution:
          'Phân tích nhiệm vụ có hệ thống cung cấp lộ trình phát triển năng lực thám hiểm Mặt trăng của Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Cơ quan không gian Việt Nam: Hoạch định nhiệm vụ và quản lý chương trình',
      'Các tổ chức không gian quốc tế: Phát triển nhiệm vụ hợp tác',
      'Các nhà thầu hàng không vũ trụ: Kỹ thuật nhiệm vụ và tích hợp hệ thống',
      'Các viện nghiên cứu: Phát triển nhiệm vụ khoa học không gian',
      'Các công ty công nghệ: Phát triển dịch vụ dựa trên không gian',
    ],
    caseStudies: [
      {
        title: 'Phát triển Chiến lược Không gian Quốc gia Việt Nam',
        organization: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
        problem:
          'Xây dựng một chiến lược không gian quốc gia toàn diện hỗ trợ phát triển kinh tế và an ninh quốc gia của Việt Nam.',
        solution:
          'Tạo ra một lộ trình phát triển không gian 20 năm với việc xây dựng năng lực theo từng giai đoạn và hợp tác quốc tế.',
        impact:
          'Thiết lập khuôn khổ cho sự phát triển ngành công nghiệp không gian Việt Nam, thu hút các đối tác quốc tế, định hướng phát triển chính sách.',
        innovations: [
          'Phương pháp tiếp cận không gian tích hợp dân sự-quân sự',
          'Mô hình đối tác công-tư',
          'Sáng kiến hợp tác khu vực',
          'Ưu tiên phát triển công nghệ',
        ],
      },
    ],
    resources: [
      {
        title: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
        url: 'https://vast.gov.vn/',
        type: 'Research Institution',
      },
      {
        title: 'International Astronautical Federation',
        url: 'https://www.iafastro.org/',
        type: 'Professional Organization',
      },
    ],
    vietnamContext: {
      title: 'Tầm nhìn không gian Việt Nam',
      content: [
        'Chiến lược phát triển và ứng dụng khoa học và công nghệ vũ trụ đến năm 2030 của Việt Nam đặt mục tiêu đưa Việt Nam trở thành quốc gia mạnh về vũ trụ.',
        'Việc hoạch định các nhiệm vụ không gian trong tương lai, như các vệ tinh viễn thông thế hệ mới hay thậm chí là các nhiệm vụ thám hiểm, đòi hỏi một đội ngũ kỹ sư hệ thống và nhà quản lý dự án không gian tài năng.',
        'Hợp tác quốc tế là chìa khóa cho các quốc gia đang phát triển như Việt Nam để tiến vào không gian, giúp chia sẻ chi phí, rủi ro và chuyển giao công nghệ.',
      ],
    },
    careerConnect: {
      name: 'TS. Bùi Trọng Tuyên',
      title: 'Viện trưởng Viện Công nghệ Vũ trụ',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=buitrongtuyen',
      quote:
        'Hoạch định một nhiệm vụ không gian cũng giống như vẽ một bản đồ đến tương lai. Nó đòi hỏi sự chính xác, tầm nhìn xa và lòng dũng cảm để mơ những giấc mơ lớn.',
    },
    quizzes: [
      {
        question: 'Trong kỹ thuật hệ thống không gian, "Delta-v" (Δv) là thước đo cho cái gì?',
        options: [
          'Tốc độ tối đa của tàu vũ trụ',
          'Sự thay đổi vận tốc cần thiết để thực hiện một thao tác quỹ đạo',
          'Khoảng cách từ Trái đất đến tàu vũ trụ',
          'Lượng nhiên liệu còn lại',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Delta-v là một đại lượng vô hướng đo lường "nỗ lực" cần thiết để thay đổi quỹ đạo. Nó là một trong những thông số quan trọng nhất trong hoạch định nhiệm vụ, vì nó quyết định lượng nhiên liệu cần thiết cho một tàu vũ trụ.',
      },
    ],
    faqs: [
      {
        question: 'Kỹ thuật hệ thống (Systems Engineering) có vai trò gì trong một nhiệm vụ không gian?',
        answer:
          'Kỹ thuật hệ thống đóng vai trò "nhạc trưởng" trong một dự án không gian. Nó đảm bảo rằng tất cả các hệ thống con phức tạp (như động cơ đẩy, thông tin liên lạc, máy tính, tải trọng khoa học) hoạt động hài hòa với nhau, đáp ứng các yêu cầu tổng thể của nhiệm vụ và được phát triển trong giới hạn về chi phí và thời gian.',
      },
      {
        question: 'Tại sao việc giảm thiểu mảnh vỡ không gian lại quan trọng?',
        answer:
          'Mảnh vỡ không gian, từ các vệ tinh cũ hoặc các tầng tên lửa, di chuyển với tốc độ cực lớn và có thể gây ra va chạm thảm khốc cho các vệ tinh đang hoạt động hoặc các tàu vũ trụ có người lái. Việc giảm thiểu mảnh vỡ là rất quan trọng để đảm bảo sự an toàn và bền vững của các hoạt động trong không gian.',
      },
    ],
  },
  {
    id: 'avionics-flight-systems',
    title: 'Hệ thống điện tử hàng không & Điều khiển bay',
    description:
      'Tìm hiểu về thiết kế hệ thống điện tử hàng không (avionics) tiên tiến, thuật toán điều khiển bay và công nghệ dẫn đường. Bao gồm tích hợp hệ thống máy bay hiện đại, khả năng bay tự động và phát triển công nghệ hàng không Việt Nam.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7JowiXwzBvk',
    imageUrl: 'https://i.ytimg.com/vi/d5sXmNplQHw/hqdefault.jpg',
    objectives: [
      'Nắm vững kiến trúc hệ thống điện tử hàng không và các nguyên tắc tích hợp',
      'Hiểu về thiết kế hệ thống điều khiển bay và phân tích độ ổn định',
      'Áp dụng các thuật toán dẫn đường và điều khiển cho bay tự động',
      'Thiết kế các hệ thống điện tử hàng không chịu lỗi với các yêu cầu an toàn nghiêm ngặt',
      'Triển khai các công nghệ điện tử hàng không hiện đại trong bối cảnh hàng không Việt Nam',
    ],
    prerequisites: [
      'Kỹ thuật điện tử: hệ thống số, xử lý tín hiệu',
      'Lý thuyết hệ thống điều khiển: điều khiển phản hồi, phân tích độ ổn định',
      'Kỹ năng lập trình: hệ thống nhúng, phần mềm thời gian thực',
      'Hiểu biết về hệ thống máy bay và động lực học bay',
    ],
    exercises: [
      {
        title: 'Phát triển Hệ thống Quản lý Chuyến bay (FMS)',
        description:
          'Thiết kế một hệ thống quản lý chuyến bay tiên tiến được tối ưu hóa cho hoạt động của máy bay khu vực tại Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm mô phỏng bay',
          'Nền tảng phát triển điện tử hàng không',
          'Dữ liệu dẫn đường không phận Việt Nam',
          'Thư viện thuật toán điều khiển bay',
          'Công cụ phân tích an toàn',
        ],
        procedure: [
          'Xác định các yêu cầu hệ thống quản lý chuyến bay cho hoạt động tại Việt Nam.',
          'Thiết kế kiến trúc hệ thống: cảm biến, bộ xử lý, màn hình.',
          'Triển khai các thuật toán dẫn đường: tích hợp GPS, ILS, VOR.',
          'Phát triển các chức năng lập kế hoạch bay và tối ưu hóa đường bay.',
          'Tích hợp hệ thống lái tự động và điều khiển lực đẩy tự động.',
          'Xác nhận hiệu suất hệ thống trong các kịch bản bay thực tế.',
        ],
        expectedResults: 'Hệ thống quản lý chuyến bay chức năng đáp ứng các yêu cầu vận hành hàng không của Việt Nam.',
        solution:
          'Phương pháp tiếp cận điện tử hàng không tích hợp giúp tăng cường an toàn và hiệu quả bay cho hàng không khu vực Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Các hãng hàng không Việt Nam: Chương trình hiện đại hóa và nâng cấp hệ thống điện tử hàng không',
      'Hàng không quân sự: Phát triển hệ thống điều khiển bay',
      'Các nhà sản xuất UAV: Phát triển khả năng bay tự động',
      'Hệ thống sân bay: Thiết bị hỗ trợ dẫn đường và hệ thống tiếp cận',
      'Các nhà cung cấp điện tử hàng không: Thiết kế và tích hợp linh kiện',
    ],
    flightPrinciples: [
      'Điều khiển bay kỹ thuật số: hệ thống fly-by-wire, luật điều khiển',
      'Hệ thống dẫn đường: tích hợp GPS, INS, dẫn đường vô tuyến',
      'Hệ thống hiển thị: buồng lái kính, màn hình hiển thị trên đầu (HUD)',
      'Hệ thống liên lạc: radio VHF, liên kết dữ liệu, liên lạc vệ tinh',
      'Hệ thống giám sát: bộ phát đáp, ADS-B, radar thời tiết',
    ],
    caseStudies: [
      {
        title: 'Hiện đại hóa hệ thống điện tử hàng không của Vietnam Airlines',
        organization: 'Công ty Kỹ thuật máy bay Vietnam Airlines (VAECO)',
        problem:
          'Nâng cấp các hệ thống điện tử hàng không cũ kỹ để đáp ứng các yêu cầu về hiệu suất và an toàn hiện đại.',
        solution:
          'Triển khai chương trình hiện đại hóa điện tử hàng không toàn diện với nâng cấp buồng lái kính và hệ thống dẫn đường tăng cường.',
        impact:
          'Cải thiện an toàn bay, giảm khối lượng công việc của phi công, tăng cường hiệu quả hoạt động, đạt được sự tuân thủ quy định.',
        innovations: [
          'Hệ thống buồng lái kính trang bị thêm',
          'Máy tính quản lý chuyến bay tăng cường',
          'Màn hình dẫn đường tích hợp',
          'Hệ thống liên lạc kỹ thuật số',
        ],
      },
    ],
    resources: [
      {
        title: 'DO-178C Software Considerations in Airborne Systems',
        url: 'https://www.rtca.org/',
        type: 'Safety Standard',
      },
      {
        title: 'IEEE Aerospace and Electronic Systems Society',
        url: 'https://aess.ieee.org/',
        type: 'Professional Organization',
      },
    ],
    vietnamContext: {
      title: 'Bộ não của máy bay: Avionics tại Việt Nam',
      content: [
        'Avionics (hệ thống điện tử hàng không) là "bộ não" của máy bay hiện đại, điều khiển mọi thứ từ dẫn đường, liên lạc đến điều khiển bay.',
        'Các kỹ sư Việt Nam tại các công ty như VAECO đang làm chủ công nghệ bảo dưỡng, sửa chữa và nâng cấp các hệ thống avionics phức tạp của các dòng máy bay Airbus và Boeing.',
        'Sự phát triển của ngành công nghiệp UAV tại Việt Nam cũng thúc đẩy nhu cầu về các kỹ sư có khả năng thiết kế và tích hợp các hệ thống avionics nhỏ gọn, tự động cho các phương tiện không người lái.',
      ],
    },
    careerConnect: {
      name: 'Ông Trần Quốc Thắng',
      title: 'Trưởng phòng Kỹ thuật, VAECO',
      company: 'Vietnam Airlines Engineering Company',
      imageUrl: 'https://i.pravatar.cc/150?u=tranquoc_thang',
      quote:
        'Bảo dưỡng và nâng cấp hệ thống điện tử hàng không không chỉ là công việc kỹ thuật, đó là trách nhiệm đảm bảo an toàn tuyệt đối cho mỗi chuyến bay.',
    },
    quizzes: [
      {
        question: 'Hệ thống "Fly-by-wire" trong máy bay hiện đại có nghĩa là gì?',
        options: [
          'Máy bay được điều khiển bằng sóng radio từ mặt đất',
          'Các bề mặt điều khiển (cánh liệng, bánh lái) được di chuyển bằng tín hiệu điện tử thay vì dây cáp cơ khí',
          'Phi công điều khiển máy bay bằng Wi-Fi',
          'Máy bay hoàn toàn tự động và không cần phi công',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Fly-by-wire thay thế các liên kết cơ khí truyền thống giữa bộ điều khiển của phi công và các bề mặt điều khiển bằng một giao diện điện tử. Máy tính sẽ nhận tín hiệu đầu vào từ phi công, xử lý và gửi lệnh điện tử đến các cơ cấu chấp hành để di chuyển các bề mặt điều khiển.',
      },
    ],
    faqs: [
      {
        question: 'ADS-B (Automatic Dependent Surveillance–Broadcast) là gì?',
        answer:
          'ADS-B là một công nghệ giám sát hàng không. Máy bay sẽ tự động phát đi thông tin vị trí, độ cao, tốc độ của mình (lấy từ GPS) cho các trạm mặt đất và các máy bay khác. Công nghệ này giúp kiểm soát viên không lưu và phi công có được bức tranh chính xác và thời gian thực về tình hình giao thông trên không, tăng cường an toàn bay.',
      },
      {
        question: 'Buồng lái kính (Glass Cockpit) là gì?',
        answer:
          'Buồng lái kính là một buồng lái máy bay có các màn hình hiển thị điện tử đa chức năng, thay thế cho các đồng hồ cơ học truyền thống. Nó cung cấp cho phi công nhiều thông tin hơn một cách trực quan, giảm khối lượng công việc và tăng cường nhận thức tình huống.',
      },
    ],
  },
];
