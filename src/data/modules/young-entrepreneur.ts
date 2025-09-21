import { BaseLessonData } from '@/types/lesson-base';
export interface YoungEntrepreneurLessonData extends BaseLessonData {
  ageGroup: string;
  businessTools: string[];
  vietnameseMarketFocus: string[];
  successMetrics: string[];
}

export const youngEntrepreneurLessons: YoungEntrepreneurLessonData[] = [
  {
    id: 'startup-mindset-fundamentals',
    title: 'Tư Duy Khởi Nghiệp & Cơ Hội Thị Trường',
    description:
      'Xây dựng tư duy khởi nghiệp, nhận diện cơ hội kinh doanh và hiểu rõ thị trường Việt Nam cho thế hệ GenZ',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    ageGroup: '16-22',
    businessTools: ['Canvas Business Model', 'Design Thinking', 'SWOT Analysis'],
    vietnameseMarketFocus: ['GenZ Consumers', 'Social Commerce', 'EdTech'],
    successMetrics: ['Validated Business Idea', 'User Growth', 'Initial Revenue'],
    videoUrl: 'https://www.youtube.com/watch?v=0pgIeCsgqRY',
    imageUrl: 'https://i.ytimg.com/vi/x2JRtPxGF7Y/hqdefault.jpg',
    objectives: [
      'Phát triển tư duy khởi nghiệp và nhận diện cơ hội',
      'Hiểu rõ đặc điểm thị trường Việt Nam cho startup',
      'Xây dựng vision và mission cho dự án kinh doanh',
      'Áp dụng Design Thinking vào giải quyết vấn đề',
    ],
    prerequisites: [
      'Sự tò mò và đam mê tìm hiểu',
      'Khả năng quan sát và tư duy logic',
      'Hiểu biết cơ bản về xã hội và công nghệ',
    ],
    exercises: [
      {
        title: 'Bản đồ cơ hội kinh doanh GenZ Vietnam',
        description: 'Nghiên cứu và tạo bản đồ các cơ hội kinh doanh phù hợp với thế hệ GenZ Việt Nam',
        difficulty: 'Cơ bản',
        materials: [
          'Khảo sát thị trường online',
          'Phỏng vấn 10 bạn đồng trang lứa',
          'Nghiên cứu report về GenZ Vietnam',
          'Canvas Business Model',
        ],
        procedure: [
          'Khảo sát nhu cầu và pain point của GenZ (16-25 tuổi)',
          'Phân tích xu hướng tiêu dùng và công nghệ',
          'Nhận diện 5 cơ hội kinh doanh tiềm năng',
          'Đánh giá tính khả thi và quy mô thị trường',
          'Tạo Business Model Canvas cho 1 ý tưởng',
        ],
        expectedResults: 'Bản đồ cơ hội với 5 ý tưởng kinh doanh cụ thể và 1 Business Model Canvas hoàn chỉnh',
        solution:
          'Tập trung vào các lĩnh vực: EdTech, Social Commerce, Sustainable Lifestyle, Digital Services, Content Creation',
      },
      {
        title: 'Workshop Design Thinking cho Startup',
        description: 'Áp dụng phương pháp Design Thinking để giải quyết một vấn đề thực tế',
        difficulty: 'Trung bình',
        materials: [
          'Design Thinking Toolkit',
          'Post-it notes và marker',
          'Template Empathy Map',
          'Prototype materials',
        ],
        procedure: [
          'Empathize: Phỏng vấn và quan sát người dùng',
          'Define: Xác định problem statement cụ thể',
          'Ideate: Brainstorm 50+ ý tưởng giải pháp',
          'Prototype: Tạo MVP đơn giản',
          'Test: Thu thập feedback và cải thiện',
        ],
        expectedResults: 'Một prototype giải pháp và plan cải thiện dựa trên user feedback',
        solution: 'Tập trung vào việc thấu hiểu sâu sắc người dùng và lặp lại nhanh chóng dựa trên dữ liệu thực tế.',
      },
    ],
    realWorldApplications: [
      'Khởi nghiệp công nghệ với vốn tự có dưới 50 triệu',
      'Tìm kiếm cơ hội kinh doanh trong các ngành trending',
      'Phát triển sản phẩm/dịch vụ phù hợp với GenZ Vietnam',
      'Ứng dụng Design Thinking trong giải quyết vấn đề xã hội',
    ],
    vietnamContext: {
      title: 'Hệ sinh thái Khởi nghiệp cho Người trẻ tại Việt Nam',
      content: [
        'Việt Nam đang chứng kiến một làn sóng khởi nghiệp mạnh mẽ từ thế hệ trẻ, đặc biệt là Gen Z. Với dân số trẻ, năng động và khả năng tiếp cận công nghệ cao, Việt Nam là một thị trường đầy tiềm năng cho các ý tưởng kinh doanh mới.',
        'Các lĩnh vực như thương mại xã hội (social commerce), công nghệ giáo dục (edtech), và các sản phẩm/dịch vụ bền vững đang thu hút sự quan tâm lớn.',
        'Nhiều quỹ đầu tư và vườn ươm khởi nghiệp đã xuất hiện để hỗ trợ các nhà sáng lập trẻ, tạo ra một hệ sinh thái ngày càng hoàn thiện.',
      ],
    },
    caseStudies: [
      {
        title: 'Tiki: Từ nhà sách online đến "kỳ lân" thương mại điện tử',
        organization: 'Tiki.vn (Sáng lập bởi Trần Ngọc Thái Sơn)',
        problem:
          'Thị trường thương mại điện tử Việt Nam giai đoạn đầu còn non trẻ, người tiêu dùng thiếu tin tưởng và lo ngại về chất lượng dịch vụ, đặc biệt là thời gian giao hàng.',
        solution:
          'Tiki đã xây dựng lòng tin bằng cách tập trung vào trải nghiệm khách hàng, cam kết bán sách thật và đầu tư mạnh vào hệ thống kho vận (logistics) để có thể giao hàng nhanh (TikiNOW).',
        impact:
          'Trở thành một trong những sàn thương mại điện tử hàng đầu Việt Nam, định giá gần 1 tỷ USD. Thành công của Tiki đã chứng minh tầm quan trọng của việc giải quyết đúng "nỗi đau" của khách hàng.',
        innovations: ['Dịch vụ giao hàng trong 2 giờ', 'Hệ thống logistics tự chủ', 'AI gợi ý sản phẩm'],
      },
      {
        title: 'Base.vn: Giải pháp Quản trị Doanh nghiệp Toàn diện',
        organization: 'Base.vn (Sáng lập bởi Phạm Kim Hùng)',
        problem:
          'Các doanh nghiệp vừa và nhỏ (SMEs) tại Việt Nam gặp khó khăn trong việc quản lý công việc, nhân sự và quy trình một cách hiệu quả do thiếu các công cụ phù hợp.',
        solution:
          'Base.vn đã phát triển một nền tảng SaaS (Software-as-a-Service) với hơn 50 ứng dụng chuyên biệt, giúp các doanh nghiệp giải quyết các bài toán quản trị từ nhân sự, công việc đến tài chính.',
        impact:
          'Được hơn 5,000 doanh nghiệp tin dùng và được tập đoàn FPT mua lại. Base.vn đã trở thành một trong những câu chuyện thành công tiêu biểu nhất của startup B2B tại Việt Nam.',
        innovations: ['Nền tảng SaaS toàn diện', 'Mô hình ứng dụng chuyên biệt', 'Tập trung vào thị trường SME'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố cốt lõi nào đã giúp Tiki xây dựng được lòng tin của khách hàng trong giai đoạn đầu?',
        options: [
          'Bán sản phẩm giá rẻ nhất thị trường',
          'Tập trung vào trải nghiệm khách hàng và giao hàng nhanh',
          'Chỉ bán hàng nhập khẩu',
          'Quảng cáo rầm rộ trên truyền hình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tiki đã giải quyết thành công "nỗi đau" lớn nhất của người mua hàng online thời kỳ đầu là sự thiếu tin tưởng và thời gian chờ đợi lâu, bằng cách cam kết chất lượng và đầu tư vào logistics.',
      },
      {
        question: 'Base.vn là một ví dụ thành công của mô hình kinh doanh nào?',
        options: [
          'B2C (Business-to-Consumer)',
          'C2C (Consumer-to-Consumer)',
          'SaaS B2B (Software-as-a-Service for Business-to-Business)',
          'Kinh doanh truyền thống',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Base.vn cung cấp phần mềm như một dịch vụ (SaaS) cho các khách hàng doanh nghiệp (B2B), giúp họ giải quyết các bài toán quản trị nội bộ.',
      },
    ],
    faqs: [
      {
        question: 'Tư duy khởi nghiệp (Entrepreneurial Mindset) là gì?',
        answer:
          'Đó là một cách suy nghĩ tập trung vào việc tìm kiếm cơ hội, chấp nhận rủi ro có tính toán, và học hỏi liên tục từ thất bại. Người có tư duy khởi nghiệp không chỉ nhìn thấy vấn đề mà còn nhìn thấy tiềm năng giải pháp và cách biến nó thành một mô hình kinh doanh.',
      },
      {
        question: 'Làm thế nào để tìm ra một ý tưởng kinh doanh tốt?',
        answer:
          'Bắt đầu bằng việc quan sát các vấn đề (pain points) trong cuộc sống của chính bạn hoặc của những người xung quanh. Một ý tưởng tốt thường xuất phát từ việc giải quyết một "nỗi đau" thực sự. Hãy tự hỏi: "Điều gì đang làm mọi người khó chịu? Tôi có thể làm gì để nó tốt hơn không?"',
      },
      {
        question: 'GenZ ở Việt Nam có những đặc điểm tiêu dùng nào nổi bật?',
        answer:
          'GenZ Việt Nam là thế hệ am hiểu công nghệ, đề cao tính cá nhân hóa và trải nghiệm. Họ tin tưởng vào các đánh giá từ cộng đồng (KOL/KOC), mua sắm nhiều qua mạng xã hội (social commerce), và quan tâm đến các thương hiệu có trách nhiệm xã hội và môi trường.',
      },
      {
        question: 'Mô hình kinh doanh Canvas (Business Model Canvas) là gì?',
        answer:
          'Là một công cụ trực quan giúp bạn phác thảo toàn bộ mô hình kinh doanh của mình trên một trang giấy. Nó bao gồm 9 yếu tố cốt lõi như phân khúc khách hàng, giải pháp giá trị, kênh phân phối, nguồn doanh thu, và cấu trúc chi phí. Nó giúp bạn có một cái nhìn tổng thể và dễ dàng điều chỉnh chiến lược.',
      },
      {
        question: 'Tại sao Design Thinking lại quan trọng cho startup?',
        answer:
          'Design Thinking là một quy trình giải quyết vấn đề lấy con người làm trung tâm. Nó giúp các startup đảm bảo rằng sản phẩm họ tạo ra thực sự giải quyết được vấn đề của người dùng, thay vì chỉ tạo ra một sản phẩm dựa trên giả định của nhà sáng lập. Quy trình này bao gồm các bước: Thấu cảm, Định nghĩa, Lên ý tưởng, Tạo mẫu, và Thử nghiệm.',
      },
      {
        question: 'Em không có nhiều vốn, có thể khởi nghiệp được không?',
        answer:
          'Hoàn toàn có thể. Nhiều startup thành công bắt đầu với rất ít vốn (bootstrapping). Bạn có thể tập trung vào các mô hình kinh doanh không đòi hỏi nhiều vốn ban đầu như cung cấp dịch vụ, kinh doanh online, hoặc xây dựng sản phẩm số bằng các công cụ no-code. Quan trọng là khả năng thực thi và giải quyết vấn đề cho khách hàng.',
      },
      {
        question: 'Social Commerce là gì?',
        answer:
          'Là hình thức thương mại điện tử diễn ra ngay trên các nền tảng mạng xã hội như Facebook, Instagram, TikTok. Người dùng có thể khám phá, tương tác và mua sản phẩm mà không cần rời khỏi ứng dụng. Livestream bán hàng là một hình thức rất phổ biến của social commerce tại Việt Nam.',
      },
      {
        question: 'Sự khác biệt giữa Vision (Tầm nhìn) và Mission (Sứ mệnh) là gì?',
        answer:
          'Vision là bức tranh lớn về tương lai mà bạn muốn tạo ra, là đích đến cuối cùng (Ví dụ: "Trở thành nền tảng giáo dục số 1 Việt Nam"). Mission là những gì bạn làm hàng ngày để đạt được tầm nhìn đó, là mục đích tồn tại của công ty (Ví dụ: "Cung cấp các khóa học chất lượng cao, dễ tiếp cận cho mọi người").',
      },
      {
        question: 'Làm thế nào để nghiên cứu thị trường khi không có nhiều tiền?',
        answer:
          'Bạn có thể sử dụng các công cụ miễn phí như Google Trends để xem xu hướng tìm kiếm, tạo các cuộc khảo sát online bằng Google Forms và chia sẻ trên mạng xã hội, đọc các báo cáo thị trường miễn phí, và quan trọng nhất là trực tiếp nói chuyện với các khách hàng tiềm năng để hiểu họ.',
      },
      {
        question: 'Em nên học ngành gì ở đại học để dễ khởi nghiệp?',
        answer:
          'Không có một ngành học "đúng" duy nhất. Các nhà sáng lập thành công đến từ nhiều ngành khác nhau. Tuy nhiên, các ngành như Khoa học máy tính, Quản trị kinh doanh, Marketing, và Thiết kế thường cung cấp những kỹ năng hữu ích. Quan trọng hơn cả là tinh thần tự học, khả năng giải quyết vấn đề và sự kiên trì.',
      },
    ],
  },
  {
    id: 'business-model-validation',
    title: 'Xây Dựng & Kiểm Chứng Business Model',
    description:
      'Học cách xây dựng business model bền vững, tạo MVP và validate ý tưởng kinh doanh với thị trường thực tế',
    duration: '210 phút',
    difficulty: 'Trung bình',
    ageGroup: '16-22',
    businessTools: ['Business Model Canvas', 'MVP', 'A/B Testing'],
    vietnameseMarketFocus: ['SaaS', 'E-commerce', 'Fintech'],
    successMetrics: ['Product-Market Fit', 'CAC', 'LTV'],
    videoUrl: 'https://www.youtube.com/watch?v=Glj7_9IxEqs',
    imageUrl: 'https://i.ytimg.com/vi/nkrJgHptrY8/hqdefault.jpg',
    objectives: [
      'Thiết kế Business Model Canvas chi tiết',
      'Xây dựng MVP (Minimum Viable Product)',
      'Kiểm chứng ý tưởng với khách hàng thực tế',
      'Phân tích competitive landscape Vietnam',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về tư duy khởi nghiệp',
      'Có ý tưởng kinh doanh cụ thể',
      'Kỹ năng nghiên cứu và phân tích',
    ],
    exercises: [
      {
        title: 'Business Model Canvas cho Startup Việt Nam',
        description: 'Thiết kế business model hoàn chỉnh cho ý tưởng startup của bạn',
        difficulty: 'Trung bình',
        materials: [
          'Business Model Canvas template',
          'Market research data',
          'Competitor analysis',
          'Financial modeling tools',
        ],
        procedure: [
          'Xác định Value Proposition cốt lõi',
          'Mapping Customer Segments chi tiết',
          'Thiết kế Customer Journey và Channels',
          'Xây dựng Revenue Streams và Cost Structure',
          'Validate từng component với data thực tế',
        ],
        expectedResults: 'Business Model Canvas hoàn chỉnh với data validation',
        solution: 'Focus vào differentiation rõ ràng và sustainable competitive advantage',
      },
      {
        title: 'MVP Development & Testing',
        description: 'Xây dựng MVP và test với 50+ potential customers',
        difficulty: 'Nâng cao',
        materials: [
          'No-code tools (Figma, Webflow)',
          'Survey tools (Google Forms)',
          'Analytics (Google Analytics)',
          'A/B testing platform',
        ],
        procedure: [
          'Xác định core features cho MVP',
          'Tạo prototype với no-code tools',
          'Setup tracking và analytics',
          'Recruit 50+ beta users',
          'Phân tích usage data và feedback',
        ],
        expectedResults: 'MVP với validated features và clear product-market fit signals',
      },
    ],
    realWorldApplications: [
      'Validate ý tưởng startup trước khi đầu tư lớn',
      'Xây dựng sản phẩm đáp ứng nhu cầu thực tế',
      'Tối ưu hóa business model cho thị trường Việt Nam',
      'Chuẩn bị pitch deck cho nhà đầu tư',
    ],
    caseStudies: [
      {
        title: 'Sendo.vn - From Idea to IPO',
        organization: 'Sendo.vn - Trần Ngọc Thái Sơn',
        problem: 'C2C marketplace chưa phát triển tại Việt Nam',
        solution: 'MVP tập trung vào mobile-first và sellers nhỏ lẻ',
        impact: 'IPO thành công, hơn 1M sellers active',
        innovations: ['Mobile-first approach', 'Seller support program', 'Logistics integration'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của Business Model Canvas?',
        options: ['Customer Segments', 'Value Propositions', 'Marketing Channels', 'Production Techniques'],
        correctAnswerIndex: 3,
        explanation:
          'Business Model Canvas không bao gồm phần "Production Techniques". Nó tập trung vào cách doanh nghiệp tạo ra giá trị và tiếp cận khách hàng.',
      },
      {
        question: 'MVP là viết tắt của thuật ngữ nào trong khởi nghiệp?',
        options: [
          'Most Valuable Player',
          'Minimum Viable Product',
          'Maximum Income Potential',
          'Minimum Investment Plan',
        ],
        correctAnswerIndex: 1,
        explanation:
          'MVP (Minimum Viable Product) là phiên bản đơn giản nhất của sản phẩm, được phát triển để kiểm chứng ý tưởng kinh doanh với chi phí thấp nhất.',
      },
    ],
    faqs: [
      {
        question: 'MVP (Minimum Viable Product) là gì và tại sao nó quan trọng?',
        answer:
          'MVP là phiên bản sản phẩm có tính năng tối thiểu nhất nhưng đủ để giải quyết một vấn đề cốt lõi cho nhóm khách hàng đầu tiên. Nó quan trọng vì giúp bạn kiểm tra giả định về sản phẩm với chi phí thấp nhất, thu thập phản hồi thực tế và tránh lãng phí nguồn lực xây dựng một sản phẩm không ai cần.',
      },
      {
        question: 'Làm thế nào để xác thực một ý tưởng kinh doanh mà không cần viết code?',
        answer:
          'Bạn có thể tạo một "landing page" (trang đích) mô tả sản phẩm và kêu gọi người dùng đăng ký nhận thông tin. Số lượng đăng ký sẽ cho thấy mức độ quan tâm. Ngoài ra, bạn có thể tạo một bản prototype (mẫu) bằng các công cụ như Figma, hoặc thậm chí là một video mô phỏng cách sản phẩm hoạt động.',
      },
      {
        question: 'Sự khác biệt giữa nghiên cứu định tính và định lượng là gì?',
        answer:
          'Nghiên cứu định lượng trả lời câu hỏi "Bao nhiêu?" (ví dụ: % người dùng thích tính năng A), thường thông qua khảo sát quy mô lớn. Nghiên cứu định tính trả lời câu hỏi "Tại sao?" (ví dụ: Tại sao người dùng thích tính năng A?), thường thông qua phỏng vấn sâu, giúp tìm hiểu động cơ và cảm xúc của người dùng.',
      },
      {
        question: 'A/B testing là gì?',
        answer:
          'Là một phương pháp thử nghiệm bằng cách tạo ra hai phiên bản (A và B) của một yếu tố nào đó (ví dụ: màu sắc nút bấm, tiêu đề) và cho hai nhóm người dùng khác nhau xem. Bằng cách đo lường phiên bản nào có tỷ lệ chuyển đổi tốt hơn, bạn có thể đưa ra quyết định dựa trên dữ liệu.',
      },
      {
        question: 'Làm thế nào để tìm được những "early adopters" (người dùng tiên phong)?',
        answer:
          'Early adopters là những người thích thử nghiệm sản phẩm mới và sẵn sàng chấp nhận những thiếu sót ban đầu. Bạn có thể tìm họ ở các cộng đồng online (diễn đàn, nhóm Facebook, Reddit), các sự kiện trong ngành, hoặc trong chính mạng lưới quan hệ của bạn. Hãy tìm những người đang "chật vật" nhất với vấn đề mà bạn đang giải quyết.',
      },
      {
        question: '"Pivot" trong khởi nghiệp nghĩa là gì?',
        answer:
          'Pivot là một sự thay đổi chiến lược cơ bản của công ty sau khi nhận ra rằng mô hình kinh doanh hoặc sản phẩm ban đầu không hiệu quả. Đây không phải là thất bại, mà là một sự điều chỉnh thông minh dựa trên những gì đã học được từ thị trường. Ví dụ: YouTube ban đầu là một trang web hẹn hò qua video.',
      },
      {
        question: 'Các chỉ số quan trọng cần theo dõi trong giai đoạn xác thực là gì?',
        answer:
          'Các chỉ số thường được gọi là "Pirate Metrics" (AARRR): Acquisition (Thu hút), Activation (Kích hoạt), Retention (Giữ chân), Revenue (Doanh thu), và Referral (Giới thiệu). Trong giai đoạn đầu, Retention (tỷ lệ người dùng quay lại) thường là chỉ số quan trọng nhất, cho thấy sản phẩm của bạn có thực sự tạo ra giá trị hay không.',
      },
      {
        question: 'Làm sao để biết khi nào nên ngừng một ý tưởng?',
        answer:
          'Đây là một quyết định khó khăn. Dấu hiệu có thể là khi bạn đã thử nhiều cách tiếp cận khác nhau (pivots) nhưng vẫn không thấy sự tăng trưởng về người dùng hoặc sự quan tâm từ thị trường. Nếu sau nhiều nỗ lực, bạn vẫn không thể tìm thấy một nhóm người dùng yêu thích sản phẩm của mình, có lẽ đã đến lúc xem xét lại.',
      },
      {
        question: 'Phỏng vấn khách hàng như thế nào cho hiệu quả?',
        answer:
          'Hãy tập trung vào việc lắng nghe, không phải bán hàng. Đặt những câu hỏi mở về quá khứ và hiện tại của họ, thay vì hỏi về tương lai ("Bạn có mua sản phẩm này không?"). Ví dụ: "Lần cuối cùng anh/chị gặp phải vấn đề [X], anh/chị đã giải quyết nó như thế nào?". Điều này giúp bạn hiểu rõ hơn về hành vi thực tế của họ.',
      },
      {
        question: 'Chi phí cơ hội (Opportunity Cost) trong khởi nghiệp là gì?',
        answer:
          'Đó là giá trị của lựa chọn tốt nhất mà bạn đã bỏ qua khi quyết định theo đuổi một con đường khác. Ví dụ, khi bạn quyết định khởi nghiệp, chi phí cơ hội có thể là mức lương ổn định và các phúc lợi từ một công việc văn phòng. Hiểu rõ điều này giúp bạn có quyết định sáng suốt hơn.',
      },
    ],
  },
  {
    id: 'financial-literacy-for-founders',
    title: 'Kiến Thức Tài Chính Dành Cho Nhà Sáng Lập',
    description:
      'Hiểu biết về tài chính, kế toán và các chỉ số kinh tế cơ bản để quản lý và phát triển startup hiệu quả',
    duration: '180 phút',
    difficulty: 'Trung bình',
    ageGroup: '18-25',
    businessTools: ['Excel', 'Google Sheets', 'Accounting Software'],
    vietnameseMarketFocus: ['Startup Financials', 'Investment Readiness', 'Financial Planning'],
    successMetrics: ['Cash Flow Management', 'Budgeting Accuracy', 'Financial Reporting'],
    videoUrl: 'https://www.youtube.com/watch?v=FwQTVN5fODw',
    imageUrl: 'https://i.ytimg.com/vi/x2JRtPxGF7Y/hqdefault.jpg',
    objectives: [
      'Hiểu các khái niệm tài chính cơ bản',
      'Quản lý dòng tiền và lập ngân sách',
      'Đọc và phân tích báo cáo tài chính',
      'Chuẩn bị cho các vòng gọi vốn',
    ],
    prerequisites: [
      'Có ý tưởng kinh doanh hoặc dự án khởi nghiệp',
      'Kỹ năng sử dụng máy tính cơ bản',
      'Sự ham học hỏi và cầu tiến',
    ],
    exercises: [
      {
        title: 'Dự Báo Tài Chính Cho Dự Án Khởi Nghiệp',
        description: 'Thực hành lập dự báo tài chính cho ý tưởng khởi nghiệp của bạn',
        difficulty: 'Nâng cao',
        materials: [
          'Financial projection templates',
          'Market research data',
          'Competitor financials',
          'Excel hoặc Google Sheets',
        ],
        procedure: [
          'Nghiên cứu và thu thập dữ liệu thị trường',
          'Xây dựng giả thuyết doanh thu và chi phí',
          'Lập bảng dự báo doanh thu, chi phí và lợi nhuận',
          'Phân tích độ nhạy (sensitivity analysis)',
          'Chuẩn bị thuyết trình về dự báo tài chính',
        ],
        expectedResults: 'Bảng dự báo tài chính 3-5 năm với các giả thuyết và phân tích rõ ràng',
        solution: 'Focus vào realistic assumptions và data-driven decision making',
      },
      {
        title: 'Phân Tích Tình Hình Tài Chính Hiện Tại',
        description: 'Đánh giá tình hình tài chính hiện tại của bạn và đưa ra kế hoạch cải thiện',
        difficulty: 'Trung bình',
        materials: [
          'Personal financial statement template',
          'Cash flow statement template',
          'Debt repayment calculator',
          'Savings goal tracker',
        ],
        procedure: [
          'Thu thập và tổng hợp thông tin tài chính cá nhân',
          'Lập bảng cân đối tài chính cá nhân',
          'Phân tích dòng tiền và các khoản chi tiêu',
          'Đánh giá khả năng trả nợ và tiết kiệm',
          'Xây dựng kế hoạch tài chính cá nhân 6 tháng tới',
        ],
        expectedResults: 'Bảng phân tích tình hình tài chính cá nhân và kế hoạch cải thiện rõ ràng',
        solution: 'Tập trung vào việc cắt giảm chi phí không cần thiết và tăng cường tiết kiệm đầu tư',
      },
    ],
    realWorldApplications: [
      'Quản lý tài chính cá nhân và doanh nghiệp hiệu quả',
      'Lập kế hoạch tài chính cho các dự án khởi nghiệp',
      'Chuẩn bị hồ sơ tài chính cho nhà đầu tư',
      'Phân tích và tối ưu hóa chi phí hoạt động',
    ],
    caseStudies: [
      {
        title: 'Vinamilk: Hành Trình Trở Thành Tập Đoàn Bò Sữa Số 1 Đông Nam Á',
        organization: 'Vinamilk - Mai Kiều Liên',
        problem: 'Thị trường sữa Việt Nam còn nhiều tiềm năng nhưng cũng đầy thách thức',
        solution: 'Chiến lược tài chính bài bản và đầu tư vào công nghệ sản xuất hiện đại',
        impact: 'Doanh thu tăng trưởng 20%/năm, xuất khẩu sang 57 quốc gia',
        innovations: ['Công nghệ chế biến sữa tiệt trùng', 'Sản phẩm dinh dưỡng cho trẻ em', 'Thương hiệu quốc gia'],
      },
      {
        title: 'FPT: Từ Doanh Nghiệp Nhà Nước Đến Tập Đoàn Công Nghệ Toàn Cầu',
        organization: 'FPT - Trương Gia Bình',
        problem: 'Ngành công nghệ thông tin Việt Nam còn non trẻ, thiếu nhân lực và vốn',
        solution: 'Mô hình kinh doanh linh hoạt, hợp tác quốc tế và đào tạo nhân lực bài bản',
        impact: 'Doanh thu năm 2022 đạt 1.5 tỷ USD, có mặt tại 26 quốc gia',
        innovations: ['Dịch vụ điện toán đám mây', 'Giải pháp chuyển đổi số', 'Đào tạo lập trình viên quốc tế'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của quy trình gọi vốn?',
        options: [
          'Chuẩn bị pitch deck',
          'Tìm kiếm nhà đầu tư tiềm năng',
          'Phân tích đối thủ cạnh tranh',
          'Thương thảo điều khoản đầu tư',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Quy trình gọi vốn thường không bao gồm phân tích đối thủ cạnh tranh như một bước chính thức. Tuy nhiên, việc hiểu rõ đối thủ cạnh tranh vẫn rất quan trọng trong kinh doanh.',
      },
      {
        question: 'Term sheet là gì trong quá trình gọi vốn?',
        options: [
          'Một loại thuế phải nộp khi gọi vốn',
          'Tài liệu phác thảo các điều khoản chính của thỏa thuận đầu tư',
          'Bảng tính toán lợi nhuận dự kiến cho nhà đầu tư',
          'Hợp đồng chính thức giữa startup và nhà đầu tư',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Term sheet là tài liệu phác thảo các điều khoản chính của thỏa thuận đầu tư giữa startup và nhà đầu tư. Nó không phải là hợp đồng chính thức nhưng là cơ sở để soạn thảo hợp đồng sau này.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao kiến thức tài chính lại cực kỳ quan trọng đối với nhà sáng lập?',
        answer:
          'Vì "dòng tiền là mạch máu của doanh nghiệp". Nếu không hiểu về tài chính, bạn sẽ không biết công ty mình đang "khỏe" hay "yếu", không thể ra quyết định đúng đắn về đầu tư, giá cả, và không thể nói chuyện được với các nhà đầu tư. Thiếu kiến thức tài chính là một trong những lý do hàng đầu khiến startup thất bại.',
      },
      {
        question: 'Bootstrapping là gì? Ưu và nhược điểm của nó?',
        answer:
          'Bootstrapping là tự thân vận động, xây dựng công ty bằng chính nguồn vốn của bạn hoặc doanh thu từ khách hàng mà không gọi vốn từ bên ngoài. Ưu điểm là bạn giữ toàn quyền kiểm soát công ty. Nhược điểm là tốc độ tăng trưởng có thể chậm hơn và rủi ro tài chính cá nhân cao hơn.',
      },
      {
        question: 'Sự khác biệt giữa Doanh thu (Revenue) và Lợi nhuận (Profit)?',
        answer:
          'Doanh thu là tổng số tiền bạn thu được từ việc bán sản phẩm hoặc dịch vụ. Lợi nhuận là số tiền còn lại sau khi lấy doanh thu trừ đi tất cả các chi phí (giá vốn, marketing, lương nhân viên...). Một công ty có thể có doanh thu rất cao nhưng lợi nhuận lại âm.',
      },
      {
        question: 'Burn Rate (Tốc độ đốt tiền) là gì?',
        answer:
          'Là số tiền mà công ty của bạn chi tiêu (và mất đi) mỗi tháng. Ví dụ, nếu bạn thu vào 20 triệu và chi ra 50 triệu mỗi tháng, thì burn rate của bạn là 30 triệu/tháng. Biết được chỉ số này giúp bạn tính toán được "đường băng" (runway) của mình.',
      },
      {
        question: 'Runway (Đường băng) là gì và cách tính?',
        answer:
          'Runway là khoảng thời gian công ty bạn có thể tiếp tục hoạt động trước khi hết sạch tiền. Cách tính đơn giản: Runway = Số tiền mặt bạn có / Burn Rate hàng tháng. Ví dụ, nếu bạn có 300 triệu trong ngân hàng và burn rate là 30 triệu/tháng, runway của bạn là 10 tháng.',
      },
      {
        question: 'Em nên lập một tài khoản ngân hàng riêng cho công ty không?',
        answer:
          'Chắc chắn là có, ngay từ ngày đầu tiên. Việc tách bạch tài chính cá nhân và tài chính công ty là nguyên tắc cơ bản. Điều này giúp bạn theo dõi thu chi dễ dàng, trông chuyên nghiệp hơn và tránh các rắc rối về thuế sau này.',
      },
      {
        question: 'Định giá sản phẩm như thế nào cho đúng?',
        answer:
          'Định giá là một trong những việc khó nhất. Có ba cách tiếp cận chính: 1/ Dựa trên chi phí (Cost-plus): Lấy chi phí sản xuất cộng với một mức lợi nhuận mong muốn. 2/ Dựa trên đối thủ (Competitor-based): Xem đối thủ đang định giá bao nhiêu. 3/ Dựa trên giá trị (Value-based): Định giá dựa trên giá trị mà sản phẩm của bạn mang lại cho khách hàng. Cách thứ 3 thường là tốt nhất cho startup.',
      },
      {
        question: 'Các loại chi phí chính trong một startup là gì?',
        answer:
          'Có hai loại chính: Chi phí cố định (Fixed Costs) là những chi phí không thay đổi theo doanh thu, ví dụ như tiền thuê văn phòng, lương nhân viên. Chi phí biến đổi (Variable Costs) là những chi phí tăng/giảm cùng với doanh thu, ví dụ như chi phí nguyên vật liệu, chi phí quảng cáo trên mỗi đơn hàng.',
      },
      {
        question: 'Khi nào thì một startup nên bắt đầu nghĩ đến việc gọi vốn?',
        answer:
          'Khi bạn đã có "traction" - những bằng chứng cho thấy mô hình kinh doanh của bạn hoạt động và có tiềm năng tăng trưởng (ví dụ: lượng người dùng tăng đều, doanh thu tăng, tỷ lệ giữ chân cao). Gọi vốn khi bạn cần tiền để "đổ thêm xăng vào lửa" (tăng tốc), chứ không phải để "tìm ra lửa".',
      },
      {
        question: 'Một bản kế hoạch tài chính đơn giản cần có những gì?',
        answer:
          'Ít nhất cần có 3 phần: 1/ Dự báo Doanh thu (Revenue Forecast): Bạn nghĩ mình sẽ kiếm được bao nhiêu tiền mỗi tháng. 2/ Dự báo Chi phí (Expense Forecast): Bạn nghĩ mình sẽ chi bao nhiêu mỗi tháng. 3/ Báo cáo Dòng tiền (Cash Flow Statement): Theo dõi tiền ra vào thực tế để đảm bảo bạn không bị hết tiền. Hãy bắt đầu với một file Excel đơn giản.',
      },
    ],
  },
  {
    id: 'building-team-and-culture',
    title: 'Xây Dựng Đội Ngũ & Văn Hóa Doanh Nghiệp',
    description: 'Kỹ năng xây dựng đội ngũ, quản lý nhân sự và phát triển văn hóa doanh nghiệp cho startup',
    duration: '180 phút',
    difficulty: 'Trung bình',
    ageGroup: '18-25',
    businessTools: ['Recruitment Platforms', 'HR Management Systems', 'Collaboration Tools'],
    vietnameseMarketFocus: ['Talent Acquisition', 'Employee Engagement', 'Organizational Culture'],
    successMetrics: ['Team Performance', 'Employee Satisfaction', 'Low Turnover Rate'],
    videoUrl: 'https://www.youtube.com/watch?v=anClAIcriq8',
    imageUrl: 'https://i.ytimg.com/vi/anClAIcriq8/hqdefault.jpg',
    objectives: [
      'Hiểu rõ vai trò và tầm quan trọng của đội ngũ trong startup',
      'Phát triển kỹ năng lãnh đạo và quản lý nhân sự',
      'Xây dựng văn hóa doanh nghiệp tích cực và bền vững',
      'Tạo động lực và giữ chân nhân tài cho startup',
    ],
    prerequisites: [
      'Có ý tưởng kinh doanh hoặc dự án khởi nghiệp',
      'Kỹ năng giao tiếp và làm việc nhóm',
      'Sự kiên nhẫn và khả năng thích ứng',
    ],
    exercises: [
      {
        title: 'Xây Dựng Văn Hóa Doanh Nghiệp',
        description: 'Thiết kế và phát triển văn hóa doanh nghiệp cho startup của bạn',
        difficulty: 'Trung bình',
        materials: [
          'Culture assessment tools',
          'Values definition workshop',
          'Employee handbook template',
          'Feedback systems',
        ],
        procedure: [
          'Định nghĩa giá trị cốt lõi và sứ mệnh của doanh nghiệp',
          'Thiết kế trải nghiệm gia nhập (onboarding) cho nhân viên mới',
          'Tạo hệ thống phản hồi và công nhận thành tích',
          'Thiết lập các quy trình giao tiếp và hợp tác',
          'Lập kế hoạch cho các hoạt động tăng cường văn hóa doanh nghiệp',
        ],
        expectedResults: 'Complete culture playbook với clear values và practices',
        solution: 'Focus vào psychological safety và growth mindset',
      },
      {
        title: 'Kỹ Năng Lãnh Đạo Hiệu Quả',
        description: 'Phát triển kỹ năng lãnh đạo cần thiết để dẫn dắt đội ngũ khởi nghiệp',
        difficulty: 'Nâng cao',
        materials: [
          'Leadership styles assessment',
          'Conflict resolution techniques',
          'Decision-making frameworks',
          'Coaching and feedback tools',
        ],
        procedure: [
          'Đánh giá phong cách lãnh đạo hiện tại của bạn',
          'Học cách giải quyết xung đột và ra quyết định hiệu quả',
          'Thực hành kỹ năng huấn luyện và phản hồi',
          'Phát triển kế hoạch cải thiện kỹ năng lãnh đạo cá nhân',
          'Chia sẻ và nhận phản hồi từ nhóm',
        ],
        expectedResults: 'Kế hoạch phát triển kỹ năng lãnh đạo cá nhân và nhận diện rõ ràng các lĩnh vực cần cải thiện',
        solution:
          'Tập trung vào việc phát triển kỹ năng lãnh đạo phục vụ (servant leadership) và lãnh đạo chuyển đổi (transformational leadership)',
      },
    ],
    realWorldApplications: [
      'Xây dựng và quản lý đội ngũ khởi nghiệp hiệu quả',
      'Phát triển văn hóa doanh nghiệp tích cực và bền vững',
      'Tạo động lực và giữ chân nhân tài cho startup',
      'Lãnh đạo và quản lý sự thay đổi trong tổ chức',
    ],
    caseStudies: [
      {
        title: 'Zalora - Xây Dựng Đội Ngũ và Văn Hóa Doanh Nghiệp Tại Đông Nam Á',
        organization: 'Zalora - Gunjan Soni',
        problem: 'Thị trường thời trang trực tuyến đầy cạnh tranh và thay đổi nhanh chóng',
        solution:
          'Chiến lược nhân sự tập trung vào việc thu hút và giữ chân nhân tài hàng đầu, phát triển văn hóa doanh nghiệp linh hoạt và đổi mới',
        impact: 'Tăng trưởng doanh thu 30%/năm, mở rộng hoạt động sang 6 quốc gia trong khu vực',
        innovations: [
          'Chương trình đào tạo lãnh đạo trẻ',
          'Hệ thống đánh giá hiệu suất 360 độ',
          'Sáng kiến văn hóa doanh nghiệp đa dạng và bao gồm',
        ],
      },
      {
        title: 'VNG - Xây Dựng Đội Ngũ và Văn Hóa Doanh Nghiệp Trong Ngành Công Nghệ',
        organization: 'VNG - Lê Hồng Minh',
        problem: 'Ngành công nghệ thông tin Việt Nam cạnh tranh gay gắt về nhân tài và ý tưởng',
        solution: 'Mô hình quản lý linh hoạt, khuyến khích đổi mới sáng tạo và văn hóa học hỏi không ngừng',
        impact: 'Doanh thu năm 2022 đạt 1.5 tỷ USD, có mặt tại 26 quốc gia',
        innovations: [
          'Chương trình "VNG Young Leader" phát hiện và bồi dưỡng lãnh đạo trẻ',
          'Mô hình làm việc linh hoạt (flexible working model)',
          'Chính sách đãi ngộ và phúc lợi cạnh tranh',
        ],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của văn hóa doanh nghiệp?',
        options: ['Giá trị cốt lõi', 'Chính sách lương thưởng', 'Quy trình tuyển dụng', 'Chiến lược marketing'],
        correctAnswerIndex: 3,
        explanation:
          'Chiến lược marketing thường không được xem là một phần của văn hóa doanh nghiệp, mặc dù nó có thể bị ảnh hưởng bởi văn hóa doanh nghiệp.',
      },
      {
        question: 'Kỹ năng lãnh đạo nào sau đây là quan trọng nhất trong giai đoạn đầu của một startup?',
        options: [
          'Kỹ năng tài chính',
          'Kỹ năng giao tiếp và truyền cảm hứng',
          'Kỹ năng lập trình',
          'Kỹ năng phân tích dữ liệu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong giai đoạn đầu của một startup, kỹ năng giao tiếp và truyền cảm hứng là rất quan trọng để xây dựng đội ngũ và thuyết phục nhà đầu tư.',
      },
    ],
    faqs: [
      {
        question: 'Khi nào em nên tuyển những nhân viên đầu tiên?',
        answer:
          'Khi bạn đang phải làm những công việc lặp đi lặp lại, không thuộc chuyên môn của mình và nó đang cản trở bạn tập trung vào những việc quan trọng hơn (như phát triển sản phẩm, gặp khách hàng). Hãy tuyển người khi "nỗi đau" của việc không có họ lớn hơn chi phí bỏ ra để tuyển họ.',
      },
      {
        question: 'Làm thế nào để thu hút người tài khi công ty còn nhỏ và chưa có nhiều tiền?',
        answer:
          'Bạn không thể cạnh tranh bằng lương, hãy cạnh tranh bằng những thứ khác: 1/ Tầm nhìn và sứ mệnh: Bán cho họ ước mơ và cơ hội tạo ra tác động lớn. 2/ Văn hóa: Một môi trường làm việc linh hoạt, tôn trọng và trao quyền. 3/ Cơ hội học hỏi: Được làm việc trực tiếp với nhà sáng lập và học hỏi nhanh chóng. 4/ Cổ phần (ESOP): Cho họ cơ hội sở hữu một phần công ty.',
      },
      {
        question: 'Co-founder (nhà đồng sáng lập) có cần thiết không?',
        answer:
          'Không bắt buộc nhưng rất được khuyến khích. Khởi nghiệp là một hành trình cô đơn và đầy áp lực. Có một co-founder để chia sẻ gánh nặng, bổ sung kỹ năng và cùng đưa ra quyết định là một lợi thế lớn. Hãy tìm người mà bạn tin tưởng, tôn trọng và có bộ kỹ năng bổ trợ cho bạn (ví dụ: một người làm kỹ thuật, một người làm kinh doanh).',
      },
      {
        question: 'Văn hóa công ty (Company Culture) là gì?',
        answer:
          'Đó không phải là bàn bi-a hay đồ ăn miễn phí. Văn hóa là tập hợp những giá trị và hành vi được chấp nhận trong công ty của bạn. Nó là "cách chúng ta làm việc ở đây khi không có sếp nhìn". Văn hóa được hình thành từ chính hành động của nhà sáng lập mỗi ngày.',
      },
      {
        question: 'Làm thế nào để xây dựng một văn hóa công ty tốt từ đầu?',
        answer:
          'Hãy xác định 3-5 giá trị cốt lõi mà bạn tin tưởng (ví dụ: "Minh bạch", "Khách hàng là trên hết", "Dám thất bại"). Sau đó, hãy sống với những giá trị đó hàng ngày. Khi tuyển dụng, hãy tìm những người phù hợp với văn hóa. Khi đưa ra quyết định, hãy dựa trên những giá trị đó.',
      },
      {
        question: 'ESOP (Employee Stock Ownership Plan) là gì?',
        answer:
          'Là một chương trình cho phép nhân viên sở hữu cổ phần của công ty. Đây là một công cụ mạnh mẽ để thu hút và giữ chân nhân tài, vì nó gắn kết lợi ích của nhân viên với sự thành công lâu dài của công ty. Nhân viên sẽ không chỉ làm việc vì lương, mà còn vì họ là một người chủ.',
      },
      {
        question: 'Làm thế nào để quản lý và giao việc cho người khác hiệu quả?',
        answer:
          'Hãy giao "kết quả" chứ đừng giao "cách làm". Nói rõ mục tiêu cần đạt được là gì, tại sao nó quan trọng, và thời hạn là khi nào. Sau đó, hãy tin tưởng và trao quyền cho nhân viên của bạn tự tìm ra cách thực hiện tốt nhất. Hãy sẵn sàng hỗ trợ nhưng đừng làm thay.',
      },
      {
        question: 'Làm thế nào để đưa ra và nhận phản hồi (feedback)?',
        answer:
          'Hãy cụ thể, chân thành và tập trung vào hành vi, không phải con người. Thay vì nói "Bạn làm việc cẩu thả", hãy nói "Trong báo cáo lần trước, tôi thấy có một vài lỗi số liệu, điều này có thể ảnh hưởng đến quyết định của chúng ta. Lần tới, bạn có thể kiểm tra kỹ hơn trước khi gửi không?". Và hãy luôn xin phản hồi về chính mình.',
      },
      {
        question: 'Em nên tìm kiếm những kỹ năng gì ở những thành viên đầu tiên trong đội nhóm?',
        answer:
          'Hãy tìm những người đa năng (generalists) thay vì những chuyên gia quá hẹp (specialists). Những người đầu tiên cần có khả năng học hỏi nhanh, thích ứng tốt, không ngại làm nhiều việc khác nhau và có "tư duy của người làm chủ" - họ sẵn sàng làm bất cứ điều gì cần thiết để công ty thành công.',
      },
      {
        question: 'Làm gì khi có mâu thuẫn giữa các thành viên trong nhóm?',
        answer:
          'Đừng né tránh. Mâu thuẫn là điều không thể tránh khỏi. Với tư cách là người lãnh đạo, bạn cần tạo ra một không gian an toàn để mọi người có thể nói lên quan điểm của mình một cách tôn trọng. Hãy lắng nghe tất cả các bên, tập trung vào vấn đề chứ không phải cá nhân, và cùng nhau tìm ra giải pháp hướng tới mục tiêu chung của công ty.',
      },
    ],
  },
  {
    id: 'pitching-and-storytelling',
    title: 'Thuyết Trình & Kể Chuyện Trong Khởi Nghiệp',
    description:
      'Nghệ thuật thuyết trình và kể chuyện để thu hút nhà đầu tư, khách hàng và đối tác cho dự án khởi nghiệp',
    duration: '150 phút',
    difficulty: 'Trung bình',
    ageGroup: '18-25',
    businessTools: ['Pitch Deck Templates', 'Storytelling Frameworks', 'Presentation Software'],
    vietnameseMarketFocus: ['Investor Pitching', 'Startup Storytelling', 'Effective Communication'],
    successMetrics: ['Investor Interest', 'Funding Secured', 'Partnerships Established'],
    videoUrl: 'https://www.youtube.com/watch?v=6jK2j6gG8jA',
    imageUrl: 'https://i.ytimg.com/vi/6jK2j6gG8jA/hqdefault.jpg',
    objectives: [
      'Hiểu cấu trúc và nội dung của một bài thuyết trình gọi vốn hiệu quả',
      'Phát triển kỹ năng kể chuyện hấp dẫn cho dự án khởi nghiệp',
      'Thiết kế pitch deck chuyên nghiệp và ấn tượng',
      'Luyện tập kỹ năng thuyết trình trước công chúng',
    ],
    prerequisites: ['Có ý tưởng kinh doanh hoặc dự án khởi nghiệp', 'Kỹ năng giao tiếp cơ bản', 'Sự tự tin và đam mê'],
    exercises: [
      {
        title: 'Xây Dựng Pitch Deck Cho Dự Án',
        description: 'Tạo một bài thuyết trình ngắn gọn và ấn tượng cho ý tưởng khởi nghiệp của bạn',
        difficulty: 'Trung bình',
        materials: [
          'Pitch deck template',
          'Hướng dẫn xây dựng pitch deck',
          'Dữ liệu thị trường và đối thủ cạnh tranh',
          'Thông tin tài chính cơ bản',
        ],
        procedure: [
          'Nghiên cứu và phân tích các pitch deck thành công',
          'Lên dàn ý cho pitch deck của bạn',
          'Thiết kế các slide trình bày rõ ràng và hấp dẫn',
          'Luyện tập thuyết trình trước gương hoặc ghi hình lại',
          'Nhận phản hồi và chỉnh sửa pitch deck',
        ],
        expectedResults: 'Một pitch deck hoàn chỉnh và ấn tượng cho dự án khởi nghiệp của bạn',
        solution: 'Tập trung vào câu chuyện, dữ liệu thuyết phục và thiết kế chuyên nghiệp',
      },
      {
        title: 'Kể Chuyện Để Gây Ấn Tượng',
        description: 'Phát triển kỹ năng kể chuyện để thu hút và giữ chân người nghe',
        difficulty: 'Trung bình',
        materials: [
          'Hướng dẫn kể chuyện hiệu quả',
          'Video bài giảng về nghệ thuật kể chuyện',
          'Mẫu câu chuyện thành công',
          'Công cụ ghi âm và ghi hình',
        ],
        procedure: [
          'Phân tích cấu trúc của một câu chuyện hấp dẫn',
          'Lên ý tưởng và viết kịch bản cho câu chuyện của bạn',
          'Thực hành kể chuyện trước gương hoặc ghi hình lại',
          'Nhận phản hồi và cải thiện kỹ năng kể chuyện',
          'Chuẩn bị nhiều phiên bản câu chuyện cho các đối tượng khác nhau',
        ],
        expectedResults: 'Một câu chuyện hấp dẫn và ấn tượng về dự án khởi nghiệp của bạn',
        solution: 'Tập trung vào cảm xúc, tính chân thực và sự kết nối với người nghe',
      },
    ],
    realWorldApplications: [
      'Thuyết trình trước nhà đầu tư để gọi vốn cho startup',
      'Kể chuyện để truyền cảm hứng và thu hút khách hàng',
      'Xây dựng mối quan hệ đối tác chiến lược',
      'Giao tiếp hiệu quả trong môi trường kinh doanh',
    ],
    caseStudies: [
      {
        title: 'Airbnb: Câu Chuyện Khởi Nghiệp Đầy Cảm Hứng',
        organization: 'Airbnb - Brian Chesky',
        problem: 'Thiếu vốn và niềm tin từ nhà đầu tư',
        solution: 'Kể câu chuyện khởi nghiệp đầy cảm hứng và dữ liệu thị trường thuyết phục',
        impact: 'Gọi vốn thành công và trở thành một trong những startup giá trị nhất thế giới',
        innovations: ['Nền tảng đặt phòng trực tuyến', 'Mô hình kinh doanh chia sẻ', 'Chiến lược tiếp thị lan truyền'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Một pitch deck hiệu quả thường không bao gồm phần nào sau đây?',
        options: ['Giới thiệu về đội ngũ sáng lập', 'Phân tích SWOT', 'Kế hoạch tiếp thị chi tiết', 'Dự báo tài chính'],
        correctAnswerIndex: 2,
        explanation:
          'Một pitch deck hiệu quả thường tập trung vào tầm nhìn, mô hình kinh doanh, và dự báo tài chính. Kế hoạch tiếp thị chi tiết có thể được cung cấp trong tài liệu bổ sung hoặc trong cuộc họp tiếp theo.',
      },
      {
        question: 'Kỹ năng nào sau đây không quan trọng trong việc thuyết trình trước công chúng?',
        options: ['Kỹ năng giao tiếp', 'Kỹ năng quản lý thời gian', 'Kỹ năng lập trình', 'Kỹ năng xử lý tình huống'],
        correctAnswerIndex: 2,
        explanation:
          'Kỹ năng lập trình không liên quan trực tiếp đến việc thuyết trình trước công chúng. Các kỹ năng quan trọng bao gồm kỹ năng giao tiếp, quản lý thời gian, và xử lý tình huống phát sinh trong quá trình thuyết trình.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao "Storytelling" (kể chuyện) lại quan trọng khi pitching?',
        answer:
          'Vì con người kết nối bằng cảm xúc, không phải bằng số liệu. Một câu chuyện hay giúp nhà đầu tư và khách hàng hiểu được "tại sao" bạn làm điều này, vấn đề bạn giải quyết lớn như thế nào, và tầm nhìn của bạn là gì. Số liệu chứng minh bạn thông minh, nhưng câu chuyện mới khiến người ta tin tưởng và đi theo bạn.',
      },
      {
        question: 'Elevator Pitch là gì?',
        answer:
          'Là một bài giới thiệu cực ngắn gọn về startup của bạn, đủ để trình bày trong khoảng thời gian đi chung thang máy (khoảng 30-60 giây). Nó cần trả lời súc tích các câu hỏi: Bạn là ai? Bạn làm gì? Cho ai? Tại sao điều đó lại quan trọng?',
      },
      {
        question: 'Cấu trúc của một bài pitch deck (bản trình bày gọi vốn) tiêu chuẩn gồm những gì?',
        answer:
          'Thường bao gồm 10-12 slide chính: 1. Vấn đề (Problem), 2. Giải pháp (Solution), 3. Sản phẩm (Product), 4. Quy mô thị trường (Market Size), 5. Mô hình kinh doanh (Business Model), 6. Lợi thế cạnh tranh (Competitive Advantage), 7. Đội ngũ (Team), 8. Bằng chứng (Traction), 9. Kế hoạch tương lai (Roadmap), 10. Lời kêu gọi (The Ask).',
      },
      {
        question: 'Slide "Vấn đề" cần trình bày như thế nào cho ấn tượng?',
        answer:
          'Hãy bắt đầu bằng một câu chuyện cá nhân hoặc một thống kê gây sốc để làm cho vấn đề trở nên gần gũi và nghiêm trọng. Hãy cho thấy "nỗi đau" của khách hàng hiện tại lớn như thế nào và các giải pháp hiện có đang thất bại ra sao. Làm cho nhà đầu tư cảm nhận được sự cấp bách của vấn đề.',
      },
      {
        question: 'Slide "Đội ngũ" (Team) có thực sự quan trọng không?',
        answer:
          'Cực kỳ quan trọng, đặc biệt là ở giai đoạn đầu. Nhiều nhà đầu tư cho rằng họ "đầu tư vào con người, không phải vào ý tưởng". Slide này cần cho thấy tại sao đội ngũ của bạn là những người duy nhất trên thế giới có thể giải quyết vấn đề này thành công. Hãy nêu bật kinh nghiệm, đam mê và sự gắn kết của các thành viên.',
      },
      {
        question: '"The Ask" (Lời kêu gọi) trong pitch deck là gì?',
        answer:
          'Là slide cuối cùng nơi bạn nói rõ bạn cần gì. Cụ thể: bạn muốn huy động bao nhiêu tiền (ví dụ: 5 tỷ VNĐ) và bạn sẽ dùng số tiền đó để làm gì trong 12-18 tháng tới (ví dụ: 40% cho phát triển sản phẩm, 40% cho marketing, 20% cho vận hành). Sự rõ ràng thể hiện bạn đã có kế hoạch cụ thể.',
      },
      {
        question: 'Làm thế nào để nói về "Quy mô thị trường" (Market Size)?',
        answer:
          'Hãy sử dụng mô hình TAM-SAM-SOM. TAM (Total Addressable Market) là tổng thị trường. SAM (Serviceable Available Market) là thị trường bạn có thể phục vụ. SOM (Serviceable Obtainable Market) là thị trường bạn thực tế có thể chiếm được trong vài năm tới. Điều này cho thấy bạn hiểu thị trường và có một kế hoạch thực tế.',
      },
      {
        question: 'Làm thế nào để trả lời câu hỏi "Lợi thế cạnh tranh của bạn là gì?"',
        answer:
          'Đừng chỉ nói "chúng tôi là người đầu tiên" hoặc "sản phẩm của chúng tôi tốt hơn". Hãy tập trung vào những lợi thế khó sao chép (unfair advantages), ví dụ như: hiệu ứng mạng lưới, công nghệ độc quyền, dữ liệu độc quyền, thương hiệu mạnh, hoặc một đội ngũ siêu sao. Đó là "hào sâu" bảo vệ lâu đài của bạn.',
      },
      {
        question: 'Một số lỗi phổ biến cần tránh khi pitching là gì?',
        answer:
          '1. Nói quá nhiều về tính năng, quá ít về lợi ích. 2. Đưa ra những dự báo tài chính phi thực tế. 3. Chê bai đối thủ cạnh tranh một cách thiếu chuyên nghiệp. 4. Dùng quá nhiều thuật ngữ khó hiểu. 5. Bài pitch quá dài và nhiều chữ. 6. Không lắng nghe câu hỏi của nhà đầu tư.',
      },
      {
        question: 'Pitching có phải chỉ dành cho nhà đầu tư không?',
        answer:
          'Không hề. Kỹ năng pitching là kỹ năng bán hàng, và bạn phải "bán" hàng ngày. Bạn pitch cho khách hàng để họ mua sản phẩm, pitch cho nhân tài để họ gia nhập công ty, pitch cho đối tác để họ hợp tác. Mọi nhà sáng lập đều phải là một người kể chuyện giỏi.',
      },
    ],
  },
];

import { ModuleData } from '@/types';

export const youngEntrepreneurModuleData: ModuleData = {
  id: 'young-entrepreneur',
  title: 'Khởi nghiệp cho người trẻ & Văn hóa Startup',
  subtitle: 'Biến ý tưởng thành hiện thực',
  description:
    'Học cách xây dựng startup từ ý tưởng đến MVP, gọi vốn và scale. Chương trình được thiết kế cho các bạn trẻ Việt Nam đam mê khởi nghiệp.',
  level: 'Trung cấp',
  duration: '40 giờ',
  category: 'Kinh doanh',
  heroImageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
  icon: '🚀',
  color: 'from-amber-600 to-yellow-600',
  features: [
    'Thẩm định ý tưởng & Phát triển MVP',
    'Mô hình kinh doanh Canvas',
    'Thuyết trình & Gọi vốn',
    'Tăng trưởng đột phá (Growth Hacking)',
    'Pháp lý cho Startup',
  ],
  prerequisites: ['Tư duy kinh doanh', 'Kỹ năng giải quyết vấn đề', 'Sự kiên trì và khả năng thích ứng'],
  objectives: [
    'Xây dựng một kế hoạch kinh doanh hoàn chỉnh.',
    'Phát triển một sản phẩm khả thi tối thiểu (MVP).',
    'Tạo một bài thuyết trình gọi vốn (pitch deck) thuyết phục.',
    'Hiểu các nguyên tắc cơ bản về pháp lý và tài chính cho startup tại Việt Nam.',
  ],
  careerOutcomes: [
    'Nhà sáng lập Startup',
    'Giám đốc sản phẩm',
    'Chuyên viên phát triển kinh doanh',
    'Nhà phân tích đầu tư mạo hiểm',
  ],
  industryApplications: [
    'Công nghệ (Tech)',
    'Thương mại điện tử (E-commerce)',
    'Công nghệ giáo dục (EdTech)',
    'Công nghệ tài chính (FinTech)',
  ],
  marketDemand: {
    averageSalary: 'Thỏa thuận (dựa trên vốn và vai trò)',
    jobGrowth: 'Rất cao',
    hireDemand: 'Cao (đối với nhân sự có kỹ năng)',
  },
  relatedModules: ['digital-marketing', 'financial-literacy', 'soft-skills'],
  lessons: youngEntrepreneurLessons,
};

export default youngEntrepreneurLessons;
