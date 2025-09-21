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
        {
          question: 'Giọng nói của nam giới thay đổi như thế nào ở tuổi dậy thì?',
          answer: 'Dây thanh quản của nam giới dài ra và dày lên do tác động của testosterone, khiến giọng nói trở nên trầm hơn. Quá trình này gọi là "vỡ giọng" và có thể diễn ra từ từ hoặc đột ngột.'
        },
        {
          question: 'Nữ giới bắt đầu có kinh nguyệt có phải là dấu hiệu đáng lo không?',
          answer: 'Không hề. Kinh nguyệt là một dấu hiệu hoàn toàn bình thường, cho thấy cơ thể bạn nữ đang phát triển và có khả năng sinh sản. Chu kỳ kinh nguyệt có thể không đều trong vài năm đầu và đó cũng là điều bình thường.'
        },
        {
          question: 'Tại sao mình lại cao lớn nhanh hơn các bạn khác (hoặc ngược lại)?',
          answer: 'Mỗi người có một tốc độ phát triển riêng. Thời điểm bắt đầu và tốc độ của tuổi dậy thì có thể khác nhau rất nhiều giữa các cá nhân, phụ thuộc vào di truyền, dinh dưỡng và các yếu tố khác. Đừng so sánh mình với người khác.'
        },
        {
          question: 'Làm gì khi cảm thấy tự ti về những thay đổi của cơ thể?',
          answer: 'Hãy nhớ rằng mọi người đều trải qua những thay đổi này. Trò chuyện với người lớn mà bạn tin tưởng (cha mẹ, anh chị), tập trung vào những điểm mạnh của bản thân không liên quan đến ngoại hình, và tham gia các hoạt động thể chất để cảm thấy khỏe mạnh và tự tin hơn.'
        },
        {
          question: 'Mồ hôi và mùi cơ thể có phải là vấn đề lớn không?',
          answer: 'Tuyến mồ hôi hoạt động mạnh hơn ở tuổi dậy thì, gây ra mùi cơ thể. Đây là điều bình thường. Tắm rửa thường xuyên, sử dụng sản phẩm khử mùi, và mặc quần áo thoáng mát, sạch sẽ sẽ giúp bạn kiểm soát vấn đề này.'
        },
        {
          question: 'Có phải tất cả mọi người đều trải qua tuổi dậy thì cùng một lúc không?',
          answer: 'Không. Tuổi dậy thì có thể bắt đầu sớm nhất là 8 tuổi ở nữ và 9 tuổi ở nam, hoặc muộn hơn nhiều. Phạm vi "bình thường" rất rộng, vì vậy không cần lo lắng nếu bạn phát triển sớm hơn hoặc muộn hơn bạn bè.'
        },
        {
          question: 'Những giấc mơ "ướt" (mộng tinh) ở nam giới có bình thường không?',
          answer: 'Hoàn toàn bình thường. Mộng tinh là hiện tượng tinh dịch được giải phóng trong khi ngủ, là một dấu hiệu cho thấy hệ sinh sản của nam giới đang hoạt động. Đây là một phần tự nhiên của quá trình trưởng thành.'
        },
        {
          question: 'Làm thế nào để nói chuyện với bố mẹ về những thay đổi của tuổi dậy thì?',
          answer: 'Có thể sẽ hơi ngượng ngùng, nhưng bố mẹ là nguồn thông tin và hỗ trợ tuyệt vời. Bạn có thể thử bắt đầu bằng cách nói "Con có một vài câu hỏi về tuổi dậy thì..." hoặc viết ra những thắc mắc của mình. Hãy nhớ rằng họ cũng đã từng trải qua giai đoạn này.'
        }
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
        {
          question: 'Thuốc tránh thai khẩn cấp có nên được sử dụng thường xuyên không?',
          answer: 'Không. Thuốc tránh thai khẩn cấp chỉ nên được dùng trong trường hợp "bất khả kháng" (ví dụ: bao cao su bị rách). Nó có hiệu quả thấp hơn và nhiều tác dụng phụ hơn so với các biện pháp tránh thai thường xuyên. Lạm dụng thuốc có thể ảnh hưởng đến chu kỳ kinh nguyệt.'
        },
        {
          question: 'STIs (bệnh lây truyền qua đường tình dục) có chữa được không?',
          answer: 'Nhiều STIs do vi khuẩn gây ra (như lậu, giang mai, chlamydia) có thể chữa khỏi hoàn toàn bằng kháng sinh nếu được phát hiện sớm. Tuy nhiên, các STIs do virus gây ra (như HIV, HPV, herpes) thì không thể chữa khỏi hoàn toàn mà chỉ có thể kiểm soát triệu chứng.'
        },
        {
          question: 'Làm thế nào để biết mình có bị nhiễm STI hay không?',
          answer: 'Nhiều STIs không có triệu chứng rõ ràng, đặc biệt là ở giai đoạn đầu. Cách duy nhất để biết chắc chắn là đi xét nghiệm. Nếu bạn đã có quan hệ tình dục, hãy cân nhắc việc kiểm tra sức khỏe định kỳ.'
        },
        {
          question: 'Tiêm vắc-xin HPV có tác dụng gì?',
          answer: 'Vắc-xin HPV giúp phòng ngừa virus Human Papillomavirus, nguyên nhân chính gây ra ung thư cổ tử cung ở nữ giới và một số bệnh ung thư khác ở cả hai giới. Vắc-xin được khuyến nghị cho cả nam và nữ, lý tưởng nhất là trước khi bắt đầu có hoạt động tình dục.'
        },
        {
          question: 'Tình dục an toàn không chỉ là về thể chất, đúng không?',
          answer: 'Đúng vậy. Tình dục an toàn còn bao gồm cả sự an toàn về mặt cảm xúc. Điều này có nghĩa là cả hai người đều cảm thấy được tôn trọng, thoải mái, không bị ép buộc, và có thể giao tiếp cởi mở về mong muốn cũng như giới hạn của mình.'
        },
        {
          question: 'Tại sao giáo dục giới tính lại quan trọng?',
          answer: 'Giáo dục giới tính toàn diện cung cấp cho bạn kiến thức khoa học để hiểu về cơ thể mình, đưa ra các quyết định có trách nhiệm, xây dựng các mối quan hệ lành mạnh, và bảo vệ sức khỏe của bản thân cũng như bạn tình.'
        },
        {
          question: 'Nếu cảm thấy không sẵn sàng cho quan hệ tình dục, tôi nên làm gì?',
          answer: 'Hoàn toàn ổn khi cảm thấy chưa sẵn sàng. Quyết định quan hệ tình dục là một quyết định cá nhân quan trọng. Bạn có quyền nói "không" hoặc "chưa phải bây giờ" bất cứ lúc nào mà không cần phải giải thích. Một người bạn tình tôn trọng bạn sẽ chấp nhận quyết định đó.'
        },
        {
          question: 'Thế nào là một mối quan hệ lãng mạn lành mạnh?',
          answer: 'Một mối quan hệ lành mạnh được xây dựng trên sự tin tưởng, tôn trọng lẫn nhau, giao tiếp cởi mở, và hỗ trợ. Cả hai người đều cảm thấy an toàn, được là chính mình, và có không gian riêng cho cuộc sống cá nhân của họ.'
        }
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
        {
          question: 'Làm thế nào để phân biệt giữa "buồn" và "trầm cảm"?',
          answer: 'Buồn là một cảm xúc bình thường, thường có lý do cụ thể và sẽ qua đi. Trầm cảm là một rối loạn tâm trạng kéo dài (ít nhất 2 tuần), ảnh hưởng tiêu cực đến mọi mặt của cuộc sống (ăn, ngủ, học tập, các mối quan hệ) và thường không có lý do rõ ràng.'
        },
        {
          question: 'Hít thở sâu giúp giảm stress như thế nào?',
          answer: 'Khi bạn hít thở sâu và chậm, bạn đang kích hoạt hệ thần kinh phó giao cảm, hệ thống "nghỉ ngơi và tiêu hóa" của cơ thể. Điều này giúp làm chậm nhịp tim, giảm huyết áp và gửi tín hiệu đến não bộ rằng bạn đang an toàn, từ đó làm dịu cảm giác căng thẳng.'
        },
        {
          question: 'Tại sao ngủ đủ giấc lại quan trọng với sức khỏe tinh thần?',
          answer: 'Giấc ngủ là thời gian để não bộ xử lý thông tin, củng cố trí nhớ và điều chỉnh cảm xúc. Thiếu ngủ có thể làm tăng mức độ hormone gây stress, khiến bạn dễ cáu kỉnh, khó tập trung và dễ bị lo âu, trầm cảm hơn.'
        },
        {
          question: 'Mạng xã hội ảnh hưởng đến sức khỏe tinh thần của thanh thiếu niên như thế nào?',
          answer: 'Mạng xã hội có thể gây ra áp lực phải thể hiện một cuộc sống hoàn hảo, dẫn đến sự so sánh xã hội và cảm giác tự ti. Nó cũng có thể gây nghiện và làm gián đoạn giấc ngủ. Tuy nhiên, nó cũng có thể là nơi để kết nối và tìm kiếm sự hỗ trợ nếu được sử dụng một cách lành mạnh.'
        },
        {
          question: 'Khi nào tôi nên tìm đến một chuyên gia tâm lý?',
          answer: 'Nếu bạn cảm thấy buồn bã, lo âu hoặc trống rỗng trong một thời gian dài, và những cảm xúc này ảnh hưởng đến việc học, các mối quan hệ hoặc các hoạt động hàng ngày của bạn, đó là lúc nên tìm kiếm sự giúp đỡ chuyên nghiệp. Nói chuyện với chuyên gia không phải là dấu hiệu của sự yếu đuối, mà là một hành động dũng cảm để chăm sóc bản thân.'
        },
        {
          question: 'Viết nhật ký có thực sự giúp ích không?',
          answer: 'Có. Viết ra những suy nghĩ và cảm xúc của bạn giúp bạn sắp xếp chúng một cách rõ ràng hơn, nhìn nhận vấn đề từ một góc độ khác và giải tỏa những cảm xúc bị dồn nén. Nó giống như việc có một cuộc trò chuyện riêng tư với chính mình.'
        },
        {
          question: 'Tập thể dục có liên quan gì đến sức khỏe tinh thần?',
          answer: 'Rất liên quan. Khi tập thể dục, cơ thể giải phóng endorphins, được gọi là "hormone hạnh phúc", giúp cải thiện tâm trạng và giảm đau. Vận động cũng giúp giảm mức độ hormone gây stress và cải thiện chất lượng giấc ngủ.'
        },
        {
          question: 'Làm thế nào để xây dựng khả năng chống chịu (resilience) trước khó khăn?',
          answer: 'Khả năng chống chịu được xây dựng qua thời gian. Hãy tập trung vào việc xây dựng các mối quan hệ hỗ trợ, duy trì một cái nhìn lạc quan nhưng thực tế, học hỏi từ những sai lầm, và chăm sóc sức khỏe thể chất của bạn. Mỗi lần vượt qua một thử thách nhỏ, bạn lại trở nên mạnh mẽ hơn.'
        }
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
