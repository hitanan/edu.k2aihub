// Word Builder Game Data
export interface WordBuilderGameData {
  categories: Array<{
    name: string;
    description: string;
    words: Array<{
      word: string;
      definition: string;
      difficulty: string;
      hints: string[];
      category: string;
    }>;
  }>;
  gameTypes: Array<{
    type: string;
    name: string;
    description: string;
    rules: string[];
  }>;
}

export const WORD_BUILDER_DATA: WordBuilderGameData = {
  categories: [
    {
      name: 'Công nghệ',
      description: 'Từ vựng liên quan đến công nghệ và máy tính',
      words: [
        {
          word: 'THUẬT TOÁN',
          definition: 'Tập hợp các bước để giải quyết một vấn đề',
          difficulty: 'Trung bình',
          hints: ['Bắt đầu bằng T', 'Có 10 chữ cái', 'Dùng trong lập trình'],
          category: 'Lập trình',
        },
        {
          word: 'DỮ LIỆU',
          definition: 'Thông tin được lưu trữ và xử lý',
          difficulty: 'Cơ bản',
          hints: ['Bắt đầu bằng D', 'Có 7 chữ cái', 'Quan trọng trong IT'],
          category: 'Cơ sở dữ liệu',
        },
      ],
    },
    {
      name: 'Khoa học',
      description: 'Từ vựng khoa học và nghiên cứu',
      words: [
        {
          word: 'THỰC NGHIỆM',
          definition: 'Quá trình kiểm tra một giả thuyết',
          difficulty: 'Trung bình',
          hints: ['Bắt đầu bằng T', 'Phương pháp khoa học', 'Có 11 chữ cái'],
          category: 'Phương pháp khoa học',
        },
      ],
    },
  ],
  gameTypes: [
    {
      type: 'hangman',
      name: 'Đoán từ',
      description: 'Đoán từ bằng cách chọn từng chữ cái',
      rules: [
        'Bạn có 6 lần đoán sai',
        'Chọn từng chữ cái để hoàn thành từ',
        'Sử dụng gợi ý nếu cần thiết',
        'Hoàn thành từ để thắng',
      ],
    },
  ],
};
