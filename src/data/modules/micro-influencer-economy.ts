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
