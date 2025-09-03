import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface EthicalMarketingLessonType extends BaseLessonData {
  ethicalPrinciples: string[];
  brandPurposeAreas: string[];
  transparencyMethods: string[];
  socialImpactMetrics: string[];
  stakeholderGroups: string[];
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const ethicalMarketingLessons: EthicalMarketingLessonType[] = [
  {
    id: 'purpose-driven-brand-foundation',
    title: 'Xây Dựng Nền Tảng Thương Hiệu Có Mục Đích',
    description:
      'Hiểu cách định nghĩa và phát triển một mục đích đích thực cho thương hiệu, kết nối với các giá trị của đối tượng mục tiêu và tạo ra sự kết nối có ý nghĩa.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u4ZoJKF_VuA', // Simon Sinek - Start with Why
    imageUrl: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop',
    objectives: [
      'Định nghĩa mục đích thương hiệu đích thực và có ý nghĩa',
      'Phát triển các tuyên bố sứ mệnh và tầm nhìn có tác động',
      'Xác định các giá trị và nguyên tắc cốt lõi của thương hiệu',
      'Tạo chiến lược định vị thương hiệu dựa trên mục đích',
      'Hiểu mối liên hệ giữa mục đích và lợi nhuận',
      'Nghiên cứu các thương hiệu thành công dựa trên mục đích trên toàn cầu',
    ],
    prerequisites: [
      'Kiến thức cơ bản về xây dựng thương hiệu',
      'Hiểu biết về nghiên cứu đối tượng mục tiêu',
      'Nhận thức về các vấn đề xã hội và môi trường',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'content-creator-studio'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: [
      'Cân bằng Mục đích-Lợi nhuận',
      'Giao tiếp Đích thực',
      'Giá trị cho các bên liên quan',
      'Tư duy dài hạn',
    ],
    brandPurposeAreas: [
      'Tác động xã hội',
      'Bền vững môi trường',
      'Phát triển cộng đồng',
      'Thực hành kinh doanh có đạo đức',
    ],
    transparencyMethods: [
      'Tài liệu hóa mục đích',
      'Giao tiếp với các bên liên quan',
      'Báo cáo tiến độ',
      'Đo lường tác động',
    ],
    socialImpactMetrics: [
      'Điểm tin cậy thương hiệu',
      'Nhận thức về mục đích',
      'Tỷ lệ tương tác xã hội',
      'Chỉ số tác động cộng đồng',
    ],
    stakeholderGroups: ['Khách hàng', 'Nhân viên', 'Cộng đồng', 'Đối tác', 'Xã hội'],
    exercises: [
      {
        title: 'Hội thảo Khám phá Mục đích',
        description: 'Tạo một tuyên bố mục đích thương hiệu toàn diện cho thị trường Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Mẫu Purpose Canvas', 'Công cụ đánh giá giá trị', 'Hướng dẫn lập bản đồ các bên liên quan'],
        procedure: [
          'Phân tích định vị thương hiệu hiện tại và bối cảnh thị trường',
          'Xác định nhu cầu và cơ hội xã hội tại thị trường Việt Nam',
          'Phát triển bản nháp tuyên bố mục đích với ý kiến từ các bên liên quan',
          'Kiểm tra sự cộng hưởng của mục đích với đối tượng mục tiêu',
          'Hoàn thiện tuyên bố mục đích và lộ trình thực hiện',
          'Tạo kế hoạch kích hoạt mục đích trên các điểm chạm',
        ],
        expectedResults: 'Tuyên bố mục đích thương hiệu rõ ràng, đích thực với kế hoạch thực hiện khả thi',
        solution:
          'Khung mục đích toàn diện được điều chỉnh cho phù hợp với các giá trị văn hóa và động lực thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các doanh nghiệp xã hội Việt Nam xây dựng cộng đồng bền vững',
      'Các thương hiệu thời trang thúc đẩy thực hành sản xuất có đạo đức',
      'Các công ty thực phẩm hỗ trợ nông dân địa phương và canh tác hữu cơ',
      'Các công ty công nghệ thu hẹp khoảng cách số ở khu vực nông thôn',
      'Các dịch vụ tài chính thúc đẩy tài chính toàn diện',
    ],
    caseStudies: [
      {
        title: 'Patagonia - Hoạt động vì Môi trường dựa trên Mục đích',
        organization: 'Patagonia Inc.',
        problem: 'Cân bằng tăng trưởng kinh doanh với hoạt động vì môi trường và mục đích đích thực',
        solution: 'Tích hợp sứ mệnh môi trường vào chiến lược và hoạt động kinh doanh cốt lõi',
        impact: 'Doanh thu hơn 1 tỷ đô la trong khi vẫn duy trì vận động môi trường mạnh mẽ',
        innovations: ['1% cho Hành tinh', 'Chiến dịch Hoạt động vì Môi trường', 'Đổi mới Vật liệu Bền vững'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Chiến lược Thương hiệu dựa trên Mục đích',
        url: 'https://www.bcg.com/publications/2015/marketing-sales-strategy-how-to-build-purpose-driven-brand',
        type: 'Hướng dẫn',
      },
      {
        title: 'Công cụ Đánh giá B-Corporation',
        url: 'https://www.bcorporation.net/en-us/programs-and-tools/b-impact-assessment/',
        type: 'Công cụ',
      },
    ],
  },

  {
    id: 'ethical-marketing-frameworks',
    title: 'Khung và Tiêu chuẩn cho Marketing Đạo đức',
    description:
      'Học các khung đạo đức và tiêu chuẩn ngành để đảm bảo các chiến dịch marketing trung thực, minh bạch và có tác động tích cực cho xã hội.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=c1XC7KJiPWQ', // Ethical Marketing
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc đạo đức chính trong thực hành marketing',
      'Áp dụng các tiêu chuẩn minh bạch trong quảng cáo và truyền thông',
      'Phát triển các hướng dẫn cho thông điệp trung thực và chân thật',
      'Thực hiện bảo vệ quyền riêng tư và đạo đức dữ liệu',
      'Tạo chiến lược giá cả công bằng và đề xuất giá trị',
      'Thiết lập các biện pháp trách nhiệm giải trình cho các hoạt động marketing',
    ],
    prerequisites: [
      'Kiến thức cơ bản về marketing',
      'Hiểu biết về tâm lý người tiêu dùng',
      'Kiến thức cơ bản về các quy định pháp lý',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: [
      'Sự thật trong Quảng cáo',
      'Bảo vệ Người tiêu dùng',
      'Quyền riêng tư Dữ liệu',
      'Cạnh tranh Công bằng',
    ],
    brandPurposeAreas: [
      'Giao tiếp Trung thực',
      'Quyền lợi Người tiêu dùng',
      'Bảo vệ Dữ liệu',
      'Thực hành Kinh doanh Công bằng',
    ],
    transparencyMethods: ['Công bố Rõ ràng', 'Giao tiếp Mở', 'Quảng cáo Trung thực', 'Giá cả Minh bạch'],
    socialImpactMetrics: [
      'Điểm Trung thực',
      'Chỉ số Minh bạch',
      'Đánh giá Tin cậy của Người tiêu dùng',
      'Tỷ lệ Tuân thủ Đạo đức',
    ],
    stakeholderGroups: ['Người tiêu dùng', 'Cơ quan Quản lý', 'Đối thủ trong ngành', 'Truyền thông', 'Xã hội'],
    exercises: [
      {
        title: 'Kiểm toán Marketing Đạo đức',
        description: 'Kiểm toán toàn diện các chiến dịch marketing hiện có bằng các khung đạo đức',
        difficulty: 'Nâng cao',
        materials: ['Danh sách kiểm tra đánh giá đạo đức', 'Khung minh bạch', 'Hướng dẫn bảo vệ người tiêu dùng'],
        procedure: [
          'Xem xét các tài liệu marketing hiện tại để tìm các vấn đề đạo đức',
          'Đánh giá mức độ minh bạch trong truyền thông thương hiệu',
          'Đánh giá các thực hành thu thập và sử dụng dữ liệu',
          'Kiểm tra sự tuân thủ với các quy định quảng cáo của Việt Nam',
          'Xác định các lĩnh vực cần cải thiện và các hành động khắc phục',
          'Phát triển tài liệu hướng dẫn marketing đạo đức',
        ],
        expectedResults: 'Đánh giá đạo đức chi tiết với các khuyến nghị để cải thiện',
        solution: 'Khung đạo đức toàn diện được thiết kế riêng cho bối cảnh thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các công ty dược phẩm đảm bảo các tuyên bố sức khỏe chính xác',
      'Các tổ chức tài chính cung cấp giá cả minh bạch',
      'Các thương hiệu thực phẩm đưa ra các tuyên bố dinh dưỡng trung thực',
      'Các công ty làm đẹp tránh các tuyên bố trước/sau gây hiểu lầm',
      'Các công ty công nghệ bảo vệ quyền riêng tư của người dùng',
    ],
    caseStudies: [
      {
        title: 'Dove - Đạo đức Chiến dịch Vẻ đẹp Thực sự',
        organization: 'Unilever/Dove',
        problem: 'Giải quyết các tiêu chuẩn sắc đẹp phi thực tế trong ngành quảng cáo',
        solution: 'Phát triển các chiến dịch vẻ đẹp đích thực với sự tham gia của những người phụ nữ thực sự',
        impact: 'Tăng cường sự tin tưởng của thương hiệu và tác động xã hội tích cực đến lòng tự trọng',
        innovations: [
          'Chính sách không bóp méo kỹ thuật số',
          'Cam kết Vẻ đẹp Thực sự',
          'Chương trình Giáo dục Lòng tự trọng',
        ],
      },
    ],
    resources: [
      {
        title: 'Quy tắc Đạo đức Marketing của AMA',
        url: 'https://www.ama.org/codes-of-conduct/',
        type: 'Tham khảo',
      },
      {
        title: 'Hướng dẫn Luật Quảng cáo Việt Nam',
        url: 'https://thuvienphapluat.vn/van-ban/Thuong-mai/Luat-Quang-cao-2012-16-2012-QH13-201624.aspx',
        type: 'Tham khảo pháp lý',
      },
    ],
  },

  {
    id: 'social-impact-measurement',
    title: 'Đo lường và Báo cáo Tác động Xã hội',
    description:
      'Nắm vững các phương pháp và công cụ để đo lường, theo dõi và truyền thông tác động xã hội của các hoạt động marketing và sáng kiến thương hiệu một cách hiệu quả.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=X3t8XvSALek', // Measuring social impact
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    objectives: [
      'Phát triển khung đo lường tác động xã hội toàn diện',
      'Thiết lập các chỉ số hiệu suất chính cho các sáng kiến xã hội',
      'Thực hiện các hệ thống theo dõi sự tham gia của cộng đồng',
      'Tạo báo cáo tác động và kể chuyện hiệu quả',
      'Hiểu các chỉ số ESG và báo cáo bền vững',
      'Xây dựng các vòng lặp phản hồi của các bên liên quan và cải tiến liên tục',
    ],
    prerequisites: [
      'Kỹ năng phân tích và phân tích dữ liệu cơ bản',
      'Hiểu biết về các vấn đề xã hội và nhu cầu cộng đồng',
      'Kiến thức về các khái niệm bền vững',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'data-visualization'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: [
      'Tác động có thể đo lường',
      'Báo cáo minh bạch',
      'Trách nhiệm giải trình của các bên liên quan',
      'Cải tiến liên tục',
    ],
    brandPurposeAreas: [
      'Lợi tức xã hội trên đầu tư',
      'Lợi ích cộng đồng',
      'Tác động môi trường',
      'Giá trị cho các bên liên quan',
    ],
    transparencyMethods: [
      'Báo cáo tác động',
      'Trực quan hóa bảng điều khiển',
      'Cập nhật cho các bên liên quan',
      'Báo cáo công khai',
    ],
    socialImpactMetrics: [
      'ROI xã hội',
      'Điểm tương tác cộng đồng',
      'Giảm tác động môi trường',
      'Sự hài lòng của các bên liên quan',
    ],
    stakeholderGroups: ['Người thụ hưởng', 'Nhà đầu tư', 'Cộng đồng', 'Đối tác', 'Cơ quan quản lý'],
    exercises: [
      {
        title: 'Phát triển Bảng điều khiển Tác động Xã hội',
        description: 'Tạo một bảng điều khiển toàn diện để theo dõi và trực quan hóa các chỉ số tác động xã hội',
        difficulty: 'Nâng cao',
        materials: ['Bộ công cụ đo lường tác động', 'Mẫu KPI', 'Khung báo cáo'],
        procedure: [
          'Xác định các mục tiêu tác động xã hội và kết quả mục tiêu',
          'Xác định các chỉ số và phương pháp thu thập dữ liệu có liên quan',
          'Thiết lập hệ thống theo dõi và công cụ đo lường',
          'Phát triển các trực quan hóa bảng điều khiển cho các bên liên quan',
          'Tạo lịch và định dạng báo cáo thường xuyên',
          'Thiết lập các vòng lặp phản hồi để cải tiến liên tục',
        ],
        expectedResults: 'Hệ thống đo lường tác động xã hội chức năng với báo cáo thường xuyên',
        solution: 'Nền tảng đo lường tác động tích hợp được điều chỉnh cho bối cảnh xã hội Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các tổ chức phi lợi nhuận theo dõi hiệu quả chương trình',
      'Các B-Corp đo lường các tiêu chuẩn tác động được chứng nhận',
      'Các doanh nghiệp xã hội thể hiện giá trị cộng đồng',
      'Các chương trình CSR của công ty cho thấy ROI',
      'Các sáng kiến của chính phủ đo lường lợi ích công cộng',
    ],
    caseStudies: [
      {
        title: "Ben & Jerry's - Báo cáo Tác động dựa trên Giá trị",
        organization: "Ben & Jerry's",
        problem: 'Thể hiện cam kết đích thực với các giá trị xã hội ngoài marketing',
        solution: 'Báo cáo tác động toàn diện bao gồm các sáng kiến công bằng xã hội',
        impact: 'Lòng trung thành thương hiệu mạnh mẽ và uy tín trong marketing dựa trên giá trị',
        innovations: [
          'Nền tảng ActivistIceCream',
          'Báo cáo Sứ mệnh Xã hội',
          'Chương trình Nhà cung cấp dựa trên Giá trị',
        ],
      },
    ],
    resources: [
      {
        title: 'Tiêu chuẩn Mạng lưới Đầu tư Tác động Toàn cầu',
        url: 'https://thegiin.org/impact-measurement-management/',
        type: 'Tiêu chuẩn',
      },
      {
        title: 'Hướng dẫn Đo lường Tác động của các Mục tiêu Phát triển Bền vững của LHQ',
        url: 'https://sdgimpact.undp.org/practice-standards.html',
        type: 'Hướng dẫn',
      },
    ],
  },

  {
    id: 'sustainable-business-models',
    title: 'Mô hình Kinh doanh Bền vững và Kinh tế Tuần hoàn',
    description:
      'Khám phá các mô hình kinh doanh bền vững sáng tạo tích hợp các nguyên tắc kinh tế tuần hoàn với các chiến lược marketing dựa trên mục đích để thành công lâu dài.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zCRKvDyyHmI', // Circular economy business models
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc và ứng dụng của kinh tế tuần hoàn',
      'Thiết kế các mô hình kinh doanh bền vững cho các ngành khác nhau',
      'Tích hợp các thực hành tái tạo vào hoạt động',
      'Phát triển các chiến lược tạo giá trị chung',
      'Thực hiện tư duy dài hạn trong lập kế hoạch kinh doanh',
      'Tạo quan hệ đối tác để phát triển hệ sinh thái bền vững',
    ],
    prerequisites: [
      'Kinh nghiệm thiết kế mô hình kinh doanh',
      'Hiểu biết về các khái niệm bền vững',
      'Kiến thức về phân tích chuỗi giá trị',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'renewable-energy-manager'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'biology-ecosystem'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: ['Bền vững Môi trường', 'Công bằng Xã hội', 'Khả thi Kinh tế', 'Các thế hệ tương lai'],
    brandPurposeAreas: ['Thiết kế Tuần hoàn', 'Kinh doanh Tái tạo', 'Giá trị Chung', 'Tác động Dài hạn'],
    transparencyMethods: [
      'Báo cáo Bền vững',
      'Các chỉ số Tuần hoàn',
      'Tài liệu hóa Tác động',
      'Gắn kết các bên liên quan',
    ],
    socialImpactMetrics: ['Giảm Dấu chân Carbon', 'Loại bỏ Chất thải', 'Việc làm cho Cộng đồng', 'Tác động Tái tạo'],
    stakeholderGroups: ['Môi trường', 'Cộng đồng', 'Chuỗi cung ứng', 'Nhà đầu tư', 'Các thế hệ tương lai'],
    exercises: [
      {
        title: 'Mô hình Kinh doanh Tuần hoàn Canvas',
        description: 'Thiết kế một mô hình kinh doanh kinh tế tuần hoàn toàn diện cho thị trường Việt Nam',
        difficulty: 'Nâng cao',
        materials: ['Mô hình Kinh doanh Tuần hoàn Canvas', 'Công cụ Đánh giá Bền vững', 'Bản đồ Mạng lưới Giá trị'],
        procedure: [
          'Phân tích các hạn chế của mô hình kinh doanh tuyến tính hiện tại',
          'Xác định các cơ hội kinh tế tuần hoàn trong chuỗi giá trị',
          'Thiết kế mô hình kinh doanh mới với các yếu tố tái tạo',
          'Tính toán lợi ích môi trường và xã hội',
          'Phát triển lộ trình thực hiện với các đối tác',
          'Tạo chiến lược marketing làm nổi bật lợi ích tuần hoàn',
        ],
        expectedResults: 'Mô hình kinh doanh tuần hoàn toàn diện với kế hoạch thực hiện rõ ràng',
        solution: 'Khung kinh tế tuần hoàn tích hợp được điều chỉnh cho bối cảnh kinh doanh Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu thời trang thực hiện mô hình cho thuê quần áo',
      'Các công ty điện tử thiết kế để có thể sửa chữa',
      'Các công ty thực phẩm giảm thiểu rác thải bao bì',
      'Vật liệu xây dựng từ các nguồn tái chế',
      'Các doanh nghiệp nông nghiệp sử dụng canh tác tái tạo',
    ],
    caseStudies: [
      {
        title: 'Interface Inc. - Sứ mệnh Zero Carbon Negative',
        organization: 'Interface Inc.',
        problem: 'Tác động môi trường của ngành sản xuất thảm',
        solution: 'Chuyển đổi kinh doanh hoàn toàn hướng tới hoạt động carbon âm',
        impact: 'Giảm 96% cường độ carbon kể từ năm 1996',
        innovations: ['Sản phẩm Carbon Âm', 'Chương trình Nông nghiệp Tái tạo', 'Đổi mới Vật liệu Tuần hoàn'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Thiết kế Tuần hoàn của Quỹ Ellen MacArthur',
        url: 'https://ellenmacarthurfoundation.org/circular-design',
        type: 'Hướng dẫn',
      },
      {
        title: 'Đánh giá Mô hình Kinh doanh B-Corp',
        url: 'https://www.bcorporation.net/en-us/movement/about-b-corps',
        type: 'Đánh giá',
      },
    ],
  },

  {
    id: 'conscious-consumer-engagement',
    title: 'Kết nối với Người tiêu dùng có ý thức và Xây dựng Cộng đồng',
    description:
      'Nắm vững các chiến lược để tương tác với người tiêu dùng có ý thức, xây dựng cộng đồng đích thực và thúc đẩy các mối quan hệ lâu dài dựa trên các giá trị chung.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=QMH4rPEJ5BI', // Building a community
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu hành vi và động lực của người tiêu dùng có ý thức',
      'Phát triển các chiến lược tương tác đích thực',
      'Xây dựng cộng đồng xung quanh các giá trị và mục đích chung',
      'Tạo nội dung có ý nghĩa gây được tiếng vang với khán giả có ý thức',
      'Thúc đẩy các mối quan hệ lâu dài ngoài các giao dịch',
      'Tận dụng nội dung do người dùng tạo để kể chuyện đích thực',
    ],
    prerequisites: [
      'Kinh nghiệm marketing trên mạng xã hội',
      'Kỹ năng quản lý cộng đồng',
      'Hiểu biết về tâm lý người tiêu dùng',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'content-creator-studio'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnamese-heritage-explorer'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: ['Giao tiếp Đích thực', 'Trao quyền cho Cộng đồng', 'Giá trị Chung', 'Mối quan hệ Lâu dài'],
    brandPurposeAreas: ['Xây dựng Cộng đồng', 'Giá trị Chung', 'Tương tác Đích thực', 'Mối quan hệ Lâu dài'],
    transparencyMethods: ['Đối thoại Mở', 'Phản hồi từ Cộng đồng', 'Giao tiếp Minh bạch', 'Kể chuyện Đích thực'],
    socialImpactMetrics: ['Tỷ lệ Tương tác Cộng đồng', 'Điểm phù hợp Giá trị', 'Tỷ lệ Vận động', 'Giữ chân Lâu dài'],
    stakeholderGroups: [
      'Người tiêu dùng có ý thức',
      'Người ủng hộ Thương hiệu',
      'Thành viên Cộng đồng',
      'Người có ảnh hưởng',
      'Đối tác',
    ],
    exercises: [
      {
        title: 'Thiết kế Nền tảng Cộng đồng có ý thức',
        description: 'Tạo một chiến lược toàn diện để xây dựng và quản lý một cộng đồng người tiêu dùng có ý thức',
        difficulty: 'Trung bình',
        materials: ['Mẫu Chiến lược Cộng đồng', 'Công cụ Lập kế hoạch Tương tác', 'Khung Lịch Nội dung'],
        procedure: [
          'Nghiên cứu các phân khúc người tiêu dùng có ý thức mục tiêu',
          'Xác định các giá trị cộng đồng và nguyên tắc tương tác',
          'Thiết kế nền tảng cộng đồng và các định dạng tương tác',
          'Tạo chiến lược nội dung phù hợp với các giá trị',
          'Phát triển các chương trình giới thiệu và giữ chân thành viên',
          'Thiết lập các nguyên tắc cộng đồng và chính sách kiểm duyệt',
        ],
        expectedResults: 'Chiến lược tương tác cộng đồng có ý thức hoàn chỉnh với kế hoạch thực hiện',
        solution: 'Nền tảng cộng đồng tích hợp được thiết kế để tương tác dựa trên giá trị đích thực',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu thời trang bền vững xây dựng cộng đồng có ý thức về môi trường',
      'Các công ty thực phẩm hữu cơ tương tác với người tiêu dùng quan tâm đến sức khỏe',
      'Các nền tảng tài chính có đạo đức giáo dục các nhà đầu tư có trách nhiệm',
      'Các thương hiệu làm đẹp sạch kết nối với người tiêu dùng có ý thức',
      'Các tổ chức tác động xã hội huy động những người ủng hộ',
    ],
    caseStudies: [
      {
        title: 'Patagonia - Xây dựng Cộng đồng Môi trường',
        organization: 'Patagonia',
        problem: 'Tương tác với người tiêu dùng ngoài việc mua sản phẩm',
        solution: 'Xây dựng cộng đồng xung quanh hoạt động vì môi trường và các giá trị ngoài trời',
        impact: 'Lòng trung thành của khách hàng cao và sự ủng hộ thương hiệu',
        innovations: ['Chương trình Worn Wear', 'Nền tảng Action Works', 'Chương trình Tài trợ Môi trường'],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Hành vi Người tiêu dùng có ý thức',
        url: 'https://www.nielsen.com/insights/2018/was-2018-the-year-of-the-influential-sustainable-consumer/',
        type: 'Nghiên cứu',
      },
      {
        title: 'Các phương pháp hay nhất về Xây dựng Cộng đồng',
        url: 'https://www.communityroundtable.com/research/community-management-best-practices/',
        type: 'Phương pháp hay nhất',
      },
    ],
  },

  {
    id: 'vietnamese-cultural-values-integration',
    title: 'Tích hợp Giá trị Văn hóa Việt Nam vào Marketing có Mục đích',
    description:
      'Tìm hiểu sâu về các giá trị văn hóa Việt Nam và cách tích hợp chúng một cách đích thực vào các chiến lược marketing dựa trên mục đích để có sự phù hợp tại địa phương.',
    duration: '155 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=2Q18LaHAkNo', // Vietnamese culture
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các giá trị và truyền thống văn hóa cốt lõi của Việt Nam',
      'Tích hợp sự nhạy cảm văn hóa vào các chiến lược marketing',
      'Phát triển các tuyên bố mục đích phù hợp với địa phương',
      'Tạo thông điệp và hình ảnh phù hợp với văn hóa',
      'Xây dựng lòng tin thông qua sự đích thực về văn hóa',
      'Điều hướng các sắc thái văn hóa ở các vùng miền khác nhau',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về văn hóa Việt Nam',
      'Kinh nghiệm bản địa hóa marketing',
      'Nhận thức về sự nhạy cảm văn hóa',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnamese-heritage-explorer'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnam-geography-quiz'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'history-timeline'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: ['Tôn trọng Văn hóa', 'Phù hợp với Địa phương', 'Hòa hợp Cộng đồng', 'Giá trị Truyền thống'],
    brandPurposeAreas: ['Di sản Văn hóa', 'Giá trị Cộng đồng', 'Tập trung vào Gia đình', 'Hòa hợp Xã hội'],
    transparencyMethods: ['Tham vấn Văn hóa', 'Phản hồi từ Cộng đồng', 'Đối tác Địa phương', 'Đại diện Đích thực'],
    socialImpactMetrics: [
      'Điểm Đích thực Văn hóa',
      'Sự chấp nhận của Cộng đồng Địa phương',
      'Chỉ số Nhạy cảm Văn hóa',
      'Sự phù hợp Khu vực',
    ],
    stakeholderGroups: [
      'Cộng đồng Địa phương',
      'Lãnh đạo Văn hóa',
      'Khán giả Khu vực',
      'Các nhóm Truyền thống',
      'Người tiêu dùng Hiện đại',
    ],
    exercises: [
      {
        title: 'Lập bản đồ Giá trị Văn hóa Việt Nam',
        description:
          'Tạo một bản đồ toàn diện về các giá trị văn hóa Việt Nam và ứng dụng của chúng trong marketing có mục đích',
        difficulty: 'Trung bình',
        materials: [
          'Khung Giá trị Văn hóa',
          'Hướng dẫn về Sự khác biệt Khu vực',
          'Danh sách kiểm tra Nhạy cảm Văn hóa',
        ],
        procedure: [
          'Nghiên cứu các giá trị truyền thống của Việt Nam và các diễn giải hiện đại của chúng',
          'Lập bản đồ các giá trị văn hóa với các cơ hội mục đích thương hiệu',
          'Phát triển các chiến lược thông điệp phù hợp với văn hóa',
          'Kiểm tra sự cộng hưởng văn hóa với khán giả Việt Nam',
          'Tạo các hướng dẫn về tính đích thực văn hóa',
          'Thiết kế các bản chuyển thể cụ thể cho từng vùng miền Bắc/Trung/Nam Việt Nam',
        ],
        expectedResults: 'Chiến lược tích hợp văn hóa toàn diện với các bản chuyển thể theo vùng miền',
        solution: 'Khung đích thực văn hóa được thiết kế đặc biệt cho bối cảnh thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu y học cổ truyền Việt Nam quảng bá sức khỏe',
      'Các công ty thực phẩm địa phương tôn vinh di sản ẩm thực',
      'Các nền tảng giáo dục hỗ trợ các giá trị gia đình',
      'Các công ty công nghệ thu hẹp khoảng cách thế hệ',
      'Các thương hiệu du lịch làm nổi bật việc bảo tồn văn hóa',
    ],
    caseStudies: [
      {
        title: 'Vinamilk - Tích hợp Giá trị Gia đình',
        organization: 'Vinamilk',
        problem: 'Kết nối với các gia đình Việt Nam qua nhiều thế hệ',
        solution: 'Tích hợp các giá trị gia đình truyền thống vào mục đích và thông điệp thương hiệu',
        impact: 'Dẫn đầu thị trường trong ngành sữa với sự liên kết gia đình mạnh mẽ',
        innovations: ['Chương trình Dinh dưỡng Gia đình', 'Chiến dịch Đa thế hệ', 'Tài trợ Lễ hội Văn hóa'],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Giá trị Văn hóa Việt Nam',
        url: 'https://www.hofstede-insights.com/country/vietnam/',
        type: 'Nghiên cứu',
      },
      {
        title: 'Nghiên cứu Hành vi Người tiêu dùng Việt Nam',
        url: 'https://www.nielsen.com/vn/vi/insights/',
        type: 'Nghiên cứu thị trường',
      },
    ],
  },

  {
    id: 'csr-authentic-storytelling',
    title: 'Trách nhiệm Xã hội của Doanh nghiệp và Kể chuyện Đích thực',
    description:
      'Học cách phát triển các chiến lược CSR toàn diện và truyền đạt chúng thông qua cách kể chuyện đích thực để xây dựng lòng tin và sự tương tác.',
    duration: '185 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=jpt1TvdBmok', // CSR and storytelling
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    objectives: [
      'Phát triển chiến lược CSR toàn diện phù hợp với mục tiêu kinh doanh',
      'Tạo ra cách kể chuyện đích thực xung quanh các sáng kiến xã hội',
      'Xây dựng sự tham gia của các bên liên quan thông qua các câu chuyện có ý nghĩa',
      'Thực hiện báo cáo và truyền thông minh bạch',
      'Đo lường và truyền đạt tác động CSR một cách hiệu quả',
      'Tránh "tẩy xanh" và duy trì tính xác thực',
    ],
    prerequisites: [
      'Kinh nghiệm truyền thông doanh nghiệp',
      'Kỹ năng kể chuyện và tạo nội dung',
      'Hiểu biết về các vấn đề xã hội',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'content-creator-studio'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
    ethicalPrinciples: ['Tác động Thực sự', 'Giao tiếp Minh bạch', 'Giá trị cho các bên liên quan', 'Cam kết Lâu dài'],
    brandPurposeAreas: ['Trách nhiệm Xã hội', 'Tác động Cộng đồng', 'Quản lý Môi trường', 'Lãnh đạo có Đạo đức'],
    transparencyMethods: [
      'Câu chuyện Tác động',
      'Báo cáo Tiến độ',
      'Cập nhật cho các bên liên quan',
      'Nội dung Hậu trường',
    ],
    socialImpactMetrics: [
      'Điểm Tác động CSR',
      'Đánh giá Tính xác thực',
      'Chỉ số Tin cậy của các bên liên quan',
      'Tỷ lệ Tương tác Câu chuyện',
    ],
    stakeholderGroups: ['Cộng đồng', 'Nhân viên', 'Nhà đầu tư', 'Truyền thông', 'Cơ quan quản lý'],
    exercises: [
      {
        title: 'Chiến dịch Kể chuyện CSR',
        description: 'Phát triển một chiến dịch kể chuyện CSR toàn diện thể hiện tác động xã hội đích thực',
        difficulty: 'Nâng cao',
        materials: ['Mẫu Chiến lược CSR', 'Khung Kể chuyện', 'Công cụ Đo lường Tác động'],
        procedure: [
          'Kiểm toán các hoạt động CSR hiện tại và xác định các cơ hội kể chuyện',
          'Phát triển chiến lược tường thuật làm nổi bật tác động đích thực',
          'Tạo nội dung kể chuyện đa kênh',
          'Thực hiện các cơ chế phản hồi của các bên liên quan',
          'Đo lường sự tương tác và tác động của câu chuyện',
          'Tinh chỉnh phương pháp kể chuyện dựa trên hiệu suất',
        ],
        expectedResults: 'Chiến dịch kể chuyện CSR toàn diện với sự tương tác có thể đo lường được',
        solution: 'Chiến lược truyền thông CSR tích hợp với khung kể chuyện đích thực',
      },
    ],
    realWorldApplications: [
      'Các công ty đa quốc gia hỗ trợ các sáng kiến giáo dục',
      'Các công ty công nghệ thu hẹp khoảng cách số',
      'Các công ty sản xuất thúc đẩy bảo vệ môi trường',
      'Các tổ chức tài chính hỗ trợ kiến thức tài chính',
      'Các công ty chăm sóc sức khỏe cải thiện khả năng tiếp cận chăm sóc sức khỏe ở nông thôn',
    ],
    caseStudies: [
      {
        title: 'Unilever - Các thương hiệu Sống Bền vững',
        organization: 'Unilever',
        problem: 'Truyền đạt cam kết bền vững thực sự trên các thương hiệu toàn cầu',
        solution: 'Tích hợp cuộc sống bền vững vào mục đích thương hiệu với cách kể chuyện đích thực',
        impact: 'Các thương hiệu bền vững tăng trưởng nhanh hơn 69% so với các thương hiệu khác',
        innovations: ['Kế hoạch Sống Bền vững', 'Tích hợp Mục đích Thương hiệu', 'Nền tảng Kể chuyện Tác động'],
      },
    ],
    resources: [
      {
        title: 'Các phương pháp hay nhất về Truyền thông CSR',
        url: 'https://www.csrhub.com/content/csrhub-insight/how-to-communicate-csr-effectively',
        type: 'Phương pháp hay nhất',
      },
      {
        title: 'Tiêu chuẩn Sáng kiến Báo cáo Toàn cầu',
        url: 'https://www.globalreporting.org/standards/',
        type: 'Tiêu chuẩn',
      },
    ],
  },
];
