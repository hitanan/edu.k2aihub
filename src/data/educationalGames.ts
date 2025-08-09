// Educational Games Data for Static Generation
export interface EducationalGame {
  id: string;
  title: string;
  description: string;
  category: 'quiz' | 'puzzle' | 'simulation' | 'coding' | 'memory' | 'strategy';
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  estimatedTime: string;
  skills: string[];
  moduleType: string;
  url?: string; // External game URL
  isInternal: boolean; // Whether it's built into our platform
  points: number;
  icon: string;
  color: string;
  relatedLessons?: Array<{
    moduleId: string;
    lessonId: string;
    title: string;
    connection: string; // How this game relates to the lesson
  }>;
}

// Games array for static generation
export const EDUCATIONAL_GAMES_DATA: EducationalGame[] = [
  {
    id: 'vietnam-geography-quiz',
    title: 'Quiz Địa lý Việt Nam',
    description: 'Kiểm tra kiến thức về 34 tỉnh thành Việt Nam',
    category: 'quiz',
    difficulty: 'Cơ bản',
    estimatedTime: '10-15 phút',
    skills: ['Địa lý', 'Ghi nhớ', 'Kiến thức tổng quát'],
    moduleType: 'geography',
    isInternal: true,
    points: 50,
    icon: '🗺️',
    color: 'from-green-500 to-emerald-500',
    relatedLessons: [
      {
        moduleId: 'city',
        lessonId: 'vietnam-regions',
        title: 'Vùng Miền Việt Nam',
        connection: 'Áp dụng kiến thức về 8 vùng kinh tế và đặc điểm địa lý từng vùng'
      },
      {
        moduleId: 'stem',
        lessonId: 'environmental-solutions',
        title: 'Giải Pháp Môi Trường',
        connection: 'Hiểu về địa lý tự nhiên và tác động môi trường của con người'
      }
    ]
  },
  {
    id: 'ai-prompt-challenge',
    title: 'Thử thách Prompt AI',
    description: 'Tạo prompt hiệu quả cho các tình huống khác nhau',
    category: 'strategy',
    difficulty: 'Trung bình',
    estimatedTime: '15-20 phút',
    skills: ['AI', 'Sáng tạo', 'Ngôn ngữ'],
    moduleType: 'ai',
    isInternal: true,
    points: 75,
    icon: '🤖',
    color: 'from-blue-500 to-purple-500',
    relatedLessons: [
      {
        moduleId: 'ai',
        lessonId: 'office-work',
        title: 'AI Văn Phòng & Công Việc',
        connection: 'Thực hành viết prompt hiệu quả cho ChatGPT và công cụ AI văn phòng'
      },
      {
        moduleId: 'ai',
        lessonId: 'creative-design',
        title: 'AI Sáng Tạo & Thiết Kế',
        connection: 'Học cách tạo prompt cho Midjourney và các công cụ AI sáng tạo'
      },
      {
        moduleId: 'ai-art-creative-tech',
        lessonId: 'ai-prompt-engineering',
        title: 'Kỹ Thuật Prompt AI',
        connection: 'Nắm vững các kỹ thuật prompt engineering chuyên sâu'
      }
    ]
  },
  {
    id: 'python-coding-puzzle',
    title: 'Câu đố lập trình Python',
    description: 'Giải quyết các bài toán coding với Python',
    category: 'coding',
    difficulty: 'Trung bình',
    estimatedTime: '20-30 phút',
    skills: ['Lập trình', 'Logic', 'Python'],
    moduleType: 'programming',
    isInternal: true,
    points: 100,
    icon: '🐍',
    color: 'from-yellow-500 to-orange-500',
    relatedLessons: [
      {
        moduleId: 'python',
        lessonId: 'python-basics',
        title: 'Python Cơ Bản',
        connection: 'Áp dụng cú pháp Python cơ bản để giải các bài toán thực tế'
      },
      {
        moduleId: 'python',
        lessonId: 'data-structures',
        title: 'Cấu Trúc Dữ Liệu Python',
        connection: 'Sử dụng lists, dicts và sets để giải quyết puzzle phức tạp'
      }
    ]
  },
  {
    id: 'arduino-circuit-builder',
    title: 'Xây dựng mạch Arduino',
    description: 'Thiết kế và lập trình mạch điện với Arduino',
    category: 'simulation',
    difficulty: 'Nâng cao',
    estimatedTime: '25-35 phút',
    skills: ['Điện tử', 'Lập trình', 'IoT'],
    moduleType: 'hardware',
    isInternal: true,
    points: 125,
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    relatedLessons: [
      {
        moduleId: 'arduino',
        lessonId: 'arduino-setup',
        title: 'Cài Đặt Arduino',
        connection: 'Thiết lập môi trường phát triển và kết nối phần cứng'
      },
      {
        moduleId: 'arduino',
        lessonId: 'led-digital-outputs',
        title: 'LED & Đầu Ra Số',
        connection: 'Xây dựng mạch LED cơ bản và lập trình điều khiển'
      },
      {
        moduleId: 'arduino',
        lessonId: 'arduino-sensors',
        title: 'Cảm Biến & Xử Lý Dữ Liệu',
        connection: 'Tích hợp cảm biến và xử lý dữ liệu trong mạch IoT'
      }
    ]
  },
  {
    id: 'stem-experiment-lab',
    title: 'Phòng thí nghiệm STEM',
    description: 'Thực hiện các thí nghiệm khoa học thú vị',
    category: 'simulation',
    difficulty: 'Cơ bản',
    estimatedTime: '15-25 phút',
    skills: ['Khoa học', 'Thí nghiệm', 'Quan sát'],
    moduleType: 'science',
    isInternal: true,
    points: 75,
    icon: '🔬',
    color: 'from-teal-500 to-cyan-500',
    relatedLessons: [
      {
        moduleId: 'stem',
        lessonId: 'fun-physics-experiments',
        title: 'Thí Nghiệm Vật Lý Thú Vị',
        connection: 'Áp dụng kiến thức vật lý cơ bản qua các thí nghiệm tương tác'
      },
      {
        moduleId: 'stem',
        lessonId: 'environmental-solutions',
        title: 'Giải Pháp Môi Trường',
        connection: 'Thực hành nghiên cứu khoa học để giải quyết vấn đề môi trường'
      },
      {
        moduleId: 'biotechnology',
        lessonId: 'lab-techniques',
        title: 'Kỹ Thuật Phòng Thí Nghiệm',
        connection: 'Làm quen với quy trình và kỹ thuật thí nghiệm chuyên nghiệp'
      }
    ]
  },
  {
    id: 'robotics-navigation',
    title: 'Điều hướng Robot',
    description: 'Lập trình robot di chuyển qua mê cung',
    category: 'strategy',
    difficulty: 'Nâng cao',
    estimatedTime: '20-30 phút',
    skills: ['Robot học', 'Thuật toán', 'Logic'],
    moduleType: 'robotics',
    isInternal: true,
    points: 150,
    icon: '🤖',
    color: 'from-indigo-500 to-purple-500',
    relatedLessons: [
      {
        moduleId: 'robotics',
        lessonId: 'autonomous-navigation',
        title: 'Điều Hướng Tự Động',
        connection: 'Thuật toán A* và pathfinding trong robotics thực tế'
      },
      {
        moduleId: 'python',
        lessonId: 'algorithms-data-structures',
        title: 'Thuật Toán & Cấu Trúc Dữ Liệu',
        connection: 'Cài đặt thuật toán tìm kiếm và tối ưu hóa đường đi'
      },
      {
        moduleId: 'arduino',
        lessonId: 'arduino-advanced-projects',
        title: 'Dự Án Arduino Nâng Cao',
        connection: 'Tích hợp cảm biến và motor để điều khiển robot thực tế'
      }
    ]
  },
  {
    id: 'scratch-animation-studio',
    title: 'Studio hoạt hình Scratch',
    description: 'Tạo hoạt hình và trò chơi với Scratch',
    category: 'coding',
    difficulty: 'Cơ bản',
    estimatedTime: '15-20 phút',
    skills: ['Lập trình trực quan', 'Sáng tạo', 'Logic'],
    moduleType: 'programming',
    isInternal: true,
    points: 60,
    icon: '🎬',
    color: 'from-pink-500 to-rose-500',
    relatedLessons: [
      {
        moduleId: 'scratch',
        lessonId: 'scratch-basics',
        title: 'Scratch Cơ Bản',
        connection: 'Làm quen với giao diện và khối lệnh cơ bản trong Scratch'
      },
      {
        moduleId: 'scratch',
        lessonId: 'scratch-animation',
        title: 'Hoạt Hình Scratch',
        connection: 'Tạo hoạt hình và điều khiển sprite với các khối lệnh'
      },
      {
        moduleId: 'game-development',
        lessonId: 'game-mechanics-design',
        title: 'Thiết Kế Cơ Chế Game',
        connection: 'Hiểu về logic game và cách tạo tương tác trong game'
      }
    ]
  },
  {
    id: 'ai-ethics-dilemma',
    title: 'Tình huống đạo đức AI',
    description: 'Giải quyết các vấn đề đạo đức trong AI',
    category: 'strategy',
    difficulty: 'Nâng cao',
    estimatedTime: '20-25 phút',
    skills: ['Đạo đức', 'Tư duy phê phán', 'AI'],
    moduleType: 'ai',
    isInternal: true,
    points: 100,
    icon: '⚖️',
    color: 'from-gray-500 to-slate-500',
    relatedLessons: [
      {
        moduleId: 'ai-art-creative-tech',
        lessonId: 'ai-ethics-society',
        title: 'Đạo Đức AI & Xã Hội',
        connection: 'Hiểu về tác động xã hội và trách nhiệm đạo đức khi sử dụng AI'
      },
      {
        moduleId: 'cybersecurity',
        lessonId: 'ai-security-ethics',
        title: 'Bảo Mật AI & Đạo Đức',
        connection: 'Phân tích rủi ro bảo mật và vấn đề đạo đức trong AI'
      },
      {
        moduleId: 'advanced-ai',
        lessonId: 'responsible-ai',
        title: 'AI Có Trách Nhiệm',
        connection: 'Phát triển và triển khai AI một cách có trách nhiệm'
      }
    ]
  },
  {
    id: 'quantum-basics',
    title: 'Cơ bản Lượng tử',
    description: 'Khám phá thế giới kỳ lạ của vật lý lượng tử',
    category: 'quiz',
    difficulty: 'Nâng cao',
    estimatedTime: '15-20 phút',
    skills: ['Vật lý', 'Lượng tử', 'Khoa học'],
    moduleType: 'physics',
    isInternal: true,
    points: 125,
    icon: '⚛️',
    color: 'from-purple-500 to-pink-500',
    relatedLessons: [
      {
        moduleId: 'advanced-ai',
        lessonId: 'quantum-computing',
        title: 'Máy Tính Lượng Tử',
        connection: 'Hiểu nguyên lý vật lý lượng tử ứng dụng trong máy tính'
      },
      {
        moduleId: 'stem',
        lessonId: 'fun-physics-experiments',
        title: 'Thí Nghiệm Vật Lý Thú Vị',
        connection: 'Khám phá các hiện tượng vật lý cơ bản dẫn đến lượng tử'
      },
      {
        moduleId: 'nanotechnology',
        lessonId: 'quantum-effects',
        title: 'Hiệu Ứng Lượng Tử',
        connection: 'Ứng dụng hiệu ứng lượng tử trong công nghệ nano'
      }
    ]
  },
  {
    id: 'blockchain-explorer',
    title: 'Khám phá Blockchain',
    description: 'Hiểu cách thức hoạt động của blockchain',
    category: 'simulation',
    difficulty: 'Trung bình',
    estimatedTime: '20-25 phút',
    skills: ['Blockchain', 'Mã hóa', 'Công nghệ'],
    moduleType: 'technology',
    isInternal: true,
    points: 100,
    icon: '🔗',
    color: 'from-blue-500 to-indigo-500',
    relatedLessons: [
      {
        moduleId: 'blockchain-defi',
        lessonId: 'blockchain-fundamentals',
        title: 'Cơ Bản Blockchain',
        connection: 'Hiểu nguyên lý hoạt động và cấu trúc của blockchain'
      },
      {
        moduleId: 'cybersecurity',
        lessonId: 'cryptography-blockchain',
        title: 'Mật Mã Học & Blockchain',
        connection: 'Tìm hiểu về mã hóa và bảo mật trong blockchain'
      },
      {
        moduleId: 'financial-literacy',
        lessonId: 'cryptocurrency-investment',
        title: 'Đầu Tư Tiền Mã Hóa',
        connection: 'Ứng dụng blockchain trong tài chính và đầu tư'
      }
    ]
  },
  {
    id: 'climate-modeling',
    title: 'Mô hình khí hậu',
    description: 'Mô phỏng tác động của biến đổi khí hậu',
    category: 'simulation',
    difficulty: 'Trung bình',
    estimatedTime: '15-20 phút',
    skills: ['Khí hậu', 'Môi trường', 'Mô hình hóa'],
    moduleType: 'environment',
    isInternal: true,
    points: 90,
    icon: '🌍',
    color: 'from-green-500 to-emerald-500',
    relatedLessons: [
      {
        moduleId: 'environmental-data-science',
        lessonId: 'climate-change-modeling',
        title: 'Mô Hình Biến Đổi Khí Hậu',
        connection: 'Sử dụng dữ liệu khoa học để mô hình hóa biến đổi khí hậu'
      },
      {
        moduleId: 'green-technology',
        lessonId: 'renewable-energy-systems',
        title: 'Hệ Thống Năng Lượng Tái Tạo',
        connection: 'Hiểu tác động của năng lượng tái tạo đối với khí hậu'
      },
      {
        moduleId: 'stem',
        lessonId: 'environmental-solutions',
        title: 'Giải Pháp Môi Trường',
        connection: 'Nghiên cứu khoa học để tìm giải pháp cho vấn đề khí hậu'
      }
    ]
  },
  {
    id: 'cybersecurity-defense',
    title: 'Phòng thủ An ninh mạng',
    description: 'Bảo vệ hệ thống khỏi các cuộc tấn công',
    category: 'strategy',
    difficulty: 'Nâng cao',
    estimatedTime: '25-30 phút',
    skills: ['An ninh mạng', 'Bảo mật', 'Phòng thủ'],
    moduleType: 'security',
    isInternal: true,
    points: 150,
    icon: '🛡️',
    color: 'from-red-500 to-pink-500',
    relatedLessons: [
      {
        moduleId: 'cybersecurity',
        lessonId: 'penetration-testing',
        title: 'Kiểm Thử Xâm Nhập',
        connection: 'Học cách phòng thủ bằng cách hiểu phương thức tấn công'
      },
      {
        moduleId: 'cybersecurity',
        lessonId: 'network-security',
        title: 'Bảo Mật Mạng',
        connection: 'Thiết lập và duy trì hệ thống bảo mật mạng hiệu quả'
      },
      {
        moduleId: 'advanced-ai',
        lessonId: 'ai-security',
        title: 'Bảo Mật AI',
        connection: 'Ứng dụng AI trong phát hiện và phòng chống tấn công mạng'
      }
    ]
  },
  {
    id: 'data-visualization',
    title: 'Trực quan hóa dữ liệu',
    description: 'Tạo biểu đồ và trực quan hóa dữ liệu',
    category: 'puzzle',
    difficulty: 'Trung bình',
    estimatedTime: '20-25 phút',
    skills: ['Dữ liệu', 'Trực quan', 'Phân tích'],
    moduleType: 'data_science',
    isInternal: true,
    points: 100,
    icon: '📊',
    color: 'from-indigo-500 to-blue-500',
    relatedLessons: [
      {
        moduleId: 'environmental-data-science',
        lessonId: 'data-visualization',
        title: 'Trực Quan Hóa Dữ Liệu Môi Trường',
        connection: 'Tạo biểu đồ và báo cáo từ dữ liệu môi trường thực tế'
      },
      {
        moduleId: 'python',
        lessonId: 'data-science-python',
        title: 'Khoa Học Dữ Liệu Python',
        connection: 'Sử dụng Python và các thư viện để trực quan hóa dữ liệu'
      },
      {
        moduleId: 'digital-marketing',
        lessonId: 'marketing-analytics',
        title: 'Phân Tích Marketing',
        connection: 'Trực quan hóa dữ liệu marketing để ra quyết định kinh doanh'
      }
    ]
  },
  {
    id: 'space-exploration',
    title: 'Khám phá Vũ trụ',
    description: 'Lên kế hoạch cho các sứ mệnh không gian',
    category: 'simulation',
    difficulty: 'Trung bình',
    estimatedTime: '20-30 phút',
    skills: ['Vũ trụ học', 'Vật lý', 'Khám phá'],
    moduleType: 'space',
    isInternal: true,
    points: 120,
    icon: '🚀',
    color: 'from-purple-500 to-indigo-500',
    relatedLessons: [
      {
        moduleId: 'aerospace-engineering',
        lessonId: 'spacecraft-design',
        title: 'Thiết Kế Tàu Vũ Trụ',
        connection: 'Hiểu nguyên lý thiết kế và vận hành tàu vũ trụ'
      },
      {
        moduleId: 'stem',
        lessonId: 'fun-physics-experiments',
        title: 'Thí Nghiệm Vật Lý Thú Vị',
        connection: 'Áp dụng nguyên lý vật lý trong việc khám phá vũ trụ'
      },
      {
        moduleId: 'robotics',
        lessonId: 'space-robotics',
        title: 'Robot Vũ Trụ',
        connection: 'Thiết kế robot phục vụ các nhiệm vụ không gian'
      }
    ]
  },
  {
    id: 'neural-network-builder',
    title: 'Xây dựng mạng Neural',
    description: 'Thiết kế và huấn luyện mạng neural',
    category: 'coding',
    difficulty: 'Nâng cao',
    estimatedTime: '30-40 phút',
    skills: ['AI', 'Machine Learning', 'Mạng neural'],
    moduleType: 'ai',
    isInternal: true,
    points: 175,
    icon: '🧠',
    color: 'from-pink-500 to-rose-500',
    relatedLessons: [
      {
        moduleId: 'advanced-ai',
        lessonId: 'neural-networks',
        title: 'Mạng Neural Nhân Tạo',
        connection: 'Hiểu cấu trúc và cách hoạt động của mạng neural'
      },
      {
        moduleId: 'python',
        lessonId: 'machine-learning-python',
        title: 'Machine Learning Python',
        connection: 'Cài đặt mạng neural bằng Python và TensorFlow'
      },
      {
        moduleId: 'ai-art-creative-tech',
        lessonId: 'ai-image-generation',
        title: 'Tạo Ảnh AI',
        connection: 'Ứng dụng mạng neural trong việc tạo ảnh và nghệ thuật'
      }
    ]
  },
  {
    id: 'math-puzzle',
    title: 'Câu đố Toán học',
    description: 'Giải các bài toán và câu đố toán học thú vị',
    category: 'puzzle',
    difficulty: 'Trung bình',
    estimatedTime: '15-20 phút',
    skills: ['Toán học', 'Logic', 'Tư duy'],
    moduleType: 'mathematics',
    isInternal: true,
    points: 80,
    icon: '🔢',
    color: 'from-yellow-500 to-orange-500',
    relatedLessons: [
      {
        moduleId: 'stem',
        lessonId: 'math-in-real-life',
        title: 'Toán Học Trong Đời Sống',
        connection: 'Áp dụng toán học để giải quyết vấn đề thực tế hàng ngày'
      },
      {
        moduleId: 'python',
        lessonId: 'algorithms-data-structures',
        title: 'Thuật Toán & Cấu Trúc Dữ Liệu',
        connection: 'Sử dụng toán học trong lập trình và thuật toán'
      },
      {
        moduleId: 'financial-literacy',
        lessonId: 'financial-calculations',
        title: 'Tính Toán Tài Chính',
        connection: 'Ứng dụng toán học trong đầu tư và quản lý tài chính'
      }
    ]
  },
  {
    id: 'chemistry-lab',
    title: 'Phòng thí nghiệm Hóa học',
    description: 'Thực hiện thí nghiệm hóa học an toàn',
    category: 'simulation',
    difficulty: 'Trung bình',
    estimatedTime: '20-25 phút',
    skills: ['Hóa học', 'Thí nghiệm', 'An toàn'],
    moduleType: 'chemistry',
    isInternal: true,
    points: 95,
    icon: '⚗️',
    color: 'from-emerald-500 to-cyan-500',
    relatedLessons: [
      {
        moduleId: 'biotechnology',
        lessonId: 'biochemistry',
        title: 'Hóa Sinh Học',
        connection: 'Hiểu các phản ứng hóa học trong sinh vật và ứng dụng'
      },
      {
        moduleId: 'nanotechnology',
        lessonId: 'chemical-synthesis',
        title: 'Tổng Hợp Hóa Học',
        connection: 'Sử dụng hóa học để tạo ra vật liệu nano'
      },
      {
        moduleId: 'environmental-data-science',
        lessonId: 'environmental-chemistry',
        title: 'Hóa Học Môi Trường',
        connection: 'Phân tích tác động hóa học đối với môi trường'
      }
    ]
  },
  {
    id: 'biology-ecosystem',
    title: 'Hệ sinh thái Sinh học',
    description: 'Khám phá chuỗi thức ăn và hệ sinh thái',
    category: 'simulation',
    difficulty: 'Cơ bản',
    estimatedTime: '15-20 phút',
    skills: ['Sinh học', 'Hệ sinh thái', 'Tự nhiên'],
    moduleType: 'biology',
    isInternal: true,
    points: 70,
    icon: '🌿',
    color: 'from-lime-500 to-green-500',
    relatedLessons: [
      {
        moduleId: 'biotechnology',
        lessonId: 'ecology-conservation',
        title: 'Sinh Thái & Bảo Tồn',
        connection: 'Hiểu hệ sinh thái và các phương pháp bảo tồn đa dạng sinh học'
      },
      {
        moduleId: 'environmental-data-science',
        lessonId: 'biodiversity-analysis',
        title: 'Phân Tích Đa Dạng Sinh Học',
        connection: 'Sử dụng dữ liệu để nghiên cứu và bảo vệ đa dạng sinh học'
      },
      {
        moduleId: 'green-technology',
        lessonId: 'sustainable-ecosystems',
        title: 'Hệ Sinh Thái Bền Vững',
        connection: 'Công nghệ xanh và phát triển bền vững với hệ sinh thái'
      }
    ]
  },
  {
    id: 'history-timeline',
    title: 'Dòng thời gian Lịch sử',
    description: 'Sắp xếp các sự kiện lịch sử theo thứ tự',
    category: 'memory',
    difficulty: 'Cơ bản',
    estimatedTime: '10-15 phút',
    skills: ['Lịch sử', 'Ghi nhớ', 'Thời gian'],
    moduleType: 'history',
    isInternal: true,
    points: 60,
    icon: '📚',
    color: 'from-amber-500 to-yellow-500',
    relatedLessons: [
      {
        moduleId: 'vietnamese-culture',
        lessonId: 'vietnamese-history',
        title: 'Lịch Sử Việt Nam',
        connection: 'Tìm hiểu các mốc thời gian quan trọng trong lịch sử Việt Nam'
      },
      {
        moduleId: 'digital-government',
        lessonId: 'government-history',
        title: 'Lịch Sử Chính Phủ Số',
        connection: 'Sự phát triển của chính phủ số qua các thời kỳ'
      },
      {
        moduleId: 'vietnamese-business',
        lessonId: 'business-history',
        title: 'Lịch Sử Kinh Doanh Việt Nam',
        connection: 'Những mốc son trong phát triển kinh tế Việt Nam'
      }
    ]
  },
  {
    id: 'robot-navigation-3d',
    title: '🤖 Điều hướng Robot 3D',
    description: 'Lập trình robot di chuyển trong môi trường 3D với thuật toán tìm đường thông minh A*',
    category: 'simulation',
    difficulty: 'Nâng cao',
    estimatedTime: '25-35 phút',
    skills: ['Thuật toán', 'Lập trình', '3D', 'AI', 'Tối ưu hóa'],
    moduleType: 'programming',
    isInternal: true,
    points: 120,
    icon: '🤖',
    color: 'from-cyan-500 to-blue-500',
    relatedLessons: [
      {
        moduleId: 'robotics',
        lessonId: 'autonomous-navigation',
        title: 'Điều Hướng Tự Động',
        connection: 'Thuật toán A* và pathfinding trong robotics thực tế'
      },
      {
        moduleId: 'python',
        lessonId: 'algorithms-data-structures',
        title: 'Thuật Toán & Cấu Trúc Dữ Liệu',
        connection: 'Cài đặt thuật toán tìm kiếm và tối ưu hóa đường đi'
      },
      {
        moduleId: 'learning',
        lessonId: 'ai-art',
        title: 'AI & Công Nghệ Sáng Tạo',
        connection: 'Ứng dụng AI trong game và mô phỏng 3D'
      }
    ]
  },
];
