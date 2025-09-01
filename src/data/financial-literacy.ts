import { EDUCATIONAL_GAMES_DATA, EducationalGame } from './educationalGames';

export interface FinancialLiteracyLessons {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  financialImpact: string;
  resources: Resource[];
  caseStudies: CaseStudy[];
  relatedGames?: (EducationalGame | undefined)[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'app' | 'platform' | 'calculator' | 'course' | 'book';
  description: string;
}

interface CaseStudy {
  title: string;
  person: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const financialLiteracyLessons: FinancialLiteracyLessons[] = [
  {
    id: 'personal-budgeting-fundamentals',
    title: 'Bài 1: Lập Ngân Sách Cá Nhân & Kế Hoạch Tài Chính',
    description:
      'Nắm vững các nguyên tắc cơ bản về tài chính cá nhân: phương pháp lập ngân sách, theo dõi chi tiêu, đặt mục tiêu tài chính. Sử dụng các ứng dụng và công cụ để quản lý tài chính cá nhân hiệu quả.',
    videoUrl: 'https://www.youtube.com/watch?v=ReW5_6A0iGQ',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    financialImpact: 'Tiết kiệm 20-30% chi tiêu hàng tháng, tăng tỷ lệ tiết kiệm',
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
    technologies: [
      'Ứng dụng lập ngân sách (Mint, YNAB, Personal Capital)',
      'Phần mềm bảng tính (Excel, Google Sheets)',
      'Ứng dụng ngân hàng với tính năng phân loại chi tiêu',
      'Nền tảng theo dõi đầu tư',
      'Ứng dụng quét hóa đơn',
      'Công cụ tính toán tài chính',
    ],
    exercises: [
      {
        title: 'Tạo Bảng Điều Khiển Tài Chính Cá Nhân',
        description:
          'Xây dựng bảng điều khiển tài chính toàn diện theo dõi thu nhập, chi tiêu, tiết kiệm, đầu tư và tiến trình tăng trưởng tài sản ròng.',
        difficulty: 'Trung bình',
        solution: `# Tạo Bảng Điều Khiển Tài Chính Cá Nhân

## 1. Phân Tích & Phân Loại Thu Nhập

### Nguồn Thu Nhập Chính:
- **Lương (Net):** 25,000,000 VND/tháng
- **Làm thêm (Freelance):** 3,000,000 VND/tháng (trung bình)
- **Lợi nhuận đầu tư:** 800,000 VND/tháng (cổ tức, lãi suất)
- **Kinh doanh phụ:** 2,000,000 VND/tháng
- **Tổng Thu Nhập Hàng Tháng:** 30,800,000 VND

### Đánh Giá Mức Độ Ổn Định Thu Nhập:
- **Thu Nhập Cố Định (Lương):** 81% - Rất ổn định
- **Thu Nhập Biến Đổi (Freelance/Kinh doanh):** 19% - Biến động vừa phải
- **Điểm Đa Dạng Hóa:** Tốt (4 nguồn thu nhập)

## 2. Theo Dõi & Phân Loại Chi Tiêu

### Chi Phí Cố Định (Nhu Cầu - mục tiêu 50%):
- **Nhà ở:** 8,000,000 VND (thuê, điện nước, internet)
- **Đi lại:** 2,500,000 VND (trả góp xe máy, xăng, bảo dưỡng)
- **Thực phẩm (Tạp hóa):** 3,000,000 VND
- **Bảo hiểm:** 1,200,000 VND (sức khỏe, xe máy)
- **Trả nợ:** 500,000 VND (vay sinh viên)
- **Tổng cộng:** 15,200,000 VND (49% thu nhập) ✓

### Chi Phí Biến Đổi (Mong Muốn - mục tiêu 30%):
- **Ăn ngoài:** 2,500,000 VND
- **Giải trí:** 1,500,000 VND
- **Mua sắm:** 2,000,000 VND
- **Sở thích:** 1,000,000 VND
- **Quỹ du lịch:** 2,000,000 VND
- **Tổng cộng:** 9,000,000 VND (29% thu nhập) ✓

### Tiết Kiệm & Đầu Tư (mục tiêu 20%):
- **Quỹ khẩn cấp:** 2,000,000 VND
- **Danh mục đầu tư:** 3,000,000 VND
- **Tiết kiệm hưu trí:** 1,600,000 VND
- **Tổng cộng:** 6,600,000 VND (21% thu nhập) ✓

## 3. Khung Mục Tiêu Tài Chính

### Mục Tiêu Ngắn Hạn (1-2 năm):
1. **Quỹ Khẩn Cấp:** Xây dựng đủ 6 tháng chi phí (91 triệu VND)
   - Hiện tại: 15 triệu VND
   - Mục tiêu: 91 triệu VND
   - Tiết kiệm hàng tháng: 2 triệu VND
   - Thời gian: 38 tháng

2. **Quỹ Du Lịch:** Chuyến đi Nhật Bản
   - Mục tiêu: 30 triệu VND
   - Tiết kiệm hàng tháng: 2 triệu VND (quỹ du lịch)
   - Thời gian: 15 tháng

### Mục Tiêu Trung Hạn (3-7 năm):
1. **Tiền Trả Trước Mua Nhà:** Mua căn hộ
   - Mục tiêu: 500 triệu VND (20% trả trước)
   - Tỷ lệ tiết kiệm hiện tại: 3 triệu VND/tháng
   - Cần thêm: 2 triệu VND/tháng
   - Thời gian: 5-6 năm

2. **Mở Rộng Kinh Doanh:** Phát triển kinh doanh phụ
   - Vốn đầu tư mục tiêu: 100 triệu VND
   - Lợi nhuận kỳ vọng: thêm 20 triệu VND/tháng thu nhập
   - Thời gian: 3 năm

### Mục Tiêu Dài Hạn (10+ năm):
1. **Kế Hoạch Hưu Trí:** Nghỉ hưu sớm ở tuổi 50
   - Danh mục mục tiêu: 5 tỷ VND
   - Tuổi hiện tại: 28
   - Thời gian đầu tư: 22 năm
   - Yêu cầu đầu tư hàng tháng: 4.5 triệu VND

## 4. Chiến Lược Tối Ưu Hóa Ngân Sách

### Cơ Hội Giảm Chi Tiêu:
- **Giao đồ ăn:** Giảm từ 1.5 triệu xuống 800K (-700K/tháng)
- **Dịch vụ đăng ký:** Kiểm tra và hủy các dịch vụ không sử dụng (-200K/tháng)
- **Mua sắm:** Áp dụng quy tắc 24 giờ, chỉ mua những thứ cần thiết (-500K/tháng)
- **Đi lại:** Tối ưu hóa lộ trình, xem xét đi chung xe (-300K/tháng)
- **Tổng Tiết Kiệm Tiềm Năng:** 1,700,000 VND/tháng

### Tối Ưu Hóa Thu Nhập:
- **Đàm phán lương:** Nghiên cứu mức lương thị trường, chuẩn bị lý lẽ để tăng 15%
- **Giá freelance:** Tăng giá theo giờ 20% cho khách hàng mới
- **Học hỏi đầu tư:** Tìm hiểu để cải thiện lợi nhuận từ 3% lên 7% hàng năm
- **Tập trung kinh doanh phụ:** Dành nhiều thời gian hơn cho các hoạt động có ROI cao nhất

## 5. Tích Hợp Công Cụ Số

### Bộ Ứng Dụng Đề Xuất:
- **Lập Ngân Sách Chính:** YNAB (You Need A Budget)
- **Theo Dõi Chi Tiêu:** Mint kết nối với tất cả các tài khoản
- **Theo Dõi Đầu Tư:** Personal Capital
- **Quản Lý Hóa Đơn:** Prism để lên lịch thanh toán
- **Quét Hóa Đơn:** Expensify
- **Theo Dõi Mục Tiêu:** Bảng tính Google Sheets tùy chỉnh

### Thiết Lập Tự Động Hóa:
- **Chuyển Khoản Tự Động:** 6.6 triệu VND vào tiết kiệm/đầu tư hàng tháng
- **Thanh Toán Hóa Đơn:** Tất cả chi phí cố định được thanh toán tự động
- **Đầu Tư:** Trung bình giá (DCA) vào các quỹ chỉ số
- **Cảnh Báo Chi Tiêu:** Thông báo khi gần đạt giới hạn danh mục

## 6. Quy Trình Đánh Giá Hàng Tháng

### Tuần 1 của Tháng: Lập Kế Hoạch
- Xem lại hiệu suất tháng trước so với ngân sách
- Điều chỉnh ngân sách tháng hiện tại dựa trên các biến động đã biết
- Kiểm tra tiến độ đạt được các mục tiêu tài chính
- Lên kế hoạch cho các khoản mua sắm hoặc chi tiêu lớn

### Tuần 2-3: Theo Dõi
- Ghi lại chi tiêu hàng ngày (5 phút/ngày)
- Xem lại danh mục hàng tuần (15 phút/tuần)
- Phát hiện sớm bất kỳ khoản chi tiêu vượt ngân sách nào
- Điều chỉnh chi tiêu nếu cần

### Tuần 4: Phân Tích & Tối Ưu Hóa
- Hoàn thành đối chiếu cuối tháng
- Tính toán chênh lệch thực tế so với ngân sách
- Xác định xu hướng và các mẫu chi tiêu
- Lên kế hoạch tối ưu hóa cho tháng tiếp theo
- Cập nhật tiến độ mục tiêu tài chính

## 7. Các Chỉ Số & KPI của Bảng Điều Khiển

### Chỉ Số Sức Khỏe Tài Chính:
- **Tỷ Lệ Tiết Kiệm:** 21% (Mục tiêu: 20%+) ✓
- **Tỷ Lệ Nợ trên Thu Nhập:** 1.6% (Mục tiêu: <20%) ✓
- **Tỷ Lệ Quỹ Khẩn Cấp:** 0.6 tháng (Mục tiêu: 6 tháng) ⚠️
- **Tỷ Lệ Đầu Tư:** 9.7% (Mục tiêu: 10%+) ⚠️

### Chỉ Số Hành Vi:
- **Tuân Thủ Ngân Sách:** 95% (Theo dõi hàng tháng)
- **Ghi Chép Chi Tiêu:** Hàng ngày trong hơn 30 ngày
- **Kiểm Tra Mục Tiêu:** Đánh giá tiến độ hàng tuần
- **Học Hỏi Tài Chính:** 2 giờ/tuần học tập

### Theo Dõi Tài Sản Ròng:
- **Tài Sản:** 150 triệu VND (tiền mặt, đầu tư, tài sản)
- **Nợ:** 25 triệu VND (vay sinh viên, thẻ tín dụng)
- **Tài Sản Ròng:** 125 triệu VND
- **Mục Tiêu Tăng Trưởng Hàng Tháng:** 6.6 triệu VND
- **Mục Tiêu Tăng Trưởng Hàng Năm:** 79.2 triệu VND (tăng 63%)

## 8. Quản Lý Rủi Ro

### Bảo Vệ Thu Nhập:
- **Đa Dạng Hóa Thu Nhập:** Nhiều nguồn thu nhập giảm rủi ro
- **Phát Triển Kỹ Năng:** Học hỏi liên tục để duy trì khả năng cạnh tranh
- **Mạng Lưới Chuyên Môn:** Duy trì mối quan hệ để có cơ hội
- **Kế Hoạch Khẩn Cấp:** Tối thiểu có quỹ dự phòng 3 tháng chi phí

### Quản Lý Chi Tiêu:
- **Danh Mục Linh Hoạt:** Khả năng điều chỉnh chi tiêu không thiết yếu
- **Kiểm Tra Đăng Ký:** Đánh giá hàng quý các khoản phí định kỳ
- **Bảo Hiểm:** Bảo vệ đầy đủ mà không mua quá mức
- **Quỹ Sức Khỏe:** Phân bổ riêng cho các trường hợp khẩn cấp y tế`,
        requirements: [
          'Hoàn thành phân tích thu nhập và chi tiêu trong 3 tháng gần nhất',
          'Thiết lập hệ thống theo dõi số với phân loại tự động',
          'Xác định mục tiêu tài chính SMART với timeline cụ thể',
          'Tạo quy trình đánh giá hàng tháng với các KPI',
          'Triển khai tự động hóa cho tiết kiệm và thanh toán hóa đơn',
        ],
        hints: [
          'Sử dụng dữ liệu giao dịch ngân hàng để xác định các mẫu chi tiêu thực tế',
          'Bắt đầu với các danh mục rộng, sau đó tinh chỉnh dựa trên việc sử dụng',
          'Xem xét các biến động theo mùa trong kế hoạch chi tiêu',
          'Thiết lập cảnh báo khi chi tiêu vượt ngân sách trước khi xảy ra',
        ],
        expectedOutput:
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
        description: 'Ứng dụng lập ngân sách toàn diện với phương pháp lập ngân sách từ con số không',
      },
      {
        title: 'Mint Personal Finance',
        url: 'https://mint.intuit.com',
        type: 'platform',
        description: 'Theo dõi tài chính miễn phí với phân loại tự động và giám sát tín dụng',
      },
    ],
    caseStudies: [
      {
        title: 'Hành Trình Thoát Nợ của Chuyên Gia Trẻ',
        person: 'Minh, Lập Trình Viên, 26 tuổi',
        challenge:
          'Tốt nghiệp với khoản nợ sinh viên 200 triệu VND, lạm phát lối sống cao sau khi có công việc đầu tiên, không có tiền tiết kiệm dù thu nhập 30 triệu VND/tháng',
        solution:
          'Thực hiện ngân sách chặt chẽ: chuyển đến căn hộ nhỏ hơn, tự nấu ăn, sử dụng phương pháp trả nợ tuyết lở. Phân bổ 15 triệu VND/tháng để trả nợ trong khi xây dựng quỹ khẩn cấp 1 tháng.',
        results:
          'Thoát nợ trong 18 tháng, xây dựng quỹ khẩn cấp 6 tháng, bắt đầu đầu tư 8 triệu VND/tháng. Tài sản ròng tăng từ -200 triệu lên +150 triệu VND trong 3 năm.',
        insights: [
          'Lạm phát lối sống là mối đe dọa lớn nhất đối với các chuyên gia trẻ',
          'Trả nợ quyết liệt giải phóng dòng tiền đáng kể trong dài hạn',
          'Hy sinh căn hộ nhỏ đáng giá cho sự tự do tài chính',
          'Kỹ năng nấu ăn tiết kiệm 5-8 triệu VND/tháng đồng thời cải thiện sức khỏe',
        ],
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'math-puzzle'),
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
    duration: '150 phút',
    financialImpact: 'Lợi nhuận hàng năm 7-10% trong dài hạn, tài sảnทbố trí',
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
    technologies: [
      'Nền tảng đầu tư (eToro, Vanguard, Fidelity)',
      'Công cụ phân tích cổ phiếu (Yahoo Finance, Bloomberg)',
      'Ứng dụng theo dõi danh mục (Personal Capital, Sharesight)',
      'Cố vấn robot (Betterment, Wealthfront)',
      'Nền tảng bất động sản (REITs, Fundrise)',
      'Phần mềm thuế (TurboTax, TaxAct)',
    ],
    exercises: [
      {
        title: 'Xây Dựng Danh Mục Đầu Tư Đa Dạng',
        description:
          'Tạo danh mục đầu tư phù hợp với độ tuổi với phân bổ tài sản hợp lý, quản lý rủi ro và chiến lược tăng trưởng dài hạn.',
        difficulty: 'Nâng cao',
        solution: `# Xây Dựng Danh Mục Đầu Tư: Chuyên Gia 28 Tuổi

## 1. Đánh Giá Hồ Sơ Đầu Tư

### Tình Hình Tài Chính Cá Nhân:
- **Tuổi:** 28
- **Thời gian đầu tư:** 37 năm cho đến khi nghỉ hưu (tuổi 65)
- **Mức độ chấp nhận rủi ro:** Trung bình-Cao (lợi thế thời gian)
- **Khả năng đầu tư hàng tháng:** 8,000,000 VND
- **Giá trị danh mục hiện tại:** 50,000,000 VND
- **Kiến thức đầu tư:** Trung cấp

### Mục Tiêu Tài Chính:
- **Mục tiêu chính:** Nghỉ hưu với 5 tỷ VND ở tuổi 65
- **Mục tiêu phụ:** Trả trước tiền nhà trong 5 năm (500 triệu VND)
- **Lợi nhuận hàng năm yêu cầu:** 8.5% để đạt mục tiêu hưu trí
- **Quỹ khẩn cấp:** Đã đủ (6 tháng chi phí)

## 2. Phân Bổ Tài Sản Chiến Lược

### Phân Bổ Danh Mục Cốt Lõi (Quy tắc theo tuổi: 120 - Tuổi):
- **Cổ phiếu:** 70% (120-28 = 92, điều chỉnh để thận trọng hơn)
- **Trái phiếu:** 20%
- **Đầu tư thay thế:** 7%
- **Tiền mặt/Thị trường tiền tệ:** 3%

### Đa Dạng Hóa Địa Lý:
- **Trong nước (Việt Nam):** 40%
- **Thị trường phát triển (Mỹ, Châu Âu):** 45%
- **Thị trường mới nổi:** 15%

## 3. Xây Dựng Danh Mục Chi Tiết

### Cổ Phiếu (70% = 35,000,000 VND):

#### ETF Thị Trường Mỹ (25% = 12,500,000 VND):
- **VTI (Toàn bộ thị trường chứng khoán):** 10,000,000 VND
  - Tỷ lệ chi phí: 0.03%
  - Lợi tức cổ tức: 1.8%
  - Tiếp cận rộng rãi thị trường Mỹ

- **QQQ (Nasdaq 100):** 2,500,000 VND
  - Tỷ lệ chi phí: 0.20%
  - Tập trung vào tăng trưởng công nghệ
  - Biến động cao hơn nhưng tiềm năng tăng trưởng

#### Thị Trường Việt Nam (20% = 10,000,000 VND):
- **ETF VN30:** 5,000,000 VND
  - Top 30 công ty Việt Nam
  - Tiếp cận thị trường địa phương
  - Khớp tiền tệ

- **Cổ phiếu riêng lẻ:** 5,000,000 VND
  - VCB (Vietcombank): 2,000,000 VND
  - VIC (Vingroup): 1,500,000 VND
  - HPG (Hòa Phát): 1,500,000 VND

#### Thị Trường Phát Triển Quốc Tế (15% = 7,500,000 VND):
- **VEA (Châu Âu, Châu Á):** 4,500,000 VND
- **VGK (Cổ phiếu Châu Âu):** 3,000,000 VND

#### Thị Trường Mới Nổi (10% = 5,000,000 VND):
- **VWO (ETF Thị trường mới nổi):** 3,000,000 VND
- **ETF tập trung ASEAN:** 2,000,000 VND

### Trái Phiếu (20% = 10,000,000 VND):

#### Trái Phiếu Chính Phủ (12% = 6,000,000 VND):
- **Trái phiếu Chính phủ Việt Nam:** 4,000,000 VND
  - Kỳ hạn 5 năm, lợi suất 6.5%/năm
  - Lợi nhuận an toàn, có thể dự đoán
  - Khớp tiền tệ để ổn định

- **ETF Trái phiếu Kho bạc Mỹ (TLT):** 2,000,000 VND
  - Trái phiếu kho bạc dài hạn
  - Phòng ngừa lạm phát
  - Đa dạng hóa đô la

#### Trái Phiếu Doanh Nghiệp (8% = 4,000,000 VND):
- **Trái phiếu doanh nghiệp hạng cao:** 2,500,000 VND
- **Quỹ trái phiếu doanh nghiệp Việt Nam:** 1,500,000 VND

### Đầu Tư Thay Thế (7% = 3,500,000 VND):

#### Quỹ Tín Thác Bất Động Sản (REITs) (5% = 2,500,000 VND):
- **REITs Việt Nam:** 1,500,000 VND
  - Trung tâm thương mại, tòa nhà văn phòng
  - Lợi tức cổ tức 7-9%
  - Tiếp cận bất động sản không cần sở hữu trực tiếp

- **REITs Mỹ (VNQ):** 1,000,000 VND
  - Bất động sản đa dạng của Mỹ
  - Quản lý chuyên nghiệp
  - Lợi thế thanh khoản

#### Hàng Hóa (2% = 1,000,000 VND):
- **ETF Vàng (GLD):** 600,000 VND
  - Phòng ngừa lạm phát
  - Bảo hiểm danh mục
  - Đa dạng hóa trong khủng hoảng

- **ETF Hàng hóa (DJP):** 400,000 VND
  - Tiếp cận hàng hóa rộng rãi
  - Năng lượng, nông nghiệp, kim loại

### Tiền Mặt & Thị Trường Tiền Tệ (3% = 1,500,000 VND):
- **Tiết kiệm lãi suất cao:** 1,000,000 VND
- **Quỹ thị trường tiền tệ:** 500,000 VND

## 4. Thực Hiện Chiến Lược Đầu Tư

### Kế Hoạch Trung Bình Giá (DCA):
- **Đầu tư hàng tháng:** 8,000,000 VND
- **Chiến lược phân bổ:** Duy trì tỷ lệ mục tiêu
- **Tái cân bằng:** Đánh giá hàng quý, tái cân bằng hàng năm
- **Đầu tư tự động:** Thiết lập chuyển khoản hàng tháng

### Phân Bổ Đầu Tư Hàng Tháng:
- **Cổ phiếu:** 5,600,000 VND
- **Trái phiếu:** 1,600,000 VND
- **Đầu tư thay thế:** 560,000 VND
- **Đệm tiền mặt:** 240,000 VND

### Quy Tắc Tái Cân Bằng:
- **Kích hoạt:** Khi phân bổ lệch >5% so với mục tiêu
- **Phương pháp:** Bán tài sản thừa cân, mua tài sản thiếu cân
- **Tần suất:** Đánh giá hàng quý, hành động hàng năm
- **Cân nhắc về thuế:** Sử dụng tài khoản ưu đãi thuế trước

## 5. Khung Quản Lý Rủi Ro

### Chiến Lược Đa Dạng Hóa:
- **Loại tài sản:** Cổ phiếu, trái phiếu, thay thế, tiền mặt
- **Địa lý:** Nhiều quốc gia và khu vực
- **Ngành:** Công nghệ, tài chính, y tế, năng lượng
- **Quy mô công ty:** Vốn hóa lớn, vừa, nhỏ
- **Phong cách đầu tư:** Tăng trưởng và giá trị

### Giám Sát Rủi Ro:
- **Beta danh mục:** Mục tiêu 1.0-1.2 (rủi ro vừa phải)
- **Sụt giảm tối đa:** Chuẩn bị cho mức giảm 30-40%
- **Phân tích tương quan:** Đảm bảo các tài sản di chuyển khác nhau
- **Kiểm tra căng thẳng:** Mô hình hóa hiệu suất danh mục trong các kịch bản khác nhau

### Quy Tắc Quy Mô Vị Thế:
- **Cổ phiếu riêng lẻ:** Tối đa 5% danh mục
- **Một ngành duy nhất:** Tối đa 25% phân bổ cổ phiếu
- **Một quốc gia duy nhất:** Tối đa 50% tổng danh mục
- **Một loại tài sản duy nhất:** Tuân theo giới hạn phân bổ chiến lược

## 6. Chiến Lược Tối Ưu Hóa Thuế

### Ưu Tiên Loại Tài Khoản:
1. **Tài khoản ưu đãi thuế:** Tối đa hóa đóng góp
2. **Đầu tư hiệu quả về thuế:** Quỹ chỉ số trong tài khoản chịu thuế
3. **Thu hoạch lỗ thuế:** Bù trừ lãi bằng lỗ
4. **Vị trí tài sản:** Trái phiếu trong tài khoản ưu đãi thuế, cổ phiếu tăng trưởng trong tài khoản chịu thuế

### Đầu Tư Hiệu Quả Về Thuế:
- **Thời gian nắm giữ:** >1 năm để hưởng lợi thuế thu nhập vốn
- **Tập trung cổ tức:** Cổ tức đủ điều kiện được đánh thuế ưu đãi
- **Quỹ chỉ số:** Vòng quay thấp hơn, ít sự kiện chịu thuế hơn
- **Trái phiếu đô thị:** Lãi suất miễn thuế (nếu có)

## 7. Giám Sát Hiệu Suất

### Các Chỉ Số Hiệu Suất Chính (KPI):
- **Tổng lợi nhuận:** So sánh với các chỉ số tham chiếu (S&P 500, VN-Index)
- **Lợi nhuận điều chỉnh theo rủi ro:** Tỷ lệ Sharpe >1.0 mục tiêu
- **Lỗi theo dõi:** Giảm thiểu độ lệch so với phân bổ mục tiêu
- **Tỷ lệ chi phí:** Trung bình <0.5% cho toàn bộ danh mục

### So Sánh Với Chỉ Số Tham Chiếu:
- **Danh mục 60/40:** Hỗn hợp cổ phiếu/trái phiếu truyền thống
- **Quỹ theo ngày mục tiêu:** Phân bổ phù hợp với độ tuổi
- **S&P 500:** Chỉ số tham chiếu thị trường Mỹ
- **VN-Index:** Chỉ số tham chiếu thị trường Việt Nam

### Quy Trình Đánh Giá Hàng Tháng:
1. **Phân tích hiệu suất:** Tính toán lợi nhuận so với chỉ số tham chiếu
2. **Kiểm tra phân bổ:** Xác nhận duy trì tỷ lệ mục tiêu
3. **Xem lại tin tức:** Các sự kiện lớn ảnh hưởng đến các khoản nắm giữ
4. **Lập kế hoạch đóng góp:** Điều chỉnh đầu tư hàng tháng nếu cần

## 8. Dự Báo Dài Hạn

### Phân Tích Mục Tiêu Hưu Trí:
- **Số tiền mục tiêu:** 5,000,000,000 VND
- **Thời gian:** 37 năm
- **Lợi nhuận yêu cầu:** 8.5% hàng năm
- **Đầu tư hàng tháng:** 8,000,000 VND
- **Xác suất thành công:** 75% dựa trên lợi nhuận lịch sử

### Phân Tích Kịch Bản:
- **Lạc quan (lợi nhuận 10%/năm):** 8.2 tỷ VND
- **Dự kiến (lợi nhuận 8.5%/năm):** 5.0 tỷ VND
- **Thận trọng (lợi nhuận 7%/năm):** 3.1 tỷ VND
- **Bi quan (lợi nhuận 5%/năm):** 1.6 tỷ VND

### Chiến Lược Điều Chỉnh:
- **Hiệu suất kém:** Tăng đóng góp hàng tháng
- **Hiệu suất tốt:** Xem xét phân bổ tích cực hơn
- **Thay đổi cuộc sống:** Điều chỉnh mục tiêu và thời gian khi cần
- **Biến động thị trường:** Giữ vững lộ trình, duy trì kỷ luật`,
        requirements: [
          'Đánh giá mức độ chấp nhận rủi ro cá nhân và thời gian đầu tư',
          'Nghiên cứu và lựa chọn các loại tài sản phù hợp',
          'Tính toán tỷ lệ phân bổ tối ưu',
          'Thiết lập kế hoạch đầu tư tự động',
          'Tạo lịch trình giám sát và tái cân bằng',
        ],
        hints: [
          'Sử dụng phân bổ dựa trên tuổi làm điểm khởi đầu, điều chỉnh cho phù hợp với tình hình cá nhân',
          'Bắt đầu với các quỹ chỉ số chi phí thấp trước khi chọn cổ phiếu riêng lẻ',
          'Xem xét các tác động về thuế của các loại tài khoản khác nhau',
          'Đa dạng hóa trên nhiều phương diện: địa lý, ngành, quy mô công ty',
        ],
        expectedOutput:
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
        description: 'Các quỹ chỉ số và ETF chi phí thấp với các công cụ đầu tư toàn diện',
      },
      {
        title: 'Nghiên Cứu Đầu Tư Morningstar',
        url: 'https://www.morningstar.com',
        type: 'platform',
        description: 'Phân tích đầu tư chuyên nghiệp, xếp hạng quỹ và các công cụ danh mục',
      },
    ],
    caseStudies: [
      {
        title: 'Nghỉ Hưu Sớm Nhờ Đầu Tư Chỉ Số',
        person: 'Lan, Giám Đốc Marketing, 32 tuổi',
        challenge:
          'Bắt đầu đầu tư muộn ở tuổi 30, muốn nghỉ hưu ở tuổi 50 với kiến thức đầu tư hạn chế và thu nhập trung bình',
        solution:
          'Tập trung vào đầu tư quỹ chỉ số chi phí thấp: 80% cổ phiếu, 20% trái phiếu. Tối đa hóa đóng góp vào tài khoản hưu trí, đầu tư 40% thu nhập thông qua tiết kiệm tối đa.',
        results:
          'Danh mục tăng từ 0 lên 2.8 tỷ VND trong 15 năm. Đạt được độc lập tài chính ở tuổi 45, sớm hơn 5 năm so với mục tiêu.',
        insights: [
          'Đầu tư nhất quán đánh bại việc cố gắng đoán định thị trường',
          'Tỷ lệ tiết kiệm cao quan trọng hơn lợi nhuận đầu tư',
          'Quỹ chỉ số cung cấp sự đa dạng hóa rộng rãi với chi phí tối thiểu',
          'Lãi kép thúc đẩy việc xây dựng tài sản theo thời gian',
        ],
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'blockchain-explorer'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'currency-exchange-puzzle'),
    ],
  },
];
