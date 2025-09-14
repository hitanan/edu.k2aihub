import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface ContentCreatorLessonData extends BaseLessonData {
  platforms?: string[];
  monetizationMethods?: string[];
  toolsRequired?: string[];
  averageIncome?: string;
  timeToMaster?: string;
  imageUrl?: string;
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
    realWorldApplications: [
      'Freelance social media manager cho small businesses (15-25 triệu VNĐ/tháng)',
      'Personal brand development cho entrepreneurs và professionals',
      'Content creation cho e-commerce businesses và startups',
      'Digital marketing consultant với social media expertise',
      'Influencer marketing coordinator cho agencies',
    ],
    faqs: [
      {
        question: 'Làm thế nào để tìm ra "ngách" (niche) cho kênh của mình?',
        answer:
          'Bắt đầu bằng cách liệt kê đam mê, sở trường và kiến thức chuyên môn của bạn. Sau đó, nghiên cứu xem trong những lĩnh vực đó, có chủ đề nào có lượng khán giả đủ lớn nhưng chưa có quá nhiều người làm hoặc có thể làm tốt hơn không. Kết hợp đam mê và nhu cầu thị trường là chìa khóa.',
      },
      {
        question: 'Tần suất đăng bài bao nhiêu là hợp lý?',
        answer:
          'Tần suất lý tưởng phụ thuộc vào nền tảng và khả năng của bạn. Ví dụ, TikTok và Instagram Stories đòi hỏi sự hiện diện hàng ngày, trong khi YouTube có thể là 1-2 video/tuần. Quan trọng nhất là sự nhất quán. Hãy chọn một lịch trình bạn có thể duy trì lâu dài.',
      },
      {
        question: 'Làm sao để vượt qua cảm giác ngại ngùng trước ống kính?',
        answer:
          'Hãy bắt đầu bằng cách nói chuyện một mình trước gương, sau đó quay những video ngắn không đăng. Tập trung vào việc chia sẻ giá trị cho khán giả thay vì lo lắng về ngoại hình. Càng thực hành nhiều, bạn sẽ càng tự tin hơn.',
      },
      {
        question: 'Nội dung của tôi không có ai xem, tôi nên làm gì?',
        answer:
          'Đừng nản lòng! Hãy phân tích các chỉ số (analytics) để hiểu khán giả của bạn là ai và họ thích gì. Thử nghiệm với các định dạng nội dung, tiêu đề, và thời gian đăng khác nhau. Tích cực tương tác với các kênh khác trong cùng lĩnh vực để tăng khả năng được khám phá.',
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
    realWorldApplications: [
      'Video production services cho businesses (20-100 triệu VNĐ/project)',
      'YouTube channel creation và monetization',
      'Social media content creation cho brands',
      'Wedding và event videography',
      'Online course creation với video content',
      'Corporate training video development',
    ],
    faqs: [
      {
        question: 'Tôi cần những thiết bị đắt tiền nào để bắt đầu sản xuất video?',
        answer:
          'Không cần! Một chiếc smartphone hiện đại đã là một công cụ sản xuất video cực kỳ mạnh mẽ. Hãy tập trung vào việc học các nguyên tắc cơ bản về ánh sáng, âm thanh và bố cục. Một chiếc micro cài áo nhỏ và một chân máy (tripod) là những khoản đầu tư ban đầu hợp lý và hiệu quả.',
      },
      {
        question: 'Phần mềm chỉnh sửa video nào tốt nhất cho người mới bắt đầu?',
        answer:
          'CapCut (miễn phí trên điện thoại và máy tính) là một lựa chọn tuyệt vời cho người mới bắt đầu với giao diện trực quan và nhiều tính năng mạnh mẽ. Khi bạn đã thành thạo hơn, bạn có thể chuyển sang các phần mềm chuyên nghiệp như Adobe Premiere Pro hoặc DaVinci Resolve (có phiên bản miễn phí rất tốt).',
      },
      {
        question: 'Làm thế nào để kể chuyện hay hơn qua video?',
        answer:
          'Một câu chuyện hay thường có cấu trúc 3 hồi: Bắt đầu (giới thiệu vấn đề/nhân vật), Phát triển (hành trình, thử thách), và Kết thúc (giải pháp, bài học). Sử dụng các góc quay khác nhau, âm nhạc và hiệu ứng âm thanh để tạo cảm xúc. Quan trọng nhất, hãy thể hiện sự chân thật và đam mê của bạn.',
      },
      {
        question: 'Làm sao để video của tôi trông chuyên nghiệp hơn?',
        answer:
          'Hãy chú ý đến 3 yếu tố: 1/ Ánh sáng: Đảm bảo chủ thể được chiếu sáng tốt, tránh ngược sáng. 2/ Âm thanh: Âm thanh rõ ràng, không bị vang hay lẫn tạp âm là cực kỳ quan trọng. 3/ Sự ổn định: Sử dụng chân máy hoặc chống rung để có những cảnh quay mượt mà.',
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
    realWorldApplications: [
      'Gaming streaming cho Vietnamese gaming community',
      'Educational livestreams cho skill sharing',
      'Cooking shows với real-time interaction',
      'Fitness classes và wellness coaching',
      'Business consulting và Q&A sessions',
      'Product demonstrations cho e-commerce',
    ],
    faqs: [
      {
        question: 'Làm thế nào để có nhiều người xem livestream của tôi hơn?',
        answer:
          'Hãy thông báo trước về buổi livestream trên các kênh mạng xã hội khác. Chọn một chủ đề hấp dẫn và có giá trị cho khán giả của bạn. Trong buổi live, hãy liên tục tương tác, gọi tên người xem, và trả lời câu hỏi để giữ họ ở lại lâu hơn. Hợp tác với các creator khác cũng là một cách hiệu quả.',
      },
      {
        question: 'Tôi nên nói gì khi không có ai bình luận?',
        answer:
          'Đây là một thử thách phổ biến. Hãy luôn chuẩn bị sẵn một vài chủ đề hoặc câu chuyện để nói. Bạn có thể tiếp tục trình bày nội dung đã chuẩn bị, kể một câu chuyện liên quan, hoặc đặt những câu hỏi mở để khuyến khích sự tương tác. Đừng im lặng quá lâu.',
      },
      {
        question: 'Làm thế nào để kiếm tiền từ livestream?',
        answer:
          'Có nhiều cách: nhận quà tặng ảo (donations/gifts) từ người xem, bán sản phẩm trực tiếp (live commerce), nhận tài trợ từ các nhãn hàng, hoặc sử dụng livestream như một kênh để quảng bá cho các sản phẩm/dịch vụ khác của bạn (ví dụ: khóa học, sách).',
      },
      {
        question: 'Thiết bị tối thiểu cần có để livestream là gì?',
        answer:
          'Bạn có thể bắt đầu chỉ với một chiếc smartphone và kết nối internet ổn định. Để chuyên nghiệp hơn, hãy đầu tư một chiếc micro để có âm thanh tốt, một đèn livestream (ring light) để có hình ảnh đẹp, và một chân máy để giữ điện thoại ổn định.',
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
    realWorldApplications: [
      'Full-time content creation career với sustainable income',
      'Supplementary income stream cho existing professionals',
      'Business development để transition into consulting',
      'Product-based business growth through content marketing',
      'Agency services offering based on content creation expertise',
    ],
    faqs: [
      {
        question: 'Khi nào tôi nên bắt đầu nghĩ về việc kiếm tiền?',
        answer:
          'Hãy tập trung vào việc xây dựng một cộng đồng gắn kết và tạo ra nội dung giá trị trước. Khi bạn đã có một lượng khán giả trung thành nhất định (ví dụ: 1,000 người theo dõi trên YouTube hoặc 10,000 trên TikTok), bạn có thể bắt đầu khám phá các phương pháp kiếm tiền.',
      },
      {
        question: 'Ngoài quảng cáo, còn những cách nào khác để kiếm tiền?',
        answer:
          'Rất nhiều! Bạn có thể tạo ra sản phẩm số (ebook, khóa học), sản phẩm vật lý (merchandise), cung cấp dịch vụ tư vấn, làm affiliate marketing (tiếp thị liên kết), nhận tài trợ từ nhãn hàng, hoặc kêu gọi sự ủng hộ trực tiếp từ fan qua các nền tảng như Patreon.',
      },
      {
        question: 'Làm thế nào để đa dạng hóa nguồn thu nhập?',
        answer:
          'Đừng phụ thuộc vào một nền tảng duy nhất. Hãy xây dựng sự hiện diện trên nhiều kênh (ví dụ: YouTube, TikTok, và một email list). Sau đó, hãy phát triển ít nhất 2-3 nguồn thu nhập khác nhau, ví dụ: doanh thu quảng cáo từ YouTube, hợp đồng tài trợ, và bán một sản phẩm số của riêng bạn.',
      },
      {
        question: 'Tôi có cần phải đăng ký kinh doanh không?',
        answer:
          'Khi thu nhập của bạn từ việc sáng tạo nội dung trở nên đều đặn và đáng kể, việc đăng ký kinh doanh (ví dụ: hộ kinh doanh cá thể hoặc công ty) là cần thiết để tuân thủ các quy định về thuế và pháp luật của Việt Nam. Bài học này sẽ cung cấp thông tin chi tiết hơn về vấn đề này.',
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
    realWorldApplications: [
      'Influencer marketing career với brand agencies',
      'Brand ambassador roles với long-term partnerships',
      'Product launch campaigns cho startups',
      'Tourism promotion cho destinations',
      'Technology product reviews và recommendations',
    ],
    faqs: [
      {
        question: 'Làm thế nào để các nhãn hàng tìm thấy tôi?',
        answer:
          'Hãy tạo một "Media Kit" - một tài liệu giới thiệu về kênh của bạn, bao gồm thông tin về đối tượng khán giả, các chỉ số tương tác, và bảng giá. Để thông tin liên hệ (email) ở nơi dễ thấy trên các trang mạng xã hội của bạn. Chủ động liên hệ với các nhãn hàng bạn yêu thích cũng là một chiến lược tốt.',
      },
      {
        question: 'Tôi nên tính giá bao nhiêu cho một bài đăng được tài trợ?',
        answer:
          'Không có một công thức cố định. Giá cả phụ thuộc vào nhiều yếu tố: số lượng người theo dõi, tỷ lệ tương tác, mức độ phù hợp của bạn với nhãn hàng, và công sức bạn bỏ ra để tạo nội dung. Hãy nghiên cứu xem các creator khác trong ngách của bạn đang tính giá bao nhiêu để có một mức tham khảo.',
      },
      {
        question: 'Làm thế nào để từ chối một lời đề nghị tài trợ không phù hợp?',
        answer:
          'Hãy luôn lịch sự và chuyên nghiệp. Cảm ơn họ đã quan tâm và giải thích ngắn gọn rằng sản phẩm/dịch vụ của họ không phù hợp với đối tượng khán giả hoặc giá trị cốt lõi của kênh bạn. Giữ một mối quan hệ tốt có thể mở ra các cơ hội khác trong tương lai.',
      },
      {
        question: 'Làm sao để nội dung tài trợ không bị khán giả ghét?',
        answer:
          'Chìa khóa là sự chân thực và minh bạch. Chỉ nhận tài trợ từ những sản phẩm bạn thực sự tin dùng và yêu thích. Hãy sáng tạo nội dung một cách tự nhiên, phù hợp với phong cách của bạn, thay vì chỉ đọc kịch bản của nhãn hàng. Luôn ghi rõ ràng rằng đó là nội dung được tài trợ.',
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
    realWorldApplications: [
      'Social media management cho businesses',
      'Content strategy consulting services',
      'Personal brand development cho professionals',
      'Scalable content production cho agencies',
      'Systematic approach cho growing audiences',
    ],
    faqs: [
      {
        question: 'Content calendar là gì và tại sao tôi cần nó?',
        answer:
          'Content calendar (lịch nội dung) là một kế hoạch chi tiết về những gì bạn sẽ đăng, khi nào và ở đâu. Nó giúp bạn duy trì sự nhất quán, tránh tình trạng "hôm nay không biết đăng gì", và đảm bảo nội dung của bạn có chiến lược và mục tiêu rõ ràng.',
      },
      {
        question: 'Làm thế nào để không bị cạn kiệt ý tưởng?',
        answer:
          'Hãy tạo một "ngân hàng ý tưởng". Bất cứ khi nào một ý tưởng nảy ra, hãy ghi lại ngay lập tức vào một ứng dụng ghi chú hoặc sổ tay. Thường xuyên đọc, xem và lắng nghe nội dung trong lĩnh vực của bạn. Tương tác với khán giả và lắng nghe câu hỏi của họ cũng là một nguồn ý tưởng vô tận.',
      },
      {
        question: 'Batching content là gì?',
        answer:
          'Batching (sản xuất theo lô) là một kỹ thuật quản lý thời gian hiệu quả. Thay vì quay và chỉnh sửa một video mỗi ngày, bạn dành một ngày để quay tất cả các video cho cả tuần, và một ngày khác để chỉnh sửa tất cả chúng. Điều này giúp bạn tập trung và tiết kiệm thời gian chuyển đổi giữa các công việc.',
      },
      {
        question: 'Làm thế nào để duy trì động lực khi không thấy kết quả ngay lập tức?',
        answer:
          'Xây dựng một kênh cần thời gian. Hãy tập trung vào quá trình và sự cải thiện của bản thân thay vì chỉ nhìn vào các con số. Đặt ra những mục tiêu nhỏ, có thể đo lường được (ví dụ: học một kỹ năng chỉnh sửa mới, thử một định dạng video mới). Kết nối với các nhà sáng tạo khác để chia sẻ kinh nghiệm và động viên lẫn nhau.',
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
    objectives: [
      'Understand key performance indicators (KPIs) for content',
      'Use analytics tools to gather audience insights',
      'Implement A/B testing to optimize content elements',
      'Develop data-driven content strategy for sustainable growth',
      'Translate analytics into actionable content improvements',
    ],
    prerequisites: [
      'Consistent content production',
      'Access to platform analytics',
      'Basic understanding of data and charts',
      'Analytical mindset',
    ],
    realWorldApplications: [
      'Growth hacking consulting cho content creators',
      'Social media analytics services cho businesses',
      'Content strategy optimization roles',
      'Performance marketing với focus on content',
      'Data analyst roles trong creator economy companies',
    ],
    faqs: [
      {
        question: 'Những chỉ số nào là quan trọng nhất cần theo dõi?',
        answer:
          'Điều này phụ thuộc vào mục tiêu của bạn. Đối với tăng trưởng, hãy xem "Reach" (số người tiếp cận) và "Impressions" (số lần hiển thị). Đối với sự tương tác, hãy xem "Engagement Rate" (tỷ lệ tương tác) và "Comments". Đối với video, "Watch Time" (thời gian xem) và "Audience Retention" (tỷ lệ giữ chân khán giả) là cực kỳ quan trọng.',
      },
      {
        question: 'A/B testing là gì và tôi có thể áp dụng nó như thế nào?',
        answer:
          'A/B testing là việc tạo ra hai phiên bản của một thứ gì đó (ví dụ: hai tiêu đề video khác nhau, hai ảnh thumbnail khác nhau) để xem phiên bản nào hoạt động tốt hơn. YouTube có tính năng A/B testing thumbnail. Với các nền tảng khác, bạn có thể thử đăng các loại nội dung khác nhau vào cùng một khung giờ trong các ngày khác nhau và so sánh kết quả.',
      },
      {
        question: 'Làm thế nào để hiểu khán giả của tôi là ai?',
        answer:
          'Hầu hết các nền tảng đều cung cấp công cụ phân tích (analytics) cho thấy thông tin nhân khẩu học của khán giả như độ tuổi, giới tính, vị trí địa lý, và thời gian họ hoạt động tích cực nhất. Hãy sử dụng thông tin này để điều chỉnh nội dung và lịch đăng bài cho phù hợp.',
      },
      {
        question: 'Tỷ lệ tương tác (Engagement Rate) của tôi thấp, tôi nên làm gì?',
        answer:
          'Hãy xem lại nội dung của bạn. Nó có thực sự cung cấp giá trị (giải trí, giáo dục, truyền cảm hứng) không? Bạn có đang đặt câu hỏi hoặc kêu gọi hành động để khuyến khích bình luận không? Hãy thử nghiệm với các định dạng nội dung khác nhau (ví dụ: video ngắn, carousel, polls) để xem khán giả của bạn phản ứng tốt nhất với loại nào.',
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
    realWorldApplications: [
      'Legal content creator business setup',
      'IP protection consulting cho creators',
      'Business advisory services cho digital entrepreneurs',
      'Compliance consulting cho growing creator businesses',
      'Legal education services cho creator community',
    ],
    faqs: [
      {
        question: 'Tôi có thể sử dụng nhạc hoặc hình ảnh của người khác trong video của mình không?',
        answer:
          'Nói chung là không, trừ khi bạn có giấy phép hoặc nội dung đó thuộc phạm vi "sử dụng hợp lý" (fair use), một khái niệm pháp lý phức tạp. Để an toàn, hãy sử dụng các thư viện nhạc và hình ảnh miễn phí bản quyền (royalty-free) như Epidemic Sound, Artlist, hoặc kho âm thanh của YouTube.',
      },
      {
        question: 'Khi nào tôi cần phải đăng ký kinh doanh và đóng thuế?',
        answer:
          'Theo luật pháp Việt Nam, khi bạn có thu nhập thường xuyên từ hoạt động kinh doanh (bao gồm cả sáng tạo nội dung), bạn có nghĩa vụ phải đăng ký kinh doanh và kê khai, nộp thuế thu nhập. Tốt nhất bạn nên tham khảo ý kiến của một kế toán hoặc luật sư khi thu nhập của bạn bắt đầu tăng lên.',
      },
      {
        question: 'Làm thế nào để bảo vệ ý tưởng và nội dung của tôi?',
        answer:
          'Bản quyền tự động được áp dụng cho tác phẩm gốc của bạn ngay khi nó được tạo ra. Tuy nhiên, việc đăng ký bản quyền với Cục Bản quyền tác giả sẽ cung cấp bằng chứng pháp lý mạnh mẽ hơn. Đối với thương hiệu (tên kênh, logo), bạn có thể đăng ký nhãn hiệu với Cục Sở hữu trí tuệ.',
      },
      {
        question: 'Tôi có cần hợp đồng khi làm việc với nhãn hàng không?',
        answer:
          'Chắc chắn có. Luôn luôn có một hợp đồng bằng văn bản, dù dự án lớn hay nhỏ. Hợp đồng nên ghi rõ phạm vi công việc, số lần duyệt, thời hạn, quyền sở hữu trí tuệ, và các điều khoản thanh toán. Điều này bảo vệ cả bạn và nhãn hàng.',
      },
    ],
  },
];

export const contentCreatorModuleData: ModuleData = {
  id: K2Module.ContentCreator,
  title: 'Content Creator Academy',
  subtitle: 'Thành công với Social Media',
  description:
    'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization.',
  category: 'Kỹ năng thiết yếu',
  icon: '📱',
  color: 'from-pink-600 to-purple-600',
  level: 'Trung bình',
  duration: '18-22 giờ',
  features: ['Personal Branding', 'Video Production', 'Live Streaming', 'Monetization', 'Analytics'],
  prerequisites: ['Smartphone với camera tốt', 'Tư duy sáng tạo', 'Khả năng storytelling', 'Consistency mindset'],
  objectives: [
    'Trở thành một nhà sáng tạo nội dung chuyên nghiệp trên các nền tảng mạng xã hội.',
    'Xây dựng thương hiệu cá nhân vững chắc và một cộng đồng người hâm mộ trung thành.',
    'Nắm vững các kỹ năng sản xuất video, livestream và chiến lược nội dung.',
    'Tạo ra nguồn thu nhập bền vững từ việc sáng tạo nội dung.',
  ],
  careerOutcomes: [
    'Content Creator toàn thời gian',
    'Social Media Manager',
    'Influencer Marketing Specialist',
    'Digital Strategist',
  ],
  industryApplications: [
    'Truyền thông & Giải trí',
    'Marketing & Quảng cáo',
    'Thương mại điện tử',
    'Giáo dục & Đào tạo',
  ],
  marketDemand: {
    averageSalary: '20-80 triệu VNĐ/tháng',
    jobGrowth: 'Rất cao',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.AIContentCreator, K2Module.ShortVideoMastery],
  lessons: contentCreatorLessons,
};
