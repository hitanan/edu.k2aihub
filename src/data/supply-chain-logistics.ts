import { BaseLessonData } from '@/types/lesson-base';
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
  },
];
