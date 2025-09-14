import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData, CaseStudy, Resource, VietnamContext, Exercise } from '@/types/lesson-base';

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface PracticalExercise {
  title: string;
  scenario: string;
  steps: string[];
  expectedOutcome: string;
  realWorldApplication: string;
}

export interface CriticalThinkingLessonType extends BaseLessonData {
  thinkingFrameworks?: string[];
  cognitiveSkills?: string[];
  assessmentMethods?: string[];
  practicalExercises?: PracticalExercise[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  caseStudies?: CaseStudy[];
  resources?: Resource[];
  exercises?: Exercise[];
}

export const criticalThinkingLessons: CriticalThinkingLessonType[] = [
  {
    id: 'critical-thinking-fundamentals',
    title: 'Cơ Bản Tư Duy Phê Phán',
    description:
      'Nắm vững các nguyên tắc cơ bản của tư duy phê phán, học cách đánh giá thông tin và đưa ra quyết định có căn cứ.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=6HP5mg91ETU', // What is Critical Thinking? - TED-Ed
    imageUrl: 'https://i.ytimg.com/vi/6HP5mg91ETU/hqdefault.jpg',
    objectives: [
      'Hiểu được định nghĩa và tầm quan trọng của tư duy phê phán',
      'Nhận biết các lỗi lập luận phổ biến (logical fallacies)',
      'Áp dụng phương pháp đặt câu hỏi hiệu quả',
      'Phân biệt được fact và opinion trong thông tin',
    ],
    mainContent: [
      {
        heading: 'Tư Duy Phê Phán: Siêu Năng Lực Trong Kỷ Nguyên Số',
        details:
          'Trong một thế giới tràn ngập thông tin, tin giả và các ý kiến trái chiều, khả năng phân tích, đánh giá và suy luận một cách có hệ thống không còn là một kỹ năng "nice-to-have", mà là một "must-have". Tư duy phê phán chính là bộ lọc giúp bạn nhìn thấu bản chất vấn đề, không bị dẫn dắt bởi cảm tính hay những lập luận hời hợt. Đây là nền tảng để bạn đưa ra quyết định sáng suốt trong học tập, công việc và cuộc sống.',
      },
      {
        heading: 'Giải Phẫu một Lập Luận: Ba Thành Tố Cốt Lõi',
        details:
          'Mọi lập luận, dù đơn giản hay phức tạp, đều được xây dựng trên ba trụ cột: Luận điểm (Claim - điều người nói muốn bạn tin), Bằng chứng (Evidence - dữ liệu, sự kiện, số liệu hỗ trợ cho luận điểm), và Giả định (Assumption - những niềm tin, quy tắc ngầm không được nói ra nhưng lại kết nối bằng chứng và luận điểm). Học cách "bóc tách" ba thành tố này là bước đầu tiên để đánh giá bất kỳ thông tin nào bạn tiếp nhận.',
      },
      {
        heading: 'Cạm Bẫy Tư Duy: Nhận Diện Các Lỗi Ngụy Biện Phổ Biến',
        details:
          'Não bộ chúng ta thường đi đường tắt để tiết kiệm năng lượng, và đó là lúc các lỗi ngụy biện (logical fallacies) xuất hiện. Ví dụ: công kích cá nhân thay vì tranh luận vào vấn đề (ad hominem), hoặc đẩy một vấn đề nhỏ thành một thảm họa (slippery slope). Bài học sẽ cung cấp các ví dụ thực tế tại Việt Nam giúp bạn nhận diện và tránh được những cạm bẫy tư duy này, cả trong lập luận của người khác và của chính mình.',
      },
      {
        heading: 'Bộ Công Cụ Socrates: Sức Mạnh của Việc Đặt Câu Hỏi Đúng',
        details:
          'Chất lượng câu trả lời phụ thuộc vào chất lượng câu hỏi. Thay vì chấp nhận thông tin một cách thụ động, hãy học cách đặt những câu hỏi đào sâu: "Bằng chứng này từ đâu ra?", "Có cách giải thích nào khác không?", "Giả định ngầm ở đây là gì?". Phương pháp này không chỉ giúp bạn làm rõ thông tin mà còn thúc đẩy sự hiểu biết sâu sắc và toàn diện hơn về vấn đề.',
      },
    ],
    prerequisites: ['Không có yêu cầu tiên quyết', 'Có khả năng đọc hiểu tiếng Việt tốt'],
    thinkingFrameworks: [
      'The 5 Whys Method',
      'SWOT Analysis',
      'Cause and Effect Diagram',
      'Critical Question Framework',
    ],
    cognitiveSkills: [
      'Phân tích (Analysis)',
      'Đánh giá (Evaluation)',
      'Suy luận (Inference)',
      'Giải thích (Explanation)',
    ],
    assessmentMethods: ['Phân tích case study', 'Debate và thảo luận', 'Problem-solving exercises', 'Peer evaluation'],
    exercises: [
      {
        title: 'Phân Tích Tin Tức Thời Sự',
        description: 'Phân tích một bài báo về vấn đề xã hội hiện tại sử dụng framework tư duy phê phán',
        difficulty: 'Cơ bản',
        materials: ['Bài báo mẫu', 'Checklist đánh giá', 'Template phân tích'],
        procedure: [
          'Đọc kỹ bài báo được cung cấp',
          'Xác định main argument và supporting evidence',
          'Tìm kiếm possible bias hoặc missing information',
          'Đặt câu hỏi phê phán về nội dung',
          'Đưa ra kết luận dựa trên evidence',
        ],
        expectedResults: 'Học sinh có thể phân tích objectively một nguồn thông tin và đưa ra đánh giá có căn cứ',
        solution:
          'Sử dụng Critical Question Framework để systematic analysis và identify strengths/weaknesses của argument',
      },
      {
        title: 'Giải Quyết Vấn Đề Thực Tế',
        description: 'Áp dụng tư duy phê phán để giải quyết một vấn đề cụ thể trong cuộc sống học sinh',
        difficulty: 'Trung bình',
        materials: ['Problem scenario', '5 Whys template', 'Solution evaluation matrix'],
        procedure: [
          'Xác định và định nghĩa vấn đề rõ ràng',
          'Thu thập thông tin related và reliable sources',
          'Sử dụng 5 Whys để tìm root cause',
          'Brainstorm multiple solutions',
          'Đánh giá pros/cons của từng solution',
          'Chọn best solution và justify decision',
        ],
        expectedResults: 'Có được một solution có tính khả thi cao và được justify bằng logical reasoning',
        solution: 'Combination của analytical thinking và creative problem-solving để đưa ra optimal solution',
      },
    ],
    practicalExercises: [
      {
        title: 'Phân Tích Quảng Cáo',
        scenario: 'Bạn được yêu cầu phân tích một quảng cáo của sản phẩm công nghệ phổ biến tại Việt Nam',
        steps: [
          'Identify target audience và marketing message',
          'Phân tích persuasion techniques được sử dụng',
          'Tìm missing information hoặc misleading claims',
          'Evaluate credibility của evidence được presented',
          'Suggest improvements cho transparency',
        ],
        expectedOutcome: 'Nhận biết được marketing tactics và có thể make informed decisions khi consumer',
        realWorldApplication: 'Áp dụng khi mua sắm, đánh giá sản phẩm dịch vụ, avoid scams và false advertising',
      },
      {
        title: 'Debate về Vấn Đề Xã Hội',
        scenario: 'Tham gia debate về một controversial topic như "Nên hay không nên ban xe máy trong thành phố?"',
        steps: [
          'Research thoroughly cả hai sides của argument',
          'Prepare evidence-based points',
          'Anticipate counter-arguments',
          'Present logical flow of reasoning',
          'Respond constructively đến opposing views',
        ],
        expectedOutcome: 'Có thể defend một position bằng logical arguments và respectful discourse',
        realWorldApplication: 'Useful trong academic discussions, workplace negotiations, civic participation',
      },
    ],
    realWorldApplications: [
      'Đánh giá thông tin trên mạng xã hội và tránh fake news',
      'Ra quyết định mua sắm thông minh và tránh lừa đảo',
      'Giải quyết conflicts trong relationships một cách constructive',
      'Analyze job opportunities và career choices effectively',
      'Participate in democratic processes với informed opinions',
    ],
    relatedGames: [
      {
        id: 'future-scenario-builder-3d',
        name: 'Future Scenario Builder 3D',
        description:
          'Phân tích các yếu tố và thách thức để xây dựng kịch bản tương lai, một bài tập tuyệt vời để rèn luyện kỹ năng đánh giá và suy luận.',
      },
    ],
    caseStudies: [
      {
        title: 'Vingroup và Chiến Lược Đa Ngành',
        organization: 'Vingroup - Tập đoàn kinh tế tư nhân lớn nhất Việt Nam',
        problem: 'Làm sao Vingroup có thể diversify thành công từ real estate sang automotive, technology, healthcare?',
        solution:
          'Sử dụng systematic analysis để identify market opportunities, leverage existing resources, và strategic acquisitions',
        impact: 'Trở thành conglomerate đa ngành với revenue hàng tỷ USD và create hàng nghìn job opportunities',
        innovations: [
          'Vertical integration strategy',
          'Cross-industry synergy exploitation',
          'Bold investment in emerging technologies',
          'Ecosystem building approach',
        ],
      },
    ],
    resources: [
      {
        title: "Critical Thinking: A Beginner's Guide",
        url: 'https://www.criticalthinking.org/pages/critical-thinking-a-beginners-guide/510',
        type: 'Documentation',
      },
      {
        title: 'Logical Fallacies List',
        url: 'https://yourlogicalfallacyis.com/',
        type: 'Reference',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Tư duy Phê phán tại Việt Nam',
      content: [
        'Văn hóa "cả nể", ngại tranh luận thẳng thắn có thể là một rào cản đối với việc thực hành tư duy phê phán trong môi trường học tập và làm việc.',
        'Sự bùng nổ của mạng xã hội tại Việt Nam tạo ra một môi trường lý tưởng cho tin giả (fake news) và các thuyết âm mưu lan truyền, đòi hỏi người dùng phải có kỹ năng sàng lọc thông tin.',
        'Trong các cuộc tranh luận online, lỗi ngụy biện "công kích cá nhân" (ad hominem) và "tấn công người rơm" (straw man) rất phổ biến.',
        'Giáo dục truyền thống Việt Nam thường tập trung vào việc ghi nhớ kiến thức hơn là đặt câu hỏi và phản biện, tạo ra một thế hệ cần được trang bị thêm kỹ năng tư duy phê phán.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Cảnh Bình',
      title: 'Chủ tịch HĐQT, Alpha Books',
      company: 'Alpha Books',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-canh-binh',
      quote:
        'Trong ngành xuất bản, tư duy phê phán là công cụ sống còn. Chúng tôi phải đánh giá hàng trăm bản thảo, phân tích xu hướng thị trường, và quyết định xem cuốn sách nào thực sự mang lại giá trị cho độc giả, chứ không chỉ chạy theo trào lưu. Một quyết định sai có thể lãng phí rất nhiều nguồn lực.',
    },
    quizzes: [
      {
        question: 'Lỗi ngụy biện "Ad Hominem" là gì?',
        options: [
          'Tấn công vào luận điểm của đối phương',
          'Tấn công vào cá nhân, ngoại hình, hoặc tính cách của đối phương thay vì luận điểm của họ',
          'Đưa ra một kết luận vội vàng',
          'Cho rằng vì A xảy ra trước B, nên A gây ra B',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ad Hominem (công kích cá nhân) là một lỗi ngụy biện phổ biến, trong đó người tranh luận bỏ qua nội dung của luận điểm và chuyển sang tấn công, lăng mạ người đưa ra luận điểm đó.',
      },
      {
        question: 'Phương pháp "5 Whys" được sử dụng để làm gì?',
        options: [
          'Để đưa ra 5 giải pháp khác nhau',
          'Để tìm ra nguyên nhân gốc rễ của một vấn đề bằng cách hỏi "Tại sao?" lặp đi lặp lại',
          'Để kiểm tra 5 nguồn thông tin khác nhau',
          'Để thuyết phục 5 người khác nhau',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phương pháp 5 Whys là một kỹ thuật phân tích nguyên nhân gốc rễ, bằng cách hỏi "Tại sao?" nhiều lần (thường là 5 lần) cho đến khi tìm ra được nguyên nhân cốt lõi của một vấn đề, thay vì chỉ xử lý các triệu chứng bề mặt.',
      },
    ],
    faqs: [
      {
        question: 'Tư duy phê phán có phải là luôn luôn chỉ trích và phản đối không?',
        answer:
          'Không. Tư duy phê phán không phải là chỉ trích tiêu cực. Đó là quá trình phân tích và đánh giá thông tin một cách có hệ thống để hình thành một nhận định có cơ sở. Nó bao gồm cả việc công nhận những điểm mạnh và hợp lý trong một lập luận, chứ không chỉ tìm ra điểm yếu.',
      },
      {
        question: 'Làm thế nào để rèn luyện tư duy phê phán hàng ngày?',
        answer:
          'Bạn có thể bắt đầu bằng cách tập đặt câu hỏi về những thông tin bạn tiếp nhận: "Nguồn tin này có đáng tin cậy không?", "Có góc nhìn nào khác không?", "Giả định đằng sau thông điệp này là gì?". Ngoài ra, hãy đọc các bài phân tích đa chiều và tham gia vào các cuộc thảo luận lành mạnh.',
      },
      {
        question: 'Fact (sự thật) và Opinion (ý kiến) khác nhau như thế nào?',
        answer:
          'Fact là một thông tin có thể được kiểm chứng và chứng minh là đúng hoặc sai một cách khách quan (ví dụ: "Hà Nội là thủ đô của Việt Nam"). Opinion là một nhận định, niềm tin hoặc cảm xúc cá nhân, không thể chứng minh một cách tuyệt đối (ví dụ: "Hà Nội là thành phố đẹp nhất").',
      },
      {
        question: 'Tại sao việc nhận diện lỗi ngụy biện (logical fallacies) lại quan trọng?',
        answer:
          'Nhận diện lỗi ngụy biện giúp bạn không bị thuyết phục bởi những lập luận sai lầm, thiếu logic. Nó giúp bạn tập trung vào bản chất của vấn đề, đánh giá bằng chứng một cách chính xác và xây dựng lập luận của riêng mình một cách vững chắc hơn.',
      },
    ],
  },
  {
    id: 'creative-problem-solving',
    title: 'Giải Quyết Vấn Đề Sáng Tạo',
    description: 'Học cách áp dụng design thinking và các phương pháp sáng tạo để giải quyết vấn đề phức tạp.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=J0hRQCuvW1E', // Design Thinking Process - IDEO
    imageUrl: 'https://i.ytimg.com/vi/J0hRQCuvW1E/hqdefault.jpg',
    objectives: [
      'Nắm vững quy trình Design Thinking 5 bước',
      'Áp dụng các kỹ thuật brainstorming hiệu quả',
      'Phát triển khả năng think outside the box',
      'Tạo ra solutions có tính innovation cao',
    ],
    mainContent: [
      {
        heading: 'Sáng Tạo Không Phải Năng Khiếu, Đó Là một Quy Trình',
        details:
          'Nhiều người tin rằng sáng tạo là một món quà trời cho. Thực tế, đó là một kỹ năng có thể học hỏi và rèn luyện thông qua một quy trình có cấu trúc. Bài học này sẽ giới thiệu Design Thinking, một phương pháp giải quyết vấn đề lấy con người làm trung tâm, được các công ty hàng đầu như Apple, Google và IDEO sử dụng để tạo ra những sản phẩm và dịch vụ đột phá.',
      },
      {
        heading: 'Thấu Cảm và Định Nghĩa: Đặt Vấn Đề Đúng Là Đã Giải Quyết Được 50%',
        details:
          'Bước đầu tiên của Design Thinking không phải là tìm giải pháp, mà là thấu hiểu sâu sắc người dùng (Empathize). Bằng cách quan sát, phỏng vấn, bạn sẽ khám phá ra những nhu cầu tiềm ẩn, những "nỗi đau" mà chính họ cũng chưa nhận ra. Từ đó, bạn sẽ định nghĩa (Define) lại vấn đề một cách sắc bén. Ví dụ, thay vì "Làm sao để sinh viên học tốt hơn?", vấn đề có thể là "Làm sao để việc học trở nên thú vị và bớt căng thẳng hơn?".',
      },
      {
        heading: 'Lên Ý Tưởng và Tạo Mẫu: "Nghĩ Điên Rồ" và "Thất Bại Nhanh"',
        details:
          'Giai đoạn Lên ý tưởng (Ideate) là lúc bạn cho phép mình "think outside the box" mà không có sự phán xét. Các kỹ thuật như SCAMPER hay Brainstorming ngược sẽ giúp bạn tạo ra hàng trăm ý tưởng. Sau đó, bạn sẽ nhanh chóng biến những ý tưởng tiềm năng nhất thành các mẫu thử (Prototype) đơn giản - có thể là một bản vẽ, một đoạn kịch - để nhận được phản hồi sớm. Nguyên tắc là "thất bại nhanh, thất bại rẻ" để học hỏi và cải tiến.',
      },
      {
        heading: 'Kiểm Thử và Lặp Lại: Con Đường Dẫn đến Sự Đột Phá',
        details:
          'Đưa mẫu thử của bạn cho người dùng thật để Kiểm thử (Test) và quan sát phản ứng của họ. Những phản hồi quý giá này sẽ giúp bạn quay lại các bước trước để cải tiến ý tưởng, định nghĩa lại vấn đề, hoặc thậm chí là tìm ra một hướng đi hoàn toàn mới. Sáng tạo không phải là một đường thẳng, mà là một chu trình lặp đi lặp lại của việc xây dựng, đo lường và học hỏi.',
      },
    ],
    prerequisites: ['Hoàn thành bài "Cơ Bản Tư Duy Phê Phán"', 'Có tinh thần mở và sẵn sàng thử nghiệm'],
    thinkingFrameworks: ['Design Thinking Process', 'SCAMPER Method', 'Six Thinking Hats', 'TRIZ Methodology'],
    cognitiveSkills: ['Divergent Thinking', 'Convergent Thinking', 'Pattern Recognition', 'Synthesis'],
    assessmentMethods: [
      'Innovation project',
      'Prototype development',
      'Peer collaboration assessment',
      'Presentation of solutions',
    ],
    exercises: [
      {
        title: 'Design Challenge: Cải Thiện Giao Thông Thành Phố',
        description: 'Sử dụng Design Thinking để đề xuất giải pháp giảm tắc nghẽn giao thông tại TP.HCM',
        difficulty: 'Nâng cao',
        materials: ['Design Thinking canvas', 'Interview templates', 'Prototyping materials'],
        procedure: [
          'Empathize: Interview người dân về pain points giao thông',
          'Define: Synthesize insights thành problem statement',
          'Ideate: Brainstorm solutions sử dụng SCAMPER',
          'Prototype: Tạo mockup hoặc storyboard',
          'Test: Gather feedback và iterate solution',
        ],
        expectedResults: 'Một solution concrete với potential impact measurement và implementation plan',
        solution: 'Multi-modal approach combining technology, behavior change, và policy recommendations',
      },
    ],
    practicalExercises: [
      {
        title: 'Startup Idea Generation',
        scenario: 'Tạo ra một startup idea để solve một problem cụ thể của sinh viên Việt Nam',
        steps: [
          'Identify pain points through observation và surveys',
          'Use empathy mapping để understand user needs deeply',
          'Apply SCAMPER để generate multiple solutions',
          'Develop value proposition canvas',
          'Create MVP concept và validation plan',
        ],
        expectedOutcome: 'Có một startup concept with clear value proposition và go-to-market strategy',
        realWorldApplication: 'Entrepreneurship, intrapreneurship trong companies, social innovation projects',
      },
    ],
    realWorldApplications: [
      'Tạo ra innovative solutions trong academic projects',
      'Solve workplace challenges với creative approaches',
      'Develop entrepreneurial ventures',
      'Improve personal productivity và life quality',
      'Contribute to community problem-solving initiatives',
    ],
    relatedGames: [
      {
        id: 'game-design-studio-3d',
        name: 'Game Design Studio 3D',
        description:
          'Trực tiếp áp dụng quy trình sáng tạo để thiết kế và xây dựng một trò chơi, từ ý tưởng ban đầu đến sản phẩm hoàn chỉnh.',
      },
    ],
    caseStudies: [
      {
        title: 'Grab và Sự Thích Ứng với Thị Trường Đông Nam Á',
        organization: 'Grab - Super app hàng đầu Đông Nam Á',
        problem: 'Làm thế nào để compete với Uber và adapt services cho từng market cụ thể?',
        solution: 'Localization strategy, diversification into fintech, food delivery, và logistics',
        impact: 'Trở thành unicorn với valuation $16 billion và serve hàng triệu users daily',
        innovations: [
          'Cash-based payment system adaptation',
          'Motorbike taxi integration',
          'Super app ecosystem development',
          'Local partnership strategy',
        ],
      },
    ],
    resources: [
      {
        title: 'IDEO Design Kit',
        url: 'https://www.designkit.org/methods',
        type: 'Tool',
      },
      {
        title: 'Stanford d.school Design Thinking Process',
        url: 'https://dschool.stanford.edu/resources/design-thinking-bootleg',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Giải quyết vấn đề của Người Việt',
      content: [
        'Sự khéo léo và khả năng "ứng biến" (improvisation) là một đặc điểm sáng tạo của người Việt, thể hiện qua việc tạo ra các giải pháp tình thế hiệu quả.',
        'Các dự án khởi nghiệp xã hội tại Việt Nam đang áp dụng Design Thinking để giải quyết các vấn đề cộng đồng như rác thải nhựa, giáo dục cho trẻ em vùng cao.',
        'Phong trào "makerspace" và "hackathon" đang phát triển, tạo ra môi trường cho các bạn trẻ thực hành giải quyết vấn đề sáng tạo một cách nhanh chóng.',
        'Ví dụ về MoMo: Từ một ứng dụng chuyển tiền, đã thấu hiểu nhu cầu của người dùng và phát triển thành một "siêu ứng dụng" với hàng trăm dịch vụ, giải quyết nhiều vấn đề trong cuộc sống hàng ngày.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Đặng Tuấn Minh',
      title: 'Giám đốc Sáng tạo',
      company: 'Richard Moore Associates',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-dang-tuan-minh',
      quote:
        'Sáng tạo không phải là phép màu. Đó là sự đồng cảm sâu sắc với người dùng, kết hợp với việc thử nghiệm và thất bại không ngừng. Tại Việt Nam, những giải pháp thành công nhất là những giải pháp hiểu rõ văn hóa và giải quyết được những "nỗi đau" rất đời thường của người Việt.',
    },
    quizzes: [
      {
        question: 'Bước đầu tiên trong quy trình Design Thinking là gì?',
        options: ['Lên ý tưởng (Ideate)', 'Tạo mẫu (Prototype)', 'Thấu cảm (Empathize)', 'Kiểm thử (Test)'],
        correctAnswerIndex: 2,
        explanation:
          'Bước đầu tiên và quan trọng nhất của Design Thinking là Thấu cảm (Empathize) - đặt mình vào vị trí của người dùng để hiểu sâu sắc về nhu cầu, mong muốn và bối cảnh của họ. Mọi giải pháp sau này đều phải xuất phát từ sự thấu cảm này.',
      },
      {
        question: 'Nguyên tắc "thất bại nhanh, thất bại rẻ" thuộc giai đoạn nào của Design Thinking?',
        options: [
          'Định nghĩa (Define)',
          'Tạo mẫu (Prototype) và Kiểm thử (Test)',
          'Lên ý tưởng (Ideate)',
          'Thấu cảm (Empathize)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nguyên tắc này là cốt lõi của giai đoạn Tạo mẫu (Prototype) và Kiểm thử (Test). Thay vì xây dựng một sản phẩm hoàn hảo rồi mới ra mắt, Design Thinking khuyến khích tạo ra các mẫu thử đơn giản, chi phí thấp để nhanh chóng nhận phản hồi, học hỏi từ sai lầm và cải tiến.',
      },
    ],
    faqs: [
      {
        question: 'Design Thinking có chỉ dành cho các nhà thiết kế không?',
        answer:
          'Hoàn toàn không. Design Thinking là một phương pháp giải quyết vấn đề có thể được áp dụng trong mọi lĩnh vực, từ kinh doanh, giáo dục, y tế đến quản lý nhà nước. Bất cứ ai muốn tạo ra các giải pháp lấy con người làm trung tâm đều có thể sử dụng nó.',
      },
      {
        question: 'Làm thế nào để "thấu cảm" với người dùng nếu tôi không có nhiều thời gian?',
        answer:
          'Thấu cảm không nhất thiết phải là các cuộc nghiên cứu dài ngày. Bạn có thể bắt đầu bằng cách quan sát (xem người dùng tương tác với một sản phẩm), thực hiện các cuộc phỏng vấn ngắn (5-10 phút), hoặc thậm chí thử tự mình trải nghiệm vấn đề. Quan trọng là có thái độ cởi mở và thực sự lắng nghe.',
      },
      {
        question: 'Sự khác biệt giữa Brainstorming truyền thống và giai đoạn Ideate là gì?',
        answer:
          'Giai đoạn Ideate trong Design Thinking không chỉ là Brainstorming. Nó nhấn mạnh nguyên tắc "quantity over quality" (số lượng hơn chất lượng) ở giai đoạn đầu và "defer judgment" (trì hoãn phán xét). Nó cũng sử dụng nhiều kỹ thuật có cấu trúc hơn (như SCAMPER) để thúc đẩy tư duy đột phá, thay vì chỉ ngồi và nghĩ tự do.',
      },
      {
        question: 'Prototype có cần phải phức tạp và tốn kém không?',
        answer:
          'Ngược lại, một prototype tốt nên được làm nhanh, rẻ và đơn giản. Nó có thể chỉ là một loạt các bản vẽ trên giấy (storyboard), một mô hình bằng bìa cứng, hoặc một bản trình bày có thể nhấp qua lại. Mục đích là để truyền tải ý tưởng và nhận phản hồi, không phải để tạo ra một sản phẩm hoàn chỉnh.',
      },
    ],
  },
  {
    id: 'systems-thinking',
    title: 'Tư Duy Hệ Thống',
    description: 'Phát triển khả năng nhìn nhận vấn đề từ góc độ tổng thể, hiểu được mối quan hệ giữa các yếu tố.',
    duration: '105 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7CPPzuZmAQI', // Systems Thinking - Peter Senge
    imageUrl: 'https://i.ytimg.com/vi/7CPPzuZmAQI/hqdefault.jpg',
    objectives: [
      'Hiểu được concept của systems thinking',
      'Nhận biết patterns và interconnections',
      'Phân tích root causes và systemic issues',
      'Design interventions hiệu quả cho complex problems',
    ],
    mainContent: [
      {
        heading: 'Thoát khỏi Tư Duy Tuyến Tính: Nhìn Thấy Rừng Cây, Không Chỉ Từng Cây Riêng Lẻ',
        details:
          'Các vấn đề phức tạp như kẹt xe, ô nhiễm môi trường hay sự bất bình đẳng không thể được giải quyết bằng các giải pháp đơn lẻ, vì chúng là kết quả của một hệ thống gồm nhiều yếu tố tương tác với nhau. Tư duy hệ thống là nghệ thuật nhìn thấy các mối liên kết, các vòng lặp và các quy luật ẩn sau những sự kiện bề nổi, giúp chúng ta hiểu được gốc rễ của vấn đề.',
      },
      {
        heading: 'Ngôn Ngữ của Hệ Thống: Kho, Dòng Chảy và Vòng Lặp Phản Hồi',
        details:
          'Mọi hệ thống đều có thể được mô tả bằng các thành phần cơ bản: Kho (Stocks - những thứ bạn có thể đếm được, như tiền trong tài khoản, nước trong hồ), Dòng chảy (Flows - tốc độ thay đổi của kho) và Vòng lặp phản hồi (Feedback Loops). Có hai loại vòng lặp chính: Vòng lặp tăng cường (Reinforcing - tạo ra hiệu ứng quả cầu tuyết, ví dụ: lãi kép) và Vòng lặp cân bằng (Balancing - tạo ra sự ổn định, ví dụ: bộ điều nhiệt). Hiểu được chúng là chìa khóa để giải mã hành vi của hệ thống.',
      },
      {
        heading: 'Vẽ Bản Đồ Tư Duy: Biểu Đồ Nhân Quả (Causal Loop Diagrams)',
        details:
          'Đây là công cụ mạnh mẽ để trực quan hóa các mối quan hệ trong một hệ thống. Bằng cách vẽ ra các yếu tố và các mũi tên chỉ sự ảnh hưởng (tích cực hoặc tiêu cực), bạn có thể nhìn thấy các vòng lặp phản hồi đang chi phối hệ thống. Ví dụ, việc xây thêm đường có thể tạm thời giảm kẹt xe, nhưng lại khuyến khích nhiều người mua xe hơn, cuối cùng lại làm kẹt xe trầm trọng hơn - một vòng lặp tăng cường không mong muốn.',
      },
      {
        heading: 'Điểm Đòn Bẩy: Thay Đổi Nhỏ, Tác Động Lớn',
        details:
          'Không phải mọi sự can thiệp vào hệ thống đều có tác động như nhau. Donella Meadows đã chỉ ra các "điểm đòn bẩy" - những nơi mà một sự thay đổi nhỏ có thể tạo ra sự thay đổi lớn cho toàn bộ hệ thống. Thay đổi mục tiêu của hệ thống (ví dụ: từ tăng trưởng GDP sang hạnh phúc của người dân) có sức mạnh lớn hơn nhiều so với việc chỉ điều chỉnh các thông số. Tìm ra điểm đòn bẩy là mục tiêu cuối cùng của tư duy hệ thống.',
      },
    ],
    prerequisites: ['Hoàn thành "Giải Quyết Vấn Đề Sáng Tạo"', 'Có hiểu biết cơ bản về mathematics và logic'],
    thinkingFrameworks: ['Systems Maps', 'Causal Loop Diagrams', 'Stock and Flow Models', 'Leverage Points Analysis'],
    cognitiveSkills: ['Pattern Recognition', 'Systems Analysis', 'Dynamic Thinking', 'Strategic Planning'],
    assessmentMethods: [
      'Systems mapping exercise',
      'Complex problem analysis',
      'Intervention design project',
      'Systems thinking reflection',
    ],
    exercises: [
      {
        title: 'Phân Tích Hệ Thống Giáo Dục Việt Nam',
        description: 'Tạo systems map để analyze các factors affecting quality của education system',
        difficulty: 'Nâng cao',
        materials: ['Systems mapping software', 'Education data', 'Stakeholder analysis templates'],
        procedure: [
          'Identify key stakeholders trong education system',
          'Map relationships và dependencies',
          'Analyze feedback loops và systemic patterns',
          'Identify leverage points for improvement',
          'Design intervention strategy',
        ],
        expectedResults: 'Comprehensive understanding của education system và actionable improvement recommendations',
        solution:
          'Multi-level intervention addressing teacher training, curriculum reform, technology integration, và parent engagement',
      },
    ],
    practicalExercises: [
      {
        title: 'Sustainable Development Challenge',
        scenario: 'Analyze environmental challenges của Vietnam và design systemic solutions',
        steps: [
          'Map interconnected environmental issues',
          'Identify economic và social factors',
          'Analyze government policy impacts',
          'Design multi-stakeholder interventions',
          'Predict long-term outcomes',
        ],
        expectedOutcome: 'Holistic understanding của sustainability challenges và comprehensive solution framework',
        realWorldApplication: 'Environmental consulting, policy development, sustainable business strategy',
      },
    ],
    realWorldApplications: [
      'Strategic planning cho organizations',
      'Policy analysis và development',
      'Sustainable development initiatives',
      'Complex project management',
      'Social innovation và community development',
    ],
    relatedGames: [
      {
        id: 'economic-simulation-3d',
        name: 'Economic Simulation 3D',
        description:
          'Quản lý một nền kinh tế phức tạp, nơi mọi quyết định về thuế, chi tiêu, lãi suất đều có những tác động lan tỏa, giúp bạn thực hành tư duy hệ thống một cách trực quan.',
      },
    ],
    caseStudies: [
      {
        title: "Vietnam's Digital Transformation Strategy",
        organization: 'Chính phủ Việt Nam - Digital Transformation Program',
        problem: 'Làm sao để transform toàn bộ economy sang digital trong context của developing country?',
        solution:
          'Systematic approach addressing infrastructure, human capital, regulation, và innovation ecosystem simultaneously',
        impact: 'Significant improvement trong e-government services, digital literacy, và tech startup ecosystem',
        innovations: [
          'National digital ID system',
          'E-government platform integration',
          'Digital skills training programs',
          'Startup ecosystem development',
        ],
      },
    ],
    resources: [
      {
        title: 'Systems Thinking for Dummies',
        url: 'https://www.systemsthinking.org/',
        type: 'Documentation',
      },
      {
        title: 'Kumu Systems Mapping Tool',
        url: 'https://kumu.io/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Tư duy Hệ thống trong Bối cảnh Việt Nam',
      content: [
        'Vấn đề ngập lụt ở TP.HCM là một ví dụ điển hình của tư duy hệ thống: nó không chỉ do mưa lớn, mà còn liên quan đến đô thị hóa, hệ thống thoát nước, và biến đổi khí hậu.',
        'Chính sách phát triển kinh tế của Việt Nam là một hệ thống phức tạp, cân bằng giữa thu hút đầu tư nước ngoài (FDI), phát triển doanh nghiệp trong nước, và đảm bảo an sinh xã hội.',
        'Văn hóa "phong bì" trong y tế là một vấn đề hệ thống, liên quan đến lương của bác sĩ, chính sách bảo hiểm, và nhận thức của người dân.',
        'Việc giải quyết vấn đề an toàn thực phẩm đòi hỏi một cách tiếp cận hệ thống, từ trang trại, khâu vận chuyển, chế biến, đến bàn ăn.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Nguyễn Văn A',
      title: 'Chuyên gia Quy hoạch Đô thị',
      company: 'Viện Quy hoạch Đô thị và Nông thôn Quốc gia',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Quy hoạch một thành phố giống như chơi một ván cờ vua phức tạp. Mỗi quyết định, dù là xây một cây cầu hay một khu dân cư, đều tạo ra những gợn sóng lan tỏa khắp hệ thống. Nếu không có tư duy hệ thống, bạn sẽ chỉ mãi chạy theo để giải quyết các vấn đề do chính mình tạo ra.',
    },
    quizzes: [
      {
        question: 'Trong tư duy hệ thống, "vòng lặp tăng cường" (reinforcing loop) là gì?',
        options: [
          'Một vòng lặp luôn mang lại kết quả tốt',
          'Một vòng lặp tự ổn định và giữ nguyên trạng thái',
          'Một vòng lặp tạo ra hiệu ứng quả cầu tuyết, nơi sự thay đổi ban đầu được khuếch đại theo thời gian',
          'Một vòng lặp luôn dẫn đến sự sụp đổ của hệ thống',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vòng lặp tăng cường (còn gọi là vòng lặp dương) khuếch đại sự thay đổi. Ví dụ: càng có nhiều người dùng một mạng xã hội, nó càng trở nên hấp dẫn hơn với người dùng mới, dẫn đến tăng trưởng theo cấp số nhân.',
      },
      {
        question: '"Điểm đòn bẩy" (leverage point) trong một hệ thống là gì?',
        options: [
          'Điểm yếu nhất của hệ thống',
          'Nơi mà một sự can thiệp nhỏ có thể tạo ra một sự thay đổi lớn cho toàn bộ hệ thống',
          'Vấn đề lớn nhất của hệ thống',
          'Người có quyền lực nhất trong hệ thống',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Theo Donella Meadows, điểm đòn bẩy là những vị trí chiến lược trong một hệ thống phức tạp nơi một sự thay đổi nhỏ có thể tạo ra những thay đổi lớn ở cấp độ hệ thống. Tìm ra và tác động vào các điểm này hiệu quả hơn nhiều so với việc cố gắng thay đổi mọi thứ.',
      },
    ],
    faqs: [
      {
        question: 'Tư duy hệ thống có quá phức tạp để áp dụng vào các vấn đề hàng ngày không?',
        answer:
          'Không hề. Bạn có thể bắt đầu một cách đơn giản. Ví dụ, khi bạn bị cảm, thay vì chỉ uống thuốc (giải pháp bề mặt), hãy tự hỏi: "Tại sao mình bị cảm?". Có thể là do thiếu ngủ, căng thẳng, hoặc ăn uống không đủ chất. Giải quyết những nguyên nhân gốc rễ đó chính là áp dụng tư duy hệ thống.',
      },
      {
        question: 'Làm thế nào để vẽ một Biểu đồ Nhân quả (Causal Loop Diagram) đơn giản?',
        answer:
          'Bắt đầu với một yếu tố (ví dụ: "Mức độ căng thẳng"). Sau đó, hỏi "Điều gì ảnh hưởng đến nó?" (ví dụ: "Khối lượng công việc") và vẽ một mũi tên. Tiếp tục hỏi "Nó ảnh hưởng đến điều gì?" (ví dụ: "Chất lượng giấc ngủ"). Kết nối các yếu tố lại với nhau và bạn sẽ bắt đầu thấy các vòng lặp hình thành.',
      },
      {
        question: 'Tại sao các giải pháp "rõ ràng" đôi khi lại làm vấn đề tồi tệ hơn?',
        answer:
          'Đây là một hiện tượng phổ biến trong các hệ thống phức tạp. Một giải pháp có thể có tác dụng tốt trong ngắn hạn nhưng lại tạo ra các hậu quả không mong muốn ở nơi khác hoặc trong dài hạn. Ví dụ, việc trợ cấp cho một ngành công nghiệp có thể cứu nó tạm thời nhưng lại làm nó mất đi khả năng cạnh tranh tự nhiên.',
      },
      {
        question: 'Tư duy hệ thống và tư duy phê phán liên quan đến nhau như thế nào?',
        answer:
          'Chúng là hai kỹ năng bổ trợ cho nhau. Tư duy phê phán giúp bạn phân tích và đánh giá các thành phần riêng lẻ của một lập luận hoặc vấn đề. Tư duy hệ thống giúp bạn đặt các thành phần đó vào một bối cảnh lớn hơn, hiểu được mối quan hệ tương tác và các tác động qua lại giữa chúng để có một cái nhìn toàn cảnh.',
      },
    ],
  },
];

export const criticalThinkingModuleData: ModuleData = {
  id: K2Module.CriticalThinking,
  title: 'Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo',
  subtitle: 'Phát triển tư duy logic và sáng tạo',
  description:
    'Khóa học toàn diện về tư duy phê phán và giải quyết vấn đề sáng tạo, được thiết kế đặc biệt cho học sinh phổ thông Việt Nam với case studies thực tế.',
  category: 'Kỹ năng thiết yếu',
  icon: '🧠',
  color: 'from-purple-600 to-pink-600',
  level: 'Trung bình',
  duration: '8-10 giờ',
  features: [
    'Logical reasoning frameworks',
    'Design thinking methodology',
    'Case studies từ Việt Nam',
    'Practical problem-solving exercises',
  ],
  prerequisites: ['Không có yêu cầu tiên quyết cụ thể', 'Có tinh thần mở và sẵn sàng challenge assumptions'],
  lessons: criticalThinkingLessons,
  objectives: [
    'Phát triển kỹ năng phân tích và đánh giá thông tin một cách khách quan.',
    'Học cách nhận diện và tránh các lỗi ngụy biện logic phổ biến.',
    'Nắm vững quy trình giải quyết vấn đề sáng tạo (Design Thinking).',
    'Áp dụng tư duy hệ thống để hiểu các vấn đề phức tạp.',
  ],
  careerOutcomes: [
    'Nâng cao khả năng học tập và nghiên cứu ở bậc đại học.',
    'Cải thiện kỹ năng ra quyết định trong công việc và cuộc sống.',
    'Trở thành một người giao tiếp và tranh luận hiệu quả hơn.',
  ],
  industryApplications: [],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'N/A',
  },
  relatedModules: [K2Module.CommunicationSkills, K2Module.ProfessionalSkills, K2Module.FutureThinking],
};
