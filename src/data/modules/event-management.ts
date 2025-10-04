import { BaseLessonData } from '@/types/lesson-base';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface EventManagementLesson extends BaseLessonData {
  eventCategory:
    | 'corporate-events'
    | 'entertainment-events'
    | 'virtual-events'
    | 'event-technology'
    | 'festival-management';
  technologyFocus: string[];
  vietnameseEventContext: string[];
  industryApplications: string[];
  eventScale: 'small' | 'medium' | 'large' | 'mega';
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const eventManagementLessons: EventManagementLesson[] = [
  {
    id: 'digital-event-production-management',
    title: 'Quản Lý và Sản Xuất Sự Kiện Số',
    description:
      'Quản lý sản xuất sự kiện toàn diện bao gồm các nền tảng sự kiện số, công nghệ live streaming, sự kiện kết hợp (hybrid), và trải nghiệm thực tế ảo.',
    duration: '215 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=yST4J4_K-ME',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    eventCategory: 'virtual-events',
    eventScale: 'large',
    technologyFocus: [
      'Nền tảng và công nghệ live streaming',
      'Nền tảng sự kiện ảo (Zoom, Teams, giải pháp tùy chỉnh)',
      'Thiết bị sản xuất âm thanh/hình ảnh',
      'Hệ thống phần mềm quản lý sự kiện',
    ],
    objectives: [
      'Nắm vững quy trình sản xuất sự kiện số',
      'Thiết kế trải nghiệm sự kiện kết hợp (hybrid) giữa vật lý và ảo',
      'Triển khai giải pháp live streaming với chất lượng chuyên nghiệp',
      'Quản lý tương tác và sự tham gia của khán giả ảo',
      'Phát triển chiến lược tích hợp công nghệ sự kiện',
    ],
    prerequisites: [
      'Kiến thức cơ bản về lập kế hoạch sự kiện',
      'Hiểu biết về truyền thông số',
      'Kiến thức cơ bản về quản lý dự án',
    ],
    vietnameseEventContext: [
      'Số hóa hội nghị doanh nghiệp tại Việt Nam',
      'Chuyển đổi lễ hội truyền thống sang live streaming',
      'Tích hợp kỹ thuật số trong lễ cưới',
      'Nền tảng trực tuyến cho sự kiện kết nối kinh doanh',
    ],
    industryApplications: [
      'Quản lý đào tạo và webinar doanh nghiệp',
      'Live streaming chương trình giải trí',
      'Tổ chức hội nghị giáo dục trực tuyến',
      'Trải nghiệm ảo cho buổi ra mắt sản phẩm',
    ],
    exercises: [
      {
        title: 'Thiết Kế Hội Nghị Doanh Nghiệp Hybrid',
        description:
          'Lập kế hoạch và thực hiện hội nghị doanh nghiệp hybrid cho hơn 1000 người tham dự, kết hợp địa điểm vật lý tại Hà Nội với sự tham gia ảo toàn cầu.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm lập kế hoạch sự kiện',
          'Danh sách thiết bị live streaming',
          'So sánh nền tảng ảo',
          'Công cụ lập ngân sách',
        ],
        procedure: [
          'Thiết kế kiến trúc sự kiện hybrid với sự tích hợp liền mạch',
          'Lập kế hoạch quy trình sản xuất bao gồm thiết lập kỹ thuật và điều phối đội ngũ',
          'Phát triển chiến lược tương tác cho cả người tham dự vật lý và ảo',
          'Tạo kế hoạch phân phối nội dung tối ưu cho hai đối tượng khán giả',
          'Triển khai khung đo lường các chỉ số thành công của sự kiện',
        ],
        expectedResults:
          'Kế hoạch sự kiện hybrid toàn diện với timeline sản xuất chi tiết, thông số kỹ thuật, và chiến lược tương tác.',
        solution:
          'Thiết kế sự kiện hybrid chuyên nghiệp tích hợp văn hóa doanh nghiệp Việt Nam, phân phối đa nền tảng, và kết quả tương tác có thể đo lường.',
      },
    ],
    realWorldApplications: [
      'Đại hội cổ đông thường niên của VinGroup',
      'Hội nghị công nghệ của FPT',
      'Lễ tốt nghiệp đại học',
      'Sự kiện công bố chính sách của chính phủ',
    ],
    caseStudies: [
      {
        title: 'Chuyển Đổi Số của Vietnam Web Summit',
        organization: 'Vietnam Web Summit',
        problem:
          'Chuyển đổi hội nghị công nghệ lớn từ hình thức chỉ vật lý sang hybrid trong và sau đại dịch COVID-19.',
        solution:
          'Phát triển nền tảng hybrid tiên tiến, live streaming đa camera, giải pháp kết nối ảo, và các bài thuyết trình tương tác.',
        impact: 'Tăng số người tham dự từ 3.000 lên 15.000, giảm 40% chi phí, tăng 300% sự tham gia quốc tế.',
        innovations: [
          'Nền tảng ảo tùy chỉnh bằng tiếng Việt',
          'Kết nối mạng lưới được hỗ trợ bởi AI',
          'Phân phối nội dung đa múi giờ',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Sản Xuất Sự Kiện Số',
        url: 'https://www.eventmanagerblog.com/digital-event-production',
        type: 'Resource',
      },
    ],
    faqs: [
      {
        question: 'Sự kiện hybrid (kết hợp) là gì và tại sao nó lại quan trọng?',
        answer:
          'Sự kiện hybrid là sự kiện diễn ra đồng thời ở một địa điểm vật lý và một nền tảng ảo, cho phép người tham dự có thể tham gia trực tiếp hoặc từ xa. Nó quan trọng vì giúp mở rộng phạm vi tiếp cận khán giả toàn cầu, tăng tính linh hoạt và thu thập được nhiều dữ liệu hơn về người tham dự.',
      },
      {
        question: 'Làm thế nào để đảm bảo chất lượng live stream không bị gián đoạn?',
        answer:
          'Để đảm bảo chất lượng, cần có đường truyền internet tốc độ cao và ổn định (nên có cả đường truyền dự phòng), sử dụng thiết bị quay phim và âm thanh chuyên nghiệp, và thực hiện kiểm tra kỹ thuật toàn diện trước khi sự kiện diễn ra. Việc có một đội ngũ kỹ thuật viên giàu kinh nghiệm là rất quan trọng.',
      },
      {
        question: 'Làm thế nào để giữ chân khán giả tham gia sự kiện ảo?',
        answer:
          'Tăng cường tương tác là chìa khóa. Hãy sử dụng các công cụ như Q&A trực tiếp, các cuộc thăm dò ý kiến (polls), phòng thảo luận nhóm (breakout rooms), và các yếu tố gamification. Nội dung cần được thiết kế ngắn gọn, hấp dẫn và có tính tương tác cao.',
      },
      {
        question: 'Chi phí tổ chức một sự kiện hybrid so với sự kiện truyền thống như thế nào?',
        answer:
          'Ban đầu, chi phí cho sự kiện hybrid có thể cao hơn do phải đầu tư vào công nghệ và nền tảng ảo. Tuy nhiên, về lâu dài, nó có thể tiết kiệm chi phí liên quan đến địa điểm, đi lại và ăn ở cho một lượng lớn người tham dự. Doanh thu cũng có thể tăng lên nhờ bán vé cho khán giả ảo.',
      },
      {
        question: 'Nền tảng nào là tốt nhất để tổ chức sự kiện ảo?',
        answer:
          'Không có nền tảng "tốt nhất" cho mọi loại sự kiện. Lựa chọn phụ thuộc vào quy mô, ngân sách và mục tiêu của bạn. Các nền tảng phổ biến bao gồm Zoom Events, Microsoft Teams, và các giải pháp chuyên nghiệp hơn như Hopin, Cvent, hoặc các nền tảng được xây dựng tùy chỉnh.',
      },
      {
        question: 'Sự khác biệt giữa webinar và một hội nghị ảo là gì?',
        answer:
          'Webinar thường là một buổi thuyết trình một chiều từ một hoặc vài diễn giả đến một lượng lớn khán giả, với sự tương tác hạn chế. Một hội nghị ảo phức tạp hơn, bao gồm nhiều phiên họp, nhiều diễn giả, các khu vực triển lãm ảo, và nhiều cơ hội kết nối mạng lưới hơn, mô phỏng một hội nghị thực tế.',
      },
      {
        question: 'Làm thế nào để đo lường sự thành công của một sự kiện số?',
        answer:
          'Sự thành công có thể được đo lường qua nhiều chỉ số: số lượng người đăng ký và tham dự, mức độ tương tác (số câu hỏi, bình luận), thời gian xem trung bình, tỷ lệ chuyển đổi (nếu có mục tiêu kinh doanh), và phản hồi của người tham dự qua khảo sát sau sự kiện.',
      },
      {
        question: 'Cần những vai trò nhân sự chủ chốt nào cho một đội ngũ sản xuất sự kiện số?',
        answer:
          'Một đội ngũ cơ bản cần có: người quản lý sự kiện (event manager), đạo diễn kỹ thuật (technical director), người điều hành nền tảng (platform operator), người quản lý cộng đồng/tương tác (community manager), và các kỹ thuật viên âm thanh/hình ảnh.',
      },
      {
        question: 'Làm thế nào để tạo trải nghiệm kết nối mạng lưới (networking) hiệu quả trong sự kiện ảo?',
        answer:
          'Sử dụng các tính năng như phòng họp 1-1, các phòng thảo luận theo chủ đề, và các "quán cà phê ảo". Các nền tảng được hỗ trợ bởi AI có thể gợi ý kết nối dựa trên sở thích và hồ sơ của người tham dự. Việc có người điều phối để khởi động các cuộc trò chuyện cũng rất hữu ích.',
      },
      {
        question: 'Xu hướng nào đang định hình tương lai của sự kiện số?',
        answer:
          'Các xu hướng chính bao gồm sự gia tăng của các sự kiện hybrid, việc sử dụng thực tế ảo (VR) và thực tế tăng cường (AR) để tạo ra trải nghiệm nhập vai, cá nhân hóa nội dung dựa trên AI, và sự tập trung vào việc xây dựng cộng đồng trực tuyến bền vững sau sự kiện.',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'entertainment-technology-systems',
    title: 'Hệ Thống Công Nghệ Giải Trí',
    description:
      'Công nghệ giải trí tiên tiến bao gồm hệ thống âm thanh, thiết kế ánh sáng, tự động hóa sân khấu, và các công nghệ trải nghiệm nhập vai.',
    duration: '235 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=13CIZmc0-Lg',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
    eventCategory: 'entertainment-events',
    eventScale: 'mega',
    technologyFocus: [
      'Hệ thống âm thanh chuyên nghiệp và mixing',
      'Thiết kế và lập trình ánh sáng LED',
      'Hệ thống tự động hóa và giàn giáo sân khấu',
      'Giải trí thực tế ảo và tăng cường',
    ],
    objectives: [
      'Thiết kế hệ thống âm thanh giải trí chuyên nghiệp',
      'Nắm vững lập trình và hệ thống điều khiển ánh sáng LED',
      'Triển khai tự động hóa sân khấu và hiệu ứng đặc biệt',
      'Tích hợp công nghệ VR/AR vào trải nghiệm giải trí',
      'Phát triển quy trình an toàn cho các hệ thống giải trí quy mô lớn',
    ],
    prerequisites: [
      'Kiến thức cơ bản về điện tử',
      'Hiểu biết về ngành công nghiệp giải trí',
      'Kỹ năng giải quyết vấn đề kỹ thuật',
    ],
    vietnameseEventContext: [
      'Thông số kỹ thuật cho các địa điểm hòa nhạc tại Việt Nam',
      'Tích hợp công nghệ vào lễ hội âm nhạc truyền thống',
      'Yêu cầu kỹ thuật cho tour diễn của nghệ sĩ quốc tế',
      'Thách thức về thời tiết và cơ sở hạ tầng cho festival ngoài trời',
    ],
    industryApplications: [
      'Thiết kế hệ thống cho địa điểm hòa nhạc',
      'Công nghệ sản xuất sân khấu kịch',
      'Hệ thống sân khấu chính của festival',
      'Trải nghiệm giải trí cho doanh nghiệp',
    ],
    exercises: [
      {
        title: 'Thiết Kế Kỹ Thuật Sân Khấu Chính Festival',
        description:
          'Thiết kế hệ thống kỹ thuật hoàn chỉnh cho sân khấu chính của một festival âm nhạc lớn tại Việt Nam (sức chứa hơn 50.000 người).',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm thiết kế hệ thống âm thanh',
          'Nền tảng điều khiển ánh sáng',
          'Công cụ kỹ thuật kết cấu',
          'Tài liệu quy định an toàn',
        ],
        procedure: [
          'Phân tích âm học địa điểm và thiết kế bố cục hệ thống âm thanh',
          'Tạo thiết kế ánh sáng hỗ trợ nhiều loại hình biểu diễn',
          'Lập kế hoạch phân phối điện và cơ sở hạ tầng kỹ thuật',
          'Thiết kế hệ thống an toàn bao gồm công nghệ quản lý đám đông',
          'Phát triển mẫu yêu cầu kỹ thuật (technical rider) cho nghệ sĩ quốc tế',
        ],
        expectedResults:
          'Thiết kế sân khấu festival chuyên nghiệp với thông số kỹ thuật chi tiết, quy trình an toàn, và kế hoạch hỗ trợ nghệ sĩ.',
        solution:
          'Thiết kế hệ thống giải trí toàn diện được tối ưu hóa cho điều kiện ngoài trời của Việt Nam, tiêu chuẩn kỹ thuật quốc tế, và yêu cầu sự kiện văn hóa.',
      },
    ],
    realWorldApplications: [
      'Sản xuất hòa nhạc tại Sân vận động Mỹ Đình',
      'Nâng cấp kỹ thuật Nhà hát Lớn Sài Gòn',
      'Hệ thống cho festival âm nhạc Phú Quốc',
      'Thiết kế địa điểm giải trí trong nhà',
    ],
    caseStudies: [
      {
        title: 'Tích Hợp Công Nghệ tại Lễ Hội Âm Nhạc 7UP',
        organization: 'BEC Entertainment',
        problem:
          'Tạo ra hệ thống công nghệ giải trí đẳng cấp thế giới cho festival âm nhạc ngoài trời lớn nhất Việt Nam.',
        solution:
          'Hệ thống âm thanh hiện đại, màn hình video LED tiên tiến, hệ thống ánh sáng tự động, công nghệ quản lý đám đông.',
        impact:
          'Tổ chức thành công cho hơn 100.000 người tham dự, đạt tiêu chuẩn sản xuất quốc tế, thu hút các nghệ sĩ quốc tế lớn.',
        innovations: [
          'Hệ thống ngoài trời chống chịu thời tiết',
          'Công nghệ tối ưu hóa luồng di chuyển của đám đông',
          'Điều phối âm thanh đa sân khấu',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Hệ Thống Âm Thanh Chuyên Nghiệp',
        url: 'https://service.shure.com/s/article/live-sound-system-setup-guide',
        type: 'Technical',
      },
    ],
    faqs: [
      {
        question: 'Line array là gì và tại sao nó lại phổ biến trong các sự kiện lớn?',
        answer:
          'Line array là một hệ thống loa bao gồm nhiều loa giống hệt nhau được treo thành một hàng dọc. Nó phổ biến vì cho phép âm thanh được phân bổ đều và xa hơn trong không gian lớn, giảm thiểu sự khác biệt về âm lượng giữa khán giả ở gần và ở xa sân khấu.',
      },
      {
        question: 'Sự khác biệt giữa âm thanh mono và stereo trong một sự kiện trực tiếp là gì?',
        answer:
          'Trong một sự kiện trực tiếp, hệ thống âm thanh thường được thiết lập ở chế độ mono (đơn kênh). Điều này đảm bảo rằng tất cả khán giả, dù ngồi ở bất kỳ vị trí nào, đều nghe được cùng một bản mix âm thanh. Âm thanh stereo (hai kênh) thường chỉ hiệu quả cho những người ngồi ở vị trí trung tâm.',
      },
      {
        question: 'Vai trò của một kỹ sư FOH (Front of House) là gì?',
        answer:
          'Kỹ sư FOH là người chịu trách nhiệm mix âm thanh cho khán giả. Họ ngồi ở một vị trí trong khu vực khán giả và điều chỉnh bàn trộn âm thanh (mixing console) để đảm bảo âm thanh phát ra loa có chất lượng tốt nhất, cân bằng và rõ ràng.',
      },
      {
        question: 'DMX là gì và nó được sử dụng như thế nào trong thiết kế ánh sáng?',
        answer:
          'DMX (Digital Multiplex) là một giao thức tiêu chuẩn để điều khiển các thiết bị ánh sáng sân khấu như đèn moving head, đèn PAR, và máy tạo khói. Nó cho phép một bộ điều khiển duy nhất gửi tín hiệu đến hàng trăm thiết bị, đồng bộ hóa các hiệu ứng ánh sáng phức tạp.',
      },
      {
        question: 'Projection mapping là gì?',
        answer:
          'Projection mapping là một kỹ thuật sử dụng máy chiếu để chiếu hình ảnh hoặc video lên các bề mặt không phẳng, như các tòa nhà, sân khấu có hình dạng đặc biệt, hoặc thậm chí là một chiếc ô tô. Nó biến các vật thể thông thường thành các màn hình hiển thị động và ấn tượng.',
      },
      {
        question: 'Tại sao an toàn điện lại cực kỳ quan trọng trong sản xuất sự kiện?',
        answer:
          'Các sự kiện lớn sử dụng một lượng điện năng khổng lồ. Việc quản lý an toàn điện không đúng cách có thể gây ra nguy cơ cháy nổ, điện giật cho đội ngũ sản xuất và khán giả, cũng như làm hỏng các thiết bị đắt tiền. Việc phân phối điện, nối đất và bảo vệ quá tải phải được thực hiện bởi các chuyên gia.',
      },
      {
        question: 'Hệ thống giàn giáo (truss) và rigging được sử dụng để làm gì?',
        answer:
          'Hệ thống giàn giáo là bộ khung kim loại (thường bằng nhôm) được sử dụng để treo loa, đèn, màn hình LED và các thiết bị khác phía trên sân khấu. Rigging là quá trình và kỹ thuật treo các hệ thống này một cách an toàn, đòi hỏi sự tính toán cẩn thận về tải trọng và cấu trúc.',
      },
      {
        question: 'Làm thế nào để tích hợp VR/AR vào một buổi hòa nhạc trực tiếp?',
        answer:
          'AR có thể được sử dụng thông qua ứng dụng di động của sự kiện, cho phép khán giả xem các hiệu ứng kỹ thuật số chồng lên sân khấu thực qua màn hình điện thoại. VR có thể cung cấp một trải nghiệm xem hòa nhạc 360 độ, nhập vai cho những người không thể tham dự trực tiếp, cho phép họ "đứng" trên sân khấu cùng nghệ sĩ.',
      },
      {
        question: 'Technical rider là gì và tại sao nó quan trọng?',
        answer:
          'Technical rider là một tài liệu do nghệ sĩ hoặc ban nhạc cung cấp cho ban tổ chức sự kiện, trong đó liệt kê chi tiết các yêu cầu kỹ thuật của họ về âm thanh, ánh sáng, sân khấu, và các thiết bị khác. Nó là một tài liệu hợp đồng quan trọng để đảm bảo buổi biểu diễn diễn ra suôn sẻ và đạt chất lượng như mong muốn.',
      },
      {
        question: 'Làm thế nào để giảm thiểu độ trễ âm thanh (latency) trong các hệ thống không dây?',
        answer:
          'Để giảm thiểu độ trễ, cần sử dụng các hệ thống micro và tai nghe không dây kỹ thuật số chất lượng cao được thiết kế cho các ứng dụng chuyên nghiệp. Việc quản lý tần số cẩn thận để tránh nhiễu sóng và đặt các bộ thu tín hiệu ở vị trí tối ưu cũng rất quan trọng.',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'event-marketing-digital-engagement',
    title: 'Marketing Sự Kiện và Tương Tác Số',
    description:
      'Các chiến lược marketing số cho sự kiện, tương tác trên mạng xã hội, hợp tác với người ảnh hưởng (influencer), và quảng bá sự kiện dựa trên dữ liệu.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=juPUcJAxIMk',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Nền tảng marketing mạng xã hội',
      'Phát triển ứng dụng di động cho sự kiện',
      'Hệ thống bán vé kỹ thuật số',
      'Công cụ phân tích và hiểu biết khán giả',
    ],
    objectives: [
      'Phát triển chiến lược marketing số toàn diện cho sự kiện',
      'Tạo các chiến dịch mạng xã hội hấp dẫn',
      'Xây dựng ứng dụng di động cho sự kiện với các tính năng kết nối',
      'Triển khai phân tích dữ liệu để hiểu hành vi khán giả',
      'Quản lý hợp tác với người ảnh hưởng và thương hiệu',
    ],
    prerequisites: [
      'Kiến thức cơ bản về marketing số',
      'Kinh nghiệm marketing trên mạng xã hội',
      'Kiến thức cơ bản về phân tích dữ liệu',
    ],
    vietnameseEventContext: [
      'Bối cảnh mạng xã hội Việt Nam (Facebook, Zalo, TikTok)',
      'Chiến lược hợp tác với người ảnh hưởng địa phương',
      'Sự nhạy cảm văn hóa trong marketing sự kiện',
      'Tuân thủ quy định của chính phủ đối với sự kiện',
    ],
    industryApplications: [
      'Chiến dịch quảng bá sự kiện doanh nghiệp',
      'Bán vé sự kiện giải trí',
      'Thu hút người tham dự hội nghị',
      'Quản lý hợp tác thương hiệu cho festival',
    ],
    exercises: [
      {
        title: 'Chiến Dịch Marketing Sự Kiện Tích Hợp',
        description:
          'Tạo chiến dịch marketing số toàn diện để ra mắt một hội nghị công nghệ mới tại thị trường Việt Nam.',
        difficulty: 'Trung bình',
        materials: [
          'Công cụ quản lý mạng xã hội',
          'Nền tảng phân tích',
          'Phần mềm email marketing',
          'Cơ sở dữ liệu người ảnh hưởng',
        ],
        procedure: [
          'Nghiên cứu đối tượng mục tiêu trong cộng đồng công nghệ Việt Nam',
          'Thiết kế chiến lược marketing đa kênh bao gồm mạng xã hội, email, người ảnh hưởng',
          'Tạo lịch nội dung với thông điệp phù hợp văn hóa',
          'Phát triển ứng dụng sự kiện với các tính năng kết nối và tương tác',
          'Triển khai hệ thống theo dõi và đo lường ROI của chiến dịch',
        ],
        expectedResults:
          'Chiến dịch marketing sự kiện hoàn chỉnh với các mục tiêu tương tác có thể đo lường, phân bổ ngân sách, và các chỉ số thành công.',
        solution:
          'Phương pháp marketing số tích hợp tận dụng sở thích mạng xã hội của người Việt, người ảnh hưởng địa phương, và hiểu biết văn hóa.',
      },
    ],
    realWorldApplications: [
      'Quảng bá sự kiện hệ sinh thái khởi nghiệp',
      'Thu hút người tham dự hội nghị quốc tế',
      'Marketing số cho festival văn hóa',
      'Quảng bá chương trình đào tạo doanh nghiệp',
    ],
    caseStudies: [
      {
        title: 'Thành Công Marketing Số của TEDxHoChiminhCity',
        organization: 'TEDx Ho Chi Minh City',
        problem:
          'Xây dựng khán giả cho sự kiện TEDx hàng năm trong thị trường sự kiện diễn thuyết cạnh tranh tại Việt Nam.',
        solution:
          'Chiến lược mạng xã hội đa nền tảng, hợp tác với người ảnh hưởng Việt Nam, phát triển ứng dụng di động, nhắm mục tiêu dựa trên dữ liệu.',
        impact: 'Tăng 200% doanh số bán vé, xây dựng cộng đồng hơn 50.000 người theo dõi, đạt 95% công suất địa điểm.',
        innovations: [
          'Thích ứng văn hóa Việt Nam',
          'Mạng lưới người ảnh hưởng địa phương',
          'Phương pháp xây dựng cộng đồng',
        ],
      },
    ],
    resources: [
      {
        title: 'Cẩm Nang Marketing Sự Kiện',
        url: 'https://blog.hootsuite.com/event-marketing/',
        type: 'Resource',
      },
    ],
    faqs: [
      {
        question: '"Early bird" là gì và tại sao nó hiệu quả trong việc bán vé sự kiện?',
        answer:
          'Vé "Early bird" là loại vé được bán với giá ưu đãi trong một khoảng thời gian giới hạn trước khi sự kiện diễn ra. Nó hiệu quả vì tạo ra cảm giác khẩn cấp, khuyến khích mọi người mua vé sớm, giúp ban tổ chức có được nguồn vốn ban đầu và đánh giá được sự quan tâm của khán giả.',
      },
      {
        question: 'Làm thế nào để sử dụng mạng xã hội hiệu quả để quảng bá sự kiện?',
        answer:
          'Hãy tạo một hashtag độc đáo cho sự kiện, chia sẻ nội dung hậu trường, tổ chức các cuộc thi hoặc giveaway, và chạy quảng cáo nhắm mục tiêu đến các đối tượng phù hợp. Tận dụng các tính năng như Instagram Stories, Facebook Events, và live streaming để tạo sự hào hứng.',
      },
      {
        question: 'Vai trò của email marketing trong quảng bá sự kiện là gì?',
        answer:
          'Email marketing là một kênh hiệu quả để giao tiếp trực tiếp với những người đã quan tâm. Nó được sử dụng để thông báo về việc mở bán vé, giới thiệu diễn giả, gửi lời nhắc nhở trước sự kiện, và thu thập phản hồi sau sự kiện. Việc phân khúc danh sách email sẽ giúp gửi đi những thông điệp phù hợp hơn.',
      },
      {
        question: 'Làm thế nào để lựa chọn influencer (người ảnh hưởng) phù hợp cho sự kiện?',
        answer:
          'Hãy chọn những influencer có đối tượng người theo dõi trùng khớp với đối tượng mục tiêu của bạn. Mức độ tương tác (engagement rate) quan trọng hơn số lượng người theo dõi. Đảm bảo rằng phong cách và giá trị của họ phù hợp với hình ảnh của sự kiện.',
      },
      {
        question: 'Ứng dụng di động cho sự kiện nên có những tính năng gì?',
        answer:
          'Một ứng dụng sự kiện tốt nên có: lịch trình chi tiết, hồ sơ diễn giả, bản đồ địa điểm, tính năng kết nối (chat, đặt lịch hẹn), thông báo đẩy (push notifications), và các công cụ tương tác như Q&A và thăm dò ý kiến.',
      },
      {
        question: 'Content marketing cho sự kiện là gì?',
        answer:
          'Đó là việc tạo ra và chia sẻ các nội dung có giá trị (như bài blog, video, infographic) liên quan đến chủ đề của sự kiện. Mục đích là để thu hút và giữ chân khán giả, thể hiện chuyên môn và xây dựng sự tin tưởng, từ đó khuyến khích họ tham gia sự kiện.',
      },
      {
        question: 'Làm thế nào để đo lường hiệu quả của một chiến dịch marketing sự kiện?',
        answer:
          'Hiệu quả có thể được đo bằng nhiều chỉ số: số lượng vé bán ra, chi phí cho mỗi lượt chuyển đổi (CPA), lưu lượng truy cập website, mức độ tương tác trên mạng xã hội, và tỷ lệ mở/click của email. Các công cụ như Google Analytics và các nền tảng quản lý mạng xã hội sẽ giúp theo dõi các chỉ số này.',
      },
      {
        question: 'Tại sao việc tạo một trang đích (landing page) riêng cho sự kiện lại quan trọng?',
        answer:
          'Một trang đích tập trung cung cấp tất cả thông tin quan trọng về sự kiện (thời gian, địa điểm, diễn giả, lịch trình) và có một lời kêu gọi hành động (call-to-action) rõ ràng, thường là "Mua vé". Nó giúp tối ưu hóa tỷ lệ chuyển đổi và dễ dàng theo dõi hiệu quả của các chiến dịch quảng cáo.',
      },
      {
        question: 'Làm thế nào để tận dụng UGC (User-Generated Content - Nội dung do người dùng tạo) cho sự kiện?',
        answer:
          'Khuyến khích người tham dự chia sẻ hình ảnh, video và trải nghiệm của họ trên mạng xã hội bằng cách sử dụng hashtag của sự kiện. Bạn có thể tổ chức một cuộc thi ảnh hoặc tạo một "photo booth" độc đáo. UGC là một hình thức marketing truyền miệng mạnh mẽ và đáng tin cậy.',
      },
      {
        question: 'Remarketing (tiếp thị lại) hoạt động như thế nào trong marketing sự kiện?',
        answer:
          'Remarketing cho phép bạn hiển thị quảng cáo cho những người đã truy cập trang web sự kiện của bạn nhưng chưa mua vé. Bằng cách "nhắc nhở" họ về sự kiện trên các trang web và mạng xã hội khác, bạn có thể tăng cơ hội họ quay lại và hoàn tất việc đăng ký.',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'festival-operations-logistics',
    title: 'Vận Hành và Logistics Festival',
    description:
      'Quản lý festival quy mô lớn bao gồm điều phối logistics, quản lý nhà cung cấp, lập kế hoạch an toàn, và vận hành xuất sắc.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=DRZymVT5i6w',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
    eventCategory: 'festival-management',
    eventScale: 'mega',
    technologyFocus: [
      'Hệ thống phần mềm quản lý festival',
      'Hệ thống RFID và thanh toán không tiếp xúc',
      'Công nghệ giám sát đám đông và an toàn',
      'Nền tảng quản lý chuỗi cung ứng',
    ],
    objectives: [
      'Nắm vững lập kế hoạch logistics cho festival quy mô lớn',
      'Triển khai điều phối nhà cung cấp và quản lý chuỗi cung ứng',
      'Phát triển quy trình an toàn và an ninh toàn diện',
      'Thiết kế luồng di chuyển của đám đông và bố cục địa điểm hiệu quả',
      'Tạo trung tâm chỉ huy vận hành với giám sát thời gian thực',
    ],
    prerequisites: ['Kinh nghiệm quản lý sự kiện', 'Kỹ năng quản lý dự án', 'Hiểu biết về các quy định an toàn'],
    vietnameseEventContext: [
      'Giấy phép và tuân thủ quy định của chính phủ Việt Nam',
      'Thích ứng kế hoạch sự kiện với mùa mưa',
      'Tích hợp hệ sinh thái nhà cung cấp địa phương',
      'Kết hợp truyền thống lễ hội văn hóa',
    ],
    industryApplications: [
      'Quản lý vận hành festival âm nhạc',
      'Điều phối logistics festival ẩm thực',
      'Tổ chức lễ hội văn hóa',
      'Quản lý sự kiện ngoài trời của doanh nghiệp',
    ],
    exercises: [
      {
        title: 'Kế Hoạch Vận Hành Festival Nhiều Ngày',
        description:
          'Phát triển kế hoạch vận hành toàn diện cho một festival văn hóa Việt Nam kéo dài 3 ngày, dự kiến có hơn 200.000 người tham dự.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm lập kế hoạch festival',
          'Công cụ quản lý logistics',
          'Mẫu lập kế hoạch an toàn',
          'Hệ thống quản lý nhà cung cấp',
        ],
        procedure: [
          'Thiết kế bố cục địa điểm festival tối ưu hóa luồng di chuyển của đám đông và vị trí nhà cung cấp',
          'Tạo kế hoạch logistics chi tiết bao gồm vận chuyển, quản lý chất thải, tiện ích',
          'Phát triển quy trình an toàn bao gồm các thủ tục ứng phó khẩn cấp',
          'Lập kế hoạch hệ thống điều phối nhà cung cấp với giao tiếp thời gian thực',
          'Thiết kế bảng điều khiển vận hành để giám sát festival thời gian thực',
        ],
        expectedResults:
          'Sổ tay vận hành festival hoàn chỉnh với timeline chi tiết, ma trận trách nhiệm, và kế hoạch dự phòng.',
        solution:
          'Khung vận hành festival chuyên nghiệp tuân thủ quy định của Việt Nam, tích hợp văn hóa, và đạt hiệu quả vận hành xuất sắc.',
      },
    ],
    realWorldApplications: [
      'Vận hành Lễ hội Đèn lồng Hội An',
      'Điều phối Lễ hội Tết TP.HCM',
      'Quản lý festival ẩm thực quốc tế',
      'Lập kế hoạch sự kiện ngày hội gia đình của công ty',
    ],
    caseStudies: [
      {
        title: 'Vận Hành Xuất Sắc tại Quest Festival',
        organization: 'Quest Music Festival Vietnam',
        problem: 'Quản lý logistics phức tạp cho festival EDM quốc tế trong điều kiện nhiệt đới đầy thách thức.',
        solution:
          'Trung tâm vận hành tiên tiến, theo dõi người tham dự bằng RFID, hệ thống dự phòng thời tiết, điều phối nhà cung cấp quốc tế.',
        impact:
          'Quản lý thành công hơn 80.000 người tham dự trong 3 ngày, không có sự cố an toàn lớn, tỷ lệ hài lòng của người tham dự đạt 98%.',
        innovations: [
          'Vận hành thích ứng với thời tiết',
          'Phân tích đám đông thời gian thực',
          'Quy trình an toàn tiêu chuẩn quốc tế',
        ],
      },
    ],
    resources: [
      {
        title: 'Sổ Tay Vận Hành Festival',
        url: 'https://www.eventbrite.com/blog/festival-planning-guide/',
        type: 'Guide',
      },
    ],
    faqs: [
      {
        question: 'Vai trò của một Giám đốc Vận hành (Operations Director) tại một festival là gì?',
        answer:
          'Giám đốc Vận hành chịu trách nhiệm giám sát tất cả các khía cạnh phi sản xuất của festival, bao gồm logistics, an ninh, quản lý địa điểm, nhân sự, nhà cung cấp, và đảm bảo mọi thứ diễn ra suôn sẻ, an toàn và hiệu quả.',
      },
      {
        question: 'Site plan (sơ đồ địa điểm) là gì và tại sao nó quan trọng?',
        answer:
          'Site plan là một bản đồ chi tiết của toàn bộ khu vực festival, chỉ rõ vị trí của sân khấu, khu vực khán giả, cổng vào/ra, nhà vệ sinh, trạm y tế, quầy hàng, và các cơ sở hạ tầng khác. Nó là công cụ cốt lõi để lập kế hoạch luồng di chuyển của đám đông, logistics và an toàn.',
      },
      {
        question: 'Làm thế nào để quản lý rác thải hiệu quả tại một festival lớn?',
        answer:
          'Cần có một kế hoạch quản lý rác thải toàn diện, bao gồm việc đặt đủ số lượng thùng rác (phân loại rác tái chế và rác thông thường), có đội ngũ thu gom rác thường xuyên, và hợp tác với một công ty xử lý rác thải chuyên nghiệp. Khuyến khích khán giả giữ gìn vệ sinh chung cũng rất quan trọng.',
      },
      {
        question: 'Kế hoạch ứng phó khẩn cấp (Emergency Response Plan) bao gồm những gì?',
        answer:
          'Kế hoạch này phải bao gồm các quy trình chi tiết để xử lý các tình huống như cấp cứu y tế, hỏa hoạn, thời tiết khắc nghiệt, hoặc các vấn đề an ninh. Nó phải xác định rõ các tuyến đường sơ tán, vị trí của các trạm y tế, cách thức liên lạc với các cơ quan chức năng (cảnh sát, cứu hỏa), và vai trò của từng thành viên trong đội ngũ.',
      },
      {
        question: 'Tại sao việc quản lý nhà cung cấp (vendor management) lại phức tạp?',
        answer:
          'Một festival có thể có hàng trăm nhà cung cấp khác nhau (thực phẩm, đồ uống, hàng hóa, kỹ thuật). Việc quản lý bao gồm quá trình lựa chọn, ký hợp đồng, điều phối thời gian và địa điểm lắp đặt, đảm bảo họ tuân thủ các quy định về an toàn và vệ sinh, và xử lý các vấn đề phát sinh trong suốt sự kiện.',
      },
      {
        question: 'Công nghệ RFID được sử dụng như thế nào tại các festival?',
        answer:
          'Vòng tay RFID (Radio-Frequency Identification) có thể được sử dụng làm vé vào cổng, ví thanh toán không dùng tiền mặt, và công cụ để thu thập dữ liệu về hành vi của người tham dự (ví dụ: họ dành thời gian ở khu vực nào nhiều nhất). Điều này giúp tăng tốc độ phục vụ và cung cấp dữ liệu quý giá cho ban tổ chức.',
      },
      {
        question: 'Làm thế nào để lập kế hoạch cho các yếu tố không lường trước được như thời tiết?',
        answer:
          'Cần có kế hoạch dự phòng (contingency plan) cho các kịch bản thời tiết xấu. Điều này có thể bao gồm việc có sẵn các khu vực có mái che, hệ thống thoát nước tốt, quy trình tạm dừng hoặc sơ tán sự kiện nếu cần, và thông báo kịp thời cho khán giả.',
      },
      {
        question: 'Vai trò của tình nguyện viên trong vận hành festival là gì?',
        answer:
          'Tình nguyện viên là một phần không thể thiếu, họ hỗ trợ trong nhiều lĩnh vực như hướng dẫn khán giả, hỗ trợ tại các điểm thông tin, quản lý hàng lối, và giữ gìn vệ sinh. Một chương trình quản lý tình nguyện viên tốt sẽ đảm bảo họ được đào tạo, phân công công việc phù hợp và được ghi nhận đóng góp.',
      },
      {
        question: 'Trung tâm Chỉ huy Sự kiện (Event Command Center) là gì?',
        answer:
          'Đây là "bộ não" của festival trong thời gian diễn ra, nơi các trưởng bộ phận (an ninh, y tế, vận hành) tập trung để giám sát mọi hoạt động, giao tiếp với nhau qua bộ đàm, và đưa ra quyết định nhanh chóng khi có sự cố.',
      },
      {
        question: 'Load-in và load-out là gì?',
        answer:
          'Load-in là quá trình vận chuyển và lắp đặt tất cả các thiết bị, sân khấu, và cơ sở hạ tầng vào địa điểm trước khi festival bắt đầu. Load-out là quá trình tháo dỡ và vận chuyển mọi thứ ra khỏi địa điểm sau khi festival kết thúc. Đây là hai giai đoạn logistics cực kỳ quan trọng và phức tạp.',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'treasure-hunt-adventure')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'event-analytics-performance-measurement',
    title: 'Phân Tích và Đo Lường Hiệu Quả Sự Kiện',
    description:
      'Phân tích sự kiện dựa trên dữ liệu, đo lường ROI, phân tích hành vi người tham dự, và các chiến lược tối ưu hóa hiệu suất.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=N8PKjyAnQ6U',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Nền tảng phân tích sự kiện',
      'Công cụ thu thập khảo sát và phản hồi',
      'Bản đồ nhiệt và theo dõi hành vi',
      'Hệ thống tính toán và báo cáo ROI',
    ],
    objectives: [
      'Triển khai khung đo lường sự kiện toàn diện',
      'Thiết kế chiến lược thu thập dữ liệu để phân tích hành vi người tham dự',
      'Tính toán ROI và các chỉ số giá trị của sự kiện',
      'Tạo ra những hiểu biết có thể hành động từ dữ liệu hiệu suất sự kiện',
      'Phát triển các mô hình dự đoán cho việc lập kế hoạch sự kiện trong tương lai',
    ],
    prerequisites: [
      'Kiến thức cơ bản về phân tích dữ liệu',
      'Kinh nghiệm lập kế hoạch sự kiện',
      'Hiểu biết về các chỉ số kinh doanh',
    ],
    vietnameseEventContext: [
      'Các chỉ số thành công của sự kiện doanh nghiệp Việt Nam',
      'Đo lường tác động của festival văn hóa',
      'Đánh giá hiệu quả sự kiện của chính phủ',
      'Phân tích tác động kinh tế của sự kiện du lịch',
    ],
    industryApplications: [
      'Phân tích ROI hội nghị doanh nghiệp',
      'Tối ưu hóa hiệu suất sự kiện giải trí',
      'Đo lường hiệu quả triển lãm thương mại',
      'Đánh giá tác động cộng đồng của sự kiện văn hóa',
    ],
    exercises: [
      {
        title: 'Phát Triển Bảng Điều Khiển Hiệu Suất Sự Kiện',
        description:
          'Tạo bảng điều khiển phân tích toàn diện để theo dõi và tối ưu hóa hiệu suất hội nghị doanh nghiệp.',
        difficulty: 'Trung bình',
        materials: [
          'Nền tảng phần mềm phân tích',
          'Công cụ thiết kế khảo sát',
          'Công cụ phát triển bảng điều khiển',
          'Phần mềm phân tích thống kê',
        ],
        procedure: [
          'Xác định các chỉ số hiệu suất chính (KPI) để đo lường thành công sự kiện',
          'Thiết kế chiến lược thu thập dữ liệu bao gồm khảo sát, theo dõi, phân tích',
          'Xây dựng bảng điều khiển thời gian thực với những hiểu biết có thể hành động',
          'Triển khai phân tích dự đoán để dự báo số người tham dự và tương tác',
          'Tạo hệ thống báo cáo tự động để giao tiếp với các bên liên quan',
        ],
        expectedResults:
          'Bảng điều khiển phân tích sự kiện chuyên nghiệp với hiểu biết thời gian thực, khả năng dự đoán, và các đề xuất có thể hành động.',
        solution:
          'Nền tảng phân tích toàn diện kết hợp các chỉ số định lượng, phản hồi định tính, và mô hình dự đoán để tối ưu hóa sự kiện.',
      },
    ],
    realWorldApplications: [
      'Hiệu quả chương trình đào tạo doanh nghiệp',
      'Đo lường tác động hội nghị quốc tế',
      'Phân tích tác động kinh tế của festival',
      'Theo dõi sự hài lòng của công dân đối với sự kiện của chính phủ',
    ],
    caseStudies: [
      {
        title: 'Phân Tích Hội Nghị Khách Hàng của VietinBank',
        organization: 'VietinBank',
        problem: 'Đo lường ROI và tối ưu hóa chiến lược hội nghị khách hàng hàng năm.',
        solution:
          'Nền tảng phân tích tiên tiến, thu thập dữ liệu đa điểm chạm, mô hình dự đoán số người tham dự, hệ thống theo dõi ROI.',
        impact:
          'Cải thiện ROI sự kiện 65%, tăng sự hài lòng của người tham dự lên 92%, tối ưu hóa kế hoạch sự kiện tương lai với hiểu biết dự đoán.',
        innovations: [
          'Hiểu biết về hành vi khách hàng Việt Nam',
          'Các chỉ số cụ thể cho ngành ngân hàng',
          'Tối ưu hóa sự kiện dự đoán',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Đo Lường ROI Sự Kiện',
        url: 'https://www.cvent.com/en/blog/events/event-roi-measurement',
        type: 'Resource',
      },
    ],
    faqs: [
      {
        question: 'ROI (Return on Investment) của sự kiện được tính như thế nào?',
        answer:
          'ROI sự kiện được tính bằng công thức: [(Tổng giá trị thu được từ sự kiện - Tổng chi phí sự kiện) / Tổng chi phí sự kiện] x 100%. "Tổng giá trị" có thể bao gồm doanh thu bán vé, các hợp đồng mới, giá trị thương hiệu tăng lên, v.v.',
      },
      {
        question: 'Ngoài ROI, còn những chỉ số KPI (Key Performance Indicator) nào quan trọng cần theo dõi?',
        answer:
          'Các KPI quan trọng khác bao gồm: Tỷ lệ tham dự (số người tham dự thực tế / số người đăng ký), Mức độ hài lòng của người tham dự (qua khảo sát), Mức độ tương tác trên mạng xã hội (lượt đề cập, hashtag), Số lượng khách hàng tiềm năng mới, và Độ phủ truyền thông (số lượng bài báo viết về sự kiện).',
      },
      {
        question: 'Làm thế nào để thu thập dữ liệu về hành vi của người tham dự một cách hiệu quả?',
        answer:
          'Có thể sử dụng nhiều công nghệ: ứng dụng di động của sự kiện để theo dõi phiên nào được tham dự nhiều nhất, vòng tay RFID để xem khu vực nào được ghé thăm thường xuyên, và bản đồ nhiệt (heat maps) để phân tích luồng di chuyển của đám đông.',
      },
      {
        question: 'Tại sao khảo sát sau sự kiện (post-event survey) lại quan trọng?',
        answer:
          'Khảo sát sau sự kiện là cách trực tiếp nhất để thu thập phản hồi định tính và định lượng về trải nghiệm của người tham dự. Nó giúp bạn hiểu được điểm mạnh, điểm yếu của sự kiện và cung cấp những hiểu biết quý giá để cải thiện cho những lần tổ chức sau.',
      },
      {
        question: 'Net Promoter Score (NPS) là gì và làm thế nào để áp dụng cho sự kiện?',
        answer:
          'NPS là một chỉ số đo lường lòng trung thành của khách hàng. Trong khảo sát sau sự kiện, bạn có thể hỏi: "Trên thang điểm từ 0-10, bạn có khả năng giới thiệu sự kiện này cho bạn bè hoặc đồng nghiệp không?". Chỉ số này giúp đánh giá mức độ yêu thích và khả năng marketing truyền miệng của sự kiện.',
      },
      {
        question:
          'Làm thế nào để chứng minh giá trị của một sự kiện không tạo ra doanh thu trực tiếp (ví dụ: sự kiện nội bộ)?',
        answer:
          'Đối với các sự kiện này, giá trị có thể được đo lường thông qua các chỉ số khác như: sự cải thiện về tinh thần và sự gắn kết của nhân viên (qua khảo sát), tỷ lệ giữ chân nhân viên, mức độ hiểu biết về chiến lược công ty, hoặc số lượng các ý tưởng sáng tạo mới được tạo ra.',
      },
      {
        question: 'Bảng điều khiển (dashboard) phân tích sự kiện nên hiển thị những thông tin gì?',
        answer:
          'Một bảng điều khiển hiệu quả nên hiển thị các KPI chính một cách trực quan: số liệu đăng ký và tham dự theo thời gian thực, mức độ tương tác, doanh thu, chi phí, và kết quả khảo sát. Nó nên cho phép lọc dữ liệu theo các tiêu chí khác nhau (ví dụ: theo loại vé, theo khu vực địa lý).',
      },
      {
        question: 'Phân tích dự đoán (predictive analytics) có thể giúp gì trong việc lập kế hoạch sự kiện?',
        answer:
          'Dựa trên dữ liệu từ các sự kiện trước, phân tích dự đoán có thể giúp dự báo số lượng người tham dự, thời điểm mua vé cao điểm, hoặc thậm chí là phiên họp nào sẽ được quan tâm nhất. Điều này giúp tối ưu hóa việc phân bổ nguồn lực và chiến lược marketing.',
      },
      {
        question: 'Làm thế nào để theo dõi mức độ tương tác trong một sự kiện ảo?',
        answer:
          'Các nền tảng sự kiện ảo cung cấp rất nhiều dữ liệu: số người xem mỗi phiên, thời gian xem trung bình, số lượng câu hỏi được đặt, số tin nhắn trong chat, và số lượt click vào các liên kết. Những dữ liệu này rất hữu ích để đánh giá mức độ hấp dẫn của nội dung.',
      },
      {
        question: 'ROO (Return on Objectives) là gì và nó khác ROI như thế nào?',
        answer:
          'ROO đo lường mức độ thành công của sự kiện dựa trên các mục tiêu phi tài chính đã đặt ra ban đầu (ví dụ: nâng cao nhận thức thương hiệu, đào tạo nhân viên). Trong khi ROI tập trung vào lợi nhuận tài chính, ROO tập trung vào việc hoàn thành các mục tiêu chiến lược. Cả hai đều quan trọng để có một cái nhìn toàn diện.',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'data-visualization'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];
