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
    exercises: [
      {
        title: 'Personal Brand Strategy',
        description: 'Develop comprehensive personal brand strategy cho tech entrepreneur',
        difficulty: 'Trung bình',
        materials: [
          'Define brand positioning và unique value proposition',
          'Analyze target audience segments',
          'Develop content pillars và platform strategy',
          'Create multi-year monetization plan',
        ],
        expectedResults: 'Comprehensive personal brand strategy document với clear action plan',
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
  heroImageUrl: '/images/modules/digital-marketing.jpg',
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
