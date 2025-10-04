import { ModuleData } from '@/types';

export const personalFinanceForBeginnersModuleData: ModuleData = {
  id: 'personal-finance-for-beginners',
  title: 'Tài Chính Cá Nhân Cho Người Mới Bắt Đầu',
  subtitle: 'Những bài học đầu tiên về tiền: cách kiếm tiền, giữ tiền và làm cho tiền sinh sôi.',
  description:
    'Module này trang bị cho bạn những kiến thức và kỹ năng tài chính cơ bản nhưng vô cùng quan trọng để xây dựng một tương lai tài chính vững chắc. Từ việc lập ngân sách, tiết kiệm thông minh đến việc hiểu về các kênh đầu tư đầu tiên, bạn sẽ học được cách trở thành người chủ của đồng tiền thay vì làm nô lệ cho nó.',
  image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=600&fit=crop',
  color: 'from-emerald-500 to-lime-600',
  category: 'Kỹ năng sống',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'budgeting-and-saving',
      title: 'Lập Ngân Sách và Tiết Kiệm Thông Minh',
      description: 'Học cách theo dõi chi tiêu, tạo một ngân sách thực tế và xây dựng thói quen tiết kiệm hiệu quả.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Quản lý tiền tiêu vặt', 'Tiết kiệm mua đồ', 'Lập kế hoạch cho chuyến đi'],
      objectives: [
        'Hiểu sự khác biệt giữa "nhu cầu" và "mong muốn".',
        'Áp dụng quy tắc 50/30/20 (50% cho nhu cầu, 30% cho mong muốn, 20% cho tiết kiệm) để phân bổ thu nhập.',
        'Sử dụng các ứng dụng hoặc bảng tính đơn giản để theo dõi chi tiêu hàng ngày.',
        'Đặt ra các mục tiêu tiết kiệm theo nguyên tắc SMART (Cụ thể, Đo lường được, Khả thi, Liên quan, Có thời hạn).',
      ],
      faqs: [
        {
          question: 'Tại sao việc lập ngân sách lại quan trọng?',
          answer:
            'Lập ngân sách cho bạn biết chính xác tiền của bạn đã đi đâu. Nó giúp bạn kiểm soát chi tiêu, tránh nợ nần, và quan trọng nhất là đảm bảo bạn có đủ tiền cho những mục tiêu quan trọng trong tương lai.',
        },
        {
          question: 'Em nên làm gì khi "lỡ tay" chi tiêu quá ngân sách?',
          answer:
            'Đừng nản lòng! Điều này rất phổ biến. Hãy xem lại chi tiêu của mình để tìm ra khoản nào đã vượt mức. Cố gắng cắt giảm ở các khoản chi tiêu linh hoạt khác (như giải trí, ăn ngoài) trong phần còn lại của tháng để bù lại. Quan trọng là nhận ra và điều chỉnh.',
        },
        {
          question: 'Nhu cầu (Needs) và Mong muốn (Wants) khác nhau như thế nào?',
          answer:
            'Nhu cầu là những thứ thiết yếu bạn cần để tồn tại và làm việc, ví dụ như nhà ở, thực phẩm, đi lại. Mong muốn là những thứ làm cuộc sống của bạn thú vị hơn nhưng không bắt buộc, ví dụ như đi du lịch, mua sắm quần áo mới, ăn nhà hàng.',
        },
        {
          question: 'Quy tắc 50/30/20 có phải là bắt buộc không?',
          answer:
            'Không, đó là một quy tắc gợi ý linh hoạt. Tùy thuộc vào thu nhập và hoàn cảnh sống của bạn, tỷ lệ này có thể thay đổi. Điều quan trọng là bạn phải có ý thức phân bổ thu nhập của mình cho ba hạng mục chính: chi tiêu cần thiết, chi tiêu cá nhân và tiết kiệm/đầu tư.',
        },
        {
          question: 'Làm thế nào để bắt đầu theo dõi chi tiêu?',
          answer:
            'Bạn có thể bắt đầu một cách đơn giản bằng cách ghi lại mọi khoản chi tiêu vào một cuốn sổ nhỏ hoặc sử dụng các ứng dụng quản lý tài chính cá nhân trên điện thoại. Sau một tháng, bạn sẽ có một bức tranh rõ ràng về thói quen chi tiêu của mình.',
        },
        {
          question: 'Quỹ khẩn cấp là gì và tại sao em cần nó?',
          answer:
            'Quỹ khẩn cấp là một khoản tiền tiết kiệm riêng biệt dùng để chi trả cho những sự kiện bất ngờ như mất việc, ốm đau, sửa chữa nhà cửa. Bạn nên có một quỹ khẩn cấp tương đương 3-6 tháng chi phí sinh hoạt.',
        },
        {
          question: 'Làm thế nào để cắt giảm chi tiêu mà không cảm thấy khổ sở?',
          answer:
            'Hãy bắt đầu từ những khoản chi nhỏ nhưng thường xuyên, ví dụ như giảm số lần uống trà sữa, tự nấu ăn thay vì đi ăn ngoài. Tìm kiếm các chương trình khuyến mãi, giảm giá. Hủy các dịch vụ đăng ký mà bạn không còn sử dụng.',
        },
        {
          question: 'Mục tiêu tiết kiệm SMART là như thế nào?',
          answer:
            'Ví dụ về một mục tiêu SMART: "Tôi sẽ tiết kiệm 5 triệu đồng (Specific, Measurable) để mua một chiếc máy tính bảng mới (Achievable, Relevant) trong vòng 6 tháng tới (Time-bound)." Đặt mục tiêu rõ ràng sẽ giúp bạn có động lực hơn.',
        },
        {
          question: 'Em nên ưu tiên trả nợ hay tiết kiệm?',
          answer:
            'Điều này phụ thuộc vào lãi suất của khoản nợ. Nếu bạn có khoản nợ lãi suất cao (như nợ thẻ tín dụng), hãy ưu tiên trả hết khoản nợ đó càng nhanh càng tốt, vì tiền lãi bạn phải trả sẽ cao hơn nhiều so với tiền lãi bạn kiếm được từ tiết kiệm.',
        },
        {
          question: '"Pay yourself first" (Trả cho mình trước) nghĩa là gì?',
          answer:
            'Đây là một nguyên tắc vàng trong tiết kiệm. Ngay khi nhận được thu nhập, hãy trích một khoản (ví dụ 10-20%) để chuyển vào tài khoản tiết kiệm hoặc đầu tư của bạn TRƯỚC KHI bắt đầu chi tiêu cho các khoản khác. Điều này đảm bảo bạn luôn tiết kiệm được một phần thu nhập của mình.',
        },
      ],
      quizzes: [
        {
          question: 'Theo quy tắc 50/30/20, khoản tiền để mua vé xem phim nên được xếp vào danh mục nào?',
          options: ['Nhu cầu (Needs)', 'Mong muốn (Wants)', 'Tiết kiệm & Đầu tư (Savings & Investments)', 'Nợ'],
          correctAnswerIndex: 1,
          explanation:
            'Vé xem phim là một hình thức giải trí, thuộc về danh mục "Mong muốn" chứ không phải là một nhu cầu thiết yếu như nhà ở hay thực phẩm.',
        },
      ],
    },
    {
      id: 'understanding-debt-and-credit',
      title: 'Hiểu Về Nợ và Tín Dụng',
      description:
        'Phân biệt nợ tốt và nợ xấu, hiểu cách hoạt động của thẻ tín dụng và tầm quan trọng của việc xây dựng điểm tín dụng tốt.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Sử dụng thẻ tín dụng', 'Vay mua xe/nhà', 'Vay vốn kinh doanh'],
      objectives: [
        'Phân biệt được nợ tốt (ví dụ: vay để học, vay kinh doanh) và nợ xấu (ví dụ: nợ thẻ tín dụng lãi suất cao).',
        'Hiểu các thuật ngữ cơ bản của thẻ tín dụng: hạn mức, lãi suất, ngày sao kê, ngày thanh toán.',
        'Biết cách sử dụng thẻ tín dụng một cách khôn ngoan để tận dụng lợi ích mà không bị mắc bẫy lãi suất.',
        'Hiểu điểm tín dụng là gì và tại sao nó quan trọng cho tương lai tài chính.',
      ],
      faqs: [
        {
          question: 'Sử dụng thẻ tín dụng có phải là một ý tồi không?',
          answer:
            'Không hẳn. Thẻ tín dụng là một công cụ. Nếu bạn luôn trả đủ và đúng hạn mỗi tháng, nó có thể rất hữu ích (hoàn tiền, tích điểm, xây dựng lịch sử tín dụng tốt). Nhưng nếu bạn chỉ trả số tiền tối thiểu và để lãi suất cộng dồn, nó sẽ trở thành một gánh nặng tài chính lớn.',
        },
        {
          question: 'Nợ tốt là gì?',
          answer:
            'Nợ tốt là khoản nợ giúp bạn tạo ra giá trị hoặc tăng thu nhập trong tương lai. Ví dụ, vay tiền để đi học có thể giúp bạn có công việc tốt hơn với mức lương cao hơn. Vay vốn để mở một cửa hàng có tiềm năng sinh lời cũng là một dạng nợ tốt.',
        },
        {
          question: 'Điểm tín dụng (credit score) là gì?',
          answer:
            'Là một con số thể hiện mức độ uy tín tài chính của bạn, được tính toán dựa trên lịch sử vay và trả nợ của bạn. Điểm tín dụng cao giúp bạn dễ dàng được duyệt các khoản vay trong tương lai với lãi suất tốt hơn.',
        },
        {
          question: 'Làm thế nào để xây dựng điểm tín dụng tốt?',
          answer:
            'Cách quan trọng nhất là luôn thanh toán các hóa đơn (thẻ tín dụng, khoản vay) đúng hạn. Ngoài ra, hãy cố gắng giữ tỷ lệ sử dụng tín dụng (dư nợ / hạn mức) ở mức thấp và không mở quá nhiều tài khoản tín dụng mới trong một thời gian ngắn.',
        },
        {
          question: 'Thanh toán tối thiểu trên sao kê thẻ tín dụng là gì?',
          answer:
            'Là số tiền nhỏ nhất mà ngân hàng yêu cầu bạn phải trả để không bị phạt trả chậm. Tuy nhiên, nếu bạn chỉ trả số tiền này, phần dư nợ còn lại sẽ bắt đầu bị tính lãi suất rất cao. Hãy luôn cố gắng trả toàn bộ dư nợ.',
        },
        {
          question: 'Nợ xấu là gì?',
          answer:
            'Nợ xấu là các khoản nợ dùng để tiêu dùng cho những thứ mất giá trị theo thời gian và không tạo ra thu nhập, đặc biệt là các khoản nợ có lãi suất cao như nợ thẻ tín dụng, vay tiêu dùng lãi suất cao.',
        },
        {
          question: 'Lãi suất kép của nợ hoạt động như thế nào?',
          answer:
            'Nó hoạt động chống lại bạn. Nếu bạn không trả hết dư nợ thẻ tín dụng, tiền lãi sẽ được tính trên cả số tiền gốc và số tiền lãi đã tích lũy từ các kỳ trước. Điều này làm cho khoản nợ của bạn tăng lên rất nhanh chóng.',
        },
        {
          question: 'Em có nên có một chiếc thẻ tín dụng khi còn là sinh viên không?',
          answer:
            'Có thể là một ý hay để bắt đầu xây dựng lịch sử tín dụng sớm. Tuy nhiên, bạn phải cực kỳ kỷ luật, chỉ chi tiêu trong khả năng chi trả và luôn thanh toán đầy đủ mỗi tháng. Nếu không, nó có thể dễ dàng dẫn đến nợ nần.',
        },
        {
          question: 'Hạn mức tín dụng là gì?',
          answer:
            'Là số tiền tối đa mà ngân hàng cho phép bạn chi tiêu trên thẻ tín dụng của mình. Hạn mức này được quyết định dựa trên thu nhập và lịch sử tín dụng của bạn.',
        },
        {
          question: 'Tại sao không nên dùng thẻ tín dụng để rút tiền mặt?',
          answer:
            'Hầu hết các ngân hàng tính phí rút tiền mặt rất cao và bắt đầu tính lãi suất ngay từ thời điểm bạn rút tiền, không có thời gian miễn lãi như khi bạn quẹt thẻ mua sắm. Đây là một trong những cách sử dụng thẻ tín dụng tốn kém nhất.',
        },
      ],
      quizzes: [
        {
          question: 'Để tránh phải trả lãi cho thẻ tín dụng, bạn nên làm gì?',
          options: [
            'Chỉ trả số tiền thanh toán tối thiểu',
            'Luôn trả toàn bộ dư nợ sao kê trước hoặc vào ngày đến hạn',
            'Chỉ sử dụng thẻ để rút tiền mặt',
            'Không bao giờ sử dụng thẻ',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Chỉ khi bạn thanh toán toàn bộ dư nợ của kỳ sao kê trước ngày đến hạn, bạn mới được hưởng thời gian miễn lãi và không phải trả bất kỳ khoản lãi nào.',
        },
      ],
    },
    {
      id: 'introduction-to-investing',
      title: 'Nhập Môn Đầu Tư',
      description:
        'Làm quen với các khái niệm đầu tư cơ bản, sức mạnh của lãi kép và các kênh đầu tư phổ biến cho người mới bắt đầu.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Đầu tư chứng khoán', 'Mua chứng chỉ quỹ', 'Gửi tiết kiệm'],
      objectives: [
        'Hiểu tại sao lạm phát làm tiền của bạn mất giá và tại sao đầu tư là cần thiết.',
        'Chứng kiến sức mạnh kỳ diệu của lãi kép qua các ví dụ cụ thể.',
        'Phân biệt các loại tài sản đầu tư chính: cổ phiếu, trái phiếu, và bất động sản.',
        'Tìm hiểu về các lựa chọn đầu tư đơn giản và an toàn cho người mới như gửi tiết kiệm và đầu tư vào các quỹ chỉ số (index funds).',
      ],
      faqs: [
        {
          question: 'Đầu tư có rủi ro không?',
          answer:
            'Có, mọi hình thức đầu tư đều có rủi ro. Nguyên tắc chung là "rủi ro cao, lợi nhuận kỳ vọng cao". Gửi tiết kiệm có rủi ro thấp nhất nhưng lợi nhuận cũng thấp. Cổ phiếu có thể mang lại lợi nhuận cao hơn nhưng cũng biến động mạnh hơn. Điều quan trọng là hiểu rõ mức độ chấp nhận rủi ro của bản thân và đa dạng hóa danh mục đầu tư.',
        },
        {
          question: 'Cần bao nhiêu tiền để bắt đầu đầu tư?',
          answer:
            'Ngày nay, bạn không cần nhiều tiền để bắt đầu. Với sự phát triển của công nghệ, bạn có thể bắt đầu đầu tư vào các quỹ chỉ số hoặc mua cổ phiếu chỉ với vài trăm nghìn hoặc vài triệu đồng thông qua các ứng dụng đầu tư.',
        },
        {
          question: 'Lãi kép (compound interest) là gì?',
          answer:
            'Lãi kép là "lãi trên lãi". Điều này có nghĩa là tiền lãi bạn kiếm được từ khoản đầu tư ban đầu sẽ được tái đầu tư và tiếp tục sinh lãi. Theo thời gian, hiệu ứng này tạo ra sự tăng trưởng theo cấp số nhân, đó là lý do Albert Einstein gọi nó là "kỳ quan thứ tám của thế giới".',
        },
        {
          question: 'Lạm phát là gì và tại sao nó lại "ăn mòn" tiền của bạn?',
          answer:
            'Lạm phát là sự tăng giá chung của hàng hóa và dịch vụ theo thời gian, làm giảm sức mua của đồng tiền. Nếu bạn chỉ giữ tiền mặt, một ổ bánh mì giá 10.000 đồng hôm nay có thể sẽ có giá 11.000 đồng vào năm sau, nghĩa là tiền của bạn đã mất giá trị. Đầu tư là cách để tiền của bạn tăng trưởng nhanh hơn tỷ lệ lạm phát.',
        },
        {
          question: 'Cổ phiếu và trái phiếu khác nhau như thế nào?',
          answer:
            'Khi bạn mua cổ phiếu, bạn đang mua một phần nhỏ của công ty đó (trở thành cổ đông). Khi bạn mua trái phiếu, bạn đang cho công ty hoặc chính phủ vay tiền và họ sẽ trả lại bạn kèm theo lãi suất. Cổ phiếu có tiềm năng lợi nhuận cao hơn nhưng cũng rủi ro hơn, trong khi trái phiếu an toàn hơn nhưng lợi nhuận thấp hơn.',
        },
        {
          question: 'Quỹ chỉ số (Index Fund) là gì?',
          answer:
            'Là một loại quỹ tương hỗ mua tất cả (hoặc một mẫu đại diện) các cổ phiếu trong một chỉ số thị trường nhất định, ví dụ như chỉ số VN30 (30 công ty lớn nhất Việt Nam). Đây là một cách đầu tư đa dạng hóa, chi phí thấp và rất phù hợp cho người mới bắt đầu.',
        },
        {
          question: 'Đa dạng hóa danh mục đầu tư là gì?',
          answer:
            'Đó là nguyên tắc "không bỏ tất cả trứng vào một giỏ". Bằng cách đầu tư vào nhiều loại tài sản khác nhau (cổ phiếu, trái phiếu, bất động sản...) và nhiều ngành nghề khác nhau, bạn sẽ giảm thiểu được rủi ro nếu một trong số các khoản đầu tư đó hoạt động không tốt.',
        },
        {
          question: 'Em có nên cố gắng "chọn đúng cổ phiếu" hay "thời điểm thị trường" không?',
          answer:
            'Đối với người mới bắt đầu (và ngay cả nhiều chuyên gia), việc cố gắng chọn đúng cổ phiếu riêng lẻ hoặc đoán đúng thời điểm thị trường lên xuống là cực kỳ khó khăn. Một chiến lược tốt hơn là đầu tư đều đặn vào các quỹ chỉ số chi phí thấp trong một thời gian dài (DCA - Dollar-Cost Averaging).',
        },
        {
          question: 'Đầu tư và đầu cơ khác nhau như thế nào?',
          answer:
            'Đầu tư là việc mua tài sản với kỳ vọng nó sẽ tạo ra giá trị và tăng trưởng trong dài hạn, dựa trên phân tích cơ bản. Đầu cơ là việc mua bán tài sản dựa trên dự đoán biến động giá trong ngắn hạn, thường có rủi ro cao hơn rất nhiều.',
        },
        {
          question: 'Gửi tiết kiệm ngân hàng có phải là một hình thức đầu tư không?',
          answer:
            'Gửi tiết kiệm là một hình thức cất giữ tiền an toàn và có sinh lời, nhưng lợi nhuận thường chỉ đủ hoặc thấp hơn một chút so với lạm phát. Do đó, nó được coi là một công cụ tài chính cơ bản hơn là một kênh đầu tư tăng trưởng thực sự.',
        },
      ],
      quizzes: [
        {
          question: 'Yếu tố nào là quan trọng nhất để tối đa hóa sức mạnh của lãi kép?',
          options: ['Số tiền đầu tư ban đầu lớn', 'Lãi suất cao', 'Thời gian đầu tư dài', 'Tất cả các yếu tố trên'],
          correctAnswerIndex: 2,
          explanation:
            'Mặc dù cả ba yếu tố đều quan trọng, thời gian là đồng minh lớn nhất của bạn. Bắt đầu đầu tư sớm, ngay cả với số tiền nhỏ, sẽ cho phép lãi kép có đủ thời gian để phát huy sức mạnh của nó một cách tối đa.',
        },
      ],
    },
  ],
  features: [
    'Công cụ lập ngân sách tương tác',
    'Mô phỏng sức mạnh của lãi kép',
    'Case study về các quyết định tài chính thông minh và sai lầm',
    'Hướng dẫn các bước đầu tiên để bắt đầu đầu tư',
  ],
  prerequisites: ['Kỹ năng tính toán cơ bản.'],
  objectives: [
    'Xây dựng thói quen tài chính lành mạnh từ sớm.',
    'Hiểu và biết cách sử dụng các công cụ tài chính cơ bản như ngân sách, tín dụng.',
    'Nắm được các nguyên tắc nền tảng của việc đầu tư.',
    'Tự tin hơn trong việc đưa ra các quyết định liên quan đến tiền bạc.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành nghề trong lĩnh vực tài chính, ngân hàng, tư vấn đầu tư.',
    'Kỹ năng quản lý tài chính cá nhân là kỹ năng sống còn, cần thiết cho bất kỳ ai, bất kể ngành nghề.',
  ],
  tags: ['tài chính cá nhân', 'lập ngân sách', 'tiết kiệm', 'đầu tư', 'quản lý tiền'],
};
