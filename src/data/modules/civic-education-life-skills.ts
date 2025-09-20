import { ModuleData } from '@/types';

export const civicEducationLifeSkillsModuleData: ModuleData = {
  id: 'civic-education-life-skills',
  title: 'Giáo Dục Công Dân và Kỹ Năng Sống',
  subtitle: 'Trang bị kiến thức pháp luật, đạo đức và những kỹ năng mềm cần thiết cho cuộc sống và hội nhập.',
  description:
    'Module này không chỉ là môn học đạo đức khô khan mà là một cẩm nang sống, giúp học sinh hiểu về quyền và nghĩa vụ công dân, xây dựng nhân cách tốt đẹp và rèn luyện các kỹ năng sống thiết yếu như giao tiếp, quản lý cảm xúc, và giải quyết vấn đề.',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
  color: 'from-teal-500 to-cyan-500',
  category: 'Phát triển bản thân',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'phap-luat-co-ban',
      title: 'Pháp Luật Cơ Bản Cho Công Dân Trẻ',
      description:
        'Giới thiệu về hệ thống pháp luật Việt Nam, quyền và nghĩa vụ cơ bản của công dân, đặc biệt là những quy định liên quan đến lứa tuổi vị thành niên.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Luật Giao thông đường bộ', 'Luật An ninh mạng', 'Quyền trẻ em'],
      objectives: [
        'Hiểu được khái niệm pháp luật, đặc điểm và vai trò của pháp luật trong xã hội.',
        'Nắm được các quyền và nghĩa vụ cơ bản của công dân được quy định trong Hiến pháp.',
        'Nhận biết các hành vi vi phạm pháp luật phổ biến ở lứa tuổi học sinh.',
        'Biết cách bảo vệ bản thân và người khác theo đúng quy định của pháp luật.',
      ],
      faqs: [
        {
          question: 'Tại sao mọi người phải sống và làm việc theo Hiến pháp và pháp luật?',
          answer:
            'Pháp luật tạo ra một khuôn khổ chung, công bằng cho mọi người trong xã hội. Việc tuân thủ pháp luật giúp đảm bảo trật tự, an toàn, bảo vệ quyền và lợi ích hợp pháp của mỗi cá nhân, và thúc đẩy xã hội phát triển ổn định.',
        },
        {
          question: 'Người từ đủ bao nhiêu tuổi phải chịu trách nhiệm hình sự về mọi tội phạm?',
          answer:
            'Theo Bộ luật Hình sự Việt Nam, người từ đủ 16 tuổi trở lên phải chịu trách nhiệm hình sự về mọi tội phạm, trừ những tội phạm mà Bộ luật có quy định khác.',
        },
      ],
      quizzes: [
        {
          question: 'Văn bản nào có hiệu lực pháp lý cao nhất trong hệ thống pháp luật Việt Nam?',
          options: ['Bộ luật Dân sự', 'Bộ luật Hình sự', 'Luật Giáo dục', 'Hiến pháp'],
          correctAnswerIndex: 3,
          explanation:
            'Hiến pháp là luật cơ bản của nhà nước, có hiệu lực pháp lý cao nhất. Mọi văn bản pháp luật khác đều phải phù hợp với Hiến pháp.',
        },
      ],
    },
    {
      id: 'ky-nang-quan-ly-cam-xuc',
      title: 'Kỹ Năng Quản Lý Cảm Xúc (EQ)',
      description:
        'Học cách nhận biết, thấu hiểu và điều chỉnh cảm xúc của bản thân cũng như nhận biết cảm xúc của người khác để xây dựng mối quan hệ tốt đẹp.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Kiểm soát cơn giận', 'Vượt qua căng thẳng', 'Đồng cảm với bạn bè'],
      objectives: [
        'Nhận diện được các loại cảm xúc cơ bản (vui, buồn, giận, sợ).',
        'Hiểu được mối liên hệ giữa cảm xúc, suy nghĩ và hành vi.',
        'Học các kỹ thuật đơn giản để kiểm soát cảm xúc tiêu cực (hít thở sâu, đếm ngược).',
        'Phát triển khả năng đồng cảm và lắng nghe người khác.',
      ],
      faqs: [
        {
          question: 'Tại sao quản lý cảm xúc lại quan trọng?',
          answer:
            'Quản lý cảm xúc giúp chúng ta đưa ra quyết định sáng suốt hơn (thay vì hành động bốc đồng khi nóng giận), giảm bớt căng thẳng, cải thiện mối quan hệ với mọi người và tăng cường sức khỏe tinh thần.',
        },
        {
          question: 'Làm thế nào để vượt qua cảm giác lo lắng trước kỳ thi?',
          answer:
            'Một vài kỹ thuật hữu ích bao gồm: chuẩn bị bài vở kỹ lưỡng để tăng sự tự tin, tập hít thở sâu để làm dịu hệ thần kinh, chia sẻ cảm xúc với bạn bè hoặc người thân, và duy trì một lịch trình ngủ nghỉ, ăn uống hợp lý.',
        },
      ],
      quizzes: [
        {
          question: 'EQ là viết tắt của cụm từ nào?',
          options: ['Chỉ số thông minh', 'Trí tuệ cảm xúc', 'Năng lực học tập', 'Khả năng sáng tạo'],
          correctAnswerIndex: 1,
          explanation:
            'EQ (Emotional Quotient) hay Trí tuệ cảm xúc là khả năng nhận biết, đánh giá và kiểm soát cảm xúc của bản thân, của người khác và của các nhóm.',
        },
      ],
    },
    {
      id: 'ky-nang-giai-quyet-van-de',
      title: 'Kỹ Năng Giải Quyết Vấn Đề và Ra Quyết Định',
      description:
        'Trang bị một quy trình có hệ thống để xác định, phân tích và giải quyết các vấn đề gặp phải trong học tập và cuộc sống.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Giải quyết mâu thuẫn với bạn bè', 'Lập kế hoạch học tập', 'Chọn trường, chọn ngành'],
      objectives: [
        'Học quy trình 5 bước để giải quyết vấn đề: Xác định vấn đề, Phân tích nguyên nhân, Đề xuất giải pháp, Lựa chọn và thực hiện, Đánh giá kết quả.',
        'Phân biệt giữa triệu chứng và nguyên nhân cốt lõi của một vấn đề.',
        'Sử dụng các công cụ tư duy như sơ đồ xương cá, 5 Whys.',
        'Rèn luyện khả năng ra quyết định dựa trên việc phân tích ưu, nhược điểm.',
      ],
      faqs: [
        {
          question: 'Kỹ thuật "5 Whys" là gì?',
          answer:
            'Đây là một kỹ thuật đơn giản để tìm ra nguyên nhân gốc rễ của một vấn đề bằng cách hỏi "Tại sao?" lặp đi lặp lại (thường là 5 lần). Ví dụ: "Tại sao bạn đi học muộn?" -> "Vì xe bị hỏng." -> "Tại sao xe bị hỏng?" -> "Vì lốp bị xẹp." -> "Tại sao lốp bị xẹp?" -> "Vì hôm qua đi qua đinh mà không biết."...',
        },
        {
          question: 'Làm thế nào để đưa ra một quyết định khó khăn?',
          answer:
            'Hãy thử lập một danh sách các lựa chọn. Với mỗi lựa chọn, liệt kê tất cả các ưu điểm và nhược điểm có thể nghĩ ra. Cho điểm từng ưu/nhược điểm theo mức độ quan trọng. Tổng hợp lại và xem lựa chọn nào có vẻ tối ưu nhất. Đôi khi, việc tham khảo ý kiến từ người bạn tin tưởng cũng rất hữu ích.',
        },
      ],
      quizzes: [
        {
          question: 'Bước đầu tiên và quan trọng nhất trong quy trình giải quyết vấn đề là gì?',
          options: [
            'Tìm ngay một giải pháp',
            'Xác định rõ ràng và chính xác vấn đề',
            'Đổ lỗi cho người khác',
            'Bỏ qua vấn đề',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Nếu không xác định đúng vấn đề, mọi nỗ lực giải quyết sau đó có thể trở nên vô ích. Việc định nghĩa vấn đề một cách rõ ràng sẽ định hướng cho toàn bộ quá trình.',
        },
      ],
    },
  ],
  features: [
    'Kiến thức pháp luật thiết thực',
    'Bài tập rèn luyện trí tuệ cảm xúc (EQ)',
    'Quy trình giải quyết vấn đề hiệu quả',
    'Tình huống thực tế và câu hỏi thảo luận',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Trở thành một công dân có hiểu biết và trách nhiệm.',
    'Nâng cao khả năng tự nhận thức và quản lý bản thân.',
    'Xây dựng các mối quan hệ xã hội tích cực.',
    'Trang bị những kỹ năng mềm cần thiết cho sự thành công trong tương lai.',
  ],
  careerOutcomes: [
    'Kỹ năng sống cần thiết cho mọi ngành nghề và lĩnh vực.',
    'Nền tảng cho các ngành luật, tâm lý học, công tác xã hội, quản trị nhân sự.',
  ],
  tags: ['giáo dục công dân', 'kỹ năng sống', 'pháp luật', 'trí tuệ cảm xúc'],
};
