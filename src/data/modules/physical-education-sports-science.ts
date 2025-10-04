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
        {
          question: 'Nguyên tắc quá tải (Overload) nghĩa là gì?',
          answer:
            'Là nguyên tắc nền tảng nhất: để cải thiện, bạn phải bắt cơ thể làm việc ở cường độ cao hơn mức nó đã quen. Ví dụ: nâng mức tạ nặng hơn, chạy nhanh hơn hoặc xa hơn.',
        },
        {
          question: 'Tại sao nguyên tắc tiến triển (Progression) lại quan trọng?',
          answer:
            'Cơ thể sẽ thích nghi với mức độ tập luyện hiện tại. Nếu bạn không tăng dần độ khó, sự tiến bộ của bạn sẽ chững lại. Nguyên tắc tiến triển đảm bảo bạn liên tục thử thách cơ thể để ngày càng khỏe hơn.',
        },
        {
          question: 'Nguyên tắc đặc thù (Specificity) được áp dụng như thế nào?',
          answer:
            'Nguyên tắc này nói rằng lợi ích của việc tập luyện là đặc thù cho loại hình hoạt động bạn thực hiện. Ví dụ, nếu bạn muốn chạy marathon, việc tập bơi sẽ không hiệu quả bằng việc tập chạy. "You get what you train for."',
        },
        {
          question: 'Phục hồi (Recovery) bao gồm những gì?',
          answer:
            'Phục hồi không chỉ là nghỉ ngơi. Nó còn bao gồm giấc ngủ đủ, dinh dưỡng hợp lý, và các hoạt động nhẹ nhàng như giãn cơ, yoga. Đây là lúc cơ thể thực sự xây dựng lại và trở nên mạnh mẽ hơn.',
        },
        {
          question: 'DOMS (Delayed Onset Muscle Soreness) là gì? Nó có tốt không?',
          answer:
            'DOMS là cảm giác đau nhức cơ bắp xuất hiện 24-48 giờ sau khi tập luyện. Đây là một dấu hiệu bình thường cho thấy cơ bắp của bạn đã được thử thách và đang trong quá trình sửa chữa, phát triển. Tuy nhiên, đau đớn dữ dội có thể là dấu hiệu của chấn thương.',
        },
        {
          question: 'Tần suất tập luyện lý tưởng là bao nhiêu?',
          answer:
            'Đối với người mới bắt đầu, 3-4 buổi/tuần là một khởi đầu tốt. Điều quan trọng là sự đều đặn. Lắng nghe cơ thể và đảm bảo có ít nhất 1-2 ngày nghỉ hoàn toàn mỗi tuần.',
        },
        {
          question: 'Sự khác biệt giữa tập sức mạnh (strength) và sức bền cơ bắp (endurance) là gì?',
          answer:
            'Tập sức mạnh tập trung vào việc nâng mức tạ nặng trong số lần lặp lại ít (ví dụ: 3-5 lần) để tăng sức mạnh tối đa. Tập sức bền cơ bắp tập trung vào việc nâng mức tạ nhẹ hơn trong số lần lặp lại nhiều (ví dụ: 12-15 lần) để tăng khả năng cơ bắp hoạt động trong thời gian dài.',
        },
        {
          question: 'Warm-up (khởi động) và Cool-down (thả lỏng) khác nhau như thế nào?',
          answer:
            'Warm-up được thực hiện trước khi tập, bao gồm các hoạt động nhẹ nhàng để tăng nhiệt độ cơ thể và chuẩn bị cho vận động. Cool-down được thực hiện sau khi tập, bao gồm các động tác giãn cơ để giúp cơ thể dần trở về trạng thái nghỉ ngơi và giảm đau nhức.',
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
        {
          question: 'Carbohydrate (carb) là gì và vai trò của nó?',
          answer:
            'Carbohydrate là nguồn năng lượng ưu tiên của cơ thể, đặc biệt là cho não và các hoạt động cường độ cao. Chúng được phân giải thành glucose và được lưu trữ dưới dạng glycogen trong cơ và gan.',
        },
        {
          question: 'Protein có vai trò gì ngoài việc xây dựng cơ bắp?',
          answer:
            'Protein còn cần thiết cho việc sản xuất enzyme, hormone, và các kháng thể của hệ miễn dịch. Nó cũng có thể được sử dụng làm năng lượng khi nguồn carb cạn kiệt.',
        },
        {
          question: 'Chất béo có phải lúc nào cũng xấu không?',
          answer:
            'Không. Chất béo không bão hòa (có trong quả bơ, các loại hạt, dầu ô liu) rất cần thiết cho sức khỏe, giúp hấp thụ vitamin và là nguồn năng lượng quan trọng cho các hoạt động cường độ thấp và kéo dài.',
        },
        {
          question: 'Tại sao việc uống đủ nước lại quan trọng khi vận động?',
          answer:
            'Khi vận động, cơ thể mất nước qua mồ hôi để làm mát. Mất nước chỉ 2% trọng lượng cơ thể cũng có thể làm giảm đáng kể hiệu suất, sức mạnh và khả năng tập trung. Nước cần thiết cho hầu hết mọi chức năng của cơ thể.',
        },
        {
          question: 'Chất điện giải là gì?',
          answer:
            'Là các khoáng chất như natri, kali, magie mang điện tích khi hòa tan trong nước. Chúng rất quan trọng để duy trì sự cân bằng chất lỏng, chức năng thần kinh và co cơ. Chúng ta mất điện giải qua mồ hôi.',
        },
        {
          question: 'Khi nào thì nên dùng đồ uống thể thao?',
          answer:
            'Đồ uống thể thao (chứa carb và điện giải) thường chỉ cần thiết cho các hoạt động kéo dài hơn 60-90 phút. Đối với các buổi tập ngắn hơn, nước lọc thường là đủ.',
        },
        {
          question: '"Cửa sổ đồng hóa" (anabolic window) sau tập là gì?',
          answer:
            'Là khoảng thời gian khoảng 30-60 phút sau khi tập luyện, được cho là thời điểm cơ thể hấp thụ protein và carb hiệu quả nhất để phục hồi và phát triển. Mặc dù tầm quan trọng của nó vẫn còn được tranh luận, việc có một bữa ăn nhẹ sau tập vẫn là một thói quen tốt.',
        },
        {
          question: 'Creatine là gì? Nó có an toàn không?',
          answer:
            'Creatine là một hợp chất tự nhiên giúp cung cấp năng lượng cho các hoạt động bùng nổ, ngắn hạn. Nó là một trong những chất bổ sung được nghiên cứu nhiều nhất và được chứng minh là an toàn và hiệu quả trong việc tăng sức mạnh và khối lượng cơ bắp khi kết hợp với tập luyện.',
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
        {
          question: 'Sự khác biệt giữa bong gân (sprain) và căng cơ (strain) là gì?',
          answer:
            'Bong gân là chấn thương ở dây chằng (mô nối xương với xương). Căng cơ là chấn thương ở cơ hoặc gân (mô nối cơ với xương). Cả hai đều thường xảy ra do chuyển động đột ngột hoặc quá mức.',
        },
        {
          question: 'Tại sao không nên chườm nóng ngay sau khi bị chấn thương cấp tính?',
          answer:
            'Chườm nóng làm giãn mạch máu, tăng lưu lượng máu đến khu vực bị thương, điều này có thể làm tăng sưng và viêm. Chườm nóng chỉ nên được sử dụng cho các cơn đau cơ mãn tính, không sưng, để giúp thư giãn cơ.',
        },
        {
          question: 'Thả lỏng (cool-down) sau khi tập có tác dụng gì?',
          answer:
            'Thả lỏng giúp nhịp tim và nhịp thở của bạn giảm xuống một cách từ từ. Các động tác giãn cơ nhẹ nhàng trong khi thả lỏng có thể giúp cải thiện sự linh hoạt và giảm đau nhức cơ bắp sau này.',
        },
        {
          question: 'Làm thế nào để phòng tránh chuột rút khi vận động?',
          answer:
            'Chuột rút thường do mất nước, mất điện giải hoặc cơ bắp quá tải. Hãy đảm bảo bạn uống đủ nước, khởi động kỹ và không tăng cường độ tập luyện quá đột ngột.',
        },
        {
          question: 'Khi nào một chấn thương được coi là nghiêm trọng và cần đi gặp bác sĩ?',
          answer:
            'Bạn nên đi gặp bác sĩ nếu nghe thấy tiếng "rắc" hoặc "bốp" khi bị chấn thương, không thể đặt trọng lượng lên vùng bị thương, vùng bị thương bị biến dạng rõ rệt, hoặc cơn đau dữ dội và không thuyên giảm sau khi sơ cứu.',
        },
        {
          question: 'Giãn cơ tĩnh (static stretching) và giãn cơ động (dynamic stretching) khác nhau như thế nào?',
          answer:
            'Giãn cơ động bao gồm các chuyển động có kiểm soát để đưa khớp qua toàn bộ phạm vi chuyển động của nó (ví dụ: xoay tay, đá chân), rất tốt cho việc khởi động. Giãn cơ tĩnh là giữ một vị trí giãn trong một khoảng thời gian (ví dụ: 15-30 giây), tốt nhất nên thực hiện sau khi tập (cool-down).',
        },
        {
          question: 'Overreaching và Overtraining khác nhau như thế nào?',
          answer:
            'Overreaching là tình trạng mệt mỏi ngắn hạn do tập luyện quá sức, có thể phục hồi sau vài ngày nghỉ ngơi. Overtraining (tập luyện quá sức) là một tình trạng mãn tính nghiêm trọng hơn, khi bạn liên tục tập luyện mà không phục hồi đủ, dẫn đến suy giảm hiệu suất kéo dài, rối loạn giấc ngủ và các vấn đề sức khỏe khác.',
        },
        {
          question: 'Làm thế nào để chọn giày phù hợp cho hoạt động thể thao?',
          answer:
            'Chọn giày được thiết kế riêng cho môn thể thao bạn chơi. Giày chạy bộ khác giày tập gym, giày chơi bóng rổ. Một đôi giày phù hợp sẽ hỗ trợ đúng cách cho bàn chân của bạn và giúp giảm nguy cơ chấn thương.',
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
