import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface GenZMarketingLessonType extends BaseLessonData {
  generationalInsights: string[];
  authenticityPrinciples: string[];
  platformPreferences: string[];
  valueAlignment: string[];
  engagementTactics: string[];
}

export const genZMarketingLessons: GenZMarketingLessonType[] = [
  {
    id: 'genz-psychology-authentic-marketing',
    title: 'Tâm lý Gen Z & Nguyên tắc Marketing Đích thực',
    description:
      'Hiểu sâu về tâm lý Gen Z và áp dụng các nguyên tắc marketing đích thực để xây dựng kết nối chân thực với thế hệ này.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vrU6YJle6Q4',
    imageUrl: 'https://i.ytimg.com/vi/vrU6YJle6Q4/hqdefault.jpg',
    objectives: [
      'Hiểu các đặc điểm thế hệ và giá trị của Gen Z',
      'Làm chủ các chiến lược giao tiếp đích thực',
      'Phát triển thông điệp thương hiệu phù hợp với tư duy Gen Z',
      'Tránh các sai lầm marketing phổ biến làm xa lánh khán giả trẻ',
      'Xây dựng mối quan hệ lâu dài với người tiêu dùng có mục đích',
    ],
    prerequisites: [
      'Kiến thức marketing cơ bản',
      'Hiểu biết về các nền tảng mạng xã hội',
      'Sẵn sàng thách thức các phương pháp marketing truyền thống',
    ],
    generationalInsights: [
      'Là người bản địa kỹ thuật số với khoảng chú ý 8 giây',
      'Coi trọng sự chân thực hơn là sự hoàn hảo được đánh bóng',
      'Có ý thức xã hội và nhận thức về môi trường',
      'Ưu tiên các thương hiệu phù hợp với giá trị cá nhân',
      'Hoài nghi về quảng cáo truyền thống',
    ],
    authenticityPrinciples: [
      'Minh bạch trong hoạt động kinh doanh',
      'Thừa nhận sai lầm và thể hiện sự tổn thương',
      'Hỗ trợ các hoạt động xã hội một cách chân thành',
      'Nội dung do người dùng tạo ra hơn là nội dung thương hiệu',
      'Kể chuyện hậu trường',
    ],
    platformPreferences: ['TikTok', 'Instagram', 'YouTube', 'Discord', 'Twitch'],
    valueAlignment: [
      'Bền vững môi trường',
      'Công bằng xã hội và hòa nhập',
      'Nhận thức về sức khỏe tâm thần',
      'Khả năng tiếp cận kinh tế',
      'Tự do biểu đạt sáng tạo',
    ],
    engagementTactics: [
      'Tích hợp văn hóa meme',
      'Các định dạng nội dung tương tác',
      'Các cuộc trò chuyện thời gian thực',
      'Các phương pháp xây dựng cộng đồng',
      'Sáng tạo nội dung hợp tác',
    ],
    exercises: [
      {
        title: 'Kiểm toán Thương hiệu & Phát triển Chiến lược cho Gen Z',
        description:
          'Thực hiện kiểm toán toàn diện thông điệp thương hiệu hiện tại và phát triển chiến lược tập trung vào Gen Z.',
        difficulty: 'Trung bình',
        materials: [
          'Tài liệu và thông điệp thương hiệu hiện tại',
          'Báo cáo nghiên cứu về Gen Z',
          'Phân tích mạng xã hội',
          'Công cụ phân tích đối thủ cạnh tranh',
        ],
        procedure: [
          'Phân tích nhận thức thương hiệu hiện tại trong đối tượng Gen Z',
          'Xác định khoảng cách giữa giá trị thương hiệu và ưu tiên của Gen Z',
          'Nghiên cứu các chiến dịch marketing thành công nhắm đến Gen Z',
          'Phát triển câu chuyện thương hiệu đích thực phù hợp với giá trị',
          'Tạo hướng dẫn nội dung cho giao tiếp đích thực',
          'Kiểm tra thông điệp với các nhóm tập trung',
          'Thực hiện phản hồi và lặp lại phương pháp',
          'Đo lường các chỉ số tương tác và tình cảm',
        ],
        expectedResults: 'Chiến lược thương hiệu đích thực với mức tăng 50%+ trong tương tác của Gen Z',
        solution: 'Phương pháp marketing dựa trên giá trị tập trung vào kết nối chân thực',
      },
      {
        title: 'Khung Phản ứng Khủng hoảng Đích thực',
        description: 'Phát triển một khung làm việc để xử lý sai lầm và chỉ trích một cách đích thực.',
        difficulty: 'Nâng cao',
        materials: [
          'Mẫu truyền thông khủng hoảng',
          'Công cụ giám sát mạng xã hội',
          'Hệ thống theo dõi thời gian phản hồi',
          'Kế hoạch truyền thông các bên liên quan',
        ],
        procedure: [
          'Xác định các kịch bản khủng hoảng tiềm tàng liên quan đến Gen Z',
          'Phát triển các mẫu phản hồi đích thực',
          'Tạo quy trình leo thang cho các mức độ nghiêm trọng khác nhau',
          'Đào tạo đội ngũ về các nguyên tắc giao tiếp đích thực',
          'Thiết lập hệ thống giám sát để phát hiện sớm',
          'Thực hành các kịch bản phản ứng với các cuộc khủng hoảng giả định',
          'Tinh chỉnh phương pháp dựa trên phản hồi từ mô phỏng',
          'Ghi lại các bài học để cải tiến liên tục',
        ],
        expectedResults: 'Khung phản ứng khủng hoảng xây dựng lòng tin thay vì kiểm soát thiệt hại',
        solution: 'Sự chủ động đích thực ngăn ngừa thiệt hại danh tiếng lớn',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu thời trang chuyển sang thực hành bền vững',
      'Các công ty công nghệ giải quyết các mối quan tâm về quyền riêng tư',
      'Các thương hiệu thực phẩm nhấn mạnh tác động sức khỏe và môi trường',
      'Các dịch vụ tài chính đơn giản hóa các sản phẩm phức tạp',
    ],
    caseStudies: [
      {
        title: 'Thành công của Thương hiệu Thời trang Bền vững',
        organization: 'Startup Thời trang Bền vững Việt Nam',
        problem: 'Gặp khó khăn trong việc tạo sự khác biệt so với các đối thủ thời trang nhanh',
        solution: 'Minh bạch đích thực về chuỗi cung ứng và tác động môi trường',
        impact: 'Nhận diện thương hiệu tăng 300%, lòng trung thành của khách hàng 85% trong Gen Z',
        innovations: [
          'Video minh bạch chuỗi cung ứng',
          'Sự tham gia của khách hàng trong phát triển sản phẩm',
          'Theo dõi tác động môi trường được chia sẻ công khai',
        ],
      },
      {
        title: 'Startup Công nghệ Tập trung vào Sức khỏe Tâm thần',
        organization: 'Công ty EdTech Việt Nam',
        problem: 'Tỷ lệ chấp nhận thấp trong sinh viên đại học',
        solution: 'Chuyển hướng thông điệp tập trung vào sức khỏe tâm thần và cân bằng công việc-cuộc sống',
        impact: 'Tỷ lệ chấp nhận người dùng tăng 250% trong nhóm nhân khẩu học sinh viên',
        innovations: [
          'Tích hợp tài nguyên sức khỏe tâm thần',
          'Nội dung cân bằng học tập-cuộc sống',
          'Các tính năng cộng đồng hỗ trợ đồng đẳng',
        ],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Hành vi Người tiêu dùng Gen Z',
        url: 'https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/what-makes-gen-z-different',
        type: 'Báo cáo Nghiên cứu',
      },
      {
        title: 'Khung Marketing Đích thực',
        url: 'https://hbr.org/2021/08/authentic-marketing-to-gen-z',
        type: 'Tạp chí Kinh doanh Harvard',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'content-creator-studio'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'inclusive-diverse-brand-messaging',
    title: 'Thông điệp Thương hiệu Hòa nhập & Đa dạng',
    description:
      'Phát triển chiến lược marketing hòa nhập và thông điệp thương hiệu đa dạng phù hợp với các giá trị của Gen Z về bình đẳng và đại diện.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=oYxOl9mZOaE',
    imageUrl: 'https://i.ytimg.com/vi/oYxOl9mZOaE/hqdefault.jpg',
    objectives: [
      'Hiểu tầm quan trọng của sự đại diện trong marketing',
      'Phát triển hướng dẫn tạo nội dung hòa nhập',
      'Tránh chủ nghĩa hình thức và đón nhận sự đa dạng chân thực',
      'Tạo thông điệp hấp dẫn các đối tượng đa dạng',
      'Xây dựng văn hóa thương hiệu hòa nhập trong nội bộ',
    ],
    prerequisites: [
      'Nhận thức về sự nhạy cảm văn hóa',
      'Cam kết học hỏi về các vấn đề đa dạng',
      'Sẵn sàng thách thức các thực tiễn hiện có',
    ],
    generationalInsights: [
      'Gen Z là thế hệ đa dạng nhất trong lịch sử',
      'Mong đợi các thương hiệu đại diện cho các cộng đồng đa dạng',
      'Nhanh chóng chỉ ra sự đồng minh hình thức',
      'Coi trọng sự đại diện đích thực hơn là sự đa dạng bề ngoài',
      'Hỗ trợ các thương hiệu tích cực thúc đẩy sự hòa nhập',
    ],
    authenticityPrinciples: [
      'Sự đại diện trong các vị trí lãnh đạo',
      'Các quan điểm đa dạng trong việc ra quyết định',
      'Kể chuyện đích thực từ các tiếng nói đa dạng',
      'Hỗ trợ nhất quán ngoài các chiến dịch marketing',
      'Thừa nhận và học hỏi từ sai lầm',
    ],
    platformPreferences: ['Instagram Stories', 'TikTok', 'LinkedIn', 'Twitter', 'YouTube'],
    valueAlignment: [
      'Bình đẳng chủng tộc và công lý',
      'Quyền và sự đại diện của LGBTQ+',
      'Bình đẳng giới và trao quyền',
      'Hòa nhập và khả năng tiếp cận cho người khuyết tật',
      'Tôn vinh sự đa dạng văn hóa',
    ],
    engagementTactics: [
      'Nội dung do người dùng tạo ra tôn vinh sự đa dạng',
      'Hợp tác với các nhà sáng tạo và người có ảnh hưởng đa dạng',
      'Chia sẻ câu chuyện và quan điểm của nhân viên',
      'Hỗ trợ các sự kiện cộng đồng đa dạng',
      'Nội dung giáo dục về sự hòa nhập',
    ],
    exercises: [
      {
        title: 'Phát triển Chiến dịch Marketing Hòa nhập',
        description: 'Tạo một chiến dịch marketing hòa nhập toàn diện phản ánh các quan điểm đa dạng.',
        difficulty: 'Nâng cao',
        materials: [
          'Kiểm toán đa dạng của nội dung hiện tại',
          'Công cụ thu thập phản hồi cộng đồng',
          'Kết nối mạng lưới nhà sáng tạo đa dạng',
          'Hướng dẫn thiết kế hòa nhập',
        ],
        procedure: [
          'Kiểm toán các tài liệu marketing hiện tại để tìm khoảng trống về đại diện',
          'Nghiên cứu các cộng đồng mục tiêu và sở thích của họ',
          'Hợp tác với các nhà sáng tạo và lãnh đạo cộng đồng đa dạng',
          'Phát triển thông điệp chiến dịch với ngôn ngữ hòa nhập',
          'Tạo nội dung hình ảnh có sự đại diện đa dạng',
          'Kiểm tra tài liệu chiến dịch với các nhóm tập trung',
          'Khởi chạy chiến dịch với sự tham gia của cộng đồng',
          'Theo dõi phản hồi và điều chỉnh phương pháp cho phù hợp',
        ],
        expectedResults: 'Chiến dịch hòa nhập với 70%+ tình cảm tích cực từ các cộng đồng đa dạng',
        solution: 'Phương pháp hợp tác với sự tham gia đích thực của cộng đồng',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu toàn cầu địa phương hóa cho thị trường Việt Nam',
      'Các công ty công nghệ cải thiện các tính năng tiếp cận',
      'Các thương hiệu làm đẹp mở rộng dải màu sản phẩm',
      'Các dịch vụ tài chính phục vụ các cộng đồng ít được đại diện',
    ],
    caseStudies: [
      {
        title: 'Mở rộng Hòa nhập của Thương hiệu Làm đẹp',
        organization: 'Thương hiệu Làm đẹp Quốc tế tại Việt Nam',
        problem: 'Thâm nhập thị trường thấp trong số người tiêu dùng Việt Nam đa dạng',
        solution: 'Dải sản phẩm hòa nhập và đại diện marketing đa dạng',
        impact: 'Thị phần tăng 180% trong các phân khúc người tiêu dùng đa dạng',
        innovations: [
          'Nghiên cứu tông màu da Việt Nam và phát triển sản phẩm',
          'Hợp tác với người có ảnh hưởng địa phương đại diện cho các nền tảng đa dạng',
          'Các chiến dịch tôn vinh văn hóa trong suốt cả năm',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Marketing Hòa nhập',
        url: 'https://www.facebook.com/business/news/inclusive-marketing',
        type: 'Hướng dẫn Thực hành Tốt nhất',
      },
      {
        title: 'Nghiên cứu về Đa dạng trong Quảng cáo',
        url: 'https://www.kantar.com/inspiration/advertising/the-business-case-for-diversity-in-advertising',
        type: 'Nghiên cứu Ngành',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'vietnamese-heritage-explorer'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'purpose-driven-brand-activism',
    title: 'Chủ nghĩa Tích cực Thương hiệu & Tác động Xã hội',
    description:
      'Học cách tham gia vào chủ nghĩa tích cực thương hiệu có ý nghĩa và tạo ra các chiến dịch tác động xã hội phù hợp với mong muốn thay đổi của Gen Z.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=4PRCDE4EWVY',
    imageUrl: 'https://i.ytimg.com/vi/4PRCDE4EWVY/hqdefault.jpg',
    objectives: [
      'Hiểu sự khác biệt giữa chủ nghĩa tích cực và hành động hình thức',
      'Xác định các nguyên nhân đích thực phù hợp với giá trị thương hiệu',
      'Phát triển các chiến lược tác động xã hội dài hạn',
      'Tạo các chiến dịch thúc đẩy sự thay đổi thực sự',
      'Đo lường tác động xã hội ngoài các chỉ số marketing',
    ],
    prerequisites: [
      'Nền tảng giá trị thương hiệu vững chắc',
      'Hiểu biết về các vấn đề xã hội',
      'Cam kết thay đổi dài hạn',
      'Nguồn lực cho chủ nghĩa tích cực bền vững',
    ],
    generationalInsights: [
      'Gen Z mong đợi các thương hiệu có lập trường về các vấn đề',
      'Sẽ tẩy chay các thương hiệu xung đột với giá trị của họ',
      'Coi trọng hành động hơn các chiến dịch nâng cao nhận thức',
      'Nghiên cứu các thực tiễn thương hiệu ngoài marketing',
      'Hỗ trợ các thương hiệu tạo ra tác động có thể đo lường được',
    ],
    authenticityPrinciples: [
      'Chọn các nguyên nhân phù hợp với mô hình kinh doanh',
      'Đầu tư nguồn lực ngoài ngân sách marketing',
      'Hợp tác với các tổ chức đã được thành lập',
      'Chia sẻ tiến độ và thất bại một cách minh bạch',
      'Duy trì sự nhất quán theo thời gian',
    ],
    platformPreferences: ['Instagram', 'TikTok', 'LinkedIn', 'Twitter', 'Blog Công ty'],
    valueAlignment: [
      'Hành động vì khí hậu và bảo vệ môi trường',
      'Công bằng xã hội và nhân quyền',
      'Khả năng tiếp cận giáo dục',
      'Vận động cho sức khỏe tâm thần',
      'Bình đẳng kinh tế',
    ],
    engagementTactics: [
      'Các sáng kiến do nhân viên dẫn dắt',
      'Sự tham gia của khách hàng vào các nguyên nhân',
      'Hợp tác với các tổ chức phi chính phủ và nhà hoạt động',
      'Nội dung giáo dục về các vấn đề',
      'Báo cáo tác động minh bạch',
    ],
    exercises: [
      {
        title: 'Phát triển Chiến lược Chủ nghĩa Tích cực Thương hiệu',
        description:
          'Phát triển một chiến lược chủ nghĩa tích cực thương hiệu toàn diện với các mục tiêu tác động xã hội có thể đo lường được.',
        difficulty: 'Nâng cao',
        materials: [
          'Đánh giá giá trị thương hiệu',
          'Nghiên cứu tác động xã hội',
          'Công cụ lập bản đồ các bên liên quan',
          'Khung đo lường tác động',
        ],
        procedure: [
          'Đánh giá giá trị thương hiệu và sự phù hợp của nguyên nhân đích thực',
          'Nghiên cứu các vấn đề xã hội liên quan đến khán giả',
          'Xác định cơ hội đóng góp có ý nghĩa',
          'Phát triển kế hoạch cam kết dài hạn',
          'Tạo khung đo lường tác động',
          'Thiết kế chiến lược chiến dịch với các mục tiêu rõ ràng',
          'Hợp tác với các tổ chức liên quan',
          'Khởi chạy sáng kiến với sự minh bạch',
          'Theo dõi tiến độ và chia sẻ cập nhật thường xuyên',
        ],
        expectedResults:
          'Chiến lược chủ nghĩa tích cực thương hiệu với tác động xã hội có thể đo lường và 90%+ sự chấp thuận của khán giả',
        solution: 'Cam kết dài hạn đích thực với sự thay đổi xã hội ngoài marketing',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu thời trang giải quyết các thực hành lao động',
      'Các công ty công nghệ thúc đẩy xóa mù chữ kỹ thuật số',
      'Các thương hiệu thực phẩm chống đói và suy dinh dưỡng',
      'Các dịch vụ tài chính tăng cường khả năng tiếp cận ngân hàng',
    ],
    caseStudies: [
      {
        title: 'Tác động của Startup Công nghệ Môi trường',
        organization: 'Công ty Công nghệ Xanh Việt Nam',
        problem: 'Cần thiết lập uy tín trong lĩnh vực môi trường',
        solution: 'Chủ nghĩa tích cực môi trường toàn diện bao gồm phát triển sản phẩm và hành động cộng đồng',
        impact: 'Nhận diện thương hiệu là nhà lãnh đạo môi trường, tăng trưởng doanh thu 500%',
        innovations: [
          'Phát triển sản phẩm âm carbon',
          'Các chương trình giáo dục môi trường cộng đồng',
          'Hợp tác với các tổ chức phi chính phủ môi trường để trồng cây',
        ],
      },
    ],
    resources: [
      {
        title: 'Khung Chủ nghĩa Tích cực Thương hiệu',
        url: 'https://www.edelman.com/research/brand-activism',
        type: 'Báo cáo Nghiên cứu',
      },
      {
        title: 'Đo lường Tác động Xã hội',
        url: 'https://www.bcorporation.net/en-us/certification',
        type: 'Khung Chứng nhận',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'climate-modeling'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'renewable-energy-manager'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'ai-ethics-dilemma'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];
