import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export const renewableEnergyModuleData: ModuleData = {
  id: 'renewable-energy',
  title: 'Năng lượng Tái tạo',
  description:
    'Khám phá các công nghệ năng lượng tái tạo hàng đầu và vai trò của chúng trong tương lai năng lượng bền vững của Việt Nam.',
  category: 'green-tech',
  icon: 'wind',
  color: 'from-green-500 to-teal-500',
  totalDuration: '12 giờ',
  difficulty: 'Trung bình',
  lessons: [],
  prerequisites: ['Kiến thức vật lý cơ bản', 'Hiểu biết về các vấn đề môi trường'],
  tags: ['năng lượng tái tạo', 'điện mặt trời', 'điện gió', 'bền vững'],
  features: [
    'Công nghệ quang điện và điện gió',
    'Hệ thống lưu trữ năng lượng',
    'Lưới điện thông minh',
    'Kinh tế và chính sách năng lượng',
  ],
  careerOpportunities: [
    'Kỹ sư năng lượng tái tạo',
    'Chuyên gia phát triển dự án điện gió/mặt trời',
    'Nhà phân tích chính sách năng lượng',
    'Quản lý vận hành nhà máy điện',
  ],
  href: '/learning/renewable-energy',
};

export interface RenewableEnergyLesson extends BaseLessonData {
  energyType?: string;
}

export const renewableEnergyLessons: RenewableEnergyLesson[] = [
  {
    id: 'solar-energy-fundamentals',
    title: 'Hệ thống Năng lượng Mặt trời & Công nghệ Quang điện',
    description:
      'Khám phá công nghệ năng lượng mặt trời từ các tế bào quang điện đến các hệ thống trang trại mặt trời hoàn chỉnh. Học cách thiết kế và tối ưu hóa các hệ thống lắp đặt năng lượng mặt trời cho khí hậu Việt Nam.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=xy9nj94xvKA',
    imageUrl: 'https://i.ytimg.com/vi/xy9nj94xvKA/hqdefault.jpg',
    objectives: [
      'Hiểu hiệu ứng quang điện và cách các tế bào mặt trời chuyển đổi ánh sáng mặt trời thành điện năng',
      'Tìm hiểu về các loại tấm pin mặt trời khác nhau: đơn tinh thể, đa tinh thể, màng mỏng',
      'Làm chủ thiết kế hệ thống năng lượng mặt trời: định cỡ, bộ biến tần, lưu trữ pin',
      'Hiểu về kinh tế và ROI của các hệ thống lắp đặt năng lượng mặt trời trong bối cảnh Việt Nam',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về điện và mạch điện',
      'Kỹ năng toán học: đại số và giải tích cơ bản',
      'Quan tâm đến tính bền vững của môi trường',
    ],
    exercises: [
      {
        title: 'Công cụ tính toán Thiết kế Hệ thống Năng lượng Mặt trời',
        description:
          'Thiết kế một hệ thống năng lượng mặt trời hoàn chỉnh cho một hộ gia đình điển hình ở Việt Nam, tính toán nhu cầu năng lượng và thông số kỹ thuật của hệ thống.',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích mức tiêu thụ điện hàng tháng từ hóa đơn tiền điện',
          'Nghiên cứu dữ liệu bức xạ mặt trời tại các vùng của Việt Nam',
          'Tính toán công suất tấm pin và dung lượng lưu trữ pin cần thiết',
          'Chọn bộ biến tần và thiết bị an toàn phù hợp',
          'Ước tính chi phí lắp đặt và thời gian hoàn vốn',
          'Tạo sơ đồ hệ thống chi tiết và danh sách các thành phần',
        ],
        expectedResults: 'Một thiết kế hệ thống năng lượng mặt trời hoàn chỉnh với phân tích chi phí và dự báo ROI.',
        solution:
          'Hệ thống 5kW điển hình cho một ngôi nhà ở Việt Nam: 20-25 tấm pin, bộ biến tần 5kW, bộ lưu trữ pin 10kWh.',
      },
      {
        title: 'Kiểm tra Hiệu suất Tấm pin Mặt trời',
        description:
          'Kiểm tra các loại tấm pin mặt trời khác nhau trong các điều kiện khác nhau để hiểu các đặc tính hiệu suất.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thiết lập thiết bị thử nghiệm với ánh sáng được kiểm soát',
          'Đo điện áp và dòng điện đầu ra dưới các cường độ ánh sáng khác nhau',
          'Kiểm tra ảnh hưởng của nhiệt độ đến hiệu suất của tấm pin',
          'So sánh hiệu suất của các công nghệ tấm pin khác nhau',
          'Ghi lại dữ liệu và tạo các đường cong hiệu suất',
          'Phân tích kết quả và đề xuất loại tấm pin tối ưu',
        ],
        expectedResults: 'Một phân tích hiệu suất toàn diện của các công nghệ năng lượng mặt trời khác nhau.',
        solution: 'Các tấm pin đơn tinh thể thường cho hiệu suất cao nhất nhưng chi phí trên mỗi watt cao hơn.',
      },
    ],
    realWorldApplications: [
      'Lắp đặt năng lượng mặt trời trên mái nhà cho các tòa nhà dân dụng và thương mại',
      'Các trang trại năng lượng mặt trời ở Đồng bằng sông Cửu Long và Tây Nguyên',
      'Hệ thống năng lượng mặt trời ngoài lưới cho các làng và đảo xa xôi',
      'Hệ thống đun nước nóng bằng năng lượng mặt trời cho khách sạn và bệnh viện',
      'Các tấm pin mặt trời nổi trên các hồ chứa và ao nuôi trồng thủy sản',
    ],
    caseStudies: [
      {
        title: 'Dự án Trang trại Năng lượng Mặt trời Đắk Lắk',
        organization: 'Tỉnh Đắk Lắk, Việt Nam',
        problem:
          'Phát triển một trang trại năng lượng mặt trời quy mô lớn trong khu vực nông nghiệp với tác động môi trường tối thiểu',
        solution:
          'Thực hiện nông nghiệp quang điện: các tấm pin mặt trời được nâng cao trên cây trồng, cho phép tiếp tục canh tác bên dưới',
        impact:
          'Công suất năng lượng mặt trời 450 MW trong khi vẫn duy trì 80% năng suất nông nghiệp, tạo ra các nguồn thu nhập kép',
        innovations: [
          'Nông nghiệp quang điện phù hợp với nền kinh tế nông nghiệp của Việt Nam',
          'Chiều cao tấm pin phù hợp rất quan trọng cho sự phát triển của cây trồng bên dưới',
          'Sự tham gia của cộng đồng là điều cần thiết cho sự thành công của dự án',
          'Những thách thức về tích hợp lưới điện đòi hỏi phải lập kế hoạch cẩn thận',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Năng lượng Mặt trời Việt Nam',
        url: 'https://vsea.org.vn/',
        type: 'Hiệp hội ngành',
      },
    ],
    vietnamContext: {
      title: 'Tiềm năng Năng lượng Mặt trời tại Việt Nam',
      content: [
        'Với đường bờ biển dài và số giờ nắng cao, đặc biệt ở miền Trung và miền Nam, Việt Nam có tiềm năng khổng lồ để phát triển điện mặt trời. Chính phủ đã có nhiều chính sách khuyến khích, dẫn đến sự bùng nổ các dự án điện mặt trời áp mái và trang trại năng lượng mặt trời trong những năm gần đây.',
        'Thách thức lớn nhất là sự ổn định của lưới điện khi tỷ lệ năng lượng tái tạo tăng cao. Các giải pháp lưu trữ năng lượng và lưới điện thông minh đang là ưu tiên hàng đầu.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Mỹ Linh',
      title: 'Kỹ sư trưởng, Dự án Điện mặt trời',
      company: 'Tập đoàn Trung Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Mỗi tấm pin mặt trời chúng tôi lắp đặt không chỉ tạo ra điện sạch, mà còn là một bước tiến tới tương lai năng lượng bền vững cho Việt Nam. Đó là một công việc đầy tự hào.',
    },
    quizzes: [
      {
        question: 'Hiệu ứng "photovoltaic" (quang điện) là gì?',
        options: [
          'Quá trình tạo ra ánh sáng từ điện',
          'Quá trình tạo ra điện từ ánh sáng mặt trời',
          'Quá trình lưu trữ năng lượng mặt trời',
          'Quá trình làm nóng nước bằng mặt trời',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hiệu ứng quang điện là nguyên lý cơ bản của pin mặt trời, nơi các vật liệu bán dẫn hấp thụ photon từ ánh sáng và giải phóng electron, tạo ra dòng điện.',
      },
      {
        question: 'Tại sao các hệ thống điện mặt trời thường cần bộ biến tần (inverter)?',
        options: [
          'Để tăng công suất của tấm pin',
          'Để chuyển đổi dòng điện một chiều (DC) từ pin thành dòng điện xoay chiều (AC) sử dụng trong gia đình',
          'Để làm mát các tấm pin',
          'Để lưu trữ điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tấm pin mặt trời tạo ra dòng điện một chiều (DC), trong khi hầu hết các thiết bị điện trong nhà và lưới điện quốc gia sử dụng dòng điện xoay chiều (AC). Inverter thực hiện nhiệm vụ chuyển đổi này.',
      },
    ],
    faqs: [
      {
        question: 'Tuổi thọ trung bình của một tấm pin mặt trời là bao lâu?',
        answer: 'Hầu hết các nhà sản xuất tấm pin mặt trời đều bảo hành hiệu suất trong 25 năm. Sau 25 năm, hiệu suất của chúng thường giảm xuống còn khoảng 80-85% so với ban đầu, nhưng chúng vẫn có thể tiếp tục sản xuất điện trong nhiều năm nữa.'
      },
      {
        question: 'Chi phí lắp đặt một hệ thống điện mặt trời áp mái cho hộ gia đình ở Việt Nam là bao nhiêu?',
        answer: 'Chi phí phụ thuộc vào công suất hệ thống. Một hệ thống 3-5 kWp, đủ cho hầu hết các hộ gia đình, có chi phí dao động từ 50 đến 90 triệu đồng. Chi phí này đang có xu hướng giảm dần theo thời gian.'
      },
      {
        question: 'Vào những ngày nhiều mây hoặc mưa, hệ thống điện mặt trời có hoạt động không?',
        answer: 'Có, nhưng hiệu suất sẽ giảm. Tấm pin mặt trời vẫn có thể tạo ra điện từ ánh sáng khuếch tán trong những ngày nhiều mây, mặc dù sản lượng sẽ thấp hơn đáng kể so với những ngày nắng đẹp.'
      },
      {
        question: 'Hệ thống điện mặt trời có cần bảo trì thường xuyên không?',
        answer: 'Hệ thống điện mặt trời yêu cầu bảo trì rất ít. Công việc chính là giữ cho bề mặt tấm pin sạch sẽ để đảm bảo hiệu suất tối đa. Bạn nên vệ sinh tấm pin vài lần một năm, đặc biệt là ở những khu vực có nhiều bụi.'
      },
      {
        question: 'Sử dụng điện mặt trời có thực sự giúp bảo vệ môi trường không?',
        answer: 'Chắc chắn có. Điện mặt trời là một nguồn năng lượng sạch, không phát thải khí nhà kính (như CO2) trong quá trình hoạt động, góp phần giảm thiểu biến đổi khí hậu và ô nhiễm không khí.'
      },
      {
        question: 'Pin lưu trữ năng lượng (battery) có cần thiết cho mọi hệ thống điện mặt trời không?',
        answer: 'Không cần thiết nhưng rất được khuyến khích. Nếu không có pin lưu trữ, điện mặt trời dư thừa sẽ được phát lên lưới điện (nếu là hệ thống hòa lưới). Pin lưu trữ cho phép bạn sử dụng điện mặt trời vào ban đêm hoặc khi mất điện, tăng tính tự chủ về năng lượng.'
      },
      {
        question: '"Nông nghiệp quang điện" (Agrivoltaics) là gì?',
        answer: 'Đây là mô hình kết hợp sản xuất nông nghiệp và sản xuất điện mặt trời trên cùng một diện tích đất. Các tấm pin được lắp đặt ở độ cao nhất định, cho phép cây trồng vẫn có thể phát triển bên dưới, tối ưu hóa hiệu quả sử dụng đất.'
      },
      {
        question: 'Sự khác biệt giữa tấm pin đơn tinh thể (mono) và đa tinh thể (poly) là gì?',
        answer: 'Tấm pin mono được làm từ các thỏi silicon đơn tinh thể, có hiệu suất cao hơn và màu đen đồng nhất. Tấm pin poly được làm từ nhiều tinh thể silicon nấu chảy, có hiệu suất thấp hơn một chút, giá thành rẻ hơn và có màu xanh lốm đốm.'
      },
      {
        question: 'Việt Nam có những chính sách nào để khuyến khích điện mặt trời?',
        answer: 'Chính phủ Việt Nam đã triển khai nhiều chính sách, nổi bật là cơ chế giá FIT (Feed-in Tariff) cho phép người dân và doanh nghiệp bán lại điện dư thừa cho EVN với giá ưu đãi. Hiện nay, chính sách đang chuyển dần sang các cơ chế khác như đấu thầu và DPPA.'
      },
      {
        question: 'Làm thế nào để tính toán kích thước hệ thống điện mặt trời phù hợp cho gia đình tôi?',
        answer: 'Bạn cần dựa vào hóa đơn tiền điện hàng tháng để xác định mức tiêu thụ điện trung bình (kWh/tháng). Từ đó, các chuyên gia sẽ tư vấn và thiết kế một hệ thống có công suất (kWp) phù hợp để đáp ứng nhu cầu của gia đình bạn.'
      }
    ]
  },
  {
    id: 'wind-power-technology',
    title: 'Hệ thống Điện gió & Công nghệ Tua bin',
    description:
      'Khám phá công nghệ năng lượng gió từ khí động học đến phát triển trang trại điện gió hoàn chỉnh. Tập trung vào tiềm năng điện gió ngoài khơi của bờ biển Việt Nam.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fsNzBfZoV04',
    imageUrl: 'https://i.ytimg.com/vi/fsNzBfZoV04/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc khí động học và thiết kế cánh của tua bin gió',
      'Tìm hiểu về đánh giá tài nguyên gió và lựa chọn địa điểm',
      'Làm chủ tối ưu hóa bố trí trang trại điện gió và hiệu ứng bóng gió',
      'Khám phá công nghệ điện gió ngoài khơi dành riêng cho điều kiện Việt Nam',
    ],
    prerequisites: [
      'Vật lý cơ bản: cơ học và động lực học chất lỏng',
      'Hiểu biết về sản xuất điện năng',
      'Quen thuộc với các khái niệm khí tượng học',
    ],
    exercises: [
      {
        title: 'Dự án Đánh giá Tài nguyên Gió',
        description:
          'Phân tích dữ liệu gió từ các địa điểm trang trại điện gió tiềm năng của Việt Nam để xác định tính khả thi và lựa chọn tua bin tối ưu.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập dữ liệu gió lịch sử từ các trạm khí tượng',
          'Phân tích phân bố tốc độ gió và các kiểu theo mùa',
          'Tạo biểu đồ hoa gió cho các địa điểm khác nhau',
          'Tính toán ước tính sản lượng năng lượng hàng năm',
          'Đánh giá nhiễu loạn và các điều kiện thời tiết khắc nghiệt',
          'Đề xuất loại tua bin và chiều cao trục tối ưu',
        ],
        expectedResults: 'Một báo cáo tài nguyên gió toàn diện với các dự báo sản xuất năng lượng.',
        solution:
          'Các khu vực ven biển Việt Nam có tốc độ gió trung bình 7-9 m/s, phù hợp với các tua bin gió hiện đại.',
      },
      {
        title: 'Thiết kế Trang trại Điện gió Ngoài khơi',
        description:
          'Thiết kế bố trí trang trại điện gió ngoài khơi cho vùng biển ven bờ Việt Nam, xem xét các ràng buộc về môi trường và kỹ thuật.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích độ sâu của nước và điều kiện đáy biển',
          'Nghiên cứu các khu bảo tồn biển và các tuyến đường vận chuyển',
          'Tối ưu hóa khoảng cách giữa các tua bin để giảm thiểu tổn thất do hiệu ứng bóng gió',
          'Thiết kế hệ thống thu gom điện',
          'Lập kế hoạch hậu cần lắp đặt và bảo trì',
          'Ước tính LCOE (Chi phí năng lượng được san bằng)',
        ],
        expectedResults: 'Một thiết kế trang trại điện gió ngoài khơi hoàn chỉnh với phân tích kinh tế.',
        solution: 'Khoảng cách tối ưu cách nhau 7-10 lần đường kính cánh quạt, với các dây cáp ngầm vào bờ.',
      },
    ],
    realWorldApplications: [
      'Các trang trại điện gió ngoài khơi ở vùng biển Biển Đông',
      'Các dự án phát triển điện gió trên bờ ở các tỉnh Ninh Thuận và Bình Thuận',
      'Các hệ thống điện gió quy mô nhỏ cho các đảo và các cộng đồng vùng sâu vùng xa',
      'Các hệ thống lai gió-mặt trời để ổn định lưới điện',
      'Điện gió công nghiệp cho các cơ sở sản xuất',
    ],
    caseStudies: [
      {
        title: 'Dự án Điện gió Ngoài khơi Kê Gà',
        organization: 'Tỉnh Bình Thuận, Việt Nam',
        problem:
          'Phát triển trang trại điện gió ngoài khơi thương mại đầu tiên tại Việt Nam với các điều kiện biển đầy thách thức',
        solution: 'Sử dụng công nghệ móng tiên tiến và thiết kế tua bin chống bão',
        impact: 'Công suất tiềm năng 3,5 GW với sản lượng ước tính 13 tỷ kWh hàng năm',
        innovations: [
          'Thiết kế chống bão rất quan trọng ở Biển Đông',
          'Phát triển chuỗi cung ứng địa phương là điều cần thiết để giảm chi phí',
          'Đánh giá tác động môi trường phải xem xét các hệ sinh thái biển',
          'Cần nâng cấp cơ sở hạ tầng lưới điện để tích hợp điện gió ngoài khơi',
        ],
      },
    ],
    resources: [
      {
        title: 'Hội đồng Năng lượng Gió Toàn cầu',
        url: 'https://gwec.net/',
        type: 'Tổ chức Nghiên cứu',
      },
    ],
    vietnamContext: {
      title: 'Điện gió ngoài khơi: Tương lai Năng lượng Việt Nam',
      content: [
        'Với hơn 3,200 km đường bờ biển và tốc độ gió ổn định, Việt Nam được đánh giá là một trong những quốc gia có tiềm năng điện gió ngoài khơi lớn nhất Đông Nam Á. Các tỉnh như Bình Thuận, Ninh Thuận, Bạc Liêu đang là điểm nóng cho các dự án điện gió.',
        'Phát triển điện gió ngoài khơi không chỉ giúp đảm bảo an ninh năng lượng mà còn tạo ra một ngành công nghiệp phụ trợ mới, từ xây dựng chân đế, lắp đặt đến vận hành và bảo dưỡng, tạo ra hàng chục nghìn việc làm chất lượng cao.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hải Nam',
      title: 'Giám đốc Vận hành, Trang trại Điện gió',
      company: 'Tập đoàn Mainstream Renewable Power (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Vận hành một trang trại điện gió ngoài khơi giống như điều khiển một dàn nhạc giao hưởng khổng lồ giữa biển khơi. Mỗi turbine là một nhạc công, và nhiệm vụ của chúng tôi là đảm bảo tất cả cùng hòa tấu để tạo ra bản giao hưởng năng lượng sạch.',
    },
    quizzes: [
      {
        question: 'Tại sao điện gió ngoài khơi (offshore) thường hiệu quả hơn trên bờ (onshore)?',
        options: [
          'Gió ngoài khơi thổi mạnh hơn và ổn định hơn',
          'Turbine ngoài khơi rẻ hơn',
          'Lắp đặt ngoài khơi dễ dàng hơn',
          'Gió trên bờ không đủ mạnh',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Gió trên biển không bị cản trở bởi địa hình như đồi núi hay nhà cửa, do đó có tốc độ cao hơn và ổn định hơn, giúp turbine hoạt động với hiệu suất tối ưu.',
      },
      {
        question: 'Các tỉnh nào của Việt Nam có tiềm năng điện gió lớn nhất?',
        options: ['Hà Nội, Hải Phòng', 'Đà Nẵng, Huế', 'Ninh Thuận, Bình Thuận', 'Cần Thơ, Cà Mau'],
        correctAnswerIndex: 2,
        explanation:
          'Các tỉnh duyên hải Nam Trung Bộ như Ninh Thuận và Bình Thuận có tốc độ gió trung bình cao nhất cả nước, là điều kiện lý tưởng để phát triển các dự án điện gió quy mô lớn.',
      },
    ],
    faqs: [
      {
        question: 'Một turbine gió có thể cung cấp điện cho bao nhiêu hộ gia đình?',
        answer: 'Điều này phụ thuộc vào công suất của turbine và mức tiêu thụ điện. Một turbine gió ngoài khơi hiện đại (công suất 10-15 MW) có thể cung cấp đủ điện cho khoảng 10.000 - 15.000 hộ gia đình Việt Nam.'
      },
      {
        question: 'Turbine gió có gây ra tiếng ồn không?',
        answer: 'Có, turbine gió tạo ra tiếng ồn, nhưng ở khoảng cách an toàn (vài trăm mét), mức ồn thường thấp hơn tiếng ồn nền của môi trường xung quanh như tiếng gió, tiếng xe cộ. Các dự án điện gió luôn phải tuân thủ các quy định nghiêm ngặt về tiếng ồn.'
      },
      {
        question: 'Điện gió có ảnh hưởng đến các loài chim không?',
        answer: 'Có, va chạm với cánh quạt là một rủi ro đối với các loài chim. Tuy nhiên, các nghiên cứu và công nghệ hiện đại như sơn một cánh quạt màu đen, sử dụng radar để phát hiện và tạm dừng turbine khi có đàn chim bay qua đang giúp giảm thiểu đáng kể tác động này.'
      },
      {
        question: 'Tại sao chi phí xây dựng điện gió ngoài khơi lại đắt hơn trên bờ?',
        answer: 'Chi phí cao hơn do các yếu tố như: móng turbine cần phức tạp hơn để chịu được sóng và dòng chảy, cáp ngầm dưới biển đắt đỏ, và công tác lắp đặt, vận hành, bảo trì trên biển khó khăn và tốn kém hơn nhiều.'
      },
      {
        question: 'Hiệu ứng "bóng gió" (wake effect) trong một trang trại điện gió là gì?',
        answer: 'Là hiện tượng turbine phía sau bị ảnh hưởng bởi dòng không khí nhiễu động do turbine phía trước tạo ra. Điều này làm giảm tốc độ gió và tăng tải trọng lên turbine phía sau, làm giảm hiệu suất chung của cả trang trại. Việc bố trí khoảng cách hợp lý giữa các turbine là rất quan trọng để giảm hiệu ứng này.'
      },
      {
        question: 'Chiều cao của một turbine gió ngoài khơi hiện đại là bao nhiêu?',
        answer: 'Các turbine gió ngoài khơi ngày càng lớn hơn. Chiều cao tổng thể (tính đến đỉnh cánh quạt) có thể vượt quá 250 mét, tương đương một tòa nhà 80 tầng.'
      },
      {
        question: 'Việt Nam có tự sản xuất được turbine gió không?',
        answer: 'Hiện tại, Việt Nam chủ yếu nhập khẩu các thành phần chính của turbine như cánh quạt, hộp số, máy phát. Tuy nhiên, một số doanh nghiệp trong nước đã bắt đầu tham gia vào chuỗi cung ứng, sản xuất các bộ phận như tháp thép, móng, và cung cấp dịch vụ lắp đặt, bảo trì.'
      },
      {
        question: 'Làm thế nào để turbine gió luôn quay về hướng gió?',
        answer: 'Turbine gió được trang bị một hệ thống điều khiển gọi là "yaw system". Hệ thống này sử dụng các cảm biến tốc độ và hướng gió (anemometer) đặt trên đỉnh vỏ máy để tự động xoay toàn bộ phần đầu turbine (nacelle) đối diện với hướng gió, đảm bảo thu được năng lượng tối đa.'
      },
      {
        question: 'Khi có bão, các turbine gió sẽ hoạt động như thế nào?',
        answer: 'Khi tốc độ gió vượt quá một ngưỡng an toàn (thường khoảng 25 m/s hoặc 90 km/h), hệ thống điều khiển sẽ tự động xoay các cánh quạt để chúng song song với hướng gió và khóa rotor lại để tránh hư hỏng. Đây được gọi là chế độ "dừng bão".'
      },
      {
        question: 'Tiềm năng điện gió ngoài khơi của Việt Nam lớn đến mức nào?',
        answer: 'Theo Ngân hàng Thế giới (World Bank), Việt Nam có tiềm năng điện gió ngoài khơi ước tính khoảng 475 GW, một con số khổng lồ, đủ sức đáp ứng toàn bộ nhu cầu điện của quốc gia trong tương lai và trở thành một trung tâm năng lượng sạch của khu vực.'
      }
    ]
  },
  {
    id: 'energy-storage-systems',
    title: 'Lưu trữ Năng lượng & Tích hợp Lưới điện Thông minh',
    description:
      'Làm chủ các công nghệ lưu trữ năng lượng tiên tiến và các chiến lược tích hợp lưới điện. Cần thiết để quản lý sự biến đổi của năng lượng tái tạo trong các hệ thống điện hiện đại.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=1MpWH6-xQqs',
    imageUrl: 'https://i.ytimg.com/vi/1MpWH6-xQqs/hqdefault.jpg',
    objectives: [
      'So sánh các công nghệ lưu trữ năng lượng khác nhau: pin, thủy điện tích năng, khí nén',
      'Hiểu vai trò ổn định lưới điện của các hệ thống lưu trữ năng lượng',
      'Tìm hiểu về các công nghệ lưới điện thông minh và đáp ứng nhu cầu',
      'Thiết kế các hệ thống tái tạo lai với kích thước lưu trữ tối ưu',
    ],
    prerequisites: [
      'Hiểu biết về các hệ thống điện năng',
      'Kiến thức về các đặc tính của năng lượng tái tạo',
      'Kỹ năng kinh tế và phân tích tài chính cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Lưu trữ Pin',
        description:
          'Thiết kế hệ thống lưu trữ năng lượng pin để tích hợp năng lượng tái tạo quy mô lớn vào mạng lưới điện Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích các yêu cầu về ổn định lưới điện và nhu cầu điều chỉnh tần số',
          'Nghiên cứu các kiểu sản lượng và sự biến đổi của năng lượng tái tạo',
          'Tính toán dung lượng pin tối ưu cho các ứng dụng khác nhau',
          'So sánh pin lithium-ion, pin dòng chảy và các công nghệ khác',
          'Thiết kế hệ thống chuyển đổi điện và giao diện lưới điện',
          'Thực hiện phân tích kinh tế với các nguồn doanh thu khác nhau',
        ],
        expectedResults: 'Một thiết kế hệ thống lưu trữ pin hoàn chỉnh với một trường hợp kinh doanh.',
        solution: 'Hệ thống 100MW/400MWh cung cấp thời gian 4 giờ để chuyển đổi cao điểm và điều chỉnh tần số.',
      },
      {
        title: 'Phân tích Lưu trữ Thủy điện Tích năng',
        description: 'Đánh giá các địa điểm lưu trữ thủy điện tích năng tiềm năng ở các vùng núi của Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Xác định các địa điểm phù hợp với chênh lệch độ cao thích hợp',
          'Phân tích lượng nước sẵn có và các ràng buộc về môi trường',
          'Tính toán dung lượng lưu trữ và hiệu suất khứ hồi',
          'Thiết kế hệ thống bơm-tua bin và cơ sở hạ tầng hồ chứa',
          'Đánh giá tác động môi trường và các biện pháp giảm thiểu',
          'So sánh kinh tế với các lựa chọn lưu trữ khác',
        ],
        expectedResults: 'Một nghiên cứu khả thi để phát triển thủy điện tích năng.',
        solution: 'Các ngọn núi phía Bắc Việt Nam mang lại tiềm năng tuyệt vời với chênh lệch độ cao hơn 500m.',
      },
    ],
    realWorldApplications: [
      'Lưu trữ pin quy mô lớn để tích hợp năng lượng tái tạo',
      'Lưu trữ thủy điện tích năng ở các vùng núi',
      'Lưu trữ năng lượng phân tán ở các khu vực đô thị',
      'Lưu trữ năng lượng công nghiệp để quản lý nhu cầu',
      'Cơ sở hạ tầng sạc xe điện có bộ lưu trữ',
    ],
    caseStudies: [
      {
        title: 'Dự án Thí điểm Lưới điện Thông minh của EVN',
        organization: 'EVN Thành phố Hồ Chí Minh',
        problem: 'Tích hợp mức độ cao của năng lượng mặt trời trên mái nhà với lưới điện phân phối đô thị',
        solution: 'Triển khai hệ thống lưu trữ pin phân tán và các hệ thống quản lý lưới điện tiên tiến',
        impact: 'Tăng 40% tỷ lệ thâm nhập năng lượng tái tạo với sự ổn định lưới điện được cải thiện',
        innovations: [
          'Lưu trữ phân tán hiệu quả hơn lưu trữ tập trung ở các khu vực đô thị',
          'Các bộ biến tần thông minh rất quan trọng đối với sự ổn định của lưới điện',
          'Sự tham gia của khách hàng rất quan trọng đối với các chương trình đáp ứng nhu cầu',
          'Khung pháp lý cần được cập nhật cho các công nghệ mới',
        ],
      },
    ],
    resources: [
      {
        title: 'Cơ quan Năng lượng Tái tạo Quốc tế (IRENA)',
        url: 'https://www.irena.org/',
        type: 'Tổ chức Quốc tế',
      },
    ],
    vietnamContext: {
      title: 'Lưu trữ Năng lượng: Chìa khóa cho An ninh Năng lượng',
      content: [
        'Khi tỷ lệ điện mặt trời và điện gió tăng lên, tính không ổn định của chúng (chỉ phát điện khi có nắng, có gió) đặt ra thách thức lớn cho lưới điện Việt Nam. Hệ thống lưu trữ năng lượng (Energy Storage Systems - ESS) chính là giải pháp.',
        'Việt Nam đang nghiên cứu và thí điểm các giải pháp lưu trữ khác nhau, từ pin lithium-ion quy mô lớn, thủy điện tích năng, cho đến các hệ thống pin nhỏ hơn tại các hộ gia đình và nhà máy. Đây là một lĩnh vực công nghệ mới và đầy tiềm năng.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Vũ Ngọc Sơn',
      title: 'Trưởng phòng Nghiên cứu Lưới điện Thông minh',
      company: 'Đại học Bách Khoa Hà Nội (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Nếu năng lượng tái tạo là trái tim của hệ thống điện tương lai, thì lưu trữ năng lượng chính là bộ não và hệ tuần hoàn, đảm bảo dòng chảy năng lượng luôn ổn định và thông suốt.',
    },
    quizzes: [
      {
        question: 'Tại sao hệ thống lưu trữ năng lượng lại quan trọng đối với năng lượng tái tạo?',
        options: [
          'Để làm cho năng lượng tái tạo rẻ hơn',
          'Để lưu trữ năng lượng khi sản xuất dư thừa và phát ra khi cần thiết, giúp ổn định lưới điện',
          'Để tăng công suất của các nhà máy điện',
          'Để thay thế hoàn toàn lưới điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Năng lượng mặt trời và gió có tính biến đổi. Hệ thống lưu trữ giúp "làm phẳng" sự biến đổi này bằng cách tích trữ năng lượng vào ban ngày (nhiều nắng) hoặc khi gió mạnh, và cung cấp lại cho lưới điện vào buổi tối hoặc khi lặng gió.',
      },
      {
        question: 'Đâu là công nghệ lưu trữ năng lượng phổ biến nhất hiện nay cho các ứng dụng quy mô lớn?',
        options: ['Pin AA', 'Pin Lithium-ion', 'Bánh đà (Flywheels)', 'Tụ điện'],
        correctAnswerIndex: 1,
        explanation:
          'Nhờ sự phát triển của ngành công nghiệp xe điện, pin Lithium-ion đã có những bước tiến vượt bậc về giá thành và mật độ năng lượng, trở thành công nghệ hàng đầu cho các hệ thống lưu trữ năng lượng từ quy mô nhỏ đến lớn.',
      },
    ],
    faqs: [
      {
        question: 'Ngoài pin Lithium-ion, còn có những công nghệ lưu trữ năng lượng nào khác?',
        answer: 'Có nhiều công nghệ khác như: Thủy điện tích năng (dùng nước để lưu trữ thế năng), pin dòng chảy (redox flow battery), lưu trữ năng lượng bằng khí nén (CAES), bánh đà (flywheel), và các công nghệ mới nổi như pin thể rắn và pin natri-ion.'
      },
      {
        question: '"Lưới điện thông minh" (Smart Grid) là gì?',
        answer: 'Là một hệ thống lưới điện được hiện đại hóa, sử dụng công nghệ thông tin và truyền thông để thu thập và xử lý dữ liệu về hành vi của nhà cung cấp và người tiêu dùng. Điều này cho phép lưới điện tự động điều chỉnh, tăng hiệu quả, độ tin cậy và tích hợp tốt hơn các nguồn năng lượng tái tạo.'
      },
      {
        question: 'Hệ thống lưu trữ năng lượng có thể giúp tôi tiết kiệm tiền điện không?',
        answer: 'Có. Bằng cách lưu trữ điện mặt trời vào ban ngày để dùng vào buổi tối, bạn sẽ giảm lượng điện mua từ lưới điện vào giờ cao điểm (giá cao). Ngoài ra, một số nơi có cơ chế cho phép bạn bán lại điện từ pin của mình cho lưới điện khi có nhu cầu cao, tạo thêm một nguồn thu nhập.'
      },
      {
        question: 'Tuổi thọ của một hệ thống pin lưu trữ năng lượng là bao lâu?',
        answer: 'Tuổi thọ của pin lithium-ion thường được tính bằng số chu kỳ sạc-xả và độ sâu xả (Depth of Discharge - DoD). Hầu hết các hệ thống pin dân dụng hiện nay được bảo hành từ 10 đến 15 năm hoặc một số lượng chu kỳ nhất định (ví dụ: 6000 chu kỳ).'
      },
      {
        question: 'Thủy điện tích năng hoạt động như thế nào?',
        answer: 'Nó hoạt động như một cục pin nước khổng lồ. Khi thừa điện (giá rẻ), hệ thống sẽ bơm nước từ một hồ chứa thấp lên một hồ chứa cao hơn. Khi cần điện (giá cao), nước sẽ được xả từ hồ cao xuống hồ thấp qua các turbine để phát điện.'
      },
      {
        question: 'Hệ thống lưu trữ năng lượng có an toàn không?',
        answer: 'Các hệ thống lưu trữ năng lượng hiện đại từ các nhà sản xuất uy tín đều được trang bị nhiều lớp bảo vệ an toàn, bao gồm hệ thống quản lý pin (BMS) để giám sát nhiệt độ, điện áp, dòng điện và ngăn ngừa các sự cố như quá nhiệt, quá sạc. Việc lắp đặt đúng tiêu chuẩn kỹ thuật là cực kỳ quan trọng.'
      },
      {
        question: '"Đáp ứng nhu cầu" (Demand Response) trong lưới điện thông minh là gì?',
        answer: 'Là khả năng của người tiêu dùng có thể chủ động giảm hoặc dời việc sử dụng điện của mình trong những giờ cao điểm, để đáp lại các tín hiệu về giá hoặc các yêu cầu từ công ty điện lực. Điều này giúp giảm tải cho lưới điện mà không cần xây thêm nhà máy điện mới.'
      },
      {
        question: 'Tại sao lưu trữ năng lượng lại quan trọng cho việc phát triển xe điện?',
        answer: 'Lưu trữ năng lượng giúp quản lý tác động của việc sạc đồng loạt nhiều xe điện lên lưới điện. Các trạm sạc có thể được trang bị pin lưu trữ để sạc vào giờ thấp điểm và cung cấp cho xe vào giờ cao điểm. Ngoài ra, công nghệ Vehicle-to-Grid (V2G) còn cho phép xe điện hoạt động như một nguồn điện di động, bán lại điện cho lưới khi cần.'
      },
      {
        question: 'Dung lượng lưu trữ của pin được đo bằng đơn vị gì?',
        answer: 'Dung lượng lưu trữ năng lượng thường được đo bằng kilowatt-giờ (kWh). Ví dụ, một hệ thống pin 10 kWh có thể cung cấp công suất 1 kW liên tục trong 10 giờ, hoặc 2 kW trong 5 giờ.'
      },
      {
        question: 'Việt Nam có tiềm năng phát triển thủy điện tích năng không?',
        answer: 'Có, Việt Nam có tiềm năng đáng kể để phát triển thủy điện tích năng, đặc biệt là ở các vùng miền núi phía Bắc và miền Trung, nơi có địa hình chênh lệch độ cao lớn. Đây được coi là một giải pháp lưu trữ quy mô lớn và dài hạn hiệu quả cho hệ thống điện quốc gia.'
      }
    ]
  },
  {
    id: 'hydroelectric-systems',
    title: 'Thủy điện & Thủy điện quy mô nhỏ',
    description:
      'Khám phá công nghệ thủy điện từ các đập lớn đến các hệ thống thủy điện siêu nhỏ. Tập trung vào nguồn tài nguyên nước dồi dào của Việt Nam và các ứng dụng quy mô nhỏ.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=wzc99DVGhcE',
    imageUrl: 'https://i.ytimg.com/vi/wzc99DVGhcE/hqdefault.jpg',
    objectives: [
      'Hiểu các loại tua bin thủy điện và tiêu chí lựa chọn',
      'Tìm hiểu về đánh giá tác động môi trường cho các dự án thủy điện',
      'Làm chủ thiết kế thủy điện quy mô nhỏ để điện khí hóa nông thôn',
      'Khám phá thủy điện tích năng để cân bằng lưới điện',
    ],
    prerequisites: [
      'Cơ học chất lỏng và thủy lực cơ bản',
      'Hiểu biết về máy phát điện',
      'Nhận thức về khoa học môi trường',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Thủy điện Siêu nhỏ',
        description:
          'Thiết kế một hệ thống thủy điện siêu nhỏ cho một ngôi làng vùng sâu vùng xa ở vùng núi Việt Nam bằng cách sử dụng các nguồn nước địa phương.',
        difficulty: 'Trung bình',
        procedure: [
          'Đo tốc độ dòng chảy của nước và sự thay đổi theo mùa',
          'Tính toán cột nước có sẵn và tiềm năng công suất thô',
          'Chọn loại tua bin phù hợp (Pelton, dòng chảy ngang, Turgo)',
          'Thiết kế cấu trúc cửa vào và hệ thống ống dẫn nước',
          'Định cỡ máy phát điện và hệ thống điều khiển',
          'Lập kế hoạch các quy trình lắp đặt và bảo trì',
        ],
        expectedResults: 'Một hệ thống thủy điện siêu nhỏ hoàn chỉnh cung cấp điện đáng tin cậy cho làng.',
        solution: 'Hệ thống tua bin dòng chảy ngang 25kW phục vụ 50 hộ gia đình với hoạt động 6 giờ mỗi ngày.',
      },
    ],
    realWorldApplications: [
      'Các đập thủy điện quy mô lớn như Sơn La và Hòa Bình',
      'Thủy điện quy mô nhỏ cho các cộng đồng miền núi nông thôn',
      'Các hệ thống chạy trên sông với tác động môi trường tối thiểu',
      'Các hệ thống tích năng trong các ứng dụng lưới điện',
      'Các hệ thống thủy điện tích hợp tưới tiêu',
    ],
    caseStudies: [
      {
        title: 'Chương trình Thủy điện Quy mô nhỏ của Việt Nam',
        organization: 'Các tỉnh miền núi phía Bắc Việt Nam',
        problem: 'Cung cấp điện cho các làng vùng sâu vùng xa với kết nối lưới điện tối thiểu',
        solution: 'Phát triển các hệ thống thủy điện siêu nhỏ được tiêu chuẩn hóa với các mô hình sở hữu cộng đồng',
        impact: 'Hơn 1.000 ngôi làng được điện khí hóa với độ tin cậy của hệ thống là 95%',
        innovations: [
          'Đào tạo cộng đồng rất quan trọng cho sự thành công lâu dài',
          'Các thiết kế được tiêu chuẩn hóa giúp giảm chi phí và đơn giản hóa việc bảo trì',
          'Giám sát môi trường đảm bảo hoạt động bền vững',
          'Các mô hình chia sẻ doanh thu cung cấp kinh phí bảo trì',
        ],
      },
    ],
    resources: [
      {
        title: 'Hiệp hội Thủy điện nhỏ Việt Nam',
        url: 'http://vsha.org.vn/',
        type: 'Hiệp hội ngành',
      },
    ],
    vietnamContext: {
      title: 'Thủy điện: Xương sống và Tương lai Bền vững',
      content: [
        'Thủy điện từ lâu đã là xương sống của hệ thống điện Việt Nam, với các nhà máy lớn như Hòa Bình, Sơn La. Tuy nhiên, tiềm năng thủy điện lớn đã gần cạn kiệt và các vấn đề môi trường ngày càng được quan tâm hơn.',
        'Xu hướng hiện nay là phát triển các dự án thủy điện nhỏ và siêu nhỏ (micro-hydro) ở các vùng sâu vùng xa, kết hợp với mục tiêu xóa đói giảm nghèo và phát triển nông thôn. Thủy điện tích năng cũng được xem là một giải pháp lưu trữ năng lượng quy mô lớn hiệu quả.',
      ],
    },
    careerConnect: {
      name: 'Ông Hoàng Văn Chất',
      title: 'Chuyên gia Thủy điện',
      company: 'Tập đoàn Điện lực Việt Nam (EVN)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Khai thác năng lượng từ dòng nước là một trong những hình thức năng lượng tái tạo lâu đời nhất, nhưng nó vẫn còn rất nhiều tiềm năng để đổi mới. Thách thức của thế hệ chúng tôi là làm cho thủy điện trở nên thông minh hơn, linh hoạt hơn và thân thiện hơn với môi trường.',
    },
    quizzes: [
      {
        question: 'Thủy điện "tích năng" (pumped storage) hoạt động như thế nào?',
        options: [
          'Sử dụng dòng chảy tự nhiên của sông',
          'Bơm nước từ hồ chứa thấp lên hồ chứa cao hơn khi thừa điện, và xả xuống để phát điện khi thiếu điện',
          'Chỉ hoạt động vào mùa mưa',
          'Là một loại pin hóa học',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thủy điện tích năng hoạt động như một cục pin khổng lồ. Nó sử dụng điện giá rẻ (thường là từ năng lượng tái tạo vào giờ thấp điểm) để bơm nước lên cao, và biến thế năng của nước đó thành điện khi lưới điện có nhu cầu cao.',
      },
      {
        question: 'Đâu là một ưu điểm của thủy điện nhỏ so với thủy điện lớn?',
        options: [
          'Sản xuất nhiều điện hơn',
          'Ít tác động đến môi trường và hệ sinh thái hơn',
          'Chi phí xây dựng cao hơn',
          'Yêu cầu công nghệ phức tạp hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thủy điện nhỏ thường không yêu cầu xây dựng các đập lớn, ít ảnh hưởng đến dòng chảy tự nhiên của sông và hệ sinh thái xung quanh, đồng thời phù hợp để cung cấp điện cho các cộng đồng nhỏ, biệt lập.',
      },
    ],
    faqs: [
      {
        question: 'Thủy điện có phải là năng lượng tái tạo không?',
        answer: 'Có, thủy điện được coi là một dạng năng lượng tái tạo vì nó sử dụng chu trình tuần hoàn của nước trong tự nhiên. Tuy nhiên, các dự án thủy điện lớn có thể gây ra các tác động môi trường và xã hội đáng kể, nên tính "bền vững" của chúng vẫn là một chủ đề được tranh luận.'
      },
      {
        question: 'Nhà máy thủy điện lớn nhất Việt Nam là nhà máy nào?',
        answer: 'Nhà máy Thủy điện Sơn La là nhà máy thủy điện lớn nhất Việt Nam và cả Đông Nam Á, với công suất lắp đặt 2.400 MW.'
      },
      {
        question: '"Cột nước" trong thủy điện có nghĩa là gì?',
        answer: 'Cột nước (head) là chênh lệch độ cao giữa mực nước ở hồ chứa phía trên và mực nước ở cửa ra của turbine phía dưới. Cột nước càng cao và lưu lượng nước càng lớn thì tiềm năng phát điện càng cao.'
      },
      {
        question: 'Thủy điện "chạy trên sông" (run-of-river) khác gì với thủy điện có hồ chứa?',
        answer: 'Thủy điện chạy trên sông chỉ sử dụng một phần dòng chảy tự nhiên của sông để quay turbine mà không cần xây đập lớn để tích nước. Loại hình này ít gây tác động đến môi trường nhưng sản lượng điện phụ thuộc nhiều vào lưu lượng nước theo mùa.'
      },
      {
        question: 'Tua bin Pelton và tua bin Francis khác nhau như thế nào?',
        answer: 'Đây là hai loại tua bin thủy điện phổ biến. Tua bin Pelton (gáo) là loại tua bin xung lực, phù hợp với nơi có cột nước cao và lưu lượng thấp. Tua bin Francis là loại tua bin phản lực, hoạt động hiệu quả ở dải cột nước và lưu lượng rộng hơn, là loại được sử dụng phổ biến nhất trên thế giới.'
      },
      {
        question: 'Ngoài sản xuất điện, các đập thủy điện lớn còn có vai trò gì khác?',
        answer: 'Các đập thủy điện lớn còn có vai trò quan trọng trong việc kiểm soát lũ lụt cho vùng hạ du, cung cấp nước cho tưới tiêu nông nghiệp, sinh hoạt, và phát triển giao thông đường thủy, du lịch.'
      },
      {
        question: 'Phát triển thủy điện có thể gây ra những tác động tiêu cực nào?',
        answer: 'Các tác động tiêu cực có thể bao gồm: mất đất và di dời dân cư, thay đổi hệ sinh thái aguas và hạ lưu, ảnh hưởng đến các loài cá di cư, lắng đọng phù sa, và nguy cơ mất an toàn đập.'
      },
      {
        question: 'Thủy điện siêu nhỏ (pico-hydro) là gì?',
        answer: 'Là các hệ thống thủy điện có công suất rất nhỏ, thường dưới 5 kW. Chúng rất phù hợp để cung cấp điện cho một vài hộ gia đình hoặc một trang trại nhỏ ở những khu vực miền núi hẻo lánh có sông suối nhỏ.'
      },
      {
        question: 'Làm thế nào để giảm tác động môi trường của các dự án thủy điện?',
        answer: 'Các biện pháp bao gồm: xây dựng các "đường đi cho cá" (fish ladder) để cá có thể di cư, duy trì "dòng chảy môi trường" tối thiểu để duy trì sự sống ở hạ lưu, quản lý trầm tích, và thực hiện các chương trình tái định cư và hỗ trợ sinh kế bền vững cho người dân bị ảnh hưởng.'
      },
      {
        question: 'Tại sao thủy điện lại đóng vai trò quan trọng trong việc ổn định lưới điện?',
        answer: 'So với các nhà máy nhiệt điện, các nhà máy thủy điện có khả năng khởi động, dừng và thay đổi công suất rất nhanh. Điều này giúp chúng đóng vai trò như một nguồn điện dự phòng linh hoạt, nhanh chóng bù đắp sự thiếu hụt công suất khi có sự cố hoặc khi các nguồn năng lượng biến đổi như mặt trời, gió ngừng phát.'
      }
    ]
  },
  {
    id: 'renewable-economics-policy',
    title: 'Kinh tế & Chính sách Năng lượng Tái tạo tại Việt Nam',
    description:
      'Hiểu về kinh tế, khung chính sách và các mô hình kinh doanh để phát triển năng lượng tái tạo tại Việt Nam. Cần thiết cho việc phát triển dự án và các quyết định đầu tư.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=eFf4CnMqs40',
    imageUrl: 'https://i.ytimg.com/vi/eFf4CnMqs40/hqdefault.jpg',
    objectives: [
      'Hiểu các chính sách và ưu đãi về năng lượng tái tạo của Việt Nam',
      'Tìm hiểu về tài chính dự án và các cơ cấu đầu tư',
      'Làm chủ các tính toán LCOE và phân tích kinh tế',
      'Khám phá các mô hình kinh doanh và các nguồn doanh thu',
    ],
    prerequisites: [
      'Kinh tế và phân tích tài chính cơ bản',
      'Hiểu biết về các công nghệ năng lượng tái tạo',
      'Quen thuộc với các khái niệm quản lý dự án',
    ],
    exercises: [
      {
        title: 'Phân tích Đầu tư Năng lượng Tái tạo',
        description: 'Thực hiện một phân tích tài chính hoàn chỉnh cho một dự án năng lượng tái tạo tại Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Nghiên cứu các mức giá FIT (Biểu giá điện hỗ trợ) hiện tại và các ưu đãi chính sách',
          'Tính toán chi phí vốn và chi phí vận hành',
          'Xây dựng các dự báo dòng tiền trong suốt vòng đời của dự án',
          'Thực hiện phân tích độ nhạy đối với các biến số chính',
          'Đánh giá các lựa chọn tài chính và các cơ cấu nợ',
          'Tính toán IRR, NPV và thời gian hoàn vốn',
        ],
        expectedResults: 'Một đề xuất đầu tư hoàn chỉnh với đánh giá rủi ro.',
        solution: 'Các dự án năng lượng mặt trời cho thấy IRR 12-15% với các mức giá FIT hiện tại của Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Các chính sách FIT thúc đẩy phát triển năng lượng mặt trời và gió',
      'Trái phiếu xanh tài trợ cho các dự án tái tạo',
      'Các hợp đồng mua bán điện doanh nghiệp (PPA)',
      'Các chương trình điện khí hóa nông thôn',
      'Đo đếm điện năng cho thế hệ phân tán',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Phát triển Năng lượng Tái tạo của Việt Nam',
        organization: 'Chính phủ Việt Nam',
        problem:
          'Chuyển đổi từ hệ thống điện phụ thuộc vào than đá sang lưới điện chủ yếu là năng lượng tái tạo vào năm 2050',
        solution: 'Thực hiện một khung chính sách toàn diện với các ưu đãi dành riêng cho từng công nghệ',
        impact: 'Công suất năng lượng tái tạo tăng từ 5% lên 12% trong 5 năm (2015-2020)',
        innovations: [
          'Biểu giá điện hỗ trợ có hiệu quả để phát triển thị trường nhanh chóng',
          'Nâng cấp cơ sở hạ tầng lưới điện là điều cần thiết để tích hợp năng lượng tái tạo',
          'Các yêu cầu về hàm lượng nội địa hỗ trợ ngành công nghiệp trong nước',
          'Đấu thầu cạnh tranh thay thế FIT để giảm chi phí',
        ],
      },
    ],
    resources: [
      {
        title: 'Bộ Công Thương Việt Nam',
        url: 'https://www.moit.gov.vn/',
        type: 'Cơ quan Chính phủ',
      },
    ],
    vietnamContext: {
      title: 'Chính sách Năng lượng Tái tạo: Động lực và Thách thức',
      content: [
        'Chính sách giá FIT (Feed-in Tariff) của Việt Nam đã tạo ra một cú hích mạnh mẽ, thu hút hàng tỷ USD đầu tư vào điện mặt trời và điện gió. Tuy nhiên, sự phát triển quá nóng cũng gây áp lực lớn lên hạ tầng lưới điện.',
        'Hiện tại, Việt Nam đang chuyển dịch sang cơ chế đấu thầu cạnh tranh và Hợp đồng Mua bán điện trực tiếp (DPPA), cho phép các doanh nghiệp lớn mua điện trực tiếp từ các nhà sản xuất năng lượng tái tạo. Đây là những bước đi quan trọng để tạo ra một thị trường năng lượng cạnh tranh và bền vững hơn.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Nguyễn Thị Thu Trang',
      title: 'Chuyên gia, Mảng Năng lượng & Cơ sở hạ tầng',
      company: 'Baker & McKenzie Việt Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Làm luật trong ngành năng lượng tái tạo là bạn đang tham gia định hình tương lai. Mỗi điều khoản trong hợp đồng, mỗi ý kiến đóng góp cho chính sách đều có thể ảnh hưởng đến việc hàng triệu người dân được sử dụng năng lượng sạch.',
    },
    quizzes: [
      {
        question: 'Giá FIT (Feed-in Tariff) là gì?',
        options: [
          'Giá điện người dân phải trả',
          'Một mức giá điện ưu đãi, cố định mà chính phủ đảm bảo trả cho các nhà sản xuất năng lượng tái tạo trong một khoảng thời gian nhất định',
          'Thuế môi trường đối với năng lượng hóa thạch',
          'Giá cổ phiếu của các công ty năng lượng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Giá FIT là một công cụ chính sách mạnh mẽ để khuyến khích đầu tư vào năng lượng tái tạo trong giai đoạn đầu, bằng cách đảm bảo một mức lợi nhuận hấp dẫn và giảm rủi ro cho nhà đầu tư.',
      },
      {
        question: 'Hợp đồng Mua bán điện trực tiếp (DPPA) cho phép điều gì?',
        options: [
          'Chính phủ bán điện cho dân',
          'Các doanh nghiệp (ví dụ: nhà máy) mua điện trực tiếp từ các nhà phát triển năng lượng tái tạo',
          'Người dân bán lại điện cho nhau',
          'Chỉ các công ty nước ngoài được mua điện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'DPPA tạo ra một thị trường tự do hơn, nơi các doanh nghiệp có nhu cầu sử dụng năng lượng sạch lớn có thể ký hợp đồng dài hạn trực tiếp với các nhà máy điện mặt trời, điện gió, giúp họ đạt được các mục tiêu về phát triển bền vững.',
      },
    ],
    faqs: [
      {
        question: 'LCOE (Levelized Cost of Energy) là gì và tại sao nó quan trọng?',
        answer: 'LCOE là tổng chi phí vòng đời của một nhà máy điện chia cho tổng sản lượng điện mà nó tạo ra. Đây là một thước đo chuẩn để so sánh chi phí sản xuất điện từ các nguồn khác nhau (ví dụ: so sánh LCOE của điện mặt trời với điện than). Một LCOE thấp hơn có nghĩa là nguồn năng lượng đó kinh tế hơn.'
      },
      {
        question: '"Trái phiếu xanh" (Green Bond) là gì?',
        answer: 'Là một loại trái phiếu được phát hành để huy động vốn dành riêng cho các dự án có tác động tích cực đến môi trường, chẳng hạn như các dự án năng lượng tái tạo, hiệu quả năng lượng, hoặc giao thông sạch.'
      },
      {
        question: 'Tại sao việc nâng cấp lưới điện lại quan trọng khi phát triển năng lượng tái tạo?',
        answer: 'Lưới điện truyền thống được thiết kế cho dòng điện một chiều từ các nhà máy lớn. Năng lượng tái tạo, đặc biệt là điện mặt trời áp mái, có tính phân tán và không ổn định. Lưới điện cần được nâng cấp thành "lưới điện thông minh" để có thể quản lý dòng điện hai chiều và cân bằng sự biến thiên của các nguồn này.'
      },
      {
        question: 'Cơ chế đấu thầu (auction/bidding) trong năng lượng tái tạo hoạt động như thế nào?',
        answer: 'Thay vì đưa ra một mức giá FIT cố định, chính phủ sẽ xác định một lượng công suất cần phát triển (ví dụ: 500 MW điện gió). Các nhà đầu tư sẽ tham gia đấu thầu bằng cách đưa ra mức giá bán điện mà họ đề xuất. Các dự án có giá thầu thấp nhất sẽ được chọn để thực hiện. Cơ chế này thúc đẩy cạnh tranh và giúp giảm giá điện.'
      },
      {
        question: 'Hợp đồng mua bán điện (PPA - Power Purchase Agreement) là gì?',
        answer: 'Là một hợp đồng dài hạn giữa một bên sản xuất điện và một bên mua điện. Hợp đồng này xác định các điều khoản thương mại như thời hạn, giá điện, sản lượng, v.v. PPA là nền tảng pháp lý và tài chính cho hầu hết các dự án năng lượng.'
      },
      {
        question: '"Hàm lượng nội địa" trong các dự án năng lượng có ý nghĩa gì?',
        answer: 'Là yêu cầu của chính phủ về một tỷ lệ phần trăm nhất định các thiết bị, dịch vụ được sử dụng trong dự án phải được sản xuất hoặc cung cấp bởi các doanh nghiệp trong nước. Điều này nhằm thúc đẩy sự phát triển của ngành công nghiệp phụ trợ nội địa.'
      },
      {
        question: 'Những rủi ro chính khi đầu tư vào một dự án năng lượng tái tạo ở Việt Nam là gì?',
        answer: 'Các rủi ro bao gồm: rủi ro về chính sách (thay đổi đột ngột), rủi ro về lưới điện (quá tải, không thể giải tỏa hết công suất), rủi ro về tài nguyên (nắng, gió không như dự báo), và rủi ro về xây dựng và vận hành.'
      },
      {
        question: 'Quy hoạch phát triển điện lực quốc gia (PDP) là gì?',
        answer: 'Là một bản quy hoạch tổng thể, dài hạn của chính phủ, xác định mục tiêu, cơ cấu nguồn điện, và lộ trình phát triển của ngành điện Việt Nam trong một giai đoạn nhất định (thường là 10 năm, có tầm nhìn xa hơn). PDP là kim chỉ nam cho mọi hoạt động đầu tư trong ngành điện.'
      },
      {
        question: 'Tại sao các tập đoàn lớn như Apple, Google lại quan tâm đến DPPA?',
        answer: 'Các tập đoàn này có các cam kết mạnh mẽ về việc sử dụng 100% năng lượng tái tạo. DPPA cho phép họ ký hợp đồng trực tiếp để đảm bảo nguồn cung năng lượng sạch, ổn định trong dài hạn, giúp họ đạt được mục tiêu bền vững và nâng cao hình ảnh thương hiệu.'
      },
      {
        question: 'Chuyển dịch năng lượng công bằng (Just Energy Transition) có nghĩa là gì?',
        answer: 'Là quá trình chuyển đổi từ nền kinh tế dựa trên năng lượng hóa thạch sang năng lượng sạch, nhưng phải đảm bảo rằng quá trình này diễn ra một cách công bằng, không để ai bị bỏ lại phía sau. Điều này bao gồm việc hỗ trợ người lao động trong ngành than chuyển đổi việc làm, đảm bảo người dân nghèo có thể tiếp cận năng lượng sạch với giá cả phải chăng.'
      }
    ]
  },
];
