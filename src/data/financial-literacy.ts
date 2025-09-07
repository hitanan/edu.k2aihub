import { BaseLessonData } from '@/types/lesson-base';

export const financialLiteracyLessons: BaseLessonData[] = [
  {
    id: 'personal-budgeting-fundamentals',
    title: 'Bài 1: Lập Ngân Sách Cá Nhân & Kế Hoạch Tài Chính',
    description:
      'Nắm vững các nguyên tắc cơ bản về tài chính cá nhân: phương pháp lập ngân sách, theo dõi chi tiêu, đặt mục tiêu tài chính. Sử dụng các ứng dụng và công cụ để quản lý tài chính cá nhân hiệu quả.',
    videoUrl: 'https://www.youtube.com/watch?v=ReW5_6A0iGQ',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90',
    objectives: [
      'Thiết lập ngân sách cá nhân toàn diện với quy tắc 50/30/20',
      'Theo dõi chi tiêu và xác định các mẫu chi tiêu',
      'Đặt mục tiêu tài chính SMART (ngắn hạn và dài hạn)',
      'Xây dựng chiến lược quỹ khẩn cấp (chi phí 3-6 tháng)',
      'Tối ưu hóa dòng tiền và giảm các chi phí không cần thiết',
    ],
    prerequisites: [
      'Kỹ năng toán học cơ bản (cộng, trừ, phần trăm)',
      'Hiểu biết về các nguồn thu nhập và chi phí hàng tháng',
      'Điện thoại thông minh hoặc máy tính để sử dụng các công cụ số',
      'Truy cập vào tài khoản ngân hàng và báo cáo tài chính',
    ],
    exercises: [
      {
        title: 'Tạo Bảng Điều Khiển Tài Chính Cá Nhân',
        description:
          'Xây dựng bảng điều khiển tài chính toàn diện theo dõi thu nhập, chi tiêu, tiết kiệm, đầu tư và tiến trình tăng trưởng tài sản ròng.',
        difficulty: 'Trung bình',
        solution: `# Tạo Bảng Điều Khiển Tài Chính Cá Nhân...`,
        materials: [
          'Hoàn thành phân tích thu nhập và chi tiêu trong 3 tháng gần nhất',
          'Thiết lập hệ thống theo dõi số với phân loại tự động',
          'Xác định mục tiêu tài chính SMART với timeline cụ thể',
          'Tạo quy trình đánh giá hàng tháng với các KPI',
          'Triển khai tự động hóa cho tiết kiệm và thanh toán hóa đơn',
        ],
        expectedResults:
          'Bảng điều khiển tài chính toàn diện với theo dõi tự động, mục tiêu rõ ràng, và các chiến lược tối ưu hóa có thể hành động',
      },
    ],
    realWorldApplications: [
      'Xây dựng tài sản cá nhân và độc lập tài chính',
      'Quản lý tài chính doanh nghiệp nhỏ',
      'Lập kế hoạch tài chính gia đình và đạt được mục tiêu',
      'Chiến lược giảm nợ và cải thiện điểm tín dụng',
      'Ra quyết định đầu tư với đánh giá rủi ro',
    ],
    resources: [
      {
        title: 'YNAB (You Need A Budget)',
        url: 'https://www.youneedabudget.com',
        type: 'app',
      },
      {
        title: 'Mint Personal Finance',
        url: 'https://mint.intuit.com',
        type: 'platform',
      },
    ],
    caseStudies: [
      {
        title: 'Hành Trình Thoát Nợ của Chuyên Gia Trẻ',
        organization: 'Minh, Lập Trình Viên, 26 tuổi',
        problem:
          'Tốt nghiệp với khoản nợ sinh viên 200 triệu VND, lạm phát lối sống cao sau khi có công việc đầu tiên, không có tiền tiết kiệm dù thu nhập 30 triệu VND/tháng',
        solution:
          'Thực hiện ngân sách chặt chẽ: chuyển đến căn hộ nhỏ hơn, tự nấu ăn, sử dụng phương pháp trả nợ tuyết lở. Phân bổ 15 triệu VND/tháng để trả nợ trong khi xây dựng quỹ khẩn cấp 1 tháng.',
        impact:
          'Thoát nợ trong 18 tháng, xây dựng quỹ khẩn cấp 6 tháng, bắt đầu đầu tư 8 triệu VND/tháng. Tài sản ròng tăng từ -200 triệu lên +150 triệu VND trong 3 năm.',
        innovations: [
          'Lạm phát lối sống là mối đe dọa lớn nhất đối với các chuyên gia trẻ',
          'Trả nợ quyết liệt giải phóng dòng tiền đáng kể trong dài hạn',
          'Hy sinh căn hộ nhỏ đáng giá cho sự tự do tài chính',
          'Kỹ năng nấu ăn tiết kiệm 5-8 triệu VND/tháng đồng thời cải thiện sức khỏe',
        ],
      },
    ],
  },
  {
    id: 'investment-fundamentals',
    title: 'Bài 2: Nguyên Tắc Cơ Bản về Đầu Tư & Xây Dựng Danh Mục',
    description:
      'Học các kiến thức cơ bản về đầu tư: cổ phiếu, trái phiếu, ETF, bất động sản. Xây dựng danh mục đầu tư đa dạng với quản lý rủi ro và chiến lược xây dựng tài sản dài hạn.',
    videoUrl: 'https://www.youtube.com/watch?v=SL3t_Fxerds',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150',
    objectives: [
      'Hiểu các nguyên tắc cơ bản về đầu tư: rủi ro, lợi nhuận, đa dạng hóa',
      'Xây dựng danh mục đầu tư cân bằng phù hợp với độ tuổi và mức độ chấp nhận rủi ro',
      'Nắm vững các khái niệm trung bình giá (DCA) và lãi kép',
      'Phân tích các khoản đầu tư cổ phiếu, trái phiếu, ETF và bất động sản',
      'Thực hiện các chiến lược đầu tư hiệu quả về thuế',
    ],
    prerequisites: [
      'Hoàn thành các kiến thức cơ bản về lập ngân sách cá nhân',
      'Đã thiết lập quỹ khẩn cấp (chi phí 3-6 tháng)',
      'Hiểu biết về các khái niệm tài chính cơ bản',
      'Truy cập vào các nền tảng đầu tư hoặc tài khoản môi giới',
    ],
    exercises: [
      {
        title: 'Xây Dựng Danh Mục Đầu Tư Đa Dạng',
        description:
          'Tạo danh mục đầu tư phù hợp với độ tuổi với phân bổ tài sản hợp lý, quản lý rủi ro và chiến lược tăng trưởng dài hạn.',
        difficulty: 'Nâng cao',
        solution: `# Xây Dựng Danh Mục Đầu Tư: Chuyên Gia 28 Tuổi...`,
        materials: [
          'Đánh giá mức độ chấp nhận rủi ro cá nhân và thời gian đầu tư',
          'Nghiên cứu và lựa chọn các loại tài sản phù hợp',
          'Tính toán tỷ lệ phân bổ tối ưu',
          'Thiết lập kế hoạch đầu tư tự động',
          'Tạo lịch trình giám sát và tái cân bằng',
        ],
        expectedResults:
          'Danh mục đầu tư hoàn chỉnh với phân bổ chi tiết, kế hoạch quản lý rủi ro và hệ thống giám sát hiệu suất',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch hưu trí và tích lũy tài sản',
      'Tài trợ giáo dục cho con cái',
      'Chiến lược đầu tư bất động sản',
      'Đầu tư kinh doanh và tài trợ mở rộng',
      'Độc lập tài chính và nghỉ hưu sớm (FIRE)',
    ],
    resources: [
      {
        title: 'Nền Tảng Đầu Tư Vanguard',
        url: 'https://investor.vanguard.com',
        type: 'platform',
      },
      {
        title: 'Nghiên Cứu Đầu Tư Morningstar',
        url: 'https://www.morningstar.com',
        type: 'platform',
      },
    ],
    caseStudies: [
      {
        title: 'Nghỉ Hưu Sớm Nhờ Đầu Tư Chỉ Số',
        organization: 'Lan, Giám Đốc Marketing, 32 tuổi',
        problem:
          'Bắt đầu đầu tư muộn ở tuổi 30, muốn nghỉ hưu ở tuổi 50 với kiến thức đầu tư hạn chế và thu nhập trung bình',
        solution:
          'Tập trung vào đầu tư quỹ chỉ số chi phí thấp: 80% cổ phiếu, 20% trái phiếu. Tối đa hóa đóng góp vào tài khoản hưu trí, đầu tư 40% thu nhập thông qua tiết kiệm tối đa.',
        impact:
          'Danh mục tăng từ 0 lên 2.8 tỷ VND trong 15 năm. Đạt được độc lập tài chính ở tuổi 45, sớm hơn 5 năm so với mục tiêu.',
        innovations: [
          'Đầu tư nhất quán đánh bại việc cố gắng đoán định thị trường',
          'Tỷ lệ tiết kiệm cao quan trọng hơn lợi nhuận đầu tư',
          'Quỹ chỉ số cung cấp sự đa dạng hóa rộng rãi với chi phí tối thiểu',
          'Lãi kép thúc đẩy việc xây dựng tài sản theo thời gian',
        ],
      },
    ],
  },
];
