---
title: 'Hướng Dẫn Arduino Cơ Bản: Lắp Mạch và Viết Code Đầu Tiên'
description: 'Bắt đầu với Arduino: phần cứng cần có, sơ đồ nối dây, và chương trình đầu tiên điều khiển LED, cảm biến.'
date: '2025-09-20'
author: 'K2AiHub IoT Team'
category: 'Hướng Dẫn'
tags: ['Arduino', 'IoT', 'Cảm Biến', 'STEM', 'K2AiHub']
featured: false
readingTime: '12 phút đọc'
---

# Hướng Dẫn Arduino Cơ Bản: Lắp Mạch và Viết Code Đầu Tiên

Arduino giúp bạn biến ý tưởng thành sản phẩm phần cứng. Bài viết này hướng dẫn từ A-Z cho người mới.

## Bộ kit cần có

- Arduino Uno R3 (hoặc Nano)
- Breadboard, dây cắm, điện trở 220Ω
- LED, cảm biến DHT11/DHT22 (tùy chọn)

## Mạch LED nhấp nháy

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}
```

## Đọc cảm biến DHT

- Cài thư viện "DHT sensor library" trong Library Manager.
- Kết nối: VCC → 5V, GND → GND, DATA → D2.

## Dự án nhỏ gợi ý

- Đo nhiệt độ/độ ẩm và hiển thị lên Serial Monitor
- Báo động chuyển động với PIR + buzzer

## Học tiếp gì?

- [Module Arduino & IoT](/arduino)
- [STEM - Engineering Challenges](/learning/stem)
- [Robotics](/robotics)
