import { BaseLessonData } from '@/types/lesson-base';

export const crossCulturalLessons: BaseLessonData[] = [
  {
    id: 'cultural-intelligence-fundamentals',
    title: 'Cơ Bản Trí Tuệ Đa Văn Hóa',
    description:
      'Phát triển khả năng hiểu, giao tiếp và làm việc hiệu quả với người từ các nền văn hóa khác nhau trong thế giới toàn cầu.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Cultural Intelligence
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
    mainContent: {
      introduction:
        'Trong một thế giới phẳng, Trí tuệ Đa văn hóa (CQ) không còn là một kỹ năng mềm mà là một năng lực cốt lõi. Đây là khả năng của bạn để hoạt động và quản lý hiệu quả trong các môi trường đa dạng về văn hóa. Bài học này sẽ là bước đầu tiên giúp bạn giải mã các nền văn hóa khác nhau và quan trọng hơn là thấu hiểu chính bản thân mình.',
      keyConcepts: [
        {
          title: '4 Thành tố của Trí tuệ Đa văn hóa (4 Dimensions of CQ)',
          description:
            'CQ được cấu thành từ 4 yếu tố: CQ Drive (Động lực), CQ Knowledge (Kiến thức), CQ Strategy (Chiến lược), và CQ Action (Hành động). Hiểu rõ và rèn luyện cả 4 yếu tố này sẽ giúp bạn trở nên linh hoạt và hiệu quả trong mọi tình huống giao thoa văn hóa.',
          examples: [
            'CQ Drive: Sự tò mò và tự tin khi tiếp xúc với người lạ.',
            'CQ Knowledge: Hiểu biết về các mô hình văn hóa như Hofstede.',
            'CQ Strategy: Khả năng lập kế hoạch và nhận thức trong các tình huống đa văn hóa.',
            'CQ Action: Khả năng điều chỉnh hành vi cho phù hợp.',
          ],
        },
        {
          title: 'Thiên kiến văn hóa (Cultural Biases)',
          description:
            'Tất cả chúng ta đều nhìn thế giới qua lăng kính văn hóa của riêng mình. Nhận diện các thiên kiến và định kiến vô thức (unconscious biases) là bước quan trọng nhất để có thể nhìn nhận các nền văn hóa khác một cách khách quan và đồng cảm.',
          examples: [
            'Cho rằng việc giao tiếp trực tiếp luôn là tốt nhất (thiên kiến của văn hóa phương Tây).',
            'Đánh giá người khác dựa trên khuôn mẫu về quốc gia của họ.',
          ],
        },
        {
          title: 'Chuyển đổi mã văn hóa (Cultural Code-Switching)',
          description:
            'Đây là khả năng điều chỉnh phong cách giao tiếp, hành vi và biểu hiện của bạn để phù hợp với một bối cảnh văn hóa khác. Nó không phải là đánh mất bản sắc, mà là sự linh hoạt để kết nối hiệu quả hơn.',
          examples: [
            'Sử dụng cách chào hỏi trang trọng hơn khi gặp đối tác Nhật Bản.',
            'Điều chỉnh tốc độ nói và cách dùng cử chỉ khi nói chuyện với người có ngôn ngữ mẹ đẻ khác.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Làm việc trong các công ty đa quốc gia',
          description:
            'Phối hợp hiệu quả với đồng nghiệp từ khắp nơi trên thế giới, tránh những hiểu lầm không đáng có và xây dựng một môi trường làm việc hòa nhập.',
        },
        {
          area: 'Du học và trao đổi văn hóa',
          description:
            'Nhanh chóng hòa nhập với môi trường mới, kết bạn quốc tế và tận dụng tối đa trải nghiệm học tập và sinh sống ở nước ngoài.',
        },
        {
          area: 'Đàm phán và bán hàng quốc tế',
          description:
            'Xây dựng lòng tin với đối tác và khách hàng từ các nền văn hóa khác nhau, hiểu rõ nhu cầu ẩn sau lời nói của họ để đi đến những thỏa thuận thành công.',
        },
      ],
      conclusion:
        'Phát triển Trí tuệ Đa văn hóa là một hành trình khám phá không hồi kết, không chỉ về thế giới mà còn về chính bản thân bạn. Bằng cách rèn luyện CQ, bạn sẽ mở ra những cánh cửa cơ hội, xây dựng những mối quan hệ sâu sắc và trở thành một công dân toàn cầu thực thụ.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
    ],
    objectives: [
      'Hiểu về Cultural Intelligence (CQ) và 4 dimensions',
      'Nhận diện cultural biases và assumptions của bản thân',
      'Phát triển adaptive communication skills',
      'Build effective cross-cultural relationships',
    ],
    prerequisites: ['Open mindset về cultural differences', 'Experience với multicultural environments (preferred)'],
    culturalDimensions: [
      'Power Distance (Hierarchy vs Equality)',
      'Individualism vs Collectivism',
      'Uncertainty Avoidance (Risk Tolerance)',
      'Long-term vs Short-term Orientation',
      'Masculinity vs Femininity (Competition vs Cooperation)',
      'Indulgence vs Restraint (Gratification Control)',
    ],
    adaptationStrategies: [
      'Cultural Code-Switching',
      'Active Listening Across Cultures',
      'Non-verbal Communication Awareness',
      'Contextual Communication Adjustment',
      'Conflict Resolution Across Cultures',
      'Trust Building in Diverse Teams',
    ],
    globalCompetencies: [
      'Cultural Self-Awareness',
      'Empathy và Perspective-Taking',
      'Adaptive Communication',
      'Global Mindset Development',
      'Inclusive Leadership',
      'Cross-cultural Negotiation',
    ],
    communicationPatterns: [
      {
        culture: 'East Asian (China, Japan, Korea)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Reading between the lines',
          'Saving face important',
          'Group harmony priority',
          'Respect for seniority',
        ],
      },
      {
        culture: 'Germanic (Germany, Netherlands)',
        directness: 'Very Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'Low Power Distance',
        examples: ['Straightforward feedback', 'Punctuality critical', 'Task-focused', 'Egalitarian discussions'],
      },
      {
        culture: 'Latin American (Brazil, Mexico)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Short-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Relationship-first approach',
          'Flexible time concepts',
          'Warm communication style',
          'Respect for authority',
        ],
      },
      {
        culture: 'Nordic (Sweden, Denmark)',
        directness: 'Balanced',
        contextLevel: 'Medium Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'Very Low Power Distance',
        examples: ['Consensus-driven decisions', 'Work-life balance priority', 'Modesty valued', 'Flat organizations'],
      },
      {
        culture: 'Middle Eastern (UAE, Saudi)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Short-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Hospitality emphasis',
          'Relationship building critical',
          'Honor và reputation important',
          'Religious considerations',
        ],
      },
    ],
    exercises: [
      {
        title: 'Cultural Self-Assessment',
        description: 'Map your cultural programming và biases',
        difficulty: 'Cơ bản',
        materials: ['Cultural values assessment', 'Reflection questions'],
        procedure: [
          'Complete Hofstede cultural dimensions assessment',
          'Identify your cultural "defaults" và assumptions',
          'Reflect on formative cultural experiences',
          'Map your communication style preferences',
          'Identify potential blind spots',
          'Create cultural adaptation plan',
        ],
        expectedResults: 'Clear understanding của personal cultural programming',
        solution: 'Everyone has cultural biases - awareness is key to adaptation.',
      },
      {
        title: 'Cross-Cultural Scenario Analysis',
        description: 'Practice navigating complex intercultural situations',
        difficulty: 'Nâng cao',
        materials: ['Cultural scenario cards', 'Analysis framework'],
        procedure: [
          'Choose challenging cross-cultural scenario',
          'Analyze từ multiple cultural perspectives',
          'Identify potential misunderstandings',
          'Develop culturally sensitive responses',
          'Role-play different cultural approaches',
          'Reflect on insights và learning',
        ],
        expectedResults: 'Improved cultural situation navigation skills',
        solution: 'Assume positive intent, ask clarifying questions, adapt your style to context.',
      },
      {
        title: 'Global Team Simulation',
        description: 'Lead virtual team với diverse cultural backgrounds',
        difficulty: 'Nâng cao',
        materials: ['Team profiles', 'Project scenario', 'Communication tools'],
        procedure: [
          'Form virtual team với diverse cultural profiles',
          'Navigate team formation và norming',
          'Manage cultural communication differences',
          'Resolve cross-cultural conflicts',
          'Deliver project results together',
          'Debrief cultural learnings',
        ],
        expectedResults: 'Practical global team leadership experience',
        solution: 'Establish clear cultural norms, overcommunicate, celebrate differences as strengths.',
      },
    ],
    realWorldApplications: [
      'Managing global remote teams',
      'International business negotiations',
      'Study abroad và cultural exchange',
      'Multicultural customer service',
      'Cross-cultural partnerships',
    ],
    caseStudies: [
      {
        title: 'Netflix Global Expansion',
        organization: 'Netflix',
        problem: 'Adapting content và platform for global audiences',
        solution: 'Cultural intelligence-driven localization strategy',
        impact: 'Successful expansion to 190+ countries',
        innovations: [
          'Local content creation',
          'Cultural adaptation algorithms',
          'Regional leadership teams',
          'Cultural sensitivity training',
        ],
      },
      {
        title: "Toyota's Cross-Cultural Manufacturing",
        organization: 'Toyota',
        problem: 'Implementing Japanese manufacturing principles globally',
        solution: 'Cultural adaptation của Toyota Production System',
        impact: 'Successful global manufacturing network',
        innovations: [
          'Cultural bridge positions',
          'Adapted training methods',
          'Local leadership development',
          'Respect for local customs',
        ],
      },
    ],
    resources: [
      {
        title: 'Cultural Intelligence Center',
        url: 'https://www.culturalq.com',
        type: 'Assessment',
      },
      {
        title: 'Hofstede Insights',
        url: 'https://www.hofstede-insights.com',
        type: 'Research',
      },
      {
        title: 'Country Navigator',
        url: 'https://www.countrynavigator.com',
        type: 'Tools',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Cầu nối văn hóa Đông - Tây',
      content: [
        'Việt Nam có nền văn hóa ngữ cảnh cao (high-context), coi trọng mối quan hệ và giao tiếp gián tiếp. Việc "giữ thể diện" và sự hòa hợp nhóm là rất quan trọng.',
        'Thế hệ trẻ Việt Nam, đặc biệt là những người làm việc trong các công ty công nghệ và quốc tế, đang ngày càng quen thuộc với phong cách giao tiếp trực tiếp của phương Tây, tạo ra một môi trường làm việc đa dạng về phong cách ngay trong nước.',
        'Sự khác biệt văn hóa vùng miền (Bắc - Trung - Nam) cũng là một yếu tố quan trọng, ảnh hưởng đến phong cách giao tiếp và kinh doanh ngay tại Việt Nam.',
        'Trong đàm phán, người Việt thường dành nhiều thời gian để xây dựng mối quan hệ cá nhân trước khi đi vào công việc chính. Một bữa ăn thân mật có thể quan trọng hơn một cuộc họp chính thức.',
      ],
    },
    careerConnect: {
      name: 'Chị Tôn Nữ Thị Ninh',
      title: 'Cựu Đại sứ Việt Nam tại EU',
      company: 'Nhà ngoại giao',
      imageUrl: 'https://i.pravatar.cc/150?u=ton-nu-thi-ninh',
      quote:
        'Ngoại giao chính là nghệ thuật của trí tuệ đa văn hóa. Để bảo vệ lợi ích quốc gia, bạn phải hiểu sâu sắc không chỉ "họ nói gì" mà còn "tại sao họ nói như vậy". Đó là khả năng đọc được những thông điệp ẩn sau con chữ, hành động và cả sự im lặng.',
    },
    quizzes: [
      {
        question: 'Việt Nam được xếp vào nhóm văn hóa nào theo lý thuyết về ngữ cảnh giao tiếp?',
        options: [
          'Ngữ cảnh thấp (Low-context)',
          'Ngữ cảnh cao (High-context)',
          'Ngữ cảnh trung bình',
          'Không thuộc nhóm nào',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Văn hóa Việt Nam là văn hóa ngữ cảnh cao, nơi các mối quan hệ, bối cảnh và những yếu tố phi ngôn ngữ đóng vai trò quan trọng trong việc truyền tải thông điệp.',
      },
      {
        question: 'CQ Drive, một trong 4 thành tố của Trí tuệ Đa văn hóa, thể hiện điều gì?',
        options: [
          'Kiến thức về các nền văn hóa.',
          'Khả năng điều chỉnh hành vi.',
          'Động lực, sự tự tin và hứng thú khi tương tác với các nền văn hóa khác.',
          'Khả năng lập chiến lược giao tiếp.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'CQ Drive là "động cơ" của Trí tuệ Đa văn hóa. Nếu không có động lực và sự tò mò, việc học hỏi kiến thức hay kỹ năng khác sẽ trở nên khó khăn.',
      },
    ],
  },
  {
    id: 'global-communication-mastery',
    title: 'Thành Thạo Giao Tiếp Toàn Cầu',
    description:
      'Master advanced cross-cultural communication techniques để succeed trong international business và global collaboration.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=rhTCudc9bgk', // Global Communication Skills
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    mainContent: {
      introduction:
        'Nếu CQ cơ bản giúp bạn "sống sót" trong môi trường đa văn hóa, thì việc làm chủ giao tiếp toàn cầu sẽ giúp bạn "tỏa sáng". Bài học này đi sâu vào các kỹ thuật giao tiếp nâng cao, giúp bạn không chỉ tránh hiểu lầm mà còn có khả năng gây ảnh hưởng, lãnh đạo và xây dựng lòng tin với bất kỳ ai, ở bất kỳ đâu.',
      keyConcepts: [
        {
          title: 'Giao tiếp Ngữ cảnh cao vs. Ngữ cảnh thấp (High-context vs. Low-context)',
          description:
            'Đây là một trong những khác biệt cốt lõi nhất trong giao tiếp toàn cầu. Các nền văn hóa ngữ cảnh thấp (như Mỹ, Đức) coi trọng sự rõ ràng, trực tiếp. Các nền văn hóa ngữ cảnh cao (như Việt Nam, Nhật Bản) dựa nhiều vào bối cảnh, mối quan hệ và những điều không được nói ra.',
          examples: [
            'Low-context: "Báo cáo này cần làm lại." High-context: "Tôi nghĩ chúng ta có thể xem xét thêm một vài góc độ khác cho báo cáo này."',
          ],
        },
        {
          title: 'Phong cách đưa phản hồi (Feedback Styles)',
          description:
            'Cách bạn đưa ra và tiếp nhận phản hồi có thể xây dựng hoặc phá vỡ một mối quan hệ đa văn hóa. Học cách nhận biết và thích ứng với các phong cách khác nhau, từ trực tiếp và thẳng thắn đến gián tiếp và được "bọc đường".',
          examples: [
            'Phản hồi trực tiếp: "Phần A và C của bạn tốt, nhưng phần B cần cải thiện." Phản hồi gián tiếp: Bắt đầu bằng nhiều lời khen ngợi, sau đó nhẹ nhàng gợi ý "có lẽ chúng ta có thể nâng cấp phần B lên một chút."',
          ],
        },
        {
          title: 'Lãnh đạo hòa nhập (Inclusive Leadership)',
          description:
            'Lãnh đạo một đội nhóm đa văn hóa đòi hỏi nhiều hơn là chỉ ra lệnh. Đó là nghệ thuật tạo ra một không gian an toàn tâm lý, nơi mọi tiếng nói đều được lắng nghe và mọi phong cách làm việc đều được tôn trọng, từ đó khai thác sức mạnh của sự đa dạng.',
          examples: [
            'Trong một cuộc họp, chủ động mời những thành viên trầm tính từ các nền văn hóa ít nói phát biểu ý kiến.',
            'Sử dụng nhiều kênh giao tiếp (nói, viết, trực tiếp, gián tiếp) để mọi người đều có thể tham gia.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Quản lý đội nhóm toàn cầu',
          description:
            'Dẫn dắt một đội ngũ phân tán về mặt địa lý và đa dạng về văn hóa, thúc đẩy sự hợp tác và đạt được hiệu suất cao.',
        },
        {
          area: 'Tích hợp sau sáp nhập (Post-merger Integration)',
          description:
            'Hòa hợp hai nền văn hóa doanh nghiệp khác nhau sau một thương vụ sáp nhập hoặc mua lại, một trong những thách thức lớn nhất trong kinh doanh quốc tế.',
        },
        {
          area: 'Ngoại giao và quan hệ quốc tế',
          description:
            'Xây dựng sự đồng thuận và giải quyết xung đột giữa các bên có lợi ích và nền tảng văn hóa khác nhau.',
        },
      ],
      conclusion:
        'Trở thành một bậc thầy giao tiếp toàn cầu có nghĩa là bạn sở hữu một "bảng điều khiển" tinh vi, cho phép bạn linh hoạt điều chỉnh phong cách của mình để kết nối một cách chân thực và hiệu quả với mọi người. Đây là siêu năng lực của các nhà lãnh đạo trong thế kỷ 21.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
      {
        id: 'debate-master-3d',
        name: 'Debate Master 3D',
        description:
          'Engage in AI-driven debates, develop critical thinking, and master persuasive arguments in 3D courtroom',
      },
    ],
    objectives: [
      'Master high-context vs low-context communication',
      'Navigate cultural hierarchy và power dynamics',
      'Develop inclusive leadership across cultures',
      'Build trust rapidly trong multicultural environments',
    ],
    prerequisites: [
      'Đã hoàn thành Cultural Intelligence Fundamentals',
      'Experience working với international colleagues',
    ],
    culturalDimensions: [
      'Communication Context (Direct vs Indirect)',
      'Time Orientation (Monochronic vs Polychronic)',
      'Relationship Building (Task vs Relationship First)',
      'Feedback Styles (Public vs Private)',
      'Decision Making (Top-down vs Consensus)',
      'Conflict Resolution (Confrontational vs Harmonious)',
    ],
    adaptationStrategies: [
      'Cultural Communication Switching',
      'Inclusive Meeting Facilitation',
      'Cross-Cultural Feedback Delivery',
      'International Presentation Styles',
      'Virtual Team Culture Building',
      'Cultural Conflict Mediation',
    ],
    globalCompetencies: [
      'Intercultural Sensitivity',
      'Global Leadership Presence',
      'Cross-Cultural Negotiation',
      'Inclusive Decision Making',
      'Cultural Change Management',
      'Global Talent Development',
    ],
    communicationPatterns: [
      {
        culture: 'American Business',
        directness: 'Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Monochronic',
        hierarchyStyle: 'Medium Power Distance',
        examples: [
          'Quick introductions',
          'Results-focused discussions',
          'Individual accountability',
          'Time-boxed meetings',
        ],
      },
      {
        culture: 'Indian Business',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Polychronic',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Relationship building first',
          'Respectful disagreement',
          'Hierarchy acknowledgment',
          'Flexibility với time',
        ],
      },
    ],
    exercises: [
      {
        title: 'Inclusive Meeting Design',
        description: 'Design meetings that engage all cultural communication styles',
        difficulty: 'Nâng cao',
        materials: ['Meeting templates', 'Cultural participation guides'],
        procedure: [
          'Analyze team cultural composition',
          'Design agenda accommodating different styles',
          'Create safe spaces for all communication preferences',
          'Practice inclusive facilitation techniques',
          'Gather feedback từ diverse participants',
          'Iterate based on cultural input',
        ],
        expectedResults: 'Meetings where all cultures can contribute effectively',
        solution: 'Pre-meeting preparation, multiple input channels, balanced speaking time, follow-up discussions.',
      },
      {
        title: 'Cross-Cultural Negotiation Simulation',
        description: 'Practice high-stakes negotiation across cultures',
        difficulty: 'Nâng cao',
        materials: ['Negotiation scenarios', 'Cultural briefings', 'Outcome tracking'],
        procedure: [
          'Study negotiation styles of different cultures',
          'Prepare culturally-appropriate strategies',
          'Conduct multi-party negotiation simulation',
          'Navigate cultural differences in real-time',
          'Analyze outcomes và cultural factors',
          'Develop adaptive negotiation framework',
        ],
        expectedResults: 'Advanced cross-cultural negotiation skills',
        solution:
          'Understand cultural values behind positions, build relationships first, use cultural mediators when needed.',
      },
      {
        title: 'Global Leadership Challenge',
        description: 'Lead change initiative across multiple cultures',
        difficulty: 'Chuyên gia',
        materials: ['Change scenario', 'Cultural resistance patterns', 'Leadership tools'],
        procedure: [
          'Analyze change resistance patterns by culture',
          'Develop culturally-adapted change strategy',
          'Build coalition across cultural groups',
          'Communicate vision using cultural frames',
          'Navigate cultural resistance và adaptation',
          'Measure success across cultural dimensions',
        ],
        expectedResults: 'Proven ability to lead change globally',
        solution: 'Involve cultural champions, adapt messaging to values, respect local implementation variations.',
      },
    ],
    realWorldApplications: [
      'Leading global teams và initiatives',
      'International sales và business development',
      'Cross-cultural merger integration',
      'Global customer relationship management',
      'International partnership development',
    ],
    caseStudies: [
      {
        title: "Unilever's Cultural Integration",
        organization: 'Unilever',
        problem: 'Managing 400+ brands across 190 countries',
        solution: 'Cultural intelligence integrated into leadership development',
        impact: 'Successful global brand management với local relevance',
        innovations: [
          'Cultural mentoring programs',
          'Local insights integration',
          'Cross-cultural leadership paths',
          'Cultural celebration initiatives',
        ],
      },
      {
        title: "Zoom's Global Team Culture",
        organization: 'Zoom',
        problem: 'Building cohesive culture across global remote workforce',
        solution: 'Intentional cross-cultural team building và communication',
        impact: 'Strong global culture supporting rapid growth',
        innovations: [
          'Cultural sharing sessions',
          'Inclusive communication training',
          'Time zone equity policies',
          'Cultural celebration events',
        ],
      },
    ],
    resources: [
      {
        title: 'Getting to Yes Across Cultures',
        url: 'https://www.amazon.com/dp/0143118749',
        type: 'Book',
      },
      {
        title: 'INSEAD Global Executive MBA',
        url: 'https://www.insead.edu',
        type: 'Education',
      },
      {
        title: 'Meridian International Center',
        url: 'https://www.meridian.org',
        type: 'Training',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Phong cách giao tiếp và lãnh đạo',
      content: [
        'Phong cách lãnh đạo ở Việt Nam thường có tính phân cấp cao (high power distance), nhưng đang dần thay đổi theo hướng cởi mở và trao quyền hơn, đặc biệt trong các công ty khởi nghiệp.',
        'Khi đưa ra phản hồi tiêu cực, người Việt thường dùng cách nói gián tiếp, "vòng vo tam quốc" để tránh làm mất lòng người nghe. Việc hiểu và sử dụng kỹ thuật này là rất quan trọng.',
        'Trong các cuộc họp, người có chức vụ cao nhất thường là người đưa ra quyết định cuối cùng, nhưng việc lấy ý kiến tập thể (dù chỉ mang tính hình thức) vẫn được coi trọng.',
        'Sự im lặng trong giao tiếp của người Việt có thể mang nhiều ý nghĩa: sự đồng ý, sự không đồng ý nhưng không muốn đối đầu, hoặc đơn giản là cần thêm thời gian để suy nghĩ.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Duy Hưng',
      title: 'Chủ tịch HĐQT',
      company: 'SSI Securities Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-duy-hung',
      quote:
        'Trong kinh doanh, đặc biệt là kinh doanh quốc tế, chữ "tín" là quan trọng nhất. Nhưng để xây dựng được lòng tin với đối tác từ các nền văn hóa khác nhau, bạn phải hiểu cách họ định nghĩa chữ "tín". Với người này, đó là hợp đồng chặt chẽ. Với người khác, đó lại là một mối quan hệ cá nhân thân thiết.',
    },
    quizzes: [
      {
        question: 'Một nhà lãnh đạo "hòa nhập" (inclusive leader) trong môi trường đa văn hóa sẽ làm gì?',
        options: [
          'Chỉ lắng nghe ý kiến của những người nói nhiều nhất.',
          'Bắt mọi người phải theo phong cách giao tiếp của mình.',
          'Tạo ra không gian an toàn và chủ động mời gọi ý kiến từ những thành viên trầm tính hoặc có phong cách giao tiếp khác biệt.',
          'Luôn đưa ra quyết định một mình.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Lãnh đạo hòa nhập là người có khả năng khai thác sức mạnh của sự đa dạng bằng cách đảm bảo mọi tiếng nói, dù là nhỏ nhất, đều được lắng nghe và tôn trọng.',
      },
      {
        question: 'Trong một nền văn hóa "ngữ cảnh thấp" (low-context), thông điệp được truyền tải chủ yếu qua đâu?',
        options: [
          'Ngôn ngữ cơ thể và các yếu tố phi ngôn ngữ.',
          'Mối quan hệ giữa người nói và người nghe.',
          'Những lời nói trực tiếp, rõ ràng và minh bạch.',
          'Những điều không được nói ra.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các nền văn hóa ngữ cảnh thấp, như Mỹ hay Đức, coi trọng sự rõ ràng và trực tiếp. Thông điệp nằm ở chính lời nói, không cần phải "đọc giữa các dòng".',
      },
    ],
  },
  {
    id: 'building-global-networks',
    title: 'Xây Dựng Mạng Lưới Toàn Cầu',
    description:
      'Strategies để build và maintain professional networks across cultures, leveraging diversity cho career và business success.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=GXy__kBVq1M', // Global Networking
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop',
    mainContent: {
      introduction:
        'Trong thế giới kết nối, mạng lưới của bạn chính là tài sản của bạn. Nhưng làm thế nào để xây dựng những mối quan hệ chuyên nghiệp, chân thành và bền vững với những người đến từ khắp nơi trên thế giới, mỗi nơi lại có một quy tắc "networking" khác nhau? Bài học này sẽ cung cấp cho bạn chiến lược để xây dựng và nuôi dưỡng một mạng lưới toàn cầu thực sự.',
      keyConcepts: [
        {
          title: 'Định hướng Mối quan hệ vs. Nhiệm vụ (Relationship vs. Task-oriented)',
          description:
            'Hiểu rõ liệu một nền văn hóa ưu tiên xây dựng mối quan hệ trước khi bàn về công việc (relationship-oriented) hay đi thẳng vào vấn đề (task-oriented). Điều này quyết định cách bạn tiếp cận một người mới.',
          examples: [
            'Ở Mỹ, bạn có thể bắt đầu một email bằng việc giới thiệu trực tiếp về cơ hội hợp tác. Ở Trung Quốc, bạn có thể cần nhiều buổi ăn tối và trò chuyện xã giao trước khi đề cập đến kinh doanh.',
          ],
        },
        {
          title: 'Xây dựng lòng tin đa văn hóa (Building Cross-cultural Trust)',
          description:
            'Lòng tin được xây dựng theo những cách khác nhau. Lòng tin dựa trên năng lực (Cognitive trust) phổ biến ở các nước phương Tây - "bạn đáng tin vì bạn làm việc giỏi". Lòng tin dựa trên tình cảm (Affective trust) phổ biến ở châu Á và Mỹ Latinh - "bạn đáng tin vì tôi có cảm tình và mối quan hệ cá nhân với bạn".',
          examples: [
            'Để xây dựng cognitive trust, hãy thể hiện năng lực qua các dự án thành công. Để xây dựng affective trust, hãy dành thời gian chia sẻ về gia đình, sở thích và xây dựng mối quan hệ cá nhân.',
          ],
        },
        {
          title: 'Sự có đi có lại (Reciprocity)',
          description:
            'Nguyên tắc "cho và nhận" tồn tại ở mọi nơi, nhưng cách thể hiện lại khác nhau. Học cách cho đi giá trị một cách chân thành và hiểu các quy tắc bất thành văn về việc "đáp lễ" trong các nền văn hóa khác nhau để tránh gây khó xử.',
          examples: [
            'Ở văn hóa phương Tây, việc giới thiệu một mối quan hệ hữu ích được coi là một sự giúp đỡ lớn. Ở một số văn hóa châu Á, một món quà nhỏ hoặc một lời mời ăn tối có thể là một phần quan trọng của việc xây dựng mối quan hệ.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Phát triển kinh doanh quốc tế',
          description:
            'Xây dựng một mạng lưới các đối tác, nhà phân phối và khách hàng tiềm năng ở các thị trường mục tiêu.',
        },
        {
          area: 'Thăng tiến sự nghiệp toàn cầu',
          description:
            'Kết nối với các nhà lãnh đạo, người cố vấn (mentors) và đồng nghiệp trên toàn cầu để mở ra các cơ hội làm việc và học hỏi quốc tế.',
        },
        {
          area: 'Huy động vốn đầu tư',
          description:
            'Xây dựng mối quan hệ với các nhà đầu tư mạo hiểm và các quỹ đầu tư từ các trung tâm tài chính khác nhau trên thế giới.',
        },
      ],
      conclusion:
        'Xây dựng mạng lưới toàn cầu không phải là thu thập danh thiếp, mà là vun trồng những khu vườn quan hệ trên khắp thế giới. Bằng sự tò mò, chân thành và nhạy bén về văn hóa, bạn có thể tạo ra một mạng lưới đa dạng, không chỉ giúp bạn trong sự nghiệp mà còn làm phong phú thêm cuộc sống của bạn.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
    ],
    objectives: [
      'Build authentic relationships across cultures',
      'Leverage cultural diversity trong networks',
      'Navigate different networking styles globally',
      'Maintain global relationships long-term',
    ],
    prerequisites: ['Đã hoàn thành lessons trước trong module', 'Active trong professional networking'],
    culturalDimensions: [
      'Relationship vs Task Orientation',
      'Trust Building Approaches',
      'Reciprocity Expectations',
      'Introduction Protocols',
      'Gift-Giving Customs',
      'Business Card Etiquette',
    ],
    adaptationStrategies: [
      'Cultural Networking Approaches',
      'Virtual Relationship Building',
      'Cross-Cultural Mentorship',
      'Global Community Participation',
      'Cultural Bridge Building',
      'International Alumni Networks',
    ],
    globalCompetencies: [
      'Cultural Relationship Intelligence',
      'Global Network Orchestration',
      'Cross-Cultural Value Creation',
      'International Collaboration',
      'Cultural Knowledge Sharing',
      'Global Opportunity Recognition',
    ],
    communicationPatterns: [
      {
        culture: 'Western Professional',
        directness: 'Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Task-First',
        hierarchyStyle: 'Egalitarian',
        examples: ['Quick value proposition', 'LinkedIn connections', 'Coffee meetings', 'Direct ask for help'],
      },
      {
        culture: 'East Asian Professional',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Relationship-First',
        hierarchyStyle: 'Hierarchical',
        examples: ['Proper introductions', 'Long relationship building', 'Group activities', 'Indirect reciprocity'],
      },
    ],
    exercises: [
      {
        title: 'Cultural Networking Map',
        description: 'Map và strategize your global professional network',
        difficulty: 'Trung bình',
        materials: ['Network mapping tool', 'Cultural analysis framework'],
        procedure: [
          'Audit current professional network by culture',
          'Identify cultural gaps và opportunities',
          'Research networking customs of target cultures',
          'Create culturally-appropriate outreach strategies',
          'Set relationship building goals by region',
          'Track progress và cultural learnings',
        ],
        expectedResults: 'Strategic global network development plan',
        solution: 'Quality over quantity, genuine interest trong other cultures, consistent follow-up.',
      },
      {
        title: 'Virtual Cross-Cultural Event',
        description: 'Organize online event connecting different cultures',
        difficulty: 'Nâng cao',
        materials: ['Event platform', 'Cultural programming guides', 'Networking tools'],
        procedure: [
          'Design event accommodating multiple time zones',
          'Create culturally inclusive programming',
          'Facilitate cross-cultural introductions',
          'Enable meaningful conversations across cultures',
          'Follow up to maintain connections',
          'Measure networking success across cultures',
        ],
        expectedResults: 'Successful cross-cultural networking event',
        solution: 'Cultural co-hosts, structured networking activities, cultural sharing moments, clear follow-up.',
      },
    ],
    realWorldApplications: [
      'International business development',
      'Global career advancement',
      'Cross-cultural partnerships',
      'International investment opportunities',
      'Global knowledge exchange',
    ],
    caseStudies: [
      {
        title: 'World Economic Forum Network',
        organization: 'World Economic Forum',
        problem: 'Creating meaningful connections across global leaders',
        solution: 'Structured cross-cultural networking approaches',
        impact: 'Influential global leadership network',
        innovations: [
          'Cultural pairing programs',
          'Regional integration',
          'Shared purpose initiatives',
          'Long-term relationship cultivation',
        ],
      },
    ],
    resources: [
      {
        title: 'Global Professional Networks',
        url: 'https://www.linkedin.com/company/world-economic-forum',
        type: 'Platform',
      },
      {
        title: 'Cultural Detective',
        url: 'https://www.culturaldetective.com',
        type: 'Tools',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Xây dựng quan hệ "kiểu Việt"',
      content: [
        'Networking ở Việt Nam nặng về "tình cảm" và các mối quan hệ cá nhân. Người Việt thường muốn biết về bạn với tư cách một con người trước khi bàn về công việc.',
        'Khái niệm "quan hệ" (connections) rất quan trọng. Một lời giới thiệu từ một người đáng tin cậy có giá trị hơn hàng chục email lạnh.',
        'Các hoạt động như ăn nhậu, cà phê, hay thậm chí là karaoke là một phần không thể thiếu của quá trình xây dựng mối quan hệ kinh doanh.',
        'Sự có đi có lại (reciprocity) rất được coi trọng. Nếu ai đó giúp bạn, họ sẽ ngầm kỳ vọng bạn sẽ giúp lại họ trong tương lai, dù không nói ra trực tiếp.',
      ],
    },
    careerConnect: {
      name: 'Bà Hà Thị Thu Thanh',
      title: 'Chủ tịch HĐTV',
      company: 'Deloitte Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=ha-thi-thu-thanh',
      quote:
        'Để thành công trong ngành dịch vụ chuyên nghiệp tại Việt Nam, năng lực chuyên môn là điều kiện cần, nhưng xây dựng được mạng lưới quan hệ tin cậy mới là điều kiện đủ. Mạng lưới đó không được tạo ra trong phòng họp, mà được vun đắp qua những lần tương tác chân thành, nơi con người kết nối với con người.',
    },
    quizzes: [
      {
        question: 'Lòng tin dựa trên tình cảm (Affective trust) được xây dựng dựa trên yếu tố nào?',
        options: [
          'Bằng cấp và chứng chỉ của một người.',
          'Hiệu quả công việc và các dự án đã hoàn thành.',
          'Mối quan hệ cá nhân, sự đồng cảm và cảm giác thân thuộc.',
          'Chức vụ của một người trong công ty.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Affective trust phổ biến ở các nền văn hóa thiên về mối quan hệ (relationship-oriented) như Việt Nam, nơi mọi người có xu hướng tin tưởng những người mà họ có mối liên kết cá nhân.',
      },
      {
        question: 'Khi networking ở một nền văn hóa "relationship-oriented", bạn nên làm gì?',
        options: [
          'Đi thẳng vào vấn đề kinh doanh để tiết kiệm thời gian.',
          'Dành thời gian cho các hoạt động xã giao, chia sẻ về bản thân và tìm hiểu về đối tác như một con người trước khi bàn về công việc.',
          'Chỉ gửi email và không bao giờ gặp mặt trực tiếp.',
          'Tránh nói về các chủ đề cá nhân như gia đình hay sở thích.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong các nền văn hóa ưu tiên mối quan hệ, việc xây dựng một nền tảng quan hệ cá nhân vững chắc là bước đi bắt buộc trước khi các hoạt động kinh doanh có thể diễn ra một cách suôn sẻ.',
      },
    ],
  },
];

export default crossCulturalLessons;
