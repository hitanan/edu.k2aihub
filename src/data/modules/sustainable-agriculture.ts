import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const sustainableAgricultureLessons: BaseLessonData[] = [
  {
    id: 'intro-sustainable-agritech',
    title: 'Giới thiệu Nông nghiệp Bền vững và AgriTech',
    description:
      'Khám phá các nguyên tắc cơ bản của nông nghiệp bền vững và vai trò của công nghệ trong việc tạo ra một hệ thống lương thực hiệu quả và thân thiện với môi trường.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=b_p2_3aaA_A',
    imageUrl: 'https://i.ytimg.com/vi/b_p2_3aaA_A/hqdefault.jpg',
    objectives: [
      'Định nghĩa được nông nghiệp bền vững và AgriTech.',
      'Hiểu được ba trụ cột của sự bền vững: Kinh tế, Xã hội và Môi trường.',
      'Nhận diện các thách thức chính mà ngành nông nghiệp toàn cầu đang đối mặt.',
      'Khám phá các ví dụ ban đầu về công nghệ trong nông nghiệp.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Phân tích một Sản phẩm Nông nghiệp',
        description:
          'Truy xuất vòng đời của một sản phẩm nông nghiệp bạn tiêu thụ hàng ngày và xác định các điểm có thể cải thiện tính bền vững.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một sản phẩm (ví dụ: một quả táo, một hộp sữa).',
          'Nghiên cứu các bước từ trang trại đến bàn ăn của sản phẩm đó.',
          'Xác định các yếu tố đầu vào (nước, phân bón, năng lượng).',
          'Suy nghĩ về các tác động môi trường và xã hội ở mỗi bước.',
          'Đề xuất ít nhất một giải pháp công nghệ có thể áp dụng.',
        ],
        expectedResults: 'Một sơ đồ vòng đời sản phẩm với các phân tích và đề xuất cải tiến.',
      },
    ],
    realWorldApplications: [
      'Các chính sách nông nghiệp của chính phủ.',
      'Nhãn chứng nhận sản phẩm hữu cơ (organic).',
      'Các phong trào tiêu dùng có ý thức.',
    ],
    vietnamContext: {
      title: 'Nông nghiệp Việt Nam trước Thách thức Bền vững',
      content: [
        'Việt Nam là một trong những quốc gia bị ảnh hưởng nặng nề nhất bởi biến đổi khí hậu, đặc biệt là vùng Đồng bằng sông Cửu Long, vựa lúa của cả nước.',
        'Thói quen lạm dụng phân bón hóa học và thuốc trừ sâu đang làm suy thoái đất đai và ô nhiễm nguồn nước.',
        'Chuyển đổi sang nông nghiệp bền vững không chỉ là xu hướng mà còn là yêu cầu cấp thiết để đảm bảo an ninh lương thực và bảo vệ môi trường.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Thị Minh Nguyệt',
      title: 'Nhà sáng lập & Giám đốc',
      company: 'Công ty TNHH Thực phẩm Hữu cơ Orfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-minh-nguyet',
      quote:
        'Nông nghiệp bền vững bắt đầu từ việc tôn trọng đất mẹ. Khi chúng ta chăm sóc cho đất, đất sẽ trả lại cho chúng ta những sản phẩm an toàn và bổ dưỡng.',
    },
    quizzes: [
      {
        question: 'Đâu KHÔNG phải là một trong ba trụ cột chính của nông nghiệp bền vững?',
        options: ['Hiệu quả kinh tế', 'Công bằng xã hội', 'Bảo vệ môi trường', 'Năng suất tối đa bằng mọi giá'],
        correctAnswerIndex: 3,
        explanation:
          'Nông nghiệp bền vững tìm cách cân bằng giữa lợi ích kinh tế, trách nhiệm xã hội và bảo vệ môi trường, chứ không chỉ tập trung vào việc tối đa hóa năng suất mà bỏ qua các yếu tố khác.',
      },
    ],
    faqs: [
      {
        question: 'AgriTech là gì?',
        answer:
          'AgriTech (Agricultural Technology) là việc ứng dụng công nghệ hiện đại vào nông nghiệp để tăng năng suất, hiệu quả và tính bền vững. Nó bao gồm mọi thứ từ cảm biến IoT, drone, robot, đến phần mềm quản lý và công nghệ sinh học.',
      },
      {
        question: 'Tại sao nông nghiệp bền vững lại quan trọng với Việt Nam?',
        answer:
          'Việt Nam là một trong những quốc gia dễ bị tổn thương nhất bởi biến đổi khí hậu. Nông nghiệp bền vững giúp giảm phát thải khí nhà kính, bảo vệ tài nguyên nước và đất, đồng thời giúp nông dân thích ứng tốt hơn với các điều kiện thời tiết khắc nghiệt, đảm bảo an ninh lương thực lâu dài.',
      },
      {
        question: 'Nông nghiệp hữu cơ (organic) có phải là nông nghiệp bền vững không?',
        answer:
          'Nông nghiệp hữu cơ là một phần quan trọng của nông nghiệp bền vững, nhưng không phải là tất cả. Nông nghiệp hữu cơ tập trung vào việc không sử dụng hóa chất tổng hợp. Nông nghiệp bền vững có phạm vi rộng hơn, bao gồm cả các yếu tố về công bằng xã hội (điều kiện làm việc cho nông dân), hiệu quả kinh tế và bảo tồn đa dạng sinh học.',
      },
      {
        question: 'Làm thế nào để biết một sản phẩm là "bền vững"?',
        answer:
          'Bạn có thể tìm kiếm các nhãn chứng nhận uy tín như Hữu cơ (USDA Organic, EU Organic), Fair Trade (Thương mại Công bằng), Rainforest Alliance. Ngoài ra, việc ưu tiên các sản phẩm địa phương, theo mùa cũng là một cách để hỗ trợ nông nghiệp bền vững.',
      },
      {
        question: 'An ninh lương thực là gì?',
        answer:
          'An ninh lương thực có nghĩa là tất cả mọi người, vào mọi lúc, đều có thể tiếp cận được về mặt vật lý và kinh tế đối với thực phẩm đủ, an toàn và bổ dưỡng để đáp ứng nhu cầu ăn uống và sở thích thực phẩm của họ cho một cuộc sống năng động và khỏe mạnh.',
      },
      {
        question: 'Biến đổi khí hậu ảnh hưởng đến nông nghiệp như thế nào?',
        answer:
          'Biến đổi khí hậu gây ra các hiện tượng thời tiết cực đoan như hạn hán, lũ lụt, bão, và xâm nhập mặn. Nó làm thay đổi mùa vụ, tăng nguy cơ sâu bệnh, và giảm năng suất cây trồng, đe dọa trực tiếp đến nguồn cung cấp lương thực toàn cầu.',
      },
      {
        question: 'Nông nghiệp có đóng góp vào biến đổi khí hậu không?',
        answer:
          'Có. Nông nghiệp, đặc biệt là nông nghiệp công nghiệp, đóng góp một phần đáng kể vào lượng khí thải nhà kính toàn cầu, chủ yếu từ việc sử dụng phân bón hóa học (phát thải N2O), chăn nuôi gia súc (phát thải metan), và thay đổi mục đích sử dụng đất (phá rừng).',
      },
      {
        question: 'Canh tác không cày xới (No-till farming) là gì?',
        answer:
          'Là một phương pháp canh tác bền vững, trong đó người nông dân trồng cây vụ mới trực tiếp trên phần còn lại của vụ cũ mà không cày xới đất. Phương pháp này giúp cải thiện sức khỏe của đất, tăng khả năng giữ nước, giảm xói mòn và cô lập carbon trong đất.',
      },
      {
        question: 'Đa dạng sinh học có vai trò gì trong nông nghiệp bền vững?',
        answer:
          'Đa dạng sinh học là nền tảng của một hệ sinh thái nông nghiệp khỏe mạnh. Nó cung cấp các "dịch vụ" miễn phí như thụ phấn (nhờ ong, bướm), kiểm soát sâu bệnh tự nhiên (nhờ các loài thiên địch), và cải tạo đất. Việc trồng xen canh nhiều loại cây khác nhau giúp tăng cường đa dạng sinh học.',
      },
      {
        question: 'Nông nghiệp tái tạo (Regenerative Agriculture) là gì?',
        answer:
          'Là một triết lý canh tác còn tiến bộ hơn cả bền vững. Mục tiêu của nó không chỉ là "duy trì" mà còn là "cải tạo và phục hồi" sức khỏe của hệ sinh thái, đặc biệt là đất đai. Các phương pháp bao gồm canh tác không cày xới, trồng cây che phủ, và chăn thả luân phiên.',
      },
    ],
  },
  {
    id: 'iot-sensors-in-farming',
    title: 'Ứng dụng IoT và Cảm biến trong Canh tác',
    description:
      'Tìm hiểu cách các cảm biến thông minh và mạng lưới vạn vật kết nối (IoT) giúp nông dân thu thập dữ liệu thời gian thực để đưa ra quyết định chính xác.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bA4h_T-s6pU',
    imageUrl: 'https://i.ytimg.com/vi/bA4h_T-s6pU/hqdefault.jpg',
    objectives: [
      'Hiểu kiến trúc của một hệ thống IoT trong nông nghiệp.',
      'Phân biệt các loại cảm biến phổ biến (độ ẩm đất, pH, nhiệt độ, v.v.).',
      'Học cách dữ liệu từ cảm biến được truyền và phân tích.',
      'Khám phá các nền tảng quản lý trang trại thông minh.',
    ],
    prerequisites: ['Hoàn thành bài giới thiệu'],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát cho Vườn rau',
        description: 'Lên kế hoạch triển khai một hệ thống IoT giả định cho một khu vườn nhỏ.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các thông số quan trọng cần giám sát (ví dụ: độ ẩm, ánh sáng).',
          'Chọn các loại cảm biến phù hợp.',
          'Vẽ sơ đồ kết nối các cảm biến với một bộ điều khiển trung tâm (ví dụ: Arduino, Raspberry Pi).',
          'Mô tả cách dữ liệu sẽ được hiển thị cho người dùng.',
        ],
        expectedResults: 'Một bản thiết kế chi tiết cho hệ thống giám sát IoT.',
      },
    ],
    realWorldApplications: [
      'Hệ thống tưới tiêu thông minh tự động bật/tắt dựa trên độ ẩm đất.',
      'Cảnh báo sớm sâu bệnh dựa trên dữ liệu vi khí hậu.',
      'Tối ưu hóa việc sử dụng phân bón.',
    ],
    vietnamContext: {
      title: 'IoT trong Canh tác Thanh long và Lúa gạo',
      content: [
        'Tại Bình Thuận, các trang trại thanh long đang áp dụng hệ thống đèn LED thông minh được điều khiển qua IoT để kích thích cây ra hoa trái vụ, tăng hiệu quả kinh tế.',
        'Ở Đồng bằng sông Cửu Long, các mô hình "ruộng lúa thông minh" sử dụng cảm biến để theo dõi độ mặn và mực nước, giúp nông dân ứng phó tốt hơn với tình trạng xâm nhập mặn.',
        'Các startup AgriTech Việt Nam như MimosaTEK đang cung cấp các giải pháp tưới tiêu chính xác dựa trên IoT cho hàng ngàn nông dân.',
      ],
    },
    careerConnect: {
      name: 'Phạm Anh Khoa',
      title: 'Kỹ sư hệ thống nhúng',
      company: 'Rynan Technologies Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-anh-khoa',
      quote:
        'IoT cho phép chúng ta "lắng nghe" cây trồng nói. Bằng cách cung cấp đúng thứ chúng cần, vào đúng thời điểm, chúng ta có thể canh tác hiệu quả hơn với ít tài nguyên hơn.',
    },
    quizzes: [
      {
        question: 'IoT là viết tắt của cụm từ nào?',
        options: [
          'Internal Online Tools',
          'Internet of Things',
          'Integrated Office Technology',
          'International Open Telecom',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) hay "Mạng lưới vạn vật kết nối" là một mạng lưới các thiết bị vật lý được tích hợp cảm biến, phần mềm và các công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
    ],
    faqs: [
      {
        question: 'Một hệ thống tưới tiêu thông minh hoạt động như thế nào?',
        answer:
          'Một cảm biến độ ẩm được đặt trong đất sẽ liên tục đo lượng nước. Dữ liệu này được gửi đến một bộ điều khiển trung tâm. Khi độ ẩm giảm xuống dưới ngưỡng cài đặt, bộ điều khiển sẽ tự động kích hoạt máy bơm hoặc van nước để tưới cây. Khi đất đủ ẩm, hệ thống sẽ tự tắt. Điều này giúp tiết kiệm nước và đảm bảo cây luôn nhận đủ lượng nước cần thiết.',
      },
      {
        question: 'Chi phí để lắp đặt một hệ thống IoT cho trang trại có đắt không?',
        answer:
          'Chi phí ban đầu có thể là một rào cản, nhưng đang giảm dần. Đối với quy mô nhỏ, bạn có thể bắt đầu với các bộ kit Arduino/Raspberry Pi giá rẻ. Đối với quy mô lớn, lợi ích từ việc tiết kiệm nước, phân bón và tăng năng suất thường sẽ bù đắp chi phí đầu tư trong dài hạn. Nhiều công ty AgriTech Việt Nam cũng cung cấp các gói dịch vụ cho thuê thay vì mua đứt.',
      },
      {
        question: 'Ngoài độ ẩm, cảm biến IoT có thể đo được những gì khác?',
        answer:
          'Cảm biến IoT trong nông nghiệp rất đa dạng, có thể đo độ pH của đất, độ dẫn điện (EC - cho biết hàm lượng dinh dưỡng), nhiệt độ và độ ẩm không khí, cường độ ánh sáng, và thậm chí cả nồng độ các khí cụ thể trong nhà kính.',
      },
      {
        question: 'Dữ liệu từ cảm biến được truyền đi bằng cách nào?',
        answer:
          'Dữ liệu có thể được truyền qua nhiều công nghệ không dây khác nhau. Wi-Fi phù hợp cho khoảng cách ngắn. LoRaWAN và NB-IoT là các công nghệ truyền thông công suất thấp, tầm xa, rất lý tưởng cho các trang trại rộng lớn nơi không có sẵn Wi-Fi hoặc 4G.',
      },
      {
        question: 'Nền tảng quản lý trang trại thông minh là gì?',
        answer:
          'Là một phần mềm (thường là ứng dụng web hoặc di động) tổng hợp tất cả dữ liệu từ các cảm biến IoT, drone, và các nguồn khác. Nó trực quan hóa dữ liệu qua biểu đồ, bản đồ và cung cấp các phân tích, cảnh báo giúp người nông dân đưa ra quyết định quản lý tốt hơn.',
      },
      {
        question: 'Làm thế nào để đảm bảo an ninh cho hệ thống IoT nông nghiệp?',
        answer:
          'Bảo mật là một thách thức lớn. Các biện pháp bao gồm mã hóa dữ liệu truyền đi, sử dụng mật khẩu mạnh cho các thiết bị, thường xuyên cập nhật phần mềm, và phân quyền truy cập để ngăn chặn các cuộc tấn công mạng có thể phá hoại mùa màng.',
      },
      {
        question: 'Arduino và Raspberry Pi khác nhau như thế nào trong ứng dụng IoT?',
        answer:
          'Arduino là một vi điều khiển, rất giỏi trong việc đọc dữ liệu từ cảm biến và điều khiển các thiết bị đơn giản như máy bơm. Raspberry Pi là một máy tính mini hoàn chỉnh, có hệ điều hành, mạnh hơn và phù hợp hơn cho các tác vụ phức tạp như xử lý dữ liệu, kết nối internet và chạy các ứng dụng phức tạp.',
      },
      {
        question: 'Hệ thống IoT có thể giúp phát hiện sâu bệnh không?',
        answer:
          'Có, một cách gián tiếp. Các cảm biến có thể phát hiện những thay đổi nhỏ về vi khí hậu (nhiệt độ, độ ẩm) trong tán lá, là điều kiện thuận lợi cho một số loại nấm hoặc sâu bệnh phát triển. Dữ liệu này có thể đưa ra cảnh báo sớm để nông dân kiểm tra và can thiệp kịp thời.',
      },
      {
        question: 'Trang trại thẳng đứng (Vertical Farming) có sử dụng IoT không?',
        answer:
          'Chắc chắn có. Trang trại thẳng đứng hoàn toàn phụ thuộc vào IoT. Các cảm biến và bộ điều khiển quản lý mọi thứ một cách tự động, từ hệ thống đèn LED, tưới tiêu dinh dưỡng, đến kiểm soát nhiệt độ và CO2, tạo ra một môi trường được kiểm soát hoàn hảo cho cây trồng.',
      },
      {
        question: 'Lợi ích lớn nhất của việc áp dụng IoT trong nông nghiệp là gì?',
        answer:
          'Lợi ích lớn nhất là chuyển từ việc ra quyết định dựa trên kinh nghiệm và phỏng đoán sang ra quyết định dựa trên dữ liệu (data-driven decision making). Điều này giúp tối ưu hóa việc sử dụng tài nguyên, giảm rủi ro, tăng năng suất và lợi nhuận một cách bền vững.',
      },
    ],
  },
  {
    id: 'drones-and-precision-agriculture',
    title: 'Drone và Nông nghiệp Chính xác',
    description:
      'Bay vào tương lai của nông nghiệp với công nghệ drone. Học cách sử dụng máy bay không người lái để giám sát sức khỏe cây trồng, phun thuốc và lập bản đồ trang trại.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u_wEa_3a-sE',
    imageUrl: 'https://i.ytimg.com/vi/u_wEa_3a-sE/hqdefault.jpg',
    objectives: [
      'Hiểu các loại drone và cảm biến được sử dụng trong nông nghiệp.',
      'Học về chỉ số sức khỏe thực vật (NDVI) và cách thu thập nó bằng drone.',
      'Khám phá ứng dụng của drone trong việc phun thuốc bảo vệ thực vật có chọn lọc.',
      'Phân tích dữ liệu từ drone để tạo bản đồ năng suất.',
    ],
    prerequisites: ['Hoàn thành các bài học trước'],
    exercises: [
      {
        title: 'Phân tích Hình ảnh NDVI',
        description:
          'Làm việc với một bộ dữ liệu hình ảnh NDVI mẫu để xác định các khu vực có vấn đề trong một cánh đồng.',
        difficulty: 'Trung bình',
        materials: ['Máy tính', 'Phần mềm GIS miễn phí (ví dụ: QGIS)'],
        procedure: [
          'Tải và mở bộ dữ liệu hình ảnh NDVI.',
          'Tìm hiểu cách đọc và diễn giải các giá trị màu sắc khác nhau.',
          'Khoanh vùng các khu vực có cây trồng phát triển kém.',
          'Đưa ra giả thuyết về nguyên nhân (ví dụ: thiếu nước, sâu bệnh).',
        ],
        expectedResults: 'Một bản báo cáo phân tích hình ảnh, xác định các khu vực cần chú ý và đề xuất hành động.',
      },
    ],
    realWorldApplications: [
      'Phun thuốc trừ sâu chính xác tại các khu vực bị nhiễm bệnh, giảm lượng thuốc sử dụng.',
      'Đánh giá sức khỏe cây trồng trên diện rộng một cách nhanh chóng.',
      'Tạo bản đồ năng suất để lập kế hoạch cho vụ mùa tiếp theo.',
    ],
    vietnamContext: {
      title: 'Drone phun thuốc và Gieo sạ Lúa tại Việt Nam',
      content: [
        'Dịch vụ phun thuốc bảo vệ thực vật bằng drone đang phát triển nhanh chóng tại các vùng trồng lúa lớn, giúp nông dân tiết kiệm thời gian, công sức và giảm tiếp xúc với hóa chất độc hại.',
        'Các drone nông nghiệp hiện đại còn có khả năng gieo sạ (gieo hạt) và bón phân, thực hiện nhiều công đoạn trong canh tác.',
        'Việc sử dụng drone đòi hỏi các quy định pháp lý rõ ràng về không phận và an toàn bay, đây là một lĩnh vực đang được nhà nước quan tâm hoàn thiện.',
      ],
    },
    careerConnect: {
      name: 'Trần Văn Mạnh',
      title: 'Phi công Drone & Nhà sáng lập',
      company: 'AgriFly Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-manh',
      quote:
        'Chiếc drone không chỉ là một công cụ, nó là con mắt của người nông dân trên không. Chúng tôi giúp họ nhìn thấy những gì mắt thường không thể, từ đó đưa ra những quyết định tốt hơn cho cánh đồng của mình.',
    },
    quizzes: [
      {
        question: 'Chỉ số NDVI (Normalized Difference Vegetation Index) thường được dùng để đo lường điều gì?',
        options: ['Độ ẩm của đất', 'Nhiệt độ của lá cây', 'Sức khỏe và mật độ của thảm thực vật', 'Tốc độ gió'],
        correctAnswerIndex: 2,
        explanation:
          'NDVI là một chỉ số quan trọng được tính toán từ hình ảnh vệ tinh hoặc drone, dựa trên cách thực vật phản xạ ánh sáng cận hồng ngoại và ánh sáng đỏ. Chỉ số NDVI cao thường cho thấy cây trồng khỏe mạnh và phát triển tốt.',
      },
    ],
    faqs: [
      {
        question: 'Sử dụng drone trong nông nghiệp có hợp pháp ở Việt Nam không?',
        answer:
          'Có, nhưng cần tuân thủ các quy định. Người điều khiển drone cần được đào tạo và có giấy phép bay. Các chuyến bay cần được đăng ký và cấp phép bởi cơ quan quản lý bay. Các công ty cung cấp dịch vụ drone chuyên nghiệp thường sẽ lo các thủ tục pháp lý này cho nông dân.',
      },
      {
        question: 'Drone có thể thay thế hoàn toàn con người trong việc phun thuốc không?',
        answer:
          'Ở nhiều khía cạnh, drone vượt trội hơn, đặc biệt là về tốc độ, khả năng tiếp cận địa hình khó và giảm thiểu sự tiếp xúc của con người với hóa chất. Tuy nhiên, con người vẫn đóng vai trò quan trọng trong việc phân tích dữ liệu, lập kế hoạch bay, bảo trì thiết bị và đưa ra quyết định cuối cùng. Drone là một công cụ mạnh mẽ, không phải là sự thay thế hoàn toàn.',
      },
      {
        question: 'Drone sử dụng loại cảm biến nào để thu thập dữ liệu cây trồng?',
        answer:
          'Drone nông nghiệp thường được trang bị các cảm biến đa phổ (multispectral) hoặc siêu phổ (hyperspectral). Các cảm biến này có thể "nhìn thấy" các bước sóng ánh sáng mà mắt người không thể, đặc biệt là vùng cận hồng ngoại (NIR), là chìa khóa để tính toán chỉ số NDVI và đánh giá sức khỏe thực vật.',
      },
      {
        question: 'Nông nghiệp chính xác (Precision Agriculture) là gì?',
        answer:
          'Là một phương pháp quản lý trang trại sử dụng công nghệ thông tin để quan sát, đo lường và ứng phó với sự thay đổi trong một cánh đồng. Thay vì xử lý toàn bộ cánh đồng như một thể thống nhất, nông nghiệp chính xác cho phép nông dân quản lý từng khu vực nhỏ theo nhu cầu cụ thể của nó, ví dụ như chỉ bón phân ở những nơi cần thiết.',
      },
      {
        question: 'Drone giúp tiết kiệm chi phí như thế nào?',
        answer:
          'Drone giúp tiết kiệm chi phí bằng cách giảm lượng thuốc trừ sâu và phân bón sử dụng (chỉ phun ở những nơi cần), giảm chi phí nhân công, và phát hiện sớm các vấn đề về sâu bệnh hoặc dinh dưỡng trước khi chúng lan rộng, từ đó giảm thiểu thiệt hại năng suất.',
      },
      {
        question: 'Dữ liệu từ drone được xử lý như thế nào?',
        answer:
          'Các hình ảnh thu thập từ drone được ghép lại với nhau (stitching) để tạo thành một bản đồ lớn của toàn bộ trang trại. Sau đó, các phần mềm chuyên dụng sẽ phân tích các hình ảnh này để tạo ra các bản đồ chỉ số (như NDVI), bản đồ độ cao, hoặc đếm số lượng cây trồng.',
      },
      {
        question: 'Ngoài phun thuốc, drone còn có thể làm gì khác?',
        answer:
          'Drone ngày càng đa năng. Chúng có thể được sử dụng để gieo hạt, bón phân, thụ phấn nhân tạo cho cây trồng, và thậm chí là để lùa gia súc. Các drone có camera độ phân giải cao cũng được dùng để giám sát an ninh trang trại.',
      },
      {
        question: 'Một phi công drone nông nghiệp cần những kỹ năng gì?',
        answer:
          'Ngoài kỹ năng điều khiển bay thành thạo, một phi công drone nông nghiệp cần có kiến thức về nông học để hiểu dữ liệu cây trồng, kỹ năng phân tích dữ liệu để diễn giải bản đồ NDVI, và kiến thức kỹ thuật để bảo trì, sửa chữa drone.',
      },
      {
        question: 'Hạn chế của việc sử dụng drone trong nông nghiệp là gì?',
        answer:
          'Các hạn chế chính bao gồm chi phí đầu tư ban đầu, thời lượng pin bay có hạn, sự phụ thuộc vào điều kiện thời tiết (không thể bay khi có gió mạnh hoặc mưa), và các quy định pháp lý về không phận có thể phức tạp ở một số quốc gia.',
      },
      {
        question: 'Tương lai của drone trong nông nghiệp sẽ như thế nào?',
        answer:
          'Trong tương lai, chúng ta sẽ thấy các đàn drone (drone swarms) hoạt động tự động cùng nhau, được hỗ trợ bởi AI để tự đưa ra quyết định. Chúng sẽ có khả năng thực hiện các nhiệm vụ phức tạp hơn như nhận dạng và tiêu diệt từng con sâu bệnh hoặc cỏ dại một cách có chọn lọc.',
      },
    ],
  },
  {
    id: 'circular-economy-in-agriculture',
    title: 'Kinh tế Tuần hoàn trong Nông nghiệp',
    description:
      'Học cách thiết kế các hệ thống nông nghiệp không có chất thải, nơi phụ phẩm của quá trình này trở thành đầu vào cho quá trình khác.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=j2c22n23r3M',
    imageUrl: 'https://i.ytimg.com/vi/j2c22n23r3M/hqdefault.jpg',
    objectives: [
      'Hiểu nguyên tắc của kinh tế tuần hoàn so với kinh tế tuyến tính.',
      'Khám phá các mô hình như VAC (Vườn - Ao - Chuồng).',
      'Học về compost, biogas và các kỹ thuật tái chế chất thải nông nghiệp.',
      'Thiết kế một chu trình khép kín cho một trang trại giả định.',
    ],
    prerequisites: ['Tư duy hệ thống'],
    exercises: [
      {
        title: 'Thiết kế Mô hình VAC Mini',
        description:
          'Vẽ sơ đồ và mô tả dòng chảy năng lượng và vật chất trong một hệ thống Vườn - Ao - Chuồng tích hợp.',
        difficulty: 'Nâng cao',
        procedure: [
          'Xác định các thành phần chính: cây trồng, vật nuôi, ao cá.',
          'Vẽ các mũi tên để chỉ ra dòng chảy: thức ăn, chất thải, nước, năng lượng.',
          'Mô tả cách chất thải từ thành phần này trở thành tài nguyên cho thành phần khác.',
          'Phân tích lợi ích kinh tế và môi trường của mô hình.',
        ],
        expectedResults: 'Một sơ đồ chi tiết và thuyết minh về một hệ thống nông nghiệp tuần hoàn.',
      },
    ],
    realWorldApplications: [
      'Các trang trại hữu cơ tích hợp.',
      'Sản xuất năng lượng tái tạo từ chất thải nông nghiệp.',
      'Giảm ô nhiễm môi trường và tăng lợi nhuận.',
    ],
    vietnamContext: {
      title: 'Kinh tế Tuần hoàn trong Nông nghiệp Việt Nam',
      content: [
        'Việt Nam đang đối mặt với thách thức lớn về quản lý chất thải nông nghiệp, với hàng triệu tấn phụ phẩm nông nghiệp bị lãng phí mỗi năm.',
        'Mô hình kinh tế tuần hoàn trong nông nghiệp không chỉ giúp giảm thiểu chất thải mà còn tạo ra giá trị gia tăng từ các sản phẩm phụ.',
        'Chính phủ và các tổ chức đang nỗ lực thúc đẩy các mô hình nông nghiệp tuần hoàn thông qua các chính sách và hỗ trợ kỹ thuật.',
      ],
    },
    careerConnect: {
      name: 'Lê Văn Bình',
      title: 'Chuyên gia Kinh tế Môi trường',
      company: 'Viện Nghiên cứu Phát triển Bền vững',
      imageUrl: 'https://i.pravatar.cc/150?u=le-van-binh',
      quote:
        'Kinh tế tuần hoàn trong nông nghiệp là chìa khóa để phát triển bền vững. Nó không chỉ bảo vệ môi trường mà còn mang lại lợi ích kinh tế lâu dài cho nông dân.',
    },
    quizzes: [
      {
        question: 'Mô hình VAC trong nông nghiệp bao gồm những thành phần nào?',
        options: ['Vườn, Ao, Chuồng', 'Vườn, Ruộng, Rừng', 'Ao, Hồ, Suối', 'Chuồng, Trại, Khu nuôi thủy sản'],
        correctAnswerIndex: 0,
        explanation:
          'Mô hình VAC là một hệ thống nông nghiệp bền vững truyền thống của Việt Nam, bao gồm Vườn (trồng cây), Ao (nuôi cá), và Chuồng (nuôi gia súc, gia cầm). Hệ thống này giúp tuần hoàn chất dinh dưỡng và năng lượng trong nông nghiệp.',
      },
    ],
    faqs: [
      {
        question: 'Kinh tế tuần hoàn khác gì với tái chế?',
        answer:
          'Tái chế chỉ là một phần của kinh tế tuần hoàn. Kinh tế tuần hoàn là một khái niệm rộng hơn, bao gồm việc thiết kế các sản phẩm và hệ thống ngay từ đầu để giảm thiểu chất thải, tái sử dụng, sửa chữa, và cuối cùng là tái chế. Nó hướng tới việc loại bỏ hoàn toàn khái niệm "rác thải".',
      },
      {
        question: 'Làm thế nào để áp dụng kinh tế tuần hoàn tại nhà?',
        answer:
          'Bạn có thể bắt đầu bằng những việc đơn giản như ủ phân compost từ rác nhà bếp để bón cho cây trồng, tận dụng nước vo gạo để tưới cây, hoặc xây dựng một hệ thống aquaponics nhỏ (kết hợp nuôi cá và trồng rau) trên ban công. Quan trọng nhất là thay đổi tư duy, xem "chất thải" là "tài nguyên".',
      },
      {
        question: 'Biogas là gì và nó được tạo ra như thế nào?',
        answer:
          'Biogas là một loại khí sinh học được tạo ra từ quá trình phân hủy kỵ khí (không có oxy) của các chất hữu cơ như phân gia súc, rác thải thực phẩm. Thành phần chính của nó là metan (CH4). Biogas có thể được sử dụng làm nhiên liệu để đun nấu, sưởi ấm hoặc chạy máy phát điện.',
      },
      {
        question: 'Phụ phẩm nông nghiệp có thể được sử dụng để làm gì?',
        answer:
          'Phụ phẩm nông nghiệp như rơm rạ, trấu, bã mía có rất nhiều ứng dụng. Chúng có thể được dùng làm thức ăn gia súc, làm nấm, sản xuất phân bón hữu cơ, làm vật liệu xây dựng, hoặc đốt để tạo ra năng lượng sinh khối (biomass energy).',
      },
      {
        question: 'Mô hình VAC (Vườn - Ao - Chuồng) hoạt động như thế nào?',
        answer:
          'Đây là một mô hình kinh tế tuần hoàn kinh điển. Chất thải từ chuồng trại được ủ làm phân bón cho vườn cây. Lá cây hoặc rau thừa từ vườn được dùng làm thức ăn cho cá dưới ao hoặc cho vật nuôi. Bùn từ đáy ao được nạo vét để bón cho cây. Đây là một chu trình khép kín, tận dụng tối đa tài nguyên.',
      },
      {
        question: 'Aquaponics là gì?',
        answer:
          'Aquaponics là một hệ thống kết hợp nuôi trồng thủy sản (nuôi cá) và thủy canh (trồng cây không cần đất). Nước thải từ bể cá, giàu dinh dưỡng, được bơm đến các khay trồng cây. Rễ cây sẽ hấp thụ các chất dinh dưỡng này, làm sạch nước. Nước sạch sau đó được tuần hoàn trở lại bể cá.',
      },
      {
        question: 'Tại sao kinh tế tuần hoàn lại giúp tăng lợi nhuận cho nông dân?',
        answer:
          'Kinh tế tuần hoàn giúp nông dân giảm chi phí đầu vào (không cần mua nhiều phân bón hóa học), đồng thời tạo ra các nguồn thu nhập mới từ việc bán các sản phẩm phụ (phân compost, biogas, nấm từ rơm). Điều này làm tăng hiệu quả kinh tế tổng thể của trang trại.',
      },
      {
        question: 'Compost (phân hữu cơ) khác gì với phân bón hóa học?',
        answer:
          'Phân compost là sản phẩm của quá trình phân hủy hữu cơ, nó không chỉ cung cấp dinh dưỡng cho cây mà còn cải tạo cấu trúc đất, tăng khả năng giữ nước và nuôi dưỡng hệ vi sinh vật có lợi trong đất. Phân bón hóa học chỉ cung cấp dinh dưỡng một cách nhanh chóng nhưng có thể làm chai cứng đất và gây ô nhiễm nguồn nước về lâu dài.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai kinh tế tuần hoàn trong nông nghiệp là gì?',
        answer:
          'Thách thức lớn nhất là về nhận thức và kiến thức của người nông dân. Ngoài ra, việc đầu tư ban đầu cho các công nghệ như hầm biogas hay hệ thống compost quy mô lớn cũng có thể là một rào cản. Việc thiếu các thị trường đầu ra ổn định cho các sản phẩm tái chế cũng là một khó khăn.',
      },
      {
        question: 'Chính phủ có vai trò gì trong việc thúc đẩy kinh tế tuần hoàn?',
        answer:
          'Chính phủ đóng vai trò quan trọng trong việc ban hành các chính sách khuyến khích (hỗ trợ vốn, giảm thuế), xây dựng các tiêu chuẩn và quy chuẩn kỹ thuật, hỗ trợ chuyển giao công nghệ, và tạo ra các thị trường cho sản phẩm tái chế, giúp kết nối các bên liên quan trong chuỗi giá trị tuần hoàn.',
      },
    ],
  },
];

export const sustainableAgricultureModuleData: ModuleData = {
  id: 'sustainable-agriculture',
  title: 'Nông nghiệp Bền vững và AgriTech',
  subtitle: 'Gieo mầm Tương lai Xanh',
  description:
    'Đối mặt với thách thức về biến đổi khí hậu và an ninh lương thực, nông nghiệp bền vững kết hợp với công nghệ cao (AgriTech) là chìa khóa cho tương lai. Khóa học này giới thiệu các phương pháp canh tác thân thiện với môi trường và ứng dụng công nghệ để tối ưu hóa năng suất, giảm thiểu tác động và tạo ra một chuỗi cung ứng thực phẩm minh bạch, hiệu quả.',
  level: 'Trung bình',
  duration: '15-20 giờ',
  category: 'Green Technology',
  features: [
    'Tìm hiểu về các mô hình canh tác hữu cơ, permaculture.',
    'Ứng dụng IoT và cảm biến trong quản lý trang trại.',
    'Sử dụng drone để giám sát và phân tích cây trồng.',
    'Xây dựng mô hình kinh tế tuần hoàn trong nông nghiệp.',
  ],
  icon: '🌿',
  color: 'from-lime-500 to-green-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu các nguyên tắc cốt lõõi của nông nghiệp bền vững.',
    'Phân tích và lựa chọn các công nghệ AgriTech phù hợp.',
    'Thiết kế một hệ thống canh tác tuần hoàn đơn giản.',
    'Đánh giá được lợi ích kinh tế và môi trường của AgriTech.',
    'Xây dựng nền tảng để khởi nghiệp trong lĩnh vực nông nghiệp công nghệ cao.',
  ],
  prerequisites: [
    'Quan tâm đến nông nghiệp, công nghệ và môi trường.',
    'Tư duy hệ thống và kỹ năng giải quyết vấn đề.',
  ],
  careerOutcomes: [
    'Chuyên gia AgriTech',
    'Quản lý trang trại thông minh',
    'Nhà phát triển giải pháp IoT cho nông nghiệp',
    'Doanh nhân khởi nghiệp trong lĩnh vực nông nghiệp bền vững',
  ],
  industryApplications: [
    'Canh tác chính xác (Precision Farming)',
    'Chuỗi cung ứng thực phẩm minh bạch (Food Traceability)',
    'Nông nghiệp đô thị (Urban Farming)',
    'Quản lý tài nguyên nước thông minh.',
  ],
  marketDemand: {
    averageSalary: '20-40 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.GreenTechnology, K2Module.EnvironmentalDataScience, K2Module.CircularEconomy],
  lessons: sustainableAgricultureLessons,
};
