import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { MinecraftEduLesson } from '@/types/lesson-base';

export const minecraftEduModule: ModuleData<MinecraftEduLesson> = {
  id: 'minecraft-edu',
  title: 'Học tập Sáng tạo với Minecraft Education',
  subtitle: 'Xây dựng, Lập trình và Khám phá trong thế giới khối vuông',
  description:
    'Minecraft Education không chỉ là một trò chơi, đó là một nền tảng học tập mạnh mẽ. Khóa học này sẽ hướng dẫn bạn cách tận dụng các công cụ độc đáo của Minecraft Education để học về lập trình, hóa học, giải quyết vấn đề và cộng tác. Hãy sẵn sàng để xây dựng kiến thức của bạn, từng khối một.',
  level: 'Cơ bản',
  duration: '6-8 giờ',
  category: 'Creative Technology',
  features: [
    'Làm quen với các tính năng giáo dục độc quyền.',
    'Lập trình kéo-thả với Code Builder.',
    'Thực hiện các thí nghiệm hóa học an toàn, vui nhộn.',
    'Tham gia vào các bài học được thiết kế sẵn về nhiều chủ đề.',
  ],
  icon: '🧱',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1605810232354-9524159a166b?w=1200&h=600&fit=crop',
  objectives: [
    'Sử dụng thành thạo các công cụ và tính năng của Minecraft Education.',
    'Viết các chương trình cơ bản bằng Code Builder để tự động hóa các tác vụ.',
    'Áp dụng các khái niệm hóa học để tạo ra các hợp chất và vật phẩm mới.',
    'Phát triển kỹ năng cộng tác và giải quyết vấn đề trong môi trường 3D.',
  ],
  prerequisites: [
    'Tài khoản Microsoft 365 Education.',
    'Minecraft Education đã được cài đặt trên máy tính.',
    'Không yêu cầu kinh nghiệm chơi Minecraft trước đó.',
  ],
  careerOutcomes: [
    'Nhà giáo dục sáng tạo',
    'Người phát triển nội dung giáo dục số',
    'Kỹ năng STEM nền tảng cho các ngành nghề tương lai',
    'Người hướng dẫn các hoạt động ngoại khóa về công nghệ',
  ],
  industryApplications: [
    { name: 'Giáo dục K-12', description: 'Ứng dụng trong giảng dạy các môn học chính khóa.' },
    { name: 'Phát triển chương trình giảng dạy STEM/STEAM', description: 'Tạo ra các bài học và dự án liên môn.' },
    {
      name: 'Các trại hè công nghệ và workshop sáng tạo',
      description: 'Sử dụng làm nền tảng cho các hoạt động ngoại khóa.',
    },
    { name: 'Đào tạo và phát triển kỹ năng mềm', description: 'Rèn luyện kỹ năng làm việc nhóm, giải quyết vấn đề.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (trong lĩnh vực EdTech)',
    hireDemand: 'Cao (cho các nhà giáo dục đổi mới)',
  },
  relatedModules: [K2Module.RobloxGameDev, K2Module.Scratch, K2Module.Arduino],
  lessons: [
    {
      id: 'intro-to-minecraft-edu',
      title: 'Khám phá Minecraft Education',
      description:
        'Làm quen với phiên bản Minecraft Education, khám phá các tính năng độc đáo dành cho giáo dục và học cách điều khiển nhân vật, chế tạo và xây dựng trong thế giới khối vuông.',
      duration: '90 phút',
      difficulty: 'Cơ bản',
      videoUrl: 'https://www.youtube.com/watch?v=JqZfTqJ4OsI',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      objectives: [
        'Phân biệt giữa Minecraft phiên bản thường và Minecraft Education.',
        'Nắm vững các kỹ năng di chuyển, phá block, và đặt block.',
        'Sử dụng bàn chế tạo (Crafting Table) để tạo ra các công cụ cơ bản.',
        'Hiểu về các vật phẩm và tính năng chỉ có trong bản Education như Camera, Portfolio, và NPC.',
      ],
      prerequisites: [
        'Tài khoản Microsoft 365 Education.',
        'Minecraft Education đã được cài đặt.',
        'Sự tò mò và yêu thích khám phá.',
      ],
      realWorldApplications: [
        'Phát triển kỹ năng giải quyết vấn đề và tư duy không gian.',
        'Học cách quản lý tài nguyên và lập kế hoạch.',
        'Nền tảng cho các dự án sáng tạo và kỹ thuật phức tạp hơn.',
      ],
      skills: ['navigation', 'crafting', 'inventory-management'],
      faqs: [
        {
          question: 'Minecraft Education có miễn phí không?',
          answer:
            'Minecraft Education yêu cầu một tài khoản Microsoft 365 Education, thường được cung cấp miễn phí bởi các trường học. Nếu trường của bạn có đăng ký, bạn có thể tải và chơi miễn phí. Nếu không, bạn cần mua giấy phép riêng.',
        },
        {
          question: 'Sự khác biệt chính giữa Minecraft thường và Minecraft Education là gì?',
          answer:
            'Minecraft Education có tất cả các tính năng của phiên bản Bedrock (bản thường), nhưng được bổ sung các công cụ dành riêng cho giáo dục như Code Builder (lập trình), Chemistry Update (hóa học), và các vật phẩm như Camera, Portfolio để ghi lại quá trình học tập.',
        },
        {
          question: 'Con tôi chưa từng chơi Minecraft, có thể học khóa này không?',
          answer:
            'Hoàn toàn có thể! Khóa học được thiết kế cho người mới bắt đầu, với bài học đầu tiên tập trung vào việc làm quen với cách điều khiển và các khái niệm cơ bản trong game.',
        },
        {
          question: 'Học lập trình trong Minecraft có khó không?',
          answer:
            'Không hề khó. Minecraft Education sử dụng giao diện lập trình kéo-thả (giống như Scratch), rất trực quan và dễ hiểu. Đây là một cách tuyệt vời để trẻ em làm quen với tư duy lập trình mà không cần phải viết những dòng code phức tạp.',
        },
        {
          question: 'NPC trong Minecraft Education là gì?',
          answer:
            'NPC (Non-Player Character) là nhân vật do người chơi tạo ra nhưng không thể điều khiển. Bạn có thể tùy chỉnh NPC để đưa ra thông tin, hướng dẫn, hoặc thậm chí là một đường link đến một trang web, biến chúng thành những người hướng dẫn ảo trong bài học của bạn.',
        },
        {
          question: 'Làm thế nào để chụp ảnh và ghi lại tiến trình học tập?',
          answer:
            'Bạn có thể sử dụng vật phẩm Camera để chụp ảnh những gì bạn đã xây dựng hoặc khám phá. Những bức ảnh này sẽ được lưu vào Portfolio, nơi bạn có thể thêm chú thích và xuất ra thành một file PDF để chia sẻ với giáo viên.',
        },
        {
          question: 'Chế độ "Classroom Mode" là gì?',
          answer:
            'Classroom Mode là một ứng dụng đi kèm cho phép giáo viên quản lý thế giới học tập. Giáo viên có thể xem bản đồ tổng quan, dịch chuyển học sinh, trò chuyện, và thay đổi các cài đặt của thế giới trong thời gian thực.',
        },
        {
          question: 'Tôi có thể chơi cùng bạn bè trong Minecraft Education không?',
          answer:
            'Có, bạn có thể chơi cùng với những người bạn khác trong cùng một mạng của trường học (cùng một tenant Microsoft 365). Chơi cùng nhau là một cách tuyệt vời để thực hành kỹ năng cộng tác và làm việc nhóm.',
        },
        {
          question: 'Có những bài học được thiết kế sẵn nào trong Minecraft Education không?',
          answer:
            'Có một thư viện khổng lồ với hàng trăm bài học được tạo bởi các nhà giáo dục trên toàn thế giới, bao gồm các chủ đề từ toán học, khoa học, lịch sử cho đến nghệ thuật và lập trình.',
        },
        {
          question: 'Yêu cầu hệ thống để chạy Minecraft Education là gì?',
          answer:
            'Minecraft Education có thể chạy trên nhiều hệ điều hành bao gồm Windows, macOS, ChromeOS và iPadOS. Yêu cầu cấu hình không quá cao, hầu hết các máy tính hiện đại đều có thể chạy mượt mà.',
        },
      ],
      gameVersion: '1.18.32',
    },
    {
      id: 'code-builder-basics',
      title: 'Lập trình với Code Builder',
      description:
        'Học cách tự động hóa các tác vụ trong Minecraft bằng cách sử dụng Code Builder. Bắt đầu với lập trình khối (Block-based) để ra lệnh cho Agent của bạn xây dựng và thu thập tài nguyên.',
      duration: '150 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=KsVqBIWtRec',
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
      objectives: [
        'Mở và sử dụng giao diện Code Builder.',
        'Hiểu khái niệm về Agent và cách ra lệnh cho nó.',
        'Sử dụng các khối lệnh để điều khiển Agent di chuyển, đặt và phá block.',
        'Viết một chương trình đơn giản để Agent xây một bức tường hoặc một hình khối.',
      ],
      prerequisites: [
        'Hoàn thành bài học "Khám phá Minecraft Education".',
        'Tư duy logic và khả năng phân tích các bước công việc.',
      ],
      realWorldApplications: [
        'Giới thiệu về các khái niệm lập trình cơ bản như vòng lặp, điều kiện và sự kiện.',
        'Phát triển kỹ năng tự động hóa và tư duy thuật toán.',
        'Nền tảng để chuyển sang lập trình bằng văn bản (text-based) như JavaScript hoặc Python.',
      ],
      skills: ['block-based-programming', 'automation', 'algorithmic-thinking'],
      faqs: [
        {
          question: 'Agent trong Code Builder là gì?',
          answer:
            'Agent là một robot trợ lý mà bạn có thể lập trình để thực hiện các công việc thay cho bạn, như xây dựng, đào mỏ, hoặc trồng cây. Bạn ra lệnh cho Agent bằng cách viết code trong Code Builder.',
        },
        {
          question: 'Làm thế nào để gọi Agent ra?',
          answer:
            'Bạn cần mở giao diện chat và gõ lệnh. Ví dụ, trong MakeCode, bạn có thể tạo một khối lệnh "on chat command" với từ khóa "come" để Agent dịch chuyển đến vị trí của bạn.',
        },
        {
          question: 'Vòng lặp (loop) trong lập trình Minecraft là gì?',
          answer:
            'Vòng lặp là một khối lệnh cho phép bạn lặp lại một chuỗi hành động nhiều lần mà không cần phải viết lại code. Ví dụ, bạn có thể dùng vòng lặp để Agent xây một bức tường dài 10 block.',
        },
        {
          question: 'Làm thế nào để Agent xây dựng một ngôi nhà?',
          answer:
            'Bạn cần chia nhỏ công việc thành các bước: xây 4 bức tường, lợp mái, và tạo cửa. Mỗi bước này sẽ được chuyển thành các khối lệnh di chuyển và đặt block cho Agent. Đây là một bài tập tuyệt vời về tư duy thuật toán.',
        },
        {
          question: 'Tôi có thể lập trình bằng ngôn ngữ nào khác ngoài khối lệnh không?',
          answer:
            'Có. Code Builder hỗ trợ cả JavaScript và Python. Khi bạn đã quen với lập trình khối, bạn có thể chuyển sang chế độ xem JavaScript/Python để xem code tương ứng và bắt đầu học lập trình dựa trên văn bản.',
        },
        {
          question: 'Sự kiện (event) trong Code Builder là gì?',
          answer:
            'Sự kiện là một hành động xảy ra trong game và có thể kích hoạt một đoạn code. Ví dụ, bạn có thể viết một chương trình chạy khi "nhân vật đang đi bộ" (on player walk) hoặc khi "một loại block cụ thể bị phá vỡ".',
        },
        {
          question: 'Làm thế nào để gỡ lỗi (debug) chương trình của tôi?',
          answer:
            'Code Builder có các công cụ giúp bạn gỡ lỗi. Bạn có thể cho Agent "nói" ra các giá trị của biến để kiểm tra, hoặc chạy chương trình từng bước một để xem nó hoạt động như thế nào.',
        },
        {
          question: 'Tôi có thể chia sẻ code của mình cho người khác không?',
          answer:
            'Có, bạn có thể chia sẻ dự án Code Builder của mình bằng cách tạo một đường link. Người khác có thể mở link đó để xem và chỉnh sửa code của bạn.',
        },
        {
          question: 'Lập trình trong Minecraft có giúp tôi học lập trình thực tế không?',
          answer:
            'Chắc chắn có. Nó dạy bạn những khái niệm cốt lõi của khoa học máy tính như thuật toán, vòng lặp, biến, và điều kiện một cách trực quan và thú vị. Đây là bước đệm hoàn hảo để học các ngôn ngữ lập trình phức tạp hơn.',
        },
        {
          question: 'Sự khác biệt giữa MakeCode và Tynker trong Code Builder là gì?',
          answer:
            'Cả hai đều là các trình soạn thảo lập trình khối. MakeCode được phát triển bởi Microsoft và tích hợp sâu với JavaScript. Tynker là một nền tảng của bên thứ ba cũng cung cấp các bài học và lộ trình học tập riêng. Bạn có thể chọn bất kỳ cái nào bạn cảm thấy thoải mái hơn.',
        },
      ],
      gameVersion: '1.18.32',
    },
    {
      id: 'chemistry-in-minecraft',
      title: 'Thí nghiệm Hóa học Vui nhộn',
      description:
        'Khám phá các nguyên tố, hợp chất và các phản ứng hóa học thú vị bằng cách sử dụng các tính năng Hóa học độc quyền trong Minecraft Education.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=EFRbwG3x75g',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      objectives: [
        'Sử dụng Element Constructor để tạo ra các nguyên tố.',
        'Kết hợp các nguyên tố trong Compound Creator để tạo hợp chất.',
        'Thực hiện các thí nghiệm trên Lab Table.',
        'Tạo ra các vật phẩm độc đáo như bóng bay, que phát sáng (glow sticks) và bom băng.',
      ],
      prerequisites: [
        'Kiến thức cơ bản về Minecraft.',
        'Bật tùy chọn "Chemistry" trong cài đặt thế giới (World Settings).',
      ],
      realWorldApplications: [
        'Học về bảng tuần hoàn và các nguyên tố hóa học một cách trực quan.',
        'Hiểu về cấu tạo phân tử của các hợp chất quen thuộc.',
        'Khơi dậy niềm đam mê với môn Hóa học thông qua các thí nghiệm an toàn và vui nhộn.',
      ],
      skills: ['chemistry', 'experimentation', 'compound-creation'],
      faqs: [
        {
          question: 'Làm thế nào để bật tính năng Hóa học?',
          answer:
            'Khi tạo một thế giới mới hoặc chỉnh sửa một thế giới đã có, bạn cần vào phần "Cheats" và bật tùy chọn "Education Edition". Sau đó, thế giới của bạn sẽ có các công cụ hóa học.',
        },
        {
          question: 'Element Constructor dùng để làm gì?',
          answer:
            'Nó cho phép bạn tạo ra bất kỳ nguyên tố nào trong bảng tuần hoàn bằng cách điều chỉnh số lượng proton, neutron và electron. Đây là một cách tuyệt vời để học về cấu tạo nguyên tử.',
        },
        {
          question: 'Compound Creator khác gì với bàn chế tạo thường?',
          answer:
            'Compound Creator cho phép bạn kết hợp các nguyên tố theo tỷ lệ chính xác để tạo ra các hợp chất. Ví dụ, kết hợp 2 nguyên tử Hydro và 1 nguyên tử Oxy sẽ tạo ra Nước (H₂O).',
        },
        {
          question: 'Lab Table có thể làm gì?',
          answer:
            'Lab Table cho phép bạn kết hợp các nguyên tố và hợp chất để quan sát các phản ứng hóa học. Tuy nhiên, không phải tất cả các phản ứng đều có thể thực hiện, nó chủ yếu dùng để tạo ra các vật phẩm đặc biệt.',
        },
        {
          question: 'Làm thế nào để tạo ra bóng bay?',
          answer:
            'Bạn cần tạo ra hợp chất Latex (C₅H₈) trong Compound Creator. Sau đó, kết hợp Latex, khí Heli (He), một sợi dây và thuốc nhuộm màu bạn thích trên bàn chế tạo thường để tạo ra một quả bóng bay.',
        },
        {
          question: 'Material Reducer dùng để làm gì?',
          answer:
            'Nó có chức năng ngược lại với Compound Creator. Bạn có thể đặt một block bất kỳ (ví dụ: đất, đá) vào Material Reducer để xem nó được cấu tạo từ những nguyên tố nào và với tỷ lệ bao nhiêu.',
        },
        {
          question: 'Tôi có thể tạo ra một vụ nổ hóa học không?',
          answer:
            'Có, một trong những thí nghiệm thú vị là tạo ra "bom băng". Bằng cách kết hợp Natri axetat (một hợp chất bạn có thể tạo ra) trong Lab Table, bạn có thể tạo ra một khối băng có khả năng gây ra một phản ứng đóng băng lan tỏa khi vỡ.',
        },
        {
          question: 'Học hóa trong Minecraft có an toàn không?',
          answer:
            'Hoàn toàn an toàn! Đây chính là ưu điểm lớn nhất. Bạn có thể thử nghiệm với các chất "nguy hiểm" như Natri mà không có bất kỳ rủi ro nào, giúp bạn hiểu về tính chất của chúng một cách trực quan.',
        },
        {
          question: 'Tính năng hóa học có giúp tôi học tốt môn Hóa ở trường không?',
          answer:
            'Có, nó giúp bạn hình dung và ghi nhớ các khái niệm trừu tượng như cấu tạo nguyên tử và công thức phân tử một cách dễ dàng hơn. Nó biến việc học hóa học thành một trò chơi khám phá.',
        },
        {
          question: 'Ngoài bóng bay và bom băng, còn có thể tạo ra gì khác?',
          answer:
            'Bạn có thể tạo ra que phát sáng (glow sticks) bằng cách kết hợp các hợp chất polyetylen và luminol, hoặc tạo ra pháo sáng dưới nước, và thậm chí là thuốc tẩy để làm trắng các khối len màu.',
        },
      ],
      gameVersion: '1.18.32',
    },
  ],
};
