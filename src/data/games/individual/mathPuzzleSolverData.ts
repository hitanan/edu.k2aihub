export interface MathPuzzleSolverGameData {
  categories: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    description: string;
    puzzles: Array<{
      id: string;
      title: string;
      question: string;
      type: 'multiple-choice' | 'input' | 'drag-drop' | 'calculation';
      options?: string[];
      correctAnswer: string | number;
      explanation: string;
      hints: string[];
      visualAid?: string;
      realWorldContext: string;
      points: number;
      timeLimit?: number;
    }>;
    learningObjectives: string[];
    prerequisites: string[];
  }>;
  difficultyLevels: {
    easy: { timeBonus: number; hintPenalty: number; };
    medium: { timeBonus: number; hintPenalty: number; };
    hard: { timeBonus: number; hintPenalty: number; };
  };
}

export const MATH_PUZZLE_SOLVER_DATA: MathPuzzleSolverGameData = {
  categories: [
    {
      name: "Số Học Cơ Bản",
      difficulty: "Cơ bản",
      estimatedTime: "10 phút",
      description: "Luyện tập các phép tính cộng, trừ, nhân, chia với số tự nhiên",
      puzzles: [
        {
          id: "basic-add-1",
          title: "Phép Cộng Trong Cuộc Sống",
          question: "Lan có 15 viên kẹo, mẹ cho thêm 8 viên nữa. Hỏi Lan có tất cả bao nhiêu viên kẹo?",
          type: "multiple-choice",
          options: ["20 viên", "23 viên", "25 viên", "28 viên"],
          correctAnswer: "23 viên",
          explanation: "15 + 8 = 23 viên kẹo. Phép cộng giúp ta tính tổng số lượng khi có thêm.",
          hints: [
            "Viết phép tính: 15 + 8 = ?",
            "Đếm từ 15: 16, 17, 18, 19, 20, 21, 22, 23"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Việc đếm kẹo giúp trẻ hiểu khái niệm cộng số trong thực tế",
          points: 10,
          timeLimit: 30
        },
        {
          id: "basic-sub-1",
          title: "Phép Trừ Tiền Mua Sắm",
          question: "Bạn có 50.000 đồng, mua một quyển sách giá 35.000 đồng. Hỏi còn lại bao nhiêu tiền?",
          type: "input",
          correctAnswer: 15000,
          explanation: "50.000 - 35.000 = 15.000 đồng. Phép trừ giúp tính số tiền còn lại.",
          hints: [
            "Lấy số tiền ban đầu trừ đi số tiền đã chi",
            "50.000 - 35.000 = ?"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Học cách quản lý tiền bạc qua phép tính trừ",
          points: 15,
          timeLimit: 45
        },
        {
          id: "basic-mult-1",
          title: "Phép Nhân Với Hình Học",
          question: "Một hình chữ nhật có chiều dài 6cm và chiều rộng 4cm. Diện tích hình chữ nhật là bao nhiêu?",
          type: "multiple-choice",
          options: ["20 cm²", "24 cm²", "26 cm²", "30 cm²"],
          correctAnswer: "24 cm²",
          explanation: "Diện tích = dài × rộng = 6 × 4 = 24 cm². Phép nhân tính diện tích hình chữ nhật.",
          hints: [
            "Công thức: Diện tích = chiều dài × chiều rộng",
            "6 × 4 = ?"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Tính diện tích phòng, mảnh đất trong thực tế",
          points: 20,
          timeLimit: 60
        }
      ],
      learningObjectives: [
        "Thành thạo 4 phép tính cơ bản",
        "Áp dụng toán học vào tình huống thực tế",
        "Phát triển tư duy logic và giải quyết vấn đề"
      ],
      prerequisites: [
        "Biết đếm số từ 1 đến 100",
        "Hiểu khái niệm cộng, trừ, nhân, chia"
      ]
    },
    {
      name: "Hình Học Không Gian",
      difficulty: "Trung bình",
      estimatedTime: "15 phút",
      description: "Khám phá các hình khối 3D và tính toán thể tích, diện tích",
      puzzles: [
        {
          id: "geo-volume-1",
          title: "Thể Tích Hình Hộp",
          question: "Một hộp sữa có kích thước 8cm × 6cm × 10cm. Thể tích của hộp sữa là bao nhiêu?",
          type: "input",
          correctAnswer: 480,
          explanation: "Thể tích hình hộp = dài × rộng × cao = 8 × 6 × 10 = 480 cm³",
          hints: [
            "Thể tích hình hộp = chiều dài × chiều rộng × chiều cao",
            "8 × 6 × 10 = ?"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Tính dung tích hộp, thùng chứa trong đời sống",
          points: 25,
          timeLimit: 90
        },
        {
          id: "geo-surface-1",
          title: "Diện Tích Bề Mặt",
          question: "Một hình lập phương có cạnh 5cm. Diện tích toàn phần của hình lập phương là bao nhiêu?",
          type: "multiple-choice",
          options: ["125 cm²", "150 cm²", "175 cm²", "200 cm²"],
          correctAnswer: "150 cm²",
          explanation: "Hình lập phương có 6 mặt, mỗi mặt có diện tích 5² = 25 cm². Tổng: 6 × 25 = 150 cm²",
          hints: [
            "Hình lập phương có 6 mặt bằng nhau",
            "Diện tích mỗi mặt = cạnh × cạnh",
            "Diện tích toàn phần = 6 × diện tích một mặt"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Tính lượng sơn cần để sơn một vật thể",
          points: 30,
          timeLimit: 120
        }
      ],
      learningObjectives: [
        "Hiểu khái niệm thể tích và diện tích bề mặt",
        "Áp dụng công thức hình học vào thực tế",
        "Phát triển tư duy không gian 3D"
      ],
      prerequisites: [
        "Thành thạo phép nhân",
        "Hiểu khái niệm diện tích hình phẳng"
      ]
    },
    {
      name: "Toán Thực Tế",
      difficulty: "Nâng cao",
      estimatedTime: "20 phút",
      description: "Giải quyết các bài toán có tính ứng dụng cao trong cuộc sống",
      puzzles: [
        {
          id: "real-percentage-1",
          title: "Tính Phần Trăm Giảm Giá",
          question: "Một chiếc áo giá 500.000đ được giảm 20%. Giá sau khi giảm là bao nhiêu?",
          type: "input",
          correctAnswer: 400000,
          explanation: "Giảm 20% = 500.000 × 0.2 = 100.000đ. Giá sau giảm = 500.000 - 100.000 = 400.000đ",
          hints: [
            "20% = 20/100 = 0.2",
            "Số tiền giảm = giá gốc × phần trăm giảm",
            "Giá cuối = giá gốc - số tiền giảm"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Tính toán khi mua sắm có khuyến mãi",
          points: 35,
          timeLimit: 150
        },
        {
          id: "real-speed-1",
          title: "Tính Tốc Độ Di Chuyển",
          question: "Một xe ô tô đi từ Hà Nội đến Hải Phòng (120km) trong 1.5 giờ. Tốc độ trung bình của xe là bao nhiêu?",
          type: "multiple-choice",
          options: ["70 km/h", "75 km/h", "80 km/h", "85 km/h"],
          correctAnswer: "80 km/h",
          explanation: "Tốc độ = quãng đường ÷ thời gian = 120 ÷ 1.5 = 80 km/h",
          hints: [
            "Công thức: v = s/t",
            "120 km ÷ 1.5 giờ = ?",
            "1.5 giờ = 1 giờ 30 phút"
          ],
          visualAid: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
          realWorldContext: "Tính toán thời gian di chuyển khi đi du lịch",
          points: 40,
          timeLimit: 180
        }
      ],
      learningObjectives: [
        "Áp dụng toán học vào các vấn đề thực tế",
        "Hiểu khái niệm phần trăm, tốc độ, tỷ lệ",
        "Phát triển kỹ năng giải quyết vấn đề phức tạp"
      ],
      prerequisites: [
        "Thành thạo phép tính với số thập phân",
        "Hiểu khái niệm tỷ lệ và phần trăm"
      ]
    }
  ],
  difficultyLevels: {
    easy: {
      timeBonus: 1.5,
      hintPenalty: 0.1
    },
    medium: {
      timeBonus: 2.0,
      hintPenalty: 0.15
    },
    hard: {
      timeBonus: 2.5,
      hintPenalty: 0.2
    }
  }
};
