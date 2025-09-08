import { BaseLessonData, VietnamContext, Exercise, CaseStudy, Resource } from '@/types/lesson-base';

export interface EnergyManagementLesson extends BaseLessonData {
  vietnamContext: VietnamContext;
  exercises: Exercise[];
  realWorldApplications: string[];
  caseStudies: CaseStudy[];
  resources: Resource[];
}

export const energyManagementLessons: EnergyManagementLesson[] = [
  {
    id: 'renewable-energy-systems-design',
    title: 'Thiết Kế Hệ Thống Năng Lượng Tái Tạo',
    description:
      'Học cách thiết kế, phân tích và triển khai các hệ thống năng lượng tái tạo với trọng tâm là năng lượng mặt trời, gió và các hệ thống hybrid phù hợp với điều kiện Việt Nam.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Uwmyx0vpL1U',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop',
    objectives: [
      'Thiết kế hệ thống quang điện mặt trời cho ứng dụng dân dụng và thương mại',
      'Tính toán tiềm năng năng lượng gió và kích thước tuabin',
      'Tối ưu hóa các hệ thống năng lượng tái tạo hybrid',
      'Thực hiện phân tích kinh tế và nghiên cứu khả thi',
      'Nắm vững các quy định về năng lượng tái tạo của Việt Nam',
    ],
    prerequisites: [
      'Kiến thức cơ bản về kỹ thuật điện',
      'Hiểu biết về các nguyên tắc cơ bản của năng lượng',
      'Quen thuộc với các công cụ tính toán',
    ],
    vietnamContext: {
      title: 'Bối cảnh năng lượng Việt Nam',
      content: [
        'Mục tiêu năng lượng tái tạo của Việt Nam (20% vào năm 2030)',
        'Chính sách giá FIT và đo đếm điện năng thuần',
        'Bức xạ mặt trời và mô hình gió theo vùng',
        'Yêu cầu và tiêu chuẩn kết nối lưới điện',
      ],
    },
    exercises: [
      {
        title: 'Dự Án Thiết Kế Hệ Thống Điện Mặt Trời',
        description: 'Thiết kế một hệ thống điện mặt trời áp mái hoàn chỉnh cho một nhà máy sản xuất tại Việt Nam',
        difficulty: 'Nâng cao',
      },
    ],
    realWorldApplications: [
      'Lắp đặt điện mặt trời thương mại',
      'Phát triển lưới điện vi mô cho các khu công nghiệp',
      'Chiến lược kinh doanh năng lượng tái tạo',
      'Lập kế hoạch tích hợp lưu trữ năng lượng',
    ],
    caseStudies: [
      {
        title: 'Trang Trại Điện Mặt Trời Dầu Tiếng',
        organization: 'Tập đoàn Dầu khí Việt Nam (PetroVietnam)',
        problem: 'Phát triển trang trại điện mặt trời nổi lớn nhất Đông Nam Á',
        solution: 'Lắp đặt điện mặt trời nổi 47.5 MW với giám sát tiên tiến, tích hợp lưới điện và bảo vệ môi trường',
        impact: 'Sản lượng hàng năm 63.3 GWh, giảm 30,000 tấn CO2/năm',
        innovations: ['Công nghệ PV nổi', 'Giám sát môi trường', 'Hệ thống ổn định lưới điện'],
      },
    ],
    resources: [
      {
        title: 'Chiến Lược Phát Triển Năng Lượng Tái Tạo Việt Nam',
        url: 'https://policy.asiapacificenergy.org/node/4340',
        type: 'Tài liệu',
      },
    ],
  },
  {
    id: 'smart-grid-technology-integration',
    title: 'Công Nghệ Lưới Điện Thông Minh & Tích Hợp Hệ Thống',
    description:
      'Khám phá các công nghệ lưới điện thông minh tiên tiến, hệ thống đáp ứng nhu cầu và các chiến lược hiện đại hóa lưới điện để tối ưu hóa phân phối và tiêu thụ năng lượng.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=o-ZYsfNuh7M',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu kiến trúc lưới điện thông minh và các giao thức truyền thông',
      'Triển khai các chương trình đáp ứng nhu cầu và quản lý phụ tải',
      'Triển khai hạ tầng đo đếm thông minh và phân tích dữ liệu',
      'Tích hợp các nguồn năng lượng phân tán (DER)',
      'Thiết kế các biện pháp an ninh mạng và khả năng phục hồi của lưới điện',
    ],
    prerequisites: [
      'Kiến thức về hệ thống điện',
      'Hiểu biết cơ bản về mạng truyền thông',
      'Quen thuộc với phân tích dữ liệu',
    ],
    vietnamContext: {
      title: 'Bối cảnh năng lượng Việt Nam',
      content: [
        'Kế hoạch hiện đại hóa lưới điện của Tập đoàn Điện lực Việt Nam (EVN)',
        'Các sáng kiến thành phố thông minh tại các khu đô thị lớn',
        'Thách thức của hạ tầng lưới điện cũ',
        'Tích hợp với các nguồn năng lượng tái tạo',
      ],
    },
    exercises: [
      {
        title: 'Thiết Kế Truyền Thông Lưới Điện Thông Minh',
        description: 'Thiết kế kiến trúc truyền thông cho một dự án thí điểm lưới điện thông minh tại TP.HCM',
        difficulty: 'Nâng cao',
      },
    ],
    realWorldApplications: [
      'Triển khai AMI (Hạ tầng đo đếm tiên tiến)',
      'Hệ thống tự động hóa phân phối',
      'Điều chỉnh điện áp và quản lý chất lượng điện năng',
      'Tối ưu hóa hệ thống quản lý sự cố',
    ],
    caseStudies: [
      {
        title: 'Thí Điểm Lưới Điện Thông Minh TP.HCM',
        organization: 'Tổng công ty Điện lực TP.HCM (EVN HCMC)',
        problem: 'Hiện đại hóa phân phối điện đô thị để cải thiện độ tin cậy và hiệu quả',
        solution:
          'Hạ tầng đo đếm tiên tiến, tự động hóa phân phối, chương trình đáp ứng nhu cầu, tích hợp năng lượng tái tạo',
        impact: 'Giảm 30% sự cố, cải thiện chất lượng điện áp, cho phép giảm 15% nhu cầu đỉnh điểm',
        innovations: [
          'Quản lý phân phối tiên tiến',
          'Giám sát lưới điện thời gian thực',
          'Nền tảng tương tác người tiêu dùng',
        ],
      },
    ],
    resources: [
      {
        title: 'Tiêu Chuẩn và Giao Thức Lưới Điện Thông Minh',
        url: 'https://www.nist.gov/programs-projects/smart-grid',
        type: 'Tham khảo',
      },
    ],
  },
  {
    id: 'energy-efficiency-management',
    title: 'Quản Lý Hiệu Quả Năng Lượng',
    description:
      'Triển khai các hệ thống quản lý năng lượng toàn diện, thực hiện kiểm toán năng lượng và phát triển các chiến lược cải thiện hiệu quả cho các cơ sở công nghiệp và thương mại.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=D11iFUw_ImU',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
    objectives: [
      'Thực hiện kiểm toán và đánh giá năng lượng toàn diện',
      'Triển khai hệ thống quản lý năng lượng ISO 50001',
      'Sử dụng các công cụ giám sát và phân tích năng lượng',
      'Tính toán ROI của các khoản đầu tư hiệu quả năng lượng',
      'Phát triển các chương trình thu hút nhân viên để bảo tồn năng lượng',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các quy trình công nghiệp',
      'Quen thuộc với các công cụ phân tích dữ liệu',
      'Kiến thức về phân tích chi phí-lợi ích',
    ],
    vietnamContext: {
      title: 'Bối cảnh năng lượng Việt Nam',
      content: [
        'Các sáng kiến của Chương trình Quốc gia về Sử dụng Năng lượng Tiết kiệm và Hiệu quả (VNEEP)',
        'Mô hình tiêu thụ năng lượng công nghiệp',
        'Ưu đãi của chính phủ cho hiệu quả năng lượng',
        'Tiêu chuẩn hiệu quả năng lượng ASEAN',
      ],
    },
    exercises: [
      {
        title: 'Dự Án Kiểm Toán Năng Lượng Công Nghiệp',
        description: 'Thực hiện kiểm toán năng lượng hoàn chỉnh cho một nhà máy dệt may Việt Nam',
        difficulty: 'Trung bình',
      },
    ],
    realWorldApplications: [
      'Chương trình quản lý năng lượng của doanh nghiệp',
      'Dự án chứng nhận công trình xanh',
      'Thu hồi nhiệt thải công nghiệp',
      'Dự án của công ty dịch vụ năng lượng (ESCO)',
    ],
    caseStudies: [
      {
        title: 'Tối Ưu Hóa Năng Lượng tại Thép Hòa Phát',
        organization: 'Tập đoàn Hòa Phát',
        problem: 'Giảm chi phí năng lượng trong hoạt động sản xuất thép',
        solution: 'Hệ thống quản lý năng lượng toàn diện, thu hồi nhiệt thải, tối ưu hóa quy trình, đào tạo nhân viên',
        impact: 'Đạt được giảm 25% chi phí năng lượng, cải thiện khả năng cạnh tranh, giảm 40,000 tấn CO2/năm',
        innovations: ['Hệ thống thu hồi nhiệt thải', 'Tự động hóa quy trình', 'Bảng điều khiển giám sát năng lượng'],
      },
    ],
    resources: [
      {
        title: 'Tiêu Chuẩn Quản Lý Năng Lượng ISO 50001',
        url: 'https://www.iso.org/iso-50001-energy-management.html',
        type: 'Tài liệu',
      },
    ],
  },
  {
    id: 'energy-policy-regulations',
    title: 'Chính Sách & Quy Định Năng Lượng',
    description:
      'Tìm hiểu bối cảnh phức tạp của chính sách, quy định và cơ chế thị trường năng lượng trong ngành năng lượng Việt Nam và bối cảnh quốc tế.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=G-jUB4CJ4YI',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu khung chính sách năng lượng và chiến lược phát triển của Việt Nam',
      'Nắm vững các yêu cầu quy định cho các dự án năng lượng',
      'Phân tích cơ chế thị trường năng lượng và cấu trúc giá',
      'Đánh giá tác động của các thỏa thuận quốc tế đối với chính sách trong nước',
      'Phát triển các chiến lược tuân thủ cho các doanh nghiệp năng lượng',
    ],
    prerequisites: ['Hiểu biết cơ bản về ngành năng lượng', 'Quen thuộc với các phương pháp phân tích chính sách'],
    vietnamContext: {
      title: 'Bối cảnh năng lượng Việt Nam',
      content: [
        'Chiến lược phát triển năng lượng quốc gia đến năm 2030',
        'Quy hoạch phát triển điện lực VIII (PDP 8)',
        'Cam kết trung hòa carbon vào năm 2050',
        'Sáng kiến kết nối lưới điện ASEAN',
      ],
    },
    exercises: [
      {
        title: 'Phân Tích Tác Động Chính Sách Năng Lượng',
        description:
          'Phân tích tác động của những thay đổi chính sách năng lượng tái tạo được đề xuất đối với ngành năng lượng mặt trời Việt Nam',
        difficulty: 'Trung bình',
      },
    ],
    realWorldApplications: [
      'Đánh giá khả thi dự án năng lượng',
      'Phát triển chiến lược quy định',
      'Quan hệ chính phủ và vận động hành lang',
      'Đánh giá rủi ro đầu tư',
    ],
    caseStudies: [
      {
        title: 'Sự Phát Triển Chính Sách FIT Năng Lượng Mặt Trời Việt Nam',
        organization: 'Bộ Công Thương (MOIT)',
        problem:
          'Thiết kế chính sách giá FIT hiệu quả để thúc đẩy phát triển năng lượng mặt trời trong khi quản lý ổn định lưới điện',
        solution:
          'Phương pháp tiếp cận FIT theo giai đoạn với tỷ lệ giảm dần, giới hạn công suất, yêu cầu mã lưới, chuyển đổi đấu thầu cạnh tranh',
        impact:
          'Đạt 16.5 GW công suất năng lượng mặt trời vào năm 2020, vượt mục tiêu tái tạo, thúc đẩy giảm chi phí công nghệ',
        innovations: [
          'Thiết kế chính sách thích ứng',
          'Lập kế hoạch tích hợp lưới điện',
          'Chuyển đổi dựa trên thị trường',
        ],
      },
    ],
    resources: [
      {
        title: 'Khung Quy Định Năng Lượng Việt Nam',
        url: 'https://www.iea.org/countries/vietnam',
        type: 'Tham khảo',
      },
    ],
  },
  {
    id: 'energy-storage-battery-technology',
    title: 'Công Nghệ Lưu Trữ Năng Lượng & Pin',
    description:
      'Khám phá các công nghệ lưu trữ năng lượng tiên tiến, hệ thống pin và các ứng dụng lưu trữ quy mô lưới điện để hỗ trợ tích hợp năng lượng tái tạo.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=2qa_kh8JEfk',
    imageUrl: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=1200&h=600&fit=crop',
    objectives: [
      'So sánh các công nghệ lưu trữ năng lượng và ứng dụng khác nhau',
      'Thiết kế hệ thống lưu trữ năng lượng bằng pin (BESS)',
      'Phân tích kinh tế lưu trữ và các cơ hội tạo giá trị gia tăng',
      'Triển khai hệ thống quản lý pin và các giao thức an toàn',
      'Đánh giá các công nghệ lưu trữ mới nổi và xu hướng thị trường',
    ],
    prerequisites: [
      'Nguyên tắc cơ bản về kỹ thuật điện',
      'Hiểu biết về hóa học pin cơ bản',
      'Quen thuộc với hoạt động của hệ thống điện',
    ],
    vietnamContext: {
      title: 'Bối cảnh năng lượng Việt Nam',
      content: [
        'Thách thức ổn định lưới điện với tỷ lệ thâm nhập năng lượng tái tạo cao',
        'Yêu cầu về nguồn điện dự phòng công nghiệp',
        'Phát triển hạ tầng sạc xe điện',
        'Ứng dụng lưới điện đảo tại các khu vực xa xôi',
      ],
    },
    exercises: [
      {
        title: 'Thiết Kế BESS và Phân Tích Kinh Tế',
        description:
          'Thiết kế hệ thống lưu trữ năng lượng bằng pin cho một cơ sở công nghiệp Việt Nam với tích hợp PV mặt trời',
        difficulty: 'Nâng cao',
      },
    ],
    realWorldApplications: [
      'Dịch vụ điều chỉnh tần số cho các nhà vận hành lưới điện',
      'Lắp đặt năng lượng mặt trời kết hợp lưu trữ',
      'Lưới điện vi mô cho các cơ sở quan trọng',
      'Tối ưu hóa sạc tại các trạm xe buýt điện',
    ],
    caseStudies: [
      {
        title: 'Thí Điểm Lưu Trữ Pin Hà Nội',
        organization: 'Đại học Quốc gia Hà Nội',
        problem: 'Chứng minh lợi ích của việc lưu trữ pin quy mô lưới điện trong mạng lưới phân phối đô thị',
        solution: 'BESS lithium-ion 5 MWh với điều khiển tiên tiến, khả năng dịch vụ lưới điện, thiết bị nghiên cứu',
        impact:
          'Chứng minh khả năng cạo đỉnh, hỗ trợ điện áp, tích hợp năng lượng tái tạo, cải thiện 15% hiệu quả lưới điện',
        innovations: ['Tích hợp lưới điện tiên tiến', 'Tối ưu hóa đa dịch vụ', 'Hệ thống điều khiển thời gian thực'],
      },
    ],
    resources: [
      {
        title: 'Lộ Trình Công Nghệ Lưu Trữ Năng Lượng',
        url: 'https://www.irena.org/publications/2017/Oct/Electricity-storage-and-renewables-costs-and-markets',
        type: 'Nghiên cứu',
      },
    ],
  },
];
