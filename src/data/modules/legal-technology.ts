import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { LegalTechLesson } from '@/types/lesson-base';

export const legalTechnologyModuleData: ModuleData = {
  id: 'legal-technology',
  title: 'Legal Technology',
  subtitle: 'Cách mạng hóa nghề luật với công nghệ tiên tiến',
  description:
    'Khám phá và ứng dụng các giải pháp công nghệ tiên tiến trong lĩnh vực pháp lý. Từ tự động hóa tài liệu hợp đồng, AI-powered legal research đến case management và compliance automation trong bối cảnh hệ thống pháp luật Việt Nam.',
  level: 'Nâng cao',
  duration: '20-25 giờ',
  category: 'Legal Technology',
  features: [
    'Legal document automation và contract lifecycle management',
    'AI-powered legal research và case law analysis',
    'Comprehensive case management và practice optimization',
    'Regulatory compliance automation và risk management',
    'Intellectual property management với Vietnamese IP system',
  ],
  icon: '⚖️',
  color: 'from-indigo-600 to-blue-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&h=600&fit=crop',
  objectives: [
    'Master legal document automation và contract management systems',
    'Leverage AI tools cho efficient legal research và analysis',
    'Implement comprehensive case management workflows',
    'Build regulatory compliance automation systems',
    'Optimize intellectual property portfolio management',
  ],
  prerequisites: [
    'Understanding của Vietnamese legal system',
    'Legal practice experience hoặc law education',
    'Basic technology và software proficiency',
  ],
  careerOutcomes: [
    'Legal Technology Manager (30-60 triệu VNĐ)',
    'Legal Operations Specialist (25-50 triệu VNĐ)',
    'Compliance Technology Officer (28-55 triệu VNĐ)',
    'Legal Tech Consultant (35-70 triệu VNĐ)',
    'IP Portfolio Manager (30-65 triệu VNĐ)',
    'Legal Innovation Director (40-80 triệu VNĐ)',
    'LegalTech Entrepreneur (Thu nhập không giới hạn)',
  ],
  industryApplications: [
    { name: 'International law firms với Vietnam practices', description: '' },
    { name: 'Corporate legal departments của multinational companies', description: '' },
    { name: 'Vietnamese law firms modernizing operations', description: '' },
    { name: 'Compliance departments trong regulated industries', description: '' },
    { name: 'IP law firms và patent prosecution services', description: '' },
    { name: 'Legal tech startups serving Vietnamese market', description: '' },
  ],
  marketDemand: {
    averageSalary: '30-70 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất Cao',
  },
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.ProfessionalSkills, K2Module.Cybersecurity, K2Module.Python],
};

export const legalTechLessons: LegalTechLesson[] = [
  {
    id: 'legal-document-automation',
    title: 'Tự động hóa Tài liệu Pháp lý & Quản lý Hợp đồng',
    description:
      'Tự động hóa quy trình tạo tài liệu pháp lý, quản lý hợp đồng và vòng đời hợp đồng trong hệ thống pháp luật Việt Nam.',
    duration: '260 phút',
    difficulty: 'Trung bình',
    legalArea: 'document-automation',
    legalTechTools: ['DocuSign', 'PandaDoc', 'Ironclad', 'Conga'],
    targetLegalProfessionals: ['Luật sư doanh nghiệp', 'Chuyên viên pháp chế', 'Quản lý hợp đồng'],
    complianceRequirements: ['Luật Giao dịch điện tử', 'Nghị định 130/2018/NĐ-CP về chữ ký số'],
    vietnameseLegalSystem: ['Hệ thống luật dân sự', 'Quy định về hợp đồng điện tử'],
    videoUrl: 'https://www.youtube.com/watch?v=ZXT6W8Nfs98',
    imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về quản lý vòng đời hợp đồng và quy trình tự động hóa',
      'Sử dụng công cụ công nghệ pháp lý để tạo tài liệu pháp lý chuẩn',
      'Triển khai quy trình rà soát hợp đồng với sự hỗ trợ của AI',
      'Quản lý kho tài liệu pháp lý và kiểm soát phiên bản',
      'Đảm bảo tuân thủ các yêu cầu pháp lý của Việt Nam',
      'Tạo mẫu cho các tài liệu pháp lý phổ biến của Việt Nam',
    ],
    prerequisites: [
      'Kiến thức cơ bản về hệ thống pháp luật Việt Nam',
      'Quen thuộc với các khái niệm quản lý tài liệu',
      'Quan tâm đến tối ưu hóa quy trình pháp lý',
    ],
    exercises: [
      {
        title: 'Hệ thống Tự động hóa Hợp đồng Lao động Việt Nam',
        description: 'Xây dựng hệ thống toàn diện để tạo ra các hợp đồng lao động tiêu chuẩn của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Phần mềm tự động hóa tài liệu', 'Nguồn tài liệu luật lao động Việt Nam', 'Mẫu hợp đồng'],
        procedure: [
          'Nghiên cứu yêu cầu của Bộ luật Lao động Việt Nam 2019',
          'Xác định các biến thể và điều khoản hợp đồng phổ biến',
          'Tạo mẫu chính với các trường có thể thay đổi',
          'Xây dựng giao diện người dùng để tạo hợp đồng',
          'Triển khai xác thực để tuân thủ pháp lý',
          'Tích hợp chữ ký điện tử',
          'Tạo hệ thống theo dõi thay đổi hợp đồng',
          'Kiểm thử với các kịch bản tuyển dụng khác nhau',
        ],
        expectedResults: 'Hệ thống tạo hợp đồng tự động giảm 80% công việc thủ công',
        solution: 'Nền tảng tự động hóa tài liệu pháp lý hoàn chỉnh tuân thủ luật pháp Việt Nam',
      },
      {
        title: 'Bảng điều khiển Phân tích Hợp đồng',
        description: 'Phát triển bảng điều khiển sử dụng AI để phân tích danh mục hợp đồng.',
        difficulty: 'Nâng cao',
        materials: ['Nền tảng phân tích', 'Cơ sở dữ liệu hợp đồng', 'Công cụ trực quan hóa'],
        procedure: [
          'Thu thập các hợp đồng thương mại mẫu của Việt Nam',
          'Trích xuất các điều khoản và nghĩa vụ chính bằng AI',
          'Tạo hệ thống chấm điểm đánh giá rủi ro',
          'Xây dựng bảng điều khiển trực quan hóa để có thông tin chi tiết về hợp đồng',
          'Triển khai hệ thống cảnh báo cho các hợp đồng sắp hết hạn',
          'Thêm tự động hóa kiểm tra tuân thủ',
        ],
        expectedResults: 'Nền tảng thông minh hợp đồng cung cấp thông tin chi tiết có thể hành động',
      },
    ],
    realWorldApplications: [
      'Sử dụng phần mềm quản lý văn bản pháp lý.',
      'Tra cứu thông tin pháp luật trên các nền tảng trực tuyến.',
      'Áp dụng chữ ký điện tử cho hợp đồng.',
    ],
    vietnamContext: {
      title: 'Bối cảnh Legal Tech tại Việt Nam',
      content: [
        'Thị trường Legal Tech ở Việt Nam đang trong giai đoạn đầu phát triển nhưng có tiềm năng rất lớn, do nhu cầu hiện đại hóa ngành luật ngày càng tăng.',
        'Các công ty luật và doanh nghiệp Việt Nam đang bắt đầu ứng dụng công nghệ để tự động hóa các quy trình như quản lý hợp đồng, rà soát văn bản, và tuân thủ pháp luật.',
        'Chính phủ Việt Nam đang thúc đẩy chuyển đổi số trong ngành tư pháp, bao gồm việc xây dựng các hệ thống tòa án điện tử và cơ sở dữ liệu pháp luật quốc gia.',
        'Các startup Legal Tech Việt Nam đang nổi lên với các giải pháp như nền tảng kết nối luật sư, chatbot tư vấn pháp lý, và phần mềm quản lý cho các công ty luật.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Minh Tùng',
      title: 'Nhà sáng lập & CEO, AzFin.vn',
      company: 'AzFin.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-minh-tung',
      quote:
        'Công nghệ không thay thế luật sư, mà nó trao quyền cho luật sư. Legal Tech giúp chúng tôi loại bỏ các công việc lặp đi lặp lại, để tập trung vào việc tư vấn chiến lược và giải quyết các vấn đề phức tạp cho khách hàng. Đây là tương lai của ngành luật.',
    },
    quizzes: [
      {
        question: 'Legal Tech là gì?',
        options: [
          'Một loại luật mới về công nghệ.',
          'Việc sử dụng công nghệ để cung cấp dịch vụ pháp lý và hỗ trợ ngành luật.',
          'Phần mềm chỉ dành cho luật sư.',
          'Một công ty luật lớn.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Legal Tech (Công nghệ Pháp lý) là thuật ngữ chỉ việc ứng dụng công nghệ, phần mềm và máy tính để cung cấp, hỗ trợ các dịch vụ pháp lý.',
      },
      {
        question: 'Ứng dụng nào sau đây là một ví dụ về Legal Tech tại Việt Nam?',
        options: [
          'Một ứng dụng đặt đồ ăn.',
          'Một nền tảng mạng xã hội.',
          'Một chatbot cung cấp thông tin ban đầu về thủ tục ly hôn.',
          'Một phần mềm chỉnh sửa ảnh.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Chatbot tư vấn pháp lý là một ví dụ điển hình của Legal Tech, giúp tự động hóa việc cung cấp thông tin pháp lý cơ bản cho người dùng.',
      },
    ],
    faqs: [
      {
        question: 'Legal Tech là gì?',
        answer:
          'Legal Tech (Công nghệ Pháp lý) là việc sử dụng công nghệ, phần mềm và các giải pháp kỹ thuật số để cung cấp, hỗ trợ và nâng cao hiệu quả của các dịch vụ pháp lý. Nó bao gồm từ việc tự động hóa soạn thảo hợp đồng đến sử dụng AI để nghiên cứu án lệ.',
      },
      {
        question: 'Công nghệ có thay thế được luật sư không?',
        answer:
          'Không. Công nghệ là một công cụ mạnh mẽ giúp luật sư làm việc hiệu quả hơn, không phải để thay thế họ. Legal Tech giúp tự động hóa các công việc lặp đi lặp lại, tốn thời gian, cho phép luật sư tập trung vào các nhiệm vụ đòi hỏi tư duy chiến lược, phân tích phức tạp và sự tương tác con người.',
      },
      {
        question: 'Lợi ích chính của việc tự động hóa hợp đồng là gì?',
        answer:
          'Tự động hóa hợp đồng giúp tiết kiệm đáng kể thời gian và chi phí, giảm thiểu sai sót do con người, đảm bảo tính nhất quán và tuân thủ, đồng thời cho phép theo dõi và quản lý vòng đời hợp đồng một cách hiệu quả.',
      },
      {
        question: 'Tại sao Legal Tech lại quan trọng đối với các doanh nghiệp ở Việt Nam?',
        answer:
          'Trong bối cảnh môi trường pháp lý ngày càng phức tạp và hội nhập kinh tế quốc tế, Legal Tech giúp các doanh nghiệp Việt Nam quản lý rủi ro pháp lý tốt hơn, đảm bảo tuân thủ, tối ưu hóa chi phí và nâng cao năng lực cạnh tranh.',
      },
      {
        question: 'Contract Lifecycle Management (CLM) là gì?',
        answer: 'Quản lý Vòng đời Hợp đồng (CLM) là quá trình quản lý toàn diện một hợp đồng từ khi khởi tạo, đàm phán, ký kết, thực hiện, cho đến khi gia hạn hoặc chấm dứt. Các hệ thống CLM giúp tự động hóa và chuẩn hóa quy trình này.'
      },
      {
        question: 'Chữ ký điện tử có giá trị pháp lý tại Việt Nam không?',
        answer: 'Có. Theo Luật Giao dịch điện tử 2023 và các văn bản hướng dẫn, chữ ký số được chứng thực bởi các tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng có giá trị pháp lý tương đương chữ ký tay và con dấu của doanh nghiệp trong các giao dịch điện tử.'
      },
      {
        question: 'Làm thế nào để bắt đầu tự động hóa tài liệu pháp lý?',
        answer: 'Bắt đầu bằng việc xác định các loại tài liệu lặp đi lặp lại và có tính chuẩn hóa cao nhất, ví dụ như hợp đồng lao động, thỏa thuận bảo mật thông tin (NDA), hoặc biên bản họp. Sau đó, lựa chọn một công cụ tự động hóa phù hợp và tạo ra các mẫu (templates) chuẩn.'
      },
      {
        question: 'AI có thể giúp gì trong việc rà soát hợp đồng?',
        answer: 'AI có thể tự động trích xuất các điều khoản quan trọng (ví dụ: ngày hết hạn, điều khoản bồi thường), xác định các điều khoản rủi ro hoặc không theo tiêu chuẩn, và so sánh hợp đồng với các mẫu chuẩn của công ty, giúp quá trình rà soát nhanh hơn và chính xác hơn.'
      },
      {
        question: 'Việc kiểm soát phiên bản (version control) trong quản lý tài liệu pháp lý quan trọng như thế nào?',
        answer: 'Rất quan trọng. Nó đảm bảo rằng tất cả các bên liên quan luôn làm việc trên phiên bản mới nhất của tài liệu, tránh nhầm lẫn và sai sót. Nó cũng cung cấp một lịch sử rõ ràng về các thay đổi đã được thực hiện, bởi ai và khi nào, điều này rất cần thiết cho mục đích kiểm toán và giải quyết tranh chấp.'
      },
      {
        question: 'Một "kho tài liệu pháp lý" (document repository) tốt cần có những tính năng gì?',
        answer: 'Một kho tài liệu tốt cần có khả năng tìm kiếm mạnh mẽ, phân quyền truy cập chi tiết (ai được xem, sửa, xóa), kiểm soát phiên bản, tích hợp với các công cụ khác (như email, chữ ký điện tử), và có các biện pháp bảo mật mạnh mẽ để bảo vệ thông tin nhạy cảm.'
      }
    ],
  },
  {
    id: 'legal-research-ai-tools',
    title: 'Công cụ Nghiên cứu Pháp lý & Phân tích Vụ việc bằng AI',
    description:
      'Tận dụng AI và học máy cho nghiên cứu pháp lý, phân tích án lệ và xác định tiền lệ trong hệ thống tư pháp Việt Nam.',
    duration: '280 phút',
    difficulty: 'Nâng cao',
    legalArea: 'legal-research',
    legalTechTools: ['LexisNexis', 'Westlaw', 'Casetext', 'Google Scholar'],
    targetLegalProfessionals: ['Luật sư tranh tụng', 'Nghiên cứu sinh luật', 'Thẩm phán'],
    complianceRequirements: ['Quy tắc đạo đức hành nghề luật sư', 'Luật Sở hữu trí tuệ'],
    vietnameseLegalSystem: ['Hệ thống án lệ', 'Cơ sở dữ liệu pháp luật quốc gia'],
    videoUrl: 'https://www.youtube.com/watch?v=39zbC_PrNQs',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
    objectives: [
      'Thành thạo các phương pháp nghiên cứu pháp lý sử dụng AI',
      'Phân tích án lệ Việt Nam bằng công cụ học máy',
      'Xây dựng cơ sở dữ liệu kiến thức pháp lý',
      'Triển khai phân tích dự đoán cho kết quả pháp lý',
      'Tạo quy trình nghiên cứu pháp lý',
      'Hiểu các hạn chế và đạo đức của AI trong hành nghề luật',
    ],
    prerequisites: [
      'Nền tảng nghiên cứu pháp lý vững chắc',
      'Hiểu biết về hệ thống tòa án Việt Nam',
      'Quen thuộc cơ bản với các khái niệm AI',
    ],
    exercises: [
      {
        title: 'Phân tích Tiền lệ Luật Thương mại Việt Nam',
        description: 'Xây dựng hệ thống AI để phân tích các xu hướng trong tranh tụng thương mại Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Cơ sở dữ liệu tòa án Việt Nam', 'Thư viện NLP', 'Công cụ trực quan hóa dữ liệu'],
        procedure: [
          'Thu thập các quyết định của tòa án thương mại Việt Nam (hơn 5 năm)',
          'Làm sạch và cấu trúc dữ liệu văn bản pháp lý',
          'Áp dụng kỹ thuật NLP để trích xuất các khái niệm pháp lý',
          'Xác định các mẫu trong việc ra quyết định của tòa án',
          'Tạo mô hình dự đoán cho kết quả vụ việc',
          'Xây dựng bảng điều khiển tương tác với phân tích xu hướng',
          'Xác thực các dự đoán với kết quả vụ việc gần đây',
        ],
        expectedResults: 'Nền tảng phân tích dự đoán với độ chính xác hơn 75% trong dự đoán kết quả',
        solution: 'Nền tảng nghiên cứu pháp lý sử dụng AI dành riêng cho luật thương mại Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các công ty luật lớn sử dụng AI để phân tích hàng nghìn tài liệu trong các vụ kiện phức tạp (e-discovery).',
      'Doanh nghiệp sử dụng AI để nhanh chóng rà soát các hợp đồng với nhà cung cấp.',
      'Các công cụ dự đoán kết quả pháp lý dựa trên dữ liệu từ các vụ kiện trước đó.',
    ],
    vietnamContext: {
      title: 'AI và Tương lai ngành Luật Việt Nam',
      content: [
        'Việc ứng dụng AI trong ngành luật Việt Nam còn khá mới mẻ nhưng đang thu hút sự quan tâm lớn.',
        'Các công cụ AI có thể giúp luật sư Việt Nam nhanh chóng tra cứu và phân tích hệ thống văn bản pháp luật phức tạp và thường xuyên thay đổi.',
        'Thách thức lớn nhất là việc thiếu hụt dữ liệu pháp lý có cấu trúc và chất lượng cao bằng tiếng Việt để huấn luyện các mô hình AI.',
        'Một số công ty luật tiên phong đang thử nghiệm AI trong việc quản lý tri thức, tự động hóa soạn thảo các văn bản đơn giản và phân tích rủi ro hợp đồng.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Nguyễn Văn A',
      title: 'Trưởng phòng Pháp chế, Tập đoàn ABC',
      company: 'Tập đoàn ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'AI không phải là mối đe dọa, mà là người trợ lý đắc lực nhất mà tôi từng có. Nó giúp tôi xử lý khối lượng công việc khổng lồ, tìm ra những rủi ro mà con người có thể bỏ sót, cho phép tôi tập trung vào việc đưa ra những lời khuyên pháp lý giá trị nhất.',
    },
    quizzes: [
      {
        question: 'Ứng dụng nào của AI trong luật giúp phân tích một lượng lớn tài liệu điện tử để tìm bằng chứng?',
        options: [
          'Chatbot pháp lý',
          'Dự đoán kết quả vụ kiện',
          'e-Discovery (Khám phá điện tử)',
          'Quản lý hồ sơ vụ án',
        ],
        correctAnswerIndex: 2,
        explanation:
          'e-Discovery là quá trình sử dụng công nghệ, đặc biệt là AI, để sàng lọc và phân tích một khối lượng lớn dữ liệu điện tử (email, tài liệu, v.v.) nhằm tìm kiếm các bằng chứng liên quan đến một vụ kiện.',
      },
      {
        question: 'Thách thức chính cho việc phát triển AI trong ngành luật tại Việt Nam là gì?',
        options: [
          'Luật sư Việt Nam không thích công nghệ.',
          'Thiếu dữ liệu pháp lý tiếng Việt có cấu trúc để huấn luyện AI.',
          'Chi phí máy tính quá cao.',
          'Không có luật nào cho phép sử dụng AI.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chất lượng và số lượng của dữ liệu đầu vào là yếu tố quyết định đến hiệu quả của một mô hình AI. Việc thiếu các bộ dữ liệu pháp lý lớn, được chuẩn hóa bằng tiếng Việt là một rào cản lớn hiện nay.',
      },
    ],
    faqs: [
        {
          question: 'Natural Language Processing (NLP) là gì và nó giúp ích gì cho nghiên cứu pháp lý?',
          answer: 'Xử lý Ngôn ngữ Tự nhiên (NLP) là một nhánh của AI giúp máy tính hiểu, diễn giải và tạo ra ngôn ngữ của con người. Trong nghiên cứu pháp lý, NLP giúp tự động tóm tắt văn bản, trích xuất các thực thể pháp lý (tên, ngày, địa điểm), phân loại tài liệu và tìm kiếm các văn bản có nội dung tương tự một cách thông minh.'
        },
        {
          question: 'Phân tích dự đoán (predictive analytics) trong ngành luật hoạt động như thế nào?',
          answer: 'Phân tích dự đoán sử dụng các thuật toán học máy để phân tích dữ liệu từ các vụ việc trong quá khứ (ví dụ: các phán quyết của một thẩm phán cụ thể, kết quả của các loại tranh chấp tương tự) để dự báo các kết quả có thể xảy ra trong tương lai, chẳng hạn như khả năng thắng kiện hoặc mức bồi thường tiềm năng.'
        },
        {
          question: 'Sử dụng AI trong nghiên cứu pháp lý có những rủi ro đạo đức nào?',
          answer: 'Các rủi ro bao gồm sự thiên vị (bias) trong dữ liệu huấn luyện có thể dẫn đến kết quả không công bằng, sự thiếu minh bạch trong cách AI đưa ra kết luận ("hộp đen"), và nguy cơ quá phụ thuộc vào công nghệ mà bỏ qua sự phán đoán chuyên môn của luật sư. Việc bảo mật thông tin khách hàng cũng là một vấn đề lớn.'
        },
        {
          question: 'Làm thế nào để luật sư có thể xác minh tính chính xác của kết quả do AI cung cấp?',
          answer: 'Luật sư không bao giờ nên chấp nhận kết quả của AI một cách mù quáng. Họ phải luôn sử dụng nó như một điểm khởi đầu, một công cụ hỗ trợ. Việc kiểm tra chéo với các nguồn chính thống, đọc bản gốc của các án lệ hoặc văn bản pháp luật mà AI trích dẫn là bước bắt buộc để đảm bảo tính chính xác.'
        },
        {
          question: '"Án lệ" ở Việt Nam có vai trò như thế nào và AI giúp gì trong việc phân tích án lệ?',
          answer: 'Ở Việt Nam, án lệ được Hội đồng Thẩm phán Tòa án nhân dân tối cao lựa chọn và công bố, có giá trị hướng dẫn áp dụng thống nhất pháp luật. AI có thể giúp luật sư nhanh chóng tìm kiếm các án lệ có tình tiết tương tự vụ việc của họ, phân tích lập luận của tòa án và đánh giá khả năng áp dụng của một án lệ cụ thể.'
        },
        {
          question: 'Các cơ sở dữ liệu pháp luật trực tuyến như "Thư Viện Pháp Luật" hay "Luật Việt Nam" có phải là AI không?',
          answer: 'Bản thân chúng là các cơ sở dữ liệu được số hóa, không phải AI. Tuy nhiên, các nền tảng này ngày càng tích hợp các tính năng thông minh hơn, chẳng hạn như công cụ tìm kiếm nâng cao sử dụng từ khóa và ngữ cảnh, liên kết các văn bản liên quan. Đây là những bước đầu tiên tiến tới việc ứng dụng AI một cách sâu rộng hơn.'
        },
        {
          question: 'Làm thế nào để xây dựng một "cơ sở dữ liệu kiến thức pháp lý" (legal knowledge base)?',
          answer: 'Bắt đầu bằng việc thu thập và số hóa tất cả các tài liệu pháp lý nội bộ của công ty (mẫu hợp đồng, bản tư vấn, ghi chú nghiên cứu). Sau đó, sử dụng các công cụ để gắn thẻ (tagging), phân loại và tạo liên kết giữa các tài liệu. Các hệ thống tiên tiến hơn có thể dùng AI để tự động hóa quá trình này.'
        },
        {
          question: 'Sự khác biệt giữa tìm kiếm từ khóa truyền thống và tìm kiếm ngữ nghĩa (semantic search) của AI là gì?',
          answer: 'Tìm kiếm từ khóa chỉ trả về các kết quả chứa chính xác từ bạn đã gõ. Tìm kiếm ngữ nghĩa hiểu được ý định và ngữ cảnh đằng sau câu hỏi của bạn, và có thể trả về các kết quả có liên quan về mặt khái niệm ngay cả khi chúng không chứa từ khóa chính xác. Ví dụ, tìm "trách nhiệm của giám đốc" có thể trả về các văn bản nói về "nghĩa vụ của người quản lý doanh nghiệp".'
        }
      ]
  },
  {
    id: 'legal-case-management-systems',
    title: 'Hệ thống Quản lý Vụ việc & Quản lý Thực hành Pháp lý',
    description:
      'Quản lý vụ việc toàn diện, quản lý quan hệ khách hàng và tối ưu hóa thực hành cho các công ty luật và phòng pháp chế Việt Nam.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    legalArea: 'case-management',
    legalTechTools: ['Clio', 'MyCase', 'PracticePanther', 'Filevine'],
    targetLegalProfessionals: ['Quản lý công ty luật', 'Luật sư', 'Trợ lý pháp lý'],
    complianceRequirements: ['Quy định về bảo mật dữ liệu khách hàng', 'Luật Kế toán'],
    vietnameseLegalSystem: ['Quy trình tố tụng dân sự', 'Quy định về lưu trữ hồ sơ'],
    videoUrl: 'https://www.youtube.com/watch?v=7bB8zX_2cIE',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    objectives: [
      'Triển khai quy trình quản lý vụ việc toàn diện',
      'Tối ưu hóa quản lý quan hệ khách hàng trong hành nghề luật',
      'Quản lý lịch pháp lý và theo dõi thời hạn',
      'Tạo hệ thống thanh toán và theo dõi thời gian hiệu quả',
      'Xây dựng cổng thông tin và hệ thống liên lạc với khách hàng',
      'Phân tích hiệu suất thực hành với thông tin chi tiết từ dữ liệu',
    ],
    prerequisites: [
      'Kinh nghiệm hành nghề luật',
      'Hiểu biết về hoạt động hành nghề luật',
      'Kiến thức quản lý dự án cơ bản',
    ],
    exercises: [
      {
        title: 'Hệ thống Quản lý Thực hành cho Công ty Luật Việt Nam',
        description: 'Thiết kế hệ thống quản lý thực hành toàn diện cho một công ty luật Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Phần mềm quản lý thực hành', 'Mẫu cơ sở dữ liệu khách hàng', 'Công cụ tự động hóa quy trình'],
        procedure: [
          'Phân tích hoạt động và các điểm yếu hiện tại của công ty',
          'Thiết kế quy trình tiếp nhận vụ việc và giới thiệu khách hàng',
          'Triển khai quản lý vấn đề với theo dõi thời hạn',
          'Tạo tự động hóa thanh toán với các yêu cầu của Việt Nam',
          'Xây dựng cổng thông tin liên lạc với khách hàng',
          'Thêm quản lý tài liệu với kiểm soát bảo mật',
          'Triển khai bảng điều khiển phân tích hiệu suất',
          'Đào tạo thành viên nhóm về cách sử dụng hệ thống mới',
        ],
        expectedResults: 'Chuyển đổi quản lý thực hành hoàn chỉnh với cải thiện hiệu quả 40%',
        solution: 'Nền tảng thực hành pháp lý tích hợp phù hợp với thị trường pháp lý Việt Nam',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa hoạt động của công ty luật',
      'Quản lý phòng pháp chế doanh nghiệp',
      'Nâng cao thực hành của luật sư độc lập',
      'Cải thiện cung cấp dịch vụ pháp lý',
      'Nâng cao trải nghiệm khách hàng',
    ],
    vietnamContext: {
      title: 'Tối ưu hóa Hoạt động cho Công ty Luật Việt Nam',
      content: [
        'Các công ty luật tại Việt Nam đang ngày càng nhận ra tầm quan trọng của việc quản lý chuyên nghiệp để cạnh tranh hiệu quả.',
        'Phần mềm quản lý thực hành giúp các công ty theo dõi vụ việc, quản lý tài liệu, ghi nhận thời gian làm việc và xuất hóa đơn một cách hệ thống, giảm thiểu sai sót hành chính.',
        'Việc áp dụng các hệ thống này giúp các công ty luật Việt Nam nâng cao tính minh bạch với khách hàng và cải thiện khả năng quản lý dòng tiền.',
        'Thách thức là lựa chọn được phần mềm phù hợp có thể tùy chỉnh theo quy trình làm việc và các quy định về kế toán, thuế của Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Bà Trần Thị B',
      title: 'Giám đốc Điều hành, Công ty Luật YKVN',
      company: 'YKVN',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-b-legal',
      quote:
        'Sự xuất sắc trong chuyên môn pháp lý phải đi đôi với sự hiệu quả trong vận hành. Một công ty luật hiện đại cần một hệ thống quản lý mạnh mẽ để các luật sư có thể tập trung vào điều họ làm tốt nhất: giải quyết các vấn đề pháp lý cho khách hàng.',
    },
    quizzes: [
      {
        question: 'Chức năng chính của một hệ thống quản lý thực hành pháp lý là gì?',
        options: [
          'Chỉ để gửi email',
          'Quản lý tập trung các vụ việc, khách hàng, tài liệu, lịch và thanh toán',
          'Viết các văn bản pháp lý',
          'Dự đoán kết quả vụ án',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hệ thống quản lý thực hành pháp lý là một giải pháp phần mềm toàn diện giúp các công ty luật quản lý mọi khía cạnh hoạt động của họ một cách tích hợp và hiệu quả.',
      },
      {
        question: 'Tại sao việc tùy chỉnh phần mềm quản lý lại quan trọng đối với các công ty luật Việt Nam?',
        options: [
          'Vì không có lý do gì đặc biệt',
          'Để làm cho phần mềm trông đẹp hơn',
          'Để đảm bảo tuân thủ các quy định về kế toán, thuế và quy trình pháp lý đặc thù của Việt Nam',
          'Vì luật sư Việt Nam không thích dùng phần mềm có sẵn',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Mỗi quốc gia có hệ thống pháp luật và các quy định về tài chính, kế toán riêng. Do đó, phần mềm quản lý cần được tùy chỉnh để phù hợp với các yêu cầu này, đảm bảo công ty luật hoạt động đúng pháp luật và hiệu quả.',
      },
    ],
    faqs: [
        {
            question: 'Sự khác biệt giữa Quản lý Vụ việc (Case Management) và Quản lý Thực hành (Practice Management) là gì?',
            answer: 'Quản lý Vụ việc tập trung vào các chi tiết của một vụ việc cụ thể (tài liệu, nhiệm vụ, thời hạn). Quản lý Thực hành có phạm vi rộng hơn, bao gồm quản lý vụ việc cộng với các khía cạnh kinh doanh của công ty luật như quản lý quan hệ khách hàng (CRM), thanh toán, kế toán, và báo cáo hiệu suất.'
        },
        {
            question: 'Một "cổng thông tin khách hàng" (client portal) mang lại lợi ích gì?',
            answer: 'Cổng thông tin khách hàng cung cấp một không gian trực tuyến an toàn để luật sư và khách hàng chia sẻ tài liệu, trao đổi thông tin và theo dõi tiến độ vụ việc. Nó tăng cường tính minh bạch, cải thiện giao tiếp và mang lại trải nghiệm chuyên nghiệp hơn cho khách hàng.'
        },
        {
            question: 'Làm thế nào hệ thống quản lý có thể giúp theo dõi thời hạn (deadline)?',
            answer: 'Các hệ thống này cho phép tạo ra các quy trình công việc (workflows) với các chuỗi nhiệm vụ và thời hạn được thiết lập sẵn. Khi một vụ việc mới được tạo, hệ thống có thể tự động điền vào lịch các thời hạn quan trọng (ví dụ: thời hạn nộp đơn, phiên tòa) và gửi nhắc nhở tự động cho luật sư phụ trách.'
        },
        {
            question: 'Việc theo dõi thời gian (time tracking) có quan trọng đối với các công ty luật không tính phí theo giờ không?',
            answer: 'Có, rất quan trọng. Ngay cả khi không tính phí theo giờ, việc theo dõi thời gian giúp công ty hiểu được mức độ lợi nhuận của từng loại vụ việc, đánh giá hiệu suất làm việc của nhân viên, và có dữ liệu để định giá các gói dịch vụ trọn gói một cách chính xác hơn.'
        },
        {
            question: 'Làm thế nào để lựa chọn phần mềm quản lý thực hành phù hợp?',
            answer: 'Hãy bắt đầu bằng việc xác định các nhu cầu và quy trình làm việc đặc thù của công ty bạn. Sau đó, nghiên cứu các nhà cung cấp, yêu cầu họ demo sản phẩm, và kiểm tra xem phần mềm có thể tùy chỉnh theo luật pháp Việt Nam không. Yếu tố bảo mật và hỗ trợ kỹ thuật cũng rất quan trọng.'
        },
        {
            question: 'Lưu trữ dữ liệu trên đám mây (cloud-based) cho công ty luật có an toàn không?',
            answer: 'Các nhà cung cấp phần mềm Legal Tech uy tín thường có các biện pháp bảo mật rất nghiêm ngặt, thường là tốt hơn so với những gì một công ty luật nhỏ có thể tự trang bị (ví dụ: mã hóa dữ liệu, sao lưu định kỳ, chứng chỉ bảo mật quốc tế). Tuy nhiên, cần đảm bảo nhà cung cấp tuân thủ các quy định về bảo vệ dữ liệu của Việt Nam.'
        },
        {
            question: 'Hệ thống quản lý thực hành giúp gì trong việc quản lý quan hệ khách hàng (CRM)?',
            answer: 'Nó giúp lưu trữ tập trung mọi thông tin và lịch sử tương tác với khách hàng, từ thông tin liên hệ, các vụ việc đã thực hiện, đến các email và cuộc gọi. Điều này giúp luật sư có cái nhìn 360 độ về khách hàng và cung cấp dịch vụ tốt hơn.'
        },
        {
            question: 'Triển khai một hệ thống quản lý mới có khó không?',
            answer: 'Có thể là một thách thức, đòi hỏi sự cam kết từ ban lãnh đạo và sự hợp tác của toàn bộ nhân viên. Quá trình này bao gồm việc di chuyển dữ liệu cũ, tùy chỉnh hệ thống, và đào tạo người dùng. Bắt đầu với một kế hoạch triển khai chi tiết là chìa khóa để thành công.'
        }
    ]
  },
  {
    id: 'regulatory-compliance-technology',
    title: 'Công nghệ Tuân thủ Quy định & Quản lý Rủi ro',
    description:
      'Các giải pháp công nghệ cho việc tuân thủ quy định, đánh giá rủi ro và giám sát tuân thủ tự động trong môi trường kinh doanh Việt Nam.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    legalArea: 'regulatory-compliance',
    legalTechTools: ['Workiva', 'NAVEX Global', 'LogicGate', 'MetricStream'],
    targetLegalProfessionals: ['Chuyên viên tuân thủ', 'Kiểm toán viên nội bộ', 'Quản lý rủi ro'],
    complianceRequirements: ['Luật An ninh mạng', 'Nghị định 13/2023/NĐ-CP', 'Luật Phòng chống rửa tiền'],
    vietnameseLegalSystem: ['Hệ thống quy định chuyên ngành (ngân hàng, chứng khoán)', 'Cơ chế báo cáo định kỳ'],
    videoUrl: 'https://www.youtube.com/watch?v=Sc7qx2lxGYM',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    objectives: [
      'Xây dựng hệ thống giám sát tuân thủ tự động',
      'Triển khai quy trình đánh giá và quản lý rủi ro',
      'Tạo tự động hóa báo cáo quy định',
      'Hiểu bối cảnh quy định của Việt Nam',
      'Thiết kế hệ thống đào tạo và theo dõi tuân thủ',
      'Phát triển quy trình quản lý thay đổi quy định',
    ],
    prerequisites: [
      'Hiểu biết về các khái niệm tuân thủ quy định',
      'Kiến thức luật kinh doanh Việt Nam',
      'Nguyên tắc cơ bản về quản lý rủi ro',
    ],
    exercises: [
      {
        title: 'Hệ thống Giám sát Tuân thủ Ngân hàng Việt Nam',
        description: 'Tạo hệ thống giám sát tuân thủ tự động cho các quy định ngân hàng Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Khung tuân thủ', 'Cơ sở dữ liệu quy định ngân hàng', 'Công cụ giám sát'],
        procedure: [
          'Sơ đồ hóa các yêu cầu tuân thủ ngân hàng Việt Nam',
          'Thiết kế quy trình giám sát tự động',
          'Tạo thuật toán chấm điểm rủi ro',
          'Xây dựng tự động hóa báo cáo quy định',
          'Triển khai hệ thống cảnh báo vi phạm tuân thủ',
          'Thêm theo dõi thay đổi quy định',
          'Tạo bảng điều khiển tuân thủ với các chỉ số KPI',
          'Kiểm thử hệ thống với các kịch bản quy định',
        ],
        expectedResults: 'Nền tảng tuân thủ toàn diện giảm 70% giám sát thủ công',
        solution: 'Hệ thống tuân thủ quy định tự động tập trung vào ngân hàng Việt Nam',
      },
    ],
    realWorldApplications: [
      'Tự động hóa tuân thủ dịch vụ tài chính',
      'Quản lý tuân thủ doanh nghiệp',
      'Tự động hóa báo cáo quy định',
      'Triển khai hệ thống quản lý rủi ro',
      'Theo dõi tuân thủ kiểm toán',
    ],
    vietnamContext: {
      title: 'RegTech: Công nghệ cho Tuân thủ Quy định tại Việt Nam',
      content: [
        'Môi trường pháp lý và quy định tại Việt Nam ngày càng phức tạp, đặc biệt trong các lĩnh vực như tài chính-ngân hàng, bảo vệ dữ liệu và môi trường.',
        'Công nghệ tuân thủ (RegTech) giúp các doanh nghiệp tự động hóa việc theo dõi các thay đổi quy định, quản lý rủi ro và tạo báo cáo cho cơ quan chức năng.',
        'Luật An ninh mạng và Nghị định 13 về bảo vệ dữ liệu cá nhân đã thúc đẩy mạnh mẽ nhu cầu về các giải pháp RegTech tại Việt Nam.',
        'Các ngân hàng và công ty fintech là những đơn vị đi đầu trong việc áp dụng RegTech để đáp ứng các yêu cầu về phòng chống rửa tiền (AML) và định danh khách hàng (KYC).',
      ],
    },
    careerConnect: {
      name: 'Ông Phạm Tiến Dũng',
      title: 'Phó Thống đốc, Ngân hàng Nhà nước Việt Nam',
      company: 'Ngân hàng Nhà nước Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-tien-dung',
      quote:
        'Chuyển đổi số trong ngành ngân hàng phải đi đôi với việc tăng cường quản lý rủi ro và tuân thủ. RegTech là công cụ không thể thiếu để các tổ chức tín dụng vừa đổi mới sáng tạo, vừa đảm bảo hoạt động an toàn, lành mạnh theo đúng quy định của pháp luật.',
    },
    quizzes: [
      {
        question: 'RegTech là viết tắt của thuật ngữ gì?',
        options: [
          'Regular Technology',
          'Regulation Technology (Công nghệ Tuân thủ)',
          'Regional Technology',
          'Registration Technology',
        ],
        correctAnswerIndex: 1,
        explanation:
          'RegTech (Regulation Technology) là việc sử dụng công nghệ, đặc biệt là công nghệ thông tin, để tăng cường hiệu quả của việc tuân thủ các quy định pháp luật.',
      },
      {
        question: 'Luật nào của Việt Nam đã thúc đẩy mạnh mẽ nhu cầu về các giải pháp RegTech liên quan đến dữ liệu?',
        options: [
          'Luật Giao thông đường bộ',
          'Luật Xây dựng',
          'Luật An ninh mạng và Nghị định 13 về bảo vệ dữ liệu cá nhân',
          'Luật Giáo dục',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Luật An ninh mạng và đặc biệt là Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân đã đặt ra các yêu cầu nghiêm ngặt về việc xử lý dữ liệu, buộc các doanh nghiệp phải tìm đến các giải pháp công nghệ để đảm bảo tuân thủ.',
      },
    ],
    faqs: [
        {
            question: 'Sự khác biệt giữa Legal Tech và RegTech là gì?',
            answer: 'Legal Tech có phạm vi rộng hơn, bao gồm mọi công nghệ ứng dụng trong ngành luật. RegTech là một nhánh của FinTech (Công nghệ Tài chính), tập trung đặc biệt vào việc dùng công nghệ để giải quyết các vấn đề về tuân thủ quy định, thường là trong lĩnh vực tài chính nhưng cũng mở rộng ra các ngành khác.'
        },
        {
            question: 'Một "hệ thống giám sát tuân thủ tự động" hoạt động như thế nào?',
            answer: 'Hệ thống này liên tục quét các nguồn dữ liệu (giao dịch, email, nhật ký hệ thống) để tìm kiếm các dấu hiệu của hành vi không tuân thủ dựa trên các quy tắc được định sẵn. Khi phát hiện một hoạt động đáng ngờ, nó sẽ tự động tạo cảnh báo cho bộ phận tuân thủ để điều tra.'
        },
        {
            question: 'AML và KYC là gì?',
            answer: 'AML (Anti-Money Laundering) là Phòng chống rửa tiền, bao gồm các quy định và quy trình để ngăn chặn các tổ chức tài chính bị lợi dụng cho hoạt động rửa tiền. KYC (Know Your Customer) là Định danh khách hàng, là một phần của AML, yêu cầu các tổ chức phải xác minh danh tính của khách hàng trước khi thực hiện giao dịch.'
        },
        {
            question: 'Làm thế nào công nghệ có thể giúp quản lý các thay đổi quy định?',
            answer: 'Các công cụ RegTech có thể tự động theo dõi các nguồn tin tức pháp lý, website của các cơ quan chính phủ và các cơ sở dữ liệu pháp luật. Khi có một luật hoặc quy định mới được ban hành hoặc sửa đổi, hệ thống sẽ thông báo cho doanh nghiệp và phân tích các tác động tiềm tàng.'
        },
        {
            question: 'Ma trận rủi ro và tuân thủ (Risk and Compliance Matrix) là gì?',
            answer: 'Đây là một công cụ để xác định các rủi ro pháp lý và tuân thủ mà một tổ chức phải đối mặt, đánh giá mức độ nghiêm trọng và khả năng xảy ra của chúng, và vạch ra các biện pháp kiểm soát hiện có để giảm thiểu những rủi ro đó. Công nghệ giúp tự động hóa việc xây dựng và cập nhật ma trận này.'
        },
        {
            question: 'Tại sao RegTech lại quan trọng đối với các công ty Fintech?',
            answer: 'Các công ty Fintech hoạt động trong một lĩnh vực được quản lý rất chặt chẽ. Việc không tuân thủ có thể dẫn đến các khoản phạt khổng lồ và thậm chí bị thu hồi giấy phép. RegTech giúp họ vừa đổi mới nhanh chóng, vừa đảm bảo tuân thủ các quy định phức tạp, giảm chi phí và rủi ro.'
        },
        {
            question: 'Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân yêu cầu doanh nghiệp làm gì?',
            answer: 'Nghị định này yêu cầu doanh nghiệp phải có sự đồng ý rõ ràng của khách hàng trước khi thu thập, xử lý và chuyển giao dữ liệu cá nhân. Doanh nghiệp cũng phải thông báo cho khách hàng về mục đích xử lý, thực hiện các biện pháp bảo vệ dữ liệu, và chỉ định bộ phận/nhân sự phụ trách.'
        },
        {
            question: 'Làm thế nào để triển khai một chương trình đào tạo tuân thủ hiệu quả bằng công nghệ?',
            answer: 'Sử dụng một hệ thống quản lý học tập (LMS) để cung cấp các khóa học trực tuyến về tuân thủ cho nhân viên. Hệ thống có thể theo dõi tiến độ học tập, tổ chức các bài kiểm tra để đánh giá kiến thức, và tự động gửi các khóa học cập nhật khi có quy định mới.'
        }
    ]
  },
  {
    id: 'intellectual-property-management',
    title: 'Công nghệ Quản lý & Bảo hộ Sở hữu Trí tuệ',
    description:
      'Các công cụ và chiến lược kỹ thuật số để quản lý danh mục IP, giám sát nhãn hiệu và phân tích bằng sáng chế trong hệ sinh thái IP của Việt Nam.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    legalArea: 'ip-management',
    legalTechTools: ['Anaqua', 'PatSnap', 'TrademarkNow', 'IPfolio'],
    targetLegalProfessionals: ['Luật sư sở hữu trí tuệ', 'Chuyên viên quản lý IP', 'Nhà phát minh'],
    complianceRequirements: ['Luật Sở hữu trí tuệ', 'Các hiệp định quốc tế (TRIPS, PCT)'],
    vietnameseLegalSystem: ['Quy trình đăng ký tại Cục Sở hữu trí tuệ (NOIP)', 'Thực thi quyền SHTT'],
    videoUrl: 'https://www.youtube.com/watch?v=UqZJPuyK9VY',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu quy trình đăng ký IP của Việt Nam',
      'Triển khai hệ thống quản lý danh mục IP',
      'Tạo quy trình giám sát và thực thi nhãn hiệu',
      'Phân tích bối cảnh bằng sáng chế bằng các công cụ công nghệ',
      'Xây dựng chiến lược định giá và thương mại hóa IP',
      'Quản lý công nghệ hỗ trợ tranh tụng IP',
    ],
    prerequisites: [
      'Kiến thức cơ bản về sở hữu trí tuệ',
      'Hiểu biết về luật IP Việt Nam',
      'Quan tâm đến thương mại hóa công nghệ',
    ],
    exercises: [
      {
        title: 'Hệ thống Giám sát Nhãn hiệu Việt Nam',
        description: 'Xây dựng hệ thống theo dõi và thực thi nhãn hiệu toàn diện.',
        difficulty: 'Trung bình',
        materials: ['Cơ sở dữ liệu của NOIP', 'Công cụ giám sát nhãn hiệu', 'Hệ thống cảnh báo'],
        procedure: [
          'Kết nối với cơ sở dữ liệu nhãn hiệu Việt Nam',
          'Tạo thuật toán tìm kiếm tự động',
          'Xây dựng hệ thống phát hiện sự tương tự',
          'Triển khai quy trình cảnh báo cho các xung đột tiềm ẩn',
          'Thêm theo dõi hành động thực thi',
          'Tạo bảng điều khiển danh mục IP',
          'Kiểm thử với danh mục nhãn hiệu thực tế',
        ],
        expectedResults: 'Hệ thống bảo hộ nhãn hiệu tự động với giám sát toàn diện',
        solution: 'Nền tảng bảo hộ IP được thiết kế riêng cho thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Quản lý danh mục IP doanh nghiệp',
      'Nâng cao thực hành IP của công ty luật',
      'Chiến lược IP của công ty công nghệ',
      'Hỗ trợ truy tố bằng sáng chế',
      'Cấp phép và thương mại hóa IP',
    ],
    caseStudies: [
      {
        title: 'Quản lý Danh mục IP của Vinamilk',
        organization: 'Công ty Cổ phần Sữa Việt Nam',
        problem: 'Quản lý danh mục IP phức tạp trên nhiều quốc gia',
        solution: 'Nền tảng quản lý IP tập trung bao phủ Việt Nam và quốc tế',
        impact: 'Hợp lý hóa quy trình IP, giảm 30% chi phí nộp đơn',
        innovations: ['Quy trình nộp đơn tự động', 'Công cụ định giá IP', 'Phân tích danh mục'],
      },
    ],
    vietnamContext: {
      title: 'Bảo hộ Sở hữu trí tuệ trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Việt Nam đang nỗ lực tăng cường hệ thống bảo hộ sở hữu trí tuệ (IP) để thúc đẩy đổi mới sáng tạo và thu hút đầu tư nước ngoài.',
        'Cục Sở hữu trí tuệ (NOIP) đang từng bước số hóa quy trình đăng ký và quản lý, giúp doanh nghiệp dễ dàng hơn trong việc bảo hộ tài sản trí tuệ.',
        'Thách thức lớn nhất là tình trạng vi phạm bản quyền và hàng giả, hàng nhái còn phổ biến, đặc biệt trên môi trường trực tuyến.',
        'Các công ty công nghệ và startup Việt Nam ngày càng nhận thức rõ tầm quan trọng của việc đăng ký bằng sáng chế và nhãn hiệu để bảo vệ lợi thế cạnh tranh.',
      ],
    },
    careerConnect: {
      name: 'Ông Đinh Hữu Phí',
      title: 'Cục trưởng Cục Sở hữu trí tuệ',
      company: 'Cục Sở hữu trí tuệ (NOIP)',
      imageUrl: 'https://i.pravatar.cc/150?u=dinh-huu-phi',
      quote:
        'Tài sản trí tuệ là nguồn vốn quan trọng nhất của nền kinh tế tri thức. Xây dựng một hệ thống sở hữu trí tuệ mạnh mẽ, minh bạch và hiệu quả là nền tảng để Việt Nam phát triển bền vững và nâng cao năng lực cạnh tranh quốc gia.',
    },
    quizzes: [
      {
        question: 'NOIP là viết tắt của cơ quan nào tại Việt Nam?',
        options: [
          'Cục Đầu tư Nước ngoài',
          'Cục Sở hữu trí tuệ (National Office of Intellectual Property)',
          'Cục Cạnh tranh và Bảo vệ người tiêu dùng',
          'Cục Thương mại điện tử và Kinh tế số',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Cục Sở hữu trí tuệ (NOIP) là cơ quan thuộc Bộ Khoa học và Công nghệ, thực hiện chức năng quản lý nhà nước về sở hữu trí tuệ tại Việt Nam.',
      },
      {
        question: 'Tại sao việc bảo hộ sở hữu trí tuệ lại quan trọng đối với các startup công nghệ?',
        options: [
          'Đó là một thủ tục không cần thiết',
          'Để bảo vệ các ý tưởng, phát minh và thương hiệu khỏi bị sao chép, tạo lợi thế cạnh tranh',
          'Chỉ để khoe với nhà đầu tư',
          'Để làm chậm quá trình phát triển sản phẩm',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đối với các startup, tài sản trí tuệ (như mã nguồn, thuật toán, thương hiệu) thường là tài sản giá trị nhất. Việc bảo hộ IP giúp họ ngăn chặn các đối thủ lớn hơn sao chép và đảm bảo lợi thế cạnh tranh trên thị trường.',
      },
    ],
    faqs: [
        {
            question: 'Các loại tài sản trí tuệ (IP) chính là gì?',
            answer: 'Các loại chính bao gồm: Bằng sáng chế (cho phát minh), Nhãn hiệu (cho tên và logo), Bản quyền (cho các tác phẩm văn học, nghệ thuật), và Bí mật kinh doanh (cho thông tin kinh doanh bí mật). Mỗi loại có cơ chế bảo hộ và thời hạn khác nhau.'
        },
        {
            question: 'Phân tích bối cảnh bằng sáng chế (patent landscaping) là gì?',
            answer: 'Đây là quá trình sử dụng các công cụ phân tích để trực quan hóa dữ liệu bằng sáng chế trong một lĩnh vực công nghệ cụ thể. Nó giúp doanh nghiệp xác định các xu hướng công nghệ, theo dõi hoạt động của đối thủ cạnh tranh, tìm kiếm đối tác tiềm năng và tránh vi phạm bằng sáng chế của người khác.'
        },
        {
            question: 'Làm thế nào công nghệ có thể giúp giám sát và thực thi nhãn hiệu?',
            answer: 'Các công cụ công nghệ có thể tự động quét internet, các trang thương mại điện tử và mạng xã hội để tìm kiếm các trường hợp sử dụng trái phép logo hoặc tên thương hiệu của bạn. Khi phát hiện vi phạm, hệ thống có thể tự động gửi thư yêu cầu gỡ bỏ.'
        },
        {
            question: 'Thương mại hóa IP (IP commercialization) là gì?',
            answer: 'Là quá trình biến tài sản trí tuệ thành doanh thu. Các hình thức phổ biến bao gồm: tự sản xuất và bán sản phẩm được bảo hộ, cấp phép (licensing) cho công ty khác sử dụng IP để đổi lấy phí bản quyền, hoặc bán đứt tài sản trí tuệ.'
        },
        {
            question: 'Hiệp định TRIPS của WTO có ý nghĩa gì đối với IP tại Việt Nam?',
            answer: 'Hiệp định về các khía cạnh liên quan đến thương mại của quyền sở hữu trí tuệ (TRIPS) đặt ra các tiêu chuẩn tối thiểu về bảo hộ IP mà các nước thành viên WTO, bao gồm Việt Nam, phải tuân thủ. Việc tham gia TRIPS buộc Việt Nam phải nâng cao hệ thống pháp luật IP của mình cho phù hợp với chuẩn mực quốc tế.'
        },
        {
            question: 'Một "danh mục IP" (IP portfolio) là gì?',
            answer: 'Là tập hợp tất cả các tài sản trí tuệ mà một cá nhân hoặc tổ chức sở hữu, bao gồm bằng sáng chế, nhãn hiệu, bản quyền, v.v. Quản lý danh mục IP là việc đưa ra các quyết định chiến lược về việc duy trì, từ bỏ, cấp phép hoặc thực thi các tài sản này để tối đa hóa giá trị.'
        },
        {
            question: 'Tại sao cần phải "định giá" tài sản trí tuệ?',
            answer: 'Việc định giá IP rất quan trọng trong các giao dịch mua bán, sáp nhập doanh nghiệp (M&A), kêu gọi vốn đầu tư, hoặc khi cấp phép. Nó giúp xác định giá trị tài chính của các tài sản vô hình này, làm cơ sở cho việc đàm phán.'
        },
        {
            question: 'Làm thế nào để bảo vệ một ý tưởng kinh doanh?',
            answer: 'Bản thân một ý tưởng không thể được bảo hộ. Bạn phải biến nó thành một dạng cụ thể. Ví dụ, nếu ý tưởng là một quy trình kỹ thuật mới, bạn có thể xin cấp bằng sáng chế. Nếu là một ứng dụng phần mềm, bạn có thể đăng ký bản quyền cho mã nguồn. Nếu là một thương hiệu cho sản phẩm, bạn có thể đăng ký nhãn hiệu.'
        }
    ]
  },
];
