import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const sustainableEnergyGreenTechLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-sustainable-energy',
    title: 'Giới thiệu về Năng lượng Bền vững',
    description:
      'Tìm hiểu các khái niệm cơ bản về năng lượng bền vững, tầm quan trọng và các loại năng lượng tái tạo chính.',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu định nghĩa và tầm quan trọng của năng lượng bền vững.',
      'Phân biệt được các loại năng lượng tái tạo chính (mặt trời, gió, thủy điện).',
      'Nhận thức được vai trò của năng lượng bền vững trong việc chống biến đổi khí hậu.',
    ],
    prerequisites: ['Kiến thức cơ bản về khoa học tự nhiên.'],
    exercises: [
      {
        title: 'Tính toán Dấu chân Carbon Cá nhân',
        description:
          'Sử dụng một công cụ online để tính toán lượng khí thải CO2 hàng năm của bạn và xác định các nguồn phát thải chính.',
        difficulty: 'Cơ bản',
        procedure: [
          'Tìm kiếm một công cụ tính dấu chân carbon online (ví dụ: của WWF, Global Footprint Network).',
          'Nhập các thông tin về việc sử dụng điện, di chuyển, ăn uống và mua sắm của bạn.',
          'Ghi lại kết quả và so sánh với mức trung bình của Việt Nam và thế giới.',
          'Xác định 2-3 hành động cụ thể bạn có thể làm để giảm dấu chân carbon của mình.',
        ],
        expectedResults: 'Một bản báo cáo cá nhân về dấu chân carbon và một kế hoạch hành động để giảm thiểu nó.',
      },
    ],
    realWorldApplications: [
      'Quyết định lắp đặt hệ thống điện mặt trời áp mái cho gia đình.',
      'Lựa chọn sử dụng phương tiện giao thông công cộng hoặc xe điện.',
      'Ủng hộ các chính sách của chính phủ về phát triển năng lượng tái tạo.',
      'Tiết kiệm điện trong sinh hoạt hàng ngày.',
    ],
    faqs: [
      {
        question: 'Năng lượng bền vững và năng lượng tái tạo có giống nhau không?',
        answer:
          'Chúng rất gần nhau nhưng không hoàn toàn giống nhau. Năng lượng tái tạo (mặt trời, gió) là nguồn năng lượng được bổ sung tự nhiên. Năng lượng bền vững là khái niệm rộng hơn, bao gồm cả việc sử dụng năng lượng tái tạo và các biện pháp sử dụng năng lượng một cách hiệu quả, tiết kiệm để đáp ứng nhu cầu hiện tại mà không ảnh hưởng đến thế hệ tương lai.',
      },
      {
        question: 'Tại sao năng lượng hóa thạch (than, dầu, khí) không được coi là bền vững?',
        answer:
          'Vì chúng là nguồn tài nguyên hữu hạn, sẽ cạn kiệt trong tương lai. Quan trọng hơn, việc đốt năng lượng hóa thạch giải phóng một lượng lớn khí nhà kính (như CO2), là nguyên nhân chính gây ra biến đổi khí hậu và ô nhiễm không khí.',
      },
      {
        question: 'Nguồn năng lượng tái tạo nào là phổ biến nhất trên thế giới?',
        answer:
          'Thủy điện hiện là nguồn năng lượng tái tạo lớn nhất về sản lượng điện toàn cầu. Tuy nhiên, năng lượng mặt trời và gió đang có tốc độ phát triển nhanh nhất do chi phí ngày càng giảm và tính linh hoạt trong lắp đặt.',
      },
      {
        question: 'Việt Nam có tiềm năng phát triển những loại năng lượng tái tạo nào?',
        answer:
          'Việt Nam có tiềm năng rất lớn về năng lượng mặt trời, đặc biệt ở các tỉnh miền Nam và miền Trung, và năng lượng gió, đặc biệt là gió ngoài khơi ở các vùng biển phía Nam. Ngoài ra, thủy điện nhỏ và năng lượng sinh khối từ nông nghiệp cũng là những nguồn tiềm năng.',
      },
      {
        question: 'Lưới điện thông minh (Smart Grid) là gì?',
        answer:
          'Là một hệ thống lưới điện được nâng cấp bằng công nghệ thông tin và truyền thông, cho phép dòng điện và thông tin di chuyển hai chiều. Nó giúp quản lý việc cung và cầu điện hiệu quả hơn, tích hợp tốt hơn các nguồn năng lượng tái tạo không ổn định, và tăng độ tin cậy của hệ thống điện.',
      },
      {
        question: 'Lưu trữ năng lượng có vai trò gì?',
        answer:
          'Lưu trữ năng lượng (thường bằng pin) là yếu tố cực kỳ quan trọng. Vì năng lượng mặt trời và gió không ổn định (chỉ có khi có nắng, có gió), hệ thống lưu trữ giúp tích trữ năng lượng khi sản xuất dư thừa và phát ra khi cần thiết, đảm bảo nguồn cung điện ổn định 24/7.',
      },
      {
        question: 'Sử dụng năng lượng bền vững có đắt không?',
        answer:
          "Chi phí ban đầu để lắp đặt các hệ thống năng lượng tái tạo (như pin mặt trời) có thể cao, nhưng chi phí vận hành rất thấp (vì 'nhiên liệu' là miễn phí). Trong dài hạn, nó thường rẻ hơn so với việc sử dụng năng lượng hóa thạch, đặc biệt khi tính đến các chi phí về môi trường và sức khỏe.",
      },
      {
        question: 'Làm thế nào một cá nhân có thể đóng góp vào việc chuyển đổi năng lượng bền vững?',
        answer:
          'Bạn có thể bắt đầu bằng việc tiết kiệm điện, sử dụng các thiết bị hiệu suất cao, ưu tiên đi bộ, đi xe đạp hoặc phương tiện công cộng. Nếu có điều kiện, bạn có thể lắp đặt điện mặt trời áp mái hoặc đầu tư vào các công ty năng lượng sạch.',
      },
      {
        question: "Thủy điện có phải lúc nào cũng là năng lượng 'xanh' không?",
        answer:
          'Không hẳn. Mặc dù là năng lượng tái tạo, các dự án thủy điện lớn có thể gây ra các tác động tiêu cực đến môi trường như thay đổi dòng chảy sông, mất đa dạng sinh học, và di dời cộng đồng dân cư. Các dự án thủy điện nhỏ, đập không dâng thường được coi là bền vững hơn.',
      },
      {
        question: 'Năng lượng hạt nhân có phải là năng lượng bền vững không?',
        answer:
          'Đây là một chủ đề gây tranh cãi. Năng lượng hạt nhân không phát thải khí nhà kính trong quá trình vận hành, nhưng nó tạo ra chất thải phóng xạ nguy hiểm cần được quản lý trong hàng ngàn năm và có nguy cơ về an toàn. Do đó, nhiều người không coi nó là một giải pháp thực sự bền vững.',
      },
    ],
  },
  {
    id: 'solar-power-technology',
    title: 'Công nghệ Năng lượng Mặt trời',
    description:
      'Khám phá cách hoạt động của pin mặt trời, các loại hệ thống điện mặt trời và tiềm năng ứng dụng tại Việt Nam.',
    videoUrl: 'https://www.youtube.com/watch?v=0eQ12-mQ-4o',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Giải thích được nguyên lý hoạt động của pin quang điện (photovoltaic).',
      'Mô tả các thành phần của một hệ thống điện mặt trời dân dụng.',
      'Đánh giá tiềm năng và thách thức của điện mặt trời tại Việt Nam.',
    ],
    prerequisites: ['Bài học "Giới thiệu về Năng lượng Bền vững".'],
    exercises: [
      {
        title: 'Tính toán Kích thước Hệ thống Điện Mặt trời',
        description:
          'Thực hiện một bài toán đơn giản để ước tính số lượng tấm pin mặt trời cần thiết cho một hộ gia đình.',
        difficulty: 'Trung bình',
        procedure: [
          'Xem hóa đơn tiền điện hàng tháng để xác định lượng điện tiêu thụ (kWh/tháng).',
          'Chia cho 30 để có lượng điện tiêu thụ trung bình mỗi ngày.',
          'Giả sử số giờ nắng hiệu quả mỗi ngày là 4-5 giờ, hãy tính công suất hệ thống cần thiết (kWp).',
          'Với mỗi tấm pin có công suất khoảng 450-550Wp, hãy tính số lượng tấm pin cần lắp đặt.',
        ],
        expectedResults:
          'Một con số ước tính về công suất và số lượng tấm pin, giúp hiểu rõ hơn về quy mô của một dự án dân dụng.',
      },
    ],
    realWorldApplications: [
      'Hệ thống điện mặt trời áp mái cho các hộ gia đình, nhà xưởng.',
      'Các trang trại điện mặt trời quy mô lớn hòa vào lưới điện quốc gia.',
      'Đèn đường, đèn giao thông sử dụng năng lượng mặt trời.',
      'Các bộ sạc di động bằng năng lượng mặt trời.',
    ],
    faqs: [
      {
        question: 'Pin quang điện (photovoltaic cell) hoạt động như thế nào?',
        answer:
          'Pin quang điện được làm từ vật liệu bán dẫn, thường là silicon. Khi ánh sáng mặt trời (photon) chiếu vào, nó truyền năng lượng cho các electron trong vật liệu, làm chúng bật ra khỏi vị trí. Một điện trường bên trong pin sẽ đẩy các electron này di chuyển theo một hướng, tạo ra dòng điện.',
      },
      {
        question: 'Sự khác biệt giữa hệ thống điện mặt trời hòa lưới, độc lập và hybrid là gì?',
        answer:
          'Hệ thống hòa lưới (on-grid) kết nối với lưới điện quốc gia, có thể bán lại điện dư. Hệ thống độc lập (off-grid) không kết nối lưới điện, cần có pin lưu trữ để sử dụng vào ban đêm. Hệ thống hybrid (lai) là sự kết hợp của cả hai, vừa kết nối lưới điện vừa có pin lưu trữ để dự phòng khi mất điện.',
      },
      {
        question: 'Hiệu suất của pin mặt trời hiện nay là bao nhiêu?',
        answer:
          'Hiệu suất của các tấm pin thương mại phổ biến hiện nay dao động từ 19% đến 23%. Điều này có nghĩa là chúng có thể chuyển đổi 19-23% năng lượng ánh sáng mặt trời chiếu vào thành điện năng. Các công nghệ mới trong phòng thí nghiệm đã đạt hiệu suất cao hơn nhiều.',
      },
      {
        question: 'Tuổi thọ của một tấm pin mặt trời là bao lâu?',
        answer:
          'Hầu hết các nhà sản xuất đều bảo hành hiệu suất cho các tấm pin của họ trong 25 năm. Sau 25 năm, hiệu suất của chúng thường sẽ giảm xuống còn khoảng 80-85% so với ban đầu, nhưng chúng vẫn tiếp tục sản xuất điện.',
      },
      {
        question: 'Inverter (biến tần) có vai trò gì trong hệ thống điện mặt trời?',
        answer:
          'Pin mặt trời tạo ra dòng điện một chiều (DC). Inverter có nhiệm vụ cực kỳ quan trọng là chuyển đổi dòng điện một chiều này thành dòng điện xoay chiều (AC), là loại điện mà hầu hết các thiết bị trong nhà và lưới điện sử dụng.',
      },
      {
        question: 'Khi mất điện lưới, hệ thống điện mặt trời hòa lưới có hoạt động không?',
        answer:
          'Không. Vì lý do an toàn cho nhân viên sửa chữa điện, các hệ thống hòa lưới tiêu chuẩn sẽ tự động ngắt kết nối khi lưới điện gặp sự cố. Để có điện khi mất điện lưới, bạn cần một hệ thống hybrid có pin lưu trữ.',
      },
      {
        question: 'Việt Nam có những chính sách nào để khuyến khích điện mặt trời?',
        answer:
          'Trong quá khứ, Chính phủ đã có các chính sách giá mua điện (FIT) hấp dẫn để khuyến khích đầu tư vào điện mặt trời. Hiện tại, các chính sách đang được điều chỉnh theo hướng tự sản tự tiêu và các cơ chế mua bán điện trực tiếp (DPPA), cho phép các doanh nghiệp mua điện trực tiếp từ các nhà sản xuất năng lượng tái tạo.',
      },
      {
        question: 'Điện mặt trời áp mái có những lợi ích gì?',
        answer:
          'Nó giúp giảm hóa đơn tiền điện hàng tháng, giảm tải cho lưới điện quốc gia vào giờ cao điểm, góp phần bảo vệ môi trường, và làm mát mái nhà, giúp giảm chi phí điều hòa không khí.',
      },
      {
        question: 'Lắp đặt điện mặt trời có cần nhiều diện tích không?',
        answer:
          'Để tạo ra 1 kWp điện, bạn cần khoảng 6-7 mét vuông diện tích mái. Một hộ gia đình thông thường ở Việt Nam có thể lắp đặt một hệ thống từ 3-5 kWp, tương đương với khoảng 20-35 mét vuông mái.',
      },
      {
        question: 'Bảo trì hệ thống điện mặt trời có phức tạp không?',
        answer:
          'Không. Hệ thống điện mặt trời có rất ít bộ phận chuyển động nên yêu cầu bảo trì rất thấp. Công việc chính là giữ cho bề mặt các tấm pin sạch sẽ, không bị che khuất bởi bụi bẩn hoặc lá cây để đảm bảo hiệu suất tối đa.',
      },
    ],
  },
  {
    id: 'wind-power-and-turbines',
    title: 'Năng lượng Gió và Tua bin',
    description:
      'Tìm hiểu về nguyên lý hoạt động của tua bin gió, các loại trang trại gió và thách thức trong phát triển điện gió.',
    videoUrl: 'https://www.youtube.com/watch?v=Z5vYafcxV_E',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Trình bày nguyên lý chuyển đổi động năng của gió thành điện năng.',
      'Phân biệt các loại tua bin gió trục ngang và trục đứng.',
      'Thảo luận về các yếu tố môi trường và kinh tế của các dự án điện gió.',
    ],
    prerequisites: ['Bài học "Giới thiệu về Năng lượng Bền vững".'],
    exercises: [
      {
        title: 'Nghiên cứu một Dự án Điện gió tại Việt Nam',
        description:
          'Chọn một dự án điện gió lớn tại Việt Nam (ví dụ: tại Bạc Liêu, Ninh Thuận, Bình Thuận) và tìm hiểu thông tin về nó.',
        difficulty: 'Trung bình',
        procedure: [
          'Tìm kiếm thông tin về công suất của dự án, số lượng tua bin, và chủ đầu tư.',
          'Phân tích những lợi ích kinh tế và xã hội mà dự án mang lại cho địa phương.',
          'Tìm hiểu về những thách thức hoặc tranh cãi (nếu có) liên quan đến dự án (ví dụ: tác động môi trường, xung đột sử dụng đất).',
          'Viết một bản tóm tắt ngắn về dự án.',
        ],
        expectedResults:
          'Một bài viết tổng quan 1-2 trang về một dự án điện gió thực tế, thể hiện khả năng thu thập và phân tích thông tin.',
      },
    ],
    realWorldApplications: [
      'Các trang trại điện gió trên bờ (onshore) cung cấp điện cho các khu công nghiệp.',
      'Các dự án điện gió ngoài khơi (offshore) với công suất lớn.',
      'Các tua bin gió nhỏ cho các hộ gia đình hoặc các khu vực hải đảo, vùng sâu vùng xa.',
    ],
    faqs: [
      {
        question: 'Tua bin gió hoạt động như thế nào?',
        answer:
          'Rất giống một chiếc quạt máy nhưng hoạt động ngược lại. Thay vì dùng điện để tạo ra gió, tua bin gió dùng gió để tạo ra điện. Gió làm quay các cánh quạt, các cánh quạt này được nối với một trục quay. Trục quay này làm quay một máy phát điện, và máy phát điện sẽ tạo ra điện.',
      },
      {
        question: 'Tại sao các tua bin gió hiện đại thường có 3 cánh?',
        answer:
          'Thiết kế 3 cánh là sự cân bằng tối ưu giữa hiệu quả khí động học và sự ổn định về mặt cấu trúc. Ít hơn 3 cánh (1 hoặc 2) sẽ gây ra rung động và không ổn định. Nhiều hơn 3 cánh sẽ làm tăng chi phí và sức cản không khí mà không tăng đáng kể sản lượng điện.',
      },
      {
        question: 'Sự khác biệt giữa điện gió trên bờ (onshore) và ngoài khơi (offshore) là gì?',
        answer:
          'Điện gió trên bờ được xây dựng trên đất liền. Điện gió ngoài khơi được xây dựng trên biển. Gió ngoài khơi thường mạnh hơn và ổn định hơn, cho phép các tua bin lớn hơn và sản xuất nhiều điện hơn. Tuy nhiên, chi phí xây dựng và bảo trì điện gió ngoài khơi cao hơn nhiều.',
      },
      {
        question: 'Tốc độ gió tối thiểu để tua bin hoạt động là bao nhiêu?',
        answer:
          'Hầu hết các tua bin gió thương mại bắt đầu sản xuất điện ở tốc độ gió khoảng 3-4 m/s (cut-in speed) và đạt công suất tối đa ở khoảng 12-15 m/s. Chúng sẽ tự động ngừng hoạt động ở tốc độ gió quá cao (khoảng 25 m/s, cut-out speed) để tránh hư hỏng.',
      },
      {
        question: 'Điện gió có gây ra tiếng ồn không?',
        answer:
          "Có, tua bin gió tạo ra tiếng ồn, chủ yếu là tiếng 'vù vù' của các cánh quạt quay trong không khí. Tuy nhiên, với các công nghệ hiện đại và quy định về khoảng cách, tiếng ồn tại các khu dân cư gần đó thường không lớn hơn tiếng ồn nền của môi trường xung quanh.",
      },
      {
        question: 'Điện gió có ảnh hưởng đến chim và động vật hoang dã không?',
        answer:
          'Có, đây là một trong những tác động môi trường đáng lo ngại. Các tua bin gió có thể gây nguy hiểm cho các loài chim và dơi bay. Tuy nhiên, các nghiên cứu và lựa chọn vị trí cẩn thận, cùng với các công nghệ phát hiện và xua đuổi hiện đại, đang giúp giảm thiểu đáng kể tác động này.',
      },
      {
        question: 'Tại sao Việt Nam có tiềm năng lớn về điện gió ngoài khơi?',
        answer:
          'Việt Nam có đường bờ biển dài hơn 3.200 km và các vùng biển nông, có tốc độ gió tốt và ổn định, đặc biệt là ở phía Nam. Theo Ngân hàng Thế giới, tiềm năng kỹ thuật của điện gió ngoài khơi Việt Nam có thể lên tới gần 500 GW, một con số khổng lồ.',
      },
      {
        question: 'Một tua bin gió có thể cung cấp điện cho bao nhiêu hộ gia đình?',
        answer:
          'Điều này phụ thuộc vào kích thước của tua bin. Một tua bin gió trên bờ hiện đại (công suất 4-6 MW) có thể cung cấp đủ điện cho khoảng 4.000-6.000 hộ gia đình. Một tua bin gió ngoài khơi (12-15 MW) có thể cung cấp điện cho hơn 10.000 hộ.',
      },
      {
        question: 'Chi phí sản xuất điện gió hiện nay như thế nào?',
        answer:
          'Chi phí sản xuất điện gió đã giảm đáng kể trong thập kỷ qua và hiện là một trong những nguồn năng lượng mới rẻ nhất. Ở nhiều nơi trên thế giới, điện gió trên bờ đã rẻ hơn so với điện than hoặc điện khí.',
      },
      {
        question: 'Thách thức lớn nhất đối với phát triển điện gió là gì?',
        answer:
          'Ngoài các vấn đề về môi trường, thách thức lớn nhất là tính không ổn định của gió. Điều này đòi hỏi phải có các giải pháp dự phòng hoặc lưu trữ năng lượng. Việc kết nối các trang trại gió (thường ở xa) với lưới điện quốc gia cũng là một thách thức lớn về mặt hạ tầng.',
      },
    ],
  },
  {
    id: 'green-building-and-design',
    title: 'Thiết kế và Xây dựng Xanh',
    description:
      'Các nguyên tắc của kiến trúc bền vững, vật liệu xây dựng thân thiện với môi trường và công nghệ tòa nhà thông minh.',
    videoUrl: 'https://www.youtube.com/watch?v=Io-m_WIiXkI',
    duration: '50 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Liệt kê các nguyên tắc cốt lõi của thiết kế xanh.',
      'Nhận biết các loại vật liệu xây dựng bền vững.',
      'Hiểu về các công nghệ giúp tòa nhà tiết kiệm năng lượng.',
    ],
    prerequisites: ['Kiến thức cơ bản về kiến trúc hoặc xây dựng là một lợi thế.'],
    exercises: [
      {
        title: 'Phân tích một Tòa nhà Xanh',
        description:
          'Tìm hiểu về một công trình được chứng nhận xanh (LEED, LOTUS) tại Việt Nam hoặc trên thế giới và phân tích các đặc điểm bền vững của nó.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một công trình (ví dụ: Tòa nhà Deutsches Haus ở TP.HCM, Capital Place ở Hà Nội).',
          'Nghiên cứu các giải pháp thiết kế xanh đã được áp dụng (ví dụ: thiết kế thông gió tự nhiên, sử dụng kính tiết kiệm năng lượng, thu gom nước mưa, mái nhà xanh).',
          'Tìm hiểu về các vật liệu xây dựng đã được sử dụng.',
          'Trình bày những lợi ích mà các giải pháp đó mang lại.',
        ],
        expectedResults: 'Một bài trình bày hoặc bài viết phân tích chi tiết về một công trình kiến trúc xanh thực tế.',
      },
    ],
    realWorldApplications: [
      'Các tòa nhà văn phòng, trung tâm thương mại đạt chứng chỉ xanh.',
      'Các khu đô thị sinh thái.',
      'Nhà ở dân dụng được thiết kế để tối ưu hóa ánh sáng tự nhiên và thông gió.',
      'Sử dụng vật liệu tái chế trong xây dựng.',
    ],
    faqs: [
      {
        question: 'Thiết kế xanh (Green Design) là gì?',
        answer:
          'Là một phương pháp tiếp cận trong thiết kế nhằm giảm thiểu tác động tiêu cực của các công trình xây dựng đến môi trường và sức khỏe con người. Nó tập trung vào việc sử dụng năng lượng, nước và vật liệu một cách hiệu quả, đồng thời cải thiện chất lượng không khí trong nhà và tạo ra một môi trường sống lành mạnh.',
      },
      {
        question: 'Chứng chỉ LEED và LOTUS là gì?',
        answer:
          'LEED (Leadership in Energy and Environmental Design) là một hệ thống chứng nhận công trình xanh của Mỹ, được công nhận rộng rãi trên toàn cầu. LOTUS là hệ thống chứng nhận công trình xanh đầu tiên được phát triển riêng cho thị trường xây dựng tại Việt Nam, do Hội đồng Công trình Xanh Việt Nam (VGBC) phát triển.',
      },
      {
        question: "Thế nào là một 'mái nhà xanh' (green roof)?",
        answer:
          'Là một mái nhà được phủ một lớp thực vật trồng trên một lớp màng chống thấm. Mái nhà xanh mang lại nhiều lợi ích như giảm hiệu ứng đảo nhiệt đô thị, cách nhiệt cho tòa nhà (giảm chi phí điều hòa), quản lý nước mưa, và tạo ra không gian xanh cho con người.',
      },
      {
        question: 'Thiết kế thụ động (passive design) trong kiến trúc là gì?',
        answer:
          'Là chiến lược thiết kế tận dụng các yếu tố tự nhiên như ánh sáng mặt trời, hướng gió để làm mát, sưởi ấm và chiếu sáng cho tòa nhà mà không cần (hoặc cần rất ít) sự trợ giúp của các hệ thống cơ khí. Ví dụ: thiết kế cửa sổ lớn ở hướng Nam để đón nắng mùa đông, hoặc tạo các ô thông gió để làm mát tự nhiên.',
      },
      {
        question: 'Vật liệu xây dựng nào được coi là bền vững?',
        answer:
          'Các vật liệu bền vững có thể bao gồm vật liệu tái chế (như thép tái chế, gạch từ rác thải), vật liệu tái tạo nhanh (như tre), vật liệu có nguồn gốc địa phương (để giảm chi phí vận chuyển), và các vật liệu không chứa chất độc hại (VOCs thấp).',
      },
      {
        question: 'Hiệu ứng đảo nhiệt đô thị là gì?',
        answer:
          'Là hiện tượng các khu vực đô thị có nhiệt độ không khí cao hơn đáng kể so với các khu vực nông thôn xung quanh. Nguyên nhân là do các bề mặt như bê tông và nhựa đường hấp thụ và giữ nhiệt nhiều hơn. Các giải pháp như mái nhà xanh và công viên giúp giảm thiểu hiệu ứng này.',
      },
      {
        question: 'Làm thế nào một tòa nhà có thể tiết kiệm nước?',
        answer:
          'Các tòa nhà xanh tiết kiệm nước bằng cách sử dụng các thiết bị vệ sinh hiệu suất cao (vòi nước, bồn cầu lưu lượng thấp), hệ thống thu gom và tái sử dụng nước mưa hoặc nước thải đã qua xử lý để tưới cây hoặc dội nhà vệ sinh.',
      },
      {
        question: 'Kính Low-E là gì?',
        answer:
          'Kính Low-E (Low Emissivity) là loại kính được phủ một lớp oxit kim loại siêu mỏng, trong suốt. Lớp phủ này có khả năng phản xạ tia hồng ngoại (nhiệt) nhưng vẫn cho phép ánh sáng nhìn thấy đi qua. Nó giúp giữ cho tòa nhà mát mẻ vào mùa hè và ấm áp vào mùa đông, do đó giảm đáng kể chi phí năng lượng.',
      },
      {
        question: 'Xây một tòa nhà xanh có tốn kém hơn không?',
        answer:
          'Chi phí xây dựng ban đầu của một tòa nhà xanh có thể cao hơn một chút (khoảng 2-5%) so với một tòa nhà thông thường. Tuy nhiên, chi phí vận hành (tiền điện, nước) trong suốt vòng đời của nó lại thấp hơn đáng kể. Khoản đầu tư ban đầu thường sẽ được hoàn vốn sau vài năm.',
      },
      {
        question: 'Chất lượng không khí trong nhà (IAQ) quan trọng như thế nào?',
        answer:
          'Rất quan trọng. Chúng ta dành phần lớn thời gian ở trong nhà, và không khí trong nhà có thể bị ô nhiễm hơn không khí ngoài trời. Các tòa nhà xanh chú trọng đến IAQ bằng cách sử dụng vật liệu không độc hại, tăng cường thông gió và sử dụng các bộ lọc không khí hiệu quả, giúp cải thiện sức khỏe và năng suất làm việc của con người.',
      },
    ],
  },
  {
    id: 'electric-vehicles-and-future-of-transport',
    title: 'Xe điện và Tương lai Giao thông',
    description: 'Phân tích công nghệ xe điện, hạ tầng trạm sạc và tác động của xe điện đến lưới điện và môi trường.',
    videoUrl: 'https://www.youtube.com/watch?v=3SAxXUIre28',
    duration: '55 phút',
    difficulty: 'Trung bình',
    objectives: [
      'So sánh ưu và nhược điểm của xe điện so với xe động cơ đốt trong.',
      'Hiểu về các loại công nghệ pin và hệ thống sạc.',
      'Phân tích các thách thức về hạ tầng và nguồn điện cho xe điện.',
    ],
    prerequisites: ['Kiến thức phổ thông về ô tô và điện.'],
    exercises: [
      {
        title: 'So sánh Chi phí Sở hữu Xe điện và Xe xăng',
        description:
          'Thực hiện một phân tích chi phí tổng thể (TCO - Total Cost of Ownership) trong 5 năm cho một mẫu xe điện và một mẫu xe xăng tương đương tại Việt Nam.',
        difficulty: 'Nâng cao',
        procedure: [
          'Tìm giá niêm yết của hai mẫu xe.',
          'Ước tính chi phí nhiên liệu/sạc điện hàng năm dựa trên một quãng đường di chuyển giả định (ví dụ: 15.000 km/năm).',
          'Tìm hiểu và so sánh chi phí bảo dưỡng định kỳ của hai loại xe.',
          'Tính toán tổng chi phí sau 5 năm và đưa ra kết luận.',
        ],
        expectedResults:
          'Một bảng so sánh chi tiết cho thấy loại xe nào kinh tế hơn trong dài hạn, cùng với các phân tích và giả định đi kèm.',
      },
    ],
    realWorldApplications: [
      'Sự phát triển của hãng xe điện VinFast tại Việt Nam.',
      'Các dịch vụ taxi và xe ôm công nghệ sử dụng xe máy điện (Xanh SM).',
      'Việc lắp đặt các trạm sạc công cộng tại các trung tâm thương mại, chung cư.',
      'Chính sách miễn lệ phí trước bạ cho xe điện của chính phủ.',
    ],
    faqs: [
      {
        question: 'Xe điện (EV) hoạt động như thế nào?',
        answer:
          'Thay vì động cơ đốt trong, xe điện sử dụng một hoặc nhiều động cơ điện để quay bánh xe. Năng lượng được lưu trữ trong một bộ pin lớn (thường là pin Lithium-ion) và được truyền đến động cơ điện để vận hành xe.',
      },
      {
        question: 'Sự khác biệt giữa xe HEV, PHEV và BEV là gì?',
        answer:
          'BEV (Battery Electric Vehicle) là xe chạy hoàn toàn bằng điện, không có động cơ xăng. HEV (Hybrid Electric Vehicle) có cả động cơ xăng và động cơ điện, pin được sạc lại bằng động cơ xăng và phanh tái tạo, không thể cắm sạc. PHEV (Plug-in Hybrid Electric Vehicle) giống HEV nhưng có bộ pin lớn hơn và có thể cắm sạc, cho phép đi được một quãng đường nhất định hoàn toàn bằng điện.',
      },
      {
        question: 'Phanh tái tạo (Regenerative Braking) là gì?',
        answer:
          'Là một tính năng thông minh trên xe điện. Khi bạn giảm tốc hoặc đạp phanh, động cơ điện sẽ hoạt động như một máy phát điện, chuyển đổi động năng của xe thành điện năng và sạc ngược lại vào pin. Điều này giúp tăng phạm vi hoạt động của xe.',
      },
      {
        question: 'Sạc xe điện mất bao lâu?',
        answer:
          'Thời gian sạc phụ thuộc vào loại sạc. Sạc tại nhà bằng bộ sạc cấp 1 (dòng điện gia dụng) có thể mất cả đêm. Sạc cấp 2 tại các trạm công cộng hoặc lắp tại nhà mất khoảng 4-8 giờ. Sạc nhanh DC (cấp 3) tại các trạm sạc nhanh có thể sạc 80% pin chỉ trong vòng 20-30 phút.',
      },
      {
        question: "Xe điện có thực sự 'xanh' hơn không nếu điện sạc cho nó được sản xuất từ than đá?",
        answer:
          'Có. Ngay cả khi nguồn điện đến từ than đá, xe điện vẫn hiệu quả hơn và phát thải ít CO2 hơn trên mỗi km so với xe xăng. Lý do là các nhà máy điện lớn có hiệu suất chuyển đổi năng lượng cao hơn và kiểm soát ô nhiễm tốt hơn so với hàng triệu động cơ đốt trong nhỏ lẻ. Lợi ích này càng lớn khi tỷ lệ năng lượng tái tạo trong lưới điện tăng lên.',
      },
      {
        question: 'Tuổi thọ của pin xe điện là bao lâu?',
        answer:
          "Pin xe điện được thiết kế để có tuổi thọ rất cao, thường được bảo hành từ 8 đến 10 năm hoặc một số km nhất định. Sau thời gian này, pin không 'chết' mà chỉ bị suy giảm dung lượng (giống như pin điện thoại), vẫn có thể sử dụng được nhưng phạm vi hoạt động sẽ giảm đi.",
      },
      {
        question: 'Pin xe điện cũ sẽ được xử lý như thế nào?',
        answer:
          "Đây là một lĩnh vực đang phát triển nhanh. Pin xe điện cũ, dù không còn đủ dung lượng cho xe, vẫn còn rất hữu ích. Chúng có thể được 'tái sử dụng' làm hệ thống lưu trữ năng lượng cho gia đình hoặc doanh nghiệp. Sau đó, chúng sẽ được 'tái chế' để thu hồi các kim loại quý như lithium, cobalt, và niken.",
      },
      {
        question: 'Phạm vi hoạt động của xe điện bị ảnh hưởng bởi những yếu tố nào?',
        answer:
          'Phạm vi hoạt động bị ảnh hưởng bởi nhiệt độ (thời tiết lạnh làm giảm phạm vi), tốc độ lái xe (lái nhanh tốn nhiều năng lượng hơn), địa hình (leo dốc tốn năng lượng), và việc sử dụng điều hòa không khí hoặc hệ thống sưởi.',
      },
      {
        question: 'Công nghệ V2G (Vehicle-to-Grid) là gì?',
        answer:
          'Là một công nghệ cho phép xe điện không chỉ lấy điện từ lưới điện mà còn có thể trả ngược điện lại lưới điện khi cần thiết. Điều này biến hàng triệu chiếc xe điện thành một hệ thống lưu trữ năng lượng phân tán khổng lồ, giúp ổn định lưới điện vào giờ cao điểm.',
      },
      {
        question: 'Thách thức lớn nhất cho việc phổ cập xe điện tại Việt Nam là gì?',
        answer:
          "Thách thức lớn nhất hiện nay là hạ tầng trạm sạc công cộng còn hạn chế, đặc biệt là ở các vùng nông thôn. Giá thành ban đầu của xe điện vẫn còn cao so với mặt bằng thu nhập chung, và sự lo lắng của người dùng về phạm vi hoạt động ('range anxiety') cũng là một rào cản.",
      },
    ],
  },
  {
    id: 'circular-economy-principles',
    title: 'Nguyên tắc Kinh tế Tuần hoàn',
    description:
      'Hiểu về mô hình kinh tế tuần hoàn, cách áp dụng trong sản xuất và tiêu dùng để giảm thiểu chất thải và bảo vệ tài nguyên.',
    videoUrl: 'https://www.youtube.com/watch?v=W-b_mS-L4-A',
    duration: '65 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Định nghĩa và giải thích mô hình kinh tế tuần hoàn (Circular Economy).',
      'Phân biệt kinh tế tuần hoàn và kinh tế tuyến tính (Linear Economy).',
      'Nêu các ví dụ thực tế về áp dụng kinh tế tuần hoàn trong doanh nghiệp.',
    ],
    prerequisites: ['Kiến thức cơ bản về kinh tế và môi trường.'],
    exercises: [
      {
        title: 'Thiết kế lại một Sản phẩm theo Nguyên tắc Tuần hoàn',
        description:
          'Chọn một sản phẩm tiêu dùng hàng ngày (ví dụ: bàn chải đánh răng, chai nước, tai nghe) và thiết kế lại nó để phù hợp hơn với kinh tế tuần hoàn.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích vòng đời của sản phẩm hiện tại và xác định các điểm gây lãng phí.',
          'Đề xuất các thay đổi về vật liệu (ví dụ: sử dụng vật liệu tái chế, dễ phân hủy sinh học).',
          'Thiết kế lại sản phẩm để dễ dàng sửa chữa, nâng cấp hoặc tháo dỡ để tái chế (Design for Disassembly).',
          'Xem xét một mô hình kinh doanh mới (ví dụ: cho thuê thay vì bán).',
        ],
        expectedResults:
          'Một bản trình bày về thiết kế sản phẩm mới, nêu bật các cải tiến về tính tuần hoàn và lợi ích tiềm năng.',
      },
    ],
    realWorldApplications: [
      'Các công ty thời trang cho thuê quần áo thay vì bán.',
      'Các nhà sản xuất điện tử có chương trình thu hồi và tái chế sản phẩm cũ.',
      'Các nhà hàng sử dụng rác thải thực phẩm để làm phân compost.',
      'Sản xuất bao bì từ vật liệu tái chế hoặc có khả năng phân hủy sinh học.',
    ],
    faqs: [
      {
        question: 'Kinh tế tuần hoàn khác với kinh tế tuyến tính như thế nào?',
        answer:
          "Kinh tế tuyến tính hoạt động theo mô hình 'Khai thác - Sản xuất - Tiêu dùng - Vứt bỏ'. Ngược lại, kinh tế tuần hoàn được thiết kế để loại bỏ chất thải và ô nhiễm, giữ cho sản phẩm và vật liệu được sử dụng càng lâu càng có thể ở giá trị cao nhất. Nó chuyển từ mô hình 'vứt bỏ' sang mô hình 'phục hồi'.",
      },
      {
        question: 'Ba nguyên tắc cốt lõi của kinh tế tuần hoàn là gì?',
        answer:
          'Theo Ellen MacArthur Foundation, ba nguyên tắc đó là: 1. Loại bỏ chất thải và ô nhiễm ngay từ khâu thiết kế. 2. Giữ cho sản phẩm và vật liệu được sử dụng lâu nhất có thể ở giá trị cao nhất. 3. Tái tạo các hệ thống tự nhiên.',
      },
      {
        question: "Vòng lặp 'tái sử dụng' (reuse) và 'tái chế' (recycle) khác nhau như thế nào?",
        answer:
          'Tái sử dụng là việc dùng lại một sản phẩm cho cùng một mục đích hoặc mục đích khác mà không cần xử lý nhiều (ví dụ: đổ đầy lại chai nước). Tái chế là quá trình xử lý vật liệu thải để biến chúng thành vật liệu hoặc sản phẩm mới (ví dụ: nấu chảy chai nhựa để làm sợi polyester). Trong hệ thống tuần hoàn, tái sử dụng được ưu tiên hơn vì nó tiết kiệm năng lượng hơn.',
      },
      {
        question: "Mô hình 'Sản phẩm như một Dịch vụ' (Product as a Service - PaaS) là gì?",
        answer:
          "Là một mô hình kinh doanh tuần hoàn, nơi khách hàng trả tiền để sử dụng một sản phẩm thay vì sở hữu nó. Ví dụ, thay vì bán bóng đèn, công ty Signify (trước đây là Philips Lighting) cung cấp 'dịch vụ ánh sáng'. Điều này khuyến khích nhà sản xuất tạo ra các sản phẩm bền, dễ sửa chữa và dễ tái chế.",
      },
      {
        question: 'Thiết kế cho việc tháo dỡ (Design for Disassembly) có nghĩa là gì?',
        answer:
          'Là việc thiết kế các sản phẩm sao cho chúng có thể được tháo dỡ một cách dễ dàng vào cuối vòng đời. Điều này cho phép các bộ phận được sửa chữa, thay thế, hoặc tái chế một cách hiệu quả, thay vì phải nghiền nát toàn bộ sản phẩm.',
      },
      {
        question: 'Upcycling và Downcycling là gì?',
        answer:
          'Upcycling là quá trình biến đổi chất thải hoặc sản phẩm không mong muốn thành sản phẩm mới có chất lượng và giá trị cao hơn (ví dụ: làm túi xách từ vỏ bạt xe tải cũ). Downcycling là quá trình biến đổi vật liệu thành sản phẩm có chất lượng thấp hơn (ví dụ: tái chế giấy nhiều lần làm cho sợi giấy ngắn lại và yếu đi).',
      },
      {
        question: 'Kinh tế tuần hoàn có thể áp dụng cho ngành thực phẩm không?',
        answer:
          'Chắc chắn có. Nó bao gồm việc giảm thiểu lãng phí thực phẩm, biến rác thải thực phẩm thành phân compost hoặc năng lượng (biogas), và áp dụng các phương pháp nông nghiệp tái tạo giúp phục hồi sức khỏe của đất đai.',
      },
      {
        question: 'Tại sao kinh tế tuần hoàn lại quan trọng đối với các doanh nghiệp?',
        answer:
          'Nó không chỉ giúp bảo vệ môi trường. Kinh tế tuần hoàn có thể tạo ra các cơ hội kinh doanh mới, giảm sự phụ thuộc vào nguồn tài nguyên khan hiếm, tăng cường khả năng chống chịu của chuỗi cung ứng, và xây dựng mối quan hệ bền chặt hơn với khách hàng.',
      },
      {
        question: 'Trách nhiệm mở rộng của nhà sản xuất (Extended Producer Responsibility - EPR) là gì?',
        answer:
          'Là một chính sách môi trường yêu cầu các nhà sản xuất phải chịu trách nhiệm đối với toàn bộ vòng đời của sản phẩm họ tạo ra, bao gồm cả việc thu hồi, tái chế và xử lý sau khi người tiêu dùng sử dụng xong. Việt Nam đã bắt đầu áp dụng EPR từ năm 2024.',
      },
      {
        question: 'Làm thế nào để chuyển đổi từ kinh tế tuyến tính sang kinh tế tuần hoàn?',
        answer:
          'Đây là một quá trình chuyển đổi lớn đòi hỏi sự hợp tác từ nhiều phía: các chính phủ cần tạo ra các chính sách khuyến khích, các doanh nghiệp cần đổi mới trong thiết kế và mô hình kinh doanh, và người tiêu dùng cần thay đổi thói quen mua sắm và thải bỏ.',
      },
    ],
  },
];

export const sustainableEnergyModuleData: ModuleData = {
  id: 'sustainable-energy-green-tech',
  title: 'Năng lượng Tái tạo & Công nghệ Xanh',
  subtitle: 'Xây dựng một tương lai bền vững với năng lượng sạch và công nghệ xanh',
  description:
    'Khám phá các nguồn năng lượng tái tạo như mặt trời, gió, và thủy điện, cùng với các công nghệ xanh đột phá đang định hình lại thế giới của chúng ta, từ xe điện đến các tòa nhà thông minh.',
  level: 'Trung cấp',
  duration: '25-30 giờ',
  category: 'Khoa học Môi trường',
  features: [
    'Phân tích các loại năng lượng tái tạo.',
    'Thiết kế hệ thống năng lượng mặt trời cơ bản.',
    'Hiểu về lưới điện thông minh (smart grids).',
    'Nghiên cứu về xe điện và hạ tầng sạc.',
    'Tìm hiểu về kinh tế tuần hoàn và vật liệu bền vững.',
  ],
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững ưu và nhược điểm của các nguồn năng lượng tái tạo chính.',
    'Đánh giá tiềm năng năng lượng tái tạo tại Việt Nam.',
    'Hiểu các nguyên tắc của công nghệ xanh và phát triển bền vững.',
    'Phân tích chính sách và tác động kinh tế của năng lượng xanh.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về khoa học tự nhiên (Lý, Hóa).',
    'Hiểu biết về các vấn đề môi trường hiện tại.',
    'Tư duy hệ thống và khả năng phân tích.',
  ],
  careerOutcomes: [
    'Kỹ sư Năng lượng Tái tạo',
    'Chuyên gia Tư vấn Môi trường',
    'Quản lý Dự án Năng lượng Xanh',
    'Chuyên viên Phân tích Chính sách Năng lượng',
  ],
  industryApplications: [
    'Phát triển các trang trại điện mặt trời và điện gió.',
    'Tư vấn giải pháp tiết kiệm năng lượng cho doanh nghiệp.',
    'Quản lý và vận hành các nhà máy thủy điện.',
    'Nghiên cứu và phát triển công nghệ lưu trữ năng lượng (pin).',
    'Xây dựng và phát triển đô thị thông minh, bền vững.',
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+40%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.EnvironmentalDataScience, K2Module.Stem, K2Module.CircularEconomy],
};
