import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { arduinoLessons } from '@/data/arduino';

export const metadata: Metadata = {
  title: createTitle("Bài 3: LED và Digital Outputs - Arduino Programming"),
  description: createDescription("Học cách điều khiển LED và digital outputs với Arduino, tạo hiệu ứng LED đơn giản"),
  keywords: createKeywords(["arduino led", "digital output", "electronics", "programming"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 3: LED và Digital Outputs"),
    description: createDescription("Điều khiển LED và digital outputs với Arduino"),
    type: "website",
  },
};

export default function ArduinoLEDLesson() {
  const lesson = arduinoLessons.find(l => l.id === 'led-digital-outputs');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const ledBasics = [
    {
      concept: 'LED (Light Emitting Diode)',
      description: 'Linh kiện phát sáng khi có dòng điện đi qua',
      characteristics: [
        'Có cực tính (anode +, cathode -)',
        'Cần điện trở hạn dòng',
        'Điện áp hoạt động ~2-3.3V',
        'Dòng điện tiêu thụ 10-20mA'
      ],
      pinout: {
        anode: 'Chân dài, nối với digital pin',
        cathode: 'Chân ngắn, nối với GND'
      },
      icon: '💡'
    },
    {
      concept: 'Digital Output',
      description: 'Xuất tín hiệu số HIGH (5V) hoặc LOW (0V)',
      functions: [
        'pinMode(pin, OUTPUT) - Cấu hình pin là output',
        'digitalWrite(pin, HIGH) - Xuất 5V',
        'digitalWrite(pin, LOW) - Xuất 0V',
        'digitalRead(pin) - Đọc trạng thái pin'
      ],
      usage: 'Điều khiển LED, relay, motor, buzzer',
      icon: '⚡'
    },
    {
      concept: 'Điện Trở (Resistor)',
      description: 'Hạn chế dòng điện để bảo vệ LED',
      calculation: 'R = (Vcc - Vled) / I = (5V - 2V) / 0.02A = 150Ω',
      commonValues: ['220Ω (đỏ-đỏ-nâu)', '330Ω (cam-cam-nâu)', '470Ω (vàng-tím-nâu)'],
      icon: '🔧'
    }
  ];

  const circuitPatterns = [
    {
      name: 'Single LED Circuit',
      description: 'Mạch LED đơn giản nhất',
      components: ['Arduino', '1 LED', '1 Resistor 220Ω', 'Breadboard', 'Jumper wires'],
      wiring: [
        'Digital Pin → Resistor → LED Anode',
        'LED Cathode → GND',
        'Sử dụng pin 13 (có LED onboard)'
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
      icon: '💡'
    },
    {
      name: 'Multiple LEDs',
      description: 'Điều khiển nhiều LED độc lập',
      components: ['Arduino', '3-8 LEDs', 'Resistors 220Ω', 'Breadboard'],
      wiring: [
        'Mỗi LED có resistor riêng',
        'Chân cathode chung nối GND',
        'Mỗi anode nối một digital pin'
      ],
      code: `int ledPins[] = {2, 3, 4, 5, 6};
int numLeds = 5;

void setup() {
  for(int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Chạy LED tuần tự
  for(int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(200);
    digitalWrite(ledPins[i], LOW);
  }
}`,
      icon: '🌟'
    },
    {
      name: 'LED Matrix/Display',
      description: 'Hiển thị patterns với nhiều LED',
      components: ['Arduino', '8x8 LED Matrix hoặc 7-segment display', 'Shift registers'],
      wiring: [
        'Sử dụng shift register 74HC595',
        'Giảm số pin cần thiết',
        'Multiplexing cho matrix lớn'
      ],
      code: `// 7-segment display với shift register
int dataPin = 8;
int clockPin = 12;
int latchPin = 11;

byte numbers[] = {
  0b11111100, // 0
  0b01100000, // 1
  0b11011010, // 2
  // ... thêm patterns
};

void displayNumber(int num) {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, MSBFIRST, numbers[num]);
  digitalWrite(latchPin, HIGH);
}`,
      icon: '🔢'
    }
  ];

  const ledEffects = [
    {
      name: 'Blink Effect',
      description: 'LED nhấp nháy đơn giản',
      difficulty: 'Dễ',
      code: `void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}`,
      variations: ['Blink nhanh/chậm', 'SOS pattern', 'Random blink'],
      icon: '⚡'
    },
    {
      name: 'Fade Effect',
      description: 'LED mờ dần sáng dần (PWM)',
      difficulty: 'Trung bình',
      code: `void loop() {
  for(int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(ledPin, brightness);
    delay(10);
  }
  for(int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(ledPin, brightness);
    delay(10);
  }
}`,
      requirements: 'Pin PWM (~3, ~5, ~6, ~9, ~10, ~11)',
      icon: '🌅'
    },
    {
      name: 'Chase Effect',
      description: 'LED chạy tuần tự (knight rider)',
      difficulty: 'Trung bình',
      code: `void loop() {
  // Chạy từ trái qua phải
  for(int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(100);
    digitalWrite(ledPins[i], LOW);
  }
  // Chạy từ phải qua trái
  for(int i = numLeds-1; i >= 0; i--) {
    digitalWrite(ledPins[i], HIGH);
    delay(100);
    digitalWrite(ledPins[i], LOW);
  }
}`,
      variations: ['Speed control', 'Bouncing ball', 'Wave effect'],
      icon: '🏃'
    },
    {
      name: 'Color Cycling (RGB)',
      description: 'Đổi màu RGB LED',
      difficulty: 'Khó',
      code: `int redPin = 9, greenPin = 10, bluePin = 11;

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  // Red to Green
  for(int i = 0; i < 255; i++) {
    setColor(255-i, i, 0);
    delay(10);
  }
  // Green to Blue
  for(int i = 0; i < 255; i++) {
    setColor(0, 255-i, i);
    delay(10);
  }
  // Blue to Red
  for(int i = 0; i < 255; i++) {
    setColor(i, 0, 255-i);
    delay(10);
  }
}`,
      components: 'RGB LED common cathode + 3 resistors',
      icon: '🌈'
    }
  ];

  const troubleshootingGuide = [
    {
      problem: 'LED không sáng',
      causes: [
        'Chân LED bị nối ngược (anode/cathode)',
        'Không có điện trở hoặc điện trở quá lớn',
        'Pin không được cấu hình OUTPUT',
        'LED bị hỏng'
      ],
      solutions: [
        'Kiểm tra chân dài (anode) nối với pin, chân ngắn nối GND',
        'Dùng điện trở 220-470Ω',
        'Thêm pinMode(pin, OUTPUT) trong setup()',
        'Thử LED khác hoặc test với multimeter'
      ],
      icon: '🔍'
    },
    {
      problem: 'LED sáng mờ hoặc nhấp nháy lạ',
      causes: [
        'Điện trở quá lớn',
        'Nguồn điện yếu',
        'Nhiều LED chia chung nguồn',
        'Code có vấn đề timing'
      ],
      solutions: [
        'Giảm giá trị điện trở (nhưng không dưới 150Ω)',
        'Kiểm tra nguồn Arduino',
        'Sử dụng nguồn ngoài cho nhiều LED',
        'Kiểm tra delay() và logic code'
      ],
      icon: '💡'
    },
    {
      problem: 'Arduino reset hoặc nóng',
      causes: [
        'Quá tải dòng điện',
        'Short circuit',
        'Không có điện trở bảo vệ'
      ],
      solutions: [
        'Tính toán tổng dòng điện < 200mA',
        'Kiểm tra kết nối, tránh nối tắt',
        'Luôn dùng điện trở cho LED'
      ],
      icon: '🔥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/arduino" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Arduino
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">💡</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full">
                🎯 {lesson.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Mục Tiêu Bài Học
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-3 mt-1">⚡</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* LED Basics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📚 Kiến Thức Cơ Bản
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ledBasics.map((basic, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{basic.icon}</div>
                  <h3 className="text-xl font-bold text-white">{basic.concept}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{basic.description}</p>
                
                {basic.characteristics && (
                  <div className="space-y-2">
                    <h4 className="text-blue-300 text-sm font-semibold">Đặc điểm:</h4>
                    <ul className="space-y-1">
                      {basic.characteristics.map((char, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {basic.functions && (
                  <div className="space-y-2">
                    <h4 className="text-green-300 text-sm font-semibold">Hàm Arduino:</h4>
                    <ul className="space-y-1">
                      {basic.functions.map((func, idx) => (
                        <li key={idx} className="text-gray-300 text-xs font-mono bg-black/20 p-2 rounded">
                          {func}
                        </li>
                      ))}
                    </ul>
                    <p className="text-yellow-300 text-sm mt-2">Ứng dụng: {basic.usage}</p>
                  </div>
                )}
                
                {basic.calculation && (
                  <div className="space-y-2">
                    <h4 className="text-purple-300 text-sm font-semibold">Tính toán:</h4>
                    <div className="bg-black/20 p-2 rounded text-xs font-mono text-gray-300">
                      {basic.calculation}
                    </div>
                    <div className="text-sm">
                      <span className="text-yellow-300">Giá trị thường dùng: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {basic.commonValues.map((val, idx) => (
                          <span key={idx} className="bg-yellow-500/20 text-yellow-200 px-2 py-1 rounded text-xs">
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Circuit Patterns */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔧 Mạch Điện Cơ Bản
          </h2>
          
          <div className="space-y-8">
            {circuitPatterns.map((pattern, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{pattern.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{pattern.name}</h3>
                    <p className="text-gray-300">{pattern.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-300 text-sm font-semibold mb-2">📦 Linh kiện cần:</h4>
                      <ul className="space-y-1">
                        {pattern.components.map((comp, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="text-green-400 mr-2">•</span>
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-300 text-sm font-semibold mb-2">🔌 Kết nối:</h4>
                      <ul className="space-y-1">
                        {pattern.wiring.map((wire, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">→</span>
                            {wire}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-300 text-sm font-semibold mb-2">💻 Code mẫu:</h4>
                    <pre className="bg-black/30 border border-white/10 rounded-lg p-4 text-xs font-mono text-gray-300 overflow-x-auto">
                      {pattern.code}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LED Effects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            ✨ Hiệu Ứng LED
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ledEffects.map((effect, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{effect.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{effect.name}</h3>
                      <p className="text-gray-300 text-sm">{effect.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    effect.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    effect.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {effect.difficulty}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-300 text-sm font-semibold mb-2">Code:</h4>
                    <pre className="bg-black/30 border border-white/10 rounded-lg p-3 text-xs font-mono text-gray-300 overflow-x-auto">
                      {effect.code}
                    </pre>
                  </div>
                  
                  {effect.variations && (
                    <div>
                      <h4 className="text-blue-300 text-sm font-semibold mb-2">Biến thể:</h4>
                      <div className="flex flex-wrap gap-2">
                        {effect.variations.map((variation, idx) => (
                          <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs">
                            {variation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {effect.requirements && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <span className="text-yellow-300 text-sm font-semibold">Yêu cầu: </span>
                      <span className="text-gray-300 text-sm">{effect.requirements}</span>
                    </div>
                  )}
                  
                  {effect.components && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <span className="text-green-300 text-sm font-semibold">Linh kiện: </span>
                      <span className="text-gray-300 text-sm">{effect.components}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Khắc Phục Sự Cố
          </h2>
          
          <div className="space-y-6">
            {troubleshootingGuide.map((issue, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{issue.icon}</div>
                  <h3 className="text-xl font-bold text-red-300">{issue.problem}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-orange-300 text-sm font-semibold mb-3">⚠️ Nguyên nhân có thể:</h4>
                    <ul className="space-y-2">
                      {issue.causes.map((cause, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-3">✅ Cách khắc phục:</h4>
                    <ul className="space-y-2">
                      {issue.solutions.map((solution, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-2">Linh kiện:</h4>
                    <ul className="space-y-1">
                      {lesson.materials.slice(0, 5).map((material, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="text-green-400 mr-2">•</span>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Code mẫu:</h4>
                    <pre className="bg-black/30 border border-white/10 rounded-lg p-2 text-xs font-mono text-gray-300 overflow-x-auto">
                      {exercise.code}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-300 text-sm font-semibold mb-2">Kết quả:</h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-semibold mb-2">💡 Gợi ý khắc phục:</h4>
                  <ul className="space-y-1">
                    {exercise.troubleshooting.map((tip, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real World Applications */}
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌍 Ứng Dụng Thực Tế
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="text-blue-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/arduino/arduino-inputs"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: Inputs
          </Link>
          
          <Link 
            href="/arduino/sensors-analog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Bài tiếp theo: Sensors →
          </Link>
        </div>
      </div>
    </div>
  );
}
