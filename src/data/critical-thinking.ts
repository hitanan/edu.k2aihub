import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface CriticalThinkingLessonType extends BaseLessonData {
  thinkingFrameworks: string[];
  practicalExercises: Array<{
    title: string;
    scenario: string;
    steps: string[];
    expectedOutcome: string;
    realWorldApplication: string;
  }>;
  cognitiveSkills: string[];
  assessmentMethods: string[];
}

export const criticalThinkingLessons: CriticalThinkingLessonType[] = [
  {
    id: 'critical-thinking-fundamentals',
    title: 'Cơ Bản Tư Duy Phê Phán',
    description: 'Nắm vững các nguyên tắc cơ bản của tư duy phê phán, học cách đánh giá thông tin và đưa ra quyết định có căn cứ.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được định nghĩa và tầm quan trọng của tư duy phê phán',
      'Nhận biết các lỗi lập luận phổ biến (logical fallacies)',
      'Áp dụng phương pháp đặt câu hỏi hiệu quả',
      'Phân biệt được fact và opinion trong thông tin'
    ],
    prerequisites: [
      'Không có yêu cầu tiên quyết',
      'Có khả năng đọc hiểu tiếng Việt tốt'
    ],
    thinkingFrameworks: [
      'The 5 Whys Method',
      'SWOT Analysis', 
      'Cause and Effect Diagram',
      'Critical Question Framework'
    ],
    cognitiveSkills: [
      'Phân tích (Analysis)',
      'Đánh giá (Evaluation)', 
      'Suy luận (Inference)',
      'Giải thích (Explanation)'
    ],
    assessmentMethods: [
      'Phân tích case study',
      'Debate và thảo luận',
      'Problem-solving exercises',
      'Peer evaluation'
    ],
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
          'Đưa ra kết luận dựa trên evidence'
        ],
        expectedResults: 'Học sinh có thể phân tích objectively một nguồn thông tin và đưa ra đánh giá có căn cứ',
        solution: 'Sử dụng Critical Question Framework để systematic analysis và identify strengths/weaknesses của argument'
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
          'Chọn best solution và justify decision'
        ],
        expectedResults: 'Có được một solution có tính khả thi cao và được justify bằng logical reasoning',
        solution: 'Combination của analytical thinking và creative problem-solving để đưa ra optimal solution'
      }
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
          'Suggest improvements cho transparency'
        ],
        expectedOutcome: 'Nhận biết được marketing tactics và có thể make informed decisions khi consumer',
        realWorldApplication: 'Áp dụng khi mua sắm, đánh giá sản phẩm dịch vụ, avoid scams và false advertising'
      },
      {
        title: 'Debate về Vấn Đề Xã Hội',
        scenario: 'Tham gia debate về một controversial topic như "Nên hay không nên ban xe máy trong thành phố?"',
        steps: [
          'Research thoroughly cả hai sides của argument',
          'Prepare evidence-based points',
          'Anticipate counter-arguments',
          'Present logical flow of reasoning',
          'Respond constructively đến opposing views'
        ],
        expectedOutcome: 'Có thể defend một position bằng logical arguments và respectful discourse',
        realWorldApplication: 'Useful trong academic discussions, workplace negotiations, civic participation'
      }
    ],
    realWorldApplications: [
      'Đánh giá thông tin trên mạng xã hội và tránh fake news',
      'Ra quyết định mua sắm thông minh và tránh lừa đảo',
      'Giải quyết conflicts trong relationships một cách constructive',
      'Analyze job opportunities và career choices effectively',
      'Participate in democratic processes với informed opinions'
    ],
    caseStudies: [
      {
        title: 'Vingroup và Chiến Lược Đa Ngành',
        organization: 'Vingroup - Tập đoàn kinh tế tư nhân lớn nhất Việt Nam',
        problem: 'Làm sao Vingroup có thể diversify thành công từ real estate sang automotive, technology, healthcare?',
        solution: 'Sử dụng systematic analysis để identify market opportunities, leverage existing resources, và strategic acquisitions',
        impact: 'Trở thành conglomerate đa ngành với revenue hàng tỷ USD và create hàng nghìn job opportunities',
        innovations: [
          'Vertical integration strategy',
          'Cross-industry synergy exploitation',
          'Bold investment in emerging technologies',
          'Ecosystem building approach'
        ]
      }
    ],
    resources: [
      {
        title: 'Critical Thinking: A Beginner\'s Guide',
        url: 'https://www.criticalthinking.org/pages/critical-thinking-a-beginners-guide/510',
        type: 'Documentation'
      },
      {
        title: 'Logical Fallacies List',
        url: 'https://yourlogicalfallacyis.com/',
        type: 'Reference'
      }
    ]
  },
  {
    id: 'creative-problem-solving',
    title: 'Giải Quyết Vấn Đề Sáng Tạo',
    description: 'Học cách áp dụng design thinking và các phương pháp sáng tạo để giải quyết vấn đề phức tạp.',
    duration: '120 phút', 
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
    objectives: [
      'Nắm vững quy trình Design Thinking 5 bước',
      'Áp dụng các kỹ thuật brainstorming hiệu quả',
      'Phát triển khả năng think outside the box',
      'Tạo ra solutions có tính innovation cao'
    ],
    prerequisites: [
      'Hoàn thành bài "Cơ Bản Tư Duy Phê Phán"',
      'Có tinh thần mở và sẵn sàng thử nghiệm'
    ],
    thinkingFrameworks: [
      'Design Thinking Process',
      'SCAMPER Method',
      'Six Thinking Hats',
      'TRIZ Methodology'
    ],
    cognitiveSkills: [
      'Divergent Thinking',
      'Convergent Thinking',
      'Pattern Recognition',
      'Synthesis'
    ],
    assessmentMethods: [
      'Innovation project',
      'Prototype development',
      'Peer collaboration assessment',
      'Presentation of solutions'
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
          'Test: Gather feedback và iterate solution'
        ],
        expectedResults: 'Một solution concrete với potential impact measurement và implementation plan',
        solution: 'Multi-modal approach combining technology, behavior change, và policy recommendations'
      }
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
          'Create MVP concept và validation plan'
        ],
        expectedOutcome: 'Có một startup concept with clear value proposition và go-to-market strategy',
        realWorldApplication: 'Entrepreneurship, intrapreneurship trong companies, social innovation projects'
      }
    ],
    realWorldApplications: [
      'Tạo ra innovative solutions trong academic projects',
      'Solve workplace challenges với creative approaches',
      'Develop entrepreneurial ventures',
      'Improve personal productivity và life quality',
      'Contribute to community problem-solving initiatives'
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
          'Local partnership strategy'
        ]
      }
    ],
    resources: [
      {
        title: 'IDEO Design Kit',
        url: 'https://www.designkit.org/methods',
        type: 'Tool'
      },
      {
        title: 'Stanford d.school Design Thinking Process',
        url: 'https://dschool.stanford.edu/resources/design-thinking-bootleg',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'systems-thinking',
    title: 'Tư Duy Hệ Thống',
    description: 'Phát triển khả năng nhìn nhận vấn đề từ góc độ tổng thể, hiểu được mối quan hệ giữa các yếu tố.',
    duration: '105 phút',
    difficulty: 'Nâng cao', 
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được concept của systems thinking',
      'Nhận biết patterns và interconnections',
      'Phân tích root causes và systemic issues', 
      'Design interventions hiệu quả cho complex problems'
    ],
    prerequisites: [
      'Hoàn thành "Giải Quyết Vấn Đề Sáng Tạo"',
      'Có hiểu biết cơ bản về mathematics và logic'
    ],
    thinkingFrameworks: [
      'Systems Maps',
      'Causal Loop Diagrams', 
      'Stock and Flow Models',
      'Leverage Points Analysis'
    ],
    cognitiveSkills: [
      'Pattern Recognition',
      'Systems Analysis',
      'Dynamic Thinking', 
      'Strategic Planning'
    ],
    assessmentMethods: [
      'Systems mapping exercise',
      'Complex problem analysis',
      'Intervention design project',
      'Systems thinking reflection'
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
          'Design intervention strategy'
        ],
        expectedResults: 'Comprehensive understanding của education system và actionable improvement recommendations',
        solution: 'Multi-level intervention addressing teacher training, curriculum reform, technology integration, và parent engagement'
      }
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
          'Predict long-term outcomes'
        ],
        expectedOutcome: 'Holistic understanding của sustainability challenges và comprehensive solution framework',
        realWorldApplication: 'Environmental consulting, policy development, sustainable business strategy'
      }
    ],
    realWorldApplications: [
      'Strategic planning cho organizations',
      'Policy analysis và development', 
      'Sustainable development initiatives',
      'Complex project management',
      'Social innovation và community development'
    ],
    caseStudies: [
      {
        title: 'Vietnam\'s Digital Transformation Strategy',
        organization: 'Chính phủ Việt Nam - Digital Transformation Program',
        problem: 'Làm sao để transform toàn bộ economy sang digital trong context của developing country?',
        solution: 'Systematic approach addressing infrastructure, human capital, regulation, và innovation ecosystem simultaneously',
        impact: 'Significant improvement trong e-government services, digital literacy, và tech startup ecosystem',
        innovations: [
          'National digital ID system',
          'E-government platform integration',
          'Digital skills training programs',
          'Startup ecosystem development'
        ]
      }
    ],
    resources: [
      {
        title: 'Systems Thinking for Dummies',
        url: 'https://www.systemsthinking.org/',
        type: 'Documentation'
      },
      {
        title: 'Kumu Systems Mapping Tool',
        url: 'https://kumu.io/',
        type: 'Tool'
      }
    ]
  }
];