import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface CommunicationSkillsLessonType extends BaseLessonData {
  communicationMethods: string[];
  presentationTechniques: string[];
  culturalContext: string[];
  digitalPlatforms: string[];
  assessmentCriteria: string[];
}

export const communicationSkillsLessons: CommunicationSkillsLessonType[] = [
  {
    id: 'effective-communication-fundamentals',
    title: 'Cơ Bản Giao Tiếp Hiệu Quả',
    description: 'Nắm vững các nguyên tắc cơ bản của giao tiếp hiệu quả, từ ngôn ngữ cơ thể đến kỹ năng lắng nghe tích cực.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=HAnw168huqA', // The Power of Effective Communication - TED
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được các thành phần của communication process',
      'Phát triển kỹ năng active listening và empathy',
      'Nắm vững nonverbal communication và body language',
      'Học cách adapt communication style theo audience'
    ],
    prerequisites: [
      'Không có yêu cầu tiên quyết',
      'Sẵn sàng practice và receive feedback'
    ],
    communicationMethods: [
      'Verbal Communication',
      'Nonverbal Communication',
      'Written Communication',
      'Digital Communication'
    ],
    presentationTechniques: [
      'Storytelling Framework',
      'Visual Design Principles',
      'Audience Engagement Methods',
      'Q&A Handling Strategies'
    ],
    culturalContext: [
      'Vietnamese Business Culture',
      'International Communication Norms',
      'Cross-generational Communication',
      'Social Media Etiquette'
    ],
    digitalPlatforms: [
      'Video Conferencing (Zoom, Teams)',
      'Social Media Platforms',
      'Email Communication',
      'Presentation Tools (PowerPoint, Canva)'
    ],
    assessmentCriteria: [
      'Clarity and coherence',
      'Audience engagement',
      'Nonverbal effectiveness',
      'Message delivery impact'
    ],
    exercises: [
      {
        title: 'Active Listening Practice',
        description: 'Thực hành kỹ năng lắng nghe tích cực qua role-playing exercises',
        difficulty: 'Cơ bản',
        materials: ['Scenario cards', 'Feedback forms', 'Recording equipment (optional)'],
        procedure: [
          'Chia thành pairs với one speaker và one listener',
          'Speaker shares một personal experience trong 3 phút',
          'Listener practice active listening techniques',
          'Listener summarizes what they heard',
          'Switch roles và repeat process',
          'Group discussion về challenges và insights'
        ],
        expectedResults: 'Cải thiện significantly khả năng listen with empathy và understanding',
        solution: 'Focus on paraphrasing, asking clarifying questions, và showing genuine interest through body language'
      },
      {
        title: 'Elevator Pitch Challenge',
        description: 'Tạo và present một elevator pitch compelling về bản thân hoặc một idea',
        difficulty: 'Trung bình',
        materials: ['Timer', 'Evaluation rubric', 'Video recording setup'],
        procedure: [
          'Brainstorm key points về personal strengths hoặc idea',
          'Structure pitch using STAR method (Situation, Task, Action, Result)',
          'Practice delivery với attention to tone và pace',
          'Present to group trong exactly 60 seconds',
          'Receive constructive feedback',
          'Refine và present again'
        ],
        expectedResults: 'Một concise, compelling elevator pitch có thể adapt cho different contexts',
        solution: 'Balance của personal story, value proposition, và clear call-to-action'
      }
    ],
    realWorldApplications: [
      'Job interviews và career networking events',
      'Academic presentations và group projects',
      'Social interactions và relationship building',
      'Online communication và digital presence management',
      'Customer service và conflict resolution'
    ],
    caseStudies: [
      {
        title: 'Shark Tank Vietnam - Presentation Success Stories',
        organization: 'Shark Tank Vietnam - Startup Pitching Show',
        problem: 'Làm sao startup founders có thể convince seasoned investors trong chỉ vài phút?',
        solution: 'Combination của compelling storytelling, clear value proposition, strong financials, và confident delivery',
        impact: 'Nhiều startups received funding và became household names sau khi appearance',
        innovations: [
          'Story-driven pitch structure',
          'Visual demonstration techniques', 
          'Financial data presentation',
          'Investor psychology understanding'
        ]
      }
    ],
    resources: [
      {
        title: 'TED Talks on Communication',
        url: 'https://www.ted.com/topics/communication',
        type: 'Tutorial'
      },
      {
        title: 'Toastmasters International',
        url: 'https://www.toastmasters.org/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'digital-presentation-mastery',
    title: 'Thành Thạo Thuyết Trình Số',
    description: 'Học cách tạo và deliver presentations powerful sử dụng công nghệ hiện đại và digital tools.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Iwpi1Lm6dFo', // How to Give a Great Presentation - TED
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    objectives: [
      'Master các digital presentation tools (PowerPoint, Canva, Prezi)',
      'Áp dụng visual design principles cho effective slides',
      'Học cách engage audience trong virtual presentations',
      'Phát triển personal presentation style và brand'
    ],
    prerequisites: [
      'Hoàn thành "Cơ Bản Giao Tiếp Hiệu Quả"',
      'Có basic computer skills và internet access'
    ],
    communicationMethods: [
      'Visual Storytelling',
      'Interactive Presentations',
      'Multimedia Integration',
      'Real-time Audience Feedback'
    ],
    presentationTechniques: [
      'Slide Design Best Practices',
      'Animation và Transition Effects',
      'Data Visualization Methods',
      'Interactive Elements Integration'
    ],
    culturalContext: [
      'Vietnamese Educational Presentation Norms',
      'International Business Presentation Standards',
      'Academic Conference Presentation Styles',
      'Social Media Content Presentation'
    ],
    digitalPlatforms: [
      'Microsoft PowerPoint Advanced Features',
      'Canva Design Platform',
      'Prezi Presentation Software', 
      'Google Slides Collaboration Tools'
    ],
    assessmentCriteria: [
      'Visual design quality',
      'Content organization',
      'Technical execution',
      'Audience interaction'
    ],
    exercises: [
      {
        title: 'Interactive Presentation Design',
        description: 'Tạo một interactive presentation về một topic liên quan đến Vietnam sử dụng advanced digital tools',
        difficulty: 'Nâng cao',
        materials: ['Design software licenses', 'Topic research materials', 'Feedback collection tools'],
        procedure: [
          'Choose một topic relevant to Vietnamese students',
          'Research và gather compelling data và visuals',
          'Design slides using advanced features (animations, interactions)',
          'Incorporate multimedia elements (videos, audio, interactive polls)',
          'Practice delivery với technology integration',
          'Present to audience và collect real-time feedback'
        ],
        expectedResults: 'Một professional-quality interactive presentation có thể impress any audience',
        solution: 'Balance giữa visual appeal, content depth, technical sophistication, và audience engagement'
      }
    ],
    realWorldApplications: [
      'Academic research presentations tại conferences',
      'Business pitches và client presentations',
      'Educational content creation cho online platforms',
      'Marketing presentations và brand storytelling',
      'Social advocacy và community awareness campaigns'
    ],
    caseStudies: [
      {
        title: 'VinUniversity - Digital Education Transformation',
        organization: 'VinUniversity - Pioneering Private University in Vietnam',
        problem: 'Làm sao implement hiệu quả digital learning platforms và presentation methods?',
        solution: 'Comprehensive training programs cho faculty, investment in technology infrastructure, và student-centered design approach',
        impact: 'Became leading institution trong digital education innovation với high student satisfaction',
        innovations: [
          'Interactive lecture delivery systems',
          'Virtual reality learning environments',
          'AI-powered presentation feedback tools',
          'Multicultural presentation adaptation methods'
        ]
      }
    ],
    resources: [
      {
        title: 'Canva Design School',
        url: 'https://www.canva.com/designschool/',
        type: 'Tutorial'
      },
      {
        title: 'Presentation Zen Blog',
        url: 'https://www.presentationzen.com/',
        type: 'Reference'
      }
    ]
  },
  {
    id: 'cross-cultural-communication',
    title: 'Giao Tiếp Đa Văn Hóa',
    description: 'Phát triển kỹ năng giao tiếp hiệu quả trong môi trường đa văn hóa và quốc tế.',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=YMyofREc5Jk', // Cross-Cultural Communication - Harvard Business Review
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được cultural dimensions và impact on communication',
      'Phát triển cultural intelligence (CQ) và adaptability',
      'Học cách navigate language barriers và misunderstandings',
      'Build effective international networks và relationships'
    ],
    prerequisites: [
      'Hoàn thành "Thành Thạo Thuyết Trình Số"',
      'Có experience với international interactions (preferred)'
    ],
    communicationMethods: [
      'High-context vs Low-context Communication',
      'Direct vs Indirect Communication Styles',
      'Formal vs Informal Registers',
      'Silence và Nonverbal Cues Interpretation'
    ],
    presentationTechniques: [
      'Cultural Adaptation Strategies',
      'Universal Design Principles',
      'Inclusive Language Usage',
      'Global Audience Engagement'
    ],
    culturalContext: [
      'East Asian Communication Patterns',
      'Western Business Communication Norms',
      'ASEAN Cultural Diversity Understanding',
      'Digital Global Communication Etiquette'
    ],
    digitalPlatforms: [
      'International Video Conferencing',
      'Global Social Media Platforms',
      'Translation và Interpretation Tools',
      'Cross-cultural Collaboration Platforms'
    ],
    assessmentCriteria: [
      'Cultural sensitivity demonstration',
      'Adaptation flexibility',
      'Inclusive communication practice',
      'International networking effectiveness'
    ],
    exercises: [
      {
        title: 'International Business Simulation',
        description: 'Simulate một international business negotiation với participants from different cultural backgrounds',
        difficulty: 'Nâng cao',
        materials: ['Cultural profile cards', 'Business scenario documents', 'Communication style guides'],
        procedure: [
          'Assign cultural roles to each participant',
          'Study assigned cultural communication patterns',
          'Prepare negotiation strategy adapted to cultural context',
          'Conduct multilingual business meeting simulation',
          'Debrief về cultural challenges và successful adaptations',
          'Develop personal cross-cultural communication action plan'
        ],
        expectedResults: 'Deep understanding của how culture impacts business communication và practical strategies for success',
        solution: 'Combination của cultural research, empathy, flexibility, và strategic communication adaptation'
      }
    ],
    realWorldApplications: [
      'International business partnerships và negotiations',
      'Study abroad programs và international education',
      'Global remote work collaboration',
      'Cultural exchange programs và diplomatic relations',
      'International NGO work và humanitarian projects'
    ],
    caseStudies: [
      {
        title: 'Samsung Vietnam - Multicultural Workplace Success',
        organization: 'Samsung Vietnam - Major Technology Manufacturing Hub',
        problem: 'Làm sao manage effective communication between Korean management, Vietnamese workforce, và international partners?',
        solution: 'Comprehensive cultural training programs, bilingual management systems, và inclusive communication protocols',
        impact: 'Became one of most successful foreign investments in Vietnam với high employee satisfaction và productivity',
        innovations: [
          'Cultural liaison officer positions',
          'Multilingual communication systems',
          'Cultural celebration integration programs',
          'Cross-cultural mentorship networks'
        ]
      }
    ],
    resources: [
      {
        title: 'Hofstede Cultural Dimensions',
        url: 'https://www.hofstede-insights.com/',
        type: 'Reference'
      },
      {
        title: 'Cross-Cultural Communication Institute',
        url: 'https://www.intercultural.org/',
        type: 'Documentation'
      }
    ]
  }
];