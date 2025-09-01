import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export const softSkillsLessons: BaseLessonData[] = [
  {
    id: 'giao-tiep-hieu-qua',
    title: 'Giao tiếp hiệu quả',
    description:
      'Học cách truyền đạt ý tưởng một cách rõ ràng, lắng nghe tích cực và xây dựng mối quan hệ tốt đẹp trong công việc và cuộc sống.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=YkhX5QixmKY',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc cốt lõi của giao tiếp hiệu quả.',
      'Thực hành kỹ năng lắng nghe tích cực và đặt câu hỏi.',
      'Học cách đưa ra và nhận phản hồi một cách xây dựng.',
      'Cải thiện khả năng giao tiếp phi ngôn ngữ.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.', 'Sẵn sàng học hỏi và thực hành.'],
    exercises: [
      {
        title: 'Bài tập đóng vai: Lắng nghe tích cực',
        description: 'Thực hành kỹ năng lắng nghe tích cực thông qua một tình huống đóng vai.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chia thành các cặp.',
          'Một người nói về một chủ đề trong 2 phút, người kia chỉ lắng nghe mà không ngắt lời.',
          'Người nghe tóm tắt lại những gì họ đã nghe.',
          'Đổi vai và lặp lại.',
        ],
        expectedResults: 'Học viên có thể tóm tắt chính xác nội dung của người nói và thể hiện sự đồng cảm.',
      },
    ],
    realWorldApplications: [
      'Phỏng vấn xin việc',
      'Thuyết trình trước đám đông',
      'Giải quyết xung đột trong nhóm',
      'Xây dựng mạng lưới quan hệ chuyên nghiệp',
    ],
    resources: [
      {
        title: 'Sách "Đắc nhân tâm"',
        url: 'https://www.vinabook.com/dac-nhan-tam-tai-ban-2019-p82269.html',
        type: 'Reference',
      },
    ],
  },
  {
    id: 'giai-quyet-van-de',
    title: 'Giải quyết vấn đề và ra quyết định',
    description: 'Học cách phân tích vấn đề, xác định các giải pháp tiềm năng và đưa ra quyết định hiệu quả.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=XfbH2pPCvA0',
    objectives: [
      'Hiểu quy trình giải quyết vấn đề và ra quyết định.',
      'Phân tích và xác định vấn đề một cách hiệu quả.',
      'Đánh giá và lựa chọn giải pháp tối ưu.',
      'Thực hiện và theo dõi quyết định đã đưa ra.',
    ],
    prerequisites: ['Hoàn thành khóa học "Giao tiếp hiệu quả"', 'Có kinh nghiệm làm việc nhóm cơ bản'],
    exercises: [
      {
        title: 'Bài tập phân tích tình huống',
        description: 'Phân tích một tình huống thực tế để xác định vấn đề và đề xuất giải pháp.',
        difficulty: 'Trung bình',
        procedure: [
          'Chia nhóm và nhận một tình huống thực tế.',
          'Xác định vấn đề chính trong tình huống.',
          'Đề xuất ít nhất ba giải pháp tiềm năng.',
          'Đánh giá và chọn giải pháp tốt nhất để thực hiện.',
        ],
        expectedResults: 'Học viên có khả năng phân tích tình huống và đưa ra giải pháp hợp lý.',
      },
    ],
    realWorldApplications: [
      'Giải quyết vấn đề trong dự án công việc',
      'Ra quyết định trong quản lý thời gian',
      'Lập kế hoạch và tổ chức sự kiện',
      'Đàm phán và thuyết phục trong kinh doanh',
    ],
    resources: [
      {
        title: 'Video "5 bước giải quyết vấn đề hiệu quả"',
        url: 'https://www.youtube.com/watch?v=8aP8j6g2G6A',
        type: 'Video',
      },
    ],
  },
  {
    id: 'tu-duy-phan-bien',
    title: 'Tư duy phản biện',
    description: 'Phát triển khả năng phân tích thông tin, đánh giá lập luận và hình thành các phán đoán có cơ sở.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=UjbKZvPw1MU',
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của tư duy phản biện.',
      'Phân tích và đánh giá thông tin một cách có hệ thống.',
      'Nhận diện và tránh các bẫy tư duy phổ biến.',
      'Hình thành và bảo vệ quan điểm cá nhân một cách logic.',
    ],
    prerequisites: [
      'Hoàn thành khóa học "Giải quyết vấn đề và ra quyết định"',
      'Có kinh nghiệm làm việc nhóm và giao tiếp cơ bản',
    ],
    exercises: [
      {
        title: 'Bài tập phân tích lập luận',
        description: 'Phân tích một lập luận để xác định các yếu tố hỗ trợ và phản đối.',
        difficulty: 'Trung bình',
        procedure: [
          'Đọc một bài viết hoặc xem một video có chứa lập luận.',
          'Xác định luận điểm chính và các bằng chứng hỗ trợ.',
          'Tìm kiếm các phản biện hoặc lập luận trái chiều.',
          'Thảo luận và đánh giá tính thuyết phục của lập luận.',
        ],
        expectedResults: 'Học viên có khả năng phân tích và đánh giá lập luận một cách khách quan và logic.',
      },
    ],
    realWorldApplications: [
      'Đánh giá thông tin và tin tức hàng ngày',
      'Ra quyết định trong kinh doanh và đầu tư',
      'Giải quyết xung đột và bất đồng quan điểm',
      'Lập kế hoạch và thực hiện các dự án cá nhân và nghề nghiệp',
    ],
    resources: [
      {
        title: 'Sách "Tư duy phản biện trong kinh doanh"',
        url: 'https://www.amazon.com/T%C6%B0-Duy-Ph%E1%BA%A1n-Bi%E1%BB%87n-Trong-Kinh-Doanh/dp/B08L5V7V7G',
        type: 'Reference',
      },
    ],
  },
  {
    id: 'sang-tao-va-doi-moi',
    title: 'Sáng tạo và đổi mới',
    description: 'Học cách tư duy sáng tạo, phát triển các ý tưởng mới và áp dụng chúng vào thực tế.',
    duration: '60 phút',
    difficulty: 'Dễ',
    videoUrl: 'https://www.youtube.com/watch?v=RojLaCktyhY',
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của sáng tạo và đổi mới.',
      'Phát triển tư duy sáng tạo và khả năng tưởng tượng.',
      'Áp dụng các kỹ thuật tư duy sáng tạo vào giải quyết vấn đề.',
      'Thực hành phát triển ý tưởng và đổi mới trong công việc và cuộc sống.',
    ],
    prerequisites: [
      'Hoàn thành các khóa học "Giao tiếp hiệu quả", "Giải quyết vấn đề và ra quyết định", "Tư duy phản biện"',
      'Có tinh thần cởi mở và sẵn sàng thử nghiệm cái mới',
    ],
    exercises: [
      {
        title: 'Bài tập phát triển ý tưởng',
        description: 'Sử dụng kỹ thuật brainstorming để phát triển ý tưởng cho một dự án hoặc vấn đề cụ thể.',
        difficulty: 'Dễ',
        procedure: [
          'Chọn một chủ đề hoặc vấn đề cần giải quyết.',
          'Sử dụng kỹ thuật brainstorming để phát triển ít nhất 10 ý tưởng khác nhau.',
          'Đánh giá và chọn ra 3 ý tưởng khả thi nhất để phát triển thêm.',
        ],
        expectedResults: 'Học viên có khả năng phát triển nhiều ý tưởng sáng tạo và chọn lọc ra ý tưởng khả thi nhất.',
      },
    ],
    realWorldApplications: [
      'Phát triển sản phẩm hoặc dịch vụ mới',
      'Cải tiến quy trình làm việc',
      'Tạo ra các chiến dịch marketing sáng tạo',
      'Giải quyết các vấn đề phức tạp trong kinh doanh và cuộc sống',
    ],
    resources: [
      {
        title: 'Video "Sáng tạo trong kinh doanh: Tư duy thiết kế"',
        url: 'https://www.youtube.com/watch?v=6pGJ8tG1g6A',
        type: 'Video',
      },
    ],
  },
];
