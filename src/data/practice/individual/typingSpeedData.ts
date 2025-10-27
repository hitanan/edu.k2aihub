// Typing Speed Game Data
export interface TypingSpeedGameData {
  texts: Array<{
    id: string;
    title: string;
    content: string;
    difficulty: string;
    estimatedWPM: number;
    category: string;
    source?: string;
  }>;
  wordLists: {
    common: string[];
    programming: string[];
    vietnamese: string[];
    technical: string[];
  };
  challenges: Array<{
    name: string;
    description: string;
    targetWPM: number;
    targetAccuracy: number;
    timeLimit: number;
    textType: string;
  }>;
}

export const TYPING_SPEED_DATA: TypingSpeedGameData = {
  texts: [
    {
      id: 'intro-basic',
      title: 'Giới thiệu cơ bản',
      content:
        'Chào mừng bạn đến với Interactive Practice luyện tập đánh máy. Hãy gõ từng từ một cách chính xác và nhanh chóng.',
      difficulty: 'Cơ bản',
      estimatedWPM: 20,
      category: 'Giới thiệu',
    },
    {
      id: 'vietnam-intro',
      title: 'Việt Nam đất nước',
      content:
        'Việt Nam là một đất nước xinh đẹp nằm ở Đông Nam Á. Chúng ta có bờ biển dài và nhiều danh lam thắng cảnh.',
      difficulty: 'Cơ bản',
      estimatedWPM: 25,
      category: 'Địa lý',
    },
    {
      id: 'programming-intro',
      title: 'Lập trình căn bản',
      content: 'function hello() { console.log("Hello World"); } const message = "Xin chào thế giới"; let count = 0;',
      difficulty: 'Trung bình',
      estimatedWPM: 35,
      category: 'Lập trình',
    },
  ],
  wordLists: {
    common: [
      'và',
      'của',
      'có',
      'trong',
      'một',
      'được',
      'là',
      'để',
      'với',
      'các',
      'người',
      'về',
      'đây',
      'tôi',
      'bạn',
      'họ',
      'chúng',
      'khi',
      'nào',
      'như',
    ],
    programming: [
      'function',
      'const',
      'let',
      'var',
      'if',
      'else',
      'for',
      'while',
      'return',
      'class',
      'import',
      'export',
      'async',
      'await',
      'try',
      'catch',
    ],
    vietnamese: [
      'xin chào',
      'cảm ơn',
      'hẹn gặp lại',
      'học tập',
      'công việc',
      'gia đình',
      'bạn bè',
      'thành công',
      'hạnh phúc',
      'sức khỏe',
      'tương lai',
      'hy vọng',
    ],
    technical: [
      'algorithm',
      'database',
      'framework',
      'interface',
      'development',
      'architecture',
      'optimization',
      'security',
      'performance',
      'scalability',
    ],
  },
  challenges: [
    {
      name: 'Tốc độ cơ bản',
      description: 'Đạt 25 WPM với độ chính xác 90%',
      targetWPM: 25,
      targetAccuracy: 90,
      timeLimit: 60,
      textType: 'common',
    },
    {
      name: 'Lập trình viên',
      description: 'Gõ code với tốc độ 40 WPM',
      targetWPM: 40,
      targetAccuracy: 95,
      timeLimit: 120,
      textType: 'programming',
    },
  ],
};
