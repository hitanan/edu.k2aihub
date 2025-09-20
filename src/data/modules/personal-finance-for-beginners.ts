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
