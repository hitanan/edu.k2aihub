import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const blueEconomyLessons: BaseLessonData[] = [
  {
    id: 'blue-economy-fundamentals',
    title: 'Nền Tảng Kinh Tế Biển Xanh',
    description: 'Hiểu về khái niệm kinh tế biển bền vững và tiềm năng 3.200km bờ biển Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=k-34WA65FSQ',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Nắm vững khái niệm kinh tế biển xanh và các nguyên tắc bền vững',
      'Phân tích tiềm năng kinh tế biển của Việt Nam',
      'Hiểu về các cơ hội đầu tư trong lĩnh vực này',
    ],
    prerequisites: ['Kiến thức cơ bản về kinh tế học', 'Hiểu biết về môi trường biển'],
    exercises: [
      {
        title: 'Phân Tích Tiềm Năng Biển Việt Nam',
        description: 'Đánh giá các vùng biển và tiềm năng phát triển',
        difficulty: 'Cơ bản',
        procedure: [
          'Nghiên cứu bản đồ 3.200km bờ biển Việt Nam',
          'Phân tích các vùng có tiềm năng cao',
          'Đề xuất chiến lược phát triển bền vững',
        ],
      },
    ],
    realWorldApplications: ['Phát triển du lịch biển bền vững', 'Quản lý tài nguyên biển', 'Đầu tư vào công nghệ biển'],
    caseStudies: [
      {
        title: 'Phát Triển Nuôi Trồng Thủy Sản Thông Minh',
        organization: 'Công ty CP Thủy sản Minh Phú',
        problem: 'Cần nâng cao hiệu quả nuôi tôm và bảo vệ môi trường',
        solution: 'Áp dụng IoT và AI trong giám sát chất lượng nước và thức ăn',
        impact: 'Tăng 30% năng suất, giảm 25% tác động môi trường',
        innovations: ['IoT sensors', 'AI prediction', 'Automated feeding'],
      },
    ],
    vietnamContext: {
      title: 'Việt Nam: Cường quốc biển',
      content: [
        'Với đường bờ biển dài 3.260 km, Việt Nam có tiềm năng to lớn để phát triển kinh tế biển.',
        'Chính phủ đã phê duyệt "Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045".',
        'Các ngành kinh tế biển trọng điểm bao gồm du lịch, thủy sản, năng lượng tái tạo, và vận tải biển.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Thu Hà',
      title: 'Chuyên gia Quy hoạch Biển',
      company: 'Viện Nghiên cứu Biển và Hải đảo',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-thu-ha',
      quote:
        'Làm việc trong lĩnh vực kinh tế biển là cơ hội để góp phần xây dựng tương lai thịnh vượng và bền vững cho đất nước, dựa trên những tài nguyên quý giá mà thiên nhiên ban tặng.',
    },
    quizzes: [
      {
        question: 'Kinh tế biển xanh là gì?',
        options: [
          'Khai thác tài nguyên biển tối đa',
          'Sử dụng bền vững tài nguyên biển để phát triển kinh tế, cải thiện sinh kế và việc làm',
          'Chỉ tập trung vào du lịch biển',
          'Cấm hoàn toàn các hoạt động trên biển',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Kinh tế biển xanh nhấn mạnh sự cân bằng giữa phát triển kinh tế và bảo vệ môi trường biển, đảm bảo sự bền vững cho các thế hệ tương lai.',
      },
    ],
    faqs: [
      {
        question: 'Kinh tế biển xanh khác gì so với kinh tế biển truyền thống?',
        answer:
          'Kinh tế biển truyền thống thường tập trung vào việc khai thác tối đa tài nguyên. Kinh tế biển xanh đặt sự bền vững làm trọng tâm, tìm cách phát triển kinh tế đồng thời bảo vệ sức khỏe của hệ sinh thái biển và cải thiện phúc lợi của cộng đồng ven biển.',
      },
      {
        question: 'Tại sao Việt Nam có tiềm năng lớn về kinh tế biển xanh?',
        answer:
          'Việt Nam có đường bờ biển dài hơn 3.200 km, đa dạng sinh học cao, và vị trí chiến lược. Điều này tạo điều kiện thuận lợi cho nhiều ngành như du lịch, năng lượng tái tạo (đặc biệt là điện gió ngoài khơi), nuôi trồng thủy sản công nghệ cao và vận tải biển.',
      },
      {
        question: 'Những thách thức chính đối với phát triển kinh tế biển xanh ở Việt Nam là gì?',
        answer:
          'Các thách thức bao gồm ô nhiễm môi trường biển, khai thác tài nguyên quá mức, tác động của biến đổi khí hậu, và nhu cầu về công nghệ cao cũng như nguồn nhân lực chất lượng. Việc cân bằng giữa phát triển và bảo tồn là một bài toán khó.',
      },
      {
        question: 'Một ví dụ về ứng dụng công nghệ trong kinh tế biển xanh được đề cập trong module là gì?',
        answer:
          'Module đề cập đến việc sử dụng IoT và AI trong nuôi trồng thủy sản thông minh. Các cảm biến giám sát chất lượng nước theo thời gian thực, và AI giúp dự đoán, tối ưu hóa việc cho ăn, qua đó tăng năng suất và giảm tác động đến môi trường.',
      },
    ],
  },
  {
    id: 'smart-aquaculture-systems',
    title: 'Hệ Thống Nuôi Trồng Thủy Sản Thông Minh',
    description: 'Ứng dụng IoT, AI trong nuôi trồng thủy sản - ngành thứ 3 thế giới của Việt Nam',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=6-55gCWc5K0',
    imageUrl: 'https://i.ytimg.com/vi/Q7HnMqimzG4/hqdefault.jpg',
    objectives: [
      'Thiết kế hệ thống IoT cho nuôi trồng thủy sản',
      'Áp dụng AI trong dự đoán và tối ưu hóa',
      'Phát triển giải pháp tự động hóa cho trang trại thủy sản',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT', 'Hiểu biết về nuôi trồng thủy sản', 'Lập trình cơ bản'],
    exercises: [
      {
        title: 'Xây Dựng Hệ Thống Giám Sát Ao Nuôi',
        description: 'Thiết kế và lập trình hệ thống IoT cho ao nuôi tôm',
        difficulty: 'Trung bình',
        materials: ['Arduino/ESP32', 'Cảm biến pH, nhiệt độ, oxy', 'Module WiFi'],
        procedure: [
          'Lắp đặt cảm biến trong ao nuôi',
          'Lập trình thu thập và truyền dữ liệu',
          'Xây dựng dashboard giám sát real-time',
          'Thiết lập cảnh báo tự động',
        ],
        expectedResults: 'Hệ thống giám sát hoàn chỉnh với cảnh báo thông minh',
      },
    ],
    realWorldApplications: [
      'Tự động hóa cho trang trại thủy sản',
      'Hệ thống cảnh báo sớm',
      'Tối ưu hóa thức ăn và môi trường',
    ],
    vietnamContext: {
      title: 'Nuôi trồng thủy sản 4.0 tại Việt Nam',
      content: [
        'Việt Nam là một trong những nước xuất khẩu thủy sản hàng đầu thế giới.',
        'Việc áp dụng công nghệ cao giúp tăng năng suất, giảm rủi ro dịch bệnh và bảo vệ môi trường.',
        'Các tập đoàn lớn như Minh Phú, Việt-Úc đang đi đầu trong việc ứng dụng công nghệ vào nuôi tôm.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Văn Quang',
      title: 'Kỹ sư tự động hóa',
      company: 'R&D Department, a local aquaculture tech firm',
      imageUrl: 'https://i.pravatar.cc/150?u=le-van-quang',
      quote:
        'Kết hợp công nghệ với nông nghiệp là con đường tất yếu. Chúng tôi tự hào tạo ra những giải pháp giúp người nông dân làm giàu trên chính mảnh đất quê hương một cách bền vững.',
    },
    quizzes: [
      {
        question: 'Lợi ích chính của việc áp dụng IoT trong nuôi trồng thủy sản là gì?',
        options: [
          'Giảm chi phí mua giống',
          'Giám sát chất lượng nước theo thời gian thực và tự động hóa',
          'Tăng diện tích ao nuôi',
          'Không cần nhân công',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT cho phép giám sát liên tục các chỉ số quan trọng của môi trường nước (pH, oxy hòa tan, nhiệt độ), từ đó đưa ra cảnh báo và điều khiển tự động, giúp tối ưu hóa điều kiện sống cho vật nuôi.',
      },
    ],
    faqs: [
      {
        question: 'Hệ thống nuôi trồng thủy sản thông minh giải quyết vấn đề gì?',
        answer:
          'Nó giải quyết các vấn đề về rủi ro dịch bệnh, lãng phí thức ăn, và ô nhiễm môi trường trong nuôi trồng thủy sản truyền thống bằng cách sử dụng công nghệ để giám sát và kiểm soát chính xác các điều kiện ao nuôi.',
      },
      {
        question: 'AI được ứng dụng như thế nào trong hệ thống này?',
        answer:
          'AI có thể phân tích dữ liệu từ các cảm biến để dự đoán nguy cơ dịch bệnh, tối ưu hóa lượng thức ăn cần thiết dựa trên hành vi của vật nuôi, và đề xuất các hành động can thiệp kịp thời để duy trì môi trường nước lý tưởng.',
      },
      {
        question: 'Chi phí để triển khai một hệ thống như vậy có cao không?',
        answer:
          'Chi phí ban đầu có thể cao hơn so với phương pháp truyền thống, nhưng về lâu dài, hệ thống có thể giúp tiết kiệm chi phí thức ăn, giảm tổn thất do dịch bệnh và tăng năng suất, dẫn đến lợi tức đầu tư (ROI) tốt.',
      },
      {
        question: 'Người nông dân không rành công nghệ có thể sử dụng hệ thống này không?',
        answer:
          'Có. Các hệ thống hiện đại thường được thiết kế với giao diện thân thiện, trực quan trên điện thoại thông minh. Người nông dân có thể nhận cảnh báo và xem các chỉ số quan trọng một cách dễ dàng mà không cần kiến thức kỹ thuật sâu.',
      },
    ],
  },
  {
    id: 'marine-renewable-energy',
    title: 'Năng Lượng Tái Tạo Biển',
    description: 'Phát triển năng lượng gió ngoài khơi và các công nghệ năng lượng biển khác',
    duration: '110 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LsLFgVISkfQ',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Thiết kế hệ thống năng lượng gió ngoài khơi',
      'Đánh giá tiềm năng năng lượng sóng và thủy triều',
      'Phân tích kinh tế dự án năng lượng biển',
    ],
    prerequisites: ['Kiến thức về năng lượng tái tạo', 'Hiểu biết về môi trường biển', 'Kỹ năng phân tích tài chính'],
    exercises: [
      {
        title: 'Thiết Kế Trang Trại Gió Ngoài Khơi',
        description: 'Lập kế hoạch và thiết kế trang trại gió cho vùng biển Việt Nam',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích dữ liệu gió và điều kiện biển',
          'Thiết kế layout tối ưu cho turbine',
          'Tính toán hiệu quả kinh tế',
          'Đánh giá tác động môi trường',
        ],
      },
    ],
    realWorldApplications: [
      'Dự án năng lượng gió ngoài khơi',
      'Năng lượng sóng và thủy triều',
      'Tích hợp lưới điện thông minh',
    ],
    vietnamContext: {
      title: 'Tiềm năng điện gió ngoài khơi của Việt Nam',
      content: [
        'Việt Nam được đánh giá là có tiềm năng điện gió ngoài khơi lớn nhất Đông Nam Á.',
        'Nhiều dự án điện gió ngoài khơi quy mô lớn đang được đề xuất tại các tỉnh như Bình Thuận, Ninh Thuận, Bạc Liêu.',
        'Phát triển điện gió ngoài khơi góp phần đảm bảo an ninh năng lượng và giảm phát thải khí nhà kính.',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thị Thanh Mai',
      title: 'Kỹ sư dự án năng lượng tái tạo',
      company: 'T&T Group',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thanh-mai',
      quote:
        'Phát triển năng lượng tái tạo từ biển là một lĩnh vực mới mẻ và đầy thách thức, nhưng đó cũng là cơ hội để chúng ta tạo ra một tương lai năng lượng sạch và bền vững cho Việt Nam.',
    },
    quizzes: [
      {
        question: 'Tại sao điện gió ngoài khơi có tiềm năng lớn hơn điện gió trên bờ?',
        options: [
          'Dễ lắp đặt hơn',
          'Gió ngoài khơi thường mạnh và ổn định hơn',
          'Chi phí thấp hơn',
          'Không ảnh hưởng đến cảnh quan',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tốc độ gió ngoài khơi thường cao hơn và ít bị ảnh hưởng bởi các vật cản hơn so với trên đất liền, giúp các tuabin gió hoạt động hiệu quả và tạo ra sản lượng điện lớn hơn.',
      },
    ],
    faqs: [
      {
        question: 'Ngoài năng lượng gió, còn có loại năng lượng tái tạo biển nào khác?',
        answer:
          'Ngoài gió, biển còn cung cấp năng lượng từ sóng, thủy triều, dòng chảy và sự chênh lệch nhiệt độ giữa các lớp nước (OTEC). Mỗi loại có tiềm năng và thách thức công nghệ riêng.',
      },
      {
        question: 'Xây dựng một trang trại gió ngoài khơi có tác động gì đến môi trường biển?',
        answer:
          'Các tác động tiềm tàng bao gồm tiếng ồn dưới nước ảnh hưởng đến sinh vật biển trong quá trình xây dựng, sự thay đổi của đáy biển, và rủi ro va chạm đối với chim biển. Do đó, việc đánh giá tác động môi trường (EIA) kỹ lưỡng là cực kỳ quan trọng.',
      },
      {
        question: 'Làm thế nào để truyền tải điện từ ngoài khơi vào đất liền?',
        answer:
          'Điện được truyền tải qua các hệ thống cáp ngầm dưới biển công suất lớn, thường là cáp điện một chiều cao thế (HVDC) để giảm tổn thất năng lượng trên khoảng cách xa.',
      },
      {
        question: 'Chi phí sản xuất điện gió ngoài khơi có cạnh tranh không?',
        answer:
          'Hiện tại, chi phí vẫn cao hơn so với điện gió trên bờ và điện mặt trời. Tuy nhiên, với sự tiến bộ của công nghệ và quy mô dự án ngày càng lớn, chi phí đang giảm nhanh chóng và dự kiến sẽ trở nên rất cạnh tranh trong tương lai gần.',
      },
    ],
  },
  {
    id: 'marine-biotechnology',
    title: 'Công Nghệ Sinh Học Biển',
    description: 'Ứng dụng sinh học biển trong dược phẩm và công nghiệp',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=EbeF-W2FAW8',
    imageUrl: 'https://i.ytimg.com/vi/BONcmJeiBic/hqdefault.jpg',
    objectives: [
      'Khám phá tiềm năng sinh học của các loài biển Việt Nam',
      'Phát triển quy trình chiết xuất hợp chất sinh học',
      'Ứng dụng trong dược phẩm và mỹ phẩm',
    ],
    prerequisites: ['Kiến thức sinh học phân tử', 'Hóa học cơ bản', 'Hiểu biết về dược phẩm'],
    exercises: [
      {
        title: 'Nghiên Cứu Hợp Chất Từ Rong Biển',
        description: 'Chiết xuất và phân tích hoạt chất từ rong biển địa phương',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập và xử lý mẫu rong biển',
          'Chiết xuất các hợp chất sinh học',
          'Phân tích cấu trúc và hoạt tính',
          'Đánh giá tiềm năng ứng dụng',
        ],
      },
    ],
    realWorldApplications: ['Phát triển thuốc từ biển', 'Mỹ phẩm từ nguyên liệu biển', 'Thực phẩm chức năng'],
    vietnamContext: {
      title: 'Kho báu dược liệu từ biển Việt Nam',
      content: [
        'Việt Nam có đa dạng sinh học biển cao, là nguồn tài nguyên quý giá cho công nghệ sinh học.',
        'Viện Hàn lâm Khoa học và Công nghệ Việt Nam đang có nhiều nghiên cứu về các hợp chất có hoạt tính sinh học từ sinh vật biển.',
        'Các sản phẩm từ rong biển, hải sâm đang ngày càng được ưa chuộng trên thị trường.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Hoàng Văn Nam',
      title: 'Nhà nghiên cứu',
      company: 'Viện Công nghệ sinh học',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-van-nam',
      quote:
        'Biển cả là một phòng thí nghiệm khổng lồ với vô vàn bí ẩn chưa được khám phá. Mỗi chuyến đi thực địa là một hành trình tìm kiếm những hợp chất mới có thể cứu sống con người.',
    },
    quizzes: [
      {
        question: 'Công nghệ sinh học biển có thể được ứng dụng trong lĩnh vực nào?',
        options: [
          'Chỉ sản xuất thuốc',
          'Chỉ làm mỹ phẩm',
          'Chỉ làm thực phẩm',
          'Dược phẩm, mỹ phẩm, thực phẩm, năng lượng sinh học và nhiều lĩnh vực khác',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Công nghệ sinh học biển có phạm vi ứng dụng rất rộng, từ việc tìm kiếm các hợp chất mới cho y học, tạo ra các thành phần tự nhiên cho mỹ phẩm, đến việc phát triển nhiên liệu sinh học từ tảo.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao sinh vật biển lại là nguồn dược liệu tiềm năng?',
        answer:
          'Sinh vật biển sống trong môi trường khắc nghiệt và cạnh tranh cao, do đó chúng tiến hóa để tạo ra các hợp chất hóa học độc đáo có hoạt tính sinh học mạnh (như kháng khuẩn, chống viêm, chống ung thư) mà không tìm thấy trên cạn.',
      },
      {
        question: 'Việc khai thác sinh vật biển để làm thuốc có gây hại cho hệ sinh thái không?',
        answer:
          'Đây là một rủi ro lớn. Do đó, các nhà khoa học đang tập trung vào các phương pháp bền vững như nuôi cấy tế bào sinh vật biển trong phòng thí nghiệm hoặc tổng hợp hóa học các hợp chất đã được xác định, thay vì khai thác trực tiếp từ tự nhiên.',
      },
      {
        question: 'Một ví dụ về thuốc thành công từ biển là gì?',
        answer:
          'Ziconotide (tên thương mại Prialt), một loại thuốc giảm đau cực mạnh, được phát triển từ nọc độc của ốc nón biển. Một ví dụ khác là Trabectedin (Yondelis), một loại thuốc điều trị ung thư, có nguồn gốc từ một loài hải tiêu (sea squirt).',
      },
      {
        question: 'Làm thế nào để tìm kiếm các hợp chất mới trong đại dương?',
        answer:
          'Quá trình này bao gồm việc thu thập mẫu từ các môi trường đa dạng (như rạn san hô, miệng phun thủy nhiệt), sau đó sử dụng các kỹ thuật sàng lọc thông lượng cao để kiểm tra hàng ngàn chiết xuất đối với các hoạt tính sinh học mong muốn (ví dụ: khả năng tiêu diệt tế bào ung thư).',
      },
    ],
  },
  {
    id: 'sustainable-fisheries-management',
    title: 'Quản Lý Nghề Cá Bền Vững',
    description: 'Công nghệ và phương pháp quản lý nguồn lợi thủy sản bền vững',
    duration: '95 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=-FODESgY0aQ',
    imageUrl: 'https://i.ytimg.com/vi/ZtHcKbCfbi8/hqdefault.jpg',
    objectives: [
      'Áp dụng công nghệ trong quản lý nghề cá',
      'Phát triển hệ thống truy xuất nguồn gốc',
      'Thiết lập mô hình nghề cá bền vững',
    ],
    prerequisites: ['Hiểu biết về nghề cá', 'Kiến thức về blockchain cơ bản', 'Quản lý tài nguyên'],
    exercises: [
      {
        title: 'Hệ Thống Truy Xuất Hải Sản',
        description: 'Xây dựng hệ thống blockchain cho truy xuất nguồn gốc hải sản',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế schema dữ liệu sản phẩm',
          'Implement smart contract',
          'Tạo app mobile cho ngư dân',
          'Xây dựng portal cho người tiêu dùng',
        ],
      },
    ],
    realWorldApplications: ['Hệ thống truy xuất thực phẩm', 'Quản lý đội tàu cá', 'Chứng nhận bền vững'],
    vietnamContext: {
      title: 'Chống khai thác IUU và truy xuất nguồn gốc',
      content: [
        'Việt Nam đang nỗ lực chống khai thác hải sản bất hợp pháp, không báo cáo và không theo quy định (IUU) để gỡ "thẻ vàng" của Ủy ban châu Âu.',
        'Việc áp dụng công nghệ truy xuất nguồn gốc điện tử là một yêu cầu bắt buộc để xuất khẩu hải sản sang các thị trường khó tính.',
        'Nhiều doanh nghiệp và ngư dân đang chuyển đổi sang các phương pháp khai thác bền vững hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Văn Bình',
      title: 'Thuyền trưởng tàu cá',
      company: 'Hợp tác xã nghề cá Rạng Đông',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-binh',
      quote:
        'Trước đây chúng tôi chỉ biết ra khơi và đánh bắt. Giờ đây, chúng tôi học cách ghi nhật ký điện tử, sử dụng công nghệ để bảo vệ nguồn lợi. Biển nuôi sống chúng tôi, chúng tôi phải giữ gìn biển.',
    },
    quizzes: [
      {
        question: 'Mục đích chính của hệ thống truy xuất nguồn gốc hải sản là gì?',
        options: [
          'Để bán cá giá cao hơn',
          'Để chứng minh nguồn gốc hợp pháp và an toàn của sản phẩm, tăng cường niềm tin cho người tiêu dùng',
          'Để theo dõi ngư dân',
          'Để tính thuế',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hệ thống truy xuất nguồn gốc giúp minh bạch hóa toàn bộ chuỗi cung ứng, từ lúc đánh bắt đến khi tới tay người tiêu dùng, đảm bảo sản phẩm tuân thủ các quy định về an toàn thực phẩm và khai thác bền vững.',
      },
    ],
    faqs: [
      {
        question: 'IUU là gì và tại sao nó lại là một vấn đề nghiêm trọng?',
        answer:
          'IUU là viết tắt của Khai thác Bất hợp pháp, Không báo cáo và Không theo quy định (Illegal, Unreported, and Unregulated). Nó là một vấn đề toàn cầu gây cạn kiệt nguồn lợi cá, phá hủy môi trường biển, và tạo ra sự cạnh tranh không công bằng với những ngư dân tuân thủ pháp luật.',
      },
      {
        question: 'Công nghệ có thể giúp chống khai thác IUU như thế nào?',
        answer:
          'Công nghệ đóng vai trò quan trọng thông qua Hệ thống giám sát tàu cá (VMS), nhật ký khai thác điện tử, và công nghệ blockchain để truy xuất nguồn gốc. Những công cụ này giúp cơ quan chức năng theo dõi hoạt động của tàu cá và đảm bảo tính minh bạch của chuỗi cung ứng.',
      },
      {
        question: 'Blockchain giúp ích gì trong việc truy xuất nguồn gốc hải sản?',
        answer:
          'Blockchain tạo ra một sổ cái kỹ thuật số không thể thay đổi. Mỗi bước trong chuỗi cung ứng (đánh bắt, chế biến, vận chuyển) có thể được ghi lại như một giao dịch. Điều này giúp người tiêu dùng và nhà quản lý có thể xác minh chính xác nguồn gốc và hành trình của sản phẩm, chống lại gian lận.',
      },
      {
        question: 'Là một người tiêu dùng, tôi có thể làm gì để ủng hộ nghề cá bền vững?',
        answer:
          'Bạn có thể chọn mua các sản phẩm hải sản có nhãn chứng nhận bền vững (như MSC - Marine Stewardship Council), ưu tiên các loài không bị đánh bắt quá mức, và đặt câu hỏi cho nhà bán lẻ về nguồn gốc của sản phẩm.',
      },
    ],
  },
];

export const blueEconomyModuleData: ModuleData = {
  id: K2Module.BlueEconomy,
  title: 'Kinh tế biển & Công nghệ hàng hải',
  subtitle: 'Khai phá tiềm năng đại dương bền vững',
  description:
    'Khám phá tiềm năng của kinh tế biển bền vững, từ nuôi trồng thủy sản công nghệ cao đến năng lượng tái tạo từ biển và công nghệ sinh học biển.',
  category: 'Khoa học & Kỹ thuật',
  icon: '🌊',
  color: 'from-blue-500 to-cyan-400',
  duration: '18-24 giờ',
  features: [
    'Nuôi trồng Thủy sản Bền vững',
    'Năng lượng Tái tạo từ Biển',
    'Công nghệ Sinh học Biển',
    'Quản lý Nghề cá Bền vững',
  ],
  prerequisites: [
    'Kiến thức về khoa học môi trường',
    'Hiểu biết về kinh tế học cơ bản',
    'Quan tâm đến các vấn đề về biển và đại dương',
  ],
  lessons: blueEconomyLessons,
  objectives: [
    'Trang bị kiến thức toàn diện về kinh tế biển xanh, có khả năng phân tích, đánh giá và đề xuất các giải pháp phát triển kinh tế biển bền vững tại Việt Nam.',
  ],
  careerOutcomes: [
    'Chuyên gia quy hoạch biển',
    'Kỹ sư năng lượng tái tạo',
    'Chuyên gia quản lý tài nguyên biển',
    'Doanh nhân trong lĩnh vực công nghệ biển',
  ],
  relatedModules: [K2Module.GreenTechnology, K2Module.SustainableAgriculture, K2Module.DataScienceAnalytics],
  heroImageUrl: 'https://images.unsplash.com/photo-1610883999933-2f6a7f699b4b?w=1200&h=600&fit=crop',
  level: 'Trung cấp',
  industryApplications: [
    'Nuôi trồng thủy sản bền vững',
    'Năng lượng tái tạo biển',
    'Công nghệ sinh học biển',
    'Du lịch sinh thái biển',
    'Quản lý và bảo tồn tài nguyên biển',
  ],
  marketDemand: {
    averageSalary: '70.000 - 120.000 USD/năm',
    jobGrowth: '10%',
    hireDemand: 'Cao',
  },
};
