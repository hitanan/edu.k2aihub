import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface CrossCulturalLessonType extends BaseLessonData {
  culturalDimensions: string[];
  adaptationStrategies: string[];
  globalCompetencies: string[];
  communicationPatterns: {
    culture: string;
    directness: string;
    contextLevel: string;
    timeOrientation: string;
    hierarchyStyle: string;
    examples: string[];
  }[];
  mainContent: {
    introduction: string;
    keyConcepts: {
      title: string;
      description: string;
      examples: string[];
    }[];
    practicalApplications: {
      area: string;
      description: string;
    }[];
    conclusion: string;
  };
  relatedGames: {
    id: string;
    name: string;
    description: string;
  }[];
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
}

export const lessons: CrossCulturalLessonType[] = [
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
    faqs: [
      {
        question: 'Trí tuệ Đa văn hóa (CQ) có phải là bẩm sinh không?',
        answer:
          'Không. CQ là một kỹ năng có thể học hỏi và phát triển thông qua đào tạo, trải nghiệm và sự tự nhận thức. Bất kỳ ai cũng có thể nâng cao CQ của mình nếu có sự nỗ lực và tư duy cởi mở.',
      },
      {
        question: 'Làm thế nào để tránh việc tạo ra các khuôn mẫu (stereotype) khi học về các nền văn hóa?',
        answer:
          'Hãy xem các mô hình văn hóa là một "điểm khởi đầu", không phải là "chân lý tuyệt đối". Luôn nhớ rằng mỗi cá nhân là một thực thể riêng biệt và có thể không hoàn toàn giống với đặc điểm chung của nền văn hóa đó. Hãy sử dụng kiến thức văn hóa để đặt câu hỏi tốt hơn, không phải để đưa ra kết luận vội vàng.',
      },
      {
        question: '"Giữ thể diện" (saving face) trong các nền văn hóa châu Á có nghĩa là gì?',
        answer:
          'Giữ thể diện là việc duy trì uy tín, danh dự và sự tôn trọng của một người trong mắt người khác. Nó bao gồm việc tránh đối đầu trực tiếp, không làm người khác bẽ mặt nơi công cộng, và sử dụng cách giao tiếp gián tiếp để đưa ra những phản hồi nhạy cảm.',
      },
      {
        question: 'Sự khác biệt giữa văn hóa "định hướng nhiệm vụ" và "định hướng mối quan hệ" là gì?',
        answer:
          'Trong văn hóa định hướng nhiệm vụ (task-oriented), hiệu quả công việc và việc hoàn thành mục tiêu được ưu tiên hàng đầu. Trong văn hóa định hướng mối quan hệ (relationship-oriented), việc xây dựng lòng tin và mối quan hệ cá nhân được xem là nền tảng cần thiết trước khi có thể hợp tác làm việc hiệu quả.',
      },
      {
        question: 'CQ khác gì so với EQ (Trí tuệ cảm xúc)?',
        answer:
          'EQ là khả năng nhận biết và quản lý cảm xúc của bản thân và người khác. CQ là một nhánh chuyên biệt hơn, tập trung vào khả năng hoạt động hiệu quả trong các bối cảnh đa dạng về văn hóa. Một người có EQ cao có thể vẫn gặp khó khăn nếu họ không có kiến thức và chiến lược để áp dụng sự đồng cảm của mình trong một môi trường văn hóa xa lạ.',
      },
      {
        question: 'Làm thế nào để rèn luyện CQ Drive (Động lực)?',
        answer:
          'Hãy chủ động tìm kiếm những trải nghiệm đa văn hóa: thử món ăn mới, xem phim nước ngoài không thuyết minh, kết bạn với người nước ngoài, đọc sách về lịch sử các quốc gia khác. Sự tò mò và hứng thú sẽ nảy sinh từ chính những trải nghiệm này.',
      },
      {
        question: 'Mô hình văn hóa của Hofstede có còn phù hợp trong thế giới hiện đại không?',
        answer:
          'Mô hình của Hofstede là một công cụ nền tảng và vẫn rất hữu ích để hiểu những xu hướng chung của một nền văn hóa. Tuy nhiên, nó có những hạn chế như dữ liệu cũ và có thể không phản ánh hết sự phức tạp và thay đổi của xã hội hiện đại. Do đó, nên sử dụng nó như một tài liệu tham khảo, kết hợp với các quan sát và mô hình khác.',
      },
      {
        question: 'Tại sao việc nhận diện thiên kiến vô thức lại quan trọng?',
        answer:
          'Thiên kiến vô thức (unconscious bias) ảnh hưởng đến cách chúng ta ra quyết định và đối xử với người khác một cách tự động mà chúng ta không hề hay biết. Nhận diện chúng giúp chúng ta đưa ra những quyết định công bằng hơn, khách quan hơn và tránh được những hiểu lầm đáng tiếc trong giao tiếp đa văn hóa.',
      },
      {
        question: 'Cultural Code-Switching có phải là "giả tạo" hay không?',
        answer:
          'Không. Đó không phải là thay đổi bản chất con người bạn, mà là sự điều chỉnh hành vi một cách có ý thức để giao tiếp hiệu quả hơn trong một bối cảnh cụ thể. Giống như bạn sẽ dùng ngôn ngữ khác khi nói chuyện với một đứa trẻ so với khi nói chuyện với một giáo sư, đó là sự linh hoạt và thông minh trong giao tiếp.',
      },
      {
        question: 'Làm thế nào để bắt đầu áp dụng CQ vào công việc hàng ngày?',
        answer:
          'Hãy bắt đầu từ việc quan sát. Trong cuộc họp tiếp theo với đồng nghiệp quốc tế, hãy thử để ý xem ai nói nhiều, ai ít nói, cách họ ngắt lời, cách họ đưa ra ý kiến. Đừng phán xét, chỉ quan sát và tự hỏi: "Điều gì trong văn hóa của họ có thể giải thích cho hành vi này?".',
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
    faqs: [
      {
        question: 'Làm thế nào để giao tiếp hiệu quả với người từ văn hóa ngữ cảnh cao (high-context)?',
        answer:
          'Hãy kiên nhẫn và tập trung vào việc xây dựng mối quan hệ. Lắng nghe không chỉ lời nói mà cả những gì không được nói ra. Chú ý đến ngôn ngữ cơ thể và các tín hiệu phi ngôn ngữ. Đừng đi thẳng vào vấn đề ngay lập tức, hãy dành thời gian cho các cuộc trò chuyện xã giao.',
      },
      {
        question: 'Làm thế nào để đưa phản hồi cho một người từ văn hóa không quen nhận phản hồi trực tiếp?',
        answer:
          'Sử dụng phương pháp "sandwich": bắt đầu bằng một lời khen ngợi chân thành, sau đó đưa ra góp ý một cách nhẹ nhàng (ví dụ: "Để làm cho nó hoàn hảo hơn, chúng ta có thể..."), và kết thúc bằng một lời động viên. Tránh đưa ra phản hồi tiêu cực trước mặt người khác.',
      },
      {
        question: 'Sự khác biệt giữa văn hóa thời gian "đơn tuyến" (monochronic) và "đa tuyến" (polychronic) là gì?',
        answer:
          'Văn hóa đơn tuyến (ví dụ: Đức, Thụy Sĩ) xem thời gian là một đường thẳng, họ coi trọng sự đúng giờ và làm từng việc một. Văn hóa đa tuyến (ví dụ: Mỹ Latinh, Trung Đông) xem thời gian là linh hoạt, họ có thể làm nhiều việc cùng lúc và ưu tiên mối quan hệ hơn là lịch trình.',
      },
      {
        question:
          'Làm thế nào để một người Việt Nam (văn hóa ngữ cảnh cao) có thể thích nghi với môi trường làm việc của Mỹ (văn hóa ngữ cảnh thấp)?',
        answer:
          'Hãy tập giao tiếp một cách rõ ràng, trực tiếp và đi thẳng vào vấn đề hơn. Đừng ngại đặt câu hỏi nếu bạn chưa hiểu rõ. Trong các cuộc họp, hãy chủ động phát biểu ý kiến của mình. Hiểu rằng việc tranh luận thẳng thắn về công việc được coi là bình thường và không ảnh hưởng đến quan hệ cá nhân.',
      },
      {
        question: 'Làm thế nào để điều hành một cuộc họp hiệu quả với nhiều nền văn hóa tham gia?',
        answer:
          'Hãy gửi agenda và tài liệu trước để mọi người có thời gian chuẩn bị. Trong cuộc họp, hãy chủ động mời những người ít nói phát biểu. Sử dụng "round-robin" (mời từng người phát biểu lần lượt) để đảm bảo ai cũng có cơ hội. Tóm tắt lại các quyết định và các bước tiếp theo một cách rõ ràng bằng văn bản sau cuộc họp.',
      },
      {
        question: 'Tại sao việc hiểu về "power distance" (khoảng cách quyền lực) lại quan trọng?',
        answer:
          'Nó ảnh hưởng đến cách mọi người giao tiếp với cấp trên và cấp dưới. Trong văn hóa có khoảng cách quyền lực cao (như nhiều nước châu Á), nhân viên có thể ngần ngại nói ra ý kiến trái với sếp. Trong văn hóa có khoảng cách quyền lực thấp (như các nước Bắc Âu), việc tranh luận với sếp được coi là bình thường. Hiểu điều này giúp bạn biết cách khuyến khích sự tham gia của đội nhóm.',
      },
      {
        question: 'Làm thế nào để viết một email hiệu quả cho đối tác quốc tế?',
        answer:
          'Hãy xem xét văn hóa của người nhận. Với người từ văn hóa ngữ cảnh thấp, hãy đi thẳng vào vấn đề chính sau một lời chào ngắn gọn. Với người từ văn hóa ngữ cảnh cao, hãy dành một vài câu để hỏi thăm, xây dựng mối quan hệ trước khi đề cập đến công việc. Luôn sử dụng ngôn ngữ rõ ràng, đơn giản và tránh các thành ngữ địa phương.',
      },
      {
        question: 'Sự im lặng trong giao tiếp có ý nghĩa gì?',
        answer:
          'Ý nghĩa của sự im lặng rất khác nhau. Ở phương Tây, nó thường có nghĩa là không có gì để nói hoặc không đồng ý. Ở nhiều nền văn hóa phương Đông, sự im lặng có thể là dấu hiệu của sự tôn trọng, sự lắng nghe chăm chú, hoặc đang suy nghĩ kỹ trước khi trả lời. Đừng vội vàng lấp đầy khoảng trống im lặng.',
      },
      {
        question: 'Làm thế nào để xây dựng một "ngôn ngữ chung" cho đội nhóm đa văn hóa?',
        answer:
          'Đội nhóm nên cùng nhau thống nhất về các quy tắc giao tiếp. Ví dụ: "Chúng ta sẽ luôn xác nhận lại các yêu cầu quan trọng bằng email", "Mọi ý kiến đều được hoan nghênh trong các buổi brainstorming", "Khi đưa phản hồi, chúng ta sẽ tập trung vào hành vi, không phải con người".',
      },
      {
        question: 'Vai trò của storytelling trong giao tiếp toàn cầu là gì?',
        answer:
          'Kể chuyện là một công cụ mạnh mẽ để kết nối con người vượt qua rào cản văn hóa. Một câu chuyện hay có thể truyền tải các giá trị, xây dựng sự đồng cảm và làm cho thông điệp của bạn trở nên dễ nhớ và có sức ảnh hưởng hơn, bất kể người nghe đến từ đâu.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    culturalDimensions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    adaptationStrategies,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    globalCompetencies,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    communicationPatterns,
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

export const crossCulturalLessons = transformedLessons;

export const crossCulturalIntelligenceModuleData: ModuleData = {
  id: K2Module.CrossCulturalIntelligence,
  title: 'Trí Tuệ Đa Văn Hóa',
  subtitle: 'Giao tiếp và làm việc hiệu quả trong môi trường toàn cầu',
  description:
    'Phát triển năng lực thấu hiểu, thích ứng và thành công trong môi trường làm việc đa dạng văn hóa. Khóa học cung cấp các mô hình, kỹ năng và chiến lược để bạn trở thành một công dân toàn cầu.',
  category: 'Kỹ năng chuyên nghiệp',
  icon: '🌐',
  color: 'from-purple-500 to-indigo-500',
  level: 'Trung cấp',
  duration: '10-12 giờ',
  features: [
    '4 thành tố của Trí tuệ Đa văn hóa (CQ)',
    'Các mô hình văn hóa (Hofstede, Erin Meyer)',
    'Kỹ năng giao tiếp và lãnh đạo đa văn hóa',
    'Xây dựng mạng lưới quan hệ toàn cầu',
  ],
  prerequisites: ['Tư duy cởi mở', 'Tiếng Anh giao tiếp'],
  objectives: [
    'Hiểu và áp dụng 4 thành tố của Trí tuệ Đa văn hóa (CQ).',
    'Phân tích và so sánh các nền văn hóa qua các mô hình học thuật.',
    'Phát triển kỹ năng giao tiếp, phản hồi và đàm phán đa văn hóa.',
    'Xây dựng và nuôi dưỡng mạng lưới quan hệ chuyên nghiệp toàn cầu.',
    'Nâng cao năng lực lãnh đạo trong các đội nhóm đa dạng.',
  ],
  careerOutcomes: [
    'Chuyên viên Nhân sự Toàn cầu',
    'Quản lý Dự án Quốc tế',
    'Chuyên viên Phát triển Kinh doanh Quốc tế',
    'Nhà ngoại giao, chuyên viên quan hệ quốc tế',
    'Tư vấn quản lý đa văn hóa',
  ],
  industryApplications: [
    'Công nghệ thông tin (làm việc với các team global)',
    'Xuất nhập khẩu và Logistics',
    'Du lịch và Khách sạn',
    'Tổ chức phi chính phủ quốc tế (INGO)',
    'Giáo dục và Đào tạo',
  ],
  marketDemand: {
    averageSalary: '800 - 3.000 USD/tháng',
    jobGrowth: '25% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: [
    K2Module.CommunicationSkills,
    K2Module.LeadershipManagement,
    K2Module.InternationalBusiness,
    K2Module.VietnameseCulture,
  ],
  lessons: transformedLessons,
};
