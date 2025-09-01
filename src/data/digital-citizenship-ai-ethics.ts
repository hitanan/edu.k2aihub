import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface DigitalCitizenshipLessonType extends BaseLessonData {
  ethicalFrameworks: string[];
  practicalScenarios: Array<{
    title: string;
    situation: string;
    ethicalDilemma: string;
    possibleActions: string[];
    recommendedApproach: string;
    reasoning: string;
  }>;
  digitalRights: string[];
  aiEthicsPrinciples: string[];
  privacyTools: string[];
}

export const digitalCitizenshipLessons: DigitalCitizenshipLessonType[] = [
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
  },
];

export default digitalCitizenshipLessons;
