import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { scratchLessons } from '@/data/scratch';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export async function generateMetadata() {
  return {
    title: createTitle('Lập trình Scratch'),
    description: createDescription(
      'Học lập trình trực quan với Scratch. Tạo game, hoạt hình và câu chuyện tương tác. Khóa học dành cho người mới bắt đầu, đặc biệt là trẻ em.',
    ),
    keywords: ['Scratch', 'lập trình cho trẻ em', 'lập trình trực quan', 'K2AI'],
    openGraph: {
      title: createTitle('Khám phá Lập trình Sáng tạo với Scratch'),
      description:
        'Bắt đầu hành trình lập trình của bạn với Scratch, công cụ kéo-thả trực quan giúp biến ý tưởng thành hiện thực.',
      type: 'website',
    },
  };
}

export default function ScratchModulePage() {
  const moduleData = {
    id: 'scratch',
    title: 'Lập trình Scratch',
    subtitle: 'Nền tảng lập trình trực quan, sáng tạo cho mọi lứa tuổi.',
    description:
      'Khóa học này sẽ đưa bạn vào thế giới lập trình đầy màu sắc của Scratch. Thông qua các khối lệnh kéo-thả, bạn sẽ học được tư duy logic, giải quyết vấn đề và tạo ra các sản phẩm sáng tạo của riêng mình như game, hoạt hình và các câu chuyện tương tác.',
    level: 'Cơ bản',
    duration: '5-8 giờ',
    category: 'Creative Technology',
    features: [
      'Giao diện kéo-thả trực quan, không cần viết code.',
      'Phát triển tư duy logic và kỹ năng giải quyết vấn đề.',
      'Tạo ra sản phẩm game, hoạt hình, và câu chuyện tương tác.',
      'Nền tảng vững chắc để học các ngôn ngữ lập trình khác.',
    ],
    icon: '🎨',
    color: 'from-orange-500 to-amber-500',
    objectives: [
      'Hiểu các khái niệm lập trình cơ bản: vòng lặp, điều kiện, biến số.',
      'Tự tin tạo ra các dự án Scratch của riêng mình.',
      'Phát triển kỹ năng kể chuyện và thiết kế game.',
      'Sử dụng Scratch để học các môn học khác như Toán, Lý.',
    ],
    prerequisites: ['Kỹ năng sử dụng máy tính cơ bản.', 'Không yêu cầu kinh nghiệm lập trình.'],
    careerOutcomes: [
      'Nhà phát triển game độc lập (Indie Game Developer)',
      'Nhà thiết kế hoạt hình (Animator)',
      'Giáo viên STEM',
      'Chuyên gia thiết kế trải nghiệm học tập (Learning Experience Designer)',
    ],
    industryApplications: [
      'Giáo dục: Công cụ dạy và học lập trình phổ biến nhất.',
      'Giải trí: Tạo mẫu (prototyping) cho các ý tưởng game.',
      'Marketing: Tạo các quảng cáo tương tác đơn giản.',
      'Nghệ thuật: Sáng tạo nghệ thuật kỹ thuật số (digital art).',
    ],
    marketDemand: {
      averageSalary: 'N/A',
      jobGrowth: 'Kỹ năng nền tảng',
      hireDemand: 'Cao trong lĩnh vực giáo dục STEM',
    },
    relatedModules: [K2Module.Python, K2Module.GameDevelopment, K2Module.Robotics],
    heroImageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={scratchLessons} />;
}
