import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface AdvancedCreativeLesson extends BaseLessonData {
  creativeCategory: 'design' | 'video' | 'audio' | 'writing' | 'photography' | 'animation';
  skillLevel: 'Intermediate' | 'Advanced' | 'Expert';
  softwareTools: string[];
  vietnameseCreativeIndustry: string[];
  portfolioRequirements: string[];
  freelancingOpportunities: string[];
}

export const advancedCreativeSkillsModuleData: ModuleData = {
  id: K2Module.AdvancedCreativeSkills,
  title: 'Kỹ năng Sáng tạo Chuyên sâu',
  subtitle: 'Nâng tầm sự nghiệp trong ngành công nghiệp sáng tạo Việt Nam',
  description:
    'Chương trình đào tạo chuyên sâu dành cho các nhà sáng tạo muốn nâng cao kỹ năng và phát triển sự nghiệp trong các lĩnh vực Thiết kế đồ họa, Sản xuất Video, Âm thanh, Viết lách và Nhiếp ảnh. Khóa học tập trung vào các kỹ thuật nâng cao, quy trình làm việc chuyên nghiệp và chiến lược kinh doanh trong bối cảnh thị trường sáng tạo năng động của Việt Nam.',
  category: 'creative-professional',
  icon: '🎨',
  color: 'from-purple-500 to-pink-500',
  totalDuration: '40-50 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '40-50 giờ',
  href: '/learning/advanced-creative-skills',
  features: [
    'Làm chủ các công cụ và kỹ thuật chuyên nghiệp.',
    'Xây dựng portfolio ấn tượng và chuyên nghiệp.',
    'Hiểu biết sâu sắc về thị trường sáng tạo Việt Nam.',
    'Phát triển kỹ năng kinh doanh và freelancing.',
  ],
  tags: ['creative skills', 'design', 'video', 'audio', 'writing', 'photography', 'freelancing'],
  prerequisites: [
    'Có kinh nghiệm cơ bản trong ít nhất một lĩnh vực sáng tạo.',
    'Đam mê và mong muốn phát triển sự nghiệp chuyên nghiệp.',
    'Kỹ năng tự học và quản lý thời gian.',
  ],
};

export const advancedCreativeLessons: AdvancedCreativeLesson[] = [
  {
    id: 'professional-graphic-design',
    title: 'Professional Graphic Design & Brand Identity',
    description:
      'Master advanced graphic design principles, brand identity development, và professional design workflow using industry-standard tools for Vietnamese creative market.',
    duration: '300 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=J_YmhVzOkEU', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    creativeCategory: 'design',
    skillLevel: 'Advanced',
    softwareTools: ['Adobe Creative Suite (Photoshop, Illustrator, InDesign)', 'Figma', 'Sketch', 'Canva Pro'],
    objectives: [
      'Develop advanced typography và color theory expertise',
      'Create comprehensive brand identity systems',
      'Master print design và preparation for production',
      'Build professional design portfolio',
      'Understand client communication và project management',
      'Navigate Vietnamese design industry và cultural aesthetics',
    ],
    prerequisites: [
      'Basic graphic design knowledge',
      'Familiarity với design software (Photoshop/Illustrator)',
      'Understanding của design principles',
    ],
    vietnameseCreativeIndustry: [
      'Growing demand for brand identity in Vietnamese startups',
      'E-commerce design needs for platforms like Shopee, Tiki',
      'Traditional vs modern design balance in Vietnamese culture',
      'Local printing industry standards và requirements',
      'Social media design trends in Vietnamese market',
    ],
    portfolioRequirements: [
      '5-10 comprehensive brand identity projects',
      'Print design examples (business cards, brochures, packaging)',
      'Digital design portfolio (social media, web graphics)',
      'Logo design process documentation',
      'Client testimonials và case studies',
    ],
    freelancingOpportunities: [
      'Brand identity design for Vietnamese SMEs',
      'E-commerce product design và photography',
      'Social media content creation for businesses',
      'Print design for local businesses và events',
      'Wedding và event design services',
    ],
    exercises: [
      {
        title: 'Vietnamese Restaurant Brand Identity System',
        description: 'Create complete brand identity for traditional Vietnamese restaurant chain',
        difficulty: 'Nâng cao',
        materials: ['Adobe Creative Suite', 'Brand strategy template', 'Color palette tools', 'Typography resources'],
        procedure: [
          'Conduct brand research và competitive analysis',
          'Develop brand strategy và positioning',
          'Create logo design với multiple variations',
          'Design comprehensive brand guidelines document',
          'Apply branding to restaurant materials (menu, signage, packaging)',
          'Create digital brand assets for social media',
          'Present final brand system với rationale',
        ],
        expectedResults: 'Complete brand identity system ready for implementation across all touchpoints',
        solution: 'Professional brand identity package với cultural sensitivity và modern appeal',
      },
      {
        title: 'Vietnamese Fashion Brand Packaging Design',
        description: 'Design sustainable packaging system cho Vietnamese fashion startup',
        difficulty: 'Nâng cao',
        materials: ['Packaging design software', 'Sustainability guidelines', 'Print specifications'],
        procedure: [
          'Research sustainable packaging trends in Vietnam',
          'Design packaging structure với unboxing experience',
          'Create packaging graphics với brand consistency',
          'Develop packaging size variations for different products',
          'Prepare print-ready files với local printing specs',
          'Test packaging prototypes với user feedback',
        ],
        expectedResults: 'Sustainable packaging system với premium unboxing experience',
      },
    ],
    realWorldApplications: [
      'Brand identity development for Vietnamese businesses',
      'Marketing material design for local companies',
      'Event và wedding design services',
      'Social media content creation',
      'Print design cho traditional Vietnamese businesses',
    ],
    caseStudies: [
      {
        title: 'Saigon Co.op Rebranding Project',
        organization: 'Saigon Co.op',
        problem: 'Modernize brand identity while maintaining Vietnamese cultural connection',
        solution: 'Comprehensive rebrand với traditional elements và contemporary design',
        impact: 'Increased brand recognition by 40%, improved customer perception',
        innovations: ['Cultural motif integration', 'Modern Vietnamese typography', 'Sustainable packaging design'],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Design Inspiration Gallery',
        url: 'https://www.behance.net/search/projects/vietnamese%20design',
        type: 'Inspiration',
      },
      {
        title: 'Adobe Creative Suite Tutorials',
        url: 'https://helpx.adobe.com/support.html',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Thiết kế đồ họa và Bản sắc thương hiệu tại Việt Nam',
      content: [
        'Nhu cầu xây dựng bản sắc thương hiệu chuyên nghiệp đang bùng nổ cùng với làn sóng khởi nghiệp tại Việt Nam.',
        'Các nhà thiết kế cần cân bằng giữa thẩm mỹ hiện đại và các yếu tố văn hóa truyền thống (như họa tiết trống đồng, hoa sen) để tạo ra sản phẩm phù hợp với thị trường nội địa.',
        'Hiểu biết về ngành công nghiệp in ấn và sản xuất bao bì tại Việt Nam là một lợi thế lớn để đưa thiết kế từ ý tưởng đến sản phẩm thực tế.',
      ],
    },
    careerConnect: {
      name: 'Tôn Thất An',
      title: 'Giám đốc Sáng tạo',
      company: 'Rice Creative',
      imageUrl: 'https://i.pravatar.cc/150?u=tonthatan',
      quote:
        'Thiết kế tốt không chỉ đẹp, nó phải kể được một câu chuyện. Tại Việt Nam, chúng ta có vô vàn câu chuyện văn hóa để kể qua từng sản phẩm thiết kế.',
    },
    quizzes: [
      {
        question:
          'Trong thiết kế bộ nhận diện thương hiệu, "Brand Guidelines" (bộ quy chuẩn thương hiệu) dùng để làm gì?',
        options: [
          'Chỉ để trình bày với khách hàng',
          'Đảm bảo tính nhất quán của thương hiệu trên mọi ấn phẩm',
          'Là một file chứa tất cả các logo',
          'Để đăng ký bản quyền thương hiệu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Brand Guidelines là tài liệu cốt lõi, hướng dẫn cách sử dụng các yếu tố thương hiệu (logo, màu sắc, font chữ) một cách nhất quán, giúp xây dựng hình ảnh chuyên nghiệp và dễ nhận biết.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt cơ bản giữa đồ họa vector và raster là gì?',
        answer:
          'Đồ họa Raster (như ảnh JPEG, PNG) được tạo thành từ các pixel, khi phóng to sẽ bị vỡ hình. Đồ họa Vector (như file AI, SVG) được tạo từ các phương trình toán học, có thể phóng to vô hạn mà không mất chất lượng. Logo và các biểu tượng thường được thiết kế dưới dạng vector.',
      },
      {
        question: 'Tại sao việc hiểu đối tượng mục tiêu lại quan trọng trong thiết kế thương hiệu?',
        answer:
          'Hiểu đối tượng mục tiêu giúp nhà thiết kế lựa chọn màu sắc, font chữ, và phong cách hình ảnh phù hợp, tạo ra một bản sắc thương hiệu có thể kết nối và giao tiếp hiệu quả với nhóm khách hàng mà doanh nghiệp muốn hướng tới.',
      },
    ],
  },
  {
    id: 'video-production-editing',
    title: 'Video Production & Post-Production Mastery',
    description:
      'Advanced video production techniques, cinematic storytelling, và professional editing workflow cho content creators và businesses trong Vietnamese market.',
    duration: '280 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Mmbn2FyBTVg', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop',
    creativeCategory: 'video',
    skillLevel: 'Advanced',
    softwareTools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'OBS Studio'],
    objectives: [
      'Master professional video production workflow',
      'Create cinematic content với advanced camera techniques',
      'Develop advanced post-production skills',
      'Understand storytelling for Vietnamese audiences',
      'Build video production business in Vietnamese market',
      'Create content for multiple platforms (YouTube, TikTok, Facebook)',
    ],
    prerequisites: ['Basic video editing experience', 'Understanding của camera basics', 'Content creation interest'],
    vietnameseCreativeIndustry: [
      'Rapid growth of video content consumption in Vietnam',
      'Rising demand for corporate video production',
      'TikTok và short-form content popularity',
      'Wedding và event videography market',
      'YouTube creator economy opportunities',
    ],
    portfolioRequirements: [
      'Demo reel showcasing various video styles',
      'Client testimonial videos',
      'Social media content examples',
      'Corporate video samples',
      'Creative storytelling projects',
    ],
    freelancingOpportunities: [
      'Corporate video production for Vietnamese companies',
      'Wedding và event videography',
      'Social media content creation',
      'YouTube channel management và editing',
      'Product video production for e-commerce',
    ],
    exercises: [
      {
        title: 'Vietnamese Tourism Promotional Video',
        description: 'Create cinematic promotional video for Vietnamese tourist destination',
        difficulty: 'Nâng cao',
        materials: ['Professional camera equipment', 'Drone (optional)', 'Adobe Premiere Pro', 'Color grading tools'],
        procedure: [
          'Research destination và develop creative concept',
          'Plan shooting schedule với optimal lighting conditions',
          'Capture establishing shots, details, và people interactions',
          'Record natural sound và ambient audio',
          'Edit footage với professional pacing và transitions',
          'Apply color grading để enhance visual appeal',
          'Add music và sound design',
          'Export for multiple platforms (4K, 1080p, mobile)',
        ],
        expectedResults: 'Professional tourism video suitable for marketing campaigns',
        solution: 'Cinematic video với Vietnamese cultural authenticity và international appeal',
      },
    ],
    realWorldApplications: [
      'Corporate video production và marketing',
      'Wedding và event videography services',
      'YouTube content creation và monetization',
      'Social media marketing videos',
      'Documentary và storytelling projects',
    ],
    caseStudies: [
      {
        title: 'Vinhomes Smart City Marketing Campaign',
        organization: 'Vingroup',
        problem: 'Create compelling video content for luxury real estate project',
        solution: 'High-end cinematic video series showcasing lifestyle và amenities',
        impact: '50% increase in property inquiries, viral social media engagement',
        innovations: ['Drone cinematography', '360-degree virtual tours', 'Lifestyle storytelling approach'],
      },
    ],
    vietnamContext: {
      title: 'Sản xuất Video trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Sự thống trị của các nền tảng như YouTube, Facebook và đặc biệt là TikTok đã tạo ra một "cơn khát" nội dung video khổng lồ tại Việt Nam.',
        'Các thương hiệu Việt Nam ngày càng đầu tư mạnh vào video marketing, từ các TVC quảng cáo đến các video review sản phẩm, nội dung hướng dẫn.',
        'Nghề "Creator" (nhà sáng tạo nội dung) đang trở thành một lựa chọn nghề nghiệp hấp dẫn cho giới trẻ, với nhiều cơ hội kiếm tiền từ quảng cáo, tài trợ.',
      ],
    },
    careerConnect: {
      name: 'Helly Tống',
      title: 'Người mẫu, Doanh nhân & Nhà sáng tạo nội dung',
      company: 'The Yên Concept',
      imageUrl: 'https://i.pravatar.cc/150?u=hellytong',
      quote:
        'Video là ngôn ngữ mạnh mẽ nhất để kết nối cảm xúc. Một video hay có thể truyền tải thông điệp của thương hiệu và chạm đến trái tim của hàng triệu người xem.',
    },
    quizzes: [
      {
        question: 'Trong sản xuất video, "B-roll" là gì?',
        options: [
          'Cảnh quay chính của nhân vật',
          'Các cảnh quay phụ để minh họa, làm phong phú thêm cho câu chuyện',
          'Bản nháp đầu tiên của video',
          'Âm thanh nền của video',
        ],
        correctAnswerIndex: 1,
        explanation:
          'B-roll là những cảnh quay bổ sung, không phải là cảnh quay chính (A-roll). Nó giúp video trở nên sinh động hơn, che đi các lỗi cắt ghép và cung cấp thêm ngữ cảnh cho người xem.',
      },
    ],
    faqs: [
      {
        question: 'Quy tắc 180 độ trong quay phim là gì?',
        answer:
          'Quy tắc 180 độ là một nguyên tắc cơ bản trong điện ảnh. Nó quy định rằng máy quay nên được giữ ở một phía của một đường tưởng tượng giữa hai nhân vật đang nói chuyện. Việc tuân thủ quy tắc này giúp duy trì phương hướng và không gian nhất quán, tránh làm người xem bối rối.',
      },
      {
        question: 'Tại sao thiết kế âm thanh (sound design) lại quan trọng như hình ảnh trong video?',
        answer:
          'Âm thanh là một nửa trải nghiệm của video. Thiết kế âm thanh tốt, bao gồm nhạc nền, hiệu ứng âm thanh (SFX), và giọng nói rõ ràng, có thể tạo ra cảm xúc, dẫn dắt sự chú ý, và làm cho câu chuyện trở nên sống động và chân thực hơn rất nhiều.',
      },
    ],
  },
  {
    id: 'audio-production-podcasting',
    title: 'Audio Production & Podcasting Excellence',
    description:
      'Professional audio production, podcast creation, và audio branding for Vietnamese content creators và businesses trong growing audio market.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=qonbJHkxH8w', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&h=600&fit=crop',
    creativeCategory: 'audio',
    skillLevel: 'Intermediate',
    softwareTools: ['Audacity', 'Adobe Audition', 'Pro Tools', 'Logic Pro X', 'Hindenburg Pro'],
    objectives: [
      'Master professional audio recording techniques',
      'Create engaging podcast content for Vietnamese audiences',
      'Understand audio post-production workflow',
      'Develop audio branding strategies',
      'Build sustainable podcasting business model',
      'Navigate Vietnamese podcasting landscape',
    ],
    prerequisites: ['Basic understanding của audio concepts', 'Interest in content creation', 'Communication skills'],
    vietnameseCreativeIndustry: [
      'Emerging podcasting market in Vietnam',
      'Corporate audio branding opportunities',
      'Voice-over market for Vietnamese content',
      'Audio content for e-learning platforms',
      'Radio và streaming service growth',
    ],
    portfolioRequirements: [
      'Demo reel của various audio styles',
      'Podcast episode samples',
      'Voice-over work examples',
      'Audio branding projects',
      'Client testimonials',
    ],
    freelancingOpportunities: [
      'Podcast production services',
      'Voice-over work for Vietnamese content',
      'Audio editing for content creators',
      'Corporate audio branding projects',
      'E-learning narration services',
    ],
    exercises: [
      {
        title: 'Vietnamese Business Podcast Series',
        description: 'Create professional podcast series featuring Vietnamese entrepreneurs',
        difficulty: 'Nâng cao',
        materials: ['Professional microphones', 'Audio interface', 'Audition/Logic Pro', 'Podcast hosting platform'],
        procedure: [
          'Develop podcast concept và target audience',
          'Design podcast branding (logo, intro music, graphics)',
          'Set up professional recording environment',
          'Conduct và record interviews với entrepreneurs',
          'Edit episodes với professional audio quality',
          'Create show notes và episode transcriptions',
          'Distribute to major podcast platforms',
          'Develop marketing strategy for audience growth',
        ],
        expectedResults: 'Professional podcast series với consistent quality và growing audience',
        solution: 'Complete podcast production workflow với sustainable content creation process',
      },
    ],
    realWorldApplications: [
      'Podcast creation cho businesses và personal brands',
      'Voice-over services for Vietnamese content',
      'Audio editing for content creators',
      'Corporate audio branding projects',
      'E-learning và educational content narration',
    ],
    vietnamContext: {
      title: 'Thị trường Âm thanh và Podcasting tại Việt Nam',
      content: [
        'Thị trường podcast tại Việt Nam đang trong giai đoạn đầu phát triển nhưng có tiềm năng rất lớn, đặc biệt là các nội dung về phát triển bản thân, kinh doanh và văn hóa.',
        'Các nền tảng như Spotify, Apple Podcasts và ứng dụng nội địa Voiz FM đang tích cực đầu tư vào nội dung podcast tiếng Việt.',
        'Nhu cầu về giọng đọc quảng cáo (voice-over) và lồng tiếng cho video, game, sách nói cũng đang tăng cao, tạo cơ hội cho những người có chất giọng tốt và kỹ năng diễn xuất.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hữu Trí',
      title: 'Host',
      company: 'The Present Writer Podcast',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenhuutri',
      quote:
        'Âm thanh có một sức mạnh đặc biệt: nó tạo ra sự thân mật. Khi bạn nghe một podcast, bạn cảm thấy như đang có một cuộc trò chuyện riêng tư với người nói. Đó là chìa khóa để xây dựng một cộng đồng trung thành.',
    },
    quizzes: [
      {
        question: 'Trong sản xuất âm thanh, "Normalization" là quá trình gì?',
        options: [
          'Loại bỏ tạp âm',
          'Tăng hoặc giảm âm lượng của toàn bộ file âm thanh đến một mức nhất định',
          'Thêm hiệu ứng vang (reverb)',
          'Cắt bỏ những đoạn im lặng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Normalization điều chỉnh âm lượng đỉnh (peak) hoặc âm lượng trung bình (RMS) của một file audio lên một mức tiêu chuẩn, giúp các file âm thanh khác nhau có độ lớn đồng đều hơn khi phát.',
      },
    ],
    faqs: [
      {
        question: 'Mức âm lượng lý tưởng cho một podcast là bao nhiêu?',
        answer:
          'Tiêu chuẩn ngành công nghiệp cho podcast là khoảng -16 LUFS (Loudness Units Full Scale) cho âm thanh stereo và -19 LUFS cho mono. Việc duy trì mức âm lượng này giúp người nghe có trải nghiệm đồng nhất trên các nền tảng và thiết bị khác nhau mà không cần phải liên tục điều chỉnh âm lượng.',
      },
      {
        question: 'Sự khác biệt giữa micro dynamic và condenser là gì?',
        answer:
          'Micro Dynamic bền hơn và ít nhạy cảm với âm thanh xung quanh, rất phù hợp cho việc thu âm trong môi trường không được xử lý âm học tốt hoặc thu âm nhiều người. Micro Condenser nhạy hơn, thu được chi tiết âm thanh tốt hơn, lý tưởng cho việc thu âm trong studio yên tĩnh để có chất giọng trong và rõ.',
      },
    ],
  },
  {
    id: 'content-writing-copywriting',
    title: 'Content Writing & Copywriting Mastery',
    description:
      'Advanced content creation, copywriting techniques, và content strategy development for Vietnamese digital marketing và brand communication.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=mcnhDvavxzw', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop',
    creativeCategory: 'writing',
    skillLevel: 'Intermediate',
    softwareTools: ['Google Docs', 'Grammarly', 'Hemingway Editor', 'SEO tools', 'Content management systems'],
    objectives: [
      'Develop persuasive copywriting skills for Vietnamese audiences',
      'Create comprehensive content strategies',
      'Master SEO content writing techniques',
      'Understand Vietnamese consumer psychology in writing',
      'Build content writing business model',
      'Create content for multiple digital platforms',
    ],
    prerequisites: [
      'Strong Vietnamese writing skills',
      'Basic marketing understanding',
      'Interest in digital communication',
    ],
    vietnameseCreativeIndustry: [
      'High demand for Vietnamese content creators',
      'E-commerce copywriting opportunities',
      'Social media content creation needs',
      'SEO content demand for Vietnamese websites',
      'Corporate communication writing services',
    ],
    portfolioRequirements: [
      'Copywriting samples for different industries',
      'Blog post examples với SEO optimization',
      'Social media content portfolios',
      'Email marketing campaign examples',
      'Client success stories và metrics',
    ],
    freelancingOpportunities: [
      'Copywriting for Vietnamese e-commerce businesses',
      'Content creation for social media agencies',
      'Blog writing cho Vietnamese websites',
      'Email marketing campaign development',
      'Corporate communication writing',
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Brand Content Strategy',
        description: 'Develop comprehensive content strategy cho Vietnamese fashion brand',
        difficulty: 'Nâng cao',
        materials: [
          'Content planning templates',
          'SEO keyword tools',
          'Analytics platforms',
          'Social media schedulers',
        ],
        procedure: [
          'Analyze target audience và competitor content',
          'Develop brand voice và messaging framework',
          'Create content calendar với seasonal campaigns',
          'Write product descriptions với SEO optimization',
          'Develop social media content templates',
          'Create email marketing sequences',
          'Measure content performance với analytics',
          'Iterate strategy based on performance data',
        ],
        expectedResults: 'Complete content strategy với measurable engagement improvements',
        solution: 'Data-driven content approach với authentic Vietnamese brand voice',
      },
    ],
    realWorldApplications: [
      'Digital marketing content for Vietnamese businesses',
      'Social media management và content creation',
      'SEO content writing cho websites',
      'Email marketing campaign development',
      'Corporate communication và PR writing',
    ],
    vietnamContext: {
      title: 'Sáng tạo nội dung và Copywriting cho thị trường Việt',
      content: [
        'Content "bắt trend" trên mạng xã hội là một kỹ năng quan trọng, nhưng cần phải phù hợp với hình ảnh thương hiệu.',
        'Viết nội dung chuẩn SEO cho tiếng Việt đòi hỏi sự am hiểu về cách người Việt tìm kiếm thông tin, bao gồm cả các từ địa phương và tiếng lóng.',
        'Người tiêu dùng Việt Nam thường bị ảnh hưởng bởi các câu chuyện cảm xúc và đánh giá từ cộng đồng (social proof), đây là yếu tố quan trọng trong copywriting.',
      ],
    },
    careerConnect: {
      name: 'Linh Phan',
      title: 'Tác giả & Chuyên gia Xây dựng thương hiệu cá nhân',
      company: 'The Present Writer',
      imageUrl: 'https://i.pravatar.cc/150?u=linhphan',
      quote:
        'Con chữ là công cụ để xây dựng niềm tin. Trong một thế giới đầy tiếng ồn, một bài viết chân thành, sâu sắc và giải quyết được vấn đề của độc giả sẽ luôn có giá trị.',
    },
    quizzes: [
      {
        question: 'Trong copywriting, "Call to Action" (CTA) là gì?',
        options: [
          'Tiêu đề của bài viết',
          'Đoạn mô tả sản phẩm',
          'Lời kêu gọi, hướng dẫn người đọc thực hiện một hành động cụ thể',
          'Tên của thương hiệu',
        ],
        correctAnswerIndex: 2,
        explanation:
          'CTA là một yếu tố cực kỳ quan trọng, nó chỉ cho người đọc biết họ cần làm gì tiếp theo, ví dụ: "Mua ngay", "Đăng ký tư vấn", "Tải tài liệu". Một CTA rõ ràng và hấp dẫn sẽ quyết định hiệu quả của một bài quảng cáo.',
      },
    ],
    faqs: [
      {
        question: 'Mô hình AIDA trong copywriting là gì?',
        answer:
          'AIDA là một công thức kinh điển trong copywriting, viết tắt của Attention (Gây chú ý), Interest (Tạo sự quan tâm), Desire (Khơi gợi ham muốn), và Action (Kêu gọi hành động). Nó là một cấu trúc hiệu quả để dẫn dắt người đọc từ lúc họ chú ý đến quảng cáo cho đến khi thực hiện hành động mong muốn.',
      },
      {
        question: 'Làm thế nào để viết một tiêu đề hấp dẫn?',
        answer:
          'Một tiêu đề tốt thường tập trung vào lợi ích cho người đọc, sử dụng con số cụ thể, tạo sự tò mò, hoặc đặt một câu hỏi khơi gợi. Ví dụ: "5 Cách Đơn Giản Để Tăng Gấp Đôi Năng Suất" hiệu quả hơn nhiều so với "Cách Để Năng Suất Hơn".',
      },
    ],
  },
  {
    id: 'photography-visual-storytelling',
    title: 'Photography & Visual Storytelling',
    description:
      'Advanced photography techniques, visual storytelling, và commercial photography for Vietnamese creative market và business applications.',
    duration: '260 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zyIcVvmxUMU', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&h=600&fit=crop',
    creativeCategory: 'photography',
    skillLevel: 'Intermediate',
    softwareTools: ['Adobe Lightroom', 'Adobe Photoshop', 'Capture One', 'Professional cameras', 'Lighting equipment'],
    objectives: [
      'Master advanced photography techniques và composition',
      'Develop commercial photography skills',
      'Create visual storytelling projects',
      'Build photography business in Vietnamese market',
      'Understand client photography requirements',
      'Master post-processing workflow',
    ],
    prerequisites: [
      'Basic photography knowledge',
      'Understanding của camera controls',
      'Photo editing software familiarity',
    ],
    vietnameseCreativeIndustry: [
      'Growing demand for product photography in e-commerce',
      'Wedding photography market expansion',
      'Corporate photography services needed',
      'Food photography for restaurant industry',
      'Real estate photography opportunities',
    ],
    portfolioRequirements: [
      'Diverse photography portfolio showcasing various styles',
      'Commercial work examples',
      'Client testimonials và case studies',
      'Before/after editing examples',
      'Specialized niche demonstrations',
    ],
    freelancingOpportunities: [
      'E-commerce product photography',
      'Wedding và event photography',
      'Corporate headshot và team photography',
      'Food photography for restaurants',
      'Real estate photography services',
    ],
    exercises: [
      {
        title: 'Vietnamese Street Food Photography Project',
        description: 'Create compelling visual story about Vietnamese street food culture',
        difficulty: 'Trung bình',
        materials: ['Professional camera', 'Various lenses', 'Portable lighting', 'Adobe Lightroom'],
        procedure: [
          'Research Vietnamese street food culture và locations',
          'Plan shooting schedule với optimal lighting conditions',
          'Capture environmental portraits of vendors',
          'Photograph food với appealing composition',
          'Document preparation process và customer interactions',
          'Edit photos với consistent style và color grading',
          'Create photo essay layout',
          'Present final project với storytelling narrative',
        ],
        expectedResults: 'Professional photo essay showcasing Vietnamese culinary culture',
        solution: 'Compelling visual narrative với cultural authenticity và artistic excellence',
      },
    ],
    realWorldApplications: [
      'Commercial photography for Vietnamese businesses',
      'Wedding và event photography services',
      'Product photography for e-commerce platforms',
      'Food photography cho restaurant industry',
      'Corporate photography và branding projects',
    ],
    vietnamContext: {
      title: 'Nhiếp ảnh và Kể chuyện bằng hình ảnh tại Việt Nam',
      content: [
        'Thị trường e-commerce phát triển mạnh mẽ kéo theo nhu cầu lớn về chụp ảnh sản phẩm chuyên nghiệp.',
        'Nhiếp ảnh ẩm thực là một lĩnh vực rất tiềm năng, khi các nhà hàng, quán cà phê ngày càng chú trọng vào hình ảnh trên mạng xã hội và các ứng dụng giao đồ ăn.',
        'Kể chuyện bằng hình ảnh về văn hóa, con người và danh lam thắng cảnh Việt Nam luôn là một chủ đề hấp dẫn, có thể thu hút cả khách hàng trong nước và quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Trần Tuấn Việt',
      title: 'Nhiếp ảnh gia',
      company: 'National Geographic',
      imageUrl: 'https://i.pravatar.cc/150?u=trantuanviet',
      quote:
        'Một bức ảnh không chỉ ghi lại một khoảnh khắc, nó phải kể một câu chuyện. Hãy tìm kiếm những câu chuyện ẩn sau vẻ đẹp của Việt Nam và kể lại nó qua ống kính của bạn.',
    },
    quizzes: [
      {
        question: 'Trong nhiếp ảnh, "Tam giác phơi sáng" (Exposure Triangle) bao gồm ba yếu tố nào?',
        options: [
          'Tốc độ màn trập, Tiêu cự, ISO',
          'Khẩu độ, Tốc độ màn trập, ISO',
          'Cân bằng trắng, Khẩu độ, Tiêu cự',
          'ISO, Cân bằng trắng, Tốc độ màn trập',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tam giác phơi sáng là khái niệm cơ bản nhất trong nhiếp ảnh, bao gồm Khẩu độ (Aperture), Tốc độ màn trập (Shutter Speed) và ISO. Việc hiểu và cân bằng ba yếu tố này là chìa khóa để kiểm soát độ sáng của bức ảnh.',
      },
    ],
    faqs: [
      {
        question: 'Quy tắc một phần ba (Rule of Thirds) trong nhiếp ảnh là gì?',
        answer:
          'Đó là một nguyên tắc bố cục cơ bản. Bạn chia khung hình thành 9 phần bằng nhau bởi hai đường ngang và hai đường dọc. Đặt các yếu tố quan trọng của cảnh dọc theo các đường này hoặc tại giao điểm của chúng sẽ tạo ra một bố cục cân bằng và hấp dẫn hơn về mặt thị giác.',
      },
      {
        question: 'Sự khác biệt giữa chụp ảnh định dạng RAW và JPEG là gì?',
        answer:
          'JPEG là một file ảnh đã được nén và xử lý bởi máy ảnh, sẵn sàng để sử dụng ngay. RAW là một file chứa toàn bộ dữ liệu chưa qua xử lý từ cảm biến của máy ảnh. Chụp RAW cho phép bạn có nhiều sự linh hoạt hơn trong quá trình hậu kỳ (chỉnh sửa màu sắc, độ sáng,...) nhưng dung lượng file lớn hơn nhiều.',
      },
    ],
  },
];

export default advancedCreativeLessons;
