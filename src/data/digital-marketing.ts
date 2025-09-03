import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';

export interface DigitalMarketingLesson extends BaseLessonData {
  mainContent: {
    introduction: string;
    keyConcepts: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
    practicalApplications: Array<{
      area: string;
      description: string;
      case_study: string;
    }>;
    conclusion: string;
  };
  relatedGames: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

const socialMediaGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'digital-marketing-campaign');
const contentCreatorGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'content-creator-studio');
const aiArtGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'ai-art-studio');
const seoGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'seo-optimization-challenge');

export const digitalMarketingLessons: DigitalMarketingLesson[] = [
  {
    id: 'digital-marketing-fundamentals',
    title: 'Bài 1: Cơ Bản Digital Marketing',
    description:
      'Tìm hiểu khái niệm Digital Marketing, các kênh chính và cách xây dựng chiến lược marketing toàn diện cho doanh nghiệp.',
    videoUrl: 'https://www.youtube.com/watch?v=HjUJf5bKCpU', // GaryVee Social Media Marketing Strategy
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của Digital Marketing',
      'Nắm vững các kênh Digital Marketing chính',
      'Học cách xây dựng buyer persona',
      'Tạo customer journey map',
      'Xây dựng chiến lược marketing 360 độ',
    ],
    prerequisites: ['Kiến thức cơ bản về marketing', 'Hiểu biết về internet và social media'],
    mainContent: {
      introduction:
        'Digital Marketing là một lĩnh vực rộng lớn và năng động, sử dụng các kênh kỹ thuật số để quảng bá sản phẩm hoặc dịch vụ. Bài học này sẽ cung cấp cho bạn nền tảng vững chắc về các khái niệm cốt lõi, các kênh chính và cách xây dựng một chiến lược marketing hiệu quả từ đầu.',
      keyConcepts: [
        {
          title: 'Buyer Persona',
          description:
            'Là hồ sơ chi tiết về khách hàng lý tưởng của bạn, bao gồm thông tin nhân khẩu học, sở thích, thách thức và mục tiêu. Việc xây dựng buyer persona giúp bạn hiểu rõ hơn về đối tượng mục tiêu và tạo ra các chiến dịch marketing phù hợp.',
          examples: [
            'Tạo persona cho một sinh viên đại học quan tâm đến các khóa học lập trình.',
            'Xây dựng persona cho một bà mẹ bỉm sữa tìm kiếm sản phẩm chăm sóc em bé.',
          ],
        },
        {
          title: 'Customer Journey Map',
          description:
            'Là bản đồ trực quan hóa các điểm chạm và trải nghiệm của khách hàng với thương hiệu của bạn, từ giai đoạn nhận biết đến khi trở thành khách hàng trung thành. Nó giúp xác định các cơ hội để cải thiện trải nghiệm khách hàng.',
          examples: [
            'Vẽ bản đồ hành trình cho một khách hàng mua sắm trên trang thương mại điện tử.',
            'Phân tích các điểm chạm của khách hàng khi sử dụng một ứng dụng di động.',
          ],
        },
        {
          title: 'Chiến lược Marketing 360 độ',
          description:
            'Là một cách tiếp cận toàn diện, tích hợp nhiều kênh marketing khác nhau (cả online và offline) để tạo ra một thông điệp nhất quán và trải nghiệm liền mạch cho khách hàng.',
          examples: [
            'Kết hợp quảng cáo trên mạng xã hội, email marketing, và sự kiện offline.',
            'Sử dụng SEO, content marketing và PR để xây dựng thương hiệu.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Startup Công nghệ',
          description:
            'Một startup công nghệ có thể sử dụng digital marketing để tiếp cận khách hàng tiềm năng trên toàn cầu với chi phí thấp, xây dựng cộng đồng người dùng và nhanh chóng xác thực ý tưởng sản phẩm.',
          case_study:
            'Dropbox đã sử dụng một chương trình giới thiệu (referral program) đơn giản để tăng trưởng người dùng một cách chóng mặt mà không cần chi nhiều cho quảng cáo truyền thống.',
        },
        {
          area: 'Thương mại điện tử',
          description:
            'Các doanh nghiệp e-commerce phụ thuộc rất nhiều vào digital marketing để thu hút lưu lượng truy cập, tối ưu hóa tỷ lệ chuyển đổi và xây dựng lòng trung thành của khách hàng thông qua các kênh như SEO, quảng cáo trả phí và email marketing.',
          case_study:
            'Tiki đã đầu tư mạnh vào SEO và content marketing để cạnh tranh với các đối thủ lớn, giúp họ tăng trưởng organic traffic và doanh thu một cách bền vững.',
        },
      ],
      conclusion:
        'Nắm vững các nguyên tắc cơ bản của Digital Marketing là bước đầu tiên và quan trọng nhất để xây dựng sự nghiệp thành công trong lĩnh vực này. Bằng cách hiểu rõ khách hàng và lựa chọn kênh phù hợp, bạn có thể tạo ra những chiến dịch có tác động lớn.',
    },
    vietnamContext: {
      title: 'Bối cảnh Digital Marketing tại Việt Nam',
      content: [
        'Thị trường Digital Marketing Việt Nam đang bùng nổ với tốc độ tăng trưởng hai con số, được thúc đẩy bởi dân số trẻ, tỷ lệ sử dụng internet và smartphone cao, cùng sự phát triển mạnh mẽ của thương mại điện tử và các nền tảng mạng xã hội.',
        '**Tăng trưởng E-commerce:** Các sàn thương mại điện tử như Shopee, Lazada, Tiki và TikTok Shop đang thống trị, tạo ra nhu cầu lớn về các chuyên gia marketing có kỹ năng về quảng cáo trên sàn, SEO và quản lý gian hàng.',
        '**Sự thống trị của Mạng xã hội:** Facebook và Zalo vẫn là các kênh quan trọng, nhưng TikTok đã trở thành nền tảng không thể thiếu để tiếp cận thế hệ Gen Z. Influencer Marketing (KOLs/KOCs) là một phần quan trọng trong các chiến dịch.',
        '**Chuyển đổi số:** Chính phủ và các doanh nghiệp từ lớn đến nhỏ đều đang đẩy mạnh chuyển đổi số, làm tăng nhu cầu về các dịch vụ digital marketing để tiếp cận khách hàng trực tuyến.',
      ],
    },
    careerConnect: {
      name: 'Trần Minh Anh',
      title: 'Digital Marketing Manager',
      company: 'VNG Corporation',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop',
      quote:
        'Minh Anh có hơn 8 năm kinh nghiệm trong ngành, chịu trách nhiệm xây dựng và thực thi chiến lược marketing tổng thể cho các sản phẩm game và ứng dụng của VNG. Công việc của cô bao gồm quản lý ngân sách hàng triệu đô, dẫn dắt một đội ngũ chuyên gia về SEO, SEM, Social Media và phân tích dữ liệu để đạt được các mục tiêu tăng trưởng người dùng và doanh thu.',
    },
    quizzes: [
      {
        question: 'Buyer Persona là gì?',
        options: [
          'Một khách hàng thực tế đã mua sản phẩm.',
          'Hồ sơ chi tiết về khách hàng lý tưởng của bạn.',
          'Một nhân vật trong một chiến dịch quảng cáo.',
          'Bản đồ hành trình của khách hàng.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Buyer Persona là một hồ sơ hư cấu nhưng dựa trên dữ liệu thực tế về khách hàng mục tiêu, giúp doanh nghiệp hiểu rõ hơn về đối tượng họ muốn tiếp cận.',
      },
      {
        question: 'Kênh nào sau đây KHÔNG phải là một kênh Digital Marketing chính?',
        options: [
          'SEO (Search Engine Optimization)',
          'Social Media Marketing',
          'Email Marketing',
          'Phát tờ rơi (Leaflet distribution)',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Phát tờ rơi là một hình thức marketing truyền thống (offline), trong khi các lựa chọn còn lại đều là các kênh marketing kỹ thuật số (online).',
      },
    ],
    relatedGames: socialMediaGame
      ? [
          {
            id: socialMediaGame.id,
            name: socialMediaGame.title,
            description: socialMediaGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Xây dựng Buyer Persona',
        description: 'Tạo buyer persona chi tiết cho một doanh nghiệp thực tế',
        difficulty: 'Cơ bản',
        solution: `# Buyer Persona Template

## Thông tin cơ bản
- Tên: Nguyễn Văn A
- Tuổi: 28-35
- Nghề nghiệp: Marketing Manager
- Thu nhập: 15-25 triệu VNĐ/tháng
- Khu vực: TP.HCM, Hà Nội

## Thách thức
- Cần tăng hiệu quả marketing campaigns
- Khó theo dõi ROI của các kênh marketing
- Thiếu kiến thức về digital tools

## Mục tiêu
- Tăng traffic website 50%
- Cải thiện conversion rate
- Học sử dụng marketing automation

## Kênh tiếp cận
- LinkedIn, Facebook Groups
- Marketing blogs, webinars
- Industry events và conferences`,
        materials: [
          'Research đối tượng khách hàng thực tế',
          'Sử dụng dữ liệu demographics và psychographics',
          'Xác định pain points và goals cụ thể',
        ],
        expectedResults: 'Một buyer persona hoàn chỉnh với ảnh đại diện, thông tin chi tiết và kế hoạch tiếp cận',
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Tạo customer journey map cho quy trình mua hàng online',
        difficulty: 'Trung bình',
        solution: `# Customer Journey Map

## Giai đoạn Awareness
**Touchpoints:** Google Search, Social Media Ads, Word of mouth
**Customer Actions:** Tìm kiếm thông tin, đọc reviews
**Emotions:** Tò mò, lo lắng về chất lượng
**Opportunities:** SEO content, retargeting ads

## Giai đoạn Consideration  
**Touchpoints:** Website, Product pages, Comparison sites
**Customer Actions:** So sánh sản phẩm, đọc specifications
**Emotions:** Quan tâm, cần thêm thông tin
**Opportunities:** Product demos, customer testimonials

## Giai đoạn Decision
**Touchpoints:** Checkout page, Customer service, Reviews
**Customer Actions:** Thêm vào giỏ hàng, liên hệ hỗ trợ
**Emotions:** Hứng thú, lo lắng về thanh toán
**Opportunities:** Special offers, trust badges, live chat

## Giai đoạn Retention
**Touchpoints:** Email, Mobile app, Customer support
**Customer Actions:** Sử dụng sản phẩm, đánh giá
**Emotions:** Hài lòng hoặc thất vọng
**Opportunities:** Follow-up emails, loyalty programs`,
        materials: [
          'Xác định các touchpoints chính',
          'Mô tả customer actions tại mỗi stage',
          'Phân tích emotions và pain points',
          'Đề xuất optimization opportunities',
        ],
        expectedResults: 'Journey map trực quan với các insights và action items cụ thể',
      },
    ],
    realWorldApplications: [
      'Xây dựng chiến lược marketing cho startup công nghệ',
      'Tối ưu hóa funnel bán hàng cho e-commerce',
      'Phát triển content strategy cho B2B company',
      'Thiết kế customer experience cho mobile app',
      'Xây dựng brand awareness cho local business',
    ],
    resources: [
      {
        title: 'Google Digital Marketing Course',
        url: 'https://skillshop.withgoogle.com',
        type: 'tool',
      },
      {
        title: 'HubSpot Marketing Hub',
        url: 'https://hubspot.com',
        type: 'tool',
      },
      {
        title: 'Digital Marketing Trends 2024',
        url: 'https://blog.hubspot.com/marketing/digital-marketing-trends',
        type: 'article',
      },
    ],
    caseStudies: [
      {
        title: 'Tiki tăng 300% traffic từ SEO',
        organization: 'Tiki.vn',
        problem: 'Cạnh tranh gay gắt với Shopee và Lazada trong thị trường e-commerce Việt Nam',
        solution: 'Tối ưu SEO content, xây dựng backlink strategy và cải thiện user experience',
        impact: 'Tăng 300% organic traffic, cải thiện 45% conversion rate, tăng 120% revenue từ organic search',
        innovations: [
          'Long-tail keywords quan trọng hơn generic keywords',
          'User experience directly impact search rankings',
          'Content quality là yếu tố then chốt cho SEO success',
        ],
      },
    ],
  },
  {
    id: 'social-media-marketing',
    title: 'Bài 2: Social Media Marketing',
    description:
      'Chinh phục các nền tảng mạng xã hội với chiến lược content hiệu quả, community building và social commerce.',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU',
    imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '100 phút',
    objectives: [
      'Nắm vững đặc điểm của từng nền tảng social media',
      'Xây dựng content strategy hiệu quả',
      'Học cách tạo content viral và engaging',
      'Quản lý community và customer service',
      'Đo lường và phân tích hiệu quả social media',
    ],
    prerequisites: ['Hiểu biết cơ bản về social media', 'Kỹ năng viết content'],
    mainContent: {
      introduction:
        'Social Media Marketing không chỉ là đăng bài lên Facebook. Đó là nghệ thuật và khoa học của việc sử dụng các nền tảng mạng xã hội để xây dựng thương hiệu, kết nối với khách hàng và thúc đẩy mục tiêu kinh doanh. Bài học này sẽ hướng dẫn bạn cách làm chủ các nền tảng phổ biến và tạo ra các chiến dịch có sức ảnh hưởng.',
      keyConcepts: [
        {
          title: 'Content Strategy',
          description:
            'Là kế hoạch chi tiết về loại nội dung bạn sẽ tạo, nền tảng bạn sẽ sử dụng và lịch trình đăng bài. Một chiến lược nội dung tốt cần cân bằng giữa việc cung cấp giá trị cho khán giả và quảng bá thương hiệu.',
          examples: [
            'Lên kế hoạch nội dung theo chủ đề hàng tuần (ví dụ: "Thứ Hai Mẹo Vặt", "Thứ Sáu Hỏi Đáp").',
            'Sử dụng quy tắc 80/20: 80% nội dung giá trị, 20% nội dung quảng cáo.',
          ],
        },
        {
          title: 'Community Building',
          description:
            'Không chỉ là thu hút người theo dõi, mà là xây dựng một cộng đồng trung thành và tương tác xung quanh thương hiệu của bạn. Điều này bao gồm việc trả lời bình luận, tạo các cuộc thảo luận và khuyến khích nội dung do người dùng tạo ra.',
          examples: [
            'Tổ chức các buổi livestream Q&A hàng tuần.',
            'Tạo một nhóm Facebook độc quyền cho khách hàng thân thiết.',
          ],
        },
        {
          title: 'Social Commerce',
          description:
            'Là việc tích hợp trải nghiệm mua sắm trực tiếp vào các nền tảng mạng xã hội, cho phép người dùng khám phá và mua sản phẩm mà không cần rời khỏi ứng dụng. Đây là một xu hướng ngày càng phát triển.',
          examples: [
            'Sử dụng tính năng Instagram Shopping để tag sản phẩm trên ảnh.',
            'Thiết lập cửa hàng trên Facebook (Facebook Shop).',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Thương hiệu thời trang',
          description:
            'Một thương hiệu thời trang có thể sử dụng Instagram và TikTok để giới thiệu các bộ sưu tập mới thông qua hình ảnh và video bắt mắt, hợp tác với các influencer và chạy các chiến dịch social commerce.',
          case_study:
            'Các thương hiệu như Zara và H&M sử dụng Instagram để tạo lookbook trực tuyến, cho phép người dùng "mua ngay" các sản phẩm họ thấy trên feed.',
        },
        {
          area: 'Nhà hàng địa phương',
          description:
            'Một nhà hàng có thể sử dụng Facebook và Instagram để đăng ảnh món ăn hấp dẫn, chia sẻ đánh giá của khách hàng, chạy quảng cáo nhắm mục tiêu đến những người ở gần và thông báo các chương trình khuyến mãi đặc biệt.',
          case_study:
            'Nhiều quán cà phê "sống ảo" đã trở nên nổi tiếng nhờ vào việc khách hàng check-in và chia sẻ hình ảnh trên Instagram, tạo ra hiệu ứng marketing truyền miệng mạnh mẽ.',
        },
      ],
      conclusion:
        'Social Media Marketing là một công cụ mạnh mẽ để kết nối với khách hàng ở cấp độ cá nhân. Bằng cách tạo ra nội dung hấp dẫn và xây dựng một cộng đồng thực sự, bạn có thể biến những người theo dõi thành những người ủng hộ thương hiệu nhiệt thành.',
    },
    vietnamContext: {
      title: 'Bối cảnh Social Media tại Việt Nam',
      content: [
        'Việt Nam là một trong những quốc gia có tỷ lệ sử dụng mạng xã hội cao nhất thế giới. Đây là kênh không thể thiếu để các thương hiệu tiếp cận và tương tác với khách hàng, đặc biệt là giới trẻ.',
        '**Sự thống trị của Facebook & Zalo:** Facebook vẫn là nền tảng lớn nhất về số lượng người dùng. Zalo là ứng dụng nhắn tin và mạng xã hội phổ biến, đặc biệt hiệu quả cho việc chăm sóc khách hàng và marketing địa phương.',
        '**Cơn sốt TikTok:** TikTok đã bùng nổ và trở thành nền tảng video ngắn hàng đầu, là kênh marketing chủ lực để tiếp cận Gen Z thông qua các video giải trí, các thử thách (challenge) và hợp tác với các nhà sáng tạo nội dung.',
        '**Quyền lực của KOC/KOL:** Key Opinion Consumers (KOC) và Key Opinion Leaders (KOL) có ảnh hưởng rất lớn đến quyết định mua hàng. Các chiến dịch thành công thường kết hợp với các influencer phù hợp để tăng độ tin cậy và lan tỏa.',
        '**Livestream Bán hàng:** Bán hàng qua livestream trên Facebook và TikTok là một hình thức cực kỳ phổ biến, kết hợp giải trí và thương mại để tạo ra doanh số ấn tượng trong thời gian ngắn.',
      ],
    },
    careerConnect: {
      name: 'Lê Thảo Nhi',
      title: 'Social Media Specialist',
      company: "Biti's",
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote:
        "Thảo Nhi là người đứng sau các chiến dịch social media thành công của Biti's Hunter. Cô chịu trách nhiệm lên kế hoạch nội dung, quản lý cộng đồng trên các nền tảng Facebook, Instagram, TikTok, và làm việc trực tiếp với các KOLs để tạo ra các chiến dịch viral, góp phần làm mới hình ảnh thương hiệu và tiếp cận thành công thế hệ khách hàng trẻ.",
    },
    quizzes: [
      {
        question: 'Quy tắc 80/20 trong content strategy nghĩa là gì?',
        options: [
          '80% nội dung quảng cáo, 20% nội dung giá trị.',
          '80% nội dung video, 20% nội dung hình ảnh.',
          '80% nội dung giá trị, 20% nội dung quảng cáo.',
          '80% bài đăng vào ban ngày, 20% vào ban đêm.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Quy tắc 80/20 gợi ý rằng phần lớn nội dung của bạn nên cung cấp giá trị (giáo dục, giải trí) cho khán giả, và chỉ một phần nhỏ nên trực tiếp quảng bá sản phẩm/dịch vụ.',
      },
      {
        question: 'Tại Việt Nam, nền tảng nào được xem là "sân nhà" và rất hiệu quả cho marketing địa phương?',
        options: ['LinkedIn', 'Zalo', 'Twitter', 'Pinterest'],
        correctAnswerIndex: 1,
        explanation:
          'Zalo là ứng dụng nhắn tin và mạng xã hội do Việt Nam phát triển, rất phổ biến và có các tính năng như Zalo Official Account, Zalo Shop hỗ trợ tốt cho các doanh nghiệp địa phương.',
      },
    ],
    relatedGames: socialMediaGame
      ? [
          {
            id: socialMediaGame.id,
            name: socialMediaGame.title,
            description: socialMediaGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Content Calendar Planning',
        description: 'Tạo content calendar 1 tháng cho fanpage Facebook của một thương hiệu',
        difficulty: 'Cơ bản',
        solution: `# Content Calendar Template - Tháng 1/2024

## Tuần 1: Brand Awareness Week
**Thứ 2:** Brand story post + behind-the-scenes video
**Thứ 4:** Product spotlight + customer testimonial
**Thứ 6:** Fun fact Friday + interactive poll
**Chủ nhật:** User-generated content repost

## Tuần 2: Product Focus Week  
**Thứ 2:** New product announcement + teaser video
**Thứ 3:** Product tutorial + how-to content
**Thứ 5:** Product comparison + infographic
**Thứ 7:** Customer review compilation

## Tuần 3: Community Engagement Week
**Thứ 2:** Ask Me Anything (AMA) session
**Thứ 4:** Contest announcement + engagement post
**Thứ 6:** Industry trend discussion + thought leadership
**Chủ nhật:** Community highlights + appreciation post

## Tuần 4: Sales & Promotion Week
**Thứ 2:** Flash sale announcement + countdown
**Thứ 3:** Limited time offer + urgency content
**Thứ 5:** Customer success stories + social proof
**Thứ 7:** Month recap + next month preview

## Content Types Distribution:
- 40% Educational content
- 30% Product-focused content  
- 20% Entertainment content
- 10% Promotional content`,
        materials: [
          'Lên kế hoạch content cho 4 tuần',
          'Cân bằng các loại content khác nhau',
          'Xác định optimal posting times',
          'Include call-to-actions cho mỗi post',
        ],
        expectedResults: 'Content calendar chi tiết với descriptions, hashtags và posting schedule',
      },
    ],
    realWorldApplications: [
      'Xây dựng thương hiệu cá nhân trên LinkedIn',
      'Phát triển fanpage Facebook cho local business',
      'Tạo viral marketing campaigns trên TikTok',
      'Quản lý social commerce trên Instagram',
      'Crisis management trong social media',
    ],
    resources: [
      {
        title: 'Facebook Blueprint',
        url: 'https://www.facebook.com/business/learn',
        type: 'tool',
      },
      {
        title: 'Later Social Media Calendar',
        url: 'https://later.com',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Highlands Coffee viral TikTok campaign',
        organization: 'Highlands Coffee',
        problem: 'Tiếp cận Gen Z và tạo buzz cho sản phẩm mới',
        solution: 'Tạo TikTok challenge với hashtag branded và collaborate với influencers',
        impact: '10M+ views, 50K+ user-generated videos, tăng 25% sales trong tháng campaign',
        innovations: [
          'Gen Z responds well to authentic, user-generated content',
          'Hashtag challenges can create massive organic reach',
          'Influencer collaboration amplifies campaign effectiveness',
        ],
      },
    ],
  },
  {
    id: 'content-marketing-strategy',
    title: 'Bài 3: Content Marketing & Storytelling',
    description:
      'Học nghệ thuật kể chuyện và tạo nội dung hấp dẫn. Từ blog posts đến video content, master các format content khác nhau.',
    videoUrl: 'https://www.youtube.com/watch?v=TkskQD1Lt4A',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '120 phút',
    objectives: [
      'Hiểu content marketing strategy và content funnel',
      'Học storytelling techniques và brand narrative',
      'Tạo content cho different stages of buyer journey',
      'Optimize content cho SEO và user engagement',
      'Đo lường content performance và ROI',
    ],
    prerequisites: ['Kỹ năng viết cơ bản', 'Hiểu về target audience'],
    mainContent: {
      introduction:
        'Content Marketing không chỉ là viết bài. Đó là việc tạo ra và phân phối nội dung có giá trị, liên quan và nhất quán để thu hút và giữ chân một đối tượng khán giả được xác định rõ ràng — và cuối cùng, để thúc đẩy hành động của khách hàng mang lại lợi nhuận. Bài học này sẽ dạy bạn cách kết hợp nghệ thuật kể chuyện với chiến lược để tạo ra nội dung thực sự nổi bật.',
      keyConcepts: [
        {
          title: 'Content Funnel (Phễu nội dung)',
          description:
            'Là một mô hình mô tả hành trình của khách hàng từ khi họ lần đầu tiên biết đến thương hiệu của bạn (Top of Funnel - TOFU) đến khi họ đưa ra quyết định mua hàng (Bottom of Funnel - BOFU). Mỗi giai đoạn của phễu đòi hỏi một loại nội dung khác nhau.',
          examples: [
            'TOFU: Bài blog, infographic, video giải trí.',
            'MOFU (Middle of Funnel): Ebook, webinar, case study.',
            'BOFU: Demo sản phẩm, trang báo giá, đánh giá của khách hàng.',
          ],
        },
        {
          title: 'Storytelling (Kể chuyện thương hiệu)',
          description:
            'Là việc sử dụng một câu chuyện để kết nối thương hiệu của bạn với khách hàng ở cấp độ cảm xúc. Một câu chuyện hay có thể làm cho thương hiệu của bạn trở nên đáng nhớ, đáng tin cậy và khác biệt so với đối thủ.',
          examples: [
            'Câu chuyện về người sáng lập và lý do họ bắt đầu công ty.',
            'Câu chuyện thành công của khách hàng sau khi sử dụng sản phẩm của bạn.',
          ],
        },
        {
          title: 'Content Repurposing (Tái sử dụng nội dung)',
          description:
            'Là quá trình lấy một mẩu nội dung và biến nó thành nhiều định dạng khác nhau để phân phối trên các kênh khác nhau. Điều này giúp bạn tối đa hóa giá trị từ công sức tạo nội dung ban đầu.',
          examples: [
            'Biến một bài blog dài thành một chuỗi các bài đăng trên mạng xã hội.',
            'Chuyển một buổi webinar thành một video YouTube, một podcast và một infographic.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Công ty phần mềm B2B',
          description:
            'Một công ty SaaS có thể sử dụng content marketing để giáo dục thị trường về vấn đề mà sản phẩm của họ giải quyết, xây dựng vị thế chuyên gia trong ngành và tạo ra các khách hàng tiềm năng chất lượng cao thông qua các ebook và webinar.',
          case_study:
            'HubSpot đã xây dựng cả một đế chế bằng cách cung cấp miễn phí một lượng lớn nội dung marketing và bán hàng chất lượng cao, thu hút hàng triệu người dùng và biến họ thành khách hàng.',
        },
        {
          area: 'Thương hiệu tiêu dùng (B2C)',
          description:
            'Một thương hiệu thực phẩm có thể tạo ra các blog về công thức nấu ăn, video hướng dẫn trên YouTube và các thử thách nấu ăn trên mạng xã hội để thu hút cộng đồng những người yêu thích ẩm thực và quảng bá sản phẩm của họ một cách tự nhiên.',
          case_study:
            'Red Bull không bán nước tăng lực, họ bán một lối sống phiêu lưu mạo hiểm thông qua việc tài trợ và tạo ra nội dung về các môn thể thao mạo hiểm, từ đó xây dựng một thương hiệu toàn cầu mạnh mẽ.',
        },
      ],
      conclusion:
        'Content Marketing và Storytelling là trái tim của marketing hiện đại. Bằng cách cung cấp giá trị trước khi yêu cầu bất cứ điều gì, bạn xây dựng được niềm tin và mối quan hệ lâu dài với khách hàng, điều mà quảng cáo truyền thống khó có thể làm được.',
    },
    vietnamContext: {
      title: 'Bối cảnh Content Marketing tại Việt Nam',
      content: [
        'Tại Việt Nam, content marketing đang phát triển vượt bậc, không chỉ dừng lại ở viết bài SEO mà đã mở rộng ra nhiều định dạng sáng tạo và có tính bản địa hóa cao.',
        "**Video là vua:** Video ngắn (TikTok, YouTube Shorts, Facebook Reels) và video dài (web series, phim ngắn) là các định dạng thu hút sự chú ý nhiều nhất. Các thương hiệu lớn như Biti's, Viettel đã rất thành công với các chiến dịch storytelling qua video.",
        '**Nội dung bản địa và theo trend:** Nội dung cần phải "bắt trend" và sử dụng ngôn ngữ, văn hóa gần gũi với người Việt. Các meme, các câu nói viral trên mạng xã hội thường được các thương hiệu tích hợp vào nội dung của mình một cách khéo léo.',
        '**Podcast và nội dung âm thanh:** Podcast đang dần trở nên phổ biến, đặc biệt trong các lĩnh vực phát triển bản thân, kinh doanh và công nghệ. Các nền tảng như Spotify và Apple Podcasts đang có lượng người nghe tăng trưởng tốt tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hà Linh',
      title: 'Content Strategist',
      company: 'Vietcetera Media',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
      quote:
        'Hà Linh chịu trách nhiệm xây dựng chiến lược nội dung dài hạn cho các kênh của Vietcetera, một trong những công ty truyền thông có ảnh hưởng nhất với giới trẻ Việt. Cô phân tích insight của độc giả, xác định các chủ đề tiềm năng, và phối hợp với đội ngũ biên tập viên, sản xuất video để tạo ra các tuyến bài viết, series podcast và video có giá trị, thu hút hàng triệu lượt xem mỗi tháng.',
    },
    quizzes: [
      {
        question:
          'Giai đoạn nào của Content Funnel tập trung vào việc cung cấp các nội dung như Ebook, webinar, case study?',
        options: ['Top of Funnel (TOFU)', 'Middle of Funnel (MOFU)', 'Bottom of Funnel (BOFU)', 'Post-Funnel'],
        correctAnswerIndex: 1,
        explanation:
          'MOFU (Giai đoạn cân nhắc) là nơi bạn cung cấp các nội dung sâu hơn để giúp khách hàng tiềm năng đánh giá giải pháp của bạn, chẳng hạn như case study, webinar, ebook.',
      },
      {
        question: 'Ví dụ nào sau đây là một hình thức của Content Repurposing?',
        options: [
          'Viết một bài blog hoàn toàn mới.',
          'Xóa một bài blog cũ.',
          'Biến một bài blog thành một chuỗi bài đăng trên Instagram.',
          'Chạy quảng cáo cho một bài blog.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Content Repurposing là việc tái sử dụng một nội dung gốc và chuyển đổi nó sang các định dạng khác để tiếp cận khán giả trên nhiều kênh khác nhau.',
      },
    ],
    relatedGames: contentCreatorGame
      ? [
          {
            id: contentCreatorGame.id,
            name: contentCreatorGame.title,
            description: contentCreatorGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Brand Storytelling Framework',
        description: 'Tạo brand story compelling cho một startup công nghệ',
        difficulty: 'Trung bình',
        solution: `# Brand Story Framework: EcoTech Solutions

## Hero's Journey Structure

### 1. The Ordinary World
"Năm 2020, founder Minh làm việc tại một công ty công nghệ lớn ở TP.HCM. Mỗi ngày anh chứng kiến lượng rác thải điện tử khổng lồ từ các thiết bị cũ..."

### 2. The Call to Adventure  
"Một ngày, con gái 5 tuổi của Minh hỏi: 'Bố ơi, tại sao trái đất ngày càng nóng?'. Câu hỏi đó như một tia sét đánh thức Minh về trách nhiệm với môi trường..."

### 3. The Challenge
"Minh nhận ra thách thức lớn: làm sao tái chế thiết bị điện tử hiệu quả mà vẫn profitable? 90% startup trong lĩnh vực này thất bại trong 2 năm đầu..."

### 4. The Transformation
"Thay vì bỏ cuộc, Minh đầu tư 2 năm research công nghệ AI để tự động phân loại và xử lý e-waste. Từ garage nhỏ, team phát triển algorithm breakthrough..."

### 5. The New World
"Hôm nay, EcoTech đã giúp tái chế 100,000+ thiết bị, giảm 500 tấn CO2, và tạo việc làm cho 200+ người. Nhưng đây chỉ là bước đầu của hành trình..."

## Key Story Elements:
- **Relatable Hero:** Founder with personal motivation
- **Clear Conflict:** Environmental crisis vs business viability  
- **Emotional Stakes:** Future for next generation
- **Transformation:** From employee to social entrepreneur
- **Ongoing Mission:** Bigger vision beyond current success

## Story Applications:
- Website About Us page
- Investor pitch deck
- Social media content series
- PR and media interviews
- Employee onboarding materials`,
        materials: [
          "Sử dụng hero's journey structure",
          'Include personal và emotional elements',
          'Connect đến larger purpose và mission',
          'Make it relatable cho target audience',
        ],
        expectedResults: 'Complete brand story với clear narrative arc và emotional connection',
      },
    ],
    realWorldApplications: [
      'Xây dựng content strategy cho B2B SaaS company',
      'Tạo blog content series để nurture leads',
      'Phát triển video content cho YouTube channel',
      'Viết case studies và customer success stories',
      'Tạo email marketing campaigns với storytelling',
    ],
    resources: [
      {
        title: 'StoryBrand Framework',
        url: 'https://storybrand.com',
        type: 'book',
      },
      {
        title: 'Content Marketing Institute',
        url: 'https://contentmarketinginstitute.com',
        type: 'article',
      },
    ],
    caseStudies: [
      {
        title: 'Dollar Shave Club viral video success',
        organization: 'Dollar Shave Club',
        problem: 'Compete với Gillette trong thị trường razor đã saturated',
        solution: 'Tạo viral launch video với humor và clear value proposition',
        impact: '26M+ views, 12,000 orders trong 48 giờ đầu, $1B acquisition bởi Unilever',
        innovations: [
          'Humor can be powerful differentiator trong commodity market',
          'Clear value proposition delivered entertainingly',
          'Authentic founder storytelling builds trust',
        ],
      },
    ],
  },
  {
    id: 'seo-search-marketing',
    title: 'Bài 4: SEO & Search Marketing',
    description:
      'Chinh phục Google với SEO strategies hiện đại. Từ keyword research đến technical SEO và link building.',
    videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '130 phút',
    objectives: [
      'Hiểu search engine algorithms và ranking factors',
      'Thực hiện keyword research và competitive analysis',
      'Optimize on-page và technical SEO',
      'Xây dựng backlink strategy và domain authority',
      'Track SEO performance và ROI',
    ],
    prerequisites: ['Hiểu biết về websites và HTML cơ bản', 'Kỹ năng phân tích dữ liệu'],
    mainContent: {
      introduction:
        'Tối ưu hóa Công cụ Tìm kiếm (SEO) là quá trình cải thiện trang web của bạn để tăng khả năng hiển thị của nó khi mọi người tìm kiếm các sản phẩm hoặc dịch vụ liên quan đến doanh nghiệp của bạn trong Google, Bing và các công cụ tìm kiếm khác. SEO không phải là một thủ thuật, mà là một tập hợp các phương pháp hay nhất giúp công cụ tìm kiếm hiểu và trình bày nội dung của bạn. Bài học này sẽ giải mã các yếu tố phức tạp của SEO thành các bước có thể hành động.',
      keyConcepts: [
        {
          title: 'On-Page SEO',
          description:
            'Là việc tối ưu hóa các yếu-tố-trên-trang-web của bạn, chẳng hạn như thẻ tiêu đề, mô tả meta, tiêu đề và nội dung. Mục tiêu là làm cho nội dung của bạn vừa thân thiện với công cụ tìm kiếm, vừa hấp dẫn đối với người dùng.',
          examples: [
            'Đặt từ khóa chính vào thẻ tiêu đề và H1.',
            'Viết mô tả meta hấp dẫn để tăng tỷ lệ nhấp chuột.',
            'Tối ưu hóa hình ảnh bằng cách sử dụng thẻ alt.',
          ],
        },
        {
          title: 'Off-Page SEO',
          description:
            'Bao gồm các hoạt động được thực hiện bên ngoài trang web của bạn để tác động đến thứ hạng của bạn trong các trang kết quả của công cụ tìm kiếm (SERPs). Yếu tố quan trọng nhất của Off-Page SEO là xây dựng liên kết ngược (backlink).',
          examples: [
            'Viết bài đăng của khách (guest post) trên các blog có uy tín trong ngành.',
            'Được đề cập trên các trang tin tức hoặc ấn phẩm trực tuyến.',
            'Xây dựng hồ sơ trên các danh bạ doanh nghiệp địa phương.',
          ],
        },
        {
          title: 'Technical SEO',
          description:
            'Đề cập đến việc tối ưu hóa các khía cạnh kỹ thuật của trang web của bạn để giúp các công cụ tìm kiếm thu thập dữ liệu và lập chỉ mục trang web của bạn hiệu quả hơn. Điều này bao gồm tốc độ trang, tính thân thiện với thiết bị di động, cấu trúc trang web và dữ liệu có cấu trúc.',
          examples: [
            'Cải thiện tốc độ tải trang bằng cách nén hình ảnh.',
            'Sử dụng tệp robots.txt để hướng dẫn trình thu thập thông tin của công cụ tìm kiếm.',
            'Triển khai schema markup để giúp Google hiểu rõ hơn về nội dung của bạn.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Trang web thương mại điện tử',
          description:
            'Một cửa hàng trực tuyến có thể sử dụng SEO để xếp hạng cho các từ khóa sản phẩm cụ thể, thu hút những người mua có ý định cao và tăng doanh số bán hàng trực tiếp từ các công cụ tìm kiếm.',
          case_study:
            'Shopee và Lazada đã đầu tư rất lớn vào SEO cho hàng triệu trang sản phẩm của họ, cho phép họ thống trị các kết quả tìm kiếm cho các truy vấn mua sắm ở Việt Nam.',
        },
        {
          area: 'Doanh nghiệp địa phương',
          description:
            'Một phòng khám nha khoa hoặc một nhà hàng có thể sử dụng Local SEO để xuất hiện trong "map pack" của Google khi người dùng tìm kiếm "nha sĩ gần đây" hoặc "nhà hàng ý ở quận 1", thu hút khách hàng trong khu vực của họ.',
          case_study:
            'Nhiều doanh nghiệp nhỏ đã tăng gấp đôi lượng khách hàng ghé thăm chỉ bằng cách tối ưu hóa hồ sơ Google Business Profile và thu thập các đánh giá tích cực.',
        },
      ],
      conclusion:
        'SEO là một cuộc marathon, không phải là một cuộc chạy nước rút. Bằng cách liên tục tạo ra nội dung chất lượng cao và tuân thủ các phương pháp hay nhất về kỹ thuật, bạn có thể xây dựng một nguồn lưu lượng truy cập không phải trả tiền bền vững và có giá trị, đây là một trong những tài sản quý giá nhất trong marketing kỹ thuật số.',
    },
    vietnamContext: {
      title: 'Bối cảnh SEO tại Việt Nam',
      content: [
        'SEO tại Việt Nam là một lĩnh vực cực kỳ cạnh tranh, đặc biệt trong các ngành như e-commerce, du lịch, và bất động sản. Google là công cụ tìm kiếm thống trị tuyệt đối.',
        '**Ưu tiên Mobile-First:** Với phần lớn người dùng truy cập internet qua điện thoại, việc tối ưu hóa cho thiết bị di động (tốc độ tải trang, giao diện responsive) là yếu tố sống còn để có thứ hạng tốt.',
        '**Tối ưu cho từ khóa tiếng Việt:** Việc nghiên cứu và tối ưu cho các từ khóa tiếng Việt có dấu và không dấu, cũng như các từ địa phương và từ lóng, là rất quan trọng để tiếp cận đúng đối tượng.',
        '**Local SEO và Google Business Profile:** Đối với các doanh nghiệp có địa điểm thực tế, việc tối ưu hóa Google Business Profile (trước đây là Google My Business) để xuất hiện trên bản đồ là cực kỳ quan trọng để thu hút khách hàng địa phương.',
        '**Xây dựng backlink chất lượng:** Các công cụ tìm kiếm ngày càng thông minh hơn trong việc đánh giá chất lượng backlink. Việc xây dựng liên kết từ các trang báo chí uy tín, các blog chuyên ngành tại Việt Nam mang lại giá trị cao hơn nhiều so với các backlink số lượng lớn nhưng kém chất lượng.',
      ],
    },
    careerConnect: {
      name: 'Phạm Hoàng Long',
      title: 'SEO Team Leader',
      company: 'FPT Online',
      imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop',
      quote:
        'Hoàng Long dẫn dắt đội ngũ SEO chịu trách nhiệm cho việc tăng trưởng traffic tự nhiên của các trang tin tức lớn như VnExpress. Anh chuyên sâu về Technical SEO, phân tích và tối ưu hóa cấu trúc website hàng triệu trang, xây dựng chiến lược nội dung dựa trên dữ liệu tìm kiếm để đảm bảo VnExpress luôn đứng đầu trong các kết quả tìm kiếm cho các tin tức nóng hổi.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây thuộc về On-Page SEO?',
        options: [
          'Xây dựng backlink từ các trang khác.',
          'Tối ưu hóa thẻ tiêu đề (title tag) của trang.',
          'Chia sẻ bài viết lên mạng xã hội.',
          'Chạy quảng cáo Google Ads.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'On-Page SEO bao gồm các hoạt động tối ưu hóa được thực hiện trực tiếp trên trang web của bạn, như tối ưu thẻ tiêu đề, nội dung, hình ảnh.',
      },
      {
        question: 'Technical SEO KHÔNG bao gồm hoạt động nào sau đây?',
        options: [
          'Cải thiện tốc độ tải trang.',
          'Viết nội dung cho bài blog.',
          'Tạo sitemap.xml cho website.',
          'Tối ưu hóa file robots.txt.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Viết nội dung thuộc về Content và On-Page SEO. Technical SEO tập trung vào các khía cạnh kỹ thuật của website để giúp công cụ tìm kiếm thu thập và lập chỉ mục hiệu quả hơn.',
      },
    ],
    relatedGames: seoGame
      ? [
          {
            id: seoGame.id,
            name: seoGame.title,
            description: seoGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'SEO Audit & Strategy',
        description: 'Thực hiện SEO audit toàn diện cho một website thương mại điện tử',
        difficulty: 'Nâng cao',
        solution: `# SEO Audit Report: TechStore.vn

## 1. Technical SEO Analysis

### Site Speed Issues:
- Page Load Time: 4.2s (Slow - should be <3s)
- Largest Contentful Paint: 3.8s
- First Input Delay: 180ms
- Cumulative Layout Shift: 0.15

**Recommendations:**
- Optimize images (convert to WebP format)
- Enable browser caching
- Minify CSS and JavaScript
- Implement CDN

### Mobile Friendliness:
- Mobile-Friendly Test: PASS
- But viewport issues on product pages
- Touch elements too close together

## 2. On-Page SEO Analysis

### Content Issues:
- 23% pages missing meta descriptions
- 15% pages with duplicate title tags
- Thin content on category pages (<300 words)
- Missing H1 tags on 8% of pages

### Keyword Optimization:
- Primary keywords not in title tags
- No keyword optimization for product descriptions
- Missing internal linking strategy

## 3. Off-Page SEO Analysis

### Backlink Profile:
- Domain Rating: 28/100 (Low)
- Total Backlinks: 1,247
- Referring Domains: 89
- 67% follow links, 33% nofollow

### Link Quality Issues:
- 15% links from low-quality directories
- Missing links from industry publications
- No influencer collaborations

## 4. SEO Strategy Recommendations

### Phase 1 (Month 1-2): Technical Foundation
1. Fix site speed issues
2. Implement proper meta tags
3. Optimize internal linking
4. Set up Google Search Console properly

### Phase 2 (Month 2-4): Content Optimization  
1. Keyword research for top 50 products
2. Rewrite product descriptions
3. Create category page content
4. Develop blog content strategy

### Phase 3 (Month 4-6): Authority Building
1. Guest posting on industry blogs
2. Influencer collaboration outreach
3. Digital PR campaigns
4. Local SEO optimization

## Expected Results:
- 40% increase in organic traffic
- 25% improvement in average ranking position
- 60% increase in organic conversions
- ROI: 300% within 6 months`,
        materials: [
          'Analyze technical SEO factors',
          'Review on-page optimization',
          'Assess backlink profile quality',
          'Create prioritized action plan',
        ],
        expectedResults: 'Detailed SEO audit report với actionable recommendations và timeline',
      },
    ],
    realWorldApplications: [
      'Tăng organic traffic cho e-commerce website',
      'Local SEO cho multi-location business',
      'SEO cho SaaS product pages',
      'Enterprise SEO strategy development',
      'SEO crisis management và penalty recovery',
    ],
    resources: [
      {
        title: 'Google Search Central',
        url: 'https://developers.google.com/search',
        type: 'article',
      },
      {
        title: 'Ahrefs SEO Toolset',
        url: 'https://ahrefs.com',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Shopee SEO domination in Vietnam',
        organization: 'Shopee Vietnam',
        problem: 'Compete với Lazada và established local players trong Vietnamese e-commerce',
        solution: 'Aggressive SEO strategy focusing on long-tail product keywords và local search optimization',
        impact: '500% increase in organic traffic, #1 rankings cho 10,000+ product keywords',
        innovations: [
          'Long-tail keywords có less competition nhưng higher conversion rates',
          'Local language optimization crucial cho emerging markets',
          'Product page SEO can drive massive e-commerce growth',
        ],
      },
    ],
  },
  {
    id: 'paid-advertising',
    title: 'Bài 5: Paid Advertising & PPC',
    description:
      'Master Google Ads, Facebook Ads và các nền tảng quảng cáo trả phí. Tối ưu ROI và scale campaigns hiệu quả.',
    videoUrl: 'https://www.youtube.com/watch?v=fSbqaTlWaYI',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '150 phút',
    objectives: [
      'Thiết lập và quản lý Google Ads campaigns',
      'Tạo Facebook Ads hiệu quả với targeting chính xác',
      'Optimize ad copy, landing pages và conversion funnels',
      'Phân tích performance data và adjust strategies',
      'Scale profitable campaigns và manage budgets',
    ],
    prerequisites: ['Hiểu biết về digital marketing funnel', 'Kỹ năng phân tích dữ liệu cơ bản'],
    mainContent: {
      introduction:
        'Quảng cáo trả phí (Paid Advertising), đặc biệt là Pay-Per-Click (PPC), là cách nhanh nhất để đưa thông điệp của bạn đến với đối tượng mục tiêu. Không giống như SEO, bạn có thể thấy kết quả gần như ngay lập tức. Tuy nhiên, để thành công, bạn cần một chiến lược vững chắc để không "đốt tiền" vô ích. Bài học này sẽ trang bị cho bạn kiến thức để chạy các chiến dịch có lợi nhuận trên các nền tảng lớn nhất.',
      keyConcepts: [
        {
          title: 'Targeting (Nhắm mục tiêu)',
          description:
            'Là khả năng hiển thị quảng cáo của bạn cho các nhóm người dùng cụ thể dựa trên nhân khẩu học, sở thích, hành vi, vị trí, v.v. Đây là sức mạnh lớn nhất của quảng cáo kỹ thuật số.',
          examples: [
            'Nhắm mục tiêu đến những người đã truy cập trang web của bạn trong 30 ngày qua (Remarketing).',
            'Nhắm mục tiêu đến những người có sở thích "du lịch sang trọng" và sống tại TP.HCM.',
          ],
        },
        {
          title: 'Ad Copy & Landing Page Optimization',
          description:
            'Ad copy là văn bản quảng cáo của bạn, và landing page là trang mà người dùng truy cập sau khi nhấp vào quảng cáo. Cả hai yếu tố này phải nhất quán và được tối ưu hóa để thuyết phục người dùng thực hiện hành động mong muốn (chuyển đổi).',
          examples: [
            'Thử nghiệm A/B các tiêu đề quảng cáo khác nhau để xem cái nào có tỷ lệ nhấp chuột cao hơn.',
            'Đảm bảo landing page có một lời kêu gọi hành động (CTA) rõ ràng và duy nhất.',
          ],
        },
        {
          title: 'Return on Ad Spend (ROAS)',
          description:
            'Là một chỉ số quan trọng đo lường doanh thu bạn kiếm được cho mỗi đồng chi tiêu cho quảng cáo. ROAS = (Doanh thu từ quảng cáo / Chi phí quảng cáo). Một ROAS dương và cao cho thấy chiến dịch của bạn đang có lãi.',
          examples: [
            'Nếu bạn chi 10 triệu cho quảng cáo và thu về 50 triệu doanh thu, ROAS của bạn là 5x (hoặc 500%).',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Ra mắt sản phẩm mới',
          description:
            'Khi một công ty ra mắt sản phẩm mới, quảng cáo trả phí là cách hiệu quả để nhanh chóng tạo ra nhận thức, thu hút lưu lượng truy cập ban đầu và thu thập dữ liệu về khách hàng.',
          case_study:
            'Các hãng phim thường sử dụng Google Search Ads và YouTube Ads rầm rộ trong tuần đầu tiên công chiếu phim để tạo ra sự bùng nổ tại phòng vé.',
        },
        {
          area: 'Lead Generation cho B2B',
          description:
            'Các công ty B2B có thể sử dụng LinkedIn Ads để nhắm mục tiêu đến các chuyên gia có chức danh công việc hoặc làm việc tại các công ty cụ thể, cung cấp cho họ các tài liệu hữu ích (như whitepaper) để đổi lấy thông tin liên hệ.',
          case_study:
            'Salesforce sử dụng quảng cáo trả phí để quảng bá các báo cáo ngành và webinar của họ, từ đó xây dựng một danh sách khách hàng tiềm năng khổng lồ cho đội ngũ bán hàng.',
        },
      ],
      conclusion:
        'Quảng cáo trả phí là một công cụ cực kỳ mạnh mẽ khi được sử dụng đúng cách. Nó đòi hỏi sự kết hợp giữa tư duy phân tích dữ liệu và sự sáng tạo trong thông điệp. Bằng cách liên tục thử nghiệm, đo lường và tối ưu hóa, bạn có thể xây dựng một cỗ máy tăng trưởng có thể dự đoán và mở rộng được.',
    },
    vietnamContext: {
      title: 'Bối cảnh Quảng cáo trả phí tại Việt Nam',
      content: [
        'Thị trường quảng cáo trả phí tại Việt Nam rất sôi động, với phần lớn ngân sách được chi cho Google và Meta (Facebook/Instagram). Các nền tảng mới như TikTok Ads và quảng cáo trên các sàn e-commerce cũng đang tăng trưởng nhanh chóng.',
        '**Facebook Ads là kênh chủ đạo:** Đối với nhiều doanh nghiệp, đặc biệt là trong lĩnh vực B2C và e-commerce, Facebook Ads vẫn là kênh mang lại hiệu quả cao nhất nhờ khả năng nhắm mục tiêu chi tiết và tệp người dùng khổng lồ.',
        '**Sự trỗi dậy của TikTok Ads:** TikTok Ads đang trở thành lựa chọn hàng đầu để tiếp cận Gen Z. Các định dạng quảng cáo sáng tạo, tự nhiên và có tính giải trí cao thường hoạt động tốt nhất trên nền tảng này.',
        '**Tầm quan trọng của Landing Page tiếng Việt:** Một chiến dịch quảng cáo tốt có thể thất bại nếu landing page không được tối ưu. Landing page cần có nội dung tiếng Việt rõ ràng, thuyết phục, và giao diện thân thiện với người dùng di động.',
        '**Thách thức về "chạy bùng":** Tình trạng "chạy bùng" quảng cáo (không trả tiền cho nền tảng) là một vấn đề nhức nhối tại Việt Nam, dẫn đến việc các nền tảng như Facebook và Google ngày càng siết chặt chính sách, gây khó khăn cho cả những nhà quảng cáo chân chính.',
      ],
    },
    careerConnect: {
      name: 'Vũ Anh Tuấn',
      title: 'Performance Marketing Lead',
      company: 'Shopee Việt Nam',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop',
      quote:
        'Anh Tuấn quản lý một ngân sách quảng cáo khổng lồ, chịu trách nhiệm thu hút hàng triệu người dùng mới và thúc đẩy doanh số cho Shopee thông qua các kênh quảng cáo trả phí. Công việc của anh là phân tích dữ liệu, tối ưu hóa từng đồng chi tiêu để đạt được ROAS (Return on Ad Spend) cao nhất có thể. Anh là chuyên gia về Google Ads, Facebook Ads và các hệ thống quảng cáo tự động.',
    },
    quizzes: [
      {
        question: 'ROAS là viết tắt của từ gì?',
        options: ['Return on SEO', 'Revenue on Ad Spend', 'Return on Ad Spend', 'Revenue of Advertising System'],
        correctAnswerIndex: 2,
        explanation:
          'ROAS (Return on Ad Spend) là chỉ số đo lường doanh thu tạo ra trên mỗi đồng chi tiêu cho quảng cáo, một KPI cực kỳ quan trọng trong performance marketing.',
      },
      {
        question: 'Remarketing (Tiếp thị lại) là gì?',
        options: [
          'Nhắm mục tiêu đến khách hàng mới.',
          'Nhắm mục tiêu đến những người đã từng tương tác với website hoặc ứng dụng của bạn.',
          'Nhắm mục tiêu đến khách hàng của đối thủ.',
          'Nhắm mục tiêu dựa trên vị trí địa lý.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Remarketing là một chiến thuật mạnh mẽ để hiển thị quảng cáo cho những người đã thể hiện sự quan tâm đến thương hiệu của bạn, giúp tăng tỷ lệ chuyển đổi.',
      },
    ],
    relatedGames: socialMediaGame
      ? [
          {
            id: socialMediaGame.id,
            name: socialMediaGame.title,
            description: socialMediaGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Google Ads Campaign Setup',
        description: 'Tạo complete Google Ads campaign cho một online course business',
        difficulty: 'Nâng cao',
        solution: `# Google Ads Campaign: "Digital Marketing Mastery Course"

## 1. Campaign Structure

### Campaign Type: Search Network
**Objective:** Website Traffic & Conversions
**Budget:** $50/day ($1,500/month)
**Bidding Strategy:** Target CPA ($25)
**Location:** Vietnam (Ho Chi Minh City, Hanoi)
**Language:** Vietnamese
**Ad Schedule:** Monday-Friday 9AM-9PM, Weekend 10AM-6PM

## 2. Ad Groups Structure

### Ad Group 1: "Digital Marketing Course"
**Keywords:**
- [digital marketing course] - Exact Match - $2.50 bid
- "học digital marketing" - Phrase Match - $2.00 bid  
- +digital +marketing +online +course - Broad Match Modified - $1.50 bid

**Negative Keywords:**
- free, miễn phí, download, crack

### Ad Group 2: "Social Media Marketing"
**Keywords:**
- [social media marketing course] - Exact Match - $2.80 bid
- "khóa học social media" - Phrase Match - $2.20 bid
- +facebook +ads +course - Broad Match Modified - $1.80 bid

### Ad Group 3: "SEO Training"
**Keywords:**
- [seo course vietnam] - Exact Match - $3.00 bid
- "học seo online" - Phrase Match - $2.50 bid
- +seo +training +ho chi minh - Broad Match Modified - $2.00 bid

## 3. Ad Copy Examples

### Ad Group 1 - Headline Variations:
**Headline 1:** "Khóa Học Digital Marketing #1 VN"
**Headline 2:** "Từ Zero Đến Hero Trong 8 Tuần"  
**Headline 3:** "Đảm Bảo Có Việc Sau Tốt Nghiệp"

**Description 1:** "Học Digital Marketing thực tế với 100+ case studies Việt Nam. Mentor 1-1, Job guarantee. Đăng ký ngay!"
**Description 2:** "8 tuần intensive training. Portfolio thật. Certificate quốc tế. Tỷ lệ có việc 95%. Free trial class!"

### Sitelink Extensions:
- "Xem Curriculum" → /curriculum
- "Học Phí & Lịch Học" → /pricing  
- "Alumni Success Stories" → /testimonials
- "Free Trial Class" → /trial

### Callout Extensions:
- "Job Guarantee"
- "Certificate Quốc Tế"  
- "Mentor 1-1"
- "95% Có Việc Sau Khóa"

## 4. Landing Page Strategy

### URL Structure:
- Ad Group 1 → /digital-marketing-course?utm_source=google&utm_campaign=search_brand
- Ad Group 2 → /social-media-marketing?utm_source=google&utm_campaign=search_smm
- Ad Group 3 → /seo-course?utm_source=google&utm_campaign=search_seo

### Conversion Tracking:
- Primary Goal: Course enrollment ($500 value)
- Secondary Goal: Free trial signup ($50 value)  
- Micro Goal: Curriculum download ($5 value)

## 5. Optimization Strategy

### Week 1-2: Learning Phase
- Monitor search terms report daily
- Add negative keywords
- Adjust bids based on performance
- Test ad copy variations

### Week 3-4: Optimization Phase  
- Pause low-performing keywords
- Increase bids on high-converting terms
- Test new ad extensions
- Optimize landing pages based on heatmaps

### Week 5+: Scaling Phase
- Expand to similar keywords
- Test new ad groups
- Increase budgets on profitable campaigns
- Implement remarketing campaigns

## Expected KPIs:
- Click-through Rate: >3%
- Cost per Click: $1.50-3.00
- Conversion Rate: >5%
- Cost per Acquisition: <$25
- Return on Ad Spend: >400%`,
        materials: [
          'Set up campaign structure với proper targeting',
          'Create compelling ad copy với local relevance',
          'Design conversion tracking strategy',
          'Plan optimization và scaling roadmap',
        ],
        expectedResults: 'Complete Google Ads campaign setup với detailed strategy và optimization plan',
      },
    ],
    realWorldApplications: [
      'Lead generation cho B2B SaaS companies',
      'E-commerce product promotion campaigns',
      'App install campaigns cho mobile apps',
      'Local business advertising strategies',
      'Multi-channel attribution và campaign optimization',
    ],
    resources: [
      {
        title: 'Google Ads Skillshop',
        url: 'https://skillshop.withgoogle.com',
        type: 'tool',
      },
      {
        title: 'Facebook Blueprint',
        url: 'https://www.facebook.com/business/learn',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Grab tripled driver acquisition với targeted ads',
        organization: 'Grab Vietnam',
        problem:
          'Scale driver acquisition trong competitive ride-hailing market với thách thức về cost efficiency và quality của drivers',
        solution:
          'Hyper-targeted Facebook và Google ads focusing trên specific demographics và locations với advanced audience segmentation và creative testing',
        impact:
          '300% increase in qualified driver signups, 40% lower cost per acquisition, improved driver retention rates',
        innovations: [
          'Micro-targeting based on location và demographics dramatically improves performance',
          'Creative testing essential cho ad fatigue prevention',
          'Landing page optimization can 2x conversion rates',
        ],
      },
    ],
  },
  {
    id: 'email-marketing-automation',
    title: 'Bài 6: Email Marketing & Automation',
    description:
      'Xây dựng email marketing systems tự động hóa customer journey. Từ welcome series đến advanced segmentation.',
    videoUrl: 'https://www.youtube.com/watch?v=pLhQOYMGa88',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '110 phút',
    objectives: [
      'Thiết kế email automation workflows',
      'Tạo compelling email content và subject lines',
      'Implement segmentation và personalization strategies',
      'Optimize email deliverability và engagement rates',
      'Measure email marketing ROI và performance',
    ],
    prerequisites: ['Hiểu customer journey', 'Kỹ năng copywriting cơ bản'],
    mainContent: {
      introduction:
        'Email Marketing vẫn là một trong những kênh có ROI (Return on Investment) cao nhất trong digital marketing. Nó cho phép bạn xây dựng mối quan hệ trực tiếp và cá nhân với khách hàng. Khi kết hợp với tự động hóa (automation), nó trở thành một cỗ máy mạnh mẽ để nuôi dưỡng khách hàng tiềm năng và thúc đẩy doanh số một cách tự động. Bài học này sẽ chỉ cho bạn cách xây dựng các hệ thống email marketing hiệu quả.',
      keyConcepts: [
        {
          title: 'Email Automation Workflows',
          description:
            'Là một chuỗi các email được gửi tự động đến người dùng dựa trên các trình kích hoạt (triggers) hoặc hành động cụ thể. Điều này cho phép bạn gửi đúng thông điệp, đến đúng người, vào đúng thời điểm.',
          examples: [
            'Chuỗi email chào mừng (welcome series) cho người đăng ký mới.',
            'Chuỗi email nhắc nhở giỏ hàng bị bỏ quên (abandoned cart).',
            'Chuỗi email nuôi dưỡng khách hàng tiềm năng (lead nurturing).',
          ],
        },
        {
          title: 'Segmentation & Personalization',
          description:
            'Phân khúc (Segmentation) là chia danh sách email của bạn thành các nhóm nhỏ hơn dựa trên các tiêu chí chung. Cá nhân hóa (Personalization) là sử dụng dữ liệu người đăng ký để tùy chỉnh nội dung email. Cả hai đều giúp tăng đáng kể sự liên quan và hiệu quả của email.',
          examples: [
            'Gửi một ưu đãi đặc biệt cho những khách hàng đã mua hàng hơn 3 lần.',
            'Chèn tên của người nhận vào dòng tiêu đề email.',
            'Gợi ý các sản phẩm dựa trên lịch sử mua hàng của họ.',
          ],
        },
        {
          title: 'Email Deliverability',
          description:
            'Là khả năng email của bạn đến được hộp thư đến của người nhận thay vì vào thư mục spam. Nó bị ảnh hưởng bởi nhiều yếu tố như uy tín của người gửi, chất lượng danh sách email và nội dung email.',
          examples: [
            'Xác thực tên miền của bạn (SPF, DKIM).',
            'Thường xuyên làm sạch danh sách email để loại bỏ các địa chỉ không hoạt động.',
            'Tránh sử dụng các từ ngữ dễ bị coi là spam trong tiêu đề.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Thương mại điện tử',
          description:
            'Các cửa hàng trực tuyến sử dụng email automation để gửi email xác nhận đơn hàng, thông báo vận chuyển, nhắc nhở giỏ hàng, gợi ý sản phẩm và các chiến dịch khuyến mãi, giúp tăng doanh số và giữ chân khách hàng.',
          case_study:
            'Amazon là bậc thầy về email marketing, gửi các email được cá nhân hóa cao dựa trên lịch sử xem và mua hàng của bạn, thúc đẩy một phần đáng kể doanh thu của họ.',
        },
        {
          area: 'Doanh nghiệp SaaS',
          description:
            'Các công ty phần mềm dưới dạng dịch vụ (SaaS) sử dụng email để hướng dẫn người dùng mới (onboarding), thông báo các tính năng mới, nuôi dưỡng người dùng bản dùng thử thành khách hàng trả phí và giảm tỷ lệ khách hàng rời bỏ (churn).',
          case_study:
            'Grammarly gửi các báo cáo tiến độ hàng tuần được cá nhân hóa cho người dùng, cho thấy họ đã viết bao nhiêu từ và những lỗi sai phổ biến, điều này khuyến khích họ tiếp tục sử dụng sản phẩm.',
        },
      ],
      conclusion:
        'Email Marketing là một tài sản mà bạn sở hữu, không giống như lượng người theo dõi trên mạng xã hội có thể biến mất nếu nền tảng thay đổi thuật toán. Bằng cách xây dựng một danh sách email chất lượng và giao tiếp với họ một cách có chiến lược, bạn đang xây dựng một kênh marketing bền vững và có lợi nhuận cao.',
    },
    vietnamContext: {
      title: 'Bối cảnh Email Marketing tại Việt Nam',
      content: [
        'Mặc dù bị cạnh tranh bởi các kênh như Zalo và Messenger, Email Marketing vẫn là một công cụ hiệu quả tại Việt Nam, đặc biệt trong các lĩnh vực B2B, e-commerce và các ngành dịch vụ.',
        '**Tỷ lệ mở email trên di động cao:** Phần lớn người Việt kiểm tra email trên điện thoại di động. Do đó, các email phải được thiết kế theo phong cách mobile-first, với tiêu đề ngắn gọn, nội dung dễ đọc và các nút kêu gọi hành động (CTA) lớn.',
        '**Cá nhân hóa và phân khúc là chìa khóa:** Người dùng Việt Nam nhận được rất nhiều email quảng cáo mỗi ngày. Để nổi bật, các email cần được cá nhân hóa cao, gửi đúng nội dung cho đúng đối tượng dựa trên hành vi và sở thích của họ.',
        '**Tích hợp với các kênh khác:** Email marketing hoạt động hiệu quả nhất khi được kết hợp với các kênh khác. Ví dụ, sử dụng email để nuôi dưỡng khách hàng tiềm năng thu được từ quảng cáo Facebook, hoặc để thông báo về một buổi livestream sắp diễn ra.',
      ],
    },
    careerConnect: {
      name: 'Đặng Thu Trang',
      title: 'CRM Manager',
      company: 'The Coffee House',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      quote:
        'Thu Trang chịu trách nhiệm quản lý mối quan hệ với hàng triệu khách hàng của The Coffee House thông qua các kênh trực tiếp như Email và ứng dụng di động. Cô thiết kế các chuỗi email tự động (ví dụ: chúc mừng sinh nhật, nhắc nhở điểm thưởng sắp hết hạn), phân khúc khách hàng để gửi các ưu đãi phù hợp, và phân tích dữ liệu để tăng tỷ lệ khách hàng quay lại và giá trị vòng đời khách hàng (LTV).',
    },
    quizzes: [
      {
        question: 'Workflow tự động nào thường được sử dụng trong e-commerce để cứu vãn doanh số?',
        options: [
          'Chuỗi email chào mừng (Welcome series)',
          'Chuỗi email nhắc nhở giỏ hàng bị bỏ quên (Abandoned cart)',
          'Chuỗi email giới thiệu sản phẩm mới',
          'Chuỗi email chúc mừng sinh nhật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chuỗi email nhắc nhở giỏ hàng bị bỏ quên được kích hoạt khi người dùng thêm sản phẩm vào giỏ hàng nhưng không hoàn tất thanh toán, đây là một trong những workflow tự động có ROI cao nhất.',
      },
      {
        question: 'SPF và DKIM là gì?',
        options: [
          'Các chỉ số đo lường hiệu quả email.',
          'Các phương pháp xác thực tên miền để cải thiện khả năng gửi email (deliverability).',
          'Các loại phân khúc khách hàng.',
          'Tên của các nhà cung cấp dịch vụ email.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'SPF (Sender Policy Framework) và DKIM (DomainKeys Identified Mail) là các bản ghi DNS giúp các máy chủ email xác minh rằng email được gửi từ một nguồn hợp lệ, giúp email vào hộp thư đến thay vì spam.',
      },
    ],
    relatedGames: [],
    exercises: [
      {
        title: 'Email Automation Workflow',
        description: 'Thiết kế complete email automation cho SaaS product trial users',
        difficulty: 'Trung bình',
        solution: `# SaaS Trial User Email Automation Workflow

## Trigger: User signs up for 14-day free trial

### Day 0: Welcome Email (Sent immediately)
**Subject:** "Chào mừng bạn đến với [Product Name]! 🎉"
**Goals:** Set expectations, provide quick wins
**Content:**
- Welcome message với personal touch
- Quick start guide (3 easy steps)
- Link to onboarding video (5 phút)
- Customer support contact info
**CTA:** "Bắt đầu setup trong 5 phút"

### Day 1: Onboarding Tutorial
**Subject:** "Tip #1: Thiết lập [Feature] trong 2 phút"
**Goals:** Drive feature adoption, reduce time-to-value
**Content:**
- Step-by-step tutorial cho core feature
- Video walkthrough (3 phút)
- Common mistakes để avoid
- Link to help documentation
**CTA:** "Thử feature này ngay"

### Day 3: Use Case Examples  
**Subject:** "Cách [Customer Name] tăng 40% productivity với [Product]"
**Goals:** Show real value, inspire usage
**Content:**
- Customer success story relevant đến user's industry
- Specific metrics và results
- Screenshots of actual usage
- Template họ có thể copy
**CTA:** "Áp dụng strategy này cho business của bạn"

### Day 5: Feature Deep Dive
**Subject:** "Unlock advanced features - Video tutorial inside"
**Goals:** Increase feature adoption, show advanced value
**Content:**
- Advanced feature tutorial
- Integration với popular tools
- Time-saving tips và shortcuts
- Q&A với common questions
**CTA:** "Xem advanced tutorial"

### Day 7: Social Proof & Community
**Subject:** "Join 10,000+ users đã transform business với [Product]"
**Goals:** Build trust, encourage community engagement
**Content:**
- Customer testimonials và reviews
- Community forum invitation
- User-generated content showcase
- Upcoming webinar announcement
**CTA:** "Join community của chúng tôi"

### Day 10: Upgrade Nudge
**Subject:** "4 days left: Don't lose your data! 📊"
**Goals:** Create urgency, highlight value at risk
**Content:**
- Trial expiration reminder
- Summary of their usage/progress
- What they'll lose if không upgrade
- Special discount offer (20% off first month)
**CTA:** "Upgrade ngay với 20% discount"

### Day 12: Final Opportunity
**Subject:** "Last chance: Your trial expires tomorrow"
**Goals:** Final conversion attempt
**Content:**
- Urgent reminder với countdown timer
- One-click upgrade option
- Customer support contact nếu có questions
- Alternative: Extended trial option
**CTA:** "Upgrade trong 1 click"

### Day 15: Win-back Campaign (if didn't convert)
**Subject:** "We miss you! Here's 30% off to come back"
**Goals:** Re-engage lapsed trial users
**Content:**
- Personal message from founder
- Feedback request - why didn't họ upgrade?
- Better discount offer (30% off)
- Case study success story
**CTA:** "Come back với 30% off"

## Segmentation Rules:
- **High Engagement:** Users với >10 logins → Accelerated upgrade sequence
- **Low Engagement:** Users với <3 logins → Additional onboarding emails
- **Feature Users:** Users using advanced features → Different case studies
- **Industry-Specific:** Customize examples based on company industry

## Performance Targets:

- Open Rate: >25%
- Click-through Rate: >5%
- Trial-to-Paid Conversion: >15%
- Email Attribution Revenue: >$50 per trial user`,
        materials: [
          'Map complete email sequence với clear goals',
          'Include personalization và segmentation logic',
          'Design compelling subject lines và content',
          'Set measurable performance targets',
        ],
        expectedResults: 'Complete email automation workflow với content examples và performance metrics',
      },
    ],
    realWorldApplications: [
      'E-commerce abandoned cart recovery campaigns',
      'B2B lead nurturing sequences',
      'Customer onboarding automation',
      'Re-engagement campaigns cho dormant users',
      'Post-purchase follow-up sequences',
    ],
    resources: [
      {
        title: 'Really Good Emails',
        url: 'https://reallygoodemails.com',
        type: 'article',
      },
      {
        title: 'Klaviyo Email Marketing Guide',
        url: 'https://www.klaviyo.com/marketing-resources',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Haravan 5x email revenue với personalization',
        organization: 'Haravan',
        problem:
          'Improve email marketing ROI cho e-commerce platform users với challenges về low engagement và conversion rates',
        solution:
          'Implemented advanced segmentation và personalized product recommendations trong email campaigns với behavioral targeting',
        impact:
          '500% increase in email revenue, 40% higher open rates, 60% better click-through rates, improved customer retention',
        innovations: [
          'Personalized product recommendations dramatically increase email revenue',
          'Behavioral segmentation outperforms demographic segmentation',
          'Mobile-optimized emails essential cho Vietnamese market',
        ],
      },
    ],
  },
  {
    id: 'analytics-data-driven-marketing',
    title: 'Bài 7: Analytics & Data-Driven Marketing',
    description:
      'Transform data thành actionable insights. Master Google Analytics, tracking setups và performance optimization.',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '140 phút',
    objectives: [
      'Setup comprehensive analytics tracking',
      'Create custom reports và dashboards',
      'Analyze customer behavior và conversion funnels',
      'Implement A/B testing và experimentation',
      'Make data-driven marketing decisions',
    ],
    prerequisites: ['Hiểu biết về digital marketing metrics', 'Kỹ năng Excel/Google Sheets cơ bản'],
    mainContent: {
      introduction:
        'Trong marketing hiện đại, "cảm tính" không còn chỗ đứng. Mọi quyết định đều cần được dựa trên dữ liệu. Data-Driven Marketing là phương pháp sử dụng dữ liệu khách hàng để tối ưu hóa các chiến dịch và đưa ra quyết định sáng suốt. Bài học này sẽ dạy bạn cách thu thập, phân tích và biến dữ liệu thô thành những hiểu biết sâu sắc có thể hành động để thúc đẩy tăng trưởng.',
      keyConcepts: [
        {
          title: 'Analytics Tracking Setup',
          description:
            'Là nền tảng của marketing dựa trên dữ liệu. Nó bao gồm việc cài đặt các công cụ như Google Analytics và Google Tag Manager để theo dõi hành vi của người dùng trên trang web và ứng dụng của bạn, từ lượt xem trang đến các chuyển đổi quan trọng.',
          examples: [
            'Thiết lập theo dõi sự kiện (event tracking) cho các lần nhấp vào nút "Thêm vào giỏ hàng".',
            'Cài đặt theo dõi chuyển đổi (conversion tracking) cho các biểu mẫu đăng ký.',
          ],
        },
        {
          title: 'Conversion Funnel Analysis',
          description:
            'Là quá trình phân tích các bước mà người dùng thực hiện để hoàn thành một mục tiêu (ví dụ: mua hàng). Bằng cách xác định nơi người dùng rời bỏ nhiều nhất trong phễu, bạn có thể tìm ra các điểm yếu và tối ưu hóa chúng.',
          examples: [
            'Phân tích phễu thanh toán để giảm tỷ lệ bỏ giỏ hàng.',
            'Tối ưu hóa phễu đăng ký để tăng số lượng người dùng mới.',
          ],
        },
        {
          title: 'A/B Testing (Thử nghiệm A/B)',
          description:
            'Là một phương pháp thử nghiệm trong đó hai phiên bản của một trang web hoặc một yếu tố (ví dụ: một nút bấm) được hiển thị cho hai nhóm người dùng khác nhau để xem phiên bản nào hoạt động hiệu quả hơn. Đây là một công cụ mạnh mẽ để ra quyết định dựa trên dữ liệu.',
          examples: [
            'Thử nghiệm hai tiêu đề khác nhau cho một trang đích.',
            'Thử nghiệm màu sắc của nút "Mua ngay" (ví dụ: xanh lá cây so với màu cam).',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tối ưu hóa trang web',
          description:
            'Các công ty sử dụng các công cụ phân tích như Hotjar để xem bản đồ nhiệt (heatmaps) và bản ghi phiên (session recordings) về cách người dùng tương tác với trang web của họ, từ đó xác định các vấn đề về trải nghiệm người dùng và cải thiện thiết kế.',
          case_study:
            'Một công ty e-commerce đã phát hiện ra rằng người dùng không nhìn thấy nút "Thanh toán" trên thiết bị di động. Sau khi di chuyển nút lên vị trí cao hơn, tỷ lệ chuyển đổi trên di động của họ đã tăng 30%.',
        },
        {
          area: 'Phân bổ ngân sách marketing',
          description:
            'Bằng cách sử dụng các mô hình phân bổ (attribution models), các nhà marketing có thể hiểu rõ hơn về kênh nào (SEO, quảng cáo trả phí, mạng xã hội, v.v.) đóng góp nhiều nhất vào việc tạo ra chuyển đổi, từ đó phân bổ ngân sách một cách hiệu quả hơn.',
          case_study:
            'Một công ty nhận ra rằng mặc dù quảng cáo Facebook có nhiều lượt nhấp chuột, nhưng các khách hàng đến từ tìm kiếm không phải trả tiền (organic search) lại có giá trị vòng đời cao hơn. Họ đã điều chỉnh ngân sách để đầu tư nhiều hơn vào SEO.',
        },
      ],
      conclusion:
        'Dữ liệu là la bàn của nhà marketing hiện đại. Bằng cách học cách đọc và diễn giải nó, bạn có thể điều hướng các chiến dịch của mình một cách tự tin, tránh lãng phí ngân sách và liên tục cải thiện kết quả. Việc áp dụng tư duy dựa trên dữ liệu sẽ tách biệt các nhà marketing nghiệp dư khỏi các chuyên gia thực thụ.',
    },
    vietnamContext: {
      title: 'Bối cảnh Marketing dựa trên dữ liệu tại Việt Nam',
      content: [
        'Các doanh nghiệp Việt Nam ngày càng nhận thức được tầm quan trọng của dữ liệu. Tuy nhiên, việc áp dụng vẫn còn ở giai đoạn đầu so với các thị trường phát triển. Nhu cầu về các chuyên gia phân tích dữ liệu marketing đang tăng rất nhanh.',
        '**Chuyển đổi sang Google Analytics 4:** Việc Google khai tử Universal Analytics và chuyển hoàn toàn sang Google Analytics 4 (GA4) đã tạo ra một thách thức và cơ hội lớn. Các doanh nghiệp cần học cách sử dụng mô hình dựa trên sự kiện của GA4 để hiểu rõ hơn về hành trình khách hàng.',
        '**Nhu cầu về chuyên gia phân tích:** Thị trường đang thiếu hụt nhân sự có khả năng không chỉ thu thập mà còn phân tích và biến dữ liệu thành các insight kinh doanh có giá trị. Đây là một kỹ năng được săn đón với mức lương cao.',
        '**Tích hợp dữ liệu đa kênh:** Thách thức lớn là làm thế nào để hợp nhất dữ liệu từ nhiều nguồn khác nhau (website, app, cửa hàng offline, mạng xã hội, sàn e-commerce) để có một cái nhìn 360 độ về khách hàng.',
      ],
    },
    careerConnect: {
      name: 'Hoàng Bích Ngọc',
      title: 'Senior Marketing Analyst',
      company: 'Traveloka Việt Nam',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      quote:
        'Bích Ngọc là "thám tử dữ liệu" của team marketing. Cô dành phần lớn thời gian làm việc với Google Analytics, SQL và các công cụ BI (Business Intelligence) để trả lời những câu hỏi kinh doanh quan trọng như: "Chiến dịch nào mang lại ROI cao nhất?", "Tại sao người dùng lại từ bỏ ở bước thanh toán?", "Phân khúc khách hàng nào có giá trị nhất?". Những phân tích của cô là cơ sở để ban lãnh đạo đưa ra các quyết định chiến lược.',
    },
    quizzes: [
      {
        question: 'A/B Testing là gì?',
        options: [
          'Hiển thị cùng một phiên bản cho tất cả người dùng.',
          'Hiển thị hai phiên bản khác nhau của một trang cho hai nhóm người dùng để xem phiên bản nào hiệu quả hơn.',
          'Phân tích hành vi của người dùng trong quá khứ.',
          'Thu thập phản hồi của người dùng qua khảo sát.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'A/B Testing là một phương pháp thử nghiệm có kiểm soát để so sánh hiệu quả của hai phiên bản (A và B) và đưa ra quyết định dựa trên dữ liệu thực tế.',
      },
      {
        question:
          'Công cụ nào của Google cho phép quản lý các thẻ theo dõi (tracking tags) trên website một cách linh hoạt?',
        options: ['Google Analytics', 'Google Search Console', 'Google Tag Manager', 'Google Data Studio'],
        correctAnswerIndex: 2,
        explanation:
          'Google Tag Manager (GTM) là một hệ thống quản lý thẻ giúp bạn dễ dàng cập nhật và quản lý các đoạn mã theo dõi (còn gọi là tags hoặc pixels) trên trang web hoặc ứng dụng di động của mình mà không cần chỉnh sửa code.',
      },
    ],
    relatedGames: aiArtGame
      ? [
          {
            id: aiArtGame.id,
            name: aiArtGame.title,
            description: aiArtGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Marketing Analytics Dashboard',
        description: 'Tạo comprehensive marketing dashboard cho e-commerce business',
        difficulty: 'Nâng cao',
        solution: `# E-commerce Marketing Analytics Dashboard

## Dashboard Overview: TechStore.vn Performance Dashboard

### Section 1: Traffic & Acquisition Metrics

#### Traffic Sources (Last 30 days)
**Organic Search:** 45% (18,000 users)
- YoY Growth: +25%
- Top Landing Pages: Product categories
- Avg. Session Duration: 3:45
- Bounce Rate: 35%

**Paid Search:** 25% (10,000 users)  
- Cost: $15,000
- CPC: $1.50
- Quality Score: 7.2/10
- ROAS: 4.2x

**Social Media:** 15% (6,000 users)
- Facebook: 60% of social traffic
- Instagram: 25%
- TikTok: 15%
- Social Commerce Revenue: $45,000

**Direct Traffic:** 10% (4,000 users)
**Email Marketing:** 3% (1,200 users)
**Referral:** 2% (800 users)

### Section 2: Conversion Funnel Analysis

#### E-commerce Funnel Performance
1. **Homepage Views:** 40,000
2. **Product Page Views:** 28,000 (70% of homepage visitors)
3. **Add to Cart:** 8,400 (30% of product viewers)
4. **Checkout Started:** 4,200 (50% of add to cart)
5. **Purchase Completed:** 2,100 (50% of checkout started)

**Overall Conversion Rate:** 5.25%
**Cart Abandonment Rate:** 75%

#### Conversion Rate by Traffic Source
- **Email:** 8.5% (highest converting)
- **Organic Search:** 6.2%
- **Direct:** 5.8%
- **Paid Search:** 4.1%
- **Social Media:** 2.3%

### Section 3: Revenue & ROI Metrics

#### Revenue Breakdown (Monthly)
**Total Revenue:** $420,000
- **Organic:** $189,000 (45%)
- **Paid Ads:** $126,000 (30%) 
- **Social Commerce:** $45,000 (11%)
- **Email:** $36,000 (9%)
- **Direct:** $24,000 (5%)

#### Marketing ROI by Channel
- **Email Marketing:** 1,200% ROI ($36k revenue / $3k cost)
- **SEO:** 945% ROI ($189k revenue / $20k cost)
- **Paid Search:** 320% ROI ($126k revenue / $39k cost)
- **Social Ads:** 180% ROI ($45k revenue / $25k cost)

### Section 4: Customer Behavior Analysis

#### Top Performing Products
1. **iPhone 15 Pro:** $85,000 revenue (340 units)
2. **Samsung Galaxy S24:** $62,000 revenue (310 units)  
3. **MacBook Air M2:** $58,000 revenue (145 units)
4. **iPad Pro:** $45,000 revenue (225 units)
5. **AirPods Pro:** $32,000 revenue (640 units)

#### Customer Segmentation
**New Customers:** 65% of transactions
- Average Order Value: $180
- Lifetime Value: $320

**Returning Customers:** 35% of transactions  
- Average Order Value: $240
- Lifetime Value: $850

### Section 5: Content Performance

#### Blog Content ROI
**Top Performing Articles:**
1. "iPhone 15 vs iPhone 14 Comparison" - 45,000 views, 340 conversions
2. "Best Smartphones Under $500" - 32,000 views, 280 conversions
3. "MacBook Buying Guide 2024" - 28,000 views, 145 conversions

**Content Attribution Revenue:** $125,000 (30% of total)

### Section 6: Key Performance Indicators

#### Monthly Targets vs Actual
- **Revenue Target:** $400,000 | **Actual:** $420,000 ✅ (+5%)
- **Traffic Target:** 35,000 users | **Actual:** 40,000 ✅ (+14%)
- **Conversion Rate Target:** 5% | **Actual:** 5.25% ✅ (+5%)
- **Customer Acquisition Cost Target:** $25 | **Actual:** $22 ✅ (-12%)

### Section 7: Actionable Insights & Recommendations

#### Quick Wins (Implementation: 1-2 weeks)
1. **Cart Abandonment Email Campaign** 
   - Current: No automation
   - Opportunity: Recover 15% of abandoned carts = $15,750 additional revenue

2. **Product Page Optimization**
   - Add more product reviews (current: 3.2 avg reviews)
   - Implement size guides for accessories
   - Expected: +10% conversion rate improvement

#### Medium-term Optimizations (1-3 months)  
1. **Expand High-ROI Channels**
   - Increase email marketing frequency từ 2x/week to 3x/week
   - Double SEO content production (4 articles/month to 8)
   - Expected: +25% revenue growth

2. **Improve Low-Performing Channels**
   - Redesign social media strategy focusing on product tutorials
   - A/B test paid search ad copy và landing pages
   - Expected: +30% social commerce conversion rate

#### Strategic Initiatives (3-6 months)
1. **Customer Retention Program**
   - Implement loyalty program
   - Personalized product recommendations
   - Expected: +40% customer lifetime value

2. **Mobile App Development**
   - 70% of traffic is mobile, but mobile conversion is 40% lower
   - Native app could improve mobile experience
   - Expected: +20% mobile conversion rate

### Reporting Schedule:
- **Daily:** Traffic, revenue, ad spend monitoring
- **Weekly:** Conversion funnel, top products, campaign performance  
- **Monthly:** Full dashboard review, strategy adjustments
- **Quarterly:** Customer segmentation analysis, channel attribution modeling`,
        materials: [
          'Include traffic acquisition và conversion metrics',
          'Analyze customer behavior patterns',
          'Calculate ROI cho different marketing channels',
          'Provide actionable insights và recommendations',
        ],
        expectedResults: 'Comprehensive marketing dashboard với key metrics, analysis và actionable recommendations',
      },
    ],
    realWorldApplications: [
      'Multi-channel attribution modeling cho complex customer journeys',
      'A/B testing programs cho website optimization',
      'Predictive analytics cho customer churn prevention',
      'Marketing mix modeling cho budget allocation',
      'Real-time performance monitoring và alerting systems',
    ],
    resources: [
      {
        title: 'Google Analytics Academy',
        url: 'https://analytics.google.com/analytics/academy/',
        type: 'tool',
      },
      {
        title: 'Google Data Studio Templates',
        url: 'https://datastudio.google.com/gallery',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'VinFast data-driven marketing optimization',
        organization: 'VinFast',
        problem:
          'Optimize marketing spend across channels cho electric vehicle launch campaign với challenge về ROI measurement và channel attribution',
        solution:
          'Implemented advanced attribution modeling và real-time performance tracking across all digital channels với sophisticated data analytics platform',
        impact:
          '35% improvement in marketing efficiency, $2M cost savings, 50% better lead quality, enhanced customer acquisition strategy',
        innovations: [
          'Multi-touch attribution reveals true channel performance',
          'Real-time optimization prevents budget waste',
          'Customer journey analytics improve lead scoring accuracy',
        ],
      },
    ],
  },
  {
    id: 'creator-economy-monetization',
    title: 'Bài 8: Creator Economy & Monetization',
    description:
      'Kiếm tiền từ content creation và personal branding. Từ influencer marketing đến building personal brand empire.',
    videoUrl: 'https://www.youtube.com/watch?v=eoWcQUjNM8o',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '120 phút',
    objectives: [
      'Xây dựng personal brand strategy',
      'Hiểu creator economy landscape và opportunities',
      'Develop multiple revenue streams từ content',
      'Master influencer marketing và partnerships',
      'Scale personal brand thành business empire',
    ],
    prerequisites: ['Hiểu social media platforms', 'Content creation experience'],
    mainContent: {
      introduction:
        'Nền kinh tế sáng tạo (Creator Economy) đã mở ra một con đường sự nghiệp hoàn toàn mới, nơi các cá nhân có thể kiếm sống và xây dựng doanh nghiệp từ chính nội dung và thương hiệu cá nhân của họ. Đây không còn là sân chơi chỉ dành cho những người nổi tiếng. Bất kỳ ai có chuyên môn và đam mê đều có thể tham gia. Bài học này sẽ cung cấp cho bạn một lộ trình để biến đam mê sáng tạo thành một nguồn thu nhập bền vững.',
      keyConcepts: [
        {
          title: 'Personal Brand (Thương hiệu cá nhân)',
          description:
            'Là cách thế giới nhìn nhận về bạn, dựa trên chuyên môn, giá trị và cá tính mà bạn thể hiện. Một thương hiệu cá nhân mạnh mẽ là nền tảng để xây dựng lòng tin và thu hút cơ hội.',
          examples: [
            'Một lập trình viên chia sẻ các mẹo code hữu ích trên Twitter.',
            'Một chuyên gia tài chính viết blog về đầu tư cho người mới bắt đầu.',
          ],
        },
        {
          title: 'Multiple Revenue Streams (Đa dạng hóa nguồn thu)',
          description:
            'Những nhà sáng tạo thành công không bao giờ phụ thuộc vào một nguồn thu nhập duy nhất. Họ xây dựng một hệ sinh thái các sản phẩm và dịch vụ khác nhau để tạo ra sự ổn định và tiềm năng tăng trưởng.',
          examples: [
            'Doanh thu từ quảng cáo YouTube.',
            'Bán các khóa học trực tuyến.',
            'Hợp tác với các thương hiệu (brand deals).',
            'Nhận quyên góp từ người hâm mộ (Patreon).',
            'Bán sản phẩm vật lý (merchandise).',
          ],
        },
        {
          title: 'Community Building (Xây dựng cộng đồng)',
          description:
            'Tài sản lớn nhất của một nhà sáng tạo không phải là nội dung, mà là cộng đồng mà họ xây dựng xung quanh nội dung đó. Một cộng đồng gắn kết sẽ hỗ trợ bạn, cung cấp phản hồi và trở thành những khách hàng đầu tiên của bạn.',
          examples: [
            'Tạo một server Discord cho những người theo dõi bạn.',
            'Tổ chức các buổi gặp mặt hoặc livestream độc quyền.',
            'Tích cực trả lời bình luận và tin nhắn.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Chuyên gia (Expert)',
          description:
            'Một chuyên gia trong bất kỳ lĩnh vực nào (ví dụ: marketing, thiết kế, dinh dưỡng) có thể sử dụng các nền tảng sáng tạo để chia sẻ kiến thức, xây dựng uy tín và bán các dịch vụ tư vấn, khóa học hoặc sách.',
          case_study:
            'Mark Manson từ một blogger đã trở thành tác giả sách bán chạy nhất thế giới ("The Subtle Art of Not Giving a F*ck") bằng cách xây dựng một lượng lớn độc giả trung thành qua blog và email newsletter của mình.',
        },
        {
          area: 'Nghệ sĩ/Người làm giải trí',
          description:
            'Các nhạc sĩ, họa sĩ, diễn viên hài có thể sử dụng YouTube, TikTok và Patreon để giới thiệu tác phẩm của mình, kết nối trực tiếp với người hâm mộ và kiếm tiền mà không cần thông qua các hãng đĩa hay công ty quản lý truyền thống.',
          case_study:
            'Nhiều nghệ sĩ độc lập đã khởi nghiệp thành công bằng cách phát hành nhạc trên Spotify và xây dựng cộng đồng người hâm mộ trên Patreon, nơi họ cung cấp nội dung độc quyền cho những người ủng hộ.',
        },
      ],
      conclusion:
        'Trở thành một nhà sáng tạo thành công đòi hỏi sự kiên trì, nhất quán và tư duy của một doanh nhân. Bằng cách tập trung vào việc phục vụ một đối tượng khán giả cụ thể và đa dạng hóa nguồn thu nhập, bạn có thể xây dựng một sự nghiệp linh hoạt, tự chủ và đầy ý nghĩa từ chính đam mê của mình.',
    },
    vietnamContext: {
      title: 'Bối cảnh Creator Economy tại Việt Nam',
      content: [
        'Creator Economy ở Việt Nam đang phát triển với tốc độ chóng mặt, tạo ra một thế hệ những người nổi tiếng và doanh nhân mới trên không gian mạng. Thị trường này rất năng động nhưng cũng đầy cạnh tranh.',
        '**Sự bùng nổ của các nền tảng:** YouTube, Facebook, Instagram và đặc biệt là TikTok là những "sân khấu" chính cho các nhà sáng tạo Việt Nam. Mỗi nền tảng có một đặc thù riêng và đòi hỏi chiến lược nội dung khác nhau.',
        '**Từ KOL đến KOC:** Xu hướng đang dịch chuyển từ các KOL (Key Opinion Leader) có lượng theo dõi lớn sang các KOC (Key Opinion Consumer) - những người tiêu dùng có sức ảnh hưởng, đưa ra các đánh giá chân thực và có tỷ lệ chuyển đổi cao hơn.',
        '**Các hình thức kiếm tiền phổ biến:** Ngoài quảng cáo trực tiếp từ nền tảng, các nhà sáng tạo Việt Nam chủ yếu kiếm tiền qua: hợp đồng quảng cáo với nhãn hàng (brand deals), affiliate marketing (đặc biệt là cho các sàn e-commerce), bán hàng qua livestream, và bán sản phẩm/dịch vụ của riêng mình.',
        '**MCN và các Agency:** Các Multi-Channel Network (MCN) và agency quản lý tài năng đóng vai trò quan trọng trong việc kết nối nhà sáng tạo với các nhãn hàng, hỗ trợ sản xuất và phát triển chiến lược.',
      ],
    },
    careerConnect: {
      name: 'Khoai Lang Thang (Đinh Võ Hoài Phương)',
      title: 'Nhà sáng tạo nội dung Du lịch & Ẩm thực',
      company: 'YouTube & Khoai Lang Thang Universe',
      imageUrl: 'https://images.unsplash.com/photo-1616587894289-8740238a5233?w=400&h=400&fit=crop',
      quote:
        'Từ một kỹ sư xây dựng, Khoai Lang Thang đã trở thành một trong những travel blogger/YouTuber thành công nhất Việt Nam. Anh nổi tiếng với phong cách kể chuyện gần gũi, hình ảnh chân thực và nội dung sâu sắc về văn hóa, ẩm thực các vùng miền. Anh đã xây dựng một thương hiệu cá nhân mạnh mẽ, đa dạng hóa nguồn thu từ YouTube, hợp đồng quảng cáo, bán sản phẩm riêng và các dự án cộng đồng.',
    },
    quizzes: [
      {
        question: 'Trong Creator Economy Việt Nam, KOC là viết tắt của từ gì?',
        options: ['Key Opinion Creator', 'Key Official Content', 'Key Opinion Consumer', 'King of Content'],
        correctAnswerIndex: 2,
        explanation:
          'KOC (Key Opinion Consumer) là những người tiêu dùng có sức ảnh hưởng, họ đưa ra các đánh giá sản phẩm một cách chân thực và có khả năng thúc đẩy doanh số bán hàng trực tiếp.',
      },
      {
        question: 'Hình thức nào sau đây KHÔNG phải là một nguồn thu nhập phổ biến của các nhà sáng tạo nội dung?',
        options: [
          'Doanh thu quảng cáo từ YouTube',
          'Hợp đồng quảng cáo với nhãn hàng',
          'Lương cố định hàng tháng từ chính phủ',
          'Bán các khóa học hoặc sản phẩm số',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các nhà sáng tạo nội dung là những doanh nhân độc lập, họ không nhận lương cố định từ chính phủ mà phải tự xây dựng các nguồn thu nhập của riêng mình.',
      },
    ],
    relatedGames: contentCreatorGame
      ? [
          {
            id: contentCreatorGame.id,
            name: contentCreatorGame.title,
            description: contentCreatorGame.description,
          },
        ]
      : [],
    exercises: [
      {
        title: 'Personal Brand Strategy',
        description: 'Develop comprehensive personal brand strategy cho tech entrepreneur',
        difficulty: 'Trung bình',
        solution: `# Personal Brand Strategy: "TechMinh" - Vietnam Tech Entrepreneur

## 1. Brand Positioning & Unique Value Proposition

### Core Identity:
**Who:** Tech entrepreneur, startup advisor, angel investor
**What:** Sharing practical insights về building tech startups trong Vietnamese market
**Why:** Bridge gap between global startup best practices và Vietnamese business culture

### Unique Value Proposition:
"Practical startup wisdom for Vietnamese entrepreneurs - từ someone who built và sold 2 tech companies ở Vietnam"

### Brand Personality:
- **Authentic:** Share both successes và failures openly
- **Practical:** Focus on actionable advice rather than theory
- **Local:** Understand Vietnamese business culture deeply
- **Global:** Connected to international startup ecosystem

## 2. Target Audience Analysis

### Primary Audience: "Aspiring Tech Entrepreneurs" (70%)
- **Demographics:** 25-35 years old, college-educated, urban areas
- **Psychographics:** Ambitious, risk-tolerant, tech-savvy
- **Pain Points:** 
  - Don't know how to start a tech business ở Vietnam
  - Lack access to mentorship và networks
  - Struggle with funding và investor relationships
- **Content Preferences:** Practical tutorials, case studies, behind-the-scenes content

### Secondary Audience: "Startup Employees" (20%)
- **Demographics:** 22-30 years old, working at startups/tech companies
- **Goals:** Career advancement, skill development, networking
- **Pain Points:** Limited growth opportunities, want to learn from leaders

### Tertiary Audience: "Investors & Partners" (10%)  
- **Demographics:** 30-50 years old, VCs, angels, corporate partners
- **Goals:** Deal flow, market insights, partnership opportunities

## 3. Content Strategy & Pillars

### Content Pillar 1: "Startup Lessons" (40% of content)
**Formats:**
- Weekly "Startup Story" posts sharing specific lessons
- "Mistake Monday" series về common startup failures
- Case study breakdowns của successful Vietnamese startups

**Example Topics:**
- "Why our first startup failed: 5 expensive lessons"
- "How Grab built their Vietnam strategy"
- "Raising money ở Vietnam vs Singapore: Key differences"

### Content Pillar 2: "Industry Insights" (30% of content)
**Formats:**
- Market analysis posts về Vietnamese tech ecosystem  
- Trend predictions và commentary
- Interview highlights với other entrepreneurs

**Example Topics:**
- "Vietnam fintech landscape: Opportunities ahead"
- "Why now is the best time để start a SaaS ở Vietnam"
- "Southeast Asia expansion: Vietnam first vs last strategy"

### Content Pillar 3: "Behind-the-Scenes" (20% of content)
**Formats:**
- Day-in-the-life content
- Investment decision process
- Travel to conferences và meetings

**Example Topics:**
- "Deciding whether to invest in this AI startup"
- "My daily routine for staying productive"
- "What I learned at TechCrunch Disrupt"

### Content Pillar 4: "Personal Development" (10% of content)
**Formats:**
- Book recommendations
- Productivity tips
- Health và wellness content

## 4. Platform Strategy

### LinkedIn (Primary Platform - 60% effort)
**Why:** Best platform cho B2B networking ở Vietnam
**Content Types:** 
- Long-form posts về startup insights
- Company updates và announcements  
- Industry commentary và analysis
**Posting Schedule:** 3x/week
**Target:** 50K followers within 12 months

### Instagram (Secondary - 25% effort)
**Why:** Visual storytelling và personal connection
**Content Types:**
- Stories: Behind-the-scenes, polls, Q&As
- Posts: Quote cards, team photos, lifestyle content
- Reels: Quick tips, office tours, event highlights
**Posting Schedule:** Daily stories, 3 posts/week
**Target:** 20K followers within 12 months

### YouTube (Growth - 15% effort)
**Why:** Long-form content và thought leadership
**Content Types:**
- Weekly "Startup Stories" episodes (10-15 phút)
- Monthly "Market Deep Dives" (20-30 phút)
- Quarterly "Investor Updates" (5-10 phút)
**Posting Schedule:** 2 videos/month initially
**Target:** 10K subscribers within 18 months

## 5. Monetization Strategy

### Year 1: Foundation Building ($0-5K/month)
**Focus:** Build audience và establish credibility
**Revenue Streams:**
- Speaking fees tại events: $500-1,500/event
- Consulting calls: $200/hour (limited availability)
- Affiliate commissions: Books, tools, services

### Year 2: Content Monetization ($5-15K/month)
**Focus:** Create premium content offerings
**Revenue Streams:**
- Online course: "From Idea to Startup" - $297
- Monthly newsletter subscription: $29/month
- Group coaching program: $997/quarter
- Brand partnerships với relevant tools

### Year 3: Business Empire ($15-50K/month)
**Focus:** Build scalable business systems
**Revenue Streams:**
- Mastermind program: $2,997/year
- Annual conference: $500K revenue potential
- Investment fund management fees
- Book deal và publishing royalties

## 6. Content Creation Workflow

### Weekly Schedule:
**Monday:** Content planning, research, interviews
**Tuesday:** Writing LinkedIn posts, creating graphics
**Wednesday:** Recording video content, editing
**Thursday:** Instagram content creation, stories
**Friday:** Community management, partnerships

### Monthly Activities:
- Strategy review và content performance analysis
- Networking events và conference speaking
- Collaboration planning với other creators
- Product development và iteration

## 7. Key Performance Indicators

### Awareness Metrics:
- **Follower Growth:** 10% month-over-month across all platforms
- **Reach:** 100K+ people reached monthly by Month 12
- **Brand Mentions:** Track mentions across social media và press

### Engagement Metrics:
- **Engagement Rate:** >5% average across all platforms
- **Comment Quality:** Focus on meaningful conversations
- **DM Volume:** Track inbound partnership opportunities

### Business Metrics:
- **Email List Growth:** 1,000 subscribers by Month 6
- **Speaking Opportunities:** 2-3 events per quarter
- **Revenue Diversification:** No single stream >40% of total

### Network Metrics:
- **Industry Connections:** Connect with 50+ ecosystem players
- **Media Coverage:** Featured in 2+ major publications
- **Influence Score:** Track mentions by other thought leaders

## 8. Risk Management & Challenges

### Potential Challenges:
1. **Time Management:** Balancing content creation với actual business activities
2. **Content Consistency:** Maintaining quality khi scaling
3. **Authenticity:** Staying genuine khi building commercial brand
4. **Market Changes:** Adapting content để tech ecosystem evolution

### Mitigation Strategies:
- **Batch Content Creation:** Create multiple pieces per session
- **Team Building:** Hire content manager by Month 6
- **Authentic Storytelling:** Always share real experiences
- **Continuous Learning:** Stay updated với industry changes

### Success Timeline:
- **Month 3:** 5K LinkedIn followers, first speaking gig
- **Month 6:** 15K total followers, first consulting client  
- **Month 12:** 50K total followers, $5K monthly revenue
- **Month 18:** 100K total followers, $15K monthly revenue
- **Month 24:** 200K total followers, $30K monthly revenue, successful product launch`,
        materials: [
          'Define clear brand positioning và target audience',
          'Create content strategy với multiple pillars',
          'Design multi-platform distribution approach',
          'Plan monetization roadmap với timeline',
        ],
        expectedResults: 'Comprehensive personal brand strategy với actionable implementation plan',
      },
    ],
    realWorldApplications: [
      'Building thought leadership trong B2B industries',
      'Monetizing expertise through online courses và coaching',
      'Creating subscription-based content businesses',
      'Developing influencer partnerships và collaborations',
      'Scaling personal brands into media companies',
    ],
    resources: [
      {
        title: 'Creator Economy Report 2024',
        url: 'https://creatoreconomy.so/report',
        type: 'article',
      },
      {
        title: 'ConvertKit Creator Toolkit',
        url: 'https://convertkit.com/creator-toolkit',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Khoai Lang Thang built media empire từ travel content',
        organization: 'Khoai Lang Thang',
        problem:
          'Monetize travel content creation trong competitive Vietnamese YouTube market với challenges về sustainable revenue và audience engagement',
        solution:
          'Diversified revenue streams: YouTube ads, brand partnerships, merchandise, tourism services với focus trên authentic storytelling',
        impact: '1M+ YouTube subscribers, $50K+ monthly revenue, successful tourism business, strong brand recognition',
        innovations: [
          'Authentic storytelling resonates strongly với Vietnamese audience',
          'Multiple revenue streams provide stability cho creators',
          'Building community around shared values drives long-term success',
        ],
      },
    ],
  },
];
