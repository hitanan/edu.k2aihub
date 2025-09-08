import { BaseLessonData } from '@/types/lesson-base';

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  materials: string[];
  procedure: string[];
  expectedResults: string;
  solution: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  problem: string;
  solution: string;
  impact: string;
  innovations: string[];
}

interface Resource {
  title: string;
  url: string;
  type: string;
}

interface VietnamContext {
  title: string;
  content: string[];
}

interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

interface MainContent {
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
}

interface RelatedGame {
  id: string;
  name: string;
  description: string;
}

export interface ContentCreatorLessonData extends BaseLessonData {
  mainContent: MainContent;
  relatedGames: RelatedGame[];
  platforms: string[];
  monetizationMethods: string[];
  toolsRequired: string[];
  averageIncome: string;
  timeToMaster: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  caseStudies: CaseStudy[];
  resources: Resource[];
  vietnamContext: VietnamContext;
  careerConnect: CareerConnect;
  quizzes: Quiz[];
}

export const contentCreatorLessons: ContentCreatorLessonData[] = [
  {
    id: 'social-media-personal-branding',
    title: 'Social Media Strategy & Personal Branding',
    description:
      'Xây dựng thương hiệu cá nhân mạnh mẽ trên các nền tảng social media, phát triển voice và aesthetic riêng biệt để thu hút audience.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=Df11SkLnekM',
    imageUrl: 'https://i.ytimg.com/vi/mBy7PU1jTn4/hqdefault.jpg',
    mainContent: {
      introduction:
        'Trong kỷ nguyên số, thương hiệu cá nhân không còn là lựa chọn mà là yếu tố quyết định thành công. Bài học này sẽ hướng dẫn bạn cách xây dựng một thương hiệu cá nhân vững chắc trên mạng xã hội, tạo ra tiếng nói riêng và một phong cách độc đáo để không chỉ thu hút mà còn giữ chân khán giả, biến người theo dõi thành một cộng đồng trung thành.',
      keyConcepts: [
        {
          title: 'Định vị thương hiệu (Brand Positioning)',
          description:
            'Xác định vị trí độc nhất của bạn trong thị trường. Điều này bao gồm việc tìm ra niche, xác định đối tượng mục tiêu và tạo ra một tuyên ngôn giá trị rõ ràng để khác biệt hóa bản thân so với hàng triệu người sáng tạo khác.',
          examples: [
            'Một blogger ẩm thực tập trung vào các món ăn đường phố Việt Nam dưới 50k.',
            'Một reviewer công nghệ chuyên về các thiết bị giá rẻ cho sinh viên.',
          ],
        },
        {
          title: 'Kiến trúc nội dung (Content Architecture)',
          description:
            'Xây dựng một hệ thống các chủ đề nội dung (content pillars) cốt lõi, đảm bảo sự nhất quán và chiều sâu cho kênh của bạn. Điều này giúp khán giả biết họ sẽ nhận được gì và giữ cho bạn không bao giờ cạn ý tưởng.',
          examples: [
            'Một kênh về tài chính cá nhân có 3 trụ cột: Tiết kiệm, Đầu tư, và Tư duy làm giàu.',
            'Một kênh lifestyle có các trụ cột: Phát triển bản thân, Sức khỏe, và Du lịch trải nghiệm.',
          ],
        },
        {
          title: 'Xây dựng cộng đồng (Community Building)',
          description:
            'Chuyển từ việc chỉ đăng tải nội dung sang tạo ra sự tương tác hai chiều. Đây là nghệ thuật biến những người theo dõi thụ động thành những thành viên tích cực, những người ủng hộ và lan tỏa thương hiệu của bạn.',
          examples: [
            'Tổ chức các buổi livestream Q&A hàng tuần.',
            'Tạo các thử thách và khuyến khích nội dung do người dùng tạo (UGC).',
            'Trả lời các bình luận một cách có tâm và tạo ra các cuộc thảo luận.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tìm kiếm việc làm',
          description:
            'Một thương hiệu cá nhân mạnh trên LinkedIn có thể thu hút nhà tuyển dụng và mang lại những cơ hội nghề nghiệp mà bạn không ngờ tới.',
        },
        {
          area: 'Khởi nghiệp',
          description:
            'Các nhà sáng lập có thương hiệu cá nhân tốt dễ dàng hơn trong việc thu hút nhân tài, gọi vốn và có được những khách hàng đầu tiên.',
        },
        {
          area: 'Công việc tự do (Freelancing)',
          description:
            'Thương hiệu cá nhân giúp các freelancer xây dựng uy tín, thu hút khách hàng chất lượng cao và định giá dịch vụ của mình tốt hơn.',
        },
      ],
      conclusion:
        'Xây dựng thương hiệu cá nhân là một cuộc hành trình, không phải là đích đến. Bằng cách áp dụng một chiến lược bài bản và duy trì sự nhất quán, bạn sẽ tạo ra một tài sản số vô giá, mở ra vô số cơ hội và cho phép bạn tạo ra ảnh hưởng tích cực đến cộng đồng của mình.',
    },
    relatedGames: [
      {
        id: 'public-speaking-simulator-3d',
        name: 'Public Speaking Simulator 3D',
        description:
          'Practice public speaking in realistic 3D environments, get AI feedback on performance, and build confidence',
      },
      {
        id: 'presentation-pro-3d',
        name: 'Presentation Pro 3D',
        description:
          'Design and deliver impactful presentations in virtual 3D stages with interactive elements and AI coaching',
      },
    ],
    platforms: ['Instagram', 'TikTok', 'Facebook', 'YouTube', 'LinkedIn'],
    monetizationMethods: ['Brand partnerships', 'Affiliate marketing', 'Product placement'],
    toolsRequired: ['Canva', 'Buffer', 'Hootsuite', 'Analytics tools'],
    averageIncome: '5-20 triệu VNĐ/tháng',
    timeToMaster: '2-3 tháng',
    objectives: [
      'Định hình brand identity và personal voice độc đáo',
      'Tạo content strategy hiệu quả cho từng platform',
      'Phát triển visual aesthetic nhất quán',
      'Xây dựng engagement strategy và community building',
      'Hiểu rõ algorithm của các platform chính',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms',
      'Khả năng sử dụng smartphone để chụp ảnh/quay video',
      'Tư duy sáng tạo và khả năng storytelling',
      'Kiên nhẫn và consistency trong content creation',
    ],
    exercises: [
      {
        title: 'Brand Identity Canvas Creation',
        description: 'Tạo brand identity canvas hoàn chỉnh cho personal brand của bạn',
        difficulty: 'Cơ bản',
        materials: ['Canva account', 'Notebook', 'Reference images'],
        procedure: [
          'Phân tích 5-10 creators thành công trong niche của bạn',
          'Định nghĩa target audience chi tiết (demographics, interests, pain points)',
          'Xác định unique value proposition và differentiating factors',
          'Chọn color palette, fonts, và visual style nhất quán',
          'Viết brand manifesto và core messages',
          'Tạo content pillars (3-5 chủ đề chính)',
          'Design logo/avatar và cover images cho tất cả platforms',
          'Viết bio templates cho từng platform',
        ],
        expectedResults: 'Brand identity package hoàn chỉnh ready để implement across platforms',
        solution: 'Sử dụng framework: WHO (audience) + WHAT (value) + HOW (unique approach) + WHY (mission)',
      },
      {
        title: 'Content Strategy Development',
        description: 'Phát triển content strategy 30 ngày với posting schedule',
        difficulty: 'Trung bình',
        materials: ['Content calendar template', 'Analytics access', 'Competitor research'],
        procedure: [
          'Research trending hashtags và keywords trong niche',
          'Analyze competitor content performance và timing',
          'Create content calendar với optimal posting times',
          'Plan 30 ngày content mix: educational (40%), entertaining (30%), promotional (20%), personal (10%)',
          'Develop caption templates và engagement hooks',
          'Set up analytics tracking và KPI measurements',
          'Create batch content creation workflow',
          'Plan cross-platform content adaptation strategies',
        ],
        expectedResults: '30-day content calendar với measured engagement improvements',
        solution:
          'Use data-driven approach: test posting times, analyze engagement patterns, optimize based on platform-specific best practices',
      },
      {
        title: 'Community Engagement Mastery',
        description: 'Xây dựng engaged community với authentic interactions',
        difficulty: 'Trung bình',
        materials: ['Social media accounts', 'Engagement tracking tools', 'Community guidelines'],
        procedure: [
          'Develop authentic voice và conversation style',
          'Create engagement strategies: questions, polls, user-generated content',
          'Set up daily engagement routine (responding to comments/DMs)',
          'Build relationships với other creators và brands',
          'Organize virtual events: live streams, Q&As, challenges',
          'Create exclusive content cho loyal followers',
          'Implement feedback loops để improve content',
          'Track engagement metrics và community growth',
        ],
        expectedResults: 'Highly engaged community với 15%+ engagement rate',
        solution:
          'Focus on authenticity over perfection, respond personally to comments, create inside jokes and community culture',
      },
    ],
    realWorldApplications: [
      'Freelance social media manager cho small businesses (15-25 triệu VNĐ/tháng)',
      'Personal brand development cho entrepreneurs và professionals',
      'Content creation cho e-commerce businesses và startups',
      'Digital marketing consultant với social media expertise',
      'Influencer marketing coordinator cho agencies',
    ],
    caseStudies: [
      {
        title: 'Từ 0 đến 100K followers trong 6 tháng',
        organization: 'Vietnamese Food Blogger',
        problem: 'Starting with zero followers and no clear niche',
        solution:
          'Focused on authentic Vietnamese cooking tutorials with family stories, consistent posting schedule, engagement with food community',
        impact: '100K+ followers, 5+ brand partnerships monthly, 25 triệu VNĐ income',
        innovations: [
          'Behind-the-scenes family content',
          'Interactive cooking challenges',
          'Local ingredient spotlights',
        ],
      },
      {
        title: 'Tech Creator Success trong Vietnamese Market',
        organization: 'Young Vietnamese Tech Reviewer',
        problem: 'Competing with established international tech channels',
        solution: 'Vietnamese-language tech reviews focusing on budget devices and local market needs',
        impact: '200K+ YouTube subscribers, partnerships với major tech brands',
        innovations: ['Budget device comparisons', 'Vietnamese market-specific reviews', 'Community Q&A sessions'],
      },
    ],
    resources: [
      {
        title: 'Later - Social Media Scheduling',
        url: 'https://later.com',
        type: 'Tool',
      },
      {
        title: 'Canva - Design Platform',
        url: 'https://canva.com',
        type: 'Tool',
      },
      {
        title: 'Social Media Examiner',
        url: 'https://socialmediaexaminer.com',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Sáng tạo Nội dung tại Việt Nam',
      content: [
        'Thị trường Việt Nam có tỷ lệ người dùng Internet và mạng xã hội trẻ, năng động, tạo ra cơ hội lớn cho các nhà sáng tạo nội dung.',
        'Các nền tảng như TikTok và Facebook Reels đang thống trị, ưu tiên các nội dung video ngắn, giải trí và theo xu hướng.',
        'Các "KOL" (Key Opinion Leader) và "KOC" (Key Opinion Consumer) có sức ảnh hưởng lớn đến quyết định mua hàng của người tiêu dùng Việt Nam.',
        'Các thương hiệu địa phương và quốc tế đang tích cực đầu tư vào influencer marketing, tạo ra nguồn thu nhập chính cho nhiều nhà sáng tạo.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thị Vân',
      title: 'Founder & CEO, The Influencer',
      company: 'METUB Network',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-van',
      quote:
        'Nghề sáng tạo nội dung tại Việt Nam đã vượt qua giai đoạn tự phát. Để thành công bền vững, bạn cần tư duy như một doanh nhân: xây dựng thương hiệu cá nhân, hiểu rõ khán giả, và tạo ra giá trị thực sự. Dữ liệu và chiến lược là hai người bạn đồng hành không thể thiếu.',
    },
    quizzes: [
      {
        question: 'Đâu là yếu tố quan trọng nhất để xây dựng thương hiệu cá nhân thành công trên mạng xã hội?',
        options: [
          'Có nhiều người theo dõi nhất',
          'Đăng bài mỗi ngày',
          'Sự nhất quán về tiếng nói, phong cách và giá trị',
          'Sử dụng các thiết bị đắt tiền nhất',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sự nhất quán (consistency) giúp khán giả nhận diện và ghi nhớ thương hiệu của bạn. Nó bao gồm sự nhất quán trong thông điệp, hình ảnh, và lịch trình đăng bài, tạo ra sự tin tưởng và lòng trung thành.',
      },
      {
        question: 'Content pillars (trụ cột nội dung) là gì?',
        options: [
          'Các video dài nhất của bạn',
          'Các chủ đề cốt lõi mà kênh của bạn tập trung vào',
          'Các bài đăng được tài trợ',
          'Các bài đăng có nhiều lượt thích nhất',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Content pillars là 3-5 chủ đề chính, cốt lõi mà bạn thường xuyên nói đến. Chúng giúp định hình kênh, đảm bảo nội dung đa dạng nhưng vẫn tập trung, và giúp bạn không bao giờ cạn ý tưởng.',
      },
    ],
  },
  {
    id: 'video-production-editing-mastery',
    title: 'Video Production & Editing Mastery',
    description:
      'Master video production từ concept đến final edit, sử dụng tools professional và techniques để tạo high-quality content.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=y1KcHBZd3nw',
    imageUrl: 'https://i.ytimg.com/vi/apbZc_9XgNo/hqdefault.jpg',
    mainContent: {
      introduction:
        'Video là ngôn ngữ của internet hiện đại. Khả năng tạo ra những video chất lượng cao không còn là đặc quyền của các studio lớn. Bài học này sẽ trang bị cho bạn từ A-Z kỹ năng sản xuất video, từ việc lên ý tưởng, quay phim bằng những thiết bị sẵn có, đến hậu kỳ chuyên nghiệp, giúp bạn biến những ý tưởng sáng tạo thành những tác phẩm video cuốn hút.',
      keyConcepts: [
        {
          title: 'Ngôn ngữ điện ảnh (Cinematic Language)',
          description:
            'Hiểu và áp dụng các yếu-tố-cơ-bản-của-điện-ảnh như các loại cỡ cảnh (shot types), góc máy (camera angles), và chuyển động máy (camera movements) để kể chuyện một cách hiệu quả bằng hình ảnh.',
          examples: [
            'Sử dụng cảnh toàn (wide shot) để thiết lập bối cảnh.',
            'Dùng cảnh cận (close-up) để nhấn mạnh cảm xúc nhân vật.',
            'Áp dụng quy tắc 1/3 (rule of thirds) để tạo bố cục cân đối.',
          ],
        },
        {
          title: 'Kỹ thuật kể chuyện qua dựng phim (Storytelling through Editing)',
          description:
            'Dựng phim không chỉ là cắt ghép các cảnh quay. Đó là nghệ thuật tạo ra nhịp điệu, cảm xúc và dẫn dắt câu chuyện. Học các kỹ thuật như J-cut, L-cut, và montage để nâng tầm video của bạn.',
          examples: [
            'Sử dụng J-cut để âm thanh của cảnh sau bắt đầu trước khi hình ảnh xuất hiện, tạo sự chuyển tiếp mượt mà.',
            'Tạo một đoạn montage nhanh để thể hiện quá trình thay đổi theo thời gian.',
          ],
        },
        {
          title: 'Ánh sáng và Âm thanh (Lighting and Sound)',
          description:
            'Đây là hai yếu tố thường bị bỏ qua nhưng lại quyết định đến 90% chất lượng của một video. Nắm vững các kỹ thuật cơ bản về ánh sáng 3 điểm và thu âm sạch sẽ là chìa khóa để video của bạn trông chuyên nghiệp.',
          examples: [
            'Sử dụng ánh sáng tự nhiên từ cửa sổ làm nguồn sáng chính (key light).',
            'Dùng một chiếc micro cài áo đơn giản để có chất lượng âm thanh tốt hơn nhiều so với micro của máy ảnh.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Marketing và Quảng cáo',
          description:
            'Tạo các video quảng cáo sản phẩm, video testimonial của khách hàng, hoặc video giới thiệu công ty để thu hút khách hàng trên các nền tảng số.',
        },
        {
          area: 'Giáo dục và Đào tạo',
          description:
            'Sản xuất các khóa học online, video hướng dẫn (tutorials), hoặc các bài giảng trực quan để truyền đạt kiến thức một cách hiệu quả.',
        },
        {
          area: 'Báo chí và Phim tài liệu',
          description:
            'Kể những câu chuyện có thật, thực hiện các cuộc phỏng vấn và sản xuất các bộ phim tài liệu ngắn có sức ảnh hưởng xã hội.',
        },
      ],
      conclusion:
        'Làm chủ kỹ năng sản xuất video là bạn đang sở hữu một trong những công cụ giao tiếp mạnh mẽ nhất trong thế kỷ 21. Với kiến thức từ bài học này, bạn có đủ khả năng để tạo ra những nội dung video chuyên nghiệp, kể những câu chuyện lay động và xây dựng một sự nghiệp bền vững trong ngành công nghiệp sáng tạo.',
    },
    relatedGames: [
      {
        id: 'presentation-pro-3d',
        name: 'Presentation Pro 3D',
        description:
          'Design and deliver impactful presentations in virtual 3D stages with interactive elements and AI coaching',
      },
    ],
    platforms: ['YouTube', 'TikTok', 'Instagram Reels', 'Facebook Videos'],
    monetizationMethods: ['Ad revenue', 'Sponsored content', 'Course sales'],
    toolsRequired: ['CapCut', 'DaVinci Resolve', 'Adobe Premiere Pro', 'Smartphone camera'],
    averageIncome: '10-50 triệu VNĐ/tháng',
    timeToMaster: '3-6 tháng',
    objectives: [
      'Nắm vững fundamentals của video production và cinematography',
      'Master editing techniques và storytelling qua video',
      'Tạo professional-quality videos với budget equipment',
      'Hiểu rõ platform-specific video requirements và optimization',
      'Develop efficient workflow từ concept đến publishing',
    ],
    prerequisites: [
      'Smartphone hoặc camera cơ bản',
      'Computer với software editing capabilities',
      'Hiểu biết cơ bản về storytelling',
      'Kiên nhẫn với quá trình learning curve của editing',
    ],
    exercises: [
      {
        title: 'Smartphone Cinematography Fundamentals',
        description: 'Master các techniques chụp video professional với smartphone',
        difficulty: 'Cơ bản',
        materials: ['Smartphone', 'Tripod hoặc stabilizer', 'External microphone'],
        procedure: [
          'Learn composition rules: rule of thirds, leading lines, symmetry',
          'Practice camera movements: panning, tilting, tracking shots',
          'Master lighting techniques: natural light, golden hour, indoor setup',
          'Audio recording best practices: external mic, wind protection',
          'Shooting different angles và perspectives cho variety',
          'B-roll footage collection cho storytelling enhancement',
          'Color correction và exposure adjustment techniques',
          'File organization và backup strategies',
        ],
        expectedResults: 'Professional-looking footage shot entirely on smartphone',
        solution: 'Focus on lighting và audio quality - these make bigger impact than expensive equipment',
      },
      {
        title: 'Video Editing Workflow Mastery',
        description: 'Develop efficient editing workflow from raw footage to final video',
        difficulty: 'Trung bình',
        materials: ['Video editing software', 'Raw footage', 'Music library'],
        procedure: [
          'Set up project organization system và file naming conventions',
          'Learn cutting techniques: J-cuts, L-cuts, match cuts',
          'Color grading fundamentals cho consistent visual style',
          'Audio editing: noise reduction, music mixing, voiceover synchronization',
          'Transition effects và when to use them appropriately',
          'Text overlays, graphics, và motion design basics',
          'Export optimization cho different platforms',
          'Create reusable templates và presets cho efficiency',
        ],
        expectedResults: 'Streamlined editing process reducing production time by 50%',
        solution: 'Create templates và shortcuts for repetitive tasks, batch similar editing operations',
      },
      {
        title: 'Storytelling Through Video',
        description: 'Apply storytelling frameworks để create compelling video narratives',
        difficulty: 'Nâng cao',
        materials: ['Storyboard templates', 'Script writing tools', 'Reference videos'],
        procedure: [
          "Study storytelling frameworks: 3-act structure, hero's journey",
          'Create compelling hooks trong first 3 seconds',
          'Develop narrative arc với clear beginning, middle, end',
          'Use visual metaphors và symbolism effectively',
          'Implement pacing techniques để maintain audience attention',
          'Create emotional connections through personal stories',
          'Add call-to-action strategies seamlessly',
          'Test different narrative approaches và analyze performance',
        ],
        expectedResults: 'Videos với significantly higher retention rates và engagement',
        solution:
          'Start with strong hook, maintain clear narrative thread, end với memorable moment hoặc call-to-action',
      },
    ],
    realWorldApplications: [
      'Video production services cho businesses (20-100 triệu VNĐ/project)',
      'YouTube channel creation và monetization',
      'Social media content creation cho brands',
      'Wedding và event videography',
      'Online course creation với video content',
      'Corporate training video development',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Travel Vlogger Success',
        organization: 'Independent Travel Creator',
        problem: 'Low-quality videos với poor engagement despite interesting destinations',
        solution:
          'Invested in learning cinematography và storytelling, focused on emotional connections rather than just showing places',
        impact: 'Tripled subscriber growth, secured tourism board partnerships worth 50+ triệu VNĐ',
        innovations: ['Local story integration', 'Cultural sensitivity approach', 'Interactive travel tips'],
      },
    ],
    resources: [
      {
        title: 'DaVinci Resolve - Free Professional Editor',
        url: 'https://blackmagicdesign.com/products/davinciresolve',
        type: 'Tool',
      },
      {
        title: 'Peter McKinnon Photography & Video',
        url: 'https://youtube.com/petermckinnon',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Sản xuất Video tại Việt Nam',
      content: [
        'Các Music Video (MV) của các ca sĩ V-Pop thường có kinh phí đầu tư lớn, tạo ra xu hướng và tiêu chuẩn cao cho sản xuất video trong nước.',
        'Các video review ẩm thực đường phố, du lịch "phượt" với phong cách tự nhiên, chân thật rất được ưa chuộng tại Việt Nam.',
        'CapCut, một ứng dụng chỉnh sửa video miễn phí của ByteDance, là công cụ cực kỳ phổ biến trong giới trẻ Việt Nam để tạo video TikTok.',
        'Nhiều ekip sản xuất phim độc lập và các kênh YouTube chuyên nghiệp đang nổi lên, cho thấy sự phát triển mạnh mẽ của ngành công nghiệp video tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Nam',
      title: 'Đạo diễn, Founder',
      company: 'DTAP',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-nam',
      quote:
        'Làm video không chỉ là kỹ thuật, mà là kể chuyện. Một câu chuyện hay có thể được kể bằng bất cứ thiết bị nào. Ở DTAP, chúng tôi luôn tìm cách kết hợp giữa yếu tố văn hóa Việt Nam và kỹ thuật sản xuất hiện đại để tạo ra những sản phẩm âm nhạc và hình ảnh có dấu ấn riêng.',
    },
    quizzes: [
      {
        question: 'Kỹ thuật dựng phim nào giúp âm thanh của cảnh sau bắt đầu trước khi hình ảnh của nó xuất hiện?',
        options: ['L-cut', 'J-cut', 'Jump cut', 'Match cut'],
        correctAnswerIndex: 1,
        explanation:
          'J-cut là kỹ thuật mà âm thanh (audio) của cảnh tiếp theo bắt đầu trước khi hình ảnh (video) của cảnh đó xuất hiện, tạo ra một sự chuyển tiếp mượt mà và lôi cuốn người xem.',
      },
      {
        question: 'Trong kỹ thuật ánh sáng 3 điểm, nguồn sáng chính được gọi là gì?',
        options: ['Fill light', 'Backlight', 'Key light', 'Hair light'],
        correctAnswerIndex: 2,
        explanation:
          'Key light là nguồn sáng chính và mạnh nhất trong thiết lập ánh sáng 3 điểm. Nó định hình, xác định và tạo ra chiều sâu cho chủ thể.',
      },
    ],
  },
  {
    id: 'livestreaming-community-building',
    title: 'Livestreaming & Community Building',
    description:
      'Xây dựng loyal community qua livestreaming, master engagement techniques và monetize live content effectively.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=L0-Y67XN11Q',
    imageUrl: 'https://i.ytimg.com/vi/6ftDWN2DroQ/hqdefault.jpg',
    mainContent: {
      introduction:
        'Livestream là cầu nối trực tiếp và chân thực nhất giữa người sáng tạo và khán giả. Đây không chỉ là việc phát sóng trực tiếp, mà là nghệ thuật xây dựng một cộng đồng gắn kết trong thời gian thực. Bài học này sẽ chỉ cho bạn cách thiết lập một buổi livestream chuyên nghiệp, các kỹ thuật để giữ chân người xem, và cách biến những buổi live thành một phần không thể thiếu trong chiến lược nội dung của bạn.',
      keyConcepts: [
        {
          title: 'Tương tác thời gian thực (Real-time Engagement)',
          description:
            'Khác với video quay sẵn, sức mạnh của livestream nằm ở khả năng tương tác tức thì. Học cách đọc và trả lời bình luận, tạo các cuộc thăm dò ý kiến (polls), và gọi tên khán giả để tạo cảm giác thân thuộc và được trân trọng.',
          examples: [
            'Ghim một bình luận thú vị lên đầu cuộc trò chuyện.',
            'Tổ chức một phiên hỏi đáp (Q&A) ngẫu hứng dựa trên câu hỏi của khán giả.',
          ],
        },
        {
          title: 'Cấu trúc của một buổi Livestream (Livestream Structure)',
          description:
            'Một buổi livestream thành công cần có kịch bản linh hoạt. Nắm vững cấu trúc 3 phần: Mở đầu (Hook) để thu hút người xem mới, Thân bài (Core Content) để giữ chân họ, và Kết thúc (Call to Action) để chuyển đổi họ.',
          examples: [
            'Bắt đầu bằng một câu chuyện gây tò mò hoặc một mini-game.',
            'Phần thân bài có thể là một buổi hướng dẫn, chơi game, hoặc trò chuyện theo chủ đề.',
            'Kết thúc bằng việc kêu gọi theo dõi, tham gia nhóm, hoặc mua sản phẩm.',
          ],
        },
        {
          title: 'Thiết lập kỹ thuật (Technical Setup)',
          description:
            'Chất lượng hình ảnh và âm thanh ổn định là yếu tố sống còn. Bạn không cần thiết bị đắt tiền, nhưng cần biết cách tối ưu hóa những gì mình có, từ việc chọn phần mềm (OBS, Streamlabs), thiết lập ánh sáng, và đảm bảo kết nối internet ổn định.',
          examples: [
            'Sử dụng OBS Studio để thêm các lớp đồ họa (overlays) và cảnh báo (alerts) chuyên nghiệp.',
            'Kiểm tra tốc độ upload của internet trước mỗi buổi live.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Bán hàng trực tuyến (Live Commerce)',
          description:
            'Giới thiệu và bán sản phẩm trực tiếp, trả lời câu hỏi của khách hàng và chốt đơn ngay trên sóng livestream. Đây là một xu hướng bùng nổ ở Việt Nam và châu Á.',
        },
        {
          area: 'Đào tạo và Coaching',
          description:
            'Tổ chức các lớp học, workshop hoặc các buổi coaching nhóm trực tiếp, tạo ra môi trường học tập tương tác cao.',
        },
        {
          area: 'Sự kiện ảo (Virtual Events)',
          description:
            'Tổ chức các buổi ra mắt sản phẩm, hội thảo, hoặc các buổi biểu diễn nghệ thuật trực tuyến, tiếp cận khán giả toàn cầu mà không bị giới hạn về địa lý.',
        },
      ],
      conclusion:
        'Livestreaming là một kỹ năng mạnh mẽ để xây dựng niềm tin và sự gắn kết với khán giả. Bằng cách trở thành một người dẫn dắt cuộc trò chuyện duyên dáng và một nhà tổ chức sự kiện trực tuyến chuyên nghiệp, bạn sẽ tạo ra một cộng đồng trung thành luôn mong chờ đến buổi live tiếp theo của bạn.',
    },
    relatedGames: [
      {
        id: 'public-speaking-simulator-3d',
        name: 'Public Speaking Simulator 3D',
        description:
          'Practice public speaking in realistic 3D environments, get AI feedback on performance, and build confidence',
      },
      {
        id: 'debate-master-3d',
        name: 'Debate Master 3D',
        description:
          'Engage in AI-driven debates, develop critical thinking, and master persuasive arguments in 3D courtroom',
      },
    ],
    platforms: ['Facebook Live', 'YouTube Live', 'TikTok Live', 'Instagram Live', 'Twitch'],
    monetizationMethods: ['Super chats', 'Gifts', 'Sponsorships', 'Product sales'],
    toolsRequired: ['OBS Studio', 'Streamlabs', 'Good webcam', 'Quality microphone'],
    averageIncome: '8-30 triệu VNĐ/tháng',
    timeToMaster: '2-4 tháng',
    objectives: [
      'Set up professional livestreaming environment và equipment',
      'Master live engagement techniques và audience interaction',
      'Build loyal community qua consistent live content',
      'Monetize livestreams through various revenue streams',
      'Handle technical challenges và maintain stream quality',
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Reliable internet connection (minimum 10 Mbps upload)',
      'Basic understanding của chosen streaming platform',
      'Consistent schedule availability cho regular streaming',
    ],
    exercises: [
      {
        title: 'Live Setup Optimization',
        description: 'Create professional livestreaming setup với available equipment',
        difficulty: 'Cơ bản',
        materials: ['Computer/smartphone', 'Camera', 'Microphone', 'Lighting equipment'],
        procedure: [
          'Test internet connection stability và upload speed',
          'Set up optimal camera positioning và framing',
          'Configure lighting để avoid shadows và ensure good visibility',
          'Audio testing với different microphone positions',
          'Background setup: clean, branded, distraction-free',
          'Software configuration: OBS scenes, overlays, alerts',
          'Test stream trên different platforms để understand requirements',
          'Create backup plans cho technical failures',
        ],
        expectedResults: 'Professional-quality livestream setup với consistent technical performance',
        solution: 'Prioritize audio quality over video quality - viewers will tolerate poor video but not poor audio',
      },
      {
        title: 'Community Engagement Strategies',
        description: 'Develop techniques để maintain high engagement during live streams',
        difficulty: 'Trung bình',
        materials: ['Live streaming platform', 'Prepared talking points', 'Interactive elements'],
        procedure: [
          'Create welcome rituals cho new viewers',
          'Develop signature catchphrases và running jokes',
          'Implement interactive elements: polls, Q&As, games',
          'Practice reading và responding to chat naturally',
          'Create loyalty programs với rewards cho regular viewers',
          'Plan variety content: tutorials, behind-scenes, casual chats',
          'Handle difficult viewers và maintain positive atmosphere',
          'Build relationships với other streamers cho cross-promotion',
        ],
        expectedResults: 'Highly engaged live community với regular returning viewers',
        solution:
          'Acknowledge every comment personally, create inside jokes và community culture, maintain consistent personality',
      },
      {
        title: 'Monetization Strategy Implementation',
        description: 'Develop multiple income streams từ livestreaming activities',
        difficulty: 'Nâng cao',
        materials: ['Established audience', 'Products/services to promote', 'Analytics tools'],
        procedure: [
          'Set up platform-native monetization: super chats, subscriptions, gifts',
          'Create exclusive content cho paying supporters',
          'Develop product integration strategies trong live content',
          'Build relationships với brands cho sponsored streams',
          'Implement affiliate marketing seamlessly',
          'Create tiered supporter programs với different benefits',
          'Track revenue performance across different streams',
          'Scale successful monetization methods',
        ],
        expectedResults: 'Multiple revenue streams generating consistent income từ live content',
        solution: 'Balance monetization với value delivery - always provide more value than you ask for in return',
      },
    ],
    realWorldApplications: [
      'Gaming streaming cho Vietnamese gaming community',
      'Educational livestreams cho skill sharing',
      'Cooking shows với real-time interaction',
      'Fitness classes và wellness coaching',
      'Business consulting và Q&A sessions',
      'Product demonstrations cho e-commerce',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Gaming Streamer Breakthrough',
        organization: 'Independent Gaming Content Creator',
        problem: 'Struggling to monetize gaming content với small Vietnamese audience',
        solution:
          'Focused on Vietnamese-language commentary, community building through regular interaction, collaborative streams với other creators',
        impact:
          'Built loyal fanbase của 50K+ followers, earning 20+ triệu VNĐ monthly through donations và sponsorships',
        innovations: ['Vietnamese gaming culture integration', 'Educational gaming content', 'Community tournaments'],
      },
    ],
    resources: [
      {
        title: 'OBS Studio - Free Streaming Software',
        url: 'https://obsproject.com',
        type: 'Tool',
      },
      {
        title: 'Streamlabs - Stream Enhancement Tools',
        url: 'https://streamlabs.com',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Văn hóa Livestream tại Việt Nam',
      content: [
        'Live commerce (bán hàng qua livestream) là một ngành công nghiệp tỷ đô tại Việt Nam, đặc biệt trên các nền tảng Facebook và TikTok.',
        'Các streamer game, đặc biệt là các tựa game như Liên Quân Mobile và Free Fire, có lượng người hâm mộ khổng lồ và rất trung thành.',
        'Tính năng tặng quà (gifts) ảo trên TikTok Live và Facebook Live là một nguồn thu nhập quan trọng cho các nhà sáng tạo Việt Nam.',
        'Các buổi livestream "hóng biến", tâm sự đêm khuya, hoặc các phiên đấu giá từ thiện thu hút lượng người xem rất lớn.',
      ],
    },
    careerConnect: {
      name: 'Anh Độ Mixi',
      title: 'Streamer, YouTuber',
      company: 'MixiGaming',
      imageUrl: 'https://i.pravatar.cc/150?u=do-mixi',
      quote:
        'Livestream không chỉ là chơi game, mà là tạo ra một gia đình. Sự chân thật và kết nối với "bộ tộc" của mình mỗi tối là điều quan trọng nhất. Thu nhập đến từ nhiều nguồn, nhưng sự ủng hộ của anh em là điều đáng quý nhất.',
    },
    quizzes: [
      {
        question: 'Phần mềm nào sau đây là phổ biến và miễn phí để thiết lập một buổi livestream chuyên nghiệp?',
        options: ['Adobe Premiere Pro', 'Final Cut Pro', 'OBS Studio', 'Microsoft PowerPoint'],
        correctAnswerIndex: 2,
        explanation:
          'OBS (Open Broadcaster Software) Studio là một phần mềm mã nguồn mở, miễn phí và rất mạnh mẽ, cho phép người dùng tạo các cảnh quay phức tạp, thêm đồ họa, và phát sóng lên nhiều nền tảng khác nhau.',
      },
      {
        question: 'Live commerce là gì?',
        options: [
          'Chơi game trực tuyến',
          'Bán hàng hóa và dịch vụ trong một buổi phát sóng trực tiếp',
          'Tổ chức một buổi hòa nhạc ảo',
          'Dạy học qua livestream',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Live commerce là sự kết hợp giữa livestreaming và thương mại điện tử, nơi người bán giới thiệu, tương tác và bán sản phẩm trực tiếp cho người xem trong thời gian thực. Đây là một xu hướng cực kỳ phát triển ở châu Á, đặc biệt là Việt Nam.',
      },
    ],
  },
  {
    id: 'monetization-strategies',
    title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
    description:
      'Deep dive vào monetization opportunities across platforms, optimize revenue streams và build sustainable income from content creation.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=fzbCmOLDoa8',
    imageUrl: 'https://i.ytimg.com/vi/plCRQbAmPuY/hqdefault.jpg',
    mainContent: {
      introduction:
        'Sáng tạo nội dung là đam mê, nhưng biến đam mê đó thành một nguồn thu nhập bền vững là một bài toán kinh doanh. Bài học này sẽ đi sâu vào các chiến lược kiếm tiền đa dạng trên các nền tảng phổ biến như YouTube, TikTok và Facebook, giúp bạn xây dựng một cỗ máy kiếm tiền từ chính những nội dung bạn tạo ra.',
      keyConcepts: [
        {
          title: 'Đa dạng hóa nguồn thu (Revenue Stream Diversification)',
          description:
            'Không bao giờ bỏ tất cả trứng vào một giỏ. Học cách kết hợp nhiều nguồn thu khác nhau: doanh thu quảng cáo từ nền tảng, hợp tác với nhãn hàng, affiliate marketing, bán sản phẩm số, và huy động vốn từ cộng đồng.',
          examples: [
            'Một YouTuber có thể kiếm tiền từ quảng cáo, đồng thời bán áo thun (merch) và nhận donate từ người hâm mộ.',
            'Một TikToker có thể nhận booking quảng cáo và gắn link affiliate cho các sản phẩm họ review.',
          ],
        },
        {
          title: 'Thang giá trị (Value Ladder)',
          description:
            'Xây dựng một hệ thống các sản phẩm/dịch vụ với các mức giá khác nhau để tối đa hóa doanh thu từ mỗi khách hàng. Bắt đầu bằng nội dung miễn phí, sau đó dẫn dắt họ đến các sản phẩm trả phí giá rẻ, và cuối cùng là các sản phẩm cao cấp.',
          examples: [
            'Nội dung miễn phí (YouTube) -> Ebook giá rẻ ($5) -> Khóa học online ($99) -> Coaching 1-1 ($500).',
          ],
        },
        {
          title: 'Kinh tế người hâm mộ (Fan Economy)',
          description:
            'Tập trung vào việc xây dựng một nhóm nhỏ những người hâm mộ cuồng nhiệt (superfans) thay vì một lượng lớn khán giả hời hợt. Những người này sẵn sàng trả tiền cho các nội dung độc quyền, vật phẩm giới hạn, hoặc quyền truy cập đặc biệt.',
          examples: [
            'Tạo một nhóm thành viên trả phí trên YouTube hoặc Patreon.',
            'Bán các vật phẩm có chữ ký hoặc phiên bản giới hạn.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Sự nghiệp sáng tạo toàn thời gian',
          description:
            'Xây dựng một kế hoạch tài chính vững chắc để có thể từ bỏ công việc văn phòng và theo đuổi sự nghiệp sáng tạo nội dung một cách chuyên nghiệp.',
        },
        {
          area: 'Phát triển doanh nghiệp nhỏ',
          description:
            'Sử dụng nội dung như một công cụ marketing để thu hút khách hàng và bán các sản phẩm/dịch vụ khác của doanh nghiệp.',
        },
        {
          area: 'Xây dựng thương hiệu cá nhân',
          description:
            'Kiếm tiền từ chính chuyên môn và uy tín của bạn thông qua các hoạt động như diễn thuyết, tư vấn, hoặc viết sách.',
        },
      ],
      conclusion:
        'Kiếm tiền từ sáng tạo nội dung đòi hỏi tư duy của một doanh nhân. Bằng cách xây dựng các hệ thống kiếm tiền thông minh và đa dạng, bạn không chỉ đảm bảo sự bền vững cho sự nghiệp của mình mà còn có thêm nguồn lực để tái đầu tư và tạo ra những nội dung chất lượng hơn nữa.',
    },
    relatedGames: [
      {
        id: 'financial-freedom-quest-3d',
        name: 'Financial Freedom Quest 3D',
        description:
          'Learn financial literacy, investing, and wealth management by navigating challenges in a 3D world',
      },
    ],
    platforms: ['YouTube', 'TikTok', 'Facebook', 'Instagram'],
    monetizationMethods: ['Ad revenue', 'Sponsored content', 'Affiliate marketing', 'Digital products', 'Memberships'],
    toolsRequired: ['Analytics tools', 'Payment processors', 'Content management systems'],
    averageIncome: '15-100 triệu VNĐ/tháng',
    timeToMaster: '6-12 tháng',
    objectives: [
      'Understand platform-specific monetization requirements và opportunities',
      'Develop multiple income streams để reduce dependency on single source',
      'Optimize content strategy để maximize revenue potential',
      'Build long-term financial sustainability from content creation',
      'Navigate Vietnamese tax và business requirements cho content creators',
    ],
    prerequisites: [
      'Established audience on at least one platform',
      'Consistent content creation track record',
      'Basic understanding của business và finance',
      'Legal entity setup để receive payments properly',
    ],
    exercises: [
      {
        title: 'Revenue Stream Diversification',
        description: 'Create comprehensive monetization plan với multiple income sources',
        difficulty: 'Nâng cao',
        materials: ['Audience analytics', 'Platform monetization tools', 'Business planning template'],
        procedure: [
          'Analyze current audience demographics và interests',
          'Research monetization requirements cho each platform',
          'Identify suitable affiliate products và services',
          'Plan digital product creation: courses, ebooks, templates',
          'Develop pricing strategies cho different offerings',
          'Create content calendar integrating monetization opportunities',
          'Set up tracking systems cho revenue attribution',
          'Plan scaling strategies cho growing income streams',
        ],
        expectedResults: 'Diversified income portfolio với at least 3-5 revenue streams',
        solution:
          'Start với platform-native monetization, then expand to external revenue streams based on audience needs',
      },
      {
        title: 'Brand Partnership Strategy',
        description: 'Build systematic approach để attract và manage brand partnerships',
        difficulty: 'Nâng cao',
        materials: ['Media kit template', 'Portfolio của previous work', 'Rate card'],
        procedure: [
          'Create professional media kit với audience insights',
          'Develop pricing structure cho different types của collaborations',
          'Research relevant brands trong your niche',
          'Build outreach templates và follow-up sequences',
          'Negotiate contracts để protect your interests',
          'Deliver high-quality sponsored content maintaining audience trust',
          'Track performance metrics để demonstrate ROI to brands',
          'Build long-term relationships cho recurring partnerships',
        ],
        expectedResults: 'Steady pipeline của brand partnerships generating predictable income',
        solution:
          'Focus on brands that align với your audience values, maintain transparency về sponsorships, deliver measurable results',
      },
      {
        title: 'Digital Product Development',
        description: 'Create và launch digital products leveraging your expertise',
        difficulty: 'Nâng cao',
        materials: ['Course creation platform', 'Payment processor', 'Marketing materials'],
        procedure: [
          'Identify knowledge gaps trong your audience',
          'Validate product ideas through surveys và engagement',
          'Create minimum viable product để test market response',
          'Develop comprehensive course hoặc product content',
          'Set up sales funnel từ free content to paid products',
          'Launch với strategic marketing campaign',
          'Gather feedback để improve product offering',
          'Scale successful products và discontinue unsuccessful ones',
        ],
        expectedResults: 'Profitable digital product business complementing content creation',
        solution:
          'Start với solving specific problems your audience faces, price fairly for value provided, invest in quality production',
      },
    ],
    realWorldApplications: [
      'Full-time content creation career với sustainable income',
      'Supplementary income stream cho existing professionals',
      'Business development để transition into consulting',
      'Product-based business growth through content marketing',
      'Agency services offering based on content creation expertise',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Beauty Creator Multi-Stream Success',
        organization: 'Independent Beauty Content Creator',
        problem: 'Relying solely on platform ad revenue với inconsistent income',
        solution: 'Diversified into affiliate marketing, online courses, brand partnerships, và own product line',
        impact: 'Achieved stable 50+ triệu VNĐ monthly income across multiple streams',
        innovations: [
          'Vietnamese beauty routines focus',
          'Budget-friendly product recommendations',
          'Interactive beauty consultations',
        ],
      },
    ],
    resources: [
      {
        title: 'YouTube Creator Academy',
        url: 'https://creatoracademy.youtube.com',
        type: 'Documentation',
      },
      {
        title: 'Facebook Creator Bonus Program',
        url: 'https://www.facebook.com/creators',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Kiếm tiền từ Nội dung tại Việt Nam',
      content: [
        'Affiliate marketing (tiếp thị liên kết) thông qua các sàn thương mại điện tử như Shopee, Lazada, Tiki là một nguồn thu nhập cực kỳ phổ biến cho các nhà sáng tạo Việt Nam.',
        'Các nền tảng cho phép người hâm mộ "donate" hoặc tặng quà ảo (như TikTok, Facebook Gaming) rất phát triển, đặc biệt trong lĩnh vực livestream game và giải trí.',
        'Nhiều nhà sáng tạo thành công đã ra mắt thương hiệu riêng (local brand) về thời trang, mỹ phẩm, và đồ ăn, tận dụng lượng người theo dõi sẵn có.',
        'Việc nhận booking quảng cáo từ các nhãn hàng vẫn là nguồn thu nhập chính và lớn nhất đối với các KOL/KOC có tầm ảnh hưởng.',
      ],
    },
    careerConnect: {
      name: 'Chị Helly Tống',
      title: 'Founder, Entrepreneur, Influencer',
      company: 'The Yên Concept, Lại Đây Refill Station',
      imageUrl: 'https://i.pravatar.cc/150?u=helly-tong',
      quote:
        'Sáng tạo nội dung cho tôi một tiếng nói và một cộng đồng. Nhưng tôi không dừng lại ở đó. Tôi biến cộng đồng đó thành khách hàng cho những dự án kinh doanh mang giá trị bền vững mà tôi tin tưởng. Đó là cách bạn tạo ra ảnh hưởng thực sự và xây dựng một sự nghiệp có ý nghĩa.',
    },
    quizzes: [
      {
        question: 'Đa dạng hóa nguồn thu (Revenue Stream Diversification) có lợi ích gì lớn nhất?',
        options: [
          'Kiếm được nhiều tiền hơn ngay lập tức',
          'Giảm sự phụ thuộc vào một nguồn thu duy nhất, tăng tính bền vững',
          'Chỉ cần làm việc ít hơn',
          'Dễ dàng hơn để quản lý',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Lợi ích lớn nhất của việc đa dạng hóa là giảm thiểu rủi ro. Nếu một nguồn thu nhập (ví dụ: doanh thu quảng cáo YouTube) giảm sút do thay đổi thuật toán, bạn vẫn có các nguồn thu khác (bán hàng, affiliate, tài trợ) để duy trì sự ổn định tài chính.',
      },
      {
        question: '"Thang giá trị" (Value Ladder) trong kinh doanh nội dung hoạt động như thế nào?',
        options: [
          'Bán sản phẩm đắt nhất trước tiên',
          'Chỉ bán một loại sản phẩm',
          'Dẫn dắt khán giả từ nội dung miễn phí đến các sản phẩm trả phí có giá trị tăng dần',
          'Tặng tất cả mọi thứ miễn phí',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thang giá trị là một chiến lược marketing nhằm xây dựng lòng tin và tối đa hóa giá trị từ khách hàng. Nó bắt đầu bằng việc cung cấp giá trị miễn phí, sau đó giới thiệu các sản phẩm/dịch vụ trả phí với mức giá và giá trị tăng dần, phù hợp với các mức độ cam kết khác nhau của khách hàng.',
      },
    ],
  },
  {
    id: 'brand-partnerships-sponsorships',
    title: 'Brand Partnerships & Sponsorship Deals',
    description:
      'Negotiate win-win partnerships với brands, create authentic sponsored content, và build long-term relationships trong industry.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=iWHS05fpPwE',
    imageUrl: 'https://i.ytimg.com/vi/VzNi_LtjxsM/hqdefault.jpg',
    mainContent: {
      introduction:
        'Hợp tác với nhãn hàng là một trong những cách hiệu quả nhất để các nhà sáng tạo nội dung tăng tốc thu nhập và nâng cao uy tín. Tuy nhiên, đây cũng là một lĩnh vực đầy cạm bẫy. Bài học này sẽ dạy bạn cách tìm kiếm, đàm phán và thực hiện các hợp đồng tài trợ một cách chuyên nghiệp, đảm bảo lợi ích cho cả bạn, nhãn hàng và quan trọng nhất là khán giả của bạn.',
      keyConcepts: [
        {
          title: 'Xây dựng Media Kit chuyên nghiệp',
          description:
            'Media Kit chính là CV của một nhà sáng tạo nội dung. Học cách tạo một Media Kit ấn tượng, trình bày rõ ràng các số liệu về kênh, thông tin về đối tượng khán giả, và các case study thành công để thuyết phục nhãn hàng.',
          examples: [
            'Bao gồm các chỉ số quan trọng như lượng người theo dõi, tỷ lệ tương tác, và nhân khẩu học của khán giả.',
            'Trình bày các gói hợp tác và báo giá một cách rõ ràng.',
          ],
        },
        {
          title: 'Nghệ thuật đàm phán (The Art of Negotiation)',
          description:
            'Đừng bao giờ chấp nhận lời đề nghị đầu tiên. Học cách định giá đúng giá trị của mình, đàm phán các điều khoản hợp đồng (không chỉ về tiền bạc mà còn về quyền kiểm soát sáng tạo), và bảo vệ lợi ích của bản thân.',
          examples: [
            'Đề xuất một gói hợp tác bao gồm nhiều loại nội dung (ví dụ: 1 video + 3 story) thay vì chỉ một bài đăng.',
            'Đàm phán quyền được xem trước và phê duyệt nội dung cuối cùng.',
          ],
        },
        {
          title: 'Tích hợp quảng cáo tự nhiên (Authentic Integration)',
          description:
            'Khán giả ghét quảng cáo lộ liễu. Chìa khóa thành công là tích hợp thông điệp của nhãn hàng vào nội dung của bạn một cách tự nhiên và chân thực, mang lại giá trị cho người xem thay vì chỉ đơn thuần là quảng cáo.',
          examples: [
            'Kể một câu chuyện cá nhân về cách sản phẩm đã giúp bạn giải quyết một vấn đề.',
            'Sử dụng sản phẩm như một công cụ trong một video hướng dẫn thay vì chỉ nói về nó.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Đại sứ thương hiệu (Brand Ambassador)',
          description:
            'Xây dựng mối quan hệ hợp tác lâu dài với một nhãn hàng bạn yêu thích, trở thành gương mặt đại diện và có nguồn thu nhập ổn định.',
        },
        {
          area: 'Chiến dịch ra mắt sản phẩm',
          description:
            'Hợp tác với các công ty để tạo ra sự bùng nổ truyền thông cho các sản phẩm mới sắp ra mắt thị trường.',
        },
        {
          area: 'Tiếp thị liên kết (Affiliate Marketing)',
          description:
            'Quảng bá sản phẩm và nhận hoa hồng trên mỗi đơn hàng thành công, một hình thức hợp tác ít rủi ro và dễ bắt đầu.',
        },
      ],
      conclusion:
        'Các mối quan hệ đối tác thành công được xây dựng trên sự tin tưởng và đôi bên cùng có lợi. Bằng cách tiếp cận các thương vụ tài trợ một cách chiến lược và chuyên nghiệp, bạn sẽ không chỉ kiếm được tiền mà còn xây dựng được uy tín và mở ra những cơ hội hợp tác lớn hơn trong tương lai.',
    },
    relatedGames: [
      {
        id: 'debate-master-3d',
        name: 'Debate Master 3D',
        description:
          'Engage in AI-driven debates, develop critical thinking, and master persuasive arguments in 3D courtroom',
      },
    ],
    platforms: ['All social media platforms'],
    monetizationMethods: ['Sponsored posts', 'Product placement', 'Brand ambassadorships', 'Event partnerships'],
    toolsRequired: ['Email templates', 'Media kit', 'Contract templates', 'Analytics dashboard'],
    averageIncome: '5-50 triệu VNĐ per partnership',
    timeToMaster: '3-6 tháng',
    objectives: [
      'Identify suitable brand partnership opportunities',
      'Negotiate fair compensation và contract terms',
      'Create authentic sponsored content maintaining audience trust',
      'Build long-term relationships với brands và agencies',
      'Understand legal requirements và disclosure regulations',
    ],
    prerequisites: [
      'Established audience và engagement metrics',
      'Portfolio của high-quality content',
      'Professional communication skills',
      'Understanding của your audience demographics',
    ],
    exercises: [
      {
        title: 'Brand Outreach Campaign',
        description: 'Systematically reach out to relevant brands cho partnership opportunities',
        difficulty: 'Trung bình',
        materials: ['Media kit', 'Email templates', 'Brand research spreadsheet'],
        procedure: [
          'Research brands that align với your audience interests',
          'Analyze competitor partnerships để understand market rates',
          'Create compelling pitch highlighting unique value proposition',
          'Personalize outreach emails cho each brand',
          'Follow up professionally với non-responsive brands',
          'Track outreach success rates và optimize approach',
          'Build relationships với brand managers và marketing teams',
          'Maintain database của potential partnership opportunities',
        ],
        expectedResults: 'Positive response rate của 10-20% leading to partnership discussions',
        solution:
          "Focus on mutual benefit rather than just asking cho money - show how you can solve brand's marketing challenges",
      },
      {
        title: 'Authentic Sponsored Content Creation',
        description: 'Create sponsored content that maintains authenticity while delivering brand value',
        difficulty: 'Nâng cao',
        materials: ['Brand guidelines', 'Content creation tools', 'Disclosure templates'],
        procedure: [
          'Understand brand messaging và campaign objectives',
          'Integrate product naturally into your content style',
          'Maintain honest opinions về product experience',
          'Include proper FTC disclosure trong all sponsored content',
          'Create content that provides value beyond product promotion',
          'Test different sponsored content formats',
          'Measure engagement và conversion metrics cho brand',
          'Get feedback từ both audience và brand partners',
        ],
        expectedResults: 'Sponsored content performing comparably to organic content in engagement',
        solution:
          'Only partner với brands you genuinely would use, be transparent về sponsorship, focus on storytelling rather than direct selling',
      },
    ],
    realWorldApplications: [
      'Influencer marketing career với brand agencies',
      'Brand ambassador roles với long-term partnerships',
      'Product launch campaigns cho startups',
      'Tourism promotion cho destinations',
      'Technology product reviews và recommendations',
    ],
    caseStudies: [
      {
        title: 'Tech Reviewer Brand Partnership Success',
        organization: 'Vietnamese Tech Content Creator',
        problem: 'Difficulty securing tech brand partnerships trong competitive market',
        solution:
          'Specialized trong budget tech reviews relevant to Vietnamese consumers, built reputation cho honest reviews',
        impact: 'Secured partnerships với major brands: Samsung, Xiaomi, ASUS worth 30+ triệu VNĐ quarterly',
        innovations: [
          'Vietnamese market-specific reviews',
          'Budget comparison focus',
          'Local availability information',
        ],
      },
    ],
    resources: [
      {
        title: 'AspireIQ - Influencer Marketing Platform',
        url: 'https://aspireiq.com',
        type: 'Tool',
      },
      {
        title: 'FTC Guidelines for Social Media',
        url: 'https://ftc.gov/business-guidance/resources/ftcs-endorsement-guides',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Hợp tác Nhãn hàng tại Việt Nam',
      content: [
        'Các agency booking KOL/KOC đóng vai trò trung gian quan trọng giữa nhãn hàng và nhà sáng tạo tại Việt Nam.',
        'Báo giá (rate card) thường linh hoạt và phụ thuộc nhiều vào kết quả thực tế (performance-based) hơn là chỉ số người theo dõi.',
        'Tính chân thực và phù hợp với văn hóa địa phương là yếu tố được các nhãn hàng tại Việt Nam đánh giá rất cao.',
        'Việc công khai nội dung được tài trợ (ví dụ: dùng hashtag #sponsored, #ad) đang dần trở thành tiêu chuẩn, dù chưa được thực thi nghiêm ngặt như ở các nước phương Tây.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Khoa',
      title: 'Head of Influencer Marketing',
      company: 'Ogilvy Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-khoa',
      quote:
        'Chúng tôi không tìm kiếm những người chỉ có followers cao. Chúng tôi tìm kiếm những người có khả năng tạo ra ảnh hưởng thực sự và có một cộng đồng tin tưởng họ. Sự phù hợp giữa giá trị của nhà sáng tạo và giá trị của nhãn hàng là chìa khóa cho một chiến dịch thành công.',
    },
    quizzes: [
      {
        question: 'Media Kit là gì?',
        options: [
          'Một bộ dụng cụ để làm media',
          'CV của một nhà sáng tạo nội dung, trình bày các số liệu và thông tin về kênh',
          'Một hợp đồng mẫu',
          'Một danh sách các nhãn hàng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Media Kit là một tài liệu chuyên nghiệp tổng hợp tất cả thông tin quan trọng về kênh của bạn: số liệu thống kê, nhân khẩu học khán giả, các gói hợp tác, báo giá, và các case study thành công. Nó được dùng để gửi cho các nhãn hàng tiềm năng.',
      },
      {
        question: 'Khi đàm phán hợp đồng với nhãn hàng, bạn nên tập trung vào điều gì ngoài tiền bạc?',
        options: [
          'Chỉ tiền bạc là quan trọng',
          'Quyền kiểm soát sáng tạo, thời hạn thanh toán, và quyền sở hữu nội dung',
          'Số lượng sản phẩm miễn phí bạn nhận được',
          'Không có gì khác',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một hợp đồng tốt không chỉ có giá trị cao mà còn bảo vệ quyền lợi của bạn. Các điều khoản quan trọng khác bao gồm: quyền tự do sáng tạo, thời gian nhãn hàng được phép sử dụng nội dung, và bạn có được giữ bản quyền nội dung sau chiến dịch hay không.',
      },
    ],
  },
  {
    id: 'content-calendar-consistency',
    title: 'Content Calendar & Consistency Systems',
    description:
      'Build sustainable content production systems, automate workflows, và maintain consistent posting schedule để grow audience effectively.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bB5eKayGMvM',
    imageUrl: 'https://i.ytimg.com/vi/bB5eKayGMvM/hqdefault.jpg',
    mainContent: {
      introduction:
        'Sự nhất quán là vua trong thế giới nội dung. Khán giả quay trở lại vì họ biết khi nào và những gì sẽ mong đợi từ bạn. Tuy nhiên, việc duy trì sự sáng tạo và lịch trình đăng bài đều đặn có thể gây kiệt sức. Bài học này sẽ cung cấp cho bạn các hệ thống và quy trình để lên kế hoạch, sản xuất và xuất bản nội dung một cách bền vững, giúp bạn không bị burnout và phát triển kênh một cách ổn định.',
      keyConcepts: [
        {
          title: 'Sản xuất theo lô (Batch Production)',
          description:
            'Thay vì tạo từng nội dung một, hãy dành riêng một khoảng thời gian để sản xuất hàng loạt. Kỹ thuật này giúp tiết kiệm thời gian chuyển đổi giữa các công việc, duy trì sự nhất quán về mặt hình ảnh và giải phóng tâm trí bạn khỏi áp lực phải sáng tạo hàng ngày.',
          examples: [
            'Dành một ngày cuối tuần để quay 5 video ngắn cho cả tuần.',
            'Viết kịch bản cho 4 video dài trong một buổi chiều.',
          ],
        },
        {
          title: 'Tái sử dụng nội dung (Content Repurposing)',
          description:
            'Làm việc thông minh hơn, không phải chăm chỉ hơn. Học cách biến một mẩu nội dung lớn thành nhiều định dạng nhỏ hơn để đăng tải trên các nền tảng khác nhau, tối đa hóa phạm vi tiếp cận và giá trị của mỗi ý tưởng.',
          examples: [
            'Biến một video YouTube dài thành một bài blog, nhiều video TikTok ngắn, một chuỗi story trên Instagram, và một bài viết trên Facebook.',
          ],
        },
        {
          title: 'Hệ thống quản lý ý tưởng (Idea Management System)',
          description:
            'Ý tưởng có thể đến bất cứ lúc nào. Xây dựng một "ngân hàng ý tưởng" tập trung để bạn không bao giờ phải đối mặt với "hội chứng trang giấy trắng". Hệ thống này giúp bạn nắm bắt, phân loại và phát triển các ý tưởng một cách có tổ chức.',
          examples: [
            'Sử dụng một công cụ như Notion hoặc Trello để tạo các cột cho các giai đoạn: Ý tưởng thô -> Đang nghiên cứu -> Sẵn sàng quay -> Đã xuất bản.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Quản lý kênh Social Media',
          description:
            'Lên lịch trình nội dung cho cả tháng chỉ trong vài ngày, giúp bạn có thời gian tập trung vào việc tương tác với cộng đồng và các hoạt động chiến lược khác.',
        },
        {
          area: 'Cân bằng công việc và cuộc sống',
          description:
            'Xây dựng một hệ thống làm việc hiệu quả giúp bạn tránh được tình trạng kiệt sức, duy trì được đam mê sáng tạo và có thời gian cho cuộc sống cá nhân.',
        },
        {
          area: 'Mở rộng quy mô đội nhóm',
          description:
            'Khi kênh của bạn phát triển, các hệ thống và quy trình rõ ràng sẽ giúp bạn dễ dàng thuê và quản lý các thành viên khác trong đội (ví dụ: người dựng phim, người viết kịch bản).',
        },
      ],
      conclusion:
        'Sự sáng tạo cần có cấu trúc để thăng hoa. Bằng cách xây dựng các hệ thống sản xuất nội dung vững chắc, bạn sẽ giải phóng bản thân khỏi những áp lực hàng ngày, duy trì được sự nhất quán và tạo ra một nền tảng vững chắc cho sự phát triển lâu dài của kênh.',
    },
    relatedGames: [],
    platforms: ['All platforms'],
    monetizationMethods: ['Indirect through improved consistency và growth'],
    toolsRequired: ['Content planning tools', 'Scheduling software', 'Project management systems'],
    averageIncome: 'Foundation cho sustainable income growth',
    timeToMaster: '1-2 tháng',
    objectives: [
      'Create systematic approach to content planning và production',
      'Develop efficient workflows để maintain consistency',
      'Balance quality với quantity trong content creation',
      'Build content systems that scale với growing audience',
      'Maintain creative inspiration while meeting production demands',
    ],
    prerequisites: [
      'Basic understanding của content creation process',
      'Familiarity với social media platforms',
      'Time management skills',
      'Access to content planning tools',
    ],
    exercises: [
      {
        title: 'Content System Development',
        description: 'Create comprehensive content production system từ ideation to publishing',
        difficulty: 'Trung bình',
        materials: ['Content calendar template', 'Project management tool', 'Analytics access'],
        procedure: [
          'Audit current content creation process để identify bottlenecks',
          'Create content pillar framework cho consistent themes',
          'Develop content ideation system với ongoing idea capture',
          'Set up batch content creation workflows',
          'Implement quality control checkpoints',
          'Create posting schedules optimized cho each platform',
          'Set up performance tracking và optimization loops',
          'Build backup content queue cho emergency situations',
        ],
        expectedResults: 'Streamlined content system reducing creation time by 40% while maintaining quality',
        solution: 'Focus on batch creation và templates để achieve efficiency without sacrificing creativity',
      },
      {
        title: 'Automation Implementation',
        description: 'Automate repetitive tasks trong content creation và distribution',
        difficulty: 'Nâng cao',
        materials: ['Automation tools', 'Scheduling platforms', 'Analytics dashboards'],
        procedure: [
          'Identify repetitive tasks suitable cho automation',
          'Set up social media scheduling tools',
          'Create templates cho common content types',
          'Automate analytics reporting và performance tracking',
          'Implement content backup và archive systems',
          'Set up automated cross-platform content adaptation',
          'Create workflow triggers cho different content types',
          'Monitor automation performance và adjust as needed',
        ],
        expectedResults: 'Automated workflow handling 60%+ của routine content tasks',
        solution: 'Automate distribution và tracking, keep creative aspects human-driven',
      },
    ],
    realWorldApplications: [
      'Social media management cho businesses',
      'Content strategy consulting services',
      'Personal brand development cho professionals',
      'Scalable content production cho agencies',
      'Systematic approach cho growing audiences',
    ],
    caseStudies: [
      {
        title: 'Lifestyle Creator Consistency Transformation',
        organization: 'Vietnamese Lifestyle Influencer',
        problem: 'Inconsistent posting leading to audience drop-off và missed opportunities',
        solution: 'Implemented batch content creation system, automated scheduling, performance tracking',
        impact: 'Increased posting consistency to 95%, grew audience by 200% trong 6 months',
        innovations: ['Content batching on weekends', 'Template-based creation', 'Performance-based optimization'],
      },
    ],
    resources: [
      {
        title: 'Buffer - Social Media Scheduling',
        url: 'https://buffer.com',
        type: 'Tool',
      },
      {
        title: 'Notion - Content Planning',
        url: 'https://notion.so',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Hệ thống làm việc của Creator Việt',
      content: [
        'Nhiều creator Việt Nam thành công thường có một đội ngũ (ekip) nhỏ hỗ trợ, bao gồm người quay phim, dựng phim và quản lý.',
        'Việc "bắt trend" là cực kỳ quan trọng, đòi hỏi các creator phải có hệ thống linh hoạt để sản xuất nội dung nhanh chóng.',
        'Các công cụ như Trello, Notion, và Google Calendar được sử dụng rộng rãi để quản lý lịch trình và ý tưởng.',
        'Sản xuất theo lô (batching) đặc biệt hiệu quả cho các TikToker, những người cần đăng nhiều video mỗi ngày để duy trì sự hiện diện.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Minh',
      title: 'Production Manager',
      company: 'Schannel',
      imageUrl: 'https://i.pravatar.cc/150?u=le-minh',
      quote:
        'Tại Schannel, chúng tôi không thể tồn tại nếu không có hệ thống. Mỗi tuần, chúng tôi có các buổi họp lên ý tưởng, lịch quay, và lịch đăng bài chi tiết cho từng kênh. Sự nhất quán và quy trình chuyên nghiệp là thứ biến một kênh YouTube từ một sở thích thành một cỗ máy truyền thông thực thụ.',
    },
    quizzes: [
      {
        question: 'Sản xuất theo lô (Batch Production) có lợi ích chính là gì?',
        options: [
          'Chất lượng video tốt hơn',
          'Tiết kiệm thời gian và giảm áp lực sáng tạo hàng ngày',
          'Cần ít thiết bị hơn',
          'Tốn nhiều chi phí hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Sản xuất theo lô giúp bạn tập trung năng lượng vào một loại công việc tại một thời điểm (ví dụ: chỉ quay hoặc chỉ dựng phim), giúp tiết kiệm thời gian chuyển đổi và giảm bớt áp lực phải nghĩ ra ý tưởng mới và thực hiện nó mỗi ngày.',
      },
      {
        question: 'Tái sử dụng nội dung (Content Repurposing) là gì?',
        options: [
          'Đăng lại cùng một nội dung ở mọi nơi',
          'Xóa nội dung cũ',
          'Biến một mẩu nội dung lớn thành nhiều định dạng nhỏ hơn cho các nền tảng khác nhau',
          'Chỉ tạo nội dung mới',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đây là một chiến lược thông minh để tối đa hóa giá trị của mỗi ý tưởng. Ví dụ, một video dài trên YouTube có thể được cắt thành nhiều clip ngắn cho TikTok, chuyển thành một bài viết blog, và các trích dẫn hay có thể làm thành ảnh đăng Instagram.',
      },
    ],
  },
  {
    id: 'analytics-growth-optimization',
    title: 'Analytics & Growth Optimization',
    description:
      'Master data-driven content strategy, analyze performance metrics, và optimize growth through systematic testing và iteration.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=RVFlSEJj3vA',
    imageUrl: 'https://i.ytimg.com/vi/RVFlSEJj3vA/hqdefault.jpg',
    mainContent: {
      introduction:
        'Trong thế giới số, dữ liệu là la bàn dẫn lối đến thành công. Việc chỉ tạo ra nội dung hay là chưa đủ; bạn cần phải hiểu khán giả của mình muốn gì, điều gì khiến họ tương tác, và làm thế nào để tiếp cận được nhiều người hơn. Bài học này sẽ biến bạn từ một người sáng tạo nội dung đơn thuần thành một chiến lược gia tăng trưởng, sử dụng dữ liệu để đưa ra các quyết định thông minh.',
      keyConcepts: [
        {
          title: 'Các chỉ số quan trọng (Key Performance Indicators - KPIs)',
          description:
            'Không phải tất cả các con số đều có giá trị như nhau. Học cách phân biệt giữa các "chỉ số phù phiếm" (vanity metrics) như lượt xem và các chỉ số thực sự quan trọng như tỷ lệ giữ chân khán giả (retention rate), tỷ lệ nhấp (CTR), và thời gian xem trung bình.',
          examples: [
            'Một video có tỷ lệ giữ chân khán giả cao ở phút đầu tiên cho thấy thumbnail và tiêu đề đã làm tốt việc của nó.',
            'Tỷ lệ CTR cao cho thấy tiêu đề và thumbnail của bạn hấp dẫn.',
          ],
        },
        {
          title: 'Thử nghiệm A/B (A/B Testing)',
          description:
            'Ngừng đoán mò, hãy để dữ liệu trả lời. Học cách thiết lập các thử nghiệm có kiểm soát để so sánh hiệu quả của các yếu tố khác nhau, chẳng hạn như hai phiên bản thumbnail, hai tiêu đề khác nhau, hoặc hai lời kêu gọi hành động khác nhau.',
          examples: [
            'Chạy hai thumbnail khác nhau cho cùng một video trên YouTube để xem cái nào có CTR cao hơn.',
            'Thử nghiệm hai kiểu caption khác nhau trên Instagram để xem kiểu nào tạo ra nhiều bình luận hơn.',
          ],
        },
        {
          title: 'Vòng lặp Tối ưu hóa (Optimization Loop)',
          description:
          'Share learnings với team hoặc community',
        ],
        expectedResults: 'Data-proven strategies resulting trong 25%+ improvement trong key metrics',
        solution:
          'Test one variable at a time, ensure sufficient sample size, wait cho statistical significance before drawing conclusions',
      },
    ],
    realWorldApplications: [
      'Growth hacking consulting cho content creators',
      'Social media analytics services cho businesses',
      'Content strategy optimization roles',
      'Performance marketing với focus on content',
      'Data analyst roles trong creator economy companies',
    ],
    caseStudies: [
      {
        title: 'Data-Driven Growth Success',
        organization: 'Educational Vietnamese YouTuber',
        problem: 'Plateau trong growth despite consistent content creation',
        solution:
          'Implemented systematic analytics review, A/B tested thumbnails và titles, optimized posting schedule',
        impact: 'Broke growth plateau, achieved 300% increase trong monthly views',
        innovations: [
          'Vietnamese-specific keyword optimization',
          'Cultural timing adjustments',
          'Local trend integration',
        ],
      },
    ],
    resources: [
      {
        title: 'YouTube Analytics Academy',
        url: 'https://creatoracademy.youtube.com/page/course/analytics-series',
        type: 'Documentation',
      },
      {
        title: 'Social Blade - Analytics Tracking',
        url: 'https://socialblade.com',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Phân tích và Tăng trưởng tại Việt Nam',
      content: [
        'Các "trend" trên TikTok và Facebook tại Việt Nam thay đổi rất nhanh, đòi hỏi các creator phải liên tục phân tích và thích ứng.',
        'Khung giờ vàng để đăng bài ở Việt Nam thường là buổi trưa (12h-13h) và buổi tối (20h-22h), nhưng cần được kiểm chứng lại cho từng đối tượng khán giả cụ thể.',
        'Việc phân tích các bình luận của khán giả (comment analysis) là một mỏ vàng để tìm ra insight và các ý tưởng nội dung mới.',
        'Nhiều creator Việt Nam thành công bằng cách phân tích và "Việt hóa" các format nội dung thành công từ nước ngoài.',
      ],
    },
    careerConnect: {
      name: 'Anh Tuấn Hà',
      title: 'Chief Digital Officer',
      company: 'VMLY&R Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tuan-ha',
      quote:
        'Trong marketing hiện đại, không có chỗ cho sự đoán mò. Mọi quyết định đều phải dựa trên dữ liệu. Các content creator cũng vậy. Những người thành công nhất là những người hiểu rõ khán giả của họ hơn bất kỳ ai khác, và họ làm điều đó bằng cách liên tục phân tích, thử nghiệm và tối ưu.',
    },
    quizzes: [
      {
        question: 'Đâu là một "chỉ số phù phiếm" (vanity metric)?',
        options: [
          'Tỷ lệ giữ chân khán giả (Audience Retention)',
          'Thời gian xem (Watch Time)',
          'Số lượt thích (Likes)',
          'Tỷ lệ nhấp (Click-Through Rate)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Lượt thích là một chỉ số dễ thấy nhưng thường không phản ánh sự tương tác sâu sắc hay giá trị thực sự của nội dung. Các chỉ số như thời gian xem và tỷ lệ giữ chân khán giả cho thấy mức độ quan tâm thực sự của người xem.',
      },
      {
        question: 'Mục đích chính của thử nghiệm A/B là gì?',
        options: [
          'Để tạo ra nhiều nội dung hơn',
          'Để so sánh hiệu quả của hai phiên bản khác nhau của một yếu tố để đưa ra quyết định dựa trên dữ liệu',
          'Để xem đối thủ đang làm gì',
          'Để tăng số người theo dõi ngay lập tức',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thử nghiệm A/B (hay split testing) là một phương pháp có kiểm soát để so sánh hai phiên bản của một biến (ví dụ: hai tiêu đề) nhằm xác định phiên bản nào hoạt động tốt hơn trong việc đạt được một mục tiêu cụ thể (ví dụ: tỷ lệ nhấp cao hơn).',
      },
    ],
  },
  {
    id: 'legal-business-content-creation',
    title: 'Legal & Business Aspects of Content Creation',
    description:
      'Navigate legal requirements, business registration, taxes, và intellectual property protection trong Vietnamese content creator landscape.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=20PaLUq0h-U',
    imageUrl: 'https://i.ytimg.com/vi/20PaLUq0h-U/hqdefault.jpg',
    mainContent: {
      introduction:
        'Khi đam mê của bạn bắt đầu tạo ra thu nhập, nó đã trở thành một công việc kinh doanh. Việc bỏ qua các khía cạnh pháp lý và kinh doanh có thể dẫn đến những rủi ro nghiêm trọng. Bài học này là khóa học cấp tốc về "CEO 101" dành cho các nhà sáng tạo nội dung, trang bị cho bạn kiến thức cần thiết về đăng ký kinh doanh, thuế, bản quyền và hợp đồng tại Việt Nam.',
      keyConcepts: [
        {
          title: 'Thành lập pháp nhân (Business Entity Setup)',
          description:
            'Bảo vệ tài sản cá nhân của bạn bằng cách tách biệt giữa tài chính cá nhân và tài chính kinh doanh. Tìm hiểu các loại hình doanh nghiệp phổ biến ở Việt Nam (Hộ kinh doanh cá thể, Công ty TNHH) và chọn loại hình phù hợp với quy mô của bạn.',
          examples: [
            'Bắt đầu với Hộ kinh doanh cá thể khi thu nhập còn thấp.',
            'Nâng cấp lên Công ty TNHH một thành viên khi doanh thu tăng và cần sự chuyên nghiệp hơn.',
          ],
        },
        {
          title: 'Nghĩa vụ thuế (Tax Obligations)',
          description:
            'Hiểu rõ các loại thuế bạn cần phải đóng (Thuế thu nhập cá nhân, Thuế giá trị gia tăng) và các khoản chi phí được khấu trừ. Việc tuân thủ quy định về thuế giúp bạn kinh doanh một cách bền vững và tránh các rắc rối pháp lý.',
          examples: [
            'Chi phí mua thiết bị, phần mềm, hoặc chi phí đi lại để sản xuất nội dung có thể được tính là chi phí hợp lệ.',
          ],
        },
        {
          title: 'Sở hữu trí tuệ (Intellectual Property - IP)',
          description:
            'Nội dung của bạn là tài sản. Học cách bảo vệ nó thông qua luật bản quyền và nhãn hiệu. Đồng thời, hiểu rõ cách sử dụng hợp pháp nội dung của người khác (ví dụ: âm nhạc, hình ảnh) để tránh bị kiện tụng.',
          examples: [
            'Đăng ký bản quyền cho logo và tên thương hiệu của bạn.',
            'Sử dụng các thư viện nhạc và hình ảnh có bản quyền rõ ràng như Epidemic Sound hoặc Artlist.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Ký kết hợp đồng với nhãn hàng',
          description:
            'Đọc và hiểu các điều khoản trong hợp đồng tài trợ, đảm bảo quyền lợi của bạn được bảo vệ trước khi đặt bút ký.',
        },
        {
          area: 'Thuê nhân sự',
          description:
            'Khi kênh phát triển, bạn có thể cần thuê người dựng phim hoặc trợ lý. Việc có một pháp nhân kinh doanh sẽ giúp bạn thực hiện các hợp đồng lao động một cách hợp pháp.',
        },
        {
          area: 'Bán sản phẩm và khóa học',
          description: 'Thiết lập một cổng thanh toán và xuất hóa đơn hợp pháp cho các sản phẩm và dịch vụ bạn bán ra.',
        },
      ],
      conclusion:
        'Xem mình là một doanh nhân là bước chuyển đổi tư duy quan trọng nhất để thành công lâu dài trong nền kinh tế sáng tạo. Bằng cách xây dựng một nền tảng pháp lý và kinh doanh vững chắc, bạn đang bảo vệ thành quả lao động của mình và tạo điều kiện cho sự phát triển không giới hạn trong tương lai.',
    },
    relatedGames: [],
    platforms: ['All platforms'],
    monetizationMethods: ['Proper business setup enables all monetization methods'],
    toolsRequired: ['Legal consultation', 'Accounting software', 'Business registration documents'],
    averageIncome: 'Foundation cho legitimate business operations',
    timeToMaster: '2-3 tháng',
    objectives: [
      'Understand Vietnamese legal requirements cho content creators',
      'Set up proper business entity cho content creation income',
      'Navigate tax obligations và deductions',
      'Protect intellectual property và handle copyright issues',
      'Understand platform terms of service và compliance requirements',
    ],
    prerequisites: [
      'Generating income từ content creation',
      'Basic understanding của business concepts',
      'Willingness to invest trong legal và accounting setup',
      'Understanding của Vietnamese business landscape',
    ],
    exercises: [
      {
        title: 'Business Entity Setup',
        description: 'Establish legal business structure cho content creation activities',
        difficulty: 'Nâng cao',
        materials: ['Legal consultation', 'Business registration documents', 'Tax registration'],
        procedure: [
          'Research business entity options trong Vietnam: sole proprietorship, LLC, company',
          'Consult với lawyer familiar với content creator business',
          'Register business entity với appropriate authorities',
          'Set up business banking account',
          'Implement proper bookkeeping system',
          'Understand tax obligations và quarterly reporting',
          'Set up contracts templates cho brand partnerships',
          'Establish intellectual property protection strategies',
        ],
        expectedResults: 'Legally compliant business structure ready cho scaling content operations',
        solution: 'Start với simplest structure that meets your needs, upgrade as business grows',
      },
      {
        title: 'Copyright and IP Management',
        description: "Protect your content và respect others' intellectual property rights",
        difficulty: 'Trung bình',
        materials: ['Copyright registration resources', 'Content licensing information'],
        procedure: [
          'Understand Vietnamese copyright law basics',
          'Implement content watermarking và protection strategies',
          "Learn fair use guidelines cho using others' content",
          'Set up DMCA takedown procedures cho stolen content',
          'Create licensing agreements cho your content use by others',
          'Understand music licensing requirements cho video content',
          'Document content creation process cho IP protection',
          'Build relationships với IP lawyers familiar với digital content',
        ],
        expectedResults: 'Protected intellectual property với clear usage rights và revenue opportunities',
        solution: "Document everything, use royalty-free resources, respect others' IP, register important works",
      },
    ],
    realWorldApplications: [
      'Legal content creator business setup',
      'IP protection consulting cho creators',
      'Business advisory services cho digital entrepreneurs',
      'Compliance consulting cho growing creator businesses',
      'Legal education services cho creator community',
    ],
    caseStudies: [
      {
        title: 'Creator Business Legitimization Success',
        organization: 'Vietnamese Food Content Creator',
        problem: 'Informal income reporting và potential legal issues với growing revenue',
        solution: 'Established proper business entity, implemented professional accounting, set up IP protection',
        impact: 'Transformed hobby into legitimate business generating 40+ triệu VNĐ monthly legally',
        innovations: [
          'Creator-specific business structure',
          'IP monetization strategy',
          'Professional brand development',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Ministry of Planning and Investment',
        url: 'https://mpi.gov.vn',
        type: 'Documentation',
      },
      {
        title: 'Vietnam IP Office',
        url: 'http://ipvietnam.gov.vn',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Pháp lý và Kinh doanh cho Creator tại Việt Nam',
      content: [
        'Nghị định 72 về quản lý, cung cấp, sử dụng dịch vụ Internet và thông tin trên mạng là văn bản pháp lý quan trọng mà các nhà sáng tạo nội dung cần nắm rõ.',
        'Việc đăng ký hộ kinh doanh cá thể là hình thức phổ biến và đơn giản nhất cho các creator khi mới bắt đầu có thu nhập.',
        'Thuế thu nhập cá nhân từ các hoạt động sáng tạo nội dung, quảng cáo là bắt buộc và đang được cơ quan thuế giám sát chặt chẽ.',
        'Vấn đề bản quyền âm nhạc và hình ảnh ngày càng được siết chặt trên các nền tảng, đòi hỏi creator phải có ý thức hơn về việc sử dụng các nguồn tài nguyên hợp pháp.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Trần Thị Hậu',
      title: 'Chuyên gia Luật Sở hữu Trí tuệ',
      company: 'Baker & McKenzie Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-hau',
      quote:
        'Nhiều nhà sáng tạo nội dung chỉ tập trung vào việc sáng tạo mà quên mất rằng họ đang xây dựng một tài sản. Việc bảo vệ tài sản trí tuệ và tuân thủ các quy định pháp lý ngay từ đầu không phải là gánh nặng, mà là nền tảng vững chắc nhất cho sự phát triển bền vững.',
    },
    quizzes: [
      {
        question:
          'Tại Việt Nam, hình thức kinh doanh nào là đơn giản nhất cho một cá nhân sáng tạo nội dung khi mới bắt đầu có thu nhập?',
        options: ['Công ty Cổ phần', 'Công ty TNHH', 'Hộ kinh doanh cá thể', 'Doanh nghiệp tư nhân'],
        correctAnswerIndex: 2,
        explanation:
          'Hộ kinh doanh cá thể là hình thức đơn giản nhất về thủ tục đăng ký và nghĩa vụ kế toán, phù hợp với các cá nhân kinh doanh với quy mô nhỏ, bao gồm cả các nhà sáng tạo nội dung mới bắt đầu.',
      },
      {
        question:
          'Sử dụng một đoạn nhạc nổi tiếng trong video của bạn mà không có sự cho phép có được coi là "sử dụng hợp lý" (fair use) không?',
        options: [
          'Luôn luôn được',
          'Không bao giờ được',
          'Phụ thuộc vào nhiều yếu tố và rất rủi ro',
          'Chỉ cần video của bạn không kiếm tiền',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Khái niệm "fair use" rất phức tạp và không được định nghĩa rõ ràng trong luật Việt Nam như ở Mỹ. Việc sử dụng bất kỳ nội dung nào có bản quyền mà không được phép đều tiềm ẩn rủi ro bị gỡ bỏ video hoặc kiện tụng. An toàn nhất là luôn sử dụng các nguồn tài nguyên có bản quyền rõ ràng.',
      },
    ],
  },
];
