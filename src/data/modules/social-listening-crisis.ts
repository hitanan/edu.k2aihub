import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export interface SocialListeningLessonType extends BaseLessonData {
  monitoringTools?: string[];
}

export const socialListeningLessons: SocialListeningLessonType[] = [
  {
    id: 'social-listening-fundamentals',
    title: 'Nền tảng Lắng nghe Xã hội (Social Listening) & Giám sát Thương hiệu',
    description:
      'Nắm vững các nguyên tắc cơ bản của social listening để giám sát các cuộc thảo luận về thương hiệu, theo dõi cảm xúc của khách hàng và chủ động xác định các cơ hội cũng như mối đe dọa trực tuyến.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=PjOW1trH7yg',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    monitoringTools: ['Brandwatch', 'Talkwalker', 'Meltwater', 'Socialbakers', 'Younet Media'],
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của social listening.',
      'Thiết lập hệ thống giám sát thương hiệu toàn diện.',
      'Phân tích xu hướng cảm xúc và nhận thức về thương hiệu.',
      'Xác định những người có ảnh hưởng chính và người ủng hộ thương hiệu.',
      'Theo dõi hoạt động của đối thủ cạnh tranh và xu hướng ngành.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về marketing trên mạng xã hội.',
      'Kỹ năng phân tích và diễn giải dữ liệu.',
      'Hiểu biết về quản trị thương hiệu.',
    ],
    exercises: [
      {
        title: 'Thiết lập một chiến dịch Social Listening',
        description:
          'Thực hành thiết lập một hệ thống lắng nghe xã hội toàn diện cho một thương hiệu Việt Nam giả định.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các từ khóa chính liên quan đến thương hiệu (tên thương hiệu, sản phẩm, slogan, cả các biến thể sai chính tả).',
          'Sử dụng một công cụ social listening (có thể là bản miễn phí như Google Alerts, Social Mention) để thiết lập theo dõi.',
          'Cấu hình các thông số để phân tích cảm xúc (tích cực, tiêu cực, trung lập).',
          'Tạo một dashboard đơn giản để theo dõi các chỉ số chính.',
        ],
        expectedResults:
          'Một hệ thống social listening hoạt động có khả năng giám sát thời gian thực và gửi cảnh báo cơ bản.',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu thương mại điện tử theo dõi sự hài lòng của khách hàng.',
      'Các công ty du lịch quản lý danh tiếng điểm đến.',
      'Các thương hiệu công nghệ theo dõi phản hồi về sản phẩm.',
    ],
    caseStudies: [
      {
        title: 'Biti\'s Hunter và Chiến dịch "Đi để trở về"',
        organization: "Biti's",
        problem:
          "Làm thế nào để một thương hiệu lâu đời như Biti's có thể tái kết nối với giới trẻ và tạo ra một cuộc thảo luận tích cực trên mạng xã hội?",
        solution:
          'Biti\'s đã lắng nghe các cuộc trò chuyện của giới trẻ về việc đi du lịch và nỗi nhớ nhà, từ đó tạo ra chiến dịch "Đi để trở về" với thông điệp sâu sắc, kết hợp với các MV của các ca sĩ nổi tiếng.',
        impact:
          "Chiến dịch đã tạo ra một cơn sốt trên mạng xã hội, giúp Biti's Hunter trở thành một thương hiệu được giới trẻ yêu thích và thảo luận rộng rãi, tăng doanh số đột biến.",
        innovations: ['Sử dụng Music Marketing', 'Phân tích Insight giới trẻ', 'Tạo thông điệp cảm xúc'],
      },
    ],
    vietnamContext: {
      title: 'Đặc thù Social Listening tại Việt Nam',
      content: [
        'Ngôn ngữ tiếng Việt với sự đa dạng về dấu câu, từ lóng, teencode là một thách thức lớn cho các công cụ phân tích cảm xúc tự động.',
        'Người dùng Việt Nam rất tích cực trên các hội, nhóm (group) trên Facebook. Việc theo dõi các cuộc thảo luận trong các nhóm kín này là cực kỳ quan trọng.',
        'Các "drama" hoặc khủng hoảng truyền thông có thể bùng phát và lan truyền với tốc độ chóng mặt, đòi hỏi sự phản ứng nhanh nhạy.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Thị Ngọc Bích',
      title: 'Chuyên gia Phân tích Dữ liệu Mạng xã hội',
      company: 'Younet Media',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-ngoc-bich',
      quote:
        'Social listening không chỉ là nghe, mà là thấu hiểu. Dữ liệu cho chúng ta biết "cái gì" đang xảy ra, nhưng chỉ có sự thấu hiểu sâu sắc mới cho chúng ta biết "tại sao".',
    },
    quizzes: [
      {
        question:
          'Việc phân loại một bình luận trên mạng xã hội là "tích cực", "tiêu cực" hay "trung lập" được gọi là gì?',
        options: [
          'Phân tích từ khóa',
          'Phân tích nhân khẩu học',
          'Phân tích cảm xúc (Sentiment Analysis)',
          'Phân tích đối thủ',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phân tích cảm xúc là quá trình sử dụng xử lý ngôn ngữ tự nhiên (NLP) để xác định và phân loại quan điểm, cảm xúc được thể hiện trong một đoạn văn bản.',
      },
    ],
    faqs: [
      {
        question: 'Social listening là gì?',
        answer:
          'Social listening là quá trình theo dõi các kênh truyền thông xã hội để phát hiện các cuộc trò chuyện và đề cập liên quan đến thương hiệu của bạn, sau đó phân tích chúng để có được những hiểu biết sâu sắc nhằm khám phá cơ hội hành động.',
      },
      {
        question: 'Sự khác biệt giữa social listening và social monitoring là gì?',
        answer:
          'Social monitoring (giám sát xã hội) là việc thu thập các đề cập và cuộc trò chuyện. Social listening (lắng nghe xã hội) tiến một bước xa hơn bằng cách phân tích dữ liệu đó để hiểu tâm trạng đằng sau các cuộc trò chuyện và tìm ra nguyên nhân gốc rễ.',
      },
      {
        question: 'Tại sao social listening lại quan trọng đối với một thương hiệu?',
        answer:
          'Nó giúp thương hiệu hiểu được nhận thức của công chúng, xác định các điểm yếu của sản phẩm/dịch vụ, theo dõi đối thủ cạnh tranh, phát hiện các xu hướng mới, và quan trọng nhất là ngăn chặn các cuộc khủng hoảng truyền thông trước khi chúng bùng phát.',
      },
      {
        question: 'Làm thế nào để bắt đầu với social listening mà không cần công cụ đắt tiền?',
        answer:
          'Bạn có thể bắt đầu bằng các công cụ miễn phí như Google Alerts, TweetDeck, hoặc chức năng tìm kiếm nâng cao trên Facebook và Twitter. Mặc dù không mạnh mẽ bằng các công cụ trả phí, chúng vẫn cung cấp một cái nhìn tổng quan ban đầu.',
      },
      {
        question: 'Sentiment analysis (phân tích cảm xúc) hoạt động như thế nào?',
        answer:
          'Nó sử dụng xử lý ngôn ngữ tự nhiên (NLP) và máy học để tự động phân loại các đề cập là tích cực, tiêu cực hay trung lập. Tuy nhiên, nó có thể gặp khó khăn với các sắc thái, từ lóng, hoặc mỉa mai trong ngôn ngữ Việt Nam.',
      },
      {
        question: 'Những chỉ số nào cần theo dõi trong social listening?',
        answer:
          'Các chỉ số quan trọng bao gồm: tổng số lượt đề cập (volume of mentions), thị phần thảo luận (share of voice), phân tích cảm xúc (sentiment analysis), các chủ đề thảo luận chính, và những người có ảnh hưởng (influencers) hàng đầu.',
      },
      {
        question: 'Share of Voice (SOV) là gì?',
        answer:
          'Là một chỉ số đo lường mức độ thảo luận về thương hiệu của bạn so với các đối thủ cạnh tranh. Nó cho biết thương hiệu của bạn chiếm bao nhiêu phần trăm trong tổng số các cuộc trò chuyện trong ngành.',
      },
      {
        question: 'Làm thế nào để xử lý các bình luận tiêu cực được phát hiện qua social listening?',
        answer:
          'Đừng xóa chúng (trừ khi chúng vi phạm chính sách). Hãy phản hồi một cách nhanh chóng, đồng cảm và chuyên nghiệp. Cố gắng chuyển cuộc trò chuyện sang một kênh riêng tư (tin nhắn, email) để giải quyết vấn đề cụ thể.',
      },
      {
        question: 'Social listening có thể giúp ích cho việc phát triển sản phẩm không?',
        answer:
          'Chắc chắn có. Bằng cách lắng nghe những gì khách hàng thích, không thích, và mong muốn, các thương hiệu có thể thu thập được những ý tưởng quý giá để cải tiến sản phẩm hiện tại hoặc phát triển các sản phẩm mới đáp ứng đúng nhu cầu thị trường.',
      },
      {
        question: 'Teencode và từ lóng ảnh hưởng đến social listening ở Việt Nam như thế nào?',
        answer:
          'Đây là một thách thức lớn. Các công cụ social listening cần được "huấn luyện" đặc biệt cho thị trường Việt Nam để có thể hiểu và phân tích chính xác các biến thể ngôn ngữ này. Các nhà phân tích cũng cần có sự am hiểu văn hóa bản địa để diễn giải dữ liệu một cách chính xác.',
      },
    ],
  },
  {
    id: 'crisis-detection-early-warning',
    title: 'Phát hiện Khủng hoảng & Hệ thống Cảnh báo sớm',
    description:
      'Phát triển khả năng phát hiện khủng hoảng nâng cao để xác định các vấn đề tiềm ẩn trước khi chúng leo thang và triển khai các hệ thống cảnh báo sớm hiệu quả.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=pYnEgD1r4EM',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    monitoringTools: ['Reputation.com', 'Mention', 'Hootsuite Insights', 'Sprinklr'],
    objectives: [
      'Xác định các tín hiệu cảnh báo sớm của các cuộc khủng hoảng tiềm tàng.',
      'Thiết lập hệ thống cảnh báo tự động.',
      'Phân tích các mẫu hội thoại và sự bất thường.',
      'Thực hiện các quy trình leo thang xử lý khủng hoảng.',
      'Xây dựng khung đánh giá mức độ nghiêm trọng của khủng hoảng.',
    ],
    prerequisites: ["Hoàn thành bài 'Nền tảng Social Listening'"],
    exercises: [
      {
        title: 'Mô phỏng Tình huống Khủng hoảng',
        description:
          'Phân tích một tình huống khủng hoảng giả định và xây dựng một kế hoạch phản ứng dựa trên các tín hiệu cảnh báo sớm.',
        difficulty: 'Nâng cao',
        procedure: [
          'Đọc kịch bản về một khủng hoảng tiềm tàng (ví dụ: tin đồn sản phẩm có lỗi).',
          'Xác định các chỉ số bất thường cần theo dõi (ví dụ: số lượng bình luận tiêu cực tăng đột biến, các influencer bắt đầu lên tiếng).',
          'Xây dựng một quy trình leo thang: ai cần được thông báo, khi nào, và thông điệp ban đầu là gì.',
        ],
        expectedResults: 'Một kế hoạch phản ứng khủng hoảng sơ bộ với các bước hành động rõ ràng.',
      },
    ],
    realWorldApplications: [
      'Phát hiện tin đồn thất thiệt về thương hiệu.',
      'Theo dõi các vấn đề về an toàn sản phẩm.',
      'Quản lý các cuộc tẩy chay trên mạng xã hội.',
      'Phản ứng với các sự cố dịch vụ khách hàng lan truyền rộng rãi.',
    ],
    caseStudies: [
      {
        title: 'Khủng hoảng "Con ruồi trong chai nước" của Tân Hiệp Phát',
        organization: 'Tân Hiệp Phát',
        problem:
          'Một khách hàng phát hiện có dị vật trong sản phẩm và lan truyền thông tin trên mạng, nhưng cách xử lý ban đầu của công ty đã khiến khủng hoảng leo thang.',
        solution:
          '(Bài học rút ra) Cần có một quy trình xử lý khiếu nại của khách hàng một cách minh bạch, đồng cảm và nhanh chóng. Lắng nghe và đối thoại thay vì đối đầu.',
        impact:
          'Vụ việc đã gây tổn hại nghiêm trọng đến danh tiếng và doanh thu của Tân Hiệp Phát trong một thời gian dài, trở thành một bài học kinh điển về xử lý khủng hoảng truyền thông tại Việt Nam.',
        innovations: ['Quản lý khủng hoảng', 'Quan hệ công chúng', 'Đối thoại với người tiêu dùng'],
      },
    ],
    vietnamContext: {
      title: 'Văn hóa "Hóng" và Tốc độ lan truyền Khủng hoảng',
      content: [
        'Văn hóa "hóng drama" trên mạng xã hội Việt Nam khiến các khủng hoảng có thể lan truyền với tốc độ cực nhanh, đôi khi dựa trên những thông tin chưa được kiểm chứng.',
        'Việc sử dụng nhiều tài khoản ẩn danh, seeding có thể tạo ra các cuộc khủng hoảng giả mạo hoặc làm trầm trọng hóa vấn đề.',
        'Sự tham gia của các "KOLs" (Key Opinion Leaders) có thể đẩy một sự việc nhỏ thành một cuộc khủng hoảng truyền thông quy mô lớn.',
      ],
    },
    careerConnect: {
      name: 'Lê Quốc Vinh',
      title: 'Chuyên gia Xử lý Khủng hoảng Truyền thông',
      company: 'Le Bros',
      imageUrl: 'https://i.pravatar.cc/150?u=le-quoc-vinh',
      quote:
        'Trong khủng hoảng, im lặng không phải là vàng. Sự im lặng của bạn sẽ được lấp đầy bởi tin đồn, sự sợ hãi và thông tin sai lệch. Hãy lên tiếng nhanh, minh bạch và có trách nhiệm.',
    },
    quizzes: [
      {
        question:
          'Khi một vấn đề tiêu cực bắt đầu có dấu hiệu lan truyền nhanh chóng, bước đầu tiên quan trọng nhất là gì?',
        options: [
          'Xóa các bình luận tiêu cực',
          'Đánh giá mức độ nghiêm trọng và xác thực thông tin',
          'Đổ lỗi cho đối thủ cạnh tranh',
          'Im lặng và chờ cho sự việc lắng xuống',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trước khi có bất kỳ hành động nào, việc cần làm là nhanh chóng tập hợp thông tin, xác thực tính chính xác của vấn đề và đánh giá mức độ ảnh hưởng tiềm tàng để có phương án phản ứng phù hợp.',
      },
    ],
    faqs: [
      {
        question: 'Khủng hoảng truyền thông là gì?',
        answer:
          'Là một sự kiện hoặc một loạt sự kiện gây ảnh hưởng tiêu cực đáng kể đến danh tiếng và hoạt động kinh doanh của một tổ chức. Trên mạng xã hội, khủng hoảng có thể lan truyền với tốc độ chóng mặt.',
      },
      {
        question: 'Dấu hiệu sớm của một cuộc khủng hoảng tiềm tàng là gì?',
        answer:
          'Các dấu hiệu bao gồm: sự gia tăng đột biến về số lượng bình luận tiêu cực, một bài đăng tiêu cực bắt đầu nhận được nhiều lượt chia sẻ và tương tác bất thường, hoặc khi các tài khoản có ảnh hưởng bắt đầu đề cập đến vấn đề.',
      },
      {
        question: 'Phòng "war room" trong xử lý khủng hoảng là gì?',
        answer:
          'Là một nhóm nòng cốt bao gồm đại diện từ các bộ phận quan trọng (lãnh đạo, pháp lý, truyền thông, chăm sóc khách hàng) được tập hợp lại để đưa ra quyết định và phối hợp hành động một cách nhanh chóng trong suốt cuộc khủng hoảng.',
      },
      {
        question: 'Tại sao việc có một phát ngôn viên duy nhất lại quan trọng trong khủng hoảng?',
        answer:
          'Điều này đảm bảo thông điệp của công ty là nhất quán, chính xác và được kiểm soát. Việc có nhiều người phát ngôn không được ủy quyền có thể dẫn đến thông tin trái chiều và làm tình hình trở nên tồi tệ hơn.',
      },
      {
        question: 'Nguyên tắc "Golden Hour" trong xử lý khủng hoảng là gì?',
        answer:
          'Là khoảng thời gian đầu tiên (thường là 60 phút) kể từ khi khủng hoảng nổ ra. Việc đưa ra một phản hồi ban đầu (thậm chí chỉ là một thông báo thừa nhận vấn đề và cho biết đang điều tra) trong khoảng thời gian này là cực kỳ quan trọng để kiểm soát câu chuyện.',
      },
      {
        question: 'Làm thế nào để xây dựng một kế hoạch xử lý khủng hoảng?',
        answer:
          'Một kế hoạch tốt bao gồm: xác định các kịch bản khủng hoảng có thể xảy ra, thành lập đội phản ứng (war room), soạn thảo các thông điệp mẫu, xác định các kênh liên lạc, và thiết lập quy trình leo thang và phê duyệt.',
      },
      {
        question: 'Sự khác biệt giữa "xin lỗi" và "lấy làm tiếc" là gì?',
        answer:
          'Xin lỗi ("Chúng tôi xin lỗi") là một sự thừa nhận trách nhiệm. "Chúng tôi lấy làm tiếc về sự bất tiện này" thể hiện sự đồng cảm nhưng không nhất thiết thừa nhận lỗi. Việc lựa chọn từ ngữ phụ thuộc vào bản chất của khủng hoảng và tư vấn pháp lý.',
      },
      {
        question: 'Làm thế nào để theo dõi hiệu quả của việc xử lý khủng hoảng?',
        answer:
          'Tiếp tục sử dụng các công cụ social listening để theo dõi sự thay đổi trong sentiment (cảm xúc), số lượng đề cập tiêu cực, và các chủ đề thảo luận chính. Mục tiêu là thấy sentiment dần trở nên trung lập hoặc tích cực hơn và số lượng đề cập tiêu cực giảm xuống.',
      },
      {
        question: 'Có nên sử dụng seeding (gieo mầm nội dung) để dập tắt khủng hoảng không?',
        answer:
          'Đây là một chiến thuật rủi ro. Nếu bị phát hiện, việc seeding các bình luận tích cực giả mạo có thể làm mất hoàn toàn niềm tin của công chúng và khiến khủng hoảng trở nên tồi tệ hơn. Sự minh bạch và trung thực thường là cách tiếp cận tốt nhất.',
      },
      {
        question: 'Sau khi khủng hoảng kết thúc, cần làm gì tiếp theo?',
        answer:
          'Cần tiến hành một cuộc họp "rút kinh nghiệm" để phân tích những gì đã làm tốt và những gì có thể cải thiện. Cập nhật lại kế hoạch xử lý khủng hoảng dựa trên những bài học đã học được và tiếp tục theo dõi danh tiếng thương hiệu.',
      },
    ],
  },
];

export const socialListeningCrisisModuleData: ModuleData = {
  id: 'social-listening-crisis',
  title: 'Social Listening & Crisis Management',
  subtitle: 'Quản lý thương hiệu & khủng hoảng truyền thông',
  description:
    'Khám phá các strategies để monitor brand reputation, detect potential crises early, và respond effectively để protect và rebuild trust trong digital landscape.',
  level: 'Nâng cao',
  duration: '16-22 giờ',
  category: 'Digital Marketing & Communication',
  heroImageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
  features: [
    'Social Media Monitoring & Analytics',
    'Crisis Detection & Early Warning Systems',
    'Reputation Management Strategies',
    'Crisis Communication Planning',
    'Damage Control & Recovery Tactics',
    'Vietnamese Market Crisis Patterns',
    'Cross-Platform Response Coordination',
    'Stakeholder Communication Management',
  ],
  icon: '🚨',
  color: 'from-red-600 to-rose-600',
  objectives: [
    'Master social listening tools và monitoring strategies',
    'Develop early crisis detection systems',
    'Create comprehensive crisis communication plans',
    'Execute effective damage control campaigns',
    'Build reputation recovery và management processes',
    'Understand Vietnamese social media crisis patterns',
  ],
  prerequisites: [
    'Experience với social media management',
    'Understanding của brand communication',
    'Basic knowledge của public relations',
    'Familiarity với analytics và monitoring tools',
  ],
  careerOutcomes: [
    'Crisis Communication Manager (35-60 triệu VNĐ)',
    'Social Media Reputation Specialist (28-50 triệu VNĐ)',
    'Digital PR Manager (40-70 triệu VNĐ)',
    'Brand Protection Analyst (30-55 triệu VNĐ)',
    'Community Management Lead (25-45 triệu VNĐ)',
    'Corporate Communications Director (50-90 triệu VNĐ)',
    'Social Listening Consultant (35-75 triệu VNĐ)',
    'Reputation Management Advisor (40-80 triệu VNĐ)',
  ],
  industryApplications: [
    'Corporate crisis management và PR',
    'E-commerce reputation protection',
    'Political campaign management',
    'Healthcare organization communication',
    'Financial services compliance',
    'Entertainment industry PR',
    'Tourism và hospitality reputation',
    'Food và beverage brand safety',
    'Technology company communications',
    'NGO và non-profit messaging',
  ],
  marketDemand: {
    averageSalary: '35-70 triệu VNĐ/tháng',
    jobGrowth: '18% (2023-2028)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.ContentCreator, K2Module.EthicalMarketingPurpose],
  lessons: socialListeningLessons,
};
