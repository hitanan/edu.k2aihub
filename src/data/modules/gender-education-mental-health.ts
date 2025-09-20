import { ModuleData } from '@/types';

export const genderEducationMentalHealthModuleData: ModuleData = {
  id: 'gender-education-mental-health',
  title: 'Giáo Dục Giới Tính và Sức Khỏe Vị Thành Niên',
  subtitle:
    'Trang bị kiến thức về giới tính, sức khỏe sinh sản và kỹ năng chăm sóc sức khỏe tinh thần cho lứa tuổi vị thành niên.',
  description:
    'Đây là một không gian an toàn để tìm hiểu và thảo luận về những thay đổi tâm sinh lý của tuổi dậy thì, các mối quan hệ, sức khỏe sinh sản và cách đối phó với những áp lực tinh thần mà thanh thiếu niên thường gặp.',
  image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=600&fit=crop',
  color: 'from-rose-400 to-red-500',
  category: 'Sức khỏe & Xã hội',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'tam-sinh-ly-tuoi-day-thi',
      title: 'Tâm Sinh Lý Tuổi Dậy Thì',
      description:
        'Tìm hiểu về những thay đổi về thể chất và cảm xúc diễn ra trong giai đoạn dậy thì ở cả nam và nữ, đồng thời học cách chấp nhận và yêu thương cơ thể mình.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Chăm sóc cơ thể', 'Hiểu về sự phát triển của bản thân', 'Tự tin về ngoại hình'],
      objectives: [
        'Nhận biết các dấu hiệu của tuổi dậy thì ở nam và nữ.',
        'Hiểu được vai trò của hormone trong việc gây ra những thay đổi về thể chất và cảm xúc.',
        'Thảo luận về các vấn đề thường gặp như mụn trứng cá, thay đổi giọng nói, và phát triển cơ thể.',
        'Xây dựng thái độ tích cực đối với cơ thể đang thay đổi của mình.',
      ],
      faqs: [
        {
          question: 'Tại sao tuổi dậy thì lại có nhiều thay đổi về cảm xúc, dễ vui, dễ buồn?',
          answer:
            'Đó là do sự biến động mạnh mẽ của các hormone giới tính như estrogen (ở nữ) và testosterone (ở nam). Những hormone này không chỉ tác động đến cơ thể mà còn ảnh hưởng đến não bộ, đặc biệt là các vùng kiểm soát cảm xúc, khiến bạn trở nên nhạy cảm hơn.',
        },
        {
          question: 'Làm thế nào để đối phó với mụn trứng cá?',
          answer:
            'Mụn trứng cá là một phần rất bình thường của tuổi dậy thì. Hãy giữ da mặt sạch sẽ, rửa mặt hai lần một ngày bằng sữa rửa mặt dịu nhẹ, tránh nặn mụn, uống đủ nước và có chế độ ăn uống lành mạnh. Nếu tình trạng nghiêm trọng, hãy tham khảo ý kiến bác sĩ da liễu.',
        },
      ],
      quizzes: [
        {
          question:
            'Hormone nào đóng vai trò chính trong sự phát triển các đặc tính sinh dục phụ ở nam giới trong tuổi dậy thì?',
          options: ['Estrogen', 'Progesterone', 'Testosterone', 'Insulin'],
          correctAnswerIndex: 2,
          explanation:
            'Testosterone là hormone giới tính nam chính, chịu trách nhiệm cho sự phát triển của cơ bắp, giọng nói trầm hơn, và sự xuất hiện của râu, lông trên cơ thể.',
        },
      ],
    },
    {
      id: 'suc-khoe-sinh-san',
      title: 'Sức Khỏe Sinh Sản và Tình Dục An Toàn',
      description:
        'Cung cấp kiến thức khoa học, chính xác về các biện pháp tránh thai, phòng ngừa các bệnh lây truyền qua đường tình dục (STIs) và xây dựng các mối quan hệ lãng mạn dựa trên sự tôn trọng và đồng thuận.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Phòng tránh thai ngoài ý muốn', 'Phòng ngừa STIs', 'Xây dựng mối quan hệ lành mạnh'],
      objectives: [
        'Hiểu về chu kỳ kinh nguyệt và quá trình thụ thai.',
        'Trình bày được các biện pháp tránh thai phổ biến, ưu và nhược điểm của từng loại.',
        'Nhận biết các bệnh lây truyền qua đường tình dục (STIs) phổ biến và cách phòng tránh.',
        'Hiểu rõ về tầm quan trọng của sự đồng thuận (consent) trong mọi tương tác tình dục.',
      ],
      faqs: [
        {
          question: 'Sự đồng thuận (consent) là gì?',
          answer:
            'Đồng thuận là sự cho phép rõ ràng, tự nguyện và có ý thức cho một hành động cụ thể. Sự đồng thuận phải được đưa ra mà không có áp lực, ép buộc hay đe dọa. Nó có thể được rút lại bất cứ lúc nào. Im lặng không có nghĩa là đồng ý.',
        },
        {
          question: 'Biện pháp nào vừa giúp tránh thai, vừa giúp phòng ngừa STIs hiệu quả?',
          answer:
            'Bao cao su là biện pháp duy nhất có hiệu quả cao trong việc thực hiện cả hai chức năng này. Các biện pháp tránh thai khác như thuốc uống hàng ngày, que cấy... chỉ có tác dụng ngừa thai mà không thể ngăn chặn lây nhiễm STIs.',
        },
      ],
      quizzes: [
        {
          question: 'Hành vi nào sau đây là KHÔNG an toàn và có nguy cơ lây nhiễm STIs?',
          options: ['Ôm', 'Nắm tay', 'Quan hệ tình dục không sử dụng bao cao su', 'Hôn má'],
          correctAnswerIndex: 2,
          explanation:
            'Các bệnh lây truyền qua đường tình dục (STIs) chủ yếu lây qua việc tiếp xúc trực tiếp với dịch cơ thể (máu, tinh dịch, dịch âm đạo) trong khi quan hệ tình dục không được bảo vệ.',
        },
      ],
    },
    {
      id: 'suc-khoe-tinh-than',
      title: 'Chăm Sóc Sức Khỏe Tinh Thần',
      description:
        'Nhận biết các dấu hiệu của stress, lo âu, trầm cảm ở lứa tuổi học đường và học các chiến lược đối phó tích cực cũng như khi nào cần tìm kiếm sự giúp đỡ.',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Đối phó với áp lực học tập', 'Vượt qua nỗi buồn', 'Giúp đỡ bạn bè'],
      objectives: [
        'Phân biệt được giữa cảm giác buồn bã thông thường và dấu hiệu của trầm cảm.',
        'Nhận biết các triệu chứng của stress và lo âu.',
        'Học các kỹ thuật thư giãn đơn giản như hít thở sâu, thiền định, viết nhật ký.',
        'Biết cách tìm kiếm sự giúp đỡ từ gia đình, bạn bè, thầy cô hoặc chuyên gia tâm lý.',
      ],
      faqs: [
        {
          question: 'Làm thế nào để giúp một người bạn đang có dấu hiệu trầm cảm?',
          answer:
            'Điều quan trọng nhất là hãy lắng nghe họ một cách chân thành và không phán xét. Cho họ biết rằng bạn quan tâm và họ không đơn độc. Khuyến khích họ chia sẻ với một người lớn đáng tin cậy (cha mẹ, giáo viên, nhân viên tư vấn học đường) và đề nghị cùng họ đi tìm sự giúp đỡ chuyên nghiệp. Đừng cố gắng tự mình "chữa" cho họ.',
        },
        {
          question: 'Stress có phải lúc nào cũng xấu không?',
          answer:
            'Không. Một mức độ stress vừa phải (gọi là eustress) có thể là động lực giúp chúng ta tập trung và hoàn thành công việc. Tuy nhiên, stress kéo dài và quá mức (distress) sẽ gây hại cho cả sức khỏe thể chất và tinh thần.',
        },
      ],
      quizzes: [
        {
          question: 'Khi cảm thấy quá tải và căng thẳng, hành động nào sau đây được khuyến khích?',
          options: [
            'Thức khuya để cố gắng làm xong mọi việc',
            'Bỏ ăn',
            'Dành thời gian cho một sở thích bạn yêu thích, như nghe nhạc hoặc đi dạo',
            'Tự cô lập mình khỏi bạn bè',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Dành thời gian cho các hoạt động thư giãn và sở thích cá nhân giúp giảm mức độ hormone gây stress, cải thiện tâm trạng và cho bạn năng lượng để đối mặt với các thách thức.',
        },
      ],
    },
  ],
  features: [
    'Kiến thức khoa học về tâm sinh lý tuổi dậy thì',
    'Thông tin chính xác về sức khỏe sinh sản và tình dục an toàn',
    'Kỹ năng nhận biết và chăm sóc sức khỏe tinh thần',
    'Môi trường học tập cởi mở, không phán xét',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Hiểu và chấp nhận những thay đổi của cơ thể và cảm xúc.',
    'Trang bị kiến thức để đưa ra những quyết định có trách nhiệm về sức khỏe sinh sản.',
    'Phát triển các kỹ năng đối phó lành mạnh với stress và các vấn đề tinh thần.',
    'Biết cách tìm kiếm sự giúp đỡ và hỗ trợ khi cần thiết.',
  ],
  careerOutcomes: [
    'Kiến thức nền tảng cho các ngành tâm lý học, y khoa, công tác xã hội, giáo dục.',
    'Kỹ năng quan trọng để xây dựng cuộc sống cá nhân khỏe mạnh và hạnh phúc.',
  ],
  tags: ['giáo dục giới tính', 'sức khỏe vị thành niên', 'sức khỏe tinh thần', 'tuổi dậy thì'],
};
