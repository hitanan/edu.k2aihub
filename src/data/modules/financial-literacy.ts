import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { BaseLessonData } from '@/types/lesson-base';

export interface FinancialLiteracyLesson extends BaseLessonData {
  technologies: string[];
  financialImpact: string;
}

export const financialLiteracyLessons: FinancialLiteracyLesson[] = [
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
    financialImpact:
      'Nâng cao nhận thức và kỹ năng quản lý tài chính cá nhân, từ đó cải thiện chất lượng cuộc sống và giảm bớt căng thẳng tài chính.',
    technologies: ['Ứng dụng di động', 'Phần mềm kế toán cá nhân', 'Nền tảng giáo dục trực tuyến'],
    faqs: [
      {
        question: 'Quy tắc 50/30/20 trong lập ngân sách là gì?',
        answer:
          'Quy tắc 50/30/20 là một phương pháp phân bổ thu nhập sau thuế: 50% dành cho nhu cầu thiết yếu (nhà ở, thực phẩm, đi lại), 30% dành cho mong muốn (giải trí, ăn ngoài, mua sắm), và 20% dành cho tiết kiệm và trả nợ.',
      },
      {
        question: 'Tại sao cần phải có một quỹ khẩn cấp?',
        answer:
          'Quỹ khẩn cấp là một khoản tiền tiết kiệm riêng biệt dùng để chi trả cho các chi phí bất ngờ như mất việc, sửa chữa xe cộ hoặc y tế. Nó giúp bạn tránh phải vay nợ hoặc rút tiền từ các khoản đầu tư dài hạn khi gặp khó khăn.',
      },
      {
        question: 'Làm thế nào để bắt đầu theo dõi chi tiêu một cách hiệu quả?',
        answer:
          'Bạn có thể bắt đầu bằng cách sử dụng một ứng dụng quản lý tài chính cá nhân (như Money Lover, MISA MoneyKeeper), một bảng tính Excel, hoặc đơn giản là một cuốn sổ tay. Điều quan trọng là ghi lại tất cả các khoản chi tiêu trong ít nhất một tháng để nhận ra các thói quen và xác định các lĩnh vực có thể cắt giảm.',
      },
      {
        question: 'Mục tiêu tài chính SMART là gì? Cho một ví dụ.',
        answer:
          'SMART là viết tắt của Specific (Cụ thể), Measurable (Đo lường được), Achievable (Khả thi), Relevant (Liên quan), và Time-bound (Có thời hạn). Ví dụ về một mục tiêu SMART: "Tiết kiệm 100 triệu đồng để làm khoản trả trước mua nhà (Specific, Measurable) trong vòng 2 năm tới (Time-bound) bằng cách tiết kiệm 4.2 triệu đồng mỗi tháng (Achievable, Relevant)."',
      },
      {
        question: 'Làm thế nào để đối phó với các khoản chi tiêu không thường xuyên, chẳng hạn như quà sinh nhật hoặc sửa chữa nhà cửa?',
        answer:
          'Hãy tạo một hoặc nhiều "quỹ chìm" (sinking funds). Đây là những tài khoản tiết kiệm nhỏ mà bạn đóng góp một khoản tiền nhỏ đều đặn mỗi tháng cho một mục tiêu chi tiêu cụ thể trong tương lai. Bằng cách này, khi chi phí phát sinh, bạn đã có sẵn tiền và không làm ảnh hưởng đến ngân sách hàng tháng.',
      },
      {
        question: 'Tôi nên làm gì nếu tôi liên tục chi tiêu quá mức trong một danh mục nào đó?',
        answer:
          'Đầu tiên, hãy xem xét liệu ngân sách của bạn có thực tế không. Nếu có, hãy thử các chiến lược như phương pháp "phong bì tiền mặt" (chỉ chi tiêu số tiền mặt bạn đã phân bổ) hoặc tìm kiếm các giải pháp thay thế rẻ hơn. Nếu vẫn không hiệu quả, bạn có thể cần phải điều chỉnh ngân sách bằng cách cắt giảm ở một danh mục khác.',
      },
      {
        question: 'Sự khác biệt giữa trả nợ "tuyết lở" (avalanche) và "quả cầu tuyết" (snowball) là gì?',
        answer:
          'Phương pháp "tuyết lở" ưu tiên trả hết khoản nợ có lãi suất cao nhất trước, giúp bạn tiết kiệm nhiều tiền lãi nhất. Phương pháp "quả cầu tuyết" ưu tiên trả hết khoản nợ có số dư nhỏ nhất trước, tạo ra các "chiến thắng" nhanh chóng để thúc đẩy động lực.',
      },
      {
        question: 'Làm thế nào để quản lý tài chính khi có thu nhập không ổn định (ví dụ: làm nghề tự do)?',
        answer:
          'Khi có thu nhập không ổn định, hãy lập ngân sách dựa trên mức thu nhập trung bình thấp nhất của bạn. Trong những tháng có thu nhập cao, hãy ưu tiên xây dựng một quỹ khẩn cấp lớn hơn (6-12 tháng chi phí) và một quỹ "đệm" để bù đắp cho những tháng thu nhập thấp.',
      },
      {
        question: 'Điểm tín dụng là gì và tại sao nó quan trọng ở Việt Nam?',
        answer:
          'Điểm tín dụng là một con số đánh giá mức độ uy tín tài chính của bạn, dựa trên lịch sử vay và trả nợ. Ở Việt Nam, thông tin này được quản lý bởi Trung tâm Thông tin Tín dụng Quốc gia (CIC). Một điểm tín dụng tốt sẽ giúp bạn dễ dàng được duyệt các khoản vay (mua nhà, mua xe) với lãi suất ưu đãi hơn.',
      },
      {
        question: 'Tôi có nên tự động hóa các khoản tiết kiệm và thanh toán hóa đơn không?',
        answer:
          'Chắc chắn rồi. Tự động hóa là một trong những cách hiệu quả nhất để đảm bảo bạn luôn đi đúng hướng. Hãy thiết lập lệnh chuyển tiền tự động từ tài khoản lương sang tài khoản tiết kiệm/đầu tư ngay sau khi bạn nhận lương ("trả cho mình trước") và tự động thanh toán các hóa đơn cố định để tránh phí phạt trễ hạn.',
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
    financialImpact:
      'Hiểu biết và áp dụng các nguyên tắc đầu tư cơ bản để xây dựng tài sản và đạt được các mục tiêu tài chính dài hạn.',
    technologies: ['Nền tảng giao dịch trực tuyến', 'Phần mềm phân tích đầu tư', 'Ứng dụng theo dõi danh mục đầu tư'],
    faqs: [
      {
        question: 'Đầu tư là gì và tại sao nó lại quan trọng?',
        answer:
          'Đầu tư là việc sử dụng tiền của bạn (vốn) để mua tài sản với kỳ vọng rằng chúng sẽ tạo ra thu nhập hoặc tăng giá trị trong tương lai. Nó quan trọng vì giúp tiền của bạn không bị mất giá do lạm phát và là cách hiệu quả để xây dựng tài sản cho các mục tiêu dài hạn như nghỉ hưu.',
      },
      {
        question: 'Đa dạng hóa danh mục đầu tư nghĩa là gì?',
        answer:
          'Đa dạng hóa là một chiến lược quản lý rủi ro, bao gồm việc đầu tư vào nhiều loại tài sản khác nhau (ví dụ: cổ phiếu, trái phiếu) và trong các lĩnh vực, ngành công nghiệp khác nhau. Mục đích là để nếu một khoản đầu tư hoạt động kém, các khoản đầu tư khác có thể bù lại, giảm thiểu tổn thất tổng thể.',
      },
      {
        question: 'Trung bình giá (DCA - Dollar-Cost Averaging) là gì?',
        answer:
          'Trung bình giá là một chiến lược đầu tư bằng cách bỏ ra một số tiền cố định vào một tài sản cụ thể theo một lịch trình đều đặn, bất kể giá của tài sản đó như thế nào. Phương pháp này giúp giảm thiểu rủi ro khi mua vào lúc giá cao và loại bỏ yếu tố cảm xúc ra khỏi quyết định đầu tư.',
      },
      {
        question: 'Tôi nên bắt đầu đầu tư với bao nhiêu tiền?',
        answer:
          'Không có số tiền tối thiểu tuyệt đối. Nhiều nền tảng đầu tư hiện nay cho phép bạn bắt đầu chỉ với vài trăm nghìn đồng. Điều quan trọng hơn số tiền ban đầu là tính nhất quán. Bắt đầu nhỏ và đầu tư đều đặn theo thời gian thường hiệu quả hơn là chờ đợi để có một số tiền lớn.',
      },
      {
        question: 'Cổ phiếu và trái phiếu khác nhau như thế nào?',
        answer:
          'Khi bạn mua cổ phiếu, bạn đang mua một phần nhỏ của công ty (trở thành cổ đông) và có tiềm năng thu lợi nhuận cao hơn nhưng cũng rủi ro hơn. Khi bạn mua trái phiếu, bạn đang cho một tổ chức (chính phủ hoặc công ty) vay tiền và nhận lại lãi suất cố định, đây là một khoản đầu tư an toàn hơn nhưng lợi nhuận thường thấp hơn.',
      },
      {
        question: 'ETF (Exchange-Traded Fund) là gì?',
        answer:
          'ETF là một loại quỹ đầu tư theo dõi một chỉ số cụ thể (như VN30), một ngành hoặc một loại tài sản. Nó được giao dịch trên sàn chứng khoán giống như một cổ phiếu. ETF là một cách tuyệt vời để đạt được sự đa dạng hóa ngay lập tức với chi phí thấp.',
      },
      {
        question: 'Lãi kép hoạt động như thế nào?',
        answer:
          'Lãi kép là quá trình mà tiền lãi bạn kiếm được từ một khoản đầu tư lại tiếp tục được tái đầu tư để tạo ra thêm lãi. Theo thời gian, hiệu ứng này có thể làm cho tài sản của bạn tăng trưởng theo cấp số nhân. Albert Einstein được cho là đã gọi nó là "kỳ quan thứ tám của thế giới".',
      },
      {
        question: 'Tôi nên phân bổ tài sản của mình như thế nào giữa cổ phiếu và trái phiếu?',
        answer:
          'Một quy tắc chung đơn giản là "110 trừ đi tuổi của bạn". Con số kết quả là tỷ lệ phần trăm danh mục đầu tư bạn nên dành cho cổ phiếu. Ví dụ, nếu bạn 25 tuổi, bạn nên đầu tư khoảng 85% vào cổ phiếu và 15% vào trái phiếu. Khi bạn lớn tuổi hơn, bạn nên giảm dần tỷ lệ cổ phiếu để giảm rủi ro.',
      },
      {
        question: 'Khi nào tôi nên bán một khoản đầu tư?',
        answer:
          'Lý do tốt nhất để bán là khi các yếu tố cơ bản của khoản đầu tư đã thay đổi (ví dụ: công ty hoạt động kém đi) hoặc khi bạn cần tái cân bằng danh mục đầu tư. Cố gắng tránh bán vì hoảng loạn khi thị trường đi xuống. Đầu tư dài hạn thường đòi hỏi sự kiên nhẫn.',
      },
      {
        question: 'Đầu tư vào bất động sản có phải là một ý tưởng tốt không?',
        answer:
          'Bất động sản có thể là một khoản đầu tư tốt, mang lại cả dòng tiền từ việc cho thuê và sự tăng giá trị theo thời gian. Tuy nhiên, nó đòi hỏi một lượng vốn lớn ban đầu, có tính thanh khoản thấp (khó bán nhanh) và đi kèm với các chi phí quản lý, bảo trì.',
      },
    ],
  },
];

export const financialLiteracyModuleData: ModuleData = {
  id: 'financial-literacy',
  title: 'Financial Literacy & FinTech',
  subtitle: 'Kiến thức tài chính & công nghệ FinTech',
  description:
    'Nắm vững kiến thức tài chính cá nhân và khám phá thế giới FinTech. Từ budgeting đến investment, cryptocurrency và digital banking - trở thành chuyên gia tài chính trong thời đại số.',
  level: 'Cơ bản đến Nâng cao',
  duration: '18-22 giờ',
  category: 'Finance & Technology',
  color: 'green',
  heroImageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
  features: [
    'Personal Finance Management và Budgeting',
    'Investment Strategies và Portfolio Management',
    'Cryptocurrency và Blockchain Technology',
    'Digital Banking và FinTech Applications',
    'Risk Management và Insurance Planning',
    'Retirement Planning và Wealth Building',
    'Tax Planning và Optimization',
    'Financial Analysis và Decision Making',
  ],
  icon: '💰',
  objectives: [
    'Quản lý tài chính cá nhân và xây dựng budget hiệu quả',
    'Hiểu và áp dụng các chiến lược đầu tư thông minh',
    'Nắm vững cryptocurrency và blockchain technology',
    'Sử dụng thành thạo các ứng dụng FinTech hiện đại',
    'Phân tích risk và lập kế hoạch bảo hiểm phù hợp',
    'Xây dựng kế hoạch retirement và wealth building',
  ],
  prerequisites: [
    'Kỹ năng toán học cơ bản và logic tính toán',
    'Hiểu biết về tiền tệ và hệ thống ngân hàng',
    'Sử dụng thành thạo smartphone và computer',
    'Quan tâm đến thị trường tài chính và đầu tư',
  ],
  careerOutcomes: [
    'Financial Advisor (15-35 triệu VNĐ)',
    'FinTech Product Manager (25-50 triệu VNĐ)',
    'Investment Analyst (18-40 triệu VNĐ)',
    'Digital Banking Specialist (20-38 triệu VNĐ)',
    'Cryptocurrency Trader (10-100+ triệu VNĐ)',
    'Risk Management Analyst (22-42 triệu VNĐ)',
    'Financial Technology Consultant (28-55 triệu VNĐ)',
    'Personal Finance Coach (12-30 triệu VNĐ)',
  ],
  industryApplications: [
    'Banking và financial institutions',
    'Investment management firms',
    'Insurance companies',
    'FinTech startups và technology',
    'Cryptocurrency exchanges',
    'Real estate và property investment',
    'Government financial agencies',
    'Corporate finance departments',
    'Financial consulting services',
    'Educational institutions',
  ],
  marketDemand: {
    averageSalary: '25-50 triệu VNĐ/tháng',
    jobGrowth: '20%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.Python, K2Module.AIArtCreativeTech],
  lessons: financialLiteracyLessons,
};
