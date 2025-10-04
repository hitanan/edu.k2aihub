import { ModuleData } from '@/types';
import { NanotechnologyLesson as BaseNanotechnologyLesson } from '@/types/lesson-base';

export type NanotechnologyLesson = BaseNanotechnologyLesson;

const lessons: NanotechnologyLesson[] = [
  {
    id: 'introduction-to-nanotechnology',
    title: 'Giới Thiệu về Công Nghệ Nano',
    description:
      'Tìm hiểu các khái niệm cơ bản, lịch sử và tầm quan trọng của công nghệ nano trong khoa học và đời sống hiện đại.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/embed/DAOFpgcW7iA',
    objectives: [
      'Hiểu định nghĩa và quy mô của công nghệ nano.',
      'Nắm được lịch sử phát triển và các cột mốc quan trọng.',
      'Nhận biết tiềm năng và các lĩnh vực ứng dụng chính.',
    ],
    realWorldApplications: [
      'Sản xuất vật liệu siêu bền, siêu nhẹ.',
      'Mỹ phẩm chống nắng với hạt nano.',
      'Quần áo không bám bẩn, không thấm nước.',
    ],
    nanotechApplications: ['Tổng quan về ứng dụng', 'Lịch sử phát triển'],
    materialsProperties: ['Định nghĩa Nanomet', 'Tỷ lệ bề mặt/thể tích'],
    safetyConsiderations: ['Tiềm năng và rủi ro', 'Bối cảnh đạo đức'],
    faqs: [
      {
        question: 'Công nghệ nano là gì?',
        answer:
          'Công nghệ nano là ngành khoa học, kỹ thuật và công nghệ thực hiện ở quy mô nano, tức là khoảng từ 1 đến 100 nanomet. Ở kích thước này, vật liệu có thể biểu hiện những đặc tính hoàn toàn mới so với khi chúng ở kích thước lớn hơn.',
      },
      {
        question: 'Một nanomet nhỏ đến mức nào?',
        answer:
          'Một nanomet (nm) bằng một phần tỷ của một mét. Để dễ hình dung, một tờ giấy có độ dày khoảng 100,000 nm, và một sợi tóc người dày khoảng 80,000-100,000 nm.',
      },
      {
        question: 'Tại sao vật liệu ở kích thước nano lại có đặc tính khác biệt?',
        answer:
          'Ở quy mô nano, các hiệu ứng lượng tử trở nên rõ rệt hơn và tỷ lệ diện tích bề mặt so với thể tích tăng lên đáng kể. Điều này làm thay đổi các đặc tính như độ bền, khả năng dẫn điện, khả năng phản ứng hóa học và màu sắc của vật liệu.',
      },
      {
        question: 'Công nghệ nano có an toàn không?',
        answer:
          'Đây là một lĩnh vực nghiên cứu quan trọng. Giống như bất kỳ công nghệ mới nào, có những lo ngại tiềm ẩn về tác động của vật liệu nano đối với sức khỏe con người và môi trường. Các nhà khoa học đang tích cực nghiên cứu để hiểu và giảm thiểu các rủi ro này.',
      },
      {
        question: 'Ai là người được coi là "cha đẻ" của công nghệ nano?',
        answer:
          'Nhà vật lý Richard Feynman được coi là người đặt nền móng cho ý tưởng về công nghệ nano với bài nói chuyện nổi tiếng năm 1959 có tựa đề "There\'s Plenty of Room at the Bottom" (Vẫn còn nhiều chỗ ở dưới đáy).',
      },
      {
        question: 'Kính hiển vi nào được sử dụng để "nhìn" thấy các vật thể nano?',
        answer:
          'Các loại kính hiển vi quang học thông thường không đủ khả năng để thấy vật thể nano. Các nhà khoa học sử dụng các công cụ tiên tiến như Kính hiển vi quét đường hầm (STM) và Kính hiển vi lực nguyên tử (AFM) để quan sát và thậm chí di chuyển các nguyên tử riêng lẻ.',
      },
      {
        question: 'Ứng dụng của nano trong ngành dệt may là gì?',
        answer:
          'Các hạt nano bạc có thể được tích hợp vào vải để tạo ra quần áo kháng khuẩn, khử mùi. Các lớp phủ nano có thể tạo ra các loại vải chống thấm nước, chống bám bẩn mà không làm thay đổi cảm giác của vải.',
      },
      {
        question: 'Carbon nanotube (ống nano carbon) là gì?',
        answer:
          'Đây là những cấu trúc hình trụ được tạo thành từ các nguyên tử carbon. Chúng cực kỳ bền (bền hơn thép hàng trăm lần), nhẹ và có khả năng dẫn điện, dẫn nhiệt tuyệt vời, hứa hẹn nhiều ứng dụng trong điện tử, vật liệu và y học.',
      },
      {
        question: 'Công nghệ nano có giúp ích gì cho môi trường không?',
        answer:
          'Có, công nghệ nano có tiềm năng lớn trong việc xử lý ô nhiễm. Các hạt nano có thể được sử dụng để trung hòa các chất độc trong nước và đất, hoặc làm chất xúc tác hiệu quả hơn để giảm khí thải độc hại.',
      },
      {
        question: 'Tại sao vàng ở kích thước nano lại có màu đỏ hoặc tím?',
        answer:
          'Đây là một ví dụ điển hình về sự thay đổi đặc tính. Ở kích thước lớn, vàng có màu vàng óng. Nhưng khi ở dạng hạt nano, chúng tương tác với ánh sáng theo một cách khác, hấp thụ một số màu và phản xạ những màu khác, dẫn đến việc chúng có màu đỏ, tím hoặc các màu khác tùy thuộc vào kích thước hạt.',
      },
    ],
  },
  {
    id: 'nanomaterials-fabrication',
    title: 'Chế Tạo và Tổng Hợp Vật Liệu Nano',
    description:
      'Khám phá các phương pháp từ trên xuống (top-down) và từ dưới lên (bottom-up) để tạo ra các cấu trúc và vật liệu nano.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/embed/Z4ygi0kGf3c',
    objectives: [
      'Phân biệt được hai phương pháp chính: top-down và bottom-up.',
      'Hiểu nguyên lý của các kỹ thuật như quang khắc (lithography) và tự lắp ráp (self-assembly).',
      'Biết cách lựa chọn phương pháp phù hợp cho các loại vật liệu nano khác nhau.',
    ],
    realWorldApplications: [
      'Sản xuất chip vi xử lý máy tính.',
      'Tạo ra các lớp phủ chống trầy xước.',
      'Phát triển các cảm biến sinh học siêu nhạy.',
    ],
    nanotechApplications: ['Phương pháp Top-down (Lithography)', 'Phương pháp Bottom-up (Tự lắp ráp)'],
    materialsProperties: ['Nanoparticles', 'Nanotubes', 'Nanorods'],
    safetyConsiderations: ['Kiểm soát chất lượng', 'Độ tinh khiết của vật liệu'],
    faqs: [
      {
        question: 'Phương pháp "top-down" là gì?',
        answer:
          'Giống như một nhà điêu khắc tạc một bức tượng từ một khối đá lớn, phương pháp "top-down" (từ trên xuống) bắt đầu với một vật liệu lớn và sử dụng các công cụ để loại bỏ vật liệu, tạo ra cấu trúc nano mong muốn. Quang khắc là một ví dụ điển hình.',
      },
      {
        question: 'Phương pháp "bottom-up" là gì?',
        answer:
          'Ngược lại với top-down, phương pháp "bottom-up" (từ dưới lên) giống như xây một ngôi nhà từ những viên gạch riêng lẻ. Nó bắt đầu với các nguyên tử hoặc phân tử và sắp xếp chúng lại với nhau để tạo thành cấu trúc nano. Tự lắp ráp phân tử là một ví dụ.',
      },
      {
        question: 'Quang khắc (Photolithography) hoạt động như thế nào?',
        answer:
          'Đây là kỹ thuật chủ chốt trong sản xuất vi mạch. Một lớp vật liệu nhạy sáng (cản quang) được phủ lên bề mặt wafer silicon. Ánh sáng (thường là tia cực tím) được chiếu qua một "mặt nạ" có hoa văn, làm thay đổi tính chất hóa học của lớp cản quang ở những vùng tiếp xúc. Sau đó, các hóa chất sẽ loại bỏ phần cản quang đã bị chiếu sáng (hoặc không bị chiếu sáng), để lộ ra phần wafer bên dưới để xử lý tiếp.',
      },
      {
        question: 'Tự lắp ráp phân tử (Molecular Self-Assembly) là gì?',
        answer:
          'Đây là một quá trình tự nhiên trong đó các phân tử tự sắp xếp thành các cấu trúc có trật tự mà không cần sự can thiệp từ bên ngoài. Các nhà khoa học khai thác quá trình này để tạo ra các vật liệu nano phức tạp một cách hiệu quả.',
      },
      {
        question: 'Ưu điểm của phương pháp bottom-up là gì?',
        answer:
          'Phương pháp bottom-up thường ít lãng phí vật liệu hơn, có thể tạo ra các cấu trúc nhỏ hơn và phức tạp hơn, và thường tiêu thụ ít năng lượng hơn so với các phương pháp top-down.',
      },
      {
        question: 'Nhược điểm của phương pháp top-down là gì?',
        answer:
          'Phương pháp top-down thường đòi hỏi các thiết bị đắt tiền, có thể gây ra các khuyết tật trên bề mặt vật liệu và khó có thể tạo ra các cấu trúc dưới 10 nanomet một cách hiệu quả.',
      },
      {
        question: 'Lắng đọng hơi hóa học (CVD) là phương pháp top-down hay bottom-up?',
        answer:
          'Lắng đọng hơi hóa học (Chemical Vapor Deposition - CVD) là một phương pháp bottom-up. Trong đó, các tiền chất ở thể khí phản ứng hoặc phân hủy trên bề mặt của một đế, tạo thành một lớp màng mỏng vật liệu rắn.',
      },
      {
        question: 'Làm thế nào để tạo ra các hạt nano vàng?',
        answer:
          'Một phương pháp bottom-up phổ biến là khử hóa học. Bắt đầu với một dung dịch muối vàng (ví dụ: axit chloroauric), sau đó thêm một chất khử (ví dụ: natri citrat). Chất khử sẽ chuyển các ion vàng (Au3+) thành các nguyên tử vàng trung hòa (Au), các nguyên tử này sau đó sẽ kết tụ lại với nhau để tạo thành các hạt nano.',
      },
      {
        question: 'Sol-gel là kỹ thuật gì?',
        answer:
          'Sol-gel là một phương pháp hóa học ướt (bottom-up) được sử dụng để sản xuất các vật liệu rắn từ các phân tử nhỏ. Quá trình này bao gồm việc chuyển đổi một "sol" (hệ keo của các hạt rắn trong chất lỏng) thành một "gel" (mạng lưới rắn ba chiều chứa đầy dung môi).',
      },
      {
        question: 'Tại sao việc kiểm soát kích thước và hình dạng của vật liệu nano lại quan trọng?',
        answer:
          'Bởi vì các đặc tính của vật liệu nano (quang, điện, từ) phụ thuộc rất nhiều vào kích thước và hình dạng của chúng. Việc kiểm soát chính xác các yếu tố này là chìa khóa để tạo ra các thiết bị và ứng dụng có chức năng mong muốn.',
      },
    ],
  },
  {
    id: 'nanomedicine-applications',
    title: 'Y Học Nano: Chẩn Đoán và Trị Liệu',
    description:
      'Ứng dụng của công nghệ nano trong y học, bao gồm hệ thống phân phối thuốc, chẩn đoán hình ảnh và kỹ thuật mô.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/embed/5aR_p_g95y8',
    objectives: [
      'Hiểu cách hạt nano được sử dụng để vận chuyển thuốc đến tế bào ung thư.',
      'Nắm được vai trò của quantum dots trong chẩn đoán hình ảnh y tế.',
      'Khám phá tiềm năng của kỹ thuật mô nano trong y học tái tạo.',
    ],
    realWorldApplications: [
      'Thuốc điều trị ung thư nhắm trúng đích.',
      'Chất tương phản trong chụp MRI.',
      'Vá các mô bị tổn thương bằng vật liệu sinh học nano.',
    ],
    nanotechApplications: [
      'Hệ thống phân phối thuốc (Drug Delivery)',
      'Chẩn đoán hình ảnh phân tử',
      'Kỹ thuật mô và y học tái tạo',
    ],
    materialsProperties: ['Liposomes', 'Dendrimers', 'Quantum Dots trong y học'],
    safetyConsiderations: ['Độc tính của vật liệu nano (Nanotoxicity)', 'Thử nghiệm lâm sàng và quy định'],
    faqs: [
      {
        question: 'Hệ thống phân phối thuốc nhắm trúng đích hoạt động như thế nào?',
        answer:
          'Các hạt nano (ví dụ: liposome) được nạp thuốc điều trị bên trong và bề mặt của chúng được gắn các phân tử đặc hiệu (ví dụ: kháng thể) chỉ nhận biết và liên kết với các tế bào ung thư. Điều này giúp thuốc tập trung tấn công khối u mà ít gây hại cho các tế bào khỏe mạnh xung quanh.',
      },
      {
        question: 'Quantum dots (chấm lượng tử) giúp chẩn đoán bệnh như thế nào?',
        answer:
          'Quantum dots là các tinh thể nano bán dẫn phát ra ánh sáng có màu sắc rất rực rỡ và ổn định khi được kích thích. Bằng cách gắn chúng với các phân tử sinh học có khả năng tìm đến các dấu hiệu bệnh tật (ví dụ: protein của virus), các bác sĩ có thể "thắp sáng" và xác định vị trí của mầm bệnh trong cơ thể với độ nhạy rất cao.',
      },
      {
        question: 'Y học tái tạo sử dụng công nghệ nano ra sao?',
        answer:
          'Các nhà khoa học tạo ra các "giàn giáo" (scaffolds) bằng sợi nano có cấu trúc tương tự như mạng lưới ngoại bào trong cơ thể. Các tế bào gốc có thể được nuôi cấy trên các giàn giáo này, và cấu trúc nano sẽ định hướng sự phát triển của chúng để tái tạo các mô bị tổn thương như xương, sụn hoặc da.',
      },
      {
        question: 'Theranostics là gì?',
        answer:
          'Đây là một thuật ngữ kết hợp giữa "Therapy" (trị liệu) và "Diagnostics" (chẩn đoán). Nó đề cập đến việc sử dụng một hạt nano duy nhất có khả năng vừa chẩn đoán (ví dụ: phát hiện khối u) vừa điều trị (ví dụ: giải phóng thuốc) cùng một lúc.',
      },
      {
        question: 'Tại sao hạt nano có thể vượt qua hàng rào máu não?',
        answer:
          'Hàng rào máu não là một lớp bảo vệ chặt chẽ ngăn chặn hầu hết các chất từ máu đi vào não. Do kích thước siêu nhỏ và khả năng biến đổi bề mặt, một số loại hạt nano có thể được thiết kế để "lách" qua hàng rào này, mở ra tiềm năng điều trị các bệnh về não như Alzheimer hay u não.',
      },
      {
        question: 'Cảm biến sinh học nano (nanobiosensor) là gì?',
        answer:
          'Là các thiết bị siêu nhỏ sử dụng các thành phần nano để phát hiện các phân tử sinh học (như DNA, protein, virus) với độ nhạy và độ đặc hiệu rất cao. Chúng có thể được dùng trong các que thử chẩn đoán nhanh hoặc các thiết bị theo dõi sức khỏe liên tục.',
      },
      {
        question: 'Hạt nano bạc được dùng trong y tế để làm gì?',
        answer:
          'Hạt nano bạc có đặc tính kháng khuẩn và kháng virus mạnh. Chúng được sử dụng trong các loại băng gạc y tế để ngăn ngừa nhiễm trùng vết thương, hoặc làm lớp phủ cho các dụng cụ phẫu thuật.',
      },
      {
        question: 'Nanotoxicity (độc tính của vật liệu nano) là mối lo ngại chính trong y học nano phải không?',
        answer:
          'Đúng vậy. Trước khi một ứng dụng y học nano được phê duyệt, các nhà khoa học phải nghiên cứu kỹ lưỡng về cách cơ thể hấp thụ, phân phối, chuyển hóa và đào thải các hạt nano, cũng như bất kỳ tác động tiêu cực tiềm tàng nào đối với tế bào và các cơ quan.',
      },
      {
        question: 'Liposome là gì?',
        answer:
          'Liposome là những túi hình cầu siêu nhỏ được tạo thành từ một hoặc nhiều lớp kép lipid (chất béo), tương tự như màng tế bào. Cấu trúc này cho phép chúng bao bọc và vận chuyển cả thuốc tan trong nước (ở lõi) và thuốc tan trong dầu (trong màng).',
      },
      {
        question: 'Công nghệ nano có thể giúp gì trong việc chống lại các siêu vi khuẩn kháng kháng sinh?',
        answer:
          'Công nghệ nano mở ra nhiều hướng tiếp cận mới. Ví dụ, các hạt nano có thể được thiết kế để phá vỡ màng tế bào của vi khuẩn, hoặc vận chuyển thuốc kháng sinh trực tiếp vào bên trong vi khuẩn, hoặc hoạt động như một "mồi nhử" để vô hiệu hóa độc tố của vi khuẩn.',
      },
    ],
  },
  {
    id: 'nanoelectronics-quantum-devices',
    title: 'Điện Tử Nano và Thiết Bị Lượng Tử',
    description:
      'Tìm hiểu về các linh kiện điện tử ở cấp độ nano và các nguyên tắc cơ bản của máy tính lượng tử và các thiết bị liên quan.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/embed/64-Jd_l_5zg',
    objectives: [
      'Hiểu được những thách thức khi thu nhỏ bóng bán dẫn.',
      'Nắm bắt các khái niệm cơ bản của điện tử spin (spintronics).',
      'Tìm hiểu về nguyên lý hoạt động của màn hình QLED.',
    ],
    realWorldApplications: [
      'Bộ vi xử lý trong điện thoại thông minh và máy tính.',
      'Ổ cứng SSD dung lượng cao.',
      'TV và màn hình với màu sắc rực rỡ.',
    ],
    nanotechApplications: ['Transistors siêu nhỏ', 'Spintronics', 'Màn hình Quantum Dot (QLED)'],
    materialsProperties: ['Hiệu ứng đường hầm lượng tử', 'Điểm lượng tử (Quantum Dots)'],
    safetyConsiderations: ['Tản nhiệt trong thiết bị nano', 'Hạn chế của định luật Moore'],
    faqs: [
      {
        question: 'Định luật Moore là gì và tại sao nó đang gặp giới hạn?',
        answer:
          'Định luật Moore dự đoán rằng số lượng bóng bán dẫn (transistors) trên một vi mạch sẽ tăng gấp đôi sau mỗi hai năm. Tuy nhiên, khi các bóng bán dẫn được thu nhỏ đến quy mô vài nanomet, các hiệu ứng lượng tử không mong muốn (như hiệu ứng đường hầm) bắt đầu xuất hiện, gây rò rỉ dòng điện và làm cho chúng hoạt động không ổn định.',
      },
      {
        question: 'Hiệu ứng đường hầm lượng tử (Quantum Tunneling) là gì?',
        answer:
          'Trong thế giới vĩ mô, bạn không thể đi xuyên tường. Nhưng ở quy mô lượng tử, một hạt như electron có một xác suất nhỏ để "đào hầm" xuyên qua một rào cản năng lượng mà thông thường nó không thể vượt qua. Trong chip máy tính, điều này gây ra hiện tượng rò rỉ dòng điện không mong muốn.',
      },
      {
        question: 'Spintronics là gì và nó khác gì so với điện tử học truyền thống?',
        answer:
          'Điện tử học truyền thống dựa trên việc điều khiển dòng điện tích của electron. Spintronics (điện tử spin) là một lĩnh vực mới nhằm khai thác một đặc tính lượng tử khác của electron là "spin" (có thể hình dung như chiều tự quay của nó, lên hoặc xuống). Việc sử dụng cả điện tích và spin hứa hẹn tạo ra các thiết bị nhanh hơn, nhỏ hơn và tiết kiệm năng lượng hơn.',
      },
      {
        question: 'Màn hình QLED hoạt động như thế nào?',
        answer:
          'Màn hình QLED (Quantum Dot Light Emitting Diode) sử dụng một lớp các chấm lượng tử để tăng cường màu sắc. Một đèn nền LED màu xanh lam sẽ chiếu sáng các chấm lượng tử. Các chấm này sẽ hấp thụ ánh sáng xanh và phát ra ánh sáng màu đỏ hoặc xanh lá cây rất tinh khiết, tùy thuộc vào kích thước của chúng. Sự kết hợp của ba màu cơ bản này tạo ra dải màu rộng và rực rỡ hơn.',
      },
      {
        question: 'Graphene là gì và tại sao nó được coi là vật liệu của tương lai cho ngành điện tử?',
        answer:
          'Graphene là một lớp vật liệu chỉ dày một nguyên tử carbon, được sắp xếp theo cấu trúc tổ ong. Nó cực kỳ bền, nhẹ, gần như trong suốt và dẫn điện tốt hơn đồng. Những đặc tính này làm cho nó trở thành một ứng cử viên sáng giá để thay thế silicon trong các thế hệ bóng bán dẫn tiếp theo.',
      },
      {
        question: 'Bộ nhớ truy cập ngẫu nhiên từ điện trở (RRAM) là gì?',
        answer:
          'RRAM hay ReRAM là một loại bộ nhớ không bay hơi (non-volatile memory) hoạt động bằng cách thay đổi điện trở của một vật liệu đặc biệt (memristor). Nó có tiềm năng thay thế bộ nhớ flash hiện tại vì tốc độ nhanh hơn, bền hơn và tiêu thụ ít năng lượng hơn.',
      },
      {
        question: 'Làm thế nào để tản nhiệt cho các thiết bị điện tử nano?',
        answer:
          'Khi hàng tỷ bóng bán dẫn được nhồi nhét vào một không gian nhỏ, việc tản nhiệt trở thành một thách thức lớn. Các nhà khoa học đang nghiên cứu các vật liệu nano có khả năng dẫn nhiệt cao như ống nano carbon hoặc graphene để tạo ra các "đường cao tốc" dẫn nhiệt ra khỏi các điểm nóng trên chip.',
      },
      {
        question: 'Điện tử phân tử (Molecular Electronics) là gì?',
        answer:
          'Đây là một lĩnh vực tham vọng nhằm sử dụng các phân tử đơn lẻ hoặc một nhóm nhỏ các phân tử làm linh kiện điện tử. Nếu thành công, nó có thể dẫn đến sự thu nhỏ ở mức độ cao nhất có thể, với các thiết bị nhỏ hơn hàng nghìn lần so với hiện nay.',
      },
      {
        question: 'Tại sao cần phải tìm vật liệu thay thế silicon?',
        answer:
          'Silicon là nền tảng của ngành công nghiệp điện tử trong nhiều thập kỷ, nhưng nó đang đạt đến giới hạn vật lý của mình. Để tiếp tục tuân theo Định luật Moore và tạo ra các thiết bị mạnh mẽ hơn, các nhà khoa học cần tìm kiếm các vật liệu mới có đặc tính điện tử ưu việt hơn ở quy mô nano.',
      },
      {
        question: 'Máy tính lượng tử có sử dụng công nghệ nano không?',
        answer:
          'Có, rất nhiều. Việc chế tạo các qubit (đơn vị cơ bản của máy tính lượng tử) thường liên quan đến các cấu trúc nano. Ví dụ, các qubit siêu dẫn được tạo ra bằng các mạch điện siêu nhỏ, hay các qubit chấm lượng tử sử dụng các hạt nano để bẫy và điều khiển các electron đơn lẻ.',
      },
    ],
  },
  {
    id: 'nanotech-energy-environment',
    title: 'Nano trong Năng Lượng và Môi Trường',
    description:
      'Khám phá vai trò của công nghệ nano trong việc cải thiện hiệu quả năng lượng, lưu trữ năng lượng và xử lý ô nhiễm môi trường.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/embed/G2hBwTqBiKk',
    objectives: [
      'Hiểu cách vật liệu nano tăng hiệu suất của pin mặt trời.',
      'Khám phá các phương pháp lưu trữ hydro an toàn và hiệu quả.',
      'Tìm hiểu về ứng dụng của xúc tác nano trong việc làm sạch nước và không khí.',
    ],
    realWorldApplications: [
      'Tấm pin năng lượng mặt trời thế hệ mới.',
      'Pin cho xe điện và các thiết bị di động.',
      'Hệ thống lọc nước tiên tiến.',
    ],
    nanotechApplications: ['Pin mặt trời hiệu suất cao', 'Lưu trữ hydro', 'Xúc tác nano để xử lý nước'],
    materialsProperties: ['Aerogels', 'Vật liệu nano xốp'],
    safetyConsiderations: ['Tác động sinh thái của vật liệu nano', 'Vòng đời sản phẩm nano'],
    faqs: [
      {
        question: 'Công nghệ nano giúp cải thiện pin mặt trời như thế nào?',
        answer:
          'Các vật liệu nano có thể cải thiện pin mặt trời theo nhiều cách. Ví dụ, các hạt nano có thể được sử dụng để tạo ra các lớp phủ chống phản xạ, giúp hấp thụ nhiều ánh sáng hơn. Các chấm lượng tử có thể hấp thụ các phần khác nhau của quang phổ mặt trời, tăng hiệu suất chuyển đổi năng lượng.',
      },
      {
        question: 'Tại sao lưu trữ hydro lại là một thách thức?',
        answer:
          'Hydro là một nguồn năng lượng sạch và hiệu quả, nhưng nó là một loại khí rất nhẹ và có mật độ năng lượng thấp theo thể tích. Việc lưu trữ nó dưới dạng khí nén hoặc lỏng đòi hỏi áp suất rất cao hoặc nhiệt độ rất thấp, tốn kém và không an toàn. Công nghệ nano đang tìm cách "bẫy" các phân tử hydro trong các vật liệu nano xốp ở điều kiện thường.',
      },
      {
        question: 'Xúc tác nano hoạt động như thế nào trong việc xử lý ô nhiễm?',
        answer:
          'Các hạt nano có tỷ lệ diện tích bề mặt trên thể tích cực lớn, có nghĩa là có rất nhiều "vị trí hoạt động" để các phản ứng hóa học xảy ra. Các chất xúc tác nano có thể phá vỡ các chất ô nhiễm hữu cơ độc hại trong nước hoặc chuyển đổi các khí độc hại từ ống xả ô tô (như CO, NOx) thành các khí vô hại (CO2, N2).',
      },
      {
        question: 'Aerogel là gì và nó được ứng dụng ra sao?',
        answer:
          'Aerogel, còn được gọi là "khói đông lạnh", là một trong những vật liệu rắn nhẹ nhất thế giới, với thành phần hơn 99% là không khí. Nó có khả năng cách nhiệt phi thường và đang được nghiên cứu để sử dụng trong các tòa nhà tiết kiệm năng lượng, quần áo giữ nhiệt và cách nhiệt cho tàu vũ trụ.',
      },
      {
        question: 'Làm thế nào công nghệ nano có thể giúp tiết kiệm nước?',
        answer:
          'Các màng lọc nano có các lỗ siêu nhỏ có thể loại bỏ muối, vi khuẩn, virus và các chất ô nhiễm khác khỏi nước một cách hiệu quả. Điều này cho phép khử mặn nước biển hoặc tái chế nước thải thành nước uống được với chi phí năng lượng thấp hơn so với các phương pháp truyền thống.',
      },
      {
        question: 'Pin lithium-ion được cải tiến bằng công nghệ nano như thế nào?',
        answer:
          'Bằng cách sử dụng các vật liệu nano (như silicon nanowires hoặc graphene) trong các điện cực của pin, các nhà khoa học có thể tăng đáng kể diện tích bề mặt. Điều này cho phép pin sạc nhanh hơn, lưu trữ nhiều năng lượng hơn và có tuổi thọ cao hơn.',
      },
      {
        question: 'Vật liệu nano có thể giúp thu giữ carbon không?',
        answer:
          'Có, các nhà khoa học đang phát triển các vật liệu nano xốp có khả năng "bắt" các phân tử CO2 từ khí thải của các nhà máy điện hoặc trực tiếp từ không khí. Sau đó, CO2 có thể được lưu trữ an toàn dưới lòng đất hoặc được chuyển đổi thành các hóa chất hữu ích.',
      },
      {
        question: 'Tác động sinh thái của vật liệu nano là gì?',
        answer:
          'Đây là một mối quan tâm lớn. Khi các sản phẩm chứa vật liệu nano bị thải bỏ, các hạt nano có thể xâm nhập vào môi trường đất và nước. Các nhà khoa học đang nghiên cứu cách các hạt này tương tác với hệ sinh thái và liệu chúng có thể tích tụ trong chuỗi thức ăn hay không.',
      },
      {
        question: 'Sơn tự làm sạch hoạt động như thế nào?',
        answer:
          'Một số loại sơn sử dụng các hạt nano titan dioxide (TiO2). Khi tiếp xúc với ánh sáng mặt trời, các hạt này hoạt động như một chất xúc tác, phá vỡ các chất bẩn hữu cơ. Ngoài ra, bề mặt nano cũng có thể tạo ra hiệu ứng "lá sen", khiến nước vo tròn thành giọt và cuốn trôi bụi bẩn.',
      },
      {
        question: 'Nhiên liệu sinh học có thể được sản xuất hiệu quả hơn bằng công nghệ nano không?',
        answer:
          'Có, các enzyme được cố định trên các hạt nano có thể hoạt động như các chất xúc tác nano sinh học, giúp phá vỡ cellulose từ thực vật thành đường một cách hiệu quả hơn. Quá trình này là một bước quan trọng trong việc sản xuất ethanol sinh học.',
      },
    ],
  },
];

export const nanotechnologyModule: ModuleData = {
  id: 'nanotechnology',
  title: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
  description:
    'Khám phá thế giới vi mô của công nghệ nano, từ vật liệu nano, y học nano đến các thiết bị lượng tử, và hiểu các tác động an toàn và môi trường.',
  image: 'nanotechnology-module.jpg',
  tags: ['công nghệ nano', 'vật liệu tiên tiến', 'y học nano', 'thiết bị lượng tử'],
  category: 'Công nghệ mới nổi',
};

export const nanotechnologyLessons = lessons;
