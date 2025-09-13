import { Briefcase, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { K2Module } from '@/data/k2-modules';
import type { ModuleData } from '@/types';
import { createModuleMetadata } from '@/utils/seo';
import { CybersecurityLessons } from '@/data/lessons/cybersecurity';

const cybersecurityModuleData: ModuleData = {
  id: 'cybersecurity',
  title: 'An Ninh Mạng & Ethical Hacking',
  subtitle: 'Trở thành chuyên gia an ninh mạng với các kỹ năng phòng thủ và tấn công có đạo đức.',
  description:
    'Khóa học này cung cấp kiến thức sâu rộng về an ninh mạng, từ các khái niệm cơ bản đến các kỹ thuật tấn công và phòng thủ tiên tiến. Học viên sẽ được thực hành trên các nền tảng giả lập để xây dựng kỹ năng thực tế.',
  level: 'Nâng cao',
  duration: '18 tuần',
  category: 'Công nghệ & Lập trình',
  primaryColor: 'red',
  color: 'red',
  gradientColors: 'from-red-500 to-orange-500',
  basePath: '/learning/cybersecurity',
  heroImageUrl:
    'https://images.unsplash.com/photo-1544256718-3b62ff080b94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  icon: 'ShieldCheck',
  features: ['Phòng thủ chủ động', 'Tấn công có đạo đức', 'Phân tích mã độc', 'Bảo mật hệ thống'],
  objectives: [
    'Hiểu rõ các lỗ hổng bảo mật phổ biến và cách vá lỗi.',
    'Thực hiện các cuộc tấn công thử nghiệm (pentesting) một cách có đạo đức.',
    'Xây dựng và triển khai các chiến lược phòng thủ an ninh mạng hiệu quả.',
    'Phân tích và ứng phó với các sự cố an ninh mạng.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về mạng máy tính (TCP/IP, DNS).',
    'Kinh nghiệm lập trình với Python hoặc JavaScript.',
    'Hiểu biết về hệ điều hành Linux.',
  ],
  careerOutcomes: [
    'Chuyên viên phân tích an ninh mạng (SOC Analyst)',
    'Chuyên gia kiểm thử xâm nhập (Penetration Tester)',
    'Kỹ sư bảo mật (Security Engineer)',
    'Chuyên gia tư vấn an ninh mạng',
  ],
  marketDemand: {
    averageSalary: '25.000.000 - 50.000.000 VNĐ/tháng',
    jobGrowth: '35% (Rất cao)',
    hireDemand: 'Cao',
  },
  industryApplications: [
    'Bảo vệ hệ thống cho các tập đoàn lớn.',
    'Tư vấn an ninh mạng cho các công ty khởi nghiệp.',
    'Phát triển công cụ bảo mật.',
    'Nghiên cứu và phát triển tại các viện an ninh mạng.',
  ],
  relatedModules: [K2Module.Python, K2Module.Arduino, K2Module.Robotics, K2Module.DataScienceAnalytics],
};

export const metadata: Metadata = createModuleMetadata(
  cybersecurityModuleData.title,
  cybersecurityModuleData.description,
  ['an ninh mạng', 'hacker éthique', 'bảo mật', 'K2AI'],
  cybersecurityModuleData.id,
);

export default function CybersecurityPage() {
  return (
    <ModulePageTemplate
      moduleData={cybersecurityModuleData}
      lessons={CybersecurityLessons}
      additionalStats={[
        {
          label: 'Tỷ lệ việc làm sau khóa học',
          value: '92%',
          icon: <Briefcase className="h-6 w-6" />,
        },
        {
          label: 'Mức lương khởi điểm trung bình',
          value: '25.000.000 VNĐ',
          icon: <TrendingUp className="h-6 w-6" />,
        },
      ]}
    />
  );
}
