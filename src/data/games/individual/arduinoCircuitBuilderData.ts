export interface ArduinoCircuitBuilderGameData {
  circuits: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    components: Array<{
      id: string;
      name: string;
      type: string;
      image: string;
      pins: string[];
      connections: string[];
      position: { x: number; y: number };
    }>;
    targetConnections: Array<{
      from: string;
      to: string;
      wire: string;
    }>;
    code: string;
    explanation: string;
    tips: string[];
    troubleshooting: string[];
  }>;
  dragDropConfig: {
    componentLibrary: string[];
    wireColors: string[];
    snapDistance: number;
    gridSize: number;
    zoomRange: [number, number];
  };
}

export const ARDUINO_CIRCUIT_BUILDER_DATA: ArduinoCircuitBuilderGameData = {
  circuits: [
    {
      name: "LED Cơ Bản",
      difficulty: "Cơ bản",
      estimatedTime: "10 phút",
      components: [
        {
          id: "arduino-uno",
          name: "Arduino Uno",
          type: "microcontroller",
          image: "/images/arduino-uno.svg",
          pins: ["5V", "GND", "D13", "D12", "D11", "D10", "D9", "D8", "D7", "D6", "D5", "D4", "D3", "D2"],
          connections: [],
          position: { x: 100, y: 100 }
        },
        {
          id: "led-red",
          name: "LED Đỏ",
          type: "output",
          image: "/images/led-red.svg",
          pins: ["anode", "cathode"],
          connections: [],
          position: { x: 300, y: 150 }
        },
        {
          id: "resistor-220",
          name: "Điện trở 220Ω",
          type: "passive",
          image: "/images/resistor-220.svg",
          pins: ["pin1", "pin2"],
          connections: [],
          position: { x: 250, y: 200 }
        },
        {
          id: "breadboard",
          name: "Breadboard",
          type: "base",
          image: "/images/breadboard.svg",
          pins: ["1a", "1b", "1c", "1d", "1e", "2a", "2b", "2c", "2d", "2e", "power+", "power-"],
          connections: [],
          position: { x: 200, y: 250 }
        }
      ],
      targetConnections: [
        { from: "arduino-uno:D13", to: "resistor-220:pin1", wire: "yellow" },
        { from: "resistor-220:pin2", to: "led-red:anode", wire: "yellow" },
        { from: "led-red:cathode", to: "arduino-uno:GND", wire: "black" }
      ],
      code: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`,
      explanation: "Mạch LED cơ bản sử dụng chân digital 13 của Arduino để điều khiển LED nhấp nháy.",
      tips: [
        "Luôn sử dụng điện trở để bảo vệ LED",
        "Chân dài của LED là anode (+)",
        "Chân ngắn của LED là cathode (-)"
      ],
      troubleshooting: [
        "LED không sáng: Kiểm tra cực tính LED",
        "LED quá sáng: Tăng giá trị điện trở",
        "Không có tín hiệu: Kiểm tra kết nối chân D13"
      ]
    },
    {
      name: "Cảm Biến Nhiệt Độ",
      difficulty: "Trung bình",
      estimatedTime: "15 phút",
      components: [
        {
          id: "arduino-uno",
          name: "Arduino Uno",
          type: "microcontroller",
          image: "/images/arduino-uno.svg",
          pins: ["5V", "GND", "A0", "A1", "A2", "A3", "A4", "A5"],
          connections: [],
          position: { x: 100, y: 100 }
        },
        {
          id: "dht22",
          name: "Cảm biến DHT22",
          type: "sensor",
          image: "/images/dht22.svg",
          pins: ["VCC", "DATA", "NC", "GND"],
          connections: [],
          position: { x: 300, y: 120 }
        },
        {
          id: "resistor-10k",
          name: "Điện trở 10kΩ",
          type: "passive",
          image: "/images/resistor-10k.svg",
          pins: ["pin1", "pin2"],
          connections: [],
          position: { x: 250, y: 180 }
        }
      ],
      targetConnections: [
        { from: "arduino-uno:5V", to: "dht22:VCC", wire: "red" },
        { from: "arduino-uno:GND", to: "dht22:GND", wire: "black" },
        { from: "arduino-uno:D2", to: "dht22:DATA", wire: "blue" },
        { from: "dht22:VCC", to: "resistor-10k:pin1", wire: "red" },
        { from: "resistor-10k:pin2", to: "dht22:DATA", wire: "blue" }
      ],
      code: `#include "DHT.h"
#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  
  Serial.print("Nhiệt độ: ");
  Serial.print(t);
  Serial.print("°C, Độ ẩm: ");
  Serial.print(h);
  Serial.println("%");
  
  delay(2000);
}`,
      explanation: "Sử dụng cảm biến DHT22 để đọc nhiệt độ và độ ẩm môi trường.",
      tips: [
        "DHT22 cần điện trở pull-up 10kΩ",
        "Thời gian đọc tối thiểu là 2 giây",
        "Kiểm tra kết nối nếu đọc giá trị NaN"
      ],
      troubleshooting: [
        "Giá trị NaN: Kiểm tra kết nối và điện trở pull-up",
        "Sai nhiệt độ: Để cảm biến ở nơi thoáng khí",
        "Không có dữ liệu: Kiểm tra thư viện DHT"
      ]
    }
  ],
  dragDropConfig: {
    componentLibrary: ["arduino-uno", "led-red", "resistor-220", "resistor-10k", "dht22", "breadboard"],
    wireColors: ["red", "black", "blue", "yellow", "green", "white"],
    snapDistance: 20,
    gridSize: 10,
    zoomRange: [0.5, 2.0]
  }
};
