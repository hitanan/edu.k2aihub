import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const arduinoCircuitsModuleData: ModuleData = {
  id: K2Module.ArduinoCircuits,
  title: 'Xây dựng Mạch điện tử với Arduino',
  subtitle: 'Từ Đèn LED Nhấp nháy đến Robot Tự hành',
  description:
    'Khóa học này cung cấp một hành trình toàn diện vào thế giới điện tử và lập trình vi điều khiển với Arduino. Bạn sẽ học từ những khái niệm cơ bản nhất như dòng điện, điện trở, đến việc xây dựng các dự án phức tạp, kết hợp cảm biến, động cơ và màn hình hiển thị. Đây là nền tảng vững chắc cho bất kỳ ai đam mê STEM, robot và Internet of Things (IoT).',
  category: 'stem',
  icon: '🤖',
  color: 'from-green-500 to-teal-500',
  totalDuration: '25-30 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '25-30 giờ',
  href: '/learning/arduino-circuits',
  features: [
    'Hướng dẫn trực quan từng bước.',
    'Mô phỏng 3D tương tác.',
    'Dự án thực tế, ứng dụng cao.',
    'Kiến thức nền tảng về điện tử và lập trình C++.',
  ],
  tags: ['arduino', 'stem', 'electronics', 'iot', 'robotics'],
  prerequisites: [
    'Đam mê công nghệ và sáng tạo.',
    'Kỹ năng sử dụng máy tính cơ bản.',
    'Không yêu cầu kiến thức về lập trình hay điện tử trước đó.',
  ],
  objectives: [
    'Hiểu cấu trúc và chức năng của bo mạch Arduino.',
    'Nắm vững các khái niệm điện tử cơ bản và định luật Ohm.',
    'Lập trình Arduino bằng ngôn ngữ C++ và Arduino IDE.',
    'Đọc và xử lý tín hiệu từ các cảm biến kỹ thuật số và analog.',
    'Điều khiển các thiết bị đầu ra như đèn LED, động cơ, và màn hình.',
    'Xây dựng các dự án IoT và robot hoàn chỉnh từ đầu.',
  ],
  careerOutcomes: [
    'Kỹ sư hệ thống nhúng (Embedded Systems Engineer)',
    'Chuyên gia IoT (IoT Specialist)',
    'Kỹ sư R&D phần cứng (Hardware R&D Engineer)',
    'Giáo viên/Giảng viên STEM',
    'Người làm sở thích (Hobbyist) và nhà sáng chế (Maker)',
  ],
  industryApplications: [
    {
      name: 'Nhà thông minh (Smart Home)',
      description: 'Tạo các thiết bị tự động hóa như đèn thông minh, hệ thống tưới cây tự động.',
    },
    {
      name: 'Nông nghiệp công nghệ cao (AgriTech)',
      description: 'Xây dựng các trạm quan trắc môi trường, hệ thống cho ăn tự động.',
    },
    {
      name: 'Robot và Tự động hóa',
      description: 'Làm bộ não cho robot, máy bay không người lái (drone), và các dây chuyền tự động nhỏ.',
    },
    {
      name: 'Nghệ thuật tương tác (Interactive Art)',
      description: 'Tạo ra các tác phẩm nghệ thuật có khả năng tương tác với người xem.',
    },
  ],
  marketDemand: {
    averageSalary: '700-1500 USD/tháng (cho vị trí mới ra trường)',
    jobGrowth: '25%/năm',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.Robotics, K2Module.Python, K2Module.Stem],
};

export const arduinoCircuitsLessons: BaseLessonData[] = [
  {
    id: 'nhap-mon-arduino',
    title: 'Nhập môn Arduino và Điện tử Căn bản',
    description:
      'Làm quen với thế giới Arduino, tìm hiểu các linh kiện điện tử cơ bản và cách dòng điện hoạt động. Đây là bước đệm vững chắc cho hành trình sáng tạo của bạn.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=5E6b2D8zjno',
    imageUrl: 'https://i.ytimg.com/vi/5E6b2D8zjno/hqdefault.jpg',
    objectives: [
      'Hiểu cấu trúc và chức năng của bo mạch Arduino Uno.',
      'Phân biệt được các linh kiện điện tử cơ bản: điện trở, đèn LED, nút nhấn.',
      'Nắm vững khái niệm về dòng điện, điện áp, và định luật Ohm.',
      'Cài đặt và làm quen với giao diện Arduino IDE.',
    ],
    prerequisites: ['Không có yêu cầu kiến thức trước.'],
    exercises: [
      {
        title: 'Mạch LED Nhấp nháy Đầu tiên (Blink)',
        description:
          'Xây dựng và lập trình mạch điện tử kinh điển nhất để hiểu rõ chu trình: Lắp ráp -> Lập trình -> Nạp code -> Quan sát.',
        difficulty: 'Cơ bản',
        materials: ['Arduino Uno', 'Breadboard (Bảng cắm)', 'Đèn LED', 'Điện trở 220 Ohm', 'Dây cắm (Jumper wires)'],
        procedure: [
          'Kết nối chân dài (anode) của đèn LED vào một chân digital của Arduino (ví dụ: chân 13) thông qua điện trở 220 Ohm.',
          'Kết nối chân ngắn (cathode) của đèn LED vào chân GND của Arduino.',
          'Mở Arduino IDE, vào File > Examples > 01.Basics > Blink để mở code mẫu.',
          'Chọn đúng loại board (Arduino Uno) và cổng COM trong menu Tools.',
          'Nhấn nút Upload để nạp code và xem đèn LED trên mạch nhấp nháy.',
        ],
        expectedResults: 'Đèn LED trên mạch nhấp nháy với chu kỳ 1 giây (sáng 1 giây, tắt 1 giây).',
        solution:
          'Code mẫu Blink sử dụng hàm `digitalWrite()` để bật (HIGH) và tắt (LOW) đèn LED, kết hợp với hàm `delay()` để tạo khoảng dừng.',
      },
    ],
    realWorldApplications: [
      'Đèn báo trạng thái trong các thiết bị điện tử (ví dụ: đèn báo nguồn, đèn báo kết nối mạng).',
      'Hệ thống cảnh báo an ninh đơn giản.',
      'Các sản phẩm trang trí sử dụng đèn LED như cây thông Noel, biển quảng cáo.',
    ],
    vietnamContext: {
      title: 'Arduino trong cộng đồng DIY Việt Nam',
      content: [
        'Cộng đồng "Do It Yourself" (Tự tay làm lấy) tại Việt Nam rất ưa chuộng Arduino để chế tạo các sản phẩm sáng tạo, từ robot, nhà thông minh đến các thiết bị tự động hóa nông nghiệp quy mô nhỏ.',
        'Các cửa hàng linh kiện điện tử tại các thành phố lớn như Hà Nội và TP.HCM (chợ Nhật Tảo) cung cấp đầy đủ các loại bo mạch Arduino và cảm biến với giá cả phải chăng.',
        'Nhiều cuộc thi Robocon và STEM cho học sinh, sinh viên Việt Nam sử dụng Arduino làm nền tảng chính để xây dựng robot.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Văn An',
      title: 'Kỹ sư hệ thống nhúng',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-an',
      quote:
        'Kiến thức về Arduino là cánh cửa đầu tiên bước vào thế giới lập trình nhúng. Từ việc làm một chiếc đèn LED nhấp nháy, bạn có thể tiến tới việc phát triển các hệ thống phức tạp cho xe tự lái hay thiết bị IoT. Hãy bắt đầu từ những điều cơ bản nhất.',
    },
    quizzes: [
      {
        question: 'Chức năng của điện trở trong mạch LED là gì?',
        options: [
          'Làm đèn sáng hơn',
          'Giới hạn dòng điện để bảo vệ LED',
          'Lưu trữ năng lượng',
          'Thay đổi màu sắc của LED',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Điện trở giúp hạn chế dòng điện đi qua đèn LED, ngăn nó khỏi bị cháy do dòng điện quá lớn. Đây là một linh kiện bảo vệ rất quan trọng.',
      },
      {
        question: 'Hàm nào trong Arduino IDE được dùng để tạo độ trễ trong chương trình?',
        options: ['digitalWrite()', 'pinMode()', 'delay()', 'analogRead()'],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `delay(milliseconds)` được sử dụng để tạm dừng chương trình trong một khoảng thời gian nhất định, tính bằng mili giây.',
      },
    ],
    faqs: [
      {
        question: 'Arduino là gì và nó khác gì so với máy tính?',
        answer:
          'Arduino là một bo mạch vi điều khiển, không phải là một máy tính hoàn chỉnh. Nó được thiết kế để đọc tín hiệu từ cảm biến và điều khiển các thiết bị vật lý (như đèn, động cơ). Nó chạy một chương trình duy nhất lặp đi lặp lại, khác với máy tính có thể chạy nhiều chương trình cùng lúc trên một hệ điều hành.',
      },
      {
        question: 'Tại sao tôi cần dùng điện trở với đèn LED?',
        answer:
          'Đèn LED không có khả năng tự điều chỉnh dòng điện. Nếu bạn kết nối trực tiếp một đèn LED với nguồn 5V của Arduino, dòng điện sẽ quá lớn và làm cháy đèn LED gần như ngay lập tức. Điện trở giúp giới hạn dòng điện ở mức an toàn cho đèn LED.',
      },
    ],
  },
  {
    id: 'dieu-khien-dau-vao-ky-thuat-so',
    title: 'Điều khiển Đầu vào Kỹ thuật số với Nút nhấn',
    description:
      "Học cách Arduino 'cảm nhận' thế giới bên ngoài thông qua các tín hiệu kỹ thuật số, sử dụng nút nhấn để điều khiển đèn LED.",
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=mCSbd5auH5o',
    imageUrl: 'https://i.ytimg.com/vi/mCSbd5auH5o/hqdefault.jpg',
    objectives: [
      'Hiểu khái niệm tín hiệu digital (HIGH/LOW).',
      'Biết cách đọc trạng thái của một chân đầu vào bằng hàm digitalRead().',
      'Sử dụng câu lệnh điều kiện if/else để điều khiển logic chương trình dựa trên tín hiệu đầu vào.',
      'Hiểu vai trò và cách sử dụng điện trở kéo lên (pull-up) và kéo xuống (pull-down).',
    ],
    prerequisites: ["Hoàn thành bài 'Nhập môn Arduino'"],
    exercises: [
      {
        title: 'Bật/Tắt LED bằng Nút nhấn',
        description: 'Xây dựng một mạch cho phép người dùng bật hoặc tắt đèn LED mỗi khi nhấn nút.',
        difficulty: 'Cơ bản',
        materials: [
          'Arduino Uno',
          'Breadboard',
          'Đèn LED',
          'Nút nhấn',
          'Điện trở 220 Ohm',
          'Điện trở 10k Ohm (cho pull-down)',
        ],
        procedure: [
          'Lắp mạch LED như bài trước.',
          'Kết nối một chân của nút nhấn với chân 5V, chân còn lại nối với một chân digital (ví dụ: chân 2) và một điện trở 10k Ohm. Đầu còn lại của điện trở nối với GND.',
          'Viết code sử dụng `pinMode()` để cài đặt chân 2 là INPUT.',
          'Trong vòng lặp `loop()`, dùng `digitalRead()` để đọc trạng thái nút nhấn và dùng câu lệnh `if` để điều khiển LED.',
        ],
        expectedResults: 'Đèn LED sáng khi nhấn nút và tắt khi thả ra.',
      },
    ],
    realWorldApplications: [
      'Nút bấm trên các thiết bị gia dụng (lò vi sóng, máy giặt).',
      'Công tắc đèn trong nhà.',
      'Các hệ thống kích hoạt bằng tay như nút báo cháy, chuông cửa.',
    ],
    vietnamContext: {
      title: 'Ứng dụng trong các sản phẩm "Made in Vietnam"',
      content: [
        'Các sản phẩm công nghệ đơn giản "Made in Vietnam" như máy rửa tay sát khuẩn tự động, thùng rác thông minh thường sử dụng các cảm biến đầu vào kỹ thuật số như nút nhấn hoặc cảm biến hồng ngoại.',
        'Trong nông nghiệp thông minh, nút nhấn được dùng để kích hoạt thủ công các hệ thống tưới tiêu hoặc cho ăn tự động khi cần can thiệp.',
        'Sinh viên Việt Nam thường tạo ra các dự án như hộp nhạc tự chế, khóa cửa điện tử sử dụng nguyên lý đọc tín hiệu digital từ bàn phím ma trận.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Bích',
      title: 'Kỹ sư R&D sản phẩm',
      company: 'Công ty Điện tử ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-bich',
      quote:
        'Việc đọc tín hiệu từ một cái nút nhấn là bài học vỡ lòng về giao tiếp giữa người và máy. Nắm vững nó, bạn sẽ hiểu cách các thiết bị thông minh lắng nghe mệnh lệnh của chúng ta như thế nào.',
    },
    quizzes: [
      {
        question: 'Trạng thái của một chân digital input khi không được kết nối với đâu cả được gọi là gì?',
        options: ['HIGH', 'LOW', 'Floating (Thả nổi)', 'GND'],
        correctAnswerIndex: 2,
        explanation:
          'Trạng thái "thả nổi" (floating) xảy ra khi chân input không được kéo lên HIGH (5V) hay kéo xuống LOW (GND), khiến giá trị đọc được không ổn định. Đây là lý do cần dùng điện trở pull-up/pull-down.',
      },
      {
        question: 'Hàm nào được dùng để cấu hình một chân digital là chân đầu vào?',
        options: ['digitalRead()', 'analogWrite()', 'setup()', 'pinMode(pin, INPUT)'],
        correctAnswerIndex: 3,
        explanation:
          'Hàm `pinMode(pinNumber, mode)` được sử dụng trong hàm `setup()` để thiết lập một chân cụ thể là đầu vào (INPUT), đầu ra (OUTPUT), hoặc đầu vào với điện trở kéo lên (INPUT_PULLUP).',
      },
    ],
    faqs: [
      {
        question: 'Điện trở kéo lên (pull-up) và kéo xuống (pull-down) để làm gì?',
        answer:
          'Chúng được dùng để đảm bảo chân đầu vào kỹ thuật số luôn ở một trạng thái xác định (HIGH hoặc LOW) khi không có tín hiệu tích cực (như khi nút nhấn không được bấm). Điều này giúp tránh trạng thái "thả nổi" (floating) gây ra việc đọc giá trị không ổn định và sai lệch.',
      },
      {
        question: 'Tôi có thể sử dụng `INPUT_PULLUP` thay vì dùng điện trở ngoài không?',
        answer:
          'Có. Arduino có sẵn các điện trở kéo lên bên trong. Bằng cách cấu hình chân với `pinMode(pin, INPUT_PULLUP)`, bạn đã kích hoạt điện trở này. Khi đó, bạn chỉ cần nối một đầu của nút nhấn với chân đó và đầu còn lại với GND, không cần thêm điện trở ngoài. Lưu ý rằng logic sẽ bị đảo ngược: chân sẽ đọc LOW khi nhấn nút.',
      },
    ],
  },
  {
    id: 'dieu-che-do-rong-xung-pwm',
    title: 'Điều chế Độ rộng xung (PWM) - Làm mờ Đèn LED',
    description:
      "Khám phá sức mạnh của PWM để tạo ra các tín hiệu analog 'giả', cho phép bạn điều khiển độ sáng của đèn LED hoặc tốc độ của động cơ.",
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=YfV-vYT3yfQ',
    imageUrl: 'https://i.ytimg.com/vi/YfV-vYT3yfQ/hqdefault.jpg',
    objectives: [
      'Hiểu nguyên lý hoạt động của Điều chế độ rộng xung (PWM).',
      'Sử dụng hàm analogWrite() để tạo tín hiệu PWM trên các chân được hỗ trợ.',
      'Điều khiển độ sáng của đèn LED một cách mượt mà.',
      "Áp dụng vòng lặp 'for' để tạo hiệu ứng ánh sáng thay đổi tự động.",
    ],
    prerequisites: ['Hoàn thành các bài học về Digital Input/Output'],
    exercises: [
      {
        title: "Hiệu ứng 'Hơi thở' cho LED (Breathing Effect)",
        description: 'Lập trình cho đèn LED sáng dần lên rồi lại từ từ tối đi, tạo hiệu ứng như đang thở.',
        difficulty: 'Trung bình',
        materials: ['Arduino Uno', 'Breadboard', 'Đèn LED', 'Điện trở 220 Ohm'],
        procedure: [
          'Kết nối LED vào một chân có hỗ trợ PWM của Arduino (ví dụ: chân 3, 5, 6, 9, 10, 11, có dấu ~ bên cạnh).',
          "Viết code sử dụng hai vòng lặp 'for': một để tăng giá trị PWM từ 0 đến 255, và một để giảm từ 255 về 0.",
          'Bên trong mỗi vòng lặp, sử dụng hàm `analogWrite(pin, value)` để đặt độ sáng.',
          'Thêm hàm `delay()` nhỏ sau mỗi lần thay đổi giá trị để hiệu ứng mượt mà hơn.',
        ],
        expectedResults: 'Đèn LED sáng và tối dần một cách mượt mà, lặp đi lặp lại.',
      },
    ],
    realWorldApplications: [
      'Điều khiển độ sáng của đèn thông minh (smart light).',
      'Điều khiển tốc độ của quạt hoặc động cơ DC trong các thiết bị.',
      'Điều khiển vị trí của động cơ servo.',
      'Tạo ra hàng triệu màu sắc khác nhau với đèn LED RGB.',
    ],
    vietnamContext: {
      title: 'PWM trong Nông nghiệp Công nghệ cao tại Việt Nam',
      content: [
        'Các trang trại thông minh ở Đà Lạt sử dụng PWM để điều khiển độ sáng của hệ thống đèn LED chuyên dụng, giả lập ánh sáng mặt trời giúp cây trồng phát triển tối ưu.',
        'Hệ thống quạt thông gió trong các nhà kính trồng rau sạch được điều khiển tốc độ bằng PWM để duy trì nhiệt độ và độ ẩm lý tưởng.',
        'PWM cũng được dùng để điều khiển các máy bơm nước nhỏ trong hệ thống tưới nhỏ giọt, giúp tiết kiệm nước và cung cấp lượng nước chính xác cho từng loại cây.',
      ],
    },
    careerConnect: {
      name: 'Bạn Trần Minh Khoa',
      title: 'Sinh viên ngành Tự động hóa',
      company: 'Đại học Bách Khoa Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-minh-khoa',
      quote:
        'PWM là một trong những kỹ thuật đầu tiên và quan trọng nhất mình học được. Nó mở ra khả năng điều khiển thế giới vật lý một cách tinh vi, không chỉ là bật/tắt. Từ điều khiển đèn, mình đã áp dụng nó để điều khiển robot và các hệ thống phức tạp hơn.',
    },
    quizzes: [
      {
        question: 'Giá trị đầu vào của hàm `analogWrite(pin, value)` nằm trong khoảng nào?',
        options: ['0 và 1', '0 đến 1023', '0 đến 255', '-255 đến 255'],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `analogWrite()` nhận một giá trị từ 0 (luôn tắt) đến 255 (luôn bật) để xác định chu kỳ hoạt động (duty cycle) của tín hiệu PWM, tương ứng với 8-bit.',
      },
      {
        question: 'Trên bo mạch Arduino Uno, làm thế nào để nhận biết một chân digital có hỗ trợ PWM?',
        options: [
          'Tất cả các chân digital đều hỗ trợ',
          'Chỉ các chân analog hỗ trợ',
          'Các chân có ký hiệu dấu ngã (~) bên cạnh',
          'Các chân có chữ "PWM"',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các chân digital có ký hiệu "~" (dấu ngã) bên cạnh số hiệu chân (ví dụ: ~3, ~5, ~6, ~9, ~10, ~11) là những chân có khả năng xuất tín hiệu PWM.',
      },
    ],
    faqs: [
      {
        question: 'PWM có phải là tín hiệu analog thực sự không?',
        answer:
          'Không. PWM là một kỹ thuật để "giả lập" một tín hiệu analog bằng cách sử dụng một tín hiệu kỹ thuật số. Nó bật và tắt tín hiệu digital rất nhanh. Mắt người hoặc động cơ sẽ cảm nhận sự thay đổi nhanh này như một mức điện áp trung bình, tạo ra hiệu ứng tương tự như tín hiệu analog (ví dụ: đèn mờ đi hoặc động cơ chạy chậm lại).',
      },
      {
        question: 'Tôi có thể sử dụng `analogWrite()` trên một chân không có dấu `~` không?',
        answer:
          'Không. Hàm `analogWrite()` chỉ hoạt động trên các chân có phần cứng hỗ trợ PWM, được đánh dấu bằng dấu ngã (~). Nếu bạn cố gắng sử dụng nó trên một chân digital thông thường, nó sẽ không hoạt động như mong đợi.',
      },
    ],
  },
  {
    id: 'doc-tin-hieu-analog',
    title: 'Đọc Tín hiệu Analog với Biến trở',
    description:
      'Học cách Arduino đo lường các giá trị liên tục từ thế giới thực, sử dụng biến trở để điều khiển độ sáng LED một cách linh hoạt.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Y5XOpyQ6mf8',
    imageUrl: 'https://i.ytimg.com/vi/Y5XOpyQ6mf8/hqdefault.jpg',
    objectives: [
      'Hiểu sự khác biệt giữa tín hiệu analog và tín hiệu digital.',
      'Sử dụng hàm analogRead() để đọc giá trị điện áp trên các chân analog.',
      'Hiểu về bộ chuyển đổi Analog-to-Digital (ADC) 10-bit của Arduino.',
      'Sử dụng hàm map() để ánh xạ một dải giá trị sang một dải giá trị khác.',
    ],
    prerequisites: ["Hoàn thành bài 'Điều chế Độ rộng xung (PWM)'"],
    exercises: [
      {
        title: 'Đèn LED điều khiển bằng Biến trở',
        description:
          'Xây dựng một mạch nơi độ sáng của đèn LED được điều khiển trực tiếp bằng cách xoay núm vặn của biến trở.',
        difficulty: 'Trung bình',
        materials: ['Arduino Uno', 'Breadboard', 'Đèn LED', 'Biến trở 10k Ohm', 'Điện trở 220 Ohm'],
        procedure: [
          'Kết nối hai chân ngoài của biến trở với 5V và GND.',
          'Kết nối chân giữa của biến trở vào một chân analog của Arduino (ví dụ: A0).',
          'Kết nối đèn LED vào một chân PWM (ví dụ: ~9).',
          'Trong code, dùng `analogRead(A0)` để đọc giá trị từ biến trở (kết quả từ 0-1023).',
          'Sử dụng hàm `map(value, 0, 1023, 0, 255)` để chuyển đổi giá trị đọc được sang dải giá trị của PWM.',
          'Dùng giá trị đã ánh xạ để điều khiển độ sáng LED với `analogWrite()`.',
        ],
        expectedResults: 'Xoay núm vặn của biến trở làm thay đổi độ sáng của đèn LED một cách tương ứng và mượt mà.',
      },
    ],
    realWorldApplications: [
      'Núm vặn điều chỉnh âm lượng (volume) trên amply, loa.',
      'Các loại cảm biến đo lường các giá trị môi trường như cảm biến ánh sáng (quang trở), cảm biến nhiệt độ, cảm biến độ ẩm đất.',
      'Cần điều khiển (joystick) trong các tay cầm chơi game.',
    ],
    vietnamContext: {
      title: 'Giám sát môi trường trong nông nghiệp và đô thị',
      content: [
        'Tại các vùng trồng thanh long ở Bình Thuận, nông dân sử dụng cảm biến ánh sáng (hoạt động dựa trên nguyên lý đọc tín hiệu analog) để tự động bật/tắt đèn chong, tiết kiệm điện năng.',
        'Các dự án thành phố thông minh tại TP.HCM và Hà Nội đang thử nghiệm các trạm quan trắc chất lượng không khí sử dụng cảm biến bụi, khí gas... để đọc và gửi dữ liệu về trung tâm.',
        'Sinh viên Việt Nam thường làm các dự án "Vườn thông minh" sử dụng cảm biến độ ẩm đất để tự động tưới cây khi đất khô, một ứng dụng trực tiếp của việc đọc tín hiệu analog.',
      ],
    },
    careerConnect: {
      name: 'Cô Lê Thị Hoài',
      title: 'Giáo viên Vật lý và STEM',
      company: 'Trường THPT Chuyên Khoa học Tự nhiên',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-hoai',
      quote:
        'Việc dạy học sinh cách đọc tín hiệu analog bằng Arduino giúp các em hình dung được cách khoa học máy tính và vật lý kết hợp với nhau. Các em không chỉ học công thức, mà còn thấy được dữ liệu từ thế giới thực được số hóa và xử lý như thế nào.',
    },
    quizzes: [
      {
        question: 'Bộ chuyển đổi ADC 10-bit của Arduino Uno có thể biểu diễn bao nhiêu giá trị khác nhau?',
        options: ['256 (0-255)', '10 (0-9)', '1024 (0-1023)', '2 (0-1)'],
        correctAnswerIndex: 2,
        explanation:
          'Một bộ ADC 10-bit có thể tạo ra 2^10 = 1024 giá trị khác nhau, được biểu diễn bằng các số nguyên từ 0 đến 1023.',
      },
      {
        question: 'Hàm `map(value, fromLow, fromHigh, toLow, toHigh)` dùng để làm gì?',
        options: [
          'Vẽ bản đồ',
          'Chuyển đổi một giá trị từ một dải này sang một dải khác',
          'Đọc giá trị từ cảm biến',
          'Gửi dữ liệu qua Serial Monitor',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hàm `map()` rất hữu ích để tái định tỷ lệ một số từ một khoảng giá trị này (ví dụ: 0-1023 từ `analogRead`) sang một khoảng giá trị khác (ví dụ: 0-255 cho `analogWrite`).',
      },
    ],
    faqs: [
      {
        question: 'Tại sao giá trị đọc từ `analogRead()` lại từ 0 đến 1023?',
        answer:
          'Arduino Uno sử dụng một bộ chuyển đổi Analog-to-Digital (ADC) 10-bit. Điều này có nghĩa là nó có thể biểu diễn một điện áp analog (từ 0V đến 5V) thành 2^10 = 1024 mức kỹ thuật số khác nhau, được đánh số từ 0 (tương ứng 0V) đến 1023 (tương ứng 5V).',
      },
      {
        question: 'Tôi có thể đọc tín hiệu analog trên các chân digital không?',
        answer:
          'Không. Bạn chỉ có thể sử dụng hàm `analogRead()` trên các chân được đánh dấu là "Analog In" (A0, A1, A2, v.v.). Các chân này được kết nối đặc biệt với bộ ADC của vi điều khiển.',
      },
    ],
  },
];
