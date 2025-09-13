import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { careerDevelopmentLessons } from '@/data/modules/career-development';
import { createModuleMetadata } from '@/utils/seo';
import { ModuleData } from '@/types';

const careerDevelopmentModuleData: ModuleData = {
  id: 'career-development',
  title: 'Phát Triển Sự Nghiệp',
  subtitle: 'Xây dựng lộ trình thành công',
  description:
    'Học cách xây dựng personal brand, kỹ năng phỏng vấn, networking và lập kế hoạch sự nghiệp để đạt được mục tiêu dài hạn.',
  level: 'Cơ bản',
  duration: '5-6 giờ',
  category: 'Professional Skills',
  primaryColor: 'red',
  color: 'from-red-600 to-orange-600',
  icon: '🚀',
  features: [
    'Personal branding và storytelling',
    'Kỹ năng phỏng vấn và negotiation',
    'Networking và relationship building',
    'Lập kế hoạch sự nghiệp và goal setting',
  ],
  objectives: [
    'Xây dựng thương hiệu cá nhân mạnh mẽ và nhận diện chuyên nghiệp',
    'Phát triển kỹ năng phỏng vấn và đàm phán lương hiệu quả',
    'Tạo dựng và duy trì mạng lưới quan hệ nghề nghiệp',
    'Lập kế hoạch sự nghiệp dài hạn với mục tiêu SMART',
  ],
  prerequisites: ['Không có'],
  careerOutcomes: [
    'Chuyên viên nhân sự (HR Specialist)',
    'Quản lý dự án (Project Manager)',
    'Chuyên viên marketing (Marketing Specialist)',
    'Doanh nhân/Khởi nghiệp (Entrepreneur)',
  ],
  marketDemand: {
    averageSalary: '15.000.000 - 30.000.000 VNĐ/tháng',
    jobGrowth: '25% (Cao)',
    hireDemand: 'Cao',
  },
  industryApplications: [
    'Phát triển lãnh đạo trong doanh nghiệp',
    'Khởi nghiệp và xây dựng startup',
    'Tư vấn phát triển sự nghiệp',
    'Coaching và mentoring chuyên nghiệp',
  ],
  relatedModules: ['business-development', 'marketing-digital', 'leadership-management'],
};

export const metadata: Metadata = createModuleMetadata(
  careerDevelopmentModuleData.title,
  careerDevelopmentModuleData.description,
  ['phát triển sự nghiệp', 'personal branding', 'kỹ năng phỏng vấn', 'networking', 'lãnh đạo', 'K2AI'],
  careerDevelopmentModuleData.id,
);

export default function CareerDevelopmentPage() {
  return <ModulePageTemplate moduleData={careerDevelopmentModuleData} lessons={careerDevelopmentLessons} />;
}
