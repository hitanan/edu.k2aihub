import { ModuleData } from '@/types';

export const artHistoryAppreciationModuleData: ModuleData = {
  id: 'art-history-appreciation',
  title: 'Nghệ Thuật và Lịch Sử Nghệ Thuật',
  subtitle: 'Hành trình khám phá và cảm thụ các tác phẩm nghệ thuật tiêu biểu của Việt Nam và thế giới.',
  description:
    'Module này mở ra một cánh cửa đến với thế giới của hội họa, điêu khắc và kiến trúc, giúp bạn không chỉ nhận biết các tác phẩm nổi tiếng mà còn hiểu được bối cảnh ra đời, phong cách nghệ thuật và thông điệp mà nghệ sĩ muốn truyền tải.',
  image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&h=600&fit=crop',
  color: 'from-purple-400 to-pink-500',
  category: 'Nghệ thuật & Nhân văn',
  level: 'Trung học',
  duration: '9 tuần',
  lessons: [
    {
      id: 'nghe-thuat-phuc-hung',
      title: 'Nghệ Thuật Thời Kỳ Phục Hưng: Sự Trở Lại Của Con Người',
      description:
        'Tìm hiểu về cuộc cách mạng nghệ thuật diễn ra ở Ý từ thế kỷ 14 đến 16, với sự tỏa sáng của các thiên tài như Leonardo da Vinci, Michelangelo và Raphael.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Phân tích tranh "Mona Lisa"',
        'Tìm hiểu kiến trúc Phục Hưng',
        'Ảnh hưởng đến văn hóa đại chúng',
      ],
      objectives: [
        'Hiểu được bối cảnh lịch sử và tư tưởng nhân văn của thời kỳ Phục Hưng.',
        'Nhận biết các đặc điểm của nghệ thuật Phục Hưng: tính chân thực, sự cân đối, phối cảnh tuyến tính.',
        'Phân tích được các tác phẩm tiêu biểu như "Mona Lisa", "Bữa ăn tối cuối cùng" (da Vinci), tượng "David", và mái vòm nhà nguyện Sistine (Michelangelo).',
        'So sánh sự khác biệt giữa nghệ thuật Trung Cổ và nghệ thuật Phục Hưng.',
      ],
      faqs: [
        {
          question: 'Tại sao nụ cười của nàng Mona Lisa lại bí ẩn đến vậy?',
          answer:
            'Leonardo da Vinci đã sử dụng một kỹ thuật gọi là "sfumato" (tiếng Ý nghĩa là "khói"), tạo ra sự chuyển tiếp mềm mại giữa các màu sắc và tông độ, đặc biệt là ở khóe miệng và mắt. Điều này làm cho biểu cảm của nàng có vẻ thay đổi khi người xem nhìn vào các phần khác nhau của bức tranh, tạo ra cảm giác bí ẩn, khó nắm bắt.',
        },
        {
          question: 'Nghệ thuật Phục Hưng có gì khác biệt so với nghệ thuật Trung Cổ?',
          answer:
            'Nghệ thuật Trung Cổ chủ yếu phục vụ tôn giáo, hình ảnh thường phẳng, mang tính biểu tượng. Nghệ thuật Phục Hưng, dù vẫn có nhiều chủ đề tôn giáo, nhưng lại đặt con người vào vị trí trung tâm. Các nghệ sĩ Phục Hưng nghiên cứu giải phẫu, toán học để tái hiện thế giới và con người một cách chân thực, có chiều sâu và sống động hơn.',
        },
      ],
      quizzes: [
        {
          question: 'Ai là họa sĩ của tác phẩm "Bữa ăn tối cuối cùng" (The Last Supper)?',
          options: ['Michelangelo', 'Raphael', 'Donatello', 'Leonardo da Vinci'],
          correctAnswerIndex: 3,
          explanation:
            'Leonardo da Vinci đã vẽ bức bích họa nổi tiếng này trên tường của một tu viện ở Milan, Ý. Tác phẩm nổi tiếng với việc khắc họa tâm lý phức tạp của các tông đồ ngay sau khi Chúa Jesus tuyên bố một trong số họ sẽ phản bội Ngài.',
        },
      ],
    },
    {
      id: 'nghe-thuat-an-tuong',
      title: 'Trường Phái Ấn Tượng: Khoảnh Khắc và Ánh Sáng',
      description:
        'Khám phá cuộc cách mạng của các họa sĩ Ấn tượng như Monet, Renoir, Degas, những người đã từ bỏ xưởng vẽ để ra ngoài trời ghi lại những khoảnh khắc thoáng qua của cuộc sống hiện đại.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nhiếp ảnh', 'Thiết kế', 'Cảm nhận màu sắc'],
      objectives: [
        'Hiểu bối cảnh ra đời của trường phái Ấn tượng và lý do tại sao nó bị coi là "nổi loạn" vào thời điểm đó.',
        'Nhận biết các đặc điểm của tranh Ấn tượng: nét vẽ nhanh, rõ ràng; tập trung vào ánh sáng và màu sắc; chủ đề đời thường.',
        'Phân tích các tác phẩm nổi tiếng như "Ấn tượng, mặt trời mọc" (Monet), "Vũ hội ở quán Moulin de la Galette" (Renoir).',
        'Hiểu được sự ảnh hưởng của nhiếp ảnh đến hội họa Ấn tượng.',
      ],
      faqs: [
        {
          question: 'Tại sao trường phái này lại có tên là "Ấn tượng"?',
          answer:
            'Cái tên này ban đầu mang ý nghĩa chế giễu. Năm 1874, khi Claude Monet trưng bày bức tranh "Ấn tượng, mặt trời mọc" (Impression, soleil levant), một nhà phê bình đã dùng từ "ấn tượng" để mỉa mai rằng bức tranh trông còn dang dở, chỉ là một bản phác thảo. Tuy nhiên, các họa sĩ đã chấp nhận và sử dụng chính cái tên này cho phong trào của mình.',
        },
        {
          question: 'Các họa sĩ Ấn tượng có vẽ trong xưởng vẽ không?',
          answer:
            'Họ là những người tiên phong trong việc vẽ ngoài trời (en plein air). Họ muốn nắm bắt ánh sáng và màu sắc thay đổi liên tục của tự nhiên một cách trực tiếp, thay vì vẽ theo trí nhớ hoặc trong điều kiện ánh sáng nhân tạo của xưởng vẽ.',
        },
      ],
      quizzes: [
        {
          question: 'Họa sĩ nào được coi là người dẫn đầu và là biểu tượng của trường phái Ấn tượng?',
          options: ['Vincent van Gogh', 'Paul Cézanne', 'Claude Monet', 'Édouard Manet'],
          correctAnswerIndex: 2,
          explanation:
            'Claude Monet là một trong những người sáng lập và là người kiên định nhất với các nguyên tắc của hội họa Ấn tượng trong suốt sự nghiệp của mình. Loạt tranh "Hoa súng" của ông là một trong những thành tựu đỉnh cao của trường phái này.',
        },
      ],
    },
    {
      id: 'my-thuat-hien-dai-viet-nam',
      title: 'Mỹ Thuật Hiện Đại Việt Nam: Sự Giao Thoa Đông - Tây',
      description:
        'Tìm hiểu về sự hình thành và phát triển của nền mỹ thuật hiện đại Việt Nam đầu thế kỷ 20, đặc biệt là vai trò của trường Cao đẳng Mỹ thuật Đông Dương và sự kết hợp độc đáo giữa kỹ thuật phương Tây và tâm hồn Việt.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Tham quan bảo tàng mỹ thuật', 'Tìm hiểu tranh sơn mài', 'Định giá nghệ thuật'],
      objectives: [
        'Hiểu vai trò của trường Cao đẳng Mỹ thuật Đông Dương trong việc đào tạo thế hệ họa sĩ đầu tiên của Việt Nam.',
        'Nhận biết các chất liệu hội họa độc đáo như sơn mài, lụa.',
        'Phân tích sự kết hợp giữa kỹ thuật tạo hình phương Tây và các chủ đề, màu sắc, tinh thần Á Đông trong tranh.',
        'Làm quen với các danh họa tiêu biểu: Nguyễn Gia Trí, Tô Ngọc Vân, Nguyễn Phan Chánh, Bùi Xuân Phái.',
      ],
      faqs: [
        {
          question: 'Tranh sơn mài Việt Nam có gì độc đáo?',
          answer:
            'Các họa sĩ Việt Nam đã biến kỹ thuật sơn mài thủ công truyền thống (dùng để trang trí đồ vật) thành một chất liệu hội họa đỉnh cao. Họ đã sử dụng các kỹ thuật mài, rắc vỏ trứng, vỏ trai... để tạo ra những hiệu ứng màu sắc và ánh sáng vô cùng phong phú, có chiều sâu mà sơn dầu khó đạt được. Nguyễn Gia Trí được coi là người có công lớn nhất trong việc này.',
        },
        {
          question: 'Tại sao Bùi Xuân Phái lại nổi tiếng với việc vẽ "Phố Phái"?',
          answer:
            'Bùi Xuân Phái có một tình yêu đặc biệt với Hà Nội. Ông đã vẽ hàng trăm bức tranh về các góc phố cổ Hà Nội với những mái nhà rêu phong, những bức tường vàng, những hàng cây... tạo nên một phong cách rất riêng, đầy hoài niệm và lãng mạn. "Phố Phái" đã trở thành một thuật ngữ để chỉ những bức tranh vẽ phố của ông.',
        },
      ],
      quizzes: [
        {
          question: 'Họa sĩ nào được mệnh danh là "Vua sơn mài Việt Nam"?',
          options: ['Tô Ngọc Vân', 'Bùi Xuân Phái', 'Nguyễn Gia Trí', 'Nguyễn Sáng'],
          correctAnswerIndex: 2,
          explanation:
            'Nguyễn Gia Trí là người đã đưa nghệ thuật sơn mài từ trang trí thủ công lên tầm hội họa bác học với những tác phẩm hoành tráng, lộng lẫy, đánh dấu một cột mốc quan trọng cho mỹ thuật hiện đại Việt Nam.',
        },
      ],
    },
  ],
  features: [
    'Khám phá các trường phái nghệ thuật lớn',
    'Phân tích các tác phẩm kinh điển',
    'Tìm hiểu về mỹ thuật Việt Nam',
    'Thư viện hình ảnh chất lượng cao',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng, chỉ cần sự tò mò và yêu thích cái đẹp'],
  objectives: [
    'Phát triển khả năng cảm thụ và phân tích nghệ thuật.',
    'Nắm được dòng chảy của lịch sử nghệ thuật thế giới và Việt Nam.',
    'Làm giàu thêm đời sống tinh thần và vốn văn hóa.',
    'Khuyến khích tư duy sáng tạo và góc nhìn đa chiều.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành thiết kế, kiến trúc, giám tuyển nghệ thuật (curator), lịch sử nghệ thuật, marketing.',
    'Nâng cao thẩm mỹ và tư duy sáng tạo, hữu ích cho mọi ngành nghề.',
  ],
  tags: ['nghệ thuật', 'lịch sử nghệ thuật', 'hội họa', 'phục hưng', 'ấn tượng', 'mỹ thuật Việt Nam'],
};
