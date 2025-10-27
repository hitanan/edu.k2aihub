// AI Ethics Dilemma Game Data
export interface AIEthicsDilemmaGameData {
  scenarios: Array<{
    dilemma: string;
    options: string[];
    considerations: string[];
    correctApproach: number;
    explanation: string;
  }>;
}

export const aiEthicsDilemmaGameData: AIEthicsDilemmaGameData = {
  scenarios: [
    {
      dilemma: 'AI tự lái có nên ưu tiên cứu tài xế hay người đi bộ?',
      options: [
        'Luôn cứu tài xế (người mua xe)',
        'Cứu nhiều người nhất có thể',
        'Để người dùng tự quyết định trước',
        'Chọn ngẫu nhiên để công bằng',
      ],
      considerations: ['Trách nhiệm pháp lý', 'Giá trị sống người', 'Quyền lựa chọn'],
      correctApproach: 1,
      explanation: 'Việc cứu nhiều người nhất là nguyên tắc utilitarian được nhiều nhà đạo đức học ủng hộ.',
    },
    {
      dilemma: 'AI nhận diện khuôn mặt có nên được sử dụng ở trường học?',
      options: [
        'Có, để đảm bảo an ninh',
        'Không, vi phạm quyền riêng tư',
        'Chỉ trong trường hợp khẩn cấp',
        'Để phụ huynh quyết định',
      ],
      considerations: ['An ninh học sinh', 'Quyền riêng tư', 'Sự đồng ý'],
      correctApproach: 2,
      explanation: 'Cân bằng giữa an ninh và quyền riêng tư, chỉ sử dụng khi thực sự cần thiết.',
    },
    {
      dilemma: 'AI có nên thay thế giáo viên trong việc chấm điểm bài thi?',
      options: [
        'Có, AI công bằng và khách quan hơn',
        'Không, thiếu sự hiểu biết con người',
        'Kết hợp AI và giáo viên',
        'Chỉ cho câu hỏi trắc nghiệm',
      ],
      considerations: ['Độ chính xác', 'Yếu tố con người', 'Sự công bằng'],
      correctApproach: 2,
      explanation: 'Kết hợp AI và giáo viên tận dụng được ưu điểm của cả hai, đảm bảo chính xác và nhân văn.',
    },
    {
      dilemma: 'Công ty công nghệ có nên chia sẻ dữ liệu cá nhân để phát triển AI y tế?',
      options: [
        'Có, vì lợi ích chung cho sức khỏe',
        'Không, vi phạm quyền riêng tư',
        'Chỉ với sự đồng ý rõ ràng',
        'Chỉ dữ liệu đã ẩn danh',
      ],
      considerations: ['Lợi ích y tế', 'Quyền riêng tư', 'Sự đồng ý'],
      correctApproach: 2,
      explanation: 'Sự đồng ý rõ ràng của người dùng là cơ sở đạo đức quan trọng nhất.',
    },
    {
      dilemma: 'AI có nên được sử dụng để quyết định ai được vay tiền ngân hàng?',
      options: [
        'Có, AI loại bỏ thiên kiến',
        'Không, có thể phân biệt đối xử',
        'Chỉ như một tham khảo',
        'Cần giám sát con người',
      ],
      considerations: ['Công bằng xã hội', 'Thiên kiến thuật toán', 'Trách nhiệm'],
      correctApproach: 3,
      explanation: 'Giám sát con người đảm bảo AI không tạo ra phân biệt đối xử và quyết định công bằng.',
    },
    {
      dilemma: 'Chatbot AI có nên tiết lộ là robot khi trò chuyện với người dùng?',
      options: [
        'Có, để đảm bảo minh bạch',
        'Không, để trải nghiệm tự nhiên',
        'Tùy thuộc vào ngữ cảnh',
        'Chỉ khi người dùng hỏi',
      ],
      considerations: ['Minh bạch', 'Trải nghiệm người dùng', 'Tin cậy'],
      correctApproach: 0,
      explanation: 'Minh bạch là nguyên tắc đạo đức cơ bản, người dùng có quyền biết họ đang tương tác với AI.',
    },
  ],
};
