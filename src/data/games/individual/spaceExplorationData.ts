// Space Exploration Game Data
export interface SpaceExplorationGameData {
  missions: Array<{
    destination: string;
    distance: string;
    duration: string;
    challenges: string[];
    cost: string;
    crew: number;
    success: boolean;
  }>;
  quiz: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

export const spaceExplorationGameData: SpaceExplorationGameData = {
  missions: [
    {
      destination: 'Mars',
      distance: '225 million km',
      duration: '7 months',
      challenges: ['Radiation', 'Food supply', 'Landing'],
      cost: '$2.7 billion',
      crew: 4,
      success: false,
    },
    {
      destination: 'Moon',
      distance: '384,400 km',
      duration: '3 days',
      challenges: ['Landing precision', 'Life support', 'Return journey'],
      cost: '$25 billion',
      crew: 3,
      success: true,
    },
    {
      destination: 'Jupiter',
      distance: '628 million km',
      duration: '6 years',
      challenges: [
        'Extreme radiation',
        'Communication delay',
        'Fuel requirements',
      ],
      cost: '$3.2 billion',
      crew: 0,
      success: true,
    },
  ],
  quiz: [
    {
      question: 'Thử thách lớn nhất khi du hành đến sao Hỏa là gì?',
      options: ['Khoảng cách', 'Bức xạ', 'Thời gian', 'Tất cả các đáp án'],
      correct: 3,
      explanation:
        'Du hành sao Hỏa phải đối mặt với nhiều thử thách phức tạp.',
    },
  ],
};
