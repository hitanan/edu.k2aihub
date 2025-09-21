import { ModuleData } from '@/types';
import { ProfessionalSoftSkillsLesson } from '@/types/lesson-base';

export const officeWorkLessons: ProfessionalSoftSkillsLesson[] = [
  {
    id: 'effective-communication',
    title: 'Giao Tiếp Hiệu Quả Trong Công Việc',
    description: 'Nắm vững các kỹ năng giao tiếp bằng lời, văn bản và phi ngôn ngữ để xây dựng mối quan hệ, giải quyết xung đột và thuyết trình một cách thuyết phục.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Áp dụng kỹ thuật lắng nghe chủ động để thấu hiểu đồng nghiệp.',
      'Soạn thảo email và báo cáo chuyên nghiệp, rõ ràng, súc tích.',
      'Sử dụng ngôn ngữ cơ thể tự tin trong các cuộc họp và thuyết trình.',
      'Cung cấp và tiếp nhận phản hồi một cách xây dựng.',
    ],
    realWorldApplications: [
      'Thuyết trình dự án thành công trước ban lãnh đạo.',
      'Giải quyết mâu thuẫn với đồng nghiệp một cách êm đẹp.',
      'Xây dựng mạng lưới quan hệ nghề nghiệp vững chắc.',
    ],
    faqs: [
        { question: 'Lắng nghe chủ động là gì?', answer: 'Là hoàn toàn tập trung vào người nói, thấu hiểu thông điệp của họ, tiếp thu thông tin và phản hồi một cách chu đáo. Nó không chỉ là im lặng mà còn bao gồm việc đặt câu hỏi làm rõ và diễn giải lại để xác nhận.' },
        { question: 'Làm thế nào để viết email chuyên nghiệp?', answer: 'Bắt đầu với dòng tiêu đề rõ ràng, sử dụng lời chào hỏi phù hợp, đi thẳng vào vấn đề, trình bày mạch lạc, kiểm tra lỗi chính tả và ngữ pháp trước khi gửi, và kết thúc bằng chữ ký chuyên nghiệp.' },
        { question: 'Ngôn ngữ cơ thể quan trọng như thế nào trong giao tiếp?', answer: 'Rất quan trọng. Giao tiếp phi ngôn ngữ chiếm một phần lớn trong việc truyền tải thông điệp. Dáng đứng thẳng, giao tiếp bằng mắt và cử chỉ tay tự tin có thể làm tăng sự tin cậy và sức thuyết phục của bạn.' },
        { question: 'Làm sao để đưa ra phản hồi mang tính xây dựng?', answer: 'Sử dụng phương pháp "Bánh mì kẹp": Bắt đầu bằng một lời khen ngợi, sau đó nêu rõ vấn đề cần cải thiện một cách cụ thể và kết thúc bằng một lời động viên hoặc gợi ý giải pháp.' },
        { question: 'Kỹ năng thuyết trình có cần thiết cho mọi vị trí không?', answer: 'Có, ở một mức độ nào đó. Dù bạn không thường xuyên thuyết trình trước đám đông, khả năng trình bày ý tưởng một cách rõ ràng và thuyết phục trong các cuộc họp nhóm nhỏ cũng là một kỹ năng cực kỳ giá trị.' },
        { question: 'Làm thế nào để vượt qua nỗi sợ nói trước đám đông?', answer: 'Chuẩn bị kỹ lưỡng nội dung, luyện tập nhiều lần, hít thở sâu trước khi bắt đầu, tập trung vào việc truyền tải giá trị cho khán giả thay vì lo lắng về bản thân, và hãy nhớ rằng một chút lo lắng là hoàn toàn bình thường.' },
        { question: 'Sự khác biệt giữa giao tiếp đồng bộ và bất đồng bộ là gì?', answer: 'Giao tiếp đồng bộ diễn ra trong thời gian thực (cuộc họp, gọi điện). Giao tiếp bất đồng bộ có độ trễ (email, tin nhắn). Hiểu khi nào nên sử dụng hình thức nào sẽ giúp tối ưu hóa hiệu quả công việc.' },
        { question: 'Làm thế nào để giao tiếp hiệu quả khi làm việc từ xa?', answer: 'Tăng cường giao tiếp bằng văn bản một cách rõ ràng, chủ động cập nhật tiến độ công việc, tận dụng các cuộc gọi video cho các vấn đề phức tạp và thể hiện sự hiện diện của bạn một cách tích cực trên các kênh chung.' },
        { question: 'Kỹ năng đàm phán có phải là một phần của giao tiếp không?', answer: 'Chắc chắn rồi. Đàm phán là một hình thức giao tiếp nâng cao nhằm đạt được một thỏa thuận. Nó đòi hỏi sự lắng nghe, khả năng trình bày lập luận và sự thấu cảm để tìm ra giải pháp đôi bên cùng có lợi.' },
        { question: 'Làm sao để xây dựng mối quan hệ tốt với đồng nghiệp?', answer: 'Hãy thể hiện sự quan tâm chân thành, sẵn sàng giúp đỡ, tôn trọng ý kiến của họ, giao tiếp cởi mở và giữ thái độ tích cực. Những cuộc trò chuyện nhỏ ngoài công việc cũng giúp thắt chặt mối quan hệ.' }
    ]
  },
  {
    id: 'time-management',
    title: 'Nghệ Thuật Quản Lý Thời Gian',
    description: 'Học các phương pháp và công cụ hiệu quả để ưu tiên công việc, tránh trì hoãn và tối đa hóa năng suất làm việc trong một ngày.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Áp dụng Ma trận Eisenhower để phân loại và ưu tiên công việc.',
      'Sử dụng kỹ thuật Pomodoro để duy trì sự tập trung cao độ.',
      'Học cách nói "không" với những yêu cầu không quan trọng.',
      'Xây dựng một lịch trình làm việc hàng tuần thực tế và hiệu quả.',
    ],
    realWorldApplications: [
      'Hoàn thành dự án đúng hạn mà không cần làm thêm giờ.',
      'Giảm căng thẳng và cảm giác quá tải trong công việc.',
      'Cân bằng giữa công việc và cuộc sống cá nhân.',
    ],
    faqs: [
        { question: 'Ma trận Eisenhower là gì?', answer: 'Là một công cụ giúp bạn phân loại công việc thành 4 nhóm dựa trên hai tiêu chí: Khẩn cấp và Quan trọng. Cụ thể: 1. Quan trọng & Khẩn cấp (Làm ngay), 2. Quan trọng & Không khẩn cấp (Lên lịch), 3. Không quan trọng & Khẩn cấp (Ủy thác), 4. Không quan trọng & Không khẩn cấp (Loại bỏ).' },
        { question: 'Kỹ thuật Pomodoro hoạt động như thế nào?', answer: 'Bạn làm việc tập trung cao độ trong một khoảng thời gian (thường là 25 phút), sau đó nghỉ ngắn 5 phút. Sau 4 phiên như vậy, bạn sẽ có một kỳ nghỉ dài hơn (15-30 phút). Phương pháp này giúp duy trì năng lượng và chống lại sự mệt mỏi tinh thần.' },
        { question: 'Làm thế nào để đối phó với sự trì hoãn?', answer: 'Hãy thử chia nhỏ công việc lớn thành các nhiệm vụ nhỏ, dễ quản lý hơn. Bắt đầu với nhiệm vụ dễ nhất để tạo đà. Đặt ra thời hạn cho bản thân và tự thưởng khi hoàn thành. Quan trọng là xác định lý do bạn trì hoãn và giải quyết nó.' },
        { question: 'Tại sao việc nói "không" lại quan trọng?', answer: 'Nói "không" với những việc không phù hợp với mục tiêu hoặc ưu tiên của bạn sẽ giúp bạn bảo vệ thời gian và năng lượng cho những gì thực sự quan trọng. Đó là một kỹ năng cần thiết để tránh bị quá tải.' },
        { question: 'Batching (làm việc theo lô) là gì?', answer: 'Là nhóm các công việc tương tự lại với nhau và thực hiện chúng trong một lần. Ví dụ, dành ra một khoảng thời gian cố định trong ngày để trả lời tất cả email thay vì trả lời lắt nhắt mỗi khi có email mới. Việc này giúp giảm thời gian chuyển đổi ngữ cảnh và tăng hiệu quả.' },
        { question: 'Quy tắc 2 phút là gì?', answer: 'Nếu một công việc chỉ mất chưa đầy 2 phút để hoàn thành, hãy làm nó ngay lập tức thay vì trì hoãn. Điều này giúp giải quyết nhanh chóng các việc nhỏ và tránh chúng tích tụ lại.' },
        { question: 'Làm thế nào để lập kế hoạch cho một ngày làm việc hiệu quả?', answer: 'Vào cuối ngày hôm trước hoặc đầu ngày hôm sau, hãy dành 10-15 phút để xác định 3 nhiệm vụ quan trọng nhất bạn cần hoàn thành. Lên lịch cho chúng vào những khoảng thời gian bạn có năng lượng cao nhất.' },
        { question: 'Sự khác biệt giữa bận rộn và hiệu quả là gì?', answer: 'Bận rộn là làm rất nhiều việc, nhưng không nhất thiết là những việc quan trọng. Hiệu quả là tập trung làm những việc đúng đắn, những việc mang lại kết quả lớn nhất và đưa bạn đến gần hơn với mục tiêu của mình.' },
        { question: 'Có nên làm nhiều việc cùng lúc (multitasking) không?', answer: 'Hầu hết các nghiên cứu cho thấy multitasking làm giảm năng suất và tăng khả năng mắc lỗi. Thay vào đó, hãy tập trung hoàn thành một việc tại một thời điểm (single-tasking) để có kết quả tốt hơn.' },
        { question: 'Làm sao để duy trì sự cân bằng giữa công việc và cuộc sống?', answer: 'Đặt ra ranh giới rõ ràng. Xác định giờ kết thúc công việc và tuân thủ nó. Dành thời gian cho sở thích, gia đình và bạn bè. Học cách ngắt kết nối hoàn toàn khỏi công việc khi bạn không làm việc.' }
    ]
  },
];

export const officeWorkModule: ModuleData = {
  id: 'office-work',
  title: 'Kỹ Năng Văn Phòng Thiết Yếu',
  description: 'Trang bị những kỹ năng mềm quan trọng nhất để thành công trong môi trường công sở hiện đại, từ giao tiếp hiệu quả đến quản lý thời gian bậc thầy.',
  category: 'Kỹ năng chuyên nghiệp',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
  color: 'from-sky-500 to-indigo-500',
  level: 'Cơ bản',
  duration: '3 giờ',
  lessons: officeWorkLessons,
  features: [
    'Kỹ thuật giao tiếp thuyết phục',
    'Phương pháp quản lý thời gian hiệu quả',
    'Bài tập tình huống thực tế',
    'Mẹo áp dụng ngay vào công việc',
  ],
  prerequisites: ['Không yêu cầu kinh nghiệm trước'],
  objectives: [
    'Tự tin giao tiếp và trình bày ý tưởng trong mọi tình huống.',
    'Tối ưu hóa năng suất làm việc và giảm căng thẳng.',
    'Xây dựng mối quan hệ đồng nghiệp tích cực và chuyên nghiệp.',
    'Phát triển nền tảng kỹ năng mềm vững chắc cho sự nghiệp.',
  ],
  careerOutcomes: [
    'Cải thiện hiệu suất làm việc ở mọi vị trí.',
    'Tăng cơ hội thăng tiến và phát triển sự nghiệp.',
    'Xây dựng hình ảnh cá nhân chuyên nghiệp và đáng tin cậy.',
  ],
  tags: ['kỹ năng mềm', 'giao tiếp', 'quản lý thời gian', 'năng suất'],
};
