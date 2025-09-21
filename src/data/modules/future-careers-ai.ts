import { BaseLessonData } from '@/types/lesson-base';
import type { CareerProfile, VietnamContext } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

export interface FutureCareersLesson extends BaseLessonData {
  vietnamContext: VietnamContext;
  careerConnect: CareerProfile;
}

export const futureCareersLessons: FutureCareersLesson[] = [
  {
    id: 'ai-impact-on-jobs',
    title: 'Tác động của AI đến Thị trường Lao động',
    description:
      'Tìm hiểu cách AI và tự động hóa đang thay đổi cấu trúc công việc, những ngành nghề nào sẽ bị ảnh hưởng và những cơ hội nào sẽ mở ra.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=S_Ld_5i2T4o',
    imageUrl: 'https://i.ytimg.com/vi/S_Ld_5i2T4o/hqdefault.jpg',
    objectives: [
      'Phân biệt được 4 làn sóng tự động hóa.',
      'Hiểu các khái niệm: Reskilling (Tái đào tạo kỹ năng) và Upskilling (Nâng cao kỹ năng).',
      'Nhận diện các ngành nghề có nguy cơ cao bị thay thế.',
      'Khám phá các vai trò công việc mới do AI tạo ra.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Phân tích Công việc của Chính bạn',
        description:
          'Phân tích các nhiệm vụ hàng ngày trong công việc (hoặc việc học) của bạn và đánh giá xem phần nào có thể được tự động hóa bởi AI.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê 5-10 nhiệm vụ chính bạn thực hiện thường xuyên.',
          'Với mỗi nhiệm vụ, đánh giá mức độ lặp lại và dựa trên dữ liệu.',
          'Sử dụng ma trận Eisenhower-AI để phân loại các nhiệm vụ.',
          'Suy nghĩ về cách AI có thể hỗ trợ hoặc thay thế từng nhiệm vụ.',
        ],
        expectedResults: 'Một bản phân tích cá nhân về tác động của AI đến vai trò hiện tại hoặc tương lai của bạn.',
      },
    ],
    realWorldApplications: [
      'Các công ty đang tái cấu trúc đội ngũ nhân sự.',
      'Người lao động chủ động học các kỹ năng mới.',
      'Sự phát triển của các nền tảng giáo dục trực tuyến.',
    ],
    vietnamContext: {
      title: 'Thị trường lao động Việt Nam trước làn sóng AI',
      content: [
        'Nhiều ngành thâm dụng lao động như dệt may, da giày đang đối mặt với áp lực tự động hóa.',
        'Sự bùng nổ của các công ty công nghệ (tech companies) và startup tạo ra nhu cầu lớn về nhân lực ngành AI, dữ liệu.',
        'Chính phủ Việt Nam đã có "Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo đến năm 2030".',
        'Các trường đại học lớn đang mở các ngành học mới liên quan đến AI và khoa học dữ liệu.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Mạnh Huy',
      title: 'AI Product Manager',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-manh-huy',
      quote:
        'Công việc của tôi là tìm hiểu các vấn đề kinh doanh và xem AI có thể giải quyết chúng như thế nào. Tôi không cần phải là người viết code giỏi nhất, nhưng phải hiểu cả công nghệ và nhu cầu của khách hàng. Kỹ năng giao tiếp và phân tích vấn đề là quan trọng nhất.',
    },
    quizzes: [
      {
        question: 'Khái niệm nào sau đây mô tả việc học một kỹ năng hoàn toàn mới để làm một công việc khác?',
        options: ['Upskilling', 'Reskilling', 'Downsizing', 'Outsourcing'],
        correctAnswerIndex: 1,
        explanation:
          'Reskilling (Tái đào tạo kỹ năng) là quá trình học các kỹ năng mới để đảm nhận một vai trò công việc khác, thường là trong cùng một công ty.',
      },
      {
        question: 'Ngành nào ở Việt Nam được dự báo sẽ chịu tác động mạnh mẽ nhất từ tự động hóa?',
        options: ['Giáo dục', 'Y tế', 'Dệt may và lắp ráp điện tử', 'Du lịch và khách sạn'],
        correctAnswerIndex: 2,
        explanation:
          'Các ngành thâm dụng lao động với các công việc có tính lặp lại cao như dệt may, lắp ráp điện tử có nguy cơ bị tự động hóa cao nhất.',
      },
    ],
    faqs: [
      {
        question: 'Reskilling và Upskilling khác nhau như thế nào?',
        answer:
          'Upskilling là nâng cao kỹ năng hiện tại để làm tốt hơn công việc đang làm, trong khi Reskilling là học những kỹ năng hoàn toàn mới để chuyển sang một vai trò hoặc công việc khác.',
      },
      {
        question: 'AI có thể lấy hết việc làm của con người không?',
        answer:
          'AI sẽ thay thế một số công việc, đặc biệt là những công việc có tính lặp lại, nhưng đồng thời cũng tạo ra nhiều công việc mới đòi hỏi kỹ năng hợp tác với AI, tư duy sáng tạo và trí tuệ cảm xúc mà máy móc chưa thể có được.',
      },
      {
        question: 'Tại sao các ngành như dệt may ở Việt Nam lại dễ bị ảnh hưởng bởi tự động hóa?',
        answer:
          'Vì đây là các ngành thâm dụng lao động, với nhiều công đoạn có tính chất lặp đi lặp lại, có thể được thay thế hiệu quả bằng robot và dây chuyền tự động để tăng năng suất và giảm chi phí.',
      },
      {
        question: 'Chiến lược quốc gia về AI của Việt Nam có mục tiêu gì?',
        answer:
          'Chiến lược này đặt mục tiêu đưa Việt Nam trở thành một trung tâm đổi mới, phát triển các giải pháp và ứng dụng AI trong khu vực ASEAN và trên thế giới, thúc đẩy ứng dụng AI trong nhiều lĩnh vực để phát triển kinh tế - xã hội.',
      },
      {
        question: 'Công việc của tôi có bị AI lấy mất không?',
        answer:
          'Câu trả lời phụ thuộc vào bản chất công việc của bạn. Nếu công việc bao gồm các nhiệm vụ lặp đi lặp lại và có thể dự đoán được, nguy cơ sẽ cao hơn. Tuy nhiên, thay vì "lấy mất", AI thường sẽ "thay đổi" công việc, tự động hóa một số phần và đòi hỏi bạn phải tập trung vào các kỹ năng khác như giám sát, ra quyết định và tương tác với khách hàng.',
      },
      {
        question: 'Những công việc mới nào sẽ xuất hiện nhờ có AI?',
        answer:
          'Nhiều công việc mới đang và sẽ xuất hiện, ví dụ: Kỹ sư Prompt (Prompt Engineer), Người huấn luyện AI (AI Trainer), Chuyên gia đạo đức AI (AI Ethicist), Người kiểm soát robot (Robot Controller), và các vai trò chuyên môn hóa việc ứng dụng AI trong các ngành cụ thể như y tế, luật, nghệ thuật.',
      },
      {
        question: 'Tôi nên làm gì nếu công việc của mình có nguy cơ cao bị tự động hóa?',
        answer:
          'Đừng hoảng sợ. Hãy chủ động: 1. Xác định những phần nào trong công việc của bạn mà con người làm tốt hơn máy móc (ví dụ: giao tiếp, sáng tạo). 2. Bắt đầu học các kỹ năng mới (Reskilling) liên quan đến việc hợp tác với AI hoặc chuyển sang một lĩnh vực an toàn hơn. 3. Xem AI như một công cụ để nâng cao hiệu suất của bạn.',
      },
      {
        question: 'Làm thế nào để một người không có nền tảng công nghệ có thể chuẩn bị cho tương lai AI?',
        answer:
          'Bạn không nhất thiết phải học lập trình. Hãy tập trung vào các kỹ năng "con người" như tư duy phản biện, giao tiếp, sáng tạo, và trí tuệ cảm xúc. Ngoài ra, hãy học cách sử dụng các công cụ AI phổ biến như một người dùng thông thạo. Khả năng ứng dụng AI vào lĩnh vực chuyên môn của bạn sẽ là một lợi thế lớn.',
      },
      {
        question: 'Tự động hóa có làm giảm lương của người lao động không?',
        answer:
          'Tác động của tự động hóa lên tiền lương là một vấn đề phức tạp. Đối với các công việc có kỹ năng thấp, tự động hóa có thể tạo ra áp lực giảm lương. Tuy nhiên, đối với những người lao động có kỹ năng làm việc và quản lý các hệ thống AI, năng suất tăng lên có thể dẫn đến mức lương cao hơn.',
      },
      {
        question: 'Chính phủ có vai trò gì trong việc hỗ trợ người lao động trong kỷ nguyên AI?',
        answer:
          'Chính phủ có vai trò quan trọng trong việc: 1. Cải cách hệ thống giáo dục để trang bị các kỹ năng phù hợp. 2. Xây dựng các chính sách hỗ trợ người lao động bị ảnh hưởng (ví dụ: các chương trình tái đào tạo, bảo hiểm thất nghiệp). 3. Đầu tư vào nghiên cứu và phát triển AI để tạo ra các ngành công nghiệp mới.',
      },
    ],
  },
  {
    id: 'future-proof-skills',
    title: "Những Kỹ năng 'Vàng' trong Kỷ nguyên AI",
    description:
      'Không phải tất cả các kỹ năng đều có thể bị thay thế. Bài học này tập trung vào những năng lực cốt lõi của con người mà AI khó có thể sao chép.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zJ-A-J_go0c',
    imageUrl: 'https://i.ytimg.com/vi/zJ-A-J_go0c/hqdefault.jpg',
    objectives: [
      'Xác định 4 nhóm kỹ năng quan trọng: Tư duy phức tạp, Trí tuệ xã hội & cảm xúc, Năng lực thích ứng, và Năng lực số.',
      'Hiểu tại sao sự sáng tạo, tư duy phản biện và trí tuệ cảm xúc lại trở nên quan trọng hơn bao giờ hết.',
      'Học các phương pháp để rèn luyện và phát triển những kỹ năng này.',
      "Xây dựng một 'bộ kỹ năng' linh hoạt cho tương lai.",
    ],
    prerequisites: ["Hoàn thành bài 'Tác động của AI'"],
    exercises: [
      {
        title: 'Xây dựng Ma trận Kỹ năng Cá nhân',
        description:
          'Tự đánh giá mức độ thành thạo của bạn đối với các kỹ năng tương lai và lập kế hoạch để cải thiện chúng.',
        difficulty: 'Trung bình',
        procedure: [
          'Vẽ một ma trận với các kỹ năng tương lai trên các trục.',
          'Đánh giá bản thân trên thang điểm từ 1 đến 10 cho mỗi kỹ năng.',
          'Xác định 2-3 kỹ năng bạn muốn tập trung phát triển nhất.',
          'Lập kế hoạch hành động cụ thể: các khóa học, sách, dự án để rèn luyện.',
        ],
        expectedResults:
          'Một kế hoạch phát triển cá nhân (Personal Development Plan) tập trung vào các kỹ năng chống lại sự thay thế của AI.',
      },
    ],
    realWorldApplications: [
      'Chương trình đào tạo nội bộ của các tập đoàn lớn.',
      'Sự thay đổi trong chương trình giảng dạy của các trường đại học.',
      'Các chuyên gia tự do (freelancer) xây dựng lợi thế cạnh tranh.',
    ],
    vietnamContext: {
      title: 'Nhu cầu kỹ năng tại Việt Nam',
      content: [
        'Các báo cáo tuyển dụng gần đây cho thấy các nhà tuyển dụng Việt Nam đánh giá cao kỹ năng mềm như giải quyết vấn đề phức tạp, làm việc nhóm và giao tiếp.',
        'Năng lực ngoại ngữ (đặc biệt là tiếng Anh) kết hợp với kỹ năng số được xem là "chìa khóa vàng" cho các công việc lương cao.',
        'Thế hệ Gen Z Việt Nam được đánh giá là có khả năng thích ứng công nghệ nhanh, nhưng cần trau dồi thêm tư duy phản biện và sự bền bỉ (resilience).',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thị Thảo',
      title: 'Head of People & Culture',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thao',
      quote:
        'Khi tuyển dụng, chúng tôi không chỉ nhìn vào bằng cấp. Chúng tôi tìm kiếm những ứng viên có khả năng học hỏi nhanh, biết cách đặt câu hỏi và có thể làm việc tốt với người khác. Một thái độ tích cực và khả năng thích ứng với thay đổi còn quý hơn kinh nghiệm ở một lĩnh vực cụ thể.',
    },
    quizzes: [
      {
        question: 'Kỹ năng nào sau đây KHÔNG thuộc nhóm năng lực cốt lõi của con người mà AI khó thay thế?',
        options: ['Trí tuệ cảm xúc', 'Tư duy phản biện', 'Nhập liệu và xử lý dữ liệu cơ bản', 'Sự sáng tạo'],
        correctAnswerIndex: 2,
        explanation:
          'Nhập liệu và xử lý dữ liệu cơ bản là các tác vụ có cấu trúc, lặp lại mà AI và các công cụ tự động hóa có thể thực hiện rất hiệu quả, thậm chí tốt hơn con người.',
      },
      {
        question: 'Theo bối cảnh Việt Nam, sự kết hợp nào được xem là "chìa khóa vàng" cho công việc lương cao?',
        options: [
          'Bằng cấp tốt và kinh nghiệm lâu năm',
          'Ngoại ngữ và kỹ năng số',
          'Làm việc chăm chỉ và trung thành',
          'Sáng tạo và nghệ thuật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong bối cảnh hội nhập và chuyển đổi số, khả năng sử dụng thành thạo ngoại ngữ (đặc biệt là tiếng Anh) và các công cụ kỹ thuật số là lợi thế cạnh tranh cực lớn trên thị trường lao động Việt Nam.',
      },
    ],
    faqs: [
      {
        question: 'Kỹ năng nào được coi là quan trọng nhất trong kỷ nguyên AI?',
        answer:
          'Không có một kỹ năng duy nhất nào là quan trọng nhất, mà là một bộ kỹ năng. Tuy nhiên, khả năng học hỏi liên tục (learnability), tư duy phản biện, và trí tuệ cảm xúc thường được xem là những năng lực cốt lõi giúp con người duy trì lợi thế so với AI.',
      },
      {
        question: 'Tại sao trí tuệ cảm xúc (EQ) lại quan trọng?',
        answer:
          'AI có thể xử lý dữ liệu logic nhưng rất yếu trong việc thấu hiểu và phản hồi lại cảm xúc của con người. Các công việc đòi hỏi sự đồng cảm, lãnh đạo, làm việc nhóm, và xây dựng mối quan hệ sẽ là "đất diễn" của con người.',
      },
      {
        question: 'Làm thế nào để rèn luyện tư duy phản biện?',
        answer:
          'Hãy tập thói quen đặt câu hỏi "Tại sao?" trước mọi thông tin bạn nhận được. Phân tích thông tin từ nhiều nguồn khác nhau, nhận diện các thành kiến (biases), và xem xét các góc nhìn đối lập trước khi đưa ra kết luận của riêng mình.',
      },
      {
        question: 'Năng lực thích ứng (Adaptability Quotient - AQ) là gì?',
        answer:
          'AQ là khả năng nhận thức, chấp nhận và thích ứng với sự thay đổi một cách hiệu quả. Trong một thế giới biến đổi nhanh chóng bởi công nghệ, người có AQ cao sẽ dễ dàng học hỏi kỹ năng mới và tìm thấy cơ hội trong sự thay đổi.',
      },
      {
        question: 'Tại sao kỹ năng giải quyết vấn đề phức tạp lại quan trọng?',
        answer:
          'AI rất giỏi trong việc giải quyết các vấn đề đã được định nghĩa rõ ràng, nhưng lại yếu thế trước các vấn đề mới, mơ hồ, và có nhiều yếu tố con người. Khả năng nhìn nhận một vấn đề từ nhiều góc độ, phân tích các yếu tố liên quan và đưa ra một giải pháp sáng tạo là một năng lực quý giá của con người.',
      },
      {
        question: 'Làm thế nào để cải thiện kỹ năng giao tiếp trong thời đại số?',
        answer:
          'Trong thời đại làm việc từ xa và giao tiếp qua màn hình, kỹ năng giao tiếp càng trở nên quan trọng. Hãy rèn luyện khả năng viết email, tin nhắn rõ ràng, súc tích. Khi họp trực tuyến, hãy tập trung lắng nghe, sử dụng ngôn ngữ cơ thể tích cực và đảm bảo thông điệp của bạn được truyền tải một cách hiệu quả.',
      },
      {
        question: 'Sự sáng tạo có thể được rèn luyện không?',
        answer:
          'Có. Sự sáng tạo không phải là một tài năng thiên bẩm mà là một kỹ năng có thể rèn luyện. Hãy thử tiếp xúc với các lĩnh vực mới, đọc sách ngoài chuyên môn của bạn, kết nối các ý tưởng tưởng chừng không liên quan, và dành thời gian để suy ngẫm và "chán". Đừng ngại thử nghiệm và thất bại.',
      },
      {
        question: 'Năng lực số (Digital Literacy) có nghĩa là gì?',
        answer:
          'Năng lực số không chỉ là biết cách sử dụng máy tính. Nó bao gồm khả năng tìm kiếm, đánh giá, và sử dụng thông tin trên môi trường số một cách hiệu quả và có đạo đức; khả năng giao tiếp và hợp tác bằng các công cụ kỹ thuật số; và nhận thức về các vấn đề an ninh mạng.',
      },
      {
        question: 'Làm thế nào để xây dựng sự bền bỉ (resilience)?',
        answer:
          'Sự bền bỉ là khả năng phục hồi sau thất bại hoặc nghịch cảnh. Hãy rèn luyện nó bằng cách: chấp nhận rằng thất bại là một phần của quá trình học hỏi, tập trung vào những gì bạn có thể kiểm soát, duy trì một mạng lưới hỗ trợ xã hội (bạn bè, gia đình), và chăm sóc sức khỏe thể chất và tinh thần của bạn.',
      },
      {
        question: 'Kỹ năng lãnh đạo sẽ thay đổi như thế nào trong kỷ nguyên AI?',
        answer:
          'Các nhà lãnh đạo tương lai sẽ cần ít tập trung hơn vào việc quản lý vi mô các tác vụ (vì AI có thể hỗ trợ việc đó) và tập trung nhiều hơn vào việc truyền cảm hứng, đặt ra tầm nhìn, xây dựng văn hóa đội nhóm, và huấn luyện (coaching) nhân viên để họ phát huy hết tiềm năng của mình khi hợp tác với công nghệ.',
      },
    ],
  },
  {
    id: 'human-ai-collaboration',
    title: 'Hợp tác Người-Máy: AI như một Đồng nghiệp',
    description:
      'Thay vì lo sợ AI, hãy học cách làm việc cùng nó. Bài học này khám phá các mô hình hợp tác hiệu quả giữa con người và trí tuệ nhân tạo.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Yed_y_93-qA',
    imageUrl: 'https://i.ytimg.com/vi/Yed_y_93-qA/hqdefault.jpg',
    objectives: [
      'Hiểu các mô hình hợp tác Người-AI: AI hỗ trợ, AI khuếch đại, và AI là đối tác.',
      "Học cách 'giao tiếp' hiệu quả với AI thông qua Prompt Engineering.",
      'Sử dụng AI để tăng cường sự sáng tạo và hiệu suất.',
      'Nhận thức về các vấn đề đạo đức và thiên bias khi làm việc với AI.',
    ],
    prerequisites: ['Hoàn thành các bài học trước'],
    exercises: [
      {
        title: 'Giải quyết vấn đề cùng AI',
        description: 'Sử dụng một công cụ AI (như ChatGPT, Copilot) để cùng giải quyết một vấn đề thực tế.',
        difficulty: 'Trung bình',
        materials: ['Tài khoản ChatGPT hoặc công cụ tương tự'],
        procedure: [
          'Chọn một vấn đề (ví dụ: lập kế hoạch cho một sự kiện, viết một bài blog).',
          'Sử dụng kỹ thuật prompt để yêu cầu AI đưa ra các ý tưởng, cấu trúc, và nội dung chi tiết.',
          'Đóng vai trò là người biên tập: chỉnh sửa, bổ sung và hoàn thiện sản phẩm cuối cùng.',
          'Phản ánh về quá trình: AI đã giúp gì? Vai trò của bạn là gì?',
        ],
        expectedResults:
          'Một sản phẩm hoàn chỉnh được tạo ra từ sự hợp tác giữa bạn và AI, cùng với một bản ghi chép về quá trình làm việc.',
      },
    ],
    realWorldApplications: [
      'Lập trình viên sử dụng GitHub Copilot để viết code nhanh hơn.',
      "Nhà văn sử dụng AI để tìm ý tưởng và vượt qua 'writer's block'.",
      'Các nhà marketing sử dụng AI để phân tích dữ liệu và tạo chiến dịch.',
    ],
    vietnamContext: {
      title: 'Ứng dụng AI trong công việc tại Việt Nam',
      content: [
        'Các lập trình viên tại các công ty như VNG, Viettel, FPT đang sử dụng các công cụ AI trợ lý lập trình để tăng năng suất.',
        'Nhiều doanh nghiệp vừa và nhỏ sử dụng chatbot (như FPT.AI, Zalo AI) để tự động hóa việc chăm sóc khách hàng.',
        'Các nhà sáng tạo nội dung trên YouTube, TikTok sử dụng AI để phân tích xu hướng, đề xuất ý tưởng và thậm chí tạo phụ đề tự động.',
        'Prompt Engineering đang dần trở thành một kỹ năng được săn đón, đặc biệt trong các lĩnh vực marketing, nội dung và thiết kế.',
      ],
    },
    careerConnect: {
      name: 'Bạn Nguyễn Hoàng An',
      title: 'AI Artist / Prompt Engineer',
      company: 'Freelancer',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoang-an',
      quote:
        'Mình dùng Midjourney và Stable Diffusion để tạo ra các tác phẩm nghệ thuật số. Công việc của mình không phải là vẽ, mà là "ra lệnh" cho AI bằng ngôn ngữ. Để có một bức ảnh đẹp, mình phải thử hàng chục, thậm chí hàng trăm câu lệnh khác nhau. Đó là sự kết hợp giữa kỹ thuật và nghệ thuật.',
    },
    quizzes: [
      {
        question: '"Prompt Engineering" là kỹ năng gì?',
        options: [
          'Lập trình một mô hình AI từ đầu.',
          'Thiết kế giao diện cho các ứng dụng AI.',
          'Viết các câu lệnh (prompt) hiệu quả để giao tiếp và điều khiển AI.',
          'Kiểm thử và sửa lỗi cho các hệ thống AI.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Prompt Engineering là nghệ thuật và khoa học của việc thiết kế các đầu vào (câu lệnh, câu hỏi) để một mô hình AI tạo ra kết quả mong muốn.',
      },
      {
        question: 'Mô hình hợp tác nào mô tả việc AI đề xuất các lựa chọn và con người đưa ra quyết định cuối cùng?',
        options: ['AI là công cụ', 'AI là đối tác', 'AI hỗ trợ (AI assistant)', 'AI tự trị hoàn toàn'],
        correctAnswerIndex: 2,
        explanation:
          'Trong mô hình AI hỗ trợ, AI hoạt động như một trợ lý thông minh, cung cấp thông tin, phân tích và các phương án để con người xem xét và đưa ra quyết định cuối cùng.',
      },
    ],
    faqs: [
      {
        question: 'Prompt Engineering là gì và tại sao nó lại quan trọng?',
        answer:
          'Prompt Engineering là nghệ thuật và khoa học của việc thiết kế các câu lệnh (prompt) để giao tiếp và ra lệnh cho các mô hình AI tạo sinh (như ChatGPT, Midjourney) một cách hiệu quả. Nó quan trọng vì chất lượng của kết quả AI tạo ra phụ thuộc rất lớn vào chất lượng của prompt đầu vào.',
      },
      {
        question: 'Làm thế nào để viết một prompt tốt?',
        answer:
          'Một prompt tốt thường bao gồm các yếu tố: **Vai trò** (ví dụ: "Hãy đóng vai một chuyên gia marketing"), **Bối cảnh** (ví dụ: "Tôi đang chuẩn bị một chiến dịch cho sản phẩm X"), **Nhiệm vụ cụ thể** (ví dụ: "Hãy viết 5 câu slogan"), và **Định dạng đầu ra** (ví dụ: "trình bày dưới dạng danh sách"). Càng cụ thể, kết quả càng tốt.',
      },
      {
        question: 'Thiên vị (bias) trong AI là gì và tại sao chúng ta cần quan tâm?',
        answer:
          'Thiên vị trong AI xảy ra khi mô hình đưa ra các kết quả không công bằng hoặc mang tính định kiến, thường là do nó được huấn luyện trên bộ dữ liệu có sẵn những định kiến đó. Chúng ta cần quan tâm vì AI có thể khuếch đại các định kiến xã hội, dẫn đến các quyết định bất công trong tuyển dụng, cho vay, hoặc thậm chí là pháp lý.',
      },
      {
        question: 'AI có thể thay thế hoàn toàn sự sáng tạo của con người không?',
        answer:
          'Không. AI là một công cụ khuếch đại sự sáng tạo cực kỳ mạnh mẽ, nhưng nó không có ý thức, trải nghiệm sống, hay cảm xúc thực sự - những yếu tố cốt lõi của sự sáng tạo độc đáo. Vai trò của con người chuyển từ việc "tạo ra từ đầu" sang "định hướng, lựa chọn, và tinh chỉnh" các ý tưởng mà AI đề xuất.',
      },
      {
        question: 'Sự khác biệt giữa AI tạo sinh (Generative AI) và AI phân tích (Analytical AI) là gì?',
        answer:
          'AI phân tích (ví dụ: hệ thống gợi ý sản phẩm của Amazon) được thiết kế để phân tích dữ liệu và đưa ra dự đoán hoặc phân loại. AI tạo sinh (ví dụ: ChatGPT, Midjourney) được thiết kế để tạo ra nội dung mới, như văn bản, hình ảnh, hoặc âm nhạc, dựa trên dữ liệu nó đã học.',
      },
      {
        question: 'Mô hình "Human-in-the-loop" là gì?',
        answer:
          'Đây là một mô hình hợp tác trong đó con người can thiệp vào quá trình làm việc của AI ở những điểm quan trọng. Con người có thể cung cấp dữ liệu huấn luyện, kiểm tra và sửa lỗi các kết quả của AI, hoặc đưa ra quyết định cuối cùng trong các trường hợp phức tạp. Điều này giúp cải thiện độ chính xác và độ tin cậy của hệ thống AI.',
      },
      {
        question: 'Làm thế nào để tránh việc quá phụ thuộc vào AI?',
        answer:
          'Hãy xem AI như một người trợ lý hoặc một công cụ, không phải là người thay thế cho tư duy của bạn. Luôn kiểm tra lại thông tin mà AI cung cấp. Sử dụng nó để tự động hóa các công việc nhàm chán, giải phóng thời gian cho bạn để tập trung vào tư duy chiến lược, sáng tạo và giải quyết vấn đề.',
      },
      {
        question: 'Làm thế nào để bắt đầu học Prompt Engineering?',
        answer:
          'Cách tốt nhất để học là thực hành. Bắt đầu sử dụng các công cụ như ChatGPT. Hãy thử nghiệm với các câu lệnh khác nhau để xem kết quả thay đổi như thế nào. Có rất nhiều tài nguyên và cộng đồng trực tuyến chia sẻ các kỹ thuật và ví dụ về prompt hiệu quả mà bạn có thể học hỏi.',
      },
      {
        question: 'AI có thể giúp tôi học một kỹ năng mới không?',
        answer:
          'Chắc chắn rồi. AI là một công cụ học tập tuyệt vời. Bạn có thể yêu cầu nó giải thích các khái niệm phức tạp một cách đơn giản, tạo ra các lộ trình học tập, tóm tắt các bài báo khoa học, hoặc thậm chí đóng vai một người đối thoại để bạn thực hành một ngôn ngữ mới.',
      },
      {
        question: 'Trong tương lai, vai trò quan trọng nhất của con người khi làm việc với AI là gì?',
        answer:
          'Vai trò quan-trọng-nhất có thể là vai trò của người "nhạc trưởng" hoặc "người giám sát". Con người sẽ là người đặt ra mục tiêu, xác định các vấn đề cần giải quyết, đánh giá các kết quả của AI dựa trên các tiêu chuẩn đạo đức và bối cảnh thực tế, và đưa ra quyết định cuối cùng. Về cơ bản, con người cung cấp "trí tuệ" và "sự phán đoán" mà máy móc còn thiếu.',
      },
    ],
  },
];

export const futureCareersModuleData: ModuleData<FutureCareersLesson> = {
  id: 'future-careers-ai',
  title: 'Định hướng Nghề nghiệp trong Kỷ nguyên AI',
  description:
    'Khám phá cách AI đang định hình lại thị trường lao động, những kỹ năng cần thiết để thành công và cách hợp tác hiệu quả với AI để phát triển sự nghiệp.',
  image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
  category: 'AI',
  basePath: '/learning/future-careers-ai',
  lessons: futureCareersLessons,
  features: [
    'Tác động của AI đến việc làm',
    "Kỹ năng 'vàng' cho tương lai",
    'Hợp tác hiệu quả Người-Máy',
    'Xây dựng lộ trình sự nghiệp cá nhân',
  ],
  relatedModules: [K2Module.AI, K2Module.CareerDevelopment, K2Module.EmotionalIntelligence],
};
