import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export interface TeenWellnessLessonData extends BaseLessonData {
  ageGroup: string;
  urgencyLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  professionalSupport: boolean;
  mentalHealthAreas: string[];
  wellnessTechniques: string[];
  supportResources: string[];
}

export const teenWellnessLessons: TeenWellnessLessonData[] = [
  {
    id: 'understanding-stress-anxiety',
    title: 'Hiểu về Căng thẳng & Quản lý Lo âu',
    description:
      'Hiểu rõ về căng thẳng (stress) và lo âu (anxiety) ở tuổi teen, nhận biết các dấu hiệu và học các kỹ thuật quản lý hiệu quả để duy trì sức khỏe tinh thần tích cực.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    ageGroup: '13-18 tuổi',
    urgencyLevel: 'High',
    professionalSupport: false,
    mentalHealthAreas: ['Căng thẳng', 'Lo âu', 'Áp lực học tập'],
    wellnessTechniques: ['Thở hộp (Box Breathing)', 'Thư giãn cơ tiến triển (PMR)', 'Viết nhật ký cảm xúc'],
    supportResources: ['Tư vấn viên học đường', 'Tổng đài quốc gia bảo vệ trẻ em 111', 'Các ứng dụng thiền định'],
    videoUrl: 'https://www.youtube.com/watch?v=GQSfW4xrKSk',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Nhận biết các dấu hiệu và triệu chứng của căng thẳng và lo âu.',
      'Hiểu rõ tác động của căng thẳng lên cơ thể và tâm lý của tuổi teen.',
      'Học các kỹ thuật thở sâu và thư giãn cơ bắp để giảm căng thẳng.',
      'Phát triển cách tư duy tích cực và tái cấu trúc những suy nghĩ tiêu cực.',
    ],
    prerequisites: [
      'Sự cởi mở và sẵn sàng chia sẻ về cảm xúc.',
      'Cam kết thực hành các bài tập chăm sóc sức khỏe tinh thần.',
    ],
    exercises: [
      {
        title: 'Nhật ký Căng thẳng & Nhận diện Khuôn mẫu',
        description:
          'Theo dõi và phân tích các khuôn mẫu căng thẳng của bản thân để hiểu rõ các tác nhân và phản ứng của bạn.',
        difficulty: 'Cơ bản',
        procedure: [
          'Mỗi ngày, ghi lại mức độ căng thẳng (thang điểm 1-10) và các tác nhân cụ thể.',
          'Ghi chú các triệu chứng thể chất (đau đầu, căng cơ, khó ngủ).',
          'Theo dõi các phản ứng cảm xúc và các chiến lược đối phó đã sử dụng.',
          'Cuối tuần, xem lại để xác định các khuôn mẫu (thời gian trong ngày, tình huống cụ thể, những người liên quan).',
        ],
        expectedResults: 'Hiểu rõ hơn về các khuôn mẫu căng thẳng cá nhân và các chiến lược đối phó hiệu quả.',
      },
      {
        title: 'Xây dựng "Hộp dụng cụ" Đối phó với Lo âu',
        description: 'Tạo ra một bộ công cụ toàn diện để quản lý các cơn lo âu và sự lo lắng hàng ngày.',
        difficulty: 'Trung bình',
        procedure: [
          'Học và thực hành kỹ thuật thở 4-7-8 hàng ngày.',
          'Tạo một "bộ dụng cụ tiếp đất" (grounding kit): 5 thứ bạn có thể thấy, 4 thứ có thể chạm, 3 thứ có thể nghe, 2 thứ có thể ngửi, 1 thứ có thể nếm.',
          'Viết ra những câu khẳng định tích cực và ghi âm lại bằng giọng của chính bạn.',
          'Tạo một danh sách nhạc êm dịu.',
        ],
        expectedResults: 'Một bộ công cụ quản lý lo âu sẵn sàng sử dụng, hiệu quả trong các tình huống thực tế.',
      },
    ],
    realWorldApplications: [
      'Cải thiện kết quả học tập nhờ quản lý căng thẳng tốt hơn.',
      'Các mối quan hệ lành mạnh hơn với gia đình và bạn bè.',
      'Chuẩn bị tốt hơn cho những thách thức ở đại học và trong sự nghiệp.',
    ],
    vietnamContext: {
      title: 'Áp lực học tập và Kỳ vọng gia đình tại Việt Nam',
      content: [
        'Áp lực từ các kỳ thi quan trọng (tuyển sinh lớp 10, thi tốt nghiệp THPT) là một trong những nguồn gây căng thẳng lớn nhất cho học sinh Việt Nam.',
        'Kỳ vọng cao từ gia đình và xã hội về thành tích học tập có thể tạo ra sự lo âu và sợ hãi thất bại.',
        'Việc cởi mở nói về sức khỏe tinh thần vẫn còn là điều mới mẻ, nhiều bạn trẻ ngại chia sẻ vì sợ bị đánh giá là "yếu đuối".',
      ],
    },
    careerConnect: {
      name: 'Đặng Hoàng Giang',
      title: 'Tác giả & Nhà hoạt động xã hội',
      company: 'Tác giả sách "Bức xúc không làm ta vô can"',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-hoang-giang',
      quote:
        'Lắng nghe cảm xúc của chính mình là bước đầu tiên để chữa lành. Việc tìm kiếm sự giúp đỡ không phải là dấu hiệu của sự yếu đuối, mà là của sức mạnh và sự tự trân trọng.',
    },
    quizzes: [
      {
        question: 'Khi cảm thấy lo lắng, kỹ thuật "tiếp đất" (grounding) nhằm mục đích gì?',
        options: [
          'Làm bạn phân tâm khỏi vấn đề',
          'Đưa sự chú ý của bạn trở lại với hiện tại thông qua các giác quan',
          'Giải quyết ngay lập tức nguyên nhân gây lo lắng',
          'Lên kế hoạch cho tương lai',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Kỹ thuật tiếp đất giúp bạn thoát khỏi những suy nghĩ tiêu cực hoặc lo lắng về quá khứ/tương lai bằng cách tập trung vào môi trường xung quanh bạn ngay tại thời điểm hiện tại, thông qua 5 giác quan.',
      },
    ],
    faqs: [
      {
        question: 'Căng thẳng (stress) có phải lúc nào cũng xấu không?',
        answer:
          'Không hẳn. Một mức độ căng thẳng vừa phải (gọi là "eustress") có thể tạo động lực giúp bạn tập trung và hoàn thành công việc, ví dụ như căng thẳng trước một trận đấu thể thao. Tuy nhiên, căng thẳng kéo dài và quá mức (distress) sẽ gây hại cho cả thể chất và tinh thần.',
      },
      {
        question: 'Khi nào em nên tìm kiếm sự giúp đỡ chuyên nghiệp?',
        answer:
          'Nếu bạn cảm thấy căng thẳng và lo âu ảnh hưởng nghiêm trọng đến cuộc sống hàng ngày (học tập, giấc ngủ, ăn uống, các mối quan hệ) trong một thời gian dài (vài tuần trở lên), và các kỹ thuật tự quản lý không còn hiệu quả, đó là lúc bạn nên nói chuyện với tư vấn viên học đường, cha mẹ hoặc một chuyên gia tâm lý.',
      },
      {
        question: 'Sự khác biệt giữa căng thẳng và lo âu là gì?',
        answer:
          'Căng thẳng thường là phản ứng với một tác nhân bên ngoài có thể xác định được (ví dụ: một bài kiểm tra sắp tới). Lo âu là sự lo lắng, sợ hãi kéo dài, có thể không có nguyên nhân rõ ràng. Lo âu có thể tồn tại ngay cả khi tác nhân gây căng thẳng đã biến mất.',
      },
      {
        question: 'Thở hộp (Box Breathing) thực hiện như thế nào?',
        answer:
          'Rất đơn giản: 1. Hít vào từ từ bằng mũi trong 4 giây. 2. Giữ hơi thở trong 4 giây. 3. Thở ra từ từ bằng miệng trong 4 giây. 4. Giữ phổi trống trong 4 giây. Lặp lại chu kỳ này vài lần. Nó giúp điều hòa hệ thần kinh và làm dịu tâm trí.',
      },
      {
        question: 'Tại sao viết nhật ký lại giúp giảm căng thẳng?',
        answer:
          'Viết nhật ký giúp bạn "trút bỏ" những suy nghĩ và cảm xúc tiêu cực ra khỏi đầu, tạo ra một khoảng cách để bạn có thể nhìn nhận chúng một cách khách quan hơn. Nó cũng giúp bạn xác định các tác nhân gây căng thẳng và tìm ra các giải pháp.',
      },
      {
        question: 'Làm thế nào để tái cấu trúc một suy nghĩ tiêu cực?',
        answer:
          'Đầu tiên, nhận diện suy nghĩ đó (ví dụ: "Mình sẽ thi trượt"). Tiếp theo, thách thức nó bằng cách tìm bằng chứng chống lại nó (ví dụ: "Mình đã ôn bài rất kỹ"). Cuối cùng, thay thế nó bằng một suy nghĩ thực tế và cân bằng hơn (ví dụ: "Bài thi sẽ khó, nhưng mình đã chuẩn bị tốt và sẽ cố gắng hết sức").',
      },
      {
        question: 'Giấc ngủ ảnh hưởng đến căng thẳng như thế nào?',
        answer:
          'Giấc ngủ và căng thẳng có mối quan hệ hai chiều. Thiếu ngủ làm tăng hormone căng thẳng (cortisol) và khiến bạn khó đối phó với các thách thức. Ngược lại, căng thẳng cao độ có thể gây khó ngủ. Vì vậy, ưu tiên ngủ đủ giấc (8-10 tiếng mỗi đêm cho tuổi teen) là một trong những cách tốt nhất để quản lý căng thẳng.',
      },
      {
        question: 'Tập thể dục có thực sự giúp giảm lo âu không?',
        answer:
          'Chắc chắn có. Hoạt động thể chất giúp giải phóng endorphins, là chất hóa học trong não có tác dụng như thuốc giảm đau tự nhiên và cải thiện tâm trạng. Nó cũng giúp giảm mức độ hormone căng thẳng và cải thiện chất lượng giấc ngủ.',
      },
      {
        question: 'Em có nên tránh hoàn toàn những tình huống gây căng thẳng không?',
        answer:
          'Không. Việc tránh né có thể làm tăng sự lo âu trong dài hạn. Thay vào đó, hãy học cách đối mặt với các tình huống đó một cách dần dần và trang bị cho mình những kỹ năng đối phó. Việc vượt qua những thử thách nhỏ sẽ giúp bạn xây dựng sự tự tin.',
      },
      {
        question: 'Nói chuyện với bạn bè về căng thẳng có ích lợi gì?',
        answer:
          'Chia sẻ với một người bạn đáng tin cậy có thể giúp bạn cảm thấy được thấu hiểu và không đơn độc. Bạn bè có thể đưa ra một góc nhìn khác, chia sẻ kinh nghiệm của họ, hoặc đơn giản là lắng nghe. Điều này giúp bình thường hóa trải nghiệm của bạn và giảm bớt gánh nặng tâm lý.',
      },
    ],
  },
  {
    id: 'digital-wellness-social-media',
    title: 'Sức khỏe Kỹ thuật số & Mạng xã hội',
    description:
      'Học cách xây dựng một mối quan hệ lành mạnh với công nghệ, điều hướng mạng xã hội một cách tích cực và bảo vệ sức khỏe tinh thần của bạn trong thế giới số.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    ageGroup: '13-18 tuổi',
    urgencyLevel: 'Medium',
    professionalSupport: false,
    mentalHealthAreas: ['Nghiện mạng xã hội', 'Bắt nạt trực tuyến', 'So sánh xã hội'],
    wellnessTechniques: ['Digital Detox', 'Chánh niệm khi dùng mạng xã hội', 'Xây dựng ranh giới số'],
    supportResources: [
      'Công cụ quản lý thời gian sử dụng màn hình',
      'Các nhóm hỗ trợ từ bạn bè',
      'Báo cáo các hành vi lạm dụng trên nền tảng',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=v_wgImR_gGo',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu tác động của mạng xã hội đến sức khỏe tinh thần.',
      'Nhận diện các dấu hiệu của việc "nghiện" mạng xã hội.',
      'Học các chiến lược để "giải độc kỹ thuật số" (digital detox).',
      'Xây dựng một hồ sơ trực tuyến tích cực và an toàn.',
      'Đối phó với áp lực so sánh và bắt nạt trực tuyến (cyberbullying).',
    ],
    prerequisites: ['Có sử dụng ít nhất một nền tảng mạng xã hội.'],
    exercises: [
      {
        title: 'Thử thách "Digital Detox" 24 giờ',
        description: 'Thử thách bản thân không sử dụng mạng xã hội trong 24 giờ và ghi lại những trải nghiệm.',
        difficulty: 'Trung bình',
        procedure: [
          'Thông báo cho bạn bè về thử thách của bạn.',
          'Xóa các ứng dụng mạng xã hội khỏi điện thoại (bạn có thể cài lại sau).',
          'Lên kế hoạch cho các hoạt động thay thế (đọc sách, đi dạo, gặp gỡ bạn bè trực tiếp).',
          'Ghi lại cảm xúc, suy nghĩ và những khó khăn bạn gặp phải trong suốt 24 giờ.',
          'Sau khi kết thúc, viết một bài phản ánh về những gì bạn đã học được.',
        ],
        expectedResults: 'Nhận thức rõ hơn về mức độ ảnh hưởng của mạng xã hội đến cuộc sống và cảm xúc của bạn.',
      },
    ],
    realWorldApplications: [
      'Duy trì sự tập trung tốt hơn trong học tập.',
      'Cải thiện chất lượng giấc ngủ.',
      'Xây dựng các mối quan hệ ngoài đời thực sâu sắc hơn.',
      'Giảm cảm giác ghen tị và tự ti.',
    ],
    vietnamContext: {
      title: 'Văn hóa "Sống ảo" và Cyberbullying tại Việt Nam',
      content: [
        'Áp lực phải thể hiện một cuộc sống hoàn hảo trên mạng xã hội ("sống ảo") rất phổ biến trong giới trẻ Việt Nam.',
        'Các vụ bắt nạt trực tuyến (cyberbullying) với những lời lẽ miệt thị, công kích cá nhân có thể gây ra những tổn thương tâm lý nghiêm trọng.',
        'Việc lan truyền tin giả (fake news) và các "drama" trên mạng xã hội diễn ra rất nhanh, đòi hỏi người dùng phải có tư duy phản biện để chọn lọc thông tin.',
      ],
    },
    careerConnect: {
      name: 'Helly Tống (Tống Khánh Linh)',
      title: 'Doanh nhân & Người có ảnh hưởng',
      company: 'The Yên Concept',
      imageUrl: 'https://i.pravatar.cc/150?u=helly-tong',
      quote:
        'Mạng xã hội là một công cụ, không phải là cuộc sống của bạn. Hãy sử dụng nó một cách có chủ đích để chia sẻ giá trị và kết nối, đừng để nó điều khiển cảm xúc và giá trị của bạn.',
    },
    quizzes: [
      {
        question: 'Hành động nào sau đây là một chiến lược tốt để có một mối quan hệ lành mạnh với mạng xã hội?',
        options: [
          'Theo dõi tất cả mọi người để không bỏ lỡ thông tin',
          'Để thông báo (notification) cho tất cả các ứng dụng',
          'Chủ động bỏ theo dõi (unfollow) các tài khoản khiến bạn cảm thấy tiêu cực',
          'Kiểm tra điện thoại ngay khi thức dậy',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Việc tùy chỉnh newfeed của bạn bằng cách bỏ theo dõi những tài khoản không mang lại giá trị tích cực là một cách hiệu quả để kiểm soát nội dung bạn tiếp xúc và bảo vệ sức khỏe tinh thần của bạn.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để nhận biết mình đang "nghiện" mạng xã hội?',
        answer:
          'Một số dấu hiệu bao gồm: cảm thấy bồn chồn, lo lắng khi không thể truy cập mạng xã hội; dành nhiều thời gian hơn dự định trên các nền tảng; việc sử dụng mạng xã hội ảnh hưởng tiêu cực đến giấc ngủ, học tập hoặc các mối quan hệ thực tế; và liên tục so sánh bản thân với người khác trên mạng.',
      },
      {
        question: 'Em nên làm gì khi bị bắt nạt trực tuyến (cyberbullying)?',
        answer:
          'Đừng trả lời. Hãy chụp màn hình lại để làm bằng chứng. Chặn (block) người đó và báo cáo (report) hành vi với nền tảng. Quan trọng nhất, hãy nói chuyện với một người lớn mà bạn tin tưởng, như cha mẹ, thầy cô hoặc tư vấn viên học đường. Bạn không phải đối mặt với điều này một mình.',
      },
      {
        question: 'Hội chứng FOMO (Fear Of Missing Out) là gì?',
        answer:
          'Là cảm giác lo sợ rằng mình sẽ bỏ lỡ những trải nghiệm thú vị mà người khác đang có, thường được thúc đẩy bởi những gì bạn thấy trên mạng xã hội. Để đối phó, hãy nhớ rằng mọi người thường chỉ đăng những khoảnh khắc đẹp nhất của họ, và tập trung vào việc tận hưởng những gì bạn đang có trong hiện tại.',
      },
      {
        question: 'Tại sao so sánh bản thân với người khác trên mạng lại nguy hiểm?',
        answer:
          'Vì bạn đang so sánh "cảnh hậu trường" đầy đủ thăng trầm của mình với "thước phim nổi bật" được biên tập cẩn thận của người khác. Điều này có thể dẫn đến cảm giác tự ti, ghen tị và không hài lòng với cuộc sống của chính mình, dù sự so sánh đó là không thực tế.',
      },
      {
        question: '"Digital Detox" có nghĩa là gì và làm thế nào để thực hiện?',
        answer:
          'Là một khoảng thời gian bạn chủ động ngưng sử dụng các thiết bị kỹ thuật số, đặc biệt là mạng xã hội. Bạn có thể bắt đầu nhỏ, ví dụ như không dùng điện thoại trong 1 giờ trước khi ngủ, hoặc thử thách lớn hơn như không dùng mạng xã hội vào cuối tuần. Mục đích là để kết nối lại với thế giới thực và giảm sự phụ thuộc vào công nghệ.',
      },
      {
        question: 'Làm thế nào để xây dựng một "dấu chân kỹ thuật số" (digital footprint) tích cực?',
        answer:
          'Hãy suy nghĩ trước khi đăng: liệu nội dung này có thể hiện con người bạn một cách tích cực không? Chia sẻ những thành tựu, sở thích lành mạnh, và tham gia vào các cuộc thảo luận một cách tôn trọng. Hãy nhớ rằng những gì bạn đăng lên mạng có thể tồn tại rất lâu và ảnh hưởng đến cơ hội học tập, việc làm trong tương lai.',
      },
      {
        question: 'Chánh niệm khi dùng mạng xã hội (Mindful Scrolling) là gì?',
        answer:
          'Là việc sử dụng mạng xã hội một cách có ý thức. Trước khi mở ứng dụng, hãy tự hỏi: "Mình vào đây để làm gì?". Trong khi lướt, hãy chú ý đến cảm xúc của bạn: "Nội dung này khiến mình cảm thấy thế nào?". Điều này giúp bạn chuyển từ việc lướt vô thức sang sử dụng có chủ đích.',
      },
      {
        question: 'Làm thế nào để bảo vệ thông tin cá nhân trên mạng xã hội?',
        answer:
          'Hãy sử dụng cài đặt riêng tư (privacy settings) để kiểm soát ai có thể xem bài đăng của bạn. Đừng chia sẻ thông tin nhạy cảm như địa chỉ nhà, số điện thoại. Cẩn thận với các liên kết lạ và sử dụng mật khẩu mạnh, khác nhau cho các tài khoản.',
      },
      {
        question: 'Ánh sáng xanh từ màn hình ảnh hưởng đến giấc ngủ như thế nào?',
        answer:
          'Ánh sáng xanh từ điện thoại, máy tính bảng có thể ức chế việc sản xuất melatonin, hormone giúp bạn buồn ngủ. Sử dụng các thiết bị này trước khi đi ngủ có thể khiến bạn khó ngủ hơn và làm giảm chất lượng giấc ngủ. Hãy cố gắng ngưng sử dụng màn hình ít nhất 1 giờ trước khi ngủ.',
      },
      {
        question: 'Làm sao để cân bằng giữa cuộc sống thực và cuộc sống trên mạng?',
        answer:
          'Hãy đặt ra những ranh giới rõ ràng. Ví dụ: không dùng điện thoại trong bữa ăn, dành thời gian chất lượng cho gia đình và bạn bè mà không bị phân tâm bởi thông báo. Ưu tiên các hoạt động và mối quan hệ ngoài đời thực, và xem mạng xã hội chỉ là một công cụ bổ trợ, không phải là trung tâm của cuộc sống.',
      },
    ],
  },
];

export const teenWellnessModuleData: ModuleData = {
  id: 'teen-wellness',
  title: 'Teen Wellness & Mental Health',
  subtitle: 'Sức khỏe tinh thần tuổi teen',
  description:
    'Chương trình toàn diện về sức khỏe tinh thần cho teenagers. Học cách quản lý stress, anxiety, xây dựng mối quan hệ tích cực và phát triển emotional intelligence.',
  category: 'trending',
  icon: '🧘',
  color: 'from-green-600 to-teal-600',
  level: 'Cơ bản',
  duration: '12-15 giờ',
  features: [
    'Stress & Anxiety Management',
    'Mindfulness & Meditation',
    'Digital Wellness',
    'Healthy Relationships',
    'Crisis Support',
  ],
  prerequisites: ['Sự cởi mở về cảm xúc', 'Cam kết thực hành hàng ngày', 'Hỗ trợ từ người lớn', 'Môi trường an toàn'],
  objectives: [
    'Hiểu rõ các nguyên nhân gây stress và lo âu ở tuổi teen.',
    'Thực hành các kỹ thuật mindfulness và thiền định để giảm căng thẳng.',
    'Xây dựng thói quen sử dụng thiết bị số lành mạnh.',
    'Phát triển kỹ năng giao tiếp và xây dựng mối quan hệ tích cực.',
    'Nhận biết các dấu hiệu khủng hoảng và biết cách tìm kiếm sự giúp đỡ.',
  ],
  careerOutcomes: [
    'Kỹ năng tự chăm sóc bản thân và quản lý cảm xúc tốt hơn.',
    'Nền tảng vững chắc cho sức khỏe tinh thần lâu dài.',
    'Cải thiện khả năng tập trung và hiệu suất học tập.',
    'Kỹ năng giao tiếp và xã hội được nâng cao.',
  ],
  industryApplications: [
    { name: 'Giáo dục', description: 'Tích hợp vào chương trình giáo dục kỹ năng sống tại trường học.' },
    { name: 'Y tế', description: 'Công cụ hỗ trợ cho các chuyên gia tâm lý học đường.' },
    { name: 'Gia đình', description: 'Tài liệu tham khảo cho phụ huynh để đồng hành cùng con.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (kỹ năng sống)',
    hireDemand: 'Rất cao (kỹ năng sống)',
  },
  relatedModules: [
    K2Module.ProfessionalSkills,
    K2Module.DigitalCitizenshipOnlineSafety,
    K2Module.EmotionalIntelligence,
  ],
};
