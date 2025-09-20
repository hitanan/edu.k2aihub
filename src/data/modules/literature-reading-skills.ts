import { ModuleData } from '@/types';

export const literatureReadingSkillsModuleData: ModuleData = {
  id: 'literature-reading-skills',
  title: 'Văn Học và Kỹ Năng Đọc Hiểu',
  subtitle: 'Phân tích sâu tác phẩm văn học và phát triển tư duy phản biện thông qua việc đọc.',
  description:
    'Module này giúp học sinh tiếp cận các tác phẩm văn học kinh điển và hiện đại một cách sâu sắc, không chỉ để cảm thụ cái hay, cái đẹp mà còn để rèn luyện kỹ năng phân tích, bình luận, và liên hệ với cuộc sống.',
  image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1200&h=600&fit=crop',
  color: 'from-orange-500 to-amber-500',
  category: 'Ngôn ngữ & Nhân văn',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'phan-tich-tho-hien-dai',
      title: 'Phân Tích Thơ Việt Nam Hiện Đại',
      description:
        'Hướng dẫn cách tiếp cận và phân tích các bài thơ trong chương trình THPT, tập trung vào hình ảnh, ngôn từ, giọng điệu và thông điệp của tác giả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Cảm thụ nghệ thuật', 'Kỹ năng viết', 'Tư duy biểu tượng'],
      objectives: [
        'Nắm vững các yếu tố của một bài thơ: hình ảnh, tứ thơ, nhịp điệu, ngôn từ, biện pháp tu từ.',
        'Học cách phân tích một bài thơ theo đặc trưng thể loại.',
        'Cảm nhận và lý giải được những thông điệp sâu sắc mà tác giả gửi gắm.',
        'Phân tích các tác phẩm tiêu biểu như "Tây Tiến" (Quang Dũng), "Sóng" (Xuân Quỳnh).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để tìm ra "thông điệp" của một bài thơ?',
          answer:
            'Thông điệp thường không được nói ra trực tiếp. Hãy chú ý đến các hình ảnh, biểu tượng được lặp đi lặp lại, sự thay đổi trong cảm xúc và giọng điệu của nhân vật trữ tình. Hãy tự hỏi: Tác giả muốn nói lên điều gì về tình yêu, cuộc sống, hay đất nước qua những hình ảnh đó?',
        },
        {
          question: '"Tứ thơ" là gì?',
          answer:
            'Tứ thơ là ý chính, là linh hồn của bài thơ, là cái "cớ" để tác giả bộc lộ cảm xúc và suy tưởng. Ví dụ, trong bài "Sóng" của Xuân Quỳnh, hình tượng "sóng" chính là tứ thơ, được dùng để diễn tả những cung bậc phức tạp của tình yêu.',
        },
      ],
      quizzes: [
        {
          question: 'Hình ảnh "con thuyền" và "bến" trong thơ ca truyền thống thường là biểu tượng cho điều gì?',
          options: [
            'Người nông dân và cánh đồng',
            'Người chinh phụ và kẻ chinh phu',
            'Người con gái và người con trai trong tình yêu',
            'Người đi xa và người ở lại chờ đợi',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Hình ảnh "thuyền" thường tượng trưng cho người con trai, người đi xa vì sự nghiệp, còn "bến" tượng trưng cho người con gái, người ở lại, là bến đỗ bình yên, thủy chung chờ đợi.',
        },
      ],
    },
    {
      id: 'doc-hieu-van-ban-nghi-luan',
      title: 'Kỹ Năng Đọc Hiểu Văn Bản Nghị Luận',
      description:
        'Rèn luyện kỹ năng đọc-hiểu các văn bản nghị luận xã hội và nghị luận văn học, tập trung vào việc xác định luận điểm, luận cứ và các thao tác lập luận.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Đọc báo chí', 'Phân tích diễn văn', 'Viết bài luận'],
      objectives: [
        'Phân biệt được luận điểm, luận cứ và lập luận trong một văn bản.',
        'Nhận diện các thao tác lập luận chính: giải thích, phân tích, chứng minh, bình luận, so sánh.',
        'Phát hiện và phân tích các lỗi ngụy biện trong lập luận.',
        'Tóm tắt và đánh giá được quan điểm của tác giả.',
      ],
      faqs: [
        {
          question: 'Luận điểm và luận cứ khác nhau như thế nào?',
          answer:
            'Luận điểm là ý kiến, quan điểm chính mà người viết muốn trình bày. Luận cứ là những lý lẽ, dẫn chứng (số liệu, sự kiện, trích dẫn) được đưa ra để làm sáng tỏ và thuyết phục cho luận điểm đó. Luận điểm trả lời câu hỏi "Cái gì?", còn luận cứ trả lời câu hỏi "Tại sao?" và "Như thế nào?".',
        },
        {
          question: 'Ngụy biện "tấn công cá nhân" (ad hominem) là gì?',
          answer:
            'Đó là một lỗi lập luận, thay vì bác bỏ luận điểm của đối phương, người nói lại quay sang công kích, chỉ trích cá nhân, ngoại hình, hoặc hoàn cảnh của họ. Ví dụ: "Ý kiến của anh về kinh tế sai bét, vì anh có giàu đâu!".',
        },
      ],
      quizzes: [
        {
          question:
            'Khi một bài viết đưa ra các số liệu, thống kê, trích dẫn từ chuyên gia, tác giả đang sử dụng loại luận cứ nào?',
          options: ['Luận cứ tình cảm', 'Luận cứ logic', 'Luận cứ thực tế (dẫn chứng)', 'Luận cứ giả định'],
          correctAnswerIndex: 2,
          explanation:
            'Đây là các dẫn chứng thực tế, khách quan được sử dụng để tăng tính thuyết phục cho luận điểm, làm cho bài viết trở nên đáng tin cậy hơn.',
        },
      ],
    },
    {
      id: 'phan-tich-nhan-vat-truyen-ngan',
      title: 'Phân Tích Nhân Vật Trong Truyện Ngắn Hiện Đại',
      description:
        'Học cách phân tích sâu một nhân vật văn học thông qua hành động, lời nói, nội tâm và mối quan hệ với các nhân vật khác.',
      duration: '60 phút',
      difficulty: 'Nâng cao',
      realWorldApplications: ['Thấu hiểu con người', 'Phân tích tâm lý', 'Kể chuyện'],
      objectives: [
        'Phân tích nhân vật trên các phương diện: lai lịch, ngoại hình, nội tâm, hành động, ngôn ngữ.',
        'Hiểu được nghệ thuật xây dựng nhân vật của nhà văn (xây dựng trực tiếp, gián tiếp).',
        'Phân tích mối quan hệ giữa nhân vật và hoàn cảnh xã hội.',
        'Phân tích các nhân vật phức tạp như Chí Phèo, Thị Nở (Nam Cao), người vợ nhặt (Kim Lân).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để phân tích nội tâm nhân vật?',
          answer:
            'Hãy chú ý đến những đoạn văn miêu tả suy nghĩ, cảm xúc, dằn vặt, hoặc những giấc mơ của nhân vật. Đôi khi, nội tâm được thể hiện qua độc thoại (nhân vật tự nói với mình) hoặc độc thoại nội tâm (dòng suy nghĩ không cất thành lời). Cảnh vật bên ngoài cũng có thể là tấm gương phản chiếu tâm trạng nhân vật.',
        },
        {
          question: 'Chi tiết nghệ thuật là gì và vai trò của nó trong việc khắc họa nhân vật?',
          answer:
            'Chi tiết nghệ thuật là những chi tiết nhỏ nhưng đắt giá, có sức gợi lớn, góp phần thể hiện tính cách hoặc số phận nhân vật. Ví dụ, chi tiết "bát cháo hành" của Thị Nở trong truyện "Chí Phèo" không chỉ là một món ăn, nó là biểu tượng của tình người, của sự chăm sóc giản dị đã đánh thức phần người trong Chí Phèo.',
        },
      ],
      quizzes: [
        {
          question:
            'Trong tác phẩm "Vợ nhặt" của Kim Lân, hình ảnh "lá cờ đỏ sao vàng bay phấp phới" ở cuối truyện có ý nghĩa gì?',
          options: [
            'Báo hiệu một trận đánh sắp diễn ra',
            'Chỉ là một chi tiết tả thực về cảnh vật',
            'Gợi ra một tương lai tươi sáng, một con đường cách mạng cho các nhân vật',
            'Tượng trưng cho sự tuyệt vọng cùng cực',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Hình ảnh lá cờ đỏ và đoàn người đi phá kho thóc Nhật ở cuối truyện là một chi tiết mang tính biểu tượng, mở ra một lối thoát và hy vọng cho các nhân vật đang trong cảnh đói khổ, gợi ra con đường đi theo cách mạng để thay đổi số phận.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn phân tích thơ, truyện ngắn',
    'Kỹ năng đọc hiểu văn bản nghị luận',
    'Phân tích nhân vật và chi tiết nghệ thuật',
    'Liên hệ văn học và cuộc sống',
  ],
  prerequisites: ['Khả năng đọc và viết tiếng Việt cơ bản'],
  objectives: [
    'Nâng cao năng lực cảm thụ văn học.',
    'Rèn luyện kỹ năng đọc hiểu sâu và tư duy phản biện.',
    'Phát triển kỹ năng viết bài nghị luận văn học và xã hội.',
    'Bồi dưỡng tâm hồn, nhân cách qua các giá trị nhân văn trong tác phẩm.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành báo chí, xuất bản, sư phạm, viết lách, marketing nội dung.',
    'Kỹ năng phân tích và giao tiếp cần thiết cho nhiều lĩnh vực.',
  ],
  tags: ['văn học', 'đọc hiểu', 'nghị luận', 'phân tích tác phẩm'],
};
