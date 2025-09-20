import { ModuleData } from '@/types';

export const physicalEducationSportsScienceModuleData: ModuleData = {
  id: 'physical-education-sports-science',
  title: 'Giáo Dục Thể Chất và Khoa Học Vận Động',
  subtitle: 'Khám phá khoa học đằng sau các hoạt động thể thao, dinh dưỡng và phương pháp tập luyện hiệu quả.',
  description:
    'Module này không chỉ là các bài tập thể dục mà còn cung cấp kiến thức khoa học về cơ thể người khi vận động, giúp bạn hiểu rõ hơn về cách tập luyện an toàn, hiệu quả và phòng tránh chấn thương.',
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=600&fit=crop',
  color: 'from-lime-500 to-green-500',
  category: 'Sức khỏe & Vận động',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'khoa-hoc-tap-luyen',
      title: 'Các Nguyên Tắc Khoa Học Của Việc Tập Luyện',
      description:
        'Tìm hiểu về các nguyên tắc cơ bản để xây dựng một chương trình tập luyện hiệu quả, bao gồm nguyên tắc quá tải, tiến triển, đặc thù và phục hồi.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Lập kế hoạch tập gym', 'Tập luyện cho một giải chạy', 'Cải thiện sức bền'],
      objectives: [
        'Hiểu nguyên tắc quá tải (Overload): phải tập nặng hơn mức bình thường để cơ thể thích nghi và khỏe hơn.',
        'Nắm vững nguyên tắc tiến triển (Progression): cần tăng dần cường độ hoặc khối lượng tập luyện theo thời gian.',
        'Giải thích nguyên tắc đặc thù (Specificity): muốn giỏi môn nào thì phải tập luyện chuyên biệt cho môn đó.',
        'Nhận biết tầm quan trọng của việc nghỉ ngơi và phục hồi (Recovery) đối với sự phát triển cơ bắp và hiệu suất.',
      ],
      faqs: [
        {
          question: 'Tập luyện mỗi ngày có tốt không?',
          answer:
            'Không hẳn. Cơ bắp cần thời gian để phục hồi và phát triển sau khi tập luyện. Tập cùng một nhóm cơ mỗi ngày có thể dẫn đến quá tải và chấn thương. Lịch tập xen kẽ các nhóm cơ và có ngày nghỉ là rất quan trọng.',
        },
        {
          question: 'Cardio và tập tạ (strength training), cái nào quan trọng hơn?',
          answer:
            'Cả hai đều quan trọng và mang lại những lợi ích khác nhau. Cardio (chạy bộ, đạp xe) tốt cho tim mạch và sức bền. Tập tạ giúp xây dựng cơ bắp, tăng cường sức mạnh và trao đổi chất. Một chương trình tập luyện cân bằng nên bao gồm cả hai.',
        },
      ],
      quizzes: [
        {
          question: 'Để tăng sức mạnh cơ bắp, bạn cần áp dụng nguyên tắc nào sau đây?',
          options: [
            'Tập thật nhẹ nhiều lần',
            'Chỉ tập cardio',
            'Tập với mức tạ nặng hơn mức bạn quen thuộc một cách an toàn',
            'Không cần nghỉ ngơi giữa các buổi tập',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Đây là nguyên tắc quá tải (Overload). Cơ bắp chỉ phát triển khi nó bị thách thức bởi một mức kháng lực lớn hơn bình thường.',
        },
      ],
    },
    {
      id: 'dinh-duong-the-thao',
      title: 'Dinh Dưỡng Cho Người Chơi Thể Thao',
      description:
        'Khám phá vai trò của carbohydrate, protein và chất béo đối với hiệu suất thể thao, cũng như tầm quan trọng của việc bổ sung nước và điện giải.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Ăn gì trước và sau khi tập', 'Bổ sung năng lượng khi thi đấu', 'Chọn đồ uống thể thao'],
      objectives: [
        'Hiểu vai trò của carbohydrate là nguồn năng lượng chính cho các hoạt động cường độ cao.',
        'Biết tầm quan trọng của protein trong việc phục hồi và xây dựng cơ bắp.',
        'Nhận biết dấu hiệu của mất nước và cách bổ sung nước hiệu quả.',
        'Phân biệt giữa các loại đồ uống thể thao và khi nào nên sử dụng chúng.',
      ],
      faqs: [
        {
          question: 'Tại sao các vận động viên marathon thường ăn nhiều mì, cơm (carb-loading) trước ngày thi đấu?',
          answer:
            'Họ làm vậy để tối đa hóa lượng glycogen (dạng dự trữ của carbohydrate) trong cơ và gan. Glycogen là nguồn năng lượng chính cho các hoạt động kéo dài và cường độ cao. "Nạp đầy" glycogen giúp họ duy trì sức bền và tránh bị "đụng tường" (hitting the wall) khi thi đấu.',
        },
        {
          question: 'Nên ăn gì sau khi tập luyện?',
          answer:
            'Bữa ăn sau tập rất quan trọng để phục hồi. Lý tưởng nhất là một bữa ăn kết hợp cả protein (để sửa chữa cơ bắp) và carbohydrate (để bù lại năng lượng đã mất). Ví dụ: một ly sữa sô cô la, ức gà với khoai lang, hoặc sữa chua Hy Lạp với trái cây.',
        },
      ],
      quizzes: [
        {
          question: 'Chất dinh dưỡng nào đóng vai trò quan trọng nhất trong việc xây dựng và phục hồi cơ bắp?',
          options: ['Chất béo', 'Vitamin C', 'Protein', 'Chất xơ'],
          correctAnswerIndex: 2,
          explanation:
            'Protein (chất đạm) được tạo thành từ các axit amin, là những "viên gạch" xây dựng nên các mô cơ. Việc nạp đủ protein sau khi tập luyện là tối cần thiết cho quá trình phục hồi và phát triển cơ bắp.',
        },
      ],
    },
    {
      id: 'phong-tranh-chan-thuong',
      title: 'Phòng Tránh và Sơ Cứu Chấn Thương Thể Thao Cơ Bản',
      description:
        'Học cách khởi động đúng cách, nhận biết các chấn thương phổ biến và áp dụng phương pháp sơ cứu R.I.C.E.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Khởi động trước khi chơi bóng', 'Sơ cứu bong gân', 'Phòng tránh chuột rút'],
      objectives: [
        'Hiểu tầm quan trọng của việc khởi động (warm-up) và thả lỏng (cool-down).',
        'Nhận biết các dấu hiệu của chấn thương phổ biến như bong gân, căng cơ.',
        'Học và áp dụng thành thạo quy tắc sơ cứu R.I.C.E. (Nghỉ ngơi, Chườm đá, Băng ép, Nâng cao).',
        'Biết khi nào một chấn thương cần được chăm sóc y tế chuyên nghiệp.',
      ],
      faqs: [
        {
          question: 'Tại sao phải khởi động trước khi tập?',
          answer:
            'Khởi động giúp tăng dần nhiệt độ cơ thể và lưu lượng máu đến cơ bắp, làm cho cơ và khớp linh hoạt hơn. Điều này giúp cải thiện hiệu suất và giảm đáng kể nguy cơ bị căng cơ, rách dây chằng.',
        },
        {
          question: 'Quy tắc R.I.C.E. được áp dụng như thế nào?',
          answer:
            'R.I.C.E. là viết tắt của: Rest (Nghỉ ngơi, không tiếp tục vận động vùng bị thương), Ice (Chườm đá khoảng 15-20 phút mỗi lần, vài lần một ngày để giảm sưng và đau), Compression (Dùng băng thun băng ép nhẹ nhàng để hạn chế sưng), và Elevation (Nâng cao vùng bị thương lên cao hơn tim để giúp giảm sưng).',
        },
      ],
      quizzes: [
        {
          question: 'Trong quy tắc sơ cứu R.I.C.E., chữ "C" là viết tắt của từ gì?',
          options: ['Cold (Lạnh)', 'Careful (Cẩn thận)', 'Compression (Băng ép)', 'Cardio'],
          correctAnswerIndex: 2,
          explanation:
            '"C" là viết tắt của Compression, nghĩa là dùng băng ép để giúp kiểm soát sưng tấy tại vùng bị thương.',
        },
      ],
    },
  ],
  features: [
    'Nguyên tắc tập luyện khoa học',
    'Hướng dẫn dinh dưỡng thể thao',
    'Kỹ năng phòng tránh và sơ cứu chấn thương',
    'Các bài tập mẫu và video minh họa',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Hiểu cơ thể mình hoạt động như thế nào khi vận động.',
    'Xây dựng được một kế hoạch tập luyện và dinh dưỡng cá nhân hóa.',
    'Biết cách tập luyện an toàn, hiệu quả và phòng tránh chấn thương.',
    'Nâng cao sức khỏe thể chất và tinh thần thông qua vận động.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành khoa học thể thao, y học thể thao, huấn luyện viên cá nhân (PT), chuyên gia dinh dưỡng.',
    'Kiến thức cần thiết cho bất kỳ ai muốn theo đuổi thể thao chuyên nghiệp hoặc đơn giản là sống khỏe mạnh hơn.',
  ],
  tags: ['giáo dục thể chất', 'khoa học thể thao', 'tập luyện', 'dinh dưỡng', 'chấn thương'],
};
