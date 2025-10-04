import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface DigitalGovLesson extends BaseLessonData {
  govTechnologies: string[];
  publicServices: string[];
}

export const lessons: DigitalGovLesson[] = [
  {
    id: 'vietnam-digital-government',
    title: 'Bài 1: Chính phủ Điện tử Việt Nam và Smart City Development',
    description:
      'Tìm hiểu chiến lược chính phủ điện tử của Việt Nam, các dịch vụ công trực tuyến và smart city initiatives. Học cách phát triển civic tech solutions.',
    videoUrl: 'https://www.youtube.com/watch?v=wDoMXUIEpUg',
    imageUrl: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '120 phút',
    govTechnologies: ['Digital ID', 'Blockchain', 'IoT sensors', 'Open data', 'AI/ML'],
    publicServices: ['Citizen services', 'Business registration', 'Tax filing', 'Healthcare', 'Education'],
    objectives: [
      'Hiểu Digital Government strategy của Việt Nam đến 2030',
      'Analyze public service delivery models và digital transformation',
      'Design civic technology solutions cho Vietnamese context',
      'Implement integration với government APIs và data sources',
    ],
    prerequisites: [
      'Basic understanding of public administration',
      'Familiarity với web development',
      'Knowledge of Vietnamese administrative system',
    ],
    exercises: [
      {
        title: 'Public Service Portal Design',
        description: 'Design user-friendly portal cho Vietnamese citizen services',
        difficulty: 'Trung bình',
        requirements: ['UX/UI design skills', 'Government service knowledge', 'Accessibility standards'],
        hints: [
          'Consider multi-language support (Vietnamese, ethnic minorities)',
          'Design for low digital literacy users',
          'Integrate với existing government ID systems',
        ],
        expectedOutput: 'Complete service portal design với user journey mapping',
        solution: 'Mobile-first design với progressive enhancement cho desktop',
      },
    ],
    realWorldApplications: [
      'Citizen service applications và e-governance platforms',
      'Smart city dashboard và monitoring systems',
      'Public transportation optimization',
      'Environmental monitoring và reporting',
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Smart Traffic System',
        organization: 'HCMC Department of Transportation',
        problem: 'Reduce traffic congestion trong megacity với 9M dân',
        solution: 'AI-powered traffic management với IoT sensors',
        impact: '15% reduction in travel time, 20% fewer accidents',
        innovations: [
          'Real-time data integration is crucial',
          'Public-private partnerships accelerate deployment',
          'Citizen engagement improves system effectiveness',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam National Public Service Portal',
        url: 'https://dichvucong.gov.vn',
        type: 'government',
        description: 'Central portal for Vietnamese public services',
      },
      {
        title: 'Government API Documentation',
        url: 'https://api.gov.vn',
        type: 'api',
        description: 'Official APIs for government data integration',
      },
    ],
    faqs: [
      {
        question: '"Chính phủ số" là gì và tại sao nó quan trọng đối với Việt Nam?',
        answer:
          'Chính phủ số là việc ứng dụng công nghệ số để thay đổi mô hình hoạt động, quản lý của chính phủ, nhằm phục vụ người dân và doanh nghiệp tốt hơn, hiệu quả hơn, minh bạch hơn. Đối với Việt Nam, đây là yếu tố then chốt để thúc đẩy phát triển kinh tế - xã hội, nâng cao năng lực cạnh tranh quốc gia và hội nhập quốc tế.',
      },
      {
        question: '"Thành phố thông minh" (Smart City) là gì và có ví dụ nào ở Việt Nam không?',
        answer:
          'Thành phố thông minh sử dụng công nghệ thông tin và truyền thông (ICT) để cải thiện chất lượng cuộc sống, hiệu quả hoạt động đô thị và tính bền vững. Các ví dụ ở Việt Nam bao gồm Đà Nẵng (tiên phong về giao thông thông minh, chính quyền điện tử), Bình Dương (tập trung vào khu công nghiệp thông minh) và TP.HCM (triển khai trung tâm điều hành đô thị thông minh).',
      },
      {
        question: '"CivicTech" (Công nghệ Công dân) là gì và làm thế nào tôi có thể tham gia?',
        answer:
          'CivicTech là các công nghệ giúp tăng cường mối quan hệ giữa người dân và chính phủ. Bạn có thể tham gia bằng cách sử dụng các ứng dụng phản ánh hiện trường (như app của tổng đài 1022), tham gia góp ý chính sách qua các cổng thông tin điện tử, hoặc thậm chí tự phát triển các ứng dụng giải quyết vấn đề cộng đồng dựa trên dữ liệu mở.',
      },
      {
        question: 'Dữ liệu của tôi có an toàn khi sử dụng các dịch vụ công trực tuyến không?',
        answer:
          'Chính phủ Việt Nam đã và đang triển khai nhiều giải pháp để đảm bảo an toàn thông tin cho các hệ thống dịch vụ công, tuân thủ theo Luật An ninh mạng. Tuy nhiên, người dùng cũng cần có trách nhiệm tự bảo vệ tài khoản của mình bằng cách sử dụng mật khẩu mạnh và bật xác thực hai yếu tố.',
      },
      {
        question: 'Dữ liệu mở (Open Data) là gì và nó có lợi ích gì?',
        answer:
          'Dữ liệu mở là dữ liệu được các cơ quan chính phủ cung cấp công khai, cho phép mọi người truy cập, sử dụng và chia sẻ. Lợi ích của nó là thúc đẩy sự minh bạch, cho phép các nhà phát triển tạo ra các ứng dụng hữu ích (ví dụ: ứng dụng tìm xe buýt từ dữ liệu giao thông công cộng), và thúc đẩy đổi mới sáng tạo.',
      },
      {
        question: 'Cổng Dịch vụ công Quốc gia cung cấp những tiện ích gì?',
        answer:
          'Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) là điểm truy cập duy nhất cho công dân và doanh nghiệp để thực hiện các thủ tục hành chính trực tuyến như đăng ký kinh doanh, nộp thuế, xin cấp giấy phép, và nhiều dịch vụ khác, giúp tiết kiệm thời gian và chi phí đi lại.',
      },
      {
        question: 'Định danh điện tử (Digital ID) là gì và nó khác gì với CCCD gắn chip?',
        answer:
          'CCCD gắn chip là một phương tiện vật lý. Định danh điện tử (ví dụ: VNeID) là một tài khoản số, cho phép bạn sử dụng điện thoại thông minh để xác thực danh tính và thực hiện các giao dịch điện tử mà không cần mang theo thẻ vật lý. Nó được coi là bước tiếp theo của CCCD gắn chip.',
      },
      {
        question: 'Làm thế nào để một thành phố trở nên "thông minh" hơn?',
        answer:
          'Một thành phố thông minh không chỉ là về công nghệ. Nó bắt đầu bằng việc xác định các vấn đề cấp bách của người dân (giao thông, môi trường, y tế), sau đó áp dụng công nghệ một cách chiến lược để giải quyết các vấn đề đó, đồng thời phải có sự tham gia của người dân và doanh nghiệp.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai Chính phủ số ở Việt Nam là gì?',
        answer:
          'Các thách thức bao gồm: thay đổi thói quen làm việc của cán bộ công chức, đảm bảo an ninh mạng cho các hệ thống lớn, kết nối và chia sẻ dữ liệu giữa các bộ ngành, và nâng cao kỹ năng số cho người dân để họ có thể sử dụng thành thạo các dịch vụ số.',
      },
      {
        question: 'Blockchain có thể được ứng dụng như thế nào trong Chính phủ số?',
        answer:
          'Blockchain có thể được sử dụng để tạo ra các hệ thống đăng ký đất đai, quản lý hồ sơ công dân hoặc truy xuất nguồn gốc sản phẩm một cách minh bạch và chống giả mạo. Vì dữ liệu trên blockchain không thể bị thay đổi, nó giúp tăng cường niềm tin và tính toàn vẹn của thông tin.',
      },
    ],
  },
  {
    id: 'smart-city-iot',
    title: 'Bài 2: Smart City IoT Solutions và Environmental Monitoring',
    description:
      'Phát triển IoT systems cho smart city applications. Học air quality monitoring, traffic management, và waste management solutions cho Vietnamese cities.',
    videoUrl: 'https://www.youtube.com/watch?v=8QbncQ3Hr-0',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    govTechnologies: ['IoT sensors', 'LoRaWAN', '5G networks', 'Edge computing', 'Data analytics'],
    publicServices: ['Air quality monitoring', 'Waste management', 'Water quality', 'Noise pollution'],
    objectives: [
      'Deploy IoT sensor networks cho environmental monitoring',
      'Build real-time data dashboards cho city administrators',
      'Implement predictive analytics cho urban planning',
      'Create citizen engagement platforms cho environmental data',
    ],
    prerequisites: [
      'IoT fundamentals và hardware knowledge',
      'Data analysis và visualization skills',
      'Understanding of urban environmental challenges',
    ],
    exercises: [
      {
        title: 'Air Quality Monitoring Network',
        description: 'Build comprehensive air quality monitoring system cho Vietnamese city',
        difficulty: 'Nâng cao',
        requirements: ['IoT sensors', 'Cloud platform', 'Data visualization tools'],
        hints: [
          'Use low-cost PM2.5 và NO2 sensors',
          'Implement data validation và quality control',
          'Create public API cho citizen access',
        ],
        expectedOutput: 'Functioning air quality network với public dashboard',
        solution: 'Arduino/ESP32-based sensors với cloud analytics và mobile app',
      },
    ],
    realWorldApplications: [
      'Environmental monitoring systems cho industrial areas',
      'Smart parking solutions để reduce urban congestion',
      'Flood early warning systems cho Mekong Delta',
      'Energy management cho public buildings',
    ],
    caseStudies: [
      {
        title: 'Da Nang Smart City Initiative',
        organization: 'Da Nang City Government',
        problem: 'Transform into ASEAN smart city leader',
        solution: 'Comprehensive IoT deployment với citizen app integration',
        impact: '40% improvement in service delivery, 25% energy savings',
        innovations: [
          'Citizen engagement drives adoption',
          'Interoperability standards are essential',
          'Public-private partnerships enable scaling',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Smart City Development Plan',
        url: 'https://mic.gov.vn/smart-city-plan',
        type: 'government',
        description: 'National strategy for smart city development',
      },
    ],
    faqs: [
      {
        question: 'IoT (Internet of Things) là gì và nó được ứng dụng như thế nào trong thành phố thông minh?',
        answer:
          'IoT là mạng lưới các thiết bị vật lý được gắn cảm biến và kết nối internet, cho phép chúng thu thập và trao đổi dữ liệu. Trong thành phố thông minh, IoT được dùng để giám sát chất lượng không khí, quản lý đèn đường thông minh (tự động điều chỉnh độ sáng), thùng rác thông minh (báo khi đầy), và hệ thống đỗ xe thông minh.',
      },
      {
        question: 'LoRaWAN là gì và tại sao nó phù hợp cho các ứng dụng Smart City?',
        answer:
          'LoRaWAN là một công nghệ mạng không dây diện rộng, tiêu thụ ít năng lượng. Nó rất phù hợp cho các ứng dụng Smart City vì cho phép các cảm biến (chạy bằng pin) có thể gửi dữ liệu đi xa hàng kilomet mà không cần thay pin trong nhiều năm, giúp giảm chi phí triển khai và bảo trì.',
      },
      {
        question: 'Làm thế nào để đảm bảo an ninh cho hàng triệu thiết bị IoT trong một thành phố?',
        answer:
          'Đây là một thách thức lớn. Các biện pháp bao gồm mã hóa dữ liệu từ cảm biến đến máy chủ, xác thực thiết bị để đảm bảo chỉ các thiết bị hợp lệ mới được kết nối vào mạng, thường xuyên cập nhật phần mềm cho thiết bị, và phân đoạn mạng để nếu một phần bị tấn công, các phần khác vẫn an toàn.',
      },
      {
        question: 'Người dân có thể hưởng lợi gì từ các hệ thống giám sát môi trường bằng IoT?',
        answer:
          'Người dân có thể truy cập vào dữ liệu chất lượng không khí, mức độ ô nhiễm tiếng ồn, hoặc chất lượng nước theo thời gian thực qua các ứng dụng di động hoặc website. Điều này giúp họ đưa ra các quyết định tốt hơn cho sức khỏe, ví dụ như có nên ra ngoài tập thể dục vào một ngày không khí ô nhiễm hay không.',
      },
      {
        question: 'Edge Computing (Điện toán biên) là gì và vai trò của nó trong Smart City?',
        answer:
          'Edge Computing là việc xử lý dữ liệu ngay tại nơi nó được tạo ra (ví dụ: tại một camera giao thông) thay vì gửi tất cả về một trung tâm dữ liệu. Trong Smart City, nó giúp giảm độ trễ, tiết kiệm băng thông và cho phép các phản ứng nhanh hơn, ví dụ như một camera có thể tự phát hiện một vụ tai nạn và gửi cảnh báo ngay lập tức.',
      },
      {
        question: 'Dữ liệu từ các cảm biến IoT được sử dụng để lập kế hoạch đô thị như thế nào?',
        answer:
          'Dữ liệu về luồng giao thông giúp xác định nơi cần mở rộng đường hoặc xây cầu vượt. Dữ liệu về việc sử dụng năng lượng giúp quy hoạch mạng lưới điện hiệu quả hơn. Dữ liệu về ô nhiễm không khí giúp xác định vị trí cần trồng thêm cây xanh hoặc khu công nghiệp nào cần cải thiện xử lý khí thải.',
      },
      {
        question: '5G có vai trò gì trong việc phát triển các giải pháp Smart City?',
        answer:
          '5G cung cấp tốc độ cực cao và độ trễ cực thấp, cho phép các ứng dụng đòi hỏi phản ứng tức thời như xe tự lái giao tiếp với nhau, hoặc các bác sĩ phẫu thuật từ xa qua robot. Nó cũng cho phép kết nối đồng thời một số lượng lớn thiết bị IoT trong một khu vực nhỏ.',
      },
      {
        question: 'Làm thế nào để quản lý rác thải thông minh hơn bằng IoT?',
        answer:
          'Các thùng rác công cộng có thể được gắn cảm biến để báo khi chúng đầy. Dữ liệu này được gửi đến một phần mềm trung tâm, giúp tối ưu hóa lộ trình thu gom rác. Xe chở rác sẽ chỉ đến những nơi cần thiết, giúp tiết kiệm nhiên liệu, thời gian và giảm ùn tắc giao thông.',
      },
      {
        question: 'Chi phí để triển khai một mạng lưới cảm biến cho toàn thành phố có lớn không?',
        answer:
          'Chi phí ban đầu có thể lớn, nhưng lợi ích lâu dài về tiết kiệm năng lượng, giảm ô nhiễm, và cải thiện hiệu quả hoạt động thường vượt qua chi phí đầu tư. Việc sử dụng các công nghệ như LoRaWAN và các cảm biến giá rẻ đang làm cho việc triển khai trở nên khả thi hơn.',
      },
      {
        question: 'Dữ liệu cá nhân của tôi có bị thu thập bởi các cảm biến trong thành phố không?',
        answer:
          'Hầu hết các cảm biến môi trường và giao thông thu thập dữ liệu ẩn danh (ví dụ: đếm số lượng xe, không phải biển số xe). Tuy nhiên, các hệ thống camera an ninh có liên quan đến quyền riêng tư. Các thành phố thông minh phải có chính sách rõ ràng về việc thu thập, sử dụng và bảo vệ dữ liệu cá nhân để xây dựng lòng tin của người dân.',
      },
    ],
  },
  {
    id: 'civic-engagement-platforms',
    title: 'Bài 3: Civic Engagement Platforms và Citizen Participation Technology',
    description:
      'Xây dựng platforms để tăng cường sự tham gia của công dân vào quản lý đô thị. Học participatory budgeting, citizen reporting, và community engagement tools.',
    videoUrl: 'https://www.youtube.com/watch?v=i8jeXM2HpGk',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '140 phút',
    govTechnologies: ['Mobile apps', 'Geolocation', 'Social platforms', 'Voting systems', 'Crowdsourcing'],
    publicServices: ['Citizen reporting', 'Community forums', 'Budget participation', 'Service feedback'],
    objectives: [
      'Design inclusive civic engagement platforms',
      'Implement secure voting và feedback systems',
      'Create community-driven problem solving tools',
      'Build trust transparency mechanisms trong government operations',
    ],
    prerequisites: [
      'Mobile app development experience',
      'Understanding of democratic processes',
      'Knowledge of Vietnamese civic culture',
    ],
    exercises: [
      {
        title: 'Citizen Reporting Mobile App',
        description: 'Build app cho citizens để report infrastructure issues',
        difficulty: 'Trung bình',
        requirements: ['Mobile development platform', 'GPS integration', 'Photo/video upload'],
        hints: [
          'Implement offline capability cho rural areas',
          'Use Vietnamese administrative boundary data',
          'Add community verification features',
        ],
        expectedOutput: 'Mobile app với government dashboard integration',
        solution: 'React Native app với backend API cho government workflows',
      },
    ],
    realWorldApplications: [
      'Participatory budgeting platforms cho local governments',
      'Community issue tracking và resolution systems',
      'Public consultation platforms cho policy development',
      'Transparency portals cho government spending',
    ],
    caseStudies: [
      {
        title: 'Hanoi Public Participation Platform',
        organization: "Hanoi People's Committee",
        problem: 'Increase citizen engagement trong urban planning decisions',
        solution: 'Multi-channel platform với online/offline integration',
        impact: '300% increase in citizen feedback, improved policy acceptance',
        innovations: [
          'Multi-generational design improves participation',
          'Local language support is critical',
          'Government responsiveness builds trust',
        ],
      },
    ],
    resources: [
      {
        title: 'Citizen Engagement Guidelines',
        url: 'https://www.undp.org/vietnam/civic-engagement',
        type: 'guide',
        description: 'Best practices for civic technology in Vietnam',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để khuyến khích người dân, đặc biệt là người lớn tuổi, tham gia vào các nền tảng số?',
        answer:
          'Cần có một cách tiếp cận đa kênh. Bên cạnh ứng dụng di động, cần có các kênh khác như tổng đài điện thoại, các điểm hỗ trợ trực tiếp tại phường xã. Giao diện ứng dụng cần được thiết kế cực kỳ đơn giản, trực quan, sử dụng ngôn ngữ dễ hiểu và có hướng dẫn rõ ràng. Tổ chức các buổi tập huấn tại cộng đồng cũng rất hiệu quả.',
      },
      {
        question: 'Làm sao để đảm bảo các phản ánh của người dân được xử lý và không bị "bỏ quên"?',
        answer:
          'Sự minh bạch là chìa khóa. Nền tảng cần có cơ chế theo dõi trạng thái xử lý của một phản ánh (ví dụ: "Đã tiếp nhận", "Đang xử lý", "Đã hoàn thành") và thông báo tự động cho người dân. Việc công khai hóa thời gian xử lý trung bình và tỷ lệ hoàn thành cũng tạo ra áp lực tích cực cho các cơ quan chức năng.',
      },
      {
        question: 'Participatory Budgeting (Ngân sách có sự tham gia) hoạt động như thế nào?',
        answer:
          'Đây là một quy trình dân chủ trong đó người dân được trực tiếp quyết định cách phân bổ một phần ngân sách công. Ví dụ, chính quyền có thể đưa ra một khoản ngân sách và một danh sách các dự án đề xuất (làm đường, trồng cây, xây sân chơi), và người dân sẽ bỏ phiếu để chọn dự án họ cho là ưu tiên nhất.',
      },
      {
        question: 'Các nền tảng CivicTech có đối mặt với nguy cơ bị lạm dụng, ví dụ như tạo phản ánh giả không?',
        answer:
          'Có, đây là một rủi ro. Để giảm thiểu, các nền tảng có thể yêu cầu xác thực tài khoản (ví dụ qua số điện thoại), sử dụng cơ chế "cộng đồng xác thực" (nhiều người cùng báo một vấn đề), và áp dụng các thuật toán AI để phát hiện các hành vi bất thường hoặc spam.',
      },
      {
        question: 'Crowdsourcing (Huy động trí tuệ đám đông) được ứng dụng trong CivicTech như thế nào?',
        answer:
          'Crowdsourcing có thể được dùng để thu thập ý tưởng cho một dự án công cộng, lập bản đồ các điểm ngập lụt trong thành phố do người dân đóng góp, hoặc cùng nhau dịch các tài liệu của chính phủ sang ngôn ngữ dân tộc thiểu số. Nó tận dụng sức mạnh tập thể để giải quyết các vấn đề chung.',
      },
      {
        question: 'Làm thế nào để một ứng dụng CivicTech có thể bền vững về mặt tài chính?',
        answer:
          'Đây là một thách thức. Các mô hình có thể bao gồm: nhận tài trợ từ các quỹ phát triển, chính phủ trả phí cho việc sử dụng nền tảng (SaaS model), hoặc cung cấp các dịch vụ phân tích dữ liệu nâng cao cho các tổ chức nghiên cứu. Một số ứng dụng cũng có thể hoạt động như một tổ chức phi lợi nhuận.',
      },
      {
        question: 'Sự khác biệt giữa CivicTech và GovTech là gì?',
        answer:
          'GovTech (Công nghệ Chính phủ) thường là các giải pháp công nghệ do chính phủ mua hoặc xây dựng để cải thiện hoạt động nội bộ của mình. CivicTech (Công nghệ Công dân) thường tập trung vào việc kết nối người dân với chính phủ và với nhau, thường được xây dựng bởi các công ty khởi nghiệp hoặc các tổ chức xã hội.',
      },
      {
        question:
          'Làm thế nào để đảm bảo tính toàn diện và công bằng, không để ai bị bỏ lại phía sau trong các nền tảng số?',
        answer:
          'Thiết kế phải ưu tiên khả năng tiếp cận (accessibility) cho người khuyết tật. Cần có các kênh thay thế không phải kỹ thuật số (như điện thoại, gặp mặt trực tiếp). Ngôn ngữ phải đơn giản, dễ hiểu. Và quan trọng nhất là phải có các chương trình đào tạo, hỗ trợ người dân có kỹ năng số thấp.',
      },
      {
        question: 'Vai trò của mạng xã hội trong việc tham gia của công dân là gì?',
        answer:
          'Mạng xã hội là một công cụ mạnh mẽ để lan tỏa thông tin, huy động cộng đồng và tạo ra các cuộc thảo luận về các vấn đề xã hội. Nhiều cơ quan chính phủ cũng sử dụng mạng xã hội như một kênh để lắng nghe ý kiến và giao tiếp với người dân. Tuy nhiên, nó cũng tiềm ẩn nguy cơ lan truyền tin giả.',
      },
      {
        question: 'Làm thế nào để xây dựng lòng tin giữa người dân và chính phủ thông qua công nghệ?',
        answer:
          'Công nghệ chỉ là công cụ. Lòng tin được xây dựng thông qua sự minh bạch (công khai dữ liệu, quy trình), sự phản hồi (chính phủ lắng nghe và hành động dựa trên phản hồi của người dân), và sự hiệu quả (công nghệ thực sự giải quyết được vấn đề và cải thiện cuộc sống). Một ứng dụng tốt nhưng không có sự cam kết từ chính quyền sẽ không thể xây dựng được lòng tin.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    govTechnologies,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    publicServices,
    ...baseLesson
  } = lesson;
  return {
    ...baseLesson,
    realWorldApplications: lesson.realWorldApplications || [],
  };
});

export const digitalGovernmentModuleData: ModuleData = {
  id: K2Module.DigitalGovernment,
  title: 'Chính phủ số & Công nghệ Công dân',
  subtitle: 'Xây dựng giải pháp công nghệ cho một Việt Nam hiện đại, minh bạch và hiệu quả.',
  description:
    'Khóa học này cung cấp kiến thức và kỹ năng để phát triển các giải pháp công nghệ phục vụ chính phủ số (GovTech) và sự tham gia của công dân (CivicTech) trong bối cảnh Việt Nam. Học viên sẽ tìm hiểu về các sáng kiến thành phố thông minh, dịch vụ công trực tuyến và cách xây dựng các ứng dụng có tác động xã hội.',
  category: 'Công nghệ & Xã hội',
  icon: '🏛️',
  color: 'from-sky-600 to-cyan-500',
  level: 'Nâng cao',
  duration: '7-8 giờ',
  features: [
    'Chiến lược Chính phủ số Việt Nam',
    'Phát triển ứng dụng CivicTech',
    'Giải pháp IoT cho Thành phố thông minh',
    'Tích hợp API dịch vụ công',
  ],
  prerequisites: [
    'Kiến thức cơ bản về phát triển web hoặc di động.',
    'Hiểu biết về hệ thống hành chính công của Việt Nam.',
    'Quan tâm đến các vấn đề xã hội và công nghệ.',
  ],
  objectives: [
    'Hiểu rõ chiến lược và kiến trúc Chính phủ số của Việt Nam.',
    'Thiết kế và phát triển các giải pháp công nghệ cho dịch vụ công.',
    'Triển khai các ứng dụng IoT cho giám sát môi trường và quản lý đô thị.',
    'Xây dựng các nền tảng tăng cường sự tham gia của công dân.',
  ],
  careerOutcomes: [
    'Chuyên gia phát triển GovTech',
    'Kỹ sư giải pháp Thành phố thông minh',
    'Nhà sáng lập startup CivicTech',
    'Chuyên viên chuyển đổi số trong cơ quan nhà nước',
  ],
  industryApplications: ['Public Sector', 'Smart Cities', 'Urban Planning', 'Environmental Management'],
  marketDemand: {
    averageSalary: '1,500 - 3,000 USD/tháng',
    jobGrowth: '20% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.SmartManufacturing, K2Module.EnvironmentalDataScience, K2Module.Cybersecurity],
  lessons: transformedLessons,
};
