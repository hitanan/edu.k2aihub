import { ModuleData } from '@/types';

export const modernVietnameseHistoryModuleData: ModuleData = {
  id: 'modern-vietnamese-history',
  title: 'Lịch Sử Việt Nam Hiện Đại',
  subtitle: 'Phân tích các sự kiện, nhân vật và bài học từ lịch sử Việt Nam thế kỷ 20 đến nay.',
  description:
    'Module này không chỉ trình bày các sự kiện lịch sử quan trọng từ thời Pháp thuộc đến giai đoạn Đổi Mới, mà còn tập trung vào việc phân tích nguyên nhân, kết quả và những bài học kinh nghiệm sâu sắc, giúp người học kết nối quá khứ với hiện tại.',
  image: 'https://images.unsplash.com/photo-1629018343513-6c358758c859?w=1200&h=600&fit=crop',
  color: 'from-yellow-600 to-red-600',
  category: 'Lịch sử & Xã hội',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'phap-thuoc-va-phong-trao-dau-tranh',
      title: 'Thời Kỳ Pháp Thuộc và Các Phong Trào Đấu Tranh (1858-1945)',
      description:
        'Nghiên cứu bối cảnh Việt Nam rơi vào tay Pháp, chính sách cai trị của thực dân và các phong trào yêu nước tiêu biểu trước khi Đảng Cộng sản ra đời.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Hiểu nguồn gốc mâu thuẫn dân tộc', 'Phân tích các hình thức đấu tranh'],
      objectives: [
        'Hiểu được bối cảnh lịch sử và nguyên nhân Việt Nam trở thành thuộc địa của Pháp.',
        'Phân tích các chính sách khai thác thuộc địa của Pháp trên các lĩnh vực kinh tế, văn hóa, xã hội.',
        'Trình bày được các phong trào đấu tranh tiêu biểu như phong trào Cần Vương, khởi nghĩa Yên Thế.',
        'Đánh giá được ý nghĩa và hạn chế của các phong trào yêu nước cuối thế kỷ 19, đầu thế kỷ 20.',
      ],
      faqs: [
        {
          question: 'Tại sao các phong trào yêu nước cuối thế kỷ 19 lại thất bại?',
          answer:
            'Các phong trào này dù rất anh dũng nhưng chủ yếu thất bại do thiếu một đường lối đấu tranh đúng đắn, thiếu một tổ chức lãnh đạo thống nhất trên toàn quốc, và còn mang nặng tư tưởng phong kiến. Lực lượng và vũ khí cũng chênh lệch lớn so với quân đội Pháp.',
        },
        {
          question: 'Chính sách "chia để trị" của Pháp được thể hiện như thế nào?',
          answer:
            'Pháp chia Việt Nam thành 3 kỳ (Bắc Kỳ, Trung Kỳ, Nam Kỳ) với các chế độ cai trị khác nhau, đồng thời chia rẽ các dân tộc, tôn giáo, giai cấp nhằm làm suy yếu sức mạnh đoàn kết của dân tộc Việt Nam, từ đó dễ dàng cai trị hơn.',
        },
      ],
      quizzes: [
        {
          question: 'Phong trào nào sau đây do Hoàng Hoa Thám lãnh đạo?',
          options: ['Phong trào Cần Vương', 'Khởi nghĩa Yên Thế', 'Phong trào Đông Du', 'Khởi nghĩa Yên Bái'],
          correctAnswerIndex: 1,
          explanation:
            'Hoàng Hoa Thám, được mệnh danh là "Hùm thiêng Yên Thế", đã lãnh đạo cuộc khởi nghĩa nông dân lớn nhất và kéo dài nhất (gần 30 năm) chống lại thực dân Pháp ở vùng núi Yên Thế (Bắc Giang).',
        },
      ],
    },
    {
      id: 'cach-mang-thang-tam-va-khai-sinh-vndcch',
      title: 'Cách Mạng Tháng Tám và Sự Ra Đời của Nước VNDCCH (1945)',
      description:
        'Phân tích bối cảnh "ngàn năm có một", diễn biến, kết quả và ý nghĩa lịch sử của cuộc Cách mạng Tháng Tám năm 1945.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Bài học về chớp thời cơ', 'Sức mạnh của đại đoàn kết dân tộc'],
      objectives: [
        'Phân tích được tình hình thế giới và trong nước dẫn đến thời cơ của Cách mạng Tháng Tám.',
        'Trình bày được diễn biến chính của cuộc Tổng khởi nghĩa giành chính quyền.',
        'Hiểu được ý nghĩa lịch sử của sự ra đời nước Việt Nam Dân chủ Cộng hòa.',
        'Phân tích vai trò của lãnh tụ Hồ Chí Minh và Đảng Cộng sản trong việc lãnh đạo cách mạng.',
      ],
      faqs: [
        {
          question: 'Tại sao gọi thời cơ của Cách mạng Tháng Tám là "ngàn năm có một"?',
          answer:
            'Thời cơ này xuất hiện khi Nhật Bản (kẻ thù chính, trực tiếp của cách mạng lúc đó) đã đầu hàng Đồng minh, trong khi quân Pháp chưa kịp quay trở lại Đông Dương. Lực lượng trung gian hoang mang, dao động. Đây là khoảng trống quyền lực vô cùng hiếm có, nếu không chớp lấy sẽ không có cơ hội lần hai.',
        },
        {
          question: 'Ý nghĩa quan trọng nhất của Cách mạng Tháng Tám là gì?',
          answer:
            'Ý nghĩa quan trọng nhất là đã đập tan xiềng xích nô lệ của Pháp - Nhật, lật đổ chế độ phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa, đưa nhân dân từ thân phận nô lệ trở thành người làm chủ đất nước. Nó mở ra một kỷ nguyên mới: kỷ nguyên độc lập, tự do.',
        },
      ],
      quizzes: [
        {
          question: 'Ngày 2/9/1945 đã diễn ra sự kiện lịch sử trọng đại nào?',
          options: [
            'Đảng Cộng sản Việt Nam ra đời',
            'Khởi nghĩa giành chính quyền tại Hà Nội',
            'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập',
            'Chiến dịch Điện Biên Phủ bắt đầu',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Ngày 2/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
        },
      ],
    },
    {
      id: 'cong-cuoc-doi-moi',
      title: 'Công Cuộc Đổi Mới (từ 1986 đến nay)',
      description:
        'Tìm hiểu bối cảnh, nội dung và những thành tựu to lớn của công cuộc Đổi Mới do Đảng khởi xướng, đưa Việt Nam từ một nước nghèo nàn, lạc hậu trở thành một nền kinh tế năng động.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Hiểu về kinh tế thị trường định hướng XHCN',
        'Phân tích sự phát triển của Việt Nam hiện đại',
      ],
      objectives: [
        'Hiểu được nguyên nhân và sự cần thiết phải tiến hành công cuộc Đổi Mới.',
        'Trình bày được những nội dung cơ bản của đường lối Đổi Mới, đặc biệt là về kinh tế.',
        'Phân tích những thành tựu và thách thức của Việt Nam sau hơn 35 năm Đổi Mới.',
        'Liên hệ các chính sách Đổi Mới với sự phát triển của đất nước trong bối cảnh toàn cầu hóa.',
      ],
      faqs: [
        {
          question: 'Tại sao Việt Nam phải tiến hành Đổi Mới vào năm 1986?',
          answer:
            'Trước năm 1986, Việt Nam lâm vào một cuộc khủng hoảng kinh tế - xã hội trầm trọng. Mô hình kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp tỏ ra không hiệu quả, sản xuất trì trệ, đời sống nhân dân vô cùng khó khăn. Đổi Mới là một yêu cầu cấp thiết để thoát khỏi khủng hoảng và phát triển đất nước.',
        },
        {
          question: 'Đặc điểm cốt lõi của kinh tế Việt Nam thời kỳ Đổi Mới là gì?',
          answer:
            'Cốt lõi là chuyển từ kinh tế kế hoạch hóa tập trung sang nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước, theo định hướng xã hội chủ nghĩa. Chấp nhận sự tồn tại của nhiều hình thức sở hữu và thành phần kinh tế (nhà nước, tập thể, tư nhân, có vốn đầu tư nước ngoài...).',
        },
      ],
      quizzes: [
        {
          question: 'Công cuộc Đổi Mới ở Việt Nam được chính thức bắt đầu từ Đại hội Đảng lần thứ mấy?',
          options: ['Đại hội IV (1976)', 'Đại hội V (1982)', 'Đại hội VI (1986)', 'Đại hội VII (1991)'],
          correctAnswerIndex: 2,
          explanation:
            'Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam (tháng 12/1986) được xem là dấu mốc lịch sử, chính thức khởi xướng đường lối Đổi Mới toàn diện đất nước.',
        },
      ],
    },
  ],
  features: [
    'Phân tích sâu sắc các giai đoạn lịch sử',
    'Kết nối lịch sử với các vấn đề đương đại',
    'Tập trung vào bài học kinh nghiệm',
    'Câu hỏi thảo luận và tư duy phản biện',
  ],
  prerequisites: ['Quan tâm đến lịch sử và các vấn đề xã hội Việt Nam'],
  objectives: [
    'Nắm vững các sự kiện và giai đoạn chính của lịch sử Việt Nam hiện đại.',
    'Phát triển khả năng phân tích, đánh giá các sự kiện lịch sử một cách khách quan.',
    'Rút ra những bài học kinh nghiệm từ quá khứ để áp dụng vào hiện tại.',
    'Bồi dưỡng lòng yêu nước và tự hào dân tộc.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành khoa học xã hội và nhân văn, luật, báo chí, quan hệ quốc tế.',
    'Tư duy phân tích lịch sử hữu ích cho các nhà hoạch định chính sách, nhà quản lý.',
  ],
  tags: ['lịch sử Việt Nam', 'hiện đại', 'cách mạng', 'đổi mới'],
};
