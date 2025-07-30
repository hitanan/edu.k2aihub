// Scratch Programming Module Data
// Comprehensive Scratch programming content for K2AiHub education platform

export interface ScratchLesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  duration: string;
  category: 'basics' | 'animation' | 'games' | 'interactive' | 'advanced';
  objectives: string[];
  materials: string[];
  scratchProjectUrl?: string;
  videoUrl?: string;
  imageUrl: string;
  codeBlocks: string[];
  exercises: ScratchExercise[];
  realWorldApplications: string[];
  competitions: string[];
}

export interface ScratchExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  requiredBlocks: string[];
  expectedBehavior: string;
  hints: string[];
  steps?: string[];
  scratchUrl?: string;
}

export const scratchLessons: ScratchLesson[] = [
  {
    id: 'scratch-introduction',
    title: 'Giới Thiệu Scratch',
    description:
      'Làm quen với giao diện Scratch và các khái niệm lập trình cơ bản qua kéo thả',
    difficulty: 'Cơ bản',
    duration: '45 phút',
    category: 'basics',
    objectives: [
      'Hiểu giao diện Scratch và các thành phần chính',
      'Tạo dự án Scratch đầu tiên',
      'Sử dụng blocks cơ bản để điều khiển Sprite',
      'Hiểu khái niệm sự kiện và lệnh'
    ],
    materials: [
      'Máy tính với trình duyệt web',
      'Tài khoản Scratch (tùy chọn)',
      'Kết nối Internet'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=jXUZaf5D12A',
    scratchProjectUrl: 'https://scratch.mit.edu/projects/editor/',
    codeBlocks: [
      'when green flag clicked',
      'move 10 steps',
      'turn 15 degrees',
      'say "Hello!" for 2 seconds',
      'wait 1 seconds',
      'repeat 10',
      'forever'
    ],
    exercises: [
      {
        id: 'ex1-first-animation',
        title: 'Hoạt Cảnh Đầu Tiên',
        description:
          'Tạo hoạt cảnh đơn giản cho mèo Scratch di chuyển và nói chào',
        difficulty: 'Dễ',
        requiredBlocks: [
          'when green flag clicked',
          'say "Xin chào!" for 2 seconds',
          'move 10 steps',
          'wait 1 seconds'
        ],
        expectedBehavior: 'Mèo nói "Xin chào!" rồi di chuyển sang phải',
        hints: [
          'Bắt đầu với khối "when green flag clicked"',
          'Sử dụng khối "say" để mèo nói chuyện',
          'Khối "move" để mèo di chuyển',
          'Khối "wait" tạo khoảng dừng giữa các hành động'
        ]
      },
      {
        id: 'ex2-simple-loop',
        title: 'Vòng Lặp Đơn Giản',
        description: 'Tạo chương trình mèo di chuyển trong hình vuông',
        difficulty: 'Trung bình',
        requiredBlocks: [
          'when green flag clicked',
          'repeat 4',
          'move 100 steps',
          'turn 90 degrees'
        ],
        expectedBehavior: 'Mèo di chuyển theo hình vuông',
        hints: [
          'Hình vuông có 4 cạnh bằng nhau',
          'Mỗi góc của hình vuông là 90 độ',
          'Sử dụng "repeat 4" để lặp lại 4 lần',
          'Trong vòng lặp: di chuyển rồi quay'
        ]
      }
    ],
    realWorldApplications: [
      'Game giáo dục cho trẻ em',
      'Hoạt cảnh và storytelling',
      'Mô phỏng khái niệm khoa học',
      'Tạo presentations tương tác',
      'Prototype ứng dụng đơn giản'
    ],
    competitions: [
      'Scratch Programming Contest',
      'Code.org Hour of Code',
      'MIT Scratch Competition',
      'Vietnam Programming Contest for Students',
      'Creative Computing Challenge'
    ]
  },
  {
    id: 'scratch-sprites-sounds',
    title: 'Sprites và Âm Thanh',
    description:
      'Tìm hiểu cách sử dụng nhiều sprites, thêm âm thanh và tạo tương tác',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'animation',
    objectives: [
      'Thêm và tùy chỉnh nhiều sprites',
      'Sử dụng âm thanh trong dự án',
      'Tạo tương tác giữa các sprites',
      'Hiểu khái niệm broadcasting và messaging'
    ],
    materials: [
      'Scratch editor',
      'File âm thanh (tùy chọn)',
      'Hình ảnh sprites tùy chỉnh (tùy chọn)'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=3mGpHfPj4J8',
    codeBlocks: [
      'when this sprite clicked',
      'play sound "meow"',
      'change costume to "cat-a"',
      'broadcast "message1"',
      'when I receive "message1"',
      'set size to 150%',
      'show',
      'hide'
    ],
    exercises: [
      {
        id: 'ex1-multiple-sprites',
        title: 'Cuộc Trò Chuyện Giữa Các Sprites',
        description: 'Tạo đối thoại giữa mèo và chó',
        difficulty: 'Dễ',
        requiredBlocks: [
          'when green flag clicked',
          'say "Xin chào!" for 2 seconds',
          'broadcast "turn"',
          'when I receive "turn"',
          'say "Chào bạn!" for 2 seconds'
        ],
        expectedBehavior: 'Mèo chào trước, rồi chó chào lại',
        hints: [
          'Mỗi sprite có script riêng',
          'Dùng broadcast để gửi tin nhắn',
          'Sprite khác nhận tin nhắn với "when I receive"',
          'Đặt tên tin nhắn dễ hiểu'
        ]
      },
      {
        id: 'ex2-sound-interaction',
        title: 'Tương Tác Với Âm Thanh',
        description: 'Tạo piano đơn giản với các phím có âm thanh khác nhau',
        difficulty: 'Trung bình',
        requiredBlocks: [
          'when this sprite clicked',
          'play sound "C4"',
          'change color effect by 25',
          'wait 0.5 seconds',
          'clear graphic effects'
        ],
        expectedBehavior: 'Click vào sprite phát âm và đổi màu',
        hints: [
          'Mỗi sprite như một phím đàn',
          'Gán âm thanh khác nhau cho mỗi sprite',
          'Hiệu ứng màu sắc khi click',
          'Reset hiệu ứng sau khi phát âm'
        ]
      }
    ],
    realWorldApplications: [
      'Ứng dụng âm nhạc giáo dục',
      'Game tương tác đa nhân vật',
      'Mô phỏng hội thoại và giao tiếp',
      'Ứng dụng học ngôn ngữ',
      'Interactive storytelling'
    ],
    competitions: [
      'Scratch Animation Festival',
      'International Scratch Day',
      'Creative Expression Contest',
      'Educational Game Challenge',
      'Digital Storytelling Awards'
    ]
  },
  {
    id: 'scratch-variables-logic',
    title: 'Biến và Logic',
    description:
      'Sử dụng biến để lưu trữ dữ liệu và câu lệnh điều kiện để tạo logic phức tạp',
    difficulty: 'Trung bình',
    duration: '75 phút',
    category: 'interactive',
    objectives: [
      'Hiểu khái niệm biến và cách sử dụng',
      'Sử dụng câu lệnh if-else',
      'Tạo chương trình tương tác với input',
      'Xây dựng logic phức tạp với nhiều điều kiện'
    ],
    materials: [
      'Scratch editor',
      'Notebook để ghi chú logic',
      'Ý tưởng cho game đơn giản'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1509048191080-d2e2678e67b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=G6N9RNqiJyE',
    codeBlocks: [
      'set score to 0',
      'change score by 1',
      'if touching edge then',
      'if key space pressed?',
      'ask "What\'s your name?" and wait',
      'answer',
      'if answer = "yes" then',
      'else',
      'random 1 to 10'
    ],
    exercises: [
      {
        id: 'ex1-score-system',
        title: 'Hệ Thống Điểm Số',
        description: 'Tạo game đơn giản với hệ thống tính điểm',
        difficulty: 'Trung bình',
        requiredBlocks: [
          'when green flag clicked',
          'set score to 0',
          'when this sprite clicked',
          'change score by 1',
          'say "Score:" join score for 1 seconds'
        ],
        expectedBehavior: 'Click vào sprite để tăng điểm và hiển thị',
        hints: [
          'Tạo biến "score" trước khi sử dụng',
          'Khởi tạo điểm về 0 khi bắt đầu',
          'Tăng điểm khi click sprite',
          'Hiển thị điểm hiện tại'
        ]
      },
      {
        id: 'ex2-guessing-game',
        title: 'Game Đoán Số',
        description: 'Tạo game đoán số ngẫu nhiên với phản hồi',
        difficulty: 'Khó',
        requiredBlocks: [
          'set random number to random 1 to 10',
          'ask "Guess a number (1-10)" and wait',
          'if answer = random number then',
          'say "Correct!" for 2 seconds',
          'else',
          'say "Try again!" for 2 seconds'
        ],
        expectedBehavior: 'Người chơi đoán số, chương trình phản hồi đúng/sai',
        hints: [
          'Tạo biến để lưu số ngẫu nhiên',
          'Sử dụng "random 1 to 10" tạo số bất kỳ',
          'So sánh câu trả lời với số đã tạo',
          'Đưa ra phản hồi phù hợp'
        ]
      }
    ],
    realWorldApplications: [
      'Game giáo dục với scoring',
      'Quiz và assessment tools',
      'Calculator đơn giản',
      'Form nhập liệu tương tác',
      'Simulation với parameter'
    ],
    competitions: [
      'Logic Programming Challenge',
      'Educational Game Development',
      'Interactive Media Contest',
      'Problem Solving with Code',
      'Youth Innovation Awards'
    ]
  },
  {
    id: 'scratch-game-development',
    title: 'Phát Triển Game',
    description:
      'Tạo game hoàn chỉnh với collision detection, power-ups và multiple levels',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    category: 'games',
    objectives: [
      'Thiết kế gameplay và game mechanics',
      'Implement collision detection',
      'Tạo hệ thống level và progression',
      'Thêm power-ups và special effects'
    ],
    materials: [
      'Scratch editor',
      'Sprites cho game (player, enemies, items)',
      'Background images',
      'Sound effects',
      'Game design document'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=-4ItfZH06Yk',
    codeBlocks: [
      'when green flag clicked',
      'if touching "enemy" then',
      'change lives by -1',
      'if lives < 1 then',
      'broadcast "game over"',
      'go to x: 0 y: 0',
      'point towards "player"',
      'move 2 steps',
      'if on edge, bounce'
    ],
    exercises: [
      {
        id: 'ex1-avoid-game',
        title: 'Game Tránh Vật Cản',
        description: 'Tạo game player tránh enemies di chuyển ngẫu nhiên',
        difficulty: 'Trung bình',
        requiredBlocks: [
          'when green flag clicked',
          'forever',
          'if key "left arrow" pressed?',
          'change x by -5',
          'if touching "enemy" then',
          'say "Game Over!" for 2 seconds'
        ],
        expectedBehavior: 'Player điều khiển bằng phím mũi tên, tránh enemies',
        hints: [
          'Player di chuyển theo phím mũi tên',
          'Enemies di chuyển tự động',
          'Kiểm tra va chạm liên tục',
          'Kết thúc game khi chạm enemy'
        ]
      },
      {
        id: 'ex2-platform-game',
        title: 'Platform Game Cơ Bản',
        description: 'Tạo game platform với gravity và jumping',
        difficulty: 'Khó',
        requiredBlocks: [
          'when green flag clicked',
          'set gravity to -0.5',
          'change y by gravity',
          'if touching color blue? then',
          'set gravity to 0',
          'if key "space" pressed? and touching color blue?',
          'set gravity to 8'
        ],
        expectedBehavior: 'Player có thể nhảy và chịu tác động của trọng lực',
        hints: [
          'Gravity kéo player xuống liên tục',
          'Nền tảng ngăn player rơi',
          'Space bar để nhảy',
          'Chỉ nhảy được khi đang đứng trên nền'
        ]
      }
    ],
    realWorldApplications: [
      'Mobile game prototyping',
      'Educational game design',
      'Interactive learning tools',
      'Game mechanics testing',
      'User experience prototyping'
    ],
    competitions: [
      'Scratch Game Jam',
      'Youth Game Development Challenge',
      'Educational Game Awards',
      'Indie Game Development Contest',
      'Creative Programming Olympics'
    ]
  },
  {
    id: 'scratch-advanced-features',
    title: 'Tính Năng Nâng Cao',
    description:
      'Khám phá các tính năng nâng cao như custom blocks, clones và pen graphics',
    difficulty: 'Nâng cao',
    duration: '90 phút',
    category: 'advanced',
    objectives: [
      'Tạo và sử dụng custom blocks',
      'Sử dụng clones để tạo nhiều objects',
      'Vẽ graphics với pen extension',
      'Kết hợp tất cả kỹ năng trong dự án phức tạp'
    ],
    materials: [
      'Scratch editor với extensions',
      'Pen extension',
      'Music extension (tùy chọn)',
      'Video sensing extension (tùy chọn)'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=uaU5PW6dF1w',
    codeBlocks: [
      'define draw circle',
      'create clone of myself',
      'when I start as a clone',
      'delete this clone',
      'pen down',
      'pen up',
      'set pen color to red',
      'change pen size by 1'
    ],
    exercises: [
      {
        id: 'ex1-custom-blocks',
        title: 'Custom Blocks cho Shapes',
        description: 'Tạo custom blocks để vẽ các hình học khác nhau',
        difficulty: 'Trung bình',
        requiredBlocks: [
          'define draw square',
          'pen down',
          'repeat 4',
          'move 100 steps',
          'turn 90 degrees',
          'pen up'
        ],
        expectedBehavior: 'Custom block vẽ hình vuông khi gọi',
        hints: [
          'Tạo custom block trong "My Blocks"',
          'Đặt tên mô tả chức năng',
          'Sử dụng pen để vẽ',
          'Có thể thêm parameters cho custom block'
        ]
      },
      {
        id: 'ex2-clone-system',
        title: 'Hệ Thống Clone cho Particles',
        description: 'Tạo hiệu ứng particle bằng clone system',
        difficulty: 'Khó',
        requiredBlocks: [
          'when green flag clicked',
          'repeat 10',
          'create clone of myself',
          'when I start as a clone',
          'point in direction random 1 to 360',
          'repeat 30',
          'move 5 steps',
          'delete this clone'
        ],
        expectedBehavior: 'Tạo nhiều particles bay ra theo hướng ngẫu nhiên',
        hints: [
          'Master sprite tạo clones',
          'Mỗi clone có hành vi riêng',
          'Clones tự xóa sau khi hoàn thành',
          'Giới hạn số lượng clones để tránh lag'
        ]
      }
    ],
    realWorldApplications: [
      'Advanced game development',
      'Data visualization',
      'Artistic programming',
      'Interactive art installations',
      'Educational simulations'
    ],
    competitions: [
      'Advanced Scratch Programming',
      'Creative Computing Showcase',
      'Digital Art with Code',
      'Innovation in Education Technology',
      'International Programming Olympics'
    ]
  }
];

// Scratch programming concepts quiz
export const scratchQuizzes = [
  {
    id: 'quiz-scratch-1',
    lessonId: 'scratch-introduction',
    question: 'Trong Scratch, khối nào được sử dụng để bắt đầu chương trình?',
    options: [
      'when space key pressed',
      'when green flag clicked',
      'when this sprite clicked',
      'forever'
    ],
    correctAnswer: 1,
    explanation:
      'Khối "when green flag clicked" được sử dụng để bắt đầu chương trình khi người dùng click vào lá cờ xanh.'
  },
  {
    id: 'quiz-scratch-2',
    lessonId: 'scratch-sprites-sounds',
    question: 'Để gửi tin nhắn giữa các sprites, chúng ta sử dụng khối nào?',
    options: ['say', 'broadcast', 'ask', 'think'],
    correctAnswer: 1,
    explanation:
      'Khối "broadcast" được sử dụng để gửi tin nhắn đến tất cả sprites trong dự án.'
  },
  {
    id: 'quiz-scratch-3',
    lessonId: 'scratch-variables-logic',
    question: 'Biến trong Scratch được sử dụng để làm gì?',
    options: [
      'Chỉ để hiển thị text',
      'Lưu trữ và thay đổi dữ liệu',
      'Tạo âm thanh',
      'Thay đổi costume'
    ],
    correctAnswer: 1,
    explanation:
      'Biến được sử dụng để lưu trữ dữ liệu như điểm số, tên người chơi, hoặc bất kỳ giá trị nào cần thay đổi trong chương trình.'
  },
  {
    id: 'quiz-scratch-4',
    lessonId: 'scratch-game-development',
    question: 'Để kiểm tra va chạm giữa sprites, ta sử dụng khối nào?',
    options: [
      'touching mouse-pointer?',
      'touching edge?',
      'touching [sprite name]?',
      'key pressed?'
    ],
    correctAnswer: 2,
    explanation:
      'Khối "touching [sprite name]?" kiểm tra xem sprite hiện tại có chạm vào sprite khác hay không.'
  }
];

// Popular Scratch project templates
export const scratchProjectTemplates = [
  {
    id: 'template-platformer',
    title: 'Platform Game Template',
    description: 'Template cơ bản cho game platform với gravity và collision',
    category: 'games',
    difficulty: 'Trung bình',
    features: [
      'Player movement với phím mũi tên',
      'Gravity system',
      'Platform collision detection',
      'Scoring system',
      'Basic enemy AI'
    ],
    scratchUrl: 'https://scratch.mit.edu/projects/platformer-template/'
  },
  {
    id: 'template-animation',
    title: 'Animation Story Template',
    description: 'Template cho tạo animation và kể chuyện',
    category: 'animation',
    difficulty: 'Cơ bản',
    features: [
      'Multiple scenes',
      'Character dialogue',
      'Background music',
      'Smooth transitions',
      'Interactive elements'
    ],
    scratchUrl: 'https://scratch.mit.edu/projects/animation-template/'
  },
  {
    id: 'template-quiz',
    title: 'Interactive Quiz Template',
    description: 'Template cho tạo quiz tương tác với multiple choice',
    category: 'interactive',
    difficulty: 'Trung bình',
    features: [
      'Question database',
      'Score tracking',
      'Timer system',
      'Feedback messages',
      'Results screen'
    ],
    scratchUrl: 'https://scratch.mit.edu/projects/quiz-template/'
  }
];

const scratchData = {
  scratchLessons,
  scratchQuizzes,
  scratchProjectTemplates
};

export default scratchData;
