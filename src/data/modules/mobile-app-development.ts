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
      {
        question: 'State management trong React Native là gì?',
        answer: 'State là dữ liệu nội bộ của một component, quyết định component đó sẽ hiển thị như thế nào. State management là quá trình quản lý sự thay đổi của dữ liệu này trong toàn bộ ứng dụng. Các thư viện phổ biến để quản lý state phức tạp bao gồm Redux, MobX, hoặc Context API của React.'
      },
      {
        question: 'React Navigation là gì?',
        answer: 'React Navigation là thư viện phổ biến nhất để quản lý việc điều hướng giữa các màn hình trong ứng dụng React Native. Nó cung cấp các loại điều hướng khác nhau như Stack (xếp chồng), Tab (thanh tab), và Drawer (ngăn kéo).'
      },
      {
        question: 'Làm thế nào để gỡ lỗi (debug) một ứng dụng React Native?',
        answer: 'Bạn có thể sử dụng các công cụ tích hợp sẵn như Flipper, React Native Debugger, hoặc đơn giản là menu gỡ lỗi trong ứng dụng (lắc điện thoại hoặc dùng phím tắt) để theo dõi log, kiểm tra giao diện và hiệu năng.'
      },
      {
        question: 'Expo và React Native CLI khác nhau như thế nào?',
        answer: 'React Native CLI cho phép bạn toàn quyền kiểm soát dự án, bao gồm cả việc viết code native. Expo là một nền tảng và bộ công cụ xây dựng trên React Native, giúp đơn giản hóa quá trình phát triển và triển khai, nhưng có một số giới hạn về việc sử dụng các thư viện native.'
      },
      {
        question: 'Làm thế nào để ứng dụng React Native có hiệu năng tốt?',
        answer: 'Để tối ưu hiệu năng, bạn nên tránh các re-render không cần thiết bằng cách sử dụng `React.memo`, `useCallback`, `useMemo`. Ngoài ra, hãy tối ưu hóa việc xử lý danh sách dài với `FlatList` và giảm kích thước bundle của ứng dụng.'
      },
      {
        question: 'Tôi có thể sử dụng các thư viện JavaScript thông thường trong React Native không?',
        answer: 'Có, bạn có thể sử dụng hầu hết các thư viện JavaScript không phụ thuộc vào DOM của trình duyệt. Đối với các thư viện cần tương tác với phần cứng hoặc API của hệ điều hành, bạn cần tìm các phiên bản được viết riêng cho React Native.'
      }
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
      {
        question: 'Xcode là gì?',
        answer: 'Xcode là môi trường phát triển tích hợp (IDE) chính thức của Apple để xây dựng ứng dụng cho tất cả các nền tảng của họ. Nó bao gồm trình soạn thảo mã, trình gỡ lỗi, trình thiết kế giao diện và các công cụ để gửi ứng dụng lên App Store.'
      },
      {
        question: 'UIKit và SwiftUI, tôi nên học cái nào?',
        answer: 'SwiftUI là tương lai của phát triển UI trên nền tảng Apple và dễ học hơn. Tuy nhiên, rất nhiều ứng dụng hiện tại vẫn đang sử dụng UIKit. Nếu bạn là người mới, hãy bắt đầu với SwiftUI, nhưng có kiến thức cơ bản về UIKit vẫn rất hữu ích.'
      },
      {
        question: 'Làm thế nào để quản lý các gói phụ thuộc trong dự án iOS?',
        answer: 'Bạn có thể sử dụng Swift Package Manager (SPM), một công cụ được tích hợp sẵn trong Xcode, để dễ dàng thêm, xóa và quản lý các thư viện của bên thứ ba trong dự án của mình. CocoaPods và Carthage là các lựa chọn phổ biến khác nhưng cũ hơn.'
      },
      {
        question: 'Auto Layout là gì?',
        answer: 'Auto Layout là một hệ thống dựa trên các ràng buộc (constraints) trong UIKit, giúp bạn tạo ra các giao diện có thể tự động điều chỉnh theo các kích thước và hướng màn hình khác nhau. Đây là nền tảng của thiết kế giao diện đáp ứng trên iOS.'
      },
      {
        question: 'CloudKit là gì?',
        answer: 'CloudKit là một framework của Apple cho phép bạn lưu trữ và đồng bộ hóa dữ liệu ứng dụng của mình trên iCloud một cách dễ dàng. Nó cung cấp một giải pháp backend đơn giản mà không cần phải tự quản lý máy chủ.'
      },
      {
        question: 'TestFlight là gì?',
        answer: 'TestFlight là một nền tảng của Apple cho phép bạn mời người dùng thử nghiệm phiên bản beta của ứng dụng trước khi phát hành chính thức trên App Store. Đây là một công cụ quan trọng để thu thập phản hồi và sửa lỗi.'
      },
      {
        question: 'Tôi có cần một chiếc iPhone để phát triển ứng dụng iOS không?',
        answer: 'Không bắt buộc. Xcode cung cấp một trình giả lập (Simulator) mạnh mẽ cho phép bạn chạy và kiểm tra ứng dụng trên nhiều loại thiết bị và phiên bản iOS khác nhau ngay trên máy Mac. Tuy nhiên, việc kiểm tra trên thiết bị thật vẫn được khuyến khích để đảm bảo trải nghiệm tốt nhất.'
      }
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
      {
        question: 'Android Studio là gì?',
        answer: 'Android Studio là Môi trường phát triển tích hợp (IDE) chính thức để phát triển ứng dụng Android. Nó được xây dựng trên IntelliJ IDEA của JetBrains và cung cấp các công cụ chuyên dụng cho việc phát triển Android.'
      },
      {
        question: 'ViewModel trong Android là gì?',
        answer: 'ViewModel là một lớp trong Android Architecture Components, được thiết kế để lưu trữ và quản lý dữ liệu liên quan đến UI một cách có ý thức về vòng đời. Nó giúp dữ liệu tồn tại sau các thay đổi cấu hình như xoay màn hình.'
      },
      {
        question: 'Sự khác biệt giữa `findViewById` và `View Binding` là gì?',
        answer: '`findViewById` là cách truyền thống để tham chiếu đến các view trong layout XML, nhưng nó không an toàn về kiểu và dễ gây ra lỗi. `View Binding` là một tính năng hiện đại hơn, tự động tạo ra một lớp tham chiếu trực tiếp đến các view, giúp code an toàn và ngắn gọn hơn.'
      },
      {
        question: 'APK và AAB (Android App Bundle) khác nhau như thế nào?',
        answer: 'APK là định dạng tệp truyền thống mà bạn cài đặt trên thiết bị. AAB là định dạng xuất bản mà bạn tải lên Google Play. Google Play sau đó sẽ sử dụng App Bundle để tạo và phân phát các APK được tối ưu hóa cho từng cấu hình thiết bị của người dùng, giúp giảm kích thước ứng dụng.'
      },
      {
        question: 'Coroutines trong Kotlin là gì?',
        answer: 'Coroutines là một tính năng của Kotlin giúp đơn giản hóa việc viết mã bất đồng bộ. Chúng cho phép bạn viết các thao tác chạy nền (như gọi API, truy vấn cơ sở dữ liệu) một cách tuần tự mà không chặn luồng chính, giúp ứng dụng luôn mượt mà.'
      },
      {
        question: 'Gradle trong Android là gì?',
        answer: 'Gradle là một hệ thống tự động hóa xây dựng được sử dụng để quản lý các phụ thuộc (dependencies) và định nghĩa quy trình xây dựng ứng dụng Android của bạn. Tệp `build.gradle` là nơi bạn khai báo các thư viện và cấu hình cho dự án.'
      },
      {
        question: 'Làm thế nào để hỗ trợ nhiều kích thước màn hình trên Android?',
        answer: 'Bạn nên sử dụng các layout linh hoạt như `ConstraintLayout`, cung cấp các tài nguyên thay thế (alternative resources) cho các kích thước màn hình khác nhau, và sử dụng các đơn vị như `dp` (density-independent pixels) thay vì `px` (pixels).'
      }
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
      {
        question: 'Widget trong Flutter là gì?',
        answer: 'Trong Flutter, mọi thứ đều là Widget. Từ một nút bấm, một dòng chữ, đến toàn bộ màn hình. Bạn xây dựng giao diện bằng cách lồng các widget vào nhau, tạo thành một cây widget (widget tree).'
      },
      {
        question: 'StatefulWidget và StatelessWidget khác nhau như thế nào?',
        answer: '`StatelessWidget` là các widget không thay đổi theo thời gian, chúng chỉ được vẽ một lần. `StatefulWidget` là các widget có trạng thái (state) có thể thay đổi trong quá trình sử dụng, và giao diện của chúng sẽ được vẽ lại mỗi khi trạng thái thay đổi.'
      },
      {
        question: 'Làm thế nào để quản lý trạng thái (state management) trong Flutter?',
        answer: 'Đối với các ứng dụng phức tạp, bạn nên sử dụng các giải pháp quản lý trạng thái như Provider, Riverpod, Bloc, hoặc GetX. Chúng giúp tách biệt logic nghiệp vụ khỏi giao diện và giúp việc quản lý dữ liệu trong ứng dụng trở nên dễ dàng hơn.'
      },
      {
        question: 'Pub.dev là gì?',
        answer: 'Pub.dev là kho lưu trữ các gói (packages) và plugin cho Dart và Flutter. Đây là nơi bạn có thể tìm thấy hàng ngàn thư viện của cộng đồng để thêm các chức năng vào ứng dụng của mình, từ việc gọi API đến tích hợp bản đồ.'
      },
      {
        question: 'Hot Reload trong Flutter hoạt động như thế nào?',
        answer: 'Hot Reload là một tính năng cực kỳ mạnh mẽ của Flutter. Nó cho phép bạn thấy ngay lập tức các thay đổi về giao diện và logic mà không cần phải khởi động lại toàn bộ ứng dụng, giúp tăng tốc độ phát triển lên đáng kể.'
      },
      {
        question: 'Firebase là gì và nó hoạt động với Flutter như thế nào?',
        answer: 'Firebase là một nền tảng phát triển ứng dụng di động của Google, cung cấp các dịch vụ backend như xác thực người dùng, cơ sở dữ liệu thời gian thực (Firestore), lưu trữ tệp, và nhiều hơn nữa. Flutter có sự tích hợp rất tốt với Firebase thông qua các plugin chính thức.'
      },
      {
        question: 'Flutter có thể gọi code native (Swift/Kotlin) không?',
        answer: 'Có, Flutter cung cấp một cơ chế gọi là "platform channels" cho phép ứng dụng Flutter của bạn giao tiếp và gọi các hàm được viết bằng ngôn ngữ native của nền tảng (Swift/Objective-C cho iOS và Kotlin/Java cho Android).'
      }
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
      {
        question: 'Làm thế nào để nghiên cứu từ khóa cho ASO?',
        answer: 'Bạn có thể sử dụng các công cụ ASO như AppTweak, Sensor Tower, hoặc đơn giản là sử dụng tính năng gợi ý tìm kiếm trên App Store/Google Play. Hãy nghĩ xem người dùng sẽ tìm kiếm thuật ngữ gì để giải quyết vấn đề mà ứng dụng của bạn cung cấp.'
      },
      {
        question: 'Tỷ lệ chuyển đổi (Conversion Rate) trong ASO là gì?',
        answer: 'Là tỷ lệ phần trăm người dùng đã tải xuống ứng dụng của bạn sau khi xem trang ứng dụng. Để cải thiện tỷ lệ này, bạn cần có một biểu tượng hấp dẫn, ảnh chụp màn hình rõ ràng và một mô tả thuyết phục.'
      },
      {
        question: 'Tại sao xếp hạng và đánh giá lại quan trọng?',
        answer: 'Xếp hạng và đánh giá là một bằng chứng xã hội mạnh mẽ. Các ứng dụng có xếp hạng cao và nhiều đánh giá tích cực thường được tin tưởng hơn và có thứ hạng tìm kiếm tốt hơn. Hãy khuyến khích người dùng hài lòng để lại đánh giá.'
      },
      {
        question: 'Làm thế nào để theo dõi hiệu quả của các chiến dịch marketing ứng dụng?',
        answer: 'Bạn nên tích hợp một SDK phân tích di động như Firebase Analytics, AppsFlyer, hoặc Adjust. Các công cụ này giúp bạn theo dõi người dùng đến từ đâu, hành vi của họ trong ứng dụng và hiệu quả của từng kênh marketing.'
      },
      {
        question: 'Các mô hình kiếm tiền phổ biến cho ứng dụng di động là gì?',
        answer: 'Các mô hình phổ biến bao gồm: ứng dụng trả phí, mua hàng trong ứng dụng (in-app purchases), đăng ký theo tháng/năm (subscriptions), hiển thị quảng cáo, và mô hình freemium (miễn phí các tính năng cơ bản, trả phí cho các tính năng nâng cao).'
      },
      {
        question: 'Push notification (thông báo đẩy) có vai trò gì trong việc giữ chân người dùng?',
        answer: 'Thông báo đẩy là một công cụ mạnh mẽ để kéo người dùng quay trở lại ứng dụng. Tuy nhiên, hãy sử dụng chúng một cách thông minh, gửi đi những thông báo thực sự hữu ích và có liên quan, nếu không người dùng sẽ tắt chúng hoặc gỡ bỏ ứng dụng.'
      },
      {
        question: 'Localize (bản địa hóa) ứng dụng có quan trọng không?',
        answer: 'Rất quan trọng, đặc biệt ở thị trường Việt Nam. Việc dịch ứng dụng, mô tả trên cửa hàng và các tài liệu marketing sang tiếng Việt sẽ giúp bạn tiếp cận và thuyết phục người dùng bản địa tốt hơn rất nhiều.'
      }
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
