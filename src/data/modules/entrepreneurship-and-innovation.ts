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
            'MVP là phiên bản đơn giản nhất của một sản phẩm mà bạn có thể đưa đến tay người dùng để thu thập phản hồi và kiểm chứng các giả định của mình. Nó chỉ có những tính năng cốt lõi nhất để giải quyết một vấn đề cụ thể. Ví dụ, MVP của Dropbox chỉ là một video demo cho thấy sản phẩm sẽ hoạt động như thế nào, và nó đã đủ để chứng minh nhu cầu của thị trường.',
        },
        {
          question: 'Tại sao không nên xây dựng một sản phẩm hoàn hảo ngay từ đầu?',
          answer:
            'Bởi vì bạn có thể dành nhiều tháng hoặc nhiều năm để xây dựng một sản phẩm mà không ai muốn dùng. Phương pháp Khởi nghiệp Tinh gọn khuyến khích bạn đưa ra một phiên bản đơn giản (MVP) càng sớm càng tốt để nhận được phản hồi từ thị trường, từ đó điều chỉnh và cải tiến sản phẩm dựa trên dữ liệu thực tế thay vì dựa trên phỏng đoán.',
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
            '"Phân khúc khách hàng" trả lời câu hỏi "Bạn đang phục vụ ai?". "Giải pháp giá trị" trả lời câu hỏi "Bạn giúp họ giải quyết vấn đề gì?" hoặc "Bạn mang lại lợi ích gì cho họ?". Một giải pháp giá trị tốt phải khớp với một vấn-đề-nhức-nhối của một phân khúc khách hàng cụ thể.',
        },
        {
          question: 'Business Model Canvas có thay thế được một kế hoạch kinh doanh chi tiết không?',
          answer:
            'Không hoàn toàn, nhưng nó là một bước khởi đầu tuyệt vời. Canvas giúp bạn phác thảo và kiểm tra các yếu tố cốt lõi của mô hình kinh doanh một cách nhanh chóng. Sau khi bạn đã kiểm chứng và tinh chỉnh mô hình của mình bằng Canvas, bạn có thể phát triển nó thành một kế hoạch kinh doanh chi tiết hơn nếu cần.',
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
