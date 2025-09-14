import { BaseLessonData } from '@/types/lesson-base';
export interface VietnameseLangTechLesson extends BaseLessonData {
  technologies: string[];
  languageFeatures: string[];
}

export const vietnameseLangTechLessons: VietnameseLangTechLesson[] = [
  {
    id: 'vietnamese-nlp-fundamentals',
    title: 'Bài 1: Cơ bản về Vietnamese NLP và Text Processing',
    description:
      'Tìm hiểu đặc điểm của tiếng Việt trong xử lý ngôn ngữ tự nhiên. Học cách tokenization, word segmentation và các thách thức riêng của tiếng Việt.',
    videoUrl: 'https://www.youtube.com/watch?v=QkSbtl8lU_o',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    technologies: ['NLP', 'Text Processing', 'Tokenization', 'Word Segmentation'],
    languageFeatures: ['Tonal Language', 'No Word Delimiter', 'Complex Encoding'],
    objectives: [
      'Hiểu đặc điểm ngôn ngữ học của tiếng Việt trong NLP',
      'Thực hiện word segmentation và tokenization cho tiếng Việt',
      'Xử lý dấu thanh và chuẩn hóa text tiếng Việt',
      'Build basic text processing pipeline cho Vietnamese text',
    ],
    prerequisites: ['Kiến thức Python cơ bản', 'Hiểu biết về regular expressions', 'Kiến thức cơ bản về NLP'],
    exercises: [
      {
        title: 'Vietnamese Text Normalization',
        description: 'Implement text normalization cho tiếng Việt bao gồm dấu thanh và ký tự đặc biệt',
        difficulty: 'Cơ bản',
        materials: ['Python', 'PyVi library', 'Unicode handling'],
        procedure: [
          'Viết một hàm nhận đầu vào là một chuỗi văn bản tiếng Việt.',
          'Sử dụng thư viện `unicodedata` để chuẩn hóa các dấu thanh về dạng tổ hợp (NFC).',
          'Viết các biểu thức chính quy (regex) để loại bỏ các ký tự đặc biệt không cần thiết.',
          'Chuyển đổi toàn bộ văn bản về chữ thường.',
        ],
        expectedResults: 'Một hàm có khả năng chuẩn hóa văn bản tiếng Việt với độ chính xác cao.',
        solution: 'Sử dụng `unicodedata.normalize("NFC", text)` và các quy tắc regex tùy chỉnh cho tiếng Việt.',
      },
    ],
    realWorldApplications: [
      'Chatbot tiếng Việt cho dịch vụ khách hàng.',
      'Phân tích và phân loại tài liệu tiếng Việt.',
      'Theo dõi mạng xã hội và phân tích cảm xúc.',
      'Ứng dụng chuyển giọng nói thành văn bản tiếng Việt.',
    ],
    vietnamContext: {
      title: 'Xử lý Ngôn ngữ Tự nhiên cho Tiếng Việt',
      content: [
        'Tiếng Việt là một ngôn ngữ có thanh điệu và không có dấu cách giữa các từ, tạo ra những thách thức độc đáo cho Xử lý Ngôn ngữ Tự nhiên (NLP). Các bài toán như tách từ (word segmentation) và xử lý dấu thanh là cực kỳ quan trọng.',
        'Sự phát triển của các mô hình ngôn ngữ lớn (LLMs) và các thư viện mã nguồn mở dành riêng cho tiếng Việt (như VnCoreNLP, underthesea) đã thúc đẩy mạnh mẽ lĩnh vực này.',
        'Các ứng dụng NLP tiếng Việt đang bùng nổ, từ trợ lý ảo, dịch máy, đến phân tích dữ liệu kinh doanh, cho thấy tiềm năng to lớn của công nghệ ngôn ngữ tại thị trường Việt Nam.',
      ],
    },
    caseStudies: [
      {
        title: 'Zalo AI: Xây dựng Mô hình Ngôn ngữ cho Tiếng Việt',
        organization: 'Zalo AI (VNG Corporation)',
        problem:
          'Cần một mô hình NLP hiệu suất cao để phục vụ hệ sinh thái Zalo với hàng chục triệu người dùng, có khả năng hiểu sâu sắc các sắc thái của tiếng Việt, bao gồm cả tiếng lóng và ngôn ngữ tuổi teen.',
        solution:
          'Zalo AI đã xây dựng các mô hình ngôn ngữ lớn được huấn luyện trên tập dữ liệu khổng lồ bằng tiếng Việt. Họ phát triển các kỹ thuật tách từ và nhận dạng thực thể (Named Entity Recognition) tiên tiến, được tối ưu hóa riêng cho tiếng Việt.',
        impact:
          'Cải thiện 40% khả năng hiểu văn bản tiếng Việt trên toàn hệ sinh thái Zalo, từ chatbot đến tìm kiếm. Các mô hình này cũng được chia sẻ cho cộng đồng, thúc đẩy sự phát triển của NLP tại Việt Nam.',
        innovations: [
          'Tách từ theo ngữ cảnh',
          'Mô hình ngôn ngữ lớn cho tiếng Việt',
          'Xử lý tiếng lóng và ngôn ngữ mạng',
        ],
      },
      {
        title: 'FPT.AI: Nền tảng Trí tuệ Nhân tạo Toàn diện',
        organization: 'FPT.AI',
        problem:
          'Các doanh nghiệp Việt Nam cần một nền tảng AI dễ tiếp cận để xây dựng các ứng dụng thông minh (như chatbot, tổng đài tự động) mà không cần đầu tư lớn vào R&D.',
        solution:
          'FPT.AI đã phát triển một nền tảng cung cấp các API và công cụ cho NLP tiếng Việt, bao gồm nhận dạng giọng nói, tổng hợp giọng nói, và xử lý ngôn ngữ tự nhiên. Nền tảng này cho phép các nhà phát triển tích hợp AI vào sản phẩm của họ một cách dễ dàng.',
        impact:
          'Hàng ngàn doanh nghiệp đã sử dụng FPT.AI để tự động hóa dịch vụ khách hàng và tối ưu hóa hoạt động. Nền tảng này đã dân chủ hóa công nghệ AI, giúp nhiều công ty tiếp cận và ứng dụng AI hơn.',
        innovations: ['Nền tảng AI-as-a-Service', 'Nhận dạng giọng nói đa vùng miền', 'Tổng hợp giọng nói tự nhiên'],
      },
    ],
    careerConnect: {
      name: 'Tiến sĩ Vũ Duy Thức',
      title: 'Đồng sáng lập, OhmniLabs & Kambria',
      company: 'OhmniLabs',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-duy-thuc',
      quote:
        'Ngôn ngữ là cửa sổ tâm hồn của một dân tộc. Việc phát triển công nghệ xử lý ngôn ngữ tiếng Việt không chỉ là một bài toán kỹ thuật, mà còn là cách chúng ta bảo tồn và phát huy bản sắc văn hóa trong thế giới số.',
    },
    quizzes: [
      {
        question: 'Đâu là một thách thức độc đáo của tiếng Việt trong xử lý ngôn ngữ tự nhiên?',
        options: [
          'Có quá nhiều từ mượn',
          'Bảng chữ cái Latin',
          'Là ngôn ngữ có thanh điệu và không có dấu cách từ',
          'Ngữ pháp phức tạp',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đặc điểm về thanh điệu và việc các từ không được phân cách rõ ràng bằng dấu cách tạo ra các bài toán cốt lõi như xử lý dấu và tách từ, khác biệt so với nhiều ngôn ngữ khác.',
      },
      {
        question: 'FPT.AI cung cấp giải pháp gì cho các doanh nghiệp Việt Nam?',
        options: [
          'Xây dựng phần cứng máy tính',
          'Một nền tảng AI-as-a-Service với các công cụ NLP tiếng Việt',
          'Dịch vụ tư vấn pháp lý',
          'Cung cấp nhân sự AI',
        ],
        correctAnswerIndex: 1,
        explanation:
          'FPT.AI tập trung vào việc cung cấp một nền tảng (Platform as a Service) để các doanh nghiệp có thể dễ dàng tích hợp các tính năng AI, đặc biệt là NLP, vào sản phẩm của mình.',
      },
    ],
    faqs: [
      {
        question: 'Tách từ (Word Segmentation) là gì và tại sao nó khó với tiếng Việt?',
        answer:
          'Tách từ là quá trình xác định ranh giới của các từ trong một câu. Trong tiếng Anh, các từ được ngăn cách bởi dấu cách, nên việc này khá đơn giản. Nhưng trong tiếng Việt, một từ có thể bao gồm nhiều "tiếng" (âm tiết) viết liền nhau không có dấu cách rõ ràng (ví dụ: "học sinh", "xã hội chủ nghĩa"). Việc xác định đâu là một từ có ý nghĩa hoàn chỉnh là một bài toán phức tạp, đòi hỏi các mô hình phải hiểu ngữ cảnh.',
      },
      {
        question: 'Tại sao cần các mô hình ngôn ngữ riêng cho tiếng Việt thay vì dùng các mô hình tiếng Anh đã dịch?',
        answer:
          'Các mô hình được huấn luyện trực tiếp trên dữ liệu tiếng Việt (như PhoBERT của VinAI) có khả năng hiểu sâu sắc hơn về ngữ pháp, cấu trúc câu, và các sắc thái văn hóa, thành ngữ, tiếng lóng của người Việt. Các mô hình dịch máy có thể mất đi những sắc thái này và không hiệu quả bằng trong các tác vụ NLP phức tạp.',
      },
    ],
    resources: [
      {
        title: 'VnCoreNLP',
        url: 'https://github.com/vncorenlp/VnCoreNLP',
        type: 'library',
      },
      {
        title: 'underthesea',
        url: 'https://github.com/undertheseanlp/underthesea',
        type: 'library',
      },
      {
        title: 'PhoBERT',
        url: 'https://github.com/VinAIResearch/PhoBERT',
        type: 'research',
      },
    ],
  },
];

import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const vietnameseLanguageTechModuleData: ModuleData = {
  id: 'vietnamese-language-tech',
  title: 'Vietnamese Language Technology',
  subtitle: 'Công nghệ Ngôn ngữ Tiếng Việt',
  description:
    'Khóa học chuyên sâu về công nghệ xử lý ngôn ngữ tự nhiên tiếng Việt. Học phát triển chatbot AI, voice assistant và NLP applications hiểu tiếng Việt với độ chính xác cao, tối ưu cho thị trường Việt Nam.',
  level: 'Trung bình',
  duration: '15-18 giờ',
  category: 'Professional Skills',
  features: [
    'Vietnamese NLP Fundamentals và text processing chuyên sâu',
    'AI Chatbot Development với conversation management tiếng Việt',
    'Voice AI Technology cho speech recognition và synthesis',
    'Real-world Applications với Vietnamese market focus',
  ],
  icon: '🇻🇳',
  color: 'from-red-600 to-yellow-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
  objectives: [
    'Master Vietnamese NLP techniques và tokenization challenges',
    'Build intelligent chatbots hiểu context và intent tiếng Việt',
    'Develop voice AI applications với Vietnamese pronunciation accuracy',
    'Deploy production-ready Vietnamese language applications',
  ],
  prerequisites: [
    'Python programming experience và machine learning basics',
    'Familiarity với NLP concepts và deep learning',
    'Understanding of Vietnamese language characteristics',
  ],
  careerOutcomes: [
    'Vietnamese NLP Engineer và Language Technology Specialist',
    'AI Product Manager focused on Vietnamese market',
    'Conversational AI Developer và Voice Technology Engineer',
    'Vietnamese Localization Technology Lead',
  ],
  industryApplications: [
    'Vietnamese Customer Service Automation',
    'Educational Technology cho Vietnamese learners',
    'Government Digital Services và Civic Technology',
    'E-commerce và Social Media Platform Development',
  ],
  marketDemand: {
    averageSalary: '25-50 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.VietnameseBusiness, K2Module.Python],
};
