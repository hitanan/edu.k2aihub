/* eslint-disable @typescript-eslint/no-explicit-any */
// Game data for all educational games
// Game type interfaces
export interface GeographyQuizGameData {
  questions: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

export interface AIPromptChallengeGameData {
  scenarios: Array<{
    situation: string;
    hints: string[];
    targetPrompt: string;
    examples: string[];
    correct: number;
  }>;
}

export interface PythonCodingPuzzleGameData {
  challenges: Array<{
    title: string;
    description: string;
    difficulty: string;
    estimatedTime: string;
    hint: string;
    solution: string;
    testCases: Array<{
      input: any;
      output: any;
      description?: string;
    }>;
    functionName: string;
    parameters: Array<{
      name: string;
      type: string;
      description: string;
    }>;
    returnType: string;
    codeTemplate: string;
    validationRules: {
      forbiddenKeywords?: string[];
      requiredKeywords?: string[];
      maxLines?: number;
      allowBuiltins?: boolean;
    };
    explanation: string;
    tips: string[];
  }>;
  codeVerificationConfig: {
    timeoutMs: number;
    maxOutputLength: number;
    allowedImports: string[];
    securityLevel: 'strict' | 'moderate' | 'relaxed';
  };
}

export type Vector3Array =  [x: number, y: number, z: number];

export interface ArduinoCircuitBuilderGameData {
  circuits: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    components: Array<{
      id: string;
      name: string;
      type: string;
      image: string;
      pins: string[];
      connections: string[];
      position: { x: number; y: number };
    }>;
    targetConnections: Array<{
      from: string;
      to: string;
      wire: string;
    }>;
    code: string;
    explanation: string;
    tips: string[];
    troubleshooting: string[];
  }>;
  dragDropConfig: {
    componentLibrary: string[];
    wireColors: string[];
    snapDistance: number;
    gridSize: number;
    zoomRange: [number, number];
  };
}

export interface STEMExperimentLabGameData {
  experiments: Array<{
    name: string;
    materials: string[];
    procedure: string[];
    observation: string;
    explanation: string;
    videoUrl?: string;
    difficulty?: string;
    estimatedTime?: string;
    safetyTips?: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
      explanation?: string;
    };
  }>;
}

export interface RoboticsNavigationGameData {
  mazes: Array<{
    name: string;
    grid: number[][];
    start: [number, number];
    end: [number, number];
    commands: string[];
    solution: string[];
  }>;
}

export interface ScratchAnimationStudioGameData {
  projects: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    sprites: Array<{
      id: string;
      name: string;
      image: string;
      costumes: string[];
      position: { x: number; y: number };
      properties: {
        size: number;
        direction: number;
        visible: boolean;
        draggable: boolean;
      };
    }>;
    availableBlocks: Array<{
      category: string;
      blocks: Array<{
        id: string;
        name: string;
        code: string;
        inputs?: Array<{
          type: 'text' | 'number' | 'dropdown' | 'boolean_input';
          placeholder?: string;
          options?: string[];
        }>;
        shape: 'hat' | 'stack' | 'boolean' | 'reporter';
        color: string;
      }>;
    }>;
    targetScript: Array<{
      spriteId: string;
      blocks: Array<{
        blockId: string;
        inputs?: any[];
        children?: any[];
      }>;
    }>;
    challenge: string;
    steps: string[];
    tips: string[];
    expectedOutput: string;
    validationRules: {
      requiredBlocks: string[];
      minimumBlocks: number;
      mustUseSprites: string[];
    };
  }>;
  blockLibrary: {
    motion: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    looks: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    control: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    sensing: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    operators: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    variables: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
  };
  dragDropConfig: {
    snapDistance: number;
    blockSpacing: number;
    canvasSize: { width: number; height: number };
    spriteLibrary: string[];
  };
}

export interface AIEthicsDilemmaGameData {
  scenarios: Array<{
    dilemma: string;
    options: string[];
    considerations: string[];
    correctApproach: number;
    explanation: string;
  }>;
}

export interface QuantumBasicsGameData {
  concepts: Array<{
    name: string;
    description: string;
    states: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    };
  }>;
}

export interface BlockchainExplorerGameData {
  blocks: Array<{
    index: number;
    transactions: string[];
    hash: string;
    previousHash: string;
    nonce: number;
    difficulty: number;
    timestamp: number;
    reward: number;
  }>;
  challenges: Array<{
    type: string;
    description: string;
    target: any;
    verification: string;
  }>;
}

export interface ClimateModelingGameData {
  scenarios: Array<{
    name: string;
    parameters: { co2: number; temperature: number; seaLevel: number };
    effects: string[];
    solutions: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
    };
  }>;
}

export interface CybersecurityDefenseGameData {
  attacks: Array<{
    type: string;
    indicators: string[];
    defense: string[];
    severity: 'Thấp' | 'Trung bình' | 'Cao' | 'Nghiêm trọng';
    description: string;
  }>;
  challenges: Array<{
    scenario: string;
    threats: string[];
    solutions: string[];
    correct: number[];
  }>;
}

export interface DataVisualizationGameData {
  datasets: Array<{
    name: string;
    data: Array<{ year: number; temp: number }>;
    description: string;
    type: 'line' | 'bar' | 'pie' | 'scatter';
  }>;
  challenges: Array<{
    question: string;
    dataset: string;
    options: string[];
    correct: number;
  }>;
}

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

export interface NeuralNetworkBuilderGameData {
  architectures: Array<{
    name: string;
    layers: Array<{ type: string; neurons: number; activation?: string }>;
    description: string;
    use_case: string;
    challenge?: string;
    components?: string[];
    solution?: string[];
  }>;
  challenges: Array<{
    problem: string;
    requirements: string[];
    solution: string;
    architecture: string;
    quiz?: {
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    };
  }>;
  concepts?: Array<{
    name: string;
    description: string;
    formula?: string;
    example?: string;
  }>;
}

export interface MathPuzzleGameData {
  puzzles: Array<{
    title: string;
    question: string;
    type: 'calculation' | 'pattern' | 'geometry' | 'logic';
    answer: number | string;
    explanation: string;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  }>;
}

export interface ChemistryLabGameData {
  experiments: Array<{
    name: string;
    chemicals: string[];
    procedure: string[];
    reaction: string;
    observation: string;
    safety: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
    };
  }>;
}

export interface BiologyEcosystemGameData {
  ecosystems: Array<{
    name: string;
    organisms: Array<{
      name: string;
      type: 'producer' | 'primary_consumer' | 'secondary_consumer' | 'decomposer';
      energy: number;
    }>;
    food_chains: string[][];
    challenges: Array<{
      question: string;
      options: string[];
      correct: number;
    }>;
  }>;
}

export interface AquacultureIoTGameData {
  fishSpecies: Array<{
    id: string;
    name: string;
    nameEn: string;
    optimalTemp: [number, number];
    optimalPH: [number, number];
    optimalO2: [number, number];
    value: number;
    growthRate: number;
    description: string;
  }>;
  iotSensors: Array<{
    id: string;
    name: string;
    nameVi: string;
    unit: string;
    optimalRange: [number, number];
    alertThreshold: [number, number];
    description: string;
  }>;
  managementActions: Array<{
    id: string;
    name: string;
    description: string;
    effect: string;
    cost: number;
  }>;
  category: string;
  title: string;
  description: string;
  features: string[];
}

export interface HistoryTimelineGameData {
  events: Array<{
    year: number;
    event: string;
    description: string;
    category: 'Chính trị' | 'Khoa học' | 'Văn hóa' | 'Kinh tế';
    importance: 'Thấp' | 'Trung bình' | 'Cao';
  }>;
  challenges: Array<{
    question: string;
    timeline: number[];
    correct_order: number[];
  }>;
}

// Union type for all game data
export type GameDataType =
  | GeographyQuizGameData
  | AIPromptChallengeGameData
  | PythonCodingPuzzleGameData
  | ArduinoCircuitBuilderGameData
  | STEMExperimentLabGameData
  | RoboticsNavigationGameData
  | ScratchAnimationStudioGameData
  | AIEthicsDilemmaGameData
  | QuantumBasicsGameData
  | BlockchainExplorerGameData
  | ClimateModelingGameData
  | CybersecurityDefenseGameData
  | DataVisualizationGameData
  | SpaceExplorationGameData
  | NeuralNetworkBuilderGameData
  | MathPuzzleGameData
  | ChemistryLabGameData
  | BiologyEcosystemGameData
  | AquacultureIoTGameData
  | HistoryTimelineGameData
  | RobotNavigationGameData
  | RobotNavigation3DGameData;

export const GAME_DATA: Record<string, GameDataType> = {
  'vietnam-geography-quiz': {
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
        question: 'Vịnh nào được UNESCO công nhận là di sản thiên nhiên thế giới?',
        options: ['Vịnh Nha Trang', 'Vịnh Hạ Long', 'Vịnh Cửa Lò', 'Vịnh Xuân Đài'],
        correct: 1,
        explanation: 'Vịnh Hạ Long được UNESCO công nhận năm 1994.',
      },
      {
        question: 'Sông nào dài nhất Việt Nam?',
        options: ['Sông Cửu Long', 'Sông Hồng', 'Sông Đồng Nai', 'Sông Mã'],
        correct: 0,
        explanation: 'Sông Cửu Long (Mekong) dài 4.350 km, đoạn chảy qua Việt Nam dài 230 km.',
      },
      {
        question: 'Cao nguyên nào lớn nhất Việt Nam?',
        options: ['Cao nguyên Đắk Lắk', 'Cao nguyên Lâm Viên', 'Cao nguyên Kon Tum', 'Cao nguyên Mộc Châu'],
        correct: 1,
        explanation: 'Cao nguyên Lâm Viên có diện tích khoảng 3.500 km².',
      },
      {
        question: 'Tỉnh nào có nhiều dân tộc thiểu số nhất?',
        options: ['Lai Châu', 'Gia Lai', 'Đắk Lắk', 'Cao Bằng'],
        correct: 0,
        explanation: 'Lai Châu có 20 dân tộc thiểu số sinh sống.',
      },
    ],
  },
  'ai-prompt-challenge': {
    scenarios: [
      {
        situation: 'Viết email xin nghỉ phép',
        hints: ['Lịch sự', 'Lý do rõ ràng', 'Thời gian cụ thể'],
        targetPrompt: 'Viết email xin nghỉ phép 3 ngày để đi du lịch, gửi sếp, lịch sự và chuyên nghiệp',
        examples: [
          'Tôi muốn nghỉ phép',
          'Viết email xin nghỉ phép 3 ngày để đi du lịch, gửi sếp, lịch sự và chuyên nghiệp',
          'Xin nghỉ',
          'Email nghỉ phép đi chơi',
        ],
        correct: 1,
      },
      {
        situation: 'Tạo kế hoạch học tập',
        hints: ['Mục tiêu rõ ràng', 'Thời gian', 'Phương pháp'],
        targetPrompt: 'Tạo kế hoạch học tiếng Anh trong 3 tháng cho người mới bắt đầu, bao gồm lộ trình và phương pháp',
        examples: [
          'Học tiếng Anh',
          'Tạo kế hoạch học tiếng Anh trong 3 tháng cho người mới bắt đầu, bao gồm lộ trình và phương pháp',
          'Kế hoạch học tập',
          'Tiếng Anh cơ bản',
        ],
        correct: 1,
      },
      {
        situation: 'Tạo nội dung marketing',
        hints: ['Đối tượng khách hàng', 'Sản phẩm/dịch vụ', 'Call to action'],
        targetPrompt:
          'Viết bài đăng Facebook quảng cáo khóa học lập trình cho học sinh cấp 3, thu hút và có lời kêu gọi hành động',
        examples: [
          'Quảng cáo khóa học',
          'Viết bài đăng Facebook quảng cáo khóa học lập trình cho học sinh cấp 3, thu hút và có lời kêu gọi hành động',
          'Marketing lập trình',
          'Post Facebook',
        ],
        correct: 1,
      },
      {
        situation: 'Phân tích dữ liệu',
        hints: ['Loại dữ liệu', 'Phương pháp phân tích', 'Kết quả mong muốn'],
        targetPrompt: 'Phân tích dữ liệu bán hàng theo tháng, tìm xu hướng và đưa ra khuyến nghị cải thiện',
        examples: [
          'Phân tích bán hàng',
          'Phân tích dữ liệu bán hàng theo tháng, tìm xu hướng và đưa ra khuyến nghị cải thiện',
          'Dữ liệu theo tháng',
          'Báo cáo bán hàng',
        ],
        correct: 1,
      },
    ],
  },
  'python-coding-puzzle': {
    challenges: [
      {
        title: 'Đảo ngược chuỗi',
        description: 'Viết hàm đảo ngược một chuỗi không dùng slicing',
        difficulty: 'Cơ bản',
        estimatedTime: '10 phút',
        hint: 'Sử dụng vòng lặp và ghép chuỗi từ cuối về đầu',
        solution:
          'def reverse_string(s):\n    result = ""\n    for i in range(len(s)-1, -1, -1):\n        result += s[i]\n    return result',
        testCases: [
          {
            input: 'hello',
            output: 'olleh',
            description: 'Đảo ngược chuỗi "hello" thành "olleh"',
          },
          {
            input: 'python',
            output: 'nohtyp',
            description: 'Đảo ngược chuỗi "python" thành "nohtyp"',
          },
          {
            input: 'K2AI',
            output: 'IA2K',
            description: 'Đảo ngược chuỗi "K2AI" thành "IA2K"',
          },
        ],
        functionName: 'reverse_string',
        parameters: [
          {
            name: 's',
            type: 'str',
            description: 'Chuỗi cần đảo ngược',
          },
        ],
        returnType: 'str',
        codeTemplate: 'def reverse_string(s):\n    # Viết code ở đây\n    pass',
        validationRules: {
          forbiddenKeywords: ['[::-1]', '.reverse()', 'reversed('],
          requiredKeywords: ['for', 'range'],
          maxLines: 10,
          allowBuiltins: false,
        },
        explanation: 'Sử dụng vòng lặp để duyệt chuỗi từ cuối về đầu và ghép các ký tự vào chuỗi kết quả.',
        tips: [
          'Sử dụng range(len(s)-1, -1, -1) để duyệt ngược',
          'Khởi tạo chuỗi kết quả rỗng và ghép từng ký tự',
          'Có thể dùng toán tử += để ghép chuỗi',
        ],
      },
      {
        title: 'Tìm số lớn nhất',
        description: 'Tìm số lớn nhất trong danh sách các số',
        difficulty: 'Cơ bản',
        estimatedTime: '8 phút',
        hint: 'Duyệt qua tất cả phần tử và so sánh với giá trị lớn nhất hiện tại',
        solution:
          'def find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num',
        testCases: [
          {
            input: [1, 5, 3, 9, 2],
            output: 9,
            description: 'Số lớn nhất trong [1, 5, 3, 9, 2] là 9',
          },
          {
            input: [-1, -5, -2],
            output: -1,
            description: 'Số lớn nhất trong [-1, -5, -2] là -1',
          },
          {
            input: [100, 200, 50],
            output: 200,
            description: 'Số lớn nhất trong [100, 200, 50] là 200',
          },
        ],
        functionName: 'find_max',
        parameters: [
          {
            name: 'numbers',
            type: 'list',
            description: 'Danh sách các số cần tìm max',
          },
        ],
        returnType: 'int | float',
        codeTemplate: 'def find_max(numbers):\n    # Viết code ở đây\n    pass',
        validationRules: {
          forbiddenKeywords: ['max(', 'sorted(', '.sort()'],
          requiredKeywords: ['for'],
          maxLines: 8,
          allowBuiltins: false,
        },
        explanation: 'Khởi tạo biến max_num bằng phần tử đầu tiên, sau đó duyệt và so sánh với từng phần tử.',
        tips: [
          'Khởi tạo max_num = numbers[0]',
          'Duyệt qua từng số và so sánh với max_num',
          'Cập nhật max_num nếu tìm thấy số lớn hơn',
        ],
      },
      {
        title: 'Kiểm tra số nguyên tố',
        description: 'Viết hàm kiểm tra xem một số có phải số nguyên tố không',
        difficulty: 'Trung bình',
        estimatedTime: '15 phút',
        hint: 'Chia thử từ 2 đến căn bậc 2 của số đó, nếu chia hết thì không phải số nguyên tố',
        solution:
          'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True',
        testCases: [
          {
            input: 17,
            output: true,
            description: '17 là số nguyên tố',
          },
          {
            input: 4,
            output: false,
            description: '4 không phải số nguyên tố (4 = 2 × 2)',
          },
          {
            input: 2,
            output: true,
            description: '2 là số nguyên tố nhỏ nhất',
          },
          {
            input: 1,
            output: false,
            description: '1 không được coi là số nguyên tố',
          },
        ],
        functionName: 'is_prime',
        parameters: [
          {
            name: 'n',
            type: 'int',
            description: 'Số cần kiểm tra',
          },
        ],
        returnType: 'bool',
        codeTemplate: 'def is_prime(n):\n    # Viết code ở đây\n    pass',
        validationRules: {
          forbiddenKeywords: [],
          requiredKeywords: ['for', 'range'],
          maxLines: 12,
          allowBuiltins: true,
        },
        explanation:
          'Số nguyên tố chỉ chia hết cho 1 và chính nó. Kiểm tra bằng cách chia thử các số từ 2 đến căn bậc 2.',
        tips: [
          'Số < 2 không phải số nguyên tố',
          'Chỉ cần kiểm tra đến int(n**0.5) + 1',
          'Nếu tìm thấy ước số thì return False ngay',
        ],
      },
      {
        title: 'Tính số Fibonacci',
        description: 'Tính số Fibonacci thứ n trong dãy Fibonacci',
        difficulty: 'Trung bình',
        estimatedTime: '12 phút',
        hint: 'Sử dụng công thức F(n) = F(n-1) + F(n-2), với F(0)=0, F(1)=1',
        solution:
          'def fibonacci(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b',
        testCases: [
          {
            input: 5,
            output: 5,
            description: 'Fibonacci thứ 5: 0,1,1,2,3,5',
          },
          {
            input: 10,
            output: 55,
            description: 'Fibonacci thứ 10: 55',
          },
          {
            input: 0,
            output: 0,
            description: 'Fibonacci thứ 0: 0',
          },
          {
            input: 1,
            output: 1,
            description: 'Fibonacci thứ 1: 1',
          },
        ],
        functionName: 'fibonacci',
        parameters: [
          {
            name: 'n',
            type: 'int',
            description: 'Vị trí trong dãy Fibonacci',
          },
        ],
        returnType: 'int',
        codeTemplate: 'def fibonacci(n):\n    # Viết code ở đây\n    pass',
        validationRules: {
          forbiddenKeywords: [],
          requiredKeywords: [],
          maxLines: 10,
          allowBuiltins: true,
        },
        explanation: 'Dãy Fibonacci: mỗi số bằng tổng hai số trước đó. Dùng iterative approach hiệu quả hơn recursive.',
        tips: [
          'Xử lý trường hợp base: n <= 1',
          'Dùng hai biến a,b để lưu hai số Fibonacci liền kề',
          'Cập nhật a,b trong vòng lặp: a,b = b, a+b',
        ],
      },
      {
        title: 'Đếm từ trong chuỗi',
        description: 'Đếm số lần xuất hiện của các từ trong một chuỗi',
        difficulty: 'Nâng cao',
        estimatedTime: '18 phút',
        hint: 'Tách chuỗi thành các từ và sử dụng dictionary để đếm',
        solution:
          'def count_words(text):\n    words = text.lower().split()\n    word_count = {}\n    for word in words:\n        word_count[word] = word_count.get(word, 0) + 1\n    return word_count',
        testCases: [
          {
            input: 'hello world hello',
            output: { hello: 2, world: 1 },
            description: 'Đếm từ trong "hello world hello"',
          },
          {
            input: 'Python is great Python',
            output: { python: 2, is: 1, great: 1 },
            description: 'Đếm từ (case-insensitive)',
          },
        ],
        functionName: 'count_words',
        parameters: [
          {
            name: 'text',
            type: 'str',
            description: 'Chuỗi văn bản cần đếm từ',
          },
        ],
        returnType: 'dict',
        codeTemplate: 'def count_words(text):\n    # Viết code ở đây\n    pass',
        validationRules: {
          forbiddenKeywords: ['Counter', 'collections'],
          requiredKeywords: ['split', 'for'],
          maxLines: 15,
          allowBuiltins: true,
        },
        explanation:
          'Sử dụng dictionary để lưu số lần xuất hiện của mỗi từ. Chuyển về lowercase để không phân biệt hoa thường.',
        tips: [
          'Dùng .lower() để chuyển về chữ thường',
          'Dùng .split() để tách thành các từ',
          'Dùng dict.get(key, default) để lấy giá trị an toàn',
        ],
      },
    ],
    codeVerificationConfig: {
      timeoutMs: 5000,
      maxOutputLength: 1000,
      allowedImports: ['math', 'random', 'string'],
      securityLevel: 'strict',
    },
  },
  'arduino-circuit-builder': {
    circuits: [
      {
        name: 'LED Nhấp nháy',
        difficulty: 'Cơ bản',
        estimatedTime: '10 phút',
        components: [
          {
            id: 'arduino-uno',
            name: 'Arduino Uno',
            type: 'microcontroller',
            image: '/images/components/arduino-uno.png',
            pins: ['5V', 'GND', 'D13', 'D12', 'D11', 'D10', 'D9', 'D8', 'D7', 'D6', 'D5', 'D4', 'D3', 'D2', 'TX', 'RX'],
            connections: [],
            position: { x: 100, y: 100 },
          },
          {
            id: 'led-red',
            name: 'LED Đỏ',
            type: 'output',
            image: '/images/components/led-red.png',
            pins: ['anode', 'cathode'],
            connections: [],
            position: { x: 300, y: 200 },
          },
          {
            id: 'resistor-220',
            name: 'Điện trở 220Ω',
            type: 'passive',
            image: '/images/components/resistor-220.png',
            pins: ['pin1', 'pin2'],
            connections: [],
            position: { x: 400, y: 250 },
          },
          {
            id: 'breadboard',
            name: 'Breadboard',
            type: 'connector',
            image: '/images/components/breadboard.png',
            pins: Array.from({ length: 60 }, (_, i) => `hole-${i}`),
            connections: [],
            position: { x: 200, y: 300 },
          },
        ],
        targetConnections: [
          { from: 'arduino-uno:D13', to: 'led-red:anode', wire: 'red' },
          { from: 'led-red:cathode', to: 'resistor-220:pin1', wire: 'black' },
          { from: 'resistor-220:pin2', to: 'arduino-uno:GND', wire: 'black' },
        ],
        code: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);  // Bật LED
  delay(1000);             // Chờ 1 giây
  digitalWrite(13, LOW);   // Tắt LED
  delay(1000);             // Chờ 1 giây
}`,
        explanation:
          'Mạch cơ bản làm LED nhấp nháy mỗi giây. Pin 13 của Arduino điều khiển LED, điện trở 220Ω bảo vệ LED khỏi bị cháy.',
        tips: [
          'LED có cực tính: chân dài là anode (+), chân ngắn là cathode (-)',
          'Điện trở bảo vệ LED, không nối trực tiếp LED vào Arduino',
          'Pin 13 có LED built-in, dễ kiểm tra khi lập trình',
        ],
        troubleshooting: [
          'LED không sáng: Kiểm tra cực tính LED và kết nối',
          'LED sáng yếu: Kiểm tra giá trị điện trở',
          'Không nhấp nháy: Kiểm tra code và kết nối pin 13',
        ],
      },
      {
        name: 'Đọc cảm biến nhiệt độ',
        difficulty: 'Trung bình',
        estimatedTime: '15 phút',
        components: [
          {
            id: 'arduino-uno',
            name: 'Arduino Uno',
            type: 'microcontroller',
            image: '/images/components/arduino-uno.png',
            pins: ['5V', 'GND', 'D2', 'D3', 'D4', 'A0', 'A1'],
            connections: [],
            position: { x: 100, y: 100 },
          },
          {
            id: 'dht11',
            name: 'Cảm biến DHT11',
            type: 'sensor',
            image: '/images/components/dht11.png',
            pins: ['VCC', 'DATA', 'GND'],
            connections: [],
            position: { x: 350, y: 150 },
          },
          {
            id: 'breadboard',
            name: 'Breadboard',
            type: 'connector',
            image: '/images/components/breadboard.png',
            pins: Array.from({ length: 60 }, (_, i) => `hole-${i}`),
            connections: [],
            position: { x: 200, y: 300 },
          },
        ],
        targetConnections: [
          { from: 'dht11:VCC', to: 'arduino-uno:5V', wire: 'red' },
          { from: 'dht11:GND', to: 'arduino-uno:GND', wire: 'black' },
          { from: 'dht11:DATA', to: 'arduino-uno:D2', wire: 'yellow' },
        ],
        code: `#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT11

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("Cảm biến DHT11 khởi động!");
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Lỗi đọc dữ liệu từ cảm biến DHT!");
    return;
  }
  
  Serial.print("Độ ẩm: ");
  Serial.print(humidity);
  Serial.print("%  ");
  Serial.print("Nhiệt độ: ");
  Serial.print(temperature);
  Serial.println("°C");
  
  delay(2000);
}`,
        explanation:
          'Đọc nhiệt độ và độ ẩm từ cảm biến DHT11, hiển thị qua Serial Monitor. Cảm biến giao tiếp digital với Arduino.',
        tips: [
          'Cần cài thư viện DHT sensor library từ Library Manager',
          'DHT11 có độ chính xác ±2°C, phù hợp cho học tập',
          'Đọc dữ liệu mỗi 2 giây để cảm biến hoạt động ổn định',
        ],
        troubleshooting: [
          'Hiển thị "nan": Kiểm tra kết nối và nguồn điện',
          'Dữ liệu không đúng: Kiểm tra pin DATA và thư viện',
          'Không có dữ liệu: Kiểm tra Serial Monitor baud rate 9600',
        ],
      },
      {
        name: 'Servo Motor điều khiển',
        difficulty: 'Trung bình',
        estimatedTime: '12 phút',
        components: [
          {
            id: 'arduino-uno',
            name: 'Arduino Uno',
            type: 'microcontroller',
            image: '/images/components/arduino-uno.png',
            pins: ['5V', 'GND', 'D9', 'A0'],
            connections: [],
            position: { x: 100, y: 100 },
          },
          {
            id: 'servo-sg90',
            name: 'Servo Motor SG90',
            type: 'actuator',
            image: '/images/components/servo-sg90.png',
            pins: ['VCC', 'GND', 'SIGNAL'],
            connections: [],
            position: { x: 350, y: 120 },
          },
          {
            id: 'potentiometer',
            name: 'Potentiometer 10kΩ',
            type: 'input',
            image: '/images/components/potentiometer.png',
            pins: ['pin1', 'wiper', 'pin2'],
            connections: [],
            position: { x: 300, y: 280 },
          },
        ],
        targetConnections: [
          { from: 'servo-sg90:VCC', to: 'arduino-uno:5V', wire: 'red' },
          { from: 'servo-sg90:GND', to: 'arduino-uno:GND', wire: 'black' },
          { from: 'servo-sg90:SIGNAL', to: 'arduino-uno:D9', wire: 'orange' },
          { from: 'potentiometer:pin1', to: 'arduino-uno:5V', wire: 'red' },
          { from: 'potentiometer:pin2', to: 'arduino-uno:GND', wire: 'black' },
          { from: 'potentiometer:wiper', to: 'arduino-uno:A0', wire: 'blue' },
        ],
        code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(A0);
  int angle = map(potValue, 0, 1023, 0, 180);
  
  myServo.write(angle);
  
  Serial.print("Giá trị Pot: ");
  Serial.print(potValue);
  Serial.print(" -> Góc: ");
  Serial.println(angle);
  
  delay(15);
}`,
        explanation:
          'Điều khiển góc quay servo motor (0-180°) bằng potentiometer. Hàm map() chuyển đổi giá trị analog (0-1023) thành góc (0-180°).',
        tips: [
          'Servo SG90 hoạt động với tín hiệu PWM từ pin có dấu ~ (PWM)',
          'Potentiometer tạo ra điện áp thay đổi khi xoay núm',
          'Hàm map() rất hữu ích để chuyển đổi giá trị giữa các khoảng',
        ],
        troubleshooting: [
          'Servo không quay: Kiểm tra nguồn 5V và pin tín hiệu',
          'Quay giật: Kiểm tra delay và kết nối potentiometer',
          'Không đúng góc: Kiểm tra calibration và hàm map()',
        ],
      },
      {
        name: 'Hệ thống báo động',
        difficulty: 'Nâng cao',
        estimatedTime: '20 phút',
        components: [
          {
            id: 'arduino-uno',
            name: 'Arduino Uno',
            type: 'microcontroller',
            image: '/images/components/arduino-uno.png',
            pins: ['5V', 'GND', 'D2', 'D8', 'D12', 'A0'],
            connections: [],
            position: { x: 100, y: 100 },
          },
          {
            id: 'ultrasonic-hc-sr04',
            name: 'Cảm biến siêu âm HC-SR04',
            type: 'sensor',
            image: '/images/components/hc-sr04.png',
            pins: ['VCC', 'TRIG', 'ECHO', 'GND'],
            connections: [],
            position: { x: 350, y: 150 },
          },
          {
            id: 'buzzer',
            name: 'Còi báo động',
            type: 'output',
            image: '/images/components/buzzer.png',
            pins: ['positive', 'negative'],
            connections: [],
            position: { x: 300, y: 250 },
          },
          {
            id: 'led-red',
            name: 'LED Đỏ',
            type: 'output',
            image: '/images/components/led-red.png',
            pins: ['anode', 'cathode'],
            connections: [],
            position: { x: 400, y: 200 },
          },
        ],
        targetConnections: [
          { from: 'ultrasonic-hc-sr04:VCC', to: 'arduino-uno:5V', wire: 'red' },
          { from: 'ultrasonic-hc-sr04:GND', to: 'arduino-uno:GND', wire: 'black' },
          { from: 'ultrasonic-hc-sr04:TRIG', to: 'arduino-uno:D8', wire: 'blue' },
          { from: 'ultrasonic-hc-sr04:ECHO', to: 'arduino-uno:D2', wire: 'green' },
          { from: 'buzzer:positive', to: 'arduino-uno:D12', wire: 'yellow' },
          { from: 'buzzer:negative', to: 'arduino-uno:GND', wire: 'black' },
          { from: 'led-red:anode', to: 'arduino-uno:D13', wire: 'red' },
          { from: 'led-red:cathode', to: 'arduino-uno:GND', wire: 'black' },
        ],
        code: `#define TRIG_PIN 8
#define ECHO_PIN 2
#define BUZZER_PIN 12
#define LED_PIN 13

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  long duration, distance;
  
  // Gửi tín hiệu siêu âm
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  // Đọc tín hiệu phản hồi
  duration = pulseIn(ECHO_PIN, HIGH);
  distance = duration * 0.034 / 2;
  
  Serial.print("Khoảng cách: ");
  Serial.println(distance);
  
  // Báo động nếu phát hiện vật thể gần
  if (distance < 20) {
    digitalWrite(LED_PIN, HIGH);
    digitalWrite(BUZZER_PIN, HIGH);
    delay(200);
    digitalWrite(LED_PIN, LOW);
    digitalWrite(BUZZER_PIN, LOW);
    delay(200);
  } else {
    digitalWrite(LED_PIN, LOW);
    digitalWrite(BUZZER_PIN, LOW);
  }
  
  delay(100);
}`,
        explanation:
          'Hệ thống báo động sử dụng cảm biến siêu âm để phát hiện vật thể. Khi có vật thể trong phạm vi 20cm, LED nhấp nháy và còi kêu.',
        tips: [
          'Cảm biến HC-SR04 đo khoảng cách bằng sóng siêu âm',
          'Tính khoảng cách: distance = (duration × 0.034) / 2',
          'Có thể điều chỉnh ngưỡng cảnh báo trong code',
        ],
        troubleshooting: [
          'Đọc khoảng cách không chính xác: Kiểm tra TRIG và ECHO pins',
          'Còi không kêu: Kiểm tra nguồn và pin buzzer',
          'LED không sáng: Kiểm tra kết nối LED và GND',
        ],
      },
    ],
    dragDropConfig: {
      componentLibrary: [
        'Arduino Uno',
        'LED Đỏ',
        'LED Xanh',
        'LED Vàng',
        'Điện trở 220Ω',
        'Điện trở 1kΩ',
        'Điện trở 10kΩ',
        'Breadboard',
        'Cảm biến DHT11',
        'Servo SG90',
        'Potentiometer',
        'Cảm biến HC-SR04',
        'Còi báo động',
        'Nút nhấn',
        'Tụ điện',
        'Dây nối',
      ],
      wireColors: ['red', 'black', 'blue', 'green', 'yellow', 'orange', 'purple', 'white'],
      snapDistance: 20,
      gridSize: 10,
      zoomRange: [0.5, 2.0],
    },
  },
  'stem-experiment-lab': {
    experiments: [
      {
        name: 'Thí nghiệm về áp suất nước',
        materials: ['Chai nhựa trong suốt', 'Đinh hoặc kim', 'Nước', 'Thước đo', 'Khăn lau'],
        procedure: [
          'Chuẩn bị chai nhựa trong suốt (1.5L)',
          'Dùng đinh khoan 3 lỗ nhỏ theo chiều dọc chai, cách đều nhau 5cm',
          'Đổ đầy nước vào chai và đậy nắp',
          'Mở nắp và quan sát tia nước phun ra từ các lỗ',
          'Đo khoảng cách nước phun được từ mỗi lỗ',
          'Ghi chép kết quả và so sánh',
        ],
        observation:
          'Tia nước ở lỗ thấp nhất phun xa nhất (khoảng 30-40cm), tia nước ở lỗ cao nhất phun gần nhất (khoảng 10-15cm)',
        explanation:
          'Áp suất nước tăng theo độ sâu do trọng lượng cột nước bên trên. Công thức: P = ρgh (ρ: khối lượng riêng, g: gia tốc trọng trường, h: độ sâu)',
        videoUrl: 'https://www.youtube.com/watch?v=w_3ZWZ4aLlk', // Water pressure physics demo
        difficulty: 'Cơ bản',
        estimatedTime: '15 phút',
        safetyTips: [
          'Cẩn thận khi dùng đinh để tránh bị đâm',
          'Làm thí nghiệm ở ngoài trời hoặc có khăn lau',
          'Đảm bảo có người lớn giám sát',
        ],
        quiz: {
          question: 'Tại sao tia nước ở lỗ thấp phun xa hơn?',
          options: ['Lỗ to hơn', 'Áp suất cao hơn do độ sâu', 'Nước trong hơn', 'Ngẫu nhiên'],
          correct: 1,
          explanation:
            'Áp suất chất lỏng tăng theo độ sâu, nên lỗ càng sâu thì áp suất càng lớn, làm nước phun xa hơn.',
        },
      },
      {
        name: 'Thí nghiệm về điện từ - Nam châm điện',
        materials: [
          'Pin AA (1.5V)',
          'Dây đồng có bọc cách điện (1m)',
          'Đinh sắt lớn',
          'Kẹp giấy nhỏ (10-15 cái)',
          'Băng keo',
        ],
        procedure: [
          'Quấn dây đồng quanh đinh sắt 30-40 vòng, để lại 2 đầu dây dài khoảng 10cm',
          'Cố định cuộn dây bằng băng keo',
          'Nối một đầu dây với cực dương (+) của pin',
          'Thử hút các kẹp giấy bằng đầu đinh',
          'Nối đầu dây còn lại với cực âm (-) của pin',
          'Thử hút kẹp giấy và đếm số lượng hút được',
          'Ngắt kết nối pin và thử lại',
        ],
        observation: 'Khi có điện, đinh sắt hút được 8-12 kẹp giấy. Khi ngắt điện, không hút được kẹp giấy nào',
        explanation:
          'Dòng điện chạy qua cuộn dây tạo ra từ trường xung quanh, biến đinh sắt thành nam châm điện. Khi ngắt điện, từ trường biến mất.',
        videoUrl: 'https://www.youtube.com/watch?v=liZX2UgzI1U', // Electromagnet physics demo
        difficulty: 'Trung bình',
        estimatedTime: '20 phút',
        safetyTips: [
          'Không để pin nối liên tục quá lâu để tránh nóng',
          'Kiểm tra dây không bị đứt trước khi làm',
          'Tháo pin khi không sử dụng',
        ],
        quiz: {
          question: 'Điều gì tạo ra từ trường trong nam châm điện?',
          options: ['Đinh sắt', 'Dây đồng', 'Dòng điện', 'Kẹp giấy'],
          correct: 2,
          explanation: 'Dòng điện chạy qua cuộn dây tạo ra từ trường, đây là nguyên lý cơ bản của điện từ học.',
        },
      },
      {
        name: 'Thí nghiệm quang học - Phản xạ ánh sáng',
        materials: ['Gương phẳng nhỏ', 'Đèn pin LED', 'Giấy trắng A4', 'Thước đo góc (compa)', 'Bút chì', 'Thước kẻ'],
        procedure: [
          'Đặt gương phẳng thẳng đứng trên giấy trắng',
          'Vẽ đường vuông góc với gương (pháp tuyến)',
          'Chiếu tia sáng từ đèn pin vào gương với góc 30° so với pháp tuyến',
          'Đánh dấu đường tia tới và tia phản xạ trên giấy',
          'Đo góc tới và góc phản xạ bằng thước đo góc',
          'Lặp lại với các góc 45°, 60°',
          'Ghi chép và so sánh kết quả',
        ],
        observation: 'Góc phản xạ luôn bằng góc tới trong tất cả các trường hợp: 30°=30°, 45°=45°, 60°=60°',
        explanation:
          'Định luật phản xạ ánh sáng: góc tới bằng góc phản xạ, và tia tới, tia phản xạ cùng nằm trong một mặt phẳng với pháp tuyến.',
        videoUrl: 'https://www.youtube.com/watch?v=y9c62n6o6zM', // Light reflection physics demo
        difficulty: 'Cơ bản',
        estimatedTime: '25 phút',
        safetyTips: [
          'Không chiếu đèn pin trực tiếp vào mắt',
          'Cẩn thận với gương để tránh vỡ',
          'Làm thí nghiệm trong phòng tối để thấy rõ tia sáng',
        ],
        quiz: {
          question: 'Nếu góc tới là 45°, góc phản xạ sẽ là bao nhiêu?',
          options: ['30°', '45°', '60°', '90°'],
          correct: 1,
          explanation:
            'Theo định luật phản xạ, góc phản xạ luôn bằng góc tới, vì vậy nếu góc tới là 45° thì góc phản xạ cũng là 45°.',
        },
      },
    ],
  },
  'robotics-navigation': {
    mazes: [
      {
        name: 'Mê cung đơn giản',
        grid: [
          [1, 1, 1, 1, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 1, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 1, 1, 1, 1],
        ],
        start: [1, 1],
        end: [3, 3],
        commands: ['MOVE_UP', 'MOVE_DOWN', 'MOVE_LEFT', 'MOVE_RIGHT'],
        solution: ['MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_DOWN', 'MOVE_DOWN'],
      },
      {
        name: 'Mê cung phức tạp',
        grid: [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 1, 0, 0, 0, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 1, 0, 1],
          [1, 1, 1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
        ],
        start: [1, 1],
        end: [5, 1],
        commands: ['MOVE_UP', 'MOVE_DOWN', 'MOVE_LEFT', 'MOVE_RIGHT'],
        solution: ['MOVE_DOWN', 'MOVE_DOWN', 'MOVE_RIGHT', 'MOVE_RIGHT', 'MOVE_DOWN', 'MOVE_LEFT', 'MOVE_LEFT'],
      },
    ],
  },
  'scratch-animation-studio': {
    projects: [
      {
        name: 'Nhân vật chạy',
        difficulty: 'Cơ bản',
        estimatedTime: '15 phút',
        sprites: [
          {
            id: 'cat-sprite',
            name: 'Mèo',
            image: '/images/sprites/cat.png',
            costumes: ['cat-a', 'cat-b'],
            position: { x: 0, y: 0 },
            properties: {
              size: 100,
              direction: 90,
              visible: true,
              draggable: true,
            },
          },
          {
            id: 'forest-bg',
            name: 'Nền rừng',
            image: '/images/backgrounds/forest.png',
            costumes: ['forest'],
            position: { x: 0, y: 0 },
            properties: {
              size: 100,
              direction: 0,
              visible: true,
              draggable: false,
            },
          },
        ],
        availableBlocks: [
          {
            category: 'events',
            blocks: [
              {
                id: 'when-flag-clicked',
                name: 'when green flag clicked',
                code: 'when flag clicked',
                shape: 'hat',
                color: '#FFAB19',
              },
            ],
          },
          {
            category: 'control',
            blocks: [
              {
                id: 'forever',
                name: 'forever',
                code: 'forever',
                shape: 'stack',
                color: '#FFAB19',
              },
            ],
          },
          {
            category: 'motion',
            blocks: [
              {
                id: 'move-steps',
                name: 'move 10 steps',
                code: 'move {} steps',
                inputs: [{ type: 'number', placeholder: '10' }],
                shape: 'stack',
                color: '#4C97FF',
              },
              {
                id: 'bounce-edge',
                name: 'if on edge, bounce',
                code: 'if on edge, bounce',
                shape: 'stack',
                color: '#4C97FF',
              },
            ],
          },
        ],
        targetScript: [
          {
            spriteId: 'cat-sprite',
            blocks: [
              {
                blockId: 'when-flag-clicked',
                children: [
                  {
                    blockId: 'forever',
                    children: [{ blockId: 'move-steps', inputs: [10] }, { blockId: 'bounce-edge' }],
                  },
                ],
              },
            ],
          },
        ],
        challenge: 'Tạo hoạt hình mèo chạy qua lại màn hình bằng cách kéo thả các khối lệnh',
        steps: [
          'Kéo khối "when green flag clicked" vào vùng script',
          'Kéo khối "forever" nối vào bên dưới',
          'Trong khối forever, kéo "move 10 steps"',
          'Kéo tiếp "if on edge, bounce" để mèo không chạy ra ngoài màn hình',
        ],
        tips: [
          'Các khối phải nối chặt để tạo thành script hoàn chỉnh',
          'Khối "forever" sẽ lặp lại mãi mãi',
          'Thử thay đổi số bước di chuyển để xem hiệu ứng',
        ],
        expectedOutput: 'Mèo chạy qua lại màn hình liên tục khi nhấn cờ xanh',
        validationRules: {
          requiredBlocks: ['when-flag-clicked', 'forever', 'move-steps', 'bounce-edge'],
          minimumBlocks: 4,
          mustUseSprites: ['cat-sprite'],
        },
      },
      {
        name: 'Trò chơi đuổi bắt',
        difficulty: 'Trung bình',
        estimatedTime: '25 phút',
        sprites: [
          {
            id: 'cat-sprite',
            name: 'Mèo',
            image: '/images/sprites/cat.png',
            costumes: ['cat-a', 'cat-b'],
            position: { x: -150, y: 0 },
            properties: {
              size: 80,
              direction: 90,
              visible: true,
              draggable: true,
            },
          },
          {
            id: 'mouse-sprite',
            name: 'Chuột',
            image: '/images/sprites/mouse.png',
            costumes: ['mouse-a', 'mouse-b'],
            position: { x: 150, y: 0 },
            properties: {
              size: 60,
              direction: 90,
              visible: true,
              draggable: true,
            },
          },
          {
            id: 'cheese-sprite',
            name: 'Phô mai',
            image: '/images/sprites/cheese.png',
            costumes: ['cheese'],
            position: { x: 0, y: 100 },
            properties: {
              size: 50,
              direction: 0,
              visible: true,
              draggable: true,
            },
          },
        ],
        availableBlocks: [
          {
            category: 'events',
            blocks: [
              {
                id: 'when-flag-clicked',
                name: 'when green flag clicked',
                code: 'when flag clicked',
                shape: 'hat',
                color: '#FFAB19',
              },
            ],
          },
          {
            category: 'motion',
            blocks: [
              {
                id: 'point-towards',
                name: 'point towards mouse',
                code: 'point towards {}',
                inputs: [{ type: 'dropdown', options: ['mouse-sprite', 'cheese-sprite'] }],
                shape: 'stack',
                color: '#4C97FF',
              },
              {
                id: 'move-steps',
                name: 'move 5 steps',
                code: 'move {} steps',
                inputs: [{ type: 'number', placeholder: '5' }],
                shape: 'stack',
                color: '#4C97FF',
              },
            ],
          },
          {
            category: 'control',
            blocks: [
              {
                id: 'forever',
                name: 'forever',
                code: 'forever',
                shape: 'stack',
                color: '#FFAB19',
              },
              {
                id: 'if-then',
                name: 'if then',
                code: 'if {} then',
                inputs: [{ type: 'boolean_input' }],
                shape: 'stack',
                color: '#FFAB19',
              },
            ],
          },
          {
            category: 'sensing',
            blocks: [
              {
                id: 'touching-sprite',
                name: 'touching cheese?',
                code: 'touching {}?',
                inputs: [{ type: 'dropdown', options: ['cheese-sprite'] }],
                shape: 'boolean',
                color: '#5CB1D6',
              },
            ],
          },
          {
            category: 'variables',
            blocks: [
              {
                id: 'change-score',
                name: 'change score by 1',
                code: 'change {} by {}',
                inputs: [
                  { type: 'dropdown', options: ['score'] },
                  { type: 'number', placeholder: '1' },
                ],
                shape: 'stack',
                color: '#FF8C1A',
              },
            ],
          },
        ],
        targetScript: [
          {
            spriteId: 'cat-sprite',
            blocks: [
              {
                blockId: 'when-flag-clicked',
                children: [
                  {
                    blockId: 'forever',
                    children: [
                      { blockId: 'point-towards', inputs: ['mouse-sprite'] },
                      { blockId: 'move-steps', inputs: [5] },
                      {
                        blockId: 'if-then',
                        inputs: [{ blockId: 'touching-sprite', inputs: ['cheese-sprite'] }],
                        children: [{ blockId: 'change-score', inputs: ['score', 1] }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        challenge: 'Tạo game mèo đuổi chuột để ăn phô mai và ghi điểm',
        steps: [
          'Lập trình mèo: when flag clicked -> forever',
          'Trong forever: point towards mouse, move 5 steps',
          'Thêm điều kiện: if touching cheese then change score by 1',
          'Chạy thử và điều chỉnh tốc độ di chuyển',
        ],
        tips: [
          'Mèo sẽ tự động đuổi theo chuột',
          'Khi mèo chạm phô mai sẽ được điểm',
          'Có thể thêm âm thanh khi ăn phô mai',
        ],
        expectedOutput: 'Mèo đuổi theo chuột, ghi điểm khi chạm phô mai',
        validationRules: {
          requiredBlocks: [
            'when-flag-clicked',
            'forever',
            'point-towards',
            'move-steps',
            'if-then',
            'touching-sprite',
            'change-score',
          ],
          minimumBlocks: 7,
          mustUseSprites: ['cat-sprite', 'mouse-sprite', 'cheese-sprite'],
        },
      },
    ],
    blockLibrary: {
      motion: [
        { id: 'move-steps', name: 'move 10 steps', code: 'move {} steps', shape: 'stack', color: '#4C97FF' },
        {
          id: 'turn-right',
          name: 'turn right 15 degrees',
          code: 'turn right {} degrees',
          shape: 'stack',
          color: '#4C97FF',
        },
        {
          id: 'turn-left',
          name: 'turn left 15 degrees',
          code: 'turn left {} degrees',
          shape: 'stack',
          color: '#4C97FF',
        },
        { id: 'point-towards', name: 'point towards', code: 'point towards {}', shape: 'stack', color: '#4C97FF' },
        { id: 'bounce-edge', name: 'if on edge, bounce', code: 'if on edge, bounce', shape: 'stack', color: '#4C97FF' },
      ],
      looks: [
        { id: 'say-hello', name: 'say Hello!', code: 'say {} for {} seconds', shape: 'stack', color: '#9966FF' },
        { id: 'change-costume', name: 'next costume', code: 'next costume', shape: 'stack', color: '#9966FF' },
        { id: 'change-size', name: 'change size by 10', code: 'change size by {}', shape: 'stack', color: '#9966FF' },
        { id: 'show', name: 'show', code: 'show', shape: 'stack', color: '#9966FF' },
        { id: 'hide', name: 'hide', code: 'hide', shape: 'stack', color: '#9966FF' },
      ],
      control: [
        {
          id: 'when-flag-clicked',
          name: 'when green flag clicked',
          code: 'when flag clicked',
          shape: 'hat',
          color: '#FFAB19',
        },
        { id: 'forever', name: 'forever', code: 'forever', shape: 'stack', color: '#FFAB19' },
        { id: 'repeat', name: 'repeat 10', code: 'repeat {}', shape: 'stack', color: '#FFAB19' },
        { id: 'if-then', name: 'if then', code: 'if {} then', shape: 'stack', color: '#FFAB19' },
        { id: 'wait', name: 'wait 1 seconds', code: 'wait {} seconds', shape: 'stack', color: '#FFAB19' },
      ],
      sensing: [
        { id: 'touching-sprite', name: 'touching sprite?', code: 'touching {}?', shape: 'boolean', color: '#5CB1D6' },
        { id: 'key-pressed', name: 'key space pressed?', code: 'key {} pressed?', shape: 'boolean', color: '#5CB1D6' },
        { id: 'mouse-x', name: 'mouse x', code: 'mouse x', shape: 'reporter', color: '#5CB1D6' },
        { id: 'mouse-y', name: 'mouse y', code: 'mouse y', shape: 'reporter', color: '#5CB1D6' },
      ],
      operators: [
        { id: 'add', name: '+ ', code: '{} + {}', shape: 'reporter', color: '#59C059' },
        { id: 'subtract', name: '- ', code: '{} - {}', shape: 'reporter', color: '#59C059' },
        { id: 'multiply', name: '* ', code: '{} * {}', shape: 'reporter', color: '#59C059' },
        { id: 'divide', name: '/ ', code: '{} / {}', shape: 'reporter', color: '#59C059' },
      ],
      variables: [
        { id: 'set-variable', name: 'set score to 0', code: 'set {} to {}', shape: 'stack', color: '#FF8C1A' },
        { id: 'change-variable', name: 'change score by 1', code: 'change {} by {}', shape: 'stack', color: '#FF8C1A' },
        {
          id: 'show-variable',
          name: 'show variable score',
          code: 'show variable {}',
          shape: 'stack',
          color: '#FF8C1A',
        },
      ],
    },
    dragDropConfig: {
      snapDistance: 15,
      blockSpacing: 5,
      canvasSize: { width: 800, height: 600 },
      spriteLibrary: ['Cat', 'Dog', 'Mouse', 'Bird', 'Fish', 'Ball', 'Apple', 'Cheese', 'Star'],
    },
  },
  'ai-ethics-dilemma': {
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
    ],
  },
  'quantum-basics': {
    concepts: [
      {
        name: 'Qubit',
        description: 'Đơn vị thông tin cơ bản của máy tính lượng tử',
        states: ['|0⟩', '|1⟩', 'Superposition'],
        quiz: {
          question: 'Qubit khác bit truyền thống như thế nào?',
          options: [
            'Chỉ lưu được 0 hoặc 1',
            'Có thể ở trạng thái chồng chất',
            'Lưu trữ nhiều bit hơn',
            'Tốc độ nhanh hơn',
          ],
          correct: 1,
          explanation: 'Qubit có thể ở trạng thái chồng chất của cả 0 và 1 đồng thời.',
        },
      },
      {
        name: 'Entanglement',
        description: 'Hiện tượng hai qubit liên kết lượng tử với nhau',
        states: ['Separated', 'Entangled', 'Measured'],
        quiz: {
          question: 'Entanglement có ý nghĩa gì?',
          options: [
            'Hai qubit hoàn toàn độc lập',
            'Đo qubit này ảnh hưởng ngay lập tức đến qubit kia',
            'Hai qubit có cùng giá trị',
            'Không thể đo được hai qubit',
          ],
          correct: 1,
          explanation: 'Khi đo một qubit entangled, trạng thái của qubit kia thay đổi ngay lập tức.',
        },
      },
    ],
  },
  'blockchain-explorer': {
    blocks: [
      {
        index: 0,
        transactions: ['Genesis Block'],
        hash: '000000abc123',
        previousHash: '0',
        nonce: 12345,
        difficulty: 3,
        timestamp: 1641024000,
        reward: 50,
      },
      {
        index: 1,
        transactions: ['Alice -> Bob: 10 BTC', 'Bob -> Charlie: 5 BTC'],
        hash: '000001def456',
        previousHash: '000000abc123',
        nonce: 67890,
        difficulty: 3,
        timestamp: 1641110400,
        reward: 25,
      },
    ],
    challenges: [
      {
        type: 'mining',
        description: 'Tìm nonce để hash bắt đầu bằng 3 số 0',
        target: '000',
        verification: 'SHA256',
      },
      {
        type: 'validation',
        description: 'Kiểm tra tính hợp lệ của blockchain',
        target: 'valid_chain',
        verification: 'previous_hash_check',
      },
    ],
  },
  'climate-modeling': {
    scenarios: [
      {
        name: 'Tăng CO2 10%',
        parameters: { co2: 410, temperature: 1.2, seaLevel: 20 },
        effects: ['Tăng nhiệt độ 0.3°C', 'Băng tan nhanh hơn', 'Thời tiết cực đoan'],
        solutions: ['Năng lượng tái tạo', 'Trồng rừng', 'Giảm phát thải'],
        quiz: {
          question: 'Tác động chính của việc tăng CO2 là gì?',
          options: ['Giảm nhiệt độ', 'Tăng nhiệt độ', 'Không thay đổi', 'Giảm mực nước biển'],
          correct: 1,
        },
      },
      {
        name: 'Phá rừng Amazon 50%',
        parameters: { co2: 450, temperature: 2.0, seaLevel: 30 },
        effects: ['Mất đa dạng sinh học', 'Tăng CO2', 'Thay đổi khí hậu khu vực'],
        solutions: ['Bảo vệ rừng', 'Trồng rừng mới', 'Phát triển bền vững'],
        quiz: {
          question: 'Rừng Amazon quan trọng vì lý do gì?',
          options: ['Sản xuất gỗ', 'Hấp thụ CO2', 'Du lịch', 'Khai thác'],
          correct: 1,
        },
      },
    ],
  },
  'cybersecurity-defense': {
    attacks: [
      {
        type: 'Phishing Email',
        indicators: ['Suspicious sender', 'Urgent language', 'Unknown links'],
        defense: ['Email filtering', 'User training', 'Multi-factor auth'],
        severity: 'Cao',
        description: 'Email giả mạo để đánh cắp thông tin cá nhân',
      },
      {
        type: 'Ransomware',
        indicators: ['File encryption', 'Ransom message', 'System slowdown'],
        defense: ['Regular backups', 'Updated antivirus', 'Network segmentation'],
        severity: 'Nghiêm trọng',
        description: 'Mã độc mã hóa dữ liệu để đòi tiền chuộc',
      },
      {
        type: 'DDoS Attack',
        indicators: ['Website slow/down', 'High traffic', 'Server overload'],
        defense: ['DDoS protection', 'Load balancing', 'Traffic filtering'],
        severity: 'Trung bình',
        description: 'Tấn công từ chối dịch vụ bằng cách gửi quá nhiều request',
      },
    ],
    challenges: [
      {
        scenario: 'Công ty nhận được email nghi ngờ với file đính kèm .exe',
        threats: ['Malware', 'Phishing', 'Social Engineering'],
        solutions: ['Không mở file', 'Kiểm tra với IT', 'Scan virus', 'Báo cáo sự cố'],
        correct: [0, 1, 2, 3],
      },
    ],
  },
  'data-visualization': {
    datasets: [
      {
        name: 'Global Temperature',
        data: [
          { year: 2020, temp: 14.9 },
          { year: 2021, temp: 15.1 },
          { year: 2022, temp: 15.3 },
          { year: 2023, temp: 15.5 },
          { year: 2024, temp: 15.7 },
        ],
        description: 'Nhiệt độ trung bình toàn cầu theo năm',
        type: 'line',
      },
      {
        name: 'Energy Sources',
        data: [
          { year: 2024, temp: 30 }, // representing percentage
          { year: 2024, temp: 25 },
          { year: 2024, temp: 20 },
          { year: 2024, temp: 15 },
          { year: 2024, temp: 10 },
        ],
        description: 'Tỷ lệ các nguồn năng lượng: Hóa thạch, Mặt trời, Gió, Nước, Khác',
        type: 'pie',
      },
    ],
    challenges: [
      {
        question: 'Biểu đồ nào phù hợp nhất để hiển thị xu hướng nhiệt độ theo thời gian?',
        dataset: 'Global Temperature',
        options: ['Biểu đồ cột', 'Biểu đồ đường', 'Biểu đồ tròn', 'Biểu đồ điểm'],
        correct: 1,
      },
    ],
  },
  'space-exploration': {
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
        challenges: ['Extreme radiation', 'Communication delay', 'Fuel requirements'],
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
        explanation: 'Du hành sao Hỏa phải đối mặt với nhiều thử thách phức tạp.',
      },
    ],
  },
  'neural-network-builder': {
    architectures: [
      {
        name: 'Simple Perceptron',
        layers: [
          { type: 'input', neurons: 2, activation: 'linear' },
          { type: 'output', neurons: 1, activation: 'sigmoid' },
        ],
        description: 'Mạng neural đơn giản cho bài toán phân loại nhị phân',
        use_case: 'Phân loại AND, OR logic gates',
        challenge: 'Kéo thả các lớp để tạo mạng neural',
        components: ['Input Layer', 'Output Layer', 'Activation Function'],
        solution: ['Input Layer (2 neurons)', 'Output Layer (1 neuron)', 'Sigmoid activation'],
      },
      {
        name: 'Multi-layer Perceptron',
        layers: [
          { type: 'input', neurons: 784, activation: 'relu' },
          { type: 'hidden', neurons: 128, activation: 'relu' },
          { type: 'hidden', neurons: 64, activation: 'relu' },
          { type: 'output', neurons: 10, activation: 'softmax' },
        ],
        description: 'Mạng neural nhiều lớp cho nhận diện chữ số',
        use_case: 'Nhận diện chữ số viết tay MNIST',
        challenge: 'Thiết kế mạng neural cho bài toán phân loại 10 lớp',
        components: ['Input Layer', 'Hidden Layer', 'Output Layer', 'ReLU', 'Softmax'],
        solution: ['Input (784)', 'Hidden (128)', 'Hidden (64)', 'Output (10)', 'Softmax'],
      },
    ],
    challenges: [
      {
        problem: 'Nhận diện khuôn mặt',
        requirements: ['Input: 64x64 pixel image', 'Output: Person identity', 'Hidden layers needed'],
        solution: 'CNN with convolutional and pooling layers',
        architecture: 'Convolutional Neural Network',
        quiz: {
          question: 'Lớp nào phù hợp nhất cho xử lý ảnh?',
          options: ['Dense Layer', 'Convolutional Layer', 'LSTM Layer', 'Dropout Layer'],
          correct: 1,
          explanation: 'Convolutional Layer rất hiệu quả trong việc phát hiện đặc trưng trong ảnh',
        },
      },
      {
        problem: 'Dự đoán giá cổ phiếu',
        requirements: ['Input: Historical stock prices', 'Output: Next day price', 'Time series data'],
        solution: 'LSTM/GRU neural network',
        architecture: 'Recurrent Neural Network',
        quiz: {
          question: 'Loại mạng nào tốt nhất cho dữ liệu time series?',
          options: ['CNN', 'RNN/LSTM', 'Dense Network', 'Autoencoder'],
          correct: 1,
          explanation: 'RNN và LSTM được thiết kế đặc biệt cho dữ liệu chuỗi thời gian',
        },
      },
    ],
    concepts: [
      {
        name: 'Forward Propagation',
        description: 'Quá trình truyền dữ liệu từ input đến output',
        formula: 'y = f(Wx + b)',
        example: 'Input → Hidden → Output',
      },
      {
        name: 'Backpropagation',
        description: 'Quá trình cập nhật trọng số dựa trên lỗi',
        formula: 'W = W - α∇L',
        example: 'Tính gradient và cập nhật weights',
      },
    ],
  },
  'math-puzzle': {
    puzzles: [
      {
        title: 'Dãy số Fibonacci',
        question: 'Số tiếp theo trong dãy: 1, 1, 2, 3, 5, 8, ?',
        type: 'pattern',
        answer: 13,
        explanation: 'Dãy Fibonacci: mỗi số bằng tổng của hai số trước đó',
        difficulty: 'Cơ bản',
      },
      {
        title: 'Diện tích hình tròn',
        question: 'Tính diện tích hình tròn có bán kính 5cm (π ≈ 3.14)',
        type: 'calculation',
        answer: 78.5,
        explanation: 'Diện tích = π × r² = 3.14 × 5² = 78.5 cm²',
        difficulty: 'Trung bình',
      },
      {
        title: 'Bài toán logic',
        question: 'Nếu tất cả chim đều bay được, và chim cánh cụt là chim, thì chim cánh cụt có bay được không?',
        type: 'logic',
        answer: 'Không',
        explanation: 'Mệnh đề đầu tiên sai vì chim cánh cụt không bay được',
        difficulty: 'Nâng cao',
      },
    ],
  },
  'chemistry-lab': {
    experiments: [
      {
        name: 'Phản ứng axit-bazơ',
        chemicals: ['HCl 0.1M', 'NaOH 0.1M', 'Phenolphthalein', 'Nước cất'],
        procedure: [
          'Đổ 20ml HCl vào cốc',
          'Thêm 2-3 giọt phenolphthalein',
          'Từ từ thêm NaOH cho đến khi đổi màu',
          'Ghi chú thể tích NaOH đã dùng',
        ],
        reaction: 'HCl + NaOH → NaCl + H₂O',
        observation: 'Dung dịch chuyển từ không màu sang hồng nhạt',
        safety: ['Đeo kính bảo hộ', 'Đeo găng tay', 'Sử dụng trong phòng thông gió'],
        quiz: {
          question: 'Tại sao dung dịch đổi màu?',
          options: ['pH thay đổi', 'Nhiệt độ tăng', 'Có khí thoát ra', 'Tạo kết tủa'],
          correct: 0,
        },
      },
    ],
  },
  'biology-ecosystem': {
    ecosystems: [
      {
        name: 'Rừng nhiệt đới',
        organisms: [
          { name: 'Cây xanh', type: 'producer', energy: 100 },
          { name: 'Thỏ rừng', type: 'primary_consumer', energy: 10 },
          { name: 'Hổ', type: 'secondary_consumer', energy: 1 },
          { name: 'Vi khuẩn', type: 'decomposer', energy: 5 },
        ],
        food_chains: [
          ['Cây xanh', 'Thỏ rừng', 'Hổ'],
          ['Cây xanh', 'Sâu bọ', 'Chim', 'Rắn'],
        ],
        challenges: [
          {
            question: 'Sinh vật nào có năng lượng cao nhất?',
            options: ['Hổ', 'Thỏ rừng', 'Cây xanh', 'Vi khuẩn'],
            correct: 2,
          },
        ],
      },
    ],
  },
  'history-timeline': {
    events: [
      {
        year: 1945,
        event: 'Độc lập Việt Nam',
        description: 'Hồ Chí Minh đọc Tuyên ngôn độc lập',
        category: 'Chính trị',
        importance: 'Cao',
      },
      {
        year: 1969,
        event: 'Con người lên Mặt trăng',
        description: 'Neil Armstrong bước chân đầu tiên lên Mặt trăng',
        category: 'Khoa học',
        importance: 'Cao',
      },
      {
        year: 1989,
        event: 'Sụp đổ Bức tường Berlin',
        description: 'Kết thúc Chiến tranh Lạnh',
        category: 'Chính trị',
        importance: 'Cao',
      },
      {
        year: 1991,
        event: 'World Wide Web',
        description: 'Tim Berners-Lee phát minh WWW',
        category: 'Khoa học',
        importance: 'Cao',
      },
    ],
    challenges: [
      {
        question: 'Sắp xếp các sự kiện theo thứ tự thời gian',
        timeline: [1969, 1945, 1991, 1989],
        correct_order: [1945, 1969, 1989, 1991],
      },
    ],
  },
  'robot-navigation-3d': {
    levels: [
      {
        id: 1,
        name: 'Mê cung cơ bản 3D',
        description: 'Học cách điều hướng robot trong không gian 3 chiều đơn giản',
        difficulty: 'Cơ bản',
        dimensions: { width: 8, height: 3, depth: 8 },
        start: { x: 0, y: 0, z: 0 },
        goal: { x: 7, y: 0, z: 7 },
        obstacles: [
          { x: 2, y: 0, z: 1, type: 'wall' },
          { x: 2, y: 0, z: 2, type: 'wall' },
          { x: 4, y: 0, z: 3, type: 'wall' },
          { x: 4, y: 0, z: 4, type: 'wall' },
          { x: 6, y: 0, z: 5, type: 'wall' },
          { x: 1, y: 1, z: 6, type: 'barrier' },
          { x: 5, y: 1, z: 2, type: 'barrier' },
        ],
        collectibles: [
          { x: 3, y: 0, z: 1, type: 'coin' },
          { x: 5, y: 0, z: 4, type: 'coin' },
          { x: 6, y: 1, z: 6, type: 'energy' },
        ],
        movingObstacles: [],
        timeLimit: 120,
        targetScore: 100,
        educational: {
          concept: 'Tìm đường cơ bản trong không gian 3D',
          algorithmFocus: 'A* algorithm với heuristic Manhattan',
          learningGoal: 'Hiểu khái niệm pathfinding và coordinate 3D',
        },
      },
      {
        id: 2,
        name: 'Thử thách nhiều tầng',
        description: 'Robot phải di chuyển qua nhiều tầng với cầu thang và thang máy',
        difficulty: 'Trung bình',
        dimensions: { width: 10, height: 5, depth: 10 },
        start: { x: 0, y: 0, z: 0 },
        goal: { x: 9, y: 4, z: 9 },
        obstacles: [
          { x: 3, y: 0, z: 3, type: 'wall' },
          { x: 4, y: 0, z: 3, type: 'wall' },
          { x: 5, y: 0, z: 3, type: 'wall' },
          { x: 7, y: 0, z: 5, type: 'wall' },
          { x: 8, y: 0, z: 5, type: 'wall' },
          { x: 2, y: 2, z: 6, type: 'wall' },
          { x: 3, y: 2, z: 6, type: 'wall' },
          { x: 6, y: 2, z: 2, type: 'barrier' },
          { x: 6, y: 2, z: 3, type: 'barrier' },
          { x: 1, y: 3, z: 8, type: 'wall' },
          { x: 2, y: 3, z: 8, type: 'wall' },
          { x: 7, y: 4, z: 1, type: 'barrier' },
        ],
        collectibles: [
          { x: 2, y: 0, z: 2, type: 'coin' },
          { x: 6, y: 1, z: 4, type: 'coin' },
          { x: 4, y: 2, z: 7, type: 'data' },
          { x: 8, y: 3, z: 3, type: 'energy' },
          { x: 5, y: 4, z: 8, type: 'data' },
        ],
        movingObstacles: [{ x: 5, y: 1, z: 5, pattern: 'circular', speed: 1.0, range: 2 }],
        timeLimit: 180,
        targetScore: 200,
        educational: {
          concept: 'Điều hướng đa tầng và tối ưu hóa đường đi',
          algorithmFocus: 'A* 3D với chi phí di chuyển giữa các tầng',
          learningGoal: 'Quản lý không gian 3D phức tạp và tối ưu hóa chi phí',
        },
      },
      {
        id: 3,
        name: 'Mê cung động 3D',
        description: 'Thách thức cao nhất với chướng ngại vật di chuyển và mê cung thay đổi',
        difficulty: 'Nâng cao',
        dimensions: { width: 12, height: 6, depth: 12 },
        start: { x: 0, y: 0, z: 0 },
        goal: { x: 11, y: 5, z: 11 },
        obstacles: [
          { x: 2, y: 0, z: 1, type: 'wall' },
          { x: 2, y: 0, z: 2, type: 'wall' },
          { x: 2, y: 0, z: 3, type: 'wall' },
          { x: 5, y: 0, z: 2, type: 'wall' },
          { x: 6, y: 0, z: 2, type: 'wall' },
          { x: 7, y: 0, z: 2, type: 'wall' },
          { x: 4, y: 1, z: 5, type: 'wall' },
          { x: 4, y: 1, z: 6, type: 'wall' },
          { x: 9, y: 1, z: 4, type: 'wall' },
          { x: 9, y: 1, z: 5, type: 'wall' },
          { x: 3, y: 2, z: 8, type: 'barrier' },
          { x: 4, y: 2, z: 8, type: 'barrier' },
          { x: 7, y: 2, z: 9, type: 'barrier' },
          { x: 8, y: 2, z: 9, type: 'barrier' },
          { x: 1, y: 3, z: 10, type: 'wall' },
          { x: 2, y: 3, z: 10, type: 'wall' },
          { x: 10, y: 3, z: 3, type: 'wall' },
          { x: 10, y: 3, z: 4, type: 'wall' },
          { x: 5, y: 4, z: 6, type: 'barrier' },
          { x: 6, y: 4, z: 6, type: 'barrier' },
          { x: 8, y: 5, z: 2, type: 'wall' },
          { x: 9, y: 5, z: 2, type: 'wall' },
        ],
        collectibles: [
          { x: 1, y: 0, z: 4, type: 'coin' },
          { x: 3, y: 0, z: 6, type: 'coin' },
          { x: 8, y: 1, z: 1, type: 'coin' },
          { x: 6, y: 1, z: 8, type: 'data' },
          { x: 2, y: 2, z: 5, type: 'energy' },
          { x: 9, y: 2, z: 7, type: 'coin' },
          { x: 5, y: 3, z: 3, type: 'data' },
          { x: 7, y: 3, z: 10, type: 'energy' },
          { x: 3, y: 4, z: 9, type: 'coin' },
          { x: 10, y: 4, z: 5, type: 'data' },
          { x: 4, y: 5, z: 7, type: 'energy' },
          { x: 8, y: 5, z: 8, type: 'data' },
        ],
        movingObstacles: [
          { x: 6, y: 0, z: 6, pattern: 'circular', speed: 1.2, range: 3 },
          { x: 3, y: 2, z: 3, pattern: 'linear', speed: 0.8, range: 4 },
          { x: 9, y: 3, z: 8, pattern: 'random', speed: 1.5, range: 2 },
          { x: 2, y: 4, z: 2, pattern: 'circular', speed: 1.0, range: 2 },
        ],
        timeLimit: 300,
        targetScore: 350,
        educational: {
          concept: 'Pathfinding động với chướng ngại vật di chuyển',
          algorithmFocus: 'A* động với re-planning và collision avoidance',
          learningGoal: 'Xử lý môi trường động và tối ưu hóa real-time',
        },
      },
    ],
    robot: {
      model: 'Explorer-3D v2.0',
      capabilities: [
        'Di chuyển 6 hướng (X, Y, Z)',
        'Phát hiện chướng ngại vật',
        'Thu thập vật phẩm',
        'Lên/xuống giữa các tầng',
        'Tránh chướng ngại vật di chuyển',
      ],
      sensors: [
        'LIDAR 360° 3D',
        'Camera RGB-D',
        'IMU (Inertial Measurement Unit)',
        'Proximity sensors',
        'GPS indoor positioning',
      ],
      maxSpeed: 2.5,
      batteryLife: 100,
    },
    algorithms: [
      {
        name: 'A* (A-Star) 3D',
        description: 'Thuật toán tìm đường tối ưu trong không gian 3 chiều',
        complexity: 'O(b^d) với b là branching factor, d là depth',
        advantages: [
          'Đảm bảo tìm được đường đi tối ưu',
          'Hiệu quả với heuristic tốt',
          'Linh hoạt với các loại terrain khác nhau',
        ],
        disadvantages: [
          'Tốn bộ nhớ khi không gian lớn',
          'Phức tạp khi có chướng ngại vật động',
          'Cần tính toán lại khi môi trường thay đổi',
        ],
      },
    ],
    gameSettings: {
      enableHints: true,
      showPathVisualization: true,
      allowAlgorithmSwitching: true,
      difficultyScaling: true,
    },
  },
  // Aquaculture IoT Manager 3D Game
  aquacultureIoTGame: {
    category: 'Smart Agriculture',
    title: 'Aquaculture IoT Manager 3D',
    description: 'Quản lý trang trại nuôi trồng thủy sản thông minh với hệ thống IoT sensors và monitoring',
    features: [
      'Môi trường 3D underwater với hệ sinh thái cá',
      'Hệ thống IoT sensors theo dõi thời gian thực',
      'Quản lý chất lượng nước và dinh dưỡng',
      'Tối ưu hóa sản xuất và hiệu quả kinh tế',
    ],
    fishSpecies: [
      {
        id: 'ca-tra',
        name: 'Cá Tra',
        nameEn: 'Basa Fish',
        optimalTemp: [26, 30],
        optimalPH: [6.5, 8.0],
        optimalO2: [4, 8],
        value: 50000,
        growthRate: 0.02,
        description: 'Loài cá nước ngọt phổ biến trong nuôi trồng thủy sản Việt Nam',
      },
      {
        id: 'tom-su',
        name: 'Tôm Sú',
        nameEn: 'Black Tiger Shrimp',
        optimalTemp: [26, 32],
        optimalPH: [7.0, 8.5],
        optimalO2: [5, 9],
        value: 120000,
        growthRate: 0.03,
        description: 'Tôm biển có giá trị kinh tế cao, yêu cầu môi trường nước chất lượng',
      },
      {
        id: 'ca-ro-phi',
        name: 'Cá Rô Phi',
        nameEn: 'Tilapia',
        optimalTemp: [24, 32],
        optimalPH: [6.0, 9.0],
        optimalO2: [3, 7],
        value: 30000,
        growthRate: 0.025,
        description: 'Loài cá dễ nuôi, thích ứng tốt với nhiều môi trường nước',
      },
    ],
    iotSensors: [
      {
        id: 'temp',
        name: 'Temperature Sensor',
        nameVi: 'Cảm biến nhiệt độ',
        unit: '°C',
        optimalRange: [24, 32],
        alertThreshold: [20, 35],
        description: 'Theo dõi nhiệt độ nước để đảm bảo môi trường sống tối ưu',
      },
      {
        id: 'ph',
        name: 'pH Sensor',
        nameVi: 'Cảm biến độ pH',
        unit: 'pH',
        optimalRange: [6.5, 8.5],
        alertThreshold: [5.5, 9.5],
        description: 'Kiểm soát độ axit-bazơ của nước',
      },
      {
        id: 'oxygen',
        name: 'Dissolved Oxygen Sensor',
        nameVi: 'Cảm biến oxy hòa tan',
        unit: 'mg/L',
        optimalRange: [4, 8],
        alertThreshold: [2, 12],
        description: 'Đo lượng oxy trong nước, quan trọng cho sự sống của cá',
      },
      {
        id: 'turbidity',
        name: 'Turbidity Sensor',
        nameVi: 'Cảm biến độ đục',
        unit: 'NTU',
        optimalRange: [0, 10],
        alertThreshold: [15, 50],
        description: 'Theo dõi độ trong của nước, chỉ báo chất lượng môi trường',
      },
    ],
    managementActions: [
      {
        id: 'feed',
        name: 'Cho ăn',
        description: 'Cung cấp thức ăn cho cá, tăng tốc độ phát triển',
        effect: 'Tăng sức khỏe cá +5%, tăng tốc độ tăng trưởng',
        cost: 10000,
      },
      {
        id: 'aerate',
        name: 'Sục khí',
        description: 'Tăng nồng độ oxy trong nước',
        effect: 'Oxy +2 mg/L, cải thiện môi trường sống',
        cost: 5000,
      },
      {
        id: 'clean',
        name: 'Làm sạch nước',
        description: 'Giảm độ đục và cải thiện chất lượng nước',
        effect: 'Độ đục -3 NTU, môi trường sạch hơn',
        cost: 15000,
      },
      {
        id: 'adjust',
        name: 'Điều chỉnh pH',
        description: 'Cân bằng độ axit-bazơ của nước',
        effect: 'pH về mức tối ưu 7.0±0.5',
        cost: 8000,
      },
    ],
  },
};

// Game progress and scoring
export interface GameProgress {
  score: number;
  accuracy: number;
  timeMs: number;
  completed: boolean;
  level?: number;
  lastPlayed: number;
}

export interface GamePerformance {
  accuracy: number;
  timeMs: number;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  correct: number;
  total: number;
}

export const GAME_PROGRESS = {
  saveProgress: (gameId: string, progress: Partial<GameProgress>) => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('k2ai_game_progress') || '{}');
      saved[gameId] = {
        ...progress,
        lastPlayed: Date.now(),
      };
      localStorage.setItem('k2ai_game_progress', JSON.stringify(saved));
    }
  },

  loadProgress: (gameId: string): GameProgress | null => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('k2ai_game_progress') || '{}');
      return saved[gameId] || null;
    }
    return null;
  },

  calculateScore: (gameId: string, performance: GamePerformance) => {
    const baseScore = 100;
    let multiplier = 1;

    // Time bonus (faster = higher score)
    if (performance.timeMs < 60000) multiplier += 0.5; // Under 1 minute
    if (performance.timeMs < 30000) multiplier += 0.5; // Under 30 seconds

    // Accuracy bonus
    if (performance.accuracy >= 90) multiplier += 0.3;
    if (performance.accuracy >= 95) multiplier += 0.2;

    // Difficulty bonus
    const difficultyMultipliers: Record<string, number> = {
      'Cơ bản': 1,
      'Trung bình': 1.2,
      'Nâng cao': 1.5,
    };

    return Math.round(baseScore * multiplier * (difficultyMultipliers[performance.difficulty] || 1));
  },
};

// 3D Robot Navigation Game Data
export interface RobotNavigationGameData {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  estimatedTime: string;
  category: 'programming' | 'algorithms' | '3d-visualization';
  levels: {
    id: number;
    name: string;
    description: string;
    gridSize: { width: number; height: number; depth: number };
    startPosition: { x: number; y: number; z: number };
    endPosition: { x: number; y: number; z: number };
    obstacles: Array<{ x: number; y: number; z: number; type: 'wall' | 'pit' | 'barrier' }>;
    collectibles?: Array<{ x: number; y: number; z: number; type: 'gem' | 'key' | 'data' }>;
    movingObstacles?: Array<{
      x: number;
      y: number;
      z: number;
      pattern: 'horizontal' | 'vertical' | 'circular';
      speed: number;
    }>;
    timeLimit: number; // seconds
    par: number; // optimal steps
    educational: {
      concept: string;
      explanation: string;
      algorithmStep: string;
    };
  }[];
  algorithms: {
    name: string;
    description: string;
    complexity: string;
    visualizationSteps: string[];
  }[];
  tips: string[];
  learningObjectives: string[];
}

export const robotNavigationGameData: RobotNavigationGameData = {
  id: 'robot-navigation-3d',
  title: '🤖 Điều hướng Robot 3D',
  description: 'Lập trình robot di chuyển trong môi trường 3D với thuật toán tìm đường thông minh',
  icon: '🤖',
  difficulty: 'Nâng cao',
  estimatedTime: '25-35 phút',
  category: '3d-visualization',
  levels: [
    {
      id: 1,
      name: 'Khởi động - Đường thẳng',
      description: 'Hướng dẫn robot di chuyển từ điểm A đến điểm B theo đường thẳng',
      gridSize: { width: 8, height: 1, depth: 8 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 7, y: 0, z: 7 },
      obstacles: [
        { x: 3, y: 0, z: 2, type: 'wall' },
        { x: 4, y: 0, z: 4, type: 'wall' },
      ],
      timeLimit: 120,
      par: 14,
      educational: {
        concept: 'Đường đi ngắn nhất',
        explanation: 'Robot cần tìm đường đi ngắn nhất từ điểm xuất phát đến đích',
        algorithmStep: 'Sử dụng khoảng cách Manhattan để ước tính chi phí',
      },
    },
    {
      id: 2,
      name: 'Vượt chướng ngại vật',
      description: 'Điều hướng robot tránh các chướng ngại vật phức tạp',
      gridSize: { width: 10, height: 1, depth: 10 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 9, y: 0, z: 9 },
      obstacles: [
        { x: 2, y: 0, z: 1, type: 'wall' },
        { x: 2, y: 0, z: 2, type: 'wall' },
        { x: 2, y: 0, z: 3, type: 'wall' },
        { x: 6, y: 0, z: 5, type: 'wall' },
        { x: 7, y: 0, z: 5, type: 'wall' },
        { x: 8, y: 0, z: 5, type: 'wall' },
        { x: 4, y: 0, z: 7, type: 'pit' },
        { x: 5, y: 0, z: 7, type: 'pit' },
      ],
      timeLimit: 180,
      par: 18,
      educational: {
        concept: 'Tránh chướng ngại vật',
        explanation: 'Robot phải tìm đường đi quanh các vật cản, không thể đi thẳng',
        algorithmStep: 'Thuật toán A* đánh giá nhiều đường đi khả thi',
      },
    },
    {
      id: 3,
      name: 'Thu thập dữ liệu',
      description: 'Robot phải thu thập tất cả dữ liệu trước khi đến đích',
      gridSize: { width: 12, height: 1, depth: 12 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 11, y: 0, z: 11 },
      obstacles: [
        { x: 3, y: 0, z: 3, type: 'wall' },
        { x: 4, y: 0, z: 3, type: 'wall' },
        { x: 5, y: 0, z: 3, type: 'wall' },
        { x: 7, y: 0, z: 6, type: 'barrier' },
        { x: 8, y: 0, z: 6, type: 'barrier' },
        { x: 9, y: 0, z: 6, type: 'barrier' },
      ],
      collectibles: [
        { x: 2, y: 0, z: 5, type: 'data' },
        { x: 6, y: 0, z: 2, type: 'data' },
        { x: 9, y: 0, z: 8, type: 'data' },
      ],
      timeLimit: 240,
      par: 25,
      educational: {
        concept: 'Bài toán TSP đơn giản',
        explanation: 'Robot phải tối ưu hóa thứ tự thu thập để tổng quãng đường ngắn nhất',
        algorithmStep: 'Kết hợp A* với lập kế hoạch đa điểm đến',
      },
    },
    {
      id: 4,
      name: 'Môi trường động',
      description: 'Điều hướng robot trong môi trường có chướng ngại vật di chuyển',
      gridSize: { width: 14, height: 1, depth: 14 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 13, y: 0, z: 13 },
      obstacles: [
        { x: 5, y: 0, z: 5, type: 'wall' },
        { x: 6, y: 0, z: 5, type: 'wall' },
        { x: 7, y: 0, z: 5, type: 'wall' },
        { x: 9, y: 0, z: 9, type: 'wall' },
        { x: 10, y: 0, z: 9, type: 'wall' },
      ],
      movingObstacles: [
        { x: 3, y: 0, z: 7, pattern: 'horizontal', speed: 1 },
        { x: 8, y: 0, z: 3, pattern: 'vertical', speed: 1 },
        { x: 11, y: 0, z: 6, pattern: 'circular', speed: 0.5 },
      ],
      collectibles: [
        { x: 1, y: 0, z: 8, type: 'key' },
        { x: 12, y: 0, z: 2, type: 'gem' },
      ],
      timeLimit: 300,
      par: 35,
      educational: {
        concept: 'Lập kế hoạch động',
        explanation: 'Robot phải dự đoán vị trí chướng ngại vật và điều chỉnh đường đi',
        algorithmStep: 'A* động với dự đoán trạng thái tương lai',
      },
    },
    {
      id: 5,
      name: 'Thử thách cuối - Mê cung 3D',
      description: 'Vượt qua mê cung phức tạp với nhiều tầng và cơ chế đặc biệt',
      gridSize: { width: 16, height: 3, depth: 16 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 15, y: 2, z: 15 },
      obstacles: [
        // Tầng 1 - Mê cung cơ bản
        { x: 2, y: 0, z: 2, type: 'wall' },
        { x: 3, y: 0, z: 2, type: 'wall' },
        { x: 5, y: 0, z: 1, type: 'wall' },
        { x: 5, y: 0, z: 2, type: 'wall' },
        { x: 7, y: 0, z: 4, type: 'wall' },
        { x: 8, y: 0, z: 4, type: 'wall' },
        // Tầng 2 - Chướng ngại vật nâng cao
        { x: 3, y: 1, z: 7, type: 'pit' },
        { x: 4, y: 1, z: 7, type: 'pit' },
        { x: 9, y: 1, z: 3, type: 'barrier' },
        { x: 10, y: 1, z: 3, type: 'barrier' },
        // Tầng 3 - Đích cuối
        { x: 13, y: 2, z: 13, type: 'wall' },
        { x: 14, y: 2, z: 13, type: 'wall' },
      ],
      collectibles: [
        { x: 7, y: 0, z: 7, type: 'key' }, // Chìa khóa tầng 1
        { x: 8, y: 1, z: 8, type: 'key' }, // Chìa khóa tầng 2
        { x: 2, y: 1, z: 14, type: 'gem' }, // Báu vật
        { x: 14, y: 2, z: 2, type: 'data' }, // Dữ liệu cuối
      ],
      movingObstacles: [
        { x: 6, y: 1, z: 10, pattern: 'circular', speed: 0.8 },
        { x: 12, y: 0, z: 6, pattern: 'horizontal', speed: 1.2 },
      ],
      timeLimit: 450,
      par: 48,
      educational: {
        concept: 'Tìm kiếm trong không gian 3D',
        explanation: 'Robot phải tìm đường trong không gian 3 chiều với nhiều tầng',
        algorithmStep: 'A* 3D với heuristic Euclidean và quản lý trạng thái phức tạp',
      },
    },
  ],
  algorithms: [
    {
      name: 'A* (A-Star)',
      description: 'Thuật toán tìm đường tối ưu kết hợp giữa Dijkstra và Greedy Best-First',
      complexity: 'O(b^d) trong trường hợp xấu nhất',
      visualizationSteps: [
        'Khởi tạo: Thêm điểm xuất phát vào Open List',
        'Lặp: Chọn node có f(n) = g(n) + h(n) nhỏ nhất',
        'Mở rộng: Kiểm tra tất cả node láng giềng',
        'Cập nhật: Tính toán chi phí và thêm vào Open List',
        'Kết thúc: Khi tìm thấy đích hoặc Open List rỗng',
      ],
    },
    {
      name: 'Dijkstra',
      description: 'Thuật toán tìm đường ngắn nhất từ một điểm đến tất cả điểm khác',
      complexity: 'O((V + E) log V)',
      visualizationSteps: [
        'Khởi tạo: Đặt khoảng cách tất cả node = ∞, trừ node xuất phát = 0',
        'Lặp: Chọn node chưa thăm có khoảng cách nhỏ nhất',
        'Cập nhật: Cải thiện khoảng cách của các node láng giềng',
        'Kết thúc: Khi tất cả node đã được thăm',
      ],
    },
  ],
  tips: [
    '🎯 Quan sát toàn bộ map trước khi bắt đầu để lập kế hoạch tổng thể',
    '🔍 Chú ý đến chướng ngại vật di chuyển - dự đoán vị trí tương lai',
    '💎 Ưu tiên thu thập các vật phẩm gần đường đi chính',
    '⚡ Sử dụng algorithm A* để tối ưu hóa đường đi',
    '🧠 Học cách đọc visualization để hiểu thuật toán hoạt động',
    '🎮 Thử nghiệm với các thuật toán khác nhau để so sánh hiệu quả',
  ],
  learningObjectives: [
    'Hiểu và áp dụng thuật toán A* cho bài toán tìm đường',
    'Phân biệt giữa các thuật toán tìm kiếm: BFS, DFS, Dijkstra, A*',
    'Tối ưu hóa đường đi trong môi trường có chướng ngại vật',
    'Lập kế hoạch trong không gian 3 chiều',
    'Xử lý các tình huống động trong robotics',
    'Áp dụng heuristic function để tăng hiệu quả tìm kiếm',
  ],
};

// Robot Navigation 3D Game Data
export interface RobotNavigation3DGameData {
  levels: Array<{
    id: number;
    name: string;
    description: string;
    difficulty: string;
    dimensions: { width: number; height: number; depth: number };
    start: { x: number; y: number; z: number };
    goal: { x: number; y: number; z: number };
    obstacles: Array<{ x: number; y: number; z: number; type: 'wall' | 'barrier' | 'moving' }>;
    collectibles: Array<{ x: number; y: number; z: number; type: 'coin' | 'data' | 'energy' }>;
    movingObstacles: Array<{
      x: number;
      y: number;
      z: number;
      pattern: 'linear' | 'circular' | 'random';
      speed: number;
      range: number;
    }>;
    timeLimit: number;
    targetScore: number;
    educational: {
      concept: string;
      algorithmFocus: string;
      learningGoal: string;
    };
  }>;
  robot: {
    model: string;
    capabilities: string[];
    sensors: string[];
    maxSpeed: number;
    batteryLife: number;
  };
  algorithms: Array<{
    name: string;
    description: string;
    complexity: string;
    advantages: string[];
    disadvantages: string[];
  }>;
  gameSettings: {
    enableHints: boolean;
    showPathVisualization: boolean;
    allowAlgorithmSwitching: boolean;
    difficultyScaling: boolean;
  };
}

export const robotNavigation3DGameData: RobotNavigation3DGameData = {
  levels: [
    {
      id: 1,
      name: 'Mê cung cơ bản 3D',
      description: 'Học cách điều hướng robot trong không gian 3 chiều đơn giản',
      difficulty: 'Cơ bản',
      dimensions: { width: 8, height: 3, depth: 8 },
      start: { x: 0, y: 0, z: 0 },
      goal: { x: 7, y: 0, z: 7 },
      obstacles: [
        { x: 2, y: 0, z: 1, type: 'wall' },
        { x: 2, y: 0, z: 2, type: 'wall' },
        { x: 4, y: 0, z: 3, type: 'wall' },
        { x: 4, y: 0, z: 4, type: 'wall' },
        { x: 6, y: 0, z: 5, type: 'wall' },
        { x: 1, y: 1, z: 6, type: 'barrier' },
        { x: 5, y: 1, z: 2, type: 'barrier' },
      ],
      collectibles: [
        { x: 3, y: 0, z: 1, type: 'coin' },
        { x: 5, y: 0, z: 4, type: 'coin' },
        { x: 6, y: 1, z: 6, type: 'energy' },
      ],
      movingObstacles: [],
      timeLimit: 120,
      targetScore: 100,
      educational: {
        concept: 'Tìm đường cơ bản trong không gian 3D',
        algorithmFocus: 'A* algorithm với heuristic Manhattan',
        learningGoal: 'Hiểu khái niệm pathfinding và coordinate 3D',
      },
    },
    {
      id: 2,
      name: 'Thử thách nhiều tầng',
      description: 'Robot phải di chuyển qua nhiều tầng với cầu thang và thang máy',
      difficulty: 'Trung bình',
      dimensions: { width: 10, height: 5, depth: 10 },
      start: { x: 0, y: 0, z: 0 },
      goal: { x: 9, y: 4, z: 9 },
      obstacles: [
        // Tầng 1
        { x: 3, y: 0, z: 3, type: 'wall' },
        { x: 4, y: 0, z: 3, type: 'wall' },
        { x: 5, y: 0, z: 3, type: 'wall' },
        { x: 7, y: 0, z: 5, type: 'wall' },
        { x: 8, y: 0, z: 5, type: 'wall' },
        // Tầng 2
        { x: 2, y: 2, z: 6, type: 'wall' },
        { x: 3, y: 2, z: 6, type: 'wall' },
        { x: 6, y: 2, z: 2, type: 'barrier' },
        { x: 6, y: 2, z: 3, type: 'barrier' },
        // Tầng 3-4
        { x: 1, y: 3, z: 8, type: 'wall' },
        { x: 2, y: 3, z: 8, type: 'wall' },
        { x: 7, y: 4, z: 1, type: 'barrier' },
      ],
      collectibles: [
        { x: 2, y: 0, z: 2, type: 'coin' },
        { x: 6, y: 1, z: 4, type: 'coin' },
        { x: 4, y: 2, z: 7, type: 'data' },
        { x: 8, y: 3, z: 3, type: 'energy' },
        { x: 5, y: 4, z: 8, type: 'data' },
      ],
      movingObstacles: [{ x: 5, y: 1, z: 5, pattern: 'circular', speed: 1.0, range: 2 }],
      timeLimit: 180,
      targetScore: 200,
      educational: {
        concept: 'Điều hướng đa tầng và tối ưu hóa đường đi',
        algorithmFocus: 'A* 3D với chi phí di chuyển giữa các tầng',
        learningGoal: 'Quản lý không gian 3D phức tạp và tối ưu hóa chi phí',
      },
    },
    {
      id: 3,
      name: 'Mê cung động 3D',
      description: 'Thách thức cao nhất với chướng ngại vật di chuyển và mê cung thay đổi',
      difficulty: 'Nâng cao',
      dimensions: { width: 12, height: 6, depth: 12 },
      start: { x: 0, y: 0, z: 0 },
      goal: { x: 11, y: 5, z: 11 },
      obstacles: [
        // Static walls - complex maze structure
        { x: 2, y: 0, z: 1, type: 'wall' },
        { x: 2, y: 0, z: 2, type: 'wall' },
        { x: 2, y: 0, z: 3, type: 'wall' },
        { x: 5, y: 0, z: 2, type: 'wall' },
        { x: 6, y: 0, z: 2, type: 'wall' },
        { x: 7, y: 0, z: 2, type: 'wall' },
        { x: 4, y: 1, z: 5, type: 'wall' },
        { x: 4, y: 1, z: 6, type: 'wall' },
        { x: 9, y: 1, z: 4, type: 'wall' },
        { x: 9, y: 1, z: 5, type: 'wall' },
        { x: 3, y: 2, z: 8, type: 'barrier' },
        { x: 4, y: 2, z: 8, type: 'barrier' },
        { x: 7, y: 2, z: 9, type: 'barrier' },
        { x: 8, y: 2, z: 9, type: 'barrier' },
        { x: 1, y: 3, z: 10, type: 'wall' },
        { x: 2, y: 3, z: 10, type: 'wall' },
        { x: 10, y: 3, z: 3, type: 'wall' },
        { x: 10, y: 3, z: 4, type: 'wall' },
        { x: 5, y: 4, z: 6, type: 'barrier' },
        { x: 6, y: 4, z: 6, type: 'barrier' },
        { x: 8, y: 5, z: 2, type: 'wall' },
        { x: 9, y: 5, z: 2, type: 'wall' },
      ],
      collectibles: [
        { x: 1, y: 0, z: 4, type: 'coin' },
        { x: 3, y: 0, z: 6, type: 'coin' },
        { x: 8, y: 1, z: 1, type: 'coin' },
        { x: 6, y: 1, z: 8, type: 'data' },
        { x: 2, y: 2, z: 5, type: 'energy' },
        { x: 9, y: 2, z: 7, type: 'coin' },
        { x: 5, y: 3, z: 3, type: 'data' },
        { x: 7, y: 3, z: 10, type: 'energy' },
        { x: 3, y: 4, z: 9, type: 'coin' },
        { x: 10, y: 4, z: 5, type: 'data' },
        { x: 4, y: 5, z: 7, type: 'energy' },
        { x: 8, y: 5, z: 8, type: 'data' },
      ],
      movingObstacles: [
        { x: 6, y: 0, z: 6, pattern: 'circular', speed: 1.2, range: 3 },
        { x: 3, y: 2, z: 3, pattern: 'linear', speed: 0.8, range: 4 },
        { x: 9, y: 3, z: 8, pattern: 'random', speed: 1.5, range: 2 },
        { x: 2, y: 4, z: 2, pattern: 'circular', speed: 1.0, range: 2 },
      ],
      timeLimit: 300,
      targetScore: 350,
      educational: {
        concept: 'Pathfinding động với chướng ngại vật di chuyển',
        algorithmFocus: 'A* động với re-planning và collision avoidance',
        learningGoal: 'Xử lý môi trường động và tối ưu hóa real-time',
      },
    },
  ],
  robot: {
    model: 'Explorer-3D v2.0',
    capabilities: [
      'Di chuyển 6 hướng (X, Y, Z)',
      'Phát hiện chướng ngại vật',
      'Thu thập vật phẩm',
      'Lên/xuống giữa các tầng',
      'Tránh chướng ngại vật di chuyển',
    ],
    sensors: [
      'LIDAR 360° 3D',
      'Camera RGB-D',
      'IMU (Inertial Measurement Unit)',
      'Proximity sensors',
      'GPS indoor positioning',
    ],
    maxSpeed: 2.5,
    batteryLife: 100,
  },
  algorithms: [
    {
      name: 'A* (A-Star) 3D',
      description: 'Thuật toán tìm đường tối ưu trong không gian 3 chiều',
      complexity: 'O(b^d) với b là branching factor, d là depth',
      advantages: [
        'Đảm bảo tìm được đường đi tối ưu',
        'Hiệu quả với heuristic tốt',
        'Linh hoạt với các loại terrain khác nhau',
      ],
      disadvantages: [
        'Tốn bộ nhớ khi không gian lớn',
        'Phức tạp khi có chướng ngại vật động',
        'Cần tính toán lại khi môi trường thay đổi',
      ],
    },
    {
      name: 'Dijkstra 3D',
      description: 'Thuật toán tìm đường ngắn nhất không có heuristic',
      complexity: 'O((V + E) log V)',
      advantages: ['Đảm bảo đường đi ngắn nhất', 'Không cần heuristic function', 'Ổn định với mọi loại graph'],
      disadvantages: [
        'Chậm hơn A* đáng kể',
        'Khám phá nhiều node không cần thiết',
        'Không phù hợp với real-time applications',
      ],
    },
    {
      name: 'BFS 3D',
      description: 'Breadth-First Search trong không gian 3D',
      complexity: 'O(b^d)',
      advantages: [
        'Đơn giản để implement',
        'Tìm được đường đi (không nhất thiết tối ưu)',
        'Hoạt động tốt với unweighted graphs',
      ],
      disadvantages: ['Không tối ưu cho weighted graphs', 'Tốn nhiều bộ nhớ', 'Chậm với không gian lớn'],
    },
  ],
  gameSettings: {
    enableHints: true,
    showPathVisualization: true,
    allowAlgorithmSwitching: true,
    difficultyScaling: true,
  },
};

// Arduino Circuit Builder 3D Game Data
export interface ArduinoCircuitBuilder3DGameData {
  components: Array<{
    id: string;
    name: string;
    type: 'microcontroller' | 'sensor' | 'actuator' | 'passive' | 'power' | 'wire';
    description: string;
    specifications: {
      voltage?: string;
      current?: string;
      pins?: number;
      resistance?: string;
      power?: string;
    };
    vietnameseContext: string;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    price?: string;
    applications: string[];
    safetyNotes: string[];
  }>;
  challenges: Array<{
    id: string;
    title: string;
    description: string;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    requiredComponents: string[];
    validationRules: Array<{
      type: 'connection' | 'voltage' | 'current' | 'power' | 'safety';
      description: string;
      importance: 'critical' | 'warning' | 'info';
    }>;
    vietnameseContext: string;
    realWorldApplications: string[];
    educationalObjectives: string[];
    estimatedTime: string;
    points: number;
  }>;
  validationSystem: {
    circuitRules: Array<{
      name: string;
      description: string;
      checkFunction: string; // Function name for validation
      errorMessage: string;
    }>;
    safetyChecks: Array<{
      name: string;
      description: string;
      severity: 'error' | 'warning' | 'info';
    }>;
  };
  educationalContent: {
    fundamentals: Array<{
      topic: string;
      explanation: string;
      examples: string[];
      vietnameseApplications: string[];
    }>;
    practicalSkills: Array<{
      skill: string;
      description: string;
      difficulty: string;
      prerequisites: string[];
    }>;
  };
}

export const arduinoCircuitBuilder3DData: ArduinoCircuitBuilder3DGameData = {
  components: [
    {
      id: 'arduino-uno',
      name: 'Arduino Uno R3',
      type: 'microcontroller',
      description: 'Vi điều khiển phổ biến nhất cho học tập và prototyping',
      specifications: {
        voltage: '5V',
        current: '40mA per pin',
        pins: 32,
      },
      vietnameseContext: 'Được sử dụng rộng rãi trong các trường đại học Việt Nam và startup IoT',
      difficulty: 'Cơ bản',
      price: '200,000 - 300,000 VNĐ',
      applications: [
        'Home automation systems',
        'Environmental monitoring',
        'Agricultural sensors',
        'Traffic light control',
      ],
      safetyNotes: [
        'Không được vượt quá 5V input voltage',
        'Tổng current không vượt quá 200mA',
        'Cẩn thận với static electricity',
      ],
    },
    {
      id: 'led-5mm',
      name: 'LED 5mm',
      type: 'actuator',
      description: 'Light Emitting Diode cơ bản cho hiển thị và báo hiệu',
      specifications: {
        voltage: '2.0-3.3V',
        current: '20mA',
        power: '0.1W',
      },
      vietnameseContext: 'Sử dụng trong đèn trang trí Tết và hệ thống chiếu sáng LED',
      difficulty: 'Cơ bản',
      price: '1,000 - 5,000 VNĐ',
      applications: ['Status indicators', 'Decorative lighting', 'Visual alarms', 'Display panels'],
      safetyNotes: [
        'Luôn dùng current limiting resistor',
        'Chú ý polarity (anode/cathode)',
        'Không vượt quá rated current',
      ],
    },
    {
      id: 'resistor-220ohm',
      name: 'Điện Trở 220Ω',
      type: 'passive',
      description: 'Current limiting resistor cho LED protection',
      specifications: {
        resistance: '220Ω ±5%',
        power: '0.25W',
        voltage: '5V max',
      },
      vietnameseContext: 'Component cơ bản trong mọi mạch điện tử Việt Nam',
      difficulty: 'Cơ bản',
      price: '500 - 1,000 VNĐ',
      applications: ['LED current limiting', 'Pull-up/pull-down circuits', 'Voltage dividers', 'Signal conditioning'],
      safetyNotes: ['Kiểm tra power rating', 'Chú ý color code để đọc giá trị', 'Tránh overheating'],
    },
    {
      id: 'temperature-sensor',
      name: 'Cảm Biến Nhiệt Độ LM35',
      type: 'sensor',
      description: 'Analog temperature sensor với độ chính xác cao',
      specifications: {
        voltage: '4-30V',
        current: '60μA',
        pins: 3,
      },
      vietnameseContext: 'Ứng dụng trong monitoring nhà kính và aquaculture tại Việt Nam',
      difficulty: 'Trung bình',
      price: '50,000 - 80,000 VNĐ',
      applications: ['Weather monitoring', 'HVAC control', 'Food storage monitoring', 'Industrial process control'],
      safetyNotes: ['Không vượt quá 150°C', 'Cẩn thận với ESD', 'Kiểm tra wiring trước khi power on'],
    },
  ],
  challenges: [
    {
      id: 'basic-led-circuit',
      title: 'Mạch LED Cơ Bản',
      description: 'Tạo mạch LED đơn giản với Arduino và current limiting resistor',
      difficulty: 'Cơ bản',
      requiredComponents: ['arduino-uno', 'led-5mm', 'resistor-220ohm'],
      validationRules: [
        {
          type: 'connection',
          description: 'LED phải được kết nối với resistor để bảo vệ',
          importance: 'critical',
        },
        {
          type: 'voltage',
          description: 'Điện áp qua LED phải trong khoảng an toàn (2.0-3.3V)',
          importance: 'warning',
        },
        {
          type: 'current',
          description: 'Dòng điện không được vượt quá 20mA',
          importance: 'critical',
        },
      ],
      vietnameseContext: 'Giống như đèn LED trang trí trong dịp Tết Nguyên Đán',
      realWorldApplications: [
        'Đèn báo hiệu giao thông',
        'Hệ thống chiếu sáng tiết kiệm năng lượng',
        'Status indicators trong thiết bị điện tử',
      ],
      educationalObjectives: [
        "Hiểu về Ohm's Law trong thực tế",
        'Học cách tính toán current limiting resistance',
        'Nắm vững về polarity và circuit safety',
      ],
      estimatedTime: '15-20 phút',
      points: 100,
    },
    {
      id: 'traffic-light-system',
      title: 'Hệ Thống Đèn Giao Thông',
      description: 'Xây dựng traffic light system như tại các ngã tư ở Việt Nam',
      difficulty: 'Trung bình',
      requiredComponents: ['arduino-uno', 'led-5mm', 'led-5mm', 'led-5mm', 'resistor-220ohm'],
      validationRules: [
        {
          type: 'connection',
          description: 'Mỗi LED cần có điện trở bảo vệ riêng',
          importance: 'critical',
        },
        {
          type: 'power',
          description: 'Tổng công suất không vượt quá khả năng Arduino',
          importance: 'warning',
        },
      ],
      vietnameseContext: 'Mô phỏng đèn giao thông tại ngã tư lớn ở Hà Nội và TP.HCM',
      realWorldApplications: [
        'Smart traffic management systems',
        'Pedestrian crossing signals',
        'Construction zone warning lights',
      ],
      educationalObjectives: [
        'Multiple output control với Arduino',
        'Timing và sequencing trong embedded systems',
        'Power management cho multiple components',
      ],
      estimatedTime: '30-45 phút',
      points: 200,
    },
    {
      id: 'temperature-monitoring',
      title: 'Hệ Thống Giám Sát Nhiệt Độ',
      description: 'Monitoring system với temperature sensor và LED warning',
      difficulty: 'Nâng cao',
      requiredComponents: ['arduino-uno', 'temperature-sensor', 'led-5mm', 'resistor-220ohm'],
      validationRules: [
        {
          type: 'connection',
          description: 'Temperature sensor phải kết nối đúng pins (VCC, GND, OUT)',
          importance: 'critical',
        },
        {
          type: 'voltage',
          description: 'Analog input phải trong range 0-5V',
          importance: 'warning',
        },
      ],
      vietnameseContext: 'Ứng dụng trong nhà máy chế biến thực phẩm và nông nghiệp công nghệ cao',
      realWorldApplications: [
        'Industrial temperature monitoring',
        'Greenhouse climate control',
        'Cold chain management cho logistics',
      ],
      educationalObjectives: [
        'Analog sensor interfacing',
        'Data acquisition và processing',
        'Threshold-based control systems',
      ],
      estimatedTime: '45-60 phút',
      points: 300,
    },
  ],
  validationSystem: {
    circuitRules: [
      {
        name: 'LED Protection Rule',
        description: 'LEDs must have current limiting resistors',
        checkFunction: 'checkLEDResistorConnection',
        errorMessage: 'LED thiếu điện trở bảo vệ - có thể bị cháy!',
      },
      {
        name: 'Power Supply Check',
        description: 'Total current draw must not exceed Arduino limits',
        checkFunction: 'checkCurrentDraw',
        errorMessage: 'Tổng dòng điện vượt quá khả năng Arduino (200mA max)',
      },
      {
        name: 'Voltage Compatibility',
        description: 'All components must operate within voltage ranges',
        checkFunction: 'checkVoltageCompatibility',
        errorMessage: 'Có component không tương thích với 5V system',
      },
    ],
    safetyChecks: [
      {
        name: 'Short Circuit Detection',
        description: 'Check for potential short circuits',
        severity: 'error',
      },
      {
        name: 'Overload Warning',
        description: 'Warn when approaching current limits',
        severity: 'warning',
      },
      {
        name: 'Best Practices',
        description: 'Suggest improvements for better design',
        severity: 'info',
      },
    ],
  },
  educationalContent: {
    fundamentals: [
      {
        topic: "Ohm's Law trong Electronics",
        explanation: 'V = I × R - mối quan hệ cơ bản giữa điện áp, dòng điện và điện trở',
        examples: [
          'Tính điện trở cho LED 2V với dòng 20mA: R = (5V-2V)/0.02A = 150Ω',
          'Voltage divider để đọc sensor: Vout = Vin × (R2/(R1+R2))',
        ],
        vietnameseApplications: [
          'Thiết kế mạch điều khiển đèn LED cho buildings',
          'Sensor calibration trong industrial automation',
          'Power management cho IoT devices',
        ],
      },
      {
        topic: 'Digital vs Analog I/O',
        explanation: 'Sự khác biệt giữa tín hiệu số (0/1) và tín hiệu tương tự (0-5V)',
        examples: [
          'Digital: Switch, button states (HIGH/LOW)',
          'Analog: Temperature sensor, potentiometer values (0-1023 ADC)',
        ],
        vietnameseApplications: [
          'Smart home control systems',
          'Industrial sensor networks',
          'Agricultural monitoring systems',
        ],
      },
    ],
    practicalSkills: [
      {
        skill: 'Circuit Breadboarding',
        description: 'Kỹ năng lắp ráp circuit trên breadboard',
        difficulty: 'Cơ bản',
        prerequisites: ['Component identification', 'Basic electronics theory'],
      },
      {
        skill: 'Arduino Programming',
        description: 'Viết code để điều khiển hardware',
        difficulty: 'Trung bình',
        prerequisites: ['C/C++ basics', 'Digital I/O understanding'],
      },
      {
        skill: 'Circuit Debugging',
        description: 'Troubleshooting và sửa lỗi mạch điện',
        difficulty: 'Nâng cao',
        prerequisites: ['Multimeter usage', 'Circuit analysis skills'],
      },
    ],
  },
};

// Neural Network Builder 3D Game Data
export interface NeuralNetworkBuilder3DGameData {
  architectures: Array<{
    id: string;
    name: string;
    description: string;
    layers: Array<{
      type: 'input' | 'hidden' | 'output';
      neurons: number;
      activationFunction: string;
    }>;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    applications: string[];
    vietnameseContext: string;
    estimatedAccuracy: string;
    trainingTime: string;
  }>;
  datasets: Array<{
    id: string;
    name: string;
    description: string;
    type: 'classification' | 'regression';
    features: number;
    samples: number;
    classes?: number;
    vietnameseContext: string;
    realWorldApplication: string;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    preprocessingRequired: string[];
  }>;
  challenges: Array<{
    id: string;
    title: string;
    description: string;
    difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    requiredArchitecture: number[];
    targetDataset: string;
    targetAccuracy: number;
    educationalObjectives: string[];
    vietnameseApplications: string[];
    points: number;
    estimatedTime: string;
    hints: string[];
  }>;
  activationFunctions: Array<{
    name: string;
    formula: string;
    description: string;
    advantages: string[];
    disadvantages: string[];
    bestUseCases: string[];
    vietnameseExample: string;
  }>;
  trainingConcepts: Array<{
    concept: string;
    explanation: string;
    importance: 'critical' | 'important' | 'helpful';
    examples: string[];
    vietnameseApplications: string[];
  }>;
}

export const neuralNetworkBuilder3DData: NeuralNetworkBuilder3DGameData = {
  architectures: [
    {
      id: 'simple-perceptron',
      name: 'Simple Perceptron',
      description: 'Mạng neural đơn giản nhất với một lớp output',
      layers: [
        { type: 'input', neurons: 2, activationFunction: 'linear' },
        { type: 'output', neurons: 1, activationFunction: 'sigmoid' },
      ],
      difficulty: 'Cơ bản',
      applications: ['Binary classification', 'Linear separation problems'],
      vietnameseContext: 'Phân loại khách hàng VIP/thường trong banking Việt Nam',
      estimatedAccuracy: '70-85%',
      trainingTime: '1-2 phút',
    },
    {
      id: 'multilayer-perceptron',
      name: 'Multi-layer Perceptron',
      description: 'Mạng neural với hidden layers để giải quyết non-linear problems',
      layers: [
        { type: 'input', neurons: 4, activationFunction: 'linear' },
        { type: 'hidden', neurons: 8, activationFunction: 'relu' },
        { type: 'hidden', neurons: 6, activationFunction: 'relu' },
        { type: 'output', neurons: 3, activationFunction: 'softmax' },
      ],
      difficulty: 'Trung bình',
      applications: ['Multi-class classification', 'Pattern recognition'],
      vietnameseContext: 'Phân loại sản phẩm nông nghiệp (lúa, ngô, cà phê) cho xuất khẩu',
      estimatedAccuracy: '85-95%',
      trainingTime: '3-5 phút',
    },
    {
      id: 'deep-network',
      name: 'Deep Neural Network',
      description: 'Mạng neural sâu với nhiều hidden layers cho complex patterns',
      layers: [
        { type: 'input', neurons: 10, activationFunction: 'linear' },
        { type: 'hidden', neurons: 64, activationFunction: 'relu' },
        { type: 'hidden', neurons: 32, activationFunction: 'relu' },
        { type: 'hidden', neurons: 16, activationFunction: 'relu' },
        { type: 'output', neurons: 5, activationFunction: 'softmax' },
      ],
      difficulty: 'Nâng cao',
      applications: ['Complex classification', 'Feature learning', 'Deep learning'],
      vietnameseContext: 'Phân tích sentiment của review khách hàng trên Tiki, Shopee',
      estimatedAccuracy: '90-98%',
      trainingTime: '10-15 phút',
    },
  ],
  datasets: [
    {
      id: 'xor-problem',
      name: 'XOR Logic Gate',
      description: 'Classic non-linear classification problem',
      type: 'classification',
      features: 2,
      samples: 4,
      classes: 2,
      vietnameseContext: 'Nền tảng cho logic gates trong chip design tại Việt Nam',
      realWorldApplication: 'Digital circuit design, Boolean logic trong embedded systems',
      difficulty: 'Cơ bản',
      preprocessingRequired: ['None - data already normalized'],
    },
    {
      id: 'vietnamese-house-prices',
      name: 'Vietnam House Price Prediction',
      description: 'Dự đoán giá nhà tại các thành phố lớn Việt Nam',
      type: 'regression',
      features: 5,
      samples: 1000,
      vietnameseContext: 'Hỗ trợ quyết định đầu tư bất động sản tại TP.HCM, Hà Nội, Đà Nẵng',
      realWorldApplication: 'Real estate platforms như Batdongsan.com.vn, PropTech startups',
      difficulty: 'Trung bình',
      preprocessingRequired: ['Feature scaling', 'Location encoding', 'Price normalization'],
    },
    {
      id: 'vietnam-weather-prediction',
      name: 'Vietnam Weather Classification',
      description: 'Phân loại thời tiết cho nông nghiệp Việt Nam',
      type: 'classification',
      features: 8,
      samples: 2000,
      classes: 4,
      vietnameseContext: 'Hỗ trợ nông dân dự báo thời tiết cho việc canh tác',
      realWorldApplication: 'Agricultural planning, disaster prevention, smart farming',
      difficulty: 'Nâng cao',
      preprocessingRequired: ['Time series features', 'Geographic encoding', 'Seasonal normalization'],
    },
    {
      id: 'vietnamese-crop-classification',
      name: 'Vietnamese Crop Disease Detection',
      description: 'Phát hiện bệnh cây trồng qua ảnh lá',
      type: 'classification',
      features: 12,
      samples: 5000,
      classes: 6,
      vietnameseContext: 'Ứng dụng AI trong nông nghiệp công nghệ cao Việt Nam',
      realWorldApplication: 'Smart farming apps, agricultural extension services',
      difficulty: 'Nâng cao',
      preprocessingRequired: ['Image feature extraction', 'Color space conversion', 'Data augmentation'],
    },
  ],
  challenges: [
    {
      id: 'basic-perceptron-challenge',
      title: 'Perceptron Đầu Tiên',
      description: 'Xây dựng perceptron đơn giản để giải quyết linear classification',
      difficulty: 'Cơ bản',
      requiredArchitecture: [2, 1],
      targetDataset: 'xor-problem',
      targetAccuracy: 0.75,
      educationalObjectives: [
        'Hiểu về basic neuron structure',
        'Học về activation functions',
        'Nắm vững forward propagation',
      ],
      vietnameseApplications: [
        'Phân loại email spam/không spam cho Zalo',
        'Quyết định approve/reject loan trong fintech',
        'Classifying high/low demand products trong e-commerce',
      ],
      points: 100,
      estimatedTime: '10-15 phút',
      hints: [
        'XOR không thể giải quyết được với single perceptron',
        'Cần hidden layer để học non-linear patterns',
        'Thử với learning rate từ 0.01 đến 0.1',
      ],
    },
    {
      id: 'house-price-predictor',
      title: 'Dự Đoán Giá Nhà Việt Nam',
      description: 'Tạo regression model để predict house prices',
      difficulty: 'Trung bình',
      requiredArchitecture: [5, 8, 4, 1],
      targetDataset: 'vietnamese-house-prices',
      targetAccuracy: 0.85,
      educationalObjectives: [
        'Regression vs classification differences',
        'Feature importance trong real estate',
        'Model evaluation với RMSE và MAE',
      ],
      vietnameseApplications: [
        'PropTech platforms như Rever, PropertyGuru',
        'Bank loan assessment systems',
        'Investment analysis tools cho real estate',
      ],
      points: 250,
      estimatedTime: '20-30 phút',
      hints: [
        'Normalize price data trước khi training',
        'Location features rất quan trọng ở Việt Nam',
        'Consider using multiple hidden layers',
      ],
    },
    {
      id: 'weather-prediction-system',
      title: 'Hệ Thống Dự Báo Thời Tiết',
      description: 'Multi-class classification cho weather prediction',
      difficulty: 'Nâng cao',
      requiredArchitecture: [8, 16, 12, 4],
      targetDataset: 'vietnam-weather-prediction',
      targetAccuracy: 0.88,
      educationalObjectives: [
        'Multi-class classification strategies',
        'Handling imbalanced weather data',
        'Time series features engineering',
      ],
      vietnameseApplications: [
        'Nông nghiệp thông minh trong Mekong Delta',
        'Disaster early warning systems',
        'Tourism planning apps cho Vietnam travel',
      ],
      points: 350,
      estimatedTime: '30-45 phút',
      hints: [
        'Weather data có seasonal patterns',
        'Use dropout để prevent overfitting',
        'Geographic features quan trọng cho Vietnam climate',
      ],
    },
    {
      id: 'crop-disease-detector',
      title: 'AI Phát Hiện Bệnh Cây Trồng',
      description: 'Deep learning model cho agricultural disease detection',
      difficulty: 'Nâng cao',
      requiredArchitecture: [12, 32, 16, 8, 6],
      targetDataset: 'vietnamese-crop-classification',
      targetAccuracy: 0.92,
      educationalObjectives: [
        'Deep learning architecture design',
        'Feature extraction từ image data',
        'Model validation với agricultural data',
      ],
      vietnameseApplications: [
        'Smart farming solutions cho rice cultivation',
        'Mobile apps cho farmers ở rural Vietnam',
        'Agricultural extension service automation',
      ],
      points: 450,
      estimatedTime: '45-60 phút',
      hints: [
        'Deep networks cần careful initialization',
        'Use batch normalization giữa layers',
        'Agricultural data có high class imbalance',
      ],
    },
  ],
  activationFunctions: [
    {
      name: 'Sigmoid',
      formula: '1 / (1 + e^(-x))',
      description: 'S-shaped curve, outputs between 0 and 1',
      advantages: ['Smooth gradient', 'Probabilistic output', 'Historically popular'],
      disadvantages: ['Vanishing gradient problem', 'Not zero-centered', 'Computationally expensive'],
      bestUseCases: ['Binary classification output layer', 'When need probability outputs'],
      vietnameseExample: 'Xác suất khách hàng mua sản phẩm trong e-commerce Vietnam (0-1)',
    },
    {
      name: 'ReLU',
      formula: 'max(0, x)',
      description: 'Rectified Linear Unit - simple và effective',
      advantages: ['Fast computation', 'No vanishing gradient', 'Sparse activation'],
      disadvantages: ['Dying ReLU problem', 'Not zero-centered', 'Unbounded output'],
      bestUseCases: ['Hidden layers trong deep networks', 'Computer vision tasks'],
      vietnameseExample: 'Intensity của traffic light detection trong smart city systems',
    },
    {
      name: 'Tanh',
      formula: '(e^x - e^(-x)) / (e^x + e^(-x))',
      description: 'Hyperbolic tangent, outputs between -1 and 1',
      advantages: ['Zero-centered', 'Strong gradients', 'Smooth function'],
      disadvantages: ['Still has vanishing gradient', 'Computationally expensive'],
      bestUseCases: ['RNN hidden states', 'When zero-centered output needed'],
      vietnameseExample: 'Sentiment analysis của Vietnamese text: -1 (negative) to 1 (positive)',
    },
    {
      name: 'Softmax',
      formula: 'e^xi / Σ(e^xj)',
      description: 'Converts logits to probability distribution',
      advantages: ['Probability distribution', 'Good for multi-class', 'Interpretable output'],
      disadvantages: ['Only for output layer', 'Can be unstable', 'Requires careful implementation'],
      bestUseCases: ['Multi-class classification output', 'Attention mechanisms'],
      vietnameseExample: 'Phân loại tỉnh/thành Việt Nam từ địa chỉ text input',
    },
  ],
  trainingConcepts: [
    {
      concept: 'Learning Rate',
      explanation: 'Tốc độ học của model - quyết định step size trong gradient descent',
      importance: 'critical',
      examples: [
        'Learning rate quá cao: model không converge',
        'Learning rate quá thấp: training chậm, có thể stuck ở local minimum',
        'Adaptive learning rate: bắt đầu cao rồi giảm dần',
      ],
      vietnameseApplications: [
        'Tối ưu hóa recommendation system cho Tiki/Shopee',
        'Fine-tuning models cho Vietnamese language processing',
        'Adjusting learning cho different phases của business cycle',
      ],
    },
    {
      concept: 'Overfitting vs Underfitting',
      explanation: 'Balance giữa model complexity và generalization ability',
      importance: 'critical',
      examples: [
        'Overfitting: high training accuracy, low test accuracy',
        'Underfitting: poor performance trên cả training và test',
        'Just right: good performance trên both datasets',
      ],
      vietnameseApplications: [
        'Credit scoring models cho Vietnamese banks',
        'Traffic prediction models cho TP.HCM rush hours',
        'Crop yield prediction với limited historical data',
      ],
    },
    {
      concept: 'Gradient Descent',
      explanation: 'Thuật toán optimization để minimize loss function',
      importance: 'critical',
      examples: [
        'Batch gradient descent: use all data mỗi step',
        'Stochastic: use 1 sample mỗi step',
        'Mini-batch: compromise giữa stability và speed',
      ],
      vietnameseApplications: [
        'Optimizing delivery routes cho Grab/Be trong Vietnam cities',
        'Training recommendation engines với Vietnamese user behavior',
        'Fraud detection models cho Vietnamese payment systems',
      ],
    },
  ],
};

// Vietnamese Heritage Explorer 3D Game Data
export interface VietnameseHeritageGameData {
  sites: Array<{
    id: string;
    name: string;
    nameEn: string;
    location: string;
    year: number;
    description: string;
    quiz: {
      question: string;
      options: string[];
      correct: number;
    };
  }>;
  gameMode: '3d-exploration';
  difficulty: 'medium';
  estimatedTime: '15-20 minutes';
}

export const vietnameseHeritageGame = {
  id: 'vietnamese-heritage-explorer-3d',
  title: 'Vietnamese Heritage Explorer 3D',
  titleVietnamese: 'Khám phá Di sản Việt Nam 3D',
  description: 'Khám phá các di tích lịch sử và địa danh văn hóa Việt Nam qua trải nghiệm 3D tương tác.',
  category: 'cultural-education',
  difficulty: 'medium',
  estimatedTime: '15-20 phút',
  ageGroup: '12+',
  gameplayType: '3d-exploration',
  skills: ['Lịch sử Việt Nam', 'Văn hóa', 'Địa lý', 'Tư duy phê phán'],
  objectives: [
    'Tìm hiểu về 9 di sản văn hóa UNESCO của Việt Nam',
    'Nắm vững kiến thức lịch sử và văn hóa dân tộc',
    'Phát triển khả năng quan sát và ghi nhớ thông tin',
    'Nâng cao ý thức bảo tồn di sản văn hóa',
  ],
  features: [
    'Môi trường 3D tương tác với 9 di tích UNESCO',
    'Hệ thống quiz kiến thức về từng di sản',
    'Animation và hiệu ứng thị giác sinh động',
    'Thống kê tiến độ và điểm số chi tiết',
  ],
  component: 'VietnameseHeritageExplorer3D',
  relatedLessons: [
    {
      moduleId: 'vietnamese-culture',
      lessonId: 'vietnamese-heritage-sites',
      title: 'Di sản văn hóa Việt Nam',
      connection: 'Khám phá chi tiết các di tích lịch sử trong game',
    },
    {
      moduleId: 'vietnamese-culture',
      lessonId: 'unesco-world-heritage',
      title: 'Di sản thế giới UNESCO',
      connection: 'Tìm hiểu về tiêu chí và giá trị của di sản UNESCO',
    },
    {
      moduleId: 'geography',
      lessonId: 'vietnam-geography',
      title: 'Địa lý Việt Nam',
      connection: 'Vị trí địa lý của các di tích trong cả nước',
    },
  ],
  gameData: {
    sites: [
      {
        id: 'van-mieu',
        name: 'Văn Miếu Quốc Tử Giám',
        nameEn: 'Temple of Literature',
        location: 'Hà Nội',
        year: 1070,
        description: 'Ngôi đền đầu tiên của Việt Nam dành cho Khổng Tử và các bậc hiền tài.',
        quiz: {
          question: 'Văn Miếu được xây dựng vào năm nào?',
          options: ['1070', '1080', '1090', '1100'],
          correct: 0,
        },
      },
      {
        id: 'chua-mot-cot',
        name: 'Chùa Một Cột',
        nameEn: 'One Pillar Pagoda',
        location: 'Hà Nội',
        year: 1049,
        description: 'Chùa có kiến trúc độc đáo, tượng trưng cho hoa sen nở trên mặt nước.',
        quiz: {
          question: 'Chùa Một Cột được xây dựng dưới triều đại nào?',
          options: ['Lý Thái Tông', 'Lý Thánh Tông', 'Trần Thái Tông', 'Lê Thánh Tông'],
          correct: 0,
        },
      },
      {
        id: 'hoang-thanh',
        name: 'Hoàng Thành Thăng Long',
        nameEn: 'Imperial Citadel of Thang Long',
        location: 'Hà Nội',
        year: 1010,
        description: 'Trung tâm chính trị của Việt Nam qua nhiều triều đại phong kiến.',
        quiz: {
          question: 'Hoàng Thành Thăng Long được UNESCO công nhận là Di sản thế giới vào năm nào?',
          options: ['2008', '2009', '2010', '2011'],
          correct: 2,
        },
      },
      {
        id: 'ha-long-bay',
        name: 'Vịnh Hạ Long',
        nameEn: 'Ha Long Bay',
        location: 'Quảng Ninh',
        year: 1994,
        description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi.',
        quiz: {
          question: 'Vịnh Hạ Long có khoảng bao nhiêu đảo đá vôi?',
          options: ['1600', '1800', '2000', '2200'],
          correct: 0,
        },
      },
      {
        id: 'hoi-an',
        name: 'Phố Cổ Hội An',
        nameEn: 'Hoi An Ancient Town',
        location: 'Quảng Nam',
        year: 1999,
        description: 'Thành phố cổ với kiến trúc độc đáo, là cảng thương mại quốc tế.',
        quiz: {
          question: 'Hội An được UNESCO công nhận là Di sản thế giới vào năm nào?',
          options: ['1998', '1999', '2000', '2001'],
          correct: 1,
        },
      },
      {
        id: 'my-son',
        name: 'Thánh Địa Mỹ Sơn',
        nameEn: 'My Son Sanctuary',
        location: 'Quảng Nam',
        year: 1999,
        description: 'Quần thể đền tháp Chăm Pa cổ, trung tâm tôn giáo Hindu.',
        quiz: {
          question: 'Mỹ Sơn là di tích của nền văn minh nào?',
          options: ['Chăm Pa', 'Óc Eo', 'Đông Sơn', 'Sa Huỳnh'],
          correct: 0,
        },
      },
      {
        id: 'hue-citadel',
        name: 'Kinh Thành Huế',
        nameEn: 'Hue Imperial City',
        location: 'Thừa Thiên Huế',
        year: 1993,
        description: 'Cố đô của triều Nguyễn, biểu tượng văn hóa hoàng gia Việt Nam.',
        quiz: {
          question: 'Kinh Thành Huế là cố đô của triều đại nào?',
          options: ['Trần', 'Lê', 'Nguyễn', 'Lý'],
          correct: 2,
        },
      },
      {
        id: 'phong-nha',
        name: 'Phong Nha - Kẻ Bàng',
        nameEn: 'Phong Nha-Ke Bang National Park',
        location: 'Quảng Bình',
        year: 2003,
        description: 'Công viên quốc gia với hệ thống hang động kỳ vĩ nhất thế giới.',
        quiz: {
          question: 'Hang Sơn Trà nằm trong khu vực nào?',
          options: ['Phong Nha - Kẻ Bàng', 'Hạ Long', 'Cát Bà', 'Ba Bể'],
          correct: 0,
        },
      },
      {
        id: 'trang-an',
        name: 'Quần Thể Tràng An',
        nameEn: 'Trang An Landscape Complex',
        location: 'Ninh Bình',
        year: 2014,
        description: 'Di sản hỗn hợp văn hóa và thiên nhiên với cảnh quan karst.',
        quiz: {
          question: 'Tràng An là di sản hỗn hợp, kết hợp giữa hai yếu tố nào?',
          options: ['Văn hóa và Thiên nhiên', 'Lịch sử và Kiến trúc', 'Tôn giáo và Nghệ thuật', 'Cổ học và Địa chất'],
          correct: 0,
        },
      },
    ],
  } as VietnameseHeritageGameData,
};

// Export aquaculture game for direct access
export const aquacultureIoTGameData = GAME_DATA.aquacultureIoTGame;
