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
    faqs: [
      {
        question: 'React Native là gì và tại sao nên học nó?',
        answer:
          'React Native là một framework do Facebook phát triển, cho phép bạn xây dựng ứng dụng di động cho cả iOS và Android chỉ từ một codebase duy nhất bằng JavaScript và React. Bạn nên học nó để tiết kiệm thời gian, công sức và chi phí phát triển.',
      },
      {
        question: 'Sự khác biệt giữa phát triển "native" và "cross-platform" là gì?',
        answer:
          'Phát triển "native" (bản địa) là xây dựng ứng dụng riêng cho từng hệ điều hành (iOS dùng Swift, Android dùng Kotlin), mang lại hiệu năng và trải nghiệm tốt nhất. "Cross-platform" (đa nền tảng) như React Native hay Flutter cho phép dùng chung một bộ mã cho cả hai, tiết kiệm chi phí nhưng có thể không tối ưu bằng native.',
      },
      {
        question: 'Flexbox trong React Native dùng để làm gì?',
        answer:
          'Flexbox là một mô hình layout mạnh mẽ giúp bạn thiết kế giao diện người dùng một cách linh hoạt và đáp ứng (responsive) trên nhiều kích thước màn hình khác nhau. Nó cho phép bạn sắp xếp, căn chỉnh và phân phối không gian giữa các thành phần một cách dễ dàng.',
      },
      {
        question: 'API là gì và tại sao ứng dụng cần tích hợp API?',
        answer:
          'API (Giao diện lập trình ứng dụng) là cách để các chương trình máy tính giao tiếp với nhau. Ứng dụng di động cần tích hợp API để lấy dữ liệu từ máy chủ (ví dụ: danh sách sản phẩm, thông tin người dùng), gửi dữ liệu lên máy chủ (ví dụ: đặt hàng), hoặc sử dụng dịch vụ của bên thứ ba (ví dụ: bản đồ, thanh toán).',
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
    faqs: [
      {
        question: 'Swift và SwiftUI khác nhau như thế nào?',
        answer:
          'Swift là ngôn ngữ lập trình được Apple tạo ra để phát triển ứng dụng trên các nền tảng của họ. SwiftUI là một framework giao diện người dùng (UI) hiện đại, cho phép bạn xây dựng UI cho iOS, macOS, watchOS và tvOS bằng cách khai báo, giúp code ngắn gọn và trực quan hơn so với UIKit (framework UI cũ hơn).',
      },
      {
        question: 'Core Data là gì?',
        answer:
          'Core Data là một framework của Apple giúp lưu trữ và quản lý dữ liệu của ứng dụng một cách bền vững (persistent), ngay cả khi ứng dụng đã tắt. Nó không phải là một cơ sở dữ liệu, mà là một framework để làm việc với cơ sở dữ liệu (thường là SQLite) một cách hướng đối tượng.',
      },
      {
        question: 'Tại sao cần tuân thủ iOS Human Interface Guidelines?',
        answer:
          'Đây là bộ quy tắc và khuyến nghị thiết kế của Apple. Tuân thủ chúng giúp ứng dụng của bạn có giao diện và trải nghiệm người dùng nhất quán, quen thuộc với người dùng iOS, từ đó tăng khả năng được chấp nhận và đánh giá cao trên App Store.',
      },
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
    faqs: [
      {
        question: 'Tại sao nên dùng Kotlin thay vì Java để phát triển Android?',
        answer:
          'Kotlin là ngôn ngữ được Google chính thức đề xuất cho phát triển Android. Nó ngắn gọn, an toàn hơn (giảm lỗi NullPointerException), và có nhiều tính năng hiện đại hơn Java, giúp tăng năng suất và làm cho code dễ đọc, dễ bảo trì hơn.',
      },
      {
        question: 'Jetpack Compose là gì?',
        answer:
          'Jetpack Compose là bộ công cụ UI hiện đại của Android để xây dựng giao diện người dùng native. Giống như SwiftUI của iOS, nó cho phép bạn xây dựng UI bằng cách khai báo bằng code Kotlin, giúp quá trình phát triển nhanh hơn và đơn giản hơn so với cách dùng XML layout truyền thống.',
      },
      {
        question: 'Room database là gì?',
        answer:
          'Room là một thư viện trong bộ Android Jetpack, cung cấp một lớp trừu tượng trên SQLite để cho phép truy cập cơ sở dữ liệu một cách mạnh mẽ hơn trong khi vẫn khai thác toàn bộ sức mạnh của SQLite. Nó giúp giảm code soạn sẵn và xác minh các truy vấn SQL tại thời điểm biên dịch.',
      },
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
    faqs: [
      {
        question: 'Flutter là gì và nó khác React Native như thế nào?',
        answer:
          'Flutter là một bộ công cụ UI của Google để xây dựng các ứng dụng đẹp, được biên dịch tự nhiên cho di động, web và máy tính để bàn từ một cơ sở mã duy nhất. Điểm khác biệt chính là Flutter không sử dụng các widget native của HĐH mà tự vẽ toàn bộ giao diện, cho phép kiểm soát giao diện tuyệt đối và hiệu năng cao.',
      },
      {
        question: 'Ngôn ngữ Dart là gì?',
        answer:
          'Dart là ngôn ngữ lập trình do Google tạo ra, được tối ưu hóa cho việc xây dựng giao diện người dùng. Nó có cú pháp dễ học (tương tự C/Java/JavaScript) và hỗ trợ cả biên dịch JIT (Just-In-Time) cho phát triển nhanh và AOT (Ahead-Of-Time) cho hiệu năng cao khi phát hành.',
      },
      {
        question: 'Khi nào nên chọn Flutter thay vì React Native?',
        answer:
          'Chọn Flutter nếu bạn ưu tiên một giao diện tùy chỉnh cao, hiệu năng gần bằng native và muốn phát triển cho cả web và desktop từ cùng một codebase. Chọn React Native nếu đội ngũ của bạn đã quen thuộc với React và JavaScript, và muốn tận dụng một hệ sinh thái thư viện lớn hơn.',
      },
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
    faqs: [
      {
        question: 'App Store Optimization (ASO) là gì?',
        answer:
          'ASO là quá trình tối ưu hóa trang ứng dụng của bạn trên App Store và Google Play để tăng khả năng hiển thị khi người dùng tìm kiếm và tăng tỷ lệ chuyển đổi (tải xuống). Nó giống như SEO (Tối ưu hóa công cụ tìm kiếm) nhưng dành cho cửa hàng ứng dụng.',
      },
      {
        question: 'Các yếu tố quan trọng nhất trong ASO là gì?',
        answer:
          'Các yếu tố chính bao gồm: tên ứng dụng (app title), từ khóa (keywords), mô tả (description), biểu tượng (icon), ảnh chụp màn hình (screenshots), và video xem trước. Ngoài ra, xếp hạng (ratings) và đánh giá (reviews) của người dùng cũng ảnh hưởng rất lớn đến ASO.',
      },
      {
        question: 'Làm thế nào để tăng lượt tải ứng dụng ở thị trường Việt Nam?',
        answer:
          'Ngoài ASO, hãy xem xét các kênh marketing khác như quảng cáo trên mạng xã hội (Facebook, TikTok), hợp tác với các KOLs/Influencer Việt Nam, chạy các chiến dịch PR trên các trang báo công nghệ, và tạo ra các chương trình giới thiệu (referral) để khuyến khích người dùng hiện tại mời bạn bè.',
      },
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
