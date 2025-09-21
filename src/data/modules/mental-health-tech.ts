import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface MentalHealthLesson extends BaseLessonData {
  technologies?: string[];
  wellnessImpact?: string;
}

export const mentalHealthTechModule: ModuleData<MentalHealthLesson> = {
  id: 'mental-health-tech',
  title: 'Mental Health Technology',
  subtitle: 'Công nghệ trong Sức khỏe Tâm thần',
  description:
    'Khóa học toàn diện về ứng dụng công nghệ trong sức khỏe tâm thần. Học cách sử dụng digital wellness tools, mental health apps, wearables và AI therapy để cải thiện wellbeing và quản lý stress hiệu quả.',
  level: 'Cơ bản',
  duration: '12-15 giờ',
  category: 'Professional Skills',
  features: [
    'Chiến lược Digital Wellness và sử dụng công nghệ lành mạnh',
    'Hệ sinh thái ứng dụng Mental Health và cách triển khai hiệu quả',
    'Thiết bị đeo & giám sát sinh trắc học để theo dõi sức khỏe',
    'Công cụ trị liệu bằng AI và các giải pháp sức khỏe tâm thần cá nhân hóa',
  ],
  icon: '🧠',
  color: 'from-emerald-600 to-teal-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu mối quan hệ giữa công nghệ và sức khỏe tâm thần',
    'Triển khai các chiến lược digital wellness và quản lý căng thẳng',
    'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần và thiết bị đeo',
    'Áp dụng các công cụ AI cho trị liệu cá nhân hóa và cải thiện wellbeing',
  ],
  prerequisites: [
    'Không yêu cầu kiến thức kỹ thuật đặc biệt',
    'Quan tâm đến sức khỏe tâm thần và sức khỏe cá nhân',
    'Sẵn sàng khám phá các công cụ công nghệ mới',
  ],
  careerOutcomes: [
    'Chuyên gia Tư vấn Digital Wellness',
    'Quản lý Sản phẩm Công nghệ Sức khỏe',
    'Nhà phát triển Ứng dụng Sức khỏe Tâm thần',
    'Chuyên gia Công nghệ Nhân sự trong mảng Wellness',
  ],
  industryApplications: [
    { name: 'Công nghệ Y tế và Nền tảng Sức khỏe Số', description: '' },
    { name: 'Chương trình Sức khỏe Doanh nghiệp', description: '' },
    { name: 'Hỗ trợ Sức khỏe Tâm thần trong Giáo dục', description: '' },
    { name: 'Ứng dụng Wellness cho người tiêu dùng', description: '' },
  ],
  marketDemand: {
    averageSalary: '18-35 triệu VNĐ',
    jobGrowth: '+28%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['healthcare-tech', 'ai-machine-learning', 'data-science'],
  lessons: [
    {
      id: 'digital-wellness-fundamentals',
      title: 'Bài 1: Sức khỏe Kỹ thuật số & Công nghệ Sức khỏe Tâm thần',
      description:
        'Hiểu tác động của công nghệ lên sức khỏe tâm thần. Học cách sử dụng ứng dụng, thiết bị đeo và công cụ kỹ thuật số để cải thiện sức khỏe và quản lý căng thẳng.',
      videoUrl: 'https://www.youtube.com/watch?v=gmLb9SJHlgU',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      difficulty: 'Cơ bản',
      duration: '120 phút',
      objectives: [
        'Hiểu mối quan hệ giữa việc sử dụng công nghệ và sức khỏe tâm thần',
        'Thực hiện các chiến lược cai nghiện kỹ thuật số và thói quen công nghệ lành mạnh',
        'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần để thiền và theo dõi tâm trạng',
        'Thiết lập hệ thống theo dõi sức khỏe với thiết bị đeo và điện thoại thông minh',
        'Tạo kế hoạch sức khỏe kỹ thuật số cá nhân hóa cho sức khỏe tâm thần lâu dài',
      ],
      realWorldApplications: [
        'Quản lý và phòng ngừa sức khỏe tâm thần cá nhân',
        'Các chương trình chăm sóc sức khỏe cho nhân viên trong công ty',
        'Tích hợp theo dõi bệnh nhân trong lĩnh vực chăm sóc sức khỏe',
        'Hỗ trợ sức khỏe tâm thần tại các cơ sở giáo dục',
        'Phát triển chương trình sức khỏe tâm thần cộng đồng',
      ],
      faqs: [
        {
          question: 'Digital wellness (sức khỏe kỹ thuật số) là gì?',
          answer:
            'Sức khỏe kỹ thuật số là việc thực hành các thói quen lành mạnh liên quan đến việc sử dụng công nghệ. Nó bao gồm việc quản lý thời gian sử dụng thiết bị, bảo vệ bản thân khỏi các nội dung tiêu cực và sử dụng công nghệ một cách có chủ đích để cải thiện sức khỏe thể chất và tinh thần.',
        },
        {
          question: 'Làm thế nào một ứng dụng trên điện thoại có thể giúp tôi thiền?',
          answer:
            'Các ứng dụng thiền thường cung cấp các bài hướng dẫn bằng giọng nói, âm thanh tự nhiên, hoặc nhạc thư giãn để giúp bạn tập trung vào hơi thở và thư giãn tâm trí. Chúng cũng có thể nhắc nhở bạn dành thời gian thiền mỗi ngày và theo dõi tiến trình của bạn.',
        },
        {
          question: 'Thiết bị đeo tay theo dõi sức khỏe có ích lợi gì cho sức khỏe tâm thần?',
          answer:
            'Thiết bị đeo có thể theo dõi các chỉ số sinh trắc học như nhịp tim, chất lượng giấc ngủ và mức độ hoạt động thể chất. Những dữ liệu này có thể giúp bạn nhận ra các dấu hiệu của căng thẳng (stress) và hiểu rõ hơn mối liên hệ giữa thể chất và tinh thần, từ đó có những điều chỉnh phù hợp.',
        },
        {
          question: 'Cai nghiện kỹ thuật số (digital detox) có thực sự cần thiết không?',
          answer:
            'Việc "cai nghiện" kỹ thuật số, tức là giảm bớt hoặc tạm dừng sử dụng các thiết bị điện tử, có thể rất hữu ích. Nó giúp não bộ được nghỉ ngơi, giảm cảm giác quá tải thông tin, cải thiện sự tập trung và khuyến khích các tương tác xã hội trực tiếp, tất cả đều có lợi cho sức khỏe tâm thần.',
        },
        {
          question: 'Làm thế nào để thiết lập một "ranh giới kỹ thuật số" lành mạnh?',
          answer: 'Bạn có thể bắt đầu bằng cách tắt các thông báo không cần thiết, quy định các khoảng thời gian "không dùng điện thoại" trong ngày (ví dụ: trong bữa ăn, 1 giờ trước khi ngủ), và chỉ theo dõi các tài khoản mạng xã hội mang lại giá trị tích cực cho bạn.'
        },
        {
          question: 'Theo dõi tâm trạng (mood tracking) hoạt động như thế nào?',
          answer: 'Các ứng dụng theo dõi tâm trạng cho phép bạn ghi lại cảm xúc của mình hàng ngày. Theo thời gian, dữ liệu này giúp bạn nhận ra các quy luật, ví dụ như điều gì thường khiến bạn vui, buồn hoặc căng thẳng, từ đó giúp bạn quản lý cảm xúc tốt hơn.'
        },
        {
          question: 'Sử dụng công nghệ để kết nối xã hội có tốt cho sức khỏe tâm thần không?',
          answer: 'Có, nếu được sử dụng một cách có chủ đích. Công nghệ giúp kết nối với bạn bè, gia đình ở xa và tham gia các cộng đồng có cùng sở thích. Tuy nhiên, việc lạm dụng mạng xã hội và so sánh bản thân với người khác có thể gây tác động tiêu cực.'
        },
        {
          question: 'Ánh sáng xanh từ màn hình ảnh hưởng đến giấc ngủ như thế nào?',
          answer: 'Ánh sáng xanh có thể ức chế việc sản xuất melatonin, một loại hormone giúp điều chỉnh giấc ngủ. Tiếp xúc với ánh sáng xanh vào buổi tối có thể khiến bạn khó ngủ và làm giảm chất lượng giấc ngủ. Nhiều điện thoại hiện có chế độ "Night Shift" để giảm ánh sáng xanh.'
        },
        {
          question: 'Có những loại ứng dụng sức khỏe tâm thần nào?',
          answer: 'Có rất nhiều loại, bao gồm ứng dụng thiền và chánh niệm (Calm, Headspace), ứng dụng theo dõi tâm trạng (Daylio), ứng dụng trị liệu nhận thức-hành vi (CBT), và các chatbot trị liệu sử dụng AI.'
        },
        {
          question: 'Làm thế nào để chọn một ứng dụng sức khỏe tâm thần phù hợp?',
          answer: 'Hãy tìm hiểu xem ứng dụng có được phát triển dựa trên các bằng chứng khoa học không, đọc các bài đánh giá của người dùng, và kiểm tra chính sách bảo mật của ứng dụng. Quan trọng nhất là hãy thử và xem liệu nó có phù hợp với nhu cầu và sở thích của bạn không.'
        }
      ],
    },
    {
      id: 'ai-therapy-tools',
      title: 'Bài 2: Công cụ Sức khỏe Tâm thần dùng AI & Trị liệu bằng Chatbot',
      description:
        'Khám phá các ứng dụng của AI trong sức khỏe tâm thần: trị liệu bằng chatbot, can thiệp cá nhân hóa, phân tích dự báo. Xây dựng các công cụ AI để hỗ trợ sức khỏe tinh thần.',
      videoUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop',
      difficulty: 'Nâng cao',
      duration: '180 phút',
      objectives: [
        'Hiểu các ứng dụng của AI trong chăm sóc sức khỏe tâm thần và trị liệu',
        'Đánh giá hiệu quả và hạn chế của các công cụ trị liệu AI',
        'Thiết kế hệ thống AI đàm thoại để hỗ trợ sức khỏe tâm thần',
        'Thực hiện học máy để dự đoán tâm trạng và can thiệp',
        'Giải quyết các cân nhắc về đạo đức trong sức khỏe tâm thần do AI cung cấp',
      ],
      realWorldApplications: [
        'Hỗ trợ và tăng cường trị liệu lâm sàng',
        'Các chương trình sức khỏe tâm thần tại nơi làm việc',
        'Dịch vụ tư vấn tại các cơ sở giáo dục',
        'Tiếp cận sức khỏe tâm thần cộng đồng',
        'Can thiệp khủng hoảng và phòng chống tự tử',
      ],
      faqs: [
        {
          question: 'Chatbot trị liệu là gì?',
          answer: 'Là một chương trình máy tính sử dụng trí tuệ nhân tạo (AI) để mô phỏng cuộc trò chuyện với người dùng, cung cấp sự hỗ trợ về mặt cảm xúc và các kỹ thuật trị liệu cơ bản, chẳng hạn như liệu pháp nhận thức-hành vi (CBT).'
        },
        {
          question: 'AI có thể thay thế chuyên gia trị liệu con người không?',
          answer: 'Hiện tại, AI không thể thay thế hoàn toàn chuyên gia trị liệu con người. Chúng được xem là công cụ hỗ trợ, giúp cung cấp sự trợ giúp ban đầu, thực hành các kỹ năng, và có mặt 24/7. Sự đồng cảm, thấu hiểu sâu sắc và kinh nghiệm của con người vẫn là không thể thay thế.'
        },
        {
          question: 'Lợi ích chính của việc sử dụng chatbot trị liệu là gì?',
          answer: 'Các lợi ích chính bao gồm tính ẩn danh, sự tiện lợi (có thể sử dụng mọi lúc, mọi nơi), chi phí thấp hơn so với trị liệu truyền thống, và không có cảm giác bị phán xét, giúp người dùng dễ dàng mở lòng hơn.'
        },
        {
          question: 'AI làm thế nào để cá nhân hóa các can thiệp sức khỏe tâm thần?',
          answer: 'Bằng cách phân tích dữ liệu người dùng cung cấp (như nhật ký tâm trạng, các cuộc trò chuyện), AI có thể xác định các mẫu hành vi, suy nghĩ và đề xuất các bài tập, kỹ thuật hoặc thông tin phù hợp nhất với tình trạng cụ thể của người đó.'
        },
        {
          question: 'Phân tích dự báo trong sức khỏe tâm thần là gì?',
          answer: 'Là việc sử dụng các thuật toán học máy để phân tích dữ liệu (ví dụ: từ thiết bị đeo, mạng xã hội) nhằm xác định các cá nhân có nguy cơ cao gặp phải các vấn đề sức khỏe tâm thần (như trầm cảm, lo âu) trước khi các triệu chứng trở nên nghiêm trọng.'
        },
        {
          question: 'Những lo ngại về đạo đức khi sử dụng AI trong sức khỏe tâm thần là gì?',
          answer: 'Các lo ngại chính bao gồm bảo mật và quyền riêng tư dữ liệu của người dùng, nguy cơ AI đưa ra lời khuyên sai hoặc không phù hợp, sự thiếu hụt kết nối con người, và khả năng AI không nhận diện được các tình huống khủng hoảng nghiêm trọng cần sự can thiệp của chuyên gia.'
        },
        {
          question: 'Một chatbot trị liệu có thể xử lý tình huống khủng hoảng không?',
          answer: 'Hầu hết các chatbot trị liệu uy tín đều được lập trình để nhận diện các từ khóa hoặc cụm từ liên quan đến khủng hoảng (ví dụ: tự tử, tự làm hại bản thân). Khi phát hiện, chúng sẽ ngay lập tức cung cấp thông tin liên hệ đến các đường dây nóng hoặc chuyên gia can thiệp khủng hoảng.'
        },
        {
          question: 'Liệu pháp Nhận thức-Hành vi (CBT) mà các chatbot thường sử dụng là gì?',
          answer: 'CBT là một loại trị liệu tâm lý giúp mọi người xác định và thay đổi các kiểu suy nghĩ và hành vi tiêu cực hoặc không hữu ích. Chatbot thường hướng dẫn người dùng qua các bài tập CBT để giúp họ tự quản lý các vấn đề như lo âu hoặc trầm cảm nhẹ.'
        },
        {
          question: 'Dữ liệu của tôi có được an toàn khi sử dụng các ứng dụng AI này không?',
          answer: 'Điều này phụ thuộc vào từng ứng dụng. Các ứng dụng uy tín thường mã hóa dữ liệu và có chính sách bảo mật rõ ràng. Người dùng nên đọc kỹ chính sách bảo mật và chỉ sử dụng các ứng dụng từ các nhà phát triển đáng tin cậy.'
        },
        {
          question: 'Tương lai của AI trong sức khỏe tâm thần sẽ như thế nào?',
          answer: 'Trong tương lai, AI có thể trở thành một công cụ sàng lọc và hỗ trợ ban đầu mạnh mẽ hơn, tích hợp sâu hơn với các thiết bị đeo để đưa ra cảnh báo sớm, và giúp các chuyên gia trị liệu phân tích dữ liệu để đưa ra phác đồ điều trị hiệu quả hơn.'
        }
      ]
    },
  ],
};
