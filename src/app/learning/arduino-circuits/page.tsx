import { K2Module } from '@/data/k2-modules';
import { createTitle, createDescription } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { arduinoCircuitsModuleData } from '@/data/modules/arduino-circuits';

const lessons = arduinoCircuitsModuleData.lessons || [];

export async function generateMetadata() {
  const title = createTitle('Xây dựng Mạch điện tử với Arduino');
  const description = createDescription(
    'Học cách xây dựng các mạch điện tử tương tác từ cơ bản đến nâng cao với Arduino. Khám phá thế giới STEM/STEAM qua các dự án thực tế và sáng tạo.',
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function ArduinoCircuitsPage() {
  const moduleData = {
    id: 'arduino-circuits',
    title: 'Xây dựng Mạch điện tử với Arduino',
    subtitle: 'Từ Đèn LED Nhấp nháy đến Robot Tự hành',
    description:
      'Khóa học này cung cấp một hành trình toàn diện vào thế giới điện tử và lập trình vi điều khiển với Arduino. Bạn sẽ học từ những khái niệm cơ bản nhất như dòng điện, điện trở, đến việc xây dựng các dự án phức tạp, kết hợp cảm biến, động cơ và màn hình hiển thị. Đây là nền tảng vững chắc cho bất kỳ ai đam mê STEM, robot và Internet of Things (IoT).',
    level: 'Cơ bản',
    duration: '25-30 giờ',
    category: 'STEM/STEAM',
    features: [
      'Hướng dẫn trực quan từng bước.',
      'Mô phỏng 3D tương tác.',
      'Dự án thực tế, ứng dụng cao.',
      'Kiến thức nền tảng về điện tử và lập trình C++.',
    ],
    icon: '🤖',
    color: 'from-green-500 to-teal-500',
    heroImageUrl: 'https://images.unsplash.com/photo-1615942939653-7554ab940136?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu rõ các khái niệm cơ bản về điện tử và vi điều khiển.',
      'Sử dụng thành thạo Arduino IDE và ngôn ngữ lập trình C++ cho Arduino.',
      'Tự tay thiết kế, lắp ráp và lập trình các mạch điện tử phổ biến.',
      'Phát triển tư duy logic, kỹ năng giải quyết vấn đề và sự sáng tạo.',
      'Xây dựng nền tảng để khám phá các lĩnh vực nâng cao như robot, IoT và tự động hóa.',
    ],
    prerequisites: [
      'Đam mê công nghệ và sáng tạo.',
      'Kỹ năng sử dụng máy tính cơ bản.',
      'Không yêu cầu kiến thức về lập trình hay điện tử trước đó.',
    ],
    careerOutcomes: [
      'Kỹ sư IoT',
      'Chuyên viên phát triển sản phẩm nhúng',
      'Nhà thiết kế mạch điện tử',
      'Chuyên gia tự động hóa',
    ],
    industryApplications: [
      'Nhà thông minh (Smart Home)',
      'Nông nghiệp công nghệ cao',
      'Robot và tự động hóa công nghiệp',
      'Thiết bị đeo thông minh (Wearables)',
    ],
    marketDemand: {
      averageSalary: '18-35 triệu VNĐ',
      jobGrowth: '+30%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.Robosim, K2Module.SmartManufacturing, K2Module.RobloxGameDev],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={lessons} />;
}
