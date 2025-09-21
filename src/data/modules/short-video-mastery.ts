import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface ShortVideoMasteryLessonType extends BaseLessonData {
  category: 'Social Media';
}

export const shortVideoMasteryLessons: ShortVideoMasteryLessonType[] = [
  {
    id: 'viral-video-psychology-hooks',
    title: 'Tâm lý học Video Viral & Kỹ thuật "Câu" người xem',
    description:
      'Nắm vững các yếu tố tâm lý tạo nên video viral và xây dựng những "cú hook" hấp dẫn để giữ chân người xem trong 3 giây đầu tiên.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=hNuAv-42jzY',
    imageUrl: 'https://i.ytimg.com/vi/hNuAv-42jzY/hqdefault.jpg',
    category: 'Social Media',
    objectives: [
      'Hiểu tâm lý đằng sau nội dung viral.',
      'Thành thạo các kỹ thuật tạo hook trong 3 giây.',
      'Áp dụng các yếu tố kích thích cảm xúc hiệu quả.',
      'Tạo các mẫu nội dung để có khả năng viral nhất quán.',
      'Tối ưu hóa thời gian và chiến lược đăng bài.',
    ],
    prerequisites: [
      'Kỹ năng chỉnh sửa video cơ bản.',
      'Hiểu biết về các nền tảng mạng xã hội (TikTok, Instagram Reels, YouTube Shorts).',
      'Tư duy sáng tạo và yêu thích kể chuyện.',
    ],
    exercises: [
      {
        title: 'Thực hành Công thức Hook Viral',
        description: 'Tạo 5 video ngắn sử dụng các công thức hook đã được chứng minh và theo dõi hiệu suất của chúng.',
        difficulty: 'Trung bình',
        procedure: [
          'Nghiên cứu các video hoạt động tốt nhất trong lĩnh vực của bạn.',
          'Xác định các mẫu hook và yếu tố tâm lý chung.',
          'Brainstorm 10 ý tưởng video sử dụng các công thức viral.',
          'Tạo và đăng 5 video với các loại hook khác nhau.',
          'Theo dõi chặt chẽ các chỉ số hiệu suất (lượt xem, tỷ lệ giữ chân, tương tác).',
        ],
        expectedResults:
          'Ít nhất 1-2 video có lượt xem vượt trội và tỷ lệ tương tác cao hơn so với các video thông thường.',
      },
    ],
    realWorldApplications: [
      'Xây dựng thương hiệu cá nhân trên mạng xã hội.',
      'Tiếp thị sản phẩm/dịch vụ thông qua video ngắn.',
      'Trở thành nhà sáng tạo nội dung chuyên nghiệp.',
      'Tạo các chiến dịch truyền thông lan truyền.',
    ],
    vietnamContext: {
      title: 'Bùng nổ Video ngắn tại Thị trường Việt Nam',
      content: [
        'Việt Nam là một trong những thị trường có tốc độ tăng trưởng người dùng TikTok nhanh nhất thế giới.',
        'Các "hot trend" trên TikTok và Reels tại Việt Nam thường có vòng đời ngắn nhưng tốc độ lan truyền cực kỳ nhanh, đòi hỏi sự nhạy bén của nhà sáng tạo.',
        'Nội dung review sản phẩm, ẩm thực, và các điệu nhảy biến hình (transformation) đặc biệt được ưa chuộng bởi khán giả Việt.',
      ],
    },
    careerConnect: {
      name: 'Lê Chí Linh (Linh Barbie)',
      title: 'Nhà sáng tạo nội dung TikTok',
      company: 'TikTok Creator',
      imageUrl: 'https://i.pravatar.cc/150?u=le-chi-linh',
      quote:
        'Sự sáng tạo và chân thật là chìa khóa. Đừng ngại thử nghiệm những ý tưởng điên rồ nhất, vì đó có thể là thứ khán giả đang tìm kiếm.',
    },
    quizzes: [
      {
        question: 'Mục tiêu chính của "hook" trong một video ngắn là gì?',
        options: [
          'Giới thiệu bản thân',
          'Kêu gọi hành động (Call to Action)',
          'Giữ chân người xem trong 3-5 giây đầu tiên',
          'Giải thích chi tiết về nội dung',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Hook là yếu tố quyết định liệu người xem có lướt qua video của bạn hay không. Mục tiêu của nó là tạo ra sự tò mò, bất ngờ hoặc đồng cảm ngay lập tức để giữ họ ở lại.',
      },
    ],
    faqs: [
      {
        question: 'Một "hook" tốt cần có những yếu tố gì?',
        answer:
          'Một hook tốt thường gây tò mò (ví dụ: "Đây là lý do bạn luôn thất bại..."), tạo ra sự bất ngờ (một cảnh quay lạ mắt), đặt ra một câu hỏi mà người xem muốn biết câu trả lời, hoặc chạm đến một vấn đề/cảm xúc chung của nhiều người.',
      },
      {
        question: 'Tỷ lệ giữ chân người xem (retention rate) là gì và tại sao nó quan trọng?',
        answer:
          'Là tỷ lệ phần trăm người xem còn ở lại tại mỗi thời điểm của video. Đây là một trong những chỉ số quan trọng nhất mà thuật toán của các nền tảng sử dụng để đánh giá chất lượng video. Tỷ lệ giữ chân cao cho thấy nội dung của bạn hấp dẫn và sẽ được ưu tiên phân phối đến nhiều người hơn.',
      },
      {
        question: 'Ngoài "hook", yếu tố nào khác giúp tăng tỷ lệ giữ chân?',
        answer:
          'Sử dụng các kỹ thuật chỉnh sửa nhanh (quick cuts), thêm phụ đề động (animated captions), sử dụng hiệu ứng âm thanh (sound effects), và kể một câu chuyện có cao trào, nút thắt sẽ giúp giữ sự chú ý của người xem trong suốt video.',
      },
      {
        question: 'Làm thế nào để tìm ra các "trend" đang thịnh hành?',
        answer:
          'Hãy dành thời gian lướt trang "Dành cho bạn" (For You Page) trên TikTok, xem tab "Thịnh hành" (Trending) trên YouTube. Chú ý đến các bài nhạc, hiệu ứng, hoặc các dạng format video được nhiều người sử dụng lặp đi lặp lại.',
      },
      {
        question: 'Có nên lúc nào cũng chạy theo trend không?',
        answer:
          'Không nhất thiết. "Bắt trend" là một cách tốt để tăng khả năng được phân phối, nhưng bạn cần biến tấu nó để phù hợp với phong cách và nội dung của kênh mình. Nội dung nguyên bản, độc đáo và mang lại giá trị vẫn là yếu tố cốt lõi để xây dựng một kênh bền vững.',
      },
      {
        question: 'Độ dài lý tưởng cho một video TikTok/Reels là bao nhiêu?',
        answer:
          'Không có con số chính xác, nhưng các video ngắn (7-15 giây) thường có tỷ lệ xem hết cao hơn. Tuy nhiên, nếu nội dung của bạn thực sự hấp dẫn và có chiều sâu, các video dài hơn (30-60 giây) vẫn có thể hoạt động tốt và giúp xây dựng mối quan hệ sâu sắc hơn với khán giả.',
      },
      {
        question: 'Tại sao một số video có rất nhiều lượt xem nhưng ít lượt thích?',
        answer:
          'Điều này có thể do video có một "hook" rất tốt khiến nhiều người dừng lại xem, nhưng nội dung phần sau lại không đáp ứng được kỳ vọng hoặc không đủ hấp dẫn để họ nhấn thích. Hoặc video đó gây tranh cãi, khiến người ta xem để bình luận nhưng không đồng tình.',
      },
      {
        question: 'Sử dụng nhạc đang trend có thực sự hiệu quả không?',
        answer:
          'Rất hiệu quả. Thuật toán của các nền tảng thường ưu tiên phân phối các video sử dụng âm thanh đang thịnh hành. Nó giúp video của bạn có cơ hội tiếp cận một lượng lớn khán giả đang quan tâm đến trend đó.',
      },
      {
        question: 'Làm thế nào để video của tôi trông chuyên nghiệp hơn chỉ bằng điện thoại?',
        answer:
          'Hãy chú ý đến 3 yếu tố: Ánh sáng (luôn quay ở nơi đủ sáng), Âm thanh (sử dụng mic cài áo hoặc đảm bảo không có tiếng ồn), và Sự ổn định (dùng tripod hoặc tựa tay vào đâu đó để chống rung).',
      },
      {
        question: 'Call to Action (CTA) trong video ngắn nên đặt ở đâu?',
        answer:
          'CTA nên được đặt một cách tự nhiên ở cuối video. Thay vì nói "Hãy follow tôi", hãy thử nói "Follow mình để biết thêm nhiều mẹo hay như thế này nhé!". Một CTA hiệu quả là CTA mang lại lợi ích cho người xem.',
      },
    ],
  },
  {
    id: 'content-strategy-monetization',
    title: 'Chiến lược Nội dung & Kiếm tiền từ Video ngắn',
    description:
      'Xây dựng một chiến lược nội dung bền vững, xác định các trụ cột nội dung và khám phá các phương pháp kiếm tiền hiệu quả từ video ngắn.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=sV1qG3F-g2k',
    imageUrl: 'https://i.ytimg.com/vi/sV1qG3F-g2k/hqdefault.jpg',
    category: 'Social Media',
    objectives: [
      'Xây dựng các trụ cột nội dung (content pillars) cho kênh.',
      'Lập kế hoạch nội dung theo tháng và quý.',
      'Hiểu các phương pháp kiếm tiền: Affiliate, Booking PR, Quỹ nhà sáng tạo, Bán sản phẩm riêng.',
      'Xây dựng cộng đồng và tăng tỷ lệ chuyển đổi.',
      'Phân tích dữ liệu để tối ưu hóa chiến lược.',
    ],
    prerequisites: ["Hoàn thành bài 'Tâm lý học Video Viral'"],
    exercises: [
      {
        title: 'Xây dựng Kế hoạch Nội dung 30 ngày',
        description:
          'Lập một kế hoạch nội dung chi tiết cho kênh video ngắn của bạn trong 30 ngày tới, dựa trên các trụ cột nội dung đã xác định.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định 3-4 trụ cột nội dung chính cho kênh của bạn.',
          'Brainstorm ít nhất 5 ý tưởng video cho mỗi trụ cột.',
          'Sắp xếp các ý tưởng vào một lịch đăng bài trong 30 ngày.',
          'Xác định mục tiêu (ví dụ: tăng follow, quảng bá sản phẩm) cho mỗi tuần.',
        ],
        expectedResults: 'Một bản kế hoạch nội dung hoàn chỉnh, có cấu trúc và mục tiêu rõ ràng.',
      },
    ],
    realWorldApplications: [
      'Phát triển kênh thành một doanh nghiệp.',
      'Hợp tác với các nhãn hàng lớn.',
      'Xây dựng phễu bán hàng từ video ngắn.',
      'Tổ chức các chiến dịch ra mắt sản phẩm.',
    ],
    vietnamContext: {
      title: 'Hệ sinh thái kiếm tiền cho Nhà sáng tạo Việt',
      content: [
        'TikTok Shop và Livestream Commerce đang là xu hướng bùng nổ, cho phép nhà sáng tạo bán hàng trực tiếp và nhận hoa hồng ngay trên nền tảng.',
        'Các MCN (Multi-Channel Network) và Agency tại Việt Nam đóng vai trò quan trọng trong việc kết nối nhà sáng tạo với các nhãn hàng (booking PR).',
        'Xây dựng thương hiệu cá nhân mạnh có thể dẫn đến các cơ hội ngoài đời thực như viết sách, làm diễn giả, hoặc ra mắt dòng sản phẩm riêng.',
      ],
    },
    careerConnect: {
      name: 'Phạm Thoại',
      title: 'Nhà sáng tạo nội dung & "Chiến thần" Livestream',
      company: 'TikTok Creator',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thoai',
      quote:
        'Content là vua, nhưng livestream bán hàng là nữ hoàng. Sự kết hợp giữa giải trí và thương mại là công thức thành công trên nền tảng video ngắn.',
    },
    quizzes: [
      {
        question:
          'Hình thức kiếm tiền nào liên quan đến việc quảng bá sản phẩm của người khác và nhận hoa hồng trên mỗi đơn hàng thành công?',
        options: [
          'Quỹ nhà sáng tạo (Creator Fund)',
          'Booking PR',
          'Tiếp thị liên kết (Affiliate Marketing)',
          'Bán sản phẩm riêng (Merchandise)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tiếp thị liên kết là mô hình mà nhà sáng tạo giới thiệu sản phẩm/dịch vụ của một công ty khác thông qua các đường link đặc biệt và nhận hoa hồng khi có người mua hàng qua link đó.',
      },
    ],
    faqs: [
      {
        question: 'Trụ cột nội dung (content pillars) là gì?',
        answer:
          'Là 3-5 chủ đề chính, cốt lõi mà kênh của bạn sẽ tập trung vào. Việc xác định các trụ cột nội dung giúp kênh của bạn có định hướng rõ ràng, thu hút đúng đối tượng khán giả và giúp bạn không bị cạn kiệt ý tưởng.',
      },
      {
        question: 'Làm thế nào để tìm ra trụ cột nội dung cho kênh của mình?',
        answer:
          'Hãy trả lời 3 câu hỏi: 1. Bạn đam mê điều gì? 2. Bạn có kiến thức/kỹ năng chuyên môn về lĩnh vực nào? 3. Thị trường (khán giả) đang quan tâm đến điều gì? Giao điểm của ba yếu tố này chính là nơi chứa các trụ cột nội dung lý tưởng của bạn.',
      },
      {
        question: 'Booking PR là gì?',
        answer:
          'Đây là hình thức các nhãn hàng trả tiền cho nhà sáng tạo để sản xuất và đăng tải video có nội dung quảng bá cho sản phẩm/dịch vụ của họ. Đây là một trong những nguồn thu nhập chính của các KOC/KOL (Key Opinion Consumer/Leader).',
      },
      {
        question: 'Em cần bao nhiêu followers để bắt đầu kiếm tiền?',
        answer:
          'Không có con số cố định. Với Affiliate Marketing hoặc bán sản phẩm riêng, bạn có thể bắt đầu ngay cả khi có ít followers, miễn là bạn xây dựng được một cộng đồng tin tưởng. Với Booking PR, các nhãn hàng thường bắt đầu để ý đến các kênh có từ 10,000 followers trở lên.',
      },
      {
        question: 'TikTok Shop hoạt động như thế nào?',
        answer:
          'TikTok Shop cho phép người bán và nhà sáng tạo gắn link sản phẩm trực tiếp vào video và các buổi livestream. Người xem có thể nhấn vào link và mua hàng ngay trên ứng dụng TikTok mà không cần chuyển sang nền tảng khác, tạo ra trải nghiệm mua sắm liền mạch.',
      },
      {
        question: 'Làm thế nào để xây dựng một cộng đồng gắn kết?',
        answer:
          'Hãy thường xuyên tương tác với khán giả: trả lời bình luận, mở các phiên Q&A (Hỏi & Đáp), tạo ra các nội dung mà họ có thể tham gia (duet, stitch). Hãy cho họ thấy bạn lắng nghe và trân trọng sự ủng hộ của họ.',
      },
      {
        question: 'Các chỉ số phân tích nào là quan trọng nhất cần theo dõi?',
        answer:
          'Ngoài lượt xem, hãy chú ý đến: 1. Tỷ lệ giữ chân (cho biết nội dung có hấp dẫn không). 2. Thời gian xem trung bình (cho biết mức độ quan tâm sâu sắc). 3. Tỷ lệ tương tác (thích, bình luận, chia sẻ). 4. Lượt truy cập hồ sơ (cho thấy video có đủ hấp dẫn để người ta muốn tìm hiểu thêm về bạn không).',
      },
      {
        question: 'Làm sao để cân bằng giữa nội dung mang lại giá trị và nội dung quảng cáo?',
        answer:
          'Một quy tắc phổ biến là 80/20. Dành 80% thời gian để tạo ra các nội dung hữu ích, giải trí, và xây dựng cộng đồng. 20% còn lại có thể dành cho các nội dung quảng bá, bán hàng. Khi khán giả đã tin tưởng bạn, họ sẽ sẵn lòng đón nhận các đề xuất của bạn hơn.',
      },
      {
        question: 'MCN (Multi-Channel Network) có thể giúp gì cho nhà sáng tạo?',
        answer:
          'MCN là các công ty quản lý và hỗ trợ nhà sáng tạo. Họ có thể giúp bạn trong việc kết nối với nhãn hàng, bảo vệ bản quyền, hỗ trợ sản xuất, và định hướng phát triển kênh. Đổi lại, họ sẽ nhận một phần trăm doanh thu của bạn.',
      },
      {
        question: 'Ngoài các cách trên, còn có cách nào khác để kiếm tiền không?',
        answer:
          'Có. Khi bạn đã xây dựng được thương hiệu cá nhân, bạn có thể kiếm tiền từ việc cung cấp dịch vụ coaching/tư vấn, bán các sản phẩm số (ebook, khóa học online), tổ chức workshop, hoặc nhận được tài trợ từ các nền tảng (Creator Fund).',
      },
    ],
  },
];

export const shortVideoMasteryModuleData: ModuleData = {
  id: 'short-video-mastery',
  title: 'Short-form Video Mastery',
  subtitle: 'Viral video creation techniques',
  description:
    'Master psychological triggers, advanced editing techniques và platform optimization cho viral short-form videos. Course này sẽ teach science-based approach to viral content creation từ psychology đến technical execution.',
  level: 'Trung bình',
  duration: '8-9 giờ',
  category: 'Video Production & Viral Marketing',
  features: [
    'Viral Psychology & Hook Creation để capture attention ngay lập tức',
    'Advanced Editing Techniques với professional tools và workflows',
    'Platform Algorithm Optimization cho maximum reach và engagement',
    'Trend Analysis & Adaptation để stay ahead of viral trends',
  ],
  icon: '📱',
  color: 'from-orange-600 to-yellow-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  objectives: [
    'Understand viral psychology và create compelling hooks trong first 3 seconds',
    'Master advanced editing techniques cho professional video production',
    'Optimize content cho each platform algorithm (TikTok, YouTube, Instagram)',
    'Develop trend analysis skills để predict và leverage viral opportunities',
  ],
  prerequisites: [
    'Basic video editing skills với smartphone hoặc editing software',
    'Understanding of social media platforms và their content formats',
    'Creative mindset và storytelling interest',
    'Willingness to experiment và iterate content strategies',
  ],
  careerOutcomes: [
    'Viral Video Specialist với proven engagement rates',
    'Social Media Video Editor với platform expertise',
    'Content Creator Coach focused trên video optimization',
    'Video Marketing Strategist cho brands và businesses',
  ],
  industryApplications: [
    'Social media marketing agencies specializing in video content',
    'Entertainment companies creating viral marketing campaigns',
    'E-learning platforms developing engaging educational content',
    'Personal branding consultants teaching video creation skills',
  ],
  marketDemand: {
    averageSalary: '18-42 triệu VNĐ',
    jobGrowth: '+40%',
    hireDemand: 'Rất Cao',
  },
  relatedModules: ['ai-content-creator', 'content-creator', 'tiktok-social-commerce', 'live-commerce-streaming'],
  lessons: shortVideoMasteryLessons,
};
