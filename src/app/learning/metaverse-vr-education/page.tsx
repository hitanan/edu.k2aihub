import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { MetaverseVREducationLessons } from '@/data/metaverse-vr-education';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Metaverse & Giáo Dục VR'),
    description: createDescription('Khám phá công nghệ Metaverse, VR/AR trong giáo dục và cơ hội nghề nghiệp trong kỷ nguyên thực tế ảo. Học tạo nội dung VR, phát triển ứng dụng AR và kinh doanh trong virtual economy.'),
    keywords: ['metaverse', 'vr', 'ar', 'giáo dục', 'thực tế ảo', 'công nghệ', 'tương lai', 'K2AI'],
    openGraph: {
      title: 'Metaverse & Giáo Dục VR - K2AiHub',
      description: 'Khám phá tương lai của học tập immersive với công nghệ Metaverse và VR/AR',
      type: 'website',
    },
  };
}

export default function MetaverseVREducationMainPage() {
  const moduleData = {
    id: 'metaverse-vr-education',
    title: 'Metaverse & Giáo Dục VR',
    subtitle: 'Tương lai của học tập immersive',
    description: 'Khám phá công nghệ Metaverse, Virtual Reality và Augmented Reality trong giáo dục. Học cách tạo nội dung VR/AR, phát triển ứng dụng giáo dục immersive và nắm bắt cơ hội kinh doanh trong virtual economy.',
    level: 'Trung bình',
    duration: '8-10 giờ',
    category: 'Experimental Technology',
    features: [
      'Tạo nội dung VR/AR giáo dục chuyên nghiệp',
      'Phát triển ứng dụng mobile AR tương tác',
      'Thiết kế virtual spaces cho collaborative learning',
      'Hiểu biết về Metaverse business models và kinh tế ảo'
    ],
    icon: '🥽',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Master công nghệ VR/AR cho educational applications',
      'Tạo immersive learning experiences sử dụng Unity và AR platforms',
      'Phát triển social VR collaboration systems',
      'Hiểu về virtual economy và Metaverse business opportunities',
      'Apply VR/AR technology cho Vietnamese education challenges'
    ],
    prerequisites: [
      'Kiến thức cơ bản về technology và internet',
      'Hiểu biết về social media và digital platforms',
      'Không cần kinh nghiệm VR/AR trước đó'
    ],
    careerOutcomes: [
      'VR/AR Developer cho education technology companies',
      'Metaverse Experience Designer',
      'Educational Technology Consultant',
      'Virtual Event và Training Specialist',
      'Immersive Content Creator'
    ],
    industryApplications: [
      'Remote education delivery với immersive experiences',
      'Corporate training trong virtual environments',
      'Cultural heritage preservation và virtual tourism',
      'Medical education với VR simulation',
      'Engineering design collaboration trong virtual spaces'
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+400%',
      hireDemand: 'Rất cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.GameDevelopment,
      K2Module.AIArtCreativeTech,
      K2Module.DigitalArtsCreativeTech
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={MetaverseVREducationLessons}
    />
  );
}
