import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface DigitalArtsLessonType extends BaseLessonData {
  artLevel: string;
  technologies: string[];
  tools: string[];
  creativeFocus: string[];
  vietnamCulture: string;
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  quizzes?: Quiz[];
}

export const DigitalArtsLessons: DigitalArtsLessonType[] = [
  {
    id: 'digital-art-fundamentals',
    title: 'Cơ Bản Nghệ Thuật Số',
    description: 'Khám phá thế giới digital art, từ digital painting đến 3D modeling và animation',
    duration: '100 phút',
    difficulty: 'Cơ bản',
    artLevel: 'Beginner',
    technologies: ['Photoshop', 'Illustrator', 'Procreate', 'Blender', 'After Effects'],
    creativeFocus: ['Digital Painting', 'Vector Art', 'Photo Manipulation', 'Concept Art'],
    vietnamCulture: 'Incorporating Vietnamese cultural elements into modern digital art',
    tools: ['Photoshop', 'Illustrator', 'Procreate', 'Blender'],
    videoUrl: 'https://www.youtube.com/watch?v=OzemCeywKOM',
    imageUrl: '/images/digital-art-fundamentals.jpg',
    objectives: [
      'Master digital art tools và software',
      'Understand color theory và composition trong digital medium',
      'Create original digital artwork incorporating Vietnamese themes',
      'Learn digital painting techniques và workflows',
      'Build portfolio of diverse digital art pieces',
    ],
    prerequisites: [
      'Basic understanding của art principles',
      'Access to digital art software hoặc tablet',
      'Interest in visual arts và creativity',
    ],
    exercises: [
      {
        title: 'Vietnamese Cultural Digital Illustration',
        description: 'Create series of digital illustrations celebrating Vietnamese festivals và traditions',
        difficulty: 'Trung bình',
        materials: [
          'Digital art software (Photoshop/Procreate)',
          'Drawing tablet',
          'Reference images',
          'Color palettes',
        ],
        procedure: [
          'Research Vietnamese festivals (Tết, Trung Thu, etc.) và cultural symbols',
          'Sketch initial concepts combining traditional với modern design',
          'Create color palettes inspired by Vietnamese aesthetics',
          'Design characters wearing traditional Vietnamese clothing',
          'Incorporate Vietnamese architectural elements',
          'Add modern digital effects while maintaining cultural authenticity',
          'Create social media posts showcasing artwork',
          'Gather feedback từ Vietnamese community',
        ],
        expectedResults: 'Professional-quality digital illustrations celebrating Vietnamese culture',
        solution: 'Digital art tutorial với Vietnamese cultural design elements',
      },
      {
        title: 'Digital Portrait Series Project',
        description: 'Create realistic digital portraits showcasing diverse Vietnamese faces',
        difficulty: 'Nâng cao',
        materials: [
          'Advanced digital painting software',
          'High-quality drawing tablet',
          'Portrait references',
          'Lighting study materials',
        ],
        procedure: [
          'Study facial anatomy và proportions specific to Vietnamese features',
          'Practice digital brush techniques for realistic skin textures',
          'Master lighting và shadow techniques for portrait work',
          'Create 5 diverse Vietnamese portraits (different ages, regions)',
          'Experiment với traditional và contemporary styling',
          'Add subtle Vietnamese cultural elements (áo dài, lotus, etc.)',
          'Develop consistent artistic style across series',
          'Present series as professional portfolio piece',
        ],
        expectedResults: 'Portfolio-ready portrait series demonstrating advanced digital painting skills',
        solution: 'Digital portrait painting masterclass với Vietnamese subject focus',
      },
    ],
    realWorldApplications: [
      'Freelance digital artist cho international clients',
      'Game industry concept artist trong Vietnamese studios',
      'Social media content creator cho brands',
      'Book illustration và publishing industry',
      'Animation studio artist for Vietnamese films',
      'NFT artist trong digital marketplace',
      'Education technology visual content creator',
    ],
    caseStudies: [
      {
        title: 'Toonbox Entertainment Digital Art Pipeline',
        organization: 'Toonbox Entertainment Vietnam',
        problem: 'Training local artists for international animation projects',
        solution: 'Comprehensive digital art training program với industry mentorship',
        impact: 'Skilled Vietnamese artists working on global animation projects',
        innovations: [
          'Industry-standard training curriculum',
          'International project experience',
          'Cultural art integration',
          'Career placement program',
        ],
      },
      {
        title: 'Vietnamese Cultural NFT Art Project',
        organization: 'Independent Vietnamese Artists Collective',
        problem: 'Promoting Vietnamese culture through modern digital art',
        solution: 'Collaborative NFT collection featuring traditional Vietnamese stories',
        impact: 'Global awareness of Vietnamese culture, artist income generation',
        innovations: [
          'Cultural storytelling through digital art',
          'Blockchain technology adoption',
          'International market access',
          'Artist royalty systems',
        ],
      },
    ],
    resources: [
      {
        title: 'Adobe Creative Cloud Tutorials',
        url: 'https://helpx.adobe.com/creative-cloud/tutorials.html',
        type: 'Tutorial',
      },
      {
        title: 'Blender 3D Art Community',
        url: 'https://www.blender.org/community/',
        type: 'Tool',
      },
      {
        title: 'ArtStation Learning Platform',
        url: 'https://www.artstation.com/learning',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Nghệ thuật số Việt Nam: Giao thoa giữa Truyền thống và Hiện đại',
      content: [
        'Các họa sĩ trẻ Việt Nam đang tạo ra một làn sóng mới trong nghệ thuật số bằng cách kết hợp các yếu tố văn hóa truyền thống như hoa văn trống đồng Đông Sơn, tranh dân gian Hàng Trống, hay hình tượng áo dài vào các tác phẩm hiện đại.',
        'Các studio game Việt Nam như VNG, Amanotes đang phát triển mạnh mẽ, tạo ra nhu cầu lớn về họa sĩ concept art, 3D modeler, và animator có khả năng sáng tạo các nhân vật và thế giới mang đậm bản sắc Việt.',
        'Cộng đồng "Vẽ về Việt Nam" trên các mạng xã hội là nơi các nghệ sĩ chia sẻ tác phẩm, trao đổi kỹ thuật và truyền cảm hứng, cho thấy sự phát triển sôi động của lĩnh vực này tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thanh Nhân',
      title: 'Giám đốc Sáng tạo, Colory Animation Studio',
      company: 'Colory Animation Studio',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-nhan',
      quote:
        'Nghệ thuật số không chỉ là vẽ đẹp, mà là kể chuyện bằng hình ảnh. Tại Việt Nam, chúng tôi có một kho tàng câu chuyện văn hóa chưa được khai thác. Công nghệ cho phép chúng tôi đưa những câu chuyện đó ra thế giới với một ngôn ngữ hình ảnh mới mẻ và hấp dẫn.',
    },
    quizzes: [
      {
        question: 'Phần mềm nào sau đây thường được sử dụng cho Digital Painting?',
        options: ['Blender', 'After Effects', 'Photoshop', 'Illustrator'],
        correctAnswerIndex: 2,
        explanation:
          'Photoshop là công cụ mạnh mẽ và phổ biến nhất cho digital painting nhờ hệ thống brush linh hoạt và khả năng xử lý hình ảnh raster chuyên sâu.',
      },
      {
        question: '"Concept Art" trong ngành công nghiệp game và phim có vai trò chính là gì?',
        options: [
          'Tạo ra sản phẩm cuối cùng',
          'Thiết kế ý tưởng ban đầu về nhân vật, môi trường, và thế giới',
          'Lập trình chuyển động cho nhân vật',
          'Quảng bá sản phẩm',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Concept art là giai đoạn trực quan hóa ý tưởng, định hình phong cách và cảm xúc cho một dự án trước khi đi vào sản xuất chi tiết.',
      },
    ],
  },
  {
    id: 'motion-graphics-animation',
    title: 'Motion Graphics & Animation',
    description: 'Tạo animated content cho social media, advertising, và storytelling using modern tools',
    duration: '120 phút',
    difficulty: 'Trung bình',
    artLevel: 'Intermediate',
    technologies: ['After Effects', 'Cinema 4D', 'Lottie', 'Principle', 'Rive'],
    creativeFocus: ['2D Animation', '3D Motion Graphics', 'UI Animation', 'Explainer Videos'],
    vietnamCulture: 'Creating animated content promoting Vietnamese businesses và tourism',
    tools: ['After Effects', 'Cinema 4D', 'Lottie'],
    videoUrl: 'https://www.youtube.com/watch?v=5tQ0hf2SCeo',
    imageUrl: '/images/motion-graphics-animation.jpg',
    objectives: [
      'Master After Effects cho professional motion graphics',
      'Create engaging animated explainer videos',
      'Design UI animations cho mobile apps',
      'Develop storytelling skills through animation',
      'Build animation portfolio cho commercial work',
    ],
    prerequisites: [
      'Completed digital art fundamentals',
      'Basic understanding của video editing',
      'Access to motion graphics software',
    ],
    exercises: [
      {
        title: 'Vietnamese Tourism Animated Explainer',
        description: 'Create animated video promoting Vietnamese tourist destinations',
        difficulty: 'Trung bình',
        materials: ['After Effects', 'Illustrator', 'Audio editing software', 'Stock footage/images'],
        procedure: [
          'Research unique selling points của Vietnamese tourism',
          'Write compelling script highlighting key destinations',
          'Design consistent visual style representing Vietnam',
          'Create animated maps showing tourist routes',
          'Animate traditional Vietnamese elements (dragons, lotus, etc.)',
          'Add engaging transitions và kinetic typography',
          'Include call-to-action encouraging tourism',
          'Optimize video for social media platforms',
        ],
        expectedResults: 'Professional tourism promotional video ready for marketing use',
        solution: 'Motion graphics tutorial với tourism marketing focus',
      },
      {
        title: 'Vietnamese Startup App UI Animation',
        description: 'Design animated user interface cho Vietnamese fintech app',
        difficulty: 'Nâng cao',
        materials: ['After Effects với UI animation plugins', 'Figma for UI design', 'Mobile app prototyping tools'],
        procedure: [
          'Research Vietnamese user preferences for mobile apps',
          'Design clean, modern UI following Vietnamese aesthetics',
          'Create smooth onboarding animation sequence',
          'Animate core app functions (payments, transfers, savings)',
          'Design micro-interactions enhancing user experience',
          'Implement Vietnamese cultural color schemes',
          'Create loading animations với Vietnamese elements',
          'Export animations for mobile app development',
        ],
        expectedResults: 'Complete UI animation package ready for app implementation',
        solution: 'UI animation framework với Vietnamese design principles',
      },
    ],
    realWorldApplications: [
      'Social media content creation cho Vietnamese brands',
      'Advertising agency motion graphics specialist',
      'E-learning content animation designer',
      'Mobile app UI/UX animator',
      'Video production company motion artist',
      'Corporate presentation và training video creator',
      'Independent freelance motion graphics designer',
    ],
    caseStudies: [
      {
        title: 'Tiki Animated Marketing Campaign',
        organization: 'Tiki.vn E-commerce Platform',
        problem: 'Engaging younger Vietnamese consumers through social media',
        solution: 'Series of animated social media videos với Vietnamese cultural humor',
        impact: '300% increase in social media engagement, brand recognition',
        innovations: [
          'Cultural humor integration',
          'Mobile-first design',
          'Platform-specific optimization',
          'User-generated content inspiration',
        ],
      },
      {
        title: 'VinFast Automotive Animation Project',
        organization: 'VinFast Automotive',
        problem: 'Explaining complex electric vehicle technology to Vietnamese consumers',
        solution: 'Animated explainer video series showcasing EV benefits',
        impact: 'Improved consumer understanding, increased test drive bookings',
        innovations: [
          'Technical concept visualization',
          'Local market messaging',
          'Multi-platform distribution',
          'Educational value focus',
        ],
      },
    ],
    resources: [
      {
        title: 'Adobe After Effects Tutorials',
        url: 'https://helpx.adobe.com/after-effects/tutorials.html',
        type: 'Tutorial',
      },
      {
        title: 'School of Motion Online Courses',
        url: 'https://www.schoolofmotion.com/',
        type: 'Documentation',
      },
      {
        title: 'Lottie Animation Community',
        url: 'https://lottiefiles.com/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Motion Graphics và Animation: Ngôn ngữ kể chuyện của Thương hiệu Việt',
      content: [
        'Các thương hiệu lớn tại Việt Nam như Vinamilk, Viettel, và các ngân hàng đang đầu tư mạnh vào các video explainer và quảng cáo hoạt hình để truyền tải thông điệp một cách sinh động và dễ hiểu.',
        'Ngành công nghiệp game và ứng dụng di động bùng nổ tại Việt Nam đã tạo ra một nhu cầu lớn cho các chuyên gia UI/UX animation, những người làm cho trải nghiệm người dùng trở nên mượt mà và thú vị hơn.',
        'Các video ca nhạc (MV) của các ca sĩ Việt Nam ngày càng sử dụng nhiều kỹ xảo motion graphics và animation để tạo ra những sản phẩm ấn tượng, cạnh tranh trên thị trường quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Mỹ Anh',
      title: 'Motion Designer, ZaloPay',
      company: 'ZaloPay',
      imageUrl: 'https://i.pravatar.cc/150?u=le-my-anh',
      quote:
        'Công việc của tôi là làm cho những giao dịch tài chính khô khan trở nên thú vị. Mỗi chuyển động, mỗi hiệu ứng nhỏ trên ứng dụng ZaloPay đều được tính toán để mang lại cảm giác an toàn, nhanh chóng và thân thiện cho người dùng Việt. Đó là sức mạnh của motion design.',
    },
    quizzes: [
      {
        question: 'Lottie là một định dạng file được sử dụng phổ biến cho mục đích gì?',
        options: [
          'Video 3D chất lượng cao',
          'Animation nhẹ, có thể tương tác cho web và mobile',
          'Hình ảnh tĩnh',
          'Âm thanh',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Lottie là một định dạng file dựa trên JSON cho phép hiển thị animation vector chất lượng cao trên nhiều nền tảng mà không cần file video nặng, rất lý tưởng cho UI/UX animation.',
      },
      {
        question: 'Trong After Effects, "keyframes" được sử dụng để làm gì?',
        options: [
          'Thêm hiệu ứng âm thanh',
          'Đánh dấu điểm bắt đầu và kết thúc của một sự thay đổi thuộc tính (vị trí, kích thước, độ mờ...) theo thời gian',
          'Chọn màu sắc cho đối tượng',
          'Xuất video',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Keyframes là nền tảng của animation trong After Effects. Bằng cách đặt các keyframe tại các thời điểm khác nhau, bạn ra lệnh cho phần mềm tự động tạo ra chuyển động giữa các trạng thái đó.',
      },
    ],
  },
  {
    id: 'generative-ai-art',
    title: 'Nghệ Thuật AI Tạo Sinh',
    description: 'Master AI art generation tools like Midjourney, DALL-E, và Stable Diffusion cho creative projects',
    duration: '90 phút',
    difficulty: 'Trung bình',
    artLevel: 'Advanced',
    technologies: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'RunwayML', 'ComfyUI'],
    creativeFocus: ['Prompt Engineering', 'Style Transfer', 'AI-Human Collaboration', 'Concept Art'],
    vietnamCulture: 'Creating AI art that represents Vietnamese aesthetics và cultural themes',
    tools: ['Midjourney', 'DALL-E', 'Stable Diffusion'],
    videoUrl: 'https://www.youtube.com/watch?v=SVcsDDABEkM',
    imageUrl: '/images/generative-ai-art.jpg',
    objectives: [
      'Master advanced prompt engineering techniques',
      'Create consistent character designs using AI',
      'Blend AI-generated art với traditional techniques',
      'Understand ethical considerations trong AI art',
      'Build commercial AI art workflow',
    ],
    prerequisites: [
      'Basic understanding của AI concepts',
      'Digital art experience preferred',
      'Creative problem-solving skills',
    ],
    exercises: [
      {
        title: 'Vietnamese Mythology AI Art Series',
        description: 'Create AI-generated art series based on Vietnamese folklore và mythology',
        difficulty: 'Trung bình',
        materials: [
          'Midjourney subscription',
          'Stable Diffusion setup',
          'Photo editing software',
          'Research materials',
        ],
        procedure: [
          'Research Vietnamese mythological creatures (Rồng, Phượng, Ma Lai, etc.)',
          'Study traditional Vietnamese art styles và aesthetics',
          'Develop advanced prompts incorporating cultural elements',
          'Generate multiple variations of each mythological character',
          'Refine images using prompt engineering techniques',
          'Post-process images maintaining cultural authenticity',
          'Create cohesive art series với consistent style',
          'Present series with cultural context explanations',
        ],
        expectedResults: 'Professional AI art series celebrating Vietnamese mythology',
        solution: 'AI art prompt library với Vietnamese cultural elements',
      },
      {
        title: 'AI-Enhanced Vietnamese Fashion Design',
        description: 'Use AI to create modern fashion designs inspired by traditional Vietnamese clothing',
        difficulty: 'Nâng cao',
        materials: ['Multiple AI art platforms', 'Fashion design knowledge', 'Image editing tools', 'Style references'],
        procedure: [
          'Study traditional Vietnamese clothing (áo dài, áo bà ba, etc.)',
          'Research modern fashion trends suitable for Vietnamese market',
          'Create detailed prompts blending traditional với contemporary',
          'Generate fashion concept art using multiple AI platforms',
          'Combine AI outputs với manual design refinements',
          'Create technical fashion illustrations',
          'Develop marketing materials cho fashion concepts',
          'Present designs to Vietnamese fashion industry professionals',
        ],
        expectedResults: 'Commercial-ready fashion concepts với Vietnamese cultural inspiration',
        solution: 'AI fashion design workflow với cultural integration techniques',
      },
    ],
    realWorldApplications: [
      'Concept artist cho Vietnamese game development',
      'Marketing creative director using AI tools',
      'Fashion designer với AI-enhanced creativity',
      'Architectural visualization artist',
      'Book cover designer cho Vietnamese publishers',
      'Social media content creator với AI efficiency',
      'Art director trong advertising agencies',
    ],
    caseStudies: [
      {
        title: 'VNG Games AI Concept Art Pipeline',
        organization: 'VNG Corporation',
        problem: 'Speeding up concept art production cho mobile games',
        solution: 'AI-assisted concept art workflow with Vietnamese cultural themes',
        impact: '60% faster concept development, unique cultural positioning',
        innovations: [
          'AI-human collaboration workflow',
          'Cultural prompt libraries',
          'Style consistency systems',
          'Rapid iteration processes',
        ],
      },
      {
        title: 'Vietnamese Heritage AI Documentation',
        organization: 'Ministry of Culture, Sports and Tourism',
        problem: 'Preserving và promoting Vietnamese cultural heritage',
        solution: 'AI-generated visual content showcasing historical Vietnamese culture',
        impact: 'Enhanced cultural education, international heritage promotion',
        innovations: [
          'Historical recreation through AI',
          'Educational content generation',
          'Tourism marketing assets',
          'Cultural preservation tools',
        ],
      },
    ],
    resources: [
      {
        title: 'Midjourney Documentation',
        url: 'https://docs.midjourney.com/',
        type: 'Documentation',
      },
      {
        title: 'Stable Diffusion Community',
        url: 'https://huggingface.co/spaces/stabilityai/stable-diffusion',
        type: 'Tool',
      },
      {
        title: 'AI Art Generation Guide',
        url: 'https://www.promptingguide.ai/',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'AI Tạo Sinh: Cuộc cách mạng sáng tạo tại Việt Nam',
      content: [
        'Các nhà thiết kế thời trang Việt Nam đang thử nghiệm AI để tạo ra các bộ sưu tập áo dài cách tân, kết hợp hoa văn truyền thống với các phom dáng hiện đại một cách nhanh chóng.',
        'Trong lĩnh vực quảng cáo, các agency tại TP.HCM và Hà Nội sử dụng Midjourney và Stable Diffusion để nhanh chóng tạo ra các concept hình ảnh cho chiến dịch, rút ngắn thời gian brainstorming từ vài ngày xuống còn vài giờ.',
        'Cộng đồng AI art Việt Nam đang phát triển mạnh mẽ, với nhiều cuộc thi và triển lãm online, nơi các nghệ sĩ thử nghiệm và chia sẻ các prompt để tạo ra những tác phẩm mang đậm dấu ấn văn hóa Việt, từ phong cảnh Vịnh Hạ Long đến chân dung thiếu nữ mặc áo dài.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Minh Huy',
      title: 'AI Artist & Prompt Engineer',
      company: 'Freelancer',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-minh-huy',
      quote:
        'Prompt không chỉ là một câu lệnh, nó là một cuộc đối thoại với AI. Để tạo ra một tác phẩm "rất Việt Nam", tôi phải "dạy" cho AI về văn hóa, về màu sắc của gốm Bát Tràng, về đường nét của kiến trúc cổ Hội An. Đó là sự kết hợp giữa kỹ thuật và nghệ thuật.',
    },
    quizzes: [
      {
        question: '"Prompt Engineering" trong AI tạo sinh là gì?',
        options: [
          'Lập trình mô hình AI',
          'Viết những câu lệnh (prompt) chi tiết và hiệu quả để AI tạo ra kết quả mong muốn',
          'Chỉnh sửa hình ảnh sau khi AI tạo ra',
          'Huấn luyện lại mô hình AI',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Prompt Engineering là kỹ năng cốt lõi để làm việc với các mô hình AI tạo sinh. Chất lượng của prompt quyết định trực tiếp đến chất lượng của hình ảnh hoặc văn bản mà AI tạo ra.',
      },
      {
        question:
          'Mô hình AI nào sau đây nổi tiếng với khả năng tạo hình ảnh từ văn bản một cách nghệ thuật và chi tiết?',
        options: ['ChatGPT', 'Google Translate', 'Midjourney', 'TensorFlow'],
        correctAnswerIndex: 2,
        explanation:
          'Midjourney được cộng đồng đánh giá cao về khả năng tạo ra những hình ảnh có tính thẩm mỹ cao, nghệ thuật và thường được sử dụng trong các lĩnh vực như concept art, thiết kế và minh họa.',
      },
    ],
  },
  {
    id: 'immersive-media-production',
    title: 'Sản Xuất Media Nhập Vai',
    description: 'Create VR/AR content, 360° videos, và interactive experiences cho entertainment và education',
    duration: '130 phút',
    difficulty: 'Nâng cao',
    artLevel: 'Professional',
    technologies: ['Unity 3D', 'Unreal Engine', '360° Cameras', 'Spatial Audio', 'WebXR'],
    creativeFocus: ['VR Experiences', 'AR Applications', '360° Storytelling', 'Interactive Design'],
    vietnamCulture: 'Creating immersive experiences showcasing Vietnamese heritage và tourism',
    tools: ['Unity 3D', 'Unreal Engine', '360° Cameras'],
    videoUrl: 'https://www.youtube.com/watch?v=4JVfa3SSDQU',
    imageUrl: '/images/immersive-media.jpg',
    objectives: [
      'Produce professional VR/AR content',
      'Master 360° video production techniques',
      'Design interactive immersive experiences',
      'Understand spatial audio và haptic feedback',
      'Create commercial VR/AR applications',
    ],
    prerequisites: ['Strong 3D design skills', 'Understanding của game engines', 'Video production experience'],
    exercises: [
      {
        title: 'Virtual Reality Heritage Tour',
        description: 'Create VR experience touring Vietnamese historical sites',
        difficulty: 'Nâng cao',
        materials: [
          'VR development software',
          '360° camera',
          'VR headset',
          'Historical site access',
          'Audio equipment',
        ],
        procedure: [
          'Select significant Vietnamese historical sites cho VR tour',
          'Capture high-quality 360° footage at locations',
          'Record spatial audio với historical narration',
          'Design VR navigation interface với cultural aesthetics',
          'Add interactive elements (historical artifacts, timeline)',
          'Implement Vietnamese language support với subtitles',
          'Test VR experience với diverse users',
          'Optimize for different VR platforms và devices',
        ],
        expectedResults: 'Professional VR heritage tour ready for tourism industry',
        solution: 'VR development pipeline với cultural heritage focus',
      },
      {
        title: 'AR Cultural Learning Experience',
        description: 'Develop AR app teaching Vietnamese traditional crafts',
        difficulty: 'Nâng cao',
        materials: ['AR development tools', 'Traditional craft materials', 'Mobile devices', '3D modeling software'],
        procedure: [
          'Research traditional Vietnamese crafts (pottery, weaving, etc.)',
          'Create 3D models của traditional tools và materials',
          'Develop AR app với step-by-step craft tutorials',
          'Implement hand tracking for realistic interaction',
          'Add gamification elements to encourage learning',
          'Include cultural context và historical information',
          'Test app với Vietnamese artisans và students',
          'Publish app for educational use',
        ],
        expectedResults: 'Educational AR app preserving Vietnamese traditional crafts',
        solution: 'AR education development framework với cultural craft focus',
      },
    ],
    realWorldApplications: [
      'Tourism industry VR/AR experience developer',
      'Museum interactive exhibition designer',
      'Real estate virtual tour specialist',
      'Entertainment industry immersive content creator',
      'Education technology VR/AR developer',
      'Healthcare simulation designer',
      'Corporate training VR specialist',
    ],
    caseStudies: [
      {
        title: 'Hoi An Ancient Town VR Project',
        organization: 'Hoi An Tourism Department',
        problem: 'Preserving historical architecture while managing overtourism',
        solution: 'Comprehensive VR tour allowing virtual exploration',
        impact: 'Reduced physical tourism pressure, global heritage promotion',
        innovations: [
          'Historical reconstruction accuracy',
          'Multi-language support',
          'Interactive learning elements',
          'Tourism revenue diversification',
        ],
      },
      {
        title: 'Vietnam National Museum AR Enhancement',
        organization: 'Vietnam National Museum of History',
        problem: 'Making historical artifacts more engaging cho young visitors',
        solution: 'AR app bringing museum exhibits to life',
        impact: 'Increased youth engagement, enhanced educational value',
        innovations: [
          'Artifact animation systems',
          'Historical context overlays',
          'Interactive storytelling',
          'Multi-sensory experiences',
        ],
      },
    ],
    resources: [
      {
        title: 'Unity VR Development Documentation',
        url: 'https://docs.unity3d.com/Manual/VROverview.html',
        type: 'Documentation',
      },
      {
        title: 'WebXR Device API',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
        type: 'Reference',
      },
      {
        title: 'Oculus Developer Resources',
        url: 'https://developer.oculus.com/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'VR/AR: Tái hiện Lịch sử và Kiến tạo Tương lai tại Việt Nam',
      content: [
        'Các công ty bất động sản lớn tại Việt Nam như Vinhomes, Novaland đang sử dụng VR để tạo ra các tour tham quan nhà mẫu ảo, cho phép khách hàng ở xa có thể trải nghiệm không gian sống một cách chân thực.',
        'Bảo tàng Lịch sử Quốc gia Việt Nam đã ứng dụng AR để "làm sống lại" các hiện vật. Du khách có thể dùng điện thoại để xem mô hình 3D của trống đồng Đông Sơn đang chuyển động hoặc một vị vua đang mặc triều phục.',
        'Trong giáo dục, các trường đại học Y tại Việt Nam đang nghiên cứu ứng dụng VR để sinh viên thực hành phẫu thuật trong môi trường mô phỏng, giảm thiểu rủi ro và tăng hiệu quả đào tạo.',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Hoàng Yến',
      title: 'Lead VR/AR Developer, Holomia',
      company: 'Holomia',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-hoang-yen',
      quote:
        'Chúng tôi không chỉ xây dựng game, chúng tôi xây dựng những thế giới. Với VR, chúng tôi có thể đưa người dùng quay trở lại Dinh Độc Lập năm 1975, hay khám phá đáy biển Sơn Đoòng. Công việc này đòi hỏi sự kết hợp giữa một lập trình viên logic và một nghệ sĩ kể chuyện.',
    },
    quizzes: [
      {
        question:
          'Công nghệ nào cho phép hiển thị các đối tượng ảo trong môi trường thực tế thông qua camera của điện thoại?',
        options: ['Virtual Reality (VR)', 'Augmented Reality (AR)', '360° Video', 'Spatial Audio'],
        correctAnswerIndex: 1,
        explanation:
          'Augmented Reality (AR) là công nghệ tăng cường thực tế, phủ một lớp thông tin hoặc đối tượng ảo lên thế giới thực mà chúng ta nhìn thấy qua các thiết bị như điện thoại hoặc kính thông minh.',
      },
      {
        question: 'Game engine nào sau đây là một trong những công cụ phổ biến nhất để phát triển các ứng dụng VR/AR?',
        options: ['Photoshop', 'After Effects', 'Unity 3D', 'Visual Studio Code'],
        correctAnswerIndex: 2,
        explanation:
          'Unity 3D, cùng với Unreal Engine, là hai game engine hàng đầu thế giới, cung cấp bộ công cụ mạnh mẽ để xây dựng các trải nghiệm 2D, 3D, VR và AR tương tác.',
      },
    ],
  },
  {
    id: 'creative-technology-business',
    title: 'Kinh Doanh Công Nghệ Sáng Tạo',
    description: 'Build sustainable creative businesses leveraging technology, IP protection, và market strategies',
    duration: '100 phút',
    difficulty: 'Trung bình',
    artLevel: 'Business',
    technologies: ['Portfolio Platforms', 'E-commerce Tools', 'IP Management', 'Social Media Marketing'],
    creativeFocus: ['Business Development', 'Client Relations', 'Pricing Strategies', 'Market Positioning'],
    vietnamCulture: 'Building creative businesses serving Vietnamese market và international expansion',
    tools: ['Behance', 'Upwork', 'Shopify'],
    videoUrl: 'https://www.youtube.com/watch?v=qulcqiWzx0M',
    imageUrl: '/images/creative-tech-business.jpg',
    objectives: [
      'Develop sustainable creative business models',
      'Master client acquisition và retention strategies',
      'Understand intellectual property protection',
      'Build professional brand và online presence',
      'Create scalable creative service offerings',
    ],
    prerequisites: [
      'Creative skills trong digital arts',
      'Basic business understanding',
      'Professional portfolio of work',
    ],
    exercises: [
      {
        title: 'Creative Agency Business Plan',
        description: 'Develop comprehensive business plan cho Vietnamese creative technology agency',
        difficulty: 'Nâng cao',
        materials: [
          'Business planning software',
          'Market research tools',
          'Financial modeling templates',
          'Legal consultation resources',
        ],
        procedure: [
          'Research Vietnamese creative services market opportunity',
          'Define unique value proposition và target clients',
          'Develop service offerings (branding, web design, animation)',
          'Create pricing strategies competitive với Vietnamese market',
          'Plan team structure và hiring strategy',
          'Design client acquisition và retention processes',
          'Develop financial projections và funding requirements',
          'Present business plan to potential investors hoặc partners',
        ],
        expectedResults: 'Investment-ready creative agency business plan',
        solution: 'Creative business development framework với Vietnamese market focus',
      },
      {
        title: 'Digital Art NFT Marketplace Strategy',
        description: 'Create strategy cho launching Vietnamese cultural NFT collection',
        difficulty: 'Nâng cao',
        materials: ['NFT marketplace research', 'Blockchain education', 'Art collection planning', 'Marketing budget'],
        procedure: [
          'Research successful NFT collections với cultural themes',
          'Design Vietnamese cultural NFT collection concept',
          'Understand blockchain technology và minting processes',
          'Create marketing strategy targeting Vietnamese diaspora',
          'Build community around Vietnamese cultural preservation',
          'Develop royalty structure supporting ongoing artist income',
          'Launch collection với proper marketing campaign',
          'Analyze sales performance và community engagement',
        ],
        expectedResults: 'Successful NFT collection promoting Vietnamese culture globally',
        solution: 'NFT business strategy framework với cultural focus',
      },
    ],
    realWorldApplications: [
      'Freelance creative services entrepreneur',
      'Creative agency founder và manager',
      'Digital marketing consultant cho Vietnamese brands',
      'Art gallery digital transformation specialist',
      'Creative technology product developer',
      'International creative services exporter',
      'Creative education platform developer',
    ],
    caseStudies: [
      {
        title: 'Saigon Creative Agency Success Story',
        organization: 'Local Vietnamese Creative Studio',
        problem: 'Competing với established international agencies',
        solution: 'Specialization trong Vietnamese cultural branding với international quality',
        impact: 'Client roster including major Vietnamese brands, international recognition',
        innovations: [
          'Cultural expertise positioning',
          'International quality standards',
          'Local market insights',
          'Competitive pricing strategies',
        ],
      },
      {
        title: 'Vietnamese Art Export Digital Platform',
        organization: 'Vietnam Fine Arts Association',
        problem: 'Limited international exposure cho Vietnamese artists',
        solution: 'Digital platform connecting Vietnamese artists với global collectors',
        impact: 'Increased international sales, artist income growth',
        innovations: [
          'Artist development programs',
          'International marketing support',
          'Cultural education integration',
          'Digital art authentication',
        ],
      },
    ],
    resources: [
      {
        title: 'Creative Business Legal Guide',
        url: 'https://www.legalzoom.com/business/business-formation/creative-business-guide',
        type: 'Documentation',
      },
      {
        title: 'Behance Portfolio Platform',
        url: 'https://www.behance.net/',
        type: 'Tool',
      },
      {
        title: 'Creative Market for Digital Assets',
        url: 'https://creativemarket.com/',
        type: 'Reference',
      },
    ],
    vietnamContext: {
      title: 'Khởi nghiệp Sáng tạo tại Việt Nam: Cơ hội và Thách thức',
      content: [
        'Hệ sinh thái khởi nghiệp tại Việt Nam đang phát triển mạnh, với nhiều quỹ đầu tư và vườn ươm tập trung vào các công ty công nghệ sáng tạo, đặc biệt trong lĩnh vực game, media và edtech.',
        'Các nền tảng như Behance, Upwork, và Fiverr cho phép các freelancer và agency sáng tạo Việt Nam tiếp cận thị trường toàn cầu, cung cấp dịch vụ với mức giá cạnh tranh và chất lượng quốc tế.',
        'Luật Sở hữu trí tuệ tại Việt Nam ngày càng được hoàn thiện, tạo hành lang pháp lý an toàn hơn cho các nhà sáng tạo để bảo vệ sản phẩm của mình. Tuy nhiên, việc thực thi vẫn còn là một thách thức.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hoàng Bảo',
      title: 'Founder & CEO, The Lab Saigon',
      company: 'The Lab Saigon',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoang-bao',
      quote:
        'Để kinh doanh sáng tạo thành công tại Việt Nam, bạn cần có hai thứ: một trái tim nghệ sĩ và một bộ óc doanh nhân. Chúng tôi không chỉ bán thiết kế, chúng tôi bán giải pháp kinh doanh bằng sự sáng tạo. Hiểu được văn hóa và thị trường bản địa là lợi thế cạnh tranh lớn nhất của chúng tôi.',
    },
    quizzes: [
      {
        question: 'Bảo vệ Sở hữu trí tuệ (IP) cho một tác phẩm nghệ thuật số bao gồm việc gì?',
        options: [
          'Chỉ đăng ký bản quyền',
          'Đăng ký bản quyền, sử dụng watermark, có hợp đồng rõ ràng với khách hàng',
          'Chỉ đăng lên mạng xã hội',
          'Không cần làm gì cả',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Bảo vệ IP là một quá trình đa diện, bao gồm các biện pháp pháp lý (đăng ký bản quyền), kỹ thuật (watermark) và hợp đồng để đảm bảo quyền lợi của người sáng tạo được bảo vệ một cách toàn diện.',
      },
      {
        question: 'Một "portfolio" chuyên nghiệp có vai trò quan trọng nhất là gì đối với một nhà sáng tạo?',
        options: [
          'Để lưu trữ tất cả tác phẩm',
          'Là công cụ marketing và bán hàng quan trọng nhất, thể hiện kỹ năng và phong cách',
          'Chỉ để cho bạn bè xem',
          'Để tham gia các cuộc thi',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Portfolio là "bộ mặt" của một nhà sáng tạo. Nó không chỉ trưng bày các tác phẩm tốt nhất mà còn thể hiện năng lực, kinh nghiệm và phong cách độc đáo, là yếu tố quyết định để khách hàng hoặc nhà tuyển dụng lựa chọn bạn.',
      },
    ],
  },
];
