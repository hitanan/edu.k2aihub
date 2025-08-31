import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface PsychologyBehavioralScienceLesson extends BaseLessonData {
  psychologyCategory: 'business-psychology' | 'consumer-behavior' | 'workplace-psychology' | 'mental-health-tech' | 'behavioral-economics';
  applicationDomain: string[];
  vietnameseCulturalContext: string[];
  researchEvidence: string[];
  practicalTechniques: string[];
}

export const psychologyBehavioralScienceLessons: PsychologyBehavioralScienceLesson[] = [
  {
    id: 'applied-psychology-business',
    title: 'Tâm Lý Học Ứng Dụng trong Kinh Doanh',
    description: 'Áp dụng principles của psychology vào business strategy, leadership, team dynamics, và organizational behavior trong Vietnamese workplace culture.',
    duration: '185 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=NNhk3owF7RQ', // Psychology in Business
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop',
    psychologyCategory: 'business-psychology',
    applicationDomain: [
      'Leadership development',
      'Team building và collaboration',
      'Change management',
      'Conflict resolution'
    ],
    objectives: [
      'Apply psychological principles trong business decision-making',
      'Understand motivational theories và their application',
      'Develop emotional intelligence và interpersonal skills',
      'Implement behavioral change strategies trong organizations',
      'Design psychologically-informed management practices'
    ],
    prerequisites: [
      'Basic business knowledge',
      'Interest in human behavior và psychology'
    ],
    vietnameseCulturalContext: [
      'Hierarchical structures trong Vietnamese organizations',
      'Collectivist culture vs individualist management styles',
      'Face-saving behavior và its impact trên communication',
      'Traditional values meeting modern business practices'
    ],
    researchEvidence: [
      'Meta-analysis của leadership effectiveness studies',
      'Cross-cultural research on motivation factors',
      'Organizational psychology findings từ Vietnamese companies',
      'Behavioral economics applications trong Southeast Asia'
    ],
    practicalTechniques: [
      'DISC personality assessment interpretation',
      'Cognitive behavioral coaching techniques',
      'Active listening và empathy building exercises',
      'Conflict de-escalation strategies'
    ],
    exercises: [
      {
        title: 'Leadership Style Assessment & Development Plan',
        description: 'Analyze personal leadership style và develop improvement plan based on psychological principles',
        difficulty: 'Trung bình',
        materials: ['Leadership assessment tools', 'Personality tests', '360-degree feedback forms', 'Development planning templates'],
        procedure: [
          'Complete comprehensive leadership style assessments',
          'Gather feedback từ colleagues và subordinates',
          'Identify strengths, weaknesses, và blind spots',
          'Research psychological principles relevant to identified areas',
          'Create personalized development plan với measurable goals'
        ],
        expectedResults: 'Comprehensive leadership development plan grounded trong psychological research',
        solution: 'Evidence-based approach combining self-awareness, feedback integration, và targeted skill development'
      }
    ],
    realWorldApplications: [
      'Building high-performing teams trong multicultural environments',
      'Implementing organizational change initiatives',
      'Improving employee engagement và retention',
      'Developing cross-cultural management competencies'
    ],
    caseStudies: [
      {
        title: 'Vingroup Leadership Transformation',
        organization: 'Vingroup Corporation',
        problem: 'Developing leadership capabilities cho rapid expansion across diverse business sectors',
        solution: 'Psychology-based leadership development program, cultural adaptation training, peer coaching networks',
        impact: 'Improved leadership effectiveness scores by 40%, reduced management turnover by 25%',
        innovations: ['Cultural psychology integration', 'Behavioral coaching methodology', 'Peer learning systems']
      }
    ],
    resources: [
      {
        title: 'Organizational Psychology Research',
        url: 'https://www.apa.org/science/about/psa/2017/06/organizational-psychology',
        type: 'Research'
      }
    ]
  },
  {
    id: 'consumer-behavior-marketing-psychology',
    title: 'Hành Vi Người Tiêu Dùng & Tâm Lý Marketing',
    description: 'Understand consumer psychology, decision-making processes, và behavioral triggers để create more effective marketing strategies cho Vietnamese market.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Consumer Psychology
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
    psychologyCategory: 'consumer-behavior',
    applicationDomain: [
      'Digital marketing optimization',
      'Product positioning strategies',
      'Brand psychology',
      'Customer experience design'
    ],
    objectives: [
      'Analyze consumer decision-making processes',
      'Apply psychological principles trong marketing campaigns',
      'Design persuasive communication strategies',
      'Understand cultural influences on consumer behavior',
      'Implement behavioral nudges và choice architecture'
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Understanding of Vietnamese consumer culture'
    ],
    vietnameseCulturalContext: [
      'Importance of social status và peer influence',
      'Family decision-making structures trong purchases',
      'Traditional vs modern values trong consumer choices',
      'Regional differences trong shopping behavior'
    ],
    researchEvidence: [
      'Neuromarketing studies từ Vietnamese consumers',
      'Cross-cultural consumer psychology research',
      'Social media behavior analysis trong Vietnamese market',
      'E-commerce psychology findings từ Southeast Asia'
    ],
    practicalTechniques: [
      'Customer journey mapping với psychological insights',
      'A/B testing với behavioral hypotheses',
      'Persuasion techniques based on Cialdini principles',
      'Emotional branding strategies'
    ],
    exercises: [
      {
        title: 'Consumer Psychology Campaign Design',
        description: 'Develop marketing campaign for Vietnamese product sử dụng consumer psychology principles',
        difficulty: 'Nâng cao',
        materials: ['Consumer research data', 'Psychology frameworks', 'Creative development tools', 'Testing platforms'],
        procedure: [
          'Conduct consumer psychology research và insights gathering',
          'Identify key psychological triggers và motivations',
          'Develop campaign concept based on behavioral principles',
          'Create testing framework cho message effectiveness',
          'Design measurement plan cho behavioral outcomes'
        ],
        expectedResults: 'Psychology-informed marketing campaign với predicted behavioral outcomes',
        solution: 'Campaign incorporating social proof, scarcity, authority, và cultural relevance để drive desired consumer behavior'
      }
    ],
    realWorldApplications: [
      'E-commerce conversion optimization',
      'Social media engagement strategies',
      'Customer loyalty program design',
      'Product launch positioning'
    ],
    caseStudies: [
      {
        title: 'Shopee Psychology-Driven Features',
        organization: 'Shopee Vietnam',
        problem: 'Increasing user engagement và purchase frequency through psychological design',
        solution: 'Gamification elements, social proof integration, scarcity marketing, personalized recommendations',
        impact: 'Increased daily active users by 35%, improved conversion rates by 28%',
        innovations: ['Behavioral game mechanics', 'Social psychology features', 'AI-powered personalization']
      }
    ],
    resources: [
      {
        title: 'Consumer Behavior Research Methods',
        url: 'https://www.ama.org/marketing-news/behavioral-economics-and-consumer-psychology/',
        type: 'Research'
      }
    ]
  },
  {
    id: 'workplace-psychology-hr',
    title: 'Tâm Lý Công Sở & Quản Lý Nhân Sự',
    description: 'Apply workplace psychology principles trong HR practices, employee wellbeing, performance management, và creating positive organizational culture.',
    duration: '175 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u6XAPnuFjJc', // Workplace Psychology
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    psychologyCategory: 'workplace-psychology',
    applicationDomain: [
      'Employee recruitment và selection',
      'Performance management systems',
      'Workplace wellness programs',
      'Team dynamics optimization'
    ],
    objectives: [
      'Implement psychological assessment techniques trong hiring',
      'Design motivation systems based on behavioral science',
      'Address workplace stress và mental health issues',
      'Create psychologically safe work environments',
      'Develop evidence-based HR policies'
    ],
    prerequisites: [
      'HR management fundamentals',
      'Basic understanding of psychology principles'
    ],
    vietnameseCulturalContext: [
      'Work-life balance expectations trong Vietnamese culture',
      'Generational differences trong workplace preferences',
      'Traditional authority structures vs modern management',
      'Face-saving behavior trong performance discussions'
    ],
    researchEvidence: [
      'Employee engagement studies từ Vietnamese workplaces',
      'Cross-cultural research on job satisfaction factors',
      'Mental health statistics trong Vietnamese workforce',
      'Productivity psychology findings từ Asian countries'
    ],
    practicalTechniques: [
      'Behavioral interviewing methods',
      'Stress assessment và intervention strategies',
      'Team building exercises based on psychology',
      'Feedback delivery techniques'
    ],
    exercises: [
      {
        title: 'Workplace Wellness Program Design',
        description: 'Design comprehensive employee wellness program based on psychological principles',
        difficulty: 'Trung bình',
        materials: ['Employee survey data', 'Wellness assessment tools', 'Program design templates', 'ROI calculation models'],
        procedure: [
          'Conduct employee wellbeing assessment survey',
          'Identify key stressors và psychological challenges',
          'Research evidence-based wellness interventions',
          'Design program components với psychological rationale',
          'Create implementation và evaluation plan'
        ],
        expectedResults: 'Comprehensive wellness program với psychological foundation và measurable outcomes',
        solution: 'Multi-faceted program addressing stress management, work-life balance, social connection, và personal development'
      }
    ],
    realWorldApplications: [
      'Remote work policy development',
      'Performance review system redesign',
      'Conflict resolution trong diverse teams',
      'Change management communications'
    ],
    caseStudies: [
      {
        title: 'FPT Employee Engagement Transformation',
        organization: 'FPT Corporation',
        problem: 'Improving employee satisfaction và reducing turnover trong competitive tech market',
        solution: 'Psychology-based engagement surveys, personalized career development, flexible work arrangements, mental health support',
        impact: 'Employee satisfaction increased from 72% to 89%, turnover reduced by 35%',
        innovations: ['Predictive analytics for engagement', 'Personalized development paths', 'Peer support networks']
      }
    ],
    resources: [
      {
        title: 'Industrial and Organizational Psychology',
        url: 'https://www.siop.org/business-resources',
        type: 'Professional'
      }
    ]
  },
  {
    id: 'mental-health-wellness-technology',
    title: 'Công Nghệ Sức Khỏe Tâm Thần & Wellness',
    description: 'Explore digital mental health solutions, wellness apps, và technology-enabled therapeutic interventions với focus trên Vietnamese cultural context.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=IlU-zDU6aQ0', // Digital Mental Health Solutions
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    psychologyCategory: 'mental-health-tech',
    applicationDomain: [
      'Digital therapeutics development',
      'Wellness app design',
      'Teletherapy platforms',
      'Mental health monitoring systems'
    ],
    objectives: [
      'Understand digital mental health intervention principles',
      'Design culturally appropriate wellness technologies',
      'Implement evidence-based therapeutic approaches trong digital format',
      'Address privacy và ethical considerations',
      'Evaluate effectiveness của digital mental health tools'
    ],
    prerequisites: [
      'Basic psychology knowledge',
      'Understanding of digital health concepts',
      'Awareness of mental health stigma issues'
    ],
    vietnameseCulturalContext: [
      'Mental health stigma trong Vietnamese society',
      'Traditional healing practices vs modern approaches',
      'Family involvement trong mental health decisions',
      'Cultural barriers to seeking help'
    ],
    researchEvidence: [
      'Efficacy studies của digital mental health interventions',
      'Cultural adaptation research cho Asian populations',
      'Mobile health adoption patterns trong Vietnam',
      'Evidence-based therapy protocols có thể digitize'
    ],
    practicalTechniques: [
      'Cognitive Behavioral Therapy (CBT) digitization methods',
      'Mindfulness và meditation app development',
      'Mood tracking và analytics implementation',
      'Crisis intervention technology design'
    ],
    exercises: [
      {
        title: 'Mental Health App Prototype Development',
        description: 'Design và prototype mental health app tailored cho Vietnamese users',
        difficulty: 'Nâng cao',
        materials: ['App development tools', 'UX/UI design software', 'Clinical psychology resources', 'Cultural research data'],
        procedure: [
          'Research target user needs và cultural considerations',
          'Define therapeutic approach và evidence base',
          'Design user interface với cultural sensitivity',
          'Develop core features và user journey',
          'Create testing plan với mental health professionals'
        ],
        expectedResults: 'Functional app prototype với culturally-adapted mental health features',
        solution: 'App combining evidence-based interventions với Vietnamese cultural values, language, và help-seeking patterns'
      }
    ],
    realWorldApplications: [
      'Corporate employee assistance programs',
      'University student counseling services',
      'Healthcare system mental health screening',
      'Community-based wellness initiatives'
    ],
    caseStudies: [
      {
        title: 'Elefant Mental Health Platform',
        organization: 'Elefant Vietnam',
        problem: 'Providing accessible mental health support trong stigma-conscious Vietnamese culture',
        solution: 'Anonymous counseling platform, culturally-adapted therapy content, peer support communities, family education resources',
        impact: 'Served 50,000+ users, reduced barrier to mental health access by 60%',
        innovations: ['Cultural adaptation framework', 'Anonymous support systems', 'Family-inclusive approaches']
      }
    ],
    resources: [
      {
        title: 'Digital Mental Health Guidelines',
        url: 'https://www.who.int/publications/i/item/9789240012455',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'behavioral-economics-decision-science',
    title: 'Kinh Tế Học Hành Vi & Khoa Học Quyết Định',
    description: 'Understand cognitive biases, decision-making patterns, và behavioral economics principles để improve business strategy và policy design.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=9X68dm92HVI', // Behavioral Economics
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    psychologyCategory: 'behavioral-economics',
    applicationDomain: [
      'Business strategy development',
      'Public policy design',
      'Product development',
      'Financial services innovation'
    ],
    objectives: [
      'Identify và analyze common cognitive biases',
      'Apply nudge theory trong product và service design',
      'Design choice architecture để influence behavior',
      'Understand cultural variations trong decision-making',
      'Implement behavioral insights trong business strategy'
    ],
    prerequisites: [
      'Basic economics understanding',
      'Statistics và research methods knowledge',
      'Critical thinking skills'
    ],
    vietnameseCulturalContext: [
      'Risk-taking propensity trong Vietnamese business culture',
      'Social influence patterns trong financial decisions',
      'Traditional vs modern approach to investment',
      'Cultural factors affecting economic behavior'
    ],
    researchEvidence: [
      'Behavioral economics experiments from Vietnamese context',
      'Cross-cultural studies on decision-making biases',
      'Financial behavior research trong developing markets',
      'Policy intervention effectiveness studies'
    ],
    practicalTechniques: [
      'A/B testing cho behavioral interventions',
      'Choice architecture design methods',
      'Behavioral survey design techniques',
      'Data analysis methods cho behavioral insights'
    ],
    exercises: [
      {
        title: 'Behavioral Intervention Design Project',
        description: 'Design behavioral intervention để improve savings behavior among Vietnamese millennials',
        difficulty: 'Nâng cao',
        materials: ['Behavioral economics frameworks', 'Survey design tools', 'Statistical analysis software', 'Intervention design templates'],
        procedure: [
          'Research target population behavior patterns',
          'Identify relevant cognitive biases và barriers',
          'Design behavioral intervention based on proven techniques',
          'Develop testing methodology với control groups',
          'Create measurement plan cho behavioral outcomes'
        ],
        expectedResults: 'Evidence-based behavioral intervention design với testable hypotheses',
        solution: 'Multi-component intervention using commitment devices, social proof, loss aversion, và default options'
      }
    ],
    realWorldApplications: [
      'Retirement savings program design',
      'Healthcare compliance improvement',
      'Environmental behavior change campaigns',
      'Financial literacy program development'
    ],
    caseStudies: [
      {
        title: 'Momo Behavioral Finance Features',
        organization: 'M_Service (MoMo)',
        problem: 'Encouraging better financial habits among Vietnamese mobile payment users',
        solution: 'Behavioral design features including savings goals, spending categorization, social comparison, micro-investments',
        impact: 'Increased savings rate by 45%, improved financial literacy scores by 30%',
        innovations: ['Gamified saving mechanisms', 'Social financial challenges', 'Automated behavioral nudges']
      }
    ],
    resources: [
      {
        title: 'Behavioral Economics Research Center',
        url: 'https://www.chicagobooth.edu/research/center-for-decision-research',
        type: 'Research'
      }
    ]
  }
];