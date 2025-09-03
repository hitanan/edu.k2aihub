import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

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
  },
];
