import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface GreenTechExercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  materials?: string[];
  expectedResults: string;
}

export interface GreenTechResource {
  title: string;
  url: string;
  type: 'research' | 'tool' | 'article';
}

export interface GreenTechCaseStudy {
  title: string;
  organization: string;
  problem: string;
  solution: string;
  impact: string;
  innovations: string[];
}

export interface GreenTechLesson extends Omit<BaseLessonData, 'exercises' | 'resources' | 'caseStudies'> {
  exercises: GreenTechExercise[];
  resources: GreenTechResource[];
  caseStudies: GreenTechCaseStudy[];
  tools?: string[];
}

export const greenTechLessons: GreenTechLesson[] = [
  {
    id: 'renewable-energy-basics',
    title: 'Cơ Bản về Năng Lượng Tái Tạo',
    description:
      'Tìm hiểu về năng lượng mặt trời, gió, nước và các công nghệ xanh hiện đại. Học cách tính toán hiệu quả và ROI của hệ thống năng lượng tái tạo.',
    videoUrl: 'https://www.youtube.com/watch?v=1kUE0BZtTRc',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    objectives: [
      'Hiểu nguyên lý hoạt động của năng lượng mặt trời và gió',
      'Tính toán công suất và hiệu quả hệ thống năng lượng tái tạo',
      'Phân tích chi phí đầu tư và thời gian hoàn vốn',
      'Thiết kế hệ thống năng lượng cho gia đình',
      'Đánh giá tác động môi trường và lợi ích kinh tế',
    ],
    prerequisites: ['Kiến thức vật lý cơ bản', 'Hiểu về điện năng'],
    vietnamContext: {
      title: 'Tiềm năng Năng lượng Tái tạo tại Việt Nam',
      content: [
        'Việt Nam có tiềm năng lớn về năng lượng mặt trời, đặc biệt ở các tỉnh miền Nam và miền Trung với số giờ nắng cao.',
        'Điện mặt trời áp mái đang phát triển bùng nổ tại các hộ gia đình và nhà xưởng, giúp giảm tải cho lưới điện quốc gia.',
        'Các dự án điện gió lớn đã và đang được xây dựng tại các tỉnh ven biển như Bạc Liêu, Ninh Thuận, Bình Thuận.',
        'Chính phủ Việt Nam đã ban hành nhiều cơ chế khuyến khích phát triển năng lượng tái tạo, thể hiện trong Quy hoạch điện VIII.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Quang Minh',
      title: 'Kỹ sư trưởng, Nhà máy Điện gió Bạc Liêu',
      company: 'Công ty TNHH Xây dựng - Thương mại - Du lịch Công Lý',
      imageUrl: 'https://i.pravatar.cc/150?u=le-quang-minh',
      quote:
        'Công việc của tôi là đảm bảo những "cánh quạt khổng lồ" này hoạt động ổn định để biến gió thành điện. Mỗi ngày, chúng tôi không chỉ tạo ra năng lượng sạch mà còn góp phần khẳng định vị thế của Việt Nam trên bản đồ năng lượng tái tạo thế giới. Đây là một ngành đầy hứa hẹn cho các kỹ sư trẻ.',
    },
    quizzes: [
      {
        question:
          'Tỉnh nào ở Việt Nam được mệnh danh là "thủ phủ" của năng lượng tái tạo, đặc biệt là điện gió và điện mặt trời?',
        options: ['Hà Giang', 'Ninh Thuận', 'Cà Mau', 'Quảng Ninh'],
        correctAnswerIndex: 1,
        explanation:
          'Ninh Thuận có điều kiện tự nhiên vô cùng thuận lợi với số giờ nắng và tốc độ gió cao, là nơi tập trung nhiều dự án điện mặt trời và điện gió lớn nhất cả nước.',
      },
      {
        question: 'Quy hoạch điện VIII của Việt Nam ưu tiên phát triển loại hình năng lượng nào?',
        options: ['Nhiệt điện than', 'Điện hạt nhân', 'Năng lượng tái tạo (gió, mặt trời)', 'Thủy điện nhỏ'],
        correctAnswerIndex: 2,
        explanation:
          'Quy hoạch phát triển điện lực quốc gia thời kỳ 2021-2030, tầm nhìn đến năm 2050 (Quy hoạch điện VIII) đặt mục tiêu mạnh mẽ về chuyển dịch năng lượng, ưu tiên phát triển các nguồn năng lượng tái tạo để đảm bảo an ninh năng lượng và bảo vệ môi trường.',
      },
    ],
    faqs: [
      {
        question: 'Năng lượng tái tạo là gì?',
        answer:
          'Năng lượng tái tạo là năng lượng được tạo ra từ các nguồn thiên nhiên có khả năng tái tạo liên tục như ánh sáng mặt trời, gió, nước, địa nhiệt. Chúng được coi là "sạch" vì không tạo ra khí thải nhà kính gây biến đổi khí hậu.',
      },
      {
        question: 'Tại sao Việt Nam có tiềm năng lớn về năng lượng mặt trời và gió?',
        answer:
          'Việt Nam có đường bờ biển dài hơn 3.260 km, đón gió tốt, và nằm trong khu vực có bức xạ mặt trời cao trên bản đồ thế giới, đặc biệt là các tỉnh miền Trung và Nam Bộ. Đây là những điều kiện tự nhiên lý tưởng để phát triển điện gió và điện mặt trời.',
      },
      {
        question: 'Hệ thống điện mặt trời áp mái hoạt động như thế nào?',
        answer:
          'Các tấm pin mặt trời lắp trên mái nhà sẽ hấp thụ ánh sáng mặt trời và chuyển đổi thành dòng điện một chiều (DC). Dòng điện này sau đó đi qua một bộ biến tần (inverter) để chuyển thành dòng điện xoay chiều (AC) tương thích với các thiết bị điện trong nhà và lưới điện quốc gia.',
      },
      {
        question: 'Quy hoạch điện VIII có ý nghĩa gì đối với tương lai năng lượng của Việt Nam?',
        answer:
          'Quy hoạch điện VIII là một cam kết mạnh mẽ của Chính phủ Việt Nam về việc chuyển đổi từ năng lượng hóa thạch (than, dầu) sang năng lượng sạch. Nó đặt ra lộ trình để tăng tỷ trọng năng lượng tái tạo, giảm phát thải carbon, và hướng tới mục tiêu Net Zero vào năm 2050.',
      },
      {
        question: 'Lợi ích của việc lắp đặt điện mặt trời áp mái là gì?',
        answer: 'Lắp đặt điện mặt trời áp mái giúp giảm hóa đơn tiền điện hàng tháng, giảm phụ thuộc vào lưới điện quốc gia, tăng giá trị cho ngôi nhà và góp phần bảo vệ môi trường bằng cách sử dụng năng lượng sạch.'
      },
      {
        question: 'Đầu tư vào năng lượng tái tạo có rủi ro không?',
        answer: 'Mọi hình thức đầu tư đều có rủi ro. Với năng lượng tái tạo, rủi ro có thể đến từ sự thay đổi chính sách của chính phủ, biến động thời tiết ảnh hưởng đến sản lượng (ít nắng, ít gió), và chi phí bảo trì thiết bị. Tuy nhiên, với công nghệ ngày càng phát triển và sự ủng hộ mạnh mẽ của toàn cầu, đây được xem là một lĩnh vực đầu tư bền vững.'
      },
      {
        question: '"Net Zero" là gì và Việt Nam cam kết đạt được vào năm nào?',
        answer: 'Net Zero (Phát thải ròng bằng không) có nghĩa là cân bằng giữa lượng khí nhà kính thải ra và lượng khí được loại bỏ khỏi khí quyển. Việt Nam đã đưa ra cam kết mạnh mẽ tại COP26 để đạt được mục tiêu Net Zero vào năm 2050.'
      },
      {
        question: 'Ngoài điện gió và mặt trời, Việt Nam còn có tiềm năng về loại năng lượng tái tạo nào khác?',
        answer: 'Ngoài hai nguồn năng lượng chính là gió và mặt trời, Việt Nam còn có tiềm năng phát triển điện sinh khối (từ rác thải, phụ phẩm nông nghiệp), thủy điện nhỏ và năng lượng địa nhiệt ở một số khu vực.'
      },
      {
        question: 'Làm thế nào để một cá nhân có thể đóng góp vào việc phát triển năng lượng tái tạo?',
        answer: 'Bạn có thể bắt đầu bằng việc tiết kiệm điện, sử dụng các thiết bị hiệu suất cao, lắp đặt hệ thống điện mặt trời áp mái nếu có điều kiện, và ủng hộ các sản phẩm, dịch vụ từ các công ty sử dụng năng lượng sạch.'
      },
      {
        question: 'Điện gió ngoài khơi có ưu điểm gì so với trên bờ?',
        answer: 'Điện gió ngoài khơi thường có hiệu suất cao hơn do tốc độ gió mạnh và ổn định hơn. Các tuabin cũng có thể được thiết kế lớn hơn mà không bị giới hạn về không gian và tiếng ồn như trên đất liền. Tuy nhiên, chi phí đầu tư và bảo trì ngoài khơi cũng cao hơn đáng kể.'
      }
    ],
    exercises: [
      {
        title: 'Thiết kế hệ thống năng lượng mặt trời cho gia đình',
        description:
          'Tính toán và thiết kế một hệ thống năng lượng mặt trời hoàn chỉnh cho một gia đình 4 người ở TP.HCM',
        difficulty: 'Trung bình',
        solution: `# Thiết kế Hệ Thống Năng Lượng Mặt Trời - Gia Đình 4 Người

## 1. Phân Tích Nhu Cầu Điện Năng

### Thiết Bị Điện Chính:
- **Điều hòa:** 2 máy x 9000 BTU = 3.5kW x 8h = 28kWh/ngày
- **Tủ lạnh:** 200W x 24h = 4.8kWh/ngày  
- **Đèn LED:** 15 bóng x 10W x 6h = 0.9kWh/ngày
- **TV + Điện tử:** 300W x 6h = 1.8kWh/ngày
- **Máy giặt:** 800W x 1h = 0.8kWh/ngày
- **Khác:** 1.2kWh/ngày

**Tổng tiêu thụ:** 37.5kWh/ngày
**Tải đỉnh:** 4.5kW (điều hòa + tủ lạnh + đèn)

## 2. Thiết Kế Hệ Thống

### Tấm Pin Mặt Trời:
- **Công suất cần thiết:** 37.5kWh / 4.5h (giờ nắng) = 8.3kW
- **Lựa chọn tấm pin:** Monocrystalline 450W
- **Số lượng tấm pin:** 8.3kW / 450W = 19 tấm
- **Tổng công suất:** 19 x 450W = 8.55kW

### Hệ Thống Biến Tần:
- **Biến tần Hybrid:** 10kW (120% tải đỉnh)
- **Hiệu suất:** 97%
- **Tính năng:** Hòa lưới có dự phòng pin

### Lưu Trữ Pin:
- **Dung lượng cần thiết:** 37.5kWh x 1.5 (dự phòng) = 56.25kWh
- **Pin LiFePO4:** Mô-đun 48V 100Ah
- **Số lượng mô-đun:** 12 mô-đun (tổng 57.6kWh)
- **Thời gian dự phòng:** 1.5 ngày không có nắng

### Phụ Kiện & Lắp Đặt:
- **Hệ thống khung đỡ mái** cho 19 tấm pin
- **Hộp nối DC** có chống sét lan truyền
- **Hệ thống giám sát** qua wifi
- **Cầu dao an toàn** và aptomat

## 3. Phân Tích Tài Chính

### Chi Phí Đầu Tư:
- **Tấm pin mặt trời:** 19 x $250 = $4,750
- **Hệ thống biến tần:** $2,500
- **Hệ thống pin:** 12 x $800 = $9,600
- **Lắp đặt & phụ kiện:** $3,150
- **Tổng chi phí hệ thống:** $20,000

### Tiết Kiệm Hàng Năm:
- **Hóa đơn điện hiện tại:** 37.5kWh x 30 x $0.08 = $900/tháng
- **Sản lượng điện mặt trời:** 8.55kW x 4.5h x 30 = 1,154kWh/tháng
- **Giảm nhập lưới:** 90% = $810 tiết kiệm/tháng
- **Tiết kiệm hàng năm:** $9,720

### Phân Tích ROI:
- **Thời gian hoàn vốn:** $20,000 / $9,720 = 2.06 năm
- **Tiết kiệm trong 25 năm:** $243,000 - $20,000 = $223,000
- **Tỷ suất hoàn vốn nội bộ (IRR):** 48.6%

## 4. Lợi Ích Môi Trường

### Giảm Dấu Chân Carbon:
- **Giảm CO2 hàng năm:** 13.9 tấn
- **Giảm CO2 trong 25 năm:** 347.5 tấn
- **Tương đương:** Trồng 346 cây xanh

### Độc Lập Năng Lượng:
- **Phụ thuộc lưới điện:** Giảm từ 100% xuống 10%
- **Bảo vệ khi mất điện:** 1.5 ngày điện dự phòng
- **An ninh năng lượng:** Chi phí ổn định trong 25 năm

## 5. Lịch Trình Triển Khai

### Giai đoạn 1: Lập kế hoạch (Tuần 1-2)
- Khảo sát địa điểm và đánh giá kết cấu
- Xin giấy phép
- Yêu cầu kết nối lưới điện
- Mua sắm thiết bị

### Giai đoạn 2: Lắp đặt (Tuần 3-4)  
- Chuẩn bị và lắp đặt khung đỡ mái
- Lắp đặt tấm pin và đi dây DC
- Lắp đặt biến tần và pin
- Kết nối lưới và vận hành thử

### Giai đoạn 3: Giám sát (Liên tục)
- Giám sát hiệu suất hệ thống
- Lên lịch bảo trì
- Theo dõi ROI
- Đề xuất tối ưu hóa`,
        materials: [
          'Phân tích chi tiết nhu cầu điện năng',
          'Lựa chọn thiết bị phù hợp với ngân sách',
          'Tính toán ROI và thời gian hoàn vốn',
          'Đánh giá tác động môi trường',
        ],
        expectedResults: 'Thiết kế hệ thống hoàn chỉnh với thông số kỹ thuật, chi phí và lịch trình triển khai',
      },
    ],
    realWorldApplications: [
      'Hệ thống năng lượng mặt trời cho gia đình và doanh nghiệp',
      'Trang trại năng lượng gió ngoài khơi và trên bờ',
      'Hệ thống lưới điện siêu nhỏ cho các cộng đồng vùng sâu vùng xa',
      'Tích hợp lưu trữ năng lượng với các nguồn tái tạo',
      'Công nghệ lưới điện thông minh và hệ thống phản ứng theo nhu cầu',
    ],
    resources: [
      {
        title: 'Chuyển đổi Năng lượng Toàn cầu của IRENA',
        url: 'https://www.irena.org/publications',
        type: 'research',
      },
      {
        title: 'Công cụ Tính toán Năng lượng Mặt trời',
        url: 'https://www.nrel.gov/analysis/tech-lcoe-documentation.html',
        type: 'tool',
      },
    ],
    caseStudies: [
      {
        title: 'Trang trại năng lượng mặt trời nổi lớn nhất của Sunseap tại Singapore',
        organization: 'Sunseap Group',
        problem:
          'Không gian đất hạn chế cho các công trình lắp đặt năng lượng mặt trời quy mô lớn trong môi trường đô thị dày đặc',
        solution: 'Phát triển trang trại năng lượng mặt trời nổi 60MW trên hồ chứa với công nghệ làm mát sáng tạo',
        impact: 'Công suất 60MW, hiệu quả cao hơn 15% nhờ làm mát bằng nước, cung cấp điện cho 16,000 hộ gia đình',
        innovations: [
          'Năng lượng mặt trời nổi giải quyết vấn đề khan hiếm đất đai ở các khu vực đô thị',
          'Làm mát bằng nước tăng hiệu quả tấm pin từ 10-15%',
          'Kỹ thuật sáng tạo cho phép năng lượng tái tạo trong các môi trường đầy thách thức',
        ],
      },
    ],
  },
  {
    id: 'smart-city-iot-solutions',
    title: 'Giải pháp IoT cho Thành phố Thông minh',
    description:
      'Xây dựng hệ thống thành phố thông minh với cảm biến IoT, phân tích dữ liệu và AI để giải quyết các vấn đề đô thị.',
    videoUrl: 'https://www.youtube.com/watch?v=pG0B3_XkPGA',
    imageUrl: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    objectives: [
      'Thiết kế mạng lưới cảm biến IoT cho các thành phố thông minh',
      'Phát triển hệ thống giám sát và phân tích thời gian thực',
      'Triển khai tối ưu hóa giao thông bằng AI',
      'Xây dựng các giải pháp giám sát môi trường',
      'Tạo nền tảng tương tác công dân',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT', 'Kinh nghiệm lập trình', 'Kiến thức cơ bản về cơ sở dữ liệu'],
    vietnamContext: {
      title: 'Giải pháp Đô thị Thông minh tại Việt Nam',
      content: [
        'Các thành phố lớn như TP.HCM, Hà Nội, Đà Nẵng đang tích cực triển khai các Trung tâm Điều hành Đô thị thông minh (IOC) để giám sát giao thông, an ninh, môi trường.',
        'Ứng dụng công nghệ trong quản lý giao thông thông minh, như hệ thống camera phạt nguội, điều khiển đèn tín hiệu linh hoạt, đang được áp dụng để giảm ùn tắc.',
        'Nhiều dự án bất động sản mới tại Việt Nam được quảng bá là "khu đô thị thông minh", tích hợp các giải pháp quản lý năng lượng, an ninh và tiện ích cho cư dân.',
        'Thách thức trong việc triển khai IoT cho thành phố thông minh ở Việt Nam bao gồm hạ tầng mạng, an ninh dữ liệu và sự đồng bộ giữa các cơ quan.',
      ],
    },
    careerConnect: {
      name: 'Chị Võ Ngọc Anh',
      title: 'Product Manager, Viettel Solutions',
      company: 'Viettel Solutions',
      imageUrl: 'https://i.pravatar.cc/150?u=vo-ngoc-anh',
      quote:
        'Chúng tôi không chỉ xây dựng phần mềm, chúng tôi xây dựng "bộ não" cho các thành phố. Việc phân tích dữ liệu từ hàng ngàn cảm biến IoT giúp chính quyền đưa ra quyết định nhanh chóng và chính xác hơn, từ việc điều tiết giao thông đến cảnh báo ô nhiễm. Đó là một công việc đầy thách thức nhưng cũng rất ý nghĩa.',
    },
    quizzes: [
      {
        question: 'Mạng LoRaWAN thường được sử dụng trong các ứng dụng IoT thành phố thông minh vì lý do gì?',
        options: [
          'Tốc độ truyền dữ liệu cực cao',
          'Vùng phủ sóng rộng và tiêu thụ năng lượng thấp',
          'Bảo mật tuyệt đối',
          'Chi phí rất đắt đỏ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'LoRaWAN (Long Range Wide Area Network) là công nghệ lý tưởng cho các ứng dụng IoT không đòi hỏi băng thông lớn nhưng cần vùng phủ sóng rộng và pin có tuổi thọ cao, ví dụ như cảm biến môi trường, cảm biến đỗ xe.',
      },
      {
        question: '"Điện toán biên" (Edge Computing) trong ngữ cảnh IoT có nghĩa là gì?',
        options: [
          'Chỉ xử lý dữ liệu ở trên mây (cloud)',
          'Xử lý dữ liệu ngay tại hoặc gần nơi dữ liệu được tạo ra (ví dụ: tại cảm biến)',
          'Lưu trữ tất cả dữ liệu trên điện thoại người dùng',
          'Một kỹ thuật mã hóa dữ liệu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Điện toán biên giúp giảm độ trễ và tiết kiệm băng thông bằng cách xử lý dữ liệu ngay tại "biên" của mạng, gần các thiết bị IoT, thay vì phải gửi tất cả dữ liệu thô lên máy chủ trung tâm để xử lý.',
      },
    ],
    faqs: [
      {
        question: 'Thành phố thông minh (Smart City) là gì?',
        answer:
          'Thành phố thông minh là một khu vực đô thị sử dụng các loại cảm biến và phương pháp điện tử khác nhau để thu thập dữ liệu. Thông tin chi tiết thu được từ dữ liệu đó được sử dụng để quản lý tài sản, tài nguyên và dịch vụ một cách hiệu quả; đổi lại, dữ liệu đó được sử dụng để cải thiện hoạt động trên toàn thành phố.',
      },
      {
        question: 'IoT đóng vai trò gì trong thành phố thông minh?',
        answer:
          'IoT (Internet of Things) là xương sống của thành phố thông minh. Nó bao gồm một mạng lưới các thiết bị được kết nối (cảm biến, camera, đồng hồ thông minh) thu thập và truyền dữ liệu thời gian thực về mọi thứ, từ luồng giao thông, chất lượng không khí đến việc sử dụng năng lượng. Dữ liệu này cho phép các nhà quản lý thành phố đưa ra quyết định sáng suốt.',
      },
      {
        question: 'Làm thế nào một thành phố thông minh có thể cải thiện cuộc sống của người dân?',
        answer:
          'Một thành phố thông minh có thể cải thiện cuộc sống bằng cách giảm tắc nghẽn giao thông thông qua quản lý giao thông thông minh, cải thiện chất lượng không khí bằng cách giám sát ô nhiễm, tăng cường an toàn công cộng với hệ thống giám sát thông minh và làm cho các dịch vụ của chính phủ hiệu quả và dễ tiếp cận hơn.',
      },
      {
        question: 'Những thách thức lớn nhất trong việc xây dựng thành phố thông minh ở Việt Nam là gì?',
        answer:
          'Những thách thức chính bao gồm nhu cầu đầu tư cơ sở hạ tầng lớn, đảm bảo an ninh mạng và quyền riêng tư dữ liệu, thiếu các tiêu chuẩn và quy định thống nhất, và cần có sự phối hợp đồng bộ giữa nhiều cơ quan chính phủ khác nhau.',
      },
      {
        question: 'Một ví dụ về ứng dụng IoT trong quản lý rác thải thông minh là gì?',
        answer: 'Các thùng rác công cộng được trang bị cảm biến siêu âm để đo mức độ đầy. Khi thùng rác gần đầy, nó sẽ tự động gửi tín hiệu đến trung tâm điều hành để xe thu gom rác đến đúng vị trí, thay vì đi theo một lịch trình cố định. Điều này giúp tối ưu hóa lộ trình, tiết kiệm nhiên liệu và nhân công.'
      },
      {
        question: 'Làm thế nào AI có thể giúp giảm ùn tắc giao thông?',
        answer: 'AI có thể phân tích dữ liệu từ camera và cảm biến giao thông trong thời gian thực để dự đoán các điểm có nguy cơ ùn tắc. Dựa trên đó, hệ thống có thể tự động điều chỉnh thời gian đèn tín hiệu, đề xuất các tuyến đường thay thế cho người lái xe qua ứng dụng bản đồ, và thông báo cho cảnh sát giao thông để điều tiết.'
      },
      {
        question: 'An ninh và quyền riêng tư là thách thức lớn như thế nào đối với thành phố thông minh?',
        answer: 'Đây là một trong những thách thức lớn nhất. Việc thu thập lượng lớn dữ liệu từ hàng triệu thiết bị làm dấy lên lo ngại về việc dữ liệu cá nhân có thể bị lạm dụng hoặc bị tấn công. Các thành phố thông minh phải đầu tư mạnh mẽ vào các giải pháp an ninh mạng, mã hóa dữ liệu và xây dựng các chính sách quản lý dữ liệu minh bạch để bảo vệ người dân.'
      },
      {
        question: 'Công nghệ "Digital Twin" (Bản sao số) được ứng dụng trong thành phố thông minh ra sao?',
        answer: 'Digital Twin là một mô hình ảo, chi tiết của một thành phố vật lý. Nó cho phép các nhà quy hoạch và quản lý mô phỏng các kịch bản khác nhau, ví dụ: "Điều gì sẽ xảy ra nếu chúng ta xây một cây cầu mới ở đây?" hoặc "Hệ thống thoát nước sẽ phản ứng thế nào với một trận mưa lớn?". Điều này giúp đưa ra quyết định tốt hơn mà không cần thử nghiệm tốn kém và rủi ro trong thế giới thực.'
      },
      {
        question: 'Người dân có thể tương tác với chính quyền trong một thành phố thông minh như thế nào?',
        answer: 'Thông qua các ứng dụng di động hoặc cổng thông tin của thành phố, người dân có thể báo cáo sự cố (ổ gà, đèn đường hỏng), thanh toán các dịch vụ công, góp ý cho các dự án quy hoạch, và nhận các cảnh báo khẩn cấp. Điều này tạo ra một kênh giao tiếp hai chiều hiệu quả giữa chính quyền và công dân.'
      },
      {
        question: 'Tại sao 5G lại quan trọng cho sự phát triển của thành phố thông minh?',
        answer: '5G cung cấp tốc độ cực cao, độ trễ cực thấp và khả năng kết nối một số lượng lớn thiết bị cùng lúc. Điều này rất quan trọng cho các ứng dụng đòi hỏi phản ứng tức thời như xe tự lái, điều khiển giao thông thông minh và các dịch vụ y tế từ xa.'
      }
    ],
    exercises: [
      {
        title: 'Hệ thống Quản lý Giao thông Thông minh',
        description: 'Thiết kế một hệ thống quản lý giao thông thông minh cho một khu vực đô thị',
        difficulty: 'Nâng cao',
        solution: `# Thiết kế Hệ thống Quản lý Giao thông Thông minh

## 1. Kiến trúc Hệ thống

### Mạng lưới Cảm biến IoT:
- **Camera giao thông:** Thị giác máy tính để phát hiện phương tiện
- **Cảm biến vòng từ:** Đếm xe và phát hiện tốc độ  
- **Cảm biến chất lượng không khí:** Giám sát khí thải từ giao thông
- **Cảm biến mức độ tiếng ồn:** Giám sát ô nhiễm tiếng ồn
- **Cảm biến thời tiết:** Tác động đến điều kiện giao thông

### Cơ sở hạ tầng Truyền thông:
- **5G/LTE:** Truyền dữ liệu băng thông cao
- **LoRaWAN:** Mạng cảm biến năng lượng thấp
- **Nút điện toán biên:** Xử lý và ra quyết định tại chỗ
- **Nền tảng đám mây:** Phân tích và quản lý trung tâm

## 2. Tối ưu hóa Giao thông bằng AI

### Phân tích Luồng Giao thông Thời gian thực:
\`\`\`python
import numpy as np
import tensorflow as tf
from sklearn.ensemble import RandomForestRegressor

class TrafficFlowPredictor:
    def __init__(self):
        self.model = self.build_lstm_model()
        self.rf_model = RandomForestRegressor(n_estimators=100)
    
    def build_lstm_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.LSTM(64, return_sequences=True, input_shape=(24, 10)),
            tf.keras.layers.LSTM(32),
            tf.keras.layers.Dense(16, activation='relu'),
            tf.keras.layers.Dense(1, activation='linear')
        ])
        model.compile(optimizer='adam', loss='mse', metrics=['mae'])
        return model
    
    def predict_traffic_volume(self, historical_data, weather_data, events_data):
        # Kết hợp nhiều nguồn dữ liệu
        features = np.concatenate([
            historical_data,  # Giao thông 24 giờ qua
            weather_data,     # Điều kiện thời tiết hiện tại
            events_data       # Các sự kiện/sự cố đã lên lịch
        ], axis=1)
        
        # Dự đoán LSTM cho chuỗi thời gian
        lstm_pred = self.model.predict(features)
        
        # Random Forest để nhận dạng mẫu phức tạp
        rf_pred = self.rf_model.predict(features.reshape(features.shape[0], -1))
        
        # Dự đoán kết hợp
        final_prediction = 0.7 * lstm_pred + 0.3 * rf_pred
        return final_prediction

class TrafficLightOptimizer:
    def __init__(self):
        self.q_learning_agent = self.build_q_agent()
    
    def optimize_signal_timing(self, traffic_data, pedestrian_data):
        # Trạng thái hiện tại: [số xe Bắc, Nam, Đông, Tây, người đi bộ]
        state = np.array([
            traffic_data['north_count'],
            traffic_data['south_count'], 
            traffic_data['east_count'],
            traffic_data['west_count'],
            pedestrian_data['waiting_count']
        ])
        
        # Lựa chọn hành động Q-learning
        action = self.q_learning_agent.get_action(state)
        
        # Hành động: [thời gian xanh B-N, Đ-T, pha cho người đi bộ]
        signal_timing = {
            'north_south_green': max(30, min(120, action[0])),
            'east_west_green': max(30, min(120, action[1])),
            'pedestrian_phase': action[2] > 0.5,
            'adaptive_timing': True
        }
        
        return signal_timing
\`\`\`

### Tối ưu hóa Lộ trình Động:
\`\`\`python
class DynamicRouting:
    def __init__(self, road_network):
        self.network = road_network
        self.traffic_conditions = {}
    
    def calculate_optimal_route(self, origin, destination, current_time):
        # Xem xét nhiều yếu tố để định tuyến
        factors = {
            'distance': 0.3,
            'current_traffic': 0.4,
            'predicted_traffic': 0.2,
            'road_quality': 0.1
        }
        
        # Dijkstra với trọng số động
        route = self.dijkstra_dynamic(origin, destination, factors)
        
        # Các tuyến đường thay thế để cân bằng tải
        alternative_routes = self.generate_alternatives(origin, destination, 3)
        
        return {
            'primary_route': route,
            'alternatives': alternative_routes,
            'estimated_time': self.calculate_travel_time(route),
            'fuel_efficiency': self.calculate_fuel_usage(route),
            'environmental_impact': self.calculate_emissions(route)
        }
\`\`\`

## 3. Giám sát Tác động Môi trường

### Tích hợp Chất lượng Không khí:
- **Cảm biến PM2.5/PM10:** Bụi mịn từ khí thải xe
- **Cảm biến NO2/CO:** Các chất ô nhiễm khí từ quá trình đốt cháy
- **Giám sát Ozone:** Sự hình thành chất ô nhiễm thứ cấp
- **Tính toán AQI thời gian thực:** Cảnh báo sức khỏe cộng đồng

### Các Can thiệp Thông minh:
- **Định giá động:** Phí tắc nghẽn trong giờ ô nhiễm cao điểm
- **Khu vực phát thải thấp:** Hạn chế quyền truy cập đối với các phương tiện gây ô nhiễm cao
- **Tối ưu hóa giao thông công cộng:** Tăng tần suất trong thời gian ô nhiễm cao
- **Giao thức khẩn cấp:** Hạn chế giao thông trong các cảnh báo chất lượng không khí

## 4. Chiến lược Triển khai

### Giai đoạn 1: Triển khai Thí điểm (3 tháng)
- **Vị trí:** Khu vực trung tâm 2km x 2km
- **Cơ sở hạ tầng:** 50 cảm biến, 10 nút biên, 1 trung tâm điều khiển
- **Tính năng:** Giám sát giao thông cơ bản và tín hiệu thích ứng
- **Ngân sách:** $500,000

### Giai đoạn 2: Mở rộng Toàn thành phố (12 tháng)
- **Phạm vi:** Khu vực đô thị 50km x 50km
- **Cơ sở hạ tầng:** 2,000 cảm biến, 200 nút biên, trung tâm chỉ huy tích hợp
- **Tính năng:** Tối ưu hóa AI đầy đủ, giám sát môi trường, ứng dụng công dân
- **Ngân sách:** $15,000,000

### Giai đoạn 3: Tích hợp Khu vực (24 tháng)
- **Phạm vi:** Điều phối đa thành phố
- **Tính năng:** Điều phối giao thông liên tỉnh, quản lý chất lượng không khí khu vực
- **AI nâng cao:** Học tập liên kết giữa các thành phố
- **Ngân sách:** $50,000,000

## 5. Kết quả Dự kiến

### Hiệu quả Giao thông:
- **Giảm thời gian di chuyển:** 25-30%
- **Tiêu thụ nhiên liệu:** Giảm 20%
- **Giảm tai nạn:** Ít hơn 40% sự cố giao thông
- **Phản ứng khẩn cấp:** Phản ứng của xe cứu thương/cứu hỏa nhanh hơn 50%

### Lợi ích Môi trường:
- **Khí thải CO2:** Giảm 35% từ luồng giao thông được tối ưu hóa
- **Cải thiện chất lượng không khí:** Điểm AQI tốt hơn 25%
- **Ô nhiễm tiếng ồn:** Giảm 20% ở các khu vực đô thị
- **Hiệu quả năng lượng:** Ít hơn 30% năng lượng cho cơ sở hạ tầng giao thông

### Tác động Kinh tế:
- **Tiết kiệm chi phí:** 10 triệu USD hàng năm từ việc giảm tắc nghẽn
- **Lợi ích sức khỏe:** Tiết kiệm 5 triệu USD từ chất lượng không khí tốt hơn
- **Tăng năng suất:** 20 triệu USD từ việc giảm thời gian đi lại
- **Thúc đẩy du lịch:** Tăng 15% từ trải nghiệm thành phố tốt hơn`,
        materials: [
          'Thiết kế mạng lưới cảm biến IoT toàn diện',
          'Triển khai các thuật toán tối ưu hóa giao thông bằng AI',
          'Bao gồm khả năng giám sát môi trường',
          'Lập kế hoạch chiến lược triển khai theo giai đoạn',
        ],
        expectedResults:
          'Kiến trúc hệ thống thành phố thông minh hoàn chỉnh với các thông số kỹ thuật và lộ trình triển khai',
      },
    ],
    realWorldApplications: [
      'Hệ thống quản lý giao thông thông minh cho các thành phố lớn',
      'Mạng lưới giám sát môi trường',
      'Tối ưu hóa quản lý chất thải',
      'Giải pháp đỗ xe thông minh',
      'Hệ thống điều phối ứng phó khẩn cấp',
    ],
    resources: [
      {
        title: 'Hội đồng Thành phố Thông minh',
        url: 'https://smartcitiescouncil.com',
        type: 'article',
      },
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Quốc gia Thông minh của Singapore',
        organization: 'Chính phủ Singapore',
        problem: 'Biến toàn bộ quốc gia thành một thành phố thông minh với đất đai hạn chế và mật độ dân số cao',
        solution:
          'Triển khai IoT toàn diện, các dịch vụ được hỗ trợ bởi AI và các nền tảng kỹ thuật số lấy công dân làm trung tâm',
        impact: 'Giảm 25% tắc nghẽn giao thông, cải thiện 30% chất lượng không khí, 95% sự hài lòng của công dân',
        innovations: [
          'Sự hỗ trợ toàn diện của chính phủ là điều cần thiết cho sự thành công của thành phố thông minh quy mô lớn',
          'Sự tham gia của công dân và bảo vệ quyền riêng tư là rất quan trọng để được chấp nhận',
          'Các hệ thống có khả năng tương tác cho phép tạo ra sức mạnh tổng hợp giữa các chức năng khác nhau của thành phố',
        ],
      },
    ],
  },
];

export const greenTechnologyModuleData: ModuleData = {
  id: 'green-technology',
  title: 'Green Technology & Sustainability',
  subtitle: 'Công nghệ Xanh và Phát triển Bền vững',
  description:
    'Khóa học toàn diện về công nghệ xanh và phát triển bền vững. Học năng lượng tái tạo, smart cities, carbon footprint management và sustainable solutions để xây dựng tương lai xanh cho thế hệ tương lai.',
  level: 'Trung bình',
  duration: '18-22 giờ',
  category: 'Science & Research',
  features: [
    'Renewable Energy Systems (solar, wind, hydro) và grid integration',
    'Smart Cities Technology và IoT environmental monitoring',
    'Carbon Footprint Management và sustainability metrics',
    'Circular Economy Models và waste-to-energy solutions',
  ],
  icon: '🌱',
  color: 'green',
  heroImageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
  objectives: [
    'Design và implement renewable energy systems',
    'Develop smart city solutions với IoT và environmental monitoring',
    'Calculate và reduce carbon footprint cho organizations',
    'Create sustainable business models và circular economy strategies',
  ],
  prerequisites: [
    'Kiến thức cơ bản về physics và engineering principles',
    'Hiểu biết về environmental science và climate change',
    'Quen thuộc với data analysis và IoT concepts',
  ],
  careerOutcomes: [
    'Renewable Energy Engineer và Sustainability Consultant',
    'Smart City Solutions Architect và Environmental Data Scientist',
    'CleanTech Entrepreneur và Carbon Footprint Analyst',
    'Green Building Designer và Environmental Policy Specialist',
  ],
  industryApplications: [
    'Renewable Energy Industry và Power Generation',
    'Smart Cities Development và Urban Planning',
    'Corporate Sustainability Programs và ESG Reporting',
    'Environmental Consulting và CleanTech Startups',
  ],
  marketDemand: {
    averageSalary: '25-45 triệu VNĐ',
    jobGrowth: '+31%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [], // This will be updated later
  lessons: greenTechLessons,
};
