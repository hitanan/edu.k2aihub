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
      {
        question: 'Lực cản (Drag) trong hàng không là gì và có những loại nào?',
        answer:
          'Lực cản là lực chống lại chuyển động của máy bay trong không khí. Có hai loại chính: lực cản ký sinh (parasitic drag), bao gồm lực cản hình dạng và ma sát da, và lực cản cảm ứng (induced drag), được tạo ra do quá trình tạo ra lực nâng.',
      },
      {
        question: 'Tỷ lệ lực nâng trên lực cản (L/D ratio) có ý nghĩa gì?',
        answer:
          'Tỷ lệ L/D là một thước đo hiệu quả khí động học của máy bay. Tỷ lệ càng cao, máy bay càng hiệu quả, có nghĩa là nó có thể bay xa hơn hoặc mang tải nặng hơn với cùng một lượng lực đẩy. Tỷ lệ này thay đổi tùy theo tốc độ và góc tấn.',
      },
      {
        question: 'Góc tấn (Angle of Attack - AOA) là gì?',
        answer:
          'Góc tấn là góc giữa đường tham chiếu trên cánh máy bay (dây cung cánh) và hướng của luồng không khí đang tới. Lực nâng tăng theo góc tấn cho đến một điểm tới hạn, gọi là góc tấn tới hạn. Vượt qua góc này sẽ gây ra hiện tượng thất tốc (stall).',
      },
      {
        question: 'Hiện tượng thất tốc (stall) là gì và tại sao nó nguy hiểm?',
        answer:
          'Thất tốc xảy ra khi luồng không khí không còn bám vào bề mặt trên của cánh, gây ra sự sụt giảm đột ngột của lực nâng. Điều này làm máy bay mất khả năng điều khiển và có thể rơi. Phi công được huấn luyện để nhận biết và phục hồi từ tình trạng thất tốc.',
      },
      {
        question: 'Vật liệu composite được sử dụng trong máy bay hiện đại có ưu điểm gì?',
        answer:
          'Vật liệu composite, như sợi carbon gia cố polymer, có tỷ lệ độ bền trên trọng lượng rất cao, chống ăn mòn tốt và có thể được tạo hình thành các hình dạng khí động học phức tạp. Điều này giúp máy bay nhẹ hơn, tiết kiệm nhiên liệu hơn và có hiệu suất cao hơn.',
      },
      {
        question: 'Động cơ phản lực (jet engine) hoạt động như thế nào?',
        answer:
          'Động cơ phản lực hoạt động theo nguyên tắc của Định luật 3 Newton. Nó hút không khí vào, nén lại, đốt cháy với nhiên liệu để tạo ra một luồng khí nóng tốc độ cao phụt ra phía sau. Lực phản lại của luồng khí này đẩy máy bay về phía trước.',
      },
      {
        question: 'Sự khác biệt giữa động cơ turbofan và turbojet là gì?',
        answer:
          'Cả hai đều là động cơ phản lực. Động cơ turbojet tạo ra toàn bộ lực đẩy từ luồng khí đi qua lõi động cơ. Động cơ turbofan có một quạt lớn ở phía trước, đẩy một phần lớn không khí đi vòng qua lõi (bypass air). Luồng khí bypass này tạo ra phần lớn lực đẩy, giúp động cơ turbofan hiệu quả và êm hơn, phù hợp với máy bay thương mại.',
      },
      {
        question:
          'Tại sao máy bay cần có các bề mặt điều khiển như cánh liệng (ailerons), bánh lái độ cao (elevators) và bánh lái hướng (rudder)?',
        answer:
          'Các bề mặt này cho phép phi công điều khiển máy bay quay quanh ba trục: cánh liệng điều khiển chuyển động lượn (roll), bánh lái độ cao điều khiển chuyển động chúc/ngóc (pitch), và bánh lái hướng điều khiển chuyển động lệch hướng (yaw).',
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
      {
        question: 'Quỹ đạo Trái đất tầm thấp (LEO) là gì và có ưu điểm gì?',
        answer:
          'LEO là các quỹ đạo có độ cao từ 160 đến 2,000 km so với mặt đất. Ưu điểm của vệ tinh LEO là độ trễ tín hiệu rất thấp và chi phí phóng thấp hơn. Các chùm vệ tinh internet như Starlink sử dụng quỹ đạo LEO để cung cấp internet tốc độ cao trên toàn cầu.',
      },
      {
        question: 'GPS hoạt động như thế nào?',
        answer:
          'Hệ thống Định vị Toàn cầu (GPS) hoạt động dựa trên một chùm vệ tinh phát tín hiệu thời gian cực kỳ chính xác. Máy thu GPS trên mặt đất nhận tín hiệu từ ít nhất bốn vệ tinh, tính toán khoảng cách đến từng vệ tinh và từ đó xác định vị trí chính xác của nó trong không gian ba chiều.',
      },
      {
        question: 'Vệ tinh quan sát Trái đất có những ứng dụng gì?',
        answer:
          'Vệ tinh quan sát Trái đất chụp ảnh bề mặt hành tinh ở các dải quang phổ khác nhau. Dữ liệu này được sử dụng để giám sát biến đổi khí hậu, quản lý nông nghiệp (dự báo năng suất, phát hiện sâu bệnh), quy hoạch đô thị, theo dõi thiên tai (lũ lụt, cháy rừng) và an ninh quốc phòng.',
      },
      {
        question: 'Sự khác biệt giữa băng tần C, Ku và Ka trong thông tin vệ tinh là gì?',
        answer:
          'Đây là các dải tần số khác nhau được sử dụng cho liên lạc vệ tinh. Băng tần C (4-8 GHz) có độ tin cậy cao, ít bị ảnh hưởng bởi mưa. Băng tần Ku (12-18 GHz) cho phép sử dụng anten nhỏ hơn. Băng tần Ka (26.5-40 GHz) cung cấp băng thông rất lớn, phù hợp cho internet vệ tinh tốc độ cao nhưng dễ bị ảnh hưởng bởi thời tiết xấu.',
      },
      {
        question: 'Làm thế nào để vệ tinh giữ được hướng chính xác trong không gian?',
        answer:
          'Vệ tinh sử dụng Hệ thống Điều khiển Tư thế (Attitude Control System). Hệ thống này bao gồm các cảm biến (như cảm biến sao, cảm biến mặt trời) để xác định hướng và các cơ cấu chấp hành (như bánh đà phản ứng, động cơ đẩy nhỏ) để điều chỉnh và duy trì hướng của vệ tinh một cách chính xác.',
      },
      {
        question: 'Nguồn năng lượng chính của vệ tinh là gì?',
        answer:
          'Hầu hết các vệ tinh sử dụng các tấm pin mặt trời (solar panels) để chuyển đổi ánh sáng mặt trời thành điện năng. Năng lượng này được sử dụng để vận hành các hệ thống và được lưu trữ trong pin sạc để cung cấp năng lượng khi vệ tinh đi vào vùng bóng tối của Trái đất.',
      },
      {
        question: 'Trạm mặt đất (ground station) có vai trò gì?',
        answer:
          'Trạm mặt đất là cầu nối liên lạc giữa vệ tinh và người vận hành. Nó có nhiệm vụ gửi lệnh điều khiển (telecommand) lên vệ tinh, nhận dữ liệu từ vệ tinh (telemetry và payload data), và theo dõi vị trí của vệ tinh trên quỹ đạo.',
      },
      {
        question: 'Tại sao vệ tinh không rơi trở lại Trái đất?',
        answer:
          'Vệ tinh thực chất đang "rơi" liên tục về phía Trái đất do lực hấp dẫn. Tuy nhiên, nó cũng có một vận tốc ngang rất lớn. Sự kết hợp giữa chuyển động "rơi" xuống và chuyển động "đi ngang" này tạo thành một đường cong liên tục, chính là quỹ đạo của nó quanh Trái đất.',
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
      {
        question: 'Cửa sổ phóng (launch window) là gì?',
        answer:
          'Cửa sổ phóng là một khoảng thời gian cụ thể mà một tên lửa phải được phóng để đạt được quỹ đạo mong muốn. Đối với các nhiệm vụ liên hành tinh, cửa sổ phóng có thể rất hẹp và chỉ xuất hiện vài tuần một lần sau mỗi vài năm, khi các hành tinh ở vị trí phù hợp.',
      },
      {
        question: 'Phân tích "trade-off" (đánh đổi) trong thiết kế nhiệm vụ không gian là gì?',
        answer:
          'Trong thiết kế nhiệm vụ, các kỹ sư thường phải đối mặt với các quyết định đánh đổi. Ví dụ, thêm nhiều nhiên liệu hơn sẽ tăng khả năng cơ động (delta-v) nhưng cũng làm tăng khối lượng, đòi hỏi tên lửa phóng mạnh hơn và tốn kém hơn. Phân tích đánh đổi là quá trình cân nhắc các lựa chọn này để tìm ra giải pháp tối ưu.',
      },
      {
        question: 'Các giai đoạn của một nhiệm vụ không gian điển hình là gì?',
        answer:
          'Một nhiệm vụ không gian thường bao gồm các giai đoạn: Concept & Feasibility (Ý tưởng & Khả thi), Design & Development (Thiết kế & Phát triển), Launch & Early Operations (Phóng & Vận hành ban đầu), Operations (Vận hành), và End-of-Life (Kết thúc vòng đời).',
      },
      {
        question: 'Quản lý rủi ro trong dự án không gian được thực hiện như thế nào?',
        answer:
          'Quản lý rủi ro bao gồm việc xác định các rủi ro tiềm ẩn (kỹ thuật, chi phí, lịch trình), phân tích xác suất và tác động của chúng, và phát triển các kế hoạch để giảm thiểu hoặc ứng phó với chúng. Trong ngành không gian, việc có các hệ thống dự phòng (redundancy) là một chiến lược giảm thiểu rủi ro phổ biến.',
      },
      {
        question: 'Hợp tác quốc tế có lợi ích gì cho các chương trình không gian?',
        answer:
          'Hợp tác quốc tế giúp chia sẻ chi phí và rủi ro khổng lồ của các nhiệm vụ không gian, tận dụng thế mạnh công nghệ của các quốc gia khác nhau, thúc đẩy ngoại giao khoa học và cho phép thực hiện các dự án đầy tham vọng mà một quốc gia đơn lẻ không thể tự làm được, như Trạm Vũ trụ Quốc tế (ISS).',
      },
      {
        question: 'Làm thế nào để các nhà khoa học quyết định mục tiêu cho một nhiệm vụ khoa học không gian?',
        answer:
          'Quá trình này thường bắt đầu bằng các câu hỏi khoa học lớn (ví dụ: "Có sự sống trên sao Hỏa không?"). Cộng đồng khoa học sẽ đề xuất các khái niệm nhiệm vụ để trả lời những câu hỏi này. Các cơ quan không gian sau đó sẽ đánh giá các đề xuất này dựa trên tính khả thi kỹ thuật, chi phí và tiềm năng khoa học để lựa chọn nhiệm vụ sẽ được tài trợ và phát triển.',
      },
      {
        question: 'Tại sao việc thử nghiệm trên mặt đất lại quan trọng đối với tàu vũ trụ?',
        answer:
          'Một khi tàu vũ trụ đã được phóng, việc sửa chữa gần như là không thể. Do đó, mọi thành phần và toàn bộ hệ thống phải được thử nghiệm cực kỳ nghiêm ngặt trên mặt đất trong các điều kiện mô phỏng môi trường không gian (chân không, nhiệt độ khắc nghiệt, rung động) để đảm bảo chúng sẽ hoạt động như mong đợi.',
      },
      {
        question: 'Kế hoạch kết thúc vòng đời (end-of-life plan) của vệ tinh bao gồm những gì?',
        answer:
          'Để tránh tạo thêm mảnh vỡ không gian, các vệ tinh hiện đại phải có kế hoạch xử lý khi hết nhiệm vụ. Đối với vệ tinh ở quỹ đạo thấp (LEO), kế hoạch thường là sử dụng nhiên liệu cuối cùng để giảm độ cao và tự đốt cháy trong khí quyển. Đối với vệ tinh địa tĩnh, chúng sẽ được đẩy lên một "quỹ đạo nghĩa địa" (graveyard orbit) cao hơn để không gây cản trở.',
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
      {
        question: 'Hệ thống Quản lý Chuyến bay (Flight Management System - FMS) làm gì?',
        answer:
          'FMS là một máy tính trung tâm tự động hóa một loạt các nhiệm vụ trong chuyến bay. Nó chứa cơ sở dữ liệu dẫn đường, cho phép phi công lập kế hoạch bay, và có thể tự động điều khiển máy bay bay theo lộ trình đã định, tối ưu hóa hiệu suất và tiết kiệm nhiên liệu.',
      },
      {
        question: 'Sự khác biệt giữa GPS và INS (Inertial Navigation System) là gì?',
        answer:
          'GPS xác định vị trí bằng cách nhận tín hiệu từ vệ tinh. INS là một hệ thống tự hành, sử dụng con quay hồi chuyển và gia tốc kế để theo dõi sự thay đổi về hướng và vị trí so với một điểm xuất phát đã biết. Máy bay hiện đại thường kết hợp cả hai (GPS/INS) để có được thông tin vị trí vừa chính xác vừa đáng tin cậy, ngay cả khi tín hiệu GPS bị mất tạm thời.',
      },
      {
        question: 'Hệ thống Tăng cường Dựa trên Vệ tinh (SBAS) như WAAS hoạt động như thế nào?',
        answer:
          'SBAS cải thiện độ chính xác và độ tin cậy của GPS. Các trạm mặt đất sẽ theo dõi tín hiệu GPS, tính toán các sai số và gửi thông tin hiệu chỉnh lên một vệ tinh địa tĩnh. Vệ tinh này sau đó sẽ phát tín hiệu hiệu chỉnh xuống cho các máy bay được trang bị bộ thu tương thích, cho phép thực hiện các cuộc hạ cánh chính xác hơn.',
      },
      {
        question: 'Luật điều khiển (control law) trong hệ thống fly-by-wire là gì?',
        answer:
          'Luật điều khiển là các thuật toán phức tạp trong máy tính điều khiển bay. Chúng diễn giải ý định của phi công (ví dụ: gạt cần lái sang trái) và chuyển thành các lệnh cụ thể cho các bề mặt điều khiển, đồng thời đảm bảo máy bay luôn hoạt động trong một phạm vi an toàn (flight envelope protection).',
      },
      {
        question: 'Tại sao tính dư thừa (redundancy) lại cực kỳ quan trọng trong hệ thống điện tử hàng không?',
        answer:
          'Tính dư thừa có nghĩa là có nhiều hệ thống độc lập có thể thực hiện cùng một chức năng quan trọng. Ví dụ, máy bay thường có 3 hoặc 4 máy tính điều khiển bay. Nếu một máy tính hỏng, máy tính khác sẽ ngay lập tức tiếp quản. Điều này đảm bảo rằng một lỗi đơn lẻ không thể gây ra thảm họa.',
      },
      {
        question: 'Hệ thống Tránh va chạm trên không (TCAS) hoạt động như thế nào?',
        answer:
          'TCAS là một hệ thống độc lập trên máy bay, nó liên tục "hỏi" các máy bay khác ở gần về vị trí và độ cao của chúng. Nếu phát hiện nguy cơ va chạm, nó sẽ đưa ra cảnh báo cho phi công và thậm chí có thể tự động đưa ra khuyến nghị hành động tránh va chạm (ví dụ: "Leo lên! Leo lên!").',
      },
      {
        question: 'Màn hình hiển thị trên đầu (Head-Up Display - HUD) cung cấp lợi ích gì?',
        answer:
          'HUD chiếu các thông tin bay quan trọng (tốc độ, độ cao, hướng bay) lên một tấm kính trong suốt ngay trước tầm mắt của phi công. Điều này cho phép phi công theo dõi thông tin mà không cần phải cúi xuống nhìn vào các màn hình trong buồng lái, đặc biệt hữu ích trong các giai đoạn quan trọng như cất cánh và hạ cánh.',
      },
      {
        question: 'DO-178C là tiêu chuẩn gì?',
        answer:
          'DO-178C là một tiêu chuẩn quốc tế cực kỳ nghiêm ngặt về phát triển phần mềm cho các hệ thống hàng không. Nó xác định các quy trình và mục tiêu cần phải tuân thủ để đảm bảo phần mềm trên máy bay có độ an toàn và tin cậy cao nhất. Việc tuân thủ tiêu chuẩn này là bắt buộc để phần mềm được chứng nhận cho sử dụng trong hàng không.',
      },
    ],
  },
];
