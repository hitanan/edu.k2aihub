import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export const semiconductorLessons: BaseLessonData[] = [
  {
    id: 'semiconductor-fundamentals',
    title: 'Cơ bản về Bán dẫn & Cấu trúc Chip',
    description:
      'Khám phá thế giới vi mô của bán dẫn - từ tinh thể silicon đến transistor. Hiểu cách electron di chuyển và tạo nên các con chip hiện đại.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=gUn--p0d264',
    imageUrl: 'https://i.ytimg.com/vi/gUn--p0d264/hqdefault.jpg',
    objectives: [
      'Hiểu cấu trúc nguyên tử của silicon và các vật liệu bán dẫn.',
      'Nắm vững nguyên lý hoạt động của lớp tiếp giáp P-N.',
      'Phân biệt các loại pha tạp (doping): loại N và loại P.',
      'Hiểu cách một transistor được hình thành từ vật liệu bán dẫn.',
    ],
    prerequisites: ['Kiến thức vật lý cơ bản về nguyên tử và electron.', 'Tư duy logic.'],
    exercises: [
      {
        title: 'Mô phỏng quá trình Doping',
        description:
          'Sử dụng mô phỏng trực tuyến để thực hiện quá trình pha tạp cho silicon với phốt pho (tạo bán dẫn loại N) và bo (tạo bán dẫn loại P).',
        difficulty: 'Cơ bản',
        procedure: [
          'Truy cập công cụ mô phỏng bán dẫn.',
          'Chọn một tấm silicon tinh khiết.',
          'Thêm một lượng nhỏ nguyên tử phốt pho và quan sát sự xuất hiện của các electron tự do.',
          'Thực hiện tương tự với nguyên tử bo và quan sát sự hình thành của các lỗ trống.',
        ],
        expectedResults: 'Hiểu rõ sự khác biệt về cơ chế dẫn điện giữa bán dẫn loại N và loại P.',
      },
    ],
    realWorldApplications: [
      'CPU của Intel, AMD chứa hàng tỷ transistor.',
      'Chip nhớ (RAM, SSD) lưu trữ dữ liệu số.',
      'Tấm pin mặt trời chuyển đổi ánh sáng thành điện năng.',
      'Đèn LED trong màn hình smartphone, TV.',
    ],
    caseStudies: [
      {
        title: 'Định luật Moore và sự phát triển của Intel',
        organization: 'Intel Corporation',
        problem: 'Làm thế nào để tăng sức mạnh xử lý của máy tính một cách liên tục và có thể dự đoán được?',
        solution:
          'Gordon Moore, đồng sáng lập Intel, đã quan sát rằng số lượng transistor trên một vi mạch sẽ tăng gấp đôi sau mỗi hai năm. Intel đã biến quan sát này thành một lộ trình phát triển, không ngừng thu nhỏ kích thước transistor.',
        impact:
          'Định luật Moore đã trở thành động lực chính cho cuộc cách mạng công nghệ số trong hơn 50 năm, giúp máy tính ngày càng mạnh hơn, nhỏ hơn và rẻ hơn.',
        innovations: [],
      },
    ],
    vietnamContext: {
      title: 'Việt Nam và Chuỗi cung ứng Bán dẫn Toàn cầu',
      content: [
        'Việt Nam đang nổi lên như một trung tâm quan trọng trong khâu lắp ráp, kiểm thử và đóng gói (ATP) chip bán dẫn.',
        'Các tập đoàn lớn như Intel, Samsung, Amkor đã đầu tư hàng tỷ USD vào các nhà máy tại Khu công nghệ cao TP.HCM, Bắc Ninh, và Thái Nguyên.',
        'Chính phủ Việt Nam đang đẩy mạnh đào tạo nguồn nhân lực chất lượng cao cho ngành công nghiệp bán dẫn, hợp tác với các trường đại học và các công ty như Synopsys, Cadence.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Thị Thanh Mai',
      title: 'Kỹ sư Kiểm thử Chip',
      company: 'Intel Products Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-mai-intel',
      quote:
        'Công việc của chúng tôi là đảm bảo mỗi con chip xuất xưởng đều hoàn hảo. Đó là một công việc đòi hỏi sự tỉ mỉ và chính xác tuyệt đối, góp phần tạo ra những sản phẩm công nghệ mà cả thế giới tin dùng.',
    },
    quizzes: [
      {
        question: 'Vật liệu nào là nền tảng phổ biến nhất cho ngành công nghiệp bán dẫn?',
        options: ['Đồng', 'Vàng', 'Silicon', 'Nhôm'],
        correctAnswerIndex: 2,
        explanation:
          'Silicon (Si) là nguyên tố phổ biến thứ hai trong vỏ Trái Đất, có các tính chất bán dẫn lý tưởng và công nghệ xử lý đã rất phát triển, khiến nó trở thành vật liệu nền tảng.',
      },
    ],
  },
  {
    id: 'chip-design-fabrication',
    title: 'Quy trình Thiết kế & Chế tạo Chip (Fabrication)',
    description:
      'Hành trình từ ý tưởng đến con chip vật lý. Tìm hiểu các bước phức tạp trong thiết kế (RTL, layout) và chế tạo (photolithography, etching) vi mạch.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=d9_HWhHqQq4',
    imageUrl: 'https://i.ytimg.com/vi/d9_HWhHqQq4/hqdefault.jpg',
    objectives: [
      'Hiểu các giai đoạn chính trong quy trình thiết kế chip: từ kiến trúc, logic (RTL) đến vật lý (layout).',
      'Nắm được các bước cơ bản trong quy trình chế tạo tại nhà máy (fab): quang khắc (photolithography), ăn mòn (etching), lắng đọng (deposition).',
      'Phân biệt vai trò của các công ty thiết kế (fabless) và công ty chế tạo (foundry).',
      'Hiểu tầm quan trọng của "tiến trình công nghệ" (ví dụ: 7nm, 5nm, 3nm).',
    ],
    prerequisites: ["Hoàn thành bài 'Cơ bản về Bán dẫn'"],
    exercises: [
      {
        title: 'Sắp xếp quy trình chế tạo',
        description: 'Sắp xếp các bước sau theo đúng thứ tự trong một chu trình quang khắc cơ bản.',
        difficulty: 'Trung bình',
        procedure: [
          'A. Chiếu tia UV qua mặt nạ (Mask)',
          'B. Phủ lớp cản quang (Photoresist)',
          'C. Ăn mòn (Etching) lớp vật liệu không được bảo vệ',
          'D. Rửa sạch lớp cản quang còn lại',
        ],
        expectedResults: 'Thứ tự đúng là B -> A -> C -> D.',
      },
    ],
    realWorldApplications: [
      'Thiết kế chip Apple A-series bởi Apple (fabless).',
      'Chế tạo chip cho Apple, Nvidia, AMD bởi TSMC (foundry).',
      'Intel hoạt động như một IDM (Integrated Device Manufacturer) - tự thiết kế và tự chế tạo.',
    ],
    caseStudies: [
      {
        title: 'Mô hình Fabless-Foundry: Nvidia và TSMC',
        organization: 'Nvidia & TSMC',
        problem:
          'Nvidia là chuyên gia thiết kế GPU nhưng không sở hữu nhà máy chế tạo (fab) vốn cực kỳ đắt đỏ. Làm thế nào để sản xuất hàng loạt những con chip tối tân nhất?',
        solution:
          'Nvidia tập trung vào thế mạnh của mình là thiết kế kiến trúc GPU. Việc sản xuất được họ thuê ngoài cho TSMC (Đài Loan), công ty sở hữu những nhà máy bán dẫn tiên tiến nhất thế giới.',
        impact:
          'Mô hình này cho phép Nvidia tập trung nguồn lực vào R&D, trong khi TSMC đạt được hiệu quả kinh tế nhờ quy mô khi sản xuất cho nhiều khách hàng. Đây là mô hình hợp tác thành công nhất trong ngành.',
        innovations: [],
      },
    ],
    vietnamContext: {
      title: 'Cơ hội cho Việt Nam trong lĩnh vực Thiết kế Vi mạch',
      content: [
        'Việt Nam có tiềm năng lớn trong lĩnh vực thiết kế vi mạch (IC Design) vì không đòi hỏi vốn đầu tư khổng lồ như xây dựng nhà máy fab.',
        'Nhiều công ty thiết kế chip lớn của Mỹ và thế giới như Synopsys, Cadence, Marvell, Qorvo đã có trung tâm R&D và thiết kế tại Việt Nam.',
        'Các trường đại học như ĐH Bách Khoa Hà Nội, ĐH Bách Khoa TP.HCM đang mở các chuyên ngành đào tạo chuyên sâu về thiết kế vi mạch để đón đầu làn sóng.',
      ],
    },
    careerConnect: {
      name: 'Lê Quang Trung',
      title: 'Kỹ sư Thiết kế Vi mạch Vật lý (Physical Design Engineer)',
      company: 'Synopsys Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-quang-trung-synopsys',
      quote:
        'Công việc của chúng tôi là sắp xếp hàng triệu, thậm chí hàng tỷ transistor vào một không gian siêu nhỏ, giống như quy hoạch một thành phố phức tạp. Đó là một bài toán tối ưu đầy thách thức và nghệ thuật.',
    },
    quizzes: [
      {
        question: 'Một công ty chuyên thiết kế chip nhưng không sở hữu nhà máy sản xuất được gọi là gì?',
        options: [
          'Foundry',
          'IDM (Integrated Device Manufacturer)',
          'Fabless',
          'OSAT (Outsourced Semiconductor Assembly and Test)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Fabless (viết tắt của fabrication-less) là thuật ngữ chỉ các công ty tập trung vào thiết kế và bán sản phẩm bán dẫn, trong khi việc chế tạo được thuê ngoài cho các công ty khác (foundry).',
      },
    ],
  },
];

export const semiconductorTechnologyModuleData: ModuleData = {
  id: 'semiconductor-technology',
  title: 'Công nghệ Bán dẫn & Thiết kế Vi mạch',
  subtitle: 'Khám phá thế giới vi mô định hình tương lai công nghệ.',
  description:
    'Khóa học này cung cấp kiến thức toàn diện về ngành công nghiệp bán dẫn, từ những nguyên lý vật lý cơ bản, quy trình thiết kế và chế tạo vi mạch phức tạp, đến các ứng dụng trong AI và điện toán hiệu năng cao. Đây là bước đệm vững chắc cho sự nghiệp trong ngành công nghệ cao đang bùng nổ tại Việt Nam.',
  level: 'Cơ bản - Nâng cao',
  duration: '25-30 giờ',
  category: 'Science & Research',
  features: [
    'Kiến thức từ cơ bản đến chuyên sâu về vật lý bán dẫn.',
    'Tìm hiểu quy trình thiết kế và chế tạo chip thực tế.',
    'Cập nhật các công nghệ tiên tiến như FinFET, EUV và chip AI.',
    'Kết nối với bối cảnh và cơ hội việc làm tại Việt Nam.',
  ],
  icon: '🔬',
  color: 'from-blue-500 to-purple-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2e79?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu nguyên lý hoạt động của transistor và các linh kiện bán dẫn.',
    'Nắm vững các bước trong quy trình thiết kế vi mạch (IC Design).',
    'Phân biệt được các công nghệ chế tạo (fabrication) khác nhau.',
    'Phân tích được kiến trúc của các loại chip chuyên dụng (CPU, GPU, AI Chip).',
  ],
  prerequisites: ['Kiến thức cơ bản về Vật lý và Hóa học.', 'Tư duy logic và khả năng phân tích hệ thống.'],
  careerOutcomes: [
    'Kỹ sư Thiết kế Vi mạch (IC Design Engineer)',
    'Kỹ sư Quy trình (Process Engineer)',
    'Kỹ sư Kiểm thử (Test Engineer)',
    'Kỹ sư Ứng dụng (Application Engineer)',
  ],
  industryApplications: [
    'Điện tử tiêu dùng (smartphone, laptop)',
    'Trung tâm dữ liệu và điện toán đám mây',
    'Công nghiệp ô tô (xe tự lái)',
    'Trí tuệ nhân tạo và Học máy',
  ],
  marketDemand: {
    averageSalary: '25-60 triệu VNĐ',
    jobGrowth: '+85%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['robotics', 'advanced-ai', 'quantum-computing-education'],
};
