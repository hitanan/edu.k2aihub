import { BaseLessonData } from '../types/lesson-base';

export const mobileAppDevelopmentLessons: BaseLessonData[] = [
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
          'Add budgeting features với notifications',
        ],
        expectedResults: 'Fully functional personal finance app với local data storage và rich UI/UX',
        solution: 'Complete app với modular architecture, reusable components, và professional design patterns',
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
          'Implement push notifications cho breaking news',
        ],
        expectedResults: 'Professional news app với real-time updates và offline capabilities',
      },
    ],
    realWorldApplications: [
      'E-commerce platforms như Shopee, Lazada',
      'Food delivery services như GrabFood, ShopeeFood',
      'Banking apps như VietinBank, BIDV Smart Banking',
      'Social platforms như Zalo, Facebook Messenger',
      'Education apps như Monkey Junior, ELSA Speak',
    ],
    caseStudies: [
      {
        title: 'Grab - Super App Success Story',
        organization: 'Grab Vietnam',
        problem: 'Need unified platform cho multiple services (transport, food, payments)',
        solution: 'React Native-based super app với modular architecture',
        impact: '10M+ downloads, dominant market share in ridesharing và food delivery',
        innovations: ['Real-time GPS tracking', 'Multi-service integration', 'GrabPay wallet system'],
      },
    ],
    resources: [
      {
        title: 'React Native Documentation',
        url: 'https://reactnative.dev/',
        type: 'Documentation',
      },
      {
        title: 'Expo Development Platform',
        url: 'https://expo.dev/',
        type: 'Platform',
      },
    ],
    vietnamContext: {
      title: 'Thị trường ứng dụng di động Việt Nam: React Native lên ngôi',
      content: [
        'React Native là lựa chọn phổ biến cho các startup Việt Nam vì khả năng phát triển nhanh và tiết kiệm chi phí cho cả hai nền tảng iOS và Android.',
        'Các ứng dụng "siêu app" như Zalo, MoMo, Grab tích hợp nhiều dịch vụ, và React Native là một công nghệ phù hợp để xây dựng các hệ sinh thái phức tạp này.',
        'Thị trường Việt Nam với 85% người dùng Android, đặc biệt là các thiết bị tầm trung, đòi hỏi các ứng dụng React Native phải được tối ưu hóa hiệu năng tốt.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Huy Hoàng',
      title: 'Senior React Native Developer',
      company: 'Một công ty FinTech',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-huy-hoang',
      quote:
        'Với React Native, chúng tôi có thể ra mắt tính năng mới cho cả iOS và Android chỉ trong một tuần. Tốc độ là lợi thế cạnh tranh sống còn trên thị trường fintech Việt Nam. Công việc của tôi là đảm bảo ứng dụng không chỉ đẹp mà còn phải chạy mượt trên mọi thiết bị.',
    },
    quizzes: [
      {
        question: 'React Native cho phép bạn xây dựng ứng dụng cho những nền tảng nào từ một codebase duy nhất?',
        options: ['Chỉ iOS', 'Chỉ Android', 'iOS và Android', 'Web và Desktop'],
        correctAnswerIndex: 2,
        explanation:
          'React Native là một framework cross-platform, cho phép các nhà phát triển sử dụng JavaScript và React để xây dựng ứng dụng cho cả iOS và Android từ một mã nguồn chung.',
      },
      {
        question: 'Expo là gì trong hệ sinh thái React Native?',
        options: [
          'Một ngôn ngữ lập trình',
          'Một bộ công cụ và dịch vụ giúp đơn giản hóa việc phát triển và triển khai ứng dụng React Native',
          'Tên một phiên bản Android',
          'Một thư viện quản lý state',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Expo là một nền tảng mã nguồn mở cung cấp các công cụ và dịch vụ giúp quá trình phát triển React Native trở nên dễ dàng hơn, đặc biệt là cho người mới bắt đầu.',
      },
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
          'Add user reviews và rating system',
        ],
        expectedResults: 'Professional recipe app với complex data relationships và iCloud sync',
        solution: 'Production-ready app với proper MVVM architecture và comprehensive testing',
      },
    ],
    realWorldApplications: [
      'Banking apps như VietinBank iPay, ACB Mobile',
      'E-commerce apps như Tiki, Sendo',
      'Health tracking apps như MyFitnessPal Vietnam',
      'Education apps như Monkey Stories',
      'Enterprise productivity apps',
    ],
    caseStudies: [
      {
        title: 'Tiki - iOS Shopping Experience',
        organization: 'Tiki Corporation',
        problem: 'Create premium iOS shopping experience for Vietnamese users',
        solution: 'Native iOS app với advanced features và smooth performance',
        impact: '2M+ iOS downloads, 40% higher conversion rate vs web',
        innovations: ['AR product preview', 'Voice search in Vietnamese', 'Apple Pay integration'],
      },
    ],
    resources: [
      {
        title: 'Swift Programming Language Guide',
        url: 'https://docs.swift.org/swift-book/',
        type: 'Documentation',
      },
      {
        title: 'Hacking with Swift - Tutorials',
        url: 'https://www.hackingwithswift.com/',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Phát triển ứng dụng iOS tại Việt Nam: Thị trường cao cấp',
      content: [
        'Người dùng iOS tại Việt Nam có xu hướng chi tiêu nhiều hơn cho ứng dụng và các dịch vụ in-app, tạo ra một thị trường béo bở cho các ứng dụng trả phí và subscription.',
        'Các ứng dụng trong lĩnh vực tài chính, ngân hàng và thương mại điện tử cao cấp thường ưu tiên phát triển ứng dụng native cho iOS để đảm bảo tính bảo mật và trải nghiệm người dùng tốt nhất.',
        'SwiftUI, framework giao diện người dùng mới của Apple, đang dần trở nên phổ biến trong cộng đồng lập trình viên iOS Việt Nam vì khả năng phát triển UI nhanh và hiện đại.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thảo My',
      title: 'iOS Developer',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thao-my',
      quote:
        'Phát triển ứng dụng cho iOS giống như tạo ra một tác phẩm nghệ thuật. Mọi chi tiết đều phải hoàn hảo, từ hiệu ứng chuyển cảnh đến cách dữ liệu được lưu trữ. Người dùng Apple tại Việt Nam rất khó tính, và đó là động lực để chúng tôi luôn tạo ra những sản phẩm tốt nhất.',
    },
    quizzes: [
      {
        question: 'Ngôn ngữ lập trình chính thức để phát triển ứng dụng native cho iOS là gì?',
        options: ['Java', 'Kotlin', 'Swift', 'Dart'],
        correctAnswerIndex: 2,
        explanation:
          'Swift là ngôn ngữ lập trình hiện đại, mạnh mẽ và trực quan được Apple tạo ra để phát triển ứng dụng cho các hệ điều hành của họ, bao gồm iOS, macOS, watchOS và tvOS.',
      },
      {
        question:
          'Framework nào của Apple được sử dụng để xây dựng giao diện người dùng một cách khai báo (declarative)?',
        options: ['UIKit', 'Core Data', 'SwiftUI', 'ARKit'],
        correctAnswerIndex: 2,
        explanation:
          'SwiftUI là một framework giao diện người dùng hiện đại của Apple, cho phép các nhà phát triển xây dựng UI trên tất cả các nền tảng của Apple bằng cách sử dụng cú pháp khai báo, ít code hơn và trực quan hơn so với UIKit.',
      },
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
          'Add ride history và receipts',
        ],
        expectedResults: 'Functional ride-hailing app với professional UX và performance optimization',
        solution: 'Scalable app architecture với proper error handling và offline capabilities',
      },
    ],
    realWorldApplications: [
      'E-commerce apps như Shopee, Lazada',
      'Banking apps như MB Bank, VCB Digibank',
      'Social apps như Zalo, Instagram',
      'Gaming apps như Garena, VNG games',
      'Utility apps như Grab, GoViet',
    ],
    caseStudies: [
      {
        title: 'Zalo - Vietnamese Social Platform',
        organization: 'VNG Corporation',
        problem: 'Create locally-relevant social messaging app for Vietnamese users',
        solution: 'Native Android app với Vietnamese language optimization và local features',
        impact: '100M+ users, dominant position in Vietnamese social media',
        innovations: ['Vietnamese sticker packs', 'Zalo Pay integration', 'Local business directory'],
      },
    ],
    resources: [
      {
        title: 'Kotlin for Android Developers',
        url: 'https://developer.android.com/kotlin',
        type: 'Documentation',
      },
      {
        title: 'Jetpack Compose Pathway',
        url: 'https://developer.android.com/courses/pathways/compose',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Phát triển Android tại Việt Nam: Thống trị thị phần',
      content: [
        'Với hơn 85% thị phần, Android là nền tảng quan trọng nhất để tiếp cận đại đa số người dùng di động tại Việt Nam.',
        'Sự đa dạng của các thiết bị Android (từ giá rẻ đến cao cấp) đòi hỏi lập trình viên phải có kỹ năng tối ưu hóa ứng dụng để chạy tốt trên nhiều cấu hình khác nhau.',
        'Kotlin đã trở thành ngôn ngữ được ưa chuộng trong cộng đồng Android Việt Nam, thay thế dần cho Java nhờ cú pháp ngắn gọn và các tính năng an toàn.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Quốc Tuấn',
      title: 'Android Team Lead',
      company: 'ZaloPay',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-tuan',
      quote:
        'Thách thức lớn nhất của lập trình viên Android ở Việt Nam là đảm bảo ứng dụng thanh toán của bạn phải hoạt động ổn định trên một chiếc điện thoại Vsmart giá rẻ cũng như trên một chiếc Samsung cao cấp. Kotlin và Jetpack Compose giúp chúng tôi xây dựng ứng dụng nhanh hơn và ít lỗi hơn.',
    },
    quizzes: [
      {
        question:
          'Ngôn ngữ lập trình nào được Google khuyến nghị chính thức cho việc phát triển ứng dụng Android hiện đại?',
        options: ['Java', 'Kotlin', 'C++', 'Dart'],
        correctAnswerIndex: 1,
        explanation:
          'Từ năm 2019, Google đã công bố Kotlin là ngôn ngữ được ưu tiên hàng đầu cho việc phát triển ứng dụng Android.',
      },
      {
        question: 'Jetpack Compose là gì?',
        options: [
          'Một thư viện cơ sở dữ liệu',
          'Một bộ công cụ để xây dựng giao diện người dùng native cho Android một cách hiện đại',
          'Một công cụ để quản lý các tác vụ nền',
          'Một hệ thống điều hướng trong ứng dụng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Jetpack Compose là bộ công cụ giao diện người dùng hiện đại của Android, giúp đơn giản hóa và tăng tốc việc phát triển UI bằng cách sử dụng cú pháp khai báo với Kotlin.',
      },
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
          'Add offline learning capabilities',
        ],
        expectedResults: 'Professional language learning app với engaging UX và robust backend',
        solution: 'Complete app với scalable architecture và comprehensive testing',
      },
    ],
    realWorldApplications: [
      'Startup MVP development',
      'Cross-platform utility apps',
      'Educational và learning platforms',
      'Small business apps',
      'Prototype development',
    ],
    caseStudies: [
      {
        title: 'Beeketing - E-commerce Platform',
        organization: 'Beeketing Vietnam',
        problem: 'Need cost-effective mobile app for e-commerce platform',
        solution: 'Flutter app với rich features và smooth performance',
        impact: 'Reduced development time by 40%, maintained across both platforms',
        innovations: ['Cross-platform widget library', 'Unified backend integration', 'Consistent UI/UX'],
      },
    ],
    resources: [
      {
        title: 'Flutter Documentation',
        url: 'https://flutter.dev/docs',
        type: 'Documentation',
      },
      {
        title: 'Flutter Awesome - Curated List',
        url: 'https://flutterawesome.com/',
        type: 'Resource',
      },
    ],
    vietnamContext: {
      title: 'Flutter tại Việt Nam: Giải pháp tối ưu cho startup',
      content: [
        'Flutter đang trở thành lựa chọn hàng đầu cho các startup và doanh nghiệp vừa và nhỏ tại Việt Nam do khả năng tiết kiệm chi phí và thời gian phát triển.',
        'Cộng đồng Flutter Việt Nam rất năng động với nhiều sự kiện, workshop và các khóa học online, tạo ra một nguồn nhân lực dồi dào.',
        'Khả năng "hot reload" của Flutter cho phép các nhà phát triển thấy kết quả gần như ngay lập tức, đẩy nhanh quá trình thử nghiệm và hoàn thiện sản phẩm, rất phù-hợp với văn hóa làm việc nhanh của các công ty công nghệ Việt.',
      ],
    },
    careerConnect: {
      name: 'Bạn Vũ Minh Hiếu',
      title: 'Flutter Developer',
      company: 'Một startup về EdTech',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-minh-hieu',
      quote:
        'Với Flutter, tôi có thể một mình xây dựng một ứng dụng hoàn chỉnh cho cả hai nền tảng trong vòng 2 tháng. Điều này là không tưởng nếu làm native. Flutter cho phép các startup như chúng tôi cạnh tranh sòng phẳng với các ông lớn về mặt tốc độ ra mắt sản phẩm.',
    },
    quizzes: [
      {
        question: 'Ngôn ngữ lập trình được sử dụng để phát triển ứng dụng với Flutter là gì?',
        options: ['Kotlin', 'Swift', 'JavaScript', 'Dart'],
        correctAnswerIndex: 3,
        explanation:
          'Dart là ngôn ngữ lập trình được Google phát triển, được tối ưu hóa cho việc xây dựng giao diện người dùng và là ngôn ngữ chính của Flutter.',
      },
      {
        question: 'Ưu điểm lớn nhất của Flutter là gì?',
        options: [
          'Chỉ chạy trên Android',
          'Xây dựng ứng dụng hiệu năng cao cho nhiều nền tảng từ một codebase duy nhất',
          'Sử dụng ngôn ngữ Java',
          'Không cần kết nối internet để phát triển',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ưu điểm chính của Flutter là khả năng biên dịch mã nguồn ra mã máy native, cho phép tạo ra các ứng dụng có hiệu năng cao cho cả iOS, Android, Web và Desktop từ một mã nguồn duy nhất.',
      },
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
          'Adjust strategy based on performance data',
        ],
        expectedResults: '50%+ increase in organic downloads và improved app store ranking',
        solution: 'Data-driven ASO strategy với continuous optimization loop',
      },
    ],
    realWorldApplications: [
      'Mobile app marketing campaigns',
      'User acquisition strategy development',
      'App monetization optimization',
      'Mobile analytics và performance tracking',
      'Cross-platform marketing coordination',
    ],
    caseStudies: [
      {
        title: 'ELSA Speak - ASO Success',
        organization: 'ELSA Corp',
        problem: 'Increasing organic downloads in competitive language learning market',
        solution: 'Implemented localized ASO strategy focusing on Vietnamese keywords and user pain points',
        impact: 'Top-ranked education app in Vietnam, millions of organic downloads',
        innovations: ['Localized keyword strategy', 'Culturally relevant screenshots', 'User review management'],
      },
    ],
    resources: [
      {
        title: 'App Store Optimization (ASO) Guide',
        url: 'https://www.apptweak.com/en/aso-blog/app-store-optimization-aso-the-definitive-guide',
        type: 'Guide',
      },
      {
        title: 'Google Play Store Listing Policies',
        url: 'https://support.google.com/googleplay/android-developer/answer/9898993',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Marketing ứng dụng tại Việt Nam: Cuộc chiến giành người dùng',
      content: [
        'Tối ưu hóa từ khóa tiếng Việt (có dấu và không dấu) là yếu tố cực kỳ quan trọng trong ASO tại Việt Nam.',
        'Các kênh quảng cáo như Facebook, TikTok và Zalo Ads rất hiệu quả để tiếp cận người dùng mới. Hợp tác với các KOLs/Influencer cũng là một chiến lược phổ biến.',
        'Người dùng Việt Nam rất quan tâm đến đánh giá (reviews) và xếp hạng (ratings). Việc khuyến khích người dùng đánh giá và xử lý các phản hồi tiêu cực một cách chuyên nghiệp là rất cần thiết.',
      ],
    },
    careerConnect: {
      name: 'Chị Bùi Minh Trang',
      title: 'App Marketing Manager',
      company: 'Một công ty game',
      imageUrl: 'https://i.pravatar.cc/150?u=bui-minh-trang',
      quote:
        'Công việc của tôi không chỉ là làm cho ứng dụng được tải về, mà là làm cho nó được yêu thích. Ở Việt Nam, một lời giới thiệu từ bạn bè có giá trị hơn mọi quảng cáo. Vì vậy, chúng tôi tập trung vào việc xây dựng một cộng đồng mạnh và biến người dùng thành những người quảng bá cho sản phẩm.',
    },
    quizzes: [
      {
        question: 'ASO là viết tắt của từ gì?',
        options: [
          'App Search Optimization',
          'App Store Optimization',
          'Application Service Optimization',
          'Android System Optimization',
        ],
        correctAnswerIndex: 1,
        explanation:
          'ASO (App Store Optimization) là quá trình tối ưu hóa trang ứng dụng trên các cửa hàng (như App Store của Apple và Google Play Store) để tăng khả năng hiển thị và tỷ lệ chuyển đổi thành lượt tải.',
      },
      {
        question: 'Yếu tố nào sau đây KHÔNG phải là một phần của ASO?',
        options: [
          'Tên ứng dụng (App Title)',
          'Biểu tượng (Icon)',
          'Màu sắc của điện thoại',
          'Ảnh chụp màn hình (Screenshots)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các yếu tố chính của ASO bao gồm tên ứng dụng, biểu tượng, từ khóa, mô tả, ảnh chụp màn hình và video xem trước. Màu sắc của điện thoại không ảnh hưởng đến ASO.',
      },
    ],
  },
];
