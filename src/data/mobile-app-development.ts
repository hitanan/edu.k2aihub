import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface MobileAppLesson extends BaseLessonData {
  platform: 'iOS' | 'Android' | 'Cross-platform' | 'Native' | 'Hybrid';
  developmentLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  programmingLanguages: string[];
  frameworks: string[];
  monetizationStrategies: string[];
  vietnameseMobileMarket: string[];
}

export const mobileAppLessons: MobileAppLesson[] = [
  {
    id: 'react-native-fundamentals',
    title: 'React Native Cơ Bản - Build App Đầu Tiên',
    description: 'Mastery React Native từ zero đến hero, xây dựng ứng dụng mobile đầu tiên với navigation, state management và API integration.',
    duration: '240 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', // React Native Tutorial for Beginners 2023
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    platform: 'Cross-platform',
    developmentLevel: 'Beginner',
    programmingLanguages: ['JavaScript', 'TypeScript', 'JSX'],
    frameworks: ['React Native', 'Expo', 'React Navigation'],
    objectives: [
      'Setup complete React Native development environment',
      'Understand React Native architecture và component lifecycle',
      'Build responsive UI với StyleSheet và Flexbox',
      'Implement navigation between screens với React Navigation',
      'Integrate APIs và handle asynchronous data fetching',
      'Deploy app đến simulator và physical devices'
    ],
    prerequisites: [
      'JavaScript fundamentals (ES6+)',
      'Basic React.js knowledge',
      'Understanding của mobile app concepts'
    ],
    monetizationStrategies: [
      'Freemium model với in-app purchases',
      'Advertisement integration (AdMob)',
      'Subscription-based features',
      'Premium app với one-time purchase'
    ],
    vietnameseMobileMarket: [
      '95% smartphone penetration rate',
      'Android dominance (85% market share)',
      'Popular local payment methods: ZaloPay, MoMo',
      'High engagement với social và e-commerce apps',
      'Growing demand for fintech và healthcare apps'
    ],
    exercises: [
      {
        title: 'Personal Finance Tracker App',
        description: 'Build comprehensive expense tracking app với data visualization',
        difficulty: 'Trung bình',
        materials: ['React Native CLI', 'AsyncStorage', 'Chart libraries', 'Icon sets'],
        procedure: [
          'Setup project structure với screens và components',
          'Create expense input form với validation',
          'Implement category selection và date picker',
          'Build data visualization với charts',
          'Add data persistence với AsyncStorage',
          'Implement expense filtering và search functionality',
          'Create export functionality to CSV/PDF',
          'Add budgeting features với notifications'
        ],
        expectedResults: 'Fully functional personal finance app với local data storage và rich UI/UX',
        solution: 'Complete app với modular architecture, reusable components, và professional design patterns'
      },
      {
        title: 'Vietnamese News Aggregator',
        description: 'Build news app consuming multiple Vietnamese news APIs',
        difficulty: 'Trung bình',
        materials: ['News APIs', 'Image caching libraries', 'WebView component'],
        procedure: [
          'Research và integrate Vietnamese news APIs (VnExpress, Tuoi Tre)',
          'Design news feed với pull-to-refresh functionality',
          'Implement news categories và filtering',
          'Add offline reading capability',
          'Create bookmarking và sharing features',
          'Implement push notifications cho breaking news'
        ],
        expectedResults: 'Professional news app với real-time updates và offline capabilities'
      }
    ],
    realWorldApplications: [
      'E-commerce platforms như Shopee, Lazada',
      'Food delivery services như GrabFood, ShopeeFood',
      'Banking apps như VietinBank, BIDV Smart Banking',
      'Social platforms như Zalo, Facebook Messenger',
      'Education apps như Monkey Junior, ELSA Speak'
    ],
    caseStudies: [
      {
        title: 'Grab - Super App Success Story',
        organization: 'Grab Vietnam',
        problem: 'Need unified platform cho multiple services (transport, food, payments)',
        solution: 'React Native-based super app với modular architecture',
        impact: '10M+ downloads, dominant market share in ridesharing và food delivery',
        innovations: ['Real-time GPS tracking', 'Multi-service integration', 'GrabPay wallet system']
      }
    ],
    resources: [
      {
        title: 'React Native Documentation',
        url: 'https://reactnative.dev/',
        type: 'Documentation'
      },
      {
        title: 'Expo Development Platform',
        url: 'https://expo.dev/',
        type: 'Platform'
      }
    ]
  },
  {
    id: 'ios-swift-development',
    title: 'iOS App Development với Swift',
    description: 'Native iOS development từ cơ bản đến nâng cao, từ UIKit đến SwiftUI, App Store deployment và iOS ecosystem mastery.',
    duration: '280 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=09TeUXjzpKs', // iOS Development with Swift - Complete Course
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    platform: 'iOS',
    developmentLevel: 'Intermediate',
    programmingLanguages: ['Swift', 'Objective-C'],
    frameworks: ['UIKit', 'SwiftUI', 'Core Data', 'CloudKit', 'WidgetKit'],
    objectives: [
      'Master Swift programming language và iOS SDK',
      'Build sophisticated UIs với UIKit và SwiftUI',
      'Implement Core Data cho complex data management',
      'Integrate CloudKit cho iCloud synchronization',
      'Create App Store-ready apps với proper architecture',
      'Understand iOS Human Interface Guidelines'
    ],
    prerequisites: [
      'Basic programming experience (any language)',
      'macOS computer với Xcode installed',
      'Understanding của object-oriented programming'
    ],
    monetizationStrategies: [
      'Premium app pricing ($0.99 - $9.99)',
      'In-app purchases và subscriptions',
      'App Store advertising và promotion',
      'Enterprise app development'
    ],
    vietnameseMobileMarket: [
      'Growing iOS market share (15-20%)',
      'Higher purchasing power của iOS users',
      'Premium app market potential',
      'Enterprise iOS adoption increasing'
    ],
    exercises: [
      {
        title: 'Vietnamese Recipe App với Core Data',
        description: 'Build comprehensive cooking app với local data storage và sharing',
        difficulty: 'Nâng cao',
        materials: ['Xcode', 'Core Data framework', 'CloudKit', 'Camera API'],
        procedure: [
          'Design data model cho recipes, ingredients, và categories',
          'Implement Core Data stack với migration support',
          'Create recipe entry form với photo capture',
          'Build advanced search và filtering capabilities',
          'Add recipe sharing với social media integration',
          'Implement shopping list generation',
          'Create cooking timer và step-by-step instructions',
          'Add user reviews và rating system'
        ],
        expectedResults: 'Professional recipe app với complex data relationships và iCloud sync',
        solution: 'Production-ready app với proper MVVM architecture và comprehensive testing'
      }
    ],
    realWorldApplications: [
      'Banking apps như VietinBank iPay, ACB Mobile',
      'E-commerce apps như Tiki, Sendo',
      'Health tracking apps như MyFitnessPal Vietnam',
      'Education apps như Monkey Stories',
      'Enterprise productivity apps'
    ],
    caseStudies: [
      {
        title: 'Tiki - iOS Shopping Experience',
        organization: 'Tiki Corporation',
        problem: 'Create premium iOS shopping experience for Vietnamese users',
        solution: 'Native iOS app với advanced features và smooth performance',
        impact: '2M+ iOS downloads, 40% higher conversion rate vs web',
        innovations: ['AR product preview', 'Voice search in Vietnamese', 'Apple Pay integration']
      }
    ]
  },
  {
    id: 'android-kotlin-development',
    title: 'Android Development với Kotlin',
    description: 'Modern Android development với Kotlin, Jetpack Compose, Room database, và Google Play Store optimization cho Vietnamese market.',
    duration: '260 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=F9UC9DY-vIU', // Android App Development with Kotlin - Complete Guide
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=600&fit=crop',
    platform: 'Android',
    developmentLevel: 'Intermediate',
    programmingLanguages: ['Kotlin', 'Java'],
    frameworks: ['Jetpack Compose', 'Room', 'WorkManager', 'Navigation Component'],
    objectives: [
      'Master Kotlin programming với Android specifics',
      'Build modern UIs với Jetpack Compose',
      'Implement Room database cho offline-first architecture',
      'Use Android Architecture Components (ViewModel, LiveData)',
      'Optimize apps cho Vietnamese Android ecosystem',
      'Deploy và optimize trên Google Play Store'
    ],
    prerequisites: [
      'Programming fundamentals (preferably Java or Kotlin)',
      'Android Studio setup',
      'Basic understanding của Android platform'
    ],
    monetizationStrategies: [
      'Google Play Store monetization',
      'AdMob integration cho ad revenue',
      'In-app billing với Vietnamese payment methods',
      'Freemium model optimization'
    ],
    vietnameseMobileMarket: [
      '85% Android market dominance',
      'Budget smartphone popularity',
      'High engagement với gaming và social apps',
      'Growing fintech adoption',
      'Preference for lightweight apps'
    ],
    exercises: [
      {
        title: 'Vietnamese Motorbike Taxi App',
        description: 'Build ride-hailing app similar to Grab/Be với real-time location',
        difficulty: 'Nâng cao',
        materials: ['Google Maps SDK', 'Firebase Realtime Database', 'FCM for notifications'],
        procedure: [
          'Setup project với MVVM architecture',
          'Integrate Google Maps với current location',
          'Implement ride booking flow với state management',
          'Build driver tracking với real-time updates',
          'Add fare calculation với Vietnamese pricing',
          'Implement payment integration (MoMo, ZaloPay)',
          'Create rating và review system',
          'Add ride history và receipts'
        ],
        expectedResults: 'Functional ride-hailing app với professional UX và performance optimization',
        solution: 'Scalable app architecture với proper error handling và offline capabilities'
      }
    ],
    realWorldApplications: [
      'E-commerce apps như Shopee, Lazada',
      'Banking apps như MB Bank, VCB Digibank',
      'Social apps như Zalo, Instagram',
      'Gaming apps như Garena, VNG games',
      'Utility apps như Grab, GoViet'
    ],
    caseStudies: [
      {
        title: 'Zalo - Vietnamese Social Platform',
        organization: 'VNG Corporation',
        problem: 'Create locally-relevant social messaging app for Vietnamese users',
        solution: 'Native Android app với Vietnamese language optimization và local features',
        impact: '100M+ users, dominant position in Vietnamese social media',
        innovations: ['Vietnamese sticker packs', 'Zalo Pay integration', 'Local business directory']
      }
    ]
  },
  {
    id: 'flutter-cross-platform',
    title: 'Flutter Cross-Platform Development',
    description: 'Build beautiful, high-performance apps for iOS và Android với single codebase using Flutter và Dart programming language.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=x0uinJvhNxI', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    platform: 'Cross-platform',
    developmentLevel: 'Intermediate',
    programmingLanguages: ['Dart'],
    frameworks: ['Flutter', 'Firebase', 'Provider/Bloc', 'GetX'],
    objectives: [
      'Master Dart programming language và Flutter framework',
      'Build responsive UIs với Flutter widgets',
      'Implement state management với Provider hoặc Bloc',
      'Integrate Firebase cho backend services',
      'Deploy apps đến both iOS và Android stores',
      'Optimize performance cho mobile devices'
    ],
    prerequisites: [
      'Object-oriented programming experience',
      'Basic mobile app development concepts',
      'Flutter SDK installed'
    ],
    monetizationStrategies: [
      'Dual platform deployment efficiency',
      'Faster time-to-market advantages',
      'Cost-effective development for startups',
      'Enterprise cross-platform solutions'
    ],
    vietnameseMobileMarket: [
      'Growing startup adoption của Flutter',
      'Cost-effective solution cho Vietnamese developers',
      'Good performance on budget Android devices',
      'Suitable for MVP và prototype development'
    ],
    exercises: [
      {
        title: 'Vietnamese Learning Language App',
        description: 'Build comprehensive language learning app với multimedia content',
        difficulty: 'Nâng cao',
        materials: ['Flutter SDK', 'Firebase Auth', 'Cloud Firestore', 'Audio/Video APIs'],
        procedure: [
          'Setup Flutter project với proper architecture',
          'Design beautiful UI với Vietnamese cultural elements',
          'Implement user authentication và profiles',
          'Create lesson progression system',
          'Add audio pronunciation features',
          'Build vocabulary games và quizzes',
          'Implement progress tracking và achievements',
          'Add offline learning capabilities'
        ],
        expectedResults: 'Professional language learning app với engaging UX và robust backend',
        solution: 'Complete app với scalable architecture và comprehensive testing'
      }
    ],
    realWorldApplications: [
      'Startup MVP development',
      'Cross-platform utility apps',
      'Educational và learning platforms',
      'Small business apps',
      'Prototype development'
    ],
    caseStudies: [
      {
        title: 'Beeketing - E-commerce Platform',
        organization: 'Beeketing Vietnam',
        problem: 'Need cost-effective mobile app for e-commerce platform',
        solution: 'Flutter app với rich features và smooth performance',
        impact: 'Reduced development time by 40%, maintained across both platforms',
        innovations: ['Cross-platform widget library', 'Unified backend integration', 'Consistent UI/UX']
      }
    ]
  },
  {
    id: 'app-store-optimization',
    title: 'App Store Optimization & Marketing',
    description: 'Master App Store Optimization (ASO), user acquisition strategies, và app marketing specific cho Vietnamese mobile market.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=x0uinJvhNxI', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    platform: 'Cross-platform',
    developmentLevel: 'Intermediate',
    programmingLanguages: ['N/A'],
    frameworks: ['Analytics platforms', 'A/B testing tools'],
    objectives: [
      'Optimize app store presence cho maximum visibility',
      'Understand Vietnamese user acquisition channels',
      'Implement app analytics và user behavior tracking',
      'Design effective app marketing campaigns',
      'Master retention strategies và user engagement',
      'Monetize apps effectively in Vietnamese market'
    ],
    prerequisites: [
      'Published mobile app experience',
      'Basic marketing knowledge',
      'Understanding của mobile app ecosystem'
    ],
    monetizationStrategies: [
      'Optimized pricing strategies cho Vietnamese market',
      'Localized in-app purchase offerings',
      'Subscription model optimization',
      'Ad revenue maximization techniques'
    ],
    vietnameseMobileMarket: [
      'Facebook và Zalo for social marketing',
      'Google Ads với Vietnamese keyword targeting',
      'Influencer marketing với Vietnamese KOLs',
      'App review culture trong Vietnamese community'
    ],
    exercises: [
      {
        title: 'Complete ASO Campaign Implementation',
        description: 'Execute comprehensive App Store Optimization cho existing app',
        difficulty: 'Trung bình',
        materials: ['App analytics tools', 'Keyword research tools', 'A/B testing platforms'],
        procedure: [
          'Conduct Vietnamese keyword research với local tools',
          'Optimize app title, description cho Vietnamese users',
          'Design compelling screenshots với Vietnamese UI',
          'Implement A/B testing cho different store assets',
          'Create localized app preview videos',
          'Monitor download metrics và user feedback',
          'Adjust strategy based on performance data'
        ],
        expectedResults: '50%+ increase in organic downloads và improved app store ranking',
        solution: 'Data-driven ASO strategy với continuous optimization loop'
      }
    ],
    realWorldApplications: [
      'Mobile app marketing campaigns',
      'User acquisition strategy development',
      'App monetization optimization',
      'Mobile analytics và performance tracking',
      'Cross-platform marketing coordination'
    ]
  }
];

export default mobileAppLessons;