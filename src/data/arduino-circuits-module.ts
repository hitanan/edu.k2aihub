import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const arduinoCircuitsModuleData: ModuleNavigation = {
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
  lessons: [
    {
      id: 'nhap-mon-arduino',
      title: 'Nhập môn Arduino và Điện tử Căn bản',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'dieu-khien-dau-vao-ky-thuat-so',
      title: 'Điều khiển Đầu vào Kỹ thuật số với Nút nhấn',
      duration: '120 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'dieu-che-do-rong-xung-pwm',
      title: 'Điều chế Độ rộng xung (PWM) - Làm mờ Đèn LED',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'doc-tin-hieu-analog',
      title: 'Đọc Tín hiệu Analog với Biến trở',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
