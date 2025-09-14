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
};
