import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { softSkillsLessons } from '@/data/soft-skills';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Kỹ năng mềm'),
    description: createDescription(
      'Phát triển các kỹ năng mềm thiết yếu để thành công trong sự nghiệp và cuộc sống, bao gồm giao tiếp, làm việc nhóm, và lãnh đạo.',
    ),
    keywords: ['kỹ năng mềm', 'soft skills', 'giao tiếp', 'làm việc nhóm', 'lãnh đạo', 'phát triển bản thân', 'K2AI'],
    openGraph: {
      title: 'Kỹ năng mềm - Phát triển bản thân toàn diện',
      description:
        'Trang bị những kỹ năng mềm quan trọng nhất để tự tin bước vào thị trường lao động và xây dựng một sự nghiệp vững chắc.',
      type: 'website',
    },
  };
}

export default function SoftSkillsModulePage() {
  const moduleData = {
    id: 'soft-skills',
    title: 'Kỹ năng mềm',
    subtitle: 'Chìa khóa thành công trong kỷ nguyên số',
    description:
      'Trong một thế giới không ngừng biến đổi, kỹ năng mềm là nền tảng vững chắc giúp bạn thích ứng, phát triển và dẫn đầu. Khóa học này cung cấp các kiến thức và bài tập thực hành để bạn làm chủ các kỹ năng giao tiếp, tư duy phản biện, làm việc nhóm và lãnh đạo.',
    level: 'Cơ bản',
    duration: '10-15 giờ',
    category: 'Professional Skills',
    features: [
      'Nắm vững nghệ thuật giao tiếp và thuyết trình.',
      'Rèn luyện tư duy phản biện và giải quyết vấn đề.',
      'Học cách làm việc nhóm hiệu quả và cộng tác.',
      'Phát triển kỹ năng lãnh đạo và tạo ảnh hưởng.',
    ],
    icon: '🤝',
    color: 'from-blue-500 to-sky-500',
    objectives: [
      'Trang bị kỹ năng giao tiếp hiệu quả trong mọi tình huống.',
      'Nâng cao khả năng tư duy logic và giải quyết vấn đề phức tạp.',
      'Thúc đẩy tinh thần đồng đội và tối ưu hiệu suất làm việc nhóm.',
      'Xây dựng nền tảng để trở thành một nhà lãnh đạo truyền cảm hứng.',
    ],
    prerequisites: ['Không yêu cầu kiến thức chuyên môn.', 'Tinh thần cầu tiến và mong muốn phát triển bản thân.'],
    careerOutcomes: [
      'Chuyên viên nhân sự',
      'Quản lý dự án',
      'Trưởng nhóm kinh doanh',
      'Bất kỳ vai trò nào đòi hỏi sự tương tác và hợp tác',
    ],
    industryApplications: [
      'Công nghệ thông tin',
      'Marketing và Truyền thông',
      'Tài chính - Ngân hàng',
      'Giáo dục và Đào tạo',
    ],
    marketDemand: {
      averageSalary: '12-25 triệu VNĐ',
      jobGrowth: '+20%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.EmotionalIntelligence, K2Module.PublicSpeaking, K2Module.Leadership],
    heroImageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={softSkillsLessons} />;
}
