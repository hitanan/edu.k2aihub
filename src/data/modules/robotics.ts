import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export interface RoboticsLessonType extends BaseLessonData {
  category: 'hardware' | 'programming' | 'projects' | 'theory';
  codeExample?: string;
  materials: string[];
  competitions: string[];
}

export const roboticsLessons: RoboticsLessonType[] = [
  {
    id: 'introduction-to-robotics',
    title: 'Nhập môn Robotics',
    description: 'Giới thiệu về thế giới robot, lịch sử phát triển, các thành phần cơ bản và phân loại robot.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=p2WfJe7qC-s',
    imageUrl: 'https://i.ytimg.com/vi/p2WfJe7qC-s/hqdefault.jpg',
    objectives: [
      'Hiểu định nghĩa về robot và lịch sử của ngành robotics.',
      'Phân biệt được các loại robot phổ biến (công nghiệp, dịch vụ, tự hành).',
      'Nắm được 3 thành phần chính của một robot: Cơ khí, Điện-Điện tử, và Điều khiển.',
      'Nhận biết các ứng dụng của robot trong đời sống hiện đại.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
    exercises: [
      {
        title: 'Phân tích Robot quanh ta',
        description: 'Xác định và phân loại các thiết bị tự động hoặc robot mà bạn gặp trong cuộc sống hàng ngày.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê 5 thiết bị tự động (ví dụ: máy giặt, máy hút bụi tự động, cửa tự động).',
          'Đối với mỗi thiết bị, thử xác định các thành phần cơ khí, điện và chương trình điều khiển của nó.',
          'Phân loại chúng vào các nhóm robot phù hợp.',
        ],
        expectedResults: 'Một danh sách các thiết bị tự động được phân tích theo cấu trúc của robot.',
      },
    ],
    realWorldApplications: ['Robot hút bụi', 'Máy bay không người lái (Drone)', 'Robot trong nhà máy lắp ráp ô tô'],
    vietnamContext: {
      title: 'Robotics tại Việt Nam: Từ công nghiệp đến giáo dục',
      content: [
        'Các nhà máy sản xuất lớn tại Việt Nam (như VinFast, Samsung) đang ứng dụng mạnh mẽ robot công nghiệp để tự động hóa dây chuyền.',
        'Giáo dục STEM với robotics đang bùng nổ, với nhiều cuộc thi như Robocon, VEX Robotics Competition thu hút hàng ngàn học sinh, sinh viên.',
        'Các startup Việt đang phát triển robot dịch vụ cho nhà hàng, khách sạn và robot nông nghiệp thông minh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Kỹ sư trưởng đội Robocon',
      company: 'Đại học Bách Khoa Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a-robocon',
      quote:
        'Robotics là sự kết hợp tuyệt vời giữa sáng tạo và kỹ thuật. Mỗi cuộc thi là một lần chúng tôi đẩy giới hạn của bản thân và công nghệ.',
    },
    quizzes: [
      {
        question: 'Ba thành phần chính cấu tạo nên một robot là gì?',
        options: [
          'Nhựa, Kim loại, và Pin',
          'Cơ khí, Điện-Điện tử, và Điều khiển',
          'Cảm biến, Động cơ, và Bánh xe',
          'Trí tuệ nhân tạo, Dữ liệu lớn, và Internet vạn vật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một robot hoàn chỉnh luôn bao gồm phần khung cơ khí, hệ thống mạch điện và điện tử, và chương trình máy tính để điều khiển hoạt động.',
      },
    ],
    category: 'theory',
    materials: ['Sách: Robotics Fundamentals', 'Video: Introduction to Robotics'],
    competitions: ['Robocon', 'VEX Robotics Competition'],
    faqs: [
      {
        question: 'Robot có phải lúc nào cũng có hình người không?',
        answer:
          'Không. Hình dạng của robot phụ thuộc vào chức năng của nó. Robot công nghiệp có thể là một cánh tay máy, robot hút bụi có dạng đĩa tròn, và drone là một thiết bị bay. Hình người (humanoid) chỉ là một trong rất nhiều hình dạng của robot.',
      },
      {
        question: 'Học robotics có cần giỏi toán và vật lý không?',
        answer:
          'Giỏi toán và vật lý là một lợi thế lớn, đặc biệt khi đi sâu vào thiết kế cơ khí và thuật toán điều khiển phức tạp. Tuy nhiên, ở cấp độ nhập môn, sự tò mò, tư duy logic và kiên nhẫn là quan trọng nhất. Bạn có thể bắt đầu với các bộ kit và học dần các khái niệm khoa học liên quan.',
      },
      {
        question: 'Sự khác biệt giữa tự động hóa (automation) và robotics là gì?',
        answer:
          'Tự động hóa là một khái niệm rộng, chỉ việc làm cho một quy trình trở nên tự động. Robotics là một nhánh của tự động hóa, tập trung vào việc tạo ra các cỗ máy (robot) có thể thực hiện các tác vụ vật lý. Một robot là một dạng của tự động hóa, nhưng không phải tất cả hệ thống tự động hóa đều là robot (ví dụ: phần mềm tự động gửi email).',
      },
      {
        question: 'Ba Điều luật Robotics của Asimov là gì?',
        answer:
          'Đây là ba quy tắc do nhà văn khoa học viễn tưởng Isaac Asimov đặt ra trong các tác phẩm của mình: 1) Robot không được làm hại con người. 2) Robot phải tuân lệnh con người, trừ khi lệnh đó vi phạm Điều luật 1. 3) Robot phải tự bảo vệ mình, trừ khi điều đó vi phạm Điều luật 1 hoặc 2. Chúng không phải là luật thực tế nhưng có ảnh hưởng lớn đến các cuộc thảo luận về đạo đức robot.',
      },
      {
        question: 'Trí tuệ nhân tạo (AI) có giống với robotics không?',
        answer:
          'Không. AI là "bộ não" - phần mềm đưa ra quyết định thông minh. Robotics là "cơ thể" - cỗ máy vật lý thực hiện hành động. Một robot có thể chỉ được điều khiển bằng một chương trình đơn giản không có AI, và một AI có thể tồn tại mà không cần cơ thể robot (như ChatGPT).',
      },
      {
        question: 'Ngôn ngữ lập trình nào được sử dụng phổ biến nhất trong robotics?',
        answer:
          'C++ và Python là hai ngôn ngữ phổ biến nhất. C++ thường được sử dụng cho các tác vụ điều khiển cấp thấp đòi hỏi hiệu năng cao và thời gian thực. Python rất mạnh cho việc phát triển AI, học máy, xử lý dữ liệu và tạo mẫu nhanh (rapid prototyping).',
      },
      {
        question: 'ROS (Robot Operating System) là gì?',
        answer:
          'ROS không phải là một hệ điều hành thực sự như Windows hay Linux. Nó là một framework (bộ khung) phần mềm linh hoạt cung cấp các thư viện và công cụ để giúp các nhà phát triển viết phần mềm cho robot một cách dễ dàng và module hóa hơn.',
      },
      {
        question: 'Em có thể tự chế tạo một robot tại nhà không?',
        answer:
          'Chắc chắn có! Với sự phổ biến của các bộ kit như LEGO Mindstorms, VEX, hoặc các linh kiện như Arduino và Raspberry Pi, việc chế tạo một robot đơn giản tại nhà đã trở nên rất dễ tiếp cận. Đây là một cách tuyệt vời để học hỏi và thực hành.',
      },
      {
        question: '"Cobot" là gì?',
        answer:
          'Cobot là viết tắt của "Collaborative Robot" (Robot hợp tác). Đây là loại robot được thiết kế đặc biệt để làm việc an toàn bên cạnh con người trong cùng một không gian làm việc, không cần hàng rào bảo vệ như các robot công nghiệp truyền thống.',
      },
      {
        question: 'Tương lai của ngành robotics sẽ như thế nào?',
        answer:
          'Chúng ta sẽ thấy robot ngày càng xuất hiện nhiều hơn trong cuộc sống hàng ngày, từ xe tự lái, drone giao hàng, đến robot trợ lý chăm sóc sức khỏe và các cobot tiên tiến trong sản xuất. Robot sẽ trở nên thông minh hơn, linh hoạt hơn và an toàn hơn.',
      },
    ],
  },
  {
    id: 'microcontroller-programming-with-arduino',
    title: 'Lập trình Vi điều khiển với Arduino',
    description:
      'Làm quen với Arduino, nền tảng vi điều khiển mã nguồn mở phổ biến nhất để xây dựng các dự án điện tử và robot.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=m_O0g_NNg_A',
    imageUrl: 'https://i.ytimg.com/vi/m_O0g_NNg_A/hqdefault.jpg',
    objectives: [
      'Hiểu cấu trúc và chức năng các chân (pin) của board Arduino Uno.',
      'Cài đặt và sử dụng phần mềm Arduino IDE.',
      'Viết chương trình đầu tiên: "Blink" - nhấp nháy đèn LED.',
      'Đọc tín hiệu từ một nút nhấn (Digital Input).',
      'Điều khiển độ sáng của đèn LED bằng PWM (Analog Output).',
    ],
    prerequisites: ["Hoàn thành bài 'Nhập môn Robotics'"],
    exercises: [
      {
        title: 'Lắp mạch và lập trình đèn giao thông',
        description:
          'Sử dụng Arduino để điều khiển 3 đèn LED (Xanh, Vàng, Đỏ) hoạt động như một cột đèn giao thông đơn giản.',
        difficulty: 'Cơ bản',
        procedure: [
          'Lắp 3 đèn LED với các điện trở tương ứng vào board Arduino.',
          'Viết code để bật/tắt các đèn LED theo chu kỳ: Xanh sáng -> Vàng sáng -> Đỏ sáng.',
          'Sử dụng hàm delay() để tạo thời gian trễ giữa các trạng thái đèn.',
        ],
        expectedResults: 'Một mô hình đèn giao thông hoạt động đúng chu trình.',
      },
    ],
    realWorldApplications: [
      'Hệ thống nhà thông minh (Smarthome)',
      'Thiết bị đeo (Wearables)',
      'Máy in 3D',
      'Robot tự chế',
    ],
    vietnamContext: {
      title: 'Cộng đồng Arduino và DIY tại Việt Nam',
      content: [
        'Cộng đồng DIY (Do It Yourself) ở Việt Nam rất mạnh, với Arduino là công cụ cốt lõi. Các diễn đàn như arduino.vn là nơi trao đổi kiến thức sôi nổi.',
        'Arduino được sử dụng rộng rãi trong các đồ án tốt nghiệp của sinh viên ngành kỹ thuật, từ hệ thống tưới cây tự động đến cánh tay robot.',
        'Các cửa hàng linh kiện điện tử ở khu vực chợ Nhật Tảo (TP.HCM) hay chợ Trời (Hà Nội) là thiên đường cho những người đam mê Arduino.',
      ],
    },
    careerConnect: {
      name: 'Trần Thị Bích',
      title: 'Nhà sáng lập The Maker House',
      company: 'The Maker House',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-bich-maker',
      quote:
        'Arduino đã dân chủ hóa việc sáng tạo. Bất kỳ ai có ý tưởng đều có thể bắt đầu biến nó thành sản phẩm thật mà không cần đầu tư quá lớn.',
    },
    quizzes: [
      {
        question: 'Hàm nào được dùng để cấu hình một chân (pin) của Arduino làm ngõ ra (OUTPUT)?',
        options: ['digitalWrite()', 'digitalRead()', 'pinMode()', 'analogWrite()'],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `pinMode(pin, mode)` được sử dụng trong hàm `setup()` để thiết lập một chân cụ thể là `INPUT` (ngõ vào) hoặc `OUTPUT` (ngõ ra).',
      },
    ],
    category: 'programming',
    materials: ['Sách: Arduino Programming Basics', 'Video: Getting Started with Arduino'],
    competitions: ['Arduino Challenge', 'Robotics Hackathon'],
    faqs: [
      {
        question: 'Arduino là gì và tại sao nó lại phổ biến?',
        answer:
          'Arduino là một nền tảng mã nguồn mở bao gồm một board mạch vi điều khiển và một môi trường phát triển tích hợp (IDE). Nó phổ biến vì giá thành rẻ, dễ sử dụng, có cộng đồng hỗ trợ lớn và thư viện mã nguồn phong phú, giúp người mới bắt đầu có thể nhanh chóng tạo ra các sản phẩm điện tử tương tác.',
      },
      {
        question: 'Em có thể làm gì với Arduino?',
        answer:
          'Bạn có thể làm vô số thứ! Từ những dự án đơn giản như bật tắt đèn LED, điều khiển động cơ, cho đến các hệ thống phức tạp hơn như robot, nhà thông minh, trạm thời tiết, máy in 3D, hoặc các tác phẩm nghệ thuật tương tác. Giới hạn duy nhất là sự sáng tạo của bạn.',
      },
      {
        question: 'Sự khác biệt giữa `digitalWrite()` và `analogWrite()` là gì?',
        answer:
          '`digitalWrite()` chỉ có thể đặt một chân ở hai trạng thái: HIGH (5V) hoặc LOW (0V). `analogWrite()` sử dụng kỹ thuật PWM (Điều chế độ rộng xung) để tạo ra một điện áp "giả-tương tự", cho phép bạn điều khiển độ sáng của LED hoặc tốc độ động cơ với các giá trị từ 0 đến 255.',
      },
      {
        question: 'Có cần dùng breadboard (bảng cắm) khi làm việc với Arduino không?',
        answer:
          'Breadboard không bắt buộc nhưng rất được khuyến khích. Nó cho phép bạn kết nối các linh kiện và xây dựng mạch điện mà không cần hàn, giúp việc thử nghiệm và thay đổi thiết kế trở nên cực kỳ nhanh chóng và tiện lợi.',
      },
      {
        question: '"Sketch" trong Arduino là gì?',
        answer:
          '"Sketch" là tên gọi mà Arduino sử dụng cho một chương trình. Đó là đoạn mã bạn viết trong Arduino IDE, sau đó được biên dịch và tải lên board mạch Arduino để thực thi.',
      },
      {
        question: 'Chức năng của hai hàm `setup()` và `loop()` là gì?',
        answer:
          'Hàm `setup()` chỉ chạy một lần duy nhất khi board Arduino được cấp nguồn hoặc reset. Nó được dùng để thực hiện các cài đặt ban đầu, ví dụ như `pinMode()`. Hàm `loop()` sẽ chạy lặp đi lặp lại mãi mãi sau khi `setup()` đã chạy xong. Đây là nơi chứa logic chính của chương trình.',
      },
      {
        question: 'Tại sao cần phải có điện trở khi kết nối LED với Arduino?',
        answer:
          'Điện trở dùng để giới hạn dòng điện chạy qua đèn LED. Nếu không có điện trở, dòng điện từ chân Arduino sẽ quá lớn, có thể làm cháy đèn LED và thậm chí làm hỏng chân của board Arduino.',
      },
      {
        question: 'Arduino có thể kết nối Internet được không?',
        answer:
          'Bản thân board Arduino Uno cơ bản không thể kết nối Internet. Tuy nhiên, bạn có thể dễ dàng làm điều này bằng cách kết hợp nó với các "shield" (mạch mở rộng) như Ethernet Shield hoặc WiFi Shield (ví dụ: dùng chip ESP8266/ESP32).',
      },
      {
        question: 'Sự khác biệt giữa chân Digital và chân Analog trên Arduino là gì?',
        answer:
          'Chân Digital (ví dụ: 0-13 trên Uno) có thể đọc hoặc ghi các giá trị số (HIGH/LOW). Chân Analog Input (A0-A5) được thiết kế để đọc các giá trị điện áp tương tự, ví dụ như từ cảm biến nhiệt độ hoặc chiết áp, chuyển đổi chúng thành một con số từ 0 đến 1023.',
      },
      {
        question: 'Nguồn điện cho Arduino lấy từ đâu?',
        answer:
          'Bạn có thể cấp nguồn cho Arduino qua cổng USB kết nối với máy tính, hoặc sử dụng một nguồn điện ngoài (như pin hoặc adapter) cắm vào giắc cắm nguồn DC. Board sẽ tự động chọn nguồn phù hợp.',
      },
    ],
  },
  {
    id: 'sensors-and-actuators',
    title: 'Cảm biến và Cơ cấu chấp hành',
    description:
      'Tìm hiểu về "giác quan" (cảm biến) và "cơ bắp" (cơ cấu chấp hành) của robot, hai thành phần thiết yếu để robot tương tác với thế giới.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Zt5_k1vBUoA',
    imageUrl: 'https://i.ytimg.com/vi/Zt5_k1vBUoA/hqdefault.jpg',
    objectives: [
      'Phân biệt giữa cảm biến (sensor) và cơ cấu chấp hành (actuator).',
      'Nhận biết các loại cảm biến phổ biến: khoảng cách (siêu âm, hồng ngoại), ánh sáng, nhiệt độ.',
      'Tìm hiểu về các cơ cấu chấp hành thông dụng: động cơ DC, động cơ Servo, động cơ bước.',
      'Hiểu cách Arduino đọc dữ liệu từ cảm biến và điều khiển cơ cấu chấp hành.',
    ],
    prerequisites: ["Hoàn thành bài 'Arduino cơ bản'"],
    exercises: [
      {
        title: 'Robot tránh vật cản',
        description: 'Xây dựng một robot đơn giản có khả năng tự động di chuyển và tránh các vật cản trên đường đi.',
        difficulty: 'Trung bình',
        procedure: [
          'Gắn một cảm biến khoảng cách siêu âm lên khung robot.',
          'Lập trình để robot di chuyển tiến về phía trước.',
          'Khi cảm biến phát hiện vật cản ở gần, robot sẽ dừng lại, lùi, xoay và tiếp tục di chuyển theo hướng khác.',
        ],
        expectedResults: 'Robot có thể tự hành trong một khu vực có vật cản mà không bị va chạm.',
      },
    ],
    realWorldApplications: [
      'Xe tự lái sử dụng cảm biến LiDAR và camera.',
      'Robot hút bụi dùng cảm biến hồng ngoại để tránh rơi cầu thang.',
      'Cánh tay robot công nghiệp dùng động cơ servo để di chuyển chính xác.',
    ],
    vietnamContext: {
      title: 'Ứng dụng cảm biến trong Nông nghiệp thông minh',
      content: [
        'Các trang trại công nghệ cao tại Đà Lạt, Lâm Đồng sử dụng cảm biến độ ẩm đất, nhiệt độ, ánh sáng để tự động hóa việc tưới tiêu và điều khiển nhà kính.',
        'Drone nông nghiệp trang bị camera đa phổ để phân tích sức khỏe cây trồng, giúp nông dân phun thuốc trừ sâu chính xác, giảm chi phí và bảo vệ môi trường.',
        'Hệ thống giám sát chất lượng nước trong các đầm nuôi tôm ở Đồng bằng sông Cửu Long sử dụng các cảm biến pH, oxy hòa tan để cảnh báo sớm các vấn đề.',
      ],
    },
    careerConnect: {
      name: 'Lê Hoàng Nam',
      title: 'Kỹ sư hệ thống nhúng',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hoang-nam-fpt',
      quote:
        'Làm việc với cảm biến và vi điều khiển giống như bạn đang dạy cho máy móc cách cảm nhận thế giới. Đó là một công việc đầy thách thức nhưng cũng vô cùng thú vị.',
    },
    quizzes: [
      {
        question:
          'Loại động cơ nào phù hợp nhất để điều khiển một khớp của cánh tay robot cần xoay đến một góc chính xác?',
        options: ['Động cơ DC', 'Động cơ Servo', 'Động cơ Bước', 'Động cơ không chổi than'],
        correctAnswerIndex: 1,
        explanation:
          'Động cơ Servo được thiết kế để quay đến một vị trí góc cụ thể và giữ nguyên ở đó, rất lý tưởng cho các ứng dụng cần sự chính xác về góc quay như khớp robot, bánh lái máy bay mô hình.',
      },
    ],
    category: 'hardware',
    materials: ['Sách: Sensors and Actuators', 'Video: How Sensors and Actuators Work'],
    competitions: ['RoboCup', 'Drone Racing League'],
    faqs: [
      {
        question: 'Sự khác biệt giữa cảm biến (sensor) và cơ cấu chấp hành (actuator) là gì?',
        answer:
          'Cảm biến là thiết bị "thu thập" thông tin từ môi trường (ví dụ: nhiệt độ, ánh sáng, khoảng cách) và chuyển thành tín hiệu điện. Cơ cấu chấp hành là thiết bị "hành động", nhận tín hiệu điện và tạo ra chuyển động hoặc một dạng năng lượng khác (ví dụ: động cơ quay, đèn LED phát sáng). Nôm na, cảm biến là "giác quan", còn cơ cấu chấp hành là "cơ bắp" của robot.',
      },
      {
        question: 'Tại sao động cơ Servo lại quan trọng trong robotics?',
        answer:
          'Động cơ Servo cho phép điều khiển chính xác vị trí góc quay. Điều này cực kỳ quan trọng cho các khớp của cánh tay robot, bánh lái của xe, hoặc bất kỳ bộ phận nào cần di chuyển đến một vị trí cụ thể và giữ yên ở đó, thay vì chỉ quay liên tục như động cơ DC thông thường.',
      },
      {
        question: 'Cảm biến siêu âm (ultrasonic sensor) hoạt động như thế nào?',
        answer:
          'Nó hoạt động giống như con dơi. Cảm biến phát ra một sóng âm tần số cao (siêu âm). Sóng này di chuyển, đập vào vật cản và phản xạ lại. Cảm biến đo thời gian từ lúc phát đến lúc nhận lại sóng phản xạ, từ đó tính toán ra khoảng cách đến vật cản.',
      },
      {
        question: 'Sự khác biệt giữa động cơ Servo và động cơ Bước (Stepper Motor) là gì?',
        answer:
          'Cả hai đều cho phép điều khiển vị trí chính xác. Động cơ Servo sử dụng một hệ thống phản hồi (feedback) để quay đến một góc tuyệt đối. Động cơ Bước di chuyển theo từng "bước" góc rất nhỏ và không có phản hồi; nó giả định rằng nó đã di chuyển đúng số bước được yêu cầu. Động cơ bước rất tốt cho việc lặp lại các chuyển động chính xác, như trong máy in 3D.',
      },
      {
        question: 'Làm thế nào để một robot có thể đi theo một vạch đen trên sàn?',
        answer:
          'Robot sử dụng các cảm biến dò line (line sensor), thường là cảm biến hồng ngoại. Cảm biến này bao gồm một cặp LED phát và thu hồng ngoại. Bề mặt màu trắng phản xạ nhiều ánh sáng hơn bề mặt màu đen. Bằng cách đọc giá trị từ các cảm biến này, robot có thể biết được vị trí của nó so với vạch đen và điều chỉnh động cơ để đi theo vạch.',
      },
      {
        question: 'IMU (Inertial Measurement Unit) là cảm biến gì?',
        answer:
          'IMU là một cảm biến phức hợp, thường bao gồm một gia tốc kế (accelerometer) để đo gia tốc và một con quay hồi chuyển (gyroscope) để đo tốc độ góc. IMU giúp robot xác định được hướng, độ nghiêng và sự thay đổi trong chuyển động của nó, rất quan trọng cho robot tự cân bằng hoặc drone.',
      },
      {
        question: 'Cơ cấu chấp hành không chỉ là động cơ đúng không?',
        answer:
          'Đúng vậy. Bất cứ thứ gì tạo ra một hành động vật lý đều là cơ cấu chấp hành. Ví dụ bao gồm: đèn LED (phát sáng), còi (tạo âm thanh), nam châm điện (tạo lực từ), xi lanh khí nén/thủy lực (tạo chuyển động thẳng), và thậm chí cả màn hình hiển thị (thay đổi hình ảnh).',
      },
      {
        question: 'Làm thế nào để điều khiển tốc độ của một động cơ DC đơn giản?',
        answer:
          'Bạn có thể điều khiển tốc độ của động cơ DC bằng cách thay đổi điện áp cấp cho nó. Với Arduino, cách phổ biến nhất là sử dụng kỹ thuật PWM (thông qua hàm `analogWrite()`) kết hợp với một mạch cầu H (H-Bridge) hoặc một transistor để xử lý dòng điện lớn hơn mà động cơ yêu cầu.',
      },
      {
        question: 'Cảm biến PIR là gì và nó được dùng để làm gì?',
        answer:
          'PIR là viết tắt của Passive Infrared (Hồng ngoại thụ động). Đây là loại cảm biến có thể phát hiện bức xạ hồng ngoại (thân nhiệt) phát ra từ các vật thể sống như người và động vật. Nó thường được sử dụng trong các hệ thống báo trộm, đèn tự động bật sáng khi có người di chuyển vào vùng cảm ứng.',
      },
      {
        question: 'Em có thể kết nối nhiều cảm biến và động cơ với một board Arduino không?',
        answer:
          'Có, đó chính là thế mạnh của Arduino. Một board Arduino Uno có 14 chân digital và 6 chân analog input, cho phép bạn kết nối đồng thời nhiều cảm biến và cơ cấu chấp hành. Nếu cần nhiều chân hơn, bạn có thể sử dụng các board lớn hơn như Arduino Mega hoặc các kỹ thuật mở rộng chân.',
      },
    ],
  },
];

export const roboticsModuleData: ModuleData = {
  id: K2Module.Robotics,
  title: 'Robotics',
  subtitle: 'Xây dựng và lập trình Robot của riêng bạn',
  description:
    'Khám phá thế giới hấp dẫn của robotics, từ các khái niệm cơ bản về cơ khí, điện tử đến lập trình vi điều khiển và xây dựng các robot tự hành thông minh.',
  category: 'engineering',
  icon: '🤖',
  color: 'from-gray-500 to-blue-500',
  level: 'Cơ bản - Trung bình',
  duration: '15-20 giờ',
  features: [
    'Lập trình vi điều khiển Arduino',
    'Làm việc với cảm biến và cơ cấu chấp hành',
    'Xây dựng robot tránh vật cản',
    'Nền tảng cho các cuộc thi Robocon',
    'Tư duy hệ thống và giải quyết vấn đề',
  ],
  prerequisites: ['Tư duy logic', 'Yêu thích lắp ráp và sáng tạo'],
  objectives: [
    'Hiểu các thành phần cơ bản của một robot.',
    'Lập trình thành thạo board Arduino cho các tác vụ robot.',
    'Sử dụng các loại cảm biến và động cơ phổ biến.',
    'Xây dựng được một robot tự hành đơn giản.',
    'Phát triển kỹ năng giải quyết vấn đề trong các hệ thống cơ điện tử.',
  ],
  careerOutcomes: [
    'Kỹ sư Robotics',
    'Kỹ sư tự động hóa',
    'Kỹ sư hệ thống nhúng',
    'Chuyên gia R&D sản phẩm',
    'Giáo viên/hướng dẫn viên STEM',
  ],
  industryApplications: [
    { name: 'Sản xuất công nghiệp', description: 'Robot hàn, lắp ráp, sơn trong các nhà máy hiện đại.' },
    { name: 'Y tế', description: 'Robot phẫu thuật, robot hỗ trợ người già và người khuyết tật.' },
    { name: 'Nông nghiệp', description: 'Robot gieo hạt, thu hoạch, máy bay không người lái giám sát cây trồng.' },
    { name: 'Dịch vụ', description: 'Robot giao hàng, robot phục vụ trong nhà hàng, robot dọn dẹp.' },
    { name: 'Thám hiểm', description: 'Robot tự hành trên sao Hỏa, robot lặn biển sâu.' },
  ],
  marketDemand: {
    averageSalary: '350-900 triệu VND/năm',
    jobGrowth: '15% (nhanh)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.Arduino, K2Module.Python, K2Module.AI],
  lessons: roboticsLessons,
};
