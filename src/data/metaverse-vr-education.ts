import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface MetaverseVRLessonType extends BaseLessonData {
  technologyLevel: string;
  tools: string[];
  headsetCompatibility: string[];
}

export const MetaverseVREducationLessons: MetaverseVRLessonType[] = [
  {
    id: 'metaverse-fundamentals',
    title: 'Cơ Bản Về Metaverse và Thực Tế Ảo',
    description: 'Tìm hiểu về Metaverse, VR/AR technology và cách chúng đang thay đổi giáo dục và cuộc sống',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    technologyLevel: 'Beginner',
    tools: ['Meta Quest', 'VR Chat', 'Mozilla Hubs', 'Horizon Worlds'],
    headsetCompatibility: ['Oculus Quest 2/3', 'HTC Vive', 'PlayStation VR', 'Smartphone VR'],
    videoUrl: 'https://www.youtube.com/watch?v=YJg02ivYzSs',
    imageUrl: '/images/metaverse-fundamentals.jpg',
    objectives: [
      'Hiểu được khái niệm Metaverse và Web3',
      'Phân biệt VR, AR, MR và các ứng dụng',
      'Sử dụng cơ bản VR headset và navigation',
      'Tạo avatar và tương tác trong môi trường VR',
      'Nhận biết cơ hội nghề nghiệp trong lĩnh vực này'
    ],
    prerequisites: [
      'Kiến thức cơ bản về internet và technology',
      'Hiểu biết về social media và gaming',
      'Không cần kinh nghiệm VR trước đó'
    ],
    exercises: [
      {
        title: 'Trải Nghiệm VR Đầu Tiên',
        description: 'Sử dụng VR headset để khám phá môi trường ảo đầu tiên',
        difficulty: 'Cơ bản',
        materials: ['VR Headset (hoặc smartphone + VR cardboard)', 'Ứng dụng VR Chat hoặc Mozilla Hubs'],
        procedure: [
          'Tải và cài đặt ứng dụng VR trên thiết bị',
          'Thiết lập VR headset và calibration cơ bản',
          'Tạo tài khoản và avatar cá nhân',
          'Tham gia một virtual room công cộng',
          'Thực hành di chuyển và tương tác cơ bản',
          'Tham gia một virtual classroom hoặc museum tour'
        ],
        expectedResults: 'Có thể navigation và tương tác cơ bản trong môi trường VR',
        solution: 'Hướng dẫn chi tiết setup và troubleshooting các vấn đề thường gặp'
      },
      {
        title: 'Tạo Virtual Learning Space',
        description: 'Thiết kế một không gian học tập ảo đơn giản',
        difficulty: 'Trung bình',
        materials: ['Mozilla Hubs', 'Blender (optional)', 'Template assets'],
        procedure: [
          'Đăng ký tài khoản Mozilla Hubs',
          'Sử dụng built-in tools để tạo room',
          'Thêm 3D objects và educational materials',
          'Thiết lập lighting và environment',
          'Invite friends để test collaboration',
          'Customization với branded elements'
        ],
        expectedResults: 'Tạo được một virtual classroom có thể chia sẻ và sử dụng',
        solution: 'Template và best practices cho virtual learning space design'
      }
    ],
    realWorldApplications: [
      'Virtual classrooms cho remote learning hiệu quả hơn',
      'Medical training với VR simulation không rủi ro',
      'Architecture và engineering visualization và review',
      'Historical recreations cho history education',
      'Language learning với immersive environments',
      'Soft skills training và presentation practice',
      'Virtual field trips đến những nơi không thể đến được'
    ],
    caseStudies: [
      {
        title: 'VinGroup VR Training Program',
        organization: 'Tập đoàn Vingroup - Việt Nam',
        problem: 'Đào tạo nhân viên retail và customer service hiệu quả',
        solution: 'Phát triển VR training modules cho các tình huống customer interaction',
        impact: 'Giảm 40% thời gian training, tăng 60% retention rate',
        innovations: ['Realistic customer scenarios', 'Multi-language support', 'Performance analytics', 'Gamification elements']
      },
      {
        title: 'Stanford Virtual Heart Program',
        organization: 'Stanford University Medical School',
        problem: 'Medical students cần hiểu cấu trúc tim 3D phức tạp',
        solution: 'VR application cho phép students "đi vào" tim và khám phá chi tiết',
        impact: 'Tăng 90% comprehension rate, giảm 50% study time',
        innovations: ['Interactive 3D anatomy', 'Real patient data integration', 'Collaborative learning', 'Assessment tools']
      }
    ],
    resources: [
      {
        title: 'Meta for Education - VR Learning Resources',
        url: 'https://about.meta.com/realitylabs/education/',
        type: 'Documentation'
      },
      {
        title: 'Mozilla Hubs Creator Guide',
        url: 'https://hubs.mozilla.com/docs/creators-guide.html',
        type: 'Tutorial'
      },
      {
        title: 'Unity VR Development Fundamentals',
        url: 'https://learn.unity.com/course/vr-development-fundamentals',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'vr-content-creation',
    title: 'Tạo Nội Dung VR Giáo Dục',
    description: 'Học cách thiết kế và phát triển virtual experiences và educational content cho VR platforms',
    duration: '120 phút',
    difficulty: 'Trung bình',
    technologyLevel: 'Intermediate',
    tools: ['Unity 3D', 'Blender', 'A-Frame', 'CoSpaces Edu', 'Tilt Brush'],
    headsetCompatibility: ['Oculus Quest 2/3', 'HTC Vive', 'Windows Mixed Reality'],
    videoUrl: 'https://www.youtube.com/watch?v=1cQbMP3I5Sk',
    imageUrl: '/images/vr-content-creation.jpg',
    objectives: [
      'Thiết kế UX/UI cho VR environments',
      'Sử dụng Unity hoặc A-Frame để tạo VR applications',
      'Tối ưu hóa performance cho VR experiences',
      'Tạo interactive elements và gamification',
      'Deploy VR content lên các platforms khác nhau'
    ],
    prerequisites: [
      'Hoàn thành khóa "Cơ Bản Về Metaverse và Thực Tế Ảo"',
      'Kiến thức cơ bản về 3D design hoặc game development',
      'Hiểu biết về user experience principles'
    ],
    exercises: [
      {
        title: 'Thiết Kế Virtual Museum',
        description: 'Tạo một virtual museum showcase Vietnamese history',
        difficulty: 'Trung bình',
        materials: ['Unity 3D', 'Free 3D assets', 'Historical images và videos', 'VR headset for testing'],
        procedure: [
          'Planning museum layout và user journey',
          'Import và setup 3D models trong Unity',
          'Tạo interactive exhibits với text, audio, video',
          'Implement teleportation và navigation systems',
          'Add atmospheric elements (lighting, sound)',
          'Build và test trên VR headset',
          'Optimize performance và fix issues',
          'Deploy lên WebXR hoặc app stores'
        ],
        expectedResults: 'Một virtual museum hoàn chỉnh có thể chia sẻ và trải nghiệm',
        solution: 'Step-by-step Unity tutorial với pre-made assets và templates'
      },
      {
        title: 'VR Chemistry Lab Simulation',
        description: 'Phát triển virtual chemistry lab cho safe experimentation',
        difficulty: 'Nâng cao',
        materials: ['Unity 3D với VR packages', 'Chemistry 3D models', 'Physics simulation tools'],
        procedure: [
          'Research chemistry experiments suitable for VR',
          'Design lab environment với safety protocols',
          'Implement realistic physics cho chemical reactions',
          'Create step-by-step guided experiments',
          'Add safety warnings và educational content',
          'Build assessment và progress tracking',
          'User testing với students và teachers',
          'Iterate based on feedback'
        ],
        expectedResults: 'VR chemistry lab với ít nhất 3 experiments hoàn chỉnh',
        solution: 'Advanced Unity scripting examples và chemistry simulation frameworks'
      }
    ],
    realWorldApplications: [
      'Educational institutions creating immersive learning experiences',
      'Corporate training programs với high-risk scenarios',
      'Healthcare simulation cho medical procedures',
      'Engineering và architecture collaborative design',
      'Tourism và cultural heritage preservation',
      'Language immersion environments',
      'Special needs education với customizable interfaces'
    ],
    caseStudies: [
      {
        title: 'Vietnam National Museum VR Project',
        organization: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
        problem: 'Limited physical space và accessibility for international visitors',
        solution: 'Comprehensive VR tours of Vietnamese historical artifacts và exhibits',
        impact: '300% increase in virtual visitors, enhanced educational outcomes',
        innovations: ['Multi-language narration', '360-degree artifact viewing', 'AR overlay information', 'Interactive timelines']
      },
      {
        title: 'FPT University VR Campus',
        organization: 'Đại học FPT',
        problem: 'Remote students missing campus experience và practical labs',
        solution: 'Virtual campus với interactive labs, library, và social spaces',
        impact: 'Improved student engagement và retention in online programs',
        innovations: ['Real-time collaboration tools', 'Virtual lab equipment', 'AI-powered tutors', 'Performance analytics']
      }
    ],
    resources: [
      {
        title: 'Unity Learn VR Creator Kit',
        url: 'https://learn.unity.com/project/vr-creator-kit',
        type: 'Tutorial'
      },
      {
        title: 'A-Frame School - WebVR Development',
        url: 'https://aframe.io/aframe-school/',
        type: 'Documentation'
      },
      {
        title: 'Google Poly - Free 3D Assets',
        url: 'https://poly.google.com/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'ar-mobile-applications',
    title: 'Ứng Dụng AR Trên Mobile',
    description: 'Phát triển Augmented Reality applications for education sử dụng smartphone và tablet',
    duration: '100 phút',
    difficulty: 'Trung bình',
    technologyLevel: 'Intermediate',
    tools: ['ARCore', 'ARKit', 'Spark AR', 'Unity AR Foundation', 'Vuforia'],
    headsetCompatibility: ['Smartphone iOS/Android', 'Tablet devices', 'AR glasses (future)'],
    videoUrl: 'https://www.youtube.com/watch?v=WzfDo2Wpxks',
    imageUrl: '/images/ar-mobile-applications.jpg',
    objectives: [
      'Hiểu về AR technology và computer vision basics',
      'Phát triển AR apps sử dụng ARCore/ARKit',
      'Tạo interactive 3D content với marker-based và markerless AR',
      'Implement image recognition và object tracking',
      'Design intuitive AR user interfaces'
    ],
    prerequisites: [
      'Kiến thức basic mobile app development (iOS hoặc Android)',
      'Hiểu biết về 3D graphics và Unity (preferred)',
      'Experience với smartphone photography và basic design'
    ],
    exercises: [
      {
        title: 'AR History Timeline App',
        description: 'Tạo app AR hiển thị Vietnamese historical events tại specific locations',
        difficulty: 'Trung bình',
        materials: ['Unity với AR Foundation', 'Historical 3D models và images', 'Smartphone for testing'],
        procedure: [
          'Setup Unity project với AR Foundation package',
          'Configure ARCore/ARKit settings cho target devices',
          'Create location-based AR triggers',
          'Import và setup historical 3D content',
          'Implement UI cho information display',
          'Add audio narration và interactive elements',
          'Test tại real-world locations',
          'Optimize performance cho different devices'
        ],
        expectedResults: 'AR app hoạt động tại ít nhất 3 historical sites',
        solution: 'Complete Unity project với location services integration'
      },
      {
        title: 'AR Science Textbook',
        description: 'Enhance traditional textbook với interactive AR elements',
        difficulty: 'Nâng cao',
        materials: ['Vuforia SDK', 'Science textbook images', '3D molecular models', 'Animation assets'],
        procedure: [
          'Scan và prepare textbook pages làm AR markers',
          'Create target database trong Vuforia',
          'Setup Unity project với Vuforia integration',
          'Design 3D animations cho scientific concepts',
          'Implement image recognition với robust tracking',
          'Add interactive experiments và quizzes',
          'Create teacher dashboard cho progress tracking',
          'User testing với students và educators'
        ],
        expectedResults: 'AR-enhanced textbook với interactive science content',
        solution: 'Vuforia implementation guide với educational best practices'
      }
    ],
    realWorldApplications: [
      'Interactive textbooks và educational materials',
      'Museum exhibits với enhanced information',
      'Industrial training với equipment overlay instructions',
      'Medical education với anatomy visualization',
      'Architecture visualization tại construction sites',
      'Tourism apps với historical reconstruction',
      'Retail applications với product try-before-buy'
    ],
    caseStudies: [
      {
        title: 'Saigon Notre-Dame Cathedral AR Guide',
        organization: 'Ho Chi Minh City Tourism Department',
        problem: 'Tourists lacking historical context visiting landmarks',
        solution: 'AR mobile app showing cathedral\'s history và architectural details',
        impact: 'Enhanced visitor experience, increased tourism engagement',
        innovations: ['Multi-language support', 'Historical reconstruction overlay', 'Interactive timeline', 'Social sharing features']
      },
      {
        title: 'VinMec AR Medical Training',
        organization: 'Bệnh viện VinMec',
        problem: 'Medical students needing hands-on anatomy practice',
        solution: 'AR app overlaying detailed anatomy on mannequins và real patients',
        impact: 'Improved learning outcomes, reduced training costs',
        innovations: ['Real-time anatomy overlay', 'Interactive quizzes', 'Progress tracking', 'Multi-user collaboration']
      }
    ],
    resources: [
      {
        title: 'Google ARCore Development Guide',
        url: 'https://developers.google.com/ar',
        type: 'Documentation'
      },
      {
        title: 'Apple ARKit Documentation',
        url: 'https://developer.apple.com/arkit/',
        type: 'Documentation'
      },
      {
        title: 'Vuforia Developer Portal',
        url: 'https://developer.vuforia.com/',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'social-vr-collaboration',
    title: 'Hợp Tác Xã Hội Trong VR',
    description: 'Tạo và quản lý collaborative virtual spaces cho education, teamwork, và social learning',
    duration: '80 phút',
    difficulty: 'Trung bình',
    technologyLevel: 'Intermediate',
    tools: ['VRChat', 'Mozilla Hubs', 'AltspaceVR', 'Horizon Workrooms', 'Spatial'],
    headsetCompatibility: ['Cross-platform: VR headsets và desktop/mobile'],
    videoUrl: 'https://www.youtube.com/watch?v=k_y8YYcGaZQ',
    imageUrl: '/images/social-vr-collaboration.jpg',
    objectives: [
      'Thiết kế effective virtual meeting spaces',
      'Facilitate collaborative learning experiences trong VR',
      'Manage virtual teams và remote collaboration',
      'Create inclusive và accessible virtual environments',
      'Understand social dynamics in virtual spaces'
    ],
    prerequisites: [
      'Experience với VR platforms và basic navigation',
      'Understanding của online collaboration tools',
      'Basic knowledge về educational psychology'
    ],
    exercises: [
      {
        title: 'Virtual Study Group Platform',
        description: 'Tạo dedicated virtual space cho student study groups',
        difficulty: 'Cơ bản',
        materials: ['Mozilla Hubs account', 'Study materials (PDFs, videos)', 'Collaborative tools integration'],
        procedure: [
          'Design study room layout optimal cho group learning',
          'Setup shared whiteboards và presentation tools',
          'Integrate external learning resources',
          'Create study session scheduling system',
          'Implement progress tracking và accountability',
          'Add breakout rooms cho individual work',
          'Test với real study groups',
          'Gather feedback và iterate design'
        ],
        expectedResults: 'Functional virtual study space supporting 6-8 students',
        solution: 'Mozilla Hubs configuration guide với educational best practices'
      },
      {
        title: 'Cross-Cultural VR Exchange Program',
        description: 'Connect Vietnamese students với international peers trong virtual environment',
        difficulty: 'Nâng cao',
        materials: ['Multiple VR platforms', 'Translation tools', 'Cultural content library', 'Assessment rubrics'],
        procedure: [
          'Partner với international schools or organizations',
          'Design culturally neutral virtual meeting spaces',
          'Create structured cultural exchange activities',
          'Implement real-time translation và communication aids',
          'Develop assessment criteria cho cultural competency',
          'Plan regular exchange sessions với different themes',
          'Document learning outcomes và student feedback',
          'Scale program based on initial pilot results'
        ],
        expectedResults: 'Successful cultural exchange program với measurable learning outcomes',
        solution: 'Program framework với partner school integration guidelines'
      }
    ],
    realWorldApplications: [
      'Remote education delivery cho rural Vietnamese schools',
      'International collaboration projects cho global perspective',
      'Corporate training với distributed teams',
      'Medical consultation và collaborative diagnosis',
      'Design thinking workshops với cross-functional teams',
      'Accessibility-focused education cho students với disabilities',
      'Professional development workshops cho teachers'
    ],
    caseStudies: [
      {
        title: 'HCMC - Silicon Valley Student Exchange',
        organization: 'Sở Giáo dục TP.HCM & Stanford University',
        problem: 'Limited budget cho physical student exchange programs',
        solution: 'Monthly VR meetings between Vietnamese và American students',
        impact: 'Cost reduction 95%, participation increase 400%',
        innovations: ['Real-time translation', 'Cultural artifact sharing', 'Joint project spaces', 'Mentorship programs']
      },
      {
        title: 'Rural School VR Classroom Network',
        organization: 'Bộ Giáo dục & Đào tạo Việt Nam',
        problem: 'Teacher shortage in remote areas, limited resources',
        solution: 'Network of VR classrooms connecting rural students với expert teachers',
        impact: 'Improved test scores, reduced educational inequality',
        innovations: ['Mobile VR labs', 'Satellite internet integration', 'Local language support', 'Community involvement']
      }
    ],
    resources: [
      {
        title: 'Mozilla Hubs Educator Guide',
        url: 'https://hubs.mozilla.com/docs/educators-guide.html',
        type: 'Documentation'
      },
      {
        title: 'VRChat World Creation Tutorial',
        url: 'https://docs.vrchat.com/docs/creating-your-first-world',
        type: 'Tutorial'
      },
      {
        title: 'Spatial for Education',
        url: 'https://spatial.io/education',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'metaverse-business-economics',
    title: 'Kinh Tế Metaverse & Cơ Hội Kinh Doanh',
    description: 'Khám phá virtual economy, NFTs, virtual real estate và career opportunities trong Metaverse',
    duration: '90 phút',
    difficulty: 'Trung bình',
    technologyLevel: 'Business-focused',
    tools: ['OpenSea', 'The Sandbox', 'Decentraland', 'Roblox Creator Studio', 'Crypto wallets'],
    headsetCompatibility: ['Desktop web browsers', 'Mobile devices', 'VR optional'],
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU',
    imageUrl: '/images/metaverse-business-economics.jpg',
    objectives: [
      'Hiểu virtual economy principles và tokenomics',
      'Explore career opportunities trong Metaverse industry',
      'Learn về NFTs, virtual assets, và digital ownership',
      'Understand virtual real estate investment strategies',
      'Develop business models cho Metaverse ventures'
    ],
    prerequisites: [
      'Basic understanding về cryptocurrency và blockchain',
      'Interest in business và entrepreneurship',
      'Completed foundational Metaverse courses'
    ],
    exercises: [
      {
        title: 'Virtual Business Plan Development',
        description: 'Tạo business plan cho một virtual service hoặc product',
        difficulty: 'Trung bình',
        materials: ['Market research tools', 'Business planning templates', 'Metaverse platform access'],
        procedure: [
          'Research current virtual economy trends',
          'Identify market gaps trong existing Metaverse platforms',
          'Develop unique value proposition cho target audience',
          'Calculate costs, revenue streams, và profitability',
          'Design go-to-market strategy',
          'Create financial projections cho 3 years',
          'Present business plan to peers và mentors',
          'Refine based on feedback và market validation'
        ],
        expectedResults: 'Comprehensive business plan ready cho implementation or investment',
        solution: 'Business plan template with Metaverse-specific considerations'
      },
      {
        title: 'NFT Educational Content Creation',
        description: 'Tạo và launch educational NFT collection về Vietnamese culture',
        difficulty: 'Nâng cao',
        materials: ['Digital art tools', 'NFT marketplace accounts', 'Crypto wallet', 'Marketing budget'],
        procedure: [
          'Research successful educational NFT projects',
          'Design concept featuring Vietnamese cultural elements',
          'Create high-quality digital art or educational content',
          'Write smart contracts hoặc use no-code platforms',
          'Set up crypto wallet và marketplace accounts',
          'Launch collection với proper marketing strategy',
          'Engage với community và collectors',
          'Analyze sales data và community feedback'
        ],
        expectedResults: 'Live NFT collection với measurable impact và revenue',
        solution: 'Step-by-step NFT creation và marketing playbook'
      }
    ],
    realWorldApplications: [
      'Virtual event planning và conference management',
      'Digital marketing agencies specializing in Metaverse',
      'Educational content creation cho virtual platforms',
      'Virtual real estate development và management',
      'Cryptocurrency và DeFi financial services',
      'Virtual fashion và digital asset design',
      'Consulting services cho businesses entering Metaverse'
    ],
    caseStudies: [
      {
        title: 'Vinamilk Virtual Farm Experience',
        organization: 'Công ty Vinamilk',
        problem: 'Connect urban consumers với agricultural processes',
        solution: 'Interactive virtual farm in The Sandbox showcasing dairy production',
        impact: 'Increased brand awareness, educational value, new revenue stream',
        innovations: ['Gamified farming experience', 'Educational content integration', 'Virtual product sampling', 'NFT collectibles']
      },
      {
        title: 'Vietnam Tourism NFT Collection',
        organization: 'Tổng cục Du lịch Việt Nam',
        problem: 'Promote Vietnamese tourism during COVID-19 restrictions',
        solution: 'NFT collection featuring iconic Vietnamese landmarks and culture',
        impact: 'Global awareness increase, new revenue source, digital asset creation',
        innovations: ['AR-enabled NFTs', 'Real-world redemption benefits', 'Cultural storytelling', 'International partnerships']
      }
    ],
    resources: [
      {
        title: 'The Sandbox Creator Fund',
        url: 'https://www.sandbox.game/en/create/',
        type: 'Tool'
      },
      {
        title: 'OpenSea Creator Guides',
        url: 'https://support.opensea.io/hc/en-us/sections/4405072111763-Creator-Tools',
        type: 'Documentation'
      },
      {
        title: 'Metaverse Business Models Report',
        url: 'https://www.jpmorgan.com/content/dam/jpm/treasury-services/documents/opportunities-in-the-metaverse.pdf',
        type: 'Reference'
      }
    ]
  }
];
