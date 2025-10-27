// Creative Storytelling Game Data
export interface CreativeStorytellingGameData {
  prompts: Array<{
    id: string;
    title: string;
    scenario: string;
    characters: string[];
    settings: string[];
    themes: string[];
    difficulty: string;
    estimatedTime: string;
  }>;
  storyElements: {
    characters: Array<{
      name: string;
      description: string;
      traits: string[];
      motivations: string[];
    }>;
    settings: Array<{
      name: string;
      description: string;
      atmosphere: string;
      timeOfDay: string;
    }>;
    plotDevices: Array<{
      name: string;
      description: string;
      usage: string;
    }>;
  };
  writingTips: Array<{
    category: string;
    tips: string[];
  }>;
}

export const CREATIVE_STORYTELLING_DATA: CreativeStorytellingGameData = {
  prompts: [
    {
      id: 'future-school',
      title: 'Trường học tương lai',
      scenario: 'Năm 2050, bạn là học sinh đầu tiên đến trường học mới được xây dựng trên mặt trăng',
      characters: ['Học sinh robot', 'Giáo viên AI', 'Bạn học từ Trái Đất'],
      settings: ['Lớp học trong không gian', 'Thư viện hologram', 'Sân chơi không trọng lực'],
      themes: ['Công nghệ và giáo dục', 'Tình bạn xuyên không gian', 'Thích nghi môi trường mới'],
      difficulty: 'Trung bình',
      estimatedTime: '20-30 phút',
    },
  ],
  storyElements: {
    characters: [
      {
        name: 'AI Assistant',
        description: 'Trí tuệ nhân tạo thông minh và tò mò',
        traits: ['Thông minh', 'Tò mò', 'Hữu ích'],
        motivations: ['Học hỏi về con người', 'Giúp đỡ mọi người', 'Hiểu về cảm xúc'],
      },
    ],
    settings: [
      {
        name: 'Virtual Classroom',
        description: 'Lớp học ảo với công nghệ hologram',
        atmosphere: 'Hiện đại, tương tác',
        timeOfDay: 'Sáng sớm',
      },
    ],
    plotDevices: [
      {
        name: 'Mysterious Discovery',
        description: 'Khám phá điều gì đó bí ẩn và quan trọng',
        usage: 'Để bắt đầu cuộc phiêu lưu hoặc tạo tension',
      },
    ],
  },
  writingTips: [
    {
      category: 'Cấu trúc',
      tips: [
        'Bắt đầu với tình huống hấp dẫn',
        'Xây dựng nhân vật có động lực rõ ràng',
        'Tạo xung đột và thử thách',
        'Kết thúc với bài học hoặc thay đổi',
      ],
    },
  ],
};
