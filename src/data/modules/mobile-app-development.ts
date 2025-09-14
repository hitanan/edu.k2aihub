import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { MobileAppDevelopmentLesson } from '@/types/lesson-base';

const lessons: MobileAppDevelopmentLesson[] = [
  {
    id: 'react-native-fundamentals',
    title: 'React Native Cơ Bản - Build App Đầu Tiên',
    description:
      'Mastery React Native từ zero đến hero, xây dựng ứng dụng mobile đầu tiên với navigation, state management và API integration.',
    duration: '240 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    objectives: [
      'Setup complete React Native development environment',
      'Understand React Native architecture và component lifecycle',
      'Build responsive UI với StyleSheet và Flexbox',
      'Implement navigation between screens với React Navigation',
      'Integrate APIs và handle asynchronous data fetching',
      'Deploy app đến simulator và physical devices',
    ],
    prerequisites: [
      'JavaScript fundamentals (ES6+)',
      'Basic React.js knowledge',
      'Understanding của mobile app concepts',
    ],
    realWorldApplications: [
      'E-commerce platforms như Shopee, Lazada',
      'Food delivery services như GrabFood, ShopeeFood',
      'Banking apps như VietinBank, BIDV Smart Banking',
      'Social platforms như Zalo, Facebook Messenger',
      'Education apps như Monkey Junior, ELSA Speak',
    ],
  },
  {
    id: 'ios-swift-development',
    title: 'iOS App Development với Swift',
    description:
      'Native iOS development từ cơ bản đến nâng cao, từ UIKit đến SwiftUI, App Store deployment và iOS ecosystem mastery.',
    duration: '280 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=09TeUXjzpKs',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    objectives: [
      'Master Swift programming language và iOS SDK',
      'Build sophisticated UIs với UIKit và SwiftUI',
      'Implement Core Data cho complex data management',
      'Integrate CloudKit cho iCloud synchronization',
      'Create App Store-ready apps với proper architecture',
      'Understand iOS Human Interface Guidelines',
    ],
    prerequisites: [
      'Basic programming experience (any language)',
      'macOS computer với Xcode installed',
      'Understanding của object-oriented programming',
    ],
    realWorldApplications: [
      'Banking apps như VietinBank iPay, ACB Mobile',
      'E-commerce apps như Tiki, Sendo',
      'Health tracking apps như MyFitnessPal Vietnam',
      'Education apps như Monkey Stories',
      'Enterprise productivity apps',
    ],
  },
  {
    id: 'android-kotlin-development',
    title: 'Android Development với Kotlin',
    description:
      'Modern Android development với Kotlin, Jetpack Compose, Room database, và Google Play Store optimization cho Vietnamese market.',
    duration: '260 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=F9UC9DY-vIU',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=600&fit=crop',
    objectives: [
      'Master Kotlin programming với Android specifics',
      'Build modern UIs với Jetpack Compose',
      'Implement Room database cho offline-first architecture',
      'Use Android Architecture Components (ViewModel, LiveData)',
      'Optimize apps cho Vietnamese Android ecosystem',
      'Deploy và optimize trên Google Play Store',
    ],
    prerequisites: [
      'Programming fundamentals (preferably Java or Kotlin)',
      'Android Studio setup',
      'Basic understanding của Android platform',
    ],
    realWorldApplications: [
      'E-commerce apps như Shopee, Lazada',
      'Banking apps như MB Bank, VCB Digibank',
      'Social apps như Zalo, Instagram',
      'Gaming apps như Garena, VNG games',
      'Utility apps như Grab, GoViet',
    ],
  },
  {
    id: 'flutter-cross-platform',
    title: 'Flutter Cross-Platform Development',
    description:
      'Build beautiful, high-performance apps for iOS và Android với single codebase using Flutter và Dart programming language.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    objectives: [
      'Master Dart programming language và Flutter framework',
      'Build responsive UIs với Flutter widgets',
      'Implement state management với Provider hoặc Bloc',
      'Integrate Firebase cho backend services',
      'Deploy apps đến both iOS và Android stores',
      'Optimize performance cho mobile devices',
    ],
    prerequisites: [
      'Object-oriented programming experience',
      'Basic mobile app development concepts',
      'Flutter SDK installed',
    ],
    realWorldApplications: [
      'Startup MVP development',
      'Cross-platform utility apps',
      'Educational và learning platforms',
      'Small business apps',
      'Prototype development',
    ],
  },
  {
    id: 'app-store-optimization',
    title: 'App Store Optimization & Marketing',
    description:
      'Master App Store Optimization (ASO), user acquisition strategies, và app marketing specific cho Vietnamese mobile market.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bqM9x-oRZOA',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    objectives: [
      'Optimize app store presence cho maximum visibility',
      'Understand Vietnamese user acquisition channels',
      'Implement app analytics và user behavior tracking',
      'Design effective app marketing campaigns',
      'Master retention strategies và user engagement',
      'Monetize apps effectively in Vietnamese market',
    ],
    prerequisites: [
      'Published mobile app experience',
      'Basic marketing knowledge',
      'Understanding của mobile app ecosystem',
    ],
    realWorldApplications: [
      'Mobile app marketing campaigns',
      'User acquisition strategy development',
      'App monetization optimization',
      'Mobile analytics và performance tracking',
      'Cross-platform marketing coordination',
    ],
  },
];

export const mobileAppDevelopmentModule: ModuleData = {
  id: 'mobile-app-development',
  title: 'Phát triển Ứng dụng Di động',
  subtitle: 'Học cách xây dựng ứng dụng cho iOS và Android từ đầu',
  description:
    'Khóa học này cung cấp kiến thức toàn diện về phát triển ứng dụng di động, từ việc lựa chọn công nghệ (React Native, Flutter, Swift, Kotlin) đến thiết kế UI/UX, quản lý trạng thái, và phát hành ứng dụng lên các cửa hàng.',
  level: 'Trung cấp',
  duration: '40-50 giờ',
  category: 'Lập trình & Phát triển',
  features: [
    'Phát triển đa nền tảng với React Native & Flutter',
    'Lập trình native cho iOS (Swift) và Android (Kotlin)',
    'Thiết kế giao diện người dùng (UI/UX) cho di động',
    'Quản lý trạng thái và tích hợp API',
  ],
  icon: '📱',
  color: 'from-cyan-500 to-blue-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=600&fit=crop',
  objectives: [
    'Xây dựng được ứng dụng di động hoàn chỉnh cho cả iOS và Android.',
    'Nắm vững các khái niệm cốt lõi của phát triển di động.',
    'Biết cách tối ưu hóa hiệu năng và trải nghiệm người dùng.',
    'Tự tin phát hành ứng dụng lên App Store và Google Play.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về lập trình (JavaScript, Dart hoặc Swift/Kotlin là một lợi thế).',
    'Hiểu biết về HTML/CSS.',
  ],
  careerOutcomes: ['Lập trình viên React Native/Flutter', 'Lập trình viên iOS/Android', 'Mobile App Developer'],
  industryApplications: [
    {
      name: 'Xây dựng ứng dụng thương mại điện tử',
      description: 'Phát triển các app mua sắm cho các doanh nghiệp bán lẻ.',
    },
    { name: 'Phát triển ứng dụng mạng xã hội', description: 'Tạo ra các nền tảng kết nối cộng đồng.' },
    {
      name: 'Tạo ra các ứng dụng tiện ích, giải trí',
      description: 'Xây dựng các công cụ hoặc game cho người dùng cuối.',
    },
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+30%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Python, K2Module.AI, K2Module.Robotics],
};

export const mobileAppDevelopmentLessons = lessons;
