import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData, CaseStudy, Exercise, QuizQuestion as Quiz, Resource } from '@/types/lesson-base';

export interface DigitalCitizenshipLessonType extends BaseLessonData {
  ethicalFrameworks?: string[];
  digitalRights?: string[];
  aiEthicsPrinciples?: string[];
  privacyTools?: string[];
  practicalScenarios?: {
    title: string;
    situation: string;
    ethicalDilemma: string;
    possibleActions: string[];
    recommendedApproach: string;
    reasoning: string;
  }[];
  exercises?: Exercise[];
  realWorldApplications: string[];
  caseStudies?: CaseStudy[];
  resources?: Resource[];
  vietnamContext?: {
    title: string;
    content: string[];
  };
  careerConnect?: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes?: Quiz[];
}

export const lessons: DigitalCitizenshipLessonType[] = [
  {
    id: 'digital-citizenship-fundamentals',
    title: 'Công Dân Số Cơ Bản',
    description:
      'Học cách trở thành công dân số có trách nhiệm trong thế giới kết nối. Hiểu quyền và nghĩa vụ trong không gian số.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=f4B0q2oOLbs', // Digital Citizenship Explained
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được khái niệm công dân số và tầm quan trọng',
      'Nắm vững các quyền và trách nhiệm trong không gian số',
      'Biết cách bảo vệ danh tính và quyền riêng tư cá nhân',
      'Phát triển kỹ năng sử dụng công nghệ có đạo đức',
    ],
    prerequisites: ['Có kiến thức cơ bản về internet và mạng xã hội', 'Hiểu biết về các thiết bị số phổ biến'],
    ethicalFrameworks: [
      'Quyền Con người trong Không gian Số',
      'Nguyên tắc Minh bạch và Trách nhiệm',
      'Ethics of Care trong Tương tác Số',
      'Công bằng và Bình đẳng Số',
    ],
    digitalRights: [
      'Quyền riêng tư dữ liệu cá nhân',
      'Quyền được quên (Right to be Forgotten)',
      'Quyền truy cập thông tin',
      'Quyền không bị phân biệt đối xử số',
    ],
    aiEthicsPrinciples: [
      'Tính minh bạch của thuật toán',
      'Tránh bias và phân biệt đối xử',
      'Trách nhiệm giải trình của AI',
      'Tính an toàn và bảo mật',
    ],
    privacyTools: [
      'Quản lý mật khẩu (Password Managers)',
      'VPN và mã hóa',
      'Two-Factor Authentication',
      'Privacy Settings trên các platform',
    ],
    practicalScenarios: [
      {
        title: 'Chia sẻ thông tin cá nhân',
        situation: 'Bạn được yêu cầu cung cấp số điện thoại để tải app miễn phí',
        ethicalDilemma: 'Có nên chia sẻ thông tin cá nhân để đổi lấy dịch vụ miễn phí?',
        possibleActions: [
          'Cung cấp số điện thoại thật',
          'Sử dụng số điện thoại ảo',
          'Từ chối và tìm app thay thế',
          'Đọc kỹ chính sách bảo mật trước khi quyết định',
        ],
        recommendedApproach: 'Đọc kỹ chính sách bảo mật, cân nhắc giá trị của app so với rủi ro, sử dụng số ảo nếu cần',
        reasoning:
          'Thông tin cá nhân có giá trị và cần được bảo vệ. Quyết định phải dựa trên hiểu biết đầy đủ về rủi ro.',
      },
      {
        title: 'AI tạo nội dung giả',
        situation: 'Bạn phát hiện một video deepfake của chính trị gia đang lan truyền',
        ethicalDilemma: 'Có nên chia sẻ để cảnh báo mọi người hay im lặng để không lan truyền thêm?',
        possibleActions: [
          'Chia sẻ ngay để cảnh báo',
          'Báo cáo cho platform và cơ quan chức năng',
          'Chia sẻ kèm thông tin fact-check',
          'Im lặng hoàn toàn',
        ],
        recommendedApproach: 'Báo cáo cho platform, chia sẻ thông tin fact-check đáng tin cậy thay vì video gốc',
        reasoning: 'Cần cân bằng giữa việc nâng cao nhận thức và không góp phần lan truyền thông tin sai lệch.',
      },
    ],
    exercises: [
      {
        title: 'Audit Kỹ Thuật Số Cá Nhân',
        description: 'Thực hiện kiểm tra toàn diện về dấu vết số của bản thân',
        difficulty: 'Trung bình',
        materials: ['Smartphone', 'Laptop/PC', 'Danh sách tài khoản online'],
        procedure: [
          'Liệt kê tất cả tài khoản mạng xã hội và dịch vụ online',
          'Kiểm tra privacy settings trên từng platform',
          'Google tên của bạn và phân tích kết quả',
          'Sử dụng Have I Been Pwned để kiểm tra data breach',
          'Đánh giá mức độ riêng tư của thông tin công khai',
          'Tạo plan cải thiện bảo mật và quyền riêng tư',
        ],
        expectedResults: 'Có được bức tranh tổng quan về dấu vết số và kế hoạch cải thiện bảo mật',
        solution:
          'Thực hiện theo từng bước, ghi chép chi tiết các phát hiện, ưu tiên xử lý những rủi ro cao nhất trước',
      },
      {
        title: 'Phân Tích Bias trong AI',
        description: 'Nghiên cứu và nhận diện các bias phổ biến trong hệ thống AI',
        difficulty: 'Nâng cao',
        materials: ['Truy cập internet', 'Các AI tool phổ biến'],
        procedure: [
          'Chọn 3 AI tool khác nhau (ChatGPT, Google Translate, recommendation system)',
          'Thiết kế câu hỏi test về gender, race, age bias',
          'Thu thập và phân tích responses',
          'So sánh kết quả giữa các tool',
          'Nghiên cứu nguyên nhân gây ra bias',
          'Đề xuất cách giảm thiểu impact của bias',
        ],
        expectedResults: 'Nhận thức sâu sắc về bias trong AI và cách xử lý',
        solution:
          'Bias thường xuất phát từ training data. Cần diversify input và critical thinking khi sử dụng AI outputs.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ thông tin cá nhân khi mua sắm online',
      'Nhận diện fake news và misinformation',
      'Sử dụng AI tools một cách có đạo đức trong công việc',
      'Tham gia vào các cuộc thảo luận về chính sách công nghệ',
      'Giáo dục người thân về an toàn số',
    ],
    caseStudies: [
      {
        title: 'Cambridge Analytica và Facebook',
        organization: 'Facebook và Cambridge Analytica',
        problem: 'Thu thập và sử dụng dữ liệu cá nhân của 87 triệu người dùng Facebook mà không có sự đồng ý',
        solution: 'Tăng cường quy định bảo mật, GDPR, cải thiện transparency',
        impact: 'Thay đổi cách thức các công ty tech xử lý dữ liệu cá nhân trên toàn cầu',
        innovations: ['Data portability', 'Explicit consent', 'Privacy by Design', 'Regular auditing'],
      },
      {
        title: 'AI Hiring Bias tại Amazon',
        organization: 'Amazon',
        problem: 'Hệ thống AI tuyển dụng có bias chống lại ứng viên nữ',
        solution: 'Dừng sử dụng hệ thống, redesign với diverse training data',
        impact: 'Nâng cao nhận thức về AI bias trong HR và recruitment',
        innovations: [
          'Bias testing framework',
          'Diverse training data',
          'Human-AI collaboration',
          'Ethical AI guidelines',
        ],
      },
    ],
    resources: [
      {
        title: 'Digital Citizenship Institute',
        url: 'https://www.digitalcitizenship.net',
        type: 'Website',
      },
      {
        title: 'AI Ethics Guidelines - EU',
        url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai',
        type: 'Documentation',
      },
      {
        title: 'Privacy Tools - Electronic Frontier Foundation',
        url: 'https://www.eff.org/deeplinks/2017/12/privacy-tools-2017',
        type: 'Tools',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Công dân số tại Việt Nam',
      content: [
        'Luật An ninh mạng 2018 là khung pháp lý quan trọng điều chỉnh hành vi trên không gian mạng tại Việt Nam, yêu cầu người dùng tuân thủ pháp luật và bảo vệ an ninh quốc gia.',
        'Chương trình Chuyển đổi số Quốc gia đến năm 2025, định hướng đến năm 2030, nhấn mạnh việc nâng cao nhận thức và kỹ năng số cho người dân, hướng tới một xã hội số an toàn và nhân văn.',
        'Tình trạng lừa đảo trực tuyến (online scams) ngày càng tinh vi tại Việt Nam, từ giả mạo cuộc gọi của cơ quan chức năng đến các chiêu trò "việc nhẹ lương cao", đòi hỏi người dân phải có kỹ năng nhận diện và phòng tránh.',
      ],
    },
    careerConnect: {
      name: 'Ông Ngô Tuấn Anh',
      title: 'Phó Chủ tịch, Hiệp hội An toàn Thông tin Việt Nam (VNISA)',
      company: 'VNISA',
      imageUrl: 'https://i.pravatar.cc/150?u=ngo-tuan-anh',
      quote:
        'Trở thành một công dân số có trách nhiệm không chỉ là bảo vệ bản thân mà còn là góp phần xây dựng một không gian mạng Việt Nam lành mạnh. Kỹ năng số và nhận thức về an toàn thông tin là hành trang không thể thiếu trong thế kỷ 21.',
    },
    quizzes: [
      {
        question: 'Theo Luật An ninh mạng của Việt Nam, hành vi nào sau đây bị cấm trên không gian mạng?',
        options: [
          'Bày tỏ quan điểm cá nhân',
          'Chia sẻ thông tin khoa học',
          'Xúc phạm danh dự, nhân phẩm của người khác',
          'Mua sắm trực tuyến',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Luật An ninh mạng nghiêm cấm các hành vi như đăng tải thông tin sai sự thật, xúc phạm danh dự, nhân phẩm của tổ chức, cá nhân, và các hành vi khác xâm phạm an ninh quốc gia, trật tự an toàn xã hội.',
      },
      {
        question:
          'Bạn nhận được một tin nhắn SMS thông báo trúng thưởng một chiếc xe máy và yêu cầu bạn nhấp vào một liên kết để nhận giải. Đây có khả năng là hình thức tấn công nào?',
        options: [
          'Phishing (Lừa đảo giả mạo)',
          'Malware (Phần mềm độc hại)',
          'Spam (Thư rác)',
          'Tất cả các phương án trên',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đây là một hình thức lừa đảo giả mạo (phishing) phổ biến, nhằm mục đích lừa người dùng nhấp vào liên kết độc hại để đánh cắp thông tin cá nhân hoặc tài khoản ngân hàng.',
      },
    ],
    faqs: [
      {
        question: 'Công dân số là gì và tại sao nó lại quan trọng?',
        answer:
          'Công dân số là một người có kỹ năng, kiến thức và thái độ để tham gia vào xã hội số một cách an toàn, có trách nhiệm và đạo đức. Điều này quan trọng vì hầu hết mọi khía cạnh của cuộc sống hiện đại, từ giao tiếp, học tập đến làm việc, đều có yếu tố kỹ thuật số.',
      },
      {
        question: 'Làm thế nào để bảo vệ danh tính số của tôi?',
        answer:
          'Hãy bắt đầu với những điều cơ bản: sử dụng mật khẩu mạnh và duy nhất cho mỗi tài khoản, bật xác thực hai yếu tố (2FA) ở mọi nơi có thể, cẩn thận với những thông tin bạn chia sẻ công khai và thường xuyên kiểm tra cài đặt quyền riêng tư trên các tài khoản mạng xã hội của bạn.',
      },
      {
        question: 'Thiên vị thuật toán (algorithmic bias) là gì?',
        answer:
          'Thiên vị thuật toán xảy ra khi một hệ thống AI tạo ra các kết quả không công bằng hoặc mang tính định kiến, thường là do dữ liệu huấn luyện của nó phản ánh những định kiến đã có trong xã hội. Ví dụ, một AI tuyển dụng có thể ưu tiên ứng viên nam nếu nó được huấn luyện chủ yếu trên dữ liệu lịch sử tuyển dụng của nam giới.',
      },
      {
        question: 'Quyền được lãng quên (Right to be Forgotten) có nghĩa là gì?',
        answer:
          'Đây là quyền cho phép cá nhân yêu cầu các tổ chức xóa dữ liệu cá nhân của họ trong một số trường hợp nhất định, ví dụ như khi thông tin đó không còn cần thiết hoặc đã lỗi thời. Đây là một quyền quan trọng để kiểm soát dấu vết kỹ thuật số của một người.',
      },
      {
        question: 'Dấu chân kỹ thuật số (digital footprint) là gì?',
        answer:
          'Là tập hợp tất cả các dấu vết bạn để lại khi hoạt động trực tuyến. Nó bao gồm cả dấu vết chủ động (những gì bạn tự đăng tải) và dấu vết thụ động (dữ liệu được thu thập khi bạn duyệt web). Quản lý dấu chân kỹ thuật số là một phần quan trọng của việc bảo vệ danh tính.',
      },
      {
        question: 'Tại sao không nên sử dụng cùng một mật khẩu cho nhiều tài khoản?',
        answer:
          'Nếu một trong các dịch vụ bạn sử dụng bị rò rỉ dữ liệu, kẻ tấn công có thể sử dụng mật khẩu đó để thử đăng nhập vào tất cả các tài khoản khác của bạn (email, ngân hàng, mạng xã hội). Đây được gọi là tấn công "credential stuffing".',
      },
      {
        question: 'Làm thế nào để nhận biết một trang web an toàn (sử dụng HTTPS)?',
        answer:
          'Hãy nhìn vào thanh địa chỉ của trình duyệt. Một trang web an toàn sẽ bắt đầu bằng "https://"" và thường có biểu tượng ổ khóa. HTTPS mã hóa dữ liệu truyền đi giữa bạn và trang web, giúp bảo vệ thông tin nhạy cảm như mật khẩu và thông tin thẻ tín dụng.',
      },
      {
        question: 'Netiquette là gì?',
        answer:
          'Netiquette (viết tắt của "network etiquette") là bộ quy tắc ứng xử trên không gian mạng. Nó bao gồm các nguyên tắc như tôn trọng người khác, không viết hoa toàn bộ (được coi là la hét), kiểm tra lại thông tin trước khi chia sẻ, và không tham gia vào các cuộc tranh cãi vô bổ.',
      },
      {
        question: 'Tôi nên làm gì nếu bị bắt nạt trực tuyến (cyberbullying)?',
        answer:
          'Đừng trả lời. Hãy lưu lại bằng chứng (chụp màn hình), chặn người đó, và báo cáo hành vi cho nền tảng. Quan trọng nhất, hãy chia sẻ với một người lớn mà bạn tin tưởng như cha mẹ, thầy cô, hoặc chuyên gia tư vấn.',
      },
      {
        question: 'Tại sao việc cập nhật phần mềm lại quan trọng?',
        answer:
          'Các bản cập nhật phần mềm không chỉ mang lại tính năng mới mà còn thường xuyên vá các lỗ hổng bảo mật mà tin tặc có thể khai thác. Việc không cập nhật khiến thiết bị của bạn dễ bị tấn công bởi virus và phần mềm độc hại.',
      },
    ],
  },
  {
    id: 'ai-ethics-deep-dive',
    title: 'Đạo Đức AI Chuyên Sâu',
    description: 'Khám phá sâu các vấn đề đạo đức phức tạp trong AI, từ bias đến explainability và impact xã hội.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=KPSiXj9wTnM', // AI Ethics: Crash Course Philosophy
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    objectives: [
      'Phân tích các vấn đề đạo đức phức tạp trong AI',
      'Hiểu về algorithmic bias và cách giảm thiểu',
      'Nắm vững các framework đánh giá đạo đức AI',
      'Phát triển kỹ năng đánh giá impact xã hội của AI',
    ],
    prerequisites: ['Đã hoàn thành bài học Công Dân Số Cơ Bản', 'Có hiểu biết cơ bản về AI và machine learning'],
    ethicalFrameworks: [
      'Utilitarian Ethics in AI',
      'Deontological Approach to AI',
      'Virtue Ethics for AI Development',
      'Care Ethics in Human-AI Interaction',
    ],
    digitalRights: [
      'Quyền giải thích về quyết định AI',
      'Quyền không bị profiling tự động',
      'Quyền can thiệp con người',
      'Quyền bồi thường khi AI gây hại',
    ],
    aiEthicsPrinciples: [
      'Fairness và Non-discrimination',
      'Transparency và Explainability',
      'Accountability và Responsibility',
      'Privacy và Data Protection',
      'Human Agency và Oversight',
      'Technical Robustness và Safety',
    ],
    privacyTools: ['Differential Privacy', 'Homomorphic Encryption', 'Federated Learning', 'Privacy-Preserving ML'],
    practicalScenarios: [
      {
        title: 'AI trong Tuyển dụng',
        situation:
          'Công ty sử dụng AI để sàng lọc CV, nhưng AI có xu hướng loại trừ ứng viên từ một số trường đại học nhất định',
        ethicalDilemma: 'Làm thế nào cân bằng giữa hiệu quả và công bằng trong tuyển dụng?',
        possibleActions: [
          'Tiếp tục sử dụng vì hiệu quả cao',
          'Điều chỉnh thuật toán để giảm bias',
          'Kết hợp AI với review của con người',
          'Minh bạch về cách AI hoạt động với ứng viên',
        ],
        recommendedApproach: 'Kết hợp AI với human oversight, regular bias testing, và transparency với ứng viên',
        reasoning: 'Cần cân bằng giữa hiệu quả và fairness, đồng thời đảm bảo ứng viên hiểu về process.',
      },
      {
        title: 'Healthcare AI và Quyền riêng tư',
        situation: 'AI chẩn đoán y khoa có thể cứu sống nhiều người nhưng cần access vào data nhạy cảm',
        ethicalDilemma: 'Cân bằng giữa lợi ích sức khỏe cộng đồng và quyền riêng tư cá nhân?',
        possibleActions: [
          'Thu thập data không giới hạn vì lợi ích chung',
          'Sử dụng data đã được anonymized',
          'Áp dụng differential privacy',
          'Chỉ sử dụng data với explicit consent',
        ],
        recommendedApproach: 'Sử dụng privacy-preserving techniques kết hợp với informed consent và strong governance',
        reasoning: 'Có thể đạt được cả hai mục tiêu thông qua advanced privacy techniques và ethical frameworks.',
      },
    ],
    exercises: [
      {
        title: 'Ethical Impact Assessment',
        description: 'Thực hiện đánh giá tác động đạo đức cho một AI system',
        difficulty: 'Nâng cao',
        materials: ['Case study về AI system', 'Ethical framework template'],
        procedure: [
          'Chọn một AI system thực tế (facial recognition, recommendation, autonomous vehicle)',
          'Áp dụng multiple ethical frameworks để phân tích',
          'Identify các stakeholder và impact lên từng nhóm',
          'Đánh giá rủi ro và benefits',
          'Đề xuất mitigation strategies',
          'Tạo action plan và monitoring system',
        ],
        expectedResults: 'Comprehensive ethical assessment và actionable recommendations',
        solution: 'Sử dụng structured approach với multiple perspectives, quan tâm đặc biệt đến marginalized groups.',
      },
      {
        title: 'Bias Detection Lab',
        description: 'Hands-on experiment để detect và mitigate bias trong ML models',
        difficulty: 'Nâng cao',
        materials: ['Dataset mẫu', 'Python/R environment', 'Bias detection tools'],
        procedure: [
          'Load và explore một dataset có potential bias',
          'Train simple ML model',
          'Sử dụng các metrics để detect bias (demographic parity, equalized odds)',
          'Implement bias mitigation techniques',
          'Compare performance trước và sau mitigation',
          'Document findings và recommendations',
        ],
        expectedResults: 'Hiểu biết practical về bias detection và mitigation',
        solution: 'Bias thường trade-off với accuracy. Cần balance based on ethical principles và use case context.',
      },
    ],
    realWorldApplications: [
      'Đánh giá ethical implications của AI tools trong công việc',
      'Participate trong AI governance và policy discussions',
      'Design AI systems với ethical considerations',
      'Educate và advocate cho responsible AI adoption',
      'Implement bias testing trong AI development workflows',
    ],
    caseStudies: [
      {
        title: 'Clearview AI và Facial Recognition',
        organization: 'Clearview AI',
        problem: 'Scraping billions ảnh từ internet cho facial recognition mà không có consent',
        solution: 'Legal challenges, regulatory restrictions, company policy changes',
        impact: 'Stricter regulations cho facial recognition, increased privacy awareness',
        innovations: [
          'Consent-based data collection',
          'Privacy-preserving facial recognition',
          'Regulatory frameworks',
          'Ethical use guidelines',
        ],
      },
      {
        title: 'GPT và Misinformation Risk',
        organization: 'OpenAI',
        problem: 'Large language models có thể generate convincing misinformation',
        solution: 'Safety measures, usage policies, red teaming, alignment research',
        impact: 'Industry-wide focus on AI safety và responsible deployment',
        innovations: [
          'Constitutional AI',
          'RLHF (Reinforcement Learning from Human Feedback)',
          'Safety evaluations',
          'Staged deployment',
        ],
      },
    ],
    resources: [
      {
        title: 'Partnership on AI',
        url: 'https://www.partnershiponai.org',
        type: 'Website',
      },
      {
        title: 'AI Ethics Lab - MIT',
        url: 'https://aiethicslab.com',
        type: 'Research',
      },
      {
        title: 'Algorithmic Accountability Act',
        url: 'https://www.congress.gov/bill/117th-congress/house-bill/6580',
        type: 'Policy',
      },
    ],
    vietnamContext: {
      title: 'Đạo đức AI trong bối cảnh Việt Nam',
      content: [
        'Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo đến năm 2030 của Việt Nam nhấn mạnh việc xây dựng các hệ thống AI có trách nhiệm, đáng tin cậy và minh bạch.',
        'Các công ty công nghệ Việt Nam như FPT, Viettel, Zalo đang tích cực phát triển các ứng dụng AI trong nhiều lĩnh vực, từ trợ lý ảo, nhận dạng giọng nói tiếng Việt đến xử lý hình ảnh. Điều này đặt ra các câu hỏi đạo đức về thu thập dữ liệu và quyền riêng tư.',
        'Việc triển khai camera giám sát thông minh sử dụng AI tại các thành phố lớn như Hà Nội và TP.HCM đang gây ra các cuộc tranh luận về sự cân bằng giữa an ninh công cộng và quyền riêng tư của công dân.',
      ],
    },
    careerConnect: {
      name: 'TS. Bùi Hải Hưng',
      title: 'Viện trưởng Viện Nghiên cứu Trí tuệ nhân tạo VinAI',
      company: 'VinAI (VinGroup)',
      imageUrl: 'https://i.pravatar.cc/150?u=bui-hai-hung',
      quote:
        'Phát triển AI tại Việt Nam không chỉ là cuộc đua về công nghệ mà còn là cuộc đua về đạo đức. Chúng tôi cam kết xây dựng những sản phẩm AI không chỉ thông minh mà còn phục vụ con người một cách công bằng và có trách nhiệm, tôn trọng các giá trị văn hóa Việt Nam.',
    },
    quizzes: [
      {
        question:
          'Một hệ thống AI chấm điểm tín dụng ở Việt Nam có xu hướng cho điểm thấp hơn đối với những người sống ở khu vực nông thôn. Đây là ví dụ về vấn đề gì?',
        options: [
          'Thiên vị thuật toán (Algorithmic Bias)',
          'Thiếu khả năng giải thích (Lack of Explainability)',
          'An toàn hệ thống (System Safety)',
          'Hiệu suất thấp (Low Performance)',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đây là một ví dụ điển hình về thiên vị thuật toán, khi mô hình AI học được các định kiến có sẵn trong dữ liệu lịch sử, dẫn đến các quyết định không công bằng đối với một nhóm người nhất định.',
      },
      {
        question: '"Explainability" (Khả năng giải thích) trong đạo đức AI có nghĩa là gì?',
        options: [
          'AI có thể giải thích mọi thứ trên thế giới',
          'Con người có thể hiểu được tại sao AI lại đưa ra một quyết định cụ thể',
          'AI có thể tự sửa lỗi',
          'AI có thể nói chuyện như người',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Khả năng giải thích đòi hỏi các quyết định của AI không phải là "hộp đen", mà phải có khả năng được diễn giải và hiểu bởi con người, đặc biệt trong các lĩnh vực có ảnh hưởng lớn như y tế hay tài chính.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao "đạo đức AI" lại trở thành một chủ đề nóng như vậy?',
        answer:
          'Vì AI ngày càng có quyền lực lớn trong việc đưa ra các quyết định ảnh hưởng đến cuộc sống con người, từ việc bạn có được vay vốn ngân hàng hay không, đến việc chẩn đoán bệnh. Nếu không có sự giám sát về đạo đức, AI có thể gây ra những tác hại nghiêm trọng và khuếch đại sự bất công trong xã hội.',
      },
      {
        question: 'Sự khác biệt giữa đạo đức (ethics) và luật pháp (law) trong AI là gì?',
        answer:
          'Luật pháp là những quy tắc tối thiểu mà mọi người phải tuân theo. Đạo đức là những nguyên tắc cao hơn về điều gì là đúng đắn và công bằng. Thường thì các cuộc thảo luận về đạo đức sẽ đi trước và định hình cho việc xây dựng luật pháp trong tương lai. Một hành động có thể hợp pháp nhưng lại không có đạo đức.',
      },
      {
        question: 'Vấn đề "hộp đen" (black box) trong AI là gì?',
        answer:
          'Đây là tình trạng mà ngay cả những người tạo ra mô hình AI cũng không thể giải thích đầy đủ tại sao nó lại đưa ra một quyết định cụ thể. Điều này đặc biệt nguy hiểm trong các lĩnh vực quan trọng như y tế hoặc tư pháp, nơi việc giải trình là tối quan trọng.',
      },
      {
        question: 'Là một người dùng bình thường, tôi có thể làm gì để thúc đẩy đạo đức AI?',
        answer:
          'Bạn có thể: 1/ Lựa chọn sử dụng sản phẩm từ các công ty minh bạch về cách họ sử dụng AI. 2/ Lên tiếng khi bạn phát hiện các trường hợp AI hoạt động một cách thiên vị hoặc không công bằng. 3/ Tự giáo dục bản thân về các vấn đề đạo đức AI để có những cuộc thảo luận sáng suốt. 4/ Ủng hộ các chính sách và quy định yêu cầu sự minh bạch và trách nhiệm giải trình từ các hệ thống AI.',
      },
      {
        question: 'Vấn đề "Trolley Problem" liên quan đến đạo đức AI như thế nào?',
        answer:
          'Vấn đề xe đẩy (Trolley Problem) là một thí nghiệm tưởng tượng về đạo đức, thường được dùng để thảo luận về cách lập trình cho xe tự lái. Ví dụ: xe nên chọn đâm vào một người đi bộ để cứu hành khách, hay hy sinh hành khách để cứu người đi bộ? Nó cho thấy sự phức tạp của việc mã hóa các quyết định đạo đức vào máy móc.',
      },
      {
        question: 'Trách nhiệm giải trình (Accountability) trong AI có nghĩa là gì?',
        answer:
          'Là khả năng xác định ai là người chịu trách nhiệm khi một hệ thống AI gây ra lỗi hoặc tác hại. Đó có thể là nhà phát triển, công ty triển khai, hay người dùng? Việc thiếu một cơ chế trách nhiệm giải trình rõ ràng là một trong những thách thức lớn nhất của đạo đức AI.',
      },
      {
        question: '"Human-in-the-loop" là gì?',
        answer:
          'Đây là một mô hình hợp tác giữa người và AI, trong đó con người giữ vai trò giám sát, can thiệp, và đưa ra quyết định cuối cùng trong các trường hợp quan trọng. Điều này giúp giảm thiểu rủi ro từ các quyết định hoàn toàn tự động của AI.',
      },
      {
        question: 'Tại sao tính đa dạng trong các nhóm phát triển AI lại quan trọng?',
        answer:
          'Một nhóm phát triển đa dạng về giới tính, chủng tộc, và nền tảng văn hóa có nhiều khả năng nhận ra và giải quyết các thiên vị tiềm ẩn trong dữ liệu và thuật toán hơn. Điều này giúp tạo ra các sản phẩm AI công bằng và phục vụ tốt hơn cho tất cả mọi người.',
      },
      {
        question: 'AI có thể có cảm xúc hoặc ý thức không?',
        answer:
          'Các mô hình AI hiện tại, kể cả những mô hình phức tạp nhất, không có cảm xúc, ý thức, hay sự hiểu biết thực sự. Chúng là những cỗ máy xử lý mẫu cực kỳ tinh vi, có khả năng mô phỏng các cuộc trò chuyện và hành vi của con người, nhưng chúng không "cảm nhận" được bất cứ điều gì.',
      },
      {
        question: '"AI Alignment" là gì?',
        answer:
          'AI Alignment là lĩnh vực nghiên cứu nhằm đảm bảo rằng các mục tiêu và hành vi của các hệ thống AI tiên tiến phù hợp với các giá trị và ý định của con người. Đây được coi là một vấn đề an toàn dài hạn cực kỳ quan trọng khi AI ngày càng trở nên mạnh mẽ hơn.',
      },
    ],
  },
  {
    id: 'digital-wellness-mindful-tech',
    title: 'Sức Khỏe Số và Công Nghệ Chánh Niệm',
    description:
      'Học cách duy trì sức khỏe tinh thần và thể chất trong thời đại số, sử dụng công nghệ một cách cân bằng và có ý thức.',
    duration: '100 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=NUMa0QkPzns', // Digital Wellness
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về digital wellness và tầm quan trọng',
      'Nhận diện signs của technology addiction',
      'Phát triển healthy digital habits',
      'Tạo ra digital-life balance bền vững',
    ],
    prerequisites: ['Có sử dụng thường xuyên các thiết bị số', 'Nhận thức về impact của technology lên cuộc sống'],
    ethicalFrameworks: [
      'Mindful Technology Use',
      'Digital Minimalism Principles',
      'Attention Economics Ethics',
      'Well-being First Approach',
    ],
    digitalRights: [
      'Quyền disconnect khỏi technology',
      'Quyền not be tracked và monitored',
      'Quyền có mental space không bị interrupt',
      'Quyền control attention và focus',
    ],
    aiEthicsPrinciples: [
      'Human-centered AI design',
      'Respectful của human attention',
      'Transparent về addictive features',
      'Supportive của human well-being',
    ],
    privacyTools: [
      'Digital wellness apps',
      'Screen time tracking tools',
      'Focus và productivity apps',
      'Meditation và mindfulness apps',
    ],
    practicalScenarios: [
      {
        title: 'Social Media FOMO',
        situation: 'Bạn cảm thấy lo lắng và tủi thân sau khi scroll social media',
        ethicalDilemma: 'Có nên tiếp tục sử dụng social media khi nó impact negative lên mental health?',
        possibleActions: [
          'Delete hoàn toàn social media',
          'Giới hạn thời gian sử dụng',
          'Curate content để positive hơn',
          'Tìm hiểu root causes của FOMO',
        ],
        recommendedApproach: 'Combination của time limits, mindful consumption, và address underlying needs',
        reasoning: 'Social media có benefits nhưng cần được sử dụng một cách có ý thức và healthy.',
      },
      {
        title: 'Work-from-Home Digital Boundaries',
        situation: 'Làm việc từ xa khiến bạn online 24/7, khó tách biệt work-life',
        ethicalDilemma: 'Cân bằng giữa availability cho work và personal well-being?',
        possibleActions: [
          'Set strict work hours và stick to them',
          'Sử dụng separate devices cho work và personal',
          'Create physical boundaries trong living space',
          'Communicate expectations với colleagues',
        ],
        recommendedApproach: 'Multi-layered approach với clear boundaries, communication, và self-discipline',
        reasoning: 'Digital boundaries là essential cho long-term productivity và mental health.',
      },
    ],
    exercises: [
      {
        title: 'Digital Detox Challenge',
        description: 'Thực hiện 7-day digital detox với various levels of restriction',
        difficulty: 'Trung bình',
        materials: ['Smartphone', 'Journal/notebook', 'Alternative activities list'],
        procedure: [
          'Day 1-2: No social media, keep essential apps',
          'Day 3-4: Limit smartphone to calls/texts only',
          'Day 5-6: Designate phone-free hours (evening)',
          'Day 7: Complete digital sabbath (emergency only)',
          'Journal experience mỗi ngày',
          'Track mood, productivity, và sleep quality',
          'Plan sustainable long-term changes',
        ],
        expectedResults: 'Increased awareness của digital habits và improved well-being',
        solution:
          'Start small, replace digital habits với positive alternatives, focus on benefits rather than restrictions.',
      },
      {
        title: 'Attention Audit',
        description: 'Analyze và optimize attention patterns throughout the day',
        difficulty: 'Cơ bản',
        materials: ['Time tracking app', 'Attention log template'],
        procedure: [
          'Track attention switching pattern for 3 days',
          'Note triggers gây distraction',
          'Measure deep work periods',
          'Identify peak performance times',
          'Design optimal daily attention schedule',
          'Implement changes và measure impact',
        ],
        expectedResults: 'Optimized attention management và increased focus capacity',
        solution: 'Batch similar tasks, eliminate unnecessary notifications, create distraction-free environments.',
      },
    ],
    realWorldApplications: [
      'Thiết lập healthy work-from-home routines',
      'Parenting trong digital age',
      'Managing screen time cho entire family',
      'Creating mindful technology policies tại workplace',
      'Supporting others trong digital wellness journey',
    ],
    caseStudies: [
      {
        title: "Norway's Right to Disconnect",
        organization: 'Norwegian Government',
        problem: 'Employees bị burnout do always-on work culture',
        solution: 'Legal right to disconnect after work hours',
        impact: 'Improved work-life balance, reduced stress, increased productivity',
        innovations: ['Legal frameworks', 'Company policy changes', 'Cultural shifts', 'Technology design changes'],
      },
      {
        title: "Apple's Screen Time Features",
        organization: 'Apple Inc.',
        problem: 'Concerns về smartphone addiction và mental health impact',
        solution: 'Built-in screen time tracking và control features',
        impact: 'Industry-wide adoption của digital wellness features',
        innovations: ['App usage tracking', 'Parental controls', 'Focus modes', 'Mindful notifications'],
      },
    ],
    resources: [
      {
        title: 'Center for Humane Technology',
        url: 'https://www.humanetech.com',
        type: 'Website',
      },
      {
        title: 'Digital Wellness Institute',
        url: 'https://www.digitalwellnessinstitute.com',
        type: 'Research',
      },
      {
        title: 'Time Well Spent Movement',
        url: 'https://medium.com/time-well-spent',
        type: 'Community',
      },
    ],
    vietnamContext: {
      title: 'Sức khỏe số trong Xã hội Việt Nam hiện đại',
      content: [
        'Việt Nam là một trong những quốc gia có tỷ lệ sử dụng mạng xã hội cao nhất thế giới, đặc biệt là ở giới trẻ. Điều này dẫn đến những lo ngại về "nghiện" mạng xã hội và các tác động tiêu cực đến sức khỏe tâm thần như lo âu, trầm cảm và hội chứng FOMO (sợ bỏ lỡ).',
        'Vấn nạn "nghiện game" online là một vấn đề xã hội được quan tâm tại Việt Nam, ảnh hưởng đến kết quả học tập và sức khỏe của thanh thiếu niên. Nhiều gia đình đang tìm kiếm các giải pháp để giúp con em cân bằng giữa giải trí và cuộc sống.',
        'Trào lưu "digital detox" (cai nghiện số) và thực hành chánh niệm (mindfulness) đang dần trở nên phổ biến ở các thành phố lớn, nơi mọi người tìm cách ngắt kết nối với thiết bị số để tái tạo năng lượng và kết nối với cuộc sống thực.',
      ],
    },
    careerConnect: {
      name: 'ThS. Nguyễn Thị Tâm',
      title: 'Chuyên gia Tâm lý, Trung tâm Mindful Way',
      company: 'Mindful Way',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-tam',
      quote:
        'Công nghệ không xấu, nhưng cách chúng ta sử dụng nó có thể gây hại. Sức khỏe số không phải là từ bỏ công nghệ, mà là học cách làm chủ nó. Bằng cách thực hành chánh niệm, chúng ta có thể sử dụng điện thoại một cách có ý thức, thay vì để nó điều khiển chúng ta.',
    },
    quizzes: [
      {
        question: 'Hội chứng FOMO (Fear Of Missing Out) thường liên quan đến việc sử dụng nền tảng nào nhiều nhất?',
        options: ['Email', 'Ứng dụng đọc báo', 'Mạng xã hội (Facebook, Instagram, TikTok)', 'Phần mềm văn phòng'],
        correctAnswerIndex: 2,
        explanation:
          'Mạng xã hội thường là nơi mọi người chia sẻ những khoảnh khắc nổi bật, được tô hồng trong cuộc sống, dễ gây ra cảm giác so sánh và sợ hãi rằng mình đang bỏ lỡ những trải nghiệm thú vị mà người khác có.',
      },
      {
        question: 'Phương pháp nào sau đây KHÔNG phải là một chiến lược tốt để cải thiện sức khỏe số?',
        options: [
          'Tắt thông báo (notifications) không cần thiết',
          'Kiểm tra điện thoại ngay khi thức dậy để không bỏ lỡ tin tức',
          'Đặt ra những khoảng thời gian "không điện thoại" trong ngày',
          'Sử dụng các ứng dụng theo dõi thời gian sử dụng màn hình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Kiểm tra điện thoại ngay khi thức dậy sẽ khiến não bộ bị quá tải với thông tin và các yêu cầu từ bên ngoài, làm giảm khả năng tập trung và bắt đầu ngày mới một cách chủ động. Đây là một thói quen xấu cần thay đổi.',
      },
    ],
    faqs: [
      {
        question: 'Digital Wellness (Sức khỏe số) có phải là anti-technology (chống lại công nghệ) không?',
        answer:
          'Hoàn toàn không. Sức khỏe số không phải là từ bỏ công nghệ, mà là xây dựng một mối quan hệ lành mạnh với nó. Đó là việc sử dụng công nghệ một cách có chủ đích để phục vụ cho các giá trị và mục tiêu của bạn, thay vì để công nghệ điều khiển sự chú ý và thời gian của bạn.',
      },
      {
        question: 'Tại sao các ứng dụng mạng xã hội lại có thể gây "nghiện"?',
        answer:
          'Nhiều ứng dụng được thiết kế dựa trên "kinh tế học chú ý" (attention economy), sử dụng các cơ chế tâm lý như phần thưởng ngẫu nhiên (giống như máy đánh bạc), thông báo liên tục, và dòng tin vô tận (infinite scroll) để giữ chân người dùng càng lâu càng tốt. Những cơ chế này có thể kích hoạt hệ thống tưởng thưởng dopamine trong não, tạo ra một vòng lặp gây nghiện.',
      },
      {
        question: 'Digital Minimalism (Chủ nghĩa tối giản số) là gì?',
        answer:
          'Đó là một triết lý sử dụng công nghệ, trong đó bạn tập trung vào một số ít các công cụ được lựa chọn cẩn thận và tối ưu hóa chúng để phục vụ cho những điều bạn thực sự coi trọng, và vui vẻ bỏ lỡ mọi thứ khác. Nó không phải là về việc có ít công nghệ hơn, mà là về việc có công nghệ "tốt hơn".',
      },
      {
        question: 'Làm thế nào để bắt đầu một cuộc "digital detox" (cai nghiện số) mà không cảm thấy bị cô lập?',
        answer:
          'Hãy thông báo cho bạn bè và gia đình về kế hoạch của bạn. Bắt đầu từ những khoảng thời gian nhỏ, ví dụ như "không điện thoại trong bữa tối" hoặc "không mạng xã hội sau 9 giờ tối". Tìm các hoạt động thay thế thú vị để lấp đầy khoảng thời gian đó, như đọc sách, đi dạo, hoặc trò chuyện trực tiếp với người thân.',
      },
      {
        question: 'Doomscrolling là gì?',
        answer:
          'Doomscrolling (hay doomsurfing) là hành vi liên tục cuộn và đọc các tin tức tiêu cực trên mạng xã hội hoặc các trang tin tức, mặc dù những tin tức đó khiến bạn cảm thấy buồn bã, lo lắng hoặc chán nản. Đây là một thói quen có hại cho sức khỏe tâm thần.',
      },
      {
        question: 'Làm thế nào để thiết lập ranh giới kỹ thuật số với công việc?',
        answer:
          'Hãy đặt ra giờ làm việc cụ thể và tuân thủ nó. Tắt thông báo email và tin nhắn công việc ngoài giờ làm việc. Nếu có thể, hãy sử dụng các thiết bị hoặc tài khoản riêng cho công việc và cá nhân. Quan trọng nhất là trao đổi rõ ràng về ranh giới này với đồng nghiệp và cấp trên.',
      },
      {
        question: 'Chánh niệm (mindfulness) có thể giúp ích gì cho sức khỏe số?',
        answer:
          'Chánh niệm giúp bạn nhận thức được những gì đang xảy ra trong thời điểm hiện tại mà không phán xét. Khi áp dụng vào công nghệ, nó giúp bạn nhận ra khi nào bạn đang sử dụng điện thoại một cách vô thức và cho bạn sức mạnh để đưa ra lựa chọn có ý thức hơn, ví dụ như đặt điện thoại xuống và tập trung vào cuộc trò chuyện trước mặt.',
      },
      {
        question: '"JOMO" là gì và tại sao nó lại tốt hơn FOMO?',
        answer:
          'JOMO là viết tắt của "Joy of Missing Out" (Niềm vui khi bỏ lỡ). Nó đối lập với FOMO. JOMO là cảm giác hài lòng khi bạn ngắt kết nối với thế giới kỹ thuật số để tập trung vào những gì quan trọng với bạn trong thế giới thực. Nó khuyến khích sự hiện diện và hài lòng với hiện tại.',
      },
      {
        question: 'Tôi nên làm gì để giảm mỏi mắt khi sử dụng máy tính nhiều?',
        answer:
          'Hãy áp dụng quy tắc 20-20-20: cứ sau 20 phút làm việc, hãy nhìn ra xa một vật gì đó cách 20 feet (khoảng 6 mét) trong vòng 20 giây. Ngoài ra, hãy đảm bảo màn hình của bạn ở ngang tầm mắt và có đủ ánh sáng trong phòng.',
      },
      {
        question: 'Làm thế nào để giúp trẻ em xây dựng thói quen kỹ thuật số lành mạnh?',
        answer:
          'Hãy làm gương bằng chính hành vi của bạn. Thiết lập các quy tắc rõ ràng về thời gian và không gian sử dụng thiết bị (ví dụ: không dùng điện thoại trong phòng ngủ hoặc trong bữa ăn). Cùng trẻ tham gia các hoạt động không liên quan đến màn hình và trò chuyện cởi mở về những trải nghiệm trực tuyến của chúng.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ethicalFrameworks,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    digitalRights,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    aiEthicsPrinciples,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    privacyTools,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    practicalScenarios,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    vietnamContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    careerConnect,
    ...baseLesson
  } = lesson;
  return {
    ...baseLesson,
    realWorldApplications: lesson.realWorldApplications || [],
  };
});

export const digitalCitizenshipAiEthicsModuleData: ModuleData = {
  id: K2Module.DigitalCitizenship,
  title: 'Công Dân Số và Đạo Đức AI',
  subtitle: 'Trách nhiệm trong thế giới số',
  description:
    'Học cách trở thành công dân số có trách nhiệm, hiểu về đạo đức AI và bảo vệ quyền riêng tư trong thời đại kỹ thuật số.',
  category: 'Kỹ năng thiết yếu',
  icon: '🛡️',
  color: 'from-blue-600 to-indigo-600',
  level: 'Trung bình',
  duration: '5-6 giờ',
  features: [
    'Quyền và trách nhiệm trong không gian số',
    'Đạo đức AI và bias detection',
    'Bảo vệ quyền riêng tư cá nhân',
    'Digital wellness và mindful tech',
  ],
  prerequisites: ['Sử dụng internet và mạng xã hội cơ bản', 'Quan tâm đến vấn đề đạo đức công nghệ'],
  objectives: [
    'Hiểu được khái niệm công dân số và tầm quan trọng.',
    'Nắm vững các quyền và trách nhiệm trong không gian số.',
    'Biết cách bảo vệ danh tính và quyền riêng tư cá nhân.',
    'Phát triển kỹ năng sử dụng công nghệ có đạo đức.',
    'Phân tích các vấn đề đạo đức phức tạp trong AI.',
  ],
  careerOutcomes: [
    'Chuyên viên chính sách công nghệ',
    'Chuyên gia tư vấn đạo đức AI',
    'Nhà quản lý cộng đồng trực tuyến',
    'Giáo viên/Giảng viên về công dân số',
  ],
  lessons: transformedLessons,
  industryApplications: [],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'N/A',
  },
  relatedModules: [],
};
