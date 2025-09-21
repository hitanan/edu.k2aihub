import type { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export const foodTechnologyLessons: BaseLessonData[] = [
  {
    id: 'food-safety-quality-control',
    title: 'Hệ thống an toàn thực phẩm và kiểm soát chất lượng',
    description:
      'Tìm hiểu về các hệ thống quản lý an toàn thực phẩm như HACCP, ISO 22000 và các phương pháp kiểm soát chất lượng trong ngành công nghiệp thực phẩm.',
    duration: '180',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=iX6nFpuLNeo',
    objectives: [
      'Nắm vững các nguyên tắc HACCP và triển khai trong sản xuất thực phẩm',
      'Hiểu các quy định an toàn thực phẩm của Việt Nam và tiêu chuẩn quốc tế',
      'Áp dụng hệ thống kiểm soát chất lượng trong sản xuất thực phẩm truyền thống Việt Nam',
      'Triển khai hệ thống truy xuất nguồn gốc để quản lý chuỗi cung ứng thực phẩm',
      'Thiết kế chương trình đào tạo an toàn thực phẩm cho công nhân và quản lý',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các nguyên tắc khoa học thực phẩm và vi sinh vật học',
      'Kiến thức về quy trình sản xuất và quản lý chất lượng',
      'Quen thuộc với các khung pháp lý và yêu cầu tuân thủ',
      'Hiểu biết về bối cảnh ngành công nghiệp thực phẩm Việt Nam',
    ],
    exercises: [
      {
        title: 'Triển Khai HACCP cho Sản Xuất Nước Mắm Việt Nam',
        description:
          'Phát triển kế hoạch HACCP hoàn chỉnh cho cơ sở sản xuất nước mắm truyền thống với các tiêu chuẩn an toàn hiện đại',
        difficulty: 'Trung bình',
        materials: [
          'Hướng dẫn và mẫu HACCP',
          'Quy định an toàn thực phẩm Việt Nam',
          'Tài liệu quy trình sản xuất nước mắm',
          'Thông số kỹ thuật thiết bị kiểm tra vi sinh',
          'Danh sách kiểm tra chất lượng',
        ],
        procedure: [
          'Phân tích quy trình sản xuất nước mắm truyền thống để xác định các điểm kiểm soát tới hạn',
          'Tiến hành phân tích mối nguy: rủi ro ô nhiễm sinh học, hóa học, vật lý',
          'Thiết lập giới hạn tới hạn cho pH, nồng độ muối, nhiệt độ lên men',
          'Thiết kế quy trình giám sát và hành động khắc phục',
          'Phát triển hệ thống xác minh và lưu trữ hồ sơ',
          'Tạo chương trình đào tạo cho công nhân sản xuất',
        ],
        expectedResults: 'Kế hoạch HACCP hoàn chỉnh đáp ứng tiêu chuẩn xuất khẩu Việt Nam và yêu cầu quốc tế',
        solution:
          'Phương pháp tiếp cận có hệ thống đảm bảo các phương pháp truyền thống tuân thủ các tiêu chuẩn an toàn hiện đại trong khi vẫn duy trì hương vị đích thực',
      },
      {
        title: 'Thiết Lập Phòng Thí Nghiệm Kiểm Soát Chất Lượng cho Xuất Khẩu Thực Phẩm Việt Nam',
        description:
          'Thiết kế phòng thí nghiệm kiểm soát chất lượng toàn diện cho nhà sản xuất thực phẩm Việt Nam nhắm đến thị trường quốc tế',
        difficulty: 'Nâng cao',
        materials: [
          'Thông số kỹ thuật thiết bị phòng thí nghiệm',
          'Tiêu chuẩn kiểm tra quốc tế',
          'Quy định xuất khẩu Việt Nam',
          'Phần mềm quản lý chất lượng',
          'Tài liệu yêu cầu chứng nhận',
        ],
        procedure: [
          'Đánh giá yêu cầu kiểm tra cho các thị trường xuất khẩu mục tiêu (EU, Mỹ, Nhật Bản)',
          'Thiết kế bố trí phòng thí nghiệm với quy trình làm việc phù hợp và kiểm soát ô nhiễm',
          'Lựa chọn thiết bị để kiểm tra vi sinh, hóa học và vật lý',
          'Phát triển quy trình vận hành tiêu chuẩn cho tất cả các phương pháp thử nghiệm',
          'Triển khai hệ thống quản lý chất lượng tuân thủ ISO/IEC 17025',
          'Tạo lịch trình kiểm tra hiệu quả về chi phí, tối ưu hóa an toàn và hiệu quả',
        ],
        expectedResults: 'Phòng thí nghiệm QC hoạt động đầy đủ có khả năng hỗ trợ xuất khẩu thực phẩm quốc tế',
        solution:
          'Thiết kế phòng thí nghiệm toàn diện cho phép các công ty thực phẩm Việt Nam đáp ứng các yêu cầu chất lượng quốc tế nghiêm ngặt',
      },
    ],
    realWorldApplications: [
      'Các nhà xuất khẩu thủy sản Việt Nam: Đảm bảo chất lượng cho thị trường EU và Mỹ',
      'Các nhà sản xuất thực phẩm truyền thống: Hiện đại hóa sản xuất trong khi vẫn giữ gìn tính xác thực',
      'Hợp tác xã nông nghiệp: Chế biến giá trị gia tăng tuân thủ an toàn',
      'Chuỗi nhà hàng: An toàn thực phẩm được tiêu chuẩn hóa trên nhiều địa điểm',
      'Các công ty xuất nhập khẩu thực phẩm: Tuân thủ các tiêu chuẩn quốc tế',
    ],
    caseStudies: [
      {
        title: 'Chuyển Đổi An Toàn Thực Phẩm của Tập đoàn Kido',
        organization: 'Tập đoàn Kido - Nhà sản xuất thực phẩm hàng đầu Việt Nam',
        problem:
          'Nâng cấp hệ thống an toàn thực phẩm để đáp ứng tiêu chuẩn xuất khẩu quốc tế trong khi vẫn duy trì hương vị truyền thống Việt Nam',
        solution: 'Triển khai hệ thống HACCP toàn diện trên tất cả các cơ sở sản xuất với tích hợp công nghệ hiện đại',
        impact:
          'Đạt được sự chấp thuận của FDA cho thị trường Mỹ, tăng xuất khẩu 150%, duy trì hồ sơ hương vị đích thực',
        innovations: [
          'Hệ thống giám sát tự động với cảm biến IoT',
          'Hệ thống truy xuất nguồn gốc dựa trên blockchain',
          'Kiểm tra kiểm soát chất lượng bằng AI',
          'Nền tảng đào tạo di động cho công nhân',
        ],
      },
      {
        title: 'Xuất Sắc trong Xuất Khẩu của Thủy sản Minh Phú',
        organization: 'Tập đoàn Thủy sản Minh Phú',
        problem: 'Đáp ứng các yêu cầu an toàn thực phẩm nghiêm ngặt của EU cho các hoạt động xuất khẩu tôm quy mô lớn',
        solution: 'Phát triển hệ thống quản lý chất lượng tích hợp từ trang trại đến bàn ăn với giám sát liên tục',
        impact:
          'Trở thành nhà xuất khẩu thủy sản lớn nhất Việt Nam sang EU, không có sự cố an toàn thực phẩm nào trong 5 năm',
        innovations: [
          'Hệ thống giám sát nuôi trồng thủy sản tích hợp',
          'Công nghệ quản lý chuỗi lạnh',
          'Mạng lưới phòng thí nghiệm xét nghiệm nhanh',
          'Chứng nhận thực hành đánh bắt bền vững',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn của Cục An toàn thực phẩm Việt Nam',
        url: 'http://vfa.gov.vn/',
        type: 'Quy định của Chính phủ',
      },
      {
        title: 'Tiêu chuẩn quốc tế Codex Alimentarius',
        url: 'https://www.fao.org/fao-who-codexalimentarius/',
        type: 'Tiêu chuẩn quốc tế',
      },
      {
        title: 'Hướng dẫn triển khai HACCP',
        url: 'https://www.fda.gov/food/hazard-analysis-critical-control-points-haccp',
        type: 'Hướng dẫn kỹ thuật',
      },
    ],
    faqs: [
      {
        question: 'HACCP là gì và tại sao nó quan trọng trong ngành thực phẩm?',
        answer:
          'HACCP (Hazard Analysis and Critical Control Points) là một hệ thống quản lý an toàn thực phẩm có hệ thống, phòng ngừa. Nó quan trọng vì giúp xác định, đánh giá và kiểm soát các mối nguy đáng kể đối với an toàn thực phẩm, từ đó đảm bảo sản phẩm an toàn cho người tiêu dùng và đáp ứng các yêu cầu pháp lý.',
      },
      {
        question: 'Làm thế nào để đảm bảo an toàn thực phẩm cho các sản phẩm truyền thống như nước mắm?',
        answer:
          'Để đảm bảo an toàn, các nhà sản xuất nước mắm hiện đại áp dụng HACCP. Họ kiểm soát chặt chẽ các điểm tới hạn như chất lượng cá đầu vào, nồng độ muối, nhiệt độ và thời gian ủ, đồng thời thực hiện các xét nghiệm vi sinh định kỳ để đảm bảo sản phẩm không chứa mầm bệnh gây hại.',
      },
      {
        question: 'Hệ thống truy xuất nguồn gốc thực phẩm hoạt động như thế nào?',
        answer:
          'Hệ thống truy xuất nguồn gốc cho phép theo dõi đường đi của một sản phẩm thực phẩm qua tất cả các giai đoạn sản xuất, chế biến và phân phối. Bằng cách sử dụng mã vạch, mã QR hoặc công nghệ blockchain, người tiêu dùng và nhà quản lý có thể quét sản phẩm để biết thông tin về nơi sản xuất, ngày thu hoạch, quy trình chế biến, v.v.',
      },
      {
        question: 'Sự khác biệt giữa ISO 22000 và HACCP là gì?',
        answer:
          'HACCP là một hệ thống tập trung vào việc xác định và kiểm soát các mối nguy cụ thể trong quá trình sản xuất. ISO 22000 là một tiêu chuẩn quốc tế về hệ thống quản lý an toàn thực phẩm, bao trùm rộng hơn, bao gồm cả các nguyên tắc của HACCP, các chương trình tiên quyết (như vệ sinh nhà xưởng) và các yêu cầu về quản lý hệ thống.',
      },
      {
        question: 'Điểm kiểm soát tới hạn (CCP) là gì?',
        answer: 'CCP là một bước trong quy trình sản xuất mà tại đó việc kiểm soát có thể được áp dụng và là cần thiết để ngăn chặn hoặc loại bỏ một mối nguy về an toàn thực phẩm hoặc giảm nó xuống mức có thể chấp nhận được. Ví dụ, bước nấu chín là một CCP để tiêu diệt vi khuẩn gây bệnh.',
      },
      {
        question: 'Làm thế nào để một nhà hàng nhỏ có thể áp dụng các nguyên tắc an toàn thực phẩm?',
        answer: 'Một nhà hàng nhỏ có thể bắt đầu bằng cách thực hiện các chương trình tiên quyết (PRPs) như: vệ sinh cá nhân tốt, kiểm soát nhiệt độ (giữ nóng thực phẩm nóng, giữ lạnh thực phẩm lạnh), ngăn ngừa ô nhiễm chéo (sử dụng thớt riêng cho thực phẩm sống và chín), và kiểm soát côn trùng gây hại.',
      },
      {
        question: 'Tại sao việc ghi chép lại hồ sơ trong hệ thống HACCP lại quan trọng?',
        answer: 'Việc ghi chép hồ sơ (ví dụ: nhật ký nhiệt độ tủ lạnh, hồ sơ đào tạo nhân viên) là bằng chứng cho thấy hệ thống an toàn thực phẩm đang được thực hiện đúng cách. Nó rất quan trọng cho việc xác minh nội bộ, kiểm tra của cơ quan quản lý và để điều tra nếu có sự cố xảy ra.',
      },
      {
        question: 'Dị ứng thực phẩm là một mối nguy an toàn thực phẩm không?',
        answer: 'Có, các chất gây dị ứng (như đậu phộng, hải sản, sữa) được coi là một mối nguy hóa học. Các cơ sở sản xuất và nhà hàng phải có quy trình rõ ràng để ngăn ngừa ô nhiễm chéo và ghi nhãn chính xác các sản phẩm có chứa chất gây dị ứng để bảo vệ người tiêu dùng.',
      },
      {
        question: 'Thực hành sản xuất tốt (GMP) là gì?',
        answer: 'GMP (Good Manufacturing Practices) là các yêu cầu và hướng dẫn nhằm đảm bảo sản phẩm được sản xuất một cách nhất quán và kiểm soát theo các tiêu chuẩn chất lượng. Nó bao gồm các khía cạnh như thiết kế nhà xưởng, vệ sinh, thiết bị, và quy trình vận hành.',
      },
      {
        question: 'Làm thế nào để kiểm soát chất lượng nguyên liệu đầu vào?',
        answer: 'Kiểm soát chất lượng nguyên liệu đầu vào bắt đầu bằng việc lựa chọn các nhà cung cấp uy tín. Cần thiết lập các tiêu chuẩn chất lượng rõ ràng cho từng loại nguyên liệu và thực hiện kiểm tra khi nhận hàng (ví dụ: kiểm tra cảm quan, đo nhiệt độ, hoặc lấy mẫu xét nghiệm) để đảm bảo chúng đáp ứng yêu cầu trước khi đưa vào sản xuất.',
      },
    ],
  },
  {
    id: 'fermentation-technology-vietnamese-foods',
    title: 'Công nghệ lên men và thực phẩm truyền thống Việt Nam',
    description:
      'Khám phá khoa học đằng sau các quá trình lên men trong thực phẩm truyền thống Việt Nam như nước mắm, tương, chao và ứng dụng công nghệ để cải tiến.',
    duration: '200',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dQIZa6SBkbk',
    objectives: [
      'Nắm vững các nguyên tắc hóa sinh và vi sinh vật học lên men',
      'Hiểu các kỹ thuật lên men truyền thống của Việt Nam và các phương pháp hiện đại hóa',
      'Áp dụng các công cụ công nghệ sinh học để tối ưu hóa sản xuất thực phẩm',
      'Thiết kế quy trình lên men cho thực phẩm chức năng và men vi sinh',
      'Triển khai hệ thống kiểm soát chất lượng cho các sản phẩm lên men',
    ],
    prerequisites: [
      'Nền tảng vững chắc về vi sinh vật học và hóa sinh',
      'Hiểu biết về các nguyên tắc khoa học thực phẩm và enzymology',
      'Kiến thức cơ bản về kỹ thuật quy trình và thiết kế lò phản ứng sinh học',
      'Quen thuộc với truyền thống thực phẩm lên men của Việt Nam',
    ],
    exercises: [
      {
        title: 'Tối Ưu Hóa Sản Xuất Nước Mắm Hiện Đại',
        description:
          'Tối ưu hóa quá trình lên men nước mắm truyền thống bằng công nghệ môi trường được kiểm soát và phân tích vi sinh vật',
        difficulty: 'Nâng cao',
        materials: [
          'Lò phản ứng sinh học lên men có kiểm soát nhiệt độ',
          'Thiết bị nhận dạng vi sinh vật',
          'Công cụ phân tích pH, độ mặn và axit amin',
          'Men khởi động nước mắm truyền thống',
          'Phòng thí nghiệm kiểm tra chất lượng',
        ],
        procedure: [
          'Phân lập và xác định đặc tính của các vi sinh vật có lợi từ nước mắm truyền thống',
          'Thiết kế hệ thống lên men được kiểm soát với nhiệt độ, pH, độ mặn tối ưu',
          'Theo dõi tiến trình lên men bằng các dấu hiệu sinh hóa',
          'So sánh hồ sơ hương vị: lên men truyền thống so với lên men có kiểm soát',
          'Tối ưu hóa thời gian lên men để đạt được các hợp chất umami mong muốn',
          'Mở rộng quy trình với xác nhận tính nhất quán về chất lượng',
        ],
        expectedResults:
          'Quy trình lên men được tối ưu hóa giúp giảm 30% thời gian sản xuất trong khi vẫn duy trì hương vị đích thực',
        solution:
          'Phương pháp tiếp cận khoa học bảo tồn hương vị truyền thống đồng thời cải thiện hiệu quả và tính nhất quán của sản xuất nước mắm Việt Nam',
      },
      {
        title: 'Phát Triển Sữa Chua Probiotic Việt Nam',
        description: 'Phát triển sữa chua probiotic sử dụng vi khuẩn axit lactic bản địa của Việt Nam với nền sữa dừa',
        difficulty: 'Nâng cao',
        materials: [
          'Các chủng LAB bản địa từ thực phẩm lên men Việt Nam',
          'Sữa dừa và các chất nền thực vật',
          'Thiết bị theo dõi quá trình lên men',
          'Giao thức kiểm tra khả năng sống của probiotic',
          'Hội đồng đánh giá cảm quan',
        ],
        procedure: [
          'Sàng lọc các chủng LAB Việt Nam để tìm các đặc tính probiotic',
          'Tối ưu hóa điều kiện lên men sữa dừa',
          'Đánh giá khả năng sống sót của probiotic trong điều kiện bảo quản',
          'Tiến hành phân tích cảm quan với sở thích của người tiêu dùng Việt Nam',
          'Phát triển hệ thống đóng gói để ổn định probiotic',
          'Xác nhận lợi ích sức khỏe thông qua các nghiên cứu sơ bộ',
        ],
        expectedResults:
          'Sữa chua probiotic khả thi về mặt thương mại với 10^8 CFU/mL probiotic sống sau 21 ngày bảo quản',
        solution:
          'Sự đổi mới tạo ra thực phẩm probiotic lành mạnh, phù hợp với văn hóa nhắm đến sở thích của thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các nhà sản xuất thực phẩm truyền thống: Hiện đại hóa quy trình lên men',
      'Các công ty probiotic: Phát triển các sản phẩm dành riêng cho người Việt',
      'Hợp tác xã nông nghiệp: Các sản phẩm lên men có giá trị gia tăng',
      'Ngành công nghiệp thực phẩm sức khỏe: Thực phẩm lên men chức năng',
      'Các công ty xuất khẩu: Tiêu chuẩn hóa thực phẩm lên men truyền thống',
    ],
    caseStudies: [
      {
        title: 'Chương trình Đổi mới Probiotic của Vinamilk',
        organization: 'Công ty Cổ phần Sữa Việt Nam',
        problem:
          'Phát triển các sản phẩm sữa probiotic được thiết kế đặc biệt cho sức khỏe tiêu hóa và sở thích khẩu vị của người Việt Nam',
        solution:
          'Kết hợp kiến thức lên men truyền thống của Việt Nam với công nghệ sinh học hiện đại để tạo ra các sản phẩm phù hợp với văn hóa',
        impact:
          'Ra mắt dòng sản phẩm probiotic thành công chiếm 25% thị phần, cải thiện kết quả sức khỏe tiêu hóa trong dân số Việt Nam',
        innovations: [
          'Phát triển chủng probiotic bản địa',
          'Chất nền lên men từ thực vật',
          'Tích hợp hương vị truyền thống',
          'Công nghệ bảo quản kéo dài thời hạn sử dụng',
        ],
      },
      {
        title: 'Hiện đại hóa thực phẩm lên men của Tập đoàn Masan',
        organization: 'Masan Consumer Holdings',
        problem:
          'Mở rộng quy mô sản xuất gia vị lên men truyền thống trong khi vẫn duy trì hương vị đích thực và cải thiện an toàn thực phẩm',
        solution: 'Triển khai công nghệ lên men có kiểm soát với bảo quản men khởi động truyền thống',
        impact: 'Tăng công suất sản xuất 300%, duy trì hồ sơ hương vị truyền thống, đạt tiêu chuẩn xuất khẩu quốc tế',
        innovations: [
          'Hệ thống giám sát lên men tự động',
          'Ngân hàng sinh học văn hóa truyền thống',
          'Thuật toán dự đoán chất lượng',
          'Giải pháp đóng gói bền vững',
        ],
      },
    ],
    resources: [
      {
        title: 'Viện Nghiên cứu Công nghệ Sinh học Thực phẩm Việt Nam',
        url: 'https://firi.vast.vn/',
        type: 'Viện nghiên cứu',
      },
      {
        title: 'Tạp chí Quốc tế về Vi sinh vật Thực phẩm',
        url: 'https://www.journals.elsevier.com/international-journal-of-food-microbiology',
        type: 'Ấn phẩm khoa học',
      },
      {
        title: 'Cơ sở dữ liệu thực phẩm lên men truyền thống',
        url: 'https://www.traditionalfermentedfoods.com/',
        type: 'Cơ sở dữ liệu tham khảo',
      },
    ],
    faqs: [
      {
        question: 'Công nghệ lên men đóng vai trò gì trong thực phẩm Việt Nam?',
        answer:
          'Công nghệ lên men là trái tim của nhiều món ăn và gia vị truyền thống Việt Nam, như nước mắm, tương, mắm tôm, và dưa chua. Quá trình này không chỉ giúp bảo quản thực phẩm mà còn tạo ra những hương vị umami phức tạp và độc đáo, đặc trưng cho ẩm thực Việt.',
      },
      {
        question: 'Làm thế nào công nghệ hiện đại có thể cải tiến quy trình lên men truyền thống?',
        answer:
          'Công nghệ hiện đại giúp kiểm soát các yếu tố quan trọng như nhiệt độ, độ pH, và các chủng vi sinh vật. Điều này giúp chuẩn hóa chất lượng sản phẩm, rút ngắn thời gian lên men, đảm bảo an toàn vệ sinh và tăng hiệu suất sản xuất mà vẫn giữ được hương vị truyền thống.',
      },
      {
        question: 'Probiotic là gì và nó có trong thực phẩm lên men Việt Nam không?',
        answer:
          'Probiotic là các vi sinh vật sống có lợi cho sức khỏe, đặc biệt là hệ tiêu hóa. Nhiều thực phẩm lên men truyền thống của Việt Nam, như sữa chua, dưa cải muối, kim chi, có chứa probiotic tự nhiên. Các nhà khoa học cũng đang nghiên cứu để phát triển các sản phẩm probiotic mới từ các chủng vi khuẩn bản địa.',
      },
      {
        question: 'Sự khác biệt giữa lên men hiếu khí và kỵ khí là gì?',
        answer:
          'Lên men hiếu khí cần có oxy để diễn ra, ví dụ như trong sản xuất giấm. Ngược lại, lên men kỵ khí diễn ra trong môi trường không có oxy, ví dụ như trong quá trình ủ rượu hoặc làm sữa chua. Mỗi loại quá trình tạo ra các sản phẩm và hương vị khác nhau.',
      },
      {
        question: 'Umami là gì và nó được tạo ra như thế nào trong quá trình lên men?',
        answer: 'Umami là vị cơ bản thứ năm, thường được mô tả là "vị ngọt thịt" hoặc "vị ngon". Trong quá trình lên men nước mắm hoặc tương, các enzyme từ vi sinh vật sẽ phân giải protein trong cá hoặc đậu nành thành các axit amin, trong đó có glutamate. Glutamate là hợp chất chính tạo ra vị umami đậm đà.',
      },
      {
        question: 'Men khởi động (starter culture) là gì?',
        answer: 'Men khởi động là một tập hợp các vi sinh vật được chọn lọc (vi khuẩn, nấm men, hoặc nấm mốc) được thêm vào nguyên liệu để bắt đầu và kiểm soát quá trình lên men. Việc sử dụng men khởi động giúp đảm bảo sản phẩm cuối cùng có chất lượng và hương vị nhất quán.',
      },
      {
        question: 'Tại sao một số loại phô mai lại có mùi rất nồng?',
        answer: 'Mùi nồng của một số loại phô mai (như phô mai xanh) là kết quả của hoạt động của các vi sinh vật (nấm mốc, vi khuẩn) trong quá trình ủ. Chúng phân giải chất béo và protein trong sữa thành các hợp chất thơm dễ bay hơi, tạo ra hương vị phức tạp và đặc trưng.',
      },
      {
        question: 'Làm thế nào để làm sữa chua tại nhà?',
        answer: 'Để làm sữa chua, bạn cần đun nóng sữa để tiệt trùng, sau đó để nguội đến khoảng 40-45°C. Tiếp theo, bạn hòa một ít men (có thể dùng sữa chua không đường mua sẵn) vào sữa, rồi ủ ấm trong khoảng 6-8 tiếng. Trong thời gian này, vi khuẩn lactic sẽ lên men đường lactose trong sữa thành axit lactic, làm sữa đông lại và tạo ra vị chua đặc trưng.',
      },
      {
        question: 'Kombucha là gì?',
        answer: 'Kombucha là một loại trà lên men có vị chua ngọt và có ga nhẹ. Nó được làm bằng cách thêm một "con giống" gọi là SCOBY (Symbiotic Culture of Bacteria and Yeast - Cộng sinh của vi khuẩn và nấm men) vào trà ngọt. SCOBY sẽ lên men trà, tạo ra axit axetic, axit gluconic và một lượng nhỏ cồn.',
      },
      {
        question: 'Sự khác biệt giữa dưa chua và kim chi là gì?',
        answer: 'Cả hai đều là rau củ lên men, nhưng có sự khác biệt về nguyên liệu và quy trình. Dưa chua của Việt Nam thường chỉ được lên men với muối và nước, tạo ra vị chua tự nhiên. Kim chi của Hàn Quốc phức tạp hơn, được ướp với nhiều loại gia vị như bột ớt, tỏi, gừng, và nước mắm, tạo ra hương vị cay, nồng và phức hợp hơn.',
      },
    ],
  },
  {
    id: 'molecular-gastronomy-food-innovation',
    title: 'Ẩm thực phân tử và đổi mới thực phẩm',
    description:
      'Khám phá sự giao thoa giữa khoa học và nghệ thuật nấu ăn. Học các kỹ thuật như cầu hóa, tạo bọt, gel hóa để tạo ra những món ăn với kết cấu và hình dạng độc đáo.',
    duration: '160',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=UzkYTfHW_Nk',
    objectives: [
      'Nắm vững các kỹ thuật ẩm thực phân tử và các nguyên tắc khoa học',
      'Áp dụng kiến thức hóa học thực phẩm để tạo ra kết cấu và hương vị sáng tạo',
      'Hiện đại hóa các món ăn truyền thống Việt Nam bằng kỹ thuật phân tử',
      'Hiểu vật lý thực phẩm: nhũ hóa, tạo gel, tạo hình cầu',
      'Thiết kế các bài trình bày thực phẩm sáng tạo duy trì giá trị dinh dưỡng',
    ],
    prerequisites: [
      'Hiểu biết về hóa học thực phẩm và các đặc tính vật lý',
      'Kỹ năng nấu nướng cơ bản và kỹ thuật chế biến thực phẩm',
      'Kiến thức về ẩm thực truyền thống và hồ sơ hương vị Việt Nam',
      'Quen thuộc với thiết bị phòng thí nghiệm và các phép đo chính xác',
    ],
    exercises: [
      {
        title: 'Đổi Mới Phở Phân Tử',
        description:
          'Biến phở truyền thống thành trải nghiệm ẩm thực phân tử trong khi vẫn giữ gìn hương vị Việt Nam đích thực',
        difficulty: 'Nâng cao',
        materials: [
          'Thiết bị ẩm thực phân tử: máy cô quay, nitơ lỏng',
          'Hydrocolloid: agar, natri alginat, canxi clorua',
          'Nguyên liệu phở truyền thống: xương, rau thơm, gia vị',
          'Cân chính xác và thiết bị kiểm soát nhiệt độ',
          'Dụng cụ phục vụ chuyên dụng',
        ],
        procedure: [
          'Chiết xuất tinh chất hương vị tinh khiết từ nước dùng phở truyền thống bằng phương pháp chưng cất',
          'Tạo các viên nước dùng phở bằng kỹ thuật tạo hình cầu',
          'Thiết kế các lựa chọn thay thế mì ăn được bằng kỹ thuật tạo gel',
          'Phát triển bọt thảo mộc và gia vị bảo quản các hợp chất thơm',
          'Trình bày sáng tạo duy trì tinh chất phở',
          'Tiến hành đánh giá cảm quan so sánh phiên bản truyền thống và phân tử',
        ],
        expectedResults:
          'Trình bày phở sáng tạo với hương vị đậm đặc và kết cấu đáng ngạc nhiên trong khi vẫn duy trì tính xác thực',
        solution:
          'Phương pháp tiếp cận khoa học tạo ra trải nghiệm ăn uống đáng nhớ đồng thời tôn vinh truyền thống ẩm thực Việt Nam',
      },
      {
        title: 'Chuyển Đổi Món Tráng Miệng Việt Nam',
        description:
          'Hiện đại hóa các món tráng miệng truyền thống của Việt Nam (chè, bánh flan) bằng kỹ thuật ẩm thực phân tử',
        difficulty: 'Trung bình',
        materials: [
          'Nguyên liệu tráng miệng truyền thống: dừa, trái cây nhiệt đới, đậu',
          'Dụng cụ phân tử: ống tiêm, thìa tạo hình cầu, súng tạo khói',
          'Màu thực phẩm tự nhiên và chất điều vị',
          'Thiết bị kiểm soát nhiệt độ',
          'Dụng cụ trình bày sáng tạo',
        ],
        procedure: [
          'Phân tích các thành phần chè truyền thống để xác định các hương vị và kết cấu chính',
          'Tạo trứng cá muối dừa bằng kỹ thuật tạo hình cầu ngược',
          'Thiết kế các tấm kính trái cây bằng agar và nước ép trái cây tự nhiên',
          'Phát triển hiệu ứng khói thơm bằng vật liệu an toàn cấp thực phẩm',
          'Kết hợp các yếu tố truyền thống và hiện đại trong các bài trình bày sáng tạo',
          'Kiểm tra sự chấp nhận của người tiêu dùng với thực khách Việt Nam',
        ],
        expectedResults:
          'Bộ sưu tập món tráng miệng Việt Nam hiện đại hấp dẫn thực khách đương đại trong khi vẫn tôn trọng truyền thống',
        solution:
          'Sự cân bằng giữa đổi mới và truyền thống tạo ra cơ hội thị trường mới cho nghệ thuật ẩm thực Việt Nam',
      },
    ],
    realWorldApplications: [
      'Nhà hàng Việt Nam cao cấp: Trải nghiệm ăn uống sáng tạo',
      'Trường dạy nấu ăn: Giáo dục ẩm thực Việt Nam hiện đại',
      'Phát triển sản phẩm thực phẩm: Đổi mới kết cấu và hương vị mới lạ',
      'Các công ty cung cấp dịch vụ ăn uống: Trình bày sự kiện và đám cưới độc đáo',
      'Du lịch ẩm thực: Các điểm tham quan ẩm thực Việt Nam đặc sắc',
    ],
    caseStudies: [
      {
        title: 'Đổi Mới Nhà Hàng Madame Hiên',
        organization: 'Madame Hiên - Nhà hàng Việt Nam cao cấp',
        problem:
          'Thu hút thực khách quốc tế trong khi vẫn duy trì tính xác thực của ẩm thực Việt Nam trong thị trường nhà hàng cạnh tranh',
        solution:
          'Tích hợp các kỹ thuật ẩm thực phân tử với các công thức nấu ăn truyền thống của Việt Nam tạo ra trải nghiệm ăn uống cao cấp độc đáo',
        impact:
          'Tăng 80% lượng khách hàng quốc tế, đạt được sự công nhận của Michelin, trở thành hình mẫu cho ẩm thực Việt Nam hiện đại',
        innovations: [
          'Kỹ thuật tạo hình cầu hương vị truyền thống',
          'Trình bày nghệ thuật ăn được',
          'Các yếu tố ăn uống tương tác',
          'Tìm nguồn cung ứng nguyên liệu bền vững',
        ],
      },
      {
        title: 'Chương trình của Viện Nghệ thuật Ẩm thực Sài Gòn',
        organization: 'Viện Nghệ thuật Ẩm thực Sài Gòn',
        problem:
          'Đào tạo thế hệ đầu bếp Việt Nam tiếp theo về các kỹ thuật ẩm thực hiện đại trong khi vẫn bảo tồn di sản văn hóa',
        solution:
          'Phát triển chương trình giảng dạy ẩm thực phân tử toàn diện tích hợp kiến thức truyền thống Việt Nam',
        impact:
          'Tốt nghiệp hơn 200 đầu bếp ẩm thực phân tử được chứng nhận, thành lập mạng lưới đổi mới ẩm thực Việt Nam',
        innovations: [
          'Bảo tồn văn hóa thông qua đổi mới',
          'Chương trình hợp tác công nghiệp',
          'Dự án hợp tác nghiên cứu',
          'Chương trình trao đổi quốc tế',
        ],
      },
    ],
    resources: [
      {
        title: 'Cơ sở dữ liệu kỹ thuật ẩm thực phân tử',
        url: 'https://www.molecularrecipes.com/',
        type: 'Tham khảo kỹ thuật',
      },
      {
        title: 'Tạp chí Khoa học & Công nghệ Thực phẩm',
        url: 'https://onlinelibrary.wiley.com/journal/13652621',
        type: 'Ấn phẩm khoa học',
      },
      {
        title: 'Nền tảng đổi mới ẩm thực quốc tế',
        url: 'https://www.culinaryinnovation.org/',
        type: 'Nền tảng công nghiệp',
      },
    ],
    faqs: [
      {
        question: 'Ẩm thực phân tử là gì?',
        answer:
          'Ẩm thực phân tử là một phân ngành của khoa học thực phẩm, tìm cách nghiên cứu, giải thích và ứng dụng các biến đổi hóa học và vật lý của nguyên liệu trong quá trình nấu ăn. Nó sử dụng các kỹ thuật khoa học để tạo ra các kết cấu, hương vị và hình thức trình bày mới lạ.',
      },
      {
        question: 'Kỹ thuật "cầu hóa" (spherification) hoạt động như thế nào?',
        answer:
          'Cầu hóa là một kỹ thuật tạo ra các viên "trứng cá" lỏng bên trong một lớp màng gel mỏng. Quá trình này thường sử dụng natri alginat (chiết xuất từ tảo biển) và canxi clorua. Khi dung dịch chứa alginat tiếp xúc với dung dịch canxi, một phản ứng hóa học xảy ra, tạo thành một lớp gel bao bọc lấy chất lỏng bên trong.',
      },
      {
        question: 'Ẩm thực phân tử có an toàn không?',
        answer:
          'Có, ẩm thực phân tử hoàn toàn an toàn. Các chất phụ gia được sử dụng, như agar-agar, natri alginat, hay lecithin đậu nành, đều có nguồn gốc tự nhiên và đã được cấp phép sử dụng rộng rãi trong ngành công nghiệp thực phẩm. Các kỹ thuật như sử dụng nitơ lỏng cũng an toàn khi được thực hiện đúng cách bởi người đã qua đào tạo.',
      },
      {
        question: 'Mục đích của ẩm thực phân tử là gì? Có phải chỉ để "làm màu" không?',
        answer:
          'Mặc dù hình thức trình bày rất quan trọng, mục đích chính của ẩm thực phân tử là để tăng cường trải nghiệm ăn uống bằng cách tạo ra những sự tương phản bất ngờ về kết cấu và nhiệt độ, hoặc tập trung và khuếch đại hương vị. Nó là một công cụ để đầu bếp thể hiện sự sáng tạo và mang đến cho thực khách một góc nhìn mới về món ăn quen thuộc.',
      },
      {
        question: 'Sous-vide là gì và nó có liên quan đến ẩm thực phân tử không?',
        answer: 'Sous-vide (tiếng Pháp có nghĩa là "dưới chân không") là một kỹ thuật nấu ăn trong đó thực phẩm được cho vào túi hút chân không và nấu trong một nồi nước được kiểm soát nhiệt độ chính xác. Mặc dù không phải lúc nào cũng được coi là ẩm thực phân tử, nó chia sẻ nguyên tắc cốt lõi là sử dụng khoa học để kiểm soát chính xác quá trình nấu nướng, mang lại kết quả nhất quán.',
      },
      {
        question: 'Làm thế nào để tạo ra "bọt" (foam) trong ẩm thực phân tử?',
        answer: 'Bọt có thể được tạo ra bằng cách sử dụng một chất tạo nhũ hóa như lecithin đậu nành. Lecithin giúp ổn định các bong bóng khí trong một chất lỏng. Bằng cách hòa tan lecithin vào một chất lỏng có hương vị (như nước ép trái cây) và sử dụng máy đánh cầm tay, bạn có thể tạo ra một lớp bọt nhẹ và thoáng, chứa đầy hương vị.',
      },
      {
        question: 'Gel hóa (gelling) khác với việc sử dụng gelatin thông thường như thế nào?',
        answer: 'Trong ẩm thực phân tử, các đầu bếp sử dụng nhiều loại hydrocolloid khác nhau (như agar-agar, gellan gum) để tạo ra các loại gel với kết cấu đa dạng, từ mềm dẻo đến cứng giòn, và có thể tạo gel ngay cả trong chất lỏng nóng. Điều này mang lại nhiều khả năng sáng tạo hơn so với gelatin truyền thống.',
      },
      {
        question: 'Có thể áp dụng ẩm thực phân tử tại nhà không?',
        answer: 'Chắc chắn rồi. Nhiều kỹ thuật cơ bản như tạo bọt với lecithin hoặc làm "trứng cá" trái cây với agar-agar có thể được thực hiện tại nhà với các bộ dụng cụ dành cho người mới bắt đầu. Nó đòi hỏi sự chính xác trong việc đo lường, nhưng không quá phức tạp.',
      },
      {
        question: 'Tại sao nitơ lỏng lại được sử dụng trong ẩm thực phân tử?',
        answer: 'Nitơ lỏng có nhiệt độ cực thấp (-196°C). Nó được sử dụng để làm đông lạnh thực phẩm gần như ngay lập tức. Quá trình đông lạnh nhanh này tạo ra các tinh thể băng siêu nhỏ, mang lại kết cấu cực kỳ mịn cho kem hoặc sorbet. Nó cũng tạo ra hiệu ứng khói ấn tượng khi trình bày.',
      },
      {
        question: 'Deconstruction (giải cấu trúc) trong ẩm thực là gì?',
        answer: 'Giải cấu trúc là một khái niệm trong đó một món ăn cổ điển được tách ra thành các thành phần hương vị cốt lõi của nó, sau đó được chế biến và trình bày lại theo một hình thức mới và bất ngờ. Ví dụ, một chiếc bánh phô mai "giải cấu trúc" có thể bao gồm một vệt kem phô mai, vụn bánh quy, và một loại gel dâu tây.',
      },
    ],
  },
  {
    id: 'sustainable-food-production',
    title: 'Sản xuất thực phẩm bền vững và chuỗi cung ứng',
    description:
      'Nghiên cứu các mô hình sản xuất thực phẩm bền vững, giảm thiểu chất thải, tiết kiệm năng lượng và xây dựng chuỗi cung ứng thực phẩm minh bạch, có trách nhiệm.',
    duration: '180',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=7LY3WTHIpsE',
    objectives: [
      'Hiểu các nguyên tắc sản xuất thực phẩm bền vững và các khái niệm kinh tế tuần hoàn',
      'Thiết kế chuỗi cung ứng thực phẩm hiệu quả giảm thiểu chất thải và tác động môi trường',
      'Áp dụng các thực hành bền vững truyền thống của Việt Nam trong bối cảnh hiện đại',
      'Triển khai các chiến lược giảm lãng phí thực phẩm trong chuỗi sản xuất',
      'Đánh giá dấu chân môi trường của các hệ thống sản xuất thực phẩm',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về hệ thống sản xuất thực phẩm và quản lý chuỗi cung ứng',
      'Kiến thức về khoa học môi trường và các nguyên tắc bền vững',
      'Quen thuộc với các thực hành và thách thức nông nghiệp Việt Nam',
      'Hiểu biết về hậu cần và quản lý chất lượng',
    ],
    exercises: [
      {
        title: 'Tối Ưu Hóa Chuỗi Cung Ứng Gạo Đồng Bằng Sông Cửu Long',
        description:
          'Thiết kế chuỗi cung ứng gạo bền vững từ nông dân Đồng bằng sông Cửu Long đến thị trường quốc tế giảm thiểu tác động môi trường',
        difficulty: 'Trung bình',
        materials: [
          'Phần mềm lập bản đồ chuỗi cung ứng',
          'Công cụ đánh giá tác động môi trường',
          'Máy tính chi phí vận chuyển',
          'Thiết bị giám sát chất lượng',
          'Nền tảng truy xuất nguồn gốc blockchain',
        ],
        procedure: [
          'Lập bản đồ chuỗi cung ứng gạo hiện tại từ trang trại đến người tiêu dùng',
          'Xác định các điểm lãng phí và kém hiệu quả trong toàn bộ chuỗi',
          'Thiết kế mạng lưới hậu cần được tối ưu hóa giảm thiểu khí thải vận chuyển',
          'Triển khai hệ thống bảo quản chất lượng giảm tổn thất sau thu hoạch',
          'Phát triển hệ thống truy xuất nguồn gốc cho phép xác minh nguồn cung ứng bền vững',
          'Tính toán tác động môi trường và kinh tế của hệ thống được tối ưu hóa',
        ],
        expectedResults: 'Chuỗi cung ứng bền vững giảm 25% chất thải và 30% dấu chân carbon',
        solution:
          'Phương pháp tiếp cận tích hợp cân bằng giữa tính bền vững về môi trường với tính khả thi về kinh tế cho ngành lúa gạo Việt Nam',
      },
      {
        title: 'Chương trình Giảm Lãng Phí Thực Phẩm Đô Thị',
        description:
          'Phát triển chương trình giảm lãng phí thực phẩm toàn diện cho các nhà hàng và ngành dịch vụ thực phẩm tại Thành phố Hồ Chí Minh',
        difficulty: 'Trung bình',
        materials: [
          'Ứng dụng theo dõi lãng phí thực phẩm',
          'Thông số kỹ thuật thiết bị ủ phân',
          'Nền tảng hậu cần quyên góp thực phẩm',
          'Tài liệu đào tạo nhân viên',
          'Máy tính tác động kinh tế',
        ],
        procedure: [
          'Tiến hành kiểm toán lãng phí thực phẩm trên các loại nhà hàng khác nhau',
          'Thiết kế các chiến lược giảm lãng phí: tối ưu hóa khẩu phần, quản lý hàng tồn kho',
          'Triển khai các chương trình quyên góp thực phẩm kết nối với các tổ chức từ thiện',
          'Thiết lập mạng lưới ủ phân để xử lý chất thải hữu cơ',
          'Tạo các chương trình đào tạo nhân viên thúc đẩy ý thức về lãng phí',
          'Đo lường lợi ích môi trường và kinh tế của các chương trình giảm thiểu',
        ],
        expectedResults:
          'Chương trình giảm lãng phí thực phẩm toàn thành phố giảm 40% chất thải và tạo ra giá trị kinh tế',
        solution:
          'Phương pháp tiếp cận toàn diện biến chất thải từ một trung tâm chi phí thành cơ hội tạo ra giá trị cho các hệ thống thực phẩm đô thị',
      },
    ],
    realWorldApplications: [
      'Hợp tác xã nông nghiệp Việt Nam: Thực hiện thực hành canh tác bền vững',
      'Các công ty chế biến thực phẩm: Kinh tế tuần hoàn và giảm thiểu chất thải',
      'Các công ty hậu cần: Vận tải xanh và tối ưu hóa chuỗi lạnh',
      'Các cơ quan chính phủ: Xây dựng chính sách cho các hệ thống thực phẩm bền vững',
      'Phát triển quốc tế: Quản lý dự án nông nghiệp bền vững',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Nông nghiệp Bền vững của Tập đoàn TH',
        organization: 'Tập đoàn TH - Sữa và Nông nghiệp Tích hợp',
        problem: 'Xây dựng hệ sinh thái nông nghiệp bền vững tích hợp sản xuất sữa, trồng trọt và bảo vệ môi trường',
        solution:
          'Phát triển mô hình nông nghiệp tuần hoàn với các thực hành canh tác hữu cơ, năng lượng tái tạo và tái chế chất thải',
        impact:
          'Tạo ra mạng lưới trang trại bền vững 50.000 ha, giảm 60% tác động môi trường, cải thiện sinh kế của nông dân',
        innovations: [
          'Hệ thống cây trồng-vật nuôi tích hợp',
          'Sản xuất năng lượng khí sinh học',
          'Sản xuất phân bón hữu cơ',
          'Công nghệ bảo tồn nước',
        ],
      },
      {
        title: 'Chương trình Nuôi trồng Thủy sản Bền vững của CP Việt Nam',
        organization: 'Charoen Pokphand Việt Nam',
        problem:
          'Thực hiện các thực hành nuôi tôm bền vững giải quyết các mối quan tâm về môi trường ở Đồng bằng sông Cửu Long',
        solution:
          'Phát triển các hệ thống nuôi trồng thủy sản tích hợp với tái chế nước, thức ăn hữu cơ và phục hồi hệ sinh thái',
        impact:
          'Cải thiện 70% chất lượng nước, tăng 40% thu nhập của nông dân, đạt được các chứng nhận bền vững quốc tế',
        innovations: [
          'Hệ thống nuôi trồng thủy sản khép kín',
          'Xử lý nước sinh học',
          'Công thức thức ăn bền vững',
          'Chương trình phục hồi rừng ngập mặn',
        ],
      },
    ],
    resources: [
      {
        title: 'Mục tiêu Phát triển Bền vững của LHQ - Hệ thống Thực phẩm',
        url: 'https://sdgs.un.org/goals',
        type: 'Khung quốc tế',
      },
      {
        title: 'Hướng dẫn Nông nghiệp Bền vững của FAO',
        url: 'https://www.fao.org/sustainability/',
        type: 'Hướng dẫn kỹ thuật',
      },
      {
        title: 'Các chương trình Bền vững của Bộ Nông nghiệp Việt Nam',
        url: 'https://www.mard.gov.vn/',
        type: 'Sáng kiến của Chính phủ',
      },
    ],
    faqs: [
      {
        question: 'Sản xuất thực phẩm bền vững có nghĩa là gì?',
        answer:
          'Sản xuất thực phẩm bền vững là một phương thức sản xuất đáp ứng nhu cầu lương thực hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai. Nó bao gồm việc bảo vệ môi trường, công bằng xã hội và hiệu quả kinh tế.',
      },
      {
        question: 'Tại sao giảm lãng phí thực phẩm lại quan trọng đối với tính bền vững?',
        answer:
          'Giảm lãng phí thực phẩm giúp tiết kiệm các nguồn tài nguyên quý giá (đất, nước, năng lượng) đã được sử dụng để sản xuất ra nó. Nó cũng làm giảm lượng khí nhà kính (như metan) phát sinh từ thực phẩm phân hủy trong các bãi chôn lấp, góp phần chống biến đổi khí hậu.',
      },
      {
        question: 'Kinh tế tuần hoàn trong chuỗi cung ứng thực phẩm là gì?',
        answer:
          'Kinh tế tuần hoàn trong chuỗi cung ứng thực phẩm nhằm mục đích loại bỏ chất thải bằng cách tận dụng tối đa các nguồn tài nguyên. Ví dụ, phụ phẩm nông nghiệp có thể được chuyển thành thức ăn chăn nuôi hoặc phân bón hữu cơ, và bao bì được thiết kế để có thể tái chế hoặc tái sử dụng hoàn toàn.',
      },
      {
        question: 'Làm thế nào người tiêu dùng có thể góp phần vào một chuỗi cung ứng thực phẩm bền vững hơn?',
        answer:
          'Người tiêu dùng có thể đóng góp bằng cách: mua các sản phẩm địa phương và theo mùa, giảm tiêu thụ thịt, lên kế hoạch bữa ăn để tránh mua thừa và lãng phí thực phẩm, và ủng hộ các thương hiệu cam kết thực hành sản xuất bền vững và minh bạch.',
      },
      {
        question: 'Canh tác hữu cơ (organic farming) là gì?',
        answer: 'Canh tác hữu cơ là một phương pháp nông nghiệp không sử dụng phân bón hóa học tổng hợp, thuốc trừ sâu, thuốc diệt cỏ, hoặc sinh vật biến đổi gen (GMO). Thay vào đó, nó tập trung vào việc duy trì sức khỏe của đất thông qua phân compost, luân canh cây trồng và các phương pháp tự nhiên khác.',
      },
      {
        question: 'Dấu chân carbon (carbon footprint) của thực phẩm là gì?',
        answer: 'Dấu chân carbon của thực phẩm là tổng lượng khí nhà kính được thải ra trong suốt vòng đời của nó, từ sản xuất, chế biến, vận chuyển, đến tiêu thụ và thải bỏ. Thực phẩm có nguồn gốc động vật và được vận chuyển bằng đường hàng không thường có dấu chân carbon cao nhất.',
      },
      {
        question: 'Thực phẩm "từ trang trại đến bàn ăn" (farm-to-table) có ý nghĩa gì?',
        answer: 'Đây là một phong trào xã hội nhằm thúc đẩy việc phục vụ thực phẩm địa phương tại các nhà hàng và cơ sở ăn uống. Bằng cách giảm thiểu các bước trung gian trong chuỗi cung ứng, nó giúp đảm bảo thực phẩm tươi ngon hơn, hỗ trợ nông dân địa phương và giảm tác động môi trường từ việc vận chuyển.',
      },
      {
        question: 'Làm thế nào để giảm lãng phí thực phẩm tại nhà?',
        answer: 'Bạn có thể giảm lãng phí bằng cách: lên kế hoạch bữa ăn và mua sắm theo danh sách, bảo quản thực phẩm đúng cách để giữ được lâu hơn, tận dụng thức ăn thừa để chế biến các món mới, và hiểu sự khác biệt giữa ngày "sử dụng trước" (use by) và "tốt nhất trước" (best before).',
      },
      {
        question: 'Nông nghiệp đô thị (urban agriculture) là gì và lợi ích của nó là gì?',
        answer: 'Nông nghiệp đô thị là việc trồng trọt, chế biến và phân phối thực phẩm trong hoặc xung quanh các thành phố. Lợi ích của nó bao gồm: cung cấp thực phẩm tươi sống cho người dân thành thị, giảm quãng đường vận chuyển thực phẩm, tạo không gian xanh, và giáo dục cộng đồng về nguồn gốc thực phẩm.',
      },
      {
        question: 'Thực phẩm biến đổi gen (GMO) có bền vững không?',
        answer: 'Đây là một chủ đề gây tranh cãi. Những người ủng hộ cho rằng GMO có thể tăng năng suất, giảm nhu cầu sử dụng thuốc trừ sâu và tạo ra các loại cây trồng chịu được hạn hán, góp phần vào an ninh lương thực. Tuy nhiên, những người phản đối lo ngại về các tác động tiềm tàng đối với đa dạng sinh học và sự phụ thuộc vào một số ít các công ty hạt giống lớn.',
      },
    ],
  },
];

export const foodTechnologyModuleData: ModuleData = {
  id: 'food-technology',
  title: 'Công nghệ Thực phẩm',
  description:
    'Khám phá khoa học và công nghệ đằng sau sản xuất, an toàn và đổi mới thực phẩm, từ lên men truyền thống đến ẩm thực phân tử.',
  image: 'https://images.unsplash.com/photo-1587613865763-4b8b0d193f72?q=80&w=2070&auto=format&fit=crop',
  lessons: foodTechnologyLessons,
  category: 'STEM',
  basePath: '/learning/food-technology',
  features: [
    'An toàn thực phẩm & HACCP',
    'Công nghệ lên men truyền thống',
    'Ẩm thực phân tử sáng tạo',
    'Sản xuất thực phẩm bền vững',
  ],
  relatedModules: [K2Module.Biotechnology, K2Module.EnvironmentalScienceClimate, K2Module.KitchenChemistry],
};
