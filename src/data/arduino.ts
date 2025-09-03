// Arduino Programming Module Data
// Comprehensive Arduino content for K2AiHub education platform

interface VietnamContext {
  title: string;
  content: string[];
}

interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ArduinoLesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  duration: string;
  category: 'basics' | 'sensors' | 'communication' | 'projects' | 'iot';
  objectives: string[];
  materials: string[];
  codeExample: string;
  circuitDiagram?: string;
  videoUrl?: string;
  imageUrl: string;
  exercises: ArduinoExercise[];
  realWorldApplications: string[];
  competitions: string[];
  relatedGames?: Array<{
    gameId: string;
    title: string;
    connection: string;
    difficulty: string;
  }>;
  vietnamContext: VietnamContext;
  careerConnect: CareerConnect;
  quizzes: Quiz[];
}

export interface ArduinoExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  videoUrl?: string;
  imageUrl?: string;
  code: string;
  expectedOutput: string;
  hints: string[];
  troubleshooting: string[];
}

export const arduinoLessons: ArduinoLesson[] = [
  {
    id: 'arduino-setup',
    title: 'Cài Đặt và Làm Quen Arduino',
    description:
      'Bước đầu khám phá thế giới Arduino! Bạn sẽ tự tay cài đặt phần mềm, kết nối bo mạch, làm cho đèn LED nhấp nháy và cảm nhận niềm vui của việc lập trình phần cứng. Bài học này giúp bạn tự tin bắt đầu mọi dự án sáng tạo với Arduino.',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'basics',
    objectives: [
      'Cài đặt thành công phần mềm Arduino IDE.',
      'Hiểu cấu trúc của một bo mạch Arduino.',
      'Kết nối Arduino với máy tính qua cáp USB.',
      'Tải lên (upload) chương trình đầu tiên.',
      'Hiểu cấu trúc cơ bản của một đoạn code Arduino (setup và loop).',
    ],
    materials: [
      'Bo mạch Arduino Uno R3',
      'Cáp USB Type A-B',
      'Máy tính đã cài đặt Arduino IDE',
      'Đèn LED và điện trở 220Ω',
      'Breadboard (Bảng cắm)',
      'Dây nối (Jumper wires)',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=7tHm6_frc-o',
    circuitDiagram: 'https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png',
    codeExample: `/*
  Blink - Chương trình Arduino cơ bản nhất
  Làm cho đèn LED nhấp nháy mỗi giây
*/

// Định nghĩa chân kết nối với LED
int ledPin = 13;

void setup() {
  // Hàm khởi tạo, chạy một lần khi Arduino bật nguồn
  pinMode(ledPin, OUTPUT);  // Đặt chân 13 làm chân đầu ra (output)
  Serial.begin(9600);       // Khởi tạo giao tiếp Serial để gỡ lỗi
  Serial.println("Arduino đã sẵn sàng!");
}

void loop() {
  // Vòng lặp chạy liên tục mãi mãi
  digitalWrite(ledPin, HIGH);   // Bật đèn LED
  Serial.println("LED BẬT");
  delay(1000);                  // Đợi 1 giây
  
  digitalWrite(ledPin, LOW);    // Tắt đèn LED
  Serial.println("LED TẮT");
  delay(1000);                  // Đợi 1 giây
}`,
    exercises: [
      {
        id: 'ex1-led-blink',
        title: 'LED Nhấp Nháy Cơ Bản',
        description: 'Tạo một chương trình làm cho đèn LED nhấp nháy với tốc độ khác nhau.',
        difficulty: 'Dễ',
        videoUrl: 'https://www.youtube.com/watch?v=bQeiO-tEa9o',
        imageUrl: 'https://i.ytimg.com/vi/bQeiO-tEa9o/hqdefault.jpg',
        code: `int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(200);  // Thay đổi giá trị này để LED nháy nhanh hơn
  digitalWrite(ledPin, LOW);
  delay(200);  // Thay đổi giá trị này
}`,
        expectedOutput: 'Đèn LED nhấp nháy nhanh (mỗi 0.2 giây một lần).',
        hints: [
          'Hàm `delay()` tính bằng mili giây (1000ms = 1 giây).',
          'Giảm giá trị trong `delay()` để LED nhấp nháy nhanh hơn.',
          'HIGH tương ứng với trạng thái bật, LOW là tắt.',
          'Hàm `pinMode()` phải được gọi trong `setup()` để cấu hình chân.',
        ],
        troubleshooting: [
          'Nếu LED không sáng: kiểm tra lại kết nối dây và đảm bảo LED không bị cắm ngược.',
          'Nếu upload lỗi: kiểm tra đã chọn đúng cổng COM và loại bo mạch (Board Type) trong menu Tools chưa.',
          'Đèn LED sáng yếu: kiểm tra nguồn điện cung cấp.',
          'Code báo lỗi: kiểm tra cú pháp, đặc biệt là dấu chấm phẩy (;) ở cuối mỗi câu lệnh.',
        ],
      },
      {
        id: 'ex2-traffic-light',
        title: 'Đèn Giao Thông Mini',
        description: 'Tạo một hệ thống đèn giao thông đơn giản với 3 đèn LED màu đỏ, vàng, và xanh.',
        difficulty: 'Trung bình',
        videoUrl: 'https://www.youtube.com/watch?v=kmcroP9nLvg',
        imageUrl: 'https://i.ytimg.com/vi/kmcroP9nLvg/hqdefault.jpg',
        code: `int redPin = 11;
int yellowPin = 12;
int greenPin = 13;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  // Đèn đỏ sáng
  digitalWrite(redPin, HIGH);
  delay(3000);
  digitalWrite(redPin, LOW);
  
  // Đèn vàng sáng
  digitalWrite(yellowPin, HIGH);
  delay(1000);
  digitalWrite(yellowPin, LOW);
  
  // Đèn xanh sáng
  digitalWrite(greenPin, HIGH);
  delay(3000);
  digitalWrite(greenPin, LOW);
}`,
        expectedOutput:
          'Đèn đỏ sáng 3 giây, sau đó tắt và đèn vàng sáng 1 giây, cuối cùng đèn xanh sáng 3 giây, và chu trình lặp lại.',
        hints: [
          'Kết nối mỗi đèn LED với một chân digital khác nhau.',
          'Luôn sử dụng điện trở phù hợp cho mỗi đèn LED để bảo vệ chúng.',
          'Thời gian `delay` mô phỏng chu kỳ của đèn giao thông thực tế.',
          'Luôn tắt đèn LED hiện tại trước khi bật đèn LED tiếp theo.',
        ],
        troubleshooting: [
          'Đèn LED bị cháy: kiểm tra lại giá trị điện trở bảo vệ.',
          'Thứ tự đèn không đúng: kiểm tra lại kết nối dây có đúng với các chân đã khai báo trong code không.',
          'Thời gian không chính xác: điều chỉnh lại giá trị trong hàm `delay`.',
          'Nhiều đèn sáng cùng lúc: kiểm tra lại logic tắt/bật đèn.',
        ],
      },
    ],
    realWorldApplications: [
      'Hệ thống đèn LED thông minh trong nhà.',
      'Đèn báo hiệu trạng thái của các thiết bị điện tử.',
      'Hệ thống đèn cảnh báo an toàn trong nhà máy, công trường.',
      'Đèn trang trí với các hiệu ứng ánh sáng phức tạp.',
      'Đèn báo trạng thái cho các thiết bị IoT.',
    ],
    competitions: [
      'Cuộc thi Sáng tạo Khoa học Kỹ thuật cấp Quốc gia',
      'Ngày hội Arduino Việt Nam (Arduino Day Vietnam)',
      'Maker Faire Vietnam',
      'Cuộc thi IoT Challenge',
      'Giải thưởng Nhà Sáng chế Trẻ',
    ],
    relatedGames: [
      {
        gameId: 'typing-speed-challenge',
        title: 'Thử Thách Tốc Độ Gõ',
        connection: 'Luyện tập tốc độ gõ code Arduino nhanh và chính xác.',
        difficulty: 'Cơ bản',
      },
      {
        gameId: 'robotics-navigation',
        title: 'Điều Khiển Robot 3D',
        connection: 'Ứng dụng kiến thức Arduino để điều khiển robot trong môi trường 3D.',
        difficulty: 'Nâng cao',
      },
      {
        gameId: 'circuit-builder',
        title: 'Xây Dựng Mạch Điện',
        connection: 'Thực hành thiết kế và mô phỏng các mạch Arduino cơ bản.',
        difficulty: 'Trung bình',
      },
    ],
    vietnamContext: {
      title: 'Arduino và Phong trào STEM tại Việt Nam',
      content: [
        'Arduino là công cụ học tập cốt lõi trong giáo dục STEM tại các trường phổ thông và đại học ở Việt Nam, giúp học sinh, sinh viên tiếp cận lập trình và điện tử một cách trực quan.',
        'Cộng đồng DIY (Tự tay làm lấy) Việt Nam rất phát triển, với nhiều diễn đàn và nhóm trên mạng xã hội chia sẻ các dự án Arduino, từ nhà thông minh, robot cho đến máy in 3D.',
        'Các cửa hàng linh kiện điện tử ở Hà Nội (chợ Trời) và TP.HCM (chợ Nhật Tảo) là thiên đường cho người chơi Arduino, cung cấp mọi thứ từ bo mạch đến cảm biến.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Huy Hoàng',
      title: 'Kỹ sư Trưởng Hệ thống Nhúng',
      company: 'VinFast',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-huy-hoang',
      quote:
        'Mọi hệ thống phức tạp đều bắt đầu từ những nguyên lý cơ bản. Việc làm một chiếc đèn LED nhấp nháy hôm nay sẽ cho bạn nền tảng để ngày mai có thể lập trình các hệ thống điều khiển trên ô tô điện. Đừng bao giờ xem thường những bài học đầu tiên.',
    },
    quizzes: [
      {
        question: 'Hàm `setup()` trong một chương trình Arduino chạy bao nhiêu lần?',
        options: [
          'Mỗi khi vòng lặp `loop()` chạy xong',
          'Không bao giờ',
          'Chỉ một lần khi Arduino được cấp nguồn hoặc reset',
          'Liên tục',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `setup()` được thiết kế để chạy một lần duy nhất, dùng để khởi tạo các cài đặt ban đầu như cấu hình chân (pin), bắt đầu giao tiếp serial, v.v.',
      },
      {
        question: 'Mục đích của hàm `pinMode(pin, mode)` là gì?',
        options: [
          'Đọc giá trị từ một chân',
          'Ghi giá trị ra một chân',
          'Cấu hình một chân cụ thể là đầu vào (INPUT) hoặc đầu ra (OUTPUT)',
          'Tạo độ trễ',
        ],
        correctAnswerIndex: 2,
        explanation:
          '`pinMode()` là hàm thiết yếu trong `setup()` để báo cho Arduino biết một chân sẽ được sử dụng để nhận tín hiệu (INPUT) hay để điều khiển thiết bị khác (OUTPUT).',
      },
    ],
  },
  {
    id: 'led-digital-outputs',
    title: 'LED và Đầu ra Kỹ thuật số (Digital Outputs)',
    description:
      'Khám phá thế giới điều khiển ánh sáng! Học cách tạo ra các hiệu ứng đẹp mắt, điều khiển nhiều đèn LED cùng lúc, và hiểu sâu về các chân đầu ra kỹ thuật số. Từ một đèn LED đơn giản đến ma trận LED và LED RGB phức tạp.',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    category: 'basics',
    objectives: [
      'Hiểu cách hoạt động của đèn LED và các chân đầu ra kỹ thuật số.',
      'Tính toán giá trị điện trở phù hợp để bảo vệ đèn LED.',
      'Tạo các hiệu ứng LED: nhấp nháy, mờ dần, đuổi bắt, đổi màu RGB.',
      'Điều khiển nhiều đèn LED hơn số chân có sẵn bằng thanh ghi dịch (shift register).',
      'Gỡ lỗi các vấn đề thường gặp với mạch LED.',
    ],
    materials: [
      'Arduino Uno',
      '8 đèn LED đơn sắc',
      '2 đèn LED RGB',
      '10 điện trở 220Ω',
      'Thanh ghi dịch 74HC595',
      'Breadboard và dây nối',
      'LED 7 đoạn (tùy chọn)',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU',
    codeExample: `/*
  Chu trình màu của LED RGB
  Tạo hiệu ứng đổi màu mượt mà với một đèn LED RGB
*/

int redPin = 9;    // Chân PWM cho màu đỏ
int greenPin = 10; // Chân PWM cho màu xanh lá
int bluePin = 11;  // Chân PWM cho màu xanh dương

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  Serial.begin(9600);
  Serial.println("Bắt đầu chu trình màu LED RGB!");
}

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  // Chuyển từ Đỏ sang Xanh lá
  for(int i = 0; i < 255; i++) {
    setColor(255-i, i, 0);
    delay(10);
  }
  
  // Chuyển từ Xanh lá sang Xanh dương
  for(int i = 0; i < 255; i++) {
    setColor(0, 255-i, i);
    delay(10);
  }
  
  // Chuyển từ Xanh dương về Đỏ
  for(int i = 0; i < 255; i++) {
    setColor(i, 0, 255-i);
    delay(10);
  }
}`,
    exercises: [
      {
        id: 'ex1-led-blink-pattern',
        title: 'Tạo Hiệu ứng LED',
        description: 'Tạo hiệu ứng đèn chạy đuổi tuần tự với 5 đèn LED.',
        difficulty: 'Dễ',
        code: `int ledPins[] = {2, 3, 4, 5, 6};
int numLeds = 5;

void setup() {
  for(int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Hiệu ứng Knight Rider (K.I.T.T.)
  for(int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(100);
    digitalWrite(ledPins[i], LOW);
  }
  
  for(int i = numLeds-2; i > 0; i--) {
    digitalWrite(ledPins[i], HIGH);
    delay(100);
    digitalWrite(ledPins[i], LOW);
  }
}`,
        expectedOutput: 'Dãy đèn LED sáng chạy qua lại giống như đèn trên xe trong phim Knight Rider.',
        hints: [
          'Sử dụng một mảng (array) để quản lý nhiều chân LED một cách dễ dàng.',
          'Sử dụng vòng lặp `for` để điều khiển tuần tự các đèn.',
          'Điều chỉnh `delay` để có được tốc độ hiệu ứng mong muốn.',
        ],
        troubleshooting: [
          'Đèn LED không sáng: kiểm tra lại kết nối dây và điện trở.',
          'Hiệu ứng không mượt: điều chỉnh lại giá trị `delay`.',
          'Arduino bị reset: kiểm tra tổng dòng điện tiêu thụ, có thể bạn cần nguồn ngoài.',
        ],
      },
      {
        id: 'ex2-rgb-mood-light',
        title: 'Đèn Tâm trạng RGB',
        description: 'Tạo một chiếc đèn có khả năng tự động đổi màu một cách mượt mà.',
        difficulty: 'Trung bình',
        code: `int redPin = 9, greenPin = 10, bluePin = 11;

void setColor(int r, int g, int b) {
  analogWrite(redPin, r);
  analogWrite(greenPin, g);
  analogWrite(bluePin, b);
}

void fadeColor(int fromR, int fromG, int fromB, 
               int toR, int toG, int toB, int steps) {
  for(int i = 0; i <= steps; i++) {
    int r = fromR + (toR - fromR) * i / steps;
    int g = fromG + (toG - fromG) * i / steps;
    int b = fromB + (toB - fromB) * i / steps;
    setColor(r, g, b);
    delay(50);
  }
}

void loop() {
  fadeColor(255, 0, 0, 0, 255, 0, 50);   // Đỏ sang Xanh lá
  fadeColor(0, 255, 0, 0, 0, 255, 50);   // Xanh lá sang Xanh dương
  fadeColor(0, 0, 255, 255, 0, 0, 50);   // Xanh dương về Đỏ
}`,
        expectedOutput: 'Đèn LED RGB chuyển màu mượt mà giữa các màu cơ bản (Đỏ, Xanh lá, Xanh dương).',
        hints: [
          'Phải sử dụng các chân có hỗ trợ PWM (có dấu ~) để dùng `analogWrite`.',
          'Sử dụng công thức nội suy tuyến tính để tính toán các bước chuyển màu.',
          'Kiểm tra xem LED RGB của bạn là loại Anode chung (cực dương chung) hay Cathode chung (cực âm chung) để nối mạch cho đúng.',
        ],
        troubleshooting: [
          'Màu sắc không chính xác: kiểm tra lại loại LED RGB và cách nối dây.',
          'Không thể làm mờ LED: đảm bảo bạn đang dùng đúng chân PWM.',
          'Màu bị giật (không mượt): giảm giá trị `delay` trong hàm `fadeColor`.',
        ],
      },
    ],
    realWorldApplications: [
      'Đèn báo trạng thái trên các thiết bị điện tử.',
      'Hệ thống đèn trang trí và giải trí.',
      'Đèn giao thông và các hệ thống an toàn.',
      'Màn hình hiển thị và bảng thông tin.',
      'Các tác phẩm nghệ thuật sắp đặt tương tác.',
    ],
    competitions: [
      'Cuộc thi Nghệ thuật Ánh sáng LED',
      'Cuộc thi Trình diễn Ánh sáng với Arduino',
      'Giải thưởng Sắp đặt Tương tác',
      'Dự án LED tại Maker Faire',
      'Thử thách Sáng tạo Sinh viên',
    ],
    relatedGames: [
      {
        gameId: 'color-memory-game',
        title: 'Trò Chơi Nhớ Màu',
        connection: 'Áp dụng kiến thức về LED và RGB để tạo ra một trò chơi trí tuệ về ghi nhớ màu sắc.',
        difficulty: 'Trung bình',
      },
      {
        gameId: 'circuit-builder',
        title: 'Xây Dựng Mạch Điện',
        connection: 'Thiết kế các mạch LED phức tạp hơn với nhiều đầu ra kỹ thuật số.',
        difficulty: 'Trung bình',
      },
      {
        gameId: 'rhythm-game',
        title: 'Trò Chơi Âm Nhạc',
        connection: 'Sử dụng đèn LED để tạo hiệu ứng ánh sáng đồng bộ với nhịp điệu âm nhạc.',
        difficulty: 'Nâng cao',
      },
    ],
    vietnamContext: {
      title: 'LED trong Quảng cáo và Trang trí tại Việt Nam',
      content: [
        'Công nghệ LED được ứng dụng rộng rãi trong ngành quảng cáo tại Việt Nam, từ các biển hiệu hộp đèn, màn hình LED lớn ngoài trời cho đến trang trí mặt tiền các tòa nhà.',
        'Vào các dịp lễ Tết, các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng được trang hoàng lộng lẫy bằng các hệ thống đèn LED trang trí nghệ thuật, nhiều trong số đó được điều khiển bởi các vi điều khiển tương tự Arduino.',
        'Các bạn trẻ Việt Nam rất thích tự tay làm các món quà tặng độc đáo như hộp đèn LED, tranh LED... sử dụng kiến thức từ các bài học này.',
      ],
    },
    careerConnect: {
      name: 'Chị Mai Anh Thư',
      title: 'Nhà thiết kế Ánh sáng Sân khấu',
      company: 'Công ty Sự kiện Ánh Sao',
      imageUrl: 'https://i.pravatar.cc/150?u=mai-anh-thu',
      quote:
        'Ánh sáng có ngôn ngữ của riêng nó. Việc hiểu cách điều khiển từng đèn LED, từng màu sắc cho phép chúng tôi tạo ra những không gian cảm xúc, kể những câu chuyện không lời trên sân khấu. Tất cả đều bắt đầu từ việc hiểu một chân digital output hoạt động như thế nào.',
    },
    quizzes: [
      {
        question: 'Tại sao cần phải có điện trở khi nối một đèn LED vào Arduino?',
        options: [
          'Để đèn sáng hơn',
          'Để giới hạn dòng điện và bảo vệ LED khỏi bị cháy',
          'Để thay đổi màu sắc của LED',
          'Không cần thiết',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Mỗi đèn LED có một định mức dòng điện tối đa. Điện trở giúp hạn chế dòng điện từ chân Arduino xuống mức an toàn cho đèn LED, nếu không đèn sẽ bị hỏng.',
      },
      {
        question: 'Để điều khiển độ sáng của một đèn LED, bạn nên sử dụng hàm nào?',
        options: ['digitalWrite()', 'digitalRead()', 'analogWrite()', 'analogRead()'],
        correctAnswerIndex: 2,
        explanation:
          'Hàm `analogWrite()` gửi đi một tín hiệu PWM (Điều chế độ rộng xung), cho phép điều khiển "độ sáng" của đèn LED hoặc "tốc độ" của động cơ, thay vì chỉ có hai trạng thái bật/tắt.',
      },
    ],
  },
  {
    id: 'arduino-inputs',
    title: 'Đọc Tín hiệu Đầu vào và Điều khiển',
    description:
      'Trải nghiệm việc điều khiển thiết bị bằng nút nhấn, biến trở và cảm biến! Bạn sẽ học cách tương tác với thế giới thực, tạo ra các hiệu ứng thú vị và xây dựng những hệ thống thông minh chỉ với vài dòng code.',
    difficulty: 'Cơ bản',
    duration: '75 phút',
    category: 'basics',
    objectives: [
      'Hiểu sự khác biệt giữa tín hiệu đầu vào digital và analog.',
      'Sử dụng điện trở kéo lên (pull-up resistor) cho các nút nhấn.',
      'Đọc giá trị từ biến trở (potentiometer).',
      'Kết hợp tín hiệu đầu vào và đầu ra trong một chương trình.',
      'Gỡ lỗi và xử lý các vấn đề thường gặp với tín hiệu đầu vào.',
    ],
    materials: [
      'Arduino Uno',
      '2 Nút nhấn (Pushbutton)',
      'Biến trở 10kΩ',
      'Điện trở 10kΩ',
      'Đèn LED RGB',
      'Breadboard và dây nối',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=0IFhkTDrXnQ',
    codeExample: `/*
  Điều khiển LED bằng Nút nhấn
  Sử dụng một nút nhấn để bật và tắt đèn LED
*/

int buttonPin = 2;
int ledPin = 13;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);  // Sử dụng điện trở kéo lên nội bộ
  Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  
  if (buttonState == LOW) {  // Nút được nhấn (khi dùng pull-up, nhấn sẽ là LOW)
    digitalWrite(ledPin, HIGH);
    Serial.println("Nút được nhấn - LED BẬT");
  } else {
    digitalWrite(ledPin, LOW);
    Serial.println("Nút được thả - LED TẮT");
  }
  
  delay(50);  // Delay nhỏ để chống nhiễu (debouncing)
}`,
    exercises: [
      {
        id: 'ex1-button-counter',
        title: 'Đếm Số Lần Nhấn Nút',
        description: 'Tạo một bộ đếm số lần một nút nhấn được nhấn và hiển thị kết quả lên Serial Monitor.',
        difficulty: 'Trung bình',
        code: `int buttonPin = 2;
int counter = 0;
int lastButtonState = HIGH;
int currentButtonState;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
  Serial.println("Chương trình đếm số lần nhấn nút đã bắt đầu");
}

void loop() {
  currentButtonState = digitalRead(buttonPin);
  
  if (lastButtonState == HIGH && currentButtonState == LOW) {
    counter++;
    Serial.print("Nút đã được nhấn ");
    Serial.print(counter);
    Serial.println(" lần");
    delay(50);  // Chống nhiễu
  }
  
  lastButtonState = currentButtonState;
}`,
        expectedOutput: 'Mỗi khi nhấn nút, Serial Monitor sẽ hiển thị số lần nhấn tăng lên một.',
        hints: [
          'Sử dụng kỹ thuật phát hiện cạnh (edge detection): chỉ đếm khi trạng thái nút chuyển từ HIGH sang LOW.',
          'Chống nhiễu (debouncing) là rất quan trọng để tránh đếm nhiều lần trong một lần nhấn duy nhất.',
          'Sử dụng một biến `lastButtonState` để lưu trạng thái của nút ở vòng lặp trước.',
          'Dùng `Serial.println()` để gỡ lỗi và kiểm tra giá trị.',
        ],
        troubleshooting: [
          'Bộ đếm nhảy số loạn xạ: tăng thời gian `delay` để chống nhiễu tốt hơn.',
          'Nút không phản hồi: kiểm tra lại mạch và đảm bảo đã dùng `INPUT_PULLUP`.',
          'Serial không hiển thị gì: kiểm tra tốc độ baud có khớp với cài đặt trong Serial Monitor không.',
          'Biến đếm tự reset: có thể do nguồn điện không ổn định.',
        ],
      },
      {
        id: 'ex2-potentiometer-led',
        title: 'Điều Khiển Độ Sáng LED',
        description: 'Sử dụng một biến trở để điều chỉnh độ sáng của một đèn LED.',
        difficulty: 'Trung bình',
        videoUrl: 'https://www.youtube.com/watch?v=DpqqG9uHf5c',
        imageUrl: 'https://i.ytimg.com/vi/DpqqG9uHf5c/hqdefault.jpg',
        code: `int potPin = A0;
int ledPin = 9;  // Phải là chân PWM
int potValue = 0;
int ledValue = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  potValue = analogRead(potPin);           // Đọc giá trị từ 0-1023
  ledValue = map(potValue, 0, 1023, 0, 255); // Chuyển đổi sang dải 0-255
  
  analogWrite(ledPin, ledValue);           // Xuất ra PWM
  
  Serial.print("Giá trị biến trở: ");
  Serial.print(potValue);
  Serial.print(" -> Giá trị LED: ");
  Serial.println(ledValue);
  
  delay(10);
}`,
        expectedOutput: 'Độ sáng của đèn LED thay đổi tương ứng khi bạn xoay núm của biến trở.',
        hints: [
          'Hàm `analogRead()` trả về một giá trị trong khoảng 0-1023.',
          'Hàm `analogWrite()` nhận một giá trị trong khoảng 0-255.',
          'Hàm `map()` là công cụ tuyệt vời để chuyển đổi một giá trị từ một thang đo này sang một thang đo khác.',
          'Luôn kết nối LED với một chân có hỗ trợ PWM (có dấu ~).',
        ],
        troubleshooting: [
          'Đèn LED không thay đổi độ sáng: kiểm tra xem bạn đã dùng đúng chân PWM chưa.',
          'Giá trị đọc không ổn định: có thể do nhiễu, thử thêm một tụ điện nhỏ hoặc tính trung bình nhiều lần đọc.',
          'Biến trở không hoạt động: kiểm tra lại cách nối dây, chân giữa luôn là chân tín hiệu.',
        ],
      },
    ],
    realWorldApplications: [
      'Nút vặn điều chỉnh âm lượng trên các hệ thống âm thanh.',
      'Công tắc điều chỉnh độ sáng (dimmer) cho đèn.',
      'Giao diện người dùng để điều khiển máy móc.',
      'Hệ thống hiệu chỉnh cảm biến.',
      'Các tác phẩm nghệ thuật tương tác.',
    ],
    competitions: [
      'Thử thách Thiết bị Tương tác',
      'Sáng tạo Giao diện Người dùng',
      'Tự động hóa Nhà thông minh',
      'Giải thưởng Công nghệ Hỗ trợ Người khuyết tật',
      'Cuộc thi Tương tác Người-Máy',
    ],
    relatedGames: [
      {
        gameId: 'reaction-time-test',
        title: 'Kiểm Tra Phản Xạ',
        connection: 'Áp dụng kiến thức đọc tín hiệu đầu vào từ nút nhấn và xử lý tín hiệu nhanh.',
        difficulty: 'Cơ bản',
      },
      {
        gameId: 'simon-says',
        title: 'Simon Says',
        connection: 'Kết hợp tín hiệu đầu vào từ nút nhấn và đầu ra là đèn LED để tạo ra một trò chơi tương tác.',
        difficulty: 'Trung bình',
      },
      {
        gameId: 'puzzle-solver',
        title: 'Giải Đố Logic',
        connection: 'Sử dụng các tín hiệu đầu vào analog và digital để điều khiển logic của trò chơi giải đố.',
        difficulty: 'Nâng cao',
      },
    ],
    vietnamContext: {
      title: 'Tương tác trong Sản phẩm Tiêu dùng Việt',
      content: [
        'Các sản phẩm gia dụng của các thương hiệu Việt như quạt điện, nồi cơm điện... đều sử dụng các nút nhấn và núm vặn làm giao diện điều khiển chính, dựa trên các nguyên lý tương tự.',
        'Trong các đồ án tốt nghiệp của sinh viên kỹ thuật tại Việt Nam, việc tạo ra một giao diện điều khiển từ các nút nhấn và biến trở là một kỹ năng cơ bản và bắt buộc.',
        'Các mô hình học cụ STEM cho trẻ em thường bao gồm các bộ kit cho phép các em tạo ra các sản phẩm tương tác đơn giản như đàn piano mini, hộp trò chơi phản xạ...',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Tuấn Anh',
      title: 'Kỹ sư Thiết kế Sản phẩm',
      company: 'Công ty Rạng Đông',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-tuan-anh',
      quote:
        'Thiết kế một sản phẩm tốt không chỉ nằm ở tính năng, mà còn ở trải nghiệm người dùng. Cách người dùng tương tác với sản phẩm qua một nút nhấn hay một núm vặn là điểm chạm đầu tiên. Hiểu rõ cách đọc và xử lý các tín hiệu đầu vào này là nền tảng để tạo ra những sản phẩm thân thiện và thông minh.',
    },
    quizzes: [
      {
        question: 'Tại sao nên dùng `INPUT_PULLUP` thay vì dùng một điện trở kéo lên bên ngoài?',
        options: [
          'Để tiết kiệm chi phí và không gian trên breadboard',
          'Để tín hiệu ổn định hơn',
          'Để tiêu thụ ít điện năng hơn',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 3,
        explanation:
          '`INPUT_PULLUP` kích hoạt một điện trở đã có sẵn bên trong vi điều khiển, giúp mạch điện gọn gàng hơn, tiết kiệm chi phí và đảm bảo tín hiệu luôn ở trạng thái ổn định (HIGH) khi nút không được nhấn.',
      },
      {
        question: 'Hàm `analogRead()` đọc giá trị từ đâu?',
        options: [
          'Từ các chân digital',
          'Từ các chân có ký hiệu ~',
          'Từ các chân có ký hiệu A (A0, A1, ...)',
          'Từ chân USB',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các chân có ký hiệu A (A0, A1, A2, ...) là các chân đầu vào analog, được kết nối với bộ chuyển đổi ADC (Analog-to-Digital Converter) để đọc các giá trị điện áp liên tục.',
      },
    ],
  },
  {
    id: 'arduino-sensors',
    title: 'Làm Việc Với Cảm Biến',
    description:
      'Khám phá bí mật của môi trường xung quanh qua các cảm biến hiện đại! Đo nhiệt độ, độ ẩm, ánh sáng, chuyển động... và biến dữ liệu thành các giải pháp thông minh cho nhà ở, nông nghiệp và an ninh.',
    difficulty: 'Trung bình',
    duration: '90 phút',
    category: 'sensors',
    objectives: [
      'Hiểu cách hoạt động của các loại cảm biến phổ biến (nhiệt độ, ánh sáng, chuyển động).',
      'Đọc dữ liệu từ cảm biến nhiệt độ và độ ẩm DHT22.',
      'Sử dụng cảm biến ánh sáng (LDR - Quang trở) để đo cường độ sáng.',
      'Kết hợp nhiều cảm biến trong một dự án.',
      'Xử lý, hiệu chỉnh và hiển thị dữ liệu từ cảm biến.',
    ],
    materials: [
      'Arduino Uno',
      'Cảm biến nhiệt độ/độ ẩm DHT22',
      'Quang trở (LDR)',
      'Cảm biến chuyển động PIR',
      'Cảm biến siêu âm HC-SR04',
      'Điện trở 10kΩ',
      'Màn hình LCD 16x2 (tùy chọn)',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    codeExample: `/*
  Hệ thống Giám sát Đa cảm biến
  Đọc nhiệt độ, độ ẩm và ánh sáng và hiển thị qua Serial Monitor
*/

#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22
#define LDR_PIN A0

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("Hệ thống Giám sát Đa cảm biến đã khởi động");
}

void loop() {
  // Đợi vài giây giữa các lần đọc
  delay(2000);

  // Đọc nhiệt độ và độ ẩm
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  // Đọc cường độ ánh sáng
  int lightLevel = analogRead(LDR_PIN);
  int lightPercent = map(lightLevel, 0, 1023, 0, 100); // Giả sử 0 là tối nhất, 1023 sáng nhất
  
  // Kiểm tra lỗi cảm biến
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Lỗi đọc dữ liệu từ cảm biến DHT!");
    return;
  }
  
  // Hiển thị dữ liệu
  Serial.println("=== Dữ liệu Cảm biến ===");
  Serial.print("Nhiệt độ: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  Serial.print("Độ ẩm: ");
  Serial.print(humidity);
  Serial.println("%");
  
  Serial.print("Cường độ sáng: ");
  Serial.print(lightPercent);
  Serial.println("%");
  
  Serial.println();
}`,
    exercises: [
      {
        id: 'ex1-temperature-alert',
        title: 'Hệ Thống Cảnh Báo Nhiệt Độ',
        description: 'Tạo một hệ thống cảnh báo bằng đèn LED và còi khi nhiệt độ vượt một ngưỡng nhất định.',
        difficulty: 'Trung bình',
        code: `#include <DHT.h>

#define DHT_PIN 2
#define LED_PIN 13
#define BUZZER_PIN 8
#define TEMP_THRESHOLD 30.0 // Ngưỡng nhiệt độ 30°C

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  float temperature = dht.readTemperature();
  
  if (!isnan(temperature)) {
    Serial.print("Nhiệt độ: ");
    Serial.println(temperature);
    
    if (temperature > TEMP_THRESHOLD) {
      // Kích hoạt cảnh báo
      digitalWrite(LED_PIN, HIGH);
      tone(BUZZER_PIN, 1000, 500); // Kêu trong 0.5 giây
      Serial.println("CẢNH BÁO: Nhiệt độ cao!");
    } else {
      digitalWrite(LED_PIN, LOW);
    }
  }
  
  delay(1000);
}`,
        expectedOutput: 'Đèn LED và còi sẽ được kích hoạt khi nhiệt độ đo được vượt quá 30°C.',
        hints: [
          'Sử dụng `#define` để dễ dàng thay đổi ngưỡng nhiệt độ.',
          'Hàm `isnan()` dùng để kiểm tra xem cảm biến có đọc được giá trị hợp lệ không.',
          'Hàm `tone()` được dùng để tạo ra âm thanh cảnh báo từ còi.',
          'Bạn có thể điều chỉnh `TEMP_THRESHOLD` cho phù hợp với môi trường của bạn.',
        ],
        troubleshooting: [
          'Cảm biến không đọc được giá trị (NaN): kiểm tra lại dây nối và nguồn điện.',
          'Báo động giả: điều chỉnh lại ngưỡng nhiệt độ hoặc thêm bộ lọc để làm mịn dữ liệu.',
          'Còi không kêu: kiểm tra lại kết nối và chân cắm.',
          'Giá trị đọc không ổn định: thêm một khoảng `delay` dài hơn giữa các lần đọc.',
        ],
      },
      {
        id: 'ex2-smart-lighting',
        title: 'Hệ Thống Đèn Thông Minh',
        description: 'Đèn sẽ tự động bật khi trời tối và có người di chuyển qua, và tự tắt sau một khoảng thời gian.',
        difficulty: 'Khó',
        code: `#define LDR_PIN A0
#define PIR_PIN 3
#define LED_PIN 9
#define LIGHT_THRESHOLD 300 // Ngưỡng ánh sáng yếu
#define AUTO_OFF_TIME 10000  // Tự tắt sau 10 giây

int lightLevel = 0;
bool motionDetected = false;
unsigned long lastMotionTime = 0;
bool ledState = false;

void setup() {
  Serial.begin(9600);
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("Hệ thống Đèn Thông Minh sẵn sàng");
}

void loop() {
  lightLevel = analogRead(LDR_PIN);
  motionDetected = digitalRead(PIR_PIN);
  
  if (motionDetected) {
    lastMotionTime = millis();
    Serial.println("Phát hiện chuyển động!");
  }
  
  // Logic điều khiển đèn
  if (lightLevel < LIGHT_THRESHOLD && (millis() - lastMotionTime) < AUTO_OFF_TIME) {
    if (!ledState) {
      digitalWrite(LED_PIN, HIGH);
      ledState = true;
      Serial.println("Đèn BẬT - Trời tối và có chuyển động");
    }
  } else {
    if (ledState) {
      digitalWrite(LED_PIN, LOW);
      ledState = false;
      Serial.println("Đèn TẮT");
    }
  }
  
  delay(100);
}`,
        expectedOutput:
          'Đèn LED tự động bật sáng khi quang trở nhận thấy trời tối VÀ cảm biến PIR phát hiện có chuyển động. Đèn sẽ tự tắt sau 10 giây không có chuyển động.',
        hints: [
          'Sử dụng hàm `millis()` để theo dõi thời gian mà không làm chương trình bị dừng lại như `delay()`.',
          'Kết hợp điều kiện từ nhiều cảm biến bằng các toán tử logic (&&, ||).',
          'Sử dụng một biến trạng thái (state machine) để quản lý trạng thái bật/tắt của đèn.',
          'Các giá trị ngưỡng (threshold) có thể cần được hiệu chỉnh cho phù hợp với môi trường thực tế.',
        ],
        troubleshooting: [
          'Cảm biến PIR quá nhạy: điều chỉnh chiết áp độ nhạy trên cảm biến.',
          'Đèn không tắt: kiểm tra lại logic thời gian với `millis()`.',
          'Giá trị LDR không chính xác: hiệu chỉnh lại ngưỡng ánh sáng.',
          'Hệ thống bị trễ: giảm thời gian `delay` trong vòng lặp chính.',
        ],
      },
    ],
    realWorldApplications: [
      'Hệ thống tự động hóa nhà thông minh (điều hòa, đèn, rèm cửa).',
      'Hệ thống kiểm soát và tiết kiệm năng lượng trong các tòa nhà.',
      'Hệ thống an ninh và giám sát.',
      'Hệ thống giám sát nông nghiệp (độ ẩm đất, nhiệt độ chuồng trại).',
      'Trạm ghi nhận dữ liệu môi trường.',
    ],
    competitions: [
      'Thử thách Nhà thông minh',
      'Cuộc thi Giám sát Môi trường',
      'Sáng tạo Tiết kiệm Năng lượng',
      'Giải thưởng IoT vì Sự bền vững',
      'Cuộc thi Mạng lưới Cảm biến',
    ],
    vietnamContext: {
      title: 'Cảm biến trong Nông nghiệp và Đô thị Thông minh tại Việt Nam',
      content: [
        'Nông nghiệp công nghệ cao ở Việt Nam (ví dụ: các trang trại hoa ở Đà Lạt, rau sạch ở Vingroup) ứng dụng rộng rãi cảm biến để giám sát nhiệt độ, độ ẩm, ánh sáng, giúp tối ưu hóa năng suất.',
        'Các dự án "Thành phố Thông minh" tại Bình Dương, Đà Nẵng đang triển khai các trạm quan trắc môi trường sử dụng cảm biến để theo dõi chất lượng không khí và tiếng ồn.',
        'Cảm biến chuyển động PIR là thành phần không thể thiếu trong các hệ thống chống trộm phổ biến được lắp đặt tại các gia đình và cửa hàng ở Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Chị Võ Thị Sương',
      title: 'Kỹ sư Nông nghiệp Công nghệ cao',
      company: 'Dalat Hasfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=vo-thi-suong',
      quote:
        'Công việc của tôi là "lắng nghe" cây trồng nói chuyện qua các con số từ cảm biến. Dữ liệu về độ ẩm đất, nhiệt độ không khí cho chúng tôi biết chính xác khi nào cây cần nước, cần ánh sáng. Arduino và các cảm biến đã cách mạng hóa ngành nông nghiệp truyền thống.',
    },
    quizzes: [
      {
        question: 'Cảm biến DHT22 có thể đo được những đại lượng nào?',
        options: ['Chỉ nhiệt độ', 'Nhiệt độ và áp suất', 'Nhiệt độ và độ ẩm', 'Ánh sáng và âm thanh'],
        correctAnswerIndex: 2,
        explanation:
          'DHT22 là một cảm biến phổ biến có khả năng đo đồng thời cả nhiệt độ và độ ẩm của môi trường xung quanh.',
      },
      {
        question: 'Cảm biến chuyển động PIR (Passive Infrared) hoạt động dựa trên nguyên tắc nào?',
        options: [
          'Phát ra sóng siêu âm',
          'Đo sự thay đổi của ánh sáng',
          'Phát hiện bức xạ hồng ngoại (thân nhiệt) từ các vật thể chuyển động',
          'Đo khoảng cách',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Cảm biến PIR hoạt động một cách thụ động bằng cách phát hiện sự thay đổi đột ngột của bức xạ hồng ngoại, vốn được phát ra từ các cơ thể sống như người và động vật.',
      },
    ],
  },
  {
    id: 'arduino-communication',
    title: 'Giao Tiếp và Mạng (Networking)',
    description:
      'Kết nối Arduino với thế giới! Học cách truyền và nhận dữ liệu qua các giao thức Serial, I2C, SPI, xây dựng một web server, gửi dữ liệu lên đám mây (cloud) và điều khiển thiết bị từ xa qua WiFi/Bluetooth. Mở rộng khả năng sáng tạo của bạn đến vô hạn.',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    category: 'communication',
    objectives: [
      'Hiểu các giao thức giao tiếp phổ biến (Serial, I2C, SPI).',
      'Giao tiếp với các thiết bị ngoại vi qua I2C (ví dụ: màn hình OLED).',
      'Thiết lập giao tiếp WiFi với bo mạch ESP32.',
      'Tạo một web server đơn giản để hiển thị dữ liệu.',
      'Gửi dữ liệu cảm biến lên các nền tảng đám mây (cloud platforms).',
    ],
    materials: [
      'Bo mạch ESP32 DevKit',
      'Màn hình OLED 128x64 (I2C)',
      'Module thời gian thực RTC DS3231',
      'Module thẻ nhớ MicroSD',
      'Breadboard và dây nối',
      'Điểm truy cập WiFi',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    codeExample: `/*
  Web Server trên ESP32 với Dữ liệu Cảm biến
  Tạo một giao diện web để hiển thị dữ liệu từ cảm biến
*/

#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

const char* ssid = "TenWiFiCuaBan";
const char* password = "MatKhauWiFi";

#define DHT_PIN 4
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
WebServer server(80);

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  // Kết nối WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Đang kết nối WiFi...");
  }
  
  Serial.println("Đã kết nối WiFi!");
  Serial.print("Địa chỉ IP: ");
  Serial.println(WiFi.localIP());
  
  // Định nghĩa các đường dẫn (routes)
  server.on("/", handleRoot);
  server.on("/data", handleData);
  server.begin();
  
  Serial.println("Web server đã khởi động");
}

void handleRoot() {
  String html = R"(
    <!DOCTYPE html>
    <html>
    <head>
      <title>Bảng điều khiển Cảm biến Arduino</title>
      <meta http-equiv='refresh' content='5'>
    </head>
    <body>
      <h1>Hệ thống Giám sát Cảm biến</h1>
      <div id='data'>Đang tải...</div>
      <script>
        setInterval(function() {
          fetch('/data')
            .then(response => response.json())
            .then(data => {
              document.getElementById('data').innerHTML = 
                '<p>Nhiệt độ: ' + data.temperature + '°C</p>' +
                '<p>Độ ẩm: ' + data.humidity + '%</p>';
            });
        }, 2000);
      </script>
    </body>
    </html>
  )";
  
  server.send(200, "text/html", html);
}

void handleData() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  
  String json = "{";
  json += "\\"temperature\\":" + String(temp) + ",";
  json += "\\"humidity\\":" + String(hum);
  json += "}";
  
  server.send(200, "application/json", json);
}

void loop() {
  server.handleClient();
  delay(10);
}`,
    exercises: [
      {
        id: 'ex1-i2c-oled',
        title: 'Hiển Thị Dữ Liệu Trên Màn hình OLED',
        description: 'Sử dụng giao thức I2C để hiển thị dữ liệu từ cảm biến lên một màn hình OLED.',
        difficulty: 'Trung bình',
        code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
DHT dht(2, DHT22);

void setup() {
  Serial.begin(9600);
  
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("Khởi tạo SSD1306 thất bại");
    return;
  }
  
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  
  display.clearDisplay();
  display.setCursor(0,0);
  display.println("Giam sat moi truong");
  display.println();
  display.print("Nhiet do: ");
  display.print(temp);
  display.println(" C");
  display.print("Do am: ");
  display.print(hum);
  display.println(" %");
  
  display.display();
  delay(2000);
}`,
        expectedOutput: 'Màn hình OLED hiển thị giá trị nhiệt độ và độ ẩm được cập nhật theo thời gian thực.',
        hints: [
          'Cần thư viện `Wire.h` cho giao tiếp I2C.',
          'Sử dụng các thư viện của Adafruit để điều khiển màn hình OLED.',
          'Luôn gọi `display.clearDisplay()` trước khi viết dữ liệu mới lên màn hình.',
          'Hàm `display.display()` là hàm cuối cùng để cập nhật nội dung lên màn hình.',
        ],
        troubleshooting: [
          'Màn hình không hiển thị gì: kiểm tra lại địa chỉ I2C của màn hình (thường là 0x3C hoặc 0x3D).',
          'Chữ bị cắt hoặc hiển thị sai: kiểm tra lại vị trí con trỏ (`setCursor`).',
          'Lỗi thư viện: đảm bảo đã cài đặt đúng và đủ các thư viện cần thiết.',
          'Lỗi I2C: kiểm tra lại kết nối dây SDA và SCL.',
        ],
      },
      {
        id: 'ex2-iot-dashboard',
        title: 'Bảng Điều Khiển IoT với Điều khiển từ Di động',
        description: 'Tạo một bảng điều khiển web có thể truy cập và điều khiển từ điện thoại di động.',
        difficulty: 'Khó',
        code: `#include <WiFi.h>
#include <ESPAsyncWebServer.h>

const char* ssid = "TenWiFiCuaBan";
const char* password = "MatKhauWiFi";

AsyncWebServer server(80);

int ledPin = 2;
bool ledState = false;

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <title>Bảng Điều Khiển IoT</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial; text-align: center; margin: 0px auto; padding-top: 30px; }
    .button { background-color: #4CAF50; border: none; color: white; padding: 16px 40px;
             text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer; }
    .button2 { background-color: #555555; }
  </style>
</head>
<body>
  <h1>Điều Khiển Thiết Bị IoT</h1>
  <p>Trạng thái LED: <span id="state">%STATE%</span></p>
  <p><a href="/led/on"><button class="button">BẬT</button></a></p>
  <p><a href="/led/off"><button class="button button2">TẮT</button></a></p>
</body>
</html>
)rawliteral";

String processor(const String& var){
  if(var == "STATE"){
    return ledState ? "BẬT" : "TẮT";
  }
  return String();
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Đang kết nối...");
  }
  
  Serial.println(WiFi.localIP());
  
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/html", index_html, processor);
  });
  
  server.on("/led/on", HTTP_GET, [](AsyncWebServerRequest *request){
    ledState = true;
    digitalWrite(ledPin, HIGH);
    request->send_P(200, "text/html", index_html, processor);
  });
  
  server.on("/led/off", HTTP_GET, [](AsyncWebServerRequest *request){
    ledState = false;
    digitalWrite(ledPin, LOW);
    request->send_P(200, "text/html", index_html, processor);
  });
  
  server.begin();
}

void loop() {
  // Server chạy ngầm
}`,
        expectedOutput:
          'Một giao diện web đáp ứng (responsive) cho phép bật/tắt đèn LED từ trình duyệt trên điện thoại thông minh.',
        hints: [
          'Sử dụng `AsyncWebServer` để có hiệu năng tốt hơn, không làm block vòng lặp `loop()`.',
          'Nhúng mã HTML trực tiếp vào code bằng cú pháp `PROGMEM`.',
          'Sử dụng CSS để thiết kế giao diện đáp ứng (mobile-responsive).',
          'Quản lý trạng thái để cập nhật giao diện người dùng.',
        ],
        troubleshooting: [
          'Điện thoại không tải được trang: đảm bảo điện thoại và ESP32 đang kết nối cùng một mạng WiFi.',
          'Các nút bấm không hoạt động: kiểm tra lại định nghĩa các route trong code.',
          'Lỗi CSS: xác thực lại cú pháp HTML và CSS.',
          'Trạng thái không cập nhật: kiểm tra lại hàm thay thế chuỗi (processor function).',
        ],
      },
    ],
    realWorldApplications: [
      'Giám sát và điều khiển thiết bị IoT.',
      'Thu thập dữ liệu cảm biến từ xa.',
      'Hệ thống tự động hóa nhà thông minh.',
      'Các giải pháp giám sát công nghiệp.',
      'Hệ thống tự động hóa nông nghiệp.',
    ],
    competitions: [
      'Thử thách Sáng tạo IoT',
      'Cuộc thi Giải pháp Thành phố Thông minh',
      'Cuộc thi IoT trong Công nghiệp',
      'Giải thưởng Thiết bị Kết nối',
      'Thử thách Sáng tạo Không dây',
    ],
    vietnamContext: {
      title: 'IoT và Làn sóng Khởi nghiệp Công nghệ tại Việt Nam',
      content: [
        'Internet of Things (IoT) là một trong những lĩnh vực công nghệ mũi nhọn được chính phủ Việt Nam khuyến khích phát triển.',
        'Nhiều công ty khởi nghiệp (startup) công nghệ tại Việt Nam đang tập trung vào các giải pháp IoT cho nông nghiệp thông minh, nhà thông minh, và logistics.',
        'Các nền tảng cloud như FPT HI GIO Cloud, Viettel Cloud cũng cung cấp các dịch vụ IoT, tạo hệ sinh thái cho các nhà phát triển Việt Nam xây dựng ứng dụng của mình.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hồng Việt',
      title: 'Giám đốc Công nghệ (CTO)',
      company: 'FPT Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hong-viet',
      quote:
        'IoT không còn là tương lai, nó là hiện tại. Khả năng kết nối các thiết bị vật lý với internet, thu thập dữ liệu và điều khiển chúng từ xa đang thay đổi mọi ngành công nghiệp. Nắm vững kỹ năng này sẽ mở ra cho bạn vô số cơ hội nghề nghiệp trong cuộc Cách mạng Công nghiệp 4.0 tại Việt Nam.',
    },
    quizzes: [
      {
        question:
          'Giao thức I2C (Inter-Integrated Circuit) cần bao nhiêu dây để giao tiếp (không tính dây nguồn và đất)?',
        options: ['1 dây', '2 dây (SDA và SCL)', '4 dây (MISO, MOSI, SCK, SS)', '8 dây'],
        correctAnswerIndex: 1,
        explanation:
          'I2C là một giao thức hiệu quả vì chỉ cần 2 dây tín hiệu: SDA (Serial Data) để truyền dữ liệu và SCL (Serial Clock) để đồng bộ tín hiệu, cho phép nhiều thiết bị cùng kết nối trên một bus.',
      },
      {
        question: 'Tại sao ESP32 lại phổ biến hơn Arduino Uno cho các dự án IoT?',
        options: [
          'Vì nó rẻ hơn',
          'Vì nó có nhiều chân analog hơn',
          'Vì nó có tích hợp sẵn WiFi và Bluetooth',
          'Vì nó nhỏ hơn',
        ],
        correctAnswerIndex: 2,
        explanation:
          'ESP32 là một lựa chọn hàng đầu cho các dự án IoT vì nó được tích hợp sẵn các module WiFi và Bluetooth, giúp việc kết nối mạng trở nên dễ dàng và gọn nhẹ hơn rất nhiều so với việc phải gắn thêm shield cho Arduino Uno.',
      },
    ],
  },
  {
    id: 'arduino-advanced-projects',
    title: 'Dự Án Arduino Nâng Cao',
    description:
      'Khám phá sức mạnh thực sự của Arduino qua một dự án IoT thông minh! Tự tay thiết kế một trạm giám sát môi trường hiện đại, kết nối nhiều cảm biến, truyền dữ liệu lên đám mây, xử lý thời gian thực, tạo giao diện trực quan và điều khiển thiết bị từ xa. Làm chủ công nghệ, sáng tạo giải pháp phục vụ cuộc sống và chinh phục các cuộc thi lớn! 🚀',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    category: 'projects',
    objectives: [
      'Thiết kế một hệ thống Arduino phức tạp từ đầu đến cuối.',
      'Tích hợp nhiều loại cảm biến và cơ cấu chấp hành (actuators).',
      'Thực thi xử lý dữ liệu thời gian thực.',
      'Tạo một giao diện người dùng chuyên nghiệp để giám sát và điều khiển.',
      'Triển khai dự án với khả năng xử lý lỗi mạnh mẽ.',
    ],
    materials: [
      'Bo mạch ESP32 DevKit',
      'Nhiều cảm biến (DHT22, siêu âm, PIR)',
      'Động cơ servo, động cơ bước',
      'Màn hình OLED, màn hình LCD',
      'Module thẻ nhớ MicroSD',
      'Module thời gian thực RTC',
      'Nguồn điện và pin dự phòng',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=HWrgKdOc5NA',
    codeExample: `/*
  Trạm Giám sát Môi trường Thông minh
  Một dự án IoT hoàn chỉnh với nhiều cảm biến và tích hợp đám mây
*/

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include "time.h"

// Cấu hình
const char* ssid = "TenWiFiCuaBan";
const char* password = "MatKhauWiFi";
const char* serverURL = "http://your-api-endpoint.com/data";

// Cảm biến
#define DHT_PIN 4
#define LDR_PIN A0
#define SOIL_PIN A1
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

// Cấu trúc dữ liệu
struct SensorData {
  float temperature;
  float humidity;
  int lightLevel;
  int soilMoisture;
  String timestamp;
};

// Thời gian
unsigned long lastReading = 0;
unsigned long lastUpload = 0;
const unsigned long READING_INTERVAL = 5000;   // 5 giây
const unsigned long UPLOAD_INTERVAL = 300000;  // 5 phút

void setup() {
  Serial.begin(115200);
  
  // Khởi tạo cảm biến
  dht.begin();
  
  // Khởi tạo màn hình
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("Khởi tạo SSD1306 thất bại");
  }
  
  // Kết nối WiFi
  connectWiFi();
  
  // Cấu hình thời gian
  configTime(7 * 3600, 0, "pool.ntp.org");
  
  Serial.println("Trạm Giám sát Môi trường sẵn sàng");
}

void loop() {
  unsigned long currentTime = millis();
  
  // Đọc cảm biến định kỳ
  if (currentTime - lastReading >= READING_INTERVAL) {
    SensorData data = readSensors();
    displayData(data);
    lastReading = currentTime;
    
    // Tải dữ liệu lên định kỳ
    if (currentTime - lastUpload >= UPLOAD_INTERVAL) {
      uploadData(data);
      lastUpload = currentTime;
    }
  }
  
  delay(100);
}

SensorData readSensors() {
  SensorData data;
  
  data.temperature = dht.readTemperature();
  data.humidity = dht.readHumidity();
  data.lightLevel = map(analogRead(LDR_PIN), 0, 4095, 0, 100);
  data.soilMoisture = map(analogRead(SOIL_PIN), 0, 4095, 100, 0);
  data.timestamp = getTimeString();
  
  // Xác thực dữ liệu đọc
  if (isnan(data.temperature)) data.temperature = -999;
  if (isnan(data.humidity)) data.humidity = -999;
  
  return data;
}

void displayData(SensorData data) {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  
  display.setCursor(0, 0);
  display.println("Giam sat Moi truong");
  display.println();
  
  display.print("Nhiet do: ");
  display.print(data.temperature);
  display.println(" C");
  
  display.print("Do am: ");
  display.print(data.humidity);
  display.println("%");
  
  display.print("Anh sang: ");
  display.print(data.lightLevel);
  display.println("%");
  
  display.print("Do am dat: ");
  display.print(data.soilMoisture);
  display.println("%");
  
  display.display();
}

void uploadData(SensorData data) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");
    
    // Tạo payload JSON
    StaticJsonDocument<300> doc;
    doc["temperature"] = data.temperature;
    doc["humidity"] = data.humidity;
    doc["light"] = data.lightLevel;
    doc["soil"] = data.soilMoisture;
    doc["timestamp"] = data.timestamp;
    
    String jsonString;
    serializeJson(doc, jsonString);
    
    int httpResponseCode = http.POST(jsonString);
    
    if (httpResponseCode > 0) {
      Serial.print("Dữ liệu đã được tải lên thành công: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Tải lên thất bại: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  }
}

void connectWiFi() {
  WiFi.begin(ssid, password);
  Serial.print("Đang kết nối WiFi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();
  Serial.print("Đã kết nối! IP: ");
  Serial.println(WiFi.localIP());
}

String getTimeString() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    return "N/A";
  }
  
  char timeStr[30];
  strftime(timeStr, sizeof(timeStr), "%Y-%m-%d %H:%M:%S", &timeinfo);
  return String(timeStr);
}`,
    exercises: [
      {
        id: 'ex1-weather-station',
        title: 'Trạm Thời Tiết Thông Minh',
        description: 'Tạo một trạm thời tiết hoàn chỉnh với khả năng dự báo thời tiết đơn giản.',
        difficulty: 'Khó',
        code: `// Trạm Thời tiết với Thuật toán Dự báo
#include <DHT.h>
#include <Adafruit_BMP280.h>
#include <WiFi.h>

DHT dht(4, DHT22);
Adafruit_BMP280 bmp;

struct WeatherData {
  float temp, humidity, pressure;
  float dewPoint, heatIndex;
  String forecast;
};

WeatherData readWeather() {
  WeatherData data;
  data.temp = dht.readTemperature();
  data.humidity = dht.readHumidity();
  data.pressure = bmp.readPressure() / 100.0F;
  
  // Tính toán các giá trị dẫn xuất
  data.dewPoint = calculateDewPoint(data.temp, data.humidity);
  data.heatIndex = calculateHeatIndex(data.temp, data.humidity);
  data.forecast = predictWeather(data.pressure);
  
  return data;
}

String predictWeather(float pressure) {
  static float lastPressure = 0;
  float trend = pressure - lastPressure;
  lastPressure = pressure;
  
  if (pressure > 1013) {
    return trend > 0 ? "Nắng đẹp" : "Nắng nhẹ";
  } else if (pressure > 1000) {
    return trend > 0 ? "Nhiều mây" : "Có khả năng mưa";
  } else {
    return "Sắp có bão";
  }
}`,
        expectedOutput: 'Một trạm thời tiết có khả năng đưa ra các dự báo thời tiết cơ bản dựa trên áp suất.',
        hints: [
          'Kết hợp nhiều cảm biến để có dữ liệu toàn diện.',
          'Thực thi các thuật toán dự báo đơn giản.',
          'Theo dõi dữ liệu lịch sử để xác định xu hướng.',
          'Tích hợp API thời tiết để tăng độ chính xác.',
        ],
        troubleshooting: [
          'Xung đột cảm biến: kiểm tra địa chỉ I2C.',
          'Dự báo không chính xác: tinh chỉnh lại thuật toán.',
          'Lỗi ghi dữ liệu: thực thi xử lý lỗi.',
          'Tiêu thụ điện năng: tối ưu hóa các chế độ ngủ.',
        ],
      },
      {
        id: 'ex2-smart-garden',
        title: 'Hệ Thống Vườn Thông Minh',
        description: 'Một khu vườn tự động với hệ thống tưới nước, chiếu sáng và giám sát.',
        difficulty: 'Khó',
        code: `// Hệ thống Tự động hóa Vườn Thông minh
#include <ESP32Servo.h>
#include <WiFi.h>
#include <ThingSpeak.h>

Servo waterValve;
WiFiClient client;

#define SOIL_PIN A0
#define WATER_PUMP 5
#define GROW_LIGHT 18
#define LDR_PIN A1

struct GardenStatus {
  int soilMoisture;
  int lightLevel;
  bool pumpActive;
  bool lightActive;
  unsigned long lastWatering;
};

GardenStatus garden;

void setup() {
  Serial.begin(115200);
  waterValve.attach(WATER_PUMP);
  pinMode(GROW_LIGHT, OUTPUT);
  
  connectWiFi();
  ThingSpeak.begin(client);
}

void loop() {
  updateSensors();
  autoWatering();
  autoLighting();
  logData();
  
  delay(30000); // Kiểm tra mỗi 30 giây
}

void autoWatering() {
  if (garden.soilMoisture < 30 && 
      millis() - garden.lastWatering > 3600000) { // 1 giờ
    
    Serial.println("Bắt đầu tưới...");
    waterValve.write(90); // Mở van
    garden.pumpActive = true;
    
    delay(5000); // Tưới trong 5 giây
    
    waterValve.write(0); // Đóng van
    garden.pumpActive = false;
    garden.lastWatering = millis();
    
    Serial.println("Tưới xong");
  }
}

void autoLighting() {
  // Bật đèn trồng cây khi ánh sáng tự nhiên yếu
  if (garden.lightLevel < 20) {
    digitalWrite(GROW_LIGHT, HIGH);
    garden.lightActive = true;
  } else {
    digitalWrite(GROW_LIGHT, LOW);
    garden.lightActive = false;
  }
}`,
        expectedOutput:
          'Một hệ thống có khả năng tự động tưới cây khi đất khô và điều khiển đèn trồng cây dựa trên ánh sáng tự nhiên.',
        hints: [
          'Sử dụng các bộ điều khiển thời gian để tránh tưới quá nhiều.',
          'Lập lịch chiếu sáng theo nhịp sinh học tự nhiên.',
          'Giám sát từ xa qua ứng dụng di động.',
          'Có các nút điều khiển thủ công dự phòng.',
        ],
        troubleshooting: [
          'Bơm không hoạt động: kiểm tra nguồn và rơ le.',
          'Tưới quá nhiều: điều chỉnh ngưỡng độ ẩm.',
          'Thời gian chiếu sáng sai: kiểm tra độ chính xác của RTC.',
          'Vấn đề kết nối: thực thi chế độ ngoại tuyến.',
        ],
      },
    ],
    realWorldApplications: [
      'Hệ thống tự động hóa nông nghiệp.',
      'Quản lý tòa nhà thông minh.',
      'Trạm nghiên cứu môi trường.',
      'Giám sát quy trình công nghiệp.',
      'Nền tảng trình diễn giáo dục.',
    ],
    competitions: [
      'Thử thách Nông nghiệp Thông minh',
      'Giải thưởng Sáng tạo Môi trường',
      'Cuộc thi Công nghệ Bền vững',
      'IoT vì Lợi ích Xã hội',
      'Cuộc thi Thiết kế Kỹ thuật',
    ],
    vietnamContext: {
      title: 'Dự án Tốt nghiệp và Khởi nghiệp Sinh viên',
      content: [
        'Các dự án nâng cao như trạm quan trắc môi trường hay vườn thông minh là những đề tài phổ biến và được đánh giá cao trong các đồ án tốt nghiệp của sinh viên ngành kỹ thuật, công nghệ thông tin tại Việt Nam.',
        'Nhiều nhóm sinh viên đã phát triển các dự án này thành các sản phẩm khởi nghiệp, tham gia các cuộc thi như "Startup Wheel", "VietChallenge" và nhận được vốn đầu tư.',
        'Việc làm chủ một dự án phức tạp từ đầu đến cuối thể hiện đầy đủ các kỹ năng mà nhà tuyển dụng trong ngành công nghệ tại Việt Nam đang tìm kiếm: khả năng giải quyết vấn đề, tư duy hệ thống, và kỹ năng thực hành.',
      ],
    },
    careerConnect: {
      name: 'Ông Trương Gia Bình',
      title: 'Chủ tịch Hội đồng Quản trị',
      company: 'FPT Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-gia-binh',
      quote:
        'Việt Nam cần những kỹ sư không chỉ giỏi lý thuyết mà còn phải có khả năng tạo ra sản phẩm thực tế. Một dự án Arduino hoàn chỉnh, dù nhỏ, cũng cho thấy bạn có đủ đam mê và kỹ năng để biến ý tưởng thành hiện thực. Đó chính là tinh thần mà chúng tôi tìm kiếm.',
    },
    quizzes: [
      {
        question:
          'Tại sao cần phải có hàm `connectWiFi()` riêng biệt thay vì viết code kết nối trực tiếp trong `setup()`?',
        options: [
          'Để code trông đẹp hơn',
          'Để có thể gọi lại hàm này nếu kết nối bị mất và cần kết nối lại',
          'Để tiết kiệm bộ nhớ',
          'Không có lý do đặc biệt',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tách code kết nối WiFi ra một hàm riêng giúp chương trình trở nên module hóa. Quan trọng hơn, nó cho phép bạn có thể gọi lại hàm này trong `loop()` để tự động kết nối lại khi mất mạng, giúp hệ thống hoạt động ổn định hơn.',
      },
      {
        question: '`ArduinoJson` là thư viện dùng để làm gì?',
        options: ['Vẽ đồ thị', 'Nén dữ liệu', 'Tạo và phân tích cú pháp chuỗi JSON', 'Mã hóa dữ liệu'],
        correctAnswerIndex: 2,
        explanation:
          'JSON (JavaScript Object Notation) là định dạng dữ liệu phổ biến để giao tiếp với các API và dịch vụ web. Thư viện `ArduinoJson` giúp tạo (serialize) và đọc (deserialize) dữ liệu JSON một cách hiệu quả trên các vi điều khiển có bộ nhớ hạn chế.',
      },
    ],
  },
];

// Arduino programming concepts quiz
export const arduinoQuizzes = [
  {
    id: 'quiz-arduino-1',
    lessonId: 'arduino-setup',
    question: 'Hai hàm bắt buộc trong mọi chương trình Arduino là gì?',
    options: ['begin() và end()', 'setup() và loop()', 'start() và stop()', 'init() và main()'],
    correctAnswer: 1,
    explanation: 'setup() chạy một lần khi Arduino khởi động, loop() chạy liên tục sau đó.',
  },
  {
    id: 'quiz-arduino-2',
    lessonId: 'arduino-inputs',
    question: 'INPUT_PULLUP được sử dụng để làm gì?',
    options: ['Tăng điện áp đầu vào', 'Kích hoạt điện trở kéo lên nội bộ', 'Giảm nhiễu điện', 'Tăng tốc độ đọc'],
    correctAnswer: 1,
    explanation: 'INPUT_PULLUP kích hoạt điện trở kéo lên 20kΩ nội bộ, giúp pin đọc trạng thái button chính xác.',
  },
  {
    id: 'quiz-arduino-3',
    lessonId: 'arduino-sensors',
    question: 'Hàm nào được sử dụng để đọc giá trị analog?',
    options: ['digitalRead()', 'analogRead()', 'pinMode()', 'digitalWrite()'],
    correctAnswer: 1,
    explanation: 'analogRead() đọc giá trị từ 0-1023 từ các pin analog A0-A5.',
  },
  {
    id: 'quiz-arduino-4',
    lessonId: 'arduino-communication',
    question: 'Giao thức nào thường được sử dụng cho OLED display?',
    options: ['UART', 'SPI', 'I2C', 'USB'],
    correctAnswer: 2,
    explanation: 'I2C (Inter-Integrated Circuit) thường được sử dụng cho OLED displays vì chỉ cần 2 dây (SDA và SCL).',
  },
];

const arduinoData = {
  arduinoLessons,
  arduinoQuizzes,
};

export default arduinoData;
