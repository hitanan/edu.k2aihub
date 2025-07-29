// Robotics Education Module Data
// Comprehensive robotics learning content for K2AiHub education platform

export interface RoboticsLesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  duration: string;
  category: 'hardware' | 'programming' | 'projects' | 'theory';
  objectives: string[];
  materials: string[];
  codeExample?: string;
  videoUrl?: string;
  imageUrl: string;
  exercises: Exercise[];
  realWorldApplications: string[];
  competitions: string[];
  icon?: string;
  topics?: string[];
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  code?: string;
  expectedOutput?: string;
  hints: string[];
}

export const roboticsLessons: RoboticsLesson[] = [
  {
    id: 'basic-robotics-intro',
    title: 'Giới Thiệu Robotics Cơ Bản',
    description: 'Khái niệm cơ bản về robotics, các thành phần chính của robot và ứng dụng trong đời sống',
    difficulty: 'Cơ bản',
    duration: '45 phút',
    category: 'theory',
    icon: '🤖',
    topics: ['Robot cơ bản', 'Thành phần', 'Ứng dụng', 'Lý thuyết'],
    objectives: [
      'Hiểu khái niệm robot và robotics',
      'Nhận biết các thành phần chính của robot',
      'Phân biệt các loại robot khác nhau',
      'Hiểu ứng dụng robotics trong cuộc sống'
    ],
    materials: [
      'Slides giới thiệu robotics',
      'Video demo các loại robot',
      'Tài liệu tham khảo'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=gfOIs0gHC6M',
    exercises: [
      {
        id: 'ex1-robot-types',
        title: 'Phân Loại Robot',
        description: 'Phân loại các robot trong video theo chức năng và hình dạng',
        difficulty: 'Dễ',
        hints: [
          'Quan sát hình dạng và chức năng của robot',
          'Nhóm theo ứng dụng: công nghiệp, gia đình, y tế...',
          'Phân biệt robot di động và robot cố định'
        ]
      },
      {
        id: 'ex2-robot-components',
        title: 'Xác Định Thành Phần Robot',
        description: 'Chỉ ra các thành phần chính trong hình ảnh robot: cảm biến, bộ điều khiển, động cơ',
        difficulty: 'Trung bình',
        hints: [
          'Tìm phần "mắt" của robot (camera, cảm biến)',
          'Xác định phần "não" (vi xử lý)',
          'Nhận biết phần chuyển động (motor, bánh xe)'
        ]
      }
    ],
    realWorldApplications: [
      'Robot hút bụi thông minh (Roomba)',
      'Robot phẫu thuật trong y tế (Da Vinci)',
      'Robot sản xuất ô tô',
      'Robot giao hàng (Amazon Prime Air)',
      'Robot giúp việc gia đình'
    ],
    competitions: [
      'Cuộc thi Robot Việt Nam',
      'WRO (World Robot Olympiad)',
      'VEX Robotics Competition',
      'FIRST Robotics Competition',
      'RoboCup Junior'
    ]
  },
  {
    id: 'basic-electronics',
    title: 'Điện Tử Cơ Bản Cho Robotics',
    description: 'Kiến thức điện tử cần thiết để hiểu cách robot hoạt động: LED, nút nhấn, cảm biến',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'hardware',
    objectives: [
      'Hiểu các linh kiện điện tử cơ bản',
      'Đọc và vẽ sơ đồ mạch đơn giản',
      'Tính toán điện trở và điện áp',
      'Kết nối mạch cơ bản trên breadboard'
    ],
    materials: [
      'Breadboard',
      'LED các màu',
      'Điện trở',
      'Nút nhấn',
      'Pin 9V',
      'Dây nối'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=6WReFkfrUIk',
    exercises: [
      {
        id: 'ex1-led-circuit',
        title: 'Mạch LED Đơn Giản',
        description: 'Tạo mạch LED cơ bản với điện trở bảo vệ',
        difficulty: 'Dễ',
        hints: [
          'LED có cực dương (+) và cực âm (-)',
          'Điện trở bảo vệ để LED không bị cháy',
          'Kiểm tra kết nối trước khi cấp điện'
        ]
      },
      {
        id: 'ex2-button-led',
        title: 'Điều Khiển LED Bằng Nút Nhấn',
        description: 'Tạo mạch nút nhấn để bật/tắt LED',
        difficulty: 'Trung bình',
        hints: [
          'Nút nhấn hoạt động như công tắc',
          'Sử dụng pull-up hoặc pull-down resistor',
          'Kiểm tra trạng thái nút nhấn'
        ]
      }
    ],
    realWorldApplications: [
      'Đèn LED báo hiệu trong robot',
      'Nút khẩn cấp dừng robot',
      'Cảm biến ánh sáng tự động',
      'Màn hình hiển thị trạng thái robot',
      'Hệ thống cảnh báo an toàn'
    ],
    competitions: [
      'Cuộc thi Robot Line Following',
      'Sumo Robot Competition',
      'Micro:bit Challenge',
      'Arduino Day Vietnam',
      'Maker Faire Vietnam'
    ]
  },
  {
    id: 'microcontroller-basics',
    title: 'Vi Điều Khiển Cơ Bản',
    description: 'Làm quen với Arduino và các vi điều khiển cơ bản, cách lập trình và kết nối phần cứng',
    difficulty: 'Trung bình',
    duration: '90 phút',
    category: 'programming',
    objectives: [
      'Hiểu cách hoạt động của vi điều khiển',
      'Cài đặt và sử dụng Arduino IDE',
      'Viết chương trình Arduino cơ bản',
      'Kết nối và điều khiển LED, cảm biến'
    ],
    materials: [
      'Arduino Uno',
      'Cáp USB',
      'Breadboard',
      'LED, điện trở',
      'Cảm biến siêu âm',
      'Servo motor'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=nL34zDTPkcs',
    codeExample: `// Chương trình nhấp nháy LED
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Bật LED
  delay(1000);                 // Đợi 1 giây
  digitalWrite(ledPin, LOW);   // Tắt LED
  delay(1000);                 // Đợi 1 giây
}`,
    exercises: [
      {
        id: 'ex1-blink-led',
        title: 'Nhấp Nháy LED',
        description: 'Lập trình Arduino để LED nhấp nháy theo chu kỳ',
        difficulty: 'Dễ',
        code: `int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}`,
        expectedOutput: 'LED nhấp nháy mỗi 0.5 giây',
        hints: [
          'Sử dụng hàm digitalWrite() để bật/tắt LED',
          'delay() để tạo khoảng thời gian chờ',
          'Thử thay đổi thời gian delay để LED nhấp nháy nhanh/chậm hơn'
        ]
      },
      {
        id: 'ex2-button-control',
        title: 'Điều Khiển LED Bằng Nút Nhấn',
        description: 'Sử dụng nút nhấn để bật/tắt LED',
        difficulty: 'Trung bình',
        code: `int ledPin = 13;
int buttonPin = 2;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(buttonPin) == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,
        expectedOutput: 'LED sáng khi nhấn nút, tắt khi thả nút',
        hints: [
          'INPUT_PULLUP giúp đọc trạng thái nút nhấn chính xác',
          'Khi nhấn nút, giá trị đọc được là LOW',
          'Sử dụng điều kiện if để kiểm tra trạng thái nút'
        ]
      }
    ],
    realWorldApplications: [
      'Hệ thống tưới cây tự động',
      'Đèn cảm ứng chuyển động',
      'Chuông cửa thông minh',
      'Hệ thống báo động',
      'Robot dọn dẹp tự động'
    ],
    competitions: [
      'Arduino Day Vietnam',
      'IoT Challenge Vietnam',
      'Smart City Hackathon',
      'Techcombank CodeTour',
      'VNG Zalo AI Challenge'
    ]
  },
  {
    id: 'sensors-actuators',
    title: 'Cảm Biến và Động Cơ',
    description: 'Tìm hiểu các loại cảm biến và động cơ thường dùng trong robotics',
    difficulty: 'Trung bình',
    duration: '75 phút',
    category: 'hardware',
    objectives: [
      'Hiểu nguyên lý hoạt động của các cảm biến',
      'Kết nối và đọc dữ liệu từ cảm biến',
      'Điều khiển servo motor và DC motor',
      'Tích hợp cảm biến và động cơ trong dự án'
    ],
    materials: [
      'Cảm biến siêu âm HC-SR04',
      'Cảm biến ánh sáng LDR',
      'Cảm biến nhiệt độ DHT22',
      'Servo motor SG90',
      'DC Motor với driver L298N',
      'Arduino Uno'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=4f6UMl8hgkA',
    codeExample: `// Đọc khoảng cách từ cảm biến siêu âm
int trigPin = 9;
int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // Gửi tín hiệu trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Đọc thời gian echo
  long duration = pulseIn(echoPin, HIGH);
  
  // Tính khoảng cách (cm)
  long distance = duration * 0.034 / 2;
  
  Serial.print("Khoảng cách: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(500);
}`,
    exercises: [
      {
        id: 'ex1-ultrasonic-sensor',
        title: 'Đo Khoảng Cách Siêu Âm',
        description: 'Sử dụng cảm biến siêu âm để đo khoảng cách',
        difficulty: 'Trung bình',
        code: `#include <NewPing.h>

#define TRIGGER_PIN 12
#define ECHO_PIN 11
#define MAX_DISTANCE 200

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(9600);
}

void loop() {
  unsigned int distance = sonar.ping_cm();
  Serial.print("Khoảng cách: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(500);
}`,
        expectedOutput: 'Hiển thị khoảng cách đo được trên Serial Monitor',
        hints: [
          'Cảm biến siêu âm hoạt động như dơi - phát và nhận sóng âm',
          'Thời gian sóng âm đi và về tỷ lệ với khoảng cách',
          'Công thức: khoảng cách = thời gian × tốc độ âm / 2'
        ]
      },
      {
        id: 'ex2-servo-control',
        title: 'Điều Khiển Servo Motor',
        description: 'Điều khiển góc quay của servo motor',
        difficulty: 'Trung bình',
        code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);
}

void loop() {
  // Quay từ 0 đến 180 độ
  for (int pos = 0; pos <= 180; pos += 1) {
    myServo.write(pos);
    delay(15);
  }
  
  // Quay từ 180 về 0 độ
  for (int pos = 180; pos >= 0; pos -= 1) {
    myServo.write(pos);
    delay(15);
  }
}`,
        expectedOutput: 'Servo motor quay qua lại từ 0 đến 180 độ',
        hints: [
          'Servo motor có thể quay chính xác đến góc mong muốn',
          'Sử dụng thư viện Servo để điều khiển dễ dàng',
          'Delay giữa các bước để servo có thời gian di chuyển'
        ]
      }
    ],
    realWorldApplications: [
      'Robot tránh vật cản',
      'Hệ thống đậu xe tự động',
      'Robot dọn dẹp nhà',
      'Máy bay không người lái',
      'Cánh tay robot công nghiệp'
    ],
    competitions: [
      'Robot Sumo Wrestling',
      'Line Following Robot',
      'Obstacle Avoidance Challenge',
      'Robot Soccer Competition',
      'Autonomous Vehicle Challenge'
    ]
  },
  {
    id: 'mobile-robots',
    title: 'Robot Di Động Cơ Bản',
    description: 'Xây dựng robot có thể di chuyển và tránh vật cản',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    category: 'projects',
    objectives: [
      'Thiết kế khung robot di động',
      'Lập trình điều khiển bánh xe',
      'Tích hợp cảm biến tránh vật cản',
      'Kiểm thử và tối ưu hóa robot'
    ],
    materials: [
      'Khung robot (acrylic hoặc 3D printed)',
      'Arduino Uno',
      'Motor driver L298N',
      'DC Motors x2',
      'Bánh xe',
      'Cảm biến siêu âm',
      'Pin lithium',
      'Breadboard và dây nối'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=7vhvnaWUZjE',
    codeExample: `// Robot tránh vật cản cơ bản
#include <NewPing.h>

#define TRIGGER_PIN 12
#define ECHO_PIN 11
#define MAX_DISTANCE 200

// Motor pins
#define motorA1 5
#define motorA2 6
#define motorB1 9
#define motorB2 10

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(9600);
  pinMode(motorA1, OUTPUT);
  pinMode(motorA2, OUTPUT);
  pinMode(motorB1, OUTPUT);
  pinMode(motorB2, OUTPUT);
}

void moveForward() {
  digitalWrite(motorA1, HIGH);
  digitalWrite(motorA2, LOW);
  digitalWrite(motorB1, HIGH);
  digitalWrite(motorB2, LOW);
}

void turnRight() {
  digitalWrite(motorA1, HIGH);
  digitalWrite(motorA2, LOW);
  digitalWrite(motorB1, LOW);
  digitalWrite(motorB2, HIGH);
}

void stopMotors() {
  digitalWrite(motorA1, LOW);
  digitalWrite(motorA2, LOW);
  digitalWrite(motorB1, LOW);
  digitalWrite(motorB2, LOW);
}

void loop() {
  unsigned int distance = sonar.ping_cm();
  
  if (distance > 20 || distance == 0) {
    moveForward();
  } else {
    stopMotors();
    delay(300);
    turnRight();
    delay(500);
  }
  
  delay(100);
}`,
    exercises: [
      {
        id: 'ex1-basic-movement',
        title: 'Điều Khiển Chuyển Động Cơ Bản',
        description: 'Lập trình robot di chuyển theo các hướng khác nhau',
        difficulty: 'Trung bình',
        code: `void moveForward() {
  digitalWrite(leftMotor1, HIGH);
  digitalWrite(leftMotor2, LOW);
  digitalWrite(rightMotor1, HIGH);
  digitalWrite(rightMotor2, LOW);
}

void turnLeft() {
  digitalWrite(leftMotor1, LOW);
  digitalWrite(leftMotor2, HIGH);
  digitalWrite(rightMotor1, HIGH);
  digitalWrite(rightMotor2, LOW);
}

void setup() {
  // Khởi tạo pins
}

void loop() {
  moveForward();
  delay(2000);
  turnLeft();
  delay(1000);
}`,
        expectedOutput: 'Robot di chuyển thẳng 2 giây, rồi rẽ trái 1 giây',
        hints: [
          'Hai motor quay cùng chiều để robot đi thẳng',
          'Hai motor quay ngược chiều để robot xoay',
          'Điều chỉnh thời gian delay để robot rẽ đúng góc'
        ]
      },
      {
        id: 'ex2-obstacle-avoidance',
        title: 'Tránh Vật Cản Nâng Cao',
        description: 'Robot tự động tránh vật cản và tìm đường đi',
        difficulty: 'Khó',
        code: `int scanDistance() {
  unsigned int distance = sonar.ping_cm();
  return distance == 0 ? 999 : distance;
}

void findBestPath() {
  int frontDistance = scanDistance();
  
  if (frontDistance < 20) {
    stopMotors();
    
    // Quét bên trái
    servoMotor.write(150);
    delay(500);
    int leftDistance = scanDistance();
    
    // Quét bên phải
    servoMotor.write(30);
    delay(500);
    int rightDistance = scanDistance();
    
    // Về giữa
    servoMotor.write(90);
    delay(500);
    
    if (leftDistance > rightDistance) {
      turnLeft();
      delay(300);
    } else {
      turnRight();
      delay(300);
    }
  } else {
    moveForward();
  }
}`,
        expectedOutput: 'Robot tự động quét xung quanh và chọn hướng đi tối ưu',
        hints: [
          'Sử dụng servo để quay cảm biến quét xung quanh',
          'So sánh khoảng cách các hướng để chọn đường đi',
          'Robot sẽ chọn hướng có không gian rộng nhất'
        ]
      }
    ],
    realWorldApplications: [
      'Robot hút bụi thông minh (Roomba)',
      'Xe tự lái (Tesla Autopilot)',
      'Robot giao hàng (Amazon Scout)',
      'Robot tuần tra an ninh',
      'Robot khám phá sao Hỏa (Perseverance)'
    ],
    competitions: [
      'World Robot Olympiad (WRO)',
      'VEX Robotics Competition',
      'FIRST Robotics Competition',
      'RoboCup Rescue',
      'National Robotics Challenge'
    ]
  },
  {
    id: 'iot-robotics',
    title: 'IoT và Robotics',
    description: 'Kết nối robot với Internet để điều khiển từ xa và thu thập dữ liệu',
    difficulty: 'Nâng cao',
    duration: '90 phút',
    category: 'programming',
    objectives: [
      'Hiểu khái niệm Internet of Things (IoT)',
      'Kết nối robot với WiFi',
      'Điều khiển robot qua ứng dụng mobile',
      'Thu thập và gửi dữ liệu lên cloud'
    ],
    materials: [
      'ESP32 hoặc NodeMCU',
      'Robot đã làm trước đó',
      'Cảm biến nhiệt độ độ ẩm',
      'Smartphone với app Blynk',
      'Mạng WiFi'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=O3XmMQqJ-3w',
    codeExample: `// Robot IoT với ESP32 và Blynk
#define BLYNK_TEMPLATE_ID "YourTemplateID"
#define BLYNK_DEVICE_NAME "Robot IoT"
#define BLYNK_AUTH_TOKEN "YourAuthToken"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YourWiFiName";
char pass[] = "YourWiFiPassword";

void setup() {
  Serial.begin(115200);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  
  // Khởi tạo pins cho motor
  pinMode(motorA1, OUTPUT);
  pinMode(motorA2, OUTPUT);
  pinMode(motorB1, OUTPUT);
  pinMode(motorB2, OUTPUT);
}

// Điều khiển robot từ app
BLYNK_WRITE(V0) { // Nút tiến
  if (param.asInt() == 1) {
    moveForward();
  } else {
    stopMotors();
  }
}

BLYNK_WRITE(V1) { // Nút lùi
  if (param.asInt() == 1) {
    moveBackward();
  } else {
    stopMotors();
  }
}

void loop() {
  Blynk.run();
  
  // Gửi dữ liệu cảm biến lên app
  float temperature = readTemperature();
  Blynk.virtualWrite(V2, temperature);
  
  delay(1000);
}`,
    exercises: [
      {
        id: 'ex1-wifi-connection',
        title: 'Kết Nối WiFi Cơ Bản',
        description: 'Kết nối ESP32 với mạng WiFi và hiển thị trạng thái',
        difficulty: 'Trung bình',
        code: `#include <WiFi.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  Serial.print("Đang kết nối WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Kiểm tra kết nối
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("WiFi OK");
  } else {
    Serial.println("WiFi disconnected");
  }
  delay(5000);
}`,
        expectedOutput: 'ESP32 kết nối WiFi thành công và hiển thị địa chỉ IP',
        hints: [
          'Đảm bảo tên WiFi và mật khẩu chính xác',
          'WiFi.status() trả về trạng thái kết nối',
          'WiFi.localIP() hiển thị địa chỉ IP được cấp phát'
        ]
      },
      {
        id: 'ex2-remote-control',
        title: 'Điều Khiển Robot Từ Xa',
        description: 'Tạo ứng dụng web đơn giản để điều khiển robot',
        difficulty: 'Khó',
        code: `#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);

void handleRoot() {
  String html = "<html><body>";
  html += "<h1>Robot Control</h1>";
  html += "<button onclick=\"location.href='/forward'\">Forward</button><br>";
  html += "<button onclick=\"location.href='/backward'\">Backward</button><br>";
  html += "<button onclick=\"location.href='/left'\">Left</button>";
  html += "<button onclick=\"location.href='/right'\">Right</button><br>";
  html += "<button onclick=\"location.href='/stop'\">Stop</button>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleForward() {
  moveForward();
  server.send(200, "text/plain", "Moving Forward");
}

void setup() {
  WiFi.begin(ssid, password);
  server.on("/", handleRoot);
  server.on("/forward", handleForward);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
        expectedOutput: 'Trang web với các nút điều khiển robot từ xa',
        hints: [
          'WebServer tạo server HTTP trên ESP32',
          'Mỗi route (đường dẫn) có một hàm xử lý riêng',
          'HTML đơn giản tạo giao diện điều khiển'
        ]
      }
    ],
    realWorldApplications: [
      'Robot giám sát từ xa',
      'Hệ thống nhà thông minh',
      'Robot giao hàng tự động',
      'Thiết bị IoT nông nghiệp',
      'Robot an ninh thông minh'
    ],
    competitions: [
      'IoT Challenge Vietnam',
      'Hackathon IoT Solutions',
      'Smart City Innovation',
      'AI + IoT Vietnam Competition',
      'Digital Transformation Challenge'
    ]
  }
];

// Quiz questions for robotics assessment
export const roboticsQuizzes = [
  {
    id: 'quiz-basic-1',
    lessonId: 'basic-robotics-intro',
    question: 'Robot được định nghĩa là gì?',
    options: [
      'Máy tính có thể lập trình',
      'Thiết bị tự động có thể cảm nhận, xử lý và hành động',
      'Chỉ là đồ chơi cho trẻ em',
      'Máy móc thay thế con người hoàn toàn'
    ],
    correctAnswer: 1,
    explanation: 'Robot là thiết bị tự động có khả năng cảm nhận môi trường, xử lý thông tin và thực hiện hành động dựa trên lập trình.'
  },
  {
    id: 'quiz-basic-2',
    lessonId: 'basic-electronics',
    question: 'Tại sao cần điện trở khi kết nối LED với pin?',
    options: [
      'Để LED sáng hơn',
      'Để bảo vệ LED khỏi bị cháy do dòng điện quá lớn',
      'Để tiết kiệm pin',
      'Để LED có thể đổi màu'
    ],
    correctAnswer: 1,
    explanation: 'Điện trở giới hạn dòng điện chạy qua LED, bảo vệ LED khỏi bị hỏng do dòng điện quá lớn.'
  },
  {
    id: 'quiz-programming-1',
    lessonId: 'microcontroller-basics',
    question: 'Hàm nào được sử dụng để đặt trạng thái chân digital trong Arduino?',
    options: [
      'analogWrite()',
      'digitalWrite()',
      'digitalRead()',
      'pinMode()'
    ],
    correctAnswer: 1,
    explanation: 'digitalWrite() được sử dụng để đặt trạng thái HIGH hoặc LOW cho chân digital output.'
  }
];

const realWorldApplications = [
  {
    title: 'Y Tế',
    description: 'Robot phẫu thuật, robot chăm sóc người bệnh, protêt thông minh',
    icon: '🏥'
  },
  {
    title: 'Sản Xuất',
    description: 'Robot công nghiệp, tự động hóa dây chuyền sản xuất',
    icon: '🏭'
  },
  {
    title: 'Gia Đình',
    description: 'Robot hút bụi, robot nấu ăn, robot giúp việc gia đình',
    icon: '🏠'
  },
  {
    title: 'Vũ Trụ',
    description: 'Robot thám hiểm sao Hỏa, robot bảo trì trạm vũ trụ',
    icon: '🚀'
  }
];

const competitions = [
  {
    name: 'Robocon Vietnam',
    description: 'Cuộc thi robotics lớn nhất Việt Nam dành cho sinh viên',
    categories: ['Tự động', 'Bán tự động', 'Sáng tạo'],
    icon: '🏆'
  },
  {
    name: 'FLL (First Lego League)',
    description: 'Cuộc thi robotics quốc tế dành cho học sinh THCS',
    categories: ['Robot Mission', 'Innovation Project', 'Core Values'],
    icon: '🥇'
  },
  {
    name: 'VEX Robotics',
    description: 'Hệ thống cuộc thi robotics phổ biến trên toàn thế giới',
    categories: ['VRC', 'VEX IQ', 'VEX GO'],
    icon: '🤖'
  }
];

const roboticsData = {
  roboticsLessons,
  roboticsQuizzes,
  realWorldApplications,
  competitions
};

export default roboticsData;
