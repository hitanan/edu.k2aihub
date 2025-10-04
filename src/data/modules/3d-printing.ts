import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const threeDPrintingModuleData: ModuleData = {
  id: K2Module.ThreeDPrinting,
  title: 'Làm chủ Công nghệ In 3D',
  subtitle: 'Từ Ý tưởng Số đến Vật thể Thực',
  description:
    'Khóa học này là cánh cửa đưa bạn vào thế giới sản xuất kỹ thuật số. Bạn sẽ được học toàn bộ quy trình in 3D: từ việc lên ý tưởng, thiết kế mô hình 3D bằng phần mềm chuyên dụng, chuẩn bị file in, vận hành máy in 3D FDM, cho đến các kỹ thuật xử lý hậu kỳ để tạo ra sản phẩm hoàn thiện. Đây là kỹ năng quan trọng trong kỷ nguyên Công nghiệp 4.0.',
  category: 'stem',
  icon: '🖨️',
  color: 'from-orange-500 to-amber-500',
  totalDuration: '20-25 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '20-25 giờ',
  href: '/learning/3d-printing',
  features: [
    'Tiếp cận công nghệ sản xuất tiên tiến.',
    'Thực hành với phần mềm thiết kế 3D miễn phí.',
    'Hiểu sâu về cấu tạo và vận hành máy in 3D.',
    'Tạo ra các sản phẩm độc đáo của riêng bạn.',
  ],
  tags: ['3d printing', 'stem', 'design', 'manufacturing', 'prototyping'],
  prerequisites: [
    'Tư duy không gian và hình học cơ bản.',
    'Kỹ năng sử dụng máy tính thành thạo.',
    'Sự kiên nhẫn và tỉ mỉ.',
  ],
};

export const threeDPrintingLessons: BaseLessonData[] = [
  {
    id: 'tong-quan-in-3d',
    title: 'Tổng quan về Công nghệ In 3D',
    description:
      'Khám phá lịch sử, các công nghệ in 3D phổ biến và tiềm năng ứng dụng vô hạn của nó trong đời sống và sản xuất.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=g0m3jR4H_yM',
    imageUrl: 'https://i.ytimg.com/vi/g0m3jR4H_yM/hqdefault.jpg',
    objectives: [
      'Hiểu được in 3D là gì và nguyên lý hoạt động cơ bản.',
      'Phân biệt các công nghệ in 3D chính (FDM, SLA, SLS).',
      'Nhận biết các loại vật liệu in 3D phổ biến.',
      'Khám phá các ứng dụng đột phá của in 3D trong nhiều lĩnh vực.',
    ],
    prerequisites: ['Tư duy logic và ham học hỏi.'],
    exercises: [
      {
        title: 'Nghiên cứu ứng dụng',
        description: 'Tìm kiếm và trình bày về một ứng dụng thực tế của công nghệ in 3D mà bạn thấy ấn tượng nhất.',
        difficulty: 'Cơ bản',
        procedure: [
          'Sử dụng công cụ tìm kiếm để tìm các bài viết, video về ứng dụng in 3D.',
          'Chọn một lĩnh vực (y tế, thời trang, kiến trúc, v.v.).',
          'Tóm tắt lại dự án hoặc sản phẩm đó.',
          'Phân tích tại sao in 3D là công nghệ phù hợp cho ứng dụng đó.',
        ],
        expectedResults: 'Một bài trình bày ngắn gọn về một ứng dụng cụ thể của in 3D.',
      },
    ],
    realWorldApplications: [
      'Sản xuất đồ dùng cá nhân hóa.',
      'Tạo mẫu nhanh trong ngành công nghiệp.',
      'Giáo dục và nghiên cứu.',
    ],
    vietnamContext: {
      title: 'Bối cảnh ứng dụng tại Việt Nam',
      content: [
        'Các startup Việt Nam đang ngày càng ứng dụng in 3D để tạo mẫu sản phẩm nhanh chóng với chi phí thấp.',
        'Lĩnh vực y tế tại các thành phố lớn như TP.HCM và Hà Nội đã bắt đầu sử dụng in 3D để tạo ra các mô hình giải phẫu và bộ phận giả tùy chỉnh.',
        'Cộng đồng makers và các không gian sáng chế (makerspace) ở Việt Nam đang phát triển, thúc đẩy sự sáng tạo và phổ biến của công nghệ in 3D.',
      ],
    },
    careerConnect: {
      name: 'Trần Minh Long',
      title: 'Kỹ sư In 3D & Nhà sáng lập Meetech.vn',
      company: 'Meetech.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=tranminhlong',
      quote:
        'In 3D không chỉ là công nghệ, đó là cầu nối biến ý tưởng thành hiện thực. Tại Việt Nam, tiềm năng của nó chỉ mới bắt đầu được khai phá.',
    },
    quizzes: [
      {
        question: 'Công nghệ in 3D nào phổ biến nhất cho người dùng cá nhân và các mô hình giáo dục?',
        options: [
          'SLA (Stereolithography)',
          'SLS (Selective Laser Sintering)',
          'FDM (Fused Deposition Modeling)',
          'DLP (Digital Light Processing)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'FDM là công nghệ phổ biến nhất do chi phí thấp, dễ sử dụng và vật liệu đa dạng, rất phù hợp cho người mới bắt đầu và mục đích giáo dục.',
      },
    ],
    faqs: [
      {
        question: 'In 3D có thể in được những vật liệu gì?',
        answer:
          'Công nghệ in 3D có thể in được rất nhiều loại vật liệu, từ nhựa (PLA, ABS, PETG), kim loại (thép, nhôm, titan), gốm sứ, cho đến cả vật liệu sinh học như tế bào sống. Công nghệ FDM phổ thông thường dùng các loại nhựa.',
      },
      {
        question: 'Chi phí để in một sản phẩm 3D có đắt không?',
        answer:
          'Chi phí phụ thuộc vào kích thước, độ phức tạp của vật thể và loại vật liệu. Tuy nhiên, với sự phát triển của công nghệ, đặc biệt là FDM, chi phí in 3D ngày càng rẻ và dễ tiếp cận, phù hợp cho cả việc tạo mẫu và sản xuất các sản phẩm nhỏ.',
      },
      {
        question: 'Sự khác biệt chính giữa in 3D và các phương pháp sản xuất truyền thống là gì?',
        answer:
          'Sản xuất truyền thống (như tiện, phay) là sản xuất "trừ", tức là loại bỏ vật liệu từ một khối lớn. In 3D là sản xuất "cộng", tức là xây dựng vật thể từng lớp một từ vật liệu thô. Điều này giúp tiết kiệm vật liệu và cho phép tạo ra các hình dạng phức tạp mà phương pháp truyền thống không thể làm được.',
      },
      {
        question: 'In 3D có nhanh không?',
        answer:
          'Thời gian in phụ thuộc rất nhiều vào kích thước, độ phức tạp và chất lượng mong muốn của sản phẩm. Một vật thể nhỏ có thể chỉ mất vài chục phút, nhưng các mô hình lớn và chi tiết có thể mất hàng chục giờ hoặc thậm chí vài ngày để hoàn thành.',
      },
      {
        question: 'Công nghệ FDM hoạt động như thế nào?',
        answer:
          'FDM (Fused Deposition Modeling) hoạt động bằng cách đùn một sợi nhựa (filament) qua một đầu phun được nung nóng, làm cho nhựa chảy ra. Đầu phun di chuyển theo các tọa độ được lập trình sẵn để vẽ từng lớp của vật thể. Lớp này chồng lên lớp kia và nguội đi, tạo thành một vật thể rắn.',
      },
      {
        question: 'Tôi có thể tự thiết kế mô hình để in 3D không?',
        answer:
          'Chắc chắn rồi! Đó là một phần thú vị nhất của in 3D. Bạn có thể bắt đầu với các phần mềm miễn phí và dễ sử dụng như Tinkercad, hoặc các phần mềm mạnh mẽ hơn như Blender, Fusion 360. Ngoài ra, có hàng triệu mô hình 3D miễn phí trên các trang web như Thingiverse, Printables để bạn tải về và in.',
      },
      {
        question: 'In 3D có an toàn không?',
        answer:
          'Khi vận hành đúng cách, in 3D là an toàn. Tuy nhiên, cần lưu ý: máy in có các bộ phận nóng (đầu phun, bàn in) có thể gây bỏng. Một số loại nhựa như ABS khi in có thể tạo ra khói có mùi và tiềm ẩn nguy cơ sức khỏe, do đó cần in ở nơi thông thoáng. Nhựa PLA được coi là an toàn và dễ in nhất.',
      },
      {
        question: 'Độ phân giải của máy in 3D là gì?',
        answer:
          'Độ phân giải trong in 3D thường được đo bằng chiều cao của mỗi lớp in (layer height). Chiều cao lớp càng nhỏ (ví dụ 0.1mm) thì độ phân giải càng cao, bề mặt vật thể càng mịn và chi tiết. Tuy nhiên, in với độ phân giải cao sẽ mất nhiều thời gian hơn.',
      },
      {
        question: 'Tại sao in 3D được gọi là công nghệ tạo mẫu nhanh (Rapid Prototyping)?',
        answer:
          'Bởi vì nó cho phép các nhà thiết kế và kỹ sư chuyển đổi một bản vẽ kỹ thuật số thành một nguyên mẫu vật lý trong vài giờ hoặc vài ngày, thay vì vài tuần hoặc vài tháng như các phương pháp truyền thống. Điều này giúp đẩy nhanh đáng kể chu kỳ phát triển sản phẩm.',
      },
      {
        question: 'Liệu in 3D có thể thay thế hoàn toàn sản xuất hàng loạt không?',
        answer:
          'Hiện tại thì chưa. In 3D rất mạnh trong việc tạo mẫu, sản xuất số lượng nhỏ và các sản phẩm tùy biến cao. Đối với sản xuất hàng triệu sản phẩm giống hệt nhau, các phương pháp truyền thống như ép phun vẫn hiệu quả và kinh tế hơn nhiều.',
      },
    ],
  },
  {
    id: 'thiet-ke-3d-co-ban-voi-tinkercad',
    title: 'Thiết kế 3D Cơ bản với Tinkercad',
    description:
      'Bước chân đầu tiên vào thế giới thiết kế 3D với Tinkercad, một công cụ trực tuyến, miễn phí và cực kỳ dễ sử dụng.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=k_8aK249k3g',
    imageUrl: 'https://i.ytimg.com/vi/k_8aK249k3g/hqdefault.jpg',
    objectives: [
      'Làm quen với giao diện và các công cụ cơ bản của Tinkercad.',
      'Thao tác với các khối hình học cơ bản (kéo, thả, xoay, thay đổi kích thước).',
      'Sử dụng các công cụ Group, Hole để tạo ra các hình dạng phức tạp.',
      'Thiết kế được một vật thể 3D đơn giản (ví dụ: móc khóa).',
      'Xuất file STL để chuẩn bị cho việc in.',
    ],
    prerequisites: ["Hoàn thành bài 'Tổng quan về In 3D'"],
    exercises: [
      {
        title: 'Thiết kế Móc khóa Cá nhân',
        description: 'Tự tay thiết kế một chiếc móc khóa có tên hoặc biểu tượng của riêng bạn.',
        difficulty: 'Cơ bản',
        materials: ['Máy tính có kết nối internet', 'Tài khoản Tinkercad (miễn phí)'],
        procedure: [
          'Tạo một khối đế cho móc khóa.',
          'Sử dụng công cụ Text để thêm tên của bạn.',
          'Tạo một lỗ tròn để xỏ chìa khóa.',
          'Kết hợp (Group) tất cả các đối tượng lại.',
          'Xuất file dưới định dạng .STL.',
        ],
        expectedResults: 'Một file .STL sẵn sàng để in 3D.',
      },
    ],
    realWorldApplications: [
      'Tạo đồ trang trí, đồ chơi đơn giản.',
      'Thiết kế các vật dụng văn phòng phẩm cá nhân hóa.',
      'Làm mô hình cho các dự án học tập.',
    ],
    vietnamContext: {
      title: 'Tinkercad và Giáo dục STEM tại Việt Nam',
      content: [
        'Nhiều trường học và trung tâm STEM tại Việt Nam đang sử dụng Tinkercad như một công cụ nhập môn để dạy học sinh về tư duy không gian và thiết kế 3D.',
        'Các cuộc thi robotics và sáng tạo trẻ thường có các phần thi thiết kế nhanh, nơi Tinkercad là một lợi thế lớn.',
        'Học sinh Việt Nam có thể sử dụng Tinkercad để tạo ra các mô hình di tích lịch sử, các vật dụng văn hóa cho các dự án học tập.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Bích Hạnh',
      title: 'Giáo viên STEM & Điều phối viên CLB Sáng tạo',
      company: 'Trường Quốc tế ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=lebichhanh',
      quote:
        'Với Tinkercad, rào cản kỹ thuật gần như bằng không. Tôi đã thấy học sinh lớp 5 tạo ra những mô hình 3D đáng kinh ngạc chỉ sau vài buổi học.',
    },
    quizzes: [
      {
        question: 'Công cụ nào trong Tinkercad dùng để kết hợp nhiều khối hình lại thành một đối tượng duy nhất?',
        options: ['Align', 'Group', 'Flip', 'Mirror'],
        correctAnswerIndex: 1,
        explanation:
          'Công cụ "Group" (Phím tắt: Ctrl + G) được sử dụng để hợp nhất các đối tượng được chọn thành một hình dạng duy nhất.',
      },
    ],
    faqs: [
      {
        question: 'Tinkercad có cần cài đặt không?',
        answer:
          'Không, Tinkercad là một ứng dụng hoàn toàn dựa trên web. Bạn chỉ cần một trình duyệt và kết nối internet để sử dụng mà không cần cài đặt bất kỳ phần mềm nào.',
      },
      {
        question:
          'Sự khác biệt giữa Tinkercad và các phần mềm thiết kế 3D chuyên nghiệp như Blender hay Fusion 360 là gì?',
        answer:
          'Tinkercad được thiết kế cho người mới bắt đầu với giao diện kéo-thả và các khối hình học cơ bản, rất dễ học. Trong khi đó, Blender và Fusion 360 là những công cụ chuyên nghiệp với bộ tính năng mạnh mẽ hơn rất nhiều, cho phép tạo các mô hình phức tạp, điêu khắc kỹ thuật số và thiết kế cơ khí chính xác, nhưng cũng khó học hơn.',
      },
      {
        question: 'File .STL là gì và tại sao nó quan trọng?',
        answer:
          'STL (Stereolithography) là một định dạng file tiêu chuẩn trong ngành in 3D. Nó mô tả bề mặt của một vật thể 3D bằng một loạt các hình tam giác nhỏ. Hầu hết tất cả các phần mềm Slicer đều sử dụng file STL làm đầu vào để chuẩn bị cho quá trình in.',
      },
      {
        question: 'Làm thế nào để tạo một lỗ hổng trong một vật thể trên Tinkercad?',
        answer:
          'Bạn chọn một hình dạng bất kỳ, sau đó trong bảng thuộc tính của nó, chọn tùy chọn "Hole". Đặt hình dạng "Hole" này vào vị trí bạn muốn cắt trên một vật thể rắn khác, sau đó chọn cả hai và nhấn nút "Group". Hình dạng "Hole" sẽ cắt bỏ phần giao nhau.',
      },
      {
        question: 'Tôi có thể nhập các mô hình 3D từ bên ngoài vào Tinkercad không?',
        answer:
          'Có, Tinkercad hỗ trợ nhập các file định dạng STL, OBJ và SVG. Điều này cho phép bạn chỉnh sửa các mô hình có sẵn hoặc kết hợp chúng vào thiết kế của mình.',
      },
      {
        question: 'Công cụ "Align" trong Tinkercad dùng để làm gì?',
        answer:
          'Công cụ "Align" (Căn chỉnh) rất hữu ích. Nó cho phép bạn căn chỉnh các đối tượng được chọn theo các cạnh hoặc tâm của chúng một cách chính xác, giúp bạn dễ dàng sắp xếp các bộ phận của thiết kế.',
      },
      {
        question: 'Tinkercad có hoàn toàn miễn phí không?',
        answer:
          'Có, Tinkercad là một sản phẩm của Autodesk và nó hoàn toàn miễn phí cho tất cả mọi người, từ học sinh, giáo viên đến những người có sở thích. Bạn chỉ cần tạo một tài khoản Autodesk miễn phí để sử dụng.',
      },
      {
        question: 'Thiết kế của tôi trên Tinkercad có được lưu trữ ở đâu?',
        answer:
          'Tất cả các thiết kế của bạn được tự động lưu vào tài khoản Tinkercad của bạn trên đám mây. Bạn có thể truy cập và chỉnh sửa chúng từ bất kỳ máy tính nào có kết nối internet.',
      },
      {
        question: 'Ngoài thiết kế 3D, Tinkercad còn có tính năng nào khác không?',
        answer:
          'Có, Tinkercad còn có các mô-đun "Circuits" để mô phỏng mạch điện tử với Arduino và "Codeblocks" để tạo ra các thiết kế 3D bằng cách lập trình trực quan, kéo thả các khối lệnh.',
      },
      {
        question: 'Làm cách nào để đảm bảo kích thước thiết kế của tôi là chính xác?',
        answer:
          'Khi bạn chọn một đối tượng, các kích thước của nó sẽ hiện ra. Bạn có thể nhấp vào các con số đó và nhập kích thước chính xác mà bạn muốn. Công cụ "Ruler" (Thước) cũng có thể được kéo ra không gian làm việc để giúp bạn đo đạc dễ dàng hơn.',
      },
    ],
  },
  {
    id: 'phan-mem-cat-lop-slicer',
    title: 'Làm quen với Phần mềm Cắt lớp (Slicer)',
    description:
      'Tìm hiểu vai trò then chốt của phần mềm Slicer trong việc chuyển đổi mô hình 3D thành các chỉ lệnh (G-code) mà máy in có thể hiểu được.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zAI-H_Dx23c',
    imageUrl: 'https://i.ytimg.com/vi/zAI-H_Dx23c/hqdefault.jpg',
    objectives: [
      'Hiểu vai trò của Slicer trong quy trình in 3D.',
      'Làm quen với giao diện của một phần mềm Slicer phổ biến (ví dụ: Cura, PrusaSlicer).',
      'Nắm vững các thông số in cơ bản: Layer Height, Infill, Print Speed, Temperature.',
      'Học cách tạo và tùy chỉnh cấu trúc hỗ trợ (Supports) và bám dính (Adhesion).',
    ],
    prerequisites: ["Hoàn thành bài 'Thiết kế 3D với Tinkercad'"],
    exercises: [
      {
        title: 'Chuẩn bị file in cho Móc khóa',
        description: 'Sử dụng Slicer để chuẩn bị file G-code cho chiếc móc khóa bạn đã thiết kế.',
        difficulty: 'Trung bình',
        materials: ['File .STL từ bài trước', 'Phần mềm Cura hoặc PrusaSlicer'],
        procedure: [
          'Nhập file .STL vào Slicer.',
          'Chọn cấu hình máy in và vật liệu phù hợp.',
          'Điều chỉnh các thông số in cơ bản.',
          'Xem trước (Preview) quá trình in từng lớp.',
          'Lưu file G-code ra thẻ nhớ.',
        ],
        expectedResults: 'Một file G-code đã được tối ưu hóa để in.',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa chất lượng và thời gian in cho mọi sản phẩm.',
      'Giải quyết các vấn đề thường gặp khi in.',
      'In các mô hình phức tạp cần cấu trúc hỗ trợ.',
    ],
    vietnamContext: {
      title: 'Tối ưu hóa in 3D cho điều kiện Việt Nam',
      content: [
        'Khí hậu nóng ẩm ở Việt Nam có thể ảnh hưởng đến vật liệu in (filament). Việc hiểu rõ các thông số trong Slicer giúp điều chỉnh nhiệt độ, tốc độ quạt phù hợp.',
        'Các dịch vụ in 3D tại Việt Nam thường tính giá dựa trên thời gian in và lượng vật liệu. Tối ưu Slicer giúp giảm chi phí đáng kể.',
        'Việc tùy chỉnh Supports trong Slicer rất quan trọng khi in các mô hình kiến trúc cổ của Việt Nam vốn có nhiều chi tiết phức tạp.',
      ],
    },
    careerConnect: {
      name: 'Phạm Hoàng Việt',
      title: 'Chủ xưởng in 3D',
      company: '3D Print Factory Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=phamhoangviet',
      quote:
        'Một mô hình 3D tốt chỉ là một nửa câu chuyện. Nửa còn lại nằm ở kỹ năng slicing. Một người slicing giỏi có thể cứu một bản in tưởng chừng thất bại.',
    },
    quizzes: [
      {
        question: 'Thông số "Infill" trong phần mềm Slicer quyết định điều gì?',
        options: [
          'Độ mịn của bề mặt ngoài',
          'Độ đặc của phần ruột bên trong vật thể',
          'Tốc độ di chuyển của đầu in',
          'Nhiệt độ của bàn in',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Infill" (lấp đầy) là thông số xác định mật độ của cấu trúc lưới bên trong vật thể, ảnh hưởng trực tiếp đến độ cứng và lượng vật liệu tiêu thụ.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao cần phải có phần mềm Slicer?',
        answer:
          'Máy in 3D không thể hiểu trực tiếp file mô hình 3D (như .STL). Phần mềm Slicer "dịch" mô hình đó thành một chuỗi các lớp mỏng và tạo ra file G-code, là tập hợp các chỉ lệnh chi tiết (tọa độ di chuyển, nhiệt độ, tốc độ) để máy in thực hiện.',
      },
      {
        question: 'Thông số "Layer Height" (chiều cao lớp in) ảnh hưởng đến sản phẩm như thế nào?',
        answer:
          'Layer Height là một trong những thông số quan trọng nhất. Layer Height càng nhỏ (ví dụ 0.1mm) thì bề mặt sản phẩm càng mịn và chi tiết, nhưng thời gian in sẽ rất lâu. Ngược lại, Layer Height lớn hơn (ví dụ 0.3mm) sẽ in nhanh hơn nhưng bề mặt sẽ thô và có thể thấy rõ các lớp in.',
      },
      {
        question: 'Cấu trúc hỗ trợ (Supports) là gì và khi nào cần dùng đến nó?',
        answer:
          'Supports là các cấu trúc tạm thời mà Slicer tự động tạo ra để đỡ những phần của mô hình bị nhô ra không trung (overhangs) hoặc các cây cầu (bridges) quá dài. Nếu không có supports, những phần này sẽ bị in lỗi hoặc sụp đổ do không có gì ở dưới để đỡ. Sau khi in xong, supports sẽ được bóc hoặc bẻ đi.',
      },
      {
        question: 'Sự khác biệt giữa "Skirt", "Brim" và "Raft" là gì?',
        answer:
          'Đây là các tùy chọn bám dính (Adhesion). "Skirt" là một đường bao quanh vật thể nhưng không chạm vào nó, giúp mồi nhựa cho đầu in. "Brim" là một vài lớp in rộng, phẳng, tiếp xúc trực tiếp với các cạnh của vật thể, giúp tăng diện tích tiếp xúc và chống cong vênh. "Raft" là một lớp đế dày bên dưới toàn bộ vật thể, vật thể sẽ được in trên lớp đế này thay vì in trực tiếp lên bàn in.',
      },
      {
        question: 'Tôi có thể dùng một file G-code cho nhiều loại máy in khác nhau không?',
        answer:
          'Không nên. Mỗi file G-code được tạo ra cho một cấu hình máy in cụ thể (kích thước bàn in, loại firmware...). Sử dụng G-code của máy này cho máy khác có thể gây ra lỗi hoặc thậm chí làm hỏng máy.',
      },
      {
        question: 'Phần mềm Slicer nào là tốt nhất?',
        answer:
          'Không có câu trả lời tuyệt đối. Cura, PrusaSlicer và Bambu Studio là ba trong số những Slicer miễn phí và phổ biến nhất hiện nay. Mỗi cái đều có điểm mạnh riêng và giao diện hơi khác nhau. Lựa chọn tốt nhất phụ thuộc vào máy in bạn đang dùng và sở thích cá nhân.',
      },
      {
        question: 'Tốc độ in (Print Speed) ảnh hưởng đến chất lượng như thế nào?',
        answer:
          'In càng nhanh, thời gian hoàn thành càng sớm nhưng có thể làm giảm chất lượng bề mặt, các chi tiết nhỏ có thể bị lỗi và các lớp có thể liên kết kém hơn. In chậm hơn thường cho kết quả đẹp và chắc chắn hơn. Việc tìm ra tốc độ tối ưu là một sự cân bằng giữa thời gian và chất lượng.',
      },
      {
        question: 'Tại sao cần phải xem trước (Preview) trong Slicer trước khi in?',
        answer:
          'Chế độ xem trước cho phép bạn mô phỏng lại toàn bộ quá trình in, lớp này qua lớp khác. Nó cực kỳ hữu ích để kiểm tra xem có lỗi nào trong quá trình cắt lớp không, cấu trúc hỗ trợ có được tạo đúng chỗ không, và ước tính thời gian cũng như lượng vật liệu sẽ tiêu thụ.',
      },
      {
        question: 'Tôi có thể thay đổi thông số in giữa chừng khi đang in không?',
        answer:
          'Hầu hết các máy in 3D hiện đại cho phép bạn tinh chỉnh một số thông số cơ bản ngay trên màn hình của máy khi đang in, chẳng hạn như tốc độ in (Print Speed), nhiệt độ đầu phun (Nozzle Temperature) và tốc độ quạt (Fan Speed). Điều này rất hữu ích để "cứu" một bản in khi bạn thấy có vấn đề.',
      },
      {
        question: 'Làm thế nào để giảm thời gian in?',
        answer:
          'Có nhiều cách: tăng chiều cao lớp in (Layer Height), giảm mật độ lấp đầy (Infill), tăng tốc độ in, hoặc sử dụng đầu phun có đường kính lớn hơn. Tuy nhiên, mỗi thay đổi này đều có thể ảnh hưởng đến chất lượng hoặc độ bền của sản phẩm.',
      },
    ],
  },
  {
    id: 'van-hanh-may-in-3d-fdm',
    title: 'Vận hành Máy in 3D FDM',
    description:
      'Hướng dẫn chi tiết các bước để vận hành một máy in 3D FDM, từ khâu chuẩn bị đến khi bắt đầu in sản phẩm đầu tiên.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=T-5u_3s5EwQ',
    imageUrl: 'https://i.ytimg.com/vi/T-5u_3s5EwQ/hqdefault.jpg',
    objectives: [
      'Hiểu cấu tạo các bộ phận chính của máy in 3D FDM.',
      'Thực hiện cân bàn in (bed leveling) một cách chính xác.',
      'Nạp và tháo vật liệu in (filament) đúng cách.',
      'Bắt đầu một quá trình in từ file G-code.',
      'Theo dõi và nhận biết các dấu hiệu của một bản in tốt.',
    ],
    prerequisites: ["Hoàn thành bài 'Phần mềm Cắt lớp'"],
    exercises: [
      {
        title: 'In sản phẩm đầu tay',
        description: 'Thực hành in chiếc móc khóa đã được chuẩn bị ở bài trước.',
        difficulty: 'Trung bình',
        materials: ['Máy in 3D FDM', 'Cuộn nhựa PLA', 'Thẻ nhớ chứa file G-code'],
        procedure: [
          'Kiểm tra máy in, đảm bảo bàn in sạch.',
          'Thực hiện cân lại bàn in.',
          'Nạp nhựa PLA vào máy.',
          'Cắm thẻ nhớ và chọn file để in.',
          'Quan sát lớp in đầu tiên và toàn bộ quá trình in.',
        ],
        expectedResults: 'Một chiếc móc khóa được in 3D hoàn chỉnh.',
      },
    ],
    realWorldApplications: [
      'Tất cả các hoạt động sản xuất bằng công nghệ FDM.',
      'Bảo trì và sửa chữa máy in 3D cơ bản.',
      'Tự tạo ra các sản phẩm vật lý tại nhà.',
    ],
    vietnamContext: {
      title: 'Vận hành máy in 3D tại nhà ở Việt Nam',
      content: [
        'Nguồn điện ở Việt Nam đôi khi không ổn định. Việc sử dụng một bộ lưu điện (UPS) cho máy in 3D là một giải pháp thông minh để tránh hỏng bản in khi mất điện đột ngột.',
        'Các dòng máy in 3D phổ thông như Creality Ender, Anet được cộng đồng người dùng Việt Nam ưa chuộng và hỗ trợ rất nhiều trên các diễn đàn, hội nhóm.',
        'Việc tìm mua vật liệu in (PLA, PETG, ABS) ở các thành phố lớn của Việt Nam hiện nay khá dễ dàng qua các sàn thương mại điện tử.',
      ],
    },
    careerConnect: {
      name: 'Vũ Anh Tuấn',
      title: 'Reviewer & Chuyên gia máy in 3D',
      company: 'YouTube Channel "In 3D Dễ Ợt"',
      imageUrl: 'https://i.pravatar.cc/150?u=vuanhtuan',
      quote:
        'Đừng sợ hỏng. Mỗi bản in lỗi là một bài học. Chiếc máy in 3D đầu tiên của tôi đã dạy tôi nhiều về sự kiên nhẫn hơn bất kỳ cuốn sách nào.',
    },
    quizzes: [
      {
        question:
          'Hành động quan trọng nhất cần thực hiện trước mỗi lần in để đảm bảo lớp đầu tiên bám dính tốt là gì?',
        options: ['Lau sạch bàn in', 'Cân lại bàn in (Bed leveling)', 'Làm nóng trước đầu in', 'Kiểm tra cuộn nhựa'],
        correctAnswerIndex: 1,
        explanation:
          'Cân bàn in là bước tối quan trọng, đảm bảo khoảng cách giữa đầu in và mặt bàn là đồng đều ở mọi điểm, giúp lớp in đầu tiên bám chắc và tạo nền tảng tốt cho toàn bộ vật thể.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào khi vật thể in không dính vào bàn in?',
        answer:
          'Đây là vấn đề phổ biến. Các nguyên nhân chính bao gồm: bàn in chưa được cân chỉnh đúng, bàn in bẩn, nhiệt độ bàn in chưa phù hợp, hoặc cần sử dụng các chất hỗ trợ bám dính như keo hồ, keo xịt tóc. Việc cân lại bàn in thường là giải pháp đầu tiên và hiệu quả nhất.',
      },
      {
        question: 'Nhựa in bị tắc ở đầu in thì phải làm sao?',
        answer:
          'Tắc nhựa (clogging) có thể do nhiều nguyên nhân: nhiệt độ in quá thấp, nhựa bị ẩm, hoặc có bụi bẩn. Cách xử lý phổ biến là tăng nhiệt độ đầu in lên cao hơn bình thường một chút để nhựa cũ chảy ra, hoặc dùng một cây kim nhỏ (cleaning needle) đi kèm máy in để thông đầu phun.',
      },
      {
        question: '"Cân bàn in" (Bed Leveling) là gì và tại sao nó lại quan trọng đến vậy?',
        answer:
          'Cân bàn in là quá trình điều chỉnh để đảm bảo khoảng cách giữa đầu phun và bề mặt bàn in là như nhau ở mọi điểm. Đây là bước quan trọng nhất để có một lớp in đầu tiên hoàn hảo. Nếu khoảng cách quá xa, nhựa sẽ không dính. Nếu quá gần, nhựa sẽ không thể thoát ra hoặc làm xước bàn in.',
      },
      {
        question: 'Lớp in đầu tiên là quan trọng nhất, đúng hay sai?',
        answer:
          'Đúng. Lớp in đầu tiên là nền móng cho toàn bộ vật thể. Một lớp đầu tiên tốt, bám dính đều trên toàn bộ bề mặt sẽ quyết định đến 90% sự thành công của bản in.',
      },
      {
        question: 'Hiện tượng "cong vênh" (warping) là gì và làm sao để khắc phục?',
        answer:
          'Cong vênh là hiện tượng các góc của vật thể bị co lại và nhấc lên khỏi bàn in. Nó xảy ra do sự co ngót không đồng đều của nhựa khi nguội đi. Cách khắc phục bao gồm: đảm bảo bàn in sạch, sử dụng Brim hoặc Raft, tăng nhiệt độ bàn in, hoặc sử dụng buồng in kín để duy trì nhiệt độ ổn định.',
      },
      {
        question: 'Tôi nên sử dụng nhựa PLA hay ABS?',
        answer:
          'Đối với người mới bắt đầu, PLA là lựa chọn tốt nhất. Nó dễ in, ít cong vênh, không yêu cầu bàn in nhiệt độ cao và không có mùi khó chịu. ABS bền hơn và chịu nhiệt tốt hơn nhưng khó in hơn, đòi hỏi nhiệt độ cao và dễ bị cong vênh, cần in trong buồng kín.',
      },
      {
        question: 'Làm thế nào để bảo quản cuộn nhựa in (filament)?',
        answer:
          'Hầu hết các loại nhựa in, đặc biệt là PLA và PETG, đều hút ẩm từ không khí. Nhựa bị ẩm sẽ gây ra nhiều vấn đề khi in như tiếng nổ lách tách, bề mặt sần sùi, và sợi nhựa giòn dễ gãy. Bạn nên bảo quản filament trong túi zip kín hoặc hộp chống ẩm cùng với các gói hút ẩm.',
      },
      {
        question: 'Hiện tượng "tưa" hoặc "kéo sợi" (stringing) là gì?',
        answer:
          'Stringing là những sợi nhựa mỏng giống như mạng nhện xuất hiện giữa các bộ phận riêng biệt của mô hình. Nó xảy ra khi đầu in di chuyển từ điểm này sang điểm khác mà nhựa vẫn tiếp tục rỉ ra. Cách khắc phục là điều chỉnh cài đặt "Retraction" (rút nhựa) trong Slicer.',
      },
      {
        question: 'Tôi có cần phải ở bên cạnh máy in trong suốt quá trình in không?',
        answer:
          'Bạn nên quan sát kỹ lớp in đầu tiên để đảm bảo mọi thứ ổn thỏa. Sau đó, bạn không cần phải theo dõi liên tục, nhưng nên thỉnh thoảng kiểm tra. Hầu hết các máy in hiện đại đều khá đáng tin cậy, nhưng lỗi vẫn có thể xảy ra. Không bao giờ để máy in hoạt động mà không có người giám sát trong một thời gian dài, đặc biệt là qua đêm.',
      },
      {
        question: 'Sau khi in xong, tôi cần làm gì tiếp theo?',
        answer:
          'Chờ cho bàn in nguội xuống một chút, vật thể sẽ dễ lấy ra hơn. Sau đó, bạn có thể cần phải loại bỏ các cấu trúc hỗ trợ (supports) và brim/raft. Tùy thuộc vào yêu cầu, bạn có thể thực hiện các bước xử lý hậu kỳ như chà nhám, sơn hoặc lắp ráp các bộ phận lại với nhau.',
      },
    ],
  },
];
