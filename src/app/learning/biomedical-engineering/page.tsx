import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { biomedicalEngineeringLessons } from '@/data/modules/biomedical-engineering';
import { createModuleMetadata } from '@/utils/seo';
import { ModuleData } from '@/types';

export const metadata: Metadata = createModuleMetadata(
  'Kỹ Thuật Y Sinh - Biomedical Engineering',
  'Làm chủ kỹ thuật y sinh: thiết kế thiết bị y tế, xử lý tín hiệu sinh học, y học tái tạo, robot phẫu thuật. Ứng dụng trong y tế Việt Nam và tuân thủ quy định của FDA/Bộ Y tế.',
  [
    'kỹ thuật y sinh',
    'thiết bị y tế',
    'tín hiệu sinh học',
    'y học tái tạo',
    'robot phẫu thuật',
    'y tế Việt Nam',
    'quy định FDA',
    'sáng tạo y tế',
    'K2AI',
  ],
  'biomedical-engineering',
);

const biomedicalEngineeringModuleData: ModuleData = {
  id: 'biomedical-engineering',
  title: 'Kỹ Thuật Y Sinh',
  subtitle: 'Công nghệ cho Sức khỏe: Từ Phòng thí nghiệm đến Lâm sàng',
  description:
    'Khóa học toàn diện về kỹ thuật y sinh, bao gồm thiết kế thiết bị y tế, xử lý tín hiệu sinh học, y học tái tạo và robot phẫu thuật. Tập trung đặc biệt vào các ứng dụng trong hệ thống y tế Việt Nam, tuân thủ quy định của Bộ Y tế và thúc đẩy sáng tạo trong lĩnh vực công nghệ y tế.',
  level: 'Nâng cao',
  duration: '30 giờ',
  category: 'Khoa học & Kỹ thuật',
  heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&auto=format',
  features: [
    'Thiết kế & Phát triển Thiết bị Y tế theo tiêu chuẩn FDA/Bộ Y tế',
    'Xử lý Tín hiệu Sinh học & Hình ảnh Y tế bằng AI/ML',
    'Y học Tái tạo & Kỹ thuật Mô cho ứng dụng lâm sàng',
    'Robot Y tế & Hệ thống Phẫu thuật với phản hồi xúc giác và thị giác máy tính',
    'Tích hợp vào Hệ thống Y tế Việt Nam qua hợp tác với các bệnh viện',
  ],
  icon: 'heart-pulse',
  color: 'teal',
  objectives: [
    'Thiết kế và phát triển các thiết bị y tế theo tiêu chuẩn pháp lý quốc tế.',
    'Triển khai các thuật toán xử lý tín hiệu sinh học tiên tiến cho các ứng dụng chẩn đoán.',
    'Làm chủ các kỹ thuật y học tái tạo bao gồm kỹ thuật mô và liệu pháp tế bào gốc.',
    'Xây dựng các hệ thống robot phẫu thuật với thị giác máy tính và phản hồi xúc giác.',
    'Nắm vững môi trường pháp lý y tế Việt Nam và triển khai lâm sàng.',
  ],
  prerequisites: [
    'Nền tảng kỹ thuật vững chắc về điện, cơ khí hoặc khoa học máy tính.',
    'Kỹ năng lập trình MATLAB, Python, C++ cho các ứng dụng y tế.',
    'Hiểu biết về giải phẫu, sinh lý người và thuật ngữ y khoa.',
    'Kiến thức về xử lý tín hiệu, hệ thống điều khiển và khoa học vật liệu.',
  ],
  careerOutcomes: [
    'Kỹ sư Y sinh (Lương: 25-60 triệu VNĐ/tháng)',
    'Nhà thiết kế Thiết bị Y tế (Lương: 30-70 triệu VNĐ/tháng)',
    'Chuyên gia Pháp chế Y tế (Lương: 35-80 triệu VNĐ/tháng)',
    'Kỹ sư Robot Phẫu thuật (Lương: 45-100 triệu VNĐ/tháng)',
  ],
  industryApplications: [
    'Bệnh viện Việt Nam: Tích hợp các công nghệ y tế tiên tiến.',
    'Nhà sản xuất thiết bị y tế: Năng lực R&D và sản xuất tại địa phương.',
    'Công ty dược phẩm: Hệ thống phân phối thuốc và thiết bị chẩn đoán.',
    'Các startup y tế: Sáng tạo trong các giải pháp y tế giá cả phải chăng.',
  ],
  marketDemand: {
    averageSalary: '45 triệu VNĐ/tháng',
    jobGrowth: '15% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['advanced-ai', 'robotics', 'arduino', 'python'],
};

export default function BiomedicalEngineeringPage() {
  return <ModulePageTemplate moduleData={biomedicalEngineeringModuleData} lessons={biomedicalEngineeringLessons} />;
}
