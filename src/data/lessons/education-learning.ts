import { BaseLessonData } from '@/types';

export const educationLearningLessons: BaseLessonData[] = [
  {
    id: 'ai-tutor',
    title: 'AI như gia sư cá nhân',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Khám phá cách sử dụng các công cụ AI làm gia sư ảo để giải thích các khái niệm phức tạp, trả lời câu hỏi và cá nhân hóa lộ trình học tập.',
    objectives: [
      'Hiểu vai trò của AI trong giáo dục cá nhân hóa.',
      'Sử dụng các nền tảng AI để hỗ trợ học tập.',
      'Tạo câu lệnh (prompt) hiệu quả để nhận được sự trợ giúp tốt nhất từ AI.',
      'Đánh giá ưu và nhược điểm của việc học với AI.',
    ],
    realWorldApplications: [
      'Học sinh, sinh viên tự học các môn khó.',
      'Người đi làm học kỹ năng mới theo tốc độ của riêng mình.',
      'Nghiên cứu và chuẩn bị cho các kỳ thi.',
    ],
    tags: ['AI trong giáo dục', 'học tập cá nhân hóa', 'gia sư ảo', 'công nghệ giáo dục'],
    faqs: [
      {
        question: 'Liệu AI có thể thay thế hoàn toàn giáo viên con người không?',
        answer:
          'Không. AI là một công cụ hỗ trợ mạnh mẽ, có thể cá nhân hóa việc học và giải đáp thắc mắc 24/7. Tuy nhiên, giáo viên con người vẫn không thể thiếu trong việc truyền cảm hứng, hướng dẫn kỹ năng mềm, và tạo ra một môi trường học tập tương tác, giàu cảm xúc.',
      },
      {
        question: 'Làm thế nào để đặt câu hỏi (prompt) hiệu quả cho AI gia sư?',
        answer:
          'Hãy cụ thể và cung cấp ngữ cảnh. Thay vì hỏi "Giải thích về quang hợp", hãy thử "Hãy giải thích quá trình quang hợp cho một học sinh lớp 7, sử dụng ví dụ về một cái cây trong vườn và vai trò của mặt trời, nước và không khí."',
      },
      {
        question: 'Sử dụng AI để làm bài tập có được coi là gian lận không?',
        answer:
          'Điều này phụ thuộc vào cách bạn sử dụng. Nếu bạn sao chép nguyên văn câu trả lời của AI, đó là gian lận. Nếu bạn sử dụng AI để hiểu khái niệm, tìm các nguồn tham khảo, hoặc kiểm tra lại ý tưởng của mình, đó là một cách học tập thông minh và hiệu quả.',
      },
      {
        question: 'Các công cụ AI gia sư phổ biến hiện nay là gì?',
        answer:
          'Một số công cụ nổi bật bao gồm ChatGPT (với các prompt được thiết kế cho việc học), Khan Academy (tích hợp AI để hỗ trợ), Duolingo (cho việc học ngôn ngữ), và Socratic by Google (giúp giải các bài toán).',
      },
    ],
  },
  {
    id: 'research-ai',
    title: 'Nghiên cứu với AI',
    duration: '60 phút',
    difficulty: 'Trung bình',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Học cách tận dụng AI để tăng tốc quá trình nghiên cứu, từ tìm kiếm tài liệu, phân tích dữ liệu đến phát hiện các xu hướng mới.',
    objectives: [
      'Sử dụng các công cụ AI để tìm kiếm và sàng lọc tài liệu học thuật.',
      'Áp dụng AI để phân tích và trực quan hóa dữ liệu nghiên cứu.',
      'Hiểu cách AI có thể giúp xác định các lỗ hổng kiến thức và đề xuất hướng nghiên cứu mới.',
      'Nhận thức về các vấn đề đạo đức khi sử dụng AI trong nghiên cứu.',
    ],
    realWorldApplications: [
      'Sinh viên làm luận văn, luận án.',
      'Nhà khoa học và nhà nghiên cứu trong các lĩnh vực.',
      'Chuyên viên phân tích thị trường và kinh doanh.',
    ],
    tags: ['nghiên cứu khoa học', 'phân tích dữ liệu', 'AI học thuật', 'công cụ nghiên cứu'],
  },
  {
    id: 'language-learning',
    title: 'Học ngôn ngữ với AI',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    type: 'interactive',
    description:
      'Trải nghiệm các ứng dụng AI giúp cải thiện kỹ năng nghe, nói, đọc, viết, luyện phát âm và giao tiếp với chatbot.',
    objectives: [
      'Sử dụng ứng dụng học ngôn ngữ dựa trên AI.',
      'Luyện phát âm và nhận phản hồi tức thì từ AI.',
      'Thực hành giao tiếp với chatbot ngôn ngữ.',
      'Cá nhân hóa kế hoạch học từ vựng và ngữ pháp.',
    ],
    realWorldApplications: [
      'Người học ngoại ngữ ở mọi cấp độ.',
      'Chuẩn bị cho các kỳ thi chứng chỉ ngôn ngữ.',
      'Cải thiện kỹ năng giao tiếp trong môi trường quốc tế.',
    ],
    tags: ['học ngoại ngữ', 'luyện phát âm', 'chatbot', 'ứng dụng học tập'],
  },
  {
    id: 'document-summary',
    title: 'Tóm tắt tài liệu với AI',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Nắm vững kỹ năng sử dụng AI để tóm tắt nhanh chóng các bài báo dài, sách, báo cáo và tài liệu nghiên cứu, giúp tiết kiệm thời gian và nắm bắt ý chính.',
    objectives: [
      'Hiểu các kỹ thuật tóm tắt văn bản của AI.',
      'Sử dụng các công cụ tóm tắt AI trực tuyến và ngoại tuyến.',
      'Tùy chỉnh độ dài và kiểu tóm tắt.',
      'Đánh giá chất lượng của bản tóm tắt do AI tạo ra.',
    ],
    realWorldApplications: [
      'Nghiên cứu sinh và học giả cần xử lý lượng lớn tài liệu.',
      'Chuyên viên cần nắm bắt nhanh thông tin từ báo cáo.',
      'Bất kỳ ai muốn đọc hiệu quả hơn.',
    ],
    tags: ['tóm tắt văn bản', 'xử lý ngôn ngữ tự nhiên', 'hiệu suất học tập', 'đọc nhanh'],
  },
];
