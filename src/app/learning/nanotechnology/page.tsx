import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { nanotechnologyLessons } from '@/data/nanotechnology';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata for nanotechnology module
export async function generateMetadata() {
  return {
    title: createTitle('Công Nghệ Nano & Vật Liệu Tiên Tiến'),
    description: createDescription(
      'Khám phá thế giới công nghệ nano với các ứng dụng tiên tiến trong y học, điện tử, môi trường và năng lượng. Học cách tổng hợp vật liệu nano, phát triển thiết bị quantum và tạo ra các giải pháp bền vững cho tương lai.',
    ),
    keywords: [
      'công nghệ nano',
      'vật liệu tiên tiến',
      'nanomedicine',
      'quantum devices',
      'nanotechnology vietnam',
      'K2AI',
    ],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Công Nghệ Nano & Vật Liệu Tiên Tiến | K2AiHub',
      description:
        'Chương trình học công nghệ nano toàn diện với ứng dụng thực tế trong y học, điện tử và môi trường',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function NanotechnologyPage() {
  const moduleData = {
    id: 'nanotechnology',
    title: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
    subtitle: 'Khám phá thế giới nano với những ứng dụng đột phá',
    description:
      'Chương trình học toàn diện về công nghệ nano, từ tổng hợp vật liệu nano đến phát triển thiết bị quantum và ứng dụng y sinh. Khám phá cách công nghệ nano đang thay đổi y học, điện tử, môi trường và năng lượng tại Việt Nam.',
    level: 'Nâng cao',
    duration: '25-30 giờ',
    category: 'Emerging Technology',
    heroImageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&auto=format',
    features: [
      'Tổng hợp và đặc tính hóa vật liệu nano với các phương pháp tiên tiến',
      'Thiết kế thiết bị nanoelectronics và quantum computing',
      'Phát triển hệ thống drug delivery và nanomedicine cho y tế Việt Nam',
      'Ứng dụng nanotechnology cho môi trường và sustainability',
    ],
    icon: '⚛️',
    color: 'from-purple-600 to-violet-600',
    objectives: [
      'Nắm vững nguyên lý tổng hợp và đặc tính hóa nanomaterials',
      'Thiết kế và phát triển nanoelectronic devices và quantum systems',
      'Ứng dụng nanotechnology cho biomedical và environmental applications',
      'Hiểu rõ safety protocols và regulatory requirements cho nanomaterials',
    ],
    prerequisites: [
      'Kiến thức vững về hóa học, vật lý và khoa học vật liệu',
      'Hiểu biết cơ bản về electronics và biomedical engineering',
      'Kỹ năng phân tích dữ liệu và sử dụng thiết bị khoa học',
    ],
    careerOutcomes: [
      'Nanomaterials Research Scientist (30-50 triệu VNĐ)',
      'Nanoelectronics Engineer (25-45 triệu VNĐ)',
      'Biomedical Nanotechnology Specialist (28-48 triệu VNĐ)',
      'Environmental Nanotechnology Consultant (22-40 triệu VNĐ)',
      'Quantum Device Development Engineer (35-60 triệu VNĐ)',
    ],
    industryApplications: [
      'Y tế: Drug delivery systems, diagnostic nanoparticles, regenerative medicine',
      'Điện tử: Quantum computing, molecular electronics, nanoelectronics',
      'Môi trường: Water treatment, air purification, pollution control',
      'Năng lượng: Solar cells, batteries, fuel cells, energy storage',
      'Vật liệu: Nanocomposites, smart coatings, functional materials',
    ],
    marketDemand: {
      averageSalary: '25-50 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [
      K2Module.Biotechnology,
      K2Module.Cybersecurity,
      K2Module.GreenTechnology,
      K2Module.AdvancedAI,
    ],
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={nanotechnologyLessons}
      additionalStats={[
        {
          label: 'Research Applications',
          value: '50+',
          icon: <span className="text-2xl">🔬</span>,
        },
        {
          label: 'Industry Partnerships',
          value: '15+',
          icon: <span className="text-2xl">🏭</span>,
        },
        {
          label: 'Vietnamese Research Centers',
          value: '8+',
          icon: <span className="text-2xl">🇻🇳</span>,
        },
      ]}
    />
  );
}
