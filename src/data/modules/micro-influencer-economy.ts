import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { MicroInfluencerLesson } from '@/types/lesson-base';

export const microInfluencerEconomyModule: ModuleData<MicroInfluencerLesson> = {
  id: 'micro-influencer-economy',
  title: 'Micro-Influencer Economy',
  subtitle: 'Kinh tế micro-influencer & xây dựng thương hiệu cá nhân',
  description:
    'Khám phá strategies để build authentic personal brand, tạo meaningful connections với audience và monetize influence effectively trong Vietnamese market.',
  level: 'Trung bình',
  duration: '20-28 giờ',
  category: 'Creator Economy & Personal Branding',
  features: [
    'Personal Brand Strategy & Development',
    'Content Creation & Audience Building',
    'Brand Partnership Negotiation',
    'Revenue Diversification Strategies',
    'Vietnamese Market Micro-Influencer Trends',
    'Platform-Specific Growth Tactics',
    'Analytics & Performance Measurement',
    'Community Building & Engagement',
  ],
  icon: '💫',
  color: 'pink',
  heroImageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
  objectives: [
    'Build authentic personal brand với clear value proposition',
    'Create engaging content strategies cho different platforms',
    'Negotiate favorable brand partnership deals',
    'Diversify income streams as micro-influencer',
    'Understand Vietnamese creator economy landscape',
    'Measure và optimize influence performance',
  ],
  prerequisites: [
    'Active social media presence',
    'Basic content creation skills',
    'Understanding của target audience',
    'Interest trong personal branding',
  ],
  careerOutcomes: [
    'Micro-Influencer (10-50 triệu VNĐ/năm)',
    'Content Creator & Brand Partner (15-80 triệu VNĐ/năm)',
    'Social Media Strategist (25-55 triệu VNĐ)',
    'Influencer Marketing Manager (30-65 triệu VNĐ)',
    'Personal Brand Consultant (35-75 triệu VNĐ)',
    'Creator Economy Analyst (28-58 triệu VNĐ)',
    'Community Manager (22-45 triệu VNĐ)',
    'Digital Marketing Specialist (25-60 triệu VNĐ)',
  ],
  industryApplications: [
    { name: 'Fashion và beauty micro-influencing', description: '' },
    { name: 'Food và lifestyle content creation', description: '' },
    { name: 'Tech product reviews và tutorials', description: '' },
    { name: 'Health và wellness advocacy', description: '' },
    { name: 'Travel và tourism promotion', description: '' },
    { name: 'Education và skill-sharing', description: '' },
    { name: 'Parenting và family lifestyle', description: '' },
    { name: 'Finance và investment education', description: '' },
    { name: 'Gaming và entertainment', description: '' },
    { name: 'Local business partnerships', description: '' },
  ],
  marketDemand: {
    averageSalary: '30-65 triệu VNĐ',
    jobGrowth: '+92%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.ContentCreator, K2Module.DigitalMarketing, K2Module.EthicalMarketingPurpose],
  lessons: [
    {
      id: 'micro-influencer-fundamentals',
      title: 'Nền Tảng Micro-Influencer Economy',
      description:
        'Hiểu ecosystem của micro-influencer economy, từ defining micro-influencers đến understanding market opportunities trong Vietnamese context.',
      duration: '160 phút',
      difficulty: 'Cơ bản',
      videoUrl: 'https://www.youtube.com/watch?v=3DdJ1JynG8M',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      objectives: [
        'Understand micro-influencer definition và market position',
        'Analyze Vietnamese social media landscape cho influencers',
        'Identify niche opportunities trong micro-influencer space',
        'Learn fundamental monetization strategies',
        'Understand audience psychology và engagement',
        'Master basic content creation principles',
      ],
      prerequisites: [
        'Basic social media understanding',
        'Vietnamese market awareness',
        'Interest trong content creation',
      ],
      realWorldApplications: [
        'Beauty micro-influencers promoting Vietnamese skincare brands',
        'Food bloggers showcasing local Vietnamese cuisine',
        'Tech reviewers covering Vietnamese startup products',
        'Fashion influencers featuring Vietnamese designer brands',
        'Travel micro-influencers promoting Vietnamese destinations',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Thị trường micro-influencer tại Việt Nam đang phát triển mạnh mẽ, đặc biệt trên các nền tảng như TikTok và Instagram.',
        ],
      },
      faqs: [
        {
          question: 'Micro-influencer là gì?',
          answer:
            'Micro-influencer là những người có ảnh hưởng trên mạng xã hội với lượng người theo dõi tương đối nhỏ nhưng rất trung thành, thường từ 1,000 đến 100,000 người. Họ được tin tưởng vì tính chân thực và chuyên môn trong một lĩnh vực cụ thể.',
        },
        {
          question: 'Tại sao các nhãn hàng lại thích làm việc với micro-influencer?',
          answer:
            'Các nhãn hàng thích micro-influencer vì họ có tỷ lệ tương tác cao, chi phí hợp tác thấp hơn và được khán giả tin tưởng hơn. Lời giới thiệu của họ giống như một lời khuyên từ bạn bè hơn là một quảng cáo.',
        },
        {
          question: 'Làm thế nào để bắt đầu trở thành một micro-influencer?',
          answer:
            'Hãy bắt đầu bằng việc chọn một lĩnh vực (niche) mà bạn đam mê và có kiến thức. Sau đó, hãy tạo ra những nội dung chất lượng, có giá trị và đăng tải đều đặn trên một nền tảng mạng xã hội phù hợp để thu hút và xây dựng cộng đồng của riêng bạn.',
        },
        {
          question: 'Tôi có thể kiếm tiền như một micro-influencer bằng cách nào?',
          answer:
            'Có nhiều cách để kiếm tiền, bao gồm: hợp tác quảng cáo cho các nhãn hàng, tiếp thị liên kết (affiliate marketing), bán sản phẩm hoặc dịch vụ của riêng bạn, nhận quyên góp từ người hâm mộ, hoặc tạo nội dung độc quyền có trả phí.',
        },
        {
          question: 'Sự khác biệt giữa micro-influencer và macro-influencer là gì?',
          answer: 'Sự khác biệt chính nằm ở lượng người theo dõi. Micro-influencer có từ 1.000 - 100.000 người theo dõi, trong khi macro-influencer có từ 100.000 đến 1 triệu. Micro-influencer thường có tỷ lệ tương tác cao hơn và mối quan hệ gần gũi hơn với khán giả.'
        },
        {
          question: 'Tỷ lệ tương tác (engagement rate) là gì và tại sao nó quan trọng?',
          answer: 'Tỷ lệ tương tác là tỷ lệ phần trăm người theo dõi tương tác (thích, bình luận, chia sẻ) với nội dung của bạn. Đây là một chỉ số quan trọng vì nó cho thấy mức độ gắn kết và quan tâm thực sự của khán giả, điều mà các nhãn hàng rất coi trọng.'
        },
        {
          question: 'Tôi có cần phải có thiết bị đắt tiền để bắt đầu không?',
          answer: 'Không cần thiết. Hầu hết các micro-influencer thành công đều bắt đầu với những gì họ có, thường chỉ là một chiếc điện thoại thông minh. Chất lượng nội dung và sự sáng tạo quan trọng hơn nhiều so với thiết bị đắt tiền.'
        },
        {
          question: 'Làm thế nào để xây dựng lòng tin với khán giả?',
          answer: 'Hãy luôn minh bạch và chân thực. Chỉ giới thiệu những sản phẩm bạn thực sự tin dùng. Chia sẻ cả những thành công và thất bại. Tương tác và lắng nghe khán giả của bạn một cách chân thành.'
        },
        {
          question: 'Nền tảng nào tốt nhất để bắt đầu?',
          answer: 'Điều này phụ thuộc vào niche của bạn và đối tượng khán giả bạn muốn nhắm tới. Instagram và TikTok rất mạnh về hình ảnh và video ngắn, phù hợp với thời trang, làm đẹp, ẩm thực. YouTube phù hợp cho các nội dung chuyên sâu, hướng dẫn. Facebook vẫn tốt cho việc xây dựng cộng đồng.'
        },
        {
          question: 'Mất bao lâu để trở thành một micro-influencer thành công?',
          answer: 'Không có câu trả lời chính xác. Điều này phụ thuộc vào sự nỗ lực, nhất quán và chất lượng nội dung của bạn. Có thể mất vài tháng đến một năm hoặc hơn để xây dựng một lượng người theo dõi đủ lớn và có tương tác tốt.'
        }
      ],
      careerConnect: {
        name: 'Linh Nguyễn',
        title: 'Founder, The Creator Hub',
        company: 'The Creator Hub',
        imageUrl: '/placeholder-attraction.svg',
        quote: 'Xây dựng thương hiệu cá nhân chân thực là chìa khóa thành công trong nền kinh tế sáng tạo.',
      },
      quizzes: [
        {
          question: 'Đâu là nền tảng phổ biến nhất cho micro-influencer tại Việt Nam?',
          options: ['Facebook', 'TikTok', 'LinkedIn', 'Zalo'],
          correctAnswerIndex: 1,
          explanation:
            'TikTok đang là nền tảng có tốc độ phát triển người dùng và nhà sáng tạo nội dung nhanh nhất tại Việt Nam.',
        },
      ],
    },
    {
      id: 'niche-selection-positioning',
      title: 'Niche Selection Và Personal Brand Positioning',
      description:
        'Master niche selection strategies để find profitable micro-influencer opportunities và build strong personal brand positioning trong competitive market.',
      duration: '175 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=sO4te2QNsHY',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      objectives: [
        'Identify profitable niches trong Vietnamese market',
        'Develop unique value propositions',
        'Create compelling personal brand stories',
        'Position against established competitors',
        'Build authentic brand personality',
        'Design consistent visual brand identity',
      ],
      prerequisites: ['Market research basics', 'Understanding của personal strengths', 'Basic design awareness'],
      realWorldApplications: [
        'Vietnamese cooking specialists building culinary brands',
        'Fitness trainers positioning as Vietnamese health experts',
        'Sustainable living advocates trong Vietnamese context',
        'Tech enthusiasts focusing on Vietnamese startup ecosystem',
        'Traditional craft experts modernizing heritage skills',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Việc chọn đúng thị trường ngách (niche) là yếu tố sống còn để nổi bật trong một thị trường ngày càng đông đúc.',
        ],
      },
      faqs: [
        {
          question: 'Làm thế nào để chọn đúng thị trường ngách (niche)?',
          answer:
            'Hãy kết hợp ba yếu tố: (1) Điều bạn đam mê, (2) Điều bạn có kiến thức hoặc kỹ năng tốt, và (3) Điều mà có một nhóm khán giả quan tâm và sẵn sàng chi trả. Một niche tốt là nơi giao thoa của cả ba yếu tố này.',
        },
        {
          question: 'Thương hiệu cá nhân (personal brand) là gì?',
          answer:
            'Thương hiệu cá nhân là cách người khác nhìn nhận về bạn dựa trên chuyên môn, giá trị và cá tính mà bạn thể hiện ra bên ngoài. Đó là "dấu ấn" riêng của bạn trong tâm trí của khán giả.',
        },
        {
          question: 'Tại sao định vị thương hiệu lại quan trọng?',
          answer:
            'Định vị giúp bạn nổi bật so với các đối thủ cạnh tranh. Nó xác định rõ bạn là ai, bạn làm gì, và điều gì khiến bạn khác biệt. Một định vị tốt sẽ thu hút đúng đối tượng khán giả và các cơ hội hợp tác.',
        },
        {
          question: 'Làm thế nào để kể câu chuyện thương hiệu cá nhân hấp dẫn?',
          answer: 'Câu chuyện của bạn nên bao gồm nguồn gốc, lý do bạn làm điều này, những giá trị bạn theo đuổi và tầm nhìn của bạn. Hãy kể một cách chân thực, thể hiện được cá tính và kết nối cảm xúc với khán giả.'
        },
        {
          question: 'Unique Value Proposition (UVP) là gì?',
          answer: 'UVP là một lời tuyên bố ngắn gọn, rõ ràng mô tả lợi ích độc nhất mà bạn mang lại cho khán giả, tại sao họ nên theo dõi bạn thay vì người khác. Ví dụ: "Hướng dẫn nấu món ăn Việt cho người bận rộn trong 15 phút".'
        },
        {
          question: 'Làm thế nào để phân tích đối thủ cạnh tranh trong niche của mình?',
          answer: 'Hãy theo dõi các influencer khác trong niche của bạn. Xem họ làm loại nội dung gì, họ tương tác với khán giả ra sao, điểm mạnh và điểm yếu của họ là gì. Từ đó, tìm ra "khoảng trống" mà bạn có thể lấp đầy và làm tốt hơn.'
        },
        {
          question: 'Tính nhất quán của thương hiệu có nghĩa là gì?',
          answer: 'Là việc duy trì sự đồng bộ về mặt hình ảnh (màu sắc, logo, font chữ), giọng điệu (tone of voice) và thông điệp trên tất cả các nền tảng. Điều này giúp khán giả dễ dàng nhận ra và ghi nhớ thương hiệu của bạn.'
        },
        {
          question: 'Tôi có nên thể hiện cá tính thật của mình không?',
          answer: 'Chắc chắn rồi. Sự chân thực là tài sản lớn nhất của một micro-influencer. Đừng cố gắng trở thành một người khác. Khán giả kết nối với con người thật của bạn, bao gồm cả những điểm không hoàn hảo.'
        },
        {
          question: 'Làm sao để biết niche của tôi có tiềm năng kiếm tiền không?',
          answer: 'Hãy nghiên cứu xem có các nhãn hàng nào đang hoạt động trong niche đó không, có các influencer khác đang kiếm tiền từ nó không, và khán giả có sẵn sàng chi tiêu cho các sản phẩm/dịch vụ liên quan không.'
        },
        {
          question: 'Tôi có thể thay đổi niche của mình sau này không?',
          answer: 'Có thể, nhưng hãy làm điều đó một cách từ từ và có chiến lược. Hãy dần dần giới thiệu các chủ đề mới liên quan đến niche cũ và giải thích cho khán giả của bạn về sự thay đổi này để không làm họ cảm thấy xa lạ.'
        }
      ],
      careerConnect: {
        name: 'Trần Tuấn Anh',
        title: 'Brand Strategist',
        company: 'BrandUp Asia',
        imageUrl: '/placeholder-attraction.svg',
        quote: 'Thương hiệu cá nhân của bạn không phải là bạn là ai, mà là người khác nghĩ bạn là ai.',
      },
      quizzes: [
        {
          question: 'Tại sao việc chọn niche lại quan trọng?',
          options: [
            'Để dễ dàng sao chép người khác',
            'Để thu hút một lượng khán giả nhỏ nhưng trung thành',
            'Để có thể quảng cáo mọi sản phẩm',
            'Để không cần sáng tạo nội dung',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Một niche cụ thể giúp bạn xây dựng chuyên môn và kết nối sâu sắc hơn với một nhóm đối tượng khán giả nhất định.',
        },
      ],
    },
    {
      id: 'content-creation-strategies',
      title: 'Content Creation Strategies Cho Micro-Influencers',
      description:
        'Master content creation workflows, từ ideation đến production, để consistently create engaging content that drives audience growth và brand partnerships.',
      duration: '190 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=EvGP5mSrGHk',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      objectives: [
        'Develop efficient content creation workflows',
        'Master multi-platform content adaptation',
        'Create engaging storytelling frameworks',
        'Implement batch content creation processes',
        'Understand platform-specific optimization',
        'Build sustainable content calendars',
      ],
      prerequisites: [
        'Basic content creation skills',
        'Understanding của major social platforms',
        'Time management abilities',
      ],
      realWorldApplications: [
        'Fashion micro-influencers creating seasonal lookbooks',
        'Food creators developing recipe content series',
        'Travel influencers documenting Vietnamese destinations',
        'Fitness creators designing workout content programs',
        'Beauty influencers creating skincare routine content',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Nội dung dạng video ngắn, đặc biệt là trên TikTok và Instagram Reels, đang thống trị và thu hút sự chú ý lớn từ khán giả Việt.',
        ],
      },
      faqs: [
        {
          question: 'Làm thế nào để tạo ra nội dung hấp dẫn một cách nhất quán?',
          answer:
            'Chìa khóa là lập kế hoạch. Hãy tạo một lịch đăng bài (content calendar) và lên ý tưởng hàng loạt (batching). Dành một ngày để lên kế hoạch và quay/viết nội dung cho cả tuần hoặc cả tháng sẽ giúp bạn tiết kiệm thời gian và duy trì sự đều đặn.',
        },
        {
          question: 'Tôi nên tập trung vào chất lượng hay số lượng nội dung?',
          answer:
            'Cả hai đều quan trọng, nhưng khi mới bắt đầu, hãy ưu tiên sự nhất quán (số lượng) để thuật toán nhận diện bạn. Khi đã có một lượng khán giả nhất định, hãy tập trung nhiều hơn vào việc nâng cao chất lượng để giữ chân họ.',
        },
        {
          question: 'Làm thế nào để biết khán giả của tôi thích loại nội dung nào?',
          answer:
            'Hãy xem các chỉ số phân tích (analytics) trên nền tảng của bạn. Xem bài đăng nào có nhiều lượt xem, lượt thích, bình luận và chia sẻ nhất. Ngoài ra, đừng ngại hỏi trực tiếp khán giả của bạn thông qua các cuộc khảo sát hoặc story polls.',
        },
        {
          question: 'Content Pillar (Trụ cột nội dung) là gì?',
          answer: 'Là 3-5 chủ đề chính mà kênh của bạn sẽ xoay quanh. Việc xác định các trụ cột nội dung giúp bạn giữ cho nội dung của mình tập trung, có định hướng và dễ dàng lên ý tưởng hơn.'
        },
        {
          question: 'Làm thế nào để kể chuyện (storytelling) trong nội dung của mình?',
          answer: 'Hãy cấu trúc nội dung của bạn theo một câu chuyện có mở đầu, diễn biến và kết thúc. Sử dụng các yếu tố cảm xúc, chia sẻ kinh nghiệm cá nhân và tạo ra một nhân vật (chính là bạn) mà khán giả có thể đồng cảm.'
        },
        {
          question: 'Làm sao để tái sử dụng nội dung (repurpose content) hiệu quả?',
          answer: 'Từ một nội dung gốc (ví dụ: một video YouTube dài), bạn có thể cắt thành nhiều video ngắn cho TikTok/Reels, chuyển thể thành một bài blog, trích dẫn các ý hay để làm bài đăng trên Twitter, và tạo thành một infographic cho Pinterest. Điều này giúp bạn tiết kiệm công sức và tiếp cận nhiều đối tượng hơn.'
        },
        {
          question: 'Call-to-Action (CTA - Kêu gọi hành động) là gì?',
          answer: 'Là lời kêu gọi bạn đưa ra ở cuối nội dung để khuyến khích khán giả làm một điều gì đó cụ thể, ví dụ: "Hãy bình luận ý kiến của bạn bên dưới!", "Nhấn link ở bio để xem sản phẩm nhé!", hoặc "Hãy theo dõi để xem thêm nhiều video như thế này!".'
        },
        {
          question: 'A/B testing trong sáng tạo nội dung là gì?',
          answer: 'Là việc thử nghiệm hai phiên bản khác nhau của một yếu tố (ví dụ: hai tiêu đề, hai ảnh thumbnail khác nhau) để xem phiên bản nào hoạt động hiệu quả hơn. Điều này giúp bạn tối ưu hóa nội dung dựa trên dữ liệu thực tế.'
        },
        {
          question: 'Làm thế nào để vượt qua "content block" (bí ý tưởng)?',
          answer: 'Hãy đọc sách, xem phim, nghe podcast, theo dõi các nhà sáng tạo khác (cả trong và ngoài niche của bạn), và ghi lại tất cả những ý tưởng chợt nảy ra. Đôi khi, nghỉ ngơi và cho phép bản thân không sáng tạo cũng là một cách để nạp lại năng lượng.'
        },
        {
          question: 'Định dạng nội dung nào đang hiệu quả nhất hiện nay?',
          answer: 'Video ngắn (short-form video) trên các nền tảng như TikTok, Instagram Reels và YouTube Shorts đang là định dạng có khả năng lan truyền (viral) và tiếp cận tự nhiên cao nhất. Tuy nhiên, bạn vẫn nên kết hợp với các định dạng khác để xây dựng mối quan hệ sâu sắc hơn với khán giả.'
        }
      ],
      careerConnect: {
        name: 'Ngọc Mai',
        title: 'Content Director',
        company: 'V-Creators',
        imageUrl: '/placeholder-attraction.svg',
        quote: 'Nội dung là vua, nhưng sự nhất quán là hoàng hậu. Hãy lên kế hoạch và thực thi đều đặn.',
      },
      quizzes: [
        {
          question: 'Yếu tố nào quan trọng nhất trong chiến lược nội dung?',
          options: [
            'Sản xuất video thật dài',
            'Đăng bài không thường xuyên',
            'Cung cấp giá trị cho khán giả',
            'Chỉ nói về bản thân',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Nội dung thành công là nội dung giải quyết được vấn đề, mang lại thông tin hữu ích hoặc giải trí cho người xem.',
        },
      ],
    },
    {
      id: 'audience-growth-engagement',
      title: 'Audience Growth Và Community Engagement Strategies',
      description:
        'Learn advanced strategies để grow authentic, engaged audiences và build loyal communities around your micro-influencer brand.',
      duration: '185 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=XSMNLuUdVQY',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      objectives: [
        'Master organic audience growth techniques',
        'Build authentic community engagement',
        'Implement follower retention strategies',
        'Create viral content opportunities',
        'Develop audience loyalty programs',
        'Use analytics để optimize growth',
      ],
      prerequisites: [
        'Content creation fundamentals',
        'Basic social media management',
        'Understanding của community dynamics',
      ],
      realWorldApplications: [
        'Lifestyle influencers building dedicated fan communities',
        'Educational creators developing learning communities',
        'Business influencers creating professional networks',
        'Hobby influencers uniting enthusiast communities',
        'Local influencers building neighborhood connections',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Xây dựng cộng đồng không chỉ là tăng follow, mà là tạo ra một không gian tương tác hai chiều, nơi khán giả cảm thấy được lắng nghe.',
        ],
      },
      faqs: [
        {
          question: 'Làm thế nào để tăng lượng người theo dõi một cách tự nhiên?',
          answer:
            'Hãy tập trung vào việc tạo ra nội dung có giá trị và có khả năng chia sẻ cao. Sử dụng các hashtag liên quan, hợp tác với các nhà sáng tạo khác trong cùng lĩnh vực, và tích cực tương tác trong các cộng đồng có liên quan đến niche của bạn.',
        },
        {
          question: 'Sự khác biệt giữa khán giả (audience) và cộng đồng (community) là gì?',
          answer:
            'Khán giả là những người tiêu thụ nội dung của bạn. Cộng đồng là khi những người trong khán giả đó bắt đầu kết nối và tương tác với nhau, tạo thành một mạng lưới. Mục tiêu của bạn là chuyển đổi khán giả thành cộng đồng.',
        },
        {
          question: 'Làm thế nào để xử lý các bình luận tiêu cực hoặc "troll"?',
          answer:
            'Đừng xóa trừ khi chúng chứa ngôn từ thù địch hoặc spam. Hãy trả lời một cách chuyên nghiệp và bình tĩnh. Đôi khi, một phản hồi tốt có thể biến một người chỉ trích thành người ủng hộ. Nếu đó là "troll" cố tình gây rối, việc phớt lờ thường là lựa chọn tốt nhất.',
        },
        {
          question: 'Làm thế nào để khuyến khích khán giả tương tác?',
          answer: 'Hãy đặt câu hỏi trong nội dung của bạn, tạo các cuộc thăm dò ý kiến (polls), tổ chức các thử thách (challenges), và trả lời hầu hết các bình luận. Khi khán giả thấy bạn quan tâm đến ý kiến của họ, họ sẽ có xu hướng tương tác nhiều hơn.'
        },
        {
          question: 'Hợp tác (collaboration) với các influencer khác có lợi ích gì?',
          answer: 'Hợp tác giúp bạn tiếp cận với một lượng khán giả mới đã có sẵn sự quan tâm đến niche của bạn. Đây là một trong những cách nhanh nhất để tăng trưởng người theo dõi một cách chất lượng.'
        },
        {
          question: 'Tôi có nên sử dụng quảng cáo trả phí để tăng trưởng không?',
          answer: 'Khi mới bắt đầu, hãy tập trung vào tăng trưởng tự nhiên (organic growth). Khi bạn đã có một lượng nội dung tốt và hiểu rõ đối tượng khán giả của mình, bạn có thể sử dụng quảng cáo trả phí để khuếch đại phạm vi tiếp cận và thu hút thêm người theo dõi mục tiêu.'
        },
        {
          question: 'Làm thế nào để giữ chân người theo dõi?',
          answer: 'Hãy nhất quán trong việc đăng bài và cung cấp giá trị. Tiếp tục tạo ra nội dung mà họ yêu thích, lắng nghe phản hồi của họ, và cho họ thấy sự tiến bộ và phát triển của bạn. Xây dựng mối quan hệ cá nhân bằng cách tương tác thường xuyên.'
        },
        {
          question: 'User-Generated Content (UGC - Nội dung do người dùng tạo) là gì?',
          answer: 'Là bất kỳ nội dung nào (hình ảnh, video, đánh giá) được tạo bởi khán giả của bạn liên quan đến thương hiệu của bạn. Khuyến khích và chia sẻ lại UGC là một cách tuyệt vời để xây dựng cộng đồng và tăng cường sự tin tưởng.'
        },
        {
          question: 'Tổ chức giveaway có phải là một cách tốt để tăng follow không?',
          answer: 'Giveaway có thể giúp bạn tăng follow nhanh chóng, nhưng thường những người theo dõi này có chất lượng thấp và ít tương tác, họ chỉ quan tâm đến phần thưởng. Hãy sử dụng giveaway một cách chiến lược và đảm bảo nó liên quan đến niche của bạn.'
        },
        {
          question: 'Làm thế nào để biến người theo dõi thành những người hâm mộ cuồng nhiệt (superfans)?',
          answer: 'Hãy mang lại giá trị vượt trội, tạo ra những kết nối cá nhân (nhớ tên, câu chuyện của họ), và tạo ra những trải nghiệm độc quyền cho những người ủng hộ trung thành nhất. Superfans sẽ là những người quảng bá nhiệt tình nhất cho thương hiệu của bạn.'
        }
      ],
      careerConnect: {
        name: 'Phạm An',
        title: 'Community Manager',
        company: 'ConnectX',
        imageUrl: '/placeholder-attraction.svg',
        quote: 'Đừng chỉ nói chuyện với khán giả của bạn, hãy tạo cơ hội để họ nói chuyện với nhau.',
      },
      quizzes: [
        {
          question: 'Đâu là một hoạt động hiệu quả để tăng tương tác cộng đồng?',
          options: [
            'Tổ chức Q&A (Hỏi & Đáp)',
            'Không bao giờ trả lời bình luận',
            'Chỉ đăng bài quảng cáo',
            'Ẩn tất cả các bình luận tiêu cực',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Các phiên Q&A, livestream, và việc trả lời bình luận thường xuyên giúp khán giả cảm thấy được kết nối và trân trọng.',
        },
      ],
    },
    {
      id: 'brand-partnership-monetization',
      title: 'Brand Partnership Và Advanced Monetization',
      description:
        'Master brand partnership negotiations, relationship management, và advanced monetization strategies để maximize micro-influencer income.',
      duration: '195 phút',
      difficulty: 'Nâng cao',
      videoUrl: 'https://www.youtube.com/watch?v=NwZy0evRnZs',
      imageUrl: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop',
      objectives: [
        'Master brand partnership negotiation tactics',
        'Develop pricing strategies cho different collaboration types',
        'Build long-term brand relationships',
        'Create compelling partnership proposals',
        'Understand legal aspects của influencer contracts',
        'Diversify income streams beyond brand deals',
      ],
      prerequisites: ['Established audience base', 'Content creation experience', 'Basic business understanding'],
      realWorldApplications: [
        'Fashion micro-influencers partnering với Vietnamese clothing brands',
        'Food creators collaborating với restaurant chains',
        'Tech influencers reviewing Vietnamese startup products',
        'Travel influencers promoting Vietnamese tourism destinations',
        'Beauty creators featuring Vietnamese skincare brands',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Các nhãn hàng Việt Nam ngày càng ưa chuộng làm việc với micro-influencer vì tính chân thực và chi phí hợp lý hơn so với các ngôi sao lớn.',
        ],
      },
      faqs: [
        {
          question: 'Khi nào tôi nên bắt đầu tìm kiếm cơ hội hợp tác với nhãn hàng?',
          answer:
            'Không có con số người theo dõi cụ thể, nhưng hãy tập trung vào việc xây dựng một cộng đồng tương tác tốt trước. Khi bạn có tỷ lệ tương tác cao và một thương hiệu cá nhân rõ ràng, các nhãn hàng sẽ bắt đầu chú ý đến bạn. Bạn cũng có thể chủ động liên hệ với các nhãn hàng nhỏ mà bạn yêu thích.',
        },
        {
          question: 'Làm thế nào để định giá cho một bài đăng quảng cáo?',
          answer:
            'Giá cả phụ thuộc vào nhiều yếu tố: số lượng người theo dõi, tỷ lệ tương tác, mức độ phức tạp của nội dung, và ngành hàng. Một công thức phổ biến cho người mới bắt đầu là khoảng 1-2% số lượng người theo dõi (ví dụ: 10.000 followers có thể tính phí 1-2 triệu VNĐ cho một bài đăng). Hãy nghiên cứu các influencer tương tự để có mức giá phù hợp.',
        },
        {
          question: 'Media Kit là gì và tại sao nó lại quan trọng?',
          answer:
            'Media Kit giống như một CV dành cho influencer. Nó giới thiệu về bạn, thương hiệu cá nhân, các chỉ số quan trọng (lượt theo dõi, tương tác, nhân khẩu học khán giả), các hợp tác thành công trước đây và bảng giá dịch vụ. Một Media Kit chuyên nghiệp sẽ giúp bạn gây ấn tượng tốt với các nhãn hàng.',
        },
        {
          question: 'Làm thế nào để liên hệ với các nhãn hàng?',
          answer: 'Bạn có thể gửi email trực tiếp đến bộ phận marketing hoặc PR của họ. Email nên ngắn gọn, chuyên nghiệp, giới thiệu về kênh của bạn, tại sao bạn phù hợp với họ và đính kèm Media Kit. Bạn cũng có thể tham gia các nền tảng kết nối influencer với nhãn hàng (influencer marketing platforms).'
        },
        {
          question: 'Sự khác biệt giữa hợp tác trả phí và hợp tác trên cơ sở tặng sản phẩm (gifting) là gì?',
          answer: 'Hợp tác tặng sản phẩm (còn gọi là PR product) là khi nhãn hàng gửi cho bạn sản phẩm miễn phí để trải nghiệm, không có yêu cầu bắt buộc phải đăng bài. Hợp tác trả phí là một giao dịch kinh doanh, nơi bạn được trả tiền để tạo và đăng nội dung theo các điều khoản đã thỏa thuận.'
        },
        {
          question: 'Tôi có cần phải có hợp đồng khi làm việc với nhãn hàng không?',
          answer: 'Chắc chắn có. Dù là hợp tác lớn hay nhỏ, một hợp đồng hoặc thỏa thuận bằng văn bản sẽ bảo vệ cả hai bên. Nó nên quy định rõ về nội dung cần thực hiện, số lần đăng, thời gian, quyền sở hữu nội dung và các điều khoản thanh toán.'
        },
        {
          question: 'Làm thế nào để từ chối một lời đề nghị hợp tác không phù hợp?',
          answer: 'Hãy từ chối một cách lịch sự và chuyên nghiệp. Cảm ơn họ đã quan tâm, nhưng giải thích rằng sự hợp tác này không phù hợp với thương hiệu hoặc khán giả của bạn vào lúc này. Giữ mối quan hệ tốt đẹp có thể hữu ích cho tương lai.'
        },
        {
          question: 'Affiliate Marketing (Tiếp thị liên kết) hoạt động như thế nào?',
          answer: 'Bạn sẽ nhận được một đường link hoặc mã giảm giá duy nhất cho một sản phẩm/dịch vụ. Khi ai đó mua hàng thông qua link/mã của bạn, bạn sẽ nhận được một khoản hoa hồng. Đây là một cách tốt để kiếm tiền mà không cần làm việc trực tiếp với nhãn hàng.'
        },
        {
          question: 'Làm thế nào để đảm bảo tính chân thực khi đăng bài quảng cáo?',
          answer: 'Hãy minh bạch với khán giả rằng đây là nội dung được tài trợ (sử dụng hashtag như #ad, #sponsored). Chỉ nhận quảng cáo cho những sản phẩm bạn thực sự tin tưởng và yêu thích. Hãy chia sẻ trải nghiệm của bạn một cách trung thực, bao gồm cả ưu và nhược điểm (nếu có).'
        },
        {
          question: 'Ngoài hợp tác với nhãn hàng, còn cách nào khác để kiếm tiền không?',
          answer: 'Rất nhiều! Bạn có thể bán sản phẩm của riêng mình (merchandise, sản phẩm số), cung cấp dịch vụ tư vấn/coaching, tạo nội dung độc quyền cho thành viên trả phí (Patreon, YouTube Memberships), nhận donate, hoặc trở thành đại sứ thương hiệu dài hạn.'
        }
      ],
      careerConnect: {
        name: 'Lê Thu Trang',
        title: 'Influencer Marketing Lead',
        company: 'LocalBrands.vn',
        imageUrl: '/placeholder-attraction.svg',
        quote: 'Chúng tôi tìm kiếm những người có ảnh hưởng thực sự, không chỉ là những người có nhiều lượt theo dõi.',
      },
      quizzes: [
        {
          question: 'Khi làm việc với nhãn hàng, yếu tố nào là quan trọng nhất?',
          options: [
            'Chỉ nhận sản phẩm miễn phí',
            'Đảm bảo sự hợp tác phù hợp với giá trị thương hiệu cá nhân',
            'Quảng cáo bất chấp sản phẩm tốt hay xấu',
            'Không cần hợp đồng',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sự phù hợp giữa influencer và nhãn hàng đảm bảo tính chân thực cho nội dung và hiệu quả cho chiến dịch.',
        },
      ],
    },
    {
      id: 'platform-optimization-algorithms',
      title: 'Platform Optimization Và Algorithm Mastery',
      description:
        'Master platform-specific algorithms và optimization techniques để maximize reach, engagement, và growth across major social media platforms.',
      duration: '200 phút',
      difficulty: 'Nâng cao',
      videoUrl: 'https://www.youtube.com/watch?v=oqyRjXsazIA',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      objectives: [
        'Understand algorithms của major social platforms',
        'Optimize content cho maximum algorithmic reach',
        'Master platform-specific engagement tactics',
        'Implement cross-platform optimization strategies',
        'Use analytics để inform algorithmic strategies',
        'Stay current với algorithm changes',
      ],
      prerequisites: [
        'Social media marketing experience',
        'Content creation proficiency',
        'Analytics interpretation skills',
      ],
      realWorldApplications: [
        'Multi-platform creators maximizing algorithmic reach',
        'Brand partnerships requiring platform-specific optimization',
        'Content creators scaling across different algorithms',
        'Influencers adapting to platform algorithm changes',
        'Cross-platform audience building strategies',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Thuật toán của các nền tảng liên tục thay đổi, đòi hỏi nhà sáng tạo phải linh hoạt và không ngừng thử nghiệm để tối ưu hóa phạm vi tiếp cận.',
        ],
      },
      faqs: [
        {
          question: 'Thuật toán mạng xã hội hoạt động như thế nào?',
          answer:
            'Mỗi nền tảng có một thuật toán riêng, nhưng mục tiêu chung là giữ người dùng ở lại ứng dụng càng lâu càng tốt. Chúng ưu tiên hiển thị nội dung mà chúng dự đoán người dùng sẽ thích, dựa trên các hành vi trong quá khứ của họ (bài đã thích, video đã xem, tài khoản đã theo dõi).',
        },
        {
          question: 'Làm thế nào để nội dung của tôi được thuật toán ưu tiên?',
          answer:
            'Hãy tập trung vào việc tạo ra "tín hiệu tương tác" sớm. Khi bạn vừa đăng bài, nếu có nhiều người thích, bình luận, chia sẻ ngay lập tức, thuật toán sẽ hiểu rằng đây là nội dung tốt và phân phối nó đến nhiều người hơn. Khuyến khích tương tác trong caption và trả lời bình luận là rất quan trọng.',
        },
        {
          question: 'Việc đăng bài vào "giờ vàng" có còn quan trọng không?',
          answer:
            'Có, nhưng mức độ quan trọng đã giảm so với trước đây. Đăng bài khi khán giả của bạn hoạt động mạnh nhất vẫn giúp tạo ra lượng tương tác ban đầu tốt. Tuy nhiên, chất lượng nội dung và khả năng giữ chân người xem hiện nay quan trọng hơn nhiều so với thời điểm đăng bài.',
        },
        {
          question: 'Các thuật toán ưu tiên loại nội dung nào?',
          answer: 'Hiện tại, hầu hết các nền tảng đều ưu tiên nội dung video, đặc biệt là video ngắn. Các nội dung gốc (được tạo trực tiếp trên nền tảng) cũng thường được ưu ái hơn là các nội dung được chia sẻ lại từ nơi khác.'
        },
        {
          question: 'Hashtag hoạt động như thế nào và nên sử dụng chúng ra sao?',
          answer: 'Hashtag giúp phân loại nội dung của bạn và giúp người dùng khám phá nó. Hãy sử dụng một hỗn hợp các hashtag: hashtag phổ biến rộng, hashtag cụ thể cho niche của bạn, và hashtag riêng của thương hiệu bạn. Đừng lạm dụng quá nhiều hashtag không liên quan.'
        },
        {
          question: 'Làm thế nào để theo dõi sự thay đổi của thuật toán?',
          answer: 'Hãy theo dõi các blog chính thức từ các nền tảng (ví dụ: Instagram Creators), các chuyên gia marketing uy tín, và các trang tin tức về công nghệ. Tham gia các cộng đồng của nhà sáng tạo cũng là một cách tốt để cập nhật thông tin.'
        },
        {
          question: 'Shadowban là gì và làm thế nào để tránh nó?',
          answer: 'Shadowban là tình trạng nội dung của bạn bị giảm phạm vi tiếp cận một cách âm thầm mà không có thông báo. Để tránh điều này, hãy tuân thủ các quy tắc cộng đồng, không sử dụng các hashtag bị cấm, không spam, và tránh các hành vi bị coi là giả tạo (như mua follow).'
        },
        {
          question: 'Tối ưu hóa SEO trên mạng xã hội là gì?',
          answer: 'Là việc sử dụng các từ khóa liên quan trong tên người dùng, tiểu sử (bio), và mô tả bài đăng của bạn để mọi người có thể tìm thấy bạn khi họ tìm kiếm các chủ đề đó trên nền tảng.'
        },
        {
          question: 'Tại sao phạm vi tiếp cận (reach) của tôi lại giảm?',
          answer: 'Phạm vi tiếp cận có thể giảm do nhiều lý do: sự cạnh tranh ngày càng tăng, sự thay đổi của thuật toán, hoặc chất lượng nội dung của bạn không còn phù hợp với khán giả. Đây là lúc cần phân tích lại chiến lược và thử nghiệm những điều mới.'
        },
        {
          question: 'Làm thế nào để thích ứng khi một nền tảng mới nổi lên?',
          answer: 'Đừng vội vàng từ bỏ nền tảng hiện tại. Hãy thử nghiệm nền tảng mới, xem nó có phù hợp với nội dung và khán giả của bạn không. Nếu có, hãy bắt đầu xây dựng sự hiện diện ở đó, nhưng không nhất thiết phải sao chép y hệt nội dung từ kênh chính của bạn.'
        }
      ],
      careerConnect: {
        name: 'Đức Huy',
        title: 'Growth Hacker',
        company: 'ViralWorks',
        imageUrl: '/placeholder-attraction.svg',
        quote: "Đừng chống lại thuật toán, hãy học cách 'lướt' trên nó. Hiểu nó muốn gì và cung cấp cho nó điều đó.",
      },
      quizzes: [
        {
          question: "Làm thế nào để 'thân thiện' với thuật toán?",
          options: [
            'Đăng nội dung chất lượng thấp',
            'Tương tác với khán giả của bạn',
            'Mua followers giả',
            'Không bao giờ thay đổi định dạng nội dung',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Các thuật toán thường ưu tiên nội dung có tỷ lệ tương tác cao (like, comment, share), vì vậy việc khuyến khích và tham gia vào các cuộc trò chuyện là rất quan trọng.',
        },
      ],
    },
    {
      id: 'business-scaling-systematization',
      title: 'Business Scaling Và Micro-Influencer Systematization',
      description:
        'Transform micro-influencer activities into scalable business system với automation, team building, và revenue diversification strategies.',
      duration: '210 phút',
      difficulty: 'Nâng cao',
      videoUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop',
      objectives: [
        'Develop scalable micro-influencer business systems',
        'Build team và delegate content operations',
        'Create multiple revenue streams',
        'Implement business automation tools',
        'Establish professional business operations',
        'Plan long-term business growth strategies',
      ],
      prerequisites: [
        'Established micro-influencer presence',
        'Brand partnership experience',
        'Basic business management skills',
      ],
      realWorldApplications: [
        'Micro-influencers building media companies',
        'Creators launching product lines',
        'Influencers developing educational courses',
        'Creators building subscription-based communities',
        'Influencers scaling into agencies',
      ],
      vietnamContext: {
        title: 'Bối cảnh Việt Nam',
        content: [
          'Nhiều micro-influencer thành công tại Việt Nam đang chuyển mình thành doanh nhân, xây dựng các thương hiệu riêng hoặc công ty truyền thông.',
        ],
      },
      faqs: [
        {
          question: 'Khi nào tôi nên nghĩ đến việc mở rộng kinh doanh từ thương hiệu cá nhân?',
          answer:
            'Khi bạn đã có một nguồn thu nhập ổn định, một cộng đồng trung thành và bạn cảm thấy mình đang dành quá nhiều thời gian cho các công việc vận hành thay vì sáng tạo. Đây là lúc nên xem xét việc tự động hóa, thuê trợ lý hoặc xây dựng đội nhóm.',
        },
        {
          question: 'Làm thế nào để đa dạng hóa nguồn thu nhập?',
          answer:
            'Đừng chỉ dựa vào hợp tác với nhãn hàng. Hãy xem xét việc tạo ra sản phẩm số (ebook, khóa học online), sản phẩm vật lý (merchandise), cung cấp dịch vụ tư vấn, hoặc xây dựng một cộng đồng trả phí (membership).',
        },
        {
          question: 'Tôi có cần thành lập công ty không?',
          answer:
            'Khi thu nhập của bạn tăng lên và bạn bắt đầu thuê người, việc thành lập một hộ kinh doanh cá thể hoặc công ty sẽ giúp bạn chuyên nghiệp hóa hoạt động, quản lý tài chính và tuân thủ các quy định về thuế một cách dễ dàng hơn. Hãy tham khảo ý kiến của luật sư hoặc kế toán.',
        },
        {
          question: 'Những công cụ tự động hóa nào hữu ích cho influencer?',
          answer: 'Các công cụ lập lịch đăng bài (như Later, Buffer), các công cụ quản lý email marketing (như ConvertKit), và các công cụ quản lý dự án (như Trello, Asana) có thể giúp bạn tiết kiệm rất nhiều thời gian và công sức.'
        },
        {
          question: 'Tôi nên thuê ai đầu tiên?',
          answer: 'Vị trí đầu tiên nhiều influencer thuê thường là một trợ lý ảo (Virtual Assistant - VA). Họ có thể giúp bạn các công việc như trả lời email, lập lịch đăng bài, tương tác cơ bản với cộng đồng, và các công việc hành chính khác, giúp bạn có thêm thời gian để sáng tạo.'
        },
        {
          question: 'Làm thế nào để xây dựng một đội nhóm hiệu quả?',
          answer: 'Hãy xác định rõ vai trò và trách nhiệm của từng người. Xây dựng một quy trình làm việc rõ ràng. Giao tiếp thường xuyên và cởi mở. Tin tưởng và trao quyền cho đội nhóm của bạn.'
        },
        {
          question: 'Làm thế nào để biến thương hiệu cá nhân thành một thương hiệu sản phẩm?',
          answer: 'Hãy bắt đầu với một sản phẩm giải quyết được vấn đề cốt lõi của khán giả. Ví dụ, một influencer về fitness có thể ra mắt dòng sản phẩm bột protein hoặc một chương trình tập luyện online. Hãy đảm bảo sản phẩm đó phù hợp với giá trị mà bạn đã xây dựng.'
        },
        {
          question: 'Làm thế nào để quản lý tài chính khi là một influencer?',
          answer: 'Hãy tách biệt tài chính cá nhân và kinh doanh. Ghi chép lại tất cả các khoản thu chi. Dành ra một phần thu nhập để đóng thuế. Hãy làm việc với một kế toán chuyên nghiệp để được tư vấn tốt nhất.'
        },
        {
          question: 'Làm thế nào để tránh bị "burnout" (kiệt sức)?',
          answer: 'Hãy đặt ra ranh giới rõ ràng giữa công việc và cuộc sống. Lên lịch cho những ngày nghỉ không làm việc. Tự động hóa và giao việc. Nhớ rằng bạn không cần phải có mặt trên mọi nền tảng và tham gia mọi xu hướng. Sức khỏe tinh thần của bạn là quan trọng nhất.'
        },
        {
          question: 'Tầm nhìn dài hạn cho một "doanh nghiệp influencer" là gì?',
          answer: 'Tầm nhìn dài hạn có thể là xây dựng một công ty truyền thông, một thương hiệu thương mại điện tử lớn, một nền tảng giáo dục, hoặc một quỹ đầu tư. Mục tiêu là tạo ra một hệ thống có thể hoạt động và tạo ra giá trị ngay cả khi bạn không trực tiếp tham gia vào mọi hoạt động hàng ngày.'
        }
      ],
      careerConnect: {
        name: 'Vân Chi',
        title: 'CEO & Founder',
        company: 'Chi Cosmetics',
        imageUrl: '/placeholder-attraction.svg',
        quote:
          'Xây dựng thương hiệu cá nhân là bước đầu. Xây dựng một doanh nghiệp từ thương hiệu đó mới là sự phát triển bền vững.',
      },
      quizzes: [
        {
          question: 'Đa dạng hóa doanh thu có nghĩa là gì?',
          options: [
            'Chỉ phụ thuộc vào một nguồn thu nhập duy nhất',
            'Tạo ra nhiều nguồn thu nhập khác nhau (quảng cáo, bán sản phẩm, affiliate...)',
            'Không kiếm tiền từ thương hiệu cá nhân',
            'Chỉ làm việc với một nhãn hàng',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Việc có nhiều nguồn thu nhập giúp giảm rủi ro và tăng tính ổn định cho sự nghiệp của một nhà sáng tạo.',
        },
      ],
    },
  ],
};
