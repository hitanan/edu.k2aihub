// Arduino Programming Module Data
// Comprehensive Arduino content for K2AiHub education platform

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
}

export interface ArduinoExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  code: string;
  expectedOutput: string;
  hints: string[];
  troubleshooting: string[];
}

export const arduinoLessons: ArduinoLesson[] = [
  {
    id: 'arduino-setup',
    title: 'Cài Đặt và Làm Quen Arduino',
    description: 'Hướng dẫn cài đặt Arduino IDE, kết nối board và chạy chương trình đầu tiên',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'basics',
    objectives: [
      'Cài đặt Arduino IDE thành công',
      'Hiểu cấu trúc của Arduino board',
      'Kết nối Arduino với máy tính',
      'Upload chương trình đầu tiên',
      'Hiểu cấu trúc basic của Arduino code'
    ],
    materials: [
      'Arduino Uno R3',
      'Cáp USB Type A-B',
      'Máy tính với Arduino IDE',
      'LED và điện trở 220Ω',
      'Breadboard',
      'Dây nối jumper'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=nL34zDTPkcs',
    circuitDiagram: 'https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png',
    codeExample: `/*
  Blink - Chương trình Arduino cơ bản nhất
  Làm LED nhấp nháy mỗi giây
*/

// Định nghĩa pin kết nối LED
int ledPin = 13;

void setup() {
  // Khởi tạo chạy một lần khi Arduino bật
  pinMode(ledPin, OUTPUT);  // Đặt pin 13 làm output
  Serial.begin(9600);       // Khởi tạo Serial Monitor
  Serial.println("Arduino đã sẵn sàng!");
}

void loop() {
  // Vòng lặp chạy liên tục
  digitalWrite(ledPin, HIGH);   // Bật LED
  Serial.println("LED ON");
  delay(1000);                  // Đợi 1 giây
  
  digitalWrite(ledPin, LOW);    // Tắt LED
  Serial.println("LED OFF");
  delay(1000);                  // Đợi 1 giây
}`,
    exercises: [
      {
        id: 'ex1-led-blink',
        title: 'LED Nhấp Nháy Cơ Bản',
        description: 'Tạo chương trình LED nhấp nháy với tốc độ khác nhau',
        difficulty: 'Dễ',
        code: `int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(200);  // Thay đổi giá trị này
  digitalWrite(ledPin, LOW);
  delay(200);  // Thay đổi giá trị này
}`,
        expectedOutput: 'LED nhấp nháy nhanh (mỗi 0.2 giây)',
        hints: [
          'delay() tính bằng milliseconds (1000ms = 1 giây)',
          'Giảm delay để LED nhấp nháy nhanh hơn',
          'HIGH = bật LED, LOW = tắt LED',
          'pinMode() phải được gọi trong setup()'
        ],
        troubleshooting: [
          'Nếu LED không sáng: kiểm tra kết nối dây',
          'Nếu upload lỗi: kiểm tra cổng COM và board type',
          'LED yếu: kiểm tra nguồn cung cấp',
          'Code lỗi: kiểm tra syntax và dấu chấm phẩy'
        ]
      },
      {
        id: 'ex2-traffic-light',
        title: 'Đèn Giao Thông Mini',
        description: 'Tạo hệ thống đèn giao thông với 3 LED màu đỏ, vàng, xanh',
        difficulty: 'Trung bình',
        code: `int redPin = 11;
int yellowPin = 12;
int greenPin = 13;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  // Đỏ
  digitalWrite(redPin, HIGH);
  delay(3000);
  digitalWrite(redPin, LOW);
  
  // Vàng
  digitalWrite(yellowPin, HIGH);
  delay(1000);
  digitalWrite(yellowPin, LOW);
  
  // Xanh
  digitalWrite(greenPin, HIGH);
  delay(3000);
  digitalWrite(greenPin, LOW);
}`,
        expectedOutput: 'Đèn đỏ 3s → vàng 1s → xanh 3s, lặp lại',
        hints: [
          'Kết nối mỗi LED với một pin khác nhau',
          'Sử dụng điện trở cho mỗi LED',
          'Thời gian delay mô phỏng đèn giao thông thật',
          'Tắt LED trước khi bật LED khác'
        ],
        troubleshooting: [
          'LED cháy: kiểm tra điện trở bảo vệ',
          'LED không đúng màu: kiểm tra kết nối',
          'Timing sai: điều chỉnh delay',
          'Nhiều LED sáng cùng lúc: logic tắt LED'
        ]
      }
    ],
    realWorldApplications: [
      'Hệ thống đèn LED thông minh',
      'Báo hiệu trạng thái thiết bị',
      'Đèn cảnh báo an toàn',
      'Decoration lights với pattern',
      'Status indicators cho IoT devices'
    ],
    competitions: [
      'Arduino Day Vietnam',
      'Maker Faire Vietnam',
      'IoT Challenge Competition',
      'Smart City Innovation Contest',
      'Young Inventor Awards'
    ]
  },
  {
    id: 'arduino-inputs',
    title: 'Đọc Input và Điều Khiển',
    description: 'Học cách đọc tín hiệu từ buttons, potentiometer và cảm biến để điều khiển output',
    difficulty: 'Cơ bản',
    duration: '75 phút',
    category: 'basics',
    objectives: [
      'Hiểu sự khác biệt giữa digital và analog input',
      'Sử dụng pull-up resistor cho buttons',
      'Đọc giá trị từ potentiometer',
      'Kết hợp input và output trong chương trình',
      'Debug và troubleshoot common input issues'
    ],
    materials: [
      'Arduino Uno',
      'Pushbutton x2',
      'Potentiometer 10kΩ',
      '10kΩ resistors',
      'LED RGB',
      'Breadboard và jumper wires'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=6WReFkfrUIk',
    codeExample: `/*
  Button và LED Control
  Sử dụng button để điều khiển LED
*/

int buttonPin = 2;
int ledPin = 13;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);  // Sử dụng pull-up resistor
  Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  
  if (buttonState == LOW) {  // Button được nhấn (pull-up = LOW khi nhấn)
    digitalWrite(ledPin, HIGH);
    Serial.println("Button pressed - LED ON");
  } else {
    digitalWrite(ledPin, LOW);
    Serial.println("Button released - LED OFF");
  }
  
  delay(50);  // Debouncing delay
}`,
    exercises: [
      {
        id: 'ex1-button-counter',
        title: 'Đếm Số Lần Nhấn Button',
        description: 'Tạo counter đếm số lần nhấn button và hiển thị trên Serial Monitor',
        difficulty: 'Trung bình',
        code: `int buttonPin = 2;
int counter = 0;
int lastButtonState = HIGH;
int currentButtonState = HIGH;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
  Serial.println("Button Counter Started");
}

void loop() {
  currentButtonState = digitalRead(buttonPin);
  
  if (lastButtonState == HIGH && currentButtonState == LOW) {
    counter++;
    Serial.print("Button pressed ");
    Serial.print(counter);
    Serial.println(" times");
    delay(50);  // Debouncing
  }
  
  lastButtonState = currentButtonState;
}`,
        expectedOutput: 'Serial Monitor hiển thị số lần nhấn button',
        hints: [
          'Edge detection: chỉ đếm khi button chuyển từ HIGH sang LOW',
          'Debouncing để tránh đếm nhiều lần trong một lần nhấn',
          'lastButtonState lưu trạng thái trước đó',
          'Serial.println() để debug và kiểm tra'
        ],
        troubleshooting: [
          'Đếm sai: kiểm tra debouncing delay',
          'Button không responsive: kiểm tra pull-up resistor',
          'Serial không hiển thị: kiểm tra baud rate',
          'Counter reset: có thể do power fluctuation'
        ]
      },
      {
        id: 'ex2-potentiometer-led',
        title: 'Điều Khiển Độ Sáng LED',
        description: 'Sử dụng potentiometer để điều chỉnh độ sáng LED',
        difficulty: 'Trung bình',
        code: `int potPin = A0;
int ledPin = 9;  // PWM pin
int potValue = 0;
int ledValue = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  potValue = analogRead(potPin);           // Đọc giá trị 0-1023
  ledValue = map(potValue, 0, 1023, 0, 255); // Chuyển đổi sang 0-255
  
  analogWrite(ledPin, ledValue);           // PWM output
  
  Serial.print("Pot: ");
  Serial.print(potValue);
  Serial.print(" -> LED: ");
  Serial.println(ledValue);
  
  delay(10);
}`,
        expectedOutput: 'LED sáng/tối theo vị trí potentiometer',
        hints: [
          'analogRead() trả về giá trị 0-1023',
          'analogWrite() nhận giá trị 0-255',
          'map() function chuyển đổi scale',
          'PWM pins (~) để điều khiển analog output'
        ],
        troubleshooting: [
          'LED không đổi độ sáng: kiểm tra PWM pin',
          'Giá trị không đúng: kiểm tra map() function',
          'Noise trong reading: thêm delay hoặc averaging',
          'Potentiometer không hoạt động: kiểm tra wiring'
        ]
      }
    ],
    realWorldApplications: [
      'Volume control cho audio systems',
      'Dimmer switch cho đèn LED',
      'User interface controls',
      'Sensor calibration systems',
      'Interactive art installations'
    ],
    competitions: [
      'Interactive Device Challenge',
      'User Interface Innovation',
      'Smart Home Automation',
      'Accessibility Technology Awards',
      'Human-Computer Interaction Contest'
    ]
  },
  {
    id: 'arduino-sensors',
    title: 'Làm Việc Với Cảm Biến',
    description: 'Tích hợp các cảm biến phổ biến như nhiệt độ, ánh sáng, và chuyển động',
    difficulty: 'Trung bình',
    duration: '90 phút',
    category: 'sensors',
    objectives: [
      'Hiểu cách hoạt động của các loại cảm biến',
      'Đọc dữ liệu từ cảm biến nhiệt độ DHT22',
      'Sử dụng cảm biến ánh sáng LDR',
      'Kết hợp nhiều cảm biến trong một project',
      'Xử lý và hiển thị dữ liệu sensor'
    ],
    materials: [
      'Arduino Uno',
      'DHT22 temperature/humidity sensor',
      'LDR (Light Dependent Resistor)',
      'PIR motion sensor',
      'Ultrasonic sensor HC-SR04',
      '10kΩ resistors',
      '16x2 LCD display (optional)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=4f6UMl8hgkA',
    codeExample: `/*
  Multi-Sensor System
  Đọc nhiệt độ, độ ẩm và ánh sáng
*/

#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22
#define LDR_PIN A0

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("Multi-Sensor System Started");
}

void loop() {
  // Đọc nhiệt độ và độ ẩm
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  // Đọc cường độ ánh sáng
  int lightLevel = analogRead(LDR_PIN);
  int lightPercent = map(lightLevel, 0, 1023, 0, 100);
  
  // Kiểm tra lỗi sensor
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Error reading DHT sensor!");
    return;
  }
  
  // Hiển thị dữ liệu
  Serial.println("=== Sensor Readings ===");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  
  Serial.print("Light Level: ");
  Serial.print(lightPercent);
  Serial.println("%");
  
  Serial.println();
  delay(2000);
}`,
    exercises: [
      {
        id: 'ex1-temperature-alert',
        title: 'Hệ Thống Cảnh Báo Nhiệt Độ',
        description: 'Tạo hệ thống cảnh báo khi nhiệt độ vượt ngưỡng',
        difficulty: 'Trung bình',
        code: `#include <DHT.h>

#define DHT_PIN 2
#define LED_PIN 13
#define BUZZER_PIN 8
#define TEMP_THRESHOLD 30.0

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
    Serial.print("Temperature: ");
    Serial.println(temperature);
    
    if (temperature > TEMP_THRESHOLD) {
      // Cảnh báo
      digitalWrite(LED_PIN, HIGH);
      tone(BUZZER_PIN, 1000, 500);
      Serial.println("WARNING: High temperature!");
    } else {
      digitalWrite(LED_PIN, LOW);
    }
  }
  
  delay(1000);
}`,
        expectedOutput: 'LED và buzzer báo động khi nhiệt độ > 30°C',
        hints: [
          'Sử dụng #define để định nghĩa threshold',
          'isnan() kiểm tra sensor có hoạt động không',
          'tone() tạo âm thanh cảnh báo',
          'Có thể điều chỉnh TEMP_THRESHOLD theo nhu cầu'
        ],
        troubleshooting: [
          'Sensor không đọc được: kiểm tra wiring và power',
          'False alarms: điều chỉnh threshold',
          'Buzzer không kêu: kiểm tra pin và connection',
          'Readings không ổn định: thêm delay hoặc filtering'
        ]
      },
      {
        id: 'ex2-smart-lighting',
        title: 'Hệ Thống Đèn Thông Minh',
        description: 'Đèn tự động bật/tắt theo ánh sáng và chuyển động',
        difficulty: 'Khó',
        code: `#define LDR_PIN A0
#define PIR_PIN 3
#define LED_PIN 9
#define LIGHT_THRESHOLD 300
#define AUTO_OFF_TIME 10000  // 10 seconds

int lightLevel = 0;
bool motionDetected = false;
unsigned long lastMotionTime = 0;
bool ledState = false;

void setup() {
  Serial.begin(9600);
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("Smart Lighting System Ready");
}

void loop() {
  lightLevel = analogRead(LDR_PIN);
  motionDetected = digitalRead(PIR_PIN);
  
  if (motionDetected) {
    lastMotionTime = millis();
    Serial.println("Motion detected!");
  }
  
  // Logic điều khiển đèn
  if (lightLevel < LIGHT_THRESHOLD && 
      (millis() - lastMotionTime) < AUTO_OFF_TIME) {
    if (!ledState) {
      digitalWrite(LED_PIN, HIGH);
      ledState = true;
      Serial.println("LED ON - Dark + Motion");
    }
  } else {
    if (ledState) {
      digitalWrite(LED_PIN, LOW);
      ledState = false;
      Serial.println("LED OFF");
    }
  }
  
  delay(100);
}`,
        expectedOutput: 'LED tự động bật khi tối và có chuyển động, tự tắt sau 10s',
        hints: [
          'millis() để theo dõi thời gian',
          'Combine multiple sensor inputs with logic',
          'State machine để quản lý LED status',
          'Threshold values có thể cần calibration'
        ],
        troubleshooting: [
          'PIR sensor quá nhạy: điều chỉnh sensitivity pot',
          'LED không tắt: kiểm tra timing logic',
          'LDR readings không chính xác: calibrate threshold',
          'System lag: giảm delay time'
        ]
      }
    ],
    realWorldApplications: [
      'Smart home automation systems',
      'Energy-saving building controls',
      'Security and surveillance systems',
      'Agricultural monitoring systems',
      'Environmental data logging'
    ],
    competitions: [
      'Smart Home Challenge',
      'Environmental Monitoring Contest',
      'Energy Efficiency Innovation',
      'IoT for Sustainability Awards',
      'Sensor Network Competition'
    ]
  },
  {
    id: 'arduino-communication',
    title: 'Giao Tiếp và Networking',
    description: 'Serial, I2C, SPI communication và kết nối WiFi/Bluetooth',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    category: 'communication',
    objectives: [
      'Hiểu các protocol giao tiếp (Serial, I2C, SPI)',
      'Giao tiếp với devices qua I2C',
      'Thiết lập WiFi communication với ESP32',
      'Tạo web server đơn giản',
      'Gửi dữ liệu lên cloud platforms'
    ],
    materials: [
      'ESP32 DevKit',
      'OLED Display 128x64 (I2C)',
      'RTC Module DS3231',
      'MicroSD Card Module',
      'Breadboard và jumper wires',
      'WiFi access point'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=O3XmMQqJ-3w',
    codeExample: `/*
  ESP32 Web Server với Sensor Data
  Tạo web interface để hiển thị dữ liệu sensors
*/

#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";

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
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("WiFi connected!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  
  // Định nghĩa routes
  server.on("/", handleRoot);
  server.on("/data", handleData);
  server.begin();
  
  Serial.println("Web server started");
}

void handleRoot() {
  String html = R"(
    <!DOCTYPE html>
    <html>
    <head>
      <title>Arduino Sensor Dashboard</title>
      <meta http-equiv='refresh' content='5'>
    </head>
    <body>
      <h1>Sensor Monitoring System</h1>
      <div id='data'></div>
      <script>
        fetch('/data')
          .then(response => response.json())
          .then(data => {
            document.getElementById('data').innerHTML = 
              '<p>Temperature: ' + data.temperature + '°C</p>' +
              '<p>Humidity: ' + data.humidity + '%</p>';
          });
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
        title: 'Hiển Thị Dữ Liệu Trên OLED',
        description: 'Sử dụng I2C để hiển thị sensor data trên OLED display',
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
    Serial.println("SSD1306 allocation failed");
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
  display.println("Sensor Monitor");
  display.println();
  display.print("Temp: ");
  display.print(temp);
  display.println(" C");
  display.print("Humidity: ");
  display.print(hum);
  display.println(" %");
  
  display.display();
  delay(2000);
}`,
        expectedOutput: 'OLED hiển thị nhiệt độ và độ ẩm realtime',
        hints: [
          'Wire.h cho I2C communication',
          'Adafruit libraries cho OLED control',
          'display.clearDisplay() trước khi viết mới',
          'display.display() để update screen'
        ],
        troubleshooting: [
          'OLED không hiển thị: kiểm tra I2C address',
          'Text bị cắt: kiểm tra cursor position',
          'Library errors: cài đặt correct libraries',
          'I2C errors: kiểm tra SDA/SCL connections'
        ]
      },
      {
        id: 'ex2-iot-dashboard',
        title: 'IoT Dashboard với Mobile Control',
        description: 'Tạo web dashboard có thể điều khiển từ mobile',
        difficulty: 'Khó',
        code: `#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>

const char* ssid = "YourWiFi";
const char* password = "YourPassword";

AsyncWebServer server(80);

int ledPin = 2;
bool ledState = false;

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <title>IoT Control Panel</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial; text-align: center; margin: 0px auto; padding-top: 30px; }
    .button { background-color: #4CAF50; border: none; color: white; padding: 16px 40px;
             text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer; }
    .button2 { background-color: #555555; }
  </style>
</head>
<body>
  <h1>IoT Device Control</h1>
  <p>LED Status: <span id="state">%STATE%</span></p>
  <p><a href="/led/on"><button class="button">ON</button></a></p>
  <p><a href="/led/off"><button class="button button2">OFF</button></a></p>
</body>
</html>
)rawliteral";

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  
  Serial.println(WiFi.localIP());
  
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    String html = String(index_html);
    html.replace("%STATE%", ledState ? "ON" : "OFF");
    request->send(200, "text/html", html);
  });
  
  server.on("/led/on", HTTP_GET, [](AsyncWebServerRequest *request){
    ledState = true;
    digitalWrite(ledPin, HIGH);
    request->redirect("/");
  });
  
  server.on("/led/off", HTTP_GET, [](AsyncWebServerRequest *request){
    ledState = false;
    digitalWrite(ledPin, LOW);
    request->redirect("/");
  });
  
  server.begin();
}

void loop() {
  // Server runs in background
}`,
        expectedOutput: 'Web interface responsive điều khiển LED từ smartphone',
        hints: [
          'AsyncWebServer cho better performance',
          'HTML embedded trong code',
          'Mobile-responsive CSS design',
          'State management cho UI updates'
        ],
        troubleshooting: [
          'Mobile không load: kiểm tra same WiFi network',
          'Buttons không work: check route definitions',
          'CSS lỗi: validate HTML syntax',
          'State không update: check replace() function'
        ]
      }
    ],
    realWorldApplications: [
      'IoT device monitoring và control',
      'Remote sensor data collection',
      'Home automation systems',
      'Industrial monitoring solutions',
      'Agricultural automation systems'
    ],
    competitions: [
      'IoT Innovation Challenge',
      'Smart City Solutions Contest',
      'Industrial IoT Competition',
      'Connected Device Awards',
      'Wireless Innovation Challenge'
    ]
  },
  {
    id: 'arduino-advanced-projects',
    title: 'Dự Án Arduino Nâng Cao',
    description: 'Tích hợp tất cả kiến thức để tạo ra các dự án thực tế và phức tạp',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    category: 'projects',
    objectives: [
      'Thiết kế hệ thống Arduino phức tạp',
      'Tích hợp nhiều sensors và actuators',
      'Implement real-time data processing',
      'Tạo user interface professional',
      'Deploy project với robust error handling'
    ],
    materials: [
      'ESP32 DevKit',
      'Multiple sensors (DHT22, ultrasonic, PIR)',
      'Servo motors, stepper motors',
      'OLED display, LCD display',
      'MicroSD card module',
      'RTC module',
      'Power supply và battery backup'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=7vhvnaWUZjE',
    codeExample: `/*
  Smart Environmental Monitoring Station
  Complete IoT project với multiple sensors và cloud integration
*/

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include "time.h"

// Configuration
const char* ssid = "YourWiFi";
const char* password = "YourPassword";
const char* serverURL = "http://your-api-endpoint.com/data";

// Sensors
#define DHT_PIN 4
#define LDR_PIN A0
#define SOIL_PIN A1
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

// Data structure
struct SensorData {
  float temperature;
  float humidity;
  int lightLevel;
  int soilMoisture;
  String timestamp;
};

// Timing
unsigned long lastReading = 0;
unsigned long lastUpload = 0;
const unsigned long READING_INTERVAL = 5000;   // 5 seconds
const unsigned long UPLOAD_INTERVAL = 300000;  // 5 minutes

void setup() {
  Serial.begin(115200);
  
  // Initialize sensors
  dht.begin();
  
  // Initialize display
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("SSD1306 allocation failed");
  }
  
  // Connect WiFi
  connectWiFi();
  
  // Configure time
  configTime(7 * 3600, 0, "pool.ntp.org");
  
  Serial.println("Environmental Monitoring Station Ready");
}

void loop() {
  unsigned long currentTime = millis();
  
  // Read sensors periodically
  if (currentTime - lastReading >= READING_INTERVAL) {
    SensorData data = readSensors();
    displayData(data);
    lastReading = currentTime;
    
    // Upload data periodically
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
  
  // Validate readings
  if (isnan(data.temperature)) data.temperature = -999;
  if (isnan(data.humidity)) data.humidity = -999;
  
  return data;
}

void displayData(SensorData data) {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  
  display.setCursor(0, 0);
  display.println("Environmental Monitor");
  display.println();
  
  display.print("Temp: ");
  display.print(data.temperature);
  display.println(" C");
  
  display.print("Humidity: ");
  display.print(data.humidity);
  display.println("%");
  
  display.print("Light: ");
  display.print(data.lightLevel);
  display.println("%");
  
  display.print("Soil: ");
  display.print(data.soilMoisture);
  display.println("%");
  
  display.display();
}

void uploadData(SensorData data) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");
    
    // Create JSON payload
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
      Serial.print("Data uploaded successfully: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Upload failed: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  }
}

void connectWiFi() {
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();
  Serial.print("Connected! IP: ");
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
        description: 'Tạo trạm thời tiết hoàn chỉnh với weather prediction',
        difficulty: 'Khó',
        code: `// Weather Station with Prediction Algorithm
#include <DHT.h>
#include <BMP280.h>
#include <WiFi.h>

DHT dht(4, DHT22);
BMP280 bmp;

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
  
  // Calculate derived values
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
    return trend > 0 ? "Sunny" : "Partly Cloudy";
  } else if (pressure > 1000) {
    return trend > 0 ? "Cloudy" : "Rain likely";
  } else {
    return "Storm approaching";
  }
}`,
        expectedOutput: 'Trạm thời tiết với dự báo thời tiết cơ bản',
        hints: [
          'Combine multiple sensors cho comprehensive data',
          'Implement prediction algorithms',
          'Historical data tracking for trends',
          'Weather API integration cho accuracy'
        ],
        troubleshooting: [
          'Sensor conflicts: kiểm tra I2C addresses',
          'Prediction không chính xác: tune algorithms',
          'Data logging issues: implement error handling',
          'Power consumption: optimize sleep modes'
        ]
      },
      {
        id: 'ex2-smart-garden',
        title: 'Hệ Thống Vườn Thông Minh',
        description: 'Automated garden với watering, lighting và monitoring',
        difficulty: 'Khó',
        code: `// Smart Garden Automation System
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
  
  delay(30000); // Check every 30 seconds
}

void autoWatering() {
  if (garden.soilMoisture < 30 && 
      millis() - garden.lastWatering > 3600000) { // 1 hour
    
    Serial.println("Starting irrigation...");
    waterValve.write(90); // Open valve
    garden.pumpActive = true;
    
    delay(5000); // Water for 5 seconds
    
    waterValve.write(0); // Close valve
    garden.pumpActive = false;
    garden.lastWatering = millis();
    
    Serial.println("Irrigation complete");
  }
}

void autoLighting() {
  // Turn on grow light when natural light is low
  if (garden.lightLevel < 20) {
    digitalWrite(GROW_LIGHT, HIGH);
    garden.lightActive = true;
  } else {
    digitalWrite(GROW_LIGHT, LOW);
    garden.lightActive = false;
  }
}`,
        expectedOutput: 'Hệ thống tự động tưới cây và điều khiển ánh sáng',
        hints: [
          'Timing controls để tránh overwatering',
          'Light scheduling theo natural circadian rhythm',
          'Remote monitoring qua mobile app',
          'Backup manual controls for emergency'
        ],
        troubleshooting: [
          'Pump không hoạt động: kiểm tra power và relay',
          'Overwatering: adjust moisture thresholds',
          'Light timing sai: check RTC accuracy',
          'Connectivity issues: implement offline mode'
        ]
      }
    ],
    realWorldApplications: [
      'Agricultural automation systems',
      'Smart building management',
      'Environmental research stations',
      'Industrial process monitoring',
      'Educational demonstration platforms'
    ],
    competitions: [
      'Smart Agriculture Challenge',
      'Environmental Innovation Awards',
      'Sustainability Technology Contest',
      'IoT for Social Good',
      'Engineering Design Competition'
    ]
  }
];

// Arduino programming concepts quiz
export const arduinoQuizzes = [
  {
    id: 'quiz-arduino-1',
    lessonId: 'arduino-setup',
    question: 'Hai hàm bắt buộc trong mọi chương trình Arduino là gì?',
    options: [
      'begin() và end()',
      'setup() và loop()',
      'start() và stop()',
      'init() và main()'
    ],
    correctAnswer: 1,
    explanation: 'setup() chạy một lần khi Arduino khởi động, loop() chạy liên tục sau đó.'
  },
  {
    id: 'quiz-arduino-2',
    lessonId: 'arduino-inputs',
    question: 'INPUT_PULLUP được sử dụng để làm gì?',
    options: [
      'Tăng điện áp đầu vào',
      'Kích hoạt điện trở kéo lên nội bộ',
      'Giảm nhiễu điện',
      'Tăng tốc độ đọc'
    ],
    correctAnswer: 1,
    explanation: 'INPUT_PULLUP kích hoạt điện trở kéo lên 20kΩ nội bộ, giúp pin đọc trạng thái button chính xác.'
  },
  {
    id: 'quiz-arduino-3',
    lessonId: 'arduino-sensors',
    question: 'Hàm nào được sử dụng để đọc giá trị analog?',
    options: [
      'digitalRead()',
      'analogRead()',
      'pinMode()',
      'digitalWrite()'
    ],
    correctAnswer: 1,
    explanation: 'analogRead() đọc giá trị từ 0-1023 từ các pin analog A0-A5.'
  },
  {
    id: 'quiz-arduino-4',
    lessonId: 'arduino-communication',
    question: 'Giao thức nào thường được sử dụng cho OLED display?',
    options: [
      'UART',
      'SPI',
      'I2C',
      'USB'
    ],
    correctAnswer: 2,
    explanation: 'I2C (Inter-Integrated Circuit) thường được sử dụng cho OLED displays vì chỉ cần 2 dây (SDA và SCL).'
  }
];

const arduinoData = {
  arduinoLessons,
  arduinoQuizzes
};

export default arduinoData;
