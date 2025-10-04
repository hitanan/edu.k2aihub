import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const lessons: BaseLessonData[] = [
  {
    id: 'digital-art-fundamentals',
    title: 'Cơ Bản Nghệ Thuật Số',
    description: 'Khám phá thế giới digital art, từ digital painting đến 3D modeling và animation',
    duration: '100 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=OzemCeywKOM',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Tôi có cần phải biết vẽ tay giỏi để học nghệ thuật số không?',
        answer:
          'Biết vẽ tay là một lợi thế lớn, nhưng không phải là điều kiện bắt buộc. Nhiều công cụ kỹ thuật số có thể hỗ trợ bạn, và quan trọng hơn là tư duy về bố cục, màu sắc và ánh sáng. Tuy nhiên, việc luyện tập kỹ năng vẽ cơ bản sẽ giúp bạn tiến bộ nhanh hơn rất nhiều.',
      },
      {
        question: 'Sự khác biệt chính giữa Photoshop và Illustrator là gì?',
        answer:
          'Photoshop làm việc với ảnh raster (pixel), lý tưởng cho digital painting và chỉnh sửa ảnh. Illustrator làm việc với ảnh vector (đối tượng toán học), lý tưởng cho logo, icon và các thiết kế cần co giãn mà không bị vỡ hình.',
      },
      {
        question: 'Tôi nên bắt đầu với bảng vẽ (drawing tablet) loại nào?',
        answer:
          'Đối với người mới bắt đầu, một chiếc bảng vẽ không có màn hình như Wacom Intuos hoặc Huion Inspiroy là một lựa chọn hợp lý về chi phí và rất tốt để học những điều cơ bản. Khi bạn đã chuyên nghiệp hơn, có thể nâng cấp lên bảng vẽ có màn hình (display tablet) để có trải nghiệm vẽ trực tiếp hơn.',
      },
      {
        question: 'Làm thế nào để tìm phong cách nghệ thuật của riêng mình?',
        answer:
          'Đừng quá lo lắng về việc tìm phong cách ngay lập tức. Hãy bắt đầu bằng cách học hỏi và thử nghiệm phong cách của các nghệ sĩ bạn ngưỡng mộ. Dần dần, qua quá trình thực hành và kết hợp những gì bạn thích, phong cách độc đáo của riêng bạn sẽ tự nhiên hình thành.',
      },
      {
        question: 'Độ phân giải (resolution) và DPI/PPI quan trọng như thế nào trong nghệ thuật số?',
        answer:
          'Rất quan trọng. Đối với các tác phẩm để xem trên màn hình (web, social media), độ phân giải 1920x1080 pixels và 72 PPI là đủ. Đối với in ấn, bạn cần độ phân giải cao hơn nhiều (ví dụ: 3000x4000 pixels) và tối thiểu 300 DPI để đảm bảo hình ảnh sắc nét, không bị vỡ.',
      },
      {
        question: 'Layer (lớp) trong Photoshop hoạt động như thế nào?',
        answer:
          'Hãy tưởng tượng các layer như những tấm kính trong suốt xếp chồng lên nhau. Bạn có thể vẽ trên mỗi tấm kính mà không ảnh hưởng đến các tấm khác. Điều này cho phép bạn dễ dàng chỉnh sửa, di chuyển, hoặc thay đổi các phần riêng biệt của tác phẩm một cách linh hoạt.',
      },
      {
        question: 'Sự khác biệt giữa digital painting và photo manipulation là gì?',
        answer:
          'Digital painting là quá trình vẽ một tác phẩm từ đầu bằng các công cụ kỹ thuật số, tương tự như vẽ trên canvas. Photo manipulation (thao tác ảnh) là quá trình lấy các yếu tố từ nhiều bức ảnh có sẵn để cắt ghép, chỉnh sửa và tạo ra một tác phẩm mới.',
      },
      {
        question: 'Làm thế nào để phối màu đẹp hơn?',
        answer:
          'Hãy bắt đầu bằng việc học lý thuyết màu sắc cơ bản: màu bổ túc, màu tương đồng, màu bộ ba. Sử dụng các công cụ trực tuyến như Adobe Color để tạo các bảng màu hài hòa. Quan sát màu sắc từ thiên nhiên và các tác phẩm nghệ thuật bạn yêu thích cũng là một cách học hỏi tuyệt vời.',
      },
      {
        question: 'Tôi có thể bán các tác phẩm nghệ thuật số của mình ở đâu?',
        answer:
          'Có nhiều nền tảng để bán tác phẩm nghệ thuật số. Bạn có thể bán bản in trên các trang như Etsy, Redbubble. Bạn cũng có thể bán các file kỹ thuật số trên Creative Market. Gần đây, thị trường NFT (Non-Fungible Token) trên các sàn như OpenSea, Foundation cũng là một lựa chọn phổ biến.',
      },
      {
        question: 'Cần bao lâu để trở thành một nghệ sĩ kỹ thuật số giỏi?',
        answer:
          'Không có câu trả lời chính xác. Giống như bất kỳ kỹ năng nào, nó phụ thuộc vào thời gian và nỗ lực bạn đầu tư. Việc luyện tập hàng ngày, dù chỉ 30 phút, sẽ hiệu quả hơn nhiều so với việc chỉ vẽ một lần một tuần. Hãy kiên nhẫn và tận hưởng quá trình học hỏi.',
      },
    ],
  },
  {
    id: 'motion-graphics-animation',
    title: 'Motion Graphics & Animation',
    description: 'Tạo animated content cho social media, advertising, và storytelling using modern tools',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=5tQ0hf2SCeo',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Sự khác biệt giữa Motion Graphics và Animation truyền thống là gì?',
        answer:
          'Animation truyền thống thường tập trung vào việc kể một câu chuyện có nhân vật (ví dụ: phim hoạt hình Disney). Motion Graphics tập trung vào việc làm cho các đối tượng đồ họa (văn bản, logo, hình khối) chuyển động một cách hấp dẫn, thường dùng trong video giải thích, quảng cáo, hoặc giao diện người dùng.',
      },
      {
        question: 'Tôi có cần phải biết vẽ để làm Motion Graphics không?',
        answer:
          'Không nhất thiết. Nhiều tác phẩm motion graphics xuất sắc được tạo ra từ các hình khối cơ bản, văn bản và hình ảnh có sẵn. Kỹ năng quan trọng hơn là tư duy về nhịp điệu, thời gian (timing), và bố cục chuyển động. Tuy nhiên, biết vẽ sẽ là một lợi thế lớn.',
      },
      {
        question: 'Học After Effects có khó không?',
        answer:
          'After Effects là một phần mềm rất mạnh và có nhiều tính năng, vì vậy nó có thể gây choáng ngợp lúc đầu. Tuy nhiên, bạn có thể bắt đầu với những khái niệm cơ bản như keyframes, layers, và các hiệu ứng đơn giản. Có rất nhiều tài nguyên học tập trực tuyến miễn phí để bạn bắt đầu.',
      },
      {
        question: 'Làm thế nào để video motion graphics của tôi trông chuyên nghiệp hơn?',
        answer:
          'Hãy chú ý đến các nguyên tắc animation, đặc biệt là "easing" (làm cho chuyển động mượt mà, không bị đột ngột). Sử dụng một bảng màu nhất quán, chọn font chữ phù hợp, và đầu tư vào chất lượng âm thanh (nhạc nền và hiệu ứng âm thanh) sẽ nâng tầm sản phẩm của bạn một cách đáng kể.',
      },
      {
        question: '12 nguyên tắc animation là gì?',
        answer:
          'Đây là 12 nguyên tắc cơ bản do các nhà làm phim hoạt hình của Disney phát triển, bao gồm: Nén và giãn, Chuẩn bị hành động, Dàn cảnh, Vẽ thẳng và Vẽ tuần tự, Theo sau và Chồng lấp hành động, Tăng tốc và Giảm tốc, Chuyển động vòng cung, Hành động phụ, Thời gian, Cường điệu, Vẽ chắc chắn, và Hấp dẫn. Nắm vững chúng sẽ làm cho animation của bạn sống động hơn rất nhiều.',
      },
      {
        question: 'Kinetic Typography là gì?',
        answer:
          'Kinetic Typography (hay "chữ chuyển động") là một kỹ thuật motion graphics trong đó văn bản được làm cho chuyển động một cách sáng tạo để truyền tải cảm xúc hoặc ý tưởng. Nó không chỉ là làm cho chữ xuất hiện, mà là làm cho chúng "nhảy múa" theo nhạc hoặc lời nói.',
      },
      {
        question: 'Tôi có thể tìm nhạc và hiệu ứng âm thanh miễn phí cho video của mình ở đâu?',
        answer:
          'Có nhiều nguồn tài nguyên tốt. YouTube Audio Library cung cấp một kho nhạc và hiệu ứng âm thanh miễn phí bản quyền. Các trang web khác như Pixabay, Mixkit, và ZapSplat cũng cung cấp các tài sản âm thanh chất lượng cao mà bạn có thể sử dụng cho các dự án của mình.',
      },
      {
        question: 'Sự khác biệt giữa Composition và Project trong After Effects là gì?',
        answer:
          'Một Project (.aep file) là file chứa toàn bộ công việc của bạn, bao gồm tất cả các composition, footage, và tài sản khác. Một Composition (thường gọi là "comp") là một timeline riêng lẻ nơi bạn sắp xếp các layer và tạo ra animation. Bạn có thể có nhiều comp lồng vào nhau trong một project.',
      },
      {
        question: 'Tại sao cần phải tổ chức các file và layer một cách gọn gàng?',
        answer:
          'Các dự án motion graphics có thể trở nên rất phức tạp với hàng trăm layer. Việc đặt tên rõ ràng, sử dụng màu sắc để phân loại, và nhóm các layer liên quan vào các pre-composition sẽ giúp bạn quản lý dự án hiệu quả, dễ dàng chỉnh sửa và tránh được các lỗi không đáng có.',
      },
      {
        question: 'Render video là gì và làm thế nào để tối ưu hóa nó?',
        answer:
          'Render là quá trình After Effects tính toán và xuất tất cả các layer, hiệu ứng, và chuyển động của bạn thành một file video duy nhất. Để tối ưu, bạn có thể đóng các chương trình không cần thiết, sử dụng các định dạng nén hiệu quả như H.264, và sử dụng Adobe Media Encoder để render trong nền trong khi bạn vẫn có thể tiếp tục làm việc.',
      },
    ],
  },
  {
    id: 'generative-ai-art',
    title: 'Nghệ Thuật AI Tạo Sinh',
    description: 'Master AI art generation tools like Midjourney, DALL-E, và Stable Diffusion cho creative projects',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=SVcsDDABEkM',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'AI có "sáng tạo" thực sự không, hay nó chỉ sao chép?',
        answer:
          'Đây là một câu hỏi triết học. Các mô hình AI hiện tại không "sao chép" theo cách con người hiểu. Chúng học hỏi các mẫu, phong cách, và mối liên hệ từ một lượng dữ liệu khổng lồ, sau đó "tái tổ hợp" chúng để tạo ra một cái gì đó mới dựa trên yêu cầu của bạn. Nó giống như một người nghệ sĩ đã xem hàng triệu bức tranh và sau đó vẽ một bức tranh mới theo phong cách đã học.',
      },
      {
        question: 'Tôi có sở hữu bản quyền của hình ảnh do AI tạo ra không?',
        answer:
          'Luật bản quyền về AI art vẫn đang phát triển và khác nhau ở mỗi quốc gia. Tại Mỹ, các tác phẩm hoàn toàn do AI tạo ra không được bảo hộ bản quyền. Tuy nhiên, nếu có sự can thiệp và sáng tạo đáng kể của con người (ví dụ: chỉnh sửa, kết hợp nhiều hình ảnh), bạn có thể có quyền sở hữu. Các dịch vụ như Midjourney có các điều khoản sử dụng riêng về quyền sở hữu, bạn nên đọc kỹ.',
      },
      {
        question: 'Làm thế nào để tạo ra các nhân vật nhất quán qua nhiều hình ảnh khác nhau?',
        answer:
          'Đây là một trong những thách thức lớn nhất của AI art. Các kỹ thuật tiên tiến bao gồm việc sử dụng "seed" (một con số khởi tạo) giống nhau cho các lần tạo ảnh, và sử dụng các tham số như "--cref" (Character Reference) trong Midjourney để yêu cầu AI tham chiếu đến một hình ảnh nhân vật có sẵn.',
      },
      {
        question: 'AI có thay thế hoàn toàn các nghệ sĩ con người không?',
        answer:
          'Hầu hết các chuyên gia tin rằng AI sẽ trở thành một công cụ mạnh mẽ cho nghệ sĩ, chứ không thay thế họ. Nó giúp tăng tốc quá trình lên ý tưởng, thử nghiệm các phong cách khác nhau, và tự động hóa các công việc tốn thời gian. Vai trò của nghệ sĩ sẽ chuyển dịch sang việc định hướng sáng tạo, lựa chọn và tinh chỉnh kết quả do AI tạo ra.',
      },
      {
        question: '"Negative Prompt" là gì?',
        answer:
          'Negative Prompt là một câu lệnh bạn đưa cho AI để chỉ định những gì bạn KHÔNG muốn thấy trong hình ảnh. Ví dụ, bạn có thể thêm "-—no blurry, deformed hands" để yêu cầu AI tránh tạo ra các hình ảnh bị mờ hoặc có bàn tay bị biến dạng. Đây là một công cụ rất mạnh mẽ để kiểm soát kết quả.',
      },
      {
        question: 'Sự khác biệt giữa Midjourney và Stable Diffusion là gì?',
        answer:
          'Midjourney là một dịch vụ trả phí, dễ sử dụng thông qua Discord và nổi tiếng với việc tạo ra các hình ảnh có tính nghệ thuật cao. Stable Diffusion là một mô hình mã nguồn mở, miễn phí, có thể chạy trên máy tính cá nhân (nếu đủ mạnh) và cho phép tùy chỉnh sâu hơn thông qua các mô hình con (checkpoints) và LoRA.',
      },
      {
        question: 'LoRA trong Stable Diffusion là gì?',
        answer:
          'LoRA (Low-Rank Adaptation) là một kỹ thuật cho phép bạn "huấn luyện" thêm cho mô hình Stable Diffusion chính để nó có thể tạo ra một phong cách nghệ thuật, một nhân vật, hoặc một đối tượng cụ thể nào đó. Đây là một cách hiệu quả để tùy biến AI mà không cần phải huấn luyện lại toàn bộ mô hình lớn.',
      },
      {
        question: 'Làm thế nào để viết một prompt hiệu quả?',
        answer:
          'Một prompt tốt thường bao gồm các yếu tố: [Chủ thể] + [Mô tả chi tiết] + [Phong cách nghệ thuật] + [Thông số kỹ thuật]. Ví dụ: "A majestic Vietnamese dragon, made of jade and clouds, in the style of Studio Ghibli, cinematic lighting, 4K". Hãy càng cụ thể càng tốt.',
      },
      {
        question: '"Upscaling" một hình ảnh AI là gì?',
        answer:
          'Các mô hình AI thường tạo ra hình ảnh ở độ phân giải tương đối thấp. Upscaling là quá trình sử dụng các công cụ AI khác để tăng kích thước và độ phân giải của hình ảnh đó mà không làm mất chi tiết, giúp nó đủ chất lượng để in ấn hoặc sử dụng chuyên nghiệp.',
      },
      {
        question: 'Tôi có thể sử dụng AI để chỉnh sửa một phần của hình ảnh không?',
        answer:
          'Có, kỹ thuật này được gọi là "inpainting". Bạn có thể che đi một phần của hình ảnh và ra lệnh cho AI vẽ lại chỉ khu vực đó. Ví dụ, bạn có thể thay đổi khuôn mặt của một nhân vật hoặc thêm một đối tượng vào nền. Ngược lại, "outpainting" là kỹ thuật mở rộng khung hình ra ngoài hình ảnh gốc.',
      },
    ],
  },
  {
    id: 'immersive-media-production',
    title: 'Sản Xuất Media Nhập Vai',
    description: 'Create VR/AR content, 360° videos, và interactive experiences cho entertainment và education',
    duration: '130 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=4JVfa3SSDQU',
    imageUrl: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
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
          'Công nghệ nào cho phép hiển thị các đối tượng ảo trong môi trường thực tế thông qua điện thoại của người dùng?',
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
    faqs: [
      {
        question: 'Sự khác biệt chính giữa VR (Thực tế ảo) và AR (Thực tế tăng cường) là gì?',
        answer:
          'VR thay thế hoàn toàn môi trường của bạn bằng một thế giới ảo, bạn cần đeo một chiếc kính che kín mắt. AR thì ngược lại, nó "phủ" hoặc "thêm" các yếu-tố-ảo vào thế-giới-thực mà bạn đang thấy, thường là qua camera của điện thoại hoặc kính trong suốt.',
      },
      {
        question: 'Tôi có cần một máy tính rất mạnh để bắt đầu với VR/AR không?',
        answer:
          'Để phát triển (development) các ứng dụng VR/AR phức tạp, bạn cần một máy tính có card đồ họa mạnh. Tuy nhiên, để trải nghiệm, có những lựa chọn không cần máy tính như kính Oculus Quest (nay là Meta Quest), hoặc bạn có thể bắt đầu với AR ngay trên chiếc điện thoại thông minh của mình.',
      },
      {
        question: 'WebXR là gì và tại sao nó quan trọng?',
        answer:
          'WebXR là một chuẩn web cho phép tạo ra các trải nghiệm VR và AR chạy trực tiếp trên trình duyệt web, không cần cài đặt ứng dụng riêng. Điều này giúp việc tiếp cận nội dung VR/AR trở nên dễ dàng và nhanh chóng hơn rất nhiều.',
      },
      {
        question: 'Ngoài giải trí, VR/AR có những ứng dụng thực tế nào khác?',
        answer:
          'Rất nhiều! Trong y tế, VR được dùng để đào tạo phẫu thuật. Trong kiến trúc, nó giúp khách hàng "đi bộ" trong ngôi nhà chưa xây. Trong giáo dục, học sinh có thể "du hành" đến các di tích lịch sử. Trong công nghiệp, công nhân được đào tạo vận hành máy móc phức tạp trong môi trường an toàn.',
      },
      {
        question: '"Degrees of Freedom" (DoF) trong VR nghĩa là gì?',
        answer:
          'DoF mô tả khả năng di chuyển trong không gian ảo. 3DoF (3 bậc tự do) cho phép bạn nhìn xung quanh (xoay đầu), nhưng không thể di chuyển trong không gian. 6DoF (6 bậc tự do) cho phép bạn vừa xoay đầu vừa di chuyển tới, lui, qua lại, lên, xuống trong thế giới ảo, mang lại trải nghiệm nhập vai sâu sắc hơn.',
      },
      {
        question: 'Say chuyển động (motion sickness) trong VR là gì và làm thế nào để giảm thiểu nó?',
        answer:
          'Say chuyển động xảy ra khi có sự không đồng nhất giữa những gì mắt bạn thấy (bạn đang di chuyển trong game) và những gì cơ thể bạn cảm nhận (bạn đang đứng yên). Để giảm thiểu, các nhà phát triển sử dụng các kỹ thuật như di chuyển bằng "teleport", đảm bảo tốc độ khung hình (FPS) cao và ổn định, và tạo ra một "buồng lái" ảo.',
      },
      {
        question: 'Spatial Audio (Âm thanh không gian) là gì?',
        answer:
          'Spatial Audio làm cho âm thanh trong VR/AR có vẻ như phát ra từ một vị trí cụ thể trong không gian 3D. Nếu một vật thể ở bên trái bạn phát ra tiếng động, bạn sẽ nghe thấy nó từ tai trái. Điều này làm tăng đáng kể cảm giác chân thực và nhập vai.',
      },
      {
        question: 'Haptic feedback là gì?',
        answer:
          'Haptic feedback là việc sử dụng các rung động hoặc lực tác động để mô phỏng cảm giác chạm trong thế giới ảo. Ví dụ, bộ điều khiển của bạn có thể rung lên khi bạn chạm vào một vật thể hoặc khi bạn bắn một cây cung trong game. Nó giúp "đánh lừa" bộ não của bạn và tăng cường sự hiện diện.',
      },
      {
        question: 'Một "avatar" trong thế giới ảo là gì?',
        answer:
          'Avatar là hiện thân kỹ thuật số của bạn trong một môi trường ảo. Nó có thể là một hình ảnh đại diện 3D thực tế hoặc cách điệu. Việc có một avatar cho phép bạn tương tác với người khác và thể hiện bản thân trong không gian xã hội ảo.',
      },
      {
        question: 'Metaverse là gì?',
        answer:
          'Metaverse là một khái niệm về một không gian ảo 3D liên tục, được chia sẻ, nơi người dùng có thể tương tác với nhau và với các đối tượng kỹ thuật số thông qua avatar. Nó được hình dung như một phiên bản tiếp theo của Internet, nơi chúng ta không chỉ xem nội dung mà còn "sống" và "trải nghiệm" bên trong nó.',
      },
    ],
  },
  {
    id: 'creative-technology-business',
    title: 'Kinh Doanh Công Nghệ Sáng Tạo',
    description: 'Build sustainable creative businesses leveraging technology, IP protection, và market strategies',
    duration: '100 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=qulcqiWzx0M',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Làm thế nào để định giá cho sản phẩm/dịch vụ sáng tạo của mình?',
        answer:
          'Đây là một câu hỏi khó. Có nhiều cách tiếp cận: 1/ Định giá theo giờ: tính toán chi phí vận hành mỗi giờ và cộng thêm lợi nhuận. 2/ Định giá theo dự án: ước tính tổng thời gian và công sức cho toàn bộ dự án. 3/ Định giá dựa trên giá trị: xem xét giá trị và lợi ích mà sản phẩm của bạn mang lại cho khách hàng. Hãy nghiên cứu thị trường để xem các đối thủ cạnh tranh đang định giá như thế nào.',
      },
      {
        question: 'Là một freelancer, làm sao để tìm kiếm khách hàng đầu tiên?',
        answer:
          'Hãy bắt đầu với mạng lưới quan hệ của bạn: bạn bè, gia đình, đồng nghiệp cũ. Xây dựng một portfolio trực tuyến chuyên nghiệp trên các nền tảng như Behance, Dribbble. Tham gia các cộng đồng trực tuyến liên quan đến lĩnh vực của bạn. Đừng ngại làm một vài dự án nhỏ với giá ưu đãi hoặc thậm chí miễn phí để xây dựng portfolio và lấy kinh nghiệm.',
      },
      {
        question: 'Tôi có nên chuyên môn hóa vào một lĩnh vực hẹp không?',
        answer:
          'Khi mới bắt đầu, việc thử nghiệm nhiều lĩnh vực có thể giúp bạn khám phá ra thế mạnh của mình. Tuy nhiên, về lâu dài, việc chuyên môn hóa (ví dụ: chỉ thiết kế logo cho ngành F&B, hoặc chỉ làm animation cho các công ty công nghệ) thường giúp bạn trở thành chuyên gia trong lĩnh vực đó, dễ dàng định vị thương hiệu và thu hút đúng đối tượng khách hàng hơn.',
      },
      {
        question: 'Hợp đồng có thực sự cần thiết khi làm việc với khách hàng không?',
        answer:
          'CỰC KỲ CẦN THIẾT, ngay cả với những dự án nhỏ nhất. Một hợp đồng rõ ràng sẽ bảo vệ cả bạn và khách hàng. Nó nên quy định rõ về phạm vi công việc, số lần chỉnh sửa, thời hạn, chi phí, và các điều khoản thanh toán. Điều này giúp tránh những hiểu lầm và tranh chấp không đáng có sau này.',
      },
      {
        question: 'Làm thế nào để xây dựng thương hiệu cá nhân (personal brand) cho một nhà sáng tạo?',
        answer:
          'Thương hiệu cá nhân là những gì người khác nghĩ về bạn khi bạn không có ở đó. Hãy xác định thế mạnh độc đáo của bạn, chia sẻ công việc của bạn một cách nhất quán trên các nền tảng phù hợp, và tương tác với cộng đồng. Hãy cho mọi người thấy không chỉ sản phẩm của bạn, mà cả quá trình và con người đằng sau nó.',
      },
      {
        question: 'Sự khác biệt giữa giá (price) và giá trị (value) là gì?',
        answer:
          'Giá là số tiền khách hàng trả cho bạn. Giá trị là lợi ích, giải pháp, hoặc cảm xúc mà khách hàng nhận được từ sản phẩm của bạn. Một chiến lược kinh doanh tốt là tập trung vào việc tạo ra giá trị cao, điều này cho phép bạn đặt một mức giá tương xứng.',
      },
      {
        question: 'Tôi có nên nhận các dự án "vì đam mê" (passion project) không trả phí không?',
        answer:
          'Khi bạn mới bắt đầu và cần xây dựng portfolio, việc thực hiện các dự án cho các tổ chức phi lợi nhuận hoặc các dự án cá nhân có thể là một ý tưởng tốt. Tuy nhiên, hãy cẩn thận để không bị lợi dụng. Hãy đặt ra giới hạn và đảm bảo rằng dự án đó thực sự giúp bạn phát triển kỹ năng hoặc có được sự công nhận.',
      },
      {
        question: 'Làm thế nào để đối phó với phản hồi tiêu cực từ khách hàng?',
        answer:
          'Đừng coi đó là một cuộc tấn công cá nhân. Hãy lắng nghe cẩn thận để hiểu gốc rễ của vấn đề. Tách biệt các phản hồi mang tính xây dựng (ví dụ: "màu này hơi tối") khỏi các ý kiến chủ quan (ví dụ: "tôi không thích nó"). Giao tiếp một cách chuyên nghiệp và đề xuất các giải pháp thay vì tranh cãi.',
      },
      {
        question: 'Tại sao việc xây dựng một cộng đồng lại quan trọng?',
        answer:
          'Một cộng đồng gồm những người theo dõi và ủng hộ công việc của bạn là một tài sản vô giá. Họ không chỉ là những khách hàng tiềm năng mà còn là những người quảng bá cho thương hiệu của bạn, cung cấp phản hồi quý giá, và tạo ra một mạng lưới hỗ trợ tinh thần.',
      },
      {
        question: 'Làm thế nào để cân bằng giữa công việc sáng tạo và công việc kinh doanh?',
        answer:
          'Đây là thách thức lớn nhất. Hãy phân bổ thời gian rõ ràng trong tuần cho từng việc. Ví dụ, dành buổi sáng cho công việc sáng tạo và buổi chiều cho việc trả lời email, marketing, và kế toán. Sử dụng các công cụ quản lý dự án và tự động hóa các công việc lặp đi lặp lại để tiết kiệm thời gian.',
      },
    ],
  },
];

export const digitalArtsCreativeTechModuleData: ModuleData = {
  id: K2Module.DigitalArtsCreativeTech,
  title: 'Nghệ thuật số & Công nghệ sáng tạo',
  subtitle:
    'Khám phá sự giao thoa giữa nghệ thuật và công nghệ, từ digital painting đến VR art và interactive installations.',
  description:
    'Khám phá sự giao thoa giữa nghệ thuật và công nghệ, từ digital painting đến VR art và interactive installations.',
  category: 'Sáng tạo',
  icon: '🎨',
  color: 'from-rose-500 to-pink-500',
  level: 'Trung bình',
  duration: '20-25 giờ',
  features: ['Digital Painting', '3D Modeling', 'VR/AR Art', 'Creative Coding', 'Interactive Art'],
  prerequisites: [
    'Năng khiếu nghệ thuật',
    'Kỹ năng sử dụng máy tính',
    'Tư duy sáng tạo và không gian',
    'Sẵn sàng thử nghiệm công nghệ mới',
  ],
  objectives: [
    'Master digital art tools và software',
    'Understand color theory và composition trong digital medium',
    'Create original digital artwork incorporating Vietnamese themes',
    'Learn digital painting techniques và workflows',
    'Build portfolio of diverse digital art pieces',
  ],
  careerOutcomes: [
    'Freelance digital artist cho international clients',
    'Game industry concept artist trong Vietnamese studios',
    'Social media content creator cho brands',
  ],
  lessons,
  industryApplications: [],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'N/A',
  },
  relatedModules: [],
};
