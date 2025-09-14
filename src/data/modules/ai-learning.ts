import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const aiLearningModule: ModuleData = {
  id: K2Module.AILearning,
  title: 'Học máy và AI',
  subtitle: 'Nền tảng Trí tuệ Nhân tạo và Học máy',
  description:
    'Khám phá các khái niệm cơ bản về trí tuệ nhân tạo và học máy, từ lịch sử, các loại hình AI, đến các thuật toán học máy phổ biến và ứng dụng thực tế của chúng.',
  category: 'Công nghệ',
  icon: '🤖',
  color: 'from-blue-500 to-cyan-500',
  level: 'Cơ bản',
  duration: '4-5 giờ',
  lessons: [
    {
      id: 'intro-to-ai',
      title: 'Giới thiệu về Trí tuệ Nhân tạo (AI)',
      description: 'Tìm hiểu về lịch sử, các loại hình và những khái niệm cốt lõi của trí tuệ nhân tạo.',
      duration: '75 phút',
      difficulty: 'Cơ bản',
      videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg',
      objectives: [
        'Hiểu định nghĩa về Trí tuệ Nhân tạo và phân biệt các loại AI.',
        'Nắm được các mốc lịch sử quan trọng trong sự phát triển của AI.',
        'Nhận biết các ứng dụng của AI trong cuộc sống hàng ngày.',
        'Thảo luận về các tác động xã hội và đạo đức của AI.',
      ],
      prerequisites: ['Không yêu cầu kiến thức chuyên sâu về công nghệ.'],
      exercises: [
        {
          title: 'Brainstorm: AI xung quanh ta',
          description: 'Liệt kê và thảo luận về các ứng dụng AI mà bạn gặp hàng ngày.',
          difficulty: 'Cơ bản',
          procedure: [
            'Chia nhóm và liệt kê các ví dụ về AI trong 5 phút (ví dụ: trợ lý ảo, gợi ý phim, xe tự lái).',
            'Thảo luận về cách mỗi ứng dụng AI này hoạt động ở mức độ cơ bản.',
            'Trình bày kết quả và so sánh giữa các nhóm.',
          ],
          expectedResults: 'Học viên nhận ra sự hiện diện rộng rãi của AI và có cái nhìn trực quan về công nghệ này.',
        },
      ],
      realWorldApplications: [
        'Trợ lý ảo (Siri, Google Assistant) điều khiển thiết bị và trả lời câu hỏi.',
        'Hệ thống gợi ý của Netflix, Spotify, và Amazon.',
        'Nhận dạng khuôn mặt để mở khóa điện thoại và gắn thẻ ảnh.',
        'Các công cụ dịch thuật tự động như Google Translate.',
      ],
      vietnamContext: {
        title: 'Dấu ấn AI tại Việt Nam',
        content: [
          'VinAI (thuộc Vingroup) là một trong những viện nghiên cứu AI hàng đầu khu vực, có nhiều công trình được công bố tại các hội nghị quốc tế.',
          'FPT.AI cung cấp một hệ sinh thái các sản phẩm AI cho doanh nghiệp Việt Nam, từ chatbot đến nhận dạng giọng nói.',
          'Chính phủ Việt Nam đã phê duyệt Chiến lược Quốc gia về AI, đặt mục tiêu đưa Việt Nam trở thành một trung tâm AI trong khu vực ASEAN vào năm 2030.',
        ],
      },
      careerConnect: {
        name: 'TS. Bùi Hải Hưng',
        title: 'Viện trưởng',
        company: 'VinAI Research',
        imageUrl: 'https://i.pravatar.cc/150?u=bui-hai-hung',
        quote:
          'AI không chỉ là một ngành công nghệ, nó là một cuộc cách mạng. Việt Nam có cơ hội lớn để tham gia và định hình cuộc cách mạng này.',
      },
      quizzes: [
        {
          question: 'AI hẹp (Narrow AI) là gì?',
          options: [
            'Một AI có thể thực hiện mọi nhiệm vụ trí tuệ như con người',
            'Một AI được thiết kế để thực hiện một nhiệm vụ cụ thể rất tốt',
            'Một AI có ý thức và cảm xúc',
            'Một thuật toán đơn giản',
          ],
          correctAnswerIndex: 1,
          explanation:
            'AI hẹp, hay AI yếu, là loại AI chúng ta tương tác hàng ngày. Nó được chuyên môn hóa cho một nhiệm vụ duy nhất, ví dụ như chơi cờ vua hoặc nhận dạng giọng nói.',
        },
      ],
      faqs: [
        {
          question: 'AI có thực sự "thông minh" như con người không?',
          answer:
            'Hiện tại, AI chỉ "thông minh" trong các nhiệm vụ rất cụ thể mà nó được huấn luyện. Nó không có sự hiểu biết, ý thức, hay khả năng suy luận linh hoạt như con người. AI hiện nay là công cụ nhận dạng mẫu hình cực kỳ mạnh mẽ, không phải là một bộ não điện tử.',
        },
        {
          question: 'Học về AI có khó không?',
          answer:
            'Học để trở thành một kỹ sư AI chuyên nghiệp đòi hỏi kiến thức sâu về toán và lập trình. Tuy nhiên, học để hiểu các khái niệm cơ bản và cách ứng dụng AI thì hoàn toàn có thể tiếp cận được với mọi người, tương tự như việc học cách sử dụng máy tính hay internet.',
        },
      ],
    },
    {
      id: 'machine-learning-basics',
      title: 'Cơ bản về Học máy (Machine Learning)',
      description:
        'Khám phá các khái niệm cốt lõi và các loại hình học máy phổ biến như học có giám sát, không giám sát và học tăng cường.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
      objectives: [
        'Định nghĩa được Học máy và mối quan hệ của nó với AI.',
        'Phân biệt được ba loại học máy chính: có giám sát, không giám sát và học tăng cường.',
        'Hiểu được quy trình cơ bản của một dự án học máy: từ thu thập dữ liệu đến đánh giá mô hình.',
        'Nhận biết các ví dụ thực tế cho từng loại học máy.',
      ],
      prerequisites: ['Hoàn thành bài "Giới thiệu về Trí tuệ Nhân tạo (AI)".'],
      exercises: [
        {
          title: 'Phân loại các bài toán học máy',
          description: 'Cho một danh sách các vấn đề thực tế, hãy xác định chúng thuộc loại học máy nào.',
          difficulty: 'Trung bình',
          procedure: [
            'Xem xét danh sách các vấn đề: 1. Dự đoán giá nhà dựa trên diện tích và vị trí. 2. Phân nhóm khách hàng dựa trên hành vi mua sắm. 3. Huấn luyện một robot chơi game.',
            'Thảo luận và xác định mỗi vấn đề thuộc loại học có giám sát, không giám sát, hay học tăng cường.',
            'Giải thích lý do cho sự lựa chọn của bạn.',
          ],
          expectedResults:
            'Học viên có thể phân biệt rõ ràng giữa các loại hình học máy và nhận ra ứng dụng của chúng.',
        },
      ],
      realWorldApplications: [
        'Học có giám sát: Hệ thống lọc email spam, dự đoán giá cổ phiếu.',
        'Học không giám sát: Phân khúc thị trường, hệ thống gợi ý sản phẩm tương tự.',
        'Học tăng cường: Xe tự lái, các chương trình chơi cờ vây (AlphaGo), tối ưu hóa logistics.',
      ],
      vietnamContext: {
        title: 'Ứng dụng Học máy tại Việt Nam',
        content: [
          'Các công ty thương mại điện tử như Tiki, Shopee sử dụng học máy để gợi ý sản phẩm và cá nhân hóa trải nghiệm mua sắm.',
          'Các ngân hàng Việt Nam áp dụng học máy để phát hiện gian lận thẻ tín dụng và đánh giá rủi ro tín dụng.',
          'Trong nông nghiệp, học máy được dùng để phân tích hình ảnh từ drone, giúp dự báo sâu bệnh và tối ưu hóa năng suất cây trồng.',
        ],
      },
      careerConnect: {
        name: 'Anh Phạm Kim Cương',
        title: 'Giám đốc Khoa học Dữ liệu',
        company: 'Tiki',
        imageUrl: 'https://i.pravatar.cc/150?u=pham-kim-cuong',
        quote:
          'Học máy là trái tim của nền kinh tế số. Dữ liệu là dầu mỏ mới, và học máy chính là nhà máy lọc dầu, biến dữ liệu thô thành những sản phẩm có giá trị.',
      },
      quizzes: [
        {
          question: 'Bài toán "dự đoán email là spam hay không spam" thuộc loại học máy nào?',
          options: ['Học có giám sát', 'Học không giám sát', 'Học tăng cường', 'Không thuộc loại nào'],
          correctAnswerIndex: 0,
          explanation:
            'Đây là bài toán học có giám sát (cụ thể là phân loại) vì mô hình được huấn luyện trên dữ liệu đã được gán nhãn (email spam và không spam) để học cách phân biệt.',
        },
        {
          question: 'AlphaGo, chương trình chơi cờ vây của Google, chủ yếu sử dụng loại học máy nào?',
          options: ['Học có giám sát', 'Học không giám sát', 'Học tăng cường', 'Học bán giám sát'],
          correctAnswerIndex: 2,
          explanation:
            'AlphaGo sử dụng học tăng cường. Nó học bằng cách tự chơi hàng triệu ván cờ và nhận "phần thưởng" cho các nước đi dẫn đến chiến thắng, từ đó tự cải thiện chiến thuật của mình.',
        },
      ],
      faqs: [
        {
          question: 'Học máy (Machine Learning) và Trí tuệ nhân tạo (AI) khác nhau như thế nào?',
          answer:
            'Trí tuệ nhân tạo là một lĩnh vực rộng lớn hơn, bao gồm ý tưởng về việc tạo ra những cỗ máy có thể suy nghĩ hoặc hành động như con người. Học máy là một nhánh con của AI, là một phương pháp cụ thể để đạt được AI bằng cách cho phép máy tính tự học hỏi từ dữ liệu mà không cần được lập trình một cách tường minh.',
        },
        {
          question: 'Dữ liệu có vai trò gì trong học máy?',
          answer:
            'Dữ liệu là yếu tố sống còn. Trong học máy, dữ liệu chính là "sách giáo khoa" để mô hình học hỏi. Chất lượng và số lượng của dữ liệu quyết định trực tiếp đến hiệu suất và độ chính xác của mô hình. Dữ liệu kém hoặc thiên vị sẽ tạo ra một mô hình tồi.',
        },
      ],
    },
  ],
};
