import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EventManagementLesson extends BaseLessonData {
  eventCategory: 'corporate-events' | 'entertainment-events' | 'virtual-events' | 'event-technology' | 'festival-management';
  technologyFocus: string[];
  vietnameseEventContext: string[];
  industryApplications: string[];
  eventScale: 'small' | 'medium' | 'large' | 'mega';
}

export const eventManagementLessons: EventManagementLesson[] = [
  {
    id: 'digital-event-production-management',
    title: 'Quản Lý & Sản Xuất Sự Kiện Số',
    description: 'Comprehensive event production management covering digital event platforms, live streaming technology, hybrid events, và virtual reality experiences.',
    duration: '215 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=hSD5qbG5jzU', // Digital Event Production
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    eventCategory: 'virtual-events',
    eventScale: 'large',
    technologyFocus: [
      'Live streaming platforms and technologies',
      'Virtual event platforms (Zoom, Teams, custom solutions)',
      'Audio/visual production equipment',
      'Event management software systems'
    ],
    objectives: [
      'Master digital event production workflows',
      'Design hybrid event experiences combining physical và virtual elements',
      'Implement live streaming solutions với professional quality',
      'Manage virtual audience engagement và interaction',
      'Develop event technology integration strategies'
    ],
    prerequisites: [
      'Basic event planning knowledge',
      'Understanding of digital media',
      'Project management fundamentals'
    ],
    vietnameseEventContext: [
      'Vietnamese corporate conference digitalization',
      'Traditional festival live streaming adaptation',
      'Wedding ceremony digital integration',
      'Business networking event online platforms'
    ],
    industryApplications: [
      'Corporate training và webinar management',
      'Entertainment show live streaming',
      'Educational conference digital delivery',
      'Product launch virtual experiences'
    ],
    exercises: [
      {
        title: 'Hybrid Corporate Conference Design',
        description: 'Plan và execute hybrid corporate conference for 1000+ attendees combining physical venue trong Hanoi với global virtual participation',
        difficulty: 'Nâng cao',
        materials: ['Event planning software', 'Live streaming equipment list', 'Virtual platform comparison', 'Budget planning tools'],
        procedure: [
          'Design hybrid event architecture với seamless integration',
          'Plan production workflow including technical setup và crew coordination',
          'Develop audience engagement strategy cho both physical và virtual attendees',
          'Create content delivery plan optimized for dual audiences',
          'Implement measurement framework for event success metrics'
        ],
        expectedResults: 'Comprehensive hybrid event plan với detailed production timeline, technical specifications, và engagement strategy',
        solution: 'Professional hybrid event design với Vietnamese corporate culture integration, multi-platform delivery, và measurable engagement outcomes'
      }
    ],
    realWorldApplications: [
      'VinGroup annual shareholder meetings',
      'FPT technology conferences',
      'University graduation ceremonies',
      'Government policy announcement events'
    ],
    caseStudies: [
      {
        title: 'Vietnam Web Summit Digital Transformation',
        organization: 'Vietnam Web Summit',
        problem: 'Transitioning major technology conference from physical-only to hybrid format during COVID-19 và maintaining post-pandemic',
        solution: 'Advanced hybrid platform development, multi-camera live streaming, virtual networking solutions, interactive presentations',
        impact: 'Increased attendance from 3,000 to 15,000 participants, reduced costs by 40%, expanded international participation by 300%',
        innovations: ['Custom Vietnamese-language virtual platform', 'AI-powered networking matching', 'Multi-timezone content delivery']
      }
    ],
    resources: [
      {
        title: 'Digital Event Production Guide',
        url: 'https://www.eventmanagerblog.com/digital-event-production',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'entertainment-technology-systems',
    title: 'Hệ Thống Công Nghệ Giải Trí',
    description: 'Advanced entertainment technology including sound systems, lighting design, stage automation, và immersive experience technologies.',
    duration: '235 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=aWRG367veTM', // Entertainment Technology Systems
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
    eventCategory: 'entertainment-events',
    eventScale: 'mega',
    technologyFocus: [
      'Professional audio systems và mixing',
      'LED lighting design và programming',
      'Stage automation và rigging systems',
      'Virtual và augmented reality entertainment'
    ],
    objectives: [
      'Design professional entertainment audio systems',
      'Master LED lighting programming và control systems',
      'Implement stage automation và special effects',
      'Integrate VR/AR technology trong entertainment experiences',
      'Develop safety protocols cho large-scale entertainment systems'
    ],
    prerequisites: [
      'Basic electronics knowledge',
      'Understanding of entertainment industry',
      'Technical problem-solving skills'
    ],
    vietnameseEventContext: [
      'Vietnamese concert venue technical specifications',
      'Traditional music festival technology integration',
      'International artist tour technical requirements',
      'Outdoor festival weather và infrastructure challenges'
    ],
    industryApplications: [
      'Concert venue system design',
      'Theater production technology',
      'Festival main stage systems',
      'Corporate entertainment experiences'
    ],
    exercises: [
      {
        title: 'Festival Main Stage Technical Design',
        description: 'Design complete technical system cho main stage of major Vietnamese music festival (50,000+ capacity)',
        difficulty: 'Nâng cao',
        materials: ['Audio system design software', 'Lighting control platforms', 'Structural engineering tools', 'Safety regulation documents'],
        procedure: [
          'Analyze venue acoustics và design sound system layout',
          'Create lighting design supporting multiple performance types',
          'Plan power distribution và technical infrastructure',
          'Design safety systems včně crowd management technology',
          'Develop technical rider templates cho international artists'
        ],
        expectedResults: 'Professional festival stage design với detailed technical specifications, safety protocols, và artist accommodation plans',
        solution: 'Comprehensive entertainment system design optimized cho Vietnamese outdoor conditions, international technical standards, và cultural event requirements'
      }
    ],
    realWorldApplications: [
      'My Dinh Stadium concert productions',
      'Saigon Opera House technical upgrades',
      'Phu Quoc music festival systems',
      'Indoor entertainment venue designs'
    ],
    caseStudies: [
      {
        title: '7UP Music Festival Technology Integration',
        organization: 'BEC Entertainment',
        problem: 'Creating world-class entertainment technology system cho Vietnam\'s largest outdoor music festival',
        solution: 'State-of-the-art sound systems, advanced LED video walls, automated lighting systems, crowd management technology',
        impact: 'Successfully hosted 100,000+ attendees, achieved international production standards, attracted major international artists',
        innovations: ['Weather-resistant outdoor systems', 'Crowd flow optimization technology', 'Multi-stage audio coordination']
      }
    ],
    resources: [
      {
        title: 'Professional Audio Systems Guide',
        url: 'https://service.shure.com/s/article/live-sound-system-setup-guide',
        type: 'Technical'
      }
    ]
  },
  {
    id: 'event-marketing-digital-engagement',
    title: 'Marketing Sự Kiện & Tương Tác Số',
    description: 'Digital marketing strategies for events, social media engagement, influencer partnerships, và data-driven event promotion.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=UZY4fSIjKjs', // Event Marketing and Digital Engagement
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Social media marketing platforms',
      'Event mobile app development',
      'Digital ticketing systems',
      'Analytics và audience insights tools'
    ],
    objectives: [
      'Develop comprehensive digital marketing strategies cho events',
      'Create engaging social media campaigns',
      'Build event mobile applications với networking features',
      'Implement data analytics cho audience behavior insights',
      'Manage influencer partnerships và brand collaborations'
    ],
    prerequisites: [
      'Digital marketing fundamentals',
      'Social media marketing experience',
      'Basic data analytics knowledge'
    ],
    vietnameseEventContext: [
      'Vietnamese social media landscape (Facebook, Zalo, TikTok)',
      'Local influencer partnership strategies',
      'Cultural sensitivity trong event marketing',
      'Government regulation compliance cho events'
    ],
    industryApplications: [
      'Corporate event promotion campaigns',
      'Entertainment event ticket sales',
      'Conference attendee acquisition',
      'Festival brand partnership management'
    ],
    exercises: [
      {
        title: 'Integrated Event Marketing Campaign',
        description: 'Create comprehensive digital marketing campaign cho launching new technology conference trong Vietnamese market',
        difficulty: 'Trung bình',
        materials: ['Social media management tools', 'Analytics platforms', 'Email marketing software', 'Influencer databases'],
        procedure: [
          'Conduct target audience research trong Vietnamese technology community',
          'Design multi-channel marketing strategy including social media, email, influencers',
          'Create content calendar với culturally appropriate messaging',
          'Develop event app với networking và engagement features',
          'Implement tracking và measurement system cho campaign ROI'
        ],
        expectedResults: 'Complete event marketing campaign với measurable engagement goals, budget allocation, và success metrics',
        solution: 'Integrated digital marketing approach leveraging Vietnamese social media preferences, local influencers, và cultural insights'
      }
    ],
    realWorldApplications: [
      'Startup ecosystem event promotion',
      'International conference attendee acquisition',
      'Cultural festival digital marketing',
      'Corporate training program promotion'
    ],
    caseStudies: [
      {
        title: 'TEDxHoChiminhCity Digital Marketing Success',
        organization: 'TEDx Ho Chi Minh City',
        problem: 'Building audience for annual TEDx event trong competitive Vietnamese speaking event market',
        solution: 'Multi-platform social media strategy, Vietnamese influencer partnerships, mobile app development, data-driven targeting',
        impact: 'Increased ticket sales by 200%, built community of 50,000+ followers, achieved 95% venue capacity',
        innovations: ['Vietnamese cultural adaptation', 'Local influencer network', 'Community-building approach']
      }
    ],
    resources: [
      {
        title: 'Event Marketing Handbook',
        url: 'https://blog.hootsuite.com/event-marketing/',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'festival-operations-logistics',
    title: 'Vận Hành & Logistics Festival',
    description: 'Large-scale festival management including logistics coordination, vendor management, safety planning, và operational excellence.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=OyLHB7A4b9I', // Festival Operations and Logistics
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
    eventCategory: 'festival-management',
    eventScale: 'mega',
    technologyFocus: [
      'Festival management software systems',
      'RFID và contactless payment systems',
      'Crowd monitoring và safety technology',
      'Supply chain management platforms'
    ],
    objectives: [
      'Master large-scale festival logistics planning',
      'Implement vendor coordination và supply chain management',
      'Develop comprehensive safety và security protocols',
      'Design efficient crowd flow và venue layout',
      'Create operational command centers với real-time monitoring'
    ],
    prerequisites: [
      'Event management experience',
      'Project management skills',
      'Understanding of safety regulations'
    ],
    vietnameseEventContext: [
      'Vietnamese government permits và regulatory compliance',
      'Monsoon season event planning adaptations',
      'Local vendor ecosystem integration',
      'Cultural festival tradition incorporation'
    ],
    industryApplications: [
      'Music festival operations management',
      'Food festival logistics coordination',
      'Cultural celebration organization',
      'Corporate outdoor event management'
    ],
    exercises: [
      {
        title: 'Multi-Day Festival Operations Plan',
        description: 'Develop comprehensive operations plan cho 3-day Vietnamese cultural festival expecting 200,000+ attendees',
        difficulty: 'Nâng cao',
        materials: ['Festival planning software', 'Logistics management tools', 'Safety planning templates', 'Vendor management systems'],
        procedure: [
          'Design festival site layout optimizing crowd flow và vendor placement',
          'Create detailed logistics plan including transportation, waste management, utilities',
          'Develop safety protocols including emergency response procedures',
          'Plan vendor coordination system với real-time communication',
          'Design operational dashboard cho real-time festival monitoring'
        ],
        expectedResults: 'Complete festival operations manual với detailed timelines, responsibility matrices, và contingency plans',
        solution: 'Professional festival operations framework với Vietnamese regulatory compliance, cultural integration, và operational excellence'
      }
    ],
    realWorldApplications: [
      'Hoi An Lantern Festival operations',
      'Ho Chi Minh City Tet Festival coordination',
      'International food festival management',
      'Corporate family day event planning'
    ],
    caseStudies: [
      {
        title: 'Quest Festival Operations Excellence',
        organization: 'Quest Music Festival Vietnam',
        problem: 'Managing complex logistics cho international EDM festival trong challenging tropical conditions',
        solution: 'Advanced operations center, RFID attendee tracking, weather contingency systems, international vendor coordination',
        impact: 'Successfully managed 80,000+ attendees over 3 days, zero major safety incidents, 98% attendee satisfaction rate',
        innovations: ['Weather-adaptive operations', 'Real-time crowd analytics', 'International standard safety protocols']
      }
    ],
    resources: [
      {
        title: 'Festival Operations Manual',
        url: 'https://www.eventbrite.com/blog/festival-planning-guide/',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'event-analytics-performance-measurement',
    title: 'Phân Tích & Đo Lường Hiệu Quả Sự Kiện',
    description: 'Data-driven event analysis, ROI measurement, attendee behavior analytics, và performance optimization strategies.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=eqtcvmzyP1E', // Event Analytics and ROI Measurement
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Event analytics platforms',
      'Survey và feedback collection tools',
      'Heat mapping và behavior tracking',
      'ROI calculation và reporting systems'
    ],
    objectives: [
      'Implement comprehensive event measurement frameworks',
      'Design data collection strategies cho attendee behavior analysis',
      'Calculate event ROI và value metrics',
      'Create actionable insights từ event performance data',
      'Develop predictive models cho future event planning'
    ],
    prerequisites: [
      'Basic data analytics knowledge',
      'Event planning experience',
      'Understanding of business metrics'
    ],
    vietnameseEventContext: [
      'Vietnamese corporate event success metrics',
      'Cultural festival impact measurement',
      'Government event effectiveness evaluation',
      'Tourism event economic impact analysis'
    ],
    industryApplications: [
      'Corporate conference ROI analysis',
      'Entertainment event performance optimization',
      'Trade show effectiveness measurement',
      'Cultural event community impact assessment'
    ],
    exercises: [
      {
        title: 'Event Performance Dashboard Development',
        description: 'Create comprehensive analytics dashboard cho tracking và optimizing corporate conference performance',
        difficulty: 'Trung bình',
        materials: ['Analytics software platforms', 'Survey design tools', 'Dashboard development tools', 'Statistical analysis software'],
        procedure: [
          'Define key performance indicators cho event success measurement',
          'Design data collection strategy including surveys, tracking, analytics',
          'Build real-time dashboard với actionable insights',
          'Implement predictive analytics cho attendance và engagement forecasting',
          'Create automated reporting system cho stakeholder communication'
        ],
        expectedResults: 'Professional event analytics dashboard với real-time insights, predictive capabilities, và actionable recommendations',
        solution: 'Comprehensive analytics platform combining quantitative metrics, qualitative feedback, và predictive modeling cho event optimization'
      }
    ],
    realWorldApplications: [
      'Corporate training program effectiveness',
      'International conference impact measurement',
      'Festival economic impact analysis',
      'Government event citizen satisfaction tracking'
    ],
    caseStudies: [
      {
        title: 'VietinBank Customer Conference Analytics',
        organization: 'VietinBank',
        problem: 'Measuring ROI và optimizing annual customer conference strategy',
        solution: 'Advanced analytics platform, multi-touchpoint data collection, predictive attendance modeling, ROI tracking system',
        impact: 'Improved event ROI by 65%, increased attendee satisfaction to 92%, optimized future event planning với predictive insights',
        innovations: ['Vietnamese customer behavior insights', 'Banking sector-specific metrics', 'Predictive event optimization']
      }
    ],
    resources: [
      {
        title: 'Event ROI Measurement Guide',
        url: 'https://www.cvent.com/en/blog/events/event-roi-measurement',
        type: 'Resource'
      }
    ]
  }
];