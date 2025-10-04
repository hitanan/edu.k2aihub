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
        {
          question: 'Phong trào Cần Vương là gì?',
          answer:
            'Là phong trào yêu nước chống Pháp theo ý thức hệ phong kiến, do vua Hàm Nghi và Tôn Thất Thuyết khởi xướng sau sự kiện kinh thành Huế thất thủ năm 1885. Phong trào kêu gọi các văn thân, sĩ phu và nhân dân đứng lên giúp vua cứu nước.',
        },
        {
          question: 'Cuộc khai thác thuộc địa lần thứ nhất của Pháp đã tác động đến xã hội Việt Nam như thế nào?',
          answer:
            'Nó làm xã hội Việt Nam có sự phân hóa sâu sắc. Bên cạnh các giai cấp cũ (địa chủ, nông dân), các giai cấp và tầng lớp mới ra đời như công nhân, tư sản và tiểu tư sản, tạo ra những mâu thuẫn xã hội mới.',
        },
        {
          question: 'Phan Bội Châu và Phan Châu Trinh có chủ trương cứu nước khác nhau như thế nào?',
          answer:
            'Phan Bội Châu chủ trương dùng bạo động vũ trang để giành độc lập, dựa vào sự giúp đỡ của nước ngoài (Nhật Bản). Ngược lại, Phan Châu Trinh chủ trương cải cách, nâng cao dân trí, dân quyền, dựa vào Pháp để chống lại triều đình phong kiến hủ bại, rồi đi đến độc lập.',
        },
        {
          question: 'Đô thị Việt Nam đầu thế kỷ 20 có gì thay đổi?',
          answer:
            'Các đô thị như Hà Nội, Sài Gòn, Hải Phòng được mở rộng và xây dựng theo lối kiến trúc phương Tây. Nhiều công trình, cơ sở hạ tầng mới xuất hiện, nhưng đồng thời cũng nảy sinh các vấn đề xã hội phức tạp.',
        },
        {
          question: 'Vai trò của Nguyễn Ái Quốc trong giai đoạn này là gì?',
          answer:
            'Trong khi các phong trào trong nước gặp bế tắc, Nguyễn Ái Quốc đã ra đi tìm đường cứu nước mới. Người đã tiếp cận với chủ nghĩa Mác-Lênin và tìm ra con đường cứu nước theo cách mạng vô sản, chuẩn bị cho sự ra đời của Đảng Cộng sản Việt Nam.',
        },
        {
          question: 'Khởi nghĩa Yên Thế có điểm gì khác biệt so với phong trào Cần Vương?',
          answer:
            'Khởi nghĩa Yên Thế là một cuộc khởi nghĩa nông dân tự phát, mang tính chất tự vệ, bảo vệ cuộc sống. Trong khi đó, phong trào Cần Vương là phong trào của các văn thân, sĩ phu yêu nước hưởng ứng chiếu của vua, có mục tiêu rõ ràng là "phù vua, kháng Pháp".',
        },
        {
          question: 'Chính sách văn hóa, giáo dục của Pháp có mục đích gì?',
          answer:
            'Bên cạnh việc mở một số trường học để đào tạo tay sai, chính sách này còn nhằm mục đích thực hiện "nô dịch hóa" về văn hóa, truyền bá lối sống thực dụng, làm xói mòn các giá trị truyền thống của dân tộc.',
        },
        {
          question: 'Tầng lớp tư sản dân tộc Việt Nam ra đời như thế nào?',
          answer:
            'Tầng lớp tư sản dân tộc ra đời từ các nhà thầu khoán, chủ xí nghiệp, xưởng thủ công, chủ hãng buôn... trong cuộc khai thác thuộc địa của Pháp. Họ có tinh thần dân tộc nhưng thế lực kinh tế yếu, nên có thái độ cải lương, không kiên quyết.',
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
        {
          question: 'Mặt trận Việt Minh có vai trò như thế nào trong Cách mạng Tháng Tám?',
          answer:
            'Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh Hội) được thành lập năm 1941, có vai trò tập hợp, đoàn kết mọi tầng lớp nhân dân yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc, tạo thành một lực lượng chính trị hùng hậu cho cuộc Tổng khởi nghĩa.',
        },
        {
          question: 'Cuộc Tổng khởi nghĩa đã diễn ra như thế nào?',
          answer:
            'Cuộc Tổng khởi nghĩa diễn ra nhanh chóng trong khoảng 15 ngày (từ 14/8 đến 28/8/1945), bắt đầu từ các vùng nông thôn, sau đó lan về các đô thị. Hà Nội, Huế, Sài Gòn là ba đô thị giành được chính quyền cuối cùng, có ý nghĩa quyết định.',
        },
        {
          question: 'Tuyên ngôn Độc lập có những giá trị cốt lõi nào?',
          answer:
            'Tuyên ngôn Độc lập không chỉ khẳng định quyền tự do, độc lập của dân tộc Việt Nam mà còn trích dẫn Tuyên ngôn Độc lập của Mỹ và Tuyên ngôn Nhân quyền và Dân quyền của Pháp, đề cao quyền con người, quyền bình đẳng của các dân tộc trên thế giới.',
        },
        {
          question: 'Những khó khăn của nước Việt Nam Dân chủ Cộng hòa sau khi thành lập là gì?',
          answer:
            'Nước Việt Nam non trẻ phải đối mặt với vô vàn khó khăn, được ví như "ngàn cân treo sợi tóc": giặc ngoại xâm (quân Tưởng, quân Anh, quân Pháp), giặc đói (nạn đói năm 1945 làm hơn 2 triệu người chết), và giặc dốt (hơn 90% dân số mù chữ).',
        },
        {
          question: 'Tại sao nói Cách mạng Tháng Tám mang tính nhân dân sâu sắc?',
          answer:
            'Vì đây là cuộc cách mạng của toàn dân, do nhân dân và vì nhân dân. Lực lượng tham gia là đông đảo quần chúng từ công nhân, nông dân, tiểu tư sản đến cả tư sản dân tộc và một bộ phận địa chủ yêu nước, dưới sự lãnh đạo của Đảng.',
        },
        {
          question: 'Bài học kinh nghiệm lớn nhất rút ra từ Cách mạng Tháng Tám là gì?',
          answer:
            'Bài học lớn nhất là về việc xây dựng lực lượng chính trị của quần chúng, kết hợp với lực lượng vũ trang; và bài học về việc nhận định, chớp lấy thời cơ, dám đưa ra quyết định táo bạo để khởi nghĩa giành chính quyền.',
        },
        {
          question: 'Chính quyền cách mạng đã giải quyết nạn đói như thế nào?',
          answer:
            'Chính quyền đã phát động phong trào "Nhường cơm sẻ áo", "Hũ gạo cứu đói" và tổ chức "Ngày đồng tâm". Về lâu dài, chính phủ kêu gọi "Tăng gia sản xuất! Tăng gia sản xuất ngay! Tăng gia sản xuất nữa!", coi đây là mặt trận chính.',
        },
        {
          question: 'Phong trào "Bình dân học vụ" có mục đích gì?',
          answer:
            'Đây là phong trào xóa nạn mù chữ (diệt giặc dốt) do Chủ tịch Hồ Chí Minh phát động. Phong trào đã huy động mọi người biết chữ dạy cho người chưa biết chữ, góp phần nhanh chóng nâng cao mặt bằng dân trí cho toàn xã hội.',
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
        {
          question: 'Chính sách "mở cửa" và hội nhập quốc tế có ý nghĩa gì?',
          answer:
            'Chính sách này đã giúp Việt Nam phá vỡ thế bị bao vây, cấm vận, bình thường hóa quan hệ với các nước lớn như Trung Quốc, Mỹ và gia nhập các tổ chức khu vực và quốc tế như ASEAN, WTO. Điều này đã thu hút vốn đầu tư nước ngoài (FDI), mở rộng thị trường và tiếp thu khoa học công nghệ tiên tiến.',
        },
        {
          question: 'Thành tựu nổi bật nhất của công cuộc Đổi Mới là gì?',
          answer:
            'Thành tựu nổi bật nhất là đưa đất nước ra khỏi khủng hoảng, tăng trưởng kinh tế nhanh và bền vững, đời sống vật chất và tinh thần của nhân dân được cải thiện rõ rệt. Việt Nam từ một nước nhận viện trợ đã trở thành một nước xuất khẩu (đặc biệt là nông sản như gạo, cà phê).',
        },
        {
          question: 'Bên cạnh thành tựu, công cuộc Đổi Mới còn đối mặt với những thách thức nào?',
          answer:
            'Những thách thức chính bao gồm: nguy cơ tụt hậu xa hơn về kinh tế, chệch hướng xã hội chủ nghĩa, nạn tham nhũng, lãng phí, sự phân hóa giàu nghèo ngày càng tăng, và các vấn đề về môi trường.',
        },
        {
          question:
            'Kinh tế thị trường định hướng xã hội chủ nghĩa có gì khác so với kinh tế thị trường tư bản chủ nghĩa?',
          answer:
            'Điểm khác biệt cơ bản là mục tiêu phát triển. Kinh tế thị trường định hướng XHCN ở Việt Nam nhằm mục tiêu "dân giàu, nước mạnh, dân chủ, công bằng, văn minh", gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội, dưới sự lãnh đạo của Đảng Cộng sản và sự quản lý của Nhà nước pháp quyền XHCN.',
        },
        {
          question: 'Vai trò của kinh tế nhà nước trong thời kỳ Đổi Mới là gì?',
          answer:
            'Kinh tế nhà nước được xác định giữ vai trò chủ đạo, là công cụ vật chất quan trọng để Nhà nước định hướng và điều tiết nền kinh tế, ổn định kinh tế vĩ mô và thực hiện các chính sách xã hội.',
        },
        {
          question: 'Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) có tác động như thế nào?',
          answer:
            'Việc gia nhập WTO năm 2007 là một cột mốc quan trọng, khẳng định sự hội nhập sâu rộng của Việt Nam vào nền kinh tế toàn cầu. Nó mang lại nhiều cơ hội về thị trường, đầu tư nhưng cũng đặt ra những thách thức cạnh tranh gay gắt hơn cho các doanh nghiệp trong nước.',
        },
        {
          question: 'Đổi mới hệ thống chính trị được thực hiện như thế nào?',
          answer:
            'Đổi mới hệ thống chính trị được tiến hành đồng bộ với đổi mới kinh tế, tập trung vào việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa, cải cách hành chính, phát huy dân chủ và tăng cường vai trò lãnh đạo của Đảng.',
        },
        {
          question: 'Tác động của Đổi Mới đến văn hóa, xã hội Việt Nam là gì?',
          answer:
            'Đổi Mới tạo điều kiện cho sự giao lưu, tiếp biến văn hóa, làm đời sống tinh thần phong phú hơn. Tuy nhiên, nó cũng đặt ra thách thức trong việc giữ gìn bản sắc văn hóa dân tộc trước sự xâm nhập của các sản phẩm văn hóa ngoại lai.',
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
