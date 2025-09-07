import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { pythonLessons } from '@/data/python';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

export const metadata: Metadata = createModuleMetadata(
  'Python Programming - Lập Trình Python',
  'Học Python từ cơ bản đến nâng cao. Khám phá Data Science, Web Development, AI và tự động hóa với ngôn ngữ lập trình phổ biến nhất thế giới.',
  [
    'python programming',
    'học python',
    'lập trình python',
    'data science',
    'web development',
    'machine learning',
    'pandas',
    'django',
    'K2AI',
  ],
  'python',
);

export default function PythonPage() {
  const moduleData = {
    id: 'python',
    title: 'Python Programming',
    subtitle: 'Từ Zero đến Hero trong Lập Trình Python',
    description:
      'Khóa học toàn diện giúp bạn làm chủ Python, ngôn ngữ lập trình số 1 thế giới. Từ cú pháp cơ bản đến các ứng dụng thực tế trong khoa học dữ liệu, phát triển web và trí tuệ nhân tạo, khóa học này là nền tảng vững chắc cho sự nghiệp lập trình viên của bạn.',
    level: 'Cơ bản - Nâng cao',
    duration: '25-30 giờ',
    category: 'Programming & Development',
    features: [
      'Học từ cú pháp cơ bản đến OOP nâng cao.',
      'Thực hành với 8+ dự án thực tế.',
      'Nắm vững các cấu trúc dữ liệu và giải thuật.',
      'Xây dựng ứng dụng web, tool tự động hóa.',
    ],
    icon: '🐍',
    color: 'from-yellow-500 to-green-500',
    objectives: [
      'Nắm vững cú pháp và các khái niệm cốt lõi của Python.',
      'Sử dụng thành thạo các cấu trúc dữ liệu: Lists, Dictionaries, Tuples.',
      'Hiểu và áp dụng lập trình hướng đối tượng (OOP).',
      'Xử lý file, làm việc với dữ liệu từ CSV và JSON.',
      'Viết các thuật toán tìm kiếm, sắp xếp cơ bản.',
      'Xây dựng các ứng dụng nhỏ và script tự động hóa.',
    ],
    prerequisites: [
      'Kỹ năng sử dụng máy tính cơ bản.',
      'Tư duy logic và khả năng giải quyết vấn đề.',
      'Không yêu cầu kinh nghiệm lập trình trước đó.',
    ],
    careerOutcomes: [
      'Python Developer',
      'Data Analyst / Data Scientist',
      'Web Developer (Django/Flask)',
      'AI/ML Engineer',
      'Automation Engineer',
      'Software Developer',
    ],
    industryApplications: [
      'Phân tích dữ liệu và trực quan hóa trong tài chính.',
      'Xây dựng backend cho ứng dụng web và di động.',
      'Tự động hóa các tác vụ văn phòng và hệ thống.',
      'Phát triển các mô hình học máy và AI.',
      'Lập trình game và ứng dụng desktop.',
      'Nghiên cứu khoa học và tính toán hiệu năng cao.',
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ',
      jobGrowth: '+25%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.Arduino, K2Module.Stem, K2Module.Scratch, K2Module.DataScienceAnalytics],
    heroImageUrl: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={pythonLessons} />;
}
