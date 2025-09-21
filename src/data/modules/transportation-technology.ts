import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export interface TransportationTechnologyLesson extends BaseLessonData {
  // This can be expanded with specific properties for this module
  // Adding a dummy property to satisfy the linter
  module: 'Transportation';
}

export const transportationTechnologyLessons: TransportationTechnologyLesson[] = [
  {
    id: 'smart-mobility-urban-transportation',
    title: 'Smart Mobility & Vận Tải Đô Thị Thông Minh',
    description:
      'Comprehensive smart mobility solutions including intelligent transportation systems, traffic optimization, shared mobility platforms, và urban transportation innovation.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=_3UWHes2SE0', // Smart Mobility and Urban Transportation
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    module: 'Transportation',
    objectives: [
      'Design intelligent transportation systems cho urban environments',
      'Develop smart traffic management và optimization solutions',
      'Create shared mobility platforms và ride-sharing applications',
      'Implement IoT-based transportation monitoring systems',
      'Build data-driven mobility analytics và prediction models',
    ],
    prerequisites: [
      'Basic transportation engineering knowledge',
      'IoT systems understanding',
      'Data analytics fundamentals',
    ],
    exercises: [
      {
        title: 'Smart Traffic Management System Design',
        description:
          'Design comprehensive smart traffic management system cho major Vietnamese city intersection với adaptive signal control',
        difficulty: 'Nâng cao',
        materials: [
          'Traffic simulation software',
          'IoT sensor specifications',
          'Data analytics platforms',
          'Urban planning tools',
        ],
        procedure: [
          'Analyze current traffic patterns và bottlenecks trong target intersection',
          'Design IoT sensor network cho real-time traffic monitoring',
          'Develop adaptive traffic signal control algorithms',
          'Create mobile app cho citizen traffic information',
          'Implement performance measurement system cho traffic flow optimization',
        ],
        expectedResults:
          'Complete smart traffic system design với measurable improvements trong traffic flow và reduced congestion',
        solution:
          'Integrated smart traffic solution combining IoT sensors, machine learning optimization, và citizen engagement platforms',
      },
    ],
    realWorldApplications: [
      'Grab traffic optimization algorithms',
      'Ho Chi Minh City smart traffic pilot projects',
      'Bus rapid transit (BRT) system optimization',
      'Motorcycle taxi app development',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội Giao thông Thông minh tại Việt Nam',
      content: [
        'Việt Nam, với đặc thù giao thông đô thị đông đúc và sự thống trị của xe máy, đang đối mặt với những thách thức lớn về ùn tắc và ô nhiễm. Đây chính là mảnh đất màu mỡ cho các giải pháp giao thông thông minh (Smart Mobility).',
        'Các ứng dụng gọi xe công nghệ như Grab và Gojek đã thay đổi bộ mặt giao thông đô thị, trong khi các dự án metro và BRT đang được kỳ vọng sẽ hiện đại hóa hệ thống giao thông công cộng.',
        'Chính phủ đang khuyến khích các dự án ứng dụng IoT, AI và dữ liệu lớn để giải quyết các bài toán giao thông, từ điều khiển đèn tín hiệu thông minh đến quy hoạch đô thị bền vững.',
      ],
    },
    caseStudies: [
      {
        title: 'VinBus: Hiện Đại Hóa Giao Thông Công Cộng',
        organization: 'VinBus',
        problem:
          'Hệ thống xe buýt công cộng truyền thống tại các thành phố lớn như Hà Nội và TP.HCM chưa đủ hấp dẫn người dân, chất lượng dịch vụ không đồng đều và gây ô nhiễm.',
        solution:
          'VinBus ra mắt đội xe buýt điện 100%, tích hợp công nghệ hiện đại như wifi miễn phí, cổng sạc USB, hệ thống vé điện tử và ứng dụng theo dõi xe theo thời gian thực. Mạng lưới tuyến được quy hoạch để kết nối các khu đô thị lớn và các điểm trung chuyển quan trọng.',
        impact:
          'Nâng cao trải nghiệm người dùng, thu hút một lượng lớn người dân chuyển sang sử dụng phương tiện công cộng, góp phần giảm ùn tắc và ô nhiễm không khí. VinBus trở thành biểu tượng của giao thông công cộng hiện đại tại Việt Nam.',
        innovations: ['Xe buýt điện 100%', 'Ứng dụng di động thông minh', 'Hệ thống vé không tiền mặt'],
      },
      {
        title: 'Grab: Tối ưu hóa Di chuyển bằng Dữ liệu',
        organization: 'Grab Vietnam',
        problem:
          'Nhu cầu di chuyển lớn trong các đô thị phức tạp, khó khăn trong việc kết nối tài xế và hành khách một cách hiệu quả, đặc biệt trong giờ cao điểm.',
        solution:
          'Grab sử dụng các thuật toán dựa trên dữ liệu lớn và AI để dự đoán nhu cầu, tối ưu hóa việc điều phối tài xế, và đề xuất giá cước linh hoạt. Bản đồ số của Grab được cập nhật liên tục để tìm ra các tuyến đường nhanh nhất, tránh các điểm ùn tắc.',
        impact:
          'Giảm thời gian chờ đợi cho khách hàng, tăng thu nhập cho tài xế, và góp phần làm giảm ùn tắc cục bộ bằng cách tối ưu hóa các chuyến đi. Grab đã trở thành một phần không thể thiếu trong hệ sinh thái di chuyển đô thị.',
        innovations: ['Thuật toán điều phối thông minh', 'Giá cước động', 'Bản đồ số thời gian thực'],
      },
    ],
    careerConnect: {
      name: 'Lê Diệp Kiều Trang',
      title: 'Cựu CEO, Go-Viet (nay là Gojek Vietnam)',
      company: 'Gojek Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-diep-kieu-trang',
      quote:
        'Công nghệ có sức mạnh để giải quyết những vấn đề cố hữu của xã hội, và giao thông là một trong số đó. Bằng cách kết hợp sự thấu hiểu thị trường địa phương với các giải pháp công nghệ tiên tiến, chúng ta có thể tạo ra những thay đổi lớn lao cho cuộc sống hàng ngày của hàng triệu người.',
    },
    quizzes: [
      {
        question: 'Giải pháp nào được VinBus triển khai để hiện đại hóa giao thông công cộng tại Việt Nam?',
        options: [
          'Sử dụng xe buýt chạy bằng khí gas',
          'Ra mắt đội xe buýt điện 100% tích hợp công nghệ',
          'Giảm giá vé cho tất cả mọi người',
          'Tăng số lượng tuyến xe buýt truyền thống',
        ],
        correctAnswerIndex: 1,
        explanation:
          'VinBus đã tạo ra một bước đột phá bằng việc sử dụng đội xe buýt điện hoàn toàn, kết hợp với các tiện ích công nghệ cao để nâng cao trải nghiệm người dùng và bảo vệ môi trường.',
      },
      {
        question: 'Công nghệ cốt lõi nào giúp Grab tối ưu hóa việc kết nối tài xế và hành khách?',
        options: [
          'Công nghệ Blockchain',
          'Thực tế ảo (VR)',
          'Thuật toán dựa trên dữ liệu lớn và AI',
          'Năng lượng mặt trời',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Grab sử dụng sức mạnh của dữ liệu lớn và trí tuệ nhân tạo để phân tích, dự đoán và tối ưu hóa mọi khía cạnh của hoạt động, từ điều phối xe đến định giá và tìm đường.',
      },
    ],
    faqs: [
      {
        question: 'Smart Mobility (Di chuyển thông minh) là gì?',
        answer:
          'Smart Mobility là việc ứng dụng công nghệ (như IoT, AI, dữ liệu lớn) để tạo ra một hệ thống giao thông an toàn, hiệu quả, và bền vững hơn. Nó không chỉ là về phương tiện thông minh, mà còn bao gồm cả hạ tầng thông minh và người dùng thông minh.',
      },
      {
        question: 'Tại sao xe máy lại là một thách thức lớn cho giao thông thông minh ở Việt Nam?',
        answer:
          'Hành vi di chuyển của xe máy rất linh hoạt và khó dự đoán hơn ô tô. Chúng có thể di chuyển trong không gian hẹp, thường xuyên thay đổi làn đường. Bất kỳ hệ thống giao thông thông minh nào ở Việt Nam đều phải được "huấn luyện" đặc biệt để hiểu và dự đoán hành vi của dòng xe máy dày đặc, một đặc thù không có ở nhiều nước phương Tây.',
      },
      {
        question: 'Hệ thống giao thông thông minh (ITS) bao gồm những thành phần nào?',
        answer:
          'ITS (Intelligent Transportation Systems) là một tập hợp các công nghệ. Các thành phần chính bao gồm: cảm biến (camera, radar) để thu thập dữ liệu, mạng lưới truyền thông (5G, Wifi) để truyền dữ liệu, trung tâm điều hành để phân tích và ra quyết định, và các thiết bị đầu cuối (đèn tín hiệu, bảng thông báo, ứng dụng di động) để thực thi và thông báo.',
      },
      {
        question: 'MaaS (Mobility as a Service) là gì?',
        answer:
          'MaaS là một mô hình tích hợp các dịch vụ vận tải khác nhau (xe buýt, metro, taxi, xe đạp chia sẻ) vào một nền tảng kỹ thuật số duy nhất. Người dùng có thể lập kế hoạch, đặt vé và thanh toán cho toàn bộ hành trình của mình qua một ứng dụng duy nhất, thay vì phải sử dụng nhiều ứng dụng riêng lẻ.',
      },
      {
        question: 'Làm thế nào AI có thể giúp giảm ùn tắc giao thông?',
        answer:
          'AI có thể phân tích dữ liệu giao thông theo thời gian thực từ nhiều nguồn để dự đoán các điểm có nguy cơ ùn tắc. Dựa trên đó, nó có thể tự động điều chỉnh thời gian của đèn tín hiệu, đề xuất các tuyến đường thay thế cho người lái xe, và tối ưu hóa lịch trình của phương tiện công cộng.',
      },
      {
        question: 'Giao thông đa phương thức (Multimodal Transportation) có lợi ích gì?',
        answer:
          'Nó cho phép người dân kết hợp nhiều loại phương tiện trong một hành trình (ví dụ: đi xe đạp đến ga metro, sau đó đi bộ đến văn phòng). Điều này giúp giảm sự phụ thuộc vào xe cá nhân, tăng tính linh hoạt, tiết kiệm chi phí và thân thiện với môi trường hơn.',
      },
      {
        question: 'Thanh toán không tiếp xúc đóng vai trò gì trong giao thông thông minh?',
        answer:
          'Nó giúp quá trình lên xuống các phương tiện công cộng nhanh chóng và liền mạch hơn, giảm thời gian dừng tại các trạm. Việc sử dụng thẻ ngân hàng, ví điện tử hoặc mã QR để thanh toán giúp loại bỏ nhu cầu mua vé giấy, làm cho giao thông công cộng trở nên thuận tiện và hấp dẫn hơn.',
      },
      {
        question: 'Dữ liệu lớn (Big Data) được sử dụng trong giao thông đô thị như thế nào?',
        answer:
          'Dữ liệu từ GPS, camera, cảm biến và ứng dụng di động được thu thập và phân tích để hiểu rõ các mô hình di chuyển của người dân. Các nhà quy hoạch sử dụng thông tin này để xác định nơi cần xây dựng đường mới, mở tuyến xe buýt mới, hoặc bố trí các trạm xe đạp chia sẻ một cách hiệu quả.',
      },
      {
        question: 'Thách thức về quyền riêng tư trong giao thông thông minh là gì?',
        answer:
          'Việc thu thập một lượng lớn dữ liệu di chuyển cá nhân làm dấy lên lo ngại về quyền riêng tư. Các hệ thống giao thông thông minh phải đảm bảo rằng dữ liệu được ẩn danh hóa, mã hóa và chỉ được sử dụng cho các mục đích đã định, đồng thời phải có các chính sách rõ ràng về việc ai có thể truy cập và sử dụng dữ liệu này.',
      },
      {
        question: 'Tương lai của vận tải đô thị ở Việt Nam sẽ như thế nào?',
        answer:
          'Tương lai sẽ là một hệ sinh thái tích hợp, nơi các phương tiện công cộng sức chứa lớn (metro, BRT) đóng vai trò xương sống, kết nối với các dịch vụ di chuyển linh hoạt như xe buýt nhỏ, taxi, xe ôm công nghệ và xe đạp/xe máy điện chia sẻ cho các chặng đường đầu và cuối.',
      },
    ],
  },
  {
    id: 'autonomous-vehicles-ai-systems',
    title: 'Xe Tự Lái & Hệ Thống AI Giao Thông',
    description:
      'Advanced autonomous vehicle technology including computer vision, machine learning, sensor fusion, và AI decision-making systems.',
    duration: '245 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=045xFAUb3a4', // Autonomous Vehicles and AI Systems
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    module: 'Transportation',
    objectives: [
      'Understand autonomous vehicle perception systems',
      'Implement machine learning algorithms cho vehicle navigation',
      'Design sensor fusion systems cho environmental awareness',
      'Develop real-time decision-making algorithms',
      'Create safety systems cho autonomous vehicle operation',
    ],
    prerequisites: ['Computer vision knowledge', 'Machine learning experience', 'Real-time systems understanding'],
    exercises: [
      {
        title: 'Vietnamese Traffic Autonomous Navigation System',
        description:
          'Develop autonomous vehicle navigation system optimized cho Vietnamese traffic conditions including motorcycles và mixed traffic',
        difficulty: 'Nâng cao',
        materials: [
          'Computer vision frameworks',
          'Machine learning platforms',
          'Sensor simulation tools',
          'Real-time processing hardware',
        ],
        procedure: [
          'Collect và annotate Vietnamese traffic scenario datasets',
          'Train computer vision models cho detecting motorcycles, bicycles, pedestrians',
          'Develop sensor fusion algorithms combining camera, LiDAR, radar data',
          'Create decision-making system handling Vietnamese traffic behaviors',
          'Test và validate system performance trong simulated Vietnamese traffic scenarios',
        ],
        expectedResults:
          'Autonomous vehicle system capable of navigating Vietnamese traffic conditions với high safety margins',
        solution:
          'Advanced AI system specifically trained on Vietnamese traffic patterns với cultural behavior adaptation',
      },
    ],
    realWorldApplications: [
      'VinFast autonomous vehicle development',
      'Thaco self-driving truck projects',
      'Autonomous delivery systems cho e-commerce',
      'Smart city autonomous shuttle services',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội với Xe Tự Lái tại Việt Nam',
      content: [
        'Việt Nam có mạng lưới giao thông đa dạng với nhiều loại phương tiện, từ ô tô, xe máy đến xe đạp. Điều này tạo ra cả thách thức và cơ hội cho công nghệ xe tự lái.',
        'Các thành phố lớn như Hà Nội và TP.HCM đang trong quá trình hiện đại hóa hạ tầng giao thông, mở ra cơ hội cho việc triển khai xe tự lái trong tương lai gần.',
        'Tuy nhiên, sự phức tạp trong hành vi giao thông và điều kiện thời tiết khắc nghiệt cũng đặt ra nhiều thách thức cho việc phát triển và triển khai công nghệ này.',
      ],
    },
    caseStudies: [
      {
        title: 'VinAI Autonomous Vehicle Research',
        organization: 'VinAI Research',
        problem: 'Developing autonomous vehicle technology adapted cho Vietnamese traffic conditions',
        solution:
          'AI models trained on Vietnamese traffic data, motorcycle-aware perception systems, cultural behavior modeling',
        impact:
          'Achieved Level 3 autonomy in controlled environments, developed Vietnamese traffic datasets, advanced safety systems',
        innovations: [
          'Motorcycle-aware AI systems',
          'Vietnamese traffic behavior modeling',
          'Tropical weather adaptation',
        ],
      },
    ],
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Giám đốc Công nghệ, Công ty Xe tự lái Việt Nam',
      company: 'Công ty Xe tự lái Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Xe tự lái không chỉ là tương lai của giao thông vận tải, mà còn là một phần quan trọng trong việc giải quyết các vấn đề ô nhiễm và ùn tắc giao thông tại Việt Nam. Chúng tôi tin rằng, với công nghệ và sự sáng tạo, xe tự lái sẽ sớm trở thành hiện thực trên các đường phố Việt Nam.',
    },
    quizzes: [
      {
        question: 'Một trong những thách thức lớn nhất cho xe tự lái tại Việt Nam là gì?',
        options: [
          'Thiếu hạ tầng giao thông',
          'Chi phí phát triển cao',
          'Khó khăn trong việc nhận diện biển báo giao thông',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Xe tự lái phải đối mặt với nhiều thách thức tại Việt Nam, bao gồm hạ tầng giao thông chưa hoàn thiện, chi phí phát triển công nghệ cao và khó khăn trong việc nhận diện biển báo giao thông do sự đa dạng và phong phú của chúng.',
      },
      {
        question: 'Công nghệ nào giúp xe tự lái nhận diện và phản ứng với môi trường xung quanh?',
        options: ['Cảm biến LiDAR', 'Camera độ phân giải cao', 'Radar sóng millimeter', 'Tất cả các công nghệ trên'],
        correctAnswerIndex: 3,
        explanation:
          'Xe tự lái sử dụng sự kết hợp của nhiều công nghệ cảm biến khác nhau, bao gồm LiDAR, camera và radar, để nhận diện và phản ứng với môi trường xung quanh một cách chính xác và an toàn.',
      },
    ],
    faqs: [
      {
        question: 'Các cấp độ của xe tự lái là gì?',
        answer:
          'Có 6 cấp độ (từ 0 đến 5). Cấp 0 là không có tự động hóa. Cấp 1-2 là hỗ trợ lái (ví dụ: giữ làn, ga tự động). Cấp 3 là tự động hóa có điều kiện (xe có thể tự lái trong một số điều kiện, nhưng tài xế phải sẵn sàng can thiệp). Cấp 4 là tự động hóa cao (xe tự lái hoàn toàn trong hầu hết các điều kiện). Cấp 5 là tự động hóa hoàn toàn (không cần vô lăng hay bàn đạp).',
      },
      {
        question: 'LiDAR là gì và tại sao nó quan trọng cho xe tự lái?',
        answer:
          'LiDAR (Light Detection and Ranging) là một cảm biến hoạt động bằng cách phát ra các tia laser và đo thời gian chúng phản xạ lại. Nó tạo ra một "đám mây điểm" 3D cực kỳ chi tiết về môi trường xung quanh, giúp xe "nhìn" được trong bóng tối, sương mù và nhận diện chính xác hình dạng, khoảng cách của các vật thể.',
      },
      {
        question: 'Sự khác biệt giữa xe tự lái và xe được kết nối (connected car) là gì?',
        answer:
          'Xe tự lái tập trung vào khả năng tự vận hành của chiếc xe. Xe được kết nối tập trung vào việc giao tiếp với các phương tiện khác (V2V), hạ tầng (V2I), và mọi thứ khác (V2X). Một chiếc xe có thể được kết nối mà không tự lái, nhưng một chiếc xe tự lái hiệu quả nhất khi nó cũng được kết nối.',
      },
      {
        question: 'Hợp nhất cảm biến (Sensor Fusion) là gì?',
        answer:
          'Là quá trình kết hợp dữ liệu từ nhiều loại cảm biến khác nhau (như camera, LiDAR, radar) để tạo ra một bức tranh duy nhất, chính xác và đáng tin cậy hơn về môi trường xung quanh. Ví dụ, camera nhận dạng màu sắc tốt, trong khi LiDAR đo khoảng cách chính xác. Hợp nhất chúng lại sẽ cho kết quả tốt hơn từng cảm biến riêng lẻ.',
      },
      {
        question: 'Làm thế nào để "dạy" một chiếc xe tự lái?',
        answer:
          'Xe tự lái được "dạy" bằng cách sử dụng các mô hình học máy (machine learning), đặc biệt là học sâu (deep learning). Các mô hình này được huấn luyện trên một tập dữ liệu khổng lồ gồm hàng triệu km đường đi thực tế, chứa hình ảnh về các tình huống giao thông khác nhau. Từ đó, xe học cách nhận diện vật thể và đưa ra quyết định lái xe.',
      },
      {
        question: 'Xe tự lái có thể bị hack không?',
        answer:
          'Có, đây là một rủi ro nghiêm trọng. Bất kỳ hệ thống máy tính nào được kết nối đều có khả năng bị tấn công. Các nhà sản xuất xe tự lái đang đầu tư rất nhiều vào an ninh mạng để bảo vệ xe khỏi các cuộc tấn công có thể chiếm quyền điều khiển hoặc đánh cắp dữ liệu.',
      },
      {
        question: 'Vấn đề đạo đức "trolley problem" trong xe tự lái là gì?',
        answer:
          'Đây là một tình huống giả định khi xe tự lái phải đối mặt với một tai nạn không thể tránh khỏi và phải lựa chọn giữa hai kết quả tồi tệ (ví dụ: đâm vào một nhóm người đi bộ hoặc đánh lái để hy sinh hành khách). Các lập trình viên và nhà đạo đức học đang tranh luận về cách lập trình cho những quyết định khó khăn này.',
      },
      {
        question: 'Bản đồ độ phân giải cao (HD Map) có vai trò gì?',
        answer:
          'Bản đồ HD không chỉ cho biết đường đi mà còn chứa thông tin cực kỳ chi tiết về làn đường, biển báo, lề đường, cột đèn với độ chính xác đến từng centimet. Xe tự lái sử dụng bản đồ này để định vị chính xác vị trí của nó trên đường và lên kế hoạch cho các hành động tiếp theo.',
      },
      {
        question: 'Khi nào chúng ta sẽ thấy xe tự lái cấp 5 trên đường phố?',
        answer:
          'Xe tự lái cấp 4 (tự lái trong khu vực địa lý nhất định) đã bắt đầu xuất hiện dưới dạng taxi tự lái ở một số thành phố trên thế giới. Tuy nhiên, xe tự lái cấp 5, có thể đi đến bất cứ đâu, trong mọi điều kiện, vẫn còn là một thách thức lớn và có thể cần nhiều năm, thậm chí nhiều thập kỷ nữa để trở thành hiện thực phổ biến.',
      },
      {
        question: 'Xe tự lái sẽ thay đổi các thành phố như thế nào?',
        answer:
          'Nó có thể thay đổi hoàn toàn bộ mặt đô thị. Nhu cầu về bãi đỗ xe sẽ giảm mạnh vì xe có thể tự đi tìm chỗ đỗ hoặc liên tục phục vụ người khác. Tai nạn giao thông sẽ giảm, và thời gian di chuyển có thể được sử dụng để làm việc hoặc giải trí. Các thành phố có thể được thiết kế lại với nhiều không gian xanh và không gian cho con người hơn.',
      },
    ],
  },
  {
    id: 'logistics-supply-chain-optimization',
    title: 'Tối Ưu Hóa Logistics & Chuỗi Cung Ứng',
    description:
      'Advanced logistics optimization including route planning, warehouse automation, drone delivery systems, và supply chain visibility.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=1f-x7aJLJ20', // Logistics and Supply Chain Optimization
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    module: 'Transportation',
    objectives: [
      'Master advanced route optimization algorithms',
      'Design automated warehouse systems với robotics',
      'Implement drone delivery systems cho last-mile logistics',
      'Create end-to-end supply chain visibility solutions',
      'Develop predictive analytics cho demand forecasting',
    ],
    prerequisites: ['Operations research basics', 'Algorithm design knowledge', 'Supply chain fundamentals'],
    exercises: [
      {
        title: 'Vietnam E-commerce Logistics Optimization',
        description:
          'Design comprehensive logistics optimization system cho Vietnamese e-commerce company handling 1M+ orders monthly',
        difficulty: 'Nâng cao',
        materials: [
          'Optimization software tools',
          'Logistics simulation platforms',
          'Data analytics frameworks',
          'Cost modeling templates',
        ],
        procedure: [
          'Analyze current Vietnamese e-commerce logistics challenges và costs',
          'Design multi-modal transportation optimization system',
          'Implement predictive demand forecasting cho inventory placement',
          'Create last-mile delivery optimization including motorcycle deliveries',
          'Develop sustainability metrics và carbon footprint tracking',
        ],
        expectedResults:
          'Complete logistics optimization system với measurable cost reductions và delivery time improvements',
        solution:
          'Integrated optimization platform combining predictive analytics, route optimization, và Vietnamese market adaptations',
      },
    ],
    realWorldApplications: [
      'Shopee logistics network optimization',
      'Vietnam Post digital transformation',
      'Ninjavan delivery route planning',
      'Agricultural product transportation systems',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội trong Tối ưu Hóa Logistics tại Việt Nam',
      content: [
        'Việt Nam có vị trí địa lý thuận lợi, là trung tâm kết nối của các nước trong khu vực Đông Nam Á, tạo điều kiện cho việc phát triển logistics và chuỗi cung ứng.',
        'Tuy nhiên, hạ tầng giao thông còn nhiều hạn chế, đặc biệt là ở các vùng nông thôn và miền núi, gây khó khăn cho việc vận chuyển hàng hóa.',
        'Ngoài ra, sự bùng nổ của thương mại điện tử cũng đặt ra nhiều thách thức mới cho ngành logistics, từ việc quản lý kho bãi đến giao hàng tận nơi.',
      ],
    },
    caseStudies: [
      {
        title: 'Giao Hang Nhanh Logistics Innovation',
        organization: 'Giao Hang Nhanh (GHN)',
        problem: 'Scaling logistics operations to handle explosive e-commerce growth across Vietnam',
        solution:
          'AI-powered route optimization, automated sorting systems, drone delivery pilots, real-time tracking platform',
        impact:
          'Reduced delivery costs by 30%, improved delivery speed by 40%, expanded coverage to 100% of Vietnamese provinces',
        innovations: [
          'Vietnamese address recognition AI',
          'Motorcycle-optimized routing',
          'Rural area delivery solutions',
        ],
      },
    ],
    careerConnect: {
      name: 'Trần Ngọc Bích',
      title: 'Giám đốc Điều hành, Giao Hàng Nhanh',
      company: 'Giao Hàng Nhanh',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-ngoc-bich',
      quote:
        'Ngành logistics tại Việt Nam đang đứng trước nhiều cơ hội lớn để phát triển và đổi mới sáng tạo. Chúng tôi luôn tìm kiếm những tài năng trẻ, đam mê công nghệ và muốn tạo ra sự khác biệt.',
    },
    quizzes: [
      {
        question: 'Một trong những thách thức lớn nhất trong ngành logistics tại Việt Nam hiện nay là gì?',
        options: [
          'Hạ tầng giao thông kém phát triển',
          'Chi phí vận chuyển cao',
          'Thiếu nhân lực chất lượng cao',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Ngành logistics tại Việt Nam đang phải đối mặt với nhiều thách thức, bao gồm hạ tầng giao thông chưa phát triển đồng bộ, chi phí vận chuyển còn cao và thiếu hụt nhân lực có kỹ năng chuyên môn cao.',
      },
      {
        question: 'Công nghệ nào đang được sử dụng để tối ưu hóa quy trình giao hàng trong ngành logistics?',
        options: [
          'Công nghệ Blockchain',
          'Trí tuệ nhân tạo và học máy',
          'Internet vạn vật (IoT)',
          'Tất cả các công nghệ trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Các công nghệ tiên tiến như Blockchain, trí tuệ nhân tạo, học máy và IoT đang được áp dụng rộng rãi trong ngành logistics để tối ưu hóa quy trình giao hàng, từ quản lý kho bãi đến theo dõi đơn hàng và tối ưu hóa lộ trình giao hàng.',
      },
    ],
    faqs: [
      {
        question: '"Last-mile delivery" (Giao hàng chặng cuối) là gì và tại sao nó lại khó?',
        answer:
          'Giao hàng chặng cuối là bước cuối cùng của quá trình vận chuyển, từ trung tâm phân phối đến tận tay khách hàng. Đây là chặng tốn kém và phức tạp nhất vì phải xử lý một số lượng lớn các điểm giao hàng nhỏ lẻ, riêng biệt trong môi trường đô thị đông đúc, thay vì vận chuyển hàng loạt giữa các kho lớn.',
      },
      {
        question: 'Làm thế nào AI có thể tối ưu hóa logistics?',
        answer:
          'AI có thể dự báo nhu cầu hàng hóa để sắp xếp tồn kho hợp lý, tối ưu hóa lộ trình giao hàng để tiết kiệm thời gian và nhiên liệu, tự động hóa việc sắp xếp hàng hóa trong kho bằng robot, và phát hiện sớm các rủi ro có thể gây gián đoạn chuỗi cung ứng.',
      },
      {
        question: 'Chuỗi cung ứng kỹ thuật số (Digital Supply Chain) là gì?',
        answer:
          'Là một chuỗi cung ứng sử dụng các công nghệ kỹ thuật số như IoT, blockchain, và AI để tạo ra một mạng lưới kết nối, thông minh và minh bạch hơn. Nó cho phép các công ty theo dõi hàng hóa theo thời gian thực, phản ứng nhanh hơn với sự thay đổi của thị trường và cộng tác hiệu quả hơn với các đối tác.',
      },
      {
        question: 'Blockchain có thể được ứng dụng trong chuỗi cung ứng như thế nào?',
        answer:
          'Blockchain có thể tạo ra một sổ cái kỹ thuật số không thể thay đổi để ghi lại mọi giao dịch và di chuyển của sản phẩm trong chuỗi cung ứng. Điều này giúp tăng cường tính minh bạch, khả năng truy xuất nguồn gốc (ví dụ: từ nông trại đến bàn ăn), chống hàng giả và đơn giản hóa các thủ tục giấy tờ.',
      },
      {
        question: 'Nhà kho tự động (Automated Warehouse) hoạt động ra sao?',
        answer:
          'Các nhà kho hiện đại sử dụng robot tự hành (AGV) để di chuyển hàng hóa, hệ thống băng chuyền thông minh để phân loại sản phẩm, và các cánh tay robot để bốc xếp hàng. Tất cả được điều khiển bởi một hệ thống quản lý kho (WMS) thông minh, giúp tăng tốc độ xử lý đơn hàng và giảm thiểu sai sót.',
      },
      {
        question: 'Dự báo nhu cầu (Demand Forecasting) quan trọng như thế nào?',
        answer:
          'Dự báo nhu cầu chính xác giúp các công ty biết cần sản xuất bao nhiêu sản phẩm, lưu trữ ở đâu và khi nào. Điều này giúp tránh tình trạng tồn kho quá nhiều (gây lãng phí chi phí) hoặc thiếu hàng (mất doanh thu và khách hàng). AI và học máy đang làm cho việc dự báo trở nên chính xác hơn bao giờ hết.',
      },
      {
        question: 'Tháp kiểm soát chuỗi cung ứng (Supply Chain Control Tower) là gì?',
        answer:
          'Đó là một bảng điều khiển trung tâm, được cá nhân hóa, cung cấp khả năng hiển thị toàn bộ chuỗi cung ứng theo thời gian thực. Nó thu thập dữ liệu từ nhiều hệ thống khác nhau và sử dụng phân tích để giúp các nhà quản lý phát hiện và giải quyết các vấn đề (như một chuyến hàng bị trễ) một cách nhanh chóng.',
      },
      {
        question: 'Logistics ngược (Reverse Logistics) là gì?',
        answer:
          'Là quá trình quản lý việc trả lại hàng hóa từ khách hàng về cho nhà sản xuất hoặc nhà bán lẻ. Nó bao gồm việc xử lý hàng trả lại, sửa chữa, tái chế hoặc thải bỏ sản phẩm. Một quy trình logistics ngược hiệu quả là rất quan trọng trong thương mại điện tử.',
      },
      {
        question: 'In 3D (Sản xuất bồi đắp) ảnh hưởng đến chuỗi cung ứng như thế nào?',
        answer:
          'In 3D cho phép sản xuất các bộ phận và sản phẩm theo yêu cầu ngay tại nơi cần thiết. Điều này có thể làm giảm đáng kể nhu cầu vận chuyển và lưu kho các bộ phận thay thế, tạo ra một chuỗi cung ứng phi tập trung và linh hoạt hơn.',
      },
      {
        question: 'Tại sao tính bền vững ngày càng quan trọng trong logistics?',
        answer:
          'Ngành vận tải là một trong những nguồn phát thải carbon lớn. Khách hàng và các nhà quản lý ngày càng yêu cầu các chuỗi cung ứng "xanh" hơn. Các công ty đang tìm cách tối ưu hóa lộ trình để giảm nhiên liệu, sử dụng xe điện, và chọn các phương thức vận tải ít carbon hơn như đường sắt hoặc đường biển.',
      },
    ],
  },
  {
    id: 'sustainable-transport-green-mobility',
    title: 'Vận Tải Bền Vững & Green Mobility',
    description:
      'Sustainable transportation solutions including electric vehicles, renewable energy integration, carbon reduction strategies, và green infrastructure.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=n6bCZBCT90E', // Sustainable Transportation and Green Mobility
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    module: 'Transportation',
    objectives: [
      'Design electric vehicle charging networks',
      'Implement renewable energy integration trong transportation systems',
      'Develop carbon footprint measurement và reduction strategies',
      'Create sustainable urban transportation plans',
      'Build green logistics và delivery systems',
    ],
    prerequisites: [
      'Environmental sustainability basics',
      'Transportation planning knowledge',
      'Renewable energy understanding',
    ],
    exercises: [
      {
        title: 'Electric Vehicle Charging Network Design',
        description:
          'Design comprehensive EV charging network for Vietnamese city with integration to renewable energy sources',
        difficulty: 'Trung bình',
        materials: [
          'GIS mapping software',
          'Electrical load analysis tools',
          'Renewable energy calculators',
          'Traffic flow data',
        ],
        procedure: [
          'Analyze current traffic patterns và EV adoption forecasts',
          'Design optimal charging station placement using GIS analysis',
          'Plan renewable energy integration (solar panels, wind power)',
          'Calculate grid impact và load management requirements',
          'Develop business model cho sustainable charging network operation',
        ],
        expectedResults:
          'Complete EV charging network plan với renewable energy integration và financial sustainability',
        solution:
          'Sustainable charging infrastructure powered by renewable energy với smart grid integration và user-friendly access',
      },
    ],
    realWorldApplications: [
      'VinFast electric vehicle ecosystem',
      'Electric bus systems trong major Vietnamese cities',
      'Green logistics cho international shipping',
      'Sustainable tourism transportation systems',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội trong Vận Tải Bền Vững tại Việt Nam',
      content: [
        'Việt Nam đang đối mặt với áp lực lớn về ô nhiễm không khí và biến đổi khí hậu, đòi hỏi phải có những giải pháp vận tải bền vững và thân thiện với môi trường.',
        'Chính phủ đã ban hành nhiều chính sách khuyến khích sử dụng phương tiện giao thông công cộng, xe điện và các giải pháp năng lượng tái tạo trong vận tải.',
        'Tuy nhiên, hạ tầng cho xe điện và các phương tiện giao thông xanh vẫn còn hạn chế, cần được đầu tư và phát triển mạnh mẽ hơn trong thời gian tới.',
      ],
    },
    caseStudies: [
      {
        title: 'VinBus Electric Bus Fleet Implementation',
        organization: 'VinBus (VinGroup)',
        problem: "Launching Vietnam's first large-scale electric bus system trong Ho Chi Minh City",
        solution:
          'Electric bus fleet với smart charging infrastructure, route optimization software, passenger mobile apps',
        impact:
          'Reduced public transport emissions by 60%, improved air quality on bus routes, increased ridership by 25%',
        innovations: [
          'Vietnamese-climate-adapted electric buses',
          'Solar-powered charging stations',
          'Smart route optimization',
        ],
      },
    ],
    careerConnect: {
      name: 'Phạm Hoàng Nam',
      title: 'Giám đốc Kỹ thuật, VinBus',
      company: 'VinBus',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-hoang-nam',
      quote:
        'Chúng tôi tin rằng, với công nghệ và sự sáng tạo, xe buýt điện sẽ trở thành phương tiện giao thông công cộng chủ đạo tại Việt Nam, góp phần giảm thiểu ô nhiễm và cải thiện chất lượng cuộc sống cho người dân.',
    },
    quizzes: [
      {
        question: 'Giải pháp nào được triển khai để tối ưu hóa lộ trình và lịch trình cho đội xe buýt điện của VinBus?',
        options: [
          'Sử dụng phần mềm tối ưu hóa lộ trình và lịch trình',
          'Dựa vào kinh nghiệm của tài xế',
          'Theo dõi tình hình giao thông theo thời gian thực',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'VinBus sử dụng một hệ thống tích hợp bao gồm phần mềm tối ưu hóa lộ trình và lịch trình, kết hợp với việc theo dõi tình hình giao thông theo thời gian thực để đảm bảo đội xe buýt điện hoạt động hiệu quả nhất.',
      },
      {
        question: 'Một trong những lợi ích của việc sử dụng xe buýt điện là gì?',
        options: [
          'Giảm chi phí nhiên liệu',
          'Giảm ô nhiễm tiếng ồn',
          'Cải thiện chất lượng không khí',
          'Tất cả các lợi ích trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Xe buýt điện giúp giảm thiểu ô nhiễm không khí và tiếng ồn, đồng thời cũng giảm chi phí nhiên liệu cho các thành phố. Đây là một trong những giải pháp giao thông bền vững và hiệu quả nhất hiện nay.',
      },
    ],
    faqs: [
      {
        question: 'Sử dụng xe điện có thực sự "xanh" hơn không, khi điện năng vẫn được sản xuất từ than đá?',
        answer:
          'Đây là một câu hỏi hợp lý. Mặc dù nguồn điện có thể chưa hoàn toàn sạch, xe điện vẫn hiệu quả hơn. Thứ nhất, nhà máy điện lớn có các hệ thống xử lý khí thải hiệu quả hơn so với hàng triệu động cơ đốt trong nhỏ lẻ. Thứ hai, việc tập trung ô nhiễm tại một điểm (nhà máy điện) dễ quản lý hơn. Quan trọng nhất, xe điện mở ra cánh cửa cho việc sử dụng năng lượng tái tạo (mặt trời, gió) để sạc, điều mà xe xăng không thể làm được.',
      },
      {
        question: 'Phạm vi di chuyển của xe điện có phải là một vấn đề lớn không?',
        answer:
          'Phạm vi di chuyển (range anxiety) từng là một vấn đề lớn, nhưng công nghệ pin đang cải thiện rất nhanh. Nhiều mẫu xe điện hiện nay có thể đi được 400-500km mỗi lần sạc. Đối với việc di chuyển hàng ngày trong thành phố, phạm vi này là quá đủ. Thách thức chính hiện nay là phát triển mạng lưới trạm sạc nhanh công cộng để phục vụ các chuyến đi đường dài.',
      },
      {
        question: 'Ngoài xe điện, còn có những hình thức vận tải bền vững nào khác?',
        answer:
          'Rất nhiều! Đi bộ và đi xe đạp là bền vững nhất. Giao thông công cộng (xe buýt, metro) hiệu quả hơn nhiều so với xe cá nhân. Các phương tiện sử dụng hydro (hydrogen vehicles) và nhiên liệu sinh học (biofuels) cũng là những lựa chọn tiềm năng đang được nghiên cứu và phát triển.',
      },
      {
        question: 'Kinh tế chia sẻ (Sharing Economy) đóng góp gì cho green mobility?',
        answer:
          'Các dịch vụ như gọi xe chung (ride-pooling), chia sẻ xe hơi (car-sharing), và chia sẻ xe đạp/xe máy điện giúp tối đa hóa việc sử dụng một phương tiện. Thay vì 10 người đi 10 chiếc xe riêng, họ có thể chia sẻ một vài chiếc xe, làm giảm số lượng phương tiện trên đường, giảm ùn tắc và khí thải.',
      },
      {
        question: 'Làn đường dành cho xe đạp có thực sự hiệu quả không?',
        answer:
          'Rất hiệu quả. Việc xây dựng một mạng lưới làn đường dành cho xe đạp an toàn và được kết nối tốt là một trong những yếu tố quan trọng nhất để khuyến khích người dân đi xe đạp. Khi cảm thấy an toàn, nhiều người sẽ chọn xe đạp làm phương tiện di chuyển cho các quãng đường ngắn.',
      },
      {
        question: 'Thế nào là một "thành phố 15 phút"?',
        answer:
          'Là một khái niệm quy hoạch đô thị nơi mọi người dân có thể tiếp cận hầu hết các nhu cầu thiết yếu hàng ngày (cửa hàng, trường học, công viên, trạm y tế) trong vòng 15 phút đi bộ hoặc đi xe đạp từ nhà của họ. Mô hình này thúc đẩy mạnh mẽ việc di chuyển bền vững.',
      },
      {
        question: 'Nhiên liệu hydro (hydrogen fuel) hoạt động như thế nào?',
        answer:
          'Xe chạy bằng hydro sử dụng một pin nhiên liệu (fuel cell) để kết hợp hydro (được lưu trữ trong bình) với oxy từ không khí để tạo ra điện, và sản phẩm phụ duy nhất là nước. Điện này sau đó được dùng để chạy động cơ điện. Nó có ưu điểm là sạc (nạp hydro) rất nhanh, nhưng việc sản xuất và lưu trữ hydro vẫn còn tốn kém.',
      },
      {
        question: 'Làm thế nào để giảm lượng khí thải carbon từ ngành hàng không?',
        answer:
          'Đây là một thách thức lớn. Các giải pháp bao gồm việc phát triển các loại nhiên liệu hàng không bền vững (Sustainable Aviation Fuels - SAF) được làm từ thực vật hoặc chất thải, thiết kế máy bay nhẹ hơn và hiệu quả hơn, và tối ưu hóa đường bay để giảm tiêu thụ nhiên liệu.',
      },
      {
        question: 'Chính phủ có thể làm gì để thúc đẩy vận tải bền vững?',
        answer:
          'Chính phủ có vai trò rất quan trọng. Họ có thể đầu tư vào hạ tầng cho giao thông công cộng và xe đạp, đưa ra các chính sách trợ giá cho xe điện, đánh thuế cao hơn đối với các phương tiện gây ô nhiễm, và ban hành các quy định xây dựng khuyến khích phát triển đô thị theo định hướng giao thông công cộng.',
      },
      {
        question: 'Vai trò của cá nhân trong việc thúc đẩy green mobility là gì?',
        answer:
          'Mỗi cá nhân đều có thể đóng góp. Hãy cân nhắc đi bộ, đi xe đạp hoặc sử dụng phương tiện công cộng cho các chuyến đi ngắn. Nếu mua xe, hãy ưu tiên các mẫu xe tiết kiệm nhiên liệu hoặc xe điện. Kết hợp nhiều chuyến đi thành một để giảm số lần phải dùng xe. Lựa chọn của bạn tạo ra sự khác biệt.',
      },
    ],
  },
  {
    id: 'urban-planning-mobility-integration',
    title: 'Quy Hoạch Đô Thị & Tích Hợp Mobility',
    description:
      'Integrated urban planning approach combining transportation, land use, technology, và sustainable development principles.',
    duration: '215 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vllzDCA4wj0', // Urban Planning and Mobility Integration
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    module: 'Transportation',
    objectives: [
      'Design integrated urban mobility plans',
      'Implement transit-oriented development strategies',
      'Create multimodal transportation networks',
      'Develop smart city mobility integration',
      'Build community engagement platforms cho urban planning',
    ],
    prerequisites: ['Urban planning fundamentals', 'GIS software proficiency', 'Transportation systems knowledge'],
    exercises: [
      {
        title: 'Integrated Urban Mobility Master Plan',
        description:
          'Develop comprehensive 20-year urban mobility master plan for Vietnamese city của 2 million people',
        difficulty: 'Nâng cao',
        materials: [
          'Urban planning software',
          'GIS analysis tools',
          'Transportation modeling platforms',
          'Community engagement tools',
        ],
        procedure: [
          'Conduct comprehensive mobility needs assessment including current patterns',
          'Design multimodal transportation network với BRT, cycling, walking integration',
          'Plan transit-oriented development zones với mixed-use principles',
          'Create climate adaptation strategies cho transportation infrastructure',
          'Develop phased implementation plan với community engagement strategy',
        ],
        expectedResults:
          'Complete urban mobility master plan với detailed implementation phases, cost estimates, và sustainability metrics',
        solution:
          'Integrated mobility plan balancing economic development, environmental sustainability, và community needs',
      },
    ],
    realWorldApplications: [
      'Thu Duc City master planning project',
      'Can Tho urban development integration',
      'Da Nang smart city mobility planning',
      'Hanoi Old Quarter preservation và mobility',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội trong Quy Hoạch Đô Thị và Tích Hợp Mobility tại Việt Nam',
      content: [
        'Việt Nam đang trải qua quá trình đô thị hóa nhanh chóng, đặt ra nhiều thách thức về giao thông, hạ tầng và môi trường.',
        'Cần có những giải pháp quy hoạch đô thị tích hợp, kết hợp chặt chẽ giữa giao thông công cộng, giao thông xanh và công nghệ thông tin.',
        'Các dự án quy hoạch đô thị lớn như Thành phố thông minh Bình Dương, Thủ Thiêm (TP.HCM) đang mở ra hướng đi mới cho phát triển đô thị bền vững tại Việt Nam.',
      ],
    },
    caseStudies: [
      {
        title: 'Thu Duc Smart City Mobility Integration',
        organization: 'Thu Duc City (Ho Chi Minh City)',
        problem: "Planning comprehensive mobility system for Vietnam's newest smart city",
        solution:
          'Integrated planning approach, smart transportation systems, sustainable development principles, community engagement',
        impact:
          'Created model for Vietnamese smart city development, planned for 1.3M residents, integrated 5 transportation modes',
        innovations: [
          'Vietnamese smart city model',
          'Climate-adaptive infrastructure',
          'Community-centered planning approach',
        ],
      },
    ],
    careerConnect: {
      name: 'Nguyễn Thị Kim Anh',
      title: 'Kiến trúc sư trưởng, Công ty Quy hoạch đô thị Việt Nam',
      company: 'Công ty Quy hoạch đô thị Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-kim-anh',
      quote:
        'Quy hoạch đô thị không chỉ là việc thiết kế không gian sống mà còn là việc tạo ra những giá trị bền vững cho cộng đồng. Chúng tôi tin rằng, với sự kết hợp giữa quy hoạch thông minh và công nghệ hiện đại, chúng ta có thể giải quyết được những thách thức lớn của đô thị Việt Nam.',
    },
    quizzes: [
      {
        question: 'Một trong những nguyên tắc quan trọng trong quy hoạch đô thị tích hợp là gì?',
        options: [
          'Tách biệt các khu chức năng',
          'Tăng cường giao thông công cộng và đi bộ',
          'Giảm thiểu không gian xanh',
          'Tăng cường sử dụng xe cá nhân',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Quy hoạch đô thị tích hợp chú trọng vào việc tăng cường giao thông công cộng và đi bộ, giảm thiểu sự phụ thuộc vào xe cá nhân, từ đó tạo ra một môi trường sống trong lành và bền vững hơn.',
      },
      {
        question: 'Công nghệ nào có thể được sử dụng để cải thiện quy hoạch và quản lý giao thông đô thị?',
        options: [
          'Hệ thống thông tin địa lý (GIS)',
          'Cảm biến giao thông',
          'Phần mềm mô phỏng giao thông',
          'Tất cả các công nghệ trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Các công nghệ như GIS, cảm biến giao thông và phần mềm mô phỏng giao thông cung cấp dữ liệu và công cụ phân tích hữu ích, giúp các nhà quy hoạch đô thị đưa ra các quyết định chính xác và hiệu quả hơn trong việc thiết kế và quản lý hệ thống giao thông đô thị.',
      },
    ],
    faqs: [
      {
        question: 'Phát triển theo định hướng giao thông công cộng (TOD) là gì?',
        answer:
          'TOD (Transit-Oriented Development) là một chiến lược quy hoạch đô thị tập trung xây dựng các khu dân cư, văn phòng, và cửa hàng có mật độ cao xung quanh các trạm giao thông công cộng (như ga metro, bến xe buýt). Mục tiêu là tạo ra các cộng đồng sôi động, nơi người dân có thể sống, làm việc và giải trí mà không cần phụ thuộc vào xe cá nhân.',
      },
      {
        question: 'Làm thế nào để tích hợp xe máy vào quy hoạch đô thị hiện đại?',
        answer:
          'Thay vì cố gắng loại bỏ, quy hoạch thông minh cần tích hợp xe máy một cách an toàn và hiệu quả. Các giải pháp bao gồm việc tạo ra các làn đường riêng cho xe máy, các bãi đỗ xe máy thông minh gần các trạm trung chuyển công cộng, và khuyến khích chuyển đổi sang xe máy điện để giảm ô nhiễm.',
      },
      {
        question: 'Sử dụng hỗn hợp (Mixed-use development) trong quy hoạch đô thị có nghĩa là gì?',
        answer:
          'Là việc quy hoạch các khu vực nơi các chức năng khác nhau như nhà ở, văn phòng, cửa hàng bán lẻ và không gian giải trí được đặt gần nhau, thậm chí trong cùng một tòa nhà. Điều này làm giảm nhu cầu di chuyển xa, khuyến khích đi bộ và tạo ra các khu phố sống động 24/7.',
      },
      {
        question: 'Không gian công cộng đóng vai trò gì trong một đô thị đáng sống?',
        answer:
          'Không gian công cộng như công viên, quảng trường, và vỉa hè rộng rãi là "phòng khách" của thành phố. Chúng là nơi mọi người gặp gỡ, tương tác xã hội, và thư giãn. Một hệ thống không gian công cộng chất lượng cao giúp tăng cường sức khỏe thể chất và tinh thần cho cư dân, đồng thời thúc đẩy sự gắn kết cộng đồng.',
      },
      {
        question: 'Làm thế nào để làm cho việc đi bộ trở nên hấp dẫn hơn?',
        answer:
          'Để khuyến khích đi bộ, cần có vỉa hè rộng rãi, an toàn, không bị lấn chiếm. Cây xanh che bóng mát, ghế đá để nghỉ chân, ánh sáng tốt vào ban đêm, và các mặt tiền cửa hàng thú vị dọc đường đi đều là những yếu tố quan trọng tạo nên một môi trường đi bộ thân thiện.',
      },
      {
        question: 'Hạ tầng xanh (Green Infrastructure) trong đô thị là gì?',
        answer:
          'Là một mạng lưới các không gian tự nhiên và bán tự nhiên được quy hoạch trong đô thị. Nó bao gồm công viên, mái nhà xanh, vườn trên tường, và các hồ điều hòa. Hạ tầng xanh giúp quản lý nước mưa, giảm hiệu ứng đảo nhiệt đô thị, cải thiện chất lượng không khí và tăng cường đa dạng sinh học.',
      },
      {
        question: 'Sự tham gia của cộng đồng quan trọng như thế nào trong quy hoạch đô thị?',
        answer:
          'Cực kỳ quan trọng. Người dân chính là những "chuyên gia" về khu phố của họ. Việc lấy ý kiến và cho phép cộng đồng tham gia vào quá trình thiết kế đảm bảo rằng các dự án quy hoạch đáp ứng đúng nhu cầu thực tế, được người dân ủng hộ và sử dụng hiệu quả sau khi hoàn thành.',
      },
      {
        question: 'Zoning (Phân khu chức năng) là gì?',
        answer:
          'Là một công cụ quy hoạch quy định loại hình sử dụng đất được phép trong một khu vực cụ thể (ví dụ: khu dân cư, khu thương mại, khu công nghiệp). Quy hoạch hiện đại đang hướng tới việc phân khu linh hoạt hơn (flexible zoning) để cho phép sự phát triển hỗn hợp, thay vì phân chia các chức năng một cách cứng nhắc.',
      },
      {
        question: 'Làm thế nào để quy hoạch đô thị thích ứng với biến đổi khí hậu?',
        answer:
          'Quy hoạch thích ứng bao gồm việc xây dựng các công trình chống ngập (như đê, hồ điều hòa), bảo vệ các hệ sinh thái ven biển (như rừng ngập mặn), sử dụng các vật liệu có khả năng thấm nước cho vỉa hè và đường xá, và tăng cường không gian xanh để giảm nhiệt độ đô thị.',
      },
      {
        question: 'Công nghệ "Digital Twin" (Bản sao số) được sử dụng trong quy hoạch đô thị như thế nào?',
        answer:
          'Digital Twin là một mô hình ảo, 3D của một thành phố, được cập nhật liên tục với dữ liệu thời gian thực từ các cảm biến. Các nhà quy hoạch có thể sử dụng bản sao số này để mô phỏng các kịch bản khác nhau (ví dụ: "Điều gì sẽ xảy ra nếu chúng ta xây một cây cầu mới ở đây?") trước khi đưa ra quyết định trong thế giới thực.',
      },
    ],
  },
];

export const transportationTechnologyModuleData: ModuleData = {
  id: 'transportation-technology',
  title: 'Transportation Technology',
  subtitle: 'Công nghệ giao thông thông minh',
  description:
    'Khám phá smart transportation systems, autonomous vehicle technology và traffic optimization solutions trong future mobility ecosystems.',
  level: 'Nâng cao',
  duration: '20-26 giờ',
  category: 'Transportation Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
  features: [
    'Autonomous Vehicle Systems',
    'Traffic Management Optimization',
    'Smart Public Transportation',
    'Mobility as a Service (MaaS)',
    'Electric Vehicle Infrastructure',
    'Route Optimization Algorithms',
    'Transportation Analytics',
    'Connected Vehicle Networks',
  ],
  icon: '🚗',
  color: 'from-indigo-600 to-purple-600',
  objectives: [
    'Design autonomous vehicle control systems',
    'Optimize traffic flow algorithms',
    'Develop smart public transport solutions',
    'Create mobility service platforms',
    'Build electric vehicle infrastructure',
    'Implement connected vehicle networks',
  ],
  prerequisites: [
    'Engineering fundamentals',
    'Programming skills (Python/C++)',
    'Understanding của transportation systems',
    'Data analysis capabilities',
  ],
  careerOutcomes: [
    'Autonomous Vehicle Engineer (55-105 triệu VNĐ)',
    'Traffic Systems Manager (45-85 triệu VNĐ)',
    'Smart Mobility Developer (50-95 triệu VNĐ)',
    'Transportation Data Scientist (50-90 triệu VNĐ)',
    'Electric Vehicle Engineer (45-90 triệu VNĐ)',
    'Connected Systems Specialist (50-95 triệu VNĐ)',
    'Transportation Technology Consultant (55-110 triệu VNĐ)',
    'Urban Mobility Planner (40-80 triệu VNĐ)',
  ],
  industryApplications: [
    'Smart city traffic management',
    'Autonomous vehicle development',
    'Ride-sharing platform optimization',
    'Public transportation systems',
    'Electric vehicle charging networks',
    'Logistics route optimization',
    'Airport traffic control',
    'Maritime transportation tracking',
    'Railway management systems',
    'Emergency vehicle routing',
  ],
  marketDemand: {
    averageSalary: '40-110 triệu VNĐ',
    jobGrowth: '78% Growth',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AIApplications, K2Module.ElectricVehicleTech, K2Module.SmartManufacturing],
  lessons: transportationTechnologyLessons,
};
