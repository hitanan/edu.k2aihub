import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mobileAppLessons } from '@/data/mobile-app-development';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Mobile App Development - Phát Triển Ứng Dụng Di Động'),
    description: createDescription('Học phát triển ứng dụng mobile từ cơ bản đến nâng cao. Mastery React Native, iOS Swift, Android Kotlin, Flutter và App Store Optimization cho thị trường Việt Nam.'),
    keywords: createKeywords(['mobile app development', 'react native', 'iOS swift', 'android kotlin', 'flutter', 'app store optimization', 'phát triển ứng dụng di động', 'lập trình mobile', 'K2AI']),
    openGraph: {
      title: 'Mobile App Development - Phát Triển Ứng Dụng Di Động | K2AI',
      description: 'Nắm vững các công nghệ phát triển ứng dụng mobile hiện đại. Từ React Native đến native iOS/Android development và App Store optimization.',
      type: 'website',
    },
  };
}

export default function MobileAppDevelopmentMainPage() {
  const moduleData: ModuleData = {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Phát triển ứng dụng di động chuyên nghiệp',
    description: 'Khám phá và thành thạo các công nghệ phát triển ứng dụng mobile từ cơ bản đến nâng cao. Học React Native, iOS Swift, Android Kotlin, Flutter và App Store Optimization để tạo ra những ứng dụng mobile thành công trên thị trường Việt Nam và quốc tế.',
    level: 'Trung bình',
    duration: '20-25 giờ',
    category: 'Mobile Technology',
    features: [
      'React Native cross-platform development với JavaScript/TypeScript',
      'Native iOS development với Swift và SwiftUI framework',
      'Android development với Kotlin và Jetpack Compose',
      'Flutter development cho multi-platform apps',
      'App Store Optimization và mobile marketing strategies'
    ],
    icon: '📱',
    color: 'from-purple-600 to-pink-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    objectives: [
      'Build production-ready mobile apps với modern frameworks',
      'Master native iOS development với Swift và SwiftUI',
      'Develop Android apps với Kotlin và latest Android SDK',
      'Create cross-platform solutions với React Native và Flutter',
      'Optimize app store presence và implement effective marketing strategies'
    ],
    prerequisites: [
      'Programming fundamentals (JavaScript hoặc any OOP language)',
      'Basic understanding của mobile platforms',
      'Development environment setup capability'
    ],
    careerOutcomes: [
      'Mobile App Developer (18-40 triệu VNĐ)',
      'React Native Developer (20-45 triệu VNĐ)',
      'iOS Developer (25-50 triệu VNĐ)',
      'Android Developer (22-48 triệu VNĐ)',
      'Flutter Developer (18-42 triệu VNĐ)',
      'Mobile Product Manager (30-65 triệu VNĐ)',
      'Mobile App Entrepreneur (Thu nhập không giới hạn)'
    ],
    industryApplications: [
      'E-commerce platforms như Shopee, Tiki, Lazada',
      'Fintech apps như MoMo, ZaloPay, banking apps',
      'Food delivery services như GrabFood, ShopeeFood',
      'Ride-hailing platforms như Grab, Be, Gojek',
      'Social media và messaging apps như Zalo',
      'Healthcare và education technology apps'
    ],
    marketDemand: {
      averageSalary: '20-50 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.JavaScript,
      K2Module.Python,
      K2Module.GameDevelopment,
      K2Module.DigitalMarketing
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={mobileAppLessons}
    />
  );
}