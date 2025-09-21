import { BaseLessonData } from '@/types';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export const electricVehicleLessons: BaseLessonData[] = [
  {
    id: 'ev-fundamentals',
    videoUrl: null,
    title: 'Nguyên Lý Cơ Bản Của Xe Điện',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    description:
      'Tìm hiểu về các thành phần cốt lõi của xe điện, bao gồm pin, động cơ điện, và hệ thống quản lý năng lượng.',
    objectives: [
      'Hiểu rõ cấu tạo và nguyên lý hoạt động của xe điện.',
      'Phân biệt được các loại pin và công nghệ sạc.',
      'Nắm được các khái niệm cơ bản về hiệu suất và phạm vi hoạt động của xe điện.',
    ],
    realWorldApplications: ['Lựa chọn mua xe điện phù hợp với nhu cầu.', 'Sử dụng và bảo dưỡng xe điện đúng cách.'],
    tags: ['xe điện', 'pin EV', 'động cơ điện', 'công nghệ ô tô'],
    faqs: [
      {
        question: 'Sự khác biệt lớn nhất giữa xe điện (EV) và xe hybrid là gì?',
        answer:
          'Xe điện (EV) chạy hoàn toàn bằng điện từ pin sạc. Xe hybrid có cả động cơ đốt trong và một động cơ điện, có thể sử dụng cả hai nguồn năng lượng. Xe hybrid sạc pin thông qua quá trình phanh tái tạo năng lượng, trong khi EV cần được cắm sạc từ nguồn điện bên ngoài.',
      },
      {
        question: 'Tuổi thọ trung bình của pin xe điện là bao lâu và chi phí thay thế có đắt không?',
        answer:
          'Hầu hết các nhà sản xuất bảo hành pin xe điện từ 8 đến 10 năm hoặc khoảng 160.000 km. Pin thường có tuổi thọ dài hơn thời gian bảo hành. Chi phí thay thế pin vẫn còn cao, nhưng đang giảm dần theo thời gian nhờ tiến bộ công nghệ và quy mô sản xuất.',
      },
      {
        question: 'Phạm vi hoạt động của xe điện bị ảnh hưởng bởi những yếu tố nào?',
        answer:
          'Phạm vi hoạt động của xe điện bị ảnh hưởng bởi nhiều yếu tố, bao gồm: dung lượng pin, nhiệt độ môi trường (thời tiết lạnh làm giảm phạm vi), tốc độ lái xe, địa hình (leo dốc tốn nhiều năng lượng hơn), và việc sử dụng các hệ thống phụ trợ như điều hòa không khí hoặc sưởi.',
      },
      {
        question: '"Phanh tái tạo" (Regenerative Braking) trên xe điện hoạt động như thế nào?',
        answer:
          'Phanh tái tạo là một quá trình trong đó động cơ điện hoạt động như một máy phát điện khi người lái giảm tốc hoặc phanh. Thay vì lãng phí năng lượng dưới dạng nhiệt như phanh truyền thống, nó chuyển đổi động năng của xe thành điện năng và sạc lại một phần cho pin, giúp tăng hiệu quả sử dụng năng lượng và phạm vi hoạt động.',
      },
      {
        question: '"One-Pedal Driving" là gì?',
        answer: 'Là một tính năng trên nhiều xe điện, cho phép người lái tăng tốc và giảm tốc chỉ bằng một bàn đạp ga. Khi nhả chân ga, hệ thống phanh tái tạo sẽ tự động kích hoạt mạnh, làm xe chậm lại đáng kể mà không cần dùng đến bàn đạp phanh. Điều này giúp lái xe thoải mái hơn trong điều kiện giao thông đô thị.'
      },
      {
        question: 'Tại sao xe điện có khả năng tăng tốc nhanh hơn xe xăng?',
        answer: 'Động cơ điện cung cấp mô-men xoắn cực đại gần như ngay lập tức từ khi đứng yên, không cần chờ đợi vòng tua máy lên cao như động cơ đốt trong. Điều này mang lại cảm giác tăng tốc "dính lưng" rất ấn tượng.'
      },
      {
        question: 'Hệ thống quản lý pin (BMS - Battery Management System) có vai trò gì?',
        answer: 'BMS là "bộ não" của bộ pin. Nó liên tục theo dõi trạng thái của từng cell pin, cân bằng điện áp, quản lý nhiệt độ, và bảo vệ pin khỏi các tình trạng nguy hiểm như sạc quá đầy hoặc xả quá cạn, đảm bảo pin hoạt động an toàn và có tuổi thọ cao nhất.'
      },
      {
        question: 'Các loại động cơ điện nào thường được sử dụng trên ô tô điện?',
        answer: 'Hai loại phổ biến nhất là động cơ cảm ứng AC (AC Induction Motor), nổi tiếng với sự bền bỉ và được Tesla sử dụng trong thời gian đầu, và động cơ đồng bộ nam châm vĩnh cửu (Permanent Magnet Synchronous Motor - PMSM), có hiệu suất cao hơn và gọn nhẹ hơn, đang ngày càng phổ biến.'
      },
      {
        question: 'Xe điện có cần hộp số không?',
        answer: 'Hầu hết xe điện không cần hộp số đa cấp như xe xăng. Động cơ điện có thể hoạt động hiệu quả trên một dải tốc độ rất rộng, do đó chúng thường chỉ sử dụng một hộp số giảm tốc cấp duy nhất để truyền lực đến bánh xe.'
      },
      {
        question: 'Dung lượng pin được đo bằng đơn vị gì?',
        answer: 'Dung lượng pin xe điện thường được đo bằng kilowatt-giờ (kWh). Con số này cho biết lượng năng lượng mà pin có thể lưu trữ. Dung lượng pin càng lớn (kWh càng cao) thì xe có thể đi được quãng đường càng xa sau mỗi lần sạc đầy.'
      }
    ],
  },
  {
    id: 'charging-infrastructure',
    videoUrl: null,
    title: 'Hạ Tầng Sạc và Hệ Sinh Thái',
    duration: '75 phút',
    difficulty: 'Trung bình',
    type: 'video',
    description:
      'Khám phá hệ sinh thái xe điện, từ các loại trạm sạc, phương thức thanh toán, đến việc tích hợp với lưới điện thông minh.',
    objectives: [
      'Phân loại các chuẩn sạc và công suất sạc khác nhau.',
      'Hiểu về quy hoạch và phát triển mạng lưới trạm sạc công cộng.',
      'Tìm hiểu về công nghệ V2G (Vehicle-to-Grid) và vai trò của xe điện trong lưới điện tương lai.',
    ],
    realWorldApplications: ['Đầu tư và kinh doanh trạm sạc xe điện.', 'Quy hoạch đô thị tích hợp hạ tầng cho xe điện.'],
    tags: ['trạm sạc', 'V2G', 'lưới điện thông minh', 'hạ tầng giao thông'],
    faqs: [
      {
        question: 'Có những loại sạc xe điện nào?',
        answer:
          'Có ba cấp độ sạc chính: Sạc Cấp 1 (Level 1) sử dụng ổ cắm gia đình thông thường (120V ở Mỹ, 230V ở Việt Nam), sạc rất chậm. Sạc Cấp 2 (Level 2) sử dụng nguồn điện 240V, thường được lắp đặt tại nhà hoặc nơi làm việc, sạc nhanh hơn đáng kể. Sạc Nhanh DC (DC Fast Charging) là loại nhanh nhất, thường thấy ở các trạm sạc công cộng, có thể sạc 80% pin trong khoảng 20-30 phút.',
      },
      {
        question: 'Công nghệ V2G (Vehicle-to-Grid) là gì và lợi ích của nó?',
        answer:
          'V2G cho phép xe điện không chỉ lấy điện từ lưới điện mà còn có thể "trả" điện ngược lại lưới điện khi cần thiết. Lợi ích của nó rất lớn: xe điện có thể hoạt động như những cục pin di động khổng lồ, giúp ổn định lưới điện vào giờ cao điểm, lưu trữ năng lượng từ các nguồn tái tạo (như mặt trời, gió) và thậm chí chủ xe có thể kiếm tiền bằng cách bán điện lại cho lưới điện.',
      },
      {
        question: 'Việc lắp đặt một bộ sạc Cấp 2 tại nhà có phức tạp không?',
        answer:
          'Việc lắp đặt thường không quá phức tạp nhưng cần được thực hiện bởi một thợ điện có chuyên môn. Nó tương tự như việc lắp đặt một thiết bị điện công suất lớn như máy nước nóng. Bạn cần kiểm tra xem hệ thống điện trong nhà có đủ công suất hay không và có thể cần một đường dây riêng cho bộ sạc.',
      },
      {
        question: 'Làm thế nào để tìm các trạm sạc công cộng khi đi xa?',
        answer:
          'Hầu hết các xe điện hiện đại đều có hệ thống định vị tích hợp hiển thị các trạm sạc trên bản đồ. Ngoài ra, có nhiều ứng dụng di động như PlugShare, ChargePoint, hoặc các ứng dụng của chính nhà sản xuất xe (như ứng dụng VinFast) cho phép bạn tìm kiếm, xem trạng thái (trống hay đang sử dụng) và đôi khi cả thanh toán cho việc sạc.',
      },
      {
        question: 'Sạc nhanh DC có hại cho pin không?',
        answer: 'Sạc nhanh DC tạo ra nhiều nhiệt hơn và gây áp lực lên pin hơn so với sạc AC thông thường. Nếu lạm dụng sạc nhanh hàng ngày, nó có thể làm giảm tuổi thọ pin nhanh hơn một chút trong dài hạn. Lời khuyên chung là ưu tiên sạc Cấp 2 tại nhà/nơi làm việc và chỉ sử dụng sạc nhanh DC khi thực sự cần thiết, ví dụ như khi đi đường dài.'
      },
      {
        question: 'Các chuẩn sạc phổ biến trên thế giới là gì?',
        answer: 'Có một vài chuẩn sạc chính: CCS (Combined Charging System) phổ biến ở Bắc Mỹ và châu Âu; CHAdeMO được các hãng xe Nhật Bản sử dụng; và cổng sạc của Tesla (NACS - North American Charging Standard) đang ngày càng được nhiều hãng khác chấp nhận. Tại Việt Nam, VinFast sử dụng chuẩn CCS2.'
      },
      {
        question: 'Sự khác biệt giữa sạc AC và sạc DC là gì?',
        answer: 'Sạc AC (dòng điện xoay chiều) là dòng điện từ lưới điện thông thường. Khi sạc AC, xe phải sử dụng bộ sạc tích hợp bên trong (On-board charger) để chuyển đổi AC thành DC và nạp vào pin. Sạc DC (dòng điện một chiều) cung cấp dòng điện DC trực tiếp cho pin, bỏ qua bộ sạc trong xe, do đó có thể đạt công suất cao hơn nhiều và sạc nhanh hơn.'
      },
      {
        question: 'Tôi có thể sạc xe điện bằng năng lượng mặt trời không?',
        answer: 'Hoàn toàn có thể. Nếu bạn lắp đặt hệ thống điện mặt trời áp mái tại nhà, bạn có thể sử dụng năng lượng sạch này để sạc cho xe điện của mình. Đây là một giải pháp tối ưu, giúp bạn giảm chi phí tiền điện và giảm thiểu hoàn toàn lượng khí thải carbon từ việc di chuyển.'
      },
      {
        question: 'Chi phí sạc điện tại trạm công cộng so với sạc tại nhà như thế nào?',
        answer: 'Sạc tại nhà hầu như luôn là lựa chọn rẻ nhất, vì bạn chỉ phải trả tiền điện theo giá sinh hoạt. Sạc tại các trạm công cộng, đặc biệt là sạc nhanh DC, thường có chi phí cao hơn do phải bao gồm chi phí đầu tư và vận hành trạm sạc. Tuy nhiên, nó vẫn thường rẻ hơn so với chi phí đổ xăng cho một quãng đường tương đương.'
      },
      {
        question: 'Plug & Charge là gì?',
        answer: 'Plug & Charge là một công nghệ cho phép quá trình sạc và thanh toán diễn ra hoàn toàn tự động. Bạn chỉ cần cắm súng sạc vào xe, xe và trạm sạc sẽ tự động "nhận dạng" nhau và quá trình thanh toán sẽ được thực hiện qua tài khoản đã đăng ký trước. Nó loại bỏ sự cần thiết phải dùng ứng dụng di động hay thẻ thanh toán tại trạm sạc.'
      }
    ],
  },
  {
    id: 'ev-market-trends',
    videoUrl: null,
    title: 'Thị Trường và Xu Hướng Xe Điện Toàn Cầu',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    type: 'article',
    description:
      'Phân tích sự phát triển của thị trường xe điện tại Việt Nam và trên thế giới, các chính sách hỗ trợ và tác động đến ngành công nghiệp ô tô.',
    objectives: [
      'Nắm bắt các số liệu và xu hướng chính của thị trường xe điện.',
      'Hiểu về vai trò của các nhà sản xuất lớn như VinFast, Tesla, BYD.',
      'Phân tích các chính sách của chính phủ và ảnh hưởng của chúng đến người tiêu dùng.',
    ],
    realWorldApplications: [
      'Phân tích đầu tư vào cổ phiếu ngành ô tô điện.',
      'Hoạch định chiến lược kinh doanh trong lĩnh vực liên quan đến xe điện.',
    ],
    tags: ['thị trường ô tô', 'VinFast', 'Tesla', 'chính sách công'],
    faqs: [
      {
        question: 'Tại sao giá xe điện vẫn còn cao hơn xe xăng cùng phân khúc?',
        answer:
          'Nguyên nhân chính là chi phí sản xuất pin, thành phần đắt đỏ nhất của một chiếc xe điện. Tuy nhiên, chi phí pin đang giảm nhanh chóng nhờ cải tiến công nghệ và quy mô sản xuất tăng. Ngoài ra, chi phí vận hành (nhiên liệu, bảo dưỡng) của xe điện thấp hơn nhiều, nên tổng chi phí sở hữu (Total Cost of Ownership) trong dài hạn có thể sẽ thấp hơn xe xăng.',
      },
      {
        question: 'Những quốc gia nào đang dẫn đầu thị trường xe điện toàn cầu?',
        answer:
          'Trung Quốc là thị trường xe điện lớn nhất thế giới, cả về doanh số và sản xuất, với các thương hiệu mạnh như BYD, NIO. Châu Âu (đặc biệt là các nước Bắc Âu như Na Uy) cũng có tỷ lệ sử dụng xe điện rất cao nhờ các chính sách hỗ trợ mạnh mẽ của chính phủ. Mỹ cũng là một thị trường quan trọng với sự thống trị của Tesla.',
      },
      {
        question: 'Vai trò của VinFast trong thị trường xe điện Việt Nam và thế giới là gì?',
        answer:
          'Tại Việt Nam, VinFast là đơn vị tiên phong, không chỉ sản xuất xe mà còn xây dựng cả một hệ sinh thái hạ tầng trạm sạc trên toàn quốc, thúc đẩy mạnh mẽ việc chuyển đổi sang giao thông điện. Trên thị trường quốc tế, VinFast đang nỗ lực khẳng định vị thế là một thương hiệu xe điện toàn cầu, cạnh tranh trực tiếp với các hãng xe lớn tại các thị trường khó tính như Mỹ và châu Âu.',
      },
      {
        question: 'Các chính phủ thường có những chính sách gì để khuyến khích người dân mua xe điện?',
        answer:
          'Các chính sách phổ biến bao gồm: trợ cấp trực tiếp khi mua xe, miễn hoặc giảm các loại thuế (thuế trước bạ, thuế tiêu thụ đặc biệt), miễn phí đỗ xe hoặc phí cầu đường, cho phép đi vào làn đường ưu tiên, và đầu tư mạnh vào việc xây dựng mạng lưới trạm sạc công cộng.',
      },
      {
        question: 'Pin thể rắn (Solid-State Battery) là gì và tại sao nó được coi là tương lai của xe điện?',
        answer: 'Pin thể rắn sử dụng chất điện phân dạng rắn thay vì dạng lỏng như pin lithium-ion hiện tại. Chúng hứa hẹn mang lại nhiều ưu điểm vượt trội: mật độ năng lượng cao hơn (giúp xe đi xa hơn), sạc nhanh hơn, an toàn hơn (khó cháy nổ hơn) và tuổi thọ cao hơn. Tuy nhiên, công nghệ này vẫn đang trong giai đoạn nghiên cứu và chưa được thương mại hóa rộng rãi.'
      },
      {
        question: '"Range Anxiety" (Nỗi lo về phạm vi hoạt động) là gì?',
        answer: 'Đây là nỗi sợ của người lái xe điện rằng pin sẽ hết năng lượng trước khi họ đến được điểm đến hoặc trạm sạc tiếp theo. Nỗi lo này đang giảm dần khi dung lượng pin ngày càng lớn và mạng lưới trạm sạc công cộng ngày càng dày đặc.'
      },
      {
        question: 'Xe điện có thực sự "xanh" hơn xe xăng không, nếu tính cả quá trình sản xuất pin?',
        answer: 'Câu trả lời là có, trong hầu hết các trường hợp. Mặc dù việc sản xuất pin tiêu tốn năng lượng và tài nguyên, nhưng trong toàn bộ vòng đời, xe điện tạo ra lượng khí thải carbon thấp hơn đáng kể so với xe xăng. Lợi ích về môi trường càng lớn nếu nguồn điện dùng để sạc xe đến từ các nguồn năng lượng tái tạo.'
      },
      {
        question: 'BYD là công ty nào và tại sao họ lại là đối thủ lớn của Tesla?',
        answer: 'BYD (Build Your Dreams) là một tập đoàn khổng lồ của Trung Quốc, không chỉ sản xuất xe điện mà còn là một trong những nhà sản xuất pin lớn nhất thế giới. Họ có lợi thế lớn về việc tự chủ chuỗi cung ứng và cung cấp các mẫu xe điện với giá cả cạnh tranh ở nhiều phân khúc, giúp họ vượt qua Tesla về doanh số xe điện toàn cầu trong một số quý.'
      },
      {
        question: 'Xu hướng "Software-Defined Vehicle" (Xe được định nghĩa bằng phần mềm) có ý nghĩa gì?',
        answer: 'Đây là xu hướng mà các tính năng và hiệu suất của xe ngày càng được quyết định bởi phần mềm thay vì phần cứng. Điều này cho phép các nhà sản xuất có thể nâng cấp, sửa lỗi, hoặc thậm chí bán thêm các tính năng mới cho xe thông qua các bản cập nhật phần mềm qua mạng (Over-the-Air updates), tương tự như cách bạn cập nhật điện thoại thông minh.'
      },
      {
        question: 'Thị trường xe điện đã qua sử dụng (second-hand) hiện nay như thế nào?',
        answer: 'Thị trường xe điện đã qua sử dụng đang phát triển nhưng vẫn còn mới mẻ. Một trong những lo ngại lớn nhất của người mua là tình trạng "sức khỏe" của pin. Nhiều công cụ và dịch vụ đang được phát triển để có thể chẩn đoán và chứng nhận chất lượng pin, giúp tăng tính minh bạch và sự tin tưởng cho thị trường này.'
      }
    ],
  },
  {
    id: 'ev-maintenance-repair',
    videoUrl: null,
    title: 'Bảo Dưỡng và Sửa Chữa Xe Điện',
    duration: '45 phút',
    difficulty: 'Trung bình',
    type: 'video',
    description:
      'Tìm hiểu những điểm khác biệt trong việc bảo dưỡng và sửa chữa xe điện so với xe động cơ đốt trong, và các kỹ năng cần thiết cho kỹ thuật viên.',
    objectives: [
      'Xác định các hạng mục bảo dưỡng định kỳ cho xe điện.',
      'Hiểu về chẩn đoán và sửa chữa các lỗi phổ biến liên quan đến pin và hệ thống điện.',
      'Nhận biết các yêu cầu về an toàn khi làm việc với hệ thống điện cao áp trên xe.',
    ],
    realWorldApplications: ['Kỹ thuật viên tại các xưởng dịch vụ ô tô.', 'Chủ xe tự bảo dưỡng cơ bản cho xe của mình.'],
    tags: ['bảo dưỡng ô tô', 'sửa chữa xe điện', 'kỹ thuật viên ô tô', 'an toàn điện'],
    faqs: [
      {
        question: 'Xe điện có cần bảo dưỡng thường xuyên như xe xăng không?',
        answer:
          'Không. Xe điện có ít bộ phận chuyển động hơn nhiều so với xe xăng (không có động cơ, hộp số, bugi, bộ lọc dầu, hệ thống xả...). Do đó, việc bảo dưỡng định kỳ đơn giản và ít tốn kém hơn đáng kể. Các hạng mục chính cần kiểm tra là lốp, phanh, hệ thống treo và dung dịch làm mát pin.',
      },
      {
        question: 'Việc sửa chữa xe điện có phức tạp hơn xe xăng không?',
        answer:
          'Việc sửa chữa các bộ phận cơ khí thông thường (lốp, phanh, thân vỏ) thì tương tự. Tuy nhiên, việc chẩn đoán và sửa chữa các vấn đề liên quan đến hệ thống điện cao áp, pin và phần mềm điều khiển đòi hỏi kỹ thuật viên phải được đào tạo chuyên sâu và có các công cụ chẩn đoán chuyên dụng. Đây là một lĩnh vực kỹ năng mới và đang có nhu cầu cao.',
      },
      {
        question: 'Tại sao làm việc với xe điện lại cần tuân thủ các quy tắc an toàn nghiêm ngặt?',
        answer:
          'Hệ thống pin của xe điện hoạt động ở mức điện áp rất cao (thường từ 400V đến 800V), cao hơn nhiều so với điện gia dụng và có thể gây nguy hiểm chết người nếu không được xử lý đúng cách. Kỹ thuật viên cần được đào tạo về an toàn điện cao áp và sử dụng các thiết bị bảo hộ cá nhân (PPE) chuyên dụng.',
      },
      {
        question: 'Nếu xe điện của tôi hết pin giữa đường thì phải làm sao?',
        answer:
          'Tình huống này ngày càng hiếm gặp vì các xe hiện đại đều có hệ thống cảnh báo và dẫn đường đến trạm sạc gần nhất. Tuy nhiên, nếu xảy ra, bạn sẽ cần gọi dịch vụ cứu hộ đường bộ. Một số dịch vụ cứu hộ hiện đại có các bộ sạc di động để cung cấp đủ năng lượng cho bạn đi đến trạm sạc gần nhất, hoặc họ sẽ kéo xe của bạn đến đó.',
      },
      {
        question: 'Lốp xe điện có khác gì lốp xe thông thường không?',
        answer: 'Có. Lốp xe điện thường được thiết kế đặc biệt để chịu được trọng lượng nặng hơn của xe (do pin), có lực cản lăn thấp để tối ưu hóa phạm vi hoạt động, và đủ bền để xử lý mô-men xoắn tức thời của động cơ điện. Chúng cũng thường có một lớp bọt bên trong để giảm tiếng ồn vọng vào cabin.'
      },
      {
        question: 'Hệ thống làm mát của xe điện có quan trọng không?',
        answer: 'Cực kỳ quan trọng. Pin và động cơ điện hoạt động hiệu quả nhất trong một dải nhiệt độ nhất định. Hệ thống quản lý nhiệt (thường bằng chất lỏng) có nhiệm vụ làm mát các bộ phận này khi chúng hoạt động ở cường độ cao và làm ấm chúng khi thời tiết quá lạnh, giúp đảm bảo hiệu suất và tuổi thọ.'
      },
      {
        question: 'Tôi có thể tự thay pin 12V trên xe điện không?',
        answer: 'Có. Giống như xe xăng, xe điện cũng có một pin phụ 12V để chạy các hệ thống điện áp thấp như đèn, màn hình, radio. Pin này có thể hết và cần được thay thế. Việc thay thế nó tương tự như trên xe xăng và chủ xe có thể tự làm được.'
      },
      {
        question: 'Làm thế nào để tối đa hóa tuổi thọ pin xe điện?',
        answer: 'Có một số cách để tối đa hóa tuổi thọ pin xe điện: Tránh sạc quá đầy hoặc để pin cạn kiệt hoàn toàn. Sử dụng sạc nhanh DC chỉ khi cần thiết, ưu tiên sạc AC thông thường. Giữ cho xe ở trong khoảng nhiệt độ lý tưởng (không quá nóng hoặc quá lạnh). Thường xuyên kiểm tra và bảo trì hệ thống làm mát của xe.'
      },
      {
        question: 'Có nên để xe điện ở chế độ chờ (standby) lâu ngày không?',
        answer: 'Không nên. Để xe ở chế độ chờ quá lâu có thể làm giảm tuổi thọ pin do quá trình tự xả và có thể gây ra các vấn đề về phần mềm điều khiển. Nếu không sử dụng xe trong thời gian dài, tốt nhất là nên sạc đầy pin và đỗ xe ở nơi khô ráo, thoáng mát.'
      },
      {
        question: 'Phần mềm trên xe điện có cần được cập nhật không?',
        answer: 'Có, rất quan trọng. Các bản cập nhật phần mềm qua mạng (Over-the-Air - OTA) không chỉ sửa lỗi mà còn có thể cải thiện hiệu suất, bổ sung tính năng mới, tối ưu hóa việc quản lý pin và thậm chí tăng phạm vi hoạt động của xe. Việc giữ cho phần mềm của xe luôn được cập nhật là rất cần thiết.'
      }
    ],
  },
];

export const electricVehicleTechModuleData: ModuleData = {
  id: 'electric-vehicle-tech',
  title: 'Công Nghệ Xe Điện',
  subtitle: 'Khám phá tương lai của giao thông bền vững.',
  description:
    'Khóa học này đi sâu vào công nghệ đằng sau xe điện, từ pin và động cơ đến hạ tầng sạc và các xu hướng thị trường mới nhất. Trở thành chuyên gia trong lĩnh vực đang phát triển nhanh chóng này.',
  level: 'Trung bình',
  duration: '8 tuần',
  category: 'Công nghệ & Kỹ thuật',
  primaryColor: 'blue',
  color: 'blue',
  gradientColors: 'from-blue-600 to-cyan-400',
  basePath: '/learning/electric-vehicle-tech',
  heroImageUrl: 'https://images.unsplash.com/photo-1617704548623-5a5a675959c7?auto=format&fit=crop&w=1470&q=80',
  icon: 'Car',
  features: [
    'Công nghệ Pin & Sạc',
    'Động cơ điện hiệu suất cao',
    'Hệ thống quản lý năng lượng',
    'Hạ tầng & Hệ sinh thái',
  ],
  objectives: [
    'Hiểu rõ cấu tạo và nguyên lý hoạt động của các loại xe điện.',
    'Phân tích các công nghệ pin và hệ thống sạc tiên tiến.',
    'Nắm bắt các xu hướng thị trường và các mô hình kinh doanh trong ngành xe điện.',
    'Đánh giá tác động của xe điện đến môi trường và lưới điện.',
  ],
  prerequisites: ['Kiến thức cơ bản về vật lý và điện.', 'Sự quan tâm đến công nghệ và ô tô.'],
  careerOutcomes: [
    'Kỹ thuật viên chuyên về xe điện',
    'Chuyên gia tư vấn công nghệ ô tô',
    'Quản lý sản phẩm trong ngành công nghiệp xe điện',
    'Nhà nghiên cứu và phát triển công nghệ pin',
  ],
  marketDemand: {
    averageSalary: '20.000.000 - 45.000.000 VNĐ/tháng',
    jobGrowth: '40% (Rất cao)',
    hireDemand: 'Cao',
  },
  industryApplications: [
    'Sản xuất ô tô và linh kiện',
    'Năng lượng và hạ tầng lưới điện',
    'Quy hoạch đô thị và giao thông thông minh',
    'Dịch vụ và bảo dưỡng ô tô',
  ],
  relatedModules: [K2Module.EnergyManagement, K2Module.Arduino, K2Module.Robotics, K2Module.Stem],
  lessons: electricVehicleLessons,
};
