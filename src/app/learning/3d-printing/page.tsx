import { K2Module } from '@/data/k2-modules';
import { createTitle, createDescription } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { threeDPrintingLessons } from '@/data/3d-printing';

export async function generateMetadata() {
  const title = createTitle('Làm chủ Công nghệ In 3D');
  const description = createDescription(
    'Học cách biến ý tưởng thành hiện thực với công nghệ in 3D. Từ thiết kế mô hình 3D đầu tiên đến vận hành máy in và xử lý hậu kỳ sản phẩm.',
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

export default function ThreeDPrintingPage() {
  const moduleData = {
    id: '3d-printing',
    title: 'Làm chủ Công nghệ In 3D',
    subtitle: 'Từ Ý tưởng Số đến Vật thể Thực',
    description:
      'Khóa học này là cánh cửa đưa bạn vào thế giới sản xuất kỹ thuật số. Bạn sẽ được học toàn bộ quy trình in 3D: từ việc lên ý tưởng, thiết kế mô hình 3D bằng phần mềm chuyên dụng, chuẩn bị file in, vận hành máy in 3D FDM, cho đến các kỹ thuật xử lý hậu kỳ để tạo ra sản phẩm hoàn thiện. Đây là kỹ năng quan trọng trong kỷ nguyên Công nghiệp 4.0.',
    level: 'Trung bình',
    duration: '20-25 giờ',
    category: 'STEM/STEAM',
    features: [
      'Tiếp cận công nghệ sản xuất tiên tiến.',
      'Thực hành với phần mềm thiết kế 3D miễn phí.',
      'Hiểu sâu về cấu tạo và vận hành máy in 3D.',
      'Tạo ra các sản phẩm độc đáo của riêng bạn.',
    ],
    icon: '🖨️',
    color: 'from-orange-500 to-amber-500',
    heroImageUrl: 'https://images.unsplash.com/photo-1600431521340-4914a24359e0?w=1200&h=600&fit=crop',
    objectives: [
      'Sử dụng thành thạo phần mềm thiết kế 3D (ví dụ: Tinkercad, Fusion 360).',
      'Hiểu rõ nguyên lý hoạt động của công nghệ in 3D FDM.',
      'Vận hành máy in 3D, cân bàn, nạp vật liệu và bắt đầu in.',
      'Sử dụng phần mềm Slicer để tối ưu hóa quá trình in.',
      'Áp dụng các kỹ thuật xử lý hậu kỳ để cải thiện chất lượng sản phẩm.',
    ],
    prerequisites: [
      'Tư duy không gian và hình học cơ bản.',
      'Kỹ năng sử dụng máy tính thành thạo.',
      'Sự kiên nhẫn và tỉ mỉ.',
    ],
    careerOutcomes: [
      'Chuyên viên tạo mẫu nhanh (Rapid Prototyping)',
      'Kỹ sư thiết kế sản phẩm',
      'Nghệ sĩ kỹ thuật số',
      'Chủ doanh nghiệp nhỏ sản xuất theo yêu cầu',
    ],
    industryApplications: [
      'Y tế (in bộ phận giả, mô hình phẫu thuật)',
      'Kiến trúc (in sa bàn, mô hình nhà)',
      'Sản xuất (tạo mẫu, đồ gá)',
      'Giáo dục (tạo mô hình học cụ trực quan)',
    ],
    marketDemand: {
      averageSalary: '15-30 triệu VNĐ',
      jobGrowth: '+22%',
      hireDemand: 'Cao',
    },
    relatedModules: [K2Module.ArduinoCircuits, K2Module.Robosim, K2Module.SmartManufacturing],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={threeDPrintingLessons} />;
}
