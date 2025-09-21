import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export interface SupplyChainLogisticsLessonType extends BaseLessonData {
  logisticsFramework?: 'SCOR' | 'APICS' | 'Lean Logistics';
}

export const supplyChainLogisticsLessons: SupplyChainLogisticsLessonType[] = [
  {
    id: 'global-supply-chain-management',
    title: 'Quản lý Chuỗi Cung ứng Toàn cầu',
    description:
      'Khám phá hệ thống quản lý chuỗi cung ứng toàn cầu, với trọng tâm là vai trò của Việt Nam như một trung tâm sản xuất và xuất khẩu mới nổi.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fJjSYbquvtg',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    logisticsFramework: 'SCOR',
    objectives: [
      'Hiểu cấu trúc và động lực của chuỗi cung ứng toàn cầu.',
      'Phân tích vai trò và vị thế của Việt Nam trong chuỗi cung ứng.',
      'Sử dụng công nghệ để tối ưu hóa hoạt động chuỗi cung ứng.',
      'Quản lý rủi ro và gián đoạn trong chuỗi cung ứng.',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về hoạt động kinh doanh.',
      'Làm quen với Excel và các công cụ phân tích dữ liệu.',
    ],
    exercises: [
      {
        title: 'Đánh giá Rủi ro Chuỗi Cung ứng',
        description:
          'Thực hành đánh giá các rủi ro và lỗ hổng trong một chuỗi cung ứng giả định của một công ty sản xuất tại Việt Nam.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các nhà cung cấp chính và các kênh phân phối.',
          'Vẽ sơ đồ chuỗi cung ứng để tìm ra các điểm nghẽn (bottlenecks).',
          'Đánh giá các rủi ro về địa chính trị, kinh tế và thiên tai.',
          'Xây dựng các chiến lược giảm thiểu rủi ro (ví dụ: đa dạng hóa nhà cung cấp).',
        ],
        expectedResults: 'Một báo cáo đánh giá rủi ro hoàn chỉnh với các chiến lược giảm thiểu khả thi.',
      },
    ],
    realWorldApplications: [
      'Quản lý gián đoạn chuỗi cung ứng do đại dịch.',
      'Tối ưu hóa mức tồn kho để giảm chi phí.',
      'Đàm phán với các nhà cung cấp quốc tế.',
      'Thực hiện sản xuất "just-in-time".',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Chuỗi Cung ứng Toàn cầu của VinFast',
        organization: 'VinFast Auto',
        problem:
          'Xây dựng một chuỗi cung ứng toàn cầu từ con số không cho việc sản xuất xe điện, một ngành đòi hỏi công nghệ cao và nhiều nhà cung cấp phức tạp.',
        solution:
          'Hợp tác chiến lược với các nhà cung cấp hàng đầu thế giới, chuyển giao công nghệ, đồng thời phát triển các nhà cung cấp phụ trợ trong nước.',
        impact:
          'Ra mắt thành công các dòng xe điện với cơ cấu chi phí cạnh tranh, từng bước thâm nhập thị trường quốc tế.',
        innovations: ['Chiến lược tích hợp dọc', 'Hợp tác cung ứng pin', 'Sản xuất thông minh'],
      },
    ],
    vietnamContext: {
      title: 'Việt Nam: Mắt xích mới trong Chuỗi Cung ứng Toàn cầu',
      content: [
        'Việt Nam đang nổi lên như một trung tâm sản xuất quan trọng của thế giới, đặc biệt trong các ngành điện tử, dệt may và da giày.',
        'Sự dịch chuyển chuỗi cung ứng ra khỏi Trung Quốc (China+1) đã tạo ra cơ hội lớn cho các nhà sản xuất tại Việt Nam.',
        'Việc tham gia các hiệp định thương mại tự do như EVFTA, CPTPP giúp Việt Nam hội nhập sâu hơn vào chuỗi cung ứng toàn cầu.',
      ],
    },
    careerConnect: {
      name: 'Bà Nguyễn Thị Phương Thảo',
      title: 'Chủ tịch HĐQT',
      company: 'VietJet Air & Sovico Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-phuong-thao',
      quote:
        'Logistics và hàng không là những mạch máu của nền kinh tế. Tối ưu hóa chuỗi cung ứng không chỉ giúp doanh nghiệp tiết kiệm chi phí mà còn nâng cao năng lực cạnh tranh của cả quốc gia.',
    },
    quizzes: [
      {
        question: 'Chiến lược "China + 1" có ý nghĩa gì đối với Việt Nam?',
        options: [
          'Một chiến lược hợp tác giữa Trung Quốc và Việt Nam',
          'Các công ty đa quốc gia tìm kiếm một địa điểm sản xuất thứ hai ngoài Trung Quốc để đa dạng hóa rủi ro',
          'Việt Nam chỉ nhập khẩu hàng hóa từ Trung Quốc',
          'Một chính sách thương mại của Trung Quốc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'China + 1 là chiến lược của các công ty toàn cầu nhằm giảm sự phụ thuộc vào một quốc gia sản xuất duy nhất (Trung Quốc) bằng cách thiết lập thêm hoạt động ở một quốc gia khác, và Việt Nam là một trong những điểm đến hàng đầu.',
      },
    ],
    faqs: [
      {
        question: 'Chuỗi cung ứng là gì và tại sao nó quan trọng?',
        answer:
          'Chuỗi cung ứng là mạng lưới bao gồm các tổ chức, con người, hoạt động, thông tin và nguồn lực liên quan đến việc di chuyển một sản phẩm hoặc dịch vụ từ nhà cung cấp đến khách hàng. Quản lý tốt chuỗi cung ứng giúp giảm chi phí, tăng hiệu quả và nâng cao sự hài lòng của khách hàng, là yếu tố sống còn của mọi doanh nghiệp.',
      },
      {
        question: 'Vai trò của Việt Nam trong chuỗi cung ứng toàn cầu hiện nay là gì?',
        answer:
          'Việt Nam đang trở thành một "công xưởng mới" của thế giới, đặc biệt trong các lĩnh vực sản xuất điện tử, dệt may, và đồ gỗ. Nhờ chiến lược "China + 1", nhiều tập đoàn lớn đang dịch chuyển sản xuất sang Việt Nam để đa dạng hóa rủi ro, tạo ra cơ hội lớn cho nền kinh tế và lao động trong nước.',
      },
      {
        question: 'Mô hình SCOR là gì?',
        answer:
          'SCOR (Supply Chain Operations Reference) là một mô hình tham chiếu chuẩn hóa các quy trình trong chuỗi cung ứng, bao gồm Plan (Kế hoạch), Source (Nguồn cung), Make (Sản xuất), Deliver (Giao hàng), Return (Trả hàng), và Enable (Hỗ trợ). Nó giúp các công ty đánh giá và cải thiện hiệu suất chuỗi cung ứng của mình.',
      },
      {
        question: 'Những rủi ro lớn nhất trong chuỗi cung ứng toàn cầu là gì?',
        answer:
          'Các rủi ro bao gồm gián đoạn do thiên tai, bất ổn địa chính trị (chiến tranh, biểu tình), biến động kinh tế (lạm phát, suy thoái), rủi ro từ nhà cung cấp (phá sản, chất lượng kém), và các cuộc tấn công mạng. Đại dịch COVID-19 là một ví dụ điển hình về một rủi ro gây gián đoạn trên quy mô toàn cầu.',
      },
      {
        question: 'Công nghệ giúp tối ưu hóa chuỗi cung ứng như thế nào?',
        answer:
          'Công nghệ đóng vai trò then chốt qua việc sử dụng AI để dự báo nhu cầu, IoT để theo dõi hàng hóa theo thời gian thực, Blockchain để tăng cường tính minh bạch và truy xuất nguồn gốc, và các phần mềm quản lý (WMS, TMS) để tự động hóa các quy trình phức tạp.',
      },
      {
        question: 'Sản xuất "Just-in-Time" (JIT) là gì?',
        answer:
          'JIT là một chiến lược sản xuất và quản lý tồn kho, trong đó nguyên vật liệu chỉ được đặt hàng và nhận về ngay khi cần thiết cho quá trình sản xuất. Mục tiêu là giảm thiểu chi phí lưu kho và lãng phí, nhưng nó đòi hỏi một chuỗi cung ứng rất đáng tin cậy và được đồng bộ hóa cao.',
      },
      {
        question: 'Điểm nghẽn (bottleneck) trong chuỗi cung ứng là gì?',
        answer:
          'Điểm nghẽn là một công đoạn trong chuỗi cung ứng có công suất thấp hơn các công đoạn khác, làm chậm toàn bộ dòng chảy của hàng hóa. Ví dụ, một cảng biển bị tắc nghẽn có thể là một điểm nghẽn lớn, gây trì hoãn cho hàng ngàn container.',
      },
      {
        question: 'Sự khác biệt giữa Logistics và Quản lý chuỗi cung ứng là gì?',
        answer:
          'Logistics là một phần của quản lý chuỗi cung ứng, tập trung vào việc di chuyển và lưu trữ hàng hóa một cách hiệu quả. Quản lý chuỗi cung ứng có phạm vi rộng hơn, bao gồm tất cả các quy trình từ tìm nguồn cung ứng nguyên vật liệu, sản xuất, đến phân phối sản phẩm cuối cùng cho người tiêu dùng và cả dịch vụ sau bán hàng.',
      },
      {
        question: 'Các hiệp định thương mại như EVFTA và CPTPP ảnh hưởng đến chuỗi cung ứng Việt Nam ra sao?',
        answer:
          'Các hiệp định này giúp giảm hoặc loại bỏ thuế quan, tạo điều kiện cho hàng hóa Việt Nam xuất khẩu sang các thị trường lớn với giá cạnh tranh hơn. Chúng cũng thúc đẩy đầu tư nước ngoài vào lĩnh vực sản xuất và logistics tại Việt Nam, giúp nâng cấp và hội nhập sâu hơn vào chuỗi cung ứng toàn cầu.',
      },
      {
        question: 'Một chuỗi cung ứng "kiên cường" (resilient) có đặc điểm gì?',
        answer:
          'Một chuỗi cung ứng kiên cường có khả năng dự đoán, chống chọi và phục hồi nhanh chóng sau các sự cố gián đoạn. Các đặc điểm chính bao gồm sự đa dạng hóa (nhà cung cấp, tuyến đường vận chuyển), tính minh bạch cao (khả năng theo dõi hàng hóa), sự linh hoạt và hợp tác chặt chẽ giữa các đối tác.',
      },
    ],
  },
  {
    id: 'warehouse-inventory-technology',
    title: 'Công nghệ Kho bãi & Quản lý Tồn kho',
    description:
      'Tìm hiểu các công nghệ tiên tiến trong quản lý kho bãi và tối ưu hóa hàng tồn kho, từ Hệ thống Quản lý Kho (WMS) đến các robot tự hành.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=924DW-pqjwA',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    logisticsFramework: 'Lean Logistics',
    objectives: [
      'Hiểu vai trò của kho bãi hiện đại trong chuỗi cung ứng.',
      'Làm quen với Hệ thống Quản lý Kho (WMS) và các chức năng của nó.',
      'Khám phá các công nghệ tự động hóa như robot tự hành (AGV/AMR), hệ thống lưu trữ và truy xuất tự động (AS/RS).',
      'Áp dụng các phương pháp quản lý tồn kho (FIFO, LIFO, JIT).',
    ],
    prerequisites: ["Hoàn thành bài 'Quản lý Chuỗi Cung ứng Toàn cầu'"],
    exercises: [
      {
        title: 'Thiết kế Bố cục Kho hàng Tối ưu',
        description:
          'Vẽ một sơ đồ bố cục (layout) cho một kho hàng thương mại điện tử giả định để tối ưu hóa quy trình lấy hàng.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các khu vực chính: nhận hàng, lưu trữ, đóng gói, và xuất hàng.',
          'Sắp xếp các mặt hàng bán chạy (fast-moving items) ở vị trí dễ tiếp cận nhất.',
          'Thiết kế các lối đi rõ ràng để robot hoặc nhân viên có thể di chuyển hiệu quả.',
          'Cân nhắc các yếu tố về an toàn và phòng cháy chữa cháy.',
        ],
        expectedResults:
          'Một bản vẽ sơ đồ kho hàng hợp lý, giúp giảm thiểu thời gian và quãng đường di chuyển khi xử lý đơn hàng.',
      },
    ],
    realWorldApplications: [
      'Các trung tâm hoàn tất đơn hàng (fulfillment center) của Tiki, Shopee, Lazada.',
      'Kho lạnh để bảo quản thực phẩm và dược phẩm.',
      'Hệ thống kho tự động trong các nhà máy sản xuất.',
    ],
    caseStudies: [
      {
        title: 'Tự động hóa tại Trung tâm Phân loại của Giao Hàng Nhanh',
        organization: 'Giao Hàng Nhanh (GHN)',
        problem:
          'Xử lý hàng triệu bưu kiện mỗi ngày với tốc độ nhanh và độ chính xác cao, đặc biệt trong các mùa cao điểm mua sắm.',
        solution:
          'Đầu tư vào hệ thống băng chuyền phân loại tự động, có khả năng đọc mã vạch và chia chọn bưu kiện đến các tuyến giao hàng khác nhau một cách tự động.',
        impact:
          'Tăng công suất xử lý lên gấp nhiều lần, giảm tỷ lệ sai sót, và rút ngắn thời gian giao hàng toàn trình.',
        innovations: ['Hệ thống phân loại tự động', 'Xử lý dữ liệu lớn', 'Tối ưu hóa tuyến đường'],
      },
    ],
    vietnamContext: {
      title: 'Sự bùng nổ của Logistics Thương mại Điện tử tại Việt Nam',
      content: [
        'Sự tăng trưởng mạnh mẽ của thương mại điện tử đã tạo ra nhu cầu khổng lồ về các kho bãi hiện đại và dịch vụ hoàn tất đơn hàng (fulfillment).',
        'Các công ty logistics lớn như Giao Hàng Nhanh, J&T Express, BEST Express đang chạy đua đầu tư vào các trung tâm phân loại tự động quy mô lớn.',
        'Nhu cầu về kho lạnh để phục vụ giao hàng thực phẩm tươi sống và bách hóa online cũng đang tăng cao.',
      ],
    },
    careerConnect: {
      name: 'Lương Duy Hoài',
      title: 'Nhà sáng lập & CEO',
      company: 'Giao Hàng Nhanh (GHN)',
      imageUrl: 'https://i.pravatar.cc/150?u=luong-duy-hoai',
      quote:
        'Tại Việt Nam, logistics không còn là ngành dịch vụ phụ trợ, mà đã trở thành một ngành công nghệ. Chúng tôi đầu tư vào dữ liệu và tự động hóa để giải quyết bài toán giao nhận ở một trong những thị trường phức tạp nhất.',
    },
    quizzes: [
      {
        question:
          'Phương pháp quản lý tồn kho nào giả định rằng các mặt hàng được nhập vào kho trước sẽ được xuất ra trước?',
        options: [
          'LIFO (Last-In, First-Out)',
          'JIT (Just-In-Time)',
          'FIFO (First-In, First-Out)',
          'EOQ (Economic Order Quantity)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'FIFO (Nhập trước, Xuất trước) là phương pháp phổ biến, đặc biệt quan trọng đối với các sản phẩm có hạn sử dụng như thực phẩm và dược phẩm, đảm bảo rằng các lô hàng cũ hơn được bán trước.',
      },
    ],
    faqs: [
      {
        question: 'Hệ thống Quản lý Kho (WMS) là gì?',
        answer:
          'WMS (Warehouse Management System) là một phần mềm giúp tối ưu hóa mọi hoạt động trong kho hàng, từ việc nhận hàng, cất giữ, quản lý vị trí, đến việc lấy hàng và đóng gói. Nó giống như "bộ não" của kho hàng, giúp tăng độ chính xác, hiệu quả và giảm thiểu sai sót.',
      },
      {
        question: 'Robot tự hành (AGV/AMR) khác nhau như thế nào?',
        answer:
          'AGV (Automated Guided Vehicle) thường di chuyển theo các đường dẫn được định sẵn (vạch từ, mã QR). Trong khi đó, AMR (Autonomous Mobile Robot) thông minh hơn, có thể tự lập bản đồ kho hàng và linh hoạt tìm đường đi ngắn nhất để tránh vật cản. AMR đại diện cho thế hệ tự động hóa kho bãi mới, linh hoạt và dễ triển khai hơn.',
      },
      {
        question: 'Sự khác biệt giữa kho hàng (warehouse) và trung tâm hoàn tất đơn hàng (fulfillment center) là gì?',
        answer:
          'Kho hàng truyền thống chủ yếu tập trung vào việc lưu trữ hàng hóa với số lượng lớn (pallets). Trung tâm hoàn tất đơn hàng được thiết kế cho thương mại điện tử, tập trung vào việc xử lý các đơn hàng nhỏ, lẻ (individual items) một cách nhanh chóng, bao gồm cả việc lấy hàng, đóng gói và giao cho các đơn vị vận chuyển.',
      },
      {
        question: '"Cross-docking" là gì?',
        answer:
          'Cross-docking là một kỹ thuật logistics mà ở đó hàng hóa từ nhà cung cấp được chuyển trực tiếp từ xe tải đến sang xe tải đi giao hàng mà không cần lưu kho. Kỹ thuật này giúp giảm đáng kể thời gian lưu kho và chi phí, thường được áp dụng cho các mặt hàng có nhu cầu cao và ổn định.',
      },
      {
        question: 'Chuỗi cung ứng lạnh (cold chain) là gì?',
        answer:
          'Là một chuỗi cung ứng được kiểm soát nhiệt độ không gián đoạn, được sử dụng để vận chuyển và lưu trữ các sản phẩm nhạy cảm với nhiệt độ như thực phẩm tươi sống, vắc-xin, và dược phẩm. Việc duy trì nhiệt độ ổn định trong suốt quá trình là cực kỳ quan trọng để đảm bảo chất lượng và an toàn sản phẩm.',
      },
      {
        question: 'Mô hình EOQ (Economic Order Quantity) là gì?',
        answer:
          'EOQ là một công thức tính toán số lượng đặt hàng lý tưởng mà một công ty nên mua để giảm thiểu tổng chi phí tồn kho, bao gồm chi phí đặt hàng và chi phí lưu kho. Mục tiêu là tìm ra điểm cân bằng để không đặt hàng quá thường xuyên (tốn chi phí đặt hàng) và cũng không lưu trữ quá nhiều hàng (tốn chi phí lưu kho).',
      },
      {
        question: 'IoT (Internet of Things) được ứng dụng trong quản lý kho như thế nào?',
        answer:
          'IoT được sử dụng rộng rãi trong kho thông minh. Các cảm biến IoT trên kệ hàng và sản phẩm có thể theo dõi mức tồn kho theo thời gian thực, giám sát điều kiện môi trường (nhiệt độ, độ ẩm), và cung cấp dữ liệu cho robot tự hành để tối ưu hóa đường đi. Điều này giúp tăng cường khả năng hiển thị và tự động hóa.',
      },
      {
        question: 'Giao hàng chặng cuối (last-mile delivery) là gì và tại sao nó lại thách thức?',
        answer:
          'Là bước cuối cùng của quá trình giao hàng, từ trung tâm phân phối đến tay người tiêu dùng cuối cùng. Đây là chặng tốn kém và phức tạp nhất do phải xử lý nhiều đơn hàng nhỏ lẻ đến nhiều địa chỉ khác nhau trong khu vực đô thị đông đúc, đối mặt với các vấn đề như kẹt xe, khó tìm địa chỉ, và khách hàng không có nhà.',
      },
      {
        question: 'Dark store (cửa hàng không khách) là gì?',
        answer:
          'Dark store là một loại hình trung tâm phân phối được bố trí giống như một siêu thị thông thường nhưng không mở cửa cho công chúng. Nhân viên sẽ lấy hàng từ các kệ để hoàn thành các đơn đặt hàng online. Mô hình này giúp các nhà bán lẻ đẩy nhanh tốc độ giao hàng trong khu vực đô thị.',
      },
      {
        question: 'Trí tuệ nhân tạo (AI) giúp quản lý tồn kho như thế nào?',
        answer:
          'AI có thể phân tích dữ liệu lịch sử bán hàng, xu hướng thị trường, và thậm chí cả các yếu tố bên ngoài như thời tiết để dự báo nhu cầu một cách chính xác hơn. Điều này giúp doanh nghiệp tối ưu hóa mức tồn kho, tránh tình trạng hết hàng hoặc tồn kho quá nhiều, và tự động đề xuất các đơn đặt hàng bổ sung.',
      },
    ],
  },
];

export const supplyChainLogisticsModuleData: ModuleData = {
  id: 'supply-chain-logistics',
  title: 'Supply Chain & Logistics',
  subtitle: 'Quản lý chuỗi cung ứng thông minh',
  description:
    'Khám phá advanced supply chain management techniques, từ inventory optimization đến global distribution strategies trong digital age.',
  level: 'Nâng cao',
  duration: '18-24 giờ',
  category: 'Business Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
  features: [
    'Supply Chain Optimization Algorithms',
    'Inventory Management Systems',
    'Distribution Network Design',
    'Supplier Relationship Management',
    'Demand Forecasting & Planning',
    'Warehouse Management Technology',
    'Transportation Optimization',
    'Risk Management & Resilience',
  ],
  icon: '🚛',
  color: 'from-orange-600 to-amber-600',
  objectives: [
    'Master supply chain optimization strategies và algorithms',
    'Implement advanced inventory management systems',
    'Design efficient distribution networks',
    'Develop demand forecasting capabilities',
    'Create supplier relationship management frameworks',
    'Build resilient supply chain architectures',
  ],
  prerequisites: [
    'Business operations understanding',
    'Basic data analysis skills',
    'Project management experience',
    'Strategic thinking capabilities',
  ],
  careerOutcomes: [
    'Supply Chain Manager (45-80 triệu VNĐ)',
    'Logistics Technology Specialist (35-65 triệu VNĐ)',
    'Operations Research Analyst (40-75 triệu VNĐ)',
    'Procurement Technology Manager (45-85 triệu VNĐ)',
    'Distribution Network Designer (40-70 triệu VNĐ)',
    'Supply Chain Data Scientist (50-90 triệu VNĐ)',
    'Warehouse Automation Engineer (45-80 triệu VNĐ)',
    'Supply Chain Consultant (50-100 triệu VNĐ)',
  ],
  industryApplications: [
    'Manufacturing supply chain optimization',
    'E-commerce fulfillment networks',
    'Retail inventory management',
    'Automotive supply chains',
    'Food & beverage distribution',
    'Pharmaceutical cold chain',
    'Fashion & apparel logistics',
    'Construction material supply',
    'Electronics component sourcing',
    'Healthcare supply management',
  ],
  marketDemand: {
    averageSalary: '40-100 triệu VNĐ',
    jobGrowth: '65% Growth',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.DataScienceAnalytics, K2Module.ProfessionalSkills, K2Module.DigitalMarketing],
  lessons: supplyChainLogisticsLessons,
};
