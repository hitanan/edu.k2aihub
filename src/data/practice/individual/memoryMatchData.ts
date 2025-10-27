export interface MemoryMatchGameData {
  themes: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    gridSize: { rows: number; cols: number };
    cards: Array<{
      id: string;
      frontImage: string;
      backImage: string;
      category: string;
      description: string;
      educationalNote: string;
    }>;
    timeLimit?: number;
    maxAttempts?: number;
    hints: string[];
    learningObjectives: string[];
  }>;
  gameConfig: {
    flipDuration: number;
    matchDelay: number;
    shuffleAnimationTime: number;
    scoreMultiplier: {
      perfect: number;
      good: number;
      average: number;
    };
  };
}

export const MEMORY_MATCH_DATA: MemoryMatchGameData = {
  themes: [
    {
      name: 'Động Vật Việt Nam',
      difficulty: 'Cơ bản',
      estimatedTime: '5 phút',
      gridSize: { rows: 3, cols: 4 },
      cards: [
        {
          id: 'buffalo',
          frontImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'domestic',
          description: 'Trâu - Gia súc quan trọng ở nông thôn Việt Nam',
          educationalNote: 'Trâu giúp cày ruộng và cung cấp sữa, thịt cho con người',
        },
        {
          id: 'elephant',
          frontImage: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'wild',
          description: 'Voi - Động vật có vú lớn nhất châu Á',
          educationalNote: 'Voi Á có tai nhỏ hơn voi Phi và sống ở rừng nhiệt đới',
        },
        {
          id: 'monkey',
          frontImage: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'wild',
          description: 'Khỉ - Linh trưởng thông minh sống trên cây',
          educationalNote: 'Khỉ có vai trò quan trọng trong hệ sinh thái rừng',
        },
        {
          id: 'bird',
          frontImage: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'wild',
          description: 'Chim - Động vật có cánh bay lượn trên trời',
          educationalNote: 'Chim giúp thụ phấn cho cây và kiểm soát côn trùng',
        },
        {
          id: 'fish',
          frontImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'aquatic',
          description: 'Cá - Động vật sống trong nước',
          educationalNote: 'Cá là nguồn protein quan trọng và chỉ thị chất lượng nước',
        },
        {
          id: 'tiger',
          frontImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop',
          category: 'wild',
          description: 'Hổ - Loài mèo lớn quý hiếm của Việt Nam',
          educationalNote: 'Hổ Đông Dương là phân loài hổ đang bị đe dọa tuyệt chủng',
        },
      ],
      timeLimit: 300,
      maxAttempts: 20,
      hints: [
        'Chú ý đến màu sắc và hình dạng đặc biệt của từng động vật',
        'Nhớ vị trí các thẻ đã lật để ghép cặp hiệu quả',
        'Bắt đầu từ góc để dễ nhớ vị trí',
      ],
      learningObjectives: [
        'Nhận biết các loài động vật bản địa Việt Nam',
        'Hiểu vai trò của động vật trong hệ sinh thái',
        'Phát triển trí nhớ và khả năng quan sát',
      ],
    },
    {
      name: 'Các Nguyên Tố Hóa Học',
      difficulty: 'Trung bình',
      estimatedTime: '8 phút',
      gridSize: { rows: 4, cols: 4 },
      cards: [
        {
          id: 'hydrogen',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'nonmetal',
          description: 'H - Hydrogen (Hiđro)',
          educationalNote: 'Nguyên tố nhẹ nhất, thành phần chính của nước (H2O)',
        },
        {
          id: 'helium',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'noble-gas',
          description: 'He - Helium (Heli)',
          educationalNote: 'Khí trơ, được dùng trong bóng bay và làm lạnh',
        },
        {
          id: 'carbon',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'nonmetal',
          description: 'C - Carbon (Cacbon)',
          educationalNote: 'Nền tảng của tất cả sự sống, có trong kim cương và than chì',
        },
        {
          id: 'oxygen',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'nonmetal',
          description: 'O - Oxygen (Oxi)',
          educationalNote: 'Cần thiết cho hô hấp, chiếm 21% khí quyển',
        },
        {
          id: 'iron',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'metal',
          description: 'Fe - Iron (Sắt)',
          educationalNote: 'Kim loại quan trọng trong máu và công nghiệp',
        },
        {
          id: 'gold',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'metal',
          description: 'Au - Gold (Vàng)',
          educationalNote: 'Kim loại quý, không bị oxi hóa và dẫn điện tốt',
        },
        {
          id: 'sodium',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'metal',
          description: 'Na - Sodium (Natri)',
          educationalNote: 'Kim loại kiềm, thành phần của muối ăn (NaCl)',
        },
        {
          id: 'chlorine',
          frontImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
          backImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
          category: 'halogen',
          description: 'Cl - Chlorine (Clo)',
          educationalNote: 'Halogen độc, dùng khử trùng nước và tạo muối ăn',
        },
      ],
      timeLimit: 480,
      maxAttempts: 25,
      hints: [
        'Nhóm các nguyên tố theo tính chất: kim loại, phi kim, khí trơ',
        'Chú ý màu sắc đặc trưng của từng nguyên tố',
        'Nhớ vị trí trong bảng tuần hoàn nếu biết',
      ],
      learningObjectives: [
        'Nhận biết các nguyên tố hóa học cơ bản',
        'Hiểu tính chất và ứng dụng của từng nguyên tố',
        'Ghi nhớ ký hiệu hóa học quốc tế',
      ],
    },
  ],
  gameConfig: {
    flipDuration: 600,
    matchDelay: 1000,
    shuffleAnimationTime: 2000,
    scoreMultiplier: {
      perfect: 3.0,
      good: 2.0,
      average: 1.0,
    },
  },
};
