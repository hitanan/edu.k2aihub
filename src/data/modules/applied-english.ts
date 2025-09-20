import { ModuleData } from '@/types';

export const appliedEnglishModuleData: ModuleData = {
  id: 'applied-english',
  title: 'Tiếng Anh Ứng Dụng',
  subtitle: 'Tập trung vào kỹ năng giao tiếp, viết luận và sử dụng tiếng Anh trong các tình huống thực tế.',
  description:
    'Module này vượt ra ngoài ngữ pháp và từ vựng đơn thuần, giúp học sinh tự tin sử dụng tiếng Anh để giao tiếp hàng ngày, thuyết trình, tham gia tranh biện và viết các bài luận học thuật.',
  image: 'https://images.unsplash.com/photo-1521302080220-5d7a4a0f0b24?w=1200&h=600&fit=crop',
  color: 'from-pink-500 to-rose-500',
  category: 'Ngôn ngữ & Giao tiếp',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'everyday-communication',
      title: 'Giao Tiếp Tiếng Anh Hàng Ngày',
      description:
        'Học các mẫu câu, thành ngữ và từ vựng cần thiết cho các tình huống giao tiếp phổ biến như giới thiệu bản thân, mua sắm, hỏi đường, và nói chuyện qua điện thoại.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Nói chuyện với người nước ngoài', 'Du lịch', 'Mua sắm'],
      objectives: [
        'Tự tin giới thiệu bản thân và hỏi thông tin về người khác.',
        'Sử dụng các mẫu câu thông dụng khi mua sắm và gọi món ăn.',
        'Biết cách hỏi và chỉ đường một cách lịch sự.',
        'Thực hành các cuộc hội thoại qua điện thoại.',
      ],
      faqs: [
        {
          question: '"How do you do?" và "How are you?" khác nhau như thế nào?',
          answer:
            '"How do you do?" là một lời chào rất trang trọng, thường chỉ dùng khi bạn được giới thiệu với ai đó lần đầu tiên. Câu trả lời lịch sự cũng là "How do you do?". "How are you?" là câu hỏi thăm sức khỏe thông thường, bạn có thể trả lời "I\'m fine, thank you. And you?".',
        },
        {
          question: 'Làm thế nào để từ chối một lời đề nghị một cách lịch sự?',
          answer:
            'Thay vì nói "No", bạn có thể dùng các cách nói mềm mỏng hơn như "I\'d love to, but I have another plan." (Tôi rất muốn, nhưng tôi có kế hoạch khác rồi), hoặc "That\'s very kind of you, but I\'m afraid I can\'t." (Bạn thật tốt bụng, nhưng tôi e là không thể).',
        },
      ],
      quizzes: [
        {
          question: 'Khi muốn gọi món trong nhà hàng, bạn nên nói câu nào?',
          options: [
            'Give me the chicken soup.',
            'I want the chicken soup.',
            "I'd like the chicken soup, please.",
            'The chicken soup!',
          ],
          correctAnswerIndex: 2,
          explanation: '"I\'d like..." hoặc "I\'ll have..." là cách gọi món lịch sự và phổ biến nhất trong tiếng Anh.',
        },
      ],
    },
    {
      id: 'academic-essay-writing',
      title: 'Kỹ Năng Viết Luận Học Thuật',
      description:
        'Hướng dẫn cấu trúc của một bài luận 5 đoạn (5-paragraph essay), cách viết câu chủ đề (topic sentence), phát triển luận điểm và viết kết bài hiệu quả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Viết bài luận ở trường',
        'Chuẩn bị cho các kỳ thi chuẩn hóa (IELTS, TOEFL)',
        'Viết email trang trọng',
      ],
      objectives: [
        'Hiểu rõ cấu trúc của một bài luận học thuật: Mở bài, Thân bài, Kết bài.',
        'Học cách viết một câu luận đề (thesis statement) rõ ràng và mạch lạc.',
        'Phát triển các đoạn thân bài với câu chủ đề, các ý hỗ trợ và ví dụ cụ thể.',
        'Sử dụng các từ nối (linking words) để tạo sự liên kết giữa các câu và các đoạn.',
      ],
      faqs: [
        {
          question: 'Thesis statement (câu luận đề) là gì và tại sao nó quan trọng?',
          answer:
            'Thesis statement là một hoặc hai câu, thường nằm ở cuối đoạn mở bài, tóm tắt ý chính hoặc quan điểm của toàn bộ bài luận. Nó giống như một tấm bản đồ chỉ đường cho cả người viết và người đọc, cho biết bài luận sẽ nói về điều gì và theo hướng nào.',
        },
        {
          question: 'Làm thế nào để đoạn văn của tôi không bị rời rạc?',
          answer:
            'Hãy sử dụng các từ và cụm từ nối. Ví dụ: để thêm ý, dùng "Furthermore", "In addition". Để chỉ sự tương phản, dùng "However", "On the other hand". Để chỉ kết quả, dùng "Therefore", "As a result". Chúng giúp tạo ra một dòng chảy mượt mà cho bài viết.',
        },
      ],
      quizzes: [
        {
          question: 'Phần nào của bài luận nên tóm tắt lại các ý chính và đưa ra nhận định cuối cùng?',
          options: [
            'Mở bài (Introduction)',
            'Đoạn thân bài đầu tiên',
            'Kết bài (Conclusion)',
            'Câu chủ đề (Topic sentence)',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Kết bài là nơi bạn nhắc lại câu luận đề bằng một cách diễn đạt khác, tóm tắt các luận điểm chính đã trình bày trong thân bài, và đưa ra một suy nghĩ, một lời kêu gọi hoặc một dự đoán cuối cùng.',
        },
      ],
    },
    {
      id: 'presentation-debate-skills',
      title: 'Kỹ Năng Thuyết Trình và Tranh Biện',
      description:
        'Trang bị các kỹ năng cần thiết để xây dựng một bài thuyết trình hấp dẫn và tham gia vào một cuộc tranh biện một cách tự tin và thuyết phục.',
      duration: '55 phút',
      difficulty: 'Nâng cao',
      realWorldApplications: ['Thuyết trình dự án', 'Tham gia câu lạc bộ tranh biện', 'Bảo vệ quan điểm cá nhân'],
      objectives: [
        'Học cách cấu trúc một bài thuyết trình (Mở đầu, Nội dung chính, Kết luận).',
        'Sử dụng ngôn ngữ cơ thể (giao tiếp bằng mắt, cử chỉ) một cách hiệu quả.',
        'Học các cụm từ dùng để giới thiệu, chuyển ý và kết thúc bài nói.',
        'Nắm vững các kỹ thuật cơ bản trong tranh biện: đưa ra luận điểm, phản bác và cung cấp bằng chứng.',
      ],
      faqs: [
        {
          question: 'Làm thế nào để bớt run khi thuyết trình?',
          answer:
            'Sự chuẩn bị kỹ lưỡng là chìa khóa. Hãy luyện tập nhiều lần, nói trước gương hoặc ghi âm lại. Nắm vững nội dung sẽ giúp bạn tự tin hơn. Trước khi nói, hãy hít thở sâu vài lần. Hãy nhớ rằng khán giả muốn bạn thành công!',
        },
        {
          question: 'Trong tranh biện, làm thế nào để phản bác ý kiến của người khác mà không gây mất lòng?',
          answer:
            'Hãy tập trung vào việc phản bác luận điểm, chứ không phải công kích cá nhân. Bắt đầu bằng cách công nhận ý kiến của họ một cách lịch sự, ví dụ: "I understand your point, however..." (Tôi hiểu quan điểm của bạn, tuy nhiên...) hoặc "That\'s an interesting perspective, but have you considered...?" (Đó là một góc nhìn thú vị, nhưng bạn đã xem xét đến... chưa?).',
        },
      ],
      quizzes: [
        {
          question: 'Trong một bài thuyết trình, "giao tiếp bằng mắt" (eye contact) có tác dụng gì?',
          options: [
            'Làm cho bạn trông đáng sợ hơn',
            'Giúp bạn nhớ bài tốt hơn',
            'Tạo sự kết nối và tin tưởng với khán giả',
            'Không có tác dụng gì đặc biệt',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Giao tiếp bằng mắt cho thấy sự tự tin và chân thành. Nó giúp thu hút sự chú ý của khán giả và làm cho họ cảm thấy được tôn trọng và tham gia vào bài nói của bạn.',
        },
      ],
    },
  ],
  features: [
    'Tình huống giao tiếp thực tế',
    'Hướng dẫn viết luận chi tiết',
    'Mẹo thuyết trình và tranh biện',
    'Bài tập thực hành và đóng vai',
  ],
  prerequisites: ['Tiếng Anh trình độ trung cấp (B1) trở lên'],
  objectives: [
    'Giao tiếp tự tin và lưu loát trong các tình huống hàng ngày.',
    'Viết được các bài luận có cấu trúc, mạch lạc và thuyết phục.',
    'Trình bày ý tưởng một cách rõ ràng và hấp dẫn trước đám đông.',
    'Phát triển tư duy phản biện và khả năng bảo vệ quan điểm bằng tiếng Anh.',
  ],
  careerOutcomes: [
    'Kỹ năng cần thiết để du học và làm việc trong môi trường quốc tế.',
    'Nền tảng cho các ngành nghề đòi hỏi sử dụng tiếng Anh thường xuyên như biên-phiên dịch, quan hệ quốc tế, du lịch, kinh doanh quốc tế.',
  ],
  tags: ['tiếng Anh', 'giao tiếp', 'viết luận', 'thuyết trình', 'tranh biện'],
};
