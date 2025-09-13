import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { CybersecurityLessons } from '@/data/lessons/cybersecurity';

export const cybersecurityModuleData: ModuleData = {
  id: K2Module.Cybersecurity,
  title: 'Cybersecurity & Ethical Hacking',
  subtitle: 'An ninh mạng & Hacking có đạo đức',
  description:
    'Học cách bảo vệ hệ thống, phát hiện và ứng phó với các mối đe dọa an ninh mạng. Nắm vững các kỹ thuật ethical hacking và kiểm thử xâm nhập.',
  category: 'professional',
  icon: '🔒',
  color: 'from-red-600 to-orange-600',
  level: 'Nâng cao',
  duration: '12-15 giờ',
  features: [
    'Ethical Hacking',
    'Penetration Testing',
    'Incident Response',
    'Security Architecture',
    'Digital Forensics',
  ],
  prerequisites: ['Kiến thức cơ bản về mạng', 'Hiểu biết về hệ điều hành', 'Tư duy logic'],
  objectives: [
    'Nắm vững các nguyên tắc cơ bản và nâng cao của an ninh mạng.',
    'Thực hành các kỹ thuật kiểm thử xâm nhập (penetration testing) có đạo đức.',
    'Học cách ứng phó với các sự cố an ninh mạng và điều tra số (digital forensics).',
    'Thiết kế và quản lý kiến trúc an ninh cho doanh nghiệp.',
  ],
  careerOutcomes: [
    'Chuyên gia An ninh mạng (Cybersecurity Specialist)',
    'Chuyên gia Kiểm thử xâm nhập (Penetration Tester)',
    'Chuyên gia Ứng phó sự cố (Incident Responder)',
    'Kiến trúc sư An ninh (Security Architect)',
    'Chuyên gia Điều tra số (Digital Forensics Analyst)',
  ],
  industryApplications: [
    { name: 'Tài chính - Ngân hàng', description: 'Bảo vệ dữ liệu tài chính và giao dịch.' },
    { name: 'Chính phủ', description: 'Bảo vệ hạ tầng quan trọng và dữ liệu quốc gia.' },
    { name: 'Y tế', description: 'Bảo vệ thông tin bệnh nhân và hệ thống y tế.' },
    { name: 'Thương mại điện tử', description: 'Đảm bảo an toàn cho giao dịch và dữ liệu khách hàng.' },
    { name: 'Công nghệ', description: 'Bảo vệ sản phẩm phần mềm và hạ tầng đám mây.' },
  ],
  marketDemand: {
    averageSalary: '100-250 triệu VND/năm',
    jobGrowth: '32% (rất cao)',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.ProgrammingRobotics, K2Module.DataScience],
  lessons: CybersecurityLessons,
};
