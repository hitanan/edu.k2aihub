import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { AIForStudentsLessons } from '@/data/ai-for-students';
import { createTitle, createDescription } from '@/utils/seo';

export async function generateMetadata() {
  return {
    title: createTitle('AI cho Học sinh'),
    description: createDescription(
      'Trang bị cho học sinh những kiến thức và kỹ năng cần thiết để sử dụng AI một cách hiệu quả và có đạo đức trong học tập và cuộc sống.',
    ),
    keywords: ['AI cho học sinh', 'trí tuệ nhân tạo', 'giáo dục', 'K2AI'],
    openGraph: {
      title: 'AI cho Học sinh',
      description:
        'Trang bị cho học sinh những kiến thức và kỹ năng cần thiết để sử dụng AI một cách hiệu quả và có đạo đức trong học tập và cuộc sống.',
      type: 'website',
    },
  };
}

export default function AIForStudentsPage() {
  const moduleData = {
    id: 'ai-for-students',
    title: 'AI cho Học sinh',
    subtitle: 'Khai phá tiềm năng học tập với Trí tuệ nhân tạo',
    description:
      'Khóa học này được thiết kế đặc biệt cho học sinh Việt Nam, cung cấp kiến thức nền tảng về AI và hướng dẫn ứng dụng thực tế vào việc học, từ giải quyết bài toán phức tạp, sáng tạo nội dung đến định hướng nghề nghiệp trong tương lai.',
    level: 'Cơ bản',
    duration: '10-12 giờ',
    category: 'Công nghệ',
    features: [
      'Hiểu rõ AI là gì và tác động của nó.',
      'Sử dụng AI để tăng hiệu quả học tập.',
      'Phát triển kỹ năng tư duy phản biện với AI.',
      'Nhận thức về đạo đức khi sử dụng AI.',
    ],
    icon: '🎓',
    color: 'from-blue-500 to-purple-600',
    objectives: [
      'Giải thích được các khái niệm cốt lõi của AI.',
      'Áp dụng các công cụ AI để hỗ trợ việc học và làm bài tập.',
      'Phân tích và đánh giá thông tin do AI tạo ra.',
      'Sử dụng AI một cách có trách nhiệm và đạo đức.',
    ],
    prerequisites: [
      'Kỹ năng sử dụng máy tính cơ bản.',
      'Khả năng đọc hiểu tiếng Việt tốt.',
      'Tinh thần ham học hỏi và khám phá.',
    ],
    careerOutcomes: [
      'Học sinh được trang bị kỹ năng cho tương lai.',
      'Nền tảng để theo đuổi các ngành STEM, CNTT.',
      'Nâng cao khả năng cạnh tranh trong môi trường học tập và làm việc sau này.',
    ],
    industryApplications: ['Giáo dục', 'Nghiên cứu', 'Sáng tạo nội dung', 'Tự động hóa'],
    marketDemand: {
      averageSalary: 'N/A',
      jobGrowth: 'Cao',
      hireDemand: 'Cao',
    },
    relatedModules: ['digital-citizenship-online-safety', 'critical-thinking', 'future-careers-ai'],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={AIForStudentsLessons} />;
}
