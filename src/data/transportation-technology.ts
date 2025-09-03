import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

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
  },
];
