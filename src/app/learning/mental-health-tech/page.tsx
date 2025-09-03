import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mentalHealthLessons } from '@/data/mental-health-tech';
import { createTitle, createDescription } from '@/utils/seo';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Công nghệ Sức khỏe Tâm thần'),
    description: createDescription(
      'Khóa học toàn diện về ứng dụng công nghệ trong sức khỏe tâm thần, từ ứng dụng di động đến AI trong trị liệu.',
    ),
    keywords: [
      'mental health tech',
      'digital wellness',
      'sức khỏe tâm thần',
      'wellness apps',
      'meditation tech',
      'K2AiHub',
    ],
    openGraph: {
      title: 'Công nghệ Sức khỏe Tâm thần',
      description:
        'Khám phá cách công nghệ đang thay đổi lĩnh vực chăm sóc sức khỏe tâm thần và học cách xây dựng các giải pháp hỗ trợ wellbeing.',
      type: 'website',
    },
  };
}

export default function MentalHealthTechPage() {
  const moduleData = {
    id: 'mental-health-tech',
    title: 'Mental Health Technology',
    subtitle: 'Công nghệ trong Sức khỏe Tâm thần',
    description:
      'Khóa học toàn diện về ứng dụng công nghệ trong sức khỏe tâm thần. Học cách sử dụng digital wellness tools, mental health apps, wearables và AI therapy để cải thiện wellbeing và quản lý stress hiệu quả.',
    level: 'Cơ bản',
    duration: '12-15 giờ',
    category: 'Professional Skills',
    features: [
      'Chiến lược Digital Wellness và sử dụng công nghệ lành mạnh',
      'Hệ sinh thái ứng dụng Mental Health và cách triển khai hiệu quả',
      'Thiết bị đeo & giám sát sinh trắc học để theo dõi sức khỏe',
      'Công cụ trị liệu bằng AI và các giải pháp sức khỏe tâm thần cá nhân hóa',
    ],
    icon: '🧠',
    color: 'from-emerald-600 to-teal-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu mối quan hệ giữa công nghệ và sức khỏe tâm thần',
      'Triển khai các chiến lược digital wellness và quản lý căng thẳng',
      'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần và thiết bị đeo',
      'Áp dụng các công cụ AI cho trị liệu cá nhân hóa và cải thiện wellbeing',
    ],
    prerequisites: [
      'Không yêu cầu kiến thức kỹ thuật đặc biệt',
      'Quan tâm đến sức khỏe tâm thần và sức khỏe cá nhân',
      'Sẵn sàng khám phá các công cụ công nghệ mới',
    ],
    careerOutcomes: [
      'Chuyên gia Tư vấn Digital Wellness',
      'Quản lý Sản phẩm Công nghệ Sức khỏe',
      'Nhà phát triển Ứng dụng Sức khỏe Tâm thần',
      'Chuyên gia Công nghệ Nhân sự trong mảng Wellness',
    ],
    industryApplications: [
      'Công nghệ Y tế và Nền tảng Sức khỏe Số',
      'Chương trình Sức khỏe Doanh nghiệp',
      'Hỗ trợ Sức khỏe Tâm thần trong Giáo dục',
      'Ứng dụng Wellness cho người tiêu dùng',
    ],
    marketDemand: {
      averageSalary: '18-35 triệu VNĐ',
      jobGrowth: '+28%',
      hireDemand: 'Rất cao',
    },
    relatedModules: ['healthcare-tech', 'ai-machine-learning', 'data-science'],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={mentalHealthLessons} />;
}
