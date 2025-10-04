import { ModuleData } from '@/types';

export const entrepreneurshipAndInnovationModuleData: ModuleData = {
  id: 'entrepreneurship-and-innovation',
  title: 'Khởi Nghiệp và Đổi Mới Sáng Tạo',
  subtitle: 'Học cách biến một ý tưởng thành một dự án kinh doanh thực tế và tạo ra giá trị cho xã hội.',
  description:
    'Module này cung cấp một cái nhìn tổng quan về thế giới khởi nghiệp, từ việc nhận diện một vấn đề đáng giải quyết, xây dựng một sản phẩm khả dụng tối thiểu (MVP), đến việc tìm kiếm những khách hàng đầu tiên và gọi vốn. Đây là sân chơi cho những ai dám mơ lớn và muốn tạo ra sự thay đổi.',
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
  color: 'from-orange-500 to-amber-500',
  category: 'Kinh doanh & Công nghệ',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'startup-mindset',
      title: 'Tư Duy Khởi Nghiệp',
      description: 'Khám phá những đặc điểm tính cách và tư duy cốt lõi của một doanh nhân thành công.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: [
        'Bắt đầu dự án cá nhân',
        'Giải quyết vấn đề trong câu lạc bộ',
        'Tư duy như một người chủ',
      ],
      objectives: [
        'Hiểu về tư duy phát triển (growth mindset) và tầm quan trọng của việc học hỏi từ thất bại.',
        'Làm quen với khái niệm "thiên kiến hành động" (bias for action) - ưu tiên hành động và thử nghiệm hơn là lập kế hoạch quá chi tiết.',
        'Nhận biết tầm quan trọng của sự kiên trì (grit) và khả năng phục hồi (resilience) khi đối mặt với khó khăn.',
        'Phân biệt giữa ý tưởng (idea) và cơ hội (opportunity).',
      ],
      faqs: [
        {
          question: 'Em không có ý tưởng kinh doanh "tỷ đô", vậy em có thể học khởi nghiệp không?',
          answer:
            'Hoàn toàn có thể! Khởi nghiệp không chỉ là về những ý tưởng vĩ đại. Nó là một phương pháp giải quyết vấn đề. Bạn có thể bắt đầu bằng cách giải quyết một vấn đề nhỏ trong cộng đồng của mình. Tư duy khởi nghiệp có thể được áp dụng trong mọi lĩnh vực của cuộc sống.',
        },
        {
          question: 'Thất bại trong khởi nghiệp có phải là dấu chấm hết không?',
          answer:
            'Trong văn hóa khởi nghiệp, thất bại được xem là một phần không thể thiếu của quá trình học hỏi. Miễn là bạn học được điều gì đó từ thất bại đó, nó sẽ trở thành một bài học quý giá cho lần thử tiếp theo. Các nhà đầu tư thường quan tâm đến những gì bạn đã học được từ thất bại hơn là chính thất bại đó.',
        },
        {
          question: "Làm thế nào để rèn luyện 'sự kiên trì' (grit)?",
          answer:
            'Sự kiên trì được rèn luyện qua việc đặt ra các mục tiêu dài hạn và làm việc chăm chỉ để đạt được chúng, ngay cả khi đối mặt với trở ngại. Hãy bắt đầu từ những dự án nhỏ, cam kết hoàn thành chúng, và dần dần tăng độ khó. Việc ăn mừng những chiến thắng nhỏ trên đường đi cũng giúp duy trì động lực.',
        },
        {
          question: 'Tư duy phát triển (growth mindset) khác gì tư duy cố định (fixed mindset)?',
          answer:
            'Người có tư duy cố định tin rằng tài năng là bẩm sinh và không thể thay đổi. Họ có xu hướng né tránh thử thách. Ngược lại, người có tư duy phát triển tin rằng họ có thể cải thiện khả năng của mình thông qua nỗ lực. Họ xem thử thách là cơ hội để học hỏi và không sợ thất bại.',
        },
        {
          question: "Tại sao một doanh nhân cần có 'thiên kiến hành động' (bias for action)?",
          answer:
            "Trong một môi trường không chắc chắn như khởi nghiệp, việc chờ đợi để có đủ mọi thông tin là không thể. 'Thiên kiến hành động' có nghĩa là ưu tiên việc thử nghiệm nhanh một ý tưởng để có dữ liệu thực tế, thay vì chỉ ngồi phân tích trên lý thuyết. Hành động tạo ra học hỏi.",
        },
        {
          question: "Làm sao để biết một ý tưởng có phải là một 'cơ hội' kinh doanh tốt?",
          answer:
            "Một cơ hội tốt thường giải quyết một vấn đề 'nhức nhối' (pain point) cho một nhóm khách hàng đủ lớn, và họ sẵn sàng trả tiền để giải quyết vấn đề đó. Cơ hội cũng cần phù hợp với kỹ năng và đam mê của bạn, và có tiềm năng phát triển trong tương lai.",
        },
        {
          question: 'Em có cần phải biết về tài chính hay marketing để khởi nghiệp không?',
          answer:
            'Bạn không cần phải là chuyên gia, nhưng việc có kiến thức cơ bản về các lĩnh vực này là rất quan trọng. Quan trọng hơn là khả năng học hỏi nhanh và biết khi nào cần tìm kiếm sự giúp đỡ từ các chuyên gia hoặc người cố vấn (mentor).',
        },
        {
          question: 'Vai trò của người cố vấn (mentor) trong khởi nghiệp là gì?',
          answer:
            'Một người cố vấn tốt có thể cung cấp những lời khuyên quý báu từ kinh nghiệm thực tế của họ, giúp bạn tránh được những sai lầm phổ biến, kết nối bạn với các mối quan hệ quan trọng và đưa ra một góc nhìn khách quan về doanh nghiệp của bạn.',
        },
        {
          question: 'Làm thế nào để cân bằng giữa việc học ở trường và theo đuổi một dự án khởi nghiệp?',
          answer:
            'Đây là một thử thách lớn. Quản lý thời gian là chìa khóa. Hãy bắt đầu dự án của bạn ở quy mô nhỏ, tận dụng các kỳ nghỉ hoặc thời gian rảnh. Hãy xem dự án khởi nghiệp như một phần của việc học, nơi bạn áp dụng những kiến thức từ trường lớp vào thực tế. Đừng ngần ngại chia sẻ khó khăn với giáo viên hoặc người cố vấn để nhận được sự hỗ trợ.',
        },
        {
          question: 'Nỗi sợ bị người khác đánh giá ý tưởng của mình có cản trở em không?',
          answer:
            'Đây là một nỗi sợ phổ biến. Hãy nhớ rằng, một ý tưởng khi mới ra đời thường trông có vẻ kỳ quặc hoặc không khả thi. Thay vì sợ bị đánh giá, hãy xem mỗi lời góp ý, dù tích cực hay tiêu cực, là một cơ hội để học hỏi và làm cho ý tưởng của bạn tốt hơn. Hãy tìm kiếm những người góp ý xây dựng.',
        },
      ],
      quizzes: [
        {
          question:
            'Tư duy nào tin rằng khả năng và trí thông minh có thể được phát triển thông qua nỗ lực và học hỏi?',
          options: [
            'Tư duy cố định (Fixed Mindset)',
            'Tư duy phát triển (Growth Mindset)',
            'Tư duy khan hiếm (Scarcity Mindset)',
            'Tư duy dồi dào (Abundance Mindset)',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Tư duy phát triển là niềm tin rằng bạn có thể trở nên thông minh hơn và tài năng hơn thông qua sự cống hiến và làm việc chăm chỉ. Đây là tư duy nền tảng của một doanh nhân.',
        },
      ],
    },
    {
      id: 'lean-startup-mvp',
      title: 'Khởi Nghiệp Tinh Gọn và MVP',
      description:
        'Học phương pháp Khởi nghiệp Tinh gọn (Lean Startup) và cách xây dựng một Sản phẩm Khả dụng Tối thiểu (MVP) để kiểm chứng ý tưởng một cách nhanh chóng và ít tốn kém nhất.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Phát triển ứng dụng', 'Tạo một trang web dịch vụ', 'Thử nghiệm một sản phẩm mới'],
      objectives: [
        'Hiểu vòng lặp "Xây dựng - Đo lường - Học hỏi" (Build-Measure-Learn) của Khởi nghiệp Tinh gọn.',
        'Định nghĩa được Sản phẩm Khả dụng Tối thiểu (MVP) và mục đích của nó.',
        'Phân biệt giữa MVP và sản phẩm hoàn chỉnh.',
        'Học cách thiết kế một thử nghiệm đơn giản để kiểm tra giả định quan trọng nhất về ý tưởng kinh doanh của bạn.',
      ],
      faqs: [
        {
          question: 'MVP (Sản phẩm Khả dụng Tối thiểu) là gì?',
          answer:
            'MVP là phiên bản đơn giản nhất của một sản phẩm mà bạn có thể đưa đến tay người dùng để thu thập phản hồi và kiểm thí nghiệm các giả định của mình. Nó chỉ có những tính năng cốt lõi nhất để giải quyết một vấn đề cụ thể. Ví dụ, MVP của Dropbox chỉ là một video demo cho thấy sản phẩm sẽ hoạt động như thế nào, và nó đã đủ để chứng minh nhu cầu của thị trường.',
        },
        {
          question: 'Tại sao không nên xây dựng một sản phẩm hoàn hảo ngay từ đầu?',
          answer:
            'Bởi vì bạn có thể dành nhiều tháng hoặc nhiều năm để xây dựng một sản phẩm mà không ai muốn dùng. Phương pháp Khởi nghiệp Tinh gọn khuyến khích bạn đưa ra một phiên bản đơn giản (MVP) càng sớm càng tốt để nhận được phản hồi từ thị trường, từ đó điều chỉnh và cải tiến sản phẩm dựa trên dữ liệu thực tế thay vì dựa trên phỏng đoán.',
        },
        {
          question: "Vòng lặp 'Xây dựng - Đo lường - Học hỏi' hoạt động như thế nào trong thực tế?",
          answer:
            "Bắt đầu bằng một giả định (ví dụ: 'Học sinh sẽ trả tiền cho một ứng dụng giúp giải bài tập toán'). (Xây dựng) bạn tạo một trang web đơn giản (landing page) mô tả ứng dụng và có nút 'Mua ngay'. (Đo lường) bạn theo dõi có bao nhiêu người nhấp vào nút đó. (Học hỏi) nếu không ai nhấp, giả định của bạn có thể sai, và bạn cần thay đổi ý tưởng (pivot) thay vì xây dựng toàn bộ ứng dụng.",
        },
        {
          question: 'Một MVP có thể là những gì, ngoài một phiên bản phần mềm rút gọn?',
          answer:
            "Một MVP có thể rất đa dạng. Nó có thể là một video demo (như Dropbox), một trang web giới thiệu (landing page), một chiến dịch huy động vốn cộng đồng (crowdfunding), hoặc thậm chí là một dịch vụ được thực hiện thủ công hoàn toàn ở phía sau (được gọi là 'Wizard of Oz MVP') để giả lập trải nghiệm sản phẩm.",
        },
        {
          question: "Làm thế nào để xác định các tính năng 'cốt lõi' cho MVP?",
          answer:
            "Hãy tự hỏi: 'Tính năng tối thiểu nào là cần thiết để giải quyết được vấn đề đau đớn nhất cho nhóm khách hàng mục tiêu của tôi?'. Hãy tập trung vào việc giải quyết MỘT vấn đề thật tốt, thay vì giải quyết nhiều vấn đề một cách hời hợt. Phỏng vấn khách hàng tiềm năng có thể giúp bạn xác định điều này.",
        },
        {
          question: "Sự khác biệt giữa 'pivot' (xoay trục) và 'iteration' (tinh chỉnh) là gì?",
          answer:
            "'Iteration' là những cải tiến nhỏ cho sản phẩm dựa trên phản hồi, ví dụ như thay đổi màu sắc của một nút bấm. 'Pivot' là một sự thay đổi lớn, có cấu trúc về chiến lược, ví dụ như thay đổi từ việc bán sản phẩm cho học sinh sang bán cho giáo viên, sau khi bạn nhận ra giả định ban đầu của mình về khách hàng là sai.",
        },
        {
          question: 'Làm thế nào để đo lường sự thành công của một MVP?',
          answer:
            "Sự thành công không phải là kiếm được nhiều tiền ngay lập tức. Nó được đo bằng 'học hỏi đã được xác thực' (validated learning). Bạn có chứng minh được rằng người dùng thực sự quan tâm đến giải pháp của bạn không? Các chỉ số có thể là số lượng người đăng ký dùng thử, tỷ lệ giữ chân người dùng, hoặc đơn giản là những phản hồi định tính sâu sắc từ các cuộc phỏng vấn.",
        },
        {
          question: 'Em có cần biết lập trình để xây dựng MVP không?',
          answer:
            "Không nhất thiết. Có rất nhiều công cụ 'no-code' (không cần viết mã) cho phép bạn xây dựng trang web, ứng dụng di động hoặc tự động hóa các quy trình mà không cần kiến thức lập trình. Ví dụ: Carrd, Bubble, Glide. Điều quan trọng là khả năng kiểm chứng ý tưởng, không phải công cụ.",
        },
        {
          question: 'Khi nào thì nên ngừng cải tiến MVP và bắt đầu xây dựng sản phẩm thực sự?',
          answer:
            "Khi bạn đã có đủ bằng chứng cho thấy bạn đã tìm thấy 'sự phù hợp giữa sản phẩm và thị trường' (product-market fit). Điều này có nghĩa là bạn đang phục vụ một thị trường đủ lớn với một sản phẩm mà họ thực sự cần, thể hiện qua việc người dùng sẵn sàng trả tiền, liên tục quay lại sử dụng và giới thiệu cho người khác.",
        },
        {
          question: 'Phương pháp Khởi nghiệp Tinh gọn có áp dụng được cho các dự án phi lợi nhuận không?',
          answer:
            "Chắc chắn rồi. Vòng lặp 'Xây dựng - Đo lường - Học hỏi' cực kỳ hữu ích để kiểm chứng xem giải pháp xã hội của bạn có thực sự tạo ra tác động mong muốn hay không trước khi đầu tư nguồn lực lớn. 'Khách hàng' ở đây có thể là những người hưởng lợi từ dự án, và 'doanh thu' có thể là các chỉ số tác động xã hội.",
        },
      ],
      quizzes: [
        {
          question: 'Mục đích chính của vòng lặp "Xây dựng - Đo lường - Học hỏi" là gì?',
          options: [
            'Xây dựng sản phẩm nhanh nhất có thể',
            'Kiếm tiền nhanh nhất có thể',
            'Học hỏi từ người dùng và thị trường nhanh nhất có thể',
            'Xây dựng một sản phẩm có nhiều tính năng nhất',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Mục tiêu của phương pháp Khởi nghiệp Tinh gọn là giảm thiểu sự lãng phí bằng cách tối đa hóa tốc độ học hỏi. Mỗi vòng lặp giúp bạn kiểm chứng một giả định và tiến gần hơn đến một sản phẩm mà thị trường thực sự cần.',
        },
      ],
    },
    {
      id: 'business-model-canvas',
      title: 'Mô Hình Kinh Doanh Canvas',
      description:
        'Sử dụng công cụ trực quan Business Model Canvas để phác thảo, phân tích và truyền đạt mô hình kinh doanh của bạn một cách rõ ràng trên một trang giấy.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Lập kế hoạch kinh doanh',
        'Phân tích đối thủ cạnh tranh',
        'Thuyết trình ý tưởng cho nhà đầu tư',
      ],
      objectives: [
        'Hiểu được 9 khối xây dựng của một mô hình kinh doanh: Phân khúc khách hàng, Giải pháp giá trị, Kênh phân phối, Quan hệ khách hàng, Dòng doanh thu, Nguồn lực chính, Hoạt động chính, Đối tác chính, và Cơ cấu chi phí.',
        'Thực hành điền vào Business Model Canvas cho một ý tưởng kinh doanh cụ thể (ví dụ: một quán cà phê, một ứng dụng di động).',
        'Sử dụng Canvas để xác định các giả định rủi ro nhất trong mô hình kinh doanh của bạn.',
        'Học cách trình bày mô hình kinh doanh của mình một cách ngắn gọn và súc tích.',
      ],
      faqs: [
        {
          question: 'Sự khác biệt giữa "Giải pháp giá trị" và "Phân khúc khách hàng" là gì?',
          answer:
            '"Phân khúc khách hàng" trả lời câu hỏi "Bạn đang phục vụ ai?". "Giải pháp giá trị" trả lời câu hỏi "Bạn giúp họ giải quyết vấn đề gì?" hoặc "Bạn mang lại lợi ích gì cho họ?". Một giải pháp giá trị tốt phải khớp với một vấn-đề-nhức-nối của một phân khúc khách hàng cụ thể.',
        },
        {
          question: 'Business Model Canvas có thay thế được một kế hoạch kinh doanh chi tiết không?',
          answer:
            'Không hoàn toàn, nhưng nó là một bước khởi đầu tuyệt vời. Canvas giúp bạn phác thảo và kiểm tra các yếu tố cốt lõi của mô hình kinh doanh một cách nhanh chóng. Sau khi bạn đã kiểm chứng và tinh chỉnh mô hình của mình bằng Canvas, bạn có thể phát triển nó thành một kế hoạch kinh doanh chi tiết hơn nếu cần.',
        },
        {
          question: 'Tại sao Business Model Canvas lại hữu ích cho các startup?',
          answer:
            'Nó trực quan, dễ hiểu và thúc đẩy sự hợp tác. Cả nhóm có thể cùng nhau làm việc trên một tấm bảng, di chuyển các ghi chú và thảo luận. Nó giúp mọi người có một cái nhìn tổng thể và cùng một ngôn ngữ chung về mô hình kinh doanh, thay vì đọc một tài liệu kế hoạch kinh doanh dài hàng chục trang.',
        },
        {
          question: 'Khối nào trong Canvas thường là nơi bắt đầu?',
          answer:
            "Thông thường, bạn nên bắt đầu với cặp 'Phân khúc khách hàng' và 'Giải pháp giá trị'. Đây là trái tim của mô hình kinh doanh. Bạn cần xác định rõ bạn đang phục vụ ai và bạn mang lại giá trị gì cho họ trước khi nghĩ đến các yếu tố khác.",
        },
        {
          question: 'Làm thế nào để kiểm chứng các giả định trong Business Model Canvas?',
          answer:
            "Mỗi khối trong Canvas chứa đựng các giả định cần được kiểm chứng. Ví dụ, để kiểm chứng 'Phân khúc khách hàng', bạn cần ra ngoài và nói chuyện với khách hàng tiềm năng (customer development). Để kiểm chứng 'Dòng doanh thu', bạn có thể thử nghiệm các mức giá khác nhau với một MVP.",
        },
        {
          question:
            "Sự khác biệt giữa 'Kênh phân phối' (Channels) và 'Quan hệ khách hàng' (Customer Relationships) là gì?",
          answer:
            "'Kênh phân phối' là cách bạn đưa giải pháp giá trị đến với khách hàng (ví dụ: website, cửa hàng ứng dụng, cửa hàng vật lý). 'Quan hệ khách hàng' là loại hình mối quan hệ bạn thiết lập với họ (ví dụ: tự phục vụ, hỗ trợ cá nhân, cộng đồng người dùng).",
        },
        {
          question: 'Lean Canvas là gì và nó khác gì Business Model Canvas?',
          answer:
            "Lean Canvas là một biến thể của Business Model Canvas, được điều chỉnh đặc biệt cho các startup giai đoạn đầu. Nó thay thế các khối 'Đối tác chính', 'Hoạt động chính', 'Nguồn lực chính' bằng các khối tập trung hơn vào sự không chắc chắn: 'Vấn đề', 'Giải pháp', 'Các chỉ số chính' và 'Lợi thế không công bằng'.",
        },
        {
          question: 'Làm thế nào để sử dụng Canvas để phân tích đối thủ cạnh tranh?',
          answer:
            'Bạn có thể điền vào một Business Model Canvas cho từng đối thủ cạnh tranh chính của mình. Điều này giúp bạn hiểu rõ cách họ hoạt động, điểm mạnh, điểm yếu của họ là gì, và từ đó tìm ra những cơ hội để làm khác biệt hoặc tốt hơn.',
        },
        {
          question: 'Cơ cấu chi phí (Cost Structure) bao gồm những gì?',
          answer:
            'Nó bao gồm tất cả các chi phí quan trọng nhất để vận hành mô hình kinh doanh của bạn. Có hai loại chính: chi phí cố định (ví dụ: tiền thuê văn phòng, lương nhân viên) và chi phí biến đổi (ví dụ: chi phí nguyên vật liệu, chi phí quảng cáo trên mỗi lượt nhấp).',
        },
        {
          question: "Một mô hình kinh doanh có thể có nhiều 'Phân khúc khách hàng' không?",
          answer:
            'Có, nhiều doanh nghiệp phục vụ nhiều phân khúc khách hàng khác nhau. Ví dụ, Google phục vụ người dùng tìm kiếm (miễn phí) và các nhà quảng cáo (trả tiền). Điều quan trọng là phải hiểu rõ giải pháp giá trị, kênh phân phối và dòng doanh thu riêng cho từng phân khúc.',
        },
      ],
      quizzes: [
        {
          question: 'Trong Business Model Canvas, "Dòng doanh thu" (Revenue Streams) mô tả điều gì?',
          options: [
            'Tất cả các chi phí để vận hành doanh nghiệp',
            'Cách doanh nghiệp kiếm tiền từ mỗi phân khúc khách hàng',
            'Các hoạt động quan trọng nhất của doanh nghiệp',
            'Các đối tác và nhà cung cấp chính',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Dòng doanh thu mô tả cách thức và cơ chế mà công ty của bạn tạo ra tiền mặt từ các phân khúc khách hàng khác nhau, ví dụ: bán sản phẩm, phí thuê bao, quảng cáo...',
        },
      ],
    },
  ],
  features: [
    'Case study về các startup thành công và thất bại',
    'Công cụ tương tác để xây dựng Business Model Canvas',
    'Hướng dẫn từng bước để tạo một bài thuyết trình gọi vốn (pitch deck)',
    'Phỏng vấn các doanh nhân trẻ tại Việt Nam',
  ],
  prerequisites: ['Sự tò mò, đam mê giải quyết vấn đề và không sợ thất bại.'],
  objectives: [
    'Phát triển tư duy của một doanh nhân: chủ động, sáng tạo và kiên trì.',
    'Nắm vững các công cụ và phương pháp cốt lõi của khởi nghiệp hiện đại.',
    'Học cách biến một ý tưởng thành một mô hình kinh doanh có thể kiểm chứng.',
    'Nâng cao kỹ năng thuyết trình, làm việc nhóm và giải quyết vấn đề.',
  ],
  careerOutcomes: [
    'Trang bị kiến thức để tự bắt đầu kinh doanh trong tương lai.',
    'Phát triển những kỹ năng được đánh giá cao trong các công ty công nghệ và đổi mới sáng tạo, ngay cả khi bạn không phải là người sáng lập.',
  ],
  tags: ['khởi nghiệp', 'đổi mới sáng tạo', 'kinh doanh', 'lean startup', 'mvp', 'business model canvas'],
};
