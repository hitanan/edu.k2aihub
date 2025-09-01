import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';

const renewableEnergyGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'renewable-energy-manager');
const smartGridGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'ev-charging-network');
const climateGame = EDUCATIONAL_GAMES_DATA.find((g) => g.id === 'climate-modeling');

export interface EnergyManagementLesson extends BaseLessonData {
  energyCategory: 'Tái tạo' | 'Lưới điện thông minh' | 'Hiệu quả' | 'Chính sách' | 'Lưu trữ';
  techComplexity: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  vietnameseEnergyContext: string[];
  industryApplications: string[];
  sustainabilityFocus: string[];
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
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
    energyCategory: 'Tái tạo',
    techComplexity: 'Nâng cao',
    relatedGames: renewableEnergyGame
      ? [
          {
            id: renewableEnergyGame.id,
            name: renewableEnergyGame.title,
            description: renewableEnergyGame.description,
          },
        ]
      : [],
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
    vietnameseEnergyContext: [
      'Mục tiêu năng lượng tái tạo của Việt Nam (20% vào năm 2030)',
      'Chính sách giá FIT và đo đếm điện năng thuần',
      'Bức xạ mặt trời và mô hình gió theo vùng',
      'Yêu cầu và tiêu chuẩn kết nối lưới điện',
    ],
    industryApplications: [
      'Lắp đặt điện mặt trời áp mái',
      'Tự cung cấp năng lượng cho khu công nghiệp',
      'Dự án điện khí hóa nông thôn',
      'Phát triển trang trại điện mặt trời nổi',
    ],
    sustainabilityFocus: [
      'Chiến lược giảm thiểu dấu chân carbon',
      'Đánh giá vòng đời của các hệ thống tái tạo',
      'Giảm thiểu tác động môi trường',
      'Nguyên tắc kinh tế tuần hoàn trong ngành năng lượng',
    ],
    exercises: [
      {
        title: 'Dự Án Thiết Kế Hệ Thống Điện Mặt Trời',
        description: 'Thiết kế một hệ thống điện mặt trời áp mái hoàn chỉnh cho một nhà máy sản xuất tại Việt Nam',
        difficulty: 'Nâng cao',
        materials: ['Phần mềm PVsyst', 'Dữ liệu thời tiết', 'Hồ sơ phụ tải điện', 'Mô hình kinh tế'],
        procedure: [
          'Phân tích mô hình tiêu thụ năng lượng của nhà máy',
          'Đánh giá diện tích mái và các hạn chế về bóng râm',
          'Xác định kích thước dãy PV và cấu hình biến tần',
          'Tính toán sản lượng năng lượng và lợi nhuận tài chính',
          'Chuẩn bị đề xuất kỹ thuật và hồ sơ kinh doanh',
        ],
        expectedResults: 'Thiết kế hệ thống điện mặt trời hoàn chỉnh với thông số kỹ thuật và phân tích ROI',
        solution:
          'Thiết kế hệ thống được tối ưu hóa cân bằng giữa sản lượng năng lượng, hiệu quả chi phí và yêu cầu tích hợp lưới điện',
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
    energyCategory: 'Lưới điện thông minh',
    techComplexity: 'Nâng cao',
    relatedGames: smartGridGame
      ? [
          {
            id: smartGridGame.id,
            name: smartGridGame.title,
            description: smartGridGame.description,
          },
        ]
      : [],
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
    vietnameseEnergyContext: [
      'Kế hoạch hiện đại hóa lưới điện của Tập đoàn Điện lực Việt Nam (EVN)',
      'Các sáng kiến thành phố thông minh tại các khu đô thị lớn',
      'Thách thức của hạ tầng lưới điện cũ',
      'Tích hợp với các nguồn năng lượng tái tạo',
    ],
    industryApplications: [
      'Dự án hiện đại hóa lưới điện của các công ty điện lực',
      'Chương trình đáp ứng nhu cầu công nghiệp',
      'Quản lý năng lượng thành phố thông minh',
      'Hệ thống điều khiển lưới điện vi mô',
    ],
    sustainabilityFocus: [
      'Tối ưu hóa hiệu quả lưới điện',
      'Chiến lược giảm nhu cầu đỉnh điểm',
      'Tạo điều kiện tích hợp năng lượng tái tạo',
      'Giảm thiểu lãng phí năng lượng',
    ],
    exercises: [
      {
        title: 'Thiết Kế Truyền Thông Lưới Điện Thông Minh',
        description: 'Thiết kế kiến trúc truyền thông cho một dự án thí điểm lưới điện thông minh tại TP.HCM',
        difficulty: 'Nâng cao',
        materials: ['Phần mềm mô phỏng lưới điện', 'Tài liệu tham khảo giao thức truyền thông', 'Khung an ninh mạng'],
        procedure: [
          'Lập bản đồ hạ tầng lưới điện hiện có và nhu cầu truyền thông',
          'Chọn các công nghệ truyền thông phù hợp (cáp quang, không dây, PLC)',
          'Thiết kế hệ thống thu thập và quản lý dữ liệu',
          'Triển khai các biện pháp và giao thức an ninh mạng',
          'Phát triển quy trình kiểm tra và xác nhận',
        ],
        expectedResults: 'Kế hoạch kiến trúc truyền thông hoàn chỉnh với các cân nhắc về bảo mật và độ tin cậy',
        solution: 'Hệ thống truyền thông hybrid cân bằng giữa hiệu suất, chi phí và yêu cầu bảo mật',
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
    energyCategory: 'Hiệu quả',
    techComplexity: 'Trung bình',
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
    vietnameseEnergyContext: [
      'Các sáng kiến của Chương trình Quốc gia về Sử dụng Năng lượng Tiết kiệm và Hiệu quả (VNEEP)',
      'Mô hình tiêu thụ năng lượng công nghiệp',
      'Ưu đãi của chính phủ cho hiệu quả năng lượng',
      'Tiêu chuẩn hiệu quả năng lượng ASEAN',
    ],
    industryApplications: [
      'Tối ưu hóa quy trình sản xuất',
      'Hệ thống quản lý năng lượng tòa nhà',
      'Cải thiện hiệu quả hệ thống HVAC',
      'Nâng cấp hệ thống chiếu sáng',
    ],
    sustainabilityFocus: [
      'Chiến lược giảm tiêu thụ năng lượng',
      'Giảm thiểu phát thải carbon',
      'Kỹ thuật tối ưu hóa tài nguyên',
      'Thực hành vận hành bền vững',
    ],
    exercises: [
      {
        title: 'Dự Án Kiểm Toán Năng Lượng Công Nghiệp',
        description: 'Thực hiện kiểm toán năng lượng hoàn chỉnh cho một nhà máy dệt may Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Công cụ kiểm toán năng lượng', 'Đồng hồ đo điện', 'Thiết bị ghi dữ liệu', 'Phần mềm phân tích'],
        procedure: [
          'Thu thập dữ liệu tiêu thụ năng lượng cơ sở',
          'Xác định các thiết bị và quy trình tiêu thụ năng lượng chính',
          'Đo lường mô hình sử dụng năng lượng thực tế',
          'Phân tích các cơ hội cải thiện hiệu quả',
          'Phát triển kế hoạch triển khai với phân tích chi phí-lợi ích',
        ],
        expectedResults: 'Báo cáo kiểm toán năng lượng toàn diện với các khuyến nghị hiệu quả được ưu tiên',
        solution: 'Phân tích chi tiết bao gồm hệ thống chiếu sáng, động cơ, HVAC, nhiệt quy trình và khí nén',
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
    energyCategory: 'Chính sách',
    techComplexity: 'Trung bình',
    relatedGames: climateGame
      ? [
          {
            id: climateGame.id,
            name: climateGame.title,
            description: climateGame.description,
          },
        ]
      : [],
    objectives: [
      'Hiểu khung chính sách năng lượng và chiến lược phát triển của Việt Nam',
      'Nắm vững các yêu cầu quy định cho các dự án năng lượng',
      'Phân tích cơ chế thị trường năng lượng và cấu trúc giá',
      'Đánh giá tác động của các thỏa thuận quốc tế đối với chính sách trong nước',
      'Phát triển các chiến lược tuân thủ cho các doanh nghiệp năng lượng',
    ],
    prerequisites: ['Hiểu biết cơ bản về ngành năng lượng', 'Quen thuộc với các phương pháp phân tích chính sách'],
    vietnameseEnergyContext: [
      'Chiến lược phát triển năng lượng quốc gia đến năm 2030',
      'Quy hoạch phát triển điện lực VIII (PDP 8)',
      'Cam kết trung hòa carbon vào năm 2050',
      'Sáng kiến kết nối lưới điện ASEAN',
    ],
    industryApplications: [
      'Phát triển và cấp phép dự án năng lượng',
      'Tuân thủ quy định trong ngành điện lực',
      'Giao dịch năng lượng và tham gia thị trường',
      'Mua sắm năng lượng tái tạo của doanh nghiệp',
    ],
    sustainabilityFocus: [
      'Chính sách giảm thiểu biến đổi khí hậu',
      'Chiến lược chuyển đổi công bằng',
      'Yêu cầu đánh giá tác động môi trường',
      'Phù hợp với mục tiêu phát triển bền vững',
    ],
    exercises: [
      {
        title: 'Phân Tích Tác Động Chính Sách Năng Lượng',
        description:
          'Phân tích tác động của những thay đổi chính sách năng lượng tái tạo được đề xuất đối với ngành năng lượng mặt trời Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Tài liệu chính sách', 'Dữ liệu ngành', 'Mô hình kinh tế', 'Khung phân tích các bên liên quan'],
        procedure: [
          'Xem xét khung chính sách hiện tại và các thay đổi được đề xuất',
          'Xác định các bên liên quan bị ảnh hưởng và lợi ích của họ',
          'Mô hình hóa các tác động kinh tế đối với các phân khúc thị trường khác nhau',
          'Đánh giá các tác động môi trường và xã hội',
          'Phát triển các khuyến nghị chính sách',
        ],
        expectedResults: 'Đánh giá tác động chính sách toàn diện với các khuyến nghị của các bên liên quan',
        solution:
          'Phân tích đa bên liên quan bao gồm các nhà phát triển, công ty điện lực, người tiêu dùng và quan điểm của chính phủ',
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
    energyCategory: 'Lưu trữ',
    techComplexity: 'Nâng cao',
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
    vietnameseEnergyContext: [
      'Thách thức ổn định lưới điện với tỷ lệ thâm nhập năng lượng tái tạo cao',
      'Yêu cầu về nguồn điện dự phòng công nghiệp',
      'Phát triển hạ tầng sạc xe điện',
      'Ứng dụng lưới điện đảo tại các khu vực xa xôi',
    ],
    industryApplications: [
      'Dự án lưu trữ năng lượng quy mô lưới điện',
      'Nguồn điện dự phòng thương mại và công nghiệp',
      'Trạm sạc xe điện',
      'Ứng dụng làm mịn năng lượng tái tạo',
    ],
    sustainabilityFocus: [
      'Tái chế pin và ứng dụng vòng đời thứ hai',
      'Tìm nguồn cung ứng vật liệu bền vững',
      'Hỗ trợ khử carbon lưới điện',
      'Nguyên tắc kinh tế tuần hoàn',
    ],
    exercises: [
      {
        title: 'Thiết Kế BESS và Phân Tích Kinh Tế',
        description:
          'Thiết kế hệ thống lưu trữ năng lượng bằng pin cho một cơ sở công nghiệp Việt Nam với tích hợp PV mặt trời',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ định cỡ pin',
          'Phần mềm mô hình hóa kinh tế',
          'Công cụ phân tích lưới điện',
          'Tiêu chuẩn an toàn',
        ],
        procedure: [
          'Phân tích hồ sơ phụ tải của cơ sở và mô hình phát điện mặt trời',
          'Định cỡ hệ thống pin để cạo đỉnh và cung cấp điện dự phòng',
          'Chọn công nghệ pin và BMS phù hợp',
          'Tính toán kinh tế dự án với nhiều luồng giá trị',
          'Phát triển kế hoạch lắp đặt và bảo trì',
        ],
        expectedResults: 'Đề xuất thiết kế BESS hoàn chỉnh với thông số kỹ thuật và hồ sơ kinh doanh',
        solution:
          'Hệ thống được tối ưu hóa cân bằng nhiều ứng dụng bao gồm cạo đỉnh, giảm phí nhu cầu và dịch vụ lưới điện',
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
