export interface GeographyQuizGameData {
  questions: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

export const geographyQuizData: GeographyQuizGameData = {
  questions: [
    {
      question: 'Thành phố nào là thủ đô của Việt Nam?',
      options: ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Huế'],
      correct: 1,
      explanation: 'Hà Nội là thủ đô của Việt Nam từ năm 1010.',
    },
    {
      question: 'Tỉnh nào có diện tích lớn nhất Việt Nam?',
      options: ['Nghệ An', 'Gia Lai', 'Sơn La', 'Cao Bằng'],
      correct: 0,
      explanation: 'Nghệ An có diện tích 16.490,62 km².',
    },
    {
      question: 'Đâu là thành phố trực thuộc trung ương mới nhất?',
      options: ['Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Huế'],
      correct: 3,
      explanation: 'Huế trở thành thành phố trực thuộc trung ương năm 2025.',
    },
    {
      question: 'Tỉnh nào giáp biên giới với nhiều nước nhất?',
      options: ['Lào Cai', 'Quảng Ninh', 'An Giang', 'Điện Biên'],
      correct: 0,
      explanation: 'Lào Cai giáp với Trung Quốc và có đường biên giới dài nhất.',
    },
    {
      question: 'Sông nào dài nhất Việt Nam?',
      options: ['Sông Hồng', 'Sông Mê Kông', 'Sông Đồng Nai', 'Sông Thái Bình'],
      correct: 1,
      explanation: 'Sông Mê Kông có chiều dài khoảng 4.350 km, đoạn qua Việt Nam dài nhất.',
    },
    {
      question: 'Vịnh nào được UNESCO công nhận là Di sản Thiên nhiên thế giới?',
      options: ['Vịnh Nha Trang', 'Vịnh Hạ Long', 'Vịnh Cam Ranh', 'Vịnh Phan Thiết'],
      correct: 1,
      explanation: 'Vịnh Hạ Long được UNESCO công nhận năm 1994 và 2000.',
    },
    {
      question: 'Cao nguyên nào được gọi là "mái nhà Đông Dương"?',
      options: ['Cao nguyên Đà Lạt', 'Cao nguyên Kon Tum', 'Cao nguyên Mộc Châu', 'Cao nguyên Đông Triều'],
      correct: 1,
      explanation: 'Cao nguyên Kon Tum có độ cao trung bình 500-600m.',
    },
    {
      question: 'Đèo nào nổi tiếng ở miền Trung Việt Nam?',
      options: ['Đèo Hải Vân', 'Đèo Pha Đin', 'Đèo Khau Phạ', 'Đèo Cả'],
      correct: 0,
      explanation: 'Đèo Hải Vân nằm giữa Đà Nẵng và Thừa Thiên - Huế.',
    },
    {
      question: 'Hồ nào lớn nhất Việt Nam?',
      options: ['Hồ Tây', 'Hồ Hoàn Kiếm', 'Hồ Trị An', 'Hồ Ba Bể'],
      correct: 2,
      explanation: 'Hồ Trị An (Đồng Nai) có diện tích khoảng 323 km².',
    },
    {
      question: 'Đảo nào xa bờ nhất của Việt Nam?',
      options: ['Đảo Phú Quốc', 'Đảo Cát Bà', 'Đảo Trường Sa', 'Đảo Cô Tô'],
      correct: 2,
      explanation: 'Quần đảo Trường Sa cách đất liền khoảng 700-1000 km.',
    },
  ],
};
