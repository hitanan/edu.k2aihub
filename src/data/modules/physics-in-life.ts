import { ModuleData } from '@/types';

export const physicsInLifeModuleData: ModuleData = {
  id: 'physics-in-life',
  title: 'Vật Lý Trong Đời Sống',
  subtitle: 'Khám phá những ứng dụng kỳ diệu của vật lý trong công nghệ, giao thông và thể thao.',
  description:
    'Module này giải thích các nguyên lý vật lý cơ bản thông qua các ví dụ gần gũi, từ chiếc điện thoại thông minh bạn dùng hàng ngày đến các kỹ thuật trong thể thao đỉnh cao.',
  image: 'https://images.unsplash.com/photo-1632696123648-585052d42d79?w=1200&h=600&fit=crop',
  color: 'from-purple-500 to-indigo-500',
  category: 'Khoa học & Công nghệ',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'vat-ly-trong-cong-nghe',
      title: 'Vật Lý Trong Các Thiết Bị Công Nghệ',
      description:
        'Tìm hiểu nguyên lý vật lý đằng sau hoạt động của điện thoại thông minh, lò vi sóng, và mạng không dây Wi-Fi.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Điện thoại thông minh', 'Lò vi sóng', 'Mạng Wi-Fi', 'Máy tính'],
      objectives: [
        'Hiểu cách màn hình cảm ứng hoạt động dựa trên nguyên lý điện dung.',
        'Giải thích tại sao lò vi sóng có thể làm nóng thức ăn.',
        'Nắm được nguyên tắc truyền và nhận sóng điện từ của Wi-Fi.',
        'Khám phá vật lý bán dẫn trong các con chip máy tính.',
      ],
      faqs: [
        {
          question: 'Màn hình cảm ứng điện dung hoạt động như thế nào?',
          answer:
            'Màn hình được phủ một lớp vật liệu dẫn điện trong suốt. Khi ngón tay bạn (vốn cũng dẫn điện) chạm vào, nó làm thay đổi điện trường tại điểm đó. Mạch điều khiển sẽ phát hiện sự thay đổi này và xác định vị trí của cú chạm.',
        },
        {
          question: 'Tại sao không nên cho vật kim loại vào lò vi sóng?',
          answer:
            'Sóng vi ba trong lò tạo ra dòng điện trong kim loại. Dòng điện này có thể rất lớn, gây ra tia lửa điện, làm hỏng lò và có thể gây cháy nổ.',
        },
      ],
      quizzes: [
        {
          question: 'Lò vi sóng sử dụng loại sóng nào để làm nóng thức ăn?',
          options: ['Sóng radio', 'Sóng vi ba (microwaves)', 'Tia hồng ngoại', 'Tia X'],
          correctAnswerIndex: 1,
          explanation:
            'Lò vi sóng sử dụng sóng vi ba để làm các phân tử nước trong thức ăn dao động mạnh, sinh ra nhiệt và làm nóng thức ăn.',
        },
      ],
    },
    {
      id: 'vat-ly-trong-giao-thong',
      title: 'Vật Lý Giao Thông và An Toàn',
      description:
        'Phân tích các lực tác động lên một chiếc ô tô, nguyên lý hoạt động của túi khí và tầm quan trọng của quán tính trong an toàn giao thông.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Túi khí ô tô', 'Dây an toàn', 'Hệ thống phanh ABS', 'An toàn giao thông'],
      objectives: [
        'Áp dụng các định luật Newton để phân tích chuyển động của xe.',
        'Hiểu vai trò của lực ma sát trong việc phanh xe và vào cua.',
        'Giải thích nguyên lý hoạt động của túi khí và dây an toàn dựa trên khái niệm quán tính và xung lượng.',
        'Phân tích các yếu tố vật lý ảnh hưởng đến an toàn khi tham gia giao thông.',
      ],
      faqs: [
        {
          question: 'Tại sao chúng ta bị "nhào" về phía trước khi xe phanh gấp?',
          answer:
            'Đó là do quán tính. Cơ thể bạn có xu hướng duy trì chuyển động thẳng đều về phía trước. Khi xe đột ngột dừng lại, cơ thể bạn vẫn tiếp tục lao về phía trước cho đến khi bị dây an toàn hoặc các bộ phận khác của xe cản lại.',
        },
        {
          question: 'Túi khí hoạt động như thế nào?',
          answer:
            'Khi có va chạm mạnh, cảm biến sẽ kích hoạt một phản ứng hóa học cực nhanh, tạo ra một lượng lớn khí (thường là Nitơ) để làm phồng túi khí. Túi khí phồng lên giúp làm tăng thời gian va chạm của người lái với vô lăng, từ đó làm giảm lực tác động lên người, giảm thiểu chấn thương.',
        },
      ],
      quizzes: [
        {
          question: 'Khái niệm vật lý nào giải thích rõ nhất vai trò của dây an toàn?',
          options: ['Lực hấp dẫn', 'Năng lượng', 'Quán tính', 'Điện tích'],
          correctAnswerIndex: 2,
          explanation:
            'Dây an toàn giúp khắc phục quán tính của cơ thể, giữ cho bạn không bị lao về phía trước khi xe dừng đột ngột.',
        },
      ],
    },
    {
      id: 'vat-ly-trong-the-thao',
      title: 'Vật Lý Trong Thể Thao',
      description:
        'Khám phá cách các vận động viên tận dụng nguyên lý vật lý để đạt được thành tích cao, từ cú sút xoáy của cầu thủ bóng đá đến kỹ thuật nhảy cao.',
      duration: '50 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Bóng đá', 'Bóng rổ', 'Trượt băng nghệ thuật', 'Nhảy sào'],
      objectives: [
        'Hiểu về hiệu ứng Magnus và ứng dụng trong các cú sút xoáy (bóng đá, tennis).',
        'Phân tích chuyển động ném xiên trong các môn như bóng rổ, ném lao.',
        'Tìm hiểu về nguyên lý bảo toàn mô men động lượng trong các môn như trượt băng nghệ thuật, nhảy cầu.',
        'Phân tích sự chuyển hóa năng lượng trong môn nhảy sào.',
      ],
      faqs: [
        {
          question: 'Tại sao quả bóng lại bay xoáy (hiệu ứng Magnus)?',
          answer:
            'Khi một quả bóng quay tròn trong không khí, nó kéo theo một lớp không khí quay cùng. Một bên của quả bóng, hướng quay cùng chiều với dòng không khí đi tới, sẽ có tốc độ không khí cao hơn và áp suất thấp hơn. Bên còn lại có tốc độ không khí thấp hơn và áp suất cao hơn. Sự chênh lệch áp suất này tạo ra một lực đẩy quả bóng theo đường cong.',
        },
        {
          question: 'Làm thế nào vận động viên trượt băng có thể quay nhanh hơn bằng cách co tay lại?',
          answer:
            'Đây là nguyên lý bảo toàn mô men động lượng. Khi co tay lại, bán kính quay của cơ thể giảm đi. Để mô men động lượng (tích của tốc độ góc và mô men quán tính) được bảo toàn, tốc độ góc phải tăng lên, tức là vận động viên sẽ quay nhanh hơn.',
        },
      ],
      quizzes: [
        {
          question: 'Hiệu ứng Magnus giải thích hiện tượng nào trong thể thao?',
          options: [
            'Vận động viên chạy nhanh hơn khi có gió sau lưng',
            'Quả bóng đá bay theo đường cong khi được sút xoáy',
            'Vận động viên nhảy sào có thể vượt qua xà',
            'Bóng rổ nảy cao hơn trên sàn cứng',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Hiệu ứng Magnus là nguyên lý vật lý giải thích tại sao các vật thể quay tròn khi di chuyển trong không khí lại bị lệch quỹ đạo, tạo ra các đường bay cong.',
        },
      ],
    },
  ],
  features: [
    'Giải thích vật lý qua các ví dụ thực tế',
    'Phân tích công nghệ, giao thông, thể thao',
    'Thí nghiệm ảo và mô phỏng tương tác',
    'Câu đố vui và câu hỏi thử thách',
  ],
  prerequisites: ['Kiến thức vật lý cơ bản (cơ học, điện học)'],
  objectives: [
    'Nhận thấy sự hiện diện của vật lý ở khắp mọi nơi.',
    'Hiểu nguyên lý hoạt động của các thiết bị và hiện tượng quen thuộc.',
    'Áp dụng tư duy vật lý để phân tích và giải quyết vấn đề.',
    'Tăng cường ý thức về an toàn dựa trên hiểu biết vật lý.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành kỹ thuật, công nghệ, thiết kế sản phẩm.',
    'Tư duy phân tích hữu ích cho các ngành khoa học thể thao, phân tích dữ liệu.',
  ],
  tags: ['vật lý', 'công nghệ', 'giao thông', 'thể thao'],
};
