import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { K2Module } from '@/data/k2-modules';

export const lessons: BaseLessonData[] = [
  {
    id: 'digital-marketing-fundamentals',
    title: 'Bài 1: Cơ Bản Digital Marketing',
    description:
      'Tìm hiểu khái niệm Digital Marketing, các kênh chính và cách xây dựng chiến lược marketing toàn diện cho doanh nghiệp.',
    videoUrl: 'https://www.youtube.com/watch?v=HjUJf5bKCpU',
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
    exercises: [
      {
        title: 'Xây dựng Buyer Persona',
        description: 'Tạo buyer persona chi tiết cho một doanh nghiệp thực tế',
        difficulty: 'Cơ bản',
        materials: [
          'Research đối tượng khách hàng thực tế',
          'Sử dụng dữ liệu demographics và psychographics',
          'Xác định pain points và goals cụ thể',
        ],
        expectedResults: 'Một buyer persona hoàn chỉnh với ảnh đại diện, thông tin chi tiết và kế hoạch tiếp cận',
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
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Tạo customer journey map cho quy trình mua hàng online',
        difficulty: 'Trung bình',
        materials: [
          'Xác định các touchpoints chính',
          'Mô tả customer actions tại mỗi stage',
          'Phân tích emotions và pain points',
          'Đề xuất optimization opportunities',
        ],
        expectedResults: 'Journey map trực quan với các insights và action items cụ thể',
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
      },
    ],
    realWorldApplications: [
      'Xây dựng chiến lược marketing cho startup công nghệ',
      'Tối ưu hóa funnel bán hàng cho e-commerce',
      'Phát triển content strategy cho B2B company',
      'Thiết kế customer experience cho mobile app',
      'Xây dựng brand awareness cho local business',
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
    faqs: [
      {
        question: 'Digital Marketing có thực sự cần thiết cho một cửa hàng nhỏ ở Việt Nam không?',
        answer:
          'Cực kỳ cần thiết. Ngày nay, khách hàng Việt Nam, kể cả ở các thành phố nhỏ, đều tìm kiếm thông tin sản phẩm, dịch vụ trên Google và mạng xã hội trước khi mua. Digital Marketing giúp cửa hàng của bạn xuất hiện đúng lúc khách hàng cần, cạnh tranh sòng phẳng với các thương hiệu lớn và tiếp cận khách hàng vượt ra ngoài địa phương.',
      },
      {
        question: 'Sự khác biệt giữa SEO và SEM là gì?',
        answer:
          'SEO (Search Engine Optimization) là quá trình tối ưu hóa website để có thứ hạng cao trên kết quả tìm kiếm một cách tự nhiên (miễn phí). SEM (Search Engine Marketing) là một thuật ngữ rộng hơn, bao gồm cả SEO và quảng cáo trả phí trên công cụ tìm kiếm (như Google Ads). Nói đơn giản, SEO là nỗ lực dài hạn, còn SEM có thể mang lại kết quả ngay lập tức thông qua quảng cáo.',
      },
      {
        question: 'Tại sao phải xây dựng "Buyer Persona"?',
        answer:
          'Buyer Persona (chân dung khách hàng lý tưởng) giúp bạn hiểu sâu sắc khách hàng của mình là ai, họ cần gì, họ gặp khó khăn gì. Khi bạn hiểu rõ họ, mọi hoạt động marketing của bạn, từ viết nội dung, chạy quảng cáo đến phát triển sản phẩm, đều sẽ trở nên trúng đích và hiệu quả hơn, thay vì "nói chuyện" với một đám đông vô danh.',
      },
      {
        question: 'Kênh Digital Marketing nào là quan trọng nhất tại Việt Nam hiện nay?',
        answer:
          'Điều này phụ thuộc vào sản phẩm và đối tượng khách hàng của bạn. Tuy nhiên, nhìn chung, một chiến lược hiệu quả tại Việt Nam thường không thể bỏ qua: 1. Mạng xã hội (Facebook, TikTok, Zalo) để xây dựng cộng đồng và tương tác. 2. Công cụ tìm kiếm (Google) để bắt lấy nhu cầu của khách hàng. 3. Các sàn thương mại điện tử (Shopee, Lazada, TikTok Shop) nếu bạn bán lẻ.',
      },
      {
        question: 'Customer Journey Map (Bản đồ hành trình khách hàng) là gì?',
        answer: 'Đó là một sơ đồ trực quan mô tả toàn bộ trải nghiệm của khách hàng với công ty của bạn, từ lúc họ nhận biết về bạn lần đầu tiên, đến lúc cân nhắc, mua hàng, và trở thành khách hàng trung thành. Việc lập bản đồ này giúp bạn xác định các "điểm chạm" quan trọng và cơ hội để cải thiện trải nghiệm khách hàng.'
      },
      {
        question: 'Marketing 360 độ là gì?',
        answer: 'Marketing 360 độ là một chiến lược tiếp thị tích hợp, sử dụng đồng bộ nhiều kênh cả online (SEO, social media, email) và offline (sự kiện, PR) để tạo ra một trải nghiệm thương hiệu nhất quán và liền mạch cho khách hàng ở mọi điểm chạm.'
      },
      {
        question: 'Làm thế nào để đo lường ROI (Return on Investment) trong Digital Marketing?',
        answer: 'Để đo lường ROI, bạn lấy tổng doanh thu tạo ra từ marketing, trừ đi tổng chi phí marketing, sau đó chia cho tổng chi phí marketing. Ví dụ: (Doanh thu 100 triệu - Chi phí 20 triệu) / Chi phí 20 triệu = 4. Điều này có nghĩa là ROI của bạn là 400%, hay mỗi 1 đồng chi ra bạn thu về 4 đồng lợi nhuận.'
      },
      {
        question: 'Sự khác biệt giữa Inbound và Outbound Marketing là gì?',
        answer: 'Outbound Marketing là hình thức "chen ngang" như quảng cáo TV, gọi điện thoại. Inbound Marketing là hình thức "thu hút" khách hàng bằng cách tạo ra nội dung giá trị (blog, video, SEO) để họ tự tìm đến bạn. Digital marketing hiện đại tập trung nhiều vào Inbound Marketing.'
      },
      {
        question: 'Pain points (Điểm đau) của khách hàng là gì?',
        answer: 'Pain points là những vấn đề, thách thức, hoặc sự khó chịu cụ thể mà khách hàng tiềm năng của bạn đang gặp phải. Hiểu rõ "nỗi đau" của họ là chìa khóa để định vị sản phẩm của bạn như một giải pháp và tạo ra các thông điệp marketing hiệu quả.'
      },
      {
        question: 'Tại sao cần phải có một website chuyên nghiệp?',
        answer: 'Website là "ngôi nhà số" của thương hiệu bạn. Đó là nơi bạn hoàn toàn kiểm soát thông điệp và trải nghiệm của khách hàng, không phụ thuộc vào thuật toán của mạng xã hội. Một website chuyên nghiệp xây dựng sự tin cậy, thu thập dữ liệu khách hàng và là trung tâm cho mọi hoạt động digital marketing.'
      }
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
    exercises: [
      {
        title: 'Content Calendar Planning',
        description: 'Tạo content calendar 1 tháng cho fanpage Facebook của một thương hiệu',
        difficulty: 'Cơ bản',
        materials: [
          'Lên kế hoạch content cho 4 tuần',
          'Cân bằng các loại content khác nhau',
          'Xác định optimal posting times',
          'Include call-to-actions cho mỗi post',
        ],
        expectedResults: 'Content calendar chi tiết với descriptions, hashtags và posting schedule',
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
      },
    ],
    realWorldApplications: [
      'Xây dựng thương hiệu cá nhân trên LinkedIn',
      'Phát triển fanpage Facebook cho local business',
      'Tạo viral marketing campaigns trên TikTok',
      'Quản lý social commerce trên Instagram',
      'Crisis management trong social media',
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
    faqs: [
      {
        question: 'Nên tập trung vào Facebook, Instagram hay TikTok cho doanh nghiệp của tôi?',
        answer:
          'Điều này phụ thuộc hoàn toàn vào đối tượng khách hàng của bạn. Nếu bạn nhắm đến Gen Z, TikTok là không thể bỏ qua. Nếu sản phẩm của bạn có yếu tố hình ảnh cao (thời trang, ẩm thực), Instagram là lựa chọn tốt. Facebook vẫn là nền tảng lớn nhất, phù hợp với nhiều đối tượng, đặc biệt là cho việc xây dựng cộng đồng và chạy quảng cáo nhắm mục tiêu chi tiết.',
      },
      {
        question: 'Làm thế nào để tăng tương tác trên mạng xã hội một cách tự nhiên?',
        answer:
          'Hãy tạo ra nội dung thực sự giá trị và có tính tương tác cao. Đặt câu hỏi, tạo cuộc thăm dò ý kiến (polls), tổ chức mini-game, và trả lời mọi bình luận. Nội dung nên tập trung vào việc giải quyết vấn đề hoặc mang lại niềm vui cho khán giả, thay vì chỉ nói về sản phẩm của bạn. Video ngắn và livestream cũng là những định dạng rất hiệu quả.',
      },
      {
        question: 'Chạy quảng cáo trên mạng xã hội có thực sự hiệu quả không?',
        answer:
          'Cực kỳ hiệu quả nếu bạn làm đúng cách. Sức mạnh của quảng cáo mạng xã hội nằm ở khả năng nhắm mục tiêu (targeting) siêu chi tiết. Bạn có thể tiếp cận chính xác những người có khả năng quan tâm đến sản phẩm của bạn dựa trên sở thích, hành vi, nhân khẩu học. Hãy bắt đầu với ngân sách nhỏ, thử nghiệm (A/B testing) các mẫu quảng cáo và đối tượng khác nhau để tìm ra công thức hiệu quả nhất.',
      },
      {
        question: 'KOC/KOL là gì và khi nào tôi nên sử dụng họ?',
        answer:
          'KOL (Key Opinion Leader) là người có sức ảnh hưởng lớn, còn KOC (Key Opinion Consumer) là người tiêu dùng có chuyên môn và đưa ra đánh giá chân thực. Bạn nên sử dụng họ khi muốn tăng độ nhận diện thương hiệu, xây dựng lòng tin và thúc đẩy doanh số. Hãy chọn những người có tệp người theo dõi phù hợp với khách hàng mục tiêu của bạn và có phong cách chân thực, đáng tin cậy.',
      },
      {
        question: 'Content Pillar (Trụ cột nội dung) là gì?',
        answer: 'Content Pillar là 3-5 chủ đề cốt lõi mà thương hiệu của bạn sẽ tập trung vào. Việc xác định các trụ cột này giúp bạn tạo ra nội dung nhất quán, có chiều sâu và xây dựng được vị thế chuyên gia trong lĩnh vực của mình, thay vì sản xuất nội dung một cách ngẫu hứng.'
      },
      {
        question: 'Làm thế nào để xử lý khủng hoảng truyền thông trên mạng xã hội?',
        answer: 'Quy tắc vàng là: Nhanh chóng, Minh bạch và Chân thành. Hãy thừa nhận vấn đề một cách nhanh chóng, đưa ra lời giải thích rõ ràng (nếu có thể), thể hiện sự đồng cảm và đưa ra giải pháp. Đừng xóa các bình luận tiêu cực (trừ khi chúng có nội dung xúc phạm), thay vào đó hãy trả lời một cách chuyên nghiệp.'
      },
      {
        question: 'Social Listening là gì?',
        answer: 'Social Listening là quá trình theo dõi các nền tảng mạng xã hội để tìm kiếm các cuộc trò chuyện và đề cập liên quan đến thương hiệu, sản phẩm, đối thủ cạnh tranh và ngành của bạn. Nó giúp bạn nắm bắt tâm lý khách hàng, phát hiện xu hướng và xử lý các vấn đề tiềm ẩn trước khi chúng bùng phát.'
      },
      {
        question: 'Hashtag có vai trò gì và sử dụng chúng như thế nào cho hiệu quả?',
        answer: 'Hashtag giúp phân loại nội dung và tăng khả năng khám phá bài viết của bạn cho những người quan tâm đến chủ đề đó. Một chiến lược hiệu quả là sử dụng kết hợp các loại hashtag: hashtag thương hiệu (ví dụ: #BitisHunter), hashtag chiến dịch (ví dụ: #DiDeTroVe), và hashtag cộng đồng (ví dụ: #foodreview).'
      },
      {
        question: 'Thế nào là một nội dung "viral"?',
        answer: 'Một nội dung viral là nội dung được lan truyền một cách tự nhiên và nhanh chóng bởi người dùng. Các yếu tố thường thấy ở nội dung viral bao gồm: cảm xúc mạnh (hài hước, cảm động, ngạc nhiên), tính liên quan cao, tính độc đáo, hoặc khơi gợi một cuộc tranh luận. Tuy nhiên, việc tạo ra nội dung viral là rất khó và không thể đoán trước.'
      },
      {
        question: 'Social Commerce là gì?',
        answer: 'Social Commerce là hình thức mua bán sản phẩm trực tiếp trên các nền tảng mạng xã hội (ví dụ: Facebook Shop, Instagram Shopping, TikTok Shop). Nó rút ngắn hành trình mua sắm của khách hàng bằng cách cho phép họ khám phá và mua hàng mà không cần rời khỏi ứng dụng, tạo ra trải nghiệm mua sắm liền mạch và tiện lợi.'
      }
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
    exercises: [
      {
        title: 'Brand Storytelling Framework',
        description: 'Tạo brand story compelling cho một startup công nghệ',
        difficulty: 'Trung bình',
        materials: [
          "Sử dụng hero's journey structure",
          'Include personal và emotional elements',
          'Connect đến larger purpose và mission',
          'Make it relatable cho target audience',
        ],
        expectedResults: 'Complete brand story với clear narrative arc và emotional connection',
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
    faqs: [
      {
        question: 'Content Marketing có phải chỉ là viết blog không?',
        answer:
          'Không hề. Viết blog chỉ là một phần của Content Marketing. Content Marketing bao gồm tất cả các loại nội dung bạn tạo ra để thu hút và giữ chân khách hàng, ví dụ: video, podcast, infographic, ebook, webinar, case study, bài đăng trên mạng xã hội... Mục tiêu là cung cấp giá trị trước khi yêu cầu họ mua hàng.',
      },
      {
        question: 'Làm thế nào để "kể chuyện" về một sản phẩm nhàm chán?',
        answer:
          'Mọi sản phẩm đều có một câu chuyện. Thay vì tập trung vào sản phẩm, hãy tập trung vào vấn đề mà nó giải quyết và những người mà nó giúp đỡ. Hãy kể câu chuyện về khách hàng của bạn: họ đã gặp khó khăn gì trước khi có sản phẩm, và cuộc sống/công việc của họ đã thay đổi như thế nào sau khi sử dụng nó. Con người luôn kết nối với câu chuyện về con người.',
      },
      {
        question: 'Sự khác biệt giữa Content Marketing và quảng cáo truyền thống là gì?',
        answer:
          'Quảng cáo truyền thống thường "chen ngang" và nói "Hãy mua tôi đi!". Content Marketing thì "thu hút" bằng cách nói "Hãy để tôi giúp bạn giải quyết vấn đề này" hoặc "Hãy để tôi kể bạn nghe một câu chuyện thú vị". Content Marketing xây dựng lòng tin và mối quan hệ lâu dài, trong khi quảng cáo thường tập trung vào việc bán hàng ngay lập tức.',
      },
      {
        question: 'Làm sao để biết Content Marketing có hiệu quả hay không?',
        answer:
          'Bạn cần đo lường các chỉ số phù hợp với mục tiêu của mình. Nếu mục tiêu là nhận diện thương hiệu, hãy đo lường lượt truy cập (traffic), lượt xem (views), lượt chia sẻ (shares). Nếu mục tiêu là tạo khách hàng tiềm năng (leads), hãy đo lường số lượng email đăng ký, lượt tải ebook. Nếu mục tiêu là doanh số, hãy theo dõi tỷ lệ chuyển đổi từ những người đã xem nội dung của bạn.',
      },
      {
        question: 'Content Funnel (Phễu nội dung) là gì?',
        answer: 'Đó là một mô hình mô tả việc tạo ra các loại nội dung khác nhau cho từng giai đoạn của hành trình của khách hàng. Giai đoạn đầu phễu (TOFU) là nội dung thu hút (blog, video giải trí). Giai đoạn giữa (MOFU) là nội dung nuôi dưỡng (ebook, webinar). Giai đoạn cuối (BOFU) là nội dung chuyển đổi (case study, demo sản phẩm).'
      },
      {
        question: 'Làm thế nào để tìm ý tưởng viết bài không bao giờ cạn?',
        answer: 'Hãy bắt đầu từ khách hàng của bạn. Họ đang hỏi những câu gì? Họ gặp khó khăn gì? Sử dụng các công cụ nghiên cứu từ khóa (Ahrefs, SEMrush), theo dõi các câu hỏi trên các diễn đàn (Quora, Reddit), xem đối thủ của bạn đang viết gì, và tái sử dụng nội dung cũ dưới các định dạng mới (ví dụ: biến một bài blog thành video).'
      },
      {
        question: 'Brand Narrative (Tường thuật thương hiệu) là gì?',
        answer: 'Brand Narrative là câu chuyện tổng thể, bao trùm mà thương hiệu của bạn kể cho thế giới. Nó không chỉ là một câu chuyện đơn lẻ, mà là một chuỗi các thông điệp, giá trị, và trải nghiệm nhất quán qua thời gian, giúp định hình cách công chúng nhìn nhận về thương hiệu của bạn.'
      },
      {
        question: 'Evergreen Content (Nội dung thường xanh) là gì?',
        answer: 'Là loại nội dung không bị lỗi thời và vẫn giữ nguyên giá trị theo thời gian. Ví dụ: "Hướng dẫn cách chăm sóc cây cảnh trong nhà" là nội dung thường xanh, trong khi "Tin tức về sự kiện X" sẽ nhanh chóng mất đi sự liên quan. Đầu tư vào nội dung thường xanh rất tốt cho SEO và thu hút lưu lượng truy cập bền vững.'
      },
      {
        question: 'Tại sao Storytelling lại quan trọng trong marketing?',
        answer: 'Con người được lập trình để ghi nhớ và kết nối với các câu chuyện, không phải các dữ kiện và con số. Kể chuyện giúp thương hiệu của bạn trở nên gần gũi, dễ nhớ và khác biệt. Một câu chuyện hay có thể truyền tải giá trị, xây dựng lòng tin và thúc đẩy hành động hiệu quả hơn bất kỳ lời quảng cáo nào.'
      },
      {
        question: 'Làm thế nào để đo lường ROI của Content Marketing?',
        answer: 'Đây là một thách thức. Một cách tiếp cận là sử dụng các mô hình phân bổ (attribution models) trong Google Analytics để xem nội dung nào đã đóng góp vào hành trình của khách hàng trước khi họ mua hàng. Bạn cũng có thể theo dõi các chỉ số gián tiếp như tăng trưởng lưu lượng truy cập tự nhiên, số lượng khách hàng tiềm năng tạo ra, và sự cải thiện về nhận diện thương hiệu.'
      }
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
    exercises: [
      {
        title: 'SEO Audit & Strategy',
        description: 'Thực hiện SEO audit toàn diện cho một website thương mại điện tử',
        difficulty: 'Nâng cao',
        materials: [
          'Analyze technical SEO factors',
          'Review on-page optimization',
          'Assess backlink profile quality',
          'Create prioritized action plan',
        ],
        expectedResults: 'Detailed SEO audit report với actionable recommendations và timeline',
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
    faqs: [
      {
        question: 'SEO mất bao lâu để có kết quả?',
        answer:
          'SEO là một cuộc chạy marathon, không phải chạy nước rút. Thông thường, bạn có thể bắt đầu thấy những kết quả đầu tiên sau 3-6 tháng nỗ lực nhất quán. Kết quả bền vững và thứ hạng cao cho các từ khóa cạnh tranh có thể mất từ 6 tháng đến một năm. SEO đòi hỏi sự kiên nhẫn, nhưng lợi ích dài hạn là rất lớn.',
      },
      {
        question: 'Tôi có thể tự làm SEO cho website của mình không?',
        answer:
          'Hoàn toàn có thể, đặc biệt là với các website nhỏ. Bạn có thể bắt đầu bằng việc học các kiến thức cơ bản về SEO on-page (tối ưu hóa tiêu đề, mô tả, nội dung), nghiên cứu từ khóa đơn giản và tạo nội dung chất lượng. Tuy nhiên, đối với các thị trường cạnh tranh, việc thuê một chuyên gia hoặc agency có thể giúp bạn đi nhanh và hiệu quả hơn.',
      },
      {
        question: '"Content is King" có còn đúng trong SEO không?',
        answer:
          'Vẫn đúng, nhưng cần bổ sung: "Content is King, but Distribution is Queen". Nội dung chất lượng, độc đáo và giải quyết được vấn đề của người dùng vẫn là nền tảng của SEO. Tuy nhiên, nếu bạn không quảng bá nội dung đó (qua mạng xã hội, email, xây dựng backlink), sẽ không ai biết đến nó. Một nội dung tuyệt vời cần một chiến lược phân phối thông minh.',
      },
      {
        question: 'Backlink là gì và tại sao nó quan trọng?',
        answer:
          'Backlink là một liên kết từ một website khác trỏ về website của bạn. Google xem mỗi backlink như một "phiếu bầu" cho sự uy tín của website bạn. Càng có nhiều phiếu bầu từ các website uy tín, chất lượng, Google càng tin tưởng và xếp hạng website của bạn cao hơn. Tuy nhiên, chất lượng của backlink quan trọng hơn số lượng.',
      },
      {
        question: 'Sự khác biệt giữa SEO On-page, Off-page và Technical SEO là gì?',
        answer: 'SEO On-page là tối ưu hóa các yếu tố ngay trên trang web của bạn (nội dung, từ khóa, tiêu đề). SEO Off-page là các hoạt động bên ngoài website để tăng uy tín (xây dựng backlink, social media). Technical SEO là đảm bảo nền tảng kỹ thuật của website thân thiện với công cụ tìm kiếm (tốc độ trang, cấu trúc dữ liệu, sitemap).'
      },
      {
        question: 'Keyword Research (Nghiên cứu từ khóa) là gì?',
        answer: 'Đó là quá trình tìm kiếm và phân tích các cụm từ mà người dùng nhập vào công cụ tìm kiếm. Mục tiêu là tìm ra những từ khóa có lượng tìm kiếm cao, mức độ cạnh tranh vừa phải và quan trọng nhất là phù hợp với sản phẩm/dịch vụ của bạn. Đây là bước đầu tiên và quan trọng nhất trong mọi chiến dịch SEO.'
      },
      {
        question: 'Domain Authority (DA) là gì?',
        answer: 'Domain Authority là một chỉ số do công ty Moz tạo ra để dự đoán khả năng xếp hạng của một website trên công cụ tìm kiếm. Thang điểm từ 1 đến 100. DA cao hơn cho thấy website có uy tín và khả năng xếp hạng tốt hơn. Nó được tính toán dựa trên nhiều yếu tố, trong đó quan trọng nhất là số lượng và chất lượng của backlink.'
      },
      {
        question: 'Local SEO là gì và nó quan trọng như thế nào đối với doanh nghiệp Việt Nam?',
        answer: 'Local SEO là tối ưu hóa để website của bạn xuất hiện khi người dùng tìm kiếm các dịch vụ/sản phẩm "gần đây" (ví dụ: "quán cà phê gần đây"). Nó cực kỳ quan trọng cho các doanh nghiệp có địa điểm thực tế như nhà hàng, cửa hàng, spa... vì hầu hết khách hàng đều tìm kiếm thông tin trên Google Maps trước khi đến.'
      },
      {
        question: 'Google E-E-A-T là gì?',
        answer: 'E-E-A-T là viết tắt của Experience (Kinh nghiệm), Expertise (Chuyên môn), Authoritativeness (Thẩm quyền), và Trustworthiness (Độ tin cậy). Đây là các yếu tố Google sử dụng để đánh giá chất lượng của một trang web, đặc biệt là các trang trong lĩnh vực YMYL (Your Money or Your Life - liên quan đến tiền bạc, sức khỏe). Để có thứ hạng tốt, nội dung của bạn phải thể hiện được các yếu tố này.'
      },
      {
        question: 'Làm thế nào để xây dựng backlink chất lượng?',
        answer: 'Hãy tạo ra nội dung tuyệt vời mà người khác muốn liên kết đến một cách tự nhiên. Các phương pháp khác bao gồm: viết bài với tư cách khách (guest posting) trên các blog uy tín, tham gia vào các cuộc phỏng vấn hoặc podcast, và xây dựng các công cụ miễn phí hữu ích. Tránh mua backlink hoặc sử dụng các chiến thuật spam, vì chúng có thể khiến website của bạn bị Google phạt.'
      }
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
    exercises: [
      {
        title: 'Google Ads Campaign Setup',
        description: 'Tạo complete Google Ads campaign cho một online course business',
        difficulty: 'Nâng cao',
        materials: [
          'Set up campaign structure với proper targeting',
          'Create compelling ad copy với local relevance',
          'Design conversion tracking strategy',
          'Plan optimization và scaling roadmap',
        ],
        expectedResults: 'Complete Google Ads campaign setup với detailed strategy và optimization plan',
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
    faqs: [
      {
        question: 'Tôi nên chi bao nhiêu tiền cho quảng cáo trả phí?',
        answer:
          'Không có một con số cố định. Thay vì hỏi "bao nhiêu", hãy hỏi "ROI (Return on Investment) là bao nhiêu?". Bạn có thể bắt đầu với một ngân sách nhỏ (ví dụ: 1-2 triệu VNĐ/tháng) để thử nghiệm. Nếu mỗi 1 đồng bạn chi ra mang về 4-5 đồng doanh thu, bạn có thể tự tin tăng ngân sách. Điều quan trọng là phải theo dõi và đo lường hiệu quả liên tục.',
      },
      {
        question: 'Tại sao quảng cáo của tôi không ra đơn?',
        answer:
          'Có nhiều lý do: 1. Nhắm mục tiêu sai đối tượng. 2. Nội dung quảng cáo không hấp dẫn. 3. Lời kêu gọi hành động (Call-to-Action) không rõ ràng. 4. Trang đích (Landing Page) không tối ưu, khó sử dụng hoặc không đáng tin cậy. 5. Giá sản phẩm hoặc ưu đãi không cạnh tranh. Hãy kiểm tra lại toàn bộ hành trình của khách hàng, từ lúc họ thấy quảng cáo đến lúc thanh toán.',
      },
      {
        question: 'Google Ads và Facebook Ads, tôi nên chọn cái nào?',
        answer:
          'Hãy đi đến nơi khách hàng của bạn đang ở. Google Ads rất mạnh trong việc "bắt lấy nhu cầu" (khi ai đó chủ động tìm kiếm một sản phẩm/dịch vụ). Facebook Ads lại xuất sắc trong việc "tạo ra nhu cầu" (tiếp cận những người có thể quan tâm dựa trên sở thích và hành vi của họ, ngay cả khi họ chưa tìm kiếm). Nhiều doanh nghiệp thành công sử dụng cả hai kênh này.',
      },
      {
        question: 'Remarketing (Tiếp thị lại) là gì và nó có hiệu quả không?',
        answer:
          'Remarketing là hình thức quảng cáo nhắm đến những người đã từng truy cập website của bạn nhưng chưa mua hàng. Đây là một chiến thuật cực kỳ hiệu quả vì bạn đang quảng cáo cho những người đã biết đến thương hiệu của bạn. Tỷ lệ chuyển đổi từ các chiến dịch remarketing thường cao hơn nhiều so với quảng cáo cho đối tượng hoàn toàn mới.',
      },
      {
        question: 'Chỉ số CTR (Click-Through Rate) là gì và nó có ý nghĩa gì?',
        answer: 'CTR là tỷ lệ phần trăm số lần người dùng nhấp vào quảng cáo của bạn sau khi nhìn thấy nó. CTR cao cho thấy mẫu quảng cáo của bạn hấp dẫn và liên quan đến đối tượng mục tiêu. Trên Google Ads, CTR cao cũng góp phần làm tăng Điểm chất lượng (Quality Score) và giảm chi phí mỗi lượt nhấp.'
      },
      {
        question: 'Điểm chất lượng (Quality Score) trong Google Ads là gì?',
        answer: 'Quality Score là một chỉ số từ 1-10 mà Google dùng để đánh giá chất lượng và sự liên quan của quảng cáo, từ khóa và trang đích của bạn. Điểm chất lượng cao hơn sẽ giúp quảng cáo của bạn có vị trí tốt hơn và chi phí mỗi lượt nhấp (CPC) thấp hơn.'
      },
      {
        question: 'Lookalike Audience (Đối tượng tương tự) trên Facebook là gì?',
        answer: 'Đây là một công cụ cực kỳ mạnh mẽ của Facebook. Bạn có thể tải lên một danh sách khách hàng hiện tại của mình, và Facebook sẽ tìm và tạo ra một tệp đối tượng mới có những đặc điểm, sở thích và hành vi tương tự như tệp khách hàng gốc của bạn. Điều này giúp bạn mở rộng quy mô quảng cáo đến những người có khả năng cao sẽ quan tâm đến sản phẩm.'
      },
      {
        question: 'PPC (Pay-Per-Click) là gì?',
        answer: 'PPC là một mô hình quảng cáo trực tuyến trong đó nhà quảng cáo trả một khoản phí mỗi khi một trong số các quảng cáo của họ được nhấp chuột. Về cơ bản, đó là cách "mua" lượt truy cập vào trang web của bạn, thay vì cố gắng "kiếm" những lượt truy cập đó một cách tự nhiên thông qua SEO.'
      },
      {
        question: 'Làm thế nào để tối ưu hóa trang đích (Landing Page) cho quảng cáo?',
        answer: 'Trang đích phải có thông điệp nhất quán với quảng cáo. Nó cần có một tiêu đề rõ ràng, lợi ích nổi bật, hình ảnh/video hấp dẫn, bằng chứng xã hội (đánh giá, logo khách hàng), và một lời kêu gọi hành động (Call-to-Action) duy nhất, nổi bật. Tốc độ tải trang nhanh cũng cực kỳ quan trọng.'
      },
      {
        question: 'Tôi có nên chạy quảng cáo trên TikTok không?',
        answer: 'Nếu đối tượng khách hàng của bạn là Gen Z và Millennials trẻ, thì câu trả lời gần như chắc chắn là có. TikTok là một nền tảng mạnh mẽ để xây dựng nhận diện thương hiệu và thúc đẩy doanh số thông qua các video ngắn, sáng tạo. Quảng cáo trên TikTok thường có tính giải trí cao và ít "giống quảng cáo" hơn so với các nền tảng khác.'
      }
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
    exercises: [
      {
        title: 'Email Automation Workflow',
        description: 'Thiết kế complete email automation cho SaaS product trial users',
        difficulty: 'Trung bình',
        materials: [
          'Map complete email sequence với clear goals',
          'Include personalization và segmentation logic',
          'Design compelling subject lines và content',
          'Set measurable performance targets',
        ],
        expectedResults: 'Complete email automation workflow với content examples và performance metrics',
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
    faqs: [
      {
        question: 'Email marketing có còn hiệu quả không khi đã có quá nhiều mạng xã hội?',
        answer:
          'Vẫn cực kỳ hiệu quả. Email là kênh bạn sở hữu 100%, không bị chi phối bởi thuật toán của bên thứ ba như mạng xã hội. Đây là kênh trực tiếp nhất để xây dựng mối quan hệ 1-1 với khách hàng, nuôi dưỡng khách hàng tiềm năng và thúc đẩy khách hàng quay lại mua hàng. ROI của email marketing thường cao nhất trong các kênh digital marketing.',
      },
      {
        question: 'Làm thế nào để người dùng không cho email của tôi vào mục spam?',
        answer:
          'Đầu tiên, chỉ gửi email cho những người đã đồng ý nhận tin (opt-in). Thứ hai, cung cấp nội dung thực sự giá trị và liên quan. Thứ ba, đừng gửi email với tần suất quá dày. Thứ tư, luôn có một nút "hủy đăng ký" (unsubscribe) rõ ràng. Cuối cùng, hãy cá nhân hóa email, gọi tên họ và gửi nội dung dựa trên hành vi của họ.',
      },
      {
        question: 'Automation trong email marketing là gì?',
        answer:
          'Đó là việc thiết lập các chuỗi email được gửi đi một cách tự động dựa trên một hành động hoặc mốc thời gian cụ thể của người dùng. Ví dụ: tự động gửi email chào mừng khi có người đăng ký, tự động gửi email nhắc nhở khi họ bỏ quên giỏ hàng, hoặc tự động gửi email chúc mừng sinh nhật kèm mã giảm giá. Nó giúp bạn chăm sóc khách hàng 24/7 một cách cá nhân hóa.',
      },
      {
        question: 'Tiêu đề email như thế nào là hiệu quả?',
        answer:
          'Một tiêu đề hiệu quả cần ngắn gọn, hấp dẫn và gợi sự tò mò. Hãy thử cá nhân hóa bằng cách thêm tên người nhận, sử dụng con số, đặt câu hỏi, hoặc tạo cảm giác khẩn cấp (một cách có chừng mực). A/B testing (thử nghiệm 2 phiên bản) các tiêu đề khác nhau là cách tốt nhất để biết điều gì hiệu quả với đối tượng của bạn.',
      },
      {
        question: 'Làm thế nào để xây dựng danh sách email (email list)?',
        answer: 'Cách tốt nhất là cung cấp một thứ gì đó giá trị để đổi lấy địa chỉ email của người dùng. Đây được gọi là "lead magnet". Ví dụ: cung cấp một ebook miễn phí, một mã giảm giá, một checklist hữu ích, hoặc quyền truy cập vào một webinar. Đừng bao giờ mua danh sách email, vì nó sẽ làm hại đến uy tín của bạn và hiệu quả rất thấp.'
      },
      {
        question: 'Phân khúc (Segmentation) trong email marketing là gì?',
        answer: 'Phân khúc là việc chia danh sách email của bạn thành các nhóm nhỏ hơn dựa trên các tiêu chí nhất định (ví dụ: những người đã mua hàng, những người chưa mua, những người quan tâm đến sản phẩm A...). Việc này cho phép bạn gửi những nội dung phù hợp và cá nhân hóa hơn cho từng nhóm, từ đó tăng tỷ lệ mở và tỷ lệ nhấp.'
      },
      {
        question: 'Tỷ lệ mở (Open Rate) và Tỷ lệ nhấp (Click-Through Rate) là gì?',
        answer: 'Tỷ lệ mở là phần trăm người nhận đã mở email của bạn. Tỷ lệ nhấp là phần trăm người nhận đã nhấp vào một liên kết bên trong email đó. Đây là hai chỉ số cơ bản để đo lường mức độ hấp dẫn của tiêu đề và nội dung email của bạn.'
      },
      {
        question: 'Chuỗi email chào mừng (Welcome Series) là gì?',
        answer: 'Đó là một chuỗi từ 3-5 email được gửi tự động cho người đăng ký mới. Đây là cơ hội vàng để giới thiệu về thương hiệu của bạn, xây dựng lòng tin, và hướng dẫn họ những bước tiếp theo. Các email trong chuỗi chào mừng thường có tỷ lệ mở và tương tác cao nhất.'
      },
      {
        question: 'Làm thế nào để viết nội dung email hấp dẫn?',
        answer: 'Hãy viết như thể bạn đang nói chuyện với một người bạn. Sử dụng ngôn ngữ đơn giản, trực tiếp. Tập trung vào một ý chính cho mỗi email. Sử dụng các đoạn văn ngắn, gạch đầu dòng và hình ảnh để email dễ đọc hơn. Và quan trọng nhất, luôn có một lời kêu gọi hành động (Call-to-Action) rõ ràng.'
      },
      {
        question: 'Các công cụ email marketing phổ biến ở Việt Nam là gì?',
        answer: 'Trên thế giới, các công cụ phổ biến là Mailchimp, ConvertKit, Klaviyo. Tại Việt Nam, nhiều doanh nghiệp cũng sử dụng các giải pháp trong nước như GetResponse, Sendinblue (nay là Brevo), hoặc các nền tảng CRM có tích hợp email marketing như HubSpot, Zoho.'
      }
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
    exercises: [
      {
        title: 'Marketing Analytics Dashboard',
        description: 'Tạo comprehensive marketing dashboard cho e-commerce business',
        difficulty: 'Nâng cao',
        materials: [
          'Include traffic acquisition và conversion metrics',
          'Analyze customer behavior patterns',
          'Calculate ROI cho different marketing channels',
          'Provide actionable insights và recommendations',
        ],
        expectedResults: 'Comprehensive marketing dashboard với key metrics, analysis và actionable recommendations',
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
- Top Acquisition Channel: Paid Search

**Returning Customers:** 35% of transactions
- Average Order Value: $250
- Customer Lifetime Value: $850
- Top Retention Channel: Email Marketing

### Section 5: Actionable Insights & Recommendations

#### Key Insights
1. **Cart Abandonment is High (75%):** Significant revenue leakage at checkout.
2. **Email Marketing has Highest ROI:** Underutilized channel with huge potential.
3. **Mobile Traffic High, Conversion Low:** Mobile experience needs optimization.
4. **Paid Search Drives New Customers:** Effective for acquisition but lower AOV.
5. **Organic Search Drives High-Value Traffic:** High engagement and conversion.

#### Strategic Initiatives (3-6 months)
1. **Implement Cart Abandonment Email Sequence:** Target 75% of users who drop off.
   - **Expected Impact:** Recover 10-15% of abandoned carts, adding $30k-$45k monthly revenue.
2. **Scale Email Marketing Efforts:** Increase email frequency and segmentation.
   - **Expected Impact:** Double email revenue to $72k/month.
3. **Mobile Checkout Optimization Project:** A/B test mobile checkout flow.
   - **Insight:** 70% of traffic is mobile, nhưng mobile conversion là 40% lower.
   - **Expected Impact:** Increase mobile conversion rate by 20%.
4. **Shift Budget to SEO & Content:** Reallocate 10% of paid search budget to content creation.
   - **Expected Impact:** Increase organic traffic by 30%, improve brand visibility.`,
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa chi tiêu marketing cho startup',
      'Xây dựng hệ thống báo cáo marketing cho doanh nghiệp',
      'Phân tích hành vi người dùng để cải thiện sản phẩm',
      'Thực hiện A/B testing để tăng tỷ lệ chuyển đổi website',
      'Dự báo doanh thu dựa trên dữ liệu marketing',
    ],
    faqs: [
      {
        question: 'Data-Driven Marketing là gì?',
        answer: 'Data-Driven Marketing (Marketing dựa trên dữ liệu) là phương pháp sử dụng dữ liệu thu thập được từ các tương tác của khách hàng để hiểu rõ hơn về họ, từ đó đưa ra các quyết định marketing chính xác, hiệu quả và được cá nhân hóa hơn.'
      },
      {
        question: 'Google Analytics 4 (GA4) khác gì so với phiên bản cũ (Universal Analytics)?',
        answer: 'GA4 là một sự thay đổi lớn. Nó tập trung vào việc theo dõi "sự kiện" (events) thay vì "phiên" (sessions), giúp theo dõi hành trình người dùng xuyên suốt trên cả website và ứng dụng di động. GA4 cũng tích hợp sâu hơn trí tuệ nhân tạo để đưa ra các dự báo và phân tích thông minh.'
      },
      {
        question: 'A/B testing là gì và tại sao nó quan trọng?',
        answer: 'A/B testing là một phương pháp thử nghiệm trong đó bạn tạo ra hai phiên bản (A và B) của một yếu tố nào đó (ví dụ: tiêu đề, nút bấm, màu sắc) và cho một nửa người dùng xem phiên bản A, nửa còn lại xem phiên bản B. Bằng cách đo lường phiên bản nào có tỷ lệ chuyển đổi tốt hơn, bạn có thể đưa ra quyết định cải tiến dựa trên dữ liệu thực tế thay vì phỏng đoán.'
      },
      {
        question: 'Conversion Funnel (Phễu chuyển đổi) là gì?',
        answer: 'Phễu chuyển đổi là một mô hình mô tả các bước mà một người dùng trải qua từ lúc biết đến sản phẩm của bạn cho đến khi thực hiện một hành động mong muốn (ví dụ: mua hàng, đăng ký). Phân tích phễu giúp bạn xác định được người dùng đang "rơi rụng" ở bước nào để có biện pháp cải thiện.'
      },
      {
        question: 'UTM parameters là gì và sử dụng chúng để làm gì?',
        answer: 'UTM parameters là các đoạn mã bạn thêm vào cuối URL để theo dõi hiệu quả của các chiến dịch marketing. Chúng giúp Google Analytics biết được người dùng đến từ nguồn nào (utm_source), phương tiện nào (utm_medium), và chiến dịch cụ thể nào (utm_campaign). Điều này cực kỳ quan trọng để đo lường ROI của từng kênh.'
      },
      {
        question: 'Làm thế nào để phân tích hành vi người dùng trên website?',
        answer: 'Ngoài Google Analytics, bạn có thể sử dụng các công cụ như Hotjar hoặc Microsoft Clarity. Chúng cung cấp các bản đồ nhiệt (heatmaps) cho thấy người dùng hay nhấp vào đâu, các bản ghi phiên (session recordings) để xem lại chính xác cách người dùng tương tác với trang web, giúp bạn phát hiện các vấn đề về trải nghiệm người dùng.'
      },
      {
        question: 'Chỉ số Bounce Rate (Tỷ lệ thoát) có còn quan trọng trong GA4 không?',
        answer: 'Trong GA4, khái niệm Bounce Rate đã được thay thế bằng "Engaged sessions" (Phiên tương tác). Một phiên được tính là có tương tác nếu nó kéo dài hơn 10 giây, có một sự kiện chuyển đổi, hoặc có ít nhất 2 lượt xem trang. Tỷ lệ tương tác (Engagement Rate) là một chỉ số tích cực hơn, cho biết có bao nhiêu phần trăm người dùng thực sự tương tác với trang của bạn.'
      },
      {
        question: 'Làm thế nào để bắt đầu với việc phân tích dữ liệu khi tôi không phải là chuyên gia?',
        answer: 'Hãy bắt đầu đơn giản. Tập trung vào 3-5 chỉ số quan trọng nhất đối với doanh nghiệp của bạn (ví dụ: số lượng người dùng mới, tỷ lệ chuyển đổi, chi phí cho mỗi khách hàng). Sử dụng các báo cáo mặc định của Google Analytics. Đặt ra các câu hỏi kinh doanh cụ thể (ví dụ: "Kênh nào mang lại nhiều khách hàng nhất?") và dùng dữ liệu để trả lời chúng.'
      },
      {
        question: 'Attribution Model (Mô hình phân bổ) là gì?',
        answer: 'Mô hình phân bổ là quy tắc xác định cách ghi nhận công lao cho các điểm chạm trong hành trình chuyển đổi. Ví dụ, một khách hàng thấy quảng cáo Facebook, sau đó tìm kiếm trên Google, rồi mới mua hàng. Mô hình "Last Click" sẽ ghi 100% công lao cho Google. Các mô hình khác (Linear, Time Decay) sẽ phân chia công lao cho cả hai kênh. GA4 mặc định sử dụng mô hình dựa trên dữ liệu (Data-Driven Attribution).'
      },
      {
        question: 'Làm thế nào để đảm bảo dữ liệu thu thập được là chính xác?',
        answer: 'Việc cài đặt tracking code đúng cách là cực kỳ quan trọng. Sử dụng Google Tag Manager để quản lý tất cả các thẻ theo dõi một cách có tổ chức. Thường xuyên kiểm tra và xác thực các sự kiện chuyển đổi để đảm bảo chúng đang được ghi nhận chính xác. Lọc ra lưu lượng truy cập nội bộ (từ nhân viên công ty) để không làm sai lệch dữ liệu.'
      }
    ]
  },
  {
    id: 'creator-economy-personal-branding',
    title: 'Bài 8: Creator Economy & Personal Branding',
    description: 'Xây dựng thương hiệu cá nhân và tạo thu nhập từ đam mê của bạn trong nền kinh tế sáng tạo.',
    videoUrl: 'https://www.youtube.com/watch?v=N46lJ-p4I4M',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '100 phút',
    objectives: [
      'Hiểu về Creator Economy và các mô hình kinh doanh',
      'Xây dựng chiến lược thương hiệu cá nhân bền vững',
      'Tạo nội dung thu hút và xây dựng cộng đồng',
      'Đa dạng hóa nguồn thu nhập (sản phẩm số, affiliate, brand deals)',
      'Phát triển từ một người sáng tạo thành một doanh nghiệp',
    ],
    prerequisites: ['Đam mê một lĩnh vực cụ thể', 'Kỹ năng giao tiếp và sáng tạo'],
    exercises: [
      {
        title: 'Personal Brand Strategy Blueprint',
        description: 'Tạo một kế hoạch chi tiết để xây dựng thương hiệu cá nhân trong lĩnh vực công nghệ tại Việt Nam.',
        difficulty: 'Trung bình',
        materials: [
          'Xác định niche, đối tượng mục tiêu và thông điệp cốt lõi.',
          'Lập kế hoạch nội dung cho 3-6 tháng đầu tiên.',
          'Xây dựng kế hoạch đa dạng hóa nguồn thu nhập.',
          'Đặt ra các KPI để đo lường sự thành công.',
        ],
        expectedResults: 'Một bản kế hoạch chiến lược thương hiệu cá nhân hoàn chỉnh với các bước hành động cụ thể.',
        solution: `# Personal Brand Strategy: "The Vietnam Tech Catalyst"

## 1. Brand Foundation

### Niche:
Helping non-technical professionals (marketing, sales, HR) understand and leverage emerging technologies (AI, Blockchain, Low-code) in the Vietnamese business context.

### Target Audience:
- Mid-level managers (28-40) in non-tech roles in Vietnam.
- Ambitious professionals looking to upskill.
- Small business owners wanting to implement tech.

### Core Message:
"Bạn không cần phải là một lập trình viên để có thể ứng dụng công nghệ. Tôi sẽ giúp bạn dịch chuyển từ một người 'sợ công nghệ' thành một người 'lãnh đạo bằng công nghệ'."

### Unique Selling Proposition (USP):
Simplifying complex tech concepts with practical, local Vietnamese case studies and actionable frameworks.

## 2. Content Strategy (First 6 Months)

### Content Pillars:
1.  **Tech Explained Simply:** (e.g., "AI cho Marketers trong 5 phút", "Blockchain không phải là Bitcoin")
2.  **Practical Applications:** (e.g., "5 công cụ AI giúp phòng nhân sự tiết kiệm 10 giờ/tuần")
3.  **Career & Upskilling:** (e.g., "Kỹ năng công nghệ nào cần học trong năm 2025?")
4.  **Vietnam Tech Scene:** (e.g., "Phỏng vấn CEO startup AI Việt Nam")

### Platform Focus:
1.  **LinkedIn (Primary):** Daily text/image posts, weekly articles.
2.  **YouTube (Secondary):** Weekly deep-dive videos (10-15 mins).
3.  **Email Newsletter (Tertiary):** Bi-weekly summary and exclusive insights.

## 3. Monetization Strategy

### Phase 1 (Months 1-6): Build Authority & Audience
- **Focus:** Provide massive value for free.
- **Goal:** Grow LinkedIn to 10k followers, YouTube to 1k subscribers.

### Phase 2 (Months 7-12): Introduce First Products
- **Affiliate Marketing:** Recommend trusted software/tools.
- **Consulting:** Offer 1-on-1 "Tech Strategy" sessions for individuals/SMEs.
- **First Digital Product:** Launch an ebook: "Cẩm nang công nghệ cho nhà quản lý không chuyên".

### Phase 3 (Months 13-24): Scale & Diversify
- **Online Course:** Develop a signature course: "AI for Business Leaders".
- **Corporate Workshops:** Offer in-house training for companies.
- **Community:** Launch a paid community for exclusive content and networking.

## 4. Key Performance Indicators (KPIs)

### Audience Growth:
- LinkedIn Followers: 10k (6 months), 30k (12 months)
- YouTube Subscribers: 1k (6 months), 5k (12 months)
- Email Subscribers: 500 (6 months), 2000 (12 months)

### Engagement:
- LinkedIn Average Likes/Post: 100+
- YouTube Watch Time: > 40%
- Email Open Rate: > 35%

### Business:
- Month 7: First affiliate income.
- Month 9: First consulting client.
- Month 12: $1,000/month total revenue.
- Month 24: $5,000/month total revenue.`,
      },
    ],
    realWorldApplications: [
      'Building personal brand for freelancers và consultants',
      'Monetizing YouTube channel hoặc podcast',
      'Developing influencer marketing campaigns',
      'Scaling personal brand into a media company',
      'Creating and selling online courses',
    ],
    resources: [
      {
        title: 'Pat Flynn - Smart Passive Income',
        url: 'https://www.smartpassiveincome.com',
        type: 'article',
      },
      {
        title: 'ConvertKit - Creator University',
        url: 'https://convertkit.com/university',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Giang Oi built a multi-platform media empire',
        organization: 'Giang Oi',
        problem: 'Transition from a lifestyle blogger to a sustainable media business',
        solution:
          'Diversified content across YouTube, Facebook, Instagram và built multiple revenue streams including brand deals, merchandise, và personal brand licensing',
        impact:
          'Millions of followers across platforms, one of the most trusted personal brands in Vietnam, successful merchandise line',
        innovations: [
          'Authentic, relatable content builds long-term trust',
          'Cross-platform strategy maximizes reach và engagement',
          'Personal brand can be a foundation for a diversified business',
        ],
      },
    ],
    faqs: [
      {
        question: 'Creator Economy (Nền kinh tế sáng tạo) là gì?',
        answer: 'Đó là một nền kinh tế được xây dựng bởi những người sáng tạo nội dung độc lập (YouTuber, blogger, podcaster...), những người kiếm tiền trực tiếp từ khán giả của họ thông qua nhiều hình thức khác nhau như quảng cáo, tài trợ, bán sản phẩm số, hoặc nhận donate.'
      },
      {
        question: 'Làm thế nào để bắt đầu xây dựng thương hiệu cá nhân?',
        answer: 'Hãy bắt đầu bằng cách xác định "niche" (thị trường ngách) của bạn: bạn đam mê điều gì và bạn có thể giúp đỡ ai? Sau đó, chọn một nền tảng chính mà bạn cảm thấy thoải mái nhất và bắt đầu tạo nội dung một cách nhất quán. Hãy tập trung vào việc cung cấp giá trị và xây dựng mối quan hệ với khán giả trước khi nghĩ đến việc kiếm tiền.'
      },
      {
        question: 'Các cách phổ biến để một nhà sáng tạo nội dung kiếm tiền là gì?',
        answer: 'Có rất nhiều cách: 1. Doanh thu quảng cáo (ví dụ: từ YouTube). 2. Hợp tác với thương hiệu (sponsored content). 3. Tiếp thị liên kết (affiliate marketing). 4. Bán sản phẩm của riêng mình (khóa học, ebook, merchandise). 5. Nhận quyên góp từ người hâm mộ (Patreon, donate). 6. Cung cấp dịch vụ (tư vấn, coaching).'
      },
      {
        question: 'Tôi cần bao nhiêu người theo dõi để bắt đầu kiếm tiền?',
        answer: 'Không có một con số cụ thể. Thay vì tập trung vào số lượng, hãy tập trung vào chất lượng và sự tương tác của khán giả. Một nhà sáng tạo có 1,000 người hâm mộ thực sự (true fans) sẵn sàng trả tiền cho sản phẩm của họ có thể kiếm được nhiều tiền hơn một người có 100,000 người theo dõi hời hợt.'
      },
      {
        question: 'Sự khác biệt giữa Influencer và Creator là gì?',
        answer: 'Mặc dù thường được sử dụng thay thế cho nhau, "Influencer" thường ám chỉ những người có khả năng ảnh hưởng đến quyết định mua hàng của người khác, thường thông qua các hợp đồng quảng cáo. "Creator" là một thuật ngữ rộng hơn, chỉ những người tạo ra nội dung và xây dựng một cộng đồng xung quanh nội dung đó, với nhiều nguồn thu nhập đa dạng hơn.'
      },
      {
        question: 'Làm thế nào để làm việc với các thương hiệu?',
        answer: 'Hãy tạo một "Media Kit" - một tài liệu giới thiệu về bạn, các chỉ số về khán giả (nhân khẩu học, tương tác), và các gói hợp tác bạn cung cấp. Bạn có thể chủ động liên hệ với các thương hiệu bạn yêu thích, hoặc xây dựng thương hiệu cá nhân đủ mạnh để các thương hiệu tự tìm đến bạn.'
      },
      {
        question: 'Làm thế nào để không bị "burnout" (kiệt sức) khi làm sáng tạo nội dung?',
        answer: 'Burnout là một vấn đề lớn. Hãy đặt ra một lịch trình làm việc bền vững, đừng cố gắng có mặt trên mọi nền tảng. Tái sử dụng nội dung một cách thông minh (ví dụ: biến một video dài thành nhiều clip ngắn). Hãy nhớ rằng nghỉ ngơi cũng là một phần của quá trình sáng tạo. Và quan trọng nhất, hãy tạo ra nội dung mà bạn thực sự đam mê.'
      },
      {
        question: 'Sản phẩm số (digital product) là gì?',
        answer: 'Là bất kỳ sản phẩm nào tồn tại ở dạng kỹ thuật số mà bạn có thể bán đi bán lại nhiều lần mà không tốn thêm chi phí sản xuất. Ví dụ phổ biến bao gồm: khóa học online, ebook, template (mẫu thiết kế, mẫu kế hoạch), preset chỉnh ảnh, nhạc nền...'
      },
      {
        question: 'Tiếp thị liên kết (Affiliate Marketing) hoạt động như thế nào?',
        answer: 'Bạn giới thiệu một sản phẩm hoặc dịch vụ của người khác bằng một đường link đặc biệt. Khi ai đó nhấp vào link của bạn và thực hiện mua hàng, bạn sẽ nhận được một khoản hoa hồng. Đây là một cách tuyệt vời để bắt đầu kiếm tiền mà không cần tạo ra sản phẩm của riêng mình.'
      },
      {
        question: 'Làm thế nào để xây dựng một cộng đồng gắn kết?',
        answer: 'Hãy tạo ra một không gian an toàn để mọi người tương tác. Trả lời bình luận và tin nhắn. Tổ chức các buổi livestream Q&A. Tạo ra các "truyền thống" hoặc "trò đùa nội bộ" mà chỉ cộng đồng của bạn hiểu. Hãy cho khán giả thấy bạn thực sự quan tâm đến họ với tư cách là những con người, không chỉ là những con số.'
      }
    ],
  },
];

export const digitalMarketingModuleData: ModuleData = {
  id: 'digital-marketing',
  title: 'Digital Marketing & E-commerce',
  subtitle: 'Từ chiến lược đến thực thi bán hàng đa kênh',
  description:
    'Khóa học cung cấp kiến thức toàn diện về Digital Marketing và Thương mại điện tử, giúp bạn xây dựng chiến lược, tối ưu hóa các kênh và thúc đẩy doanh số.',
  level: 'Cơ bản đến Nâng cao',
  duration: '20-25 giờ',
  category: 'Kinh doanh & Marketing',
  features: [
    'Chiến lược marketing đa kênh',
    'SEO & Content Marketing',
    'Quảng cáo Google Ads & Facebook Ads',
    'Phân tích dữ liệu và tối ưu hóa',
    'Quản lý sàn thương mại điện tử',
    'Tối ưu hóa tỷ lệ chuyển đổi (CRO)',
  ],
  icon: '🚀',
  color: 'from-blue-500 to-purple-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững các khái niệm và công cụ cốt lõi của Digital Marketing.',
    'Xây dựng được một kế hoạch marketing kỹ thuật số hoàn chỉnh.',
    'Thực thi và tối ưu hóa các chiến dịch quảng cáo trên Google và Mạng xã hội.',
    'Phân tích dữ liệu để đo lường hiệu quả và ra quyết định.',
    'Hiểu và vận hành mô hình kinh doanh trên các sàn E-commerce.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về marketing.',
    'Kỹ năng sử dụng máy tính và internet.',
    'Tư duy logic và khả năng phân tích.',
  ],
  careerOutcomes: [
    'Chuyên viên Digital Marketing',
    'Chuyên viên SEO/SEM',
    'Social Media Manager',
    'E-commerce Specialist',
    'Performance Marketing Executive',
  ],
  industryApplications: [
    'Bán lẻ và hàng tiêu dùng',
    'Dịch vụ và Du lịch',
    'Công nghệ và Phần mềm',
    'Giáo dục và Đào tạo',
    'Bất động sản',
  ],
  marketDemand: {
    averageSalary: '15-35 triệu VNĐ/tháng',
    jobGrowth: '25%/năm',
    hireDemand: 'Cao',
  },
  relatedModules: [
    K2Module.AIContentCreator,
    K2Module.GenZMarketing,
    K2Module.DataDrivenAnalytics,
    K2Module.UXUIDesign,
  ],
  lessons: lessons,
};
