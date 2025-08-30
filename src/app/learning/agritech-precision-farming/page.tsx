import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { AgriTechLessons } from '@/data/agritech-precision-farming';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'AgriTech & Precision Farming - Nông Nghiệp Thông Minh',
  'Công nghệ nông nghiệp thông minh và precision farming. IoT sensors, drone technology và smart irrigation',
  ["agritech","precision farming","smart agriculture","iot sensors","drone technology"],
  'agritech-precision-farming'
);

export default function AgriTechMainPage() {
  const moduleData = {
    id: 'agritech-precision-farming',
    title: 'AgriTech & Nông nghiệp Chính xác',
    subtitle: 'Công nghệ nông nghiệp thông minh cho tương lai bền vững',
    description: 'Khám phá và nắm vững các công nghệ nông nghiệp tiên tiến như IoT, AI, drone, blockchain để tối ưu hóa năng suất và chất lượng nông sản. Thị trường AgriTech Việt Nam dự kiến đạt $3-8 tỷ USD vào năm 2030 với tốc độ tăng trưởng 40%/năm.',
    level: 'Trung bình đến Nâng cao',
    duration: '18-22 giờ',
    category: 'Technology & Innovation',
    features: [
      'IoT sensors và hệ thống giám sát cây trồng thông minh',
      'Drone nông nghiệp cho giám sát và phun thuốc tự động',
      'AI phát hiện sâu bệnh và tối ưu hóa dinh dưỡng',
      'Blockchain cho truy xuất nguồn gốc và chuỗi cung ứng minh bạch',
      'Vertical farming và hydroponic cho nông nghiệp đô thị',
      'Robot nông nghiệp và tự động hóa quy trình sản xuất',
      'Hệ thống tưới tiêu thông minh tiết kiệm nước',
      'Dự án thực tế với nông dân và doanh nghiệp Việt Nam'
    ],
    icon: '🌱',
    color: 'from-green-600 to-emerald-600',
    objectives: [
      'Thiết kế và triển khai hệ thống IoT giám sát nông trại thông minh',
      'Sử dụng drone và AI để phát hiện sớm sâu bệnh và tối ưu hóa phun thuốc',
      'Phát triển ứng dụng mobile AI cho chẩn đoán bệnh cây trồng',
      'Xây dựng hệ thống blockchain cho truy xuất nguồn gốc nông sản',
      'Thiết kế vertical farm và hydroponic cho môi trường đô thị',
      'Lập trình robot nông nghiệp cho tự động hóa các tác vụ',
      'Phân tích dữ liệu và tối ưu hóa quy trình sản xuất nông nghiệp'
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp và cây trồng',
      'Hiểu biết về công nghệ IoT và sensors',
      'Kỹ năng lập trình cơ bản (Python/JavaScript)',
      'Khả năng sử dụng smartphone và máy tính'
    ],
    careerOutcomes: [
      'Chuyên gia AgriTech và Nông nghiệp thông minh',
      'Kỹ sư IoT cho nông nghiệp và môi trường',
      'Nhà phát triển ứng dụng AI cho nông nghiệp',
      'Chuyên gia blockchain trong chuỗi cung ứng thực phẩm',
      'Nhà thiết kế hệ thống vertical farming',
      'Chuyên gia robot nông nghiệp và tự động hóa',
      'Tư vấn viên chuyển đổi số trong nông nghiệp',
      'Founder/Co-founder startup AgriTech'
    ],
    industryApplications: [
      'Nông trại thông minh với hệ thống IoT giám sát toàn diện',
      'Ứng dụng AI cho chẩn đoán bệnh cây và tối ưu hóa dinh dưỡng',
      'Drone nông nghiệp cho giám sát và phun thuốc tự động',
      'Blockchain platform cho truy xuất nguồn gốc nông sản xuất khẩu',
      'Vertical farm trong chung cư và tòa nhà đô thị',
      'Robot thu hoạch và làm cỏ tự động cho nông trại lớn',
      'Hệ thống tưới tiêu thông minh tiết kiệm nước 40-50%',
      'Platform kết nối nông dân với thị trường và công nghệ'
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+40%',
      hireDemand: 'Rất Cao'
    },
    heroImageUrl: '/images/agritech-smart-farming.jpg',
    relatedModules: [
      'green-technology',
      'arduino',
      'ai-art',
      'biotechnology'
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={AgriTechLessons}
    />
  );
}
