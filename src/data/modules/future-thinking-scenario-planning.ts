import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '../educationalGames';
import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export interface FutureThinkingLessonType extends BaseLessonData {
  scenarioMethods?: string[];
  trendAnalysisFrameworks?: string[];
  uncertaintyFactors?: string[];
  futuringTechniques?: {
    name: string;
    description: string;
    timeHorizon: string;
    bestUseCases: string[];
    steps: string[];
  }[];
  relatedGames?: {
    id: string;
    name: string;
    description: string;
  }[];
}

export const futureThinkingLessons: FutureThinkingLessonType[] = [
  {
    id: 'futures-thinking-fundamentals',
    title: 'Bài 1: Cơ Bản về Tư Duy Tương Lai',
    description:
      'Học cách tư duy về tương lai một cách có hệ thống, từ phân tích xu hướng đến lập kế hoạch kịch bản để ra quyết định tốt hơn.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Futures Thinking and Strategic Planning
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về tư duy tương lai và tầm nhìn chiến lược',
      'Nắm vững các phương pháp phân tích xu hướng',
      'Phát triển kỹ năng tư duy về nhiều tương lai khả dĩ',
      'Áp dụng tầm nhìn xa vào kế hoạch cá nhân và nghề nghiệp',
    ],
    prerequisites: ['Có khả năng tư duy phản biện cơ bản', 'Quan tâm đến các xu hướng và thay đổi trong xã hội'],
    scenarioMethods: [
      'Phân tích tác động chéo (Cross-Impact Analysis)',
      'Phân tích hình thái (Morphological Analysis)',
      'Phân tích tác động xu hướng (Trend Impact Analysis)',
      'Các yếu tố bất ngờ và Tín hiệu yếu (Wild Cards and Weak Signals)',
    ],
    trendAnalysisFrameworks: [
      'Phân tích STEEP (Xã hội, Công nghệ, Kinh tế, Môi trường, Chính trị)',
      'Khung Ba Chân trời (Three Horizons Framework)',
      'Phân tích Chu kỳ Hype (Hype Cycle Analysis)',
      'Đường cong S tiếp nhận công nghệ (S-Curve Technology Adoption)',
    ],
    uncertaintyFactors: [
      'Sự đột phá công nghệ',
      'Sự thay đổi xã hội và văn hóa',
      'Chu kỳ và khủng hoảng kinh tế',
      'Thay đổi môi trường',
      'Bất ổn chính trị',
      'Chuyển đổi nhân khẩu học',
    ],
    futuringTechniques: [
      {
        name: 'Lập kế hoạch Kịch bản (Scenario Planning)',
        description: 'Tạo ra nhiều tương lai hợp lý để kiểm tra các chiến lược',
        timeHorizon: '5-20 năm',
        bestUseCases: ['Lập kế hoạch chiến lược', 'Đánh giá rủi ro', 'Lập kế hoạch đổi mới'],
        steps: [
          'Xác định câu hỏi trọng tâm',
          'Xác định các động lực chính',
          'Phát triển khung kịch bản',
          'Xây dựng kịch bản chi tiết',
          'Kiểm tra các hàm ý',
          'Theo dõi các chỉ số',
        ],
      },
      {
        name: 'Hoạch định ngược (Backcasting)',
        description: 'Bắt đầu từ một tương lai mong muốn và làm việc ngược lại',
        timeHorizon: '10-50 năm',
        bestUseCases: ['Lập kế hoạch bền vững', 'Đạt được tầm nhìn', 'Chuyển đổi hệ thống'],
        steps: [
          'Xác định trạng thái tương lai mong muốn',
          'Xác định các cột mốc quan trọng',
          'Vạch ra những thay đổi cần thiết',
          'Phân tích các rào cản',
          'Phát triển các lộ trình hành động',
          'Tạo dòng thời gian thực hiện',
        ],
      },
      {
        name: 'Ngoại suy Xu hướng (Trend Extrapolation)',
        description: 'Phóng chiếu các xu hướng hiện tại vào tương lai với các sửa đổi',
        timeHorizon: '1-10 năm',
        bestUseCases: ['Dự báo thị trường', 'Lộ trình công nghệ', 'Kế hoạch nhân khẩu học'],
        steps: [
          'Thu thập dữ liệu lịch sử',
          'Xác định các mẫu xu hướng',
          'Phân tích các yếu tố thúc đẩy',
          'Phóng chiếu quỹ đạo',
          'Tính đến các điểm uốn',
          'Xác thực các giả định',
        ],
      },
    ],
    exercises: [
      {
        title: 'Lập Kế hoạch Kịch bản Tương lai Cá nhân',
        description: 'Tạo các kịch bản cho con đường sự nghiệp của bạn trong 5-10 năm tới',
        difficulty: 'Trung bình',
        materials: ['Công cụ nghiên cứu xu hướng', 'Mẫu kịch bản', 'Đánh giá nghề nghiệp'],
        procedure: [
          'Phân tích các xu hướng hiện tại ảnh hưởng đến ngành của bạn',
          'Xác định 2 yếu tố không chắc chắn chính (ví dụ: tác động của AI, làm việc từ xa)',
          'Tạo 4 kịch bản bằng ma trận 2x2',
          'Phát triển các câu chuyện chi tiết cho mỗi kịch bản',
          'Xác định các kỹ năng cần thiết trong mỗi kịch bản',
          'Tạo chiến lược thích ứng trên các kịch bản',
        ],
        expectedResults: 'Chiến lược nghề nghiệp vững chắc được chuẩn bị cho nhiều tương lai',
        solution:
          'Tập trung vào các kỹ năng có thể chuyển đổi và khả năng thích ứng, duy trì cách tiếp cận danh mục đầu tư cho phát triển sự nghiệp.',
      },
      {
        title: 'Hội thảo Kịch bản Việt Nam 2040',
        description: 'Xây dựng kịch bản hợp tác cho tương lai của Việt Nam',
        difficulty: 'Nâng cao',
        materials: ['Nghiên cứu về các xu hướng của Việt Nam', 'Công cụ cộng tác nhóm'],
        procedure: [
          'Nghiên cứu các xu hướng lớn hiện tại của Việt Nam (kinh tế, nhân khẩu học, công nghệ)',
          'Xác định 3 yếu tố không chắc chắn hàng đầu mà Việt Nam phải đối mặt',
          'Thành lập các nhóm để phát triển các kịch bản khác nhau',
          'Xây dựng các kịch bản chi tiết cho năm 2040',
          'Trình bày các kịch bản với các hàm ý',
          'Xác định các chỉ số cảnh báo sớm',
        ],
        expectedResults: 'Hiểu biết toàn diện về các tương lai có thể có của Việt Nam',
        solution:
          'Xem xét sự tương tác giữa các xu hướng, tính đến các ảnh hưởng toàn cầu, tập trung vào các hiểu biết có thể hành động.',
      },
      {
        title: 'Đánh giá Tác động Công nghệ',
        description: 'Đánh giá tác động tiềm tàng của công nghệ mới nổi',
        difficulty: 'Nâng cao',
        materials: ['Nghiên cứu công nghệ', 'Khung đánh giá tác động'],
        procedure: [
          'Chọn một công nghệ mới nổi (điện toán lượng tử, sinh học tổng hợp, v.v.)',
          'Vạch ra trạng thái hiện tại và quỹ đạo phát triển',
          'Xác định các ứng dụng và trường hợp sử dụng tiềm năng',
          'Phân tích các tác động xã hội (tích cực và tiêu cực)',
          'Phát triển các kịch bản áp dụng',
          'Đề xuất các chiến lược chuẩn bị',
        ],
        expectedResults: 'Phân tích tầm nhìn xa công nghệ toàn diện',
        solution: 'Xem xét các mô hình áp dụng phi tuyến tính, các hiệu ứng bậc hai và các hàm ý đạo đức.',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch chiến lược trong kinh doanh',
      'Phát triển sự nghiệp và lập kế hoạch kỹ năng',
      'Quyết định đầu tư với góc nhìn dài hạn',
      'Hoạch định chính sách và quản trị',
      'Quản lý đổi mới và ưu tiên R&D',
    ],
    caseStudies: [
      {
        title: 'Các Kịch bản Năng lượng của Shell',
        organization: 'Royal Dutch Shell',
        problem: 'Cần định hướng chiến lược trong thị trường năng lượng biến động',
        solution: 'Hơn 50 năm lập kế hoạch kịch bản cho tương lai năng lượng',
        impact: 'Chuẩn bị tốt hơn cho các cuộc khủng hoảng dầu mỏ, chuyển đổi sang năng lượng tái tạo',
        innovations: [
          'Lập kế hoạch kịch bản nhiều thập kỷ',
          'Mô hình hóa năng lượng toàn cầu',
          'Tương tác với các bên liên quan',
          'Phát triển chiến lược thích ứng',
        ],
      },
      {
        title: 'Tầm nhìn Quốc gia Thông minh của Singapore',
        organization: 'Chính phủ Singapore',
        problem: 'Lập kế hoạch cho các thách thức trong tương lai ở một quốc đảo nhỏ',
        solution: 'Chương trình tầm nhìn xa toàn diện và lập kế hoạch kịch bản',
        impact: 'Chuyển đổi số thành công và chuẩn bị cho tương lai',
        innovations: [
          'Tầm nhìn xa toàn chính phủ',
          'Sự tham gia của công dân',
          'Tích hợp công nghệ',
          'Quản trị thích ứng',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Tương lai Thế giới (World Future Society)',
        url: 'https://www.worldfuture.org',
        type: 'Cộng đồng',
      },
      {
        title: 'Viện Nghiên cứu Tương lai (Institute for the Future)',
        url: 'https://www.iftf.org',
        type: 'Nghiên cứu',
      },
      {
        title: 'Mạng lưới Kinh doanh Toàn cầu (Global Business Network)',
        url: 'https://www.gbn.com',
        type: 'Tư vấn',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'treasure-hunt-adventure'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    faqs: [
      {
        question: 'Tư duy tương lai khác gì với dự đoán thông thường?',
        answer:
          'Dự đoán cố gắng tìm ra một tương lai duy nhất sẽ xảy ra. Tư duy tương lai khám phá nhiều tương lai có thể xảy ra để chuẩn bị tốt hơn cho sự không chắc chắn và đưa ra quyết định chiến lược vững vàng hơn.',
      },
      {
        question: 'Lập kế hoạch kịch bản (Scenario Planning) là gì?',
        answer:
          'Đó là một phương pháp tư duy chiến lược bao gồm việc tạo ra một vài câu chuyện chi tiết và hợp lý về tương lai (kịch bản) để khám phá các yếu tố không chắc chắn và kiểm tra các chiến lược hiện tại.',
      },
      {
        question: 'Tại sao phân tích STEEP lại quan trọng?',
        answer:
          'Phân tích STEEP (Social, Technological, Economic, Environmental, Political) là một khung phân tích giúp xác định và hiểu các động lực vĩ mô đang định hình thế giới, cung cấp một cái nhìn toàn cảnh về các lực lượng thay đổi.',
      },
      {
        question: 'Hoạch định ngược (Backcasting) hoạt động như thế nào?',
        answer:
          'Thay vì dự báo từ hiện tại tới tương lai, hoạch định ngược bắt đầu bằng việc xác định một tương lai mong muốn. Sau đó, bạn làm việc ngược lại để xác định các bước và chính sách cần thiết để kết nối tương lai đó với hiện tại.',
      },
    ],
  },
  {
    id: 'weak-signals-trend-spotting',
    title: 'Bài 2: Phát Hiện Tín Hiệu Yếu và Xu Hướng',
    description:
      'Học cách nhận diện các tín hiệu sớm của sự thay đổi và các xu hướng mới nổi trước khi chúng trở nên phổ biến.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=bbcOTT-1oWw', // Trend Spotting and Weak Signals
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về tín hiệu yếu và các chỉ báo sớm',
      'Phát triển kỹ năng để phát hiện các xu hướng mới nổi',
      'Tạo hệ thống theo dõi xu hướng cá nhân',
      'Chuyển đổi hiểu biết thành thông tin tình báo có thể hành động',
    ],
    prerequisites: ['Đã hoàn thành "Cơ Bản về Tư Duy Tương Lai"', 'Có thói quen đọc tin tức và theo dõi các xu hướng'],
    scenarioMethods: [
      'Quét môi trường (Environmental Scanning)',
      'Thuật toán phát hiện tín hiệu (Signal Detection Algorithms)',
      'Nhận dạng mẫu (Pattern Recognition)',
      'Phân tích mạng lưới (Network Analysis)',
    ],
    trendAnalysisFrameworks: [
      'Khung VERGE (Giá trị, Năng lượng, Tài nguyên, Quản trị, Giáo dục)',
      'Phân tích các vấn đề mới nổi (Emerging Issues Analysis)',
      'Đánh giá mức độ sẵn sàng của công nghệ (Technology Readiness Assessment)',
      'Phân tích xu hướng mạng xã hội (Social Network Trend Analysis)',
    ],
    uncertaintyFactors: [
      'Nhiễu thông tin và thông tin sai lệch',
      'Thiên vị xác nhận trong việc giải thích xu hướng',
      'Tư duy tuyến tính về những thay đổi phi tuyến tính',
      'Điểm mù văn hóa',
    ],
    futuringTechniques: [
      {
        name: 'Quét Môi trường (Environmental Scanning)',
        description: 'Giám sát có hệ thống môi trường bên ngoài để tìm kiếm những thay đổi',
        timeHorizon: 'Liên tục',
        bestUseCases: ['Tình báo chiến lược', 'Cơ hội đổi mới', 'Cảnh báo sớm rủi ro'],
        steps: [
          'Xác định các lĩnh vực quét',
          'Xác định các nguồn thông tin',
          'Tạo hệ thống giám sát',
          'Lọc và phân loại tín hiệu',
          'Phân tích các mẫu',
          'Báo cáo thông tin chi tiết',
        ],
      },
      {
        name: 'Phương pháp Delphi',
        description: 'Xây dựng sự đồng thuận của chuyên gia về các phát triển trong tương lai',
        timeHorizon: '6 tháng - 5 năm',
        bestUseCases: ['Dự báo của chuyên gia', 'Giảm sự không chắc chắn', 'Thiết lập ưu tiên'],
        steps: [
          'Chọn hội đồng chuyên gia',
          'Thiết kế các vòng câu hỏi',
          'Thu thập các câu trả lời ban đầu',
          'Cung cấp phản hồi',
          'Lặp lại cho đến khi đạt được sự đồng thuận',
          'Tổng hợp các phát hiện',
        ],
      },
    ],
    exercises: [
      {
        title: 'Radar Xu hướng Cá nhân',
        description: 'Xây dựng hệ thống cá nhân để theo dõi các xu hướng liên quan đến mục tiêu của bạn',
        difficulty: 'Trung bình',
        materials: ['Nguồn cấp RSS', 'Theo dõi mạng xã hội', 'Công cụ tổng hợp tin tức'],
        procedure: [
          'Xác định sở thích và lĩnh vực trọng tâm của bạn',
          'Xác định các nguồn thông tin đa dạng',
          'Thiết lập hệ thống giám sát tự động',
          'Tạo hệ thống lọc và phân loại',
          'Thói quen xem xét xu hướng hàng tuần',
          'Phân tích mẫu hàng tháng',
        ],
        expectedResults: 'Hệ thống cảnh báo sớm được cá nhân hóa cho các xu hướng liên quan',
        solution:
          'Cân bằng tự động hóa với sự sáng suốt của con người, đa dạng hóa các nguồn, tập trung vào chất lượng hơn số lượng.',
      },
      {
        title: 'Điều tra Tín hiệu Yếu',
        description: 'Đi sâu vào một tín hiệu yếu để đánh giá tác động tiềm tàng',
        difficulty: 'Nâng cao',
        materials: ['Công cụ nghiên cứu', 'Khung phân tích'],
        procedure: [
          'Xác định một tín hiệu yếu thú vị',
          'Nghiên cứu bối cảnh lịch sử',
          'Vạch ra các bên liên quan và lợi ích',
          'Phân tích các động lực thúc đẩy',
          'Đánh giá các quỹ đạo tiềm năng',
          'Ước tính dòng thời gian và tác động',
        ],
        expectedResults: 'Đánh giá toàn diện về tiềm năng của tín hiệu yếu',
        solution: 'Tìm kiếm sự hội tụ với các tín hiệu khác, xem xét hiệu ứng mạng lưới, xác thực với nhiều nguồn.',
      },
    ],
    realWorldApplications: [
      'Xác định cơ hội đổi mới',
      'Thời điểm đầu tư và thâm nhập thị trường',
      'Quản lý rủi ro và lập kế hoạch dự phòng',
      'Lộ trình phát triển sản phẩm',
      'Tình báo cạnh tranh',
    ],
    caseStudies: [
      {
        title: 'Netflix và Xu hướng Phát trực tuyến',
        organization: 'Netflix',
        problem: 'Chuyển đổi từ cho thuê DVD sang tương lai kỹ thuật số',
        solution: 'Nhận ra sớm tiềm năng của phát trực tuyến',
        impact: 'Dẫn đầu thị trường trong ngành công nghiệp phát trực tuyến',
        innovations: [
          'Phân tích xu hướng dựa trên dữ liệu',
          'Lập kế hoạch dựa trên kịch bản',
          'Các trục chiến lược táo bạo',
          'Tầm nhìn xa về việc áp dụng công nghệ',
        ],
      },
    ],
    resources: [
      {
        title: 'Trend Hunter',
        url: 'https://www.trendhunter.com',
        type: 'Nền tảng',
      },
      {
        title: 'Futures Platform',
        url: 'https://www.futuresplatform.com',
        type: 'Công cụ',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-prompt-challenge'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'personal-strategic-planning',
    title: 'Bài 3: Kế Hoạch Chiến Lược Cá Nhân',
    description:
      'Áp dụng tầm nhìn chiến lược vào phát triển cá nhân, lập kế hoạch sự nghiệp và thiết kế cuộc sống với góc nhìn dài hạn.',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=LO1mTELoj6o', // Personal Strategic Planning
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
    objectives: [
      'Áp dụng tư duy tương lai vào kế hoạch cá nhân',
      'Tạo ra một chiến lược sống thích ứng',
      'Phát triển các hệ thống cá nhân chống mong manh (antifragile)',
      'Xây dựng năng lực để liên tục tái tạo bản thân',
    ],
    prerequisites: ['Đã hoàn thành các bài học trước', 'Có động lực phát triển cá nhân dài hạn'],
    scenarioMethods: [
      'Phân tích SWOT Tương lai Cá nhân',
      'Xây dựng Kịch bản Lộ trình Cuộc đời',
      'Lập kế hoạch Danh mục Kỹ năng',
      'Phân tích Hiệu ứng Mạng lưới',
    ],
    trendAnalysisFrameworks: [
      'Bánh xe Tương lai Cá nhân',
      'Phân tích Lĩnh vực Cuộc sống',
      'Lộ trình Xây dựng Năng lực',
      'Đánh giá Chi phí Cơ hội',
    ],
    uncertaintyFactors: [
      'Rủi ro gián đoạn sự nghiệp',
      'Các mối đe dọa thay thế công nghệ',
      'Biến động kinh tế',
      'Những thay đổi về sức khỏe và cuộc sống',
      'Nghĩa vụ gia đình',
      'Nhu cầu di chuyển địa lý',
    ],
    futuringTechniques: [
      {
        name: 'Tư duy Thiết kế Cuộc sống (Life Design Thinking)',
        description: 'Áp dụng các nguyên tắc tư duy thiết kế vào việc lập kế hoạch cuộc sống',
        timeHorizon: '1-10 năm',
        bestUseCases: ['Chuyển đổi nghề nghiệp', 'Khám phá mục đích sống', 'Các quyết định lớn'],
        steps: [
          'Đồng cảm với bản thân trong tương lai',
          'Xác định kết quả mong muốn',
          'Lên ý tưởng về các con đường khả thi',
          'Tạo mẫu trải nghiệm',
          'Kiểm tra các giả định',
          'Lặp lại chiến lược',
        ],
      },
      {
        name: 'Chiến lược Tùy chọn (Optionality Strategy)',
        description: 'Xây dựng nhiều lựa chọn để hưởng lợi từ sự không chắc chắn',
        timeHorizon: '2-20 năm',
        bestUseCases: ['Quản lý rủi ro', 'Tối đa hóa cơ hội', 'Bảo toàn sự linh hoạt'],
        steps: [
          'Xác định các yếu tố không chắc chắn chính',
          'Vạch ra các cơ hội tiềm năng',
          'Xây dựng các năng lực hỗ trợ',
          'Duy trì nhiều lựa chọn',
          'Theo dõi các sự kiện kích hoạt',
          'Thực hiện các lựa chọn một cách tối ưu',
        ],
      },
    ],
    exercises: [
      {
        title: 'Tầm nhìn Bản thân Tương lai',
        description: 'Tạo ra một tầm nhìn chi tiết về bản thân mong muốn trong tương lai trong nhiều kịch bản',
        difficulty: 'Cơ bản',
        materials: ['Công cụ bảng tầm nhìn', 'Câu hỏi phản ánh'],
        procedure: [
          'Tưởng tượng bản thân sau 10 năm nữa',
          'Mô tả chi tiết một ngày lý tưởng',
          'Xác định các năng lực cần thiết',
          'Vạch ra những khoảng trống hiện tại',
          'Thiết kế lộ trình phát triển',
          'Tạo hệ thống trách nhiệm',
        ],
        expectedResults: 'Tầm nhìn rõ ràng và kế hoạch phát triển có thể hành động',
        solution: 'Hãy cụ thể và sống động, tập trung vào các giá trị nội tại, lập kế hoạch cho nhiều kịch bản.',
      },
      {
        title: 'Thiết kế Sự nghiệp Chống Mong manh (Antifragile)',
        description: 'Thiết kế một chiến lược sự nghiệp có lợi từ sự biến động',
        difficulty: 'Nâng cao',
        materials: ['Phân tích ngành', 'Đánh giá kỹ năng'],
        procedure: [
          'Phân tích rủi ro gián đoạn sự nghiệp',
          'Xác định các yếu tố sự nghiệp chống mong manh',
          'Xây dựng danh mục kỹ năng đa dạng',
          'Tạo nhiều nguồn thu nhập',
          'Phát triển năng lực thích ứng',
          'Kiểm tra khả năng phục hồi thường xuyên',
        ],
        expectedResults: 'Chiến lược sự nghiệp vững chắc cho một tương lai không chắc chắn',
        solution: 'Tập trung vào các kỹ năng có thể chuyển đổi, xây dựng mạng lưới vững chắc, duy trì tư duy học hỏi.',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch chuyển đổi nghề nghiệp',
      'Ưu tiên phát triển kỹ năng',
      'Lập kế hoạch tài chính với sự không chắc chắn',
      'Lập kế hoạch mối quan hệ và gia đình',
      'Chiến lược sức khỏe và ευεξία dài hạn',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Sự nghiệp của Reid Hoffman',
        organization: 'Reid Hoffman (người sáng lập LinkedIn)',
        problem: 'Điều hướng sự nghiệp trong ngành công nghệ không chắc chắn',
        solution: 'Tiếp cận danh mục đầu tư với nhiều lần đặt cược và tùy chọn',
        impact: 'Doanh nhân và nhà đầu tư thành công',
        innovations: ['Chiến lược dựa trên mạng lưới', 'Tư duy nền tảng', 'Bảo toàn tùy chọn', 'Định hướng học tập'],
      },
    ],
    resources: [
      {
        title: 'Thiết kế Cuộc đời Bạn (Designing Your Life)',
        url: 'https://designingyour.life',
        type: 'Sách/Trang web',
      },
      {
        title: 'Chống Mong manh (Antifragile) của Nassim Taleb',
        url: 'https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb',
        type: 'Sách',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'treasure-hunt-adventure'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];

export const futureThinkingScenarioPlanningModule: ModuleData<FutureThinkingLessonType> = {
  id: 'future-thinking-scenario-planning',
  title: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
  description:
    'Học cách tư duy hệ thống về tương lai, phân tích xu hướng và lập kế hoạch kịch bản để đưa ra quyết định chiến lược trong một thế giới không chắc chắn.',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
  category: 'Kỹ năng Chuyên nghiệp',
  basePath: '/learning/future-thinking-scenario-planning',
  lessons: futureThinkingLessons,
  features: [
    'Phân tích xu hướng (STEEP)',
    'Lập kế hoạch kịch bản',
    'Hoạch định ngược (Backcasting)',
    'Phát hiện tín hiệu yếu',
  ],
  relatedModules: [K2Module.CriticalThinking, K2Module.DataScience, K2Module.BusinessMarketing],
};
