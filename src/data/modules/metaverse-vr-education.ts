import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { MetaverseVRLesson } from '@/types/lesson-base';

export const metaverseVREducationModule: ModuleData<MetaverseVRLesson> = {
  id: 'metaverse-vr-education',
  title: 'Metaverse & Giáo Dục VR',
  subtitle: 'Tương lai của học tập immersive',
  description:
    'Khám phá công nghệ Metaverse, Virtual Reality và Augmented Reality trong giáo dục. Học cách tạo nội dung VR/AR, phát triển ứng dụng giáo dục immersive và nắm bắt cơ hội kinh doanh trong virtual economy.',
  level: 'Trung bình',
  duration: '8-10 giờ',
  category: 'Experimental Technology',
  features: [
    'Tạo nội dung VR/AR giáo dục chuyên nghiệp',
    'Phát triển ứng dụng mobile AR tương tác',
    'Thiết kế virtual spaces cho collaborative learning',
    'Hiểu biết về Metaverse business models và kinh tế ảo',
  ],
  icon: '🥽',
  color: 'from-purple-600 to-pink-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  objectives: [
    'Master công nghệ VR/AR cho educational applications',
    'Tạo immersive learning experiences sử dụng Unity và AR platforms',
    'Phát triển social VR collaboration systems',
    'Hiểu về virtual economy và Metaverse business opportunities',
    'Apply VR/AR technology cho Vietnamese education challenges',
  ],
  prerequisites: [
    'Kiến thức cơ bản về technology và internet',
    'Hiểu biết về social media và digital platforms',
    'Không cần kinh nghiệm VR/AR trước đó',
  ],
  careerOutcomes: [
    'VR/AR Developer cho education technology companies',
    'Metaverse Experience Designer',
    'Educational Technology Consultant',
    'Virtual Event và Training Specialist',
    'Immersive Content Creator',
  ],
  industryApplications: [
    { name: 'Remote education delivery với immersive experiences', description: '' },
    { name: 'Corporate training trong virtual environments', description: '' },
    { name: 'Cultural heritage preservation và virtual tourism', description: '' },
    { name: 'Medical education với VR simulation', description: '' },
    { name: 'Engineering design collaboration trong virtual spaces', description: '' },
  ],
  marketDemand: {
    averageSalary: '25-45 triệu VNĐ',
    jobGrowth: '+400%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.GameDevelopment, K2Module.AIArtCreativeTech, K2Module.DigitalArtsCreativeTech],
  lessons: [
    {
      id: 'metaverse-fundamentals',
      title: 'Cơ Bản Về Metaverse và Thực Tế Ảo',
      description: 'Tìm hiểu về Metaverse, công nghệ VR/AR và cách chúng đang thay đổi giáo dục và cuộc sống.',
      duration: '90 phút',
      difficulty: 'Cơ bản',
      videoUrl: 'https://www.youtube.com/watch?v=YJg02ivYzSs',
      imageUrl: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      technologyLevel: 'Beginner',
      tools: ['Oculus Quest 2', 'Horizon Worlds'],
      objectives: [
        'Hiểu được khái niệm Metaverse và Web3',
        'Phân biệt VR, AR, MR và các ứng dụng',
        'Sử dụng cơ bản tai nghe VR và điều hướng',
        'Tạo avatar và tương tác trong môi trường VR',
        'Nhận biết cơ hội nghề nghiệp trong lĩnh vực này',
      ],
      prerequisites: [
        'Kiến thức cơ bản về internet và công nghệ',
        'Hiểu biết về mạng xã hội và trò chơi',
        'Không cần kinh nghiệm VR trước đó',
      ],
      faqs: [
        {
          question: 'Metaverse là gì?',
          answer:
            'Metaverse là một không gian ảo tập thể, được tạo ra bởi sự hội tụ của thực tế vật lý và không gian kỹ thuật số. Nó giống như một phiên bản 3D của Internet, nơi bạn có thể tương tác với người khác và các đối tượng kỹ thuật số thông qua avatar.',
        },
        {
          question: 'VR và AR khác nhau như thế nào?',
          answer:
            'VR (Virtual Reality - Thực tế ảo) đưa bạn hoàn toàn vào một thế giới kỹ thuật số, thường yêu cầu một chiếc kính chuyên dụng. AR (Augmented Reality - Thực tế tăng cường) lại phủ các lớp thông tin kỹ thuật số lên thế giới thực của bạn, thường thông qua camera của điện thoại.',
        },
        {
          question: 'Tôi có cần một thiết bị đắt tiền để trải nghiệm Metaverse không?',
          answer:
            'Không hẳn. Mặc dù kính VR chuyên dụng mang lại trải nghiệm tốt nhất, nhiều nền tảng Metaverse có thể được truy cập qua máy tính hoặc thậm chí là điện thoại thông minh, giúp mọi người dễ dàng tham gia hơn.',
        },
        {
          question: 'Học trong Metaverse có gì khác so với học trực tuyến thông thường?',
          answer:
            'Học trong Metaverse cho phép bạn tương tác với bài học một cách trực quan và sinh động hơn. Ví dụ, bạn có thể "đi bộ" trên bề mặt sao Hỏa trong giờ học thiên văn, hoặc "thực hành" phẫu thuật trên mô hình 3D trong giờ học y khoa, thay vì chỉ nhìn vào màn hình.',
        },
        {
          question: 'Web3 là gì và nó liên quan gì đến Metaverse?',
          answer:
            'Web3 là thế hệ tiếp theo của Internet, tập trung vào sự phi tập trung, công nghệ blockchain và nền kinh tế dựa trên token. Metaverse được xem là một trong những ứng dụng quan trọng nhất của Web3, nơi người dùng có quyền sở hữu thực sự đối với tài sản kỹ thuật số của họ.',
        },
        {
          question: 'Avatar trong Metaverse là gì?',
          answer:
            'Avatar là hiện thân kỹ thuật số của bạn trong không gian ảo. Bạn có thể tùy chỉnh ngoại hình, quần áo và phụ kiện của avatar để thể hiện cá tính của mình.',
        },
        {
          question: 'MR (Mixed Reality - Thực tế hỗn hợp) là gì?',
          answer:
            'MR là sự kết hợp giữa VR và AR. Nó không chỉ phủ thông tin kỹ thuật số lên thế giới thực mà còn cho phép các đối tượng ảo tương tác với môi trường thực. Ví dụ, một quả bóng ảo có thể nảy trên bàn thật của bạn.',
        },
        {
          question: 'Horizon Worlds là gì?',
          answer:
            'Horizon Worlds là một nền tảng xã hội thực tế ảo miễn phí được phát triển bởi Meta (công ty mẹ của Facebook). Nó cho phép người dùng tạo và khám phá các thế giới ảo, chơi game và tương tác với nhau.',
        },
        {
          question: 'Cơ hội nghề nghiệp trong lĩnh vực Metaverse là gì?',
          answer:
            'Lĩnh vực này đang mở ra nhiều cơ hội nghề nghiệp mới như nhà thiết kế thế giới ảo, kỹ sư phát triển VR/AR, chuyên gia kinh tế token, quản lý sự kiện ảo, và người sáng tạo nội dung cho Metaverse.',
        },
        {
          question: 'Việc sử dụng VR có gây ảnh hưởng đến sức khỏe không?',
          answer:
            'Một số người có thể cảm thấy chóng mặt hoặc mỏi mắt khi sử dụng VR trong thời gian dài. Các nhà sản xuất khuyến nghị nên nghỉ giải lao thường xuyên và điều chỉnh kính cho phù hợp để giảm thiểu các tác động này. Công nghệ đang liên tục được cải tiến để mang lại trải nghiệm thoải mái hơn.',
        },
      ],
      realWorldApplications: [],
    },
    {
      id: 'vr-content-creation',
      title: 'Tạo Nội Dung VR Giáo Dục',
      description: 'Học cách thiết kế và phát triển các trải nghiệm ảo và nội dung giáo dục cho các nền tảng VR.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=1cQbMP3I5Sk',
      imageUrl: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      technologyLevel: 'Intermediate',
      tools: ['Unity', 'A-Frame'],
      objectives: [
        'Thiết kế UX/UI cho môi trường VR',
        'Sử dụng Unity hoặc A-Frame để tạo ứng dụng VR',
        'Tối ưu hóa hiệu suất cho các trải nghiệm VR',
        'Tạo các yếu tố tương tác và gamification',
        'Triển khai nội dung VR lên các nền tảng khác nhau',
      ],
      prerequisites: [
        'Hoàn thành bài "Cơ Bản Về Metaverse và Thực Tế Ảo"',
        'Kiến thức cơ bản về thiết kế 3D hoặc phát triển game',
        'Hiểu biết về các nguyên tắc trải nghiệm người dùng',
      ],
      faqs: [
        {
          question: 'Unity là gì và tại sao nó lại quan trọng cho việc tạo nội dung VR?',
          answer:
            'Unity là một công cụ phát triển game và ứng dụng 3D hàng đầu. Nó cung cấp một môi trường mạnh mẽ để xây dựng, lập trình và triển khai các trải nghiệm VR tương tác trên nhiều nền tảng khác nhau.',
        },
        {
          question: 'UX/UI trong VR khác gì so với thiết kế cho web/mobile?',
          answer:
            'Thiết kế cho VR phải xem xét không gian 3 chiều, sự thoải mái của người dùng (tránh gây chóng mặt), các phương thức tương tác mới (dùng tay, ánh mắt), và cách dẫn dắt sự chú ý của người dùng trong một môi trường 360 độ.',
        },
        {
          question: 'Gamification trong giáo dục VR là gì?',
          answer:
            'Là việc áp dụng các yếu tố của trò chơi (như điểm số, phần thưởng, thử thách) vào trải nghiệm học tập để tăng cường sự hứng thú, động lực và khả năng ghi nhớ kiến thức của người học.',
        },
        {
          question: 'A-Frame là gì?',
          answer:
            'A-Frame là một framework web mã nguồn mở để xây dựng các trải nghiệm thực tế ảo ngay trong trình duyệt web. Nó cho phép các nhà phát triển web sử dụng kiến thức HTML của mình để tạo ra các cảnh VR đơn giản một cách nhanh chóng.',
        },
        {
          question: 'Làm thế nào để tối ưu hóa hiệu suất cho một ứng dụng VR?',
          answer:
            'Tối ưu hóa trong VR rất quan trọng để duy trì tốc độ khung hình (frame rate) cao và tránh gây khó chịu. Các kỹ thuật bao gồm giảm số lượng đa giác (polygons) của mô hình 3D, sử dụng texture hiệu quả, và tối ưu hóa mã lệnh.',
        },
        {
          question: 'Tôi có thể tìm tài nguyên 3D miễn phí cho dự án VR của mình ở đâu?',
          answer:
            'Có nhiều trang web cung cấp mô hình 3D miễn phí như Sketchfab, Google Poly (đã ngừng nhưng vẫn có thể tìm thấy kho lưu trữ), và Unity Asset Store cũng có nhiều tài sản miễn phí.',
        },
        {
          question: 'Làm thế nào để tạo tương tác trong VR?',
          answer:
            'Tương tác trong VR có thể được tạo ra bằng cách lập trình cho các bộ điều khiển tay (controllers). Bạn có thể cho phép người dùng cầm, nắm, ném các vật thể, nhấn các nút ảo, hoặc tương tác với giao diện bằng cách trỏ và chọn.',
        },
        {
          question: 'Cần những kỹ năng gì để trở thành một nhà phát triển nội dung VR?',
          answer:
            'Bạn cần kết hợp kỹ năng kỹ thuật (lập trình, sử dụng Unity), kỹ năng nghệ thuật (thiết kế 3D, UX/UI), và kỹ năng kể chuyện (thiết kế trải nghiệm) để tạo ra một sản phẩm VR hấp dẫn và ý nghĩa.',
        },
        {
          question: 'Sự khác biệt giữa VR 3-DOF và 6-DOF là gì?',
          answer:
            '3-DOF (3 Degrees of Freedom) chỉ theo dõi chuyển động xoay đầu (nhìn lên/xuống, trái/phải). 6-DOF (6 Degrees of Freedom) theo dõi cả chuyển động xoay và chuyển động tịnh tiến (đi tới/lui, qua trái/phải, lên/xuống), mang lại trải nghiệm chân thực và tự do hơn nhiều.',
        },
        {
          question: 'Làm thế nào để triển khai ứng dụng VR của tôi?',
          answer:
            'Bạn có thể xuất bản ứng dụng của mình lên các cửa hàng ứng dụng VR chính thức như Oculus Store, SteamVR, hoặc Pico Store. Bạn cũng có thể chia sẻ trực tiếp file cài đặt (APK cho các thiết bị độc lập) cho người khác dùng thử.',
        },
      ],
      realWorldApplications: [],
    },
    {
      id: 'ar-mobile-applications',
      title: 'Ứng Dụng AR Trên Di Động',
      description:
        'Phát triển các ứng dụng Thực tế tăng cường cho giáo dục sử dụng điện thoại thông minh và máy tính bảng.',
      duration: '100 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=WzfDo2Wpxks',
      imageUrl: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      technologyLevel: 'Intermediate',
      tools: ['ARCore', 'ARKit', 'Unity'],
      objectives: [
        'Hiểu về công nghệ AR và các nguyên tắc cơ bản của thị giác máy tính',
        'Phát triển ứng dụng AR sử dụng ARCore/ARKit',
        'Tạo nội dung 3D tương tác với AR dựa trên điểm đánh dấu và không cần điểm đánh dấu',
        'Thực hiện nhận dạng hình ảnh và theo dõi đối tượng',
        'Thiết kế giao diện người dùng AR trực quan',
      ],
      prerequisites: [
        'Kiến thức cơ bản về phát triển ứng dụng di động (iOS hoặc Android)',
        'Hiểu biết về đồ họa 3D và Unity (ưu tiên)',
        'Kinh nghiệm với nhiếp ảnh trên điện thoại thông minh và thiết kế cơ bản',
      ],
      faqs: [
        {
          question: 'ARCore và ARKit là gì?',
          answer:
            'ARCore là nền tảng phát triển ứng dụng AR của Google cho các thiết bị Android. ARKit là nền tảng tương ứng của Apple cho các thiết bị iOS. Cả hai đều cung cấp các công cụ để ứng dụng có thể hiểu và theo dõi môi trường xung quanh.',
        },
        {
          question: 'AR dựa trên điểm đánh dấu (marker-based) là gì?',
          answer:
            'Là loại AR yêu cầu một hình ảnh cụ thể (gọi là marker, ví dụ như mã QR hoặc một bức ảnh) để kích hoạt và hiển thị nội dung 3D. Khi camera nhận diện được marker, đối tượng ảo sẽ xuất hiện trên đó.',
        },
        {
          question: 'AR không cần điểm đánh dấu (markerless) hoạt động như thế nào?',
          answer:
            'Loại AR này sử dụng các thuật toán thị giác máy tính để nhận diện các mặt phẳng trong thế giới thực (như sàn nhà, mặt bàn) và đặt các đối tượng ảo lên đó mà không cần một marker cụ thể. Đây là công nghệ phổ biến trong các ứng dụng AR hiện đại.',
        },
        {
          question: 'Thị giác máy tính (Computer Vision) là gì?',
          answer:
            'Là một lĩnh vực của trí tuệ nhân tạo cho phép máy tính "nhìn" và hiểu được nội dung của hình ảnh và video. Đây là công nghệ cốt lõi đằng sau AR, giúp điện thoại của bạn nhận diện được thế giới thực.',
        },
        {
          question: 'Làm thế nào để tạo một ứng dụng AR đơn giản?',
          answer:
            'Bạn có thể sử dụng Unity kết hợp với SDK của ARCore hoặc ARKit. Quy trình cơ bản bao gồm: thiết lập project, thêm các đối tượng 3D, và viết mã lệnh để xử lý việc nhận diện mặt phẳng và đặt đối tượng vào thế giới thực.',
        },
        {
          question: 'Ứng dụng của AR trong giáo dục là gì?',
          answer:
            'AR có thể làm cho việc học trở nên cực kỳ sinh động. Ví dụ, học sinh có thể xem mô hình 3D của một trái tim đang đập ngay trên bàn học, hoặc hướng camera vào một di tích lịch sử để xem nó được tái hiện lại như thế nào trong quá khứ.',
        },
        {
          question: 'Làm thế nào để thiết kế giao diện (UI) cho ứng dụng AR?',
          answer:
            'Thiết kế UI cho AR cần phải tối giản để không che khuất thế giới thực. Các nút bấm và thông tin nên được đặt ở các vị trí dễ tiếp cận nhưng không gây cản trở tầm nhìn chính. Giao diện cần phải thích ứng với môi trường xung quanh.',
        },
        {
          question: 'Theo dõi đối tượng (Object Tracking) trong AR là gì?',
          answer:
            'Là khả năng của ứng dụng AR để nhận diện một đối tượng 3D cụ thể trong thế giới thực và gắn nội dung ảo vào đối tượng đó. Ví dụ, hướng camera vào một hộp đồ chơi và ứng dụng sẽ hiển thị hướng dẫn lắp ráp ảo.',
        },
        {
          question: 'Tôi có thể sử dụng AR trên những điện thoại nào?',
          answer:
            'Hầu hết các điện thoại thông minh hiện đại (sản xuất trong vòng 3-4 năm trở lại đây) đều hỗ trợ ARCore (cho Android) hoặc ARKit (cho iPhone/iPad). Bạn có thể kiểm tra danh sách thiết bị được hỗ trợ trên trang web của Google và Apple.',
        },
        {
          question: 'WebAR là gì?',
          answer:
            'WebAR là công nghệ cho phép trải nghiệm AR trực tiếp trên trình duyệt web của điện thoại mà không cần cài đặt ứng dụng riêng. Điều này giúp người dùng tiếp cận AR một cách nhanh chóng và dễ dàng hơn.',
        },
      ],
      realWorldApplications: [],
    },
    {
      id: 'social-vr-collaboration',
      title: 'Hợp Tác Xã Hội Trong VR',
      description: 'Tạo và quản lý các không gian ảo hợp tác cho giáo dục, làm việc nhóm và học tập xã hội.',
      duration: '80 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=k_y8YYcGaZQ',
      imageUrl: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      technologyLevel: 'Intermediate',
      tools: ['VRChat', 'Rec Room', 'Spatial'],
      objectives: [
        'Thiết kế các không gian họp ảo hiệu quả',
        'Tạo điều kiện cho các trải nghiệm học tập hợp tác trong VR',
        'Quản lý các nhóm làm việc ảo và hợp tác từ xa',
        'Tạo ra các môi trường ảo toàn diện và dễ tiếp cận',
        'Hiểu được động lực xã hội trong không gian ảo',
      ],
      prerequisites: [
        'Kinh nghiệm với các nền tảng VR và điều hướng cơ bản',
        'Hiểu biết về các công cụ hợp tác trực tuyến',
        'Kiến thức cơ bản về tâm lý học giáo dục',
      ],
      faqs: [
        {
          question: 'Social VR (VR Xã hội) là gì?',
          answer:
            'Là các ứng dụng và nền tảng VR cho phép nhiều người dùng tương tác với nhau trong một không gian ảo chung thông qua avatar. Nó giống như một mạng xã hội nhưng ở dạng 3D và chân thực hơn.',
        },
        {
          question: 'Tại sao nên sử dụng VR cho làm việc nhóm từ xa?',
          answer:
            'VR tạo ra cảm giác "hiện diện" (sense of presence) mà các cuộc gọi video thông thường không có được. Bạn có thể cảm nhận được không gian, ngôn ngữ cơ thể của người khác, và cùng nhau tương tác với các đối tượng 3D, giúp tăng cường sự sáng tạo và gắn kết.',
        },
        {
          question: 'Spatial là nền tảng gì?',
          answer:
            'Spatial là một nền tảng hợp tác trong VR/AR, cho phép các nhóm làm việc gặp gỡ, chia sẻ tài liệu, và tương tác với các mô hình 3D trong một không gian ảo. Nó được thiết kế cho các cuộc họp và làm việc chuyên nghiệp.',
        },
        {
          question: 'Làm thế nào để thiết kế một không gian họp ảo hiệu quả?',
          answer:
            'Một không gian họp ảo tốt cần có âm thanh không gian (spatial audio) để bạn biết ai đang nói từ hướng nào, các công cụ chia sẻ màn hình và bảng trắng ảo, và không gian đủ linh hoạt để có thể thảo luận nhóm lớn hoặc chia thành các nhóm nhỏ.',
        },
        {
          question: 'Làm thế nào để đảm bảo sự hòa nhập (inclusion) trong môi trường VR?',
          answer:
            'Cần cung cấp nhiều tùy chọn avatar đa dạng, đảm bảo các công cụ dễ sử dụng cho người mới, và thiết lập các quy tắc cộng đồng rõ ràng để chống lại các hành vi quấy rối, tạo ra một môi trường an toàn và chào đón cho tất cả mọi người.',
        },
        {
          question: 'VRChat và Rec Room khác nhau như thế nào?',
          answer:
            'VRChat tập trung mạnh vào việc cho phép người dùng tự tạo và tùy chỉnh thế giới cũng như avatar, thu hút một cộng đồng sáng tạo đa dạng. Rec Room lại tập trung nhiều hơn vào các trò chơi và hoạt động có sẵn mà người dùng có thể tham gia cùng nhau.',
        },
        {
          question: 'Động lực xã hội trong không gian ảo có gì khác biệt?',
          answer:
            'Trong không gian ảo, các tín hiệu phi ngôn ngữ như khoảng cách cá nhân, hướng nhìn và cử chỉ tay trở nên quan trọng. Sự ẩn danh tương đối cũng có thể dẫn đến các hành vi cởi mở hơn hoặc tiêu cực hơn so với ngoài đời thực.',
        },
        {
          question: 'Làm thế nào để tổ chức một lớp học trong VR?',
          answer:
            'Bạn cần một nền tảng hỗ trợ (như Engage hoặc Spatial), chuẩn bị bài giảng có các yếu tố tương tác 3D, hướng dẫn sinh viên cách sử dụng các công cụ, và thiết kế các hoạt động nhóm để tận dụng lợi thế của môi trường hợp tác.',
        },
        {
          question: 'Âm thanh không gian (Spatial Audio) là gì?',
          answer:
            'Là công nghệ âm thanh 3D giúp bạn nghe thấy âm thanh phát ra từ vị trí của nguồn phát trong không gian ảo. Nếu một người đứng bên trái bạn nói chuyện, bạn sẽ nghe thấy giọng nói của họ từ phía bên trái. Điều này làm tăng đáng kể cảm giác chân thực.',
        },
        {
          question: 'Những thách thức của việc hợp tác trong VR là gì?',
          answer:
            'Các thách thức bao gồm rào cản về thiết bị (không phải ai cũng có kính VR), vấn đề về sự thoải mái khi sử dụng trong thời gian dài, và khó khăn trong việc thể hiện các biểu cảm khuôn mặt tinh tế (mặc dù công nghệ theo dõi khuôn mặt đang cải thiện điều này).',
        },
      ],
      realWorldApplications: [],
    },
    {
      id: 'metaverse-business-economics',
      title: 'Kinh Tế Metaverse & Cơ Hội Kinh Doanh',
      description: 'Khám phá nền kinh tế ảo, NFT, bất động sản ảo và các cơ hội nghề nghiệp trong Metaverse.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      videoUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologyLevel: 'Advanced',
      tools: ['Decentraland', 'The Sandbox', 'OpenSea'],
      objectives: [
        'Hiểu các nguyên tắc kinh tế ảo và tokenomics',
        'Khám phá các cơ hội nghề nghiệp trong ngành công nghiệp Metaverse',
        'Tìm hiểu về NFT, tài sản ảo và quyền sở hữu kỹ thuật số',
        'Hiểu các chiến lược đầu tư bất động sản ảo',
        'Phát triển các mô hình kinh doanh cho các dự án Metaverse',
      ],
      prerequisites: [
        'Hiểu biết cơ bản về tiền điện tử và blockchain',
        'Quan tâm đến kinh doanh và khởi nghiệp',
        'Đã hoàn thành các khóa học cơ bản về Metaverse',
      ],
      faqs: [
        {
          question: 'NFT (Non-Fungible Token) là gì?',
          answer:
            'NFT là một loại tài sản kỹ thuật số độc nhất trên blockchain, đại diện cho quyền sở hữu một vật phẩm cụ thể (như một tác phẩm nghệ thuật, một món đồ trong game, hoặc một mảnh đất ảo). Tính "không thể thay thế" (non-fungible) có nghĩa là mỗi NFT là duy nhất và không thể bị sao chép.',
        },
        {
          question: 'Tại sao mọi người lại mua bất động sản ảo?',
          answer:
            'Mọi người mua đất ảo vì nhiều lý do: để xây dựng trải nghiệm (cửa hàng, phòng trưng bày, game), để quảng cáo, hoặc để đầu cơ với hy vọng giá trị của nó sẽ tăng lên. Vị trí của mảnh đất trong các thế giới ảo phổ biến có thể rất có giá trị.',
        },
        {
          question: 'Tokenomics là gì?',
          answer:
            'Tokenomics là từ ghép của "token" và "economics", chỉ việc nghiên cứu và thiết kế hệ thống kinh tế của một dự án blockchain. Nó bao gồm các quy tắc về cách token được tạo ra, phân phối, và sử dụng, nhằm tạo ra động lực cho người tham gia và đảm bảo sự bền vững của hệ thống.',
        },
        {
          question: 'Decentraland và The Sandbox là gì?',
          answer:
            'Đây là hai trong số các nền tảng Metaverse phi tập trung lớn nhất. Người dùng có thể mua đất (dưới dạng NFT), xây dựng các trải nghiệm trên đó, và tham gia vào một nền kinh tế do người dùng điều hành, sử dụng tiền điện tử riêng của nền tảng (MANA cho Decentraland, SAND cho The Sandbox).',
        },
        {
          question: 'Làm thế nào để các thương hiệu kiếm tiền trong Metaverse?',
          answer:
            'Các thương hiệu có thể bán các vật phẩm ảo (quần áo, phụ kiện cho avatar), tổ chức các sự kiện độc quyền có bán vé, tạo ra các trải nghiệm được tài trợ, hoặc bán các phiên bản NFT của sản phẩm thật.',
        },
        {
          question: 'Quyền sở hữu kỹ thuật số thực sự có nghĩa là gì?',
          answer:
            'Nhờ có blockchain, quyền sở hữu kỹ thuật số có nghĩa là bạn thực sự sở hữu vật phẩm ảo của mình, giống như bạn sở hữu một vật phẩm vật lý. Bạn có thể tự do bán, trao đổi hoặc chuyển nhượng nó mà không cần sự cho phép của nhà phát triển nền tảng.',
        },
        {
          question: 'OpenSea là gì?',
          answer:
            'OpenSea là một trong những sàn giao dịch NFT lớn nhất thế giới. Nó giống như một eBay cho các tài sản kỹ thuật số, nơi mọi người có thể mua, bán và khám phá hàng triệu NFT khác nhau, từ nghệ thuật đến các vật phẩm trong game.',
        },
        {
          question: 'Kinh tế ảo (Virtual Economy) có bền vững không?',
          answer:
            'Sự bền vững của một nền kinh tế ảo phụ thuộc vào thiết kế tokenomics của nó và giá trị thực tế mà nó mang lại cho người dùng. Một nền kinh tế bền vững cần có cả người tạo ra giá trị (người xây dựng, người sáng tạo) và người tiêu thụ giá trị (người chơi, người tham dự sự kiện).',
        },
        {
          question: 'Tôi có thể có một "công việc" trong Metaverse không?',
          answer:
            'Có. Ngày càng có nhiều công việc xuất hiện trong Metaverse, chẳng hạn như kiến trúc sư thế giới ảo, nhà thiết kế thời trang cho avatar, quản lý sự kiện ảo, hướng dẫn viên du lịch ảo, và thậm chí là người chơi game chuyên nghiệp trong các game "play-to-earn".',
        },
        {
          question: 'Đầu tư vào tài sản ảo có rủi ro không?',
          answer:
            'Có, rủi ro rất cao. Giống như bất kỳ thị trường mới nổi nào, giá trị của tài sản ảo có thể biến động rất mạnh. Bạn chỉ nên đầu tư số tiền mà bạn sẵn sàng mất và cần nghiên cứu kỹ lưỡng trước khi đưa ra bất kỳ quyết định nào.',
        },
      ],
      realWorldApplications: [],
    },
  ],
};
